#!/usr/bin/env python3
"""Pure-Python LIVE Noise client — keep the VM warm without a browser.

Unlike a bare socket-hold, this reproduces what the web app actually does: after
the NoiseXX handshake it opens the app streams (POST /navigation/subscribe,
/identity/subscribe over the Noise transport) and keeps draining the ndjson event
stream the VM pushes back. That makes us a real "live client" to the daemon, which
is what the browser relies on to keep the confidential VM from idle-suspending.

Verified: these subscribes get HTTP 200 (application/x-ndjson) and the VM streams
real events back (e.g. navigation.items.snapshot) — see poc_noise_app.py.

A background thread drains the stream (keeping the socket active); the main loop
polls /api/session, wakes a SUSPENDED/UPDATING VM, and reconnects if the stream
dies. Resume is backend-async and can be slow (minutes), so be patient.

  python keepalive_noise.py              # run until Ctrl+C
  MINUTES=20 python keepalive_noise.py   # bounded run (for measurement)
"""
import os
import threading
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

POLL_EVERY = int(os.environ.get("POLL_EVERY", "15"))
MINUTES = float(os.environ.get("MINUTES", "0"))
SUBSCRIBE_PATHS = ["/navigation/subscribe", "/identity/subscribe"]


def ts():
    return time.strftime("%H:%M:%S")


def app_headers():
    return [("Content-Type", "application/json"),
            ("x-request-id", str(uuid.uuid4())),
            ("x-app-id", P.APP_ID),
            ("Accept-Language", "en-US")]


class LiveConn:
    """One Noise connection: handshake, subscribe, drain stream in a thread."""
    def __init__(self, http):
        self.http = http
        self.ws = None
        self.recv = None
        self.alive = threading.Event()
        self.events = 0
        self._buf = {}
        self._thread = None

    def connect(self):
        info = S.prepare_connection(self.http, max_wait=10, verbose=False)
        if not info["auth_token"] or not info["notary_token"]:
            print(f"[{ts()}] token missing"); return False
        q = (f"vm_id={quote(info['vm_id'])}&auth_token={quote(info['auth_token'])}"
             f"&notary_token={quote(info['notary_token'])}&app_id={P.APP_ID}"
             f"&request_id={info['request_id']}")
        url = f"wss://{P.GATEWAY_HOST}/v1/noise?{q}"
        sess = creq.Session(impersonate="chrome", timeout=25)
        try:
            self.ws = sess.ws_connect(url, timeout=25)
        except Exception as exc:
            print(f"[{ts()}] ws connect failed: {type(exc).__name__}: {str(exc)[:100]}")
            return False
        try:
            sym = P.Sym()
            e_priv = X25519PrivateKey.generate()
            e_pub = P.raw_pub(e_priv)
            sym.mix_hash(e_pub)
            self.ws.send(e_pub + sym.encrypt_and_hash(T.encode_client_nonce_msg1(os.urandom(32))),
                         CurlWsFlag.BINARY)
            msg2, _ = self.ws.recv()
            if isinstance(msg2, str):
                msg2 = msg2.encode()
            if len(msg2) < 96:
                print(f"[{ts()}] msg2 too short; handshake rejected"); return False
            re = msg2[:32]
            sym.mix_hash(re); sym.mix_key(P.dh(e_priv, re))
            rs = sym.decrypt_and_hash(msg2[32:80]); sym.mix_key(P.dh(e_priv, rs))
            sym.decrypt_and_hash(msg2[80:])
            s_priv = X25519PrivateKey.generate(); s_pub = P.raw_pub(s_priv)
            n = sym.encrypt_and_hash(s_pub); sym.mix_key(P.dh(s_priv, re))
            self.ws.send(n + sym.encrypt_and_hash(b""), CurlWsFlag.BINARY)
            k_send, k_recv = P.hkdf(sym.ck, b"", 2)
            send = NT.SendCipher(k_send)
            self.recv = NT.RecvCipher(k_recv)
            for sid, path in enumerate(SUBSCRIBE_PATHS, start=1):
                for fr in NT.build_app_request_frames(send, "daemon", "POST", path,
                                                      app_headers(), b"{}", True, stream_id=sid):
                    self.ws.send(fr, CurlWsFlag.BINARY)
            print(f"[{ts()}] live client up: handshake + {len(SUBSCRIBE_PATHS)} subscriptions")
            self.alive.set()
            self._thread = threading.Thread(target=self._drain, daemon=True)
            self._thread.start()
            return True
        except Exception as exc:
            print(f"[{ts()}] handshake/subscribe failed: {type(exc).__name__}: {str(exc)[:100]}")
            return False

    def _drain(self):
        while self.alive.is_set():
            try:
                piece, _ = self.ws.recv()
            except Exception:
                break
            if isinstance(piece, str):
                piece = piece.encode()
            if not piece:
                continue
            try:
                cid, idx, tot, payload = NT.decode_transport_frame(self.recv.decrypt(piece))
                if tot == 1:
                    sr = payload
                else:
                    self._buf.setdefault(cid, {})[idx] = payload
                    if len(self._buf[cid]) < tot:
                        continue
                    sr = b"".join(self._buf.pop(cid)[i] for i in range(tot))
                r = NT.decode_service_response(sr)
                if r["kind"] in ("response", "bodyChunk"):
                    self.events += 1
            except Exception:
                break
        self.alive.clear()

    def close(self):
        self.alive.clear()
        try: self.ws.close()
        except Exception: pass


def main():
    http = S.http_session()
    conn = None
    attempt = 0
    wake_count = 0
    last = None
    running_since = None
    deadline = time.time() + MINUTES * 60 if MINUTES else None
    print(f"[{ts()}] keepalive-live start "
          f"({'%.0f min' % MINUTES if MINUTES else 'forever'})", flush=True)
    while deadline is None or time.time() < deadline:
        try:
            st = S.read_session(http)["vm_state"]
        except Exception as exc:
            st = f"err:{type(exc).__name__}"
        now = time.time()
        if st != last:
            print(f"[{ts()}] vm_state={st}"
                  + (f" wakes={wake_count}" if wake_count else ""), flush=True)
            last = st
            if st == "RUNNING" and running_since is None:
                running_since = now
        elif st == "RUNNING" and running_since:
            print(f"[{ts()}] RUNNING {int((now-running_since)/60)}m "
                  f"(stream alive={conn.alive.is_set() if conn else False}, "
                  f"events={conn.events if conn else 0}, wakes={wake_count})", flush=True)

        if st in ("SUSPENDED", "UPDATING"):
            running_since = None
            attempt += 1; wake_count += 1
            S.wake(http, S.read_session(http)["vm_id"], attempt)
            print(f"[{ts()}] -> wake #{attempt}", flush=True)

        # (re)connect the live client whenever the stream is down
        if conn is None or not conn.alive.is_set():
            if conn:
                conn.close()
            conn = LiveConn(http)
            conn.connect()
        time.sleep(POLL_EVERY)

    print(f"[{ts()}] DONE wakes={wake_count} "
          f"stream_events={conn.events if conn else 0}", flush=True)
    if conn:
        conn.close()


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nstopped.")
