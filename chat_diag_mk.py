#!/usr/bin/env python3
"""Diagnostic via muse_keepalive internals: send ONE chat.stream and read 90s,
printing every frame, to see if the AGENT actually replies (real compute)."""
import json, os, sys, time, uuid
from urllib.parse import quote
from curl_cffi import requests as creq
from curl_cffi import CurlWsFlag
import muse_keepalive as M

cook = sys.argv[1] if len(sys.argv) > 1 else "cookies_new.txt"
text = sys.argv[2] if len(sys.argv) > 2 else "hello there"
http = M.http_session(cook)
sess = M.read_session(http)
print("vm_id=", sess["vm_id"], "vm_state=", sess["vm_state"], flush=True)
auth, notary = M.mint_token(http, sess["endpoint_url"])
q = (f"vm_id={quote(sess['vm_id'])}&auth_token={quote(auth)}"
     f"&notary_token={quote(notary)}&app_id={M.APP_ID}&request_id={uuid.uuid4()}")
ws = creq.Session(impersonate="chrome", timeout=25).ws_connect(f"wss://{M.GATEWAY_HOST}/v1/noise?{q}", timeout=25)
hs = M._handshake(ws)
send, recv = hs
print("[split] sending chat.stream '%s'" % text, flush=True)
body = json.dumps({"items":[{"type":"text","text":text}],"node_id":str(uuid.uuid4()),"capabilities":M.CAPS}).encode()
hdrs = [("Content-Type","application/json"),("x-request-id",str(uuid.uuid4())),("x-app-id",M.APP_ID),("Accept-Language","en-US")]
for fr in M._build_request_frames(send,"daemon","POST","/chat/stream",hdrs,body,True,1):
    ws.send(fr, CurlWsFlag.BINARY)
buf={}; t0=time.time(); n=0
while time.time()-t0 < 90:
    try: piece,_=ws.recv()
    except Exception as e: print("[recv end]", type(e).__name__, str(e)[:80], flush=True); break
    if isinstance(piece,str): piece=piece.encode()
    if not piece: continue
    try:
        cid,idx,tot,payload=M._decode_transport_frame(recv.decrypt(piece))
        if tot==1: sr=payload
        else:
            buf.setdefault(cid,{})[idx]=payload
            if len(buf[cid])<tot: continue
            sr=b"".join(buf.pop(cid)[i] for i in range(tot))
        r=M.decode_service_response(sr); n+=1
        # richer decode for chunk data:
        fields=M._parse_fields(sr); sf=M._parse_fields(fields.get(1,[b""])[0])
        if r["kind"]=="response": print(f"[{int(time.time()-t0)}s] resp status={r['status']}", flush=True)
        elif r["kind"]=="bodyChunk":
            bc=M._parse_fields(sf[4][0]); data=bc.get(1,[b""])[0]
            print(f"[{int(time.time()-t0)}s] chunk {len(data)}B: {data[:240]}", flush=True)
        elif r["kind"]=="reset":
            rs=M._parse_fields(sf[5][0]); print(f"[{int(time.time()-t0)}s] RESET {rs.get(1,[0])[0]} {rs.get(2,[b''])[0][:80]}", flush=True)
    except Exception as e:
        print("[decode err]", type(e).__name__, str(e)[:80], flush=True)
print(f"[done] frames={n}", flush=True)
try: ws.close()
except Exception: pass
