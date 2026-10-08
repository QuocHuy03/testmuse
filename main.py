n#!/usr/bin/env python3
"""Interactive, single-account Muse.ai API diagnostic CLI.

This is a request/response test harness, not a bulk-registration tool.
It does not automate terms acceptance or checkout.
"""
import getpass
import json
import os
import sys
from urllib.parse import urljoin

import requests

# Override with MUSE_BASE to point at the local mock (mock_server.py) for testing.
BASE = os.environ.get("MUSE_BASE", "https://muse.ai/").rstrip("/") + "/"
SEND_OTP = "/api/auth/native/send-otp"
CONFIRM_OTP = "/api/auth/native/confirm-otp"
REGISTER_COMPLETION = "/api/auth/native/register-completion"


def print_response(label, response):
    print(f"\n--- {label} ---")
    print("HTTP:", response.status_code)
    print("URL:", response.url)
    try:
        body = response.json()
        print(json.dumps(body, indent=2, ensure_ascii=False))
    except ValueError:
        print(response.text[:3000] or "<empty response>")
    print("Cookies set (names only):", ", ".join(c.name for c in response.cookies) or "(none)")


def csrf_from_cookies(session):
    # The cookie is often formatted as token.signature. Never print its value.
    for cookie in session.cookies:
        if cookie.name == "hatch_native_auth_csrf":
            return cookie.value.split(".", 1)[0]
    return None


def post_json(session, path, payload, csrf):
    headers = {
        "accept": "*/*",
        "content-type": "application/json",
        "origin": "https://muse.ai",
        "referer": BASE,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/154 Safari/537.36",
    }
    if csrf:
        headers["x-hatch-csrf-token"] = csrf
    response = session.post(urljoin(BASE, path.lstrip("/")), json=payload,
                            headers=headers, timeout=25)
    print_response(path, response)
    return response


def main():
    print("Muse.ai API CLI — diagnostic mode")
    print("Use only an email account you control. Do not paste cookies or session tokens here.")
    print("This tool does not accept terms or call checkout/payment endpoints.\n")

    session = requests.Session()
    session.headers.update({"accept-language": "en-US,en;q=0.9"})

    try:
        home = session.get(BASE, timeout=25)
        print_response("GET /", home)
    except requests.RequestException as exc:
        print("Could not reach Muse.ai:", type(exc).__name__, str(exc))
        sys.exit(1)

    print("\nCookie names available in session:", ", ".join(c.name for c in session.cookies) or "(none)")
    csrf = csrf_from_cookies(session)
    if not csrf:
        print("\nNo hatch_native_auth_csrf cookie was issued by the initial GET.")
        print("This means the site's browser bootstrap may be required; stopping rather than")
        print("guessing or replaying stale cookies from a copied curl command.")
        sys.exit(2)

    email = input("\nEmail you control (not Hotmail, if preferred): ").strip()
    if not email or "@" not in email:
        print("Email does not look valid.")
        sys.exit(2)
    region = input("Region [US]: ").strip().upper() or "US"

    confirm = input(f"Send one OTP request to {email}? Type SEND to confirm: ").strip()
    if confirm != "SEND":
        print("Cancelled; no OTP request sent.")
        return

    try:
        sent = post_json(session, SEND_OTP,
                         {"contact_point": email, "region": region}, csrf)
    except requests.RequestException as exc:
        print("send-otp request failed:", type(exc).__name__, str(exc))
        sys.exit(1)

    if not sent.ok:
        print("\nRequest was not successful. Inspect the response above; do not loop/retry rapidly.")
        return

    try:
        state = sent.json().get("registration_state")
    except ValueError:
        state = None
    if state != "otp_sent":
        print("\nUnexpected registration state; stopping.")
        return

    otp = getpass.getpass("Enter the OTP you received (input hidden): ").strip()
    if not otp:
        print("No OTP entered; stopping.")
        return

    # Use the session's latest CSRF cookie if it changed after send-otp.
    csrf = csrf_from_cookies(session) or csrf
    try:
        verified = post_json(session, CONFIRM_OTP, {"otp_code": otp}, csrf)
    except requests.RequestException as exc:
        print("confirm-otp request failed:", type(exc).__name__, str(exc))
        sys.exit(1)

    try:
        state = verified.json().get("registration_state")
    except ValueError:
        state = None

    if verified.ok and state == "completion_required":
        print("\nOTP accepted; server reports completion_required.")
        print("Stopped here. Review the official site's date-of-birth, terms, and disclosure screens")
        print("yourself. This CLI intentionally does not submit those choices or call checkout.")
    elif verified.ok:
        print("\nRequest returned success, but state was not the expected completion_required.")
    else:
        print("\nOTP confirmation failed. Check the response above; avoid repeated rapid attempts.")


if __name__ == "__main__":
    main()
