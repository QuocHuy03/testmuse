;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "857b2492-ca2a-618a-964d-779e6d6e4d0b")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 585152, e => {
  "use strict";
  var t = e.i(519172),
    r = e.i(896634);
  e.s(["useTheme", 0, () => {
    let e = (0, t.useContext)(r.ThemeProviderContext);
    if (void 0 === e) throw Error("useTheme must be used within a ThemeProvider");
    return e
  }])
}, 845558, e => {
  "use strict";
  var t = e.i(519172);

  function r(e) {
    return e + 1
  }
  e.s(["useRisingEdgeCount", 0, function(e) {
    let [a, n] = (0, t.useState)(e), [i, l] = (0, t.useState)(0), u = e && !a;
    return e !== a && (n(e), u && l(r)), u ? i + 1 : i
  }])
}, 963910, e => {
  "use strict";
  let t = "hatch_vm",
    r = "hatch_gateway_url",
    a = {
      kind: "default"
    };

  function n(e) {
    let t = e?.trim() ?? "";
    return t.length > 0 ? t : null
  }

  function i(e) {
    return /^[a-zA-Z][a-zA-Z\d+.-]*:/.test(e)
  }

  function l(e) {
    let l = function(e) {
      if (null == e) return null;
      if (e instanceof URLSearchParams) return e;
      if (e instanceof URL) return e.searchParams;
      let t = e.trim();
      return 0 === t.length ? null : t.startsWith("?") ? new URLSearchParams(t.slice(1)) : t.startsWith("/") || i(t) ? new URL(t, "https://hatch.invalid").searchParams : new URLSearchParams(t)
    }(e);
    if (null == l) return a;
    let u = n(l.get(r));
    if (null != u) return {
      kind: "gatewayUrl",
      gatewayUrl: u
    };
    let s = n(l.get(t)) ?? n(l.get("vm"));
    return null != s ? {
      kind: "vmName",
      vmName: s
    } : a
  }

  function u(e) {
    let a = new URLSearchParams;
    switch (e.kind) {
      case "vmName":
        a.set(t, e.vmName);
        break;
      case "gatewayUrl":
        a.set(r, e.gatewayUrl)
    }
    return a
  }

  function s(e, a) {
    if ("default" === a.kind) return e;
    let n = new URL(e, "https://hatch.invalid");
    for (let [e, i] of(n.searchParams.delete(t), n.searchParams.delete("vm"), n.searchParams.delete(r), u(a))) n.searchParams.set(e, i);
    return i(e) ? n.toString() : `${n.pathname}${n.search}${n.hash}`
  }
  e.s(["HATCH_GATEWAY_URL_QUERY_PARAM", 0, r, "HATCH_VM_QUERY_PARAM", 0, t, "appendHatchGatewayQueryOverride", 0, function(e, t) {
    return s(e, l(t))
  }, "applyHatchGatewayTargetToPath", 0, s, "applyHatchGatewayTargetToReturnTo", 0, function(e, t) {
    if ("default" === t.kind) return e;
    let r = i(e),
      a = new URL(e, "https://hatch.invalid"),
      l = n(a.searchParams.get("return_to"));
    null != l && l.startsWith("/") && a.searchParams.set("return_to", s(l, t));
    let u = n(a.searchParams.get("return_uri"));
    return null != u && (u.startsWith("/") || i(u)) && a.searchParams.set("return_uri", s(u, t)), r ? a.toString() : `${a.pathname}${a.search}${a.hash}`
  }, "hatchGatewayTargetToSearchParams", 0, u, "parseHatchGatewayTarget", 0, l, "resolveHatchGatewayTarget", 0, function(e, t) {
    let r = l(e);
    return "default" !== r.kind ? r : l(t)
  }])
}, 390808, e => {
  "use strict";
  var t = e.i(984416),
    r = e.i(722099),
    a = e.i(519172),
    n = e.i(984345),
    i = e.i(438451);
  let l = (0, a.createContext)(null);
  e.s(["HatchChatRouteContextProvider", 0, function(e) {
    let a, n, i = (0, r.c)(8),
      {
        activeChatRoute: u,
        baseChatRoute: s,
        children: o,
        clearRouteOverride: c,
        registerRouteOverride: d
      } = e,
      f = void 0 === s ? u : s;
    i[0] !== u || i[1] !== c || i[2] !== d || i[3] !== f ? (a = {
      activeChatRoute: u,
      baseChatRoute: f,
      clearRouteOverride: c,
      registerRouteOverride: d
    }, i[0] = u, i[1] = c, i[2] = d, i[3] = f, i[4] = a) : a = i[4];
    let h = a;
    return i[5] !== o || i[6] !== h ? (n = (0, t.jsx)(l.Provider, {
      value: h,
      children: o
    }), i[5] = o, i[6] = h, i[7] = n) : n = i[7], n
  }, "useBaseHatchChatRoute", 0, function() {
    return (0, a.useContext)(l)?.baseChatRoute ?? null
  }, "useClearChatRouteOverride", 0, function() {
    return (0, a.useContext)(l)?.clearRouteOverride ?? null
  }, "useEffectiveHatchChatRoute", 0, function() {
    let e, t = (0, r.c)(3),
      u = (0, a.useContext)(l),
      s = (0, n.useOptionalAppRouterRouteContext)(),
      o = s?.location.pathname ?? window.location.pathname;
    return t[0] !== u?.activeChatRoute || t[1] !== o ? (e = u?.activeChatRoute ?? (0, i.resolveEffectiveHatchChatRoute)(o), t[0] = u?.activeChatRoute, t[1] = o, t[2] = e) : e = t[2], e
  }, "useHatchChatRouteFromContext", 0, function() {
    return (0, a.useContext)(l)?.activeChatRoute ?? null
  }, "useRegisterChatRouteOverride", 0, function() {
    return (0, a.useContext)(l)?.registerRouteOverride ?? null
  }])
}, 62822, e => {
  "use strict";
  var t = e.i(519172);
  let r = (0, t.createContext)(!1);
  e.s(["HatchPostContentSafetyContext", 0, r, "useHatchPostContentSafetyReady", 0, function() {
    return (0, t.useContext)(r)
  }])
}, 195714, e => {
  "use strict";
  var t = e.i(519172);
  let r = new Map,
    a = new Map,
    n = 0,
    i = new Set;

  function l() {
    return n
  }

  function u(e) {
    return i.add(e), () => {
      i.delete(e)
    }
  }

  function s(e, t) {
    r.set(e, {
      height: t,
      width: n
    })
  }

  function o(e) {
    let t = r.get(e);
    return null == t ? {
      height: 160,
      isExact: !1
    } : {
      height: t.height,
      isExact: t.width === n
    }
  }
  let c = 0,
    d = new Map,
    f = null,
    h = !1,
    g = new Set,
    p = new Set;

  function y(e) {
    return p.add(e), () => {
      p.delete(e)
    }
  }

  function m(e) {
    d.delete(e), 0 === d.size && null != f && (clearTimeout(f), f = null)
  }

  function w() {
    if (f = null, h) return;
    let e = [...d.values()];
    for (let t of (d.clear(), e)) t()
  }
  let I = null,
    C = null,
    v = new Map;

  function _(e, t) {
    v.set(e, t), (null == C && (C = new IntersectionObserver(e => {
      for (let t of e) {
        let e = v.get(t.target);
        e?.(t)
      }
    }, {
      root: I,
      rootMargin: "1000px"
    })), C).observe(e)
  }

  function R(e) {
    v.delete(e), C?.unobserve(e), 0 === v.size && null != C && (C.disconnect(), C = null)
  }
  e.s(["PINNED_TAIL_COUNT", 0, 8, "clearHeightCache", 0, function() {
    r.clear(), a.clear(), null != f && (clearTimeout(f), f = null), d.clear(), h = !1, g = new Set
  }, "getMountedContentCount", 0, function() {
    return c
  }, "pruneHeightCache", 0, function(e) {
    let t = new Set(e);
    for (let e of a.values())
      for (let r of e) t.add(r);
    for (let e of r.keys()) t.has(e) || r.delete(e)
  }, "releaseHeightCacheScope", 0, function(e) {
    a.delete(e)
  }, "retainHeightCacheScope", 0, function(e, t) {
    a.set(e, new Set(t))
  }, "setContentVirtualizationHeldMessageIds", 0, function(e) {
    let t = new Set(e);
    if (!(t.size === g.size && [...t].every(e => g.has(e))))
      for (let e of (g = t, [...p])) e()
  }, "setContentVirtualizationRoot", 0, function(e) {
    if (e !== I && (I = e, null != C)) {
      let e = new Map(v);
      for (let [t, r] of(C.disconnect(), C = null, e)) _(t, r)
    }
  }, "setContentVirtualizationSwapsSuspended", 0, function(e) {
    if (h !== e) {
      if (h = e, e) {
        null != f && (clearTimeout(f), f = null);
        return
      }
      d.size > 0 && (f = setTimeout(w, 200))
    }
  }, "setContentVirtualizationWidth", 0, function(e) {
    if (!(e <= 0) && e !== n)
      for (let t of (n = e, [...i])) t()
  }, "useContentVirtualization", 0, function(e, a) {
    let n = a?.pinned ?? !1,
      [i, p] = (0, t.useState)(() => !!(n || g.has(e)) || !r.has(e) && "hidden" !== document.visibilityState),
      I = (0, t.useSyncExternalStore)(y, () => g.has(e), () => !1),
      C = n || I,
      v = (0, t.useRef)(null),
      S = (0, t.useRef)(e);
    S.current = e;
    let b = (0, t.useRef)(C);
    b.current = C;
    let x = (0, t.useRef)(null),
      E = (0, t.useRef)(i);
    E.current = i;
    let T = (0, t.useRef)(!1),
      [A, H] = (0, t.useState)(n),
      [P, U] = (0, t.useState)(!1),
      K = (0, t.useCallback)(e => {
        let t = v.current;
        null != t && R(t), v.current = e, T.current = !1, x.current = null, U(!1), null != e && _(e, e => {
          if (x.current = e.isIntersecting, e.isIntersecting) T.current = !0, U(!1), H(!0), m(S.current), p(!0);
          else {
            if (!T.current) {
              if (U(!0), !b.current) {
                if (E.current) {
                  let t = e.target.getBoundingClientRect().height;
                  t > 0 && s(S.current, t)
                }
                p(!1)
              }
              return
            }
            if (U(!1), b.current) return;
            let r = e.target.getBoundingClientRect().height;
            if (r > 0) {
              var t;
              s(S.current, r), t = S.current, d.set(t, () => p(!1)), h || (null != f && clearTimeout(f), f = setTimeout(w, 200))
            }
          }
        })
      }, []),
      L = !C && P,
      k = C || !L && i,
      G = (0, t.useSyncExternalStore)(u, l, () => 0);
    return (0, t.useEffect)(() => {
      if (!k || G <= 0 || o(e).isExact) return;
      let t = v.current;
      if (null == t) return;
      let r = t.getBoundingClientRect().height;
      r > 0 && s(e, r)
    }, [G, k, e]), (0, t.useEffect)(() => {
      if (C) return void m(S.current);
      let e = !1 === x.current,
        t = "u" > typeof document && "hidden" === document.visibilityState && !0 !== x.current;
      if (!e && !t) return;
      m(S.current);
      let r = v.current;
      if (T.current && null != r) {
        let e = r.getBoundingClientRect().height;
        e > 0 && s(S.current, e)
      }
      p(!1)
    }, [C]), (0, t.useEffect)(() => {
      if (k) return c += 1, () => {
        c -= 1
      }
    }, [k]), (0, t.useEffect)(() => () => {
      m(S.current);
      let e = v.current;
      null != e && R(e)
    }, []), {
      shellRef: K,
      isContentVisible: k,
      placeholderHeight: o(e).height,
      hasBeenInView: A
    }
  }])
}, 438451, e => {
  "use strict";
  var t = e.i(304117);
  let r = "/thread",
    a = `${r}/new`,
    n = "goal",
    i = "goal_intent",
    l = {
      kind: "main"
    },
    u = {
      kind: "draft"
    };

  function s(e) {
    if ("/" === e) return l;
    if (!e.startsWith(`${r}/`)) return null;
    let t = e.slice(r.length + 1),
      a = function(e) {
        try {
          let t = decodeURIComponent(e).trim();
          return t.length > 0 ? t : null
        } catch {
          return null
        }
      }(t);
    return "new" === a ? u : "main" === a ? l : null == a ? {
      kind: "invalid_thread",
      rawSessionId: t
    } : {
      kind: "thread",
      sessionId: a
    }
  }

  function o(e) {
    return `${r}/${encodeURIComponent(e)}`
  }
  e.s(["HATCH_DRAFT_CHAT_ROUTE", 0, u, "HATCH_DRAFT_THREAD_PATH", 0, a, "HATCH_MAIN_CHAT_PATH", 0, "/", "HATCH_MAIN_CHAT_ROUTE", 0, l, "HATCH_THREAD_GOAL_ID_PARAM", 0, n, "HATCH_THREAD_GOAL_INTENT_PARAM", 0, i, "buildHatchGoalThreadPath", 0, function(e, t, r = "discuss") {
    let a = t.trim(),
      l = o(e);
    if (0 === a.length) return l;
    let u = new URLSearchParams({
      [n]: a
    });
    return "discuss" !== r && u.set(i, r), `${l}?${u.toString()}`
  }, "buildHatchThreadPath", 0, o, "getHatchActiveSpaceSlug", 0, function(e, r) {
    return (0, t.getArtifactViewerSlug)(e)
  }, "getHatchChatRouteKey", 0, function(e) {
    if (null == e) return null;
    switch (e.kind) {
      case "main":
        return "main";
      case "draft":
        return "draft";
      case "thread":
        return `thread:${e.sessionId}`;
      case "invalid_thread":
        return `invalid_thread:${e.rawSessionId}`
    }
  }, "getHatchChatRoutePath", 0, function(e) {
    switch (e?.kind) {
      case "draft":
        return a;
      case "thread":
        return o(e.sessionId);
      case "invalid_thread":
      case "main":
      case void 0:
        return "/"
    }
  }, "parseHatchChatRoute", 0, s, "resolveEffectiveHatchChatRoute", 0, function(e) {
    let r = s(e);
    return null != r ? r : (0, t.isHatchShellPathname)(e) ? l : null
  }])
}, 281851, e => {
  "use strict";
  let t = "hatch:debug:onboarding-variant";

  function r() {
    try {
      return window.localStorage
    } catch {
      return null
    }
  }
  e.s(["HATCH_ONBOARDING_VARIANT_STORAGE_KEY", 0, t, "UI_DRIVEN_ONBOARDING_VARIANT", 0, "ui_driven", "clearSelectedOnboardingVariant", 0, function() {
    let e = r();
    if (e) try {
      e.removeItem(t)
    } catch {}
  }, "setSelectedOnboardingVariant", 0, function(e) {
    let a = r();
    if (a) try {
      a.setItem(t, e)
    } catch {}
  }])
}, 921192, e => {
  "use strict";
  var t = e.i(389409);
  let r = [".fbcdn.net", ".fbsbx.com", ".cdninstagram.com", ".cdn.whatsapp.net", ".meta.ai", ".gstatic.com", ".h.metaaiusercontent.com", ".s.metaaiusercontent.com", ".cf.metaaiusercontent.com", ".cf.ecto1usercontent.com"],
    a = ["www.facebook.com", "www.at-od.facebook.com", "www.google.com"],
    n = "external-url-base.invalid";

  function i(e) {
    try {
      let t = new URL(e, `https://${n}`);
      if ("https:" !== t.protocol || t.hostname === n) return null;
      return t
    } catch {
      return null
    }
  }
  e.s(["proxyExternalImageUrl", 0, function(e) {
    let n, l = i(e);
    return null == l ? e : (0, t.isHatchVmGatewayHostname)(l.hostname) ? null : (n = l.hostname.toLowerCase(), a.includes(n) || r.some(e => n.endsWith(e))) ? e : `/api/image-proxy?url=${encodeURIComponent(l.href)}`
  }, "proxyPrivateExternalImageUrl", 0, function(e) {
    let r = i(e);
    return null == r ? e : (0, t.isHatchVmGatewayHostname)(r.hostname) ? null : `/api/image-proxy?url=${encodeURIComponent(r.href)}&cache=private`
  }])
}, 867258, 281918, e => {
  "use strict";
  var t = e.i(170525),
    r = e.i(925301),
    a = e.i(359783),
    n = e.i(790170),
    i = e.i(354385);

  function l(e) {
    return e ? {
      iconPalette: "color"
    } : {}
  }
  var u = e.i(863641),
    s = e.i(281851),
    o = e.i(399172),
    c = e.i(228750);
  let d = {
    all: ["exploreIdeas"],
    list: (e, t, r = !1) => ["exploreIdeas", e, "list", t ?? "default", {
      colorIcons: r
    }],
    infiniteList: (e, t, r = !1) => ["exploreIdeas", e, "infiniteList", t ?? "default", {
      colorIcons: r
    }],
    detail: (e, t, r = !1) => ["exploreIdeas", e, "detail", t, {
      colorIcons: r
    }],
    card: (e, t, r = !1) => ["exploreIdeas", e, "card", t, {
      colorIcons: r
    }],
    preview: (e, t, r = !1) => ["exploreIdeas", e, "preview", t, {
      colorIcons: r
    }]
  };

  function f(e, t = {}) {
    let r = t.colorIcons ?? !1,
      a = d.infiniteList((0, o.getGatewayRenderQueryScopeKey)(e), t.pageSize, r),
      n = {
        ...l(r)
      };
    null != t.pageSize && (n.pageSize = t.pageSize);
    let i = {
      version: 1,
      queryKey: a,
      sourceKey: JSON.stringify(a),
      staleTimeMs: 3e4,
      targetKey: e.targetKey,
      request: {
        method: "api.idea-cards.list",
        params: n,
        resultMode: "raw"
      },
      dependency: {
        queryKey: (0, c.buildOnboardingStartQueryKey)(e.targetKey),
        skipWhen: {
          field: "variant",
          equals: s.UI_DRIVEN_ONBOARDING_VARIANT
        }
      }
    };
    return {
      descriptor: i,
      queryKey: a,
      sourceKey: i.sourceKey
    }
  }
  e.s(["EXPLORE_IDEAS_SECTION_PAGE_SIZE", 0, 6, "bindExploreIdeasListGatewayQuery", 0, f, "exploreIdeasQueryKeys", 0, d], 281918);
  let h = (0, a.createClientLogger)("ExploreIdeasQueries");

  function g(e) {
    return e.gatewayScopeKey ?? e.gatewayUrl
  }

  function p(e) {
    if ("string" != typeof e) return null;
    let t = e.trim();
    return 0 === t.length ? null : t
  }

  function y(e) {
    return Array.isArray(e) ? e : []
  }

  function m(e) {
    return "object" == typeof e && null != e && !Array.isArray(e)
  }

  function w(e, t) {
    return "boolean" == typeof e ? e : t
  }

  function I() {
    return {
      ideas: [],
      groups: [],
      heroIdeaIds: [],
      subtitle: null,
      showNullStateMessage: !1,
      pagination: {
        nextCursor: null,
        hasNextPage: !1
      }
    }
  }

  function C(e) {
    return m(e) ? {
      streamOwnerMessageId: p(e.streamOwnerMessageId ?? e.stream_owner_message_id),
      channel: p(e.channel),
      sessionId: p(e.sessionId ?? e.session_id),
      isThread: w(e.isThread ?? e.is_thread, !1)
    } : null
  }

  function v(e) {
    let t = p(e);
    switch (t) {
      case "not_started":
      case "in_progress":
      case "complete":
      case "success":
      case "failed":
        return t;
      default:
        return null
    }
  }

  function _(e) {
    return m(e) ? e : {}
  }

  function R(e, t) {
    for (let r of e)
      if (m(r) && p(r.role)?.toLowerCase() === t) return p(r.text);
    return null
  }

  function S(e) {
    if (!m(e)) return null;
    for (let t of y(e.variants)) {
      if (!m(t)) continue;
      let e = p(t.url);
      if (null != e) return e
    }
    return null
  }

  function b(e, t) {
    if (!m(e)) return null;
    for (let r of y(e.variants))
      if (m(r) && p(r.role) === t) return p(r.url);
    return null
  }

  function x(e, r) {
    if (!m(e)) return null;
    let a = p(e.id);
    if (null == a) return null;
    let n = _(e.content),
      i = _(e.presentation),
      l = y(i.labels),
      u = y(i.badges).map(e => m(e) ? p(e.text) : p(e)).filter(e => null != e),
      s = p(n.title) ?? "",
      o = p(n.summary) ?? "",
      c = v(e.buildStatus ?? e.build_status),
      d = i.previewImage,
      f = i.icon;
    return {
      idea: {
        id: a,
        title: s,
        description: o,
        sourceLabel: (0, t.sanitizeIdeaLabel)(R(l, "primary") ?? ""),
        dateLabel: (0, t.sanitizeIdeaLabel)(R(l, "secondary") ?? ""),
        imageUrl: S(d),
        imageOriginalUrl: b(d, "original"),
        imageAlt: s,
        iconUrl: b(f, "original") ?? S(f),
        capabilities: function(e) {
          let t = [];
          if (e.length > 1) {
            let r = 0;
            for (let t of e) {
              let e = t.match(/^(\d+)\s/);
              r += e?.[1] != null ? parseInt(e[1], 10) : 1
            }
            t.push({
              kind: "count",
              count: r
            })
          } else if (1 === e.length) {
            let r = e[0] ?? "",
              a = r.match(/^1\s+(.+)$/),
              n = a?.[1];
            null != n ? t.push({
              kind: "label",
              label: n.charAt(0).toUpperCase() + n.slice(1)
            }) : t.push({
              kind: "label",
              label: r
            })
          }
          return t
        }(u),
        groupIds: [],
        sharing: (0, t.normalizeHatchIdeaSharing)(e.sharing),
        isFeatured: !!r || void 0,
        actionLabel: p(i.actionLabel) ?? void 0,
        buildStatus: c ?? void 0,
        buildSummary: p(n.buildSummary)
      }
    }
  }

  function E(e) {
    var t;
    if (!m(e)) return I();
    let r = m(e.result) ? e.result : e;
    if (!m(r)) return I();
    let a = [],
      n = new Set,
      i = [],
      l = [],
      u = null,
      s = _(r.viewerState ?? r.viewer_state),
      o = w(s.hasBuiltIdea ?? s.has_built_idea, !0),
      c = m(t = r.pagination) ? {
        nextCursor: p(t.nextCursor ?? t.next_cursor),
        hasNextPage: w(t.hasNextPage ?? t.has_next_page, !1)
      } : {
        nextCursor: null,
        hasNextPage: !1
      };
    for (let e of y(r.sections)) {
      let t = function(e) {
        if (!m(e)) return null;
        let t = p(e.id);
        if (null == t) return null;
        let r = _(e.presentation),
          a = "hero" === p(r.layout)?.toLowerCase(),
          n = y(e.cards).map(e => x(e, a)).filter(e => null != e);
        return {
          sectionId: t,
          title: p(e.title) ?? "",
          subtitle: p(e.subtitle),
          isHero: a,
          cards: n
        }
      }(e);
      if (null == t) continue;
      t.isHero && null == u && (u = t.subtitle);
      let r = [];
      for (let {
          idea: e
        }
        of t.cards) {
        if (t.isHero) {
          !n.has(e.id) && l.length < 4 && (l.push(e.id), n.add(e.id)), a.push(e);
          continue
        }
        n.has(e.id) || (r.push(e.id), a.push(e))
      }!t.isHero && r.length > 0 && i.push({
        id: t.sectionId,
        title: t.title,
        subtitle: t.subtitle,
        ideaIds: r
      })
    }
    let d = new Map;
    for (let e of i)
      for (let t of e.ideaIds) {
        let r = d.get(t) ?? [];
        r.push(e.id), d.set(t, r)
      }
    for (let e of a) {
      let t = d.get(e.id);
      null != t && (e.groupIds = t)
    }
    return {
      ideas: a,
      groups: i,
      heroIdeaIds: l,
      subtitle: u,
      showNullStateMessage: !o,
      pagination: c
    }
  }

  function T(e) {
    let t = p(e)?.toLowerCase();
    switch (t) {
      case "space":
      case "reminder":
      case "data_source":
      case "goal":
      case "task":
      case "skill":
      case "search":
      case "image":
      case "document":
      case "idea":
        return t;
      case "research":
      case "discovery":
        return "search";
      case "visual":
        return "image";
      case "recurring task":
        return "reminder";
      case "audio":
        return "skill";
      default:
        return "unknown"
    }
  }

  function A(e) {
    if (!m(e)) return null;
    let t = m(e.result) ? e.result : e,
      r = m(t) ? t.card : null;
    return x(r, !1)?.idea ?? null
  }

  function H(e) {
    if (!m(e)) return null;
    let t = m(e.result) ? e.result : e,
      r = m(t) ? t.card : null;
    if (!m(r)) return null;
    let a = p(r.id);
    if (null == a) return null;
    let n = _(r.content),
      i = _(r.presentation),
      l = i.previewImage,
      u = [];
    for (let e of y(r.items)) {
      let t = function(e) {
        if (!m(e)) return null;
        let t = p(e.id);
        if (null == t) return null;
        let r = _(e.content),
          a = _(e.presentation),
          n = p(r.title);
        if (null == n) return null;
        let i = a.previewImage;
        return {
          id: t,
          kind: T(e.type),
          title: n,
          body: p(r.summary),
          buildSummary: p(r.buildSummary),
          previewImageUrl: S(i),
          previewImageOriginalUrl: b(i, "original"),
          tone: null,
          selectable: w(e.selectable, !0),
          isSelected: w(e.isSelected, !0)
        }
      }(e);
      null != t && u.push(t)
    }
    let s = i.icon;
    return {
      ideaCardId: a,
      imageUrl: b(l, "original") ?? S(l),
      iconUrl: b(s, "original") ?? S(s),
      fitReason: p(n.fitReason),
      buildSummary: p(n.buildSummary),
      activityItems: u,
      buildStatus: v(r.buildStatus ?? r.build_status)
    }
  }

  function P(e, t) {
    let r = m(e) ? m(e.result) ? e.result : e : {},
      a = p(r.status);
    return {
      success: "queued" === a || "accepted" === a,
      ideaCardId: p(r.cardId ?? r.card_id) ?? t,
      builtAtUtc: null,
      chat: C(r.chat)
    }
  }
  async function U(e, t, r, a = {}) {
    let n = null != t && t.length > 0 ? {
      mode: "selectedItems",
      itemIds: t
    } : {
      mode: "full"
    };
    return P(await r("api.idea-cards.execute", {
      ideaCardId: e,
      ...n,
      ...null != a.sessionId && {
        session_id: a.sessionId
      }
    }), e)
  }
  let K = /^https:\/\/[^/]/i,
    L = /[\s\p{Cc}\\]/u;

  function k(e) {
    return b(e, "original") ?? S(e)
  }
  async function G(e, t) {
    let r = await t("api.idea-cards.share", {
        ideaCardId: e
      }),
      a = m(r) ? m(r.result) ? r.result : r : null,
      n = p(a?.shareableIdeaId ?? a?.shareable_idea_id),
      i = a?.shareUrl ?? a?.share_url;
    if (null == a || null == n || "string" != typeof i || 0 === i.trim().length) throw Error("Idea share response did not contain a shareable id and URL");
    let l = function(e) {
      let t;
      if (!K.test(e) || L.test(e)) return null;
      try {
        t = new URL(e)
      } catch {
        return null
      }
      return "https:" !== t.protocol || 0 === t.hostname.length || t.username.length > 0 || t.password.length > 0 ? null : e
    }(i);
    if (null == l) throw Error("Idea share response URL was not an https link");
    return {
      shareableIdeaId: n,
      shareUrl: l,
      card: function(e) {
        let t = e.card;
        if (null == t) {
          let t = p(e.title);
          if (null == t) throw Error("Idea share response did not contain a card title");
          return {
            title: t,
            summary: p(e.summary),
            icon: k(_(e.presentation).icon)
          }
        }
        if (!m(t)) throw Error("Idea share response contained a malformed card");
        let r = _(t.content),
          a = p(t.title) ?? p(r.title);
        if (null == a) throw Error("Idea share response contained a card without a title");
        return {
          title: a,
          summary: p(t.summary) ?? p(r.summary),
          icon: k(_(t.presentation).icon) ?? k(t.icon)
        }
      }(a)
    }
  }
  async function O(e, t, r, a) {
    await a("api.ideas.engagement", {
      id: e,
      event_type: t,
      surface: r.surface ?? "explore_feed",
      ...null != r.metadata ? {
        metadata: r.metadata
      } : {}
    })
  }
  async function N(e, t, r, a) {
    let n = a.reason?.trim() ?? "";
    await r("api.ideas.feedback", {
      id: e,
      feedback: "up" === t ? "feedback_up" : "feedback_down",
      ...n.length > 0 ? {
        reason: n
      } : {},
      metadata: {
        surface: a.surface ?? "explore_feed",
        source: a.source
      }
    })
  }

  function z(e) {
    return (0, r.isGatewayRequestError)(e) && ("not_found" === e.code || 404 === e.httpStatus)
  }
  let M = (0, n.createGatewayQuery)({
      id: "exploreIdeas.list",
      queryKey: e => d.list(g(e), e.pageSize, e.colorIcons ?? !1),
      noiseFn: async (e, t) => {
        let r = {
          ...l(t.colorIcons ?? !1)
        };
        return null != t.pageSize && (r.pageSize = t.pageSize), E(await e.sendRequest("api.idea-cards.list", r))
      },
      invalidationKey: () => d.all,
      staleTime: 3e4
    }),
    Q = (0, n.createGatewayInfiniteQuery)({
      id: "exploreIdeas.list",
      queryKey: e => d.infiniteList(g(e), e.pageSize, e.colorIcons ?? !1),
      noiseFn: async (e, t, r) => {
        let a = {
          ...l(t.colorIcons ?? !1)
        };
        return null != t.pageSize && (a.pageSize = t.pageSize), "string" == typeof r && r.length > 0 && (a.pageCursor = r), E(await e.sendRequest("api.idea-cards.list", a))
      },
      invalidationKey: () => d.all,
      initialPageParam: null,
      earlyPreload: (e, t, r) => null !== r ? null : {
        sourceKey: f({
          gatewayUrl: e.gatewayUrl,
          gatewayScopeKey: e.gatewayScopeKey ?? void 0,
          targetKey: t.targetKey
        }, {
          pageSize: e.pageSize,
          colorIcons: e.colorIcons
        }).sourceKey,
        transform: E
      },
      getNextPageParam: e => e.pagination.hasNextPage && null != e.pagination.nextCursor ? e.pagination.nextCursor : void 0,
      staleTime: 3e4
    }),
    q = (0, n.createGatewayQuery)({
      id: "exploreIdeas.detail",
      queryKey: e => d.detail(g(e), e.ideaCardId, e.colorIcons ?? !1),
      noiseFn: async (e, t) => H(await e.sendRequest("api.idea-cards.detail", {
        ideaCardId: t.ideaCardId,
        ...l(t.colorIcons ?? !1)
      })),
      invalidationKey: () => d.all,
      staleTime: 6e4
    }),
    V = (0, n.createGatewayQuery)({
      id: "exploreIdeas.card",
      queryKey: e => d.card(g(e), e.ideaCardId, e.colorIcons ?? !1),
      noiseFn: async (e, t) => A(await e.sendRequest("api.idea-cards.detail", {
        ideaCardId: t.ideaCardId,
        ...l(t.colorIcons ?? !1)
      })),
      invalidationKey: () => d.all,
      staleTime: 6e4
    }),
    D = (0, n.createGatewayQuery)({
      id: "exploreIdeas.preview",
      queryKey: e => d.preview(g(e), e.ideaCardId, e.colorIcons ?? !1),
      noiseFn: async (e, t) => {
        let r = await e.sendRequest("api.idea-cards.detail", {
            ideaCardId: t.ideaCardId,
            ...l(t.colorIcons ?? !1)
          }).catch(e => {
            throw e instanceof Error && z(e) && ((0, i.markHatchErrorHandled)(e), h.retainForBugReport("warn", "Linked idea is no longer available")), e
          }),
          a = A(r),
          n = H(r);
        return null == a || null == n ? (h.retainForBugReport("warn", "Linked idea is no longer available"), null) : {
          idea: a,
          detail: n
        }
      },
      invalidationKey: () => d.all,
      staleTime: 6e4,
      meta: {
        sentrySurface: u.HATCH_SENTRY_SURFACES.IDEAS
      }
    });
  e.s(["EXPLORE_IDEAS_HERO_LIMIT", 0, 4, "__exploreIdeasTestables", 0, {
    normalizeActivityItemKind: T,
    normalizeExploreIdeaExecuteChat: C,
    extractV2ExploreIdeas: E,
    extractV2ExploreIdeaDetail: H,
    extractV2ExecuteResponse: P
  }, "classifyExploreIdeaShareError", 0, function(e) {
    return (0, r.isGatewayRequestError)(e) ? "idea_not_shareable" === e.code ? "not_shareable" : "idea_share_unavailable" === e.code ? "retryable" : "unknown" : "unknown"
  }, "executeExploreIdeaCard", 0, U, "exploreIdeaCardQuery", 0, V, "exploreIdeaDetailQuery", 0, q, "exploreIdeaPreviewQuery", 0, D, "exploreIdeasInfiniteQuery", 0, Q, "exploreIdeasListQuery", 0, M, "extractV2ExploreIdeaCard", 0, A, "extractV2ExploreIdeaDetail", 0, H, "extractV2ExploreIdeas", 0, E, "isMissingIdeaError", 0, z, "mergeExploreIdeasPages", 0, function(e) {
    if (0 === e.length) return I();
    let t = new Map,
      r = new Map,
      a = [],
      n = new Set,
      i = null;
    for (let l of e) {
      for (let e of (null == i && (i = l.subtitle), l.heroIdeaIds)) n.has(e) || (n.add(e), a.push(e));
      for (let e of l.ideas) t.has(e.id) || t.set(e.id, {
        ...e,
        groupIds: []
      });
      for (let e of l.groups) {
        let t = r.get(e.id);
        if (null == t) {
          r.set(e.id, {
            ...e,
            ideaIds: [...e.ideaIds]
          });
          continue
        }
        let a = new Set(t.ideaIds);
        for (let r of e.ideaIds) a.has(r) || (a.add(r), t.ideaIds.push(r))
      }
    }
    for (let e of r.values())
      for (let r of e.ideaIds) {
        let a = t.get(r);
        null == a || a.groupIds.includes(e.id) || (a.groupIds = [...a.groupIds, e.id])
      }
    let l = e[e.length - 1];
    return {
      ideas: Array.from(t.values()),
      groups: Array.from(r.values()),
      heroIdeaIds: a,
      subtitle: i,
      showNullStateMessage: e[0]?.showNullStateMessage ?? !1,
      pagination: l?.pagination ?? {
        nextCursor: null,
        hasNextPage: !1
      }
    }
  }, "recordExploreIdeaEngagement", 0, O, "recordExploreIdeaFeedback", 0, N, "shareExploreIdeaCard", 0, G], 867258)
}, 399172, e => {
  "use strict";
  e.s(["getGatewayRenderQueryScopeKey", 0, function(e) {
    return e.gatewayScopeKey ?? e.gatewayUrl
  }])
}, 809204, e => {
  "use strict";
  var t = e.i(722099),
    r = e.i(849329),
    a = e.i(93512),
    n = e.i(975740),
    i = e.i(498565),
    l = e.i(175286),
    u = e.i(871157),
    s = e.i(228750);
  let o = ["hatch", "gateway-query-disabled"];
  e.s(["useGatewayQuery", 0, function(e, c) {
    let d, f, h, g, p, y = (0, t.c)(24);
    y[0] !== c ? (d = void 0 === c ? {} : c, y[0] = c, y[1] = d) : d = y[1];
    let m = d,
      {
        gatewayUrl: w,
        gatewayScopeKey: I,
        vmName: C,
        sendRequest: v
      } = (0, l.useHatchRpc)();
    y[2] !== I || y[3] !== w || y[4] !== e || y[5] !== C ? (f = e?.bind({
      gatewayUrl: w ?? s.HATCH_ACTIVE_GATEWAY_URL_PLACEHOLDER,
      gatewayScopeKey: I ?? w ?? void 0,
      targetKey: null == w ? s.HATCH_ACTIVE_GATEWAY_TARGET_KEY_PLACEHOLDER : (0, u.gatewayTargetKey)(w, C)
    }) ?? null, y[2] = I, y[3] = w, y[4] = e, y[5] = C, y[6] = f) : f = y[6];
    let _ = f,
      R = m.preload ?? m.enabled ?? !0;
    (0, a.useRegisterGatewayQueryForSsr)(_?.descriptor ?? null, R, m.clientPreloads);
    let S = _?.queryKey ?? o;
    y[7] !== _ || y[8] !== e || y[9] !== v ? (h = () => {
      if (null == e || null == _) throw Error("Cannot execute an empty gateway query");
      let t = (0, n.getEarlyGatewayQueryPreload)(_.sourceKey);
      if (null != t) {
        let r = t.promise.then(e.transform);
        return r.then(() => (0, n.clearEarlyGatewayQueryPromise)(_.sourceKey, t.promise), () => (0, n.clearEarlyGatewayQueryPromise)(_.sourceKey, t.promise)), r
      }
      let r = (0, n.getOrCreateEarlyGatewayQueryPromise)(_.descriptor, () => (0, i.dispatchGatewayQueryDescriptor)(_.descriptor, v)),
        a = r.then(e.transform);
      return a.then(() => (0, n.clearEarlyGatewayQueryPromise)(_.sourceKey, r), () => (0, n.clearEarlyGatewayQueryPromise)(_.sourceKey, r)), a
    }, y[7] = _, y[8] = e, y[9] = v, y[10] = h) : h = y[10];
    let b = null != w && null != e && (m.enabled ?? !0),
      x = e?.staleTime;
    y[11] !== m.gcTime || y[12] !== m.meta || y[13] !== m.refetchInterval || y[14] !== m.retry || y[15] !== m.select || y[16] !== S || y[17] !== h || y[18] !== b || y[19] !== x ? (g = {
      queryKey: S,
      queryFn: h,
      enabled: b,
      gcTime: m.gcTime,
      meta: m.meta,
      refetchInterval: m.refetchInterval,
      refetchOnMount: !1,
      retry: m.retry,
      select: m.select,
      staleTime: x
    }, y[11] = m.gcTime, y[12] = m.meta, y[13] = m.refetchInterval, y[14] = m.retry, y[15] = m.select, y[16] = S, y[17] = h, y[18] = b, y[19] = x, y[20] = g) : g = y[20];
    let E = (0, r.useQuery)(g);
    return y[21] !== _ || y[22] !== E ? (p = {
      ...E,
      query: _
    }, y[21] = _, y[22] = E, y[23] = p) : p = y[23], p
  }])
}]);

//# debugId=857b2492-ca2a-618a-964d-779e6d6e4d0b
//# sourceMappingURL=146-uoujv-zqz.js.map