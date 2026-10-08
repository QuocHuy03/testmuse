#!/usr/bin/env python3
"""Decisive resume test: wait for the VM to SUSPEND (after Chrome is closed),
then send a chat.stream from pure Python and see whether it RESUMES the VM
(forces real agent compute), the way a manual chat in the web app does.

Reports: the agent's response to chat.stream, and whether vm_state flips RUNNING.
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


def ts(): return time.strftime("%H:%M:%S")


def send_chat_stream(http, text):
    """Open Noise, send one chat.stream message, read ~45s, return (ok, saw_reply)."""
    info = S.prepare_connection(http, max_wait=5, verbose=False)
    q = (f"vm_id={quote(info['vm_id'])}&auth_token={quote(info['auth_token'])}"
         f"&notary_token={quote(info['notary_token'])}&app_id={P.APP_ID}"
         f"&request_id={info['request_id']}")
    ws = creq.Session(impersonate="chrome", timeout=25).ws_connect(
        f"wss://{P.GATEWAY_HOST}/v1/noise?{q}", timeout=25)
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
    nn = sym.encrypt_and_hash(s_pub); sym.mix_key(P.dh(s_priv, re))
    ws.send(nn + sym.encrypt_and_hash(b""), CurlWsFlag.BINARY)
    k_send, k_recv = P.hkdf(sym.ck, b"", 2)
    send = NT.SendCipher(k_send); recv = NT.RecvCipher(k_recv)
    body = json.dumps({"items": [{"type": "text", "text": text}],
                       "node_id": str(uuid.uuid4()), "capabilities": CAPS}).encode()
    hdrs = [("Content-Type", "application/json"), ("x-request-id", str(uuid.uuid4())),
            ("x-app-id", P.APP_ID), ("Accept-Language", "en-US")]
    for fr in NT.build_app_request_frames(send, "daemon", "POST", "/chat/stream", hdrs, body, True, 1):
        ws.send(fr, CurlWsFlag.BINARY)
    print(f"[{ts()}] chat.stream sent ('{text}'); reading ...", flush=True)
    buf = {}; t0 = time.time(); ok = False; reply_bytes = 0; events = 0
    while time.time() - t0 < 60:
        try:
            piece, _ = ws.recv()
        except Exception:
            break
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
                print(f"[{ts()}]   resp status={r['status']}", flush=True)
                ok = (r["status"] == 200)
            elif r["kind"] == "bodyChunk" and r["data"]:
                events += 1; reply_bytes += len(r["data"])
                if events <= 6:
                    print(f"[{ts()}]   chunk {len(r['data'])}B: {r['data'][:160]}", flush=True)
            elif r["kind"] == "reset":
                print(f"[{ts()}]   RESET code={r['code']} reason={r['reason']}", flush=True)
        except Exception:
            pass
    try: ws.close()
    except Exception: pass
    return ok, reply_bytes, events


def main():
    http = S.http_session()
    wait_s = int(os.environ.get("WAIT_SUSPEND", "1800"))
    print(f"[{ts()}] waiting for VM to SUSPEND (nothing holding it) ... (max {wait_s//60} min)", flush=True)
    t0 = time.time(); suspended = False; last = None
    while time.time() - t0 < wait_s:
        st = S.read_session(http)["vm_state"]
        if st != last:
            print(f"[{ts()}] vm_state={st} (t+{int(time.time()-t0)}s)", flush=True)
            last = st
        if st == "SUSPENDED":
            print(f"[{ts()}] vm_state=SUSPENDED detected -> settling 30s then testing", flush=True)
            suspended = True
            break
        time.sleep(15)
    if not suspended:
        print(f"[{ts()}] never saw SUSPENDED in {wait_s//60} min; testing anyway", flush=True)
    time.sleep(30)  # let it settle fully into suspend
    st_before = S.read_session(http)["vm_state"]
    print(f"[{ts()}] === RESUME TEST === vm_state before = {st_before}", flush=True)
    ok, reply_bytes, events = send_chat_stream(http, "keepalive ping")
    print(f"[{ts()}] chat.stream ok={ok} reply_chunks={events} reply_bytes={reply_bytes}", flush=True)
    # check vm_state after
    for i in range(8):
        time.sleep(10)
        st = S.read_session(http)["vm_state"]
        print(f"[{ts()}]   t+{(i+1)*10}s vm_state={st}", flush=True)
        if st == "RUNNING":
            break
    print(f"[{ts()}] VERDICT: chat.stream {'RESUMED' if ok and events>0 else 'did NOT clearly resume'} the VM "
          f"(got real agent reply={events>0})", flush=True)


if __name__ == "__main__":
    main()
