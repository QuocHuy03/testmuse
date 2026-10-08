;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "19c88013-aec0-78e5-9a42-9781c07881bd")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 439714, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(519172),
    i = e.i(731714),
    l = e.i(374785),
    a = e.i(848048);
  let o = r.forwardRef(function(e, r) {
    let o, s, c, u, d, h, f, m, p, C, g, x, y, v, b = (0, n.c)(29);
    b[0] !== e ? ({
      analyticsEvent: s,
      analyticsActionOverride: o,
      analyticsMetadata: c,
      checked: f,
      indeterminate: m,
      onCheckedChange: h,
      disabled: p,
      className: u,
      ...d
    } = e, b[0] = e, b[1] = o, b[2] = s, b[3] = c, b[4] = u, b[5] = d, b[6] = h, b[7] = f, b[8] = m, b[9] = p) : (o = b[1], s = b[2], c = b[3], u = b[4], d = b[5], h = b[6], f = b[7], m = b[8], p = b[9]);
    let _ = void 0 !== f && f,
      w = void 0 !== m && m,
      k = void 0 !== p && p;
    b[10] !== w ? (C = e => {
      null !== e && (e.indeterminate = w)
    }, b[10] = w, b[11] = C) : C = b[11];
    let S = C,
      j = (0, i.useMergeRefs)(S, r),
      {
        wrapWithAnalytics: H
      } = (0, a.useAnalyticsHandler)(s, "Checkbox", o, c);
    b[12] !== h || b[13] !== H ? (g = H(h), b[12] = h, b[13] = H, b[14] = g) : g = b[14];
    let E = g;
    b[15] !== E || b[16] !== w ? (x = e => {
      let t = e.currentTarget.checked;
      e.currentTarget.indeterminate = w, E?.(t)
    }, b[15] = E, b[16] = w, b[17] = x) : x = b[17];
    let P = x,
      L = w ? "mixed" : d["aria-checked"],
      R = !E;
    return b[18] !== u ? (y = (0, l.cn)("ecto-checkbox bg-bg-secondary accent-fill-blue rounded-8 h-4 w-4 border border-[var(--color-icon-quaternary)] disabled:cursor-not-allowed disabled:opacity-50", u), b[18] = u, b[19] = y) : y = b[19], b[20] !== _ || b[21] !== k || b[22] !== P || b[23] !== d || b[24] !== j || b[25] !== L || b[26] !== R || b[27] !== y ? (v = (0, t.jsx)("input", {
      ...d,
      ref: j,
      type: "checkbox",
      checked: _,
      "aria-checked": L,
      onChange: P,
      readOnly: R,
      disabled: k,
      className: y
    }), b[20] = _, b[21] = k, b[22] = P, b[23] = d, b[24] = j, b[25] = L, b[26] = R, b[27] = y, b[28] = v) : v = b[28], v
  });
  e.s(["Checkbox", 0, o])
}, 938981, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(519172),
    i = e.i(345717),
    l = e.i(374785);
  let a = {
      regular: "px-3 py-2.5 h-11 rounded-16",
      small: "px-2.5 py-1.5 h-9 rounded-12"
    },
    o = r.forwardRef(function(e, r) {
      let i, o, s, c, u, d, h = (0, n.c)(13);
      h[0] !== e ? ({
        className: i,
        size: s,
        type: c,
        ...o
      } = e, h[0] = e, h[1] = i, h[2] = o, h[3] = s, h[4] = c) : (i = h[1], o = h[2], s = h[3], c = h[4]);
      let f = a[void 0 === s ? "regular" : s];
      return h[5] !== i || h[6] !== f ? (u = (0, l.cn)("placeholder:text-text-secondary bg-bg-secondary text-text-primary text-subheadline w-full min-w-0 -outline-offset-1 focus-visible:outline disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", f, i), h[5] = i, h[6] = f, h[7] = u) : u = h[7], h[8] !== o || h[9] !== r || h[10] !== u || h[11] !== c ? (d = (0, t.jsx)("input", {
        ref: r,
        type: c,
        "data-slot": "input",
        className: u,
        ...o
      }), h[8] = o, h[9] = r, h[10] = u, h[11] = c, h[12] = d) : d = h[12], d
    }),
    s = r.forwardRef(function(e, r) {
      let o, s, c, u, d, h, f, m, p, C, g, x, y, v, b, _, w, k, S, j, H, E = (0, n.c)(44);
      E[0] !== e ? ({
        className: c,
        label: h,
        required: m,
        requiredLabel: C,
        caption: o,
        captionId: s,
        startIcon: p,
        endIcon: u,
        size: g,
        error: d,
        ...f
      } = e, E[0] = e, E[1] = o, E[2] = s, E[3] = c, E[4] = u, E[5] = d, E[6] = h, E[7] = f, E[8] = m, E[9] = p, E[10] = C, E[11] = g) : (o = E[1], s = E[2], c = E[3], u = E[4], d = E[5], h = E[6], f = E[7], m = E[8], p = E[9], C = E[10], g = E[11]), E[12] !== C ? (x = void 0 === C ? i.fbs._("(required)", null, {
        hk: "YKTNE"
      }) : C, E[12] = C, E[13] = x) : x = E[13];
      let P = x,
        L = void 0 === g ? "regular" : g;
      E[14] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, l.cn)("text-subheadline text-text-secondary mb-1 block", "px-2"), E[14] = y) : y = E[14];
      let R = m && P;
      E[15] !== h || E[16] !== R ? (v = (0, t.jsxs)("label", {
        className: y,
        children: [h, " ", R]
      }), E[15] = h, E[16] = R, E[17] = v) : v = E[17], E[18] !== p ? (b = p && (0, t.jsx)("div", {
        className: "text-text-tertiary absolute start-3 flex items-center",
        children: p
      }), E[18] = p, E[19] = b) : b = E[19];
      let M = a[L],
        T = p && "ps-10",
        I = u && "pe-10",
        N = d && "outline-icon-destructive outline-2! -outline-offset-2";
      return E[20] !== c || E[21] !== I || E[22] !== N || E[23] !== M || E[24] !== T ? (_ = (0, l.cn)("placeholder:text-text-secondary bg-bg-secondary text-text-primary text-subheadline w-full min-w-0 -outline-offset-1 focus-visible:outline disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", M, T, I, N, c), E[20] = c, E[21] = I, E[22] = N, E[23] = M, E[24] = T, E[25] = _) : _ = E[25], E[26] !== f || E[27] !== r || E[28] !== _ ? (w = (0, t.jsx)("input", {
        ref: r,
        "data-slot": "input",
        className: _,
        ...f
      }), E[26] = f, E[27] = r, E[28] = _, E[29] = w) : w = E[29], E[30] !== u ? (k = u && (0, t.jsx)("div", {
        className: "text-text-tertiary absolute end-3 flex items-center",
        children: u
      }), E[30] = u, E[31] = k) : k = E[31], E[32] !== w || E[33] !== k || E[34] !== b ? (S = (0, t.jsxs)("div", {
        className: "relative flex items-center",
        children: [b, w, k]
      }), E[32] = w, E[33] = k, E[34] = b, E[35] = S) : S = E[35], E[36] !== o || E[37] !== s || E[38] !== d ? (j = o && (0, t.jsx)("p", {
        id: s,
        className: (0, l.cn)("text-body-small mt-1", "px-2", d ? "text-text-destructive" : "text-text-tertiary"),
        children: o
      }), E[36] = o, E[37] = s, E[38] = d, E[39] = j) : j = E[39], E[40] !== S || E[41] !== j || E[42] !== v ? (H = (0, t.jsxs)("div", {
        className: "w-full",
        children: [v, S, j]
      }), E[40] = S, E[41] = j, E[42] = v, E[43] = H) : H = E[43], H
    }),
    c = r.forwardRef(function(e, r) {
      let i, l, a, o = (0, n.c)(9);
      if (o[0] !== e ? ({
          hideLabel: i,
          ...l
        } = e, o[0] = e, o[1] = i, o[2] = l) : (i = o[1], l = o[2]), i) {
        let e;
        return o[3] !== l || o[4] !== r ? (e = (0, t.jsx)("div", {
          className: "w-full [&_label]:sr-only",
          children: (0, t.jsx)(s, {
            ref: r,
            ...l
          })
        }), o[3] = l, o[4] = r, o[5] = e) : e = o[5], e
      }
      return o[6] !== l || o[7] !== r ? (a = (0, t.jsx)(s, {
        ref: r,
        ...l
      }), o[6] = l, o[7] = r, o[8] = a) : a = o[8], a
    });
  e.s(["Input", 0, o, "InputField", 0, c])
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
    let o, s, c, u, d, h, f = (0, n.c)(35),
      {
        size: m,
        color: p,
        variant: C,
        isDecorative: g,
        className: x
      } = e,
      y = void 0 === m ? "medium" : m,
      v = void 0 === C ? "breathing" : C,
      b = void 0 !== g && g;
    f[0] !== y ? (o = "number" == typeof y ? {
      border: Math.max(2, Math.round(3 * (y / i.medium.diameter))),
      diameter: y
    } : i[y], f[0] = y, f[1] = o) : o = f[1];
    let {
      border: _,
      diameter: w
    } = o, k = w / 2, S = w + 2 * _, j = S / 2, H = `0 0 ${S} ${S}`, E = b ? "none" : "progressbar", P = !!b || void 0;
    f[2] !== S || f[3] !== H || f[4] !== E || f[5] !== P ? (s = {
      width: S,
      height: S,
      viewBox: H,
      role: E,
      "aria-hidden": P
    }, f[2] = S, f[3] = H, f[4] = E, f[5] = P, f[6] = s) : s = f[6];
    let L = s,
      R = "rotating" === v ? "motion-safe:[animation-duration:750ms]" : "motion-safe:[animation-duration:2000ms]",
      M = a[void 0 === p ? "primary" : p];
    f[7] !== x || f[8] !== R || f[9] !== M ? (c = (0, r.cn)("inline-block align-middle motion-safe:animate-spin", R, M, x), f[7] = x, f[8] = R, f[9] = M, f[10] = c) : c = f[10];
    let T = c;
    if ("rotating" === v) {
      let e, n, r, i, l = 1.5 * Math.PI,
        a = .25 * Math.PI;
      if (f[11] !== j || f[12] !== k) {
        let t, n, r, i, o;
        t = j + k * Math.cos(l), n = j + k * Math.sin(l), r = j + k * Math.cos(a), i = j + k * Math.sin(a), o = +(a - l > Math.PI), e = `M ${t} ${n} A ${k} ${k} 0 ${o} 1 ${r} ${i}`, f[11] = j, f[12] = k, f[13] = e
      } else e = f[13];
      let o = e;
      return f[14] !== _ || f[15] !== j || f[16] !== k ? (n = (0, t.jsx)("circle", {
        cx: j,
        cy: j,
        r: k,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: _,
        opacity: .15
      }), f[14] = _, f[15] = j, f[16] = k, f[17] = n) : n = f[17], f[18] !== _ || f[19] !== o ? (r = (0, t.jsx)("path", {
        d: o,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: _,
        strokeLinecap: "round"
      }), f[18] = _, f[19] = o, f[20] = r) : r = f[20], f[21] !== L || f[22] !== n || f[23] !== r || f[24] !== T ? (i = (0, t.jsxs)("svg", {
        ...L,
        className: T,
        children: [n, r]
      }), f[21] = L, f[22] = n, f[23] = r, f[24] = T, f[25] = i) : i = f[25], i
    }
    return f[26] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, t.jsx)("style", {
      href: "hatch-spinner-breathing",
      precedence: "default",
      children: l
    }), f[26] = u) : u = f[26], f[27] !== _ || f[28] !== j || f[29] !== k ? (d = (0, t.jsx)("circle", {
      cx: j,
      cy: j,
      r: k,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: _,
      strokeLinecap: "round",
      pathLength: 100,
      strokeDasharray: "71 100",
      className: "hatch-spinner-breathing-dash"
    }), f[27] = _, f[28] = j, f[29] = k, f[30] = d) : d = f[30], f[31] !== L || f[32] !== d || f[33] !== T ? (h = (0, t.jsxs)(t.Fragment, {
      children: [u, (0, t.jsx)("svg", {
        ...L,
        className: T,
        children: d
      })]
    }), f[31] = L, f[32] = d, f[33] = T, f[34] = h) : h = f[34], h
  }])
}, 838551, e => {
  "use strict";
  let t = e => ["subscription", e];
  e.s(["subscriptionQueryKey", 0, (e, n) => n ? [...t(e), "agreement"] : t(e), "subscriptionQueryPrefix", 0, t])
}, 547049, 39771, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(393202),
    r = e.i(365500),
    i = e.i(838551);
  e.s(["useInvalidateSubscription", 0, function() {
    let e, l = (0, t.c)(3),
      a = (0, r.useOptionalAuth)()?.userId ?? null,
      o = (0, n.useQueryClient)();
    return l[0] !== o || l[1] !== a ? (e = () => {
      o.invalidateQueries({
        queryKey: (0, i.subscriptionQueryPrefix)(a)
      })
    }, l[0] = o, l[1] = a, l[2] = e) : e = l[2], e
  }], 547049);
  var l = e.i(743723);
  let a = (0, l.createServerReference)("40368859a352eb263155661fb679c13f26a65105f1", l.callServer, void 0, l.findSourceMapURL, "fetchSubscriptionAction");
  e.s(["fetchSubscriptionAction", 0, a], 39771)
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
}, 272343, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(345717),
    r = e.i(722099),
    i = e.i(519172),
    l = e.i(393202),
    a = e.i(570730),
    o = e.i(357820),
    s = e.i(867545),
    c = e.i(848048),
    u = e.i(52038),
    d = e.i(281539),
    h = e.i(440802),
    f = e.i(538206),
    m = e.i(239286),
    p = e.i(18516),
    C = e.i(486868),
    g = e.i(47247),
    x = e.i(120511),
    y = e.i(847126),
    v = e.i(648094),
    b = e.i(499608),
    _ = e.i(907579),
    w = e.i(767408),
    k = e.i(450106),
    S = e.i(200097);

  function j({
    fileName: e,
    filePath: r,
    onDownloadComplete: s,
    variant: h
  }) {
    let [f, C] = (0, i.useState)(!1), k = (0, _.useHatchGatewayFs)(), H = (0, l.useQueryClient)(), {
      vmName: E
    } = (0, u.useHatchServerData)(), P = (0, w.fileExtensionForTelemetry)(e), L = n.fbs._("Failed to download file", null, {
      hk: "27JKIC"
    }), R = n.fbs._("Failed to export file", null, {
      hk: "iU9RO"
    }), {
      Item: M
    } = (0, S.hatchMenuPartsFor)(h), {
      onClick: T
    } = (0, c.useTrackedClickRef)({
      eventName: d.HatchClickEvent.DOCUMENT_DOWNLOAD_CLICK,
      actionTarget: "document_download",
      actionType: "click",
      vmId: E ?? void 0,
      fileType: P || void 0,
      metadata: {
        surface: "chat",
        subsurface: "markdown_menu",
        file_category: "markdown",
        entry_point: (0, S.hatchMenuEntryPointFor)(h)
      }
    }), I = (0, i.useCallback)(async () => {
      let t = await (0, b.ensureReadData)(H, k, r);
      (0, v.triggerBlobDownload)(e, new Blob([t], {
        type: (0, x.getMimeType)(e)
      }))
    }, [H, k, r, e]), N = (0, i.useCallback)(async t => {
      if (f) return;
      let n = (0, g.captureHatchToast)();
      if (T(), "markdown" === t) {
        try {
          await I()
        } catch {
          n.error(L)
        }
        s?.();
        return
      }
      C(!0), await new Promise(e => requestAnimationFrame(() => requestAnimationFrame(e)));
      try {
        "pdf" === t && await (0, y.exportMarkdownToPdf)(k, r, e), s?.()
      } catch {
        n.error(R)
      } finally {
        C(!1)
      }
    }, [L, R, e, r, k, I, f, T, s]);
    return "context" === h ? (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(M, {
        leadingIcon: a.default,
        label: n.fbs._("Download as Markdown", null, {
          hk: "qi2tL"
        }),
        onSelect: () => void N("markdown"),
        disabled: f
      }), (0, t.jsx)(M, {
        leadingIcon: o.default,
        label: n.fbs._("Download as PDF", null, {
          hk: "2CONH1"
        }),
        onSelect: () => void N("pdf"),
        disabled: f
      })]
    }) : (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(p.DropdownMenuItem, {
        leadingIcon: a.default,
        label: n.fbs._("Download as Markdown", null, {
          hk: "qi2tL"
        }),
        onSelect: () => void N("markdown"),
        disabled: f
      }), (0, t.jsx)(p.DropdownMenuItem, {
        leadingIcon: o.default,
        label: n.fbs._("Download as PDF", null, {
          hk: "2CONH1"
        }),
        onSelect: e => {
          e.preventDefault(), N("pdf")
        },
        disabled: f,
        addOnEnd: f ? (0, t.jsx)(m.Spinner, {
          size: 16
        }) : void 0
      })]
    })
  }

  function H(e) {
    return e.stopPropagation()
  }

  function E(e) {
    return e.stopPropagation()
  }
  e.s(["HatchArtifactMarkdownMenu", 0, function(e) {
    let l, a, o, m, g, x, y, v, b, _, P = (0, r.c)(28),
      {
        createdAt: L,
        fileName: R,
        filePath: M,
        triggerVariant: T
      } = e,
      I = void 0 === T ? "card" : T,
      [N, A] = (0, i.useState)(!1),
      {
        vmName: U
      } = (0, u.useHatchServerData)();
    P[0] !== R ? (l = (0, w.fileExtensionForTelemetry)(R), P[0] = R, P[1] = l) : l = P[1];
    let D = U ?? void 0,
      V = l || void 0;
    P[2] !== I ? (a = "rail" === I ? "hover_button" : (0, S.hatchMenuEntryPointFor)("dropdown"), P[2] = I, P[3] = a) : a = P[3], P[4] !== a ? (o = {
      surface: "chat",
      subsurface: "markdown_menu",
      file_category: "markdown",
      entry_point: a
    }, P[4] = a, P[5] = o) : o = P[5], P[6] !== D || P[7] !== V || P[8] !== o ? (m = {
      eventName: d.HatchClickEvent.ARTIFACT_OPTIONS_OPEN_CLICK,
      actionTarget: "artifact_options_trigger",
      actionType: "click",
      vmId: D,
      fileType: V,
      metadata: o
    }, P[6] = D, P[7] = V, P[8] = o, P[9] = m) : m = P[9];
    let {
      ref: O,
      onClick: F
    } = (0, c.useTrackedClickRef)(m);
    P[10] !== F || P[11] !== O || P[12] !== I ? (g = "rail" === I ? (0, t.jsx)(C.TooltipProvider, {
      delayDuration: 0,
      skipDelayDuration: 1 / 0,
      children: (0, t.jsxs)(C.Tooltip, {
        children: [(0, t.jsx)(p.DropdownMenuTrigger, {
          asChild: !0,
          children: (0, t.jsx)(C.TooltipTrigger, {
            asChild: !0,
            children: (0, t.jsx)(f.IconRailButton, {
              ref: O,
              icon: s.default,
              label: n.fbs._("More options", null, {
                hk: "1cttts"
              }),
              variant: "borderless",
              size: "24",
              className: "text-text-secondary",
              "data-testid": "hatch-sandbox-file-card-options",
              onClick: F
            })
          })
        }), (0, t.jsx)(C.TooltipContent, {
          side: "bottom",
          children: n.fbt._("More", null, {
            hk: "3cvPws"
          })
        })]
      })
    }) : (0, t.jsx)(p.DropdownMenuTrigger, {
      asChild: !0,
      children: (0, t.jsx)(h.IconButton, {
        ref: O,
        icon: s.default,
        label: n.fbs._("More options", null, {
          hk: "1cttts"
        }),
        variant: "borderless",
        size: "24",
        "data-testid": "hatch-sandbox-file-card-options",
        onClick: F
      })
    }), P[10] = F, P[11] = O, P[12] = I, P[13] = g) : g = P[13];
    let z = g,
      B = "rail" === I ? "end" : "start";
    return P[14] !== L ? (x = null != L ? (0, t.jsx)(k.HatchMessageMenuTimestamp, {
      createdAt: L
    }) : null, P[14] = L, P[15] = x) : x = P[15], P[16] === Symbol.for("react.memo_cache_sentinel") ? (y = () => A(!1), P[16] = y) : y = P[16], P[17] !== R || P[18] !== M ? (v = (0, t.jsx)(j, {
      fileName: R,
      filePath: M,
      onDownloadComplete: y,
      variant: "dropdown"
    }), P[17] = R, P[18] = M, P[19] = v) : v = P[19], P[20] !== x || P[21] !== v || P[22] !== B ? (b = (0, t.jsxs)(p.DropdownMenuContent, {
      align: B,
      children: [x, v]
    }), P[20] = x, P[21] = v, P[22] = B, P[23] = b) : b = P[23], P[24] !== N || P[25] !== b || P[26] !== z ? (_ = (0, t.jsx)("div", {
      className: "shrink-0",
      onClick: E,
      onKeyDown: H,
      children: (0, t.jsxs)(p.DropdownMenu, {
        open: N,
        onOpenChange: A,
        children: [z, b]
      })
    }), P[24] = N, P[25] = b, P[26] = z, P[27] = _) : _ = P[27], _
  }, "HatchArtifactMarkdownMenuItems", 0, j])
}, 745427, 191488, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(519172),
    r = e.i(890089);
  let i = (0, n.createContext)(null);
  e.s(["HatchFlightPanelContext", 0, i], 191488), e.s(["useHatchFlightPanelController", 0, function() {
    let e, i, l, a, o = (0, t.c)(6);
    o[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
      kind: "closed"
    }, o[0] = e) : e = o[0];
    let [s, c] = (0, n.useState)(e);
    o[1] === Symbol.for("react.memo_cache_sentinel") ? (i = e => {
      (0, r.captureHatchChatScrollHold)("contextual-panel"), c({
        kind: "details",
        offer: e.offer,
        presentationId: e.presentationId
      })
    }, o[1] = i) : i = o[1];
    let u = i;
    o[2] === Symbol.for("react.memo_cache_sentinel") ? (l = () => {
      (0, r.captureHatchChatScrollHold)("contextual-panel"), c({
        kind: "closed"
      })
    }, o[2] = l) : l = o[2];
    let d = l,
      h = "closed" !== s.kind;
    return o[3] !== s || o[4] !== h ? (a = {
      state: s,
      isOpen: h,
      openDetails: u,
      close: d
    }, o[3] = s, o[4] = h, o[5] = a) : a = o[5], a
  }, "useOptionalHatchFlightPanel", 0, function() {
    return (0, n.useContext)(i)
  }], 745427)
}, 174714, 978424, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(519172),
    i = e.i(374785),
    l = e.i(921192);

  function a(e) {
    let r, i = (0, n.c)(4),
      {
        url: l,
        size: a,
        onFailed: o
      } = e;
    return i[0] !== o || i[1] !== a || i[2] !== l ? (r = (0, t.jsx)("img", {
      src: l,
      alt: "",
      width: a,
      height: a,
      loading: "lazy",
      onError: o,
      className: "border-fill-divider h-full w-full rounded-full border-[0.5px] bg-white object-contain"
    }), i[0] = o, i[1] = a, i[2] = l, i[3] = r) : r = i[3], r
  }
  e.s(["HatchAirlineLogo", 0, function(e) {
    let o, s, c, u, d, h, f, m, p = (0, n.c)(43),
      {
        iconUrls: C,
        carrier: g,
        size: x,
        className: y
      } = e,
      v = void 0 === x ? 40 : x;
    p[0] === Symbol.for("react.memo_cache_sentinel") ? (o = [], p[0] = o) : o = p[0];
    let [b, _] = (0, r.useState)(o);
    if (p[1] !== C) {
      for (let e of (s = [], C)) {
        let t = null != e && e.toLowerCase().startsWith("https://") ? (0, l.proxyExternalImageUrl)(e) : null;
        if (null == t || s.includes(t) || s.push(t), 2 === s.length) break
      }
      p[1] = C, p[2] = s
    } else s = p[2];
    let w = s;
    p[3] !== b || p[4] !== w ? (c = w.filter(e => !b.includes(e)), p[3] = b, p[4] = w, p[5] = c) : c = p[5];
    let k = c;
    if (0 === k.length) {
      let e, n, r, l;
      if (p[6] !== y ? (e = (0, i.cn)("bg-fill-secondary text-text-primary text-subheadline-emphasized flex shrink-0 items-center justify-center rounded-full select-none", y), p[6] = y, p[7] = e) : e = p[7], p[8] !== v ? (n = {
          width: v,
          height: v
        }, p[8] = v, p[9] = n) : n = p[9], p[10] !== g) {
        let e;
        r = null != (e = g?.trim().charAt(0)) && e.length > 0 ? e.toUpperCase() : "✈", p[10] = g, p[11] = r
      } else r = p[11];
      return p[12] !== e || p[13] !== n || p[14] !== r ? (l = (0, t.jsx)("div", {
        className: e,
        style: n,
        "aria-hidden": "true",
        children: r
      }), p[12] = e, p[13] = n, p[14] = r, p[15] = l) : l = p[15], l
    }
    p[16] === Symbol.for("react.memo_cache_sentinel") ? (u = e => _(t => t.includes(e) ? t : [...t, e]), p[16] = u) : u = p[16];
    let S = u,
      [j] = k;
    if (null != j && 1 === k.length) {
      let e, n, r, l, o;
      return p[17] !== y ? (e = (0, i.cn)("shrink-0", y), p[17] = y, p[18] = e) : e = p[18], p[19] !== v ? (n = {
        width: v,
        height: v
      }, p[19] = v, p[20] = n) : n = p[20], p[21] !== j ? (r = () => S(j), p[21] = j, p[22] = r) : r = p[22], p[23] !== j || p[24] !== v || p[25] !== r ? (l = (0, t.jsx)(a, {
        url: j,
        size: v,
        onFailed: r
      }), p[23] = j, p[24] = v, p[25] = r, p[26] = l) : l = p[26], p[27] !== e || p[28] !== n || p[29] !== l ? (o = (0, t.jsx)("div", {
        className: e,
        style: n,
        children: l
      }), p[27] = e, p[28] = n, p[29] = l, p[30] = o) : o = p[30], o
    }
    let H = Math.round(.72 * v);
    return p[31] !== y ? (d = (0, i.cn)("relative shrink-0", y), p[31] = y, p[32] = d) : d = p[32], p[33] !== v ? (h = {
      width: v,
      height: v
    }, p[33] = v, p[34] = h) : h = p[34], p[35] !== k || p[36] !== v || p[37] !== H ? (f = k.map((e, n) => (0, t.jsx)("div", {
      className: "absolute",
      style: {
        width: H,
        height: H,
        top: 0 === n ? 0 : v - H,
        insetInlineStart: 0 === n ? 0 : v - H,
        zIndex: 0 === n ? 1 : 2
      },
      children: (0, t.jsx)(a, {
        url: e,
        size: H,
        onFailed: () => S(e)
      })
    }, e)), p[35] = k, p[36] = v, p[37] = H, p[38] = f) : f = p[38], p[39] !== d || p[40] !== h || p[41] !== f ? (m = (0, t.jsx)("div", {
      className: d,
      style: h,
      children: f
    }), p[39] = d, p[40] = h, p[41] = f, p[42] = m) : m = p[42], m
  }], 174714), e.s(["ROUTE_ARROW", 0, "→", "flightOfferCarriers", 0, function(e) {
    let t = [];
    for (let n of e.slices)
      for (let e of n.segments) {
        let n = e.carrier?.trim();
        null != n && n.length > 0 && !t.includes(n) && t.push(n)
      }
    if (0 === t.length) {
      let n = e.airline?.trim();
      null != n && n.length > 0 && t.push(n)
    }
    return t
  }, "flightOfferIconUrls", 0, function(e) {
    let t = [];
    for (let n of e.slices)
      for (let e of n.segments) {
        let n = e.airlineIconUrl?.trim();
        null != n && n.length > 0 && !t.includes(n) && t.push(n)
      }
    return t
  }, "flightOfferRouteLabel", 0, function(e) {
    let t = e.slices[0];
    if (null == t) return "";
    if (1 === e.slices.length) return `${t.from} → ${t.to}`;
    let n = e.slices[e.slices.length - 1];
    return 2 === e.slices.length && n?.from === t.to && n.to === t.from ? `${t.from} ↔ ${t.to}` : [t.from, ...e.slices.map(e => e.to)].join(" → ")
  }], 978424)
}, 664871, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(519172),
    i = e.i(345717),
    l = e.i(941960),
    a = e.i(832964),
    o = e.i(374785),
    s = e.i(359783),
    c = e.i(863641),
    u = e.i(921192),
    d = e.i(829051),
    h = e.i(41507),
    f = e.i(245398),
    m = e.i(659131),
    p = e.i(258544);
  let C = (0, s.createClientLogger)("HatchChatLinkPreview");

  function g(e) {
    try {
      return new URL(e).hostname.replace(/^www\./, "")
    } catch {
      return e
    }
  }

  function x(e) {
    let i, l, a, o, s, c, d, h, f = (0, n.c)(29),
      {
        url: C,
        alt: x,
        imageSrc: b,
        enableChatImageMenu: w,
        messageId: S,
        createdAt: j,
        onReply: H
      } = e,
      E = void 0 !== w && w;
    f[0] !== b ? (i = (0, u.proxyExternalImageUrl)(b), f[0] = b, f[1] = i) : i = f[1];
    let P = i,
      [L, R] = (0, r.useState)(!1);
    f[2] === Symbol.for("react.memo_cache_sentinel") ? (l = () => R(!0), f[2] = l) : l = f[2];
    let M = l;
    if (L || null == P) {
      let e;
      return f[3] !== x || f[4] !== C ? (e = (0, t.jsx)(y, {
        url: C,
        fallbackTitle: x,
        appearance: "inline"
      }), f[3] = x, f[4] = C, f[5] = e) : e = f[5], e
    }
    f[6] !== x || f[7] !== C ? (a = x.trim().length > 0 ? x.trim() : g(C), f[6] = x, f[7] = C, f[8] = a) : a = f[8];
    let T = a;
    f[9] !== P ? (o = (0, t.jsx)(_, {
      children: (0, t.jsx)("img", {
        src: P,
        alt: "",
        className: "block aspect-[1.91/1] !h-auto w-full !max-w-full object-cover",
        onError: M
      })
    }), f[9] = P, f[10] = o) : o = f[10], f[11] !== C ? (s = g(C), f[11] = C, f[12] = s) : s = f[12], f[13] !== s || f[14] !== T ? (c = (0, t.jsx)(k, {
      domain: s,
      title: T
    }), f[13] = s, f[14] = T, f[15] = c) : c = f[15], f[16] !== o || f[17] !== c || f[18] !== C ? (d = (0, t.jsxs)(v, {
      url: C,
      children: [o, c]
    }), f[16] = o, f[17] = c, f[18] = C, f[19] = d) : d = f[19];
    let I = d;
    return f[20] !== x || f[21] !== I || f[22] !== j || f[23] !== E || f[24] !== b || f[25] !== S || f[26] !== H || f[27] !== P ? (h = E ? (0, t.jsx)(p.HatchChatImageContextMenu, {
      sourceUrl: P,
      replyPreviewUrl: P,
      mediaItem: {
        kind: "image",
        variants: {
          original: b,
          thumbnail: P
        }
      },
      filename: (0, m.extractMarkdownImageFilename)(b) ?? x,
      messageId: S,
      createdAt: j,
      onReply: H,
      children: I
    }) : I, f[20] = x, f[21] = I, f[22] = j, f[23] = E, f[24] = b, f[25] = S, f[26] = H, f[27] = P, f[28] = h) : h = f[28], h
  }

  function y({
    url: e,
    fallbackTitle: n,
    appearance: s,
    hideOnError: u,
    className: d,
    rootRef: h,
    onRootClick: f
  }) {
    let [m, p] = (0, r.useState)(null), [x, S] = (0, r.useState)(!0), [j, H] = (0, r.useState)(!1), [E, P] = (0, r.useState)(!1), L = (0, r.useCallback)(() => P(!0), []);
    return ((0, r.useEffect)(() => {
      let t = !1,
        n = new AbortController;
      return async function() {
        try {
          let r = await fetch(`/api/og-metadata?url=${encodeURIComponent(e)}`, {
            signal: n.signal
          });
          if (!r.ok) throw Error(`og-metadata fetch failed with status ${r.status}`);
          let i = await r.json();
          if (t) return;
          i.title ? p(i) : H(!0)
        } catch (e) {
          if (t) return;
          if (!(e instanceof DOMException && "AbortError" === e.name)) {
            let t = e instanceof Error ? e.message : String(e);
            C[/status 5\d\d/.test(t) ? "error" : "warn"]({
              error: e instanceof Error ? e : Error(t),
              tags: (0, c.hatchSentryTags)(c.HATCH_SENTRY_SURFACES.OG_METADATA)
            }, "Link preview metadata fetch failed")
          }
          H(!0)
        } finally {
          t || S(!1)
        }
      }(), () => {
        t = !0, n.abort()
      }
    }, [e]), u && (x || j || null == m)) ? null : x ? "standalone" === s ? (0, t.jsx)(v, {
      url: e,
      appearance: s,
      className: d,
      rootRef: h,
      onRootClick: f,
      children: (0, t.jsx)(b, {
        domain: g(e),
        title: n ?? g(e)
      })
    }) : (0, t.jsxs)(v, {
      url: e,
      appearance: s,
      className: d,
      rootRef: h,
      onRootClick: f,
      children: [(0, t.jsx)(_, {
        children: (0, t.jsx)(a.Skeleton, {
          className: "aspect-[1.91/1] w-full bg-black/5 dark:bg-white/5"
        })
      }), (0, t.jsx)(k, {
        domain: g(e),
        title: n ?? null,
        titlePlaceholder: i.fbs._("Loading preview", null, {
          hk: "9xJY7"
        })
      })]
    }) : j || null == m ? null != n && n.trim().length > 0 ? (0, t.jsx)(v, {
      url: e,
      appearance: s,
      className: d,
      rootRef: h,
      onRootClick: f,
      children: "standalone" === s ? (0, t.jsx)(b, {
        domain: g(e),
        title: n.trim()
      }) : (0, t.jsx)(k, {
        domain: g(e),
        title: n.trim()
      })
    }) : (0, t.jsx)(l.EctoAnchor, {
      href: e,
      target: "_blank",
      rel: "noopener noreferrer",
      ref: h,
      onClick: f,
      className: (0, o.cn)("text-text-primary-link no-underline hover:!underline", d),
      children: e
    }) : "standalone" !== s || null == m.image || E ? "standalone" === s ? (0, t.jsx)(v, {
      url: e,
      appearance: s,
      className: d,
      rootRef: h,
      onRootClick: f,
      children: (0, t.jsx)(b, {
        domain: g(e),
        title: m.title ?? n ?? g(e)
      })
    }) : (0, t.jsxs)(v, {
      url: e,
      appearance: "inline",
      className: d,
      rootRef: h,
      onRootClick: f,
      children: [m.image && !E && (0, t.jsx)(_, {
        children: (0, t.jsx)("img", {
          src: m.image,
          alt: "",
          className: "block aspect-[1.91/1] !h-auto w-full !max-w-full object-cover",
          onError: L
        })
      }), (0, t.jsx)(k, {
        domain: g(e),
        title: m.title ?? n ?? null,
        description: m.description
      })]
    }) : (0, t.jsxs)(v, {
      url: e,
      appearance: "standalone",
      variant: "image",
      className: d,
      rootRef: h,
      onRootClick: f,
      children: [(0, t.jsx)(_, {
        variant: "bubble",
        children: (0, t.jsx)("img", {
          src: m.image,
          alt: "",
          className: "block !h-full w-full !max-w-full object-cover",
          onError: L
        })
      }), (0, t.jsx)(w, {
        domain: g(e),
        title: m.title ?? n ?? g(e)
      })]
    })
  }

  function v(e) {
    let r, i, a = (0, n.c)(10),
      {
        url: s,
        children: c,
        appearance: u,
        variant: h,
        className: f,
        rootRef: m,
        onRootClick: p
      } = e,
      C = void 0 === u ? "inline" : u,
      g = "image" === (void 0 === h ? "default" : h) ? "flex flex-col gap-2.5 p-1 pb-2.5" : "block";
    return a[0] !== C || a[1] !== f || a[2] !== g ? (r = (0, o.cn)(d.HATCH_CHAT_AGENT_LINK_WIDTH_CLASS, "group overflow-hidden no-underline transition-colors", g, "standalone" === C ? (0, o.cn)(d.BUBBLE_BG_CLASS, d.BUBBLE_HOVER_CLASS) : "border-fill-divider rounded-12 border hover:bg-black/[0.03] dark:hover:bg-white/[0.04]", f), a[0] = C, a[1] = f, a[2] = g, a[3] = r) : r = a[3], a[4] !== c || a[5] !== p || a[6] !== m || a[7] !== r || a[8] !== s ? (i = (0, t.jsx)(l.EctoAnchor, {
      href: s,
      target: "_blank",
      rel: "noopener noreferrer",
      ref: m,
      onClick: p,
      className: r,
      children: c
    }), a[4] = c, a[5] = p, a[6] = m, a[7] = r, a[8] = s, a[9] = i) : i = a[9], i
  }

  function b(e) {
    let r, i, l, a, o, s, c, u = (0, n.c)(18),
      {
        domain: d,
        title: h,
        imageUrl: f,
        onImageError: m
      } = e;
    u[0] !== d ? (r = d.split(".")[0]?.replace(/[^a-z0-9]/gi, "").slice(0, 2).toUpperCase() || "↗", u[0] = d, u[1] = r) : r = u[1];
    let p = r;
    return u[2] !== f || u[3] !== m ? (i = null != f ? (0, t.jsx)("img", {
      src: f,
      alt: "",
      className: "absolute inset-0 size-full object-cover",
      onError: m
    }) : null, u[2] = f, u[3] = m, u[4] = i) : i = u[4], u[5] !== p || u[6] !== i ? (l = (0, t.jsxs)("div", {
      "aria-hidden": "true",
      className: "bg-fill-secondary-elevated text-caption-1-emphasized text-text-secondary rounded-10 relative flex size-10 shrink-0 items-center justify-center overflow-hidden",
      children: [p, i]
    }), u[5] = p, u[6] = i, u[7] = l) : l = u[7], u[8] !== h ? (a = (0, t.jsx)("p", {
      className: "text-subheadline-emphasized text-text-primary truncate",
      title: h,
      children: h
    }), u[8] = h, u[9] = a) : a = u[9], u[10] !== d ? (o = (0, t.jsx)("p", {
      className: "text-caption-1 text-text-secondary truncate",
      title: d,
      children: d
    }), u[10] = d, u[11] = o) : o = u[11], u[12] !== a || u[13] !== o ? (s = (0, t.jsxs)("div", {
      className: "flex min-w-0 flex-1 flex-col",
      children: [a, o]
    }), u[12] = a, u[13] = o, u[14] = s) : s = u[14], u[15] !== l || u[16] !== s ? (c = (0, t.jsxs)("div", {
      className: "flex min-w-0 items-center gap-2.5 py-3 ps-3 pe-2.5",
      children: [l, s]
    }), u[15] = l, u[16] = s, u[17] = c) : c = u[17], c
  }

  function _(e) {
    let i, l, a, s, c = (0, n.c)(12),
      {
        children: u,
        variant: d
      } = e,
      m = void 0 === d ? "inline" : d,
      p = (0, r.useContext)(h.HatchChatMessageLayoutContext);
    c[0] !== p || c[1] !== m ? (i = "bubble" === m && p.groupedWithPrevious ? "user" === p.side ? {
      borderStartEndRadius: f.HATCH_CHAT_TUCKED_PREVIEW_RADIUS_PX
    } : {
      borderStartStartRadius: f.HATCH_CHAT_TUCKED_PREVIEW_RADIUS_PX
    } : void 0, c[0] = p, c[1] = m, c[2] = i) : i = c[2];
    let C = i,
      g = "bubble" === m && "rounded-18 h-43.5";
    return c[3] !== g ? (l = (0, o.cn)("bg-fill-secondary relative w-full overflow-hidden", g), c[3] = g, c[4] = l) : l = c[4], c[5] !== m ? (a = "inline" === m ? (0, t.jsx)("div", {
      className: "pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-150 ease-out group-hover:bg-black/10"
    }) : null, c[5] = m, c[6] = a) : a = c[6], c[7] !== u || c[8] !== l || c[9] !== a || c[10] !== C ? (s = (0, t.jsxs)("div", {
      className: l,
      style: C,
      children: [u, a]
    }), c[7] = u, c[8] = l, c[9] = a, c[10] = C, c[11] = s) : s = c[11], s
  }

  function w(e) {
    let r, i, l, a = (0, n.c)(7),
      {
        domain: o,
        title: s
      } = e;
    return a[0] !== s ? (r = (0, t.jsx)("p", {
      className: "text-subheadline-medium text-text-primary line-clamp-3",
      title: s,
      children: s
    }), a[0] = s, a[1] = r) : r = a[1], a[2] !== o ? (i = (0, t.jsx)("p", {
      className: "text-footnote text-text-secondary truncate",
      title: o,
      children: o
    }), a[2] = o, a[3] = i) : i = a[3], a[4] !== r || a[5] !== i ? (l = (0, t.jsxs)("div", {
      className: "flex w-full min-w-0 flex-col px-3",
      children: [r, i]
    }), a[4] = r, a[5] = i, a[6] = l) : l = a[6], l
  }

  function k(e) {
    let r, i, l, a, o = (0, n.c)(11),
      {
        domain: s,
        title: c,
        titlePlaceholder: u,
        description: d
      } = e;
    o[0] !== s ? (r = (0, t.jsx)("p", {
      className: "text-caption-2 text-text-tertiary tracking-wider uppercase",
      title: s,
      children: s
    }), o[0] = s, o[1] = r) : r = o[1];
    let h = "string" == typeof c ? c : void 0,
      f = c ?? u ?? null;
    return o[2] !== h || o[3] !== f ? (i = (0, t.jsx)("p", {
      className: "text-subheadline-emphasized text-text-primary line-clamp-2",
      title: h,
      children: f
    }), o[2] = h, o[3] = f, o[4] = i) : i = o[4], o[5] !== d ? (l = null != d && d.length > 0 && (0, t.jsx)("p", {
      className: "text-caption-1 text-text-tertiary line-clamp-2",
      title: d,
      children: d
    }), o[5] = d, o[6] = l) : l = o[6], o[7] !== r || o[8] !== i || o[9] !== l ? (a = (0, t.jsxs)("div", {
      className: "flex min-w-0 flex-col gap-0.5 px-3 py-2.5",
      children: [r, i, l]
    }), o[7] = r, o[8] = i, o[9] = l, o[10] = a) : a = o[10], a
  }
  e.s(["HatchChatLinkPreview", 0, function(e) {
    let r, i = (0, n.c)(10);
    if ("image" === e.variant) {
      let n;
      return i[0] !== e ? (n = (0, t.jsx)(x, {
        ...e
      }), i[0] = e, i[1] = n) : n = i[1], n
    }
    let l = e.appearance ?? "inline";
    return i[2] !== e.className || i[3] !== e.fallbackTitle || i[4] !== e.hideOnError || i[5] !== e.onRootClick || i[6] !== e.rootRef || i[7] !== e.url || i[8] !== l ? (r = (0, t.jsx)(y, {
      url: e.url,
      fallbackTitle: e.fallbackTitle,
      appearance: l,
      hideOnError: e.hideOnError,
      className: e.className,
      rootRef: e.rootRef,
      onRootClick: e.onRootClick
    }), i[2] = e.className, i[3] = e.fallbackTitle, i[4] = e.hideOnError, i[5] = e.onRootClick, i[6] = e.rootRef, i[7] = e.url, i[8] = l, i[9] = r) : r = i[9], r
  }])
}, 966441, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(519172),
    i = e.i(848599),
    l = e.i(345717),
    a = e.i(848048),
    o = e.i(646361),
    s = e.i(374785),
    c = e.i(359783),
    u = e.i(823173),
    d = e.i(863641),
    h = e.i(74894),
    f = e.i(258544);
  let m = (0, c.createClientLogger)("HatchMediaUnavailableTile");
  e.s(["HatchMediaUnavailableTile", 0, function(e) {
    let c, p, C, g, x, y, v, b, _, w = (0, n.c)(28),
      {
        label: k,
        presentationKind: S,
        reason: j,
        enableChatMediaMenu: H,
        className: E,
        messageId: P,
        createdAt: L
      } = e,
      R = void 0 !== H && H;
    w[0] !== S || w[1] !== j ? (c = {
      eventName: u.HatchImpressionEvent.CHAT_MEDIA_UNAVAILABLE_IMPRESSION,
      actionTarget: "chat_media_unavailable",
      metadata: {
        surface: "chat",
        subsurface: "media_unavailable",
        presentation_kind: S,
        unavailable_reason: j
      }
    }, w[0] = S, w[1] = j, w[2] = c) : c = w[2], w[3] === Symbol.for("react.memo_cache_sentinel") ? (p = {
      threshold: "50%"
    }, w[3] = p) : p = w[3];
    let {
      ref: M
    } = (0, a.useTrackedImpressionRef)(c, p);
    if (w[4] !== S || w[5] !== j ? (C = () => {
        ("invalid_variant" === j || "invalid_slides_path" === j) && m.error({
          error: Error("Rejected chat attachment presentation"),
          presentationKind: S,
          reason: j,
          tags: (0, d.hatchSentryTags)(d.HATCH_SENTRY_SURFACES.CHAT_WIDGET)
        }, "Rejected chat attachment presentation")
      }, g = [S, j], w[4] = S, w[5] = j, w[6] = C, w[7] = g) : (C = w[6], g = w[7]), (0, r.useEffect)(C, g), "image" === S || "video" === S) {
      let e, n;
      w[8] !== E ? (e = (0, s.cn)(h.HATCH_IMAGE_GRID_RADIUS, "h-full min-h-28 w-full px-4 py-5", E), w[8] = E, w[9] = e) : e = w[9];
      let r = `chat-${S}-not-found`;
      return w[10] !== L || w[11] !== R || w[12] !== P || w[13] !== S || w[14] !== M || w[15] !== e || w[16] !== r ? (n = (0, t.jsx)(f.HatchUnavailableMediaTile, {
        kind: S,
        enableContextMenu: R,
        messageId: P,
        createdAt: L,
        containerRef: M,
        className: e,
        testId: r
      }), w[10] = L, w[11] = R, w[12] = P, w[13] = S, w[14] = M, w[15] = e, w[16] = r, w[17] = n) : n = w[17], n
    }
    return w[18] !== E ? (x = (0, s.cn)(h.HATCH_IMAGE_GRID_RADIUS, "bg-fill-tertiary flex h-full min-h-28 w-full flex-col items-center justify-center gap-2 px-4 py-5 text-center", E), w[18] = E, w[19] = x) : x = w[19], w[20] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, t.jsx)(o.HatchIcon, {
      icon: i.default,
      size: 28,
      className: "text-icon-secondary",
      "aria-hidden": "true"
    }), w[20] = y) : y = w[20], w[21] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, t.jsx)("span", {
      className: "text-footnote-emphasized text-text-primary",
      children: l.fbt._("Unavailable", null, {
        hk: "VPzWI"
      })
    }), w[21] = v) : v = w[21], w[22] !== k ? (b = (0, t.jsx)("span", {
      className: "text-caption-1 text-text-primary max-w-full truncate",
      title: k,
      children: k
    }), w[22] = k, w[23] = b) : b = w[23], w[24] !== M || w[25] !== x || w[26] !== b ? (_ = (0, t.jsxs)("div", {
      ref: M,
      className: x,
      children: [y, v, b]
    }), w[24] = M, w[25] = x, w[26] = b, w[27] = _) : _ = w[27], _
  }])
}, 169640, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(519172),
    i = e.i(921192);
  e.s(["HatchProxiedImage", 0, function(e) {
    let l, a, o, s = (0, n.c)(7),
      {
        src: c,
        alt: u,
        className: d
      } = e;
    s[0] !== c ? (l = (0, i.proxyExternalImageUrl)(c), s[0] = c, s[1] = l) : l = s[1];
    let h = l,
      [f, m] = (0, r.useState)(!1);
    return null == h || f ? null : (s[2] === Symbol.for("react.memo_cache_sentinel") ? (a = () => m(!0), s[2] = a) : a = s[2], s[3] !== u || s[4] !== d || s[5] !== h ? (o = (0, t.jsx)("img", {
      src: h,
      alt: u,
      className: d,
      loading: "lazy",
      onError: a
    }), s[3] = u, s[4] = d, s[5] = h, s[6] = o) : o = s[6], o)
  }])
}, 659131, e => {
  "use strict";
  var t = e.i(960607),
    n = e.i(288119);
  let r = /!\[([^\]]*)]\(([^)]+)\)/g;

  function i(e, t, n, r) {
    0 !== t.trim().length && e.push({
      type: "text",
      content: t,
      start: n,
      end: r,
      key: `text:${n}`
    })
  }

  function l(e) {
    let l, a = [],
      o = RegExp(r.source, "g"),
      s = 0,
      c = "",
      u = 0;
    for (; null !== (l = o.exec(e));) {
      c += e.slice(s, l.index);
      let r = l[0] ?? "",
        o = l[1] ?? "",
        d = function(e) {
          let t = e.trim(),
            n = t.indexOf(' "');
          return n >= 0 ? t.slice(0, n).trim() : t
        }(l[2] ?? "");
      if (!d || (0, t.isInternalHatchFileserverSource)(d) && null == (0, t.getTrustedWorkspaceFilePathFromSource)(d)) {
        c += r, s = l.index + r.length;
        continue
      }
      if ((0, t.isHatchVideoSource)(d)) {
        let e = a[a.length - 1];
        e?.type === "videos" && "" === c.trim() ? (e.sources.push(d), e.end = l.index + r.length, c = "") : (i(a, c, u, l.index), c = "", a.push({
          type: "videos",
          sources: [d],
          start: l.index,
          end: l.index + r.length,
          key: `videos:${l.index}`
        })), u = s = l.index + r.length;
        continue
      }
      if ((0, n.isSandboxFileUrl)(d) || null != (0, t.parseWorkspaceAudioFile)(d)) {
        c += r, s = l.index + r.length;
        continue
      }
      let h = a[a.length - 1];
      h?.type === "images" && "" === c.trim() ? (h.sources.push(d), h.alts.push(o), h.end = l.index + r.length, c = "") : (i(a, c, u, l.index), c = "", a.push({
        type: "images",
        sources: [d],
        alts: [o],
        start: l.index,
        end: l.index + r.length,
        key: `images:${l.index}`
      })), u = s = l.index + r.length
    }
    return i(a, c += e.slice(s), u, e.length), a
  }

  function a(e) {
    let t = ((function(e) {
      try {
        return decodeURIComponent(e)
      } catch {
        return e
      }
    })(e).split(/[?#]/)[0] ?? e).split(/[\\/]/).pop();
    return t && t.length > 0 ? t : void 0
  }
  e.s(["extractMarkdownImageFilename", 0, function(e) {
    let t = e.trim();
    if (0 !== t.length) {
      if (t.startsWith("sandbox://")) return a(t.slice(10));
      if (!(t.startsWith("data:") || t.startsWith("blob:"))) try {
        let e = new URL(t),
          n = e.searchParams.get("path");
        if (n) return a(n);
        let r = a(e.pathname);
        if ("fileserver-read" === r) return;
        return r
      } catch {
        return a(t)
      }
    }
  }, "splitContentIntoMediaSegments", 0, function(e) {
    return l(e)
  }, "stripMarkdownImages", 0, function(e) {
    return l(e).flatMap(t => "videos" === t.type ? [{
      type: "text",
      content: e.slice(t.start, t.end),
      start: t.start,
      end: t.end,
      key: `text:${t.start}`
    }] : [t]).filter(e => "text" === e.type).map(e => e.content).join("")
  }])
}, 754871, e => {
  "use strict";
  var t = e.i(345717),
    n = e.i(919426),
    r = e.i(831879),
    i = e.i(47247),
    l = e.i(359783),
    a = e.i(863641);
  let o = (0, l.createClientLogger)("useHatchCopyInviteMessage");
  e.s(["useHatchCopyInviteMessage", 0, function(e = "text_with_button") {
    let l = t.fbs._("Invite message copied", null, {
        hk: "1fPikb"
      }),
      s = t.fbs._("Invite link copied", null, {
        hk: "c7oL0"
      }),
      c = t.fbs._("Couldn't copy invite message", null, {
        hk: "1S0nFx"
      }),
      u = t.fbs._("Couldn't copy invite link", null, {
        hk: "tY4rt"
      });
    return async function(t, d, h = "message") {
      let f = (0, i.captureHatchToast)(),
        m = !1;
      try {
        let e = navigator.clipboard,
          n = null != d && "function" == typeof e?.write && "u" > typeof ClipboardItem;
        if ("function" != typeof e?.writeText && !n) throw m = !0, Error("Clipboard API is unavailable");
        return await (0, r.copyTextWithOptionalHtml)({
          text: t,
          htmlRoot: d
        }), f.success("link" === h ? s : l), !0
      } catch (i) {
        let t = (i instanceof Error || i instanceof DOMException) && ("NotAllowedError" === i.name || "SecurityError" === i.name),
          r = m ? "clipboard_unavailable" : t ? "permission_denied" : "other";
        return (0, n.withScope)(t => {
          t.setFingerprint(["hatch-invite-message-copy-failed", r]), o.error({
            error: Error("Invite message copy failed"),
            reason: r,
            tags: (0, a.hatchSentryTags)(a.HATCH_SENTRY_SURFACES.SHARE, {
              failure_reason: r,
              entrypoint: e
            })
          }, "Failed to copy Hatch invite message")
        }), f.error("link" === h ? u : c), !1
      }
    }
  }])
}, 847126, e => {
  "use strict";
  var t = e.i(648094);
  async function n(e, t, n) {
    let r = await e.exportPdf(t, n);
    if (!r.ok) throw r.error;
    return r.data
  }
  async function r(e, r, i) {
    let l, a, o = await n(e, r);
    (0, t.triggerBlobDownload)((a = (l = i.lastIndexOf(".")) > 0 ? i.slice(0, l) : i, `${a}.pdf`), o)
  }

  function i(e) {
    return "application/pdf" === e.type ? e : e.slice(0, e.size, "application/pdf")
  }

  function l() {
    return new DOMException("Print aborted", "AbortError")
  }
  let a = null;

  function o() {
    null != a && (a.iframe.remove(), URL.revokeObjectURL(a.url), a = null)
  }
  let s = null;

  function c() {
    null != s && (URL.revokeObjectURL(s), s = null)
  }
  e.s(["PRINT_BLOCKING_THRESHOLD_MS", 0, 500, "createPrintTabUrl", 0, function(e) {
    let t = URL.createObjectURL(i(e));
    return c(), s = t, t
  }, "disposePrintFrame", 0, o, "exportMarkdownPdfBlob", 0, n, "exportMarkdownToPdf", 0, r, "preparePdfPrintFrame", 0, function(e, t) {
    o();
    let {
      signal: n
    } = t;
    if (n.aborted) return Promise.reject(l());
    let r = URL.createObjectURL(i(e)),
      s = document.createElement("iframe");
    s.setAttribute("aria-hidden", "true"), s.tabIndex = -1, s.style.position = "fixed", s.style.width = "0", s.style.height = "0", s.style.border = "0", s.style.visibility = "hidden";
    let c = {
      iframe: s,
      url: r
    };
    return a = c, new Promise((e, i) => {
      let u = () => {
          a === c && o()
        },
        d = () => {
          u(), i(l())
        };
      n.addEventListener("abort", d, {
        once: !0
      }), s.addEventListener("load", () => {
        n.removeEventListener("abort", d);
        let r = !1;
        e(() => {
          if (r || n.aborted) return;
          r = !0;
          let e = s.contentWindow;
          if (null == e) throw Error("Print frame has no window");
          let i = performance.now();
          e.focus(), e.print(), t.onPrintReturned?.(performance.now() - i)
        })
      }, {
        once: !0
      }), s.addEventListener("error", () => {
        n.removeEventListener("abort", d), u(), i(Error("Print frame failed to load"))
      }, {
        once: !0
      }), s.src = r, document.body.appendChild(s)
    })
  }, "printStrategyForUserAgent", 0, function(e) {
    switch (e?.engine.name?.toLowerCase()) {
      case "blink":
      case "webkit":
        return "iframe";
      default:
        return "tab"
    }
  }, "revokePrintTabUrl", 0, c])
}, 418617, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(849329),
    r = e.i(393202),
    i = e.i(720756),
    l = e.i(897505);

  function a(e) {
    return "object" == typeof e && null != e && !Array.isArray(e)
  }

  function o(e) {
    return "number" == typeof e && Number.isFinite(e) ? e : void 0
  }

  function s(e) {
    return "number" == typeof e && Number.isInteger(e) && e >= 0 ? e : void 0
  }

  function c(e) {
    if (null != e && "number" == typeof e.amount && "string" == typeof e.currency) try {
      let t = new Intl.NumberFormat(void 0, {
          style: "currency",
          currency: e.currency
        }),
        n = t.resolvedOptions().maximumFractionDigits ?? 2;
      return t.format(e.amount / 10 ** n)
    } catch {
      return
    }
  }

  function u(e) {
    return (0, l.nonEmptyProductString)(e)?.trim().toLowerCase()
  }

  function d(e) {
    let t = u(e.dimension)?.replace(/[ -]/g, "_");
    return "size" === t || t?.startsWith("size_") === !0 || t?.endsWith("_size") === !0 || "size" === u(e.display_name)
  }

  function h(e) {
    return (0, l.nonEmptyProductString)(e)?.trim()
  }

  function f(e) {
    return Array.from(new Set((e.product_ids ?? []).map(e => h(e)).filter(e => null != e)))
  }

  function m(e, t, n) {
    let r = e.options ?? [],
      i = r.filter(e => f(e).includes(n));
    if (1 === i.length) return i[0];
    let l = new Set([u(e.dimension), u(e.display_name)].filter(e => null != e)),
      a = (t.selected_variant_info ?? []).find(e => {
        let t = u(e.label);
        return null != t && l.has(t)
      }),
      o = u(a?.value);
    if (null == o) return;
    let s = r.filter(e => u(e.value) === o || u(e.label) === o);
    return 1 === s.length ? s[0] : void 0
  }
  var p = e.i(359783),
    C = e.i(863641);
  let g = (0, p.createClientLogger)("HatchProductDetailsQuery"),
    x = {
      catalog: "product_details",
      marketplace: "listing_details"
    };

  function y(e, t, n, r, i, l) {
    return ["hatch", "product-details", 5, e, t, n, {
      insertDeveloperMessage: r,
      currency: i,
      version: l
    }]
  }

  function v(e, t) {
    let n = e.getQueryState(t);
    if (n?.data !== void 0) return Date.now() - n.dataUpdatedAt < 3e5 ? n.data : void 0
  }
  async function b(e, t, n, r, i, p) {
    try {
      e.isReady || await e.waitForTransport();
      let C = await e.sendRequest("shopping.product_details", {
        type: x[t],
        product_id: n,
        insert_developer_message: r,
        ...null != i ? {
          currency: i
        } : {},
        ...null != p ? {
          version: p
        } : {}
      });
      return function(e) {
        var t;
        let n = e.product ?? {},
          r = h(n.id),
          i = function(e, t, n) {
            if (!a(e)) return;
            let r = (0, l.nonEmptyProductString)(e.category_name),
              i = (0, l.nonEmptyProductString)(e.listing_duration_text),
              c = (0, l.nonEmptyProductString)(e.location_text) ?? n,
              u = Array.isArray(e.attributes) ? e.attributes.map(e => {
                if (!a(e)) return null;
                let t = (0, l.nonEmptyProductString)(e.name),
                  n = (0, l.nonEmptyProductString)(e.value);
                return null != t && null != n ? {
                  name: t,
                  value: n
                } : null
              }).filter(e => null != e) : [],
              d = Array.isArray(e.additional_image_urls) ? Array.from(new Set(e.additional_image_urls.map(l.absoluteHttpProductUrl).filter(e => null != e))) : [],
              f = function(e, t) {
                if (!a(e)) return;
                let n = (0, l.nonEmptyProductString)(e.seller_id);
                if (null == n) return;
                let r = o(e.average_rating),
                  i = s(e.rating_count),
                  c = null != r && r > 0 && r <= 5 && 0 !== i,
                  u = [],
                  d = new Set;
                if (Array.isArray(e.other_listings))
                  for (let n of e.other_listings) {
                    let e = function(e, t) {
                      var n;
                      let r;
                      if (!a(e)) return;
                      let i = (r = h(n = e.listing_id), null != r ? r : "number" == typeof n && Number.isSafeInteger(n) && n >= 0 ? String(n) : void 0);
                      if (null != i && i !== t) return {
                        listingId: i,
                        title: (0, l.nonEmptyProductString)(e.title),
                        imageUrl: (0, l.absoluteHttpProductUrl)(e.image_url),
                        price: (0, l.nonEmptyProductString)(e.price),
                        salePrice: (0, l.nonEmptyProductString)(e.sale_price),
                        locationText: (0, l.nonEmptyProductString)(e.location_text)
                      }
                    }(n, t);
                    if (!(null == e || d.has(e.listingId)) && (d.add(e.listingId), u.push(e), u.length >= 24)) break
                  }
                return {
                  sellerId: n,
                  name: (0, l.nonEmptyProductString)(e.name),
                  profileUrl: (0, l.absoluteHttpProductUrl)(e.profile_url),
                  profilePicUri: (0, l.absoluteHttpProductUrl)(e.profile_pic_uri),
                  joinYear: s(e.join_year),
                  averageRating: c ? r : void 0,
                  ratingCount: c ? i : void 0,
                  listingCount: s(e.listing_count),
                  otherListings: u
                }
              }(e.seller_info, t),
              m = function(e) {
                if (!a(e)) return;
                let t = o(e.latitude),
                  n = o(e.longitude),
                  r = o(e.radius_km);
                if (null != t && !(t < -90) && !(t > 90) && null != n && !(n < -180) && !(n > 180) && null != r && !(r <= 0)) return {
                  latitude: t,
                  longitude: n,
                  radiusKm: Math.max(r, .5)
                }
              }(e.approximate_location);
            if (null != r || null != i || 0 !== u.length || 0 !== d.length || null != f || null != c || null != m) return {
              categoryName: r,
              attributes: u,
              listingDurationText: i,
              additionalImageUrls: d,
              seller: f,
              locationText: c,
              approximateLocation: m
            }
          }(e.marketplace_details, r, (0, l.nonEmptyProductString)((n.selected_variant_info ?? []).find(e => "location" === u(e.label))?.value)),
          p = null == i ? (n.variant_groups ?? []).find(d) : void 0,
          C = null != p ? function(e, t) {
            let n = h(e.id);
            if (null == n) return [];
            let r = m(t, e, n),
              i = [],
              a = !0;
            for (let r of e.variant_groups ?? []) {
              if (r === t) continue;
              if (0 === (r.options ?? []).length) {
                a = !1;
                break
              }
              let l = m(r, e, n);
              if (null == l || !0 !== l.is_available) {
                a = !1;
                break
              }
              let o = f(l);
              if (0 === o.length) {
                a = !1;
                break
              }
              i.push(new Set(o))
            }
            let o = u(e.stock_status)?.replace(/[ -]/g, "_"),
              s = null == o || "in_stock" === o;
            return (t.options ?? []).map(e => {
              let t = (0, l.nonEmptyProductString)(e.label) ?? (0, l.nonEmptyProductString)(e.value),
                o = (0, l.nonEmptyProductString)(e.value) ?? t;
              if (null == t || null == o) return null;
              let c = f(e),
                u = a ? c : [];
              for (let e of i) u = u.filter(t => e.has(t));
              let d = e === r,
                h = d && c.includes(n),
                m = h ? n : 1 === u.length ? u[0] : void 0;
              return {
                label: t,
                value: o,
                productId: m,
                isAvailable: !0 === e.is_available && null != m && (h ? s : a && (!d || s)),
                isSelected: d
              }
            }).filter(e => null != e)
          }(n, p) : [],
          g = (n.images ?? []).map(e => (0, l.absoluteHttpProductUrl)(e.url)).filter(e => null != e),
          x = null == i && null != n.rating && "number" == typeof n.rating.value && n.rating.value > 0 ? {
            value: n.rating.value,
            reviewCount: n.rating.count ?? 0
          } : void 0,
          {
            hasPrice: y,
            price: v,
            salePrice: b,
            percentOff: _
          } = function(e) {
            let t = c(e.current_price),
              n = (0, l.nonEmptyProductString)(e.strikethrough_price),
              r = function(e, t) {
                if (null == e || null == t || "number" != typeof e.amount || "number" != typeof t.amount || e.currency !== t.currency || t.amount <= 0 || t.amount <= e.amount) return;
                let n = Math.round((t.amount - e.amount) / t.amount * 100);
                return n >= 1 ? n : void 0
              }(e.current_price, e.original_price);
            if (null != n && null != t) return {
              hasPrice: !0,
              price: n,
              salePrice: t,
              percentOff: void 0
            };
            let i = c(e.original_price);
            return null == t && null == i ? {
              hasPrice: !1,
              price: void 0,
              salePrice: void 0,
              percentOff: void 0
            } : null != t && null != i && "number" == typeof e.current_price?.amount && "number" == typeof e.original_price?.amount && e.original_price.amount > e.current_price.amount ? {
              hasPrice: !0,
              price: i,
              salePrice: t,
              percentOff: r
            } : {
              hasPrice: !0,
              price: t ?? i,
              salePrice: void 0,
              percentOff: void 0
            }
          }(n),
          w = (e.related_products ?? []).map(e => {
            let t = (0, l.nonEmptyProductString)(e.id);
            return null == t ? null : {
              id: t,
              imageUrl: (0, l.absoluteHttpProductUrl)(e.image_url),
              title: (0, l.nonEmptyProductString)(e.name),
              price: (0, l.nonEmptyProductString)(e.price)
            }
          }).filter(e => null != e),
          k = new Set(C.length > 0 && null != p ? [u(p.dimension), u(p.display_name)] : C.length > 0 ? ["size"] : []),
          S = ((i?.attributes.length ?? 0) > 0 ? [] : n.selected_variant_info ?? []).map(e => {
            let t = (0, l.nonEmptyProductString)(e.label),
              n = (0, l.nonEmptyProductString)(e.value);
            return null == t || null == n || k.has(u(t)) ? null : {
              label: t,
              value: n
            }
          }).filter(e => null != e);
        return {
          productId: r,
          title: (0, l.nonEmptyProductString)(n.name),
          source: (t = null != i, (0, l.nonEmptyProductString)(n.brand) ?? (0, l.nonEmptyProductString)(n.brand_name) ?? (0, l.nonEmptyProductString)(n.manufacturer) ?? (0, l.nonEmptyProductString)(n.merchant) ?? (0, l.nonEmptyProductString)(n.merchant_name) ?? (0, l.nonEmptyProductString)(n.retailer) ?? (0, l.nonEmptyProductString)(n.retailer_name) ?? (t ? void 0 : (0, l.nonEmptyProductString)(n.seller) ?? (0, l.nonEmptyProductString)(n.seller_name)) ?? (0, l.nonEmptyProductString)(n.shop) ?? (0, l.nonEmptyProductString)(n.shop_name) ?? (0, l.nonEmptyProductString)(n.store) ?? (0, l.nonEmptyProductString)(n.store_name)),
          heroImageUrls: g.length > 0 ? g : void 0,
          websiteUrl: (0, l.absoluteHttpProductUrl)(n.url),
          hasPrice: y,
          price: v,
          salePrice: b,
          percentOff: _,
          description: (0, l.nonEmptyProductString)(n.description),
          rating: x,
          moreLikeThis: w.length > 0 ? w : void 0,
          variantAttributes: S.length > 0 ? S : void 0,
          sizeOptions: C.length > 0 ? C : void 0,
          marketplaceDetails: i
        }
      }(C?.data ?? {})
    } catch (e) {
      throw g.error({
        error: e instanceof Error ? e : Error(String(e)),
        kind: t,
        version: p,
        tags: (0, C.hatchSentryTags)(C.HATCH_SENTRY_SURFACES.SHOPPING_DETAIL)
      }, "Product details fetch failed"), e
    }
  }
  e.s(["useHatchProductDetailsQuery", 0, function(e, l, a, o, s) {
    let c, u, d, h, f, m = (0, t.c)(30),
      p = void 0 === a || a,
      C = (0, i.useGatewayQueryContext)(),
      g = (0, r.useQueryClient)(),
      {
        gatewayUrl: x
      } = C,
      _ = null != l && null != e && e.length > 0 && null != x,
      w = l ?? "catalog",
      k = "marketplace" === w ? o : void 0,
      S = "catalog" === w ? s : void 0,
      j = x ?? "",
      H = e ?? "";
    m[0] !== S || m[1] !== k || m[2] !== w || m[3] !== j || m[4] !== H ? (c = y(j, w, H, !1, S, k), m[0] = S, m[1] = k, m[2] = w, m[3] = j, m[4] = H, m[5] = c) : c = m[5];
    let E = c,
      P = x ?? "",
      L = e ?? "";
    return m[6] !== S || m[7] !== k || m[8] !== p || m[9] !== w || m[10] !== P || m[11] !== L ? (u = y(P, w, L, p, S, k), m[6] = S, m[7] = k, m[8] = p, m[9] = w, m[10] = P, m[11] = L, m[12] = u) : u = m[12], m[13] !== C || m[14] !== S || m[15] !== k || m[16] !== e || m[17] !== p || m[18] !== w || m[19] !== E || m[20] !== g ? (d = async () => {
      let t = await b(C, w, e ?? "", p, S, k);
      return p && "marketplace" === w ? v(g, E) ?? t : t
    }, m[13] = C, m[14] = S, m[15] = k, m[16] = e, m[17] = p, m[18] = w, m[19] = E, m[20] = g, m[21] = d) : d = m[21], m[22] !== E || m[23] !== g ? (h = () => v(g, E), m[22] = E, m[23] = g, m[24] = h) : h = m[24], m[25] !== _ || m[26] !== u || m[27] !== d || m[28] !== h ? (f = {
      queryKey: u,
      queryFn: d,
      enabled: _,
      initialData: h,
      initialDataUpdatedAt: 0,
      staleTime: 3e5,
      retry: !1
    }, m[25] = _, m[26] = u, m[27] = d, m[28] = h, m[29] = f) : f = m[29], (0, n.useQuery)(f)
  }, "usePrefetchProductDetails", 0, function() {
    let e, n = (0, t.c)(3),
      l = (0, r.useQueryClient)(),
      a = (0, i.useGatewayQueryContext)();
    return n[0] !== a || n[1] !== l ? (e = (e, t, n) => {
      if (null == a.gatewayUrl || 0 === e.length) return;
      let r = "marketplace" === t ? "pdp_v1" : void 0,
        i = "catalog" === t ? n : void 0,
        o = y(a.gatewayUrl, t, e, !0, i, r);
      l.prefetchQuery({
        queryKey: y(a.gatewayUrl, t, e, !1, i, r),
        queryFn: async () => {
          let n = await b(a, t, e, !1, i, r);
          return l.getQueryState(o)?.data === void 0 && l.setQueryData(o, n, {
            updatedAt: 0
          }), n
        },
        staleTime: 3e5
      })
    }, n[0] = a, n[1] = l, n[2] = e) : e = n[2], e
  }], 418617)
}, 576680, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, o = (0, n.c)(9);
    return o[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), o[0] = e.title, o[1] = r) : r = o[1], o[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), o[2] = e.children, o[3] = i) : i = o[3], o[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M23.88 12C23.88 13.24 22.91 14.1 22.05 14.58C21.16 15.08 20.06 15.38 19.17 15.38L16.22 15.38L10.73 23.28C10.47 23.65 10.05 23.87 9.6 23.88H8.13L7.97 23.87C7.22 23.78 6.68 23.09 6.77 22.34L6.79 22.18L8.43 15.32L5.47 15.14L4.36 18L4.31 18.1C4.09 18.57 3.6 18.88 3.07 18.88H1.39C0.63 18.87 0.01 18.26 0.01 17.5L0.01 6.5C0.01 5.74 0.63 5.13 1.39 5.13L3.07 5.13C3.64 5.13 4.15 5.47 4.36 6L5.47 8.86L8.43 8.68L6.79 1.82C6.6 1.01 7.17 0.23 7.97 0.13L8.13 0.13L9.6 0.13L9.77 0.14C10.15 0.18 10.5 0.39 10.73 0.72L16.22 8.63L19.17 8.63C20.06 8.63 21.16 8.92 22.05 9.42C22.91 9.9 23.88 10.76 23.88 12ZM22.13 12C22.13 11.74 21.9 11.35 21.2 10.95C20.54 10.58 19.73 10.38 19.17 10.38L15.31 10.38L9.4 1.88H8.61L10.63 10.38H9.39L4.3 10.68L2.82 6.88L1.76 6.88L1.76 17.13H2.82L4.3 13.32L9.39 13.63H10.63L8.61 22.13H9.4L15.31 13.63L19.17 13.63C19.73 13.63 20.54 13.42 21.2 13.05C21.9 12.65 22.13 12.26 22.13 12Z"
    }), o[4] = l) : l = o[4], o[5] !== e || o[6] !== r || o[7] !== i ? (a = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l]
    }), o[5] = e, o[6] = r, o[7] = i, o[8] = a) : a = o[8], a
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 570730, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, o, s, c = (0, n.c)(11);
    return c[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), c[0] = e.title, c[1] = r) : r = c[1], c[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), c[2] = e.children, c[3] = i) : i = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      d: "M16 17.25C16.41 17.25 16.75 17.59 16.75 18C16.75 18.41 16.41 18.75 16 18.75H8C7.59 18.75 7.25 18.41 7.25 18C7.25 17.59 7.59 17.25 8 17.25H16Z"
    }), a = (0, t.jsx)("path", {
      d: "M14 13.25C14.41 13.25 14.75 13.59 14.75 14C14.75 14.41 14.41 14.75 14 14.75H8C7.59 14.75 7.25 14.41 7.25 14C7.25 13.59 7.59 13.25 8 13.25H14Z"
    }), o = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.06 0.13C11.91 0.14 12.52 0.17 13.12 0.32C13.82 0.48 14.49 0.76 15.11 1.14C15.82 1.58 16.42 2.19 17.43 3.19L18.81 4.57C19.81 5.58 20.42 6.18 20.86 6.89C21.24 7.51 21.52 8.18 21.68 8.88C21.83 9.48 21.86 10.09 21.87 10.94C21.87 10.96 21.88 10.98 21.88 11V16.6C21.88 17.71 21.88 18.59 21.82 19.3C21.76 20.02 21.63 20.64 21.34 21.21C20.88 22.13 20.13 22.88 19.21 23.34C18.64 23.63 18.02 23.76 17.3 23.82C16.59 23.88 15.71 23.88 14.6 23.88H9.4C8.29 23.88 7.41 23.88 6.7 23.82C5.98 23.76 5.36 23.63 4.79 23.34C3.87 22.88 3.12 22.13 2.66 21.21C2.37 20.64 2.24 20.02 2.18 19.3C2.12 18.59 2.13 17.71 2.13 16.6V7.4C2.13 6.29 2.12 5.41 2.18 4.7C2.24 3.98 2.37 3.36 2.66 2.79C3.12 1.87 3.87 1.12 4.79 0.66C5.36 0.37 5.98 0.24 6.7 0.18C7.41 0.12 8.29 0.13 9.4 0.13H11C11.02 0.13 11.04 0.13 11.06 0.13ZM9.4 1.88C8.27 1.88 7.47 1.88 6.84 1.93C6.23 1.98 5.86 2.07 5.58 2.22C4.99 2.52 4.52 2.99 4.22 3.58C4.07 3.86 3.98 4.23 3.93 4.84C3.88 5.47 3.88 6.27 3.88 7.4V16.6C3.88 17.73 3.88 18.53 3.93 19.16C3.98 19.77 4.07 20.14 4.22 20.42C4.52 21.01 4.99 21.48 5.58 21.78C5.86 21.93 6.23 22.02 6.84 22.07C7.47 22.12 8.27 22.13 9.4 22.13H14.6C15.73 22.13 16.53 22.12 17.16 22.07C17.77 22.02 18.14 21.93 18.42 21.78C19.01 21.48 19.48 21.01 19.78 20.42C19.93 20.14 20.02 19.77 20.07 19.16C20.12 18.53 20.13 17.73 20.13 16.6V11.98C20.13 11.55 20.12 11.19 20.12 10.88C20.06 10.32 19.58 9.88 19 9.88H16C13.86 9.88 12.13 8.14 12.13 6V3C12.13 2.41 11.68 1.93 11.1 1.88C10.8 1.88 10.45 1.88 10.02 1.88H9.4ZM13.82 2.42C13.85 2.61 13.88 2.8 13.88 3V6C13.88 7.17 14.83 8.13 16 8.13H19C19.2 8.13 19.39 8.14 19.58 8.18C19.51 8.05 19.44 7.93 19.37 7.81C19.07 7.31 18.64 6.87 17.57 5.81L16.19 4.43C15.13 3.36 14.69 2.93 14.19 2.63C14.07 2.55 13.94 2.49 13.82 2.42Z"
    }), c[4] = l, c[5] = a, c[6] = o) : (l = c[4], a = c[5], o = c[6]), c[7] !== e || c[8] !== r || c[9] !== i ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l, a, o]
    }), c[7] = e, c[8] = r, c[9] = i, c[10] = s) : s = c[10], s
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 357820, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, o, s, c, u = (0, n.c)(12);
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
    }), o = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.06 12C10.7 12 11.25 12.13 11.71 12.39C12.17 12.65 12.53 13.01 12.78 13.46C13.03 13.92 13.15 14.44 13.15 15.03C13.15 15.61 13.03 16.13 12.78 16.59C12.53 17.04 12.17 17.4 11.71 17.66C11.25 17.92 10.7 18.05 10.06 18.05H8.26C7.99 18.05 7.76 17.83 7.76 17.55V12.5C7.76 12.22 7.99 12 8.26 12H10.06ZM9.02 16.99H10.05C10.43 16.99 10.76 16.91 11.02 16.75C11.29 16.58 11.5 16.35 11.65 16.06C11.79 15.76 11.87 15.42 11.87 15.03C11.87 14.63 11.79 14.28 11.65 13.99C11.5 13.7 11.29 13.47 11.02 13.31C10.76 13.15 10.43 13.06 10.05 13.06H9.02V16.99Z"
    }), s = (0, t.jsx)("path", {
      d: "M17.94 12C18.22 12 18.44 12.22 18.44 12.5V12.55C18.44 12.82 18.22 13.05 17.94 13.05H15.5V14.67H17.39C17.67 14.67 17.89 14.89 17.89 15.17V15.21C17.89 15.49 17.67 15.71 17.39 15.71H15.5V17.55C15.5 17.83 15.28 18.05 15 18.05H14.75C14.48 18.05 14.25 17.83 14.25 17.55V12.5C14.25 12.22 14.48 12 14.75 12H17.94Z"
    }), u[4] = l, u[5] = a, u[6] = o, u[7] = s) : (l = u[4], a = u[5], o = u[6], s = u[7]), u[8] !== e || u[9] !== r || u[10] !== i ? (c = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l, a, o, s]
    }), u[8] = e, u[9] = r, u[10] = i, u[11] = c) : c = u[11], c
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 767838, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, o = (0, n.c)(9);
    return o[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), o[0] = e.title, o[1] = r) : r = o[1], o[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), o[2] = e.children, o[3] = i) : i = o[3], o[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.6 2.13C17.71 2.13 18.59 2.12 19.3 2.18C20.02 2.24 20.64 2.37 21.21 2.66C22.13 3.12 22.88 3.87 23.34 4.79C23.63 5.36 23.76 5.98 23.82 6.7C23.88 7.41 23.88 8.29 23.88 9.4V14.6C23.88 15.71 23.88 16.59 23.82 17.3C23.76 18.02 23.63 18.64 23.34 19.21C22.88 20.13 22.13 20.88 21.21 21.34C20.64 21.63 20.02 21.76 19.3 21.82C18.59 21.88 17.71 21.88 16.6 21.88H7.4C6.29 21.88 5.41 21.88 4.7 21.82C3.98 21.76 3.36 21.63 2.79 21.34C1.87 20.88 1.12 20.13 0.66 19.21C0.37 18.64 0.24 18.02 0.18 17.3C0.12 16.59 0.13 15.71 0.13 14.6V9.4C0.13 8.29 0.12 7.41 0.18 6.7C0.24 5.98 0.37 5.36 0.66 4.79C1.12 3.87 1.87 3.12 2.79 2.66C3.36 2.37 3.98 2.24 4.7 2.18C5.41 2.12 6.29 2.13 7.4 2.13H16.6ZM13.65 13.66C12.66 14.36 11.34 14.36 10.35 13.66L3.56 19.77C3.57 19.78 3.57 19.78 3.58 19.78C3.86 19.93 4.23 20.02 4.84 20.07C5.47 20.12 6.27 20.13 7.4 20.13H16.6C17.73 20.13 18.53 20.12 19.16 20.07C19.77 20.02 20.14 19.93 20.42 19.78C20.43 19.78 20.43 19.78 20.44 19.77L13.65 13.66ZM2.02 6.19C1.98 6.37 1.95 6.59 1.93 6.84C1.88 7.47 1.88 8.27 1.88 9.4V14.6C1.88 15.73 1.88 16.53 1.93 17.16C1.98 17.77 2.07 18.14 2.22 18.42C2.24 18.47 2.27 18.51 2.29 18.56L9.03 12.5L2.02 6.19ZM14.97 12.5L21.71 18.56C21.73 18.51 21.76 18.47 21.78 18.42C21.93 18.14 22.02 17.77 22.07 17.16C22.12 16.53 22.13 15.73 22.13 14.6V9.4C22.13 8.27 22.12 7.47 22.07 6.84C22.05 6.59 22.02 6.37 21.98 6.19L14.97 12.5ZM7.4 3.88C6.27 3.88 5.47 3.88 4.84 3.93C4.23 3.98 3.86 4.07 3.58 4.22C3.34 4.34 3.13 4.49 2.93 4.66L11.25 12.15C11.67 12.53 12.33 12.53 12.75 12.15L21.07 4.66C20.87 4.49 20.66 4.34 20.42 4.22C20.14 4.07 19.77 3.98 19.16 3.93C18.53 3.88 17.73 3.88 16.6 3.88H7.4Z"
    }), o[4] = l) : l = o[4], o[5] !== e || o[6] !== r || o[7] !== i ? (a = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l]
    }), o[5] = e, o[6] = r, o[7] = i, o[8] = a) : a = o[8], a
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 868445, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, i, l, a, o, s = (0, n.c)(10);
    return s[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = r) : r = s[1], s[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = i) : i = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 6.13C13.59 6.13 14.87 7.41 14.88 9V10.68C14.91 10.69 14.94 10.7 14.98 10.71L15.12 10.77L15.22 10.83C15.4 10.94 15.56 11.1 15.67 11.28L15.73 11.38L15.79 11.52C15.84 11.66 15.86 11.8 15.87 11.9C15.88 12.03 15.88 12.17 15.88 12.3V15.2C15.88 15.33 15.88 15.47 15.87 15.6C15.85 15.74 15.83 15.93 15.73 16.12C15.59 16.38 15.38 16.59 15.12 16.73C14.93 16.83 14.74 16.85 14.6 16.87C14.47 16.88 14.33 16.88 14.2 16.88H9.8C9.67 16.88 9.53 16.88 9.4 16.87C9.26 16.85 9.07 16.83 8.88 16.73C8.62 16.59 8.41 16.38 8.27 16.12C8.17 15.93 8.15 15.74 8.13 15.6C8.12 15.47 8.13 15.33 8.13 15.2V12.3C8.13 12.17 8.12 12.03 8.13 11.9C8.15 11.76 8.17 11.57 8.27 11.38L8.33 11.28C8.46 11.07 8.65 10.89 8.88 10.77L9.02 10.71C9.06 10.7 9.09 10.69 9.13 10.68V9C9.13 7.41 10.41 6.13 12 6.13ZM12 7.88C11.38 7.88 10.88 8.38 10.88 9V10.63H13.13V9C13.12 8.38 12.62 7.88 12 7.88Z"
    }), a = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.34 0.21C12.61 0.24 12.86 0.3 13.23 0.38L18.68 1.59C19.12 1.69 19.49 1.77 19.79 1.86C20.11 1.95 20.4 2.07 20.68 2.27C21.1 2.58 21.44 2.99 21.64 3.47C21.78 3.78 21.83 4.1 21.85 4.42C21.88 4.74 21.88 5.12 21.88 5.57V10.65C21.88 13.27 21.88 14.77 21.44 16.14C21.06 17.31 20.44 18.4 19.61 19.32C18.66 20.39 17.35 21.14 15.09 22.46L14.05 23.07C13.52 23.38 13.08 23.64 12.6 23.75C12.21 23.83 11.79 23.83 11.4 23.75C10.92 23.64 10.48 23.38 9.95 23.07L8.91 22.46C6.65 21.14 5.34 20.39 4.39 19.32C3.56 18.4 2.94 17.31 2.56 16.14C2.12 14.77 2.13 13.27 2.13 10.65V5.57C2.13 5.12 2.12 4.74 2.15 4.42C2.17 4.1 2.22 3.78 2.36 3.47C2.56 2.99 2.9 2.58 3.32 2.27C3.6 2.07 3.89 1.95 4.21 1.86C4.51 1.77 4.88 1.69 5.32 1.59L10.77 0.38C11.14 0.3 11.39 0.24 11.66 0.21C11.89 0.19 12.11 0.19 12.34 0.21ZM11.81 1.96C11.69 1.97 11.56 1.99 11.15 2.09L5.7 3.3C5.24 3.4 4.94 3.47 4.71 3.54C4.49 3.6 4.4 3.65 4.34 3.69C4.18 3.81 4.05 3.97 3.97 4.16C3.94 4.23 3.91 4.33 3.89 4.55C3.88 4.79 3.88 5.1 3.88 5.57V10.65C3.88 13.39 3.89 14.56 4.22 15.6C4.53 16.54 5.03 17.42 5.69 18.16C6.42 18.97 7.43 19.57 9.79 20.95L10.83 21.55C11.47 21.93 11.62 22 11.76 22.03C11.92 22.07 12.08 22.07 12.24 22.03C12.38 22 12.53 21.93 13.17 21.55L14.21 20.95C16.57 19.57 17.58 18.97 18.31 18.16C18.97 17.42 19.47 16.54 19.78 15.6C20.11 14.56 20.13 13.39 20.13 10.65V5.57C20.13 5.1 20.12 4.79 20.11 4.55C20.09 4.33 20.06 4.23 20.03 4.16C19.95 3.97 19.82 3.81 19.66 3.69C19.6 3.65 19.51 3.6 19.29 3.54C19.06 3.47 18.76 3.4 18.3 3.3L12.85 2.09C12.44 2 12.31 1.97 12.19 1.96C12.06 1.95 11.94 1.95 11.81 1.96Z"
    }), s[4] = l, s[5] = a) : (l = s[4], a = s[5]), s[6] !== e || s[7] !== r || s[8] !== i ? (o = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, l, a]
    }), s[6] = e, s[7] = r, s[8] = i, s[9] = o) : o = s[9], o
  }
  r._isSVG = !0, e.s(["default", 0, r])
}]);

//# debugId=19c88013-aec0-78e5-9a42-9781c07881bd
//# sourceMappingURL=3ebeeh-bzh347.js.map