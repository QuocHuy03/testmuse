;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "c285acd9-0231-0b06-a3de-f122613f746f")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 154006, e => {
  "use strict";
  let t;
  var n = e.i(984416),
    a = e.i(722099),
    r = e.i(519172),
    l = e.i(630203),
    i = e.i(763971),
    o = e.i(397649),
    s = e.i(813280),
    c = e.i(52038),
    u = e.i(21483),
    d = e.i(397240),
    h = e.i(448571),
    f = e.i(550365),
    m = e.i(543912),
    p = e.i(399678),
    g = e.i(123960),
    v = e.i(997149),
    C = e.i(508180),
    y = e.i(195714),
    _ = e.i(666750);

  function b() {
    let e, t, n, l, i = (0, a.c)(5),
      o = (0, _.useHatchConnection)(),
      s = (0, r.useRef)(o);
    return i[0] !== o ? (e = () => {
      s.current = o
    }, t = [o], i[0] = o, i[1] = e, i[2] = t) : (e = i[1], t = i[2]), (0, r.useLayoutEffect)(e, t), i[3] === Symbol.for("react.memo_cache_sentinel") ? (n = () => (0, v.registerClientPerfContextReaders)({
      getChatMessageCount: T,
      getChatIsAtBottom: A,
      getActivityActionCount: k,
      getBrowserViewerOpen: x,
      getMountedContentCount: S,
      getConnectionPhase: () => s.current.phase,
      getConnectionReason: () => s.current.reason
    }), l = [], i[3] = n, i[4] = l) : (n = i[3], l = i[4]), (0, r.useEffect)(n, l), null
  }

  function S() {
    return (0, y.getMountedContentCount)()
  }

  function x() {
    try {
      return null != (0, C.getSnapshot)().browserPanel.activeSession
    } catch {
      return null
    }
  }

  function k() {
    try {
      return (0, C.getSnapshot)().activity.days.reduce(E, 0)
    } catch {
      return null
    }
  }

  function E(e, t) {
    return e + t.activities.length
  }

  function A() {
    try {
      return (0, C.getSnapshot)().chat.isAtBottom
    } catch {
      return null
    }
  }

  function T() {
    try {
      return (0, C.getSnapshot)().chat.messageIds.length
    } catch {
      return null
    }
  }
  var w = e.i(171311),
    R = e.i(552122),
    H = e.i(616723),
    P = e.i(281918),
    I = e.i(93512),
    N = e.i(861407),
    j = e.i(304117),
    D = e.i(228750),
    L = e.i(204523);
  let M = (0, N.compileShellPath)(j.SHELL_PATH.goal).pattern,
    O = {
      gatewayUrl: D.HATCH_ACTIVE_GATEWAY_URL_PLACEHOLDER,
      targetKey: D.HATCH_ACTIVE_GATEWAY_TARGET_KEY_PLACEHOLDER
    };

  function F(e, t) {
    let n, r = (0, a.c)(2);
    r[0] !== t ? (n = void 0 === t ? [] : t, r[0] = t, r[1] = n) : n = r[1];
    let l = n;
    (0, I.useRegisterGatewayQueryForSsr)(e, null != e, l)
  }

  function U() {
    let e, t, n = (0, a.c)(3),
      r = (0, m.useHatchIdeaColorIconsWithoutExposure)();
    return n[0] !== r ? (e = (0, P.bindExploreIdeasListGatewayQuery)(O, {
      pageSize: P.EXPLORE_IDEAS_SECTION_PAGE_SIZE,
      colorIcons: r
    }), n[0] = r, n[1] = e) : e = n[1], n[2] === Symbol.for("react.memo_cache_sentinel") ? (t = [L.HATCH_EARLY_CLIENT_PRELOAD.IDEAS_ROUTE], n[2] = t) : t = n[2], F(e.descriptor, t), null
  }

  function z(e) {
    let t, l, i, o, s, c, u, d, h, f, m = (0, a.c)(19),
      {
        pathname: p
      } = e,
      g = function(e) {
        let t = M.exec(e)?.[1];
        if (null == t || 0 === t.length) return null;
        try {
          return decodeURIComponent(t)
        } catch {
          return t
        }
      }(p),
      v = p === j.SHELL_PATH.goals || null != g,
      C = p === j.SHELL_PATH.feed;
    if (m[0] !== v ? (t = v ? (0, R.bindGoalsListGatewayQuery)(O).descriptor : null, m[0] = v, m[1] = t) : t = m[1], m[2] === Symbol.for("react.memo_cache_sentinel") ? (l = [L.HATCH_EARLY_CLIENT_PRELOAD.GOALS_ROUTE], m[2] = l) : l = m[2], F(t, l), m[3] !== v ? (i = v ? (0, R.bindGoalsTrackingListGatewayQuery)(O).descriptor : null, m[3] = v, m[4] = i) : i = m[4], F(i), F(null == g ? null : (0, R.bindGoalDetailGatewayQuery)(O, g).descriptor), m[5] !== C ? (o = C ? (0, w.bindFeedListGatewayQuery)(O, null).descriptor : null, m[5] = C, m[6] = o) : o = m[6], m[7] === Symbol.for("react.memo_cache_sentinel") ? (s = [L.HATCH_EARLY_CLIENT_PRELOAD.FEED_ROUTE], m[7] = s) : s = m[7], F(o, s), m[8] !== C ? (c = C ? (0, w.bindFeedPromptGatewayQuery)(O).descriptor : null, m[8] = C, m[9] = c) : c = m[9], F(c), m[10] !== p ? (u = p === j.SHELL_PATH.libraryMedia ? (0, H.bindLibraryMediaGatewayQuery)(O).descriptor : null, m[10] = p, m[11] = u) : u = m[11], F(u), m[12] !== p ? (d = p === j.SHELL_PATH.libraryRecent ? (0, H.bindLibraryRecentFilesGatewayQuery)(O).descriptor : null, m[12] = p, m[13] = d) : d = m[13], F(d), m[14] !== p ? (h = p === j.SHELL_PATH.libraryFiles ? (0, H.bindLibrarySidebarRootGatewayQuery)(O).descriptor : null, m[14] = p, m[15] = h) : h = m[15], F(h), m[16] !== p ? (f = p === j.SHELL_PATH.artifacts ? (0, H.bindLibraryArtifactsGatewayQuery)(O).descriptor : null, m[16] = p, m[17] = f) : f = m[17], F(f), p === j.SHELL_PATH.ideas) {
      let e;
      return m[18] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(r.Suspense, {
        fallback: null,
        children: (0, n.jsx)(U, {})
      }), m[18] = e) : e = m[18], e
    }
    return null
  }
  e.i(173662);
  var K = e.i(354385),
    B = e.i(3116),
    V = e.i(62822),
    W = e.i(743723);
  let G = (0, W.createServerReference)("009276f6a217bd1a06954e5ac591c5cbd42c0afca5", W.callServer, void 0, W.findSourceMapURL, "fetchHatchPostContentBootstrapAction"),
    Y = "ecto_session_mode";

  function q(e) {
    try {
      e ? sessionStorage.setItem(Y, e) : sessionStorage.removeItem(Y)
    } catch {}
  }
  let $ = new Set(["llama_1", "llama_2", "canvas", "create", "shop", "think_hard", "think_fast"]),
    Q = (0, r.createContext)({
      modes: [],
      modeInfos: [],
      sessionMode: null,
      setSessionMode: () => {},
      sessionPreset: null,
      setSessionPreset: () => {},
      resetSession: () => {},
      isHydrated: !1,
      isLoading: !0
    }),
    X = (0, r.createContext)({
      setServerModes: () => {}
    });

  function Z(e) {
    let t, n, l = (0, a.c)(4),
      {
        modesPromise: i
      } = e,
      o = (0, r.use)(i),
      {
        setServerModes: s
      } = (0, r.useContext)(X);
    return l[0] !== o || l[1] !== s ? (t = () => {
      s(o)
    }, n = [o, s], l[0] = o, l[1] = s, l[2] = t, l[3] = n) : (t = l[2], n = l[3]), (0, r.useEffect)(t, n), null
  }

  function J(e) {
    let {
      children: t
    } = e, [a, l] = (0, r.useState)([]), [i, o] = (0, r.useState)(!0), s = null != e.serverModes, c = s ? e.serverModes : a, u = s ? e.isLoading : i, [d, h] = (0, r.useState)(null), [f, m] = (0, r.useState)(null), [p, g] = (0, r.useState)(!1), v = (0, r.useRef)({
      setServerModesState: l,
      setIsLoading: o
    });
    v.current = {
      setServerModesState: l,
      setIsLoading: o
    };
    let C = (0, r.useCallback)(e => {
      v.current.setServerModesState(e), v.current.setIsLoading(!1)
    }, []);
    (0, r.useEffect)(() => {
      let e = function() {
        try {
          return sessionStorage.getItem(Y)
        } catch {
          return null
        }
      }();
      e && h(e), g(!0)
    }, []);
    let y = (0, r.useCallback)(e => {
        h(e), q(e)
      }, []),
      _ = (0, r.useMemo)(() => c.map(e => ({
        id: e.id.toLowerCase(),
        agentType: e.agentType,
        label: e.label,
        description: e.description
      })).filter(e => $.has(e.id)), [c]),
      b = (0, r.useMemo)(() => _.map(e => e.id), [_]);
    (0, r.useEffect)(() => {
      d && b.length > 0 && !b.includes(d) && (h(null), q(null))
    }, [d, b]);
    let S = (0, r.useCallback)(() => {
        m(null)
      }, []),
      x = (0, r.useMemo)(() => ({
        modes: b,
        modeInfos: _,
        sessionMode: d,
        setSessionMode: y,
        sessionPreset: f,
        setSessionPreset: m,
        resetSession: S,
        isHydrated: p,
        isLoading: u
      }), [b, _, d, y, f, S, p, u]),
      k = (0, r.useMemo)(() => ({
        setServerModes: C
      }), [C]);
    return (0, n.jsx)(Q.Provider, {
      value: x,
      children: (0, n.jsxs)(X.Provider, {
        value: k,
        children: [null != e.modesPromise ? (0, n.jsx)(r.Suspense, {
          fallback: null,
          children: (0, n.jsx)(Z, {
            modesPromise: e.modesPromise
          })
        }) : null, t]
      })
    })
  }
  var ee = e.i(11047),
    et = e.i(359783);
  let en = (0, et.createClientLogger)("HatchPostContentBootstrapProvider"),
    ea = {
      linkShimInfo: null,
      linkShimInfoResolved: !1,
      modes: [],
      modesResolved: !1
    };

  function er(e) {
    let l, i, o, s, c = (0, a.c)(12),
      {
        children: u,
        enabled: d,
        scopeKey: h
      } = e,
      [f, m] = (0, r.useState)(null),
      p = f?.viewerKey === h,
      g = p ? f.bootstrap : ea,
      v = !p || !g.modesResolved,
      C = !p;
    return c[0] !== d || c[1] !== h ? (l = () => {
      if (!d) return;
      let e = !1;
      return (function(e) {
        if (t?.viewerKey === e) return t.promise;
        let n = G().catch(e => (en.error({
          error: e instanceof Error ? e : Error(String(e))
        }, "Post-content bootstrap action failed"), ea));
        return t = {
          promise: n,
          viewerKey: e
        }, n.then(e => {
          e.modesResolved && e.linkShimInfoResolved || t?.promise !== n || (t = void 0)
        }), n
      })(h).then(t => {
        e || m({
          bootstrap: t,
          viewerKey: h
        })
      }), () => {
        e = !0
      }
    }, i = [d, h], c[0] = d, c[1] = h, c[2] = l, c[3] = i) : (l = c[2], i = c[3]), (0, r.useEffect)(l, i), c[4] !== g.linkShimInfo || c[5] !== u || c[6] !== C ? (o = (0, n.jsx)(ee.LinkShimInfoProvider, {
      linkShimInfo: g.linkShimInfo,
      isLoading: C,
      children: u
    }), c[4] = g.linkShimInfo, c[5] = u, c[6] = C, c[7] = o) : o = c[7], c[8] !== g.modes || c[9] !== v || c[10] !== o ? (s = (0, n.jsx)(J, {
      serverModes: g.modes,
      isLoading: v,
      children: o
    }), c[8] = g.modes, c[9] = v, c[10] = o, c[11] = s) : s = c[11], s
  }
  var el = e.i(372873),
    ei = e.i(175286),
    eo = e.i(205281),
    es = e.i(815502),
    ec = e.i(863641),
    eu = e.i(726430),
    ed = e.i(241077);
  let eh = (0, r.lazy)(() => e.A(64175).then(e => ({
    default: e.HatchVoiceVideoController
  })));

  function ef() {
    return (0, es.getServingVmAttribution)().vmId ?? null
  }

  function em() {
    return null
  }

  function ep() {
    return () => {}
  }

  function eg({
    children: e,
    featureEnabled: t,
    postContentWorkEnabled: a
  }) {
    let [l, i] = (0, r.useState)(null), [o, c] = (0, r.useState)(null), u = t ? o : null, [d, h] = (0, r.useState)(!1), f = (0, r.useCallback)(() => h(!0), []), [m, p] = (0, r.useState)(!1);
    t && a && d && !m && p(!0), !t && m && p(!1);
    let g = t ? l : null,
      v = (0, r.useRef)(g);
    v.current = g;
    let C = (0, r.useCallback)(() => v.current, []),
      [y, _] = (0, r.useState)(!1),
      b = (0, r.useCallback)(() => _(!0), []),
      S = (0, ed.useVoiceVideoStageFailed)(t),
      x = y || S ? "audio" : g?.callMediaType ?? null,
      k = (0, r.useSyncExternalStore)(t ? es.subscribeServingVmAttribution : ep, t ? ef : em, em),
      [E, A] = (0, r.useState)(null);
    t || null == E || A(null);
    let T = (0, ed.useVoiceVideoStageReady)(t),
      w = "audio" === x || "video" === x && T;
    t && w && E?.vmId !== k && A({
      vmId: k
    });
    let R = w || null != x && null != E && E.vmId === k,
      H = (0, r.useMemo)(() => ({
        mediaType: x,
        enabled: R
      }), [R, x]);
    return (0, n.jsx)(eu.HatchVoiceVideoActivationContext.Provider, {
      value: f,
      children: (0, n.jsx)(eu.HatchVoiceVideoSnapshotContext.Provider, {
        value: C,
        children: (0, n.jsx)(eu.HatchVoiceCallEntryContext.Provider, {
          value: t ? H : null,
          children: (0, n.jsx)(eu.HatchVoiceVideoContext.Provider, {
            value: g,
            children: (0, n.jsxs)(eu.HatchVoiceVideoSurfaceContext.Provider, {
              value: u,
              children: [e, m && (0, n.jsx)(s.EctoErrorBoundary, {
                surface: ec.HATCH_SENTRY_SURFACES.VOICE_EMBODIMENT,
                onError: b,
                children: (0, n.jsx)(r.Suspense, {
                  fallback: null,
                  children: (0, n.jsx)(eh, {
                    onSettings: i,
                    onSurface: c
                  })
                })
              })]
            })
          })
        })
      })
    })
  }
  var ev = e.i(720756),
    eC = e.i(22338),
    ey = e.i(915637),
    e_ = e.i(685231),
    eb = e.i(546963);

  function eS() {
    return document.addEventListener("visibilitychange", eE), window.addEventListener("offline", ek), window.addEventListener("online", ex), () => {
      document.removeEventListener("visibilitychange", eE), window.removeEventListener("offline", ek), window.removeEventListener("online", ex)
    }
  }

  function ex() {
    return (0, e_.updateShellPrimaryContentAvailability)({
      online: !0
    })
  }

  function ek() {
    (0, eb.cancelShellRouteIntentPrefetches)(), (0, e_.updateShellPrimaryContentAvailability)({
      online: !1
    })
  }

  function eE() {
    (0, eb.cancelShellRouteIntentPrefetches)(), (0, e_.updateShellPrimaryContentAvailability)({
      pageVisible: "hidden" !== document.visibilityState
    })
  }

  function eA() {
    return (0, eb.cancelShellRouteIntentPrefetches)()
  }
  var eT = e.i(834903),
    ew = e.i(864236),
    eR = e.i(870228),
    eH = e.i(675914),
    eP = e.i(660983);
  let eI = (0, r.lazy)(() => e.A(266040).then(e => ({
    default: e.HatchOnboardingFlow
  })));

  function eN(e) {
    let t, r, i, o = (0, a.c)(4);
    return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
      elementtiming: "hatch_onboarding"
    }, o[0] = t) : t = o[0], o[1] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)("div", {
      "data-hatch-onboarding-overlay": !0,
      "data-hatch-boot-surface": "onboarding",
      ...t,
      className: "bg-bg-primary fixed inset-0 z-40 flex items-center justify-center",
      children: (0, n.jsx)(eP.LoadingSpinner, {
        name: "onboarding"
      })
    }), o[1] = r) : r = o[1], o[2] !== e ? (i = (0, n.jsx)(s.EctoErrorBoundary, {
      surface: ec.HATCH_SENTRY_SURFACES.ONBOARDING,
      fallback: ej,
      children: (0, n.jsx)(l.HeroPlaceholder, {
        name: "onboarding-flow",
        fallback: r,
        children: (0, n.jsx)(eI, {
          ...e
        })
      })
    }), o[2] = e, o[3] = i) : i = o[3], i
  }

  function ej(e) {
    let {
      error: t,
      reset: a
    } = e;
    return (0, n.jsx)(eR.HatchContentErrorFallback, {
      error: t,
      onRetry: a
    })
  }
  var eD = e.i(925301);
  let eL = new Set([502, 503, 504]);

  function eM(e) {
    return !!(0, eD.isGatewayRequestError)(e) && ((0, eD.isGatewayDisconnectError)(e) || null != e.httpStatus && eL.has(e.httpStatus))
  }
  var eO = e.i(281851),
    eF = e.i(635550),
    eU = e.i(393202),
    ez = e.i(635899),
    eK = e.i(871157),
    eB = e.i(975740),
    eV = e.i(809204);
  let eW = (0, et.createClientLogger)("useHatchOnboardingStart");
  var eG = e.i(410078),
    eY = e.i(365500),
    eq = e.i(9326),
    e$ = e.i(908978),
    eQ = e.i(710580);

  function eX(e) {
    null != e && URL.revokeObjectURL(e)
  }

  function eZ(e) {
    return "default" !== e && "connecting" !== e
  }
  var eJ = e.i(650726),
    e0 = e.i(144166);

  function e1() {
    return e2
  }

  function e2() {
    (0, e0.setDynamicBaseFavicon)(null)
  }
  var e3 = e.i(526641),
    e8 = e.i(279188),
    e4 = e.i(448119),
    e5 = e.i(535678),
    e6 = e.i(322095);
  let e9 = (0, r.lazy)(() => e.A(97998));

  function e7() {
    (0, e5.markInitialLoadPoint)("chat_ready")
  }
  let te = {
    canCapture: !1,
    voiceEnabled: !1
  };

  function tt(e) {
    let t, n, l = (0, a.c)(5),
      {
        onResolve: i
      } = e,
      o = (0, m.useHatchVoiceCallingEnabled)(),
      {
        canUse: s
      } = (0, m.useNoiseInspectorAccess)();
    return l[0] !== s || l[1] !== i || l[2] !== o ? (t = () => i({
      canCapture: s,
      voiceEnabled: o
    }), n = [s, i, o], l[0] = s, l[1] = i, l[2] = o, l[3] = t, l[4] = n) : (t = l[3], n = l[4]), (0, r.useLayoutEffect)(t, n), null
  }

  function tn(e) {
    let t, l, i, o = (0, a.c)(9),
      s = (0, el.useHatchRouteAdmission)(),
      c = (0, f.useSSRChatHistory)();
    o[0] !== c.mainHistoryPage || o[1] !== c.mainHistorySourceKey ? (t = () => {
      var e, t;
      let n, a, r;
      return null == c.mainHistoryPage ? null : (e = c.mainHistoryPage, t = c.mainHistorySourceKey, n = (0, C.buildInitialHatchStoreState)(), r = (a = (0, e3.buildMainHistoryHydrationUpdate)(n, e, "replace")).chat ?? n.chat, {
        ...n,
        ...a,
        chat: {
          ...r,
          mainHistorySourceKey: t ?? r.mainHistorySourceKey
        }
      })
    }, o[0] = c.mainHistoryPage, o[1] = c.mainHistorySourceKey, o[2] = t) : t = o[2];
    let [u] = (0, r.useState)(t), d = s.hasLeftInitialGateway ? null : u;
    return o[3] !== e ? (l = (0, n.jsx)(ta, {
      ...e
    }), o[3] = e, o[4] = l) : l = o[4], o[5] !== s.storeScopeKey || o[6] !== d || o[7] !== l ? (i = (0, n.jsx)(e8.HatchStoreProvider, {
      initialState: d,
      scopeKey: s.storeScopeKey,
      children: l
    }), o[5] = s.storeScopeKey, o[6] = d, o[7] = l, o[8] = i) : i = o[8], i
  }

  function ta(e) {
    let t, o, f, m, p, v, y, b, S, x, k, E, A, T, w, R, H, P, I, N, D, L, M, O, F, U = (0, a.c)(115),
      {
        children: K,
        postContentBootstrapViewerKey: B,
        shellRouteFrame: V
      } = e,
      W = (0, el.useHatchRouteAdmission)(),
      G = (0, u.useReportActivationDestination)(),
      Y = (0, c.useHatchServerData)(),
      q = (0, ei.useHatchRpc)(),
      $ = (0, _.useHatchConnection)(),
      Q = (0, i.usePathname)(),
      X = function() {
        let e, t, n, l, i, o, s, c, u, d = (0, a.c)(32),
          {
            isReady: h,
            gatewayUrl: f,
            vmName: m
          } = (0, ei.useHatchRpc)(),
          {
            applyResolvedVariant: p,
            resolved: g,
            resolvedGatewayTargetKey: v
          } = (0, eF.useHatchOnboardingPagesContext)(),
          C = (0, eU.useQueryClient)();
        d[0] !== f || d[1] !== m ? (e = (0, eK.gatewayTargetKey)(f, m), d[0] = f, d[1] = m, d[2] = e) : e = d[2];
        let y = e,
          _ = g && v === y;
        d[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, ez.getOnboardingStartQuery)(), d[3] = t) : t = d[3];
        let b = t,
          S = h && !_,
          x = !_;
        d[4] !== S || d[5] !== x ? (n = {
          enabled: S,
          preload: x,
          retry: !1
        }, d[4] = S, d[5] = x, d[6] = n) : n = d[6];
        let k = (0, eV.useGatewayQuery)(b, n),
          E = (0, r.useRef)(null);
        d[7] !== p || d[8] !== k.data || d[9] !== _ || d[10] !== y ? (l = () => {
          _ || null == k.data || ((0, ez.reportOnboardingPagesAnomalies)("onboarding.pages.start", k.data), p(y, k.data.variant ?? null), (0, ez.clearOnboardingVariantFromLocation)())
        }, i = [p, k.data, _, y], d[7] = p, d[8] = k.data, d[9] = _, d[10] = y, d[11] = l, d[12] = i) : (l = d[11], i = d[12]), (0, r.useEffect)(l, i), d[13] !== k.error ? (o = () => {
          let e = k.error;
          if (null == e || E.current === e) return;
          E.current = e;
          let t = eM(e);
          t ? (eW.retainForBugReport("warn", "VM unavailable during initial admission"), (0, ec.captureHatchMessage)(ec.HATCH_SENTRY_SURFACES.ONBOARDING, "VM unavailable during initial admission", {
            level: "warning",
            tags: {
              recovery: "disconnected_shell",
              transport: "noise"
            },
            extra: {
              error: e
            }
          })) : eW.error({
            ...{
              error: e,
              recovery: t ? "disconnected_shell" : "error_fallback",
              transport: "noise"
            },
            tags: (0, ec.hatchSentryTags)(ec.HATCH_SENTRY_SURFACES.ONBOARDING)
          }, "onboarding.pages.start failed")
        }, s = [k.error], d[13] = k.error, d[14] = o, d[15] = s) : (o = d[14], s = d[15]), (0, r.useEffect)(o, s), d[16] !== k || d[17] !== C ? (c = () => {
          null != k.query && ((0, eB.clearEarlyGatewayQueryPromise)(k.query.sourceKey), C.removeQueries({
            queryKey: k.query.queryKey,
            exact: !0
          }), k.refetch())
        }, d[16] = k, d[17] = C, d[18] = c) : c = d[18];
        let A = c;
        if (_) {
          let e;
          return d[19] !== A || d[20] !== y ? (e = {
            error: null,
            retry: A,
            status: "resolved",
            targetKey: y
          }, d[19] = A, d[20] = y, d[21] = e) : e = d[21], e
        }
        if (k.isError) {
          let e;
          return d[22] !== k.error || d[23] !== A || d[24] !== y ? (e = {
            error: k.error,
            retry: A,
            status: "failed",
            targetKey: y
          }, d[22] = k.error, d[23] = A, d[24] = y, d[25] = e) : e = d[25], e
        }
        if ("fetching" !== k.fetchStatus) {
          let e;
          return d[26] !== A || d[27] !== y ? (e = {
            error: null,
            retry: A,
            status: "waiting_for_noise",
            targetKey: y
          }, d[26] = A, d[27] = y, d[28] = e) : e = d[28], e
        }
        return d[29] !== A || d[30] !== y ? (u = {
          error: null,
          retry: A,
          status: "starting",
          targetKey: y
        }, d[29] = A, d[30] = y, d[31] = u) : u = d[31], u
      }(),
      {
        markDismissed: Z,
        resolved: J,
        resolvedGatewayTargetKey: ee,
        variant: et
      } = function() {
        let e, t = (0, a.c)(5),
          {
            variant: n,
            resolvedGatewayTargetKey: r,
            resolved: l,
            markCompleted: i
          } = (0, eF.useHatchOnboardingPagesContext)();
        return t[0] !== i || t[1] !== l || t[2] !== r || t[3] !== n ? (e = {
          variant: n,
          resolvedGatewayTargetKey: r,
          resolved: l,
          markDismissed: i
        }, t[0] = i, t[1] = l, t[2] = r, t[3] = n, t[4] = e) : e = t[4], e
      }(),
      en = J && ee === W.targetKey && "resolved" === X.status;
    U[0] !== X.error || U[1] !== X.status ? (t = "failed" === X.status && eM(X.error), U[0] = X.error, U[1] = X.status, U[2] = t) : t = U[2];
    let ea = t;
    U[3] !== Q ? (o = (0, j.isLayoutOwnedChatShellPathname)(Q), U[3] = Q, U[4] = o) : o = U[4];
    let er = o && !Y.isLoading && null != Y.gatewayUrl && null == W.terminalInitialLoadState && "failed" !== X.status && "auth_failed" !== $.reason,
      eo = !Y.isLoading && null != Y.gatewayUrl && null == W.terminalInitialLoadState && (ea || "failed" !== X.status && ("browser_offline" === $.reason || "gateway_reconnect_exhausted" === $.reason || "gateway_unreachable" === W.gatewayFailureKind || "unknown" === W.gatewayFailureKind)),
      [es, eu] = (0, r.useState)(null),
      [ed, eh] = (0, r.useState)(null),
      [ef, em] = (0, r.useState)(null),
      ep = et === eO.UI_DRIVEN_ONBOARDING_VARIANT && null != q.gatewayUrl,
      eg = W.targetAdmitted && en,
      ev = es === W.targetKey;
    U[5] !== W.targetKey || U[6] !== eg ? (f = () => {
      eg && eu(W.targetKey)
    }, m = [W.targetKey, eg], U[5] = W.targetKey, U[6] = eg, U[7] = f, U[8] = m) : (f = U[7], m = U[8]), (0, r.useEffect)(f, m), U[9] !== en ? (p = () => {
      en && (0, e6.markInitialLoadMilestone)("onboardingResolved")
    }, v = [en], U[9] = en, U[10] = p, U[11] = v) : (p = U[10], v = U[11]), (0, r.useEffect)(p, v), U[12] !== W.flowBlockerActive || U[13] !== W.targetKey || U[14] !== eo ? (y = () => {
      eo && !W.flowBlockerActive && eh(W.targetKey)
    }, b = [W.flowBlockerActive, W.targetKey, eo], U[12] = W.flowBlockerActive, U[13] = W.targetKey, U[14] = eo, U[15] = y, U[16] = b) : (y = U[15], b = U[16]), (0, r.useEffect)(y, b), U[17] !== W.flowBlockerActive || U[18] !== W.targetKey || U[19] !== ef || U[20] !== en || U[21] !== ea ? (x = () => {
      ea && !W.flowBlockerActive && em(W.targetKey), en && ef === W.targetKey && em(null)
    }, S = [W.flowBlockerActive, W.targetKey, ef, en, ea], U[17] = W.flowBlockerActive, U[18] = W.targetKey, U[19] = ef, U[20] = en, U[21] = ea, U[22] = S, U[23] = x) : (S = U[22], x = U[23]), (0, r.useEffect)(x, S);
    let eb = !en && (ea || ef === W.targetKey),
      eS = ed === W.targetKey && null != Y.gatewayUrl && ("failed" !== X.status || eb) && "auth_failed" !== $.reason,
      ex = ev || eS || (eg || er || eo) && !W.flowBlockerActive,
      [ek, eE] = (0, r.useState)(null),
      eA = null != ek,
      eP = eA && (eg || ev) && !ep;
    U[24] !== ex || U[25] !== G ? (k = () => {
      ex && ((0, e5.markInitialLoadPoint)("application_admitted"), G("main_app"))
    }, E = [ex, G], U[24] = ex, U[25] = G, U[26] = k, U[27] = E) : (k = U[26], E = U[27]), (0, r.useEffect)(k, E);
    let eI = !en || !eA,
      ej = eb && "failed" !== X.status,
      eD = eI && "connected" === W.connectionState ? eb && !ej ? "error" : "connecting" : W.connectionState;
    U[28] === Symbol.for("react.memo_cache_sentinel") ? (A = () => {
      eE(te)
    }, U[28] = A) : A = U[28];
    let eL = A,
      eG = ek?.canCapture ?? !1;
    U[29] !== W.registerApplicationBridge || U[30] !== eA || U[31] !== q.isReady || U[32] !== Y.gatewayUrl || U[33] !== eG ? (T = {
        canCapture: eG,
        enabled: eA,
        gatewayUrl: Y.gatewayUrl,
        isReady: q.isReady,
        registerApplicationBridge: W.registerApplicationBridge
      }, U[29] = W.registerApplicationBridge, U[30] = eA, U[31] = q.isReady, U[32] = Y.gatewayUrl, U[33] = eG, U[34] = T) : T = U[34],
      function({
        canCapture: e,
        enabled: t,
        gatewayUrl: n,
        isReady: a,
        registerApplicationBridge: l
      }) {
        let i = (0, r.useRef)(e);
        i.current = e;
        let o = (0, d.useIsMobileBreakpoint)(),
          s = (0, r.useRef)(o);
        s.current = o;
        let c = (0, r.useRef)(0),
          u = (0, r.useRef)([]),
          h = (0, r.useRef)(!1),
          f = (0, r.useRef)(0),
          m = (0, r.useRef)(!1),
          p = (0, r.useRef)(null);
        (0, r.useLayoutEffect)(() => (m.current = !0, () => {
          m.current = !1, null != p.current && cancelAnimationFrame(p.current), p.current = null, h.current = !1, u.current = [], f.current = 0
        }), []);
        let g = (0, r.useCallback)(() => m.current && i.current && C.getSnapshot().recording.isRecording, []),
          v = (0, r.useCallback)(e => {
            if (m.current && i.current) {
              if (u.current.push(e), f.current += e.byteSize ?? 0, u.current.length >= 1e3 || f.current >= 1048576) {
                let e = u.current;
                u.current = [], f.current = 0, C.appendRecordedEvents(e);
                return
              }
              h.current || (h.current = !0, p.current = requestAnimationFrame(() => {
                if (p.current = null, !m.current) {
                  u.current = [], f.current = 0, h.current = !1;
                  return
                }
                let e = u.current;
                u.current = [], f.current = 0, h.current = !1, e.length > 0 && C.appendRecordedEvents(e)
              }))
            }
          }, []),
          y = (0, r.useCallback)((e, t, a, r) => {
            m.current && i.current && C.getSnapshot().recording.isRecording && v((0, e4.parseRawWsMessage)(e, t, c.current++, n ?? "", a, r))
          }, [n, v]),
          _ = (0, r.useCallback)(e => {
            if (!m.current || !i.current) return;
            let t = C.getSnapshot().recording;
            if (!t.isRecording)
              if (!t.autoRecord || t.stoppedByUser || s.current || "connect" !== e.lifecycle.phase) return;
              else t.events.length > 0 ? C.resumeRecording() : (c.current = 0, C.startRecording());
            v((0, e4.createLifecycleWsEvent)({
              eventName: e.eventName,
              index: c.current++,
              sourceUrl: n ?? "",
              websocketConnectionID: e.websocketConnectionID,
              lifecycle: e.lifecycle
            }))
          }, [n, v]),
          b = (0, r.useCallback)(() => C.discardActiveComposerUploads(), []);
        (0, r.useLayoutEffect)(() => {
          if (t) return l({
            beforeGatewayChange: b,
            onLifecycleEvent: _,
            onRawMessage: y,
            shouldCaptureRawMessage: g
          })
        }, [b, t, _, y, l, g]);
        let S = (0, r.useRef)(!1);
        (0, r.useEffect)(() => {
          if (!t) {
            S.current = !1;
            return
          }
          if (a && !S.current && i.current && !s.current) {
            let {
              autoRecord: e,
              isRecording: t,
              events: n,
              stoppedByUser: a
            } = C.getSnapshot().recording;
            !e || t || a || (n.length > 0 ? C.resumeRecording() : (c.current = 0, C.startRecording()))
          }
          S.current = a
        }, [t, a])
      }(T);
    let {
      layoutState: eY
    } = (0, h.useHatchLayoutState)();
    U[35] !== V || U[36] !== eY || U[37] !== Q ? (w = null == V ? null : (0, eT.pickHatchShellRouteFallback)(Q, eY), U[35] = V, U[36] = eY, U[37] = Q, U[38] = w) : w = U[38];
    let eq = w;
    U[39] !== W.targetKey || U[40] !== eP || U[41] !== q.gatewayUrl || U[42] !== Y.vmName ? (R = {
      applicationActive: eP,
      gatewayUrl: q.gatewayUrl,
      targetKey: W.targetKey,
      vmName: Y.vmName
    }, U[39] = W.targetKey, U[40] = eP, U[41] = q.gatewayUrl, U[42] = Y.vmName, U[43] = R) : R = U[43];
    let {
      postContentWorkEnabled: e$,
      primaryContentPending: eQ,
      safetyWorkEnabled: eX
    } = function(e) {
      let t, n, l, o, s, c, u, d, h, f = (0, a.c)(31),
        {
          applicationActive: m,
          gatewayUrl: p,
          targetKey: g,
          vmName: v
        } = e,
        C = (0, i.usePathname)(),
        y = (0, i.useSearchParams)(),
        _ = (0, e_.useShellPrimaryContentSnapshot)();
      f[0] !== C || f[1] !== y ? (t = (0, eC.resolveShellLocationMatch)(C, y, ey.shellRouteMetadata), f[0] = C, f[1] = y, f[2] = t) : t = f[2];
      let b = t.match;
      f[3] !== b ? (n = (0, e_.getShellPrimaryContentRoute)(b), f[3] = b, f[4] = n) : n = f[4];
      let S = n;
      f[5] !== p || f[6] !== v ? (l = (0, e_.getShellPrimaryContentGatewayIdentity)(p, v), f[5] = p, f[6] = v, f[7] = l) : l = f[7];
      let x = l,
        k = null == S || null == b ? null : `${g}:${x}:${S}:${b.identity}`,
        E = `${g}:${x}`,
        [A, T] = (0, r.useState)(null),
        [w, R] = (0, r.useState)(null),
        [H, P] = (0, r.useState)(null);
      f[8] !== m || f[9] !== k ? (o = () => {
        m && null != k && ((0, e_.rearmShellPrimaryContentCommit)(), T(k))
      }, s = [m, k], f[8] = m, f[9] = k, f[10] = o, f[11] = s) : (o = f[10], s = f[11]), (0, r.useLayoutEffect)(o, s);
      let I = null != k && A === k && "post_content_eligible" === _.phase && _.route === S && _.identity === b?.identity && _.gatewayIdentity === x,
        N = null != k && A === k && _.surfaceCommitted && null != _.outcome && _.route === S && _.identity === b?.identity && _.gatewayIdentity === x;
      f[12] !== A || f[13] !== p || f[14] !== _ || f[15] !== k || f[16] !== b || f[17] !== v ? (c = null != k && A === k && (0, e_.isShellSafetyWorkEligibleForRoute)(_, b, p, v), f[12] = A, f[13] = p, f[14] = _, f[15] = k, f[16] = b, f[17] = v, f[18] = c) : c = f[18];
      let j = c,
        D = null == S || I,
        L = null == S || j;
      f[19] !== m || f[20] !== D || f[21] !== L || f[22] !== H || f[23] !== E || f[24] !== w ? (u = () => {
        if (!m) {
          w === E && R(null), H === E && P(null);
          return
        }
        D && R(E), L && P(E)
      }, d = [m, D, L, H, E, w], f[19] = m, f[20] = D, f[21] = L, f[22] = H, f[23] = E, f[24] = w, f[25] = u, f[26] = d) : (u = f[25], d = f[26]), (0, r.useEffect)(u, d);
      let M = m && (w === E || D),
        O = null != S && !N,
        F = m && (H === E || L);
      return f[27] !== O || f[28] !== F || f[29] !== M ? (h = {
        postContentWorkEnabled: M,
        primaryContentPending: O,
        safetyWorkEnabled: F
      }, f[27] = O, f[28] = F, f[29] = M, f[30] = h) : h = f[30], h
    }(R);
    U[44] !== eb || U[45] !== X.error || U[46] !== X.retry || U[47] !== X.status ? (H = "failed" !== X.status || eb ? null : (0, n.jsx)(eH.HatchInitialLoadStateLayout, {
      children: (0, n.jsx)(eR.HatchContentErrorFallback, {
        error: X.error ?? Error("Unable to resolve workspace onboarding"),
        onRetry: X.retry,
        alwaysShowRetry: !0
      })
    }), U[44] = eb, U[45] = X.error, U[46] = X.retry, U[47] = X.status, U[48] = H) : H = U[48];
    let eZ = H,
      eJ = W.terminalInitialLoadState ?? eZ,
      e0 = ek?.voiceEnabled ?? !1;
    if (null != eJ) P = eJ;
    else if (null == V || ep)
      if (ex && ep && null != q.gatewayUrl) {
        let e;
        U[62] !== Z || U[63] !== q.gatewayUrl || U[64] !== q.sendRequest ? (e = (0, n.jsx)(eN, {
          gatewayUrl: q.gatewayUrl,
          sendRequest: q.sendRequest,
          onComplete: Z
        }), U[62] = Z, U[63] = q.gatewayUrl, U[64] = q.sendRequest, U[65] = e) : e = U[65], P = e
      } else if (ex) {
      let e, t = eA && e$;
      U[66] !== W.connectionState || U[67] !== K || U[68] !== B || U[69] !== e0 || U[70] !== Y || U[71] !== t ? (e = (0, n.jsx)(tu, {
        connectionState: W.connectionState,
        postContentBootstrapViewerKey: B,
        postContentWorkEnabled: t,
        serverData: Y,
        voiceEnabled: e0,
        children: K
      }), U[66] = W.connectionState, U[67] = K, U[68] = B, U[69] = e0, U[70] = Y, U[71] = t, U[72] = e) : e = U[72], P = e
    } else {
      let e;
      U[73] !== eq?.body ? (e = eq?.body ?? (0, n.jsx)(ew.HatchBootStatusAnnouncement, {}), U[73] = eq?.body, U[74] = e) : e = U[74], P = e
    } else {
      let e, t, a = eA && ex && e$,
        r = ex ? void 0 : eq ?? void 0;
      U[49] !== V || U[50] !== W.shellHydrated || U[51] !== ex || U[52] !== K || U[53] !== r ? (e = (0, n.jsx)(V, {
        admitted: ex,
        pending: r,
        shellHydrated: W.shellHydrated,
        children: K
      }), U[49] = V, U[50] = W.shellHydrated, U[51] = ex, U[52] = K, U[53] = r, U[54] = e) : e = U[54], U[55] !== W.connectionState || U[56] !== B || U[57] !== e0 || U[58] !== Y || U[59] !== a || U[60] !== e ? (t = (0, n.jsx)(tu, {
        connectionState: W.connectionState,
        postContentBootstrapViewerKey: B,
        postContentWorkEnabled: a,
        serverData: Y,
        voiceEnabled: e0,
        children: e
      }), U[55] = W.connectionState, U[56] = B, U[57] = e0, U[58] = Y, U[59] = a, U[60] = e, U[61] = t) : t = U[61], P = t
    }
    let e1 = eI ? null : q.connectionAuthority,
      e2 = !eI && q.isReady,
      e3 = eI ? ti : q.sendRequest,
      e8 = eI ? ts : q.onEvent,
      e9 = eI ? tc : q.onClientInvoke,
      tn = eI ? to : q.ensureLiveConnection,
      ta = !eI && W.gatewayHasEverConnected,
      td = eb && "none" === W.gatewayFailureKind ? ej ? "none" : "gateway_unreachable" : W.gatewayFailureKind,
      th = eb && "connected" === W.connectionState && !W.gatewayReconnectExhausted ? X.retry : W.gatewayReconnect;
    U[75] === Symbol.for("react.memo_cache_sentinel") ? (I = (0, n.jsx)(s.EctoErrorBoundary, {
      surface: ec.HATCH_SENTRY_SURFACES.CHAT,
      fallback: tl,
      onError: eL,
      children: (0, n.jsx)(r.Suspense, {
        fallback: null,
        children: (0, n.jsx)(tt, {
          onResolve: eE
        })
      })
    }), U[75] = I) : I = U[75];
    let tf = W.flowBlockerActive || void 0,
      tm = W.flowBlockerActive || void 0,
      tp = W.shellHydrated ? "hydrated" : "server",
      tg = null != V && null == eJ && !ep && "browser_offline" !== $.reason && "gateway_reconnect_exhausted" !== $.reason && eQ;
    U[76] !== tg ? (N = (0, n.jsx)(l.HeroHoldTrigger, {
      hold: tg,
      description: "shell-primary-content"
    }), U[76] = tg, U[77] = N) : N = U[77], U[78] !== Q ? (D = (0, n.jsx)(z, {
      pathname: Q
    }), U[78] = Q, U[79] = D) : D = U[79];
    let tv = !ep,
      tC = ek?.voiceEnabled ?? !1,
      ty = ep || !en ? "guided_onboarding" : "application",
      t_ = eA && e$,
      tb = eA && eX;
    return U[80] !== W.gatewayScopeKey || U[81] !== P || U[82] !== tv || U[83] !== tC || U[84] !== ty || U[85] !== t_ || U[86] !== tb ? (L = (0, n.jsx)(s.EctoErrorBoundary, {
      surface: ec.HATCH_SENTRY_SURFACES.CHAT,
      fallback: tr,
      children: (0, n.jsx)(g.HatchChatProvider, {
        connectionRecoveryEnabled: tv,
        gatewayScopeKey: W.gatewayScopeKey,
        onSubscribed: e7,
        voiceEnabled: tC,
        workloadMode: ty,
        postContentWorkEnabled: t_,
        safetyWorkEnabled: tb,
        children: P
      })
    }), U[80] = W.gatewayScopeKey, U[81] = P, U[82] = tv, U[83] = tC, U[84] = ty, U[85] = t_, U[86] = tb, U[87] = L) : L = U[87], U[88] !== tf || U[89] !== tm || U[90] !== tp || U[91] !== N || U[92] !== D || U[93] !== L ? (M = (0, n.jsxs)("div", {
      className: "contents",
      "aria-hidden": tf,
      inert: tm,
      "data-hatch-shell-hydration-state": tp,
      children: [N, D, L]
    }), U[88] = tf, U[89] = tm, U[90] = tp, U[91] = N, U[92] = D, U[93] = L, U[94] = M) : M = U[94], U[95] !== W.gatewayReconnectExhausted || U[96] !== eD || U[97] !== Y.gatewayUrl || U[98] !== ta || U[99] !== td || U[100] !== th || U[101] !== M ? (O = (0, n.jsxs)(_.HatchConnectionProvider, {
      gatewayUrl: Y.gatewayUrl,
      wsConnectionState: eD,
      hasEverConnected: ta,
      lastFailureKind: td,
      reconnectExhausted: W.gatewayReconnectExhausted,
      reconnect: th,
      children: [I, M]
    }), U[95] = W.gatewayReconnectExhausted, U[96] = eD, U[97] = Y.gatewayUrl, U[98] = ta, U[99] = td, U[100] = th, U[101] = M, U[102] = O) : O = U[102], U[103] !== W.gatewayScopeKey || U[104] !== eD || U[105] !== q.gatewayUrl || U[106] !== q.vmName || U[107] !== e1 || U[108] !== e2 || U[109] !== e3 || U[110] !== e8 || U[111] !== e9 || U[112] !== tn || U[113] !== O ? (F = (0, n.jsx)(ei.HatchRpcProvider, {
      connectionAuthority: e1,
      connectionState: eD,
      isReady: e2,
      sendRequest: e3,
      onEvent: e8,
      onClientInvoke: e9,
      ensureLiveConnection: tn,
      gatewayUrl: q.gatewayUrl,
      vmName: q.vmName,
      gatewayScopeKey: W.gatewayScopeKey,
      children: O
    }), U[103] = W.gatewayScopeKey, U[104] = eD, U[105] = q.gatewayUrl, U[106] = q.vmName, U[107] = e1, U[108] = e2, U[109] = e3, U[110] = e8, U[111] = e9, U[112] = tn, U[113] = O, U[114] = F) : F = U[114], F
  }

  function tr(e) {
    let {
      error: t,
      reset: a
    } = e;
    return (0, n.jsx)(eH.HatchInitialLoadStateLayout, {
      children: (0, n.jsx)(o.HatchPageErrorFallback, {
        error: t,
        reset: a
      })
    })
  }

  function tl() {
    return null
  }

  function ti() {
    return Promise.reject(Error("Gateway not connected"))
  }

  function to() {
    return Promise.reject(Error("Gateway application transport blocked before admission"))
  }

  function ts() {
    return () => {}
  }

  function tc() {
    return () => {}
  }

  function tu(e) {
    let t, r = (0, a.c)(3),
      l = (0, V.useHatchPostContentSafetyReady)(),
      i = e.postContentWorkEnabled && l;
    return r[0] !== e || r[1] !== i ? (t = (0, n.jsx)(td, {
      ...e,
      postContentWorkEnabled: i
    }), r[0] = e, r[1] = i, r[2] = t) : t = r[2], t
  }

  function td(e) {
    let t, r, l, i, o, s = (0, a.c)(17),
      {
        children: c,
        connectionState: u,
        postContentBootstrapViewerKey: d,
        postContentWorkEnabled: h,
        serverData: f,
        voiceEnabled: m
      } = e;
    return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(b, {}), s[0] = t) : t = s[0], s[1] !== c || s[2] !== u || s[3] !== h || s[4] !== f ? (r = (0, n.jsx)(p.HatchActivityProvider, {
      children: (0, n.jsx)(th, {
        serverData: f,
        connectionState: u,
        postContentWorkEnabled: h,
        children: c
      })
    }), s[1] = c, s[2] = u, s[3] = h, s[4] = f, s[5] = r) : r = s[5], s[6] !== h || s[7] !== r || s[8] !== m ? (l = (0, n.jsx)(eg, {
      featureEnabled: m,
      postContentWorkEnabled: h,
      children: r
    }), s[6] = h, s[7] = r, s[8] = m, s[9] = l) : l = s[9], s[10] !== l || s[11] !== m ? (i = (0, n.jsx)(eo.HatchVoiceCallProvider, {
      autoLoadRuntime: !1,
      onCallStateChange: C.setActiveVoiceCallState,
      registerCompanionRootAgentId: C.registerCompanionRootAgentId,
      voiceCallEnabled: m,
      children: l
    }), s[10] = l, s[11] = m, s[12] = i) : i = s[12], s[13] !== d || s[14] !== h || s[15] !== i ? (o = (0, n.jsxs)(er, {
      enabled: h,
      scopeKey: d,
      children: [t, i]
    }), s[13] = d, s[14] = h, s[15] = i, s[16] = o) : o = s[16], o
  }

  function th(e) {
    var t;
    let l, o, c, u, d, h, f, m, p, g, v, y, _, b, S, x, k, E, A, T, w = (0, a.c)(10),
      {
        children: R,
        connectionState: H,
        postContentWorkEnabled: P,
        serverData: I
      } = e;
    g = (0, a.c)(17), v = (0, i.usePathname)(), y = (0, i.useSearchParams)(), _ = (0, ev.useGatewayQueryContext)(), g[0] !== y ? (d = y ?? new URLSearchParams, g[0] = y, g[1] = d) : d = g[1], g[2] !== v || g[3] !== d ? (h = (0, eC.resolveShellLocationMatch)(v, d, ey.shellRouteMetadata), g[2] = v, g[3] = d, g[4] = h) : h = g[4], b = h.match, g[5] !== _.gatewayUrl || g[6] !== _.isReady || g[7] !== _.vmName || g[8] !== b ? (f = () => ((0, eb.cancelShellRouteIntentPrefetches)(), (0, e_.beginShellPrimaryContentLifecycle)(b, _.gatewayUrl, _.vmName, {
        gatewayReady: _.isReady,
        online: !1 !== navigator.onLine,
        pageVisible: "hidden" !== document.visibilityState
      }), eA), g[5] = _.gatewayUrl, g[6] = _.isReady, g[7] = _.vmName, g[8] = b, g[9] = f) : f = g[9], g[10] !== _.gatewayUrl || g[11] !== _.isReady || g[12] !== _.targetKey || g[13] !== _.vmName || g[14] !== b ? (m = [_.gatewayUrl, _.isReady, _.targetKey, _.vmName, b], g[10] = _.gatewayUrl, g[11] = _.isReady, g[12] = _.targetKey, g[13] = _.vmName, g[14] = b, g[15] = m) : m = g[15], (0, r.useLayoutEffect)(f, m), g[16] === Symbol.for("react.memo_cache_sentinel") ? (p = [], g[16] = p) : p = g[16], (0, r.useLayoutEffect)(eS, p), t = I.gatewayUrl, k = (0, a.c)(6), E = (0, eY.useOptionalAuth)(), A = (0, r.useRef)(null), k[0] !== E?.userId || k[1] !== t ? (S = () => {
        let e = E?.userId;
        if (null == t || null == e) return;
        let n = (0, eQ.getAvatarCacheGatewayHost)(t);
        if (null == n) return;
        let a = `${e}\0${n}`;
        if (A.current === a) return;
        A.current = a;
        let r = !1;
        return (async () => {
          let t = await (0, eQ.readAvatarCacheManifest)(e, n);
          if (r || null == t) return;
          let {
            imagePath: a,
            videoPaths: l
          } = (0, eq.resolveHatchAvatarPaths)(t.avatar, t.avatarInfo), i = (0, eQ.getAvatarCachePaths)(t.avatar, {
            imagePath: a,
            videoPaths: l
          }), o = await (0, eQ.peekAvatarBlobUrl)(n, a);
          if (r) return eX(o);
          let s = C.getSnapshot().identity,
            c = 0 === s.avatar.length ? null : (0, eq.resolveHatchAvatarPaths)(s.avatar, s.avatarInfo);
          if (!(null == c || s.avatar === t.avatar && c.imagePath === a && eq.HATCH_AVATAR_VARIANTS.every(e => c.videoPaths[e] === l[e]))) return eX(o);
          if (C.hydrateCachedAvatarIdentity(t.name ?? "", t.hasCustomName ?? !1, t.avatar, t.avatarInfo, t.chatThemeColor), null != o) {
            C.setAvatarAssets(o, {});
            let e = t.chatThemeColor ? (0, e$.avatarColorResultFromHex)(t.chatThemeColor) : null;
            null != e && C.setAvatarColors(e.dominantColor, e.bubbleColor)
          }
          let [u, d] = await Promise.all([(0, eQ.peekAvatarBlobUrl)(n, l.default), l.connecting === l.default ? Promise.resolve(null) : (0, eQ.peekAvatarBlobUrl)(n, l.connecting)]), h = l.connecting === l.default ? u : d;
          if (r || null == u || null == h) {
            eX(u), eX(d);
            return
          }
          let f = C.getSnapshot().identity,
            m = 0 === f.avatar.length ? null : (0, eq.resolveHatchAvatarPaths)(f.avatar, f.avatarInfo);
          if (!(null == m || f.avatar === t.avatar && m.imagePath === a && eq.HATCH_AVATAR_VARIANTS.every(e => m.videoPaths[e] === l[e]))) {
            eX(u), eX(d);
            return
          }
          let p = {
            default: u,
            connecting: h
          };
          null != o ? C.patchAvatarAssets({
            videoUrlsByVariant: p
          }) : C.setAvatarAssets(null, p);
          let g = eq.HATCH_AVATAR_VARIANTS.filter(eZ),
            v = await Promise.all(g.map(async e => ({
              variant: e,
              url: l[e] === l.default ? u : await (0, eQ.peekAvatarBlobUrl)(n, i.videoPaths[e])
            }))),
            y = C.getSnapshot().identity,
            _ = (0, eq.resolveHatchAvatarPaths)(y.avatar, y.avatarInfo),
            b = y.avatar === t.avatar && _.imagePath === a && eq.HATCH_AVATAR_VARIANTS.every(e => _.videoPaths[e] === l[e]);
          if (r || !b) {
            for (let {
                variant: e,
                url: t
              }
              of v) null != t && l[e] !== l.default && eX(t);
            return
          }
          let S = {};
          for (let {
              variant: e,
              url: t
            }
            of v) null != t && (S[e] = t);
          Object.keys(S).length > 0 && C.patchAvatarAssets({
            videoUrlsByVariant: S
          })
        })(), () => {
          r = !0
        }
      }, k[0] = E?.userId, k[1] = t, k[2] = S) : S = k[2], T = E?.userId, k[3] !== t || k[4] !== T ? (x = [T, t], k[3] = t, k[4] = T, k[5] = x) : x = k[5], (0, r.useEffect)(S, x),
      function() {
        let e, t, n, l, i, o, s = (0, a.c)(9),
          c = (0, eJ.useAvatarImageUrl)();
        if (s[0] !== c) {
          let t;
          e = null != (t = c?.trim()) && t.length > 0 ? t : null, s[0] = c, s[1] = e
        } else e = s[1];
        let u = e,
          [d, h] = (0, r.useState)(null);
        s[2] !== u ? (t = () => {
          let e = !1;
          return null == u ? void h(null) : ((0, e0.buildAvatarBaseFavicon)(u).then(t => {
            e || h(t)
          }), () => {
            e = !0
          })
        }, n = [u], s[2] = u, s[3] = t, s[4] = n) : (t = s[3], n = s[4]), (0, r.useEffect)(t, n), s[5] !== d ? (l = () => {
          (0, e0.setDynamicBaseFavicon)(d);
          let e = !1,
            t = !1,
            n = new MutationObserver(() => {
              t || (t = !0, queueMicrotask(() => {
                e || (t = !1, (0, e0.setDynamicBaseFavicon)(d))
              }))
            });
          return n.observe(document.head, {
            attributeFilter: ["href", "rel"],
            attributes: !0,
            childList: !0,
            subtree: !0
          }), n.observe(document.documentElement, {
            attributeFilter: ["class", "data-accent-color"],
            attributes: !0
          }), () => {
            e = !0, n.disconnect()
          }
        }, i = [d], s[5] = d, s[6] = l, s[7] = i) : (l = s[6], i = s[7]), (0, r.useEffect)(l, i), s[8] === Symbol.for("react.memo_cache_sentinel") ? (o = [], s[8] = o) : o = s[8], (0, r.useEffect)(e1, o)
      }();
    let N = I.gatewayUrl,
      j = (0, r.useRef)(H);
    return w[0] !== H || w[1] !== N ? (l = () => {
      if ("connected" === j.current && "disconnected" === H) {
        (0, eG.resetFileTreeState)((0, K.getHatchQueryClient)());
        let e = (0, K.getHatchQueryClient)();
        N && e.invalidateQueries({
          queryKey: (0, B.hatchLibraryQueryKeyPrefix)(N)
        }), e.invalidateQueries()
      }
      j.current = H
    }, o = [H, N], w[0] = H, w[1] = N, w[2] = l, w[3] = o) : (l = w[2], o = w[3]), (0, r.useEffect)(l, o), w[4] !== P || w[5] !== I.gatewayUrl ? (c = P ? (0, n.jsx)(s.EctoErrorBoundary, {
      surface: ec.HATCH_SENTRY_SURFACES.CHAT,
      children: (0, n.jsx)(r.Suspense, {
        fallback: null,
        children: (0, n.jsx)(e9, {
          gatewayUrl: I.gatewayUrl
        })
      })
    }) : null, w[4] = P, w[5] = I.gatewayUrl, w[6] = c) : c = w[6], w[7] !== R || w[8] !== c ? (u = (0, n.jsxs)(n.Fragment, {
      children: [c, R]
    }), w[7] = R, w[8] = c, w[9] = u) : u = w[9], u
  }
  var tf = e.i(217089),
    tm = e.i(345717),
    tp = e.i(659920);
  let tg = (0, r.createContext)(null);
  var tv = e.i(347248),
    tC = e.i(762004);
  let ty = e => !e.isLayoutDirty && e.willUpdate(!1),
    t_ = ({
      children: e,
      id: t,
      inherit: a = !0
    }) => {
      let l = (0, r.useContext)(tp.LayoutGroupContext),
        i = (0, r.useContext)(tg),
        [o, s] = function() {
          let e, t = (e = (0, r.useRef)(!1), (0, tC.useIsomorphicLayoutEffect)(() => (e.current = !0, () => {
              e.current = !1
            }), []), e),
            [n, a] = (0, r.useState)(0),
            l = (0, r.useCallback)(() => {
              t.current && a(n + 1)
            }, [n]);
          return [(0, r.useCallback)(() => tv.frame.postRender(l), [l]), n]
        }(),
        c = (0, r.useRef)(null),
        u = l.id || i;
      if (null === c.current) {
        let e, n, r, i;
        (!0 == (!0 === (i = a)) || "id" === i) && u && (t = t ? u + "-" + t : u), c.current = {
          id: t,
          group: !0 === a && l.group || (e = new Set, n = new WeakMap, {
            add: t => {
              e.add(t), n.set(t, t.addEventListener("willUpdate", r))
            },
            remove: t => {
              e.delete(t);
              let a = n.get(t);
              a && (a(), n.delete(t)), r()
            },
            dirty: r = () => e.forEach(ty)
          })
        }
      }
      let d = (0, r.useMemo)(() => ({
        ...c.current,
        forceRender: o
      }), [s]);
      return (0, n.jsx)(tp.LayoutGroupContext.Provider, {
        value: d,
        children: e
      })
    };
  var tb = e.i(906757),
    tS = e.i(880162),
    tx = e.i(986044),
    tk = e.i(374785),
    tE = e.i(224520),
    tA = e.i(832964),
    tT = e.i(295967);

  function tw() {
    let e, t, r, l = (0, a.c)(3);
    return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = tm.fbs._("Loading search", null, {
      hk: "1ZiHA4"
    }), l[0] = e) : e = l[0], l[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsxs)("div", {
      "aria-hidden": "true",
      className: "relative flex h-16 items-center gap-1 px-4.5 pt-6 pb-4.5",
      children: [(0, n.jsx)(tA.Skeleton, {
        className: "size-9 shrink-0 rounded-full"
      }), (0, n.jsx)(tA.Skeleton, {
        className: "h-[22px] w-32 rounded"
      }), (0, n.jsx)("div", {
        className: "bg-fill-divider pointer-events-none absolute inset-x-3 bottom-0 h-px"
      })]
    }), l[1] = t) : t = l[1], l[2] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(tT.LoadingState, {
      name: "quick_search",
      children: (0, n.jsxs)("div", {
        role: "status",
        "aria-busy": "true",
        "aria-label": e,
        className: "flex min-h-0 flex-col gap-0 motion-reduce:[&_*]:!animate-none",
        children: [t, (0, n.jsxs)("div", {
          "aria-hidden": "true",
          className: "flex flex-col gap-px p-3",
          children: [(0, n.jsx)("div", {
            className: "px-2 pt-px pb-1",
            children: (0, n.jsx)(tA.Skeleton, {
              className: "h-[18px] w-16 rounded"
            })
          }), Array.from({
            length: 5
          }).map(tR)]
        })]
      })
    }), l[2] = r) : r = l[2], r
  }

  function tR(e, t) {
    return (0, n.jsxs)("div", {
      className: "flex h-12 items-center gap-2 p-1.5",
      children: [(0, n.jsx)(tA.Skeleton, {
        className: "size-9 shrink-0 rounded-full",
        style: {
          animationDelay: `${60*t}ms`
        }
      }), (0, n.jsxs)("div", {
        className: "flex min-w-0 flex-1 flex-col gap-px",
        children: [(0, n.jsx)(tA.Skeleton, {
          className: "h-[18px] w-1/2 rounded",
          style: {
            animationDelay: `${60*t+30}ms`
          }
        }), (0, n.jsx)(tA.Skeleton, {
          className: "h-[13px] w-3/4 rounded",
          style: {
            animationDelay: `${60*t+45}ms`
          }
        })]
      })]
    }, t)
  }
  var tH = e.i(479746),
    tP = e.i(829249);

  function tI(e, t) {
    e?.style.setProperty("--hatch-composer-reserved-height", t)
  }
  var tN = e.i(255859),
    tj = e.i(972176);

  function tD(e) {
    let t, r = (0, a.c)(2),
      {
        open: l
      } = e,
      i = l ? "open" : "closed";
    return r[0] !== i ? (t = (0, n.jsx)(tj.PopoverPortal, {
      forceMount: !0,
      children: (0, n.jsx)("div", {
        "aria-hidden": "true",
        "data-slot": "quick-search-scrim",
        "data-state": i,
        className: "bg-fill-dialog-overlay fixed inset-0 z-50 opacity-0 transition-opacity duration-1000 data-[state=closed]:pointer-events-none data-[state=open]:pointer-events-auto data-[state=open]:opacity-100 motion-reduce:transition-none"
      })
    }), r[0] = i, r[1] = t) : t = r[1], t
  }

  function tL(e) {
    let t, l, i, o, s, c, u = (0, a.c)(12),
      {
        children: d,
        open: h,
        onOpenChange: f
      } = e,
      m = (0, r.useRef)(null);
    return u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(tj.PopoverAnchor, {
      asChild: !0,
      children: (0, n.jsx)("span", {
        "aria-hidden": "true",
        className: "pointer-events-none fixed start-1/2 top-[25vh] z-50 size-0 -translate-x-1/2"
      })
    }), u[0] = t) : t = u[0], u[1] !== h ? (l = (0, n.jsx)(tD, {
      open: h
    }), u[1] = h, u[2] = l) : l = u[2], u[3] === Symbol.for("react.memo_cache_sentinel") ? (i = e => {
      e.preventDefault(), m.current?.focus()
    }, u[3] = i) : i = u[3], u[4] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n.jsx)("h2", {
      className: "sr-only",
      children: tm.fbs._("Search {productFullName}", [tm.fbs._param("productFullName", tN.PRODUCT_BRAND.fullName)], {
        hk: "YCsPm"
      })
    }), u[4] = o) : o = u[4], u[5] !== d ? (s = (0, n.jsxs)(tj.PopoverContent, {
      "data-testid": "hatch-quick-search-frame",
      align: "center",
      side: "bottom",
      sideOffset: 0,
      ref: m,
      tabIndex: -1,
      onOpenAutoFocus: i,
      className: "!rounded-24 bg-bg-primary data-[state=open]:zoom-in-105 data-[state=closed]:zoom-out-105 max-h-[50vh] w-[min(512px,calc(100vw-24px))] overflow-hidden p-0 !backdrop-blur-none duration-300",
      children: [o, d]
    }), u[5] = d, u[6] = s) : s = u[6], u[7] !== f || u[8] !== h || u[9] !== l || u[10] !== s ? (c = (0, n.jsxs)(tj.Popover, {
      modal: !0,
      open: h,
      onOpenChange: f,
      children: [t, l, s]
    }), u[7] = f, u[8] = h, u[9] = l, u[10] = s, u[11] = c) : c = u[11], c
  }
  var tM = e.i(181959),
    tO = e.i(440802),
    tF = e.i(325814);

  function tU() {
    return (0, r.lazy)(() => e.A(939380).then(e => ({
      default: e.HatchMediaLightboxFromFile
    })))
  }

  function tz(e) {
    let t, r, l, i, o, s, c, u = (0, a.c)(11),
      {
        onClose: d
      } = e;
    return u[0] !== d ? (t = e => !e && d(), u[0] = d, u[1] = t) : t = u[1], u[2] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(tF.DialogOverlay, {}), u[2] = r) : r = u[2], u[3] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)(tF.DialogTitle, {
      className: "sr-only",
      children: tm.fbs._("Loading media", null, {
        hk: "1jO5vq"
      })
    }), u[3] = l) : l = u[3], u[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)(tF.DialogClose, {
      asChild: !0,
      children: (0, n.jsx)(tO.IconButton, {
        icon: tM.default,
        label: tm.fbs._("Close media viewer", null, {
          hk: "10kKK0"
        }),
        variant: "on-media",
        size: "32",
        className: "absolute start-4 top-4 z-20",
        onClick: tK
      })
    }), u[4] = i) : i = u[4], u[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n.jsx)(tT.LoadingState, {
      name: "media_lightbox",
      children: (0, n.jsx)("div", {
        role: "status",
        "aria-busy": "true",
        "aria-label": tm.fbs._("Loading media", null, {
          hk: "1jO5vq"
        }),
        children: (0, n.jsx)(tA.Skeleton, {
          "aria-hidden": "true",
          className: "size-12 rounded-full"
        })
      })
    }), u[5] = o) : o = u[5], u[6] !== d ? (s = (0, n.jsxs)(tF.DialogPortal, {
      children: [r, (0, n.jsxs)(tF.DialogContentPrimitive, {
        className: "dark inset-0 flex items-center justify-center bg-black",
        onClick: d,
        children: [l, i, o]
      })]
    }), u[6] = d, u[7] = s) : s = u[7], u[8] !== t || u[9] !== s ? (c = (0, n.jsx)(tF.Dialog, {
      open: !0,
      onOpenChange: t,
      children: s
    }), u[8] = t, u[9] = s, u[10] = c) : c = u[10], c
  }

  function tK(e) {
    return e.stopPropagation()
  }

  function tB(e) {
    var t;
    let l, i, o, c, u, d, h = (0, a.c)(17),
      [f, m] = (0, r.useState)(tU);
    return e.isOpen ? "image" !== (t = e.fileCategory) && "video" !== t ? null : (h[0] !== e ? (l = t => {
      let {
        error: a,
        reset: r
      } = t;
      return (0, n.jsx)(tF.Dialog, {
        open: !0,
        onOpenChange: t => !t && e.closeDialog(),
        children: (0, n.jsx)(tF.DialogContent, {
          header: (0, n.jsx)(tF.DialogHeader, {
            className: "sr-only",
            children: (0, n.jsx)(tF.DialogTitle, {
              children: tm.fbs._("Media unavailable", null, {
                hk: "mTCrI"
              })
            })
          }),
          children: (0, n.jsx)(eR.HatchContentErrorFallback, {
            error: a,
            onRetry: () => {
              m(tU), r()
            }
          })
        })
      })
    }, h[0] = e, h[1] = l) : l = h[1], h[2] !== e.filePath || h[3] !== e.isOpen ? (i = [e.filePath, e.isOpen], h[2] = e.filePath, h[3] = e.isOpen, h[4] = i) : i = h[4], h[5] !== e ? (o = (0, n.jsx)(tz, {
      onClose: () => e.closeDialog()
    }), h[5] = e, h[6] = o) : o = h[6], h[7] !== f || h[8] !== e ? (c = (0, n.jsx)(f, {
      ...e
    }), h[7] = f, h[8] = e, h[9] = c) : c = h[9], h[10] !== o || h[11] !== c ? (u = (0, n.jsx)(r.Suspense, {
      fallback: o,
      children: c
    }), h[10] = o, h[11] = c, h[12] = u) : u = h[12], h[13] !== l || h[14] !== i || h[15] !== u ? (d = (0, n.jsx)(s.EctoErrorBoundary, {
      surface: ec.HATCH_SENTRY_SURFACES.MEDIA_VIEWER,
      fallback: l,
      resetKeys: i,
      children: u
    }), h[13] = l, h[14] = i, h[15] = u, h[16] = d) : d = h[16], d) : null
  }
  var tV = e.i(733648),
    tW = e.i(678069),
    tG = e.i(445887),
    tY = e.i(590328),
    tq = e.i(955367),
    t$ = e.i(168538),
    tQ = e.i(44698),
    tX = e.i(337879),
    tZ = e.i(986907),
    tJ = e.i(301970),
    t0 = e.i(767838),
    t1 = e.i(227924),
    t2 = e.i(384158),
    t3 = e.i(758813),
    t8 = e.i(498596),
    t4 = e.i(275274),
    t5 = e.i(848048),
    t6 = e.i(823173),
    t9 = e.i(281539),
    t7 = e.i(502488),
    ne = e.i(661621),
    nt = e.i(667710),
    nn = e.i(346791),
    na = e.i(958089);
  let nr = "hatch:preference:panel-width-",
    nl = {
      dragPreviewWidth: null,
      isCollapsedByDrag: !1
    };

  function ni(e, t) {
    return e.dragPreviewWidth === t.dragPreviewWidth && e.isCollapsedByDrag === t.isCollapsedByDrag
  }

  function no(e) {
    return Math.min(20, Math.max(0, e - 48))
  }

  function ns(e, t) {
    return "rtl" !== window.getComputedStyle(t).direction ? e : "left" === e ? "right" : "left"
  }

  function nc(e, t) {
    ("function" != typeof e.hasPointerCapture || e.hasPointerCapture(t)) && e.releasePointerCapture(t)
  }

  function nu(e, t) {
    localStorage.setItem(nr + e, String(t))
  }
  let nd = {
    isDragging: !1,
    isClosePreview: !1
  };

  function nh({
    clientX: e,
    closeWidth: t,
    physicalSide: n,
    startX: a,
    width: r
  }) {
    return r + ("left" === n ? e - a : a - e) <= t
  }
  var nf = e.i(486868);

  function nm(e) {
    return Math.round(100 * e) / 100
  }

  function np(e, t) {
    return "right" === ("rtl" === t ? "right" === e ? "left" : "right" : e) ? "left" : "right"
  }

  function ng({
    isDragging: e,
    onPointerDown: t
  }) {
    let n = (0, r.useRef)(0),
      a = (0, r.useRef)(null),
      l = (0, r.useRef)(null),
      i = (0, r.useRef)(null),
      o = (0, r.useRef)(null),
      s = (0, r.useRef)(null),
      c = (0, r.useRef)(null),
      u = (0, r.useRef)(null),
      d = (0, r.useRef)(0),
      h = (0, r.useRef)(null),
      f = (0, r.useRef)(null),
      m = (0, r.useRef)(!1),
      p = (0, r.useRef)(!1),
      g = (0, r.useRef)(e);
    g.current = e;
    let [v, C] = (0, r.useState)(!1), y = (0, r.useRef)(!1);
    (0, r.useEffect)(() => {
      let e = () => {
        a.current = null, i.current = null
      };
      return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
        f.current?.(), null != s.current && cancelAnimationFrame(s.current), null != h.current && cancelAnimationFrame(h.current), window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0)
      }
    }, []);
    let _ = (0, r.useCallback)(e => {
        let t = c.current,
          n = u.current,
          r = a.current;
        if (null == t || null == n || null == r) return;
        let l = Math.round(Math.min(Math.max(0, window.innerHeight - n.height), Math.max(0, r + e + 12)) - n.top);
        d.current = l, t.style.translate = `0 ${l}px`
      }, []),
      b = (0, r.useCallback)(() => {
        h.current = null;
        let e = c.current;
        if (null == e) return;
        let t = e.getBoundingClientRect();
        u.current = {
          height: t.height,
          top: t.top - d.current
        }, _(n.current)
      }, [_]),
      S = (0, r.useCallback)(e => {
        if (c.current = e, null != h.current && (cancelAnimationFrame(h.current), h.current = null), null == e) {
          u.current = null, d.current = 0;
          return
        }
        h.current = requestAnimationFrame(b)
      }, [b]),
      x = (0, r.useCallback)(e => {
        let t = l.current,
          n = i.current;
        if (null == t || null == n || n.height <= 0) return;
        let a = Math.min(100, Math.max(0, (e - n.top) / n.height * 100)),
          r = Math.min(35, a, 100 - a);
        t.style.setProperty("--panel-resize-divider-focused-gradient", `linear-gradient(to bottom, var(--fill-divider) ${nm(a-r)}%, var(--border-separator-focused) ${nm(a)}%, var(--fill-divider) ${nm(a+r)}%)`)
      }, []),
      k = (0, r.useCallback)(e => {
        if (o.current = e, null != s.current) return;
        s.current = -1;
        let t = requestAnimationFrame(() => {
          s.current = null;
          let e = o.current;
          o.current = null, null != e && x(e)
        });
        null != s.current && (s.current = t)
      }, [x]),
      E = (0, r.useCallback)(() => {
        null != s.current && (cancelAnimationFrame(s.current), s.current = null), o.current = null, l.current?.style.removeProperty("--panel-resize-divider-focused-gradient")
      }, []),
      A = (0, r.useCallback)(e => {
        let t = e.getBoundingClientRect(),
          n = l.current?.getBoundingClientRect();
        a.current = t.top, i.current = null == n ? t : n
      }, []),
      T = (0, r.useCallback)(() => {
        f.current?.()
      }, []),
      w = (0, r.useCallback)(e => {
        e && (y.current || g.current) || C(e)
      }, []),
      R = (0, r.useCallback)(e => {
        0 !== e.buttons || g.current || (y.current = !1), A(e.currentTarget), k(e.clientY)
      }, [A, k]),
      H = (0, r.useCallback)(e => {
        if ((null == a.current || null == i.current) && A(e.currentTarget), k(e.clientY), p.current) return;
        let t = a.current;
        if (null == t) return;
        let r = Math.round(e.clientY - t);
        n.current = r, _(r)
      }, [_, A, k]),
      P = (0, r.useCallback)(e => {
        0 === e.buttons && (E(), y.current = !1, C(!1))
      }, [E]),
      I = (0, r.useCallback)(e => {
        T(), m.current = !1;
        let t = e.currentTarget.getBoundingClientRect();
        if (e.clientX >= t.left && e.clientX <= t.right && e.clientY >= t.top && e.clientY <= t.bottom) {
          A(e.currentTarget), k(e.clientY);
          return
        }
        E()
      }, [E, A, T, k]),
      N = (0, r.useCallback)(() => {
        T(), m.current = !1, E(), C(!1)
      }, [E, T]),
      j = (0, r.useCallback)(() => {
        m.current || g.current || (y.current = !1)
      }, []),
      D = (0, r.useCallback)(() => {
        m.current || g.current || (y.current = !1), C(!1)
      }, []),
      L = (0, r.useCallback)(e => {
        A(e.currentTarget), k(e.clientY), m.current = !0, y.current = !0, C(!1), t(e), f.current?.(), p.current = !0;
        let n = new AbortController,
          a = () => {
            n.abort(), f.current = null, p.current = !1
          };
        f.current = a, document.addEventListener("pointerup", a, {
          signal: n.signal
        }), document.addEventListener("pointercancel", N, {
          signal: n.signal
        })
      }, [N, A, t, k]);
    return {
      dividerLineRef: l,
      handleBlur: D,
      handleFocus: j,
      handlePointerCancel: N,
      handlePointerDown: L,
      handlePointerEnter: R,
      handlePointerLeave: P,
      handlePointerMove: H,
      handlePointerUp: I,
      handleTooltipContentRef: S,
      handleTooltipOpenChange: w,
      isTooltipOpen: v && !e
    }
  }

  function nv({
    className: e,
    dividerLinePlacement: t = "center",
    dragOffsetPx: a = 0,
    interaction: r,
    isDragging: l,
    onPointerDown: i,
    panelSide: o,
    style: s,
    testId: c,
    tooltipSubtitle: u,
    tooltipTitle: d
  }) {
    let h = (0, tx.useDirection)(),
      f = ng({
        isDragging: l,
        onPointerDown: i
      }),
      m = np(o, h),
      p = "right" === m ? a : -a,
      g = "open" === r ? "left" === o : "right" === o;
    return (0, n.jsxs)("div", {
      "data-hatch-panel-edge-tooltip-side": m,
      "data-hatch-panel-open-dragging": "open" === r && l ? "true" : void 0,
      "data-hatch-panel-close-dragging": "close" === r && l ? "true" : void 0,
      className: (0, tk.cn)("group/panel-edge-handle", l && "will-change-transform", e),
      style: {
        ...s,
        transform: l ? `translateX(${p}px)` : void 0
      },
      children: [(0, n.jsxs)(nf.Tooltip, {
        open: f.isTooltipOpen,
        onOpenChange: f.handleTooltipOpenChange,
        delayDuration: 700,
        children: [(0, n.jsx)(nf.TooltipTrigger, {
          asChild: !0,
          children: (0, n.jsx)("div", {
            "aria-hidden": "true",
            "data-testid": c,
            onPointerDown: f.handlePointerDown,
            onPointerEnter: f.handlePointerEnter,
            onPointerLeave: f.handlePointerLeave,
            onPointerMove: f.handlePointerMove,
            onPointerUp: f.handlePointerUp,
            onPointerCancel: f.handlePointerCancel,
            className: (0, tk.cn)("absolute inset-0 touch-none select-none", g ? "cursor-e-resize rtl:cursor-w-resize" : "cursor-w-resize rtl:cursor-e-resize")
          })
        }), (0, n.jsx)(nf.TooltipContent, {
          ref: f.handleTooltipContentRef,
          side: m,
          align: "start",
          alignOffset: 12,
          sideOffset: 8,
          className: "will-change-transform",
          subtitle: u,
          children: d
        })]
      }), (0, n.jsx)("span", {
        ref: f.dividerLineRef,
        "aria-hidden": "true",
        "data-testid": `${c}-divider-line`,
        className: (0, tk.cn)("pointer-events-none absolute inset-y-0 w-px bg-transparent group-hover/panel-edge-handle:[background-image:var(--panel-resize-divider-focused-gradient)]", "inline-end" === t ? "end-0" : "start-1/2 -translate-x-1/2 rtl:translate-x-1/2", l && "[background-image:var(--panel-resize-divider-focused-gradient)]")
      })]
    })
  }

  function nC(e) {
    let t, r = (0, a.c)(2);
    return r[0] !== e ? (t = (0, n.jsx)(nv, {
      ...e,
      interaction: "open"
    }), r[0] = e, r[1] = t) : t = r[1], t
  }
  let ny = {
    intent: "none",
    isDragging: !1,
    revealWidthPx: 0,
    translateOffsetPx: 0
  };

  function n_(e, t) {
    return e.intent === t.intent && e.isDragging === t.isDragging && e.revealWidthPx === t.revealWidthPx && e.translateOffsetPx === t.translateOffsetPx
  }

  function nb({
    clientX: e,
    hasPinTarget: t,
    openThresholdPx: n,
    physicalSide: a,
    pinThresholdPx: r,
    startX: l,
    width: i
  }) {
    let o = Math.max(0, "left" === a ? e - l : l - e),
      s = Math.min(i, o),
      c = i - s;
    return {
      intent: null != r && t && o >= r ? "pin" : o >= n ? "open" : "none",
      isDragging: !0,
      revealWidthPx: s,
      translateOffsetPx: 0 === c ? 0 : "left" === a ? -c : c
    }
  }

  function nS({
    enabled: e,
    onOpen: t,
    onPin: n,
    onProgressChange: a,
    openThresholdPx: l = 64,
    pinThresholdPx: i,
    side: o,
    width: s
  }) {
    let c = (0, r.useRef)(a);
    c.current = a;
    let {
      scheduleState: u,
      setStateImmediately: d,
      state: h
    } = function(e, t, n) {
      let [a, l] = (0, r.useState)(e), i = (0, r.useRef)(e), o = (0, r.useRef)(null), s = (0, r.useRef)(null), c = (0, r.useRef)(n);
      c.current = n;
      let u = (0, r.useCallback)(() => {
          null != s.current && (window.cancelAnimationFrame(s.current), s.current = null), o.current = null
        }, []),
        d = (0, r.useCallback)(e => {
          u(), t(i.current, e) || (i.current = e, c.current?.(e), l(e))
        }, [t, u]),
        h = (0, r.useCallback)(e => {
          if (t(i.current, e) || (i.current = e, o.current = e, null != s.current)) return;
          s.current = -1;
          let n = window.requestAnimationFrame(() => {
            s.current = null;
            let e = o.current;
            o.current = null, null != e && (c.current?.(e), l(e))
          });
          null != s.current && (s.current = n)
        }, [t]);
      return (0, r.useEffect)(() => u, [u]), {
        scheduleState: h,
        setStateImmediately: d,
        state: a
      }
    }(ny, n_, e => c.current?.(e.revealWidthPx / s)), f = (0, r.useRef)(t), m = (0, r.useRef)(n);
    f.current = t, m.current = n;
    let p = (0, r.useRef)(null),
      g = (0, r.useRef)(null),
      v = (0, r.useCallback)(() => {
        let e = p.current;
        null != e && (nc(e.target, e.pointerId), p.current = null), g.current?.()
      }, []),
      C = (0, r.useCallback)(() => {
        v(), d(ny)
      }, [v, d]);
    (0, r.useEffect)(() => () => {
      v(), c.current?.(0)
    }, [v]), (0, r.useEffect)(() => {
      e || null == p.current || C()
    }, [e, C]);
    let y = (0, r.useCallback)(t => {
      let n = t.pointerType,
        a = null != n && n.length > 0 && !1 === t.isPrimary;
      if (!e || 0 !== t.button || a || null != p.current) return;
      t.preventDefault(), C();
      let r = t.currentTarget;
      r.setPointerCapture(t.pointerId);
      let c = ns(o, r);
      p.current = {
        physicalSide: c,
        pointerId: t.pointerId,
        startX: t.clientX,
        startY: t.clientY,
        target: r,
        movedBeyondClickThreshold: !1
      }, d({
        intent: "none",
        isDragging: !0,
        revealWidthPx: 0,
        translateOffsetPx: "left" === c ? -s : s
      });
      let h = () => {
          g.current = null, document.removeEventListener("pointermove", v), document.removeEventListener("pointerup", _), document.removeEventListener("pointercancel", b)
        },
        v = e => {
          let t = p.current;
          null == t || e.pointerId !== t.pointerId || ((Math.abs(e.clientX - t.startX) > 4 || Math.abs(e.clientY - t.startY) > 4) && (t.movedBeyondClickThreshold = !0), u(nb({
            clientX: e.clientX,
            hasPinTarget: null != m.current,
            openThresholdPx: l,
            physicalSide: t.physicalSide,
            pinThresholdPx: i,
            startX: t.startX,
            width: s
          })))
        },
        y = (e, t) => {
          let n = p.current;
          if (null == n || e.pointerId !== n.pointerId) return;
          let a = Math.abs(e.clientX - n.startX) > 4 || Math.abs(e.clientY - n.startY) > 4,
            r = !n.movedBeyondClickThreshold && !a,
            o = t ? r ? "open" : nb({
              clientX: e.clientX,
              hasPinTarget: null != m.current,
              openThresholdPx: l,
              physicalSide: n.physicalSide,
              pinThresholdPx: i,
              startX: n.startX,
              width: s
            }).intent : "none";
          nc(n.target, n.pointerId), p.current = null, h(), d(ny), t && ("pin" === o ? m.current?.() : "open" === o && f.current(r ? "click" : "drag"))
        },
        _ = e => y(e, !0),
        b = e => y(e, !1);
      g.current = h, document.addEventListener("pointermove", v), document.addEventListener("pointerup", _), document.addEventListener("pointercancel", b)
    }, [e, l, i, C, u, d, o, s]);
    return {
      ...h,
      handlePointerDown: y
    }
  }
  var nx = e.i(635527),
    nk = e.i(572488);
  let nE = (0, et.createClientLogger)("useHatchMeshGradientPreload");

  function nA(e) {
    nE.retainForBugReport("warn", "Mesh gradient preload failed; the backdrop will retry on demand")
  }
  var nT = e.i(696254),
    nw = e.i(858889),
    nR = e.i(864969),
    nH = e.i(665056),
    nP = e.i(998569);
  let nI = (0, r.lazy)(() => e.A(352179).then(e => ({
      default: e.HatchBackgroundApprovalsPanel
    }))),
    nN = (0, r.lazy)(() => e.A(328248).then(e => ({
      default: e.HatchTimeline
    }))),
    nj = (0, r.lazy)(() => e.A(892800).then(e => ({
      default: e.HatchScheduledTasksPanel
    }))),
    nD = (0, r.lazy)(() => e.A(720368).then(e => ({
      default: e.HatchStatusIdentityTab
    }))),
    nL = (0, r.lazy)(() => e.A(644003).then(e => ({
      default: e.HatchStatusComputerTab
    }))),
    nM = (0, r.lazy)(() => e.A(149720).then(e => ({
      default: e.HatchStatusMailTab
    }))),
    nO = (0, r.memo)(function(e) {
      let t, l, i, o, s, c, u, d, h, f = (0, a.c)(23),
        {
          interactive: m,
          name: p,
          onAvatarEditAction: g,
          onRequestSharedAvatarFocus: v,
          showVoiceEditAction: C,
          visible: y
        } = e,
        _ = (0, r.useRef)(null),
        b = (0, r.useRef)(!1),
        S = (0, t7.useHatchAvatarMediaPlaybackGroup)(),
        x = (0, eJ.useAvatarMilestoneVideoUrl)();
      f[0] !== m || f[1] !== v || f[2] !== y ? (t = () => {
        let e = document.querySelector("[data-hatch-avatar-host] [data-hatch-avatar-interaction]"),
          t = _.current?.querySelector("[data-hatch-avatar-interaction]");
        if (y && e?.contains(document.activeElement) && (b.current = !0, m || e.blur()), y && m && b.current) {
          b.current = !1, t?.focus({
            preventScroll: !0
          });
          return
        }
        y && m && queueMicrotask(() => {
          let e = document.querySelector("[data-hatch-avatar-host] [data-hatch-avatar-interaction]"),
            t = _.current?.querySelector("[data-hatch-avatar-interaction]");
          e?.contains(document.activeElement) && t?.focus({
            preventScroll: !0
          })
        }), !y && (b.current || t?.contains(document.activeElement)) && (b.current = !1, v())
      }, l = [m, v, y], f[0] = m, f[1] = v, f[2] = y, f[3] = t, f[4] = l) : (t = f[3], l = f[4]), (0, r.useLayoutEffect)(t, l), f[5] !== v ? (i = () => () => {
        let e = _.current?.querySelector("[data-hatch-avatar-interaction]");
        (b.current || e?.contains(document.activeElement)) && (b.current = !1, v())
      }, o = [v], f[5] = v, f[6] = i, f[7] = o) : (i = f[6], o = f[7]), (0, r.useLayoutEffect)(i, o);
      let k = !y,
        E = y ? "opacity-100" : "opacity-0";
      f[8] !== E ? (s = (0, tk.cn)("flex w-64 flex-col items-center motion-safe:transition-opacity motion-safe:duration-100", E), f[8] = E, f[9] = s) : s = f[9], f[10] === Symbol.for("react.memo_cache_sentinel") ? (c = {
        height: nR.HATCH_STATUS_PANEL_AVATAR_SLOT_HEIGHT_PX
      }, f[10] = c) : c = f[10], f[11] === Symbol.for("react.memo_cache_sentinel") ? (u = tm.fbs._("{productFullName} avatar", [tm.fbs._param("productFullName", tN.PRODUCT_BRAND.fullName)], {
        hk: "1SFlQu"
      }), f[11] = u) : u = f[11];
      let A = null != x,
        T = y && m ? g : void 0;
      return f[12] !== S || f[13] !== p || f[14] !== C || f[15] !== A || f[16] !== T || f[17] !== y ? (d = (0, n.jsx)(nt.HatchAvatarHostContent, {
        animateMilestoneScale: !0,
        ariaLabel: u,
        avatarMediaActive: y,
        avatarMediaPlaybackGroup: S,
        isMilestonePlaying: A,
        name: p,
        onAvatarEditAction: T,
        showVoiceEditAction: C,
        snapFrameGeometry: !0,
        stageHovered: !1,
        transformOrigin: "center top",
        variant: "statusSidebar"
      }), f[12] = S, f[13] = p, f[14] = C, f[15] = A, f[16] = T, f[17] = y, f[18] = d) : d = f[18], f[19] !== d || f[20] !== k || f[21] !== s ? (h = (0, n.jsx)("div", {
        ref: _,
        "data-hatch-status-sidebar-avatar": !0,
        "aria-hidden": k,
        className: s,
        style: c,
        children: d
      }), f[19] = d, f[20] = k, f[21] = s, f[22] = h) : h = f[22], h
    });

  function nF(e) {
    let t, r, l, i = (0, a.c)(5),
      {
        isDragging: o,
        onPointerDown: s
      } = e;
    return i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = tm.fbs._("Bot status", null, {
      hk: "3ptW5M"
    }), r = tm.fbs._("Click or drag to close", null, {
      hk: "vPhDL"
    }), i[0] = t, i[1] = r) : (t = i[0], r = i[1]), i[2] !== o || i[3] !== s ? (l = (0, n.jsx)(nv, {
      interaction: "close",
      isDragging: o,
      onPointerDown: s,
      panelSide: "right",
      testId: "hatch-status-panel-close-drag-handle",
      tooltipTitle: t,
      tooltipSubtitle: r,
      className: "absolute inset-y-0 start-0 z-20 -ms-2 w-4"
    }), i[2] = o, i[3] = s, i[4] = l) : l = i[4], l
  }
  let nU = {
      activity: 0,
      approvals: 1,
      computer: 2,
      upcoming: 3,
      identity: 4,
      agents: 5,
      mail: 6
    },
    nz = {
      approvals: t9.HatchClickEvent.STATUS_APPROVALS_TAB_CLICK,
      activity: t9.HatchClickEvent.STATUS_ACTIVITY_TAB_CLICK,
      agents: t9.HatchClickEvent.STATUS_AGENTS_TAB_CLICK,
      computer: t9.HatchClickEvent.STATUS_COMPUTER_TAB_CLICK,
      upcoming: t9.HatchClickEvent.STATUS_UPCOMING_TAB_CLICK,
      identity: t9.HatchClickEvent.STATUS_IDENTITY_TAB_CLICK,
      mail: t9.HatchClickEvent.STATUS_MAIL_TAB_CLICK
    };

  function nK({
    animateVisibilityToggle: e = !1,
    chatSurfaceVisible: t,
    contentEnabled: l = !0,
    onClosePreviewChange: i,
    onOpenDragProgressChange: o,
    presentation: c
  }) {
    let u, h, f, p;
    f = (0, a.c)(3), p = !0 === (0, tS.useReducedMotion)(), f[0] !== p ? (u = () => {
      if (p || (0, nk.isMeshGradientRequested)()) return;
      let e = !1,
        t = (0, nx.requestIdleCallbackAfterLoad)(() => {
          e || (0, nk.isMeshGradientRequested)() || (0, nk.loadMeshGradient)().catch(nA)
        });
      return () => {
        e = !0, t()
      }
    }, h = [p], f[0] = p, f[1] = u, f[2] = h) : (u = f[1], h = f[2]), (0, r.useEffect)(u, h);
    let g = tm.fbs._("Activity", null, {
        hk: "1LzVll"
      }),
      v = tm.fbs._("Approvals", null, {
        hk: "1N274k"
      }),
      y = tm.fbs._("Computer", null, {
        hk: "3MCQ4w"
      }),
      _ = tm.fbs._("Upcoming", null, {
        hk: "1NVPse"
      }),
      b = tm.fbs._("Identity", null, {
        hk: "2FG2ir"
      }),
      S = tm.fbs._("Mail", null, {
        hk: "3pbNI6"
      }),
      x = (0, m.useHatchEmailEnabled)(),
      k = (0, m.useHatchComputerTabEnabled)(),
      E = (0, m.useHatchVoiceCallingEnabled)(),
      A = (0, r.useMemo)(() => {
        let e = [{
          value: "activity",
          ariaLabel: g,
          icon: t8.default,
          iconSize: 20
        }, {
          value: "approvals",
          ariaLabel: v,
          icon: t1.default,
          iconSize: 20
        }];
        return k && e.push({
          value: "computer",
          ariaLabel: y,
          icon: t4.default,
          iconSize: 20
        }), e.push({
          value: "upcoming",
          ariaLabel: _,
          icon: t2.default,
          iconSize: 20
        }, {
          value: "identity",
          ariaLabel: b,
          icon: t3.default,
          iconSize: 20
        }), x && e.push({
          value: "mail",
          ariaLabel: S,
          icon: t0.default,
          iconSize: 20
        }), e
      }, [g, v, k, y, x, b, S, _]),
      {
        isOpen: T,
        dismissPanel: w,
        togglePanel: R,
        activeTab: H,
        setActiveTab: P
      } = (0, nn.useHatchStatusPanel)(),
      I = (0, tX.useLatchedTrue)(k && T && "computer" === H);
    (0, na.useHatchComputerSubscription)({
      enabled: I
    });
    let N = (0, d.useIsMobileBreakpoint)(),
      j = "modal" === c,
      D = T && t,
      L = N ? T : D,
      M = (0, t5.useInteractionLoggerWithLazyData)(),
      O = (0, r.useMemo)(() => ({
        eventName: t9.HatchClickEvent.STATUS_CLOSE_PANEL,
        actionTarget: "close_button",
        actionType: "dismiss",
        metadata: {
          surface: "status",
          subsurface: "panel"
        }
      }), []),
      {
        ref: F,
        onClick: U
      } = (0, t5.useTrackedClickRef)(O),
      {
        ref: z
      } = (0, t5.useTrackedImpressionRef)({
        eventName: t6.HatchImpressionEvent.STATUS_PANEL_IMPRESSION,
        actionTarget: "status_panel",
        metadata: {
          surface: "status",
          screen: "status_panel"
        }
      }, {
        enabled: L,
        threshold: "50%"
      }),
      K = (0, nT.useIdentityName)(),
      B = tm.fbs._("Change your avatar to", null, {
        hk: "2rg2PE"
      }),
      V = tm.fbs._("Change your name to", null, {
        hk: "2AVruP"
      }),
      W = tm.fbs._("Change your voice to", null, {
        hk: "1Q4gjF"
      }),
      G = (0, t7.useOptionalHatchAvatarController)(),
      Y = G?.requestStage,
      q = (0, r.useRef)("activity"),
      $ = (0, r.useRef)(null),
      Q = (0, r.useCallback)(() => {
        N || Y?.("chat-nav")
      }, [N, Y]),
      X = (0, r.useCallback)(() => {
        Q(), w()
      }, [w, Q]),
      Z = (0, r.useCallback)(e => {
        let t = (0, tZ.startManualInteraction)(tJ.EctoInteractionTracePolicy.STATUS_AVATAR_EDIT, {
          debugName: "status-avatar-edit"
        });
        t.annotate({
          string: {
            avatar_edit_action: e
          }
        });
        let n = "change_avatar" === e ? B : "edit_name" === e ? V : W;
        C.setComposerInputValue(`${String(n)} `), t.markerPoint("composer_prefill_set"), j && (X(), t.markerPoint("status_modal_dismissed")), window.dispatchEvent(new Event("hatch-focus-composer")), t.markerPoint("composer_focus_requested"), (0, tZ.endManualTrace)(t, "SUCCESS")
      }, [B, V, W, X, j]);
    (0, r.useEffect)(() => {
      if (!D || N || !j) return;
      let e = e => {
        if (e.defaultPrevented || "Escape" !== e.key) return;
        let t = e.target,
          n = t instanceof Node ? t : null,
          a = t instanceof Element ? t : null,
          r = null == n || n === document || n === document.body || n === document.documentElement,
          l = a?.closest('[data-hatch-avatar-display-stage="status-modal"]') != null;
        if (r || l || null == $.current || $.current.contains(n)) {
          if (e.preventDefault(), e.stopPropagation(), l) {
            let e = a?.closest('[data-hatch-avatar-display-stage="status-modal"]');
            e?.blur()
          }
          X()
        }
      };
      return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, [X, D, N, j]);
    let J = nU[H] > nU[q.current] ? 1 : -1,
      ee = (0, r.useCallback)(e => {
        M({
          eventName: nz[e],
          actionTarget: `status_tab_${e}`,
          actionType: "click",
          metadata: {
            surface: "status",
            subsurface: "tab_switcher"
          }
        }), q.current = H, P(e)
      }, [H, M, P]),
      et = (0, r.useCallback)(() => {
        U(), X()
      }, [X, U]),
      en = (0, r.useCallback)(() => {
        M({
          eventName: t9.HatchClickEvent.STATUS_CLOSE_PANEL,
          actionTarget: "status_panel_close_drag",
          actionType: "dismiss",
          metadata: {
            surface: "status",
            subsurface: "panel"
          }
        }), X()
      }, [X, M]),
      ea = (0, r.useCallback)(() => {
        M({
          eventName: t9.HatchClickEvent.STATUS_CLOSE_PANEL,
          actionTarget: "status_panel_close_divider",
          actionType: "click",
          metadata: {
            surface: "status",
            subsurface: "panel"
          }
        }), X()
      }, [X, M]),
      er = (0, r.useCallback)(e => {
        M({
          eventName: t9.HatchClickEvent.STATUS_TOGGLE_CLICK,
          actionTarget: "click" === e ? "status_panel_open_divider" : "status_panel_open_drag",
          actionType: e,
          metadata: {
            surface: "status",
            subsurface: "panel"
          }
        }), R()
      }, [M, R]),
      el = "side-panel" === c,
      ei = el && !N,
      eo = (0, r.useRef)(null),
      es = (0, r.useRef)(null),
      eu = (0, r.useRef)(!1),
      ed = function({
        isOpen: e,
        onClickClose: t,
        onClose: n,
        side: a,
        width: l
      }) {
        let [i, o] = (0, r.useState)(nd), s = (0, r.useRef)(n);
        s.current = n;
        let c = (0, r.useRef)(t);
        c.current = t;
        let u = (0, r.useRef)(null),
          d = (0, r.useRef)(null),
          h = (0, r.useRef)(null),
          f = (0, r.useRef)(e);
        (0, r.useLayoutEffect)(() => {
          let t = f.current;
          (f.current = e, e) ? !t && e && null == d.current && i !== nd && o(nd): h.current?.(!0)
        }, [e, i]), (0, r.useLayoutEffect)(() => () => {
          null != u.current && (cancelAnimationFrame(u.current), u.current = null), h.current?.(!1)
        }, []);
        let m = no(l),
          p = (0, r.useCallback)(t => {
            let n = t.pointerType,
              r = null != n && n.length > 0 && !1 === t.isPrimary;
            if (!e || 0 !== t.button || r || null != d.current) return;
            t.preventDefault(), null != u.current && (cancelAnimationFrame(u.current), u.current = null);
            let i = t.currentTarget;
            i.setPointerCapture(t.pointerId), d.current = {
              startX: t.clientX,
              startY: t.clientY,
              pointerId: t.pointerId,
              target: i,
              physicalSide: ns(a, i),
              isClosePreview: !1,
              movedBeyondClickThreshold: !1
            }, o({
              isDragging: !0,
              isClosePreview: !1
            });
            let f = () => {
                h.current = null, document.removeEventListener("pointermove", g), document.removeEventListener("pointerup", C), document.removeEventListener("pointercancel", v)
              },
              p = e => {
                let t = d.current;
                null != t && (nc(t.target, t.pointerId), d.current = null, f(), e && o(nd))
              },
              g = e => {
                let t = d.current;
                if (null == t || e.pointerId !== t.pointerId) return;
                (Math.abs(e.clientX - t.startX) > 4 || Math.abs(e.clientY - t.startY) > 4) && (t.movedBeyondClickThreshold = !0);
                let n = nh({
                  clientX: e.clientX,
                  closeWidth: m,
                  physicalSide: t.physicalSide,
                  startX: t.startX,
                  width: l
                });
                n !== t.isClosePreview && (t.isClosePreview = n, o({
                  isDragging: !0,
                  isClosePreview: n
                }))
              },
              v = e => {
                let t = d.current;
                null != t && e.pointerId === t.pointerId && p(!0)
              },
              C = e => {
                let t = d.current;
                if (null == t || e.pointerId !== t.pointerId) return;
                nc(t.target, t.pointerId), d.current = null;
                let n = Math.abs(e.clientX - t.startX) > 4 || Math.abs(e.clientY - t.startY) > 4;
                if (!t.movedBeyondClickThreshold && !n && null != c.current) {
                  o(nd), f(), c.current();
                  return
                }
                if (nh({
                    clientX: e.clientX,
                    closeWidth: m,
                    physicalSide: t.physicalSide,
                    startX: t.startX,
                    width: l
                  })) {
                  o({
                    isDragging: !1,
                    isClosePreview: !0
                  }), u.current = -1;
                  let e = requestAnimationFrame(() => {
                    u.current = null, s.current()
                  });
                  null != u.current && (u.current = e)
                } else o(nd);
                f()
              };
            h.current = p, document.addEventListener("pointermove", g), document.addEventListener("pointerup", C), document.addEventListener("pointercancel", v)
          }, [m, e, a, l]);
        return {
          ...i,
          handlePointerDown: p
        }
      }({
        isOpen: ei && D,
        onClickClose: ea,
        onClose: en,
        side: "right",
        width: nR.HATCH_STATUS_PANEL_WIDTH_PX
      }),
      eh = ed.handlePointerDown,
      ef = (0, r.useCallback)(e => {
        let t = document.activeElement;
        es.current = t instanceof HTMLElement && eo.current?.contains(t) ? t : null, eu.current = !1, eh(e)
      }, [eh]);
    (0, r.useLayoutEffect)(() => {
      if (ed.isClosePreview) {
        eu.current = !0;
        return
      }
      eu.current && D && es.current?.focus({
        preventScroll: !0
      }), (!ed.isDragging || eu.current) && (es.current = null, eu.current = !1)
    }, [ed.isClosePreview, ed.isDragging, D]);
    let em = nS({
        enabled: ei && t && !T,
        onOpen: er,
        onProgressChange: o,
        side: "right",
        width: nR.HATCH_STATUS_PANEL_WIDTH_PX
      }),
      ep = em.isDragging ? em.revealWidthPx / nR.HATCH_STATUS_PANEL_WIDTH_PX : ed.isClosePreview ? 0 : +!!D,
      eg = el && t && ep >= .8,
      ev = (0, t7.useSuppressHatchAvatarHost)(eg);
    (0, t7.useRequestHatchAvatarStage)("status-modal", j && D && !N);
    let eC = ei && D && ed.isClosePreview;
    (0, r.useLayoutEffect)(() => {
      null != i && i(eC)
    }, [eC, i]), (0, r.useLayoutEffect)(() => () => {
      i?.(!1)
    }, [i]);
    let ey = (0, r.useCallback)(e => {
        e.target === e.currentTarget && (M({
          eventName: t9.HatchClickEvent.STATUS_PANEL_BACKDROP_DISMISS,
          actionTarget: "status_panel_backdrop",
          actionType: "click",
          metadata: {
            surface: "status",
            subsurface: "backdrop"
          }
        }), X())
      }, [X, M]),
      e_ = (0, r.useMemo)(() => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
          className: "rounded-full opacity-0",
          style: {
            height: nR.HATCH_STATUS_PANEL_AVATAR_SIZE_PX,
            width: nR.HATCH_STATUS_PANEL_AVATAR_SIZE_PX
          }
        }), (0, n.jsx)("div", {
          className: "mt-2 h-12 w-56 opacity-0"
        })]
      }), []),
      eb = (0, r.useMemo)(() => (0, n.jsx)("div", {
        className: "flex w-64 flex-col items-center",
        style: {
          height: nR.HATCH_STATUS_PANEL_AVATAR_SLOT_HEIGHT_PX
        },
        children: e_
      }), [e_]),
      eS = (0, r.useMemo)(() => (0, n.jsx)(nO, {
        interactive: D,
        name: K,
        onAvatarEditAction: Z,
        onRequestSharedAvatarFocus: ev,
        showVoiceEditAction: E,
        visible: eg
      }), [D, Z, K, ev, E, eg]),
      ex = (0, n.jsx)(ne.HatchAvatarStage, {
        enabled: D,
        className: "pointer-events-none absolute start-1/2 z-0 flex w-64 -translate-x-1/2 flex-col items-center",
        growthOrigin: "top",
        onAvatarEditAction: Z,
        showVoiceEditAction: E,
        priority: 400,
        style: {
          height: nR.HATCH_STATUS_PANEL_AVATAR_SLOT_HEIGHT_PX,
          top: 28
        },
        stageId: "status-modal",
        transitionMode: e ? "animated" : "instant",
        variant: "statusSidebar",
        children: e_
      }),
      ek = (0, r.useMemo)(() => (0, n.jsxs)(n.Fragment, {
        children: [!N && (0, n.jsx)(tY.Flexbox, {
          direction: "column",
          alignItems: "center",
          className: j ? "shrink-0 px-4 pt-6 pb-8" : "shrink-0 px-4 pb-11",
          style: j ? void 0 : {
            paddingTop: nR.HATCH_STATUS_PANEL_HEADER_HEIGHT_PX
          },
          children: (0, n.jsx)("div", {
            className: "relative flex flex-col items-center",
            children: j ? eb : eS
          })
        }), (0, n.jsx)("div", {
          className: "px-4 pb-2",
          children: (0, n.jsx)(tq.SegmentedToggle, {
            containerClassName: "bg-fill-secondary",
            options: A,
            value: H,
            onChange: ee,
            fullWidth: !0,
            iconOnly: !0
          })
        }), (0, n.jsx)(t$.default, {
          vertical: !0,
          horizontal: !1,
          hideScrollbar: "mail" === H,
          className: "min-h-0 flex-1",
          children: (0, n.jsx)(tW.AnimatePresence, {
            initial: !1,
            custom: J,
            mode: "popLayout",
            children: (0, n.jsxs)(tb.motion.div, {
              custom: J,
              variants: {
                enter: e => ({
                  x: `${100*e}%`,
                  opacity: 0
                }),
                center: {
                  x: 0,
                  opacity: 1
                },
                exit: e => ({
                  x: `${-100*e}%`,
                  opacity: 0
                })
              },
              initial: "enter",
              animate: "center",
              exit: "exit",
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 35,
                mass: .8
              },
              children: ["approvals" === H && (0, n.jsx)("div", {
                className: "pb-3",
                children: (0, n.jsx)(s.EctoErrorBoundary, {
                  surface: ec.HATCH_SENTRY_SURFACES.STATUS_APPROVALS,
                  fallback: ({
                    error: e,
                    reset: t
                  }) => (0, n.jsx)(eR.HatchContentErrorFallback, {
                    error: e,
                    onRetry: t
                  }),
                  children: l ? (0, n.jsx)(r.Suspense, {
                    fallback: (0, n.jsx)(nw.HatchStatusPanelTabSkeleton, {}),
                    children: (0, n.jsx)(nI, {})
                  }) : (0, n.jsx)(nw.HatchStatusPanelTabSkeleton, {})
                })
              }), "activity" === H && (0, n.jsx)("div", {
                className: "pb-3",
                children: (0, n.jsx)(s.EctoErrorBoundary, {
                  surface: ec.HATCH_SENTRY_SURFACES.STATUS_TIMELINE,
                  fallback: ({
                    error: e,
                    reset: t
                  }) => (0, n.jsx)(eR.HatchContentErrorFallback, {
                    error: e,
                    onRetry: t
                  }),
                  children: l ? (0, n.jsx)(r.Suspense, {
                    fallback: (0, n.jsx)(nw.HatchStatusPanelActivityLoadingState, {}),
                    children: (0, n.jsx)(nN, {})
                  }) : (0, n.jsx)(nw.HatchStatusPanelActivityLoadingState, {})
                })
              }), "computer" === H && k && (0, n.jsx)(s.EctoErrorBoundary, {
                surface: ec.HATCH_SENTRY_SURFACES.STATUS_COMPUTER,
                fallback: ({
                  error: e,
                  reset: t
                }) => (0, n.jsx)(eR.HatchContentErrorFallback, {
                  error: e,
                  onRetry: t
                }),
                children: l ? (0, n.jsx)(r.Suspense, {
                  fallback: (0, n.jsx)(nw.HatchStatusPanelTabSkeleton, {}),
                  children: (0, n.jsx)(nL, {})
                }) : (0, n.jsx)(nw.HatchStatusPanelTabSkeleton, {})
              }), "upcoming" === H && (0, n.jsx)("div", {
                className: "pb-3",
                children: (0, n.jsx)(s.EctoErrorBoundary, {
                  surface: ec.HATCH_SENTRY_SURFACES.STATUS_UPCOMING,
                  fallback: ({
                    error: e,
                    reset: t
                  }) => (0, n.jsx)(eR.HatchContentErrorFallback, {
                    error: e,
                    onRetry: t
                  }),
                  children: l ? (0, n.jsx)(r.Suspense, {
                    fallback: (0, n.jsx)(nw.HatchStatusPanelTabSkeleton, {}),
                    children: (0, n.jsx)(nj, {})
                  }) : (0, n.jsx)(nw.HatchStatusPanelTabSkeleton, {})
                })
              }), "identity" === H && (0, n.jsx)(s.EctoErrorBoundary, {
                surface: ec.HATCH_SENTRY_SURFACES.STATUS_IDENTITY,
                fallback: ({
                  error: e,
                  reset: t
                }) => (0, n.jsx)(eR.HatchContentErrorFallback, {
                  error: e,
                  onRetry: t
                }),
                children: l ? (0, n.jsx)(r.Suspense, {
                  fallback: (0, n.jsx)(nw.HatchStatusPanelTabSkeleton, {}),
                  children: (0, n.jsx)(nD, {})
                }) : (0, n.jsx)(nw.HatchStatusPanelTabSkeleton, {})
              }), "mail" === H && x && (0, n.jsx)(s.EctoErrorBoundary, {
                surface: ec.HATCH_SENTRY_SURFACES.EMAIL,
                fallback: ({
                  error: e,
                  reset: t
                }) => (0, n.jsx)(eR.HatchContentErrorFallback, {
                  error: e,
                  onRetry: t
                }),
                children: l ? (0, n.jsx)(r.Suspense, {
                  fallback: (0, n.jsx)(nw.HatchStatusPanelTabSkeleton, {}),
                  children: (0, n.jsx)(nM, {})
                }) : (0, n.jsx)(nw.HatchStatusPanelTabSkeleton, {})
              })]
            }, H)
          })
        })]
      }), [H, k, l, J, x, ee, N, j, eb, eS, A]),
      eE = (e, t) => {
        let a = "side-panel" === t;
        return (0, n.jsxs)(n.Fragment, {
          children: [e, a && D && (0, n.jsx)(nF, {
            isDragging: ed.isDragging,
            onPointerDown: ef
          }), (0, n.jsxs)("div", {
            "data-hatch-status-panel-card": !0,
            "data-hatch-toast-pane": "status",
            className: a ? "border-fill-divider relative flex min-h-0 flex-1 flex-col overflow-hidden border-s" : "squircle-16 bg-fill-primary shadow-blur-elevation-03 relative flex min-h-0 flex-1 flex-col overflow-hidden",
            style: a ? {
              backgroundColor: "var(--hatch-panel-bg, var(--color-bg-primary))"
            } : void 0,
            children: [(0, n.jsx)("div", {
              "data-testid": "hatch-status-panel-close-toolbar",
              className: "absolute end-3 top-0 z-10 flex items-center",
              style: {
                height: nH.HATCH_STICKY_HEADER_HEIGHT
              },
              children: (0, n.jsx)(tO.IconButton, {
                ref: F,
                icon: tM.default,
                label: tm.fbs._("Close panel", null, {
                  hk: "1rkh1Z"
                }),
                size: "36",
                variant: "borderless",
                "data-testid": "hatch-status-panel-close",
                className: "text-text-secondary",
                onClick: et
              })
            }), (0, n.jsx)("div", {
              ref: z,
              className: a ? "relative flex min-h-0 min-w-[312px] flex-1 flex-col" : "squircle-16 relative flex min-h-0 min-w-[312px] flex-1 flex-col",
              children: ek
            })]
          })]
        })
      };
    return N ? (0, n.jsx)(tQ.Sheet, {
      open: T,
      onOpenChange: e => !e && w(),
      children: (0, n.jsxs)(tQ.SheetContent, {
        side: "bottom",
        showCloseButton: !1,
        overlayClassName: "z-[24]",
        className: "flex max-h-[85dvh] flex-col gap-0 pb-[calc(env(safe-area-inset-bottom,0px)+var(--spacing-8))]",
        children: [(0, n.jsx)(tQ.SheetHeader, {
          className: "sr-only",
          children: (0, n.jsx)(tQ.SheetTitle, {
            children: tm.fbt._("Status", null, {
              hk: "1higD6"
            })
          })
        }), (0, n.jsx)(t$.default, {
          ref: z,
          vertical: !0,
          horizontal: !1,
          className: "flex-1",
          children: ek
        })]
      })
    }) : "side-panel" === c ? (0, n.jsxs)(n.Fragment, {
      children: [t && !T && (0, n.jsx)(nC, {
        panelSide: "right",
        dragOffsetPx: em.revealWidthPx,
        isDragging: em.isDragging,
        onPointerDown: em.handlePointerDown,
        tooltipTitle: tm.fbs._("Bot status", null, {
          hk: "1hYcBw"
        }),
        tooltipSubtitle: tm.fbs._("Click or drag to open", null, {
          hk: "31InZe"
        }),
        testId: "hatch-status-panel-open-drag-handle",
        className: "absolute inset-y-0 end-0 z-20 -me-2 w-4"
      }), (0, n.jsx)(nB, {
        surfaceRef: eo,
        isClosePreview: ed.isClosePreview,
        isCloseDragging: ed.isDragging,
        isOpen: D,
        isOpenDragging: em.isDragging,
        openDragProgress: ep,
        openDragRevealWidthPx: em.revealWidthPx,
        openDragOffsetPx: em.translateOffsetPx,
        openDragIntent: em.intent,
        children: eE(null, "side-panel")
      })]
    }) : (0, n.jsx)(nV, {
      animateVisibilityToggle: e,
      isOpen: D,
      panelRef: $,
      onBackdropPointerDown: ey,
      children: eE(ex, "modal")
    })
  }

  function nB(e) {
    let t, r, l, i, o, s, c = (0, a.c)(22),
      {
        children: u,
        isCloseDragging: d,
        isClosePreview: h,
        isOpen: f,
        isOpenDragging: m,
        openDragIntent: p,
        openDragOffsetPx: g,
        openDragProgress: v,
        openDragRevealWidthPx: C,
        surfaceRef: y
      } = e,
      _ = (0, tx.useDirection)(),
      b = m ? g : h ? "rtl" === _ ? -nR.HATCH_STATUS_PANEL_WIDTH_PX : nR.HATCH_STATUS_PANEL_WIDTH_PX : 0;
    if (!(f || d || m)) return null;
    let S = h ? "true" : void 0,
      x = m ? p : void 0,
      k = h ? 0 : m ? C : nR.HATCH_STATUS_PANEL_WIDTH_PX;
    c[0] !== k ? (t = {
      width: k
    }, c[0] = k, c[1] = t) : t = c[1];
    let E = m ? "will-change-[transform,opacity]" : d && "will-change-transform";
    c[2] !== E ? (r = (0, tk.cn)("absolute inset-y-0 end-0 flex h-full flex-col", E), c[2] = E, c[3] = r) : r = c[3];
    let A = 0 === b ? void 0 : `translateX(${b}px)`;
    c[4] !== m || c[5] !== v ? (l = m ? (0, nP.getHatchPanelOpenDragOpacity)(v) : void 0, c[4] = m, c[5] = v, c[6] = l) : l = c[6], c[7] !== A || c[8] !== l ? (i = {
      width: nR.HATCH_STATUS_PANEL_WIDTH_PX,
      transform: A,
      opacity: l
    }, c[7] = A, c[8] = l, c[9] = i) : i = c[9];
    let T = !f || !!h || void 0,
      w = !f || !!h || void 0;
    return c[10] !== u || c[11] !== T || c[12] !== w || c[13] !== r || c[14] !== i ? (o = (0, n.jsx)("div", {
      "data-testid": "hatch-status-panel-sliding-surface",
      className: r,
      style: i,
      inert: T,
      "aria-hidden": w,
      children: u
    }), c[10] = u, c[11] = T, c[12] = w, c[13] = r, c[14] = i, c[15] = o) : o = c[15], c[16] !== y || c[17] !== S || c[18] !== o || c[19] !== x || c[20] !== t ? (s = (0, n.jsx)("div", {
      ref: y,
      "data-hatch-status-panel-surface": !0,
      "data-hatch-status-panel-presentation": "side-panel",
      "data-hatch-status-panel-close-preview": S,
      "data-hatch-status-panel-open-preview": x,
      "data-hatch-status-panel-visibility-animation": "disabled",
      className: "pointer-events-auto relative z-10 flex min-w-0 shrink-0 items-stretch justify-start self-stretch",
      style: t,
      children: o
    }), c[16] = y, c[17] = S, c[18] = o, c[19] = x, c[20] = t, c[21] = s) : s = c[21], s
  }

  function nV(e) {
    let t, r, l, i, o = (0, a.c)(14),
      {
        animateVisibilityToggle: s,
        children: c,
        isOpen: u,
        onBackdropPointerDown: d,
        panelRef: h
      } = e,
      f = u ? "true" : void 0,
      m = s ? "enabled" : "disabled";
    return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
      "--status-panel-modal-bottom-gutter": "16px",
      "--status-panel-modal-top-gutter": "16px"
    }, o[0] = t) : t = o[0], o[1] !== s || o[2] !== c || o[3] !== u || o[4] !== d || o[5] !== h ? (r = u && [(0, n.jsx)(nY, {
      animateVisibilityToggle: s,
      onPointerDown: d
    }, "status-modal-backdrop"), (0, n.jsx)(tb.motion.div, {
      ref: h,
      custom: s,
      className: "pointer-events-auto relative flex h-full max-h-full w-[min(460px,100%)] flex-col px-2",
      variants: {
        enter: nG,
        exit: nW,
        visible: {
          y: 0,
          scale: 1,
          opacity: 1
        }
      },
      initial: !!s && "enter",
      animate: "visible",
      exit: "exit",
      transition: nP.HATCH_PANEL_ENTER_TRANSITION,
      children: c
    }, "status-modal-card")], o[1] = s, o[2] = c, o[3] = u, o[4] = d, o[5] = h, o[6] = r) : r = o[6], o[7] !== s || o[8] !== r ? (l = (0, n.jsx)(tW.AnimatePresence, {
      custom: s,
      initial: s,
      children: r
    }), o[7] = s, o[8] = r, o[9] = l) : l = o[9], o[10] !== f || o[11] !== m || o[12] !== l ? (i = (0, n.jsx)("div", {
      "data-hatch-status-panel-surface": !0,
      "data-hatch-status-panel-modal-open": f,
      "data-hatch-status-panel-presentation": "modal",
      "data-hatch-status-panel-visibility-animation": m,
      className: "pointer-events-none absolute inset-0 z-[24] flex items-start justify-center overflow-hidden pt-[var(--status-panel-modal-top-gutter)] pb-[var(--status-panel-modal-bottom-gutter)]",
      style: t,
      children: l
    }), o[10] = f, o[11] = m, o[12] = l, o[13] = i) : i = o[13], i
  }

  function nW(e) {
    return {
      y: 8 * !!e,
      scale: e ? .98 : 1,
      opacity: +!e,
      transition: e ? nP.HATCH_PANEL_EXIT_TRANSITION : {
        duration: 0
      }
    }
  }

  function nG(e) {
    return {
      y: 12 * !!e,
      scale: e ? .98 : 1,
      opacity: +!e,
      transition: e ? nP.HATCH_PANEL_ENTER_TRANSITION : {
        duration: 0
      }
    }
  }

  function nY(e) {
    let t, r, l = (0, a.c)(6),
      {
        animateVisibilityToggle: i,
        onPointerDown: o
      } = e,
      s = (0, tG.useIsPresent)() ? "open" : "closed";
    l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
      hidden: nq,
      visible: {
        opacity: 1
      }
    }, l[0] = t) : t = l[0];
    let c = !!i && "hidden";
    return l[1] !== i || l[2] !== o || l[3] !== s || l[4] !== c ? (r = (0, n.jsx)(tb.motion.div, {
      custom: i,
      "data-hatch-status-panel-backdrop": !0,
      "data-state": s,
      className: "pointer-events-auto absolute inset-0",
      variants: t,
      initial: c,
      animate: "visible",
      exit: "hidden",
      transition: nP.HATCH_PANEL_ENTER_TRANSITION,
      onPointerDown: o
    }), l[1] = i, l[2] = o, l[3] = s, l[4] = c, l[5] = r) : r = l[5], r
  }

  function nq(e) {
    return {
      opacity: +!e,
      transition: e ? nP.HATCH_PANEL_EXIT_TRANSITION : {
        duration: 0
      }
    }
  }
  var n$ = e.i(218105);

  function nQ({
    closeOnPresentationChangeKey: e,
    closePanel: t,
    isOpen: n
  }) {
    let a = (0, r.useRef)(e),
      l = null != a.current && a.current !== e;
    return (0, r.useLayoutEffect)(() => {
      let r = a.current;
      a.current = e, null != r && r !== e && n && t()
    }, [e, t, n]), n && !l
  }

  function nX(e) {
    let t, l, i, o, s, c, u, d, h, f, m, p, g, v, y, _, b = (0, a.c)(45),
      {
        children: S,
        closeOnPresentationChangeKey: x,
        navigateToFile: k,
        onOpenChange: E,
        openToApprovalsRequestKey: A,
        openToScheduledTaskId: T,
        open: w,
        openFileInDialog: R
      } = e,
      [H, P] = (0, r.useState)(!1),
      I = w ?? H,
      [N, j] = (0, r.useState)("activity");
    b[0] !== w || b[1] !== E ? (t = (e, t) => {
      void 0 === w && P(e), E?.(e, t)
    }, b[0] = w, b[1] = E, b[2] = t) : t = b[2];
    let D = t;
    b[3] !== D ? (l = () => D(!0, "system"), b[3] = D, b[4] = l) : l = b[4];
    let L = l;
    b[5] !== D ? (i = () => D(!1, "system"), b[5] = D, b[6] = i) : i = b[6];
    let M = i;
    b[7] !== D ? (o = () => D(!1, "user"), b[7] = D, b[8] = o) : o = b[8];
    let O = o;
    b[9] !== x || b[10] !== M || b[11] !== I ? (s = {
      closeOnPresentationChangeKey: x,
      closePanel: M,
      isOpen: I
    }, b[9] = x, b[10] = M, b[11] = I, b[12] = s) : s = b[12];
    let F = nQ(s);
    b[13] !== I || b[14] !== D ? (c = () => {
      I ? D(!1, "user") : D(!0, "user")
    }, b[13] = I, b[14] = D, b[15] = c) : c = b[15];
    let U = c;
    b[16] !== D ? (u = () => {
      j("approvals"), D(!0, "system")
    }, b[16] = D, b[17] = u) : u = b[17];
    let z = u;
    b[18] !== D ? (d = () => {
      j("activity"), D(!0, "system")
    }, b[18] = D, b[19] = d) : d = b[19];
    let K = d,
      B = (0, r.useRef)(null);
    b[20] !== z || b[21] !== A ? (f = () => {
      if (null == A) {
        B.current = null;
        return
      }
      B.current !== A && (B.current = A, z())
    }, h = [z, A], b[20] = z, b[21] = A, b[22] = h, b[23] = f) : (h = b[22], f = b[23]), (0, r.useEffect)(f, h);
    let V = (0, r.useRef)(null);
    b[24] !== T || b[25] !== D ? (m = () => {
      if (null == T) {
        V.current = null;
        return
      }
      V.current !== T && (V.current = T, C.setSelectedJobId(T), j("upcoming"), D(!0, "system"))
    }, p = [T, D], b[24] = T, b[25] = D, b[26] = m, b[27] = p) : (m = b[26], p = b[27]), (0, r.useEffect)(m, p), b[28] !== z ? (g = () => {
      let e = () => z();
      return window.addEventListener(n$.HATCH_OPEN_APPROVALS_PANEL_EVENT, e), () => {
        window.removeEventListener(n$.HATCH_OPEN_APPROVALS_PANEL_EVENT, e)
      }
    }, v = [z], b[28] = z, b[29] = g, b[30] = v) : (g = b[29], v = b[30]), (0, r.useEffect)(g, v), b[31] !== N || b[32] !== M || b[33] !== O || b[34] !== F || b[35] !== k || b[36] !== R || b[37] !== L || b[38] !== K || b[39] !== z || b[40] !== U ? (y = {
      isOpen: F,
      activeTab: N,
      openPanel: L,
      closePanel: M,
      dismissPanel: O,
      togglePanel: U,
      openToApprovals: z,
      openToActivity: K,
      setActiveTab: j,
      navigateToFile: k,
      openFileInDialog: R
    }, b[31] = N, b[32] = M, b[33] = O, b[34] = F, b[35] = k, b[36] = R, b[37] = L, b[38] = K, b[39] = z, b[40] = U, b[41] = y) : y = b[41];
    let W = y;
    return b[42] !== S || b[43] !== W ? (_ = (0, n.jsx)(n$.HatchStatusPanelContext.Provider, {
      value: W,
      children: S
    }), b[42] = S, b[43] = W, b[44] = _) : _ = b[44], _
  }
  var nZ = e.i(390743),
    nJ = e.i(646361),
    n0 = e.i(89430),
    n1 = e.i(902747),
    n2 = e.i(947067),
    n3 = e.i(592708),
    n8 = e.i(146581),
    n4 = e.i(121869),
    n5 = e.i(679878),
    n6 = e.i(417174);

  function n9(e) {
    let t, r = (0, a.c)(19),
      {
        node: l
      } = e,
      i = (0, n5.useSimpleIconsEnabled)(),
      o = "space" === l.source || "saved_space" === l.source,
      s = l.preview?.iconUrl ?? l.preview?.thumbnailUrl ?? null,
      c = o && null == (0, n4.parseCoopiconIconUrl)(s) ? l.artifactRef : null,
      {
        url: u,
        mimeType: d,
        isPending: h
      } = (0, n5.usePreferredSpaceIcon)(o ? s : null, c);
    if (o) {
      let e, t, a, i;
      r[0] !== l.displayName ? (e = l.displayName.trim().charAt(0).toUpperCase() || "•", r[0] = l.displayName, r[1] = e) : e = r[1];
      let o = e,
        f = null != s && s.length > 0;
      return r[2] !== s ? (t = (0, n3.hasMask)(s), r[2] = s, r[3] = t) : t = r[3], r[4] !== s || r[5] !== d ? (a = (0, n3.isJpegSpaceIcon)(s, d), r[4] = s, r[5] = d, r[6] = a) : a = r[6], r[7] !== h || r[8] !== o || r[9] !== u || r[10] !== c || r[11] !== f || r[12] !== t || r[13] !== a ? (i = (0, n.jsx)(n2.SpaceIcon, {
        imageUrl: u,
        imagePending: h,
        simpleIconIdentifier: c,
        monogram: o,
        hideMonogram: f,
        size: n6.HATCH_DOCK_OVERFLOW_ICON_SIZE,
        hasMask: t,
        clipToCircle: a,
        noShadow: !0,
        coopiconGlyphBaseColor: n8.HATCH_ARTIFACT_THEME_GLYPH_COLOR
      }), r[7] = h, r[8] = o, r[9] = u, r[10] = c, r[11] = f, r[12] = t, r[13] = a, r[14] = i) : i = r[14], i
    }
    if (r[15] !== l || r[16] !== s || r[17] !== i) {
      let e = (0, n1.getArtifactFileCategory)(l),
        a = (0, n0.getHatchFileIcon)(e),
        o = (0, n.jsx)("span", {
          className: "bg-fill-secondary-elevated dark:bg-fill-primary flex size-10 shrink-0 items-center justify-center rounded-full",
          children: (0, n.jsx)(nJ.HatchIcon, {
            icon: a,
            size: 20,
            "aria-hidden": "true"
          })
        }),
        c = "file" === l.openTarget.kind ? l.openTarget.path : l.artifactRef;
      t = (0, n.jsx)(n8.HatchArtifactIcon, {
        iconUrl: i ? (0, n4.getGeneratedArtifactCoopiconIconUrl)(l.artifactRef, e, !0) : s ?? (0, n4.getGeneratedArtifactCoopiconIconUrl)(c, e, !1),
        size: n6.HATCH_DOCK_OVERFLOW_ICON_SIZE,
        glyphBaseColor: n8.HATCH_ARTIFACT_THEME_GLYPH_COLOR,
        fallback: o
      }), r[15] = l, r[16] = s, r[17] = i, r[18] = t
    } else t = r[18];
    return t
  }
  var n7 = e.i(731714),
    ae = e.i(114205),
    at = e.i(845288),
    an = e.i(520461),
    aa = e.i(893536),
    ar = e.i(384680),
    al = e.i(575898),
    ai = e.i(413415),
    ao = e.i(142074),
    as = e.i(787940);

  function ac(e) {
    return window.addEventListener("resize", e), window.visualViewport?.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e), window.visualViewport?.removeEventListener("resize", e)
    }
  }

  function au() {
    return window.innerHeight > 0 ? window.innerHeight : 900
  }

  function ad() {
    return 900
  }

  function ah() {
    return (0, r.useSyncExternalStore)(ac, au, ad)
  }
  var af = e.i(957948),
    am = e.i(18516),
    ap = e.i(509789),
    ag = e.i(867545),
    av = e.i(374180),
    aC = e.i(173174),
    ay = e.i(534955),
    a_ = e.i(952130),
    ab = e.i(789738),
    aS = e.i(251932),
    ax = e.i(4075),
    ak = e.i(337809);

  function aE(e, t) {
    let n = t.getBoundingClientRect(),
      a = Math.max(t.offsetWidth, Math.ceil(n.width), 1),
      r = Math.max(t.offsetHeight, Math.ceil(n.height), 1),
      l = t.cloneNode(!0);
    l.style.position = "fixed", l.style.top = "-9999px", l.style.left = "-9999px", l.style.width = `${a}px`, l.style.height = `${r}px`, l.style.overflow = "hidden", l.style.pointerEvents = "none", l.setAttribute("aria-hidden", "true"), document.body.appendChild(l);
    let i = e.clientX - n.left,
      o = e.clientY - n.top;
    e.dataTransfer.setDragImage(l, i, o), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        l.remove()
      })
    })
  }

  function aA(e) {
    let t, r, l = (0, a.c)(7),
      {
        layoutId: i,
        className: o,
        children: s
      } = e,
      c = !0 === (0, tS.useReducedMotion)();
    return l[0] !== c ? (t = c ? {
      layout: "position",
      transition: {
        duration: 0
      }
    } : {
      layout: !0,
      initial: {
        opacity: 0,
        height: 0
      },
      animate: {
        opacity: 1,
        height: "auto"
      },
      exit: {
        opacity: 0,
        height: 0
      },
      transition: {
        layout: {
          type: "spring",
          stiffness: 700,
          damping: 35
        },
        opacity: {
          duration: .1
        },
        height: {
          duration: .12,
          ease: "easeOut"
        }
      }
    }, l[0] = c, l[1] = t) : t = l[1], l[2] !== s || l[3] !== o || l[4] !== i || l[5] !== t ? (r = (0, n.jsx)(tb.motion.div, {
      layoutId: i,
      className: o,
      ...t,
      children: s
    }), l[2] = s, l[3] = o, l[4] = i, l[5] = t, l[6] = r) : r = l[6], r
  }
  var aT = e.i(840282),
    aw = e.i(200097),
    aR = e.i(66284),
    aH = e.i(226163),
    aP = e.i(574933),
    aI = e.i(481347),
    aN = e.i(920943),
    aj = e.i(357820),
    aD = e.i(794902),
    aL = e.i(572477),
    aM = e.i(315099),
    aO = e.i(648386),
    aF = e.i(712274),
    aU = e.i(559401),
    az = e.i(83541),
    aK = e.i(951702),
    aB = e.i(838274),
    aV = e.i(69470),
    aW = e.i(367341),
    aG = e.i(344272),
    aY = e.i(21900),
    aq = e.i(371993);

  function a$(e) {
    return `artifact:${e}`
  }

  function aQ(e) {
    return `system:${e}`
  }

  function aX(e) {
    return e.startsWith("artifact:") ? e.slice(9) : null
  }

  function aZ(e) {
    return e.startsWith("system:") ? e.slice(7) : null
  }

  function aJ(e) {
    return e.startsWith("artifact:") || e.startsWith("system:")
  }
  let a0 = "application/x-hatch-space-sidebar-item";

  function a1(e, t) {
    e.dataTransfer.setData(a0, JSON.stringify(t)), e.dataTransfer.effectAllowed = "move"
  }

  function a2(e) {
    let t, r, l, i, o, s, c, u, d, h, f, m, p, g, v, C, y, _, b, S = (0, a.c)(67),
      {
        children: x,
        collapsed: k,
        collapsedItemSize: E,
        collapsedItemGap: A,
        count: T,
        isOpen: w,
        isSelected: R,
        highlightedDestination: H,
        onOpenChange: P,
        revealIndex: I
      } = e,
      N = void 0 === A ? 0 : A;
    S[0] !== T ? (t = {
      eventName: t9.HatchClickEvent.SPACE_OVERFLOW_OPEN_CLICK,
      actionTarget: "sidebar_space_overflow_button",
      actionType: "click",
      targetArea: "nav_button",
      metadata: {
        navigation_surface: "desktop",
        overflow_count: T
      }
    }, S[0] = T, S[1] = t) : t = S[1];
    let {
      ref: j,
      onClick: D
    } = (0, t5.useTrackedClickRef)(t);
    S[2] !== T ? (r = {
      eventName: t9.HatchClickEvent.SPACE_OVERFLOW_MENU_CLOSE_CLICK,
      actionTarget: "sidebar_space_overflow_button",
      actionType: "click",
      targetArea: "nav_button",
      metadata: {
        navigation_surface: "desktop",
        overflow_count: T
      }
    }, S[2] = T, S[3] = r) : r = S[3];
    let {
      onClick: L
    } = (0, t5.useTrackedClickRef)(r);
    S[4] !== T ? (l = {
      eventName: t6.HatchImpressionEvent.SPACE_OVERFLOW_PANEL_IMPRESSION,
      actionTarget: "sidebar_space_overflow_panel",
      metadata: {
        overflow_count: T
      },
      targetArea: "nav_button"
    }, S[4] = T, S[5] = l) : l = S[5], S[6] !== w ? (i = {
      enabled: w
    }, S[6] = w, S[7] = i) : i = S[7];
    let {
      ref: M
    } = (0, t5.useTrackedImpressionRef)(l, i);
    S[8] !== k || S[9] !== H || S[10] !== w ? (s = tm.fbs._("More", null, {
      hk: "2yR33U"
    }), c = (o = k && !w && null != H) ? (0, aq.highlightedOverflowNavigationAriaLabel)(s, H) : s, S[8] = k, S[9] = H, S[10] = w, S[11] = o, S[12] = s, S[13] = c) : (o = S[11], s = S[12], c = S[13]);
    let O = c;
    S[14] !== E ? (u = (0, n6.getHatchDockSystemIconSurfaceSize)(E), S[14] = E, S[15] = u) : u = S[15];
    let F = u;
    S[16] !== E ? (d = (0, n6.getCollapsedSystemItemIconSize)(E), S[16] = E, S[17] = d) : d = S[17];
    let U = d,
      z = w || !k && R,
      K = k ? "hatch-dock-reveal-item" : void 0;
    S[18] !== k || S[19] !== I ? (h = k ? {
      animationDelay: `${I*n6.HATCH_DOCK_REVEAL_STAGGER_MS}ms`
    } : void 0, S[18] = k, S[19] = I, S[20] = h) : h = S[20];
    let B = !k || w,
      V = o ? "true" : void 0;
    S[21] !== w || S[22] !== L || S[23] !== D || S[24] !== P ? (f = () => {
      try {
        w ? L() : D()
      } catch {}
      P(!w)
    }, S[21] = w, S[22] = L, S[23] = D, S[24] = P, S[25] = f) : f = S[25];
    let W = k ? "text-text-primary w-full justify-center rounded-full p-0" : "squircle-12 w-full gap-2 px-2 py-1.5",
      G = !k && (R && !w ? "bg-fill-secondary-elevated text-text-primary" : "text-text-primary hover:bg-fill-secondary-elevated");
    return S[26] !== W || S[27] !== G ? (m = (0, tk.cn)("group flex cursor-pointer items-center text-start whitespace-nowrap transition-colors", W, G), S[26] = W, S[27] = G, S[28] = m) : m = S[28], S[29] !== k || S[30] !== N || S[31] !== E ? (p = k ? {
      minHeight: E,
      paddingBlock: N / 2
    } : void 0, S[29] = k, S[30] = N, S[31] = E, S[32] = p) : p = S[32], S[33] !== k || S[34] !== o || S[35] !== w || S[36] !== z || S[37] !== U || S[38] !== F ? (g = k ? (0, n.jsx)("span", {
      className: (0, tk.cn)("flex shrink-0 items-center justify-center rounded-full transition-colors", z ? "bg-text-primary" : "group-hover:bg-bg-primary group-focus-visible:bg-bg-primary group-active:bg-bg-primary bg-transparent"),
      style: {
        width: F,
        height: F
      },
      children: (0, n.jsx)(nJ.HatchIcon, {
        icon: ag.default,
        size: U,
        iconSize: U,
        className: (0, tk.cn)(z ? "text-fill-primary" : "text-text-primary", o && aq.HATCH_UI_LIGHTUP_ICON_CLASS_NAME)
      })
    }) : (0, n.jsx)(nJ.HatchIcon, {
      icon: av.default,
      size: 24,
      className: (0, tk.cn)("text-text-tertiary shrink-0 transition-transform duration-200", w && "rotate-180")
    }), S[33] = k, S[34] = o, S[35] = w, S[36] = z, S[37] = U, S[38] = F, S[39] = g) : g = S[39], S[40] !== k || S[41] !== s ? (v = !k && (0, n.jsx)("span", {
      className: "text-subheadline",
      children: s
    }), S[40] = k, S[41] = s, S[42] = v) : v = S[42], S[43] !== O || S[44] !== w || S[45] !== j || S[46] !== V || S[47] !== f || S[48] !== m || S[49] !== p || S[50] !== g || S[51] !== v ? (C = (0, n.jsxs)("button", {
      ref: j,
      type: "button",
      "data-testid": "hatch-nav-space-overflow",
      "aria-label": O,
      "aria-expanded": w,
      "data-highlighted": V,
      onClick: f,
      className: m,
      style: p,
      children: [g, v]
    }), S[43] = O, S[44] = w, S[45] = j, S[46] = V, S[47] = f, S[48] = m, S[49] = p, S[50] = g, S[51] = v, S[52] = C) : C = S[52], S[53] !== O || S[54] !== B || S[55] !== C ? (y = (0, n.jsx)(ao.DockItemTooltip, {
      label: O,
      disabled: B,
      children: C
    }), S[53] = O, S[54] = B, S[55] = C, S[56] = y) : y = S[56], S[57] !== x || S[58] !== k || S[59] !== w ? (_ = !k && (0, n.jsx)("div", {
      className: "grid transition-[grid-template-rows] duration-200",
      style: {
        gridTemplateRows: w ? "1fr" : "0fr"
      },
      children: (0, n.jsx)("div", {
        className: (0, tk.cn)("overflow-hidden", !w && "invisible"),
        children: (0, n.jsx)("div", {
          className: "flex flex-col gap-px",
          children: x
        })
      })
    }), S[57] = x, S[58] = k, S[59] = w, S[60] = _) : _ = S[60], S[61] !== M || S[62] !== h || S[63] !== y || S[64] !== _ || S[65] !== K ? (b = (0, n.jsxs)("div", {
      ref: M,
      className: K,
      style: h,
      children: [y, _]
    }), S[61] = M, S[62] = h, S[63] = y, S[64] = _, S[65] = K, S[66] = b) : b = S[66], b
  }

  function a3({
    actions: e,
    variant: t
  }) {
    let {
      Item: a,
      Separator: r
    } = (0, aw.hatchMenuPartsFor)(t), {
      pin: l,
      share: i,
      unshare: o,
      download: s,
      remove: c
    } = (0, at.useSpaceMenuItemTracking)(e.isFavorite, "sidebar_rail", e.artifactSource ?? "space", (0, aw.hatchMenuEntryPointFor)(t)), u = null != e.onToggleFavorite || null != e.onDownload, d = "artifact" === e.itemKind && (null != e.onRemoveRecent || null != e.onDelete);
    return (0, n.jsxs)(n.Fragment, {
      children: [null != e.onToggleFavorite && (0, n.jsx)(a, {
        ref: l.ref,
        leadingIcon: e.isFavorite ? ab.default : a_.default,
        label: e.isFavorite ? "artifact" === e.itemKind ? tm.fbs._("Unpin", null, {
          hk: "7ty91"
        }) : tm.fbs._("Unpin", null, {
          hk: "4ysZXT"
        }) : "artifact" === e.itemKind ? tm.fbs._("Pin", null, {
          hk: "3RxX6T"
        }) : tm.fbs._("Pin", null, {
          hk: "3taoLR"
        }),
        onSelect: () => {
          l.onClick(), e.onToggleFavorite?.()
        }
      }), null != e.onShare && null != e.shareSpaceSlug && (0, n.jsx)(aY.HatchArtifactSharingMenuItem, {
        canCreateShare: !0 === e.canCreateShare,
        onSelect: e.onShare,
        shareTracking: i,
        showTrailingSeparator: !u && d,
        spaceSlug: e.shareSpaceSlug,
        unshareTracking: o,
        variant: t
      }), null != e.onDownload && (0, n.jsx)(a, {
        ref: s.ref,
        leadingIcon: aS.default,
        label: tm.fbs._("Download", null, {
          hk: "1VdZEw"
        }),
        onSelect: () => {
          s.onClick(), e.onDownload?.()
        }
      }), u && d && (0, n.jsx)(r, {}), null != e.onRemoveRecent && (0, n.jsx)(a, {
        leadingIcon: ay.default,
        label: tm.fbs._("Remove from recents", null, {
          hk: "Ldw7X"
        }),
        onSelect: () => e.onRemoveRecent?.((0, aw.hatchMenuEntryPointFor)(t))
      }), null != e.onDelete && (0, n.jsx)(a, {
        ref: c.ref,
        leadingIcon: aC.default,
        label: "saved_space" === e.artifactSource ? tm.fbs._("Remove from Library", null, {
          hk: "47T9SF"
        }) : tm.fbs._("Delete", null, {
          hk: "1SiJ7w"
        }),
        variant: "destructive",
        onSelect: () => {
          c.onClick(), e.onDelete?.()
        }
      })]
    })
  }

  function a8({
    actions: e,
    onOpenChange: t
  }) {
    let a = (0, at.useSpaceMenuOpenTracking)("sidebar_rail", e.artifactSource ?? "space", "hover_button");
    return (0, n.jsxs)(am.DropdownMenu, {
      onOpenChange: e => {
        e && a.onClick(), t?.(e)
      },
      children: [(0, n.jsx)(am.DropdownMenuTrigger, {
        asChild: !0,
        children: (0, n.jsx)(tO.IconButton, {
          ref: a.ref,
          icon: ag.default,
          label: tm.fbs._("More options", null, {
            hk: "1WG5Uh"
          }),
          variant: "borderless",
          size: "28",
          onClick: e => e.stopPropagation()
        })
      }), (0, n.jsx)(am.DropdownMenuContent, {
        side: "right",
        align: "start",
        onClick: e => e.stopPropagation(),
        children: (0, n.jsx)(a3, {
          actions: e,
          variant: "dropdown"
        })
      })]
    })
  }

  function a4(e) {
    let t, r = (0, a.c)(2),
      {
        actions: l
      } = e;
    return r[0] !== l ? (t = (0, n.jsx)(ap.ContextMenuContent, {
      children: (0, n.jsx)(a3, {
        actions: l,
        variant: "context"
      })
    }), r[0] = l, r[1] = t) : t = r[1], t
  }

  function a5({
    title: e,
    ariaLabel: t,
    testId: a,
    icon: l,
    isSelected: i,
    isDragging: o,
    collapsed: s,
    collapsedItemSize: c,
    collapsedItemGap: u = 0,
    dropEdge: d,
    draggable: h = !0,
    actions: f,
    refs: m,
    onClick: p,
    onLoggedClick: g,
    onDragEnd: v,
    onDragOver: C,
    onDragLeave: y,
    onDragStart: _,
    onDrop: b,
    onPointerEnter: S,
    onFocus: x
  }) {
    let [k, E] = (0, r.useState)(!1), [A, T] = (0, r.useState)(!1), w = (0, r.useRef)(null), R = null != f && (null != f.onToggleFavorite || null != f.onRemoveRecent || null != f.onShare || null != f.onDelete), H = (0, at.useSpaceMenuOpenTracking)("sidebar_rail", f?.artifactSource ?? "space", "right_click"), P = null != p;
    (0, r.useEffect)(() => {
      if (!A) return;
      let e = () => {
        document.dispatchEvent(new KeyboardEvent("keydown", {
          key: "Escape"
        }))
      };
      return window.addEventListener("blur", e), () => window.removeEventListener("blur", e)
    }, [A]);
    let I = (0, n.jsxs)("div", {
      ref: (0, af.default)(...m ?? []),
      role: "button",
      tabIndex: 0,
      draggable: P && h,
      "data-testid": a,
      "aria-label": t ?? e,
      "aria-disabled": !P || void 0,
      "aria-current": i ? "page" : void 0,
      onClick: P ? e => (0, aT.handleContextMenuTriggerClick)(e, () => {
        p?.(e);
        try {
          g?.()
        } catch {}
      }) : void 0,
      onKeyDown: P || R ? e => {
        if (R && ("ContextMenu" === e.key || "F10" === e.key && e.shiftKey)) {
          e.preventDefault(), (0, aT.openContextMenuAtElement)(e.currentTarget);
          return
        }
        P && ("Enter" === e.key || " " === e.key) && (e.preventDefault(), p?.())
      } : void 0,
      onMouseEnter: S,
      onPointerEnter: S,
      onFocus: x,
      className: (0, tk.cn)("group text-text-primary relative flex items-center text-start whitespace-nowrap transition-[colors,opacity]", P ? "cursor-pointer" : "cursor-default", s ? "w-full justify-center p-0" : (0, tk.cn)("squircle-12 w-full gap-2 px-2 py-1.5", P && "hover:bg-fill-secondary-elevated"), o && "opacity-40", !s && i && "bg-fill-secondary-elevated"),
      style: s ? {
        minHeight: c,
        paddingBlock: u / 2
      } : void 0,
      children: [l, !s && (0, n.jsx)("span", {
        className: (0, tk.cn)("text-subheadline text-text-primary min-w-0 flex-1 truncate", R && "pe-7"),
        children: e
      })]
    });
    return (0, n.jsxs)(ap.ContextMenu, {
      open: A,
      onOpenChange: e => {
        T(e), e && R && H.onClick()
      },
      children: [(0, n.jsx)(ap.ContextMenuTrigger, {
        asChild: !0,
        children: (0, n.jsxs)("div", {
          ref: (0, af.default)(w, R ? H.ref : void 0),
          draggable: h,
          className: (0, tk.cn)("group/dock-item relative", "before" === d && "before:bg-fill-divider before:pointer-events-none before:absolute before:inset-x-2 before:top-0 before:z-10 before:h-0.5 before:rounded-full", "after" === d && "before:bg-fill-divider before:pointer-events-none before:absolute before:inset-x-2 before:bottom-0 before:z-10 before:h-0.5 before:rounded-full"),
          onDragStart: e => {
            !h || e.target instanceof Element && null != e.target.closest("button") ? e.preventDefault() : (null != w.current && aE(e, w.current), _(e))
          },
          onDragEnd: v,
          onDragOver: C,
          onDragLeave: y,
          onDrop: b,
          children: [(0, n.jsx)(ao.DockItemTooltip, {
            label: e,
            disabled: !s || A,
            children: I
          }), R && !s && (0, n.jsx)("div", {
            className: (0, tk.cn)("absolute inset-y-0 end-1 flex items-center transition-opacity", k ? "opacity-100" : "opacity-0 group-focus-within/dock-item:opacity-100 group-hover/dock-item:opacity-100"),
            children: (0, n.jsx)(a8, {
              actions: f,
              onOpenChange: E
            })
          })]
        })
      }), R ? (0, n.jsx)(a4, {
        actions: f
      }) : null]
    })
  }

  function a6(e) {
    let t, r, l, i, o, s, c, u = (0, a.c)(50),
      {
        node: d,
        collapsed: h,
        collapsedItemSize: f,
        isSelected: m
      } = e,
      p = "space" === d.source || "saved_space" === d.source,
      g = d.preview?.iconUrl ?? d.preview?.thumbnailUrl ?? null,
      v = (0, n5.useSimpleIconsEnabled)(),
      C = p && null == (0, n4.parseCoopiconIconUrl)(g) ? d.artifactRef : null,
      {
        url: y,
        mimeType: _,
        isPending: b
      } = (0, n5.usePreferredSpaceIcon)(p ? g : null, C);
    u[0] !== g || u[1] !== C || u[2] !== v ? (t = null != (0, n4.parseCoopiconIconUrl)(g) || v && null != C, u[0] = g, u[1] = C, u[2] = v, u[3] = t) : t = u[3];
    let S = t;
    u[4] !== f ? (r = (0, n6.getHatchDockSystemIconSurfaceSize)(f), u[4] = f, u[5] = r) : r = u[5];
    let x = r;
    u[6] !== h || u[7] !== x || u[8] !== m ? (l = (e, t) => !0 === h ? (0, n.jsx)("span", {
      "data-hatch-dock-artifact-icon-surface": !0,
      className: (0, tk.cn)("relative flex shrink-0 items-center justify-center rounded-full", m ? "bg-fill-secondary" : !t && "group-hover:bg-fill-secondary group-focus-visible:bg-fill-secondary group-active:bg-fill-secondary"),
      style: {
        width: x,
        height: x
      },
      children: (0, n.jsx)("span", {
        "data-hatch-dock-artifact-icon-content": !0,
        className: (0, tk.cn)("motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-out", t ? "group-hover:scale-[1.15] group-focus-visible:scale-[1.15]" : "group-hover:scale-105 group-focus-visible:scale-105"),
        children: e
      })
    }) : e, u[6] = h, u[7] = x, u[8] = m, u[9] = l) : l = u[9];
    let k = l;
    if (p) {
      let e, t, a, r, l, i, o;
      u[10] !== d.displayName ? (e = d.displayName.trim().charAt(0).toUpperCase() || "•", u[10] = d.displayName, u[11] = e) : e = u[11];
      let s = e;
      u[12] !== S || u[13] !== g || u[14] !== y ? (t = !S && (null != y || (g?.trim().length ?? 0) > 0), u[12] = S, u[13] = g, u[14] = y, u[15] = t) : t = u[15];
      let c = t;
      u[16] !== h || u[17] !== f || u[18] !== c || u[19] !== S ? (a = !0 === h && S ? (0, n6.getCollapsedCoopiconCanvasSize)(f) : !0 === h && c || !0 === h ? (0, n6.getHatchDockArtifactThumbnailSize)(f) : 24, u[16] = h, u[17] = f, u[18] = c, u[19] = S, u[20] = a) : a = u[20];
      let m = a,
        p = null != g && g.length > 0;
      u[21] !== g ? (r = (0, n3.hasMask)(g), u[21] = g, u[22] = r) : r = u[22], u[23] !== g || u[24] !== _ ? (l = (0, n3.isJpegSpaceIcon)(g, _), u[23] = g, u[24] = _, u[25] = l) : l = u[25];
      let v = "constructing" === d.status || "updating" === d.status;
      return u[26] !== b || u[27] !== m || u[28] !== s || u[29] !== y || u[30] !== C || u[31] !== v || u[32] !== p || u[33] !== r || u[34] !== l ? (i = (0, n.jsx)(n2.SpaceIcon, {
        imageUrl: y,
        imagePending: b,
        monogram: s,
        hideMonogram: p,
        size: m,
        hasMask: r,
        clipToCircle: l,
        disableDropShadow: !0,
        disableHoverEffect: !0,
        selected: !1,
        showSpinner: v,
        simpleIconIdentifier: C
      }), u[26] = b, u[27] = m, u[28] = s, u[29] = y, u[30] = C, u[31] = v, u[32] = p, u[33] = r, u[34] = l, u[35] = i) : i = u[35], u[36] !== i || u[37] !== k ? (o = k(i, !0), u[36] = i, u[37] = k, u[38] = o) : o = u[38], o
    }
    u[39] !== d ? (i = function(e) {
      switch (e) {
        case "audio":
          return aP.default;
        case "csv":
        case "spreadsheet":
          return aN.default;
        case "document":
          return aM.default;
        case "html":
        case "json":
          return aI.default;
        case "image":
          return aU.default;
        case "markdown":
        case "text":
          return aO.default;
        case "pdf":
          return aj.default;
        case "presentation":
          return aD.default;
        case "video":
          return aF.default;
        case "unsupported":
          return aL.default
      }
    }((0, n1.getArtifactFileCategory)(d)), u[39] = d, u[40] = i) : i = u[40];
    let E = i;
    u[41] !== f ? (o = (0, n6.getHatchDockSystemAnimatedIconDisplaySize)(f), u[41] = f, u[42] = o) : o = u[42];
    let A = o;
    u[43] !== E || u[44] !== h || u[45] !== A ? (s = h ? (0, n.jsx)("span", {
      "data-hatch-dock-file-icon": !0,
      className: "text-text-primary flex shrink-0 items-center justify-center",
      style: {
        width: A,
        height: A
      },
      children: (0, n.jsx)(nJ.HatchIcon, {
        icon: E,
        size: A,
        "aria-hidden": "true"
      })
    }) : (0, n.jsx)("span", {
      className: "text-text-primary flex h-6 w-6 shrink-0 items-center justify-center",
      children: (0, n.jsx)(nJ.HatchIcon, {
        icon: E,
        size: 24,
        "aria-hidden": "true"
      })
    }), u[43] = E, u[44] = h, u[45] = A, u[46] = s) : s = u[46];
    let T = s;
    return u[47] !== T || u[48] !== k ? (c = k(T, !1), u[47] = T, u[48] = k, u[49] = c) : c = u[49], c
  }

  function a9(e) {
    let t, r, l, i, o, s, c, u, d, h, f, m, p = (0, a.c)(60),
      {
        node: g,
        isSelected: v,
        isFavorite: C,
        isDragging: y,
        collapsed: _,
        collapsedItemSize: b,
        collapsedItemGap: S,
        dropEdge: x,
        onClick: k,
        onDragEnd: E,
        onDragOver: A,
        onDragLeave: T,
        onDragStart: w,
        onDrop: R,
        onPointerEnter: H,
        onToggleFavorite: P,
        onRemoveRecent: I,
        canCreateShare: N,
        onShare: j,
        onDelete: D
      } = e,
      L = void 0 === S ? 0 : S;
    p[0] !== g.artifactRef ? (t = (0, aK.toPelSafeArtifactId)(g.artifactRef), p[0] = g.artifactRef, p[1] = t) : t = p[1];
    let M = t,
      O = "file" === g.source,
      F = (0, aG.canNavigateToArtifact)(g),
      U = O ? "sidebar_library_item_nav_button" : "sidebar_artifact_nav_button",
      z = O ? t9.HatchClickEvent.LIBRARY_FILE_CLICK : t9.HatchClickEvent.SPACE_TAB_CLICK;
    p[2] !== M ? (r = {
      navigation_surface: "desktop",
      artifact_id: M
    }, p[2] = M, p[3] = r) : r = p[3], p[4] !== U || p[5] !== z || p[6] !== r ? (l = {
      eventName: z,
      actionTarget: U,
      actionType: "click",
      targetArea: "nav_button",
      metadata: r
    }, p[4] = U, p[5] = z, p[6] = r, p[7] = l) : l = p[7];
    let {
      ref: K,
      onClick: B
    } = (0, t5.useTrackedClickRef)(l), V = O ? t6.HatchImpressionEvent.LIBRARY_SIDEBAR_NAV_IMPRESSION : t6.HatchImpressionEvent.SPACE_SIDEBAR_NAV_IMPRESSION;
    p[8] !== M ? (i = {
      navigation_surface: "desktop",
      artifact_id: M
    }, p[8] = M, p[9] = i) : i = p[9], p[10] !== U || p[11] !== V || p[12] !== i ? (o = {
      eventName: V,
      actionTarget: U,
      targetArea: "nav_button",
      metadata: i
    }, p[10] = U, p[11] = V, p[12] = i, p[13] = o) : o = p[13], p[14] === Symbol.for("react.memo_cache_sentinel") ? (s = {
      threshold: "50%"
    }, p[14] = s) : s = p[14];
    let {
      ref: W
    } = (0, t5.useTrackedImpressionRef)(o, s), G = (0, aV.useDownloadSpaceHtml)(ec.HATCH_SENTRY_SURFACES.NAVIGATION), Y = "space" === g.openTarget.kind && g.capabilities.canShare && ("ready" === g.status || "updating" === g.status) ? g.openTarget.slug : null, q = null != j && "space" === g.openTarget.kind ? g.openTarget.slug : void 0;
    p[15] !== G || p[16] !== Y || p[17] !== g.displayName ? (c = null != Y ? () => G(Y, {
      displayName: g.displayName
    }) : void 0, p[15] = G, p[16] = Y, p[17] = g.displayName, p[18] = c) : c = p[18], p[19] !== N || p[20] !== C || p[21] !== g.source || p[22] !== D || p[23] !== I || p[24] !== j || p[25] !== P || p[26] !== q || p[27] !== c ? (u = {
      itemKind: "artifact",
      artifactSource: g.source,
      isFavorite: C,
      canCreateShare: N,
      shareSpaceSlug: q,
      onToggleFavorite: P,
      onRemoveRecent: I,
      onShare: j,
      onDownload: c,
      onDelete: D
    }, p[19] = N, p[20] = C, p[21] = g.source, p[22] = D, p[23] = I, p[24] = j, p[25] = P, p[26] = q, p[27] = c, p[28] = u) : u = p[28];
    let $ = u,
      Q = g.displayName;
    p[29] !== g.artifactRef ? (d = (0, aH.toHatchTestIdSegment)(g.artifactRef), p[29] = g.artifactRef, p[30] = d) : d = p[30];
    let X = `hatch-nav-artifact-${d}`;
    p[31] !== _ || p[32] !== b || p[33] !== v || p[34] !== g ? (h = (0, n.jsx)(a6, {
      node: g,
      collapsed: _,
      collapsedItemSize: b,
      isSelected: v
    }), p[31] = _, p[32] = b, p[33] = v, p[34] = g, p[35] = h) : h = p[35], p[36] !== W || p[37] !== K ? (f = [K, W], p[36] = W, p[37] = K, p[38] = f) : f = p[38];
    let Z = F ? k : void 0,
      J = F ? H : void 0;
    return p[39] !== _ || p[40] !== L || p[41] !== b || p[42] !== x || p[43] !== y || p[44] !== v || p[45] !== $ || p[46] !== B || p[47] !== g.capabilities.canPin || p[48] !== g.displayName || p[49] !== E || p[50] !== T || p[51] !== A || p[52] !== w || p[53] !== R || p[54] !== X || p[55] !== h || p[56] !== f || p[57] !== Z || p[58] !== J ? (m = (0, n.jsx)(a5, {
      title: Q,
      testId: X,
      icon: h,
      isSelected: v,
      isDragging: y,
      collapsed: _,
      collapsedItemSize: b,
      collapsedItemGap: L,
      dropEdge: x,
      draggable: g.capabilities.canPin,
      actions: $,
      refs: f,
      onClick: Z,
      onLoggedClick: B,
      onDragStart: w,
      onDragEnd: E,
      onDragOver: A,
      onDragLeave: T,
      onDrop: R,
      onPointerEnter: J
    }), p[39] = _, p[40] = L, p[41] = b, p[42] = x, p[43] = y, p[44] = v, p[45] = $, p[46] = B, p[47] = g.capabilities.canPin, p[48] = g.displayName, p[49] = E, p[50] = T, p[51] = A, p[52] = w, p[53] = R, p[54] = X, p[55] = h, p[56] = f, p[57] = Z, p[58] = J, p[59] = m) : m = p[59], m
  }

  function a7(e) {
    let t, r, l, i, o, s, c, u, d = (0, a.c)(36),
      {
        item: h,
        collapsed: f,
        collapsedItemSize: m,
        iconSize: p,
        animatedIconSize: g,
        animatedIconDisplaySize: v,
        isSelected: C,
        isIconPlaying: y,
        shouldLoadAnimation: _,
        onIconRepeatEnd: b
      } = e,
      S = h.icon,
      x = h.animatedIcon,
      k = h.notificationCount ?? 0,
      E = !0 === h.highlighted && k <= 0,
      A = !C;
    d[0] !== m ? (t = (0, n6.getHatchDockSystemIconSurfaceSize)(m), d[0] = m, d[1] = t) : t = d[1];
    let T = t,
      w = E ? aq.HATCH_UI_LIGHTUP_ICON_CLASS_NAME : void 0;
    d[2] !== x || d[3] !== v || d[4] !== g || d[5] !== p || d[6] !== E || d[7] !== y || d[8] !== h.mirrorAnimatedSizing || d[9] !== h.staticMatchAnimatedIcon || d[10] !== b || d[11] !== _ || d[12] !== S || d[13] !== w ? (r = (0, n.jsx)(ax.HatchSystemIconGlyph, {
      icon: S,
      animatedIcon: x,
      staticMatchAnimatedIcon: h.staticMatchAnimatedIcon,
      size: p,
      animationSize: g,
      animationDisplaySize: v,
      isPlaying: y,
      shouldLoadAnimation: _,
      onAnimationEnd: b,
      className: w,
      mirrorAnimatedSizing: h.mirrorAnimatedSizing,
      reserveAnimationFrame: E
    }), d[2] = x, d[3] = v, d[4] = g, d[5] = p, d[6] = E, d[7] = y, d[8] = h.mirrorAnimatedSizing, d[9] = h.staticMatchAnimatedIcon, d[10] = b, d[11] = _, d[12] = S, d[13] = w, d[14] = r) : r = d[14];
    let R = r;
    d[15] !== f || d[16] !== T || d[17] !== R || d[18] !== E || d[19] !== C || d[20] !== A ? (l = f ? (0, n.jsx)("span", {
      "data-highlighted": E ? "true" : void 0,
      className: (0, tk.cn)("relative flex shrink-0 items-center justify-center rounded-full transition-colors", A ? "group-hover:bg-fill-secondary group-focus-visible:bg-fill-secondary group-active:bg-fill-secondary" : C ? "bg-fill-secondary" : "bg-fill-secondary-elevated dark:bg-fill-primary group-hover:bg-fill-secondary group-focus-visible:bg-fill-secondary group-active:bg-fill-secondary"),
      style: {
        width: T,
        height: T
      },
      children: R
    }) : (0, n.jsx)("span", {
      "data-highlighted": E ? "true" : void 0,
      className: "flex size-6 shrink-0 items-center justify-center",
      children: R
    }), d[15] = f, d[16] = T, d[17] = R, d[18] = E, d[19] = C, d[20] = A, d[21] = l) : l = d[21];
    let H = l;
    d[22] !== f || d[23] !== H || d[24] !== h.nowPlayingSource ? (i = f && null != h.nowPlayingSource ? (0, n.jsxs)("span", {
      className: "relative inline-flex shrink-0",
      children: [H, (0, n.jsx)(aB.HatchNowPlayingWaveform, {
        source: h.nowPlayingSource,
        className: "text-hatch-accent absolute start-1/2 -bottom-1 -translate-x-1/2"
      })]
    }) : H, d[22] = f, d[23] = H, d[24] = h.nowPlayingSource, d[25] = i) : i = d[25];
    let P = i;
    if (k <= 0) return P;
    let I = f ? T : 24;
    d[26] !== I ? (o = Math.round((1 - Math.SQRT1_2) / 2 * I - 5), d[26] = I, d[27] = o) : o = d[27];
    let N = o;
    return d[28] !== N ? (s = {
      top: N,
      insetInlineEnd: N
    }, d[28] = N, d[29] = s) : s = d[29], d[30] !== h.notificationBadgeTestId || d[31] !== s ? (c = (0, n.jsx)("span", {
      "aria-hidden": "true",
      "data-testid": h.notificationBadgeTestId,
      className: "bg-fill-blue absolute size-2.5 rounded-full",
      style: s
    }), d[30] = h.notificationBadgeTestId, d[31] = s, d[32] = c) : c = d[32], d[33] !== P || d[34] !== c ? (u = (0, n.jsxs)("span", {
      className: "relative inline-flex shrink-0",
      children: [P, c]
    }), d[33] = P, d[34] = c, d[35] = u) : u = d[35], u
  }

  function re(e) {
    let t, r, l, i, o, s, c, u, d, h, f, m = (0, a.c)(59),
      {
        item: p,
        isSelected: g,
        collapsed: v,
        collapsedItemSize: C,
        collapsedItemGap: y,
        isDragging: _,
        dropEdge: b,
        onClick: S,
        onDragEnd: x,
        onDragOver: k,
        onDragLeave: E,
        onDragStart: A,
        onDrop: T,
        isDraggable: w,
        onToggleFavorite: R,
        onRemoveRecent: H
      } = e,
      P = void 0 === y ? 0 : y;
    m[0] !== v || m[1] !== C ? (t = v ? (0, n6.getCollapsedSystemItemIconSize)(C) : 20, m[0] = v, m[1] = C, m[2] = t) : t = m[2];
    let I = t;
    m[3] !== v || m[4] !== I ? (r = !0 === v ? (0, n6.getHatchDockSystemAnimatedIconSize)() : I, m[3] = v, m[4] = I, m[5] = r) : r = m[5];
    let N = r;
    m[6] !== N || m[7] !== v || m[8] !== C ? (l = !0 === v ? (0, n6.getHatchDockSystemAnimatedIconDisplaySize)(C) : N, m[6] = N, m[7] = v, m[8] = C, m[9] = l) : l = m[9];
    let j = l,
      D = (0, ak.useHatchSystemIconPlayback)(p.animatedIcon),
      L = !0 === p.assistantHighlighted && (p.notificationCount ?? 0) <= 0;
    m[10] !== p.itemKey || m[11] !== L ? (i = {
      eventName: t9.HatchClickEvent.SYSTEM_NAV_ITEM_CLICK,
      actionTarget: "sidebar_system_nav_button",
      actionType: "click",
      targetArea: "nav_button",
      metadata: {
        navigation_surface: "desktop",
        item_key: p.itemKey,
        destination: p.itemKey,
        was_highlighted: L
      }
    }, m[10] = p.itemKey, m[11] = L, m[12] = i) : i = m[12];
    let {
      ref: M,
      onClick: O
    } = (0, t5.useTrackedClickRef)(i);
    m[13] !== p.itemKey || m[14] !== L ? (o = {
      eventName: t6.HatchImpressionEvent.SYSTEM_SIDEBAR_NAV_IMPRESSION,
      actionTarget: "sidebar_system_nav_button",
      targetArea: "nav_button",
      metadata: {
        navigation_surface: "desktop",
        item_key: p.itemKey,
        destination: p.itemKey,
        was_highlighted: L
      }
    }, m[13] = p.itemKey, m[14] = L, m[15] = o) : o = m[15], m[16] === Symbol.for("react.memo_cache_sentinel") ? (s = {
      threshold: "50%"
    }, m[16] = s) : s = m[16];
    let {
      ref: F
    } = (0, t5.useTrackedImpressionRef)(o, s);
    m[17] !== p.isFavorite || m[18] !== H || m[19] !== R ? (c = {
      itemKind: "system",
      isFavorite: p.isFavorite,
      onToggleFavorite: R,
      onRemoveRecent: H
    }, m[17] = p.isFavorite, m[18] = H, m[19] = R, m[20] = c) : c = m[20];
    let U = c,
      z = p.title,
      K = p.ariaLabel;
    m[21] !== p.itemKey ? (u = (0, aH.toHatchTestIdSegment)(p.itemKey), m[21] = p.itemKey, m[22] = u) : u = m[22];
    let B = `hatch-nav-system-item-${u}`;
    return m[23] !== j || m[24] !== N || m[25] !== v || m[26] !== C || m[27] !== D.isPlaying || m[28] !== D.shouldLoadAnimation || m[29] !== D.stop || m[30] !== I || m[31] !== g || m[32] !== p ? (d = (0, n.jsx)(a7, {
      item: p,
      collapsed: v,
      collapsedItemSize: C,
      iconSize: I,
      animatedIconSize: N,
      animatedIconDisplaySize: j,
      isSelected: g,
      isIconPlaying: D.isPlaying,
      shouldLoadAnimation: D.shouldLoadAnimation,
      onIconRepeatEnd: D.stop
    }), m[23] = j, m[24] = N, m[25] = v, m[26] = C, m[27] = D.isPlaying, m[28] = D.shouldLoadAnimation, m[29] = D.stop, m[30] = I, m[31] = g, m[32] = p, m[33] = d) : d = m[33], m[34] !== F || m[35] !== M ? (h = [M, F], m[34] = F, m[35] = M, m[36] = h) : h = m[36], m[37] !== v || m[38] !== P || m[39] !== C || m[40] !== b || m[41] !== D.play || m[42] !== w || m[43] !== _ || m[44] !== g || m[45] !== p.ariaLabel || m[46] !== p.title || m[47] !== U || m[48] !== O || m[49] !== S || m[50] !== x || m[51] !== E || m[52] !== k || m[53] !== A || m[54] !== T || m[55] !== B || m[56] !== d || m[57] !== h ? (f = (0, n.jsx)(a5, {
      title: z,
      ariaLabel: K,
      testId: B,
      icon: d,
      isSelected: g,
      isDragging: _,
      collapsed: v,
      collapsedItemSize: C,
      collapsedItemGap: P,
      dropEdge: b,
      draggable: w,
      actions: U,
      refs: h,
      onPointerEnter: D.play,
      onFocus: D.play,
      onClick: S,
      onLoggedClick: O,
      onDragStart: A,
      onDragEnd: x,
      onDragOver: k,
      onDragLeave: E,
      onDrop: T
    }), m[37] = v, m[38] = P, m[39] = C, m[40] = b, m[41] = D.play, m[42] = w, m[43] = _, m[44] = g, m[45] = p.ariaLabel, m[46] = p.title, m[47] = U, m[48] = O, m[49] = S, m[50] = x, m[51] = E, m[52] = k, m[53] = A, m[54] = T, m[55] = B, m[56] = d, m[57] = h, m[58] = f) : f = m[58], f
  }

  function rt(e) {
    let t, r, l, i, o, c = (0, a.c)(13);
    c[0] !== e ? ({
      collapsed: r,
      ...t
    } = e, c[0] = e, c[1] = t, c[2] = r) : (t = c[1], r = c[2]);
    let u = void 0 !== r && r;
    return c[3] !== u || c[4] !== t.collapsedItemGap || c[5] !== t.collapsedItemSize ? (l = e => {
      let {
        reset: a
      } = e;
      return (0, n.jsx)(aR.HatchSpacesErrorFallback, {
        surface: "rail",
        compact: u,
        compactItemGap: t.collapsedItemGap ?? 0,
        compactItemSize: t.collapsedItemSize ?? 36,
        includeSavedSpaces: !0,
        reset: a
      })
    }, c[3] = u, c[4] = t.collapsedItemGap, c[5] = t.collapsedItemSize, c[6] = l) : l = c[6], c[7] !== u || c[8] !== t ? (i = (0, n.jsx)(rn, {
      collapsed: u,
      ...t
    }), c[7] = u, c[8] = t, c[9] = i) : i = c[9], c[10] !== l || c[11] !== i ? (o = (0, n.jsx)(s.EctoErrorBoundary, {
      surface: ec.HATCH_SENTRY_SURFACES.SPACE,
      fallback: l,
      children: i
    }), c[10] = l, c[11] = i, c[12] = o) : o = c[12], o
  }

  function rn({
    nodes: e,
    systemItems: t = [],
    systemItemsEditable: a = !0,
    selectedArtifactRef: l = null,
    selectedSystemItemKey: i = null,
    collapsed: o,
    collapsedItemGap: c = 0,
    collapsedItemSize: u = 36,
    collapsedMaxVisibleItems: d,
    revealOffset: h = 0,
    maxRecentFill: f,
    minRecents: m,
    onOpenArtifact: p,
    onOpenSystemItem: g,
    onRemoveRecentArtifact: v,
    onRemoveRecentSystem: C,
    onDeleteArtifact: y,
    onShareArtifact: _,
    onPinArtifact: b,
    onSetSystemFavoriteOrder: S,
    overflowOpen: x,
    onOverflowOpenChange: k,
    onOverflowItemIdsChange: E,
    dragApiRef: A
  }) {
    let T = (0, t5.useInteractionLoggerWithLazyData)(),
      w = (0, aW.useCanShareArtifactsFromServingVm)(),
      R = null != l ? a$(l) : null != i ? aQ(i) : null,
      H = (0, r.useRef)([]),
      P = (0, r.useRef)(new Map),
      [I, N] = (0, r.useState)(null);
    (0, r.useEffect)(() => {
      null != I && R === I && N(null)
    }, [I, R]);
    let [j, D] = (0, r.useState)(null), [L, M] = (0, r.useState)(null), [O, F] = (0, r.useState)(!1), [U, z] = (0, r.useState)(!1), K = (0, r.useRef)(null), B = (0, r.useRef)(null), [V, W] = (0, r.useState)(!1), G = null != x, Y = G ? x : V, q = (0, r.useCallback)(e => {
      let t = t => "function" == typeof e ? e(t) : e;
      G ? k?.(t(x)) : W(e => {
        let n = t(e);
        return n !== e && k?.(n), n
      })
    }, [x, G, k]), $ = (0, r.useRef)(null), Q = (0, r.useRef)(null), X = o ? 72 : 36, Z = ah(), J = o && null != d ? d : Math.max(2, Math.min(10, 10 - Math.ceil(Math.max(0, 1080 - Z) / X))), {
      canonicalRecencyById: ee,
      nodesByRef: et,
      overflowIds: en,
      pinnedIdSet: ea,
      pinnedIds: er,
      systemItemsByKey: el,
      visiblePinnedIds: ei,
      visibleRecentIds: eo
    } = (0, r.useMemo)(() => (function({
      collapsed: e,
      effectiveMaxTotal: t,
      maxRecentFill: n,
      minRecents: a,
      nodes: r,
      previousRecencyById: l,
      previousVisibleRecentIds: i,
      systemItems: o
    }) {
      let s, c = new Map(r.map(e => [e.artifactRef, e])),
        u = new Map(o.map(e => [e.itemKey, e])),
        d = o.filter(e => !e.isFavorite && !0 !== e.isPinnedLocked).sort((e, t) => e.title.localeCompare(t.title) || e.itemKey.localeCompare(t.itemKey)).map(e => aQ(e.itemKey)),
        h = [...r.filter(e => e.isPinned).map(e => ({
          id: a$(e.artifactRef),
          isPinnedLocked: !1,
          favoriteOrder: e.pinnedOrder ?? Number.MAX_SAFE_INTEGER
        })), ...o.filter(e => e.isFavorite || !0 === e.isPinnedLocked).map(e => ({
          id: aQ(e.itemKey),
          isPinnedLocked: !0 === e.isPinnedLocked,
          favoriteOrder: e.favoriteOrder ?? Number.MAX_SAFE_INTEGER
        }))].sort((e, t) => Number(t.isPinnedLocked) - Number(e.isPinnedLocked) || e.favoriteOrder - t.favoriteOrder || e.id.localeCompare(t.id)).map(e => e.id),
        f = [...[...r.filter(e => !e.isPinned && null != e.lastOpenedAtMs).map((e, t) => ({
          id: a$(e.artifactRef),
          order: t,
          recencyMs: (0, az.nodeRecencyMs)(e)
        })), ...o.filter(e => !e.isFavorite && !0 !== e.isPinnedLocked && null != e.accessedAtMs).map(e => ({
          id: aQ(e.itemKey),
          order: Number.MAX_SAFE_INTEGER,
          recencyMs: e.accessedAtMs ?? 0
        }))].sort((e, t) => t.recencyMs - e.recencyMs || e.order - t.order || e.id.localeCompare(t.id)).map(e => e.id), ...r.filter(e => !e.isPinned && null == e.lastOpenedAtMs).sort((e, t) => (t.updatedAtMs ?? 0) - (e.updatedAtMs ?? 0) || e.artifactRef.localeCompare(t.artifactRef)).map(e => a$(e.artifactRef))],
        m = [...new Set([...h, ...f, ...d])],
        p = [...r.map(e => ({
          id: a$(e.artifactRef),
          recencyMs: (0, az.nodeRecencyMs)(e)
        })), ...o.filter(e => !e.isFavorite && !0 !== e.isPinnedLocked).map(e => ({
          id: aQ(e.itemKey),
          recencyMs: e.accessedAtMs ?? 0
        }))].sort((e, t) => t.recencyMs - e.recencyMs || e.id.localeCompare(t.id)),
        g = p.map(e => e.id),
        v = new Map(p.map(e => [e.id, e.recencyMs])),
        C = new Set(h),
        y = e => {
          let t = aX(e);
          if (null != t) return c.get(t)?.displayName ?? t;
          let n = aZ(e);
          return null != n ? u.get(n)?.title ?? n : e
        },
        _ = (e, t = new Set) => {
          let n = g.filter(e => !t.has(e));
          return e <= 0 ? [] : function({
            canonicalIds: e,
            currentRecencyById: t,
            limit: n,
            previousRecencyById: a,
            previousVisibleIds: r
          }) {
            if (n <= 0) return [];
            if (0 === r.length) return e.slice(0, n);
            let l = new Set(e),
              i = r.filter(e => l.has(e)),
              o = new Set(i),
              s = e.filter(e => {
                if (o.has(e)) return !1;
                let n = a.get(e),
                  r = t.get(e) ?? 0;
                return null == n || r > n
              }).slice(0, n),
              c = i.slice(0, Math.max(0, n - s.length)),
              u = [...s, ...c],
              d = new Set(u);
            for (let t of e) {
              if (u.length >= n) break;
              d.has(t) || (u.push(t), d.add(t))
            }
            return u
          }({
            canonicalIds: n,
            currentRecencyById: v,
            limit: e,
            previousRecencyById: l,
            previousVisibleIds: i.filter(e => !t.has(e))
          })
        },
        b = e => [...e].sort((e, t) => {
          let n = aZ(e),
            a = aZ(t),
            r = null != n && u.get(n)?.isFavorite !== !0;
          return r !== (null != a && u.get(a)?.isFavorite !== !0) ? r ? -1 : 1 : y(e).localeCompare(y(t))
        }),
        S = e => {
          let r = Math.max(0, t - !!e),
            l = new Set(h),
            i = ((e, t, n) => {
              let r = f.filter(e => !t.has(e)).length;
              if (0 === r || e <= 0) return 0;
              let l = Math.min(a, r, e);
              return Math.max(Math.min(1, r, e), Math.min(l, Math.max(0, e - n)))
            })(r, l, h.length),
            o = h.slice(0, Math.max(0, r - i)),
            s = _(Math.min(Math.max(0, r - o.length), Math.max(a, n - o.length)), l),
            c = new Set([...o, ...s]);
          return {
            visiblePinnedIds: o,
            visibleRecentIds: s,
            overflowIds: b(m.filter(e => !c.has(e)))
          }
        };
      if (e || h.length > 0) {
        let n = S(!1);
        s = (e ? n.overflowIds.some(e => C.has(e)) || d.length > 0 : n.overflowIds.length > 0) && t > 0 ? S(!0) : n
      } else {
        let e = _(Math.min(Math.max(0, m.length > t ? t - 1 : t), n)),
          a = new Set(e);
        s = {
          visiblePinnedIds: [],
          visibleRecentIds: e,
          overflowIds: b(m.filter(e => !a.has(e)))
        }
      }
      let x = s.overflowIds.some(e => C.has(e));
      return {
        canonicalRecencyById: v,
        nodesByRef: c,
        overflowIds: !e || x || d.length > 0 ? s.overflowIds : [],
        pinnedIdSet: C,
        pinnedIds: h,
        systemItemsByKey: u,
        visiblePinnedIds: s.visiblePinnedIds,
        visibleRecentIds: s.visibleRecentIds
      }
    })({
      collapsed: o,
      effectiveMaxTotal: J,
      maxRecentFill: f,
      minRecents: m,
      nodes: e,
      previousRecencyById: P.current,
      previousVisibleRecentIds: H.current,
      systemItems: t
    }), [o, J, f, m, e, t]), es = (0, r.useCallback)(e => {
      let t = aX(e);
      if (null != t) {
        let n = et.get(t);
        return null != n ? {
          kind: "artifact",
          id: e,
          node: n
        } : null
      }
      let n = aZ(e);
      if (null != n) {
        let t = el.get(n);
        return null != t ? {
          kind: "system",
          id: e,
          item: t
        } : null
      }
      return null
    }, [et, el]);
    (0, r.useEffect)(() => {
      H.current = [...eo], P.current = ee
    }, [ee, eo]);
    let eu = null != R && en.includes(R),
      ed = en.length > 0,
      eh = (0, r.useMemo)(() => {
        for (let e of en) {
          let t = aZ(e),
            n = null == t ? null : el.get(t);
          if (n?.highlighted === !0 && (n.notificationCount ?? 0) <= 0) return n.title
        }
      }, [en, el]);
    (0, r.useEffect)(() => {
      E?.(en)
    }, [E, en]), (0, r.useEffect)(() => {
      ed || q(!1)
    }, [ed, q]);
    let ef = (0, r.useCallback)(() => {
      Q.current?.(), Q.current = null, $.current = null, D(null), M(null), F(!1), z(!1)
    }, []);
    (0, r.useEffect)(() => () => {
      Q.current?.(), Q.current = null
    }, []);
    let em = (0, r.useCallback)((e, t) => {
      Q.current?.();
      let n = () => ef(),
        a = {
          once: !0
        };
      t?.addEventListener("dragend", n, a), document.addEventListener("dragend", n, a), document.addEventListener("drop", n, a), window.addEventListener("dragend", n, a), window.addEventListener("drop", n, a), Q.current = () => {
        t?.removeEventListener("dragend", n), document.removeEventListener("dragend", n), document.removeEventListener("drop", n), window.removeEventListener("dragend", n), window.removeEventListener("drop", n)
      }, $.current = e, (0, as.flushSync)(() => {
        D(e)
      })
    }, [ef]);
    (0, r.useImperativeHandle)(A, () => ({
      startDrag: e => {
        aJ(e) && em({
          type: "rail_item",
          itemId: e
        })
      },
      endDrag: ef
    }), [ef, em]);
    let ep = (0, r.useCallback)(e => (function(e) {
        let t = e.dataTransfer.getData(a0);
        if (!t) return null;
        try {
          let e = JSON.parse(t);
          if ("object" == typeof e && null != e && "rail_item" === e.type && "string" == typeof e.itemId && aJ(e.itemId)) return {
            type: "rail_item",
            itemId: e.itemId
          }
        } catch {}
        return null
      })(e) ?? $.current, []),
      eg = e => {
        let t = es(e);
        return null != t && ("artifact" === t.kind ? t.node.capabilities.canPin : !0 !== t.item.isPinnedLocked)
      },
      ev = (0, r.useCallback)(() => t.reduce((e, t) => t.isFavorite && null != t.favoriteOrder && t.favoriteOrder > e ? t.favoriteOrder : e, 0) + 1, [t]),
      eC = (0, r.useCallback)(e => {
        if ("__pinned_zone__" === e.itemId) return er.length;
        let t = er.indexOf(e.itemId);
        return -1 !== t ? "before" === e.edge ? t : t + 1 : null
      }, [er]),
      ey = (0, r.useCallback)(e => {
        if (null == j || null == L || L.itemId !== e) return null;
        let t = eC(L);
        if (null == t) return null;
        let n = er.indexOf(j.itemId);
        return -1 !== n && (t === n || t === n + 1) ? null : L.edge
      }, [j, L, er, eC]),
      e_ = (0, r.useCallback)((e, t) => {
        if (null == b) return;
        let n = er.map(e => aX(e)).filter(t => null != t && t !== e),
          a = er.slice(t).map(e => aX(e)).filter(t => null != t && t !== e),
          r = er.slice(0, t).map(e => aX(e)).filter(t => null != t && t !== e);
        null != a[0] ? b(e, !0, {
          before_artifact_ref: a[0]
        }) : r.length > 0 ? b(e, !0, {
          after_artifact_ref: r[r.length - 1]
        }) : (n.length, b(e, !0))
      }, [b, er]),
      eb = (0, r.useCallback)((e, t) => {
        let n = er.filter(e => e !== t && null != aZ(e)).map(e => {
            let t = aZ(e),
              n = null != t ? el.get(t) : void 0;
            return n?.isPinnedLocked === !0 ? 0 : n?.favoriteOrder ?? null
          }).filter(e => null != e),
          a = er.slice(0, e).filter(e => e !== t && null != aZ(e)).length;
        return (0, az.computeFractionalFavoriteOrder)(n, a)
      }, [er, el]),
      eS = (0, r.useCallback)(e => {
        e.preventDefault(), e.stopPropagation();
        let t = ep(e);
        if (null == t || null == L) return void ef();
        let n = eC(L),
          a = es(t.itemId);
        null == n || null == a || ("artifact" === a.kind ? a.node.capabilities.canPin && (e_(a.node.artifactRef, n), T({
          eventName: t9.HatchClickEvent.SPACE_REORDER_DRAG,
          actionTarget: "sidebar_spaces_rail",
          actionType: "drag",
          metadata: {
            navigation_surface: "desktop",
            reordered_item_type: "artifact",
            target_index: n
          },
          targetArea: "nav_button"
        })) : !0 !== a.item.isPinnedLocked && (S?.(a.item.itemKey, eb(n, t.itemId)), T({
          eventName: t9.HatchClickEvent.SPACE_REORDER_DRAG,
          actionTarget: "sidebar_spaces_rail",
          actionType: "drag",
          metadata: {
            navigation_surface: "desktop",
            reordered_item_type: "system",
            target_index: n
          },
          targetArea: "nav_button"
        }))), ef()
      }, [ef, eb, L, T, S, e_, es, ep, eC]),
      ex = (0, r.useCallback)(e => {
        null != ep(e) && (e.preventDefault(), e.dataTransfer.dropEffect = "move", F(!0), 0 === ei.length && M({
          itemId: "__pinned_zone__",
          edge: "after"
        }))
      }, [ep, ei.length]),
      ek = (0, r.useCallback)(e => {
        null == K.current || K.current.contains(e.relatedTarget) || (F(!1), M(e => e?.itemId === "__pinned_zone__" ? null : e))
      }, []),
      eE = (0, r.useCallback)(e => {
        (e.target === e.currentTarget || 0 === ei.length) && eS(e), F(!1)
      }, [eS, ei.length]),
      eA = (0, r.useCallback)((e, t) => {
        let n, a, r = ep(e);
        if (null == r) return;
        let l = ea.has(t),
          i = (a = (n = e.currentTarget.getBoundingClientRect()).top + n.height / 2, e.clientY < a ? "before" : "after"),
          o = t;
        if ("after" === i && l) {
          let e = er.indexOf(t),
            n = -1 !== e ? er[e + 1] : void 0;
          null != n && ei.includes(n) && (o = n, i = "before")
        }
        let s = {
            itemId: o,
            edge: i
          },
          c = eC(s),
          u = ea.has(r.itemId);
        null == c && !u || eg(r.itemId) && (e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "move", M(e => null != e && e.itemId === o && e.edge === i ? e : s))
      }, [ea, er, ep, eC, ei]),
      eT = (0, r.useCallback)(e => {
        e.preventDefault(), e.stopPropagation();
        let t = ep(e);
        if (null == t) return void ef();
        if (ea.has(t.itemId)) {
          let e = es(t.itemId);
          e?.kind === "artifact" && e.node.capabilities.canPin ? b?.(e.node.artifactRef, !1) : e?.kind === "system" && !0 !== e.item.isPinnedLocked && S?.(e.item.itemKey, null)
        }
        ef()
      }, [ef, b, S, ea, es, ep]),
      ew = (0, r.useCallback)(e => {
        let t = ep(e);
        null != t && ea.has(t.itemId) && eg(t.itemId) && (e.preventDefault(), e.dataTransfer.dropEffect = "move", z(!0))
      }, [ea, ep]),
      eR = (0, r.useCallback)(e => {
        null == B.current || B.current.contains(e.relatedTarget) || z(!1)
      }, []),
      eH = (0, r.useCallback)(e => {
        (0, aK.artifactNavigation)(e.openTarget)
      }, []),
      eP = tm.fbs._("Couldn't load artifact", null, {
        hk: "2jOBLr"
      }),
      eI = (0, r.useCallback)((e, t) => {
        let a = a$(e.artifactRef),
          r = e.isPinned,
          l = t?.shownAsRecent === !0 && null != v ? t => v(e, t) : void 0;
        return (0, n.jsx)(s.EctoErrorBoundary, {
          surface: ec.HATCH_SENTRY_SURFACES.SPACE,
          fallback: ({
            reset: e
          }) => (0, n.jsx)(aR.HatchSpacesErrorFallback, {
            surface: "rail-item",
            compact: !0,
            compactItemGap: c,
            compactItemSize: u,
            compactLabel: o ? void 0 : eP,
            includeSavedSpaces: !0,
            reset: e
          }),
          children: (0, n.jsx)(a9, {
            node: e,
            isSelected: null == I && R === a,
            isFavorite: r,
            isDragging: j?.itemId === a,
            collapsed: o,
            collapsedItemSize: u,
            collapsedItemGap: c,
            dropEdge: ey(a),
            onClick: () => {
              t?.closeOverflowOnOpen === !0 && q(!1), R !== a && N(a), p(e)
            },
            onDragStart: e => {
              let t = {
                type: "rail_item",
                itemId: a
              };
              a1(e, t), em(t, e.currentTarget)
            },
            onDragEnd: ef,
            onDragOver: e => eA(e, a),
            onDragLeave: () => M(e => e?.itemId === a ? null : e),
            onDrop: eS,
            onPointerEnter: () => eH(e),
            onToggleFavorite: null != b && e.capabilities.canPin ? () => {
              e.isPinned ? b(e.artifactRef, !1) : b(e.artifactRef, !0)
            } : void 0,
            onRemoveRecent: l,
            canCreateShare: w,
            onShare: null != _ && e.capabilities.canShare && "space" === e.openTarget.kind ? t => _(e, t) : void 0,
            onDelete: null != y && e.capabilities.canDelete ? () => y(e) : void 0
          })
        })
      }, [ef, w, o, c, u, j, ey, eA, eS, y, p, b, v, _, I, eH, R, em, q, eP]),
      eN = (0, r.useCallback)((e, t) => {
        if (null == g) return null;
        let r = aQ(e.itemKey);
        return (0, n.jsx)(s.EctoErrorBoundary, {
          surface: ec.HATCH_SENTRY_SURFACES.NAVIGATION,
          children: (0, n.jsx)(re, {
            item: e,
            isSelected: null == I && R === r,
            collapsed: o,
            collapsedItemSize: u,
            collapsedItemGap: c,
            isDragging: j?.itemId === r,
            dropEdge: ey(r),
            onClick: () => {
              t?.closeOverflowOnOpen === !0 && q(!1), R !== r && N(r), g(e.itemKey)
            },
            onDragStart: e => {
              let t = {
                type: "rail_item",
                itemId: r
              };
              a1(e, t), em(t, e.currentTarget)
            },
            onDragEnd: ef,
            onDragOver: e => eA(e, r),
            onDragLeave: () => M(e => e?.itemId === r ? null : e),
            onDrop: eS,
            isDraggable: a && !0 !== e.isPinnedLocked,
            onToggleFavorite: null == S || !0 === e.isAlwaysPinned || !0 === e.isPinnedLocked ? void 0 : () => {
              e.isFavorite ? S(e.itemKey, null) : S(e.itemKey, ev())
            },
            onRemoveRecent: t?.shownAsRecent === !0 && null != C && null != e.accessedAtMs ? t => C(e.itemKey, t) : void 0
          })
        })
      }, [ef, o, c, u, j, ey, eA, eS, ev, g, C, S, I, R, em, q, a]),
      ej = (0, r.useCallback)((e, t) => {
        let n = es(e);
        return null == n ? null : "artifact" === n.kind ? eI(n.node, t) : eN(n.item, t)
      }, [es, eI, eN]);
    if (0 === e.length && 0 === t.length) return null;
    let eD = ei.length > 0,
      eL = null != j && !ea.has(j.itemId) && eo.includes(j.itemId) ? j.itemId : null,
      eM = null != eL,
      eO = null == eL ? eo : eo.filter(e => e !== eL),
      eF = eD || eM,
      eU = eO.length > 0 || ed,
      ez = h + ei.length + eO.length;
    return (0, n.jsx)(n.Fragment, {
      children: (0, n.jsx)("div", {
        className: (0, tk.cn)("transition-[padding] duration-200", o ? "px-0 py-0" : "px-2 pt-2 pb-2"),
        children: (0, n.jsxs)(t_, {
          id: "sidebar-spaces",
          children: [(0, n.jsx)(tW.AnimatePresence, {
            initial: !o,
            children: eF && (0, n.jsxs)(tb.motion.div, {
              initial: {
                opacity: 0,
                height: 0
              },
              animate: {
                opacity: 1,
                height: "auto"
              },
              exit: {
                opacity: 0,
                height: 0
              },
              transition: {
                duration: .2
              },
              children: [!o && (0, n.jsx)("div", {
                className: "flex items-center justify-between ps-2 pe-1 pt-1 pb-1 whitespace-nowrap",
                children: (0, n.jsx)("span", {
                  className: "text-subheadline-emphasized text-text-secondary",
                  children: tm.fbs._("Pinned", null, {
                    hk: "458a0O"
                  })
                })
              }), (0, n.jsxs)("div", {
                ref: K,
                onDragOver: ex,
                onDragLeave: ek,
                onDrop: eE,
                className: (0, tk.cn)("squircle-24 flex flex-col items-stretch transition-colors duration-150", !o && "gap-px border-2 border-transparent", !o && O && eM && "border-fill-divider border-dashed"),
                children: [(0, n.jsx)(tW.AnimatePresence, {
                  initial: !1,
                  children: ei.map((e, t) => (0, n.jsx)(aA, {
                    layoutId: `rail-item-${e}`,
                    children: (0, n.jsx)("div", {
                      className: "hatch-dock-reveal-item",
                      style: {
                        animationDelay: `${(h+t)*n6.HATCH_DOCK_REVEAL_STAGGER_MS}ms`
                      },
                      children: ej(e)
                    })
                  }, e))
                }), eM && (0, n.jsxs)("div", {
                  className: (0, tk.cn)("flex items-center justify-center transition-colors duration-150", o ? "w-full" : "py-3"),
                  style: o ? {
                    minHeight: u,
                    paddingBlock: c / 2
                  } : void 0,
                  onDragOver: e => {
                    e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "move", M({
                      itemId: "__pinned_zone__",
                      edge: "after"
                    }), F(!0)
                  },
                  onDrop: eS,
                  children: [(0, n.jsx)("span", {
                    "data-testid": "hatch-spaces-rail-drop-to-pin-icon",
                    className: (0, tk.cn)("flex shrink-0 items-center justify-center rounded-full transition-colors", O ? "bg-fill-secondary text-text-primary" : "bg-fill-secondary-elevated text-text-primary dark:bg-fill-primary"),
                    style: {
                      width: o ? u : 32,
                      height: o ? u : 32
                    },
                    children: (0, n.jsx)(nJ.HatchIcon, {
                      icon: a_.default,
                      size: o ? Math.round(2 / 3 * u) : 20,
                      className: "text-text-primary"
                    })
                  }), (0, n.jsx)("span", {
                    className: "sr-only",
                    children: tm.fbs._("Drop to pin", null, {
                      hk: "2YUhG9"
                    })
                  })]
                })]
              })]
            }, "pinned-section")
          }), o && eU && (0, n.jsx)("div", {
            "data-testid": "hatch-spaces-rail-pinned-separator",
            className: "flex items-center justify-center",
            style: {
              height: n6.HATCH_DOCK_PINNED_RECENTS_DIVIDER_HEIGHT
            },
            children: (0, n.jsx)("div", {
              className: "bg-fill-divider h-px w-7"
            })
          }), eU && (0, n.jsxs)(n.Fragment, {
            children: [!o && (0, n.jsx)("div", {
              className: "flex items-center justify-between ps-2 pe-1 pt-1 pb-1 whitespace-nowrap",
              children: (0, n.jsx)("span", {
                className: "text-subheadline-emphasized text-text-secondary",
                children: tm.fbs._("All artifacts", null, {
                  hk: "36hpwR"
                })
              })
            }), (0, n.jsxs)("div", {
              ref: B,
              className: (0, tk.cn)("squircle-24 flex flex-col items-stretch transition-colors duration-150", !o && "gap-px border-2 border-transparent", !o && U && "border-fill-divider border-dashed"),
              onDragOver: ew,
              onDragLeave: eR,
              onDrop: eT,
              children: [(0, n.jsx)(tW.AnimatePresence, {
                initial: !1,
                children: eO.map((e, t) => (0, n.jsx)(aA, {
                  layoutId: `rail-item-${e}`,
                  children: (0, n.jsx)("div", {
                    className: "hatch-dock-reveal-item",
                    style: {
                      animationDelay: `${(h+ei.length+t)*n6.HATCH_DOCK_REVEAL_STAGGER_MS}ms`
                    },
                    children: ej(e, {
                      shownAsRecent: !0
                    })
                  })
                }, e))
              }), ed && (0, n.jsx)(a2, {
                collapsed: o,
                collapsedItemSize: u,
                collapsedItemGap: c,
                count: en.length,
                isOpen: Y,
                isSelected: eu,
                highlightedDestination: eh,
                onOpenChange: q,
                revealIndex: ez,
                children: en.map(e => (0, n.jsx)(r.Fragment, {
                  children: ej(e, {
                    closeOverflowOnOpen: !0
                  })
                }, e))
              })]
            })]
          })]
        })
      })
    })
  }
  var ra = e.i(408384),
    rr = e.i(992),
    rl = e.i(582002),
    ri = e.i(246586),
    ro = e.i(490878),
    rs = e.i(875666),
    rc = e.i(617760),
    ru = e.i(544366),
    rd = e.i(384784),
    rh = e.i(243391),
    rf = e.i(189482),
    rm = e.i(616086),
    rp = e.i(846664),
    rg = e.i(136645),
    rv = e.i(778190),
    rC = e.i(654764),
    ry = e.i(351321),
    r_ = e.i(417996),
    rb = e.i(435265),
    rS = e.i(454879),
    rx = e.i(47247),
    rk = e.i(782361),
    rE = e.i(789078),
    rA = e.i(713140),
    rT = e.i(941807),
    rw = e.i(743920),
    rR = e.i(58746),
    rH = e.i(9982);

  function rP(e) {
    return null == e ? void 0 : (0, rH.attachVoiceCallAvatar)("rail", e)
  }

  function rI(e) {
    let t, r, l = (0, a.c)(7),
      {
        ariaLabel: i,
        avatarHidden: o,
        enabled: s,
        requestActive: c
      } = e;
    (0, t7.useRequestHatchAvatarStage)("collapsed-dock", c);
    let u = (0, rR.useVoiceCallAvatarSlotsEnabled)() ? rP : void 0;
    return l[0] !== u ? (t = (0, n.jsx)("div", {
      ref: u,
      className: "size-12 rounded-full opacity-0"
    }), l[0] = u, l[1] = t) : t = l[1], l[2] !== i || l[3] !== o || l[4] !== s || l[5] !== t ? (r = (0, n.jsx)(ne.HatchAvatarStage, {
      ariaLabel: i,
      avatarHidden: o,
      enabled: s,
      className: "pointer-events-none absolute inset-0 m-auto size-12 -translate-y-2",
      growthOrigin: "top-left",
      pointerMode: "passthrough",
      priority: 200,
      stageId: "collapsed-dock",
      variant: "avatarOnly",
      children: t
    }), l[2] = i, l[3] = o, l[4] = s, l[5] = t, l[6] = r) : r = l[6], r
  }
  var rN = e.i(276764);
  let rj = {
    key: ",",
    modifiers: {
      meta: !0
    }
  };
  var rD = e.i(492049);

  function rL(e) {
    let t, r, l, i, o, s = (0, a.c)(10);
    return s[0] !== e.title ? (t = null != e.title && (0, n.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = t) : t = s[1], s[2] !== e.children ? (r = null != e.children && (0, n.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = r) : r = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"
    }), i = (0, n.jsx)("path", {
      d: "M12.054 17.999a1.062 1.062 0 0 1-.108 0 .995.995 0 0 1-.653-.292l-4-4a1 1 0 1 1 1.414-1.414L11 14.586V7a1 1 0 1 1 2 0v7.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1.006 1.006 0 0 1-.653.292z"
    }), s[4] = l, s[5] = i) : (l = s[4], i = s[5]), s[6] !== e || s[7] !== t || s[8] !== r ? (o = (0, n.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [t, r, l, i]
    }), s[6] = e, s[7] = t, s[8] = r, s[9] = o) : o = s[9], o
  }
  rL._isSVG = !0;
  var rM = e.i(567936),
    rO = e.i(334765),
    rF = e.i(785580),
    rU = e.i(7371),
    rz = e.i(437081),
    rK = e.i(525594),
    rB = e.i(612362),
    rV = e.i(516191),
    rW = e.i(355200),
    rG = e.i(706865);
  let rY = "cursor-e-resize rtl:cursor-w-resize",
    rq = "cursor-w-resize rtl:cursor-e-resize";

  function r$({
    panelSide: e,
    panelWidth: t,
    minWidth: a,
    maxWidth: l,
    onPointerDown: i,
    isDragging: o,
    onNudgeWidth: s,
    onResetWidth: c,
    onCollapse: u,
    collapseSubsurface: d,
    panelLabel: h,
    showDividerAtRest: f = !1,
    className: m
  }) {
    let p = (0, t5.useInteractionLogger)(),
      g = (0, tx.useDirection)(),
      v = (0, r.useRef)(null);
    (0, r.useEffect)(() => () => v.current?.(), []);
    let C = null != u,
      y = ng({
        isDragging: o,
        onPointerDown: (0, r.useCallback)(e => {
          let t = e.pointerType,
            n = null != t && t.length > 0 && !1 === e.isPrimary;
          if (0 !== e.button || n || null != v.current || (i(e), null == u)) return;
          let a = new AbortController,
            {
              signal: r
            } = a,
            l = () => {
              a.abort(), v.current = null
            };
          v.current = l;
          let o = e.clientX,
            s = e.clientY,
            c = e.pointerId,
            h = !1;
          v.current = l, document.addEventListener("pointermove", e => {
            e.pointerId === c && (Math.abs(e.clientX - o) > 4 || Math.abs(e.clientY - s) > 4) && (h = !0)
          }, {
            signal: r
          }), document.addEventListener("pointerup", e => {
            if (e.pointerId !== c) return;
            let t = Math.abs(e.clientX - o) > 4 || Math.abs(e.clientY - s) > 4,
              n = !h && !t;
            l(), n && (p({
              eventName: t9.HatchClickEvent.PANEL_RESIZE_HANDLE_COLLAPSE_CLICK,
              actionTarget: "panel_resize_handle",
              actionType: "click",
              metadata: {
                surface: "shell",
                subsurface: d
              }
            }), u())
          }, {
            signal: r
          }), document.addEventListener("pointercancel", e => {
            e.pointerId === c && l()
          }, {
            signal: r
          })
        }, [d, p, u, i])
      }),
      _ = np(e, g),
      b = t < l - 1,
      S = "left" === e;
    return (0, n.jsxs)("div", {
      "data-hatch-panel-edge-tooltip-side": _,
      className: (0, tk.cn)("group/resize-handle relative z-20 my-2 w-4 flex-none", m),
      children: [(0, n.jsxs)(nf.Tooltip, {
        open: y.isTooltipOpen,
        onOpenChange: y.handleTooltipOpenChange,
        delayDuration: 700,
        children: [(0, n.jsx)(nf.TooltipTrigger, {
          asChild: !0,
          children: (0, n.jsx)("div", {
            role: "separator",
            tabIndex: 0,
            "aria-orientation": "vertical",
            "aria-label": tm.fbs._("Resize panel", null, {
              hk: "3FWXgY"
            }),
            "aria-valuenow": Math.round(t),
            "aria-valuemin": Math.round(a),
            "aria-valuemax": Math.round(l),
            onPointerDown: y.handlePointerDown,
            onPointerEnter: y.handlePointerEnter,
            onPointerLeave: y.handlePointerLeave,
            onPointerMove: y.handlePointerMove,
            onPointerUp: y.handlePointerUp,
            onPointerCancel: y.handlePointerCancel,
            onFocus: y.handleFocus,
            onBlur: y.handleBlur,
            onKeyDown: t => {
              if ("Home" === t.key) {
                t.preventDefault(), c();
                return
              }
              if ("ArrowLeft" !== t.key && "ArrowRight" !== t.key) return;
              t.preventDefault();
              let n = t.shiftKey ? 96 : 24;
              s(("right" === ("rtl" === g ? "left" === e ? "right" : "left" : e) ? "ArrowLeft" === t.key : "ArrowRight" === t.key) ? n : -n)
            },
            onDoubleClick: C ? void 0 : c,
            className: (0, tk.cn)("focus-visible:ring-hatch-accent/40 absolute inset-0 touch-none focus-visible:ring-2 focus-visible:outline-none", b === t > a + 1 ? "cursor-ew-resize" : b ? S ? rY : rq : S ? rq : rY),
            "data-hatch-panel-resize-handle-collapsible": C ? "true" : "false"
          })
        }), (0, n.jsx)(nf.TooltipContent, {
          ref: y.handleTooltipContentRef,
          side: _,
          align: "start",
          alignOffset: 12,
          sideOffset: 8,
          className: "will-change-transform",
          subtitle: C && null != h ? tm.fbt._("Click or drag to close", null, {
            hk: "2wLraT"
          }) : C ? tm.fbt._("Drag to resize", null, {
            hk: "fFlBF"
          }) : void 0,
          children: C && null != h ? h : C ? tm.fbt._("Click to collapse", null, {
            hk: "3phlf0"
          }) : tm.fbt._("Drag to resize", null, {
            hk: "1X5Dll"
          })
        })]
      }), (0, n.jsx)("span", {
        ref: y.dividerLineRef,
        "aria-hidden": "true",
        "data-testid": "hatch-panel-resize-divider-line",
        className: (0, tk.cn)("pointer-events-none absolute -inset-y-2 end-0 w-px group-focus-within/resize-handle:bg-transparent group-focus-within/resize-handle:[background-image:var(--panel-resize-divider-focused-gradient)] group-hover/resize-handle:bg-transparent group-hover/resize-handle:[background-image:var(--panel-resize-divider-focused-gradient)]", f && !o ? "bg-fill-divider" : "bg-transparent", o && "[background-image:var(--panel-resize-divider-focused-gradient)]")
      })]
    })
  }
  var rQ = e.i(274797);
  let rX = "hatch:preference:side-panel-chat-width";

  function rZ(e) {
    return `hatch:preference:panel-width-side-panel-${e}`
  }

  function rJ() {
    return Math.max(360, Math.min(440, Math.floor(.38 * window.innerWidth)))
  }
  let r0 = "hatch:preference:panel-width-side-panel-shopping";

  function r1() {
    return Math.max(320, Math.floor((window.innerWidth - 88) * .5))
  }

  function r2() {
    return Math.min(r1(), 400)
  }

  function r3(...e) {
    for (let t of e) {
      if (!t) continue;
      let e = Number.parseFloat(t);
      if (Number.isFinite(e)) return e
    }
    return 0
  }

  function r8(e) {
    let t;
    return null == e ? 99999 : e.clientWidth - (r3((t = window.getComputedStyle(e)).paddingInlineStart, t.paddingLeft) + r3(t.paddingInlineEnd, t.paddingRight))
  }

  function r4(e, t, n = 400) {
    return Math.max(360, Math.min(r5(t, n), Math.round(e)))
  }

  function r5(e, t = 400) {
    let n = Math.floor((e + n6.HATCH_DOCK_RAIL_WIDTH) * .5 - n6.HATCH_DOCK_RAIL_WIDTH);
    return Math.max(360, Math.min(e - t, n))
  }

  function r6(e, t, n = 400) {
    let a = r4(t, e, n);
    return Math.max(n, e - a)
  }

  function r9(e, t, n = 400) {
    let a = Math.max(n, Math.min(e, t));
    return r4(e - a, e)
  }

  function r7(e, t, n = 320) {
    let a;
    return null == e ? 99999 : Math.max(0, r8(e) - (null == t ? 0 : r3((a = window.getComputedStyle(t)).marginInlineStart, a.marginLeft) + r3(a.marginInlineEnd, a.marginRight)) - n)
  }

  function le(e) {
    let t, n, l, i, o, s, c, u, d, h, f, m = (0, a.c)(50),
      {
        chatCollapsed: p,
        controlled: g,
        defaultWidth: v,
        getMaxWidth: C,
        isOpen: y,
        maxWidthRatio: _,
        minWidth: b,
        onClosePreviewChange: S,
        onCollapse: x,
        panelSide: k,
        resizeHandlers: E,
        storageKey: A
      } = e,
      T = void 0 === _ ? .85 : _,
      w = (0, r.useRef)(null),
      [R, H] = (0, r.useState)(null),
      P = g?.defaultWidth,
      I = g?.width,
      N = g?.onCommit,
      j = !0 !== p && null != P && null != I && null != N;
    m[0] !== C || m[1] !== j ? (t = () => C(w.current, j), m[0] = C, m[1] = j, m[2] = t) : t = m[2];
    let D = t,
      L = j ? P : v,
      M = R ?? 1 / 0,
      O = j ? I : void 0,
      F = j ? g?.onPreview : void 0,
      U = j ? N : void 0,
      z = E?.onDragStart,
      K = E?.onDragCancel,
      B = E?.onDragCommit;
    m[3] !== y || m[4] !== T || m[5] !== b || m[6] !== x || m[7] !== k || m[8] !== D || m[9] !== A || m[10] !== B || m[11] !== L || m[12] !== M || m[13] !== O || m[14] !== F || m[15] !== U || m[16] !== z || m[17] !== K ? (n = {
      side: k,
      isOpen: y,
      onCollapse: x,
      minWidth: b,
      defaultWidth: L,
      maxWidthRatio: T,
      getMaxWidth: D,
      renderMaxWidth: M,
      controlledWidth: O,
      onWidthPreview: F,
      onWidthCommit: U,
      storageKey: A,
      resizeMode: "deferred",
      onDragStart: z,
      onDragCancel: K,
      onDragCommit: B
    }, m[3] = y, m[4] = T, m[5] = b, m[6] = x, m[7] = k, m[8] = D, m[9] = A, m[10] = B, m[11] = L, m[12] = M, m[13] = O, m[14] = F, m[15] = U, m[16] = z, m[17] = K, m[18] = n) : n = m[18];
    let V = function({
        side: e,
        isOpen: t = !0,
        onCollapse: n,
        minWidth: a = 280,
        defaultWidth: l = 360,
        maxWidthRatio: i = .5,
        getMaxWidth: o,
        renderMaxWidth: s,
        controlledWidth: c,
        onWidthPreview: u,
        onWidthCommit: d,
        storageKey: h,
        resizeMode: f = "live",
        onDragStart: m,
        onDragCancel: p,
        onDragCommit: g
      }) {
        let v = (0, r.useRef)(o);
        v.current = o;
        let C = (0, r.useRef)(m);
        C.current = m;
        let y = (0, r.useRef)(p);
        y.current = p;
        let _ = (0, r.useRef)(g);
        _.current = g;
        let b = (0, r.useRef)(d);
        b.current = d;
        let S = (0, r.useRef)(u);
        S.current = u;
        let x = null != c,
          k = h ?? e,
          [E, A] = (0, r.useState)(l);
        (0, r.useEffect)(() => {
          let e = function(e) {
            let t = localStorage.getItem(nr + e);
            if (null == t) return null;
            let n = Number(t);
            return Number.isFinite(n) && n >= 280 && n <= 1200 ? n : null
          }(k);
          null != e && e >= a && A(e)
        }, [k, a]);
        let [T, w] = (0, r.useState)(!1), [R, H] = (0, r.useState)(nl), P = (0, r.useRef)(nl), I = (0, r.useCallback)(e => {
          !ni(P.current, e) && (P.current = e, H(e), "deferred" === f && x && S.current?.(e.isCollapsedByDrag ? null : e.dragPreviewWidth))
        }, [x, f]), N = (0, r.useCallback)(e => {
          !ni(P.current, nl) && (P.current = nl, e && H(nl), "deferred" === f && x && S.current?.(null))
        }, [x, f]), {
          dragPreviewWidth: j,
          isCollapsedByDrag: D
        } = R, L = (0, r.useRef)(null), [M, O] = (0, r.useState)(!1), F = (0, r.useRef)(null), [, U] = (0, r.useState)(0);
        (0, r.useEffect)(() => {
          let e = () => {
            U(e => e + 1), O(!0), F.current && clearTimeout(F.current), F.current = setTimeout(() => O(!1), 100)
          };
          return window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e), F.current && clearTimeout(F.current)
          }
        }, []);
        let z = Math.min(c ?? E, s ?? (v.current ? v.current() : Math.floor(window.innerWidth * i))),
          K = "deferred" === f ? j ?? z : z,
          B = (0, r.useRef)(null),
          V = (0, r.useRef)(null);
        (0, r.useLayoutEffect)(() => () => {
          null != L.current && (cancelAnimationFrame(L.current), L.current = null), V.current?.(!1)
        }, []), (0, r.useLayoutEffect)(() => {
          t || V.current?.(!0)
        }, [t]);
        let W = (0, r.useRef)(n);
        W.current = n;
        let G = no(a),
          Y = (0, r.useCallback)(n => {
            let r = n.pointerType,
              l = null != r && r.length > 0 && !1 === n.isPrimary;
            if (!t || 0 !== n.button || l || null != B.current) return;
            n.preventDefault(), null != L.current && (cancelAnimationFrame(L.current), L.current = null);
            let o = n.currentTarget;
            o.setPointerCapture(n.pointerId), B.current = {
              startX: n.clientX,
              startWidth: z,
              pointerId: n.pointerId,
              target: o,
              physicalSide: ns(e, o)
            }, "deferred" === f ? (I({
              dragPreviewWidth: z,
              isCollapsedByDrag: !1
            }), C.current?.()) : I(nl), w(!0);
            let s = null,
              c = null,
              u = e => {
                let t = B.current;
                if (null == t) return;
                let n = "left" === t.physicalSide ? e - t.startX : t.startX - e,
                  r = t.startWidth + n;
                if (null != W.current && r <= G) return void I({
                  dragPreviewWidth: P.current.dragPreviewWidth,
                  isCollapsedByDrag: !0
                });
                let l = Math.max(a, Math.min(v.current ? v.current() : Math.floor(window.innerWidth * i), r));
                "deferred" === f ? I({
                  dragPreviewWidth: l,
                  isCollapsedByDrag: !1
                }) : x ? (I(nl), b.current?.(l)) : (I(nl), A(l))
              },
              d = () => {
                null != c && (cancelAnimationFrame(c), c = null), s = null, V.current = null, document.removeEventListener("pointermove", m), document.removeEventListener("pointerup", g), document.removeEventListener("pointercancel", p)
              },
              h = e => {
                let t = B.current;
                null != t && (nc(t.target, t.pointerId), B.current = null, d(), e && w(!1), N(e), y.current?.())
              },
              m = e => {
                let t = B.current;
                t && e.pointerId === t.pointerId && ("deferred" === f ? (e => {
                  if (s = e, null != c) return;
                  c = -1;
                  let t = requestAnimationFrame(() => {
                    c = null;
                    let e = s;
                    s = null, null != e && u(e)
                  });
                  null != c && (c = t)
                })(e.clientX) : u(e.clientX))
              },
              p = e => {
                let t = B.current;
                null != t && e.pointerId === t.pointerId && h(!0)
              },
              g = e => {
                let t = B.current;
                if (null == t || e.pointerId !== t.pointerId) return;
                nc(t.target, t.pointerId), B.current = null;
                let n = "left" === t.physicalSide ? e.clientX - t.startX : t.startX - e.clientX,
                  r = t.startWidth + n;
                if (null != W.current && r <= G) {
                  w(!1), I({
                    dragPreviewWidth: null,
                    isCollapsedByDrag: !0
                  }), y.current?.(), L.current = -1;
                  let e = requestAnimationFrame(() => {
                    L.current = null, W.current?.()
                  });
                  null != L.current && (L.current = e)
                } else {
                  let e = Math.max(a, Math.min(v.current ? v.current() : Math.floor(window.innerWidth * i), r)),
                    t = () => {
                      w(!1), I(nl), x ? b.current?.(e) : (nu(k, e), A(e))
                    };
                  "deferred" === f && _.current ? _.current(t) : t()
                }
                d()
              };
            document.addEventListener("pointermove", m), document.addEventListener("pointerup", g), document.addEventListener("pointercancel", p), V.current = h
          }, [G, x, t, k, i, a, I, N, f, e, z]),
          q = (0, r.useCallback)(e => {
            let t = Math.max(a, Math.min(v.current ? v.current() : Math.floor(window.innerWidth * i), z + e));
            t !== z && (I(nl), x ? b.current?.(t) : (A(t), nu(k, t)))
          }, [x, k, i, a, I, z]);
        return {
          width: z,
          frameWidth: K,
          contentWidth: z,
          isDragging: T,
          isResizing: T || M,
          isCollapsedByDrag: D,
          handlePointerDown: Y,
          nudgeWidth: q,
          resetWidth: (0, r.useCallback)(() => {
            I(nl), x ? b.current?.(l) : (A(l), nu(k, l))
          }, [l, x, k, I]),
          clearCollapse: (0, r.useCallback)(() => {
            I(nl)
          }, [I])
        }
      }(n),
      {
        clearCollapse: W
      } = V,
      G = y && !V.isCollapsedByDrag;
    m[19] !== D || m[20] !== G ? (l = () => {
      if (!G || null == w.current) return;
      let e = D();
      H(t => t === e ? t : e)
    }, m[19] = D, m[20] = G, m[21] = l) : l = m[21];
    let Y = l,
      q = (0, rQ.useResizeObserver)(Y);
    m[22] !== Y || m[23] !== q || m[24] !== G ? (i = e => {
      (w.current = e, q(G ? e?.parentElement ?? null : null), G) ? Y(): H(null)
    }, m[22] = Y, m[23] = q, m[24] = G, m[25] = i) : i = m[25];
    let $ = i;
    m[26] !== W ? (o = () => {
      W()
    }, m[26] = W, m[27] = o) : o = m[27], m[28] !== W || m[29] !== y ? (s = [W, y], m[28] = W, m[29] = y, m[30] = s) : s = m[30], (0, r.useEffect)(o, s);
    let Q = y && V.isCollapsedByDrag,
      X = S ?? E?.onClosePreviewChange;
    m[31] !== Q || m[32] !== X ? (c = () => {
      if (null != X) return X(Q), () => X(!1)
    }, u = [Q, X], m[31] = Q, m[32] = X, m[33] = c, m[34] = u) : (c = m[33], u = m[34]), (0, r.useLayoutEffect)(c, u);
    let Z = "right" === k ? "start" : "end";
    return m[35] !== V.contentWidth || m[36] !== V.isDragging || m[37] !== Z ? (d = function({
      isDragging: e,
      contentWidth: t,
      alignSelf: n = "center"
    }) {
      return e ? {
        width: t,
        minWidth: t,
        flexShrink: 0,
        alignSelf: n
      } : {
        minWidth: t
      }
    }({
      isDragging: V.isDragging,
      contentWidth: V.contentWidth,
      alignSelf: Z
    }), m[35] = V.contentWidth, m[36] = V.isDragging, m[37] = Z, m[38] = d) : d = m[38], m[39] !== p || m[40] !== y || m[41] !== V.frameWidth || m[42] !== V.isCollapsedByDrag ? (h = null == p ? null : function({
      isOpen: e,
      isCollapsedByDrag: t,
      chatCollapsed: n,
      panelWidth: a
    }) {
      return !e || t ? "0 0 0px" : n ? "1 0 0px" : `0 1 ${a}px`
    }({
      isOpen: y,
      isCollapsedByDrag: V.isCollapsedByDrag,
      chatCollapsed: p,
      panelWidth: V.frameWidth
    }), m[39] = p, m[40] = y, m[41] = V.frameWidth, m[42] = V.isCollapsedByDrag, m[43] = h) : h = m[43], m[44] !== $ || m[45] !== R || m[46] !== V || m[47] !== d || m[48] !== h ? (f = {
      ...V,
      contentStyle: d,
      flexValue: h,
      frameRef: $,
      maxWidth: R
    }, m[44] = $, m[45] = R, m[46] = V, m[47] = d, m[48] = h, m[49] = f) : f = m[49], f
  }
  let lt = () => e.A(572579).then(e => ({
      default: e.HatchChatSearchPopover
    })),
    ln = () => (0, r.lazy)(lt);

  function la(e) {
    let t, l, i, o, c, u, d, h, f, m, p, g, v, C, y, _, b, S, x, k, E, A, T, w, R, H, P, I = (0, a.c)(113),
      {
        isOpen: N,
        contentEnabled: j,
        canOpenFromEdge: D,
        canPinFromEdge: L,
        onOpenFromEdge: M,
        onPinFromEdge: O,
        onOpenDragProgressChange: F,
        width: U,
        onWidthPreview: z,
        onWidthCommit: K,
        activeThreadSessionId: B,
        onClose: V,
        onSelectMainChat: W,
        onSelectThread: G,
        onSelectMessage: Y,
        onNewSideChat: q,
        canPin: $,
        isPinned: Q,
        onPinnedChange: X,
        pendingSearchQuery: Z,
        onPendingSearchQueryConsumed: J,
        dataEnabled: ee,
        onClosePreviewChange: et
      } = e,
      en = void 0 === j || j,
      ea = void 0 !== D && D,
      er = void 0 !== L && L,
      el = void 0 === M ? lo : M,
      ei = (0, t5.useInteractionLoggerWithLazyData)(),
      {
        Component: eo,
        retry: es
      } = (0, rK.useRetryableLazy)(ln, lt),
      [eu, ed] = (0, r.useState)(""),
      [eh, ef] = (0, r.useState)("threads"),
      em = (0, r.useRef)(null),
      ep = (0, r.useRef)(null);
    I[0] === Symbol.for("react.memo_cache_sentinel") ? (t = e => {
      ep.current = e
    }, I[0] = t) : t = I[0];
    let eg = t;
    I[1] !== V ? (l = e => {
      if (["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(e.key)) {
        if (e.preventDefault(), null != ep.current) return void ep.current(e.key);
        "Escape" === e.key && (V(), window.dispatchEvent(new Event(rV.HATCH_FOCUS_SIDE_CHATS_TRIGGER_EVENT)))
      }
    }, I[1] = V, I[2] = l) : l = I[2];
    let ev = l;
    I[3] !== ei ? (i = () => {
      ei({
        eventName: t9.HatchClickEvent.CHAT_SEARCH_CLEAR,
        actionTarget: "chat_search_clear",
        actionType: "click",
        metadata: {
          surface: "chat",
          subsurface: "search"
        }
      }), ed("")
    }, I[3] = ei, I[4] = i) : i = I[4];
    let eC = i;
    I[5] === Symbol.for("react.memo_cache_sentinel") ? (o = {
      eventName: t6.HatchImpressionEvent.CHAT_THREADS_OVERFLOW_IMPRESSION,
      actionTarget: "chat_threads_overflow",
      metadata: {
        surface: "navigation",
        subsurface: "dock"
      }
    }, I[5] = o) : o = I[5], I[6] !== N ? (c = {
      enabled: N
    }, I[6] = N, I[7] = c) : c = I[7];
    let {
      ref: ey
    } = (0, t5.useTrackedImpressionRef)(o, c), e_ = ea && !N, eb = er ? void 0 === O ? li : O : void 0, eS = er ? U : void 0;
    I[8] !== F || I[9] !== el || I[10] !== e_ || I[11] !== eb || I[12] !== eS || I[13] !== U ? (u = {
      enabled: e_,
      onOpen: el,
      onPin: eb,
      onProgressChange: F,
      pinThresholdPx: eS,
      side: "left",
      width: U
    }, I[8] = F, I[9] = el, I[10] = e_, I[11] = eb, I[12] = eS, I[13] = U, I[14] = u) : u = I[14];
    let ex = nS(u),
      ek = !N && ex.isDragging,
      eE = N || ex.isDragging;
    I[15] !== N ? (d = () => {
      N || (ed(""), ef("threads"))
    }, h = [N], I[15] = N, I[16] = d, I[17] = h) : (d = I[16], h = I[17]), (0, r.useEffect)(d, h);
    let eA = (0, tx.useDirection)(),
      eT = (0, r.useRef)(null),
      ew = (0, r.useRef)(null),
      eH = (0, r.useRef)(!1);
    I[18] !== V ? (f = () => {
      V(), requestAnimationFrame(ll)
    }, I[18] = V, I[19] = f) : f = I[19];
    let eP = f;
    I[20] !== eP || I[21] !== Q || I[22] !== ei || I[23] !== X ? (m = () => {
      if (ew.current = null, eH.current = !1, Q) {
        ei({
          eventName: t9.HatchClickEvent.CHAT_THREADS_PANEL_UNPIN_CLICK,
          actionTarget: "side_chats_panel_unpin_drag",
          actionType: "dismiss",
          metadata: {
            surface: "navigation",
            subsurface: "dock"
          }
        }), X(!1), eP();
        return
      }
      eP()
    }, I[20] = eP, I[21] = Q, I[22] = ei, I[23] = X, I[24] = m) : m = I[24];
    let eI = m;
    I[25] !== eP || I[26] !== Q || I[27] !== ei || I[28] !== X ? (p = () => {
      if (Q) {
        ei({
          eventName: t9.HatchClickEvent.CHAT_THREADS_PANEL_UNPIN_CLICK,
          actionTarget: "side_chats_panel_unpin_divider",
          actionType: "click",
          metadata: {
            surface: "navigation",
            subsurface: "dock"
          }
        }), X(!1), eP();
        return
      }
      eP()
    }, I[25] = eP, I[26] = Q, I[27] = ei, I[28] = X, I[29] = p) : p = I[29];
    let eN = p;
    I[30] !== K || I[31] !== z || I[32] !== U ? (g = {
      defaultWidth: n6.HATCH_DOCK_SIDE_CHATS_PANEL_WIDTH,
      onCommit: K,
      onPreview: z,
      width: U
    }, I[30] = K, I[31] = z, I[32] = U, I[33] = g) : g = I[33], I[34] !== eI || I[35] !== N || I[36] !== et || I[37] !== g ? (v = {
      panelSide: "left",
      onCollapse: eI,
      minWidth: n6.HATCH_DOCK_SIDE_CHATS_PANEL_MIN_WIDTH,
      defaultWidth: n6.HATCH_DOCK_SIDE_CHATS_PANEL_WIDTH,
      getMaxWidth: lr,
      controlled: g,
      isOpen: N,
      onClosePreviewChange: et,
      storageKey: "dock-side-chats"
    }, I[34] = eI, I[35] = N, I[36] = et, I[37] = g, I[38] = v) : v = I[38];
    let {
      frameWidth: ej,
      frameRef: eD,
      isDragging: eL,
      isResizing: eM,
      isCollapsedByDrag: eO,
      handlePointerDown: eF,
      nudgeWidth: eU,
      resetWidth: ez
    } = le(v), eK = ej + n6.HATCH_DOCK_RAIL_WIDTH, eB = ek ? ex.translateOffsetPx : eO ? "rtl" === eA ? eK : -eK : 0, eV = ex.revealWidthPx / ej;
    I[39] !== eV ? (C = (0, nP.getHatchPanelOpenDragOpacity)(eV), I[39] = eV, I[40] = C) : C = I[40];
    let eW = C;
    I[41] !== eD ? (y = e => {
      eT.current = e, eD(e)
    }, I[41] = eD, I[42] = y) : y = I[42];
    let eG = y;
    I[43] !== eF ? (_ = e => {
      let t = document.activeElement;
      ew.current = t instanceof HTMLElement && eT.current?.contains(t) ? t : null, eH.current = !1, eF(e)
    }, I[43] = eF, I[44] = _) : _ = I[44];
    let eY = _;
    I[45] !== eO || I[46] !== eL || I[47] !== N ? (b = () => {
      if (eO) {
        eH.current = !0;
        return
      }
      eH.current && N && ew.current?.focus({
        preventScroll: !0
      }), (!eL || eH.current) && (ew.current = null, eH.current = !1)
    }, S = [eO, eL, N], I[45] = eO, I[46] = eL, I[47] = N, I[48] = b, I[49] = S) : (b = I[48], S = I[49]), (0, r.useLayoutEffect)(b, S);
    let eq = $ ? X : void 0;
    I[50] === Symbol.for("react.memo_cache_sentinel") ? (x = () => {
      ed(""), ef("archived")
    }, I[50] = x) : x = I[50], I[51] !== Q || I[52] !== eq ? (k = (0, n.jsx)(rG.HatchSideChatsOptionsMenu, {
      keepChatsVisible: Q,
      onKeepChatsVisibleChange: eq,
      onShowArchived: x
    }), I[51] = Q, I[52] = eq, I[53] = k) : k = I[53];
    let e$ = k,
      eQ = $ ? X : void 0;
    I[54] !== eo || I[55] !== B || I[56] !== ee || I[57] !== eu || I[58] !== eh || I[59] !== Q || I[60] !== V || I[61] !== q || I[62] !== J || I[63] !== W || I[64] !== Y || I[65] !== G || I[66] !== Z || I[67] !== eQ ? (E = (0, n.jsx)(eo, {
      presentation: "inline",
      dataEnabled: ee,
      threadSessionId: B,
      onRequestClose: V,
      onSelectMainChat: W,
      onSelectThread: G,
      onSelectMessage: Y,
      onNewSideChat: q,
      inlineKeepChatsVisible: Q,
      onInlineKeepChatsVisibleChange: eQ,
      pendingSearchQuery: Z,
      onPendingSearchQueryConsumed: J,
      renderInlineSearchHeader: !1,
      inlineSearchInputRef: em,
      inlineSearchQuery: eu,
      onInlineSearchQueryChange: ed,
      inlineView: eh,
      onInlineViewChange: ef,
      onInlineSearchKeyDownChange: eg
    }), I[54] = eo, I[55] = B, I[56] = ee, I[57] = eu, I[58] = eh, I[59] = Q, I[60] = V, I[61] = q, I[62] = J, I[63] = W, I[64] = Y, I[65] = G, I[66] = Z, I[67] = eQ, I[68] = E) : E = I[68];
    let eX = E;
    I[69] !== ea || I[70] !== N || I[71] !== ex.handlePointerDown || I[72] !== ex.isDragging || I[73] !== ex.revealWidthPx ? (A = ea && !N && (0, n.jsx)(nC, {
      panelSide: "left",
      dragOffsetPx: ex.revealWidthPx,
      isDragging: ex.isDragging,
      onPointerDown: ex.handlePointerDown,
      tooltipTitle: tm.fbs._("Side chats", null, {
        hk: "3SFwVq"
      }),
      tooltipSubtitle: tm.fbs._("Click or drag to open", null, {
        hk: "aCGNI"
      }),
      testId: "hatch-side-chats-open-drag-handle",
      className: "absolute inset-y-0 z-20 -ms-2 w-4",
      style: {
        insetInlineStart: n6.HATCH_DOCK_RAIL_WIDTH
      }
    }), I[69] = ea, I[70] = N, I[71] = ex.handlePointerDown, I[72] = ex.isDragging, I[73] = ex.revealWidthPx, I[74] = A) : A = I[74];
    let eZ = eO ? "overflow-visible" : "overflow-hidden",
      eJ = ek && "pointer-events-none absolute inset-y-0";
    return I[75] !== eZ || I[76] !== eJ ? (T = (0, tk.cn)("max-h-full", eZ, eJ), I[75] = eZ, I[76] = eJ, I[77] = T) : T = I[77], I[78] !== ek || I[79] !== ej ? (w = ek ? {
      insetInlineStart: n6.HATCH_DOCK_RAIL_WIDTH,
      width: ej
    } : void 0, I[78] = ek, I[79] = ej, I[80] = w) : w = I[80], I[81] !== en || I[82] !== eN || I[83] !== eC || I[84] !== ev || I[85] !== eY || I[86] !== ey || I[87] !== e$ || I[88] !== eu || I[89] !== eh || I[90] !== eO || I[91] !== eL || I[92] !== N || I[93] !== Q || I[94] !== ek || I[95] !== eE || I[96] !== eM || I[97] !== eU || I[98] !== eW || I[99] !== eX || I[100] !== eB || I[101] !== ej || I[102] !== ez || I[103] !== es || I[104] !== eG ? (R = eE ? (0, n.jsx)("div", {
      ref: eG,
      "data-hatch-toast-pane": N ? "side-chats" : void 0,
      "data-hatch-toast-pane-occludes": N && !Q ? "true" : void 0,
      "data-hatch-side-chats-panel-visibility-animation": "disabled",
      "data-hatch-side-chats-panel-close-preview": eO ? "true" : void 0,
      className: (0, tk.cn)("relative h-full", eO ? "overflow-visible" : "overflow-hidden", eM && "select-none"),
      style: {
        width: eO ? 0 : ej
      },
      children: (0, n.jsxs)("div", {
        "data-testid": "hatch-side-chats-panel-sliding-surface",
        className: (0, tk.cn)("absolute inset-y-0 start-0", ek ? "will-change-[transform,opacity]" : eL && "will-change-transform"),
        style: {
          width: ej,
          transform: 0 === eB ? void 0 : `translateX(${eB}px)`,
          opacity: ek ? eW : void 0
        },
        "aria-hidden": !!ek || !!eO || void 0,
        inert: !!ek || !!eO || void 0,
        children: [(0, n.jsx)("nav", {
          ref: ey,
          "aria-label": tm.fbs._("Side chats", null, {
            hk: "3BvYzs"
          }),
          className: (0, tk.cn)("border-separator bg-bg-primary h-full overflow-hidden border-e md:border-e-0", (N || ek) && !Q && "dark:bg-[var(--ai-gray-900)]", !ek && "border-s"),
          style: {
            width: ej
          },
          children: (0, n.jsxs)("div", {
            "data-testid": "hatch-side-chats-panel-content",
            className: "flex h-full w-full flex-col",
            children: ["archived" !== eh && (0, n.jsx)(rB.HatchNavSearchHeader, {
              testId: "hatch-chat-search-toolbar",
              fieldTestId: "hatch-chat-search-field",
              inputRef: em,
              value: eu,
              onChange: ed,
              onKeyDown: ev,
              ariaLabel: tm.fbs._("Search", null, {
                hk: "2L5pRh"
              }),
              placeholder: tm.fbs._("Search", null, {
                hk: "3YbO93"
              }),
              onClear: eC,
              trailing: e$
            }), (0, n.jsx)("div", {
              className: "min-h-0 min-w-0 flex-1",
              children: (0, n.jsx)(s.EctoErrorBoundary, {
                surface: ec.HATCH_SENTRY_SURFACES.CHAT_SEARCH,
                fallback: e => {
                  let {
                    error: t,
                    reset: a
                  } = e;
                  return (0, n.jsx)(eR.HatchContentErrorFallback, {
                    error: t,
                    alwaysShowRetry: !0,
                    onRetry: () => {
                      es(), a()
                    }
                  })
                },
                children: en ? (0, n.jsx)(r.Suspense, {
                  fallback: (0, n.jsx)(rW.HatchSideChatsPanelLoadingState, {}),
                  children: eX
                }) : (0, n.jsx)(rW.HatchSideChatsPanelLoadingState, {})
              })
            })]
          })
        }), N && (0, n.jsx)(r$, {
          panelSide: "left",
          panelWidth: ej,
          minWidth: n6.HATCH_DOCK_SIDE_CHATS_PANEL_MIN_WIDTH,
          maxWidth: n6.HATCH_DOCK_SIDE_CHATS_PANEL_MAX_WIDTH,
          onPointerDown: eY,
          isDragging: eL,
          onNudgeWidth: eU,
          onResetWidth: ez,
          onCollapse: eN,
          collapseSubsurface: "side_chats_panel",
          panelLabel: tm.fbs._("Side chats", null, {
            hk: "3cfiGl"
          }),
          showDividerAtRest: !0,
          className: "absolute inset-y-0 end-0 hidden md:block"
        })]
      })
    }) : null, I[81] = en, I[82] = eN, I[83] = eC, I[84] = ev, I[85] = eY, I[86] = ey, I[87] = e$, I[88] = eu, I[89] = eh, I[90] = eO, I[91] = eL, I[92] = N, I[93] = Q, I[94] = ek, I[95] = eE, I[96] = eM, I[97] = eU, I[98] = eW, I[99] = eX, I[100] = eB, I[101] = ej, I[102] = ez, I[103] = es, I[104] = eG, I[105] = R) : R = I[105], I[106] !== T || I[107] !== w || I[108] !== R ? (H = (0, n.jsx)("div", {
      className: T,
      "data-testid": "hatch-side-chats-panel-shell",
      style: w,
      children: R
    }), I[106] = T, I[107] = w, I[108] = R, I[109] = H) : H = I[109], I[110] !== A || I[111] !== H ? (P = (0, n.jsxs)(n.Fragment, {
      children: [A, H]
    }), I[110] = A, I[111] = H, I[112] = P) : P = I[112], P
  }

  function lr() {
    return n6.HATCH_DOCK_SIDE_CHATS_PANEL_MAX_WIDTH
  }

  function ll() {
    window.dispatchEvent(new Event(rV.HATCH_FOCUS_SIDE_CHATS_TRIGGER_EVENT))
  }

  function li() {}

  function lo() {}
  var ls = e.i(490289),
    lc = e.i(438451),
    lu = e.i(549172),
    ld = e.i(26966),
    lh = e.i(514035),
    lf = e.i(390808),
    lm = e.i(515226),
    lp = e.i(408126),
    lg = e.i(979974);

  function lv(e) {
    let t, r, l, i, o, s, c, u, d, h, f, m, p, g, v, C, y, _, b = (0, a.c)(23);
    b[0] !== e ? ({
      size: r,
      ...t
    } = e, b[0] = e, b[1] = t, b[2] = r) : (t = b[1], r = b[2]);
    let S = void 0 === r ? 32 : r;
    return b[3] !== t.title ? (l = null != t.title && (0, n.jsx)("title", {
      children: t.title
    }), b[3] = t.title, b[4] = l) : l = b[4], b[5] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, n.jsx)("path", {
      d: "M4.1001 9.5C4.23993 9.5 4.30983 9.50017 4.36328 9.52734C4.41032 9.55131 4.44869 9.58968 4.47266 9.63672C4.49983 9.69017 4.5 9.76007 4.5 9.8999V10.1001C4.5 10.2399 4.49983 10.3098 4.47266 10.3633C4.44869 10.4103 4.41032 10.4487 4.36328 10.4727C4.30983 10.4998 4.23993 10.5 4.1001 10.5H3.8999C3.76007 10.5 3.69017 10.4998 3.63672 10.4727C3.58968 10.4487 3.55131 10.4103 3.52734 10.3633C3.50017 10.3098 3.5 10.2399 3.5 10.1001V9.8999C3.5 9.76007 3.50017 9.69017 3.52734 9.63672C3.55131 9.58968 3.58968 9.55131 3.63672 9.52734C3.69017 9.50017 3.76007 9.5 3.8999 9.5H4.1001Z",
      fill: "currentColor"
    }), m = (0, n.jsx)("path", {
      d: "M10.1001 9.5C10.2399 9.5 10.3098 9.50017 10.3633 9.52734C10.4103 9.55131 10.4487 9.58968 10.4727 9.63672C10.4998 9.69017 10.5 9.76007 10.5 9.8999V10.1001C10.5 10.2399 10.4998 10.3098 10.4727 10.3633C10.4487 10.4103 10.4103 10.4487 10.3633 10.4727C10.3098 10.4998 10.2399 10.5 10.1001 10.5H5.8999C5.76007 10.5 5.69017 10.4998 5.63672 10.4727C5.58968 10.4487 5.55131 10.4103 5.52734 10.3633C5.50017 10.3098 5.5 10.2399 5.5 10.1001V9.8999C5.5 9.76007 5.50017 9.69017 5.52734 9.63672C5.55131 9.58968 5.58968 9.55131 5.63672 9.52734C5.69017 9.50017 5.76007 9.5 5.8999 9.5H10.1001Z",
      fill: "currentColor"
    }), p = (0, n.jsx)("path", {
      d: "M12.1001 9.5C12.2399 9.5 12.3098 9.50017 12.3633 9.52734C12.4103 9.55131 12.4487 9.58968 12.4727 9.63672C12.4998 9.69017 12.5 9.76007 12.5 9.8999V10.1001C12.5 10.2399 12.4998 10.3098 12.4727 10.3633C12.4487 10.4103 12.4103 10.4487 12.3633 10.4727C12.3098 10.4998 12.2399 10.5 12.1001 10.5H11.8999C11.7601 10.5 11.6902 10.4998 11.6367 10.4727C11.5897 10.4487 11.5513 10.4103 11.5273 10.3633C11.5002 10.3098 11.5 10.2399 11.5 10.1001V9.8999C11.5 9.76007 11.5002 9.69017 11.5273 9.63672C11.5513 9.58968 11.5897 9.55131 11.6367 9.52734C11.6902 9.50017 11.7601 9.5 11.8999 9.5H12.1001Z",
      fill: "currentColor"
    }), g = (0, n.jsx)("path", {
      d: "M4.1001 7.5C4.23993 7.5 4.30983 7.50017 4.36328 7.52734C4.41032 7.55131 4.44869 7.58968 4.47266 7.63672C4.49983 7.69017 4.5 7.76007 4.5 7.8999V8.1001C4.5 8.23993 4.49983 8.30983 4.47266 8.36328C4.44869 8.41032 4.41032 8.44869 4.36328 8.47266C4.30983 8.49983 4.23993 8.5 4.1001 8.5H3.8999C3.76007 8.5 3.69017 8.49983 3.63672 8.47266C3.58968 8.44869 3.55131 8.41032 3.52734 8.36328C3.50017 8.30983 3.5 8.23993 3.5 8.1001V7.8999C3.5 7.76007 3.50017 7.69017 3.52734 7.63672C3.55131 7.58968 3.58968 7.55131 3.63672 7.52734C3.69017 7.50017 3.76007 7.5 3.8999 7.5H4.1001Z",
      fill: "currentColor"
    }), v = (0, n.jsx)("path", {
      d: "M6.1001 7.5C6.23993 7.5 6.30983 7.50017 6.36328 7.52734C6.41032 7.55131 6.44869 7.58968 6.47266 7.63672C6.49983 7.69017 6.5 7.76007 6.5 7.8999V8.1001C6.5 8.23993 6.49983 8.30983 6.47266 8.36328C6.44869 8.41032 6.41032 8.44869 6.36328 8.47266C6.30983 8.49983 6.23993 8.5 6.1001 8.5H5.8999C5.76007 8.5 5.69017 8.49983 5.63672 8.47266C5.58968 8.44869 5.55131 8.41032 5.52734 8.36328C5.50017 8.30983 5.5 8.23993 5.5 8.1001V7.8999C5.5 7.76007 5.50017 7.69017 5.52734 7.63672C5.55131 7.58968 5.58968 7.55131 5.63672 7.52734C5.69017 7.50017 5.76007 7.5 5.8999 7.5H6.1001Z",
      fill: "currentColor"
    }), C = (0, n.jsx)("path", {
      d: "M8.1001 7.5C8.23993 7.5 8.30983 7.50017 8.36328 7.52734C8.41032 7.55131 8.44869 7.58968 8.47266 7.63672C8.49983 7.69017 8.5 7.76007 8.5 7.8999V8.1001C8.5 8.23993 8.49983 8.30983 8.47266 8.36328C8.44869 8.41032 8.41032 8.44869 8.36328 8.47266C8.30983 8.49983 8.23993 8.5 8.1001 8.5H7.8999C7.76007 8.5 7.69017 8.49983 7.63672 8.47266C7.58968 8.44869 7.55131 8.41032 7.52734 8.36328C7.50017 8.30983 7.5 8.23993 7.5 8.1001V7.8999C7.5 7.76007 7.50017 7.69017 7.52734 7.63672C7.55131 7.58968 7.58968 7.55131 7.63672 7.52734C7.69017 7.50017 7.76007 7.5 7.8999 7.5H8.1001Z",
      fill: "currentColor"
    }), y = (0, n.jsx)("path", {
      d: "M10.1001 7.5C10.2399 7.5 10.3098 7.50017 10.3633 7.52734C10.4103 7.55131 10.4487 7.58968 10.4727 7.63672C10.4998 7.69017 10.5 7.76007 10.5 7.8999V8.1001C10.5 8.23993 10.4998 8.30983 10.4727 8.36328C10.4487 8.41032 10.4103 8.44869 10.3633 8.47266C10.3098 8.49983 10.2399 8.5 10.1001 8.5H9.8999C9.76007 8.5 9.69017 8.49983 9.63672 8.47266C9.58968 8.44869 9.55131 8.41032 9.52734 8.36328C9.50017 8.30983 9.5 8.23993 9.5 8.1001V7.8999C9.5 7.76007 9.50017 7.69017 9.52734 7.63672C9.55131 7.58968 9.58968 7.55131 9.63672 7.52734C9.69017 7.50017 9.76007 7.5 9.8999 7.5H10.1001Z",
      fill: "currentColor"
    }), i = (0, n.jsx)("path", {
      d: "M12.1001 7.5C12.2399 7.5 12.3098 7.50017 12.3633 7.52734C12.4103 7.55131 12.4487 7.58968 12.4727 7.63672C12.4998 7.69017 12.5 7.76007 12.5 7.8999V8.1001C12.5 8.23993 12.4998 8.30983 12.4727 8.36328C12.4487 8.41032 12.4103 8.44869 12.3633 8.47266C12.3098 8.49983 12.2399 8.5 12.1001 8.5H11.8999C11.7601 8.5 11.6902 8.49983 11.6367 8.47266C11.5897 8.44869 11.5513 8.41032 11.5273 8.36328C11.5002 8.30983 11.5 8.23993 11.5 8.1001V7.8999C11.5 7.76007 11.5002 7.69017 11.5273 7.63672C11.5513 7.58968 11.5897 7.55131 11.6367 7.52734C11.6902 7.50017 11.7601 7.5 11.8999 7.5H12.1001Z",
      fill: "currentColor"
    }), o = (0, n.jsx)("path", {
      d: "M4.1001 5.5C4.23993 5.5 4.30983 5.50017 4.36328 5.52734C4.41032 5.55131 4.44869 5.58968 4.47266 5.63672C4.49983 5.69017 4.5 5.76007 4.5 5.8999V6.1001C4.5 6.23993 4.49983 6.30983 4.47266 6.36328C4.44869 6.41032 4.41032 6.44869 4.36328 6.47266C4.30983 6.49983 4.23993 6.5 4.1001 6.5H3.8999C3.76007 6.5 3.69017 6.49983 3.63672 6.47266C3.58968 6.44869 3.55131 6.41032 3.52734 6.36328C3.50017 6.30983 3.5 6.23993 3.5 6.1001V5.8999C3.5 5.76007 3.50017 5.69017 3.52734 5.63672C3.55131 5.58968 3.58968 5.55131 3.63672 5.52734C3.69017 5.50017 3.76007 5.5 3.8999 5.5H4.1001Z",
      fill: "currentColor"
    }), s = (0, n.jsx)("path", {
      d: "M6.1001 5.5C6.23993 5.5 6.30983 5.50017 6.36328 5.52734C6.41032 5.55131 6.44869 5.58968 6.47266 5.63672C6.49983 5.69017 6.5 5.76007 6.5 5.8999V6.1001C6.5 6.23993 6.49983 6.30983 6.47266 6.36328C6.44869 6.41032 6.41032 6.44869 6.36328 6.47266C6.30983 6.49983 6.23993 6.5 6.1001 6.5H5.8999C5.76007 6.5 5.69017 6.49983 5.63672 6.47266C5.58968 6.44869 5.55131 6.41032 5.52734 6.36328C5.50017 6.30983 5.5 6.23993 5.5 6.1001V5.8999C5.5 5.76007 5.50017 5.69017 5.52734 5.63672C5.55131 5.58968 5.58968 5.55131 5.63672 5.52734C5.69017 5.50017 5.76007 5.5 5.8999 5.5H6.1001Z",
      fill: "currentColor"
    }), c = (0, n.jsx)("path", {
      d: "M8.1001 5.5C8.23993 5.5 8.30983 5.50017 8.36328 5.52734C8.41032 5.55131 8.44869 5.58968 8.47266 5.63672C8.49983 5.69017 8.5 5.76007 8.5 5.8999V6.1001C8.5 6.23993 8.49983 6.30983 8.47266 6.36328C8.44869 6.41032 8.41032 6.44869 8.36328 6.47266C8.30983 6.49983 8.23993 6.5 8.1001 6.5H7.8999C7.76007 6.5 7.69017 6.49983 7.63672 6.47266C7.58968 6.44869 7.55131 6.41032 7.52734 6.36328C7.50017 6.30983 7.5 6.23993 7.5 6.1001V5.8999C7.5 5.76007 7.50017 5.69017 7.52734 5.63672C7.55131 5.58968 7.58968 5.55131 7.63672 5.52734C7.69017 5.50017 7.76007 5.5 7.8999 5.5H8.1001Z",
      fill: "currentColor"
    }), u = (0, n.jsx)("path", {
      d: "M10.1001 5.5C10.2399 5.5 10.3098 5.50017 10.3633 5.52734C10.4103 5.55131 10.4487 5.58968 10.4727 5.63672C10.4998 5.69017 10.5 5.76007 10.5 5.8999V6.1001C10.5 6.23993 10.4998 6.30983 10.4727 6.36328C10.4487 6.41032 10.4103 6.44869 10.3633 6.47266C10.3098 6.49983 10.2399 6.5 10.1001 6.5H9.8999C9.76007 6.5 9.69017 6.49983 9.63672 6.47266C9.58968 6.44869 9.55131 6.41032 9.52734 6.36328C9.50017 6.30983 9.5 6.23993 9.5 6.1001V5.8999C9.5 5.76007 9.50017 5.69017 9.52734 5.63672C9.55131 5.58968 9.58968 5.55131 9.63672 5.52734C9.69017 5.50017 9.76007 5.5 9.8999 5.5H10.1001Z",
      fill: "currentColor"
    }), d = (0, n.jsx)("path", {
      d: "M12.1001 5.5C12.2399 5.5 12.3098 5.50017 12.3633 5.52734C12.4103 5.55131 12.4487 5.58968 12.4727 5.63672C12.4998 5.69017 12.5 5.76007 12.5 5.8999V6.1001C12.5 6.23993 12.4998 6.30983 12.4727 6.36328C12.4487 6.41032 12.4103 6.44869 12.3633 6.47266C12.3098 6.49983 12.2399 6.5 12.1001 6.5H11.8999C11.7601 6.5 11.6902 6.49983 11.6367 6.47266C11.5897 6.44869 11.5513 6.41032 11.5273 6.36328C11.5002 6.30983 11.5 6.23993 11.5 6.1001V5.8999C11.5 5.76007 11.5002 5.69017 11.5273 5.63672C11.5513 5.58968 11.5897 5.55131 11.6367 5.52734C11.6902 5.50017 11.7601 5.5 11.8999 5.5H12.1001Z",
      fill: "currentColor"
    }), h = (0, n.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.0498 3.1875C11.6005 3.1875 12.0475 3.18726 12.4092 3.2168C12.7775 3.24689 13.1071 3.31067 13.4136 3.4668C13.8956 3.71245 14.2876 4.1044 14.5332 4.58643C14.6893 4.89285 14.7531 5.22253 14.7832 5.59082C14.8127 5.95251 14.8125 6.39953 14.8125 6.9502V9.0498C14.8125 9.60047 14.8127 10.0475 14.7832 10.4092C14.7531 10.7775 14.6893 11.1071 14.5332 11.4136C14.2876 11.8956 13.8956 12.2876 13.4136 12.5332C13.1071 12.6893 12.7775 12.7531 12.4092 12.7832C12.0475 12.8127 11.6005 12.8125 11.0498 12.8125H4.9502C4.39953 12.8125 3.95251 12.8127 3.59082 12.7832C3.22253 12.7531 2.89285 12.6893 2.58643 12.5332C2.1044 12.2876 1.71245 11.8956 1.4668 11.4136C1.31067 11.1071 1.24689 10.7775 1.2168 10.4092C1.18726 10.0475 1.1875 9.60047 1.1875 9.0498V6.9502C1.1875 6.39953 1.18726 5.95251 1.2168 5.59082C1.24689 5.22253 1.31067 4.89285 1.4668 4.58643C1.71245 4.1044 2.1044 3.71245 2.58643 3.4668C2.89285 3.31067 3.22253 3.24689 3.59082 3.2168C3.95251 3.18726 4.39953 3.1875 4.9502 3.1875H11.0498ZM4.9502 4.3125C4.38086 4.3125 3.98741 4.31295 3.68213 4.33789C3.38346 4.3623 3.21856 4.40739 3.09717 4.46924C2.82684 4.60703 2.60703 4.82684 2.46924 5.09717C2.40739 5.21856 2.3623 5.38346 2.33789 5.68213C2.31295 5.98741 2.3125 6.38086 2.3125 6.9502V9.0498C2.3125 9.61914 2.31295 10.0126 2.33789 10.3179C2.3623 10.6165 2.40739 10.7814 2.46924 10.9028C2.60703 11.1732 2.82684 11.393 3.09717 11.5308C3.21856 11.5926 3.38346 11.6377 3.68213 11.6621C3.98741 11.6871 4.38086 11.6875 4.9502 11.6875H11.0498C11.6191 11.6875 12.0126 11.6871 12.3179 11.6621C12.6165 11.6377 12.7814 11.5926 12.9028 11.5308C13.1732 11.393 13.393 11.1732 13.5308 10.9028C13.5926 10.7814 13.6377 10.6165 13.6621 10.3179C13.6871 10.0126 13.6875 9.61914 13.6875 9.0498V6.9502C13.6875 6.38086 13.6871 5.98741 13.6621 5.68213C13.6377 5.38346 13.5926 5.21856 13.5308 5.09717C13.393 4.82684 13.1732 4.60703 12.9028 4.46924C12.7814 4.40739 12.6165 4.3623 12.3179 4.33789C12.0126 4.31295 11.6191 4.3125 11.0498 4.3125H4.9502Z",
      fill: "currentColor"
    }), b[5] = i, b[6] = o, b[7] = s, b[8] = c, b[9] = u, b[10] = d, b[11] = h, b[12] = f, b[13] = m, b[14] = p, b[15] = g, b[16] = v, b[17] = C, b[18] = y) : (i = b[5], o = b[6], s = b[7], c = b[8], u = b[9], d = b[10], h = b[11], f = b[12], m = b[13], p = b[14], g = b[15], v = b[16], C = b[17], y = b[18]), b[19] !== t || b[20] !== S || b[21] !== l ? (_ = (0, n.jsxs)("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      width: S,
      height: S,
      ...t,
      children: [l, f, m, p, g, v, C, y, i, o, s, c, u, d, h]
    }), b[19] = t, b[20] = S, b[21] = l, b[22] = _) : _ = b[22], _
  }
  lv._isSVG = !0, lv._viewBox = 32;
  var lC = e.i(833088),
    ly = e.i(738399),
    l_ = e.i(430116);

  function lb(e) {
    let t, r, l, i, o = (0, a.c)(8),
      {
        code: s,
        onClose: c
      } = e;
    return o[0] !== c ? (t = e => {
      e || c()
    }, o[0] = c, o[1] = t) : t = o[1], o[2] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(tF.DialogHeader, {
      children: (0, n.jsx)(tF.DialogTitle, {
        children: tm.fbt._("Download apps", null, {
          hk: "i5MQl"
        })
      })
    }), o[2] = r) : r = o[2], o[3] !== s ? (l = (0, n.jsx)(tF.DialogContent, {
      className: "max-w-[480px]",
      header: r,
      children: (0, n.jsx)(l_.Text, {
        as: "p",
        variant: "body",
        color: "secondary",
        children: "authentication_required" === s ? tm.fbt._("Your session has expired. Refresh the page and try again.", null, {
          hk: "1HwWdk"
        }) : tm.fbt._("App downloads aren't available for this account.", null, {
          hk: "Z2ZsP"
        })
      })
    }), o[3] = s, o[4] = l) : l = o[4], o[5] !== t || o[6] !== l ? (i = (0, n.jsx)(tF.Dialog, {
      open: !0,
      onOpenChange: t,
      children: l
    }), o[5] = t, o[6] = l, o[7] = i) : i = o[7], i
  }

  function lS(e) {
    let t, r, l, i, o, s, c, u = (0, a.c)(9),
      {
        onClose: d
      } = e;
    return u[0] !== d ? (t = e => {
      e || d()
    }, u[0] = d, u[1] = t) : t = u[1], u[2] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(tF.DialogHeader, {
      children: (0, n.jsx)(tF.DialogTitle, {
        children: tm.fbt._("Download apps", null, {
          hk: "1lsuPu"
        })
      })
    }), u[2] = r) : r = u[2], u[3] === Symbol.for("react.memo_cache_sentinel") ? (l = tm.fbs._("Loading app download options", null, {
      hk: "VJnav"
    }), i = (0, n.jsx)(tA.Skeleton, {
      className: "h-9 w-full rounded-full",
      "aria-hidden": "true"
    }), o = (0, n.jsx)(tA.Skeleton, {
      className: "mt-4 h-4 w-full rounded-full",
      "aria-hidden": "true"
    }), u[3] = l, u[4] = i, u[5] = o) : (l = u[3], i = u[4], o = u[5]), u[6] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, n.jsx)(tF.DialogContent, {
      className: "max-w-[480px]",
      header: r,
      children: (0, n.jsx)(tT.LoadingState, {
        name: "app_download_dialog",
        className: "motion-reduce:[&_*]:!animate-none",
        children: (0, n.jsxs)("div", {
          className: "pb-1",
          role: "status",
          "aria-busy": "true",
          "aria-label": l,
          children: [i, o, (0, n.jsx)("div", {
            className: "mt-4 flex justify-center",
            "aria-hidden": "true",
            children: (0, n.jsx)(tA.Skeleton, {
              className: "rounded-12",
              style: {
                width: 200,
                height: 200
              }
            })
          }), (0, n.jsx)(tA.Skeleton, {
            className: "mt-5 h-9 w-full rounded-full",
            "aria-hidden": "true"
          })]
        })
      })
    }), u[6] = s) : s = u[6], u[7] !== t ? (c = (0, n.jsx)(tF.Dialog, {
      open: !0,
      onOpenChange: t,
      children: s
    }), u[7] = t, u[8] = c) : c = u[8], c
  }

  function lx(e) {
    let t, r, l, i, o = (0, a.c)(9),
      {
        error: s,
        onRetry: c,
        onClose: u
      } = e;
    return o[0] !== u ? (t = e => {
      e || u()
    }, o[0] = u, o[1] = t) : t = o[1], o[2] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(tF.DialogHeader, {
      children: (0, n.jsx)(tF.DialogTitle, {
        children: tm.fbt._("Download apps", null, {
          hk: "412FzR"
        })
      })
    }), o[2] = r) : r = o[2], o[3] !== s || o[4] !== c ? (l = (0, n.jsx)(tF.DialogContent, {
      className: "max-w-[480px]",
      header: r,
      children: (0, n.jsx)("div", {
        className: "pb-1",
        children: (0, n.jsx)(eR.HatchContentErrorFallback, {
          error: s,
          onRetry: c
        })
      })
    }), o[3] = s, o[4] = c, o[5] = l) : l = o[5], o[6] !== t || o[7] !== l ? (i = (0, n.jsx)(tF.Dialog, {
      open: !0,
      onOpenChange: t,
      children: l
    }), o[6] = t, o[7] = l, o[8] = i) : i = o[8], i
  }
  var lk = e.i(517343);
  let lE = (0, W.createServerReference)("0060bdc4febd8bed25b42d8f80ed371a046e88b49c", W.callServer, void 0, W.findSourceMapURL, "fetchHatchAppDownloadQrCodesAction");
  var lA = e.i(202564);
  let lT = (0, r.lazy)(() => e.A(538238).then(e => ({
      default: e.HatchVmAndModelMenuContent
    }))),
    lw = (0, r.lazy)(() => e.A(50456).then(e => ({
      default: e.HatchAvocadoSwitchDialog
    }))),
    lR = (0, et.createClientLogger)("HatchDock"),
    lH = ["[data-radix-menu-content]", "[data-slot='context-menu-content']", "[data-slot='dialog-content']", "[data-slot='dropdown-menu-content']"],
    lP = (0, r.lazy)(() => e.A(862754).then(e => ({
      default: e.EctoBugReportDialog
    })));

  function lI() {
    return e.A(650927).then(e => ({
      default: e.HatchAppDownloadDialog
    }))
  }

  function lN() {
    return (0, r.lazy)(lI)
  }

  function lj() {
    lI().catch(() => {})
  }

  function lD(e) {
    let t, l = (0, a.c)(11),
      {
        DialogComponent: i,
        dialog: o,
        onOpenChange: s
      } = e,
      c = (0, r.use)(o.qrCodesPromise);
    if (!c.success) {
      let e, t;
      if ("unavailable" === c.code) throw Error("App download QR codes unavailable");
      return l[0] !== s ? (e = () => s(!1), l[0] = s, l[1] = e) : e = l[1], l[2] !== c.code || l[3] !== e ? (t = (0, n.jsx)(lb, {
        code: c.code,
        onClose: e
      }), l[2] = c.code, l[3] = e, l[4] = t) : t = l[4], t
    }
    return l[5] !== i || l[6] !== o.audience || l[7] !== o.entrypoint || l[8] !== s || l[9] !== c.qrCodes ? (t = (0, n.jsx)(i, {
      open: !0,
      onOpenChange: s,
      entrypoint: o.entrypoint,
      audience: o.audience,
      qrCodes: c.qrCodes
    }), l[5] = i, l[6] = o.audience, l[7] = o.entrypoint, l[8] = s, l[9] = c.qrCodes, l[10] = t) : t = l[10], t
  }
  let lL = {
    appDownloadEnabled: !1,
    macAppDownloadEnabled: !1,
    isEmployee: !1,
    voiceEnabled: !1
  };

  function lM(e) {
    let t, n, l = (0, a.c)(7),
      {
        onResolve: i
      } = e,
      o = (0, m.useHatchAppDownloadEnabled)(),
      s = (0, m.useHatchMacAppDownloadEnabled)(),
      c = (0, tE.useMcBool)("5e1fb489", !1),
      u = (0, m.useHatchVoiceEnabled)();
    return l[0] !== o || l[1] !== c || l[2] !== s || l[3] !== i || l[4] !== u ? (t = () => i({
      appDownloadEnabled: o,
      macAppDownloadEnabled: s,
      isEmployee: c,
      voiceEnabled: u
    }), n = [o, s, c, i, u], l[0] = o, l[1] = c, l[2] = s, l[3] = i, l[4] = u, l[5] = t, l[6] = n) : (t = l[5], n = l[6]), (0, r.useLayoutEffect)(t, n), null
  }

  function lO({
    onSettingsMenuOpen: e,
    onSettingsClick: t,
    onFileClick: l,
    onSpaceViewActivate: i,
    selectedArtifactItemKey: o = null,
    artifactSelectionOwner: u = null,
    chatCollapsed: h,
    onChatCollapsedChange: f,
    hasSidePanel: p,
    libraryPath: v,
    chatRouteCommitWrapper: y,
    routeSidePanelCommitWrapper: _,
    sideChatsPanelPinned: b,
    sideChatsPanelPinnedOpen: S,
    sideChatsPanelOverflowOpen: x,
    onSideChatsPanelOverflowOpenChange: k,
    sideChatsPanelWidth: E,
    canPinSideChatsPanel: A,
    onSideChatsPanelRenderableChange: T,
    onHasCreatedSideChatsChange: w,
    onSideChatsPanelPinnedChange: R,
    onSideChatsPanelWidthPreview: H,
    onSideChatsPanelWidthCommit: P,
    onSideChatsPanelClosePreviewChange: I
  }) {
    let [N, D] = (0, r.useState)(lL), {
      appDownloadEnabled: L,
      macAppDownloadEnabled: M,
      isEmployee: O,
      voiceEnabled: F
    } = N, {
      registerSideChatsOpenDragFillElement: U,
      setSideChatsOpenDragProgress: z
    } = (0, rT.useHatchDock)(), K = (0, d.useIsMobileBreakpoint)(), {
      navigate: B
    } = (0, rb.useShellNavigate)(), W = (0, c.useHatchServerData)(), {
      gatewayUrl: G,
      vmName: Y,
      isReady: q,
      sendRequest: $
    } = (0, ei.useHatchRpc)(), Q = (0, eU.useQueryClient)(), {
      panelType: X,
      params: Z,
      match: J,
      isShellRoute: ee
    } = (0, rC.useActiveRoute)(), et = (0, e_.useShellPrimaryContentSnapshot)(), en = (0, V.useHatchPostContentSafetyReady)(), ea = (0, tX.useLatchedTrue)(en && (0, e_.isShellPostContentEligibleForRoute)(et, J, G, Y)), er = !K && ea, {
      hasResolvedNavigationItems: el,
      systemItems: es
    } = (0, rk.useNavigationItemsBySource)(er), {
      snapshotState: eu,
      nodes: ed
    } = (0, rr.useArtifactsConnection)("all", "last_opened", er), eh = (0, r.useMemo)(() => ed.filter(e => "file" !== e.source || e.isPinned || null != e.lastOpenedAtMs || "constructing" === e.status || "updating" === e.status), [ed]);
    ! function(e, t) {
      let n, l, i = (0, a.c)(5),
        {
          gatewayUrl: o
        } = (0, ei.useHatchRpc)(),
        s = (0, r.useRef)(null);
      i[0] !== t || i[1] !== o || i[2] !== e ? (n = () => {
        if (!t || null == o) return;
        let n = (0, rl.getArtifactIconCacheHost)(o);
        if (null == n) return;
        let a = function(e) {
            let t = new Set;
            for (let n of e)
              for (let e of [n.preview?.iconUrl, n.preview?.thumbnailUrl]) {
                let n = (0, ri.resolveSpaceImageCachePath)(e);
                null != n && t.add(n)
              }
            return [...t].sort()
          }(e),
          r = [n, ...a].join("\0");
        s.current !== r && (s.current = r, (0, rl.markActiveArtifactIcons)(n, a))
      }, l = [t, o, e], i[0] = t, i[1] = o, i[2] = e, i[3] = n, i[4] = l) : (n = i[3], l = i[4]), (0, r.useEffect)(n, l)
    }(ed, "ready" === eu);
    let ef = er && el && ("staging" !== eu || ed.length > 0),
      em = (0, rs.useHatchSharedAgentsCapabilityQuery)({
        enabled: ef
      }),
      ep = (0, ru.supportsSharedAgents)(em.data),
      eg = (0, rc.useHatchSharedAgentsQuery)({
        enabled: ef && ep
      }),
      ev = eg.data ?? [],
      eC = ep && ev.length > 0 && (eg.isSuccess || eg.dataUpdatedAt > 0),
      ey = ev.length,
      [eb, eS] = (0, r.useState)(!1),
      [ex, ek] = (0, r.useState)(null);
    (0, r.useEffect)(() => {
      let e = e => {
        let t = e instanceof CustomEvent ? e.detail : null;
        ek("string" == typeof t?.query ? t.query : "")
      };
      return window.addEventListener(lm.HATCH_REQUEST_CHAT_SEARCH_EVENT, e), () => window.removeEventListener(lm.HATCH_REQUEST_CHAT_SEARCH_EVENT, e)
    }, []);
    let [eE, eA] = (0, r.useState)([]), eT = (0, aW.useCanShareArtifactsFromServingVm)(), [ew, eH] = (0, r.useState)(null), eP = er && el && ("ready" === eu || ed.length > 0), [eI, eN] = (0, r.useState)(!1), ej = S && !eI, eL = !eb && (x || ej || eI), eM = eL && !ej, {
      closePanel: eO
    } = (0, nn.useHatchStatusPanel)(), eF = "space" === X ? Z.slug ?? null : null, ez = "space" === X ? Z.shortcode ?? null : null, eK = (0, r.useMemo)(() => {
      if ("artifact" === u && null != o) return `file:${o.replace(/^\/+/,"")}`;
      if ("space" === X) {
        if (null != Z.shortcode) return `saved_space:${Z.shortcode}`;
        if (null != Z.slug) return `space:${Z.slug}`
      }
      return null != o ? `file:${o.replace(/^\/+/,"")}` : null
    }, [X, u, Z.shortcode, Z.slug, o]), eB = (0, rU.useDeleteSpace)(), {
      removeSavedArtifact: eV
    } = (0, an.useRemoveSavedArtifact)(), {
      requestDelete: eW
    } = (0, rz.useHatchDeleteConfirmation)({
      origin: "file_browser"
    }), [eG, eY] = (0, r.useState)(!1), eq = (0, r.useCallback)(t => {
      t && e(), eY(t)
    }, [e]), [e$, eQ] = (0, r.useState)(null), [eX, eZ] = (0, r.useState)(0), eJ = (0, r.useMemo)(lN, [eX]), e0 = (0, r.useCallback)((e, t) => {
      lj(), eQ({
        entrypoint: e,
        audience: t,
        qrCodesPromise: lE()
      })
    }, []), e1 = (0, r.useRef)(null), e2 = (0, r.useRef)(null), e3 = (0, r.useRef)(!1);
    (0, rD.useDismissOnOutsideInteraction)({
      enabled: eb || eL && !ej,
      onDismiss: () => {
        eS(!1), k(!1)
      },
      insideRefs: [e2],
      ignoreSelectors: lH,
      shouldIgnoreDismiss: () => e3.current
    }), (0, r.useEffect)(() => {
      "space" !== X && eS(!1)
    }, [X]), (0, r.useEffect)(() => {
      k(!1)
    }, [X, u, o, ez, eF, k]);
    let e8 = (0, r.useCallback)(e => {
        eA(t => t.length === e.length && t.every((t, n) => t === e[n]) ? t : [...e])
      }, []),
      [e4, e5] = (0, r.useState)(!1),
      [e6, e9] = (0, r.useState)(null),
      e7 = (0, m.resolveHatchAppDownloadAudience)(L, O),
      {
        vmList: te,
        selectedVm: tt,
        selectVm: tn,
        isLoading: ta
      } = (0, rO.useHatchVmList)({
        enabled: O && eG,
        resolveNames: O && eG
      }),
      tr = (0, rd.useChatModel)(),
      {
        cancelPendingSearchMessageJump: tl,
        requestSearchMessageJump: ti,
        setModel: to
      } = (0, g.useHatchChat)(),
      [ts, tc] = (0, r.useState)(null),
      tu = (0, r.useCallback)(e => {
        if (!(0, rF.shouldConfirmHatchModelSwitch)(tr, e)) {
          tc(null), to(e);
          return
        }
        tc(e)
      }, [tr, to]),
      td = (0, r.useCallback)(async () => {
        tc(null), null != ts && (await to(ts), C.getSnapshot().chat.model === ts && C.setComposerInputValue("/clear"))
      }, [ts, to]),
      th = (0, r.useCallback)(() => {
        tc(null)
      }, []),
      tf = (0, rd.useChatMessageIds)(),
      {
        openDialog: tp
      } = (0, lp.useKeyboardShortcutRegistry)(),
      {
        toggleQuickSearch: tg
      } = (0, rw.useHatchQuickSearchControls)(),
      {
        ref: tv,
        onClick: tC
      } = (0, t5.useTrackedClickRef)({
        eventName: t9.HatchClickEvent.SETTINGS_NAV_CLICK,
        actionTarget: "settings_button",
        actionType: "click",
        metadata: {
          surface: "navigation",
          subsurface: "dock"
        }
      }),
      {
        ref: ty,
        onClick: t_
      } = (0, t5.useTrackedClickRef)({
        eventName: t9.HatchClickEvent.SETTINGS_MENU_OPEN_CLICK,
        actionTarget: "settings_menu_trigger",
        actionType: "click",
        metadata: {
          surface: "navigation",
          subsurface: "dock"
        }
      }),
      {
        ref: tb,
        onClick: tS
      } = (0, t5.useTrackedClickRef)({
        eventName: t9.HatchClickEvent.QUICK_SEARCH_NAV_CLICK,
        actionTarget: "quicksearch_dock_item",
        actionType: "click",
        metadata: {
          surface: "navigation",
          subsurface: "dock"
        }
      }),
      {
        ref: tx,
        onClick: tE
      } = (0, t5.useTrackedClickRef)({
        eventName: "keyboard_shortcuts_nav_click",
        actionTarget: "keyboard_shortcuts_menu_item",
        actionType: "click",
        metadata: {
          surface: "navigation",
          subsurface: "dock_settings_menu"
        }
      }),
      {
        ref: tA,
        onClick: tT
      } = (0, t5.useTrackedClickRef)({
        eventName: "bug_report_nav_click",
        actionTarget: "bug_report_button",
        actionType: "click",
        metadata: {
          surface: "navigation",
          subsurface: "dock"
        }
      }),
      {
        ref: tw,
        onClick: tR
      } = (0, t5.useTrackedClickRef)({
        eventName: t9.HatchClickEvent.MOBILE_APP_UPSELL_MENU_CLICK,
        actionTarget: "mobile_app_upsell_menu_item",
        actionType: "click",
        metadata: {
          surface: lk.APP_UPSELL_SURFACE,
          screen: "app_download_modal",
          entrypoint: "dock_settings_menu",
          subsurface: "dock_settings_menu"
        }
      }),
      {
        isOpen: tH,
        isViewerOpen: tP,
        close: tI,
        dismiss: tN
      } = (0, rS.useHatchFilePanelState)(),
      tj = (0, r.useCallback)((e, t) => {
        if (!tP || tN()) return _(e, t)
      }, [tN, tP, _]),
      tD = (0, r.useCallback)((e, t) => {
        if ("chat" === X || !tP || tN()) return y(e, t)
      }, [X, tN, tP, y]),
      tL = (0, lf.useEffectiveHatchChatRoute)(),
      tM = (0, lf.useClearChatRouteOverride)(),
      tO = (0, lc.getHatchChatRouteKey)(tL),
      tF = null != Z.sessionId || J?.route.path === "/thread/new",
      tU = ee && "chat" === X,
      tz = "chat" === X && null == eF && !tH,
      tK = tz && !tF,
      tB = tK && (null == tL || "main" === tL.kind),
      tV = "chat" === u || null == u && tz && !(p && !h),
      tW = null == u && tz && !(p && !h),
      tG = "chat" === X || p && !h;
    (0, r.useEffect)(() => {
      null != ex && tG && (!eL || eI) && (ek(null), window.dispatchEvent(new CustomEvent(lm.HATCH_OPEN_CHAT_SEARCH_EVENT, {
        detail: {
          query: ex
        }
      })))
    }, [tG, eL, ex, eI]);
    let tY = (0, r.useRef)(tO);
    (0, r.useEffect)(() => {
      let e = tY.current;
      tY.current = tO, e !== tO && ek(null)
    }, [tO]);
    let tq = (0, rd.useChatUnreadCount)(),
      t$ = (0, rd.useChatIsAtBottom)(),
      tQ = tL?.kind === "thread" ? tL.sessionId : null,
      tZ = (0, ls.useHatchThreadSessionsQuery)(er),
      tJ = tZ.data ?? [],
      t0 = !!tJ.some(e => e.is_thread && !e.is_primary && null == e.channel && !0 !== e.archived) || (!tZ.isFetchedAfterMount || !tZ.isSuccess) && null;
    (0, r.useEffect)(() => {
      w(t0)
    }, [t0, w]);
    let t1 = (0, r.useCallback)(e => tL?.kind === "main" ? e.is_primary : null != tQ && e.session_id === tQ, [tL?.kind, tQ]),
      t2 = tJ.find(t1)?.unread_count ?? 0,
      t3 = tJ.reduce((e, t) => !0 === t.archived || t1(t) ? e : e + (t.unread_count ?? 0), 0),
      t8 = tG ? tq : Math.max(tq, t2),
      t4 = tJ.reduce((e, t) => t.is_thread && !t.is_primary && !0 !== t.archived ? e + (t.unread_count ?? 0) : e, 0),
      t7 = (0, rh.usePendingApprovalNotificationCount)(),
      ne = t8 + t3,
      nt = tW && !eL && (tL?.kind === "main" || tL?.kind === "thread"),
      na = eL || nt,
      nr = (na ? 0 : ne) + t7,
      nl = (0, rN.useUiHighlightItem)(),
      ni = (0, rN.useUiHighlightState)(),
      no = (0, lh.useAllUiLightupsEnabled)(),
      ns = (0, aq.uiHighlightSystemKeyForItem)(nl),
      nc = "chat" === ns && 0 === nr,
      nu = "feed" === ns,
      nd = "ideas" === ns,
      nh = "goals" === ns,
      nm = "library" === ns,
      np = 0 === nr && (no || nc),
      {
        ref: ng,
        onClick: nv
      } = (0, t5.useTrackedClickRef)({
        eventName: t9.HatchClickEvent.CHAT_TAB_CLICK,
        actionTarget: "tab_chat",
        actionType: "click",
        metadata: {
          surface: "navigation",
          subsurface: "dock",
          screen: "chat",
          destination: "chat",
          was_highlighted: nc,
          has_unread_badge: !na && ne > 0,
          has_notification_badge: nr > 0,
          notification_count: nr,
          pending_approval_count: t7,
          side_chat_unread_count: t4,
          unread_count: tq
        }
      }),
      {
        ref: nC,
        onClick: ny
      } = (0, t5.useTrackedClickRef)({
        eventName: t9.HatchClickEvent.CHAT_AVATAR_CLICK,
        actionTarget: "dock_chat_avatar",
        actionType: "click",
        metadata: {
          surface: "navigation",
          subsurface: "dock",
          screen: "chat"
        }
      }),
      {
        onClick: n_
      } = (0, t5.useTrackedClickRef)({
        eventName: t9.HatchClickEvent.FEED_TAB_CLICK,
        actionTarget: "tab_feed",
        actionType: "click",
        metadata: {
          surface: "navigation",
          subsurface: "dock",
          screen: "feed",
          destination: "feed",
          was_highlighted: nu
        }
      }),
      {
        onClick: nb
      } = (0, t5.useTrackedClickRef)({
        eventName: t9.HatchClickEvent.IDEAS_TAB_CLICK,
        actionTarget: "tab_ideas",
        actionType: "click",
        metadata: {
          surface: "navigation",
          subsurface: "dock",
          screen: "ideas",
          destination: "ideas",
          was_highlighted: nd
        }
      }),
      {
        onClick: nS
      } = (0, t5.useTrackedClickRef)({
        eventName: t9.HatchClickEvent.GOALS_TAB_CLICK,
        actionTarget: "tab_goals",
        actionType: "click",
        metadata: {
          surface: "navigation",
          subsurface: "dock",
          screen: "goals",
          destination: "goals",
          was_highlighted: nh
        }
      }),
      {
        onClick: nx
      } = (0, t5.useTrackedClickRef)({
        eventName: t9.HatchClickEvent.LIBRARY_TAB_CLICK,
        actionTarget: "tab_library",
        actionType: "click",
        metadata: {
          surface: "navigation",
          subsurface: "dock",
          screen: "library",
          destination: "library",
          was_highlighted: nm
        }
      }),
      {
        onClick: nk
      } = (0, t5.useTrackedClickRef)({
        eventName: t9.HatchClickEvent.AGENTS_TAB_CLICK,
        actionTarget: "tab_agents",
        actionType: "click",
        metadata: {
          surface: "navigation",
          subsurface: "dock",
          agent_count: ev.length,
          chat_count: ey
        }
      }),
      nE = (0, t5.useInteractionLogger)(),
      nA = (0, t5.useInteractionLoggerWithLazyData)(),
      nw = (0, rg.useScrollToPlayingAudio)(),
      nR = (0, rv.useAudioPlayerSource)(),
      {
        vmName: nH,
        gatewayUrl: nP
      } = (0, c.useHatchServerData)(),
      nI = (0, eo.useOptionalHatchVoiceCall)(),
      nN = tf[tf.length - 1] ?? null,
      nj = (0, rm.useVoiceConfigBugReportInfo)(e4, F),
      nD = (0, rf.buildHatchBugReportMetadata)(nH, nP, nN, e6, nI?.getMostRecentCallInfo() ?? null, null, nj, F),
      nL = (0, r.useCallback)(() => {
        e9((0, rp.findLatestVisibleHatchMessageId)()), e5(!0)
      }, []),
      nM = (0, r.useCallback)(() => {
        e5(!1), e9(null)
      }, []),
      nO = (0, r.useCallback)((e, t) => {
        "space" === e.openTarget.kind ? eB(e.openTarget.slug, {
          source: t
        }) : "saved_space" === e.openTarget.kind ? eV(e.openTarget.shortcode, {
          source: t
        }) : "file" === e.openTarget.kind && eW(e.openTarget.path)
      }, [eB, eV, eW]),
      nF = (0, r.useCallback)((e, t) => {
        eH({
          node: e,
          initialScreen: t
        })
      }, []),
      nU = tm.fbs._("Failed to update pin", null, {
        hk: "1SeSzf"
      }),
      nz = (0, r.useCallback)((e, t, n) => {
        q && (0, n1.pinArtifact)($, e, t, n).catch(e => {
          lR.error({
            error: e,
            tags: (0, ec.hatchSentryTags)(ec.HATCH_SENTRY_SURFACES.SPACE)
          }, "Failed to pin artifact"), rx.toast.error(nU)
        })
      }, [q, $, nU]),
      nK = tm.fbs._("Failed to update pin", null, {
        hk: "2NSolz"
      }),
      nB = (0, r.useCallback)(({
        displayName: e,
        itemKey: t,
        pinnedOrder: n,
        source: a
      }) => {
        let r = W.gatewayUrl;
        null == r || !q || (0, rk.isNavigationUnsupportedForGateway)(r, W.vmName) || (0, rk.optimisticSetNavigationPinnedOrder)({
          displayName: e,
          gatewayUrl: r,
          itemKey: t,
          onError: () => {
            rx.toast.error(nK)
          },
          pinnedOrder: n,
          queryClient: Q,
          sendRequest: $,
          source: a,
          vmName: W.vmName
        })
      }, [q, Q, $, W.gatewayUrl, W.vmName, nK]),
      nV = (0, r.useCallback)((e, t) => {
        "chat" !== (0, lA.normalizeDockSystemNavigationKey)(e) && nB({
          displayName: e,
          itemKey: e,
          pinnedOrder: t,
          source: "system"
        })
      }, [nB]),
      nW = (0, r.useCallback)((e, t, n) => {
        nE({
          eventName: t9.HatchClickEvent.NAVIGATION_RECENT_REMOVE_CLICK,
          actionTarget: "dock_navigation_recent_remove",
          actionType: "click",
          metadata: {
            source: e,
            entry_point: n,
            item_key: "saved_space" === e ? (0, rE.hashSavedSpaceShortcode)(t) : t,
            surface: "navigation",
            subsurface: "dock"
          }
        })
      }, [nE]),
      nG = tm.fbs._("Failed to remove from recents", null, {
        hk: "1W54vs"
      }),
      nY = (0, r.useCallback)((e, t, n) => {
        let a = W.gatewayUrl;
        null == a || !q || (0, rk.isNavigationUnsupportedForGateway)(a, W.vmName) || ((0, rk.optimisticRemoveNavigationRecent)({
          gatewayUrl: a,
          itemKey: t,
          onError: () => {
            rx.toast.error(nG)
          },
          queryClient: Q,
          sendRequest: $,
          source: e,
          vmName: W.vmName
        }), nW(e, t, n))
      }, [q, nW, Q, $, W.gatewayUrl, W.vmName, nG]),
      nq = tm.fbs._("Failed to remove from recents", null, {
        hk: "1W54vs"
      }),
      n$ = (0, r.useCallback)((e, t) => {
        let n = (0, aK.artifactRefToRecentsTouch)(e.artifactRef),
          a = W.gatewayUrl;
        null == n || null == a || !q || (0, rk.isNavigationUnsupportedForGateway)(a, W.vmName) || ((0, ro.optimisticRemoveArtifactFromRecents)(a, W.vmName, e.artifactRef), (0, rk.removeNavigationRecent)($, n.source, n.item_key).catch(e => {
          lR.error({
            error: e,
            tags: (0, ec.hatchSentryTags)(ec.HATCH_SENTRY_SURFACES.NAVIGATION)
          }, "Failed to remove artifact from recents"), rx.toast.error(nq)
        }), nW(n.source, n.item_key, t))
      }, [q, nW, $, W.gatewayUrl, W.vmName, nq]),
      nQ = (0, r.useCallback)((e, t) => {
        nY("system", e, t)
      }, [nY]),
      nX = (0, lg.useIsNarrowViewport)(),
      nZ = (0, r.useCallback)(e => {
        if (null != ez && (ez === e || e.endsWith(`-${ez}`))) {
          h || (eO(), f(!0));
          return
        }
        i() && B(`/saved-space/${encodeURIComponent(e)}`, {
          commitWrapper: tj
        })
      }, [h, eO, B, f, i, tj, ez]),
      nJ = "files" === X,
      n0 = J?.route.path === j.SHELL_PATH.libraryArtifact,
      n2 = nJ || n0,
      n3 = (0, r.useCallback)((e, t) => {
        "artifact" === t ? B(e, {
          commitWrapper: tj
        }) : B(e)
      }, [B, tj]),
      {
        stepBack: n8
      } = (0, r_.useLibraryBackCycle)({
        activeLibraryRoutePath: J?.route.path ?? null,
        closeFileViewer: tI,
        isArtifactViewerActive: n0,
        isFileViewerOpen: tP,
        isLibraryRouteActive: nJ,
        libraryPath: v,
        navigateBack: n3
      }),
      n4 = "feed" === X,
      n5 = "ideas" === X,
      n9 = "goals" === X,
      n7 = "agents" === X,
      at = (0, ae.useIsMacOs)(),
      as = (0, ae.useIsMacDesktop)(),
      ac = "artifact" === u ? null : tV ? "chat" : n4 ? "feed" : n5 ? "ideas" : n9 ? "goals" : nJ ? "library" : n7 ? "agents" : null,
      au = null != ac && lA.HATCH_DOCK_SYSTEM_RECENT_NAVIGATION_KEYS.has(ac) ? ac : null,
      ad = tm.fbs._("Chat", null, {
        hk: "2j7FDH"
      }),
      af = tm.fbs._("Feed", null, {
        hk: "35PGdl"
      }),
      ap = tm.fbs._("Ideas", null, {
        hk: "42NBiC"
      }),
      ag = tm.fbs._("Goals", null, {
        hk: "O0LrH"
      }),
      av = tm.fbs._("Library", null, {
        hk: "4mlLiD"
      }),
      aC = tm.fbs._("Shared Agents", null, {
        hk: "2xPYQ2"
      }),
      ay = (0, r.useMemo)(() => ({
        chat: ad,
        feed: af,
        ideas: ap,
        goals: ag,
        library: av,
        agents: aC
      }), [aC, ad, af, ag, ap, av]),
      a_ = (0, r.useMemo)(() => (0, lA.resolveHatchDockSystemNavigationItems)({
        items: es,
        titles: ay
      }), [es, ay]),
      ab = (0, r.useMemo)(() => a_.flatMap(e => {
        let t = (0, lA.normalizeDockSystemNavigationKey)(e.item_key);
        if ("chat" === t || "agents" === t && !eC) return [];
        let n = null != t ? ay[t] : null,
          a = null != t && t === ns,
          r = null != t && (no || a),
          l = null != t ? r ? lA.HATCH_DOCK_SYSTEM_NAVIGATION[t].highlightedIcon ?? lA.HATCH_DOCK_SYSTEM_NAVIGATION[t].icon : lA.HATCH_DOCK_SYSTEM_NAVIGATION[t].icon : null,
          i = "agents" === t,
          o = null == t ? void 0 : lA.HATCH_DOCK_SYSTEM_NAVIGATION[t].favoriteOrder;
        return null != t && null != n && null != l ? [{
          itemKey: e.item_key,
          title: e.display_name.trim() || n,
          accessedAtMs: e.accessed_at_ms,
          isFavorite: !!i || e.is_favorite,
          favoriteOrder: i ? e.favorite_order ?? o ?? null : e.is_favorite ? e.favorite_order : null,
          icon: l,
          animatedIcon: r || K ? void 0 : lA.HATCH_DOCK_SYSTEM_NAVIGATION[t].animatedIcon,
          staticMatchAnimatedIcon: r && !K ? lA.HATCH_DOCK_SYSTEM_NAVIGATION[t].animatedIcon : void 0,
          mirrorAnimatedSizing: lA.HATCH_DOCK_SYSTEM_NAVIGATION[t].mirrorAnimatedSizing,
          isAlwaysPinned: i,
          highlighted: r,
          assistantHighlighted: a,
          nowPlayingSource: "library" === t ? "podcasts" : void 0,
          ...r ? {
            ariaLabel: (0, aq.highlightedNavigationAriaLabel)(n)
          } : {}
        }] : []
      }), [eC, ns, a_, no, ay, K]),
      aS = (0, r.useMemo)(() => ab.find(e => (0, lA.normalizeDockSystemNavigationKey)(e.itemKey) === ac)?.itemKey ?? null, [ac, ab]),
      ax = p && h,
      ak = (0, rR.useIsLiveAvatarTileVisible)(),
      aE = ax && !ak,
      aA = K || null == ni.expiresAtMs || null == ns || "chat" === ns && 0 !== nr ? null : ay[ns],
      aT = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
      null != aA && null != ns && aT.current !== ni.requestId && (aT.current = ni.requestId, C.markUiHighlightRendered(ni.requestId), nA({
        eventName: t6.HatchImpressionEvent.UI_CONTROL_LIGHTUP_IMPRESSION,
        actionTarget: "dock_navigation_lightup",
        actionType: "vpv_impression",
        metadata: {
          surface: "navigation",
          subsurface: "dock",
          destination: ns
        }
      }))
    }, [ns, nA, aA, ni.requestId]);
    let aw = Math.max(n6.HATCH_DOCK_MIN_RECENTS, n6.HATCH_DOCK_MAX_RECENTS_FILL - 2),
      aR = (0, r.useMemo)(() => (0, az.partitionArtifacts)(eh), [eh]),
      aH = aR.pinned.length,
      aP = aR.recent.length,
      aI = aH + (0, r.useMemo)(() => ab.filter(e => e.isFavorite).length, [ab]),
      aN = ah(),
      aj = (0, r.useMemo)(() => eP ? (0, n6.getHatchDockResolvedLayout)({
        favoriteItemCount: aI,
        favoriteRecentBudgetItemCount: aI,
        minimumItemCount: Math.max(n6.HATCH_DOCK_LOADING_ITEM_COUNT, 2 + ab.length + n6.HATCH_DOCK_LOADING_ARTIFACT_ROW_COUNT),
        recentDockItemCount: aP,
        reservedItemCount: 2,
        spacing: {
          kind: "fixed",
          itemGap: n6.HATCH_DOCK_GLYPH_TO_SHAPE_ITEM_GAP,
          maxItemSize: n6.HATCH_DOCK_GLYPH_TO_SHAPE_ITEM_SIZE
        },
        viewportHeight: aN
      }) : (0, n6.getHatchDockLoadingLayout)(aN), [eP, ab.length, aN, aI, aI, aP, 2]),
      aD = aj.maxVisibleSpaceItems + (eP ? 0 : ab.length),
      aL = !eP || eh.length > 0,
      aM = (0, nT.useIdentityName)(),
      aO = (0, r.useCallback)(() => {}, []),
      aF = (0, r.useCallback)((e, t) => tD(e, t), [tD]),
      aU = (0, r.useCallback)((e, t) => aF(() => {
        tM?.(), e()
      }, t), [tM, aF]),
      aV = (0, r.useCallback)(() => {
        h || (eO(), f(!0))
      }, [h, eO, f]),
      aY = (0, r.useCallback)(e => {
        tH ? tI() : aV(e)
      }, [tI, aV, tH]),
      a$ = (0, r.useCallback)(e => {
        eS(e), e && k(!1)
      }, [k]),
      aQ = (0, r.useCallback)(() => !tK && !!p && !nX && (h && f(!1), !0), [h, p, tK, nX, f]),
      aX = (0, r.useCallback)(e => (nv(), k(!1), e && aQ()), [nv, aQ, k]),
      aZ = (0, r.useCallback)(e => {
        let t = 0 === e.button && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey;
        if (t && eL && !ej) {
          e.preventDefault(), nv(), k(!1);
          return
        }
        if (t && tB) {
          if (e.preventDefault(), nv(), eS(!1), !t$) {
            nA({
              eventName: t9.HatchClickEvent.CHAT_SCROLL_TO_BOTTOM,
              actionTarget: "dock_chat_scroll_to_bottom",
              actionType: "click",
              metadata: {
                surface: "navigation",
                subsurface: "dock",
                screen: "chat",
                source: "dock_chat_nav_click"
              }
            }), window.dispatchEvent(new Event("hatch-scroll-to-bottom"));
            return
          }
          eL || nA({
            eventName: t9.HatchClickEvent.CHAT_THREADS_OPEN_CLICK,
            actionTarget: "dock_chat_open_side_chats",
            actionType: "click",
            metadata: {
              surface: "navigation",
              subsurface: "dock",
              screen: "chat",
              source: "dock_chat_nav_click"
            }
          }), k(!0);
          return
        }
        aX(e.shiftKey) ? e.preventDefault() : tB && nw() && (e.preventDefault(), nE({
          eventName: t9.HatchClickEvent.CHAT_AUDIO_SCROLL_TO_PLAYING,
          actionTarget: "nav_scroll_to_playing",
          actionType: "click",
          metadata: {
            surface: "navigation",
            subsurface: "dock"
          }
        }))
      }, [tB, t$, eL, ej, nv, nA, nE, nw, aX, k]),
      aJ = (0, r.useCallback)(() => {
        eS(!1), k(e => !!ej || !e)
      }, [ej, k]);
    (0, r.useEffect)(() => (window.addEventListener("hatch-toggle-side-chats", aJ), () => window.removeEventListener("hatch-toggle-side-chats", aJ)), [aJ]);
    let a0 = (0, lf.useRegisterChatRouteOverride)(),
      a1 = (0, r.useRef)(null),
      a2 = (0, r.useCallback)(e => {
        Q.setQueriesData({
          queryKey: rA.threadSessionsQueryKeys.all
        }, t => t?.map(t => t.session_id === e ? {
          ...t,
          unread_count: 0
        } : t)), $("chat.mark_seen", {
          thread_id: e
        }).catch(t => {
          Q.invalidateQueries({
            queryKey: rA.threadSessionsQueryKeys.all
          });
          let n = {
            error: t,
            sessionId: e,
            tags: (0, ec.hatchSentryTags)(ec.HATCH_SENTRY_SURFACES.CHAT)
          };
          (0, eD.isGatewayDisconnectError)(t) ? lR.retainForBugReport("warn", "Failed to mark selected side chat seen (gateway disconnected)"): lR.error(n, "Failed to mark selected side chat seen")
        })
      }, [Q, $]),
      a3 = (0, r.useCallback)((e, t) => {
        (k(!1), p && !nX && null != a0) ? (0, lu.runHatchViewTransition)({
          type: "hatch-mobile-push",
          update: () => {
            t?.(), h && f(!1), null == a1.current && (a1.current = Symbol("dock-side-chats")), a0(a1.current, e), "thread" === e.kind && a2(e.sessionId)
          },
          allowMobile: !0
        }) : (tM?.(), B("main" === e.kind ? "/" : "draft" === e.kind ? lc.HATCH_DRAFT_THREAD_PATH : (0, lc.buildHatchThreadPath)(e.sessionId), {
          commitWrapper: (e, n) => aF(() => {
            t?.(), e()
          }, n)
        }))
      }, [h, tM, aF, p, nX, a2, B, f, a0, k]),
      a8 = (0, r.useCallback)(e => {
        (0, lc.getHatchChatRouteKey)(tL) === (0, lc.getHatchChatRouteKey)(e.route) ? ti(e): a3(e.route, () => ti(e))
      }, [tL, a3, ti]),
      a4 = (0, r.useCallback)(e => {
        R(e), k(!0)
      }, [R, k]),
      a5 = (0, r.useCallback)(e => {
        nA({
          eventName: t9.HatchClickEvent.CHAT_THREADS_OPEN_CLICK,
          actionTarget: "click" === e ? "side_chats_panel_open_divider" : "side_chats_panel_open_drag",
          actionType: e,
          metadata: {
            surface: "navigation",
            subsurface: "dock",
            screen: "chat",
            source: "click" === e ? "dock_edge_click" : "dock_edge_drag"
          }
        })
      }, [nA]),
      a6 = (0, r.useCallback)(e => {
        eS(!1), a5(e), k(!0)
      }, [a5, k]),
      a9 = (0, r.useCallback)(() => {
        eS(!1), a5("drag"), nA({
          eventName: t9.HatchClickEvent.CHAT_THREADS_PANEL_PIN_CLICK,
          actionTarget: "side_chats_panel_pin_drag",
          actionType: "drag",
          metadata: {
            surface: "navigation",
            subsurface: "dock"
          }
        }), a4(!0)
      }, [a4, nA, a5]),
      a7 = eb || eL,
      re = (0, r.useCallback)(e => {
        lA.HATCH_DOCK_SYSTEM_RECENT_NAVIGATION_KEYS.has(e) && W.gatewayUrl && q && (0, rk.touchAndUpsertNavigationRecent)($, Q, W.gatewayUrl, W.vmName, "system", e).catch(t => {
          lR.error({
            error: t,
            itemKey: e,
            tags: (0, ec.hatchSentryTags)(ec.HATCH_SENTRY_SURFACES.NAVIGATION)
          }, "Failed to touch system navigation recent")
        })
      }, [q, Q, $, W.gatewayUrl, W.vmName]);
    (0, r.useEffect)(() => {
      null != au && re(au)
    }, [au, re]);
    let rn = (0, r.useCallback)(e => {
        if (!(0, aG.canNavigateToArtifact)(e)) return;
        let t = e.openTarget;
        if (null != eK && eK === e.artifactRef) {
          h || (eO(), f(!0));
          return
        }
        if ("saved_space" === t.kind) return void nZ(t.shortcode);
        if ("space" === t.kind && !i()) return;
        let n = (0, aK.artifactNavigation)(t);
        null != n && ("file-dialog" === n.kind ? l(n.path) : B(n.path, {
          commitWrapper: tj
        }))
      }, [h, eO, nZ, B, f, l, i, tj, eK]),
      rH = (0, r.useCallback)((e, t) => {
        let n = (0, lA.normalizeDockSystemNavigationKey)(e);
        switch (eS(!1), n) {
          case "chat":
            if (aX(t?.openInSplit === !0)) return;
            B((0, lA.getHatchDockSystemNavigationPath)("chat", v), {
              commitWrapper: tB ? aO : aU
            });
            return;
          case "feed":
            n_(), B((0, lA.getHatchDockSystemNavigationPath)("feed", v), {
              commitWrapper: n4 ? aV : tj
            });
            return;
          case "ideas":
            nb(), B((0, lA.getHatchDockSystemNavigationPath)("ideas", v), {
              commitWrapper: n5 ? aV : tj
            });
            return;
          case "goals":
            nS(), B((0, lA.getHatchDockSystemNavigationPath)("goals", v), {
              commitWrapper: n9 ? aV : tj
            });
            return;
          case "library":
            if (nx(), n2 && n8()) return;
            B(tH || "podcasts" !== nR ? (0, lA.getHatchDockSystemNavigationPath)("library", v) : j.SHELL_PATH.libraryPodcasts, {
              commitWrapper: nJ ? aY : tj
            });
            return;
          case "agents":
            nk(), B((0, lA.getHatchDockSystemNavigationPath)("agents", v), {
              commitWrapper: n7 ? aV : tj
            });
            return;
          default:
            return
        }
      }, [nR, aV, aY, aU, n7, tB, n4, n9, n5, tH, nJ, n2, v, nk, n_, nS, nb, nx, B, tj, aX, aO, n8]);
    return (0, n.jsxs)(nf.TooltipProvider, {
      delayDuration: 0,
      skipDelayDuration: 1500,
      children: [(0, n.jsx)(r.Suspense, {
        fallback: null,
        children: (0, n.jsx)(lM, {
          onResolve: D
        })
      }), (0, n.jsxs)("div", {
        "data-hatch-dock": !0,
        "data-hatch-toast-origin": "viewport",
        className: (0, tk.cn)("absolute start-0 top-0 bottom-0 hidden flex-col md:flex", eb && "border-separator border-e", a7 ? "z-[26]" : "z-[24]"),
        style: {
          width: a7 ? void 0 : n6.HATCH_DOCK_RAIL_WIDTH
        },
        children: [(0, n.jsx)(ld.HatchUiLightupStatus, {
          destination: aA
        }), (0, n.jsxs)("div", {
          ref: e2,
          "data-hatch-dock-surface": !0,
          className: (0, tk.cn)("flex h-full w-full transition-shadow duration-200", eM ? "shadow-blur-elevation-03 bg-bg-primary dark:bg-[var(--ai-gray-900)]" : eb ? "shadow-blur-elevation-03 bg-bg-primary" : "bg-transparent"),
          children: [(0, n.jsx)("div", {
            ref: U,
            "aria-hidden": "true",
            "data-hatch-side-chats-open-drag-nav-fill": !0,
            className: "bg-bg-primary pointer-events-none absolute inset-y-0 start-0 opacity-0 dark:bg-[var(--ai-gray-900)]",
            style: {
              width: n6.HATCH_DOCK_RAIL_WIDTH - 1
            }
          }), (0, n.jsxs)("div", {
            "data-hatch-dock-rail": !0,
            "data-testid": "hatch-dock-rail",
            "data-layout-state": "ready",
            className: "relative flex h-full shrink-0 flex-col",
            style: {
              width: n6.HATCH_DOCK_RAIL_WIDTH
            },
            children: [!a7 && (0, n.jsx)("span", {
              "aria-hidden": "true",
              "data-testid": "hatch-dock-rail-divider",
              className: "bg-fill-divider pointer-events-none absolute inset-y-0 end-0 z-10 w-px"
            }), (0, n.jsxs)("div", {
              "data-hatch-dock-avatar-slot": !0,
              className: "relative shrink-0 pt-4",
              style: {
                height: n6.HATCH_DOCK_TOP_SECTION_HEIGHT
              },
              children: [aE ? (0, n.jsx)(ao.DockItemTooltip, {
                label: aM,
                children: (0, n.jsx)(ry.default, {
                  ref: nC,
                  to: "/",
                  "aria-label": tm.fbs._("Open full chat with {assistantName}", [tm.fbs._param("assistantName", aM)], {
                    hk: "3J5Vmm"
                  }),
                  "data-testid": "hatch-nav-chat-avatar",
                  commitWrapper: aF,
                  className: "relative flex w-full shrink-0 cursor-pointer items-center justify-center",
                  style: {
                    height: n6.HATCH_DOCK_GLYPH_TO_SHAPE_ITEM_SIZE
                  },
                  onClick: () => {
                    ny(), k(!1)
                  },
                  children: (0, n.jsx)("span", {
                    className: "sr-only",
                    children: aM
                  })
                })
              }) : (0, n.jsx)("div", {
                "aria-hidden": "true",
                className: "w-full shrink-0",
                style: {
                  height: n6.HATCH_DOCK_GLYPH_TO_SHAPE_ITEM_SIZE
                }
              }), ax && (0, n.jsx)("div", {
                "data-hatch-dock-avatar-visual-slot": !0,
                className: "pointer-events-none absolute inset-x-0 flex items-center justify-center",
                style: {
                  top: 16,
                  height: n6.HATCH_DOCK_GLYPH_TO_SHAPE_ITEM_SIZE
                },
                children: (0, n.jsx)(rI, {
                  ariaLabel: aM,
                  avatarHidden: ak,
                  enabled: ax,
                  requestActive: ax
                })
              })]
            }), (0, n.jsx)("div", {
              "data-hatch-dock-primary-nav": !0,
              className: "scrollbar-hide flex min-h-0 flex-1 flex-col items-stretch overflow-y-auto overscroll-contain",
              children: (0, n.jsxs)("div", {
                "data-hatch-dock-primary-list": !0,
                className: "my-auto flex shrink-0 flex-col items-stretch",
                style: {
                  minHeight: aL ? (0, n6.getHatchDockPrimaryListMinHeight)(aj.itemSize) : void 0
                },
                children: [(0, n.jsx)(lF, {
                  revealIndex: 0,
                  label: tm.fbs._("Chat", null, {
                    hk: "2goiEj"
                  }),
                  shortcut: {
                    key: "j",
                    modifiers: {
                      meta: !0
                    }
                  },
                  panelType: "chat",
                  children: (0, n.jsx)(ry.default, {
                    ref: ng,
                    to: "/",
                    "data-testid": "hatch-nav-chat",
                    "aria-keyshortcuts": at ? "Meta+J" : "Control+J",
                    "aria-label": np ? (0, aq.highlightedNavigationAriaLabel)(tm.fbs._("Chat", null, {
                      hk: "PKKAp"
                    })) : 1 === nr ? tm.fbs._("Chat, 1 notification", null, {
                      hk: "3gioeV"
                    }) : nr > 1 ? tm.fbs._("Chat, {notificationCount} notifications", [tm.fbs._param("notificationCount", String(nr))], {
                      hk: "20i9bs"
                    }) : tm.fbs._("Chat", null, {
                      hk: "PKKAp"
                    }),
                    "aria-current": tV ? "page" : void 0,
                    "aria-expanded": tB || eL ? eL : void 0,
                    commitWrapper: tB ? aO : aU,
                    onClick: aZ,
                    className: "group relative flex w-full shrink-0 cursor-pointer items-center justify-center",
                    style: {
                      minHeight: aj.itemSize,
                      paddingBlock: aj.itemGap / 2
                    },
                    children: (0, n.jsxs)("span", {
                      className: "relative inline-flex",
                      children: [(0, n.jsx)(lC.DockSystemIcon, {
                        icon: np ? lA.HATCH_DOCK_SYSTEM_NAVIGATION.chat.highlightedIcon ?? lA.HATCH_DOCK_SYSTEM_NAVIGATION.chat.icon : lA.HATCH_DOCK_SYSTEM_NAVIGATION.chat.icon,
                        animatedIcon: np || K ? void 0 : lA.HATCH_DOCK_SYSTEM_NAVIGATION.chat.animatedIcon,
                        staticMatchAnimatedIcon: np && !K ? lA.HATCH_DOCK_SYSTEM_NAVIGATION.chat.animatedIcon : void 0,
                        size: aj.itemSize,
                        active: tV,
                        highlighted: np,
                        withShadow: !0,
                        hoverSurface: "item",
                        suppressInactiveBackground: !0
                      }), (0, n.jsx)(aB.HatchNowPlayingWaveform, {
                        source: "chat",
                        className: "text-hatch-accent absolute start-1/2 -bottom-1 -translate-x-1/2"
                      }), nr > 0 && (0, n.jsx)(lX, {
                        surfaceSize: (0, n6.getHatchDockSystemIconSurfaceSize)(aj.itemSize, !0),
                        testId: "hatch-dock-chat-notification-badge"
                      })]
                    })
                  })
                }), (0, n.jsx)(lF, {
                  revealIndex: 1,
                  label: tm.fbs._("Search", null, {
                    hk: "2y1aDw"
                  }),
                  shortcut: {
                    key: "k",
                    modifiers: {
                      meta: !0
                    }
                  },
                  children: (0, n.jsx)("button", {
                    ref: tb,
                    type: "button",
                    "data-testid": "hatch-nav-search",
                    "aria-keyshortcuts": at ? "Meta+K" : "Control+K",
                    "aria-label": tm.fbs._("Search", null, {
                      hk: "X7KXl"
                    }),
                    onClick: () => {
                      tS(), tg()
                    },
                    className: "group relative flex w-full shrink-0 cursor-pointer items-center justify-center",
                    style: {
                      minHeight: aj.itemSize,
                      paddingBlock: aj.itemGap / 2
                    },
                    children: (0, n.jsx)(lC.DockSystemIcon, {
                      icon: ar.default,
                      animatedIcon: K ? void 0 : "SystemSearch",
                      size: aj.itemSize,
                      iconSize: 24,
                      withShadow: !0,
                      hoverSurface: "item",
                      suppressInactiveBackground: !0
                    })
                  })
                }), (0, n.jsx)("div", {
                  "data-hatch-dock-artifact-region": !0,
                  className: "flex w-full shrink-0 flex-col",
                  style: {
                    minHeight: aL ? (0, n6.getHatchDockArtifactRegionMinHeight)(aj.itemSize, ab.length) : void 0
                  },
                  children: ab.length > 0 || eP && eh.length > 0 ? (0, n.jsx)(s.EctoErrorBoundary, {
                    surface: ec.HATCH_SENTRY_SURFACES.NAVIGATION,
                    children: (0, n.jsx)(rt, {
                      revealOffset: 2,
                      nodes: eP ? eh : [],
                      systemItems: ab,
                      systemItemsEditable: eP,
                      selectedArtifactRef: eK,
                      selectedSystemItemKey: aS,
                      collapsed: !0,
                      collapsedItemGap: aj.itemGap,
                      collapsedItemSize: aj.itemSize,
                      collapsedMaxVisibleItems: aD,
                      maxRecentFill: aw,
                      minRecents: n6.HATCH_DOCK_MIN_RECENTS,
                      onOpenArtifact: rn,
                      onOpenSystemItem: rH,
                      onRemoveRecentArtifact: n$,
                      onRemoveRecentSystem: eP ? nQ : void 0,
                      onDeleteArtifact: e => nO(e, "dock_overflow"),
                      onShareArtifact: nF,
                      onPinArtifact: nz,
                      onSetSystemFavoriteOrder: eP ? nV : void 0,
                      overflowOpen: eb,
                      onOverflowOpenChange: a$,
                      onOverflowItemIdsChange: e8,
                      dragApiRef: e1
                    })
                  }) : null
                })]
              })
            }), (0, n.jsxs)("div", {
              "data-hatch-dock-bottom-utilities": !0,
              className: "relative z-10 flex shrink-0 flex-col pb-1",
              style: {
                minHeight: n6.HATCH_DOCK_BOTTOM_UTILITY_RESERVED_HEIGHT
              },
              children: [(0, n.jsx)(lK, {}), (0, n.jsxs)("div", {
                className: "mt-auto flex flex-col items-stretch",
                children: [(0, n.jsx)("div", {
                  className: "hatch-dock-reveal-item",
                  style: {
                    animationDelay: `${11*n6.HATCH_DOCK_REVEAL_STAGGER_MS}ms`
                  },
                  children: null != e7 && (0, n.jsx)(ly.HatchAppDownloadPromo, {
                    onCardOpen: () => eY(!1),
                    audience: e7,
                    dockItemGap: aj.itemGap,
                    dockItemSize: aj.itemSize,
                    enabled: er,
                    introduceDesktopApp: M && as,
                    macEnabled: M,
                    onOpenDownloadDialog: () => e0("dock_button", e7)
                  })
                }), (0, n.jsxs)(am.DropdownMenu, {
                  open: eG,
                  onOpenChange: eq,
                  children: [(0, n.jsx)(ao.DockItemTooltip, {
                    label: tm.fbs._("Settings", null, {
                      hk: "4nINC7"
                    }),
                    disabled: eG,
                    children: (0, n.jsx)(am.DropdownMenuTrigger, {
                      asChild: !0,
                      children: (0, n.jsx)("button", {
                        ref: ty,
                        type: "button",
                        "aria-label": tm.fbs._("Settings", null, {
                          hk: "4nINC7"
                        }),
                        "data-testid": "hatch-dock-more",
                        className: "hatch-dock-reveal-item group relative flex w-full shrink-0 cursor-pointer items-center justify-center",
                        style: {
                          minHeight: aj.itemSize,
                          paddingBlock: aj.itemGap / 2,
                          animationDelay: `${11*n6.HATCH_DOCK_REVEAL_STAGGER_MS}ms`
                        },
                        onClick: t_,
                        children: (0, n.jsx)(lC.DockSystemIcon, {
                          icon: ai.default,
                          size: aj.itemSize,
                          showBgOnHover: !0,
                          mirrorAnimatedSizing: !0
                        })
                      })
                    })
                  }), (0, n.jsxs)(am.DropdownMenuContent, {
                    side: "right",
                    align: "end",
                    sideOffset: 4,
                    children: [O && (0, n.jsxs)(n.Fragment, {
                      children: [(0, n.jsx)(r.Suspense, {
                        fallback: null,
                        children: (0, n.jsx)(lT, {
                          vmList: te,
                          selectedVm: tt,
                          onSelectVm: tn,
                          onModelChange: tu,
                          onVoiceSelectionAccepted: () => eY(!1),
                          isVmListLoading: ta
                        })
                      }), (0, n.jsx)(am.DropdownMenuSeparator, {})]
                    }), (0, n.jsx)(am.DropdownMenuItem, {
                      ref: tx,
                      leadingIcon: lv,
                      label: tm.fbs._("Keyboard shortcuts", null, {
                        hk: "2d7oSx"
                      }),
                      shortcut: {
                        key: "/",
                        modifiers: {
                          meta: !0
                        }
                      },
                      onSelect: () => {
                        tE(), tp()
                      }
                    }), null != e7 && (0, n.jsx)(am.DropdownMenuItem, {
                      ref: tw,
                      leadingIcon: rL,
                      label: tm.fbs._("Download apps", null, {
                        hk: "bjo2V"
                      }),
                      onSelect: () => {
                        tR(), e0("dock_settings_menu", e7)
                      }
                    }), (0, n.jsx)(am.DropdownMenuItem, {
                      ref: tA,
                      leadingIcon: aa.default,
                      label: tm.fbs._("Report an issue", null, {
                        hk: "27XcF7"
                      }),
                      onSelect: () => {
                        tT(), nL()
                      }
                    }), (0, n.jsx)(am.DropdownMenuSeparator, {}), (0, n.jsx)(am.DropdownMenuItem, {
                      ref: tv,
                      leadingIcon: al.default,
                      label: tm.fbs._("Settings", null, {
                        hk: "3sqK4g"
                      }),
                      shortcut: rj,
                      onSelect: () => {
                        tC(), t()
                      }
                    })]
                  })]
                })]
              })]
            })]
          }), (0, n.jsx)(lB, {
            nodes: eh,
            systemItems: ab,
            selectedArtifactRef: eK,
            selectedSystemItemKey: aS,
            isOpen: eb,
            overflowItemIds: eE,
            dragApi: e1.current,
            onOpenArtifact: e => {
              eS(!1), rn(e)
            },
            onOpenSystemItem: e => {
              eS(!1), rH(e)
            },
            onRemoveRecentArtifact: n$,
            onRemoveRecentSystem: nQ,
            onPinArtifact: nz,
            onSetSystemFavoriteOrder: nV,
            onDeleteArtifact: e => nO(e, "dock_overflow"),
            canCreateArtifactShares: eT,
            onShareArtifact: nF,
            onShowAllSpaces: () => {
              eS(!1), B(j.SHELL_PATH.libraryArtifacts, {
                commitWrapper: tj
              })
            },
            onContextMenuOpenChange: e => {
              e3.current = e
            }
          }), (0, n.jsx)(s.EctoErrorBoundary, {
            surface: ec.HATCH_SENTRY_SURFACES.NAVIGATION,
            fallback: ({
              error: e,
              reset: t
            }) => (0, n.jsx)("div", {
              className: (0, tk.cn)("border-separator bg-bg-primary h-full overflow-hidden border-s border-e", eL && !ej && "dark:bg-[var(--ai-gray-900)]"),
              style: {
                width: E
              },
              children: (0, n.jsx)(eR.HatchContentErrorFallback, {
                error: e,
                onRetry: t,
                alwaysShowRetry: !0
              })
            }),
            onError: () => {
              eN(!0), T(!1)
            },
            onReset: () => {
              eN(!1), T(!0)
            },
            resetKeys: [b, x, X],
            children: (0, n.jsx)(la, {
              isOpen: eL,
              contentEnabled: ea || x || tJ.length > 0,
              canOpenFromEdge: tU && !K && !eb && !eI,
              canPinFromEdge: A,
              onOpenFromEdge: a6,
              onPinFromEdge: a9,
              onOpenDragProgressChange: z,
              width: E,
              onWidthPreview: H,
              onWidthCommit: P,
              onClosePreviewChange: I,
              dataEnabled: er,
              canPin: A,
              isPinned: ej,
              onPinnedChange: a4,
              activeThreadSessionId: tL?.kind === "thread" ? tL.sessionId : null,
              onClose: () => k(!1),
              onSelectMainChat: () => {
                tl(), a3({
                  kind: "main"
                })
              },
              onSelectThread: e => {
                tl(), a3({
                  kind: "thread",
                  sessionId: e
                })
              },
              onSelectMessage: a8,
              onNewSideChat: () => {
                tl(), a3({
                  kind: "draft"
                })
              },
              pendingSearchQuery: tG ? ex : null,
              onPendingSearchQueryConsumed: () => ek(null)
            })
          })]
        })]
      }), null != e7 && null != e$ && (0, n.jsx)(s.EctoErrorBoundary, {
        surface: ec.HATCH_SENTRY_SURFACES.PROMOTIONS,
        fallback: ({
          error: e,
          reset: t
        }) => (0, n.jsx)(lx, {
          error: e,
          onRetry: () => {
            lj(), eQ(e => null == e ? null : {
              ...e,
              qrCodesPromise: lE()
            }), eZ(e => e + 1), t()
          },
          onClose: () => eQ(null)
        }),
        resetKeys: [e$.entrypoint, eX],
        children: (0, n.jsx)(r.Suspense, {
          fallback: (0, n.jsx)(lS, {
            onClose: () => eQ(null)
          }),
          children: (0, n.jsx)(lD, {
            DialogComponent: eJ,
            dialog: e$,
            onOpenChange: e => {
              e || eQ(null)
            }
          })
        })
      }), e4 && (0, n.jsx)(r.Suspense, {
        fallback: null,
        children: (0, n.jsx)(lP, {
          isOpen: e4,
          onClose: nM,
          reportSource: ra.BugReportSource.FLOATING_BUG_NUB,
          attachedMetadata: nD
        })
      }), null != ew && "space" === ew.node.openTarget.kind && (0, n.jsx)(rM.HatchSpaceShareDialog, {
        isOpen: !0,
        artifact: ew.node,
        onClose: () => eH(null),
        spaceName: ew.node.displayName,
        spaceSlug: ew.node.openTarget.slug,
        shareType: "cloudflare",
        initialScreen: ew.initialScreen,
        onNavigateToChat: () => {
          eH(null), B("/")
        }
      }), null != ts && (0, n.jsx)(r.Suspense, {
        fallback: null,
        children: (0, n.jsx)(lw, {
          isOpen: !0,
          nextIsAvocado: (0, rF.isHatchAvocadoModel)(ts),
          onConfirm: td,
          onCancel: th
        })
      })]
    })
  }

  function lF(e) {
    let t, r, l, i, o = (0, a.c)(13),
      {
        label: s,
        shortcut: c,
        panelType: u,
        revealIndex: d,
        children: h
      } = e,
      {
        registerRef: f
      } = (0, rT.useHatchDock)();
    o[0] !== u || o[1] !== f ? (t = e => {
      u && f(u, e)
    }, o[0] = u, o[1] = f, o[2] = t) : t = o[2];
    let m = t,
      p = `${d*n6.HATCH_DOCK_REVEAL_STAGGER_MS}ms`;
    return o[3] !== p ? (r = {
      animationDelay: p
    }, o[3] = p, o[4] = r) : r = o[4], o[5] !== h || o[6] !== m || o[7] !== r ? (l = (0, n.jsx)("div", {
      ref: m,
      className: "hatch-dock-reveal-item",
      style: r,
      children: h
    }), o[5] = h, o[6] = m, o[7] = r, o[8] = l) : l = o[8], o[9] !== s || o[10] !== c || o[11] !== l ? (i = (0, n.jsx)(ao.DockItemTooltip, {
      label: s,
      shortcut: c,
      children: l
    }), o[9] = s, o[10] = c, o[11] = l, o[12] = i) : i = o[12], i
  }

  function lU(e) {
    let t, r, l, i = (0, a.c)(9),
      {
        label: o,
        children: s,
        onDrop: c
      } = e,
      u = c ? lz : void 0;
    return i[0] !== o ? (t = (0, n.jsx)("div", {
      className: "mb-1 px-2",
      children: (0, n.jsx)("h3", {
        className: "text-subheadline-emphasized text-text-secondary",
        children: o
      })
    }), i[0] = o, i[1] = t) : t = i[1], i[2] !== s ? (r = (0, n.jsx)("div", {
      className: "flex flex-col",
      children: s
    }), i[2] = s, i[3] = r) : r = i[3], i[4] !== c || i[5] !== u || i[6] !== t || i[7] !== r ? (l = (0, n.jsxs)("div", {
      className: "mb-3",
      onDragOver: u,
      onDrop: c,
      children: [t, r]
    }), i[4] = c, i[5] = u, i[6] = t, i[7] = r, i[8] = l) : l = i[8], l
  }

  function lz(e) {
    e.preventDefault(), e.dataTransfer.dropEffect = "move"
  }

  function lK() {
    let e, t = (0, a.c)(1);
    return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("div", {
      className: "mx-auto my-1 h-px"
    }), t[0] = e) : e = t[0], e
  }

  function lB({
    nodes: e,
    systemItems: t,
    selectedArtifactRef: a,
    selectedSystemItemKey: l,
    isOpen: i,
    overflowItemIds: o,
    dragApi: c,
    onOpenArtifact: u,
    onOpenSystemItem: d,
    onRemoveRecentArtifact: h,
    onRemoveRecentSystem: f,
    onPinArtifact: m,
    onSetSystemFavoriteOrder: p,
    onDeleteArtifact: g,
    canCreateArtifactShares: v,
    onShareArtifact: C,
    onShowAllSpaces: y,
    onContextMenuOpenChange: _
  }) {
    let {
      ref: b
    } = (0, t5.useTrackedImpressionRef)({
      eventName: t6.HatchImpressionEvent.SPACE_OVERFLOW_MENU_IMPRESSION,
      actionTarget: "space_overflow_menu",
      metadata: {
        surface: "spaces",
        subsurface: "dock_overflow"
      }
    }, {
      enabled: i
    }), {
      ref: S,
      onClick: x
    } = (0, t5.useTrackedClickRef)({
      eventName: t9.HatchClickEvent.SPACE_OVERFLOW_SHOW_ALL_CLICK,
      actionTarget: "space_overflow_show_all",
      actionType: "click",
      metadata: {
        surface: "spaces",
        subsurface: "dock_overflow"
      }
    }), k = (0, r.useMemo)(() => [...e.map(e => ({
      kind: "artifact",
      id: a$(e.artifactRef),
      title: e.displayName,
      favoriteOrder: e.isPinned ? e.pinnedOrder ?? Number.MAX_SAFE_INTEGER : null,
      accessedAtMs: e.lastOpenedAtMs,
      node: e
    })), ...t.map(e => ({
      kind: "system",
      id: aQ(e.itemKey),
      title: e.title,
      favoriteOrder: e.favoriteOrder,
      accessedAtMs: e.accessedAtMs,
      systemItem: e
    }))], [e, t]), E = (0, r.useMemo)(() => new Map(k.map(e => [e.id, e])), [k]), A = (0, r.useMemo)(() => k.filter(e => null != e.favoriteOrder).sort((e, t) => Number("system" === t.kind && !0 === t.systemItem.isPinnedLocked) - Number("system" === e.kind && !0 === e.systemItem.isPinnedLocked) || (e.favoriteOrder ?? Number.MAX_SAFE_INTEGER) - (t.favoriteOrder ?? Number.MAX_SAFE_INTEGER) || e.id.localeCompare(t.id)), [k]), T = (0, r.useMemo)(() => new Set(A.map(e => e.id)), [A]), w = (0, r.useMemo)(() => k.filter(e => null == e.favoriteOrder).sort((e, t) => e.title.localeCompare(t.title)), [k]), R = (0, r.useMemo)(() => new Set(o), [o]), H = (0, r.useMemo)(() => A.filter(e => R.has(e.id)), [R, A]), P = A.filter(e => "system" === e.kind && !0 === e.systemItem.isPinnedLocked).length, I = (0, r.useMemo)(() => w.filter(e => "system" === e.kind).sort((e, t) => e.title.localeCompare(t.title) || e.id.localeCompare(t.id)), [w]), N = (0, r.useMemo)(() => w.filter(e => "system" !== e.kind), [w]), j = (0, r.useMemo)(() => N.filter(e => R.has(e.id) && null != e.accessedAtMs).sort((e, t) => (t.accessedAtMs ?? 0) - (e.accessedAtMs ?? 0) || e.title.localeCompare(t.title) || e.id.localeCompare(t.id)).slice(0, 5), [N, R]), D = (0, r.useCallback)(e => "artifact" === e.kind ? null != a && a === e.node.artifactRef : l === e.systemItem.itemKey, [a, l]), L = (0, r.useCallback)(e => {
      "artifact" === e.kind ? u(e.node) : d(e.systemItem.itemKey)
    }, [u, d]), [M, O] = (0, r.useState)(!1), [F, U] = (0, r.useState)(null), [z, K] = (0, r.useState)(null), B = (0, r.useRef)(null), V = null != z && aJ(z) && !T.has(z), W = H.length > 0 || V, G = (0, r.useCallback)(e => {
      let t = e.dataTransfer.getData(a0);
      if (t) try {
        let e = JSON.parse(t);
        if (e?.type === "rail_item" && "string" == typeof e.itemId && aJ(e.itemId)) return e.itemId
      } catch {}
      return null != z && aJ(z) ? z : null
    }, [z]), Y = (0, r.useCallback)((e, t) => {
      let n = A.filter(e => e.id !== t),
        a = e > 0 ? n[e - 1]?.favoriteOrder ?? null : null,
        r = e < n.length ? n[e]?.favoriteOrder ?? null : null;
      return null != a && null != r ? (a + r) / 2 : null != a ? a + 1 : null != r ? r / 2 : 1
    }, [A]), q = (0, r.useCallback)((e, t) => {
      let n = A.slice(t).filter(t => "artifact" === t.kind && t.node.artifactRef !== e),
        a = A.slice(0, t).filter(t => "artifact" === t.kind && t.node.artifactRef !== e);
      null != n[0] ? m(e, !0, {
        before_artifact_ref: n[0].node.artifactRef
      }) : a.length > 0 ? m(e, !0, {
        after_artifact_ref: a[a.length - 1].node.artifactRef
      }) : m(e, !0)
    }, [m, A]), $ = (0, r.useCallback)((e, t) => {
      if ("artifact" === e.kind) {
        e.node.capabilities.canPin && q(e.node.artifactRef, t);
        return
      }!0 !== e.systemItem.isPinnedLocked && p(e.systemItem.itemKey, Y(t, e.id))
    }, [Y, p, q]), Q = (0, r.useCallback)(e => {
      if ("artifact" === e.kind) {
        e.node.capabilities.canPin && m(e.node.artifactRef, !1);
        return
      }!0 !== e.systemItem.isPinnedLocked && p(e.systemItem.itemKey, null)
    }, [m, p]), X = (0, r.useCallback)(e => {
      T.has(e.id) ? Q(e) : $(e, Math.max(P, A.length))
    }, [$, A.length, P, T, Q]), Z = (0, r.useCallback)(e => {
      e.preventDefault(), e.dataTransfer.dropEffect = "move", O(!0)
    }, []), J = (0, r.useCallback)(e => {
      B.current && !B.current.contains(e.relatedTarget) && (O(!1), U(null))
    }, []), ee = (0, r.useCallback)(() => {
      O(!1), U(null)
    }, []), et = (0, r.useCallback)(e => {
      e.preventDefault();
      let t = G(e),
        n = null != t ? E.get(t) : null;
      if (null == t || null == n) return void ee();
      let a = F ?? A.length,
        r = "system" === n.kind && !0 === n.systemItem.isPinnedLocked ? a : Math.max(P, a);
      if (T.has(t)) {
        let e = A.findIndex(e => e.id === t),
          a = r > e ? r - 1 : r;
        a !== e && $(n, a)
      } else $(n, r);
      ee()
    }, [E, A, T, P, F, ee, G, $]), en = (0, r.useCallback)((e, t) => {
      let n = e.currentTarget.getBoundingClientRect(),
        a = n.top + n.height / 2,
        r = e.clientY < a ? t : t + 1;
      r < P || (e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "move", O(!0), U(r))
    }, [P]), ea = (0, r.useCallback)(e => {
      K(e), null == e && ee()
    }, [ee]), er = (0, r.useCallback)(e => {
      e.preventDefault();
      let t = G(e),
        n = null != t ? E.get(t) : null;
      null != t && null != n && T.has(t) && Q(n), ee()
    }, [E, T, ee, G, Q]), el = e => {
      let t = T.has(e.id),
        a = () => X(e),
        r = null != e.accessedAtMs ? t => {
          "artifact" === e.kind ? h(e.node, t) : f(e.systemItem.itemKey, t)
        } : void 0;
      return "artifact" === e.kind ? (0, n.jsx)(s.EctoErrorBoundary, {
        surface: ec.HATCH_SENTRY_SURFACES.SPACE,
        children: (0, n.jsx)(lW, {
          node: e.node,
          itemId: e.id,
          isSelected: D(e),
          isFavorite: t,
          onOpen: () => L(e),
          onToggleFavorite: e.node.capabilities.canPin ? a : void 0,
          onRemoveRecent: r,
          canCreateShare: v,
          onShare: null != C && e.node.capabilities.canShare && "space" === e.node.openTarget.kind ? t => C(e.node, t) : void 0,
          onDelete: e.node.capabilities.canDelete ? () => g(e.node) : void 0,
          dragApi: c,
          onDragStatusChange: ea,
          onContextMenuOpenChange: _
        })
      }, e.id) : (0, n.jsx)(s.EctoErrorBoundary, {
        surface: ec.HATCH_SENTRY_SURFACES.NAVIGATION,
        children: (0, n.jsx)(l$, {
          item: e.systemItem,
          animationsEnabled: i,
          itemId: e.id,
          isSelected: D(e),
          isFavorite: t,
          onOpen: () => L(e),
          onToggleFavorite: !0 === e.systemItem.isPinnedLocked ? void 0 : a,
          onRemoveRecent: r,
          dragApi: c,
          onDragStatusChange: ea,
          onContextMenuOpenChange: _
        })
      }, e.id)
    };
    return (0, n.jsx)("div", {
      className: (0, tk.cn)("max-h-full overflow-hidden transition-[width] duration-200 ease-in-out", i ? "w-[280px]" : "w-0"),
      children: (0, n.jsx)("div", {
        ref: b,
        className: "scrollbar-hide border-separator flex h-full w-[280px] flex-col overflow-hidden border-s",
        children: (0, n.jsxs)("div", {
          className: "scrollbar-hide flex-1 overflow-y-auto overscroll-contain px-4 pt-4 pb-4",
          children: [(0, n.jsxs)(t_, {
            id: "dock-spaces",
            children: [I.length > 0 && (0, n.jsx)(lU, {
              label: tm.fbs._("Navigation", null, {
                hk: "1O52Zx"
              }),
              onDrop: er,
              children: I.map(e => el(e))
            }), W && (0, n.jsxs)("div", {
              className: "mb-3",
              children: [(0, n.jsx)("div", {
                className: "mb-1 px-2",
                children: (0, n.jsx)("h3", {
                  className: "text-subheadline-emphasized text-text-secondary",
                  children: tm.fbt._("Pinned", null, {
                    hk: "390M2F"
                  })
                })
              }), (0, n.jsx)("div", {
                ref: B,
                onDragOver: Z,
                onDragLeave: J,
                onDrop: et,
                className: (0, tk.cn)("flex flex-col transition-colors duration-150", M && null != z && aJ(z) && !T.has(z) && "bg-fill-secondary squircle-24"),
                children: H.length > 0 ? H.map(e => {
                  let t = A.findIndex(t => t.id === e.id);
                  return (0, n.jsxs)("div", {
                    className: "relative",
                    onDragOver: e => en(e, t),
                    onDrop: e => et(e),
                    children: [F === t && (0, n.jsx)("div", {
                      className: "bg-text-primary pointer-events-none absolute inset-x-2 top-0 z-10 h-0.5 rounded-full"
                    }), el(e), F === t + 1 && e.id === H[H.length - 1]?.id && (0, n.jsx)("div", {
                      className: "bg-text-primary pointer-events-none absolute inset-x-2 bottom-0 z-10 h-0.5 rounded-full"
                    })]
                  }, e.id)
                }) : M && (0, n.jsx)("div", {
                  className: "px-2 py-3 text-center",
                  children: (0, n.jsx)("span", {
                    className: "text-caption-1 text-text-secondary",
                    children: tm.fbt._("Drop to pin", null, {
                      hk: "1LF7Ta"
                    })
                  })
                })
              })]
            }), j.length > 0 && (0, n.jsx)(lU, {
              label: tm.fbs._("Recents", null, {
                hk: "4rMTX2"
              }),
              onDrop: er,
              children: j.map(e => el(e))
            })]
          }), (0, n.jsx)("div", {
            className: "mx-2 my-1 h-px bg-black/[0.04] dark:bg-white/[0.06]"
          }), (0, n.jsxs)("button", {
            ref: S,
            className: "text-subheadline text-text-primary rounded-12 hover:bg-fill-secondary flex w-full cursor-pointer items-center gap-3 px-2 py-1.5 transition-colors",
            onClick: () => {
              x(), y()
            },
            children: [(0, n.jsx)("span", {
              className: "bg-fill-secondary-elevated dark:bg-fill-primary flex shrink-0 items-center justify-center rounded-full",
              style: {
                width: n6.HATCH_DOCK_OVERFLOW_ICON_SIZE,
                height: n6.HATCH_DOCK_OVERFLOW_ICON_SIZE
              },
              children: (0, n.jsx)(nJ.HatchIcon, {
                icon: lA.HATCH_DOCK_SYSTEM_NAVIGATION.library.icon,
                size: 20,
                className: "text-text-primary",
                "aria-hidden": "true"
              })
            }), tm.fbt._("Show in library", null, {
              hk: "OGA2b"
            })]
          })]
        })
      })
    })
  }

  function lV({
    node: e,
    isFavorite: t,
    canCreateShare: a,
    onToggleFavorite: r,
    onRemoveRecent: l,
    onShare: i,
    onDelete: o,
    variant: s
  }) {
    let {
      Item: c,
      Separator: u
    } = (0, aw.hatchMenuPartsFor)(s), {
      pin: d,
      share: h,
      unshare: f,
      remove: m
    } = (0, at.useSpaceMenuItemTracking)(t, "dock_overflow", e.source, (0, aw.hatchMenuEntryPointFor)(s)), p = t ? tm.fbs._("Unpin", null, {
      hk: "7ty91"
    }) : tm.fbs._("Pin", null, {
      hk: "3RxX6T"
    }), g = "saved_space" === e.source ? tm.fbs._("Remove from Library", null, {
      hk: "47T9SF"
    }) : tm.fbs._("Delete", null, {
      hk: "4yYJ4l"
    }), v = null != r, C = null != l || null != o;
    return (0, n.jsxs)(n.Fragment, {
      children: [null != r && (0, n.jsx)(c, {
        ref: d.ref,
        leadingIcon: t ? ab.default : a_.default,
        label: p,
        onSelect: () => {
          d.onClick(), r()
        }
      }), null != i && "space" === e.openTarget.kind && (0, n.jsx)(aY.HatchArtifactSharingMenuItem, {
        canCreateShare: a,
        onSelect: i,
        shareTracking: h,
        showTrailingSeparator: !v && C,
        spaceSlug: e.openTarget.slug,
        unshareTracking: f,
        variant: s
      }), v && C && (0, n.jsx)(u, {}), null != l && (0, n.jsx)(c, {
        leadingIcon: ay.default,
        label: tm.fbs._("Remove from recents", null, {
          hk: "3sZ1HK"
        }),
        onSelect: () => l((0, aw.hatchMenuEntryPointFor)(s))
      }), null != o && (0, n.jsx)(c, {
        ref: m.ref,
        leadingIcon: aC.default,
        label: g,
        variant: "destructive",
        onSelect: () => {
          m.onClick(), o()
        }
      })]
    })
  }

  function lW({
    node: e,
    itemId: t,
    isSelected: a,
    isFavorite: l,
    onOpen: i,
    onToggleFavorite: o,
    onRemoveRecent: s,
    canCreateShare: c,
    onShare: u,
    onDelete: d,
    dragApi: h,
    onDragStatusChange: f,
    onContextMenuOpenChange: m
  }) {
    let p = (0, aK.toPelSafeArtifactId)(e.artifactRef),
      [g, v] = (0, r.useState)(!1),
      [C, y] = (0, r.useState)(!1),
      _ = (0, r.useRef)(null),
      b = e.capabilities.canPin,
      {
        ref: S,
        onClick: x
      } = (0, t5.useTrackedClickRef)({
        eventName: t9.HatchClickEvent.SPACE_OVERFLOW_SPACE_CLICK,
        actionTarget: "file" === e.source ? "file_overflow_open" : "space_overflow_space",
        actionType: "click",
        metadata: {
          surface: "spaces",
          subsurface: "dock_overflow",
          artifact_id: p,
          artifact_source: e.source
        }
      }),
      k = (0, at.useSpaceMenuOpenTracking)("dock_overflow", e.source, "hover_button"),
      E = (0, at.useSpaceMenuOpenTracking)("dock_overflow", e.source, "right_click"),
      A = null != o || null != s || null != d || null != u && "space" === e.openTarget.kind,
      T = (0, n7.useMergeRefs)(_, A ? E.ref : void 0),
      w = (0, aG.canNavigateToArtifact)(e);
    return (0, n.jsxs)(ap.ContextMenu, {
      onOpenChange: e => {
        e && A && E.onClick(), m?.(e)
      },
      children: [(0, n.jsx)(ap.ContextMenuTrigger, {
        asChild: !0,
        children: (0, n.jsxs)("div", {
          ref: T,
          draggable: b,
          "data-testid": `hatch-dock-overflow-artifact-${(0,aH.toHatchTestIdSegment)(e.artifactRef)}`,
          onDragStart: e => {
            !b || e.target instanceof Element && null != e.target.closest("[data-dock-overflow-menu]") ? e.preventDefault() : (_.current && aE(e, _.current), e.dataTransfer.setData(a0, JSON.stringify({
              type: "rail_item",
              itemId: t
            })), e.dataTransfer.effectAllowed = "move", v(!0), f?.(t), h?.startDrag(t))
          },
          onDragEnd: () => {
            v(!1), f?.(null), h?.endDrag()
          },
          className: (0, tk.cn)("group relative", g && "opacity-40"),
          children: [(0, n.jsxs)("button", {
            ref: S,
            type: "button",
            "aria-label": e.displayName,
            "aria-disabled": !w || void 0,
            onClick: w ? e => (0, aT.handleContextMenuTriggerClick)(e, () => {
              x(), i()
            }) : void 0,
            className: (0, tk.cn)("rounded-12 focus-visible:ring-hatch-accent/40 flex w-full items-center gap-3 border-0 bg-transparent px-2 py-1.5 text-start transition-colors focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset", w ? "hover:bg-fill-secondary-elevated cursor-pointer" : "cursor-default", a && "bg-fill-secondary-elevated"),
            children: [(0, n.jsx)(n9, {
              node: e
            }), (0, n.jsx)("span", {
              className: (0, tk.cn)("text-subheadline text-text-primary min-w-0 flex-1 truncate", A && "pe-8"),
              title: e.displayName,
              children: e.displayName
            })]
          }), A && (0, n.jsx)("div", {
            "data-dock-overflow-menu": !0,
            className: (0, tk.cn)("absolute inset-y-0 end-1 z-10 flex items-center transition-opacity", C ? "opacity-100" : "opacity-0 group-focus-within:opacity-100 group-hover:opacity-100"),
            children: (0, n.jsxs)(am.DropdownMenu, {
              onOpenChange: e => {
                e && k.onClick(), y(e), m?.(e)
              },
              children: [(0, n.jsx)(am.DropdownMenuTrigger, {
                asChild: !0,
                children: (0, n.jsx)(tO.IconButton, {
                  ref: k.ref,
                  icon: ag.default,
                  label: tm.fbs._("More options", null, {
                    hk: "3ZssaU"
                  }),
                  variant: "borderless",
                  size: "28"
                })
              }), (0, n.jsx)(am.DropdownMenuContent, {
                side: "right",
                align: "start",
                children: (0, n.jsx)(lV, {
                  node: e,
                  isFavorite: l,
                  canCreateShare: c,
                  onToggleFavorite: o,
                  onRemoveRecent: s,
                  onShare: u,
                  onDelete: d,
                  variant: "dropdown"
                })
              })]
            })
          })]
        })
      }), A && (0, n.jsx)(ap.ContextMenuContent, {
        children: (0, n.jsx)(lV, {
          node: e,
          isFavorite: l,
          canCreateShare: c,
          onToggleFavorite: o,
          onRemoveRecent: s,
          onShare: u,
          onDelete: d,
          variant: "context"
        })
      })]
    })
  }

  function lG({
    isFavorite: e,
    onToggleFavorite: t,
    onRemoveRecent: a,
    variant: r
  }) {
    let {
      Item: l
    } = (0, aw.hatchMenuPartsFor)(r), i = (0, at.useSpaceMenuPinTracking)(e, "dock_overflow", "space", (0, aw.hatchMenuEntryPointFor)(r)), o = e ? tm.fbs._("Unpin", null, {
      hk: "2sf1xL"
    }) : tm.fbs._("Pin", null, {
      hk: "28kc9P"
    });
    return (0, n.jsxs)(n.Fragment, {
      children: [null != t && (0, n.jsx)(l, {
        ref: i.ref,
        leadingIcon: e ? ab.default : a_.default,
        label: o,
        onSelect: () => {
          i.onClick(), t()
        }
      }), null != a && (0, n.jsx)(l, {
        leadingIcon: aC.default,
        label: tm.fbs._("Remove from recents", null, {
          hk: "3sZ1HK"
        }),
        onSelect: () => a((0, aw.hatchMenuEntryPointFor)(r))
      })]
    })
  }

  function lY({
    title: e,
    ariaLabel: t,
    testId: a,
    itemId: l,
    icon: i,
    iconFrame: o = "circle",
    truncateTitle: s = !0,
    isSelected: c,
    isFavorite: u,
    draggable: d = !0,
    trackedRef: h,
    onOpen: f,
    onLoggedOpen: m,
    onToggleFavorite: p,
    onRemoveRecent: g,
    dragApi: v,
    onDragStatusChange: C,
    onContextMenuOpenChange: y,
    onPointerEnter: _,
    onFocus: b
  }) {
    let [S, x] = (0, r.useState)(!1), [k, E] = (0, r.useState)(!1), A = (0, r.useRef)(null), T = null != p || null != g, w = (0, at.useSpaceMenuOpenTracking)("dock_overflow", "space", "hover_button"), R = (0, at.useSpaceMenuOpenTracking)("dock_overflow", "space", "right_click"), H = (0, n7.useMergeRefs)(A, h, T ? R.ref : void 0), P = () => {
      m?.(), f()
    };
    return (0, n.jsxs)(ap.ContextMenu, {
      onOpenChange: e => {
        e && T && R.onClick(), y?.(e)
      },
      children: [(0, n.jsx)(ap.ContextMenuTrigger, {
        asChild: !0,
        children: (0, n.jsxs)("div", {
          ref: H,
          role: "button",
          tabIndex: 0,
          draggable: d,
          "data-testid": a,
          onClick: e => (0, aT.handleContextMenuTriggerClick)(e, P),
          onKeyDown: e => {
            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), P())
          },
          onDragStart: e => {
            d ? (A.current && aE(e, A.current), e.dataTransfer.setData(a0, JSON.stringify({
              type: "rail_item",
              itemId: l
            })), e.dataTransfer.effectAllowed = "move", x(!0), C?.(l), v?.startDrag(l)) : e.preventDefault()
          },
          onDragEnd: () => {
            x(!1), C?.(null), v?.endDrag()
          },
          onMouseEnter: _,
          onPointerEnter: _,
          onFocus: b,
          "aria-label": t ?? e,
          className: (0, tk.cn)("rounded-12 hover:bg-fill-secondary-elevated group flex w-full cursor-pointer items-center gap-3 px-2 py-1.5 text-start transition-colors", c && "bg-fill-secondary-elevated", S && "opacity-40"),
          children: [(0, n.jsx)("span", {
            "data-testid": `${a}-icon-frame`,
            className: (0, tk.cn)("flex shrink-0 items-center justify-center", "circle" === o && (c ? "bg-fill-secondary rounded-full" : "bg-fill-secondary-elevated dark:bg-fill-primary group-hover:bg-fill-secondary group-focus-visible:bg-fill-secondary group-active:bg-fill-secondary rounded-full transition-colors"), "circle-on-hover" === o && "group-hover:bg-fill-secondary group-focus-visible:bg-fill-secondary group-active:bg-fill-secondary rounded-full transition-colors"),
            style: {
              width: n6.HATCH_DOCK_OVERFLOW_ICON_SIZE,
              height: n6.HATCH_DOCK_OVERFLOW_ICON_SIZE
            },
            children: i
          }), (0, n.jsx)("span", {
            className: (0, tk.cn)("text-subheadline text-text-primary min-w-0 flex-1", s ? "truncate" : "break-words"),
            title: s ? e : void 0,
            children: e
          }), (0, n.jsx)("div", {
            className: (0, tk.cn)("shrink-0 transition-opacity", T && (k ? "opacity-100" : "opacity-0 group-hover:opacity-100")),
            onClick: e => e.stopPropagation(),
            onPointerDown: e => e.stopPropagation(),
            children: T && (0, n.jsxs)(am.DropdownMenu, {
              onOpenChange: e => {
                e && w.onClick(), E(e), y?.(e)
              },
              children: [(0, n.jsx)(am.DropdownMenuTrigger, {
                asChild: !0,
                children: (0, n.jsx)(tO.IconButton, {
                  ref: w.ref,
                  icon: ag.default,
                  label: tm.fbs._("More options", null, {
                    hk: "4mabDv"
                  }),
                  variant: "borderless",
                  size: "28",
                  onClick: e => e.stopPropagation()
                })
              }), (0, n.jsx)(am.DropdownMenuContent, {
                side: "right",
                align: "start",
                onClick: e => e.stopPropagation(),
                children: (0, n.jsx)(lG, {
                  isFavorite: u,
                  onToggleFavorite: p,
                  onRemoveRecent: g,
                  variant: "dropdown"
                })
              })]
            })
          })]
        })
      }), T && (0, n.jsx)(ap.ContextMenuContent, {
        children: (0, n.jsx)(lG, {
          isFavorite: u,
          onToggleFavorite: p,
          onRemoveRecent: g,
          variant: "context"
        })
      })]
    })
  }

  function lq(e) {
    let t, r, l, i, o = (0, a.c)(30),
      {
        title: s,
        ariaLabel: c,
        testId: u,
        itemId: d,
        icon: h,
        iconFrame: f,
        truncateTitle: m,
        isSelected: p,
        isFavorite: g,
        draggable: v,
        clickEventName: C,
        impressionEventName: y,
        actionTarget: _,
        metadata: b,
        onOpen: S,
        onToggleFavorite: x,
        onRemoveRecent: k,
        dragApi: E,
        onDragStatusChange: A,
        onContextMenuOpenChange: T,
        onPointerEnter: w,
        onFocus: R
      } = e,
      H = void 0 === v || v;
    o[0] !== _ || o[1] !== C || o[2] !== b ? (t = {
      eventName: C,
      actionTarget: _,
      actionType: "click",
      targetArea: "nav_button",
      metadata: b
    }, o[0] = _, o[1] = C, o[2] = b, o[3] = t) : t = o[3];
    let {
      ref: P,
      onClick: I
    } = (0, t5.useTrackedClickRef)(t);
    o[4] !== _ || o[5] !== y || o[6] !== b ? (r = {
      eventName: y,
      actionTarget: _,
      targetArea: "nav_button",
      metadata: b
    }, o[4] = _, o[5] = y, o[6] = b, o[7] = r) : r = o[7], o[8] === Symbol.for("react.memo_cache_sentinel") ? (l = {
      threshold: "50%"
    }, o[8] = l) : l = o[8];
    let {
      ref: N
    } = (0, t5.useTrackedImpressionRef)(r, l), j = (0, n7.useMergeRefs)(P, N);
    return o[9] !== c || o[10] !== E || o[11] !== H || o[12] !== h || o[13] !== f || o[14] !== g || o[15] !== p || o[16] !== d || o[17] !== I || o[18] !== T || o[19] !== A || o[20] !== R || o[21] !== S || o[22] !== w || o[23] !== k || o[24] !== x || o[25] !== u || o[26] !== s || o[27] !== j || o[28] !== m ? (i = (0, n.jsx)(lY, {
      title: s,
      ariaLabel: c,
      testId: u,
      itemId: d,
      icon: h,
      iconFrame: f,
      truncateTitle: m,
      isSelected: p,
      isFavorite: g,
      draggable: H,
      trackedRef: j,
      onOpen: S,
      onLoggedOpen: I,
      onToggleFavorite: x,
      onRemoveRecent: k,
      dragApi: E,
      onDragStatusChange: A,
      onContextMenuOpenChange: T,
      onPointerEnter: w,
      onFocus: R
    }), o[9] = c, o[10] = E, o[11] = H, o[12] = h, o[13] = f, o[14] = g, o[15] = p, o[16] = d, o[17] = I, o[18] = T, o[19] = A, o[20] = R, o[21] = S, o[22] = w, o[23] = k, o[24] = x, o[25] = u, o[26] = s, o[27] = j, o[28] = m, o[29] = i) : i = o[29], i
  }

  function l$(e) {
    let t, r, l, i, o, s, c, u, d = (0, a.c)(36),
      {
        item: h,
        animationsEnabled: f,
        itemId: m,
        isSelected: p,
        isFavorite: g,
        onOpen: v,
        onToggleFavorite: C,
        onRemoveRecent: y,
        dragApi: _,
        onDragStatusChange: b,
        onContextMenuOpenChange: S
      } = e,
      x = h.icon,
      k = (0, ak.useHatchSystemIconPlayback)(h.animatedIcon, f),
      E = !0 === h.assistantHighlighted;
    d[0] !== h.itemKey || d[1] !== E ? (t = {
      surface: "navigation",
      subsurface: "dock_overflow",
      item_key: h.itemKey,
      destination: h.itemKey,
      was_highlighted: E
    }, d[0] = h.itemKey, d[1] = E, d[2] = t) : t = d[2];
    let A = t,
      T = h.title,
      w = h.ariaLabel;
    d[3] !== h.itemKey ? (r = (0, aH.toHatchTestIdSegment)(h.itemKey), d[3] = h.itemKey, d[4] = r) : r = d[4];
    let R = `hatch-dock-overflow-system-item-${r}`,
      H = h.animatedIcon,
      P = h.staticMatchAnimatedIcon;
    d[5] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n6.getHatchDockSystemIconGlyphSize)(n6.HATCH_DOCK_OVERFLOW_ICON_SIZE), i = (0, n6.getHatchDockSystemIconGlyphSize)(n6.HATCH_DOCK_OVERFLOW_ICON_SIZE), o = (0, n6.getHatchDockSystemAnimatedIconSize)(), s = (0, n6.getHatchDockSystemAnimatedIconDisplaySize)(n6.HATCH_DOCK_OVERFLOW_ICON_SIZE), d[5] = l, d[6] = i, d[7] = o, d[8] = s) : (l = d[5], i = d[6], o = d[7], s = d[8]);
    let I = !0 === h.highlighted ? aq.HATCH_UI_LIGHTUP_ICON_CLASS_NAME : "text-text-primary",
      N = !0 === h.highlighted;
    d[9] !== k.isPlaying || d[10] !== k.shouldLoadAnimation || d[11] !== k.stop || d[12] !== h.animatedIcon || d[13] !== h.staticMatchAnimatedIcon || d[14] !== I || d[15] !== N || d[16] !== x ? (c = (0, n.jsx)(ax.HatchSystemIconGlyph, {
      icon: x,
      animatedIcon: H,
      staticMatchAnimatedIcon: P,
      size: l,
      exactGlyphSize: i,
      animationSize: o,
      animationDisplaySize: s,
      isPlaying: k.isPlaying,
      shouldLoadAnimation: k.shouldLoadAnimation,
      onAnimationEnd: k.stop,
      className: I,
      reserveAnimationFrame: N
    }), d[9] = k.isPlaying, d[10] = k.shouldLoadAnimation, d[11] = k.stop, d[12] = h.animatedIcon, d[13] = h.staticMatchAnimatedIcon, d[14] = I, d[15] = N, d[16] = x, d[17] = c) : c = d[17];
    let j = p ? "circle" : "circle-on-hover",
      D = !h.isPinnedLocked;
    return d[18] !== _ || d[19] !== k.play || d[20] !== g || d[21] !== p || d[22] !== h.ariaLabel || d[23] !== h.title || d[24] !== m || d[25] !== S || d[26] !== b || d[27] !== v || d[28] !== y || d[29] !== C || d[30] !== c || d[31] !== j || d[32] !== D || d[33] !== R || d[34] !== A ? (u = (0, n.jsx)(lq, {
      title: T,
      ariaLabel: w,
      testId: R,
      itemId: m,
      icon: c,
      iconFrame: j,
      truncateTitle: !1,
      isSelected: p,
      isFavorite: g,
      draggable: D,
      clickEventName: t9.HatchClickEvent.SYSTEM_NAV_ITEM_CLICK,
      impressionEventName: t6.HatchImpressionEvent.SYSTEM_SIDEBAR_NAV_IMPRESSION,
      actionTarget: "dock_overflow_system_item",
      metadata: A,
      onOpen: v,
      onToggleFavorite: C,
      onRemoveRecent: y,
      dragApi: _,
      onDragStatusChange: b,
      onContextMenuOpenChange: S,
      onPointerEnter: k.play,
      onFocus: k.play
    }), d[18] = _, d[19] = k.play, d[20] = g, d[21] = p, d[22] = h.ariaLabel, d[23] = h.title, d[24] = m, d[25] = S, d[26] = b, d[27] = v, d[28] = y, d[29] = C, d[30] = c, d[31] = j, d[32] = D, d[33] = R, d[34] = A, d[35] = u) : u = d[35], u
  }
  let lQ = (1 - Math.SQRT1_2) / 2;

  function lX(e) {
    let t, r, l = (0, a.c)(6),
      {
        surfaceSize: i,
        testId: o
      } = e,
      s = Math.round(i * lQ - 5),
      c = `calc(${s+-2}px + 1px * var(--spacing-density))`,
      u = `calc(${s+2}px + 1px * var(--spacing-density))`;
    return l[0] !== c || l[1] !== u ? (t = {
      top: c,
      insetInlineEnd: u
    }, l[0] = c, l[1] = u, l[2] = t) : t = l[2], l[3] !== t || l[4] !== o ? (r = (0, n.jsx)("span", {
      "aria-hidden": "true",
      "data-testid": o,
      className: "bg-fill-blue absolute size-2 rounded-full",
      style: t
    }), l[3] = t, l[4] = o, l[5] = r) : r = l[5], r
  }
  var lZ = e.i(537295);

  function lJ(e) {
    let t, r, l, i, o, s, c, u, d, h, f, m, p = (0, a.c)(62),
      {
        children: g,
        isOpen: v,
        chatCollapsed: C,
        storageKey: y,
        collapseSubsurface: _,
        panelSide: b,
        defaultWidth: S,
        onClose: x,
        resizeHandlers: k,
        controlledPanelWidth: E,
        controlledMinPanelWidth: A,
        controlledChatMinWidth: T,
        controlledDefaultPanelWidth: w,
        onControlledPanelWidthPreview: R,
        onControlledPanelWidthCommit: H,
        showDividerAtRest: P,
        surfaceBackground: I,
        toastPane: N
      } = e,
      j = void 0 === b ? "right" : b,
      D = void 0 !== P && P,
      {
        navigate: L
      } = (0, rb.useShellNavigate)();
    p[0] !== L || p[1] !== x ? (t = () => {
      x ? x() : L("/")
    }, p[0] = L, p[1] = x, p[2] = t) : t = p[2];
    let M = t;
    p[3] !== T ? (r = (e, t) => r7(e?.parentElement ?? null, e, t ? T : void 0), p[3] = T, p[4] = r) : r = p[4];
    let O = r;
    p[5] !== w || p[6] !== E || p[7] !== H || p[8] !== R ? (l = {
      defaultWidth: w,
      onCommit: H,
      onPreview: R,
      width: E
    }, p[5] = w, p[6] = E, p[7] = H, p[8] = R, p[9] = l) : l = p[9], p[10] !== S ? (i = S ?? 800, p[10] = S, p[11] = i) : i = p[11];
    let F = A ?? 400;
    p[12] !== C || p[13] !== O || p[14] !== M || p[15] !== v || p[16] !== j || p[17] !== k || p[18] !== y || p[19] !== l || p[20] !== i || p[21] !== F ? (o = {
      chatCollapsed: C,
      controlled: l,
      defaultWidth: i,
      getMaxWidth: O,
      isOpen: v,
      maxWidthRatio: .85,
      minWidth: F,
      onCollapse: M,
      panelSide: j,
      resizeHandlers: k,
      storageKey: y
    }, p[12] = C, p[13] = O, p[14] = M, p[15] = v, p[16] = j, p[17] = k, p[18] = y, p[19] = l, p[20] = i, p[21] = F, p[22] = o) : o = p[22];
    let {
      frameWidth: U,
      contentStyle: z,
      flexValue: K,
      frameRef: B,
      isDragging: V,
      isResizing: W,
      isCollapsedByDrag: G,
      handlePointerDown: Y,
      maxWidth: q,
      nudgeWidth: $,
      resetWidth: Q
    } = le(o), X = v && !G, Z = X && !C && null != q, J = "right" === j ? "-ms-4" : "-me-4", ee = A ?? 400;
    p[23] !== _ || p[24] !== M || p[25] !== Y || p[26] !== V || p[27] !== q || p[28] !== $ || p[29] !== ee || p[30] !== j || p[31] !== U || p[32] !== Q || p[33] !== J || p[34] !== D || p[35] !== Z ? (s = Z && (0, n.jsx)(r$, {
      panelSide: j,
      panelWidth: U,
      minWidth: ee,
      maxWidth: q,
      onPointerDown: Y,
      isDragging: V,
      onNudgeWidth: $,
      onResetWidth: Q,
      onCollapse: M,
      collapseSubsurface: _,
      showDividerAtRest: D,
      className: J
    }), p[23] = _, p[24] = M, p[25] = Y, p[26] = V, p[27] = q, p[28] = $, p[29] = ee, p[30] = j, p[31] = U, p[32] = Q, p[33] = J, p[34] = D, p[35] = Z, p[36] = s) : s = p[36];
    let et = v && !G ? "content-panel" : void 0,
      en = v && !G ? void 0 === N ? "content-panel" : N : void 0,
      ea = K ?? void 0,
      er = !v || G ? 0 : 1;
    p[37] !== ea || p[38] !== er ? (c = {
      flex: ea,
      opacity: er
    }, p[37] = ea, p[38] = er, p[39] = c) : c = p[39];
    let el = X && ("primary" === (void 0 === I ? "dialog" : I) ? "bg-bg-primary" : "bg-fill-dialog");
    p[40] !== j || p[41] !== D || p[42] !== X || p[43] !== Z ? (u = X && D && !Z && (0, tk.cn)("border-fill-divider", "right" === j ? "border-s" : "border-e"), p[40] = j, p[41] = D, p[42] = X, p[43] = Z, p[44] = u) : u = p[44];
    let ei = W && "select-none";
    p[45] !== el || p[46] !== u || p[47] !== ei ? (d = (0, tk.cn)("relative z-10 flex flex-col overflow-hidden", el, u, ei), p[45] = el, p[46] = u, p[47] = ei, p[48] = d) : d = p[48];
    let eo = v && !C ? z : void 0;
    return p[49] !== g || p[50] !== eo ? (h = (0, n.jsx)("div", {
      className: "flex min-h-0 flex-1 flex-col overflow-hidden",
      style: eo,
      children: g
    }), p[49] = g, p[50] = eo, p[51] = h) : h = p[51], p[52] !== B || p[53] !== et || p[54] !== en || p[55] !== c || p[56] !== d || p[57] !== h ? (f = (0, n.jsx)("div", {
      ref: B,
      "data-hatch-pane-frame": "content-panel",
      "data-hatch-vt-pane": et,
      "data-hatch-toast-pane": en,
      style: c,
      className: d,
      children: h
    }), p[52] = B, p[53] = et, p[54] = en, p[55] = c, p[56] = d, p[57] = h, p[58] = f) : f = p[58], p[59] !== s || p[60] !== f ? (m = (0, n.jsxs)(n.Fragment, {
      children: [s, f]
    }), p[59] = s, p[60] = f, p[61] = m) : m = p[61], m
  }

  function l0() {
    let e, t, r, l = (0, a.c)(3);
    return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = tm.fbs._("Loading shopping", null, {
      hk: "jBNHU"
    }), l[0] = e) : e = l[0], l[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsxs)("div", {
      "aria-hidden": "true",
      className: "flex h-[60px] shrink-0 items-center px-3",
      children: [(0, n.jsx)("div", {
        className: "bg-fill-secondary h-4 w-24 rounded motion-safe:animate-pulse"
      }), (0, n.jsx)("div", {
        className: "bg-fill-secondary ms-auto size-9 rounded-full motion-safe:animate-pulse"
      })]
    }), l[1] = t) : t = l[1], l[2] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(tT.LoadingState, {
      name: "side_panel_shopping",
      className: "bg-bg-primary flex min-h-0 flex-1 flex-col overflow-hidden",
      children: (0, n.jsxs)("div", {
        role: "status",
        "aria-busy": "true",
        "aria-label": e,
        className: "flex min-h-0 flex-1 flex-col overflow-hidden",
        children: [t, (0, n.jsx)("div", {
          "aria-hidden": "true",
          className: "@container/shopping-grid-skeleton",
          children: (0, n.jsx)("div", {
            className: "grid grid-cols-2 gap-x-3 gap-y-4 p-4 @lg/shopping-grid-skeleton:grid-cols-3",
            children: Array.from({
              length: 6
            }).map(l1)
          })
        })]
      })
    }), l[2] = r) : r = l[2], r
  }

  function l1(e, t) {
    return (0, n.jsxs)("div", {
      className: "flex flex-col",
      children: [(0, n.jsx)("div", {
        className: "bg-fill-secondary rounded-12 border-fill-divider aspect-square w-full border-[0.5px] motion-safe:animate-pulse",
        style: {
          animationDelay: `${60*t}ms`
        }
      }), (0, n.jsxs)("div", {
        className: "mt-2 flex flex-col gap-1.5 px-0.5",
        children: [(0, n.jsx)("div", {
          className: "bg-fill-secondary h-3 w-4/5 rounded motion-safe:animate-pulse"
        }), (0, n.jsx)("div", {
          className: "bg-fill-secondary h-3 w-2/5 rounded motion-safe:animate-pulse"
        })]
      })]
    }, t)
  }
  var l2 = e.i(672495),
    l3 = e.i(239286),
    l8 = e.i(303859),
    l4 = e.i(576833),
    l5 = e.i(479223),
    l6 = e.i(149505),
    l9 = e.i(346577);
  let l7 = ["font", "letterSpacing", "textTransform", "fontKerning", "fontOpticalSizing", "fontSizeAdjust", "fontStretch", "fontVariant", "fontVariationSettings", "fontSynthesis", "textIndent"],
    ie = {
      all: "initial",
      position: "absolute",
      top: "0px",
      left: "0px",
      width: "0px",
      height: "0px",
      visibility: "hidden",
      overflow: "scroll",
      whiteSpace: "pre-wrap",
      wordBreak: "break-word"
    };

  function it(e) {
    return null == e ? "" : "number" == typeof e ? `${e}px` : e
  }
  let ia = (0, r.forwardRef)(function(e, t) {
    let l, i, o, s, c, u, d, h, f, m = (0, a.c)(26);
    m[0] !== e ? ({
      fieldSizing: l,
      sizeWidth: o,
      sizeHeight: s,
      useNativeFieldSizing: c,
      ...i
    } = e, m[0] = e, m[1] = l, m[2] = i, m[3] = o, m[4] = s, m[5] = c) : (l = m[1], i = m[2], o = m[3], s = m[4], c = m[5]);
    let p = void 0 === o || o,
      g = void 0 === s || s,
      v = void 0 === c || c,
      C = (0, r.useRef)(null),
      y = (0, r.useRef)(null);
    m[6] !== l || m[7] !== e.style?.height || m[8] !== e.style?.width || m[9] !== g || m[10] !== p || m[11] !== v ? (u = () => {
      if (v && window.CSS && window.CSS.supports("field-sizing", "content")) return;
      let t = C.current,
        n = function() {
          if ("content" === l) {
            if (p) {
              var e, n, a, r;
              let l, i, o, s, c, u, [d] = ((o = document.createElement("span")).innerText = "" === t.value ? t.placeholder : t.value, s = window.getComputedStyle(t), Object.assign(o.style, ie), l7.forEach(e => {
                o.style[e] = s[e]
              }), document.body.appendChild(o), e = o.scrollWidth, n = s, l = `calc(${e}px`, "border-box" === n.boxSizing && (l += ` + ${n.paddingLeft} + ${n.paddingRight} + ${n.borderLeftWidth} + ${n.borderRightWidth}`), c = l += ")", a = o.scrollHeight, r = s, i = `calc(${a}px`, "border-box" === r.boxSizing && (i += ` + ${r.paddingTop} + ${r.paddingBottom} + ${r.borderTopWidth} + ${r.borderBottomWidth}`), u = i += ")", document.body.removeChild(o), [c, u]);
              null != d && (t.style.width = d)
            }
            g && (t.style.height = "auto", t.style.height = `${t.scrollHeight}px`)
          }
        };
      n(), t.addEventListener("input", n);
      let a = "content" === l && g && "u" > typeof ResizeObserver ? new ResizeObserver(e => {
        let [t] = e, a = t?.contentRect.width;
        null != a && a !== y.current && (y.current = a, n())
      }) : null;
      return a?.observe(t), () => {
        t.style.width = it(e.style?.width), t.style.height = it(e.style?.height), t.removeEventListener("input", n), a?.disconnect()
      }
    }, m[6] = l, m[7] = e.style?.height, m[8] = e.style?.width, m[9] = g, m[10] = p, m[11] = v, m[12] = u) : u = m[12];
    let _ = e.style?.width,
      b = e.style?.height;
    return m[13] !== l || m[14] !== e.value || m[15] !== g || m[16] !== p || m[17] !== _ || m[18] !== b || m[19] !== v ? (d = [e.value, l, g, p, v, _, b], m[13] = l, m[14] = e.value, m[15] = g, m[16] = p, m[17] = _, m[18] = b, m[19] = v, m[20] = d) : d = m[20], (0, r.useLayoutEffect)(u, d), m[21] !== t ? (h = e => {
      C.current = e, "function" == typeof t ? t(e) : null != t && (t.current = e)
    }, m[21] = t, m[22] = h) : h = m[22], m[23] !== i || m[24] !== h ? (f = (0, n.jsx)("textarea", {
      ref: h,
      ...i
    }), m[23] = i, m[24] = h, m[25] = f) : f = m[25], f
  });
  var ir = e.i(607691),
    il = e.i(905156),
    ii = e.i(352702),
    io = e.i(30511),
    is = e.i(712181);
  let ic = (0, et.createClientLogger)("StopActiveBrowserTask");
  var iu = e.i(770256),
    id = e.i(375338);
  let ih = [.15, 1, .4, 1],
    im = [.45, .1, .2, 1],
    ip = {
      default: id.default,
      error: iu.default
    },
    ig = {
      default: "bg-fill-primary",
      error: "bg-fill-tone-light-destructive"
    },
    iv = {
      default: "text-icon-secondary-emphasized",
      error: "text-icon-destructive"
    },
    iC = {
      default: "text-text-primary",
      error: "text-text-destructive"
    };

  function iy({
    action: e,
    className: t,
    message: a,
    rootRef: r,
    tone: l
  }) {
    let i = (0, tS.useReducedMotion)();
    return (0, n.jsxs)(tb.motion.div, {
      ref: r,
      role: "alert",
      initial: i ? {
        opacity: 0
      } : {
        opacity: 0,
        y: 8,
        scale: .96
      },
      animate: i ? {
        opacity: 1,
        transition: {
          duration: 0
        }
      } : {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: .2,
          ease: ih
        }
      },
      exit: i ? {
        opacity: 0,
        transition: {
          duration: 0
        }
      } : {
        opacity: 0,
        y: 8,
        scale: .96,
        transition: {
          duration: .16,
          ease: im
        }
      },
      className: (0, tk.cn)("rounded-12 shadow-blur-elevation-01 relative z-10 mx-auto mb-3.5 flex w-max max-w-full items-center justify-center gap-0.5 px-2.5 py-2", ig[l], t),
      children: [(0, n.jsx)(nJ.HatchIcon, {
        "aria-hidden": "true",
        icon: ip[l],
        size: 20,
        iconSize: 14,
        className: iv[l]
      }), (0, n.jsx)("span", {
        title: a,
        className: (0, tk.cn)("text-subheadline min-w-0 truncate", iC[l]),
        children: a
      }), null != e && (0, n.jsx)("button", {
        ref: e.ref,
        type: "button",
        onClick: e.onClick,
        className: "text-subheadline-medium text-text-primary-link shrink-0 cursor-pointer bg-transparent whitespace-nowrap hover:brightness-95 focus:not-focus-visible:outline-none dark:hover:brightness-110",
        children: e.label
      })]
    })
  }

  function i_(e) {
    let t, r, l, i, o, s, c, u = (0, a.c)(13),
      {
        onRetry: d
      } = e;
    u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
      eventName: t6.HatchImpressionEvent.ERROR_CONTENT_IMPRESSION,
      actionTarget: "composer_startup_safety_error",
      metadata: {
        surface: "chat",
        subsurface: "composer_startup_safety"
      }
    }, u[0] = t) : t = u[0];
    let {
      ref: h
    } = (0, t5.useTrackedImpressionRef)(t);
    u[1] === Symbol.for("react.memo_cache_sentinel") ? (r = {
      eventName: t9.HatchClickEvent.ERROR_TRY_AGAIN_CLICK,
      actionTarget: "composer_startup_safety_retry",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "composer_startup_safety"
      }
    }, u[1] = r) : r = u[1];
    let {
      ref: f,
      onClick: m
    } = (0, t5.useTrackedClickRef)(r);
    return u[2] === Symbol.for("react.memo_cache_sentinel") ? (l = tm.fbs._("Chat couldn't finish loading.", null, {
      hk: "23PbLq"
    }), i = tm.fbs._("Try again", null, {
      hk: "ZcukF"
    }), u[2] = l, u[3] = i) : (l = u[2], i = u[3]), u[4] !== m || u[5] !== d ? (o = () => {
      m(), d()
    }, u[4] = m, u[5] = d, u[6] = o) : o = u[6], u[7] !== f || u[8] !== o ? (s = {
      label: i,
      onClick: o,
      ref: f
    }, u[7] = f, u[8] = o, u[9] = s) : s = u[9], u[10] !== h || u[11] !== s ? (c = (0, n.jsx)(iy, {
      tone: "default",
      rootRef: h,
      message: l,
      action: s
    }), u[10] = h, u[11] = s, u[12] = c) : c = u[12], c
  }
  let ib = {
      document: 0x1900000,
      image: null,
      text: 0x1900000,
      video: 0x6400000
    },
    iS = {
      image_budget: "composer_attachment_image_budget_error",
      processing: "composer_attachment_processing_error",
      size: "composer_attachment_size_error"
    };

  function ix(e) {
    let t, r, l, i, o, s = (0, a.c)(15),
      {
        alert: c,
        threadMetadata: u
      } = e;
    e: {
      if (c.translationInput?.kind === "size") {
        let e;
        s[0] !== c.translationInput.category ? (e = "video" === c.translationInput.category ? tm.fbs._("Couldn't upload. Video size is limited to 100 MB.", null, {
          hk: "3uIWBL"
        }) : tm.fbs._("Couldn't upload. File size is limited to 25 MB.", null, {
          hk: "219m1V"
        }), s[0] = c.translationInput.category, s[1] = e) : e = s[1], t = e;
        break e
      }
      if (c.translationInput?.kind === "processing") {
        let e;
        if (s[2] !== c.translationInput) {
          var d;
          e = 1 === (d = c.translationInput).failureCount ? tm.fbs._("Failed to attach {filename}.", [tm.fbs._param("filename", d.firstFailedFilename)], {
            hk: "Z6n7Y"
          }) : d.allFailuresAreImages ? tm.fbs._({
            "*": "Failed to attach {number} images.",
            _1: "Failed to attach 1 image."
          }, [tm.fbs._plural(d.failureCount, "number")], {
            hk: "28QrUi"
          }) : tm.fbs._({
            "*": "Failed to attach {number} files.",
            _1: "Failed to attach 1 file."
          }, [tm.fbs._plural(d.failureCount, "number")], {
            hk: "17oK9W"
          }), s[2] = c.translationInput, s[3] = e
        } else e = s[3];
        t = e;
        break e
      }
      t = c.message
    }
    let h = t,
      f = iS[c.reason];
    s[4] !== c.category ? (r = null != c.category ? {
      attachment_category: c.category
    } : {}, s[4] = c.category, s[5] = r) : r = s[5], s[6] !== r || s[7] !== u ? (l = {
      surface: "chat",
      subsurface: "composer_attachment",
      ...r,
      ...u
    }, s[6] = r, s[7] = u, s[8] = l) : l = s[8], s[9] !== f || s[10] !== l ? (i = {
      eventName: t6.HatchImpressionEvent.ERROR_CONTENT_IMPRESSION,
      actionTarget: f,
      metadata: l
    }, s[9] = f, s[10] = l, s[11] = i) : i = s[11];
    let {
      ref: m
    } = (0, t5.useTrackedImpressionRef)(i);
    return s[12] !== m || s[13] !== h ? (o = (0, n.jsx)(iy, {
      tone: "error",
      rootRef: m,
      message: h
    }), s[12] = m, s[13] = h, s[14] = o) : o = s[14], o
  }
  var ik = e.i(420297),
    iE = e.i(249295),
    iA = e.i(402592),
    iT = e.i(196138);

  function iw(e) {
    let t, n, l = (0, a.c)(4);
    l[0] !== e ? (t = t => (0, iT.subscribeToPinReminderState)(n => {
      n === e && t()
    }), l[0] = e, l[1] = t) : t = l[1];
    let i = t;
    l[2] !== e ? (n = () => null == e ? null : (0, iT.readPinReminderState)(e), l[2] = e, l[3] = n) : n = l[3];
    let o = n;
    return (0, r.useSyncExternalStore)(i, o, iR)
  }

  function iR() {
    return null
  }

  function iH(e) {
    let t, r, l, i, o, s = (0, a.c)(14),
      {
        attachedToComposer: c,
        reserveVoiceCallControlSpace: u
      } = e,
      {
        gatewayUrl: d
      } = (0, ei.useHatchRpc)();
    s[0] !== d ? (t = (0, iA.resolvePinReminderVmId)(d), s[0] = d, s[1] = t) : t = s[1];
    let h = t,
      f = iw(h)?.pendingReminder ?? null;
    s[2] === Symbol.for("react.memo_cache_sentinel") ? (r = {
      eventName: t6.HatchImpressionEvent.CHAT_PIN_REMINDER_CALLOUT_IMPRESSION,
      actionTarget: "chat_pin_reminder_callout",
      metadata: {
        surface: "chat",
        subsurface: "pin_reminder"
      }
    }, s[2] = r) : r = s[2];
    let {
      ref: m
    } = (0, t5.useTrackedImpressionRef)(r);
    s[3] === Symbol.for("react.memo_cache_sentinel") ? (l = {
      eventName: t9.HatchClickEvent.CHAT_PIN_REMINDER_CALLOUT_CLICK,
      actionTarget: "chat_pin_reminder_callout",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "pin_reminder"
      }
    }, s[3] = l) : l = s[3];
    let {
      ref: p,
      onClick: g
    } = (0, t5.useTrackedClickRef)(l);
    return s[4] !== c || s[5] !== p || s[6] !== m || s[7] !== g || s[8] !== f || s[9] !== u || s[10] !== h ? (i = null != h && null != f && (0, n.jsxs)(tb.motion.div, {
      ref: m,
      initial: {
        opacity: 0,
        y: 6
      },
      animate: {
        opacity: 1,
        y: 0
      },
      exit: {
        opacity: 0,
        y: -6
      },
      transition: {
        duration: .18,
        ease: [.18, .05, .1, .99]
      },
      className: (0, tk.cn)(c ? "bg-fill-secondary rounded-t-28 relative -mb-[38px] flex items-center gap-3 px-5 pt-1 pb-[42px]" : "bg-fill-secondary rounded-24 mb-2 flex items-center gap-3 px-5 py-2", c && (u ? "me-13 w-auto" : "w-full")),
      "data-hatch-pin-reminder-callout": !0,
      children: [(0, n.jsx)("div", {
        role: "status",
        "aria-live": "polite",
        className: "sr-only",
        children: tm.fbs._("Recovery PIN verification available above the message box.", null, {
          hk: "14YUK"
        })
      }), (0, n.jsx)("p", {
        className: "text-footnote text-text-primary min-w-0 flex-1",
        children: tm.fbt._("Verify your recovery PIN", null, {
          hk: "1pLPwt"
        })
      }), (0, n.jsx)(ik.Button, {
        ref: p,
        type: "button",
        "aria-haspopup": "dialog",
        "aria-label": tm.fbs._("Verify your recovery PIN", null, {
          hk: "2dC652"
        }),
        label: tm.fbs._("Verify", null, {
          hk: "1NTvG7"
        }),
        variant: "borderlessSelected",
        size: "32",
        radius: "rounded",
        className: "-me-3 shrink-0",
        labelClassName: "text-subheadline-medium",
        onClick: () => {
          g(), (0, iE.openPinReminderDialog)(h, f.reminder_id)
        }
      })]
    }, `${h}:${f.reminder_id}`), s[4] = c, s[5] = p, s[6] = m, s[7] = g, s[8] = f, s[9] = u, s[10] = h, s[11] = i) : i = s[11], s[12] !== i ? (o = (0, n.jsx)(tW.AnimatePresence, {
      initial: !1,
      children: i
    }), s[12] = i, s[13] = o) : o = s[13], o
  }
  var iP = e.i(515475),
    iI = e.i(30488),
    iN = e.i(907579),
    ij = e.i(863919),
    iD = e.i(221988),
    iL = e.i(252116),
    iM = e.i(288119),
    iO = e.i(764866),
    iF = e.i(570730);

  function iU(e) {
    let t, r, l, i, o, s, c = (0, a.c)(11);
    return c[0] !== e.title ? (t = null != e.title && (0, n.jsx)("title", {
      children: e.title
    }), c[0] = e.title, c[1] = t) : t = c[1], c[2] !== e.children ? (r = null != e.children && (0, n.jsx)("defs", {
      children: e.children
    }), c[2] = e.children, c[3] = r) : r = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)("path", {
      d: "M18.32 13.08C18.42 13.34 18.46 13.59 18.48 13.83C18.5 14.13 18.5 14.5 18.5 14.9V17.1C18.5 17.5 18.5 17.87 18.48 18.17C18.45 18.48 18.39 18.81 18.23 19.13C17.99 19.61 17.61 19.99 17.13 20.23C16.81 20.39 16.48 20.45 16.17 20.48C15.87 20.5 15.5 20.5 15.1 20.5H8.9C8.5 20.5 8.13 20.5 7.83 20.48C7.52 20.45 7.19 20.39 6.87 20.23C6.39 19.99 6.01 19.61 5.77 19.13C5.61 18.81 5.55 18.48 5.52 18.17C5.5 17.87 5.5 17.5 5.5 17.1V14.9C5.5 14.5 5.5 14.13 5.52 13.83C5.54 13.59 5.58 13.34 5.68 13.08L10.93 17.13C11.56 17.61 12.44 17.61 13.07 17.13L18.32 13.08Z"
    }), i = (0, n.jsx)("path", {
      d: "M15.1 11.5C15.5 11.5 15.87 11.5 16.17 11.52C16.48 11.55 16.81 11.61 17.13 11.77C17.22 11.82 17.3 11.87 17.38 11.92L12.15 15.94C12.06 16.01 11.94 16.01 11.85 15.94L6.62 11.92C6.7 11.86 6.78 11.82 6.87 11.77C7.19 11.61 7.52 11.55 7.83 11.52C8.13 11.5 8.5 11.5 8.9 11.5H15.1Z"
    }), o = (0, n.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.06 0.13C11.91 0.14 12.52 0.17 13.12 0.32C13.82 0.48 14.49 0.76 15.11 1.14C15.82 1.58 16.42 2.19 17.43 3.19L18.81 4.57C19.81 5.58 20.42 6.18 20.86 6.89C21.24 7.51 21.52 8.18 21.68 8.88C21.83 9.48 21.86 10.09 21.87 10.94C21.87 10.96 21.88 10.98 21.88 11V16.6C21.88 17.71 21.88 18.59 21.82 19.3C21.76 20.02 21.63 20.64 21.34 21.21C20.88 22.13 20.13 22.88 19.21 23.34C18.64 23.63 18.02 23.76 17.3 23.82C16.59 23.88 15.71 23.88 14.6 23.88H9.4C8.29 23.88 7.41 23.88 6.7 23.82C5.98 23.76 5.36 23.63 4.79 23.34C3.87 22.88 3.12 22.13 2.66 21.21C2.37 20.64 2.24 20.02 2.18 19.3C2.12 18.59 2.13 17.71 2.13 16.6V7.4C2.13 6.29 2.12 5.41 2.18 4.7C2.24 3.98 2.37 3.36 2.66 2.79C3.12 1.87 3.87 1.12 4.79 0.66C5.36 0.37 5.98 0.24 6.7 0.18C7.41 0.12 8.29 0.13 9.4 0.13H11C11.02 0.13 11.04 0.13 11.06 0.13ZM9.4 1.88C8.27 1.88 7.47 1.88 6.84 1.93C6.23 1.98 5.86 2.07 5.58 2.22C4.99 2.52 4.52 2.99 4.22 3.58C4.07 3.86 3.98 4.23 3.93 4.84C3.88 5.47 3.88 6.27 3.88 7.4V16.6C3.88 17.73 3.88 18.53 3.93 19.16C3.98 19.77 4.07 20.14 4.22 20.42C4.52 21.01 4.99 21.48 5.58 21.78C5.86 21.93 6.23 22.02 6.84 22.07C7.47 22.12 8.27 22.13 9.4 22.13H14.6C15.73 22.13 16.53 22.12 17.16 22.07C17.77 22.02 18.14 21.93 18.42 21.78C19.01 21.48 19.48 21.01 19.78 20.42C19.93 20.14 20.02 19.77 20.07 19.16C20.12 18.53 20.13 17.73 20.13 16.6V11.98C20.13 11.55 20.12 11.19 20.12 10.88C20.06 10.32 19.58 9.88 19 9.88H16C13.86 9.88 12.13 8.14 12.13 6V3C12.12 2.41 11.68 1.93 11.1 1.88C10.8 1.88 10.45 1.88 10.02 1.88H9.4ZM13.82 2.42C13.85 2.61 13.88 2.8 13.88 3V6C13.88 7.17 14.83 8.13 16 8.13H19C19.2 8.13 19.39 8.14 19.58 8.18C19.51 8.06 19.44 7.93 19.37 7.81C19.07 7.31 18.64 6.87 17.57 5.81L16.19 4.43C15.13 3.36 14.69 2.93 14.19 2.63C14.07 2.55 13.94 2.49 13.82 2.42Z"
    }), c[4] = l, c[5] = i, c[6] = o) : (l = c[4], i = c[5], o = c[6]), c[7] !== e || c[8] !== t || c[9] !== r ? (s = (0, n.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [t, r, l, i, o]
    }), c[7] = e, c[8] = t, c[9] = r, c[10] = s) : s = c[10], s
  }

  function iz(e) {
    let t, r, l, i, o = (0, a.c)(9);
    return o[0] !== e.title ? (t = null != e.title && (0, n.jsx)("title", {
      children: e.title
    }), o[0] = e.title, o[1] = t) : t = o[1], o[2] !== e.children ? (r = null != e.children && (0, n.jsx)("defs", {
      children: e.children
    }), o[2] = e.children, o[3] = r) : r = o[3], o[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.06 0.13C11.91 0.14 12.52 0.17 13.12 0.32C13.82 0.48 14.49 0.76 15.11 1.14C15.82 1.58 16.42 2.19 17.43 3.19L18.81 4.57C19.81 5.58 20.42 6.18 20.86 6.89C21.24 7.51 21.52 8.18 21.68 8.88C21.83 9.48 21.86 10.09 21.87 10.94C21.87 10.96 21.88 10.98 21.88 11V16.6C21.88 17.71 21.88 18.59 21.82 19.3C21.76 20.02 21.63 20.64 21.34 21.21C20.88 22.13 20.13 22.88 19.21 23.34C18.64 23.63 18.02 23.76 17.3 23.82C16.59 23.88 15.71 23.88 14.6 23.88H9.4C8.29 23.88 7.41 23.88 6.7 23.82C5.98 23.76 5.36 23.63 4.79 23.34C3.87 22.88 3.12 22.13 2.66 21.21C2.37 20.64 2.24 20.02 2.18 19.3C2.12 18.59 2.13 17.71 2.13 16.6V7.4C2.13 6.29 2.12 5.41 2.18 4.7C2.24 3.98 2.37 3.36 2.66 2.79C3.12 1.87 3.87 1.12 4.79 0.66C5.36 0.37 5.98 0.24 6.7 0.18C7.41 0.12 8.29 0.13 9.4 0.13H11C11.02 0.13 11.04 0.13 11.06 0.13ZM9.4 1.88C8.27 1.88 7.47 1.88 6.84 1.93C6.23 1.98 5.86 2.07 5.58 2.22C4.99 2.52 4.52 2.99 4.22 3.58C4.07 3.86 3.98 4.23 3.93 4.84C3.88 5.47 3.88 6.27 3.88 7.4V16.6C3.88 17.73 3.88 18.53 3.93 19.16C3.98 19.77 4.07 20.14 4.22 20.42C4.52 21.01 4.99 21.48 5.58 21.78C5.86 21.93 6.23 22.02 6.84 22.07C7.47 22.12 8.27 22.13 9.4 22.13H14.6C15.73 22.13 16.53 22.12 17.16 22.07C17.77 22.02 18.14 21.93 18.42 21.78C19.01 21.48 19.48 21.01 19.78 20.42C19.93 20.14 20.02 19.77 20.07 19.16C20.12 18.53 20.13 17.73 20.13 16.6V11.98C20.13 11.55 20.12 11.19 20.12 10.88C20.06 10.32 19.58 9.88 19 9.88H16C13.86 9.88 12.13 8.14 12.13 6V3C12.12 2.41 11.68 1.93 11.1 1.88C10.8 1.88 10.45 1.88 10.02 1.88H9.4ZM13.82 2.42C13.85 2.61 13.88 2.8 13.88 3V6C13.88 7.17 14.83 8.13 16 8.13H19C19.2 8.13 19.39 8.14 19.58 8.18C19.51 8.06 19.44 7.93 19.37 7.81C19.07 7.31 18.64 6.87 17.57 5.81L16.19 4.43C15.13 3.36 14.69 2.93 14.19 2.63C14.07 2.55 13.94 2.49 13.82 2.42Z"
    }), o[4] = l) : l = o[4], o[5] !== e || o[6] !== t || o[7] !== r ? (i = (0, n.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [t, r, l]
    }), o[5] = e, o[6] = t, o[7] = r, o[8] = i) : i = o[8], i
  }

  function iK(e) {
    let t, r, l, i, o, s = (0, a.c)(10);
    return s[0] !== e.title ? (t = null != e.title && (0, n.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = t) : t = s[1], s[2] !== e.children ? (r = null != e.children && (0, n.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = r) : r = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.75 19.75H6.25V12.25H17.75V19.75ZM7.75 18.25H11.25V16.75H7.75V18.25ZM12.75 18.25H16.25V16.75H12.75V18.25ZM7.75 15.25H11.25V13.75H7.75V15.25ZM12.75 15.25H16.25V13.75H12.75V15.25Z"
    }), i = (0, n.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.06 0.13C11.91 0.14 12.52 0.17 13.12 0.32C13.82 0.48 14.49 0.76 15.11 1.14C15.82 1.58 16.42 2.19 17.43 3.19L18.81 4.57C19.81 5.58 20.42 6.18 20.86 6.89C21.24 7.51 21.52 8.18 21.68 8.88C21.83 9.48 21.86 10.09 21.87 10.94C21.87 10.96 21.88 10.98 21.88 11V16.6C21.88 17.71 21.88 18.59 21.82 19.3C21.76 20.02 21.63 20.64 21.34 21.21C20.88 22.13 20.13 22.88 19.21 23.34C18.64 23.63 18.02 23.76 17.3 23.82C16.59 23.88 15.71 23.88 14.6 23.88H9.4C8.29 23.88 7.41 23.88 6.7 23.82C5.98 23.76 5.36 23.63 4.79 23.34C3.87 22.88 3.12 22.13 2.66 21.21C2.37 20.64 2.24 20.02 2.18 19.3C2.12 18.59 2.13 17.71 2.13 16.6V7.4C2.13 6.29 2.12 5.41 2.18 4.7C2.24 3.98 2.37 3.36 2.66 2.79C3.12 1.87 3.87 1.12 4.79 0.66C5.36 0.37 5.98 0.24 6.7 0.18C7.41 0.12 8.29 0.13 9.4 0.13H11C11.02 0.13 11.04 0.13 11.06 0.13ZM9.4 1.88C8.27 1.88 7.47 1.88 6.84 1.93C6.23 1.98 5.86 2.07 5.58 2.22C4.99 2.52 4.52 2.99 4.22 3.58C4.07 3.86 3.98 4.23 3.93 4.84C3.88 5.47 3.88 6.27 3.88 7.4V16.6C3.88 17.73 3.88 18.53 3.93 19.16C3.98 19.77 4.07 20.14 4.22 20.42C4.52 21.01 4.99 21.48 5.58 21.78C5.86 21.93 6.23 22.02 6.84 22.07C7.47 22.12 8.27 22.13 9.4 22.13H14.6C15.73 22.13 16.53 22.12 17.16 22.07C17.77 22.02 18.14 21.93 18.42 21.78C19.01 21.48 19.48 21.01 19.78 20.42C19.93 20.14 20.02 19.77 20.07 19.16C20.12 18.53 20.13 17.73 20.13 16.6V11.98C20.13 11.55 20.12 11.19 20.12 10.88C20.06 10.32 19.58 9.88 19 9.88H16C13.86 9.88 12.13 8.14 12.13 6V3C12.12 2.41 11.68 1.93 11.1 1.88C10.8 1.88 10.45 1.88 10.02 1.88H9.4ZM13.82 2.42C13.85 2.61 13.88 2.8 13.88 3V6C13.88 7.17 14.83 8.13 16 8.13H19C19.2 8.13 19.39 8.14 19.58 8.18C19.51 8.06 19.44 7.93 19.37 7.81C19.07 7.31 18.64 6.87 17.57 5.81L16.19 4.43C15.13 3.36 14.69 2.93 14.19 2.63C14.07 2.55 13.94 2.49 13.82 2.42Z"
    }), s[4] = l, s[5] = i) : (l = s[4], i = s[5]), s[6] !== e || s[7] !== t || s[8] !== r ? (o = (0, n.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [t, r, l, i]
    }), s[6] = e, s[7] = t, s[8] = r, s[9] = o) : o = s[9], o
  }

  function iB(e) {
    let t, r, l, i, o, s = (0, a.c)(10);
    return s[0] !== e.title ? (t = null != e.title && (0, n.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = t) : t = s[1], s[2] !== e.children ? (r = null != e.children && (0, n.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = r) : r = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17 19.75H7V12.25H17V19.75ZM8.5 18.25H15.5V13.75H8.5V18.25Z"
    }), i = (0, n.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.06 0.13C11.91 0.14 12.52 0.17 13.12 0.32C13.82 0.48 14.49 0.76 15.11 1.14C15.82 1.58 16.42 2.19 17.43 3.19L18.81 4.57C19.81 5.58 20.42 6.18 20.86 6.89C21.24 7.51 21.52 8.18 21.68 8.88C21.83 9.48 21.86 10.09 21.87 10.94C21.87 10.96 21.88 10.98 21.88 11V16.6C21.88 17.71 21.88 18.59 21.82 19.3C21.76 20.02 21.63 20.64 21.34 21.21C20.88 22.13 20.13 22.88 19.21 23.34C18.64 23.63 18.02 23.76 17.3 23.82C16.59 23.88 15.71 23.88 14.6 23.88H9.4C8.29 23.88 7.41 23.88 6.7 23.82C5.98 23.76 5.36 23.63 4.79 23.34C3.87 22.88 3.12 22.13 2.66 21.21C2.37 20.64 2.24 20.02 2.18 19.3C2.12 18.59 2.13 17.71 2.13 16.6V7.4C2.13 6.29 2.12 5.41 2.18 4.7C2.24 3.98 2.37 3.36 2.66 2.79C3.12 1.87 3.87 1.12 4.79 0.66C5.36 0.37 5.98 0.24 6.7 0.18C7.41 0.12 8.29 0.13 9.4 0.13H11C11.02 0.13 11.04 0.13 11.06 0.13ZM9.4 1.88C8.27 1.88 7.47 1.88 6.84 1.93C6.23 1.98 5.86 2.07 5.58 2.22C4.99 2.52 4.52 2.99 4.22 3.58C4.07 3.86 3.98 4.23 3.93 4.84C3.88 5.47 3.88 6.27 3.88 7.4V16.6C3.88 17.73 3.88 18.53 3.93 19.16C3.98 19.77 4.07 20.14 4.22 20.42C4.52 21.01 4.99 21.48 5.58 21.78C5.86 21.93 6.23 22.02 6.84 22.07C7.47 22.12 8.27 22.13 9.4 22.13H14.6C15.73 22.13 16.53 22.12 17.16 22.07C17.77 22.02 18.14 21.93 18.42 21.78C19.01 21.48 19.48 21.01 19.78 20.42C19.93 20.14 20.02 19.77 20.07 19.16C20.12 18.53 20.13 17.73 20.13 16.6V11.98C20.13 11.55 20.12 11.19 20.12 10.88C20.06 10.32 19.58 9.88 19 9.88H16C13.86 9.88 12.13 8.14 12.13 6V3C12.12 2.41 11.68 1.93 11.1 1.88C10.8 1.88 10.45 1.88 10.02 1.88H9.4ZM13.82 2.42C13.85 2.61 13.88 2.8 13.88 3V6C13.88 7.17 14.83 8.13 16 8.13H19C19.2 8.13 19.39 8.14 19.58 8.18C19.51 8.06 19.44 7.93 19.37 7.81C19.07 7.31 18.64 6.87 17.57 5.81L16.19 4.43C15.13 3.36 14.69 2.93 14.19 2.63C14.07 2.55 13.94 2.49 13.82 2.42Z"
    }), s[4] = l, s[5] = i) : (l = s[4], i = s[5]), s[6] !== e || s[7] !== t || s[8] !== r ? (o = (0, n.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [t, r, l, i]
    }), s[6] = e, s[7] = t, s[8] = r, s[9] = o) : o = s[9], o
  }
  iU._isSVG = !0, iz._isSVG = !0, iK._isSVG = !0, iB._isSVG = !0;
  var iV = e.i(974975);
  let iW = {
      pdf: aj.default,
      doc: aM.default,
      docx: aM.default,
      odt: aM.default,
      rtf: aM.default,
      xls: aN.default,
      xlsx: aN.default,
      ods: aN.default,
      ppt: aD.default,
      pptx: aD.default,
      odp: aD.default,
      zip: iV.default,
      rar: iV.default,
      "7z": iV.default,
      tar: iV.default,
      gz: iV.default,
      tgz: iV.default,
      bz2: iV.default,
      eml: iU,
      msg: iU,
      js: aI.default,
      jsx: aI.default,
      ts: aI.default,
      tsx: aI.default,
      mjs: aI.default,
      cjs: aI.default,
      py: aI.default,
      rb: aI.default,
      go: aI.default,
      rs: aI.default,
      java: aI.default,
      cpp: aI.default,
      cc: aI.default,
      c: aI.default,
      h: aI.default,
      cs: aI.default,
      swift: aI.default,
      kt: aI.default,
      php: aI.default,
      sh: aI.default,
      bash: aI.default,
      html: aI.default,
      css: aI.default,
      scss: aI.default,
      json: aI.default,
      xml: aI.default,
      yaml: aI.default,
      yml: aI.default,
      toml: aI.default,
      sql: aI.default,
      vue: aI.default,
      svelte: aI.default,
      mp3: aP.default,
      wav: aP.default,
      m4a: aP.default,
      aac: aP.default,
      flac: aP.default,
      ogg: aP.default,
      opus: aP.default,
      csv: iK,
      tsv: iK,
      key: iB,
      gslides: iB,
      txt: iF.default,
      md: iF.default,
      mdx: iF.default,
      log: iF.default
    },
    iG = [.15, 1, .4, 1],
    iY = [.45, .1, .2, 1];

  function iq() {
    let e, t = (0, a.c)(1);
    return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("span", {
      "aria-hidden": "true",
      "data-hatch-media-protection-border": !0,
      className: "pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_0.5px_var(--media-protection-border)]"
    }), t[0] = e) : e = t[0], e
  }

  function i$(e) {
    let t, r, l, i, o = (0, a.c)(10),
      {
        filename: s
      } = e;
    o[0] !== s ? (t = (0, iM.splitFilename)(s), o[0] = s, o[1] = t) : t = o[1];
    let {
      base: c,
      ext: u
    } = t;
    return o[2] !== c ? (r = (0, n.jsx)("span", {
      className: "min-w-0 truncate",
      children: c
    }), o[2] = c, o[3] = r) : r = o[3], o[4] !== u ? (l = "" !== u && (0, n.jsx)("span", {
      className: "shrink-0",
      children: u
    }), o[4] = u, o[5] = l) : l = o[5], o[6] !== s || o[7] !== r || o[8] !== l ? (i = (0, n.jsxs)("div", {
      className: "text-caption-2 text-text-secondary flex w-full items-center justify-center px-1.5",
      title: s,
      children: [r, l]
    }), o[6] = s, o[7] = r, o[8] = l, o[9] = i) : i = o[9], i
  }

  function iQ(e) {
    let t, r, l, i, o = (0, a.c)(9),
      {
        onClick: s
      } = e,
      c = (0, il.useHatchChatThreadLoggingMetadataFromContext)();
    o[0] !== c ? (t = {
      eventName: t9.HatchClickEvent.CHAT_REMOVE_ATTACHMENT_CLICK,
      actionTarget: "remove_attachment",
      actionType: "dismiss",
      metadata: {
        surface: "chat",
        subsurface: "composer",
        ...c
      }
    }, o[0] = c, o[1] = t) : t = o[1];
    let {
      ref: u,
      onClick: d
    } = (0, t5.useTrackedClickRef)(t);
    return o[2] === Symbol.for("react.memo_cache_sentinel") ? (r = tm.fbs._("Remove attachment", null, {
      hk: "R1GVp"
    }), o[2] = r) : r = o[2], o[3] !== d || o[4] !== s ? (l = e => {
      e.stopPropagation(), d(), s()
    }, o[3] = d, o[4] = s, o[5] = l) : l = o[5], o[6] !== u || o[7] !== l ? (i = (0, n.jsx)(tO.IconButton, {
      ref: u,
      icon: tM.default,
      label: r,
      size: "20",
      variant: "elevated",
      className: "absolute end-1.5 top-1.5 z-10",
      onClick: l
    }), o[6] = u, o[7] = l, o[8] = i) : i = o[8], i
  }

  function iX() {
    let e, t, r = (0, a.c)(2);
    return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = tm.fbs._("Uploading attachment", null, {
      hk: "4Dz0yA"
    }), r[0] = e) : e = r[0], r[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)("div", {
      role: "status",
      "aria-label": e,
      className: "rounded-18 pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30",
      children: (0, n.jsx)(l3.Spinner, {
        size: 16
      })
    }), r[1] = t) : t = r[1], t
  }

  function iZ(e) {
    let t, r, l = (0, a.c)(6),
      {
        show: i,
        className: o
      } = e,
      s = (0, tS.useReducedMotion)();
    return l[0] !== o || l[1] !== s || l[2] !== i ? (t = i && (0, n.jsx)(tb.motion.span, {
      initial: !s && {
        opacity: 0
      },
      animate: {
        opacity: 1,
        transition: s ? {
          duration: 0
        } : {
          duration: .16,
          ease: iG
        }
      },
      exit: {
        opacity: 0,
        transition: s ? {
          duration: 0
        } : {
          duration: .12,
          ease: iY
        }
      },
      className: o,
      children: (0, n.jsx)(l3.Spinner, {
        size: 16,
        color: "secondary",
        isDecorative: !0,
        className: s ? "animate-none" : void 0
      })
    }, "processing-spinner"), l[0] = o, l[1] = s, l[2] = i, l[3] = t) : t = l[3], l[4] !== t ? (r = (0, n.jsx)(tW.AnimatePresence, {
      initial: !1,
      children: t
    }), l[4] = t, l[5] = r) : r = l[5], r
  }

  function iJ(e) {
    let t, l, i, o, s, c, u, d, h, f, m, p, g, v = (0, a.c)(40),
      C = "processing" === e.state,
      [y, _] = (0, r.useState)(!1),
      b = C ? e.file : e.attachment,
      S = "ready" === e.state && e.isUploading;
    v[0] !== b.category || v[1] !== b.previewUrl ? (t = () => "image" === b.category && null !== b.previewUrl && "" !== b.previewUrl ? "media" : "file", v[0] = b.category, v[1] = b.previewUrl, v[2] = t) : t = v[2];
    let [x] = (0, r.useState)(t), k = "image" === b.category && null !== b.previewUrl && "" !== b.previewUrl ? b.previewUrl : null, E = C || "video" !== b.category || null === b.previewUrl || "" === b.previewUrl ? null : b.previewUrl, A = null !== k, T = null !== E;
    if (v[3] !== b.category || v[4] !== b.filename || v[5] !== A || v[6] !== T || v[7] !== C) {
      var w, R;
      let e, t;
      l = A || T || C ? null : (w = b.filename, R = b.category, null != (t = iW[(e = w.lastIndexOf(".")) > 0 ? w.slice(e + 1).trim().toLowerCase() : ""]) ? t : "text" === R ? iF.default : "audio" === R ? aP.default : iz), v[3] = b.category, v[4] = b.filename, v[5] = A, v[6] = T, v[7] = C, v[8] = l
    } else l = v[8];
    let H = l;
    v[9] !== C ? (i = () => {
      if (!C) return;
      let e = window.setTimeout(() => _(!0), 1e3);
      return () => window.clearTimeout(e)
    }, o = [C], v[9] = C, v[10] = i, v[11] = o) : (i = v[10], o = v[11]), (0, r.useEffect)(i, o);
    let P = A ? "bg-fill-secondary" : T ? "bg-fill-primary" : "bg-fill-secondary-elevated";
    v[12] !== P ? (s = (0, tk.cn)("relative h-22 w-[117px] shrink-0 overflow-hidden rounded-18", P), v[12] = P, v[13] = s) : s = v[13];
    let I = C ? "status" : void 0;
    v[14] !== C ? (c = C ? tm.fbs._("Processing attachment", null, {
      hk: "3jSYk6"
    }) : void 0, v[14] = C, v[15] = c) : c = v[15], v[16] !== H || v[17] !== b.filename || v[18] !== k || v[19] !== E ? (u = null !== k ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("img", {
        src: k,
        alt: b.filename,
        className: "h-full w-full object-cover"
      }), (0, n.jsx)(iq, {})]
    }) : null !== E ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("img", {
        src: E,
        alt: b.filename,
        className: "h-full w-full object-cover"
      }), (0, n.jsx)(iq, {}), (0, n.jsx)("div", {
        className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30",
        children: (0, n.jsx)(nJ.HatchIcon, {
          icon: iO.default,
          size: 20,
          "aria-hidden": "true",
          className: "text-white"
        })
      })]
    }) : (0, n.jsxs)("div", {
      className: "absolute inset-x-0 top-6 flex flex-col items-center gap-1.5",
      children: [(0, n.jsx)("span", {
        className: "flex size-6 items-center justify-center",
        children: null != H && (0, n.jsx)(nJ.HatchIcon, {
          icon: H,
          size: 24,
          iconSize: 24,
          "aria-hidden": "true",
          className: "text-text-tertiary"
        })
      }), (0, n.jsx)(i$, {
        filename: b.filename
      })]
    }), v[16] = H, v[17] = b.filename, v[18] = k, v[19] = E, v[20] = u) : u = v[20];
    let N = C && y,
      j = "media" === x ? "inset-0" : "inset-x-0 top-6 h-6";
    return v[21] !== j ? (d = (0, tk.cn)("pointer-events-none absolute flex items-center justify-center", j), v[21] = j, v[22] = d) : d = v[22], v[23] !== d || v[24] !== N ? (h = (0, n.jsx)(iZ, {
      show: N,
      className: d
    }), v[23] = d, v[24] = N, v[25] = h) : h = v[25], v[26] !== h || v[27] !== I || v[28] !== c || v[29] !== u ? (f = (0, n.jsxs)("div", {
      role: I,
      "aria-label": c,
      className: "absolute inset-0",
      children: [u, h]
    }), v[26] = h, v[27] = I, v[28] = c, v[29] = u, v[30] = f) : f = v[30], v[31] !== S ? (m = S && (0, n.jsx)(iX, {}), v[31] = S, v[32] = m) : m = v[32], v[33] !== e.onRemove ? (p = (0, n.jsx)(iQ, {
      onClick: e.onRemove
    }), v[33] = e.onRemove, v[34] = p) : p = v[34], v[35] !== f || v[36] !== m || v[37] !== p || v[38] !== s ? (g = (0, n.jsxs)("div", {
      className: s,
      children: [f, m, p]
    }), v[35] = f, v[36] = m, v[37] = p, v[38] = s, v[39] = g) : g = v[39], g
  }

  function i0() {
    return window.SpeechRecognition ?? window.webkitSpeechRecognition ?? null
  }
  var i1 = e.i(459544);

  function i2(e) {
    return "connected" === e.connectionState || (e.addSystemMessage("Not connected to gateway."), !1)
  }
  let i3 = [{
      name: "/status",
      aliases: [],
      category: "Session",
      description: "Show current session status",
      execute(e, t) {
        i2(t) && t.sendGatewayCommand("/status")
      }
    }, {
      name: "/compact",
      aliases: [],
      category: "Session",
      description: "Compact conversation context",
      execute(e, t) {
        i2(t) && t.sendGatewayCommand("/compact")
      }
    }, {
      name: "/clear",
      aliases: [],
      category: "Session",
      description: "Start a fresh context on the next message",
      execute(e, t) {
        i2(t) && t.sendGatewayCommand("/clear")
      }
    }, {
      name: "/usage",
      aliases: [],
      category: "Session",
      description: "Toggle usage display",
      args: "on | off",
      subcommands: [{
        suffix: "on",
        description: "Enable usage display"
      }, {
        suffix: "off",
        description: "Disable usage display"
      }],
      execute(e, t) {
        let n = e.trim().toLowerCase();
        "on" !== n && "off" !== n ? t.addSystemMessage("Expected: /usage on | off") : i2(t) && t.sendGatewayCommand(`/usage ${n}`)
      }
    }, {
      name: "/subagents",
      aliases: [],
      category: "Session",
      description: "List sub-agents",
      args: "[-a] [limit]",
      subcommands: [{
        suffix: "-a",
        description: "List all descendant agents"
      }, {
        suffix: "5",
        description: "List 5 most recent sub-agents"
      }, {
        suffix: "10",
        description: "List 10 most recent sub-agents"
      }, {
        suffix: "20",
        description: "List 20 most recent sub-agents"
      }],
      execute(e, t) {
        if (!i2(t)) return;
        let n = e.trim().split(/\s+/).filter(Boolean),
          a = "direct",
          r = null;
        for (let e of n) "-a" === e || "descendants" === e || "all" === e ? a = "descendants" : /^\d+$/.test(e) && (r = e);
        let l = [a, r].filter(Boolean).join(" ");
        t.sendGatewayCommand(`/subagents ${l}`)
      }
    }, {
      name: "/stop",
      aliases: [],
      category: "Session",
      description: "Stop the current response",
      execute(e, t) {
        null == t.cancelStream ? t.addSystemMessage("Stop is unavailable right now.") : t.cancelStream()
      }
    }, {
      name: "/latest",
      aliases: ["/history"],
      category: "Session",
      description: "Jump back to the latest transcript view",
      execute(e, t) {
        null == t.returnToLatest ? t.addSystemMessage("History controls are unavailable right now.") : t.returnToLatest()
      }
    }, {
      name: "/activity",
      aliases: [],
      category: "View",
      description: "Open the Activity panel",
      execute(e, t) {
        null == t.openActivityPanel ? t.addSystemMessage("Activity panel is unavailable right now.") : t.openActivityPanel()
      }
    }],
    i8 = (0, et.createClientLogger)("HatchSlashCommands");

  function i4(e) {
    let t = {
      id: `system-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,
      role: "system",
      content: e,
      createdAt: new Date().toISOString()
    };
    C.reduceChat({
      type: "message/insert",
      message: t
    }), requestAnimationFrame(() => {
      window.dispatchEvent(new Event("hatch-scroll-to-bottom"))
    })
  }
  var i5 = e.i(65372),
    i6 = e.i(315882),
    i9 = e.i(192996),
    i7 = e.i(850114),
    oe = e.i(891387),
    ot = e.i(642655),
    on = e.i(302681),
    oa = e.i(161839),
    or = e.i(550697);

  function ol({
    vmType: e,
    asrPath: t
  }) {
    return null == e ? {
      backend: null,
      unavailableReason: "vm_type_unresolved"
    } : "confidential" === e ? {
      backend: "vm_noise",
      unavailableReason: null
    } : {
      backend: t,
      unavailableReason: null
    }
  }
  var oi = e.i(880020),
    oo = e.i(805163);
  let os = (0, et.createClientLogger)("useBrowserStreamingDictation"),
    oc = (0, ec.hatchSentryTags)(ec.HATCH_SENTRY_SURFACES.CHAT_DICTATION);

  function ou(e) {
    e.loadClient().catch(() => {})
  }
  async function od(e) {
    try {
      let t = await fetch(e.tokenEndpoint, {
        method: "POST"
      });
      if (!t.ok) return os.error({
        backend: e.backend,
        status: t.status,
        tags: oc
      }, "Failed to mint streaming dictation token"), null;
      return e.parseToken(await t.json())
    } catch (t) {
      return os.error({
        backend: e.backend,
        error: (0, oo.toError)(t),
        tags: oc
      }, "Error minting streaming dictation token"), null
    }
  }

  function oh(e, t) {
    let {
      backend: n,
      loadClient: a
    } = e, {
      onFinalTranscript: l
    } = t, i = (0, r.useRef)(l);
    i.current = l;
    let [o, s] = (0, r.useState)(!1), [c, u] = (0, r.useState)(!1), [d, h] = (0, r.useState)(!1), [f, m] = (0, r.useState)(null), p = (0, r.useRef)(null), g = (0, r.useRef)(null), v = (0, r.useRef)(null), C = (0, r.useRef)(!1), y = (0, r.useRef)(0), _ = (0, r.useRef)([]), b = (0, r.useRef)(""), S = (0, r.useRef)(!1), x = (0, r.useRef)(!1), k = (0, r.useRef)(0), E = (0, r.useRef)(0), A = (0, r.useRef)(!1), T = (0, r.useRef)(null), w = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
      h("u" > typeof navigator && navigator.mediaDevices?.getUserMedia != null && "u" > typeof WebSocket)
    }, []);
    let R = (0, r.useCallback)(() => {
        null != T.current && (clearTimeout(T.current), T.current = null), null != w.current && (clearTimeout(w.current), w.current = null)
      }, []),
      H = (0, r.useCallback)(() => {
        g.current?.stop(), g.current = null, v.current?.getTracks().forEach(e => e.stop()), v.current = null, p.current = null, m(null), u(!1)
      }, []),
      P = (0, r.useCallback)(() => [..._.current, b.current].map(e => e.trim()).filter(Boolean).join(" "), []),
      I = (0, r.useCallback)(e => {
        if (x.current) return;
        x.current = !0, R();
        let t = P(),
          a = k.current,
          r = E.current;
        t || !(r > 0) || A.current || os.error({
          backend: n,
          audioBytes: a,
          transcriptFrameCount: r,
          reason: e,
          tags: oc
        }, "Streaming dictation produced no transcript"), _.current = [], b.current = "", k.current = 0, E.current = 0, A.current = !1, S.current = !1, p.current?.close(), H(), s(!1), t && i.current(t)
      }, [n, P, R, H]),
      N = (0, r.useCallback)(() => {
        S.current && (null != T.current && clearTimeout(T.current), T.current = setTimeout(() => I("quiescence"), 1200))
      }, [I]),
      j = tm.fbs._("Dictation is unavailable right now. Please try again.", null, {
        hk: "43W6MG"
      }),
      D = tm.fbs._("Dictation is unavailable right now. Please try again.", null, {
        hk: "afSeY"
      }),
      L = tm.fbs._("Microphone access is blocked. Allow microphone access in your browser settings, then try again.", null, {
        hk: "c7AFG"
      }),
      M = tm.fbs._("Dictation failed. Please try again.", null, {
        hk: "3GcIAD"
      }),
      O = (0, r.useCallback)(async () => {
        if (C.current || null != p.current || "u" < typeof navigator || navigator.mediaDevices?.getUserMedia == null) return;
        C.current = !0, u(!0);
        let t = y.current,
          r = a().catch(e => (os.error({
            backend: n,
            error: (0, oo.toError)(e),
            tags: oc
          }, "Failed to load streaming dictation client"), null)),
          l = !1;
        try {
          let a, i = await od(e);
          if (y.current !== t) return;
          if (null == i) return void rx.toast.error(j);
          let o = await r;
          if (y.current !== t) return;
          if (null == o) return void rx.toast.error(D);
          try {
            a = await navigator.mediaDevices.getUserMedia({
              audio: !0
            })
          } catch (e) {
            os.error({
              backend: n,
              error: (0, oo.toError)(e),
              tags: oc
            }, "Microphone access denied for streaming dictation"), rx.toast.error(L);
            return
          }
          if (y.current !== t) return void a.getTracks().forEach(e => e.stop());
          v.current = a, m(a), _.current = [], b.current = "", k.current = 0, E.current = 0, A.current = !1, S.current = !1, x.current = !1, p.current = o.openStream(i, {
            onOpen: () => {
              if (y.current !== t) {
                p.current?.close(), H();
                return
              }
              g.current = o.startPcmCapture(a, e => {
                k.current += e.byteLength, p.current?.sendAudio(e)
              }), s(!0)
            },
            onPartial: e => {
              E.current++, b.current = e, N()
            },
            onFinal: e => {
              E.current++, e && (_.current.push(e), b.current = ""), N()
            },
            onError: e => {
              (A.current = !0, os.error({
                backend: n,
                error: e,
                tags: oc
              }, "Streaming dictation stream error"), S.current) ? I("stream_error"): (rx.toast.error(M), R(), _.current = [], b.current = "", k.current = 0, H(), s(!1))
            },
            onClose: e => {
              (1e3 !== e && (A.current = !0, os.error({
                backend: n,
                code: e,
                tags: oc
              }, "Streaming dictation closed unexpectedly")), S.current) ? I("socket_close"): (H(), s(!1))
            }
          }), l = !0
        } finally {
          C.current = !1, l || u(!1)
        }
      }, [n, N, R, e, I, a, H, j, D, L, M]),
      F = (0, r.useCallback)(() => {
        y.current++;
        let e = p.current;
        if (null == e) {
          H(), s(!1);
          return
        }
        g.current?.stop(), g.current = null, v.current?.getTracks().forEach(e => e.stop()), v.current = null, m(null), S.current = !0, e.finish(), R(), w.current = setTimeout(() => I("timeout"), 4e3)
      }, [R, I, H]),
      U = (0, r.useCallback)(() => {
        y.current++, S.current = !1, x.current = !0, R(), p.current?.close(), _.current = [], b.current = "", k.current = 0, E.current = 0, A.current = !1, H(), s(!1)
      }, [R, H]),
      z = (0, r.useCallback)(() => {
        O()
      }, [O]);
    return (0, r.useEffect)(() => () => {
      y.current++, null != T.current && clearTimeout(T.current), null != w.current && clearTimeout(w.current), g.current?.stop(), p.current?.close(), v.current?.getTracks().forEach(e => e.stop())
    }, []), {
      isRecording: o,
      isActive: c,
      isSupported: d,
      stream: f,
      startRecording: z,
      stopRecording: F,
      cancelRecording: U
    }
  }
  let of = {
    backend: "voyager",
    tokenEndpoint: "/api/hatch/voice/voyager-token",
    parseToken: e => "string" == typeof e.token ? {
      token: e.token
    } : null,
    loadClient: async () => {
      let t = await e.A(34717);
      return {
        openStream: t.openVoyagerDictationStream,
        startPcmCapture: t.startVoyagerPcmCapture
      }
    }
  }, om = {
    backend: "shortwave",
    tokenEndpoint: "/api/hatch/voice/speech-token",
    parseToken: e => "string" != typeof e.token ? null : {
      token: e.token,
      graphDomain: "string" == typeof e.graphDomain ? e.graphDomain : "facebook"
    },
    loadClient: async () => {
      let t = await e.A(687007);
      return {
        openStream: t.openShortwaveDictationStream,
        startPcmCapture: t.startShortwavePcmCapture
      }
    }
  }, op = (0, et.createClientLogger)("useNoiseDictation"), og = (0, ec.hatchSentryTags)(ec.HATCH_SENTRY_SURFACES.CHAT_DICTATION), ov = (0, et.createClientLogger)("useDictation");

  function oC() {
    return ol({
      vmType: (0, iP.getServingVmType)(),
      asrPath: (0, oi.readDictationAsrPath)()
    })
  }

  function oy() {
    let e, t = (0, a.c)(3),
      n = (0, iP.useServingVmType)(),
      r = (0, oi.useDictationAsrPath)();
    return t[0] !== r || t[1] !== n ? (e = ol({
      vmType: n,
      asrPath: r
    }), t[0] = r, t[1] = n, t[2] = e) : e = t[2], e
  }
  var o_ = e.i(509335),
    ob = e.i(407149);
  let oS = [.15, 1, .4, 1],
    ox = [.45, .1, .2, 1],
    ok = "bg-chat-user-bubble text-chat-user-text !bg-none enabled:hover:filter-[brightness(0.85)] disabled:!opacity-40 dark:enabled:hover:filter-[brightness(1.3)]",
    oE = `${ok} enabled:hover:scale-110`;

  function oA(e) {
    let t, r, l, i, o, s, c = (0, a.c)(20),
      {
        action: u,
        children: d,
        prefersReducedMotion: h
      } = e,
      f = (0, tG.useIsPresent)();
    c[0] !== h ? (t = h ? {
      duration: 0
    } : {
      duration: .16,
      ease: oS
    }, c[0] = h, c[1] = t) : t = c[1];
    let m = t;
    c[2] !== h ? (r = h ? {
      duration: 0
    } : {
      duration: .11,
      ease: ox
    }, c[2] = h, c[3] = r) : r = c[3];
    let p = r;
    c[4] !== h ? (l = !h && {
      opacity: 0,
      scale: .92
    }, c[4] = h, c[5] = l) : l = c[5], c[6] !== m ? (i = {
      opacity: 1,
      scale: 1,
      transition: m
    }, c[6] = m, c[7] = i) : i = c[7], c[8] !== p ? (o = {
      opacity: 0,
      scale: .92,
      transition: p
    }, c[8] = p, c[9] = o) : o = c[9];
    let g = !f || void 0,
      v = !f || void 0,
      C = f ? "col-start-1 row-start-1" : "pointer-events-none col-start-1 row-start-1",
      y = f ? void 0 : oT;
    return c[10] !== u || c[11] !== d || c[12] !== l || c[13] !== i || c[14] !== o || c[15] !== g || c[16] !== v || c[17] !== C || c[18] !== y ? (s = (0, n.jsx)(tb.motion.div, {
      initial: l,
      animate: i,
      exit: o,
      "aria-hidden": g,
      inert: v,
      className: C,
      "data-hatch-composer-action": u,
      onClickCapture: y,
      children: d
    }), c[10] = u, c[11] = d, c[12] = l, c[13] = i, c[14] = o, c[15] = g, c[16] = v, c[17] = C, c[18] = y, c[19] = s) : s = c[19], s
  }

  function oT(e) {
    e.preventDefault(), e.stopPropagation()
  }

  function ow(e) {
    let t, r, l, i, o, s = (0, a.c)(25),
      {
        hasContent: c,
        canSend: u,
        canStop: d,
        isComposerLocked: h,
        isReply: f,
        isSendInFlight: m,
        isSending: p,
        onSend: g,
        sendButtonRef: v,
        onBlockedSend: C,
        onStop: y,
        quoteAttribution: _
      } = e,
      b = (0, tS.useReducedMotion)(),
      S = (0, il.useHatchChatThreadLoggingMetadata)();
    s[0] !== f || s[1] !== _ || s[2] !== S ? (t = {
      eventName: t9.HatchClickEvent.CHAT_SEND_MESSAGE,
      actionTarget: "send_button",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "composer",
        ...S,
        is_reply: f,
        ..._
      }
    }, s[0] = f, s[1] = _, s[2] = S, s[3] = t) : t = s[3];
    let {
      ref: x,
      onClick: k
    } = (0, t5.useTrackedClickRef)(t);
    s[4] !== S ? (r = {
      eventName: t9.HatchClickEvent.CHAT_STOP_RESPONSE,
      actionTarget: "stop_button",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "composer",
        ...S
      }
    }, s[4] = S, s[5] = r) : r = s[5];
    let {
      ref: E,
      onClick: A
    } = (0, t5.useTrackedClickRef)(r), T = (0, n7.useMergeRefs)(x, v), w = !u && null != C, R = c && !m, H = m || d && !c && !h;
    return s[6] !== A || s[7] !== y || s[8] !== b || s[9] !== H || s[10] !== E ? (l = H && (0, n.jsx)(oA, {
      action: "stop",
      prefersReducedMotion: b,
      children: (0, n.jsx)(tO.IconButton, {
        ref: E,
        icon: ob.default,
        size: "32-24",
        variant: "primary",
        className: oE,
        label: tm.fbs._("Stop", null, {
          hk: "4B6U3D"
        }),
        "data-testid": "hatch-composer-stop-button",
        onClick: e => {
          e.stopPropagation(), A(), y()
        }
      })
    }, "stop"), s[6] = A, s[7] = y, s[8] = b, s[9] = H, s[10] = E, s[11] = l) : l = s[11], s[12] !== u || s[13] !== p || s[14] !== k || s[15] !== T || s[16] !== C || s[17] !== g || s[18] !== b || s[19] !== w || s[20] !== R ? (i = R && (0, n.jsx)(oA, {
      action: "send",
      prefersReducedMotion: b,
      children: (0, n.jsx)(tO.IconButton, {
        ref: T,
        icon: o_.default,
        size: "32-24",
        variant: "primary",
        className: (0, tk.cn)(ok, w && "aria-disabled:!opacity-40"),
        label: tm.fbs._("Send", null, {
          hk: "3K71W1"
        }),
        disabled: !u && !w,
        "aria-disabled": w || void 0,
        onMouseDown: oR,
        onClick: e => {
          (e.stopPropagation(), w) ? C?.(): (k(), g())
        },
        children: e => p ? (0, n.jsx)(l3.Spinner, {
          size: 16
        }) : e
      })
    }, "send"), s[12] = u, s[13] = p, s[14] = k, s[15] = T, s[16] = C, s[17] = g, s[18] = b, s[19] = w, s[20] = R, s[21] = i) : i = s[21], s[22] !== l || s[23] !== i ? (o = (0, n.jsx)("div", {
      className: "grid shrink-0 place-items-center",
      "data-hatch-composer-action-slot": !0,
      children: (0, n.jsxs)(tW.AnimatePresence, {
        initial: !1,
        children: [l, i]
      })
    }), s[22] = l, s[23] = i, s[24] = o) : o = s[24], o
  }

  function oR(e) {
    return e.preventDefault()
  }

  function oH(e) {
    let t, r, l = (0, a.c)(6),
      {
        label: i,
        tone: o,
        testId: s
      } = e,
      c = "secondary" === o ? "text-text-secondary" : "text-text-tertiary";
    return l[0] !== c ? (t = (0, tk.cn)("min-w-0 flex-1 truncate text-[15px] leading-[24px]", c), l[0] = c, l[1] = t) : t = l[1], l[2] !== i || l[3] !== t || l[4] !== s ? (r = (0, n.jsx)("div", {
      "aria-hidden": "true",
      className: "pointer-events-none absolute inset-y-0 start-10 end-20 flex items-center",
      children: (0, n.jsx)("span", {
        className: t,
        "data-hatch-composer-placeholder-label": !0,
        "data-testid": s,
        title: i,
        children: i
      })
    }), l[2] = i, l[3] = t, l[4] = s, l[5] = r) : r = l[5], r
  }
  var oP = e.i(805564),
    oI = e.i(102806);
  e.i(787845);
  var oN = e.i(571707),
    oj = e.i(508284),
    oD = e.i(438181),
    oL = e.i(982209),
    oM = e.i(767408);
  let oO = "hatch.message.agent_send",
    oF = (0, r.createContext)(null);

  function oU(e) {
    let t, l, i, o, s, c, u, d, h, f, m, p, g, v, y, _, b, S, x, k, E = (0, a.c)(23),
      {
        children: A
      } = e,
      T = (0, r.useRef)(void 0),
      {
        onEvent: w
      } = (0, ei.useHatchRpc)(),
      R = (0, r.useRef)(0),
      H = (0, r.useRef)(void 0),
      P = (0, r.useRef)(void 0);
    E[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, t5.getSessionId)(), E[0] = t) : t = E[0];
    let I = t;
    E[1] === Symbol.for("react.memo_cache_sentinel") ? (l = new Set, E[1] = l) : l = E[1];
    let N = (0, r.useRef)(l);
    E[2] === Symbol.for("react.memo_cache_sentinel") ? (i = new Set, E[2] = i) : i = E[2];
    let j = (0, r.useRef)(i),
      D = (0, r.useRef)(!1),
      L = (0, r.useRef)(!1),
      M = (0, r.useRef)(!1),
      O = (0, r.useRef)(null);
    E[3] === Symbol.for("react.memo_cache_sentinel") ? (o = () => {
      N.current.clear(), j.current.clear(), D.current = !1, L.current = !1, M.current = !1, null != O.current && (window.clearTimeout(O.current), O.current = null)
    }, E[3] = o) : o = E[3];
    let F = o;
    E[4] === Symbol.for("react.memo_cache_sentinel") ? (s = e => {
      T.current && (T.current.annotate({
        string: {
          cancel_reason: e
        }
      }), (0, tZ.endManualTrace)(T.current, "CANCEL"), T.current = void 0), F()
    }, E[4] = s) : s = E[4];
    let U = s;
    E[5] === Symbol.for("react.memo_cache_sentinel") ? (c = () => {
      !D.current || N.current.size > 0 || (null != T.current && (T.current.markerPoint("all_media_loaded"), (0, tZ.endManualTrace)(T.current, "SUCCESS"), T.current = void 0), F())
    }, E[5] = c) : c = E[5];
    let z = c;
    E[6] === Symbol.for("react.memo_cache_sentinel") ? (u = e => {
      null != T.current && U("superseded_by_new_agent_message"), j.current.clear();
      let t = (0, tZ.startManualInteraction)(oO, {
        debugName: "agentic-message-events",
        markerId: oI.HATCH_AGENTIC_INTERACTION_MARKER.i
      });
      t.annotate({
        string: {
          session_id: I,
          tracePolicy: oO
        }
      }), e && e(t), T.current = t
    }, E[6] = u) : u = E[6];
    let K = u;
    E[7] === Symbol.for("react.memo_cache_sentinel") ? (d = e => {
      null != T.current && ((0, tZ.endManualTrace)(T.current, "SUCCESS"), e?.(T.current))
    }, E[7] = d) : d = E[7];
    let B = d;
    E[8] === Symbol.for("react.memo_cache_sentinel") ? (h = e => {
      U(e)
    }, E[8] = h) : h = E[8];
    let V = h;
    E[9] === Symbol.for("react.memo_cache_sentinel") ? (f = (e, t, n) => {
      T.current && (null != n && T.current.annotate(n), null != t && T.current.annotate({
        string: {
          error_stack: (0, oM.redactErrorStackForTelemetry)(t)
        }
      }), T.current.annotate({
        string: {
          error_class: (0, oM.classifyErrorForTelemetry)(e)
        },
        int: {
          error_length: (0, oM.errorLengthForTelemetry)(e)
        }
      }), "TIMEOUT" === e ? (T.current.annotate({
        int: {
          media_holds_remaining: N.current.size
        },
        string_array: {
          timedout_hold_types: Array.from(N.current, oM.fileExtensionForTelemetry)
        }
      }), (0, tZ.endManualTrace)(T.current, "TIMEOUT")) : (0, tZ.endManualTrace)(T.current, "FAIL"), T.current = void 0), F()
    }, E[9] = f) : f = E[9];
    let W = f;
    E[10] === Symbol.for("react.memo_cache_sentinel") ? (m = e => {
      null == T.current || L.current || (L.current = !0, T.current.markerPoint("first_media_loaded")), N.current.has(e) ? (N.current.delete(e), null != T.current && (T.current.markerPoint(`media_loaded${oL.DEBUG_HOLD_FILENAMES?`:${e}`:""}`), T.current.annotate({
        int: {
          media_holds_remaining: N.current.size
        }
      })), z()) : (null != T.current && T.current.markerPoint(`media_loaded${oL.DEBUG_HOLD_FILENAMES?`:${e}`:""}`), j.current.add(e))
    }, E[10] = m) : m = E[10];
    let G = m;
    E[11] === Symbol.for("react.memo_cache_sentinel") ? (p = e => {
      N.current.has(e) ? (N.current.delete(e), null != T.current && (T.current.markerPoint(`media_error${oL.DEBUG_HOLD_FILENAMES?`:${e}`:""}`), T.current.annotate({
        int: {
          media_holds_remaining: N.current.size
        }
      })), z()) : j.current.add(e)
    }, E[11] = p) : p = E[11];
    let Y = p;
    E[12] === Symbol.for("react.memo_cache_sentinel") ? (g = e => {
      N.current.has(e) ? (null == T.current || M.current || (M.current = !0, T.current.markerPoint("first_file_mounted")), N.current.delete(e), null != T.current && T.current.annotate({
        int: {
          media_holds_remaining: N.current.size
        }
      }), z()) : j.current.add(e)
    }, E[12] = g) : g = E[12];
    let q = g;
    E[13] === Symbol.for("react.memo_cache_sentinel") ? (v = {
      onMediaLoaded: G,
      onMediaError: Y,
      onFileMounted: q
    }, E[13] = v) : v = E[13], (0, oD.useMediaLoadSubscription)(v);
    let $ = (0, rd.useChatIsStreaming)(),
      Q = (0, r.useRef)(!1);
    E[14] !== $ ? (y = () => {
      let e = null;
      return $ && !Q.current ? (K(), R.current = 0, H.current = 0, P.current = void 0) : !$ && Q.current && (e = window.setTimeout(() => {
        null != T.current && W("TIMEOUT", void 0, {
          bool: {
            stopped_streaming_before_done: !0
          }
        })
      }, oL.HOLD_TIMER_AFTER_STREAM_MS)), Q.current = $, () => {
        null != e && window.clearTimeout(e)
      }
    }, _ = [$, K, U, W], E[14] = $, E[15] = y, E[16] = _) : (y = E[15], _ = E[16]), (0, r.useEffect)(y, _), E[17] === Symbol.for("react.memo_cache_sentinel") ? (b = {
      onAgentTraceStart: K,
      onAgentTraceFail: W,
      onAgentTraceCancel: V,
      onAgentTraceEnd: B
    }, E[17] = b) : b = E[17];
    let X = b;
    return E[18] !== w ? (S = () => {
      let e = [];
      return e.push(w("delta.message_start", e => {
        "subagent" !== (e.stream_lane ?? e.transcript_surface) && null != T.current && T.current.markerPoint("message_start")
      })), e.push(w("delta.message_done", e => {
        if ("subagent" === (e.stream_lane ?? e.transcript_surface)) return;
        let t = (0, oj.normalizeOptionalId)(e.message_id),
          n = C.getSnapshot().chat.messagesById[t ?? ""],
          a = (0, oN.extractMediaResources)({
            resources: e.resources,
            payload: e,
            displayText: n?.content ?? null
          }),
          r = function(e) {
            let t = [];
            for (let n of e) {
              if ("image" !== n.fileType) continue;
              let e = null;
              n.uri.startsWith("sandbox://") && (e = n.uri.slice(10));
              let a = n.uri.split("/").pop() ?? "image";
              t.push({
                previewUrl: null,
                path: e,
                mimeType: n.mimeType ?? "image/png",
                filename: a,
                ...null != n.media ? {
                  media: n.media
                } : {}
              })
            }
            return t.length > 0 ? t : void 0
          }(a),
          l = new Set((0, oL.extractFileHoldKeysFromText)(n?.content ?? null));
        if ((a.length > 0 || l.size > 0) && null != T.current) {
          let e = a.filter(oY),
            t = a.filter(oG),
            n = [...new Set(a.map(oW))],
            i = new Set([...e.map(oV), ...l]),
            o = new Set;
          for (let e of i) j.current.has(e) ? (j.current.delete(e), l.has(e) && null != T.current && !M.current && (M.current = !0, T.current.markerPoint("first_file_mounted"))) : o.add(e);
          N.current = o;
          let s = e.length > 0 ? "hatch.message.agent_media_generation" : "hatch.message.agent_file_or_code_generation",
            c = i.size - o.size;
          T.current.annotate({
            string: {
              tracePolicy: s,
              trace_policy: s
            },
            int: {
              num_images: r?.length ?? 0,
              num_videos: a.filter(oB).length,
              num_extracted_nonmedia_resources: t.length,
              num_file_cards: l.size,
              total_generated_files: new Set([...a.map(oK), ...l]).size,
              num_media_holds: o.size,
              num_media_pre_loaded: c
            },
            string_array: {
              file_types: n,
              media_hold_types: [...o].map(oM.fileExtensionForTelemetry)
            }
          }), T.current.markerPoint("holds_registered"), 0 === o.size && T.current.markerPoint("all_holds_pre_loaded")
        }
        if (null != T.current) {
          T.current.markerPoint("message_done");
          let t = e.transcript?.metadata;
          null != t && T.current.annotate({
            string: {
              model: t.model
            }
          });
          let n = function(e) {
            let t = e.transcript?.messages;
            if (!t) return [];
            let n = new Set;
            for (let e of t)
              if (e.content)
                for (let t of e.content) "tool_call" === t.type && t.tool_type && n.add(t.tool_type);
            return Array.from(n)
          }(e);
          n.length > 0 && T.current.annotate({
            string_array: {
              tool_types: n
            }
          }), T.current.annotate({
            string: {
              message_id: e.message_id
            }
          }), null != H.current && T.current.annotate({
            int: {
              TTIT: Math.round(H.current)
            }
          }), R.current > 0 && T.current.annotate({
            int: {
              num_text_appends: R.current
            }
          })
        }
        switch (e.status) {
          case "completed":
            N.current.size > 0 ? (D.current = !0, O.current = window.setTimeout(() => {
              if (null != T.current && D.current) {
                let e = N.current.size;
                T.current.annotate({
                  string: {
                    hold_timeout_reason: "hold_timeout"
                  },
                  int: {
                    media_holds_remaining_at_timeout: e
                  },
                  string_array: {
                    unloaded_hold_types: [...N.current].map(oM.fileExtensionForTelemetry)
                  }
                }), T.current.markerPoint("hold_timeout"), (0, tZ.endManualTrace)(T.current, "TIMEOUT"), T.current = void 0, F()
              }
            }, oL.MEDIA_HOLD_TIMEOUT_MS)) : (null != T.current && B(), T.current = void 0);
            break;
          case "failed":
            W(e.error ?? "Unknown Error", void 0, {
              string: {
                payload_error: e.error ?? "Unknown Error"
              }
            });
            break;
          case "interrupted":
            V("interrupted")
        }
      })), e.push(w("delta.text_append", e => {
        if ("subagent" !== (e.stream_lane ?? e.transcript_surface)) {
          if (R.current = R.current + 1, 1 === R.current) P.current = performance.now();
          else if (null != H.current && null != P.current) {
            let e, t = performance.now(),
              n = t - P.current;
            e = H.current, H.current = e + (n - e) / (R.current - 1), P.current = t
          }
          null != T.current && R.current <= 10 && T.current.markerPoint(`text_append_${R.current}`)
        }
      })), () => {
        U("provider_unmounted"), H.current = void 0, R.current = 0, e.forEach(oz)
      }
    }, x = [U, F, V, W, w, B], E[18] = w, E[19] = S, E[20] = x) : (S = E[19], x = E[20]), (0, r.useEffect)(S, x), E[21] !== A ? (k = (0, n.jsx)(oF.Provider, {
      value: X,
      children: A
    }), E[21] = A, E[22] = k) : k = E[22], k
  }

  function oz(e) {
    return e()
  }

  function oK(e) {
    return (0, oL.relativePathFromUri)(e.uri)
  }

  function oB(e) {
    return "video" === e.fileType
  }

  function oV(e) {
    return (0, oL.filenameFromUri)(e.uri)
  }

  function oW(e) {
    return e.fileType
  }

  function oG(e) {
    return "image" !== e.fileType && "video" !== e.fileType
  }

  function oY(e) {
    return "image" === e.fileType || "video" === e.fileType
  }
  var oq = e.i(702471),
    o$ = e.i(162877);
  let oQ = new Set(["image/jpeg", "image/png"]);
  class oX extends Error {
    reason;
    constructor(e, t, n) {
      super(t, n), this.name = "PastedImageNormalizationError", this.reason = e
    }
  }
  async function oZ(e, t, n) {
    var a, r;
    let l;
    if (!oQ.has(t)) throw new oX("unsupported_format", "The pasted image format cannot be normalized safely");
    if (!Number.isFinite(n) || n <= 0) throw new oX("invalid_budget", "No inline byte budget remains for the pasted image");
    if ("function" != typeof createImageBitmap) throw new oX("decode_failed", "Image bitmap decoding is unavailable");
    let i = e.type === t ? e : new File([e], e.name, {
      type: t,
      lastModified: e.lastModified
    });
    try {
      await (0, o$.readBugReportImageDimensions)(i)
    } catch (e) {
      throw new oX("decode_failed", "The pasted image dimensions could not be read", {
        cause: e
      })
    }
    try {
      l = await createImageBitmap(i)
    } catch (e) {
      throw new oX("decode_failed", "The pasted image could not be decoded", {
        cause: e
      })
    }
    try {
      let e;
      if (l.width <= 0 || l.height <= 0) throw new oX("decode_failed", "The pasted image has invalid decoded dimensions");
      let t = document.createElement("canvas"),
        i = t.getContext("2d");
      if (null == i) throw new oX("encode_failed", "A 2D canvas context is unavailable");
      let o = (a = l.width, r = l.height, e = Math.min(1, 4096 / a, 4096 / r, Math.sqrt(16e6 / (a * r))), {
        width: Math.max(1, Math.floor(a * e)),
        height: Math.max(1, Math.floor(r * e))
      });
      for (let e = 0; e < 4; e += 1) {
        t.width = o.width, t.height = o.height, i.imageSmoothingEnabled = !0, i.imageSmoothingQuality = "high", i.fillStyle = "#ffffff", i.fillRect(0, 0, o.width, o.height), i.drawImage(l, 0, 0, o.width, o.height);
        let a = await
        function(e) {
          return new Promise((t, n) => {
            e.toBlob(e => {
              null == e || 0 === e.size ? n(new oX("encode_failed", "The pasted image could not be encoded as JPEG")) : t(e)
            }, "image/jpeg", .85)
          })
        }(t);
        if (a.size <= n) return a;
        if (3 === e) break;
        let r = .92 * Math.sqrt(n / a.size),
          s = Math.max(.5, Math.min(.9, r)),
          c = {
            width: Math.max(1, Math.floor(o.width * s)),
            height: Math.max(1, Math.floor(o.height * s))
          };
        if (c.width === o.width && c.height === o.height) break;
        o = c
      }
      throw new oX("output_too_large", "The pasted image remains too large after normalization")
    } finally {
      l.close()
    }
  }
  var oJ = e.i(712824);

  function o0() {
    return window.__HATCH_COMPOSER_PREHYDRATION_VALUE__ ?? null
  }

  function o1() {
    window.__HATCH_COMPOSER_PREHYDRATION_CAPTURE_ACTIVE__ = !1, delete window.__HATCH_COMPOSER_PREHYDRATION_VALUE__
  }
  let o2 = (0, r.lazy)(() => e.A(913169).then(e => ({
      default: e.HatchQuotePreview
    }))),
    o3 = (0, r.lazy)(() => e.A(774129).then(e => ({
      default: e.HatchSlashCommandMenu
    }))),
    o8 = () => e.A(838580).then(e => ({
      default: e.HatchApprovalCardDeck
    })),
    o4 = (0, r.lazy)(o8),
    o5 = (0, r.lazy)(() => e.A(564279).then(e => ({
      default: e.HatchBackgroundApprovalSurface
    }))),
    o6 = (0, et.createClientLogger)("HatchComposer"),
    o9 = [.15, 1, .4, 1],
    o7 = [.45, .1, .2, 1],
    se = [];

  function st(e, t) {
    return 0 === t.size ? e : {
      ...e,
      pendingAttachments: e.pendingAttachments.filter(e => !t.has(e)),
      pendingSend: null
    }
  }

  function sn(e) {
    let t, r, l, i, o, s, c, u, d, h = (0, a.c)(31),
      {
        children: f,
        contentOrigin: m,
        animateContent: p
      } = e,
      g = void 0 === p || p,
      v = (0, tS.useReducedMotion)();
    h[0] !== v ? (t = !v && {
      height: 0
    }, h[0] = v, h[1] = t) : t = h[1], h[2] !== v ? (r = {
      height: "auto",
      transition: v ? {
        duration: 0
      } : {
        duration: .2,
        ease: o9
      }
    }, h[2] = v, h[3] = r) : r = h[3], h[4] !== v ? (l = {
      height: 0,
      transition: v ? {
        duration: 0
      } : {
        duration: .16,
        ease: o7
      }
    }, h[4] = v, h[5] = l) : l = h[5], h[6] !== g || h[7] !== v ? (i = !v && !!g && {
      opacity: 0,
      y: -10,
      scale: .97
    }, h[6] = g, h[7] = v, h[8] = i) : i = h[8], h[9] !== g || h[10] !== v ? (o = {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: v || !g ? {
        duration: 0
      } : {
        delay: .08,
        duration: .18,
        ease: o9
      }
    }, h[9] = g, h[10] = v, h[11] = o) : o = h[11];
    let C = +!g,
      y = v || !g ? 0 : -10,
      _ = v || !g ? 1 : .97;
    h[12] !== g || h[13] !== v ? (s = v || !g ? {
      duration: 0
    } : {
      duration: .14,
      ease: o7
    }, h[12] = g, h[13] = v, h[14] = s) : s = h[14], h[15] !== _ || h[16] !== s || h[17] !== C || h[18] !== y ? (c = {
      opacity: C,
      y: y,
      scale: _,
      transition: s
    }, h[15] = _, h[16] = s, h[17] = C, h[18] = y, h[19] = c) : c = h[19];
    let b = "center" === (void 0 === m ? "top" : m) ? "origin-center" : "origin-top";
    return h[20] !== f || h[21] !== c || h[22] !== b || h[23] !== i || h[24] !== o ? (u = (0, n.jsx)(tb.motion.div, {
      initial: i,
      animate: o,
      exit: c,
      className: b,
      children: f
    }), h[20] = f, h[21] = c, h[22] = b, h[23] = i, h[24] = o, h[25] = u) : u = h[25], h[26] !== u || h[27] !== t || h[28] !== r || h[29] !== l ? (d = (0, n.jsx)(tb.motion.div, {
      initial: t,
      animate: r,
      exit: l,
      className: "overflow-clip",
      children: u
    }), h[26] = u, h[27] = t, h[28] = r, h[29] = l, h[30] = d) : d = h[30], d
  }

  function sa(e) {
    let t, r, l, i, o, s, c = (0, a.c)(21),
      {
        children: u,
        enterDelay: d,
        layoutDependency: h
      } = e,
      f = void 0 === d ? 0 : d,
      m = (0, tS.useReducedMotion)(),
      p = !m && "position";
    c[0] !== m ? (t = !m && {
      opacity: 0,
      y: 10,
      scale: .97
    }, c[0] = m, c[1] = t) : t = c[1], c[2] !== f || c[3] !== m ? (r = {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: m ? {
        duration: 0
      } : {
        delay: f,
        duration: .18,
        ease: o9
      }
    }, c[2] = f, c[3] = m, c[4] = r) : r = c[4];
    let g = m ? 0 : -10,
      v = m ? 1 : .97;
    return c[5] !== m ? (l = m ? {
      duration: 0
    } : {
      duration: .14,
      ease: o7
    }, c[5] = m, c[6] = l) : l = c[6], c[7] !== g || c[8] !== v || c[9] !== l ? (i = {
      opacity: 0,
      y: g,
      scale: v,
      transition: l
    }, c[7] = g, c[8] = v, c[9] = l, c[10] = i) : i = c[10], c[11] !== m ? (o = m ? {
      duration: 0
    } : {
      layout: {
        duration: .2,
        ease: o9
      }
    }, c[11] = m, c[12] = o) : o = c[12], c[13] !== u || c[14] !== h || c[15] !== p || c[16] !== t || c[17] !== r || c[18] !== i || c[19] !== o ? (s = (0, n.jsx)(tb.motion.div, {
      layout: p,
      layoutDependency: h,
      initial: t,
      animate: r,
      exit: i,
      transition: o,
      className: "origin-center",
      children: u
    }), c[13] = u, c[14] = h, c[15] = p, c[16] = t, c[17] = r, c[18] = i, c[19] = o, c[20] = s) : s = c[20], s
  }
  let sr = new Set(["heic", "heif", "avif"]),
    sl = new Set(["image/heic", "image/heif", "image/avif"]),
    si = {
      "image/jpg": "image/jpeg",
      "image/pjpeg": "image/jpeg",
      "image/x-png": "image/png"
    },
    so = {
      "application/msword": "doc",
      "application/octet-stream": "bin",
      "application/pdf": "pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
      "image/avif": "avif",
      "image/gif": "gif",
      "image/heic": "heic",
      "image/heif": "heif",
      "image/jpeg": "jpg",
      "image/png": "png",
      "image/webp": "webp",
      "text/css": "css",
      "text/csv": "csv",
      "text/html": "html",
      "text/javascript": "js",
      "text/markdown": "md",
      "text/plain": "txt",
      "text/typescript": "ts",
      "text/xml": "xml",
      "text/yaml": "yaml",
      "video/mp4": "mp4",
      "video/quicktime": "mov"
    };

  function ss(e) {
    let t = e.toLowerCase();
    return si[t] ?? t
  }

  function sc(e, t) {
    let n = e.lastIndexOf("."),
      a = n > 0 ? e.slice(0, n) : e;
    return `${a}.${t}`
  }

  function su(e) {
    return new Promise((t, n) => {
      let a = new FileReader;
      a.onload = () => {
        t(a.result.split(",")[1] ?? "")
      }, a.onerror = () => n(a.error), a.readAsDataURL(e)
    })
  }
  async function sd(e) {
    let t = URL.createObjectURL(e);
    try {
      return await new Promise((e, n) => {
        let a = new Image;
        a.onload = () => {
          let t = document.createElement("canvas");
          t.width = a.naturalWidth, t.height = a.naturalHeight;
          let r = t.getContext("2d");
          r ? (r.drawImage(a, 0, 0), t.toBlob(t => t ? e(t) : n(Error("toBlob failed")), "image/jpeg", .85)) : n(Error("Canvas context unavailable"))
        }, a.onerror = () => n(Error("Image load failed")), a.src = t
      })
    } finally {
      URL.revokeObjectURL(t)
    }
  }
  async function sh(t, n, a, r, l, i, o) {
    let s = function(e, t, n) {
      let a = e.name.trim();
      if ("" !== a && /\.[^.]+$/.test(a)) return a;
      let r = a || function(e) {
          switch (e) {
            case "image":
              return "pasted-image";
            case "video":
              return "pasted-video";
            case "text":
              return "pasted-text";
            case "document":
              return "attachment"
          }
        }(n),
        l = function(e) {
          let t = so[e];
          if (null != t) return t;
          let n = e.match(/^[a-z0-9.+-]+\/([a-z0-9.+-]+)$/)?.[1];
          return null != n ? n.split("+")[0] ?? null : null
        }(t);
      return null == l ? r : `${r}.${l}`
    }(t, n, a);
    if ("image" === a) {
      var c;
      let e, a, l;
      if (sl.has(ss(t.type)) || sr.has((c = t.name, c.split(".").pop()?.toLowerCase() ?? ""))) {
        let n = await sd(t);
        if (s = sc(s, "jpg"), null != r && n.size > r) {
          let e = new File([n], s, {
            type: "image/jpeg",
            lastModified: t.lastModified
          });
          n = await oZ(e, "image/jpeg", r)
        }
        e = await su(n), a = "image/jpeg", l = URL.createObjectURL(n)
      } else if (null != r && t.size > r) {
        if (!oQ.has(n)) throw new oX("unsupported_format", "The pasted image format cannot be normalized safely");
        let i = await oZ(t, n, r);
        e = await su(i), a = "image/jpeg", s = sc(s, "jpg"), l = URL.createObjectURL(i)
      } else e = await (0, oJ.readBlobAsBase64)(t), a = n, l = o ?? URL.createObjectURL(t);
      return {
        composerId: i,
        dataBase64: e,
        mimeType: a,
        filename: s,
        previewUrl: l,
        category: "image",
        rawFile: t
      }
    }
    if ("video" === a) {
      let a = "";
      try {
        let {
          generateVideoThumbnailFromFile: n
        } = await e.A(308137);
        a = await n(t)
      } catch {}
      return {
        composerId: i,
        dataBase64: (0, iD.shouldUploadAttachment)("video", t.size, l) ? "" : await (0, oJ.readBlobAsBase64)(t),
        mimeType: n,
        filename: s,
        previewUrl: a,
        category: "video",
        rawFile: t
      }
    }
    return {
      composerId: i,
      dataBase64: (0, iD.shouldUploadAttachment)(a, t.size) ? "" : await (0, oJ.readBlobAsBase64)(t),
      mimeType: n,
      filename: s,
      previewUrl: "",
      category: a,
      rawFile: t
    }
  }
  async function sf(e) {
    let t = new Image;
    if (t.src = e, "function" == typeof t.decode) try {
      await t.decode()
    } catch {}
  }

  function sm({
    autoFocus: t = !0,
    deferChrome: l = !1,
    disabled: i = !1,
    disabledPlaceholder: o,
    onInteract: c,
    onSend: u
  }) {
    var d, h, f;
    let p, v, y, b, S, x, k, E, A, T, w, R, H, P, I, N, j, D, L;
    (0, r.useEffect)(() => (0, e5.markInitialLoadPoint)("composer_controller_mounted"), []);
    let {
      sendMessage: M,
      cancelStream: O,
      isMessageDeletionPending: F,
      quotedMessage: U,
      clearQuotedMessage: z,
      persistWidgetState: K
    } = (0, g.useHatchChat)(), B = function() {
      let e, t, n = (0, a.c)(3),
        {
          sendRequest: r
        } = (0, ev.useGatewayQueryContext)();
      n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = tm.fbs._("Couldn't stop the task. Try again.", null, {
        hk: "1p50Rm"
      }), n[0] = e) : e = n[0];
      let l = e;
      return n[1] !== r ? (t = async () => {
        let e = (0, io.findStoppableBrowserTaskCandidate)((0, C.getSnapshot)());
        if (null != e) try {
          await (0, is.requestBrowserTaskStop)({
            taskId: e.data.browserTaskId,
            presentationId: e.widget.widgetId,
            preservePresentationOutcome: !1,
            presentationAction: "retain_window",
            sendRequest: r,
            failureMessage: l
          })
        } catch (t) {
          ic.error({
            error: t instanceof Error ? t : Error(String(t)),
            taskId: e.data.browserTaskId,
            tags: {
              surface: ec.HATCH_SENTRY_SURFACES.BROWSER_SESSION
            }
          }, "Composer stop could not settle the active browser task")
        }
      }, n[1] = r, n[2] = t) : t = n[2], t
    }(), {
      activeHistoryReady: V,
      approvalSafetyError: W,
      approvalSafetyGeneration: G,
      approvalSafetyReady: Y,
      gatewayScopeKey: q,
      retryApprovalSafety: $
    } = (0, g.useHatchChatReadiness)(), Q = (0, ii.useHatchStatusChromeState)(), X = (0, rh.useAgentActivityCode)(), Z = (0, lf.useEffectiveHatchChatRoute)(), J = (0, lc.getHatchChatRouteKey)(Z), ee = (0, e8.useHatchStoreApi)(), {
      value: et,
      show: en
    } = function(e) {
      let t, n, l, i, o, s, c = (0, a.c)(10),
        [u, d] = (0, r.useState)(null),
        h = (0, r.useRef)(null);
      c[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
        null != h.current && (clearTimeout(h.current), h.current = null)
      }, c[0] = t) : t = c[0];
      let f = t;
      c[1] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
        f(), d(null)
      }, c[1] = n) : n = c[1];
      let m = n;
      4e3 !== c[2] ? (l = e => {
        f(), d(e), h.current = setTimeout(() => {
          h.current = null, d(null)
        }, 4e3)
      }, c[2] = 4e3, c[3] = l) : l = c[3];
      let p = l;
      return c[4] === Symbol.for("react.memo_cache_sentinel") ? (i = () => m, c[4] = i) : i = c[4], c[5] !== e ? (o = [m, e], c[5] = e, c[6] = o) : o = c[6], (0, r.useEffect)(i, o), c[7] !== p || c[8] !== u ? (s = {
        clear: m,
        show: p,
        value: u
      }, c[7] = p, c[8] = u, c[9] = s) : s = c[9], s
    }(J), ea = (0, l6.useComposerInputValue)(), er = (0, l6.useComposerWidgetCustomInputPlaceholder)(), el = (0, l6.useComposerPendingAttachments)(), es = (0, l6.useComposerPendingSend)(), eu = (0, l6.useComposerProcessingFiles)(), ed = (0, l2.useHatchChatSelector)(e => e.supportsVideoFileRefIngestion), eh = (0, rh.useHasPendingUserConfirmation)(), ef = (0, m.useHatchVoiceCallingEnabled)(), em = (0, eo.useOptionalHatchVoiceCall)(), ep = ef && null != em && ("connecting" === em.status || "connected" === em.status), {
      companionRootAgentIdsByAgentId: eg,
      currentChatRootAgentId: eC,
      currentChatRouteKey: ey,
      currentChatSessionId: e_,
      liveTaskScopesByTaskId: eb,
      liveTaskStatusesByTaskId: eS,
      resolvedApprovalIdsById: ex,
      snapshotPendingApprovalBackgroundOnlyById: ek,
      snapshotPendingApprovalsById: eE,
      snapshotPendingApprovalScopesById: eA,
      taskStatusesByTaskId: eT
    } = (0, l2.useHatchActivitySelector)(e => ({
      companionRootAgentIdsByAgentId: e.companionRootAgentIdsByAgentId,
      currentChatRootAgentId: e.currentChatRootAgentId,
      currentChatRouteKey: e.currentChatRouteKey,
      currentChatSessionId: e.currentChatSessionId,
      liveTaskScopesByTaskId: e.liveTaskScopesByTaskId ?? {},
      liveTaskStatusesByTaskId: e.liveTaskStatusesByTaskId,
      resolvedApprovalIdsById: e.resolvedApprovalIdsById,
      snapshotPendingApprovalBackgroundOnlyById: e.snapshotPendingApprovalBackgroundOnlyById,
      snapshotPendingApprovalsById: e.snapshotPendingApprovalsById,
      snapshotPendingApprovalScopesById: e.snapshotPendingApprovalScopesById,
      taskStatusesByTaskId: e.taskStatusesByTaskId
    }), l5.shallow), ew = (0, r.useRef)(null), eR = ey === J ? eC : null;
    null != J && null != eR && (ew.current = {
      rootAgentId: eR,
      routeKey: J
    });
    let eH = eR ?? (ew.current?.routeKey === J ? ew.current.rootAgentId : null),
      eP = (0, r.useMemo)(() => (0, oe.hasBlockingApprovalForChatRoute)(eT, eb, Z, {
        assumeUnknownRootAgentMatches: !1,
        companionRootAgentIdsByAgentId: eg,
        currentChatRootAgentId: eH,
        currentChatRouteKey: ey,
        currentChatSessionId: e_,
        includeTasklessSnapshotKey: !0,
        requireSnapshotMatch: !0,
        resolvedApprovalIdsById: ex,
        snapshotPendingApprovalBackgroundOnlyById: ek,
        snapshotPendingApprovalsById: eE,
        snapshotPendingApprovalScopesById: eA
      }), [Z, eg, ey, e_, eb, ex, ek, eE, eA, eT, eH]),
      eI = (0, r.useMemo)(() => (0, oe.hasBlockingApprovalForChatRoute)(eT, eb, Z, {
        companionRootAgentIdsByAgentId: eg,
        currentChatRootAgentId: eC,
        currentChatRouteKey: ey,
        currentChatSessionId: e_,
        includeTasklessSnapshotKey: !0,
        requireSnapshotMatch: !0,
        resolvedApprovalIdsById: ex,
        snapshotPendingApprovalBackgroundOnlyById: ek,
        snapshotPendingApprovalsById: eE,
        snapshotPendingApprovalScopesById: eA
      }), [Z, eg, eC, ey, e_, eb, ex, ek, eE, eA, eT]),
      [eN, ej] = (0, r.useState)(null),
      eD = eN?.gatewayScopeKey === q ? eN.approvals : se,
      eL = eh || "needs_approval" === X || eD.length > 0,
      eM = Y && V;
    (0, r.useEffect)(() => {
      eL && ((0, i6.preloadHatchInlineApprovalCard)(), o8().catch(() => {}))
    }, [eL]);
    let eO = (0, r.useMemo)(() => eL ? Date.now() : 1 / 0, [eL]),
      eF = (0, i5.useHatchEgressApprovalsQuery)(eL),
      {
        data: eU,
        dataUpdatedAt: ez
      } = eF,
      eK = null == eU ? null : "snapshot" === eU.source || ez >= eO ? eU : null,
      eB = (0, r.useCallback)(e => (0, oe.isBackgroundOnlyComposerApproval)(e, eT, eS), [eS, eT]),
      eV = (0, r.useCallback)(e => (0, oe.approvalMatchesComposerRoute)(e, Z, eH, {
        assumeUnknownRootAgentMatches: !1,
        companionRootAgentIdsByAgentId: eg,
        currentChatRouteKey: ey,
        currentChatSessionId: e_
      }), [Z, eg, ey, e_, eH]),
      eW = (0, oe.getComposerSessionIdForRoute)(Z, e_, ey),
      eG = (0, r.useCallback)(e => eB(e) || e.scope?.threadId == null || null != eW || Z?.kind === "main" || eV(e), [Z?.kind, eV, eB, eW]),
      eY = (0, r.useCallback)(e => eB(e) || !eV(e), [eV, eB]),
      eq = (0, r.useMemo)(() => eK?.pending ?? [], [eK?.pending]),
      e$ = eM && null != eK;
    (0, r.useEffect)(() => {
      ej(e => e$ && null != q ? {
        approvals: eq,
        gatewayScopeKey: q
      } : e?.gatewayScopeKey === q ? e : null)
    }, [e$, q, eq]);
    let eQ = !e$ && null == W && eN?.gatewayScopeKey === q && eD.length > 0,
      eX = e$ || eQ,
      eZ = (0, r.useMemo)(() => eX && eL ? null == eK ? eD : eq : [], [eX, eL, eK, eD, eq]),
      eJ = (0, r.useMemo)(() => eZ.filter(e => eG(e) && !eY(e)), [eG, eY, eZ]),
      e0 = eX && (eJ.length > 0 || 0 === eZ.length && eP),
      e1 = (0, r.useMemo)(() => e0 ? se : eZ.filter(e => eG(e) && eY(e)), [eG, eY, e0, eZ]),
      e2 = (0, r.useMemo)(() => {
        let e = eU?.pending ?? [];
        return null == eC && null == eW ? e.filter(e => !eB(e)) : e.filter(eG).filter(e => !eY(e))
      }, [eW, eG, eB, eY, eC, eU?.pending]),
      e3 = (0, r.useMemo)(() => eJ.length > 0 ? eJ : eP ? e2 : eJ, [eJ, eP, e2]),
      e4 = (0, r.useMemo)(() => (function(e) {
        let t = [],
          n = [];
        for (let a of e.slice(0, i7.MAX_APPROVALS_PER_COMPOSER_ACTION)) a.isExclusive ? t.push([a]) : n.push(a);
        return n.length > 0 ? [...t, n] : t
      })(e3), [e3]),
      e9 = (0, r.useRef)(e4.length),
      e7 = (0, r.useRef)(!1),
      te = (0, r.useRef)(null),
      tt = 1 === e4.length && e9.current > 1;
    (0, r.useEffect)(() => {
      e9.current = e4.length, e4.length <= 1 && (e7.current = !1, te.current = null)
    }, [e4.length]);
    let tn = (0, r.useCallback)((e, t) => {
        e7.current = e, te.current = t
      }, []),
      ta = (0, r.useDeferredValue)(e0, !1),
      tr = eM && eP && !e$,
      tl = !l && !tr,
      ti = !(0, tX.useLatchedTrue)(tl);
    (0, r.useEffect)(() => {
      ti || (0, e5.markInitialLoadPoint)("composer_chrome_ready")
    }, [ti]), (0, r.useEffect)(() => {
      if (ti) return;
      let e = requestAnimationFrame(() => (0, e6.markInitialLoadComposerVisible)());
      return () => cancelAnimationFrame(e)
    }, [ti]);
    let to = !ti && e0 && ta,
      ts = o0(),
      tc = (0, l2.useHatchChatSelector)(e => null != e.sxs),
      tu = e0 || eI || tr || F || tc || i,
      td = tr || F || i,
      th = (0, iN.useHatchGatewayFs)(),
      tf = (0, r.useRef)(th);
    tf.current = th;
    let [tp, tg] = (0, r.useState)(""), tv = (0, r.useRef)(null), tC = (0, r.useRef)(!1), [ty, t_] = (0, r.useState)(!1), tb = (0, r.useCallback)(e => {
      if (tv.current = e, null != e && !tC.current) {
        let t;
        tC.current = !0, null == (t = o0()) || (e.value = t), t_(!0)
      }
    }, []);
    (0, r.useLayoutEffect)(() => {
      if (!ty) return;
      let e = o0();
      null == e || (ee.getState().composer.inputValue !== e || ea !== e ? C.restorePreHydrationComposerInputForStore(ee, J, e) : o1())
    }, [J, ty, ee, ea]);
    let tS = (0, r.useRef)(null),
      tx = (0, r.useRef)(null),
      tE = (0, ot.useHeldApprovalDecisionKeys)(),
      tA = (0, r.useRef)(!1),
      tT = (0, r.useRef)(0),
      [tw, tR] = (0, r.useState)(null),
      tH = (0, r.useCallback)(() => {
        tA.current = !1, c?.()
      }, [c]),
      tP = (0, r.useCallback)(e => {
        let t = e.relatedTarget;
        !(t instanceof Node && e.currentTarget.contains(t)) && t instanceof Element && t !== document.body && (tA.current = !0)
      }, []),
      tI = (0, r.useCallback)((e, t = "decision_key_release") => {
        tR({
          id: ++tT.current,
          target: e,
          decisionGuard: t
        })
      }, []),
      tN = (0, r.useCallback)(() => {
        tI("primary_action", "held_decision_keys")
      }, [tI]),
      tj = (0, r.useCallback)(() => {
        tI("primary_action", "decision_key_release")
      }, [tI]),
      tD = tw?.decisionGuard ?? "decision_key_release",
      tL = (0, r.useCallback)(e => {
        null != e && tR(t => t?.id === e ? null : t)
      }, []),
      tM = "u" > typeof document ? document.activeElement : null,
      tF = null != tx.current && null != tM && tx.current.contains(tM),
      tU = e7.current && te.current?.isConnected === !0 && te.current === tM || tM?.closest("[data-hatch-approval-card-deck]") != null && tS.current?.contains(tM) === !0;
    (0, r.useEffect)(() => {
      if (null == tw || e0) return;
      let e = tw.id,
        t = requestAnimationFrame(() => {
          let t = tv.current,
            n = document.activeElement,
            a = null != n && n !== document.body && n.isConnected && tS.current?.contains(n) !== !0;
          null == t || tA.current || a || (t.focus(), t.setSelectionRange(t.value.length, t.value.length)), tR(t => t?.id === e ? null : t)
        });
      return () => cancelAnimationFrame(t)
    }, [tw, e0]);
    let tz = (0, r.useRef)(!1),
      tK = (0, r.useRef)(i),
      tB = (0, r.useRef)(null),
      {
        onSendTraceStart: tV,
        onSendTraceCancel: tG,
        onSendTraceFail: tY
      } = (0, oP.useHatchSendUserMessageTracing)(),
      {
        onAgentTraceCancel: tq
      } = function() {
        let e = (0, r.useContext)(oF);
        if (null == e) throw Error("useHatchAgentMessageTracing must be used within HatchAgentMessageTracingProvider");
        return e
      }(),
      t$ = tm.fbs._("Message", null, {
        hk: "UgYV8"
      }),
      tQ = tm.fbs._("Review the approval request in chat to continue", null, {
        hk: "2UsvKL"
      }),
      tZ = tm.fbs._("Expected `/sxs <message>`.", null, {
        hk: "Smzp9"
      }),
      tJ = tm.fbs._("This image is too large to attach. Try a smaller copy.", null, {
        hk: "UkmMe"
      }),
      t0 = tm.fbs._("Some of these images are too large to attach. Try smaller copies.", null, {
        hk: "2qSmCM"
      }),
      t1 = e0 ? tm.fbs._("Approval required. You can keep typing, but sending is paused until you allow or deny the request above.", null, {
        hk: "xetcz"
      }) : null,
      t2 = tc ? tm.fbs._("You can keep typing, but you can't send a new message until you choose a response or skip the comparison.", null, {
        hk: "46HpcY"
      }) : null,
      t3 = (0, r.useCallback)(() => {
        rx.toast.info(tQ)
      }, [tQ]),
      t8 = i ? o ?? t$ : null,
      t4 = null != t8 ? t8 : er ?? t$,
      t6 = "working" === Q || "responding" === Q || "making_something" === Q || "compacting" === Q,
      t7 = function(e) {
        let {
          sendRequest: t,
          connectionState: n
        } = (0, ei.useHatchRpc)(), {
          cancelStream: a,
          returnToLatest: l
        } = (0, g.useHatchChat)(), {
          openToActivity: i
        } = (0, nn.useHatchStatusPanel)(), o = (0, lf.useEffectiveHatchChatRoute)(), [s, c] = (0, r.useState)(0), u = (0, r.useMemo)(() => (0, i1.buildHatchChatCapabilities)(), []), d = o?.kind === "thread" ? o.sessionId : null, h = (0, r.useCallback)(e => {
          C.reduceChat({
            type: "chat/start_stream",
            setExpectingBotResponse: !0
          }), window.dispatchEvent(new Event("hatch-user-message-sent")), t("chat.stream", {
            items: [{
              type: "text",
              text: e
            }],
            node_id: C.getSnapshot().deviceContext.local.deviceId,
            ...null != d && {
              session_id: d
            },
            capabilities: u
          }).catch(t => {
            i8.error({
              error: t instanceof Error ? t : Error(String(t)),
              commandText: e,
              tags: {
                surface: ec.HATCH_SENTRY_SURFACES.CHAT
              }
            }, "sendGatewayCommand failed"), C.reduceChat({
              type: "chat/stop_stream"
            }), i4(`Failed to send ${e.split(" ")[0]}.`)
          })
        }, [t, d, u]), f = e.trim(), m = f.startsWith("/"), p = f.indexOf(" "), v = -1 !== p, y = v ? f.slice(0, p).toLowerCase() : null, _ = y ? i3.find(e => e.name === y && null != e.subcommands) : null, b = !v && m ? i3.find(e => e.name === f.toLowerCase() && null != e.subcommands) : null, S = v ? f.slice(p + 1).toLowerCase() : "", x = m && !v && f.length > 0, k = m && (null != _ || null != b), E = x || k, A = _ ?? b, T = (0, r.useMemo)(() => {
          let e;
          return k && A ? A.subcommands.filter(e => e.suffix.toLowerCase().startsWith(S)).map(e => ({
            name: `${A.name} ${e.suffix}`,
            aliases: [],
            category: A.category,
            description: e.description,
            args: e.args,
            execute: A.execute
          })) : x ? (e = f.toLowerCase(), i3.filter(t => t.name.startsWith(e) || t.aliases.some(t => t.startsWith(e)))) : i3
        }, [S, x, k, A, f]), w = (0, r.useCallback)(() => ({
          sendGatewayCommand: h,
          connectionState: n,
          addSystemMessage: i4,
          cancelStream: a,
          returnToLatest: l,
          openActivityPanel: i
        }), [h, n, a, l, i]), R = (0, r.useCallback)(e => {
          c(t => {
            let n = T.length;
            return 0 === n ? 0 : (t + e + n) % n
          })
        }, [T.length]), H = (0, r.useCallback)(e => {
          let t = T[e];
          t && (c(0), C.setComposerInputValue(t.args ? t.name + " " : t.name))
        }, [T]), P = (0, r.useCallback)(() => {
          c(0)
        }, []), I = (0, r.useCallback)(e => (function(e, t) {
          let n = e.trim();
          if (!n.startsWith("/") || "/" === n) return !1;
          let a = n.indexOf(" "),
            r = (-1 === a ? n : n.slice(0, a)).toLowerCase(),
            l = -1 === a ? "" : n.slice(a + 1),
            i = i3.find(e => e.name === r || e.aliases.includes(r));
          return !!i && (i.execute(l, t), !0)
        })(e, w()), [w]), N = (0, r.useRef)(T.length);
        return N.current !== T.length && (N.current = T.length, s >= T.length && c(0)), {
          isActive: E,
          filteredCommands: T,
          selectedIndex: s,
          moveSelection: R,
          selectItem: H,
          dismiss: P,
          tryExecute: I
        }
      }(ea),
      ne = (d = {
        attachmentAlert: et,
        chromeDeferred: ti,
        hasApprovalSafetyError: !Y && null != W,
        suppressApprovalSafetyError: "vm_updating" === Q
      }).chromeDeferred ? {
        kind: "none"
      } : null != d.attachmentAlert ? {
        kind: "attachment",
        alert: d.attachmentAlert
      } : d.hasApprovalSafetyError && !d.suppressApprovalSafetyError ? {
        kind: "safety"
      } : {
        kind: "none"
      },
      nt = !ti && "none" === ne.kind && 0 === e1.length && !e0,
      na = eu.length > 0;
    (0, r.useEffect)(() => {
      oq.default.InteractionTracingCore.getPendingInteractions().forEach(e => {
        e.addMarkerPoint("COMPOSER_MOUNTED", "AppTiming")
      })
    }, []);
    let nr = (0, il.useHatchChatThreadLoggingMetadata)(),
      nl = (0, t5.useInteractionLogger)(),
      {
        ref: ni,
        onClick: no
      } = (0, t5.useTrackedClickRef)({
        eventName: t9.HatchClickEvent.CHAT_TAP_ATTACHMENT,
        actionTarget: "attach_button",
        actionType: "click",
        metadata: {
          surface: "chat",
          subsurface: "composer",
          ...nr
        }
      }),
      {
        ref: ns,
        onClick: nc
      } = (0, t5.useTrackedClickRef)({
        eventName: t9.HatchClickEvent.CHAT_TAP_DICTATION,
        actionTarget: "dictation_button",
        actionType: "click",
        metadata: {
          surface: "chat",
          subsurface: "composer",
          ...nr
        }
      }),
      {
        ref: nu,
        onClick: nd
      } = (0, t5.useTrackedClickRef)({
        eventName: t9.HatchClickEvent.CHAT_CANCEL_DICTATION,
        actionTarget: "cancel_dictation_button",
        actionType: "click",
        metadata: {
          surface: "chat",
          subsurface: "composer",
          ...nr
        }
      }),
      nh = (0, r.useRef)(null),
      nf = (0, r.useRef)(null),
      nm = (0, r.useRef)(null),
      np = (0, r.useRef)(null),
      ng = (0, r.useRef)(!1),
      nv = oy().backend,
      nC = null != nv,
      ny = (0, r.useCallback)(e => {
        nu(e), nh.current = e
      }, [nu]),
      {
        isListening: n_,
        isSupported: nb,
        stopListening: nS,
        toggleListening: nx
      } = function(e = {}) {
        let {
          onResult: t,
          lang: n
        } = e, [a, l] = (0, r.useState)(!1), [i, o] = (0, r.useState)(""), [s, c] = (0, r.useState)(""), u = (0, r.useRef)(null), d = (0, r.useRef)(!1), h = (0, r.useRef)(t);
        h.current = t;
        let [f, m] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          m(null != i0())
        }, []);
        let p = (0, r.useCallback)(() => {
            d.current = !1, l(!1), c(""), u.current?.stop()
          }, []),
          g = (0, r.useCallback)(() => {
            let e = i0();
            if (!e) return;
            u.current && (u.current.abort(), u.current = null);
            let t = new e;
            t.continuous = !0, t.interimResults = !0, t.lang = n ?? ("u" > typeof navigator ? navigator.language : "en-US"), t.onresult = e => {
              let t = "",
                n = "";
              for (let a = e.resultIndex; a < e.results.length; a++) {
                let r = e.results[a];
                if (null == r) continue;
                let l = r[0]?.transcript ?? "";
                r.isFinal ? t += l : n += l
              }
              t ? (o(e => e + t), c(""), h.current?.({
                finalTranscript: t,
                interimTranscript: ""
              })) : (c(n), h.current?.({
                finalTranscript: "",
                interimTranscript: n
              }))
            }, t.onerror = e => {
              switch (e.error) {
                case "not-allowed":
                  rx.toast.error("Microphone access denied. Check your browser permissions."), d.current = !1, l(!1), c("");
                  break;
                case "network":
                  rx.toast.error("Speech recognition network error. Check your connection."), d.current = !1, l(!1), c("")
              }
            }, t.onend = () => {
              if (d.current) try {
                t.start()
              } catch {
                d.current = !1, l(!1), c("")
              }
            }, u.current = t, d.current = !0, l(!0), o(""), c("");
            try {
              t.start()
            } catch {
              d.current = !1, l(!1)
            }
          }, [n]),
          v = (0, r.useCallback)(() => {
            d.current ? p() : g()
          }, [g, p]);
        return (0, r.useEffect)(() => () => {
          d.current = !1, u.current?.abort()
        }, []), {
          isListening: a,
          isSupported: f,
          transcript: i,
          interimTranscript: s,
          startListening: g,
          stopListening: p,
          toggleListening: v
        }
      }({
        onResult: (0, r.useCallback)(e => {
          let t = nm.current;
          "standard" === (0, iP.getServingVmType)() && ng.current && (null == t || C.isComposerRouteScopeActiveForStore(ee, t)) && (e.finalTranscript ? (C.appendDictatedComposerText(e.finalTranscript), tg("")) : tg(e.interimTranscript))
        }, [ee])
      }),
      nk = (0, m.useHatchShortwaveDictationEnabled)(),
      {
        isRecording: nE,
        isActive: nA,
        isSupported: nT,
        stream: nw,
        startRecording: nR,
        stopRecording: nH,
        cancelRecording: nP
      } = (h = {
        onFinalTranscript: (0, r.useCallback)(e => {
          if (!e) return;
          let t = nm.current,
            n = oC().backend;
          null != n && n === np.current && ng.current && (null == t || C.isComposerRouteScopeActiveForStore(ee, t)) && (C.appendDictatedComposerText(e), ng.current = !1)
        }, [ee])
      }, b = (0, a.c)(11), S = oy(), x = function(t) {
        let {
          onFinalTranscript: n
        } = t, a = (0, r.useRef)(n);
        a.current = n;
        let {
          gatewayUrl: l,
          vmName: i
        } = (0, ev.useGatewayQueryContext)(), o = (0, r.useRef)(l);
        o.current = l;
        let s = (0, r.useRef)(i);
        s.current = i;
        let c = (0, _.useHatchConnection)(),
          u = c.phase,
          d = (0, r.useRef)(c);
        d.current = c;
        let h = (0, r.useRef)(new Set);
        (0, r.useEffect)(() => {
          if ("connected" !== u) return;
          let e = [...h.current];
          for (let t of (h.current.clear(), e)) t()
        }, [u]);
        let f = (0, r.useCallback)(e => "connected" === d.current.phase ? Promise.resolve(!0) : e.aborted ? Promise.resolve(!1) : new Promise(t => {
            let n = n => {
                h.current.delete(a), e.removeEventListener("abort", r), t(n)
              },
              a = () => n(!0),
              r = () => n(!1);
            h.current.add(a), e.addEventListener("abort", r, {
              once: !0
            })
          }), []),
          [m, p] = (0, r.useState)(!1),
          [g, v] = (0, r.useState)(!1),
          [C, y] = (0, r.useState)(!1),
          [b, S] = (0, r.useState)(null),
          x = tm.fbs._("Dictation failed. Please try again.", null, {
            hk: "3GcIAD"
          }),
          k = tm.fbs._("Dictation is unavailable right now. Please try again.", null, {
            hk: "201hVh"
          }),
          E = (0, r.useRef)(null),
          A = (0, r.useRef)(null),
          T = (0, r.useRef)(null),
          w = (0, r.useRef)(null),
          R = (0, r.useRef)(!1),
          H = (0, r.useRef)(0),
          P = (0, r.useRef)(""),
          I = (0, r.useRef)(0),
          N = (0, r.useRef)(0),
          j = (0, r.useRef)(0),
          D = (0, r.useRef)(null),
          L = (0, r.useRef)(null),
          M = (0, r.useRef)(null),
          O = (0, r.useRef)(null),
          F = (0, r.useRef)(!1),
          U = (0, r.useRef)(!1),
          z = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
          y("u" > typeof navigator && navigator.mediaDevices?.getUserMedia != null && "u" > typeof WebSocket)
        }, []);
        let K = (0, r.useCallback)(() => {
            null != z.current && (clearTimeout(z.current), z.current = null)
          }, []),
          B = (0, r.useCallback)(() => {
            A.current?.stop(), A.current = null, T.current?.getTracks().forEach(e => e.stop()), T.current = null, E.current = null, w.current?.abort(), w.current = null, S(null), v(!1)
          }, []),
          V = (0, r.useCallback)(e => {
            let t = {
              transport: "vm_noise",
              reason: e,
              captureDurationMs: Math.round((D.current ?? performance.now()) - j.current),
              partialCount: I.current,
              audioBytes: N.current,
              firstPartialMs: L.current,
              transcriptChars: P.current.trim().length,
              daemonSessionId: M.current,
              daemonRequestId: O.current
            };
            "timeout" === e ? op.error({
              ...t,
              tags: og
            }, "Dictation timed out waiting for the final transcript") : "final" === e && 0 === t.partialCount && t.transcriptChars > 0 ? op.error({
              ...t,
              tags: og
            }, "Dictation produced no partial transcripts") : op.retainForBugReport("info", "Dictation session complete")
          }, []),
          W = (0, r.useCallback)(e => {
            if (U.current) return;
            U.current = !0, K(), V(e);
            let t = P.current.trim();
            P.current = "", F.current = !1, E.current?.close(), B(), p(!1), t && a.current(t)
          }, [K, V, B]),
          G = tm.fbs._("Dictation is unavailable right now. Please try again.", null, {
            hk: "afSeY"
          }),
          Y = tm.fbs._("Microphone access is blocked. Allow microphone access in your browser settings, then try again.", null, {
            hk: "c7AFG"
          }),
          q = (0, r.useCallback)(async () => {
            if (R.current || null != E.current || "u" < typeof navigator || navigator.mediaDevices?.getUserMedia == null) return;
            let t = o.current;
            if (!t) return;
            R.current = !0, v(!0);
            let n = H.current,
              a = e.A(278126).catch(e => (op.error({
                error: (0, oo.toError)(e),
                tags: og
              }, "Failed to load dictation client"), null)),
              r = new AbortController;
            w.current = r;
            let l = !1;
            try {
              let e, i, o = await a;
              if (H.current !== n) return;
              if (null == o) return void rx.toast.error(G);
              let c = await f(AbortSignal.any([r.signal, AbortSignal.timeout(15e3)]));
              if (H.current !== n || r.signal.aborted) return;
              if (!c) {
                op.error({
                  connectionPhase: d.current.phase,
                  connectionReason: d.current.reason,
                  tags: og
                }, "Dictation gave up waiting for the VM connection"), rx.toast.error(k);
                return
              }
              try {
                e = await navigator.mediaDevices.getUserMedia({
                  audio: !0
                })
              } catch (e) {
                op.error({
                  error: (0, oo.toError)(e),
                  tags: og
                }, "Microphone access denied for dictation"), rx.toast.error(Y);
                return
              }
              if (H.current !== n) return void e.getTracks().forEach(e => e.stop());
              P.current = "", I.current = 0, N.current = 0, L.current = null, M.current = null, O.current = null, D.current = null, j.current = performance.now(), F.current = !1, U.current = !1;
              try {
                i = await o.openDictationStream({
                  gatewayUrl: t,
                  vmName: s.current ?? void 0,
                  signal: r.signal
                }, {
                  onOpen: () => {},
                  onSession: ({
                    sessionId: e,
                    requestId: t
                  }) => {
                    M.current = e, O.current = t
                  },
                  onPartial: e => {
                    P.current = e, I.current += 1, L.current ??= Math.round(performance.now() - j.current)
                  },
                  onFinal: e => {
                    P.current = e, W("final")
                  },
                  onError: e => {
                    (op.error({
                      error: e,
                      tags: og
                    }, "Dictation stream error"), F.current) ? W("error"): (rx.toast.error(x), K(), P.current = "", B(), p(!1))
                  }
                })
              } catch (t) {
                if (e.getTracks().forEach(e => e.stop()), H.current !== n) return;
                op.error({
                  error: (0, oo.toError)(t),
                  tags: og
                }, "Failed to open dictation stream"), rx.toast.error(k);
                return
              }
              if (H.current !== n) {
                i.close(), e.getTracks().forEach(e => e.stop());
                return
              }
              T.current = e, S(e), E.current = i, A.current = o.startDictationPcmCapture(e, e => {
                N.current += e.byteLength, E.current?.sendAudio(e)
              }), p(!0), l = !0
            } finally {
              R.current = !1, l || (w.current === r && (w.current = null), v(!1))
            }
          }, [K, x, k, W, B, f, G, Y]),
          $ = (0, r.useCallback)(() => {
            H.current++;
            let e = E.current;
            if (null == e) {
              B(), p(!1);
              return
            }
            D.current = performance.now(), A.current?.stop(), A.current = null, T.current?.getTracks().forEach(e => e.stop()), T.current = null, S(null), F.current = !0, e.finish(), K(), z.current = setTimeout(() => W("timeout"), 1e4)
          }, [K, W, B]),
          Q = (0, r.useCallback)(() => {
            H.current++, F.current = !1, U.current = !0, K(), E.current?.close(), P.current = "", B(), p(!1)
          }, [K, B]),
          X = (0, r.useCallback)(() => {
            q()
          }, [q]);
        (0, r.useEffect)(() => () => {
          H.current++, null != z.current && clearTimeout(z.current), A.current?.stop(), E.current?.close(), w.current?.abort(), T.current?.getTracks().forEach(e => e.stop())
        }, []);
        let Z = C ? null == l || "" === l ? "no_gateway" : null : "no_media_support";
        return {
          isRecording: m,
          isActive: g,
          isSupported: null == Z,
          unavailableReason: Z,
          stream: b,
          startRecording: X,
          stopRecording: $,
          cancelRecording: Q
        }
      }(h), f = h, j = (0, oi.useDictationAsrPath)(), D = oh(of, f), L = oh(om, f), k = "voyager" === j ? D : L, E = null == S.backend ? null : "vm_noise" === S.backend ? x : k, A = "vm_noise" === S.backend ? k : x, T = null == E || A.isActive ? null : E, b[0] !== T ? (p = () => {
        null == T ? ov.retainForBugReport("info", "Dictation unavailable for the serving VM") : (ov.retainForBugReport("info", "Dictation backend selected"), T.startRecording())
      }, b[0] = T, b[1] = p) : p = b[1], w = p, R = x.cancelRecording, H = k.cancelRecording, b[2] !== H || b[3] !== R ? (v = () => {
        R(), H()
      }, b[2] = H, b[3] = R, b[4] = v) : v = b[4], P = v, I = x.isActive || k.isActive, N = x.isRecording || k.isRecording, b[5] !== I || b[6] !== N || b[7] !== T || b[8] !== P || b[9] !== w ? (y = null == T ? {
        isRecording: N,
        isActive: I,
        isSupported: !1,
        stream: null,
        startRecording: w,
        stopRecording: P,
        cancelRecording: P
      } : {
        ...T,
        startRecording: w
      }, b[5] = I, b[6] = N, b[7] = T, b[8] = P, b[9] = w, b[10] = y) : y = b[10], y),
      nI = nk && nT,
      nN = nI && nC,
      nj = (0, r.useCallback)(() => {
        let {
          backend: e
        } = oC();
        null != e && (n_ && nS(), np.current = e, nm.current = C.getComposerRouteScopeForStore(ee), ng.current = !0, nR())
      }, [ee, n_, nS, nR]),
      nD = (0, r.useCallback)(() => {
        "standard" === (0, iP.getServingVmType)() && (n_ || (nm.current = C.getComposerRouteScopeForStore(ee), ng.current = !0), nx())
      }, [ee, n_, nx]),
      nL = (0, r.useRef)(!1),
      [nM, nO] = (0, r.useState)(!1),
      [nF, nU] = (0, r.useState)(!1),
      nz = nA || nM,
      nK = (0, r.useCallback)(() => {
        (0, i6.preloadHatchDictationRecordingStrip)(),
        function() {
          let {
            backend: t
          } = oC();
          null != t && ("vm_noise" === t ? e.A(278126).catch(() => {}) : "voyager" === (0, oi.readDictationAsrPath)() ? ou(of) : ou(om))
        }()
      }, []),
      nB = (0, tX.useLatchedTrue)(t7.isActive),
      [nV, nW] = (0, r.useState)(!1),
      nG = (0, r.useRef)(!1),
      nY = (0, r.useRef)(null),
      nq = (0, r.useRef)(new Set),
      n$ = (0, r.useRef)(new Map),
      [nQ, nX] = (0, r.useState)(0),
      nZ = (0, r.useRef)(!0),
      n0 = (0, r.useRef)(0),
      n1 = (0, r.useRef)(U);
    n1.current = U, (0, r.useEffect)(() => {
      nZ.current = !0;
      let e = n$.current;
      return () => {
        for (let [t, n] of(nZ.current = !1, e)) n.queued || t.abort()
      }
    }, []);
    let n2 = (0, r.useCallback)(async () => {
        if (nG.current || na || tu) return !1;
        let e = C.getComposerRouteScopeForStore(ee),
          t = e?.routeKey === J ? e : null;
        n_ && (ng.current = !1, nS()), nI && nA && !nE && nP();
        let n = (ea + (tp ? " " + tp : "")).trim(),
          a = null != es && es.content.trim() === n ? es : null,
          r = el.length > 0,
          l = null != a ? a.attachments : r ? el : void 0,
          i = l ?? [];
        if (!n && 0 === i.length) return !1;
        if (/^\/sxs$/i.test(n)) return rx.toast.error(tZ), !1;
        nG.current = !0, nW(!0);
        let o = new AbortController;
        nY.current = o;
        let s = {
          attachments: i,
          removedAttachments: new Set,
          cancelled: !1,
          queued: !1
        };
        n$.current.set(o, s), nq.current = s.removedAttachments, nX(n$.current.size);
        let c = ++n0.current;
        try {
          tV(e => {
            e && (e.addAnnotationInt("attached_files", i.length), e.addAnnotationStringArray("attached_files_categories", i.map(e => e.category)), e.addAnnotationInt("prompt_length", n.length))
          });
          let e = C.getSnapshot().composer,
            r = {
              ...e,
              inputValue: n
            },
            d = r.widgetOrigin;
          tg("");
          let h = await M(n, l, {
            ...a?.options,
            threadIsDictationUsed: !0 === e.dictationUsed || tp.trim().length > 0,
            consumeComposerInput: !0,
            waitForReadiness: !0,
            readinessSignal: o.signal,
            onQueued: () => {
              s.queued = !0, nY.current === o && (nY.current = null, nG.current = !1, nW(!1)), n1.current === U && z()
            }
          });
          if (!nZ.current || C.getActiveHatchStore() !== ee) return h.ok;
          if (!h.ok) {
            let e = st(r, s.removedAttachments);
            return (!s.queued || s.cancelled) && (null == t ? C.restoreComposerSnapshotIfEmpty(e) : C.restoreComposerSnapshotForRouteIfEmpty(ee, t, e)), s.cancelled || n0.current !== c || tY(h.reason), !1
          }
          if (s.cancelled && (O(), tq("user_cancelled_stream"), B()), null != d && K(d.hostMessageId, d.widgetId, (0, iD.optionWidgetSelectionStatePatch)(n)).catch(() => {}), !s.queued)
            if (null == t) C.clearComposerInput();
            else {
              let n = st(e, s.removedAttachments);
              C.clearComposerDraftForRoute(ee, t, n)
            } return n1.current === U && z(), u?.(), !0
        } finally {
          n$.current.delete(o), nX(n$.current.size), nY.current === o && (nY.current = null, nG.current = !1, nW(!1))
        }
      }, [J, ee, ea, tZ, tp, el, es, na, tu, n_, nS, nI, nA, nE, nP, M, K, U, z, O, u, tV, tY, tq, B]),
      n3 = (0, r.useCallback)(() => {
        let e = n$.current.size > 0;
        for (let [e, t] of n$.current)
          for (let n of (t.cancelled = !0, e.abort(), t.attachments)) null != n.discardUpload ? n.discardUpload().catch(e => {
            (0, ij.logHatchAttachmentUploadCleanupError)(e, {
              attachmentCategory: n.category,
              attachmentSizeBytes: n.rawFile?.size ?? 0
            })
          }) : n.uploadAbortController?.abort();
        tG("user_cancelled"), (!e || t6) && (O(), tq("user_cancelled_stream"), B())
      }, [t6, O, tG, tq, B]),
      n8 = tp ? ea + (ea.length > 0 && !ea.endsWith(" ") ? " " : "") + tp : ea,
      n4 = ts ?? n8,
      n5 = 0 === n4.length;
    (0, r.useEffect)(() => {
      let e = tK.current;
      if (tK.current = i, !ty || i || ti) return;
      let n = document.activeElement,
        a = e && null != n && n !== document.body && n !== document.documentElement && n !== tv.current,
        r = e && tz.current && !a;
      e && (tz.current = !1);
      let l = (0, iI.consumePendingComposerFocus)();
      if (a && !l || !t && !l && !r) return;
      let o = tv.current;
      if (!o) return;
      let s = r ? o.selectionStart : o.value.length,
        c = r ? o.selectionEnd : o.value.length;
      o.focus(), o.setSelectionRange(s, c)
    }, [t, i, ty, ti]), (0, r.useEffect)(() => {
      let e = () => {
        if (ti) return;
        let e = tv.current;
        null == e || e.disabled || (e.focus(), e.setSelectionRange(0, e.value.length))
      };
      return window.addEventListener("hatch-focus-composer", e), () => window.removeEventListener("hatch-focus-composer", e)
    }, [ti]), (0, r.useEffect)(() => {
      if (tu || ep || !nC) return;
      let e = () => {
        nI ? nA ? nP() : nM || nj() : nb && nD()
      };
      return window.addEventListener("hatch-toggle-dictation", e), () => window.removeEventListener("hatch-toggle-dictation", e)
    }, [nI, nA, nM, nj, nP, nb, tu, ep, nC, nD]), (0, r.useEffect)(() => {
      (tu || ep) && n_ && (nS(), tg(""))
    }, [tu, n_, ep, nS]), (0, r.useEffect)(() => {
      null == U || i || tv.current?.focus()
    }, [i, U]);
    let n6 = !!(ea.trim() || tp.trim() || el.length > 0),
      n9 = n6 && !na && !nV && !tu,
      n7 = (0, r.useCallback)(() => {
        nl({
          eventName: t9.HatchClickEvent.CHAT_SEND_MESSAGE,
          actionTarget: "composer_enter_key",
          actionType: "press_enter",
          metadata: {
            surface: "chat",
            subsurface: "composer",
            ...nr,
            is_reply: null != U,
            ...(0, il.hatchQuoteEntryPointMetadata)(U)
          }
        })
      }, [nl, U, nr]),
      ae = (0, r.useCallback)(e => {
        if (t6 && !tu && "Escape" === e.key && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
          e.preventDefault(), n3();
          return
        }
        if (tu) {
          "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), eI && n6 && !e.repeat && t3());
          return
        }
        if (null != er && "Escape" === e.key && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
          e.preventDefault(), C.clearComposerWidgetCustomInput();
          return
        }
        if (e.ctrlKey && !e.metaKey && !e.altKey && "u" === e.key.toLowerCase()) {
          e.preventDefault();
          let t = e.currentTarget,
            n = t.selectionStart ?? 0,
            a = t.value.slice(n);
          C.editComposerInputValue(a), tg(""), requestAnimationFrame(() => {
            tv.current?.setSelectionRange(0, 0)
          });
          return
        }
        if (t7.isActive) {
          if ("ArrowUp" === e.key) {
            e.preventDefault(), t7.moveSelection(-1);
            return
          }
          if ("ArrowDown" === e.key) {
            e.preventDefault(), t7.moveSelection(1);
            return
          }
          if ("Tab" === e.key) {
            e.preventDefault(), t7.selectItem(t7.selectedIndex);
            return
          }
          if ("Escape" === e.key) {
            e.preventDefault(), t7.dismiss(), C.setComposerInputValue("");
            return
          }
          if ("Enter" === e.key && !e.shiftKey && !e.repeat && !e.nativeEvent.isComposing) {
            e.preventDefault();
            let t = t7.filteredCommands[t7.selectedIndex];
            if (t) return void(t.args ? t7.selectItem(t7.selectedIndex) : t7.tryExecute(t.name) && C.setComposerInputValue(""))
          }
        }
        if ("Escape" === e.key && null != U) {
          e.preventDefault(), z();
          return
        }
        if ("Enter" === e.key && !e.shiftKey && !e.repeat && !e.nativeEvent.isComposing) {
          if (e.preventDefault(), ea.trim().startsWith("/") && t7.tryExecute(ea)) return void C.setComposerInputValue("");
          n9 && n7(), n2()
        }
      }, [n9, t6, z, n2, n3, eI, n6, ea, tu, n7, t3, er, U, t7]),
      at = (0, r.useCallback)(e => {
        e.target instanceof Element && null != e.target.closest("[data-hatch-background-approval-surface]") || tv.current?.focus()
      }, []),
      an = (0, r.useCallback)(e => {
        e.currentTarget.disabled || (tz.current = !1);
        let t = C.getSnapshot().composer;
        null != t.widgetOrigin && 0 === t.inputValue.trim().length && C.clearComposerWidgetCustomInput()
      }, []),
      aa = (0, r.useCallback)(async e => {
        if (tu || nG.current) return;
        let t = C.getComposerRouteScopeForStore(ee),
          n = () => C.getActiveHatchStore() === ee && null != C.getComposerForRouteScopeForStore(ee, t),
          a = (e, n) => C.updateComposerForRouteScopeForStore(ee, t, e, n),
          r = [],
          l = null;
        for (let t of e) {
          let {
            mimeType: e,
            category: n
          } = function(e) {
            let t, n = (t = ss(e.type)) && "application/octet-stream" !== t ? t : (0, ir.getMimeTypeFromFileName)(e.name) || e.type || "application/octet-stream",
              a = function(e, t) {
                let n = (0, ir.getFileCategory)(e);
                if (n) return n;
                let a = (0, ir.getMimeTypeFromFileName)(t);
                if (a) {
                  let e = (0, ir.getFileCategory)(a);
                  if (e) return e
                }
                return "document"
              }(n, e.name);
            return {
              mimeType: n,
              category: a
            }
          }(t);
          if ("image" !== n && function(e, t) {
              let n = ib[e];
              return null != n && t > n
            }(n, t.size)) {
            o6.retainForBugReport("warn", "Attachment exceeded its category size ceiling"), l ??= n;
            continue
          }
          let a = `proc-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
          r.push({
            file: t,
            id: a,
            mimeType: e,
            category: n
          })
        }
        if (null != l && en({
            category: l,
            message: "",
            reason: "size",
            translationInput: {
              kind: "size",
              category: l
            }
          }), 0 === r.length || !n()) return;
        let i = C.getComposerForRouteScopeForStore(ee, t);
        if (null == i) return;
        let o = r.filter(({
            category: e
          }) => "image" === e),
          s = Math.max(0, 8388608 - i.pendingAttachments.reduce((e, t) => e + function(e) {
            if (0 === e.length) return 0;
            let t = e.endsWith("==") ? 2 : +!!e.endsWith("=");
            return Math.max(0, Math.floor(3 * e.length / 4) - t)
          }(t.dataBase64), 0) - i.processingFiles.reduce((e, t) => e + t.reservedInlineBytes, 0) - r.filter(({
            file: e,
            category: t
          }) => "image" !== t && !(0, iD.shouldUploadAttachment)(t, e.size, ed)).reduce((e, {
            file: t
          }) => e + t.size, 0)),
          c = function(e, t) {
            let n = e.map(() => 0),
              a = e.map((e, t) => ({
                index: t,
                size: Math.max(0, Math.floor(e))
              })).sort((e, t) => e.size - t.size),
              r = Math.max(0, Math.floor(t));
            for (let e = 0; e < a.length; e += 1) {
              let t = Math.floor(r / (a.length - e)),
                l = a[e];
              if (l.size <= t) {
                n[l.index] = l.size, r -= l.size;
                continue
              }
              for (let r = e; r < a.length; r += 1) n[a[r].index] = t;
              break
            }
            return n
          }(o.map(({
            file: e
          }) => e.size), s),
          u = new Map;
        o.forEach(({
          id: e
        }, t) => {
          u.set(e, c[t] ?? 0)
        });
        let d = r.map(e => ({
          ...e,
          processingFile: {
            id: e.id,
            filename: e.file.name,
            category: e.category,
            previewUrl: "image" === e.category ? URL.createObjectURL(e.file) : null,
            reservedInlineBytes: "image" === e.category ? u.get(e.id) ?? 0 : (0, iD.shouldUploadAttachment)(e.category, e.file.size, ed) ? 0 : e.file.size
          }
        }));
        a(e => ({
          ...e,
          processingFiles: [...e.processingFiles, ...d.map(({
            processingFile: e
          }) => e)]
        }), "composer/addProcessingFilesForRoute");
        let h = !1,
          f = 0,
          m = null,
          p = !0;
        for (let {
            file: e,
            id: r,
            mimeType: l,
            category: i,
            processingFile: s
          }
          of d) {
          if (!n()) break;
          let c = () => n() && C.getComposerForRouteScopeForStore(ee, t)?.processingFiles.some(e => e.id === r) === !0;
          try {
            let t = await sh(e, l, i, u.get(r) ?? null, ed, r, s.previewUrl);
            if (!n() || !c() || ("image" === t.category && "" !== t.previewUrl && t.previewUrl !== s.previewUrl && await sf(t.previewUrl), !c())) {
              t.previewUrl.startsWith("blob:") && URL.revokeObjectURL(t.previewUrl);
              continue
            }
            if (t.rawFile && (0, iD.shouldUploadAttachment)(t.category, t.rawFile.size, ed)) {
              let e = (0, iD.makeUploadPath)(t.filename),
                n = new AbortController,
                a = null;
              t.uploadPath = e, t.uploadAbortController = n, t.uploadPromise = tf.current.uploadFile(`/${e}`, t.rawFile, {
                signal: n.signal,
                stageBeforePublish: !0,
                registerTargetScopedCleanup: e => {
                  a = e
                }
              });
              let r = !1,
                l = e => {
                  (0, ij.logHatchAttachmentUploadCleanupError)(e, {
                    attachmentCategory: t.category,
                    attachmentSizeBytes: t.rawFile?.size ?? 0
                  })
                };
              t.discardUpload = async () => {
                if (!r) {
                  r = !0, n.abort(), await t.uploadPromise?.catch(() => void 0);
                  try {
                    let e = await a?.();
                    null == e || e.ok || l(e.error)
                  } catch (e) {
                    l(e)
                  }
                }
              };
              let i = e => {
                n.signal.aborted || (0, ij.logHatchGatewayError)(e, {
                  surface: ec.HATCH_SENTRY_SURFACES.CHAT,
                  errorMessage: "Eager attachment upload failed",
                  context: {
                    attachmentCategory: t.category,
                    attachmentSizeBytes: t.rawFile?.size ?? 0
                  }
                })
              };
              t.uploadPromise.then(e => {
                e.ok || i(e.error)
              }, i)
            }
            if (!c()) {
              t.discardUpload?.().catch(e => {
                (0, ij.logHatchAttachmentUploadCleanupError)(e, {
                  attachmentCategory: t.category,
                  attachmentSizeBytes: t.rawFile?.size ?? 0
                })
              }), t.previewUrl.startsWith("blob:") && URL.revokeObjectURL(t.previewUrl);
              continue
            }
            a(e => e.processingFiles.some(e => e.id === r) ? {
              ...e,
              pendingAttachments: [...e.pendingAttachments, t],
              processingFiles: e.processingFiles.filter(e => e.id !== r),
              pendingSend: null
            } : e, "composer/completeProcessingFileForRoute");
            continue
          } catch (r) {
            if (!n()) continue;
            let a = null == t || C.isComposerRouteScopeActiveForStore(ee, t);
            r instanceof oX && function(e) {
              switch (e.reason) {
                case "invalid_budget":
                case "output_too_large":
                case "unsupported_format":
                  return !0;
                case "decode_failed":
                case "encode_failed":
                  return !1
              }
            }(r) ? (o6.retainForBugReport("warn", "Image attachment exceeded the inline payload budget"), !h && a && (h = !0, en({
              category: "image",
              message: 1 === o.length ? tJ : t0,
              reason: "image_budget"
            }))) : (o6.error({
              error: r instanceof Error ? r : Error(String(r)),
              attachmentCategory: i,
              attachmentSizeBytes: e.size,
              ...r instanceof oX ? {
                normalizationFailure: r.reason
              } : {},
              tags: (0, ec.hatchSentryTags)(ec.HATCH_SENTRY_SURFACES.CHAT, {
                failure_reason: r instanceof oX ? "image_normalization_failed" : "attachment_processing_failed"
              })
            }, "Failed to process attachment"), a && (f += 1, m ??= e.name, "image" !== i && (p = !1)))
          }
          n() && a(e => ({
            ...e,
            processingFiles: e.processingFiles.filter(e => e.id !== r)
          }), "composer/removeProcessingFileForRoute")
        }
        let g = null == t || C.isComposerRouteScopeActiveForStore(ee, t);
        f > 0 && null != m && g && !h && en({
          category: p ? "image" : null,
          message: "",
          translationInput: {
            kind: "processing",
            allFailuresAreImages: p,
            failureCount: f,
            firstFailedFilename: m
          },
          reason: "processing"
        })
      }, [ee, tu, t0, en, tJ, ed]),
      ar = (0, r.useCallback)(async e => {
        let t = Array.from(e.target.files ?? []);
        0 !== t.length && (e.target.value = "", tv.current?.focus(), await aa(t))
      }, [aa]),
      al = (0, r.useCallback)(async e => {
        var t;
        let n, a, r;
        c?.();
        let l = (a = (n = Array.from((t = e.clipboardData).items).filter(e => "file" === e.kind).map(e => e.getAsFile()).filter(e => null != e)).length > 0 ? "items" : "files", r = n.length > 0 ? n : Array.from(t.files), (0, iL.rememberClipboardAttachmentInputDiagnostics)(r, t, a), r);
        0 !== l.length && (e.preventDefault(), await aa(l))
      }, [c, aa]),
      ai = (0, r.useCallback)(e => {
        nG.current && nq.current.add(e), C.setPendingAttachments(t => t.filter(t => t !== e))
      }, []),
      ao = (0, r.useCallback)(e => {
        C.setProcessingFiles(t => t.filter(t => t.id !== e))
      }, []),
      as = el.length + eu.length,
      ac = (0, r.useRef)(as),
      au = 0 === ac.current && as > 0;
    (0, r.useEffect)(() => {
      ac.current = as
    }, [as]);
    let ad = as > 0,
      ah = [...el.map((e, t) => e.composerId ?? `${e.filename}-${t}`), ...eu.map(e => e.id)].join("|"),
      af = (0, r.useCallback)(() => {
        if (nE) {
          if (nL.current) return;
          nL.current = !0, nO(!0), nH();
          return
        }
        n2()
      }, [nE, nH, n2]),
      am = (0, r.useCallback)(() => {
        nL.current = !1, nO(!1), nU(!1), ng.current = !1, nP()
      }, [nP]),
      ap = (0, r.useRef)(J),
      ag = (0, r.useRef)(nv);
    (0, r.useLayoutEffect)(() => {
      (ap.current !== J || ag.current !== nv || !nC) && (ap.current = J, ag.current = nv, ng.current = !1, tg(""), n_ && nS(), (nA || nL.current) && am())
    }, [J, nv, nC, am, n_, nA, nS]);
    let av = (0, r.useCallback)(() => {
      am(), nd()
    }, [am, nd]);
    (0, r.useEffect)(() => {
      if (nL.current && !nE && !na) {
        if (!(el.length > 0 || ea.trim().length > 0 || tp.trim().length > 0)) {
          nL.current = !1, nO(!1);
          return
        }
        nL.current = !1, (async () => {
          await n2() ? nU(!0) : nO(!1)
        })()
      }
    }, [nE, na, el, ea, tp, n2]), (0, r.useEffect)(() => {
      if (!nF) return;
      if (t6) {
        nU(!1), nO(!1);
        return
      }
      let e = setTimeout(() => {
        nU(!1), nO(!1)
      }, 1500);
      return () => clearTimeout(e)
    }, [nF, t6]), (0, r.useEffect)(() => {
      !tu && !ep || (nA || nL.current) && am()
    }, [tu, ep, nA, am]);
    let ay = (0, r.useRef)(!1);
    (0, r.useEffect)(() => {
      let e = ay.current;
      if (ay.current = nz, !e && nz && nh.current?.focus(), nz && nE) {
        let e = document.activeElement;
        (null == e || e === document.body || e === document.documentElement || e === nh.current) && nf.current?.focus()
      } else e && !nz && tv.current?.focus()
    }, [nz, nE]);
    let a_ = n6 || na || nz,
      ab = ty || nz,
      [aS, ax] = (0, r.useState)(!1),
      ak = !ti && aS;
    (0, r.useEffect)(() => {
      let e = 0,
        t = t => {
          t.preventDefault(), !tu && !nV && t.dataTransfer?.types.includes("Files") && (c?.(), 1 == ++e && ax(!0))
        },
        n = e => {
          e.preventDefault()
        },
        a = t => {
          t.preventDefault(), --e <= 0 && (e = 0, ax(!1))
        },
        r = t => {
          if (e = 0, ax(!1), t.defaultPrevented || (t.preventDefault(), tu || nV)) return;
          let n = Array.from(t.dataTransfer?.files ?? []);
          0 !== n.length && aa(n)
        };
      return window.addEventListener("dragenter", t), window.addEventListener("dragover", n), window.addEventListener("dragleave", a), window.addEventListener("drop", r), () => {
        window.removeEventListener("dragenter", t), window.removeEventListener("dragover", n), window.removeEventListener("dragleave", a), window.removeEventListener("drop", r)
      }
    }, [tu, nV, c, aa]), (0, r.useEffect)(() => {
      if (!t6 && !nE || tu) return;
      let e = e => {
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
        if ("Escape" === e.key && t6) {
          e.preventDefault(), n3();
          return
        }
        if ("Enter" !== e.key || e.repeat || e.isComposing || !nE || nL.current) return;
        let t = document.activeElement,
          n = nf.current;
        (null == t || t === document.body || t === document.documentElement || t === n) && (e.preventDefault(), n7(), af())
      };
      return window.addEventListener("keydown", e), () => {
        window.removeEventListener("keydown", e)
      }
    }, [t6, n3, af, tu, n7, nE]);
    let aE = (0, r.useCallback)(e => {
        let t = e.target.value;
        C.editComposerInputValue(t), tg("")
      }, [tg]),
      aA = (0, r.useCallback)(e => {
        C.editComposerInputValue(e.currentTarget.value)
      }, []);
    return (0, n.jsxs)("div", {
      ref: tS,
      className: "relative",
      "data-hatch-composer-root": !0,
      "data-hatch-composer-chrome-deferred": ti ? "true" : void 0,
      "aria-busy": ti || void 0,
      onFocusCapture: ti ? void 0 : tH,
      onBlurCapture: ti ? void 0 : tP,
      onPointerDownCapture: ti ? void 0 : c,
      children: [nB && (0, n.jsx)(s.EctoErrorBoundary, {
        surface: ec.HATCH_SENTRY_SURFACES.CHAT_COMPOSER,
        children: (0, n.jsx)(r.Suspense, {
          fallback: null,
          children: (0, n.jsx)(o3, {
            commands: t7.filteredCommands,
            selectedIndex: t7.selectedIndex,
            isVisible: !tu && t7.isActive,
            onSelect: e => t7.selectItem(e)
          })
        })
      }), !ti && (0, n.jsx)(iH, {
        attachedToComposer: nt,
        reserveVoiceCallControlSpace: !1
      }), (0, n.jsx)(tW.AnimatePresence, {
        initial: !1,
        mode: "wait",
        children: "attachment" === ne.kind ? (0, n.jsx)(ix, {
          alert: ne.alert,
          threadMetadata: nr
        }, "attachment") : "safety" === ne.kind ? (0, n.jsx)(i_, {
          onRetry: $
        }, "safety") : null
      }), (0, n.jsx)("div", {
        role: "status",
        "aria-live": "polite",
        className: "sr-only",
        children: t1 ?? t8 ?? t2
      }), to && (0, n.jsx)("div", {
        className: "mb-2",
        "data-hatch-composer-approval-stack": !0,
        ref: tx,
        children: (0, n.jsx)(s.EctoErrorBoundary, {
          surface: "hatch.chat.message.approval",
          resetKeys: [q, G, ez, e4.map(e => e[0]?.approvalId ?? "").join("|")],
          fallback: ({
            reset: e
          }) => (0, n.jsx)(i9.HatchInlineApprovalCardError, {
            autoFocus: tF,
            isComposerRecovery: !0,
            reason: "render_error",
            onRecovered: tN,
            onRecoverySurfaceRemoved: tj,
            onRetry: async () => {
              await $(), e()
            }
          }),
          children: (0, n.jsx)(r.Suspense, {
            fallback: (0, n.jsx)(i9.HatchInlineApprovalCardError, {
              autoFocus: tF,
              isChecking: !0,
              isComposerRecovery: !0,
              reason: "suspense",
              showReload: !1,
              onRecoverySurfaceRemoved: tj
            }),
            children: 0 === e4.length ? (0, n.jsx)(i9.HatchInlineApprovalCardError, {
              autoFocus: tF,
              isComposerRecovery: !0,
              isChecking: eF.isFetching || !Y && null == W,
              reason: "missing_rows",
              onRecovered: tN,
              onRecoverySurfaceRemoved: tj,
              onRetry: $
            }) : e4.length > 1 ? (0, n.jsx)(o4, {
              batches: e4,
              autoFocusOnMount: null != tw,
              autoFocusTarget: tw?.target ?? "primary_action",
              autoFocusDecisionGuard: tD,
              autoFocusRequestId: tw?.id,
              getHeldDecisionKeys: tE,
              onAutoFocusHandled: tL,
              onFocusOwnershipChange: tn
            }) : e4.map(e => {
              let t = e[0],
                a = t?.isExclusive ? t.approvalId : "shared-inline-approvals";
              return (0, n.jsx)(i6.HatchInlineApprovalCardLazy, {
                approvals: e,
                enableShortcuts: !0,
                autoFocusOnMount: tt && tU || null != tw,
                autoFocusTarget: tw?.target ?? "primary_action",
                autoFocusDecisionGuard: tD,
                autoFocusRequestId: tw?.id,
                getHeldDecisionKeys: tE,
                preserveExternalFocus: tt,
                onAutoFocusHandled: tL
              }, a)
            })
          })
        })
      }), !ti && e1.length > 0 && (0, n.jsx)(s.EctoErrorBoundary, {
        surface: "hatch.chat.message.approval",
        children: (0, n.jsx)(r.Suspense, {
          fallback: null,
          children: (0, n.jsx)(o5, {
            approvals: e1,
            reserveVoiceCallControlSpace: !1
          })
        })
      }), (0, n.jsx)("div", {
        className: "flex w-full items-center gap-2",
        "data-hatch-composer-input-row": !0,
        children: (0, n.jsx)("div", {
          className: "min-w-0 flex-1",
          children: (0, n.jsxs)("div", {
            "data-hatch-composer-chrome": !0,
            "data-hatch-composer-variant": "default",
            role: "button",
            tabIndex: -1,
            onClick: ti ? void 0 : at,
            className: (0, tk.cn)("backdrop-blur-elevation-01 bg-fill-blur-thick shadow-blur-elevation-01 rounded-32 relative flex w-full flex-col border border-transparent", ti ? "cursor-default" : "cursor-text", e1.length > 0 && "z-10"),
            children: [(0, n.jsxs)("div", {
              className: "flex shrink-0 flex-col px-3 py-3",
              children: [(0, n.jsx)(tW.AnimatePresence, {
                initial: !1,
                children: !ti && null != U && (0, n.jsx)(sn, {
                  children: (0, n.jsx)(s.EctoErrorBoundary, {
                    surface: ec.HATCH_SENTRY_SURFACES.CHAT_COMPOSER,
                    children: (0, n.jsx)(r.Suspense, {
                      fallback: null,
                      children: (0, n.jsx)(o2, {
                        text: U.text,
                        media: "feed_unit" === U.type ? void 0 : U.media,
                        messageId: "presentation" === U.type || "feed_unit" === U.type ? void 0 : U.messageId,
                        replyAuthorRole: "presentation" === U.type || "feed_unit" === U.type ? "assistant" : void 0,
                        onDismiss: z
                      })
                    })
                  })
                }, "quote-preview")
              }), (0, n.jsx)(tW.AnimatePresence, {
                initial: !1,
                children: !ti && ad && !nM && (0, n.jsx)(sn, {
                  contentOrigin: "center",
                  animateContent: !1,
                  children: (0, n.jsx)("div", {
                    className: "flex flex-wrap gap-2 pb-3",
                    children: (0, n.jsx)(tW.AnimatePresence, {
                      propagate: !0,
                      children: [...el.map((e, t) => (0, n.jsx)(sa, {
                        enterDelay: .08 * !!au,
                        layoutDependency: ah,
                        children: (0, n.jsx)(iJ, {
                          state: "ready",
                          attachment: e,
                          isUploading: nV,
                          onRemove: () => ai(e)
                        })
                      }, e.composerId ?? `${e.filename}-${t}`)), ...eu.map(e => (0, n.jsx)(sa, {
                        enterDelay: .08 * !!au,
                        layoutDependency: ah,
                        children: (0, n.jsx)(iJ, {
                          state: "processing",
                          file: e,
                          onRemove: () => ao(e.id)
                        })
                      }, e.id))]
                    })
                  })
                }, "attachment-previews")
              }), ak && (0, n.jsxs)("div", {
                role: "status",
                className: "text-text-secondary pointer-events-none relative flex min-h-8 items-center justify-center gap-1.5",
                children: [(0, n.jsx)(nJ.HatchIcon, {
                  icon: or.default,
                  size: 18,
                  iconSize: 18,
                  "aria-hidden": "true"
                }), (0, n.jsx)("span", {
                  className: "text-body-medium",
                  children: tm.fbt._("Drop files to attach", null, {
                    hk: "2Kq4K7"
                  })
                })]
              }), (0, n.jsxs)("div", {
                className: (0, tk.cn)("relative flex min-h-8 min-w-0 items-center", ak && "hidden", nz ? "ps-14 pe-14" : "ps-10 pe-20"),
                children: [(0, n.jsx)("input", {
                  ref: tB,
                  type: "file",
                  multiple: !0,
                  className: "sr-only",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  disabled: nV || tu || ti,
                  onClick: e => e.stopPropagation(),
                  onChange: ar
                }), ti || !nE || nM ? !ti && nz ? (0, n.jsxs)("div", {
                  className: "flex min-w-0 flex-1 items-center gap-2",
                  role: "status",
                  "aria-label": nM ? tm.fbs._("Sending dictation", null, {
                    hk: "1Zx7JN"
                  }) : tm.fbs._("Starting dictation", null, {
                    hk: "2eyVQl"
                  }),
                  children: [(0, n.jsx)(l9.HatchSpinner, {
                    size: "small",
                    color: "secondary",
                    isDecorative: !0
                  }), (0, n.jsx)("span", {
                    className: "text-text-secondary text-[13px]",
                    children: nM ? tm.fbt._("Sending…", null, {
                      hk: "1WAreX"
                    }) : tm.fbt._("Starting…", null, {
                      hk: "1jHf2p"
                    })
                  })]
                }) : (0, n.jsxs)(n.Fragment, {
                  children: [ty && n5 && (0, n.jsx)(oH, {
                    label: t4,
                    tone: "tertiary",
                    testId: "hatch-composer-placeholder-overlay"
                  }), (0, n.jsx)(ia, {
                    ref: tb,
                    "data-hatch-composer-prehydration-input": !0,
                    value: n4,
                    onChange: aE,
                    suppressHydrationWarning: !0,
                    onKeyDown: ae,
                    onBlur: an,
                    onCompositionEnd: aA,
                    onPaste: al,
                    rows: 1,
                    "aria-label": t$,
                    placeholder: t4,
                    autoFocus: !ty && t && !i,
                    disabled: i,
                    readOnly: nV || td,
                    fieldSizing: n5 ? "fixed" : "content",
                    sizeWidth: !1,
                    useNativeFieldSizing: !1,
                    className: (0, tk.cn)("text-text-primary block max-h-48 w-full resize-none bg-transparent p-0 text-[15px] leading-[24px] outline-none", ty ? "placeholder:text-transparent" : "placeholder:text-text-tertiary", n5 ? "field-sizing-fixed h-6 min-h-6" : "field-sizing-fixed min-h-6", n5 ? "overflow-hidden" : "overflow-y-auto")
                  }), !ty && !i && (0, n.jsx)("hatch-composer-prehydration-focus", {
                    className: "hidden",
                    "data-autofocus": t ? "true" : "false"
                  })]
                }) : (0, n.jsx)(s.EctoErrorBoundary, {
                  surface: "hatch.chat.dictation",
                  fallback: () => null,
                  children: (0, n.jsx)(r.Suspense, {
                    fallback: (0, n.jsxs)("div", {
                      className: "flex min-w-0 flex-1 items-center gap-2",
                      role: "status",
                      "aria-label": tm.fbs._("Starting dictation", null, {
                        hk: "2AA4Qt"
                      }),
                      children: [(0, n.jsx)("span", {
                        className: "text-text-secondary shrink-0 text-[13px] tabular-nums",
                        "aria-hidden": !0,
                        children: "0:00"
                      }), (0, n.jsx)("div", {
                        className: "h-6 min-w-0 flex-1",
                        "aria-hidden": !0
                      })]
                    }),
                    children: (0, n.jsx)(i6.HatchDictationRecordingStripLazy, {
                      stream: nw
                    })
                  })
                })]
              })]
            }), (0, n.jsx)("div", {
              className: (0, tk.cn)("absolute start-3 bottom-3", ak && "hidden"),
              children: !ti && nA ? (0, n.jsx)(tO.IconButton, {
                ref: ny,
                icon: aC.default,
                size: "32-24",
                variant: "flat",
                label: tm.fbs._("Cancel recording", null, {
                  hk: "3kWUHH"
                }),
                className: "hover:scale-110 hover:filter-[brightness(0.85)] dark:hover:filter-[brightness(1.3)]",
                onPointerDown: e => e.stopPropagation(),
                onMouseDown: e => e.stopPropagation(),
                onClick: e => {
                  e.stopPropagation(), av()
                }
              }) : !ti && nM ? (0, n.jsx)("div", {
                className: "size-8",
                "aria-hidden": !0
              }) : (0, n.jsx)(tO.IconButton, {
                ref: ni,
                icon: on.default,
                size: "32-24",
                variant: "borderless",
                label: tm.fbs._("Attach file", null, {
                  hk: "3YPx19"
                }),
                className: "transition-colors enabled:active:filter-none dark:enabled:active:filter-none",
                disabled: nV || tu || ti,
                onPointerDown: e => e.stopPropagation(),
                onMouseDown: e => e.stopPropagation(),
                onClick: e => {
                  e.stopPropagation(), tB.current?.click(), no()
                }
              })
            }), (0, n.jsxs)("div", {
              className: (0, tk.cn)("absolute end-3 bottom-3 flex items-center gap-1", ak && "hidden"),
              children: [nN && !ti && !nz && !ep && (0, n.jsx)(tO.IconButton, {
                ref: ns,
                icon: oa.default,
                size: "32-24",
                variant: "borderless",
                label: tm.fbs._("Dictate a message", null, {
                  hk: "1f2bIJ"
                }),
                className: "transition-colors enabled:active:filter-none dark:enabled:active:filter-none",
                disabled: nV || tu,
                onPointerEnter: nK,
                onFocus: nK,
                onPointerDown: e => e.stopPropagation(),
                onMouseDown: e => e.stopPropagation(),
                onClick: e => {
                  e.stopPropagation(), nj(), nc()
                }
              }), (0, n.jsx)(ow, {
                hasContent: ab && a_,
                canSend: ab && (n9 || nE) && !nM,
                canStop: ab && (t6 || nQ > 0),
                isComposerLocked: tu,
                isReply: null != U,
                quoteAttribution: (0, il.hatchQuoteEntryPointMetadata)(U),
                isSendInFlight: nV,
                isSending: nV || nM,
                onSend: af,
                sendButtonRef: nz ? nf : void 0,
                onBlockedSend: eI ? t3 : void 0,
                onStop: n3
              })]
            })]
          })
        })
      })]
    })
  }
  var sp = e.i(299185);
  let sg = (0, W.createServerReference)("40cbaa40eb548d4f433c32dac2af1c65c2c648795c", W.callServer, void 0, W.findSourceMapURL, "fetchHatchDeeplinkPromptAction");
  var sv = e.i(302230);
  let sC = (0, et.createClientLogger)("useHatchDeeplinkPrompt");

  function sy() {
    return (o0()?.length ?? 0) > 0
  }
  var s_ = e.i(933718),
    sb = e.i(234565),
    sS = e.i(602412),
    sx = e.i(258271),
    sk = e.i(191488),
    sE = e.i(745427),
    sA = e.i(375334),
    sT = e.i(501756);

  function sw() {
    let e, t, r, l, i = (0, a.c)(4);
    return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = tm.fbs._("Loading flight details", null, {
      hk: "2cuN42"
    }), i[0] = e) : e = i[0], i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)("div", {
      "aria-hidden": "true",
      className: "flex h-[60px] shrink-0 items-center justify-end gap-2 px-3",
      children: (0, n.jsx)("div", {
        className: "bg-fill-secondary size-9 shrink-0 rounded-full motion-safe:animate-pulse"
      })
    }), i[1] = t) : t = i[1], i[2] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsxs)("div", {
      className: "flex flex-col gap-1.5",
      children: [(0, n.jsx)("div", {
        className: "bg-fill-secondary h-5 w-40 rounded motion-safe:animate-pulse"
      }), (0, n.jsx)("div", {
        className: "bg-fill-secondary h-3 w-28 rounded motion-safe:animate-pulse"
      })]
    }), i[2] = r) : r = i[2], i[3] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)(tT.LoadingState, {
      name: "side_panel_flight",
      className: "bg-bg-primary flex min-h-0 flex-1 flex-col overflow-hidden",
      children: (0, n.jsxs)("div", {
        role: "status",
        "aria-busy": "true",
        "aria-label": e,
        className: "flex min-h-0 flex-1 flex-col overflow-hidden",
        children: [t, (0, n.jsxs)("div", {
          "aria-hidden": "true",
          className: "flex flex-col gap-4 p-4",
          children: [r, (0, n.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [(0, n.jsx)("div", {
              className: "bg-fill-secondary h-4 w-24 rounded motion-safe:animate-pulse"
            }), (0, n.jsx)("div", {
              className: "bg-fill-secondary h-4 w-16 rounded motion-safe:animate-pulse"
            })]
          }), Array.from({
            length: 2
          }).map(sR), (0, n.jsx)("div", {
            className: "bg-fill-secondary h-11 w-full rounded-full motion-safe:animate-pulse"
          })]
        })]
      })
    }), i[3] = l) : l = i[3], l
  }

  function sR(e, t) {
    return (0, n.jsxs)("div", {
      className: "border-fill-divider rounded-16 flex flex-col gap-2 border-[0.5px] p-3",
      children: [(0, n.jsx)("div", {
        className: "bg-fill-secondary h-4 w-32 rounded motion-safe:animate-pulse"
      }), (0, n.jsx)("div", {
        className: "bg-fill-secondary h-3 w-full rounded motion-safe:animate-pulse"
      }), (0, n.jsx)("div", {
        className: "bg-fill-secondary h-3 w-4/5 rounded motion-safe:animate-pulse"
      }), (0, n.jsx)("div", {
        className: "bg-fill-secondary h-3 w-2/5 rounded motion-safe:animate-pulse"
      })]
    }, t)
  }

  function sH(e) {
    let t, r, l, i, o, s, c, u = (0, a.c)(9),
      {
        showHero: d
      } = e;
    return u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = tm.fbs._("Loading ad details panel", null, {
      hk: "1ES1l0"
    }), u[0] = t) : t = u[0], u[1] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)("div", {
      "aria-hidden": "true",
      className: "flex shrink-0 items-start justify-end px-4 pt-3 pb-1.5",
      children: (0, n.jsx)(tA.Skeleton, {
        className: "size-9 rounded-full"
      })
    }), u[1] = r) : r = u[1], u[2] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsxs)("div", {
      className: "flex flex-col gap-2",
      children: [(0, n.jsx)(tA.Skeleton, {
        className: "h-6 w-3/4 rounded"
      }), (0, n.jsx)(tA.Skeleton, {
        className: "h-4 w-1/3 rounded"
      })]
    }), u[2] = l) : l = u[2], u[3] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsxs)("div", {
      className: "flex flex-col gap-2",
      children: [(0, n.jsx)(tA.Skeleton, {
        className: "h-4 w-full rounded"
      }), (0, n.jsx)(tA.Skeleton, {
        className: "h-4 w-2/3 rounded"
      })]
    }), u[3] = i) : i = u[3], u[4] !== d ? (o = d ? (0, n.jsx)(tA.Skeleton, {
      className: "rounded-12 aspect-square w-full"
    }) : null, u[4] = d, u[5] = o) : o = u[5], u[6] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, n.jsx)(tA.Skeleton, {
      className: "h-9 w-full rounded-full"
    }), u[6] = s) : s = u[6], u[7] !== o ? (c = (0, n.jsx)(tT.LoadingState, {
      name: "ads_details_panel",
      className: "bg-bg-primary flex min-h-0 flex-1 flex-col overflow-hidden",
      children: (0, n.jsxs)("div", {
        role: "status",
        "aria-busy": "true",
        "aria-label": t,
        className: "flex min-h-0 flex-1 flex-col overflow-hidden motion-reduce:[&_*]:!animate-none",
        children: [r, (0, n.jsxs)("div", {
          "aria-hidden": "true",
          className: "flex flex-col gap-6 px-4 pt-6 pb-4",
          children: [l, i, o, s]
        })]
      })
    }), u[7] = o, u[8] = c) : c = u[8], c
  }

  function sP(e) {
    let t, r = (0, a.c)(3),
      {
        value: l,
        children: i
      } = e;
    return r[0] !== i || r[1] !== l ? (t = (0, n.jsx)(rS.HatchFilePanelStateContext.Provider, {
      value: l,
      children: i
    }), r[0] = i, r[1] = l, r[2] = t) : t = r[2], t
  }
  var sI = e.i(255772),
    sN = e.i(396817),
    sj = e.i(203320),
    sD = e.i(360932);

  function sL() {
    let e, t = (0, a.c)(1);
    return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
      metadata: {
        surface: "file_editor",
        screen: "editor_dialog"
      }
    }, t[0] = e) : e = t[0], (0, t5.useTimeSpent)(sI.HatchTimeSpentEvent.FILE_EDITOR, "file_editor", e), null
  }

  function sM(e) {
    let t, l, i, o, c, u, d, h, f, m, p, g, v, C, y, _, b = (0, a.c)(46);
    b[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
      eventName: t6.HatchImpressionEvent.FILE_EDITOR_DIALOG_IMPRESSION,
      actionTarget: "file_editor_dialog",
      metadata: {
        surface: "file_editor",
        subsurface: "dialog"
      }
    }, b[0] = t) : t = b[0];
    let {
      ref: S
    } = (0, t5.useTrackedImpressionRef)(t);
    b[1] !== e ? (l = {
      origin: "file_editor",
      onDeleted: () => {
        e.closeDialog({
          skipDirtyCheck: !0
        })
      }
    }, b[1] = e, b[2] = l) : l = b[2];
    let {
      requestDelete: x
    } = (0, rz.useHatchDeleteConfirmation)(l);
    b[3] !== e.filePath || b[4] !== x ? (i = () => {
      null != e.filePath && x(e.filePath)
    }, b[3] = e.filePath, b[4] = x, b[5] = i) : i = b[5];
    let k = i,
      E = (0, r.useRef)(null),
      [A, T] = (0, r.useState)(!1);
    if (b[6] !== e.isOpen ? (o = () => {
        if (!e.isOpen) {
          E.current = null, T(!1);
          return
        }
        let t = document.querySelector("[data-hatch-route-surface-card]");
        E.current = t, T(null != t);
        let n = t?.querySelector("[data-hatch-route-surface-content]");
        if (null != n) return n.inert = !0, () => {
          n.inert = !1
        }
      }, c = [e.isOpen], b[6] = e.isOpen, b[7] = o, b[8] = c) : (o = b[7], c = b[8]), (0, r.useEffect)(o, c), !e.isOpen || null == e.fileName || !A) return null;
    b[9] !== e ? (u = t => {
      t || e.closeDialog()
    }, b[9] = e, b[10] = u) : u = b[10], b[11] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, n.jsx)(sL, {}), b[11] = d) : d = b[11], b[12] !== e.fileName ? (h = (0, n.jsx)(sN.Title, {
      className: "sr-only",
      children: e.fileName
    }), b[12] = e.fileName, b[13] = h) : h = b[13], b[14] !== e.filePath ? (f = [e.filePath], b[14] = e.filePath, b[15] = f) : f = b[15], b[16] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, n.jsx)(tP.HatchFileEditorSkeleton, {}), b[16] = m) : m = b[16];
    let w = null != e.filePath ? k : void 0;
    return b[17] !== e ? (p = () => e.closeDialog(), b[17] = e, b[18] = p) : p = b[18], b[19] === Symbol.for("react.memo_cache_sentinel") ? (g = {
      surface: "file_editor",
      subsurface: "dialog",
      screen: "editor_dialog"
    }, b[19] = g) : g = b[19], b[20] !== e.closeDialog || b[21] !== e.editedContent || b[22] !== e.editorMode || b[23] !== e.fileCategory || b[24] !== e.fileName || b[25] !== e.filePath || b[26] !== e.isBinaryFile || b[27] !== e.isSaving || b[28] !== e.markdownFlushRef || b[29] !== e.saveFile || b[30] !== e.setEditedContent || b[31] !== e.setEditorMode || b[32] !== w || b[33] !== p ? (v = (0, n.jsx)(r.Suspense, {
      fallback: m,
      children: (0, n.jsx)(sD.HatchFileEditorLazy, {
        filePath: e.filePath,
        fileName: e.fileName,
        editedContent: e.editedContent,
        isSaving: e.isSaving,
        editorMode: e.editorMode,
        fileCategory: e.fileCategory,
        isBinaryFile: e.isBinaryFile,
        onClose: e.closeDialog,
        showCopy: !0,
        onContentChange: e.setEditedContent,
        onSave: e.saveFile,
        onModeChange: e.setEditorMode,
        onDelete: w,
        onHtmlPreviewNavigateRequest: p,
        htmlPreviewRetryMetadata: g,
        flushRef: e.markdownFlushRef
      })
    }), b[20] = e.closeDialog, b[21] = e.editedContent, b[22] = e.editorMode, b[23] = e.fileCategory, b[24] = e.fileName, b[25] = e.filePath, b[26] = e.isBinaryFile, b[27] = e.isSaving, b[28] = e.markdownFlushRef, b[29] = e.saveFile, b[30] = e.setEditedContent, b[31] = e.setEditorMode, b[32] = w, b[33] = p, b[34] = v) : v = b[34], b[35] !== v || b[36] !== f ? (C = (0, n.jsx)("div", {
      className: "flex min-w-0 flex-1 overflow-hidden",
      children: (0, n.jsx)(s.EctoErrorBoundary, {
        surface: ec.HATCH_SENTRY_SURFACES.LIBRARY_FILES,
        fallback: sO,
        resetKeys: f,
        children: v
      })
    }), b[35] = v, b[36] = f, b[37] = C) : C = b[37], b[38] !== S || b[39] !== C || b[40] !== h ? (y = (0, n.jsxs)(sj.ContentAreaDialogContent, {
      ref: S,
      containerRef: E,
      variant: "fullscreen",
      "data-testid": "hatch-file-editor-dialog",
      children: [h, C]
    }), b[38] = S, b[39] = C, b[40] = h, b[41] = y) : y = b[41], b[42] !== e.isOpen || b[43] !== y || b[44] !== u ? (_ = (0, n.jsxs)(sj.ContentAreaDialog, {
      modal: !1,
      open: e.isOpen,
      onOpenChange: u,
      children: [d, y]
    }), b[42] = e.isOpen, b[43] = y, b[44] = u, b[45] = _) : _ = b[45], _
  }

  function sO(e) {
    let {
      error: t,
      reset: a
    } = e;
    return (0, n.jsx)(eR.HatchContentErrorFallback, {
      error: t,
      onRetry: a
    })
  }
  var sF = e.i(571613),
    sU = e.i(885462),
    sz = e.i(594462),
    sK = e.i(552309),
    sB = e.i(791661),
    sV = e.i(797421);

  function sW(e, t) {
    return e.filter(e => e !== t)
  }
  var sG = e.i(548926),
    sY = e.i(210316),
    sq = e.i(396502);

  function s$(e) {
    let t, l, i, o, c, u, d, h, f, m, p, g, v, C, y = (0, a.c)(33);
    y[0] !== e ? (t = void 0 === e ? {} : e, y[0] = e, y[1] = t) : t = y[1];
    let {
      activeSlugOverride: _,
      className: b,
      onClose: S,
      style: x
    } = t, {
      panelType: k,
      params: E
    } = (0, rC.useActiveRoute)(), {
      connectionAuthority: A
    } = (0, ei.useHatchRpc)(), T = (void 0 === _ ? null : _) ?? ("space" === k ? E.slug ?? null : null), w = "space" === k;
    y[2] === Symbol.for("react.memo_cache_sentinel") ? (l = [], y[2] = l) : l = y[2];
    let [R, H] = (0, r.useState)(l), [P, I] = (0, r.useState)(0), N = (0, r.useRef)(null), j = (0, r.useRef)(null), D = null != T || R.length > 0;
    y[3] !== D ? (i = {
      includeConstructing: !0,
      enabled: D
    }, y[3] = D, y[4] = i) : i = y[4];
    let L = (0, sB.useHatchSpacesQuery)(i).data,
      M = (0, sG.useSpaceLifecycleStatus)(T),
      O = (0, sY.useArtifactLoadAttemptReporter)(),
      F = (0, sV.resolveConnectedSpaceFrameAuthority)(A)?.authorityKey ?? "no-gateway-authority",
      U = null != T && ("ready" === M || "error" === M);
    y[5] !== T || y[6] !== U ? (o = {
      activeSlug: T,
      shouldMountActiveSlug: U
    }, y[5] = T, y[6] = U, y[7] = o) : o = y[7];
    let z = (0, r.useRef)(o),
      K = "unknown" !== M;
    y[8] !== T || y[9] !== U ? (c = () => {
      z.current = {
        activeSlug: T,
        shouldMountActiveSlug: U
      }
    }, u = [T, U], y[8] = T, y[9] = U, y[10] = c, y[11] = u) : (c = y[10], u = y[11]), (0, r.useLayoutEffect)(c, u), y[12] !== T || y[13] !== U ? (h = () => {
      let e = N.current;
      e?.expired === !0 ? H([]) : null != e ? H(null != T && U ? [T] : []) : null != T && H(e => {
        let t, n;
        return U ? (t = e.filter(e => e !== T), (n = [T, ...t]).length > 3 ? n.slice(0, 3) : n) : sW(e, T)
      })
    }, d = [T, U], y[12] = T, y[13] = U, y[14] = d, y[15] = h) : (d = y[14], h = y[15]), (0, r.useEffect)(h, d), y[16] === Symbol.for("react.memo_cache_sentinel") ? (f = () => {
      let e = (0, sz.registerSpacePoolExpiryTriggeredReader)(() => {
          let e = N.current;
          return null != e && (e.expired || Date.now() >= e.deadlineMs)
        }),
        t = () => {
          j.current?.(), j.current = null
        },
        n = e => {
          if (N.current !== e || e.expired) return;
          let a = e.deadlineMs - Date.now();
          if (a > 0) {
            t();
            let r = AbortSignal.timeout(a),
              l = () => {
                r.removeEventListener("abort", l), j.current === i && (j.current = null), n(e)
              },
              i = () => {
                r.removeEventListener("abort", l)
              };
            j.current = i, r.addEventListener("abort", l, {
              once: !0
            });
            return
          }
          e.expired = !0, t(), H([])
        },
        a = e => {
          let a = N.current;
          if (null != a) return a;
          let r = {
            deadlineMs: e + 18e5,
            expired: !1,
            hiddenAtMs: e
          };
          return N.current = r, H(e => {
            var t;
            return null != (t = z.current.activeSlug) && e.includes(t) ? [t] : []
          }), t(), n(r), r
        },
        r = e => {
          let n = a(e);
          t(), n.expired = !0, H([])
        },
        l = (0, sU.subscribeToPageLifecycle)(e => {
          switch (e.type) {
            case "hidden":
              a(e.hiddenAtMs);
              break;
            case "freeze":
              (0, as.flushSync)(() => r(e.hiddenAtMs));
              break;
            case "pagehide":
              e.persisted ? (0, as.flushSync)(() => r(Date.now())) : a(Date.now());
              break;
            case "resume":
              (e => {
                let n = N.current;
                if (null == n || (t(), N.current = null, !(n.expired || e.hiddenDurationMs >= 18e5 || Date.now() >= n.deadlineMs))) return;
                let {
                  activeSlug: a,
                  shouldMountActiveSlug: r
                } = z.current;
                I(sX), H(null != a && r ? [a] : [])
              })(e)
          }
        }),
        i = (0, sU.getPageLifecycleSnapshot)();
      return null != i.hiddenAtMs && (i.isFrozen ? r(i.hiddenAtMs) : a(i.hiddenAtMs)), () => {
        l(), e(), t(), N.current = null
      }
    }, m = [], y[16] = f, y[17] = m) : (f = y[16], m = y[17]), (0, r.useEffect)(f, m), y[18] === Symbol.for("react.memo_cache_sentinel") ? (p = e => {
      H(t => sW(t, e))
    }, y[18] = p) : p = y[18];
    let B = p;
    y[19] !== T || y[20] !== K || y[21] !== U || y[22] !== L ? (g = e => {
      let t = L?.find(t => t.slug === e && !0 !== t.is_saved_foreign_share) ?? null;
      return t?.construction_status !== "constructing" && (e !== T || !!K && U)
    }, y[19] = T, y[20] = K, y[21] = U, y[22] = L, y[23] = g) : g = y[23];
    let V = R.filter(g).sort(sQ),
      W = null != T && V.includes(T);
    if (0 === V.length) return null;
    let G = V.length,
      Y = null != T && "z-10",
      q = !W && "pointer-events-none",
      $ = b ?? "absolute inset-0";
    y[24] !== Y || y[25] !== q || y[26] !== $ ? (v = (0, tk.cn)("relative", Y, q, $), y[24] = Y, y[25] = q, y[26] = $, y[27] = v) : v = y[27];
    let Q = V.map(e => {
      let t = e === T;
      return (0, n.jsx)("div", {
        className: "absolute inset-0 flex flex-col",
        style: {
          visibility: t ? "visible" : "hidden",
          pointerEvents: t ? "auto" : "none",
          zIndex: 10 * !!t
        },
        children: (0, n.jsx)(s.EctoErrorBoundary, {
          surface: ec.HATCH_SENTRY_SURFACES.SPACE,
          resetKeys: [e, F],
          onError: t ? () => O?.reportBlockingFailure(e, "viewer", "viewer_stage", {
            failureStage: "stage_exception"
          }) : void 0,
          fallback: a => {
            let {
              reset: r
            } = a;
            return (0, n.jsx)(sJ, {
              isActive: t,
              reporter: t ? O ?? void 0 : void 0,
              reset: r,
              spaceKey: e
            })
          },
          children: (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(sZ, {
              artifactLoadReporter: t ? O ?? void 0 : void 0,
              spaceSlug: e,
              isActive: t,
              onClose: S,
              onEvict: () => B(e),
              showHeader: w && t
            }), t && (0, n.jsx)(sq.ArtifactLoadRecoveryCommit, {
              spaceKey: e,
              surface: "viewer"
            })]
          })
        })
      }, `${P}:${F}:${e}`)
    });
    return y[28] !== V || y[29] !== x || y[30] !== v || y[31] !== Q ? (C = (0, n.jsx)("div", {
      "data-hatch-space-pool-size": G,
      className: v,
      style: x,
      children: Q
    }), y[28] = V, y[29] = x, y[30] = v, y[31] = Q, y[32] = C) : C = y[32], C
  }

  function sQ(e, t) {
    return e < t ? -1 : +(e > t)
  }

  function sX(e) {
    return e + 1
  }

  function sZ(e) {
    let t, r = (0, a.c)(7),
      {
        artifactLoadReporter: l,
        isActive: i,
        onClose: o,
        onEvict: s,
        showHeader: c,
        spaceSlug: u
      } = e;
    return r[0] !== l || r[1] !== i || r[2] !== o || r[3] !== s || r[4] !== c || r[5] !== u ? (t = (0, n.jsx)(sK.HatchSpaceStage, {
      artifactLoadReporter: l,
      artifactRuntimeSurface: "viewer",
      spaceSlug: u,
      isActive: i,
      onClose: o,
      onEvict: s,
      showHeader: c
    }), r[0] = l, r[1] = i, r[2] = o, r[3] = s, r[4] = c, r[5] = u, r[6] = t) : t = r[6], t
  }

  function sJ(e) {
    let t, r, l, i, o, s = (0, a.c)(16),
      {
        isActive: c,
        reporter: u,
        reset: d,
        spaceKey: h
      } = e;
    (0, e_.useReportInitialLoadRouteContent)(c ? "error" : null, c);
    let f = u?.fail,
      m = u?.restart;
    s[0] !== m || s[1] !== h ? (t = () => m?.(h) ?? null, s[0] = m, s[1] = h, s[2] = t) : t = s[2];
    let p = t;
    s[3] !== f || s[4] !== h ? (r = (e, t) => {
      null != t && f?.(h, {
        failureStage: "stage_exception"
      }, t)
    }, s[3] = f, s[4] = h, s[5] = r) : r = s[5];
    let g = r;
    return s[6] !== u || s[7] !== h ? (l = null != u && (0, n.jsx)(sq.ArtifactLoadBlockingFailureReporter, {
      failureStage: "stage_exception",
      reporter: u,
      source: "viewer_stage",
      spaceKey: h,
      surface: "viewer"
    }), s[6] = u, s[7] = h, s[8] = l) : l = s[8], s[9] !== g || s[10] !== p || s[11] !== d ? (i = (0, n.jsx)(aR.HatchSpacesErrorFallback, {
      surface: "space",
      onRetryError: g,
      onRetryStart: p,
      reset: d
    }), s[9] = g, s[10] = p, s[11] = d, s[12] = i) : i = s[12], s[13] !== l || s[14] !== i ? (o = (0, n.jsxs)(n.Fragment, {
      children: [l, i]
    }), s[13] = l, s[14] = i, s[15] = o) : o = s[15], o
  }
  var s0 = e.i(650166);

  function s1(e) {
    let t, l, i, o, s, c, u, d, h, f, m, p, g, v, C, y, _, b, S, x, k, E, A = (0, a.c)(98),
      {
        mode: T,
        chatCollapsed: w,
        paneSurface: R,
        paneBackgroundClassName: H,
        panelSide: P,
        resizable: I,
        storageKey: N,
        children: j,
        onClose: D,
        resizeHandlers: L,
        controlledPanelWidth: M,
        controlledMinPanelWidth: O,
        controlledChatMinWidth: F,
        controlledDefaultPanelWidth: U,
        onControlledPanelWidthPreview: z,
        onControlledPanelWidthCommit: K
      } = e,
      B = void 0 === P ? "right" : P,
      {
        navigate: V
      } = (0, rb.useShellNavigate)(),
      {
        panelType: W,
        params: G
      } = (0, rC.useActiveRoute)(),
      Y = "hidden" === T,
      q = "space_edit" === W ? "editor" : "viewer";
    A[0] !== W || A[1] !== G ? (t = "space" === W || "space_edit" === W ? G.slug?.trim() ?? "" : "", A[0] = W, A[1] = G, A[2] = t) : t = A[2];
    let $ = t,
      Q = !Y && $.length > 0 ? $ : null,
      X = (0, sG.useSpaceLifecycleStatus)(Q),
      Z = "side-panel" === T,
      J = "overlay" === T,
      ee = "feed" === W,
      et = Z && (I ?? !0) && !w;
    A[3] !== V || A[4] !== D ? (l = () => {
      D ? D() : V("/")
    }, A[3] = V, A[4] = D, A[5] = l) : l = A[5];
    let en = l;
    A[6] !== F ? (i = (e, t) => r7(e?.parentElement ?? null, e, t ? F : void 0), A[6] = F, A[7] = i) : i = A[7];
    let ea = i;
    A[8] !== U || A[9] !== M || A[10] !== K || A[11] !== z ? (o = {
      defaultWidth: U,
      onCommit: K,
      onPreview: z,
      width: M
    }, A[8] = U, A[9] = M, A[10] = K, A[11] = z, A[12] = o) : o = A[12], A[13] === Symbol.for("react.memo_cache_sentinel") ? (s = 800, A[13] = s) : s = A[13];
    let er = O ?? 400;
    A[14] !== w || A[15] !== ea || A[16] !== en || A[17] !== Z || A[18] !== B || A[19] !== L || A[20] !== N || A[21] !== o || A[22] !== er ? (c = {
      chatCollapsed: w,
      controlled: o,
      defaultWidth: s,
      getMaxWidth: ea,
      isOpen: Z,
      maxWidthRatio: .85,
      minWidth: er,
      onCollapse: en,
      panelSide: B,
      resizeHandlers: L,
      storageKey: N
    }, A[14] = w, A[15] = ea, A[16] = en, A[17] = Z, A[18] = B, A[19] = L, A[20] = N, A[21] = o, A[22] = er, A[23] = c) : c = A[23];
    let {
      frameWidth: el,
      contentStyle: ei,
      flexValue: eo,
      frameRef: es,
      isDragging: ec,
      isResizing: eu,
      isCollapsedByDrag: ed,
      handlePointerDown: eh,
      maxWidth: ef,
      nudgeWidth: em,
      resetWidth: ep
    } = le(c);
    A[24] !== en || A[25] !== J ? (u = () => {
      if (!J) return;
      let e = e => {
        "Escape" !== e.key || e.defaultPrevented || (e.preventDefault(), en())
      };
      return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, d = [en, J], A[24] = en, A[25] = J, A[26] = u, A[27] = d) : (u = A[26], d = A[27]), (0, r.useEffect)(u, d);
    let eg = J ? void 0 : Y ? "0 0 0px" : eo ?? void 0,
      ev = "card" === (void 0 === R ? "card" : R) && Z && !ed;
    A[28] !== w || A[29] !== ei || A[30] !== ec || A[31] !== Y || A[32] !== J || A[33] !== ee ? (h = J || Y || w ? void 0 : ee && ec ? {
      minWidth: 0
    } : ei, A[28] = w, A[29] = ei, A[30] = ec, A[31] = Y, A[32] = J, A[33] = ee, A[34] = h) : h = A[34];
    let eC = h,
      ey = ee && ec;
    A[35] !== ed || A[36] !== Y || A[37] !== J || A[38] !== eg ? (f = J ? void 0 : {
      flex: eg,
      opacity: Y || ed ? 0 : 1
    }, A[35] = ed, A[36] = Y, A[37] = J, A[38] = eg, A[39] = f) : f = A[39];
    let e_ = J && "bg-fill-secondary dark:bg-bg-primary absolute inset-0 z-10 overflow-hidden",
      eb = Z && "relative z-10",
      eS = Y && "pointer-events-none relative z-0 overflow-hidden",
      ex = eu && "select-none";
    A[40] !== e_ || A[41] !== eb || A[42] !== eS || A[43] !== ex ? (m = (0, tk.cn)("flex min-w-0 flex-col", e_, eb, eS, ex), A[40] = e_, A[41] = eb, A[42] = eS, A[43] = ex, A[44] = m) : m = A[44], A[45] !== O || A[46] !== en || A[47] !== eh || A[48] !== ec || A[49] !== ef || A[50] !== em || A[51] !== B || A[52] !== el || A[53] !== ep || A[54] !== et ? (p = et && null != ef && (0, n.jsx)(r$, {
      panelSide: B,
      panelWidth: el,
      minWidth: O ?? 400,
      maxWidth: ef,
      onPointerDown: eh,
      isDragging: ec,
      onNudgeWidth: em,
      onResetWidth: ep,
      onCollapse: en,
      collapseSubsurface: "route_panel",
      className: (0, tk.cn)("absolute top-0 bottom-0", "right" === B ? "-start-4" : "-end-4")
    }), A[45] = O, A[46] = en, A[47] = eh, A[48] = ec, A[49] = ef, A[50] = em, A[51] = B, A[52] = el, A[53] = ep, A[54] = et, A[55] = p) : p = A[55];
    let ek = Y ? void 0 : "route-panel",
      eE = Y || ed ? void 0 : "route",
      eA = ev && (void 0 === H ? "bg-fill-dialog" : H),
      eT = J && "h-full";
    A[56] !== eA || A[57] !== eT ? (g = (0, tk.cn)("relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", eA, eT), A[56] = eA, A[57] = eT, A[58] = g) : g = A[58];
    let ew = J && "h-full w-full",
      eR = Y && "h-full",
      eH = ec && "[&_iframe]:!pointer-events-none";
    A[59] !== ew || A[60] !== eR || A[61] !== eH ? (v = (0, tk.cn)("relative flex min-h-0 flex-1 flex-col overflow-hidden", ew, eR, eH), A[59] = ew, A[60] = eR, A[61] = eH, A[62] = v) : v = A[62], A[63] !== B || A[64] !== ey ? (C = ey ? (0, tk.cn)("absolute inset-y-0", "right" === B ? "start-0" : "end-0") : void 0, A[63] = B, A[64] = ey, A[65] = C) : C = A[65];
    let eP = ey ? ei : void 0;
    return A[66] !== en || A[67] !== C || A[68] !== eP ? (y = (0, n.jsx)(s$, {
      className: C,
      onClose: en,
      style: eP
    }), A[66] = en, A[67] = C, A[68] = eP, A[69] = y) : y = A[69], A[70] !== j || A[71] !== en ? (_ = (0, n.jsx)(s0.HatchShellRouteSurfaceCloseContext.Provider, {
      value: en,
      children: j
    }), A[70] = j, A[71] = en, A[72] = _) : _ = A[72], A[73] !== en || A[74] !== J ? (b = J && (0, n.jsx)("div", {
      className: "absolute end-3 top-3 z-30",
      children: (0, n.jsx)(tO.IconButton, {
        icon: sF.default,
        label: tm.fbs._("Close panel", null, {
          hk: "1znTfO"
        }),
        size: "32-24",
        variant: "borderless",
        onClick: en,
        className: "bg-fill-secondary/80 hover:bg-fill-secondary squircle-12"
      })
    }), A[73] = en, A[74] = J, A[75] = b) : b = A[75], A[76] !== Q || A[77] !== X || A[78] !== q || A[79] !== y || A[80] !== _ || A[81] !== b ? (S = (0, n.jsxs)(sY.ArtifactLoadAttemptProvider, {
      activeSpaceKey: Q,
      lifecycleStatus: X,
      surface: q,
      children: [y, _, b]
    }), A[76] = Q, A[77] = X, A[78] = q, A[79] = y, A[80] = _, A[81] = b, A[82] = S) : S = A[82], A[83] !== eC || A[84] !== v || A[85] !== S ? (x = (0, n.jsx)("div", {
      "data-hatch-route-surface-content": !0,
      className: v,
      style: eC,
      children: S
    }), A[83] = eC, A[84] = v, A[85] = S, A[86] = x) : x = A[86], A[87] !== ek || A[88] !== eE || A[89] !== g || A[90] !== x ? (k = (0, n.jsx)("div", {
      "data-hatch-vt-pane": ek,
      "data-hatch-route-surface-card": !0,
      "data-hatch-toast-pane": eE,
      className: g,
      children: x
    }), A[87] = ek, A[88] = eE, A[89] = g, A[90] = x, A[91] = k) : k = A[91], A[92] !== es || A[93] !== f || A[94] !== m || A[95] !== p || A[96] !== k ? (E = (0, n.jsxs)("div", {
      ref: es,
      "data-hatch-pane-frame": "route-panel",
      style: f,
      className: m,
      children: [p, k]
    }), A[92] = es, A[93] = f, A[94] = m, A[95] = p, A[96] = k, A[97] = E) : E = A[97], E
  }
  var s2 = e.i(19152),
    s3 = e.i(960982),
    s8 = e.i(69066);
  let s4 = {
      key: "b",
      modifiers: {
        meta: !0
      }
    },
    s5 = ["status_panel", "side_chats_panel", "side_chats_pinned"];

  function s6(e) {
    let t, r = (0, a.c)(3),
      {
        onOpen: l
      } = e,
      i = (0, tE.useMcBool)("5e1fb489", !1);
    return r[0] !== i || r[1] !== l ? (t = i ? (0, n.jsx)(cl, {
      onOpen: l
    }) : null, r[0] = i, r[1] = l, r[2] = t) : t = r[2], t
  }

  function s9(e) {
    let t, l, i, o, s, c, u, d, h, f, m = (0, a.c)(21);
    m[0] !== e ? ({
      onFocusComposer: t,
      onOpenInternalSettings: l,
      onOpenQuickSearch: i,
      onOpenSettings: o,
      ...s
    } = e, m[0] = e, m[1] = t, m[2] = l, m[3] = i, m[4] = o, m[5] = s) : (t = m[1], l = m[2], i = m[3], o = m[4], s = m[5]);
    let {
      isShellRoute: p,
      panelType: g
    } = (0, rC.useActiveRoute)(), v = p && "chat" === g;
    return m[6] !== t || m[7] !== i || m[8] !== o ? (c = (0, n.jsx)(s7, {
      onFocusComposer: t,
      onOpenQuickSearch: i,
      onOpenSettings: o
    }), m[6] = t, m[7] = i, m[8] = o, m[9] = c) : c = m[9], m[10] !== v || m[11] !== s ? (u = (0, n.jsx)(cn, {
      ...s,
      includeSideChats: v
    }), d = v ? (0, n.jsx)(ca, {
      ...s
    }) : null, m[10] = v, m[11] = s, m[12] = u, m[13] = d) : (u = m[12], d = m[13]), m[14] !== l ? (h = (0, n.jsx)(r.Suspense, {
      fallback: null,
      children: (0, n.jsx)(s6, {
        onOpen: l
      })
    }), m[14] = l, m[15] = h) : h = m[15], m[16] !== c || m[17] !== u || m[18] !== d || m[19] !== h ? (f = (0, n.jsxs)(n.Fragment, {
      children: [c, u, d, h]
    }), m[16] = c, m[17] = u, m[18] = d, m[19] = h, m[20] = f) : f = m[20], f
  }

  function s7(e) {
    let t, n, r, l, i, o, s, c, u, d, h, f, m, p, g, v, C = (0, a.c)(21),
      {
        onFocusComposer: y,
        onOpenQuickSearch: _,
        onOpenSettings: b
      } = e,
      S = "standard" === (0, iP.useServingVmType)();
    return C[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
      key: "Escape",
      modifiers: {
        shift: !0
      }
    }, C[0] = t) : t = C[0], C[1] !== y ? (n = () => {
      y()
    }, C[1] = y, C[2] = n) : n = C[2], C[3] === Symbol.for("react.memo_cache_sentinel") ? (r = {
      label: tm.fbs._("Focus composer", null, {
        hk: "4vv3ms"
      }),
      category: "composer",
      priority: "high"
    }, C[3] = r) : r = C[3], (0, s3.useKeyboardShortcut)("hatch-focus-composer", t, n, r), C[4] === Symbol.for("react.memo_cache_sentinel") ? (l = {
      key: "d",
      modifiers: {
        meta: !0,
        shift: !0
      }
    }, C[4] = l) : l = C[4], C[5] === Symbol.for("react.memo_cache_sentinel") ? (i = tm.fbs._("Toggle dictation", null, {
      hk: "1hZrZo"
    }), C[5] = i) : i = C[5], C[6] !== S ? (o = {
      label: i,
      category: "composer",
      enabled: S,
      showInDialog: S
    }, C[6] = S, C[7] = o) : o = C[7], (0, s3.useKeyboardShortcut)("hatch-toggle-dictation", l, ct, o), C[8] === Symbol.for("react.memo_cache_sentinel") ? (s = {
      key: "j",
      modifiers: {
        meta: !0
      }
    }, C[8] = s) : s = C[8], C[9] !== y ? (c = () => {
      y()
    }, C[9] = y, C[10] = c) : c = C[10], C[11] === Symbol.for("react.memo_cache_sentinel") ? (u = {
      label: tm.fbs._("Chat with {productFullName}", [tm.fbs._param("productFullName", tN.PRODUCT_BRAND.fullName)], {
        hk: "Dy6Hh"
      }),
      category: "general",
      priority: "high"
    }, C[11] = u) : u = C[11], (0, s3.useKeyboardShortcut)("hatch-focus-chat-field", s, c, u), C[12] === Symbol.for("react.memo_cache_sentinel") ? (d = {
      key: "k",
      modifiers: {
        meta: !0
      }
    }, C[12] = d) : d = C[12], C[13] !== _ ? (h = () => {
      _()
    }, C[13] = _, C[14] = h) : h = C[14], C[15] === Symbol.for("react.memo_cache_sentinel") ? (f = {
      label: tm.fbs._("Search {productFullName}", [tm.fbs._param("productFullName", tN.PRODUCT_BRAND.fullName)], {
        hk: "36yEVY"
      }),
      category: "general",
      priority: "high"
    }, C[15] = f) : f = C[15], (0, s3.useKeyboardShortcut)("hatch-search", d, h, f), C[16] === Symbol.for("react.memo_cache_sentinel") ? (m = {
      key: "k",
      modifiers: {
        meta: !0,
        shift: !0
      }
    }, C[16] = m) : m = C[16], C[17] === Symbol.for("react.memo_cache_sentinel") ? (p = {
      label: tm.fbs._("Search chat", null, {
        hk: "u8UgO"
      }),
      category: "general",
      priority: "high"
    }, C[17] = p) : p = C[17], (0, s3.useKeyboardShortcut)("hatch-chat-search", m, ce, p), C[18] !== b ? (g = () => {
      b()
    }, C[18] = b, C[19] = g) : g = C[19], C[20] === Symbol.for("react.memo_cache_sentinel") ? (v = {
      label: tm.fbs._("Settings", null, {
        hk: "44NPXR"
      }),
      category: "general"
    }, C[20] = v) : v = C[20], (0, s3.useKeyboardShortcut)("hatch-settings", rj, g, v), null
  }

  function ce() {
    window.dispatchEvent(new CustomEvent("hatch-toggle-search"))
  }

  function ct() {
    window.dispatchEvent(new CustomEvent("hatch-toggle-dictation"))
  }

  function cn(e) {
    let t, n, r, l, i, o = (0, a.c)(7);
    o[0] !== e ? ({
      includeSideChats: t,
      ...n
    } = e, o[0] = e, o[1] = t, o[2] = n) : (t = o[1], n = o[2]);
    let s = cr(n, t, "user");
    return o[3] === Symbol.for("react.memo_cache_sentinel") ? (r = {
      key: ".",
      modifiers: {
        meta: !0
      }
    }, o[3] = r) : r = o[3], o[4] !== s ? (l = () => (function(e) {
      let t = s5.filter(t => e[t].isOpen);
      if (t.length > 0) {
        let n = [...t].reverse();
        for (let t of n) e[t].close();
        return {
          action: "close",
          rungs: n
        }
      }
      let n = [];
      for (let t of s5) {
        if (!e[t].canOpen) break;
        e[t].open(), n.push(t)
      }
      return {
        action: "open",
        rungs: n
      }
    })(s).rungs.length > 0, o[4] = s, o[5] = l) : l = o[5], o[6] === Symbol.for("react.memo_cache_sentinel") ? (i = {
      label: tm.fbs._("Open or close all panels", null, {
        hk: "4vHNbw"
      }),
      category: "window_management"
    }, o[6] = i) : i = o[6], (0, s3.useKeyboardShortcut)("hatch-toggle-all-side-panels", r, l, i), null
  }

  function ca(e) {
    let t, n, l = (0, a.c)(3),
      i = cr(e, !0, "system"),
      o = (0, r.useRef)("up");
    return l[0] !== i ? (t = () => {
      if ((0, s8.isRichTextEditorElement)(document.activeElement)) return !1;
      let {
        step: e,
        direction: t
      } = function(e, t) {
        let n = function(e) {
            let t = 0;
            for (let n of s5) {
              if (!e[n].isOpen) break;
              t += 1
            }
            return t
          }(e),
          a = s5[n] ?? null;
        if (null != a && e[a].canOpen && null != a && (0 === n || "up" === t)) return e[a].open(), {
          step: {
            action: "open",
            rung: a
          },
          direction: "up"
        };
        let r = function(e) {
          let t = null;
          for (let n of s5) e[n].isOpen && (t = n);
          return t
        }(e);
        return null == r ? {
          step: null,
          direction: t
        } : (e[r].close(), {
          step: {
            action: "close",
            rung: r
          },
          direction: "down"
        })
      }(i, o.current);
      return o.current = t, null != e
    }, l[0] = i, l[1] = t) : t = l[1], l[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
      label: tm.fbs._("Step through side panel states", null, {
        hk: "2uShst"
      }),
      category: "window_management"
    }, l[2] = n) : n = l[2], (0, s3.useKeyboardShortcut)("hatch-step-side-panel-ladder", s4, t, n), null
  }

  function cr(e, t, n) {
    let r, l, i, o, s, c, u = (0, a.c)(24),
      {
        isSideChatsPanelOpen: d,
        canOpenSideChatsPanel: h,
        onOpenSideChatsPanel: f,
        onCloseSideChatsPanel: m,
        isSideChatsPanelPinned: p,
        canPinSideChatsPanel: g,
        onPinSideChatsPanel: v,
        onUnpinSideChatsPanel: C
      } = e,
      {
        dismissPanel: y,
        isOpen: _,
        openPanel: b,
        togglePanel: S
      } = (0, nn.useHatchStatusPanel)(),
      x = (0, t5.useInteractionLogger)(),
      k = "user" === n ? S : b;
    u[0] !== y || u[1] !== _ || u[2] !== k ? (r = {
      isOpen: _,
      canOpen: !0,
      open: k,
      close: y
    }, u[0] = y, u[1] = _, u[2] = k, u[3] = r) : r = u[3];
    let E = t && d,
      A = t && h;
    u[4] !== m || u[5] !== f || u[6] !== E || u[7] !== A ? (l = {
      isOpen: E,
      canOpen: A,
      open: f,
      close: m
    }, u[4] = m, u[5] = f, u[6] = E, u[7] = A, u[8] = l) : l = u[8];
    let T = t && p,
      w = t && g;
    return u[9] !== x || u[10] !== v ? (i = () => {
      x({
        eventName: t9.HatchClickEvent.CHAT_THREADS_PANEL_PIN_CLICK,
        actionTarget: "side_chats_panel_pin",
        actionType: "key_command",
        metadata: {
          surface: "navigation",
          subsurface: "dock"
        }
      }), v()
    }, u[9] = x, u[10] = v, u[11] = i) : i = u[11], u[12] !== x || u[13] !== C ? (o = () => {
      x({
        eventName: t9.HatchClickEvent.CHAT_THREADS_PANEL_UNPIN_CLICK,
        actionTarget: "side_chats_panel_unpin",
        actionType: "key_command",
        metadata: {
          surface: "navigation",
          subsurface: "dock"
        }
      }), C()
    }, u[12] = x, u[13] = C, u[14] = o) : o = u[14], u[15] !== T || u[16] !== w || u[17] !== i || u[18] !== o ? (s = {
      isOpen: T,
      canOpen: w,
      open: i,
      close: o
    }, u[15] = T, u[16] = w, u[17] = i, u[18] = o, u[19] = s) : s = u[19], u[20] !== s || u[21] !== r || u[22] !== l ? (c = {
      status_panel: r,
      side_chats_panel: l,
      side_chats_pinned: s
    }, u[20] = s, u[21] = r, u[22] = l, u[23] = c) : c = u[23], c
  }

  function cl(e) {
    let t, n, r, l = (0, a.c)(4),
      {
        onOpen: i
      } = e;
    return l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
      key: "e",
      modifiers: {
        meta: !0,
        shift: !0
      }
    }, l[0] = t) : t = l[0], l[1] !== i ? (n = () => {
      i()
    }, l[1] = i, l[2] = n) : n = l[2], l[3] === Symbol.for("react.memo_cache_sentinel") ? (r = {
      label: tm.fbs._("Internal settings", null, {
        hk: "2XhLnv"
      }),
      category: "general"
    }, l[3] = r) : r = l[3], (0, s3.useKeyboardShortcut)("hatch-internal-settings", t, n, r), null
  }
  let ci = (0, r.createContext)(null);

  function co(e) {
    let t, l, i, o, s = (0, a.c)(7),
      {
        children: c
      } = e;
    s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], s[0] = t) : t = s[0];
    let [u, d] = (0, r.useState)(t);
    s[1] === Symbol.for("react.memo_cache_sentinel") ? (l = e => (d(t => t.includes(e) ? t : [...t, e]), () => {
      d(t => t.filter(t => t !== e))
    }), s[1] = l) : l = s[1];
    let h = l;
    s[2] !== u ? (i = {
      register: h,
      stack: u
    }, s[2] = u, s[3] = i) : i = s[3];
    let f = i;
    return s[4] !== c || s[5] !== f ? (o = (0, n.jsx)(ci.Provider, {
      value: f,
      children: c
    }), s[4] = c, s[5] = f, s[6] = o) : o = s[6], o
  }
  let cs = {
    type: "spring",
    stiffness: 300,
    damping: 30
  };

  function cc(e) {
    let t, l, i, o = (0, a.c)(15),
      {
        id: s,
        isOpen: c,
        width: u,
        isDragging: d,
        onExitComplete: h,
        children: f
      } = e,
      m = void 0 === u ? 380 : u,
      p = void 0 !== d && d,
      {
        distanceFromTop: g
      } = function(e, t) {
        let n, l, i, o = (0, a.c)(9),
          s = (0, r.useContext)(ci),
          c = s?.register,
          u = (0, r.useRef)(null);
        if (o[0] !== e || o[1] !== t || o[2] !== c ? (n = () => {
            if (null != c) return t ? u.current = c(e) : (u.current?.(), u.current = null), () => {
              u.current?.(), u.current = null
            }
          }, l = [c, e, t], o[0] = e, o[1] = t, o[2] = c, o[3] = n, o[4] = l) : (n = o[3], l = o[4]), (0, r.useEffect)(n, l), null == s) {
          let e, n = t ? 0 : -1;
          return o[5] !== n ? (e = {
            distanceFromTop: n
          }, o[5] = n, o[6] = e) : e = o[6], e
        }
        let {
          stack: d
        } = s, h = d.indexOf(e), f = -1 === h ? -1 : d.length - 1 - h;
        return o[7] !== f ? (i = {
          distanceFromTop: f
        }, o[7] = f, o[8] = i) : i = o[8], i
      }(s, c),
      v = c && g > 0;
    o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [{
      scale: .97,
      x: -12,
      opacity: .9
    }, {
      scale: .94,
      x: -22,
      opacity: .7
    }, {
      scale: .91,
      x: -30,
      opacity: 0
    }], o[0] = t) : t = o[0];
    let C = t,
      y = v ? C[Math.min(g - 1, C.length - 1)] : null,
      _ = y?.scale ?? 1,
      b = y?.x ?? 0,
      S = y?.opacity ?? 1;
    return o[1] !== f || o[2] !== g || o[3] !== s || o[4] !== p || o[5] !== c || o[6] !== v || o[7] !== S || o[8] !== _ || o[9] !== m || o[10] !== b ? (l = c && (0, n.jsx)(tb.motion.div, {
      initial: {
        width: 0,
        opacity: 0
      },
      animate: {
        width: v ? 0 : m,
        scale: _,
        x: b,
        opacity: S
      },
      exit: {
        width: 0,
        opacity: 0
      },
      transition: p ? {
        duration: 0
      } : cs,
      className: `shrink-0 ${v?"overflow-visible":"overflow-hidden"}`,
      ...v ? {
        inert: ""
      } : {},
      style: {
        transformOrigin: "right center",
        pointerEvents: v ? "none" : void 0,
        zIndex: g >= 0 ? 10 - g : void 0
      },
      children: (0, n.jsx)("div", {
        style: {
          width: m,
          minWidth: m
        },
        className: "h-full py-2 pe-2",
        children: f
      })
    }, s), o[1] = f, o[2] = g, o[3] = s, o[4] = p, o[5] = c, o[6] = v, o[7] = S, o[8] = _, o[9] = m, o[10] = b, o[11] = l) : l = o[11], o[12] !== h || o[13] !== l ? (i = (0, n.jsx)(tW.AnimatePresence, {
      onExitComplete: h,
      children: l
    }), o[12] = h, o[13] = l, o[14] = i) : i = o[14], i
  }
  var cu = e.i(51726),
    cd = e.i(323900);
  let ch = "connector_action",
    cf = "connector",
    cm = /^(?=.*[A-Za-z0-9])[A-Za-z0-9_.-]{1,64}$/;
  var cp = e.i(418688),
    cg = e.i(490936),
    cv = e.i(786521);
  let cC = (0, et.createClientLogger)("HatchSurveyHost"),
    cy = (0, r.lazy)(() => e.A(952846).then(e => ({
      default: e.HatchSurveyOverlay
    })));

  function c_() {
    let e, t = (0, a.c)(1);
    return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(r.Suspense, {
      fallback: null,
      children: (0, n.jsx)(cb, {})
    }), t[0] = e) : e = t[0], e
  }

  function cb() {
    let e, t, r = (0, a.c)(9),
      l = (0, m.useHatchSurveysEnabled)(),
      {
        match: i
      } = (0, rC.useActiveRoute)(),
      o = (0, e_.useShellPrimaryContentSnapshot)(),
      {
        gatewayUrl: s,
        vmName: c
      } = (0, ei.useHatchRpc)(),
      u = (0, V.useHatchPostContentSafetyReady)();
    r[0] !== s || r[1] !== i || r[2] !== u || r[3] !== o || r[4] !== c ? (e = u && (0, e_.isShellPostContentEligibleForRoute)(o, i, s, c), r[0] = s, r[1] = i, r[2] = u, r[3] = o, r[4] = c, r[5] = e) : e = r[5];
    let d = (0, tX.useLatchedTrue)(e);
    return r[6] !== l || r[7] !== d ? (t = l && d ? (0, n.jsx)(cS, {}) : null, r[6] = l, r[7] = d, r[8] = t) : t = r[8], t
  }

  function cS() {
    let [t, a] = (0, r.useState)(null), [l, i] = (0, r.useState)(!1), o = (0, r.useRef)(!1), c = (0, t5.useInteractionLogger)();
    return ((0, r.useEffect)(() => {
      if (o.current) return;
      o.current = !0;
      let t = e.A(952846);

      function n(e) {
        c({
          eventName: t9.HatchClickEvent.SURVEY_ERROR,
          actionTarget: "survey_error_start",
          actionType: "click",
          metadata: {
            surface: "survey",
            endpoint: "start",
            http_status: e ?? null
          }
        })
      }
      t.catch(() => {}), (async () => {
        try {
          let e = await (0, sp.runHatchActionWithSessionRecovery)(cv.startSurveyAction);
          e.success && e.show && null != e.page ? (await t, a(e.page)) : e.success || n(e.status)
        } catch (e) {
          cC.error({
            error: e instanceof Error ? e : Error(String(e)),
            tags: {
              surface: ec.HATCH_SENTRY_SURFACES.SURVEY
            }
          }, "Survey start failed"), n(void 0)
        }
      })()
    }, [c]), l || null == t) ? null : (0, n.jsx)(s.EctoErrorBoundary, {
      surface: ec.HATCH_SENTRY_SURFACES.SURVEY,
      fallback: () => null,
      children: (0, n.jsx)(r.Suspense, {
        fallback: null,
        children: (0, n.jsx)(cy, {
          firstPage: t,
          onComplete: () => i(!0)
        })
      })
    })
  }
  var cx = e.i(49987);
  let ck = "hatch:debug:dev-tools-enabled",
    cE = "hatch:debug:dev-tools-dock-anchor";

  function cA() {
    var e = cx.HATCH_DEVELOPER_TOOLS_DEFAULT_ANCHOR;
    let t = window.localStorage.getItem(cE);
    switch (t) {
      case "tl":
      case "tm":
      case "tr":
      case "ml":
      case "mr":
      case "bl":
      case "bm":
      case "br":
        return t;
      default:
        return e
    }
  }

  function cT() {
    let e;
    return null != (e = window.localStorage.getItem(ck)) && "true" === e
  }
  var cw = e.i(279419),
    cR = e.i(722469),
    cH = e.i(120511),
    cP = e.i(499608);
  let cI = (0, et.createClientLogger)("HatchFileEditorDialog"),
    cN = {
      conversation: null,
      isOpen: !1,
      sourceScopeKey: null,
      allowLibraryShare: !1,
      shareMessageId: null,
      filePath: null,
      fileName: null,
      editedContent: null,
      editorMode: "edit",
      fileCategory: "text",
      media: null,
      mediaNavigation: null,
      isNavigatingMedia: !1,
      isBinaryFile: !1,
      isSaving: !1
    };
  var cj = e.i(356469),
    cD = e.i(537673),
    cL = e.i(767369),
    cM = e.i(669675);

  function cO() {
    if (!("u" < typeof document)) return document.addEventListener("visibilitychange", cF), () => document.removeEventListener("visibilitychange", cF)
  }

  function cF() {
    let e = document.hidden;
    oq.default.InteractionTracingCore.getPendingInteractions().forEach(t => {
      e ? (t.addAnnotationBoolean("was_hidden", !0), t.addMarkerPoint("hidden", "AppTiming")) : t.addMarkerPoint("visible", "AppTiming")
    }), (0, tZ.forEachVisibilityAnnotatedTrace)(t => {
      e ? (t.annotate({
        bool: {
          was_hidden: !0
        }
      }), t.markerPoint("hidden")) : t.markerPoint("visible")
    })
  }
  var cU = e.i(264171),
    cz = e.i(671204),
    cK = e.i(761984),
    cB = e.i(876061),
    cV = e.i(890089),
    cW = e.i(648701),
    cG = e.i(434351),
    cY = e.i(650964),
    cq = e.i(955646),
    c$ = e.i(585152),
    cQ = e.i(896634),
    cX = e.i(175521),
    cZ = e.i(823879),
    cJ = e.i(241414),
    c0 = e.i(167985);

  function c1() {
    let e, t = (0, a.c)(4),
      {
        cachedOptions: n,
        effectiveThemeId: r,
        isDark: l,
        serverOptions: i
      } = function() {
        let e, t, n, r, l, i, o = (0, a.c)(18),
          {
            theme: s,
            chatThemeCookieCache: u
          } = (0, c$.useTheme)(),
          {
            gatewayUrl: d,
            vmName: h
          } = (0, c.useHatchServerData)(),
          f = (0, cM.useShellPostContentUnlocked)();
        o[0] !== f ? (e = {
          serverThemesEnabled: f
        }, o[0] = f, o[1] = e) : e = o[1];
        let {
          chatTheme: m
        } = (0, cJ.useHatchChatTheme)(e);
        o[2] !== s ? (t = (0, cQ.isDarkTheme)(s), o[2] = s, o[3] = t) : t = o[3];
        let p = t;
        o[4] !== f ? (n = {
          enabled: f
        }, o[4] = f, o[5] = n) : n = o[5];
        let {
          data: g
        } = (0, c0.useChatThemesQuery)(n);
        o[6] !== u || o[7] !== d || o[8] !== h ? (r = (0, cZ.chatThemeCookieCacheForTarget)(u, d, h), o[6] = u, o[7] = d, o[8] = h, o[9] = r) : r = o[9];
        let v = r;
        o[10] !== m || o[11] !== v ? (l = null != v && v.themeId === m ? {
          [v.themeId]: v.variants
        } : void 0, o[10] = m, o[11] = v, o[12] = l) : l = o[12];
        let C = l,
          y = g?.options;
        return o[13] !== C || o[14] !== m || o[15] !== p || o[16] !== y ? (i = {
          cachedOptions: C,
          effectiveThemeId: m,
          isDark: p,
          serverOptions: y
        }, o[13] = C, o[14] = m, o[15] = p, o[16] = y, o[17] = i) : i = o[17], i
      }();
    e: {
      let a;t[0] !== n || t[1] !== r || t[2] !== i ? (a = (0, cX.resolveChatThemeVariants)(r, i, n), t[0] = n, t[1] = r, t[2] = i, t[3] = a) : a = t[3];
      let o = a;
      if (!o) {
        e = null;
        break e
      }
      e = o[l ? "dark" : "light"]
    }
    return e
  }
  let c2 = "--chat-user-text",
    c3 = "--chat-user-bubble",
    c8 = "--chat-agent-text",
    c4 = "--chat-agent-bubble",
    c5 = "--chat-background";

  function c6() {
    let e, t, n = (0, a.c)(3),
      l = c1();
    return n[0] !== l ? (e = () => {
      let e = document.documentElement;
      if (null == l) {
        e.style.removeProperty(c2), e.style.removeProperty(c3), e.style.removeProperty(c8), e.style.removeProperty(c4), e.style.removeProperty(c5);
        return
      }
      e.style.setProperty(c2, l.userText), e.style.setProperty(c3, l.userBubble), e.style.setProperty(c8, l.agentText), e.style.setProperty(c4, l.agentBubble), e.style.setProperty(c5, l.background)
    }, t = [l], n[0] = l, n[1] = e, n[2] = t) : (e = n[1], t = n[2]), (0, r.useEffect)(e, t), null
  }
  var c9 = e.i(313346);

  function c7() {
    return (0, c9.useHatchDeviceContext)(), null
  }
  var ue = e.i(416407),
    ut = e.i(56550),
    un = e.i(60830),
    ua = e.i(670419);
  let ur = (0, et.createClientLogger)("HatchUiControl"),
    ul = "client_unavailable",
    ui = "not_found",
    uo = "cancelled",
    us = "unsupported";
  var uc = e.i(681875),
    uu = e.i(386048),
    ud = e.i(242392),
    uh = e.i(418458),
    uf = e.i(183710),
    um = e.i(340406);

  function up({
    open: e,
    onDismiss: t,
    onVerify: a
  }) {
    let [l, i] = (0, r.useState)(!1), [o, c] = (0, r.useState)(null), [u, d] = (0, r.useState)(0), h = tm.fbs._("That PIN doesn't match. Try again.", null, {
      hk: "cHLZA"
    }).toString(), f = tm.fbs._("We couldn't check your PIN on this device. Your PIN hasn't changed.", null, {
      hk: "1lTL1L"
    }).toString(), {
      ref: m
    } = (0, t5.useTrackedImpressionRef)({
      eventName: t6.HatchImpressionEvent.CHAT_PIN_REMINDER_DIALOG_IMPRESSION,
      actionTarget: "chat_pin_reminder_dialog",
      metadata: {
        surface: "chat",
        subsurface: "pin_reminder"
      }
    }), {
      ref: p,
      onClick: g
    } = (0, t5.useTrackedClickRef)({
      eventName: t9.HatchClickEvent.CHAT_PIN_REMINDER_CONFIRM_CLICK,
      actionTarget: "chat_pin_reminder_confirm",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "pin_reminder"
      }
    }), {
      ref: v,
      onClick: C
    } = (0, t5.useTrackedClickRef)({
      eventName: t9.HatchClickEvent.CHAT_PIN_REMINDER_DISMISS_CLICK,
      actionTarget: "chat_pin_reminder_dismiss",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "pin_reminder",
        close_reason: "not_now"
      }
    }), {
      onClick: y
    } = (0, t5.useTrackedClickRef)({
      eventName: t9.HatchClickEvent.CHAT_PIN_REMINDER_DISMISS_CLICK,
      actionTarget: "chat_pin_reminder_dismiss",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "pin_reminder",
        close_reason: "dialog_close"
      }
    }), _ = (0, r.useCallback)(async e => {
      g(), c(null), i(!0);
      try {
        let t = await a(e);
        if ("correct" === t) return;
        c("wrong" === t ? h : f)
      } finally {
        i(!1), d(e => e + 1)
      }
    }, [g, a, f, h]), b = (0, r.useCallback)(e => {
      "not_now" === e ? C() : y(), c(null), d(e => e + 1), t()
    }, [y, C, t]);
    return (0, n.jsx)(tF.Dialog, {
      open: e,
      onOpenChange: e => {
        e || l || b("dialog_close")
      },
      children: (0, n.jsx)(tF.DialogContent, {
        className: "max-w-[26rem]",
        backgroundClassName: "bg-bg-secondary",
        onOpenAutoFocus: e => e.preventDefault(),
        header: (0, n.jsx)(tF.DialogHeader, {
          children: (0, n.jsx)(tF.DialogTitle, {
            children: tm.fbt._("Verify your recovery PIN", null, {
              hk: "34T9O3"
            })
          })
        }),
        children: (0, n.jsx)("div", {
          ref: m,
          children: (0, n.jsx)(s.EctoErrorBoundary, {
            surface: ec.HATCH_SENTRY_SURFACES.CVM_PIN_REMINDER,
            fallback: ({
              error: e,
              reset: t
            }) => (0, n.jsx)(eR.HatchContentErrorFallback, {
              error: e,
              onRetry: t
            }),
            children: (0, n.jsx)(ug, {
              isSubmitting: l,
              errorMessage: o,
              onSubmit: _,
              onDismiss: () => b("not_now"),
              confirmClickRef: p,
              dismissClickRef: v
            }, u)
          })
        })
      })
    })
  }

  function ug(e) {
    let t, r, l, i, o, s, c, u, d, h, f, m, p = (0, a.c)(35),
      {
        isSubmitting: g,
        errorMessage: v,
        onSubmit: C,
        onDismiss: y,
        confirmClickRef: _,
        dismissClickRef: b
      } = e;
    p[0] !== C ? (t = e => void C(e), p[0] = C, p[1] = t) : t = p[1], p[2] !== g || p[3] !== t ? (r = {
      isSubmitting: g,
      onSubmit: t
    }, p[2] = g, p[3] = t, p[4] = r) : r = p[4];
    let {
      pin: S,
      isComplete: x,
      handleChange: k,
      submit: E
    } = (0, um.useCvmPinEntry)(r);
    p[5] === Symbol.for("react.memo_cache_sentinel") ? (l = tm.fbs._("Checking…", null, {
      hk: "kSp3L"
    }), p[5] = l) : l = p[5];
    let A = l;
    p[6] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)(tF.DialogDescription, {
      className: "text-body text-text-secondary text-center",
      children: tm.fbt._("It’s been a while. Enter your PIN so you don’t forget it — you’ll need it to recover your encrypted data.", null, {
        hk: "3KZvOS"
      })
    }), p[6] = i) : i = p[6], p[7] !== k || p[8] !== g || p[9] !== S || p[10] !== E ? (o = (0, n.jsx)("div", {
      className: "mt-6",
      children: (0, n.jsx)(uf.MessengerPinBoxes, {
        value: S,
        onChange: k,
        showPin: !1,
        disabled: g,
        onSubmit: E
      })
    }), p[7] = k, p[8] = g, p[9] = S, p[10] = E, p[11] = o) : o = p[11], p[12] !== g ? (s = g && (0, n.jsx)("div", {
      role: "status",
      "aria-live": "polite",
      className: "sr-only",
      children: A
    }), p[12] = g, p[13] = s) : s = p[13], p[14] !== v ? (c = null != v && (0, n.jsx)(l_.Text, {
      variant: "body",
      color: "destructive",
      textAlign: "center",
      role: "alert",
      className: "mt-3",
      children: v
    }), p[14] = v, p[15] = c) : c = p[15], p[16] !== g ? (u = g ? A : tm.fbs._("Confirm", null, {
      hk: "2LK8eM"
    }), p[16] = g, p[17] = u) : u = p[17];
    let T = g || !x,
      w = g || void 0;
    return p[18] !== _ || p[19] !== E || p[20] !== w || p[21] !== u || p[22] !== T ? (d = (0, n.jsx)(ik.Button, {
      label: u,
      variant: "primary",
      size: "36",
      radius: "large",
      fullWidth: !0,
      ref: _,
      onClick: E,
      disabled: T,
      "aria-busy": w,
      className: "mt-6"
    }), p[18] = _, p[19] = E, p[20] = w, p[21] = u, p[22] = T, p[23] = d) : d = p[23], p[24] === Symbol.for("react.memo_cache_sentinel") ? (h = tm.fbs._("Not now", null, {
      hk: "4FdSFN"
    }), p[24] = h) : h = p[24], p[25] !== b || p[26] !== g || p[27] !== y ? (f = (0, n.jsx)(ik.Button, {
      label: h,
      variant: "borderless",
      size: "36",
      radius: "large",
      fullWidth: !0,
      ref: b,
      onClick: y,
      disabled: g,
      className: "mt-2"
    }), p[25] = b, p[26] = g, p[27] = y, p[28] = f) : f = p[28], p[29] !== d || p[30] !== f || p[31] !== o || p[32] !== s || p[33] !== c ? (m = (0, n.jsxs)("div", {
      className: "flex flex-col items-center",
      children: [i, o, s, c, d, f]
    }), p[29] = d, p[30] = f, p[31] = o, p[32] = s, p[33] = c, p[34] = m) : m = p[34], m
  }
  let uv = (0, et.createClientLogger)("HatchPinReminderHost");

  function uC() {
    let {
      sendRequest: e,
      onClientInvoke: t,
      gatewayUrl: a
    } = (0, ei.useHatchRpc)(), l = (0, iA.resolvePinReminderVmId)(a), i = iw(l), o = i?.pendingReminder ?? null, s = (0, r.useSyncExternalStore)(iE.subscribeToPinReminderDialog, iE.readPinReminderDialogTarget, () => null), c = null != l && null != o && s?.vmId === l && s.reminderId === o.reminder_id, u = (0, r.useRef)(null), d = (0, r.useRef)(l);
    d.current = l, (0, r.useEffect)(() => t(uh.PIN_REMINDER_COMMAND_ID, t => {
      let n = t.invoke_id?.trim();
      if (null == n || 0 === n.length) return void uv.retainForBugReport("warn", "Ignoring pin.reminder invocation without invoke_id");
      let a = (t, a) => {
          e("client.invoke.result", t ? {
            invoke_id: n,
            ok: !0,
            payload_json: JSON.stringify(a)
          } : {
            invoke_id: n,
            ok: !1,
            error: {
              code: "pin_reminder_not_presented",
              message: String(a)
            }
          }).catch(e => {
            uv.retainForBugReport("warn", "Failed to complete pin.reminder invocation")
          })
        },
        r = (0, uh.parsePinReminderOccurrence)(function(e) {
          if (null == e || 0 === e.trim().length) return null;
          try {
            return JSON.parse(e)
          } catch {
            return null
          }
        }(t.params_json));
      if (null == r) return void a(!1, "Malformed pin.reminder params");
      let l = d.current;
      null == l ? a(!1, "No VM id for the active gateway") : (async () => {
        await (0, iA.waitForPinReminderSnapshot)(l, r.state_revision, r.update_id) && (0, iT.setPendingPinReminder)(l, r) ? ((u.current?.vmId !== l || u.current.reminderId !== r.reminder_id) && (u.current = {
          vmId: l,
          reminderId: r.reminder_id,
          hadWrongGuess: !1
        }), a(!0, {
          status: (0, iE.claimPinReminderPresentation)(r.reminder_id)
        })) : a(!1, "No current PIN state for this reminder")
      })().catch(e => {
        uv.retainForBugReport("warn", "Failed to prepare pin.reminder presentation"), a(!1, "Could not prepare PIN reminder state")
      })
    }), [t, e]);
    let h = (0, r.useCallback)(async t => {
        let n, a = d.current,
          r = null == a ? null : (0, iT.readPinReminderState)(a)?.snapshot;
        if (null == a || null == r || null == o) return "broken";
        try {
          let e = await (0, uc.readCvmRecoveryKey)();
          if (null == e) return "broken";
          n = await (0, uu.verifyPinAgainstEnvelope)(e, r.encrypted_pin_verifier, t)
        } catch (e) {
          return uv.error({
            error: e instanceof Error ? e : Error(String(e)),
            isAeadFailure: e instanceof uu.PinReminderCryptoError,
            tags: {
              surface: "hatch.cvm.pin_reminder"
            }
          }, "Could not check the PIN against the stored verifier"), "broken"
        }
        if (!n) return u.current = {
          vmId: a,
          reminderId: o.reminder_id,
          hadWrongGuess: !0
        }, "wrong";
        let l = u.current?.vmId === a && u.current.reminderId === o.reminder_id && u.current.hadWrongGuess;
        try {
          await (0, ud.sendPinReminderConfirm)({
            reminder_id: o.reminder_id,
            update_id: o.update_id,
            state_revision: o.state_revision,
            had_wrong_guess: l,
            last_successful_entry_at_ms: Date.now()
          }, e)
        } catch (e) {
          uv.retainForBugReport("warn", "Failed to confirm PIN reminder")
        }
        return u.current = null, (0, iE.closePinReminderDialog)(a, o.reminder_id), (0, iT.clearPendingPinReminder)(a), "correct"
      }, [o, e]),
      f = (0, r.useCallback)(() => {
        let e = d.current;
        null != e && null != o && (0, iE.closePinReminderDialog)(e, o.reminder_id)
      }, [o]);
    return (0, r.useEffect)(() => {
      null != s && (s.vmId !== l || s.reminderId !== o?.reminder_id) && (0, iE.closePinReminderDialog)(s.vmId, s.reminderId)
    }, [s, o?.reminder_id, l]), (0, n.jsx)(up, {
      open: c,
      onDismiss: f,
      onVerify: h
    }, `${l??"no-vm"}:${o?.reminder_id??"no-reminder"}`)
  }
  var uy = e.i(358338),
    u_ = e.i(61810),
    ub = e.i(169857);

  function uS(e) {
    let t = (0, a.c)(4),
      {
        channel: r
      } = e;
    switch (r.trim().toLowerCase()) {
      case "messenger": {
        let e;
        return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(nJ.HatchIcon, {
          icon: uy.default,
          size: 24,
          iconSize: 24,
          "data-testid": "hatch-channel-read-only-messenger-icon",
          className: "text-text-secondary shrink-0",
          "aria-hidden": "true"
        }), t[0] = e) : e = t[0], e
      }
      case "whatsapp": {
        let e;
        return t[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(nJ.HatchIcon, {
          icon: u_.default,
          size: 24,
          iconSize: 24,
          "data-testid": "hatch-channel-read-only-whatsapp-icon",
          className: "text-text-secondary shrink-0",
          "aria-hidden": "true"
        }), t[1] = e) : e = t[1], e
      }
      default: {
        let e;
        return t[2] !== r ? (e = (0, n.jsx)(ub.HatchChannelLogo, {
          channel: r,
          size: "md",
          className: "me-0"
        }), t[2] = r, t[3] = e) : e = t[3], e
      }
    }
  }

  function ux(e) {
    let t, r, l, i, o, s, c, u = (0, a.c)(15),
      {
        channel: d,
        sessionId: h
      } = e;
    u[0] !== d ? (t = function(e) {
      switch (e.trim().toLowerCase()) {
        case "whatsapp":
          return tm.fbs._("WhatsApp", null, {
            hk: "3S8raO"
          });
        case "messenger":
          return tm.fbs._("Messenger", null, {
            hk: "2cnLkW"
          });
        case "telegram":
          return tm.fbs._("Telegram", null, {
            hk: "26PZ9J"
          });
        default:
          return tm.fbs._("your messaging app", null, {
            hk: "2BiKZw"
          })
      }
    }(d), u[0] = d, u[1] = t) : t = u[1];
    let f = t;
    u[2] !== d || u[3] !== h ? (r = {
      eventName: t6.HatchImpressionEvent.CHAT_CHANNEL_READ_ONLY_IMPRESSION,
      actionTarget: "chat_channel_read_only_notice",
      metadata: {
        surface: "chat",
        subsurface: "channel_read_only",
        channel: d,
        session_id: h
      }
    }, u[2] = d, u[3] = h, u[4] = r) : r = u[4], u[5] === Symbol.for("react.memo_cache_sentinel") ? (l = {
      threshold: "50%"
    }, u[5] = l) : l = u[5];
    let {
      ref: m
    } = (0, t5.useTrackedImpressionRef)(r, l);
    return u[6] !== d ? (i = (0, n.jsx)(uS, {
      channel: d
    }), u[6] = d, u[7] = i) : i = u[7], u[8] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n.jsx)("p", {
      className: "text-subheadline-medium text-text-primary",
      children: tm.fbt._("View only", null, {
        hk: "3SDyqv"
      })
    }), u[8] = o) : o = u[8], u[9] !== f ? (s = (0, n.jsxs)("div", {
      className: "min-w-0 flex-1",
      children: [o, (0, n.jsx)("p", {
        className: "text-caption-1 text-text-secondary",
        children: tm.fbt._("Messages are synced from {sourceChannelName}. Continue this conversation in {destinationChannelName}.", [tm.fbt._param("sourceChannelName", f), tm.fbt._param("destinationChannelName", f)], {
          hk: "3tzoyc"
        })
      })]
    }), u[9] = f, u[10] = s) : s = u[10], u[11] !== m || u[12] !== i || u[13] !== s ? (c = (0, n.jsxs)("div", {
      ref: m,
      "data-testid": "hatch-channel-read-only-notice",
      role: "status",
      className: "bg-fill-primary-elevated shadow-blur-elevation-01 mx-auto flex min-h-16 w-fit max-w-full min-w-4/5 items-center gap-2.5 rounded-full px-4 py-3",
      children: [i, s]
    }), u[11] = m, u[12] = i, u[13] = s, u[14] = c) : c = u[14], c
  }

  function uk() {
    let e, t, r = (0, a.c)(2);
    return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("p", {
      className: "text-subheadline-medium text-text-primary",
      children: tm.fbt._("View only", null, {
        hk: "2Sc5nZ"
      })
    }), r[0] = e) : e = r[0], r[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsxs)("div", {
      role: "status",
      className: "bg-fill-primary-elevated shadow-blur-elevation-01 mx-auto flex min-h-16 w-fit max-w-full min-w-4/5 flex-col justify-center rounded-full px-4 py-3",
      children: [e, (0, n.jsx)("p", {
        className: "text-caption-1 text-text-secondary",
        children: tm.fbt._("Continue this conversation in your messaging app.", null, {
          hk: "1esHsY"
        })
      })]
    }), r[1] = t) : t = r[1], t
  }

  function uE(e) {
    let t, r, l, i, o, s = (0, a.c)(11),
      {
        isRetrying: c,
        onRetry: u
      } = e;
    s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
      eventName: t6.HatchImpressionEvent.ERROR_CONTENT_IMPRESSION,
      actionTarget: "channel_classification_error",
      metadata: {
        surface: "chat",
        subsurface: "channel_classification"
      }
    }, r = {
      threshold: "50%"
    }, s[0] = t, s[1] = r) : (t = s[0], r = s[1]);
    let {
      ref: d
    } = (0, t5.useTrackedImpressionRef)(t, r);
    s[2] === Symbol.for("react.memo_cache_sentinel") ? (l = {
      eventName: t9.HatchClickEvent.ERROR_TRY_AGAIN_CLICK,
      actionTarget: "channel_classification_try_again",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "channel_classification"
      }
    }, s[2] = l) : l = s[2];
    let {
      ref: h,
      onClick: f
    } = (0, t5.useTrackedClickRef)(l);
    return s[3] !== f || s[4] !== u ? (i = () => {
      f(), u()
    }, s[3] = f, s[4] = u, s[5] = i) : i = s[5], s[6] !== d || s[7] !== c || s[8] !== h || s[9] !== i ? (o = (0, n.jsx)(uT, {
      isRetrying: c,
      surfaceRef: d,
      retryRef: h,
      onRetry: i
    }), s[6] = d, s[7] = c, s[8] = h, s[9] = i, s[10] = o) : o = s[10], o
  }

  function uA(e) {
    let t, r = (0, a.c)(3),
      {
        isRetrying: l,
        onRetry: i
      } = e;
    return r[0] !== l || r[1] !== i ? (t = (0, n.jsx)(uT, {
      isRetrying: l,
      onRetry: i
    }), r[0] = l, r[1] = i, r[2] = t) : t = r[2], t
  }

  function uT(e) {
    let t, r, l, i, o, s = (0, a.c)(11),
      {
        isRetrying: c,
        onRetry: u,
        surfaceRef: d,
        retryRef: h
      } = e;
    return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)("p", {
      className: "text-subheadline-medium text-text-primary",
      children: tm.fbt._("Conversation controls unavailable", null, {
        hk: "RaoKT"
      })
    }), s[0] = t) : t = s[0], s[1] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsxs)("div", {
      className: "min-w-0 flex-1",
      children: [t, (0, n.jsx)("p", {
        className: "text-caption-1 text-text-primary",
        children: tm.fbt._("Sending is disabled until this conversation can be verified.", null, {
          hk: "4dmIk0"
        })
      })]
    }), s[1] = r) : r = s[1], s[2] === Symbol.for("react.memo_cache_sentinel") ? (l = tm.fbs._("Try again", null, {
      hk: "2BMsrr"
    }), s[2] = l) : l = s[2], s[3] !== c || s[4] !== u || s[5] !== h ? (i = (0, n.jsx)(ik.Button, {
      ref: h,
      type: "button",
      variant: "flat",
      size: "32",
      disabled: c,
      label: l,
      onClick: u
    }), s[3] = c, s[4] = u, s[5] = h, s[6] = i) : i = s[6], s[7] !== c || s[8] !== d || s[9] !== i ? (o = (0, n.jsxs)("div", {
      ref: d,
      role: "alert",
      "aria-busy": c,
      className: "border-separator bg-bg-primary rounded-20 shadow-blur-elevation-01 flex min-h-16 w-full items-center gap-3 border px-4 py-3",
      children: [r, i]
    }), s[7] = c, s[8] = d, s[9] = i, s[10] = o) : o = s[10], o
  }
  var uw = e.i(38441),
    uR = e.i(235072);
  let uH = "bg-fill-primary-elevated shadow-blur-elevation-01 mx-auto flex min-h-16 w-fit max-w-full min-w-4/5 items-center gap-2.5 rounded-full px-4 py-3";

  function uP(e) {
    let t, r, l, i, o, s, c = (0, a.c)(8),
      {
        sessionId: u
      } = e;
    c[0] !== u ? (t = {
      eventName: t6.HatchImpressionEvent.CHAT_PEER_SIDECHAT_READ_ONLY_IMPRESSION,
      actionTarget: "chat_peer_sidechat_read_only_notice",
      metadata: {
        surface: "chat",
        subsurface: "peer_sidechat_read_only",
        channel: uR.PEER_SIDECHAT_CHANNEL,
        session_id: u
      }
    }, c[0] = u, c[1] = t) : t = c[1], c[2] === Symbol.for("react.memo_cache_sentinel") ? (r = {
      threshold: "50%"
    }, c[2] = r) : r = c[2];
    let {
      ref: d
    } = (0, t5.useTrackedImpressionRef)(t, r);
    return c[3] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)(nJ.HatchIcon, {
      icon: uw.default,
      size: 24,
      iconSize: 24,
      className: "text-text-secondary shrink-0",
      "aria-hidden": "true"
    }), c[3] = l) : l = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)("p", {
      className: "text-subheadline-medium text-text-primary",
      children: tm.fbt._("View only", null, {
        hk: "1FZteS"
      })
    }), c[4] = i) : i = c[4], c[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n.jsxs)("div", {
      className: "min-w-0 flex-1",
      children: [i, (0, n.jsx)("p", {
        className: "text-caption-1 text-text-secondary",
        children: tm.fbt._("Your Muse talks with this person's Muse here. To ask your Muse to do something, message it in another chat.", null, {
          hk: "2PYlpU"
        })
      })]
    }), c[5] = o) : o = c[5], c[6] !== d ? (s = (0, n.jsxs)("div", {
      ref: d,
      "data-testid": "hatch-peer-sidechat-read-only-notice",
      role: "status",
      className: uH,
      children: [l, o]
    }), c[6] = d, c[7] = s) : s = c[7], s
  }

  function uI() {
    let e, t, r = (0, a.c)(2);
    return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("p", {
      className: "text-subheadline-medium text-text-primary",
      children: tm.fbt._("View only", null, {
        hk: "3X4HfX"
      })
    }), r[0] = e) : e = r[0], r[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)("div", {
      role: "status",
      className: uH,
      children: (0, n.jsxs)("div", {
        className: "min-w-0 flex-1",
        children: [e, (0, n.jsx)("p", {
          className: "text-caption-1 text-text-secondary",
          children: tm.fbt._("Message your Muse in another chat to continue this conversation.", null, {
            hk: "1nmx0p"
          })
        })]
      })
    }), r[1] = t) : t = r[1], t
  }
  var uN = e.i(277684),
    uj = e.i(657942),
    uD = e.i(981572);

  function uL(e) {
    return e.sideChatsPanelAutoPinPending && !e.sideChatsPanelPinnedPreferenceSet ? {
      sideChatsPanelPinned: !0,
      sideChatsPanelPinnedPreferenceSet: !0,
      sideChatsPanelAutoPinPending: !1
    } : {}
  }

  function uM(e) {
    return e.sideChatsPanelPinnedPreferenceSet || e.sideChatsPanelAutoPinPending ? {} : {
      hasCreatedSideChats: !0,
      sideChatsPanelAutoPinPending: !0
    }
  }
  var uO = e.i(838551),
    uF = e.i(638237),
    uU = e.i(666495);
  let uz = (0, r.lazy)(() => e.A(781471).then(e => ({
      default: e.BrowserSessionSidePanel
    }))),
    uK = (0, r.lazy)(l4.loadHatchChatRoute),
    uB = (0, r.lazy)(() => e.A(209328).then(e => ({
      default: e.HatchShoppingPanel
    }))),
    uV = (0, r.lazy)(() => e.A(931538).then(e => ({
      default: e.HatchConnectorDeepLinkOverlay
    }))),
    uW = (0, r.lazy)(() => e.A(450622).then(e => ({
      default: e.HatchFlightPanel
    }))),
    uG = (0, r.lazy)(() => e.A(805297).then(e => ({
      default: e.HatchPlaceDetailsPanel
    }))),
    uY = (0, r.lazy)(() => e.A(245102).then(e => ({
      default: e.HatchAdsDetailsPanel
    }))),
    uq = (0, r.lazy)(() => e.A(489571).then(e => ({
      default: e.HatchQuickSearch
    }))),
    u$ = (0, r.lazy)(() => e.A(562930).then(e => ({
      default: e.HatchLatencyBench
    }))),
    uQ = (0, r.lazy)(() => e.A(686707).then(e => ({
      default: e.HatchIdeasDebugPanel
    }))),
    uX = (0, r.lazy)(() => e.A(235699).then(e => ({
      default: e.HatchSpaceDebugPanel
    }))),
    uZ = (0, r.lazy)(() => e.A(857519).then(e => ({
      default: e.HatchNoiseDebugPanel
    }))),
    uJ = (0, r.lazy)(() => e.A(505171).then(e => ({
      default: e.HatchDeveloperToolsBar
    }))),
    u0 = (0, r.lazy)(() => e.A(84132).then(e => ({
      default: e.HatchVoiceFloatingCallControlGate
    }))),
    u1 = (0, r.lazy)(() => e.A(305262).then(e => ({
      default: e.HatchVoicePickerSidebar
    }))),
    u2 = (0, r.lazy)(() => e.A(305262).then(e => ({
      default: e.HatchVoicePickerDesktopSidebar
    }))),
    u3 = (0, r.lazy)(() => e.A(692272).then(e => ({
      default: e.HatchFilePanelContent
    }))),
    u8 = (0, r.lazy)(() => e.A(176409).then(e => ({
      default: e.HatchGlobalAudioElement
    }))),
    u4 = (0, r.lazy)(() => e.A(273187).then(e => ({
      default: e.HatchMobileNav
    })));

  function u5(e) {
    let t, l, i, o, s, c = (0, a.c)(8);
    return c[0] !== e ? ({
      onHydrated: t,
      ...l
    } = e, c[0] = e, c[1] = t, c[2] = l) : (t = c[1], l = c[2]), c[3] !== t ? (i = () => {
      t()
    }, o = [t], c[3] = t, c[4] = i, c[5] = o) : (i = c[4], o = c[5]), (0, r.useLayoutEffect)(i, o), c[6] !== l ? (s = (0, n.jsx)(u4, {
      ...l
    }), c[6] = l, c[7] = s) : s = c[7], s
  }

  function u6() {
    let e, t, r = (0, a.c)(2);
    return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = tm.fbs._("Loading mobile navigation", null, {
      hk: "4d6bjA"
    }), r[0] = e) : e = r[0], r[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(tT.LoadingState, {
      name: "shell_chrome",
      children: (0, n.jsx)("nav", {
        "aria-label": e,
        "aria-busy": "true",
        className: "bg-fill-blur-thin absolute inset-x-0 bottom-0 z-10 flex items-center justify-around pb-[env(safe-area-inset-bottom,0px)] md:hidden",
        children: Array.from({
          length: 6
        }, u9)
      })
    }), r[1] = t) : t = r[1], t
  }

  function u9(e, t) {
    return (0, n.jsx)("div", {
      "aria-hidden": "true",
      className: "flex min-w-0 flex-1 justify-center py-3",
      children: (0, n.jsx)(tA.Skeleton, {
        className: "size-7 rounded-full"
      })
    }, t)
  }
  let u7 = {
    canShowDevTools: !1,
    hatchVoiceEnabled: !1,
    isEmployee: !1
  };

  function de(e) {
    let t, n, l = (0, a.c)(6),
      {
        onResolve: i
      } = e,
      o = (0, m.useHatchVoiceCallingEnabled)(),
      s = (0, tE.useMcBool)("5e1fb489", !1),
      {
        canUse: c
      } = (0, m.useNoiseInspectorAccess)();
    return l[0] !== c || l[1] !== o || l[2] !== s || l[3] !== i ? (t = () => i({
      canShowDevTools: c,
      hatchVoiceEnabled: o,
      isEmployee: s
    }), n = [c, o, s, i], l[0] = c, l[1] = o, l[2] = s, l[3] = i, l[4] = t, l[5] = n) : (t = l[4], n = l[5]), (0, r.useLayoutEffect)(t, n), null
  }

  function dt(e) {
    let t, l, o, s = (0, a.c)(2),
      {
        children: c,
        voiceEnabled: u
      } = e;
    return ! function(e) {
      let {
        onClientInvoke: t,
        onEvent: n,
        sendRequest: a
      } = (0, ei.useHatchRpc)(), l = (0, g.useOptionalHatchChat)()?.noteStreamSeqCursor, o = (0, ut.useUiControlSettingsLoaded)(), s = (0, ut.useUiControlEnabled)(), c = (0, cu.useHatchSettingsControl)(), u = (0, nn.useOptionalHatchStatusPanel)(), {
        navigate: d
      } = (0, rb.useShellNavigate)(), {
        setChatTheme: h
      } = (0, cJ.useHatchChatTheme)({
        serverThemesEnabled: !1
      }), {
        setTheme: f
      } = (0, c$.useTheme)(), m = (0, eo.useOptionalHatchVoiceCall)(), p = (0, r.useRef)(m);
      p.current = m;
      let v = (0, eu.useHatchVoiceVideoSnapshot)(),
        y = (0, r.useRef)(e);
      y.current = e;
      let [_, b] = (0, r.useState)([]), S = (0, sB.useHatchSpacesQuery)({
        enabled: _.length > 0
      }), x = (0, i.usePathname)(), {
        panelType: k,
        isShellRoute: E
      } = (0, rC.useActiveRoute)(), A = (0, t5.useInteractionLoggerWithLazyData)(), T = (0, rN.useUiHighlightState)(), w = E ? (0, aq.uiHighlightItemForPanel)(k) : (0, aq.uiHighlightItemForPathname)(x), R = tm.fbs._("{productFullName} can open this view.", [tm.fbs._param("productFullName", tN.PRODUCT_BRAND.fullName)], {
        hk: "2KvPgU"
      }), H = {
        chat: tm.fbs._("Open chat", null, {
          hk: "127P1R"
        }),
        "chat.session": tm.fbs._("Open chat", null, {
          hk: "127P1R"
        }),
        settings: tm.fbs._("Open settings", null, {
          hk: "2EzPnN"
        }),
        "settings.close": tm.fbs._("Close settings", null, {
          hk: "1rNJkH"
        }),
        "settings.identity": tm.fbs._("Open identity", null, {
          hk: "2VLDjj"
        }),
        "activity.log": tm.fbs._("Open activity", null, {
          hk: "4ztUFU"
        }),
        feed: tm.fbs._("Open feed", null, {
          hk: "1YPSOd"
        }),
        goals: tm.fbs._("Open goals", null, {
          hk: "Cna7T"
        }),
        ideas: tm.fbs._("Open ideas", null, {
          hk: "eeKEs"
        }),
        library: tm.fbs._("Open library", null, {
          hk: "1H0fKx"
        }),
        "library.item": tm.fbs._("Open file", null, {
          hk: "2TI5q7"
        }),
        memory: tm.fbs._("Open memory", null, {
          hk: "1E21ss"
        }),
        "memory.item": tm.fbs._("Open memory", null, {
          hk: "1ZzS7z"
        }),
        "scheduled.tasks": tm.fbs._("Open tasks", null, {
          hk: "A9Ozv"
        }),
        "scheduled.task": tm.fbs._("Open task", null, {
          hk: "26BItv"
        }),
        space: tm.fbs._("Open artifact", null, {
          hk: "Lsnt5"
        }),
        "appearance.chat_theme": tm.fbs._("Apply theme", null, {
          hk: "2kwJnk"
        }),
        "ui.highlight": tm.fbs._("Show me", null, {
          hk: "THX0V"
        }),
        "appearance.mode": tm.fbs._("Apply mode", null, {
          hk: "4BicU4"
        }),
        "voice.end_call": tm.fbs._("End call", null, {
          hk: "3daIj3"
        })
      }, P = (0, r.useRef)(H);
      P.current = H;
      let I = (0, r.useCallback)((e, t, n, a) => {
          A({
            eventName: t9.HatchClickEvent.UI_CONTROL_LIGHTUP_OUTCOME,
            actionTarget: "ui_control_lightup",
            actionType: "dismiss",
            metadata: {
              destination: (0, aq.uiHighlightSystemKeyForItem)(e),
              outcome: t,
              was_rendered: n,
              ...null != a && {
                reason: a
              }
            }
          })
        }, [A]),
        N = (0, r.useCallback)((e, t) => {
          let n = C.getSnapshot().uiHighlight;
          if (n.requestId !== e || null == n.item || null == n.expiresAtMs) return;
          let a = n.renderedRequestId === e;
          I(n.item, a ? t : "suppressed", a, a ? void 0 : "destination_not_rendered"), C.clearUiHighlight(e)
        }, [I]),
        D = (0, r.useCallback)((e, t) => {
          let n = C.getSnapshot().uiHighlight;
          if (null != n.item) {
            if (null != n.expiresAtMs) {
              let e = n.renderedRequestId === n.requestId;
              I(n.item, e ? n.expiresAtMs <= Date.now() ? "expired" : "replaced" : "suppressed", e, e ? void 0 : "destination_not_rendered")
            }
            C.clearUiHighlight(n.requestId)
          }
          return e === w ? (null != t && I(e, "suppressed", !1, "destination_already_active"), !1) : (C.setUiHighlight(e, null == t ? void 0 : {
            durationMs: t
          }), !0)
        }, [w, I]),
        L = (0, r.useCallback)((e, t = null) => {
          switch (e.kind) {
            case "route":
              return d(e.path, {
                ...!0 === e.replace && {
                  replace: !0
                },
                ...null != e.searchParams && {
                  searchParams: e.searchParams
                }
              }), {
                ok: !0
              };
            case "space-route": {
              if (!S.isFetched) return b(n => [...n, {
                completion: t,
                spaceId: e.spaceId
              }]), {
                ok: "pending"
              };
              if (S.isError) return {
                ok: !1,
                errorCode: ul,
                error: "Artifacts are unavailable"
              };
              let n = (0, un.resolveHatchUiControlSpaceSlug)(S.data, e.spaceId);
              if (null == n) return {
                ok: !1,
                errorCode: ui,
                error: `Artifact not found: ${e.spaceId}`
              };
              return d((0, j.buildLibraryArtifactPath)(n)), {
                ok: !0
              }
            }
            case "settings":
              if (null == c) return {
                ok: !1,
                errorCode: ul,
                error: "Settings UI is unavailable"
              };
              return c?.openToTab(e.tab), {
                ok: !0
              };
            case "settings-close":
              if (null == c) return {
                ok: !1,
                errorCode: ul,
                error: "Settings UI is unavailable"
              };
              return c.close(), {
                ok: !0
              };
            case "status-panel":
              if (null == u) return {
                ok: !1,
                errorCode: ul,
                error: "Activity panel is unavailable"
              };
              return null != e.selectedTaskId && C.setSelectedJobId(e.selectedTaskId), u.setActiveTab(e.tab), u.openPanel(), {
                ok: !0
              };
            case "file-dialog":
              if (null == u) return {
                ok: !1,
                errorCode: ul,
                error: "File preview UI is unavailable"
              };
              if (!u.openFileInDialog(e.path, {
                  origin: "current"
                })) return {
                ok: !1,
                errorCode: uo,
                error: "File preview was not opened"
              };
              return {
                ok: !0
              };
            case "chat-search":
              return window.dispatchEvent(new CustomEvent(lm.HATCH_REQUEST_CHAT_SEARCH_EVENT, {
                detail: {
                  query: e.query
                }
              })), d("/"), {
                ok: !0
              };
            case "chat-theme":
              return h(e.themeId), {
                ok: !0
              };
            case "ui-highlight":
              return D(e.itemId), {
                ok: !0
              };
            case "appearance-mode":
              return f(e.themePreference), {
                ok: !0
              };
            case "voice-end-call": {
              if (!y.current) return {
                ok: !1,
                errorCode: us,
                error: "Voice UI control is unavailable"
              };
              let t = p.current;
              if (null == t) return {
                ok: !1,
                errorCode: ul,
                error: "Voice calling is unavailable"
              };
              let {
                status: n,
                endCall: a,
                startCall: r
              } = t;
              if ("connecting" !== n && "connected" !== n) return {
                ok: !1,
                errorCode: ul,
                error: "No active voice call to end"
              };
              if (null != e.activeCallId && t.currentCallIdRef.current === e.activeCallId) return {
                ok: !0
              };
              if (null != e.activeCallId && (t.preemptedHangupRef.current = !0), e.restart) {
                let e = t.activeCallMediaType;
                a("restart").then(() => {
                  if (y.current) return r(void 0, (0, ue.resolveRestartedVoiceCallMediaType)(e, v()))
                })
              } else a(null != e.activeCallId ? "preempted" : "end_call_tool");
              return {
                ok: !0
              }
            }
          }
        }, [v, d, D, h, f, c, S.data, S.isError, S.isFetched, u]),
        M = (0, r.useCallback)((e, t) => {
          null == e || "pending" === t.ok || a("client.invoke.result", !0 === t.ok ? {
            invoke_id: e.id,
            ok: !0
          } : {
            invoke_id: e.id,
            ok: !1,
            error: {
              code: t.errorCode,
              message: t.error
            }
          }).catch(e => {
            ur.retainForBugReport("warn", "Failed to complete client.invoke")
          })
        }, [a]);
      (0, ua.useOnInlineSheetDone)((0, r.useCallback)((e, t) => {
        M({
          kind: "client-invoke",
          id: e
        }, t ? {
          ok: !0
        } : {
          ok: !1,
          errorCode: uo,
          error: "Voice picker dismissed"
        })
      }, [M])), (0, r.useEffect)(() => {
        if (0 !== _.length && S.isFetched) {
          if (S.isError) {
            for (let e of _) M(e.completion, {
              ok: !1,
              errorCode: ul,
              error: "Artifacts are unavailable"
            });
            b([]);
            return
          }
          for (let e of _) {
            let t = (0, un.resolveHatchUiControlSpaceSlug)(S.data, e.spaceId);
            if (null == t) {
              M(e.completion, {
                ok: !1,
                errorCode: ui,
                error: `Artifact not found: ${e.spaceId}`
              });
              continue
            }
            d((0, j.buildLibraryArtifactPath)(t)), M(e.completion, {
              ok: !0
            })
          }
          b([])
        }
      }, [M, d, _, S.data, S.isError, S.isFetched]), (0, r.useEffect)(() => {
        if (null == l) return;
        let e = n("client.invoke", (e, t) => {
            l(t.seq)
          }),
          a = e => {
            let t = (0, un.hatchClientInvokeId)(e);
            if (null == t) return void ur.retainForBugReport("warn", "Ignoring client.invoke without invoke_id");
            let n = {
              kind: "client-invoke",
              id: t
            };
            if (!o || !s) {
              ur.retainForBugReport("warn", "Rejecting client.invoke while UI control is unavailable"), M(n, {
                ok: !1,
                errorCode: ul,
                error: o ? `UI control is disabled in ${tN.PRODUCT_BRAND.shortName}` : "UI control settings are still loading"
              });
              return
            }
            let a = (0, un.resolveHatchClientInvokeUiControlRequest)(e);
            if (null == a) {
              ur.retainForBugReport("warn", "Rejecting unsupported client.invoke payload"), M(n, {
                ok: !1,
                errorCode: us,
                error: "Unsupported UI control request"
              });
              return
            }
            let r = a.request;
            if ("lightup" === r.mode) {
              let e = (0, aq.uiHighlightItemForNavigationTarget)(r.target);
              if (null == e) {
                ur.retainForBugReport("warn", "Rejecting lightup for a non-tab destination"), M(n, {
                  ok: !1,
                  errorCode: "client_failed",
                  error: "mode=lightup is only supported for a tab destination"
                });
                return
              }
              D(e, aq.HATCH_UI_LIGHTUP_DURATION_MS), M(n, {
                ok: !0
              });
              return
            }
            if (!y.current && "voice-end-call" === r.action.kind) {
              ur.retainForBugReport("warn", "Rejecting gated voice UI control"), M(n, {
                ok: !1,
                errorCode: us,
                error: "Voice UI control is unavailable"
              });
              return
            }
            if ("perform" === r.mode || "ui-highlight" === r.action.kind) return void M(n, L(r.action, n));
            let l = function(e) {
              if (null != e) return `client-invoke-suggest:${e.id}`
            }(n);
            rx.toast.info(R, {
              id: l,
              duration: 12e3,
              action: {
                label: P.current[r.target],
                onClick: () => {
                  L(r.action), null != l && rx.toast.dismiss(l)
                }
              }
            }), M(n, {
              ok: !0
            })
          },
          r = un.HATCH_WEB_UI_CONTROL_COMMAND_IDS.map(e => t(e, a));
        return () => {
          for (let t of (e(), r)) t()
        }
      }, [M, L, I, R, l, t, n, s, o, D]), (0, r.useEffect)(() => {
        null != T.item && w === T.item && (null == T.expiresAtMs ? C.clearUiHighlight(T.requestId) : T.expiresAtMs <= Date.now() ? N(T.requestId, "expired") : N(T.requestId, "opened"))
      }, [w, N, T.expiresAtMs, T.item, T.requestId]), (0, r.useEffect)(() => {
        if (null == T.item || null == T.expiresAtMs) return;
        let e = T.requestId,
          t = T.expiresAtMs - Date.now();
        if (t <= 0) return void N(e, "expired");
        let n = window.setTimeout(() => {
          N(e, "expired")
        }, t);
        return () => window.clearTimeout(n)
      }, [N, T.expiresAtMs, T.item, T.requestId])
    }(u), (o = (0, a.c)(1))[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [], o[0] = l) : l = o[0], (0, r.useEffect)(cO, l), s[0] !== c ? (t = (0, n.jsx)(n.Fragment, {
      children: c
    }), s[0] = c, s[1] = t) : t = s[1], t
  }

  function dn(e) {
    let t, r = (0, a.c)(4),
      {
        children: l,
        pending: i,
        shellHydrated: o
      } = e,
      s = void 0 === o || o;
    return r[0] !== l || r[1] !== i || r[2] !== s ? (t = (0, n.jsx)(uU.HatchInviteRedemptionProvider, {
      children: (0, n.jsx)(dl, {
        pending: i,
        shellHydrated: s,
        children: l
      })
    }), r[0] = l, r[1] = i, r[2] = s, r[3] = t) : t = r[3], t
  }

  function da(e) {
    let t, n, l, i, o, s = (0, a.c)(9),
      {
        voicePickerOpen: c,
        setVoicePickerOpen: u
      } = e,
      d = (0, nn.useOptionalHatchStatusPanel)(),
      h = d?.isOpen ?? !1,
      f = d?.closePanel;
    return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], s[0] = t) : t = s[0], (0, r.useEffect)(dr, t), s[1] !== f || s[2] !== c ? (n = () => {
      c && f?.()
    }, l = [c, f], s[1] = f, s[2] = c, s[3] = n, s[4] = l) : (n = s[3], l = s[4]), (0, r.useEffect)(n, l), s[5] !== u || s[6] !== h ? (i = () => {
      h && u(!1)
    }, o = [h, u], s[5] = u, s[6] = h, s[7] = i, s[8] = o) : (i = s[7], o = s[8]), (0, r.useEffect)(i, o), null
  }

  function dr() {
    return (0, e6.markInitialLoadMilestone)("shellLayout")
  }

  function dl({
    children: t,
    pending: l,
    shellHydrated: o = !0
  }) {
    var u, f, m;
    let p, v, y, b, S, x, k, E, A, T, w, R, H, P, I, N, D, L, M, O, F, U, z, K, B, V, W, G, Y, q, $, Q, X, [Z, J] = (0, r.useState)(u7),
      [ee, et] = (0, r.useState)(!1),
      en = (0, r.useCallback)(() => {
        et(!0)
      }, []),
      {
        canShowDevTools: ea,
        hatchVoiceEnabled: er,
        isEmployee: el
      } = Z,
      eo = void 0 !== l,
      {
        initialLayoutState: es,
        layoutState: eu,
        updateLayoutState: ed
      } = (0, h.useHatchLayoutState)(),
      eh = (0, c.useHatchServerData)(),
      {
        connectionState: ef,
        gatewayScopeKey: em,
        isReady: ep
      } = (0, ei.useHatchRpc)(),
      eg = (0, _.useHatchConnection)(),
      {
        activeHistoryFailed: ey,
        activeHistoryReady: e_,
        approvalSafetyError: eb,
        approvalSafetyReady: eS
      } = (0, g.useHatchChatReadiness)(),
      ex = (0, rC.useActiveRoute)(),
      {
        panelType: ek,
        match: eE,
        params: eA
      } = ex,
      eT = "none" === (eE?.route.chrome ?? "shell"),
      {
        navigate: ew
      } = (0, rb.useShellNavigate)(),
      eH = (0, g.useOptionalHatchChat)(),
      eP = (0, lf.useEffectiveHatchChatRoute)();
    u = (0, lc.getHatchChatRouteKey)(eP), T = (0, a.c)(35), w = (0, i.usePathname)(), R = (0, i.useSearchParams)(), T[0] !== R ? (p = R.get(sv.HATCH_PROMPT_QUERY_PARAM), T[0] = R, T[1] = p) : p = T[1], H = p, T[2] !== R ? (v = R.get(sv.HATCH_PROMPT_ID_QUERY_PARAM), T[2] = R, T[3] = v) : v = T[3], P = v, I = null == H ? sv.HATCH_PROMPT_ID_QUERY_PARAM : sv.HATCH_PROMPT_QUERY_PARAM, T[4] !== I || T[5] !== R ? (y = R.getAll(I), T[4] = I, T[5] = R, T[6] = y) : y = T[6], N = y.length, T[7] !== R ? (b = JSON.stringify([R.getAll(sv.HATCH_PROMPT_QUERY_PARAM), R.getAll(sv.HATCH_PROMPT_ID_QUERY_PARAM)]), T[7] = R, T[8] = b) : b = T[8], D = b, L = (0, e8.useHatchStoreApi)(), M = (0, eY.useOptionalAuth)(), O = M?.isAuthenticated === !0, F = M?.userId ?? null, U = M?.sessionBindingId ?? null, z = (0, r.useRef)(null), K = (0, r.useRef)(null), B = (0, t5.useInteractionLoggerWithLazyData)(), T[9] === Symbol.for("react.memo_cache_sentinel") ? (S = tm.fbs._("This prompt is no longer available.", null, {
      hk: "4yctzy"
    }), T[9] = S) : S = T[9], V = S, T[10] === Symbol.for("react.memo_cache_sentinel") ? (x = tm.fbs._("Couldn't load this prompt. Refresh the page to try again.", null, {
      hk: "3BaF7R"
    }), T[10] = x) : x = T[10], W = x, T[11] === Symbol.for("react.memo_cache_sentinel") ? (k = tm.fbs._("Your draft was kept. Clear it and reopen the link to load this prompt.", null, {
      hk: "1KSnbE"
    }), T[11] = k) : k = T[11], G = k, T[12] !== O || T[13] !== B || T[14] !== H || T[15] !== N || T[16] !== D || T[17] !== P || T[18] !== u || T[19] !== U || T[20] !== L || T[21] !== F ? (E = () => {
      if (null == H && null == P) {
        z.current = null;
        return
      }
      if (!O || null == u || u.startsWith("invalid_thread:")) return;
      let e = () => {
        let e = new URLSearchParams(window.location.search);
        return JSON.stringify([e.getAll(sv.HATCH_PROMPT_QUERY_PARAM), e.getAll(sv.HATCH_PROMPT_ID_QUERY_PARAM)]) === D
      };
      if (!e()) return;
      let t = (0, C.getComposerRouteScopeForStore)(L);
      if (t?.routeKey !== u) return;
      let n = (0, il.hatchChatThreadLoggingMetadata)("main" === u || "draft" === u ? {
          kind: u
        } : {
          kind: "thread",
          sessionId: u.slice(7)
        }),
        a = H ?? P;
      if (null == a) return;
      let r = window.location.pathname,
        l = JSON.stringify([D, t.routeKey, F, U]),
        i = () => K.current?.key === l && K.current.store === L;
      if (i()) return;
      let o = e => !i() && (K.current = {
          key: l,
          store: L
        }, B({
          eventName: t9.HatchClickEvent.CHAT_PROMPT_DEEPLINK_ENTRY_CLICK,
          actionTarget: "chat_prompt_deeplink_entry",
          actionType: "click",
          metadata: {
            surface: "chat",
            subsurface: "prompt_deeplink",
            entry_point: "deeplink",
            link_source: null != H ? "inline" : "saved",
            outcome: e,
            ...n
          }
        }), !0),
        s = (0, rx.captureHatchToast)();
      if (N > 1 || null == H && (null == P || !(0, sv.isHatchDeeplinkPromptId)(P))) {
        o("unavailable") && s.error(V);
        return
      }
      if (null != H && 0 === H.trim().length) return void o("empty");
      if ((0, C.composerHasDraft)(L.getState().composer) || sy()) {
        o("draft_kept") && s.info(G);
        return
      }
      let c = JSON.stringify([r, D, t, F, U]);
      (z.current?.key !== c || z.current.store !== L) && (z.current = {
        key: c,
        store: L,
        composer: L.getState().composer,
        draftChanged: !1,
        promise: null != H ? Promise.resolve({
          status: "available",
          text: H
        }) : (0, sp.runHatchActionWithSessionRecovery)(() => sg(a))
      });
      let d = z.current,
        h = !1,
        f = L.subscribe((e, t) => {
          e.composer !== t.composer && (d.draftChanged = !0)
        }),
        m = () => !h && window.location.pathname === r && e() && (0, C.isComposerRouteScopeActiveForStore)(L, t);
      return d.promise.then(e => {
        if (m()) {
          var t;
          if (d.draftChanged || L.getState().composer !== d.composer || sy()) {
            o("draft_kept") && s.info(G);
            return
          }
          if ("error" === e.status) {
            o("error") && s.error(W);
            return
          }
          if ("unavailable" === e.status) {
            o("unavailable") && s.error(V);
            return
          }
          t = e.text, o("prefilled") && ("" === o0() && o1(), (0, C.updateComposerDraftForRouteForStore)(L, u, e => ({
            ...e,
            inputValue: t
          }), "composer/prefillDeeplinkPrompt"), (0, iI.markPendingComposerFocus)(), window.dispatchEvent(new Event("hatch-focus-composer")))
        }
      }).catch(() => {
        m() && o("error") && (s.error(W), sC.error({
          error: Error("Deeplink prompt request failed"),
          tags: {
            surface: ec.HATCH_SENTRY_SURFACES.CHAT_COMPOSER
          }
        }, "Failed to load a deeplink prompt"))
      }).finally(f), () => {
        h = !0, f()
      }
    }, T[12] = O, T[13] = B, T[14] = H, T[15] = N, T[16] = D, T[17] = P, T[18] = u, T[19] = U, T[20] = L, T[21] = F, T[22] = E) : E = T[22], T[23] !== O || T[24] !== B || T[25] !== w || T[26] !== H || T[27] !== N || T[28] !== D || T[29] !== P || T[30] !== u || T[31] !== U || T[32] !== L || T[33] !== F ? (A = [G, W, O, B, w, H, N, D, P, u, U, L, V, F], T[23] = O, T[24] = B, T[25] = w, T[26] = H, T[27] = N, T[28] = D, T[29] = P, T[30] = u, T[31] = U, T[32] = L, T[33] = F, T[34] = A) : A = T[34], (0, r.useEffect)(E, A);
    let eI = (0, rh.useHasBlockingPendingUserConfirmationForChatRoute)(lc.HATCH_MAIN_CHAT_ROUTE),
      eN = (0, i.usePathname)(),
      ej = (0, i.useSearchParams)(),
      eD = ej.get(n$.HATCH_STATUS_PANEL_QUERY_PARAM) === n$.HATCH_STATUS_PANEL_APPROVALS_VALUE ? `${eN}?${ej.toString()}` : null,
      eL = null != eh.gatewayUrl,
      [eM, eO] = (0, r.useState)(null),
      eF = function() {
        let e = (0, iN.useHatchGatewayFs)(),
          t = (0, eY.useOptionalAuth)(),
          {
            connectionAuthority: n,
            gatewayScopeKey: a,
            gatewayUrl: l,
            vmName: i,
            isReady: o,
            sendRequest: s
          } = (0, ei.useHatchRpc)(),
          c = JSON.stringify([t?.userId ?? null, t?.sessionBindingId ?? null, l, i, a, n?.targetKey ?? null]),
          u = (0, r.useRef)(c);
        u.current = c;
        let d = (0, eU.useQueryClient)(),
          [h, f] = (0, r.useState)(cN),
          [m, p] = (0, r.useState)(null),
          g = (0, r.useRef)(h),
          v = (0, r.useRef)(0);
        g.current = h;
        let C = tm.fbs._("You have unsaved changes. Discard and open another file?", null, {
            hk: "3YbWZz"
          }),
          y = tm.fbs._("You have unsaved changes. Discard and close?", null, {
            hk: "47xoLj"
          }),
          _ = tm.fbs._("unknown error", null, {
            hk: "4rSSRl"
          }),
          b = tm.fbs._("Could not save — invalid JSON (line {line}): {error}", [tm.fbs._param("line", String(m?.line ?? "")), tm.fbs._param("error", m?.detail ?? "")], {
            hk: "3aQEiv"
          }),
          S = tm.fbs._("Could not save — invalid JSON: {error}", [tm.fbs._param("error", m?.detail ?? "")], {
            hk: "3h7EaQ"
          }),
          x = tm.fbs._("Common issues: trailing commas, missing quotes.", null, {
            hk: "3ijufZ"
          }),
          k = tm.fbs._("Failed to save file", null, {
            hk: "37GgcL"
          }),
          E = tm.fbs._("File saved", null, {
            hk: "4qRhbE"
          });
        (0, r.useEffect)(() => {
          null != m && (rx.toast.error(null == m.line ? S : b, {
            description: x
          }), p(null))
        }, [x, S, b, m]);
        let A = (0, r.useCallback)((e, t) => {
            if (c !== u.current) return !1;
            T.current?.();
            let n = g.current;
            if (n.isOpen && null != n.editedContent && null != n.filePath) {
              let e = d.getQueryData(cP.fileQueryKeys.text((0, cR.normalizePath)(n.filePath)));
              if ((null == e || n.editedContent !== e) && !window.confirm(C)) return !1
            }
            v.current += 1;
            let a = (0, cR.getArtifactPrimaryOutputPathFromMetadataPath)(e) ?? e,
              r = a.split("/").pop() ?? a,
              h = (0, cR.getNameFromPath)(a),
              m = (0, cH.getFileCategory)(r),
              p = (0, cH.isBinaryCategory)(m),
              y = {
                ...cN,
                isOpen: !0,
                conversation: t?.conversation ?? null,
                sourceScopeKey: c,
                allowLibraryShare: t?.allowLibraryShare === !0,
                shareMessageId: t?.shareMessageId ?? null,
                filePath: a,
                fileName: h,
                fileCategory: m,
                media: t?.media ?? null,
                mediaNavigation: t?.mediaNavigation ?? null,
                isBinaryFile: p,
                editorMode: t?.mode ?? "edit"
              };
            g.current = y, f(y);
            let _ = (0, rk.getLibraryNavigationItemKeyForFilePath)(a);
            return null != _ && l && o && (0, rk.touchAndUpsertNavigationRecent)(s, d, l, i, "library", _).catch(e => {
              cI.error({
                error: e,
                filePath: _,
                tags: {
                  surface: ec.HATCH_SENTRY_SURFACES.LIBRARY
                }
              }, "Failed to touch navigation recent")
            }), !0
          }, [C, l, o, d, s, c, i]),
          T = (0, r.useRef)(null),
          w = (0, r.useCallback)(e => {
            T.current?.();
            let t = g.current;
            if (!e?.skipDirtyCheck && null != t.editedContent && null != t.filePath) {
              let e = d.getQueryData(cP.fileQueryKeys.text((0, cR.normalizePath)(t.filePath)));
              if ((null == e || t.editedContent !== e) && !window.confirm(y)) return !1
            }
            return v.current += 1, g.current = cN, f(cN), !0
          }, [y, d]),
          R = (0, r.useCallback)(e => {
            g.current = {
              ...g.current,
              editedContent: e
            }, f(t => ({
              ...t,
              editedContent: e
            }))
          }, []),
          H = (0, r.useCallback)(async () => {
            let t = g.current;
            if (null == t.filePath || null == t.editedContent) return !0;
            if ("json" === t.fileCategory) try {
              JSON.parse(t.editedContent)
            } catch (a) {
              let e = a instanceof SyntaxError ? a.message : _,
                n = null;
              if (a instanceof SyntaxError) {
                let e = a.message.match(/position\s+(\d+)/i);
                if (e?.[1] && t.editedContent) {
                  let a = parseInt(e[1], 10);
                  n = t.editedContent.substring(0, a).split("\n").length
                }
              }
              return p({
                detail: String(e),
                line: n
              }), !1
            }
            let n = (0, rx.captureHatchToast)();
            f(e => ({
              ...e,
              isSaving: !0
            }));
            try {
              let a = await e.write(t.filePath, t.editedContent);
              if (!a.ok) return (0, cw.handleHatchGatewayError)(a.error, {
                surface: "files.dialog.save",
                errorMessage: "Failed to save Hatch file in dialog",
                context: {
                  path: (0, oM.redactPathForTelemetry)(t.filePath)
                },
                toast: {
                  message: k,
                  mode: "throttled"
                },
                toastApi: n
              }), f(e => ({
                ...e,
                isSaving: !1
              })), !1;
              let r = (0, cR.normalizePath)(t.filePath);
              return (0, cP.removeFileQueriesByPath)(d, r), (0, cP.setWrittenTextData)(d, r, t.editedContent), d.invalidateQueries({
                queryKey: ["artifact-publish-status"]
              }), f(e => ({
                ...e,
                editedContent: null,
                isSaving: !1
              })), n.success(E), cI.retainForBugReport("info", "Dialog file saved"), !0
            } catch (e) {
              return cI.error({
                error: e instanceof Error ? e : Error(String(e))
              }, "Failed to save file in dialog"), n.error(k), f(e => ({
                ...e,
                isSaving: !1
              })), !1
            }
          }, [e, d, k, E, _]),
          P = (0, r.useCallback)(e => {
            f(t => t.isBinaryFile ? t : {
              ...t,
              editorMode: e
            })
          }, []),
          I = (0, r.useCallback)(e => {
            let t = g.current;
            return t.isOpen && t.sourceScopeKey === u.current && null != t.filePath && t.mediaNavigation?.canNavigate(t.filePath, e) === !0
          }, []),
          N = (0, r.useCallback)(async e => {
            let t = g.current;
            if (c !== u.current || t.sourceScopeKey !== u.current || !t.isOpen || t.isNavigatingMedia || null == t.filePath || null == t.mediaNavigation || !t.mediaNavigation.canNavigate(t.filePath, e)) return;
            let n = ++v.current,
              a = t.mediaNavigation,
              r = t.filePath;
            g.current = {
              ...t,
              isNavigatingMedia: !0
            }, f(e => ({
              ...e,
              isNavigatingMedia: !0
            }));
            try {
              let l = await a.getAdjacent(r, e, () => v.current === n && t.sourceScopeKey === u.current);
              if (v.current !== n || t.sourceScopeKey !== u.current || null == l) return;
              A(l.path, {
                allowLibraryShare: t.allowLibraryShare,
                media: l.media ?? null,
                mediaNavigation: a
              })
            } catch (n) {
              if (t.sourceScopeKey !== u.current) return;
              cI.error({
                error: n instanceof Error ? n : Error(String(n)),
                filePath: r,
                direction: e,
                tags: {
                  surface: ec.HATCH_SENTRY_SURFACES.LIBRARY_MEDIA
                }
              }, "Failed to navigate Library media")
            } finally {
              v.current === n && (g.current = {
                ...g.current,
                isNavigatingMedia: !1
              }, f(e => ({
                ...e,
                isNavigatingMedia: !1
              })))
            }
          }, [A, c]),
          j = t?.userId != null && null != n && h.sourceScopeKey === c,
          D = null == h.conversation || j;
        return {
          isOpen: h.isOpen && D,
          conversation: h.conversation,
          allowLibraryShare: j && h.allowLibraryShare,
          shareMessageId: j ? h.shareMessageId : null,
          filePath: h.filePath,
          fileName: D ? h.fileName : null,
          editedContent: h.editedContent,
          isSaving: h.isSaving,
          editorMode: h.editorMode,
          fileCategory: h.fileCategory,
          media: h.media,
          mediaNavigation: h.mediaNavigation,
          isNavigatingMedia: h.isNavigatingMedia,
          isBinaryFile: h.isBinaryFile,
          openFile: A,
          closeDialog: w,
          markdownFlushRef: T,
          setEditedContent: R,
          saveFile: H,
          setEditorMode: P,
          canNavigateMedia: I,
          navigateMedia: N
        }
      }(),
      [ez, eB] = (0, r.useState)(cz.DEFAULT_LIBRARY_ROUTE_PATH),
      [eV, eW] = (0, r.useState)(() => (0, cW.readSidePanelChatCollapsed)()),
      [eG, eq] = (0, r.useState)(() => (function() {
        let e = localStorage.getItem(rX);
        if (null == e) return null;
        let t = Number(e);
        return Number.isFinite(t) && t >= 360 ? t : null
      })()),
      [e$, eQ] = (0, r.useState)(null),
      [eX, eZ] = (0, r.useState)(null),
      eJ = (0, r.useRef)(null),
      e0 = (0, r.useCallback)(e => {
        eJ.current = e, eQ(e)
      }, []),
      e1 = eF.openFile,
      e2 = eF.closeDialog,
      e3 = (0, r.useCallback)((e, t) => {
        (0, cV.captureHatchChatScrollHold)("artifact-panel", {
          originElement: t.originElement
        });
        let {
          origin: n,
          originElement: a,
          shareMessageId: r,
          ...l
        } = t;
        if (!e1(e, {
            ...l,
            allowLibraryShare: "library" === n,
            ..."chat" === n && null != r ? {
              shareMessageId: r
            } : {}
          })) return !1;
        let i = function({
          chatRoute: e,
          currentContext: t,
          currentPresentation: n,
          libraryPath: a,
          origin: r
        }) {
          switch (r) {
            case "chat":
              return {
                context: {
                  closeTarget: {
                    kind: "chat",
                    path: (0, lc.getHatchChatRoutePath)(e)
                  },
                  presentation: "panel",
                  selectionOwner: "chat"
                }, chatVisibility: "expand"
              };
            case "dock":
              return {
                context: {
                  closeTarget: {
                    kind: "chat",
                    path: (0, lc.getHatchChatRoutePath)(e)
                  },
                  presentation: "panel",
                  selectionOwner: "artifact"
                }, chatVisibility: "collapse"
              };
            case "library":
              return {
                context: {
                  closeTarget: {
                    kind: "library",
                    path: a
                  },
                  presentation: "modal",
                  selectionOwner: "artifact"
                }, chatVisibility: "preserve"
              };
            case "current":
              return {
                context: t ?? {
                  closeTarget: null,
                  presentation: n,
                  selectionOwner: "artifact"
                }, chatVisibility: "preserve"
              }
          }
        }({
          chatRoute: eP,
          currentContext: eJ.current,
          currentPresentation: "files" === ek || "goals" === ek ? "modal" : "panel",
          libraryPath: ez,
          origin: n
        });
        return e0(i.context), "expand" === i.chatVisibility ? (eW(!1), (0, cW.writeSidePanelChatCollapsed)(!1)) : "collapse" === i.chatVisibility && (eW(!0), (0, cW.writeSidePanelChatCollapsed)(!0)), !0
      }, [eP, ek, e0, e1, ez]),
      e4 = (0, r.useCallback)(e => {
        if ((0, cV.captureHatchChatScrollHold)("artifact-panel"), !e2(e)) return !1;
        let t = eJ.current;
        e0(null);
        let n = function({
          chatRoute: e,
          context: t,
          isFullChat: n,
          libraryPath: a
        }) {
          if (t?.closeTarget?.kind === "chat") {
            let a = (0, lc.getHatchChatRoutePath)(e);
            return n ? "/" !== a || t.closeTarget.path === a ? null : t.closeTarget.path : "/" === a ? t.closeTarget.path : a
          }
          return t?.closeTarget?.kind === "library" ? a === t.closeTarget.path ? null : t.closeTarget.path : null
        }({
          chatRoute: eP,
          context: t,
          isFullChat: "chat" === ek,
          libraryPath: ez
        });
        return null != n && ew(n), !0
      }, [eP, ek, e0, e2, ez, ew]),
      e6 = (0, r.useCallback)(e => {
        let t = e2(e);
        return t && e0(null), t
      }, [e0, e2]),
      e9 = (0, r.useCallback)(() => !eF.isOpen || e6(), [e6, eF.isOpen]),
      e7 = "image" === eF.fileCategory || "video" === eF.fileCategory,
      te = (0, r.useMemo)(() => eF.isOpen && e$?.selectionOwner === "artifact" ? (0, rk.getLibraryNavigationItemKeyForFilePath)(eF.filePath) : null, [e$?.selectionOwner, eF.filePath, eF.isOpen]),
      tt = eF.isOpen && null != eF.fileName && !e7,
      tn = e$?.presentation === "modal",
      ta = tt && tn,
      tr = tt && !tn,
      tl = (0, e8.useHatchStoreApi)();
    (0, r.useLayoutEffect)(() => tl.subscribe(e => null != e.browserPanel.activeSession, (e, t) => {
      e !== t && ((0, cV.captureHatchChatScrollHold)("browser-panel"), e && eW(!1))
    }), [tl]);
    let ti = (0, l2.useActiveBrowserSession)(),
      to = null != ti,
      ts = (0, d.useIsMobileBreakpoint)(),
      tc = (0, tx.useDirection)(),
      tu = !0 === (0, tS.useReducedMotion)(),
      td = "right",
      th = (0, sb.useHatchShoppingPanelController)(),
      tf = th.isOpen,
      tp = (0, sx.useHatchPlaceDetailsPanelController)(),
      tg = tp.isOpen,
      tv = (0, sE.useHatchFlightPanelController)(),
      tC = tv.isOpen,
      ty = (0, sT.useHatchAdsDetailsPanelController)(em),
      tE = ty.isOpen,
      tA = "details" === ty.state.kind && "ad" === ty.state.entity.entityType,
      tR = "details" === th.state.kind ? `details:${th.state.product.productId??th.state.product.url}` : th.state.kind,
      tN = "details" === tp.state.kind ? `details:${tp.state.placeId}` : tp.state.kind,
      tj = "details" === tv.state.kind ? `details:${tv.state.offer.id}` : tv.state.kind,
      tD = "details" === ty.state.kind ? `details:${ty.state.entity.entityType}:${ty.state.entity.entityId}` : ty.state.kind,
      tM = th.close,
      tF = tp.close,
      tU = tv.close,
      tz = ty.close,
      tK = ty.openDetails,
      tW = (0, r.useCallback)((e, t) => {
        tf && tM(), tC && tU(), tg && tF(), tK(e, t)
      }, [tU, tF, tM, tC, tg, tf, tK]),
      tG = (0, r.useMemo)(() => ({
        ...ty,
        openDetails: tW
      }), [ty, tW]),
      tY = (0, r.useMemo)(() => ({
        ...th,
        openGrid: (...e) => {
          tE && tz(), th.openGrid(...e)
        },
        openDetails: (...e) => {
          tE && tz(), th.openDetails(...e)
        }
      }), [tz, tE, th]),
      tq = (0, r.useMemo)(() => ({
        ...tv,
        openDetails: (...e) => {
          tE && tz(), tv.openDetails(...e)
        }
      }), [tz, tv, tE]),
      t$ = (0, r.useMemo)(() => ({
        ...tp,
        openDetails: (...e) => {
          tE && tz(), tp.openDetails(...e)
        }
      }), [tz, tE, tp]),
      tZ = (0, r.useCallback)(() => {
        tf && tM(), tC && tU(), tg && tF(), tE && tz()
      }, [tz, tU, tF, tM, tE, tC, tg, tf]),
      tJ = !ts && (tf || tC || tg || tE),
      t0 = ti?.taskId ?? null,
      t1 = th.state.kind,
      t2 = "details" === th.state.kind ? th.state.product.productId : void 0,
      t3 = "details" === tp.state.kind ? tp.state.placeId : null;
    (0, r.useLayoutEffect)(() => {
      (0, C.setActivePanelSource)("file", eF.isOpen ? (0, l8.resolveOpenFileActivePanel)(eF.filePath) : null), (0, C.setActivePanelSource)("browser", null != t0 ? {
        kind: "browser",
        resource_id: t0
      } : null), (0, C.setActivePanelSource)("shopping", "closed" === t1 ? null : {
        kind: "shopping",
        ...null != t2 ? {
          resource_id: t2
        } : {}
      }), (0, C.setActivePanelSource)("place", null != t3 ? {
        kind: "place",
        resource_id: t3
      } : null)
    }, [t0, t3, eF.filePath, eF.isOpen, t1, t2]), (0, r.useLayoutEffect)(() => () => {
      (0, C.setActivePanelSource)("file", null), (0, C.setActivePanelSource)("browser", null), (0, C.setActivePanelSource)("shopping", null), (0, C.setActivePanelSource)("place", null)
    }, []);
    let t8 = ex.isShellRoute && "chat" !== ek || tr || to,
      t4 = (0, lg.useIsNarrowViewport)(),
      t6 = function({
        activePanel: e,
        activeRouteIsShellRoute: t,
        hasAdsDetailsPanel: n,
        hasBrowserPanel: a,
        hasContextualSlotPanel: r,
        hasFilePanel: l,
        hasFlightPanel: i,
        hasPlaceDetailsPanel: o,
        hasShoppingPanel: s,
        hasSidePanel: c,
        isMobile: u,
        isNarrowViewport: d,
        sidePanelChatCollapsed: h
      }) {
        let f = c || s || i || o || n ? "modal" : "side-panel",
          m = t && "chat" === e && !l && !a && !s && !i && !o && !n,
          p = !u && t && "chat" === e && !l && !a && !d,
          g = c && (h || d);
        return {
          canShowSidePanelChat: c && !d && !u,
          canShowPinnedSideChatsPanel: p,
          chatPaneCollapsed: g,
          isFullChat: !u && m,
          isFullChatRoute: m,
          routeSurfaceMode: t ? l || a || r || "chat" === e ? "hidden" : c ? "side-panel" : "overlay" : "overlay",
          shouldUseFixedSidePanelChatWidth: c && !r && !g && !u,
          statusPanelLifecycleKey: t ? f : "full-page",
          statusPanelPresentation: f
        }
      }({
        activePanel: ek,
        activeRouteIsShellRoute: ex.isShellRoute,
        hasAdsDetailsPanel: tE,
        hasBrowserPanel: to,
        hasContextualSlotPanel: tJ,
        hasFilePanel: tr,
        hasFlightPanel: tC,
        hasPlaceDetailsPanel: tg,
        hasShoppingPanel: tf,
        hasSidePanel: t8,
        isMobile: ts,
        isNarrowViewport: t4,
        sidePanelChatCollapsed: eV
      }),
      {
        canShowSidePanelChat: ne,
        canShowPinnedSideChatsPanel: nt,
        chatPaneCollapsed: nn,
        isFullChat: na,
        isFullChatRoute: nr,
        routeSurfaceMode: nl,
        shouldUseFixedSidePanelChatWidth: ni,
        statusPanelLifecycleKey: no,
        statusPanelPresentation: ns
      } = t6,
      nc = eP?.kind === "thread" ? eP.sessionId : null,
      nu = (0, cD.useHatchThreadSessionQuery)(nc);
    ! function(e) {
      let t, n, l, i, o = (0, a.c)(16),
        {
          activeChatRoute: s,
          isMainChatVisible: c,
          targetKey: u
        } = e,
        {
          initialLayoutState: d,
          layoutState: f,
          updateLayoutState: m
        } = (0, h.useHatchLayoutState)(),
        p = (0, r.useRef)(null);
      o[0] !== d.hasCreatedSideChats || o[1] !== f.sideChatsPanelAutoPinPending || o[2] !== f.sideChatsPanelPinnedPreferenceSet || o[3] !== u || o[4] !== m ? (t = () => {
        let e = e => {
          let t = e.detail;
          t?.targetKey !== u || "string" != typeof t.sessionId || 0 === t.sessionId.length || null != p.current || !0 === d.hasCreatedSideChats || f.sideChatsPanelPinnedPreferenceSet || f.sideChatsPanelAutoPinPending || (p.current = {
            ...t,
            visited: !1
          }, m(uM))
        };
        return window.addEventListener(uD.HATCH_SIDE_CHAT_CREATED_EVENT, e), () => window.removeEventListener(uD.HATCH_SIDE_CHAT_CREATED_EVENT, e)
      }, n = [d.hasCreatedSideChats, f.sideChatsPanelAutoPinPending, f.sideChatsPanelPinnedPreferenceSet, u, m], o[0] = d.hasCreatedSideChats, o[1] = f.sideChatsPanelAutoPinPending, o[2] = f.sideChatsPanelPinnedPreferenceSet, o[3] = u, o[4] = m, o[5] = t, o[6] = n) : (t = o[5], n = o[6]), (0, r.useEffect)(t, n), o[7] !== s || o[8] !== d.sideChatsPanelAutoPinPending || o[9] !== c || o[10] !== f.sideChatsPanelAutoPinPending || o[11] !== f.sideChatsPanelPinnedPreferenceSet || o[12] !== u || o[13] !== m ? (l = () => {
        if (!f.sideChatsPanelAutoPinPending || f.sideChatsPanelPinnedPreferenceSet) {
          p.current = null;
          return
        }
        let e = p.current;
        if (null != e) {
          if (e.targetKey !== u) return;
          s?.kind === "thread" && s.sessionId === e.sessionId && (e.visited = !0)
        }
        let t = e?.visited === !0 || d.sideChatsPanelAutoPinPending;
        c && t && (m(uL), p.current = null)
      }, i = [s, d.sideChatsPanelAutoPinPending, c, f.sideChatsPanelAutoPinPending, f.sideChatsPanelPinnedPreferenceSet, u, m], o[7] = s, o[8] = d.sideChatsPanelAutoPinPending, o[9] = c, o[10] = f.sideChatsPanelAutoPinPending, o[11] = f.sideChatsPanelPinnedPreferenceSet, o[12] = u, o[13] = m, o[14] = l, o[15] = i) : (l = o[14], i = o[15]), (0, r.useLayoutEffect)(l, i)
    }({
      activeChatRoute: eP,
      isMainChatVisible: eP?.kind === "main" && ex.isShellRoute && !nn && (!t8 || ne),
      targetKey: (0, eK.gatewayTargetKey)(eh.gatewayUrl, eh.vmName)
    });
    let nd = eu.sideChatsPanelPinned && (eu.sideChatsPanelPinnedPreferenceSet || !1 !== es.hasCreatedSideChats && !es.sideChatsPanelAutoPinPending),
      [nh, nf] = (0, r.useState)(!0),
      [nm, np] = (0, r.useState)(!1),
      ng = (0, r.useCallback)(e => {
        nf(!0), ed({
          sideChatsPanelPinned: e,
          sideChatsPanelPinnedPreferenceSet: !0,
          sideChatsPanelAutoPinPending: !1
        })
      }, [ed]),
      nv = (0, r.useCallback)(e => {
        if (!0 === e) {
          !0 !== eu.hasCreatedSideChats && ed({
            hasCreatedSideChats: !0
          });
          return
        }!1 === e && null == eu.hasCreatedSideChats && ed({
          hasCreatedSideChats: !1
        })
      }, [eu.hasCreatedSideChats, ed]),
      nC = eu.sideChatsPanelWidth,
      [ny, n_] = (0, r.useState)(null),
      nb = ny ?? nC,
      nS = (0, r.useRef)(null),
      nx = (0, r.useRef)(null),
      nk = (0, r.useRef)(null),
      nE = (0, r.useRef)(0),
      nA = (0, r.useRef)(null),
      nT = (0, r.useRef)(0),
      nw = (0, r.useRef)(null),
      nH = (0, r.useRef)(!1),
      nP = (0, r.useCallback)(e => {
        if (!nt) return;
        let t = Math.max(0, e),
          n = (0, n6.getHatchShellNavInset)(t);
        if (null != nS.current && nS.current.style.setProperty(n6.HATCH_SHELL_NAV_INSET_CSS_VAR, `${n}px`), null != nx.current) {
          let e = "rtl" === tc ? "right" : "left";
          nx.current.style[e] = `${n}px`
        }
        if (null != nk.current) {
          let e = "rtl" === tc ? t : -t;
          0 === e ? nk.current.style.removeProperty("translate") : nk.current.style.translate = `${e}px 0`
        }
      }, [nt, tc]),
      nI = (0, r.useCallback)(e => {
        let t = Math.max(0, e);
        if (null != nS.current) {
          let e = (0, cB.getHatchStatusPanelInset)({
            isFullChat: na,
            isMobile: ts,
            presentation: ns,
            width: t
          });
          nS.current.style.setProperty(cB.HATCH_STATUS_PANEL_INSET_CSS_VAR, `${e}px`)
        }
        if (!na || null == nx.current) return;
        let n = "rtl" === tc ? "left" : "right";
        nx.current.style[n] = `${t}px`
      }, [tc, na, ts, ns]),
      nN = (0, r.useCallback)(e => {
        nA.current = e, nP(e ?? (nH.current ? 0 : nE.current))
      }, [nP]),
      [nj, nD] = (0, r.useState)(!1),
      nL = (0, r.useRef)(!1),
      nM = (0, r.useCallback)(e => {
        let t = e > 0;
        nN(t ? nb * e : null), nL.current !== t && (nL.current = t, nD(t))
      }, [nN, nb]),
      [nO, nF] = (0, r.useState)(!1),
      [nU, nz] = (0, r.useState)(!1),
      nB = (0, r.useRef)(!1),
      nV = (0, r.useCallback)(e => {
        if (null == e) {
          nB.current && (nB.current = !1, nz(!1)), nN(null);
          return
        }
        nB.current || (nB.current = !0, nz(!0)), nN((0, n6.clampHatchDockSideChatsPanelWidth)(e))
      }, [nN]),
      nW = (0, r.useCallback)(e => {
        let t = (0, n6.clampHatchDockSideChatsPanelWidth)(e);
        nE.current = t, nB.current && (nB.current = !1, nz(!1)), nN(null), n_(t), ed({
          sideChatsPanelWidth: t
        })
      }, [nN, ed]),
      nG = (0, r.useCallback)(e => {
        nH.current = e, e ? nN(0) : nB.current || nN(null), nF(e)
      }, [nN]),
      nY = eu.fullChatStatusPanelOpen,
      [nq, nJ] = (0, r.useState)(null),
      n0 = nq ?? nY,
      [n1, n2] = (0, r.useState)(null),
      [n3, n8] = (0, r.useState)(!1),
      [n4] = (0, r.useState)(() => na),
      n5 = n1 ?? (n4 && na && n0),
      [n9, n7] = (0, r.useState)(!1),
      [ae, at] = (0, r.useState)(!1),
      [an, aa] = (0, r.useState)(!1),
      ar = (0, r.useRef)(!1),
      al = (0, r.useCallback)(e => {
        let t = e > 0,
          n = t ? nR.HATCH_STATUS_PANEL_WIDTH_PX * e : null;
        nw.current = n, nI(n ?? nT.current), ar.current !== t && (ar.current = t, aa(t))
      }, [nI]),
      ai = (0, r.useCallback)(e => {
        at(e)
      }, []),
      ao = null == n1 && n4 && na && nY,
      ac = (0, r.useRef)(nr);
    (0, r.useLayoutEffect)(() => {
      let e = ac.current;
      ac.current = nr, !e && na && (n7(!1), n2(n0))
    }, [n0, na, nr]);
    let au = (0, r.useCallback)((e, t) => {
        (0, cV.captureHatchChatScrollHold)("status-panel"), nw.current = null, nT.current = e ? nR.HATCH_STATUS_PANEL_WIDTH_PX : 0, nI(nT.current), n7("user" === t), n2(e), e && n8(!0), na && "user" === t && (nJ(e), ed({
          fullChatStatusPanelOpen: e
        }))
      }, [nI, na, ed]),
      ad = nQ({
        closeOnPresentationChangeKey: no,
        closePanel: (0, r.useCallback)(() => {
          nw.current = null, nT.current = 0, nI(0), n7(!1), n2(!1)
        }, [nI]),
        isOpen: n5
      }),
      ah = (0, lc.getHatchChatRouteKey)(eP),
      af = (0, r.useRef)(ah);
    (0, r.useEffect)(() => {
      let e = af.current !== ah;
      af.current = ah, e && tZ()
    }, [ah, tZ]);
    let am = (0, r.useRef)(null),
      ap = (0, r.useRef)(null),
      [ag, av] = (0, r.useState)(null),
      aC = (0, r.useCallback)(e => {
        if (null == e) return void av(null);
        let t = Math.max(0, Math.round(r8(e)));
        av(e => e === t ? e : t)
      }, []),
      ay = (0, rQ.useResizeObserver)(e => {
        let t = Math.max(0, Math.round(e.width));
        av(e => e === t ? e : t)
      }),
      a_ = (0, r.useCallback)(e => {
        ap.current = e, aC(e), ay(e)
      }, [ay, aC]),
      ab = (0, r.useCallback)(e => {
        nS.current = e, null != e && (nP(nA.current ?? nE.current), nI(nw.current ?? nT.current))
      }, [nP, nI]),
      aS = (0, r.useCallback)(e => {
        nx.current = e, null != e && (nP(nA.current ?? nE.current), nI(nw.current ?? nT.current))
      }, [nP, nI]),
      ax = (0, r.useCallback)(e => {
        let t = nk.current;
        null != t && t !== e && t.style.removeProperty("translate"), nk.current = e, null != e && nP(nA.current ?? nE.current)
      }, [nP]),
      ak = (0, r.useRef)(null),
      aE = (0, r.useRef)("0px"),
      aA = (0, r.useCallback)(e => {
        aE.current = null == e ? "0px" : `${Math.max(1,Math.ceil(e.getBoundingClientRect().height))}px`, tI(ak.current, aE.current)
      }, []),
      aT = (0, r.useCallback)(e => {
        ak.current = e, tI(e, aE.current)
      }, []),
      aw = (0, rQ.useResizeObserver)((e, t) => {
        aA(t)
      }),
      aR = (0, r.useCallback)(e => {
        aw(e), aA(e)
      }, [aw, aA]);
    (0, r.useEffect)(() => {
      let e = ex.match?.route.path;
      e === j.SHELL_PATH.libraryRecent ? eB(cz.DEFAULT_LIBRARY_ROUTE_PATH) : null != e && (0, cz.isLibraryRoutePath)(e) && eB(function(e, t) {
        let n = new URLSearchParams;
        if (e === j.SHELL_PATH.libraryDocuments) return n.set("view", "documents"), t?.artifactSort != null && "auto" !== t.artifactSort && n.set("sort", t.artifactSort), `${j.SHELL_PATH.libraryArtifacts}?${n.toString()}`;
        e === j.SHELL_PATH.libraryArtifacts && (t?.artifactView != null && "all" !== t.artifactView && n.set("view", t.artifactView), t?.artifactSort != null && "auto" !== t.artifactSort && n.set("sort", t.artifactSort)), e === j.SHELL_PATH.libraryMedia && t?.mediaView != null && "all" !== t.mediaView && n.set("view", t.mediaView);
        let a = n.toString();
        return 0 === a.length ? e : `${e}?${a}`
      }(e, ex.match?.searchParams))
    }, [ex.match?.route.path, ex.match?.searchParams]), (0, r.useLayoutEffect)(() => {
      eF.isOpen && nn && e$?.selectionOwner === "chat" && e0("artifact" === e$.selectionOwner ? e$ : {
        ...e$,
        selectionOwner: "artifact"
      })
    }, [e$, nn, e0, eF.isOpen]);
    let aH = ad && "modal" === ns && !ts && !nn,
      [aP, aI] = (0, r.useState)(null),
      [aN, aj] = (0, r.useState)(!1);
    (0, r.useEffect)(() => {
      ni || (aI(null), aj(!1))
    }, [ni]);
    let [aD, aL] = (0, r.useState)(!1), {
      controlledDefaultSidePanelWidth: aM,
      controlledMinSidePanelWidth: aO,
      controlledSidePanelWidth: aF,
      isShellPanelResizing: aU,
      isSideChatsPanelPinnedOpen: az,
      renderedSidePanelChatWidth: aK,
      reservedSideChatsPanelWidth: aB,
      sidePanelSplitAvailableWidth: aV,
      threadLayout: aW
    } = function({
      baseLayout: e,
      activePanel: t,
      isSideChatsPanelClosePreview: n,
      isSideChatsPanelOpenDragging: a,
      isSideChatsPanelResizing: r,
      isSidePanelClosePreview: l,
      isSidePanelResizing: i,
      previewSidePanelWidth: o,
      shellContentWidth: s,
      sideChatsPanelPinned: c,
      sideChatsPanelOverflowOpen: u,
      sideChatsPanelRenderable: d,
      sideChatsPanelWidth: h,
      storedSidePanelChatWidth: f
    }) {
      let m, p = e.shouldUseFixedSidePanelChatWidth && null != s ? s : null,
        g = null == p ? null : (m = Math.floor(.7 * p), r4(p - m, p)),
        v = null == p || null == g ? null : r4(f ?? g, p),
        C = null == p || null == o ? null : r9(p, o),
        y = l ? null : C ?? v,
        _ = e.canShowSidePanelChat && !e.chatPaneCollapsed ? {
          compactActions: "space" === t || "space_edit" === t ? "always" : "when-narrow",
          kind: "split",
          width: y
        } : cK.HATCH_FULL_THREAD_LAYOUT,
        b = null == p || null == v ? null : r6(p, v),
        S = null == p ? null : function(e, t = 400) {
          return Math.max(t, e - r5(e, t))
        }(p),
        x = null == p || null == g ? null : r6(p, g);
      return {
        controlledDefaultSidePanelWidth: x,
        controlledMinSidePanelWidth: S,
        controlledSidePanelWidth: b,
        isShellPanelResizing: a || r || i,
        isSideChatsPanelPinnedOpen: e.canShowPinnedSideChatsPanel && c && d,
        renderedSidePanelChatWidth: y,
        reservedSideChatsPanelWidth: e.canShowPinnedSideChatsPanel && d && (c || u) && !n ? h : 0,
        sidePanelSplitAvailableWidth: p,
        threadLayout: _
      }
    }({
      activePanel: ek,
      baseLayout: t6,
      isSideChatsPanelClosePreview: nO,
      isSideChatsPanelOpenDragging: nj,
      isSideChatsPanelResizing: nU,
      isSidePanelClosePreview: aD,
      isSidePanelResizing: aN,
      previewSidePanelWidth: aP,
      shellContentWidth: ag,
      sideChatsPanelOverflowOpen: nm,
      sideChatsPanelPinned: nd,
      sideChatsPanelRenderable: nh,
      sideChatsPanelWidth: nb,
      storedSidePanelChatWidth: eG
    });
    (0, r.useLayoutEffect)(() => {
      nE.current = aB, nP(nA.current ?? (nH.current ? 0 : aB))
    }, [nP, nO, nj, nU, aB]), (0, r.useLayoutEffect)(() => {
      nT.current = ad ? nR.HATCH_STATUS_PANEL_WIDTH_PX : 0, nI(nw.current ?? (ae ? 0 : nT.current))
    }, [nI, ad, ae]), (0, r.useLayoutEffect)(() => {
      let e = nA.current;
      null != e && nP(e);
      let t = nw.current;
      null != t && nI(t)
    });
    let aG = (0, r.useCallback)(e => {
        if (null == aV) return;
        let t = r9(aV, e);
        aI(null), localStorage.setItem(rX, String(Math.round(t))), eq(t)
      }, [aV]),
      aY = (0, r.useCallback)(e => {
        aI(e)
      }, []),
      aq = !nn && !na,
      [a$, aQ] = (0, r.useState)(null),
      aX = (0, r.useCallback)(e => {
        var t;
        let n;
        if (!aq) return;
        let a = (t = window.innerWidth, {
          left: Math.max(0, Math.round((n = e.getBoundingClientRect()).left)),
          right: Math.max(0, Math.round(t - n.right))
        });
        aQ(e => null != e && e.left === a.left && e.right === a.right ? e : a)
      }, [aq]),
      aZ = (0, rQ.useResizeObserver)((e, t) => {
        aX(t)
      }),
      aJ = (0, r.useRef)(null),
      a0 = (0, r.useCallback)(e => {
        aJ.current = e, aZ(e), null != e && aX(e)
      }, [aZ, aX]);
    (0, r.useLayoutEffect)(() => {
      let e = aJ.current;
      null != e && aX(e)
    }, [aK, ag, aX]);
    let {
      chatRouteCommitWrapper: a1,
      clearFrozenChatWidth: a2,
      frozenChatWidth: a3,
      handleChatCollapsedChange: a8,
      handleRouteSurfaceClose: a4,
      handleSidebarClose: a5,
      routeSidePanelCommitWrapper: a6
    } = function(e) {
      let t, n, l, i, o, s, c, u, d, h, f, m, p, g = (0, a.c)(54),
        {
          activePanel: v,
          chatContentRef: C,
          closeSidebar: y,
          hasContentSidebar: _,
          hasSidebar: b,
          isChatCollapsed: S,
          navigate: x,
          routeSurfaceClosePath: k,
          routeSurfaceMode: E,
          getFullChatExitChatCollapsedPreference: A,
          setChatCollapsedPreference: T,
          viewTransitionScopeRef: w
        } = e,
        [R, H] = (0, r.useState)(null);
      g[0] !== w ? (t = (e, t) => {
        (0, lu.runHatchViewTransition)({
          type: e,
          update: t,
          scopeElement: w.current
        })
      }, g[0] = w, g[1] = t) : t = g[1];
      let P = t;
      g[2] !== C ? (n = () => {
        C.current && H(C.current.offsetWidth)
      }, g[2] = C, g[3] = n) : n = g[3];
      let I = n;
      g[4] === Symbol.for("react.memo_cache_sentinel") ? (l = () => {
        H(null)
      }, g[4] = l) : l = g[4];
      let N = l;
      g[5] === Symbol.for("react.memo_cache_sentinel") ? (i = () => {
        setTimeout(N, 350)
      }, g[5] = i) : i = g[5];
      let j = i;
      g[6] !== T ? (o = e => {
        T(e), (0, cW.writeSidePanelChatCollapsed)(e)
      }, g[6] = T, g[7] = o) : o = g[7];
      let D = o;
      g[8] !== D || g[9] !== I || g[10] !== E || g[11] !== P ? (s = e => {
        let t = () => {
          e ? I() : N(), D(e)
        };
        "side-panel" === E ? P(e ? "hatch-route-panel-chat-hide" : "hatch-route-panel-resize", t) : t()
      }, g[8] = D, g[9] = I, g[10] = E, g[11] = P, g[12] = s) : s = g[12];
      let L = s;
      g[13] !== I || g[14] !== S || g[15] !== P ? (c = e => {
        S ? e() : (I(), P("hatch-chat-resize", () => {
          e(), j()
        }))
      }, g[13] = I, g[14] = S, g[15] = P, g[16] = c) : c = g[16];
      let M = c;
      g[17] !== v || g[18] !== _ || g[19] !== S ? (u = () => {
        "chat" === v || S || _ || (0, cV.captureHatchChatScrollHold)("route-split-close")
      }, g[17] = v, g[18] = _, g[19] = S, g[20] = u) : u = g[20];
      let O = u;
      g[21] !== O || g[22] !== y || g[23] !== _ || g[24] !== b || g[25] !== S || g[26] !== E || g[27] !== P || g[28] !== M ? (d = e => {
        (O(), "side-panel" === E && (S || !_)) ? P("hatch-full-sidebar-to-chat", e): b ? M(() => {
          _ ? y() : e()
        }) : e()
      }, g[21] = O, g[22] = y, g[23] = _, g[24] = b, g[25] = S, g[26] = E, g[27] = P, g[28] = M, g[29] = d) : d = g[29];
      let F = d;
      g[30] !== F || g[31] !== x || g[32] !== k || g[33] !== E ? (h = () => {
        "side-panel" === E ? x(k, {
          commitWrapper: F
        }) : x(k)
      }, g[30] = F, g[31] = x, g[32] = k, g[33] = E, g[34] = h) : h = g[34];
      let U = h;
      g[35] !== y || g[36] !== M ? (f = () => {
        M(y)
      }, g[35] = y, g[36] = M, g[37] = f) : f = g[37];
      let z = f;
      g[38] !== v || g[39] !== D || g[40] !== I || g[41] !== A || g[42] !== b || g[43] !== S || g[44] !== P || g[45] !== M ? (m = e => {
        if ("chat" === v && !b) {
          let t = A();
          I(), P("hatch-full-chat-to-sidebar", () => {
            D(t), e()
          });
          return
        }
        b || S ? e() : M(e)
      }, g[38] = v, g[39] = D, g[40] = I, g[41] = A, g[42] = b, g[43] = S, g[44] = P, g[45] = M, g[46] = m) : m = g[46];
      let K = m;
      return g[47] !== F || g[48] !== R || g[49] !== L || g[50] !== U || g[51] !== z || g[52] !== K ? (p = {
        chatRouteCommitWrapper: F,
        clearFrozenChatWidth: N,
        frozenChatWidth: R,
        handleChatCollapsedChange: L,
        handleRouteSurfaceClose: U,
        handleSidebarClose: z,
        routeSidePanelCommitWrapper: K
      }, g[47] = F, g[48] = R, g[49] = L, g[50] = U, g[51] = z, g[52] = K, g[53] = p) : p = g[53], p
    }({
      activePanel: ek,
      chatContentRef: am,
      closeSidebar: e4,
      hasContentSidebar: tr,
      hasSidebar: t8,
      isChatCollapsed: nn,
      navigate: ew,
      routeSurfaceClosePath: eX ?? "/",
      routeSurfaceMode: nl,
      getFullChatExitChatCollapsedPreference: (0, r.useCallback)(() => !0 !== (0, cW.readSessionSideChatOpen)(), []),
      setChatCollapsedPreference: eW,
      viewTransitionScopeRef: ap
    }), a9 = "space" === ek || "space_edit" === ek ? `${ek}:${eA.slug??eA.shortcode??""}` : ek, a7 = (0, r.useRef)(null);
    (0, r.useLayoutEffect)(() => {
      let e = a7.current;
      if (a7.current = a9, "chat" === ek) {
        eZ(null), t8 || (eW(!0), (0, cW.writeSidePanelChatCollapsed)(!0));
        return
      }
      if ("space_edit" === ek) {
        eZ(null), a2(), eW(!1), (0, cW.writeSidePanelChatCollapsed)(!1);
        return
      }
      if ("agents" === ek) {
        eZ(null), (0, cW.clearSessionSideChatOpen)(), eW(!0), (0, cW.writeSidePanelChatCollapsed)(!0);
        return
      }
      let t = e !== a9;
      if (null != e && t) {
        let e = (0, cj.consumeHatchArtifactRouteNavigation)(eN);
        if (null != e) {
          eZ(e.returnPath), "expand" === e.chatVisibility && (a2(), eW(!1), (0, cW.writeSidePanelChatCollapsed)(!1));
          return
        }
        eZ(null), eW(!0), (0, cW.writeSidePanelChatCollapsed)(!0)
      }
    }, [ek, a9, a2, t8, eN]);
    let re = (0, r.useRef)(ek),
      rt = (0, r.useRef)(!1);
    (0, r.useLayoutEffect)(() => {
      let e = re.current;
      if (re.current = ek, e !== ek && (0, cV.cancelHatchChatScrollHold)(), "chat" !== ek) {
        "chat" === e && (0, uj.freezeHatchChatScrollAnchor)();
        return
      }
      "chat" !== e && (rt.current = !0)
    }, [ek]), (0, r.useEffect)(() => cV.cancelHatchChatScrollHold, []);
    let rn = function(e) {
        let t, n, r, l, i = (0, a.c)(13),
          {
            clearFrozenChatWidth: o,
            setSidePanelClosePreview: s,
            setSplitViewDragging: c
          } = e;
        i[0] !== c ? (t = () => {
          c(!0)
        }, i[0] = c, i[1] = t) : t = i[1];
        let u = t;
        i[2] !== o || i[3] !== c ? (n = () => {
          c(!1), o()
        }, i[2] = o, i[3] = c, i[4] = n) : n = i[4];
        let d = n;
        i[5] !== o || i[6] !== c ? (r = e => {
          (0, as.flushSync)(() => {
            e(), o(), c(!1)
          })
        }, i[5] = o, i[6] = c, i[7] = r) : r = i[7];
        let h = r;
        return i[8] !== d || i[9] !== h || i[10] !== u || i[11] !== s ? (l = {
          onDragCancel: d,
          onDragCommit: h,
          onDragStart: u,
          onClosePreviewChange: s
        }, i[8] = d, i[9] = h, i[10] = u, i[11] = s, i[12] = l) : l = i[12], l
      }({
        clearFrozenChatWidth: a2,
        setSidePanelClosePreview: aL,
        setSplitViewDragging: aj
      }),
      ra = (0, r.useCallback)(() => {
        (0, cV.captureHatchChatScrollHold)("side-chats-panel"), np(!0)
      }, []),
      rr = (0, r.useCallback)(() => {
        (0, cV.captureHatchChatScrollHold)("side-chats-panel"), np(!1)
      }, []),
      rl = (0, r.useCallback)(() => {
        (0, cV.captureHatchChatScrollHold)("side-chats-panel"), np(!0), ng(!0)
      }, [ng]),
      ri = (0, r.useCallback)(() => {
        (0, cV.captureHatchChatScrollHold)("side-chats-panel"), np(!0), ng(!1)
      }, [ng]),
      ro = nm || az;
    (0, r.useEffect)(() => {
      let e = rt.current,
        t = am.current?.querySelector("#hatch-chat-scroll") ?? null,
        n = {
          capturedReason: (0, cV.peekHatchChatScrollHoldReason)(),
          hasBrowserPanel: to,
          hasChatScrollElement: null != t,
          hasFilePanel: tr,
          isChatCollapsed: nn,
          isChatReentry: e,
          isChatWidthPinned: null != a3
        },
        a = (0, cV.decideHatchChatScrollHold)(n);
      if ((0, cV.noteHatchChatScrollHoldDecision)(a, n), "idle" === a || "wait" === a) return;
      if (rt.current = !1, "discard" === a || null == t) {
        (0, cV.discardHatchChatScrollHold)(), e && (0, uj.unfreezeHatchChatScrollAnchor)();
        return
      }
      let r = e && (0, cV.isHatchChatFollowingLiveTail)(t);
      null == (0, cV.startHatchChatScrollHold)({
        scrollEl: t,
        fallbackAnchor: e && !r ? (0, uj.getHatchChatScrollAnchor)() : null,
        ...r ? {
          noAnchorTraceReason: "live-tail"
        } : {},
        ...e ? {
          onSettled: uj.unfreezeHatchChatScrollAnchor,
          reason: "tab-reentry"
        } : {}
      }) && e && (0, uj.unfreezeHatchChatScrollAnchor)()
    }, [ek, a3, tE, to, tr, tC, tg, tf, nn, ro, tD, tj, tN, tR, n5]), (0, r.useEffect)(() => {
      let e = () => a8(!0),
        t = () => a8(!1);
      return window.addEventListener("hatch-collapse-chat", e), window.addEventListener("hatch-expand-chat", t), () => {
        window.removeEventListener("hatch-collapse-chat", e), window.removeEventListener("hatch-expand-chat", t)
      }
    }, [a8]);
    let [rs, rc] = (0, r.useState)(!1), [ru, rf] = (0, r.useState)(null), [rm, rp] = (0, r.useState)(!1), rg = er && rs, ry = er && rm, [r_, rS] = (0, r.useState)([]), [rE, rR] = (0, r.useState)(!1), [rH, rP] = (0, r.useState)(!1), {
      preloadSettings: rI,
      preloadSettingsChunk: rN
    } = (Y = (0, eU.useQueryClient)(), q = (0, eY.useOptionalAuth)(), $ = q?.isAuthenticated === !0 ? q.userId ?? null : null, Q = (0, ev.useGatewayQueryContext)(), X = (0, r.useCallback)(() => {
      (0, uF.loadHatchSettingsDialogContent)().catch(() => {})
    }, []), {
      preloadSettings: (0, r.useCallback)(() => {
        null != $ && "standard" === (0, iP.getServingVmType)() && Y.invalidateQueries({
          queryKey: (0, uO.subscriptionQueryPrefix)($),
          refetchType: "none"
        }), X(), e.A(434304).then(({
          preloadHatchSettingsData: e
        }) => e({
          queryClient: Y,
          viewerId: $,
          gateway: Q
        })).catch(() => {})
      }, [Q, X, Y, $]),
      preloadSettingsChunk: X
    }), [rj, rD] = (0, r.useState)(!1), [rL, rM] = (0, r.useState)(!1), [rO, rF] = (0, r.useState)(!1), [rU, rz] = (0, r.useState)(!1), rK = (0, tX.useLatchedTrue)((0, cM.useShellPostContentUnlocked)()), rB = (0, cM.useShellPrimaryContentFailed)(), rV = (0, tX.useLatchedTrue)(rK || rB), rW = (0, rv.useAudioPlayerIsActive)(), [rG, rY] = (0, r.useState)(void 0), [rq, r$] = (0, r.useState)(void 0), [rZ, rJ] = (0, r.useState)(void 0), [r0, r1] = (0, r.useState)(void 0), [r2, r3] = (0, r.useState)(void 0), [r7, le] = (0, r.useState)(null), [lt, ln] = (0, r.useState)(!1), {
      devToolsEnabled: la,
      setDevToolsEnabled: lr,
      dockAnchor: ll,
      setDockAnchor: li
    } = function() {
      let e, t, n, l = (0, a.c)(5),
        [i, o] = (0, r.useState)(cT),
        [s, c] = (0, r.useState)(cA);
      l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = e => {
        o(e);
        try {
          window.localStorage.setItem(ck, String(e))
        } catch {}
      }, l[0] = e) : e = l[0];
      let u = e;
      l[1] === Symbol.for("react.memo_cache_sentinel") ? (t = e => {
        c(e);
        try {
          window.localStorage.setItem(cE, e)
        } catch {}
      }, l[1] = t) : t = l[1];
      let d = t;
      return l[2] !== i || l[3] !== s ? (n = {
        devToolsEnabled: i,
        setDevToolsEnabled: u,
        dockAnchor: s,
        setDockAnchor: d
      }, l[2] = i, l[3] = s, l[4] = n) : n = l[4], n
    }(), lo = eh.gatewayUrl, ls = (0, eU.useQueryClient)(), ld = (0, cY.useIsSpaceDebugPanelOpen)(), lh = (0, cY.useSpaceDebugPanelWidth)(), lm = ("space" === ek || "space_edit" === ek) && "string" == typeof eA.slug ? eA.slug.trim() : "", lp = !ts && ld && lm.length > 0 && null != lo, lv = (0, cG.useIsIdeasDebugPanelOpen)(), lC = (0, cG.useIdeasDebugPanelWidth)(), ly = !ts && el && lv && "ideas" === ek && null != lo && !lp, l_ = (0, cq.useIsNoiseDebugPanelOpen)(), lb = (0, cq.useNoiseDebugPanelWidth)(), lS = !ts && l_ && null != lo && !lp && !ly && ea, lx = (0, t5.useInteractionLogger)(), lk = (0, r.useCallback)((e, t) => {
      rI(), rY(e), r$(t?.channelDetail), r1(t?.generalSubView), r3(t?.purchaseEntrypoint), rJ("permissions" === e ? t?.permissionScope : void 0), rR(!0), rP(!0)
    }, [rI]), lE = (0, r.useCallback)(() => {
      rI(), rR(!0), rP(!0)
    }, [rI]), lA = (0, r.useCallback)(() => {
      rR(!1), rY(void 0), r$(void 0), r1(void 0), r3(void 0), rJ(void 0), window.dispatchEvent(new Event("hatch:settings-closed"))
    }, []), lT = (0, r.useCallback)(e => {
      er && (rf(e ?? null), rp(!0), rc(!0))
    }, [er]), lw = (0, r.useCallback)(() => {
      rc(!1), rf(null)
    }, []), lR = (0, r.useCallback)(e => {
      if (e) {
        rp(!0), rc(!0);
        return
      }
      lw()
    }, [lw]);
    (0, r.useEffect)(() => {
      !er && rs && lw()
    }, [lw, er, rs]), (0, r.useEffect)(() => {
      !rs || ex.isShellRoute && "chat" === ek || lw()
    }, [ek, ex.isShellRoute, lw, rs]);
    let lH = (0, r.useCallback)(() => {
        rS(e => [...e, {
          id: Date.now(),
          open: !0
        }])
      }, []),
      lP = (0, r.useMemo)(() => ({
        close: lA,
        openToTab: lk,
        openVoicePickerSidebar: lT,
        addTestSidebar: lH
      }), [lA, lk, lT, lH]),
      lI = (0, cd.parseHatchSettingsTab)(ej.get(cd.HATCH_SETTINGS_TAB_QUERY_PARAM)),
      lN = (0, r.useMemo)(() => "permissions" === lI ? (0, cd.parseHatchPermissionScope)(ej) : null, [lI, ej]),
      lj = (0, nZ.parseHatchScheduledTaskId)(ej.get(nZ.HATCH_SCHEDULED_TASK_QUERY_PARAM)),
      lD = (0, cd.resolveHatchSettingsGeneralPane)("general" === lI ? ej.get(cd.HATCH_SETTINGS_PANE_QUERY_PARAM) : null),
      lL = "connect" === (f = ej.get(ch)) || "disconnect" === f ? f : null,
      lM = null != (m = ej.get(cf)) && cm.test(m) ? m : null,
      [lF, lU] = (0, r.useState)(null),
      lz = (0, r.useCallback)(() => {
        rF(!0), rD(!0)
      }, []),
      lK = (0, r.useCallback)(() => {
        rD(!1)
      }, []),
      lB = (0, r.useCallback)(() => {
        rF(!0), rD(e => !e)
      }, []),
      lV = (0, r.useCallback)(e => {
        e && rF(!0), rD(e)
      }, []),
      lW = (0, r.useMemo)(() => ({
        closeQuickSearch: lK,
        openQuickSearch: lz,
        toggleQuickSearch: lB
      }), [lK, lz, lB]),
      lG = (0, rd.useChatMessageIds)().length > 0,
      lY = c1(),
      lq = "var(--color-bg-primary)";
    (0, r.useEffect)(() => {
      t8 || a2()
    }, [a2, t8]);
    let l$ = (0, r.useRef)(ek);
    (0, r.useEffect)(() => {
      let e = l$.current !== ek;
      l$.current = ek, e && (eF.isOpen && e6({
        skipDirtyCheck: !0
      }), to && (0, C.closeBrowserPanel)())
    }, [ek, e6]);
    let lQ = (0, r.useRef)(eN);
    (0, r.useEffect)(() => {
      let e = lQ.current !== eN;
      lQ.current = eN, e && tZ()
    }, [tZ, eN]);
    let lX = (0, r.useRef)(null),
      l1 = (0, r.useRef)(!1),
      l5 = (0, r.useRef)(!1),
      l6 = (0, r.useRef)(!1);
    (0, r.useEffect)(() => {
      let e = to && !l1.current,
        t = tr && !l5.current,
        n = tJ && !l6.current;
      t && (lX.current = "file"), e && (lX.current = "browser"), n && (lX.current = "contextual"), l1.current = to, l5.current = tr, l6.current = tJ
    }, [to, tr, tJ]), (0, r.useEffect)(() => {
      if (tJ && (to || tr)) {
        if ("contextual" === lX.current) {
          if (tr && !e6()) return void tZ();
          to && (0, C.closeBrowserPanel)()
        } else tZ();
        return
      }
      to && tr && ("browser" === lX.current ? e6({
        skipDirtyCheck: !0
      }) : (0, C.closeBrowserPanel)())
    }, [tZ, e6, to, tJ, tr]), (0, r.useEffect)(() => {
      null != lI && (lk(lI, {
        ...null != lN && {
          permissionScope: lN
        },
        ...null != lD && {
          generalSubView: lD
        }
      }), "plans" === lD && lx({
        eventName: t9.HatchClickEvent.SETTINGS_PLANS_DEEPLINK_ENTRY_CLICK,
        actionTarget: "settings_plans_deeplink_entry",
        actionType: "click",
        metadata: {
          surface: "settings",
          subsurface: "subscription_page",
          entry_point: "deeplink"
        }
      }), (0, eC.updateShellSearchParams)({
        [cd.HATCH_SETTINGS_TAB_QUERY_PARAM]: null,
        [cd.HATCH_SETTINGS_PANE_QUERY_PARAM]: null,
        [cd.HATCH_SETTINGS_PERMISSION_TYPE_QUERY_PARAM]: null,
        [cd.HATCH_SETTINGS_PERMISSION_ID_QUERY_PARAM]: null
      }))
    }, [lk, lI, lD, lN, lx]), (0, r.useEffect)(() => {
      null != lj && (0, eC.updateShellSearchParams)({
        [nZ.HATCH_SCHEDULED_TASK_QUERY_PARAM]: null
      })
    }, [lj]), (0, r.useEffect)(() => {
      null != lL && null != lM && (lU({
        action: lL,
        id: lM
      }), lx({
        eventName: t9.HatchClickEvent.CONNECTOR_DEEPLINK_ENTRY_CLICK,
        actionTarget: "connector_deeplink_entry",
        actionType: "click",
        thirdPartyConnectorType: lM,
        thirdPartyConnectionAction: lL,
        metadata: {
          surface: "chat",
          subsurface: "connector_deeplink",
          entry_point: "deeplink",
          third_party_connector_type: lM,
          third_party_connection_action: lL
        }
      }), (0, eC.updateShellSearchParams)({
        [ch]: null,
        [cf]: null
      }))
    }, [lL, lM, lx]), (0, r.useEffect)(() => {
      if (lt || "connected" !== ef) return;
      let e = ej.get("dialog_file");
      if (!e) return;
      let t = ej.get("mode");
      ln(!0);
      let n = (0, cg.normalizeBootstrapFileParam)(e);
      null != n && e3(n, {
        mode: "edit" === t ? "edit" : void 0,
        origin: "current"
      }), (0, eC.updateShellSearchParams)({
        dialog_file: null,
        mode: null
      })
    }, [ef, ej, lt, e3]);
    let l9 = (0, r.useCallback)(e => {
        le(e);
        let t = ex.match?.route.path;
        null != t && (0, cz.isLibraryFileHandoffRoutePath)(t) || ew((0, cz.isLibraryFileHandoffRoutePath)(new URL(ez, "https://hatch.invalid").pathname) ? ez : j.SHELL_PATH.libraryArtifacts, {
          commitWrapper: a6
        })
      }, [ex.match?.route.path, ez, ew, a6]),
      l7 = (0, r.useCallback)(() => {
        le(null)
      }, []),
      ie = (0, r.useMemo)(() => ({
        pendingFilePath: r7,
        clearPendingFile: l7
      }), [r7, l7]),
      it = (0, r.useCallback)(e => {
        e ? rR(!0) : lA()
      }, [lA]),
      ia = (0, tX.useLatchedTrue)(!eo && ("chat" === ek || !nn)),
      ir = (0, n.jsx)("div", {
        className: "flex h-full w-full flex-col overflow-hidden",
        children: (0, n.jsx)(cp.HatchWorkspaceContextProvider, {
          value: ie,
          children: eo ? "chat" === l.variant ? l.body : (0, n.jsx)(tH.HatchChatFeedSkeleton, {}) : ia ? (0, n.jsx)(s.EctoErrorBoundary, {
            surface: ec.HATCH_SENTRY_SURFACES.CHAT_FEED,
            fallback: ({
              error: e,
              reset: t
            }) => (0, n.jsx)(eR.HatchContentErrorFallback, {
              error: e,
              onRetry: t
            }),
            children: (0, n.jsx)(r.Suspense, {
              fallback: (0, n.jsx)(tH.HatchChatFeedSkeleton, {}),
              children: (0, n.jsx)(uK, {
                navAvatarStagesEnabled: !nn,
                sideChatsPanelPinned: az,
                sideChatsSwitcherRef: ax,
                voiceCallEntryEnabled: er && eL && !nn,
                threadLayout: aW
              })
            })
          }) : (0, n.jsx)(tH.HatchChatFeedSkeleton, {})
        })
      }),
      ii = (0, n.jsx)("div", {
        className: "flex h-full w-full flex-col overflow-hidden",
        children: (0, n.jsx)(cp.HatchWorkspaceContextProvider, {
          value: ie,
          children: eT ? null : eo ? "side-panel-route" === l.variant ? l.body : null : t
        })
      }),
      io = (0, r.useMemo)(() => ({
        isOpen: tr,
        isViewerOpen: tt,
        close: e4,
        dismiss: () => e6()
      }), [e4, e6, tr, tt]),
      [is, ic] = (0, r.useState)(new Set);
    (0, r.useEffect)(() => {
      let e = e => {
          let t = e.detail?.sessionId;
          "string" == typeof t && (ic(e => new Set(e).add(t)), ls.setQueriesData({
            queryKey: rA.threadSessionQueryKeys.all
          }, e => e?.session_id === t ? {
            ...e,
            archived: !0
          } : e))
        },
        t = e => {
          let t = e.detail?.sessionId;
          "string" == typeof t && (ic(e => {
            let n = new Set(e);
            return n.delete(t), n
          }), ls.setQueriesData({
            queryKey: rA.threadSessionQueryKeys.all
          }, e => e?.session_id === t ? {
            ...e,
            archived: !1
          } : e))
        };
      return window.addEventListener("hatch-session-archived", e), window.addEventListener("hatch-session-unarchived", t), () => {
        window.removeEventListener("hatch-session-archived", e), window.removeEventListener("hatch-session-unarchived", t)
      }
    }, [ls]);
    let iu = nu.data ?? null,
      id = (0, cL.isChannelProvider)(iu?.channel) ? iu.channel : null,
      ih = null != nc && null == iu && nu.isPending && nu.isFetching && !nu.isError,
      im = null != nc && null == iu && nu.isError,
      ip = "unavailable" === eg.phase && !("no_vm" === eg.reason && eh.isLoading),
      ig = ip || ey || null != eb || im,
      iv = !ig && ep && e_ && eS && !ih,
      iC = ip ? "connection" : ey ? "history" : null != eb ? "approval_safety" : im ? "thread_classification" : "none";
    (0, r.useEffect)(() => {
      e_ ? ((0, e5.setInitialLoadAttribute)("history_outcome", "ready"), (0, e5.markInitialLoadPoint)("history_ready")) : ey && (0, e5.setInitialLoadAttribute)("history_outcome", "error")
    }, [ey, e_]), (0, r.useEffect)(() => {
      eS ? ((0, e5.setInitialLoadAttribute)("approval_safety_outcome", "ready"), (0, e5.markInitialLoadPoint)("approval_safety_ready")) : null != eb && (0, e5.setInitialLoadAttribute)("approval_safety_outcome", "error")
    }, [eb, eS]), (0, r.useEffect)(() => {
      im ? (0, e5.setInitialLoadAttribute)("thread_classification_outcome", "error") : ih || ((0, e5.setInitialLoadAttribute)("thread_classification_outcome", "ready"), (0, e5.markInitialLoadPoint)("thread_classification_ready"))
    }, [im, ih]), (0, r.useEffect)(() => {
      (0, e5.recordInitialLoadComposerGate)(iv ? "ready" : ig ? "error" : "pending", iC)
    }, [ig, iC, iv]);
    let iy = null != nc && (is.has(nc) || iu?.archived === !0),
      i_ = (0, uR.isPeerSidechatSession)(iu),
      ib = null == nc || null == id && !i_ && !im,
      iS = eL && !nn && !iy && ib,
      ix = eL && !nn && null != id,
      ik = eL && !nn && i_,
      iE = eo && !nn || iS || ix || ik || eL && !nn && im;
    (0, r.useEffect)(() => {
      eo && eL && ("chat" !== ek && nn || (0, l4.loadHatchChatRoute)())
    }, [ek, nn, eo, eL]);
    let iA = (0, r.useMemo)(() => (function({
        chatPaneViewportInsets: e,
        direction: t,
        isFullChat: n,
        isMobile: a,
        isStatusPanelClosePreview: r,
        reservedSideChatsPanelWidth: l,
        statusPanelOpen: i
      }) {
        if (a) return {
          bottom: 0,
          left: 0,
          right: 0
        };
        if (n) {
          let e = n6.HATCH_DOCK_RAIL_WIDTH + l,
            n = i && !r ? nR.HATCH_STATUS_PANEL_WIDTH_PX : 0;
          return {
            bottom: 16,
            left: "rtl" === t ? n : e,
            right: "rtl" === t ? e : n
          }
        }
        return {
          bottom: 16,
          left: e?.left ?? n6.HATCH_DOCK_RAIL_WIDTH,
          right: e?.right ?? 0
        }
      })({
        chatPaneViewportInsets: a$,
        direction: tc,
        isFullChat: na,
        isMobile: ts,
        isStatusPanelClosePreview: ae,
        reservedSideChatsPanelWidth: aB,
        statusPanelOpen: ad
      }), [a$, tc, ad, na, ts, ae, aB]),
      iT = (0, r.useCallback)(() => {
        rz(!0)
      }, []),
      iw = (0, r.useCallback)(e => {
        (0, cW.writeSessionSideChatOpen)(!e), a8(e)
      }, [a8]),
      iR = "chat" !== ek && ne && nn,
      iH = (0, r.useCallback)(() => {
        iw(!1)
      }, [iw]),
      ij = (0, lf.useRegisterChatRouteOverride)(),
      iD = (0, lf.useClearChatRouteOverride)(),
      iL = (0, r.useRef)(null),
      iM = (0, r.useCallback)(e => {
        if (eF.isOpen) {
          e6() && e();
          return
        }
        return a1(e)
      }, [a1, e6, eF.isOpen]),
      iO = (0, r.useCallback)((e, t) => {
        ne && !nn && null != ij ? (0, lu.runHatchViewTransition)({
          type: "hatch-mobile-push",
          update: () => {
            t?.(), null == iL.current && (iL.current = Symbol("quick-search-conversation")), ij(iL.current, e)
          },
          allowMobile: !0
        }) : (iD?.(), ew("main" === e.kind ? "/" : (0, lc.buildHatchThreadPath)(e.sessionId), {
          commitWrapper: (e, n) => iM(() => {
            t?.(), e()
          }, n)
        }))
      }, [ne, nn, iD, ew, iM, ij]),
      iF = (0, r.useCallback)(() => {
        "chat" === ek && eP?.kind === "main" || (ne ? a8(!1) : ew("/", {
          commitWrapper: a1
        })), iT()
      }, [eP?.kind, ek, ne, a1, a8, ew, iT]),
      iU = (0, r.useCallback)(e => {
        null != eH && (async () => {
          let t = await eH.sendMessage(e);
          "staged" === (0, lZ.handlePendingApprovalSendResult)(t, e, {
            explainDraftKept: !0,
            revealComposer: iT
          }) && eO(null)
        })()
      }, [eH, iT]),
      iz = (0, r.useCallback)(e => {
        if (!eI) {
          if (eP?.kind === "main") {
            "chat" !== ek && (ne ? a8(!1) : ew("/", {
              commitWrapper: a1
            })), iU(e);
            return
          }
          ew("/", {
            commitWrapper: t => a1(() => {
              eO(e), t()
            })
          })
        }
      }, [eP?.kind, ek, ne, a1, a8, eI, ew, iU]);
    return (0, r.useEffect)(() => {
      eI ? eO(null) : null == eM || eP?.kind !== "main" || null == eH || (eO(null), iU(eM))
    }, [eP?.kind, eI, eH, eM, iU]), (0, r.useEffect)(() => {
      if (!rU || !iS) return;
      let e = requestAnimationFrame(() => {
        window.dispatchEvent(new CustomEvent("hatch-focus-composer")), rz(!1)
      });
      return () => {
        cancelAnimationFrame(e)
      }
    }, [rU, iS]), (0, n.jsxs)(cu.HatchSettingsControlContext.Provider, {
      value: lP,
      children: [(0, n.jsx)(r.Suspense, {
        fallback: null,
        children: (0, n.jsx)(de, {
          onResolve: J
        })
      }), (0, n.jsx)(sP, {
        value: io,
        children: (0, n.jsxs)(nX, {
          closeOnPresentationChangeKey: no,
          navigateToFile: l9,
          onOpenChange: au,
          openToApprovalsRequestKey: eD,
          openToScheduledTaskId: lj,
          open: ad,
          openFileInDialog: e3,
          children: [(0, n.jsx)(da, {
            voicePickerOpen: er && rs,
            setVoicePickerOpen: lR
          }), (0, n.jsx)(s_.HatchShoppingPanelContext.Provider, {
            value: tY,
            children: (0, n.jsx)(di, {
              adsDetailsPanel: tG,
              flightPanel: tq,
              placeDetailsPanel: t$,
              children: (0, n.jsx)(rT.HatchDockProvider, {
                onSideChatsOpenDragProgressChange: nM,
                children: (0, n.jsx)(rw.HatchQuickSearchProvider, {
                  value: lW,
                  children: (0, n.jsxs)(t7.HatchAvatarProvider, {
                    snapStageGeometry: aU || an,
                    children: [(0, n.jsx)(dt, {
                      voiceEnabled: er,
                      children: (0, n.jsx)(c6, {})
                    }), (0, n.jsx)(c7, {}), rW && (0, n.jsx)(s.EctoErrorBoundary, {
                      surface: ec.HATCH_SENTRY_SURFACES.CHAT_MESSAGE_AUDIO,
                      children: (0, n.jsx)(r.Suspense, {
                        fallback: null,
                        children: (0, n.jsx)(u8, {})
                      })
                    }), !eT && (0, n.jsx)(s9, {
                      onFocusComposer: iF,
                      onOpenInternalSettings: () => {
                        lk("internal-settings")
                      },
                      onOpenQuickSearch: lz,
                      onOpenSettings: lE,
                      isSideChatsPanelOpen: ro,
                      canOpenSideChatsPanel: !ts,
                      onOpenSideChatsPanel: ra,
                      onCloseSideChatsPanel: rr,
                      isSideChatsPanelPinned: az,
                      canPinSideChatsPanel: nt,
                      onPinSideChatsPanel: rl,
                      onUnpinSideChatsPanel: ri
                    }), (0, n.jsx)(oD.MediaLoadSignalProvider, {
                      children: (0, n.jsx)(oU, {
                        children: (0, n.jsx)(cU.HatchTurnTracingProvider, {
                          children: (0, n.jsx)(oP.HatchSendUserMessageTracingProvider, {
                            children: (0, n.jsx)(t_, {
                              id: "hatch-onboarding",
                              children: (0, n.jsxs)("div", {
                                "data-hatch-boot-surface": "application_shell",
                                "data-hatch-shell-content-state": eo ? "pending" : "ready",
                                elementtiming: "hatch_application_shell",
                                className: "relative h-full w-full overflow-hidden",
                                children: [(0, n.jsxs)("div", {
                                  ref: ab,
                                  inert: !!eT || void 0,
                                  "aria-hidden": !!eT || void 0,
                                  "data-hatch-setup-shell-underlay": eT ? "true" : void 0,
                                  className: "relative flex h-full overflow-hidden",
                                  style: {
                                    backgroundColor: lq,
                                    ...lY ? {
                                      "--chat-user-text": lY.userText,
                                      "--chat-user-bubble": lY.userBubble,
                                      "--chat-agent-text": lY.agentText,
                                      "--chat-agent-bubble": lY.agentBubble,
                                      "--chat-background": lY.background
                                    } : {},
                                    "--hatch-panel-bg": lq,
                                    [n6.HATCH_SHELL_NAV_INSET_CSS_VAR]: `${(0,n6.getHatchShellNavInset)(aB)}px`
                                  },
                                  children: [(0, n.jsx)(s.EctoErrorBoundary, {
                                    surface: ec.HATCH_SENTRY_SURFACES.NAVIGATION,
                                    fallback: null,
                                    resetKeys: [eE?.route.path ?? ek],
                                    children: (0, n.jsx)("div", {
                                      className: "contents",
                                      "data-hatch-shell-dock-hydration-guard": !0,
                                      inert: !o || void 0,
                                      children: (0, n.jsx)(lO, {
                                        onSettingsMenuOpen: rN,
                                        onSettingsClick: lE,
                                        hasMessages: lG,
                                        onFileClick: e => e3(e, {
                                          origin: "dock"
                                        }),
                                        onSpaceViewActivate: e9,
                                        selectedArtifactItemKey: te,
                                        artifactSelectionOwner: eF.isOpen ? e$?.selectionOwner ?? null : null,
                                        chatCollapsed: nn,
                                        onChatCollapsedChange: iw,
                                        hasSidePanel: t8,
                                        libraryPath: ez,
                                        chatRouteCommitWrapper: a1,
                                        routeSidePanelCommitWrapper: a6,
                                        sideChatsPanelPinned: nd,
                                        sideChatsPanelPinnedOpen: az,
                                        sideChatsPanelOverflowOpen: nm,
                                        onSideChatsPanelOverflowOpenChange: np,
                                        sideChatsPanelWidth: nb,
                                        onSideChatsPanelWidthPreview: nV,
                                        onSideChatsPanelWidthCommit: nW,
                                        onSideChatsPanelClosePreviewChange: nG,
                                        canPinSideChatsPanel: nt,
                                        onSideChatsPanelRenderableChange: nf,
                                        onHasCreatedSideChatsChange: nv,
                                        onSideChatsPanelPinnedChange: ng
                                      })
                                    })
                                  }), (0, n.jsxs)("div", {
                                    ref: a_,
                                    "data-hatch-full-page-shell": !0,
                                    "data-hatch-side-chats-panel-pinned": az ? "true" : void 0,
                                    className: (0, tk.cn)("relative flex min-w-0 flex-1 overflow-hidden", "md:ms-[var(--hatch-shell-nav-inset,72px)]", "transition-none", !t8 && "bg-bg-primary"),
                                    style: {
                                      "--hatch-panel-bg": lq,
                                      ...lp ? {
                                        paddingRight: lh
                                      } : {},
                                      ...ly ? {
                                        paddingRight: lC
                                      } : {},
                                      ...lS ? {
                                        paddingRight: lb
                                      } : {}
                                    },
                                    children: [(0, n.jsx)("div", {
                                      ref: aT,
                                      "data-hatch-pane-frame": "chat",
                                      "data-hatch-vt-pane": nn ? void 0 : "chat",
                                      inert: !!nn || void 0,
                                      "aria-hidden": !!nn || void 0,
                                      className: (0, tk.cn)("relative flex min-w-0 flex-1 flex-col overflow-hidden", t8 && !nn && "border-fill-divider border-e"),
                                      style: {
                                        flex: nn ? "0 0 0px" : null != aK ? `0 0 ${aK}px` : "1 1 0%",
                                        minWidth: nn ? 0 : ni ? 360 : 320
                                      },
                                      children: (0, n.jsxs)("div", {
                                        className: "relative flex min-h-0 min-w-0 flex-1 overflow-hidden",
                                        children: [(0, n.jsx)("div", {
                                          ref: a0,
                                          "data-hatch-chat-composer-anchor": !0,
                                          "data-hatch-toast-pane": nn ? void 0 : "chat",
                                          className: "relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden",
                                          children: (0, n.jsx)(tb.motion.div, {
                                            ref: am,
                                            "data-hatch-chat-content": !0,
                                            "data-hatch-status-modal-fade-target": nn ? void 0 : "chat-content",
                                            "data-hatch-status-modal-fade-active": aH ? "true" : void 0,
                                            initial: !1,
                                            transition: {
                                              duration: .1,
                                              ease: "easeOut"
                                            },
                                            className: (0, tk.cn)("flex min-h-0 flex-1 flex-col overflow-hidden transition-opacity duration-100", nn ? "pointer-events-none opacity-0" : "relative min-w-0 opacity-100"),
                                            style: null != a3 ? {
                                              width: a3,
                                              minWidth: a3,
                                              flexShrink: 0,
                                              alignSelf: t8 || tf ? "start" : "center"
                                            } : void 0,
                                            children: (0, n.jsx)(uN.HatchPeerSidechatProvider, {
                                              isPeerSidechat: i_,
                                              children: ir
                                            })
                                          })
                                        }), (0, n.jsxs)(co, {
                                          children: [(0, n.jsx)(nK, {
                                            animateVisibilityToggle: !tu && (n9 || ao),
                                            chatSurfaceVisible: !nn,
                                            contentEnabled: rV || n3,
                                            onClosePreviewChange: ai,
                                            onOpenDragProgressChange: al,
                                            presentation: ns
                                          }), ts ? (0, n.jsx)(tQ.Sheet, {
                                            open: rg,
                                            onOpenChange: e => {
                                              e || lw()
                                            },
                                            children: (0, n.jsxs)(tQ.SheetContent, {
                                              side: "bottom",
                                              showCloseButton: !1,
                                              className: "!rounded-t-24 flex h-[min(86dvh,720px)] max-h-[86vh] flex-col gap-0 overflow-hidden p-0",
                                              children: [(0, n.jsx)(tQ.SheetTitle, {
                                                className: "sr-only",
                                                children: tm.fbs._("Choose my voice", null, {
                                                  hk: "2wNpMT"
                                                })
                                              }), rg && (0, n.jsx)(r.Suspense, {
                                                fallback: null,
                                                children: (0, n.jsx)(u1, {
                                                  initialPage: ru?.initialPage,
                                                  onConfirmComplete: ru?.onConfirmComplete,
                                                  onClose: lw
                                                })
                                              })]
                                            })
                                          }) : ry ? (0, n.jsx)(r.Suspense, {
                                            fallback: null,
                                            children: (0, n.jsx)(u2, {
                                              isOpen: rg,
                                              initialPage: ru?.initialPage,
                                              onConfirmComplete: ru?.onConfirmComplete,
                                              onClose: lw
                                            })
                                          }) : null, r_.map(e => (0, n.jsx)(cc, {
                                            id: `test-${e.id}`,
                                            isOpen: e.open,
                                            onExitComplete: () => rS(t => t.filter(t => t.id !== e.id)),
                                            children: (0, n.jsxs)("div", {
                                              className: "rounded-12 bg-bg-primary dark:bg-fill-primary squircle-12 shadow-blur-elevation-050 relative flex h-full shrink-0 flex-col",
                                              children: [(0, n.jsx)("div", {
                                                className: "absolute end-3 top-3 z-10",
                                                children: (0, n.jsx)(tO.IconButton, {
                                                  icon: sF.default,
                                                  label: tm.fbs._("Close", null, {
                                                    hk: "2lhP48"
                                                  }),
                                                  size: "32",
                                                  variant: "flat",
                                                  onClick: () => rS(t => t.map(t => t.id === e.id ? {
                                                    ...t,
                                                    open: !1
                                                  } : t))
                                                })
                                              }), (0, n.jsxs)("div", {
                                                className: "flex flex-1 flex-col items-center justify-center gap-4 p-8",
                                                children: [(0, n.jsx)("span", {
                                                  className: "text-title-2-emphasized",
                                                  children: `${tm.fbs._("Test sidebar",null,{hk:"1El9DZ"})} #${e.id}`
                                                }), (0, n.jsx)("button", {
                                                  type: "button",
                                                  className: "bg-hatch-accent rounded-12 px-4 py-2 text-white",
                                                  onClick: () => lH(),
                                                  children: tm.fbs._("Add another", null, {
                                                    hk: "2dsScI"
                                                  })
                                                })]
                                              })]
                                            })
                                          }, e.id))]
                                        })]
                                      })
                                    }), (0, n.jsx)(s1, {
                                      mode: nl,
                                      chatCollapsed: nn,
                                      paneSurface: ts || "space_edit" === ek ? "none" : "card",
                                      paneBackgroundClassName: "chat" === ek || "files" === ek || "ideas" === ek || "goals" === ek || "feed" === ek ? "bg-bg-primary" : "bg-fill-dialog",
                                      panelSide: td,
                                      storageKey: `side-panel-${ek}`,
                                      onClose: a4,
                                      resizeHandlers: rn,
                                      controlledPanelWidth: aF ?? void 0,
                                      controlledChatMinWidth: 360,
                                      controlledMinPanelWidth: aO ?? void 0,
                                      controlledDefaultPanelWidth: aM ?? void 0,
                                      onControlledPanelWidthPreview: null == aV ? void 0 : aY,
                                      onControlledPanelWidthCommit: null == aV ? void 0 : aG,
                                      children: ii
                                    }), (0, n.jsx)(lJ, {
                                      isOpen: tr,
                                      chatCollapsed: nn,
                                      panelSide: td,
                                      storageKey: "side-panel-file",
                                      collapseSubsurface: "file_panel",
                                      onClose: a5,
                                      resizeHandlers: rn,
                                      controlledPanelWidth: aF ?? void 0,
                                      controlledChatMinWidth: 360,
                                      controlledMinPanelWidth: aO ?? void 0,
                                      controlledDefaultPanelWidth: aM ?? void 0,
                                      onControlledPanelWidthPreview: null == aV ? void 0 : aY,
                                      onControlledPanelWidthCommit: null == aV ? void 0 : aG,
                                      children: tr && (0, n.jsx)(s.EctoErrorBoundary, {
                                        surface: ec.HATCH_SENTRY_SURFACES.LIBRARY_FILES,
                                        fallback: ({
                                          error: e,
                                          reset: t
                                        }) => (0, n.jsx)(eR.HatchContentErrorFallback, {
                                          error: e,
                                          onRetry: t
                                        }),
                                        children: (0, n.jsx)(r.Suspense, {
                                          fallback: (0, n.jsx)(tP.HatchFileEditorSkeleton, {}),
                                          children: (0, n.jsx)(u3, {
                                            conversation: eF.conversation,
                                            filePath: eF.filePath,
                                            fileName: eF.fileName,
                                            editedContent: eF.editedContent,
                                            isSaving: eF.isSaving,
                                            editorMode: eF.editorMode,
                                            fileCategory: eF.fileCategory,
                                            isBinaryFile: eF.isBinaryFile,
                                            closeDialog: a5,
                                            markdownFlushRef: eF.markdownFlushRef,
                                            setEditedContent: eF.setEditedContent,
                                            saveFile: eF.saveFile,
                                            setEditorMode: eF.setEditorMode
                                          })
                                        })
                                      })
                                    }), er && (0, n.jsx)(s.EctoErrorBoundary, {
                                      surface: ec.HATCH_SENTRY_SURFACES.VOICE_CALL,
                                      children: (0, n.jsx)(r.Suspense, {
                                        fallback: null,
                                        children: (0, n.jsx)(u0, {
                                          chatPaneVisible: !nn
                                        })
                                      })
                                    }), (0, n.jsx)(lJ, {
                                      isOpen: to,
                                      chatCollapsed: nn,
                                      panelSide: td,
                                      storageKey: "side-panel-browser",
                                      collapseSubsurface: "browser_panel",
                                      onClose: C.closeBrowserPanel,
                                      resizeHandlers: rn,
                                      controlledPanelWidth: aF ?? void 0,
                                      controlledChatMinWidth: 360,
                                      controlledMinPanelWidth: aO ?? void 0,
                                      controlledDefaultPanelWidth: aM ?? void 0,
                                      onControlledPanelWidthPreview: null == aV ? void 0 : aY,
                                      onControlledPanelWidthCommit: null == aV ? void 0 : aG,
                                      children: null != ti ? (0, n.jsx)(s.EctoErrorBoundary, {
                                        surface: ec.HATCH_SENTRY_SURFACES.BROWSER_SESSION,
                                        fallback: ({
                                          error: e,
                                          reset: t
                                        }) => (0, n.jsx)(eR.HatchContentErrorFallback, {
                                          error: e,
                                          onRetry: t
                                        }),
                                        children: (0, n.jsx)(r.Suspense, {
                                          fallback: (0, n.jsx)(tT.LoadingState, {
                                            name: "side_panel_browser_session",
                                            className: "flex h-full items-center justify-center",
                                            children: (0, n.jsx)(l3.Spinner, {
                                              size: 24
                                            })
                                          }),
                                          children: (0, n.jsx)(uz, {
                                            session: ti,
                                            onClose: C.closeBrowserPanel
                                          }, `${ti.taskId}:${ti.openedAt}`)
                                        })
                                      }) : null
                                    }), tf && !ts && (0, n.jsx)(dd, {
                                      isOpen: tf,
                                      isCompact: !0,
                                      chatCollapsed: nn,
                                      onClose: th.close,
                                      resizeHandlers: rn,
                                      children: (0, n.jsx)(r.Suspense, {
                                        fallback: (0, n.jsx)(l0, {}),
                                        children: (0, n.jsx)(uB, {})
                                      })
                                    }), ts && (0, n.jsx)(tQ.Sheet, {
                                      open: tf,
                                      onOpenChange: e => {
                                        e || th.close()
                                      },
                                      children: (0, n.jsxs)(tQ.SheetContent, {
                                        side: "bottom",
                                        showCloseButton: !1,
                                        className: "flex h-[100dvh] max-h-[100dvh] flex-col gap-0 p-0",
                                        children: [(0, n.jsx)(tQ.SheetTitle, {
                                          className: "sr-only",
                                          children: tm.fbs._("Shopping", null, {
                                            hk: "8sJ1"
                                          })
                                        }), tf && (0, n.jsx)(r.Suspense, {
                                          fallback: (0, n.jsx)(l0, {}),
                                          children: (0, n.jsx)(uB, {})
                                        })]
                                      })
                                    }), tC && !tf && !ts && (0, n.jsx)(du, {
                                      rail: "flight",
                                      collapseSubsurface: "flight_panel",
                                      toastPane: "flight",
                                      isOpen: tC,
                                      chatCollapsed: nn,
                                      resizeHandlers: rn,
                                      onClose: tv.close,
                                      children: (0, n.jsx)(r.Suspense, {
                                        fallback: (0, n.jsx)(sw, {}),
                                        children: (0, n.jsx)(uW, {})
                                      })
                                    }), ts && (0, n.jsx)(tQ.Sheet, {
                                      open: tC && !tf,
                                      onOpenChange: e => {
                                        e || tv.close()
                                      },
                                      children: (0, n.jsxs)(tQ.SheetContent, {
                                        side: "bottom",
                                        showCloseButton: !1,
                                        className: "bg-fill-dialog flex h-[100dvh] max-h-[100dvh] flex-col gap-0 p-0",
                                        children: [(0, n.jsx)(tQ.SheetTitle, {
                                          className: "sr-only",
                                          children: tm.fbs._("Flight details", null, {
                                            hk: "JWpLp"
                                          })
                                        }), tC && !tf && (0, n.jsx)(r.Suspense, {
                                          fallback: (0, n.jsx)(sw, {}),
                                          children: (0, n.jsx)(uW, {})
                                        })]
                                      })
                                    }), tg && !tf && !tC && !ts && (0, n.jsx)(du, {
                                      rail: "place-details",
                                      collapseSubsurface: "place_details_panel",
                                      toastPane: "place-details",
                                      isOpen: tg,
                                      chatCollapsed: nn,
                                      resizeHandlers: rn,
                                      onClose: tp.close,
                                      children: (0, n.jsx)(r.Suspense, {
                                        fallback: null,
                                        children: (0, n.jsx)(uG, {})
                                      })
                                    }), ts && (0, n.jsx)(tQ.Sheet, {
                                      open: tg && !tf && !tC,
                                      onOpenChange: e => {
                                        e || tp.close()
                                      },
                                      children: (0, n.jsxs)(tQ.SheetContent, {
                                        side: "bottom",
                                        showCloseButton: !1,
                                        className: "bg-fill-dialog flex h-[100dvh] max-h-[100dvh] flex-col gap-0 p-0",
                                        children: [(0, n.jsx)(tQ.SheetTitle, {
                                          className: "sr-only",
                                          children: tm.fbs._("Place details", null, {
                                            hk: "3Q5T8F"
                                          })
                                        }), tg && !tf && !tC && (0, n.jsx)(r.Suspense, {
                                          fallback: null,
                                          children: (0, n.jsx)(uG, {})
                                        })]
                                      })
                                    }), tE && !tf && !tC && !tg && !ts && (0, n.jsx)(du, {
                                      rail: "ads-details",
                                      collapseSubsurface: "ads_details_panel",
                                      toastPane: "ads-details",
                                      isOpen: tE,
                                      chatCollapsed: nn,
                                      resizeHandlers: rn,
                                      onClose: tG.close,
                                      children: (0, n.jsx)(ds, {
                                        showHero: tA
                                      })
                                    }), ts && (0, n.jsx)(tQ.Sheet, {
                                      open: tE && !tf && !tC && !tg,
                                      onOpenChange: e => {
                                        e || tG.close()
                                      },
                                      children: (0, n.jsxs)(tQ.SheetContent, {
                                        side: "bottom",
                                        showCloseButton: !1,
                                        className: "bg-fill-dialog flex h-[100dvh] max-h-[100dvh] flex-col gap-0 p-0",
                                        children: [(0, n.jsx)(tQ.SheetTitle, {
                                          className: "sr-only",
                                          children: tm.fbs._("Ads details", null, {
                                            hk: "lDyOJ"
                                          })
                                        }), tE && !tf && !tC && !tg && (0, n.jsx)(ds, {
                                          showHero: tA
                                        })]
                                      })
                                    }), lp && null != lo && (0, n.jsx)(s.EctoErrorBoundary, {
                                      surface: ec.HATCH_SENTRY_SURFACES.DEVELOPER,
                                      children: (0, n.jsx)(r.Suspense, {
                                        fallback: null,
                                        children: (0, n.jsx)(uX, {
                                          gatewayUrl: lo,
                                          spaceSlug: lm
                                        }, `${lo}:${lm}`)
                                      })
                                    }), ly && null != lo && (0, n.jsx)(s.EctoErrorBoundary, {
                                      surface: ec.HATCH_SENTRY_SURFACES.IDEAS_DEBUG,
                                      onError: cG.closeIdeasDebugPanel,
                                      children: (0, n.jsx)(r.Suspense, {
                                        fallback: null,
                                        children: (0, n.jsx)(uQ, {
                                          gatewayUrl: lo
                                        }, lo)
                                      })
                                    }), lS && null != lo && (0, n.jsx)(s.EctoErrorBoundary, {
                                      surface: ec.HATCH_SENTRY_SURFACES.NOISE_DEBUG,
                                      children: (0, n.jsx)(r.Suspense, {
                                        fallback: null,
                                        children: (0, n.jsx)(uZ, {
                                          gatewayUrl: lo
                                        }, lo)
                                      })
                                    }), null != lF && (0, n.jsx)(s.EctoErrorBoundary, {
                                      surface: ec.HATCH_SENTRY_SURFACES.CONNECT_DEEPLINK,
                                      resetKeys: [lF.action, lF.id],
                                      children: (0, n.jsx)(r.Suspense, {
                                        fallback: null,
                                        children: (0, n.jsx)(uV, {
                                          action: lF.action,
                                          id: lF.id
                                        })
                                      })
                                    }), rH && (0, n.jsx)(s.EctoErrorBoundary, {
                                      surface: ec.HATCH_SENTRY_SURFACES.SETTINGS,
                                      fallback: ({
                                        error: e,
                                        reset: t
                                      }) => (0, n.jsx)(eR.HatchContentErrorFallback, {
                                        error: e,
                                        onRetry: t
                                      }),
                                      children: (0, n.jsx)(tV.HatchSettingsDialog, {
                                        open: rE,
                                        onOpenChange: it,
                                        onShowOnboarding: () => {
                                          ew("/")
                                        },
                                        defaultTab: rG,
                                        defaultChannelDetail: rq,
                                        defaultGeneralSubView: r0,
                                        defaultPermissionScope: rZ,
                                        defaultPurchaseEntrypoint: r2,
                                        devToolsEnabled: la,
                                        onDevToolsEnabledChange: lr
                                      })
                                    }), rO && (0, n.jsx)(s.EctoErrorBoundary, {
                                      surface: ec.HATCH_SENTRY_SURFACES.SEARCH,
                                      fallback: ({
                                        error: e,
                                        reset: t
                                      }) => (0, n.jsx)(eR.HatchContentErrorFallback, {
                                        error: e,
                                        onRetry: t
                                      }),
                                      children: (0, n.jsx)(tL, {
                                        open: rj,
                                        onOpenChange: lV,
                                        children: (0, n.jsx)(r.Suspense, {
                                          fallback: (0, n.jsx)(tw, {}),
                                          children: (0, n.jsx)(uq, {
                                            onAskHatch: iz,
                                            onOpenConversationRoute: iO,
                                            onOpenSplitView: iR ? iH : void 0,
                                            open: rj,
                                            openFile: e => e3(e, {
                                              origin: "current"
                                            }),
                                            onOpenChange: lV
                                          })
                                        })
                                      })
                                    }), (0, n.jsx)(s.EctoErrorBoundary, {
                                      surface: ec.HATCH_SENTRY_SURFACES.CVM_PIN_REMINDER,
                                      children: (0, n.jsx)(uC, {})
                                    }), (0, n.jsx)(tB, {
                                      isOpen: eF.isOpen && e7,
                                      allowLibraryShare: eF.allowLibraryShare,
                                      shareMessageId: eF.shareMessageId,
                                      filePath: eF.filePath,
                                      fileName: eF.fileName,
                                      fileCategory: eF.fileCategory,
                                      media: eF.media,
                                      mediaNavigation: eF.mediaNavigation,
                                      isNavigatingMedia: eF.isNavigatingMedia,
                                      canNavigateMedia: eF.canNavigateMedia,
                                      navigateMedia: eF.navigateMedia,
                                      closeDialog: e4
                                    }), ta && (0, n.jsx)(sM, {
                                      isOpen: eF.isOpen,
                                      filePath: eF.filePath,
                                      fileName: eF.fileName,
                                      editedContent: eF.editedContent,
                                      isSaving: eF.isSaving,
                                      editorMode: eF.editorMode,
                                      fileCategory: eF.fileCategory,
                                      isBinaryFile: eF.isBinaryFile,
                                      closeDialog: e4,
                                      markdownFlushRef: eF.markdownFlushRef,
                                      setEditedContent: eF.setEditedContent,
                                      saveFile: eF.saveFile,
                                      setEditorMode: eF.setEditorMode
                                    }), (0, n.jsx)("div", {
                                      className: "contents",
                                      "data-hatch-shell-mobile-nav-hydration-guard": !0,
                                      inert: !o || ts && !ee || void 0,
                                      children: ts && (0, n.jsx)(s.EctoErrorBoundary, {
                                        onError: en,
                                        surface: ec.HATCH_SENTRY_SURFACES.NAVIGATION,
                                        children: (0, n.jsx)(r.Suspense, {
                                          fallback: (0, n.jsx)(u6, {}),
                                          children: (0, n.jsx)(u5, {
                                            onSettingsClick: lE,
                                            hasMessages: lG,
                                            libraryPath: ez,
                                            onHydrated: en
                                          })
                                        })
                                      })
                                    })]
                                  }), iE && (0, n.jsx)("div", {
                                    ref: aS,
                                    "data-hatch-shell-composer-layer": !0,
                                    "data-hatch-toast-pane-origin": ts ? void 0 : "chat",
                                    "data-hatch-status-modal-fade-target": "composer",
                                    "data-hatch-status-modal-fade-active": aH ? "true" : void 0,
                                    "data-hatch-shell-composer-transition": nj || nU || an ? "resize" : "snap",
                                    style: iA,
                                    className: (0, tk.cn)("pointer-events-none fixed z-[20] flex flex-col items-center overflow-visible transition-opacity duration-150", ts ? "px-3 pb-[calc(66px+env(safe-area-inset-bottom,0px))]" : "px-4"),
                                    children: (0, n.jsx)(s2.HatchChatColumn, {
                                      ref: aR,
                                      className: "pointer-events-auto",
                                      children: im ? (0, n.jsx)(s.EctoErrorBoundary, {
                                        surface: ec.HATCH_SENTRY_SURFACES.CHAT_CHANNEL,
                                        resetKeys: [nc],
                                        fallback: ({
                                          reset: e
                                        }) => (0, n.jsx)(uA, {
                                          isRetrying: nu.isFetching,
                                          onRetry: () => {
                                            e(), nu.refetch()
                                          }
                                        }),
                                        children: (0, n.jsx)(uE, {
                                          isRetrying: nu.isFetching,
                                          onRetry: () => {
                                            nu.refetch()
                                          }
                                        })
                                      }, nc) : ix && null != id && null != nc ? (0, n.jsx)(s.EctoErrorBoundary, {
                                        surface: ec.HATCH_SENTRY_SURFACES.CHAT_CHANNEL,
                                        resetKeys: [nc],
                                        fallback: (0, n.jsx)(uk, {}),
                                        children: (0, n.jsx)(ux, {
                                          channel: id,
                                          sessionId: nc
                                        })
                                      }, nc) : ik && null != nc ? (0, n.jsx)(s.EctoErrorBoundary, {
                                        surface: ec.HATCH_SENTRY_SURFACES.CHAT_CHANNEL,
                                        resetKeys: [nc],
                                        fallback: (0, n.jsx)(uI, {}),
                                        children: (0, n.jsx)(uP, {
                                          sessionId: nc
                                        })
                                      }, nc) : (0, n.jsx)(s.EctoErrorBoundary, {
                                        surface: ec.HATCH_SENTRY_SURFACES.CHAT_COMPOSER,
                                        fallback: ({
                                          error: e,
                                          reset: t
                                        }) => (0, n.jsx)(eR.HatchContentErrorFallback, {
                                          error: e,
                                          onRetry: t
                                        }),
                                        children: (0, n.jsx)(cp.HatchWorkspaceContextProvider, {
                                          value: ie,
                                          children: (0, n.jsx)(sm, {
                                            autoFocus: !ts && !t8,
                                            deferChrome: ih,
                                            disabled: ih,
                                            disabledPlaceholder: ih ? tm.fbs._("Checking conversation…", null, {
                                              hk: "2otBte"
                                            }) : void 0
                                          })
                                        })
                                      })
                                    })
                                  }), (0, n.jsx)(c_, {})]
                                }), eT && (0, n.jsxs)("div", {
                                  "data-hatch-setup-overlay": !0,
                                  className: "absolute inset-0 z-[60] overflow-x-hidden overflow-y-auto",
                                  children: [(0, n.jsx)("div", {
                                    "aria-hidden": !0,
                                    "data-hatch-setup-overlay-background": !0,
                                    className: "bg-bg-primary pointer-events-none fixed inset-0"
                                  }), (0, n.jsx)("div", {
                                    className: "relative min-h-full",
                                    children: (0, n.jsx)(cp.HatchWorkspaceContextProvider, {
                                      value: ie,
                                      children: t
                                    })
                                  })]
                                })]
                              })
                            })
                          })
                        })
                      })
                    }), !eT && la && (0, n.jsx)(s.EctoErrorBoundary, {
                      surface: ec.HATCH_SENTRY_SURFACES.DEVELOPER,
                      children: (0, n.jsx)(r.Suspense, {
                        fallback: null,
                        children: (0, n.jsx)(uJ, {
                          enabled: !0,
                          dockAnchor: ll,
                          onDockAnchorChange: li,
                          onOpenApiTest: () => lk("internal-settings"),
                          onOpenLatencyBench: () => rM(!0)
                        })
                      })
                    }), rL && (0, n.jsx)(r.Suspense, {
                      fallback: null,
                      children: (0, n.jsx)(u$, {
                        open: !0,
                        onClose: () => rM(!1)
                      })
                    })]
                  })
                })
              })
            })
          })]
        })
      })]
    })
  }

  function di(e) {
    let t, r, l, i = (0, a.c)(9),
      {
        adsDetailsPanel: o,
        flightPanel: s,
        placeDetailsPanel: c,
        children: u
      } = e;
    return i[0] !== o || i[1] !== u ? (t = (0, n.jsx)(sA.HatchAdsDetailsPanelContext.Provider, {
      value: o,
      children: u
    }), i[0] = o, i[1] = u, i[2] = t) : t = i[2], i[3] !== s || i[4] !== t ? (r = (0, n.jsx)(sk.HatchFlightPanelContext.Provider, {
      value: s,
      children: t
    }), i[3] = s, i[4] = t, i[5] = r) : r = i[5], i[6] !== c || i[7] !== r ? (l = (0, n.jsx)(sS.HatchPlaceDetailsPanelContext.Provider, {
      value: c,
      children: r
    }), i[6] = c, i[7] = r, i[8] = l) : l = i[8], l
  }

  function ds(e) {
    let t, l, i, o = (0, a.c)(5),
      {
        showHero: c
      } = e;
    return o[0] !== c ? (t = (0, n.jsx)(sH, {
      showHero: c
    }), o[0] = c, o[1] = t) : t = o[1], o[2] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)(uY, {}), o[2] = l) : l = o[2], o[3] !== t ? (i = (0, n.jsx)(s.EctoErrorBoundary, {
      surface: ec.HATCH_SENTRY_SURFACES.CHAT_ADS_ENTITY,
      fallback: dc,
      children: (0, n.jsx)(r.Suspense, {
        fallback: t,
        children: l
      })
    }), o[3] = t, o[4] = i) : i = o[4], i
  }

  function dc(e) {
    let {
      error: t,
      reset: a
    } = e;
    return (0, n.jsx)(eR.HatchContentErrorFallback, {
      error: t,
      onRetry: a
    })
  }

  function du(e) {
    let t, l, i, o, s, c = (0, a.c)(19),
      {
        rail: u,
        collapseSubsurface: d,
        toastPane: h,
        isOpen: f,
        chatCollapsed: m,
        onClose: p,
        resizeHandlers: g,
        children: v
      } = e;
    c[0] !== u ? (t = () => (function(e) {
      let t = localStorage.getItem(rZ(e));
      if (null == t) return null;
      let n = Number(t);
      return Number.isFinite(n) && n >= 320 ? n : null
    })(u), c[0] = u, c[1] = t) : t = c[1];
    let [C, y] = (0, r.useState)(t), [_, b] = (0, r.useState)(rJ);
    c[2] === Symbol.for("react.memo_cache_sentinel") ? (l = () => {
      let e = () => b(rJ());
      return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
    }, i = [], c[2] = l, c[3] = i) : (l = c[2], i = c[3]), (0, r.useEffect)(l, i);
    let S = `side-panel-${u}`,
      x = C ?? _;
    return c[4] !== _ || c[5] !== u ? (o = e => {
      (y(e === _ ? null : e), e === _) ? localStorage.removeItem(rZ(u)): localStorage.setItem(rZ(u), String(Math.round(e)))
    }, c[4] = _, c[5] = u, c[6] = o) : o = c[6], c[7] !== _ || c[8] !== m || c[9] !== v || c[10] !== d || c[11] !== f || c[12] !== p || c[13] !== g || c[14] !== S || c[15] !== x || c[16] !== o || c[17] !== h ? (s = (0, n.jsx)(lJ, {
      isOpen: f,
      chatCollapsed: m,
      storageKey: S,
      collapseSubsurface: d,
      controlledPanelWidth: x,
      controlledDefaultPanelWidth: _,
      controlledMinPanelWidth: 320,
      resizeHandlers: g,
      onControlledPanelWidthCommit: o,
      onClose: p,
      showDividerAtRest: !0,
      toastPane: h,
      children: v
    }), c[7] = _, c[8] = m, c[9] = v, c[10] = d, c[11] = f, c[12] = p, c[13] = g, c[14] = S, c[15] = x, c[16] = o, c[17] = h, c[18] = s) : s = c[18], s
  }

  function dd(e) {
    let t, l, i, o, s = (0, a.c)(13),
      {
        isOpen: c,
        isCompact: u,
        chatCollapsed: d,
        onClose: h,
        resizeHandlers: f,
        children: m
      } = e,
      [p, g] = (0, r.useState)(dh),
      [v, C] = (0, r.useState)(r1),
      [y, _] = (0, r.useState)(r2);
    s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
      let e = () => {
        C(r1()), _(r2())
      };
      return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
    }, l = [], s[0] = t, s[1] = l) : (t = s[0], l = s[1]), (0, r.useEffect)(t, l);
    let b = u ? y : v,
      S = p ?? b;
    return s[2] !== b ? (i = e => {
      if (e === b) g(null), localStorage.removeItem(r0);
      else g(e), localStorage.setItem(r0, String(Math.round(e)))
    }, s[2] = b, s[3] = i) : i = s[3], s[4] !== b || s[5] !== d || s[6] !== m || s[7] !== c || s[8] !== h || s[9] !== f || s[10] !== S || s[11] !== i ? (o = (0, n.jsx)(lJ, {
      isOpen: c,
      chatCollapsed: d,
      storageKey: "side-panel-shopping",
      collapseSubsurface: "shopping_panel",
      showDividerAtRest: !0,
      surfaceBackground: "primary",
      controlledPanelWidth: S,
      controlledDefaultPanelWidth: b,
      controlledMinPanelWidth: 320,
      resizeHandlers: f,
      onControlledPanelWidthCommit: i,
      onClose: h,
      children: m
    }), s[4] = b, s[5] = d, s[6] = m, s[7] = c, s[8] = h, s[9] = f, s[10] = S, s[11] = i, s[12] = o) : o = s[12], o
  }

  function dh() {
    let e = localStorage.getItem(r0);
    if (null == e) return null;
    let t = Number(e);
    return Number.isFinite(t) && t >= 320 ? t : null
  }

  function df(e) {
    let t, r = (0, a.c)(4),
      {
        admitted: l,
        children: i,
        pending: o,
        shellHydrated: s
      } = e,
      c = l ? void 0 : o,
      u = l ? i : null;
    return r[0] !== s || r[1] !== c || r[2] !== u ? (t = (0, n.jsx)(dn, {
      pending: c,
      shellHydrated: s,
      children: u
    }), r[0] = s, r[1] = c, r[2] = u, r[3] = t) : t = r[3], t
  }
  e.s(["HatchShellRouteContent", 0, function(e) {
    let t, r = (0, a.c)(3),
      {
        children: l
      } = e,
      {
        postContentBootstrapViewerKey: i
      } = (0, tf.useHatchAppRouterBootstrap)();
    return r[0] !== l || r[1] !== i ? (t = (0, n.jsx)(tn, {
      postContentBootstrapViewerKey: i,
      shellRouteFrame: df,
      children: l
    }), r[0] = l, r[1] = i, r[2] = t) : t = r[2], t
  }], 154006)
}]);

//# debugId=c285acd9-0231-0b06-a3de-f122613f746f
//# sourceMappingURL=2efqt1id2886u.js.map