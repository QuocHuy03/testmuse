#!/usr/bin/env python3
"""Ask the Hatch agent (over pure-Python Noise) to CREATE a video, and stream the
full response. Path: chat.subscribe then chat.stream (the one that runs the agent).
Surfaces AI text, status, and any artifact/file/video/url events."""
import json, sys, time, uuid
from urllib.parse import quote
from curl_cffi import requests as creq
from curl_cffi import CurlWsFlag
import muse_keepalive as M

cook = sys.argv[1] if len(sys.argv) > 1 else "cookies_new.txt"
prompt = sys.argv[2] if len(sys.argv) > 2 else "Create a short 5-second video of a sunset over the ocean."
read_s = int(sys.argv[3]) if len(sys.argv) > 3 else 240

http = M.http_session(cook)
sess = M.read_session(http)
print("vm_id=", sess["vm_id"], "vm_state=", sess["vm_state"], "proxy=", M.PROXY or "(none)", flush=True)
res = M.connect_noise(http, max_tries=120)   # retries through 502 until 101
if res is None:
    print("[fatal] could not establish Noise connection (gave up)"); sys.exit(1)
ws, send, recv, sess = res

def H():
    return [("Content-Type","application/json"),("x-request-id",str(uuid.uuid4())),
            ("x-app-id",M.APP_ID),("Accept-Language","en-US")]

def send_req(sid, path, bodydict):
    body = json.dumps(bodydict).encode()
    for fr in M._build_request_frames(send,"daemon","POST",path,H(),body,True,sid):
        ws.send(fr, CurlWsFlag.BINARY)

send_req(1,"/chat/subscribe",{"capabilities":M.CAPS})
time.sleep(0.5)
send_req(2,"/chat/stream",{"items":[{"type":"text","text":prompt}],"node_id":str(uuid.uuid4()),"capabilities":M.CAPS})
print(f"[sent] prompt = {prompt!r}; reading {read_s}s ...", flush=True)

buf={}; t0=time.time(); textbuf=""; INTEREST=("video","artifact","file","url","download","render","media","mp4","attachment")
while time.time()-t0 < read_s:
    try: piece,_=ws.recv()
    except Exception as e: print("[recv end]",type(e).__name__,str(e)[:70],flush=True); break
    if isinstance(piece,str): piece=piece.encode()
    if not piece: continue
    try:
        cid,idx,tot,payload=M._decode_transport_frame(recv.decrypt(piece))
        if tot==1: sr=payload
        else:
            buf.setdefault(cid,{})[idx]=payload
            if len(buf[cid])<tot: continue
            sr=b"".join(buf.pop(cid)[i] for i in range(tot))
        fields=M._parse_fields(sr); sf=M._parse_fields(fields.get(1,[b""])[0])
        if 4 in sf:
            data=M._parse_fields(sf[4][0]).get(1,[b""])[0]
            if not data: continue
            s=data.decode("utf-8","replace")
            try: ev=json.loads(s); etype=ev.get("event") or ev.get("type")
            except Exception: ev=None; etype=None
            el=int(time.time()-t0)
            if etype in ("delta.text_append",):
                p=ev.get("payload",{}); txt=p.get("text") or p.get("delta") or p.get("content") or ""
                textbuf+=txt
                if txt: print(f"[{el}s] +text: {txt!r}", flush=True)
            elif etype in ("agent.status","task.status"):
                p=ev.get("payload",{}); print(f"[{el}s] {etype}: {p.get('activity_code') or p.get('status')}", flush=True)
            elif etype=="delta.message_done":
                print(f"[{el}s] === message_done FULL PAYLOAD ===\n{s}\n=== end ===", flush=True)
            elif etype:
                low=s.lower()
                if any(k in low for k in INTEREST):
                    print(f"[{el}s] *** {etype} (FULL): {s}", flush=True)
                else:
                    print(f"[{el}s] {etype}: {s[:300]}", flush=True)
            else:
                print(f"[{el}s] raw: {s[:300]}", flush=True)
        elif 5 in sf:
            rs=M._parse_fields(sf[5][0]); print(f"[{int(time.time()-t0)}s] RESET {rs.get(1,[0])[0]} {rs.get(2,[b''])[0][:80]}", flush=True)
    except Exception as e:
        print("[decode err]",type(e).__name__,str(e)[:70],flush=True)
print("\n=== FULL AI TEXT ===\n"+textbuf, flush=True)
print(f"[done] vm_state_now={M.read_session(http)['vm_state']}", flush=True)
try: ws.close()
except Exception: pass
