#!/usr/bin/env python3
"""Stage 4: speak the app protocol over the Noise transport (post-split).

Handshake msg1->msg2->msg3->split (as poc_noise_resume), then send an
ApplicationRequest over the transport (noise_transport.build_app_request_frames)
and read + decrypt the response the VM streams back. This is the "live client"
behaviour the browser does (the 195/194-byte frames right after msg3).

Fill REQUESTS below from the JS trace (service/verb/path/headers/body).
"""
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

# First connect-time subscriptions the web app fires (traced from the JS bundle):
# POST {service=daemon} <path> with JSON body "{}", end_body=true. Headers per
# buildNoiseRequestHeaders: Content-Type, x-request-id (fresh uuid), x-app-id,
# Accept-Language. No auth header (auth is in the ws URL).
SUBSCRIBE_PATHS = ["/navigation/subscribe", "/identity/subscribe"]


def app_headers():
    return [
        ("Content-Type", "application/json"),
        ("x-request-id", str(uuid.uuid4())),
        ("x-app-id", P.APP_ID),
        ("Accept-Language", "en-US"),
    ]


def build_requests():
    return [("daemon", "POST", path, app_headers(), b"{}", True)
            for path in SUBSCRIBE_PATHS]


def main():
    http = S.http_session()
    info = S.prepare_connection(http, max_wait=10, verbose=True)
    if not info["auth_token"] or not info["notary_token"]:
        print("[token] missing; abort"); return
    q = (f"vm_id={quote(info['vm_id'])}&auth_token={quote(info['auth_token'])}"
         f"&notary_token={quote(info['notary_token'])}&app_id={P.APP_ID}"
         f"&request_id={info['request_id']}")
    url = f"wss://{P.GATEWAY_HOST}/v1/noise?{q}"
    sess = creq.Session(impersonate="chrome", timeout=25)
    ws = sess.ws_connect(url, timeout=25)
    print("[ws] connected")

    sym = P.Sym()
    e_priv = X25519PrivateKey.generate()
    e_pub = P.raw_pub(e_priv)
    sym.mix_hash(e_pub)
    ws.send(e_pub + sym.encrypt_and_hash(T.encode_client_nonce_msg1(os.urandom(32))),
            CurlWsFlag.BINARY)
    msg2, _ = ws.recv()
    if isinstance(msg2, str):
        msg2 = msg2.encode()
    print(f"[msg2] {len(msg2)} bytes")
    re = msg2[:32]
    sym.mix_hash(re); sym.mix_key(P.dh(e_priv, re))
    rs = sym.decrypt_and_hash(msg2[32:80]); sym.mix_key(P.dh(e_priv, rs))
    sym.decrypt_and_hash(msg2[80:])
    s_priv = X25519PrivateKey.generate(); s_pub = P.raw_pub(s_priv)
    n = sym.encrypt_and_hash(s_pub); sym.mix_key(P.dh(s_priv, re))
    a = sym.encrypt_and_hash(b"")
    ws.send(n + a, CurlWsFlag.BINARY)
    # split: first key = send (C->S), second = recv (S->C)
    k_send, k_recv = P.hkdf(sym.ck, b"", 2)
    send = NT.SendCipher(k_send)
    recv = NT.RecvCipher(k_recv)
    print(f"[split] transport ready (send k={k_send[:4].hex()} recv k={k_recv[:4].hex()})")

    sid = 0
    for (service, verb, path, headers, body, end_body) in build_requests():
        sid += 1
        frames = NT.build_app_request_frames(send, service, verb, path,
                                             headers, body, end_body, stream_id=sid)
        for fr in frames:
            ws.send(fr, CurlWsFlag.BINARY)
        print(f"[req#{sid}] sent {service} {verb} {path} ({len(frames)} frame(s))")

    # read responses for a few seconds
    print("[recv] reading responses ...")
    decoder_buf = {}
    t0 = time.time()
    got = 0
    while time.time() - t0 < 15:
        try:
            piece, frame = ws.recv()
        except Exception as exc:
            print(f"[recv] ended: {type(exc).__name__}: {str(exc)[:120]}")
            break
        if isinstance(piece, str):
            piece = piece.encode()
        if not piece:
            continue
        got += 1
        try:
            pt = recv.decrypt(piece)
            cid, idx, tot, payload = NT.decode_transport_frame(pt)
            # reassemble
            if tot == 1:
                sr = payload
            else:
                decoder_buf.setdefault(cid, {})[idx] = payload
                if len(decoder_buf[cid]) < tot:
                    continue
                sr = b"".join(decoder_buf[cid][i] for i in range(tot))
                decoder_buf.pop(cid, None)
            info_r = NT.decode_service_response(sr)
            if info_r["kind"] == "response":
                print(f"  [resp] stream={info_r['stream_id']} status={info_r['status']} "
                      f"headers={info_r['headers'][:4]} body={len(info_r['body'])}B "
                      f"end={info_r['end_body']}")
                if info_r["body"]:
                    print("    body[:200]:", info_r["body"][:200])
            elif info_r["kind"] == "bodyChunk":
                print(f"  [chunk] stream={info_r['stream_id']} data={len(info_r['data'])}B "
                      f"end={info_r['end_body']}")
                if info_r["data"]:
                    print("    data[:120]:", info_r["data"][:120])
            elif info_r["kind"] == "reset":
                print(f"  [reset] stream={info_r['stream_id']} code={info_r['code']} "
                      f"reason={info_r['reason']}")
        except Exception as exc:
            print(f"  [decrypt/decode err @frame{got}] {type(exc).__name__}: {str(exc)[:120]}")
    print(f"[done] frames received={got}")
    try: ws.close()
    except Exception: pass


if __name__ == "__main__":
    main()
