#!/usr/bin/env python3
"""NoiseTransport app-layer framing in pure Python.

Reproduces NoiseTransport.#I (2kzwdkemdsxkx.js:545-568): an app request is
  ApplicationRequest{verb,path,headers,body,end_body}
  -> ServiceFrame{stream_id, request=...}
  -> ServiceRequest{service, payload=ServiceFrame}
  -> NoiseTransportFrame{chunk_id, chunk_index, total_chunks, payload=ServiceRequest}
  -> AES-GCM(sendKey, counterNonce, NoiseTransportFrame, ad=empty)  == one ws frame

Protos (from the embedded fileDesc blobs):
  NoiseTransportFrame: int64 chunk_id=1; uint32 chunk_index=2; uint32 total_chunks=3; bytes payload=4
  ServiceRequest:      ServiceType service=1 (enum varint); bytes payload=2
  ServiceFrame:        int64 stream_id=1; ApplicationRequest request=2 (oneof kind)
  ApplicationRequest:  string verb=1; string path=2; repeated Header headers=3; bytes body=4; bool end_body=5
  Header:              string key=1; string value=2
  ServiceType enum:    daemon=0, sentinel=1, vault=2, authd=3
"""
import os
import struct

from cryptography.hazmat.primitives.ciphers.aead import AESGCM

SERVICE = {"daemon": 0, "sentinel": 1, "vault": 2, "authd": 3}
MAX_CHUNK = 65489


# ---- protobuf wire helpers ----
def _varint(n: int) -> bytes:
    out = bytearray()
    while True:
        b = n & 0x7F
        n >>= 7
        if n:
            out.append(b | 0x80)
        else:
            out.append(b)
            return bytes(out)


def _tag(field: int, wire: int) -> bytes:
    return _varint((field << 3) | wire)


def _len_field(field: int, data: bytes) -> bytes:
    return _tag(field, 2) + _varint(len(data)) + data


def _varint_field(field: int, value: int) -> bytes:
    return _tag(field, 0) + _varint(value)


def _str_field(field: int, s: str) -> bytes:
    return _len_field(field, s.encode("utf-8"))


# ---- message encoders ----
def enc_header(key: str, value: str) -> bytes:
    return _str_field(1, key) + _str_field(2, value)


def enc_application_request(verb, path, headers=None, body=b"", end_body=True) -> bytes:
    out = bytearray()
    out += _str_field(1, verb)
    out += _str_field(2, path)
    for k, v in (headers or []):
        out += _len_field(3, enc_header(k, v))
    if body:
        out += _len_field(4, body)
    if end_body:
        out += _varint_field(5, 1)
    return bytes(out)


def enc_service_frame(stream_id: int, app_request: bytes) -> bytes:
    # field1 stream_id (varint), field2 request (LEN, oneof kind)
    return _varint_field(1, stream_id) + _len_field(2, app_request)


def enc_service_request(service: str, service_frame: bytes) -> bytes:
    # proto3: omit service when it's the default (SERVICE_DAEMON == 0)
    svc = SERVICE[service]
    prefix = _varint_field(1, svc) if svc != 0 else b""
    return prefix + _len_field(2, service_frame)


def enc_transport_frame(chunk_id: int, index: int, total: int, payload: bytes) -> bytes:
    # chunk_id is int64; encode as unsigned varint of the two's-complement value
    cid = chunk_id & ((1 << 64) - 1)
    return (_varint_field(1, cid) + _varint_field(2, index)
            + _varint_field(3, total) + _len_field(4, payload))


class SendCipher:
    """AES-GCM transport send cipher: nonce = 0x00000000 || ctr(be64), ad=empty."""
    def __init__(self, key: bytes):
        self._g = AESGCM(key)
        self.n = 0

    def encrypt(self, plaintext: bytes) -> bytes:
        nonce = b"\x00\x00\x00\x00" + struct.pack(">Q", self.n)
        ct = self._g.encrypt(nonce, plaintext, b"")
        self.n += 1
        return ct


class RecvCipher:
    """AES-GCM transport recv cipher: nonce = 0x00000000 || ctr(be64), ad=empty."""
    def __init__(self, key: bytes):
        self._g = AESGCM(key)
        self.n = 0

    def decrypt(self, ct: bytes) -> bytes:
        nonce = b"\x00\x00\x00\x00" + struct.pack(">Q", self.n)
        pt = self._g.decrypt(nonce, ct, b"")
        self.n += 1
        return pt


def _read_varint(buf, i):
    shift = 0
    val = 0
    while True:
        b = buf[i]; i += 1
        val |= (b & 0x7F) << shift
        if not (b & 0x80):
            return val, i
        shift += 7


def _parse_fields(buf):
    """Minimal protobuf parser -> dict {field: [values]} (bytes for LEN, int for varint)."""
    out = {}
    i, n = 0, len(buf)
    while i < n:
        tag, i = _read_varint(buf, i)
        field, wire = tag >> 3, tag & 7
        if wire == 0:
            v, i = _read_varint(buf, i)
        elif wire == 2:
            ln, i = _read_varint(buf, i)
            v = buf[i:i + ln]; i += ln
        elif wire == 5:
            v = buf[i:i + 4]; i += 4
        elif wire == 1:
            v = buf[i:i + 8]; i += 8
        else:
            raise ValueError(f"bad wire {wire}")
        out.setdefault(field, []).append(v)
    return out


def decode_transport_frame(pt: bytes):
    """NoiseTransportFrame -> (chunk_id, index, total, payload)."""
    f = _parse_fields(pt)
    chunk_id = f.get(1, [0])[0]
    index = f.get(2, [0])[0]
    total = f.get(3, [1])[0]
    payload = f.get(4, [b""])[0]
    return chunk_id, index, total, payload


def decode_service_response(sr_bytes: bytes):
    """ServiceResponse{payload=1} -> ServiceFrame -> dict describing kind."""
    sresp = _parse_fields(sr_bytes)
    payload = sresp.get(1, [b""])[0]      # ServiceResponse.payload (bytes) = ServiceFrame
    sf = _parse_fields(payload)
    stream_id = sf.get(1, [0])[0]
    out = {"stream_id": stream_id}
    if 3 in sf:   # response (ApplicationResponse)
        ar = _parse_fields(sf[3][0])
        out["kind"] = "response"
        out["status"] = ar.get(1, [0])[0]
        out["headers"] = [( _parse_fields(h).get(1,[b''])[0].decode('utf8','replace'),
                            _parse_fields(h).get(2,[b''])[0].decode('utf8','replace') )
                          for h in ar.get(2, [])]
        out["body"] = ar.get(3, [b""])[0]
        out["end_body"] = bool(ar.get(4, [0])[0])
    elif 4 in sf:  # body_chunk
        bc = _parse_fields(sf[4][0])
        out["kind"] = "bodyChunk"
        out["data"] = bc.get(1, [b""])[0]
        out["end_body"] = bool(bc.get(2, [0])[0])
    elif 5 in sf:  # reset
        rs = _parse_fields(sf[5][0])
        out["kind"] = "reset"
        out["code"] = rs.get(1, [0])[0]
        out["reason"] = rs.get(2, [b""])[0].decode("utf8", "replace")
    else:
        out["kind"] = "unknown"
    return out


def build_app_request_frames(send_cipher: SendCipher, service, verb, path,
                             headers=None, body=b"", end_body=True, stream_id=1):
    """Return a list of ws binary frames for one ApplicationRequest (chunked+encrypted)."""
    app = enc_application_request(verb, path, headers, body, end_body)
    sf = enc_service_frame(stream_id, app)
    sr = enc_service_request(service, sf)
    # chunkify ServiceRequest bytes into NoiseTransportFrame(s)
    chunk_id = int.from_bytes(os.urandom(8), "little", signed=True)
    frames = []
    if len(sr) == 0:
        chunks = [enc_transport_frame(chunk_id, 0, 1, b"")]
    else:
        n = max(1, (len(sr) + MAX_CHUNK - 1) // MAX_CHUNK)
        chunks = [enc_transport_frame(chunk_id, i, n, sr[i * MAX_CHUNK:(i + 1) * MAX_CHUNK])
                  for i in range(n)]
    for c in chunks:
        frames.append(send_cipher.encrypt(c))
    return frames
