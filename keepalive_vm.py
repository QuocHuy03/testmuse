#!/usr/bin/env python3
"""Keep the Muse.ai (Meta Hatch) confidential VM awake.

The VM idle-suspends whenever the app's Noise websocket is gone. The web app
itself recovers by polling /api/session and, when it sees the VM in SUSPENDED
(or UPDATING), calling POST /api/hatch/vm/wake. This mirrors that exactly so the
VM is warm whenever you want to use it.

Uses the saved cookies.txt. Optional: route through mitmproxy by setting
USE_PROXY=1 (so you can watch it in the capture).

  python keepalive_vm.py            # keep VM awake, poll every 20s
  POLL=15 python keepalive_vm.py    # custom poll seconds
  USE_PROXY=1 python keepalive_vm.py
"""
import os
import sys
import time
import uuid
from datetime import datetime, timezone

import requests

BASE = os.environ.get("MUSE_BASE", "https://muse.ai").rstrip("/")
COOKIE_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                           "cookies.txt")
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36")
POLL = int(os.environ.get("POLL", "20"))          # seconds between checks
WAKE_POLL = int(os.environ.get("WAKE_POLL", "5"))  # faster poll while resuming
# States the web app treats as "needs recovery -> wake" (from the app JS:
# function C(e){return "SUSPENDED"===e||"UPDATING"===e}).
NEEDS_WAKE = {"SUSPENDED", "UPDATING"}

PROXY = None
VERIFY = True
if os.environ.get("USE_PROXY") == "1":
    PROXY = {"http": "http://127.0.0.1:8080", "https": "http://127.0.0.1:8080"}
    VERIFY = os.path.expanduser("~/.mitmproxy/mitmproxy-ca-cert.pem")


def ts():
    return datetime.now().strftime("%H:%M:%S")


def make_session():
    s = requests.Session()
    s.headers.update({
        "accept": "*/*", "user-agent": UA, "accept-language": "en-US,en;q=0.9",
        "origin": BASE, "referer": BASE + "/",
        "sec-fetch-site": "same-origin", "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
    })
    header = open(COOKIE_FILE, "r", encoding="utf-8").read().strip()
    for pair in header.split(";"):
        pair = pair.strip()
        if "=" in pair:
            n, v = pair.split("=", 1)
            s.cookies.set(n.strip(), v.strip(), domain="muse.ai")
    return s


def get_state(s):
    r = s.get(BASE + "/api/session?vm_state=live", timeout=25,
              proxies=PROXY, verify=VERIFY)
    b = r.json()
    vm = (b.get("vms") or [{}])[0]
    return b.get("vm_id"), b.get("vm_state"), vm.get("notary_token_expiration_ts")


def wake(s, vm_id, attempt):
    body = {"vm_id": vm_id, "retry_count": attempt,
            "connect_attempt_id": str(uuid.uuid4())}
    # App uses AbortSignal.timeout(1e4) on the wake fetch — mirror the 10s cap.
    r = s.post(BASE + "/api/hatch/vm/wake", json=body, timeout=10,
               proxies=PROXY, verify=VERIFY,
               headers={"content-type": "application/json"})
    try:
        status = r.json().get("status")
    except ValueError:
        status = r.status_code
    return status


def main():
    s = make_session()
    attempt = 0
    last = None
    print(f"[{ts()}] keepalive start (poll={POLL}s, proxy={'on' if PROXY else 'off'})",
          flush=True)
    while True:
        try:
            vm_id, state, exp = get_state(s)
        except requests.RequestException as exc:
            print(f"[{ts()}] session error: {type(exc).__name__} — retrying", flush=True)
            time.sleep(WAKE_POLL)
            continue

        if state != last:
            exp_min = (round((exp - datetime.now(timezone.utc).timestamp()) / 60)
                       if exp else "?")
            print(f"[{ts()}] vm_state={state}  (notary exp ~{exp_min} min)  vm={vm_id}",
                  flush=True)
            last = state

        if state in NEEDS_WAKE:
            attempt += 1
            status = wake(s, vm_id, attempt)
            print(f"[{ts()}] -> wake #{attempt}: {status}", flush=True)
            time.sleep(WAKE_POLL)
        elif state == "RUNNING":
            attempt = 0
            time.sleep(POLL)
        else:  # CREATING / UPDATING handled above / UNKNOWN / ERROR
            print(f"[{ts()}] (state={state}; waiting)", flush=True)
            time.sleep(WAKE_POLL)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nstopped.")
        sys.exit(0)
