;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "9f0aad9f-71c3-177b-c6c0-483012d236bb")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 786521, e => {
  "use strict";
  var t = e.i(743723);
  let n = (0, t.createServerReference)("007342d6753eb11d0939b6b2c1e688ed6d2a9d077f", t.callServer, void 0, t.findSourceMapURL, "startSurveyAction");
  e.s(["startSurveyAction", 0, n])
}, 346577, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(374785);
  let i = {
      small: {
        border: 2,
        diameter: 8
      },
      medium: {
        border: 3,
        diameter: 18
      }
    },
    l = `
@keyframes hatch-spinner-dash {
  0% { stroke-dasharray: 1 100; stroke-dashoffset: 0; }
  50% { stroke-dasharray: 71 100; stroke-dashoffset: -28; }
  100% { stroke-dasharray: 71 100; stroke-dashoffset: -99; }
}
@media (prefers-reduced-motion: no-preference) {
  .hatch-spinner-breathing-dash {
    animation: hatch-spinner-dash 1.5s ease-in-out infinite;
  }
}
`,
    a = {
      primary: "text-text-primary",
      secondary: "text-text-secondary",
      white: "text-white",
      currentColor: "text-current"
    };
  e.s(["HatchSpinner", 0, function(e) {
    let s, c, o, u, d, C, h = (0, n.c)(35),
      {
        size: f,
        color: m,
        variant: p,
        isDecorative: y,
        className: g
      } = e,
      x = void 0 === f ? "medium" : f,
      b = void 0 === p ? "breathing" : p,
      _ = void 0 !== y && y;
    h[0] !== x ? (s = "number" == typeof x ? {
      border: Math.max(2, Math.round(3 * (x / i.medium.diameter))),
      diameter: x
    } : i[x], h[0] = x, h[1] = s) : s = h[1];
    let {
      border: v,
      diameter: S
    } = s, H = S / 2, w = S + 2 * v, j = w / 2, A = `0 0 ${w} ${w}`, k = _ ? "none" : "progressbar", L = !!_ || void 0;
    h[2] !== w || h[3] !== A || h[4] !== k || h[5] !== L ? (c = {
      width: w,
      height: w,
      viewBox: A,
      role: k,
      "aria-hidden": L
    }, h[2] = w, h[3] = A, h[4] = k, h[5] = L, h[6] = c) : c = h[6];
    let R = c,
      E = "rotating" === b ? "motion-safe:[animation-duration:750ms]" : "motion-safe:[animation-duration:2000ms]",
      V = a[void 0 === m ? "primary" : m];
    h[7] !== g || h[8] !== E || h[9] !== V ? (o = (0, r.cn)("inline-block align-middle motion-safe:animate-spin", E, V, g), h[7] = g, h[8] = E, h[9] = V, h[10] = o) : o = h[10];
    let M = o;
    if ("rotating" === b) {
      let e, n, r, i, l = 1.5 * Math.PI,
        a = .25 * Math.PI;
      if (h[11] !== j || h[12] !== H) {
        let t, n, r, i, s;
        t = j + H * Math.cos(l), n = j + H * Math.sin(l), r = j + H * Math.cos(a), i = j + H * Math.sin(a), s = +(a - l > Math.PI), e = `M ${t} ${n} A ${H} ${H} 0 ${s} 1 ${r} ${i}`, h[11] = j, h[12] = H, h[13] = e
      } else e = h[13];
      let s = e;
      return h[14] !== v || h[15] !== j || h[16] !== H ? (n = (0, t.jsx)("circle", {
        cx: j,
        cy: j,
        r: H,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: v,
        opacity: .15
      }), h[14] = v, h[15] = j, h[16] = H, h[17] = n) : n = h[17], h[18] !== v || h[19] !== s ? (r = (0, t.jsx)("path", {
        d: s,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: v,
        strokeLinecap: "round"
      }), h[18] = v, h[19] = s, h[20] = r) : r = h[20], h[21] !== R || h[22] !== n || h[23] !== r || h[24] !== M ? (i = (0, t.jsxs)("svg", {
        ...R,
        className: M,
        children: [n, r]
      }), h[21] = R, h[22] = n, h[23] = r, h[24] = M, h[25] = i) : i = h[25], i
    }
    return h[26] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, t.jsx)("style", {
      href: "hatch-spinner-breathing",
      precedence: "default",
      children: l
    }), h[26] = u) : u = h[26], h[27] !== v || h[28] !== j || h[29] !== H ? (d = (0, t.jsx)("circle", {
      cx: j,
      cy: j,
      r: H,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: v,
      strokeLinecap: "round",
      pathLength: 100,
      strokeDasharray: "71 100",
      className: "hatch-spinner-breathing-dash"
    }), h[27] = v, h[28] = j, h[29] = H, h[30] = d) : d = h[30], h[31] !== R || h[32] !== d || h[33] !== M ? (C = (0, t.jsxs)(t.Fragment, {
      children: [u, (0, t.jsx)("svg", {
        ...R,
        className: M,
        children: d
      })]
    }), h[31] = R, h[32] = d, h[33] = M, h[34] = C) : C = h[34], C
  }])
}, 525594, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(519172);
  e.s(["useRetryableLazy", 0, function(e, r) {
    let i, l, a = (0, t.c)(5),
      [s, c] = (0, n.useState)(e);
    a[0] !== r ? (i = () => {
      c(() => (0, n.lazy)(r))
    }, a[0] = r, a[1] = i) : i = a[1];
    let o = i;
    return a[2] !== s || a[3] !== o ? (l = {
      Component: s,
      retry: o
    }, a[2] = s, a[3] = o, a[4] = l) : l = a[4], l
  }])
}, 299185, e => {
  "use strict";
  var t = e.i(513116);
  async function n(e, r = (0, t.captureHatchSessionRecovery)()) {
    let i = await e();
    if (null != i && "object" == typeof i && "sessionRecovery" in i) {
      let e = i.sessionRecovery;
      null != e && "object" == typeof e && "scope" in e && "hatch" === e.scope && "reason" in e && ("authentication" === e.reason || "checkpoint" === e.reason) && await r(e.reason)
    }
    return i
  }
  e.s(["runHatchActionWithSessionRecovery", 0, n])
}, 399678, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(519172),
    r = e.i(359783),
    i = e.i(175286),
    l = e.i(14751),
    a = e.i(871157);
  let s = "ACTIVITY_FEED_GOALS";
  var c = e.i(285442),
    o = e.i(508180);
  let u = (0, r.createClientLogger)("HatchActivity");

  function d(e) {
    let t = null,
      n = 1 / 0;
    for (let r of e)
      for (let e of r.activities) {
        let r = (0, c.parseDate)(e.timestamp)?.getTime();
        null != r && r < n && (t = e.timestamp, n = r)
      }
    return t
  }
  let C = (0, n.createContext)(null);
  e.s(["HatchActivityProvider", 0, function({
    children: e
  }) {
    let {
      connectionState: r,
      isReady: h,
      sendRequest: f,
      onEvent: m,
      gatewayUrl: p,
      vmName: y
    } = (0, i.useHatchRpc)(), g = (0, a.gatewayTargetKey)(p, y), [x, b] = (0, n.useState)(!1), _ = (0, n.useRef)(!1), v = (0, n.useRef)(null), S = (0, n.useRef)(!1), H = (0, n.useRef)(null), w = (0, n.useRef)(null), j = (0, n.useRef)(!1), A = (0, n.useCallback)(() => {
      _.current || (_.current = !0, b(!0))
    }, []), k = (0, n.useCallback)(async () => {
      if (!(0, l.isMethodReadyForTransport)({
          method: "activity.list",
          gatewayUrl: p,
          isWsReady: h
        })) return !1;
      o.setTimelineLoadError(!1), o.setTimelineLoading(!0);
      try {
        let e = (await f("activity.list", {
            limit: 30,
            before: null,
            capabilities: [s]
          })).days ?? [],
          t = j.current,
          n = null != d(e);
        return (0 === e.length || n) && (j.current = !1), S.current = !0, o.setTimelineDays(e, e.length > 0 && (!t || n)), !0
      } catch (t) {
        let e = o.getSnapshot().activity.days.length > 0;
        return u.retainForBugReport("warn", "activity.list failed"), o.setTimelineLoadError(!e), !1
      } finally {
        o.setTimelineLoading(!1)
      }
    }, [r, h, p, f]), L = (0, n.useCallback)(() => {
      A(), null != p && (0, l.isMethodReadyForTransport)({
        method: "activity.list",
        gatewayUrl: p,
        isWsReady: h
      }) && (v.current = g), k()
    }, [k, p, h, A, g]), R = (0, n.useCallback)(async () => {
      if (!_.current) return void A();
      if (!(0, l.isMethodReadyForTransport)({
          method: "activity.list",
          gatewayUrl: p,
          isWsReady: h
        })) return;
      let {
        days: e,
        isLoadingMore: t,
        hasMore: n
      } = o.getSnapshot().activity;
      if (t || !n) return;
      let r = d(e);
      if (null == r) {
        j.current = !0, o.setTimelineHasMore(!1);
        return
      }
      o.setTimelineLoadingMore(!0);
      try {
        let e = (await f("activity.list", {
          limit: 30,
          before: r,
          capabilities: [s]
        })).days ?? [];
        o.appendTimelineDays(e, e.length > 0)
      } catch (e) {
        u.retainForBugReport("warn", "activity.list failed")
      } finally {
        o.setTimelineLoadingMore(!1)
      }
    }, [r, h, p, A, f]);
    (0, n.useEffect)(() => {
      x && (0, l.isMethodReadyForTransport)({
        method: "activity.list",
        gatewayUrl: p,
        isWsReady: h
      }) && null != p && v.current !== g && (v.current = g, k())
    }, [p, h, k, g, x]), (0, n.useEffect)(() => {
      if (!h) {
        w.current = null;
        return
      }
      if (!x || null == p || w.current === g) return;
      w.current = g;
      let e = H.current === g;
      H.current = g, f("activity.subscribe", {
        capabilities: [s]
      }).catch(e => {
        u.retainForBugReport("warn", "activity.subscribe failed")
      }), e && S.current && k()
    }, [r, p, h, f, k, g, x]), (0, n.useEffect)(() => {
      if (x) return m("activity.updated", e => {
        o.upsertTimelineAction(e), j.current && null != (0, c.parseDate)(e.timestamp) && (j.current = !1, o.setTimelineHasMore(!0))
      })
    }, [m, x]);
    let E = (0, n.useMemo)(() => ({
      fetchActivities: L,
      loadMore: R,
      requestActivityWork: A
    }), [L, R, A]);
    return (0, t.jsx)(C.Provider, {
      value: E,
      children: e
    })
  }, "useHatchActivityActions", 0, function() {
    let e = (0, n.useContext)(C);
    if (!e) throw Error("useHatchActivityActions must be used within a HatchActivityProvider");
    return e
  }], 399678)
}, 49987, e => {
  "use strict";
  let t = ["tl", "tm", "tr", "ml", "mr", "bl", "bm", "br"],
    n = {
      left: 92,
      right: 88,
      top: 16,
      bottom: 16
    };

  function r(e, t, n) {
    return Math.max(t, Math.min(n, e))
  }

  function i(e, t, l, a = {}) {
    let {
      safeInsets: s = n,
      bottomAttachmentHeight: c = 0
    } = a, o = function(e, t = n) {
      let r = t.left,
        i = t.top,
        l = Math.max(r, e.width - t.right),
        a = Math.max(i, e.height - t.bottom);
      return {
        left: r,
        top: i,
        right: l,
        bottom: a,
        width: Math.max(0, l - r),
        height: Math.max(0, a - i)
      }
    }(t, s), u = Math.max(o.left, o.right - l.width), d = Math.max(o.top, o.bottom - l.height), C = r(o.left + (o.width - l.width) / 2, o.left, u), h = r(o.top + (o.height - l.height) / 2, o.top, d), f = c > 0 ? Math.max(o.top, Math.min(t.height - c - l.height, t.height - l.height)) : d;
    switch (e) {
      case "tl":
        return {
          x: o.left, y: o.top
        };
      case "tm":
        return {
          x: C, y: o.top
        };
      case "tr":
        return {
          x: u, y: o.top
        };
      case "ml":
        return {
          x: o.left, y: h
        };
      case "mr":
        return {
          x: u, y: h
        };
      case "bl":
        return {
          x: o.left, y: f
        };
      case "bm":
        return {
          x: C, y: f
        };
      case "br":
        return {
          x: u, y: f
        }
    }
  }
  e.s(["HATCH_DEVELOPER_TOOLS_ANCHORS", 0, t, "HATCH_DEVELOPER_TOOLS_DEFAULT_ANCHOR", 0, "bl", "getHatchDeveloperToolsAnchorPosition", 0, i, "getHatchDeveloperToolsNearestAnchor", 0, function(e, n, r, l = {}) {
    return t.reduce((t, a) => {
      let s = i(a, n, r, l),
        c = s.x + r.width / 2,
        o = s.y + r.height / 2,
        u = Math.hypot(e.x - c, e.y - o);
      return u < t.distance ? {
        anchor: a,
        distance: u
      } : t
    }, {
      anchor: "bl",
      distance: 1 / 0
    }).anchor
  }, "isBottomRowAnchor", 0, function(e) {
    return "bl" === e || "bm" === e || "br" === e
  }])
}, 745427, 191488, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(519172),
    r = e.i(890089);
  let i = (0, n.createContext)(null);
  e.s(["HatchFlightPanelContext", 0, i], 191488), e.s(["useHatchFlightPanelController", 0, function() {
    let e, i, l, a, s = (0, t.c)(6);
    s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
      kind: "closed"
    }, s[0] = e) : e = s[0];
    let [c, o] = (0, n.useState)(e);
    s[1] === Symbol.for("react.memo_cache_sentinel") ? (i = e => {
      (0, r.captureHatchChatScrollHold)("contextual-panel"), o({
        kind: "details",
        offer: e.offer,
        presentationId: e.presentationId
      })
    }, s[1] = i) : i = s[1];
    let u = i;
    s[2] === Symbol.for("react.memo_cache_sentinel") ? (l = () => {
      (0, r.captureHatchChatScrollHold)("contextual-panel"), o({
        kind: "closed"
      })
    }, s[2] = l) : l = s[2];
    let d = l,
      C = "closed" !== c.kind;
    return s[3] !== c || s[4] !== C ? (a = {
      state: c,
      isOpen: C,
      openDetails: u,
      close: d
    }, s[3] = c, s[4] = C, s[5] = a) : a = s[5], a
  }, "useOptionalHatchFlightPanel", 0, function() {
    return (0, n.useContext)(i)
  }], 745427)
}, 258271, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(519172),
    r = e.i(602412),
    i = e.i(890089);
  e.s(["useHatchPlaceDetailsPanel", 0, function() {
    let e = (0, n.useContext)(r.HatchPlaceDetailsPanelContext);
    if (null == e) throw Error("useHatchPlaceDetailsPanel must be used within a HatchPlaceDetailsPanelProvider");
    return e
  }, "useHatchPlaceDetailsPanelController", 0, function() {
    let e, r, l, a, s = (0, t.c)(6);
    s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
      kind: "closed"
    }, s[0] = e) : e = s[0];
    let [c, o] = (0, n.useState)(e);
    s[1] === Symbol.for("react.memo_cache_sentinel") ? (r = e => {
      (0, i.captureHatchChatScrollHold)("contextual-panel"), o({
        kind: "details",
        placeId: e.placeId,
        basicInfo: e.basicInfo,
        ...null != e.motivation ? {
          motivation: e.motivation
        } : {},
        ...null != e.callerRequestId ? {
          callerRequestId: e.callerRequestId
        } : {}
      })
    }, s[1] = r) : r = s[1];
    let u = r;
    s[2] === Symbol.for("react.memo_cache_sentinel") ? (l = () => {
      (0, i.captureHatchChatScrollHold)("contextual-panel"), o({
        kind: "closed"
      })
    }, s[2] = l) : l = s[2];
    let d = l,
      C = "closed" !== c.kind;
    return s[3] !== c || s[4] !== C ? (a = {
      state: c,
      isOpen: C,
      openDetails: u,
      close: d
    }, s[3] = c, s[4] = C, s[5] = a) : a = s[5], a
  }])
}, 602412, e => {
  "use strict";
  let t = (0, e.i(519172).createContext)(null);
  e.s(["HatchPlaceDetailsPanelContext", 0, t])
}, 51726, e => {
  "use strict";
  var t = e.i(519172);
  let n = (0, t.createContext)(null);
  e.s(["HatchSettingsControlContext", 0, n, "useHatchSettingsControl", 0, function() {
    return (0, t.useContext)(n)
  }])
}, 733648, 638237, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(519172),
    i = e.i(325814),
    l = e.i(44698),
    a = e.i(397240),
    s = e.i(701021),
    c = e.i(345717),
    o = e.i(406747),
    u = e.i(379748),
    d = e.i(607442),
    C = e.i(871627),
    h = e.i(444971),
    f = e.i(634515),
    m = e.i(889888),
    p = e.i(575898),
    y = e.i(227924),
    g = e.i(868445),
    x = e.i(882958),
    b = e.i(391065),
    _ = e.i(590328),
    v = e.i(646361),
    S = e.i(832964),
    H = e.i(295967),
    w = e.i(185222);
  let j = () => {};

  function A(e) {
    let r, i, l, a, s, d, C, _, v, S, H, A, k, L, R, E, V, M, T, P, N, I = (0, n.c)(24),
      {
        surface: D
      } = e;
    I[0] === Symbol.for("react.memo_cache_sentinel") ? (r = c.fbs._("General", null, {
      hk: "45XkTb"
    }), I[0] = r) : r = I[0], I[1] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)(w.SettingsTabButton, {
      icon: p.default,
      label: String(r),
      isActive: !1,
      onClick: j
    }), I[1] = i) : i = I[1], I[2] === Symbol.for("react.memo_cache_sentinel") ? (l = c.fbs._("Connectors", null, {
      hk: "1xEQA7"
    }), I[2] = l) : l = I[2], I[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)(w.SettingsTabButton, {
      icon: o.default,
      label: String(l),
      isActive: !1,
      onClick: j
    }), I[3] = a) : a = I[3], I[4] === Symbol.for("react.memo_cache_sentinel") ? (s = c.fbs._("Wallet", null, {
      hk: "3IQU2p"
    }), I[4] = s) : s = I[4], I[5] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, t.jsx)(w.SettingsTabButton, {
      icon: u.default,
      label: String(s),
      isActive: !1,
      onClick: j
    }), I[5] = d) : d = I[5], I[6] !== D ? (C = "rail" === D ? c.fbs._("Secure store", null, {
      hk: "tKiT"
    }) : c.fbs._("Secure credentials store", null, {
      hk: "40YSIl"
    }), I[6] = D, I[7] = C) : C = I[7];
    let F = String(C);
    return I[8] !== F ? (_ = (0, t.jsx)(w.SettingsTabButton, {
      icon: g.default,
      label: F,
      isActive: !1,
      onClick: j
    }), I[8] = F, I[9] = _) : _ = I[9], I[10] === Symbol.for("react.memo_cache_sentinel") ? (v = c.fbs._("Permissions", null, {
      hk: "AMbEN"
    }), I[10] = v) : v = I[10], I[11] === Symbol.for("react.memo_cache_sentinel") ? (S = (0, t.jsx)(w.SettingsTabButton, {
      icon: x.default,
      label: String(v),
      isActive: !1,
      onClick: j
    }), I[11] = S) : S = I[11], I[12] === Symbol.for("react.memo_cache_sentinel") ? (H = c.fbs._("Messaging channels", null, {
      hk: "USZAz"
    }), I[12] = H) : H = I[12], I[13] === Symbol.for("react.memo_cache_sentinel") ? (A = (0, t.jsx)(w.SettingsTabButton, {
      icon: b.default,
      label: String(H),
      isActive: !1,
      onClick: j
    }), I[13] = A) : A = I[13], I[14] === Symbol.for("react.memo_cache_sentinel") ? (k = c.fbs._("Devices", null, {
      hk: "3Rrbtu"
    }), I[14] = k) : k = I[14], I[15] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, t.jsx)(w.SettingsTabButton, {
      icon: f.default,
      label: String(k),
      isActive: !1,
      onClick: j
    }), I[15] = L) : L = I[15], I[16] === Symbol.for("react.memo_cache_sentinel") ? (R = c.fbs._("Data controls", null, {
      hk: "3JOFH2"
    }), I[16] = R) : R = I[16], I[17] === Symbol.for("react.memo_cache_sentinel") ? (E = (0, t.jsx)(w.SettingsTabButton, {
      icon: m.default,
      label: String(R),
      isActive: !1,
      onClick: j
    }), I[17] = E) : E = I[17], I[18] === Symbol.for("react.memo_cache_sentinel") ? (V = c.fbs._("Help & support", null, {
      hk: "1OMpAb"
    }), I[18] = V) : V = I[18], I[19] === Symbol.for("react.memo_cache_sentinel") ? (M = (0, t.jsx)(w.SettingsTabButton, {
      icon: h.default,
      label: String(V),
      isActive: !1,
      onClick: j
    }), I[19] = M) : M = I[19], I[20] === Symbol.for("react.memo_cache_sentinel") ? (T = c.fbs._("Legal info", null, {
      hk: "3kHGH0"
    }), I[20] = T) : T = I[20], I[21] === Symbol.for("react.memo_cache_sentinel") ? (P = (0, t.jsx)(w.SettingsTabButton, {
      icon: y.default,
      label: String(T),
      isActive: !1,
      onClick: j
    }), I[21] = P) : P = I[21], I[22] !== _ ? (N = (0, t.jsxs)(t.Fragment, {
      children: [i, a, d, _, S, A, L, E, M, P]
    }), I[22] = _, I[23] = N) : N = I[23], N
  }

  function k() {
    let e, r, l, a, s, o, u, h, f, m, p, y, g, x, b, k, L, M = (0, n.c)(17);
    return M[0] === Symbol.for("react.memo_cache_sentinel") ? (e = c.fbs._("Loading settings", null, {
      hk: "3oGc5q"
    }), M[0] = e) : e = M[0], M[1] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)(_.Flexbox, {
      alignItems: "center",
      className: "h-15 shrink-0 ps-6 pe-4",
      children: (0, t.jsx)(i.DialogTitle, {
        className: "text-text-primary text-title-3-emphasized",
        children: c.fbt._("Settings", null, {
          hk: "3WRST7"
        })
      })
    }), M[1] = r) : r = M[1], M[2] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)(_.Flexbox, {
      direction: "column",
      gap: 1,
      grow: 1,
      className: "px-4 pb-6",
      children: (0, t.jsx)(A, {
        surface: "rail"
      })
    }), M[2] = l) : l = M[2], M[3] === Symbol.for("react.memo_cache_sentinel") ? (a = c.fbs._("Log out", null, {
      hk: "2yMKrr"
    }), M[3] = a) : a = M[3], M[4] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsxs)(_.Flexbox, {
      direction: "column",
      shrink: 0,
      className: "min-h-0 w-56",
      children: [r, l, (0, t.jsx)("div", {
        className: "shrink-0 px-4 pb-4",
        children: (0, t.jsx)(w.SettingsTabButton, {
          icon: d.default,
          label: String(a),
          isActive: !1,
          onClick: j
        })
      })]
    }), M[4] = s) : s = M[4], M[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)("div", {
      className: "flex h-15 shrink-0 items-center gap-3 px-6",
      children: (0, t.jsx)("span", {
        className: "text-text-primary text-title-3-emphasized",
        children: c.fbt._("General", null, {
          hk: "4toO1S"
        })
      })
    }), M[5] = o) : o = M[5], M[6] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, t.jsx)(S.Skeleton, {
      className: "size-7 shrink-0 rounded-full",
      "aria-hidden": "true"
    }), M[6] = u) : u = M[6], M[7] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, t.jsx)(S.Skeleton, {
      className: "my-0.5 h-4 w-32 rounded-full",
      "aria-hidden": "true"
    }), M[7] = h) : h = M[7], M[8] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, t.jsx)(R, {
      children: (0, t.jsxs)("div", {
        className: "flex min-h-[44px] items-center gap-3 px-3 py-2",
        children: [u, (0, t.jsxs)("div", {
          className: "flex min-w-0 flex-1 flex-col",
          children: [h, (0, t.jsx)("span", {
            className: "text-text-secondary text-footnote",
            children: c.fbt._("Password, security, personal details", null, {
              hk: "3eqxqZ"
            })
          })]
        }), (0, t.jsx)(v.HatchIcon, {
          icon: C.default,
          size: 18,
          className: "text-text-tertiary shrink-0"
        })]
      })
    }), M[8] = f) : f = M[8], M[9] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, t.jsx)("h2", {
      className: "text-subheadline-emphasized text-text-secondary mb-1.5",
      children: c.fbt._("Usage", null, {
        hk: "Kq0n0"
      })
    }), M[9] = m) : m = M[9], M[10] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, t.jsxs)("div", {
      className: "flex min-h-[44px] items-center justify-between gap-3 px-3 py-2",
      children: [(0, t.jsx)(S.Skeleton, {
        "aria-hidden": "true",
        className: "h-4 w-28"
      }), (0, t.jsx)(S.Skeleton, {
        "aria-hidden": "true",
        className: "h-4 w-16"
      })]
    }), y = (0, t.jsx)(E, {}), M[10] = p, M[11] = y) : (p = M[10], y = M[11]), M[12] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, t.jsxs)("div", {
      children: [m, (0, t.jsxs)(R, {
        children: [p, y, (0, t.jsxs)("div", {
          className: "flex min-h-[44px] items-center justify-between gap-3 px-3 py-2",
          children: [(0, t.jsx)(S.Skeleton, {
            "aria-hidden": "true",
            className: "h-4 w-24"
          }), (0, t.jsx)(S.Skeleton, {
            "aria-hidden": "true",
            className: "h-4 w-20"
          })]
        })]
      })]
    }), M[12] = g) : g = M[12], M[13] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, t.jsx)("h2", {
      className: "text-subheadline-emphasized text-text-secondary mb-1.5",
      children: c.fbt._("Appearance", null, {
        hk: "2pkD05"
      })
    }), M[13] = x) : x = M[13], M[14] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, t.jsx)(V, {
      label: c.fbt._("Mode", null, {
        hk: "3CTP5z"
      })
    }), k = (0, t.jsx)(E, {}), M[14] = b, M[15] = k) : (b = M[14], k = M[15]), M[16] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, t.jsx)(H.LoadingState, {
      name: "settings_dialog",
      className: "flex min-h-0 flex-1 flex-row",
      children: (0, t.jsxs)("div", {
        role: "status",
        "aria-busy": "true",
        "aria-label": e,
        className: "flex min-h-0 flex-1 flex-row motion-reduce:[&_*]:!animate-none",
        children: [s, (0, t.jsxs)("div", {
          className: "border-fill-divider relative flex min-h-0 flex-1 flex-col border-s",
          children: [o, (0, t.jsxs)("div", {
            className: "flex flex-col gap-6 overflow-hidden pb-4 md:px-6",
            children: [f, g, (0, t.jsxs)("div", {
              children: [x, (0, t.jsxs)(R, {
                children: [b, k, (0, t.jsx)(V, {
                  label: c.fbt._("Theme color", null, {
                    hk: "BX0r6"
                  })
                })]
              })]
            })]
          })]
        })]
      })
    }), M[16] = L) : L = M[16], L
  }

  function L() {
    let e, r, i, a = (0, n.c)(3);
    return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = c.fbs._("Loading settings", null, {
      hk: "MqDc3"
    }), a[0] = e) : e = a[0], a[1] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)("div", {
      className: "flex h-12 items-center ps-7 pe-4",
      children: (0, t.jsx)(l.SheetTitle, {
        className: "text-text-primary text-body-emphasized",
        children: c.fbt._("Settings", null, {
          hk: "2GL5Zq"
        })
      })
    }), a[1] = r) : r = a[1], a[2] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)(H.LoadingState, {
      name: "settings_dialog",
      className: "flex min-h-0 flex-1 flex-col",
      children: (0, t.jsxs)("div", {
        role: "status",
        "aria-busy": "true",
        "aria-label": e,
        className: "flex min-h-0 flex-1 flex-col motion-reduce:[&_*]:!animate-none",
        children: [r, (0, t.jsx)(_.Flexbox, {
          direction: "column",
          gap: 1,
          className: "px-4 pb-4",
          children: (0, t.jsx)(A, {
            surface: "sheet"
          })
        })]
      })
    }), a[2] = i) : i = a[2], i
  }

  function R(e) {
    let r, i = (0, n.c)(2),
      {
        children: l
      } = e;
    return i[0] !== l ? (r = (0, t.jsx)("div", {
      className: "bg-fill-secondary-elevated rounded-16 p-1.5",
      children: l
    }), i[0] = l, i[1] = r) : r = i[1], r
  }

  function E() {
    let e, r = (0, n.c)(1);
    return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("div", {
      className: "mx-3 h-px bg-black/[0.04] dark:bg-white/[0.06]"
    }), r[0] = e) : e = r[0], e
  }

  function V(e) {
    let r, i = (0, n.c)(2),
      {
        label: l
      } = e;
    return i[0] !== l ? (r = (0, t.jsx)("div", {
      className: "flex min-h-[44px] items-center justify-between gap-3 px-3 py-2",
      children: (0, t.jsx)("span", {
        className: "text-text-primary text-subheadline-medium",
        children: l
      })
    }), i[0] = l, i[1] = r) : r = i[1], r
  }
  var M = e.i(986907),
    T = e.i(301970);
  let P = null,
    N = null,
    I = new Set;

  function D() {
    return null == P && (P = e.A(862035).then(e => {
      for (let t of (N = e.HatchSettingsDialogContent, I)) t();
      return {
        default: e.HatchSettingsDialogContent
      }
    }).catch(e => {
      throw P = null, e
    })), P
  }

  function F() {
    return N
  }

  function Z(e) {
    return I.add(e), () => I.delete(e)
  }
  e.s(["getResolvedHatchSettingsDialogContent", 0, F, "loadHatchSettingsDialogContent", 0, D, "subscribeToHatchSettingsDialogContent", 0, Z], 638237);
  let O = (0, r.lazy)(D);

  function B() {
    return null
  }
  e.s(["HatchSettingsDialog", 0, function(e) {
    let c, o, u, d, C, h, f, m, p, y, g, x, b, _, v = (0, n.c)(35),
      S = (0, a.useIsMobileBreakpoint)(),
      {
        open: H,
        onOpenChange: w
      } = e,
      j = (0, r.useSyncExternalStore)(Z, F, B),
      A = (0, r.useRef)(null),
      R = (0, r.useRef)(null),
      E = (0, r.useRef)(!1);
    v[0] === Symbol.for("react.memo_cache_sentinel") ? (c = () => {
      null != R.current && (window.clearTimeout(R.current), R.current = null)
    }, v[0] = c) : c = v[0];
    let V = c;
    v[1] === Symbol.for("react.memo_cache_sentinel") ? (o = e => {
      V();
      let t = A.current;
      null != t && (A.current = null, (0, M.endManualTrace)(t, e))
    }, v[1] = o) : o = v[1];
    let P = o;
    v[2] !== j || v[3] !== S || v[4] !== H ? (u = () => {
      let e = E.current;
      if (E.current = H, !e && H) {
        let e = (0, M.startManualInteraction)(T.EctoInteractionTracePolicy.SETTINGS_OPEN, {
          debugName: "settings-dialog-open"
        });
        e.annotate({
          bool: {
            chunk_pre_resolved: null != j,
            is_mobile: S
          }
        }), A.current = e, V(), R.current = window.setTimeout(() => {
          R.current = null;
          let e = A.current;
          null != e && (e.annotate({
            string: {
              timeout_reason: "settings_open_timeout"
            }
          }), A.current = null, (0, M.endManualTrace)(e, "TIMEOUT"))
        }, 3e4)
      }
      e && !H && ((0, s.clearHatchPeerInviteHandoff)(), null != A.current && (A.current.annotate({
        string: {
          cancel_reason: "dialog_closed"
        }
      }), P("CANCEL")))
    }, d = [H, j, S, V, P], v[2] = j, v[3] = S, v[4] = H, v[5] = u, v[6] = d) : (u = v[5], d = v[6]), (0, r.useEffect)(u, d), v[7] !== j || v[8] !== H ? (C = () => {
      null != A.current && null != j && H && (A.current.markerPoint("visuallyComplete"), P("SUCCESS"))
    }, h = [j, H, P], v[7] = j, v[8] = H, v[9] = C, v[10] = h) : (C = v[9], h = v[10]), (0, r.useEffect)(C, h), v[11] === Symbol.for("react.memo_cache_sentinel") ? (f = () => () => {
      null != A.current && (A.current.annotate({
        string: {
          cancel_reason: "unmount"
        }
      }), P("CANCEL"))
    }, m = [P], v[11] = f, v[12] = m) : (f = v[11], m = v[12]), (0, r.useEffect)(f, m);
    let N = (0, r.useRef)(null);
    v[13] === Symbol.for("react.memo_cache_sentinel") ? (p = e => {
      N.current = e
    }, v[13] = p) : p = v[13];
    let I = p;
    v[14] !== w ? (y = e => {
      !e && null != N.current && N.current() || (e || (0, s.clearHatchPeerInviteHandoff)(), w(e))
    }, v[14] = w, v[15] = y) : y = v[15];
    let D = y;
    v[16] !== D || v[17] !== e ? (g = {
      ...e,
      onOpenChange: D,
      registerDismissInterceptor: I
    }, v[16] = D, v[17] = e, v[18] = g) : g = v[18];
    let U = g;
    v[19] !== j || v[20] !== U || v[21] !== S ? (x = null != j ? (0, t.jsx)(j, {
      ...U
    }) : (0, t.jsx)(r.Suspense, {
      fallback: S ? (0, t.jsx)(L, {}) : (0, t.jsx)(k, {}),
      children: (0, t.jsx)(O, {
        ...U
      })
    }), v[19] = j, v[20] = U, v[21] = S, v[22] = x) : x = v[22];
    let z = x;
    if (S) {
      let e, n;
      return v[23] !== z ? (e = (0, t.jsx)(l.SheetContent, {
        side: "bottom",
        showCloseButton: !1,
        className: "flex max-h-[85vh] flex-col gap-0 pb-8",
        children: z
      }), v[23] = z, v[24] = e) : e = v[24], v[25] !== D || v[26] !== H || v[27] !== e ? (n = (0, t.jsx)(l.Sheet, {
        open: H,
        onOpenChange: D,
        children: e
      }), v[25] = D, v[26] = H, v[27] = e, v[28] = n) : n = v[28], n
    }
    return v[29] !== z ? (b = (0, t.jsx)(i.DialogContent, {
      className: "h-[600px] max-w-[50rem]",
      contentClassName: "flex min-h-0 flex-1 flex-row gap-0 px-0 pb-0 overflow-hidden",
      showCloseButton: !1,
      children: z
    }), v[29] = z, v[30] = b) : b = v[30], v[31] !== D || v[32] !== H || v[33] !== b ? (_ = (0, t.jsx)(i.Dialog, {
      open: H,
      onOpenChange: D,
      children: b
    }), v[31] = D, v[32] = H, v[33] = b, v[34] = _) : _ = v[34], _
  }], 733648)
}, 650166, e => {
  "use strict";
  var t = e.i(519172);
  let n = (0, t.createContext)(null);
  e.s(["HatchShellRouteSurfaceCloseContext", 0, n, "useHatchShellRouteSurfaceClose", 0, function() {
    return (0, t.useContext)(n)
  }])
}, 218105, e => {
  "use strict";
  let t = (0, e.i(519172).createContext)(null);
  e.s(["HATCH_OPEN_APPROVALS_PANEL_EVENT", 0, "hatch:open-approvals-panel", "HATCH_STATUS_PANEL_APPROVALS_VALUE", 0, "approvals", "HATCH_STATUS_PANEL_QUERY_PARAM", 0, "status_panel", "HatchStatusPanelContext", 0, t])
}, 864969, e => {
  "use strict";
  e.s(["HATCH_STATUS_PANEL_AVATAR_SIZE_PX", 0, 100, "HATCH_STATUS_PANEL_AVATAR_SLOT_HEIGHT_PX", 0, 160, "HATCH_STATUS_PANEL_HEADER_HEIGHT_PX", 0, 70, "HATCH_STATUS_PANEL_WIDTH_PX", 0, 360])
}, 858889, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(345717),
    i = e.i(295967),
    l = e.i(832964),
    a = e.i(239286);

  function s(e, n) {
    return (0, t.jsx)(l.Skeleton, {
      className: "rounded-12 h-12 w-full",
      strength: "medium"
    }, n)
  }
  e.s(["HatchStatusPanelActivityLoadingState", 0, function() {
    let e, l, s = (0, n.c)(2);
    return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = r.fbs._("Loading activity", null, {
      hk: "24bOrl"
    }), s[0] = e) : e = s[0], s[1] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)(i.LoadingState, {
      name: "status_panel",
      role: "status",
      "aria-busy": "true",
      "aria-label": e,
      className: "flex items-center justify-center px-4 py-8",
      children: (0, t.jsx)(a.Spinner, {
        size: 20
      })
    }), s[1] = l) : l = s[1], l
  }, "HatchStatusPanelTabSkeleton", 0, function() {
    let e, a, c, o = (0, n.c)(3);
    return o[0] === Symbol.for("react.memo_cache_sentinel") ? (e = r.fbs._("Loading status details", null, {
      hk: "Imv28"
    }), o[0] = e) : e = o[0], o[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsxs)("div", {
      "aria-hidden": "true",
      className: "bg-fill-secondary rounded-12 space-y-3 p-4",
      children: [(0, t.jsx)(l.Skeleton, {
        className: "h-5 w-2/5 rounded"
      }), (0, t.jsx)(l.Skeleton, {
        className: "h-4 w-4/5 rounded",
        strength: "medium"
      }), (0, t.jsx)(l.Skeleton, {
        className: "h-4 w-3/5 rounded",
        strength: "medium"
      })]
    }), o[1] = a) : a = o[1], o[2] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, t.jsx)(i.LoadingState, {
      name: "status_panel",
      className: "motion-reduce:[&_*]:!animate-none",
      children: (0, t.jsxs)("div", {
        role: "status",
        "aria-busy": "true",
        "aria-label": e,
        className: "space-y-3 px-4 pt-2 pb-4",
        children: [a, (0, t.jsx)("div", {
          "aria-hidden": "true",
          className: "space-y-2",
          children: Array.from({
            length: 3
          }).map(s)
        })]
      })
    }), o[2] = c) : c = o[2], c
  }])
}, 418688, 490936, e => {
  "use strict";
  var t = e.i(519172);
  let n = (0, t.createContext)(null);
  e.s(["HatchWorkspaceContextProvider", 0, function({
    value: e,
    children: r
  }) {
    return (0, t.createElement)(n.Provider, {
      value: e
    }, r)
  }, "useHatchWorkspaceContext", 0, function() {
    let e = (0, t.useContext)(n);
    if (null == e) throw Error("useHatchWorkspaceContext must be used within HatchWorkspaceContextProvider");
    return e
  }], 418688);
  var r = e.i(960607);
  let i = "sandbox://";

  function l(e) {
    try {
      return decodeURIComponent(e)
    } catch {
      return e
    }
  }

  function a(e) {
    let t = function(e) {
      let t = e;
      for (let e = 0; e < 8; e++) {
        let e = l(t);
        if (e === t) return t;
        t = e
      }
      return l(t) === t ? t : null
    }(e);
    return null == t || "." === t || ".." === t
  }

  function s(e) {
    let t = e.trim();
    if (0 === t.length) return null;
    let n = t.replace(/\\/g, "/");
    if (/[?#]/.test(n)) return null;
    let r = n.split("/").filter(e => e.length > 0);
    return r.some(a) ? null : {
      normalizedPath: n,
      segments: r
    }
  }
  e.s(["normalizeBootstrapFileParam", 0, function(e) {
    if (null == e) return null;
    let t = e.trim();
    if (0 === t.length) return null;
    if (t.startsWith(i)) return function(e) {
      let t = s(e);
      if (null == t) return null;
      let {
        segments: n
      } = t;
      return n.length < 2 || "workspace" !== n[0] ? null : n.join("/")
    }(t.slice(i.length));
    let n = (0, r.getTrustedWorkspaceFilePathFromSource)(t);
    return null != n ? n : function(e) {
      let t = s(e);
      if (null == t) return null;
      let {
        normalizedPath: n,
        segments: r
      } = t;
      return n.startsWith("/") ? r.length > 0 ? `/${r.join("/")}` : null : r.length < 2 || "workspace" !== r[0] ? null : r.join("/")
    }(t)
  }], 490936)
}, 183710, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(519172),
    i = e.i(345717),
    l = e.i(374785),
    a = e.i(590328);
  e.s(["MessengerPinBoxes", 0, function(e) {
    let s, c, o, u, d, C, h, f, m, p, y = (0, n.c)(26),
      {
        value: g,
        onChange: x,
        showPin: b,
        disabled: _,
        maskedComplete: v,
        onSubmit: S
      } = e,
      H = void 0 !== v && v,
      w = (0, r.useRef)(null);
    y[0] !== H || y[1] !== g ? (s = Array.from({
      length: 6
    }, (e, t) => g[t] ?? (H ? "0" : "")), y[0] = H, y[1] = g, y[2] = s) : s = y[2];
    let j = s;
    return y[3] !== _ || y[4] !== g ? (c = () => {
      "" !== g || _ || w.current?.focus()
    }, o = [g, _], y[3] = _, y[4] = g, y[5] = c, y[6] = o) : (c = y[5], o = y[6]), (0, r.useEffect)(c, o), y[7] !== x ? (u = e => {
      x(e.target.value.replace(/\D/g, "").slice(0, 6))
    }, y[7] = x, y[8] = u) : u = y[8], y[9] !== S ? (d = e => {
      "Enter" === e.key && S()
    }, y[9] = S, y[10] = d) : d = y[10], y[11] === Symbol.for("react.memo_cache_sentinel") ? (C = i.fbs._("PIN", null, {
      hk: "AaS9e"
    }), y[11] = C) : C = y[11], y[12] !== _ || y[13] !== u || y[14] !== d || y[15] !== g ? (h = (0, t.jsx)("input", {
      ref: w,
      type: "text",
      inputMode: "numeric",
      pattern: "[0-9]*",
      autoComplete: "one-time-code",
      maxLength: 6,
      value: g,
      onChange: u,
      onKeyDown: d,
      disabled: _,
      autoFocus: !0,
      className: "sr-only",
      "aria-label": C
    }), y[12] = _, y[13] = u, y[14] = d, y[15] = g, y[16] = h) : h = y[16], y[17] === Symbol.for("react.memo_cache_sentinel") ? (f = () => w.current?.focus(), y[17] = f) : f = y[17], y[18] !== j || y[19] !== _ || y[20] !== b || y[21] !== g ? (m = (0, t.jsx)("div", {
      role: "presentation",
      onClick: f,
      children: (0, t.jsx)(a.Flexbox, {
        justifyContent: "center",
        gap: 2,
        children: j.map((e, n) => {
          let r = !_ && n === g.length && g.length < 6,
            i = e ? b ? e : "•" : "";
          return (0, t.jsx)("div", {
            className: (0, l.cn)("rounded-10 flex size-12 items-center justify-center border-2 transition-colors", r ? "border-hatch-accent" : e ? "border-border-primary" : "border-border-secondary"),
            children: (0, t.jsx)("span", {
              className: "text-title-2-emphasized select-none",
              role: "presentation",
              children: i
            })
          }, n)
        })
      })
    }), y[18] = j, y[19] = _, y[20] = b, y[21] = g, y[22] = m) : m = y[22], y[23] !== m || y[24] !== h ? (p = (0, t.jsxs)(t.Fragment, {
      children: [h, m]
    }), y[23] = m, y[24] = h, y[25] = p) : p = y[25], p
  }])
}, 947067, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(346577),
    i = e.i(646361),
    l = e.i(32e4),
    a = e.i(374785),
    s = e.i(146581),
    c = e.i(428978),
    o = e.i(121869),
    u = e.i(679878);
  l.default._isSVG = !0, e.s(["SpaceIcon", 0, function(e) {
    let d, C, h, f, m, p, y, g, x, b, _, v, S, H, w = (0, n.c)(84),
      {
        imageUrl: j,
        imagePending: A,
        monogram: k,
        size: L,
        noShadow: R,
        disableDropShadow: E,
        selected: V,
        badge: M,
        showSpinner: T,
        className: P,
        hideMonogram: N,
        disableHoverEffect: I,
        coopiconGlyphBaseColor: D,
        simpleIconIdentifier: F,
        clipToCircle: Z
      } = e,
      O = void 0 !== A && A,
      B = void 0 === L ? 48 : L,
      U = void 0 === Z || Z,
      z = (0, u.useSimpleIconsEnabled)(),
      G = Math.round(.4 * B);
    w[0] !== G ? (d = Math.round(.15 * G), w[0] = G, w[1] = d) : d = w[1];
    let W = -d;
    w[2] !== B ? (C = B >= 72 ? "medium" : "small", w[2] = B, w[3] = C) : C = w[3];
    let q = C;
    w[4] !== M || w[5] !== W || w[6] !== G || w[7] !== T || w[8] !== B || w[9] !== q ? (h = T ? (0, t.jsx)("span", {
      className: "bg-fill-primary text-text-primary absolute flex items-center justify-center rounded-full drop-shadow-sm",
      style: {
        width: G,
        height: G,
        insetInlineEnd: W,
        bottom: W
      },
      children: (0, t.jsx)(r.HatchSpinner, {
        size: q,
        color: "secondary",
        isDecorative: !0
      })
    }) : null != M ? (0, t.jsx)("span", {
      className: "bg-hatch-accent absolute flex items-center justify-center rounded-full text-white drop-shadow-sm",
      style: {
        width: G,
        height: G,
        insetInlineEnd: W,
        bottom: W,
        fontSize: Math.round(.18 * B),
        fontWeight: 700
      },
      children: M
    }) : null, w[4] = M, w[5] = W, w[6] = G, w[7] = T, w[8] = B, w[9] = q, w[10] = h) : h = w[10];
    let K = h;
    if (w[11] !== N || w[12] !== j || w[13] !== k || w[14] !== F || w[15] !== z || w[16] !== B) {
      let e, n;
      f = (0, u.resolvePreferredSpaceIconUrl)(j ?? null, z, F), w[21] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("span", {
        className: "bg-fill-secondary flex h-full w-full items-center justify-center rounded-full",
        "aria-hidden": "true"
      }), w[21] = e) : e = w[21], p = e, w[22] !== N || w[23] !== k || w[24] !== B ? (n = (0, t.jsx)("span", {
        className: "bg-fill-secondary flex h-full w-full items-center justify-center rounded-full",
        "aria-hidden": "true",
        children: !N && k ? (0, t.jsx)("span", {
          className: "text-text-primary",
          style: {
            fontSize: .45 * B
          },
          children: k
        }) : (0, t.jsx)(i.HatchIcon, {
          icon: l.default,
          size: Math.round(.5 * B),
          className: "text-text-primary"
        })
      }), w[22] = N, w[23] = k, w[24] = B, w[25] = n) : n = w[25], m = n, y = (0, o.parseCoopiconIconUrl)(f), w[11] = N, w[12] = j, w[13] = k, w[14] = F, w[15] = z, w[16] = B, w[17] = f, w[18] = m, w[19] = p, w[20] = y
    } else f = w[17], m = w[18], p = w[19], y = w[20];
    if (null != y) {
      let e, n, r, i, l, c, o;
      w[26] !== P ? (e = (0, a.cn)("relative shrink-0", P), w[26] = P, w[27] = e) : e = w[27];
      let u = `${B}px`,
        d = `${B}px`;
      w[28] !== d || w[29] !== u ? (n = {
        width: u,
        height: d
      }, w[28] = d, w[29] = u, w[30] = n) : n = w[30];
      let C = R ? "" : "space-icon",
        h = !R && E && "space-icon-no-shadow",
        y = !I && "space-icon-hoverable",
        g = V && "selected";
      w[31] !== C || w[32] !== h || w[33] !== y || w[34] !== g ? (r = (0, a.cn)(C, h, y, g, "flex items-center justify-center"), w[31] = C, w[32] = h, w[33] = y, w[34] = g, w[35] = r) : r = w[35];
      let x = `${B}px`,
        b = `${B}px`;
      return w[36] !== x || w[37] !== b ? (i = {
        margin: 0,
        width: x,
        height: b
      }, w[36] = x, w[37] = b, w[38] = i) : i = w[38], w[39] !== D || w[40] !== f || w[41] !== m || w[42] !== B || w[43] !== p || w[44] !== V ? (l = (0, t.jsx)(s.HatchArtifactIcon, {
        iconUrl: f,
        size: B,
        active: V,
        glyphBaseColor: D,
        fallback: m,
        pendingFallback: p
      }), w[39] = D, w[40] = f, w[41] = m, w[42] = B, w[43] = p, w[44] = V, w[45] = l) : l = w[45], w[46] !== r || w[47] !== i || w[48] !== l ? (c = (0, t.jsx)("div", {
        className: r,
        style: i,
        children: l
      }), w[46] = r, w[47] = i, w[48] = l, w[49] = c) : c = w[49], w[50] !== K || w[51] !== n || w[52] !== c || w[53] !== e ? (o = (0, t.jsxs)("div", {
        className: e,
        style: n,
        children: [c, K]
      }), w[50] = K, w[51] = n, w[52] = c, w[53] = e, w[54] = o) : o = w[54], o
    }
    w[55] !== P ? (g = (0, a.cn)("relative shrink-0", P), w[55] = P, w[56] = g) : g = w[56];
    let Q = `${B}px`,
      $ = `${B}px`;
    w[57] !== $ || w[58] !== Q ? (x = {
      width: Q,
      height: $
    }, w[57] = $, w[58] = Q, w[59] = x) : x = w[59];
    let Y = R ? "" : "space-icon",
      X = !R && E && "space-icon-no-shadow",
      J = !I && "space-icon-hoverable",
      ee = V && "selected",
      et = U ? "overflow-hidden rounded-full" : "flex items-center justify-center";
    w[60] !== Y || w[61] !== X || w[62] !== J || w[63] !== ee || w[64] !== et ? (b = (0, a.cn)(Y, X, J, ee, et), w[60] = Y, w[61] = X, w[62] = J, w[63] = ee, w[64] = et, w[65] = b) : b = w[65];
    let en = `${B}px`,
      er = `${B}px`;
    return w[66] !== en || w[67] !== er ? (_ = {
      margin: 0,
      width: en,
      height: er
    }, w[66] = en, w[67] = er, w[68] = _) : _ = w[68], w[69] !== U || w[70] !== m || w[71] !== O || w[72] !== j || w[73] !== p ? (v = j ? (0, t.jsx)(c.HatchArtifactIconImage, {
      src: j,
      fallback: m,
      className: (0, a.cn)("pointer-events-none object-cover", U ? "h-full w-full" : "h-[90%] w-[90%]")
    }) : O ? p : m, w[69] = U, w[70] = m, w[71] = O, w[72] = j, w[73] = p, w[74] = v) : v = w[74], w[75] !== b || w[76] !== _ || w[77] !== v ? (S = (0, t.jsx)("div", {
      className: b,
      style: _,
      children: v
    }), w[75] = b, w[76] = _, w[77] = v, w[78] = S) : S = w[78], w[79] !== K || w[80] !== x || w[81] !== S || w[82] !== g ? (H = (0, t.jsxs)("div", {
      className: g,
      style: x,
      children: [S, K]
    }), w[79] = K, w[80] = x, w[81] = S, w[82] = g, w[83] = H) : H = w[83], H
  }])
}, 589873, e => {
  "use strict";
  let t = /^[a-z][a-z0-9+.-]*:\/\//i;
  e.s(["ABSOLUTE_APPROVAL_URL_PATTERN", 0, t, "formatNetworkApprovalDestinationDomain", 0, function(e) {
    if (null != e.path && t.test(e.path)) try {
      return new URL(e.path).hostname
    } catch {}
    return e.host
  }])
}, 344272, e => {
  "use strict";
  e.s(["canNavigateToArtifact", 0, function(e) {
    return e.capabilities.canOpen || "constructing" === e.status && "space" === e.source && "space" === e.openTarget.kind
  }])
}, 908978, e => {
  "use strict";
  e.s(["avatarColorResultFromHex", 0, function(e) {
    let t, n = (t = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(e)) ? {
      r: parseInt(t[1], 16),
      g: parseInt(t[2], 16),
      b: parseInt(t[3], 16)
    } : null;
    return n ? {
      dominantColor: n,
      bubbleColor: function(e) {
        let t = function(e) {
          let t = e.r / 255,
            n = e.g / 255,
            r = e.b / 255,
            i = Math.max(t, n, r),
            l = Math.min(t, n, r),
            a = (i + l) / 2;
          if (i === l) return {
            h: 0,
            s: 0,
            l: 100 * a
          };
          let s = i - l;
          return {
            h: 360 * (i === t ? ((n - r) / s + 6 * (n < r)) / 6 : i === n ? ((r - t) / s + 2) / 6 : ((t - n) / s + 4) / 6),
            s: 100 * (a > .5 ? s / (2 - i - l) : s / (i + l)),
            l: 100 * a
          }
        }({
          r: Math.round(.4 * e.r + 153),
          g: Math.round(.4 * e.g + 153),
          b: Math.round(.4 * e.b + 153)
        });
        return t.l = 86,
          function({
            h: e,
            s: t,
            l: n
          }) {
            let r = t / 100,
              i = n / 100;
            if (0 === r) {
              let e = Math.round(255 * i);
              return {
                r: e,
                g: e,
                b: e
              }
            }
            let l = i < .5 ? i * (1 + r) : i + r - i * r,
              a = 2 * i - l,
              s = (e, t, n) => (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e,
              c = e / 360;
            return {
              r: Math.round(255 * s(a, l, c + 1 / 3)),
              g: Math.round(255 * s(a, l, c)),
              b: Math.round(255 * s(a, l, c - 1 / 3))
            }
          }(t)
      }(n)
    } : null
  }])
}, 761984, e => {
  "use strict";
  var t = e.i(374785);
  let n = "max-w-[calc(100cqw-44px)] max-md:max-w-[calc(100cqw-48px)] touch:max-w-full max-md:touch:max-w-full",
    r = "[--hatch-message-compact-action-rail-width:2.75rem]",
    i = (0, t.cn)(r, "w-[var(--hatch-message-compact-action-rail-width)] justify-center"),
    l = (0, t.cn)(r, "[--hatch-message-compact-width-adjustment:1rem]", "max-w-[min(calc(var(--hatch-message-narrow-max-width)+var(--hatch-message-compact-width-adjustment)),calc(100cqw-var(--hatch-message-compact-action-rail-width)))] touch:max-w-[var(--hatch-message-narrow-max-width)]"),
    a = "max-lg:max-w-[var(--hatch-message-narrow-max-width)]";
  e.s(["HATCH_FULL_THREAD_LAYOUT", 0, {
    kind: "full"
  }, "getHatchAssistantMessageLayout", 0, function({
    actionMode: e,
    bubbleClassName: r,
    fullWidth: s,
    hasReaction: c
  }) {
    let o = "compact" === e;
    return {
      bubbleClassName: (0, t.cn)("relative min-w-0", "[--hatch-message-narrow-max-width:86%]", s ? "w-full" : o && null == r ? l : (0, t.cn)("max-w-[85%]", a), r, s && !o && "shrink", o && (s || null != r) && n, o && "shrink-0"),
      groupClassName: (0, t.cn)("group/msg flex flex-row items-center justify-start gap-0 touch:flex-col touch:items-start", c ? "mb-5 touch:mb-0 touch:gap-6" : "touch:gap-1"),
      toolbarClassName: (0, t.cn)("touch:scale-100 touch:opacity-100 flex shrink-0 scale-95 opacity-0 group-hover/msg:scale-100 group-hover/msg:opacity-100 focus-within:scale-100 focus-within:opacity-100 has-[[data-state=open]]:scale-100 has-[[data-state=open]]:opacity-100", o ? i : "ms-2")
    }
  }, "getHatchUserMessageLayout", 0, function({
    actionMode: e,
    hasReaction: r,
    hasSendingLabel: s,
    hasTextContent: c
  }) {
    let o = "compact" === e;
    return {
      groupClassName: (0, t.cn)("group/msg ms-auto flex w-fit max-w-full flex-col items-end", "[--hatch-message-narrow-max-width:78%]", c && (o ? l : (0, t.cn)(a, "touch:max-w-[var(--hatch-message-narrow-max-width)]")), o && !c && n, !c && "inline" === e && "lg:@max-message-compact:max-w-[calc(100cqw-64px)]", !c && "touch:max-w-full", r && "mb-5 touch:mb-0", s && "pb-5 touch:pb-0"),
      textBubbleClassName: c && o ? "max-w-full" : void 0,
      toolbarClassName: (0, t.cn)("touch:static touch:mb-0 touch:h-auto touch:scale-100 touch:opacity-100 absolute inset-y-0 end-full my-auto flex h-fit shrink-0 scale-95 opacity-0 transition-[opacity,scale] group-hover/msg:scale-100 group-hover/msg:opacity-100 focus-within:scale-100 focus-within:opacity-100 has-[[data-state=open]]:scale-100 has-[[data-state=open]]:opacity-100", o ? i : "me-2", r || s ? "touch:mt-6" : "touch:mt-1")
    }
  }, "resolveHatchMessageActionMode", 0, function(e, t, n = "inline") {
    if (null != t) {
      if ("split" === e.kind && "always" === e.compactActions) return "compact";
      if (null != t.messageContainerWidth) return "compact" === n ? t.messageContainerWidth < 676 ? "compact" : "inline" : t.messageContainerWidth < 660 ? "compact" : "inline"
    }
    return "full" === e.kind ? "inline" : "always" === e.compactActions ? "compact" : null == e.width ? "inline" : "compact" === n ? e.width <= 496 ? "compact" : "inline" : e.width <= 480 ? "compact" : "inline"
  }])
}, 315882, e => {
  "use strict";
  var t = e.i(519172);
  let n = (0, e.i(359783).createClientLogger)("HatchLazyChatSubtrees"),
    r = null;

  function i() {
    return r ??= e.A(453421).then(e => (e.HatchInlineApprovalCard, {
      default: e.HatchInlineApprovalCard
    })).catch(e => {
      throw r = null, e
    })
  }
  let l = (0, t.lazy)(i),
    a = (0, t.lazy)(() => e.A(762065).then(e => ({
      default: e.HatchAudioBubble
    }))),
    s = (0, t.lazy)(() => e.A(77709).then(e => ({
      default: e.HatchPodcastBubble
    }))),
    c = (0, t.lazy)(() => e.A(705859).then(e => ({
      default: e.HatchChatActionLink
    }))),
    o = (0, t.lazy)(() => e.A(144593).then(e => ({
      default: e.EctoMarkdownRenderer
    }))),
    u = () => e.A(56115).then(e => ({
      default: e.HatchHtmlPreviewFrame
    })),
    d = (0, t.lazy)(() => e.A(668586).then(e => ({
      default: e.HatchDictationRecordingStrip
    }))),
    C = (0, t.lazy)(() => e.A(568902).then(e => ({
      default: e.HatchImageGrid
    }))),
    h = (0, t.lazy)(() => e.A(607696).then(e => ({
      default: e.HatchChatLocalMapWidget
    }))),
    f = (0, t.lazy)(() => e.A(755798).then(e => ({
      default: e.HatchChatLocalMapSceneWidget
    }))),
    m = (0, t.lazy)(() => e.A(748616).then(e => ({
      default: e.HatchChatMarketplaceMapWidget
    })));

  function p() {
    return e.A(3300).then(e => ({
      default: e.HatchConnectorDeepLink
    }))
  }
  e.s(["HatchAudioBubbleLazy", 0, a, "HatchChatActionLinkLazy", 0, c, "HatchChatLocalMapSceneWidgetLazy", 0, f, "HatchChatLocalMapWidgetLazy", 0, h, "HatchChatMarketplaceMapWidgetLazy", 0, m, "HatchDictationRecordingStripLazy", 0, d, "HatchImageGridLazy", 0, C, "HatchInlineApprovalCardLazy", 0, l, "HatchPodcastBubbleLazy", 0, s, "HatchPresentationMarkdownLazy", 0, o, "createHatchConnectorDeepLinkLazy", 0, function() {
    return (0, t.lazy)(() => p().catch(e => (n.retainForBugReport("warn", "connector deep link chunk import failed, retrying"), p())))
  }, "createHatchHtmlPreviewFrameLazy", 0, () => (0, t.lazy)(u), "loadHatchHtmlPreviewFrame", 0, u, "preloadHatchDictationRecordingStrip", 0, function() {
    e.A(668586).catch(() => {})
  }, "preloadHatchInlineApprovalCard", 0, function() {
    i().catch(e => {
      n.retainForBugReport("warn", "Approval card preload failed; the next load will retry")
    })
  }])
}, 434351, e => {
  "use strict";
  var t = e.i(978911),
    n = e.i(68426);
  let r = (0, t.createStore)(() => ({
    isOpen: !1,
    panelWidth: 520
  }));

  function i(e) {
    return e.isOpen
  }

  function l(e) {
    return e.panelWidth
  }
  e.s(["closeIdeasDebugPanel", 0, function() {
    r.setState({
      isOpen: !1
    })
  }, "setIdeasDebugPanelWidth", 0, function(e) {
    r.setState({
      panelWidth: e
    })
  }, "toggleIdeasDebugPanel", 0, function() {
    r.setState(e => ({
      isOpen: !e.isOpen
    }))
  }, "useIdeasDebugPanelWidth", 0, function() {
    return (0, n.useStoreWithEqualityFn)(r, l)
  }, "useIsIdeasDebugPanelOpen", 0, function() {
    return (0, n.useStoreWithEqualityFn)(r, i)
  }])
}, 955646, e => {
  "use strict";
  var t = e.i(978911),
    n = e.i(68426);
  let r = (0, t.createStore)(() => ({
    isOpen: !1,
    panelWidth: 520
  }));

  function i(e) {
    return e.isOpen
  }

  function l(e) {
    return e.panelWidth
  }
  e.s(["closeNoiseDebugPanel", 0, function() {
    r.setState({
      isOpen: !1
    })
  }, "setNoiseDebugPanelWidth", 0, function(e) {
    r.setState({
      panelWidth: e
    })
  }, "toggleNoiseDebugPanel", 0, function() {
    r.setState(e => ({
      isOpen: !e.isOpen
    }))
  }, "useIsNoiseDebugPanelOpen", 0, function() {
    return (0, n.useStoreWithEqualityFn)(r, i)
  }, "useNoiseDebugPanelWidth", 0, function() {
    return (0, n.useStoreWithEqualityFn)(r, l)
  }])
}, 650964, e => {
  "use strict";
  var t = e.i(978911),
    n = e.i(68426);
  let r = (0, t.createStore)(() => ({
    isOpen: !1,
    panelWidth: 480
  }));

  function i(e) {
    return e.isOpen
  }

  function l(e) {
    return e.panelWidth
  }
  e.s(["closeSpaceDebugPanel", 0, function() {
    r.setState({
      isOpen: !1
    })
  }, "setSpaceDebugPanelWidth", 0, function(e) {
    r.setState({
      panelWidth: e
    })
  }, "toggleSpaceDebugPanel", 0, function() {
    r.setState(e => ({
      isOpen: !e.isOpen
    }))
  }, "useIsSpaceDebugPanelOpen", 0, function() {
    return (0, n.useStoreWithEqualityFn)(r, i)
  }, "useSpaceDebugPanelWidth", 0, function() {
    return (0, n.useStoreWithEqualityFn)(r, l)
  }])
}, 356469, e => {
  "use strict";
  var t = e.i(438451),
    n = e.i(890089);
  let r = null;
  e.s(["consumeHatchArtifactRouteNavigation", 0, function(e) {
    let t = r;
    return r = null, t?.targetPath === e ? t : null
  }, "requestHatchArtifactRouteNavigation", 0, function(e) {
    "chat" === e.origin && (0, n.captureHatchChatScrollHold)("route-split-open", {
      originElement: e.originElement
    }), r = {
      chatVisibility: "chat" === e.origin ? "expand" : "preserve",
      returnPath: "chat" === e.origin ? (0, t.getHatchChatRoutePath)(e.chatRoute) : e.libraryPath,
      targetPath: e.targetPath
    }
  }])
}, 390743, e => {
  "use strict";
  var t = e.i(183912),
    n = e.i(323900);
  let r = "scheduled_task_id";

  function i(e) {
    let t = e?.trim();
    return null != t && t.length > 0 ? t : null
  }
  e.s(["HATCH_SCHEDULED_TASK_QUERY_PARAM", 0, r, "getHatchDeepLinkAction", 0, function(e) {
    var l;
    let a;
    try {
      a = new URL(e)
    } catch {
      return null
    }
    if ("https:" !== a.protocol && "http:" !== a.protocol || (l = a.origin, !(0, t.getHatchOriginsAllowlist)().has(l))) return null;
    let s = a.pathname.replace(/\/+$/g, "") || "/",
      c = i(a.searchParams.get(r));
    if ("/" === s && null != c) return {
      type: "open-scheduled-task",
      taskId: c
    };
    if ("/" === s && "permissions" === a.searchParams.get(n.HATCH_SETTINGS_TAB_QUERY_PARAM)) return {
      type: "open-settings-tab",
      tab: "permissions",
      permissionScope: (0, n.parseHatchPermissionScope)(a.searchParams) ?? void 0
    };
    if ("/connect/channel" !== s) return null;
    let o = a.searchParams.get("service"),
      u = (0, n.getHatchSettingsTabForConnectService)(o);
    if (null == u) return null;
    switch (o) {
      case "whatsapp":
        return {
          type: "open-settings-tab", tab: u, channelDetail: "whatsapp"
        };
      case "telegram":
        return {
          type: "open-settings-tab", tab: u, channelDetail: "telegram"
        };
      case "messenger":
        return {
          type: "open-settings-tab", tab: u, channelDetail: "messenger"
        };
      default:
        return {
          type: "open-settings-tab", tab: u
        }
    }
  }, "parseHatchScheduledTaskId", 0, i])
}, 144166, e => {
  "use strict";
  let t = "hatch-dynamic-base-favicon",
    n = "hatch-badge-favicon",
    r = "data-hatch-hidden",
    i = "hatch-disabled",
    l = [],
    a = null,
    s = null,
    c = null,
    o = null,
    u = null,
    d = 0,
    C = !1;

  function h() {
    let e = Array.from(document.querySelectorAll(`link[rel="icon"], link[rel="shortcut icon"], link[${r}]`)).filter(e => e.id !== t && e.id !== n),
      i = e.find(e => {
        let t = e.media.trim();
        return "" !== t && "function" == typeof window.matchMedia && window.matchMedia(t).matches
      }) ?? e.find(e => "" === e.media.trim()) ?? e[0];
    return i?.href ?? null
  }

  function f(e) {
    return new URL(e, window.location.href).href
  }

  function m(e) {
    l = l.filter(t => t !== e)
  }

  function p() {
    for (let e of l) {
      let t = e.getAttribute(r);
      t && (e.rel = t, e.removeAttribute(r))
    }
    l = []
  }

  function y(e) {
    if (e.id !== n) {
      if (!e.hasAttribute(r)) {
        let t = 0 === e.rel.length || e.rel === i ? "icon" : e.rel;
        e.setAttribute(r, t)
      }
      e.rel !== i && (e.rel = i), l.includes(e) || l.push(e)
    }
  }

  function g(e) {
    let t = !1;
    for (let r of document.head.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')) r !== e && r.id !== n && (y(r), t = !0);
    return t
  }

  function x(e) {
    let n = document.getElementById(t);
    if (null == e) {
      null != n && (m(n), n.remove()), C ? v(!0) : p();
      return
    }
    let i = n ?? document.createElement("link"),
      l = f(e),
      a = !C && g(i);
    i.id = t, i.href !== l && (i.href = l), i.removeAttribute("sizes"), e.startsWith("data:image/png") ? i.type = "image/png" : i.removeAttribute("type"), C ? y(i) : (m(i), "icon" !== i.rel && (i.rel = "icon"), i.removeAttribute(r)), (null == n || a) && document.head.appendChild(i), C && v(!0, e)
  }

  function b(e) {
    if (null != e) return f(e);
    let n = document.getElementById(t);
    return n?.href ? n.href : h()
  }

  function _() {
    return getComputedStyle(document.documentElement).getPropertyValue("--hatch-accent").trim()
  }

  function v(e, r = null) {
    let i;
    if (C = e, e) {
      let e = b(r);
      if (null == e) return;
      let t = _(),
        n = `${e}\u0000${t}`;
      if (s && o === e && c === t) return void S(s);
      if (u === n) return;
      let i = ++d;
      return u = n, void new Promise(n => {
        let r = document.createElement("canvas");
        r.width = 32, r.height = 32;
        let i = r.getContext("2d");
        if (!i) return void n("");
        i.imageSmoothingEnabled = !0, i.imageSmoothingQuality = "high", t.length > 0 && (i.fillStyle = t);
        let l = new Image;
        l.crossOrigin = "anonymous", l.onload = () => {
          i.drawImage(l, 0, 0, 32, 32), i.beginPath(), i.arc(28, 28, 4, 0, 2 * Math.PI), i.fill(), n(r.toDataURL("image/png"))
        }, l.onerror = () => {
          i.beginPath(), i.arc(28, 28, 4, 0, 2 * Math.PI), i.fill(), n(r.toDataURL("image/png"))
        }, l.src = e
      }).then(n => {
        if (i === d && (u = null, n && (s = n, c = t, o = e, C))) {
          let r = b(null),
            i = _();
          r === e && i === t ? S(n) : v(!0)
        }
      })
    }
    d++, u = null;
    let l = document.getElementById(t)?.href;
    i = document.getElementById(n), a?.remove(), i !== a && i?.remove(), a = null;
    let h = r ?? l ?? null;
    null == h ? p() : x(h)
  }

  function S(e) {
    let t = document.getElementById(n);
    a !== t && (a = t), null == a && ((a = document.createElement("link")).id = n);
    let r = g(a);
    "icon" !== a.rel && (a.rel = "icon"), "image/png" !== a.type && (a.type = "image/png"), a.href !== e && (a.href = e), (!a.isConnected || r) && document.head.appendChild(a)
  }
  e.s(["buildAvatarBaseFavicon", 0, function(e) {
    return new Promise(t => {
      let n = document.createElement("canvas");
      n.width = 32, n.height = 32;
      let r = n.getContext("2d");
      if (!r) return void t(e);
      r.imageSmoothingEnabled = !0, r.imageSmoothingQuality = "high";
      let i = new Image;
      i.crossOrigin = "anonymous", i.onload = () => {
        try {
          let e = Math.min(i.naturalWidth || 32, i.naturalHeight || 32),
            l = Math.max(0, ((i.naturalWidth || 32) - e) / 2),
            a = Math.max(0, ((i.naturalHeight || 32) - e) / 2);
          r.clearRect(0, 0, 32, 32), r.save(), r.beginPath(), r.arc(16, 16, 16, 0, 2 * Math.PI), r.clip(), r.drawImage(i, l, a, e, e, 0, 0, 32, 32), r.restore(), t(n.toDataURL("image/png"))
        } catch {
          t(e)
        }
      }, i.onerror = () => {
        t(e)
      }, i.src = e
    })
  }, "readActiveBaseFaviconHref", 0, function() {
    return b(null)
  }, "readDocumentFaviconHref", 0, h, "setDynamicBaseFavicon", 0, x, "setFaviconBadge", 0, v])
}, 572488, e => {
  "use strict";
  let t = null,
    n = null;
  e.s(["getLoadedMeshGradient", 0, function() {
    return t
  }, "isMeshGradientRequested", 0, function() {
    return null != n
  }, "loadMeshGradient", 0, function() {
    return null != t ? Promise.resolve(t) : n ??= e.A(371354).then(e => (t = e.MeshGradient, e.MeshGradient)).catch(e => {
      throw n = null, e
    })
  }])
}, 537295, e => {
  "use strict";
  var t = e.i(345717),
    n = e.i(519172),
    r = e.i(47247),
    i = e.i(30488),
    l = e.i(508180);

  function a() {
    return t.fbs._("Your draft was kept. Send or clear it, then try again.", null, {
      hk: "2HPzgq"
    })
  }
  e.s(["handlePendingApprovalSendResult", 0, function(e, t, s) {
    return e.ok || "pending_user_confirmation" !== e.reason && "not_ready" !== e.reason ? "not_applicable" : l.stagePendingComposerSend({
      content: t,
      attachments: s?.attachments ?? [],
      ...s?.sendOptions != null ? {
        options: s.sendOptions
      } : {}
    }) ? ((0, i.markPendingComposerFocus)(), s?.revealComposer?.(), window.dispatchEvent(new Event("hatch-focus-composer")), "staged") : (s?.explainDraftKept === !0 && r.toast.info((0, n.createElement)(a)), "draft_kept")
  }])
}, 30488, e => {
  "use strict";
  let t = null;
  e.s(["consumePendingComposerFocus", 0, function() {
    if (null == t) return !1;
    let e = ("u" > typeof performance ? performance.now() : Date.now()) - t <= 1500;
    return t = null, e
  }, "markPendingComposerFocus", 0, function() {
    t = "u" > typeof performance ? performance.now() : Date.now()
  }])
}, 323900, e => {
  "use strict";
  let t = ["general", "channels", "devices", "connectors", "wallet", "vault", "permissions", "voice", "data-privacy", "encryption", "trusted-network", "help-support", "legal-safety", "internal-settings"],
    n = "settings_tab",
    r = ["general", "channels", "permissions", "trusted-network"],
    i = "pane",
    l = "permission_scope",
    a = "permission_scope_id",
    s = {
      subscriptions: "manage",
      plans: "plans",
      "trusted-network": "trusted-network"
    },
    c = new Set(["connection", "model", "debug", "ws-debug"]);
  e.s(["HATCH_SETTINGS_PANE_QUERY_PARAM", 0, i, "HATCH_SETTINGS_PERMISSION_ID_QUERY_PARAM", 0, a, "HATCH_SETTINGS_PERMISSION_TYPE_QUERY_PARAM", 0, l, "HATCH_SETTINGS_TAB_QUERY_PARAM", 0, n, "buildHatchSettingsUrl", 0, function(e, t) {
    let r = new URLSearchParams;
    return r.set(n, e), null != t && r.set(i, t), `/?${r.toString()}`
  }, "getHatchSettingsTabForConnectService", 0, function(e) {
    switch (e) {
      case "whatsapp":
      case "telegram":
      case "messenger":
        return "channels";
      default:
        return null
    }
  }, "parseHatchPermissionScope", 0, function(e) {
    let t = e.get(l),
      n = e.get(a);
    return "space" !== t && "schedule" !== t || null == n || 0 === n.length || n.length > 256 ? null : {
      scopeType: t,
      scopeId: n
    }
  }, "parseHatchSettingsTab", 0, function(e) {
    return null == e ? null : c.has(e) ? "internal-settings" : t.some(t => t === e) ? r.some(t => t === e) ? e : null : null
  }, "resolveHatchSettingsGeneralPane", 0, function(e) {
    return null != e && Object.hasOwn(s, e) ? s[e] : null
  }], 323900)
}, 749137, e => {
  "use strict";
  let t = "https://www.pariscope.dev/hatchery",
    n = new URL(t),
    r = new Set([n.origin, "https://hatch.pariscope.dev"]);
  e.s(["buildHatcheryFleetUrl", 0, function(e) {
    let n = new URLSearchParams({
      tab: "fleet",
      vm: e
    });
    return `${t}?${n.toString()}`
  }, "buildHatcheryUrl", 0, function(e, n) {
    let r = new URLSearchParams({
      hatch: e
    });
    return n && r.set("message_id", n), `${t}?${r.toString()}`
  }, "buildPariscopeVoiceCallUrl", 0, function(e) {
    return `https://www.pariscope.dev/voice/${e}`
  }, "normalizeHatcheryUrl", 0, function(e) {
    let t;
    try {
      t = new URL(e)
    } catch {
      return e
    }
    return r.has(t.origin) && t.pathname === n.pathname && t.searchParams.has("event") ? (t.searchParams.delete("event"), t.toString()) : e
  }])
}, 360932, e => {
  "use strict";
  let t = (0, e.i(519172).lazy)(() => e.A(276688).then(e => ({
    default: e.HatchFileEditor
  })));
  e.s(["HatchFileEditorLazy", 0, t])
}, 610486, e => {
  "use strict";
  var t = e.i(671204),
    n = e.i(304117);
  let r = "hatch-library-in-page-back";

  function i(e) {
    let t = e;
    for (; null != t;) {
      let e = t.ownerDocument.defaultView?.getComputedStyle(t);
      if (t.hidden || t.inert || "true" === t.getAttribute("aria-hidden") || "none" === t.style.display || e?.display === "none" || e?.visibility === "hidden") return !0;
      t = t.parentElement
    }
    return !1
  }
  e.s(["HATCH_LIBRARY_IN_PAGE_BACK_EVENT", 0, r, "getLibraryNavigationBackStep", 0, function({
    activeLibraryRoutePath: e,
    expandedFolderPaths: r,
    isArtifactViewerActive: i,
    isLibraryRouteActive: l,
    libraryPath: a,
    selectedFolderPath: s
  }) {
    if (i) return {
      kind: "artifact",
      path: a
    };
    if (l && e === n.SHELL_PATH.libraryRecent) return {
      kind: "section",
      path: t.DEFAULT_LIBRARY_ROUTE_PATH
    };
    let c = new URL(a, "https://hatch.invalid");
    return l && c.pathname === n.SHELL_PATH.libraryFiles && "/" !== s && r.includes(s) ? {
      kind: "folder",
      folderPath: (0, t.getParentLibraryFolderPath)(s)
    } : l && ! function(e) {
      let r = new URL(e, "https://hatch.invalid");
      if (r.pathname !== t.DEFAULT_LIBRARY_ROUTE_PATH && r.pathname !== n.SHELL_ALIAS_PATH.library && r.pathname !== n.SHELL_ALIAS_PATH.libraryTrailingSlash) return !1;
      let i = r.searchParams.get("view");
      return (null == i || "all" === i) && !r.searchParams.has("q")
    }(a) ? {
      kind: "section",
      path: t.DEFAULT_LIBRARY_ROUTE_PATH
    } : null
  }, "requestLibraryInPageBack", 0, function() {
    if ("u" < typeof document) return !1;
    let e = [...document.querySelectorAll('[data-hatch-library-navigation-surface="route"]')].find(e => !i(e));
    if (null == e) return !1;
    let t = new Event(r, {
      cancelable: !0
    });
    return e.dispatchEvent(t), t.defaultPrevented
  }, "scrollLibraryNavigationSurfaceToTop", 0, function() {
    if ("u" < typeof document) return !1;
    let e = document.querySelectorAll('[data-hatch-library-navigation-surface="route"]'),
      t = document.querySelectorAll('[data-hatch-vt-pane="route-panel"]'),
      n = [...e].find(e => !i(e)) ?? [...t].find(e => !i(e));
    if (null == n) return !1;
    let r = [n, ...n.querySelectorAll(".overflow-y-auto, .overflow-auto")].find(e => e.scrollTop > 0 && !i(e));
    return null != r && (r.scrollTop = 0, !0)
  }])
}, 616723, e => {
  "use strict";
  var t = e.i(281851),
    n = e.i(826972),
    r = e.i(3116),
    i = e.i(765414),
    l = e.i(228750);

  function a(e, n, r, i, a) {
    let s = {
      version: 1,
      queryKey: n,
      sourceKey: JSON.stringify(n),
      staleTimeMs: a,
      targetKey: e.targetKey,
      request: {
        method: r,
        params: i,
        resultMode: "raw"
      },
      dependency: {
        queryKey: (0, l.buildOnboardingStartQueryKey)(e.targetKey),
        skipWhen: {
          field: "variant",
          equals: t.UI_DRIVEN_ONBOARDING_VARIANT
        }
      }
    };
    return {
      descriptor: s,
      queryKey: n,
      sourceKey: s.sourceKey
    }
  }
  e.s(["bindLibraryArtifactsGatewayQuery", 0, function(e) {
    return a(e, (0, r.hatchLibraryArtifactsQueryKey)(e.gatewayUrl, e.gatewayScopeKey), "fs.library", {
      preset: "artifacts",
      limit: i.ARTIFACTS_PAGE_SIZE,
      offset: 0
    }, 1e4)
  }, "bindLibraryMediaGatewayQuery", 0, function(e) {
    return a(e, (0, r.hatchLibraryMediaInfiniteQueryKey)(e.gatewayUrl, e.gatewayScopeKey), "fs.library", {
      preset: "media",
      limit: i.MEDIA_PAGE_SIZE,
      offset: 0
    }, 6e4)
  }, "bindLibraryRecentFilesGatewayQuery", 0, function(e) {
    return a(e, ["hatch", "library", "recent-files", e.gatewayScopeKey ?? e.gatewayUrl], "fs.library", {
      preset: "recents",
      limit: 48,
      offset: 0
    }, 6e4)
  }, "bindLibrarySidebarRootGatewayQuery", 0, function(e) {
    return a(e, (0, r.hatchLibraryRootTreeQueryKey)(e.gatewayUrl, e.gatewayScopeKey), "fs.list", {
      path: (0, n.toHatchGatewayApiPath)("/")
    }, 3e4)
  }])
}, 765414, e => {
  "use strict";
  e.s(["ARTIFACTS_PAGE_SIZE", 0, 20, "MEDIA_PAGE_SIZE", 0, 20])
}, 3116, e => {
  "use strict";
  var t = e.i(755854),
    n = e.i(722469);

  function r(e, n) {
    return ["hatch", "library", null != n && n !== e ? n : (0, t.toGatewayIdentityKey)(e)]
  }

  function i(e, t, i) {
    return [...r(e, i), "directory", (0, n.normalizePath)(t)]
  }
  e.s(["hatchLibraryArtifactsQueryKey", 0, function(e, t) {
    return [...r(e, t), "artifacts"]
  }, "hatchLibraryDirectoryQueryKey", 0, i, "hatchLibraryMediaInfiniteQueryKey", 0, function(e, t) {
    return [...r(e, t), "media"]
  }, "hatchLibraryQueryKeyPrefix", 0, r, "hatchLibraryRootTreeQueryKey", 0, function(e, t) {
    return i(e, "/", t)
  }])
}, 958089, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(519172),
    r = e.i(503037),
    i = e.i(849329),
    l = e.i(393202),
    a = e.i(863641),
    s = e.i(359783),
    c = e.i(47247),
    o = e.i(14751),
    u = e.i(925301),
    d = e.i(508180),
    C = e.i(175286),
    h = e.i(720756),
    f = e.i(906214);
  let m = (0, s.createClientLogger)("ComputerBrowser"),
    p = new Set(["browser_lease_expired", "computer_disabled", "invalid_params"]);

  function y(e) {
    return (0, u.isGatewayRequestError)(e) ? e.code : void 0
  }

  function g(e, t) {
    return e < 2 && "browser_tasks_unavailable" === y(t)
  }
  e.s(["useHatchComputerContextQuery", 0, function(e) {
    let n, r, l, a = (0, t.c)(9),
      {
        enabled: s
      } = e,
      {
        gatewayUrl: c,
        isReady: u
      } = (0, C.useHatchRpc)(),
      d = (0, h.useGatewayQueryContext)();
    return a[0] !== d ? (n = f.computerContextQuery.queryOptions({
      targetKey: d.targetKey
    }, d), a[0] = d, a[1] = n) : n = a[1], a[2] !== s || a[3] !== c || a[4] !== u ? (r = s && (0, o.isMethodReadyForTransport)({
      method: "computer.context",
      gatewayUrl: c,
      isWsReady: u
    }), a[2] = s, a[3] = c, a[4] = u, a[5] = r) : r = a[5], a[6] !== n || a[7] !== r ? (l = {
      ...n,
      enabled: r,
      refetchOnMount: "always",
      retry: g
    }, a[6] = n, a[7] = r, a[8] = l) : l = a[8], (0, i.useQuery)(l)
  }, "useHatchComputerSubscription", 0, function(e) {
    let r, i, s = (0, t.c)(8),
      {
        enabled: c
      } = e,
      {
        isReady: o,
        onEvent: d,
        sendRequest: p
      } = (0, C.useHatchRpc)(),
      {
        targetKey: y
      } = (0, h.useGatewayQueryContext)(),
      g = (0, l.useQueryClient)();
    s[0] !== c || s[1] !== o || s[2] !== d || s[3] !== g || s[4] !== p || s[5] !== y ? (r = () => {
      if (!c || !o) return;
      let e = !1,
        t = d("computer.updated", t => {
          let n;
          try {
            n = (0, f.normalizeComputerContext)(t)
          } catch (n) {
            let t = {
              error: n instanceof Error ? n : Error(String(n)),
              tags: (0, a.hatchSentryTags)(a.HATCH_SENTRY_SURFACES.STATUS_COMPUTER)
            };
            e ? m.retainForBugReport("warn", "Skipped an unreadable computer.updated event") : (e = !0, m.error(t, "Skipped an unreadable computer.updated event"));
            return
          }
          f.computerContextQuery.setData(g, {
            targetKey: y
          }, n)
        }),
        n = !1;
      return (async () => {
        if (await Promise.resolve(), !n) try {
          await p("computer.subscribe", {})
        } catch (t) {
          if ((0, f.isComputerUnavailableError)(t)) return;
          let e = {
            error: t instanceof Error ? t : Error(String(t)),
            tags: (0, a.hatchSentryTags)(a.HATCH_SENTRY_SURFACES.STATUS_COMPUTER)
          };
          if ((0, u.isGatewayDisconnectError)(t)) return void m.retainForBugReport("warn", "computer.subscribe failed");
          m.error(e, "computer.subscribe failed")
        }
      })(), () => {
        n = !0, t()
      }
    }, i = [c, o, d, g, p, y], s[0] = c, s[1] = o, s[2] = d, s[3] = g, s[4] = p, s[5] = y, s[6] = r, s[7] = i) : (r = s[6], i = s[7]), (0, n.useEffect)(r, i)
  }, "useLeaseComputerBrowser", 0, function({
    controlConflictMessage: e,
    failureMessage: t,
    onLeased: i
  }) {
    let s = (0, h.useGatewayQueryContext)(),
      o = (0, l.useQueryClient)(),
      C = (0, n.useRef)({
        controlConflictMessage: e,
        failureMessage: t
      });
    C.current = {
      controlConflictMessage: e,
      failureMessage: t
    };
    let g = (0, n.useRef)(i);
    return g.current = i, (0, r.useMutation)({
      mutationFn: () => {
        let e = (0, d.getSnapshot)().browserPanel.pendingComputerLeaseId ?? crypto.randomUUID();
        return (0, d.setPendingComputerLeaseId)(e), (0, f.leaseComputerBrowser)(s, e)
      },
      onSuccess: ({
        task: e,
        requestTargetKey: t
      }) => {
        (0, d.setPendingComputerLeaseId)(null), f.computerContextQuery.setData(o, {
          targetKey: t
        }, t => (0, f.upsertComputerContextTask)(t, e)), g.current(e)
      },
      onError: e => {
        ! function(e) {
          if ((0, u.isGatewayRequestError)(e) && "not_sent" === e.deliveryState) return !1;
          let t = y(e);
          return null == t || !p.has(t)
        }(e) && (0, d.setPendingComputerLeaseId)(null);
        let t = y(e);
        if ("computer_disabled" === t) {
          f.computerContextQuery.setData(o, {
            targetKey: s.targetKey
          }, {
            available: !1,
            tasks: []
          }), c.toast.error(C.current.failureMessage);
          return
        }(f.computerContextQuery.invalidate(o, {
          targetKey: s.targetKey
        }), "browser_control_conflict" === t) ? c.toast.error(C.current.controlConflictMessage): (m.error({
          error: e,
          code: t,
          tags: (0, a.hatchSentryTags)(a.HATCH_SENTRY_SURFACES.STATUS_COMPUTER)
        }, "Failed to open a Computer browser"), c.toast.error(C.current.failureMessage))
      }
    })
  }])
}, 669675, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(175286),
    r = e.i(62822),
    i = e.i(654764),
    l = e.i(685231);
  e.s(["useShellPostContentUnlocked", 0, function() {
    let e, a = (0, t.c)(7),
      {
        match: s
      } = (0, i.useActiveRoute)(),
      c = (0, l.useShellPrimaryContentIdentity)(),
      o = (0, l.useShellPrimaryContentSnapshot)(),
      {
        gatewayUrl: u,
        vmName: d
      } = (0, n.useHatchRpc)(),
      C = (0, r.useHatchPostContentSafetyReady)();
    return a[0] !== c || a[1] !== u || a[2] !== s || a[3] !== o || a[4] !== C || a[5] !== d ? (e = C && (0, l.isShellPostContentEligibleForRoute)(o, s, u, d, c), a[0] = c, a[1] = u, a[2] = s, a[3] = o, a[4] = C, a[5] = d, a[6] = e) : e = a[6], e
  }, "useShellPrimaryContentFailed", 0, function() {
    let e, r = (0, t.c)(6),
      {
        match: a
      } = (0, i.useActiveRoute)(),
      s = (0, l.useShellPrimaryContentIdentity)(),
      c = (0, l.useShellPrimaryContentSnapshot)(),
      {
        gatewayUrl: o,
        vmName: u
      } = (0, n.useHatchRpc)();
    return r[0] !== s || r[1] !== o || r[2] !== a || r[3] !== c || r[4] !== u ? (e = (0, l.isShellPrimaryContentFailureForRoute)(c, a, o, u, s), r[0] = s, r[1] = o, r[2] = a, r[3] = c, r[4] = u, r[5] = e) : e = r[5], e
  }])
}, 864236, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(345717),
    i = e.i(295967);
  e.s(["HatchBootStatusAnnouncement", 0, function() {
    let e, l = (0, n.c)(1);
    return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(i.LoadingState, {
      name: "boot_status",
      role: "status",
      "aria-busy": "true",
      className: "sr-only",
      children: r.fbs._("Loading workspace", null, {
        hk: "2RHRwT"
      })
    }), l[0] = e) : e = l[0], e
  }])
}, 829249, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(345717),
    i = e.i(295967),
    l = e.i(832964);
  e.s(["HatchFileEditorSkeleton", 0, function() {
    let e, a, s, c = (0, n.c)(3);
    return c[0] === Symbol.for("react.memo_cache_sentinel") ? (e = r.fbs._("Loading file editor", null, {
      hk: "2BZrdb"
    }), c[0] = e) : e = c[0], c[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsxs)("div", {
      "aria-hidden": "true",
      className: "border-fill-divider flex h-14 items-center gap-3 border-b px-4",
      children: [(0, t.jsx)(l.Skeleton, {
        className: "size-8 rounded-full"
      }), (0, t.jsx)(l.Skeleton, {
        className: "h-4 w-44"
      }), (0, t.jsx)(l.Skeleton, {
        className: "ms-auto h-8 w-20 rounded-full"
      })]
    }), c[1] = a) : a = c[1], c[2] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)(i.LoadingState, {
      name: "file_editor",
      className: "flex min-h-0 flex-1 flex-col",
      children: (0, t.jsxs)("div", {
        role: "status",
        "aria-busy": "true",
        "aria-label": e,
        className: "flex min-h-0 flex-1 flex-col motion-reduce:[&_*]:!animate-none",
        children: [a, (0, t.jsxs)("div", {
          "aria-hidden": "true",
          className: "flex flex-1 flex-col gap-3 p-5",
          children: [(0, t.jsx)(l.Skeleton, {
            className: "h-4 w-5/6"
          }), (0, t.jsx)(l.Skeleton, {
            className: "h-4 w-full"
          }), (0, t.jsx)(l.Skeleton, {
            className: "h-4 w-4/5"
          }), (0, t.jsx)(l.Skeleton, {
            className: "h-4 w-2/3"
          })]
        })]
      })
    }), c[2] = s) : s = c[2], s
  }])
}, 192996, 642655, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(519172),
    r = e.i(345717),
    i = e.i(770256),
    l = e.i(848048),
    a = e.i(420297),
    s = e.i(646361),
    c = e.i(295967),
    o = e.i(731714),
    u = e.i(255859),
    d = e.i(281539),
    C = e.i(823173);
  e.s(["HatchInlineApprovalCardError", 0, function({
    autoFocus: e = !1,
    isChecking: h = !1,
    isComposerRecovery: f = !1,
    onRecovered: m,
    onRecoverySurfaceRemoved: p,
    onRetry: y,
    reason: g = "render_error",
    showReload: x
  }) {
    let [b, _] = (0, n.useState)(!1), [v, S] = (0, n.useState)(!1), H = h || b, w = x ?? f, {
      ref: j
    } = (0, l.useTrackedImpressionRef)({
      eventName: f ? C.HatchImpressionEvent.CHAT_APPROVAL_RECOVERY_IMPRESSION : C.HatchImpressionEvent.HATCH_CHAT_MESSAGE_SUBTREE_ERROR_IMPRESSION,
      actionTarget: f ? "inline_approval_recovery" : "HatchInlineApprovalCardError",
      metadata: f ? {
        surface: "chat",
        subsurface: "inline_approval_recovery",
        recovery_kind: g
      } : {
        surface: "chat",
        subsurface: "message_subtree_error",
        subtree: "approval"
      }
    }, {
      threshold: "50%"
    }), {
      ref: A,
      onClick: k
    } = (0, l.useTrackedClickRef)({
      eventName: d.HatchClickEvent.CHAT_APPROVAL_RECOVERY_RETRY,
      actionTarget: "inline_approval_recovery_retry",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "inline_approval_recovery",
        recovery_kind: g
      }
    }), {
      ref: L,
      onClick: R
    } = (0, l.useTrackedClickRef)({
      eventName: d.HatchClickEvent.CHAT_APPROVAL_RECOVERY_RELOAD,
      actionTarget: "inline_approval_recovery_reload",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "inline_approval_recovery",
        recovery_kind: g
      }
    }), E = H && f ? r.fbs._("Checking approval…", null, {
      hk: "47owkf"
    }) : "render_error" === g ? r.fbs._("Approval unavailable", null, {
      hk: "47S7zv"
    }) : r.fbs._("Approval needs to be refreshed", null, {
      hk: "2hof0M"
    }), V = v ? r.fbs._("The approval still couldn't be refreshed. Try again or reload {productFullName}.", [r.fbs._param("productFullName", u.PRODUCT_BRAND.fullName)], {
      hk: "43COKI"
    }) : H && f ? r.fbs._("Messaging stays paused while {productFullName} checks the pending request.", [r.fbs._param("productFullName", u.PRODUCT_BRAND.fullName)], {
      hk: "2B2KqP"
    }) : f ? r.fbs._("Messaging stays paused until the pending request is recovered.", null, {
      hk: "2oLZ4R"
    }) : r.fbs._("Reload to retry.", null, {
      hk: "GPlHi"
    }), M = (0, n.useRef)(null), T = (0, n.useRef)(null), P = (0, n.useRef)(null), N = (0, n.useRef)(!1), I = (0, n.useRef)(!1), D = (0, n.useRef)(!1), F = (0, n.useRef)(!1), Z = (0, n.useRef)(m), O = (0, n.useRef)(p);
    Z.current = m, O.current = p;
    let B = (0, o.useMergeRefs)(j, M),
      U = (0, o.useMergeRefs)(A, T),
      z = (0, o.useMergeRefs)(L, P);
    (0, n.useEffect)(() => {
      if (e) {
        if (!F.current) {
          if (F.current = !0, M.current?.contains(document.activeElement)) return;
          H ? M.current?.focus() : (T.current ?? P.current)?.focus();
          return
        }
        if (H) {
          (N.current || I.current) && M.current?.focus();
          return
        }
        N.current && (T.current ?? P.current)?.focus()
      }
    }, [e, H]), (0, n.useEffect)(() => () => {
      !D.current && (N.current || I.current) && (D.current = !0, I.current ? (Z.current ?? O.current)?.() : O.current?.())
    }, []);
    let G = async () => {
      if (null == y || H) return;
      k(), I.current = !0;
      let e = M.current,
        t = document.activeElement;
      null != e && t instanceof Node && e.contains(t) && e.focus(), S(!1), _(!0);
      try {
        await y(), !D.current && (N.current || I.current) && (D.current = !0, (Z.current ?? O.current)?.())
      } catch {
        I.current = !1, S(!0)
      } finally {
        _(!1)
      }
    }, W = (0, t.jsxs)("div", {
      ref: B,
      role: H ? "status" : "alert",
      "aria-live": H ? "polite" : "assertive",
      "aria-busy": H,
      "data-hatch-approval-recovery-reason": g,
      tabIndex: null != y || e ? -1 : void 0,
      onFocusCapture: () => {
        N.current = !0
      },
      onBlurCapture: e => {
        let t = e.relatedTarget,
          n = t instanceof Node && e.currentTarget.contains(t);
        N.current = n, n || (I.current = !1)
      },
      className: "shadow-blur-elevation-02 bg-fill-blur-thick rounded-24 focus-visible:ring-hatch-accent/60 mb-3 flex items-center gap-3 px-4 py-4 focus-visible:ring-2 focus-visible:outline-none",
      children: [(0, t.jsx)(s.HatchIcon, {
        icon: i.default,
        size: 20,
        className: "text-text-primary/60 shrink-0",
        "aria-hidden": "true"
      }), (0, t.jsxs)("div", {
        className: "text-text-primary min-w-0 flex-1",
        children: [(0, t.jsx)("div", {
          className: "text-subheadline-emphasized",
          children: E
        }), (0, t.jsx)("div", {
          className: "text-footnote mt-0.5",
          children: V
        }), null != y || w ? (0, t.jsxs)("div", {
          className: "mt-3 flex flex-wrap gap-2",
          children: [null != y ? (0, t.jsx)(a.Button, {
            ref: U,
            variant: "primary",
            size: "32",
            radius: "large",
            label: r.fbs._("Try again", null, {
              hk: "4b8yac"
            }),
            disabled: H,
            "aria-disabled": H,
            onClick: () => void G()
          }) : null, w ? (0, t.jsx)(a.Button, {
            ref: z,
            variant: "flat",
            size: "32",
            radius: "large",
            label: r.fbs._("Reload {productFullName}", [r.fbs._param("productFullName", u.PRODUCT_BRAND.fullName)], {
              hk: "1mF4Iq"
            }),
            onClick: () => {
              R(), window.location.reload()
            }
          }) : null]
        }) : null]
      })]
    });
    return (0, t.jsxs)("div", {
      className: "relative",
      children: [W, H && (0, t.jsx)(c.LoadingState, {
        name: "composer_chrome",
        className: "pointer-events-none absolute inset-0",
        children: null
      })]
    })
  }], 192996);
  var h = e.i(722099);

  function f(e) {
    return "Enter" === e || " " === e || "Escape" === e
  }
  e.s(["useHeldApprovalDecisionKeys", 0, function() {
    let e, t, r, i, l = (0, h.c)(4);
    l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = new Set, l[0] = e) : e = l[0];
    let a = (0, n.useRef)(e);
    return l[1] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
      let e = a.current,
        t = t => {
          f(t.key) && e.add(t.key)
        },
        n = t => {
          f(t.key) && e.delete(t.key)
        };
      return window.addEventListener("keydown", t, !0), window.addEventListener("keyup", n, !0), () => {
        window.removeEventListener("keydown", t, !0), window.removeEventListener("keyup", n, !0), e.clear()
      }
    }, r = [], l[1] = t, l[2] = r) : (t = l[1], r = l[2]), (0, n.useEffect)(t, r), l[3] === Symbol.for("react.memo_cache_sentinel") ? (i = () => a.current, l[3] = i) : i = l[3], i
  }], 642655)
}, 7371, e => {
  "use strict";
  var t = e.i(519172),
    n = e.i(763971),
    r = e.i(345717),
    i = e.i(393202),
    l = e.i(848048),
    a = e.i(796413),
    s = e.i(52038),
    c = e.i(175286),
    o = e.i(47247),
    u = e.i(359783),
    d = e.i(281539),
    C = e.i(823173),
    h = e.i(438451),
    f = e.i(435265),
    m = e.i(522730),
    p = e.i(812240),
    y = e.i(791661);
  let g = (0, u.createClientLogger)("delete_space");

  function x(e) {
    return {
      delete_source: e.source,
      space_id: e.spaceId ?? null
    }
  }
  e.s(["useDeleteSpace", 0, function() {
    let e = (0, i.useQueryClient)(),
      {
        gatewayUrl: u
      } = (0, s.useHatchServerData)(),
      {
        sendRequest: b
      } = (0, c.useHatchRpc)(),
      {
        data: _
      } = (0, y.useHatchSpacesQuery)({
        includeConstructing: !0
      }),
      v = (0, n.usePathname)(),
      S = (0, n.useSearchParams)(),
      H = (0, h.getHatchActiveSpaceSlug)(v, S),
      {
        navigate: w
      } = (0, f.useShellNavigate)(),
      j = (0, a.useConfirmationDialog)(),
      A = (0, l.useInteractionLoggerWithLazyData)(),
      k = (0, t.useRef)(0),
      L = (0, t.useRef)(null),
      R = (0, t.useRef)(!1),
      [E, V] = (0, t.useState)(null),
      [M, T] = (0, t.useState)(!1),
      P = r.fbs._("Artifacts are unavailable while disconnected.", null, {
        hk: "ETk1E"
      }),
      N = r.fbs._("Artifacts are unavailable while disconnected.", null, {
        hk: "1sMd4L"
      }),
      I = r.fbs._("Artifact deleted", null, {
        hk: "22OhDK"
      }),
      D = r.fbs._("Artifact deleted", null, {
        hk: "3CpM5r"
      }),
      F = r.fbs._("Failed to delete artifact", null, {
        hk: "1zF1j4"
      }),
      Z = r.fbs._("Failed to delete artifact", null, {
        hk: "3nLbnn"
      }),
      O = r.fbs._("Delete artifact?", null, {
        hk: "4gSVfl"
      }),
      B = r.fbs._("Delete artifact?", null, {
        hk: "3Tv6X7"
      }),
      U = r.fbs._("Deleting this artifact removes it from your library and cannot be undone.", null, {
        hk: "2uuH01"
      }),
      z = r.fbs._("Deleting this artifact removes it from your sidebar and cannot be undone.", null, {
        hk: "3gFQR3"
      }),
      G = r.fbs._("Delete", null, {
        hk: "2q0ccR"
      }),
      W = r.fbs._("Cancel", null, {
        hk: "2FQsDN"
      }),
      {
        ref: q
      } = (0, l.useTrackedImpressionRef)({
        eventName: C.HatchImpressionEvent.DELETE_SPACE_DIALOG_IMPRESSION,
        actionTarget: "delete_space_dialog",
        metadata: null == E ? {
          delete_source: null,
          space_id: null
        } : x(E)
      }, {
        enabled: null != E,
        threshold: "50%"
      }),
      {
        ref: K,
        onClick: Q
      } = (0, l.useTrackedClickRef)({
        eventName: d.HatchClickEvent.DELETE_SPACE_CONFIRM_CLICK,
        actionTarget: "delete_space_confirm",
        actionType: "click",
        metadata: null == E ? {
          delete_source: null,
          space_id: null
        } : x(E)
      }),
      {
        ref: $,
        onClick: Y
      } = (0, l.useTrackedClickRef)({
        eventName: d.HatchClickEvent.DELETE_SPACE_CANCEL_CLICK,
        actionTarget: "delete_space_cancel",
        actionType: "click",
        metadata: null == E ? {
          delete_source: null,
          space_id: null
        } : x(E)
      }),
      X = (0, t.useCallback)((e, t) => {
        A({
          eventName: e,
          actionTarget: "delete_space",
          actionType: "click",
          metadata: x(t),
          targetArea: "delete_space"
        })
      }, [A]),
      J = (0, t.useCallback)((e, t) => {
        null == H || new Set([...e.deletedIdentifiers, t]).has(H) && w("/")
      }, [H, w]),
      ee = (0, t.useCallback)(async t => {
        if (!R.current) {
          if (null == u) {
            let e = Error("Spaces are unavailable while disconnected.");
            g.error({
              error: e,
              spaceSlug: t.slug
            }, "Failed to delete space"), t.toast.error("library_spaces" === t.source ? P : N), X(d.HatchClickEvent.DELETE_SPACE_FAILURE, t);
            return
          }
          R.current = !0, T(!0);
          try {
            let n = await (0, m.deleteSpace)(t.slug, b);
            e.invalidateQueries({
              queryKey: p.spacesQueryKeys.all
            }), J(n, t.slug), t.toast.success("library_spaces" === t.source ? I : D), X(d.HatchClickEvent.DELETE_SPACE_SUCCESS, t)
          } catch (e) {
            g.error({
              error: e instanceof Error ? e : Error(String(e)),
              spaceSlug: t.slug
            }, "Failed to delete space"), t.toast.error("library_spaces" === t.source ? F : Z), X(d.HatchClickEvent.DELETE_SPACE_FAILURE, t)
          } finally {
            R.current = !1, T(!1)
          }
        }
      }, [Z, D, N, u, F, I, P, X, J, e, b]),
      et = (0, t.useCallback)(() => {
        V(null)
      }, []);
    return (0, t.useEffect)(() => {
      null != E && L.current !== E.id && (L.current = E.id, j({
        title: "library_spaces" === E.source ? O : B,
        description: "library_spaces" === E.source ? U : z,
        onConfirm: () => {
          V(null), ee(E)
        },
        onCancel: et,
        onPrimaryButtonClick: Q,
        onSecondaryButtonClick: Y,
        buttonLayout: "vertical",
        contentRef: q,
        primaryButtonProps: {
          ref: K,
          label: G,
          size: "36",
          variant: "destructive",
          disabled: M
        },
        secondaryButtonProps: {
          ref: $,
          label: W,
          size: "36",
          variant: "flat",
          disabled: M
        }
      }))
    }, [W, $, K, G, q, z, B, et, M, U, O, Y, Q, j, E, ee]), (0, t.useCallback)((e, t) => {
      if (R.current) return;
      let n = e.trim();
      if (0 === n.length) return;
      let r = {
        id: k.current + 1,
        slug: n,
        spaceId: _?.find(e => e.slug === n)?.space_id,
        source: t.source,
        toast: (0, o.captureHatchToast)()
      };
      (k.current = r.id, X(d.HatchClickEvent.DELETE_SPACE_CLICK, r), !1 === t.showConfirmation) ? ee(r): V(r)
    }, [X, ee, _])
  }])
}, 346791, e => {
  "use strict";
  var t = e.i(519172),
    n = e.i(218105);

  function r() {
    return (0, t.useContext)(n.HatchStatusPanelContext)
  }
  e.s(["useHatchStatusPanel", 0, function() {
    let e = r();
    if (!e) throw Error("useHatchStatusPanel must be used within HatchStatusPanelProvider");
    return e
  }, "useOptionalHatchStatusPanel", 0, r])
}, 548926, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(791661);
  e.s(["useSpaceLifecycleStatus", 0, function(e, r) {
    let i, l, a, s = (0, t.c)(5);
    s[0] !== r ? (i = void 0 === r ? {} : r, s[0] = r, s[1] = i) : i = s[1];
    let {
      includeConstructing: c
    } = i, o = void 0 === c || c, u = null != e && e.length > 0;
    s[2] !== o || s[3] !== u ? (l = {
      includeConstructing: o,
      enabled: u
    }, s[2] = o, s[3] = u, s[4] = l) : l = s[4];
    let d = (0, n.useHatchSpacesQuery)(l);
    e: {
      if (null == e || 0 === e.length) {
        a = "unknown";
        break e
      }
      let t = d.dataUpdatedAt > 0 && d.isFetched,
        n = d.data?.find(t => t.slug === e && !0 !== t.is_saved_foreign_share) ?? null;
      if (null != n) {
        if ("constructing" === n.construction_status) {
          a = "constructing";
          break e
        }
        a = "ready";
        break e
      }
      if (d.isError) {
        a = "error";
        break e
      }
      if (!t || d.isPending || d.isFetching) {
        a = "unknown";
        break e
      }
      a = "missing"
    }
    return a
  }])
}, 876061, e => {
  "use strict";
  e.s(["HATCH_STATUS_PANEL_INSET_CSS_VAR", 0, "--hatch-status-panel-inset", "getHatchStatusPanelInset", 0, function({
    isFullChat: e,
    isMobile: t,
    presentation: n,
    width: r
  }) {
    return !e || t || "side-panel" !== n ? 0 : Math.max(0, r)
  }])
}, 726430, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(519172);
  let r = (0, n.createContext)(null),
    i = (0, n.createContext)(null),
    l = (0, n.createContext)(null),
    a = (0, n.createContext)(function() {}),
    s = (0, n.createContext)(() => null);
  e.s(["HatchVoiceCallEntryContext", 0, i, "HatchVoiceVideoActivationContext", 0, a, "HatchVoiceVideoContext", 0, r, "HatchVoiceVideoSnapshotContext", 0, s, "HatchVoiceVideoSurfaceContext", 0, l, "useActivateHatchVoiceVideo", 0, function() {
    let e, r, i = (0, t.c)(3),
      l = (0, n.useContext)(a);
    i[0] !== l ? (e = () => {
      l()
    }, r = [l], i[0] = l, i[1] = e, i[2] = r) : (e = i[1], r = i[2]), (0, n.useEffect)(e, r)
  }, "useHatchVoiceCallEntry", 0, function() {
    return (0, n.useContext)(i)
  }, "useHatchVoiceVideoSnapshot", 0, function() {
    return (0, n.useContext)(s)
  }, "useOptionalHatchVoiceVideo", 0, function() {
    return (0, n.useContext)(r)
  }, "useOptionalHatchVoiceVideoSurface", 0, function() {
    return (0, n.useContext)(l)
  }])
}, 416407, e => {
  "use strict";
  let t = ["hatch", "voice", "embodiment-readiness"];

  function n(e) {
    return "number" == typeof e && Number.isFinite(e) ? Math.min(6e4, Math.max(5e3, Math.round(e))) : 1e4
  }
  async function r(e, t) {
    let r = await e("voice.avatar_video.prepare", {}, t);
    if (!(null != r && "object" == typeof r && !Array.isArray(r)) || "string" != typeof r.status || Object.keys(r).some(e => "status" !== e && "retry_after_ms" !== e)) throw Error("Avatar video preparation returned an invalid response");
    switch (r.status) {
      case "ready":
        return {
          readiness: "ready", retryAfterMs: null
        };
      case "preparing":
        return {
          readiness: "preparing", retryAfterMs: n(r.retry_after_ms)
        };
      case "disabled":
        return {
          readiness: "disabled", retryAfterMs: null
        };
      case "unavailable":
        return {
          readiness: "unavailable", retryAfterMs: null == r.retry_after_ms ? null : n(r.retry_after_ms)
        };
      default:
        throw Error("Avatar video preparation returned an unknown status")
    }
  }
  e.s(["hatchVoiceVideoEntryAwaitsPoll", 0, function(e, t, n, r) {
    return !1 !== n && n <= 15e3 && t < 3 && (r || e?.readiness === "preparing")
  }, "hatchVoiceVideoReadinessPollInterval", 0, function(e, t, {
    checkFailed: n,
    retryFailedChecks: r
  }) {
    return !(t > 6) && (n ? !!r && 5e3 : (e?.readiness === "preparing" || e?.readiness === "unavailable") && (e.retryAfterMs ?? !1))
  }, "hatchVoiceVideoReadinessQueryKey", 0, function(e, n) {
    return [...t, e, n]
  }, "prepareCurrentHatchVoiceVideo", 0, r, "resolveRestartedVoiceCallMediaType", 0, function(e, t) {
    return "video" === e && null != t && t.configLoaded && t.isCosmosS2S && t.enabled && "ready" === t.readiness ? "video" : "audio"
  }])
}, 241077, e => {
  "use strict";
  var t = e.i(519172);
  let n = !1,
    r = !1,
    i = new Set;

  function l(e) {
    return i.add(e), () => {
      i.delete(e)
    }
  }

  function a() {
    for (let e of i) e()
  }

  function s() {
    return n
  }

  function c() {
    return r
  }

  function o() {
    return !1
  }

  function u() {
    return () => {}
  }

  function d(e) {
    r !== e && (r = e, a())
  }
  e.s(["reportVoiceVideoStageFailed", 0, function() {
    d(!0)
  }, "setVoiceVideoStageFailed", 0, d, "setVoiceVideoStageReady", 0, function(e) {
    n !== e && (n = e, a())
  }, "useVoiceVideoStageFailed", 0, function(e) {
    return (0, t.useSyncExternalStore)(e ? l : u, e ? c : o, o)
  }, "useVoiceVideoStageReady", 0, function(e) {
    return (0, t.useSyncExternalStore)(e ? l : u, e ? s : o, o)
  }])
}, 448119, e => {
  "use strict";
  let t = new Map;
  e.s(["createLifecycleWsEvent", 0, function(e) {
    return {
      id: crypto.randomUUID(),
      index: e.index,
      timestamp: new Date,
      direction: "meta",
      envelope: "lifecycle",
      eventName: e.eventName,
      payload: {},
      raw: "",
      sourceUrl: e.sourceUrl,
      transport: "ws",
      websocketConnectionID: e.websocketConnectionID,
      lifecycle: e.lifecycle,
      byteSize: 0
    }
  }, "extractReplyToMessageId", 0, function(e) {
    return "string" == typeof e.reply_to_message_id ? e.reply_to_message_id : "object" == typeof e.payload && null != e.payload && "string" == typeof e.payload.reply_to_message_id ? e.payload.reply_to_message_id : null
  }, "extractRequestId", 0, function(e) {
    return "string" == typeof e.id ? e.id : null
  }, "parseRawWsMessage", 0, function(e, n, r, i, l, a) {
    var s, c;
    let o, u;
    try {
      o = JSON.parse(n)
    } catch {
      o = {
        _raw: n
      }
    }
    let d = (s = o, "send" === e && "string" == typeof s.method ? "request" : "receive" === e && "id" in s && ("status" in s || "payload" in s || "result" in s || "error" in s) ? "response" : "string" == typeof s.event ? "event" : "string" == typeof s.method ? "request" : "unknown");
    if ("request" === d && "string" == typeof o.method && "string" == typeof o.id) {
      if (t.size >= 500) {
        let e = t.keys().next().value;
        void 0 !== e && t.delete(e)
      }
      t.set(o.id, o.method)
    }
    let C = function(e, n) {
      switch (n) {
        case "request":
          return String(e.method ?? "request");
        case "response": {
          let n = "string" == typeof e.method ? e.method : "string" == typeof e.id ? t.get(e.id) : void 0;
          return n ? `res:${n}` : `res:${String(e.id??"?")}`
        }
        case "event":
          return String(e.event ?? "event");
        default:
          return "unknown"
      }
    }(o, d);
    return {
      id: crypto.randomUUID(),
      index: r,
      timestamp: new Date,
      direction: e,
      envelope: d,
      eventName: C,
      payload: o,
      raw: "",
      sourceUrl: i,
      transport: l,
      websocketConnectionID: a,
      byteSize: n.length,
      ...(u = {}, "string" == typeof(c = o).channel && (u.channel = c.channel), null != c.headers && "object" == typeof c.headers && (u.headers = c.headers), "string" == typeof c.contentType && (u.contentType = c.contentType), "number" == typeof c.status && (u.status = c.status), !0 === c.bodyElided && (u.bodyElided = !0), u)
    }
  }])
}, 743723, (e, t, n) => {
  "use strict";
  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var r = {
    callServer: function() {
      return l.callServer
    },
    createServerReference: function() {
      return s.createServerReference
    },
    findSourceMapURL: function() {
      return a.findSourceMapURL
    }
  };
  for (var i in r) Object.defineProperty(n, i, {
    enumerable: !0,
    get: r[i]
  });
  let l = e.r(21982),
    a = e.r(582272),
    s = e.r(341674)
}, 413415, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, s, c = (0, n.c)(10);
    c[0] !== e ? ({
      size: i,
      ...r
    } = e, c[0] = e, c[1] = r, c[2] = i) : (r = c[1], i = c[2]);
    let o = void 0 === i ? 32 : i;
    return c[3] !== r.title ? (l = null != r.title && (0, t.jsx)("title", {
      children: r.title
    }), c[3] = r.title, c[4] = l) : l = c[4], c[5] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)("path", {
      d: "M25.5 19.125a.875.875 0 0 1 0 1.75h-19a.875.875 0 0 1 0-1.75h19zm0-8a.875.875 0 0 1 0 1.75h-19a.875.875 0 0 1 0-1.75h19z",
      fill: "currentColor"
    }), c[5] = a) : a = c[5], c[6] !== r || c[7] !== o || c[8] !== l ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 32 32",
      fill: "none",
      width: o,
      height: o,
      ...r,
      children: [l, a]
    }), c[6] = r, c[7] = o, c[8] = l, c[9] = s) : s = c[9], s
  }
  r._isSVG = !0, r._viewBox = 32, e.s(["default", 0, r])
}, 509335, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, s = (0, n.c)(9);
    return s[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = r) : r = s[1], s[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = i) : i = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      d: "M11.45 2.32C11.79 2.04 12.3 2.06 12.62 2.38L20.12 9.88C20.46 10.22 20.46 10.78 20.12 11.12C19.78 11.46 19.22 11.46 18.88 11.12L12.87 5.11V21C12.87 21.48 12.48 21.88 12 21.88C11.52 21.87 11.12 21.48 11.12 21V5.11L5.12 11.12C4.78 11.46 4.22 11.46 3.88 11.12C3.54 10.78 3.54 10.22 3.88 9.88L11.38 2.38L11.45 2.32Z"
    }), s[4] = l) : l = s[4], s[5] !== e || s[6] !== r || s[7] !== i ? (a = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l]
    }), s[5] = e, s[6] = r, s[7] = i, s[8] = a) : a = s[8], a
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 550697, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, s, c = (0, n.c)(10);
    return c[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), c[0] = e.title, c[1] = r) : r = c[1], c[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), c[2] = e.children, c[3] = i) : i = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      d: "M11.38 6.88C11.72 6.54 12.28 6.54 12.62 6.88L16.62 10.88C16.96 11.22 16.96 11.78 16.62 12.12C16.28 12.46 15.72 12.46 15.38 12.12L12.88 9.61V22.5C12.88 22.98 12.48 23.38 12 23.38C11.52 23.38 11.13 22.98 11.13 22.5V9.61L8.62 12.12C8.28 12.46 7.72 12.46 7.38 12.12C7.04 11.78 7.04 11.22 7.38 10.88L11.38 6.88Z"
    }), a = (0, t.jsx)("path", {
      d: "M16.2 1.13C17.03 1.13 17.7 1.12 18.24 1.17C18.8 1.21 19.29 1.31 19.76 1.55C20.49 1.92 21.08 2.51 21.45 3.24C21.69 3.71 21.79 4.2 21.83 4.76C21.88 5.3 21.88 5.97 21.88 6.8V12.2C21.88 13.03 21.88 13.7 21.83 14.24C21.79 14.8 21.69 15.29 21.45 15.76C21.08 16.49 20.49 17.08 19.76 17.45C19.29 17.69 18.8 17.79 18.24 17.83C17.7 17.88 17.03 17.88 16.2 17.88H15.5V16.13H16.2C17.05 16.13 17.64 16.12 18.1 16.09C18.55 16.05 18.79 15.98 18.96 15.89C19.36 15.69 19.69 15.36 19.89 14.96C19.98 14.79 20.05 14.55 20.09 14.1C20.12 13.64 20.13 13.05 20.13 12.2V6.8C20.13 5.95 20.12 5.36 20.09 4.9C20.05 4.45 19.98 4.21 19.89 4.04C19.69 3.64 19.36 3.31 18.96 3.11C18.79 3.02 18.55 2.95 18.1 2.91C17.64 2.88 17.05 2.88 16.2 2.88H7.8C6.95 2.88 6.36 2.88 5.9 2.91C5.45 2.95 5.21 3.02 5.04 3.11C4.64 3.31 4.31 3.64 4.11 4.04C4.02 4.21 3.95 4.45 3.91 4.9C3.88 5.36 3.88 5.95 3.88 6.8V12.2C3.88 13.05 3.88 13.64 3.91 14.1C3.95 14.55 4.02 14.79 4.11 14.96C4.31 15.36 4.64 15.69 5.04 15.89C5.21 15.98 5.45 16.05 5.9 16.09C6.36 16.12 6.95 16.13 7.8 16.13H8.5V17.88H7.8C6.97 17.88 6.3 17.88 5.76 17.83C5.2 17.79 4.71 17.69 4.24 17.45C3.51 17.08 2.92 16.49 2.55 15.76C2.31 15.29 2.21 14.8 2.17 14.24C2.12 13.7 2.13 13.03 2.13 12.2V6.8C2.13 5.97 2.12 5.3 2.17 4.76C2.21 4.2 2.31 3.71 2.55 3.24C2.92 2.51 3.51 1.92 4.24 1.55C4.71 1.31 5.2 1.21 5.76 1.17C6.3 1.12 6.97 1.13 7.8 1.13H16.2Z"
    }), c[4] = l, c[5] = a) : (l = c[4], a = c[5]), c[6] !== e || c[7] !== r || c[8] !== i ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l, a]
    }), c[6] = e, c[7] = r, c[8] = i, c[9] = s) : s = c[9], s
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 848599, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, s = (0, n.c)(9);
    return s[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = r) : r = s[1], s[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = i) : i = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 1.13C18.01 1.13 22.88 5.99 22.88 12C22.88 18.01 18.01 22.88 12 22.88C5.99 22.88 1.13 18.01 1.13 12C1.13 5.99 5.99 1.13 12 1.13ZM12 9.22C11.3 9.22 10.74 9.78 10.74 10.48V17.24C10.74 17.94 11.3 18.5 12 18.5C12.69 18.5 13.25 17.94 13.25 17.24V10.48C13.25 9.78 12.69 9.22 12 9.22ZM12 5.21C11.58 5.21 11.23 5.35 10.95 5.62C10.66 5.9 10.52 6.24 10.52 6.65C10.52 7.06 10.66 7.41 10.95 7.68C11.23 7.96 11.58 8.1 12 8.1C12.42 8.1 12.77 7.96 13.05 7.68C13.34 7.41 13.48 7.06 13.48 6.65C13.48 6.24 13.34 5.9 13.05 5.62C12.77 5.35 12.42 5.21 12 5.21Z"
    }), s[4] = l) : l = s[4], s[5] !== e || s[6] !== r || s[7] !== i ? (a = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l]
    }), s[5] = e, s[6] = r, s[7] = i, s[8] = a) : a = s[8], a
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 38441, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, s, c, o, u = (0, n.c)(12);
    return u[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), u[0] = e.title, u[1] = r) : r = u[1], u[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), u[2] = e.children, u[3] = i) : i = u[3], u[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      d: "M17.41 13.55C17.76 14.15 18.04 14.74 18.26 15.29C17.81 15.82 17.33 16.34 16.82 16.85C14.41 19.26 11.71 20.99 9.26 21.8C6.87 22.6 4.43 22.6 2.9 21.07C1.37 19.54 1.37 17.1 2.17 14.71C2.26 14.43 2.36 14.16 2.47 13.88C2.85 14.47 3.26 15.06 3.71 15.63C3.13 17.63 3.37 19.07 4.13 19.83C4.94 20.64 6.51 20.87 8.71 20.14C10.85 19.43 13.33 17.87 15.58 15.62C16.26 14.94 16.87 14.25 17.41 13.55Z"
    }), a = (0, t.jsx)("path", {
      d: "M15.26 5.71C15.79 6.16 16.31 6.64 16.82 7.15C19.23 9.56 20.95 12.26 21.77 14.71C22.57 17.1 22.57 19.54 21.04 21.07C19.51 22.6 17.07 22.6 14.68 21.8C14.4 21.71 14.13 21.61 13.85 21.49C14.44 21.12 15.03 20.7 15.6 20.26C17.6 20.84 19.04 20.6 19.8 19.83C20.61 19.03 20.84 17.46 20.11 15.26C19.4 13.12 17.84 10.64 15.58 8.38C14.91 7.71 14.22 7.1 13.52 6.56C14.12 6.21 14.7 5.93 15.26 5.71Z"
    }), s = (0, t.jsx)("path", {
      d: "M2.9 2.93C4.43 1.4 6.87 1.4 9.26 2.2C9.53 2.29 9.81 2.39 10.09 2.51C9.5 2.88 8.91 3.29 8.33 3.74C6.33 3.16 4.9 3.4 4.13 4.17C3.32 4.97 3.1 6.55 3.83 8.74C4.54 10.88 6.09 13.36 8.35 15.62C9.02 16.29 9.72 16.9 10.41 17.44C9.81 17.79 9.23 18.07 8.68 18.29C8.15 17.84 7.62 17.36 7.11 16.85C4.71 14.44 2.98 11.74 2.17 9.29C1.37 6.9 1.37 4.46 2.9 2.93Z"
    }), c = (0, t.jsx)("path", {
      d: "M14.68 2.2C17.07 1.4 19.51 1.4 21.04 2.93C22.57 4.46 22.57 6.9 21.77 9.29C21.68 9.57 21.58 9.84 21.46 10.12C21.09 9.53 20.67 8.94 20.23 8.36C20.81 6.36 20.57 4.93 19.8 4.17C18.99 3.36 17.42 3.13 15.23 3.86C13.09 4.57 10.61 6.13 8.35 8.38C7.68 9.06 7.07 9.75 6.53 10.45C6.18 9.85 5.9 9.26 5.68 8.71C6.13 8.18 6.61 7.66 7.12 7.15C9.53 4.74 12.23 3.01 14.68 2.2Z"
    }), u[4] = l, u[5] = a, u[6] = s, u[7] = c) : (l = u[4], a = u[5], s = u[6], c = u[7]), u[8] !== e || u[9] !== r || u[10] !== i ? (o = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l, a, s, c]
    }), u[8] = e, u[9] = r, u[10] = i, u[11] = o) : o = u[11], o
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 384158, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, s, c, o, u, d = (0, n.c)(13);
    return d[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), d[0] = e.title, d[1] = r) : r = d[1], d[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), d[2] = e.children, d[3] = i) : i = d[3], d[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      d: "M12 1.13C12.73 1.13 13.43 1.2 14.12 1.33C14.6 1.43 14.9 1.89 14.81 2.36C14.72 2.83 14.26 3.14 13.78 3.05C13.21 2.93 12.61 2.88 12 2.88C6.96 2.88 2.88 6.96 2.88 12C2.88 17.04 6.96 21.13 12 21.13C12.61 21.13 13.21 21.07 13.78 20.95C14.26 20.86 14.72 21.17 14.81 21.64C14.9 22.11 14.6 22.57 14.12 22.67C13.43 22.8 12.73 22.88 12 22.88C5.99 22.88 1.13 18.01 1.13 12C1.13 5.99 5.99 1.13 12 1.13Z"
    }), a = (0, t.jsx)("path", {
      d: "M19.59 17.07C19.86 16.67 20.4 16.56 20.8 16.83C21.2 17.1 21.31 17.64 21.04 18.04C20.25 19.23 19.23 20.25 18.04 21.04C17.64 21.31 17.1 21.2 16.83 20.8C16.56 20.4 16.67 19.86 17.07 19.59C18.06 18.92 18.92 18.06 19.59 17.07Z"
    }), s = (0, t.jsx)("path", {
      d: "M21.64 9.19C22.11 9.1 22.57 9.4 22.67 9.88C22.8 10.57 22.88 11.27 22.88 12C22.88 12.73 22.8 13.43 22.67 14.12C22.57 14.6 22.11 14.9 21.64 14.81C21.17 14.72 20.86 14.26 20.95 13.78C21.07 13.21 21.13 12.61 21.13 12C21.13 11.39 21.07 10.79 20.95 10.22C20.86 9.74 21.17 9.28 21.64 9.19Z"
    }), c = (0, t.jsx)("path", {
      d: "M12 5.13C12.48 5.13 12.88 5.52 12.88 6V12C12.88 12.48 12.48 12.88 12 12.88H7C6.52 12.88 6.13 12.48 6.13 12C6.13 11.52 6.52 11.13 7 11.13H11.13V6C11.13 5.52 11.52 5.13 12 5.13Z"
    }), o = (0, t.jsx)("path", {
      d: "M16.83 3.2C17.1 2.8 17.64 2.69 18.04 2.96C19.23 3.75 20.25 4.77 21.04 5.96C21.31 6.36 21.2 6.9 20.8 7.17C20.4 7.44 19.86 7.33 19.59 6.93C18.92 5.94 18.06 5.08 17.07 4.41C16.67 4.14 16.56 3.6 16.83 3.2Z"
    }), d[4] = l, d[5] = a, d[6] = s, d[7] = c, d[8] = o) : (l = d[4], a = d[5], s = d[6], c = d[7], o = d[8]), d[9] !== e || d[10] !== r || d[11] !== i ? (u = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l, a, s, c, o]
    }), d[9] = e, d[10] = r, d[11] = i, d[12] = u) : u = d[12], u
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 574933, 481347, 920943, 794902, 974975, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, s, c, o, u, d = (0, n.c)(13);
    return d[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), d[0] = e.title, d[1] = r) : r = d[1], d[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), d[2] = e.children, d[3] = i) : i = d[3], d[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      d: "M10.59 11.98C11 11.98 11.34 12.32 11.34 12.73V19.25C11.34 19.67 11 20 10.59 20C10.17 20 9.84 19.67 9.84 19.25V12.73C9.84 12.32 10.17 11.98 10.59 11.98Z"
    }), a = (0, t.jsx)("path", {
      d: "M13.42 12.96C13.83 12.96 14.17 13.3 14.17 13.71V18.27C14.17 18.69 13.83 19.02 13.42 19.02C13 19.02 12.67 18.69 12.67 18.27V13.71C12.67 13.3 13 12.96 13.42 12.96Z"
    }), s = (0, t.jsx)("path", {
      d: "M7.76 13.94C8.17 13.94 8.51 14.27 8.51 14.69V17.3C8.51 17.71 8.17 18.05 7.76 18.05C7.34 18.05 7.01 17.71 7.01 17.3V14.69C7.01 14.27 7.34 13.94 7.76 13.94Z"
    }), c = (0, t.jsx)("path", {
      d: "M16.25 14.26C16.66 14.26 17 14.6 17 15.01V16.97C17 17.38 16.66 17.72 16.25 17.72C15.84 17.72 15.5 17.38 15.5 16.97V15.01C15.5 14.6 15.84 14.26 16.25 14.26Z"
    }), o = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.06 0.13C11.91 0.14 12.52 0.17 13.12 0.32C13.82 0.48 14.49 0.76 15.11 1.14C15.82 1.58 16.42 2.19 17.43 3.19L18.81 4.57C19.81 5.58 20.42 6.18 20.86 6.89C21.24 7.51 21.52 8.18 21.68 8.88C21.83 9.48 21.86 10.09 21.87 10.94C21.87 10.96 21.88 10.98 21.88 11V16.6C21.88 17.71 21.88 18.59 21.82 19.3C21.76 20.02 21.63 20.64 21.34 21.21C20.88 22.13 20.13 22.88 19.21 23.34C18.64 23.63 18.02 23.76 17.3 23.82C16.59 23.88 15.71 23.88 14.6 23.88H9.4C8.29 23.88 7.41 23.88 6.7 23.82C5.98 23.76 5.36 23.63 4.79 23.34C3.87 22.88 3.12 22.13 2.66 21.21C2.37 20.64 2.24 20.02 2.18 19.3C2.12 18.59 2.13 17.71 2.13 16.6V7.4C2.13 6.29 2.12 5.41 2.18 4.7C2.24 3.98 2.37 3.36 2.66 2.79C3.12 1.87 3.87 1.12 4.79 0.66C5.36 0.37 5.98 0.24 6.7 0.18C7.41 0.12 8.29 0.13 9.4 0.13H11C11.02 0.13 11.04 0.13 11.06 0.13ZM9.4 1.88C8.27 1.88 7.47 1.88 6.84 1.93C6.23 1.98 5.86 2.07 5.58 2.22C4.99 2.52 4.52 2.99 4.22 3.58C4.07 3.86 3.98 4.23 3.93 4.84C3.88 5.47 3.88 6.27 3.88 7.4V16.6C3.88 17.73 3.88 18.53 3.93 19.16C3.98 19.77 4.07 20.14 4.22 20.42C4.52 21.01 4.99 21.48 5.58 21.78C5.86 21.93 6.23 22.02 6.84 22.07C7.47 22.12 8.27 22.13 9.4 22.13H14.6C15.73 22.13 16.53 22.12 17.16 22.07C17.77 22.02 18.14 21.93 18.42 21.78C19.01 21.48 19.48 21.01 19.78 20.42C19.93 20.14 20.02 19.77 20.07 19.16C20.12 18.53 20.13 17.73 20.13 16.6V11.98C20.13 11.55 20.12 11.19 20.12 10.88C20.06 10.32 19.58 9.88 19 9.88H16C13.86 9.88 12.13 8.14 12.13 6V3C12.13 2.41 11.68 1.93 11.1 1.88C10.8 1.88 10.45 1.88 10.02 1.88H9.4ZM13.82 2.42C13.85 2.61 13.88 2.8 13.88 3V6C13.88 7.17 14.83 8.13 16 8.13H19C19.2 8.13 19.39 8.14 19.58 8.18C19.51 8.05 19.44 7.93 19.37 7.81C19.07 7.31 18.64 6.87 17.57 5.81L16.19 4.43C15.13 3.36 14.69 2.93 14.19 2.63C14.07 2.55 13.94 2.49 13.82 2.42Z"
    }), d[4] = l, d[5] = a, d[6] = s, d[7] = c, d[8] = o) : (l = d[4], a = d[5], s = d[6], c = d[7], o = d[8]), d[9] !== e || d[10] !== r || d[11] !== i ? (u = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l, a, s, c, o]
    }), d[9] = e, d[10] = r, d[11] = i, d[12] = u) : u = d[12], u
  }

  function i(e) {
    let r, i, l, a, s, c, o = (0, n.c)(11);
    return o[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), o[0] = e.title, o[1] = r) : r = o[1], o[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), o[2] = e.children, o[3] = i) : i = o[3], o[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      d: "M10.29 12.39H9.78C9.55 12.39 9.38 12.46 9.26 12.6C9.15 12.74 9.09 12.95 9.09 13.24V14.42C9.09 14.68 9.06 14.9 9 15.08C8.94 15.26 8.84 15.4 8.7 15.5C8.57 15.61 8.4 15.68 8.19 15.72V15.78C8.5 15.84 8.73 15.97 8.87 16.18C9.02 16.39 9.09 16.69 9.09 17.08V18.26C9.09 18.55 9.15 18.76 9.26 18.9C9.38 19.04 9.55 19.11 9.78 19.11H10.29V20.25H9.61C8.95 20.25 8.46 20.09 8.13 19.77C7.8 19.45 7.63 18.97 7.63 18.33V17.11C7.63 16.81 7.58 16.6 7.47 16.49C7.37 16.38 7.18 16.32 6.9 16.32H6.47V15.18H6.9C7.18 15.18 7.37 15.12 7.47 15.01C7.58 14.89 7.63 14.68 7.63 14.39V13.17C7.63 12.53 7.8 12.05 8.13 11.73C8.46 11.41 8.95 11.25 9.61 11.25H10.29V12.39Z"
    }), a = (0, t.jsx)("path", {
      d: "M14.39 11.25C15.05 11.25 15.54 11.41 15.87 11.73C16.2 12.05 16.37 12.53 16.37 13.17V14.39C16.37 14.68 16.42 14.89 16.53 15.01C16.63 15.12 16.82 15.18 17.1 15.18H17.53V16.32H17.1C16.82 16.32 16.63 16.38 16.53 16.49C16.42 16.6 16.37 16.81 16.37 17.11V18.33C16.37 18.97 16.2 19.45 15.87 19.77C15.54 20.09 15.05 20.25 14.39 20.25H13.71V19.11H14.22C14.45 19.11 14.62 19.04 14.73 18.9C14.85 18.76 14.9 18.55 14.9 18.26V17.08C14.9 16.82 14.94 16.6 15 16.42C15.06 16.24 15.16 16.1 15.3 16C15.43 15.89 15.6 15.82 15.81 15.78V15.72C15.5 15.66 15.27 15.53 15.12 15.32C14.98 15.11 14.9 14.81 14.9 14.42V13.24C14.9 12.95 14.85 12.74 14.73 12.6C14.62 12.46 14.45 12.39 14.22 12.39H13.71V11.25H14.39Z"
    }), s = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.06 0.13C11.91 0.14 12.52 0.17 13.12 0.32C13.82 0.48 14.49 0.76 15.11 1.14C15.82 1.58 16.42 2.19 17.43 3.19L18.81 4.57C19.81 5.58 20.42 6.18 20.86 6.89C21.24 7.51 21.52 8.18 21.68 8.88C21.83 9.48 21.86 10.09 21.87 10.94C21.87 10.96 21.88 10.98 21.88 11V16.6C21.88 17.71 21.88 18.59 21.82 19.3C21.76 20.02 21.63 20.64 21.34 21.21C20.88 22.13 20.13 22.88 19.21 23.34C18.64 23.63 18.02 23.76 17.3 23.82C16.59 23.88 15.71 23.88 14.6 23.88H9.4C8.29 23.88 7.41 23.88 6.7 23.82C5.98 23.76 5.36 23.63 4.79 23.34C3.87 22.88 3.12 22.13 2.66 21.21C2.37 20.64 2.24 20.02 2.18 19.3C2.12 18.59 2.13 17.71 2.13 16.6V7.4C2.13 6.29 2.12 5.41 2.18 4.7C2.24 3.98 2.37 3.36 2.66 2.79C3.12 1.87 3.87 1.12 4.79 0.66C5.36 0.37 5.98 0.24 6.7 0.18C7.41 0.12 8.29 0.13 9.4 0.13H11C11.02 0.13 11.04 0.13 11.06 0.13ZM9.4 1.88C8.27 1.88 7.47 1.88 6.84 1.93C6.23 1.98 5.86 2.07 5.58 2.22C4.99 2.52 4.52 2.99 4.22 3.58C4.07 3.86 3.98 4.23 3.93 4.84C3.88 5.47 3.88 6.27 3.88 7.4V16.6C3.88 17.73 3.88 18.53 3.93 19.16C3.98 19.77 4.07 20.14 4.22 20.42C4.52 21.01 4.99 21.48 5.58 21.78C5.86 21.93 6.23 22.02 6.84 22.07C7.47 22.12 8.27 22.13 9.4 22.13H14.6C15.73 22.13 16.53 22.12 17.16 22.07C17.77 22.02 18.14 21.93 18.42 21.78C19.01 21.48 19.48 21.01 19.78 20.42C19.93 20.14 20.02 19.77 20.07 19.16C20.12 18.53 20.13 17.73 20.13 16.6V11.98C20.13 11.55 20.12 11.19 20.12 10.88C20.06 10.32 19.58 9.88 19 9.88H16C13.86 9.88 12.13 8.14 12.13 6V3C12.13 2.41 11.68 1.93 11.1 1.88C10.8 1.88 10.45 1.88 10.02 1.88H9.4ZM13.82 2.42C13.85 2.61 13.88 2.8 13.88 3V6C13.88 7.17 14.83 8.13 16 8.13H19C19.2 8.13 19.39 8.14 19.58 8.18C19.51 8.05 19.44 7.93 19.37 7.81C19.07 7.31 18.64 6.87 17.57 5.81L16.19 4.43C15.13 3.36 14.69 2.93 14.19 2.63C14.07 2.55 13.94 2.49 13.82 2.42Z"
    }), o[4] = l, o[5] = a, o[6] = s) : (l = o[4], a = o[5], s = o[6]), o[7] !== e || o[8] !== r || o[9] !== i ? (c = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l, a, s]
    }), o[7] = e, o[8] = r, o[9] = i, o[10] = c) : c = o[10], c
  }

  function l(e) {
    let r, i, l, a, s = (0, n.c)(9);
    return s[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = r) : r = s[1], s[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = i) : i = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.06 0.13C11.91 0.14 12.52 0.17 13.12 0.32C13.82 0.48 14.49 0.76 15.11 1.14C15.82 1.58 16.42 2.19 17.43 3.19L18.81 4.57C19.81 5.58 20.42 6.18 20.86 6.89C21.24 7.51 21.52 8.18 21.68 8.88C21.83 9.48 21.86 10.09 21.87 10.94C21.87 10.96 21.88 10.98 21.88 11V16.6C21.88 17.71 21.88 18.59 21.82 19.3C21.76 20.02 21.63 20.64 21.34 21.21C20.88 22.13 20.13 22.88 19.21 23.34C18.64 23.63 18.02 23.76 17.3 23.82C16.59 23.88 15.71 23.88 14.6 23.88H9.4C8.29 23.88 7.41 23.88 6.7 23.82C5.98 23.76 5.36 23.63 4.79 23.34C3.87 22.88 3.12 22.13 2.66 21.21C2.46 20.84 2.35 20.44 2.27 20H2C0.9 20 1.34e-05 19.1 0 18V12C0 10.9 0.9 10 2 10H2.13V7.4C2.13 6.29 2.12 5.41 2.18 4.7C2.24 3.98 2.37 3.36 2.66 2.79C3.12 1.87 3.87 1.12 4.79 0.66C5.36 0.37 5.98 0.24 6.7 0.18C7.41 0.12 8.29 0.13 9.4 0.13H11C11.02 0.13 11.04 0.13 11.06 0.13ZM9.4 1.88C8.27 1.88 7.47 1.88 6.84 1.93C6.23 1.98 5.86 2.07 5.58 2.22C4.99 2.52 4.52 2.99 4.22 3.58C4.07 3.86 3.98 4.23 3.93 4.84C3.88 5.47 3.88 6.27 3.88 7.4V10H8C9.1 10 10 10.9 10 12V18C10 19.1 9.1 20 8 20H4.06C4.1 20.16 4.15 20.3 4.22 20.42C4.52 21.01 4.99 21.48 5.58 21.78C5.86 21.93 6.23 22.02 6.84 22.07C7.47 22.12 8.27 22.13 9.4 22.13H14.6C15.73 22.13 16.53 22.12 17.16 22.07C17.77 22.02 18.14 21.93 18.42 21.78C19.01 21.48 19.48 21.01 19.78 20.42C19.93 20.14 20.02 19.77 20.07 19.16C20.12 18.53 20.13 17.73 20.13 16.6V11.98C20.13 11.55 20.12 11.19 20.12 10.88C20.06 10.32 19.58 9.88 19 9.88H16C13.86 9.88 12.13 8.14 12.13 6V3C12.12 2.41 11.68 1.93 11.1 1.88C10.8 1.88 10.45 1.88 10.02 1.88H9.4ZM3.1 12C2.7 12 2.46 12.44 2.68 12.77L4.12 15.01L2.66 17.28C2.45 17.61 2.68 18.05 3.08 18.05H3.22C3.4 18.05 3.56 17.96 3.65 17.81L4.86 15.82H4.91L6.11 17.81C6.2 17.96 6.37 18.05 6.54 18.05H6.77C7.16 18.05 7.4 17.61 7.19 17.28L5.73 15.01L7.17 12.77C7.38 12.44 7.14 12 6.75 12H6.6C6.43 12 6.26 12.09 6.17 12.24L4.99 14.19H4.94L3.75 12.24C3.66 12.09 3.5 12 3.33 12H3.1ZM13.82 2.42C13.85 2.61 13.88 2.8 13.88 3V6C13.88 7.17 14.83 8.13 16 8.13H19C19.2 8.13 19.39 8.14 19.58 8.18C19.51 8.06 19.44 7.93 19.37 7.81C19.07 7.31 18.64 6.87 17.57 5.81L16.19 4.43C15.13 3.36 14.69 2.93 14.19 2.63C14.07 2.55 13.94 2.49 13.82 2.42Z"
    }), s[4] = l) : l = s[4], s[5] !== e || s[6] !== r || s[7] !== i ? (a = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l]
    }), s[5] = e, s[6] = r, s[7] = i, s[8] = a) : a = s[8], a
  }

  function a(e) {
    let r, i, l, a, s, c = (0, n.c)(10);
    return c[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), c[0] = e.title, c[1] = r) : r = c[1], c[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), c[2] = e.children, c[3] = i) : i = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      d: "M5.16 13.04C5.53 13.04 5.81 13.12 5.99 13.29C6.18 13.45 6.27 13.7 6.27 14.04C6.27 14.38 6.18 14.63 5.99 14.8C5.81 14.96 5.53 15.05 5.16 15.05H4.06V13.04H5.16Z"
    }), a = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.06 0.13C11.91 0.14 12.52 0.17 13.12 0.32C13.82 0.48 14.49 0.76 15.11 1.14C15.82 1.58 16.42 2.19 17.43 3.19L18.81 4.57C19.81 5.58 20.42 6.18 20.86 6.89C21.24 7.51 21.52 8.18 21.68 8.88C21.83 9.48 21.86 10.09 21.87 10.94C21.87 10.96 21.88 10.98 21.88 11V16.6C21.88 17.71 21.88 18.59 21.82 19.3C21.76 20.02 21.63 20.64 21.34 21.21C20.88 22.13 20.13 22.88 19.21 23.34C18.64 23.63 18.02 23.76 17.3 23.82C16.59 23.88 15.71 23.88 14.6 23.88H9.4C8.29 23.88 7.41 23.88 6.7 23.82C5.98 23.76 5.36 23.63 4.79 23.34C3.87 22.88 3.12 22.13 2.66 21.21C2.46 20.84 2.35 20.44 2.27 20H2C0.9 20 1.44e-05 19.1 0 18V12C0 10.9 0.9 10 2 10H2.13V7.4C2.13 6.29 2.12 5.41 2.18 4.7C2.24 3.98 2.37 3.36 2.66 2.79C3.12 1.87 3.87 1.12 4.79 0.66C5.36 0.37 5.98 0.24 6.7 0.18C7.41 0.12 8.29 0.13 9.4 0.13H11C11.02 0.13 11.04 0.13 11.06 0.13ZM9.4 1.88C8.27 1.88 7.47 1.88 6.84 1.93C6.23 1.98 5.86 2.07 5.58 2.22C4.99 2.52 4.52 2.99 4.22 3.58C4.07 3.86 3.98 4.23 3.93 4.84C3.88 5.47 3.88 6.27 3.88 7.4V10H8C9.1 10 10 10.9 10 12V18C10 19.1 9.1 20 8 20H4.06C4.1 20.16 4.15 20.3 4.22 20.42C4.52 21.01 4.99 21.48 5.58 21.78C5.86 21.93 6.23 22.02 6.84 22.07C7.47 22.12 8.27 22.13 9.4 22.13H14.6C15.73 22.13 16.53 22.12 17.16 22.07C17.77 22.02 18.14 21.93 18.42 21.78C19.01 21.48 19.48 21.01 19.78 20.42C19.93 20.14 20.02 19.77 20.07 19.16C20.12 18.53 20.13 17.73 20.13 16.6V11.98C20.13 11.55 20.12 11.19 20.12 10.88C20.06 10.32 19.58 9.88 19 9.88H16C13.86 9.88 12.13 8.14 12.13 6V3C12.12 2.41 11.68 1.93 11.1 1.88C10.8 1.88 10.45 1.88 10.02 1.88H9.4ZM3.32 12C3.05 12 2.82 12.22 2.82 12.5V17.5C2.82 17.78 3.05 18 3.32 18H3.56C3.83 18 4.06 17.78 4.06 17.5V16.08H5.3C6.01 16.08 6.56 15.91 6.95 15.55C7.34 15.2 7.53 14.7 7.53 14.04C7.53 13.61 7.45 13.24 7.27 12.93C7.1 12.63 6.84 12.4 6.51 12.24C6.18 12.08 5.77 12 5.3 12H3.32ZM13.82 2.42C13.85 2.61 13.88 2.8 13.88 3V6C13.88 7.17 14.83 8.13 16 8.13H19C19.2 8.13 19.39 8.14 19.58 8.18C19.51 8.06 19.44 7.93 19.37 7.81C19.07 7.31 18.64 6.87 17.57 5.81L16.19 4.43C15.13 3.36 14.69 2.93 14.19 2.63C14.07 2.55 13.94 2.49 13.82 2.42Z"
    }), c[4] = l, c[5] = a) : (l = c[4], a = c[5]), c[6] !== e || c[7] !== r || c[8] !== i ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l, a]
    }), c[6] = e, c[7] = r, c[8] = i, c[9] = s) : s = c[9], s
  }

  function s(e) {
    let r, i, l, a, s, c, o, u, d, C = (0, n.c)(14);
    return C[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), C[0] = e.title, C[1] = r) : r = C[1], C[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), C[2] = e.children, C[3] = i) : i = C[3], C[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      d: "M12 20H9C8.45 20 8 19.55 8 19C8 18.45 8.45 18 9 18H12V20Z"
    }), a = (0, t.jsx)("path", {
      d: "M15 16C15.55 16 16 16.45 16 17C16 17.55 15.55 18 15 18H12V16H15Z"
    }), s = (0, t.jsx)("path", {
      d: "M12 16H9C8.45 16 8 15.55 8 15C8 14.45 8.45 14 9 14H12V16Z"
    }), c = (0, t.jsx)("path", {
      d: "M15 12C15.55 12 16 12.45 16 13C16 13.55 15.55 14 15 14H12V12H15Z"
    }), o = (0, t.jsx)("path", {
      d: "M12 12H9C8.45 12 8 11.55 8 11C8 10.45 8.45 10 9 10H12V12Z"
    }), u = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.06 0.13C11.91 0.14 12.52 0.17 13.12 0.32C13.82 0.48 14.49 0.76 15.11 1.14C15.82 1.58 16.42 2.19 17.43 3.19L18.81 4.57C19.81 5.58 20.42 6.18 20.86 6.89C21.24 7.51 21.52 8.18 21.68 8.88C21.83 9.48 21.86 10.09 21.87 10.94C21.87 10.96 21.88 10.98 21.88 11V16.6C21.88 17.71 21.88 18.59 21.82 19.3C21.76 20.02 21.63 20.64 21.34 21.21C20.88 22.13 20.13 22.88 19.21 23.34C18.64 23.63 18.02 23.76 17.3 23.82C16.59 23.88 15.71 23.88 14.6 23.88H9.4C8.29 23.88 7.41 23.88 6.7 23.82C5.98 23.76 5.36 23.63 4.79 23.34C3.87 22.88 3.12 22.13 2.66 21.21C2.37 20.64 2.24 20.02 2.18 19.3C2.12 18.59 2.13 17.71 2.13 16.6V7.4C2.13 6.29 2.12 5.41 2.18 4.7C2.24 3.98 2.37 3.36 2.66 2.79C3.12 1.87 3.87 1.12 4.79 0.66C5.36 0.37 5.98 0.24 6.7 0.18C7.41 0.12 8.29 0.13 9.4 0.13H11C11.02 0.13 11.04 0.13 11.06 0.13ZM9.4 1.88C8.27 1.88 7.47 1.88 6.84 1.93C6.23 1.98 5.86 2.07 5.58 2.22C4.99 2.52 4.52 2.99 4.22 3.58C4.07 3.86 3.98 4.23 3.93 4.84C3.88 5.47 3.88 6.27 3.88 7.4V16.6C3.88 17.73 3.88 18.53 3.93 19.16C3.98 19.77 4.07 20.14 4.22 20.42C4.52 21.01 4.99 21.48 5.58 21.78C5.86 21.93 6.23 22.02 6.84 22.07C7.47 22.12 8.27 22.13 9.4 22.13H14.6C15.73 22.13 16.53 22.12 17.16 22.07C17.77 22.02 18.14 21.93 18.42 21.78C19.01 21.48 19.48 21.01 19.78 20.42C19.93 20.14 20.02 19.77 20.07 19.16C20.12 18.53 20.13 17.73 20.13 16.6V11.98C20.13 11.55 20.12 11.19 20.12 10.88C20.06 10.32 19.58 9.88 19 9.88H16C13.86 9.88 12.13 8.14 12.13 6V3C12.13 2.41 11.68 1.93 11.1 1.88C10.8 1.88 10.45 1.88 10.02 1.88H9.4ZM13.82 2.42C13.85 2.61 13.88 2.8 13.88 3V6C13.88 7.17 14.83 8.13 16 8.13H19C19.2 8.13 19.39 8.14 19.58 8.18C19.51 8.05 19.44 7.93 19.37 7.81C19.07 7.31 18.64 6.87 17.57 5.81L16.19 4.43C15.13 3.36 14.69 2.93 14.19 2.63C14.07 2.55 13.94 2.49 13.82 2.42Z"
    }), C[4] = l, C[5] = a, C[6] = s, C[7] = c, C[8] = o, C[9] = u) : (l = C[4], a = C[5], s = C[6], c = C[7], o = C[8], u = C[9]), C[10] !== e || C[11] !== r || C[12] !== i ? (d = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l, a, s, c, o, u]
    }), C[10] = e, C[11] = r, C[12] = i, C[13] = d) : d = C[13], d
  }
  r._isSVG = !0, e.s(["default", 0, r], 574933), i._isSVG = !0, e.s(["default", 0, i], 481347), l._isSVG = !0, e.s(["default", 0, l], 920943), a._isSVG = !0, e.s(["default", 0, a], 794902), s._isSVG = !0, e.s(["default", 0, s], 974975)
}, 570730, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, s, c, o = (0, n.c)(11);
    return o[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), o[0] = e.title, o[1] = r) : r = o[1], o[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), o[2] = e.children, o[3] = i) : i = o[3], o[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      d: "M16 17.25C16.41 17.25 16.75 17.59 16.75 18C16.75 18.41 16.41 18.75 16 18.75H8C7.59 18.75 7.25 18.41 7.25 18C7.25 17.59 7.59 17.25 8 17.25H16Z"
    }), a = (0, t.jsx)("path", {
      d: "M14 13.25C14.41 13.25 14.75 13.59 14.75 14C14.75 14.41 14.41 14.75 14 14.75H8C7.59 14.75 7.25 14.41 7.25 14C7.25 13.59 7.59 13.25 8 13.25H14Z"
    }), s = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.06 0.13C11.91 0.14 12.52 0.17 13.12 0.32C13.82 0.48 14.49 0.76 15.11 1.14C15.82 1.58 16.42 2.19 17.43 3.19L18.81 4.57C19.81 5.58 20.42 6.18 20.86 6.89C21.24 7.51 21.52 8.18 21.68 8.88C21.83 9.48 21.86 10.09 21.87 10.94C21.87 10.96 21.88 10.98 21.88 11V16.6C21.88 17.71 21.88 18.59 21.82 19.3C21.76 20.02 21.63 20.64 21.34 21.21C20.88 22.13 20.13 22.88 19.21 23.34C18.64 23.63 18.02 23.76 17.3 23.82C16.59 23.88 15.71 23.88 14.6 23.88H9.4C8.29 23.88 7.41 23.88 6.7 23.82C5.98 23.76 5.36 23.63 4.79 23.34C3.87 22.88 3.12 22.13 2.66 21.21C2.37 20.64 2.24 20.02 2.18 19.3C2.12 18.59 2.13 17.71 2.13 16.6V7.4C2.13 6.29 2.12 5.41 2.18 4.7C2.24 3.98 2.37 3.36 2.66 2.79C3.12 1.87 3.87 1.12 4.79 0.66C5.36 0.37 5.98 0.24 6.7 0.18C7.41 0.12 8.29 0.13 9.4 0.13H11C11.02 0.13 11.04 0.13 11.06 0.13ZM9.4 1.88C8.27 1.88 7.47 1.88 6.84 1.93C6.23 1.98 5.86 2.07 5.58 2.22C4.99 2.52 4.52 2.99 4.22 3.58C4.07 3.86 3.98 4.23 3.93 4.84C3.88 5.47 3.88 6.27 3.88 7.4V16.6C3.88 17.73 3.88 18.53 3.93 19.16C3.98 19.77 4.07 20.14 4.22 20.42C4.52 21.01 4.99 21.48 5.58 21.78C5.86 21.93 6.23 22.02 6.84 22.07C7.47 22.12 8.27 22.13 9.4 22.13H14.6C15.73 22.13 16.53 22.12 17.16 22.07C17.77 22.02 18.14 21.93 18.42 21.78C19.01 21.48 19.48 21.01 19.78 20.42C19.93 20.14 20.02 19.77 20.07 19.16C20.12 18.53 20.13 17.73 20.13 16.6V11.98C20.13 11.55 20.12 11.19 20.12 10.88C20.06 10.32 19.58 9.88 19 9.88H16C13.86 9.88 12.13 8.14 12.13 6V3C12.13 2.41 11.68 1.93 11.1 1.88C10.8 1.88 10.45 1.88 10.02 1.88H9.4ZM13.82 2.42C13.85 2.61 13.88 2.8 13.88 3V6C13.88 7.17 14.83 8.13 16 8.13H19C19.2 8.13 19.39 8.14 19.58 8.18C19.51 8.05 19.44 7.93 19.37 7.81C19.07 7.31 18.64 6.87 17.57 5.81L16.19 4.43C15.13 3.36 14.69 2.93 14.19 2.63C14.07 2.55 13.94 2.49 13.82 2.42Z"
    }), o[4] = l, o[5] = a, o[6] = s) : (l = o[4], a = o[5], s = o[6]), o[7] !== e || o[8] !== r || o[9] !== i ? (c = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l, a, s]
    }), o[7] = e, o[8] = r, o[9] = i, o[10] = c) : c = o[10], c
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 357820, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, s, c, o, u = (0, n.c)(12);
    return u[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), u[0] = e.title, u[1] = r) : r = u[1], u[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), u[2] = e.children, u[3] = i) : i = u[3], u[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.06 0.13C11.91 0.14 12.52 0.17 13.12 0.32C13.82 0.48 14.49 0.76 15.11 1.14C15.82 1.58 16.42 2.19 17.43 3.19L18.81 4.57C19.81 5.58 20.42 6.18 20.86 6.89C21.24 7.51 21.52 8.18 21.68 8.88C21.83 9.48 21.86 10.09 21.87 10.94C21.87 10.96 21.88 10.98 21.88 11V16.6C21.88 17.71 21.88 18.59 21.82 19.3C21.76 20.02 21.63 20.64 21.34 21.21C20.88 22.13 20.13 22.88 19.21 23.34C18.64 23.63 18.02 23.76 17.3 23.82C16.59 23.88 15.71 23.88 14.6 23.88H9.4C8.29 23.88 7.41 23.88 6.7 23.82C5.98 23.76 5.36 23.63 4.79 23.34C3.87 22.88 3.12 22.13 2.66 21.21C2.46 20.84 2.35 20.44 2.27 20H4.06C4.1 20.16 4.15 20.3 4.22 20.42C4.52 21.01 4.99 21.48 5.58 21.78C5.86 21.93 6.23 22.02 6.84 22.07C7.47 22.12 8.27 22.13 9.4 22.13H14.6C15.73 22.13 16.53 22.12 17.16 22.07C17.77 22.02 18.14 21.93 18.42 21.78C19.01 21.48 19.48 21.01 19.78 20.42C19.93 20.14 20.02 19.77 20.07 19.16C20.12 18.53 20.13 17.73 20.13 16.6V11.98C20.13 11.55 20.12 11.19 20.12 10.88C20.06 10.32 19.58 9.88 19 9.88H16C13.86 9.88 12.13 8.14 12.13 6V3C12.13 2.41 11.68 1.93 11.1 1.88C10.8 1.88 10.45 1.88 10.02 1.88H9.4C8.27 1.88 7.47 1.88 6.84 1.93C6.23 1.98 5.86 2.07 5.58 2.22C4.99 2.52 4.52 2.99 4.22 3.58C4.07 3.86 3.98 4.23 3.93 4.84C3.88 5.47 3.88 6.27 3.88 7.4V10H2.13V7.4C2.13 6.29 2.12 5.41 2.18 4.7C2.24 3.98 2.37 3.36 2.66 2.79C3.12 1.87 3.87 1.12 4.79 0.66C5.36 0.37 5.98 0.24 6.7 0.18C7.41 0.12 8.29 0.13 9.4 0.13H11C11.02 0.13 11.04 0.13 11.06 0.13ZM13.82 2.42C13.85 2.61 13.88 2.8 13.88 3V6C13.88 7.17 14.83 8.13 16 8.13H19C19.2 8.13 19.39 8.14 19.58 8.18C19.51 8.06 19.44 7.93 19.37 7.81C19.07 7.31 18.64 6.87 17.57 5.81L16.19 4.43C15.13 3.36 14.69 2.93 14.19 2.63C14.07 2.55 13.94 2.49 13.82 2.42Z"
    }), a = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.49 12C4.97 12 5.38 12.08 5.72 12.24C6.05 12.4 6.31 12.63 6.49 12.94C6.66 13.25 6.75 13.62 6.75 14.06C6.75 14.72 6.55 15.22 6.16 15.58C5.77 15.94 5.21 16.12 4.49 16.12H3.25V17.55C3.25 17.83 3.02 18.05 2.75 18.05H2.5C2.22 18.05 2 17.83 2 17.55V12.5C2 12.22 2.22 12 2.5 12H4.49ZM3.25 15.07H4.36C4.73 15.07 5.01 14.99 5.19 14.82C5.38 14.66 5.47 14.4 5.47 14.06C5.47 13.72 5.38 13.46 5.19 13.3C5.01 13.13 4.73 13.05 4.36 13.05H3.25V15.07Z"
    }), s = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.06 12C10.7 12 11.25 12.13 11.71 12.39C12.17 12.65 12.53 13.01 12.78 13.46C13.03 13.92 13.15 14.44 13.15 15.03C13.15 15.61 13.03 16.13 12.78 16.59C12.53 17.04 12.17 17.4 11.71 17.66C11.25 17.92 10.7 18.05 10.06 18.05H8.26C7.99 18.05 7.76 17.83 7.76 17.55V12.5C7.76 12.22 7.99 12 8.26 12H10.06ZM9.02 16.99H10.05C10.43 16.99 10.76 16.91 11.02 16.75C11.29 16.58 11.5 16.35 11.65 16.06C11.79 15.76 11.87 15.42 11.87 15.03C11.87 14.63 11.79 14.28 11.65 13.99C11.5 13.7 11.29 13.47 11.02 13.31C10.76 13.15 10.43 13.06 10.05 13.06H9.02V16.99Z"
    }), c = (0, t.jsx)("path", {
      d: "M17.94 12C18.22 12 18.44 12.22 18.44 12.5V12.55C18.44 12.82 18.22 13.05 17.94 13.05H15.5V14.67H17.39C17.67 14.67 17.89 14.89 17.89 15.17V15.21C17.89 15.49 17.67 15.71 17.39 15.71H15.5V17.55C15.5 17.83 15.28 18.05 15 18.05H14.75C14.48 18.05 14.25 17.83 14.25 17.55V12.5C14.25 12.22 14.48 12 14.75 12H17.94Z"
    }), u[4] = l, u[5] = a, u[6] = s, u[7] = c) : (l = u[4], a = u[5], s = u[6], c = u[7]), u[8] !== e || u[9] !== r || u[10] !== i ? (o = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l, a, s, c]
    }), u[8] = e, u[9] = r, u[10] = i, u[11] = o) : o = u[11], o
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 572477, 315099, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, s, c, o = (0, n.c)(11);
    return o[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), o[0] = e.title, o[1] = r) : r = o[1], o[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), o[2] = e.children, o[3] = i) : i = o[3], o[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      d: "M11.89 18.19C12.16 18.19 12.39 18.29 12.58 18.48C12.77 18.66 12.87 18.89 12.87 19.17C12.87 19.44 12.77 19.67 12.58 19.86C12.39 20.05 12.16 20.14 11.89 20.14C11.62 20.14 11.39 20.05 11.2 19.86C11.01 19.67 10.91 19.44 10.91 19.17C10.91 18.89 11.01 18.66 11.2 18.48C11.39 18.28 11.62 18.19 11.89 18.19Z"
    }), a = (0, t.jsx)("path", {
      d: "M12.08 11.46C12.6 11.46 13.06 11.55 13.47 11.74C13.87 11.92 14.19 12.18 14.42 12.5C14.65 12.83 14.77 13.21 14.77 13.65C14.77 13.88 14.73 14.11 14.65 14.32C14.57 14.53 14.45 14.73 14.29 14.92C14.13 15.12 13.91 15.32 13.65 15.52L13.31 15.78C13.14 15.91 13.01 16.04 12.91 16.19C12.81 16.34 12.74 16.52 12.7 16.71C12.62 17.09 12.32 17.42 11.93 17.42H11.89C11.48 17.42 11.14 17.08 11.19 16.68C11.2 16.58 11.22 16.5 11.24 16.41C11.29 16.13 11.39 15.88 11.52 15.67C11.66 15.46 11.85 15.25 12.09 15.07L12.42 14.8C12.67 14.6 12.85 14.42 12.95 14.26C13.05 14.09 13.1 13.92 13.1 13.73C13.1 13.45 13 13.23 12.8 13.07C12.6 12.91 12.33 12.84 12 12.84C11.67 12.84 11.4 12.92 11.18 13.09C11.14 13.12 11.1 13.16 11.06 13.21C10.8 13.49 10.51 13.8 10.13 13.8C9.67 13.8 9.29 13.39 9.48 12.97C9.54 12.83 9.61 12.7 9.7 12.57C9.95 12.22 10.28 11.95 10.68 11.75C11.09 11.56 11.56 11.46 12.08 11.46Z"
    }), s = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.06 0.13C11.91 0.14 12.52 0.17 13.12 0.32C13.82 0.48 14.49 0.76 15.11 1.14C15.82 1.58 16.42 2.19 17.43 3.19L18.81 4.57C19.81 5.58 20.42 6.18 20.86 6.89C21.24 7.51 21.52 8.18 21.68 8.88C21.83 9.48 21.86 10.09 21.87 10.94C21.87 10.96 21.88 10.98 21.88 11V16.6C21.88 17.71 21.88 18.59 21.82 19.3C21.76 20.02 21.63 20.64 21.34 21.21C20.88 22.13 20.13 22.88 19.21 23.34C18.64 23.63 18.02 23.76 17.3 23.82C16.59 23.88 15.71 23.88 14.6 23.88H9.4C8.29 23.88 7.41 23.88 6.7 23.82C5.98 23.76 5.36 23.63 4.79 23.34C3.87 22.88 3.12 22.13 2.66 21.21C2.37 20.64 2.24 20.02 2.18 19.3C2.12 18.59 2.13 17.71 2.13 16.6V7.4C2.13 6.29 2.12 5.41 2.18 4.7C2.24 3.98 2.37 3.36 2.66 2.79C3.12 1.87 3.87 1.12 4.79 0.66C5.36 0.37 5.98 0.24 6.7 0.18C7.41 0.12 8.29 0.13 9.4 0.13H11C11.02 0.13 11.04 0.13 11.06 0.13ZM9.4 1.88C8.27 1.88 7.47 1.88 6.84 1.93C6.23 1.98 5.86 2.07 5.58 2.22C4.99 2.52 4.52 2.99 4.22 3.58C4.07 3.86 3.98 4.23 3.93 4.84C3.88 5.47 3.88 6.27 3.88 7.4V16.6C3.88 17.73 3.88 18.53 3.93 19.16C3.98 19.77 4.07 20.14 4.22 20.42C4.52 21.01 4.99 21.48 5.58 21.78C5.86 21.93 6.23 22.02 6.84 22.07C7.47 22.12 8.27 22.13 9.4 22.13H14.6C15.73 22.13 16.53 22.12 17.16 22.07C17.77 22.02 18.14 21.93 18.42 21.78C19.01 21.48 19.48 21.01 19.78 20.42C19.93 20.14 20.02 19.77 20.07 19.16C20.12 18.53 20.13 17.73 20.13 16.6V11.98C20.13 11.55 20.12 11.19 20.12 10.88C20.06 10.32 19.58 9.88 19 9.88H16C13.86 9.88 12.13 8.14 12.13 6V3C12.12 2.41 11.68 1.93 11.1 1.88C10.8 1.88 10.45 1.88 10.02 1.88H9.4ZM13.82 2.42C13.85 2.61 13.88 2.8 13.88 3V6C13.88 7.17 14.83 8.13 16 8.13H19C19.2 8.13 19.39 8.14 19.58 8.18C19.51 8.06 19.44 7.93 19.37 7.81C19.07 7.31 18.64 6.87 17.57 5.81L16.19 4.43C15.13 3.36 14.69 2.93 14.19 2.63C14.07 2.55 13.94 2.49 13.82 2.42Z"
    }), o[4] = l, o[5] = a, o[6] = s) : (l = o[4], a = o[5], s = o[6]), o[7] !== e || o[8] !== r || o[9] !== i ? (c = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l, a, s]
    }), o[7] = e, o[8] = r, o[9] = i, o[10] = c) : c = o[10], c
  }

  function i(e) {
    let r, i, l, a, s = (0, n.c)(9);
    return s[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = r) : r = s[1], s[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = i) : i = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.06 0.13C11.91 0.14 12.52 0.17 13.12 0.32C13.82 0.48 14.49 0.76 15.11 1.14C15.82 1.58 16.42 2.19 17.43 3.19L18.81 4.57C19.81 5.58 20.42 6.18 20.86 6.89C21.24 7.51 21.52 8.18 21.68 8.88C21.83 9.48 21.86 10.09 21.87 10.94C21.87 10.96 21.88 10.98 21.88 11V16.6C21.88 17.71 21.88 18.59 21.82 19.3C21.76 20.02 21.63 20.64 21.34 21.21C20.88 22.13 20.13 22.88 19.21 23.34C18.64 23.63 18.02 23.76 17.3 23.82C16.59 23.88 15.71 23.88 14.6 23.88H9.4C8.29 23.88 7.41 23.88 6.7 23.82C5.98 23.76 5.36 23.63 4.79 23.34C3.87 22.88 3.12 22.13 2.66 21.21C2.46 20.84 2.35 20.44 2.27 20H2C0.9 20 1.34e-05 19.1 0 18V12C0 10.9 0.9 10 2 10H2.13V7.4C2.13 6.29 2.12 5.41 2.18 4.7C2.24 3.98 2.37 3.36 2.66 2.79C3.12 1.87 3.87 1.12 4.79 0.66C5.36 0.37 5.98 0.24 6.7 0.18C7.41 0.12 8.29 0.13 9.4 0.13H11C11.02 0.13 11.04 0.13 11.06 0.13ZM9.4 1.88C8.27 1.88 7.47 1.88 6.84 1.93C6.23 1.98 5.86 2.07 5.58 2.22C4.99 2.52 4.52 2.99 4.22 3.58C4.07 3.86 3.98 4.23 3.93 4.84C3.88 5.47 3.88 6.27 3.88 7.4V10H10C11.1 10 12 10.9 12 12V18C12 19.1 11.1 20 10 20H4.06C4.1 20.16 4.15 20.3 4.22 20.42C4.52 21.01 4.99 21.48 5.58 21.78C5.86 21.93 6.23 22.02 6.84 22.07C7.47 22.12 8.27 22.13 9.4 22.13H14.6C15.73 22.13 16.53 22.12 17.16 22.07C17.77 22.02 18.14 21.93 18.42 21.78C19.01 21.48 19.48 21.01 19.78 20.42C19.93 20.14 20.02 19.77 20.07 19.16C20.12 18.53 20.13 17.73 20.13 16.6V11.98C20.13 11.55 20.12 11.19 20.12 10.88C20.06 10.32 19.58 9.88 19 9.88H16C13.86 9.88 12.13 8.14 12.13 6V3C12.12 2.41 11.68 1.93 11.1 1.88C10.8 1.88 10.45 1.88 10.02 1.88H9.4ZM2.14 11.92C1.82 11.92 1.58 12.23 1.66 12.55L2.93 17.62C2.99 17.84 3.19 18 3.42 18H4.39C4.62 18 4.83 17.84 4.88 17.62L5.8 13.73C5.8 13.72 5.82 13.7 5.84 13.7C5.85 13.7 5.87 13.72 5.87 13.73L6.79 17.62C6.85 17.84 7.05 18 7.28 18H8.26C8.49 18 8.69 17.84 8.74 17.62L10.02 12.55C10.1 12.23 9.86 11.93 9.54 11.92H9.2C8.96 11.92 8.75 12.09 8.71 12.32L7.77 16.81C7.77 16.82 7.76 16.83 7.74 16.83C7.73 16.83 7.71 16.82 7.71 16.81L6.66 12.4C6.6 12.17 6.4 12.01 6.17 12.01H5.53C5.3 12.01 5.1 12.17 5.04 12.4L4 16.81C3.99 16.82 3.98 16.83 3.97 16.83C3.95 16.83 3.94 16.82 3.94 16.81L3.01 12.32C2.96 12.09 2.76 11.92 2.52 11.92H2.14ZM13.82 2.42C13.85 2.61 13.88 2.8 13.88 3V6C13.88 7.17 14.83 8.13 16 8.13H19C19.2 8.13 19.39 8.14 19.58 8.18C19.51 8.06 19.44 7.93 19.37 7.81C19.07 7.31 18.64 6.87 17.57 5.81L16.19 4.43C15.13 3.36 14.69 2.93 14.19 2.63C14.07 2.55 13.94 2.49 13.82 2.42Z"
    }), s[4] = l) : l = s[4], s[5] !== e || s[6] !== r || s[7] !== i ? (a = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l]
    }), s[5] = e, s[6] = r, s[7] = i, s[8] = a) : a = s[8], a
  }
  r._isSVG = !0, e.s(["default", 0, r], 572477), i._isSVG = !0, e.s(["default", 0, i], 315099)
}, 767838, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, s = (0, n.c)(9);
    return s[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = r) : r = s[1], s[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = i) : i = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.6 2.13C17.71 2.13 18.59 2.12 19.3 2.18C20.02 2.24 20.64 2.37 21.21 2.66C22.13 3.12 22.88 3.87 23.34 4.79C23.63 5.36 23.76 5.98 23.82 6.7C23.88 7.41 23.88 8.29 23.88 9.4V14.6C23.88 15.71 23.88 16.59 23.82 17.3C23.76 18.02 23.63 18.64 23.34 19.21C22.88 20.13 22.13 20.88 21.21 21.34C20.64 21.63 20.02 21.76 19.3 21.82C18.59 21.88 17.71 21.88 16.6 21.88H7.4C6.29 21.88 5.41 21.88 4.7 21.82C3.98 21.76 3.36 21.63 2.79 21.34C1.87 20.88 1.12 20.13 0.66 19.21C0.37 18.64 0.24 18.02 0.18 17.3C0.12 16.59 0.13 15.71 0.13 14.6V9.4C0.13 8.29 0.12 7.41 0.18 6.7C0.24 5.98 0.37 5.36 0.66 4.79C1.12 3.87 1.87 3.12 2.79 2.66C3.36 2.37 3.98 2.24 4.7 2.18C5.41 2.12 6.29 2.13 7.4 2.13H16.6ZM13.65 13.66C12.66 14.36 11.34 14.36 10.35 13.66L3.56 19.77C3.57 19.78 3.57 19.78 3.58 19.78C3.86 19.93 4.23 20.02 4.84 20.07C5.47 20.12 6.27 20.13 7.4 20.13H16.6C17.73 20.13 18.53 20.12 19.16 20.07C19.77 20.02 20.14 19.93 20.42 19.78C20.43 19.78 20.43 19.78 20.44 19.77L13.65 13.66ZM2.02 6.19C1.98 6.37 1.95 6.59 1.93 6.84C1.88 7.47 1.88 8.27 1.88 9.4V14.6C1.88 15.73 1.88 16.53 1.93 17.16C1.98 17.77 2.07 18.14 2.22 18.42C2.24 18.47 2.27 18.51 2.29 18.56L9.03 12.5L2.02 6.19ZM14.97 12.5L21.71 18.56C21.73 18.51 21.76 18.47 21.78 18.42C21.93 18.14 22.02 17.77 22.07 17.16C22.12 16.53 22.13 15.73 22.13 14.6V9.4C22.13 8.27 22.12 7.47 22.07 6.84C22.05 6.59 22.02 6.37 21.98 6.19L14.97 12.5ZM7.4 3.88C6.27 3.88 5.47 3.88 4.84 3.93C4.23 3.98 3.86 4.07 3.58 4.22C3.34 4.34 3.13 4.49 2.93 4.66L11.25 12.15C11.67 12.53 12.33 12.53 12.75 12.15L21.07 4.66C20.87 4.49 20.66 4.34 20.42 4.22C20.14 4.07 19.77 3.98 19.16 3.93C18.53 3.88 17.73 3.88 16.6 3.88H7.4Z"
    }), s[4] = l) : l = s[4], s[5] !== e || s[6] !== r || s[7] !== i ? (a = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l]
    }), s[5] = e, s[6] = r, s[7] = i, s[8] = a) : a = s[8], a
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 758813, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, s, c, o, u = (0, n.c)(12);
    return u[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), u[0] = e.title, u[1] = r) : r = u[1], u[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), u[2] = e.children, u[3] = i) : i = u[3], u[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      d: "M12 8.13C14.69 8.13 16.87 10.31 16.87 13C16.87 15.31 18.12 17.44 20.13 18.57L20.43 18.74C20.85 18.97 21 19.51 20.76 19.93C20.53 20.35 19.99 20.5 19.57 20.26L19.28 20.1C16.71 18.65 15.12 15.94 15.12 13C15.12 11.27 13.73 9.88 12 9.88C10.27 9.88 8.87 11.27 8.87 13V14.44C8.87 17.13 9.94 19.7 11.84 21.6L12.62 22.38C12.96 22.72 12.96 23.28 12.62 23.62C12.28 23.96 11.72 23.96 11.38 23.62L10.6 22.84C8.38 20.61 7.12 17.59 7.12 14.44V13C7.12 10.31 9.31 8.13 12 8.13Z"
    }), a = (0, t.jsx)("path", {
      d: "M12 4.13C16.58 4.13 20.35 7.6 20.83 12.05C20.88 12.61 20.95 13.09 21.1 13.54C21.21 13.86 21.39 14.15 21.63 14.39L22.62 15.38C22.96 15.72 22.96 16.28 22.62 16.62C22.28 16.96 21.72 16.96 21.38 16.62L20.39 15.63C19.96 15.2 19.63 14.67 19.44 14.09C19.23 13.45 19.15 12.81 19.08 12.24C18.71 8.66 15.68 5.88 12 5.88C8.06 5.88 4.87 9.06 4.87 13C4.87 15.57 5.25 18.12 5.99 20.58L6.34 21.75C6.48 22.21 6.21 22.7 5.75 22.84C5.29 22.98 4.8 22.71 4.66 22.25L4.31 21.08C3.52 18.46 3.12 15.74 3.12 13C3.12 8.1 7.1 4.13 12 4.13Z"
    }), s = (0, t.jsx)("path", {
      d: "M12 12.13C12.48 12.13 12.87 12.52 12.87 13V14.1C12.88 16.61 14.03 18.97 16.01 20.51L17.04 21.31C17.42 21.61 17.49 22.16 17.19 22.54C16.89 22.92 16.34 22.99 15.96 22.69L14.94 21.89C12.53 20.02 11.13 17.15 11.12 14.1V13C11.12 12.52 11.52 12.13 12 12.13Z"
    }), c = (0, t.jsx)("path", {
      d: "M12 0.13C15.86 0.13 19.56 2.01 21.73 5.26C22 5.67 21.89 6.21 21.49 6.48C21.08 6.75 20.54 6.64 20.27 6.24C18.44 3.49 15.3 1.88 12 1.88C8.71 1.88 5.75 3.41 3.71 6.26C3.43 6.65 2.88 6.74 2.49 6.46C2.1 6.18 2.01 5.63 2.29 5.24C4.64 1.96 8.12 0.13 12 0.13Z"
    }), u[4] = l, u[5] = a, u[6] = s, u[7] = c) : (l = u[4], a = u[5], s = u[6], c = u[7]), u[8] !== e || u[9] !== r || u[10] !== i ? (o = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l, a, s, c]
    }), u[8] = e, u[9] = r, u[10] = i, u[11] = o) : o = u[11], o
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 407149, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, s = (0, n.c)(9);
    return s[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = r) : r = s[1], s[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = i) : i = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      d: "M14.6 2.13C15.71 2.13 16.59 2.12 17.3 2.18C18.02 2.24 18.64 2.37 19.21 2.66C20.13 3.12 20.88 3.87 21.34 4.79C21.63 5.36 21.76 5.98 21.82 6.7C21.88 7.41 21.88 8.29 21.88 9.4V14.6C21.88 15.71 21.88 16.59 21.82 17.3C21.76 18.02 21.63 18.64 21.34 19.21C20.88 20.13 20.13 20.88 19.21 21.34C18.64 21.63 18.02 21.76 17.3 21.82C16.59 21.88 15.71 21.88 14.6 21.88H9.4C8.29 21.88 7.41 21.88 6.7 21.82C5.98 21.76 5.36 21.63 4.79 21.34C3.87 20.88 3.12 20.13 2.66 19.21C2.37 18.64 2.24 18.02 2.18 17.3C2.12 16.59 2.13 15.71 2.13 14.6V9.4C2.13 8.29 2.12 7.41 2.18 6.7C2.24 5.98 2.37 5.36 2.66 4.79C3.12 3.87 3.87 3.12 4.79 2.66C5.36 2.37 5.98 2.24 6.7 2.18C7.41 2.12 8.29 2.13 9.4 2.13H14.6Z"
    }), s[4] = l) : l = s[4], s[5] !== e || s[6] !== r || s[7] !== i ? (a = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l]
    }), s[5] = e, s[6] = r, s[7] = i, s[8] = a) : a = s[8], a
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 161839, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, s, c = (0, n.c)(10);
    return c[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), c[0] = e.title, c[1] = r) : r = c[1], c[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), c[2] = e.children, c[3] = i) : i = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      d: "M19.5 9.13C19.98 9.13 20.38 9.52 20.38 10V10.5C20.38 14.83 17.09 18.39 12.88 18.83V21.13H15.5C15.98 21.13 16.38 21.52 16.38 22C16.38 22.48 15.98 22.88 15.5 22.88H8.5C8.02 22.88 7.63 22.48 7.63 22C7.63 21.52 8.02 21.13 8.5 21.13H11.13V18.83C6.91 18.39 3.63 14.83 3.63 10.5V10C3.63 9.52 4.02 9.13 4.5 9.13C4.98 9.13 5.38 9.52 5.38 10V10.5C5.38 14.16 8.34 17.13 12 17.13C15.66 17.13 18.63 14.16 18.63 10.5V10C18.63 9.52 19.02 9.13 19.5 9.13Z"
    }), a = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 0.63C14.42 0.63 16.38 2.58 16.38 5V10.5C16.38 12.92 14.42 14.88 12 14.88C9.58 14.88 7.63 12.92 7.63 10.5V5C7.63 2.58 9.58 0.63 12 0.63ZM12 2.38C10.55 2.38 9.38 3.55 9.38 5V10.5C9.38 11.95 10.55 13.13 12 13.13C13.45 13.13 14.63 11.95 14.63 10.5V5C14.63 3.55 13.45 2.38 12 2.38Z"
    }), c[4] = l, c[5] = a) : (l = c[4], a = c[5]), c[6] !== e || c[7] !== r || c[8] !== i ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l, a]
    }), c[6] = e, c[7] = r, c[8] = i, c[9] = s) : s = c[9], s
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 197721, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, s = (0, n.c)(9);
    return s[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = r) : r = s[1], s[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = i) : i = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.57 0.13C15.02 0.14 15.42 0.15 15.77 0.18C16.41 0.23 16.97 0.34 17.49 0.6C18.31 1.02 18.98 1.69 19.4 2.51C19.66 3.03 19.77 3.59 19.82 4.23C19.88 4.86 19.88 5.63 19.88 6.6V17.4C19.88 18.37 19.88 19.14 19.82 19.77C19.77 20.41 19.66 20.97 19.4 21.49C18.98 22.31 18.31 22.98 17.49 23.4C16.97 23.66 16.41 23.77 15.77 23.82C15.14 23.88 14.37 23.88 13.4 23.88H10.6C9.63 23.88 8.86 23.88 8.23 23.82C7.59 23.77 7.03 23.66 6.51 23.4C5.69 22.98 5.02 22.31 4.6 21.49C4.34 20.97 4.23 20.41 4.18 19.77C4.12 19.14 4.13 18.37 4.13 17.4V6.6C4.13 5.63 4.12 4.86 4.18 4.23C4.23 3.59 4.34 3.03 4.6 2.51C5.02 1.69 5.69 1.02 6.51 0.6C7.03 0.34 7.59 0.23 8.23 0.18C8.58 0.15 8.98 0.14 9.43 0.13C9.45 0.13 9.48 0.13 9.5 0.13H14.5C14.52 0.13 14.55 0.13 14.57 0.13ZM14.12 2.62C13.96 2.78 13.73 2.88 13.5 2.88H10.5C10.27 2.88 10.04 2.78 9.88 2.62L9.15 1.88C8.85 1.89 8.6 1.9 8.37 1.92C7.84 1.96 7.54 2.04 7.31 2.16C6.81 2.41 6.41 2.81 6.16 3.31C6.04 3.54 5.96 3.84 5.92 4.37C5.88 4.91 5.88 5.61 5.88 6.6V17.4C5.88 18.39 5.88 19.09 5.92 19.63C5.96 20.16 6.04 20.46 6.16 20.69C6.41 21.19 6.81 21.59 7.31 21.84C7.54 21.96 7.84 22.04 8.37 22.08C8.91 22.12 9.61 22.13 10.6 22.13H13.4C14.39 22.13 15.09 22.12 15.63 22.08C16.16 22.04 16.46 21.96 16.69 21.84C17.19 21.59 17.59 21.19 17.84 20.69C17.96 20.46 18.04 20.16 18.08 19.63C18.12 19.09 18.13 18.39 18.13 17.4V6.6C18.13 5.61 18.12 4.91 18.08 4.37C18.04 3.84 17.96 3.54 17.84 3.31C17.59 2.81 17.19 2.41 16.69 2.16C16.46 2.04 16.16 1.96 15.63 1.92C15.4 1.9 15.15 1.89 14.85 1.88L14.12 2.62Z"
    }), s[4] = l) : l = s[4], s[5] !== e || s[6] !== r || s[7] !== i ? (a = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l]
    }), s[5] = e, s[6] = r, s[7] = i, s[8] = a) : a = s[8], a
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 227924, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, s, c = (0, n.c)(10);
    return c[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), c[0] = e.title, c[1] = r) : r = c[1], c[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), c[2] = e.children, c[3] = i) : i = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      d: "M15.73 7.62C16.02 7.24 16.57 7.16 16.95 7.45C17.34 7.75 17.41 8.29 17.12 8.68L11.67 15.88C11.51 16.08 11.27 16.21 11.02 16.22C10.76 16.24 10.51 16.14 10.33 15.95L6.94 12.35C6.61 12 6.62 11.45 6.97 11.11C7.33 10.78 7.88 10.8 8.21 11.15L10.9 14L15.73 7.62Z"
    }), a = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.34 0.21C12.61 0.24 12.86 0.3 13.23 0.38L18.68 1.59C19.12 1.69 19.49 1.77 19.79 1.86C20.11 1.95 20.4 2.07 20.68 2.27C21.1 2.58 21.44 2.99 21.64 3.47C21.78 3.78 21.83 4.1 21.85 4.42C21.88 4.74 21.88 5.12 21.88 5.57V10.65C21.88 13.27 21.88 14.77 21.44 16.14C21.06 17.31 20.44 18.4 19.61 19.32C18.66 20.39 17.35 21.14 15.09 22.46L14.05 23.07C13.52 23.38 13.08 23.64 12.6 23.75C12.21 23.83 11.79 23.83 11.4 23.75C10.92 23.64 10.48 23.38 9.95 23.07L8.91 22.46C6.65 21.14 5.34 20.39 4.39 19.32C3.56 18.4 2.94 17.31 2.56 16.14C2.12 14.77 2.13 13.27 2.13 10.65V5.57C2.13 5.12 2.12 4.74 2.15 4.42C2.17 4.1 2.22 3.78 2.36 3.47C2.56 2.99 2.9 2.58 3.32 2.27C3.6 2.07 3.89 1.95 4.21 1.86C4.51 1.77 4.88 1.69 5.32 1.59L10.77 0.38C11.14 0.3 11.39 0.24 11.66 0.21C11.89 0.19 12.11 0.19 12.34 0.21ZM11.81 1.96C11.69 1.97 11.56 1.99 11.15 2.09L5.7 3.3C5.24 3.4 4.94 3.47 4.71 3.54C4.49 3.6 4.4 3.65 4.34 3.69C4.18 3.81 4.05 3.97 3.97 4.16C3.94 4.23 3.91 4.33 3.89 4.55C3.88 4.79 3.88 5.1 3.88 5.57V10.65C3.88 13.39 3.89 14.56 4.22 15.6C4.53 16.54 5.03 17.42 5.69 18.16C6.42 18.97 7.43 19.57 9.79 20.95L10.83 21.55C11.47 21.93 11.62 22 11.76 22.03C11.92 22.07 12.08 22.07 12.24 22.03C12.38 22 12.53 21.93 13.17 21.55L14.21 20.95C16.57 19.57 17.58 18.97 18.31 18.16C18.97 17.42 19.47 16.54 19.78 15.6C20.11 14.56 20.13 13.39 20.13 10.65V5.57C20.13 5.1 20.12 4.79 20.11 4.55C20.09 4.33 20.06 4.23 20.03 4.16C19.95 3.97 19.82 3.81 19.66 3.69C19.6 3.65 19.51 3.6 19.29 3.54C19.06 3.47 18.76 3.4 18.3 3.3L12.85 2.09C12.44 2 12.31 1.97 12.19 1.96C12.06 1.95 11.94 1.95 11.81 1.96Z"
    }), c[4] = l, c[5] = a) : (l = c[4], a = c[5]), c[6] !== e || c[7] !== r || c[8] !== i ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l, a]
    }), c[6] = e, c[7] = r, c[8] = i, c[9] = s) : s = c[9], s
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 868445, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, s, c = (0, n.c)(10);
    return c[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), c[0] = e.title, c[1] = r) : r = c[1], c[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), c[2] = e.children, c[3] = i) : i = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 6.13C13.59 6.13 14.87 7.41 14.88 9V10.68C14.91 10.69 14.94 10.7 14.98 10.71L15.12 10.77L15.22 10.83C15.4 10.94 15.56 11.1 15.67 11.28L15.73 11.38L15.79 11.52C15.84 11.66 15.86 11.8 15.87 11.9C15.88 12.03 15.88 12.17 15.88 12.3V15.2C15.88 15.33 15.88 15.47 15.87 15.6C15.85 15.74 15.83 15.93 15.73 16.12C15.59 16.38 15.38 16.59 15.12 16.73C14.93 16.83 14.74 16.85 14.6 16.87C14.47 16.88 14.33 16.88 14.2 16.88H9.8C9.67 16.88 9.53 16.88 9.4 16.87C9.26 16.85 9.07 16.83 8.88 16.73C8.62 16.59 8.41 16.38 8.27 16.12C8.17 15.93 8.15 15.74 8.13 15.6C8.12 15.47 8.13 15.33 8.13 15.2V12.3C8.13 12.17 8.12 12.03 8.13 11.9C8.15 11.76 8.17 11.57 8.27 11.38L8.33 11.28C8.46 11.07 8.65 10.89 8.88 10.77L9.02 10.71C9.06 10.7 9.09 10.69 9.13 10.68V9C9.13 7.41 10.41 6.13 12 6.13ZM12 7.88C11.38 7.88 10.88 8.38 10.88 9V10.63H13.13V9C13.12 8.38 12.62 7.88 12 7.88Z"
    }), a = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.34 0.21C12.61 0.24 12.86 0.3 13.23 0.38L18.68 1.59C19.12 1.69 19.49 1.77 19.79 1.86C20.11 1.95 20.4 2.07 20.68 2.27C21.1 2.58 21.44 2.99 21.64 3.47C21.78 3.78 21.83 4.1 21.85 4.42C21.88 4.74 21.88 5.12 21.88 5.57V10.65C21.88 13.27 21.88 14.77 21.44 16.14C21.06 17.31 20.44 18.4 19.61 19.32C18.66 20.39 17.35 21.14 15.09 22.46L14.05 23.07C13.52 23.38 13.08 23.64 12.6 23.75C12.21 23.83 11.79 23.83 11.4 23.75C10.92 23.64 10.48 23.38 9.95 23.07L8.91 22.46C6.65 21.14 5.34 20.39 4.39 19.32C3.56 18.4 2.94 17.31 2.56 16.14C2.12 14.77 2.13 13.27 2.13 10.65V5.57C2.13 5.12 2.12 4.74 2.15 4.42C2.17 4.1 2.22 3.78 2.36 3.47C2.56 2.99 2.9 2.58 3.32 2.27C3.6 2.07 3.89 1.95 4.21 1.86C4.51 1.77 4.88 1.69 5.32 1.59L10.77 0.38C11.14 0.3 11.39 0.24 11.66 0.21C11.89 0.19 12.11 0.19 12.34 0.21ZM11.81 1.96C11.69 1.97 11.56 1.99 11.15 2.09L5.7 3.3C5.24 3.4 4.94 3.47 4.71 3.54C4.49 3.6 4.4 3.65 4.34 3.69C4.18 3.81 4.05 3.97 3.97 4.16C3.94 4.23 3.91 4.33 3.89 4.55C3.88 4.79 3.88 5.1 3.88 5.57V10.65C3.88 13.39 3.89 14.56 4.22 15.6C4.53 16.54 5.03 17.42 5.69 18.16C6.42 18.97 7.43 19.57 9.79 20.95L10.83 21.55C11.47 21.93 11.62 22 11.76 22.03C11.92 22.07 12.08 22.07 12.24 22.03C12.38 22 12.53 21.93 13.17 21.55L14.21 20.95C16.57 19.57 17.58 18.97 18.31 18.16C18.97 17.42 19.47 16.54 19.78 15.6C20.11 14.56 20.13 13.39 20.13 10.65V5.57C20.13 5.1 20.12 4.79 20.11 4.55C20.09 4.33 20.06 4.23 20.03 4.16C19.95 3.97 19.82 3.81 19.66 3.69C19.6 3.65 19.51 3.6 19.29 3.54C19.06 3.47 18.76 3.4 18.3 3.3L12.85 2.09C12.44 2 12.31 1.97 12.19 1.96C12.06 1.95 11.94 1.95 11.81 1.96Z"
    }), c[4] = l, c[5] = a) : (l = c[4], a = c[5]), c[6] !== e || c[7] !== r || c[8] !== i ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l, a]
    }), c[6] = e, c[7] = r, c[8] = i, c[9] = s) : s = c[9], s
  }
  r._isSVG = !0, e.s(["default", 0, r])
}]);

//# debugId=9f0aad9f-71c3-177b-c6c0-483012d236bb
//# sourceMappingURL=2oe1zbjd8u_d5.js.map