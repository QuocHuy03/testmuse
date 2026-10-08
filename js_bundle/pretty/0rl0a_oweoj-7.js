;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "0e16eee6-cd2f-5ef7-9744-4866c58d530f")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 429153, e => {
  "use strict";
  var n = e.i(984416),
    t = e.i(722099),
    r = e.i(519172),
    o = e.i(848048),
    l = e.i(281539),
    a = e.i(288119),
    s = e.i(502538),
    i = e.i(355300),
    c = e.i(849490),
    u = e.i(976834),
    d = e.i(43243),
    p = e.i(964924);
  e.s(["HatchApiKeyLink", 0, function(e) {
    let m, h, y, f, C, _, k, g, b, v, w, S, T, x, N, E, I, A = (0, t.c)(60),
      {
        href: M,
        children: L
      } = e,
      [R, O] = (0, r.useState)(null);
    A[0] !== M ? (m = (0, a.getApiKeyServiceName)(M), A[0] = M, A[1] = m) : m = A[1];
    let P = m,
      H = P ?? "service";
    A[2] !== M || A[3] !== P ? (h = (0, u.parseConnectSpecsFromHref)(M, P), A[2] = M, A[3] = P, A[4] = h) : h = A[4];
    let {
      apiKeySpec: j,
      dynamicSpec: K
    } = h, {
      skillInfo: D,
      iconUrl: Q,
      displayName: F,
      isPending: q
    } = (0, c.useConnectorSkillInfo)(H), U = (0, d.useConnectorSessionId)(), B = P ?? "", G = P ?? "";
    A[5] !== G ? (y = {
      third_party_connector_type: G,
      third_party_connection_action: "connect"
    }, A[5] = G, A[6] = y) : y = A[6], A[7] !== B || A[8] !== y ? (f = {
      eventName: l.HatchClickEvent.API_KEY_LINK_CLICK,
      actionTarget: "api_key_link",
      actionType: "click",
      thirdPartyConnectorType: B,
      thirdPartyConnectionAction: "connect",
      metadata: y
    }, A[7] = B, A[8] = y, A[9] = f) : f = A[9];
    let z = f,
      {
        ref: W,
        onClick: V
      } = (0, o.useTrackedClickRef)(z),
      $ = (0, r.useRef)(R);
    A[10] !== R ? (C = () => {
      $.current = R
    }, _ = [R], A[10] = R, A[11] = C, A[12] = _) : (C = A[11], _ = A[12]), (0, r.useEffect)(C, _), A[13] !== q || A[14] !== V || A[15] !== H ? (k = () => {
      V(), (0, p.startConnectorAuthTrace)({
        provider: H,
        entryPoint: "chat_inline_link"
      }), (0, p.noteConnectorConsentSheetLoading)(H, {
        needsSkillsFetch: q
      }), (0, p.noteConnectorAuthTypeResolved)(H, {
        authType: "api_key"
      }), O("consent")
    }, A[13] = q, A[14] = V, A[15] = H, A[16] = k) : k = A[16];
    let Y = k;
    A[17] !== H ? (g = () => {
      (0, p.cancelConnectorAuth)(H, "api-key" === $.current ? "credential_dismissed" : "consent_dismissed"), O(null)
    }, A[17] = H, A[18] = g) : g = A[18];
    let Z = g;
    A[19] !== Y ? (b = e => {
      e.preventDefault(), Y()
    }, A[19] = Y, A[20] = b) : b = A[20];
    let J = b;
    A[21] !== R || A[22] !== q || A[23] !== H ? (v = () => {
      null == R || q || (0, p.noteConnectorConsentSheetLoaded)(H)
    }, w = [R, q, H], A[21] = R, A[22] = q, A[23] = H, A[24] = v, A[25] = w) : (v = A[24], w = A[25]), (0, r.useEffect)(v, w);
    let X = L ?? `Connect to ${F}`;
    A[26] !== Y ? (S = e => {
      ("Enter" === e.key || " " === e.key) && (e.preventDefault(), Y())
    }, A[26] = Y, A[27] = S) : S = A[27], A[28] !== X || A[29] !== J || A[30] !== W || A[31] !== S ? (T = (0, n.jsx)("span", {
      ref: W,
      role: "button",
      tabIndex: 0,
      className: "cursor-pointer text-[color:var(--hatch-accent)] hover:underline",
      onClick: J,
      onKeyDown: S,
      children: X
    }), A[28] = X, A[29] = J, A[30] = W, A[31] = S, A[32] = T) : T = A[32];
    let ee = "consent" === R,
      en = null != D,
      et = D?.description ?? null,
      er = D?.consent_screen,
      eo = null != j || null != K;
    A[33] !== H ? (x = () => {
      (0, p.noteConnectorConsentAccepted)(H), (0, p.noteConnectorAuthMethodStarted)(H, {
        authType: "api_key"
      }), O("api-key")
    }, A[33] = H, A[34] = x) : x = A[34], A[35] !== Z || A[36] !== F || A[37] !== Q || A[38] !== q || A[39] !== H || A[40] !== ee || A[41] !== en || A[42] !== et || A[43] !== er || A[44] !== eo || A[45] !== x ? (N = (0, n.jsx)(i.HatchConnectorConsentDialog, {
      isOpen: ee,
      serviceName: H,
      displayName: F,
      hasSkillMatch: en,
      iconUrl: Q,
      description: et,
      consentScreen: er,
      isCustomConnector: eo,
      connectDisabled: q,
      onConnect: x,
      onCancel: Z
    }), A[35] = Z, A[36] = F, A[37] = Q, A[38] = q, A[39] = H, A[40] = ee, A[41] = en, A[42] = et, A[43] = er, A[44] = eo, A[45] = x, A[46] = N) : N = A[46];
    let el = "api-key" === R,
      ea = null != j || null != K;
    return A[47] !== j || A[48] !== Z || A[49] !== K || A[50] !== Q || A[51] !== H || A[52] !== U || A[53] !== el || A[54] !== ea ? (E = (0, n.jsx)(s.HatchApiKeyDialog, {
      isOpen: el,
      serviceName: H,
      iconUrl: Q,
      dynamicSpec: K,
      apiKeySpec: j,
      isCustomConnector: ea,
      onClose: Z,
      sessionId: U
    }), A[47] = j, A[48] = Z, A[49] = K, A[50] = Q, A[51] = H, A[52] = U, A[53] = el, A[54] = ea, A[55] = E) : E = A[55], A[56] !== T || A[57] !== N || A[58] !== E ? (I = (0, n.jsxs)(n.Fragment, {
      children: [T, N, E]
    }), A[56] = T, A[57] = N, A[58] = E, A[59] = I) : I = A[59], I
  }])
}, 820646, e => {
  "use strict";
  var n = e.i(984416),
    t = e.i(722099),
    r = e.i(519172),
    o = e.i(848048),
    l = e.i(813280),
    a = e.i(281539),
    s = e.i(863641),
    i = e.i(315882);

  function c() {
    return (0, i.createHatchConnectorDeepLinkLazy)()
  }
  e.s(["HatchConnectorDeepLinkBoundary", 0, function(e) {
    let u, d, p, m, h, y, f, C, _, k, g, b, v, w = (0, t.c)(47),
      {
        action: S,
        id: T,
        ariaLabel: x,
        className: N,
        children: E,
        deferPrewarm: I
      } = e,
      A = void 0 !== I && I,
      [M, L] = (0, r.useState)(i.createHatchConnectorDeepLinkLazy),
      [R, O] = (0, r.useState)(!1),
      [P, H] = (0, r.useState)(null),
      j = (0, r.useRef)(null),
      K = "connect" === S ? a.HatchClickEvent.CONNECTOR_CONNECT_LINK_CLICK : "add_account" === S ? a.HatchClickEvent.CONNECTOR_ADD_ACCOUNT_LINK_CLICK : a.HatchClickEvent.CONNECTOR_DISCONNECT_LINK_CLICK,
      D = "connect" === S ? "connector_connect_link" : "add_account" === S ? "connector_add_account_link" : "connector_disconnect_link";
    w[0] !== S ? (u = "add_account" !== S ? {
      thirdPartyConnectionAction: S
    } : {}, w[0] = S, w[1] = u) : u = w[1], w[2] !== S || w[3] !== T ? (d = {
      third_party_connector_type: T,
      third_party_connection_action: S,
      connector_link_source: "fallback"
    }, w[2] = S, w[3] = T, w[4] = d) : d = w[4], w[5] !== T || w[6] !== K || w[7] !== D || w[8] !== u || w[9] !== d ? (p = {
      eventName: K,
      actionTarget: D,
      actionType: "click",
      thirdPartyConnectorType: T,
      ...u,
      metadata: d
    }, w[5] = T, w[6] = K, w[7] = D, w[8] = u, w[9] = d, w[10] = p) : p = w[10];
    let Q = p,
      {
        ref: F,
        onClick: q
      } = (0, o.useTrackedClickRef)(Q);
    w[11] !== S || w[12] !== q ? (m = () => {
      q(), j.current?.close();
      let e = "disconnect" !== S ? window.open("about:blank", "_blank") : null;
      j.current = e, L(c), H(n => ({
        nonce: (n?.nonce ?? 0) + 1,
        tab: e
      }))
    }, w[11] = S, w[12] = q, w[13] = m) : m = w[13];
    let U = m;
    w[14] !== S || w[15] !== T ? (h = e => {
      ("ChunkLoadError" === e.name || /Failed to load chunk/.test(e.message)) && (0, s.captureHatchMessage)(s.HATCH_SENTRY_SURFACES.CHAT_CONNECTOR_LINK, "connector deep link chunk failed to load", {
        level: "warning",
        extra: {
          connectorId: T,
          action: S,
          errorName: e.name,
          errorMessage: e.message
        }
      })
    }, w[14] = S, w[15] = T, w[16] = h) : h = w[16];
    let B = h,
      G = N ?? "inline cursor-pointer text-[color:var(--hatch-accent)] hover:underline";
    w[17] === Symbol.for("react.memo_cache_sentinel") ? (y = () => O(!0), f = () => O(!0), w[17] = y, w[18] = f) : (y = w[17], f = w[18]), w[19] !== x || w[20] !== E || w[21] !== U || w[22] !== F || w[23] !== G ? (C = (0, n.jsx)("button", {
      ref: F,
      type: "button",
      "aria-label": x,
      className: G,
      onPointerEnter: y,
      onFocus: f,
      onClick: U,
      children: E
    }), w[19] = x, w[20] = E, w[21] = U, w[22] = F, w[23] = G, w[24] = C) : C = w[24];
    let z = C;
    w[25] !== z ? (_ = () => z, w[25] = z, w[26] = _) : _ = w[26];
    let W = P?.nonce ?? 0;
    w[27] !== W ? (k = [W], w[27] = W, w[28] = k) : k = w[28];
    let V = P ?? void 0;
    return w[29] !== M || w[30] !== S || w[31] !== x || w[32] !== E || w[33] !== N || w[34] !== A || w[35] !== T || w[36] !== R || w[37] !== V ? (g = (0, n.jsx)(M, {
      action: S,
      id: T,
      ariaLabel: x,
      className: N,
      deferPrewarm: A,
      prewarmRequested: R,
      deferredClick: V,
      children: E
    }), w[29] = M, w[30] = S, w[31] = x, w[32] = E, w[33] = N, w[34] = A, w[35] = T, w[36] = R, w[37] = V, w[38] = g) : g = w[38], w[39] !== z || w[40] !== g ? (b = (0, n.jsx)(r.Suspense, {
      fallback: z,
      children: g
    }), w[39] = z, w[40] = g, w[41] = b) : b = w[41], w[42] !== B || w[43] !== _ || w[44] !== k || w[45] !== b ? (v = (0, n.jsx)(l.EctoErrorBoundary, {
      surface: s.HATCH_SENTRY_SURFACES.CHAT_CONNECTOR_LINK,
      fallback: _,
      onError: B,
      resetKeys: k,
      children: b
    }), w[42] = B, w[43] = _, w[44] = k, w[45] = b, w[46] = v) : v = w[46], v
  }])
}, 140954, 792003, e => {
  "use strict";
  var n = e.i(984416),
    t = e.i(722099),
    r = e.i(519172),
    o = e.i(345717),
    l = e.i(848048),
    a = e.i(281539),
    s = e.i(666750),
    i = e.i(288119),
    c = e.i(355300),
    u = e.i(175286),
    d = e.i(43243),
    p = e.i(359783),
    m = e.i(47247),
    h = e.i(849490),
    y = e.i(606123),
    f = e.i(820646);
  let C = (0, p.createClientLogger)("consent_link");

  function _({
    href: e,
    children: t
  }) {
    let p = o.fbs._("Failed to connect. Please try again.", null, {
        hk: "3hTYcW"
      }),
      [f, k] = (0, r.useState)(!1),
      [g, b] = (0, r.useState)(!1),
      [v, w] = (0, r.useState)(null),
      S = (0, i.getConsentServiceName)(e) ?? "service",
      T = (0, s.useHatchConnection)(),
      {
        skillInfo: x,
        iconUrl: N,
        displayName: E
      } = (0, h.useConnectorSkillInfo)(S),
      {
        sendRequest: I
      } = (0, u.useHatchRpc)(),
      A = o.fbs._("Couldn't connect {displayName}. Please try again.", [o.fbs._param("displayName", E)], {
        hk: "4zSC26"
      }),
      M = (0, d.useConnectorSessionId)(),
      L = (0, r.useMemo)(() => ({
        eventName: a.HatchClickEvent.CONSENT_LINK_CLICK,
        actionTarget: "consent_link",
        actionType: "click"
      }), []),
      {
        ref: R,
        onClick: O
      } = (0, l.useTrackedClickRef)(L),
      P = (0, r.useCallback)(e => {
        e.preventDefault(), O(), w(null), k(!0)
      }, [O]),
      H = (0, r.useCallback)(async () => {
        if (w(null), "connected" !== T.phase) return void w((0, y.getConnectorConnectErrorMessage)(A));
        b(!0);
        try {
          await I("consent_auth.callback", {
            provider: S,
            ...null != M && {
              session_id: M
            }
          }), k(!1)
        } catch (e) {
          C.error({
            error: e instanceof Error ? e : Error(String(e)),
            provider: S
          }, "Failed to submit consent auth callback"), w((0, y.getConnectorConnectErrorMessage)(A)), m.toast.error(p)
        } finally {
          b(!1)
        }
      }, [A, p, T.phase, I, S, M]),
      j = t ?? `Connect to ${E}`;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("span", {
        ref: R,
        role: "button",
        tabIndex: 0,
        className: "cursor-pointer text-[color:var(--hatch-accent)] hover:underline",
        onClick: P,
        onKeyDown: e => {
          ("Enter" === e.key || " " === e.key) && (e.preventDefault(), O(), w(null), k(!0))
        },
        children: j
      }), (0, n.jsx)(c.HatchConnectorConsentDialog, {
        isOpen: f,
        serviceName: S,
        displayName: E,
        hasSkillMatch: null != x,
        iconUrl: N,
        description: x?.description ?? null,
        consentScreen: x?.consent_screen,
        connectDisabled: g,
        errorMessage: v,
        onRetry: () => void H(),
        retryDisabled: "connected" !== T.phase,
        onConnect: () => void H(),
        onCancel: () => {
          w(null), k(!1)
        }
      })]
    })
  }
  e.s(["HatchConsentLink", 0, function(e) {
    let r, l = (0, t.c)(7),
      {
        href: a,
        children: s
      } = e;
    if ("meta_business" === (0, i.getConsentServiceName)(a)) {
      let e, t;
      return l[0] !== s ? (e = s ?? o.fbs._("Connect to Meta Business Manager", null, {
        hk: "zNLuI"
      }), l[0] = s, l[1] = e) : e = l[1], l[2] !== e ? (t = (0, n.jsx)(f.HatchConnectorDeepLinkBoundary, {
        action: "connect",
        id: "meta_business",
        children: e
      }), l[2] = e, l[3] = t) : t = l[3], t
    }
    return l[4] !== s || l[5] !== a ? (r = (0, n.jsx)(_, {
      href: a,
      children: s
    }), l[4] = s, l[5] = a, l[6] = r) : r = l[6], r
  }], 140954);
  var k = e.i(325814),
    g = e.i(420297),
    b = e.i(440802),
    v = e.i(938981),
    w = e.i(430116),
    S = e.i(823173),
    T = e.i(210338),
    x = e.i(756710),
    N = e.i(976745),
    E = e.i(762534),
    I = e.i(964924),
    A = e.i(627763);
  let M = (0, p.createClientLogger)("password_dialog"),
    L = E.default,
    R = T.default;

  function O({
    isOpen: e,
    serviceName: t,
    iconUrl: a,
    onClose: s,
    sessionId: i
  }) {
    let c = (0, r.useMemo)(() => (0, A.getPasswordConnectorConfig)(t), [t]),
      [d, p] = (0, r.useState)(() => (0, A.buildEmptyPasswordConnectorFormValues)(t)),
      [m, h] = (0, r.useState)(!1),
      [y, f] = (0, r.useState)(null),
      [C, _] = (0, r.useState)({}),
      T = (0, r.useRef)(null),
      {
        sendRequest: E
      } = (0, u.useHatchRpc)(),
      P = (0, r.useMemo)(() => ({
        eventName: S.HatchImpressionEvent.PASSWORD_DIALOG_IMPRESSION,
        actionTarget: "password_dialog",
        thirdPartyConnectorType: t,
        metadata: {
          third_party_connector_type: t
        }
      }), [t]),
      {
        ref: H
      } = (0, l.useTrackedImpressionRef)(P),
      j = (0, r.useMemo)(() => ({
        eventName: "password_submit_click",
        actionTarget: "password_dialog_submit",
        actionType: "click",
        thirdPartyConnectorType: t,
        thirdPartyConnectionAction: "submit_credentials",
        metadata: {
          third_party_connector_type: t,
          third_party_connection_action: "submit_credentials"
        }
      }), [t]),
      {
        ref: K,
        onClick: D
      } = (0, l.useTrackedClickRef)(j);
    (0, r.useEffect)(() => {
      e && (p((0, A.buildEmptyPasswordConnectorFormValues)(t)), f(null), h(!1), _({}), requestAnimationFrame(() => {
        T.current?.focus()
      }))
    }, [e, t]);
    let Q = (0, r.useCallback)(e => {
        _(n => ({
          ...n,
          [e]: !n[e]
        }))
      }, []),
      F = (0, r.useCallback)((e, n) => {
        p(t => ({
          ...t,
          [e]: n
        }))
      }, []),
      q = o.fbs._("This connector is not available in the password flow yet.", null, {
        hk: "IPCQw"
      }),
      U = o.fbs._("Please complete the required fields and check any port values.", null, {
        hk: "1H6BYk"
      }),
      B = o.fbs._("Couldn't save your credentials right now. Please try again.", null, {
        hk: "UBRCM"
      }),
      G = (0, r.useCallback)(async () => {
        if (null == c) return void f(q);
        D(), (0, I.noteConnectorCredentialSubmitted)(t), h(!0), f(null);
        try {
          let e = (0, A.buildPasswordConnectorSubmission)(t, d);
          if (null == e) return void f(U);
          await E("username_password_auth.callback", {
            provider: e.provider,
            username: e.username,
            password: e.password,
            ...e.extraFields ?? {},
            ...null != i && {
              session_id: i
            }
          }), (0, I.succeedConnectorAuth)(t), s()
        } catch (e) {
          M.error({
            error: e instanceof Error ? e : Error(String(e)),
            provider: t
          }, "Failed to submit credentials"), f(B)
        } finally {
          h(!1)
        }
      }, [c, d, t, E, s, D, i, q, U, B]),
      z = (0, r.useCallback)(e => {
        "Enter" !== e.key || m || (e.preventDefault(), G())
      }, [G, m]),
      W = c?.displayName ?? t.split(/[-_]/).map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" "),
      V = "imap_email" === t,
      $ = null == c || c.fields.some(e => !e.optional && 0 === (d[e.name]?.trim() ?? "").length) || m,
      Y = c?.fields.filter(e => !e.name.endsWith("_port")) ?? [],
      Z = c?.fields.filter(e => e.name.endsWith("_port")) ?? [],
      J = "imap_email" === t ? R : L;
    return (0, n.jsx)(k.Dialog, {
      open: e,
      onOpenChange: e => {
        e || ((0, I.cancelConnectorAuth)(t, "credential_dismissed"), s())
      },
      children: (0, n.jsxs)(k.DialogContent, {
        ref: H,
        header: (0, n.jsx)(k.DialogHeader, {
          children: (0, n.jsx)(k.DialogTitle, {
            children: o.fbt._("Connect to {serviceName}", [o.fbt._param("serviceName", W)], {
              hk: "4vQe3A"
            })
          })
        }),
        children: [(0, n.jsxs)("div", {
          className: "flex flex-col items-center gap-3 pb-2",
          children: [(0, n.jsx)("div", {
            className: "bg-fill-secondary flex items-center justify-center overflow-hidden rounded-full p-3",
            children: null != a ? (0, n.jsx)("img", {
              src: a,
              alt: "",
              width: 32,
              height: 32,
              className: "rounded-4"
            }) : (0, n.jsx)(J, {
              size: 36
            })
          }), (0, n.jsx)(w.Text, {
            variant: "title-3-emphasized",
            children: W
          }), (0, n.jsx)(w.Text, {
            variant: "subheadline",
            color: "secondary",
            className: V ? "max-w-sm text-center" : void 0,
            children: c?.credentialsSubtitle ?? o.fbt._("Enter your credentials to connect", null, {
              hk: "1eKb0u"
            })
          })]
        }), (0, n.jsxs)("div", {
          className: V ? "mt-4 flex flex-col gap-4" : "mt-2 flex flex-col gap-3",
          children: [Y.map((e, t) => {
            let r = "password" === e.type,
              l = r && !0 === C[e.name];
            return (0, n.jsx)(v.InputField, {
              ref: 0 === t ? T : void 0,
              label: e.label,
              placeholder: e.placeholder,
              type: r && l ? "text" : e.type,
              autoComplete: e.autoComplete,
              inputMode: "number" === e.type ? "numeric" : void 0,
              className: "bg-bg-primary",
              value: d[e.name] ?? "",
              onChange: n => F(e.name, n.target.value),
              onKeyDown: z,
              "data-testid": `hatch-password-dialog-${e.name}-input`,
              endIcon: r ? (0, n.jsx)(b.IconButton, {
                type: "button",
                variant: "borderless",
                size: "24",
                icon: l ? N.default : x.default,
                label: l ? o.fbs._("Hide password", null, {
                  hk: "kKRa4"
                }) : o.fbs._("Show password", null, {
                  hk: "4jZqH4"
                }),
                "aria-pressed": l,
                onClick: () => Q(e.name),
                "data-testid": `hatch-password-dialog-${e.name}-visibility-toggle`
              }) : void 0
            }, e.name)
          }), Z.length > 0 && (0, n.jsx)("div", {
            className: V ? "grid grid-cols-2 gap-4" : "grid grid-cols-2 gap-3",
            children: Z.map(e => (0, n.jsx)(v.InputField, {
              label: e.label,
              placeholder: e.placeholder,
              type: e.type,
              autoComplete: e.autoComplete,
              inputMode: "numeric",
              className: "bg-bg-primary",
              value: d[e.name] ?? "",
              onChange: n => F(e.name, n.target.value),
              onKeyDown: z,
              "data-testid": `hatch-password-dialog-${e.name}-input`
            }, e.name))
          })]
        }), c?.helperText != null && (0, n.jsx)(w.Text, {
          variant: "footnote",
          className: V ? "mt-3" : "mt-2",
          children: c.helperText
        }), null != y && (0, n.jsx)(w.Text, {
          variant: "footnote",
          color: "destructive",
          className: V ? "mt-3" : "mt-2",
          children: y
        }), (0, n.jsx)(g.Button, {
          ref: K,
          label: m ? o.fbs._("Connecting…", null, {
            hk: "3Jvbcy"
          }) : o.fbs._("Submit", null, {
            hk: "BEsTz"
          }),
          variant: "primary",
          size: "36",
          fullWidth: !0,
          onClick: () => void G(),
          disabled: $,
          className: V ? "mt-5" : "mt-4"
        })]
      })
    })
  }
  e.s(["HatchPasswordLink", 0, function(e) {
    let o, a, s, u, p, m, y, f, C, _, k, g, b = (0, t.c)(36),
      {
        href: v,
        children: w
      } = e,
      [S, T] = (0, r.useState)(null);
    b[0] !== v ? (o = (0, i.getPasswordServiceName)(v), b[0] = v, b[1] = o) : o = b[1];
    let x = o,
      N = x ?? "service",
      {
        skillInfo: E,
        iconUrl: I,
        displayName: A
      } = (0, h.useConnectorSkillInfo)(N),
      M = (0, d.useConnectorSessionId)(),
      L = x ?? "",
      R = x ?? "";
    b[2] !== R ? (a = {
      third_party_connector_type: R,
      third_party_connection_action: "connect"
    }, b[2] = R, b[3] = a) : a = b[3], b[4] !== L || b[5] !== a ? (s = {
      eventName: "password_link_click",
      actionTarget: "password_link",
      actionType: "click",
      thirdPartyConnectorType: L,
      thirdPartyConnectionAction: "connect",
      metadata: a
    }, b[4] = L, b[5] = a, b[6] = s) : s = b[6];
    let P = s,
      {
        ref: H,
        onClick: j
      } = (0, l.useTrackedClickRef)(P);
    b[7] !== j ? (u = e => {
      e.preventDefault(), j(), T("consent")
    }, b[7] = j, b[8] = u) : u = b[8];
    let K = u,
      D = w ?? `Connect to ${A}`;
    b[9] !== j ? (p = e => {
      ("Enter" === e.key || " " === e.key) && (e.preventDefault(), j(), T("consent"))
    }, b[9] = j, b[10] = p) : p = b[10], b[11] !== D || b[12] !== K || b[13] !== H || b[14] !== p ? (m = (0, n.jsx)("span", {
      ref: H,
      role: "button",
      tabIndex: 0,
      className: "cursor-pointer text-[color:var(--hatch-accent)] hover:underline",
      onClick: K,
      onKeyDown: p,
      children: D
    }), b[11] = D, b[12] = K, b[13] = H, b[14] = p, b[15] = m) : m = b[15];
    let Q = "consent" === S,
      F = null != E,
      q = E?.description ?? null,
      U = E?.consent_screen;
    b[16] === Symbol.for("react.memo_cache_sentinel") ? (y = () => T("password"), f = () => T(null), b[16] = y, b[17] = f) : (y = b[16], f = b[17]), b[18] !== A || b[19] !== I || b[20] !== N || b[21] !== F || b[22] !== q || b[23] !== U || b[24] !== Q ? (C = (0, n.jsx)(c.HatchConnectorConsentDialog, {
      isOpen: Q,
      serviceName: N,
      displayName: A,
      hasSkillMatch: F,
      iconUrl: I,
      description: q,
      consentScreen: U,
      onConnect: y,
      onCancel: f
    }), b[18] = A, b[19] = I, b[20] = N, b[21] = F, b[22] = q, b[23] = U, b[24] = Q, b[25] = C) : C = b[25];
    let B = "password" === S;
    return b[26] === Symbol.for("react.memo_cache_sentinel") ? (_ = () => T(null), b[26] = _) : _ = b[26], b[27] !== I || b[28] !== N || b[29] !== M || b[30] !== B ? (k = (0, n.jsx)(O, {
      isOpen: B,
      serviceName: N,
      iconUrl: I,
      onClose: _,
      sessionId: M
    }), b[27] = I, b[28] = N, b[29] = M, b[30] = B, b[31] = k) : k = b[31], b[32] !== C || b[33] !== k || b[34] !== m ? (g = (0, n.jsxs)(n.Fragment, {
      children: [m, C, k]
    }), b[32] = C, b[33] = k, b[34] = m, b[35] = g) : g = b[35], g
  }], 792003)
}, 334186, e => {
  "use strict";
  var n = e.i(93061),
    t = e.i(359783),
    r = e.i(863641),
    o = e.i(288119),
    l = e.i(424379),
    a = e.i(790170);
  let s = (0, t.createClientLogger)("connectorsQueries"),
    i = {
      facebook_cli: "facebook",
      messenger_read: "messenger",
      stripe_link: "stripe-link",
      whatsapp_companion: "whatsapp"
    };

  function c(e) {
    return i[e] ?? e
  }
  let u = ["allow", "ask", "deny"],
    d = new Set(["allow", "ask", "deny"]),
    p = new Map([
      ["storage", n.ConsentBulletIcon.STORAGE],
      ["data_types", n.ConsentBulletIcon.DATA_TYPES],
      ["caution", n.ConsentBulletIcon.CAUTION],
      ["info", n.ConsentBulletIcon.INFO],
      ["unspecified", n.ConsentBulletIcon.UNSPECIFIED]
    ]);

  function m(e) {
    return null == e || "object" != typeof e || Array.isArray(e) ? null : e
  }

  function h(e) {
    return "string" == typeof e && e.length > 0 ? e : null
  }

  function y(e) {
    if ("string" != typeof e) return null;
    let n = e.trim();
    return n.length > 0 ? n : null
  }

  function f(e) {
    let t = m(e),
      r = h(t?.id);
    if (null == t || null == r) return null;
    let o = "connected" === t.state || "needs_reauth" === t.state || "coming_soon" === t.state ? t.state : "disconnected";
    return {
      id: r,
      name: h(t.name) ?? r,
      description: h(t.description) ?? "",
      iconKey: y(t.icon) ?? r,
      iconUrl: y(t.icon_url),
      supportsMultipleAccounts: !0 === t.supports_multiple_accounts,
      isCustom: !0 === t.is_custom,
      state: o,
      connected: "connected" === o,
      consent: function(e) {
        let t = m(e);
        if (null == t) return null;
        let r = y(m(t.account_center)?.consent_url),
          o = null != r ? {
            consentUrl: r
          } : null,
          l = function(e) {
            let t = m(e);
            if (null == t) return null;
            let r = [];
            if (Array.isArray(t.bullets))
              for (let e of t.bullets) {
                let t = m(e),
                  o = t?.text;
                if ("string" != typeof o || 0 === o.trim().length) continue;
                let l = y(t?.title);
                r.push({
                  icon: function(e) {
                    let t = h(e);
                    return null == t ? n.ConsentBulletIcon.UNSPECIFIED : p.get(t) ?? n.ConsentBulletIcon.UNSPECIFIED
                  }(t?.icon),
                  ...null != l ? {
                    title: l
                  } : {},
                  text: o
                })
              }
            let o = Array.isArray(t.footer_paragraphs) ? t.footer_paragraphs.filter(e => "string" == typeof e && e.trim().length > 0) : [];
            return 0 === r.length && 0 === o.length ? null : {
              bullets: r,
              footer_paragraphs: o
            }
          }(t.hatch);
        return null == o && null == l ? null : {
          accountCenter: o,
          hatch: l
        }
      }(t.consent)
    }
  }

  function C(e) {
    let n = m(e),
      t = n?.connectors;
    if (!Array.isArray(t)) throw Error("GET /connectors returned an unexpected payload shape (connectors is not an array)");
    return {
      connectors: t.map(f).filter(e => null != e && (!(0, o.isRetiredConnectorAuthId)(e.id) || "connected" === e.state))
    }
  }
  let _ = new Set(["productivity", "social", "health", "business", "wallet", "connected", "custom"]);

  function k(e) {
    let n = m(e),
      t = h(n?.id),
      r = h(n?.title);
    return null != t && null != r && _.has(t) ? {
      id: t,
      title: r
    } : null
  }

  function g(e) {
    return Array.isArray(e) ? e.map(f).filter(e => null != e && (!(0, o.isRetiredConnectorAuthId)(e.id) || "connected" === e.state)) : []
  }
  let b = (0, a.createGatewayQuery)({
      id: "connectors.list",
      queryKey: e => l.settingsConnectorsQueryKeys.list(e.surface),
      noiseFn: async (e, n) => C(await e.sendRequest("connectors.list", {
        surface: n.surface
      })),
      invalidationKey: () => l.connectorsQueryKeys.all,
      staleTime: 5e3
    }),
    v = (0, a.createGatewayQuery)({
      id: "connectors.homepage",
      queryKey: e => l.settingsConnectorsQueryKeys.marketplaceHomepage(e.previewLimit),
      noiseFn: async (e, n) => (function(e) {
        let n = m(e);
        if (null == n || !Array.isArray(n.featured) || !Array.isArray(n.categories)) throw Error("GET /connectors/homepage returned an unexpected payload shape");
        let t = n.categories.flatMap(e => {
          let n = m(e),
            t = k(n);
          return null != t && Array.isArray(n?.connectors) ? [{
            ...t,
            connectors: g(n.connectors)
          }] : []
        });
        return {
          version: h(n.version) ?? "",
          featured: g(n.featured),
          categories: t,
          customCount: "number" == typeof n.custom_count && Number.isSafeInteger(n.custom_count) ? Math.max(0, n.custom_count) : 0
        }
      })(await e.sendRequest("connectors.homepage", {
        preview_limit: n.previewLimit
      })),
      invalidationKey: () => l.connectorsQueryKeys.all,
      staleTime: 5e3
    }),
    w = (0, a.createGatewayInfiniteQuery)({
      id: "connectors.list",
      queryKey: e => l.settingsConnectorsQueryKeys.marketplaceList(e.category, e.query),
      noiseFn: async (e, n, t) => {
        let r = null == t ? {
            limit: 50,
            ...null != n.category ? {
              category: n.category
            } : {},
            ...n.query.length > 0 ? {
              q: n.query
            } : {}
          } : {
            cursor: t
          },
          o = m(await e.sendRequest("connectors.list", r));
        if (null == o || !Array.isArray(o.connectors)) throw Error("Paged GET /connectors returned an unexpected payload shape");
        return {
          category: null == o.category ? null : k(o.category),
          featured: null == o.featured ? null : g(o.featured),
          connectors: g(o.connectors),
          nextCursor: y(o.next_cursor)
        }
      },
      initialPageParam: null,
      getNextPageParam: e => e.nextCursor ?? void 0,
      invalidationKey: () => l.connectorsQueryKeys.all,
      staleTime: 5e3
    }),
    S = (0, a.createGatewayQuery)({
      id: "connectors.permissions",
      queryKey: e => l.settingsConnectorsQueryKeys.permissions(e.id),
      noiseFn: async (e, n) => (function(e) {
        let n = m(e),
          t = m(n?.permissions) ?? n,
          o = t?.sections;
        if (!Array.isArray(o)) return {
          sections: []
        };
        let l = {
            droppedModeOptions: 0,
            emptyModeOptionLists: 0,
            unsupportedModeOptionLists: 0
          },
          a = {
            sections: o.map(e => (function(e, n) {
              let t = m(e);
              if (null == t) return null;
              let r = Array.isArray(t.groups) ? t.groups.map(e => (function(e, n) {
                let t = m(e);
                if (null == t) return null;
                let r = Array.isArray(t.methods) ? t.methods.map(e => {
                  var t, r;
                  let o, l, a;
                  return t = e, r = n, l = m(t), a = y(l?.key), null == l || null == a ? null : {
                    key: a,
                    mode: null != (o = h(l.mode)) && d.has(o) ? o : "deny",
                    modeOptions: function(e, n) {
                      if (!Array.isArray(e)) return [...u];
                      let t = [];
                      for (let r of e) {
                        let e = h(r);
                        if (null != e) {
                          if (!d.has(e)) {
                            n.droppedModeOptions += 1;
                            continue
                          }
                          t.includes(e) || t.push(e)
                        }
                      }
                      return t.length > 0 ? t : (0 === e.length ? n.emptyModeOptionLists += 1 : n.unsupportedModeOptionLists += 1, [...u])
                    }(l.mode_options, r),
                    modeSource: "user_override" === l.mode_source ? "user_override" : "default",
                    label: h(l.label) ?? a,
                    restricted: !0 === l.restricted
                  }
                }).filter(e => null != e) : [];
                return {
                  label: h(t.label) ?? "",
                  methods: r
                }
              })(e, n)).filter(e => null != e) : [];
              return {
                label: h(t.label) ?? "",
                groups: r
              }
            })(e, l)).filter(e => null != e)
          };
        return (l.droppedModeOptions > 0 || l.emptyModeOptionLists > 0 || l.unsupportedModeOptionLists > 0) && s.error({
          error: Error("Connector permissions included unusable mode options"),
          droppedModeOptions: l.droppedModeOptions,
          emptyModeOptionLists: l.emptyModeOptionLists,
          unsupportedModeOptionLists: l.unsupportedModeOptionLists,
          tags: (0, r.hatchSentryTags)(r.HATCH_SENTRY_SURFACES.SETTINGS_CONNECTORS)
        }, "Connector permissions included unusable mode options"), a
      })(await e.sendRequest("connectors.permissions", {
        id: n.id
      })),
      invalidationKey: () => l.connectorsQueryKeys.all,
      staleTime: 5e3
    });
  async function T(e, n, t) {
    let r = {
      id: c(n)
    };
    return null != t && t.length > 0 && (r.session_id = t),
      function(e) {
        let n = m(e),
          t = m(n?.action);
        if (null == t) return {
          ok: !1,
          reason: "no_action_object",
          rawType: null
        };
        let r = h(t.type);
        if (null == r) return {
          ok: !1,
          reason: "no_type",
          rawType: null
        };
        switch (r) {
          case "oauth": {
            let e = y(t.url);
            return null != e ? {
              ok: !0,
              action: {
                type: "oauth",
                url: e
              }
            } : {
              ok: !1,
              reason: "oauth_missing_url",
              rawType: r
            }
          }
          case "api_key":
            return {
              ok: !0, action: {
                type: "api_key"
              }
            };
          case "consent_only":
            return {
              ok: !0, action: {
                type: "consent_only"
              }
            };
          case "messenger":
            return {
              ok: !0, action: {
                type: "messenger"
              }
            };
          case "whatsapp":
            return {
              ok: !0, action: {
                type: "whatsapp"
              }
            };
          case "foa_auth":
            return {
              ok: !0, action: {
                type: "foa_auth"
              }
            };
          case "none":
            return {
              ok: !0, action: {
                type: "none"
              }
            };
          default:
            return {
              ok: !1, reason: "unknown_type", rawType: r
            }
        }
      }(await e("connectors.connect_info", r))
  }
  async function x(e, n, t, r) {
    let o, l = {
      id: n,
      method: t
    };
    null != r && r.length > 0 && (l.account_id = r);
    let a = m(await e("connectors.scope_link", l)),
      s = y(a?.link_url);
    if (null == s) return null;
    try {
      o = new URL(s)
    } catch {
      throw Error("connectors.scope_link returned an invalid link URL")
    }
    if ("https:" !== o.protocol || o.username.length > 0 || o.password.length > 0) throw Error(`connectors.scope_link returned an unsafe link (protocol=${o.protocol}, host=${o.hostname||"<none>"}, hasCredentials=${o.username.length>0||o.password.length>0})`);
    return s
  }
  async function N(e, n, t) {
    let r = {
      id: c(n)
    };
    return null != t && t.length > 0 && (r.session_id = t), f(await e("connectors.get", r))
  }
  e.s(["CONNECTORS_STALE_TIME_MS", 0, 5e3, "CONNECTOR_MARKETPLACE_PREVIEW_LIMIT", 0, 5, "connectorIdsMatch", 0, function(e, n) {
    let t = e => c(e).replace(/-/g, "_");
    return t(e) === t(n)
  }, "connectorMarketplaceHomepageQuery", 0, v, "connectorMarketplaceListQuery", 0, w, "connectorPermissionsQuery", 0, S, "connectorsListQuery", 0, b, "fetchConnectInfo", 0, T, "fetchConnector", 0, N, "fetchScopeLink", 0, x, "normalizeConnectorsList", 0, C, "resolveConnectorId", 0, c])
}, 387820, e => {
  "use strict";
  var n = e.i(722099),
    t = e.i(334186),
    r = e.i(488435);
  e.s(["connectorToSkillInfo", 0, function(e) {
    return {
      name: e.id,
      title: e.name,
      description: e.description,
      category: "uncategorized",
      connector_slug: e.id,
      auth_provider: e.id,
      icon_url: e.iconUrl,
      consent_screen: e.consent?.hatch ?? null,
      source: e.isCustom ? "custom" : void 0
    }
  }, "useHatchConnectorQuery", 0, function(e, o) {
    let l, a, s, i, c, u = (0, n.c)(11);
    u[0] !== o ? (l = void 0 === o ? {} : o, u[0] = o, u[1] = l) : l = u[1];
    let d = l;
    u[2] !== e ? (a = null == e ? "" : (0, t.resolveConnectorId)(e), u[2] = e, u[3] = a) : a = u[3];
    let p = a,
      {
        enabled: m
      } = d;
    u[4] === Symbol.for("react.memo_cache_sentinel") ? (s = {
      forceRefetchOnMount: !1
    }, u[4] = s) : s = u[4];
    let h = (0, r.useHatchConnectorsQuery)((void 0 === m || m) && p.length > 0, s);
    u[5] !== h.data || u[6] !== p ? (i = null == h.data ? void 0 : h.data.connectors.find(e => (0, t.connectorIdsMatch)(e.id, p)) ?? null, u[5] = h.data, u[6] = p, u[7] = i) : i = u[7];
    let y = i;
    return u[8] !== y || u[9] !== h ? (c = {
      ...h,
      data: y
    }, u[8] = y, u[9] = h, u[10] = c) : c = u[10], c
  }])
}, 488435, e => {
  "use strict";
  var n = e.i(722099),
    t = e.i(293760),
    r = e.i(849329),
    o = e.i(175286),
    l = e.i(14751),
    a = e.i(720756),
    s = e.i(334186);
  e.s(["useHatchConnectorMarketplaceHomepageQuery", 0, function(e) {
    let t, i, c, u = (0, n.c)(9),
      d = void 0 === e || e,
      {
        isReady: p,
        gatewayUrl: m
      } = (0, o.useHatchRpc)(),
      h = (0, a.useGatewayQueryContext)();
    return u[0] !== h ? (t = s.connectorMarketplaceHomepageQuery.queryOptions({
      previewLimit: s.CONNECTOR_MARKETPLACE_PREVIEW_LIMIT
    }, h), u[0] = h, u[1] = t) : t = u[1], u[2] !== d || u[3] !== m || u[4] !== p ? (i = d && (0, l.isMethodReadyForTransport)({
      method: "connectors.homepage",
      gatewayUrl: m,
      isWsReady: p
    }), u[2] = d, u[3] = m, u[4] = p, u[5] = i) : i = u[5], u[6] !== t || u[7] !== i ? (c = {
      ...t,
      enabled: i
    }, u[6] = t, u[7] = i, u[8] = c) : c = u[8], (0, r.useQuery)(c)
  }, "useHatchConnectorMarketplaceListQuery", 0, function(e, r) {
    let i, c, u, d, p = (0, n.c)(13),
      m = void 0 === r || r,
      {
        isReady: h,
        gatewayUrl: y
      } = (0, o.useHatchRpc)(),
      f = (0, a.useGatewayQueryContext)();
    return p[0] !== f || p[1] !== e ? (i = s.connectorMarketplaceListQuery.infiniteQueryOptions(e, f), p[0] = f, p[1] = e, p[2] = i) : i = p[2], p[3] !== e ? (c = (n, t) => {
      var r, o;
      let l;
      return (r = e.category, o = t?.queryKey, l = s.connectorMarketplaceListQuery.queryKey({
        category: r,
        query: ""
      }).length - 2, o?.[l] === r) ? n : void 0
    }, p[3] = e, p[4] = c) : c = p[4], p[5] !== m || p[6] !== y || p[7] !== h ? (u = m && (0, l.isMethodReadyForTransport)({
      method: "connectors.list",
      gatewayUrl: y,
      isWsReady: h
    }), p[5] = m, p[6] = y, p[7] = h, p[8] = u) : u = p[8], p[9] !== i || p[10] !== c || p[11] !== u ? (d = {
      ...i,
      placeholderData: c,
      enabled: u
    }, p[9] = i, p[10] = c, p[11] = u, p[12] = d) : d = p[12], (0, t.useInfiniteQuery)(d)
  }, "useHatchConnectorPermissionsQuery", 0, function(e, t) {
    let i, c, u, d = (0, n.c)(11),
      p = void 0 === t || t,
      {
        isReady: m,
        gatewayUrl: h
      } = (0, o.useHatchRpc)(),
      y = (0, a.useGatewayQueryContext)();
    return d[0] !== y || d[1] !== e ? (i = s.connectorPermissionsQuery.queryOptions({
      id: e ?? ""
    }, y), d[0] = y, d[1] = e, d[2] = i) : i = d[2], d[3] !== p || d[4] !== h || d[5] !== e || d[6] !== m ? (c = p && null != e && e.length > 0 && (0, l.isMethodReadyForTransport)({
      method: "connectors.permissions",
      gatewayUrl: h,
      isWsReady: m
    }), d[3] = p, d[4] = h, d[5] = e, d[6] = m, d[7] = c) : c = d[7], d[8] !== i || d[9] !== c ? (u = {
      ...i,
      refetchOnMount: "always",
      enabled: c
    }, d[8] = i, d[9] = c, d[10] = u) : u = d[10], (0, r.useQuery)(u)
  }, "useHatchConnectorsQuery", 0, function(e, t) {
    let i, c, u, d = (0, n.c)(10),
      p = void 0 === e || e,
      {
        isReady: m,
        gatewayUrl: h
      } = (0, o.useHatchRpc)(),
      y = (0, a.useGatewayQueryContext)(),
      {
        forceRefetchOnMount: f
      } = void 0 === t ? {} : t;
    d[0] !== y ? (i = s.connectorsListQuery.queryOptions({
      surface: "settings"
    }, y), d[0] = y, d[1] = i) : i = d[1];
    let C = !!(void 0 === f || f) && "always";
    return d[2] !== p || d[3] !== h || d[4] !== m ? (c = p && (0, l.isMethodReadyForTransport)({
      method: "connectors.list",
      gatewayUrl: h,
      isWsReady: m
    }), d[2] = p, d[3] = h, d[4] = m, d[5] = c) : c = d[5], d[6] !== i || d[7] !== C || d[8] !== c ? (u = {
      ...i,
      refetchOnMount: C,
      enabled: c
    }, d[6] = i, d[7] = C, d[8] = c, d[9] = u) : u = d[9], (0, r.useQuery)(u)
  }])
}, 849490, e => {
  "use strict";
  var n = e.i(722099),
    t = e.i(188202),
    r = e.i(8229),
    o = e.i(387820);
  e.s(["useConnectorSkillInfo", 0, function(e, l) {
    let a, s, i, c, u, d, p = (0, n.c)(20);
    p[0] !== l ? (a = void 0 === l ? {} : l, p[0] = l, p[1] = a) : a = p[1];
    let m = a,
      {
        data: h,
        isPending: y
      } = (0, o.useHatchConnectorQuery)(e);
    h?.isCustom, p[2] !== h?.isCustom || p[3] !== e ? (s = h?.isCustom === !0 || (0, r.isCustomDynamicCredentialName)(e), p[2] = h?.isCustom, p[3] = e, p[4] = s) : s = p[4];
    let f = s;
    p[5] !== h ? (i = null == h ? null : (0, o.connectorToSkillInfo)(h), p[5] = h, p[6] = i) : i = p[6];
    let C = i;
    p[7] !== f || p[8] !== C ? (c = f ? null : (0, t.getSkillIconUrl)(C), p[7] = f, p[8] = C, p[9] = c) : c = p[9];
    let _ = c;
    p[10] !== h?.name || p[11] !== m || p[12] !== e ? (u = h?.name ?? m.fallbackDisplayName ?? (0, t.customConnectorDisplayName)(e), p[10] = h?.name, p[11] = m, p[12] = e, p[13] = u) : u = p[13];
    let k = u,
      g = null != C;
    return p[14] !== k || p[15] !== _ || p[16] !== y || p[17] !== C || p[18] !== g ? (d = {
      skillInfo: C,
      iconUrl: _,
      displayName: k,
      hasSkillMatch: g,
      isPending: y
    }, p[14] = k, p[15] = _, p[16] = y, p[17] = C, p[18] = g, p[19] = d) : d = p[19], d
  }])
}, 210338, 627763, e => {
  "use strict";
  var n = e.i(984416),
    t = e.i(722099);

  function r(e) {
    let r, o, l, a, s, i, c, u = (0, t.c)(12);
    return u[0] !== e.title ? (r = null != e.title && (0, n.jsx)("title", {
      children: e.title
    }), u[0] = e.title, u[1] = r) : r = u[1], u[2] !== e.children ? (o = null != e.children && (0, n.jsx)("defs", {
      children: e.children
    }), u[2] = e.children, u[3] = o) : o = u[3], u[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)("path", {
      d: "M22.22 20.66C21.92 20.92 21.58 21.16 21.21 21.34C20.64 21.63 20.02 21.76 19.3 21.82C18.59 21.88 17.71 21.88 16.6 21.88H7.4C6.29 21.88 5.41 21.88 4.7 21.82C3.98 21.76 3.36 21.63 2.79 21.34C2.42 21.16 2.08 20.92 1.78 20.66L10.08 13.74L10.36 13.93C11.35 14.61 12.65 14.61 13.64 13.93L13.92 13.74L22.22 20.66Z"
    }), a = (0, n.jsx)("path", {
      d: "M8.59 12.7L0.69 19.28C0.68 19.26 0.67 19.24 0.66 19.21C0.37 18.64 0.24 18.02 0.18 17.3C0.12 16.59 0.13 15.71 0.13 14.6V9.4C0.13 8.38 0.13 7.56 0.17 6.88L8.59 12.7Z"
    }), s = (0, n.jsx)("path", {
      d: "M23.83 6.88C23.87 7.56 23.88 8.38 23.88 9.4V14.6C23.88 15.71 23.88 16.59 23.82 17.3C23.76 18.02 23.63 18.64 23.34 19.21C23.33 19.24 23.32 19.26 23.31 19.28L15.41 12.7L23.83 6.88Z"
    }), i = (0, n.jsx)("path", {
      d: "M16.6 2.13C17.71 2.13 18.59 2.12 19.3 2.18C20.02 2.24 20.64 2.37 21.21 2.66C22.13 3.12 22.88 3.87 23.34 4.79C23.38 4.86 23.42 4.93 23.45 5.01L12.64 12.49C12.26 12.76 11.74 12.76 11.36 12.49L0.55 5.01C0.58 4.93 0.62 4.86 0.66 4.79C1.12 3.87 1.87 3.12 2.79 2.66C3.36 2.37 3.98 2.24 4.7 2.18C5.41 2.12 6.29 2.13 7.4 2.13H16.6Z"
    }), u[4] = l, u[5] = a, u[6] = s, u[7] = i) : (l = u[4], a = u[5], s = u[6], i = u[7]), u[8] !== e || u[9] !== r || u[10] !== o ? (c = (0, n.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, o, l, a, s, i]
    }), u[8] = e, u[9] = r, u[10] = o, u[11] = c) : c = u[11], c
  }
  r._isSVG = !0, e.s(["default", 0, r], 210338);
  var o = e.i(345717);

  function l(e, n) {
    let t = e[n]?.trim() ?? "";
    return t.length > 0 ? t : null
  }

  function a(e) {
    if (null == e || 0 === e.trim().length) return;
    let n = e.trim();
    if (!/^\d+$/.test(n)) return null;
    let t = Number(n);
    return !Number.isInteger(t) || t < 1 || t > 65535 ? null : t
  }
  e.s(["buildEmptyPasswordConnectorFormValues", 0, function(e) {
    switch (e) {
      case "apple_email":
        return {
          username: "", password: ""
        };
      case "imap_email":
        return {
          username: "", password: "", imap_host: "", smtp_host: "", mail_username: "", imap_port: "", smtp_port: ""
        };
      default:
        return {}
    }
  }, "buildPasswordConnectorSubmission", 0, function(e, n) {
    switch (e) {
      case "apple_email": {
        let e = l(n, "username"),
          t = l(n, "password");
        if (null == e || null == t) return null;
        return {
          provider: "apple_email",
          username: e,
          password: t
        }
      }
      case "imap_email": {
        let e, t = l(n, "username"),
          r = l(n, "password"),
          o = l(n, "imap_host"),
          s = l(n, "smtp_host");
        if (null == t || null == r || null == o || null == s) return null;
        let i = a(n.imap_port),
          c = a(n.smtp_port);
        if (null === i || null === c) return null;
        let u = {
            imap_host: o,
            smtp_host: s
          },
          d = (e = n.mail_username?.trim() ?? "").length > 0 ? e : void 0;
        return null != d && (u.mail_username = d), null != i && (u.imap_port = i), null != c && (u.smtp_port = c), {
          provider: "imap_email",
          username: t,
          password: r,
          extraFields: u
        }
      }
      default:
        return null
    }
  }, "getPasswordConnectorConfig", 0, function(e) {
    switch (e) {
      case "apple_email":
        return {
          displayName: o.fbs._("Apple Email", null, {
            hk: "440rqt"
          }), credentialsSubtitle: o.fbs._("Enter your credentials to connect", null, {
            hk: "jHzFF"
          }), fields: [{
            name: "username",
            label: o.fbs._("Apple ID", null, {
              hk: "qze5O"
            }),
            placeholder: o.fbs._("Enter your Apple ID email address", null, {
              hk: "46jonv"
            }),
            type: "text",
            autoComplete: "username"
          }, {
            name: "password",
            label: o.fbs._("App password", null, {
              hk: "3e6C9b"
            }),
            placeholder: o.fbs._("Enter your Apple app-specific password", null, {
              hk: "3d3dVy"
            }),
            type: "password",
            autoComplete: "current-password"
          }]
        };
      case "imap_email":
        return {
          displayName: o.fbs._("IMAP Email", null, {
            hk: "m0BSG"
          }), credentialsSubtitle: o.fbs._("Enter your mailbox credentials and server settings to connect", null, {
            hk: "1i4Ptl"
          }), helperText: o.fbs._("Leave the port fields blank to use the default IMAP port 993 and SMTP port 587.", null, {
            hk: "3bNasz"
          }), fields: [{
            name: "username",
            label: o.fbs._("Login username", null, {
              hk: "HFZeq"
            }),
            placeholder: o.fbs._("Enter the username you use to sign in", null, {
              hk: "1iQt21"
            }),
            type: "text",
            autoComplete: "username"
          }, {
            name: "password",
            label: o.fbs._("Password or app password", null, {
              hk: "2ZVgys"
            }),
            placeholder: o.fbs._("Enter your mailbox password or app password", null, {
              hk: "4qglrr"
            }),
            type: "password",
            autoComplete: "current-password"
          }, {
            name: "imap_host",
            label: o.fbs._("IMAP host", null, {
              hk: "49Ttot"
            }),
            placeholder: o.fbs._("imap.example.com", null, {
              hk: "44UCi4"
            }),
            type: "text"
          }, {
            name: "smtp_host",
            label: o.fbs._("SMTP host", null, {
              hk: "470qPS"
            }),
            placeholder: o.fbs._("smtp.example.com", null, {
              hk: "14x5rT"
            }),
            type: "text"
          }, {
            name: "mail_username",
            label: o.fbs._("Mailbox address", null, {
              hk: "2GbQLc"
            }),
            placeholder: o.fbs._("Optional if different from the login username", null, {
              hk: "oKBPj"
            }),
            type: "text",
            autoComplete: "email",
            optional: !0
          }, {
            name: "imap_port",
            label: o.fbs._("IMAP port", null, {
              hk: "1pbCbD"
            }),
            placeholder: o.fbs._("993", null, {
              hk: "1SEErh"
            }),
            type: "number",
            optional: !0
          }, {
            name: "smtp_port",
            label: o.fbs._("SMTP port", null, {
              hk: "Js0ef"
            }),
            placeholder: o.fbs._("587", null, {
              hk: "ReICj"
            }),
            type: "number",
            optional: !0
          }]
        };
      default:
        return null
    }
  }], 627763)
}]);

//# debugId=0e16eee6-cd2f-5ef7-9744-4866c58d530f
//# sourceMappingURL=2_tzqka4s6339.js.map