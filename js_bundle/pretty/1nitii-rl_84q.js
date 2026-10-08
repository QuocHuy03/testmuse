;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "05919291-e5f1-7d7a-e372-e7568aa384e5")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 964924, e => {
  "use strict";
  var t = e.i(986907),
    n = e.i(126607),
    r = e.i(301970),
    a = e.i(359783),
    o = e.i(863641);
  let l = (0, a.createClientLogger)("connectorTracing"),
    i = "hatch:connector-auth-pending",
    c = "hatch.connector_auth.callback",
    u = "hatch.connector_auth.callback_ack",
    s = new Map,
    d = new Map,
    p = !1;

  function y() {
    if ("visible" === document.visibilityState)
      for (let e of [...s.values()]) e.providerTab?.closed === !0 && R(e.provider, e.instanceKey)
  }

  function f() {
    [...s.values()].some(e => null != e.providerTab) || p && (p = !1, window.removeEventListener("focus", y), document.removeEventListener("visibilitychange", y))
  }
  let h = !1,
    _ = null,
    m = new Set,
    g = new Map;

  function C() {
    if (!h && (h = !0, n.logInfra.registerPreFlushCallback(() => {
        for (let e of [...s.values()]) e.handedOff || v(e, "CANCEL", {
          cancelPoint: "document_unload"
        });
        for (let e of [...d.keys()]) P(e, "document_unload")
      }), "u" > typeof BroadcastChannel)) {
      try {
        _ = new BroadcastChannel("hatch.connector_auth")
      } catch {
        return
      }
      _.onmessage = e => {
        var t, n;
        if ("object" == typeof(t = e.data) && null != t && t.type === u && "string" == typeof t.instanceKey && "string" == typeof t.provider && "boolean" == typeof t.claimed) {
          let t = g.get(e.data.instanceKey);
          null != t && (e.data.claimed && g.delete(e.data.instanceKey), t(e.data.claimed));
          return
        }
        if ("object" != typeof(n = e.data) || null == n || n.type !== c || "string" != typeof n.instanceKey || "string" != typeof n.provider || "string" != typeof n.entryPoint || void 0 !== n.operation && "connect" !== n.operation && "add_account" !== n.operation || "ok" !== n.verdict && "error" !== n.verdict) return;
        let r = s.get(e.data.provider),
          a = r?.instanceKey === e.data.instanceKey ? r : null;
        if (_?.postMessage({
            type: u,
            instanceKey: e.data.instanceKey,
            provider: e.data.provider,
            claimed: null != a
          }), null == a) return;
        a.trace.markerPoint("auth_callback_received"), "ok" === e.data.verdict ? v(a, "SUCCESS", {
          callbackDelivery: e.data.callbackDelivery,
          reconciliationResult: e.data.reconciliationResult,
          callbackInput: e.data.callbackInput,
          gatewayRpcOutcome: e.data.gatewayRpcOutcome,
          gatewayResultStatus: e.data.gatewayResultStatus,
          callbackDisposition: e.data.callbackDisposition,
          gatewayErrorKind: e.data.gatewayErrorKind,
          gatewayErrorCode: e.data.gatewayErrorCode,
          gatewayHttpStatusClass: e.data.gatewayHttpStatusClass,
          reconciliationErrorKind: e.data.reconciliationErrorKind,
          reconciliationErrorCode: e.data.reconciliationErrorCode,
          reconciliationHttpStatusClass: e.data.reconciliationHttpStatusClass
        }) : v(a, "FAIL", {
          errorType: e.data.errorType ?? "server_error",
          upstreamErrorCode: e.data.upstreamErrorCode,
          callbackStage: e.data.callbackStage ?? void 0,
          callbackDelivery: e.data.callbackDelivery,
          reconciliationResult: e.data.reconciliationResult,
          callbackInput: e.data.callbackInput,
          callbackErrorSource: e.data.callbackErrorSource ?? void 0,
          gatewayRpcOutcome: e.data.gatewayRpcOutcome,
          gatewayResultStatus: e.data.gatewayResultStatus,
          callbackDisposition: e.data.callbackDisposition,
          gatewayErrorKind: e.data.gatewayErrorKind,
          gatewayErrorCode: e.data.gatewayErrorCode,
          gatewayHttpStatusClass: e.data.gatewayHttpStatusClass,
          reconciliationErrorKind: e.data.reconciliationErrorKind,
          reconciliationErrorCode: e.data.reconciliationErrorCode,
          reconciliationHttpStatusClass: e.data.reconciliationHttpStatusClass
        });
        let o = {
          ...e.data,
          operation: a.operation
        };
        for (let e of m) try {
          e(o)
        } catch (e) {
          l.retainForBugReport("warn", "connector callback result listener failed")
        }
      }
    }
  }

  function k() {
    try {
      let e = window.sessionStorage.getItem(i);
      if (null == e) return null;
      let t = JSON.parse(e);
      if ("object" != typeof t || null == t || "string" != typeof t.instanceKey || "string" != typeof t.provider || "number" != typeof t.startEpochMs || void 0 !== t.operation && "connect" !== t.operation && "add_account" !== t.operation || "same_tab" !== t.handoff && "new_tab" !== t.handoff) return null;
      return {
        ...t,
        operation: t.operation ?? "connect"
      }
    } catch {
      return null
    }
  }

  function b(e, t = window) {
    try {
      t.sessionStorage.setItem(i, JSON.stringify(e))
    } catch {}
  }

  function w(e) {
    try {
      if (null != e) {
        let t = k();
        if (t?.instanceKey !== e) return
      }
      window.sessionStorage.removeItem(i)
    } catch {}
  }

  function v(e, n, r) {
    s.delete(e.provider), w(e.instanceKey), null != e.providerTab && f();
    let a = {
      auth_type: e.authType,
      operation: e.operation
    };
    null != e.oauthFlowType && (a.oauth_flow_type = e.oauthFlowType), null != r.cancelPoint && (a.cancel_point = r.cancelPoint), null != r.errorType && (a.error_type = r.errorType), null != r.callbackStage && (a.callback_stage = r.callbackStage), null != r.callbackDelivery && (a.callback_delivery = r.callbackDelivery), null != r.reconciliationResult && (a.reconciliation_result = r.reconciliationResult), null != r.callbackInput && (a.callback_input = r.callbackInput), null != r.callbackErrorSource && (a.callback_error_source = r.callbackErrorSource), null != r.gatewayRpcOutcome && (a.gateway_rpc_outcome = r.gatewayRpcOutcome), null != r.gatewayResultStatus && (a.gateway_result_status = r.gatewayResultStatus), null != r.callbackDisposition && (a.callback_disposition = r.callbackDisposition), null != r.gatewayErrorKind && (a.gateway_error_kind = r.gatewayErrorKind), null != r.gatewayErrorCode && (a.gateway_error_code = r.gatewayErrorCode), null != r.gatewayHttpStatusClass && (a.gateway_http_status_class = r.gatewayHttpStatusClass), null != r.reconciliationErrorKind && (a.reconciliation_error_kind = r.reconciliationErrorKind), null != r.reconciliationErrorCode && (a.reconciliation_error_code = r.reconciliationErrorCode), null != r.reconciliationHttpStatusClass && (a.reconciliation_http_status_class = r.reconciliationHttpStatusClass), null != e.retryableFailure && (a.retryable_error_code = e.retryableFailure.code);
    let o = r.upstreamErrorCode ?? e.retryableFailure?.upstreamErrorCode ?? null;
    if (null != o && o.length > 0 && (a.upstream_error_code = o), null != e.connectInfo) {
      let {
        connectActionType: t,
        rejectReason: n,
        acAuthIntent: r,
        connectUrlHost: o
      } = e.connectInfo;
      a.connect_action_type = null != t ? S(t) : "absent", null != n && (a.reject_reason = n), null != r && (a.ac_auth_intent = S(r)), null != o && (a.connect_url_host = o)
    }
    let l = {};
    !0 === r.alreadyConnected && (l.already_connected = !0), null != e.rowAdvertisesAccountCenter && (l.row_advertises_ac = e.rowAdvertisesAccountCenter), e.trace.annotate({
      string: a,
      ...Object.keys(l).length > 0 ? {
        bool: l
      } : {}
    }), (0, t.endManualTrace)(e.trace, n)
  }
  let A = /^[a-z0-9_-]{1,64}$/;

  function S(e) {
    let t = e.trim().toLowerCase();
    return A.test(t) ? t : "invalid"
  }

  function E(e, t, n) {
    let r = s.get(e);
    null == r || r.firedPoints.has(t) || (r.firedPoints.add(t), r.trace.markerPoint(t, n))
  }

  function T(e) {
    try {
      return new URL(e).hostname.replace(/^www\./, "")
    } catch {
      return "unknown"
    }
  }

  function R(e, t) {
    let n = s.get(e);
    null != n && n.handedOff && (null == t || n.instanceKey === t) && v(n, "CANCEL", {
      cancelPoint: "provider_tab_closed"
    })
  }

  function N(e, t) {
    let n = d.get(e);
    null == n || n.firedPoints.has(t) || (n.firedPoints.add(t), n.trace.markerPoint(t))
  }

  function P(e, n) {
    let r = d.get(e);
    null != r && (d.delete(e), r.trace.annotate({
      string: {
        cancel_point: n
      }
    }), (0, t.endManualTrace)(r.trace, "CANCEL"))
  }
  e.s(["CONNECT_INFO_UNRESOLVED", 0, {
    connectActionType: null,
    rejectReason: null,
    acAuthIntent: null,
    connectUrlHost: null
  }, "cancelConnectorAuth", 0, function(e, t) {
    let n = s.get(e);
    null == n || n.handedOff || v(n, "CANCEL", {
      cancelPoint: t
    })
  }, "cancelConnectorAuthAfterProviderTabClosed", 0, R, "cancelConnectorDisconnect", 0, P, "failConnectorAuth", 0, function(e, t, n) {
    let r = s.get(e);
    null != r && v(r, "FAIL", {
      errorType: t,
      upstreamErrorCode: n
    })
  }, "failConnectorDisconnect", 0, function(e, n) {
    let r = d.get(e);
    null != r && (d.delete(e), r.trace.annotate({
      string: {
        error_type: n
      }
    }), (0, t.endManualTrace)(r.trace, "FAIL"))
  }, "getPendingConnectorAuthIdentity", 0, function() {
    let e = k();
    return null == e ? null : {
      instanceKey: e.instanceKey,
      provider: e.provider,
      operation: e.operation
    }
  }, "handOffConnectorAuthToProvider", 0, function(e, t) {
    let n = s.get(e);
    if (null == n) return;
    let r = T(t.url);
    E(e, "third_party_redirect", {
      auth_domain: r
    }), n.handedOff = !0;
    let a = {
      instanceKey: n.instanceKey,
      provider: n.provider,
      skillName: n.skillName,
      entryPoint: n.entryPoint,
      authType: n.authType,
      oauthFlowType: n.oauthFlowType,
      authDomain: r,
      startEpochMs: n.startEpochMs,
      redirectEpochMs: Math.round(performance.timeOrigin + performance.now()),
      handoff: t.handoff,
      operation: n.operation
    };
    b(a), "new_tab" === t.handoff && null != t.callbackWindow && (b(a, t.callbackWindow), "add_account" === n.operation && (n.providerTab = t.callbackWindow, p || (p = !0, window.addEventListener("focus", y), document.addEventListener("visibilitychange", y)))), "same_tab" === t.handoff && (s.delete(e), null != n.providerTab && f())
  }, "hasConnectorDisconnectTrace", 0, function(e) {
    return d.has(e)
  }, "isCurrentConnectorAuthTrace", 0, function(e, t) {
    return s.get(e)?.instanceKey === t
  }, "noteConnectorAlreadyConnected", 0, function(e) {
    let t = s.get(e);
    null != t && (E(e, "already_connected_shown"), v(t, "SUCCESS", {
      alreadyConnected: !0
    }))
  }, "noteConnectorAuthMethodStarted", 0, function(e, t) {
    let n = s.get(e);
    null != n && (n.authType = t.authType, n.oauthFlowType = t.oauthFlowType ?? null, E(e, "auth_method_started", {
      auth_type: t.authType,
      ...null != t.oauthFlowType ? {
        oauth_flow_type: t.oauthFlowType
      } : {}
    }))
  }, "noteConnectorAuthTypeResolved", 0, function(e, t) {
    let n = s.get(e);
    null != n && (n.authType = t.authType, n.oauthFlowType = t.oauthFlowType ?? null)
  }, "noteConnectorConnectFallback", 0, function(e, t) {
    s.get(e)?.trace.annotate({
      string: {
        connect_fallback: t
      }
    })
  }, "noteConnectorConnectInfoResolved", 0, function(e, t) {
    let n = s.get(e);
    null != n && (n.connectInfo = t)
  }, "noteConnectorConsentAccepted", 0, function(e) {
    E(e, "consent_accepted")
  }, "noteConnectorConsentSheetLoaded", 0, function(e) {
    E(e, "consent_sheet_loaded")
  }, "noteConnectorConsentSheetLoading", 0, function(e, t) {
    E(e, "consent_sheet_loading", {
      needs_skills_fetch: t.needsSkillsFetch
    })
  }, "noteConnectorCredentialSubmitted", 0, function(e) {
    E(e, "credential_submitted")
  }, "noteConnectorDisconnectConfirmationShown", 0, function(e) {
    N(e, "confirmation_shown")
  }, "noteConnectorDisconnectConfirmed", 0, function(e) {
    N(e, "disconnect_confirmed")
  }, "noteConnectorDisconnectMutationResponse", 0, function(e) {
    N(e, "mutation_response")
  }, "noteConnectorDisconnectMutationSent", 0, function(e) {
    N(e, "mutation_sent")
  }, "noteConnectorRetryableFailure", 0, function(e, t) {
    let n = s.get(e);
    if (null == n) return;
    let r = t.upstreamErrorCode;
    n.retryableFailure = {
      code: t.code,
      upstreamErrorCode: null != r && r.length > 0 ? S(r) : null
    }
  }, "resolveConnectorAuthCallback", 0, function(e) {
    C();
    let {
      provider: n,
      verdict: a,
      errorType: i,
      upstreamErrorCode: u,
      callbackStage: d,
      callbackDelivery: p = "acknowledged",
      reconciliationResult: y = "not_attempted",
      callbackInput: f = "unknown",
      callbackErrorSource: h,
      gatewayRpcOutcome: m = "unknown",
      gatewayResultStatus: b = "unknown",
      callbackDisposition: A = "unknown",
      gatewayErrorKind: S = "none",
      gatewayErrorCode: E = null,
      gatewayHttpStatusClass: T = "none",
      reconciliationErrorKind: R = "none",
      reconciliationErrorCode: N = null,
      reconciliationHttpStatusClass: P = "none"
    } = e, I = n, K = null, L = null, F = null, O = null != n ? s.get(n) : void 0;
    if (null != O) return w(), O.trace.markerPoint("auth_callback_received"), "ok" === a ? v(O, "SUCCESS", {
      callbackDelivery: p,
      reconciliationResult: y,
      callbackInput: f,
      gatewayRpcOutcome: m,
      gatewayResultStatus: b,
      callbackDisposition: A,
      gatewayErrorKind: S,
      gatewayErrorCode: E,
      gatewayHttpStatusClass: T,
      reconciliationErrorKind: R,
      reconciliationErrorCode: N,
      reconciliationHttpStatusClass: P
    }) : v(O, "FAIL", {
      errorType: i ?? "server_error",
      upstreamErrorCode: u,
      callbackStage: d,
      callbackDelivery: p,
      reconciliationResult: y,
      callbackInput: f,
      callbackErrorSource: h,
      gatewayRpcOutcome: m,
      gatewayResultStatus: b,
      callbackDisposition: A,
      gatewayErrorKind: S,
      gatewayErrorCode: E,
      gatewayHttpStatusClass: T,
      reconciliationErrorKind: R,
      reconciliationErrorCode: N,
      reconciliationHttpStatusClass: P
    }), {
      owner: "local",
      acknowledgement: Promise.resolve("acknowledged")
    };
    let U = k();
    if (null != U) {
      let e = "same_tab" === U.handoff;
      if (e || null == n || U.provider === n) {
        if (w(), e) {
          let e, n;
          return (e = (0, t.startManualInteraction)(r.EctoInteractionTracePolicy.CONNECTOR_AUTH, {
            debugName: "connector-auth-resumed",
            includeUri: !1,
            startTimeMs: U.startEpochMs - performance.timeOrigin,
            annotateVisibility: !1
          })).annotate({
            string: {
              provider: U.provider,
              skill_name: U.skillName,
              entry_point: U.entryPoint,
              operation: U.operation,
              instance_key: U.instanceKey,
              auth_domain: U.authDomain
            },
            int: {
              third_party_redirect_ms: U.redirectEpochMs - U.startEpochMs
            },
            bool: {
              resumed_across_documents: !0
            }
          }), e.markerPoint("auth_callback_received"), n = {
            instanceKey: U.instanceKey,
            provider: U.provider,
            skillName: U.skillName,
            entryPoint: U.entryPoint,
            operation: U.operation,
            trace: e,
            authType: U.authType,
            oauthFlowType: U.oauthFlowType,
            startEpochMs: U.startEpochMs,
            rowAdvertisesAccountCenter: null,
            connectInfo: null,
            retryableFailure: null,
            handedOff: !1,
            providerTab: null,
            firedPoints: new Set(["auth_callback_received"])
          }, (s.set(U.provider, n), "ok" === a) ? v(n, "SUCCESS", {
            callbackDelivery: p,
            reconciliationResult: y,
            callbackInput: f,
            gatewayRpcOutcome: m,
            gatewayResultStatus: b,
            callbackDisposition: A,
            gatewayErrorKind: S,
            gatewayErrorCode: E,
            gatewayHttpStatusClass: T,
            reconciliationErrorKind: R,
            reconciliationErrorCode: N,
            reconciliationHttpStatusClass: P
          }) : v(n, "FAIL", {
            errorType: i ?? "server_error",
            upstreamErrorCode: u,
            callbackStage: d,
            callbackDelivery: p,
            reconciliationResult: y,
            callbackInput: f,
            callbackErrorSource: h,
            gatewayRpcOutcome: m,
            gatewayResultStatus: b,
            callbackDisposition: A,
            gatewayErrorKind: S,
            gatewayErrorCode: E,
            gatewayHttpStatusClass: T,
            reconciliationErrorKind: R,
            reconciliationErrorCode: N,
            reconciliationHttpStatusClass: P
          }), {
            owner: "local",
            acknowledgement: Promise.resolve("acknowledged")
          }
        }
        I = n ?? U.provider, K = U.instanceKey, L = U.entryPoint, F = U.operation
      }
    }
    if (null == I || null == K || null == L || null == F) return l.retainForBugReport("warn", "connector callback carried no attempt identity; auth trace not resolved"), {
      owner: "unclaimed",
      acknowledgement: null
    };
    if (null == _) {
      let e = "Connector OAuth callback could not reach its originating tab";
      return l.retainForBugReport("warn", e), (0, o.captureHatchMessage)(o.HATCH_SENTRY_SURFACES.CONNECT_OAUTH, e, {
        level: "warning",
        tags: {
          callback_transport: "broadcast_unavailable",
          operation: F,
          callback_verdict: a,
          callback_error_source: h ?? "none",
          callback_input: f,
          gateway_rpc_outcome: m,
          gateway_result_status: b,
          callback_disposition: A,
          gateway_error_kind: S,
          gateway_http_status_class: T,
          reconciliation_error_kind: R,
          reconciliation_http_status_class: P
        },
        extra: {
          callbackAttemptId: K,
          connectorProvider: I,
          gatewayErrorCode: E,
          reconciliationErrorCode: N
        }
      }), {
        owner: "unclaimed",
        acknowledgement: null
      }
    }
    let D = new Promise(e => {
        let t = AbortSignal.timeout(2e3),
          n = !1,
          r = r => {
            if (!r) {
              n = !0;
              return
            }
            t.removeEventListener("abort", a), e("acknowledged")
          },
          a = () => {
            g.get(K) === r && g.delete(K), e(n ? "disclaimed" : "timed_out")
          };
        g.set(K, r), t.addEventListener("abort", a, {
          once: !0
        })
      }),
      H = {
        type: c,
        instanceKey: K,
        provider: I,
        entryPoint: L,
        operation: F,
        verdict: a,
        errorType: i ?? null,
        upstreamErrorCode: u ?? null,
        callbackStage: d ?? null,
        callbackDelivery: p,
        reconciliationResult: y,
        callbackInput: f,
        callbackErrorSource: h ?? null,
        gatewayRpcOutcome: m,
        gatewayResultStatus: b,
        callbackDisposition: A,
        gatewayErrorKind: S,
        gatewayErrorCode: E,
        gatewayHttpStatusClass: T,
        reconciliationErrorKind: R,
        reconciliationErrorCode: N,
        reconciliationHttpStatusClass: P
      };
    try {
      _.postMessage(H)
    } catch {}
    return {
      owner: "opener",
      acknowledgement: D
    }
  }, "startConnectorAuthTrace", 0, function(e) {
    C();
    let {
      provider: n,
      entryPoint: a,
      operation: o = "connect"
    } = e, l = null != e.skillName && e.skillName.length > 0 ? e.skillName : n, i = s.get(n);
    null != i && v(i, "CANCEL", {
      cancelPoint: "superseded"
    });
    let c = crypto.randomUUID(),
      u = (0, t.startManualInteraction)(r.EctoInteractionTracePolicy.CONNECTOR_AUTH, {
        debugName: "connector-auth",
        includeUri: !1,
        annotateVisibility: !1
      });
    return u.annotate({
      string: {
        provider: n,
        skill_name: l,
        entry_point: a,
        operation: o,
        instance_key: c
      }
    }), s.set(n, {
      instanceKey: c,
      provider: n,
      skillName: l,
      entryPoint: a,
      operation: o,
      trace: u,
      authType: "unknown",
      oauthFlowType: null,
      startEpochMs: Math.round(performance.timeOrigin + performance.now()),
      rowAdvertisesAccountCenter: e.rowAdvertisesAccountCenter ?? null,
      connectInfo: null,
      retryableFailure: null,
      handedOff: !1,
      providerTab: null,
      firedPoints: new Set
    }), c
  }, "startConnectorDisconnectTrace", 0, function(e) {
    C();
    let {
      provider: n,
      entryPoint: a
    } = e, o = null != e.skillName && e.skillName.length > 0 ? e.skillName : n, l = d.get(n);
    null != l && (d.delete(n), l.trace.annotate({
      string: {
        cancel_point: "superseded"
      }
    }), (0, t.endManualTrace)(l.trace, "CANCEL"));
    let i = (0, t.startManualInteraction)(r.EctoInteractionTracePolicy.CONNECTOR_DISCONNECT, {
      debugName: "connector-disconnect",
      includeUri: !1,
      annotateVisibility: !1
    });
    i.annotate({
      string: {
        provider: n,
        skill_name: o,
        entry_point: a,
        instance_key: crypto.randomUUID()
      }
    }), d.set(n, {
      trace: i,
      firedPoints: new Set
    })
  }, "subscribeConnectorAuthCallbackResults", 0, function(e) {
    return C(), m.add(e), () => m.delete(e)
  }, "succeedConnectorAuth", 0, function(e) {
    let t = s.get(e);
    null != t && v(t, "SUCCESS", {})
  }, "succeedConnectorDisconnect", 0, function(e) {
    let n = d.get(e);
    null != n && (d.delete(e), (0, t.endManualTrace)(n.trace, "SUCCESS"))
  }, "urlHostForLogging", 0, T])
}, 46735, 266471, 976834, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(519172),
    a = e.i(345717),
    o = e.i(848048),
    l = e.i(281539),
    i = e.i(420297),
    c = e.i(440802),
    u = e.i(756710),
    s = e.i(976745),
    d = e.i(359783),
    p = e.i(175286),
    y = e.i(668409),
    f = e.i(183912),
    h = e.i(721037);
  let _ = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,
    m = /^[A-Za-z0-9_.\-~]+$/,
    g = /^[A-Za-z0-9_.-]+$/,
    C = /^\/[A-Za-z0-9_.\-~/{}]+$/,
    k = /^(?!-)[A-Za-z0-9-]{1,63}(?<!-)(?:\.(?!-)[A-Za-z0-9-]{1,63}(?<!-))*\.[A-Za-z]{2,63}$/,
    b = ["nip.io", "sslip.io", "xip.io"];

  function w(e) {
    if (!(0, y.isNonEmptyString)(e)) return !1;
    let t = e.trim().toLowerCase();
    return !!k.test(t) && !b.some(e => t === e || t.endsWith(`.${e}`))
  }

  function v(e) {
    var t;
    return !("object" != typeof e || null == e || Array.isArray(e)) && "string" == typeof(t = e.field) && g.test(t.trim()) && function(e) {
      if ("bearer_header" === e) return !0;
      if ("object" != typeof e || null == e || Array.isArray(e)) return !1;
      let t = e.custom_header;
      if ((0, y.isNonEmptyString)(t)) return _.test(t.trim());
      let n = e.url_path_segment;
      if ("string" == typeof n) return n.length <= 256 && C.test(n) && n.includes("{}") && !n.includes("..");
      let r = e.query_param;
      return !!(0, y.isNonEmptyString)(r) && m.test(r.trim())
    }(e.placement)
  }

  function A(e) {
    let t;
    if (null == e || 0 === e.trim().length) return null;
    let n = (0, y.decodeBase64UrlJson)(e);
    if (null == n) return null;
    try {
      t = JSON.parse(n)
    } catch {
      return null
    }
    if ("object" != typeof t || null == t || Array.isArray(t)) return null;
    let r = t;
    if (2 !== r.version) return null;
    let a = r.connector;
    if ("object" != typeof a || null == a || Array.isArray(a) || !(0, y.isCustomCredentialName)(a.name) || a.name.length > 128 || "api_key" !== a.mode) return null;
    let o = Array.isArray(a.hosts) ? a.hosts : [];
    if (0 === o.length || o.length > 10 || !o.every(w)) return null;
    let l = Array.isArray(a.token_proxy) ? a.token_proxy : [];
    return 1 === l.length && l.every(v) ? t : null
  }
  async function S(e, t, n, r) {
    let a = (0, h.buildCustomApiKeyConnectorRegisterRequest)(e.connector.name, e.connector.hosts, e.connector.token_proxy, t);
    if (null == a) throw Error("custom api-key connector spec is incomplete");
    await (0, h.registerCustomApiKeyConnector)(null != r ? {
      ...a,
      session_id: r
    } : a, n)
  }
  var E = e.i(8229),
    T = e.i(576347);
  let R = /^[A-Za-z0-9_.-]+$/;

  function N(e) {
    let t;
    if (null == e || 0 === e.trim().length) return null;
    let n = (0, y.decodeBase64UrlJson)(e);
    if (null == n) return null;
    try {
      t = JSON.parse(n)
    } catch {
      return null
    }
    if ("object" != typeof t || null == t || Array.isArray(t)) return null;
    let r = t;
    if (1 !== r.version) return null;
    let a = r.credential;
    if ("object" != typeof a || null == a || Array.isArray(a) || !(0, y.isCustomCredentialName)(a.name)) return null;
    let o = Array.isArray(a.domains) ? a.domains : [];
    if (0 === o.length || !o.every(y.isNonEmptyString)) return null;
    let l = Array.isArray(a.credentials) ? a.credentials : [];
    return 1 === l.length && l.every(e => {
      var t, n;
      return !("object" != typeof(t = e) || null == t || Array.isArray(t)) && "string" == typeof(n = t.name) && R.test(n.trim()) && "api_key" === t.type && function(e) {
        if ("bearer_header" === e) return !0;
        if ("object" != typeof e || null == e || Array.isArray(e)) return !1;
        let t = e.custom_header;
        if ((0, y.isNonEmptyString)(t)) return !0;
        let n = e.url_path_segment;
        return "string" == typeof n && n.includes("{}")
      }(t.placement)
    }) ? t : null
  }

  function P(e) {
    return N(function(e) {
      try {
        let t = new URL(e);
        if ("api-key:" !== t.protocol && "oauth:" !== t.protocol && "/connect/api-key" !== t.pathname && "/connect/oauth" !== t.pathname) return null;
        return t.searchParams.get("spec")
      } catch {
        return null
      }
    }(e))
  }
  async function I(e, t, n) {
    let r, a = (r = e.credential.credentials.map(e => {
      let n = t[e.name]?.trim() ?? "";
      return {
        name: e.name,
        type: e.type,
        placement: e.placement,
        value: n
      }
    })).some(e => 0 === e.value.length) ? null : {
      name: e.credential.name,
      domains: e.credential.domains,
      credentials: r
    };
    if (null == a) throw Error("dynamic credential spec is incomplete");
    await (0, E.registerDynamicCredential)(a, n)
  }

  function K(e) {
    return e.replace(/-/g, "_").toLowerCase()
  }

  function L(e, t) {
    return null != t && 0 !== t.trim().length && K((0, E.customDynamicCredentialDisplayName)(e.connector.name)) === K(t)
  }
  async function F({
    apiKeySpec: e,
    dynamicSpec: t,
    key: n,
    serviceName: r,
    gatewayUrl: a,
    sendRequest: o,
    sessionId: l
  }) {
    if ((null != e || null != t) && (null == a || 0 === a.trim().length)) throw Error("gateway URL is not available");
    if (null != e) await S(e, n, o, l);
    else if (null != t) {
      let e = t.credential.credentials[0];
      if (null == e) throw Error("dynamic credential spec has no API key field");
      await I(t, {
        [e.name]: n
      }, o)
    } else await o("api_key_auth.callback", {
      provider: r,
      key: n,
      ...null != l && {
        session_id: l
      }
    })
  }
  e.s(["parseCustomOAuthConnectSpecFromHref", 0, function(e) {
    return (0, T.parseCustomOAuthConnectSpec)(function(e) {
      try {
        let t = new URL(e);
        if ("oauth:" !== t.protocol && "/connect/oauth" !== t.pathname) return null;
        return t.searchParams.get("spec")
      } catch {
        return null
      }
    }(e))
  }, "parseDynamicCredentialConnectSpec", 0, N, "parseDynamicCredentialConnectSpecFromHref", 0, P, "registerDynamicCredentialFromSpec", 0, I], 266471), e.s(["parseConnectSpecs", 0, function(e, t) {
    let n = A(e);
    return null == n || L(n, t) ? {
      apiKeySpec: n,
      dynamicSpec: null != n ? null : N(e)
    } : {
      apiKeySpec: null,
      dynamicSpec: null
    }
  }, "parseConnectSpecsFromHref", 0, function(e, t) {
    let n = A(function(e) {
      try {
        let t = new URL(e);
        if (!("api-key:" === t.protocol || "/connect/api-key" === t.pathname && (0, f.getHatchOriginsAllowlist)().has(t.origin))) return null;
        return t.searchParams.get("spec")
      } catch {
        return null
      }
    }(e));
    return null == n || L(n, t) ? {
      apiKeySpec: n,
      dynamicSpec: null != n ? null : P(e)
    } : {
      apiKeySpec: null,
      dynamicSpec: null
    }
  }, "submitApiKeyConnection", 0, F], 976834);
  var O = e.i(863641),
    U = e.i(964924),
    D = e.i(482040);
  let H = (0, d.createClientLogger)("api_key_connect");

  function M(e) {
    return !e
  }
  e.s(["ApiKeyConnectForm", 0, function(e) {
    let d, y, f, h, _, m, g, C, k, b, w, v, A, S, E, T, R, N, P, I, K, L, j, x = (0, n.c)(73),
      {
        serviceName: z,
        apiKeySpec: B,
        dynamicSpec: $,
        isCustomConnector: W,
        onSuccess: J,
        actionTarget: Y,
        secondaryAction: Z,
        inputTestId: G,
        sessionId: V
      } = e,
      q = void 0 !== W && W,
      Q = (0, r.useRef)(null),
      X = (0, r.useId)(),
      ee = (0, r.useId)(),
      [et, en] = (0, r.useState)(!1);
    x[0] !== z ? (d = {
      third_party_connector_type: z,
      third_party_connection_action: "submit_credentials"
    }, x[0] = z, x[1] = d) : d = x[1], x[2] !== Y || x[3] !== z || x[4] !== d ? (y = {
      eventName: l.HatchClickEvent.API_KEY_SUBMIT_CLICK,
      actionTarget: Y,
      actionType: "click",
      thirdPartyConnectorType: z,
      thirdPartyConnectionAction: "submit_credentials",
      metadata: d
    }, x[2] = Y, x[3] = z, x[4] = d, x[5] = y) : y = x[5];
    let er = y,
      {
        ref: ea,
        onClick: eo
      } = (0, o.useTrackedClickRef)(er);
    x[6] !== z ? (f = {
      third_party_connector_type: z,
      third_party_connection_action: "toggle_password_visibility"
    }, x[6] = z, x[7] = f) : f = x[7], x[8] !== Y || x[9] !== z || x[10] !== f ? (h = {
      eventName: l.HatchClickEvent.API_KEY_VISIBILITY_TOGGLE_CLICK,
      actionTarget: Y,
      actionType: "click",
      thirdPartyConnectorType: z,
      thirdPartyConnectionAction: "toggle_password_visibility",
      metadata: f
    }, x[8] = Y, x[9] = z, x[10] = f, x[11] = h) : h = x[11];
    let el = h,
      {
        onClick: ei
      } = (0, o.useTrackedClickRef)(el);
    x[12] !== B || x[13] !== $ || x[14] !== eo || x[15] !== J || x[16] !== z || x[17] !== V ? (_ = {
      serviceName: z,
      apiKeySpec: B,
      dynamicSpec: $,
      onSuccess: J,
      onSubmitClick: eo,
      sessionId: V
    }, x[12] = B, x[13] = $, x[14] = eo, x[15] = J, x[16] = z, x[17] = V, x[18] = _) : _ = x[18];
    let {
      apiKey: ec,
      setApiKey: eu,
      error: es,
      isSubmitting: ed,
      canSubmit: ep,
      handleSubmit: ey
    } = function({
      serviceName: e,
      apiKeySpec: t,
      dynamicSpec: n,
      onSuccess: o,
      onSubmitClick: l,
      sessionId: i
    }) {
      let {
        sendRequest: c,
        gatewayUrl: u
      } = (0, p.useHatchRpc)(), [s, d] = (0, r.useState)(""), [y, f] = (0, r.useState)(!1), [h, _] = (0, r.useState)(null), m = a.fbs._("Failed to connect. Please check your API key and try again.", null, {
        hk: "144j7z"
      }), g = s.trim().length > 0 && !y, C = (0, r.useCallback)(async () => {
        let r = s.trim();
        if (r) {
          l(), (0, U.noteConnectorCredentialSubmitted)(e), f(!0), _(null);
          try {
            await F({
              apiKeySpec: t,
              dynamicSpec: n,
              key: r,
              serviceName: e,
              gatewayUrl: u,
              sendRequest: c,
              sessionId: i
            }), (0, U.succeedConnectorAuth)(e), o()
          } catch (r) {
            let t = r instanceof Error ? r : Error(String(r)),
              n = (0, D.extractGatewayErrorCode)(r);
            (0, U.noteConnectorRetryableFailure)(e, {
              code: t.message.toLowerCase().includes("gateway url is not available") ? "gateway_unavailable" : "register_rejected",
              upstreamErrorCode: n
            }), H.error({
              error: t,
              errorCode: n,
              provider: e,
              tags: (0, O.hatchSentryTags)(O.HATCH_SENTRY_SURFACES.CONNECT_API_KEY)
            }, "Failed to submit API key"), _(m)
          } finally {
            f(!1)
          }
        }
      }, [s, t, m, n, u, e, c, o, l, i]);
      return {
        apiKey: s,
        setApiKey: d,
        error: h,
        isSubmitting: y,
        canSubmit: g,
        handleSubmit: C
      }
    }(_);
    x[19] === Symbol.for("react.memo_cache_sentinel") ? (m = () => {
      requestAnimationFrame(() => Q.current?.focus())
    }, g = [], x[19] = m, x[20] = g) : (m = x[19], g = x[20]), (0, r.useEffect)(m, g), x[21] !== ep || x[22] !== ey ? (C = e => {
      "Enter" === e.key && ep && (e.preventDefault(), ey())
    }, x[21] = ep, x[22] = ey, x[23] = C) : C = x[23];
    let ef = C;
    x[24] === Symbol.for("react.memo_cache_sentinel") ? (k = a.fbs._("API key", null, {
      hk: "2Jw4I1"
    }), x[24] = k) : k = x[24];
    let eh = k;
    x[25] !== X ? (b = (0, t.jsx)("label", {
      htmlFor: X,
      className: "sr-only",
      children: eh
    }), x[25] = X, x[26] = b) : b = x[26];
    let e_ = et ? "text" : "password";
    x[27] !== eu ? (w = e => eu(e.target.value), x[27] = eu, x[28] = w) : w = x[28];
    let em = null != es,
      eg = null != es ? ee : void 0;
    x[29] !== ec || x[30] !== ef || x[31] !== X || x[32] !== G || x[33] !== e_ || x[34] !== w || x[35] !== em || x[36] !== eg ? (v = (0, t.jsx)("input", {
      ref: Q,
      id: X,
      type: e_,
      "data-testid": G,
      placeholder: eh,
      className: "text-body border-fill-divider text-text-primary rounded-8 focus:border-hatch-accent w-full border bg-transparent px-3 py-2 pe-10 outline-none",
      value: ec,
      onChange: w,
      onKeyDown: ef,
      "aria-invalid": em,
      "aria-describedby": eg
    }), x[29] = ec, x[30] = ef, x[31] = X, x[32] = G, x[33] = e_, x[34] = w, x[35] = em, x[36] = eg, x[37] = v) : v = x[37];
    let eC = et ? s.default : u.default;
    x[38] !== et ? (A = et ? a.fbs._("Hide API key", null, {
      hk: "1kBF7I"
    }) : a.fbs._("Show API key", null, {
      hk: "w7qYv"
    }), x[38] = et, x[39] = A) : A = x[39], x[40] !== ei ? (S = () => {
      ei(), en(M)
    }, x[40] = ei, x[41] = S) : S = x[41], x[42] !== et || x[43] !== eC || x[44] !== A || x[45] !== S ? (E = (0, t.jsx)("span", {
      className: "absolute end-2 top-1/2 -translate-y-1/2",
      children: (0, t.jsx)(c.IconButton, {
        type: "button",
        variant: "borderless",
        size: "24",
        icon: eC,
        label: A,
        "aria-pressed": et,
        onClick: S,
        "data-testid": "hatch-api-key-visibility-toggle"
      })
    }), x[42] = et, x[43] = eC, x[44] = A, x[45] = S, x[46] = E) : E = x[46], x[47] !== v || x[48] !== E ? (T = (0, t.jsxs)("div", {
      className: "relative",
      children: [v, E]
    }), x[47] = v, x[48] = E, x[49] = T) : T = x[49], x[50] !== es || x[51] !== ee ? (R = null != es && (0, t.jsx)("span", {
      id: ee,
      role: "alert",
      className: "text-footnote text-text-destructive mt-2 block",
      children: es
    }), x[50] = es, x[51] = ee, x[52] = R) : R = x[52], x[53] !== q || x[54] !== ed ? (N = ed ? a.fbs._("Connecting…", null, {
      hk: "1L1BQn"
    }) : q ? a.fbs._("Add", null, {
      hk: "1FDiJs"
    }) : a.fbs._("Submit", null, {
      hk: "1EK2fm"
    }), x[53] = q, x[54] = ed, x[55] = N) : N = x[55], x[56] !== ey ? (P = () => void ey(), x[56] = ey, x[57] = P) : P = x[57];
    let ek = !ep;
    return x[58] !== ea || x[59] !== N || x[60] !== P || x[61] !== ek ? (I = (0, t.jsx)(i.Button, {
      ref: ea,
      label: N,
      variant: "primary",
      size: "36",
      fullWidth: !0,
      onClick: P,
      disabled: ek
    }), x[58] = ea, x[59] = N, x[60] = P, x[61] = ek, x[62] = I) : I = x[62], x[63] !== Z ? (K = null != Z && (0, t.jsx)(i.Button, {
      label: Z.label,
      variant: "flat",
      size: "36",
      fullWidth: !0,
      onClick: Z.onClick
    }), x[63] = Z, x[64] = K) : K = x[64], x[65] !== I || x[66] !== K ? (L = (0, t.jsxs)("div", {
      className: "mt-4 flex flex-col gap-2",
      children: [I, K]
    }), x[65] = I, x[66] = K, x[67] = L) : L = x[67], x[68] !== b || x[69] !== T || x[70] !== R || x[71] !== L ? (j = (0, t.jsxs)("div", {
      children: [b, T, R, L]
    }), x[68] = b, x[69] = T, x[70] = R, x[71] = L, x[72] = j) : j = x[72], j
  }], 46735)
}, 482040, e => {
  "use strict";
  var t = e.i(963910);

  function n(e) {
    if (!e) return null;
    let t = new URLSearchParams(e).get("provider");
    if (!t) return null;
    let n = t.trim().toLowerCase();
    return n.length > 0 ? n : null
  }
  let r = "integration_key";

  function a(e) {
    if ("object" != typeof e || null == e) return null;
    let t = e.origin_return_url;
    return "string" == typeof t ? t : null
  }

  function o(e) {
    if ("string" != typeof e) return null;
    let t = e.trim().toLowerCase();
    return t && /^[a-z0-9_-]{1,64}$/.test(t) ? t : null
  }
  let l = "__hatch_callback_url";
  e.s(["CALLBACK_URL_PARAM", 0, l, "INTEGRATION_KEY_PARAM", 0, r, "appendQuery", 0, function(e, t, n) {
    let r = new URL(e, "http://localhost");
    return r.searchParams.set(t, n), `${r.pathname}${r.search}${r.hash}`
  }, "appendQueryToFullUrl", 0, function(e, t, n) {
    let r = new URL(e);
    return r.searchParams.set(t, n), r.toString()
  }, "buildConnectorCallbackPayload", 0, function(e, a, o) {
    let i = Object.fromEntries(e.entries()),
      c = n(e.get("state"));
    return !i.provider && c && (i.provider = c), i.callback_url = a, delete i[l], delete i[t.HATCH_VM_QUERY_PARAM], delete i[t.HATCH_GATEWAY_URL_QUERY_PARAM], delete i[r], null != o && (i[r] = o), i
  }, "extractGatewayErrorCode", 0, function(e) {
    if ("object" == typeof e && null != e) {
      let t = o(e.code);
      if (t) return t
    }
    if (e instanceof Error) {
      let t = /^Gateway error ([^:]+):/.exec(e.message);
      if (t) return o(t[1])
    }
    return null
  }, "extractProviderFromState", 0, n, "normalizeGatewayErrorCode", 0, o, "readErrorOriginReturnUrl", 0, function(e) {
    return "object" != typeof e || null == e ? null : a(e.result) ?? a(e.cause)
  }, "readOnePasswordIntegrationKeyFromFragment", 0, function(e) {
    if (null == e || 0 === e.length) return null;
    let t = e.startsWith("#") ? e.slice(1) : e;
    return 0 === t.length ? null : new URLSearchParams(t).get(r)
  }, "readOriginReturnUrl", 0, a, "safeReturnTo", 0, function(e) {
    let t = (e ?? "").trim();
    return !t.startsWith("/") || t.startsWith("//") || t.startsWith("/\\") ? "/hatch" : t
  }])
}, 668409, e => {
  "use strict";
  let t = /^custom\.[A-Za-z0-9_.-]+$/;
  e.s(["decodeBase64UrlJson", 0, function(e) {
    let t = e.trim();
    if (t.startsWith("{")) return t;
    try {
      let e = t.replace(/-/g, "+").replace(/_/g, "/");
      for (; e.length % 4 != 0;) e += "=";
      let n = atob(e),
        r = Uint8Array.from(n, e => e.charCodeAt(0));
      return new TextDecoder().decode(r)
    } catch {
      return null
    }
  }, "isCustomCredentialName", 0, function(e) {
    return "string" == typeof e && t.test(e.trim())
  }, "isNonEmptyString", 0, function(e) {
    return "string" == typeof e && e.trim().length > 0
  }])
}, 576347, e => {
  "use strict";
  var t = e.i(668409);

  function n(e) {
    return null == e || (0, t.isNonEmptyString)(e)
  }
  let r = /^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/,
    a = new Set(["client_secret", "client_assertion", "assertion", "code", "redirect_uri", "state", "access_token", "refresh_token", "id_token", "token", "password"]);

  function o(e) {
    let t = e.toLowerCase();
    return "localhost" === t || t.endsWith(".localhost") || /^\d{1,3}(\.\d{1,3}){3}$/.test(t) || t.includes(":") || t.startsWith("[")
  }

  function l(e, n) {
    var r;
    let l, i, c;
    if (!(0, t.isNonEmptyString)(e)) return !1;
    try {
      l = new URL(e.trim())
    } catch {
      return !1
    }
    if ("https:" !== l.protocol || "" !== l.username || "" !== l.password || "" !== l.hash || o(l.hostname) || (r = l.hostname, i = r.toLowerCase(), !(i === (c = n.toLowerCase()) || i.endsWith("." + c)))) return !1;
    for (let e of l.searchParams.keys())
      if (a.has(e.toLowerCase())) return !1;
    return !0
  }
  e.s(["parseCustomOAuthConnectSpec", 0, function(e) {
    let a;
    if (null == e || 0 === e.trim().length) return null;
    let i = (0, t.decodeBase64UrlJson)(e);
    if (null == i) return null;
    try {
      a = JSON.parse(i)
    } catch {
      return null
    }
    if ("object" != typeof a || null == a || Array.isArray(a)) return null;
    let c = a;
    if (1 !== c.version) return null;
    let u = c.credential;
    if ("object" != typeof u || null == u || Array.isArray(u) || !(0, t.isCustomCredentialName)(u.name)) return null;
    let s = Array.isArray(u.domains) ? u.domains : [];
    return 0 !== s.length && s.every(t.isNonEmptyString) && function(e) {
      if ("object" != typeof e || null == e || Array.isArray(e) || ! function(e) {
          if ("string" != typeof e) return !1;
          let t = e.trim().toLowerCase();
          return t.length > 0 && !o(t) && r.test(t)
        }(e.issuer_domain)) return !1;
      let a = e.issuer_domain.trim();
      return l(e.authorization_url, a) && l(e.token_url, a) && function(e) {
        if (!(0, t.isNonEmptyString)(e)) return !1;
        try {
          return "https:" === new URL(e.trim()).protocol
        } catch {
          return !1
        }
      }(e.redirect_uri) && (null == e.revoke_url || l(e.revoke_url, a)) && (null == e.registration_url || l(e.registration_url, a)) && n(e.scope) && n(e.user_id) && (null == e.token_endpoint_auth_method || "none" === e.token_endpoint_auth_method || "client_secret_post" === e.token_endpoint_auth_method || "client_secret_basic" === e.token_endpoint_auth_method)
    }(u.oauth) ? a : null
  }])
}, 721037, e => {
  "use strict";
  async function t(e, t) {
    return await t("custom_connectors.register", e)
  }
  async function n(e, n) {
    return t(e, n)
  }
  async function r(e, n) {
    return t(e, n)
  }
  async function a(e, t, r, a, o) {
    let l = function(e, t, n, r = !0) {
      let a, o = e.credential.oauth,
        l = o.token_endpoint_auth_method ?? "none",
        i = null != o.registration_url,
        c = t?.trim() ?? "";
      if (!i && 0 === c.length) return null;
      let u = n?.trim() ?? "",
        s = "client_secret_post" === l || "client_secret_basic" === l;
      return !i && s && 0 === u.length ? null : {
        connector: {
          name: e.credential.name,
          mode: "direct_oauth",
          hosts: e.credential.domains,
          token_refresh: [{
            path: (a = new URL(o.token_url), `${a.pathname}${a.search}`)
          }]
        },
        oauth_bootstrap: {
          issuer_domain: o.issuer_domain,
          authorization_url: o.authorization_url,
          token_url: o.token_url,
          redirect_uri: o.redirect_uri,
          revoke_url: o.revoke_url,
          scope: o.scope,
          user_id: o.user_id,
          registration_url: i ? o.registration_url : void 0,
          client_id: i ? void 0 : c,
          client_secret: !i && s ? u : void 0,
          token_endpoint_auth_method: l
        },
        replace_existing: r
      }
    }(e, t, r);
    if (null == l) throw Error("custom OAuth connector spec is incomplete");
    return n(null != o ? {
      ...l,
      session_id: o
    } : l, a)
  }
  e.s(["buildCustomApiKeyConnectorRegisterRequest", 0, function(e, t, n, r, a = !0) {
    let o = r.trim();
    return 0 === o.length ? null : {
      connector: {
        name: e,
        mode: "api_key",
        hosts: t,
        token_proxy: n
      },
      api_key: {
        key: o
      },
      replace_existing: a
    }
  }, "registerCustomApiKeyConnector", 0, r, "registerCustomOAuthConnectorFromSpec", 0, a])
}]);

//# debugId=05919291-e5f1-7d7a-e372-e7568aa384e5
//# sourceMappingURL=1tpm1fu0cqow7.js.map