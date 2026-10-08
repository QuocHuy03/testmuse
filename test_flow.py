#!/usr/bin/env python3
"""Muse.ai native-auth CLI (single account you control).

restart -> send-otp -> confirm-otp -> (optional) register-completion
The flow is tied together by one client-minted x-hatch-waterfall-id that is
created at restart and reused on every later call.

Use only an email you own. MUSE_BASE overrides the target.
Each request/response is saved as JSON under CAPTURE_DIR (default ./captures)
so you can inspect the real field names; secrets are redacted.
"""
import getpass
import json
import os
import sys
import time
import uuid
from datetime import datetime
from urllib.parse import urljoin, urlencode

import requests

BASE = os.environ.get("MUSE_BASE", "https://muse.ai/").rstrip("/") + "/"
REGION = os.environ.get("TEST_REGION", "US")
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36")
WATERFALL = str(uuid.uuid4())

# Verify TLS certificates by default.
VERIFY = True

CAPTURE_DIR = os.environ.get("CAPTURE_DIR", "captures")
RUN_DIR = os.path.join(CAPTURE_DIR, datetime.now().strftime("%Y%m%d-%H%M%S"))
# Any key whose name contains one of these (case-insensitive) is masked,
# at any depth — covers cookies, csrf/otp, and nested auth_meta_session tokens.
SECRET_SUBSTR = ("token", "session", "secret", "password", "cookie",
                 "csrf", "otp_code")

_step = 0


def die(msg):
    print("x", msg)
    sys.exit(1)


def normalize_dob(raw):
    # Returns a YYYY-MM-DD string. Empty -> default; accepts YYYY-MM-DD or
    # DD/MM/YYYY. Dies on anything that isn't a real date or isn't 18+.
    if not raw:
        return "2000-01-01"
    for fmt in ("%Y-%m-%d", "%d/%m/%Y"):
        try:
            d = datetime.strptime(raw, fmt).date()
            break
        except ValueError:
            d = None
    if d is None:
        die("date of birth must be YYYY-MM-DD or DD/MM/YYYY")
    today = datetime.now().date()
    years = today.year - d.year - ((today.month, today.day) < (d.month, d.day))
    if years < 18:
        die("account must be at least 18 years old")
    return d.strftime("%Y-%m-%d")


def why(body, resp):
    # muse.ai error bodies use detail/title; fall back to error, then status.
    return (body.get("detail") or body.get("title")
            or body.get("error") or resp.status_code)


def _redact(obj):
    if isinstance(obj, dict):
        return {k: ("<redacted>" if any(s in k.lower() for s in SECRET_SUBSTR)
                    else _redact(v)) for k, v in obj.items()}
    if isinstance(obj, list):
        return [_redact(x) for x in obj]
    return obj


def _save(name, resp, req_headers, payload):
    global _step
    _step += 1
    os.makedirs(RUN_DIR, exist_ok=True)
    try:
        resp_body = resp.json()
    except ValueError:
        resp_body = resp.text
    record = {
        "step": _step,
        "name": name,
        "request": {
            "method": "POST",
            "url": resp.url,
            "headers": _redact(req_headers),
            "json": _redact(payload),
        },
        "response": {
            "status": resp.status_code,
            "headers": _redact(dict(resp.headers)),
            "body": _redact(resp_body),
        },
    }
    path = os.path.join(RUN_DIR, f"{_step:02d}-{name}.json")
    with open(path, "w", encoding="utf-8") as fh:
        json.dump(record, fh, indent=2, ensure_ascii=False)


def warm_up(session):
    # Right after login the jar only holds the 3 native-auth cookies. A real
    # browser session also carries hatch_vml + datr, which the server only sets
    # once you load the app and hit these endpoints. Without them some API calls
    # 401. So replay what the browser does so the dumped cookie is complete.
    for path in ("/", "/access", "/api/session", "/api/consent/status"):
        try:
            session.get(urljoin(BASE, path.lstrip("/")), timeout=25,
                        verify=VERIFY, allow_redirects=True)
        except requests.exceptions.RequestException:
            pass

    # Last cookie the browser gets is hatch_gw — the gateway cookie. It is NOT a
    # login cookie: the browser mints it ~5-10s after load by POSTing the VM's
    # address to /api/hatch/token, which Set-Cookies hatch_gw and returns the VM
    # admission token. Replay that so the dump includes hatch_gw (full 6-cookie
    # set). vmAddress must be the VM hostname "<vm_id>.metaaivm.com".
    hdr = {
        "accept": "*/*", "content-type": "application/json",
        "origin": BASE.rstrip("/"), "referer": BASE, "user-agent": UA,
        "sec-fetch-site": "same-origin", "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
    }
    try:
        sess = session.get(urljoin(BASE, "api/session"), headers=hdr,
                           timeout=25, verify=VERIFY).json()
        vm_id = sess.get("vm_id")
        if vm_id:
            r = session.post(urljoin(BASE, "api/hatch/token"), headers=hdr,
                             json={"vmAddress": f"{vm_id}.metaaivm.com"},
                             timeout=25, verify=VERIFY)
            if not any(c.name == "hatch_gw" for c in session.cookies):
                print(f"  (note: hatch_gw not issued — /api/hatch/token "
                      f"returned {r.status_code})")
    except (requests.exceptions.RequestException, ValueError):
        pass


def redeem_invite(session):
    # Ask for an invite / referral code and redeem it against the logged-in
    # session. Blank input skips. The browser sends cookies + sec-fetch only
    # (no csrf/waterfall), body {"code": ..., "supportsRedemptionStatus": true}.
    code = input("Invite code (Enter to skip): ").strip()
    if not code:
        return
    hdr = {
        "accept": "*/*", "content-type": "application/json",
        "origin": BASE.rstrip("/"), "referer": BASE, "user-agent": UA,
        "sec-fetch-site": "same-origin", "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
    }
    try:
        r = session.post(urljoin(BASE, "api/hatch/invite-code/redeem"),
                         headers=hdr, timeout=25, verify=VERIFY,
                         json={"code": code, "supportsRedemptionStatus": True})
        body = r.json()
    except requests.exceptions.RequestException as exc:
        print(f"  invite redeem: network error — {exc}")
        return
    except ValueError:
        body = {}
    if r.ok and body.get("success"):
        print(f"OK invite '{code}' redeemed")
    else:
        print(f"x invite '{code}' failed: "
              f"{body.get('detail') or body.get('reason') or r.status_code}")


def _hatch_headers(referer=None):
    # Shared headers for the post-login hatch calls. These endpoints reject the
    # request without sec-fetch-site:same-origin (403); no csrf/waterfall needed.
    return {
        "accept": "*/*", "content-type": "application/json",
        "origin": BASE.rstrip("/"), "referer": referer or BASE, "user-agent": UA,
        "sec-fetch-site": "same-origin", "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
    }


VM_STATES_NEED_WAKE = {"SUSPENDED", "UPDATING"}


def _vm_state(session):
    # Live VM state for this logged-in session.
    r = session.get(urljoin(BASE, "api/session?vm_state=live"),
                    headers=_hatch_headers(), timeout=25, verify=VERIFY)
    body = r.json()
    return body.get("vm_id"), body.get("vm_state")


def _vm_wake(session, vm_id, attempt):
    # Mirror the web app's wake call: POST /api/hatch/vm/wake with an
    # incrementing retry_count and a fresh connect_attempt_id, 10s cap
    # (the app uses AbortSignal.timeout(1e4)).
    body = {"vm_id": vm_id, "retry_count": attempt,
            "connect_attempt_id": str(uuid.uuid4())}
    r = session.post(urljoin(BASE, "api/hatch/vm/wake"),
                     headers=_hatch_headers(), json=body, timeout=10,
                     verify=VERIFY)
    try:
        return r.json().get("status")
    except ValueError:
        return r.status_code


def ensure_vm_awake(session, keepalive=False):
    # After login the account's hatch VM is often SUSPENDED (it idle-suspends
    # whenever the app's Noise websocket is gone), so a fresh login lands on a
    # VM you cannot use yet. This wakes it to RUNNING the same way the web app's
    # recovery does, then (optionally) keeps it warm until interrupted.
    try:
        vm_id, state = _vm_state(session)
    except (requests.exceptions.RequestException, ValueError) as exc:
        print(f"> vm: could not read session ({type(exc).__name__}); skipping")
        return
    print(f"> vm {vm_id} state={state}")

    attempt = 0
    deadline = time.time() + 90  # don't hang forever on a dead VM
    while state in VM_STATES_NEED_WAKE and time.time() < deadline:
        attempt += 1
        print(f"  wake #{attempt}: {_vm_wake(session, vm_id, attempt)}")
        time.sleep(5)
        try:
            vm_id, state = _vm_state(session)
        except (requests.exceptions.RequestException, ValueError):
            continue
        print(f"  vm_state={state}")

    if state == "RUNNING":
        print("> vm RUNNING - ready to use")
    else:
        print(f"> vm still {state}; wake is async, give it a moment")

    if not keepalive:
        return
    print("> keepalive: polling /api/session every 15s, re-waking on "
          "SUSPENDED/UPDATING (Ctrl+C to stop)")
    try:
        while True:
            time.sleep(15)
            try:
                vm_id, state = _vm_state(session)
            except (requests.exceptions.RequestException, ValueError):
                continue
            if state in VM_STATES_NEED_WAKE:
                attempt += 1
                print(f"  [{datetime.now():%H:%M:%S}] {state} -> "
                      f"wake #{attempt}: {_vm_wake(session, vm_id, attempt)}")
    except KeyboardInterrupt:
        print("\n> keepalive stopped")


def accept_tos(session):
    # Step the browser runs right after register-completion (screen
    # /access/disclosure). Body is fixed for the ROW onboarding except
    # client_request_timestamp, which is the current unix time in SECONDS.
    body = {
        "saw_meta_ai_tos": False,
        "client_request_timestamp": str(int(datetime.now().timestamp())),
        "entry_point": "web_onboarding_flow",
        "nux_type": "ROW",
        "disclosure_version": "HATCH_ROW_v0",
        "disclosure_text": (
            "By continuing, you agree to the Muse Terms and Meta's AI Terms, "
            "which include important information about your rights and "
            "responsibilities. Learn more about Muse's approach to privacy in "
            "the Muse Privacy Policy."),
    }
    try:
        r = session.post(urljoin(BASE, "api/hatch/accept-tos"),
                         headers=_hatch_headers(BASE + "access/disclosure"),
                         json=body, timeout=25, verify=VERIFY)
        ok = r.ok and (r.json() or {}).get("success")
    except (requests.exceptions.RequestException, ValueError):
        ok = False
    print("> accept-tos " + ("OK" if ok else "FAILED"))
    return ok


def checkout_init(session):
    # The "init" step (screen /access/verification): opens the age-verification
    # (CCV) checkout. sessionId is minted CLIENT-side exactly like the browser:
    #   "upl_" + Date.now()(milliseconds) + "_" + a random uuid4
    # productId/receiverId are fixed constants for the Age-Verification product.
    session_id = f"upl_{int(datetime.now().timestamp() * 1000)}_{uuid.uuid4()}"
    body = {
        "sessionId": session_id,
        "productId": "766358168544755",
        "receiverId": "352501280694489",
        "productData": [],
    }
    try:
        r = session.post(urljoin(BASE, "api/checkout/init"),
                         headers=_hatch_headers(BASE + "access/verification"),
                         json=body, timeout=25, verify=VERIFY)
        data = r.json() if r.ok else {}
    except (requests.exceptions.RequestException, ValueError):
        r, data = None, {}

    if not data.get("orderId"):
        code = r.status_code if r is not None else "network-error"
        print(f"> checkout/init FAILED ({code}) sessionId {session_id}")
        return data

    # Build the Meta age-verification (CCV) checkout link from the init result.
    # Everything comes from init + the sessionId we sent + fixed constants; the
    # two ids below (otc_session_id, ccv_id) are client-minted random uuids —
    # the muse.ai client generates them with crypto.randomUUID() and embeds
    # ccv_id in its own return URLs, so nothing fetches them from the server.
    otc_session_id = str(uuid.uuid4())
    ccv_id = str(uuid.uuid4())
    ret = BASE.rstrip("/") + "/checkout/ccv-return"
    params = {
        "receiver_id": "352501280694489",
        "product_id": "766358168544755",
        "order_id": data["orderId"],
        "session_id": session_id,
        "otc_session_id": otc_session_id,
        "otc_type": "card",
        "is_dialog": "1",
        "payment_success_action": f"{ret}?status=success&ccv_id={ccv_id}",
        "payment_failure_action": f"{ret}?status=error&ccv_id={ccv_id}",
        "payment_container_mode": data.get("paymentContainerMode", "LIVE"),
        "receiver_name": data.get("receiverName", "Age Verification CCV"),
    }
    checkout_url = "https://auth.meta.com/payments/checkout/?" + urlencode(params)
    data["_checkout_url"] = checkout_url
    data["_upl_session_id"] = session_id

    # Capture the init response + the built link (same style as the other steps).
    try:
        os.makedirs(RUN_DIR, exist_ok=True)
        with open(os.path.join(RUN_DIR, "checkout-init.json"), "w",
                  encoding="utf-8") as fh:
            json.dump({"request": body, "response": data,
                       "checkout_url": checkout_url}, fh, indent=2,
                      ensure_ascii=False)
    except OSError:
        pass

    print(f"> checkout/init OK — orderId {data['orderId']} "
          f"(receiver: {data.get('receiverName')})")
    print(f"  sessionId:  {session_id}")
    print(f"  CHECKOUT LINK:\n  {checkout_url}")
    return data


def checkout_encryption_key(session, init_data):
    """Optional diagnostics for the checkout encryption-key endpoint.

    Only prints/saves a small summary. Never logs the returned trust chain or
    platformTrustToken, and deliberately does not submit payment credentials.
    """
    if input("Run encryption-key diagnostics? (y/N): ").strip().lower() != "y":
        return

    session_id = init_data.get("_upl_session_id")
    if not session_id:
        print("> encryption-key diagnostics skipped: missing checkout session ID")
        return

    payload = {
        "deviceId": str(uuid.uuid4()),
        "paymentType": "ECP",
        "uplSessionId": session_id,
        "productId": "766358168544755",
        "otcSessionId": str(uuid.uuid4()),
        "otcType": "card",
    }
    headers = _hatch_headers(BASE + "access/verification")
    try:
        response = session.post(
            urljoin(BASE, "api/ptt/encryption-key"),
            headers=headers,
            json=payload,
            timeout=25,
            verify=VERIFY,
        )
        try:
            body = response.json()
        except ValueError:
            body = {}

        # Keep only non-secret diagnostics; never persist certificate chains or tokens.
        summary = {
            "status": response.status_code,
            "ok": response.ok,
            "has_id": bool(body.get("id")),
            "trust_chain_count": len(body.get("trustChain") or [])
                if isinstance(body.get("trustChain"), list) else 0,
            "platform_trust_token_present": bool(body.get("platformTrustToken")),
            "dev_external": body.get("devExternal"),
        }
        os.makedirs(RUN_DIR, exist_ok=True)
        with open(os.path.join(RUN_DIR, "encryption-key-summary.json"),
                  "w", encoding="utf-8") as fh:
            json.dump({"request": {
                "endpoint": "/api/ptt/encryption-key",
                "productId": payload["productId"],
                "paymentType": payload["paymentType"],
                "otcType": payload["otcType"],
            }, "summary": summary}, fh, indent=2, ensure_ascii=False)
        print(f"> encryption-key diagnostics: HTTP {response.status_code}; "
              f"trust chain entries={summary['trust_chain_count']}; "
              f"platform token present={summary['platform_trust_token_present']}")
    except requests.exceptions.RequestException as exc:
        print(f"> encryption-key diagnostics network error: {type(exc).__name__}")


def dump_cookies(session, email, label):
    # Warm the session first so we capture the FULL cookie set, not just the
    # bare login cookies. Then write the cookie header string to one file.
    warm_up(session)
    cookies = list(session.cookies)
    header = "; ".join(f"{c.name}={c.value}" for c in cookies)
    root_path = os.path.join(os.getcwd(), "cookies.txt")
    with open(root_path, "w", encoding="utf-8") as fh:
        fh.write(header + "\n")
    names = ", ".join(c.name for c in cookies)
    print(f"> {len(cookies)} cookies saved -> {root_path}")
    print(f"  ({names})")


def post(session, path, payload, csrf, name):
    headers = {
        "accept": "*/*",
        "content-type": "application/json",
        "origin": BASE.rstrip("/"),
        "referer": BASE,
        "user-agent": UA,
        "x-hatch-waterfall-id": WATERFALL,
        "x-hatch-caa-reg-entry-point": "login_home",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
    }
    if csrf:
        headers["x-hatch-csrf-token"] = csrf
    try:
        r = session.post(urljoin(BASE, path.lstrip("/")), json=payload,
                         headers=headers, timeout=25, verify=VERIFY)
    except requests.exceptions.RequestException as exc:
        die(f"{name}: network/connection error — {type(exc).__name__}: {exc}\n"
            f"  (the edge dropped the connection before replying; see note below)")
    _save(name, r, headers, payload)
    try:
        return r, r.json()
    except ValueError:
        return r, {}


def main():
    s = requests.Session()
    s.headers.update({"accept-language": "en-US,en;q=0.9", "user-agent": UA})

    # 1. restart -> mint csrf token bound to this waterfall id
    r, body = post(s, "api/auth/native/restart", {}, None, "restart")
    csrf = body.get("csrf_token")
    if not csrf:
        die(f"restart failed: {r.status_code} {r.text[:120]}")

    # 2. send-otp
    email = input("Email: ").strip()
    if "@" not in email:
        die("invalid email")
    r, body = post(s, "api/auth/native/send-otp",
                   {"contact_point": email, "region": REGION}, csrf, "send-otp")
    if body.get("registration_state") != "otp_sent":
        die(f"send-otp failed: {why(body, r)}")
    print("> OTP sent")

    # 3. confirm-otp
    otp = getpass.getpass("OTP: ").strip()
    csrf = body.get("csrf_token") or csrf
    r, body = post(s, "api/auth/native/confirm-otp",
                   {"otp_code": otp}, csrf, "confirm-otp")
    if not r.ok:
        die(f"OTP rejected: {why(body, r)}")

    # Two valid outcomes: an existing account logs straight in (auth session
    # returned), or a new account must still complete registration.
    if body.get("auth_meta_session") or body.get("redirect_to"):
        print(f"OK logged in — existing account (captures in {RUN_DIR})")
        redeem_invite(s)
        dump_cookies(s, email, "login (existing account)")
        keep = (os.environ.get("KEEPALIVE") == "1"
                or input("Wake VM and keep it awake? (y/N): ").strip().lower() == "y")
        ensure_vm_awake(s, keepalive=keep)
        return
    if body.get("registration_state") != "completion_required":
        die(f"unexpected state after OTP: "
            f"{body.get('registration_state') or why(body, r)}")
    print("> OTP OK — new account, completion required")

    # The server tells us here which TOS version this completion must echo back
    # and whether a name is still required. Both are read from the live
    # confirm-otp body rather than hardcoded, so the payload stays in sync.
    tos_version = (body.get("tos") or {}).get("content_version")
    requires_name = body.get("requires_name", False)

    # 4. optional completion (this creates the account + accepts terms — confirm)
    if input("Complete registration? (y/N): ").strip().lower() != "y":
        print(f"done (captures in {RUN_DIR})")
        return
    if not tos_version:
        die("no tos.content_version in confirm-otp response; cannot complete")

    # DOB just has to be a real date and 18+. Accept YYYY-MM-DD or DD/MM/YYYY;
    # blank Enter uses a default adult date. Stored back as YYYY-MM-DD.
    raw = input("Date of birth [Enter = 2000-01-01, or YYYY-MM-DD / DD/MM/YYYY]: ").strip()
    dob = normalize_dob(raw)

    # Mirror the real browser payload: date_of_birth + the server's own
    # tos_content_version. 'name' is only sent when the server asked for it.
    payload = {"date_of_birth": dob, "tos_content_version": tos_version}
    if requires_name:
        name = input("Name: ").strip()
        if not name:
            die("server requires a name for this account")
        payload["name"] = name

    csrf = body.get("csrf_token") or csrf
    r, body = post(s, "api/auth/native/register-completion",
                   payload, csrf, "register-completion")
    if not r.ok:
        die(f"completion failed: {why(body, r)}")
    # On success the server logs the new account straight in: it returns an
    # auth_meta_session (frl_account_id + token) and a redirect, not a
    # registration_state. Surface the account id so the result is verifiable.
    sess = body.get("auth_meta_session") or {}
    acct = sess.get("frl_account_id")
    state = body.get("registration_state")
    if acct or body.get("redirect_to") or state in ("complete", None):
        print(f"OK registration completed — account {acct or '(id not returned)'}, "
              f"redirect {body.get('redirect_to') or '-'} (captures in {RUN_DIR})")
        # New-account onboarding the browser runs next: disclosure + the
        # age-verification (CCV) checkout "init". accept-tos must precede init.
        accept_tos(s)
        checkout_data = checkout_init(s)
        if checkout_data.get("orderId"):
            checkout_encryption_key(s, checkout_data)
        redeem_invite(s)
        dump_cookies(s, email, "registration-completion (new account)")
        keep = (os.environ.get("KEEPALIVE") == "1"
                or input("Wake VM and keep it awake? (y/N): ").strip().lower() == "y")
        ensure_vm_awake(s, keepalive=keep)
    else:
        print(f"> completion returned state={state} (captures in {RUN_DIR})")


if __name__ == "__main__":
    main()
