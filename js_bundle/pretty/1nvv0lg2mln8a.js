;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "dfc6b6d2-e0ee-4d51-06f0-eb96d7adc41e")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 832964, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    a = e.i(519172),
    o = e.i(702471),
    r = e.i(374785);
  let i = {
    strong: "animate-pulse",
    medium: "animate-pulse-medium",
    light: "animate-pulse-light"
  };
  e.s(["Skeleton", 0, function(e) {
    var c, u;
    let l, s, d, f, h, g, T, A, E = (0, n.c)(21);
    E[0] !== e ? ({
      as: l,
      hasPageLoaded: d,
      className: s,
      strength: h,
      ...f
    } = e, E[0] = e, E[1] = l, E[2] = s, E[3] = d, E[4] = f, E[5] = h) : (l = E[1], s = E[2], d = E[3], f = E[4], h = E[5]);
    let m = void 0 === h ? "strong" : h,
      p = (0, a.useId)();
    c = d ?? !1, u = `skeleton_${p}`, A = (0, a.useRef)(new Set), (0, a.useEffect)(() => {
      if (c) return;
      let e = `${u}_shown`,
        t = `${u}_hidden`;
      return o.default.InteractionTracingCore.getPendingInteractions().forEach(t => {
        let n = t.getTrace(),
          a = n?.tracePolicy;
        a && (A.current.add(a), t.addMarkerPoint(e, "AppTiming"))
      }), () => {
        let e = {};
        o.default.InteractionTracingCore.getPendingInteractions().forEach(t => {
          let n = t.getTrace(),
            a = n?.tracePolicy;
          a && (e[a] = t)
        }), A.current.forEach(n => {
          let a = e[n];
          a && a.addMarkerPoint(t, "AppTiming")
        })
      }
    }, [c, u]);
    let H = d ? void 0 : "skeleton";
    if (l) {
      let e, n, a = i[m];
      return E[6] !== s || E[7] !== a ? (e = (0, r.cn)("bg-fill-secondary rounded-6 motion-reduce:animate-none", a, s), E[6] = s, E[7] = a, E[8] = e) : e = E[8], E[9] !== l || E[10] !== H || E[11] !== f || E[12] !== e ? (n = (0, t.jsx)(l, {
        "data-slot": H,
        className: e,
        ...f
      }), E[9] = l, E[10] = H, E[11] = f, E[12] = e, E[13] = n) : n = E[13], n
    }
    let b = i[m];
    return E[14] !== s || E[15] !== b ? (g = (0, r.cn)("bg-fill-secondary rounded-6 motion-reduce:animate-none", b, s), E[14] = s, E[15] = b, E[16] = g) : g = E[16], E[17] !== H || E[18] !== f || E[19] !== g ? (T = (0, t.jsx)("div", {
      "data-slot": H,
      "data-visualcompletion": "loading-state",
      className: g,
      ...f
    }), E[17] = H, E[18] = f, E[19] = g, E[20] = T) : T = E[20], T
  }], 832964)
}, 295967, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    a = e.i(519172),
    o = e.i(535678);
  e.s(["LoadingState", 0, function(e) {
    let r, i, c, u, l, s, d, f, h = (0, n.c)(16);
    return h[0] !== e ? ({
      bootSurface: r,
      children: i,
      name: u,
      ...c
    } = e, h[0] = e, h[1] = r, h[2] = i, h[3] = c, h[4] = u) : (r = h[1], i = h[2], c = h[3], u = h[4]), h[5] !== u ? (l = () => {
      let e = (0, o.beginInitialLoadLoadingState)(u);
      return () => (0, o.endInitialLoadLoadingState)(e)
    }, s = [u], h[5] = u, h[6] = l, h[7] = s) : (l = h[6], s = h[7]), (0, a.useLayoutEffect)(l, s), h[8] !== r ? (d = null == r ? {} : {
      elementtiming: `hatch_${r}`
    }, h[8] = r, h[9] = d) : d = h[9], h[10] !== r || h[11] !== i || h[12] !== c || h[13] !== u || h[14] !== d ? (f = (0, t.jsx)("div", {
      ...c,
      "data-hatch-boot-surface": r,
      "data-hatch-loading-state": u,
      "data-visualcompletion": "loading-state",
      ...d,
      children: i
    }), h[10] = r, h[11] = i, h[12] = c, h[13] = u, h[14] = d, h[15] = f) : f = h[15], f
  }])
}, 984345, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    a = e.i(519172),
    o = e.i(763971),
    r = e.i(393299),
    i = e.i(908164),
    c = e.i(140175),
    u = e.i(432459),
    l = e.i(301970),
    s = e.i(304117);
  let d = a.createContext(null);

  function f(e) {
    if ("string" == typeof e) return e;
    let t = e.pathname ?? "",
      n = e.search ?? "",
      a = e.hash ?? "";
    return `${t}${n}${a}`
  }
  e.s(["AppRouterRouteProvider", 0, function(e) {
    let h, g, T, A, E, m, p = (0, n.c)(21),
      {
        children: H
      } = e,
      b = (0, o.useRouter)(),
      v = (0, o.usePathname)(),
      S = (0, o.useSearchParams)(),
      R = (0, o.useParams)(),
      [y, w] = a.useTransition();
    p[0] !== S ? (h = S.toString(), p[0] = S, p[1] = h) : h = p[1];
    let C = h,
      _ = window.location.hash,
      I = C.length > 0 ? `?${C}` : "",
      M = `${v}?${C}${_}`;
    p[2] !== v || p[3] !== I || p[4] !== M ? (g = {
      pathname: v,
      search: I,
      hash: _,
      state: null,
      key: M
    }, p[2] = v, p[3] = I, p[4] = M, p[5] = g) : g = p[5];
    let P = g;
    p[6] !== P.search || p[7] !== v || p[8] !== b ? (T = (e, t) => {
      let n = null;
      if ("number" != typeof e) {
        let a = window.location.search;
        if (n = f((0, i.preserveMcParams)(f(e), a)), (0, c.requestHatchClientConsistencyNavigation)(n, t?.replace === !0)) return;
        let o = new URL(n, window.location.origin).pathname;
        o !== v && (0, u.startNavigationTrace)(o)
      }
      w(() => {
        if ("number" == typeof e) return -1 === e ? void b.back() : 1 === e ? void b.forward() : void window.history.go(e);
        if (null == n) return;
        let a = t?.preventScrollReset !== !0;
        t?.replace ? b.replace(n, {
          scroll: a
        }) : b.push(n, {
          scroll: a
        })
      })
    }, p[6] = P.search, p[7] = v, p[8] = b, p[9] = T) : T = p[9];
    let B = T;
    if (p[10] !== v) A = "/library/documents" === v ? l.EctoRouteTracePolicy.HATCH_LIBRARY_DOCUMENTS : "/library/media" === v ? l.EctoRouteTracePolicy.HATCH_LIBRARY_MEDIA : "/library/files" === v ? l.EctoRouteTracePolicy.HATCH_LIBRARY_FILES : (0, s.isArtifactViewerPathname)(v) ? l.EctoRouteTracePolicy.HATCH_SPACE : "/library" === v || v.startsWith("/library/") ? l.EctoRouteTracePolicy.HATCH_LIBRARY : "/artifacts" === v ? l.EctoRouteTracePolicy.HATCH_ARTIFACTS : "/goals" === v ? l.EctoRouteTracePolicy.HATCH_GOALS : "/shared-agents" === v || v.startsWith("/shared-agents/") ? l.EctoRouteTracePolicy.HATCH_AGENTS : v === r.SHARED_SPACE_PATHNAME ? l.EctoRouteTracePolicy.HATCH_SHARE : v.startsWith("/flock/") ? l.EctoRouteTracePolicy.HATCH_FLOCK : "/ideas" === v ? l.EctoRouteTracePolicy.HATCH_IDEAS : v.startsWith("/space/") ? l.EctoRouteTracePolicy.HATCH_SPACE : v.startsWith("/s/") ? l.EctoRouteTracePolicy.HATCH_ARTIFACT_SHARE : v.startsWith("/share/m/") ? l.EctoRouteTracePolicy.HATCH_MEDIA_SHARE : v.startsWith("/connect/") ? l.EctoRouteTracePolicy.HATCH_CONNECT : "/subscriptions" === v ? l.EctoRouteTracePolicy.HATCH_SETTINGS : l.EctoRouteTracePolicy.HATCH, p[10] = v, p[11] = A;
    else A = p[11];
    p[12] !== y || p[13] !== P || p[14] !== B || p[15] !== R || p[16] !== A ? (E = {
      isPending: y,
      location: P,
      navigate: B,
      params: R,
      startNavigationTransition: w,
      tracePolicy: A
    }, p[12] = y, p[13] = P, p[14] = B, p[15] = R, p[16] = A, p[17] = E) : E = p[17];
    let V = E;
    return p[18] !== H || p[19] !== V ? (m = (0, t.jsx)(d.Provider, {
      value: V,
      children: H
    }), p[18] = H, p[19] = V, p[20] = m) : m = p[20], m
  }, "useOptionalAppRouterRouteContext", 0, function() {
    return a.useContext(d)
  }])
}, 114205, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(42673),
    a = e.i(819258);

  function o() {
    let e, a = (0, t.c)(2),
      o = (0, n.useUserAgent)();
    return a[0] !== o?.os.name ? (e = o?.os.name?.toLowerCase()?.startsWith("mac"), a[0] = o?.os.name, a[1] = e) : e = a[1], !0 === e
  }
  e.s(["useIsHatchMacApp", 0, function() {
    let e, o = (0, t.c)(2),
      r = (0, n.useUserAgent)(),
      i = r?.ua;
    return o[0] !== i ? (e = (0, a.isHatchMacApp)(i), o[0] = i, o[1] = e) : e = o[1], e
  }, "useIsMacDesktop", 0, function() {
    let e = o(),
      t = "u" > typeof navigator && navigator.maxTouchPoints > 1;
    return e && !t
  }, "useIsMacOs", 0, o])
}, 515475, e => {
  "use strict";
  var t = e.i(519172),
    n = e.i(815502);

  function a() {
    let {
      isCvm: e
    } = (0, n.getServingVmAttribution)();
    return null == e ? null : e ? "confidential" : "standard"
  }

  function o() {
    return null
  }
  e.s(["getServingVmType", 0, a, "useServingVmType", 0, function() {
    return (0, t.useSyncExternalStore)(n.subscribeServingVmAttribution, a, o)
  }])
}, 32658, 207224, 825472, e => {
  "use strict";
  var t = e.i(519172),
    n = e.i(650240);

  function a(e, a) {
    let {
      values: o,
      defaultValue: r
    } = a, i = a.changeEvent ?? `${e}-change`, c = new Set(o), u = null;

    function l() {
      try {
        let t = window.localStorage.getItem(e);
        return null != t && c.has(t) ? t : r
      } catch {
        return r
      }
    }

    function s() {
      return null == u && (u = l()), u
    }
    let d = (0, n.createDebugToggleSubscription)({
      changeEvent: i,
      storageKey: e,
      refreshFromStorage: () => {
        u = l()
      }
    });

    function f() {
      return r
    }
    return {
      read: s,
      write: function(t) {
        if (u !== t) {
          u = t;
          try {
            window.localStorage.setItem(e, t)
          } catch {}
          window.dispatchEvent(new CustomEvent(i))
        }
      },
      useValue: function() {
        return (0, t.useSyncExternalStore)(d, s, f)
      },
      changeEvent: i
    }
  }
  e.s(["createDebugEnumToggle", 0, a], 207224);
  let o = "hatch:debug:attestation-enforcement",
    r = {
      off: 0,
      debug: 1,
      staging: 2,
      prod: 3
    };
  e.s(["HATCH_ATTESTATION_OVERRIDE_STORAGE_KEY", 0, o, "attestationTierFromMode", 0, function(e) {
    return 1 === e ? "staging" : 2 === e || e > 2 ? "prod" : "off"
  }, "isAttestationDowngrade", 0, function(e, t) {
    return "default" !== t && r[t] < r[e]
  }, "isAttestationTierOverride", 0, function(e) {
    return "default" === e || "off" === e || "debug" === e || "staging" === e || "prod" === e
  }, "resolveAttestationTier", 0, function(e, t, n) {
    return "default" === t || !n && r[t] < r[e] ? e : t
  }], 825472);
  let i = a(o, {
      values: ["default", "off", "debug", "staging", "prod"],
      defaultValue: "default",
      changeEvent: "hatch:debug:attestation-enforcement-change"
    }),
    c = i.read,
    u = i.write,
    l = i.useValue;
  e.s(["readAttestationEnforcementOverride", 0, c, "useAttestationEnforcementOverride", 0, l, "writeAttestationEnforcementOverride", 0, u], 32658)
}, 650240, e => {
  "use strict";
  let t = new Map,
    n = !1;

  function a(e) {
    for (let n of null == e.key ? [...t.values()].flatMap(e => [...e]) : [...t.get(e.key) ?? []]) n()
  }
  e.s(["createDebugToggleSubscription", 0, function({
    changeEvent: e,
    refreshFromStorage: o,
    storageKey: r
  }) {
    let i = new Set,
      c = null,
      u = () => {
        for (let e of i) e()
      };
    return l => {
      if (i.add(l), null == c) {
        var s;
        let i;
        window.addEventListener(e, u);
        let l = (s = () => {
          o(), u()
        }, (i = t.get(r) ?? new Set).add(s), t.set(r, i), n || (window.addEventListener("storage", a), n = !0), () => {
          i.delete(s), 0 === i.size && t.delete(r), 0 === t.size && n && (window.removeEventListener("storage", a), n = !1)
        });
        c = () => {
          window.removeEventListener(e, u), l()
        }
      }
      return () => {
        i.delete(l), 0 === i.size && (c?.(), c = null)
      }
    }
  }])
}, 543912, 189612, 730247, 929720, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(224520),
    a = e.i(114205),
    o = e.i(515475),
    r = e.i(359783),
    i = e.i(863641),
    c = e.i(32658),
    u = e.i(207224);
  let l = (0, u.createDebugEnumToggle)("hatch:debug:feed-infinite-scroll", {
    values: ["on", "off"],
    defaultValue: "off",
    changeEvent: "hatch:debug:feed-infinite-scroll-change"
  });

  function s() {
    return "on" === l.useValue()
  }
  e.s(["useInfiniteFeedOptIn", 0, s, "writeInfiniteFeedOptIn", 0, function(e) {
    l.write(e ? "on" : "off")
  }], 189612);
  let {
    write: d,
    useValue: f
  } = (0, u.createDebugEnumToggle)("hatch:debug:voice-enabled", {
    values: ["on", "off", "default"],
    defaultValue: "default",
    changeEvent: "hatch:debug:voice-enabled-change"
  });
  e.s(["useVoiceModeOverride", 0, f, "writeVoiceModeOverride", 0, d], 730247);
  let {
    write: h,
    useValue: g
  } = (0, u.createDebugEnumToggle)("hatch:debug:idea-color-icons", {
    values: ["on", "off", "default"],
    defaultValue: "default",
    changeEvent: "hatch:debug:idea-color-icons-change"
  });
  e.s(["useIdeaColorIconsOverride", 0, g, "writeIdeaColorIconsOverride", 0, h], 929720);
  var T = e.i(825472);
  let A = (0, r.createClientLogger)("hatchAttestationTier"),
    E = new Set,
    m = new Set,
    p = !1;

  function H() {
    return (0, n.useMcBool)("1d23e303", !1)
  }

  function b() {
    let e = f(),
      t = (0, n.useMcBool)("572a7c97", !1);
    return "on" === e || "off" !== e && t
  }

  function v() {
    let e = b(),
      t = (0, o.useServingVmType)();
    return e && "standard" === t
  }

  function S() {
    return (0, n.useMcBool)("d01136f4", !1)
  }
  e.s(["resolveHatchAppDownloadAudience", 0, function(e, t) {
    return e ? t ? "employee" : "non_employee" : null
  }, "useHatchAppDownloadEnabled", 0, H, "useHatchAttestationEnforcementTier", 0, function() {
    var e;
    let t = (0, c.useAttestationEnforcementOverride)(),
      a = (0 === (e = (0, n.useMcNumber)("7242d327", 0)) || 1 === e || 2 === e || E.has(e) || (E.add(e), A.error({
        mode: e,
        tags: (0, i.hatchSentryTags)(i.HATCH_SENTRY_SURFACES.ATTESTATION)
      }, "invalid hatch_web:attestation_enforce_mode; expected 0/1/2")), (0, T.attestationTierFromMode)(e)),
      o = (0, n.useMcBool)("5e1fb489", !1),
      r = ("default" === t ? null : t) ?? "default";
    ! function(e, t, n) {
      if (!(0, T.isAttestationDowngrade)(e, t)) return;
      let a = `${e}->${t}:${n}`;
      m.has(a) || (m.add(a), A.error({
        serverTier: e,
        requestedTier: t,
        effectiveTier: n ? t : e,
        applied: n,
        tags: (0, i.hatchSentryTags)(i.HATCH_SENTRY_SURFACES.ATTESTATION)
      }, n ? "VM attestation enforcement resolved below the server-provided tier" : "Ignored a weakening VM attestation override from a viewer not permitted to apply one"))
    }(a, r, o);
    let u = (0, T.resolveAttestationTier)(a, r, o);
    return "debug" !== u || p || (p = !0, A.error({
      effectiveTier: u,
      tags: (0, i.hatchSentryTags)(i.HATCH_SENTRY_SURFACES.ATTESTATION)
    }, "VM attestation is verifying transparency against the debug policy")), u
  }, "useHatchCcvRedirectEnabled", 0, function() {
    return (0, n.useMcBool)("7b2653e9", !1)
  }, "useHatchChannelGates", 0, function() {
    let e, a = (0, t.c)(5),
      o = (0, n.useMcBool)("c6e95b18", !1),
      r = (0, n.useMcBool)("6fb3f373", !1),
      i = (0, n.useMcBool)("dde7768a", !1),
      c = o || r || i;
    return a[0] !== i || a[1] !== c || a[2] !== o || a[3] !== r ? (e = {
      telegram: o,
      whatsapp: r,
      messenger: i,
      anyEnabled: c
    }, a[0] = i, a[1] = c, a[2] = o, a[3] = r, a[4] = e) : e = a[4], e
  }, "useHatchComputerTabEnabled", 0, function() {
    return (0, n.useMcBool)("5e1fb489", !1)
  }, "useHatchCvmEnabled", 0, function() {
    return (0, n.useMcBool)("df110356", !1)
  }, "useHatchEmailEnabled", 0, function() {
    let e = (0, n.useMcBool)("5325d097", !1),
      t = (0, o.useServingVmType)();
    return e && "standard" === t
  }, "useHatchEmployeeReducedPricingEnabled", 0, function() {
    return (0, n.useMcBool)("75f09f6a", !1)
  }, "useHatchFeedInfiniteScrollAvailable", 0, S, "useHatchFeedInfiniteScrollEnabled", 0, function() {
    let e = S(),
      t = s();
    return e && t
  }, "useHatchIdeaColorIconsEnabled", 0, function() {
    let e, a = (0, t.c)(2),
      o = g(),
      r = "default" !== o;
    a[0] !== r ? (e = {
      skipExposure: r
    }, a[0] = r, a[1] = e) : e = a[1];
    let i = (0, n.useMcBool)("ceb5881a", !0, e);
    return "on" === o || "off" !== o && i
  }, "useHatchIdeaColorIconsWithoutExposure", 0, function() {
    let e, a = (0, t.c)(1),
      o = g();
    a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
      skipExposure: !0
    }, a[0] = e) : e = a[0];
    let r = (0, n.useMcBool)("ceb5881a", !0, e);
    return "on" === o || "off" !== o && r
  }, "useHatchInviteEnabled", 0, function() {
    let e = (0, n.useMcBool)("2223e52e", !1),
      t = (0, o.useServingVmType)();
    return e && "standard" === t
  }, "useHatchInviteRedeemEnabled", 0, function() {
    let e = (0, n.useMcBool)("0de9ebf8", !1),
      t = (0, o.useServingVmType)();
    return e && "standard" === t
  }, "useHatchMacAppDownloadEnabled", 0, function() {
    let e = (0, a.useIsHatchMacApp)(),
      t = H(),
      o = (0, n.useMcBool)("8c1233db", !1);
    return t && o && !e
  }, "useHatchRedteamingEnabled", 0, function() {
    return (0, n.useMcBool)("05344cb9", !1)
  }, "useHatchShortwaveDictationEnabled", 0, function() {
    return (0, n.useMcBool)("49572c1a", !1)
  }, "useHatchSubscriptionsEnabled", 0, function(e) {
    let t = (0, n.useMcBool)("e3507fea", !1, e),
      a = (0, o.useServingVmType)();
    return t && "standard" === a
  }, "useHatchSurveysEnabled", 0, function() {
    return (0, n.useMcBool)("788be016", !1)
  }, "useHatchToolMockingEnabled", 0, function() {
    return (0, n.useMcBool)("83580e32", !1)
  }, "useHatchVoiceCallingEnabled", 0, v, "useHatchVoiceDesignEnabled", 0, function() {
    let e, a = (0, t.c)(2),
      o = v(),
      r = !o;
    a[0] !== r ? (e = {
      skipExposure: r
    }, a[0] = r, a[1] = e) : e = a[1];
    let i = (0, n.useMcBool)("7951eeff", !1, e);
    return o && i
  }, "useHatchVoiceEnabled", 0, b, "useHomeLinkEnabled", 0, function() {
    return (0, n.useMcBool)("7402e958", !1)
  }, "useNoiseInspectorAccess", 0, function() {
    let e, a = (0, t.c)(3),
      o = (0, n.useMcBool)("5e1fb489", !1) || !1,
      r = (0, n.useMcBool)("34adca57", !1),
      i = o || r,
      c = r && !o;
    return a[0] !== i || a[1] !== c ? (e = {
      canUse: i,
      researcherOnly: c
    }, a[0] = i, a[1] = c, a[2] = e) : e = a[2], e
  }], 543912)
}, 576833, e => {
  "use strict";

  function t(e) {
    let t = null;
    return () => (null == t && (t = e()).catch(() => {
      t = null
    }), t)
  }
  let n = t(() => e.A(916434).then(e => ({
      default: e.HatchChatRoute
    }))),
    a = t(() => e.A(342321).then(e => ({
      default: e.HatchFeedRoute
    }))),
    o = t(() => e.A(939792).then(e => ({
      default: e.HatchGoalsRoute
    }))),
    r = t(() => e.A(27717).then(e => ({
      default: e.HatchIdeasRoute
    }))),
    i = t(() => e.A(87723).then(e => ({
      default: e.HatchArtifactsRoute
    })));
  e.s(["loadHatchArtifactsRoute", 0, i, "loadHatchChatRoute", 0, n, "loadHatchFeedRoute", 0, a, "loadHatchGoalsRoute", 0, o, "loadHatchIdeasRoute", 0, r])
}, 908164, 49499, e => {
  "use strict";
  let t = "variant",
    n = ["business"];

  function a(e) {
    return n.some(t => t === e)
  }
  e.s(["HATCH_ONBOARDING_VARIANT_QUERY_PARAM", 0, t, "HATCH_URL_SELECTABLE_ONBOARDING_VARIANTS", 0, n, "isHatchUrlSelectableOnboardingVariant", 0, a, "readOnboardingVariantFromSearch", 0, function(e) {
    let n = new URLSearchParams(e.startsWith("?") ? e.slice(1) : e).get(t);
    return a(n) ? n : null
  }], 49499);
  let o = [{
    name: "mc_enable"
  }, {
    name: "mc_disable"
  }, {
    name: "od"
  }, {
    name: "use_od"
  }, {
    name: t,
    isAllowedValue: a
  }];
  e.s(["preserveMcParams", 0, function(e, t) {
    let n = new URLSearchParams(t),
      a = [];
    for (let e of o) {
      let t = function(e, t) {
        let n = e.getAll(t.name);
        return null == t.isAllowedValue ? n : n.filter(t.isAllowedValue)
      }(n, e);
      t.length > 0 && a.push([e.name, t])
    }
    if (0 === a.length) return e;
    if ("string" == typeof e) {
      let t = new URL(e, window.location.origin);
      for (let [e, n] of a)
        if (!t.searchParams.has(e))
          for (let a of n) t.searchParams.append(e, a);
      return t.pathname + t.search + t.hash
    }
    if ("object" == typeof e && null !== e) {
      let t = new URLSearchParams(e.search ?? "");
      for (let [e, n] of a)
        if (!t.has(e))
          for (let a of n) t.append(e, a);
      let n = t.toString();
      return {
        ...e,
        search: n ? `?${n}` : ""
      }
    }
    return e
  }], 908164)
}]);

//# debugId=dfc6b6d2-e0ee-4d51-06f0-eb96d7adc41e
//# sourceMappingURL=0f6e76iikaj2_.js.map