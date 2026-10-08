;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "76511834-c1c3-a0ce-2f27-697995114aac")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 176585, e => {
  "use strict";
  let t = new Map;
  class n extends Error {
    constructor() {
      super("The Confidential VM connection key is unavailable"), this.name = "HatchCvmNotarySigningKeyUnavailableError"
    }
  }

  function r(e) {
    let t = e.trim().toLowerCase();
    if (0 === t.length) throw new n;
    return t
  }
  e.s(["HatchCvmNotarySigningKeyUnavailableError", 0, n, "clearHatchCvmNotarySigningKeys", 0, function() {
    for (let e of new Set(t.values())) e.close();
    t.clear()
  }, "getHatchCvmNotarySigningKey", 0, function(e) {
    let i = t.get(r(e));
    if (null == i) throw new n;
    return i
  }, "retainHatchCvmNotarySigningKey", 0, function(e, n) {
    let i = r(e),
      o = t.get(i);
    o !== n && o?.close(), t.set(i, n)
  }])
}, 513116, 332149, 420871, e => {
  "use strict";
  var t = e.i(359783),
    n = e.i(152759),
    r = e.i(2412),
    i = e.i(161756),
    o = e.i(681875);
  let a = new Set,
    l = 0;

  function s() {
    let e = ++l,
      t = Array.from(a, e => ({
        listener: e,
        resume: e()
      })),
      n = !1;
    return () => {
      if (!n && e === l)
        for (let {
            listener: e,
            resume: r
          }
          of(n = !0, t)) a.has(e) && r()
    }
  }
  e.s(["stopCvmReplacementForLogout", 0, s, "subscribeToCvmReplacementLogout", 0, function(e) {
    return a.add(e), () => {
      a.delete(e)
    }
  }], 332149);
  var c = e.i(329764),
    u = e.i(901973),
    d = e.i(496180),
    h = e.i(737717);

  function m(e, t) {
    return e.viewerId === t.viewerId && e.sessionBindingId === t.sessionBindingId
  }
  e.s(["isSameHatchSession", 0, m], 420871);
  var f = e.i(863641),
    p = e.i(813158);
  let w = (0, t.createClientLogger)("HatchSessionLifecycle"),
    v = Promise.resolve(),
    g = null,
    y = null,
    C = new WeakMap,
    S = {
      identity: {
        viewerId: null,
        sessionBindingId: null
      },
      owner: null,
      ending: null,
      prepared: !0
    };
  async function I(e = S.identity) {
    for (let t of (s(), (0, o.setActiveCvmCredentialSession)(null, null), await Promise.allSettled([(0, o.clearCvmRecoveryKey)(), ...null == e.viewerId || null == e.sessionBindingId ? [] : [(0, c.clearCvmReplacementClaimsForOwner)(e.viewerId, e.sessionBindingId)]])))
      if ("rejected" === t.status) throw t.reason;
    (0, u.clearVmTrustSessionState)(), (0, i.clearRememberedServingVmType)(), p.setUser(null)
  }
  async function _(e) {
    let t = S,
      n = {
        identity: e,
        owner: null,
        ending: null,
        prepared: !1
      };
    S = n;
    let r = v,
      i = (async () => {
        await r.catch(() => {}), await t.ending?.catch(() => {}), S === n && (await E(t.identity, !0, !0), S === n && (n.prepared = !0))
      })();
    v = i, g = i;
    try {
      await i
    } finally {
      g === i && (g = null)
    }
    return S === n && null == n.ending
  }
  async function E(t, n, i = !1) {
    try {
      await I(t)
    } catch (e) {
      if (w.error({
          error: e,
          tags: (0, f.hatchSentryTags)(f.HATCH_SENTRY_SURFACES.AUTH)
        }, "Session credential cleanup failed"), n) throw e
    }
    try {
      if (null != y) await y();
      else {
        let {
          clearHatchSessionPersistentState: t
        } = await e.A(380353);
        await t()
      }
    } catch (e) {
      if (w.error({
          error: e,
          tags: (0, f.hatchSentryTags)(f.HATCH_SENTRY_SURFACES.AUTH)
        }, "Protected session state cleanup failed"), i) throw e
    }(0, r.clearRecentClientLogs)()
  }
  e.s(["captureHatchSessionRecovery", 0, function() {
    let e = S;
    return async (t = "authentication") => {
      if (S !== e || null == e.owner || null != e.ending) return {
        outcome: "cancelled"
      };
      w.retainForBugReport("info", "Verifying the current Hatch session after credential rejection");
      let n = await e.owner.recover();
      return S === e && null != e.owner && (null == e.ending || "validated" !== n.outcome) ? n : {
        outcome: "cancelled"
      }
    }
  }, "endHatchSession", 0, function(e) {
    let t = S;
    if (null != t.ending) return t.ending;
    let {
      reason: r,
      notifySiblingTabs: i = !0
    } = e;
    t.prepared = !1;
    let a = t.owner?.quiesce() ?? Promise.resolve(),
      l = v;
    (0, o.setActiveCvmCredentialSession)(null, null);
    let s = (async () => {
      if (await a, await l.catch(() => {}), S !== t || (await E(t.identity, "logout" === r || "reset" === r), S !== t)) return;
      if ("checkpoint" === r) return void await (0, d.terminateCheckpointedSession)(e.checkpointUrl ?? null, e.missingCheckpointDestination ?? "login", t.identity.sessionBindingId, () => S === t);
      if ("logout" === r || "reset" === r || "session" === r) {
        let o = "logout" === r ? "/api/logout" : "/api/auth/session/reset";
        try {
          let e = await fetch(o, {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              sessionBindingId: t.identity.sessionBindingId
            }),
            signal: AbortSignal.timeout(15e3)
          });
          if (S !== t) return;
          if (409 === e.status) return void window.location.reload();
          if (!e.ok) throw Error("Hatch session termination failed")
        } catch (n) {
          if (S !== t) return;
          w.error({
            error: n,
            tags: (0, f.hatchSentryTags)(f.HATCH_SENTRY_SURFACES.AUTH)
          }, "Session termination request failed");
          let e = new URLSearchParams;
          null != t.identity.sessionBindingId && e.set("sessionBindingId", t.identity.sessionBindingId), window.location.href = `/api/logout${0===e.size?"":`?${e}`}`;
          return
        }
        i && ("session" === r ? (0, n.broadcastAdmissionInvalidation)((0, h.createHatchAdmissionInvalidation)("session"), t.identity) : (0, n.broadcastLogout)(t.identity));
        try {
          sessionStorage.clear(), localStorage.clear()
        } catch {}
        null != e.onSuccess ? e.onSuccess() : window.location.replace("/");
        return
      }
      i && (0, n.broadcastAdmissionInvalidation)((0, h.createHatchAdmissionInvalidation)(r), t.identity);
      let o = (0, h.hatchAdmissionInvalidationDestination)(r);
      window.location.assign(o)
    })();
    return t.ending = s, s.catch(() => {
      if (S === t) {
        t.ending = null;
        let e = t.owner;
        e?.onTerminationFailed != null && (e.onTerminationFailed(), C.set(s, e))
      }
    }), s
  }, "establishHatchSession", 0, function(e, t) {
    null != S.owner && m(S.identity, e) ? S.owner = t : S = {
      identity: e,
      owner: t,
      ending: null,
      prepared: !0
    };
    let n = S;
    return () => {
      S === n && S.owner === t && (S.owner = null)
    }
  }, "hasHatchSessionTerminationFailureFeedback", 0, function(e) {
    let t = C.get(e);
    return null != t && t === S.owner
  }, "needsHatchSessionSetup", 0, function(e) {
    return !S.prepared || null != g || null != S.ending || null != S.identity.viewerId && !m(S.identity, e)
  }, "prepareHatchSession", 0, _, "registerHatchSessionStateCleanup", 0, function(e) {
    y = e
  }], 513116)
}, 496180, e => {
  "use strict";
  var t = e.i(737717),
    n = e.i(533468),
    r = e.i(974545),
    i = e.i(359783),
    o = e.i(863641);
  let a = (0, i.createClientLogger)("checkpointSessionClient"),
    l = "checkpoint_return",
    s = "/blocked?checkpoint_return=1",
    c = "/api/auth/check";
  async function u(e) {
    if (403 !== e.status) return {
      required: !1,
      checkpointUrl: null
    };
    try {
      let t = await e.json();
      if (!d(t)) return {
        required: !1,
        checkpointUrl: null
      };
      let n = "checkpoint_url" in t && "string" == typeof t.checkpoint_url ? (0, r.getValidatedAuthMetaCheckpointUrl)(t.checkpoint_url) : null;
      return {
        required: !0,
        checkpointUrl: n
      }
    } catch {
      return {
        required: !1,
        checkpointUrl: null
      }
    }
  }

  function d(e) {
    return "object" == typeof e && null != e && "type" in e && "checkpointRequired" === e.type
  }
  let h = {
    invalidation: null,
    checkpointRequired: !1,
    checkpointUrl: null
  };

  function m(e) {
    let t = e.headers.get("Content-Type")?.split(";", 1)[0]?.trim().toLowerCase();
    return "application/json" === t || "application/problem+json" === t
  }

  function f(e) {
    if (!m(e) || null == e.body) return !1;
    let t = e.headers.get("Content-Length");
    if (null == t) return !0;
    let n = Number(t);
    return !Number.isFinite(n) || n <= 65536
  }

  function p(e) {
    try {
      e.body?.cancel().catch(() => {})
    } catch {}
  }
  async function w(e, t) {
    if (!m(e) || null == e.body) return null;
    let n = Number(e.headers.get("Content-Length"));
    if (Number.isFinite(n) && n > 65536) return null;
    let r = e.body.getReader();
    t.add(r);
    let i = new TextDecoder,
      o = 0,
      a = "";
    try {
      for (;;) {
        let e = await r.read();
        if (e.done) break;
        if ((o += e.value.byteLength) > 65536) {
          try {
            r.cancel().catch(() => {})
          } catch {}
          return null
        }
        a += i.decode(e.value, {
          stream: !0
        })
      }
      return a += i.decode(), JSON.parse(a)
    } catch {
      return null
    } finally {
      t.delete(r), r.releaseLock()
    }
  }
  async function v(e, n) {
    if (401 !== e.status && 403 !== e.status) return h;
    let i = await w(e, n),
      o = (0, t.parseHatchAdmissionInvalidation)(i);
    return {
      invalidation: o?.status === e.status ? o : null,
      checkpointRequired: 403 === e.status && d(i),
      checkpointUrl: 403 === e.status && d(i) && "checkpoint_url" in i && "string" == typeof i.checkpoint_url ? (0, r.getValidatedAuthMetaCheckpointUrl)(i.checkpoint_url) : null
    }
  }

  function g(e = null, t = "login", r, i = () => !0) {
    return null == e || new URLSearchParams(window.location.search).has(l) ? "blocked" === t ? C("blocked", null, s, r, i) : C("login", null, n.NATIVE_LOGIN_PATH, r, i) : C("oidc", e, e, r, i)
  }

  function y(e, t, n, r, i) {
    a.error({
      error: n instanceof Error ? n : Error(String(n)),
      destination: e,
      status: r,
      tags: (0, o.hatchSentryTags)(o.HATCH_SENTRY_SURFACES.AUTH)
    }, "Checkpoint session termination failed; using client fallback"), window.location.assign(null == i ? t : `/api/logout?${new URLSearchParams({sessionBindingId:i})}`)
  }
  async function C(e, t, n, i, o = () => !0) {
    let a, s;
    try {
      let n, r;
      a = await window.fetch("/api/auth/checkpoint/terminate", {
        signal: AbortSignal.timeout(15e3),
        method: "POST",
        credentials: "include",
        cache: "no-store",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          destination: e,
          return_to: ((n = new URLSearchParams(window.location.search)).delete(l), r = 0 === n.size ? "" : `?${n.toString()}`, `${window.location.pathname||"/"}${r}${window.location.hash}`),
          ...null == i ? {} : {
            sessionBindingId: i
          },
          ...null == t ? {} : {
            checkpoint_url: t
          }
        })
      })
    } catch (t) {
      if (!o()) return;
      y(e, n, t, null, i);
      return
    }
    if (!o()) return;
    if (409 === a.status) return void window.location.reload();
    if (!a.ok) return void y(e, n, Error("Checkpoint termination returned a non-success response"), a.status, i);
    try {
      s = await a.json()
    } catch (t) {
      if (!o()) return;
      y(e, n, t, a.status, i);
      return
    }
    if (!o()) return;
    let c = "object" == typeof s && null != s && "redirect_to" in s && "string" == typeof s.redirect_to ? s.redirect_to : null,
      u = null != c && (c.startsWith("/") && !c.startsWith("//") || null != (0, r.getValidatedAuthMetaCheckpointUrl)(c)) ? c : n;
    window.location.assign(u)
  }
  e.s(["clearCheckpointAttempt", 0, function() {
    let e = new URLSearchParams(window.location.search);
    if (!e.has(l)) return;
    e.delete(l);
    let t = 0 === e.size ? "" : `?${e.toString()}`;
    window.history.replaceState(window.history.state, "", `${window.location.pathname}${t}${window.location.hash}`)
  }, "installCheckpointFetchObserver", 0, function({
    onAdmissionInvalidated: e,
    onCheckpointRequired: t,
    onAuthProbeRequired: n
  } = {}) {
    let r = window.fetch,
      i = null,
      o = null,
      a = !1,
      l = !0,
      s = !1,
      u = !1,
      d = new Set,
      m = new Set,
      w = 0,
      y = 0,
      C = (e, t) => {
        let n = [...e];
        for (let r of (t && e.clear(), n)) try {
          r.cancel().catch(() => {})
        } catch {}
      },
      S = n => !l || !!s || (null != n.invalidation ? e?.(n.invalidation) === !0 && (s = !0, o?.abort(), y++, C(m, !1), !0) : !!u || !!n.checkpointRequired && (u = !0, o?.abort(), y++, C(m, !1), null != t ? t(n.checkpointUrl) : g(n.checkpointUrl), !0)),
      I = () => {
        if (!l || s || u) return;
        if (null != i) {
          a = !0;
          return
        }
        a = !1;
        let e = () => {
          o = null, i = null, a && I()
        };
        if (null != n) {
          i = Promise.resolve().then(n).catch(() => {}).finally(e);
          return
        }
        let t = new AbortController;
        o = t, i = ((...e) => r.apply(window, e))(c, {
          method: "POST",
          credentials: "include",
          cache: "no-store",
          signal: AbortSignal.any([t.signal, AbortSignal.timeout(15e3)])
        }).then(async e => {
          if (!l || s || u || 401 !== e.status && 403 !== e.status || !f(e)) return void p(e);
          let t = ++w;
          if (C(d, !0), !l || t !== w) return void p(e);
          let n = await v(e, d);
          l && t === w && S(n)
        }).catch(() => {}).finally(e)
      },
      _ = async (...e) => {
        let t, i = await ((...e) => r.apply(window, e))(...e);
        if (!l) return i;
        let o = function(e) {
            let t = "string" == typeof e || e instanceof URL ? String(e) : e instanceof Request ? e.url : null;
            if (null == t) return null;
            try {
              let e = new URL(t, window.location.origin);
              return e.origin === window.location.origin && e.pathname.startsWith("/api/") ? e.pathname : null
            } catch {
              return null
            }
          }(e[0]),
          a = null != o && o !== c && "1" === i.headers.get("x-hatch-session-refreshed");
        if (a && I(), null == o || i.ok) return i;
        if (o !== c) {
          let e;
          if (a || I(), null != n || 401 !== i.status && 403 !== i.status || !f(i) || m.size > 0) return i;
          try {
            e = i.clone()
          } catch {
            return i
          }
          let t = ++y;
          return v(e, m).then(e => {
            l && t === y && S(e)
          }).catch(() => {}), i
        }
        if (null != n || 401 !== i.status && 403 !== i.status || !f(i)) return i;
        try {
          t = i.clone()
        } catch {
          return i
        }
        let s = ++w;
        return (async () => (C(d, !0), l && s === w) ? v(t, d) : h)().then(e => {
          l && s === w && S(e)
        }).catch(() => {}), i
      };
    return window.fetch = _, () => {
      l = !1, a = !1, o?.abort(), o = null, C(d, !0), C(m, !1), window.fetch === _ && (window.fetch = r)
    }
  }, "openCheckpointOrFallback", 0, function(e) {
    window.location.replace((0, r.getValidatedAuthMetaCheckpointUrl)(e) ?? s)
  }, "parseAuthCheckAccessToken", 0, function(e) {
    return "object" == typeof e && null !== e && "access_token" in e && "string" == typeof e.access_token && e.access_token.length > 0 ? e.access_token : null
  }, "readCheckpointRequiredResponse", 0, u, "terminateCheckpointedSession", 0, g], 496180)
}, 152759, e => {
  "use strict";
  var t = e.i(147245),
    n = e.i(737717);
  let r = "hatch-auth",
    i = "logout",
    o = "vm_reset",
    a = "vm_ready",
    l = "admission_invalidated",
    s = null;

  function c() {
    return s ??= crypto.randomUUID()
  }

  function u(e) {
    return "object" != typeof e || null == e ? null : ("string" == typeof e.viewerId || null === e.viewerId) && ("string" == typeof e.sessionBindingId || null === e.sessionBindingId) ? {
      viewerId: e.viewerId,
      sessionBindingId: e.sessionBindingId
    } : null
  }
  e.s(["broadcastAdmissionInvalidation", 0, function(e, t) {
    if ("u" < typeof BroadcastChannel) return;
    let i = (0, n.parseHatchAdmissionInvalidation)(e);
    if (null == i) return;
    let o = null;
    try {
      (o = new BroadcastChannel(r)).postMessage({
        type: l,
        senderId: c(),
        invalidation: i,
        ...null == t ? {} : {
          identity: t
        }
      })
    } catch {} finally {
      try {
        o?.close()
      } catch {}
    }
  }, "broadcastLogout", 0, function(e) {
    if ("u" < typeof BroadcastChannel) return;
    let t = null;
    try {
      (t = new BroadcastChannel(r)).postMessage({
        type: i,
        ...null == e ? {} : {
          identity: e
        }
      })
    } catch {} finally {
      try {
        t?.close()
      } catch {}
    }
  }, "broadcastVmReady", 0, function(e) {
    if ("u" < typeof BroadcastChannel) return;
    let t = null;
    try {
      (t = new BroadcastChannel(r)).postMessage({
        type: a,
        senderId: c(),
        ...e
      })
    } catch {} finally {
      t?.close()
    }
  }, "broadcastVmReset", 0, function() {
    if ("u" < typeof BroadcastChannel) return;
    let e = null;
    try {
      (e = new BroadcastChannel(r)).postMessage({
        type: o
      })
    } finally {
      e?.close()
    }
  }, "hatchVmResetHandoffPath", 0, function() {
    return (0, t.hatchCvmResetHandoffPath)()
  }, "subscribeToAdmissionInvalidationBroadcast", 0, function(e) {
    let t;
    if ("u" < typeof BroadcastChannel) return () => {};
    try {
      t = new BroadcastChannel(r)
    } catch {
      return () => {}
    }
    return t.onmessage = t => {
      let r = function(e) {
        if ("object" != typeof e || null === e || e.type !== l || "string" != typeof e.senderId || 0 === e.senderId.length) return null;
        let t = (0, n.parseHatchAdmissionInvalidation)(e.invalidation);
        return null == t ? null : {
          type: l,
          senderId: e.senderId,
          invalidation: t,
          ...null == u(e.identity) ? {} : {
            identity: u(e.identity)
          }
        }
      }(t.data);
      null != r && r.senderId !== c() && e(r.invalidation, r.identity ?? null)
    }, () => {
      try {
        t.close()
      } catch {}
    }
  }, "subscribeToLogoutBroadcast", 0, function(e) {
    let t;
    if ("u" < typeof BroadcastChannel) return () => {};
    try {
      t = new BroadcastChannel(r)
    } catch {
      return () => {}
    }
    return t.onmessage = t => {
      var n;
      "object" == typeof(n = t.data) && null !== n && n.type === i && e(u(t.data.identity))
    }, () => {
      try {
        t.close()
      } catch {}
    }
  }, "subscribeToVmReadyBroadcast", 0, function(e) {
    let t;
    if ("u" < typeof BroadcastChannel) return () => {};
    try {
      t = new BroadcastChannel(r)
    } catch {
      return () => {}
    }
    return t.onmessage = t => {
      var n;
      "object" == typeof(n = t.data) && null !== n && n.type === a && "string" == typeof n.senderId && "string" == typeof n.gatewayUrl && n.gatewayUrl.length > 0 && "string" == typeof n.vmName && n.vmName.length > 0 && ("noise" === n.readiness || "shell" === n.readiness) && t.data.senderId !== c() && e({
        gatewayUrl: t.data.gatewayUrl,
        vmName: t.data.vmName,
        readiness: t.data.readiness
      })
    }, () => {
      t.close()
    }
  }, "subscribeToVmResetBroadcast", 0, function(e) {
    if ("u" < typeof BroadcastChannel) return () => {};
    let t = new BroadcastChannel(r);
    return t.onmessage = t => {
      var n;
      "object" == typeof(n = t.data) && null !== n && n.type === o && e()
    }, () => {
      t.close()
    }
  }])
}, 44264, e => {
  "use strict";
  var t = e.i(263569),
    n = e.i(813158),
    r = e.i(863641),
    i = e.i(2412),
    o = e.i(767408);
  e.s(["cvmTrace", 0, function(e, a, l) {
    let s = l?.level ?? "info",
      c = `[cvm-pin] ${e}`,
      u = l?.error,
      d = {
        flow: "cvm_pin",
        phase: e,
        ...a ?? {},
        ...null != u ? {
          error_name: u instanceof Error ? u.name : "non_error",
          error_class: (0, o.classifyErrorForTelemetry)(u),
          error_length: (0, o.errorLengthForTelemetry)(u),
          cause_name: u instanceof Error && u.cause instanceof Error ? u.cause.name : void 0,
          cause_class: u instanceof Error && u.cause instanceof Error ? (0, o.classifyErrorForTelemetry)(u.cause) : void 0
        } : {}
      };
    (0, i.recordClientLogMessage)(s, "cvmTrace", c);
    try {
      "error" === s ? t.logger.error(c, d) : "warn" === s ? t.logger.warn(c, d) : t.logger.info(c, d)
    } catch {}
    if ("error" === s) {
      let t = (0, r.hatchSentryTags)(r.HATCH_SENTRY_SURFACES.CVM, {
        cvm_phase: e
      });
      u instanceof Error ? n.captureException(u, {
        level: "error",
        tags: t,
        extra: d
      }) : n.captureMessage(c, {
        level: "error",
        tags: t,
        extra: d
      })
    }
  }])
}, 901973, 147245, e => {
  "use strict";
  let t = "whatsapp_linking";
  var n = e.i(427489);
  let r = ["mc_enable", "mc_disable", "od", "use_od", "atod_token"],
    i = null,
    o = 1,
    a = new Set;

  function l() {
    for (let e of a) e(i)
  }

  function s() {
    return i
  }

  function c() {
    (0, n.clearInitialNoiseCvmEnrollment)(), i = null, o = 1, l()
  }
  e.s(["admitHatchCvmFlow", 0, function(e, t) {
    return "enabled" === t || e?.flow.kind === "unlock" || e?.flow.kind === "connecting" ? e : null
  }, "clearPendingHatchCvmFlow", 0, c, "hatchCvmResetHandoffPath", 0, function(e) {
    let n, i = new URLSearchParams(e ?? window.location.search);
    return function(e, t) {
      if (null == t || !e.startsWith("/") || e.startsWith("//") || e.includes("\\")) return e;
      let n = "https://hatch.invalid",
        r = new URL(e, n);
      return r.origin !== n ? e : (r.searchParams.set("source", t), `${r.pathname}${r.search}${r.hash}`)
    }(function(e, t) {
      let n = new URLSearchParams(t ?? window.location.search),
        r = new URLSearchParams;
      for (let t of e)
        for (let e of n.getAll(t)) r.append(t, e);
      let i = r.toString();
      return i ? `/?${i}` : "/"
    }(r, e), 1 === (n = i.getAll("source")).length && n[0] === t ? t : null)
  }, "isHatchCvmEnrollmentPending", 0, function() {
    let e = s()?.flow.kind;
    return "enroll_new" === e || "enroll_existing" === e
  }, "isHatchCvmFlowWaitingForConnection", 0, function(e) {
    return e?.flow.kind === "connecting"
  }, "markHatchCvmEnrollmentAssigned", 0, function() {
    i?.flow.kind === "enroll_new" && (o = (i = {
      ...i,
      flow: {
        kind: "enroll_existing"
      },
      revision: Math.max(i.revision + 1, o)
    }).revision + 1)
  }, "materializeHatchCvmBootstrapFlow", 0, function(e) {
    let t = {
      flow: e,
      revision: 0,
      returnPath: null
    };
    return i = t, o = 1, l(), t
  }, "prepareHatchCvmFlowReconnect", 0, function(e) {
    return o = (i = {
      flow: {
        kind: "connecting",
        readiness: e
      },
      revision: Math.max((i?.revision ?? 0) + 1, o),
      returnPath: null
    }).revision + 1, l(), i
  }, "readPendingHatchCvmFlow", 0, s, "requestHatchCvmFlow", 0, function(e) {
    if (i?.flow.kind === e.kind || (i?.flow.kind === "enroll_new" || i?.flow.kind === "enroll_existing") && "unlock" === e.kind) return !0;
    let t = {
      flow: e,
      revision: Math.max((i?.revision ?? 0) + 1, o),
      returnPath: null
    };
    return i = t, o = t.revision + 1, l(), !0
  }, "subscribeToHatchCvmFlow", 0, function(e) {
    return a.add(e), () => a.delete(e)
  }], 147245);
  var u = e.i(863641);
  let d = "hatch:vm-trust:pending:v1",
    h = "hatch:vm-trust:override:v1",
    m = new Set;

  function f() {
    let e = function() {
      try {
        return window.sessionStorage
      } catch {
        return null
      }
    }();
    if (null != e) try {
      e.removeItem(d), e.removeItem(h)
    } catch {}
  }
  e.s(["VM_TRUST_SESSION_TEST_CONSTANTS", 0, {
    PENDING_DECISION_KEY: d,
    SESSION_OVERRIDE_KEY: h
  }, "clearVmTrustDecisionState", 0, f, "clearVmTrustSessionState", 0, function() {
    (0, n.clearActiveNoiseCvmReplacementTrust)(), (0, n.clearInitialNoiseCvmEnrollment)(), m.clear(), f(), c()
  }, "reportStandardVmStorageFailureOnce", 0, function(e, t, n) {
    let r = `${e??"missing-owner"}:${t??"missing-vm"}`;
    if (!m.has(r)) {
      if (m.size >= 32) {
        let e = m.values().next().value;
        null != e && m.delete(e)
      }
      m.add(r), (0, u.captureHatchMessage)(u.HATCH_SENTRY_SURFACES.CVM, "Standard VM trust state unavailable; continuing without blocking", {
        level: "warning",
        extra: {
          failureStage: n
        }
      })
    }
  }], 901973)
}, 681875, 801713, e => {
  "use strict";
  var t = e.i(44264);

  function n(e) {
    return null != e && "object" == typeof e && "secret" === e.type && !1 === e.extractable && e.algorithm?.name === "HKDF" && Array.isArray(e.usages) && e.usages.includes("deriveBits")
  }
  async function r(e) {
    if ((0, t.cvmTrace)("importRecoverySecret", {
        secret_len: e.length
      }), 32 !== e.length) throw Error("CVM recovery secret must be exactly 32 bytes");
    let n = new Uint8Array(e);
    try {
      return await crypto.subtle.importKey("raw", n.buffer, "HKDF", !1, ["deriveBits"])
    } finally {
      n.fill(0)
    }
  }
  async function i(e, r) {
    if (!n(e)) throw Error("CVM recovery key must be a non-extractable HKDF key");
    let i = r.trim();
    if (!i) throw Error("CVM VM id is required for recovery-key derivation");
    let o = await crypto.subtle.deriveBits({
      name: "HKDF",
      hash: "SHA-256",
      salt: new Uint8Array(0),
      info: new TextEncoder().encode(`hatch:rv-luks:v1:${i}`)
    }, e, 256);
    return (0, t.cvmTrace)("deriveKrv: ok", {
      vm_id: i,
      out_bytes: o.byteLength
    }), new Uint8Array(o)
  }
  e.s(["deriveCvmRvKey", 0, i, "importCvmRecoverySecret", 0, r, "isCvmRecoveryKey", 0, n], 801713);
  var o = e.i(176585);
  let a = "keys",
    l = "vesta-recovery-secret",
    s = null,
    c = null,
    u = 0,
    d = 0;

  function h() {
    return 0 === d ? u : null
  }

  function m(e) {
    return new Promise((t, n) => {
      e.onsuccess = () => t(e.result), e.onerror = () => n(e.error ?? Error("IndexedDB request failed"))
    })
  }

  function f(e) {
    return new Promise((t, n) => {
      e.oncomplete = () => t(), e.onabort = () => n(e.error ?? Error("CVM credential transaction aborted")), e.onerror = () => n(e.error ?? Error("CVM credential transaction failed"))
    })
  }

  function p() {
    return "u" < typeof indexedDB ? Promise.reject(Error("IndexedDB is unavailable for CVM credentials")) : new Promise((e, t) => {
      let n;
      try {
        n = indexedDB.open("hatch-cvm-credentials", 1)
      } catch (e) {
        t(e);
        return
      }
      n.onupgradeneeded = () => {
        n.result.objectStoreNames.contains(a) || n.result.createObjectStore(a)
      }, n.onsuccess = () => {
        let t = n.result;
        t.onversionchange = () => t.close(), e(t)
      }, n.onerror = () => t(n.error ?? Error("Unable to open CVM credential store")), n.onblocked = () => t(Error("CVM credential store upgrade is blocked"))
    })
  }

  function w(e) {
    let t = e.trim().toLowerCase();
    if (!t) throw Error("A VM id is required for local VM security state");
    return t
  }

  function v(e, t) {
    return `vm-expectation:${e}:${t}`
  }

  function g(e) {
    return `active-vm-expectation:${e}`
  }

  function y(e) {
    return null != e && "object" == typeof e && 1 === e.version && "string" == typeof e.ownerId && "string" == typeof e.vmId && ("standard" === e.expectedType || "confidential" === e.expectedType) && ("user_selection" === e.source || "noise_message_2" === e.source) && "number" == typeof e.updatedAtMs
  }
  async function C(e, n, i) {
    let o = n.trim(),
      u = i.trim(),
      d = h(),
      w = s === o,
      v = c === u;
    if ((0, t.cvmTrace)("storeRecoveryKey: start", {
        secret_length: e.length,
        owner_matches: w,
        binding_matches: v
      }), !o || !u || !w || !v || null == d) throw (0, t.cvmTrace)("storeRecoveryKey: binding mismatch", {
      owner_matches: w,
      binding_matches: v
    }, {
      level: "error"
    }), Error("An authenticated login is required to store CVM credentials");
    let g = () => {
        if (h() !== d || s !== o || c !== u) throw Error("CVM credential session changed before the recovery key was stored")
      },
      y = await r(e);
    g();
    let C = await p();
    try {
      g();
      let e = C.transaction(a, "readwrite");
      await Promise.all([m(e.objectStore(a).put({
        version: 1,
        ownerId: o,
        sessionBindingId: u,
        recoveryKey: y
      }, l)), f(e)]), (0, t.cvmTrace)("storeRecoveryKey: stored ok")
    } finally {
      C.close()
    }
  }
  async function S() {
    if ("u" < typeof indexedDB || null == s || null == c) return (0, t.cvmTrace)("readRecoveryKey: null", {
      reason: "u" < typeof indexedDB ? "no_indexeddb" : "active_session_missing"
    }, {
      level: "warn"
    }), null;
    let e = await p();
    try {
      let r = e.transaction(a, "readwrite"),
        i = r.objectStore(a),
        [o] = await Promise.all([m(i.get(l)), f(r)]);
      if (null != o && "object" == typeof o && 1 === o.version && "string" == typeof o.ownerId && "string" == typeof o.sessionBindingId && n(o.recoveryKey) && o.ownerId === s && o.sessionBindingId === c) return o.recoveryKey;
      if (void 0 !== o) {
        let n = e.transaction(a, "readwrite");
        await Promise.all([m(n.objectStore(a).delete(l)), f(n)]), (0, t.cvmTrace)("readRecoveryKey: null", {
          reason: "owner_or_binding_mismatch"
        }, {
          level: "warn"
        })
      } else(0, t.cvmTrace)("readRecoveryKey: null", {
        reason: "no_record"
      }, {
        level: "warn"
      });
      return null
    } finally {
      e.close()
    }
  }
  async function I() {
    u += 1, d += 1;
    try {
      if ((0, o.clearHatchCvmNotarySigningKeys)(), "u" < typeof indexedDB) return;
      let e = await p();
      try {
        let t = e.transaction(a, "readwrite");
        await Promise.all([m(t.objectStore(a).delete(l)), f(t)])
      } finally {
        e.close()
      }
    } finally {
      d -= 1
    }
  }
  async function _(e) {
    if ("u" < typeof indexedDB || null == s) return null;
    let t = w(e),
      n = s,
      r = await p();
    try {
      let e = r.transaction(a, "readonly"),
        [i] = await Promise.all([m(e.objectStore(a).get(v(n, t))), f(e)]);
      if (y(i) && i.ownerId === n && i.vmId === t) return i.expectedType;
      return null
    } finally {
      r.close()
    }
  }
  async function E() {
    if ("u" < typeof indexedDB || null == s) return null;
    let e = s,
      t = await p();
    try {
      let n = t.transaction(a, "readonly"),
        [r] = await Promise.all([m(n.objectStore(a).get(g(e))), f(n)]);
      if (y(r) && r.ownerId === e) return {
        vmId: r.vmId,
        expectedType: r.expectedType
      };
      return null
    } finally {
      t.close()
    }
  }
  async function A(e, t, n, r, i = {}) {
    let o = r.trim();
    if (!o || s !== o) throw Error("An authenticated viewer is required to store VM security state");
    let l = w(e),
      c = await p();
    try {
      let e = c.transaction(a, "readwrite"),
        r = e.objectStore(a),
        s = {
          version: 1,
          ownerId: o,
          vmId: l,
          expectedType: t,
          source: n,
          updatedAtMs: Date.now()
        },
        u = [m(r.put(s, v(o, l)))];
      !1 !== i.setActive && u.push(m(r.put(s, g(o)))), await Promise.all([...u, f(e)])
    } finally {
      c.close()
    }
  }
  async function R(e) {
    if ("u" < typeof indexedDB || null == s) return;
    let t = w(e),
      n = s,
      r = await p();
    try {
      let e = r.transaction(a, "readonly"),
        [i] = await Promise.all([m(e.objectStore(a).get(g(n))), f(e)]),
        o = r.transaction(a, "readwrite"),
        l = o.objectStore(a),
        s = [m(l.delete(v(n, t)))];
      y(i) && i.ownerId === n && i.vmId === t && s.push(m(l.delete(g(n)))), await Promise.all([...s, f(o)])
    } finally {
      r.close()
    }
  }
  e.s(["clearCvmRecoveryKey", 0, I, "clearExpectedVmType", 0, R, "getActiveCvmCredentialOwner", 0, function() {
    return s
  }, "getActiveCvmCredentialSessionBinding", 0, function() {
    return c
  }, "getCvmCredentialGeneration", 0, h, "readActiveVmExpectation", 0, E, "readCvmRecoveryKey", 0, S, "readExpectedVmType", 0, _, "setActiveCvmCredentialSession", 0, function(e, t) {
    let n = e?.trim() ?? "",
      r = t?.trim() ?? "",
      i = n || null,
      a = null == i ? null : r || null;
    (s !== i || c !== a) && (u += 1, (0, o.clearHatchCvmNotarySigningKeys)()), s = i, c = a
  }, "storeCvmRecoveryKey", 0, C, "storeExpectedVmType", 0, A], 681875)
}, 622335, 214628, 167553, 956516, e => {
  "use strict";
  e.s(["CVM_CHIP_ALLOWLIST_MAX_AGE_MS", 0, 1728e5, "CVM_CHIP_ALLOWLIST_MIN_AGE_MS", 0, 864e5, "resolveCvmReplacementPolicy", 0, function(e, t, n) {
    return "prod.hatch.chip_allowlist" !== e && "staging.hatch.chip_allowlist" !== e || !Number.isFinite(t) || 60 * t * 6e4 <= 864e5 || 60 * t * 6e4 > 1728e5 || !Number.isFinite(n) || n < 30 || n > 360 ? null : {
      namespace: e,
      maximumAllowlistAgeMs: 60 * t * 6e4,
      maintenanceTimeoutMs: 1e3 * Math.min(n, 300)
    }
  }], 214628);
  class t extends Error {
    code;
    constructor(e) {
      super(`CVM chip allowlist verification ${e}`), this.code = e, this.name = "CvmChipAllowlistVerificationError"
    }
  }
  e.s(["CvmChipAllowlistVerificationError", 0, t, "validateCvmChipAllowlistTime", 0, function(e, n, r) {
    if (e > n) throw new t("future");
    if (n - e < 864e5) throw new t("too_recent");
    if (n - e > r) throw new t("expired")
  }], 622335);
  let n = "claims",
    r = "allowlists",
    i = "revokedSessions";
  class o extends Error {
    code;
    constructor(e) {
      super(`CVM replacement storage ${e}`), this.code = e, this.name = "CvmReplacementStorageError"
    }
  }
  async function a(e, t, a, l) {
    let s = await ((l?.throwIfAborted(), "u" < typeof indexedDB) ? Promise.reject(new o("unavailable")) : new Promise((e, t) => {
      let a, s = !1,
        c = () => {
          s = !0, t(l?.reason)
        },
        u = () => l?.removeEventListener("abort", c);
      l?.addEventListener("abort", c, {
        once: !0
      });
      let d = () => {
        s = !0, u(), t(new o("unavailable"))
      };
      try {
        a = indexedDB.open("hatch-cvm-replacement", 2)
      } catch {
        d();
        return
      }
      a.onupgradeneeded = () => {
        let e = a.result;
        e.objectStoreNames.contains(n) || e.createObjectStore(n, {
          keyPath: ["ownerId", "envId", "attemptId"]
        }).createIndex("ownerId", "ownerId"), e.objectStoreNames.contains(r) || e.createObjectStore(r), e.objectStoreNames.contains(i) || e.createObjectStore(i)
      }, a.onsuccess = () => {
        let n = a.result;
        if (u(), s || l?.aborted) {
          n.close(), s || t(l?.reason);
          return
        }
        s = !0, n.onversionchange = () => n.close(), e(n)
      }, a.onerror = d, a.onblocked = d
    }));
    try {
      return l?.throwIfAborted(), await new Promise((n, r) => {
        let i = s.transaction(e, t, {
            durability: "readwrite" === t ? "strict" : "default"
          }),
          c = null,
          u = null,
          d = () => l?.removeEventListener("abort", m),
          h = e => {
            u = e;
            try {
              i.abort()
            } catch {
              d(), r(e)
            }
          },
          m = () => h(l?.reason);
        l?.addEventListener("abort", m, {
          once: !0
        }), i.oncomplete = () => {
          d(), l?.aborted ? r(l.reason) : null === c ? r(new o("transaction_failed")) : n(c.value)
        }, i.onabort = () => {
          d(), r(u ?? new o("transaction_failed"))
        }, i.onerror = () => {
          u ??= new o("transaction_failed")
        };
        try {
          l?.throwIfAborted(), a({
            transaction: i,
            read: (e, t) => {
              e.onsuccess = () => {
                try {
                  l?.throwIfAborted(), t(e.result)
                } catch (e) {
                  h(e)
                }
              }
            },
            finish: e => c = {
              value: e
            }
          })
        } catch (e) {
          h(e)
        }
      })
    } finally {
      s.close()
    }
  }

  function l(e) {
    return /^(?:[0-9A-F]{16}|[0-9A-F]{128})$/.test(e)
  }
  e.s(["CVM_CHIP_ALLOWLISTS_STORE", 0, r, "CVM_REPLACEMENT_CLAIMS_STORE", 0, n, "CVM_REPLACEMENT_REVOKED_SESSIONS_STORE", 0, i, "CvmReplacementStorageError", 0, o, "runCvmReplacementTransaction", 0, a], 167553), e.s(["isCvmReplacementChipId", 0, l, "parseCvmChipAllowlist", 0, function(e) {
    if ("string" != typeof e.chipAllowlist || 0 === e.chipAllowlist.length || e.chipAllowlist.length > 4194304 || "string" != typeof e.version || 0 === e.version.length || "string" != typeof e.proofSignature || 0 === e.proofSignature.length || "string" != typeof e.proofSerializedMessage || 0 === e.proofSerializedMessage.length) throw new o("corrupt");
    let t = e.chipAllowlist.split("\n");
    "" === t.at(-1) && t.pop();
    let n = "headerless",
      r = null,
      i = null,
      a = null;
    if (t[0]?.startsWith("#")) {
      r = t.shift();
      let e = /^#chip-allowlist\/(v2|v3) ([0-9]+)(?: ([0-9]+))?$/.exec(r);
      if (null == e || "v3" === e[1] != (null != e[3]) || (n = "v3" === e[1] ? "v3" : "v2", i = 1e3 * Number(e[2]), a = null == e[3] ? null : Number(e[3]), !Number.isSafeInteger(i) || i < 0 || null != a && (!Number.isSafeInteger(a) || a !== t.length))) throw new o("corrupt")
    }
    if (t.length < 1 || t.some(e => !l(e)) || new Set(t).size !== t.length) throw new o("corrupt");
    return {
      chipIds: t,
      format: n,
      header: r,
      publishedAt: i,
      leafCount: a
    }
  }], 956516)
}, 329764, 220969, e => {
  "use strict";
  var t = e.i(622335),
    n = e.i(956516),
    r = e.i(214628),
    i = e.i(167553);
  let o = r.CVM_CHIP_ALLOWLIST_MAX_AGE_MS,
    a = new Map;

  function l(e, t, n) {
    if ("prod.hatch.chip_allowlist" !== e && "staging.hatch.chip_allowlist" !== e || !Number.isSafeInteger(t) || t < 0 || !Number.isSafeInteger(n) || n <= 0) throw new i.CvmReplacementStorageError("corrupt")
  }
  async function s(n, r, i, o, l, s, c) {
    s?.throwIfAborted();
    try {
      let u = a.get(n);
      if (!c && void 0 !== u && h({
          namespace: n,
          fetchedAt: i,
          value: r
        }, u)) {
        (0, t.validateCvmChipAllowlistTime)(u.timestampUnixMs, o, l), null !== u.publishedAt && (0, t.validateCvmChipAllowlistTime)(u.publishedAt, o, l);
        return
      }
      let {
        verifyCvmChipAllowlist: d
      } = await e.A(577040);
      s?.throwIfAborted();
      let m = await d(n, r, {
        maxAgeMs: l
      }, o, s);
      s?.throwIfAborted(), a.set(n, {
        namespace: n,
        fetchedAt: i,
        value: {
          ...r
        },
        timestampUnixMs: m.timestampUnixMs,
        publishedAt: m.publishedAt
      })
    } catch (e) {
      if (s?.throwIfAborted(), a.delete(n), e instanceof t.CvmChipAllowlistVerificationError) throw e;
      throw new t.CvmChipAllowlistVerificationError("unavailable")
    }
  }

  function c(e, t, r, o) {
    if (l(t, r, o), void 0 === e) return null;
    if (null == e || "object" != typeof e || 1 !== e.schemaVersion || e.namespace !== t || "syntax_only" !== e.validation || "number" != typeof e.fetchedAt || !Number.isSafeInteger(e.fetchedAt) || e.fetchedAt < 0 || null == e.value || "object" != typeof e.value) throw new i.CvmReplacementStorageError("corrupt");
    let {
      chipIds: a
    } = (0, n.parseCvmChipAllowlist)(e.value);
    return e.fetchedAt > r || r - e.fetchedAt >= o ? null : {
      namespace: t,
      fetchedAt: e.fetchedAt,
      value: e.value,
      chipIds: a,
      validation: "syntax_only"
    }
  }
  async function u(e, t, r = Date.now(), a) {
    l(e, r, o), (0, n.parseCvmChipAllowlist)(t);
    let d = {
      schemaVersion: 1,
      namespace: e,
      fetchedAt: r,
      value: {
        ...t
      },
      validation: "syntax_only"
    };
    await s(e, d.value, r, r, o, a, !0), a?.throwIfAborted(), await (0, i.runCvmReplacementTransaction)(i.CVM_CHIP_ALLOWLISTS_STORE, "readwrite", ({
      transaction: t,
      read: n,
      finish: a
    }) => {
      let l = t.objectStore(i.CVM_CHIP_ALLOWLISTS_STORE);
      n(l.get(e), t => {
        if (null != t && "object" == typeof t && 1 === t.schemaVersion && t.namespace === e && "number" == typeof t.fetchedAt && t.fetchedAt > r && t.fetchedAt <= Date.now()) try {
          if (null !== c(t, e, t.fetchedAt, o)) return void a()
        } catch {}
        l.put(d, e), a()
      })
    }, a)
  }
  async function d(e, t = Date.now(), n, r = o, {
    forceVerification: a = !1
  } = {}) {
    l(e, t, r);
    let u = await (0, i.runCvmReplacementTransaction)(i.CVM_CHIP_ALLOWLISTS_STORE, "readonly", ({
      transaction: n,
      read: o,
      finish: a
    }) => {
      o(n.objectStore(i.CVM_CHIP_ALLOWLISTS_STORE).get(e), n => a(c(n, e, t, r)))
    }, n);
    return null === u ? null : (await s(e, u.value, u.fetchedAt, t, r, n, a), n?.throwIfAborted(), {
      ...u,
      validation: "verified"
    })
  }

  function h(e, t) {
    return e.namespace === t.namespace && e.fetchedAt === t.fetchedAt && e.value.chipAllowlist === t.value.chipAllowlist && e.value.version === t.value.version && e.value.proofSignature === t.value.proofSignature && e.value.proofSerializedMessage === t.value.proofSerializedMessage
  }
  async function m(e, n = Date.now(), r, a = o) {
    try {
      return await d(e, n, r, a) === null
    } catch (e) {
      if (e instanceof i.CvmReplacementStorageError && "corrupt" === e.code || e instanceof t.CvmChipAllowlistVerificationError) return !0;
      throw e
    }
  }

  function f(e) {
    if (0 === e.length || e.length > 0x100000000) throw new i.CvmReplacementStorageError("corrupt");
    let t = 0x100000000 - 0x100000000 % e.length,
      n = new Uint32Array(1);
    do crypto.getRandomValues(n); while (n[0] >= t) return e[n[0] % e.length]
  }

  function p(e) {
    if (e.length < 2 || new Set(e).size !== e.length) throw new i.CvmReplacementStorageError("corrupt");
    let t = f(e),
      n = f(e.filter(e => e !== t));
    return [t, n]
  }

  function w(e) {
    return "string" == typeof e && e.length <= 256 && e.trim().length > 0
  }

  function v(e) {
    if (!w(e.ownerId) || !w(e.envId) || !w(e.attemptId)) throw new i.CvmReplacementStorageError("corrupt");
    return [e.ownerId, e.envId, e.attemptId]
  }

  function g(e) {
    return "pending" === e || "accepted" === e || "stoodDown" === e || "fatal" === e || "finished" === e
  }

  function y(e, t) {
    if (void 0 === e) return null;
    if (null == e || "object" != typeof e || 1 !== e.schemaVersion || e.ownerId !== t.ownerId || e.envId !== t.envId || e.attemptId !== t.attemptId || !w(e.nonce) || !Array.isArray(e.candidateChipIds) || 1 !== e.candidateChipIds.length && 2 !== e.candidateChipIds.length || new Set(e.candidateChipIds).size !== e.candidateChipIds.length || e.candidateChipIds.some(e => "string" != typeof e || !(0, n.isCvmReplacementChipId)(e)) || "string" != typeof e.allowlistVersion || 0 === e.allowlistVersion.length || "number" != typeof e.createdAt || !Number.isSafeInteger(e.createdAt) || e.createdAt < 0 || !g(e.disposition)) throw new i.CvmReplacementStorageError("corrupt");
    return {
      ...t,
      nonce: e.nonce,
      candidateChipIds: e.candidateChipIds,
      allowlistVersion: e.allowlistVersion,
      createdAt: e.createdAt,
      disposition: e.disposition
    }
  }

  function C(e, t, n) {
    let r = v(e),
      o = {
        ...e
      };
    if (!w(t)) throw new i.CvmReplacementStorageError("corrupt");
    return (0, i.runCvmReplacementTransaction)([i.CVM_REPLACEMENT_CLAIMS_STORE, i.CVM_REPLACEMENT_REVOKED_SESSIONS_STORE], "readonly", ({
      transaction: e,
      read: n,
      finish: a
    }) => {
      n(e.objectStore(i.CVM_REPLACEMENT_REVOKED_SESSIONS_STORE).get([o.ownerId, t]), t => {
        if (void 0 !== t) throw new i.CvmReplacementStorageError("revoked_session");
        n(e.objectStore(i.CVM_REPLACEMENT_CLAIMS_STORE).get(r), e => a(y(e, o)))
      })
    }, n)
  }
  async function S(e, t, n, r = Date.now(), a, l = o) {
    let s = v(e),
      u = {
        ...e
      };
    if (!w(t)) throw new i.CvmReplacementStorageError("corrupt");
    let m = await C(u, t, a);
    if (null !== m) return m;
    let f = await d(n, r, a, l, {
      forceVerification: !0
    });
    return a?.throwIfAborted(), (0, i.runCvmReplacementTransaction)([i.CVM_REPLACEMENT_CLAIMS_STORE, i.CVM_CHIP_ALLOWLISTS_STORE, i.CVM_REPLACEMENT_REVOKED_SESSIONS_STORE], "readwrite", ({
      transaction: e,
      read: o,
      finish: a
    }) => {
      let d = e.objectStore(i.CVM_REPLACEMENT_CLAIMS_STORE);
      o(e.objectStore(i.CVM_REPLACEMENT_REVOKED_SESSIONS_STORE).get([u.ownerId, t]), t => {
        if (void 0 !== t) throw new i.CvmReplacementStorageError("revoked_session");
        o(d.get(s), t => {
          let s = y(t, u);
          null !== s ? a(s) : o(e.objectStore(i.CVM_CHIP_ALLOWLISTS_STORE).get(n), e => {
            let t = c(e, n, r, l);
            if (null === t || null === f || t.chipIds.length < 2 || !h(t, f)) return void a(null);
            let i = {
              ...u,
              nonce: crypto.randomUUID(),
              candidateChipIds: p(t.chipIds),
              allowlistVersion: t.value.version,
              createdAt: r,
              disposition: "pending"
            };
            d.add({
              ...i,
              schemaVersion: 1
            }), a(i)
          })
        })
      })
    }, a)
  }
  e.s(["DEFAULT_CVM_CHIP_ALLOWLIST_MAX_AGE_MS", 0, o, "isSameCvmChipAllowlist", 0, h, "parseStoredCvmChipAllowlist", 0, c, "readCachedCvmChipAllowlist", 0, d, "selectCvmReplacementChips", 0, p, "shouldRefreshCvmChipAllowlist", 0, m, "storeCvmChipAllowlist", 0, u], 220969), e.s(["clearCvmReplacementClaimsForOwner", 0, function(e, t, n) {
    if (!w(e) || !w(t)) throw new i.CvmReplacementStorageError("corrupt");
    return (0, i.runCvmReplacementTransaction)([i.CVM_REPLACEMENT_CLAIMS_STORE, i.CVM_REPLACEMENT_REVOKED_SESSIONS_STORE], "readwrite", ({
      transaction: n,
      read: r,
      finish: o
    }) => {
      n.objectStore(i.CVM_REPLACEMENT_REVOKED_SESSIONS_STORE).put({
        schemaVersion: 1,
        ownerId: e,
        sessionBindingId: t
      }, [e, t]), r(n.objectStore(i.CVM_REPLACEMENT_CLAIMS_STORE).index("ownerId").openCursor(IDBKeyRange.only(e)), e => {
        null === e ? o() : (e.delete(), e.continue())
      })
    }, n)
  }, "createCvmReplacementClaim", 0, S, "readCvmReplacementClaim", 0, C, "setCvmReplacementClaimDisposition", 0, function(e, t, n, r) {
    let o = v(e),
      a = {
        ...e
      };
    if (!w(t) || !g(n)) throw new i.CvmReplacementStorageError("corrupt");
    return (0, i.runCvmReplacementTransaction)(i.CVM_REPLACEMENT_CLAIMS_STORE, "readwrite", ({
      transaction: e,
      read: r,
      finish: l
    }) => {
      let s = e.objectStore(i.CVM_REPLACEMENT_CLAIMS_STORE);
      r(s.get(o), e => {
        let r = y(e, a);
        if (null === r || r.nonce !== t) return void l(null);
        if ("stoodDown" === r.disposition || "fatal" === r.disposition || "finished" === r.disposition || "accepted" === r.disposition && "pending" === n) return void l(r);
        let i = {
          ...r,
          disposition: n
        };
        s.put({
          ...i,
          schemaVersion: 1
        }), l(i)
      })
    }, r)
  }], 329764)
}, 385265, e => {
  "use strict";
  e.s(["NoiseCvmReplacementPendingError", 0, class extends Error {
    reason;
    canRetryUnsentRequests;
    name;
    constructor(e, t = null) {
      super("Confidential VM replacement is not ready for recovery"), this.reason = e, this.canRetryUnsentRequests = t, this.name = "NoiseCvmReplacementPendingError"
    }
  }, "NoiseCvmReplacementVerificationError", 0, class extends Error {
    name = "NoiseCvmReplacementVerificationError";
    constructor() {
      super("Confidential VM replacement did not provide a confidential challenge")
    }
  }])
}, 427489, e => {
  "use strict";
  var t = e.i(76924),
    n = e.i(681875),
    r = e.i(385265);
  let i = null,
    o = null,
    a = !1,
    l = null,
    s = 0,
    c = 0,
    u = new Map,
    d = new Set;

  function h(e) {
    return JSON.stringify([e.ownerId, e.sessionBindingId, e.envId])
  }

  function m(e, t) {
    let n = h(e);
    (null == t || u.get(n)?.state.attemptId === t) && u.delete(n)
  }

  function f(e, t) {
    return null != e && e.ownerId === (0, n.getActiveCvmCredentialOwner)() && e.sessionBindingId === (0, n.getActiveCvmCredentialSessionBinding)() && e.envId.trim().toLowerCase() === t?.trim().toLowerCase()
  }

  function p(e, n) {
    return n?.trim() || (0, t.extractVmId)(e)
  }

  function w() {
    let e = (0, n.getActiveCvmCredentialOwner)(),
      t = (0, n.getActiveCvmCredentialSessionBinding)(),
      r = (0, n.getCvmCredentialGeneration)(),
      i = s;
    return () => s === i && null != r && (0, n.getCvmCredentialGeneration)() === r && (0, n.getActiveCvmCredentialOwner)() === e && (0, n.getActiveCvmCredentialSessionBinding)() === t
  }

  function v(e) {
    let t = C(e),
      n = c,
      i = w();
    return () => {
      if (!i()) throw new r.NoiseCvmReplacementPendingError("context_changed");
      if (c !== n) throw new r.NoiseCvmReplacementPendingError("context_changed", i);
      if (C(e) !== t) throw new r.NoiseCvmReplacementPendingError("context_changed")
    }
  }

  function g(e) {
    return i?.ownerId === e.ownerId && i.sessionBindingId === e.sessionBindingId && f(i, e.envId) ? i : null
  }

  function y(e) {
    i?.ownerId === e.ownerId && i.sessionBindingId === e.sessionBindingId && i.envId === e.envId && i.attemptId === e.attemptId && (i = null)
  }

  function C(e) {
    return f(i, e) ? i : null
  }
  e.s(["authorizeInitialNoiseCvmEnrollment", 0, function(e) {
    let t = {
      ...e
    };
    return o = t, () => {
      o === t && (o = null)
    }
  }, "captureNoiseCvmReplacementContext", 0, function(e, t = "confidential") {
    let n = C(e),
      i = v(e);
    return () => {
      if (i(), n?.authorization.kind === "blocked") throw new r.NoiseCvmReplacementPendingError(n.authorization.reason);
      if (null != n && "standard" === t) throw new r.NoiseCvmReplacementVerificationError
    }
  }, "captureNoiseCvmReplacementIdentity", 0, v, "captureNoiseCvmReplacementTrust", 0, g, "captureNoiseCvmRequestIdentity", 0, w, "clearActiveNoiseCvmReplacementTrust", 0, function() {
    s += 1, l = null, i = null, u.clear()
  }, "clearInitialNoiseCvmEnrollment", 0, function() {
    o = null
  }, "clearNoiseCvmReplacementForInventory", 0, function(e) {
    if (!f(e, e.envId)) return;
    c += 1;
    let t = g(e);
    null != t && y(t), m(e, null)
  }, "completeInitialNoiseCvmEnrollment", 0, function(e, t) {
    f(o, p(e, t)) && (o = null)
  }, "isActiveNoiseCvmReplacement", 0, function(e, t) {
    return f(i, p(e, t))
  }, "isActiveNoiseCvmReplacementEnabled", 0, function() {
    return a
  }, "isInitialNoiseCvmEnrollment", 0, function(e) {
    return f(o, e)
  }, "publishNoiseCvmReplacementDiscovery", 0, function(e) {
    if (f(e.target, e.target.envId))
      for (let t of (u.set(h(e.target), e), d)) t()
  }, "readNoiseCvmReplacementDiscovery", 0, function(e) {
    return f(e, e.envId) ? u.get(h(e)) ?? null : null
  }, "readNoiseCvmReplacementTrust", 0, C, "resolveNoiseCvmEnvironmentId", 0, p, "retainInitialNoiseCvmEnrollmentForTarget", 0, function(e, t) {
    f(o, p(e, t)) || (o = null)
  }, "retainNoiseCvmReplacementTrustForTarget", 0, function(e, t) {
    let n = p(e, t)?.trim().toLowerCase() ?? null;
    n !== l && (null != l && (s += 1), l = n), f(i, n) || (i = null)
  }, "retireNoiseCvmReplacementDiscovery", 0, m, "retireNoiseCvmReplacementTrust", 0, y, "setActiveNoiseCvmReplacementEnabled", 0, function(e) {
    a = e
  }, "setActiveNoiseCvmReplacementTrust", 0, function(e, t = {
    kind: "blocked",
    reason: "ownership_unknown"
  }) {
    var n, r;
    let o = i,
      a = o?.ownerId === e.ownerId && o.sessionBindingId === e.sessionBindingId && o.envId === e.envId && o.attemptId === e.attemptId && (n = o.authorization, r = t, "blocked" === n.kind ? "blocked" === r.kind && n.reason === r.reason : "standard" === n.kind ? "standard" === r.kind : "pinned" === r.kind && n.candidateChipIds.length === r.candidateChipIds.length && n.candidateChipIds.every((e, t) => e === r.candidateChipIds[t])) ? o : {
        ...e,
        authorization: "pinned" === t.kind ? {
          kind: "pinned",
          candidateChipIds: [...t.candidateChipIds]
        } : {
          ...t
        }
      };
    return i = a, () => {
      i === a && (i = null)
    }
  }, "subscribeToNoiseCvmReplacementDiscovery", 0, function(e) {
    return d.add(e), () => d.delete(e)
  }])
}, 974545, e => {
  "use strict";
  e.i(849079);
  let t = /^(\d+\.od)\.auth\.meta\.com$/;

  function n() {
    let e = new URL("https://auth.meta.com/oidc"),
      n = "auth.meta.com" === e.hostname || t.test(e.hostname) || !1;
    if ("https:" !== e.protocol || "" !== e.username || "" !== e.password || "" !== e.port || !n) throw Error("Configured OIDC auth URL is not an allowed auth.meta origin");
    return e.origin
  }
  e.s(["getConfiguredAuthMetaOrigin", 0, n, "getValidatedAuthMetaCheckpointUrl", 0, function(e) {
    if (null == e || 0 === e.length || e.length > 8192) return null;
    try {
      let r = new URL(e),
        i = n(),
        o = new URL(i).hostname,
        a = t.exec(o)?.[1] ?? void 0,
        l = new Set(null == a ? ["www.facebook.com", "www.instagram.com"] : [`www.${a}.facebook.com`, `www.${a}.instagram.com`]),
        s = "/auth_platform" === r.pathname || r.pathname.startsWith("/auth_platform/"),
        c = "/checkpoint" === r.pathname || r.pathname.startsWith("/checkpoint/") || "/checkpoints" === r.pathname || r.pathname.startsWith("/checkpoints/");
      if (!(r.origin === i && (s || c) || "https:" === r.protocol && "" === r.port && l.has(r.hostname) && s) || "" !== r.username || "" !== r.password) return null;
      return r.toString()
    } catch {
      return null
    }
  }], 974545)
}, 737717, e => {
  "use strict";
  let t = "hatchAdmissionInvalidated";

  function n(e) {
    return "session" === e ? {
      type: t,
      reason: e,
      status: 401
    } : {
      type: t,
      reason: e,
      status: 403
    }
  }

  function r(e) {
    if ("object" != typeof e || null === e) return null;
    let r = Object.keys(e);
    return 3 === r.length && r.includes("type") && r.includes("reason") && r.includes("status") && e.type === t ? "session" === e.reason && 401 === e.status ? n("session") : ("entitlement" === e.reason || "activation" === e.reason) && 403 === e.status ? n(e.reason) : null : null
  }
  async function i(e) {
    if (401 !== e.status && 403 !== e.status) return null;
    try {
      let t = r(await e.json());
      return t?.status === e.status ? t : null
    } catch {
      return null
    }
  }
  e.s(["createHatchAdmissionInvalidation", 0, n, "hatchAdmissionInvalidationDestination", 0, function(e) {
    switch (e) {
      case "session":
        return "/";
      case "entitlement":
        return "/blocked";
      case "activation":
        return "/access"
    }
  }, "parseHatchAdmissionInvalidation", 0, r, "readHatchAdmissionInvalidationResponse", 0, i])
}, 533468, e => {
  "use strict";
  let t = "resume_provider_sso",
    n = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  e.s(["NATIVE_LOGIN_PATH", 0, "/", "NATIVE_LOGIN_RESUME_PROVIDER_SSO_PARAM", 0, t, "readResumeProviderSsoMarkersFromParams", 0, function(e) {
    if ("1" !== e.get(t)) return null;
    let r = e.get("provider"),
      i = e.get("outcome"),
      o = e.get("completion_id"),
      a = e.get("redirect_to"),
      l = [];
    return ("facebook" !== r && "instagram" !== r && l.push("provider"), "credentials" !== i && "completion" !== i && "two_factor" !== i && "error" !== i && l.push("outcome"), null != o && n.test(o) || l.push("completion_id"), (null == a || !a.startsWith("/") || a.startsWith("//") || a.startsWith("/\\")) && l.push("redirect_to"), l.length > 0) ? {
      ok: !1,
      failedFields: l
    } : {
      ok: !0,
      markers: {
        provider: r,
        outcome: i,
        completionId: o,
        redirectTo: a
      }
    }
  }])
}]);

//# debugId=76511834-c1c3-a0ce-2f27-697995114aac
//# sourceMappingURL=06dojnuamommh.js.map