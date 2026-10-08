#!/usr/bin/env python3
"""Decisive test: does COMPLETING the NoiseXX handshake resume (keep RUNNING) the VM?

RESULT (2026-10-07): NO. This script runs the full handshake msg1 -> msg2 -> msg3
-> split (server accepts it, observedType="standard", empty msg3 payload), then
polls /api/session for 90s: the VM stayed SUSPENDED the whole time. Completing the
Noise handshake does NOT resume the VM.

Cross-checked against the browser capture (login-check.mitm): the VM resumes ~4 min
AFTER a POST /api/hatch/vm/wake, with no Noise handshake involved (the first 101
upgrade happened 8 min after the VM was already RUNNING). So the resume mechanism
is the wake endpoint + patience, not Noise — see keepalive_vm.py. Our PoCs looked
like they "failed" only because they exited after ~160s, shorter than the ~240s
async resume.

Kept as a record of how to drive the handshake end-to-end (TLS via curl_cffi Chrome
impersonation; msg1 = encodeNoiseClientNonceMessage1(nonce); msg3 per
NoiseXXInitiator.writeMessage3/split in 2kzwdkemdsxkx.js:301-320).
"""
import os
import time
from urllib.parse import quote

from curl_cffi import requests as creq
from curl_cffi import CurlWsFlag
from cryptography.hazmat.primitives.asymmetric.x25519 import X25519PrivateKey

import poc_noise as P        # Sym, dh, raw_pub, hkdf
import poc_noise_tls as T    # encode_client_nonce_msg1, decode_rv_challenge
import session as S          # capture-verified session/wake/token flow


def recv_full(ws):
    """Read one logical message (handle CONT fragmentation)."""
    chunks = []
    while True:
        try:
            piece, frame = ws.recv()
        except Exception as exc:
            print(f"  [recv] ended: {type(exc).__name__}: {str(exc)[:120]}")
            break
        flags = getattr(frame, "flags", None)
        if piece:
            chunks.append(piece)
        if not (flags and (flags & CurlWsFlag.CONT)):
            break
    data = b"".join(chunks)
    return data.encode() if isinstance(data, str) else data


def main():
    s = S.http_session()
    info = S.prepare_connection(s)
    vm_id = info["vm_id"]
    if not info["auth_token"] or not info["notary_token"]:
        print("[token] missing auth/notary token; aborting")
        return

    q = (f"vm_id={quote(vm_id)}&auth_token={quote(info['auth_token'])}"
         f"&notary_token={quote(info['notary_token'])}&app_id={P.APP_ID}"
         f"&request_id={info['request_id']}")
    url = f"wss://{P.GATEWAY_HOST}/v1/noise?{q}"

    session = creq.Session(impersonate="chrome", timeout=25)
    print("[ws] connecting (Chrome TLS) ...")
    try:
        ws = session.ws_connect(url, timeout=25)
    except Exception as exc:
        print(f"[ws] connect FAILED: {type(exc).__name__}: {str(exc)[:200]}")
        return
    print("[ws] CONNECTED (101)")

    try:
        sym = P.Sym()
        # --- msg1 ---
        e_priv = X25519PrivateKey.generate()
        e_pub = P.raw_pub(e_priv)
        sym.mix_hash(e_pub)
        client_nonce = os.urandom(32)
        ct1 = sym.encrypt_and_hash(T.encode_client_nonce_msg1(client_nonce))
        ws.send(e_pub + ct1, CurlWsFlag.BINARY)
        print(f"[msg1] sent ({32 + len(ct1)} bytes)")

        # --- msg2 ---
        msg2 = recv_full(ws)
        print(f"[msg2] got {len(msg2)} bytes")
        if len(msg2) < 96:
            print("  msg2 too short — rejected; stop.")
            ws.close(); return
        re = msg2[:32]
        sym.mix_hash(re)
        sym.mix_key(P.dh(e_priv, re))
        rs = sym.decrypt_and_hash(msg2[32:80])         # server static (32)+tag
        sym.mix_key(P.dh(e_priv, rs))
        payload2 = sym.decrypt_and_hash(msg2[80:])
        rv = T.decode_rv_challenge(payload2)
        observed = "confidential" if rv else "standard"
        print(f"[msg2] decrypted payload {len(payload2)}B observedType={observed}")
        if rv:
            # Confidential VM: msg3 must carry the RV response (createNoiseRvMessage3
            # Payload). That needs the notary rvKey + HMAC proofs — not built here.
            print(f"  [rv] state={rv['state']} — RV response (msg3) not implemented; stop.")
            ws.close(); return

        # --- msg3 (standard: empty payload), per writeMessage3 ---
        s_priv = X25519PrivateKey.generate()      # client static s (fresh)
        s_pub = P.raw_pub(s_priv)
        n = sym.encrypt_and_hash(s_pub)           # encrypt static pub (48B)
        sym.mix_key(P.dh(s_priv, re))             # mixKey(DH(s, re))
        a = sym.encrypt_and_hash(b"")             # encrypt empty payload (16B)
        ws.send(n + a, CurlWsFlag.BINARY)
        print(f"[msg3] sent ({len(n) + len(a)} bytes, empty payload)")

        # --- split -> transport keys (completes the handshake) ---
        k1, k2 = P.hkdf(sym.ck, b"", 2)
        print(f"[split] transport keys derived (handshake complete, k1={k1[:4].hex()}..)")

        # NOTE: do NOT recv() here — curl_cffi has no per-recv timeout and the
        # gateway sends nothing unprompted, so a peek would block forever. We poll
        # vm_state over the independent HTTP session while the ws stays open.
        print("[poll] watching vm_state for up to ~90s (ws kept open) ...")
        running = False
        for i in range(18):
            time.sleep(5)
            try:
                st = S.read_session(s)["vm_state"]
            except Exception as exc:
                st = f"err:{type(exc).__name__}"
            print(f"  t+{(i + 1) * 5:>3}s  state={st}")
            if st == "RUNNING":
                running = True
                break
        print(f"[result] VM RUNNING after handshake: {running}")
    except Exception as exc:
        print(f"[err] {type(exc).__name__}: {str(exc)[:200]}")
    finally:
        try:
            ws.close()
        except Exception:
            pass


if __name__ == "__main__":
    main()
