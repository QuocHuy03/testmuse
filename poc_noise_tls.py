#!/usr/bin/env python3
"""Decisive test: is the gateway 401 a TLS/client fingerprint block?

Re-runs the exact same token flow + WS URL as poc_noise.py, but opens the
WebSocket with curl_cffi impersonating Chrome's TLS stack. If the upgrade now
succeeds (101) where the plain Python client got 401, the wall is TLS/edge
fingerprinting (-> headless is feasible with impersonation). If it still 401s,
the block is token/credential binding, not transport.
"""
import os
import uuid
from urllib.parse import quote

from curl_cffi import requests as creq
from curl_cffi import CurlWsFlag

import poc_noise as P  # reuse Sym, dh, raw_pub
import session as S     # capture-verified session/wake/token flow
from cryptography.hazmat.primitives.asymmetric.x25519 import X25519PrivateKey


def encode_client_nonce_msg1(nonce: bytes) -> bytes:
    """encodeNoiseClientNonceMessage1(nonce) from 2kzwdkemdsxkx.js:847.
    protobuf field1 (tag 0x0A, LEN) = 32-byte client nonce -> 0x0A 0x20 || nonce.
    This is the REAL confidential-VM msg1 payload; {field2=1} is only the
    non-RV fallback branch and the gateway closes on it."""
    assert len(nonce) == 32
    return b"\x0a\x20" + nonce


def decode_rv_challenge(buf: bytes):
    """decodeNoiseRvChallenge (g, 2kzwdkemdsxkx.js:867). Returns dict or None.
    f1(0x0A)=attestation bytes, f2(0x10)=state varint (1=unprovisioned,
    2=provisioned), f3(0x1A)=vmNonce[32], f4(0x22)=vmProof[32] (provisioned)."""
    att = state = vm_nonce = vm_proof = None
    i, n = 0, len(buf)
    while i < n:
        tag = buf[i]; i += 1
        field, wire = tag >> 3, tag & 7
        if wire == 2:  # length-delimited
            ln = buf[i]; i += 1  # all lengths here are < 128
            val = buf[i:i + ln]; i += ln
            if field == 1: att = val
            elif field == 3: vm_nonce = val
            elif field == 4: vm_proof = val
        elif wire == 0:  # varint (state is small)
            val = buf[i]; i += 1
            if field == 2: state = val
        else:
            return None
    if att is None or state not in (1, 2) or (vm_nonce and len(vm_nonce) != 32):
        return None
    return {
        "state": "unprovisioned" if state == 1 else "provisioned",
        "attestation": att, "vmNonce": vm_nonce, "vmProof": vm_proof,
    }


def main():
    s = S.http_session()
    # Ensure the VM is RUNNING (wake if suspended), then mint a FRESH token —
    # capture-verified order, so we never connect with a token bound to a
    # suspended VM. See session.py.
    info = S.prepare_connection(s)
    vm_id = info["vm_id"]
    auth_token = info["auth_token"]
    notary_token = info["notary_token"]
    if not auth_token or not notary_token:
        print("[token] missing auth/notary token; aborting")
        return

    # URL param order matches the browser capture exactly:
    # vm_id, auth_token, notary_token, app_id, request_id.
    q = (f"vm_id={quote(vm_id)}&auth_token={quote(auth_token)}"
         f"&notary_token={quote(notary_token)}&app_id={P.APP_ID}"
         f"&request_id={info['request_id']}")
    url = f"wss://{P.GATEWAY_HOST}/v1/noise?{q}"

    # curl_cffi WebSocket with Chrome impersonation.
    session = creq.Session(impersonate="chrome", timeout=25)
    print("[ws] connecting with Chrome-impersonated TLS ...")
    try:
        ws = session.ws_connect(url, timeout=25)
    except Exception as exc:
        print(f"[ws] connect FAILED: {type(exc).__name__}: {str(exc)[:200]}")
        return
    print("[ws] CONNECTED (101) — TLS fingerprint was the wall!")

    # Try NoiseXX msg1 -> msg2 to confirm we can go further.
    try:
        sym = P.Sym()
        e_priv = X25519PrivateKey.generate()
        e_pub = P.raw_pub(e_priv)
        sym.mix_hash(e_pub)
        # REAL confidential-VM msg1 payload: encodeNoiseClientNonceMessage1(
        # createNoiseClientNonce()) = 0x0a 0x20 || 32-byte random nonce
        # (2kzwdkemdsxkx.js:843-850). The old {field2=1} ([0x10,0x01]) is the
        # non-RV fallback branch and the gateway closes the socket on it.
        client_nonce = os.urandom(32)
        ct1 = sym.encrypt_and_hash(encode_client_nonce_msg1(client_nonce))
        msg1 = e_pub + ct1
        ws.send(msg1, CurlWsFlag.BINARY)
        print(f"[noise] sent msg1 ({len(msg1)} bytes, BINARY)")
        chunks = []
        while True:
            try:
                piece, frame = ws.recv()
            except Exception as rexc:
                print(f"[noise] recv ended: {type(rexc).__name__}: {str(rexc)[:120]}")
                break
            flags = getattr(frame, "flags", None)
            print(f"[noise] frame: {len(piece)} bytes flags={flags}")
            if piece:
                chunks.append(piece)
            if not (flags and (flags & CurlWsFlag.CONT)):
                break
        data = b"".join(chunks)
        if isinstance(data, str):
            data = data.encode()
        print(f"[noise] got msg2 ({len(data)} bytes)")
        if len(data) == 0:
            print("  (server closed with no payload — msg1 likely rejected)")
            ws.close(); return
        if len(data) >= 96:
            re = data[:32]
            sym.mix_hash(re)
            sym.mix_key(P.dh(e_priv, re))
            rs = sym.decrypt_and_hash(data[32:80])
            sym.mix_key(P.dh(e_priv, rs))
            payload2 = sym.decrypt_and_hash(data[80:])
            print(f"[noise] DECRYPTED msg2 payload {len(payload2)} bytes")
            print("  hex:", payload2[:300].hex())
            rv = decode_rv_challenge(payload2)
            if rv:
                print(f"[rv] state={rv['state']} "
                      f"attestation={len(rv['attestation'])}B "
                      f"vmNonce={rv['vmNonce'].hex() if rv['vmNonce'] else None} "
                      f"vmProof={'set' if rv['vmProof'] else None}")
            else:
                print("[rv] could not decode RV challenge from payload2")
    except Exception as exc:
        print(f"[noise] step failed: {type(exc).__name__}: {str(exc)[:200]}")
    finally:
        try:
            ws.close()
        except Exception:
            pass


if __name__ == "__main__":
    main()
