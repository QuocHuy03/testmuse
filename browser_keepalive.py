#!/usr/bin/env python3
"""Keep the Muse.ai confidential VM awake by running the REAL web app.

CORRECTION (2026-10-07, verified against login-check.mitm + live test): the old
claim here — "wake alone does NOT resume; only the Noise handshake does" — is
WRONG. POST /api/hatch/vm/wake IS what resumes the VM; it is just async (~4 min)
and sometimes needs persistence (the capture shows one resume after a single wake,
another only after a 59-wake burst). The Noise handshake is the data channel used
once the VM is warm, not the wake trigger. The earlier "50+ wakes, no effect" was
almost certainly giving up inside the ~4 min async window.

Pure-Python alternatives that do NOT need Chrome:
  * keepalive_vm.py     — reactive wake loop (lightweight; tolerates brief suspends)
  * keepalive_noise.py  — holds a Python Noise WS open + wake fallback (closest to
                          this browser approach, no Selenium)

This browser driver is still the most faithful to the app (it keeps the real Noise
socket open and reconnects on 'online'), so keep it as the reference / most-stable
option.

  python browser_keepalive.py            # headful, keep open
  HEADLESS=1 python browser_keepalive.py # headless (may be less reliable)
"""
import os
import time

import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

HERE = os.path.dirname(os.path.abspath(__file__))
COOKIE_FILE = os.path.join(HERE, "cookies.txt")
BASE = "https://muse.ai"
PROFILE = os.environ.get("PROFILE", r"C:\tmp\muse-selenium-profile")


def load_cookie_pairs():
    header = open(COOKIE_FILE, "r", encoding="utf-8").read().strip()
    pairs = []
    for p in header.split(";"):
        p = p.strip()
        if "=" in p:
            n, v = p.split("=", 1)
            pairs.append((n.strip(), v.strip()))
    return pairs


def requests_session():
    s = requests.Session()
    s.headers.update({
        "accept": "*/*", "user-agent": "Mozilla/5.0 Chrome/154",
        "origin": BASE, "referer": BASE + "/",
        "sec-fetch-site": "same-origin", "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
    })
    for n, v in load_cookie_pairs():
        s.cookies.set(n, v, domain="muse.ai")
    return s


def vm_state(s):
    try:
        b = s.get(BASE + "/api/session?vm_state=live", timeout=20).json()
        return b.get("vm_state")
    except Exception as exc:
        return f"err:{type(exc).__name__}"


def nudge_reconnect(driver):
    """Force the app to re-establish the Noise WS without reloading the page.

    The app listens for 'online' (and focus/pageshow) and, per
    3r93bf493vh-m.js:5907-5924, an 'online' event ALWAYS forces a reconnect
    (requiresLiveness=true). That resumes a VM that slipped to SUSPENDED far
    more cheaply than a full driver.refresh().
    """
    try:
        driver.execute_script("window.dispatchEvent(new Event('online'));")
        return True
    except Exception:
        return False


def main():
    opts = Options()
    opts.add_argument(f"--user-data-dir={PROFILE}")
    opts.add_argument("--no-first-run")
    opts.add_argument("--no-default-browser-check")
    if os.environ.get("HEADLESS") == "1":
        opts.add_argument("--headless=new")
        opts.add_argument("--window-size=1280,900")
    print("starting Chrome...", flush=True)
    driver = webdriver.Chrome(options=opts)
    try:
        # Set cookies via CDP (handles httpOnly), then load the app.
        driver.execute_cdp_cmd("Network.enable", {})
        for n, v in load_cookie_pairs():
            driver.execute_cdp_cmd("Network.setCookie", {
                "name": n, "value": v, "domain": ".muse.ai",
                "path": "/", "secure": True, "httpOnly": True,
            })
        driver.get(BASE + "/")
        time.sleep(3)
        print("loaded:", driver.current_url, "|", driver.title, flush=True)

        s = requests_session()
        last = None
        running_since = None
        while True:
            st = vm_state(s)
            now = time.strftime("%H:%M:%S")
            if st != last:
                print(f"[{now}] vm_state={st}", flush=True)
                last = st
                if st == "RUNNING":
                    running_since = time.time()
            elif st == "RUNNING" and running_since:
                mins = round((time.time() - running_since) / 60, 1)
                print(f"[{now}] still RUNNING ({mins} min)", flush=True)
            time.sleep(20)
    except KeyboardInterrupt:
        print("\nstopping, closing browser.")
    finally:
        try:
            driver.quit()
        except Exception:
            pass


if __name__ == "__main__":
    main()
