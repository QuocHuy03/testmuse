#!/usr/bin/env python3
"""Diagnose WHY an account's VM won't boot (persistent 502). Prints the full
/api/session, ccv-status, wake response, and a few timed connect attempts so we
can tell cold-start-slow vs not-provisioned vs quota/region vs auth-dead.

  COOKIES=cookies_bad.txt PROXY=ip:port python diag_account.py
"""
import json, os, sys, time, uuid
import muse_noise as M

cook = os.environ.get("COOKIES", sys.argv[1] if len(sys.argv) > 1 else "cookies.txt")
proxy = os.environ.get("PROXY") or (sys.argv[2] if len(sys.argv) > 2 else None)
s = M.http_session(cook, proxy)

def show(label, method, path, **kw):
    try:
        r = s.request(method, M.BASE + path, timeout=20, **kw)
        body = r.text
        try: body = json.dumps(r.json(), indent=2, ensure_ascii=False)
        except Exception: pass
        print(f"\n=== {label}  [{method} {path}] -> HTTP {r.status_code} ===")
        print(body[:1500])
        return r
    except Exception as e:
        print(f"\n=== {label}  [{method} {path}] -> ERROR {type(e).__name__}: {str(e)[:150]} ===")
        return None

print("cookies:", cook, "| proxy:", proxy or "(none)")
r = show("SESSION", "GET", "/api/session?vm_state=live")
vm_id = None
try:
    j = r.json(); vm_id = j.get("vm_id")
except Exception:
    pass

show("CCV-STATUS", "GET", "/api/hatch/ccv-status")
show("CONSENT", "GET", "/api/consent/status")
if vm_id:
    show("WAKE", "POST", "/api/hatch/vm/wake",
         json={"vm_id": vm_id, "retry_count": 0, "connect_attempt_id": str(uuid.uuid4())})
    show("TOKEN", "POST", "/api/hatch/token",
         json={"vmAddress": f"wss://{vm_id}.metaaivm.com/"})

# watch vm_state over ~60s while nudging wake, to see if it EVER changes
print("\n=== vm_state over 60s (wake every 10s) ===")
t0 = time.time(); last = None
while time.time() - t0 < 60:
    try:
        st = M.read_session(s)
        cur = st["vm_state"]
        if cur != last:
            print(f"  t+{int(time.time()-t0):>2}s  vm_state={cur}  vm_id={st['vm_id']}")
            last = cur
        if st["vm_id"]:
            M.wake(s, st["vm_id"], 0)
    except Exception as e:
        print("  poll err:", type(e).__name__, str(e)[:100])
    time.sleep(10)
print("[done]")
