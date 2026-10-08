#!/usr/bin/env python3
"""PoC: reach the muse.ai confidential-VM Noise gateway from Python (no browser).

Goal of THIS stage: do the HTTP token dance, open wss://hatch.metaaivm.com/v1/noise,
run the NoiseXX initiator through message 1 -> message 2, and DECRYPT message 2 so
we can see the server's attestation / RV-challenge bytes. msg3 (the RV response +
enrollment) is deliberately not attempted yet.

NoiseXX spec reproduced from js_bundle/pretty/2kzwdkemdsxkx.js:
  Noise_XX_25519_AESGCM_SHA256, HKDF=HMAC-SHA256, AES-GCM nonce = 00000000||ctr(be64).
"""
import hashlib
import hmac
import json
import sys
import uuid

import requests
import websocket  # websocket-client
from cryptography.hazmat.primitives.asymmetric.x25519 import (
    X25519PrivateKey, X25519PublicKey)
from cryptography.hazmat.primitives.ciphers.aead import AESGCM

BASE = "https://muse.ai"
GATEWAY_HOST = "hatch.metaaivm.com"
APP_ID = "hatch-web"
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36")


def sha256(b):
    return hashlib.sha256(b).digest()


def hmac256(key, data):
    return hmac.new(key, data, hashlib.sha256).digest()


def hkdf(ck, ikm, num):
    tmp = hmac256(ck, ikm)
    o1 = hmac256(tmp, b"\x01")
    o2 = hmac256(tmp, o1 + b"\x02")
    if num == 2:
        return o1, o2
    o3 = hmac256(tmp, o2 + b"\x03")
    return o1, o2, o3


class Sym:
    def __init__(self):
        name = b"Noise_XX_25519_AESGCM_SHA256"       # 28 bytes
        self.h = name + b"\x00" * (32 - len(name))   # right-zero-pad to 32
        self.ck = self.h
        self.k = None
        self.n = 0
        self.mix_hash(b"")                            # prologue = empty

    def mix_hash(self, d):
        self.h = sha256(self.h + d)

    def mix_key(self, ikm):
        self.ck, self.k = hkdf(self.ck, ikm, 2)
        self.n = 0

    def _nonce(self):
        return b"\x00\x00\x00\x00" + self.n.to_bytes(8, "big")

    def encrypt_and_hash(self, p):
        if self.k is None:
            c = p
        else:
            c = AESGCM(self.k).encrypt(self._nonce(), p, self.h)
            self.n += 1
        self.mix_hash(c)
        return c

    def decrypt_and_hash(self, c):
        if self.k is None:
            p = c
        else:
            p = AESGCM(self.k).decrypt(self._nonce(), c, self.h)
            self.n += 1
        self.mix_hash(c)
        return p


def dh(priv, peer_pub_bytes):
    return priv.exchange(X25519PublicKey.from_public_bytes(peer_pub_bytes))


def raw_pub(priv):
    from cryptography.hazmat.primitives import serialization
    return priv.public_key().public_bytes(
        serialization.Encoding.Raw, serialization.PublicFormat.Raw)


def http_session():
    s = requests.Session()
    s.headers.update({
        "accept": "*/*", "user-agent": UA, "accept-language": "en-US,en;q=0.9",
        "origin": BASE, "referer": BASE + "/",
        "sec-fetch-site": "same-origin", "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
    })
    for p in open("cookies.txt").read().strip().split(";"):
        if "=" in p:
            n, v = p.strip().split("=", 1)
            s.cookies.set(n.strip(), v.strip(), domain="muse.ai")
    return s


def j(label, obj):
    print(f"  {label}: " + json.dumps(obj)[:200])


def main():
    s = http_session()

    # 1. session -> vm_id / vm_name / state
    sess = s.get(BASE + "/api/session?vm_state=live", timeout=20).json()
    vm_id = sess.get("vm_id")
    vm_name = sess.get("vm_name") or vm_id
    endpoint_url = sess.get("endpoint_url") or f"wss://{vm_id}.metaaivm.com/"
    print(f"[session] vm_id={vm_id} vm_state={sess.get('vm_state')} "
          f"endpoint={endpoint_url}")

    # 2. gateway token  (POST /api/hatch/token {vmAddress})
    auth_token = None
    notary_token = None
    # Mint the gateway token for the SAME host we connect the websocket to.
    import os
    # Browser mints the token with vmAddress = the full endpoint_url (wss://.../).
    addr = os.environ.get("VM_ADDR", endpoint_url)
    r = s.post(BASE + "/api/hatch/token", json={"vmAddress": addr}, timeout=20)
    print(f"[token] vmAddress={addr} -> HTTP {r.status_code}")
    if r.ok:
        b = r.json()
        print("  keys:", list(b.keys()))
        auth_token = (b.get("token") or b.get("auth_token")
                      or b.get("gateway_token") or b.get("gatewayToken"))
        notary_token = b.get("notary_token") or b.get("notaryToken")
        print(f"  auth_token len={len(auth_token) if auth_token else None} "
              f"notary_token len={len(notary_token) if notary_token else None}")

    # 3. notary token (dedicated endpoint) if not already present
    if not notary_token:
        r = s.post(BASE + "/api/hatch/noise-notary-token",
                   json={"vmName": vm_name}, timeout=20)
        print(f"[noise-notary-token] -> HTTP {r.status_code}")
        if r.ok:
            notary_token = r.json().get("notaryToken")
            print(f"  notary_token len={len(notary_token) if notary_token else None}")

    if not auth_token:
        print("x no gateway auth_token; cannot build WS URL. Stop.")
        sys.exit(2)

    # 4. build WS url
    from urllib.parse import quote
    q = (f"vm_id={quote(vm_id)}&auth_token={quote(auth_token)}"
         f"&app_id={APP_ID}&request_id={uuid.uuid4()}")
    if notary_token:
        q += f"&notary_token={quote(notary_token)}"
    url = f"wss://{GATEWAY_HOST}/v1/noise?{q}"
    print(f"[ws] connecting ({len(url)} char url) ...")

    ws = websocket.create_connection(
        url, timeout=20,
        header=[f"User-Agent: {UA}", f"Origin: {BASE}"],
        suppress_origin=False)
    print("[ws] connected")

    # 5. NoiseXX msg1
    sym = Sym()
    e_priv = X25519PrivateKey.generate()
    e_pub = raw_pub(e_priv)
    sym.mix_hash(e_pub)
    payload1 = bytes([0x10, 0x01])          # fallback {field2=1}; see MECHANISM §7
    ct1 = sym.encrypt_and_hash(payload1)
    msg1 = e_pub + ct1
    ws.send_binary(msg1)
    print(f"[noise] sent msg1 ({len(msg1)} bytes)")

    # 6. read + decrypt msg2
    msg2 = ws.recv()
    if isinstance(msg2, str):
        msg2 = msg2.encode()
    print(f"[noise] got msg2 ({len(msg2)} bytes)")
    if len(msg2) < 96:
        print("  msg2 too short; raw:", msg2[:120].hex())
        ws.close(); return
    re = msg2[:32]
    sym.mix_hash(re)
    sym.mix_key(dh(e_priv, re))
    rs = sym.decrypt_and_hash(msg2[32:32 + 48])       # server static (32) + tag
    sym.mix_key(dh(e_priv, rs))
    payload2 = sym.decrypt_and_hash(msg2[80:])
    print(f"[noise] DECRYPTED msg2 payload: {len(payload2)} bytes")
    print("  hex:", payload2[:400].hex())
    # best-effort text peek
    printable = bytes(c if 32 <= c < 127 else 0x2e for c in payload2[:400])
    print("  ascii:", printable.decode("ascii", "replace"))
    ws.close()
    print("[done] reached msg2. msg3/enrollment not attempted (see MECHANISM §7).")


if __name__ == "__main__":
    main()
