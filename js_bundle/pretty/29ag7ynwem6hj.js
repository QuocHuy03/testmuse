;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "cc837512-434a-4ea2-ad0b-f5f5c6c75ba8")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 841714, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    i = e.i(414809),
    l = e.i(763971),
    r = e.i(848048),
    a = e.i(941960),
    c = e.i(731714),
    o = e.i(908164),
    C = e.i(432459);
  e.s(["EctoBaseLink", 0, function(e) {
    let s, d, u, h, f, p, m, x, y, v, _, g, k, j, b, L = (0, n.c)(39);
    L[0] !== e ? ({
      analytics: s,
      href: d,
      ref: h,
      onClick: u,
      ...f
    } = e, L[0] = e, L[1] = s, L[2] = d, L[3] = u, L[4] = h, L[5] = f) : (s = L[1], d = L[2], u = L[3], h = L[4], f = L[5]), L[6] !== d ? (p = d.startsWith("http://") || d.startsWith("https://"), L[6] = d, L[7] = p) : p = L[7];
    let N = p,
      T = s?.actionTarget ?? "BaseLink",
      R = (0, l.useSearchParams)(),
      S = (0, l.usePathname)();
    L[8] !== T || L[9] !== s ? (m = null == s ? null : {
      ...s,
      actionTarget: T
    }, L[8] = T, L[9] = s, L[10] = m) : m = L[10];
    let E = (0, r.useInteractionEventHandler)(m),
      M = (0, c.useMergeRefs)(E, h);
    L[11] !== f ? ({
      replace: _,
      preventScrollReset: v,
      prefetch: y,
      ...x
    } = f, L[11] = f, L[12] = x, L[13] = y, L[14] = v, L[15] = _) : (x = L[12], y = L[13], v = L[14], _ = L[15]), L[16] !== S || L[17] !== d || L[18] !== N || L[19] !== u ? (g = e => {
      let t = e.currentTarget.target;
      if (!N && !e.defaultPrevented && 0 === e.button && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && (!t || "_self" === t)) {
        let e = new URL(d, window.location.origin).pathname;
        e !== S && (0, C.startNavigationTrace)(e, S)
      }
      u?.(e)
    }, L[16] = S, L[17] = d, L[18] = N, L[19] = u, L[20] = g) : g = L[20];
    let w = g;
    if (N) {
      let e;
      return L[21] !== d || L[22] !== x || L[23] !== M || L[24] !== u ? (e = (0, t.jsx)(a.EctoAnchor, {
        ref: M,
        href: d,
        onClick: u,
        ...x
      }), L[21] = d, L[22] = x, L[23] = M, L[24] = u, L[25] = e) : e = L[25], e
    }
    L[26] !== R ? (k = R.toString(), L[26] = R, L[27] = k) : k = L[27];
    let H = k,
      P = H.length > 0 ? `?${H}` : "";
    L[28] !== d || L[29] !== P ? (j = (0, o.preserveMcParams)(d, P), L[28] = d, L[29] = P, L[30] = j) : j = L[30];
    let A = j,
      O = "string" == typeof A ? A : `${A.pathname??""}${A.search??""}${A.hash??""}`,
      I = !0 !== v;
    return L[31] !== w || L[32] !== x || L[33] !== M || L[34] !== y || L[35] !== _ || L[36] !== O || L[37] !== I ? (b = (0, t.jsx)(i.default, {
      ref: M,
      href: O,
      prefetch: y,
      replace: _,
      scroll: I,
      onClick: w,
      ...x
    }), L[31] = w, L[32] = x, L[33] = M, L[34] = y, L[35] = _, L[36] = O, L[37] = I, L[38] = b) : b = L[38], b
  }])
}, 129985, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    i = e.i(374785),
    l = e.i(430116),
    r = e.i(941960),
    a = e.i(294237),
    c = e.i(646361),
    o = e.i(841714);
  let C = (0, a.cva)("cursor-pointer focus:not-focus-visible:outline-none [text-decoration-color:currentColor]", {
      variants: {
        variant: {
          primary: "text-text-primary-link font-semibold",
          secondary: "text-text-secondary font-normal active:text-text-primary",
          currentColor: "text-current hover:underline active:underline"
        },
        display: {
          inline: "inline-flex items-center",
          block: "block"
        },
        isDisabled: {
          true: "opacity-50 pointer-events-none no-underline",
          false: ""
        }
      },
      defaultVariants: {
        variant: "primary",
        display: "inline",
        isDisabled: !1
      }
    }),
    s = {
      primary: "text-text-primary",
      secondary: "text-text-secondary",
      tertiary: "text-text-tertiary",
      quaternary: "text-text-quaternary",
      white: "text-text-white",
      link: "text-text-primary-link",
      destructive: "text-text-destructive",
      success: "text-text-success"
    };

  function d(e) {
    let a, d, u, h, f, p, m, x, y, v, _, g, k, j, b, L, N, T, R, S, E = (0, n.c)(50);
    E[0] !== e ? ({
      children: f,
      className: p,
      color: m,
      display: v,
      href: x,
      iconStart: a,
      isDisabled: _,
      skipLinkshim: g,
      testid: k,
      textStyle: j,
      variant: b,
      analyticsEvent: u,
      analyticsActionOverride: d,
      analyticsMetadata: h,
      ...y
    } = e, E[0] = e, E[1] = a, E[2] = d, E[3] = u, E[4] = h, E[5] = f, E[6] = p, E[7] = m, E[8] = x, E[9] = y, E[10] = v, E[11] = _, E[12] = g, E[13] = k, E[14] = j, E[15] = b) : (a = E[1], d = E[2], u = E[3], h = E[4], f = E[5], p = E[6], m = E[7], x = E[8], y = E[9], v = E[10], _ = E[11], g = E[12], k = E[13], j = E[14], b = E[15]);
    let M = void 0 === v ? "inline" : v,
      w = void 0 !== _ && _,
      H = void 0 !== g && g;
    E[16] !== d || E[17] !== u || E[18] !== h ? (L = null == u ? void 0 : {
      eventName: u,
      actionTarget: "link",
      actionType: d ?? "click",
      metadata: h
    }, E[16] = d, E[17] = u, E[18] = h, E[19] = L) : L = E[19];
    let P = L,
      A = m ?? (b ? void 0 : "link");
    E[20] !== a ? (N = a && (0, t.jsx)(c.HatchIcon, {
      icon: a,
      size: 16,
      className: "me-1 shrink-0"
    }), E[20] = a, E[21] = N) : N = E[21], E[22] !== f || E[23] !== N || E[24] !== j ? (T = (0, t.jsxs)(l.Text, {
      as: "span",
      className: "inline-flex items-center text-current",
      variant: j,
      children: [N, f]
    }), E[22] = f, E[23] = N, E[24] = j, E[25] = T) : T = E[25];
    let O = T;
    E[26] !== p || E[27] !== M || E[28] !== A || E[29] !== w || E[30] !== b ? (R = (0, i.cn)(C({
      variant: A ? void 0 : b,
      display: M,
      isDisabled: w
    }), A && s[A], p), E[26] = p, E[27] = M, E[28] = A, E[29] = w, E[30] = b, E[31] = R) : R = E[31];
    let I = R;
    if ("" === x) {
      let e;
      return E[32] !== I || E[33] !== O || E[34] !== k ? (e = (0, t.jsx)("span", {
        className: I,
        "data-testid": k,
        children: O
      }), E[32] = I, E[33] = O, E[34] = k, E[35] = e) : e = E[35], e
    }
    if (x.startsWith("http://") || x.startsWith("https://")) {
      let e, n = y;
      return E[36] !== I || E[37] !== O || E[38] !== x || E[39] !== H || E[40] !== n || E[41] !== k ? (e = (0, t.jsx)(r.EctoAnchor, {
        className: I,
        "data-testid": k,
        href: x,
        skipLinkshim: H,
        ...n,
        children: O
      }), E[36] = I, E[37] = O, E[38] = x, E[39] = H, E[40] = n, E[41] = k, E[42] = e) : e = E[42], e
    }
    return E[43] !== P || E[44] !== I || E[45] !== O || E[46] !== x || E[47] !== y || E[48] !== k ? (S = (0, t.jsx)(o.EctoBaseLink, {
      ...y,
      className: I,
      "data-testid": k,
      href: x,
      analytics: P,
      children: O
    }), E[43] = P, E[44] = I, E[45] = O, E[46] = x, E[47] = y, E[48] = k, E[49] = S) : S = E[49], S
  }
  d.displayName = "Link", e.s(["EctoLink", 0, d])
}, 305646, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(345717),
    i = e.i(722099),
    l = e.i(255859),
    r = e.i(848048),
    a = e.i(925494),
    c = e.i(281539),
    o = e.i(430116),
    C = e.i(129985),
    s = e.i(375338);

  function d(e) {
    let n, l, r, a, c = (0, i.c)(9);
    return c[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), c[0] = e.title, c[1] = n) : n = c[1], c[2] !== e.children ? (l = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), c[2] = e.children, c[3] = l) : l = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.603 10.19a10.439 10.439 0 0 1-1.237-1.056c-.396-.396-.723-.79-.98-1.134H15a2 2 0 0 0-2 2v5a4 4 0 0 1-4 4H7.83a3.001 3.001 0 1 1 0-2H9a2 2 0 0 0 2-2v-5c0-.729.195-1.412.535-2H7.95c-.022.22-.049.425-.078.611A1.54 1.54 0 0 1 6.5 9.927C6.108 9.97 5.61 10 5 10s-1.108-.031-1.5-.073a1.54 1.54 0 0 1-1.372-1.316C2.058 8.166 2 7.613 2 7s.058-1.166.128-1.611A1.54 1.54 0 0 1 3.5 4.073C3.892 4.03 4.39 4 5 4s1.108.031 1.5.073a1.54 1.54 0 0 1 1.372 1.316c.029.186.056.39.078.611h7.388l.012-.015c.25-.309.582-.685 1.016-1.12a14.4 14.4 0 0 1 1.119-1.015 1.55 1.55 0 0 1 1.912-.04c.367.267.801.62 1.237 1.056.437.436.789.87 1.055 1.237a1.55 1.55 0 0 1-.04 1.912c-.248.309-.58.685-1.015 1.12a14.4 14.4 0 0 1-1.119 1.015 1.55 1.55 0 0 1-1.912.04zm.917-1.815c.202-.175.437-.392.7-.655.263-.263.48-.498.655-.7a8.332 8.332 0 0 0-.655-.74 8.334 8.334 0 0 0-.74-.655c-.202.175-.437.392-.7.655-.263.263-.48.498-.655.7.184.235.403.488.655.74s.505.471.74.655zM6 7c0-.35-.024-.678-.058-.969A13.403 13.403 0 0 0 5 6c-.365 0-.678.013-.942.031A8.26 8.26 0 0 0 4 7c0 .35.024.678.058.969.264.018.577.031.942.031s.678-.013.942-.031A8.26 8.26 0 0 0 6 7zm0 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"
    }), c[4] = r) : r = c[4], c[5] !== e || c[6] !== n || c[7] !== l ? (a = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, l, r]
    }), c[5] = e, c[6] = n, c[7] = l, c[8] = a) : a = c[8], a
  }

  function u(e) {
    let n, l, r, a, c = (0, i.c)(9);
    return c[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), c[0] = e.title, c[1] = n) : n = c[1], c[2] !== e.children ? (l = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), c[2] = e.children, c[3] = l) : l = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5 9a3.001 3.001 0 0 0 2.83-2H9a2 2 0 0 1 2 2v6a4 4 0 0 0 4 4h1.17a3.001 3.001 0 1 0 0-2H15a2 2 0 0 1-2-2V9c0-.729-.195-1.412-.535-2h3.706a3.001 3.001 0 1 0 0-2H7.829A3.001 3.001 0 1 0 5 9zm0-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm13-1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"
    }), c[4] = r) : r = c[4], c[5] !== e || c[6] !== n || c[7] !== l ? (a = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, l, r]
    }), c[5] = e, c[6] = n, c[7] = l, c[8] = a) : a = c[8], a
  }
  d._isSVG = !0, u._isSVG = !0;
  var h = e.i(575898);

  function f(e) {
    let n, l, r, a, c, o, C, s = (0, i.c)(12);
    return s[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = n) : n = s[1], s[2] !== e.children ? (l = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = l) : l = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 14.12C6.48 14.12 6.88 14.52 6.88 15V21C6.87 21.48 6.48 21.87 6 21.87H2C1.52 21.87 1.13 21.48 1.13 21V15C1.13 14.52 1.52 14.12 2 14.12H6ZM2.88 20.12H5.13V15.87H2.88V20.12Z"
    }), a = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 9.12C14.48 9.12 14.88 9.52 14.88 10V21C14.87 21.48 14.48 21.87 14 21.87H10C9.52 21.87 9.13 21.48 9.13 21V10C9.13 9.52 9.52 9.12 10 9.12H14ZM10.88 20.12H13.13V10.87H10.88V20.12Z"
    }), c = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22 12.12C22.48 12.12 22.88 12.52 22.88 13V21C22.87 21.48 22.48 21.87 22 21.87H18C17.52 21.87 17.13 21.48 17.13 21V13C17.13 12.52 17.52 12.12 18 12.12H22ZM18.88 20.12H21.13V13.87H18.88V20.12Z"
    }), o = (0, t.jsx)("path", {
      d: "M11.75 0.17C11.84 -0.06 12.16 -0.06 12.25 0.17L13.23 2.5L15.75 2.71C15.99 2.73 16.09 3.03 15.9 3.19L13.99 4.84L14.57 7.3C14.63 7.53 14.37 7.72 14.16 7.59L12 6.28L9.84 7.59C9.63 7.72 9.37 7.53 9.43 7.3L10.01 4.84L8.1 3.19C7.91 3.03 8.01 2.73 8.25 2.71L10.77 2.5L11.75 0.17Z"
    }), s[4] = r, s[5] = a, s[6] = c, s[7] = o) : (r = s[4], a = s[5], c = s[6], o = s[7]), s[8] !== e || s[9] !== n || s[10] !== l ? (C = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, l, r, a, c, o]
    }), s[8] = e, s[9] = n, s[10] = l, s[11] = C) : C = s[11], C
  }

  function p(e) {
    let n, l, r, a, c, o, C, s = (0, i.c)(12);
    return s[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = n) : n = s[1], s[2] !== e.children ? (l = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = l) : l = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)("path", {
      d: "M5.5 17C6.33 17 7 17.67 7 18.5C7 19.33 6.33 20 5.5 20C4.67 20 4 19.33 4 18.5C4 17.67 4.67 17 5.5 17Z"
    }), a = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18.5 13.13C21.47 13.13 23.88 15.53 23.88 18.5C23.88 21.47 21.47 23.88 18.5 23.88H5.5C2.53 23.88 0.13 21.47 0.13 18.5C0.13 15.53 2.53 13.13 5.5 13.13H18.5ZM5.5 14.88C3.5 14.88 1.88 16.5 1.88 18.5C1.88 20.5 3.5 22.13 5.5 22.13H18.5C20.5 22.13 22.13 20.5 22.13 18.5C22.13 16.5 20.5 14.88 18.5 14.88H5.5Z"
    }), c = (0, t.jsx)("path", {
      d: "M18.5 4C19.33 4 20 4.67 20 5.5C20 6.33 19.33 7 18.5 7C17.67 7 17 6.33 17 5.5C17 4.67 17.67 4 18.5 4Z"
    }), o = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18.5 0.13C21.47 0.13 23.88 2.53 23.88 5.5C23.88 8.47 21.47 10.88 18.5 10.88H5.5C2.53 10.88 0.13 8.47 0.13 5.5C0.13 2.53 2.53 0.13 5.5 0.13H18.5ZM5.5 1.88C3.5 1.88 1.88 3.5 1.88 5.5C1.88 7.5 3.5 9.13 5.5 9.13H18.5C20.5 9.13 22.13 7.5 22.13 5.5C22.13 3.5 20.5 1.88 18.5 1.88H5.5Z"
    }), s[4] = r, s[5] = a, s[6] = c, s[7] = o) : (r = s[4], a = s[5], c = s[6], o = s[7]), s[8] !== e || s[9] !== n || s[10] !== l ? (C = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, l, r, a, c, o]
    }), s[8] = e, s[9] = n, s[10] = l, s[11] = C) : C = s[11], C
  }
  f._isSVG = !0, p._isSVG = !0;
  var m = e.i(756710);

  function x(e) {
    let n, l, r, a, c, o, C = (0, i.c)(11);
    return C[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), C[0] = e.title, C[1] = n) : n = C[1], C[2] !== e.children ? (l = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), C[2] = e.children, C[3] = l) : l = C[3], C[4] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)("path", {
      d: "M12 15.47C12.41 15.47 12.74 15.59 13 15.82C13.26 16.05 13.39 16.36 13.39 16.74C13.39 17.12 13.26 17.42 13 17.65C12.74 17.88 12.41 18 12 18C11.59 18 11.25 17.88 10.99 17.65C10.74 17.42 10.61 17.12 10.61 16.74C10.61 16.36 10.74 16.05 10.99 15.82C11.25 15.59 11.59 15.47 12 15.47Z"
    }), a = (0, t.jsx)("path", {
      d: "M12 6C12.64 6 13.16 6.53 13.14 7.17L12.95 13.28C12.93 13.79 12.51 14.19 12 14.19C11.49 14.19 11.07 13.79 11.05 13.28L10.86 7.17C10.84 6.53 11.36 6 12 6Z"
    }), c = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.6 2.13C17.71 2.13 18.59 2.12 19.3 2.18C20.02 2.24 20.64 2.37 21.21 2.66C22.13 3.12 22.88 3.87 23.34 4.79C23.63 5.36 23.76 5.98 23.82 6.7C23.88 7.41 23.88 8.29 23.88 9.4V14.6C23.88 15.71 23.88 16.59 23.82 17.3C23.76 18.02 23.63 18.64 23.34 19.21C22.88 20.13 22.13 20.88 21.21 21.34C20.64 21.63 20.02 21.76 19.3 21.82C18.59 21.88 17.71 21.88 16.6 21.88H7.4C6.29 21.88 5.41 21.88 4.7 21.82C3.98 21.76 3.36 21.63 2.79 21.34C1.87 20.88 1.12 20.13 0.66 19.21C0.37 18.64 0.24 18.02 0.18 17.3C0.12 16.59 0.13 15.71 0.13 14.6V9.4C0.13 8.29 0.12 7.41 0.18 6.7C0.24 5.98 0.37 5.36 0.66 4.79C1.12 3.87 1.87 3.12 2.79 2.66C3.36 2.37 3.98 2.24 4.7 2.18C5.41 2.12 6.29 2.13 7.4 2.13H16.6ZM7.4 3.88C6.27 3.88 5.47 3.88 4.84 3.93C4.23 3.98 3.86 4.07 3.58 4.22C2.99 4.52 2.52 4.99 2.22 5.58C2.07 5.86 1.98 6.23 1.93 6.84C1.88 7.47 1.88 8.27 1.88 9.4V14.6C1.88 15.73 1.88 16.53 1.93 17.16C1.98 17.77 2.07 18.14 2.22 18.42C2.52 19.01 2.99 19.48 3.58 19.78C3.86 19.93 4.23 20.02 4.84 20.07C5.47 20.12 6.27 20.13 7.4 20.13H16.6C17.73 20.13 18.53 20.12 19.16 20.07C19.77 20.02 20.14 19.93 20.42 19.78C21.01 19.48 21.48 19.01 21.78 18.42C21.93 18.14 22.02 17.77 22.07 17.16C22.12 16.53 22.13 15.73 22.13 14.6V9.4C22.13 8.27 22.12 7.47 22.07 6.84C22.02 6.23 21.93 5.86 21.78 5.58C21.48 4.99 21.01 4.52 20.42 4.22C20.14 4.07 19.77 3.98 19.16 3.93C18.53 3.88 17.73 3.88 16.6 3.88H7.4Z"
    }), C[4] = r, C[5] = a, C[6] = c) : (r = C[4], a = C[5], c = C[6]), C[7] !== e || C[8] !== n || C[9] !== l ? (o = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, l, r, a, c]
    }), C[7] = e, C[8] = n, C[9] = l, C[10] = o) : o = C[10], o
  }
  x._isSVG = !0;
  var y = e.i(646361),
    v = e.i(93061);

  function _(e) {
    let l, a, o, s = (0, i.c)(10),
      {
        label: d,
        url: u,
        connectorDisplayName: h
      } = e;
    s[0] !== h ? (l = {
      eventName: c.HatchClickEvent.CONNECTOR_CONSENT_FOOTER_LINK,
      actionTarget: "connector_consent_footer_link",
      actionType: "click",
      metadata: {
        connector_display_name: h
      }
    }, s[0] = h, s[1] = l) : l = s[1];
    let {
      ref: f,
      onClick: p
    } = (0, r.useTrackedClickRef)(l);
    return s[2] !== d ? (a = n.fbs._("{linkLabel} (opens in a new tab)", [n.fbs._param("linkLabel", d)], {
      hk: "4bxhOS"
    }), s[2] = d, s[3] = a) : a = s[3], s[4] !== d || s[5] !== p || s[6] !== f || s[7] !== a || s[8] !== u ? (o = (0, t.jsx)(C.EctoLink, {
      ref: f,
      href: u,
      target: "_blank",
      color: "link",
      textStyle: "caption-1",
      "aria-label": a,
      onClick: p,
      children: d
    }), s[4] = d, s[5] = p, s[6] = f, s[7] = a, s[8] = u, s[9] = o) : o = s[9], o
  }

  function g(e) {
    let n, r, a = (0, i.c)(7),
      {
        text: c,
        connectorDisplayName: o
      } = e;
    if (a[0] !== o || a[1] !== c) {
      let e, i = function(e) {
        let t, n = [],
          i = /\[([^\]]+)\]\(([^)]+)\)/g,
          l = 0;
        for (; null !== (t = i.exec(e));) {
          t.index > l && n.push({
            type: "text",
            content: e.slice(l, t.index)
          });
          let i = t[1] ?? "",
            r = t[2] ?? "";
          /^https?:\/\//i.test(r) ? n.push({
            type: "link",
            label: i,
            url: r,
            index: t.index
          }) : n.push({
            type: "text",
            content: i
          }), l = t.index + t[0].length
        }
        return l < e.length && n.push({
          type: "text",
          content: e.slice(l)
        }), n
      }(c);
      a[3] !== o ? (e = (e, n) => "text" === e.type ? (0, t.jsx)("span", {
        children: (0, l.replaceLegacyProductBrandNames)(e.content)
      }, n) : (0, t.jsx)(_, {
        label: (0, l.replaceLegacyProductBrandNames)(e.label),
        url: e.url,
        connectorDisplayName: o
      }, `${e.url}-${e.index}`), a[3] = o, a[4] = e) : e = a[4], n = i.map(e), a[0] = o, a[1] = c, a[2] = n
    } else n = a[2];
    return a[5] !== n ? (r = (0, t.jsx)(t.Fragment, {
      children: n
    }), a[5] = n, a[6] = r) : r = a[6], r
  }
  let k = {
    [v.ConsentBulletIcon.UNSPECIFIED]: s.default,
    [v.ConsentBulletIcon.STORAGE]: d,
    [v.ConsentBulletIcon.DATA_TYPES]: f,
    [v.ConsentBulletIcon.CAUTION]: m.default,
    [v.ConsentBulletIcon.INFO]: p
  };

  function j(e) {
    let n, l, r, a, c, C = (0, i.c)(12),
      {
        icon: s,
        title: d,
        children: u
      } = e;
    return C[0] !== s ? (n = (0, t.jsx)("div", {
      className: "text-text-primary mt-0.5 shrink-0",
      children: (0, t.jsx)(y.HatchIcon, {
        icon: s,
        size: 20,
        iconSize: 20
      })
    }), C[0] = s, C[1] = n) : n = C[1], C[2] !== d ? (l = null != d && (0, t.jsx)(o.Text, {
      as: "div",
      variant: "subheadline-medium",
      color: "primary",
      children: d
    }), C[2] = d, C[3] = l) : l = C[3], C[4] !== u ? (r = (0, t.jsx)(o.Text, {
      variant: "subheadline",
      color: "secondary",
      children: u
    }), C[4] = u, C[5] = r) : r = C[5], C[6] !== l || C[7] !== r ? (a = (0, t.jsxs)("div", {
      className: "flex flex-col gap-0.5",
      children: [l, r]
    }), C[6] = l, C[7] = r, C[8] = a) : a = C[8], C[9] !== n || C[10] !== a ? (c = (0, t.jsxs)("div", {
      className: "flex items-start gap-4",
      children: [n, a]
    }), C[9] = n, C[10] = a, C[11] = c) : c = C[11], c
  }

  function b(e) {
    let n, l, r = (0, i.c)(3),
      {
        children: a
      } = e;
    return r[0] === Symbol.for("react.memo_cache_sentinel") ? (n = {
      display: "inline-block",
      lineHeight: "16px"
    }, r[0] = n) : n = r[0], r[1] !== a ? (l = (0, t.jsx)(o.Text, {
      variant: "caption-1",
      color: "secondary",
      className: "[&_a]:!leading-[16px] [&_a_span]:!leading-[16px]",
      style: n,
      children: a
    }), r[1] = a, r[2] = l) : l = r[2], l
  }

  function L(e, n) {
    return (0, t.jsx)(j, {
      icon: k[e.icon] ?? s.default,
      title: null != e.title ? (0, l.replaceLegacyProductBrandNames)(e.title) : void 0,
      children: (0, l.replaceLegacyProductBrandNames)(e.text)
    }, n)
  }
  e.s(["ConnectorConsentContent", 0, function(e) {
    let o, s, d, f, p, m, y, v = (0, i.c)(36),
      {
        displayName: _,
        isCustomConnector: k,
        consentScreen: N
      } = e;
    v[0] !== _ ? (o = {
      eventName: c.HatchClickEvent.CONNECTOR_CONSENT_META_PRIVACY_POLICY_LINK,
      actionTarget: "connector_consent_meta_privacy_policy_link",
      actionType: "click",
      metadata: {
        connector_display_name: _
      }
    }, v[0] = _, v[1] = o) : o = v[1];
    let {
      ref: T,
      onClick: R
    } = (0, r.useTrackedClickRef)(o);
    v[2] !== _ ? (s = {
      eventName: c.HatchClickEvent.CONNECTOR_CONSENT_LEARN_MORE_LINK,
      actionTarget: "connector_consent_learn_more_link",
      actionType: "click",
      metadata: {
        connector_display_name: _
      }
    }, v[2] = _, v[3] = s) : s = v[3];
    let {
      ref: S,
      onClick: E
    } = (0, r.useTrackedClickRef)(s);
    v[4] !== S || v[5] !== E || v[6] !== R || v[7] !== T ? (d = (0, t.jsx)(b, {
      children: n.fbt._("The info used for your tasks is part of your interactions with AI. The {metaPrivacyPolicyLink} explains how we use this info, including to improve AI at Meta. {learnMoreLink}", [n.fbt._param("metaPrivacyPolicyLink", (0, t.jsx)(C.EctoLink, {
        ref: T,
        href: a.TermsOfServiceLinks.PRIVACY_POLICY,
        target: "_blank",
        color: "link",
        textStyle: "caption-1",
        onClick: R,
        children: n.fbt._("Privacy Policy", null, {
          hk: "1wPXHI"
        })
      })), n.fbt._param("learnMoreLink", (0, t.jsx)(C.EctoLink, {
        ref: S,
        href: a.TermsOfServiceLinks.LEARN_MORE_ABOUT_PRIVACY_POLICY,
        target: "_blank",
        color: "link",
        textStyle: "caption-1",
        onClick: E,
        children: n.fbt._("Learn more", null, {
          hk: "1GGiI4"
        })
      }))], {
        hk: "2K7xTw"
      })
    }), v[4] = S, v[5] = E, v[6] = R, v[7] = T, v[8] = d) : d = v[8];
    let M = d;
    if (void 0 !== k && k) {
      let e, i, r, a, c, o;
      return v[9] !== _ ? (e = (0, t.jsx)(j, {
        icon: u,
        children: n.fbt._("{productFullName} may exchange information with {serviceName}.", [n.fbt._param("productFullName", l.PRODUCT_BRAND.fullName), n.fbt._param("serviceName", _)], {
          hk: "2xwkfi"
        })
      }), v[9] = _, v[10] = e) : e = v[10], v[11] !== _ ? (i = (0, t.jsx)(j, {
        icon: h.default,
        children: n.fbt._("You can disconnect from {serviceName} any time in Settings.", [n.fbt._param("serviceName", _)], {
          hk: "P1K3T"
        })
      }), v[11] = _, v[12] = i) : i = v[12], v[13] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)(j, {
        icon: x,
        children: n.fbt._("Meta doesn't review custom connectors or how they use your information. The agent may take unexpected actions. Grant access with caution and review their privacy policies.", null, {
          hk: "XbkH"
        })
      }), v[13] = r) : r = v[13], v[14] !== e || v[15] !== i ? (a = (0, t.jsxs)("div", {
        className: "mb-7 flex flex-col gap-4",
        children: [e, i, r]
      }), v[14] = e, v[15] = i, v[16] = a) : a = v[16], v[17] !== M ? (c = (0, t.jsx)("div", {
        className: "-mx-4 flex flex-col gap-2 px-3",
        children: M
      }), v[17] = M, v[18] = c) : c = v[18], v[19] !== a || v[20] !== c ? (o = (0, t.jsxs)(t.Fragment, {
        children: [a, c]
      }), v[19] = a, v[20] = c, v[21] = o) : o = v[21], o
    }
    if (null == N) {
      let e;
      return v[22] !== M ? (e = (0, t.jsx)("div", {
        className: "-mx-4 flex flex-col gap-2 px-3",
        children: M
      }), v[22] = M, v[23] = e) : e = v[23], e
    }
    if (v[24] !== N.bullets ? (f = N.bullets.length > 0 && (0, t.jsx)("div", {
        className: "mb-7 flex flex-col gap-4",
        children: N.bullets.map(L)
      }), v[24] = N.bullets, v[25] = f) : f = v[25], v[26] !== N.footer_paragraphs || v[27] !== _) {
      let e;
      v[29] !== _ ? (e = (e, n) => (0, t.jsx)(b, {
        children: (0, t.jsx)(g, {
          text: e,
          connectorDisplayName: _
        })
      }, n), v[29] = _, v[30] = e) : e = v[30], p = N.footer_paragraphs.map(e), v[26] = N.footer_paragraphs, v[27] = _, v[28] = p
    } else p = v[28];
    return v[31] !== p ? (m = (0, t.jsx)("div", {
      className: "-mx-4 flex flex-col gap-2 px-3",
      children: p
    }), v[31] = p, v[32] = m) : m = v[32], v[33] !== f || v[34] !== m ? (y = (0, t.jsxs)(t.Fragment, {
      children: [f, m]
    }), v[33] = f, v[34] = m, v[35] = y) : y = v[35], y
  }], 305646)
}, 8229, e => {
  "use strict";
  var t = e.i(790170);
  let n = "custom.",
    i = {
      all: ["dynamic-credentials"],
      list: e => [...i.all, "list", e]
    },
    l = (0, t.createGatewayQuery)({
      id: "dynamicCredentials.list",
      queryKey: ({
        gatewayUrl: e
      }) => i.list(e),
      noiseFn: async e => (function(e) {
        if ("object" != typeof e || null == e) return [];
        let t = e.credentials;
        return Array.isArray(t) ? t.map(e => {
          if ("object" != typeof e || null == e) return null;
          let t = e.name,
            n = e.domains;
          if ("string" != typeof t || 0 === t.trim().length) return null;
          let i = t.trim();
          return a(i) ? {
            name: i,
            domains: Array.isArray(n) ? n.filter(e => "string" == typeof e) : []
          } : null
        }).filter(e => null != e).sort((e, t) => e.name.localeCompare(t.name)) : []
      })(await e.sendRequest("credentials.list", {})),
      invalidationKey: () => i.all,
      staleTime: 3e4
    });
  async function r(e, t) {
    await t("credentials.register", e)
  }

  function a(e) {
    return e.trim().toLowerCase().startsWith(n)
  }
  e.s(["customDynamicCredentialDisplayName", 0, function(e) {
    let t = e.trim();
    return a(t) ? t.slice(n.length) : t
  }, "dynamicCredentialsListQuery", 0, l, "isCustomDynamicCredentialName", 0, a, "registerDynamicCredential", 0, r])
}, 414809, (e, t, n) => {
  "use strict";
  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var i = {
    default: function() {
      return x
    },
    useLinkStatus: function() {
      return v
    }
  };
  for (var l in i) Object.defineProperty(n, l, {
    enumerable: !0,
    get: i[l]
  });
  let r = e.r(56421),
    a = e.r(984416),
    c = r._(e.r(519172)),
    o = e.r(634516),
    C = e.r(48660),
    s = e.r(705780),
    d = e.r(196978),
    u = e.r(963843),
    h = e.r(292915),
    f = e.r(657800),
    p = e.r(112213),
    m = e.r(844566);

  function x(t) {
    var n;
    let i, l, r, [x, v] = (0, c.useOptimistic)(f.IDLE_LINK_STATUS),
      _ = (0, c.useRef)(null),
      {
        href: g,
        as: k,
        children: j,
        prefetch: b = null,
        passHref: L,
        replace: N,
        shallow: T,
        scroll: R,
        onClick: S,
        onMouseEnter: E,
        onTouchStart: M,
        legacyBehavior: w = !1,
        onNavigate: H,
        transitionTypes: P,
        ref: A,
        unstable_dynamicOnHover: O,
        ...I
      } = t;
    i = j, w && ("string" == typeof i || "number" == typeof i) && (i = (0, a.jsx)("a", {
      children: i
    }));
    let V = c.default.useContext(C.AppRouterContext),
      B = !1 !== b,
      Z = !1 === b ? "none" : !0 === b ? "full" : "auto",
      D = "none" !== Z ? "auto" === Z ? m.FetchStrategy.PPR : m.FetchStrategy.Full : m.FetchStrategy.PPR,
      K = "string" == typeof(n = k || g) ? n : (0, o.formatUrl)(n);
    if (w) {
      if (i?.$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
        value: "E863",
        enumerable: !1,
        configurable: !0
      });
      l = c.default.Children.only(i)
    }
    let F = w ? l && "object" == typeof l && l.ref : A,
      z, U = c.default.useCallback(e => (null !== V && (_.current = (0, f.mountLinkInstance)(e, K, V, D, B, v, z)), () => {
        _.current && ((0, f.unmountLinkForCurrentNavigation)(_.current), _.current = null), (0, f.unmountPrefetchableInstance)(e)
      }), [B, K, V, D, v, z]),
      G = {
        ref: (0, s.useMergedRef)(U, F),
        onClick(t) {
          w || "function" != typeof S || S(t), w && l.props && "function" == typeof l.props.onClick && l.props.onClick(t), !V || t.defaultPrevented || function(t, n, i, l, r, a, o, C = "none") {
            if ("u" > typeof window) {
              let s, {
                nodeName: d
              } = t.currentTarget;
              if ("A" === d.toUpperCase() && ((s = t.currentTarget.getAttribute("target")) && "_self" !== s || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
              if (!(0, p.isLocalURL)(n)) {
                l && (t.preventDefault(), location.replace(n));
                return
              }
              if (t.preventDefault(), a) {
                let e = !1;
                if (a({
                    preventDefault: () => {
                      e = !0
                    }
                  }), e) return
              }
              let {
                dispatchNavigateAction: u
              } = e.r(694297);
              c.default.startTransition(() => {
                u(n, l ? "replace" : "push", !1 === r ? h.ScrollBehavior.NoScroll : h.ScrollBehavior.Default, i.current, o, C)
              })
            }
          }(t, K, _, N, R, H, P, Z)
        },
        onMouseEnter(e) {
          w || "function" != typeof E || E(e), w && l.props && "function" == typeof l.props.onMouseEnter && l.props.onMouseEnter(e), V && B && (0, f.onNavigationIntent)(e.currentTarget, !0 === O)
        },
        onTouchStart: function(e) {
          w || "function" != typeof M || M(e), w && l.props && "function" == typeof l.props.onTouchStart && l.props.onTouchStart(e), V && B && (0, f.onNavigationIntent)(e.currentTarget, !0 === O)
        }
      };
    return (0, d.isAbsoluteUrl)(K) ? G.href = K : w && !L && ("a" !== l.type || "href" in l.props) || (G.href = (0, u.addBasePath)(K)), r = w ? c.default.cloneElement(l, G) : (0, a.jsx)("a", {
      ...I,
      ...G,
      children: i
    }), (0, a.jsx)(y.Provider, {
      value: x,
      children: r
    })
  }
  let y = (0, c.createContext)(f.IDLE_LINK_STATUS),
    v = () => (0, c.useContext)(y);
  ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
  }), Object.assign(n.default, n), t.exports = n.default)
}, 756710, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function i(e) {
    let i, l, r, a, c, o = (0, n.c)(10);
    return o[0] !== e.title ? (i = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), o[0] = e.title, o[1] = i) : i = o[1], o[2] !== e.children ? (l = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), o[2] = e.children, o[3] = l) : l = o[3], o[4] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM12 10.5C11.17 10.5 10.5 11.17 10.5 12C10.5 12.83 11.17 13.5 12 13.5C12.83 13.5 13.5 12.83 13.5 12C13.5 11.17 12.83 10.5 12 10.5Z"
    }), a = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 3.42C12.19 3.42 12.38 3.43 12.56 3.44C12.6 3.44 12.64 3.44 12.68 3.44C12.85 3.45 13.02 3.46 13.19 3.48C13.24 3.48 13.28 3.49 13.32 3.49C13.45 3.51 13.58 3.52 13.71 3.54C13.76 3.55 13.82 3.55 13.88 3.56C14.03 3.59 14.17 3.61 14.31 3.64C14.37 3.65 14.43 3.66 14.49 3.67C14.6 3.69 14.72 3.72 14.84 3.75C14.88 3.76 14.92 3.77 14.96 3.78C15.1 3.81 15.23 3.85 15.36 3.88C15.45 3.91 15.53 3.93 15.61 3.96C15.64 3.97 15.68 3.98 15.72 3.99C15.88 4.04 16.04 4.1 16.19 4.15C16.23 4.17 16.28 4.19 16.32 4.2C16.4 4.23 16.48 4.27 16.56 4.3C16.6 4.31 16.63 4.33 16.67 4.34C16.83 4.41 16.99 4.48 17.15 4.56C17.17 4.57 17.19 4.57 17.21 4.58C17.48 4.71 17.74 4.85 18 5C18.02 5.01 18.03 5.02 18.05 5.03C18.17 5.1 18.3 5.18 18.42 5.25C18.46 5.28 18.51 5.31 18.56 5.34C18.89 5.56 19.2 5.78 19.5 6.02C19.51 6.03 19.53 6.04 19.54 6.05C19.67 6.15 19.8 6.26 19.92 6.36C19.94 6.38 19.97 6.4 19.99 6.42C20.11 6.52 20.22 6.63 20.33 6.73C20.35 6.75 20.37 6.76 20.39 6.78C20.49 6.88 20.59 6.98 20.69 7.08C20.76 7.14 20.83 7.21 20.89 7.28C20.95 7.34 21.01 7.4 21.07 7.47C21.09 7.49 21.11 7.5 21.12 7.52C21.16 7.56 21.19 7.6 21.22 7.63C21.27 7.69 21.32 7.75 21.37 7.8C21.43 7.87 21.48 7.93 21.54 7.99C21.58 8.04 21.62 8.09 21.65 8.13C21.93 8.47 22.18 8.8 22.4 9.12C22.43 9.16 22.46 9.2 22.49 9.24C22.58 9.38 22.68 9.52 22.76 9.65C22.8 9.71 22.83 9.76 22.86 9.82C22.93 9.93 23 10.04 23.06 10.14C23.08 10.18 23.1 10.21 23.13 10.25C23.14 10.27 23.15 10.29 23.16 10.3C23.17 10.33 23.19 10.36 23.21 10.39C23.25 10.47 23.3 10.55 23.34 10.63C23.35 10.65 23.36 10.67 23.37 10.7C23.48 10.91 23.58 11.09 23.64 11.23C23.7 11.34 23.74 11.43 23.77 11.5C23.78 11.53 23.79 11.55 23.8 11.57C23.8 11.58 23.81 11.59 23.81 11.59C23.81 11.6 23.81 11.6 23.81 11.6L23.81 11.61C23.81 11.61 23.79 11.61 23.66 11.67L23.81 11.61C23.9 11.81 23.9 12.05 23.81 12.25L23.81 12.25L23.81 12.26C23.81 12.26 23.81 12.26 23.81 12.26C23.81 12.27 23.8 12.28 23.8 12.29C23.79 12.3 23.78 12.33 23.77 12.36C23.74 12.43 23.7 12.52 23.65 12.63C23.58 12.78 23.49 12.97 23.37 13.18C23.36 13.2 23.36 13.22 23.35 13.23C23.32 13.29 23.28 13.35 23.24 13.42C23.22 13.47 23.19 13.52 23.16 13.58C22.98 13.9 22.75 14.27 22.48 14.66C22.46 14.7 22.43 14.74 22.41 14.78C22.37 14.83 22.34 14.88 22.3 14.93C22.27 14.97 22.25 15.01 22.22 15.04C22.18 15.1 22.13 15.17 22.09 15.23C22 15.35 21.91 15.47 21.81 15.59C21.77 15.64 21.73 15.69 21.7 15.73C21.64 15.8 21.58 15.87 21.53 15.94C21.48 15.99 21.44 16.05 21.39 16.1C21.34 16.16 21.29 16.21 21.24 16.27C21.21 16.31 21.17 16.36 21.13 16.4C21.12 16.42 21.1 16.43 21.09 16.44C20.87 16.68 20.64 16.91 20.4 17.15C20.37 17.17 20.34 17.2 20.32 17.23C20.22 17.32 20.12 17.41 20.01 17.5C19.98 17.53 19.95 17.56 19.91 17.59C19.79 17.7 19.67 17.8 19.54 17.91C19.53 17.91 19.52 17.92 19.51 17.93C19.21 18.17 18.89 18.4 18.56 18.62C18.56 18.63 18.55 18.63 18.55 18.63C18.39 18.74 18.22 18.84 18.05 18.94C18.04 18.95 18.02 18.96 18 18.97C17.93 19.01 17.85 19.06 17.76 19.11C17.73 19.12 17.7 19.14 17.67 19.15C17.52 19.24 17.37 19.32 17.21 19.39C17.19 19.4 17.18 19.41 17.16 19.42C16.89 19.55 16.62 19.67 16.34 19.78C16.28 19.8 16.23 19.82 16.17 19.84C16.03 19.89 15.89 19.94 15.74 19.99C15.7 20 15.66 20.02 15.62 20.03C15.53 20.06 15.44 20.09 15.34 20.11C15.28 20.13 15.21 20.15 15.14 20.17C15.03 20.2 14.91 20.23 14.8 20.25C14.69 20.28 14.59 20.3 14.48 20.33C14.43 20.33 14.39 20.34 14.34 20.35C14.18 20.38 14.02 20.41 13.86 20.44C13.82 20.44 13.79 20.45 13.75 20.45C13.6 20.47 13.44 20.49 13.29 20.51C13.26 20.51 13.24 20.51 13.21 20.52C13.04 20.53 12.86 20.55 12.68 20.56C12.6 20.56 12.51 20.56 12.43 20.57C12.41 20.57 12.4 20.57 12.39 20.57C12.26 20.57 12.13 20.58 12 20.58L11.68 20.57C11.66 20.57 11.64 20.57 11.61 20.57C11.6 20.57 11.59 20.57 11.57 20.57C11.49 20.56 11.4 20.56 11.32 20.56C11.14 20.55 10.96 20.53 10.79 20.52C10.76 20.51 10.74 20.51 10.71 20.51C10.56 20.49 10.4 20.47 10.25 20.45C10.21 20.45 10.18 20.44 10.14 20.44C9.98 20.41 9.82 20.38 9.66 20.35C9.61 20.34 9.57 20.33 9.52 20.33C9.42 20.3 9.31 20.28 9.21 20.26C9.08 20.23 8.96 20.2 8.84 20.16C8.78 20.15 8.72 20.13 8.66 20.11C8.56 20.09 8.47 20.06 8.38 20.03C8.34 20.02 8.3 20 8.26 19.99C8.11 19.94 7.96 19.89 7.82 19.84C7.77 19.82 7.72 19.8 7.67 19.78C7.07 19.55 6.52 19.27 6 18.97C5.98 18.96 5.95 18.94 5.92 18.93C5.79 18.85 5.66 18.77 5.54 18.69C5.5 18.66 5.46 18.64 5.43 18.61C5.1 18.4 4.79 18.17 4.5 17.94C4.48 17.92 4.45 17.9 4.43 17.88C4.31 17.79 4.2 17.69 4.09 17.59C4.05 17.56 4.02 17.53 3.99 17.51C3.88 17.41 3.77 17.31 3.67 17.22C3.65 17.19 3.62 17.17 3.6 17.15C3.36 16.92 3.14 16.69 2.93 16.46C2.91 16.44 2.89 16.42 2.87 16.4C2.83 16.35 2.78 16.3 2.74 16.25C2.7 16.2 2.65 16.15 2.61 16.1C2.57 16.05 2.52 16 2.48 15.95C2.41 15.87 2.35 15.79 2.29 15.72C2.25 15.67 2.21 15.62 2.17 15.57C2.1 15.48 2.04 15.4 1.97 15.31C1.91 15.22 1.84 15.13 1.78 15.04C1.75 15.01 1.73 14.97 1.7 14.93C1.66 14.88 1.63 14.83 1.59 14.78C1.56 14.73 1.53 14.69 1.5 14.64C1.24 14.26 1.02 13.89 0.84 13.58C0.81 13.52 0.78 13.47 0.75 13.42C0.72 13.35 0.68 13.29 0.65 13.23C0.64 13.22 0.63 13.2 0.63 13.18C0.51 12.97 0.42 12.78 0.35 12.63C0.3 12.52 0.26 12.43 0.23 12.36C0.22 12.33 0.21 12.3 0.2 12.29C0.2 12.28 0.19 12.27 0.19 12.26C0.19 12.26 0.19 12.26 0.19 12.26L0.19 12.25L0.19 12.25C0.1 12.05 0.1 11.81 0.19 11.61L0.34 11.67V11.67C0.21 11.61 0.19 11.61 0.19 11.6L0.19 11.6C0.19 11.6 0.19 11.6 0.19 11.59C0.19 11.59 0.2 11.58 0.2 11.57C0.21 11.55 0.22 11.53 0.23 11.5C0.26 11.43 0.3 11.34 0.36 11.23C0.42 11.09 0.51 10.92 0.62 10.71C0.63 10.68 0.65 10.65 0.66 10.63C0.7 10.55 0.75 10.47 0.8 10.38C0.81 10.36 0.83 10.33 0.84 10.3C0.85 10.29 0.86 10.27 0.87 10.25C0.89 10.22 0.91 10.18 0.94 10.14C1.1 9.87 1.29 9.57 1.51 9.25C1.55 9.19 1.59 9.13 1.63 9.08C1.65 9.04 1.68 9 1.71 8.96C1.77 8.88 1.83 8.8 1.89 8.72C1.91 8.69 1.93 8.66 1.95 8.63C2.02 8.54 2.09 8.45 2.17 8.36C2.24 8.27 2.31 8.18 2.38 8.09C2.41 8.06 2.43 8.03 2.46 8C2.51 7.94 2.56 7.88 2.61 7.82C2.67 7.75 2.73 7.69 2.79 7.62C2.82 7.59 2.85 7.56 2.88 7.52C2.89 7.5 2.91 7.49 2.93 7.47C2.99 7.4 3.05 7.34 3.11 7.28C3.17 7.21 3.24 7.14 3.31 7.08C3.41 6.98 3.51 6.88 3.61 6.78C3.63 6.76 3.65 6.75 3.67 6.73C3.78 6.63 3.89 6.53 4 6.43C4.03 6.4 4.06 6.38 4.1 6.35C4.21 6.25 4.33 6.15 4.45 6.05C4.47 6.04 4.49 6.03 4.5 6.01C4.8 5.78 5.11 5.56 5.44 5.34C5.49 5.31 5.54 5.28 5.58 5.25C5.7 5.18 5.83 5.1 5.95 5.03C5.97 5.02 5.98 5.01 6 5C6.25 4.86 6.51 4.72 6.78 4.59C6.79 4.58 6.81 4.58 6.82 4.57L7.06 4.46C7.26 4.37 7.47 4.28 7.68 4.2C7.72 4.19 7.76 4.17 7.8 4.16C7.96 4.1 8.12 4.04 8.29 3.99C8.32 3.98 8.36 3.97 8.39 3.96C8.47 3.93 8.55 3.91 8.63 3.88C8.77 3.85 8.9 3.81 9.04 3.78C9.08 3.77 9.12 3.76 9.16 3.75C9.28 3.72 9.4 3.69 9.52 3.67C9.57 3.66 9.63 3.65 9.68 3.64C9.83 3.61 9.97 3.59 10.12 3.56C10.18 3.55 10.24 3.55 10.29 3.54C10.42 3.52 10.55 3.51 10.67 3.49C10.72 3.49 10.76 3.48 10.81 3.48C10.94 3.47 11.08 3.46 11.21 3.45L11.38 3.44C11.4 3.44 11.42 3.44 11.44 3.44C11.62 3.43 11.81 3.42 12 3.42ZM12 5.17C11.45 5.17 10.93 5.21 10.43 5.29C9.96 5.36 9.5 5.46 9.06 5.58C9.05 5.59 9.05 5.59 9.04 5.59C8.34 5.8 7.7 6.07 7.11 6.39C6.76 6.58 6.42 6.79 6.11 7C6.04 7.05 5.98 7.1 5.91 7.14C5.25 7.63 4.66 8.17 4.16 8.71C3.35 9.59 2.76 10.48 2.38 11.15C2.36 11.18 2.35 11.2 2.33 11.23C2.28 11.32 2.23 11.4 2.19 11.49C2.04 11.77 2.04 12.1 2.19 12.39C2.22 12.45 2.26 12.52 2.29 12.59C2.33 12.64 2.36 12.7 2.39 12.76C2.77 13.43 3.35 14.32 4.15 15.21C4.16 15.22 4.17 15.23 4.18 15.24C4.67 15.78 5.23 16.31 5.88 16.79C5.96 16.85 6.05 16.91 6.13 16.98C6.44 17.19 6.77 17.4 7.12 17.59C7.95 18.05 8.9 18.42 9.96 18.63C10.6 18.75 11.28 18.83 12 18.83C12.73 18.83 13.41 18.75 14.04 18.63C15.1 18.42 16.04 18.05 16.87 17.59C17.21 17.41 17.52 17.21 17.82 17.01C17.95 16.92 18.07 16.83 18.19 16.74C18.81 16.27 19.36 15.75 19.83 15.23C20.64 14.34 21.22 13.44 21.61 12.76C21.64 12.7 21.67 12.64 21.7 12.59C21.74 12.52 21.78 12.45 21.81 12.39C21.96 12.1 21.96 11.78 21.81 11.49C21.77 11.41 21.72 11.32 21.67 11.23C21.65 11.2 21.64 11.18 21.62 11.15C21.24 10.48 20.65 9.59 19.84 8.71C19.34 8.17 18.76 7.63 18.09 7.14C18.03 7.1 17.97 7.06 17.92 7.02C17.6 6.8 17.27 6.6 16.92 6.4C16.32 6.08 15.67 5.8 14.96 5.59C14.95 5.59 14.94 5.59 14.94 5.58C14.5 5.46 14.04 5.36 13.56 5.29C13.22 5.24 12.87 5.2 12.5 5.19C12.34 5.18 12.17 5.17 12 5.17Z"
    }), o[4] = r, o[5] = a) : (r = o[4], a = o[5]), o[6] !== e || o[7] !== i || o[8] !== l ? (c = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [i, l, r, a]
    }), o[6] = e, o[7] = i, o[8] = l, o[9] = c) : c = o[9], c
  }
  i._isSVG = !0, e.s(["default", 0, i])
}]);

//# debugId=cc837512-434a-4ea2-ad0b-f5f5c6c75ba8
//# sourceMappingURL=036ysdnilvif9.js.map