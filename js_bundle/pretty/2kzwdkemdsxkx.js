;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "641fd888-08a6-32a4-8e32-6810ff7e375b")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 235327, 859047, 190266, 545050, 504155, e => {
  "use strict";

  function t(...e) {
    let r = 0;
    for (let t of e) r += t.length;
    let n = new Uint8Array(r),
      i = 0;
    for (let t of e) n.set(t, i), i += t.length;
    return n
  }
  e.s(["concat", 0, t], 859047);
  let r = new Uint8Array(32),
    n = [new Uint8Array(32).fill(0), new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), new Uint8Array([224, 235, 122, 124, 59, 65, 184, 174, 22, 86, 227, 250, 241, 159, 196, 106, 218, 9, 141, 235, 156, 50, 177, 253, 134, 98, 5, 22, 95, 73, 184, 0]), new Uint8Array([95, 156, 149, 188, 163, 80, 140, 36, 177, 208, 177, 85, 156, 131, 239, 91, 4, 68, 92, 196, 88, 28, 142, 134, 216, 34, 78, 221, 208, 159, 17, 87]), new Uint8Array([236, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 127]), new Uint8Array([237, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 127]), new Uint8Array([238, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 127])];
  class i extends Error {
    kind = "noise_x25519_unavailable";
    constructor(e, t) {
      super(e), this.name = "NoiseX25519UnavailableError", t && "cause" in t && (this.cause = t.cause)
    }
  }

  function a(e) {
    e.fill(0)
  }

  function s(e, t) {
    if (e.length !== t.length) return !1;
    let r = 0;
    for (let n = 0; n < e.length; n++) r |= e[n] ^ t[n];
    return 0 === r
  }
  async function o() {
    let {
      default: t
    } = await e.A(291462);
    try {
      await t.ready
    } catch (e) {
      throw new i("This browser cannot initialize compatible X25519 cryptography", {
        cause: e
      })
    }
    return t
  }
  let l = null;
  async function c() {
    return null == l && (l = o().catch(e => {
      throw l = null, e
    })), l
  }
  async function h() {
    let e = await crypto.subtle.generateKey({
        name: "X25519"
      }, !1, ["deriveBits"]),
      t = await crypto.subtle.exportKey("raw", e.publicKey);
    return {
      backend: "webcrypto",
      privateKey: {
        backend: "webcrypto",
        key: e.privateKey
      },
      publicKeyBytes: new Uint8Array(t)
    }
  }
  async function d() {
    let e = await c();
    try {
      let t = e.crypto_box_keypair();
      if (32 !== t.privateKey.length || 32 !== t.publicKey.length) throw a(t.privateKey), a(t.publicKey), Error("libsodium returned an invalid X25519 key length");
      return {
        backend: "libsodium",
        privateKey: {
          backend: "libsodium",
          bytes: t.privateKey
        },
        publicKeyBytes: t.publicKey
      }
    } catch (e) {
      if (e instanceof i) throw e;
      throw new i("This browser cannot initialize compatible X25519 cryptography", {
        cause: e
      })
    }
  }
  async function u() {
    try {
      return await h()
    } catch (e) {
      if (!(e instanceof Error && "NotSupportedError" === e.name)) throw e;
      return d()
    }
  }
  async function y(e, t) {
    let i;
    if (32 !== t.length) throw Error("x25519: invalid public key length");
    for (let e of n)
      if (s(t, e)) throw Error("x25519: rejected low-order public key");
    if ("webcrypto" === e.backend) {
      let r = await crypto.subtle.importKey("raw", 0 === t.byteOffset && t.byteLength === t.buffer.byteLength ? t.buffer : t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength), {
        name: "X25519"
      }, !1, []);
      i = new Uint8Array(await crypto.subtle.deriveBits({
        name: "X25519",
        public: r
      }, e.key, 256))
    } else i = (await c()).crypto_scalarmult(e.bytes, t);
    if (s(i, r)) throw a(i), Error("x25519: DH produced all-zeros output");
    return i
  }

  function w(e) {
    a(e.publicKeyBytes), "libsodium" === e.privateKey.backend && a(e.privateKey.bytes)
  }
  e.s(["NoiseX25519UnavailableError", 0, i, "destroyX25519KeyPair", 0, w, "generateX25519KeyPair", 0, u, "x25519DH", 0, y], 190266);

  function m(e) {
    return 0 === e.byteOffset && e.byteLength === e.buffer.byteLength ? e.buffer : e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
  }

  function g(e) {
    e.fill(0)
  }
  async function f(e, t) {
    let r = await crypto.subtle.importKey("raw", m(e), {
      name: "HMAC",
      hash: "SHA-256"
    }, !1, ["sign"]);
    return new Uint8Array(await crypto.subtle.sign("HMAC", r, m(t)))
  }
  async function p(e, r, n) {
    let i = await f(e, r),
      a = await f(i, new Uint8Array([1])),
      s = await f(i, t(a, new Uint8Array([2])));
    if (2 === n) return g(i), [a, s];
    let o = await f(i, t(s, new Uint8Array([3])));
    return g(i), [a, s, o]
  }

  function v(e) {
    let t = new Uint8Array(12),
      r = new DataView(t.buffer);
    return r.setUint32(4, Math.floor(e / 0x100000000), !1), r.setUint32(8, e >>> 0, !1), t
  }
  class A {
    #e = null;
    #t = null;
    #r = !1;
    #n = 0;
    #i = !1;
    #a = Promise.resolve();
    #s() {
      if (this.#i) throw Error("CipherState: poisoned after prior failure")
    }
    async initializeKey(e) {
      this.#s();
      let t = m(e),
        [r, n] = await Promise.all([crypto.subtle.importKey("raw", t, "AES-GCM", !1, ["encrypt"]), crypto.subtle.importKey("raw", t, "AES-GCM", !1, ["decrypt"])]);
      this.#e = r, this.#t = n, g(e), g(new Uint8Array(t)), this.#r = !0, this.#n = 0
    }
    hasKey() {
      return this.#r
    }
    async encryptWithAd(e, t) {
      return this.#o(() => this.#l(e, t))
    }
    async decryptWithAd(e, t) {
      return this.#o(() => this.#c(e, t))
    }
    async #l(e, t) {
      if (this.#s(), !this.#r) return t;
      if (this.#n >= Number.MAX_SAFE_INTEGER) throw this.#i = !0, Error("CipherState: nonce exhausted");
      let r = v(this.#n++);
      try {
        let n = await crypto.subtle.encrypt({
          name: "AES-GCM",
          iv: m(r),
          additionalData: m(e),
          tagLength: 128
        }, this.#e, m(t));
        return new Uint8Array(n)
      } catch (e) {
        throw this.#i = !0, e
      }
    }
    async #c(e, t) {
      if (this.#s(), !this.#r) return t;
      if (this.#n >= Number.MAX_SAFE_INTEGER) throw this.#i = !0, Error("CipherState: nonce exhausted");
      let r = v(this.#n++);
      try {
        let n = await crypto.subtle.decrypt({
          name: "AES-GCM",
          iv: m(r),
          additionalData: m(e),
          tagLength: 128
        }, this.#t, m(t));
        return new Uint8Array(n)
      } catch (e) {
        throw this.#i = !0, e
      }
    }
    async #o(e) {
      let t, r = this.#a;
      this.#a = new Promise(e => t = e), await r;
      try {
        return await e()
      } finally {
        t()
      }
    }
  }
  class E {
    #h = new Uint8Array(32);
    #d = new Uint8Array(32);
    #u = new A;
    async initialize() {
      let e = new TextEncoder().encode("Noise_XX_25519_AESGCM_SHA256"),
        t = new Uint8Array(32);
      t.set(e), this.#d = t, this.#h = new Uint8Array(this.#d), await this.mixHash(new Uint8Array(0))
    }
    async mixHash(e) {
      this.#d = new Uint8Array(await crypto.subtle.digest("SHA-256", m(t(this.#d, e))))
    }
    async mixKey(e) {
      let [t, r] = await p(this.#h, e, 2);
      g(this.#h), this.#h = t, this.#u = new A, await this.#u.initializeKey(r)
    }
    async encryptAndHash(e) {
      let t = await this.#u.encryptWithAd(this.#d, e);
      return await this.mixHash(t), t
    }
    async decryptAndHash(e) {
      let t = await this.#u.decryptWithAd(this.#d, e);
      return await this.mixHash(e), t
    }
    async split() {
      let [e, t] = await p(this.#h, new Uint8Array(0), 2);
      g(this.#h), g(this.#d);
      let r = new A;
      await r.initializeKey(e);
      let n = new A;
      return await n.initializeKey(t), [r, n]
    }
    handshakeHash() {
      return new Uint8Array(this.#d)
    }
  }

  function b(e, t, r) {
    if (6 === e) throw Error(`NoiseXX: ${r} called on dead handshake`);
    if (e !== t) throw Error(`NoiseXX: ${r} called in wrong phase (expected ${t}, got ${e})`)
  }
  class S {
    #y = new E;
    #w = null;
    #m = null;
    #g = null;
    #f = null;
    #p = null;
    #v = 0;
    #A() {
      this.#g && g(this.#g), this.#f && g(this.#f), this.#w && w(this.#w), this.#m && w(this.#m), this.#g = null, this.#f = null, this.#w = null, this.#m = null
    }
    async initialize() {
      b(this.#v, 0, "initialize"), await this.#y.initialize(), this.#v = 1
    }
    async writeMessage1(e = new Uint8Array(0)) {
      b(this.#v, 1, "writeMessage1");
      try {
        let r = await u();
        if (1 !== this.#v) throw w(r), Error("NoiseXX: writeMessage1 canceled during key generation");
        this.#w = r, this.#p = this.#w.backend, await this.#y.mixHash(this.#w.publicKeyBytes);
        let n = await this.#y.encryptAndHash(e);
        return this.#v = 2, t(this.#w.publicKeyBytes, n)
      } catch (e) {
        throw this.destroy(), e
      }
    }
    async readMessage2(e) {
      if (b(this.#v, 2, "readMessage2"), e.length < 96) throw this.destroy(), Error(`NoiseXX: message 2 too short (${e.length} < 96)`);
      try {
        let t = 0;
        this.#g = new Uint8Array(e.subarray(t, t + 32)), await this.#y.mixHash(this.#g), t += 32;
        let r = await y(this.#w.privateKey, this.#g);
        await this.#y.mixKey(r), g(r), this.#f = await this.#y.decryptAndHash(e.subarray(t, t + 32 + 16)), t += 48;
        let n = await y(this.#w.privateKey, this.#f);
        await this.#y.mixKey(n), g(n);
        let i = await this.#y.decryptAndHash(e.subarray(t));
        return this.#v = 3, i
      } catch (e) {
        throw this.destroy(), e
      }
    }
    async writeMessage3(e = new Uint8Array(0)) {
      b(this.#v, 3, "writeMessage3");
      try {
        let r = await u();
        if (3 !== this.#v) throw w(r), Error("NoiseXX: writeMessage3 canceled during key generation");
        this.#m = r;
        let n = await this.#y.encryptAndHash(this.#m.publicKeyBytes),
          i = await y(this.#m.privateKey, this.#g);
        await this.#y.mixKey(i), g(i);
        let a = await this.#y.encryptAndHash(e);
        return this.#v = 4, t(n, a)
      } catch (e) {
        throw this.destroy(), e
      }
    }
    async split() {
      b(this.#v, 4, "split"), this.#v = 5;
      let e = await this.#y.split();
      return this.#A(), e
    }
    destroy() {
      this.#A(), this.#v = 6
    }
    remoteStaticPublicKey() {
      return null == this.#f ? null : new Uint8Array(this.#f)
    }
    handshakeHash() {
      return this.#y.handshakeHash()
    }
    x25519Backend() {
      return this.#p
    }
  }
  e.s(["NoiseXXInitiator", 0, S], 235327);
  var k, C, R = e.i(31130),
    N = e.i(16050),
    T = e.i(333678),
    I = e.i(114293),
    U = e.i(654157);
  let V = (0, I.fileDesc)("ChVub2lzZV90cmFuc3BvcnQucHJvdG8SEWluZ3Jlc3NfcmV2X3Byb3h5IrEBChNOb2lzZVRyYW5zcG9ydEZyYW1lEhUKCGNodW5rX2lkGAEgASgDSACIAQESGAoLY2h1bmtfaW5kZXgYAiABKA1IAYgBARIZCgx0b3RhbF9jaHVua3MYAyABKA1IAogBARIUCgdwYXlsb2FkGAQgASgMSAOIAQFCCwoJX2NodW5rX2lkQg4KDF9jaHVua19pbmRleEIPCg1fdG90YWxfY2h1bmtzQgoKCF9wYXlsb2FkYgZwcm90bzM"),
    _ = (0, U.messageDesc)(V, 0);

  function x(e, t, r, n) {
    let i = (0, R.create)(_, {
      chunkId: e,
      chunkIndex: t,
      totalChunks: r,
      payload: n
    });
    return (0, N.toBinary)(_, i)
  }
  class B {
    #E = new Map;
    #i = !1;
    decode(e) {
      if (this.#i) throw Error("NoiseFrameDecoder: poisoned after prior failure");
      try {
        let r, {
          chunkId: n,
          chunkIndex: i,
          totalChunks: a,
          payload: s
        } = {
          chunkId: (r = (0, T.fromBinary)(_, e)).chunkId ?? 0n,
          chunkIndex: r.chunkIndex ?? 0,
          totalChunks: r.totalChunks ?? 1,
          payload: r.payload ?? new Uint8Array(0)
        };
        if (n < -(1n << 63n) || n > (1n << 63n) - 1n) throw Error(`chunkId outside int64 range: ${n}`);
        if (a < 1 || a > 256) throw Error(`invalid totalChunks: ${a}`);
        if (i < 0 || i >= a) throw Error(`chunkIndex ${i} out of range [0, ${a})`);
        if (s.length > 65489) throw Error(`payload too large for noise frame (${s.length} bytes)`);
        if (this.#b(), !this.#E.has(n)) {
          if (this.#E.size >= 16) throw Error("too many pending noise frame assemblies");
          let e = Date.now();
          this.#E.set(n, {
            chunks: new Map,
            total: a,
            totalBytes: 0,
            createdAt: e,
            lastUpdated: e
          })
        }
        let o = this.#E.get(n);
        if (o.total !== a) throw this.#E.delete(n), Error(`inconsistent totalChunks for chunkId: expected ${o.total}, got ${a}`);
        if (o.chunks.has(i)) throw this.#E.delete(n), Error(`duplicate chunkIndex ${i}`);
        if (o.lastUpdated = Date.now(), o.totalBytes += s.length, o.totalBytes > 0x1000000) throw this.#E.delete(n), Error("assembly exceeded byte budget");
        if (o.chunks.set(i, s), o.chunks.size < o.total) return null;
        if (this.#E.delete(n), 1 === o.total) return o.chunks.get(0);
        let l = [];
        for (let e = 0; e < o.total; e++) {
          let t = o.chunks.get(e);
          if (!t) throw Error(`missing chunk ${e}/${o.total}`);
          l.push(t)
        }
        return t(...l)
      } catch (e) {
        throw this.#i = !0, e
      }
    }
    #b() {
      let e = Date.now();
      for (let [t, r] of this.#E) e - r.createdAt > 6e4 && this.#E.delete(t)
    }
  }
  e.i(919182);
  let K = (0, I.fileDesc)("ChRub2lzZV9lbnZlbG9wZS5wcm90bxILaGF0Y2gubm9pc2UiTAoOU2VydmljZVJlcXVlc3QSKQoHc2VydmljZRgBIAEoDjIYLmhhdGNoLm5vaXNlLlNlcnZpY2VUeXBlEg8KB3BheWxvYWQYAiABKAwiIgoPU2VydmljZVJlc3BvbnNlEg8KB3BheWxvYWQYASABKAwi5gEKDFNlcnZpY2VGcmFtZRIRCglzdHJlYW1faWQYASABKAMSMgoHcmVxdWVzdBgCIAEoCzIfLmhhdGNoLm5vaXNlLkFwcGxpY2F0aW9uUmVxdWVzdEgAEjQKCHJlc3BvbnNlGAMgASgLMiAuaGF0Y2gubm9pc2UuQXBwbGljYXRpb25SZXNwb25zZUgAEiwKCmJvZHlfY2h1bmsYBCABKAsyFi5oYXRjaC5ub2lzZS5Cb2R5Q2h1bmtIABIjCgVyZXNldBgFIAEoCzISLmhhdGNoLm5vaXNlLlJlc2V0SABCBgoEa2luZCIkCgZIZWFkZXISCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJInYKEkFwcGxpY2F0aW9uUmVxdWVzdBIMCgR2ZXJiGAEgASgJEgwKBHBhdGgYAiABKAkSJAoHaGVhZGVycxgDIAMoCzITLmhhdGNoLm5vaXNlLkhlYWRlchIMCgRib2R5GAQgASgMEhAKCGVuZF9ib2R5GAUgASgIImsKE0FwcGxpY2F0aW9uUmVzcG9uc2USDgoGc3RhdHVzGAEgASgFEiQKB2hlYWRlcnMYAiADKAsyEy5oYXRjaC5ub2lzZS5IZWFkZXISDAoEYm9keRgDIAEoDBIQCghlbmRfYm9keRgEIAEoCCIrCglCb2R5Q2h1bmsSDAoEZGF0YRgBIAEoDBIQCghlbmRfYm9keRgCIAEoCCLOAQoFUmVzZXQSJQoEY29kZRgBIAEoDjIXLmhhdGNoLm5vaXNlLlJlc2V0LkNvZGUSDgoGcmVhc29uGAIgASgJIo0BCgRDb2RlEhQKEENPREVfVU5TUEVDSUZJRUQQABINCglDQU5DRUxMRUQQARILCgdUSU1FT1VUEAISEgoOUFJPVE9DT0xfRVJST1IQAxISCg5SRUZVU0VEX1NUUkVBTRAEEhIKDklOVEVSTkFMX0VSUk9SEAUSFwoTU0VSVklDRV9VTkFWQUlMQUJMRRAGKl0KC1NlcnZpY2VUeXBlEhIKDlNFUlZJQ0VfREFFTU9OEAASFAoQU0VSVklDRV9TRU5USU5FTBABEhEKDVNFUlZJQ0VfVkFVTFQQAhIRCg1TRVJWSUNFX0FVVEhEEANiBnByb3RvMw"),
    M = (0, U.messageDesc)(K, 0),
    D = (0, U.messageDesc)(K, 1),
    H = (0, U.messageDesc)(K, 2),
    L = (0, U.messageDesc)(K, 3),
    O = (0, U.messageDesc)(K, 4);
  var P = ((k = {})[k.CODE_UNSPECIFIED = 0] = "CODE_UNSPECIFIED", k[k.CANCELLED = 1] = "CANCELLED", k[k.TIMEOUT = 2] = "TIMEOUT", k[k.PROTOCOL_ERROR = 3] = "PROTOCOL_ERROR", k[k.REFUSED_STREAM = 4] = "REFUSED_STREAM", k[k.INTERNAL_ERROR = 5] = "INTERNAL_ERROR", k[k.SERVICE_UNAVAILABLE = 6] = "SERVICE_UNAVAILABLE", k),
    X = ((C = {})[C.SERVICE_DAEMON = 0] = "SERVICE_DAEMON", C[C.SERVICE_SENTINEL = 1] = "SERVICE_SENTINEL", C[C.SERVICE_VAULT = 2] = "SERVICE_VAULT", C[C.SERVICE_AUTHD = 3] = "SERVICE_AUTHD", C);
  e.s(["ApplicationRequestSchema", 0, O, "HeaderSchema", 0, L, "Reset_Code", () => P, "ServiceFrameSchema", 0, H, "ServiceRequestSchema", 0, M, "ServiceResponseSchema", 0, D, "ServiceType", () => X], 545050);
  let G = new Uint8Array(0),
    F = {
      daemon: X.SERVICE_DAEMON,
      sentinel: X.SERVICE_SENTINEL,
      vault: X.SERVICE_VAULT,
      authd: X.SERVICE_AUTHD
    };
  class W {
    #S;
    #k;
    #C;
    #R = BigInt(1);
    #N = !1;
    constructor(e, t) {
      this.#S = e, this.#k = t, this.#C = new B
    }
    #s() {
      if (this.#N) throw Error("NoiseTransport: dead after prior failure")
    }
    async encryptHttpRequest(e) {
      return this.#T({
        ...e,
        endBody: !0
      })
    }
    async startStreamRequest(e) {
      return this.#T({
        ...e,
        body: new Uint8Array(0),
        endBody: !1
      })
    }
    async #T(e) {
      this.#s();
      try {
        let t = this.#R++,
          r = (0, R.create)(O, {
            verb: e.httpMethod,
            path: e.path,
            headers: e.headers ?? [],
            body: e.body,
            endBody: e.endBody
          }),
          n = (0, R.create)(H, {
            streamId: t,
            kind: {
              case: "request",
              value: r
            }
          }),
          i = F[e.service],
          a = await this.#I(i, n);
        return {
          streamId: t,
          frames: a
        }
      } catch (e) {
        throw this.#N = !0, e
      }
    }
    async encryptBodyChunk(e) {
      this.#s();
      try {
        let t = (0, R.create)(H, {
            streamId: e.streamId,
            kind: {
              case: "bodyChunk",
              value: {
                data: e.data,
                endBody: e.endBody ?? !1
              }
            }
          }),
          r = F[e.service];
        return await this.#I(r, t)
      } catch (e) {
        throw this.#N = !0, e
      }
    }
    async encryptReset(e) {
      this.#s();
      try {
        let t = (0, R.create)(H, {
            streamId: e.streamId,
            kind: {
              case: "reset",
              value: {
                code: P.CANCELLED,
                reason: e.reason ?? ""
              }
            }
          }),
          r = F[e.service];
        return await this.#I(r, t)
      } catch (e) {
        throw this.#N = !0, e
      }
    }
    async decryptFrame(e) {
      this.#s();
      try {
        let t = await this.#k.decryptWithAd(G, e),
          r = this.#C.decode(t);
        if (null == r) return null;
        let n = (0, T.fromBinary)(D, r);
        if (0 === n.payload.length) throw Error("empty ServiceResponse payload");
        let i = (0, T.fromBinary)(H, n.payload);
        switch (i.kind.case) {
          case "response":
            return {
              case: "response", streamId: i.streamId, response: i.kind.value
            };
          case "bodyChunk":
            return {
              case: "bodyChunk", streamId: i.streamId, data: i.kind.value.data, endBody: i.kind.value.endBody
            };
          case "reset":
            return {
              case: "reset", streamId: i.streamId, reset: i.kind.value
            };
          case "request":
            throw Error("NoiseTransport: unexpected request frame from server");
          default:
            return null
        }
      } catch (e) {
        throw this.#N = !0, e
      }
    }
    async #I(e, t) {
      let r = (0, N.toBinary)(H, t),
        n = (0, R.create)(M, {
          service: e,
          payload: r
        }),
        i = function(e) {
          let t = crypto.getRandomValues(new Uint32Array(2)),
            r = BigInt.asIntN(64, BigInt(t[0]) | BigInt(t[1]) << 32n),
            n = Math.max(1, Math.ceil(e.length / 65489));
          if (n > 256) throw Error(`payload too large for noise framing (${e.length} bytes, ${n} chunks > 256)`);
          if (0 === e.length) return [x(r, 0, 1, new Uint8Array(0))];
          let i = [];
          for (let t = 0; t < n; t++) {
            let a = 65489 * t,
              s = e.subarray(a, Math.min(a + 65489, e.length));
            i.push(x(r, t, n, s))
          }
          return i
        }((0, N.toBinary)(M, n)),
        a = [];
      for (let e of i) a.push(await this.#S.encryptWithAd(G, e));
      return a
    }
  }
  e.s(["NoiseTransport", 0, W], 504155)
}, 564, e => {
  "use strict";
  var t = e.i(85461);
  let r = Object.freeze({
    kind: "primary"
  });
  e.s(["PRIMARY_NOISE_CONNECTION_POLICY", 0, r, "assertGatewayCredentialPolicyPair", 0, function(e, t) {
    if ("recipient" === e.credentialScope != ("shared_agent" === t.kind)) throw Error("Shared Agent Noise policy and recipient OAuth credentials must be provided together")
  }, "isGatewayMethodAllowedByConnectionPolicy", 0, function(e, r) {
    if (null == (0, t.resolveHttpRoute)(e)) return !1;
    let n = (0, t.isSharedAgentOnlyHttpRoute)(e);
    return "shared_agent" === r.kind ? n : !n
  }])
}, 123743, e => {
  "use strict";
  let t = null,
    r = null;
  e.s(["noiseDebugEnabled", 0, function() {
    var e;
    if ((e = window.location.search) !== r && (r = e, t = null), null != t) return t;
    try {
      let e = new URLSearchParams(window.location.search).get("noise");
      if ("0" === e) return t = !1;
      t = "1" === e || "1" === localStorage.getItem("hatch:debug:noise")
    } catch {
      t = !1
    }
    return t
  }])
}, 499475, 312712, e => {
  "use strict";
  var t = e.i(919988),
    r = e.i(543922),
    n = e.i(934225),
    i = e.i(427489),
    a = e.i(312977),
    s = e.i(719182),
    o = e.i(240542),
    l = e.i(545050),
    c = e.i(31130),
    h = e.i(736578),
    d = e.i(564),
    u = e.i(755854);
  let y = `wss://${u.HATCH_SHARED_LB_HOST}${u.NOISE_WS_PATH}`;

  function w(e, t) {
    let r, n = e.trim();
    try {
      r = new URL(n)
    } catch {
      throw Error("Invalid Shared Agent Noise gateway URL")
    }
    let i = n.indexOf("://") + 3,
      a = n.slice(i).search(/[/?#\\]/),
      s = a < 0 ? n.length : i + a,
      o = n.slice(i, s).toLowerCase(),
      l = n.slice(s),
      c = l.search(/[?#]/),
      h = c < 0 ? l : l.slice(0, c);
    if ("https:" !== r.protocol && "wss:" !== r.protocol || o !== u.HATCH_SHARED_LB_HOST || r.hostname !== u.HATCH_SHARED_LB_HOST || "" !== r.port || "" !== r.username || "" !== r.password || "" !== h && "/" !== h && h !== u.NOISE_WS_PATH || "/" !== r.pathname && r.pathname !== u.NOISE_WS_PATH || "" !== r.hash) throw Error("Shared Agent Noise gateway must use the fixed shared ingress");
    if (Array.from(r.searchParams.entries()).some(([e]) => "vm_id" !== e)) throw Error("Shared Agent Noise gateway contains an unexpected query parameter");
    let d = r.searchParams.getAll("vm_id");
    if (d.length > 1) throw Error("Shared Agent Noise gateway must contain at most one vm_id");
    let y = d[0] ?? null,
      w = null == t ? null : t.trim();
    if (null != y && (0 === y.length || y !== y.trim())) throw Error("Shared Agent Noise gateway vm_id must be nonempty");
    if (null != y && y.length > 255) throw Error("Shared Agent Noise gateway vm_id must not exceed 255 characters");
    if (null != w && 0 === w.length) throw Error("Shared Agent Noise VM name must be nonempty");
    if (null != w && w.length > 255) throw Error("Shared Agent Noise VM name must not exceed 255 characters");
    if (null != t && w !== t) throw Error("Shared Agent Noise VM name must not contain surrounding whitespace");
    if (null != y && null != w && y !== w) throw Error("Shared Agent Noise gateway vm_id does not match the VM name");
    let m = y ?? w;
    if (null == m) throw Error("Shared Agent Noise gateway requires exactly one nonempty vm_id");
    return Object.freeze({
      vmId: m
    })
  }

  function m(e, t, r) {
    if (0 === e.vmId.length || e.vmId !== e.vmId.trim()) throw Error("Shared Agent Noise target vm_id must be nonempty");
    if (e.vmId.length > 255) throw Error("Shared Agent Noise target vm_id must not exceed 255 characters");
    if (0 === t.length) throw Error("Shared Agent OAuth token must be nonempty");
    if (0 === r.length) throw Error("Shared Agent Noise request ID must be nonempty");
    let n = new URL(y);
    return n.searchParams.set("vm_id", e.vmId), n.searchParams.set("auth_token", t), n.searchParams.set("app_id", h.HATCH_APP_ID), n.searchParams.set("request_id", r), n.toString()
  }
  e.s(["buildSharedAgentNoiseWebSocketUrl", 0, m, "resolveSharedAgentNoiseTarget", 0, w], 312712);
  var g = e.i(207274);
  let f = Object.freeze((0, c.create)(l.HeaderSchema, {
      key: "x-app-id",
      value: h.HATCH_APP_ID
    })),
    p = Object.freeze((0, c.create)(l.HeaderSchema, {
      key: "Content-Type",
      value: "application/json"
    })),
    v = "en-US",
    A = new TextEncoder,
    E = new TextDecoder;
  async function b(e, l) {
    let c, h;
    if (l?.signal?.aborted) throw new DOMException("Aborted", "AbortError");
    let u = l?.connectionPolicy ?? d.PRIMARY_NOISE_CONNECTION_POLICY,
      y = l?.credentialProvider ?? o.defaultGatewayCredentialProvider;
    (0, d.assertGatewayCredentialPolicyPair)(y, u);
    let f = "primary" === u.kind,
      p = "shared_agent" === u.kind ? w(e, l?.vmName) : null,
      v = f && l?.activeVm !== !1,
      A = f && (l?.vmTrustEnabled ?? (0, s.isActiveNoiseVmTrustEnabled)()),
      E = f ? (0, a.beginNoiseRvCredentialResolution)(e, l?.vmName) : void 0,
      b = () => l?.attestationVerifier === null ? void 0 : l?.attestationVerifier ?? (0, r.activeAttestationVerifier)(),
      S = f ? (0, n.createNoiseCvmAttestationResolver)(e, l?.vmName, b(), () => l?.cvmReplacementEnabled ?? (0, i.isActiveNoiseCvmReplacementEnabled)()) : void 0,
      k = f && A ? (0, s.beginNoiseVmTrustEvaluation)(e, l?.vmName, {
        activeSelection: v
      }) : void 0;
    null != S && (0, n.prepareNoiseCvmAttestation)(S, E);
    let C = !1;
    for (;;) {
      let t = await
      function(e, t) {
        return null == t ? e : t.aborted ? Promise.reject((0, g.createGatewayAbortError)()) : new Promise((r, n) => {
          let i = () => {
            t.removeEventListener("abort", i), n((0, g.createGatewayAbortError)())
          };
          t.addEventListener("abort", i, {
            once: !0
          }), e.then(e => {
            t.removeEventListener("abort", i), r(e)
          }, e => {
            t.removeEventListener("abort", i), n(e)
          }), t.aborted && i()
        })
      }(y.getToken(e, {
        ...l?.vmName ? {
          vmName: l.vmName
        } : {},
        ...l?.signal ? {
          signal: l.signal
        } : {},
        ...C ? {
          forceRefresh: !0
        } : {}
      }), l?.signal);
      if (l?.signal?.aborted) throw new DOMException("Aborted", "AbortError");
      let r = crypto.randomUUID(),
        n = null == p ? (0, o.wsUrl)(e, t, r, {
          vmName: l?.vmName,
          notaryToken: y.getNoiseNotaryToken(e, l?.vmName)
        }) : m(p, t, r);
      try {
        c = new WebSocket(n)
      } catch {
        throw Error("Noise WebSocket constructor failed")
      }
      c.binaryType = "arraybuffer";
      try {
        await new Promise((e, t) => {
          let r = () => {
            c.close(), t(new DOMException("Aborted", "AbortError"))
          };
          l?.signal?.addEventListener("abort", r, {
            once: !0
          }), c.onopen = () => {
            l?.signal?.removeEventListener("abort", r), e()
          }, c.onerror = () => {
            l?.signal?.removeEventListener("abort", r), t(Error("Noise WebSocket connection failed"))
          }, c.onclose = () => {
            l?.signal?.removeEventListener("abort", r), t(Error("Noise WebSocket closed before open"))
          }
        });
        break
      } catch (e) {
        if (c.onopen = null, c.onerror = null, c.onclose = null, c.close(), l?.signal?.aborted) throw new DOMException("Aborted", "AbortError");
        if (!f || C) throw e;
        C = !0
      }
    }
    if (l?.signal?.aborted) throw c.close(), new DOMException("Aborted", "AbortError");
    let R = null,
      N = null;
    c.onmessage = e => {
      e.data instanceof ArrayBuffer && R && R(new Uint8Array(e.data))
    }, c.onclose = () => {
      N?.(Error("WebSocket closed during handshake"))
    };
    let T = () => {
      N?.(new DOMException("Aborted", "AbortError"));
      try {
        c.close()
      } catch {}
    };
    l?.signal?.addEventListener("abort", T, {
      once: !0
    });
    try {
      let r = b();
      h = await (0, t.performNoiseHandshake)(c, () => new Promise((e, t) => {
        N = t, R = t => {
          R = null, N = null, e(t)
        }
      }), "shared_agent" === u.kind ? {
        strictSharedAgentAttestationVerifier: u.attestationVerifier,
        sharedAgentTicketProvider: u.ticketProvider
      } : {
        verifier: r,
        resolveRvAttestationVerifier: (0, n.createNoiseCvmAttestationResolver)(e, l?.vmName, r, () => l?.cvmReplacementEnabled ?? (0, i.isActiveNoiseCvmReplacementEnabled)()),
        resolveRvCredentials: E,
        evaluateVmTrust: k,
        onObservedVmType: l?.onObservedVmType,
        deferUnprovisionedEnrollment: l?.allowUnprovisionedEnrollment !== !0
      })
    } catch (e) {
      throw c.close(), e
    } finally {
      l?.signal?.removeEventListener("abort", T)
    }
    if (l?.signal?.aborted) throw c.close(), new DOMException("Aborted", "AbortError");
    return {
      ws: c,
      transport: h
    }
  }

  function S(e) {
    let t = (e?.extraHeaders ?? []).filter(({
      key: e
    }) => "accept-language" !== e.trim().toLowerCase());
    return [...e?.includeJsonContentType === !0 ? [p] : [], (0, c.create)(l.HeaderSchema, {
      key: "x-request-id",
      value: crypto.randomUUID()
    }), f, (0, c.create)(l.HeaderSchema, {
      key: "Accept-Language",
      value: function() {
        if ("u" < typeof document) return v;
        let e = document.documentElement.lang.trim();
        return "" === e ? v : "es-la" === e.toLowerCase() ? "es-419" : e
      }()
    }), ...t.map(e => (0, c.create)(l.HeaderSchema, {
      key: e.key,
      value: e.value
    }))]
  }
  e.s(["buildNoiseRequestArgs", 0, function(e, t) {
    let r = e.route.httpMethod,
      n = "GET" === r,
      i = !n && "empty" !== e.route.requestBody,
      a = n ? (0, h.appendQueryParamsToPath)(e.path, e.params) : e.path;
    return {
      httpMethod: r,
      path: a,
      body: i ? A.encode(JSON.stringify(e.params)) : new Uint8Array(0),
      headers: S({
        includeJsonContentType: i,
        extraHeaders: t?.extraHeaders
      })
    }
  }, "buildNoiseRequestHeaders", 0, S, "openNoiseConnection", 0, b, "textDecoder", 0, E], 499475)
}, 919988, 543708, 561117, 3776, 312977, e => {
  "use strict";
  var t = e.i(235327),
    r = e.i(504155),
    n = e.i(123743),
    i = e.i(44264),
    a = e.i(126932),
    s = e.i(859047);
  let o = new TextEncoder,
    l = o.encode("hatch.noise-auth.key.v1"),
    c = o.encode("vm-proof-key"),
    h = o.encode("client-proof-key"),
    d = o.encode("hatch.noise-auth.vm-proof.v1"),
    u = o.encode("hatch.noise-auth.client-proof.v1");

  function y() {
    return crypto.getRandomValues(new Uint8Array(32))
  }

  function w(e) {
    if (32 !== e.length) throw Error("Noise client nonce must be exactly 32 bytes");
    return a.default.Writer.create().uint32(10).bytes(e).finish()
  }
  class m extends Error {
    code;
    constructor(e, t) {
      super("Unable to resolve Noise credentials", {
        cause: e.startsWith("cvm_") ? void 0 : t
      }), this.name = "GatewayConnectionError", this.code = e, Object.defineProperty(this, "code", {
        enumerable: !1
      }), (0, i.cvmTrace)("noiseCredentials: error", {
        code: e
      }, {
        level: "warn",
        error: t
      })
    }
  }

  function g(e) {
    try {
      return function(e) {
        let t, r, n, i, s = a.default.Reader.create(e);
        for (; s.pos < s.len;) {
          let e = s.uint32(),
            a = e >>> 3,
            o = 7 & e;
          switch (a) {
            case 1:
              if (2 !== o || void 0 !== t) return null;
              t = new Uint8Array(s.bytes());
              break;
            case 2:
              if (0 !== o || void 0 !== r) return null;
              r = s.int32();
              break;
            case 3:
              if (2 !== o || void 0 !== n) return null;
              n = new Uint8Array(s.bytes());
              break;
            case 4:
              if (2 !== o || void 0 !== i) return null;
              i = new Uint8Array(s.bytes());
              break;
            default:
              if (0 === a) return null;
              s.skipType(o)
          }
        }
        return void 0 === t || n?.length !== 32 || 1 !== r && 2 !== r ? null : 1 === r ? void 0 === i ? {
          state: "unprovisioned",
          attestation: t,
          vmNonce: n
        } : null : i?.length === 32 ? {
          state: "provisioned",
          attestation: t,
          vmNonce: n,
          vmProof: i
        } : null
      }(e)
    } catch {
      return null
    }
  }
  async function f(e, t) {
    let r = new Uint8Array(e);
    try {
      let e = await crypto.subtle.importKey("raw", r.buffer, {
        name: "HMAC",
        hash: "SHA-256"
      }, !1, ["sign"]);
      return new Uint8Array(await crypto.subtle.sign("HMAC", e, t.buffer instanceof ArrayBuffer && 0 === t.byteOffset && t.byteLength === t.buffer.byteLength ? t.buffer : t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength)))
    } finally {
      r.fill(0)
    }
  }
  async function p(e, t) {
    return f(e, (0, s.concat)(l, t))
  }
  async function v(e, t, r, n) {
    let i = await p(e, c);
    try {
      return await f(i, (0, s.concat)(d, t, n, r))
    } finally {
      i.fill(0)
    }
  }
  async function A(e, t, r, n) {
    let i = await p(e, h);
    try {
      return await f(i, (0, s.concat)(u, t, r, n))
    } finally {
      i.fill(0)
    }
  }

  function E(e, t) {
    let r = a.default.Writer.create().uint32(10).string(e);
    return r.uint32("fresh" === t.kind ? 18 : 26).bytes(t.bytes), r.finish()
  }
  async function b(e, t, r, n, i) {
    let a = t.notaryToken.trim();
    if (!a) throw Error("Noise RV notary token is missing");
    if (32 !== t.rvKey.length || 32 !== r.length || 32 !== n.length) throw Error("Noise RV key and transcript hashes must be exactly 32 bytes");
    if ("unprovisioned" === e.state) return E(a, {
      kind: "fresh",
      bytes: t.rvKey
    });
    let s = await v(t.rvKey, r, e.vmNonce, i),
      o = function(e, t) {
        if (e.length !== t.length) return !1;
        let r = 0;
        for (let n = 0; n < e.length; n++) r |= e[n] ^ t[n];
        return 0 === r
      }(s, e.vmProof);
    if (s.fill(0), !o) throw new m("cvm_key_rejected");
    let l = await A(t.rvKey, n, e.vmNonce, i);
    try {
      return E(a, {
        kind: "proof",
        bytes: l
      })
    } finally {
      l.fill(0)
    }
  }
  e.s(["NoiseCredentialsError", 0, m, "createNoiseClientNonce", 0, y, "createNoiseRvMessage3Payload", 0, b, "decodeNoiseRvChallenge", 0, g, "encodeNoiseClientNonceMessage1", 0, w], 543708);
  class S extends Error {
    code;
    constructor(e, t) {
      super("owner_rv_challenge" === e ? "Shared Agent Noise peer presented an owner RV challenge" : "Shared Agent Noise attestation was rejected", {
        cause: t
      }), this.name = "SharedAgentNoiseTrustError", this.code = e
    }
  }

  function k(e) {
    return async t => {
      if ("attestation" !== t.message2Kind) throw new S("owner_rv_challenge");
      try {
        await e.verify({
          attestationPayload: t.attestationPayload,
          serverStaticPublicKey: t.serverStaticPublicKey,
          handshakeHash: t.handshakeHash,
          clientNonce: t.clientNonce
        })
      } catch (e) {
        throw new S("attestation_rejected", e)
      }
    }
  }
  e.s(["SharedAgentNoiseTrustError", 0, S, "createStrictSharedAgentNoiseTrustEvaluator", 0, k], 561117);
  class C extends Error {
    code;
    constructor(e, t) {
      super("transient" === e ? "Shared Agent connection ticket is temporarily unavailable" : "auth_required" === e ? "Shared Agent recipient authentication is required" : "Shared Agent access is unavailable", t), this.name = "SharedAgentTicketProviderError", this.code = e
    }
  }
  class R extends Error {
    code;
    constructor(e) {
      super("empty" === e ? "Shared Agent connection ticket is empty" : "non_ascii" === e ? "Shared Agent connection ticket must be an ASCII JWT" : "Shared Agent connection ticket envelope exceeds 8 KiB"), this.name = "SharedAgentTicketError", this.code = e
    }
  }

  function N(e) {
    var t;
    if (0 === e.length) throw new R("empty");
    if (e.length > 8192) throw new R("oversized");
    for (let t = 0; t < e.length; t += 1)
      if (e.charCodeAt(t) > 127) throw new R("non_ascii");
    if (1 + ((t = e.length) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 0x10000000 ? 4 : 5) + e.length > 8192) throw new R("oversized");
    return a.default.Writer.create().uint32(34).string(e).finish()
  }
  e.s(["SharedAgentTicketError", 0, R, "SharedAgentTicketProviderError", 0, C, "encodeSharedAgentTicketMessage3", 0, N], 3776);
  let T = ["initialize", "msg1Send", "msg2Wait", "msg2Process", "msg3Send", "split"];
  class I {
    #U;
    #V;
    #_;
    #x;
    #B;
    #K;
    #M;
    #D;
    #H;
    #L;
    #O;
    #P;
    constructor(e = {}) {
      const t = null != e.strictSharedAgentAttestationVerifier;
      if (t !== (null != e.sharedAgentTicketProvider)) throw Error("Shared Agent Noise trust and a fresh-ticket provider must be provided together");
      if (t && (null != e.verifier || null != e.resolveRvAttestationVerifier || null != e.resolveRvCredentials || null != e.evaluateVmTrust || null != e.onObservedVmType || null != e.deferUnprovisionedEnrollment)) throw Error("Shared Agent Noise trust cannot be combined with primary VM trust options");
      this.#U = e.timeoutMs ?? 1e4, this.#V = e.maxMessageBytes ?? 65535, this.#_ = e.verifier, this.#x = e.resolveRvAttestationVerifier, this.#B = e.resolveRvCredentials, this.#K = e.evaluateVmTrust, this.#M = e.onObservedVmType, this.#D = e.onPhaseTimings, this.#H = e.onRvChallengeState, this.#L = e.deferUnprovisionedEnrollment ?? !1, this.#O = null == e.strictSharedAgentAttestationVerifier ? void 0 : k(e.strictSharedAgentAttestationVerifier), this.#P = e.sharedAgentTicketProvider
    }
    async perform(e, s) {
      (0, n.noiseDebugEnabled)();
      let o, l, c = performance.now(),
        h = new t.NoiseXXInitiator,
        d = c + this.#U,
        u = !1,
        f = new AbortController,
        p = () => f.abort();
      e.addEventListener("close", p, {
        once: !0
      });
      let v = () => {
          l?.(), o?.assertCurrent?.()
        },
        A = {
          startedAtMs: c,
          outcome: "error"
        },
        E = c,
        k = null == this.#P ? null : new AbortController,
        R = () => k?.abort();
      null != k && (e.addEventListener("close", R, {
        once: !0
      }), 1 !== e.readyState && k.abort());
      try {
        let t;
        await _(h.initialize(), V(d));
        let n = performance.now();
        A.initialize = n - c, E = n;
        let p = null != this.#P ? null : y(),
          T = null == p ? a.default.Writer.create().uint32(16).int32(1).finish() : w(p),
          x = await _(h.writeMessage1(T), V(d));
        A.x25519Backend = h.x25519Backend() ?? void 0;
        let B = h.handshakeHash();
        e.send(x);
        let K = performance.now();
        A.msg1Send = K - n, E = K;
        let M = await _(s(), V(d));
        if (M.length > this.#V) throw Error(`noise handshake message too large (${M.length} > ${this.#V})`);
        let D = performance.now();
        A.msg2Wait = D - K, E = D;
        let H = await _(h.readMessage2(M), V(d)),
          L = h.handshakeHash(),
          O = g(H),
          P = O?.attestation ?? H,
          X = h.remoteStaticPublicKey(),
          G = null == O ? "standard" : "confidential";
        if (A.observedType = G, (0, i.cvmTrace)("noise handshake: msg2 challenge", {
            observed_type: G,
            rv_challenge_state: O?.state ?? "none",
            has_resolver: null != this.#B
          }), null != this.#O) try {
          await _(this.#O({
            message2Kind: null == O ? "attestation" : "owner_rv_challenge",
            attestationPayload: P,
            serverStaticPublicKey: X,
            handshakeHash: L,
            clientNonce: null
          }), V(d))
        } catch (e) {
          if (e instanceof S) throw e;
          throw new S("attestation_rejected", e)
        } else {
          this.#M?.(G), null != O && this.#H?.(O.state);
          let e = O?.state === "unprovisioned" && this.#L,
            t = this.#x?.authorizeKeyDisclosure;
          if ((null == O || e || null == t) && (l = this.#x?.captureContext?.(G), o = e ? void 0 : null != O && null != this.#x ? this.#x(O.state) : O?.state === "provisioned" ? this.#_ : void 0, v()), null != O && !e && (null != t || "unprovisioned" === O.state)) {
            let e = this.#B?.assertRecoveryKeyAvailable;
            null != e && await _(e(), V(d))
          }
          if (null != O && !e && null != t) {
            let e = await _(t(O.state, AbortSignal.any([f.signal, AbortSignal.timeout(Math.ceil(V(d)))])), V(d));
            l = e.assertCurrent, o = e.verifier
          }
          v();
          let r = o,
            n = null != r ? () => _(r.verify({
              attestationPayload: P,
              serverStaticPublicKey: X,
              handshakeHash: L,
              clientNonce: p?.slice() ?? null
            }), V(d)) : void 0;
          null != this.#K ? await this.#K({
            observedType: G,
            serverStaticPublicKey: X,
            verifyAttestation: n
          }) : null != n && await n(), v()
        }
        if (O?.state === "unprovisioned" && this.#L) throw new m("cvm_enrollment_required");
        let F = performance.now();
        A.msg2Process = F - D, E = F;
        let W = new Uint8Array(0);
        if (null != this.#P) {
          let e;
          if (k?.signal.aborted !== !1) throw new DOMException("Aborted", "AbortError");
          try {
            var I, U;
            e = await _((I = this.#P.getFreshTicket({
              signal: k.signal
            }), (U = k.signal).aborted ? Promise.reject(new DOMException("Aborted", "AbortError")) : new Promise((e, t) => {
              let r = () => t(new DOMException("Aborted", "AbortError"));
              U.addEventListener("abort", r, {
                once: !0
              }), I.then(t => {
                U.removeEventListener("abort", r), e(t)
              }, e => {
                U.removeEventListener("abort", r), t(e)
              })
            })), V(d), R, () => new C("transient"))
          } catch (e) {
            if (e instanceof C || e instanceof DOMException && "AbortError" === e.name) throw e;
            throw new C("terminal", {
              cause: e
            })
          }
          W = N(e)
        } else if (O) {
          if (v(), !this.#B) throw new m("resolver_unavailable");
          if (null == p) throw Error("Noise RV challenge requires a Message 1 freshness challenge");
          let e = await _(this.#B(), V(d));
          try {
            v(), W = await _(b(O, e, B, L, p), V(d)), v()
          } catch (e) {
            throw W.fill(0), e
          } finally {
            e.rvKey.fill(0)
          }
        }(0, i.cvmTrace)("noise handshake: msg3 payload built", {
          had_rv_challenge: null != O,
          payload_len: W.length
        });
        try {
          v(), t = await _(h.writeMessage3(W), V(d))
        } finally {
          W.fill(0)
        }
        try {
          v(), null != O && this.#B?.assertCredentialsCurrent?.()
        } catch (e) {
          throw t.fill(0), e
        }
        e.send(t);
        let z = performance.now();
        A.msg3Send = z - F, E = z;
        let [Y, Z] = await _(h.split(), V(d));
        v();
        let Q = performance.now();
        return A.split = Q - z, E = Q, u = !0, A.outcome = "success", {
          transport: new r.NoiseTransport(Y, Z),
          attestationPayload: P,
          serverStaticPublicKey: X,
          handshakeHash: L
        }
      } catch (r) {
        let e = performance.now() - E,
          t = T.find(e => void 0 === A[e]);
        throw null != t && (A[t] = e), u || h.destroy(), r
      } finally {
        f.abort(), e.removeEventListener("close", p), this.#D?.(A), null != k && e.removeEventListener("close", R)
      }
    }
  }
  async function U(e, t, r) {
    return (await new I(r).perform(e, t)).transport
  }

  function V(e) {
    return Math.max(0, e - performance.now())
  }

  function _(e, t, r, n = () => Error("noise handshake timeout")) {
    return new Promise((i, a) => {
      let s = setTimeout(() => {
        r?.(), a(n())
      }, t);
      e.then(e => {
        clearTimeout(s), i(e)
      }, e => {
        clearTimeout(s), a(e)
      })
    })
  }
  e.s(["performNoiseHandshake", 0, U], 919988);
  var x = e.i(76924),
    B = e.i(801713),
    K = e.i(681875),
    M = e.i(240542),
    D = e.i(583634);
  async function H(e) {
    let t;
    try {
      t = await fetch("/api/hatch/noise-notary-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          vmName: e
        }),
        signal: AbortSignal.timeout(8e3)
      })
    } catch (e) {
      throw new m("transport_error", e)
    }
    if (!t.ok) throw new m("notary_unavailable");
    let r = await t.json().catch(() => null);
    if ("string" != typeof r?.notaryToken || !r.notaryToken.trim()) throw new m("notary_unavailable");
    return r.notaryToken.trim()
  }
  e.s(["beginNoiseRvCredentialResolution", 0, function(e, t) {
    let r = (0, K.getActiveCvmCredentialOwner)(),
      n = (0, K.getActiveCvmCredentialSessionBinding)(),
      a = (0, K.getCvmCredentialGeneration)(),
      s = () => {
        if (null == r || null == n || null == a || (0, K.getActiveCvmCredentialOwner)() !== r || (0, K.getActiveCvmCredentialSessionBinding)() !== n || (0, K.getCvmCredentialGeneration)() !== a) throw new m("cvm_key_required")
      },
      o = (t?.trim() ?? "") || (0, x.extractVmId)(e);
    if (!o) return () => Promise.reject(new m("vm_id_unavailable"));
    let l = (0, K.readCvmRecoveryKey)().then(e => null == e ? {
        ok: !1,
        error: new m("cvm_key_required")
      } : {
        ok: !0,
        recoveryKey: e
      }, e => ({
        ok: !1,
        error: new m("cvm_key_required", e)
      })),
      c = async () => {
        s();
        let e = await l;
        if (!e.ok) throw e.error;
        return s(), e.recoveryKey
      }, h = async () => {
        let r, n = await c();
        try {
          r = await (0, D.resolveHatchCvmNoiseNotaryToken)({
            gatewayUrl: e,
            vmName: t,
            notaryToken: (0, M.getCachedNoiseNotaryToken)(e, t) ?? await H(o)
          })
        } catch (e) {
          throw new m("notary_unavailable", e)
        }
        if (null == r) throw new m("notary_unavailable");
        s();
        let a = await (0, B.deriveCvmRvKey)(n, o);
        try {
          s()
        } catch (e) {
          throw a.fill(0), e
        }
        return (0, i.cvmTrace)("noise resolver: credentials ready", {
          vm_id: o,
          has_notary_token: !!r,
          rv_key_len: a.length
        }), {
          notaryToken: r,
          rvKey: a
        }
      };
    return h.assertRecoveryKeyAvailable = async () => {
      await c()
    }, h.assertCredentialsCurrent = s, h
  }], 312977)
}]);

//# debugId=641fd888-08a6-32a4-8e32-6810ff7e375b
//# sourceMappingURL=3e4u60h01cu8w.js.map