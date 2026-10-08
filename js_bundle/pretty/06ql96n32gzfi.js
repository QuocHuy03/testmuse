;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "f8d37f9b-e1da-bd05-81e0-14ef32f9c047")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 637740, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    a = e.i(345717),
    i = e.i(325814),
    s = e.i(239286);
  e.s(["LoadingDialog", 0, function(e) {
    let r, l, c, o, d = (0, n.c)(7),
      {
        isOpen: u,
        onCancel: h
      } = e;
    return d[0] !== h ? (r = e => !e && h(), d[0] = h, d[1] = r) : r = d[1], d[2] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)(i.DialogHeader, {
      className: "sr-only",
      children: (0, t.jsx)(i.DialogTitle, {
        children: a.fbs._("Loading", null, {
          hk: "3PHqSk"
        })
      })
    }), d[2] = l) : l = d[2], d[3] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, t.jsx)(i.DialogContent, {
      showCloseButton: !1,
      header: l,
      children: (0, t.jsx)("div", {
        className: "flex min-h-[160px] items-center justify-center pt-6",
        children: (0, t.jsx)(s.Spinner, {
          size: 48
        })
      })
    }), d[3] = c) : c = d[3], d[4] !== u || d[5] !== r ? (o = (0, t.jsx)(i.Dialog, {
      open: u,
      onOpenChange: r,
      children: c
    }), d[4] = u, d[5] = r, d[6] = o) : o = d[6], o
  }])
}, 696681, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(345717),
    a = e.i(722099),
    i = e.i(255859),
    s = e.i(848048),
    r = e.i(325814),
    l = e.i(430116),
    c = e.i(420297),
    o = e.i(823173),
    d = e.i(281539),
    u = e.i(957778);
  e.s(["AccountsCenterLinkModal", 0, function(e) {
    let h, m, f, p, g, C, _, x, b, y, N, k = (0, a.c)(21),
      {
        isOpen: v,
        onClose: j
      } = e,
      T = (0, u.useOpenAccountsCenterLinkFlow)();
    k[0] === Symbol.for("react.memo_cache_sentinel") ? (h = {
      eventName: o.HatchImpressionEvent.ACCOUNT_CENTER_LINK_MODAL_IMPRESSION,
      actionTarget: "account_center_link_modal"
    }, k[0] = h) : h = k[0];
    let {
      ref: S
    } = (0, s.useTrackedImpressionRef)(h);
    k[1] === Symbol.for("react.memo_cache_sentinel") ? (m = {
      eventName: d.HatchClickEvent.ACCOUNT_CENTER_LINK_OPEN_CLICK,
      actionTarget: "account_center_link_open_button",
      actionType: "click"
    }, k[1] = m) : m = k[1];
    let {
      ref: R,
      onClick: E
    } = (0, s.useTrackedClickRef)(m);
    return k[2] !== j ? (f = e => !e && j(), k[2] = j, k[3] = f) : f = k[3], k[4] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, t.jsx)(r.DialogTitle, {
      className: "sr-only",
      children: n.fbt._("Allow {productShortName} to access Facebook in Accounts Center", [n.fbt._param("productShortName", i.PRODUCT_BRAND.shortName)], {
        hk: "1UTxoD"
      })
    }), k[4] = p) : p = k[4], k[5] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, t.jsx)(l.Text, {
      variant: "title-2-emphasized",
      className: "text-center",
      children: n.fbt._("Allow {productShortName} to access Facebook in Accounts Center", [n.fbt._param("productShortName", i.PRODUCT_BRAND.shortName)], {
        hk: "4mIiV7"
      })
    }), k[5] = g) : g = k[5], k[6] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, t.jsx)(l.Text, {
      variant: "body",
      color: "secondary",
      className: "text-center",
      children: n.fbt._("You'll need to add your Facebook account to give {productShortName} access to your info.", [n.fbt._param("productShortName", i.PRODUCT_BRAND.shortName)], {
        hk: "unUiQ"
      })
    }), k[6] = C) : C = k[6], k[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = n.fbs._("Go to Accounts Center", null, {
      hk: "27Cyl"
    }), k[7] = _) : _ = k[7], k[8] !== E || k[9] !== T ? (x = () => {
      E(), T()
    }, k[8] = E, k[9] = T, k[10] = x) : x = k[10], k[11] !== R || k[12] !== x ? (b = (0, t.jsx)(c.Button, {
      ref: R,
      variant: "primary",
      size: "36",
      fullWidth: !0,
      label: _,
      onClick: x
    }), k[11] = R, k[12] = x, k[13] = b) : b = k[13], k[14] !== S || k[15] !== b ? (y = (0, t.jsxs)(r.DialogContent, {
      showCloseButton: !0,
      children: [p, (0, t.jsxs)("div", {
        ref: S,
        className: "flex flex-col items-center gap-4",
        children: [g, C, b]
      })]
    }), k[14] = S, k[15] = b, k[16] = y) : y = k[16], k[17] !== v || k[18] !== y || k[19] !== f ? (N = (0, t.jsx)(r.Dialog, {
      open: v,
      onOpenChange: f,
      children: y
    }), k[17] = v, k[18] = y, k[19] = f, k[20] = N) : N = k[20], N
  }])
}, 719197, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(345717),
    a = e.i(722099),
    i = e.i(430116),
    s = e.i(590328),
    r = e.i(176048),
    l = e.i(374785);

  function c(e) {
    let n, i = (0, a.c)(2),
      {
        className: s
      } = e;
    return i[0] !== s ? (n = (0, t.jsx)("img", {
      src: "/images/skills/facebook_round.png",
      alt: "",
      className: s
    }), i[0] = s, i[1] = n) : n = i[1], n
  }

  function o(e) {
    let n, i, s, r, c, o = (0, a.c)(7),
      {
        className: d
      } = e;
    return o[0] !== d ? (n = (0, l.cn)("relative rounded-full bg-white dark:bg-[#1B1B1B]", d), o[0] = d, o[1] = n) : n = o[1], o[2] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("img", {
      src: "/images/skills/facebook_badge_light.png",
      alt: "",
      className: "size-full dark:hidden"
    }), s = (0, t.jsx)("img", {
      src: "/images/skills/facebook_badge_dark.png",
      alt: "",
      className: "hidden size-full dark:block"
    }), r = (0, t.jsx)("div", {
      className: "dark:ring-fill-secondary absolute inset-0 rounded-full ring-2 ring-white"
    }), o[2] = i, o[3] = s, o[4] = r) : (i = o[2], s = o[3], r = o[4]), o[5] !== n ? (c = (0, t.jsxs)("div", {
      className: n,
      children: [i, s, r]
    }), o[5] = n, o[6] = c) : c = o[6], c
  }
  let d = {
    40: "size-10",
    48: "size-12"
  };
  e.s(["FacebookIdentityCard", 0, function(e) {
    let u, h, m, f, p, g, C, _ = (0, a.c)(22),
      {
        name: x,
        profilePicUrl: b,
        avatarSize: y,
        fallbackInitial: N,
        showBadge: k,
        className: v,
        textClassName: j,
        textTitle: T
      } = e,
      S = void 0 === k || k,
      R = d[void 0 === y ? "48" : y];
    return _[0] !== v ? (u = (0, l.cn)("flex items-center gap-3 p-2", v), _[0] = v, _[1] = u) : u = _[1], _[2] !== R ? (h = (0, l.cn)("relative shrink-0", R), _[2] = R, _[3] = h) : h = _[3], _[4] !== R || _[5] !== N || _[6] !== b || _[7] !== S ? (m = null != b ? (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(r.EctoGracefulImage, {
        src: b,
        alt: "",
        className: (0, l.cn)(R, "rounded-full")
      }), S && (0, t.jsx)(o, {
        className: "absolute -end-0.5 -bottom-0.5 size-5"
      })]
    }) : null != N ? (0, t.jsx)("div", {
      className: (0, l.cn)("bg-fill-tertiary flex items-center justify-center rounded-full", R),
      children: (0, t.jsx)("span", {
        "aria-hidden": "true",
        className: "text-subheadline-emphasized text-text-secondary",
        children: N.charAt(0).toUpperCase()
      })
    }) : (0, t.jsx)(c, {
      className: R
    }), _[4] = R, _[5] = N, _[6] = b, _[7] = S, _[8] = m) : m = _[8], _[9] !== h || _[10] !== m ? (f = (0, t.jsx)("div", {
      "aria-hidden": "true",
      className: h,
      children: m
    }), _[9] = h, _[10] = m, _[11] = f) : f = _[11], _[12] !== x ? (p = x ?? n.fbt._("Facebook Account", null, {
      hk: "1QB9Yx"
    }), _[12] = x, _[13] = p) : p = _[13], _[14] !== p || _[15] !== j || _[16] !== T ? (g = (0, t.jsx)(s.Flexbox, {
      direction: "column",
      gap: 0,
      className: "min-w-0 flex-1",
      children: (0, t.jsx)(i.Text, {
        variant: "subheadline-emphasized",
        color: "primary",
        className: j,
        title: T,
        children: p
      })
    }), _[14] = p, _[15] = j, _[16] = T, _[17] = g) : g = _[17], _[18] !== u || _[19] !== f || _[20] !== g ? (C = (0, t.jsxs)("div", {
      className: u,
      children: [f, g]
    }), _[18] = u, _[19] = f, _[20] = g, _[21] = C) : C = _[21], C
  }], 719197)
}, 502538, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(345717),
    a = e.i(722099),
    i = e.i(123601),
    s = e.i(325814),
    r = e.i(430116),
    l = e.i(848048),
    c = e.i(823173),
    o = e.i(44743),
    d = e.i(370911),
    u = e.i(432964),
    h = e.i(813280),
    m = e.i(465376),
    f = e.i(46735),
    p = e.i(870228),
    g = e.i(188202),
    C = e.i(863641);
  let _ = {
    dropbox: u.default,
    "google-drive": o.default,
    "apple-calendar": d.default,
    "google-calendar": d.default
  };

  function x(e) {
    let {
      error: n,
      reset: a
    } = e;
    return (0, t.jsx)(p.HatchContentErrorFallback, {
      error: n,
      onRetry: a
    })
  }
  e.s(["HatchApiKeyDialog", 0, function(e) {
    let o, d, u, p, b, y, N, k, v, j, T, S, R, E = (0, a.c)(43),
      {
        isOpen: I,
        serviceName: w,
        iconUrl: A,
        dynamicSpec: P,
        apiKeySpec: M,
        isCustomConnector: D,
        onClose: L,
        sessionId: O
      } = e,
      F = void 0 !== D && D;
    E[0] !== w ? (o = {
      third_party_connector_type: w
    }, E[0] = w, E[1] = o) : o = E[1], E[2] !== w || E[3] !== o ? (d = {
      eventName: c.HatchImpressionEvent.API_KEY_DIALOG_IMPRESSION,
      actionTarget: "api_key_dialog",
      thirdPartyConnectorType: w,
      metadata: o
    }, E[2] = w, E[3] = o, E[4] = d) : d = E[4];
    let z = d,
      {
        ref: H
      } = (0, l.useTrackedImpressionRef)(z),
      B = _[w] ?? null;
    E[5] !== w ? (u = (0, g.titleCase)(w), E[5] = w, E[6] = u) : u = E[6];
    let K = u;
    return E[7] !== L ? (p = e => !e && L(), E[7] = L, E[8] = p) : p = E[8], E[9] !== K || E[10] !== F ? (b = (0, t.jsx)(s.DialogTitle, {
      children: F ? n.fbt._("Add custom connector", null, {
        hk: "2tBRJx"
      }) : n.fbt._("Connect to {serviceName}", [n.fbt._param("serviceName", K)], {
        hk: "2BApGe"
      })
    }), y = F && (0, t.jsx)(s.DialogDescription, {
      children: K
    }), E[9] = K, E[10] = F, E[11] = b, E[12] = y) : (b = E[11], y = E[12]), E[13] !== b || E[14] !== y ? (N = (0, t.jsxs)(s.DialogHeader, {
      children: [b, y]
    }), E[13] = b, E[14] = y, E[15] = N) : N = E[15], E[16] !== B || E[17] !== K || E[18] !== A || E[19] !== F ? (k = !F && (0, t.jsxs)("div", {
      className: "flex flex-col items-center gap-3 pb-2",
      children: [null == A && null == B ? (0, t.jsx)("div", {
        className: "rounded-16 flex size-14 items-center justify-center overflow-hidden",
        children: (0, t.jsx)(i.default, {
          src: (0, m.getConnectorIcon)("grid"),
          alt: "",
          width: 56,
          height: 56,
          className: "size-full bg-white object-cover",
          loading: "eager",
          unoptimized: !0
        })
      }) : (0, t.jsx)("div", {
        className: "bg-fill-secondary flex items-center justify-center overflow-hidden rounded-full p-3",
        children: null != A ? (0, t.jsx)("img", {
          src: A,
          alt: "",
          width: 32,
          height: 32,
          className: "rounded-4"
        }) : null != B ? (0, t.jsx)(B, {
          size: 32
        }) : null
      }), (0, t.jsx)(r.Text, {
        variant: "title-3-emphasized",
        children: K
      })]
    }), E[16] = B, E[17] = K, E[18] = A, E[19] = F, E[20] = k) : k = E[20], E[21] !== w ? (v = [w], E[21] = w, E[22] = v) : v = E[22], E[23] !== M || E[24] !== P || E[25] !== F || E[26] !== I || E[27] !== L || E[28] !== w || E[29] !== O ? (j = I && (0, t.jsx)(f.ApiKeyConnectForm, {
      serviceName: w,
      apiKeySpec: M,
      dynamicSpec: P,
      isCustomConnector: F,
      onSuccess: L,
      actionTarget: "api_key_dialog_submit",
      inputTestId: "hatch-api-key-dialog-input",
      sessionId: O
    }, w), E[23] = M, E[24] = P, E[25] = F, E[26] = I, E[27] = L, E[28] = w, E[29] = O, E[30] = j) : j = E[30], E[31] !== v || E[32] !== j ? (T = (0, t.jsx)(h.EctoErrorBoundary, {
      surface: C.HATCH_SENTRY_SURFACES.CONNECT_API_KEY,
      fallback: x,
      resetKeys: v,
      children: j
    }), E[31] = v, E[32] = j, E[33] = T) : T = E[33], E[34] !== H || E[35] !== T || E[36] !== N || E[37] !== k ? (S = (0, t.jsxs)(s.DialogContent, {
      ref: H,
      header: N,
      children: [k, T]
    }), E[34] = H, E[35] = T, E[36] = N, E[37] = k, E[38] = S) : S = E[38], E[39] !== I || E[40] !== S || E[41] !== p ? (R = (0, t.jsx)(s.Dialog, {
      open: I,
      onOpenChange: p,
      children: S
    }), E[39] = I, E[40] = S, E[41] = p, E[42] = R) : R = E[42], R
  }])
}, 355300, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(345717),
    a = e.i(722099),
    i = e.i(255859),
    s = e.i(123601),
    r = e.i(325814),
    l = e.i(420297),
    c = e.i(430116),
    o = e.i(646361),
    d = e.i(374785),
    u = e.i(848048),
    h = e.i(281539),
    m = e.i(823173),
    f = e.i(770256),
    p = e.i(762534),
    g = e.i(44743),
    C = e.i(370911),
    _ = e.i(432964);

  function x(e) {
    let n, i, s, r, l, c, o = (0, a.c)(11);
    return o[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), o[0] = e.title, o[1] = n) : n = o[1], o[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), o[2] = e.children, o[3] = i) : i = o[3], o[4] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 7.207a4.793 4.793 0 1 0 0 9.586 4.793 4.793 0 0 0 0-9.586zm0 7.904a3.111 3.111 0 1 1 0-6.222 3.111 3.111 0 0 1 0 6.222z"
    }), r = (0, t.jsx)("path", {
      d: "M16.982 8.138a1.12 1.12 0 1 0 0-2.24 1.12 1.12 0 0 0 0 2.24z"
    }), l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 2.667c-2.535 0-2.853.01-3.848.056-.994.045-1.672.203-2.266.433a4.574 4.574 0 0 0-1.653 1.077 4.574 4.574 0 0 0-1.076 1.653c-.231.594-.389 1.272-.434 2.266-.046.995-.056 1.313-.056 3.848s.01 2.852.056 3.848c.045.993.203 1.672.433 2.266a4.573 4.573 0 0 0 1.077 1.653c.519.518 1.04.838 1.653 1.076.594.23 1.272.389 2.266.434.995.045 1.313.056 3.848.056s2.852-.01 3.848-.056c.993-.045 1.672-.203 2.266-.434a4.574 4.574 0 0 0 1.653-1.076 4.574 4.574 0 0 0 1.076-1.653c.23-.594.389-1.273.434-2.266.045-.996.056-1.313.056-3.848s-.01-2.853-.056-3.848c-.045-.994-.203-1.672-.434-2.266a4.575 4.575 0 0 0-1.076-1.653 4.573 4.573 0 0 0-1.653-1.076c-.594-.231-1.273-.389-2.266-.434-.996-.046-1.313-.056-3.848-.056zm0 1.681c2.492 0 2.787.01 3.771.055.91.041 1.404.193 1.733.321.436.17.747.372 1.074.698.326.327.529.638.698 1.073.128.33.28.824.321 1.733.045.985.054 1.28.054 3.772s-.009 2.787-.054 3.771c-.041.91-.193 1.404-.321 1.733-.17.436-.372.747-.698 1.074a2.891 2.891 0 0 1-1.074.698c-.329.128-.823.28-1.733.321-.984.045-1.279.054-3.771.054s-2.788-.009-3.771-.054c-.91-.041-1.405-.193-1.734-.321a2.89 2.89 0 0 1-1.073-.698 2.891 2.891 0 0 1-.698-1.074c-.128-.329-.28-.823-.321-1.733-.045-.984-.055-1.279-.055-3.771s.01-2.787.055-3.771c.041-.91.193-1.405.321-1.734a2.89 2.89 0 0 1 .698-1.073 2.89 2.89 0 0 1 1.073-.698c.33-.128.824-.28 1.733-.321.985-.045 1.28-.055 3.772-.055z"
    }), o[4] = s, o[5] = r, o[6] = l) : (s = o[4], r = o[5], l = o[6]), o[7] !== e || o[8] !== n || o[9] !== i ? (c = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, i, s, r, l]
    }), o[7] = e, o[8] = n, o[9] = i, o[10] = c) : c = o[10], c
  }
  x._isSVG = !0;
  var b = e.i(203576),
    y = e.i(305646),
    N = e.i(980933),
    k = e.i(465376),
    v = e.i(606123),
    j = e.i(621663);
  let T = {
      dropbox: _.default,
      "google-drive": g.default,
      "apple-calendar": C.default,
      "google-calendar": C.default,
      instagram: x,
      instagram_messages: x,
      threads: b.default
    },
    S = p.default;
  e.s(["HatchConnectorConsentDialog", 0, function(e) {
    let p, g, C, _, x, b, R, E, I, w, A, P, M, D, L, O, F, z, H, B, K, U = (0, a.c)(76),
      {
        isOpen: G,
        serviceName: W,
        displayName: Z,
        hasSkillMatch: V,
        iconUrl: Q,
        description: Y,
        connectDisabled: q,
        isConnecting: $,
        isCustomConnector: J,
        consentScreen: X,
        connectLabel: ee,
        cancelLabel: et,
        children: en,
        errorMessage: ea,
        onRetry: ei,
        retryDisabled: es,
        retryLabel: er,
        onConnect: el,
        onCancel: ec
      } = e,
      eo = void 0 !== es && es,
      ed = T[W] ?? S;
    U[0] !== W ? (p = {
      third_party_connector_type: W
    }, U[0] = W, U[1] = p) : p = U[1], U[2] !== W || U[3] !== p ? (g = {
      eventName: m.HatchImpressionEvent.CONNECTOR_CONSENT_DIALOG_IMPRESSION,
      actionTarget: "connector_consent_dialog",
      thirdPartyConnectorType: W,
      metadata: p
    }, U[2] = W, U[3] = p, U[4] = g) : g = U[4];
    let eu = g,
      {
        ref: eh
      } = (0, u.useTrackedImpressionRef)(eu);
    U[5] !== W ? (C = {
      third_party_connector_type: W,
      third_party_connection_action: "connect"
    }, U[5] = W, U[6] = C) : C = U[6], U[7] !== W || U[8] !== C ? (_ = {
      eventName: "connector_consent_connect_click",
      actionTarget: "connector_consent_dialog_connect",
      actionType: "click",
      thirdPartyConnectorType: W,
      thirdPartyConnectionAction: "connect",
      metadata: C
    }, U[7] = W, U[8] = C, U[9] = _) : _ = U[9];
    let em = _,
      {
        ref: ef,
        onClick: ep
      } = (0, u.useTrackedClickRef)(em);
    U[10] !== W ? (x = {
      third_party_connector_type: W,
      third_party_connection_action: "cancel"
    }, U[10] = W, U[11] = x) : x = U[11], U[12] !== W || U[13] !== x ? (b = {
      eventName: "connector_consent_cancel_click",
      actionTarget: "connector_consent_dialog_cancel",
      actionType: "click",
      thirdPartyConnectorType: W,
      thirdPartyConnectionAction: "cancel",
      metadata: x
    }, U[12] = W, U[13] = x, U[14] = b) : b = U[14];
    let eg = b,
      {
        onClick: eC
      } = (0, u.useTrackedClickRef)(eg);
    U[15] !== W ? (R = {
      third_party_connector_type: W,
      third_party_connection_action: "connect"
    }, U[15] = W, U[16] = R) : R = U[16], U[17] !== W || U[18] !== R ? (E = {
      eventName: h.HatchClickEvent.CONNECTOR_CONSENT_RETRY_CLICK,
      actionTarget: "connector_consent_dialog_retry",
      actionType: "click",
      thirdPartyConnectorType: W,
      thirdPartyConnectionAction: "connect",
      metadata: R
    }, U[17] = W, U[18] = R, U[19] = E) : E = U[19];
    let e_ = E,
      {
        ref: ex,
        onClick: eb
      } = (0, u.useTrackedClickRef)(e_);
    U[20] !== eC || U[21] !== ec ? (I = () => {
      eC(), ec()
    }, U[20] = eC, U[21] = ec, U[22] = I) : I = U[22];
    let ey = I;
    U[23] !== Y || U[24] !== Z ? (w = null != Y ? (0, i.replaceLegacyProductBrandNames)(Y) : n.fbt._("Connect your {serviceName} account to let {productFullName} help you with tasks and information from this service.", [n.fbt._param("serviceName", Z), n.fbt._param("productFullName", i.PRODUCT_BRAND.fullName)], {
      hk: "3CKLzq"
    }), U[23] = Y, U[24] = Z, U[25] = w) : w = U[25];
    let eN = w;
    U[26] !== Z ? (A = n.fbs._("Connect {displayName}", [n.fbs._param("displayName", Z)], {
      hk: "18CzRo"
    }), U[26] = Z, U[27] = A) : A = U[27];
    let ek = A;
    U[28] !== er ? (P = er ?? n.fbs._("Try again", null, {
      hk: "2MGBE5"
    }), U[28] = er, U[29] = P) : P = U[29];
    let ev = P,
      ej = null != ea;
    U[30] !== $ || U[31] !== J ? (M = (0, j.selectConnectorConnectLabel)({
      isConnecting: $,
      isCustomConnector: J,
      connecting: n.fbs._("Connecting…", null, {
        hk: "3shunb"
      }),
      connect: n.fbs._("Connect", null, {
        hk: "18Pakv"
      }),
      continueLabel: n.fbs._("Continue", null, {
        hk: "3HCjP2"
      }),
      connectNextStep: n.fbs._("Connect", null, {
        hk: "2afsIQ"
      })
    }), U[30] = $, U[31] = J, U[32] = M) : M = U[32];
    let eT = M,
      eS = !0 === $ ? eT : ee ?? eT;
    U[33] !== ey ? (D = e => !e && ey(), U[33] = ey, U[34] = D) : D = U[34], U[35] !== ek ? (L = (0, t.jsx)(r.DialogHeader, {
      className: "sr-only",
      children: (0, t.jsx)(r.DialogTitle, {
        children: ek
      })
    }), U[35] = ek, U[36] = L) : L = U[36], U[37] === Symbol.for("react.memo_cache_sentinel") ? (O = (0, t.jsx)("span", {
      className: "flex-1"
    }), U[37] = O) : O = U[37], U[38] !== L ? (F = (0, t.jsxs)(t.Fragment, {
      children: [L, O]
    }), U[38] = L, U[39] = F) : F = U[39];
    let eR = ej ? "flex flex-col px-0 pb-0 min-h-[560px]" : "flex min-h-0 flex-col overflow-hidden px-0 pb-0";
    return U[40] !== eR ? (z = (0, d.cn)(eR), U[40] = eR, U[41] = z) : z = U[41], U[42] !== ed || U[43] !== et || U[44] !== en || U[45] !== q || U[46] !== ef || U[47] !== X || U[48] !== eN || U[49] !== Z || U[50] !== ea || U[51] !== ey || U[52] !== V || U[53] !== Q || U[54] !== $ || U[55] !== J || U[56] !== ej || U[57] !== ep || U[58] !== eb || U[59] !== el || U[60] !== ei || U[61] !== eS || U[62] !== ev || U[63] !== eo || U[64] !== ex || U[65] !== W ? (H = ej ? (0, t.jsxs)("div", {
      role: "alert",
      className: "flex flex-1 flex-col items-center justify-center gap-3 px-10 pb-6 text-center",
      children: [(0, t.jsx)(o.HatchIcon, {
        icon: f.default,
        size: 48,
        className: "text-text-destructive"
      }), (0, t.jsx)(c.Text, {
        variant: "title-3-emphasized",
        children: n.fbs._("Something went wrong", null, {
          hk: "3asU3w"
        })
      }), (0, t.jsx)(c.Text, {
        variant: "body",
        children: ea
      }), (0, t.jsx)("div", {
        className: "mt-1 w-full max-w-64",
        children: (0, t.jsx)(l.Button, {
          ref: ex,
          label: ev,
          variant: "primary",
          size: "36",
          fullWidth: !0,
          disabled: eo || null == ei,
          onClick: () => {
            eb(), ei?.()
          }
        })
      }), eo && (0, t.jsx)(c.Text, {
        variant: "footnote",
        color: "secondary",
        children: (0, v.getConnectorRetryUnavailableMessage)(n.fbs._("Reconnect to try again.", null, {
          hk: "K04qI"
        }))
      })]
    }) : (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsxs)("div", {
        "data-testid": "connector-consent-scroll",
        className: "min-h-0 flex-1 overflow-y-auto overscroll-contain px-10",
        children: [(0, t.jsxs)("div", {
          className: "flex flex-col items-center gap-2",
          children: [(V || J) && (0, t.jsx)("div", {
            className: "shadow-blur-elevation-01 rounded-12 mb-2 flex size-10 shrink-0 items-center justify-center overflow-hidden bg-white",
            children: J ? (0, t.jsx)(s.default, {
              src: (0, k.getConnectorIcon)("grid"),
              alt: "",
              width: 40,
              height: 40,
              className: "rounded-12 size-full object-cover",
              loading: "eager",
              unoptimized: !0
            }) : "meta_business" === W || "meta_ads" === W ? (0, t.jsx)(N.ConnectorIcon, {
              service: W,
              iconUrl: Q,
              size: 40,
              className: "!shadow-none"
            }) : null != Q ? (0, t.jsx)("img", {
              src: Q,
              alt: "",
              width: 40,
              height: 40,
              className: "rounded-12 size-full object-cover"
            }) : (0, t.jsx)(ed, {
              size: 24,
              className: "text-text-secondary"
            })
          }), (0, t.jsx)(c.Text, {
            variant: "title-3-emphasized",
            children: Z
          }), J ? (0, t.jsx)(c.Text, {
            variant: "subheadline",
            color: "secondary",
            className: "text-center",
            children: n.fbt._("Custom connector", null, {
              hk: "lWsic"
            })
          }) : V && (0, t.jsx)(c.Text, {
            variant: "subheadline",
            color: "secondary",
            className: "text-center",
            children: eN
          })]
        }), null != en && (0, t.jsx)("div", {
          className: "mt-4 w-full",
          children: en
        }), (0, t.jsx)("div", {
          className: "mt-4",
          children: (0, t.jsx)(y.ConnectorConsentContent, {
            displayName: Z,
            isCustomConnector: J,
            consentScreen: X
          })
        })]
      }), (0, t.jsxs)("div", {
        "data-testid": "connector-consent-footer",
        className: "flex shrink-0 flex-col gap-2 px-6 pt-2 pb-6",
        children: [(0, t.jsx)(l.Button, {
          ref: ef,
          label: eS,
          variant: "primary",
          size: "36",
          fullWidth: !0,
          onClick: () => {
            ep(), el()
          },
          disabled: q || $
        }), null != et && (0, t.jsx)(l.Button, {
          label: et,
          variant: "borderless",
          size: "36",
          fullWidth: !0,
          onClick: ey,
          disabled: $
        })]
      })]
    }), U[42] = ed, U[43] = et, U[44] = en, U[45] = q, U[46] = ef, U[47] = X, U[48] = eN, U[49] = Z, U[50] = ea, U[51] = ey, U[52] = V, U[53] = Q, U[54] = $, U[55] = J, U[56] = ej, U[57] = ep, U[58] = eb, U[59] = el, U[60] = ei, U[61] = eS, U[62] = ev, U[63] = eo, U[64] = ex, U[65] = W, U[66] = H) : H = U[66], U[67] !== eh || U[68] !== F || U[69] !== z || U[70] !== H ? (B = (0, t.jsx)(r.DialogContent, {
      ref: eh,
      header: F,
      contentClassName: z,
      children: H
    }), U[67] = eh, U[68] = F, U[69] = z, U[70] = H, U[71] = B) : B = U[71], U[72] !== G || U[73] !== D || U[74] !== B ? (K = (0, t.jsx)(r.Dialog, {
      open: G,
      onOpenChange: D,
      children: B
    }), U[72] = G, U[73] = D, U[74] = B, U[75] = K) : K = U[75], K
  }], 355300)
}, 24440, 364836, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    a = e.i(519172),
    i = e.i(345717),
    s = e.i(637740),
    r = e.i(325814),
    l = e.i(813280),
    c = e.i(525594),
    o = e.i(870228);

  function d() {
    return e.A(716420)
  }
  e.s(["importWhatsAppCompanionDialog", 0, d, "preloadWhatsAppCompanionDialog", 0, function() {
    d().catch(() => {})
  }], 364836);
  let u = () => d().then(e => ({
      default: e.HatchWhatsAppCompanionDialog
    })),
    h = () => (0, a.lazy)(u);
  e.s(["HatchWhatsAppCompanionDialogLoader", 0, function(e) {
    let d, m, f, p, g, C, _, x = (0, n.c)(25),
      {
        surface: b,
        iconUrl: y,
        sessionId: N,
        onSuccess: k,
        onFailure: v,
        onClose: j,
        resetKeys: T
      } = e,
      {
        Component: S,
        retry: R
      } = (0, c.useRetryableLazy)(h, u);
    return x[0] !== T ? (d = T ?? [], x[0] = T, x[1] = d) : d = x[1], x[2] !== S || x[3] !== d ? (m = [S, ...d], x[2] = S, x[3] = d, x[4] = m) : m = x[4], x[5] !== j || x[6] !== R ? (f = e => {
      let {
        error: n,
        reset: a
      } = e;
      return (0, t.jsx)(r.Dialog, {
        open: !0,
        onOpenChange: e => !e && j(),
        children: (0, t.jsx)(r.DialogContent, {
          header: (0, t.jsx)(r.DialogHeader, {
            className: "sr-only",
            children: (0, t.jsx)(r.DialogTitle, {
              children: i.fbs._("WhatsApp connection unavailable", null, {
                hk: "hlupm"
              })
            })
          }),
          children: (0, t.jsx)(o.HatchContentErrorFallback, {
            error: n,
            alwaysShowRetry: !0,
            onRetry: () => {
              R(), a()
            }
          })
        })
      })
    }, x[5] = j, x[6] = R, x[7] = f) : f = x[7], x[8] !== j ? (p = (0, t.jsx)(s.LoadingDialog, {
      isOpen: !0,
      onCancel: j
    }), x[8] = j, x[9] = p) : p = x[9], x[10] !== S || x[11] !== y || x[12] !== j || x[13] !== v || x[14] !== k || x[15] !== N ? (g = (0, t.jsx)(S, {
      isOpen: !0,
      iconUrl: y,
      sessionId: N,
      onSuccess: k,
      onFailure: v,
      onClose: j
    }), x[10] = S, x[11] = y, x[12] = j, x[13] = v, x[14] = k, x[15] = N, x[16] = g) : g = x[16], x[17] !== p || x[18] !== g ? (C = (0, t.jsx)(a.Suspense, {
      fallback: p,
      children: g
    }), x[17] = p, x[18] = g, x[19] = C) : C = x[19], x[20] !== b || x[21] !== m || x[22] !== f || x[23] !== C ? (_ = (0, t.jsx)(l.EctoErrorBoundary, {
      surface: b,
      resetKeys: m,
      fallback: f,
      children: C
    }), x[20] = b, x[21] = m, x[22] = f, x[23] = C, x[24] = _) : _ = x[24], _
  }], 24440)
}, 837602, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(345717),
    a = e.i(255859),
    i = e.i(519172),
    s = e.i(239286),
    r = e.i(420297),
    l = e.i(430116),
    c = e.i(325814),
    o = e.i(47247),
    d = e.i(359783),
    u = e.i(848048),
    h = e.i(823173),
    m = e.i(281539),
    f = e.i(756710),
    p = e.i(646361),
    g = e.i(175286),
    C = e.i(964924),
    _ = e.i(722099),
    x = e.i(123601),
    b = e.i(188202),
    y = e.i(465376);

  function N(e) {
    let n, a, i, s, r, l, c = (0, _.c)(15),
      {
        skill: o,
        size: d
      } = e,
      u = void 0 === d ? 44 : d;
    c[0] !== o ? (n = (0, b.getSkillIconSource)(o) ?? y.CONNECTOR_ICON_FALLBACK, c[0] = o, c[1] = n) : n = c[1];
    let h = n;
    return c[2] !== u ? (a = {
      width: u,
      height: u
    }, c[2] = u, c[3] = a) : a = c[3], c[4] !== u ? (i = Math.round(.7 * u), c[4] = u, c[5] = i) : i = c[5], c[6] !== u ? (s = Math.round(.7 * u), c[6] = u, c[7] = s) : s = c[7], c[8] !== h || c[9] !== i || c[10] !== s ? (r = (0, t.jsx)(x.default, {
      src: h,
      alt: "",
      width: i,
      height: s,
      className: "rounded-4",
      loading: "eager",
      unoptimized: !0
    }), c[8] = h, c[9] = i, c[10] = s, c[11] = r) : r = c[11], c[12] !== a || c[13] !== r ? (l = (0, t.jsx)("div", {
      className: "shadow-blur-elevation-01 rounded-10 flex shrink-0 items-center justify-center overflow-hidden bg-white",
      style: a,
      children: r
    }), c[12] = a, c[13] = r, c[14] = l) : l = c[14], l
  }
  var k = e.i(183710),
    v = e.i(355300),
    j = e.i(719197),
    T = e.i(637740),
    S = e.i(696681),
    R = e.i(903355),
    E = e.i(813280),
    I = e.i(870228),
    w = e.i(863641);

  function A(e) {
    let i, s, o, d, f, p, g, C, x, b, y, k, v, j, T, S, R, I, A = (0, _.c)(53),
      {
        mode: M,
        isOpen: D,
        skill: L,
        onCancel: O
      } = e,
      F = (0, u.useInteractionLoggerWithLazyData)();
    A[0] !== M ? (i = {
      eventName: h.HatchImpressionEvent.MESSENGER_PIN_REDIRECT_DIALOG_IMPRESSION,
      actionTarget: "messenger_pin_redirect_dialog",
      metadata: {
        mode: M
      }
    }, A[0] = M, A[1] = i) : i = A[1];
    let z = i,
      {
        ref: H
      } = (0, u.useTrackedImpressionRef)(z);
    A[2] !== M ? (s = "create" === M ? n.fbs._("You need to create a PIN", null, {
      hk: "3Ax80X"
    }) : "reset" === M ? n.fbs._("Reset your PIN?", null, {
      hk: "12qruI"
    }) : n.fbs._("Open Messenger?", null, {
      hk: "3Mc4Gc"
    }), A[2] = M, A[3] = s) : s = A[3];
    let B = s,
      K = "forgot" === M || "reset" === M;
    return A[4] !== O ? (o = e => !e && O(), A[4] = O, A[5] = o) : o = A[5], A[6] !== B ? (d = (0, t.jsx)(c.DialogHeader, {
      className: "sr-only",
      children: (0, t.jsx)(c.DialogTitle, {
        children: B
      })
    }), A[6] = B, A[7] = d) : d = A[7], A[8] !== D || A[9] !== M ? (f = [M, D], A[8] = D, A[9] = M, A[10] = f) : f = A[10], A[11] !== L ? (p = (0, t.jsx)(N, {
      skill: L
    }), A[11] = L, A[12] = p) : p = A[12], A[13] !== M ? (g = "create" === M && (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(l.Text, {
        variant: "title-2-emphasized",
        className: "text-center",
        children: n.fbt._("You need to create a PIN", null, {
          hk: "1nAbhw"
        })
      }), (0, t.jsx)(l.Text, {
        variant: "body",
        color: "secondary",
        className: "text-center",
        children: n.fbt._("Create a PIN in Messenger to give {productFullName} access to your end-to-end encrypted chats.", [n.fbt._param("productFullName", a.PRODUCT_BRAND.fullName)], {
          hk: "5Pgpk"
        })
      })]
    }), A[13] = M, A[14] = g) : g = A[14], A[15] !== M ? (C = "reset" === M && (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(l.Text, {
        variant: "title-2-emphasized",
        className: "text-center",
        children: n.fbt._("Reset your PIN?", null, {
          hk: "13WVQW"
        })
      }), (0, t.jsx)(l.Text, {
        variant: "body",
        color: "secondary",
        className: "text-center",
        children: n.fbt._("An incorrect PIN was entered too many times. You can reset your PIN in Messenger or try again later.", null, {
          hk: "21Wbsk"
        })
      })]
    }), A[15] = M, A[16] = C) : C = A[16], A[17] !== M ? (x = "forgot" === M && (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(l.Text, {
        variant: "title-2-emphasized",
        className: "text-center",
        children: n.fbt._("Open Messenger?", null, {
          hk: "3xK8bM"
        })
      }), (0, t.jsx)(l.Text, {
        variant: "body",
        color: "secondary",
        className: "text-center",
        children: n.fbt._("Go to Messenger to create a new PIN or reset yours if you forgot it.", null, {
          hk: "12I0zT"
        })
      })]
    }), A[17] = M, A[18] = x) : x = A[18], A[19] !== M ? (b = "forgot" === M ? n.fbs._("Open", null, {
      hk: "1sMCyl"
    }) : n.fbs._("Open Messenger", null, {
      hk: "36fKYf"
    }), A[19] = M, A[20] = b) : b = A[20], A[21] !== F || A[22] !== M || A[23] !== O ? (y = () => {
      F({
        eventName: m.HatchClickEvent.MESSENGER_PIN_REDIRECT_OPEN_CLICK,
        actionTarget: "messenger_pin_redirect_open",
        actionType: "click",
        metadata: {
          mode: M
        }
      });
      let e = "create" === M ? "https://www.messenger.com/secure_storage/hatch_pin/" : "https://www.messenger.com";
      window.open(e, "_blank", "noopener,noreferrer"), O()
    }, A[21] = F, A[22] = M, A[23] = O, A[24] = y) : y = A[24], A[25] !== b || A[26] !== y ? (k = (0, t.jsx)(r.Button, {
      variant: "primary",
      size: "36",
      fullWidth: !0,
      label: b,
      onClick: y
    }), A[25] = b, A[26] = y, A[27] = k) : k = A[27], A[28] !== K || A[29] !== F || A[30] !== M || A[31] !== O ? (v = K && (0, t.jsx)(r.Button, {
      variant: "flat",
      size: "36",
      fullWidth: !0,
      label: "reset" === M ? n.fbs._("Try again later", null, {
        hk: "ThR8N"
      }) : n.fbs._("Cancel", null, {
        hk: "3CW2Zo"
      }),
      onClick: () => {
        F({
          eventName: m.HatchClickEvent.MESSENGER_PIN_REDIRECT_CANCEL_CLICK,
          actionTarget: "messenger_pin_redirect_cancel",
          actionType: "click",
          metadata: {
            mode: M
          }
        }), O()
      }
    }), A[28] = K, A[29] = F, A[30] = M, A[31] = O, A[32] = v) : v = A[32], A[33] !== k || A[34] !== v ? (j = (0, t.jsxs)("div", {
      className: "flex w-full flex-col gap-2",
      children: [k, v]
    }), A[33] = k, A[34] = v, A[35] = j) : j = A[35], A[36] !== H || A[37] !== j || A[38] !== p || A[39] !== g || A[40] !== C || A[41] !== x ? (T = (0, t.jsxs)("div", {
      ref: H,
      className: "flex flex-col items-center gap-4",
      children: [p, g, C, x, j]
    }), A[36] = H, A[37] = j, A[38] = p, A[39] = g, A[40] = C, A[41] = x, A[42] = T) : T = A[42], A[43] !== T || A[44] !== f ? (S = (0, t.jsx)(E.EctoErrorBoundary, {
      surface: w.HATCH_SENTRY_SURFACES.CONNECT,
      fallback: P,
      resetKeys: f,
      children: T
    }), A[43] = T, A[44] = f, A[45] = S) : S = A[45], A[46] !== S || A[47] !== d ? (R = (0, t.jsxs)(c.DialogContent, {
      showCloseButton: !0,
      children: [d, S]
    }), A[46] = S, A[47] = d, A[48] = R) : R = A[48], A[49] !== D || A[50] !== R || A[51] !== o ? (I = (0, t.jsx)(c.Dialog, {
      open: D,
      onOpenChange: o,
      children: R
    }), A[49] = D, A[50] = R, A[51] = o, A[52] = I) : I = A[52], I
  }

  function P(e) {
    let {
      error: n,
      reset: a
    } = e;
    return (0, t.jsx)(I.HatchContentErrorFallback, {
      error: n,
      onRetry: a
    })
  }
  let M = (0, d.createClientLogger)("MessengerConnectDialog");
  e.s(["MessengerConnectDialog", 0, function({
    isOpen: e,
    skill: d,
    onSuccess: _,
    onCancel: x,
    sessionId: y,
    skipConfirm: E = !1
  }) {
    let [I, w] = (0, i.useState)("confirm"), [P, D] = (0, i.useState)(""), [L, O] = (0, i.useState)(!1), [F, z] = (0, i.useState)(!1), [H, B] = (0, i.useState)(null), [K, U] = (0, i.useState)(!1), [G, W] = (0, i.useState)(!1), [Z, V] = (0, i.useState)(null), [Q, Y] = (0, i.useState)(!1), q = (0, i.useRef)(null), $ = (0, i.useRef)(e);
    $.current = e;
    let J = (0, i.useRef)(!1),
      {
        sendRequest: X
      } = (0, g.useHatchRpc)(),
      ee = null != Z && Z <= 5,
      {
        data: et,
        isPending: en,
        isError: ea
      } = (0, R.useFoaAccountQuery)("facebook", {
        enabled: e
      }),
      ei = (0, i.useMemo)(() => (0, b.getSkillIconUrl)(d), [d]);
    (0, i.useEffect)(() => {
      !e && (w("confirm"), D(""), O(!1), z(!1), B(null), U(!1), W(!1), V(null), Y(!1), J.current = !1, q.current && (clearTimeout(q.current), q.current = null))
    }, [e]);
    let {
      onClick: es
    } = (0, u.useTrackedClickRef)((0, i.useMemo)(() => ({
      eventName: m.HatchClickEvent.MESSENGER_PIN_CONNECT_CLICK,
      actionTarget: "MessengerPinConnectButton",
      actionType: "click"
    }), [])), er = (0, i.useCallback)(async () => {
      Y(!0);
      try {
        let e = await X("messenger.pin_status", {
          ...null != y && {
            session_id: y
          }
        });
        if (!$.current) return;
        if (!e.has_pin) return void w("no-pin")
      } catch (e) {
        M.retainForBugReport("info", "Failed to check PIN status, proceeding to PIN entry")
      } finally {
        Y(!1)
      }
      $.current && w("pin")
    }, [X, y]);
    (0, i.useEffect)(() => {
      !E || J.current || !e || en || ea || et?.is_linked === !0 && (J.current = !0, er())
    }, [E, e, en, ea, et?.is_linked, er]);
    let el = (0, i.useRef)(!1),
      ec = n.fbs._("Incorrect PIN. Please try again.", null, {
        hk: "20kekH"
      }),
      eo = n.fbs._("Messenger connected", null, {
        hk: "3PIROx"
      }),
      ed = n.fbs._("Failed to save PIN. Please try again.", null, {
        hk: "2RGFRR"
      }),
      eu = (0, i.useCallback)(async e => {
        let t = e ?? P;
        if (!el.current && !(t.length < 6) && !G && !ee) {
          es(), (0, C.noteConnectorCredentialSubmitted)((0, b.getSkillSlug)(d)), el.current = !0, z(!0);
          try {
            let e = await X((0, b.getMessengerUnlockMethod)(d), {
              pin: t,
              ...null != y && {
                session_id: y
              }
            });
            if (!e.success) {
              if (M.retainForBugReport("info", "Messenger unlock rejected"), null != e.login_timeout_remaining_secs && e.login_timeout_remaining_secs > 0) {
                W(!0), q.current && clearTimeout(q.current), q.current = setTimeout(() => {
                  W(!1), B(null), q.current = null
                }, 1e3 * e.login_timeout_remaining_secs);
                let t = Math.ceil(e.login_timeout_remaining_secs / 60);
                B({
                  type: "rate-limited",
                  minutes: t
                })
              } else null != e.attempts_remaining ? (V(e.attempts_remaining), e.attempts_remaining > 5 && B({
                type: "attempts-remaining",
                attempts: e.attempts_remaining
              })) : B({
                type: "message",
                text: e.message || ec
              });
              D("");
              return
            }(0, o.toast)(eo), _()
          } catch (e) {
            M.error({
              error: e
            }, "Failed to unlock Messenger"), (0, o.toast)(ed), D("")
          } finally {
            el.current = !1, z(!1)
          }
        }
      }, [P, X, _, es, d, G, ee, y, ec, eo, ed]),
      eh = null;
    H?.type === "message" ? eh = H.text : H?.type === "rate-limited" ? eh = n.fbs._("Too many attempts. Try again in {minutes} minutes.", [n.fbs._param("minutes", `${H.minutes}`)], {
      hk: "1gr5PR"
    }) : H?.type === "attempts-remaining" && (eh = n.fbs._("Incorrect PIN. {remaining} attempts remaining.", [n.fbs._param("remaining", `${H.attempts}`)], {
      hk: "4eHSlU"
    }));
    let em = (0, i.useMemo)(() => ({
        eventName: h.HatchImpressionEvent.MESSENGER_PIN_DIALOG_IMPRESSION,
        actionTarget: "MessengerPinDialog"
      }), []),
      {
        ref: ef
      } = (0, u.useTrackedImpressionRef)(em),
      {
        ref: ep,
        onClick: eg
      } = (0, u.useTrackedClickRef)((0, i.useMemo)(() => ({
        eventName: m.HatchClickEvent.MESSENGER_PIN_SHOW_TOGGLE,
        actionTarget: "MessengerPinShowToggle",
        actionType: "click"
      }), [])),
      eC = (0, u.useInteractionLoggerWithLazyData)();
    return en ? (0, t.jsx)(T.LoadingDialog, {
      isOpen: e,
      onCancel: x
    }) : ea ? ((0, o.toast)(n.fbs._("Unable to check your Facebook account. Please try again.", null, {
      hk: "3ILl9Y"
    })), x(), null) : et?.is_linked === !1 ? (0, t.jsx)(S.AccountsCenterLinkModal, {
      isOpen: e,
      onClose: x
    }) : "no-pin" === I ? (0, t.jsx)(A, {
      mode: "create",
      isOpen: e,
      skill: d,
      onCancel: x
    }) : ee ? (0, t.jsx)(A, {
      mode: "reset",
      isOpen: e,
      skill: d,
      onCancel: x
    }) : "confirm" === I ? E ? (0, t.jsx)(T.LoadingDialog, {
      isOpen: e,
      onCancel: x
    }) : (0, t.jsx)(v.HatchConnectorConsentDialog, {
      isOpen: e,
      serviceName: (0, b.getSkillSlug)(d),
      displayName: (0, b.getSkillDisplayName)(d),
      hasSkillMatch: !0,
      iconUrl: ei,
      description: d.description ?? null,
      consentScreen: d.consent_screen,
      onConnect: er,
      connectDisabled: Q,
      onCancel: x,
      children: et?.is_linked === !0 && (0, t.jsx)("div", {
        className: "rounded-12 bg-fill-secondary w-full",
        children: (0, t.jsx)(j.FacebookIdentityCard, {
          name: et.name,
          profilePicUrl: et.profile_pic_url,
          avatarSize: "40",
          className: "px-4 py-3"
        })
      })
    }) : (0, t.jsxs)(c.Dialog, {
      open: e,
      onOpenChange: e => !e && !F && x(),
      children: [(0, t.jsxs)(c.DialogContent, {
        showCloseButton: !0,
        children: [(0, t.jsx)(c.DialogTitle, {
          className: "sr-only",
          children: n.fbt._("Enter your PIN", null, {
            hk: "2QPthZ"
          })
        }), (0, t.jsxs)("div", {
          ref: ef,
          className: "flex flex-col items-center gap-4",
          children: [(0, t.jsx)(N, {
            skill: d
          }), (0, t.jsx)(l.Text, {
            variant: "title-2-emphasized",
            className: "text-center",
            children: n.fbt._("Enter your PIN", null, {
              hk: "2NW0uY"
            })
          }), (0, t.jsx)(l.Text, {
            variant: "body",
            color: "secondary",
            className: "text-center",
            children: n.fbt._("It's the same PIN you use to access your chat history. This gives {productShortName} access to your end-to-end encrypted chats.", [n.fbt._param("productShortName", a.PRODUCT_BRAND.shortName)], {
              hk: "3FMusv"
            })
          }), (0, t.jsx)(k.MessengerPinBoxes, {
            value: P,
            onChange: e => {
              D(e), H && B(null), 6 === e.length && eu(e)
            },
            showPin: L,
            disabled: F || G,
            onSubmit: eu
          }), F && (0, t.jsx)(s.Spinner, {
            size: 20
          }), eh && (0, t.jsx)(l.Text, {
            variant: "footnote",
            className: "text-text-destructive text-center",
            role: "alert",
            children: eh
          }), (0, t.jsx)(r.Button, {
            ref: ep,
            variant: "flat",
            size: "32",
            label: L ? n.fbs._("Hide PIN", null, {
              hk: "4vVGwT"
            }) : n.fbs._("Show PIN", null, {
              hk: "38idlv"
            }),
            leadingIcon: () => (0, t.jsx)(p.HatchIcon, {
              icon: f.default,
              size: 16
            }),
            onClick: () => {
              eg(), O(e => !e)
            }
          }), (0, t.jsx)(r.Button, {
            variant: "flat",
            size: "36",
            fullWidth: !0,
            label: n.fbs._("Need help with your PIN?", null, {
              hk: "8Lqhx"
            }),
            onClick: () => {
              eC({
                eventName: m.HatchClickEvent.MESSENGER_PIN_FORGOT_CLICK,
                actionTarget: "MessengerPinForgotLink",
                actionType: "click"
              }), U(!0)
            }
          })]
        })]
      }), (0, t.jsx)(A, {
        mode: "forgot",
        isOpen: K,
        skill: d,
        onCancel: () => U(!1)
      })]
    })
  }], 837602)
}, 183710, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    a = e.i(519172),
    i = e.i(345717),
    s = e.i(374785),
    r = e.i(590328);
  e.s(["MessengerPinBoxes", 0, function(e) {
    let l, c, o, d, u, h, m, f, p, g, C = (0, n.c)(26),
      {
        value: _,
        onChange: x,
        showPin: b,
        disabled: y,
        maskedComplete: N,
        onSubmit: k
      } = e,
      v = void 0 !== N && N,
      j = (0, a.useRef)(null);
    C[0] !== v || C[1] !== _ ? (l = Array.from({
      length: 6
    }, (e, t) => _[t] ?? (v ? "0" : "")), C[0] = v, C[1] = _, C[2] = l) : l = C[2];
    let T = l;
    return C[3] !== y || C[4] !== _ ? (c = () => {
      "" !== _ || y || j.current?.focus()
    }, o = [_, y], C[3] = y, C[4] = _, C[5] = c, C[6] = o) : (c = C[5], o = C[6]), (0, a.useEffect)(c, o), C[7] !== x ? (d = e => {
      x(e.target.value.replace(/\D/g, "").slice(0, 6))
    }, C[7] = x, C[8] = d) : d = C[8], C[9] !== k ? (u = e => {
      "Enter" === e.key && k()
    }, C[9] = k, C[10] = u) : u = C[10], C[11] === Symbol.for("react.memo_cache_sentinel") ? (h = i.fbs._("PIN", null, {
      hk: "AaS9e"
    }), C[11] = h) : h = C[11], C[12] !== y || C[13] !== d || C[14] !== u || C[15] !== _ ? (m = (0, t.jsx)("input", {
      ref: j,
      type: "text",
      inputMode: "numeric",
      pattern: "[0-9]*",
      autoComplete: "one-time-code",
      maxLength: 6,
      value: _,
      onChange: d,
      onKeyDown: u,
      disabled: y,
      autoFocus: !0,
      className: "sr-only",
      "aria-label": h
    }), C[12] = y, C[13] = d, C[14] = u, C[15] = _, C[16] = m) : m = C[16], C[17] === Symbol.for("react.memo_cache_sentinel") ? (f = () => j.current?.focus(), C[17] = f) : f = C[17], C[18] !== T || C[19] !== y || C[20] !== b || C[21] !== _ ? (p = (0, t.jsx)("div", {
      role: "presentation",
      onClick: f,
      children: (0, t.jsx)(r.Flexbox, {
        justifyContent: "center",
        gap: 2,
        children: T.map((e, n) => {
          let a = !y && n === _.length && _.length < 6,
            i = e ? b ? e : "•" : "";
          return (0, t.jsx)("div", {
            className: (0, s.cn)("rounded-10 flex size-12 items-center justify-center border-2 transition-colors", a ? "border-hatch-accent" : e ? "border-border-primary" : "border-border-secondary"),
            children: (0, t.jsx)("span", {
              className: "text-title-2-emphasized select-none",
              role: "presentation",
              children: i
            })
          }, n)
        })
      })
    }), C[18] = T, C[19] = y, C[20] = b, C[21] = _, C[22] = p) : p = C[22], C[23] !== p || C[24] !== m ? (g = (0, t.jsxs)(t.Fragment, {
      children: [m, p]
    }), C[23] = p, C[24] = m, C[25] = g) : g = C[25], g
  }])
}, 606123, e => {
  "use strict";
  e.s(["getConnectorConnectErrorMessage", 0, function(e) {
    return e
  }, "getConnectorDisconnectErrorMessage", 0, function(e) {
    return e
  }, "getConnectorRetryUnavailableMessage", 0, function(e) {
    return e
  }])
}, 995335, e => {
  "use strict";
  let t = {
    facebook: {
      settingsApp: "facebook"
    },
    facebook_cli: {
      settingsApp: "facebook"
    },
    messenger: {
      settingsApp: "facebook",
      disconnectable: !0
    },
    messenger_read: {
      settingsApp: "facebook",
      disconnectable: !0
    },
    instagram: {
      accountProvider: "instagram",
      settingsApp: "instagram"
    },
    threads: {
      accountProvider: "threads",
      settingsApp: "threads"
    },
    instagram_messages: {
      accountProvider: "instagram",
      settingsApp: "instagram_messages",
      disconnectable: !0
    },
    threads_messages: {
      accountProvider: "threads",
      settingsApp: "threads_messages",
      disconnectable: !0
    }
  };

  function n(e) {
    return e.replace(/-/g, "_")
  }

  function a(e) {
    if (null != e) return t[n(e)]
  }
  e.s(["getFoaAccountProvider", 0, function(e) {
    return a(e)?.accountProvider ?? e
  }, "getFoaAppForSettingsConnector", 0, function(e) {
    return a(e)?.settingsApp ?? null
  }, "isDisconnectableFoaConnector", 0, function(e) {
    return a(e)?.disconnectable === !0
  }, "normalizeFoaConnectorSlug", 0, n])
}, 957778, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(393202);
  let a = (0, e.i(359783).createClientLogger)("foaAccountsQueries"),
    i = {
      all: ["foa", "accounts"],
      account: (e, t) => ["foa", "accounts", e, t]
    },
    s = new Set(["unspecified", "facebook", "instagram", "business", "meta"]);

  function r(e) {
    if ("string" != typeof e) return null;
    let t = e.trim();
    return t.length > 0 ? t : null
  }
  async function l(e, t) {
    let n = await e("foa.accounts", {
        app: t
      }),
      i = n.fb_user_id ? [{
        fb_user_id: n.fb_user_id,
        connected: n.connected ?? !1,
        name: n.name,
        profile_pic_url: n.profile_pic_url
      }] : Array.isArray(n.accounts) ? n.accounts.map(e => {
        let t;
        return null == (t = e.user_fbid ?? e.id) ? (a.retainForBugReport("warn", "Dropped FOA account with no user_fbid or id"), null) : {
          fb_user_id: t,
          connected: !0 === e.connected,
          name: e.label ?? e.name ?? e.username,
          profile_pic_url: e.profile_picture_url ?? e.profile_pic_url
        }
      }).filter(e => null != e) : [],
      l = function(e, t) {
        if (!Array.isArray(e)) return [];
        let n = new Map(t.map(e => [e.fb_user_id, e])),
          a = new Set,
          i = [];
        for (let t of e) {
          let e = r(t?.key),
            l = r(t?.label);
          if (null == e || null == l || a.has(e)) continue;
          let c = new Set,
            o = Array.isArray(t.account_ids) ? t.account_ids.flatMap(e => {
              let t = r(e);
              if (null == t || c.has(t)) return [];
              c.add(t);
              let a = n.get(t);
              return null == a ? [] : [a]
            }) : [];
          if (0 === o.length) continue;
          let d = r(t.icon)?.toLowerCase(),
            u = null != d && s.has(d) ? d : "unspecified";
          a.add(e), i.push({
            key: e,
            icon: u,
            label: l,
            accounts: o
          })
        }
        return i
      }(n.groups, i),
      c = new Set(l.flatMap(e => e.accounts.map(e => e.fb_user_id)));
    return {
      accounts: i,
      groups: l,
      ungroupedAccounts: i.filter(e => !c.has(e.fb_user_id))
    }
  }
  e.s(["fetchFoaAccountsResult", 0, l, "foaAccountsQueryKeys", 0, i, "useOpenAccountsCenterLinkFlow", 0, function() {
    let e, a = (0, t.c)(2),
      s = (0, n.useQueryClient)();
    return a[0] !== s ? (e = () => {
      let e = !1,
        t = function() {
          window.removeEventListener("focus", n), document.removeEventListener("visibilitychange", n)
        };

      function n() {
        !e && "hidden" !== document.visibilityState && document.hasFocus() && (e = !0, t(), s.invalidateQueries({
          queryKey: i.all
        }))
      }
      window.addEventListener("focus", n), document.addEventListener("visibilitychange", n), window.open("https://accountscenter.meta.com/add_accounts?flow=HATCH_ACCOUNT_LINK_FB_UPSELL", "_blank", "noopener,noreferrer")
    }, a[0] = s, a[1] = e) : e = a[1], e
  }])
}, 903355, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(849329),
    a = e.i(175286),
    i = e.i(14751),
    s = e.i(957778);

  function r(e, r) {
    let l, c, o, d, u, h = (0, t.c)(19),
      {
        isReady: m,
        sendRequest: f,
        gatewayUrl: p
      } = (0, a.useHatchRpc)();
    h[0] !== e || h[1] !== p ? (l = s.foaAccountsQueryKeys.account(e, p), h[0] = e, h[1] = p, h[2] = l) : l = h[2], h[3] !== e || h[4] !== f ? (c = () => (0, s.fetchFoaAccountsResult)(f, e), h[3] = e, h[4] = f, h[5] = c) : c = h[5], h[6] !== p || h[7] !== m || h[8] !== r?.enabled ? (o = (r?.enabled ?? !0) && (0, i.isMethodReadyForTransport)({
      method: "foa.accounts",
      gatewayUrl: p,
      isWsReady: m
    }), h[6] = p, h[7] = m, h[8] = r?.enabled, h[9] = o) : o = h[9];
    let g = 5e3 * ("meta_business" !== e),
      C = "meta_business" === e ? 2 : void 0;
    return h[10] !== r ? (d = r?.sentrySurface != null ? {
      sentrySurface: r.sentrySurface
    } : void 0, h[10] = r, h[11] = d) : d = h[11], h[12] !== l || h[13] !== c || h[14] !== o || h[15] !== g || h[16] !== C || h[17] !== d ? (u = {
      queryKey: l,
      queryFn: c,
      enabled: o,
      staleTime: g,
      retry: C,
      refetchOnWindowFocus: !1,
      meta: d
    }, h[12] = l, h[13] = c, h[14] = o, h[15] = g, h[16] = C, h[17] = d, h[18] = u) : u = h[18], (0, n.useQuery)(u)
  }

  function l(e, n) {
    let a, i, s = (0, t.c)(10),
      l = r(e, n);
    e: {
      let e, t;
      if (null == l.data) {
        a = void 0;
        break e
      }
      s[0] !== l.data.accounts ? (e = l.data.accounts.find(c) ?? l.data.accounts[0], s[0] = l.data.accounts, s[1] = e) : e = s[1];
      let n = e;
      if (null != n) {
        let e;
        s[2] !== n || s[3] !== l.data.accounts ? (e = {
          ...n,
          accounts: l.data.accounts,
          is_linked: !0
        }, s[2] = n, s[3] = l.data.accounts, s[4] = e) : e = s[4], a = e;
        break e
      }
      s[5] !== l.data.accounts ? (t = {
        accounts: l.data.accounts,
        is_linked: !1
      }, s[5] = l.data.accounts, s[6] = t) : t = s[6],
      a = t
    }
    let o = a;
    return s[7] !== o || s[8] !== l ? (i = {
      ...l,
      data: o
    }, s[7] = o, s[8] = l, s[9] = i) : i = s[9], i
  }

  function c(e) {
    return e.connected
  }
  e.s(["useFoaAccountQuery", 0, l, "useFoaAccountsByApp", 0, function(e) {
    let n, a, i, s, r, c, o = (0, t.c)(16);
    o[0] !== e.facebook ? (n = {
      enabled: e.facebook
    }, o[0] = e.facebook, o[1] = n) : n = o[1];
    let {
      data: d
    } = l("facebook", n);
    o[2] !== e.instagram ? (a = {
      enabled: e.instagram
    }, o[2] = e.instagram, o[3] = a) : a = o[3];
    let {
      data: u
    } = l("instagram", a);
    o[4] !== e.threads ? (i = {
      enabled: e.threads
    }, o[4] = e.threads, o[5] = i) : i = o[5];
    let {
      data: h
    } = l("threads", i);
    o[6] !== e.instagram_messages ? (s = {
      enabled: e.instagram_messages
    }, o[6] = e.instagram_messages, o[7] = s) : s = o[7];
    let {
      data: m
    } = l("instagram_messages", s);
    o[8] !== e.threads_messages ? (r = {
      enabled: e.threads_messages
    }, o[8] = e.threads_messages, o[9] = r) : r = o[9];
    let {
      data: f
    } = l("threads_messages", r);
    return o[10] !== d || o[11] !== u || o[12] !== m || o[13] !== h || o[14] !== f ? (c = {
      facebook: d,
      instagram: u,
      threads: h,
      instagram_messages: m,
      threads_messages: f
    }, o[10] = d, o[11] = u, o[12] = m, o[13] = h, o[14] = f, o[15] = c) : c = o[15], c
  }, "useFoaAccountsResultQuery", 0, r])
}, 621663, e => {
  "use strict";
  e.s(["selectConnectorConnectLabel", 0, function({
    isConnecting: e,
    isCustomConnector: t,
    connecting: n,
    connect: a,
    continueLabel: i,
    connectNextStep: s
  }) {
    return null != e ? e ? n : a : t ? i : s
  }])
}, 370911, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function a(e) {
    let a, i, s, r, l, c, o, d, u, h, m, f, p, g, C = (0, n.c)(19);
    return C[0] !== e.title ? (a = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), C[0] = e.title, C[1] = a) : a = C[1], C[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), C[2] = e.children, C[3] = i) : i = C[3], C[4] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, t.jsx)("path", {
      d: "M6 16C6.55 16 7 16.45 7 17C7 17.55 6.55 18 6 18C5.45 18 5 17.55 5 17C5 16.45 5.45 16 6 16Z"
    }), o = (0, t.jsx)("path", {
      d: "M10 16C10.55 16 11 16.45 11 17C11 17.55 10.55 18 10 18C9.45 18 9 17.55 9 17C9 16.45 9.45 16 10 16Z"
    }), d = (0, t.jsx)("path", {
      d: "M14 16C14.55 16 15 16.45 15 17C15 17.55 14.55 18 14 18C13.45 18 13 17.55 13 17C13 16.45 13.45 16 14 16Z"
    }), u = (0, t.jsx)("path", {
      d: "M6 12C6.55 12 7 12.45 7 13C7 13.55 6.55 14 6 14C5.45 14 5 13.55 5 13C5 12.45 5.45 12 6 12Z"
    }), h = (0, t.jsx)("path", {
      d: "M10 12C10.55 12 11 12.45 11 13C11 13.55 10.55 14 10 14C9.45 14 9 13.55 9 13C9 12.45 9.45 12 10 12Z"
    }), m = (0, t.jsx)("path", {
      d: "M14 12C14.55 12 15 12.45 15 13C15 13.55 14.55 14 14 14C13.45 14 13 13.55 13 13C13 12.45 13.45 12 14 12Z"
    }), f = (0, t.jsx)("path", {
      d: "M18 12C18.55 12 19 12.45 19 13C19 13.55 18.55 14 18 14C17.45 14 17 13.55 17 13C17 12.45 17.45 12 18 12Z"
    }), p = (0, t.jsx)("path", {
      d: "M10 8C10.55 8 11 8.45 11 9C11 9.55 10.55 10 10 10C9.45 10 9 9.55 9 9C9 8.45 9.45 8 10 8Z"
    }), s = (0, t.jsx)("path", {
      d: "M14 8C14.55 8 15 8.45 15 9C15 9.55 14.55 10 14 10C13.45 10 13 9.55 13 9C13 8.45 13.45 8 14 8Z"
    }), r = (0, t.jsx)("path", {
      d: "M18 8C18.55 8 19 8.45 19 9C19 9.55 18.55 10 18 10C17.45 10 17 9.55 17 9C17 8.45 17.45 8 18 8Z"
    }), l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.6 1.13C17.71 1.13 18.59 1.12 19.3 1.18C20.02 1.24 20.64 1.37 21.21 1.66C22.13 2.12 22.88 2.87 23.34 3.79C23.64 4.36 23.76 4.98 23.82 5.7C23.88 6.41 23.88 7.29 23.88 8.4V15.6C23.88 16.71 23.88 17.59 23.82 18.3C23.76 19.02 23.64 19.64 23.34 20.21C22.88 21.13 22.13 21.88 21.21 22.34C20.64 22.63 20.02 22.76 19.3 22.82C18.59 22.88 17.71 22.88 16.6 22.88H7.4C6.3 22.88 5.41 22.88 4.7 22.82C3.98 22.76 3.36 22.63 2.79 22.34C1.87 21.88 1.12 21.13 0.66 20.21C0.37 19.64 0.24 19.02 0.18 18.3C0.13 17.59 0.13 16.71 0.13 15.6V8.4C0.13 7.29 0.13 6.41 0.18 5.7C0.24 4.98 0.37 4.36 0.66 3.79C1.12 2.87 1.87 2.12 2.79 1.66C3.36 1.37 3.98 1.24 4.7 1.18C5.41 1.12 6.3 1.13 7.4 1.13H16.6ZM7.4 4.63C6.27 4.63 5.47 4.63 4.84 4.68C4.23 4.73 3.87 4.82 3.58 4.97C2.99 5.27 2.52 5.74 2.22 6.33C2.07 6.61 1.98 6.98 1.93 7.59C1.88 8.22 1.88 9.02 1.88 10.15V15.6C1.88 16.73 1.88 17.53 1.93 18.16C1.98 18.77 2.07 19.14 2.22 19.42C2.52 20.01 2.99 20.48 3.58 20.78C3.87 20.93 4.23 21.02 4.84 21.07C5.47 21.12 6.27 21.13 7.4 21.13H16.6C17.74 21.13 18.53 21.12 19.16 21.07C19.77 21.02 20.14 20.93 20.42 20.78C21.01 20.48 21.49 20.01 21.79 19.42C21.93 19.14 22.02 18.77 22.07 18.16C22.13 17.53 22.13 16.73 22.13 15.6V10.15C22.13 9.02 22.13 8.22 22.07 7.59C22.02 6.98 21.93 6.61 21.79 6.33C21.49 5.74 21.01 5.27 20.42 4.97C20.14 4.82 19.77 4.73 19.16 4.68C18.53 4.63 17.74 4.63 16.6 4.63H7.4Z"
    }), C[4] = s, C[5] = r, C[6] = l, C[7] = c, C[8] = o, C[9] = d, C[10] = u, C[11] = h, C[12] = m, C[13] = f, C[14] = p) : (s = C[4], r = C[5], l = C[6], c = C[7], o = C[8], d = C[9], u = C[10], h = C[11], m = C[12], f = C[13], p = C[14]), C[15] !== e || C[16] !== a || C[17] !== i ? (g = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [a, i, c, o, d, u, h, m, f, p, s, r, l]
    }), C[15] = e, C[16] = a, C[17] = i, C[18] = g) : g = C[18], g
  }
  a._isSVG = !0, e.s(["default", 0, a])
}, 44743, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function a(e) {
    let a, i, s, r, l = (0, n.c)(9);
    return l[0] !== e.title ? (a = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), l[0] = e.title, l[1] = a) : a = l[1], l[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), l[2] = e.children, l[3] = i) : i = l[3], l[4] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.5 3.13C13.36 3.13 15.84 4.76 17.06 7.14C17.21 7.13 17.35 7.13 17.5 7.13C21.02 7.13 23.87 9.98 23.88 13.5C23.87 17.02 21.02 19.88 17.5 19.88C17.43 19.88 17.36 19.87 17.29 19.87C17.26 19.87 17.22 19.88 17.19 19.88H5.19C5.16 19.88 5.14 19.87 5.12 19.87C5.08 19.87 5.04 19.88 5 19.88C2.31 19.88 0.13 17.69 0.13 15C0.13 12.97 1.36 11.23 3.13 10.5C3.13 6.43 6.43 3.13 10.5 3.13ZM10.5 4.88C7.39 4.88 4.88 7.39 4.88 10.5L4.88 10.77C4.89 10.86 4.89 10.95 4.9 11.04C4.94 11.47 4.66 11.86 4.24 11.97C2.88 12.31 1.88 13.54 1.88 15L1.88 15.16C1.96 16.81 3.33 18.13 5 18.13C5.04 18.13 5.08 18.12 5.15 18.12C5.19 18.12 5.24 18.12 5.28 18.13H17.05C17.11 18.12 17.17 18.11 17.24 18.12C17.34 18.12 17.42 18.13 17.5 18.13C19.97 18.13 22 16.18 22.12 13.74L22.13 13.5C22.12 10.95 20.05 8.88 17.5 8.88C17.22 8.88 16.95 8.9 16.69 8.95C16.28 9.02 15.88 8.8 15.72 8.41C14.89 6.34 12.87 4.88 10.5 4.88Z"
    }), l[4] = s) : s = l[4], l[5] !== e || l[6] !== a || l[7] !== i ? (r = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [a, i, s]
    }), l[5] = e, l[6] = a, l[7] = i, l[8] = r) : r = l[8], r
  }
  a._isSVG = !0, e.s(["default", 0, a])
}, 762534, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function a(e) {
    let a, i, s, r, l, c = (0, n.c)(10);
    return c[0] !== e.title ? (a = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), c[0] = e.title, c[1] = a) : a = c[1], c[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), c[2] = e.children, c[3] = i) : i = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)("path", {
      d: "M10.94 4.44C11.53 3.85 12.47 3.85 13.06 4.44C13.65 5.03 13.65 5.97 13.06 6.56C12.47 7.15 11.53 7.15 10.94 6.56C10.35 5.97 10.35 5.03 10.94 4.44Z"
    }), r = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 0.13C16.07 0.13 19.37 3.43 19.37 7.5C19.37 10.15 17.97 12.48 15.87 13.77L15.87 19.9L15.87 20.01C15.84 20.27 15.73 20.51 15.54 20.69L12.79 23.45L12.71 23.52C12.26 23.88 11.61 23.85 11.2 23.44L8.45 20.7C8.24 20.48 8.12 20.2 8.12 19.9V18.14L8.26 18L8.12 17.86V15.14L8.26 15L8.12 14.86V13.78C6.02 12.48 4.62 10.16 4.62 7.5C4.62 3.43 7.92 0.13 12 0.13ZM12 1.88C8.89 1.88 6.37 4.4 6.37 7.5C6.37 9.67 7.6 11.55 9.4 12.49L9.87 12.74L9.87 13.27V14.14L10.74 15L9.87 15.86V17.14L10.74 18L9.87 18.86V19.64L12 21.77L14.12 19.64V12.74L14.59 12.49C16.39 11.55 17.62 9.67 17.62 7.5C17.62 4.4 15.1 1.88 12 1.88Z"
    }), c[4] = s, c[5] = r) : (s = c[4], r = c[5]), c[6] !== e || c[7] !== a || c[8] !== i ? (l = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [a, i, s, r]
    }), c[6] = e, c[7] = a, c[8] = i, c[9] = l) : l = c[9], l
  }
  a._isSVG = !0, e.s(["default", 0, a])
}]);

//# debugId=f8d37f9b-e1da-bd05-81e0-14ef32f9c047
//# sourceMappingURL=2kh2hqqey-e4c.js.map