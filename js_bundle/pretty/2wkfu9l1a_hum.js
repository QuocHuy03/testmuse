;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "b10a0e1b-2ba1-bd39-dc89-373d9cbb2232")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 941960, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    n = e.i(519172),
    r = e.i(72596),
    i = e.i(11047);
  let s = n.forwardRef(function(e, n) {
    let s, o, l, u, c, _, m, d, p, h, v = (0, a.c)(26);
    v[0] !== e ? ({
      href: o,
      skipLinkshim: c,
      children: s,
      style: u,
      ...l
    } = e, v[0] = e, v[1] = s, v[2] = o, v[3] = l, v[4] = u, v[5] = c) : (s = v[1], o = v[2], l = v[3], u = v[4], c = v[5]);
    let g = void 0 !== c && c,
      {
        isLoading: S,
        linkShimInfo: E
      } = (0, i.useLinkShimInfo)();
    v[6] !== o ? (_ = null != o && /^https?:\/\//i.test(o), v[6] = o, v[7] = _) : _ = v[7];
    let A = _;
    v[8] !== o || v[9] !== A || v[10] !== g ? (m = A && !g && !(0, r.isAllowedDomain)(o), v[8] = o, v[9] = A, v[10] = g, v[11] = m) : m = v[11];
    let f = m,
      T = f && S && !E;
    v[12] !== o || v[13] !== E || v[14] !== f ? (d = f && E ? (0, r.wrapWithLinkshim)(o, E) : o, v[12] = o, v[13] = E, v[14] = f, v[15] = d) : d = v[15];
    let y = d;
    v[16] !== A ? (p = A ? {
      target: "_blank",
      rel: "noopener noreferrer"
    } : {}, v[16] = A, v[17] = p) : p = v[17];
    let I = p,
      C = T || void 0;
    return v[18] !== s || v[19] !== I || v[20] !== y || v[21] !== l || v[22] !== n || v[23] !== u || v[24] !== C ? (h = (0, t.jsx)("a", {
      ref: n,
      href: y,
      "aria-disabled": C,
      ...I,
      ...l,
      style: u,
      children: s
    }), v[18] = s, v[19] = I, v[20] = y, v[21] = l, v[22] = n, v[23] = u, v[24] = C, v[25] = h) : h = v[25], h
  });
  s.displayName = "EctoAnchor", e.s(["EctoAnchor", 0, s])
}, 137870, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    n = e.i(325814),
    r = e.i(420297),
    i = e.i(374785),
    s = e.i(345717);
  e.s(["HatchConfirmationDialog", 0, function(e) {
    let o, l, u, c, _, m, d, p, h, v, g, S, E, A, f, T, y, I = (0, a.c)(64),
      {
        isOpen: C,
        title: N,
        description: P,
        onCancel: w,
        onConfirm: R,
        onPrimaryButtonClick: k,
        onSecondaryButtonClick: O,
        onCloseButtonClick: L,
        buttonLayout: b,
        contentRef: G,
        primaryButtonProps: D,
        secondaryButtonProps: x,
        hideSecondaryButton: H,
        showCloseButton: B,
        onCloseAutoFocus: U
      } = e,
      V = void 0 !== H && H,
      M = void 0 !== B && B;
    I[0] !== D?.label ? (o = D?.label ?? s.fbs._("Confirm", null, {
      hk: "1dckkZ"
    }), I[0] = D?.label, I[1] = o) : o = I[1];
    let j = o;
    I[2] !== x?.label ? (l = x?.label ?? s.fbs._("Cancel", null, {
      hk: "19fYBf"
    }), I[2] = x?.label, I[3] = l) : l = I[3];
    let K = l,
      W = D?.variant ?? "destructive",
      F = x?.variant ?? "flat",
      Y = D?.size ?? "36",
      q = x?.size ?? "36",
      z = D?.radius ?? "large",
      Q = x?.radius ?? "large",
      $ = V || "vertical" === (void 0 === b ? "horizontal" : b),
      J = !$ && "flex-1",
      Z = D?.className;
    I[4] !== J || I[5] !== Z ? (u = (0, i.cn)(J, Z), I[4] = J, I[5] = Z, I[6] = u) : u = I[6];
    let X = u,
      ee = !$ && "flex-1",
      et = x?.className;
    I[7] !== et || I[8] !== ee ? (c = (0, i.cn)(ee, et), I[7] = et, I[8] = ee, I[9] = c) : c = I[9];
    let ea = c;
    I[10] !== R || I[11] !== k ? (_ = () => {
      k?.(), R()
    }, I[10] = R, I[11] = k, I[12] = _) : _ = I[12];
    let en = $ || D?.fullWidth;
    I[13] !== X || I[14] !== D || I[15] !== j || I[16] !== z || I[17] !== Y || I[18] !== W || I[19] !== _ || I[20] !== en ? (m = (0, t.jsx)(r.Button, {
      ...D,
      label: j,
      variant: W,
      size: Y,
      radius: z,
      onClick: _,
      className: X,
      fullWidth: en
    }), I[13] = X, I[14] = D, I[15] = j, I[16] = z, I[17] = Y, I[18] = W, I[19] = _, I[20] = en, I[21] = m) : m = I[21];
    let er = m;
    I[22] !== w || I[23] !== O ? (d = () => {
      O?.(), w()
    }, I[22] = w, I[23] = O, I[24] = d) : d = I[24];
    let ei = $ || x?.fullWidth;
    I[25] !== ea || I[26] !== x || I[27] !== K || I[28] !== Q || I[29] !== q || I[30] !== F || I[31] !== d || I[32] !== ei ? (p = (0, t.jsx)(r.Button, {
      ...x,
      label: K,
      variant: F,
      size: q,
      radius: Q,
      onClick: d,
      className: ea,
      fullWidth: ei
    }), I[25] = ea, I[26] = x, I[27] = K, I[28] = Q, I[29] = q, I[30] = F, I[31] = d, I[32] = ei, I[33] = p) : p = I[33];
    let es = p;
    I[34] !== w ? (h = e => {
      e || w()
    }, I[34] = w, I[35] = h) : h = I[35], I[36] !== N ? (v = (0, t.jsx)(n.DialogHeader, {
      children: (0, t.jsx)(n.DialogTitle, {
        className: "break-words",
        children: N
      })
    }), I[36] = N, I[37] = v) : v = I[37], I[38] !== P ? (g = (0, t.jsx)(n.DialogDescription, {
      className: "text-subheadline",
      children: P
    }), I[38] = P, I[39] = g) : g = I[39];
    let eo = $ ? "flex-col" : "flex-row";
    return I[40] !== eo ? (S = (0, i.cn)("mt-6 flex w-full gap-3", eo), I[40] = eo, I[41] = S) : S = I[41], I[42] !== V || I[43] !== $ || I[44] !== er || I[45] !== es ? (E = V ? er : $ ? (0, t.jsxs)(t.Fragment, {
      children: [er, es]
    }) : (0, t.jsxs)(t.Fragment, {
      children: [es, er]
    }), I[42] = V, I[43] = $, I[44] = er, I[45] = es, I[46] = E) : E = I[46], I[47] !== S || I[48] !== E ? (A = (0, t.jsx)("div", {
      "data-testid": "hatch-confirmation-dialog-actions",
      className: S,
      children: E
    }), I[47] = S, I[48] = E, I[49] = A) : A = I[49], I[50] !== G || I[51] !== g || I[52] !== A ? (f = (0, t.jsxs)("div", {
      ref: G,
      children: [g, A]
    }), I[50] = G, I[51] = g, I[52] = A, I[53] = f) : f = I[53], I[54] !== U || I[55] !== L || I[56] !== M || I[57] !== v || I[58] !== f ? (T = (0, t.jsx)(n.DialogContent, {
      className: "max-w-[26rem]",
      showCloseButton: M,
      onCloseButtonClick: L,
      onCloseAutoFocus: U,
      header: v,
      children: f
    }), I[54] = U, I[55] = L, I[56] = M, I[57] = v, I[58] = f, I[59] = T) : T = I[59], I[60] !== C || I[61] !== h || I[62] !== T ? (y = (0, t.jsx)(n.Dialog, {
      open: C,
      onOpenChange: h,
      children: T
    }), I[60] = C, I[61] = h, I[62] = T, I[63] = y) : y = I[63], y
  }, "HatchConfirmationDialogErrorFallback", 0, function(e) {
    let i, o, l, u, c, _, m = (0, a.c)(11),
      {
        isOpen: d,
        onClose: p
      } = e;
    return m[0] !== p ? (i = e => {
      e || p()
    }, m[0] = p, m[1] = i) : i = m[1], m[2] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)(n.DialogHeader, {
      children: (0, t.jsx)(n.DialogTitle, {
        className: "break-words",
        children: s.fbs._("Something went wrong", null, {
          hk: "139ucB"
        })
      })
    }), m[2] = o) : o = m[2], m[3] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)(n.DialogDescription, {
      className: "text-subheadline",
      children: s.fbs._("We couldn't display this. You can close it and try again.", null, {
        hk: "3BfInN"
      })
    }), m[3] = l) : l = m[3], m[4] === Symbol.for("react.memo_cache_sentinel") ? (u = s.fbs._("OK", null, {
      hk: "3165R3"
    }), m[4] = u) : u = m[4], m[5] !== p ? (c = (0, t.jsxs)(n.DialogContent, {
      className: "max-w-[26rem]",
      showCloseButton: !1,
      header: o,
      children: [l, (0, t.jsx)("div", {
        className: "mt-6 flex w-full",
        children: (0, t.jsx)(r.Button, {
          label: u,
          variant: "primary",
          size: "36",
          radius: "large",
          fullWidth: !0,
          onClick: p
        })
      })]
    }), m[5] = p, m[6] = c) : c = m[6], m[7] !== d || m[8] !== i || m[9] !== c ? (_ = (0, t.jsx)(n.Dialog, {
      open: d,
      onOpenChange: i,
      children: c
    }), m[7] = d, m[8] = i, m[9] = c, m[10] = _) : _ = m[10], _
  }])
}, 796413, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    n = e.i(519172),
    r = e.i(137870),
    i = e.i(813280);
  let s = (0, n.createContext)(null);
  e.s(["HatchConfirmationDialogProvider", 0, function(e) {
    let o, l, u, c, _, m, d = (0, a.c)(28),
      {
        children: p
      } = e,
      [h, v] = (0, n.useState)(null),
      [g, S] = (0, n.useState)(!1);
    d[0] === Symbol.for("react.memo_cache_sentinel") ? (o = e => {
      v(e), S(!0)
    }, d[0] = o) : o = d[0];
    let E = o;
    d[1] !== g || d[2] !== h ? (l = () => {
      g && null != h && (S(!1), h.onCancel?.())
    }, d[1] = g, d[2] = h, d[3] = l) : l = d[3];
    let A = l;
    d[4] !== g || d[5] !== h ? (u = () => {
      g && null != h && (S(!1), h.onConfirm())
    }, d[4] = g, d[5] = h, d[6] = u) : u = d[6];
    let f = u,
      T = h?.title ?? null,
      y = h?.description ?? null,
      I = h?.onPrimaryButtonClick,
      C = h?.onSecondaryButtonClick,
      N = h?.buttonLayout,
      P = h?.contentRef,
      w = h?.primaryButtonProps,
      R = h?.secondaryButtonProps,
      k = h?.hideSecondaryButton;
    d[7] !== A || d[8] !== f || d[9] !== g || d[10] !== w || d[11] !== R || d[12] !== k || d[13] !== T || d[14] !== y || d[15] !== I || d[16] !== C || d[17] !== N || d[18] !== P ? (c = (0, t.jsx)(r.HatchConfirmationDialog, {
      isOpen: g,
      title: T,
      description: y,
      onCancel: A,
      onConfirm: f,
      onPrimaryButtonClick: I,
      onSecondaryButtonClick: C,
      buttonLayout: N,
      contentRef: P,
      primaryButtonProps: w,
      secondaryButtonProps: R,
      hideSecondaryButton: k
    }), d[7] = A, d[8] = f, d[9] = g, d[10] = w, d[11] = R, d[12] = k, d[13] = T, d[14] = y, d[15] = I, d[16] = C, d[17] = N, d[18] = P, d[19] = c) : c = d[19];
    let O = c;
    return d[20] !== A || d[21] !== O || d[22] !== g || d[23] !== h ? (_ = h?.surface != null ? (0, t.jsx)(i.EctoErrorBoundary, {
      surface: h.surface,
      resetKeys: [h],
      fallback: () => (0, t.jsx)(r.HatchConfirmationDialogErrorFallback, {
        isOpen: g,
        onClose: A
      }),
      children: O
    }) : O, d[20] = A, d[21] = O, d[22] = g, d[23] = h, d[24] = _) : _ = d[24], d[25] !== p || d[26] !== _ ? (m = (0, t.jsxs)(s.Provider, {
      value: E,
      children: [p, _]
    }), d[25] = p, d[26] = _, d[27] = m) : m = d[27], m
  }, "useConfirmationDialog", 0, function() {
    let e = (0, n.useContext)(s);
    if (null == e) throw Error("useConfirmationDialog must be used within HatchConfirmationDialogProvider");
    return e
  }])
}, 52038, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    n = e.i(519172),
    r = e.i(652649),
    i = e.i(359783),
    s = e.i(816042),
    o = e.i(871157),
    l = e.i(920383),
    u = e.i(610969),
    c = e.i(815502);
  let _ = (0, i.createClientLogger)("HatchServerDataContext");

  function m(e) {
    if ("DISABLED" === e.vmState) return;
    let t = (0, u.resolveVmWakeId)(e);
    null == t ? _.retainForBugReport("warn", "Skipping activated VM wake because the target has no VM id") : (0, u.requestVmWake)(t, 0).catch(e => {
      _.retainForBugReport("warn", "Activated VM wake request failed")
    })
  }
  let d = (0, n.createContext)({
      viewerLocale: null,
      gatewayUrl: null,
      vmName: null,
      authToken: null,
      noiseNotaryToken: null,
      backendAuthStatus: "indeterminate",
      gatewayBootstrapSource: "authoritative",
      vmAssignment: "unavailable",
      vmResolutionIssue: {
        kind: "retryable"
      },
      hasOverride: !1,
      vmId: null,
      vmType: null,
      vmState: null,
      replaceAttemptId: null,
      vmStateSource: null,
      vmStateRevision: 0,
      isLoading: !0,
      chatThemes: null
    }),
    p = (0, n.createContext)({
      setServerData: () => {}
    }),
    h = (0, n.createContext)({
      activateGateway: () => {}
    });

  function v(e) {
    let t, r, i = (0, a.c)(4),
      {
        dataPromise: s
      } = e,
      o = (0, n.use)(s),
      {
        setServerData: l
      } = (0, n.useContext)(p);
    return i[0] !== o || i[1] !== l ? (t = () => {
      l(o)
    }, r = [o, l], i[0] = o, i[1] = l, i[2] = t, i[3] = r) : (t = i[2], r = i[3]), (0, n.useEffect)(t, r), null
  }

  function g({
    currentGatewayUrl: e,
    currentVmId: t,
    currentVmName: a,
    currentVmType: i,
    onLifecycleChange: l
  }) {
    let {
      isVisible: u
    } = (0, r.usePageVisibility)(), c = (0, n.useRef)(u), _ = (0, n.useRef)(!1);
    return (0, n.useEffect)(() => {
      let n = c.current;
      if (c.current = u, !u) {
        _.current = !0;
        return
      }
      let r = !n && _.current;
      if (_.current = !1, !r || null == e) return;
      let m = (0, o.gatewayTargetKey)(e, a),
        d = !1;
      return (async () => {
        try {
          let n = await fetch("/api/session", {
            cache: "no-store"
          });
          if (!n.ok || d) return;
          let r = await n.json();
          if (d) return;
          let o = (0, s.findVmInSessionResponse)(r, {
            endpointUrl: e,
            vmId: t,
            vmName: a
          });
          null != o && null != o.vmState && l(m, {
            vmType: o.vmType ?? i,
            vmState: o.vmState,
            replaceAttemptId: o.replaceAttemptId,
            vmStateSource: o.vmStateSource
          })
        } catch {}
      })(), () => {
        d = !0
      }
    }, [e, t, a, i, u, l]), null
  }

  function S(e) {
    return "authoritative" === e.gatewayBootstrapSource && null == e.gatewayUrl && "unavailable" === e.vmAssignment && "indeterminate" === e.backendAuthStatus
  }
  e.s(["HatchServerDataClientProvider", 0, function({
    children: e,
    dataPromise: a,
    initialData: r
  }) {
    let [i, s] = (0, n.useState)(() => r ?? {
      viewerLocale: null,
      gatewayUrl: null,
      vmName: null,
      authToken: null,
      noiseNotaryToken: null,
      backendAuthStatus: "indeterminate",
      gatewayBootstrapSource: "authoritative",
      vmAssignment: "unavailable",
      vmResolutionIssue: {
        kind: "retryable"
      },
      vmId: null,
      vmType: null,
      vmState: null,
      replaceAttemptId: null,
      vmStateSource: null,
      hasOverride: !1,
      chatThemes: null
    }), [u, _] = (0, n.useState)(null == r), [E, A] = (0, n.useState)(0), f = (0, n.useRef)(null), T = (0, n.useRef)(i);
    T.current = i;
    let y = (0, n.useRef)((0, o.gatewayTargetKey)(r?.gatewayUrl ?? null, r?.vmName ?? null)),
      I = (0, n.useRef)({
        setServerDataState: s,
        setIsLoading: _
      });
    I.current = {
      setServerDataState: s,
      setIsLoading: _
    };
    let C = (0, n.useCallback)(e => {
        var t, a;
        let n = f.current,
          r = T.current,
          i = (t = r, "trusted_cookie" === (a = e).gatewayBootstrapSource && "authoritative" === t.gatewayBootstrapSource ? S(t) ? {
            ...t,
            viewerLocale: a.viewerLocale,
            gatewayUrl: a.gatewayUrl,
            vmName: a.vmName,
            authToken: a.authToken,
            noiseNotaryToken: a.noiseNotaryToken,
            gatewayBootstrapSource: a.gatewayBootstrapSource,
            vmAssignment: a.vmAssignment,
            vmId: a.vmId,
            vmType: a.vmType,
            vmState: a.vmState,
            replaceAttemptId: a.replaceAttemptId,
            vmStateSource: a.vmStateSource,
            hasOverride: a.hasOverride
          } : t : "trusted_cookie" === t.gatewayBootstrapSource && S(a) ? {
            ...a,
            gatewayUrl: t.gatewayUrl,
            vmName: t.vmName,
            authToken: t.authToken,
            noiseNotaryToken: t.noiseNotaryToken,
            vmId: t.vmId,
            vmType: t.vmType,
            vmState: t.vmState,
            replaceAttemptId: t.replaceAttemptId,
            vmStateSource: t.vmStateSource,
            gatewayBootstrapSource: t.gatewayBootstrapSource,
            vmAssignment: t.vmAssignment,
            hasOverride: t.hasOverride
          } : a),
          s = (0, o.gatewayTargetKey)(i.gatewayUrl, i.vmName),
          u = "trusted_cookie" === r.gatewayBootstrapSource && "authoritative" === i.gatewayBootstrapSource,
          c = u && (0, o.gatewayTargetKey)(r.gatewayUrl, r.vmName) !== s ? {
            ...i,
            authToken: null,
            noiseNotaryToken: null
          } : i;
        u && y.current !== s && null != c.gatewayUrl && m({
          gatewayUrl: c.gatewayUrl,
          vmName: c.vmName ?? c.vmId ?? "",
          authToken: c.authToken,
          noiseNotaryToken: c.noiseNotaryToken,
          vmId: c.vmId,
          vmState: c.vmState
        }), (null != n || u || null == r.gatewayUrl || null == c.gatewayUrl || (0, o.gatewayTargetKey)(r.gatewayUrl, r.vmName) === s) && (null == n && y.current !== s && ((0, l.resetGatewayTargetState)(), y.current = s), T.current = null == n ? c : {
          ...c,
          ...n,
          vmAssignment: "assigned",
          vmResolutionIssue: null
        }, null == n && i === e && e !== r && A(e => e + 1), I.current.setServerDataState(e => null != n ? {
          ...c,
          ...n,
          vmAssignment: "assigned",
          vmResolutionIssue: null,
          hasOverride: !0,
          chatThemes: e.chatThemes
        } : u || null == e.gatewayUrl || null == c.gatewayUrl || (0, o.gatewayTargetKey)(e.gatewayUrl, e.vmName) === s ? c : e)), I.current.setIsLoading(!1)
      }, []),
      N = (0, n.useCallback)(e => {
        m(e);
        let t = {
            ...e,
            vmId: e.vmId ?? null,
            vmType: e.vmType ?? null,
            vmState: e.vmState ?? null,
            replaceAttemptId: e.replaceAttemptId ?? null,
            vmStateSource: e.vmStateSource ?? null
          },
          a = (0, o.gatewayTargetKey)(e.gatewayUrl, e.vmName);
        y.current !== a && ((0, l.resetGatewayTargetState)(), y.current = a), f.current = t, T.current = {
          ...T.current,
          ...t,
          vmAssignment: "assigned",
          vmResolutionIssue: null,
          hasOverride: !0,
          chatThemes: null
        }, s(e => ({
          ...e,
          ...t,
          vmAssignment: "assigned",
          vmResolutionIssue: null,
          hasOverride: !0,
          chatThemes: null
        })), _(!1), A(e => e + 1)
      }, []),
      P = (0, n.useCallback)((e, t) => {
        let a = T.current;
        if ((0, o.gatewayTargetKey)(a.gatewayUrl, a.vmName) !== e) return;
        T.current = {
          ...a,
          vmType: t.vmType,
          vmState: t.vmState,
          replaceAttemptId: t.replaceAttemptId,
          vmStateSource: t.vmStateSource,
          ..."DISABLED" === t.vmState ? {
            authToken: null,
            noiseNotaryToken: null
          } : {}
        }, A(e => e + 1);
        let n = f.current;
        null != n && (0, o.gatewayTargetKey)(n.gatewayUrl, n.vmName) === e && (f.current = {
          ...n,
          ...t,
          ..."DISABLED" === t.vmState ? {
            authToken: null,
            noiseNotaryToken: null
          } : {}
        }), s(a => (0, o.gatewayTargetKey)(a.gatewayUrl, a.vmName) === e ? {
          ...a,
          ...t,
          ..."DISABLED" === t.vmState ? {
            authToken: null,
            noiseNotaryToken: null
          } : {}
        } : a)
      }, []);
    (0, n.useLayoutEffect)(() => {
      (0, c.setServingVmTarget)(i.gatewayUrl, i.vmName)
    }, [i.gatewayUrl, i.vmName]), (0, n.useLayoutEffect)(() => () => (0, c.setServingVmTarget)(null, null), []);
    let w = (0, n.useMemo)(() => ({
        viewerLocale: i.viewerLocale,
        gatewayUrl: i.gatewayUrl,
        vmName: i.vmName,
        authToken: i.authToken,
        noiseNotaryToken: i.noiseNotaryToken,
        backendAuthStatus: i.backendAuthStatus,
        gatewayBootstrapSource: i.gatewayBootstrapSource,
        vmAssignment: i.vmAssignment,
        vmResolutionIssue: i.vmResolutionIssue,
        hasOverride: i.hasOverride,
        vmId: i.vmId ?? null,
        vmType: i.vmType ?? null,
        vmState: i.vmState ?? null,
        replaceAttemptId: i.replaceAttemptId ?? null,
        vmStateSource: i.vmStateSource ?? null,
        vmStateRevision: E,
        isLoading: u,
        chatThemes: i.chatThemes
      }), [i.viewerLocale, i.gatewayUrl, i.vmName, i.authToken, i.noiseNotaryToken, i.backendAuthStatus, i.gatewayBootstrapSource, i.vmAssignment, i.vmResolutionIssue, i.hasOverride, i.vmId, i.vmType, i.vmState, i.replaceAttemptId, i.vmStateSource, E, u, i.chatThemes]),
      R = (0, n.useMemo)(() => ({
        setServerData: C
      }), [C]),
      k = (0, n.useMemo)(() => ({
        activateGateway: N
      }), [N]);
    return (0, t.jsx)(d.Provider, {
      value: w,
      children: (0, t.jsx)(h.Provider, {
        value: k,
        children: (0, t.jsxs)(p.Provider, {
          value: R,
          children: [(0, t.jsx)(n.Suspense, {
            fallback: null,
            children: (0, t.jsx)(v, {
              dataPromise: a
            })
          }), !u && (0, t.jsx)(g, {
            currentGatewayUrl: i.gatewayUrl,
            currentVmId: i.vmId ?? null,
            currentVmName: i.vmName,
            currentVmType: i.vmType ?? null,
            onLifecycleChange: P
          }), e]
        })
      })
    })
  }, "useHatchServerData", 0, function() {
    return (0, n.useContext)(d)
  }, "useHatchServerDataActions", 0, function() {
    return (0, n.useContext)(h)
  }, "useSetHatchServerData", 0, function() {
    return (0, n.useContext)(p).setServerData
  }])
}, 11047, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    n = e.i(519172);
  let r = (0, n.createContext)({
      isLoading: !0,
      linkShimInfo: null
    }),
    i = (0, n.createContext)({
      setData: () => {}
    });

  function s(e) {
    let t, r, s = (0, a.c)(4),
      {
        linkShimInfoPromise: o
      } = e,
      l = (0, n.use)(o),
      {
        setData: u
      } = (0, n.useContext)(i);
    return s[0] !== l || s[1] !== u ? (t = () => {
      u(l)
    }, r = [l, u], s[0] = l, s[1] = u, s[2] = t, s[3] = r) : (t = s[2], r = s[3]), (0, n.useEffect)(t, r), null
  }
  e.s(["LinkShimInfoProvider", 0, function(e) {
    let {
      children: a
    } = e, [o, l] = (0, n.useState)(!0), [u, c] = (0, n.useState)(null), _ = void 0 !== e.linkShimInfo, m = _ ? e.isLoading : o, d = _ ? e.linkShimInfo : u, p = (0, n.useRef)({
      setIsLoading: l,
      setLinkShimInfo: c
    });
    p.current = {
      setIsLoading: l,
      setLinkShimInfo: c
    };
    let h = (0, n.useCallback)(e => {
      p.current.setLinkShimInfo(e), p.current.setIsLoading(!1)
    }, []);
    return (0, t.jsx)(r.Provider, {
      value: {
        isLoading: m,
        linkShimInfo: d
      },
      children: (0, t.jsxs)(i.Provider, {
        value: {
          setData: h
        },
        children: [null != e.linkShimInfoPromise ? (0, t.jsx)(n.Suspense, {
          fallback: null,
          children: (0, t.jsx)(s, {
            linkShimInfoPromise: e.linkShimInfoPromise
          })
        }) : null, a]
      })
    })
  }, "useLinkShimInfo", 0, function() {
    return (0, n.useContext)(r)
  }])
}, 816042, e => {
  "use strict";
  var t = e.i(503610);

  function a(e) {
    return e?.trim() || null
  }

  function n(e) {
    let n = a(e?.endpoint_url);
    return n ? {
      endpointUrl: n,
      vmName: a(e?.name) ?? a(e?.vm_name),
      vmId: a(e?.vm_id),
      vmType: (0, t.normalizeHatchVmInventoryType)(e?.vm_type),
      vmState: e?.vm_state ?? null,
      replaceAttemptId: (0, t.normalizeHatchVmReplaceAttemptId)(e?.replace_attempt_id),
      vmStateSource: (0, t.normalizeHatchVmStateSource)(e?.vm_state_source)
    } : null
  }
  e.s(["findVmInSessionResponse", 0, function(e, t) {
    let a = [...(e.vms ?? []).map(n).filter(e => null != e), ..."assigned" === e.status ? [n(e)] : []].filter(e => null != e && (null == t.vmId || null == e.vmId || e.vmId === t.vmId));
    if (null != t.vmId) {
      let e = a.find(e => e.vmId === t.vmId);
      if (null != e) return e
    }
    if (null != t.vmName) return a.find(e => e.vmName === t.vmName) ?? null;
    let r = a.filter(e => e.endpointUrl === t.endpointUrl);
    return 1 === r.length ? r[0] ?? null : null
  }, "getAssignedVmFromSessionResponse", 0, function(e) {
    if ("assigned" !== e.status) return null;
    let t = n(e);
    if (t) {
      let a = e.vms?.find(e => {
          let a = n(e);
          return a?.endpointUrl === t.endpointUrl && (null == t.vmId || null == a.vmId || a.vmId === t.vmId) && (null == t.vmName || a.vmName === t.vmName)
        }),
        r = n(a);
      return null == r ? t : {
        ...t,
        vmId: r.vmId,
        vmType: r.vmType,
        vmState: r.vmState,
        replaceAttemptId: r.replaceAttemptId,
        vmStateSource: r.vmStateSource
      }
    }
    return Array.isArray(e.vms) && 0 !== e.vms.length ? n(e.vms.find(e => !0 === e.is_preferred && a(e.endpoint_url)) ?? e.vms.find(e => a(e.endpoint_url))) : null
  }])
}, 125658, e => {
  "use strict";
  var t = e.i(519172),
    a = e.i(848048),
    n = e.i(126607),
    r = e.i(359783),
    i = e.i(827288);

  function s(e) {
    return e ? "true" : "false"
  }

  function o(e) {
    return null == e ? "unknown" : s(e)
  }
  let l = (0, r.createClientLogger)("useActivationStatusCheckLogger");
  e.s(["useActivationStatusCheckLogger", 0, function() {
    let e = (0, a.useInteractionLogger)(),
      r = (0, t.useRef)(e);
    return r.current = e, (0, t.useCallback)((e, t) => {
      if (!(0, i.isSecretBearingPathname)(window.location.pathname)) {
        try {
          let t = {
            eventName: "activation_status_check",
            actionTarget: "error" === e.result ? "activation_error" : `activation_${e.resolvedDestination}`,
            actionType: "page_load",
            metadata: "error" === e.result ? {
              surface: "onboarding",
              result: "error",
              resolution_mode: e.resolutionMode,
              error_type: e.errorType
            } : {
              surface: "onboarding",
              result: "success",
              resolution_mode: e.resolutionMode,
              resolved_destination: e.resolvedDestination,
              waitlist_status: e.status.waitlistStatus ?? "nil",
              age_blocked: s("blocked" === e.status.ccvStatus),
              tos_accepted: s(e.status.isTosAccepted),
              age_confirmation_required: s("ccv_required" === e.status.ccvStatus),
              has_redeemed_invite_code: s(e.status.hasRedeemedInviteCode),
              is_geo_gated: s(e.status.isGeoGated),
              has_hatch_access: o(e.status.hasHatchAccess),
              has_provisioned_vm: o(e.status.hasProvisionedVm)
            }
          };
          r.current({
            ...t,
            actionType: t.actionType
          })
        } catch (e) {
          l.retainForBugReport("warn", "Unable to log the activation status check");
          return
        }
        t?.flush === !0 && n.logInfra.flush().catch(e => {
          l.retainForBugReport("warn", "Unable to flush the activation status check")
        })
      }
    }, [])
  }], 125658)
}, 69066, e => {
  "use strict";

  function t() {
    return "u" > typeof navigator && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
  }

  function a(e) {
    return !!e && e instanceof HTMLElement && (!!e.isContentEditable || null != e.closest('[data-lexical-editor="true"]'))
  }
  let n = {
      meta: "⌘",
      ctrl: "⌃",
      shift: "⇧",
      alt: "⌥"
    },
    r = {
      meta: "Ctrl",
      ctrl: "Ctrl",
      shift: "Shift",
      alt: "Alt"
    },
    i = {
      arrowup: {
        mac: "↑",
        other: "↑"
      },
      arrowdown: {
        mac: "↓",
        other: "↓"
      },
      arrowleft: {
        mac: "←",
        other: "←"
      },
      arrowright: {
        mac: "→",
        other: "→"
      },
      escape: {
        mac: "Esc",
        other: "Esc"
      },
      enter: {
        mac: "⏎",
        other: "Enter"
      },
      backspace: {
        mac: "⌫",
        other: "Backspace"
      },
      delete: {
        mac: "⌦",
        other: "Del"
      },
      tab: {
        mac: "⇥",
        other: "Tab"
      },
      space: {
        mac: "Space",
        other: "Space"
      }
    };
  e.s(["formatShortcut", 0, function(e, t) {
    let a = [],
      {
        key: s,
        modifiers: o
      } = e;
    for (let e of t ? ["ctrl", "alt", "shift", "meta"] : ["meta", "ctrl", "alt", "shift"]) o[e] && (t ? a.push(n[e]) : a.push(r[e]));
    let l = i[s.toLowerCase()];
    return l ? a.push(t ? l.mac : l.other) : a.push(1 === s.length ? s.toUpperCase() : s), t ? a.join("") : a.join("+")
  }, "getPriorityOrder", 0, function(e) {
    switch (e) {
      case "critical":
        return 0;
      case "high":
        return 1;
      case "normal":
      default:
        return 2;
      case "low":
        return 3
    }
  }, "isEditableElement", 0, function(e) {
    if (!e || !(e instanceof HTMLElement)) return !1;
    let t = e.tagName.toLowerCase();
    return "input" === t || "textarea" === t ? !e.readOnly : a(e)
  }, "isMacPlatform", 0, t, "isRichTextEditorElement", 0, a, "matchesShortcut", 0, function(e, a) {
    let n, {
      key: r,
      modifiers: i
    } = a;
    if (e.key.toLowerCase() !== r.toLowerCase()) return !1;
    let s = t();
    n = i.meta ? s ? e.metaKey && !e.ctrlKey : e.ctrlKey && !e.metaKey : s || i.ctrl ? !e.metaKey : !e.metaKey && !e.ctrlKey;
    let o = i.ctrl ? e.ctrlKey : !!i.meta || !e.ctrlKey,
      l = i.shift ? e.shiftKey : !e.shiftKey,
      u = i.alt ? e.altKey : !e.altKey;
    return n && o && l && u
  }])
}, 72596, e => {
  "use strict";
  var t = e.i(183912);
  let a = new Set(t.HATCH_LINKSHIM_TRUSTED_HOSTS),
    n = new Set(t.HATCH_LINKSHIM_TRUSTED_DOMAINS);
  e.s(["isAllowedDomain", 0, function(e) {
    try {
      let t = new URL(e).hostname;
      return a.has(t) || n.has(t) || Array.from(n).some(e => t.endsWith("." + e))
    } catch {
      return !1
    }
  }, "wrapWithLinkshim", 0, function(e, t) {
    let a = e,
      n = t.linkReactDefaultHash;
    if (function(e, t) {
        try {
          var a;
          let n, r = new URL(e),
            i = (n = (a = t.linkshimHost).split(".")).length >= 2 ? n.slice(-2).join(".") : a,
            s = r.pathname.replace(/\/+$/, "") || "/",
            o = t.linkshimPath.replace(/\/+$/, "") || "/";
          if (s !== o) return !1;
          let l = r.hostname;
          if (l !== i && !l.endsWith("." + i)) return !1;
          let u = r.searchParams.get(t.linkshimURLParam),
            c = r.searchParams.get(t.linkshimEncParam);
          if (!u || !c) return !1;
          return !0
        } catch {
          return !1
        }
      }(e, t)) try {
      let r = new URL(e),
        i = r.searchParams.get(t.linkshimURLParam),
        s = r.searchParams.get(t.linkshimEncParam);
      i && (a = i), s && (n = s)
    } catch {}
    let r = new URL(`https://${t.linkshimHost}`);
    return r.pathname = t.linkshimPath, r.searchParams.set(t.linkshimURLParam, a), r.searchParams.set(t.linkshimEncParam, n), r.toString()
  }])
}, 21483, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    n = e.i(519172),
    r = e.i(365500),
    i = e.i(359783),
    s = e.i(995198),
    o = e.i(125658);
  let l = (0, i.createClientLogger)("HatchAdmissionChecks"),
    u = (0, n.createContext)("allowed"),
    c = (0, n.createContext)(Promise.resolve({
      outcome: "ok"
    })),
    _ = (0, n.createContext)(() => {});

  function m(e) {
    let t, i, o, l, u = (0, a.c)(10),
      {
        checkpoint: c,
        onResolve: _
      } = e,
      {
        revalidateActiveSession: m
      } = (0, r.useAuth)(),
      d = (0, n.use)(c),
      p = "checkpoint_required" === d.outcome;
    return u[0] !== _ || u[1] !== d ? (t = () => {
      (0, s.clearAuthMetaSessionBootstrapAttempt)(), _(d)
    }, i = [_, d], u[0] = _, u[1] = d, u[2] = t, u[3] = i) : (t = u[2], i = u[3]), (0, n.useLayoutEffect)(t, i), u[4] !== p || u[5] !== _ || u[6] !== d.outcome || u[7] !== m ? (o = () => {
      if (!p && "indeterminate" !== d.outcome) return;
      let e = !0;
      return m({
        bypassCooldown: !0
      }).then(t => {
        e && "validated" === t.outcome && _({
          outcome: "ok"
        })
      }), () => {
        e = !1
      }
    }, l = [p, _, d.outcome, m], u[4] = p, u[5] = _, u[6] = d.outcome, u[7] = m, u[8] = o, u[9] = l) : (o = u[8], l = u[9]), (0, n.useEffect)(o, l), null
  }

  function d(e) {
    let t, i, s = (0, a.c)(12),
      {
        activation: u,
        checkpoint: c,
        resolvedDestination: _
      } = e,
      {
        revalidateActiveSession: m
      } = (0, r.useAuth)(),
      d = (0, o.useActivationStatusCheckLogger)(),
      p = (0, n.useRef)(!1),
      h = (0, n.use)(u),
      v = (0, n.use)(c);
    return s[0] !== h || s[1] !== v.outcome || s[2] !== d || s[3] !== _ || s[4] !== m ? (t = () => {
      if ("checkpoint_required" === v.outcome) return;
      let e = "invalidated" === h.outcome ? h : null,
        t = h.activationStatusCheck;
      if (!p.current && null != t) {
        let a = "success" === t.result && null != e && null != t.resolvedDestination ? t.resolvedDestination : _;
        ("error" === t.result || null != a) && (p.current = !0, d("error" === t.result ? t : {
          ...t,
          resolvedDestination: a
        }, {
          flush: null != e
        }))
      }
      null != e && (l.retainForBugReport("info", "Verifying render-time admission rejection against the current session"), m({
        bypassCooldown: !0
      }))
    }, s[0] = h, s[1] = v.outcome, s[2] = d, s[3] = _, s[4] = m, s[5] = t) : t = s[5], s[6] !== h || s[7] !== v || s[8] !== d || s[9] !== _ || s[10] !== m ? (i = [h, v, d, m, _], s[6] = h, s[7] = v, s[8] = d, s[9] = _, s[10] = m, s[11] = i) : i = s[11], (0, n.useEffect)(t, i), null
  }
  e.s(["HatchAdmissionChecks", 0, function(e) {
    let r, i, s, o, l, p = (0, a.c)(15),
      {
        checks: h,
        children: v
      } = e,
      [g, S] = (0, n.useState)("pending"),
      [E, A] = (0, n.useState)(null);
    p[0] === Symbol.for("react.memo_cache_sentinel") ? (r = e => {
      S("checkpoint_required" === e.outcome ? "blocked" : "allowed")
    }, p[0] = r) : r = p[0];
    let f = r;
    return p[1] !== h.checkpoint ? (i = (0, t.jsx)(n.Suspense, {
      fallback: null,
      children: (0, t.jsx)(m, {
        checkpoint: h.checkpoint,
        onResolve: f
      })
    }), p[1] = h.checkpoint, p[2] = i) : i = p[2], p[3] !== E || p[4] !== h.activation || p[5] !== h.checkpoint ? (s = (0, t.jsx)(n.Suspense, {
      fallback: null,
      children: (0, t.jsx)(d, {
        activation: h.activation,
        checkpoint: h.checkpoint,
        resolvedDestination: E
      })
    }), p[3] = E, p[4] = h.activation, p[5] = h.checkpoint, p[6] = s) : s = p[6], p[7] !== g || p[8] !== v || p[9] !== i || p[10] !== s ? (o = (0, t.jsx)(_.Provider, {
      value: A,
      children: (0, t.jsxs)(u.Provider, {
        value: g,
        children: [i, s, v]
      })
    }), p[7] = g, p[8] = v, p[9] = i, p[10] = s, p[11] = o) : o = p[11], p[12] !== h.activation || p[13] !== o ? (l = (0, t.jsx)(c.Provider, {
      value: h.activation,
      children: o
    }), p[12] = h.activation, p[13] = o, p[14] = l) : l = p[14], l
  }, "useHatchActivationAdmissionCheck", 0, function() {
    return (0, n.useContext)(c)
  }, "useHatchCheckpointAdmissionStatus", 0, function() {
    return (0, n.useContext)(u)
  }, "useReportActivationDestination", 0, function() {
    return (0, n.useContext)(_)
  }])
}, 93512, e => {
  "use strict";
  let t, a;
  var n = e.i(984416),
    r = e.i(519172),
    i = e.i(763971),
    s = e.i(576833),
    o = e.i(204523);
  let l = {
      [o.HATCH_EARLY_CLIENT_PRELOAD.CHAT_ROUTE]: s.loadHatchChatRoute,
      [o.HATCH_EARLY_CLIENT_PRELOAD.FEED_ROUTE]: s.loadHatchFeedRoute,
      [o.HATCH_EARLY_CLIENT_PRELOAD.GOALS_ROUTE]: s.loadHatchGoalsRoute,
      [o.HATCH_EARLY_CLIENT_PRELOAD.IDEAS_ROUTE]: s.loadHatchIdeasRoute
    },
    u = new Map;

  function c(e) {
    for (let t of e.slice(0, o.HATCH_EARLY_CLIENT_PRELOAD_LIMIT)) {
      if (!(0, o.isHatchEarlyClientPreloadKey)(t) || u.has(t)) continue;
      let e = l[t]();
      u.set(t, e), e.catch(() => {
        u.get(t) === e && u.delete(t)
      })
    }
  }
  var _ = e.i(228750);
  a = (t = window).__HATCH_CLIENT_PRELOAD_QUEUE__ ?? [], t.__HATCH_CLIENT_PRELOAD_QUEUE__ = [], t.__HATCH_CLIENT_PRELOAD__ = c, c(a);
  let m = (0, r.createContext)(null);
  e.s(["HatchGatewayQuerySsrProvider", 0, function({
    children: e,
    nonce: t
  }) {
    let [a] = (0, r.useState)(() => ({
      descriptors: new Map,
      emittedSourceKeys: new Set,
      nextChunkId: 0
    }));
    return (0, i.useServerInsertedHTML)(() => {
      let e = [...a.descriptors.values()];
      if (0 === e.length) return null;
      for (let t of (a.descriptors.clear(), e)) a.emittedSourceKeys.add(t.sourceKey);
      let r = a.nextChunkId;
      return a.nextChunkId += 1, (0, n.jsx)("script", {
        [_.HATCH_EARLY_GATEWAY_QUERIES_ATTRIBUTE]: "",
        id: `hatch-early-gateway-queries-${r}`,
        nonce: t,
        dangerouslySetInnerHTML: {
          __html: (0, _.serializeHatchEarlyGatewayQueryScript)(e)
        }
      })
    }), (0, n.jsx)(m.Provider, {
      value: a,
      children: e
    })
  }, "useRegisterGatewayQueryForSsr", 0, function(e, t, a) {
    (0, r.useContext)(m)
  }], 93512)
}, 666750, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    n = e.i(519172);
  let r = () => {},
    i = (0, n.createContext)({
      phase: "unavailable",
      reason: "no_vm"
    }),
    s = (0, n.createContext)({
      reconnect: r
    });

  function o(e) {
    switch (e) {
      case "auth_failed":
        return "auth_failed";
      case "gateway_unreachable":
      case "none":
      default:
        return "gateway_unreachable";
      case "unknown":
        return "unknown"
    }
  }

  function l(e) {
    return window.addEventListener("online", e), window.addEventListener("offline", e), () => {
      window.removeEventListener("online", e), window.removeEventListener("offline", e)
    }
  }

  function u() {
    return !1 !== navigator.onLine
  }

  function c() {
    return !0
  }
  e.s(["HatchConnectionProvider", 0, function(e) {
    let _, m, d, p, h = (0, a.c)(15),
      {
        children: v,
        gatewayUrl: g,
        wsConnectionState: S,
        hasEverConnected: E,
        lastFailureKind: A,
        reconnectExhausted: f,
        reconnect: T
      } = e,
      y = void 0 !== f && f,
      I = void 0 === T ? r : T,
      C = (0, n.useSyncExternalStore)(l, u, c);
    h[0] !== g || h[1] !== E || h[2] !== C || h[3] !== A || h[4] !== y || h[5] !== S ? (_ = function({
      gatewayUrl: e,
      wsConnectionState: t,
      hasEverConnected: a,
      lastFailureKind: n,
      reconnectExhausted: r = !1,
      isBrowserOnline: i
    }) {
      return e ? i ? r ? {
        phase: "unavailable",
        reason: "gateway_reconnect_exhausted"
      } : "connected" === t ? {
        phase: "connected",
        reason: "none"
      } : "connecting" === t ? a || "none" === n || "gateway_unreachable" === n ? a ? {
        phase: "reconnecting",
        reason: o(n)
      } : {
        phase: "connecting",
        reason: "none"
      } : {
        phase: "unavailable",
        reason: o(n)
      } : "error" === t ? "auth_failed" === n ? {
        phase: "unavailable",
        reason: "auth_failed"
      } : a ? {
        phase: "reconnecting",
        reason: o(n)
      } : {
        phase: "gateway_unreachable" === n ? "connecting" : "unavailable",
        reason: o(n)
      } : a || "none" === n || "gateway_unreachable" === n ? a ? {
        phase: "reconnecting",
        reason: o(n)
      } : {
        phase: "connecting",
        reason: "none"
      } : {
        phase: "unavailable",
        reason: o(n)
      } : {
        phase: "unavailable",
        reason: "browser_offline"
      } : {
        phase: "unavailable",
        reason: "no_vm"
      }
    }({
      gatewayUrl: g,
      wsConnectionState: S,
      hasEverConnected: E,
      lastFailureKind: A,
      reconnectExhausted: y,
      isBrowserOnline: C
    }), h[0] = g, h[1] = E, h[2] = C, h[3] = A, h[4] = y, h[5] = S, h[6] = _) : _ = h[6];
    let N = _;
    return h[7] !== I ? (m = {
      reconnect: I
    }, h[7] = I, h[8] = m) : m = h[8], h[9] !== v || h[10] !== N ? (d = (0, t.jsx)(i.Provider, {
      value: N,
      children: v
    }), h[9] = v, h[10] = N, h[11] = d) : d = h[11], h[12] !== m || h[13] !== d ? (p = (0, t.jsx)(s.Provider, {
      value: m,
      children: d
    }), h[12] = m, h[13] = d, h[14] = p) : p = h[14], p
  }, "useHatchConnection", 0, function() {
    return (0, n.useContext)(i)
  }])
}, 550365, 31631, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(519172),
    n = e.i(359783),
    r = e.i(434978);
  let i = {
    mainHistoryPage: null,
    mainHistorySourceKey: null
  };
  e.s(["EMPTY_SSR_CHAT_HISTORY", 0, i, "buildHatchShellMainHistorySourceKey", 0, function(e, t = "messages") {
    return ["shell-bootstrap", e, "chat.history", String(r.INITIAL_HISTORY_LIMIT), t].join(":")
  }], 31631);
  let s = (0, n.createClientLogger)("SSRChatHistoryContext"),
    o = (0, a.createContext)({
      ...i,
      isLoading: !1
    });
  e.s(["SSRChatHistoryProvider", 0, function({
    children: e,
    initialData: n,
    dataPromise: r
  }) {
    let [i, l] = (0, a.useState)(n), [u, c] = (0, a.useState)(null != r && null == n.mainHistoryPage);
    (0, a.useEffect)(() => {
      if (null == r) return void c(!1);
      let e = !1;
      return c(!0), (async () => {
        try {
          let t = await r;
          if (e) return;
          l(t)
        } catch (t) {
          if (e) return;
          s.retainForBugReport("warn", "Failed to resolve SSR chat history data promise")
        } finally {
          e || c(!1)
        }
      })(), () => {
        e = !0
      }
    }, [r]);
    let _ = (0, a.useMemo)(() => ({
      ...i,
      isLoading: u
    }), [i, u]);
    return (0, t.jsx)(o.Provider, {
      value: _,
      children: e
    })
  }, "useSSRChatHistory", 0, function() {
    return (0, a.useContext)(o)
  }], 550365)
}, 941748, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    n = e.i(519172);
  let r = (0, n.createContext)(!1),
    i = (0, n.createContext)({
      target: null,
      refreshRevision: 0,
      connectionState: null
    });
  e.s(["HatchVmUpdatingProvider", 0, function(e) {
    let n, s, o, l = (0, a.c)(10),
      {
        children: u,
        isUpdating: c,
        target: _,
        refreshRevision: m,
        connectionState: d
      } = e,
      p = void 0 === _ ? null : _,
      h = void 0 === m ? 0 : m,
      v = void 0 === d ? null : d;
    return l[0] !== v || l[1] !== h || l[2] !== p ? (n = {
      target: p,
      refreshRevision: h,
      connectionState: v
    }, l[0] = v, l[1] = h, l[2] = p, l[3] = n) : n = l[3], l[4] !== u || l[5] !== c ? (s = (0, t.jsx)(r.Provider, {
      value: c,
      children: u
    }), l[4] = u, l[5] = c, l[6] = s) : s = l[6], l[7] !== n || l[8] !== s ? (o = (0, t.jsx)(i.Provider, {
      value: n,
      children: s
    }), l[7] = n, l[8] = s, l[9] = o) : o = l[9], o
  }, "useHatchVmLifecycle", 0, function() {
    return (0, n.useContext)(i)
  }, "useHatchVmUpdating", 0, function() {
    return (0, n.useContext)(r)
  }])
}, 204261, e => {
  "use strict";
  var t = e.i(925301);
  e.s(["isRetryableChatSubscriptionError", 0, function(e) {
    return !(!(0, t.isGatewayRequestError)(e) || (0, t.isGatewayTargetChangedError)(e)) && (null != e.httpStatus ? [408, 429, 500, 502, 503, 504].includes(e.httpStatus) : "transport" === e.kind || "startup_not_ready" === e.code || "session_busy" === e.code)
  }])
}, 498565, e => {
  "use strict";
  var t = e.i(335004);
  e.s(["dispatchGatewayQueryDescriptor", 0, function(e, a) {
    let n = () => a(e.request.method, function(e) {
      let t = {
        ...e.request.params
      };
      for (let a of e.request.clientParams ?? []) {
        if ("browser_timezone" === a.kind) {
          try {
            let e = Intl.DateTimeFormat().resolvedOptions().timeZone;
            e.length > 0 && (t[a.paramName] = e)
          } catch {}
          continue
        }
        if ("query_param_string" === a.kind) {
          let e = new URLSearchParams(window.location.search).get(a.queryParam);
          null != e && a.allowedValues.includes(e) && (t[a.paramName] = e);
          continue
        }
        try {
          let e = window.localStorage.getItem(a.storageKey);
          null != e && e.length > 0 && (t[a.paramName] = e)
        } catch {}
      }
      return t
    }(e), {
      expectedGatewayTargetKey: e.targetKey
    });
    return "hatch_gateway_result" === e.request.resultMode ? n().then(t.okHatchGatewayResult) : n()
  }])
}, 610969, e => {
  "use strict";
  var t = e.i(76924);
  class a extends Error {
    status;
    constructor(e) {
      super(`VM wake request failed with status ${e}`), this.name = "VmWakeHttpError", this.status = e
    }
  }
  async function n(e, t, n) {
    let r = await fetch("/api/hatch/vm/wake", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        vm_id: e,
        retry_count: t,
        ...null == n ? {} : {
          connect_attempt_id: n.attemptId
        }
      }),
      cache: "no-store",
      signal: null == n ? AbortSignal.timeout(1e4) : AbortSignal.any([n.signal, AbortSignal.timeout(1e4)])
    });
    if (!r.ok) throw new a(r.status)
  }
  e.s(["VmWakeHttpError", 0, a, "requestVmWake", 0, n, "resolveVmWakeId", 0, function({
    gatewayUrl: e,
    vmId: a,
    vmName: n
  }) {
    let r = a?.trim() ?? "",
      i = n?.trim() ?? "";
    return r || (0, t.extractVmId)(e) || i || null
  }])
}, 255772, e => {
  "use strict";
  var t, a = ((t = {}).CHAT_PAGE = "chat_page_time_spent", t.DEVELOPER_SUBMISSIONS_PAGE = "developer_submissions_page_time_spent", t.DEVELOPER_SUBMISSION_DETAIL_PAGE = "developer_submission_detail_page_time_spent", t.DEVELOPER_BUSINESS_VERIFICATION_PAGE = "developer_business_verification_page_time_spent", t.DEVELOPER_TIA_PAGE = "developer_tia_page_time_spent", t.DEVELOPER_SUBMISSION_CONFIRMATION_PAGE = "developer_submission_confirmation_page_time_spent", t.DEVELOPER_MESSAGES_PAGE = "developer_messages_page_time_spent", t.DEVELOPER_CREDENTIALS_PAGE = "developer_credentials_page_time_spent", t.BROWSER_SESSION_VIEWER = "browser_session_viewer_time_spent", t.LIBRARY_PAGE = "library_page_time_spent", t.ARTIFACTS_PAGE = "artifacts_page_time_spent", t.AGENTS_PAGE = "agents_page_time_spent", t.SPACE_PAGE = "space_page_time_spent", t.SPACE_EDIT_PAGE = "space_edit_page_time_spent", t.SAVED_SPACE_PAGE = "saved_space_page_time_spent", t.OPEN_HATCH_PAGE = "open_hatch_page_time_spent", t.JOIN_PAGE = "join_page_time_spent", t.EARLY_ACCESS_PAGE = "early_access_page_time_spent", t.PAGE_UNAVAILABLE = "page_unavailable_time_spent", t.IDEAS_PAGE = "ideas_page_time_spent", t.CVM_STATUS_PAGE = "cvm_status_page_time_spent", t.FEED_PAGE = "feed_page_time_spent", t.FLOCK_POST_PAGE = "flock_post_page_time_spent", t.GOALS_PAGE = "goals_page_time_spent", t.GOAL_DETAIL_PAGE = "goal_detail_page_time_spent", t.PODCASTS_PAGE = "podcasts_page_time_spent", t.ONBOARDING_PAGE = "onboarding_page_time_spent", t.ONBOARDING_DISCLOSURE_PAGE = "onboarding_disclosure_page_time_spent", t.ONBOARDING_NDA_PAGE = "onboarding_nda_page_time_spent", t.ONBOARDING_VERIFICATION_PAGE = "onboarding_verification_page_time_spent", t.ONBOARDING_WAITLIST_PAGE = "onboarding_waitlist_page_time_spent", t.ONBOARDING_UNAVAILABLE_PAGE = "onboarding_unavailable_page_time_spent", t.ONBOARDING_WELCOME_PAGE = "onboarding_welcome_page_time_spent", t.ONBOARDING_INVITE_PAGE = "onboarding_invite_page_time_spent", t.ONBOARDING_MOBILE_DOWNLOAD_PAGE = "onboarding_mobile_download_page_time_spent", t.VM_DISABLED_PAGE = "vm_disabled_page_time_spent", t.ONBOARDING_ERROR_PAGE = "onboarding_error_page_time_spent", t.GEO_BLOCKED_PAGE = "geo_blocked_page_time_spent", t.AGE_BLOCKED_PAGE = "age_blocked_page_time_spent", t.ONBOARDING_FLOW_PAGE = "onboarding_flow_page_time_spent", t.SAVE_CARD_PAGE = "save_card_page_time_spent", t.ARTIFACT_SHARE_PAGE = "artifact_share_page_time_spent", t.MEDIA_SHARE_PAGE = "media_share_page_time_spent", t.AC_OAUTH_CONNECT_PAGE = "ac_oauth_connect_time_spent", t.CONNECT_COMPLETE_PAGE = "connect_complete_page_time_spent", t.OAUTH_CONNECT_PAGE = "oauth_connect_page_time_spent", t.PASSWORD_CONNECT_PAGE = "password_connect_page_time_spent", t.API_KEY_CONNECT_PAGE = "api_key_connect_page_time_spent", t.BROWSER_CREDENTIAL_CAPTURE_PAGE = "browser_credential_capture_page_time_spent", t.MESSENGER_CONNECT_PAGE = "messenger_connect_page_time_spent", t.WHATSAPP_COMPANION_CONNECT_PAGE = "whatsapp_companion_connect_page_time_spent", t.WHATSAPP_ACTIVATION_PAGE = "whatsapp_activation_page_time_spent", t.INSTAGRAM_CONNECT_PAGE = "instagram_connect_page_time_spent", t.INSTAGRAM_MESSAGES_CONNECT_PAGE = "instagram_messages_connect_page_time_spent", t.THREADS_CONNECT_PAGE = "threads_connect_page_time_spent", t.THREADS_MESSAGES_CONNECT_PAGE = "threads_messages_connect_page_time_spent", t.MESSENGER_DISCONNECT_PAGE = "messenger_disconnect_page_time_spent", t.FACEBOOK_CONNECT_PAGE = "facebook_connect_page_time_spent", t.FACEBOOK_DISCONNECT_PAGE = "facebook_disconnect_page_time_spent", t.SETTINGS_GENERAL_TAB = "settings_general_tab_time_spent", t.SETTINGS_TRUSTED_NETWORK = "settings_trusted_network_time_spent", t.SETTINGS_LANGUAGE_PREFERENCE = "settings_language_preference_time_spent", t.SETTINGS_IMESSAGE = "settings_imessage_time_spent", t.SETTINGS_CHANNELS_TAB = "settings_channels_tab_time_spent", t.SETTINGS_DATA_PRIVACY_TAB = "settings_data_privacy_tab_time_spent", t.SETTINGS_IMPORT_MEMORY_VIEW = "settings_import_memory_view_time_spent", t.SETTINGS_ENCRYPTION_TAB = "settings_encryption_tab_time_spent", t.SETTINGS_WALLET_TAB = "settings_wallet_tab_time_spent", t.SETTINGS_PERMISSIONS_TAB = "settings_permissions_tab_time_spent", t.SETTINGS_VAULT_TAB = "settings_vault_tab_time_spent", t.SETTINGS_HELP_SUPPORT_TAB = "settings_help_support_tab_time_spent", t.SETTINGS_LEGAL_SAFETY_TAB = "settings_legal_safety_tab_time_spent", t.SETTINGS_DEVICES_TAB = "settings_devices_tab_time_spent", t.SETTINGS_VOICE_TAB = "settings_voice_tab_time_spent", t.SETTINGS_VOICE_PICKER = "settings_voice_picker_time_spent", t.LOGIN_PAGE = "login_page_time_spent", t.SUPPORT_PAGE = "support_page_time_spent", t.MEDIA_VIEWER = "media_viewer_time_spent", t.FILE_EDITOR = "file_editor_time_spent", t.PPTX_PRESENTATION = "pptx_presentation_time_spent", t.SPACE_DEBUG_PANEL = "space_debug_panel_time_spent", t.TERMS_PAGE = "terms_page_time_spent", t.DEVELOPER_CONNECTOR_TERMS_PAGE = "developer_connector_terms_page_time_spent", t.DEVELOPER_PLATFORM_DOCS_PAGE = "developer_platform_docs_page_time_spent", t.PRIVACY_PAGE = "privacy_page_time_spent", t.IDEAS_DEBUG_PANEL = "ideas_debug_panel_time_spent", t);
  e.s(["HatchTimeSpentEvent", () => a])
}, 503610, e => {
  "use strict";
  let t = ["hatch_vm", "hatch_cvm"],
    a = ["CVM_AWAITING_DST_VM_CHIP_SELECTION", "CVM_DST_VM_STARTING", "CVM_DST_VM_FAILED_TO_START", "CVM_LOCKED"],
    n = ["UNKNOWN", "CREATING", "RUNNING", "STOPPED", "DELETING", "ERROR", "SUSPENDED", "UPDATING", "DISABLED", ...a];
  e.s(["HATCH_CVM_REPLACEMENT_STATES", 0, a, "normalizeHatchVmInventoryType", 0, function(e) {
    return t.find(t => t === e) ?? null
  }, "normalizeHatchVmLifecycleState", 0, function(e) {
    return n.find(t => t === e) ?? null
  }, "normalizeHatchVmReplaceAttemptId", 0, function(e) {
    return "string" == typeof e && e.trim().length > 0 ? e : null
  }, "normalizeHatchVmStateSource", 0, function(e) {
    return "live" === e || "cache" === e ? e : null
  }])
}]);

//# debugId=b10a0e1b-2ba1-bd39-dc89-373d9cbb2232
//# sourceMappingURL=29bq7frl4mgcw.js.map