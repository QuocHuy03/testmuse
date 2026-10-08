;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "b6c30cd2-c2c5-92a3-940e-fb62931194c1")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 562588, e => {
  "use strict";
  var t = e.i(984416),
    i = e.i(345717),
    n = e.i(722099),
    a = e.i(519172),
    l = e.i(848048),
    s = e.i(281539),
    r = e.i(823173),
    c = e.i(420297),
    o = e.i(646361),
    u = e.i(670578),
    d = e.i(239286),
    f = e.i(813280),
    m = e.i(918340),
    p = e.i(672495);
  let h = e => e.days,
    x = e => e.hasLoadError,
    g = e => e.isLoading,
    y = e => e.isLoadingMore,
    _ = e => e.hasMore;

  function b() {
    return (0, p.useHatchActivitySelector)(h)
  }

  function v() {
    return (0, p.useHatchActivitySelector)(g)
  }

  function k() {
    return (0, p.useHatchActivitySelector)(y)
  }

  function j() {
    return (0, p.useHatchActivitySelector)(_)
  }
  var N = e.i(399678),
    S = e.i(508180),
    A = e.i(180110),
    I = e.i(770256),
    w = e.i(498596),
    T = e.i(710913),
    C = e.i(250778),
    E = e.i(440802),
    H = e.i(374785),
    O = e.i(374180),
    $ = e.i(173174),
    z = e.i(587517),
    L = e.i(407149);

  function D(e) {
    let i, a, l, s, r, c = (0, n.c)(10);
    return c[0] !== e.title ? (i = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), c[0] = e.title, c[1] = i) : i = c[1], c[2] !== e.children ? (a = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), c[2] = e.children, c[3] = a) : a = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      d: "M13 12a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zm2-4a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z"
    }), s = (0, t.jsx)("path", {
      fillRule: "evenodd",
      d: "M14.018 2.004a3 3 0 0 1 2.02.929l3.137 3.3A3 3 0 0 1 20 8.298V19a3 3 0 0 1-3 3H7a3 3 0 0 1-2.996-2.846L4 19V5a3 3 0 0 1 3-3h6.864zM7 4a1 1 0 0 0-1 1v14l.005.102A1 1 0 0 0 7 20h10a1 1 0 0 0 1-1V8.299a1 1 0 0 0-.275-.689l-3.136-3.3a1 1 0 0 0-.623-.305L13.864 4z",
      clipRule: "evenodd"
    }), c[4] = l, c[5] = s) : (l = c[4], s = c[5]), c[6] !== e || c[7] !== i || c[8] !== a ? (r = (0, t.jsxs)("svg", {
      fill: "currentColor",
      viewBox: "0 0 24 24",
      width: "1em",
      height: "1em",
      ...e,
      children: [i, a, l, s]
    }), c[6] = e, c[7] = i, c[8] = a, c[9] = r) : r = c[9], r
  }
  D._isSVG = !0;
  var R = e.i(442282),
    F = e.i(325814),
    P = e.i(80467),
    M = e.i(849329),
    U = e.i(175286),
    Y = e.i(653388),
    W = e.i(720756),
    V = e.i(181959),
    B = e.i(430116);
  let G = Array.from({
    length: 8
  }, (e, t) => {
    let i = (360 * t / 8 - 90) * Math.PI / 180;
    return {
      x1: 50 + 24 * Math.cos(i),
      y1: 50 + 24 * Math.sin(i),
      x2: 50 + 38 * Math.cos(i),
      y2: 50 + 38 * Math.sin(i),
      delay: -((8 - t) / 8 * .9)
    }
  });

  function K(e) {
    let a, l, s, r, c = (0, n.c)(14),
      {
        size: o,
        color: u,
        isDecorative: d,
        className: f,
        testid: m
      } = e,
      p = void 0 === o ? 20 : o,
      h = void 0 === u ? "currentColor" : u,
      x = void 0 !== d && d,
      g = x ? void 0 : "status";
    c[0] !== x ? (a = x ? void 0 : i.fbt._("Loading", null, {
      hk: "18FFYj"
    }), c[0] = x, c[1] = a) : a = c[1];
    let y = x || void 0;
    return c[2] !== f ? (l = (0, H.cn)("shrink-0", f), c[2] = f, c[3] = l) : l = c[3], c[4] !== h ? (s = G.map((e, i) => (0, t.jsx)("line", {
      x1: e.x1,
      y1: e.y1,
      x2: e.x2,
      y2: e.y2,
      stroke: h,
      strokeWidth: 9,
      strokeLinecap: "round",
      className: "animate-activity-indicator-fade",
      style: {
        animationDelay: `${e.delay}s`
      }
    }, i)), c[4] = h, c[5] = s) : s = c[5], c[6] !== p || c[7] !== g || c[8] !== a || c[9] !== y || c[10] !== l || c[11] !== s || c[12] !== m ? (r = (0, t.jsx)("svg", {
      width: p,
      height: p,
      viewBox: "0 0 100 100",
      fill: "none",
      role: g,
      "aria-label": a,
      "aria-hidden": y,
      "data-testid": m,
      className: l,
      children: s
    }), c[6] = p, c[7] = g, c[8] = a, c[9] = y, c[10] = l, c[11] = s, c[12] = m, c[13] = r) : r = c[13], r
  }
  var q = e.i(621545),
    J = e.i(943325),
    Q = e.i(235185);
  let X = {
    background: "linear-gradient(90deg, var(--text-primary) 0%, var(--text-tertiary) 50%, var(--text-primary) 100%)",
    backgroundSize: "200% 100%",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "shimmer 3s infinite reverse"
  };

  function Z(e) {
    let i, a = (0, n.c)(2),
      {
        children: l
      } = e;
    return a[0] !== l ? (i = (0, t.jsx)("span", {
      className: "text-footnote",
      style: X,
      children: l
    }), a[0] = l, a[1] = i) : i = a[1], i
  }

  function ee(e) {
    let a, l, s = (0, n.c)(5),
      {
        section: r
      } = e;
    s[0] !== r.kind || s[1] !== r.subagentNumber ? (a = "main" === r.kind ? i.fbs._("MAIN", null, {
      hk: "4pAmbb"
    }) : `${i.fbs._("SUBAGENT",null,{hk:"VbwqX"})} ${String(r.subagentNumber).padStart(2,"0")}`, s[0] = r.kind, s[1] = r.subagentNumber, s[2] = a) : a = s[2];
    let c = a;
    return s[3] !== c ? (l = (0, t.jsx)("div", {
      className: "px-2 pb-2",
      children: (0, t.jsx)(B.Text, {
        variant: "caption-1-emphasized",
        as: "div",
        className: "font-mono tracking-wider uppercase",
        children: c
      })
    }), s[3] = c, s[4] = l) : l = s[4], l
  }
  let et = "rounded-12 relative flex w-full cursor-pointer items-start gap-2.5 py-2 ps-2 pe-4 text-start transition-colors outline-none select-none",
    ei = "dark:bg-bg-primary bg-[var(--ai-gray-150)]",
    en = "hover:bg-fill-secondary-elevated",
    ea = "border-fill-divider absolute start-[17px] top-[30px] bottom-[-2px] border-s border-solid";

  function el(e) {
    let a, r, c, o, u, d, f, m, p = (0, n.c)(19),
      {
        isSelected: h,
        showConnector: x,
        onSelect: g
      } = e;
    p[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
      eventName: s.HatchClickEvent.STATUS_ACTIVITY_STEP_CLICK,
      actionTarget: "status_activity_step",
      actionType: "click",
      metadata: {
        surface: "status",
        subsurface: "activity_detail",
        kind: "kickoff"
      }
    }, p[0] = a) : a = p[0];
    let {
      ref: y,
      onClick: _
    } = (0, l.useTrackedClickRef)(a);
    p[1] !== h || p[2] !== x ? (r = x && !h && (0, t.jsx)("div", {
      className: ea
    }), p[1] = h, p[2] = x, p[3] = r) : r = p[3], p[4] !== _ || p[5] !== g ? (c = () => {
      _(), g()
    }, p[4] = _, p[5] = g, p[6] = c) : c = p[6];
    let b = h || void 0,
      v = h ? ei : en;
    return p[7] !== v ? (o = (0, H.cn)(et, v), p[7] = v, p[8] = o) : o = p[8], p[9] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, t.jsx)("div", {
      className: "shrink-0",
      children: (0, t.jsx)("div", {
        className: "flex size-[18px] items-center justify-center",
        children: (0, t.jsx)("div", {
          className: "bg-text-tertiary size-1.5 rounded-full"
        })
      })
    }), p[9] = u) : u = p[9], p[10] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, t.jsx)("div", {
      className: "min-w-0 flex-1",
      children: (0, t.jsx)("div", {
        className: "text-footnote text-text-primary line-clamp-2",
        children: i.fbs._("Started", null, {
          hk: "4CLxDC"
        })
      })
    }), p[10] = d) : d = p[10], p[11] !== y || p[12] !== c || p[13] !== b || p[14] !== o ? (f = (0, t.jsxs)("button", {
      ref: y,
      type: "button",
      onClick: c,
      "data-selected": b,
      className: o,
      children: [u, d]
    }), p[11] = y, p[12] = c, p[13] = b, p[14] = o, p[15] = f) : f = p[15], p[16] !== r || p[17] !== f ? (m = (0, t.jsxs)("div", {
      className: "relative",
      children: [r, f]
    }), p[16] = r, p[17] = f, p[18] = m) : m = p[18], m
  }

  function es(e) {
    let i, a, r = (0, n.c)(14),
      {
        items: c,
        selection: u,
        showConnectorOnLast: d,
        onSelectAction: f
      } = e,
      m = (0, l.useInteractionLoggerWithLazyData)();
    if (r[0] !== c || r[1] !== m || r[2] !== f || r[3] !== u || r[4] !== d) {
      let e;
      r[6] !== c.length || r[7] !== m || r[8] !== f || r[9] !== u || r[10] !== d ? (e = (e, i) => {
        var n;
        let {
          goalAction: a,
          chronologicalIndex: l
        } = e, r = u?.kind === "action" && (null != u.actionId && null != a.id ? u.actionId === a.id : u.index === l), p = "RUNNING" === a.status, h = "FAILED" === a.status, x = i === c.length - 1, g = !x || x && d, y = h ? J.default : (n = a.icon) && Object.prototype.hasOwnProperty.call(P.ACTION_TYPE_ICONS, n) ? P.ACTION_TYPE_ICONS[n].icon : Q.default;
        return (0, t.jsxs)("div", {
          className: "relative",
          children: [g && !r && (0, t.jsx)("div", {
            className: ea
          }), (0, t.jsxs)("button", {
            type: "button",
            onClick: () => {
              m({
                eventName: s.HatchClickEvent.STATUS_ACTIVITY_STEP_CLICK,
                actionTarget: "status_activity_step",
                actionType: "click",
                metadata: {
                  surface: "status",
                  subsurface: "activity_detail",
                  kind: "action"
                }
              }), f(l)
            },
            "data-selected": r || void 0,
            className: (0, H.cn)(et, r ? ei : en),
            children: [(0, t.jsx)("div", {
              className: "shrink-0",
              children: p ? (0, t.jsx)(K, {
                size: 20,
                isDecorative: !0,
                testid: "goal-action-running-spinner"
              }) : (0, t.jsx)(o.HatchIcon, {
                icon: y,
                size: 18,
                className: "text-text-secondary",
                "data-testid": h ? "goal-action-failed-icon" : void 0
              })
            }), (0, t.jsx)("div", {
              className: "min-w-0 flex-1",
              children: (0, t.jsx)("div", {
                className: "text-footnote text-text-primary line-clamp-2",
                children: a.title
              })
            })]
          })]
        }, a.id ?? `action-${a.createdAt??"no-ts"}-${l}`)
      }, r[6] = c.length, r[7] = m, r[8] = f, r[9] = u, r[10] = d, r[11] = e) : e = r[11], i = c.map(e), r[0] = c, r[1] = m, r[2] = f, r[3] = u, r[4] = d, r[5] = i
    } else i = r[5];
    return r[12] !== i ? (a = (0, t.jsx)(t.Fragment, {
      children: i
    }), r[12] = i, r[13] = a) : a = r[13], a
  }

  function er(e) {
    let a, r, c, u, d, f, m = (0, n.c)(13),
      {
        isSelected: p,
        onSelect: h
      } = e;
    m[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
      eventName: s.HatchClickEvent.STATUS_ACTIVITY_STEP_CLICK,
      actionTarget: "status_activity_step",
      actionType: "click",
      metadata: {
        surface: "status",
        subsurface: "activity_detail",
        kind: "completed"
      }
    }, m[0] = a) : a = m[0];
    let {
      ref: x,
      onClick: g
    } = (0, l.useTrackedClickRef)(a);
    m[1] !== g || m[2] !== h ? (r = () => {
      g(), h()
    }, m[1] = g, m[2] = h, m[3] = r) : r = m[3];
    let y = p || void 0,
      _ = p ? ei : en;
    return m[4] !== _ ? (c = (0, H.cn)(et, _), m[4] = _, m[5] = c) : c = m[5], m[6] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, t.jsx)("div", {
      className: "shrink-0",
      children: (0, t.jsx)(o.HatchIcon, {
        icon: q.default,
        size: 20,
        className: "text-text-primary"
      })
    }), m[6] = u) : u = m[6], m[7] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, t.jsx)("div", {
      className: "min-w-0 flex-1 pt-px",
      children: (0, t.jsx)("div", {
        className: "text-footnote text-text-primary",
        children: i.fbs._("Completed", null, {
          hk: "3O100f"
        })
      })
    }), m[7] = d) : d = m[7], m[8] !== x || m[9] !== r || m[10] !== y || m[11] !== c ? (f = (0, t.jsx)("div", {
      className: "relative",
      children: (0, t.jsxs)("button", {
        ref: x,
        type: "button",
        onClick: r,
        "data-selected": y,
        className: c,
        children: [u, d]
      })
    }), m[8] = x, m[9] = r, m[10] = y, m[11] = c, m[12] = f) : f = m[12], f
  }

  function ec() {
    let e, a, l = (0, n.c)(2);
    return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("div", {
      className: "mt-0.5 shrink-0",
      children: (0, t.jsx)(R.HatchLottieIcon, {
        src: "/animations/ic-compose_agentic-medium.json",
        size: 20,
        playing: !0,
        loop: !0
      })
    }), l[0] = e) : e = l[0], l[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsxs)("div", {
      className: "flex items-start gap-2.5 py-2 ps-2 pe-4",
      children: [e, (0, t.jsx)("div", {
        className: "min-w-0 flex-1",
        children: (0, t.jsx)(Z, {
          children: i.fbs._("Working...", null, {
            hk: "1wU81D"
          })
        })
      })]
    }), l[1] = a) : a = l[1], a
  }
  var eo = e.i(298066),
    eu = e.i(855548),
    ed = e.i(161220),
    ef = e.i(659131),
    em = e.i(960607),
    ep = e.i(539522),
    eh = e.i(826972);
  let ex = /(?:sandbox:\/\/)?(?:workspace\/)?(artifacts|your_files)\/([a-z0-9][a-z0-9_-]*)(?!\.[a-z0-9])(?:\/([^/\s"'`)\]]+\.html)|\/(?=$|[\s"'`)*\],:;]|\.(?=$|\s))|(?=$|[\s"'`)*\],:;.]))/gi,
    eg = /\.(png|jpe?g|gif|webp|svg|avif|heic|bmp|tiff?)(?:[?#].*)?$/i,
    ey = /(?:sandbox:\/\/)?\/?(?:workspace\/)?[^\s"'`)\]/]+\/[^\s"'`)\]]+\.(png|jpe?g|gif|webp|svg|avif|heic|bmp|tiff?)(?:[?#][^\s"'`)\]]*)?/gi,
    e_ = /(?:sandbox:\/\/)?\/?(?:(?:workspace\/)?(?:artifacts|your_files)\/|workspace\/)[^\s"'`)\]]+\.[a-z0-9]{1,12}/gi,
    eb = /^(?:https?:)?\/\//i,
    ev = /^[a-z][a-z0-9+.-]*:/i,
    ek = /^(?:created|built|generated|wrote|saved)\b/i;

  function ej(e) {
    let t = e.trim();
    if (0 === t.length) return null;
    let i = (0, em.getVmMediaNoiseFetchPath)(t);
    if (void 0 !== i) return null == i ? null : {
      key: `fs:${(0,eh.toHatchGatewayRawApiPath)(i,!0)}`,
      source: t
    };
    if (eb.test(t)) return null;
    if (t.startsWith("/") || t.startsWith("sandbox:///")) {
      let e = (0, ep.resolveLocalImagePath)(t.startsWith("sandbox://") ? t.slice(10) : t);
      return null == e ? null : {
        key: `fs:${(0,eh.toHatchGatewayApiPath)(e)}`,
        source: e
      }
    }
    let n = t.startsWith("sandbox://") ? t.slice(10) : t,
      a = n.lastIndexOf("workspace/");
    a > 0 && (n = n.slice(a));
    let l = (n = n.replace(/^\/+/, "")).startsWith("workspace/") ? n : `workspace/${n}`;
    if (l.split("/").some(e => 0 === e.length || "." === e || ".." === e)) return null;
    let s = `sandbox://${l}`;
    return {
      key: `fs:${(0,eh.toHatchGatewayApiPath)(l)}`,
      source: s
    }
  }

  function eN(e) {
    return (e.match(/\\n/g)?.length ?? 0) + (e.match(/\\r\\n/g)?.length ?? 0) >= 2 || e.includes("\\n- ") || e.includes("\\n* ") || e.includes("\\n#") || e.includes("\\n> ") || e.includes("\\n|") || e.includes("\\n1. ") || e.includes("\\n2. ") || e.includes("\\n3. ") || e.includes(".\\n") ? e.replace(/\\r\\n/g, "\n").replace(/\\n/g, "\n").replace(/\\t/g, "	") : e
  }
  var eS = e.i(863641);
  let eA = {
    surface: "status",
    subsurface: "activity_detail",
    preview_kind: "markdown_html"
  };

  function eI(e) {
    return {
      source: `sandbox://${e.path}`,
      label: e.displayName
    }
  }

  function ew(e) {
    let i, a, l, s = (0, n.c)(9),
      {
        content: r
      } = e;
    s[0] !== r ? (i = (0, ef.splitContentIntoMediaSegments)(r), s[0] = r, s[1] = i) : i = s[1];
    let c = i;
    if (s[2] !== r || s[3] !== c) {
      let e;
      s[5] !== r ? (e = e => {
        if ("images" === e.type) return (0, t.jsx)(ed.HatchImageGrid, {
          imageSources: e.sources,
          sourcePathsUrlEncoded: !0
        }, e.key);
        let i = "text" === e.type ? e.content : r.slice(e.start, e.end);
        return (0, t.jsx)(eo.HatchMarkdownRenderer, {
          content: i,
          className: "[&_h1]:text-headline-emphasized [&_h2]:text-body-emphasized [&_h3]:text-body-emphasized [&_h1:first-child]:hidden [&_h2:first-child]:hidden [&_h3]:mt-3 [&_h3]:mb-1 [&_p]:text-subheadline [&_p]:!mt-0 [&_p]:!mb-2 [&_li]:text-subheadline [&_li]:!my-0 [&_ol]:!my-1 [&_ul]:!my-1 [&_code]:text-[13px] max-w-none [&>div]:mb-0 [&>div]:gap-0",
          artifactOpenOrigin: "current",
          htmlPreviewErrorSurface: eS.HATCH_SENTRY_SURFACES.STATUS_ACTIVITY,
          htmlPreviewRetryMetadata: eA
        }, e.key)
      }, s[5] = r, s[6] = e) : e = s[6], a = c.map(e), s[2] = r, s[3] = c, s[4] = a
    } else a = s[4];
    return s[7] !== a ? (l = (0, t.jsx)("div", {
      className: "flex flex-col gap-2",
      children: a
    }), s[7] = a, s[8] = l) : l = s[8], l
  }

  function eT(e) {
    let a, l, s, r, c, o, u = (0, n.c)(52),
      {
        selection: d,
        goalActions: f,
        finishMessage: m,
        createdFiles: p,
        actionSubtitle: h
      } = e,
      x = m ?? "";
    u[0] !== p || u[1] !== f || u[2] !== x ? (a = function(e, t, i) {
      let n = new Set,
        a = new Set,
        l = [],
        s = new Map,
        r = (e, t = "your_files", i) => {
          let s = `sandbox://workspace/${t}/${e}`,
            r = i ? `${s}/${i}` : s,
            c = (0, eh.toSafeHatchWorkspaceApiPath)(r);
          if (null == c) return;
          let o = `fs:${c}`;
          n.has(o) || (n.add(o), null != i && a.add(o), l.push({
            kind: "artifact",
            src: r
          }))
        },
        c = (e, t = !1) => {
          let i = ej(e);
          null == i || (t && a.add(i.key), n.has(i.key) || (n.add(i.key), l.push({
            kind: "image",
            src: i.source
          })))
        },
        o = (e, t) => {
          let i = (0, eh.toSafeHatchWorkspaceApiPath)(`workspace/${t}/${e}`);
          null != i && s.set(`fs:${i}`, {
            dir: t,
            slug: e
          })
        },
        u = e => {
          let t, i, s = (0, eh.toSafeHatchWorkspaceApiPath)((t = e.trim()).startsWith("/") || eb.test(t) || ev.test(t) && !t.startsWith("sandbox://") || /(^|\/)workspace\//.test(t) ? t : t.startsWith("sandbox://") ? `sandbox://workspace/${t.slice(10).replace(/^\/+/,"")}` : `workspace/${t.replace(/^\/+/,"")}`);
          if (null != s && "workspace" === (i = s.split("/"))[0] && ("artifacts" === i[1] || "your_files" === i[1]) && i.slice(2).includes(".src")) return;
          if (eg.test(e)) return void c(e, !0);
          if (null == s) return;
          let o = s.split("/"),
            u = o[1],
            d = o[2],
            f = o[3];
          "artifacts" !== u && "your_files" !== u || null == d || (3 !== o.length || d.includes(".")) && (4 !== o.length || f?.toLowerCase().endsWith(".html") !== !0) ? (e => {
            let t = (0, eh.toSafeHatchWorkspaceApiPath)(e);
            if (null == t) return;
            let i = `fs:${t}`;
            a.add(i), n.has(i) || (n.add(i), l.push({
              kind: "file",
              src: `sandbox://${t}`
            }))
          })(s) : r(d, u, f)
        };
      if (null != i)
        for (let e of i) u(e);
      if (e) {
        let t;
        for (ex.lastIndex = 0; null != (t = ex.exec(e));) t[2] && r(t[2], t[1], t[3]);
        for (e_.lastIndex = 0; null != (t = e_.exec(e));) u(t[0])
      }
      for (let e of t)
        if (e.status?.toUpperCase() !== "FAILED" && ("file_created" === e.icon || "file_updated" === e.icon || ek.test(e.title))) {
          let t = [e.title];
          for (let i of (e.report && t.push(e.report), t)) {
            let e;
            for (ex.lastIndex = 0; null != (e = ex.exec(i));) e[1] && e[2] && e[3] ? r(e[2], e[1], e[3]) : e[1] && e[2] && o(e[2], e[1]);
            for (e_.lastIndex = 0; null != (e = e_.exec(i));) u(e[0])
          }
        } let d = [e];
      for (let e of t)(e.attachments?.length ?? 0) === 0 && (e.report && d.push(e.report), d.push(e.title));
      for (let e of d) {
        let t;
        for (ey.lastIndex = 0; null != (t = ey.exec(e));) c(t[0])
      }
      for (let [e, t] of s)[...a].some(t => t.startsWith(`${e}/`)) || r(t.slug, t.dir);
      return l
    }(x, f, p), u[0] = p, u[1] = f, u[2] = x, u[3] = a) : a = u[3];
    let g = a;
    u[4] !== g || u[5] !== f ? (l = function(e, t) {
      let i = new Set,
        n = [],
        a = e => {
          i.has(e.source) || (i.add(e.source), n.push(e))
        };
      for (let t of e)
        for (let e of t.attachments ?? []) a(eI(e));
      for (let e of t) "image" === e.kind && a({
        source: e.src
      });
      return n
    }(f, g), u[4] = g, u[5] = f, u[6] = l) : l = u[6];
    let y = l;
    u[7] !== f || u[8] !== d ? (s = d?.kind === "action" ? (null != d.actionId ? f.find(e => e.id === d.actionId) ?? null : null) ?? f[d.index] ?? null : null, u[7] = f, u[8] = d, u[9] = s) : s = u[9];
    let _ = s;
    e: {
      let e;
      if (null == _) {
        let e;
        u[10] === Symbol.for("react.memo_cache_sentinel") ? (e = [], u[10] = e) : e = u[10], r = e;
        break e
      }
      if (u[11] !== _.report || u[12] !== _.title) {
        let t = [_.title];
        _.report && t.push(_.report), e = function(e) {
          let t = new Set,
            i = [];
          for (let n of e) {
            let e;
            for (ey.lastIndex = 0; null != (e = ey.exec(n));) {
              let n = ej(e[0]);
              null == n || t.has(n.key) || (t.add(n.key), i.push(n.source))
            }
          }
          return i
        }(t), u[11] = _.report, u[12] = _.title, u[13] = e
      } else e = u[13];r = e
    }
    let b = r;
    if (null == d) {
      let e;
      return u[14] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("div", {
        className: "flex h-full items-center justify-center px-6",
        children: (0, t.jsx)("span", {
          className: "text-body text-text-quaternary",
          children: i.fbs._("Select an activity to view details", null, {
            hk: "2CDspn"
          })
        })
      }), u[14] = e) : e = u[14], e
    }
    if ("kickoff" === d.kind) {
      let e, n, a;
      return u[15] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("div", {
        className: "text-title-3-emphasized text-text-primary mb-3",
        children: i.fbs._("Started", null, {
          hk: "2VWU10"
        })
      }), u[15] = e) : e = u[15], u[16] !== h ? (n = null != h && (0, t.jsx)("p", {
        className: "text-subheadline text-text-secondary",
        children: h
      }), u[16] = h, u[17] = n) : n = u[17], u[18] !== n ? (a = (0, t.jsxs)("div", {
        className: "px-10 pt-4 pb-10",
        children: [e, n]
      }), u[18] = n, u[19] = a) : a = u[19], a
    }
    if ("summary" === d.kind) {
      let e, n, a, l, s, r;
      u[20] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("div", {
        className: "text-title-3-emphasized text-text-primary mb-2",
        children: i.fbs._("Summary", null, {
          hk: "CTiLy"
        })
      }), u[20] = e) : e = u[20];
      let c = m ?? "";
      return u[21] !== c ? (n = eN(c), u[21] = c, u[22] = n) : n = u[22], u[23] !== n ? (a = (0, t.jsx)(ew, {
        content: n
      }), u[23] = n, u[24] = a) : a = u[24], u[25] !== g ? (l = g.some(eD) && (0, t.jsx)("div", {
        className: "mt-4 flex flex-wrap gap-3",
        children: g.filter(eL).map(ez)
      }), u[25] = g, u[26] = l) : l = u[26], u[27] !== y ? (s = y.length > 0 && (0, t.jsx)("div", {
        className: "mt-4",
        children: (0, t.jsx)(ed.HatchImageGrid, {
          imageSources: y.map(e$),
          imageLabels: y.map(eO)
        })
      }), u[27] = y, u[28] = s) : s = u[28], u[29] !== l || u[30] !== s || u[31] !== a ? (r = (0, t.jsxs)("div", {
        className: "px-10 pt-4 pb-10",
        children: [e, a, l, s]
      }), u[29] = l, u[30] = s, u[31] = a, u[32] = r) : r = u[32], r
    }
    if (null == _) return null;
    if (u[33] !== b || u[34] !== _.attachments || u[35] !== _.report || u[36] !== _.subtitle || u[37] !== _.title) {
      o = Symbol.for("react.early_return_sentinel");
      t: {
        let e, n, a, l, s = eN(_.report ?? ""),
          r = _.attachments ?? [],
          d = r.length > 0,
          f = d ? (0, ef.stripMarkdownImages)(s) : s,
          m = f.trim().length > 0;u[40] !== _.subtitle ? (e = null != _.subtitle && _.subtitle.trim().length > 0, u[40] = _.subtitle, u[41] = e) : e = u[41];
        let p = e,
          h = m && /!\[.*?\]\(.*?\)/.test(f),
          x = r.map(eI),
          g = d ? x : h ? [] : b.map(eH);
        if (!m && !p && 0 === g.length) {
          let e;
          u[42] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("div", {
            className: "flex h-full items-center justify-center px-6",
            children: (0, t.jsx)("span", {
              className: "text-body text-text-quaternary",
              children: i.fbs._("No details available", null, {
                hk: "kbhl9"
              })
            })
          }), u[42] = e) : e = u[42], o = e;
          break t
        }
        u[43] !== _.title ? (n = (0, t.jsx)("div", {
          className: "text-title-3-emphasized text-text-primary mb-3",
          children: _.title
        }), u[43] = _.title, u[44] = n) : n = u[44],
        u[45] !== _.subtitle || u[46] !== m || u[47] !== p ? (a = p && !m && (0, t.jsx)("p", {
          className: "text-subheadline text-text-secondary",
          children: _.subtitle
        }), u[45] = _.subtitle, u[46] = m, u[47] = p, u[48] = a) : a = u[48],
        u[49] !== m || u[50] !== f ? (l = m && (0, t.jsx)(ew, {
          content: f
        }), u[49] = m, u[50] = f, u[51] = l) : l = u[51],
        c = (0, t.jsxs)("div", {
          className: "px-10 pt-4 pb-10",
          children: [n, a, l, g.length > 0 && (0, t.jsx)("div", {
            className: "mt-4",
            children: (0, t.jsx)(ed.HatchImageGrid, {
              imageSources: g.map(eE),
              imageLabels: g.map(eC)
            })
          })]
        })
      }
      u[33] = b, u[34] = _.attachments, u[35] = _.report, u[36] = _.subtitle, u[37] = _.title, u[38] = c, u[39] = o
    } else c = u[38], o = u[39];
    return o !== Symbol.for("react.early_return_sentinel") ? o : c
  }

  function eC(e) {
    return e.label ?? ""
  }

  function eE(e) {
    return e.source
  }

  function eH(e) {
    return {
      source: e
    }
  }

  function eO(e) {
    return e.label ?? ""
  }

  function e$(e) {
    return e.source
  }

  function ez(e) {
    return (0, t.jsx)(eu.HatchSandboxFileCard, {
      src: e.src,
      displayLabel: "file" === e.kind ? e.src.split("/").pop() : void 0,
      openOrigin: "current",
      errorSurface: eS.HATCH_SENTRY_SURFACES.STATUS_ACTIVITY
    }, e.src)
  }

  function eL(e) {
    return "artifact" === e.kind || "file" === e.kind
  }

  function eD(e) {
    return "artifact" === e.kind || "file" === e.kind
  }
  var eR = e.i(168538);

  function eF(e) {
    return e.subjectId?.trim() || e.agentId?.trim() || null
  }

  function eP(e) {
    return "subagent_finished" !== e.kind
  }

  function eM(e, t) {
    let i = e[t]?.id;
    return null != i ? {
      kind: "action",
      index: t,
      actionId: i
    } : {
      kind: "action",
      index: t
    }
  }

  function eU(e) {
    let i, l, s, r, c, o, u, d, f, m, p, h, x, g, y, _, b, v, k, j, N, S, A, I = (0, n.c)(69),
      {
        goalActions: w,
        rootAgentId: T,
        finishMessage: C,
        status: E,
        createdFiles: H,
        actionSubtitle: O,
        initialActionId: $
      } = e;
    I[0] !== w ? (i = w.map((e, t) => {
      let i = null != e.createdAt ? Date.parse(e.createdAt) : NaN;
      return {
        actionIndex: null != e.actionIndex && Number.isFinite(e.actionIndex) ? e.actionIndex : null,
        goalAction: e,
        index: t,
        timestampMs: Number.isFinite(i) ? i : null
      }
    }).sort((e, t) => {
      var i, n;
      if (null != e.actionIndex && null != t.actionIndex && e.actionIndex !== t.actionIndex) return e.actionIndex - t.actionIndex;
      let a = (i = e.timestampMs, n = t.timestampMs, null != i && null != n ? i - n : null != i ? -1 : +(null != n));
      return 0 !== a ? a : e.index - t.index
    }).map(e => e.goalAction), I[0] = w, I[1] = i) : i = I[1];
    let z = i;
    e: {
      let e;
      if (null == $) {
        l = -1;
        break e
      }
      if (I[2] !== $ || I[3] !== z) {
        let t;
        I[5] !== $ ? (t = e => e.id === $, I[5] = $, I[6] = t) : t = I[6], e = z.findIndex(t), I[2] = $, I[3] = z, I[4] = e
      } else e = I[4];l = e
    }
    let L = l;
    I[7] !== z || I[8] !== T ? (s = function(e, t) {
      if (0 === e.length) return [];
      let i = e.map((e, t) => ({
          goalAction: e,
          chronologicalIndex: t
        })),
        n = t?.trim() || null,
        a = i.some(({
          goalAction: e
        }) => null != e.agentDepth),
        l = i.some(({
          goalAction: e
        }) => {
          let t = e.agentId?.trim();
          return null == t || "" === t
        }),
        s = n ?? (a || l ? null : i.find(({
          goalAction: e
        }) => {
          let t = e.agentId?.trim();
          return null != t && "" !== t
        })?.goalAction.agentId ?? null),
        r = [],
        c = new Map;
      for (let e of i) {
        let t = e.goalAction.agentId?.trim(),
          i = e.goalAction.agentDepth;
        if (null != i) {
          if (i <= 0 || null == t || "" === t) {
            r.push(e);
            continue
          }
          let n = c.get(t);
          if (null != n) {
            n.push(e);
            continue
          }
          c.set(t, [e]);
          continue
        }
        if (a && null == n || null == t || "" === t || null != s && t === s) {
          r.push(e);
          continue
        }
        let l = c.get(t);
        if (null != l) {
          l.push(e);
          continue
        }
        c.set(t, [e])
      }
      let o = [];
      return r.length > 0 && o.push({
        kind: "main",
        subagentNumber: null,
        items: r
      }), Array.from(c.values()).forEach((e, t) => {
        o.push({
          kind: "subagent",
          subagentNumber: t + 1,
          items: e
        })
      }), o
    }(z, T), I[7] = z, I[8] = T, I[9] = s) : s = I[9];
    let D = s;
    I[10] !== D ? (r = D.find(eG) ?? null, I[10] = D, I[11] = r) : r = I[11];
    let R = r;
    I[12] !== D ? (c = D.filter(eB), I[12] = D, I[13] = c) : c = I[13];
    let F = c;
    I[14] !== C ? (o = C?.trim(), I[14] = C, I[15] = o) : o = I[15];
    let P = o,
      M = null != H && H.length > 0,
      U = ("success" === E || "blocked" === E || "stopped" === E) && (null != P || M);
    t: {
      for (let e = z.length - 1; e >= 0; e--)
        if (eP(z[e])) {
          u = e;
          break t
        } u = null
    }
    let Y = u;
    I[16] !== L || I[17] !== Y || I[18] !== z || I[19] !== U ? (d = () => L >= 0 ? eM(z, L) : U ? {
      kind: "summary"
    } : null != Y ? eM(z, Y) : {
      kind: "kickoff"
    }, I[16] = L, I[17] = Y, I[18] = z, I[19] = U, I[20] = d) : d = I[20];
    let [W, V] = (0, a.useState)(d), B = "pending" === E, G = W?.kind === "summary", K = (0, a.useRef)(!1), q = (0, a.useRef)(null != $ && L >= 0 ? $ : null);
    I[21] !== R?.items ? (f = R?.items.filter(eV) ?? [], I[21] = R?.items, I[22] = f) : f = I[22];
    let J = f;
    if (I[23] !== z) {
      m = new Set;
      for (let e = 0; e < z.length; e++) {
        let t = z[e],
          i = "subagent_started" !== t.kind && "subagent_finished" !== t.kind ? null : eF(t);
        null != i && ("subagent_started" === t.kind ? m.add(i) : "subagent_finished" === t.kind && ! function(e, t, i) {
          for (let n = 0; n < t; n++) {
            let t = e[n];
            if ("RUNNING" === t.status && (t.subjectId?.trim() === i || t.agentId?.trim() === i)) return !0
          }
          return !1
        }(z, e, i) && m.delete(i))
      }
      I[23] = z, I[24] = m
    } else m = I[24];
    let Q = m,
      X = J.length > 0 || U;
    I[25] !== $ || I[26] !== L || I[27] !== z ? (p = () => {
      null == $ || L < 0 || K.current || q.current !== $ && (q.current = $, V(eM(z, L)))
    }, h = [$, L, z], I[25] = $, I[26] = L, I[27] = z, I[28] = p, I[29] = h) : (p = I[28], h = I[29]), (0, a.useEffect)(p, h);
    let Z = W?.kind === "kickoff";
    return I[30] === Symbol.for("react.memo_cache_sentinel") ? (x = () => {
      K.current = !0, V({
        kind: "kickoff"
      })
    }, I[30] = x) : x = I[30], I[31] !== X || I[32] !== Z ? (g = (0, t.jsx)(el, {
      isSelected: Z,
      showConnector: X,
      onSelect: x
    }), I[31] = X, I[32] = Z, I[33] = g) : g = I[33], I[34] !== z ? (y = e => {
      K.current = !0, V(eM(z, e))
    }, I[34] = z, I[35] = y) : y = I[35], I[36] !== J || I[37] !== W || I[38] !== U || I[39] !== y ? (_ = (0, t.jsx)(es, {
      items: J,
      selection: W,
      showConnectorOnLast: U,
      onSelectAction: y
    }), I[36] = J, I[37] = W, I[38] = U, I[39] = y, I[40] = _) : _ = I[40], I[41] !== G || I[42] !== U ? (b = U && (0, t.jsx)(er, {
      isSelected: G,
      onSelect: () => {
        K.current = !0, V({
          kind: "summary"
        })
      }
    }), I[41] = G, I[42] = U, I[43] = b) : b = I[43], I[44] !== B ? (v = B && (0, t.jsx)(ec, {}), I[44] = B, I[45] = v) : v = I[45], I[46] !== g || I[47] !== _ || I[48] !== b || I[49] !== v ? (k = (0, t.jsxs)("div", {
      className: "rounded-12 p-1",
      children: [g, _, b, v]
    }), I[46] = g, I[47] = _, I[48] = b, I[49] = v, I[50] = k) : k = I[50], I[51] !== Q || I[52] !== z || I[53] !== W || I[54] !== B || I[55] !== F ? (j = F.map(e => {
      let i = e.items.filter(eW);
      if (0 === i.length) return null;
      let n = i.some(eY),
        l = i.some(e => {
          let {
            goalAction: t
          } = e, i = eF(t);
          return null != i && Q.has(i)
        }),
        s = B && (l || n);
      return (0, t.jsxs)(a.default.Fragment, {
        children: [(0, t.jsx)("div", {
          className: "border-fill-divider mx-2 mb-px border-t"
        }), (0, t.jsxs)("div", {
          className: "rounded-12 p-1",
          children: [(0, t.jsx)(ee, {
            section: e
          }), (0, t.jsx)(es, {
            items: i,
            selection: W,
            showConnectorOnLast: !1,
            onSelectAction: e => {
              K.current = !0, V(eM(z, e))
            }
          }), s && (0, t.jsx)(ec, {})]
        })]
      }, `subagent-${e.subagentNumber}`)
    }), I[51] = Q, I[52] = z, I[53] = W, I[54] = B, I[55] = F, I[56] = j) : j = I[56], I[57] !== k || I[58] !== j ? (N = (0, t.jsx)(eR.default, {
      vertical: !0,
      horizontal: !1,
      className: "bg-fill-secondary dark:bg-fill-primary min-h-0 w-80 shrink-0 px-2 pt-2 pb-8",
      children: (0, t.jsxs)("div", {
        className: "flex flex-col gap-4",
        children: [k, j]
      })
    }), I[57] = k, I[58] = j, I[59] = N) : N = I[59], I[60] !== O || I[61] !== H || I[62] !== P || I[63] !== z || I[64] !== W ? (S = (0, t.jsx)(eR.default, {
      vertical: !0,
      horizontal: !1,
      className: "dark:bg-bg-primary min-h-0 flex-1",
      children: (0, t.jsx)(eT, {
        selection: W,
        goalActions: z,
        finishMessage: P,
        createdFiles: H,
        actionSubtitle: O
      })
    }), I[60] = O, I[61] = H, I[62] = P, I[63] = z, I[64] = W, I[65] = S) : S = I[65], I[66] !== N || I[67] !== S ? (A = (0, t.jsxs)("div", {
      className: "flex min-h-0 flex-1 flex-row overflow-hidden",
      children: [N, S]
    }), I[66] = N, I[67] = S, I[68] = A) : A = I[68], A
  }

  function eY(e) {
    let {
      goalAction: t
    } = e;
    return "RUNNING" === t.status
  }

  function eW(e) {
    let {
      goalAction: t
    } = e;
    return eP(t)
  }

  function eV(e) {
    let {
      goalAction: t
    } = e;
    return eP(t)
  }

  function eB(e) {
    return "subagent" === e.kind
  }

  function eG(e) {
    return "main" === e.kind
  }

  function eK(e) {
    let a, r, c, o, u, d, f, m, p, h, x, g = (0, n.c)(38),
      {
        actionSubtitle: y,
        createdFiles: _,
        finishMessage: b,
        goalActions: v,
        initialActionId: k,
        onOpenChange: j,
        open: N,
        rootAgentId: S,
        status: A,
        title: I
      } = e,
      w = function(e) {
        switch (e) {
          case "pending":
            return {
              label: i.fbs._("In Progress", null, {
                hk: "262eIs"
              }), className: "bg-black text-white dark:bg-white dark:text-black"
            };
          case "error":
            return {
              label: i.fbs._("Error", null, {
                hk: "1CYAbV"
              }), className: "bg-red-500 text-white dark:text-[#F5F5F5]"
            };
          case "blocked":
            return {
              label: i.fbs._("Blocked", null, {
                hk: "1QQAT8"
              }), className: "bg-orange-500 text-white dark:text-[#F5F5F5]"
            };
          case "stopped":
            return {
              label: i.fbs._("Stopped", null, {
                hk: "8QOE7"
              }), className: "bg-gray-500 text-white dark:bg-gray-400 dark:text-black"
            };
          case "success":
            return {
              label: i.fbs._("Complete", null, {
                hk: "2GvcB7"
              }), className: "bg-green-500/10 text-text-success"
            }
        }
        return {
          label: i.fbs._("Activity", null, {
            hk: "3OFdzD"
          }),
          className: "bg-fill-tertiary text-text-secondary"
        }
      }(A),
      T = (0, l.useInteractionLogger)(),
      C = F.Dialog,
      O = F.DialogContent,
      $ = F.DialogTitle,
      z = B.Text,
      L = (0, H.cn)("rounded-6 self-start px-2.5 py-0.5", w.className);
    g[0] !== z || g[1] !== w.label || g[2] !== L ? (a = (0, t.jsx)(z, {
      variant: "caption-1-emphasized",
      as: "span",
      className: L,
      children: w.label
    }), g[0] = z, g[1] = w.label, g[2] = L, g[3] = a) : a = g[3], g[4] !== I ? (r = (0, t.jsx)("span", {
      className: "text-headline-emphasized text-text-primary break-words",
      children: I
    }), g[4] = I, g[5] = r) : r = g[5], g[6] !== $ || g[7] !== a || g[8] !== r ? (c = (0, t.jsxs)($, {
      className: "flex flex-col gap-2",
      children: [a, r]
    }), g[6] = $, g[7] = a, g[8] = r, g[9] = c) : c = g[9];
    let D = y ?? I;
    return g[10] !== D ? (o = (0, t.jsx)(F.DialogDescription, {
      className: "sr-only",
      children: D
    }), g[10] = D, g[11] = o) : o = g[11], g[12] !== c || g[13] !== o ? (u = (0, t.jsxs)("div", {
      className: "min-w-0 flex-1 pe-4",
      children: [c, o]
    }), g[12] = c, g[13] = o, g[14] = u) : u = g[14], g[15] === Symbol.for("react.memo_cache_sentinel") ? (d = i.fbs._("Close", null, {
      hk: "UaJ3l"
    }), g[15] = d) : d = g[15], g[16] !== T ? (f = (0, t.jsx)("div", {
      className: "flex shrink-0 items-center gap-2",
      children: (0, t.jsx)(F.DialogClose, {
        asChild: !0,
        children: (0, t.jsx)(E.IconButton, {
          icon: V.default,
          label: d,
          variant: "elevated",
          size: "28",
          onClick: () => {
            T({
              eventName: s.HatchClickEvent.STATUS_ACTIVITY_DETAIL_CLOSE,
              actionTarget: "status_activity_detail_close",
              actionType: "click",
              metadata: {
                surface: "status",
                subsurface: "activity_detail"
              }
            })
          }
        })
      })
    }), g[16] = T, g[17] = f) : f = g[17], g[18] !== u || g[19] !== f ? (m = (0, t.jsx)("div", {
      className: "border-fill-divider dark:bg-fill-secondary shrink-0 border-b px-5 py-4",
      children: (0, t.jsxs)("div", {
        className: "flex items-start justify-between",
        children: [u, f]
      })
    }), g[18] = u, g[19] = f, g[20] = m) : m = g[20], g[21] !== y || g[22] !== _ || g[23] !== b || g[24] !== v || g[25] !== k || g[26] !== S || g[27] !== A ? (p = (0, t.jsx)(eU, {
      goalActions: v,
      rootAgentId: S,
      finishMessage: b,
      status: A,
      createdFiles: _,
      actionSubtitle: y,
      initialActionId: k
    }), g[21] = y, g[22] = _, g[23] = b, g[24] = v, g[25] = k, g[26] = S, g[27] = A, g[28] = p) : p = g[28], g[29] !== O || g[30] !== m || g[31] !== p ? (h = (0, t.jsxs)(O, {
      className: "h-[700px] max-w-[960px]",
      contentClassName: "flex min-h-0 flex-1 flex-col gap-0 px-0 pb-0 overflow-hidden",
      showCloseButton: !1,
      children: [m, p]
    }), g[29] = O, g[30] = m, g[31] = p, g[32] = h) : h = g[32], g[33] !== C || g[34] !== j || g[35] !== N || g[36] !== h ? (x = (0, t.jsx)(C, {
      open: N,
      onOpenChange: j,
      children: h
    }), g[33] = C, g[34] = j, g[35] = N, g[36] = h, g[37] = x) : x = g[37], x
  }

  function eq(e) {
    return null != e && "object" == typeof e && !Array.isArray(e)
  }
  let eJ = /^[0-9a-f]{64}$/,
    eQ = /^activity_attachment_[0-9a-f]{64}$/,
    eX = new Set;

  function eZ(e) {
    eX.has(e) || (eX.add(e), (0, eS.captureHatchMessage)(eS.HATCH_SENTRY_SURFACES.STATUS_ACTIVITY, "Activity attachment receipts were rejected", {
      tags: {
        reason: e
      }
    }))
  }

  function e0(e) {
    if ("string" == typeof e && 0 !== e.length && e === e.trim()) return e
  }

  function e1(e) {
    if (!Array.isArray(e)) return [];
    let t = [];
    for (let i of e) {
      if (!eq(i)) continue;
      let e = "string" == typeof i.report ? i.report : "string" == typeof i.commentary ? i.commentary : void 0,
        n = "string" == typeof i.status && ("RUNNING" === i.status || "FINISHED" === i.status || "SUCCESS" === i.status || "FAILED" === i.status) ? i.status : void 0;
      t.push({
        id: "string" == typeof i.id ? i.id : void 0,
        actionIndex: "number" == typeof i.action_index && Number.isFinite(i.action_index) && i.action_index >= 0 ? i.action_index : void 0,
        kind: "string" == typeof i.kind && ("tool_call" === i.kind || "subagent_started" === i.kind || "subagent_finished" === i.kind) ? i.kind : void 0,
        subjectId: "string" == typeof i.subject_id ? i.subject_id : void 0,
        icon: "string" == typeof i.icon ? i.icon : "task_running",
        title: "string" == typeof i.title && "" !== i.title.trim() ? i.title : "Activity",
        subtitle: "string" == typeof i.subtitle ? i.subtitle : void 0,
        report: e,
        status: n,
        createdAt: "string" == typeof i.created_at ? i.created_at : void 0,
        agentId: "string" == typeof i.agent_id ? i.agent_id : void 0,
        agentDepth: "number" == typeof i.agent_depth && Number.isFinite(i.agent_depth) && i.agent_depth >= 0 ? i.agent_depth : void 0,
        attachments: function(e) {
          if (null == e) return;
          if (!Array.isArray(e)) return eZ("invalid_collection");
          if (0 === e.length) return;
          let t = [],
            i = new Set,
            n = new Set;
          for (let l of e) {
            var a;
            if (!eq(l)) return eZ("invalid_entry");
            let e = e0(l.id),
              s = e0(l.path),
              r = e0(l.sha256),
              c = e0(l.display_name),
              o = "image/png" === (a = l.mime_type) || "image/jpeg" === a || "image/webp" === a ? a : void 0,
              u = l.size_bytes,
              d = l.ordinal;
            if (null == e || !eQ.test(e) || null == s || null == r || !eJ.test(r) || null == c || "number" != typeof u || !Number.isSafeInteger(u) || u <= 0 || "number" != typeof d || !Number.isSafeInteger(d) || d < 0) return eZ("invalid_entry");
            if (null == o) return eZ("unsupported_media_type");
            if (s !== `workspace/.hatch-activity/attachments/${r.slice(0,2)}/${r}.${"image/png"===o?"png":"image/jpeg"===o?"jpg":"webp"}`) return eZ("invalid_storage_path");
            if (i.has(e) || n.has(d)) return eZ("duplicate_identity");
            i.add(e), n.add(d), t.push({
              id: e,
              path: s,
              mimeType: o,
              sha256: r,
              sizeBytes: u,
              displayName: c,
              ordinal: d
            })
          }
          return t.sort((e, t) => e.ordinal - t.ordinal), t
        }(i.attachments)
      })
    }
    return t
  }

  function e2(e) {
    let t = function(e) {
      if (eq(e)) return e;
      if ("string" != typeof e) return null;
      try {
        let t = JSON.parse(e);
        return eq(t) ? t : null
      } catch {
        return null
      }
    }(e);
    if (null == t) return null;
    let i = eq(t.goal),
      n = e1(Object.prototype.hasOwnProperty.call(t, "goal_actions") ? t.goal_actions : t.activities),
      a = "string" == typeof t.finish_message ? t.finish_message : void 0,
      l = Array.isArray(t.created_files) && t.created_files.every(e => "string" == typeof e) ? t.created_files : void 0;
    return i || 0 !== n.length || null != a || null != l && 0 !== l.length ? {
      goalActions: n,
      rootAgentId: "string" == typeof t.activity_thread_agent_id ? t.activity_thread_agent_id : void 0,
      finishMessage: a,
      finishStatus: eq(t.finish_status) && "string" == typeof t.finish_status.status ? t.finish_status.status.trim().toLowerCase() : void 0,
      createdFiles: l
    } : null
  }

  function e3(e) {
    let l, s, r, c, o, u, f, m, p, h = (0, n.c)(32),
      {
        activityId: x,
        fallbackActionRecord: g,
        initialActionId: y,
        onOpenChange: _,
        open: b
      } = e,
      v = g?.details ?? null;
    h[0] !== v ? (l = e2(v), h[0] = v, h[1] = l) : l = h[1];
    let k = l,
      {
        data: j,
        isLoading: N
      } = function(e, t) {
        let i, l, s, r, c = (0, n.c)(11),
          {
            gatewayUrl: o,
            gatewayScopeKey: u
          } = (0, U.useHatchRpc)(),
          d = (0, W.useGatewayQueryContext)(),
          f = o ?? "",
          m = u ?? f,
          p = (void 0 === t || t) && f.length > 0 && null != e;
        c[0] !== e || c[1] !== d || c[2] !== m ? (i = Y.activityDetailQuery.queryOptions({
          gatewayUrl: m,
          activityId: e ?? ""
        }, d), c[0] = e, c[1] = d, c[2] = m, c[3] = i) : i = c[3], c[4] !== p || c[5] !== i ? (l = {
          ...i,
          enabled: p
        }, c[4] = p, c[5] = i, c[6] = l) : l = c[6];
        let h = (0, M.useQuery)(l);
        return c[7] !== p || c[8] !== h.data ? (s = () => {
          p && null != h.data && S.upsertTimelineAction(h.data)
        }, r = [p, h.data], c[7] = p, c[8] = h.data, c[9] = s, c[10] = r) : (s = c[9], r = c[10]), (0, a.useEffect)(s, r), h
      }(x, b),
      A = j?.details ?? null;
    h[2] !== A ? (s = e2(A), h[2] = A, h[3] = s) : s = h[3];
    let I = s,
      w = null != I ? j : g,
      T = I ?? k;
    if (null != w && null != T) {
      let e, i, n = w.title,
        a = w.subtitle ?? void 0;
      if (h[4] !== w) {
        let t;
        t = e2(w.details), e = t?.finishStatus === "waiting_for_user" ? "blocked" : w.status, h[4] = w, h[5] = e
      } else e = h[5];
      return h[6] !== w.title || h[7] !== T.createdFiles || h[8] !== T.finishMessage || h[9] !== T.goalActions || h[10] !== T.rootAgentId || h[11] !== y || h[12] !== _ || h[13] !== b || h[14] !== a || h[15] !== e ? (i = (0, t.jsx)(eK, {
        open: b,
        onOpenChange: _,
        title: n,
        actionSubtitle: a,
        status: e,
        goalActions: T.goalActions,
        rootAgentId: T.rootAgentId,
        finishMessage: T.finishMessage,
        createdFiles: T.createdFiles,
        initialActionId: y
      }), h[6] = w.title, h[7] = T.createdFiles, h[8] = T.finishMessage, h[9] = T.goalActions, h[10] = T.rootAgentId, h[11] = y, h[12] = _, h[13] = b, h[14] = a, h[15] = e, h[16] = i) : i = h[16], i
    }
    return h[17] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)(F.DialogTitle, {
      className: "sr-only",
      children: i.fbs._("Activity details", null, {
        hk: "12fuR0"
      })
    }), h[17] = r) : r = h[17], h[18] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, t.jsx)(F.DialogDescription, {
      className: "sr-only",
      children: i.fbs._("Loading activity details", null, {
        hk: "18yZbw"
      })
    }), h[18] = c) : c = h[18], h[19] !== N ? (o = N ? (0, t.jsx)(d.Spinner, {}) : null, h[19] = N, h[20] = o) : o = h[20], h[21] !== N ? (u = N ? i.fbs._("Loading activity", null, {
      hk: "z9mtg"
    }) : i.fbs._("Activity details are unavailable", null, {
      hk: "3dEZQU"
    }), h[21] = N, h[22] = u) : u = h[22], h[23] !== u ? (f = (0, t.jsx)("span", {
      className: "text-body text-text-secondary",
      children: u
    }), h[23] = u, h[24] = f) : f = h[24], h[25] !== o || h[26] !== f ? (m = (0, t.jsxs)(F.DialogContent, {
      className: "h-[700px] max-w-[1180px]",
      contentClassName: "flex min-h-0 flex-1 flex-col items-center justify-center gap-3",
      children: [r, c, o, f]
    }), h[25] = o, h[26] = f, h[27] = m) : m = h[27], h[28] !== _ || h[29] !== b || h[30] !== m ? (p = (0, t.jsx)(F.Dialog, {
      open: b,
      onOpenChange: _,
      children: m
    }), h[28] = _, h[29] = b, h[30] = m, h[31] = p) : p = h[31], p
  }
  let e4 = {
    agent_id: "Agent",
    job_id: "Job",
    run_id: "Run",
    tool: "Tool",
    query: "Query",
    action: "Action",
    status: "Status",
    trigger_source: "Source",
    trigger_reason: "Reason",
    schedule_key: "Schedule",
    id: "ID",
    path: "Path",
    command: "Command",
    scheduler_sync: "Sync"
  };

  function e5(e) {
    return null != e && "object" == typeof e && !Array.isArray(e)
  }

  function e6(e, t) {
    return null == t ? null : "boolean" == typeof t ? t ? "Yes" : "No" : "run_id" === e && "string" == typeof t || "agent_id" === e && "string" == typeof t ? t.slice(0, 12) : "string" == typeof t ? t : "number" == typeof t ? String(t) : null
  }

  function e8(e) {
    if (null == e) return null;
    if ("string" == typeof e) try {
      return JSON.parse(e)
    } catch {
      return null
    }
    return e
  }
  let e9 = {
    A: D,
    M: D,
    D: $.default,
    R: z.default
  };

  function e7(e) {
    let i, a, l, s = (0, n.c)(7),
      {
        label: r,
        value: c
      } = e;
    return s[0] !== r ? (i = (0, t.jsx)("span", {
      className: "text-caption-2 text-text-quaternary w-14 shrink-0",
      children: r
    }), s[0] = r, s[1] = i) : i = s[1], s[2] !== c ? (a = (0, t.jsx)("span", {
      className: "text-caption-2 text-text-secondary min-w-0 break-words",
      children: c
    }), s[2] = c, s[3] = a) : a = s[3], s[4] !== i || s[5] !== a ? (l = (0, t.jsxs)("div", {
      className: "flex items-baseline gap-1.5",
      children: [i, a]
    }), s[4] = i, s[5] = a, s[6] = l) : l = s[6], l
  }

  function te(e) {
    let i, a, l = (0, n.c)(4),
      {
        entries: s
      } = e;
    return l[0] !== s ? (i = s.map(tt), l[0] = s, l[1] = i) : i = l[1], l[2] !== i ? (a = (0, t.jsx)("div", {
      className: "flex flex-col gap-0.5",
      children: i
    }), l[2] = i, l[3] = a) : a = l[3], a
  }

  function tt(e, i) {
    return (0, t.jsx)(e7, {
      label: e.label,
      value: e.value
    }, i)
  }

  function ti(e) {
    switch (e) {
      case "pending_user_confirmation":
        return i.fbs._("Waiting for approval", null, {
          hk: "G9vY"
        });
      case "background_pending_user_confirmation":
        return i.fbs._("Background waiting for approval", null, {
          hk: "2T6dq7"
        });
      case "user_confirmed":
        return i.fbs._("User approved", null, {
          hk: "1DC9zv"
        });
      case "user_denied":
        return i.fbs._("User denied", null, {
          hk: "aPJnA"
        });
      case "resumed_after_confirmation":
        return i.fbs._("Resumed after approval", null, {
          hk: "1gmcIP"
        });
      default:
        return e ?? null
    }
  }

  function tn(e) {
    let r, c, u, d, f, m, p, h, x, g, y, _, b, v, k = (0, n.c)(47),
      {
        task: j,
        icon: N,
        showBorder: S
      } = e,
      [A, I] = (0, a.useState)(!1),
      w = (0, l.useInteractionLogger)();
    k[0] !== j.agent_id || k[1] !== j.label ? (r = j.label ?? (j.agent_id ? `Agent ${j.agent_id.slice(0,8)}` : null), k[0] = j.agent_id, k[1] = j.label, k[2] = r) : r = k[2];
    let T = r,
      C = "failed" === j.status || "error" === j.status;
    k[3] !== j.status ? (c = ti(j.status), k[3] = j.status, k[4] = c) : c = k[4];
    let E = c,
      $ = null != E && (C || E !== j.status),
      z = null != j.response_preview || null != j.agent_id || null != j.status,
      L = S && "border-fill-tertiary border-t pt-1.5";
    k[5] !== L ? (u = (0, H.cn)(L), k[5] = L, k[6] = u) : u = k[6], k[7] !== z || k[8] !== w ? (d = z ? () => {
      w({
        eventName: s.HatchClickEvent.STATUS_ACTIVITY_DETAIL_TASK_EXPAND_CLICK,
        actionTarget: "status_activity_detail_task",
        actionType: "click",
        metadata: {
          surface: "status",
          subsurface: "activity_detail"
        }
      }), I(ta)
    } : void 0, k[7] = z, k[8] = w, k[9] = d) : d = k[9];
    let D = z && "cursor-pointer";
    return k[10] !== D ? (f = (0, H.cn)("flex w-full items-center gap-2 py-0.5 text-start", D), k[10] = D, k[11] = f) : f = k[11], k[12] !== N ? (m = (0, t.jsx)(o.HatchIcon, {
      icon: N,
      size: 16,
      className: "text-text-secondary mt-0.5 shrink-0"
    }), k[12] = N, k[13] = m) : m = k[13], k[14] !== T ? (p = null != T && (0, t.jsx)("span", {
      className: "text-caption-2 text-text-secondary block",
      children: T
    }), k[14] = T, k[15] = p) : p = k[15], k[16] !== A || k[17] !== j.response_preview ? (h = !A && null != j.response_preview && (0, t.jsx)("span", {
      className: "text-caption-2 text-text-tertiary mt-0.5 block truncate",
      children: j.response_preview
    }), k[16] = A, k[17] = j.response_preview, k[18] = h) : h = k[18], k[19] !== A || k[20] !== E || k[21] !== $ || k[22] !== j.status ? (x = $ && !A && (0, t.jsx)("span", {
      className: (0, H.cn)("text-caption-2 mt-0.5 block", function(e) {
        switch (e) {
          case "pending_user_confirmation":
          case "background_pending_user_confirmation":
            return "text-status-attention";
          case "user_confirmed":
            return "text-emerald-600 dark:text-emerald-300";
          case "user_denied":
          case "failed":
          case "error":
            return "text-text-destructive";
          default:
            return "text-text-tertiary"
        }
      }(j.status)),
      children: E
    }), k[19] = A, k[20] = E, k[21] = $, k[22] = j.status, k[23] = x) : x = k[23], k[24] !== p || k[25] !== h || k[26] !== x ? (g = (0, t.jsxs)("div", {
      className: "min-w-0 flex-1",
      children: [p, h, x]
    }), k[24] = p, k[25] = h, k[26] = x, k[27] = g) : g = k[27], k[28] !== A || k[29] !== z ? (y = z && (0, t.jsx)(o.HatchIcon, {
      icon: O.default,
      size: 12,
      className: (0, H.cn)("text-text-quaternary mt-1 shrink-0 transition-transform duration-200 ease-out", A ? "rotate-0" : "-rotate-90")
    }), k[28] = A, k[29] = z, k[30] = y) : y = k[30], k[31] !== g || k[32] !== y || k[33] !== d || k[34] !== f || k[35] !== m ? (_ = (0, t.jsxs)("button", {
      type: "button",
      onClick: d,
      className: f,
      children: [m, g, y]
    }), k[31] = g, k[32] = y, k[33] = d, k[34] = f, k[35] = m, k[36] = _) : _ = k[36], k[37] !== A || k[38] !== z || k[39] !== j.agent_id || k[40] !== j.response_preview || k[41] !== j.status ? (b = z && (0, t.jsx)("div", {
      className: (0, H.cn)("grid transition-[grid-template-rows,opacity] duration-200 ease-out", A ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
      children: (0, t.jsx)("div", {
        className: "overflow-hidden",
        children: (0, t.jsxs)("div", {
          className: "ms-6 mt-0.5 mb-1 flex flex-col gap-1",
          children: [null != j.response_preview && (0, t.jsx)("span", {
            className: "text-caption-2 text-text-secondary block break-words whitespace-pre-line",
            children: j.response_preview
          }), (0, t.jsxs)("div", {
            className: "flex flex-col gap-1",
            children: [null != j.agent_id && (0, t.jsx)(e7, {
              label: i.fbs._("Agent", null, {
                hk: "3JxWcT"
              }),
              value: j.agent_id.slice(0, 12)
            }), null != j.status && (0, t.jsx)(e7, {
              label: i.fbs._("Status", null, {
                hk: "2tGKPW"
              }),
              value: ti(j.status) ?? j.status
            })]
          })]
        })
      })
    }), k[37] = A, k[38] = z, k[39] = j.agent_id, k[40] = j.response_preview, k[41] = j.status, k[42] = b) : b = k[42], k[43] !== _ || k[44] !== b || k[45] !== u ? (v = (0, t.jsxs)("div", {
      className: u,
      children: [_, b]
    }), k[43] = _, k[44] = b, k[45] = u, k[46] = v) : v = k[46], v
  }

  function ta(e) {
    return !e
  }

  function tl(e) {
    let i, a, l = (0, n.c)(7),
      {
        tasks: s,
        parentType: r
      } = e,
      c = P.ACTION_TYPE_ICONS[r] ?? P.FALLBACK_ICON_CONFIG;
    if (l[0] !== c || l[1] !== s) {
      let e;
      l[3] !== c ? (e = (e, i) => (0, t.jsx)(tn, {
        task: e,
        icon: c.icon,
        showBorder: i > 0
      }, e.agent_id ?? i), l[3] = c, l[4] = e) : e = l[4], i = s.map(e), l[0] = c, l[1] = s, l[2] = i
    } else i = l[2];
    return l[5] !== i ? (a = (0, t.jsx)("div", {
      className: "flex flex-col gap-1",
      children: i
    }), l[5] = i, l[6] = a) : a = l[6], a
  }

  function ts(e) {
    let i, a, l = (0, n.c)(7),
      {
        items: s,
        parentType: r
      } = e,
      c = (P.ACTION_TYPE_ICONS[r] ?? P.FALLBACK_ICON_CONFIG).icon;
    if (l[0] !== c || l[1] !== s) {
      let e;
      l[3] !== c ? (e = (e, i) => {
        let n = "string" == typeof e.tool ? e.tool : null,
          a = "string" == typeof e.query ? e.query : null,
          l = "string" == typeof e.action ? e.action : null,
          s = a ?? l ?? n,
          r = [];
        for (let [t, i] of Object.entries(e)) {
          if ("tool" === t || "query" === t || "action" === t) continue;
          let e = e6(t, i);
          null != e && r.push({
            label: e4[t] ?? t.replace(/_/g, " "),
            value: e
          })
        }
        return (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsxs)("div", {
            className: (0, H.cn)("flex items-center gap-2 py-0.5", i > 0 && "pt-1.5"),
            children: [(0, t.jsx)(o.HatchIcon, {
              icon: c,
              size: 16,
              className: "text-text-secondary shrink-0"
            }), (0, t.jsx)("div", {
              className: "flex min-w-0 flex-col gap-1",
              children: null != s && (0, t.jsx)("span", {
                className: "text-caption-2 text-text-secondary block break-words",
                children: s
              })
            })]
          }, i), r.map(e => (0, t.jsx)(e7, {
            label: e.label,
            value: n + ": " + e.value
          }, e.label))]
        })
      }, l[3] = c, l[4] = e) : e = l[4], i = s.map(e), l[0] = c, l[1] = s, l[2] = i
    } else i = l[2];
    return l[5] !== i ? (a = (0, t.jsx)("div", {
      className: "flex flex-col gap-1",
      children: i
    }), l[5] = i, l[6] = a) : a = l[6], a
  }

  function tr(e) {
    let a, l, s, r = (0, n.c)(7),
      {
        files: c,
        commit: o
      } = e;
    return r[0] !== o ? (a = null != o && (0, t.jsx)(e7, {
      label: i.fbs._("Commit", null, {
        hk: "JcBga"
      }),
      value: o.slice(0, 12)
    }), r[0] = o, r[1] = a) : a = r[1], r[2] !== c ? (l = c.map(tc), r[2] = c, r[3] = l) : l = r[3], r[4] !== a || r[5] !== l ? (s = (0, t.jsxs)("div", {
      className: "flex flex-col gap-1",
      children: [a, l]
    }), r[4] = a, r[5] = l, r[6] = s) : s = r[6], s
  }

  function tc(e) {
    let i = e9[e.status] ?? D;
    return (0, t.jsxs)("div", {
      className: "flex items-center gap-2",
      children: [(0, t.jsx)(o.HatchIcon, {
        icon: i,
        size: 16,
        className: "text-text-secondary mt-0.5 shrink-0"
      }), (0, t.jsx)("span", {
        className: "text-caption-2 text-text-secondary min-w-0 break-all",
        children: e.path
      })]
    }, e.path)
  }

  function to(e) {
    return e.replace(/(\d+)\s+(\w+)\(s\)/g, (e, t, i) => {
      let n = parseInt(t, 10);
      return 1 === n ? `${n} ${i}` : `${n} ${i}s`
    })
  }

  function tu(e) {
    let i, a, l, s, r, c, u, d, f, m, p = (0, n.c)(32),
      {
        open: h,
        onOpenChange: x,
        action: g,
        detail: y,
        config: _
      } = e,
      b = _.icon,
      v = "goal" === y.kind;
    p[0] !== _.iconClassName ? (i = (0, H.cn)("rounded-8 flex size-8 shrink-0 items-center justify-center", _.iconClassName), p[0] = _.iconClassName, p[1] = i) : i = p[1], p[2] !== b ? (a = (0, t.jsx)(o.HatchIcon, {
      icon: b,
      size: 16
    }), p[2] = b, p[3] = a) : a = p[3], p[4] !== i || p[5] !== a ? (l = (0, t.jsx)("span", {
      className: i,
      children: a
    }), p[4] = i, p[5] = a, p[6] = l) : l = p[6], p[7] !== g.title ? (s = (0, t.jsx)("span", {
      className: "min-w-0",
      children: g.title
    }), p[7] = g.title, p[8] = s) : s = p[8], p[9] !== l || p[10] !== s ? (r = (0, t.jsx)(F.DialogTitle, {
      children: (0, t.jsxs)("span", {
        className: "flex items-center gap-3",
        children: [l, s]
      })
    }), p[9] = l, p[10] = s, p[11] = r) : r = p[11], p[12] !== g.subtitle ? (c = null != g.subtitle && (0, t.jsx)(F.DialogDescription, {
      children: to(g.subtitle)
    }), p[12] = g.subtitle, p[13] = c) : c = p[13], p[14] !== r || p[15] !== c ? (u = (0, t.jsxs)(F.DialogHeader, {
      children: [r, c]
    }), p[14] = r, p[15] = c, p[16] = u) : u = p[16];
    let k = u;
    if (v) {
      let e;
      return p[17] !== g || p[18] !== y.goal.id || p[19] !== x || p[20] !== h ? (e = (0, t.jsx)(e3, {
        activityId: y.goal.id,
        fallbackActionRecord: g,
        open: h,
        onOpenChange: x
      }), p[17] = g, p[18] = y.goal.id, p[19] = x, p[20] = h, p[21] = e) : e = p[21], e
    }
    return p[22] !== g.type || p[23] !== y ? (d = function(e, i) {
      switch (e.kind) {
        case "empty":
        case "goal":
          return;
        case "kv":
          return (0, t.jsx)(te, {
            entries: e.entries
          });
        case "tasks":
          return (0, t.jsx)(tl, {
            tasks: e.tasks,
            parentType: i
          });
        case "items":
          return (0, t.jsx)(ts, {
            items: e.items,
            parentType: i
          });
        case "files":
          return (0, t.jsx)(tr, {
            files: e.files,
            commit: e.commit
          })
      }
    }(y, g.type), p[22] = g.type, p[23] = y, p[24] = d) : d = p[24], p[25] !== k || p[26] !== d ? (f = (0, t.jsx)(F.DialogContent, {
      className: "h-[700px] max-w-[960px]",
      header: k,
      children: d
    }), p[25] = k, p[26] = d, p[27] = f) : f = p[27], p[28] !== x || p[29] !== h || p[30] !== f ? (m = (0, t.jsx)(F.Dialog, {
      open: h,
      onOpenChange: x,
      children: f
    }), p[28] = x, p[29] = h, p[30] = f, p[31] = m) : m = p[31], m
  }

  function td(e) {
    let r, c, o, u, d, f, m, p, h, x, g, y, _, b = (0, n.c)(48),
      {
        action: v,
        canStop: k,
        onStop: j
      } = e,
      [N, S] = (0, a.useState)(!1),
      [A, I] = (0, a.useState)(null),
      w = `${v.message_id??"no-message"}:${v.timestamp}`;
    b[0] !== v.details || b[1] !== v.task_label ? (r = function(e, t) {
      var i;
      let n = e8(e);
      if (!n) return t ? {
        kind: "kv",
        entries: [{
          label: "Task",
          value: t
        }]
      } : {
        kind: "empty"
      };
      let a = e5(i = n.goal) ? {
          id: "string" == typeof i.id ? i.id : "",
          name: "string" == typeof i.name ? i.name : void 0,
          subtitle: "string" == typeof i.subtitle ? i.subtitle : void 0,
          icon: "string" == typeof i.icon ? i.icon : void 0
        } : null,
        l = Object.prototype.hasOwnProperty.call(n, "goal_actions"),
        s = Object.prototype.hasOwnProperty.call(n, "activities"),
        r = Object.prototype.hasOwnProperty.call(n, "created_files");
      if (null != a && (l || s || r)) {
        let e = l ? n.goal_actions : n.activities,
          t = "string" == typeof n.finish_message ? n.finish_message : void 0,
          i = e5(n.finish_status) && "string" == typeof n.finish_status.status ? n.finish_status.status.trim().toLowerCase() : void 0,
          s = Array.isArray(n.created_files) && n.created_files.every(e => "string" == typeof e) ? n.created_files : void 0;
        return {
          kind: "goal",
          goal: a,
          goalActions: e1(e),
          rootAgentId: "string" == typeof n.activity_thread_agent_id ? n.activity_thread_agent_id : void 0,
          finishMessage: t,
          finishStatus: i,
          createdFiles: s
        }
      }
      if (Array.isArray(n.tasks) && n.tasks.length > 0) return {
        kind: "tasks",
        tasks: n.tasks
      };
      if (Array.isArray(n.items) && n.items.length > 0) return {
        kind: "items",
        items: n.items
      };
      let c = function(e) {
        if (!Array.isArray(e) || 0 === e.length) return null;
        let t = e[0];
        return null != t && "object" == typeof t && "path" in t ? e : Array.isArray(t) && 2 === t.length ? e.map(e => ({
          status: e[0],
          path: e[1]
        })) : null
      }(n.files);
      if (c) return {
        kind: "files",
        commit: "string" == typeof n.commit ? n.commit : void 0,
        files: c
      };
      let o = [];
      for (let [e, i] of(t && o.push({
          label: "Task",
          value: t
        }), Object.entries(n))) {
        if ("files" === e || "tasks" === e || "items" === e || "goal" === e || "goal_actions" === e || "activities" === e || "created_files" === e) continue;
        let t = e6(e, i);
        null != t && o.push({
          label: e4[e] ?? e.replace(/_/g, " "),
          value: t
        })
      }
      return 0 === o.length ? {
        kind: "empty"
      } : {
        kind: "kv",
        entries: o
      }
    }(v.details, v.task_label), b[0] = v.details, b[1] = v.task_label, b[2] = r) : r = b[2];
    let H = r;
    if (b[3] !== v || b[4] !== H) c = "goal" === H.kind && "waiting_for_user" === H.finishStatus ? "blocked" : v.status, b[3] = v, b[4] = H, b[5] = c;
    else c = b[5];
    let O = c,
      $ = "goal" === H.kind ? H.goal.icon ?? null : null;
    b[6] !== v.details || b[7] !== v.type || b[8] !== O || b[9] !== $ ? (o = (0, P.resolveTimelineIconConfig)({
      goalIcon: $,
      noteTag: function(e) {
        let t = e8(e);
        if (!e5(t?.note)) return null;
        let i = t.note.tag;
        return "string" == typeof i && "" !== i.trim() ? i : null
      }(v.details),
      status: O,
      type: v.type
    }), b[6] = v.details, b[7] = v.type, b[8] = O, b[9] = $, b[10] = o) : o = b[10];
    let z = o,
      D = "goal" === v.type && "pending" === O,
      F = "empty" !== H.kind;
    b[11] !== v.subtitle ? (u = v.subtitle ? to(v.subtitle) : void 0, b[11] = v.subtitle, b[12] = u) : u = b[12];
    let M = u,
      U = (0, l.useInteractionLogger)();
    b[13] !== v.type ? (d = {
      eventName: s.HatchClickEvent.STATUS_ACTIVITY_STOP_CLICK,
      actionTarget: "status_activity_stop_button",
      actionType: "click",
      metadata: {
        surface: "status",
        subsurface: "activity",
        action_type: v.type
      }
    }, b[13] = v.type, b[14] = d) : d = b[14];
    let {
      ref: Y,
      onClick: W
    } = (0, l.useTrackedClickRef)(d);
    b[15] !== v.type || b[16] !== F || b[17] !== U ? (f = () => {
      U({
        eventName: s.HatchClickEvent.STATUS_ACTIVITY_ROW_CLICK,
        actionTarget: "status_activity_row",
        actionType: "click",
        metadata: {
          surface: "status",
          subsurface: "activity",
          action_type: v.type
        }
      }), F && S(!0)
    }, b[15] = v.type, b[16] = F, b[17] = U, b[18] = f) : f = b[18];
    let V = f,
      B = "pending" === O && void 0 !== k && k && null != j && A !== w;
    b[19] !== w || b[20] !== W || b[21] !== j ? (m = async () => {
      if (null != j) {
        I(w), W();
        try {
          let e = await j();
          !1 === e && I(null)
        } catch {
          I(null)
        }
      }
    }, b[19] = w, b[20] = W, b[21] = j, b[22] = m) : m = b[22];
    let G = m;
    b[23] !== z || b[24] !== D ? (p = D ? (0, t.jsx)("span", {
      "aria-hidden": "true",
      className: "bg-fill-secondary rounded-10 flex size-10 shrink-0 items-center justify-center",
      children: (0, t.jsx)(R.HatchLottieIcon, {
        src: "/animations/ic-compose_agentic-medium.json",
        size: 24,
        playing: !0,
        loop: !0
      })
    }) : (0, t.jsx)(T.HatchActivityIconTile, {
      glyph: z.icon,
      glyphSize: 24,
      tintClassName: z.iconClassName
    }), b[23] = z, b[24] = D, b[25] = p) : p = b[25];
    let K = v.title;
    b[26] !== v.timestamp ? (h = (0, P.formatActionTime)(v.timestamp), b[26] = v.timestamp, b[27] = h) : h = b[27], b[28] !== G || b[29] !== B || b[30] !== Y ? (x = B ? (0, t.jsx)(E.IconButton, {
      ref: Y,
      icon: L.default,
      size: "28",
      variant: "borderless",
      className: "bg-fill-tertiary shadow-blur-elevation-01 enabled:hover:!bg-fill-secondary-elevated focus-visible:!bg-fill-secondary-elevated",
      label: i.fbs._("Stop task", null, {
        hk: "1p1WlQ"
      }),
      onClick: () => void G()
    }) : void 0, b[28] = G, b[29] = B, b[30] = Y, b[31] = x) : x = b[31];
    let q = F ? V : void 0;
    return b[32] !== v.title || b[33] !== M || b[34] !== p || b[35] !== h || b[36] !== x || b[37] !== q ? (g = (0, t.jsx)(C.HatchStatusStackedRow, {
      tile: p,
      title: K,
      subtitle: M,
      meta: h,
      hoverAction: x,
      onClick: q
    }), b[32] = v.title, b[33] = M, b[34] = p, b[35] = h, b[36] = x, b[37] = q, b[38] = g) : g = b[38], b[39] !== v || b[40] !== z || b[41] !== H || b[42] !== N || b[43] !== F ? (y = F && (0, t.jsx)(tu, {
      open: N,
      onOpenChange: S,
      action: v,
      detail: H,
      config: z
    }), b[39] = v, b[40] = z, b[41] = H, b[42] = N, b[43] = F, b[44] = y) : y = b[44], b[45] !== g || b[46] !== y ? (_ = (0, t.jsxs)(t.Fragment, {
      children: [g, y]
    }), b[45] = g, b[46] = y, b[47] = _) : _ = b[47], _
  }
  var tf = e.i(285442);

  function tm(e) {
    if (!e) return null;
    let t = "string" == typeof e ? (() => {
      try {
        return JSON.parse(e).goal
      } catch {
        return null
      }
    })() : e.goal;
    if (null == t || "object" != typeof t) return null;
    let i = t.id;
    return "string" == typeof i && "" !== i.trim() ? i : null
  }
  let tp = {
    pending: 0,
    blocked: 1,
    error: 2,
    success: 3
  };

  function th(e) {
    let i, a = (0, n.c)(4),
      {
        action: l,
        forceError: s,
        onStop: r,
        canStop: c
      } = e;
    if (void 0 !== s && s) throw Error("Debug: forced activities row error.");
    return a[0] !== l || a[1] !== c || a[2] !== r ? (i = (0, t.jsx)(td, {
      action: l,
      canStop: c,
      onStop: r
    }), a[0] = l, a[1] = c, a[2] = r, a[3] = i) : i = a[3], i
  }

  function tx(e) {
    let a, l, s = (0, n.c)(2);
    return s[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)(T.HatchActivityIconTile, {
      glyph: I.default,
      tintClassName: "text-text-destructive"
    }), s[0] = a) : a = s[0], s[1] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsxs)("div", {
      className: "flex items-start gap-2 py-2",
      children: [a, (0, t.jsx)("div", {
        className: "text-subheadline-medium text-text-primary flex min-h-10 min-w-0 flex-1 items-center",
        children: i.fbs._("Couldn’t load this activity.", null, {
          hk: "XTlEj"
        })
      })]
    }), s[1] = l) : l = s[1], l
  }

  function tg(e) {
    let i, a, l, s, r, c, o, u, d = (0, n.c)(24),
      {
        forceFirstRowError: m,
        group: p,
        onStopAction: h
      } = e,
      x = void 0 !== m && m;
    d[0] !== p.activities ? (i = p.activities ?? [], d[0] = p.activities, d[1] = i) : i = d[1], d[2] !== i ? (a = function(e) {
      let t = new Map,
        i = new Set,
        n = [];
      for (let a of e) {
        if ("task_running" === a.type) {
          let e = function(e) {
            if (!e) return null;
            if ("string" == typeof e) try {
              let t = JSON.parse(e);
              return "string" == typeof t.run_id ? t.run_id : null
            } catch {
              return null
            }
            return "string" == typeof e.run_id ? e.run_id : null
          }(a.details);
          if (e) {
            let i = t.get(e);
            (!i || (tp[a.status] ?? 0) > (tp[i.status] ?? 0)) && t.set(e, a);
            continue
          }
        }
        let e = `${a.timestamp}|${a.type}|${a.title}`;
        i.has(e) || (i.add(e), n.push(a))
      }
      let a = [...n, ...Array.from(t.values())];
      return a.sort((e, t) => new Date(t.timestamp).getTime() - new Date(e.timestamp).getTime()), a
    }(i), d[2] = i, d[3] = a) : a = d[3];
    let g = a;
    if (d[4] !== g) {
      for (let e of (l = new Map, g)) {
        if ("goal" !== e.type) continue;
        let t = tm(e.details);
        null != t && l.set(t, (l.get(t) ?? 0) + 1)
      }
      d[4] = g, d[5] = l
    } else l = d[5];
    let y = l;
    if (d[6] !== p.date ? (s = (0, tf.formatDayHeader)(p.date), d[6] = p.date, d[7] = s) : s = d[7], d[8] !== s ? (r = (0, t.jsx)(C.HatchStatusSectionHeading, {
        children: s
      }), d[8] = s, d[9] = r) : r = d[9], d[10] !== g || d[11] !== x || d[12] !== y || d[13] !== h) {
      let e;
      d[15] !== x || d[16] !== y || d[17] !== h ? (e = (e, i) => {
        let n = "goal" === e.type ? tm(e.details) : null,
          a = null != n ? (y.get(n) ?? 0) > 1 ? `goal:${n}:${e.timestamp}:${i}` : `goal:${n}` : `${e.message_id??"no-message"}:${e.type}:${e.timestamp}:${i}`;
        return (0, t.jsx)(f.EctoErrorBoundary, {
          surface: eS.HATCH_SENTRY_SURFACES.STATUS_ACTIVITY,
          fallback: (0, t.jsx)(tx, {
            action: e
          }),
          resetKeys: [e, x && 0 === i],
          children: (0, t.jsx)(th, {
            action: e,
            forceError: x && 0 === i,
            canStop: "pending" === e.status,
            onStop: null == h ? void 0 : () => h(e)
          })
        }, a)
      }, d[15] = x, d[16] = y, d[17] = h, d[18] = e) : e = d[18], c = g.map(e), d[10] = g, d[11] = x, d[12] = y, d[13] = h, d[14] = c
    } else c = d[14];
    return d[19] !== c ? (o = (0, t.jsx)("div", {
      className: "flex flex-col gap-px",
      children: c
    }), d[19] = c, d[20] = o) : o = d[20], d[21] !== r || d[22] !== o ? (u = (0, t.jsxs)("div", {
      className: "flex flex-col gap-2",
      children: [r, o]
    }), d[21] = r, d[22] = o, d[23] = u) : u = d[23], u
  }
  var ty = e.i(123960),
    t_ = e.i(858889);

  function tb(e) {
    let a, r, u, d, f, m, p, h = (0, n.c)(12),
      {
        reset: x
      } = e,
      {
        fetchActivities: g
      } = (0, N.useHatchActivityActions)();
    h[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
      eventName: s.HatchClickEvent.STATUS_TIMELINE_RETRY_CLICK,
      actionTarget: "timeline_error_try_again",
      actionType: "click",
      metadata: {
        surface: "hatch.status.timeline",
        subsurface: "error_fallback"
      }
    }, h[0] = a) : a = h[0];
    let {
      ref: y,
      onClick: _
    } = (0, l.useTrackedClickRef)(a);
    h[1] !== g || h[2] !== _ || h[3] !== x ? (r = () => {
      _(), g(), x()
    }, h[1] = g, h[2] = _, h[3] = x, h[4] = r) : r = h[4];
    let b = r;
    return h[5] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, t.jsx)(o.HatchIcon, {
      icon: I.default,
      size: 40,
      className: "text-text-destructive"
    }), h[5] = u) : u = h[5], h[6] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, t.jsx)("p", {
      className: "text-title-3-emphasized text-text-primary",
      children: i.fbs._("Couldn’t load this activity feed", null, {
        hk: "HKkVc"
      })
    }), h[6] = d) : d = h[6], h[7] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, t.jsxs)("div", {
      className: "flex flex-col gap-1",
      children: [d, (0, t.jsx)("p", {
        className: "text-subheadline text-text-secondary",
        children: i.fbs._("Please try again.", null, {
          hk: "YbzbQ"
        })
      })]
    }), h[7] = f) : f = h[7], h[8] === Symbol.for("react.memo_cache_sentinel") ? (m = i.fbs._("Try again", null, {
      hk: "3DOPaH"
    }), h[8] = m) : m = h[8], h[9] !== b || h[10] !== y ? (p = (0, t.jsx)("div", {
      role: "alert",
      className: "flex min-h-[320px] items-center justify-center px-6 py-10",
      children: (0, t.jsxs)("div", {
        className: "flex max-w-[240px] flex-col items-center gap-3 text-center",
        children: [u, f, (0, t.jsx)(c.Button, {
          ref: y,
          variant: "primary",
          size: "36",
          leadingIcon: A.default,
          label: m,
          onClick: b
        })]
      })
    }), h[9] = b, h[10] = y, h[11] = p) : p = h[11], p
  }

  function tv() {
    let e, a, s, c, o, f, h, g, y = (0, n.c)(26),
      _ = b(),
      S = (0, p.useHatchActivitySelector)(x),
      A = v(),
      I = k(),
      T = j(),
      {
        loadMore: C
      } = (0, N.useHatchActivityActions)(),
      E = (0, ty.useOptionalHatchChat)();
    y[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
      eventName: r.HatchImpressionEvent.TIMELINE_IMPRESSION,
      actionTarget: "timeline",
      metadata: {
        surface: "hatch.status.timeline"
      }
    }, y[0] = e) : e = y[0];
    let {
      ref: H
    } = (0, l.useTrackedImpressionRef)(e);
    y[1] !== T || y[2] !== I || y[3] !== C ? (a = e => {
      e && T && !I && C()
    }, y[1] = T, y[2] = I, y[3] = C, y[4] = a) : a = y[4];
    let O = a;
    y[5] === Symbol.for("react.memo_cache_sentinel") ? (s = {
      rootMargin: "400px"
    }, y[5] = s) : s = y[5];
    let $ = (0, m.useOnInView)(O, s);
    if (A && 0 === _.length) {
      let e;
      return y[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(t_.HatchStatusPanelActivityLoadingState, {}), y[6] = e) : e = y[6], e
    }
    if (S && 0 === _.length) {
      let e;
      return y[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(tb, {
        reset: tj
      }), y[7] = e) : e = y[7], e
    }
    if (0 === _.length) {
      let e;
      return y[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(u.NullState, {
        className: "px-4 pt-8",
        icon: w.default,
        titleAs: "h3",
        title: i.fbt._("Activity", null, {
          hk: "2QiUEJ"
        }),
        subtitle: i.fbt._("No activity yet", null, {
          hk: "Ag5rB"
        })
      }), y[8] = e) : e = y[8], e
    }
    if (y[9] !== E || y[10] !== _ || y[11] !== H) {
      let e, i = _.filter(tk);
      if (_.length > 0 && 0 === i.length) throw Error("Activity timeline received invalid day groups.");
      c = H, o = "flex flex-col gap-4 px-4 pb-2", y[15] !== E ? (e = e => (0, t.jsx)(tg, {
        group: e,
        forceFirstRowError: !1,
        onStopAction: null == E ? void 0 : e => {
          let t, i, n;
          return E.cancelStreamForRoute((t = function(e) {
            if (null == e.details) return null;
            if ("string" != typeof e.details) return e.details;
            try {
              return JSON.parse(e.details)
            } catch {
              return null
            }
          }(e), i = e.session_id ?? ("string" == typeof t?.session_id ? t.session_id : null) ?? ("string" == typeof t?.chat_session_id ? t.chat_session_id : null), null != (n = i?.trim()) && "" !== n && "default" !== n ? {
            kind: "thread",
            sessionId: n
          } : {
            kind: "main"
          }))
        }
      }, e.date), y[15] = E, y[16] = e) : e = y[16], f = i.map(e), y[9] = E, y[10] = _, y[11] = H, y[12] = c, y[13] = o, y[14] = f
    } else c = y[12], o = y[13], f = y[14];
    return y[17] !== T || y[18] !== I || y[19] !== $ ? (h = T && (0, t.jsx)("div", {
      ref: $,
      className: "flex items-center justify-center py-4",
      children: I && (0, t.jsx)(d.Spinner, {
        size: 16
      })
    }), y[17] = T, y[18] = I, y[19] = $, y[20] = h) : h = y[20], y[21] !== c || y[22] !== o || y[23] !== f || y[24] !== h ? (g = (0, t.jsxs)("div", {
      ref: c,
      className: o,
      children: [f, h]
    }), y[21] = c, y[22] = o, y[23] = f, y[24] = h, y[25] = g) : g = y[25], g
  }

  function tk(e) {
    return null != e && "string" == typeof e.date && Array.isArray(e.activities)
  }

  function tj() {
    return (0, S.setTimelineLoadError)(!1)
  }

  function tN(e) {
    let {
      reset: i
    } = e;
    return (0, t.jsx)(tb, {
      reset: i
    })
  }
  w.default._isSVG = !0, e.s(["HatchTimeline", 0, function() {
    let e, i, l, s, r, c = (0, n.c)(11),
      o = b(),
      u = v(),
      d = k(),
      m = j(),
      {
        requestActivityWork: p
      } = (0, N.useHatchActivityActions)();
    return c[0] !== p ? (e = () => {
      p()
    }, i = [p], c[0] = p, c[1] = e, c[2] = i) : (e = c[1], i = c[2]), (0, a.useEffect)(e, i), c[3] !== o || c[4] !== m || c[5] !== u || c[6] !== d ? (l = function({
      days: e,
      hasMore: t,
      isLoading: i,
      isLoadingMore: n
    }) {
      return [e, t, i, n]
    }({
      days: o,
      hasMore: m,
      isLoading: u,
      isLoadingMore: d
    }), c[3] = o, c[4] = m, c[5] = u, c[6] = d, c[7] = l) : l = c[7], c[8] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)(tv, {}), c[8] = s) : s = c[8], c[9] !== l ? (r = (0, t.jsx)(f.EctoErrorBoundary, {
      surface: eS.HATCH_SENTRY_SURFACES.STATUS_TIMELINE,
      resetKeys: l,
      fallback: tN,
      children: s
    }), c[9] = l, c[10] = r) : r = c[10], r
  }], 562588)
}]);

//# debugId=b6c30cd2-c2c5-92a3-940e-fb62931194c1
//# sourceMappingURL=1aog27pspx348.js.map