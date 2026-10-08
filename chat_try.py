#!/usr/bin/env python3
"""Try to actually make the agent RUN: subscribe to chat first, then chat.stream,
read 120s for a real AI reply. Also opens navigation/identity like the app."""
import json, sys, time, uuid
from urllib.parse import quote
from curl_cffi import requests as creq
from curl_cffi import CurlWsFlag
import muse_keepalive as M

cook = sys.argv[1] if len(sys.argv) > 1 else "cookies_new.txt"
text = sys.argv[2] if len(sys.argv) > 2 else "hi, say OK"
http = M.http_session(cook)
sess = M.read_session(http)
print("vm_id=", sess["vm_id"], "vm_state=", sess["vm_state"], flush=True)
auth, notary = M.mint_token(http, sess["endpoint_url"])
q = (f"vm_id={quote(sess['vm_id'])}&auth_token={quote(auth)}"
     f"&notary_token={quote(notary)}&app_id={M.APP_ID}&request_id={uuid.uuid4()}")
ws = creq.Session(impersonate="chrome", timeout=25).ws_connect(f"wss://{M.GATEWAY_HOST}/v1/noise?{q}", timeout=25)
send, recv = M._handshake(ws)

def H(jsonbody=True):
    h=[("x-request-id",str(uuid.uuid4())),("x-app-id",M.APP_ID),("Accept-Language","en-US")]
    if jsonbody: h.insert(0,("Content-Type","application/json"))
    return h

def send_req(sid, verb, path, bodydict):
    body = json.dumps(bodydict).encode() if bodydict is not None else b""
    for fr in M._build_request_frames(send,"daemon",verb,path,H(bool(body)),body,True,sid):
        ws.send(fr, CurlWsFlag.BINARY)
    print(f"[sent #{sid}] {verb} {path} {str(body)[:60]}", flush=True)

# mimic app connect order: subscriptions first, then chat.subscribe, then chat.stream
send_req(1,"POST","/navigation/subscribe",{})
send_req(2,"POST","/identity/subscribe",{})
send_req(3,"POST","/chat/subscribe",{"capabilities":M.CAPS})
time.sleep(1)
send_req(4,"POST","/chat/stream",{"items":[{"type":"text","text":text}],"node_id":str(uuid.uuid4()),"capabilities":M.CAPS})

buf={}; t0=time.time(); n=0
while time.time()-t0 < 120:
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
        sid=sf.get(1,[0])[0]; n+=1
        if 3 in sf:
            ar=M._parse_fields(sf[3][0]); print(f"[{int(time.time()-t0)}s] #{sid} resp status={ar.get(1,[0])[0]}",flush=True)
        elif 4 in sf:
            bc=M._parse_fields(sf[4][0]); data=bc.get(1,[b""])[0]
            if data: print(f"[{int(time.time()-t0)}s] #{sid} chunk {len(data)}B: {data[:260]}",flush=True)
        elif 5 in sf:
            rs=M._parse_fields(sf[5][0]); print(f"[{int(time.time()-t0)}s] #{sid} RESET {rs.get(1,[0])[0]} {rs.get(2,[b''])[0][:80]}",flush=True)
    except Exception as e:
        print("[decode err]",type(e).__name__,str(e)[:70],flush=True)
print(f"[done] frames={n}  vm_state_now={M.read_session(http)['vm_state']}",flush=True)
try: ws.close()
except Exception: pass
