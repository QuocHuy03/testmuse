#!/usr/bin/env python3
"""Self-contained muse.ai (Meta Hatch) confidential-VM keep-warm — single file.

Drop this one file (plus a cookies.txt next to it, or pass cookies another way)
into any Python project. No imports from the other poc_*/session modules.

What it does (verified by reverse-engineering + ~70 min of live tests):
  TLS (curl_cffi Chrome impersonation, else gateway 401)
    -> NoiseXX handshake (msg1 carries a 32-byte client nonce; msg2; msg3; split)
    -> HTTP-over-Noise: POST /navigation/subscribe + /identity/subscribe (body "{}")
    -> keep those long-lived streams open  == the VM sees a live client and does
       NOT idle-suspend. Stream has a ~45-min server TTL; this auto-reconnects.
  A background thread drains the stream; the main loop polls /api/session, wakes a
  SUSPENDED/UPDATING VM (best-effort; resume is backend-async, minutes), and
  reconnects if the stream dies.

Requires: pip install curl_cffi cryptography requests

Usage:
    python muse_keepalive.py                         # run forever (Ctrl+C to stop)
    MINUTES=20 python muse_keepalive.py              # bounded run
    COOKIES=/path/cookies.txt python muse_keepalive.py

As a library:
    from muse_keepalive import keep_alive, LiveConn, http_session
    keep_alive()                                     # blocking loop
    # or drive a single connection yourself:
    http = http_session("cookies.txt")
    conn = LiveConn(http); conn.connect(); ...; conn.close()

cookies.txt format: the raw Cookie header line, e.g.  name1=val1; name2=val2
"""
import hashlib
import hmac
import json
import os
import struct
import threading
import time
import uuid
from urllib.parse import quote

import requests
from curl_cffi import requests as creq
from curl_cffi import CurlWsFlag
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric.x25519 import (
    X25519PrivateKey, X25519PublicKey)
from cryptography.hazmat.primitives.ciphers.aead import AESGCM

# ---------------------------------------------------------------- config
BASE = os.environ.get("MUSE_BASE", "https://muse.ai").rstrip("/")
GATEWAY_HOST = "hatch.metaaivm.com"
APP_ID = "hatch-web"
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36")
COOKIES = os.environ.get("COOKIES", "cookies.txt")
PROXY = os.environ.get("PROXY", "")  # e.g. 135.148.95.150:56787 or http://user:pass@ip:port
POLL_EVERY = int(os.environ.get("POLL_EVERY", "20"))
MINUTES = float(os.environ.get("MINUTES", "0"))          # 0 = forever
SUBSCRIBE_PATHS = ["/navigation/subscribe", "/identity/subscribe"]


def ts():
    return time.strftime("%H:%M:%S")


def _proxy_url(p=None):
    p = p if p is not None else PROXY
    if not p:
        return None
    return p if "://" in p else "http://" + p


def _proxies(p=None):
    u = _proxy_url(p)
    return {"http": u, "https": u} if u else {"http": None, "https": None}


def connect_noise(http, proxy=None, max_tries=90, verbose=True):
    """Open the Noise WS, RETRYING through 502 'Refused WebSocket upgrade' (the
    gateway returns that while a SUSPENDED/booting VM is not yet routable) until
    a 101 + successful handshake. Fresh token + request_id per attempt, ~1s apart
    (then backing off), exactly like the web app. Returns (ws, send, recv, sess)
    or None. `proxy` (or PROXY env) routes the ws through a proxy."""
    prox = _proxy_url(proxy)
    for attempt in range(1, max_tries + 1):
        try:
            sess = read_session(http)
            auth, notary = mint_token(http, sess["endpoint_url"], force_refresh=(attempt > 1))
            if not auth or not notary:
                if verbose: print(f"[{ts()}] connect #{attempt}: token missing", flush=True)
                time.sleep(1); continue
            q = (f"vm_id={quote(sess['vm_id'])}&auth_token={quote(auth)}"
                 f"&notary_token={quote(notary)}&app_id={APP_ID}&request_id={uuid.uuid4()}")
            url = f"wss://{GATEWAY_HOST}/v1/noise?{q}"
            s = creq.Session(impersonate="chrome", timeout=25)
            if prox:
                s.proxies = {"http": prox, "https": prox}
            ws = s.ws_connect(url, timeout=25)
        except Exception as exc:
            msg = str(exc)[:90]
            is502 = "502" in msg or "Refused WebSocket" in msg
            if verbose and (attempt == 1 or attempt % 10 == 0 or not is502):
                print(f"[{ts()}] connect #{attempt} {'(502, retrying)' if is502 else 'fail'}: {msg}", flush=True)
            time.sleep(1.0 if attempt < 40 else min(1.5 ** (attempt - 40), 8.0))
            continue
        hs = _handshake(ws)
        if hs is None:
            if verbose: print(f"[{ts()}] connect #{attempt}: handshake rejected, retrying", flush=True)
            try: ws.close()
            except Exception: pass
            time.sleep(1); continue
        if verbose: print(f"[{ts()}] CONNECTED (101) on attempt #{attempt}", flush=True)
        return ws, hs[0], hs[1], sess
    return None


# ---------------------------------------------------------------- NoiseXX crypto
def _sha256(b): return hashlib.sha256(b).digest()
def _hmac(k, d): return hmac.new(k, d, hashlib.sha256).digest()


def _hkdf(ck, ikm, num):
    tmp = _hmac(ck, ikm)
    o1 = _hmac(tmp, b"\x01")
    o2 = _hmac(tmp, o1 + b"\x02")
    if num == 2:
        return o1, o2
    o3 = _hmac(tmp, o2 + b"\x03")
    return o1, o2, o3


class _Sym:
    """NoiseXX symmetric state: Noise_XX_25519_AESGCM_SHA256."""
    def __init__(self):
        name = b"Noise_XX_25519_AESGCM_SHA256"
        self.h = name + b"\x00" * (32 - len(name))
        self.ck = self.h
        self.k = None
        self.n = 0
        self.mix_hash(b"")

    def mix_hash(self, d): self.h = _sha256(self.h + d)

    def mix_key(self, ikm):
        self.ck, self.k = _hkdf(self.ck, ikm, 2)
        self.n = 0

    def _nonce(self): return b"\x00\x00\x00\x00" + self.n.to_bytes(8, "big")

    def encrypt_and_hash(self, p):
        if self.k is None:
            c = p
        else:
            c = AESGCM(self.k).encrypt(self._nonce(), p, self.h); self.n += 1
        self.mix_hash(c); return c

    def decrypt_and_hash(self, c):
        if self.k is None:
            p = c
        else:
            p = AESGCM(self.k).decrypt(self._nonce(), c, self.h); self.n += 1
        self.mix_hash(c); return p


def _dh(priv, peer_pub):
    return priv.exchange(X25519PublicKey.from_public_bytes(peer_pub))


def _raw_pub(priv):
    return priv.public_key().public_bytes(
        serialization.Encoding.Raw, serialization.PublicFormat.Raw)


def _encode_client_nonce_msg1(nonce: bytes) -> bytes:
    # encodeNoiseClientNonceMessage1: protobuf field1 (LEN) = 32-byte nonce
    assert len(nonce) == 32
    return b"\x0a\x20" + nonce


# ---------------------------------------------------------------- app transport
SERVICE = {"daemon": 0, "sentinel": 1, "vault": 2, "authd": 3}
MAX_CHUNK = 65489


def _varint(n):
    out = bytearray()
    while True:
        b = n & 0x7F; n >>= 7
        if n: out.append(b | 0x80)
        else: out.append(b); return bytes(out)


def _tag(f, w): return _varint((f << 3) | w)
def _lenf(f, d): return _tag(f, 2) + _varint(len(d)) + d
def _vintf(f, v): return _tag(f, 0) + _varint(v)
def _strf(f, s): return _lenf(f, s.encode("utf-8"))


def _enc_header(k, v): return _strf(1, k) + _strf(2, v)


def _enc_app_request(verb, path, headers, body, end_body):
    out = bytearray()
    out += _strf(1, verb)
    out += _strf(2, path)
    for k, v in (headers or []):
        out += _lenf(3, _enc_header(k, v))
    if body:
        out += _lenf(4, body)
    if end_body:
        out += _vintf(5, 1)
    return bytes(out)


def _enc_service_frame(sid, app): return _vintf(1, sid) + _lenf(2, app)


def _enc_service_request(service, sf):
    svc = SERVICE[service]
    return (_vintf(1, svc) if svc != 0 else b"") + _lenf(2, sf)


def _enc_transport_frame(cid, idx, tot, payload):
    cid &= (1 << 64) - 1
    return _vintf(1, cid) + _vintf(2, idx) + _vintf(3, tot) + _lenf(4, payload)


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
        if wire == 0:
            v, i = _read_varint(buf, i)
        elif wire == 2:
            ln, i = _read_varint(buf, i); v = buf[i:i + ln]; i += ln
        elif wire == 5:
            v = buf[i:i + 4]; i += 4
        elif wire == 1:
            v = buf[i:i + 8]; i += 8
        else:
            raise ValueError(f"bad wire {wire}")
        out.setdefault(field, []).append(v)
    return out


def _decode_transport_frame(pt):
    f = _parse_fields(pt)
    return (f.get(1, [0])[0], f.get(2, [0])[0], f.get(3, [1])[0], f.get(4, [b""])[0])


class _SendCipher:
    def __init__(self, key): self._g = AESGCM(key); self.n = 0
    def encrypt(self, p):
        nonce = b"\x00\x00\x00\x00" + struct.pack(">Q", self.n)
        ct = self._g.encrypt(nonce, p, b""); self.n += 1; return ct


class _RecvCipher:
    def __init__(self, key): self._g = AESGCM(key); self.n = 0
    def decrypt(self, c):
        nonce = b"\x00\x00\x00\x00" + struct.pack(">Q", self.n)
        pt = self._g.decrypt(nonce, c, b""); self.n += 1; return pt


def _build_request_frames(send, service, verb, path, headers, body, end_body, stream_id):
    app = _enc_app_request(verb, path, headers, body, end_body)
    sr = _enc_service_request(service, _enc_service_frame(stream_id, app))
    cid = int.from_bytes(os.urandom(8), "little", signed=True)
    if len(sr) == 0:
        chunks = [_enc_transport_frame(cid, 0, 1, b"")]
    else:
        n = max(1, (len(sr) + MAX_CHUNK - 1) // MAX_CHUNK)
        chunks = [_enc_transport_frame(cid, i, n, sr[i * MAX_CHUNK:(i + 1) * MAX_CHUNK])
                  for i in range(n)]
    return [send.encrypt(c) for c in chunks]


# ---------------------------------------------------------------- HTTP / session
def http_session(cookies_path=None):
    s = requests.Session()
    s.trust_env = False                            # ignore stale OS proxy (127.0.0.1:8080)
    s.proxies = _proxies()                          # use PROXY env if set, else none
    s.headers.update({
        "accept": "*/*", "user-agent": UA, "accept-language": "en-US,en;q=0.9",
        "origin": BASE, "referer": BASE + "/",
        "sec-fetch-site": "same-origin", "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
    })
    path = cookies_path or COOKIES
    for p in open(path, encoding="utf-8").read().strip().split(";"):
        if "=" in p:
            n, v = p.strip().split("=", 1)
            s.cookies.set(n.strip(), v.strip(), domain="muse.ai")
    return s


def read_session(s, timeout=20):
    b = s.get(BASE + "/api/session?vm_state=live", timeout=timeout).json()
    return {"vm_id": b.get("vm_id"), "vm_state": b.get("vm_state"),
            "endpoint_url": b.get("endpoint_url") or f"wss://{b.get('vm_id')}.metaaivm.com/"}


def wake(s, vm_id, attempt, timeout=10):
    body = {"vm_id": vm_id, "retry_count": attempt, "connect_attempt_id": str(uuid.uuid4())}
    try:
        return s.post(BASE + "/api/hatch/vm/wake", json=body, timeout=timeout).json().get("status")
    except (requests.RequestException, ValueError):
        return "wake_error"


def mint_token(s, endpoint_url, timeout=20, force_refresh=False):
    body = {"vmAddress": endpoint_url}
    if force_refresh:
        body["force_refresh"] = True
    b = s.post(BASE + "/api/hatch/token", json=body, timeout=timeout).json()
    return (b.get("token") or b.get("auth_token") or b.get("gateway_token"),
            b.get("notary_token") or b.get("notaryToken"))


# ---------------------------------------------------------------- live client
CHAT_EVERY = int(os.environ.get("CHAT_EVERY", "180"))   # compute heartbeat interval (s); 0=off
CHAT_TEXT = os.environ.get("CHAT_TEXT", ".")
CAPS = ["chat_cancel", "delta_stream", "custom_reactions",
        "custom_reactions_facebook_thumbs_up_v1"]


def _app_headers(json_body=True):
    h = [("x-request-id", str(uuid.uuid4())), ("x-app-id", APP_ID), ("Accept-Language", "en-US")]
    if json_body:
        h.insert(0, ("Content-Type", "application/json"))
    return h


def _handshake(ws):
    """Run NoiseXX on an open ws; return (send_cipher, recv_cipher) or None."""
    sym = _Sym()
    e_priv = X25519PrivateKey.generate(); e_pub = _raw_pub(e_priv)
    sym.mix_hash(e_pub)
    ws.send(e_pub + sym.encrypt_and_hash(_encode_client_nonce_msg1(os.urandom(32))), CurlWsFlag.BINARY)
    msg2, _ = ws.recv()
    if isinstance(msg2, str): msg2 = msg2.encode()
    if len(msg2) < 96:
        return None
    re = msg2[:32]
    sym.mix_hash(re); sym.mix_key(_dh(e_priv, re))
    rs = sym.decrypt_and_hash(msg2[32:80]); sym.mix_key(_dh(e_priv, rs))
    sym.decrypt_and_hash(msg2[80:])
    s_priv = X25519PrivateKey.generate(); s_pub = _raw_pub(s_priv)
    nn = sym.encrypt_and_hash(s_pub); sym.mix_key(_dh(s_priv, re))
    ws.send(nn + sym.encrypt_and_hash(b""), CurlWsFlag.BINARY)
    k_send, k_recv = _hkdf(sym.ck, b"", 2)
    return _SendCipher(k_send), _RecvCipher(k_recv)


def send_chat_heartbeat(http, text=CHAT_TEXT, read_s=8):
    """Open a short-lived Noise conn, send ONE chat.stream (forces agent compute
    -> keeps the VM resumed / wakes a suspended one), read the ack, close.
    Returns True if the agent accepted it (HTTP 200)."""
    try:
        sess = read_session(http)
        auth, notary = mint_token(http, sess["endpoint_url"])
        if not auth or not notary:
            return False
        q = (f"vm_id={quote(sess['vm_id'])}&auth_token={quote(auth)}"
             f"&notary_token={quote(notary)}&app_id={APP_ID}&request_id={uuid.uuid4()}")
        ws = creq.Session(impersonate="chrome", timeout=25).ws_connect(
            f"wss://{GATEWAY_HOST}/v1/noise?{q}", timeout=25)
    except Exception as exc:
        print(f"[{ts()}] heartbeat connect failed: {type(exc).__name__}: {str(exc)[:80]}", flush=True)
        return False
    ok = False
    try:
        hs = _handshake(ws)
        if not hs:
            return False
        send, recv = hs
        body = json.dumps({"items": [{"type": "text", "text": text}],
                           "node_id": str(uuid.uuid4()), "capabilities": CAPS}).encode()
        for fr in _build_request_frames(send, "daemon", "POST", "/chat/stream",
                                        _app_headers(True), body, True, 1):
            ws.send(fr, CurlWsFlag.BINARY)
        t0 = time.time(); buf = {}
        while time.time() - t0 < read_s:
            try:
                piece, _ = ws.recv()
            except Exception:
                break
            if isinstance(piece, str): piece = piece.encode()
            if not piece: continue
            try:
                cid, idx, tot, payload = _decode_transport_frame(recv.decrypt(piece))
                if tot == 1: sr = payload
                else:
                    buf.setdefault(cid, {})[idx] = payload
                    if len(buf[cid]) < tot: continue
                    sr = b"".join(buf.pop(cid)[i] for i in range(tot))
                r = decode_service_response(sr)
                if r["kind"] == "response" and r["status"] == 200:
                    ok = True; break
            except Exception:
                pass
    finally:
        try: ws.close()
        except Exception: pass
    return ok


def decode_service_response(sr_bytes):
    sresp = _parse_fields(sr_bytes)
    sf = _parse_fields(sresp.get(1, [b""])[0])
    out = {"stream_id": sf.get(1, [0])[0]}
    if 3 in sf:
        ar = _parse_fields(sf[3][0]); out["kind"] = "response"; out["status"] = ar.get(1, [0])[0]
    elif 4 in sf:
        out["kind"] = "bodyChunk"
    elif 5 in sf:
        out["kind"] = "reset"
    else:
        out["kind"] = "unknown"
    return out


class LiveConn:
    """One Noise connection: TLS + handshake + subscriptions + drain thread."""
    def __init__(self, http):
        self.http = http
        self.ws = None
        self.recv = None
        self.alive = threading.Event()
        self.events = 0
        self._buf = {}

    def connect(self, force_refresh=False):
        sess_info = read_session(self.http)
        auth, notary = mint_token(self.http, sess_info["endpoint_url"], force_refresh=force_refresh)
        if not auth or not notary:
            print(f"[{ts()}] token missing"); return False
        q = (f"vm_id={quote(sess_info['vm_id'])}&auth_token={quote(auth)}"
             f"&notary_token={quote(notary)}&app_id={APP_ID}&request_id={uuid.uuid4()}")
        url = f"wss://{GATEWAY_HOST}/v1/noise?{q}"
        try:
            self.ws = creq.Session(impersonate="chrome", timeout=25).ws_connect(url, timeout=25)
        except Exception as exc:
            print(f"[{ts()}] ws connect failed: {type(exc).__name__}: {str(exc)[:100]}")
            return False
        try:
            sym = _Sym()
            e_priv = X25519PrivateKey.generate()
            e_pub = _raw_pub(e_priv)
            sym.mix_hash(e_pub)
            self.ws.send(e_pub + sym.encrypt_and_hash(_encode_client_nonce_msg1(os.urandom(32))),
                         CurlWsFlag.BINARY)
            msg2, _ = self.ws.recv()
            if isinstance(msg2, str): msg2 = msg2.encode()
            if len(msg2) < 96:
                print(f"[{ts()}] handshake rejected (msg2 {len(msg2)}B)"); return False
            re = msg2[:32]
            sym.mix_hash(re); sym.mix_key(_dh(e_priv, re))
            rs = sym.decrypt_and_hash(msg2[32:80]); sym.mix_key(_dh(e_priv, rs))
            sym.decrypt_and_hash(msg2[80:])
            s_priv = X25519PrivateKey.generate(); s_pub = _raw_pub(s_priv)
            n = sym.encrypt_and_hash(s_pub); sym.mix_key(_dh(s_priv, re))
            self.ws.send(n + sym.encrypt_and_hash(b""), CurlWsFlag.BINARY)
            k_send, k_recv = _hkdf(sym.ck, b"", 2)
            send = _SendCipher(k_send); self.recv = _RecvCipher(k_recv)
            for sid, path in enumerate(SUBSCRIBE_PATHS, start=1):
                for fr in _build_request_frames(send, "daemon", "POST", path,
                                                _app_headers(), b"{}", True, sid):
                    self.ws.send(fr, CurlWsFlag.BINARY)
            print(f"[{ts()}] live client up: handshake + {len(SUBSCRIBE_PATHS)} subscriptions")
            self.alive.set()
            threading.Thread(target=self._drain, daemon=True).start()
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
            if isinstance(piece, str): piece = piece.encode()
            if not piece: continue
            try:
                cid, idx, tot, payload = _decode_transport_frame(self.recv.decrypt(piece))
                if tot == 1:
                    pass
                else:
                    self._buf.setdefault(cid, {})[idx] = payload
                    if len(self._buf[cid]) < tot: continue
                    self._buf.pop(cid, None)
                self.events += 1
            except Exception:
                break
        self.alive.clear()

    def close(self):
        self.alive.clear()
        try: self.ws.close()
        except Exception: pass


def keep_alive(cookies_path=None, poll_every=None, minutes=None):
    """Blocking keep-warm loop. Returns when `minutes` elapses (0/None = forever).

    Resume orchestration mirrors the web app (traced from the JS bundle): the
    thing that actually brings a SUSPENDED VM back is the Noise WS RECONNECT LOOP,
    not wake. So while the live stream is DOWN we hammer connect() at a flat ~1s
    (first 40 tries), backing off to ~8s, each attempt minting a FRESH token
    (force_refresh after a failure) and a new request_id. wake() is fired only as
    a sparse hint (first try + once every ~10 attempts). Once the stream is up and
    the VM is RUNNING we settle into a slow poll + passive drain.
    """
    http = http_session(cookies_path)
    poll = poll_every or POLL_EVERY
    deadline = time.time() + (minutes or MINUTES) * 60 if (minutes or MINUTES) else None
    conn = None
    reconnect_attempt = 0
    wake_count = 0
    st = None
    last_logged = None
    last_state_check = 0.0
    last_running_log = 0.0
    last_chat = 0.0
    heartbeats = 0
    running_since = None

    def refresh_state():
        try:
            return read_session(http)
        except Exception as exc:
            return {"vm_state": f"err:{type(exc).__name__}", "vm_id": None}

    STATE_EVERY = 5  # re-check /api/session at most this often during recovery
    print(f"[{ts()}] muse-keepalive start "
          f"({'%.0f min' % (minutes or MINUTES) if (minutes or MINUTES) else 'forever'})", flush=True)
    try:
        while deadline is None or time.time() < deadline:
            now = time.time()
            # readiness is vm_state==RUNNING (a bare 'standard' handshake succeeds
            # even while SUSPENDED, so conn.alive alone is NOT 'ready')
            if now - last_state_check >= (STATE_EVERY if st != "RUNNING" else poll):
                last_state_check = now
                sess = refresh_state(); st = sess["vm_state"]
                if st != last_logged:
                    print(f"[{ts()}] vm_state={st}" + (f" wakes={wake_count}" if wake_count else ""), flush=True)
                    last_logged = st
                    running_since = now if st == "RUNNING" else None

            # compute heartbeat: a chat.stream is the ONLY thing that forces agent
            # compute -> it BOTH keeps a RUNNING vm warm AND resumes a SUSPENDED one
            # (subscriptions are daemon-cache served and never wake the agent). So
            # fire it on cadence regardless of state.
            if CHAT_EVERY and now - last_chat >= CHAT_EVERY:
                last_chat = now
                okhb = send_chat_heartbeat(http)
                heartbeats += 1
                print(f"[{ts()}] heartbeat chat.stream -> {'ok(200)' if okhb else 'FAILED'} "
                      f"(vm_state={st})", flush=True)

            ready = (st == "RUNNING") and conn is not None and conn.alive.is_set()
            if ready:
                reconnect_attempt = 0
                if now - last_running_log >= poll and running_since:
                    last_running_log = now
                    print(f"[{ts()}] RUNNING {int((now-running_since)/60)}m "
                          f"(stream=up, events={conn.events}, hb={heartbeats}, wakes={wake_count})", flush=True)
                time.sleep(1)
                continue

            # --- NOT ready: tight Noise reconnect loop (this drives the resume) ---
            reconnect_attempt += 1
            if reconnect_attempt == 1 or reconnect_attempt % 10 == 0:
                if sess.get("vm_id"):
                    wake_count += 1
                    wake(http, sess["vm_id"], 0)     # sparse hint; app uses retry_count 0
                print(f"[{ts()}] reconnect #{reconnect_attempt} (vm_state={st}, "
                      f"stream={'up' if conn and conn.alive.is_set() else 'down'}, wakes={wake_count})", flush=True)
            if not (conn and conn.alive.is_set()):
                if conn: conn.close()
                conn = LiveConn(http)
                conn.connect(force_refresh=(reconnect_attempt > 1))
            # flat ~1s for first 40 attempts, then back off to ~8s (app behaviour)
            time.sleep(1.0 if reconnect_attempt < 40 else min(1.0 * 1.5 ** (reconnect_attempt - 40), 8.0))
    finally:
        if conn: conn.close()
        print(f"[{ts()}] stopped. wakes={wake_count}", flush=True)


if __name__ == "__main__":
    try:
        keep_alive()
    except KeyboardInterrupt:
        print("\nstopped.")
