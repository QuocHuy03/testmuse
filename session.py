#!/usr/bin/env python3
"""muse.ai VM session acquisition — the correct, capture-verified ordering.

Goal: hand back FRESH connection material (vm_id, endpoint_url, auth_token,
notary_token) for a VM that is RUNNING, so a token is never minted against a
SUSPENDED VM.

Verified against the live browser capture (captures/login-check.mitm):
  * The WS URL params are  vm_id, auth_token, notary_token, app_id, request_id
    (in that order).
  * notary_token comes from the POST /api/hatch/token response — the browser
    does NOT call /api/hatch/noise-notary-token (0 hits in the capture).
  * vmAddress for /api/hatch/token must be the full endpoint_url
    ("wss://<vm_id>.metaaivm.com/"); the bare host is rejected later (MECHANISM §8).
  * The browser fires /api/hatch/vm/wake aggressively (130 hits) while connecting.

Mechanism (CORRECTED 2026-10-07 after a direct test overturned an earlier guess):
POST /api/hatch/vm/wake returns {"status":"wake_requested"} but by itself does NOT
reliably resume the VM. Proof: 41 accepted wakes over 12 minutes, with a completed
(standard-mode) Noise socket held open, left the VM SUSPENDED the whole time
(keepalive_noise.py run, 09:32-09:44). An earlier reading of login-check.mitm
attributed a 20:33 resume to a single wake, but that was almost certainly driven by
the user's REAL browser running in parallel (mitm only proxies one client's
traffic) — matching browser_keepalive.py's hard-won original note.

What actually resumes/keeps the VM: a real app Noise client that not only completes
the XX handshake but then speaks the post-split app protocol (NoiseChannel
subscription / liveness, 153vpyuy7g7ui.js). Our Python handshake stops at split, so
the backend does not treat it as a live client. Reliable option today:
browser_keepalive.py (real Chrome). keepalive_vm.py (wake loop) and
keepalive_noise.py (socket hold) are best-effort and did NOT resume from suspend in
testing. ensure_running() below is bounded and may well return still-SUSPENDED.
"""
import time
import uuid

import requests

BASE = "https://muse.ai"
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36")

READY = "RUNNING"
NEED_WAKE = {"SUSPENDED", "UPDATING"}
# States that just need more time (not a wake): keep polling.
TRANSIENT = {"CREATING", "UPDATING", "UNKNOWN", "SUSPENDED"}


def http_session(cookies_path="cookies.txt"):
    """Authenticated requests.Session built from the dumped cookie header."""
    s = requests.Session()
    # Ignore any OS/system proxy (e.g. a stale Fiddler/mitmproxy at 127.0.0.1:8080
    # left set in the Windows registry) — it silently breaks every request.
    s.trust_env = False
    s.proxies = {"http": None, "https": None}
    s.headers.update({
        "accept": "*/*", "user-agent": UA, "accept-language": "en-US,en;q=0.9",
        "origin": BASE, "referer": BASE + "/",
        "sec-fetch-site": "same-origin", "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
    })
    for p in open(cookies_path).read().strip().split(";"):
        if "=" in p:
            n, v = p.strip().split("=", 1)
            s.cookies.set(n.strip(), v.strip(), domain="muse.ai")
    return s


def read_session(s, timeout=20):
    """GET /api/session?vm_state=live -> normalized dict with the latest VM."""
    body = s.get(BASE + "/api/session?vm_state=live", timeout=timeout).json()
    vm_id = body.get("vm_id")
    vm0 = (body.get("vms") or [{}])[0]
    exp = vm0.get("notary_token_expiration_ts")
    return {
        "vm_id": vm_id,
        "vm_name": body.get("vm_name") or vm_id,
        "vm_state": body.get("vm_state"),
        "endpoint_url": body.get("endpoint_url") or f"wss://{vm_id}.metaaivm.com/",
        "notary_exp_ts": exp,
        "notary_exp_min": round((exp - time.time()) / 60, 1) if exp else None,
        "raw": body,
    }


def wake(s, vm_id, attempt, timeout=10):
    """POST /api/hatch/vm/wake — mirrors the web app (retry_count + attempt id)."""
    body = {"vm_id": vm_id, "retry_count": attempt,
            "connect_attempt_id": str(uuid.uuid4())}
    try:
        r = s.post(BASE + "/api/hatch/vm/wake", json=body, timeout=timeout)
        return r.json().get("status", r.status_code)
    except (requests.RequestException, ValueError):
        return "wake_error"


def ensure_running(s, max_wait=90, poll=5, verbose=True):
    """Read state; wake SUSPENDED/UPDATING VMs and poll until RUNNING (bounded).

    Returns the latest session dict. Does NOT hard-fail if still not RUNNING:
    wake is only a best-effort hint and often does NOT resume the VM on its own
    (see module docstring — 41 wakes over 12 min did not). The
    hatch.metaaivm.com/v1/noise gateway answers the handshake regardless of VM
    state and always returns observedType="standard" (70-byte msg2 payload, NOT an
    SNP attestation) — identical whether the VM is SUSPENDED or RUNNING. For a
    reliable keep-warm use browser_keepalive.py (real Chrome client).
    """
    sess = read_session(s)
    if verbose:
        print(f"[vm] {sess['vm_id']} state={sess['vm_state']} "
              f"notary_exp~{sess['notary_exp_min']}min")
    attempt = 0
    deadline = time.time() + max_wait
    while sess["vm_state"] != READY and time.time() < deadline:
        if sess["vm_state"] in NEED_WAKE:
            attempt += 1
            status = wake(s, sess["vm_id"], attempt)
            if verbose:
                print(f"  wake #{attempt}: {status}")
        time.sleep(poll)
        try:
            sess = read_session(s)
        except (requests.RequestException, ValueError):
            continue
        if verbose:
            print(f"  state={sess['vm_state']}")
    if verbose:
        tag = "RUNNING - ready" if sess["vm_state"] == READY \
            else f"{sess['vm_state']} (wake is async; proceeding, handshake resumes it)"
        print(f"[vm] {tag}")
    return sess


def mint_gateway_token(s, endpoint_url, timeout=20):
    """POST /api/hatch/token {vmAddress: endpoint_url} -> (auth_token, notary_token).

    vmAddress MUST be the full endpoint_url. notary_token is taken from THIS
    response (capture-verified); no separate noise-notary-token call.
    """
    body = s.post(BASE + "/api/hatch/token",
                  json={"vmAddress": endpoint_url}, timeout=timeout).json()
    auth_token = (body.get("token") or body.get("auth_token")
                  or body.get("gateway_token"))
    notary_token = body.get("notary_token") or body.get("notaryToken")
    return auth_token, notary_token


def prepare_connection(s, max_wait=90, verbose=True):
    """Full capture-verified flow: ensure RUNNING, then mint a FRESH token.

    Returns dict {vm_id, vm_name, vm_state, endpoint_url, auth_token,
    notary_token, request_id}. Token is minted last so it is as fresh as
    possible relative to the WS connect.
    """
    sess = ensure_running(s, max_wait=max_wait, verbose=verbose)
    auth_token, notary_token = mint_gateway_token(s, sess["endpoint_url"])
    if verbose:
        print(f"[token] auth={len(auth_token) if auth_token else None} "
              f"notary={len(notary_token) if notary_token else None}")
    return {
        **sess,
        "auth_token": auth_token,
        "notary_token": notary_token,
        "request_id": str(uuid.uuid4()),
    }


if __name__ == "__main__":
    s = http_session()
    info = prepare_connection(s)
    print(f"[ready] vm_id={info['vm_id']} state={info['vm_state']} "
          f"endpoint={info['endpoint_url']}")
    print(f"        auth_token={bool(info['auth_token'])} "
          f"notary_token={bool(info['notary_token'])} "
          f"request_id={info['request_id']}")
