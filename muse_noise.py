#!/usr/bin/env python3
"""muse.ai / Meta Hatch confidential-VM client over Noise — single self-contained file.

Everything needed to talk to the Hatch agent from pure Python (no browser):
  * TLS via curl_cffi Chrome impersonation (the gateway 401s a plain TLS stack)
  * NoiseXX handshake  (Noise_XX_25519_AESGCM_SHA256)
  * NoiseTransport app layer (protobuf-over-Noise, AES-GCM, chunked)
  * HTTP session (cookie auth, optional proxy, ignores stale OS proxy)
  * connect() that RETRIES through the transient 502 "Refused WebSocket upgrade"
    (that 502 is just the confidential VM cold-starting / being woken on demand)
  * high-level MuseClient.chat(prompt) -> {text, videos[], images[]}

Key facts learned the hard way:
  - `vm_state` from /api/session (SUSPENDED/RUNNING) is a cost-hibernation flag and
    does NOT gate usability. The daemon fronts the VM and wakes compute ON DEMAND.
  - You do NOT need wake/keepalive. The ONLY requirement is a LIVE cookie.
  - To make the agent actually run you must open `chat.subscribe` BEFORE `chat.stream`
    (a bare chat.stream only gets a daemon routing-ack; the agent never runs).

Requires: pip install curl_cffi cryptography requests

Quickstart:
    from muse_noise import MuseClient
    c = MuseClient(cookies="cookies.txt")                 # or proxy="ip:port"
    r = c.chat("Tạo video 5s cảnh hoàng hôn trên biển, gửi link tải")
    print(r["text"]); print(r["videos"])                  # -> [download urls]
"""
import hashlib
import hmac
import json
import os
import struct
import time
import uuid
from urllib.parse import quote

from curl_cffi import requests as creq
from curl_cffi import CurlWsFlag
from curl_cffi.requests.exceptions import RequestException as _CurlReqError
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric.x25519 import (
    X25519PrivateKey, X25519PublicKey)
from cryptography.hazmat.primitives.ciphers.aead import AESGCM

BASE = os.environ.get("MUSE_BASE", "https://muse.ai").rstrip("/")
GATEWAY_HOST = "hatch.metaaivm.com"
APP_ID = "hatch-web"
# curl_cffi impersonation target: picks a real, self-consistent Chrome TLS (JA3/JA4)
# + User-Agent + client-hints set. Keep HTTP and WebSocket on the SAME target so the
# fingerprint never contradicts itself (that mismatch is what scanners flag).
IMPERSONATE = os.environ.get("MUSE_IMPERSONATE", "chrome")
CAPS = ["chat_cancel", "delta_stream", "custom_reactions",
        "custom_reactions_facebook_thumbs_up_v1"]
SERVICE = {"daemon": 0, "sentinel": 1, "vault": 2, "authd": 3}
MAX_CHUNK = 65489


# ======================================================================= utils
def _proxy_url(p):
    if not p:
        return None
    return p if "://" in p else "http://" + p


def _ts():
    return time.strftime("%H:%M:%S")


# =============================================================== NoiseXX crypto
def _sha256(b): return hashlib.sha256(b).digest()
def _hmac(k, d): return hmac.new(k, d, hashlib.sha256).digest()


def _hkdf(ck, ikm, num):
    tmp = _hmac(ck, ikm)
    o1 = _hmac(tmp, b"\x01")
    o2 = _hmac(tmp, o1 + b"\x02")
    if num == 2:
        return o1, o2
    return o1, o2, _hmac(tmp, o2 + b"\x03")


class _Sym:
    """NoiseXX symmetric state (Noise_XX_25519_AESGCM_SHA256)."""
    def __init__(self):
        name = b"Noise_XX_25519_AESGCM_SHA256"
        self.h = name + b"\x00" * (32 - len(name))
        self.ck = self.h
        self.k = None
        self.n = 0
        self.mix_hash(b"")

    def mix_hash(self, d): self.h = _sha256(self.h + d)

    def mix_key(self, ikm):
        self.ck, self.k = _hkdf(self.ck, ikm, 2); self.n = 0

    def _nonce(self): return b"\x00\x00\x00\x00" + self.n.to_bytes(8, "big")

    def encrypt_and_hash(self, p):
        c = p if self.k is None else AESGCM(self.k).encrypt(self._nonce(), p, self.h)
        if self.k is not None: self.n += 1
        self.mix_hash(c); return c

    def decrypt_and_hash(self, c):
        p = c if self.k is None else AESGCM(self.k).decrypt(self._nonce(), c, self.h)
        if self.k is not None: self.n += 1
        self.mix_hash(c); return p


def _dh(priv, peer): return priv.exchange(X25519PublicKey.from_public_bytes(peer))
def _raw_pub(priv): return priv.public_key().public_bytes(
    serialization.Encoding.Raw, serialization.PublicFormat.Raw)


def _encode_client_nonce_msg1(nonce):
    assert len(nonce) == 32
    return b"\x0a\x20" + nonce           # encodeNoiseClientNonceMessage1


def _handshake(ws):
    """NoiseXX initiator on an open ws. Returns (send_cipher, recv_cipher) or None."""
    sym = _Sym()
    e = X25519PrivateKey.generate(); epub = _raw_pub(e)
    sym.mix_hash(epub)
    ws.send(epub + sym.encrypt_and_hash(_encode_client_nonce_msg1(os.urandom(32))), CurlWsFlag.BINARY)
    msg2, _ = ws.recv()
    if isinstance(msg2, str): msg2 = msg2.encode()
    if len(msg2) < 96:
        return None
    re = msg2[:32]
    sym.mix_hash(re); sym.mix_key(_dh(e, re))
    rs = sym.decrypt_and_hash(msg2[32:80]); sym.mix_key(_dh(e, rs))
    sym.decrypt_and_hash(msg2[80:])
    s = X25519PrivateKey.generate()
    n = sym.encrypt_and_hash(_raw_pub(s)); sym.mix_key(_dh(s, re))
    ws.send(n + sym.encrypt_and_hash(b""), CurlWsFlag.BINARY)
    k1, k2 = _hkdf(sym.ck, b"", 2)
    return _SendCipher(k1), _RecvCipher(k2)


# =========================================================== transport protobuf
def _varint(n):
    out = bytearray()
    while True:
        b = n & 0x7F; n >>= 7
        out.append(b | 0x80 if n else b)
        if not n: return bytes(out)


def _tag(f, w): return _varint((f << 3) | w)
def _lenf(f, d): return _tag(f, 2) + _varint(len(d)) + d
def _vintf(f, v): return _tag(f, 0) + _varint(v)
def _strf(f, s): return _lenf(f, s.encode("utf-8"))


def _enc_header(k, v): return _strf(1, k) + _strf(2, v)


def _enc_app_request(verb, path, headers, body, end_body):
    out = bytearray()
    out += _strf(1, verb) + _strf(2, path)
    for k, v in (headers or []):
        out += _lenf(3, _enc_header(k, v))
    if body:
        out += _lenf(4, body)
    if end_body:
        out += _vintf(5, 1)
    return bytes(out)


def _enc_service_request(service, stream_id, app):
    sf = _vintf(1, stream_id) + _lenf(2, app)           # ServiceFrame
    svc = SERVICE[service]
    return (_vintf(1, svc) if svc else b"") + _lenf(2, sf)   # ServiceRequest (daemon=0 omitted)


def _enc_transport_frame(cid, idx, tot, payload):
    return (_vintf(1, cid & ((1 << 64) - 1)) + _vintf(2, idx)
            + _vintf(3, tot) + _lenf(4, payload))


def _read_varint(buf, i):
    shift = val = 0
    while True:
        b = buf[i]; i += 1
        val |= (b & 0x7F) << shift
        if not (b & 0x80): return val, i
        shift += 7


def _parse_fields(buf):
    out, i, n = {}, 0, len(buf)
    while i < n:
        tag, i = _read_varint(buf, i)
        field, wire = tag >> 3, tag & 7
        if wire == 0: v, i = _read_varint(buf, i)
        elif wire == 2:
            ln, i = _read_varint(buf, i); v = buf[i:i + ln]; i += ln
        elif wire == 5: v = buf[i:i + 4]; i += 4
        elif wire == 1: v = buf[i:i + 8]; i += 8
        else: raise ValueError("bad wire")
        out.setdefault(field, []).append(v)
    return out


class _SendCipher:
    def __init__(self, key): self._g = AESGCM(key); self.n = 0
    def encrypt(self, p):
        ct = self._g.encrypt(b"\x00\x00\x00\x00" + struct.pack(">Q", self.n), p, b"")
        self.n += 1; return ct


class _RecvCipher:
    def __init__(self, key): self._g = AESGCM(key); self.n = 0
    def decrypt(self, c):
        pt = self._g.decrypt(b"\x00\x00\x00\x00" + struct.pack(">Q", self.n), c, b"")
        self.n += 1; return pt


def _frames_for(send, service, verb, path, headers, body, end_body, stream_id):
    sr = _enc_service_request(service, stream_id, _enc_app_request(verb, path, headers, body, end_body))
    cid = int.from_bytes(os.urandom(8), "little", signed=True)
    if not sr:
        chunks = [_enc_transport_frame(cid, 0, 1, b"")]
    else:
        n = max(1, (len(sr) + MAX_CHUNK - 1) // MAX_CHUNK)
        chunks = [_enc_transport_frame(cid, i, n, sr[i * MAX_CHUNK:(i + 1) * MAX_CHUNK]) for i in range(n)]
    return [send.encrypt(c) for c in chunks]


# ===================================================================== HTTP API
def _parse_cookie_header(cookies):
    """Accept a path to a cookie file OR a raw 'a=b; c=d' header -> {name: value}."""
    raw = (open(cookies, encoding="utf-8").read() if os.path.exists(cookies) else cookies).strip()
    jar = {}
    for p in raw.split(";"):
        if "=" in p:
            k, v = p.strip().split("=", 1)
            jar[k.strip()] = v.strip()
    return jar


def _app_api_headers():
    """App-level headers a real muse-web XHR carries. UA / sec-ch-ua / accept /
    accept-encoding are set CONSISTENTLY by curl_cffi's impersonation, so we only
    add the ones impersonation doesn't, and never contradict it."""
    return {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "origin": BASE,
        "referer": BASE + "/",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "priority": "u=1, i",
    }


def http_session(cookies="cookies.txt", proxy=None):
    """A curl_cffi session impersonating a real Chrome (browser TLS/JA3 + UA +
    client-hints), carrying the muse-web header set and the auth cookies. Using the
    browser fingerprint for the API calls too is what keeps them from being flagged
    as a non-browser client."""
    u = _proxy_url(proxy)
    s = creq.Session(
        impersonate=IMPERSONATE,
        headers=_app_api_headers(),
        cookies=_parse_cookie_header(cookies),
        proxies=({"http": u, "https": u} if u else None),
        timeout=25,
        trust_env=False,                      # ignore stale OS proxy (e.g. dead Fiddler)
    )
    return s


def read_session(s, timeout=20):
    b = s.get(BASE + "/api/session?vm_state=live", timeout=timeout).json()
    vid = b.get("vm_id")
    return {"vm_id": vid, "vm_state": b.get("vm_state"),
            "endpoint_url": b.get("endpoint_url") or f"wss://{vid}.metaaivm.com/"}


def mint_token(s, endpoint_url, timeout=20, force_refresh=False):
    body = {"vmAddress": endpoint_url}
    if force_refresh: body["force_refresh"] = True
    b = s.post(BASE + "/api/hatch/token", json=body, timeout=timeout).json()
    return (b.get("token") or b.get("auth_token") or b.get("gateway_token"),
            b.get("notary_token") or b.get("notaryToken"))


def wake(s, vm_id, attempt=0, timeout=10):
    try:
        return s.post(BASE + "/api/hatch/vm/wake",
                      json={"vm_id": vm_id, "retry_count": attempt, "connect_attempt_id": str(uuid.uuid4())},
                      timeout=timeout).json().get("status")
    except (_CurlReqError, ValueError):
        return None


# ===================================================================== client
class MuseClient:
    """High-level Hatch client. Give it live cookies (and optional proxy) and call
    chat(). It handles TLS, the Noise handshake, the 502 cold-start retry, and the
    chat.subscribe->chat.stream dance that actually runs the agent."""

    def __init__(self, cookies="cookies.txt", proxy=None, verbose=True):
        self.cookies = cookies
        self.proxy = proxy or os.environ.get("PROXY") or None
        self.verbose = verbose
        self.http = http_session(cookies, self.proxy)

    def _log(self, *a):
        if self.verbose: print(f"[{_ts()}]", *a, flush=True)

    def session(self):
        return read_session(self.http)

    def connect(self, max_tries=240, wake_every=8):
        """Open a Noise connection, retrying through 502 cold-starts until 101.

        A 502 'Refused WebSocket upgrade' just means the confidential VM hasn't
        booted yet; cold-start can take SEVERAL MINUTES (esp. a fresh account), so
        we retry patiently (first 40 at ~1s, then backing off to ~8s -> ~240 tries
        ≈ 25+ min) and nudge /vm/wake every `wake_every` attempts, exactly like the
        web app. Returns (ws, send, recv, sess)."""
        prox = _proxy_url(self.proxy)
        for attempt in range(1, max_tries + 1):
            try:
                sess = read_session(self.http)
                # nudge the scheduler to boot the VM (fire-and-forget hint)
                if sess.get("vm_id") and (attempt == 1 or attempt % wake_every == 0):
                    wake(self.http, sess["vm_id"], attempt)
                auth, notary = mint_token(self.http, sess["endpoint_url"], force_refresh=(attempt > 1))
                if not auth or not notary:
                    self._log(f"connect #{attempt}: token missing"); time.sleep(1); continue
                q = (f"vm_id={quote(sess['vm_id'])}&auth_token={quote(auth)}"
                     f"&notary_token={quote(notary)}&app_id={APP_ID}&request_id={uuid.uuid4()}")
                # same impersonation as the HTTP side + the app Origin the browser
                # sends on the cross-site WS upgrade (UA/sec-ch-ua come from impersonate)
                s = creq.Session(
                    impersonate=IMPERSONATE, timeout=25,
                    headers={"Origin": BASE, "accept-language": "en-US,en;q=0.9"},
                    proxies=({"http": prox, "https": prox} if prox else None),
                )
                ws = s.ws_connect(f"wss://{GATEWAY_HOST}/v1/noise?{q}", timeout=25)
            except Exception as exc:
                msg = str(exc)[:90]; is502 = "502" in msg or "Refused WebSocket" in msg
                if self.verbose and (attempt == 1 or attempt % 10 == 0 or not is502):
                    self._log(f"connect #{attempt} {'(502 cold-start, retrying)' if is502 else 'fail'}: {msg}")
                time.sleep(1.0 if attempt < 40 else min(1.5 ** (attempt - 40), 8.0)); continue
            hs = _handshake(ws)
            if hs is None:
                try: ws.close()
                except Exception: pass
                time.sleep(1); continue
            self._log(f"connected (101) on attempt #{attempt} [vm_state={sess['vm_state']}]")
            return ws, hs[0], hs[1], sess
        raise RuntimeError("could not establish Noise connection (gave up)")

    @staticmethod
    def _headers(json_body=True):
        h = [("x-request-id", str(uuid.uuid4())), ("x-app-id", APP_ID), ("Accept-Language", "en-US")]
        if json_body: h.insert(0, ("Content-Type", "application/json"))
        return h

    def chat(self, prompt, timeout=240, on_text=None):
        """Send one chat message and collect the agent's reply.

        Returns {"text": str, "videos": [url...], "images": [url...],
                 "status": "completed"|"timeout", "events": int}.
        """
        ws, send, recv, sess = self.connect()
        try:
            # 1) subscribe to the chat channel FIRST (else the agent never runs)
            for fr in _frames_for(send, "daemon", "POST", "/chat/subscribe",
                                  self._headers(), json.dumps({"capabilities": CAPS}).encode(), True, 1):
                ws.send(fr, CurlWsFlag.BINARY)
            time.sleep(0.4)
            # 2) send the message
            body = json.dumps({"items": [{"type": "text", "text": prompt}],
                               "node_id": str(uuid.uuid4()), "capabilities": CAPS}).encode()
            for fr in _frames_for(send, "daemon", "POST", "/chat/stream", self._headers(), body, True, 2):
                ws.send(fr, CurlWsFlag.BINARY)
            self._log(f"sent chat.stream: {prompt!r}")

            text, videos, images = "", [], []
            buf, t0, n = {}, time.time(), 0
            while time.time() - t0 < timeout:
                try:
                    piece, _ = ws.recv()
                except Exception:
                    break
                if isinstance(piece, str): piece = piece.encode()
                if not piece: continue
                try:
                    cid, idx, tot, payload = self._decode_frame(recv.decrypt(piece))
                except Exception:
                    continue
                if tot == 1:
                    sr = payload
                else:
                    buf.setdefault(cid, {})[idx] = payload
                    if len(buf[cid]) < tot: continue
                    sr = b"".join(buf.pop(cid)[i] for i in range(tot))
                ev = self._event(sr)
                if ev is None: continue
                n += 1
                et = ev.get("event") or ev.get("type")
                p = ev.get("payload", {})
                if et == "delta.text_append":
                    t = p.get("text") or p.get("delta") or p.get("content") or ""
                    text += t
                    if t and on_text: on_text(t)
                elif et == "delta.presentation":
                    for v in (p.get("data", {}) or {}).get("videos", []) or []:
                        url = (v.get("variants", {}) or {}).get("original") or v.get("path")
                        if url: videos.append(url)
                    for im in (p.get("data", {}) or {}).get("images", []) or []:
                        url = (im.get("variants", {}) or {}).get("original") or im.get("path")
                        if url: images.append(url)
                elif et == "delta.message_done":
                    return {"text": text, "videos": videos, "images": images,
                            "status": "completed", "events": n}
            return {"text": text, "videos": videos, "images": images,
                    "status": "timeout", "events": n}
        finally:
            try: ws.close()
            except Exception: pass

    @staticmethod
    def _decode_frame(pt):
        f = _parse_fields(pt)
        return (f.get(1, [0])[0], f.get(2, [0])[0], f.get(3, [1])[0], f.get(4, [b""])[0])

    @staticmethod
    def _event(sr):
        try:
            sf = _parse_fields(_parse_fields(sr).get(1, [b""])[0])
            for fld in (3, 4):           # response / body_chunk carry the ndjson event
                if fld in sf:
                    data = _parse_fields(sf[fld][0]).get(1, [b""])[0]
                    if data:
                        return json.loads(data.decode("utf-8", "replace"))
        except Exception:
            return None
        return None


def download(url, out_path, cookies="cookies.txt", proxy=None, timeout=120):
    """Download a media URL (e.g. a generated video) using the auth cookies."""
    s = http_session(cookies, proxy)
    r = s.get(url, timeout=timeout)
    r.raise_for_status()
    with open(out_path, "wb") as f:
        f.write(r.content)
    return len(r.content)


if __name__ == "__main__":
    import sys
    ck = os.environ.get("COOKIES", "cookies.txt")
    prompt = sys.argv[1] if len(sys.argv) > 1 else "Say hello in one short sentence."
    c = MuseClient(cookies=ck)
    print("vm:", c.session())
    r = c.chat(prompt, on_text=lambda t: print(t, end="", flush=True))
    print("\n---")
    print("status:", r["status"], "| events:", r["events"])
    if r["videos"]: print("videos:", r["videos"])
    if r["images"]: print("images:", r["images"])
