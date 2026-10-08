;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "527921b3-e8ea-2d13-cc61-890d5443bd7c")
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
    C = !1;

  function p() {
    if ("visible" === document.visibilityState)
      for (let e of [...s.values()]) e.providerTab?.closed === !0 && R(e.provider, e.instanceKey)
  }

  function y() {
    [...s.values()].some(e => null != e.providerTab) || C && (C = !1, window.removeEventListener("focus", p), document.removeEventListener("visibilitychange", p))
  }
  let h = !1,
    f = null,
    _ = new Set,
    m = new Map;

  function g() {
    if (!h && (h = !0, n.logInfra.registerPreFlushCallback(() => {
        for (let e of [...s.values()]) e.handedOff || v(e, "CANCEL", {
          cancelPoint: "document_unload"
        });
        for (let e of [...d.keys()]) N(e, "document_unload")
      }), "u" > typeof BroadcastChannel)) {
      try {
        f = new BroadcastChannel("hatch.connector_auth")
      } catch {
        return
      }
      f.onmessage = e => {
        var t, n;
        if ("object" == typeof(t = e.data) && null != t && t.type === u && "string" == typeof t.instanceKey && "string" == typeof t.provider && "boolean" == typeof t.claimed) {
          let t = m.get(e.data.instanceKey);
          null != t && (e.data.claimed && m.delete(e.data.instanceKey), t(e.data.claimed));
          return
        }
        if ("object" != typeof(n = e.data) || null == n || n.type !== c || "string" != typeof n.instanceKey || "string" != typeof n.provider || "string" != typeof n.entryPoint || void 0 !== n.operation && "connect" !== n.operation && "add_account" !== n.operation || "ok" !== n.verdict && "error" !== n.verdict) return;
        let r = s.get(e.data.provider),
          a = r?.instanceKey === e.data.instanceKey ? r : null;
        if (f?.postMessage({
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
        for (let e of _) try {
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
    s.delete(e.provider), w(e.instanceKey), null != e.providerTab && y();
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

  function L(e, t) {
    let n = d.get(e);
    null == n || n.firedPoints.has(t) || (n.firedPoints.add(t), n.trace.markerPoint(t))
  }

  function N(e, n) {
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
  }, "cancelConnectorAuthAfterProviderTabClosed", 0, R, "cancelConnectorDisconnect", 0, N, "failConnectorAuth", 0, function(e, t, n) {
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
    b(a), "new_tab" === t.handoff && null != t.callbackWindow && (b(a, t.callbackWindow), "add_account" === n.operation && (n.providerTab = t.callbackWindow, C || (C = !0, window.addEventListener("focus", p), document.addEventListener("visibilitychange", p)))), "same_tab" === t.handoff && (s.delete(e), null != n.providerTab && y())
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
    L(e, "confirmation_shown")
  }, "noteConnectorDisconnectConfirmed", 0, function(e) {
    L(e, "disconnect_confirmed")
  }, "noteConnectorDisconnectMutationResponse", 0, function(e) {
    L(e, "mutation_response")
  }, "noteConnectorDisconnectMutationSent", 0, function(e) {
    L(e, "mutation_sent")
  }, "noteConnectorRetryableFailure", 0, function(e, t) {
    let n = s.get(e);
    if (null == n) return;
    let r = t.upstreamErrorCode;
    n.retryableFailure = {
      code: t.code,
      upstreamErrorCode: null != r && r.length > 0 ? S(r) : null
    }
  }, "resolveConnectorAuthCallback", 0, function(e) {
    g();
    let {
      provider: n,
      verdict: a,
      errorType: i,
      upstreamErrorCode: u,
      callbackStage: d,
      callbackDelivery: C = "acknowledged",
      reconciliationResult: p = "not_attempted",
      callbackInput: y = "unknown",
      callbackErrorSource: h,
      gatewayRpcOutcome: _ = "unknown",
      gatewayResultStatus: b = "unknown",
      callbackDisposition: A = "unknown",
      gatewayErrorKind: S = "none",
      gatewayErrorCode: E = null,
      gatewayHttpStatusClass: T = "none",
      reconciliationErrorKind: R = "none",
      reconciliationErrorCode: L = null,
      reconciliationHttpStatusClass: N = "none"
    } = e, P = n, I = null, K = null, F = null, O = null != n ? s.get(n) : void 0;
    if (null != O) return w(), O.trace.markerPoint("auth_callback_received"), "ok" === a ? v(O, "SUCCESS", {
      callbackDelivery: C,
      reconciliationResult: p,
      callbackInput: y,
      gatewayRpcOutcome: _,
      gatewayResultStatus: b,
      callbackDisposition: A,
      gatewayErrorKind: S,
      gatewayErrorCode: E,
      gatewayHttpStatusClass: T,
      reconciliationErrorKind: R,
      reconciliationErrorCode: L,
      reconciliationHttpStatusClass: N
    }) : v(O, "FAIL", {
      errorType: i ?? "server_error",
      upstreamErrorCode: u,
      callbackStage: d,
      callbackDelivery: C,
      reconciliationResult: p,
      callbackInput: y,
      callbackErrorSource: h,
      gatewayRpcOutcome: _,
      gatewayResultStatus: b,
      callbackDisposition: A,
      gatewayErrorKind: S,
      gatewayErrorCode: E,
      gatewayHttpStatusClass: T,
      reconciliationErrorKind: R,
      reconciliationErrorCode: L,
      reconciliationHttpStatusClass: N
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
            callbackDelivery: C,
            reconciliationResult: p,
            callbackInput: y,
            gatewayRpcOutcome: _,
            gatewayResultStatus: b,
            callbackDisposition: A,
            gatewayErrorKind: S,
            gatewayErrorCode: E,
            gatewayHttpStatusClass: T,
            reconciliationErrorKind: R,
            reconciliationErrorCode: L,
            reconciliationHttpStatusClass: N
          }) : v(n, "FAIL", {
            errorType: i ?? "server_error",
            upstreamErrorCode: u,
            callbackStage: d,
            callbackDelivery: C,
            reconciliationResult: p,
            callbackInput: y,
            callbackErrorSource: h,
            gatewayRpcOutcome: _,
            gatewayResultStatus: b,
            callbackDisposition: A,
            gatewayErrorKind: S,
            gatewayErrorCode: E,
            gatewayHttpStatusClass: T,
            reconciliationErrorKind: R,
            reconciliationErrorCode: L,
            reconciliationHttpStatusClass: N
          }), {
            owner: "local",
            acknowledgement: Promise.resolve("acknowledged")
          }
        }
        P = n ?? U.provider, I = U.instanceKey, K = U.entryPoint, F = U.operation
      }
    }
    if (null == P || null == I || null == K || null == F) return l.retainForBugReport("warn", "connector callback carried no attempt identity; auth trace not resolved"), {
      owner: "unclaimed",
      acknowledgement: null
    };
    if (null == f) {
      let e = "Connector OAuth callback could not reach its originating tab";
      return l.retainForBugReport("warn", e), (0, o.captureHatchMessage)(o.HATCH_SENTRY_SURFACES.CONNECT_OAUTH, e, {
        level: "warning",
        tags: {
          callback_transport: "broadcast_unavailable",
          operation: F,
          callback_verdict: a,
          callback_error_source: h ?? "none",
          callback_input: y,
          gateway_rpc_outcome: _,
          gateway_result_status: b,
          callback_disposition: A,
          gateway_error_kind: S,
          gateway_http_status_class: T,
          reconciliation_error_kind: R,
          reconciliation_http_status_class: N
        },
        extra: {
          callbackAttemptId: I,
          connectorProvider: P,
          gatewayErrorCode: E,
          reconciliationErrorCode: L
        }
      }), {
        owner: "unclaimed",
        acknowledgement: null
      }
    }
    let j = new Promise(e => {
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
            m.get(I) === r && m.delete(I), e(n ? "disclaimed" : "timed_out")
          };
        m.set(I, r), t.addEventListener("abort", a, {
          once: !0
        })
      }),
      x = {
        type: c,
        instanceKey: I,
        provider: P,
        entryPoint: K,
        operation: F,
        verdict: a,
        errorType: i ?? null,
        upstreamErrorCode: u ?? null,
        callbackStage: d ?? null,
        callbackDelivery: C,
        reconciliationResult: p,
        callbackInput: y,
        callbackErrorSource: h ?? null,
        gatewayRpcOutcome: _,
        gatewayResultStatus: b,
        callbackDisposition: A,
        gatewayErrorKind: S,
        gatewayErrorCode: E,
        gatewayHttpStatusClass: T,
        reconciliationErrorKind: R,
        reconciliationErrorCode: L,
        reconciliationHttpStatusClass: N
      };
    try {
      f.postMessage(x)
    } catch {}
    return {
      owner: "opener",
      acknowledgement: j
    }
  }, "startConnectorAuthTrace", 0, function(e) {
    g();
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
    g();
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
    return g(), _.add(e), () => _.delete(e)
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
    C = e.i(175286),
    p = e.i(668409),
    y = e.i(183912),
    h = e.i(721037);
  let f = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,
    _ = /^[A-Za-z0-9_.\-~]+$/,
    m = /^[A-Za-z0-9_.-]+$/,
    g = /^\/[A-Za-z0-9_.\-~/{}]+$/,
    k = /^(?!-)[A-Za-z0-9-]{1,63}(?<!-)(?:\.(?!-)[A-Za-z0-9-]{1,63}(?<!-))*\.[A-Za-z]{2,63}$/,
    b = ["nip.io", "sslip.io", "xip.io"];

  function w(e) {
    if (!(0, p.isNonEmptyString)(e)) return !1;
    let t = e.trim().toLowerCase();
    return !!k.test(t) && !b.some(e => t === e || t.endsWith(`.${e}`))
  }

  function v(e) {
    var t;
    return !("object" != typeof e || null == e || Array.isArray(e)) && "string" == typeof(t = e.field) && m.test(t.trim()) && function(e) {
      if ("bearer_header" === e) return !0;
      if ("object" != typeof e || null == e || Array.isArray(e)) return !1;
      let t = e.custom_header;
      if ((0, p.isNonEmptyString)(t)) return f.test(t.trim());
      let n = e.url_path_segment;
      if ("string" == typeof n) return n.length <= 256 && g.test(n) && n.includes("{}") && !n.includes("..");
      let r = e.query_param;
      return !!(0, p.isNonEmptyString)(r) && _.test(r.trim())
    }(e.placement)
  }

  function A(e) {
    let t;
    if (null == e || 0 === e.trim().length) return null;
    let n = (0, p.decodeBase64UrlJson)(e);
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
    if ("object" != typeof a || null == a || Array.isArray(a) || !(0, p.isCustomCredentialName)(a.name) || a.name.length > 128 || "api_key" !== a.mode) return null;
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

  function L(e) {
    let t;
    if (null == e || 0 === e.trim().length) return null;
    let n = (0, p.decodeBase64UrlJson)(e);
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
    if ("object" != typeof a || null == a || Array.isArray(a) || !(0, p.isCustomCredentialName)(a.name)) return null;
    let o = Array.isArray(a.domains) ? a.domains : [];
    if (0 === o.length || !o.every(p.isNonEmptyString)) return null;
    let l = Array.isArray(a.credentials) ? a.credentials : [];
    return 1 === l.length && l.every(e => {
      var t, n;
      return !("object" != typeof(t = e) || null == t || Array.isArray(t)) && "string" == typeof(n = t.name) && R.test(n.trim()) && "api_key" === t.type && function(e) {
        if ("bearer_header" === e) return !0;
        if ("object" != typeof e || null == e || Array.isArray(e)) return !1;
        let t = e.custom_header;
        if ((0, p.isNonEmptyString)(t)) return !0;
        let n = e.url_path_segment;
        return "string" == typeof n && n.includes("{}")
      }(t.placement)
    }) ? t : null
  }

  function N(e) {
    return L(function(e) {
      try {
        let t = new URL(e);
        if ("api-key:" !== t.protocol && "oauth:" !== t.protocol && "/connect/api-key" !== t.pathname && "/connect/oauth" !== t.pathname) return null;
        return t.searchParams.get("spec")
      } catch {
        return null
      }
    }(e))
  }
  async function P(e, t, n) {
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

  function I(e) {
    return e.replace(/-/g, "_").toLowerCase()
  }

  function K(e, t) {
    return null != t && 0 !== t.trim().length && I((0, E.customDynamicCredentialDisplayName)(e.connector.name)) === I(t)
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
      await P(t, {
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
  }, "parseDynamicCredentialConnectSpec", 0, L, "parseDynamicCredentialConnectSpecFromHref", 0, N, "registerDynamicCredentialFromSpec", 0, P], 266471), e.s(["parseConnectSpecs", 0, function(e, t) {
    let n = A(e);
    return null == n || K(n, t) ? {
      apiKeySpec: n,
      dynamicSpec: null != n ? null : L(e)
    } : {
      apiKeySpec: null,
      dynamicSpec: null
    }
  }, "parseConnectSpecsFromHref", 0, function(e, t) {
    let n = A(function(e) {
      try {
        let t = new URL(e);
        if (!("api-key:" === t.protocol || "/connect/api-key" === t.pathname && (0, y.getHatchOriginsAllowlist)().has(t.origin))) return null;
        return t.searchParams.get("spec")
      } catch {
        return null
      }
    }(e));
    return null == n || K(n, t) ? {
      apiKeySpec: n,
      dynamicSpec: null != n ? null : N(e)
    } : {
      apiKeySpec: null,
      dynamicSpec: null
    }
  }, "submitApiKeyConnection", 0, F], 976834);
  var O = e.i(863641),
    U = e.i(964924),
    j = e.i(482040);
  let x = (0, d.createClientLogger)("api_key_connect");

  function M(e) {
    return !e
  }
  e.s(["ApiKeyConnectForm", 0, function(e) {
    let d, p, y, h, f, _, m, g, k, b, w, v, A, S, E, T, R, L, N, P, I, K, D, H = (0, n.c)(73),
      {
        serviceName: z,
        apiKeySpec: B,
        dynamicSpec: $,
        isCustomConnector: W,
        onSuccess: Z,
        actionTarget: J,
        secondaryAction: Y,
        inputTestId: G,
        sessionId: V
      } = e,
      q = void 0 !== W && W,
      Q = (0, r.useRef)(null),
      X = (0, r.useId)(),
      ee = (0, r.useId)(),
      [et, en] = (0, r.useState)(!1);
    H[0] !== z ? (d = {
      third_party_connector_type: z,
      third_party_connection_action: "submit_credentials"
    }, H[0] = z, H[1] = d) : d = H[1], H[2] !== J || H[3] !== z || H[4] !== d ? (p = {
      eventName: l.HatchClickEvent.API_KEY_SUBMIT_CLICK,
      actionTarget: J,
      actionType: "click",
      thirdPartyConnectorType: z,
      thirdPartyConnectionAction: "submit_credentials",
      metadata: d
    }, H[2] = J, H[3] = z, H[4] = d, H[5] = p) : p = H[5];
    let er = p,
      {
        ref: ea,
        onClick: eo
      } = (0, o.useTrackedClickRef)(er);
    H[6] !== z ? (y = {
      third_party_connector_type: z,
      third_party_connection_action: "toggle_password_visibility"
    }, H[6] = z, H[7] = y) : y = H[7], H[8] !== J || H[9] !== z || H[10] !== y ? (h = {
      eventName: l.HatchClickEvent.API_KEY_VISIBILITY_TOGGLE_CLICK,
      actionTarget: J,
      actionType: "click",
      thirdPartyConnectorType: z,
      thirdPartyConnectionAction: "toggle_password_visibility",
      metadata: y
    }, H[8] = J, H[9] = z, H[10] = y, H[11] = h) : h = H[11];
    let el = h,
      {
        onClick: ei
      } = (0, o.useTrackedClickRef)(el);
    H[12] !== B || H[13] !== $ || H[14] !== eo || H[15] !== Z || H[16] !== z || H[17] !== V ? (f = {
      serviceName: z,
      apiKeySpec: B,
      dynamicSpec: $,
      onSuccess: Z,
      onSubmitClick: eo,
      sessionId: V
    }, H[12] = B, H[13] = $, H[14] = eo, H[15] = Z, H[16] = z, H[17] = V, H[18] = f) : f = H[18];
    let {
      apiKey: ec,
      setApiKey: eu,
      error: es,
      isSubmitting: ed,
      canSubmit: eC,
      handleSubmit: ep
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
      } = (0, C.useHatchRpc)(), [s, d] = (0, r.useState)(""), [p, y] = (0, r.useState)(!1), [h, f] = (0, r.useState)(null), _ = a.fbs._("Failed to connect. Please check your API key and try again.", null, {
        hk: "144j7z"
      }), m = s.trim().length > 0 && !p, g = (0, r.useCallback)(async () => {
        let r = s.trim();
        if (r) {
          l(), (0, U.noteConnectorCredentialSubmitted)(e), y(!0), f(null);
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
              n = (0, j.extractGatewayErrorCode)(r);
            (0, U.noteConnectorRetryableFailure)(e, {
              code: t.message.toLowerCase().includes("gateway url is not available") ? "gateway_unavailable" : "register_rejected",
              upstreamErrorCode: n
            }), x.error({
              error: t,
              errorCode: n,
              provider: e,
              tags: (0, O.hatchSentryTags)(O.HATCH_SENTRY_SURFACES.CONNECT_API_KEY)
            }, "Failed to submit API key"), f(_)
          } finally {
            y(!1)
          }
        }
      }, [s, t, _, n, u, e, c, o, l, i]);
      return {
        apiKey: s,
        setApiKey: d,
        error: h,
        isSubmitting: p,
        canSubmit: m,
        handleSubmit: g
      }
    }(f);
    H[19] === Symbol.for("react.memo_cache_sentinel") ? (_ = () => {
      requestAnimationFrame(() => Q.current?.focus())
    }, m = [], H[19] = _, H[20] = m) : (_ = H[19], m = H[20]), (0, r.useEffect)(_, m), H[21] !== eC || H[22] !== ep ? (g = e => {
      "Enter" === e.key && eC && (e.preventDefault(), ep())
    }, H[21] = eC, H[22] = ep, H[23] = g) : g = H[23];
    let ey = g;
    H[24] === Symbol.for("react.memo_cache_sentinel") ? (k = a.fbs._("API key", null, {
      hk: "2Jw4I1"
    }), H[24] = k) : k = H[24];
    let eh = k;
    H[25] !== X ? (b = (0, t.jsx)("label", {
      htmlFor: X,
      className: "sr-only",
      children: eh
    }), H[25] = X, H[26] = b) : b = H[26];
    let ef = et ? "text" : "password";
    H[27] !== eu ? (w = e => eu(e.target.value), H[27] = eu, H[28] = w) : w = H[28];
    let e_ = null != es,
      em = null != es ? ee : void 0;
    H[29] !== ec || H[30] !== ey || H[31] !== X || H[32] !== G || H[33] !== ef || H[34] !== w || H[35] !== e_ || H[36] !== em ? (v = (0, t.jsx)("input", {
      ref: Q,
      id: X,
      type: ef,
      "data-testid": G,
      placeholder: eh,
      className: "text-body border-fill-divider text-text-primary rounded-8 focus:border-hatch-accent w-full border bg-transparent px-3 py-2 pe-10 outline-none",
      value: ec,
      onChange: w,
      onKeyDown: ey,
      "aria-invalid": e_,
      "aria-describedby": em
    }), H[29] = ec, H[30] = ey, H[31] = X, H[32] = G, H[33] = ef, H[34] = w, H[35] = e_, H[36] = em, H[37] = v) : v = H[37];
    let eg = et ? s.default : u.default;
    H[38] !== et ? (A = et ? a.fbs._("Hide API key", null, {
      hk: "1kBF7I"
    }) : a.fbs._("Show API key", null, {
      hk: "w7qYv"
    }), H[38] = et, H[39] = A) : A = H[39], H[40] !== ei ? (S = () => {
      ei(), en(M)
    }, H[40] = ei, H[41] = S) : S = H[41], H[42] !== et || H[43] !== eg || H[44] !== A || H[45] !== S ? (E = (0, t.jsx)("span", {
      className: "absolute end-2 top-1/2 -translate-y-1/2",
      children: (0, t.jsx)(c.IconButton, {
        type: "button",
        variant: "borderless",
        size: "24",
        icon: eg,
        label: A,
        "aria-pressed": et,
        onClick: S,
        "data-testid": "hatch-api-key-visibility-toggle"
      })
    }), H[42] = et, H[43] = eg, H[44] = A, H[45] = S, H[46] = E) : E = H[46], H[47] !== v || H[48] !== E ? (T = (0, t.jsxs)("div", {
      className: "relative",
      children: [v, E]
    }), H[47] = v, H[48] = E, H[49] = T) : T = H[49], H[50] !== es || H[51] !== ee ? (R = null != es && (0, t.jsx)("span", {
      id: ee,
      role: "alert",
      className: "text-footnote text-text-destructive mt-2 block",
      children: es
    }), H[50] = es, H[51] = ee, H[52] = R) : R = H[52], H[53] !== q || H[54] !== ed ? (L = ed ? a.fbs._("Connecting…", null, {
      hk: "1L1BQn"
    }) : q ? a.fbs._("Add", null, {
      hk: "1FDiJs"
    }) : a.fbs._("Submit", null, {
      hk: "1EK2fm"
    }), H[53] = q, H[54] = ed, H[55] = L) : L = H[55], H[56] !== ep ? (N = () => void ep(), H[56] = ep, H[57] = N) : N = H[57];
    let ek = !eC;
    return H[58] !== ea || H[59] !== L || H[60] !== N || H[61] !== ek ? (P = (0, t.jsx)(i.Button, {
      ref: ea,
      label: L,
      variant: "primary",
      size: "36",
      fullWidth: !0,
      onClick: N,
      disabled: ek
    }), H[58] = ea, H[59] = L, H[60] = N, H[61] = ek, H[62] = P) : P = H[62], H[63] !== Y ? (I = null != Y && (0, t.jsx)(i.Button, {
      label: Y.label,
      variant: "flat",
      size: "36",
      fullWidth: !0,
      onClick: Y.onClick
    }), H[63] = Y, H[64] = I) : I = H[64], H[65] !== P || H[66] !== I ? (K = (0, t.jsxs)("div", {
      className: "mt-4 flex flex-col gap-2",
      children: [P, I]
    }), H[65] = P, H[66] = I, H[67] = K) : K = H[67], H[68] !== b || H[69] !== T || H[70] !== R || H[71] !== K ? (D = (0, t.jsxs)("div", {
      children: [b, T, R, K]
    }), H[68] = b, H[69] = T, H[70] = R, H[71] = K, H[72] = D) : D = H[72], D
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
}, 976745, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, a, o, l, i, c, u, s, d = (0, n.c)(13);
    return d[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), d[0] = e.title, d[1] = r) : r = d[1], d[2] !== e.children ? (a = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), d[2] = e.children, d[3] = a) : a = d[3], d[4] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)("path", {
      d: "M2.38 2.38C2.72 2.04 3.28 2.04 3.62 2.38L21.62 20.38C21.96 20.72 21.96 21.28 21.62 21.62C21.28 21.96 20.72 21.96 20.38 21.62L2.38 3.62C2.04 3.28 2.04 2.72 2.38 2.38Z"
    }), l = (0, t.jsx)("path", {
      d: "M4.57 8.28C4.43 8.42 4.29 8.57 4.16 8.71C3.35 9.59 2.76 10.48 2.38 11.15C2.36 11.17 2.35 11.2 2.33 11.23C2.28 11.32 2.23 11.41 2.19 11.49C2.04 11.78 2.04 12.1 2.19 12.39C2.22 12.45 2.25 12.51 2.29 12.57C2.32 12.63 2.35 12.69 2.39 12.76C2.77 13.43 3.35 14.32 4.15 15.21C4.16 15.22 4.17 15.23 4.18 15.24C4.67 15.78 5.23 16.31 5.88 16.79C5.96 16.85 6.04 16.91 6.12 16.96C6.43 17.19 6.77 17.4 7.13 17.59C7.71 17.91 8.34 18.19 9.04 18.4C9.04 18.4 9.05 18.4 9.06 18.41C9.35 18.49 9.65 18.57 9.96 18.63C10.12 18.66 10.29 18.69 10.46 18.71C10.77 18.76 11.09 18.79 11.42 18.81C11.61 18.82 11.8 18.82 12 18.82C12.19 18.82 12.39 18.82 12.58 18.81C12.91 18.79 13.23 18.76 13.54 18.71C13.71 18.69 13.88 18.66 14.04 18.63C14.28 18.58 14.52 18.52 14.75 18.46L16.14 19.85C16.03 19.89 15.92 19.93 15.81 19.97C15.73 19.99 15.65 20.02 15.58 20.04C15.51 20.06 15.44 20.08 15.38 20.1C15.25 20.14 15.11 20.18 14.97 20.21C14.93 20.22 14.88 20.23 14.83 20.25C14.72 20.27 14.6 20.3 14.48 20.32C14.43 20.33 14.39 20.34 14.34 20.35C14.19 20.38 14.04 20.41 13.89 20.43C13.83 20.44 13.77 20.45 13.71 20.46C13.57 20.48 13.43 20.49 13.3 20.51C13.27 20.51 13.24 20.51 13.21 20.52C13.04 20.53 12.87 20.54 12.7 20.55C12.62 20.56 12.55 20.56 12.47 20.56C12.43 20.57 12.39 20.57 12.35 20.57C12.24 20.57 12.12 20.57 12 20.57C11.88 20.57 11.76 20.57 11.65 20.57C11.61 20.57 11.57 20.57 11.53 20.56C11.45 20.56 11.37 20.56 11.3 20.55C11.13 20.54 10.96 20.53 10.79 20.52C10.76 20.51 10.73 20.51 10.71 20.51C10.57 20.49 10.43 20.48 10.29 20.46C10.23 20.45 10.17 20.44 10.11 20.43C9.96 20.41 9.81 20.38 9.66 20.35C9.61 20.34 9.57 20.33 9.52 20.32C9.4 20.3 9.29 20.28 9.18 20.25C9.12 20.23 9.06 20.22 9 20.21C8.87 20.17 8.75 20.14 8.62 20.1C8.55 20.08 8.49 20.06 8.42 20.04C8.35 20.02 8.27 19.99 8.19 19.97C8.05 19.92 7.91 19.87 7.77 19.82C7.75 19.81 7.72 19.8 7.7 19.79C7.41 19.68 7.14 19.56 6.88 19.44C6.84 19.42 6.8 19.4 6.77 19.38C6.51 19.25 6.25 19.12 6.01 18.98C5.97 18.95 5.92 18.92 5.88 18.9C5.78 18.84 5.68 18.78 5.58 18.71C5.53 18.68 5.48 18.65 5.43 18.61C5.1 18.39 4.78 18.16 4.49 17.93C4.48 17.92 4.47 17.92 4.47 17.91C4.34 17.81 4.21 17.7 4.09 17.59C4.05 17.56 4.02 17.53 3.99 17.51C3.88 17.41 3.77 17.31 3.67 17.22C3.65 17.19 3.62 17.17 3.6 17.15C3.36 16.92 3.14 16.69 2.93 16.46C2.91 16.44 2.89 16.42 2.87 16.4C2.84 16.36 2.8 16.32 2.77 16.28C2.71 16.22 2.65 16.15 2.6 16.09C2.56 16.04 2.52 15.99 2.48 15.95C2.42 15.88 2.37 15.82 2.32 15.75C2.12 15.51 1.94 15.27 1.78 15.04C1.76 15.01 1.74 14.98 1.72 14.96C1.67 14.89 1.63 14.83 1.59 14.77C1.56 14.73 1.53 14.69 1.5 14.65C1.24 14.26 1.02 13.89 0.84 13.57C0.81 13.52 0.78 13.47 0.75 13.42C0.72 13.35 0.68 13.29 0.65 13.23C0.64 13.21 0.63 13.19 0.62 13.18C0.51 12.96 0.42 12.78 0.35 12.63C0.3 12.52 0.26 12.43 0.23 12.36C0.22 12.33 0.21 12.3 0.2 12.28C0.2 12.28 0.19 12.27 0.19 12.26C0.19 12.26 0.19 12.26 0.19 12.26L0.19 12.25L0.19 12.25C0.1 12.04 0.1 11.81 0.19 11.61L0.34 11.67C0.21 11.61 0.19 11.61 0.19 11.6L0.19 11.6C0.19 11.6 0.19 11.6 0.19 11.59C0.19 11.59 0.2 11.58 0.2 11.57C0.21 11.55 0.22 11.53 0.23 11.5C0.26 11.43 0.3 11.34 0.36 11.23C0.42 11.09 0.51 10.92 0.62 10.71C0.63 10.68 0.65 10.65 0.66 10.62C0.7 10.55 0.75 10.47 0.8 10.38C0.81 10.36 0.83 10.33 0.84 10.3C0.85 10.29 0.86 10.27 0.87 10.25C0.89 10.21 0.92 10.17 0.94 10.13C1.1 9.86 1.29 9.57 1.5 9.26C1.7 8.97 1.92 8.66 2.17 8.35C2.24 8.27 2.31 8.18 2.38 8.09C2.41 8.06 2.43 8.03 2.46 7.99C2.51 7.94 2.56 7.88 2.61 7.82C2.67 7.75 2.73 7.69 2.79 7.62C2.82 7.59 2.85 7.55 2.88 7.52C2.89 7.5 2.91 7.49 2.93 7.47C2.99 7.4 3.05 7.34 3.11 7.28C3.18 7.2 3.25 7.13 3.33 7.06C3.33 7.05 3.33 7.05 3.34 7.05L4.57 8.28Z"
    }), i = (0, t.jsx)("path", {
      d: "M13.15 16.86C12.78 16.95 12.4 17 12 17C9.24 17 7 14.76 7 12C7 11.6 7.05 11.22 7.13 10.85L13.15 16.86Z"
    }), c = (0, t.jsx)("path", {
      d: "M12.56 3.44C12.6 3.44 12.64 3.44 12.68 3.44C12.85 3.45 13.02 3.46 13.19 3.48C13.24 3.48 13.28 3.49 13.32 3.49C13.45 3.51 13.58 3.52 13.71 3.54C13.76 3.55 13.82 3.55 13.88 3.56C14.02 3.58 14.17 3.61 14.31 3.64C14.38 3.65 14.45 3.66 14.52 3.68C14.6 3.69 14.68 3.71 14.76 3.73C14.89 3.76 15.01 3.79 15.13 3.82C15.2 3.84 15.27 3.86 15.34 3.88C15.42 3.9 15.51 3.93 15.6 3.95C15.67 3.98 15.74 4 15.81 4.02C15.91 4.06 16.02 4.09 16.12 4.13C16.19 4.15 16.26 4.18 16.33 4.21C16.41 4.24 16.49 4.27 16.56 4.3C16.6 4.31 16.63 4.33 16.66 4.34C16.83 4.41 16.99 4.48 17.15 4.56C17.17 4.57 17.19 4.57 17.21 4.58C17.48 4.71 17.74 4.85 18 5C18.02 5.01 18.03 5.02 18.05 5.03C18.57 5.33 19.04 5.66 19.48 6.01C19.51 6.02 19.53 6.04 19.55 6.05C19.67 6.16 19.8 6.26 19.92 6.36C19.94 6.38 19.97 6.4 19.99 6.42C20.1 6.52 20.2 6.61 20.3 6.7C20.34 6.73 20.37 6.77 20.4 6.8C20.49 6.88 20.58 6.97 20.67 7.06C20.75 7.13 20.82 7.2 20.89 7.28C20.95 7.34 21.01 7.4 21.07 7.47C21.09 7.49 21.11 7.5 21.12 7.52C21.16 7.56 21.19 7.6 21.22 7.63C21.27 7.69 21.32 7.75 21.37 7.8C21.43 7.86 21.48 7.93 21.54 7.99C21.58 8.04 21.62 8.09 21.65 8.13C21.84 8.36 22.02 8.59 22.18 8.81C22.21 8.85 22.25 8.9 22.28 8.94C22.32 8.99 22.35 9.04 22.38 9.09C22.42 9.14 22.46 9.2 22.49 9.25C22.59 9.39 22.68 9.52 22.76 9.65C22.8 9.71 22.84 9.78 22.88 9.83C22.94 9.93 22.99 10.03 23.05 10.12C23.08 10.17 23.1 10.21 23.13 10.25C23.14 10.27 23.15 10.29 23.16 10.3C23.17 10.33 23.19 10.36 23.21 10.39C23.25 10.47 23.3 10.55 23.34 10.62C23.35 10.65 23.36 10.67 23.37 10.7C23.48 10.91 23.58 11.08 23.64 11.23C23.7 11.34 23.74 11.43 23.77 11.5C23.78 11.53 23.79 11.55 23.8 11.57C23.8 11.58 23.81 11.59 23.81 11.59C23.81 11.6 23.81 11.6 23.81 11.6L23.81 11.6C23.81 11.61 23.78 11.61 23.66 11.67L23.81 11.61C23.9 11.81 23.9 12.04 23.81 12.25L23.81 12.26C23.81 12.26 23.81 12.26 23.81 12.26C23.81 12.27 23.8 12.28 23.8 12.28C23.79 12.3 23.78 12.33 23.77 12.36C23.74 12.43 23.7 12.52 23.65 12.63C23.58 12.78 23.49 12.96 23.38 13.17C23.37 13.19 23.36 13.21 23.35 13.23C23.31 13.3 23.27 13.38 23.23 13.45C23.2 13.49 23.18 13.53 23.16 13.57C23.15 13.59 23.14 13.61 23.13 13.63C23.11 13.65 23.1 13.68 23.08 13.71C22.91 14 22.71 14.33 22.48 14.67C22.46 14.69 22.45 14.72 22.43 14.74C22.38 14.81 22.33 14.89 22.28 14.96C22.26 14.98 22.24 15.01 22.22 15.04C22.05 15.28 21.87 15.52 21.67 15.77C21.62 15.82 21.57 15.88 21.53 15.94C21.49 15.99 21.44 16.04 21.4 16.09C21.34 16.16 21.28 16.23 21.21 16.3C21.19 16.33 21.16 16.37 21.13 16.4C21.12 16.41 21.1 16.43 21.09 16.44C20.94 16.6 20.79 16.76 20.63 16.92L19.4 15.68C19.55 15.53 19.69 15.38 19.83 15.23C20.64 14.34 21.22 13.44 21.61 12.76C21.64 12.69 21.68 12.63 21.71 12.57C21.75 12.51 21.78 12.45 21.81 12.39C21.95 12.1 21.96 11.78 21.82 11.5C21.77 11.41 21.72 11.32 21.67 11.23C21.65 11.2 21.64 11.17 21.62 11.15C21.24 10.48 20.65 9.59 19.84 8.71C19.34 8.17 18.75 7.63 18.09 7.14C18.02 7.09 17.94 7.04 17.87 6.99C17.55 6.77 17.22 6.57 16.86 6.37C16.28 6.06 15.65 5.79 14.96 5.59C14.95 5.59 14.94 5.59 14.94 5.58C14.36 5.42 13.75 5.29 13.09 5.23C12.74 5.19 12.38 5.17 12 5.17C11.62 5.17 11.25 5.19 10.9 5.23C10.58 5.26 10.27 5.31 9.97 5.36C9.97 5.36 9.97 5.36 9.96 5.37C9.72 5.41 9.48 5.47 9.25 5.53L7.85 4.14C7.85 4.14 7.86 4.14 7.86 4.14C7.98 4.09 8.09 4.05 8.22 4.01C8.28 3.99 8.34 3.97 8.4 3.95C8.49 3.93 8.57 3.9 8.66 3.88C8.73 3.86 8.8 3.84 8.86 3.82C8.99 3.79 9.11 3.76 9.23 3.73C9.32 3.71 9.4 3.69 9.49 3.68C9.55 3.66 9.62 3.65 9.68 3.64C9.83 3.61 9.97 3.58 10.12 3.56C10.18 3.55 10.24 3.55 10.29 3.54C10.42 3.52 10.55 3.51 10.67 3.49C10.72 3.49 10.76 3.48 10.81 3.48C10.94 3.47 11.08 3.46 11.21 3.45L11.38 3.44C11.4 3.44 11.42 3.44 11.44 3.44C11.62 3.43 11.81 3.42 12 3.42C12.19 3.42 12.38 3.43 12.56 3.44Z"
    }), u = (0, t.jsx)("path", {
      d: "M12 7C14.76 7 17 9.24 17 12C17 12.4 16.95 12.78 16.86 13.15L10.85 7.13C11.22 7.05 11.6 7 12 7Z"
    }), d[4] = o, d[5] = l, d[6] = i, d[7] = c, d[8] = u) : (o = d[4], l = d[5], i = d[6], c = d[7], u = d[8]), d[9] !== e || d[10] !== r || d[11] !== a ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, a, o, l, i, c, u]
    }), d[9] = e, d[10] = r, d[11] = a, d[12] = s) : s = d[12], s
  }
  r._isSVG = !0, e.s(["default", 0, r])
}]);

//# debugId=527921b3-e8ea-2d13-cc61-890d5443bd7c
//# sourceMappingURL=0_qtpqgetervn.js.map