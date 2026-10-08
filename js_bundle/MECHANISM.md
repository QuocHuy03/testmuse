# muse.ai (Meta Hatch) — VM + /v1/noise mechanism

Reverse-engineered from the muse.ai web app JS bundle (live mitm capture, app
loaded) and from live API probing with a logged-in `cookies.txt`. File names
below point into `js_bundle/pretty/`.

## 1. VM lifecycle

Each account is assigned a **confidential VM** ("hatch_vm", `*.metaaivm.com`).
Observed states (enum in `2wkfu9l1a_hum.js`):

```
UNKNOWN, CREATING, RUNNING, STOPPED, DELETING, ERROR, SUSPENDED, UPDATING, DISABLED
```

- It **idle-suspends** (`RUNNING -> SUSPENDED`) when no client is connected to
  its Noise websocket. Measured once: stayed RUNNING ~47 min after the last WSS
  activity, then suspended.
- The app treats `SUSPENDED` / `UPDATING` as "needs recovery"
  (`3r93bf493vh-m.js`: `function C(e){return "SUSPENDED"===e||"UPDATING"===e}`),
  shows a "warming" UI (~2s / ~10s deadline timers) and reconnects.

### Reading state (HTTP, cookies only)
`GET /api/session?vm_state=live` → `{vm_id, vm_state, vms:[{..., notary_token_expiration_ts}]}`

## 2. What actually resumes a suspended VM

**`POST /api/hatch/vm/wake` ALONE DOES NOT RESUME IT.** Verified: 50+ wake
calls over 6+ minutes left the VM `SUSPENDED`. The wake endpoint returns
`{"status":"wake_requested"}` and only refreshes `notary_token_expiration_ts`.

The VM resumes to `RUNNING` only when a client **completes the Noise handshake**
to `wss://hatch.metaaivm.com/v1/noise`. In practice that means the real web app
JS running in a browser. `vm/wake` is just a side-signal the app sends while it
is establishing that gateway connection.

Consequence: a browser tab on the dashboard (`muse.ai/`) is **not enough** on
its own in testing — the websocket is opened by the in-app session flow.

## 3. Full connection flow

HTTP (authenticated by the `hatch_sess` etc. cookies):
1. `GET /api/session?vm_state=live` → `vm_id`, `vm_name`, `vm_state`.
2. `POST /api/hatch/token` `{vmAddress:"<vm_id>.metaaivm.com"}` → gateway
   admission, sets the `hatch_gw` cookie.
3. `POST /api/hatch/noise-notary-token` `{vmName}` →
   `{notaryToken:"delegation...."}` (8s timeout). File: `2kzwdkemdsxkx.js`.
4. (`POST /api/hatch/vm/wake` `{vm_id, retry_count, connect_attempt_id}` — hint
   only; see §2.) Also `/api/hatch/lease-vm`.

WebSocket `wss://hatch.metaaivm.com/v1/noise` (`NOISE_WS_PATH="/v1/noise"`):
- **NoiseXX** handshake, **X25519** DH (`2kzwdkemdsxkx.js`, `0v-mzmacrxjyu.js`).
- Client credential keypair for the "CVM credential" / notary signing key;
  enrollment is **in-band** via handshake message kinds `enroll_new` /
  `enroll_existing` and `authorizeKeyDisclosure` (no separate HTTP enroll
  endpoint). The client signs to disclose/authorize its static key.
- Server sends `message2Kind:"attestation"` with `{attestationPayload,
  serverStaticPublicKey, handshakeHash, clientNonce}` and the **client** calls
  `verify(...)` on it → this is **remote attestation of the SERVER (the
  confidential VM) BY the client**, i.e. the VM proving it is genuine/untampered
  to the client. It is NOT the client proving itself to the server. Failure →
  `SharedAgentNoiseTrustError("attestation_rejected")`.

## 4. Key material (decisive for headless feasibility)

- Client keys: `crypto.subtle.generateKey` + `exportKey` + `importKey`,
  `deriveBits` (X25519), `sign`. Stored in **IndexedDB**.
- **No WebAuthn, no `navigator.credentials`, no `PublicKeyCredential`,** no
  TPM/device binding anywhere in the bundle. The CVM credential is a **pure
  software key**.

## 5. Headless-client feasibility — corrected verdict

Earlier I said a non-browser client was "impossible because of attestation".
That was **wrong** and I'm correcting it:

- The attestation is **server→client**, so a headless client does **not** need
  to produce any attestation (it can even skip verifying the server's).
- The notary token is a plain **cookie-authenticated HTTP call**.
- The client credential is a **software key**, not hardware-bound.

So a headless keepalive client is **feasible in principle**, NOT impossible.
It is still a **substantial** reverse-engineering effort, because you must
reimplement, byte-accurate:
1. The NoiseXX handshake (X25519, the exact prologue / message framing).
2. The in-band `enroll_new`/`enroll_existing` + `authorizeKeyDisclosure`
   credential signing, keyed by the `notaryToken` delegation.
3. The post-handshake app frame protocol (enough of it to be counted as a live
   client — possibly just maintaining the socket + any heartbeat).

Risks: the message framing/signing details are fiddly, the credential may bind
to the session/generation (`getActiveCvmCredentialSessionBinding`,
`getCvmCredentialGeneration`), and Meta can change any of it. Days of work, and
a real chance of a dead end at step 2/3 — but no hard cryptographic wall.

### Practical alternative
Drive the real app in an automated browser (Selenium/Playwright) with the login
cookies, navigating into the in-app session so the app opens the websocket
itself. Heavier and slower, but uses the genuine client code (handshake +
attestation handled for you). See `browser_keepalive.py`.

## 7. Concrete handshake spec (for a PoC)

### WebSocket URL (`wsUrl` in `2kzwdkemdsxkx.js`)
```
wss://hatch.metaaivm.com/v1/noise
    ?vm_id=<vm_id>                 # from /api/session
    &auth_token=<gatewayToken>     # from POST /api/hatch/token
    &notary_token=<notaryToken>    # from POST /api/hatch/noise-notary-token {vmName}
    &app_id=hatch-web             # HATCH_APP_ID constant (confirmed from live capture)
    &request_id=<uuid4>            # crypto.randomUUID() per connection
```
`binaryType = "arraybuffer"`; one Noise message per WS binary frame.
There is also `getHatchCvmNotarySigningKey(n).endorse(token, "/v1/noise")` — the
notary signing key **endorses** the gateway token for this path.

### NoiseXX (`Noise_XX_25519_AESGCM_SHA256`, class in `2kzwdkemdsxkx.js`)
Primitives, all WebCrypto-reproducible in Python (`cryptography`):
- DH = X25519; hash = SHA-256; cipher = AES-256-GCM; KDF = HKDF-SHA256.
- `initialize`: `h = "Noise_XX_25519_AESGCM_SHA256"` right-zero-padded to 32 bytes;
  `ck = h`; then `mixHash(prologue=empty)`.
- `mixHash(d)`: `h = SHA256(h || d)`.
- `mixKey(ikm)`: `(ck, k) = HKDF(ck, ikm, 2)`, cipher nonce resets to 0.
- `encryptAndHash(p)`: `c = AESGCM(k, n++, ad=h, p)`; `mixHash(c)`; →`c`
  (no-key phase returns plaintext per Noise).
- Message framing:
  - **msg1 (→)**: `e.pub(32) || encryptAndHash(payload1)`.
    `payload1 = encodeNoiseClientNonceMessage1(clientNonce)` — a protobuf
    carrying a fresh client nonce (the "Message-1 freshness challenge");
    when none, a fixed `protobuf{field2=1}`.
  - **msg2 (←, ≥96 bytes)**: `re.pub(32) || enc(rs.pub)(48) || enc(payload2)`.
    `payload2 = decodeNoiseRvChallenge(...)` → `{attestation, state, ...}`.
    `state ∈ {unprovisioned, provisioned}`. This is the **server→client
    attestation** + the RV (remote-verification) challenge.
  - **msg3 (→)**: `enc(s.pub)(48) || encryptAndHash(payload3)`.
    `payload3 = b(rvChallenge, rvCredentials, hsHashAfterMsg1, hsHashAfterMsg2,
    clientNonce)` — the **RV challenge response**, keyed by the CVM credential
    `rvKey` (an X25519 key; response is an HKDF/HMAC over a DH secret + the two
    handshake hashes + nonce, NOT a public-key signature).
  - `split()` → two AES-GCM transport keys.

### Remaining unknowns (the risky part of a PoC)
1. Exact protobuf schemas for `encodeNoiseClientNonceMessage1`,
   `decodeNoiseRvChallenge`, and the msg3 response.
2. The `b(...)` RV-response construction (which DH + HKDF/HMAC info strings).
3. **Enrollment**: when `state == "unprovisioned"` the client must enroll a
   credential first (`cvm_enrollment_required`, kinds `enroll_new` /
   `enroll_existing`) before it can answer the challenge.

Best way to pin these down: build the PoC up to **reading msg2 live** (HTTP →
open WS → send msg1 → decrypt msg2) and inspect the real RV-challenge bytes,
rather than reading more minified code.

## 8. PoC results (`poc_noise.py`)

A headless Python client was built and run against the live gateway. How far it got:

- ✅ `GET /api/session` → vm_id, endpoint_url, state.
- ✅ `POST /api/hatch/token {vmAddress: "<endpoint_url, i.e. wss://<vm_id>.metaaivm.com/>"}`
  → `{token, notary_token}`. **vmAddress must be the full endpoint_url** (scheme
  + trailing slash); `"<vm_id>.metaaivm.com"` returns a token the gateway later
  rejects, and `"hatch.metaaivm.com"` returns HTTP 401 at mint time.
- ✅ Token shapes decoded and matched the browser byte-for-byte in format:
  - `auth_token` = EdDSA **JWT**, `kid=HATCH_EDGE_TO_VM_ADMISSION:1`,
    payload `{env_id:<vm_id>, ot:<opaque admission token>}` (len ~900). In the
    capture the URL `auth_token` is **exactly** the `/api/hatch/token` `token`
    (no client transform).
  - `notary_token` = `endorsement.v1.<6 binary segments>` (len ~575) — the
    `endorse()` output.
- ✅ NoiseXX initiator implemented and verified against the bundle
  (`Noise_XX_25519_AESGCM_SHA256`, HKDF-HMAC-SHA256, nonce `0^4||ctr_be64`).
- ❌ **WebSocket upgrade to `wss://hatch.metaaivm.com/v1/noise?...` returns
  `401 Unauthorized` from the Meta fwdproxy** (`proxy-status:
  http_request_error`) — before any Noise bytes are exchanged. All URL params
  (vm_id, auth_token, notary_token, app_id=hatch-web, request_id) match the
  captured browser request; the browser sends **no** extra auth header.

### Interpretation
We can obtain every piece of auth material the browser uses, in the right
format, yet the gateway still refuses the non-browser connection at the edge.
`http_request_error` (not a clean app-level JSON 401) points at a
**transport/edge check** — most likely TLS/client fingerprinting at Meta's
fwdproxy, and/or the endorsement being bound to the browser's enrolled notary
signing key / session in a way a fresh fetch doesn't satisfy. This is the
anti-automation layer; it is the practical wall, not the Noise crypto.

**Bottom line:** no hard crypto wall, but the live gateway rejects a hand-rolled
client at the edge. A real (optionally headless) browser remains the only
reliable way in. `poc_noise.py` is kept as a research artifact, not a working
keepalive.

## 6. Key files in this bundle
| area | file |
|---|---|
| VM wake + state enum | `pretty/2wkfu9l1a_hum.js` |
| VM recovery state machine | `pretty/3r93bf493vh-m.js` |
| Noise handshake + notary token + attestation | `pretty/2kzwdkemdsxkx.js`, `pretty/0v-mzmacrxjyu.js` |
| attestation / CVM credential | `pretty/2cr11gbafhlgw.js`, `pretty/3u0tj_77bovto.js`, `pretty/153vpyuy7g7ui.js` |
| notary token cache | `pretty/2c98d_-_8nryv.js` |
| auth / OTP | `pretty/275_j-l-etcel.js` |
| checkout / CCV age-verify | `pretty/2rs8ggqwve-7j.js` |
