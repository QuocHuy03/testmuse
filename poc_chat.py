#!/usr/bin/env python3
"""Probe the real-compute routes over Noise: chat.poke and a minimal chat.stream.

These (unlike navigation/identity.subscribe which are daemon-cache served) are
reverse-proxied to the agent process, so they should force the VM to actually
run -> candidate keepalive/resume triggers. This verifies our request encoding
is accepted and shows what the VM returns.
"""
import json
import os
import time
import uuid
from urllib.parse import quote

from curl_cffi import requests as creq
from curl_cffi import CurlWsFlag
from cryptography.hazmat.primitives.asymmetric.x25519 import X25519PrivateKey

import poc_noise as P
import poc_noise_tls as T
import session as S
import noise_transport as NT

CAPS = ["chat_cancel", "delta_stream", "custom_reactions",
        "custom_reactions_facebook_thumbs_up_v1"]


def hdrs(json_body):
    h = [("x-request-id", str(uuid.uuid4())), ("x-app-id", P.APP_ID),
         ("Accept-Language", "en-US")]
    if json_body:
        h.insert(0, ("Content-Type", "application/json"))
    return h


def main():
    http = S.http_session()
    info = S.prepare_connection(http, max_wait=5, verbose=True)
    q = (f"vm_id={quote(info['vm_id'])}&auth_token={quote(info['auth_token'])}"
         f"&notary_token={quote(info['notary_token'])}&app_id={P.APP_ID}"
         f"&request_id={info['request_id']}")
    ws = creq.Session(impersonate="chrome", timeout=25).ws_connect(
        f"wss://{P.GATEWAY_HOST}/v1/noise?{q}", timeout=25)
    print("[ws] connected")

    sym = P.Sym()
    e_priv = X25519PrivateKey.generate(); e_pub = P.raw_pub(e_priv)
    sym.mix_hash(e_pub)
    ws.send(e_pub + sym.encrypt_and_hash(T.encode_client_nonce_msg1(os.urandom(32))), CurlWsFlag.BINARY)
    msg2, _ = ws.recv()
    if isinstance(msg2, str): msg2 = msg2.encode()
    re = msg2[:32]
    sym.mix_hash(re); sym.mix_key(P.dh(e_priv, re))
    rs = sym.decrypt_and_hash(msg2[32:80]); sym.mix_key(P.dh(e_priv, rs))
    sym.decrypt_and_hash(msg2[80:])
    s_priv = X25519PrivateKey.generate(); s_pub = P.raw_pub(s_priv)
    n = sym.encrypt_and_hash(s_pub); sym.mix_key(P.dh(s_priv, re))
    ws.send(n + sym.encrypt_and_hash(b""), CurlWsFlag.BINARY)
    k_send, k_recv = P.hkdf(sym.ck, b"", 2)
    send = NT.SendCipher(k_send); recv = NT.RecvCipher(k_recv)
    print("[split] transport ready")

    node_id = str(uuid.uuid4())
    requests_to_try = [
        # (label, verb, path, body-dict-or-None)
        ("chat.poke", "POST", "/chat/poke", {}),
        ("chat.stream", "POST", "/chat/stream",
         {"items": [{"type": "text", "text": "ping"}], "node_id": node_id, "capabilities": CAPS}),
    ]
    sid = 0
    for label, verb, path, bodydict in requests_to_try:
        sid += 1
        body = json.dumps(bodydict).encode() if bodydict is not None else b""
        for fr in NT.build_app_request_frames(send, "daemon", verb, path,
                                              hdrs(bool(body)), body, True, stream_id=sid):
            ws.send(fr, CurlWsFlag.BINARY)
        print(f"[req#{sid}] {label}: {verb} {path} body={body[:80]!r}")

    print("[recv] reading 20s ...")
    buf = {}; t0 = time.time()
    while time.time() - t0 < 20:
        try:
            piece, _ = ws.recv()
        except Exception as exc:
            print("[recv] end:", type(exc).__name__, str(exc)[:100]); break
        if isinstance(piece, str): piece = piece.encode()
        if not piece: continue
        try:
            cid, idx, tot, payload = NT.decode_transport_frame(recv.decrypt(piece))
            if tot == 1: sr = payload
            else:
                buf.setdefault(cid, {})[idx] = payload
                if len(buf[cid]) < tot: continue
                sr = b"".join(buf.pop(cid)[i] for i in range(tot))
            r = NT.decode_service_response(sr)
            if r["kind"] == "response":
                print(f"  [resp] stream={r['stream_id']} status={r['status']} "
                      f"ct={dict(r['headers']).get('content-type')} body={len(r['body'])}B end={r['end_body']}")
                if r["body"]: print("    body:", r["body"][:200])
            elif r["kind"] == "bodyChunk":
                print(f"  [chunk] stream={r['stream_id']} {len(r['data'])}B end={r['end_body']}")
                if r["data"]: print("    data:", r["data"][:200])
            elif r["kind"] == "reset":
                print(f"  [reset] stream={r['stream_id']} code={r['code']} reason={r['reason']}")
        except Exception as exc:
            print("  [decode err]", type(exc).__name__, str(exc)[:100])
    ws.close()


if __name__ == "__main__":
    main()
