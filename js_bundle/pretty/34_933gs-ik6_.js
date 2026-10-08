;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "412db616-e55e-8141-9a60-3b8e5f9b6aed")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 670578, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    r = e.i(420297),
    i = e.i(646361),
    n = e.i(430116),
    l = e.i(374785);

  function o(e) {
    let o, c, s, u, h, d, y, p, m, f, P, L, S, v, H, A, g = (0, a.c)(41);
    g[0] !== e ? ({
      action: o,
      className: c,
      icon: s,
      illustration: u,
      subtitle: d,
      title: p,
      titleAs: y,
      ...h
    } = e, g[0] = e, g[1] = o, g[2] = c, g[3] = s, g[4] = u, g[5] = h, g[6] = d, g[7] = y, g[8] = p) : (o = g[1], c = g[2], s = g[3], u = g[4], h = g[5], d = g[6], y = g[7], p = g[8]);
    let b = void 0 === y ? "h2" : y,
      T = null;
    if (null != o) {
      let e, a, i, n, c;
      g[9] !== o ? ({
        className: e,
        variant: i,
        ...a
      } = o, g[9] = o, g[10] = e, g[11] = a, g[12] = i) : (e = g[10], a = g[11], i = g[12]);
      let s = "primary" === (void 0 === i ? "secondary" : i) ? "primary" : "flat";
      g[13] !== e ? (n = (0, l.cn)("mt-3", e), g[13] = e, g[14] = n) : n = g[14], g[15] !== a || g[16] !== s || g[17] !== n ? (c = (0, t.jsx)(r.Button, {
        type: "button",
        ...a,
        size: "36",
        variant: s,
        className: n
      }), g[15] = a, g[16] = s, g[17] = n, g[18] = c) : c = g[18], T = c
    }
    return g[19] !== c ? (m = (0, l.cn)("flex w-full flex-col items-center", c), g[19] = c, g[20] = m) : m = g[20], g[21] !== s || g[22] !== u ? (f = null != s ? (0, t.jsx)(i.HatchIcon, {
      icon: s,
      size: 28,
      iconSize: 28,
      className: "text-text-secondary",
      "aria-hidden": "true"
    }) : u, g[21] = s, g[22] = u, g[23] = f) : f = g[23], g[24] === Symbol.for("react.memo_cache_sentinel") ? (P = {
      fontSize: 15
    }, g[24] = P) : P = g[24], g[25] !== p || g[26] !== b ? (L = (0, t.jsx)(n.Text, {
      as: b,
      variant: "subheadline-medium",
      color: "primary",
      style: P,
      children: p
    }), g[25] = p, g[26] = b, g[27] = L) : L = g[27], g[28] !== d ? (S = null != d && (0, t.jsx)(n.Text, {
      as: "p",
      variant: "footnote",
      color: "primary",
      children: d
    }), g[28] = d, g[29] = S) : S = g[29], g[30] !== T || g[31] !== L || g[32] !== S ? (v = (0, t.jsxs)("div", {
      className: "flex w-full flex-col items-center gap-0.5",
      children: [L, S, T]
    }), g[30] = T, g[31] = L, g[32] = S, g[33] = v) : v = g[33], g[34] !== f || g[35] !== v ? (H = (0, t.jsxs)("div", {
      "data-slot": "null-state-content",
      className: "max-w-null-state mx-auto flex w-full flex-col items-center gap-1 text-center",
      children: [f, v]
    }), g[34] = f, g[35] = v, g[36] = H) : H = g[36], g[37] !== h || g[38] !== m || g[39] !== H ? (A = (0, t.jsx)("div", {
      "data-slot": "null-state",
      className: m,
      ...h,
      children: H
    }), g[37] = h, g[38] = m, g[39] = H, g[40] = A) : A = g[40], A
  }
  o.displayName = "NullState", e.s(["NullState", 0, o])
}, 168538, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    r = e.i(519172);
  let i = r.default.createContext([]);
  var n = e.i(374785),
    l = e.i(731714),
    o = e.i(918340),
    c = e.i(612270);
  let s = "flex flex-col relative grow-1",
    u = "flex-row",
    h = "flex flex-col overflow-hidden relative z-0",
    d = "grow-1 shrink-1 min-h-0 basis-full",
    y = "overflow-x-auto overscroll-x-contain",
    p = "overflow-y-auto overscroll-y-contain",
    m = e => {
      e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation()
    };

  function f(e) {
    return Number.isFinite(e) ? Math.max(e, 0) : 0
  }

  function P(e) {
    let r, i, l, c = (0, a.c)(6),
      {
        className: s,
        onIntersection: u
      } = e;
    c[0] === Symbol.for("react.memo_cache_sentinel") ? (r = {
      scrollMargin: "1px 0px"
    }, c[0] = r) : r = c[0];
    let h = (0, o.useOnInView)(u, r);
    return c[1] !== s ? (i = (0, n.cn)(s, "pointer-events-none absolute size-px opacity-0"), c[1] = s, c[2] = i) : i = c[2], c[3] !== h || c[4] !== i ? (l = (0, t.jsx)("div", {
      className: i,
      ref: h
    }), c[3] = h, c[4] = i, c[5] = l) : l = c[5], l
  }

  function L(e) {
    let r, i = (0, a.c)(2),
      {
        onIntersection: n
      } = e;
    return i[0] !== n ? (r = (0, t.jsx)(P, {
      onIntersection: n,
      className: "bottom-0"
    }), i[0] = n, i[1] = r) : r = i[1], r
  }

  function S(e) {
    let r, i = (0, a.c)(2),
      {
        onIntersection: n
      } = e;
    return i[0] !== n ? (r = (0, t.jsx)(P, {
      onIntersection: n,
      className: "top-0"
    }), i[0] = n, i[1] = r) : r = i[1], r
  }
  e.s(["default", 0, function(e) {
    let o, P, v, H, A, g = (0, a.c)(11),
      {
        ref: b,
        ...T
      } = e,
      {
        children: E,
        contentRef: _,
        expanding: R,
        forceBrowserDefault: w,
        hideScrollbar: C,
        horizontal: x,
        id: I,
        indicatorStyle: N,
        nestedScrollEnabled: $,
        onScroll: M,
        onScrollBottom: F,
        onScrollEnd: j,
        onScrollTop: k,
        persistentScrollbar: O,
        role: U,
        scrollTracePolicy: z,
        scrollThumbClassname: K,
        scrollTrackClassname: D,
        scrollbarTopInset: B,
        scrollbarBottomInset: G,
        className: V,
        style: W,
        tabIndex: Y,
        vertical: q,
        stickyHeader: Q,
        ...J
      } = T,
      X = void 0 !== R && R,
      Z = void 0 !== C && C,
      ee = (0, c.useIsTouchDevice)(),
      et = void 0 !== w && w || null != _ || !q || Z || x || ee,
      ea = (0, r.useContext)(i),
      er = f(void 0 === B ? 0 : B),
      ei = f(void 0 === G ? 0 : G),
      en = 0 === er ? void 0 : {
        top: er
      },
      el = (0, r.useRef)(null),
      eo = (0, r.useRef)(null),
      ec = (0, r.useRef)(null),
      es = (0, r.useRef)(null),
      eu = (0, l.useMergeRefs)(b, eo);
    (0, r.useLayoutEffect)(() => {
      if (et || "u" < typeof CSS || !CSS.supports("animation-timeline", "scroll()")) return;
      let e = eo.current,
        t = el.current,
        a = es.current,
        r = ec.current;
      if (null == t || null == e || null == r || null == a) return;
      let i = 0,
        n = 0,
        l = 0,
        o = 0,
        c = () => {
          let c = e.clientHeight,
            s = Number.parseFloat(window.getComputedStyle(e).paddingBottom) || 0,
            u = Math.max(t.offsetTop + t.scrollHeight + s, c),
            h = u > c,
            d = Math.max(c - er - ei, 0),
            y = h ? d * c / u : 0,
            p = Math.max(d - y, 0),
            m = Math.max(u - c, 0),
            f = h && d > 0;
          i = u, n = y, l = p, o = m, a.style.height = `${d}px`, a.style.setProperty("--hatch-scrollbar-track-end", `${o}px`), r.style.height = `${n}px`, r.style.setProperty("--hatch-scrollbar-thumb-end", `${o+l}px`), a.style.display = f ? "block" : "none", r.style.display = f ? "block" : "none"
        },
        s = null,
        u = t => {
          if (0 !== t.button) return;
          m(t), s?.();
          let {
            clientY: c
          } = t, u = r.getBoundingClientRect();
          if (c < u.top || c > u.bottom) {
            let t = c < u.top ? -1 : 1;
            e.scrollBy({
              top: t * Math.max(e.clientHeight - n, 0)
            });
            return
          }
          if (0 === l || 0 === o || 0 === i) return;
          let h = t.pointerId,
            d = e.scrollTop,
            y = o / l,
            p = t => {
              t.pointerId !== h || (m(t), e.scrollTop = Math.min(Math.max(d + (t.clientY - c) * y, 0), o))
            },
            f = e => {
              e.pointerId === h && (m(e), s?.())
            },
            P = () => {
              s === P && (s = null, a.removeEventListener("pointermove", p), a.removeEventListener("pointerup", f), a.removeEventListener("pointercancel", f), a.removeEventListener("lostpointercapture", f), a.hasPointerCapture(h) && a.releasePointerCapture(h))
            };
          s = P, a.setPointerCapture(h), a.addEventListener("pointermove", p), a.addEventListener("pointerup", f), a.addEventListener("pointercancel", f), a.addEventListener("lostpointercapture", f)
        },
        h = 0,
        d = () => {
          0 === h && (h = window.requestAnimationFrame(() => {
            h = 0, c()
          }))
        };
      c(), window.addEventListener("resize", d), a.addEventListener("pointerdown", u);
      let y = new ResizeObserver(c);
      return y.observe(t), y.observe(e), () => {
        window.removeEventListener("resize", d), a.removeEventListener("pointerdown", u), s?.(), y.disconnect(), 0 !== h && (window.cancelAnimationFrame(h), h = 0)
      }
    }, [ei, er, et]), g[0] === Symbol.for("react.memo_cache_sentinel") ? (o = {
      getDOMNode: () => eo.current
    }, g[0] = o) : o = g[0];
    let eh = o;
    g[1] !== ea ? (P = [...ea, eh], g[1] = ea, g[2] = P) : P = g[2];
    let ed = P,
      ey = U ?? (0 === Y ? "region" : void 0);
    if (et) {
      let e, a = (0, n.cn)(h, X && d, Z && "scrollbar-hide", x && y, q && p, V),
        r = x && !q && u;
      return g[3] !== r ? (e = (0, n.cn)(s, r), g[3] = r, g[4] = e) : e = g[4], (0, t.jsx)(i.Provider, {
        value: ed,
        children: (0, t.jsxs)("div", {
          ...J,
          className: a,
          "data-scrolltracepolicy": z,
          id: I,
          onScroll: M,
          onScrollEnd: j,
          ref: eu,
          role: ey,
          tabIndex: Y,
          style: W,
          children: [Q, (0, t.jsxs)("div", {
            className: e,
            children: [k ? (0, t.jsx)(S, {
              onIntersection: k
            }) : null, E, F ? (0, t.jsx)(L, {
              onIntersection: F
            }) : null]
          })]
        })
      })
    }
    let ep = (0, n.cn)("group/scroller", h, "scrollbar-hide", "hatch-scrollbar-overlay", X && d, x && y, q && p, V),
      em = x && !q && u;
    g[5] !== em ? (v = (0, n.cn)(s, em), g[5] = em, g[6] = v) : v = g[6];
    let ef = (0, n.cn)("hatch-scrollbar-thumb border-box hidden end-0 pointer-events-none absolute top-0 p-[4px] z-20 opacity-0 transition-opacity duration-300 ease-[ease] w-[12px] group-hover/scroller:opacity-100 group-hover/scroller:duration-0 group-focus-within/scroller:opacity-100 group-focus-within/scroller:duration-0 motion-reduce:transition-none", void 0 !== O && O && "opacity-100 duration-0", K);
    return g[7] === Symbol.for("react.memo_cache_sentinel") ? (H = (0, t.jsx)("div", {
      className: (0, n.cn)("w-full h-full rounded-4 bg-(--scroll-thumb)")
    }), g[7] = H) : H = g[7], g[8] !== en || g[9] !== ef ? (A = (0, t.jsx)("div", {
      "aria-hidden": "true",
      className: ef,
      "data-scrollbar-thumb": "true",
      "data-thumb": 1,
      ref: ec,
      style: en,
      children: H
    }), g[8] = en, g[9] = ef, g[10] = A) : A = g[10], (0, t.jsx)(i.Provider, {
      value: ed,
      children: (0, t.jsxs)("div", {
        ...J,
        className: ep,
        "data-scrolltracepolicy": z,
        id: I,
        onScroll: M,
        onScrollEnd: j,
        ref: eu,
        role: ey,
        tabIndex: Y,
        style: W,
        children: [Q, (0, t.jsxs)("div", {
          className: v,
          ref: el,
          children: [k ? (0, t.jsx)(S, {
            onIntersection: k
          }) : null, E, F ? (0, t.jsx)(L, {
            onIntersection: F
          }) : null]
        }), (0, t.jsx)("div", {
          "aria-hidden": "true",
          className: (0, n.cn)("hatch-scrollbar-track bg-transparent hidden absolute box-content top-0 end-0 z-20 w-[16px] touch-none select-none", D),
          "data-scrollbar-track": "true",
          "data-thumb": 1,
          ref: es,
          style: en
        }), A]
      })
    })
  }], 168538)
}, 271954, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(984345);

  function r() {
    let e, r = (0, t.c)(4),
      i = (0, a.useOptionalAppRouterRouteContext)();
    if (!i) throw Error("useNavigate must be used within an AppRouterRouteProvider");
    return r[0] !== i.isPending || r[1] !== i.navigate || r[2] !== i.startNavigationTransition ? (e = {
      navigate: i.navigate,
      isPending: i.isPending,
      startNavigationTransition: i.startNavigationTransition
    }, r[0] = i.isPending, r[1] = i.navigate, r[2] = i.startNavigationTransition, r[3] = e) : e = r[3], e
  }

  function i() {
    let e = (0, a.useOptionalAppRouterRouteContext)();
    if (!e) throw Error("useLocation must be used within an AppRouterRouteProvider");
    return e.location
  }
  e.s(["useLocation", 0, i, "useNavigate", 0, r, "useSearchParams", 0, function() {
    let e, a, n, l, o = (0, t.c)(12),
      c = i(),
      {
        navigate: s
      } = r();
    o[0] !== c.search ? (e = c.search.startsWith("?") ? c.search.slice(1) : c.search, o[0] = c.search, o[1] = e) : e = o[1], o[2] !== e ? (a = new URLSearchParams(e), o[2] = e, o[3] = a) : a = o[3];
    let u = a;
    o[4] !== c.hash || o[5] !== c.pathname || o[6] !== s || o[7] !== u ? (n = (e, t) => {
      let a = (function(e) {
        if (null == e) return new URLSearchParams;
        if (e instanceof URLSearchParams || "string" == typeof e || Array.isArray(e)) return new URLSearchParams(e);
        let t = new URLSearchParams;
        for (let [a, r] of Object.entries(e)) {
          if (Array.isArray(r)) {
            for (let e of r) t.append(a, e);
            continue
          }
          t.set(a, r)
        }
        return t
      })("function" == typeof e ? e(new URLSearchParams(u)) : e).toString();
      s(`${c.pathname}${a.length>0?`?${a}`:""}${c.hash}`, t)
    }, o[4] = c.hash, o[5] = c.pathname, o[6] = s, o[7] = u, o[8] = n) : n = o[8];
    let h = n;
    return o[9] !== u || o[10] !== h ? (l = [u, h], o[9] = u, o[10] = h, o[11] = l) : l = o[11], l
  }])
}, 918340, e => {
  "use strict";
  var t = e.i(519172);
  e.s(["useOnInView", 0, function(e, {
    threshold: a = 0,
    root: r = null,
    rootMargin: i,
    scrollMargin: n,
    triggerOnce: l = !1
  } = {}) {
    let o = (0, t.useRef)(e);
    o.current = e;
    let [c, s] = (0, t.useState)(null);
    return (0, t.useEffect)(() => {
      let e;
      if (!c || "u" < typeof IntersectionObserver) return;
      let t = t => {
        let a = Array.isArray(e.thresholds) ? e.thresholds : [e.thresholds];
        t.forEach(t => {
          let r = t.isIntersecting && a.some(e => t.intersectionRatio >= e);
          o.current(r, t), r && l && e.disconnect()
        })
      };
      try {
        e = new IntersectionObserver(t, {
          threshold: a,
          root: r,
          rootMargin: i,
          scrollMargin: n
        })
      } catch {
        e = new IntersectionObserver(t, {
          threshold: a,
          root: r,
          rootMargin: i
        })
      }
      return e.observe(c), () => {
        e.disconnect()
      }
    }, [c, a, r, i, n, l]), (0, t.useCallback)(e => {
      s(e)
    }, [])
  }])
}, 671204, e => {
  "use strict";
  var t = e.i(304117);
  let a = t.SHELL_PATH.libraryArtifacts;

  function r(e) {
    switch (e) {
      case "all":
      case "documents":
      case "web":
        return e;
      default:
        return null
    }
  }

  function i(e) {
    return "all" === e ? t.SHELL_PATH.libraryArtifacts : `${t.SHELL_PATH.libraryArtifacts}?view=${e}`
  }

  function n(e) {
    switch (e) {
      case "auto":
      case "date":
      case "name":
        return e;
      default:
        return null
    }
  }

  function l(e) {
    switch (e) {
      case "all":
      case "images":
      case "video":
        return e;
      default:
        return null
    }
  }
  e.s(["DEFAULT_LIBRARY_ROUTE_PATH", 0, a, "getLibraryArtifactsRouteForView", 0, i, "getLibraryMediaRouteForView", 0, function(e) {
    return "all" === e ? t.SHELL_PATH.libraryMedia : `${t.SHELL_PATH.libraryMedia}?view=${e}`
  }, "getLibraryRoutePathForViewMode", 0, function(e) {
    switch (e) {
      case "spaces":
        return t.SHELL_PATH.libraryArtifacts;
      case "media":
        return t.SHELL_PATH.libraryMedia;
      case "files":
        return t.SHELL_PATH.libraryFiles;
      case "your_files":
        return i("documents")
    }
  }, "getLibraryViewModeFromRoutePath", 0, function(e) {
    return e === t.SHELL_PATH.libraryRecent ? "recent" : e === t.SHELL_PATH.libraryArtifacts ? "spaces" : e === t.SHELL_PATH.libraryMedia ? "media" : e === t.SHELL_PATH.libraryFiles ? "files" : "your_files"
  }, "getParentLibraryFolderPath", 0, function(e) {
    let t = e.replace(/\/+$/, "");
    if ("" === t || !t.startsWith("/")) return null;
    let a = t.slice(0, t.lastIndexOf("/"));
    return "" === a ? null : a
  }, "isLibraryFileHandoffRoutePath", 0, function(e) {
    return e === t.SHELL_PATH.libraryRecent || e === t.SHELL_PATH.libraryArtifacts || e === t.SHELL_PATH.libraryDocuments || e === t.SHELL_PATH.libraryMedia || e === t.SHELL_PATH.libraryFiles
  }, "isLibraryRoutePath", 0, function(e) {
    return e === t.SHELL_PATH.libraryRecent || e === t.SHELL_PATH.libraryArtifacts || e === t.SHELL_PATH.libraryDocuments || e === t.SHELL_PATH.libraryMedia || e === t.SHELL_PATH.libraryFiles || e === t.SHELL_PATH.libraryPodcasts
  }, "libraryRouteSearchParamsSchema", 0, {
    parse: e => ({
      file: e.file ?? null,
      editorMode: "edit" === e.mode ? "edit" : null,
      artifactSort: n(e.sort),
      artifactView: r(e.view),
      mediaView: l(e.view),
      query: e.q ?? null
    })
  }, "normalizeLibraryArtifactSort", 0, n, "normalizeLibraryArtifactView", 0, r, "normalizeLibraryMediaView", 0, l])
}, 22338, e => {
  "use strict";
  var t = e.i(963910),
    a = e.i(908164);
  let r = ["logging_debug", "settings_tab", "pane", "dialog_file", "mode"];

  function i(e, t, a) {
    for (let r of a) {
      let a, i = r.pattern.exec(e);
      if (!i) continue;
      let l = n(r.paramNames, i);
      if (r.searchParams) {
        let e = {};
        t.forEach((t, a) => {
          e[a] = t
        });
        try {
          a = r.searchParams.parse(e)
        } catch {
          a = void 0
        }
      }
      let o = function(e, t, a) {
        if (!a.searchParams || null == t) return e;
        try {
          if (null != a.transientSearchParams && "object" == typeof t) {
            let r = Object.entries(t).filter(([e]) => !a.transientSearchParams?.includes(e));
            return 0 === r.length ? e : `${e}?${JSON.stringify(Object.fromEntries(r))}`
          }
          return `${e}?${JSON.stringify(t)}`
        } catch {
          return e
        }
      }(e, a, r);
      return {
        route: r,
        params: l,
        searchParams: a,
        identity: o,
        tracePolicy: r.tracePolicy
      }
    }
    return null
  }

  function n(e, t) {
    let a = {};
    for (let r = 0; r < e.length; r++) {
      let i = t[r + 1],
        n = e[r];
      void 0 !== i && void 0 !== n && (a[n] = decodeURIComponent(i))
    }
    return a
  }
  e.s(["resolveShellLocation", 0, function(e) {
    let {
      to: i,
      searchParams: n,
      hash: l,
      currentSearch: o
    } = e, c = o ?? window.location.search, s = (0, t.parseHatchGatewayTarget)(c), u = (0, t.applyHatchGatewayTargetToPath)(i, s), h = (0, a.preserveMcParams)(u, c);
    "string" == typeof h && (u = h);
    let d = new URL(u, "https://shell.invalid"),
      y = new URLSearchParams(c);
    for (let e of r) {
      let t = y.get(e);
      null == t || d.searchParams.has(e) || d.searchParams.set(e, t)
    }
    if (n)
      for (let [e, t] of Object.entries(n)) d.searchParams.set(e, t);
    let p = d.search,
      m = l ? `#${l}` : d.hash;
    return `${d.pathname}${p}${m}`
  }, "resolveShellLocationMatch", 0, function(e, t, a) {
    let r = function(e, t, a) {
        for (let r of a)
          for (let a of r.aliases ?? []) {
            let i = a.pattern.exec(e);
            if (!i) continue;
            let l = function(e) {
                let t = new URLSearchParams;
                return e.forEach((e, a) => {
                  t.append(a, e)
                }), t
              }(t),
              o = n(a.paramNames, i);
            return a.resolveRedirect?.({
              pathname: e,
              params: o,
              searchParams: l,
              canonicalPath: r.path
            }) ?? function(e, t) {
              let a = t.toString();
              return a ? `${e}?${a}` : e
            }(function(e, t) {
              return e.split("/").map(e => {
                if (!e.startsWith(":")) return e;
                let a = t[e.slice(1)];
                return null == a ? e : encodeURIComponent(a)
              }).join("/")
            }(r.path, o), l)
          }
        return null
      }(e, t, a),
      l = null == r ? i(e, t, a) : null,
      o = null;
    if (null != r) {
      let e = new URL(r, "https://shell.invalid");
      o = i(e.pathname, e.searchParams, a)
    }
    return {
      directMatch: l,
      aliasRedirect: r,
      aliasMatch: o,
      match: l ?? o
    }
  }, "updateShellSearchParams", 0, function(e) {
    let t = new URL(window.location.href);
    for (let [a, r] of Object.entries(e)) null === r ? t.searchParams.delete(a) : t.searchParams.set(a, r);
    window.history.replaceState(null, "", t.pathname + t.search + t.hash)
  }])
}, 685231, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(519172),
    r = e.i(871157),
    i = e.i(720756),
    n = e.i(535678),
    l = e.i(322095),
    o = e.i(304117);
  let c = Object.freeze({
      availability: Object.freeze({
        gatewayReady: !1,
        online: !1,
        pageVisible: !1
      }),
      generation: 0,
      gatewayIdentity: "",
      identity: "",
      outcome: null,
      phase: "inactive",
      route: null,
      surfaceCommitted: !1
    }),
    s = c,
    u = 1,
    h = new Set,
    d = (0, a.createContext)(null);

  function y(e) {
    if (e !== s)
      for (let t of (s = Object.freeze(e), h)) t()
  }

  function p(e, t) {
    "u" > typeof performance && "function" == typeof performance.mark && performance.mark(`hatch:${e}:${t}`)
  }

  function m(e) {
    return e.gatewayReady && e.online && e.pageVisible
  }

  function f(e) {
    var t;
    if (null == e.outcome || null == e.route) return void y(e);
    if (e.surfaceCommitted && m(e.availability) && ("content" === (t = e.outcome) || "empty" === t)) {
      "post_content_eligible" !== s.phase && (p("post_content_eligible", e.route), (0, n.markInitialLoadPoint)("post_content_eligible")), y({
        ...e,
        phase: "post_content_eligible"
      });
      return
    }
    y({
      ...e,
      phase: "primary_content_settled"
    })
  }

  function P(e) {
    let t = e?.route.path;
    return t === o.SHELL_PATH.chat || t === o.SHELL_PATH.thread || t === o.SHELL_PATH.threadDraft ? "chat" : t === o.SHELL_PATH.ideas ? "ideas" : t === o.SHELL_PATH.goals || t === o.SHELL_PATH.goal ? "goals" : t === o.SHELL_PATH.feed ? "feed" : t === o.SHELL_PATH.libraryArtifact ? null : t?.startsWith("/library/") === !0 ? "library" : null
  }

  function L(e, t) {
    return (0, r.gatewayTargetKey)(e, t)
  }

  function S(e) {
    if ("inactive" === s.phase) return;
    let t = {
      ...s.availability,
      ...e
    };
    (t.gatewayReady !== s.availability.gatewayReady || t.online !== s.availability.online || t.pageVisible !== s.availability.pageVisible) && f({
      ...s,
      availability: t
    })
  }

  function v() {
    return s
  }

  function H(e) {
    return h.add(e), () => h.delete(e)
  }

  function A() {
    return c
  }
  e.s(["ShellPrimaryContentIdentityProvider", 0, function({
    children: e,
    identity: t,
    isActive: r
  }) {
    return (0, a.createElement)(d.Provider, {
      value: {
        identity: t,
        isActive: r
      }
    }, e)
  }, "beginShellPrimaryContentLifecycle", 0, function(e, t, a, r) {
    let i = P(e);
    if (null == i || null == e) return "inactive" !== s.phase && y(c), s;
    let n = L(t, a);
    return s.route === i && s.identity === e.identity && s.gatewayIdentity === n ? S(r) : y({
      availability: r,
      generation: u++,
      gatewayIdentity: n,
      identity: e.identity,
      outcome: null,
      phase: "loading",
      route: i,
      surfaceCommitted: !1
    }), s
  }, "getShellPrimaryContentGatewayIdentity", 0, L, "getShellPrimaryContentRoute", 0, P, "isShellPostContentEligibleForRoute", 0, function(e, t, a, r, i) {
    return (null == i || t?.identity === i) && (null == P(t) || null != t && "post_content_eligible" === e.phase && e.identity === t.identity && e.gatewayIdentity === L(a, r))
  }, "isShellPrimaryContentFailureForRoute", 0, function(e, t, a, r, i) {
    return (null == i || t?.identity === i) && null != t && e.surfaceCommitted && ("error" === e.outcome || "unavailable" === e.outcome) && e.identity === t.identity && e.gatewayIdentity === L(a, r)
  }, "isShellSafetyWorkEligibleForRoute", 0, function(e, t, a, r) {
    return null == P(t) || null != t && "inactive" !== e.phase && m(e.availability) && e.identity === t.identity && e.gatewayIdentity === L(a, r)
  }, "rearmShellPrimaryContentCommit", 0, function() {
    s.surfaceCommitted && y({
      ...s,
      phase: "primary_content_settled",
      surfaceCommitted: !1
    })
  }, "updateShellPrimaryContentAvailability", 0, S, "useReportInitialLoadRouteContent", 0, function(e, r) {
    let i, n, o = (0, t.c)(7),
      c = (0, a.useContext)(d),
      s = c?.isActive ?? r ?? !1,
      u = c?.identity ?? null;
    o[0] !== s || o[1] !== e ? (i = () => {
      s && null != e && (0, l.markInitialLoadPrimaryContentVisible)(e)
    }, o[0] = s, o[1] = e, o[2] = i) : i = o[2], o[3] !== u || o[4] !== s || o[5] !== e ? (n = [u, s, e], o[3] = u, o[4] = s, o[5] = e, o[6] = n) : n = o[6], (0, a.useLayoutEffect)(i, n)
  }, "useReportShellPrimaryContent", 0, function(e, r, n) {
    let o, c, u = (0, t.c)(9),
      {
        gatewayUrl: h,
        vmName: y,
        isReady: m
      } = (0, i.useGatewayQueryContext)(),
      P = (0, a.useContext)(d),
      S = n ?? P?.identity,
      v = P?.isActive ?? null != n;
    u[0] !== h || u[1] !== S || u[2] !== v || u[3] !== m || u[4] !== r || u[5] !== e || u[6] !== y ? (o = () => {
      v && m && null != r && null != S && (s.route !== e || s.identity !== S || s.gatewayIdentity !== L(h, y) || "inactive" === s.phase || s.outcome === r && s.surfaceCommitted && ("primary_content_settled" === s.phase || "post_content_eligible" === s.phase) || (p("primary_content_settled", e), (0, l.markInitialLoadPrimaryContentVisible)(r), f({
        ...s,
        outcome: r,
        phase: "primary_content_settled",
        surfaceCommitted: !0
      })))
    }, c = [h, S, v, m, r, e, y], u[0] = h, u[1] = S, u[2] = v, u[3] = m, u[4] = r, u[5] = e, u[6] = y, u[7] = o, u[8] = c) : (o = u[7], c = u[8]), (0, a.useEffect)(o, c)
  }, "useShellPrimaryContentIdentity", 0, function() {
    return (0, a.useContext)(d)?.identity ?? null
  }, "useShellPrimaryContentSnapshot", 0, function() {
    return (0, a.useSyncExternalStore)(H, v, A)
  }])
}, 915637, e => {
  "use strict";
  var t = e.i(671204),
    a = e.i(558416),
    r = e.i(301970),
    i = e.i(861407),
    n = e.i(304117);

  function l(e) {
    let {
      pattern: t,
      paramNames: a
    } = (0, i.compileShellPath)(e.path), r = e.aliases?.map(e => {
      let t = (0, i.compileShellPath)(e.path);
      return Object.freeze({
        path: e.path,
        pattern: t.pattern,
        paramNames: t.paramNames,
        ...e.resolveRedirect ? {
          resolveRedirect: e.resolveRedirect
        } : {}
      })
    });
    return Object.freeze({
      path: e.path,
      activityKey: e.activityKey,
      activityRetention: e.activityRetention ?? "preserve",
      pattern: t,
      paramNames: a,
      panelType: e.panelType,
      tracePolicy: e.tracePolicy,
      displayName: e.displayName ?? e.path,
      searchParams: e.searchParams,
      transientSearchParams: e.transientSearchParams,
      aliases: r ? Object.freeze(r) : void 0,
      chrome: e.chrome ?? "shell"
    })
  }

  function o({
    searchParams: e
  }) {
    let t, a = e.get("view");
    switch (e.delete("view"), a) {
      case "images":
        t = `${n.SHELL_PATH.libraryMedia}?view=images`;
        break;
      case "video":
      case "videos":
        t = `${n.SHELL_PATH.libraryMedia}?view=video`;
        break;
      case "media":
        t = n.SHELL_PATH.libraryMedia;
        break;
      case "files":
        t = n.SHELL_PATH.libraryFiles;
        break;
      case "documents":
      case "your_files":
      case "search":
        t = `${n.SHELL_PATH.libraryArtifacts}?view=documents`;
        break;
      case "web":
      case "spaces":
        t = `${n.SHELL_PATH.libraryArtifacts}?view=web`;
        break;
      default:
        t = n.SHELL_PATH.libraryArtifacts
    }
    let r = e.toString();
    return r ? `${t}${t.includes("?")?"&":"?"}${r}` : t
  }
  let c = [l({
      path: n.SHELL_PATH.chat,
      aliases: [{
        path: n.SHELL_ALIAS_PATH.threadMain
      }],
      panelType: "chat",
      tracePolicy: r.EctoRouteTracePolicy.HATCH,
      displayName: "Chat"
    }), l({
      path: n.SHELL_PATH.threadDraft,
      panelType: "chat",
      tracePolicy: r.EctoRouteTracePolicy.HATCH,
      displayName: "New Thread"
    }), l({
      path: n.SHELL_PATH.thread,
      panelType: "chat",
      tracePolicy: r.EctoRouteTracePolicy.HATCH,
      displayName: "Thread"
    }), l({
      path: n.SHELL_PATH.libraryRecent,
      activityKey: "library",
      panelType: "files",
      tracePolicy: r.EctoRouteTracePolicy.HATCH_LIBRARY_RECENT,
      displayName: "Library: Recent",
      searchParams: t.libraryRouteSearchParamsSchema
    }), l({
      path: n.SHELL_PATH.libraryArtifacts,
      aliases: [{
        path: n.SHELL_ALIAS_PATH.library,
        resolveRedirect: o
      }, {
        path: n.SHELL_ALIAS_PATH.libraryTrailingSlash,
        resolveRedirect: o
      }, {
        path: n.SHELL_ALIAS_PATH.spaces
      }, {
        path: n.SHELL_ALIAS_PATH.spacesTrailingSlash
      }],
      activityKey: "library",
      panelType: "files",
      tracePolicy: r.EctoRouteTracePolicy.HATCH_LIBRARY_ARTIFACTS,
      displayName: "Library: All Artifacts",
      searchParams: t.libraryRouteSearchParamsSchema
    }), l({
      path: n.SHELL_PATH.libraryDocuments,
      activityKey: "library",
      panelType: "files",
      tracePolicy: r.EctoRouteTracePolicy.HATCH_LIBRARY_DOCUMENTS,
      displayName: "Library: Documents",
      searchParams: t.libraryRouteSearchParamsSchema
    }), l({
      path: n.SHELL_PATH.libraryMedia,
      activityKey: "library",
      panelType: "files",
      tracePolicy: r.EctoRouteTracePolicy.HATCH_LIBRARY_MEDIA,
      displayName: "Library: All Media",
      searchParams: t.libraryRouteSearchParamsSchema
    }), l({
      path: n.SHELL_PATH.libraryFiles,
      activityKey: "library",
      panelType: "files",
      tracePolicy: r.EctoRouteTracePolicy.HATCH_LIBRARY_FILES,
      displayName: "Library: System Files",
      searchParams: t.libraryRouteSearchParamsSchema
    }), l({
      path: n.SHELL_PATH.libraryPodcasts,
      panelType: "files",
      tracePolicy: r.EctoRouteTracePolicy.HATCH_LIBRARY_PODCASTS,
      displayName: "Podcasts"
    }), l({
      path: n.SHELL_PATH.artifacts,
      panelType: "artifacts",
      tracePolicy: r.EctoRouteTracePolicy.HATCH_ARTIFACTS,
      displayName: "Artifacts"
    }), l({
      path: n.SHELL_PATH.ideas,
      activityKey: "ideas",
      panelType: "ideas",
      tracePolicy: r.EctoRouteTracePolicy.HATCH_IDEAS,
      displayName: "Ideas",
      searchParams: {
        parse: e => ({
          ideaId: (0, a.getHatchIdeaDeepLinkId)(new URLSearchParams(e))
        })
      },
      transientSearchParams: ["ideaId"]
    }), l({
      path: n.SHELL_PATH.feed,
      activityKey: "feed",
      panelType: "feed",
      tracePolicy: r.EctoRouteTracePolicy.HATCH_FEED,
      displayName: "Feed"
    }), l({
      path: n.SHELL_PATH.libraryArtifact,
      aliases: [{
        path: n.SHELL_ALIAS_PATH.space
      }],
      panelType: "space",
      tracePolicy: r.EctoRouteTracePolicy.HATCH_SPACE,
      displayName: "Artifact"
    }), l({
      path: n.SHELL_PATH.spaceEdit,
      panelType: "space_edit",
      tracePolicy: r.EctoRouteTracePolicy.HATCH_SPACE_EDIT,
      displayName: "Edit artifact"
    }), l({
      path: n.SHELL_PATH.savedSpace,
      activityRetention: "unmount",
      panelType: "space",
      tracePolicy: r.EctoRouteTracePolicy.HATCH_SAVED_SPACE,
      displayName: "Saved Artifact"
    }), l({
      path: n.SHELL_PATH.goals,
      activityKey: "goals",
      panelType: "goals",
      tracePolicy: r.EctoRouteTracePolicy.HATCH_GOALS,
      displayName: "Goals"
    }), l({
      path: n.SHELL_PATH.goal,
      activityKey: "goals",
      panelType: "goals",
      tracePolicy: r.EctoRouteTracePolicy.HATCH_GOALS,
      displayName: "Goal"
    }), l({
      path: n.SHELL_PATH.sharedAgents,
      activityKey: "agents",
      panelType: "agents",
      tracePolicy: r.EctoRouteTracePolicy.HATCH_AGENTS,
      displayName: "Shared Agents"
    }), l({
      path: n.SHELL_PATH.sharedAgentsClaim,
      activityKey: "agents",
      activityRetention: "unmount",
      panelType: "agents",
      tracePolicy: r.EctoRouteTracePolicy.HATCH_AGENTS,
      displayName: "Accept Shared Agent"
    }), l({
      path: n.SHELL_PATH.sharedAgentsSharedWithYou,
      activityKey: "agents",
      panelType: "agents",
      tracePolicy: r.EctoRouteTracePolicy.HATCH_AGENTS,
      displayName: "Shared with you"
    }), l({
      path: n.SHELL_PATH.sharedAgent,
      activityKey: "agents",
      panelType: "agents",
      tracePolicy: r.EctoRouteTracePolicy.HATCH_AGENTS,
      displayName: "Shared Agent"
    })],
    s = new Map(c.map(e => [e.path, e]));
  e.s(["getShellRouteMetadata", 0, function(e) {
    let t = s.get(e);
    if (null == t) throw Error(`Missing shell route metadata for ${e}`);
    return t
  }, "shellRouteMetadata", 0, c], 915637)
}, 546963, e => {
  "use strict";
  let t = new WeakMap,
    a = 1,
    r = null,
    i = null,
    n = 0;

  function l(e, t) {
    return `${t.gatewayCtx.targetKey}:${e.identity}`
  }

  function o(e) {
    let a = t.get(e);
    return null == a && (a = {
      activeGeneration: 0,
      activeRouteKey: null,
      completedForeground: new Map,
      inFlightByRoute: new Map
    }, t.set(e, a)), a
  }

  function c(e, t, a, r) {
    let i, n;
    if (null == e.route.preload && null == e.route.loader) return;
    let l = a.inFlightByRoute.get(r);
    if (null != l) return l;
    try {
      i = e.route.preload?.(), n = function(e, t) {
        if (e.route.loader) return e.route.loader({
          queryClient: t.queryClient,
          gatewayCtx: t.gatewayCtx,
          experiments: t.experiments,
          params: e.params,
          searchParams: e.searchParams
        })
      }(e, t)
    } catch (t) {
      let e = Promise.reject(t);
      return e.catch(() => {}), e
    }
    let o = Promise.all([i, n]).then(() => void 0);
    a.inFlightByRoute.set(r, o);
    let c = () => {
      a.inFlightByRoute.get(r) === o && a.inFlightByRoute.delete(r)
    };
    return o.then(c, c), o
  }

  function s(e, t, a) {
    for (e.completedForeground.delete(t), e.completedForeground.set(t, a); e.completedForeground.size > 32;) {
      let t = e.completedForeground.keys().next().value;
      if ("string" != typeof t) break;
      e.completedForeground.delete(t)
    }
  }

  function u(e, t, a, r) {
    let i = `${a.activeGeneration}:${r}`,
      n = a.completedForeground.get(i);
    if (null != n) return s(a, i, n), n;
    let l = c(e, t, a, r);
    return null != l && s(a, i, l), l
  }
  e.s(["cancelShellRouteIntentPrefetches", 0, function() {
    n += 1, i = null
  }, "getShellRoutePrefetchEpoch", 0, function() {
    return n
  }, "getShellRoutePrimeCacheSizeForTests", 0, function(e) {
    return o(e).completedForeground.size
  }, "primeActiveShellRoute", 0, function(e, t) {
    let r = o(t.queryClient),
      i = l(e, t);
    return r.activeRouteKey !== i && (r.activeRouteKey = i, r.activeGeneration = a++), u(e, t, r, i)
  }, "primeShellRouteNavigation", 0, function(e, t) {
    let r = o(t.queryClient),
      i = l(e, t);
    return r.activeRouteKey = i, r.activeGeneration = a++, u(e, t, r, i)
  }, "resetShellRoutePrefetchForTests", 0, function() {
    t = new WeakMap, a = 1, r = null, i = null, n = 0
  }, "scheduleShellRouteIntentPrefetch", 0, function(e, t) {
    ! function(e) {
      if (r?.key !== e.key && i?.key !== e.key) {
        if (null == r) return function e(t) {
          let a;
          if (t.epoch === n) {
            try {
              a = t.run()
            } catch (e) {
              a = Promise.reject(e)
            }
            r = {
              key: t.key,
              promise: a,
              epoch: t.epoch
            }, a.catch(() => {}).finally(() => {
              if (r?.promise !== a) return;
              r = null;
              let t = i;
              i = null, null != t && t.epoch === n && e(t)
            })
          }
        }(e);
        i = e
      }
    }({
      key: l(e, t),
      epoch: n,
      run: () => {
        let a;
        return a = o(t.queryClient), c(e, t, a, l(e, t)) ?? Promise.resolve()
      }
    })
  }], 546963)
}, 435265, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(763971),
    r = e.i(393202),
    i = e.i(271954),
    n = e.i(439393),
    l = e.i(720756),
    o = e.i(22338),
    c = e.i(764113),
    s = e.i(304117);

  function u(e) {
    window.location.href = e
  }
  e.s(["useShellNavigate", 0, function() {
    let e, h, d = (0, t.c)(8),
      y = (0, a.usePathname)(),
      {
        navigate: p
      } = (0, i.useNavigate)(),
      m = (0, r.useQueryClient)(),
      f = (0, l.useGatewayQueryContext)(),
      P = (0, n.useShellRouteExperiments)();
    d[0] !== P || d[1] !== f || d[2] !== p || d[3] !== y || d[4] !== m ? (e = (e, t) => {
      let a = {
          to: e,
          searchParams: t?.searchParams,
          hash: t?.hash
        },
        r = (0, o.resolveShellLocation)(a),
        i = new URL(r, window.location.origin).pathname;
      if (!(0, s.shouldUseShellHistoryNavigation)(y, i)) return void p(r, t?.replace === !0 ? {
        replace: !0
      } : void 0);
      let n = () => {
        (0, c.commitShellNavigation)({
          resolved: r,
          fromPathname: y,
          replace: t?.replace
        }, {
          queryClient: m,
          gatewayCtx: f,
          experiments: P
        })
      };
      t?.commitWrapper ? t.commitWrapper(n, i) : n()
    }, d[0] = P, d[1] = f, d[2] = p, d[3] = y, d[4] = m, d[5] = e) : e = d[5];
    let L = e;
    return d[6] !== L ? (h = {
      navigate: L,
      navigateExternal: u
    }, d[6] = L, d[7] = h) : h = d[7], h
  }])
}, 439393, 764113, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(543912);
  e.s(["useShellRouteExperiments", 0, function() {
    let e, r = (0, t.c)(2),
      i = (0, a.useHatchIdeaColorIconsWithoutExposure)();
    return r[0] !== i ? (e = {
      ideaColorIcons: i
    }, r[0] = i, r[1] = e) : e = r[1], e
  }], 439393);
  var r = e.i(432459),
    i = e.i(22338),
    n = e.i(546963),
    l = e.i(915637);
  e.s(["commitShellNavigation", 0, function(t, a) {
    let o = new URL(t.resolved, window.location.origin),
      {
        aliasRedirect: c,
        match: s
      } = (0, i.resolveShellLocationMatch)(o.pathname, o.searchParams, l.shellRouteMetadata),
      u = null == c ? o.pathname : new URL(c, window.location.origin).pathname;
    if (s && o.pathname !== t.fromPathname && (0, r.startNavigationTrace)(u, t.fromPathname), (0, n.cancelShellRouteIntentPrefetches)(), s) {
      let t = (0, n.getShellRoutePrefetchEpoch)();
      Promise.all([e.A(722496), e.A(944894)]).then(([{
        shellRoutes: e
      }, {
        primeShellRouteNavigation: r
      }]) => {
        if (t !== (0, n.getShellRoutePrefetchEpoch)()) return;
        let {
          match: l
        } = (0, i.resolveShellLocationMatch)(o.pathname, o.searchParams, e);
        null != l && r(l, a)?.catch(() => {})
      }).catch(() => {})
    }
    if (t.replace) return void window.history.replaceState(null, "", t.resolved);
    let h = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    `${o.pathname}${o.search}${o.hash}` === h ? window.history.replaceState(null, "", t.resolved) : window.history.pushState(null, "", t.resolved)
  }], 764113)
}, 558416, e => {
  "use strict";
  let t = "/ideas/preview-image";

  function a(e) {
    let t = e?.trim() ?? "";
    if (0 === t.length || t.length > 512) return null;
    for (let e = 0; e < t.length; e += 1) {
      let a = t.charCodeAt(e);
      if (a <= 31 || 127 === a) return null
    }
    return t
  }
  e.s(["HATCH_IDEA_PREVIEW_IMAGE_PATH", 0, t, "getHatchIdeaDeepLinkId", 0, function(e) {
    return a(e.getAll("id").at(-1)) ?? a(e.getAll("idea_id").at(-1))
  }, "hatchIdeaPreviewImagePath", 0, function(e, a = "") {
    let r = new URLSearchParams({
      id: e
    });
    return `${t}?${r}`
  }, "isPublicHatchIdeaId", 0, function(e) {
    return a(e) === e && "." !== e && ".." !== e && !/^\d+$/u.test(e) && !/[\s/\\?#\p{C}]/u.test(e)
  }])
}]);

//# debugId=412db616-e55e-8141-9a60-3b8e5f9b6aed
//# sourceMappingURL=20nb98d1_r7uv.js.map