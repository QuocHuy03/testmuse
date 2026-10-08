;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "f5c9b347-30f7-44bf-1a4b-cd0fc65fa07e")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 486868, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(519172),
    o = e.i(543836),
    i = e.i(271359),
    l = e.i(855128),
    a = e.i(698900),
    s = e.i(296994),
    c = e.i(749987),
    u = e.i(778469),
    d = e.i(312610),
    f = e.i(942928),
    p = e.i(792135),
    h = e.i(803976),
    g = e.i(714035),
    m = e.i(767102),
    v = Object.defineProperty,
    C = (e, t) => v(e, "name", {
      value: t,
      configurable: !0
    }),
    [x, b] = (0, l.createContextScope)("Tooltip", [c.createPopperScope]),
    y = (0, c.createPopperScope)(),
    T = "tooltip.open",
    [w, E] = x("TooltipProvider"),
    _ = C(e => {
      let {
        __scopeTooltip: n,
        delayDuration: o = 700,
        skipDelayDuration: i = 300,
        disableHoverableContent: l = !1,
        children: a
      } = e, s = r.useRef(!0), c = r.useRef(!1), u = r.useRef(0);
      return r.useEffect(() => {
        let e = u.current;
        return () => window.clearTimeout(e)
      }, []), (0, t.jsx)(w, {
        scope: n,
        isOpenDelayedRef: s,
        delayDuration: o,
        onOpen: r.useCallback(() => {
          i <= 0 || (window.clearTimeout(u.current), s.current = !1)
        }, [i]),
        onClose: r.useCallback(() => {
          i <= 0 || (window.clearTimeout(u.current), u.current = window.setTimeout(() => s.current = !0, i))
        }, [i]),
        isPointerInTransitRef: c,
        onPointerInTransitChange: r.useCallback(e => {
          c.current = e
        }, []),
        disableHoverableContent: l,
        children: a
      })
    }, "TooltipProvider"),
    R = "Tooltip",
    [L, j] = x(R),
    P = C(e => {
      let {
        __scopeTooltip: n,
        children: o,
        open: i,
        defaultOpen: l,
        onOpenChange: a,
        disableHoverableContent: u,
        delayDuration: d
      } = e, f = E(R, e.__scopeTooltip), p = y(n), [g, m] = r.useState(null), [v, x] = r.useState(void 0), b = (0, s.useId)(), w = r.useRef(0), _ = u ?? f.disableHoverableContent, j = d ?? f.delayDuration, P = r.useRef(!1), [S, D] = (0, h.useControllableState)({
        prop: i,
        defaultProp: l ?? !1,
        onChange: C(e => {
          e ? (f.onOpen(), document.dispatchEvent(new CustomEvent(T))) : f.onClose(), a?.(e)
        }, "onChange"),
        caller: R
      }), M = r.useMemo(() => S ? P.current ? "delayed-open" : "instant-open" : "closed", [S]), N = r.useCallback(() => {
        window.clearTimeout(w.current), w.current = 0, P.current = !1, D(!0)
      }, [D]), k = r.useCallback(() => {
        window.clearTimeout(w.current), w.current = 0, D(!1)
      }, [D]), O = r.useCallback(() => {
        window.clearTimeout(w.current), w.current = window.setTimeout(() => {
          P.current = !0, D(!0), w.current = 0
        }, j)
      }, [j, D]);
      return r.useEffect(() => () => {
        w.current && (window.clearTimeout(w.current), w.current = 0)
      }, []), (0, t.jsx)(c.Root, {
        ...p,
        children: (0, t.jsx)(L, {
          scope: n,
          contentId: v ?? b,
          setContentId: x,
          open: S,
          stateAttribute: M,
          trigger: g,
          onTriggerChange: m,
          onTriggerEnter: r.useCallback(() => {
            f.isOpenDelayedRef.current ? O() : N()
          }, [f.isOpenDelayedRef, O, N]),
          onTriggerLeave: r.useCallback(() => {
            _ ? k() : (window.clearTimeout(w.current), w.current = 0)
          }, [k, _]),
          onOpen: N,
          onClose: k,
          disableHoverableContent: _,
          children: o
        })
      })
    }, "Tooltip"),
    S = "TooltipTrigger",
    D = r.forwardRef(C(function(e, n) {
      let {
        __scopeTooltip: l,
        ...a
      } = e, s = j(S, l), u = E(S, l), d = y(l), p = r.useRef(null), h = (0, i.useComposedRefs)(n, p, s.onTriggerChange), g = r.useRef(!1), m = r.useRef(!1), v = r.useCallback(() => g.current = !1, []);
      return r.useEffect(() => () => document.removeEventListener("pointerup", v), [v]), (0, t.jsx)(c.Anchor, {
        asChild: !0,
        ...d,
        children: (0, t.jsx)(f.Primitive.button, {
          "aria-describedby": s.open ? s.contentId : void 0,
          "data-state": s.stateAttribute,
          ...a,
          ref: h,
          onPointerMove: (0, o.composeEventHandlers)(e.onPointerMove, e => {
            "touch" !== e.pointerType && (m.current || u.isPointerInTransitRef.current || (s.onTriggerEnter(), m.current = !0))
          }),
          onPointerLeave: (0, o.composeEventHandlers)(e.onPointerLeave, () => {
            s.onTriggerLeave(), m.current = !1
          }),
          onPointerDown: (0, o.composeEventHandlers)(e.onPointerDown, () => {
            s.open && s.onClose(), g.current = !0, document.addEventListener("pointerup", v, {
              once: !0
            })
          }),
          onFocus: (0, o.composeEventHandlers)(e.onFocus, () => {
            g.current || s.onOpen()
          }),
          onBlur: (0, o.composeEventHandlers)(e.onBlur, s.onClose),
          onClick: (0, o.composeEventHandlers)(e.onClick, s.onClose)
        })
      })
    }, "TooltipTrigger")),
    M = "TooltipPortal",
    [N, k] = x(M, {
      forceMount: void 0
    }),
    O = C(e => {
      let {
        __scopeTooltip: n,
        forceMount: r,
        children: o,
        container: i
      } = e, l = j(M, n);
      return (0, t.jsx)(N, {
        scope: n,
        forceMount: r,
        children: (0, t.jsx)(d.Presence, {
          present: r || l.open,
          children: (0, t.jsx)(u.Portal, {
            asChild: !0,
            container: i,
            children: o
          })
        })
      })
    }, "TooltipPortal"),
    I = "TooltipContent",
    A = r.forwardRef(C(function(e, n) {
      let r = k(I, e.__scopeTooltip),
        {
          forceMount: o = r.forceMount,
          side: i = "top",
          ...l
        } = e,
        a = j(I, e.__scopeTooltip);
      return (0, t.jsx)(d.Presence, {
        present: o || a.open,
        children: a.disableHoverableContent ? (0, t.jsx)(B, {
          side: i,
          ...l,
          ref: n
        }) : (0, t.jsx)(H, {
          side: i,
          ...l,
          ref: n
        })
      })
    }, "TooltipContent")),
    H = r.forwardRef(C(function(e, n) {
      let o = j(I, e.__scopeTooltip),
        l = E(I, e.__scopeTooltip),
        a = r.useRef(null),
        s = (0, i.useComposedRefs)(n, a),
        [c, u] = r.useState(null),
        {
          trigger: d,
          onClose: f
        } = o,
        p = a.current,
        {
          onPointerInTransitChange: h
        } = l,
        g = r.useCallback(() => {
          u(null), h(!1)
        }, [h]),
        m = r.useCallback((e, t) => {
          let n = e.currentTarget,
            r = {
              x: e.clientX,
              y: e.clientY
            },
            o = V(r, n.getBoundingClientRect());
          u(Z([...z(r, o), ...F(t.getBoundingClientRect())])), h(!0)
        }, [h]);
      return r.useEffect(() => () => g(), [g]), r.useEffect(() => {
        if (d && p) {
          let e = C(e => m(e, p), "handleTriggerLeave"),
            t = C(e => m(e, d), "handleContentLeave");
          return d.addEventListener("pointerleave", e), p.addEventListener("pointerleave", t), () => {
            d.removeEventListener("pointerleave", e), p.removeEventListener("pointerleave", t)
          }
        }
      }, [d, p, m, g]), r.useEffect(() => {
        if (c) {
          let e = C(e => {
            let t = e.target,
              n = {
                x: e.clientX,
                y: e.clientY
              },
              r = d?.contains(t) || p?.contains(t),
              o = !G(n, c);
            r ? g() : o && (g(), f())
          }, "handleTrackPointerGrace");
          return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
        }
      }, [d, p, c, f, g]), (0, t.jsx)(B, {
        ...e,
        ref: s
      })
    }, "TooltipContentHoverable")),
    U = (0, p.createSlottable)("TooltipContent"),
    B = r.forwardRef(C(function(e, n) {
      let {
        __scopeTooltip: o,
        children: i,
        "aria-label": l,
        id: s,
        onEscapeKeyDown: u,
        onPointerDownOutside: d,
        ...f
      } = e, p = j(I, o), h = y(o), {
        onClose: v
      } = p;
      r.useEffect(() => (document.addEventListener(T, v), () => document.removeEventListener(T, v)), [v]), r.useEffect(() => {
        if (p.trigger) {
          let e = C(e => {
            e.target instanceof Node && e.target.contains(p.trigger) && v()
          }, "handleScroll");
          return window.addEventListener("scroll", e, {
            capture: !0
          }), () => window.removeEventListener("scroll", e, {
            capture: !0
          })
        }
      }, [p.trigger, v]);
      let {
        setContentId: x
      } = p;
      return (0, g.useLayoutEffect)(() => (x(s), () => {
        x(void 0)
      }), [s, x]), (0, t.jsx)(a.DismissableLayer, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: d,
        onFocusOutside: e => e.preventDefault(),
        onDismiss: v,
        children: (0, t.jsxs)(c.Content, {
          "data-state": p.stateAttribute,
          role: l ? void 0 : "tooltip",
          id: l ? void 0 : p.contentId,
          ...h,
          ...f,
          ref: n,
          style: {
            ...f.style,
            "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
          },
          children: [(0, t.jsx)(U, {
            children: i
          }), l ? (0, t.jsx)(m.Root, {
            id: p.contentId,
            role: "tooltip",
            children: l
          }) : null]
        })
      })
    }, "TooltipContentImpl"));

  function V(e, t) {
    let n = Math.abs(t.top - e.y),
      r = Math.abs(t.bottom - e.y),
      o = Math.abs(t.right - e.x),
      i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
      case i:
        return "left";
      case o:
        return "right";
      case n:
        return "top";
      case r:
        return "bottom";
      default:
        throw Error("unreachable")
    }
  }

  function z(e, t, n = 5) {
    let r = [];
    switch (t) {
      case "top":
        r.push({
          x: e.x - n,
          y: e.y + n
        }, {
          x: e.x + n,
          y: e.y + n
        });
        break;
      case "bottom":
        r.push({
          x: e.x - n,
          y: e.y - n
        }, {
          x: e.x + n,
          y: e.y - n
        });
        break;
      case "left":
        r.push({
          x: e.x + n,
          y: e.y - n
        }, {
          x: e.x + n,
          y: e.y + n
        });
        break;
      case "right":
        r.push({
          x: e.x - n,
          y: e.y - n
        }, {
          x: e.x - n,
          y: e.y + n
        })
    }
    return r
  }

  function F(e) {
    let {
      top: t,
      right: n,
      bottom: r,
      left: o
    } = e;
    return [{
      x: o,
      y: t
    }, {
      x: n,
      y: t
    }, {
      x: n,
      y: r
    }, {
      x: o,
      y: r
    }]
  }

  function G(e, t) {
    let {
      x: n,
      y: r
    } = e, o = !1;
    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
      let l = t[e],
        a = t[i],
        s = l.x,
        c = l.y,
        u = a.x,
        d = a.y;
      c > r != d > r && n < (u - s) * (r - c) / (d - c) + s && (o = !o)
    }
    return o
  }

  function Z(e) {
    let t = e.slice();
    return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : 1 * !!(e.y > t.y)), q(t)
  }

  function q(e) {
    if (e.length <= 1) return e.slice();
    let t = [];
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      for (; t.length >= 2;) {
        let e = t[t.length - 1],
          n = t[t.length - 2];
        if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
        else break
      }
      t.push(r)
    }
    t.pop();
    let n = [];
    for (let t = e.length - 1; t >= 0; t--) {
      let r = e[t];
      for (; n.length >= 2;) {
        let e = n[n.length - 1],
          t = n[n.length - 2];
        if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
        else break
      }
      n.push(r)
    }
    return (n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y) ? t : t.concat(n)
  }
  C(V, "getExitSideFromRect"), C(z, "getPaddedExitPoints"), C(F, "getPointsFromRect"), C(G, "isPointInPolygon"), C(Z, "getHull"), C(q, "getHullPresorted");
  var K = e.i(374785),
    W = e.i(612270);
  let Y = (0, r.createContext)(!1);

  function X(e) {
    let r, o, i, l, a = (0, n.c)(8);
    a[0] !== e ? ({
      delayDuration: o,
      disableHoverableContent: i,
      ...r
    } = e, a[0] = e, a[1] = r, a[2] = o, a[3] = i) : (r = a[1], o = a[2], i = a[3]);
    let s = void 0 === o ? 0 : o,
      c = void 0 === i || i;
    return a[4] !== s || a[5] !== c || a[6] !== r ? (l = (0, t.jsx)(Y.Provider, {
      value: !0,
      children: (0, t.jsx)(_, {
        "data-slot": "tooltip-provider",
        delayDuration: s,
        disableHoverableContent: c,
        ...r
      })
    }), a[4] = s, a[5] = c, a[6] = r, a[7] = l) : l = a[7], l
  }
  e.s(["Tooltip", 0, function({
    defaultOpen: e,
    disabled: n,
    open: o,
    onOpenChange: i,
    ...l
  }) {
    let a = (0, r.useContext)(Y),
      s = (0, W.useIsTouchDevice)(),
      c = (0, r.useRef)(s);
    c.current = s;
    let [u, d] = (0, r.useState)(e ?? !1), f = void 0 !== o, p = f ? o : u, h = e => {
      (c.current || n) && e || (i?.(e), f || d(e))
    };
    return a ? (0, t.jsx)(P, {
      "data-slot": "tooltip",
      open: p && !n,
      onOpenChange: h,
      ...l
    }) : (0, t.jsx)(X, {
      children: (0, t.jsx)(P, {
        "data-slot": "tooltip",
        open: p && !n,
        onOpenChange: h,
        ...l
      })
    })
  }, "TooltipContent", 0, function(e) {
    let r, o, i, l, a, s, c, u, d = (0, n.c)(16);
    d[0] !== e ? ({
      className: o,
      sideOffset: a,
      subtitle: l,
      children: r,
      ...i
    } = e, d[0] = e, d[1] = r, d[2] = o, d[3] = i, d[4] = l, d[5] = a) : (r = d[1], o = d[2], i = d[3], l = d[4], a = d[5]);
    let f = void 0 === a ? 0 : a;
    return d[6] !== o ? (s = (0, K.cn)("bg-fill-blur-thick backdrop-blur-elevation-03 text-text-primary shadow-blur-elevation-03 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 text-caption-1 squircle-8 z-60 w-fit origin-(--radix-tooltip-content-transform-origin) px-2 py-1.5 text-balance", "has-data-[menu-closing=true]:hidden has-data-[opened=true]:duration-0", o), d[6] = o, d[7] = s) : s = d[7], d[8] !== r || d[9] !== l ? (c = null == l ? r : (0, t.jsxs)("span", {
      "data-slot": "tooltip-title-group",
      className: "flex flex-col items-start gap-px",
      children: [(0, t.jsx)("span", {
        "data-slot": "tooltip-title",
        className: "text-text-primary",
        children: r
      }), (0, t.jsx)("span", {
        "data-slot": "tooltip-subtitle",
        className: "text-text-secondary",
        children: l
      })]
    }), d[8] = r, d[9] = l, d[10] = c) : c = d[10], d[11] !== i || d[12] !== f || d[13] !== s || d[14] !== c ? (u = (0, t.jsx)(O, {
      children: (0, t.jsx)(A, {
        "data-slot": "tooltip-content",
        sideOffset: f,
        className: s,
        ...i,
        children: c
      })
    }), d[11] = i, d[12] = f, d[13] = s, d[14] = c, d[15] = u) : u = d[15], u
  }, "TooltipProvider", 0, X, "TooltipTrigger", 0, function(e) {
    let r, o = (0, n.c)(2);
    return o[0] !== e ? (r = (0, t.jsx)(D, {
      "data-slot": "tooltip-trigger",
      ...e
    }), o[0] = e, o[1] = r) : r = o[1], r
  }], 486868)
}, 896634, 175521, e => {
  "use strict";
  var t = e.i(519172);
  let n = "default";

  function r(e) {
    return null != e && "object" == typeof e && "string" == typeof e.userText && "string" == typeof e.userBubble && "string" == typeof e.agentText && "string" == typeof e.agentBubble && "string" == typeof e.background
  }

  function o(e) {
    return null != e && "object" == typeof e && r(e.light) && r(e.dark)
  }

  function i(e, t, n) {
    let r = t?.[e];
    if (o(r)) return r;
    let i = n?.[e];
    return o(i) ? i : null
  }

  function l(e, t, n) {
    return i(e, t, n) ?? i("default", t, n) ?? i("blue", t, n)
  }
  e.s(["DEFAULT_CHAT_THEME_ID", 0, n, "getChatThemeSwatch", 0, function(e, t, n, r) {
    let o = l(e, n, r),
      i = o?.[t ? "dark" : "light"];
    return i ? i.userBubble : null
  }, "resolveChatThemeVariants", 0, l], 175521);
  let a = new Set(["dark"]),
    s = (0, t.createContext)({
      theme: "light",
      themePreference: "system",
      setTheme: () => null,
      styleTheme: "default",
      setStyleTheme: () => null,
      accentColor: "blue",
      setAccentColor: () => null,
      connectorsDismissed: !1,
      setConnectorsDismissed: () => null,
      macPromo: {
        shown: 0,
        lastShownDay: null,
        downloaded: !1
      },
      recordMacPromoShown: () => null,
      recordMacPromoDownloaded: () => null,
      resetMacPromo: () => null,
      chatTheme: n,
      setChatTheme: () => null,
      chatThemeCookieCache: null,
      setChatThemeCookieCache: () => null
    });
  e.s(["THEME_COLORS", 0, {
    light: "#fcfcfc",
    dark: "#17171a"
  }, "ThemeProviderContext", 0, s, "isDarkTheme", 0, function(e) {
    return a.has(e)
  }], 896634)
}, 229302, e => {
  "use strict";
  let t = (0, e.i(519172).createContext)({});
  e.s(["EctoWindowDimensionsContext", 0, t])
}, 42673, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(519172);
  let o = (0, r.createContext)(void 0);
  e.s(["UserAgentContextProvider", 0, function(e) {
    let r, i = (0, n.c)(3),
      {
        children: l,
        userAgent: a
      } = e;
    return i[0] !== l || i[1] !== a ? (r = (0, t.jsx)(o.Provider, {
      value: a,
      children: l
    }), i[0] = l, i[1] = a, i[2] = r) : r = i[2], r
  }, "useUserAgent", 0, function() {
    return (0, r.use)(o)
  }])
}, 612270, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(42673),
    r = e.i(519172);
  let o = "(hover: none) or (pointer: coarse)";

  function i() {
    return window.matchMedia(o).matches
  }

  function l(e) {
    let t = window.matchMedia(o);
    return t.addEventListener("change", e), () => t.removeEventListener("change", e)
  }
  e.s(["useIsTouchDevice", 0, function() {
    let e, o = (0, t.c)(2),
      a = (0, n.useUserAgent)();
    o[0] !== a?.device.type ? (e = () => a?.device.type === "mobile" || a?.device.type === "tablet", o[0] = a?.device.type, o[1] = e) : e = o[1];
    let s = e;
    return (0, r.useSyncExternalStore)(l, i, s)
  }])
}, 986907, e => {
  "use strict";
  var t = e.i(260637),
    n = e.i(827288),
    r = e.i(102806),
    o = e.i(645185);
  let i = new t.ManualTraceCore;
  i.onTraceEnd(o.routeStandardizedTraceToFalco);
  let l = new Map;
  e.s(["endManualTrace", 0, function(e, t) {
    var n;
    let r, o;
    l.forEach((t, n) => {
      t.trace === e && (r = t.trace, o = n)
    }), o && (n = o, l.delete(n)), r && r.end(t)
  }, "forEachVisibilityAnnotatedTrace", 0, function(e) {
    l.forEach(t => {
      t.annotateVisibility && e(t.trace)
    })
  }, "startManualInteraction", 0, function(e, t) {
    let o = i.startTrace({
        traceType: "INTERACTION",
        tracePolicy: e,
        markerId: t?.markerId ?? r.HATCH_INTERACTION_MARKER.i,
        debugName: t?.debugName,
        ...t?.startTimeMs != null ? {
          startTime: t.startTimeMs
        } : {}
      }),
      a = o.getTraceId(),
      s = Math.round(performance.timeOrigin + (t?.startTimeMs ?? performance.now()));
    return o.annotate({
        string: {
          join_id: a,
          qpl_join__source_clock: "unreliable",
          trace_policy: e,
          ...t?.includeUri === !1 ? {} : {
            uri: window.location.origin + (0, n.redactSecretBearingPathname)(window.location.pathname)
          }
        },
        int: {
          qpl_join__absolute_time_origin_ms: s
        },
        bool: {
          qpl_join__source_is_primary: !0
        }
      }),
      function(e, t, n = !0) {
        l.set(e, {
          trace: t,
          annotateVisibility: n
        })
      }(a, o, t?.annotateVisibility), o
  }])
}, 885462, e => {
  "use strict";
  let t = new Map,
    n = !1,
    r = null,
    o = 0,
    i = 0,
    l = !1;

  function a(e) {
    for (let [n] of [...t].sort(([, e], [, t]) => e - t)) n(e)
  }

  function s(e) {
    return null != r ? r : (r = e, l = !1, a({
      type: "hidden",
      hiddenAtMs: e
    }), e)
  }

  function c(e) {
    if ("visible" !== document.visibilityState || null == r) return !1;
    let t = r,
      n = Math.max(0, Date.now() - t);
    return r = null, l = !1, o = n, a({
      type: "resume",
      hiddenAtMs: t,
      hiddenDurationMs: n,
      resumeSeq: i += 1,
      trigger: e
    }), !0
  }

  function u() {
    "hidden" === document.visibilityState ? s(Date.now()) : c("visibilitychange")
  }

  function d() {
    c("focus") || a({
      type: "attention",
      trigger: "focus"
    })
  }

  function f() {
    c("pageshow") || a({
      type: "attention",
      trigger: "pageshow"
    })
  }

  function p(e) {
    a({
      type: "pagehide",
      persisted: e.persisted
    }), null == r && (r = Date.now(), l = !1), e.persisted && (l = !0)
  }

  function h() {
    let e = s(Date.now());
    l || (l = !0, a({
      type: "freeze",
      hiddenAtMs: e
    }))
  }
  e.s(["getCurrentResumeSeq", 0, function() {
    return i
  }, "getPageLifecycleSnapshot", 0, function() {
    return {
      hiddenAtMs: r,
      isFrozen: l,
      lastHiddenDurationMs: o,
      resumeSeq: i
    }
  }, "subscribeToPageLifecycle", 0, function(e, o = {}) {
    t.set(e, o.priority ?? 0), !n && "u" > typeof document && (n = !0, "hidden" === document.visibilityState && null == r && (r = Date.now()), document.addEventListener("visibilitychange", u), document.addEventListener("freeze", h), window.addEventListener("focus", d), window.addEventListener("pageshow", f), window.addEventListener("pagehide", p));
    let i = !0;
    return () => {
      i && (i = !1, t.delete(e))
    }
  }])
}, 255859, e => {
  "use strict";
  let t = /\bHatch\b/g;

  function n(e) {
    return {
      fullName: e,
      shortName: e,
      shortNameLowercase: e.toLowerCase(),
      assistantFallbackName: e
    }
  }
  let r = n("Muse"),
    o = n("Muse");

  function i(...e) {
    return e.filter(e => e.length > 0).join(" — ")
  }
  let l = i(r.shortName, "Your Personal AI Agent"),
    a = {
      siteName: r.shortName,
      fallbackTitle: l
    };
  e.s(["LOGGED_IN_PRODUCT_BRAND", 0, o, "LOGGED_OUT_PRODUCT_BRAND", 0, r, "PRODUCT_BRAND", 0, o, "PRODUCT_SOCIAL_TITLE", 0, l, "PUBLIC_SHARE_BRAND", 0, a, "formatProductTitle", 0, i, "replaceLegacyProductBrandNames", 0, function(e, n = o) {
    return e.replaceAll("Project Hatch", n.fullName).replace(t, n.shortName)
  }])
}, 871157, e => {
  "use strict";
  e.s(["gatewayTargetKey", 0, function(e, t) {
    return JSON.stringify([e, t])
  }])
}, 588741, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(519172),
    o = e.i(345717),
    i = e.i(863641),
    l = e.i(359783);
  let a = (0, r.createContext)(null),
    s = (0, l.createClientLogger)("fbteeRenderGuard"),
    c = new Set,
    u = {
      GENDER: o.IntlVariations.GENDER_UNKNOWN,
      locale: "en_US",
      translationLocale: "en_US"
    },
    d = (0, r.createContext)(u),
    f = u,
    p = !1,
    h = new Set(["en_US"]);
  e.s(["LocaleViewerProvider", 0, function(e) {
    let i, l, a, s, c = (0, n.c)(10),
      {
        locale: u,
        translationLocale: p,
        gender: h,
        children: g
      } = e,
      m = void 0 === h ? o.IntlVariations.GENDER_UNKNOWN : h;
    c[0] !== m || c[1] !== u || c[2] !== p ? (i = {
      GENDER: m,
      locale: u,
      translationLocale: p
    }, c[0] = m, c[1] = u, c[2] = p, c[3] = i) : i = c[3];
    let v = i;
    return c[4] !== v ? (l = () => {
      f = v
    }, a = [v], c[4] = v, c[5] = l, c[6] = a) : (l = c[5], a = c[6]), (0, r.useEffect)(l, a), c[7] !== g || c[8] !== v ? (s = (0, t.jsx)(d.Provider, {
      value: v,
      children: g
    }), c[7] = g, c[8] = v, c[9] = s) : s = c[9], s
  }, "initLocaleViewerContext", 0, function() {
    p || (p = !0, (0, o.setupFbtee)({
      translations: {
        en_US: {}
      },
      hooks: {
        getTranslatedInput: e => {
          try {
            (0, r.use)(a)
          } catch {
            let e, t, n;
            e = Error("fbs() and fbt() must be evaluated while React is rendering. Evaluate translated strings in the component or custom-hook body, then pass the result to callbacks."), t = e.stack?.split("\n").slice(1).map(e => e.trim()), n = t?.find(e => !e.includes("reportInvalidFbteeUsage") && !e.includes("assertFbteeRenderContext") && !e.includes("getTranslatedInput") && !e.includes("node_modules/fbtee") && !e.includes("node_modules/.pnpm/fbtee@")) ?? t?.at(-1) ?? "unknown", c.has(n) || c.size >= 50 || (c.add(n), s.error({
              error: e,
              outsideRenderCallsite: n,
              tags: (0, i.hatchSentryTags)(i.HATCH_SENTRY_SURFACES.ROOT)
            }, "fbtee translation evaluated outside a React render"))
          }
          return o.FbtTranslations.getTranslatedInput(e)
        },
        getViewerContext: () => {
          let e;
          try {
            e = (0, r.use)(d)
          } catch {
            e = f
          }
          return {
            GENDER: e.GENDER,
            locale: e.translationLocale
          }
        }
      }
    }))
  }, "mergeLocaleTranslations", 0, function(e, t) {
    h.has(e) || (o.FbtTranslations.mergeTranslations({
      [e]: t
    }), h.add(e))
  }, "useLocaleViewerContext", 0, function() {
    return (0, r.useContext)(d)
  }], 588741)
}, 381052, e => {
  "use strict";
  let t = new Set(["ar", "he", "fa", "ur"]);

  function n(e) {
    let n = e.replace(/_/g, "-");
    try {
      let e = new Intl.Locale(n);
      if (e.textInfo?.direction) return "rtl" === e.textInfo.direction
    } catch {}
    let r = (e.split(/[-_]/)[0] ?? "").toLowerCase();
    return t.has(r)
  }
  e.s(["getTextDirection", 0, function(e) {
    return n(e) ? "rtl" : "ltr"
  }, "isRTL", 0, n])
}, 986044, e => {
  "use strict";
  var t = e.i(519172),
    n = e.i(984416),
    r = Object.defineProperty,
    o = (e, t) => r(e, "name", {
      value: t,
      configurable: !0
    }),
    i = t.createContext(void 0),
    l = o(e => {
      let {
        dir: t,
        children: r
      } = e;
      return (0, n.jsx)(i.Provider, {
        value: t,
        children: r
      })
    }, "DirectionProvider");

  function a(e) {
    let n = t.useContext(i);
    return e || n || "ltr"
  }
  o(a, "useDirection"), e.s(["DirectionProvider", 0, l, "useDirection", 0, a])
}, 357370, e => {
  "use strict";
  var t = e.i(519172),
    n = e.i(714035);

  function r(e) {
    let [r, o] = t.useState(void 0);
    return (0, n.useLayoutEffect)(() => {
      if (e) {
        o({
          width: e.offsetWidth,
          height: e.offsetHeight
        });
        let t = new ResizeObserver(t => {
          let n, r;
          if (!Array.isArray(t) || !t.length) return;
          let i = t[0];
          if ("borderBoxSize" in i) {
            let e = i.borderBoxSize,
              t = Array.isArray(e) ? e[0] : e;
            n = t.inlineSize, r = t.blockSize
          } else n = e.offsetWidth, r = e.offsetHeight;
          o({
            width: n,
            height: r
          })
        });
        return t.observe(e, {
          box: "border-box"
        }), () => t.unobserve(e)
      }
      o(void 0)
    }, [e]), r
  }(0, Object.defineProperty)(r, "name", {
    value: "useSize",
    configurable: !0
  }), e.s(["useSize", 0, r])
}, 767102, e => {
  "use strict";
  var t = e.i(519172),
    n = e.i(942928),
    r = e.i(984416),
    o = Object.defineProperty,
    i = Object.freeze({
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal"
    }),
    l = t.forwardRef(o(function(e, t) {
      return (0, r.jsx)(n.Primitive.span, {
        ...e,
        ref: t,
        style: {
          ...i,
          ...e.style
        }
      })
    }, "name", {
      value: "VisuallyHidden",
      configurable: !0
    }));
  e.s(["Root", 0, l, "VISUALLY_HIDDEN_STYLES", 0, i])
}, 235185, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, o, i, l, a, s = (0, n.c)(10);
    return s[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = r) : r = s[1], s[2] !== e.children ? (o = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = o) : o = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      d: "M15.79 7.66C16.08 7.27 16.63 7.18 17.02 7.47C17.41 7.75 17.49 8.3 17.21 8.69L11.13 17.02C10.97 17.23 10.72 17.36 10.45 17.37C10.18 17.38 9.93 17.27 9.75 17.06L6.58 13.3C6.27 12.94 6.32 12.38 6.69 12.07C7.05 11.76 7.61 11.81 7.92 12.18L10.37 15.08L15.79 7.66Z"
    }), l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 1.13C18.01 1.13 22.88 5.99 22.88 12C22.88 18.01 18.01 22.88 12 22.88C5.99 22.88 1.13 18.01 1.13 12C1.13 5.99 5.99 1.13 12 1.13ZM12 2.88C6.96 2.88 2.88 6.96 2.88 12C2.88 17.04 6.96 21.13 12 21.13C17.04 21.13 21.13 17.04 21.13 12C21.13 6.96 17.04 2.88 12 2.88Z"
    }), s[4] = i, s[5] = l) : (i = s[4], l = s[5]), s[6] !== e || s[7] !== r || s[8] !== o ? (a = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, o, i, l]
    }), s[6] = e, s[7] = r, s[8] = o, s[9] = a) : a = s[9], a
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 375338, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, o, i, l, a, s, c = (0, n.c)(11);
    return c[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), c[0] = e.title, c[1] = r) : r = c[1], c[2] !== e.children ? (o = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), c[2] = e.children, c[3] = o) : o = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      d: "M12 9.22C12.69 9.22 13.25 9.78 13.25 10.48V17.24C13.25 17.94 12.69 18.5 12 18.5C11.3 18.5 10.74 17.94 10.74 17.24V10.48C10.74 9.78 11.3 9.22 12 9.22Z"
    }), l = (0, t.jsx)("path", {
      d: "M12 5.21C12.42 5.21 12.77 5.35 13.05 5.62C13.34 5.9 13.48 6.24 13.48 6.65C13.48 7.06 13.34 7.41 13.05 7.68C12.77 7.96 12.42 8.1 12 8.1C11.58 8.1 11.23 7.96 10.95 7.68C10.66 7.41 10.52 7.06 10.52 6.65C10.52 6.24 10.66 5.9 10.95 5.62C11.23 5.35 11.58 5.21 12 5.21Z"
    }), a = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 1.13C18.01 1.13 22.88 5.99 22.88 12C22.88 18.01 18.01 22.88 12 22.88C5.99 22.88 1.13 18.01 1.13 12C1.13 5.99 5.99 1.13 12 1.13ZM12 2.88C6.96 2.88 2.88 6.96 2.88 12C2.88 17.04 6.96 21.13 12 21.13C17.04 21.13 21.13 17.04 21.13 12C21.13 6.96 17.04 2.88 12 2.88Z"
    }), c[4] = i, c[5] = l, c[6] = a) : (i = c[4], l = c[5], a = c[6]), c[7] !== e || c[8] !== r || c[9] !== o ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, o, i, l, a]
    }), c[7] = e, c[8] = r, c[9] = o, c[10] = s) : s = c[10], s
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 943325, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, o, i, l, a, s = (0, n.c)(10);
    return s[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = r) : r = s[1], s[2] !== e.children ? (o = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = o) : o = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      d: "M14.92 7.85C15.26 7.5 15.81 7.5 16.15 7.85C16.5 8.19 16.5 8.74 16.15 9.08L13.24 12L16.15 14.92C16.5 15.26 16.5 15.81 16.15 16.15C15.81 16.5 15.26 16.5 14.92 16.15L12 13.24L9.08 16.15C8.74 16.5 8.19 16.5 7.85 16.15C7.5 15.81 7.5 15.26 7.85 14.92L10.76 12L7.85 9.08C7.5 8.74 7.5 8.19 7.85 7.85C8.19 7.5 8.74 7.5 9.08 7.85L12 10.76L14.92 7.85Z"
    }), l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 1.13C18.01 1.13 22.88 5.99 22.88 12C22.88 18.01 18.01 22.88 12 22.88C5.99 22.88 1.13 18.01 1.13 12C1.13 5.99 5.99 1.13 12 1.13ZM12 2.88C6.96 2.88 2.88 6.96 2.88 12C2.88 17.04 6.96 21.13 12 21.13C17.04 21.13 21.13 17.04 21.13 12C21.13 6.96 17.04 2.88 12 2.88Z"
    }), s[4] = i, s[5] = l) : (i = s[4], l = s[5]), s[6] !== e || s[7] !== r || s[8] !== o ? (a = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, o, i, l]
    }), s[6] = e, s[7] = r, s[8] = o, s[9] = a) : a = s[9], a
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 805163, e => {
  "use strict";
  e.s(["toError", 0, function(e) {
    return e instanceof Error ? e : Error(String(e))
  }])
}]);

//# debugId=f5c9b347-30f7-44bf-1a4b-cd0fc65fa07e
//# sourceMappingURL=15otpei3hamw-.js.map