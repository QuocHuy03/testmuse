;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "afc59979-4bec-5a39-7e94-16c74d5bd1df")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 355300, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(345717),
    o = e.i(722099),
    r = e.i(255859),
    l = e.i(123601),
    i = e.i(325814),
    c = e.i(420297),
    s = e.i(430116),
    a = e.i(646361),
    u = e.i(374785),
    d = e.i(848048),
    p = e.i(281539),
    h = e.i(823173),
    C = e.i(770256),
    y = e.i(762534),
    f = e.i(44743),
    m = e.i(370911),
    _ = e.i(432964);

  function g(e) {
    let n, r, l, i, c, s, a = (0, o.c)(11);
    return a[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), a[0] = e.title, a[1] = n) : n = a[1], a[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), a[2] = e.children, a[3] = r) : r = a[3], a[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 7.207a4.793 4.793 0 1 0 0 9.586 4.793 4.793 0 0 0 0-9.586zm0 7.904a3.111 3.111 0 1 1 0-6.222 3.111 3.111 0 0 1 0 6.222z"
    }), i = (0, t.jsx)("path", {
      d: "M16.982 8.138a1.12 1.12 0 1 0 0-2.24 1.12 1.12 0 0 0 0 2.24z"
    }), c = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 2.667c-2.535 0-2.853.01-3.848.056-.994.045-1.672.203-2.266.433a4.574 4.574 0 0 0-1.653 1.077 4.574 4.574 0 0 0-1.076 1.653c-.231.594-.389 1.272-.434 2.266-.046.995-.056 1.313-.056 3.848s.01 2.852.056 3.848c.045.993.203 1.672.433 2.266a4.573 4.573 0 0 0 1.077 1.653c.519.518 1.04.838 1.653 1.076.594.23 1.272.389 2.266.434.995.045 1.313.056 3.848.056s2.852-.01 3.848-.056c.993-.045 1.672-.203 2.266-.434a4.574 4.574 0 0 0 1.653-1.076 4.574 4.574 0 0 0 1.076-1.653c.23-.594.389-1.273.434-2.266.045-.996.056-1.313.056-3.848s-.01-2.853-.056-3.848c-.045-.994-.203-1.672-.434-2.266a4.575 4.575 0 0 0-1.076-1.653 4.573 4.573 0 0 0-1.653-1.076c-.594-.231-1.273-.389-2.266-.434-.996-.046-1.313-.056-3.848-.056zm0 1.681c2.492 0 2.787.01 3.771.055.91.041 1.404.193 1.733.321.436.17.747.372 1.074.698.326.327.529.638.698 1.073.128.33.28.824.321 1.733.045.985.054 1.28.054 3.772s-.009 2.787-.054 3.771c-.041.91-.193 1.404-.321 1.733-.17.436-.372.747-.698 1.074a2.891 2.891 0 0 1-1.074.698c-.329.128-.823.28-1.733.321-.984.045-1.279.054-3.771.054s-2.788-.009-3.771-.054c-.91-.041-1.405-.193-1.734-.321a2.89 2.89 0 0 1-1.073-.698 2.891 2.891 0 0 1-.698-1.074c-.128-.329-.28-.823-.321-1.733-.045-.984-.055-1.279-.055-3.771s.01-2.787.055-3.771c.041-.91.193-1.405.321-1.734a2.89 2.89 0 0 1 .698-1.073 2.89 2.89 0 0 1 1.073-.698c.33-.128.824-.28 1.733-.321.985-.045 1.28-.055 3.772-.055z"
    }), a[4] = l, a[5] = i, a[6] = c) : (l = a[4], i = a[5], c = a[6]), a[7] !== e || a[8] !== n || a[9] !== r ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, r, l, i, c]
    }), a[7] = e, a[8] = n, a[9] = r, a[10] = s) : s = a[10], s
  }
  g._isSVG = !0;
  var x = e.i(203576),
    v = e.i(305646),
    k = e.i(980933),
    b = e.i(465376),
    M = e.i(606123),
    T = e.i(621663);
  let w = {
      dropbox: _.default,
      "google-drive": f.default,
      "apple-calendar": m.default,
      "google-calendar": m.default,
      instagram: g,
      instagram_messages: g,
      threads: x.default
    },
    j = y.default;
  e.s(["HatchConnectorConsentDialog", 0, function(e) {
    let y, f, m, _, g, x, N, R, L, I, A, O, E, S, Q, P, H, K, z, q, B, G = (0, o.c)(76),
      {
        isOpen: D,
        serviceName: F,
        displayName: U,
        hasSkillMatch: V,
        iconUrl: Z,
        description: W,
        connectDisabled: Y,
        isConnecting: $,
        isCustomConnector: J,
        consentScreen: X,
        connectLabel: ee,
        cancelLabel: et,
        children: en,
        errorMessage: eo,
        onRetry: er,
        retryDisabled: el,
        retryLabel: ei,
        onConnect: ec,
        onCancel: es
      } = e,
      ea = void 0 !== el && el,
      eu = w[F] ?? j;
    G[0] !== F ? (y = {
      third_party_connector_type: F
    }, G[0] = F, G[1] = y) : y = G[1], G[2] !== F || G[3] !== y ? (f = {
      eventName: h.HatchImpressionEvent.CONNECTOR_CONSENT_DIALOG_IMPRESSION,
      actionTarget: "connector_consent_dialog",
      thirdPartyConnectorType: F,
      metadata: y
    }, G[2] = F, G[3] = y, G[4] = f) : f = G[4];
    let ed = f,
      {
        ref: ep
      } = (0, d.useTrackedImpressionRef)(ed);
    G[5] !== F ? (m = {
      third_party_connector_type: F,
      third_party_connection_action: "connect"
    }, G[5] = F, G[6] = m) : m = G[6], G[7] !== F || G[8] !== m ? (_ = {
      eventName: "connector_consent_connect_click",
      actionTarget: "connector_consent_dialog_connect",
      actionType: "click",
      thirdPartyConnectorType: F,
      thirdPartyConnectionAction: "connect",
      metadata: m
    }, G[7] = F, G[8] = m, G[9] = _) : _ = G[9];
    let eh = _,
      {
        ref: eC,
        onClick: ey
      } = (0, d.useTrackedClickRef)(eh);
    G[10] !== F ? (g = {
      third_party_connector_type: F,
      third_party_connection_action: "cancel"
    }, G[10] = F, G[11] = g) : g = G[11], G[12] !== F || G[13] !== g ? (x = {
      eventName: "connector_consent_cancel_click",
      actionTarget: "connector_consent_dialog_cancel",
      actionType: "click",
      thirdPartyConnectorType: F,
      thirdPartyConnectionAction: "cancel",
      metadata: g
    }, G[12] = F, G[13] = g, G[14] = x) : x = G[14];
    let ef = x,
      {
        onClick: em
      } = (0, d.useTrackedClickRef)(ef);
    G[15] !== F ? (N = {
      third_party_connector_type: F,
      third_party_connection_action: "connect"
    }, G[15] = F, G[16] = N) : N = G[16], G[17] !== F || G[18] !== N ? (R = {
      eventName: p.HatchClickEvent.CONNECTOR_CONSENT_RETRY_CLICK,
      actionTarget: "connector_consent_dialog_retry",
      actionType: "click",
      thirdPartyConnectorType: F,
      thirdPartyConnectionAction: "connect",
      metadata: N
    }, G[17] = F, G[18] = N, G[19] = R) : R = G[19];
    let e_ = R,
      {
        ref: eg,
        onClick: ex
      } = (0, d.useTrackedClickRef)(e_);
    G[20] !== em || G[21] !== es ? (L = () => {
      em(), es()
    }, G[20] = em, G[21] = es, G[22] = L) : L = G[22];
    let ev = L;
    G[23] !== W || G[24] !== U ? (I = null != W ? (0, r.replaceLegacyProductBrandNames)(W) : n.fbt._("Connect your {serviceName} account to let {productFullName} help you with tasks and information from this service.", [n.fbt._param("serviceName", U), n.fbt._param("productFullName", r.PRODUCT_BRAND.fullName)], {
      hk: "3CKLzq"
    }), G[23] = W, G[24] = U, G[25] = I) : I = G[25];
    let ek = I;
    G[26] !== U ? (A = n.fbs._("Connect {displayName}", [n.fbs._param("displayName", U)], {
      hk: "18CzRo"
    }), G[26] = U, G[27] = A) : A = G[27];
    let eb = A;
    G[28] !== ei ? (O = ei ?? n.fbs._("Try again", null, {
      hk: "2MGBE5"
    }), G[28] = ei, G[29] = O) : O = G[29];
    let eM = O,
      eT = null != eo;
    G[30] !== $ || G[31] !== J ? (E = (0, T.selectConnectorConnectLabel)({
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
    }), G[30] = $, G[31] = J, G[32] = E) : E = G[32];
    let ew = E,
      ej = !0 === $ ? ew : ee ?? ew;
    G[33] !== ev ? (S = e => !e && ev(), G[33] = ev, G[34] = S) : S = G[34], G[35] !== eb ? (Q = (0, t.jsx)(i.DialogHeader, {
      className: "sr-only",
      children: (0, t.jsx)(i.DialogTitle, {
        children: eb
      })
    }), G[35] = eb, G[36] = Q) : Q = G[36], G[37] === Symbol.for("react.memo_cache_sentinel") ? (P = (0, t.jsx)("span", {
      className: "flex-1"
    }), G[37] = P) : P = G[37], G[38] !== Q ? (H = (0, t.jsxs)(t.Fragment, {
      children: [Q, P]
    }), G[38] = Q, G[39] = H) : H = G[39];
    let eN = eT ? "flex flex-col px-0 pb-0 min-h-[560px]" : "flex min-h-0 flex-col overflow-hidden px-0 pb-0";
    return G[40] !== eN ? (K = (0, u.cn)(eN), G[40] = eN, G[41] = K) : K = G[41], G[42] !== eu || G[43] !== et || G[44] !== en || G[45] !== Y || G[46] !== eC || G[47] !== X || G[48] !== ek || G[49] !== U || G[50] !== eo || G[51] !== ev || G[52] !== V || G[53] !== Z || G[54] !== $ || G[55] !== J || G[56] !== eT || G[57] !== ey || G[58] !== ex || G[59] !== ec || G[60] !== er || G[61] !== ej || G[62] !== eM || G[63] !== ea || G[64] !== eg || G[65] !== F ? (z = eT ? (0, t.jsxs)("div", {
      role: "alert",
      className: "flex flex-1 flex-col items-center justify-center gap-3 px-10 pb-6 text-center",
      children: [(0, t.jsx)(a.HatchIcon, {
        icon: C.default,
        size: 48,
        className: "text-text-destructive"
      }), (0, t.jsx)(s.Text, {
        variant: "title-3-emphasized",
        children: n.fbs._("Something went wrong", null, {
          hk: "3asU3w"
        })
      }), (0, t.jsx)(s.Text, {
        variant: "body",
        children: eo
      }), (0, t.jsx)("div", {
        className: "mt-1 w-full max-w-64",
        children: (0, t.jsx)(c.Button, {
          ref: eg,
          label: eM,
          variant: "primary",
          size: "36",
          fullWidth: !0,
          disabled: ea || null == er,
          onClick: () => {
            ex(), er?.()
          }
        })
      }), ea && (0, t.jsx)(s.Text, {
        variant: "footnote",
        color: "secondary",
        children: (0, M.getConnectorRetryUnavailableMessage)(n.fbs._("Reconnect to try again.", null, {
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
            children: J ? (0, t.jsx)(l.default, {
              src: (0, b.getConnectorIcon)("grid"),
              alt: "",
              width: 40,
              height: 40,
              className: "rounded-12 size-full object-cover",
              loading: "eager",
              unoptimized: !0
            }) : "meta_business" === F || "meta_ads" === F ? (0, t.jsx)(k.ConnectorIcon, {
              service: F,
              iconUrl: Z,
              size: 40,
              className: "!shadow-none"
            }) : null != Z ? (0, t.jsx)("img", {
              src: Z,
              alt: "",
              width: 40,
              height: 40,
              className: "rounded-12 size-full object-cover"
            }) : (0, t.jsx)(eu, {
              size: 24,
              className: "text-text-secondary"
            })
          }), (0, t.jsx)(s.Text, {
            variant: "title-3-emphasized",
            children: U
          }), J ? (0, t.jsx)(s.Text, {
            variant: "subheadline",
            color: "secondary",
            className: "text-center",
            children: n.fbt._("Custom connector", null, {
              hk: "lWsic"
            })
          }) : V && (0, t.jsx)(s.Text, {
            variant: "subheadline",
            color: "secondary",
            className: "text-center",
            children: ek
          })]
        }), null != en && (0, t.jsx)("div", {
          className: "mt-4 w-full",
          children: en
        }), (0, t.jsx)("div", {
          className: "mt-4",
          children: (0, t.jsx)(v.ConnectorConsentContent, {
            displayName: U,
            isCustomConnector: J,
            consentScreen: X
          })
        })]
      }), (0, t.jsxs)("div", {
        "data-testid": "connector-consent-footer",
        className: "flex shrink-0 flex-col gap-2 px-6 pt-2 pb-6",
        children: [(0, t.jsx)(c.Button, {
          ref: eC,
          label: ej,
          variant: "primary",
          size: "36",
          fullWidth: !0,
          onClick: () => {
            ey(), ec()
          },
          disabled: Y || $
        }), null != et && (0, t.jsx)(c.Button, {
          label: et,
          variant: "borderless",
          size: "36",
          fullWidth: !0,
          onClick: ev,
          disabled: $
        })]
      })]
    }), G[42] = eu, G[43] = et, G[44] = en, G[45] = Y, G[46] = eC, G[47] = X, G[48] = ek, G[49] = U, G[50] = eo, G[51] = ev, G[52] = V, G[53] = Z, G[54] = $, G[55] = J, G[56] = eT, G[57] = ey, G[58] = ex, G[59] = ec, G[60] = er, G[61] = ej, G[62] = eM, G[63] = ea, G[64] = eg, G[65] = F, G[66] = z) : z = G[66], G[67] !== ep || G[68] !== H || G[69] !== K || G[70] !== z ? (q = (0, t.jsx)(i.DialogContent, {
      ref: ep,
      header: H,
      contentClassName: K,
      children: z
    }), G[67] = ep, G[68] = H, G[69] = K, G[70] = z, G[71] = q) : q = G[71], G[72] !== D || G[73] !== S || G[74] !== q ? (B = (0, t.jsx)(i.Dialog, {
      open: D,
      onOpenChange: S,
      children: q
    }), G[72] = D, G[73] = S, G[74] = q, G[75] = B) : B = G[75], B
  }], 355300)
}, 606123, e => {
  "use strict";
  e.s(["getConnectorConnectErrorMessage", 0, function(e) {
    return e
  }, "getConnectorDisconnectErrorMessage", 0, function(e) {
    return e
  }, "getConnectorRetryUnavailableMessage", 0, function(e) {
    return e
  }])
}, 334186, e => {
  "use strict";
  var t = e.i(93061),
    n = e.i(359783),
    o = e.i(863641),
    r = e.i(288119),
    l = e.i(424379),
    i = e.i(790170);
  let c = (0, n.createClientLogger)("connectorsQueries"),
    s = {
      facebook_cli: "facebook",
      messenger_read: "messenger",
      stripe_link: "stripe-link",
      whatsapp_companion: "whatsapp"
    };

  function a(e) {
    return s[e] ?? e
  }
  let u = ["allow", "ask", "deny"],
    d = new Set(["allow", "ask", "deny"]),
    p = new Map([
      ["storage", t.ConsentBulletIcon.STORAGE],
      ["data_types", t.ConsentBulletIcon.DATA_TYPES],
      ["caution", t.ConsentBulletIcon.CAUTION],
      ["info", t.ConsentBulletIcon.INFO],
      ["unspecified", t.ConsentBulletIcon.UNSPECIFIED]
    ]);

  function h(e) {
    return null == e || "object" != typeof e || Array.isArray(e) ? null : e
  }

  function C(e) {
    return "string" == typeof e && e.length > 0 ? e : null
  }

  function y(e) {
    if ("string" != typeof e) return null;
    let t = e.trim();
    return t.length > 0 ? t : null
  }

  function f(e) {
    let n = h(e),
      o = C(n?.id);
    if (null == n || null == o) return null;
    let r = "connected" === n.state || "needs_reauth" === n.state || "coming_soon" === n.state ? n.state : "disconnected";
    return {
      id: o,
      name: C(n.name) ?? o,
      description: C(n.description) ?? "",
      iconKey: y(n.icon) ?? o,
      iconUrl: y(n.icon_url),
      supportsMultipleAccounts: !0 === n.supports_multiple_accounts,
      isCustom: !0 === n.is_custom,
      state: r,
      connected: "connected" === r,
      consent: function(e) {
        let n = h(e);
        if (null == n) return null;
        let o = y(h(n.account_center)?.consent_url),
          r = null != o ? {
            consentUrl: o
          } : null,
          l = function(e) {
            let n = h(e);
            if (null == n) return null;
            let o = [];
            if (Array.isArray(n.bullets))
              for (let e of n.bullets) {
                let n = h(e),
                  r = n?.text;
                if ("string" != typeof r || 0 === r.trim().length) continue;
                let l = y(n?.title);
                o.push({
                  icon: function(e) {
                    let n = C(e);
                    return null == n ? t.ConsentBulletIcon.UNSPECIFIED : p.get(n) ?? t.ConsentBulletIcon.UNSPECIFIED
                  }(n?.icon),
                  ...null != l ? {
                    title: l
                  } : {},
                  text: r
                })
              }
            let r = Array.isArray(n.footer_paragraphs) ? n.footer_paragraphs.filter(e => "string" == typeof e && e.trim().length > 0) : [];
            return 0 === o.length && 0 === r.length ? null : {
              bullets: o,
              footer_paragraphs: r
            }
          }(n.hatch);
        return null == r && null == l ? null : {
          accountCenter: r,
          hatch: l
        }
      }(n.consent)
    }
  }

  function m(e) {
    let t = h(e),
      n = t?.connectors;
    if (!Array.isArray(n)) throw Error("GET /connectors returned an unexpected payload shape (connectors is not an array)");
    return {
      connectors: n.map(f).filter(e => null != e && (!(0, r.isRetiredConnectorAuthId)(e.id) || "connected" === e.state))
    }
  }
  let _ = new Set(["productivity", "social", "health", "business", "wallet", "connected", "custom"]);

  function g(e) {
    let t = h(e),
      n = C(t?.id),
      o = C(t?.title);
    return null != n && null != o && _.has(n) ? {
      id: n,
      title: o
    } : null
  }

  function x(e) {
    return Array.isArray(e) ? e.map(f).filter(e => null != e && (!(0, r.isRetiredConnectorAuthId)(e.id) || "connected" === e.state)) : []
  }
  let v = (0, i.createGatewayQuery)({
      id: "connectors.list",
      queryKey: e => l.settingsConnectorsQueryKeys.list(e.surface),
      noiseFn: async (e, t) => m(await e.sendRequest("connectors.list", {
        surface: t.surface
      })),
      invalidationKey: () => l.connectorsQueryKeys.all,
      staleTime: 5e3
    }),
    k = (0, i.createGatewayQuery)({
      id: "connectors.homepage",
      queryKey: e => l.settingsConnectorsQueryKeys.marketplaceHomepage(e.previewLimit),
      noiseFn: async (e, t) => (function(e) {
        let t = h(e);
        if (null == t || !Array.isArray(t.featured) || !Array.isArray(t.categories)) throw Error("GET /connectors/homepage returned an unexpected payload shape");
        let n = t.categories.flatMap(e => {
          let t = h(e),
            n = g(t);
          return null != n && Array.isArray(t?.connectors) ? [{
            ...n,
            connectors: x(t.connectors)
          }] : []
        });
        return {
          version: C(t.version) ?? "",
          featured: x(t.featured),
          categories: n,
          customCount: "number" == typeof t.custom_count && Number.isSafeInteger(t.custom_count) ? Math.max(0, t.custom_count) : 0
        }
      })(await e.sendRequest("connectors.homepage", {
        preview_limit: t.previewLimit
      })),
      invalidationKey: () => l.connectorsQueryKeys.all,
      staleTime: 5e3
    }),
    b = (0, i.createGatewayInfiniteQuery)({
      id: "connectors.list",
      queryKey: e => l.settingsConnectorsQueryKeys.marketplaceList(e.category, e.query),
      noiseFn: async (e, t, n) => {
        let o = null == n ? {
            limit: 50,
            ...null != t.category ? {
              category: t.category
            } : {},
            ...t.query.length > 0 ? {
              q: t.query
            } : {}
          } : {
            cursor: n
          },
          r = h(await e.sendRequest("connectors.list", o));
        if (null == r || !Array.isArray(r.connectors)) throw Error("Paged GET /connectors returned an unexpected payload shape");
        return {
          category: null == r.category ? null : g(r.category),
          featured: null == r.featured ? null : x(r.featured),
          connectors: x(r.connectors),
          nextCursor: y(r.next_cursor)
        }
      },
      initialPageParam: null,
      getNextPageParam: e => e.nextCursor ?? void 0,
      invalidationKey: () => l.connectorsQueryKeys.all,
      staleTime: 5e3
    }),
    M = (0, i.createGatewayQuery)({
      id: "connectors.permissions",
      queryKey: e => l.settingsConnectorsQueryKeys.permissions(e.id),
      noiseFn: async (e, t) => (function(e) {
        let t = h(e),
          n = h(t?.permissions) ?? t,
          r = n?.sections;
        if (!Array.isArray(r)) return {
          sections: []
        };
        let l = {
            droppedModeOptions: 0,
            emptyModeOptionLists: 0,
            unsupportedModeOptionLists: 0
          },
          i = {
            sections: r.map(e => (function(e, t) {
              let n = h(e);
              if (null == n) return null;
              let o = Array.isArray(n.groups) ? n.groups.map(e => (function(e, t) {
                let n = h(e);
                if (null == n) return null;
                let o = Array.isArray(n.methods) ? n.methods.map(e => {
                  var n, o;
                  let r, l, i;
                  return n = e, o = t, l = h(n), i = y(l?.key), null == l || null == i ? null : {
                    key: i,
                    mode: null != (r = C(l.mode)) && d.has(r) ? r : "deny",
                    modeOptions: function(e, t) {
                      if (!Array.isArray(e)) return [...u];
                      let n = [];
                      for (let o of e) {
                        let e = C(o);
                        if (null != e) {
                          if (!d.has(e)) {
                            t.droppedModeOptions += 1;
                            continue
                          }
                          n.includes(e) || n.push(e)
                        }
                      }
                      return n.length > 0 ? n : (0 === e.length ? t.emptyModeOptionLists += 1 : t.unsupportedModeOptionLists += 1, [...u])
                    }(l.mode_options, o),
                    modeSource: "user_override" === l.mode_source ? "user_override" : "default",
                    label: C(l.label) ?? i,
                    restricted: !0 === l.restricted
                  }
                }).filter(e => null != e) : [];
                return {
                  label: C(n.label) ?? "",
                  methods: o
                }
              })(e, t)).filter(e => null != e) : [];
              return {
                label: C(n.label) ?? "",
                groups: o
              }
            })(e, l)).filter(e => null != e)
          };
        return (l.droppedModeOptions > 0 || l.emptyModeOptionLists > 0 || l.unsupportedModeOptionLists > 0) && c.error({
          error: Error("Connector permissions included unusable mode options"),
          droppedModeOptions: l.droppedModeOptions,
          emptyModeOptionLists: l.emptyModeOptionLists,
          unsupportedModeOptionLists: l.unsupportedModeOptionLists,
          tags: (0, o.hatchSentryTags)(o.HATCH_SENTRY_SURFACES.SETTINGS_CONNECTORS)
        }, "Connector permissions included unusable mode options"), i
      })(await e.sendRequest("connectors.permissions", {
        id: t.id
      })),
      invalidationKey: () => l.connectorsQueryKeys.all,
      staleTime: 5e3
    });
  async function T(e, t, n) {
    let o = {
      id: a(t)
    };
    return null != n && n.length > 0 && (o.session_id = n),
      function(e) {
        let t = h(e),
          n = h(t?.action);
        if (null == n) return {
          ok: !1,
          reason: "no_action_object",
          rawType: null
        };
        let o = C(n.type);
        if (null == o) return {
          ok: !1,
          reason: "no_type",
          rawType: null
        };
        switch (o) {
          case "oauth": {
            let e = y(n.url);
            return null != e ? {
              ok: !0,
              action: {
                type: "oauth",
                url: e
              }
            } : {
              ok: !1,
              reason: "oauth_missing_url",
              rawType: o
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
              ok: !1, reason: "unknown_type", rawType: o
            }
        }
      }(await e("connectors.connect_info", o))
  }
  async function w(e, t, n, o) {
    let r, l = {
      id: t,
      method: n
    };
    null != o && o.length > 0 && (l.account_id = o);
    let i = h(await e("connectors.scope_link", l)),
      c = y(i?.link_url);
    if (null == c) return null;
    try {
      r = new URL(c)
    } catch {
      throw Error("connectors.scope_link returned an invalid link URL")
    }
    if ("https:" !== r.protocol || r.username.length > 0 || r.password.length > 0) throw Error(`connectors.scope_link returned an unsafe link (protocol=${r.protocol}, host=${r.hostname||"<none>"}, hasCredentials=${r.username.length>0||r.password.length>0})`);
    return c
  }
  async function j(e, t, n) {
    let o = {
      id: a(t)
    };
    return null != n && n.length > 0 && (o.session_id = n), f(await e("connectors.get", o))
  }
  e.s(["CONNECTORS_STALE_TIME_MS", 0, 5e3, "CONNECTOR_MARKETPLACE_PREVIEW_LIMIT", 0, 5, "connectorIdsMatch", 0, function(e, t) {
    let n = e => a(e).replace(/-/g, "_");
    return n(e) === n(t)
  }, "connectorMarketplaceHomepageQuery", 0, k, "connectorMarketplaceListQuery", 0, b, "connectorPermissionsQuery", 0, M, "connectorsListQuery", 0, v, "fetchConnectInfo", 0, T, "fetchConnector", 0, j, "fetchScopeLink", 0, w, "normalizeConnectorsList", 0, m, "resolveConnectorId", 0, a])
}, 387820, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(334186),
    o = e.i(488435);
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
  }, "useHatchConnectorQuery", 0, function(e, r) {
    let l, i, c, s, a, u = (0, t.c)(11);
    u[0] !== r ? (l = void 0 === r ? {} : r, u[0] = r, u[1] = l) : l = u[1];
    let d = l;
    u[2] !== e ? (i = null == e ? "" : (0, n.resolveConnectorId)(e), u[2] = e, u[3] = i) : i = u[3];
    let p = i,
      {
        enabled: h
      } = d;
    u[4] === Symbol.for("react.memo_cache_sentinel") ? (c = {
      forceRefetchOnMount: !1
    }, u[4] = c) : c = u[4];
    let C = (0, o.useHatchConnectorsQuery)((void 0 === h || h) && p.length > 0, c);
    u[5] !== C.data || u[6] !== p ? (s = null == C.data ? void 0 : C.data.connectors.find(e => (0, n.connectorIdsMatch)(e.id, p)) ?? null, u[5] = C.data, u[6] = p, u[7] = s) : s = u[7];
    let y = s;
    return u[8] !== y || u[9] !== C ? (a = {
      ...C,
      data: y
    }, u[8] = y, u[9] = C, u[10] = a) : a = u[10], a
  }])
}, 488435, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(293760),
    o = e.i(849329),
    r = e.i(175286),
    l = e.i(14751),
    i = e.i(720756),
    c = e.i(334186);
  e.s(["useHatchConnectorMarketplaceHomepageQuery", 0, function(e) {
    let n, s, a, u = (0, t.c)(9),
      d = void 0 === e || e,
      {
        isReady: p,
        gatewayUrl: h
      } = (0, r.useHatchRpc)(),
      C = (0, i.useGatewayQueryContext)();
    return u[0] !== C ? (n = c.connectorMarketplaceHomepageQuery.queryOptions({
      previewLimit: c.CONNECTOR_MARKETPLACE_PREVIEW_LIMIT
    }, C), u[0] = C, u[1] = n) : n = u[1], u[2] !== d || u[3] !== h || u[4] !== p ? (s = d && (0, l.isMethodReadyForTransport)({
      method: "connectors.homepage",
      gatewayUrl: h,
      isWsReady: p
    }), u[2] = d, u[3] = h, u[4] = p, u[5] = s) : s = u[5], u[6] !== n || u[7] !== s ? (a = {
      ...n,
      enabled: s
    }, u[6] = n, u[7] = s, u[8] = a) : a = u[8], (0, o.useQuery)(a)
  }, "useHatchConnectorMarketplaceListQuery", 0, function(e, o) {
    let s, a, u, d, p = (0, t.c)(13),
      h = void 0 === o || o,
      {
        isReady: C,
        gatewayUrl: y
      } = (0, r.useHatchRpc)(),
      f = (0, i.useGatewayQueryContext)();
    return p[0] !== f || p[1] !== e ? (s = c.connectorMarketplaceListQuery.infiniteQueryOptions(e, f), p[0] = f, p[1] = e, p[2] = s) : s = p[2], p[3] !== e ? (a = (t, n) => {
      var o, r;
      let l;
      return (o = e.category, r = n?.queryKey, l = c.connectorMarketplaceListQuery.queryKey({
        category: o,
        query: ""
      }).length - 2, r?.[l] === o) ? t : void 0
    }, p[3] = e, p[4] = a) : a = p[4], p[5] !== h || p[6] !== y || p[7] !== C ? (u = h && (0, l.isMethodReadyForTransport)({
      method: "connectors.list",
      gatewayUrl: y,
      isWsReady: C
    }), p[5] = h, p[6] = y, p[7] = C, p[8] = u) : u = p[8], p[9] !== s || p[10] !== a || p[11] !== u ? (d = {
      ...s,
      placeholderData: a,
      enabled: u
    }, p[9] = s, p[10] = a, p[11] = u, p[12] = d) : d = p[12], (0, n.useInfiniteQuery)(d)
  }, "useHatchConnectorPermissionsQuery", 0, function(e, n) {
    let s, a, u, d = (0, t.c)(11),
      p = void 0 === n || n,
      {
        isReady: h,
        gatewayUrl: C
      } = (0, r.useHatchRpc)(),
      y = (0, i.useGatewayQueryContext)();
    return d[0] !== y || d[1] !== e ? (s = c.connectorPermissionsQuery.queryOptions({
      id: e ?? ""
    }, y), d[0] = y, d[1] = e, d[2] = s) : s = d[2], d[3] !== p || d[4] !== C || d[5] !== e || d[6] !== h ? (a = p && null != e && e.length > 0 && (0, l.isMethodReadyForTransport)({
      method: "connectors.permissions",
      gatewayUrl: C,
      isWsReady: h
    }), d[3] = p, d[4] = C, d[5] = e, d[6] = h, d[7] = a) : a = d[7], d[8] !== s || d[9] !== a ? (u = {
      ...s,
      refetchOnMount: "always",
      enabled: a
    }, d[8] = s, d[9] = a, d[10] = u) : u = d[10], (0, o.useQuery)(u)
  }, "useHatchConnectorsQuery", 0, function(e, n) {
    let s, a, u, d = (0, t.c)(10),
      p = void 0 === e || e,
      {
        isReady: h,
        gatewayUrl: C
      } = (0, r.useHatchRpc)(),
      y = (0, i.useGatewayQueryContext)(),
      {
        forceRefetchOnMount: f
      } = void 0 === n ? {} : n;
    d[0] !== y ? (s = c.connectorsListQuery.queryOptions({
      surface: "settings"
    }, y), d[0] = y, d[1] = s) : s = d[1];
    let m = !!(void 0 === f || f) && "always";
    return d[2] !== p || d[3] !== C || d[4] !== h ? (a = p && (0, l.isMethodReadyForTransport)({
      method: "connectors.list",
      gatewayUrl: C,
      isWsReady: h
    }), d[2] = p, d[3] = C, d[4] = h, d[5] = a) : a = d[5], d[6] !== s || d[7] !== m || d[8] !== a ? (u = {
      ...s,
      refetchOnMount: m,
      enabled: a
    }, d[6] = s, d[7] = m, d[8] = a, d[9] = u) : u = d[9], (0, o.useQuery)(u)
  }])
}, 621663, e => {
  "use strict";
  e.s(["selectConnectorConnectLabel", 0, function({
    isConnecting: e,
    isCustomConnector: t,
    connecting: n,
    connect: o,
    continueLabel: r,
    connectNextStep: l
  }) {
    return null != e ? e ? n : o : t ? r : l
  }])
}, 849490, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(188202),
    o = e.i(8229),
    r = e.i(387820);
  e.s(["useConnectorSkillInfo", 0, function(e, l) {
    let i, c, s, a, u, d, p = (0, t.c)(20);
    p[0] !== l ? (i = void 0 === l ? {} : l, p[0] = l, p[1] = i) : i = p[1];
    let h = i,
      {
        data: C,
        isPending: y
      } = (0, r.useHatchConnectorQuery)(e);
    C?.isCustom, p[2] !== C?.isCustom || p[3] !== e ? (c = C?.isCustom === !0 || (0, o.isCustomDynamicCredentialName)(e), p[2] = C?.isCustom, p[3] = e, p[4] = c) : c = p[4];
    let f = c;
    p[5] !== C ? (s = null == C ? null : (0, r.connectorToSkillInfo)(C), p[5] = C, p[6] = s) : s = p[6];
    let m = s;
    p[7] !== f || p[8] !== m ? (a = f ? null : (0, n.getSkillIconUrl)(m), p[7] = f, p[8] = m, p[9] = a) : a = p[9];
    let _ = a;
    p[10] !== C?.name || p[11] !== h || p[12] !== e ? (u = C?.name ?? h.fallbackDisplayName ?? (0, n.customConnectorDisplayName)(e), p[10] = C?.name, p[11] = h, p[12] = e, p[13] = u) : u = p[13];
    let g = u,
      x = null != m;
    return p[14] !== g || p[15] !== _ || p[16] !== y || p[17] !== m || p[18] !== x ? (d = {
      skillInfo: m,
      iconUrl: _,
      displayName: g,
      hasSkillMatch: x,
      isPending: y
    }, p[14] = g, p[15] = _, p[16] = y, p[17] = m, p[18] = x, p[19] = d) : d = p[19], d
  }])
}, 370911, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function o(e) {
    let o, r, l, i, c, s, a, u, d, p, h, C, y, f, m = (0, n.c)(19);
    return m[0] !== e.title ? (o = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), m[0] = e.title, m[1] = o) : o = m[1], m[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), m[2] = e.children, m[3] = r) : r = m[3], m[4] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)("path", {
      d: "M6 16C6.55 16 7 16.45 7 17C7 17.55 6.55 18 6 18C5.45 18 5 17.55 5 17C5 16.45 5.45 16 6 16Z"
    }), a = (0, t.jsx)("path", {
      d: "M10 16C10.55 16 11 16.45 11 17C11 17.55 10.55 18 10 18C9.45 18 9 17.55 9 17C9 16.45 9.45 16 10 16Z"
    }), u = (0, t.jsx)("path", {
      d: "M14 16C14.55 16 15 16.45 15 17C15 17.55 14.55 18 14 18C13.45 18 13 17.55 13 17C13 16.45 13.45 16 14 16Z"
    }), d = (0, t.jsx)("path", {
      d: "M6 12C6.55 12 7 12.45 7 13C7 13.55 6.55 14 6 14C5.45 14 5 13.55 5 13C5 12.45 5.45 12 6 12Z"
    }), p = (0, t.jsx)("path", {
      d: "M10 12C10.55 12 11 12.45 11 13C11 13.55 10.55 14 10 14C9.45 14 9 13.55 9 13C9 12.45 9.45 12 10 12Z"
    }), h = (0, t.jsx)("path", {
      d: "M14 12C14.55 12 15 12.45 15 13C15 13.55 14.55 14 14 14C13.45 14 13 13.55 13 13C13 12.45 13.45 12 14 12Z"
    }), C = (0, t.jsx)("path", {
      d: "M18 12C18.55 12 19 12.45 19 13C19 13.55 18.55 14 18 14C17.45 14 17 13.55 17 13C17 12.45 17.45 12 18 12Z"
    }), y = (0, t.jsx)("path", {
      d: "M10 8C10.55 8 11 8.45 11 9C11 9.55 10.55 10 10 10C9.45 10 9 9.55 9 9C9 8.45 9.45 8 10 8Z"
    }), l = (0, t.jsx)("path", {
      d: "M14 8C14.55 8 15 8.45 15 9C15 9.55 14.55 10 14 10C13.45 10 13 9.55 13 9C13 8.45 13.45 8 14 8Z"
    }), i = (0, t.jsx)("path", {
      d: "M18 8C18.55 8 19 8.45 19 9C19 9.55 18.55 10 18 10C17.45 10 17 9.55 17 9C17 8.45 17.45 8 18 8Z"
    }), c = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.6 1.13C17.71 1.13 18.59 1.12 19.3 1.18C20.02 1.24 20.64 1.37 21.21 1.66C22.13 2.12 22.88 2.87 23.34 3.79C23.64 4.36 23.76 4.98 23.82 5.7C23.88 6.41 23.88 7.29 23.88 8.4V15.6C23.88 16.71 23.88 17.59 23.82 18.3C23.76 19.02 23.64 19.64 23.34 20.21C22.88 21.13 22.13 21.88 21.21 22.34C20.64 22.63 20.02 22.76 19.3 22.82C18.59 22.88 17.71 22.88 16.6 22.88H7.4C6.3 22.88 5.41 22.88 4.7 22.82C3.98 22.76 3.36 22.63 2.79 22.34C1.87 21.88 1.12 21.13 0.66 20.21C0.37 19.64 0.24 19.02 0.18 18.3C0.13 17.59 0.13 16.71 0.13 15.6V8.4C0.13 7.29 0.13 6.41 0.18 5.7C0.24 4.98 0.37 4.36 0.66 3.79C1.12 2.87 1.87 2.12 2.79 1.66C3.36 1.37 3.98 1.24 4.7 1.18C5.41 1.12 6.3 1.13 7.4 1.13H16.6ZM7.4 4.63C6.27 4.63 5.47 4.63 4.84 4.68C4.23 4.73 3.87 4.82 3.58 4.97C2.99 5.27 2.52 5.74 2.22 6.33C2.07 6.61 1.98 6.98 1.93 7.59C1.88 8.22 1.88 9.02 1.88 10.15V15.6C1.88 16.73 1.88 17.53 1.93 18.16C1.98 18.77 2.07 19.14 2.22 19.42C2.52 20.01 2.99 20.48 3.58 20.78C3.87 20.93 4.23 21.02 4.84 21.07C5.47 21.12 6.27 21.13 7.4 21.13H16.6C17.74 21.13 18.53 21.12 19.16 21.07C19.77 21.02 20.14 20.93 20.42 20.78C21.01 20.48 21.49 20.01 21.79 19.42C21.93 19.14 22.02 18.77 22.07 18.16C22.13 17.53 22.13 16.73 22.13 15.6V10.15C22.13 9.02 22.13 8.22 22.07 7.59C22.02 6.98 21.93 6.61 21.79 6.33C21.49 5.74 21.01 5.27 20.42 4.97C20.14 4.82 19.77 4.73 19.16 4.68C18.53 4.63 17.74 4.63 16.6 4.63H7.4Z"
    }), m[4] = l, m[5] = i, m[6] = c, m[7] = s, m[8] = a, m[9] = u, m[10] = d, m[11] = p, m[12] = h, m[13] = C, m[14] = y) : (l = m[4], i = m[5], c = m[6], s = m[7], a = m[8], u = m[9], d = m[10], p = m[11], h = m[12], C = m[13], y = m[14]), m[15] !== e || m[16] !== o || m[17] !== r ? (f = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [o, r, s, a, u, d, p, h, C, y, l, i, c]
    }), m[15] = e, m[16] = o, m[17] = r, m[18] = f) : f = m[18], f
  }
  o._isSVG = !0, e.s(["default", 0, o])
}, 44743, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function o(e) {
    let o, r, l, i, c = (0, n.c)(9);
    return c[0] !== e.title ? (o = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), c[0] = e.title, c[1] = o) : o = c[1], c[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), c[2] = e.children, c[3] = r) : r = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.5 3.13C13.36 3.13 15.84 4.76 17.06 7.14C17.21 7.13 17.35 7.13 17.5 7.13C21.02 7.13 23.87 9.98 23.88 13.5C23.87 17.02 21.02 19.88 17.5 19.88C17.43 19.88 17.36 19.87 17.29 19.87C17.26 19.87 17.22 19.88 17.19 19.88H5.19C5.16 19.88 5.14 19.87 5.12 19.87C5.08 19.87 5.04 19.88 5 19.88C2.31 19.88 0.13 17.69 0.13 15C0.13 12.97 1.36 11.23 3.13 10.5C3.13 6.43 6.43 3.13 10.5 3.13ZM10.5 4.88C7.39 4.88 4.88 7.39 4.88 10.5L4.88 10.77C4.89 10.86 4.89 10.95 4.9 11.04C4.94 11.47 4.66 11.86 4.24 11.97C2.88 12.31 1.88 13.54 1.88 15L1.88 15.16C1.96 16.81 3.33 18.13 5 18.13C5.04 18.13 5.08 18.12 5.15 18.12C5.19 18.12 5.24 18.12 5.28 18.13H17.05C17.11 18.12 17.17 18.11 17.24 18.12C17.34 18.12 17.42 18.13 17.5 18.13C19.97 18.13 22 16.18 22.12 13.74L22.13 13.5C22.12 10.95 20.05 8.88 17.5 8.88C17.22 8.88 16.95 8.9 16.69 8.95C16.28 9.02 15.88 8.8 15.72 8.41C14.89 6.34 12.87 4.88 10.5 4.88Z"
    }), c[4] = l) : l = c[4], c[5] !== e || c[6] !== o || c[7] !== r ? (i = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [o, r, l]
    }), c[5] = e, c[6] = o, c[7] = r, c[8] = i) : i = c[8], i
  }
  o._isSVG = !0, e.s(["default", 0, o])
}, 762534, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function o(e) {
    let o, r, l, i, c, s = (0, n.c)(10);
    return s[0] !== e.title ? (o = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = o) : o = s[1], s[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = r) : r = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("path", {
      d: "M10.94 4.44C11.53 3.85 12.47 3.85 13.06 4.44C13.65 5.03 13.65 5.97 13.06 6.56C12.47 7.15 11.53 7.15 10.94 6.56C10.35 5.97 10.35 5.03 10.94 4.44Z"
    }), i = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 0.13C16.07 0.13 19.37 3.43 19.37 7.5C19.37 10.15 17.97 12.48 15.87 13.77L15.87 19.9L15.87 20.01C15.84 20.27 15.73 20.51 15.54 20.69L12.79 23.45L12.71 23.52C12.26 23.88 11.61 23.85 11.2 23.44L8.45 20.7C8.24 20.48 8.12 20.2 8.12 19.9V18.14L8.26 18L8.12 17.86V15.14L8.26 15L8.12 14.86V13.78C6.02 12.48 4.62 10.16 4.62 7.5C4.62 3.43 7.92 0.13 12 0.13ZM12 1.88C8.89 1.88 6.37 4.4 6.37 7.5C6.37 9.67 7.6 11.55 9.4 12.49L9.87 12.74L9.87 13.27V14.14L10.74 15L9.87 15.86V17.14L10.74 18L9.87 18.86V19.64L12 21.77L14.12 19.64V12.74L14.59 12.49C16.39 11.55 17.62 9.67 17.62 7.5C17.62 4.4 15.1 1.88 12 1.88Z"
    }), s[4] = l, s[5] = i) : (l = s[4], i = s[5]), s[6] !== e || s[7] !== o || s[8] !== r ? (c = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [o, r, l, i]
    }), s[6] = e, s[7] = o, s[8] = r, s[9] = c) : c = s[9], c
  }
  o._isSVG = !0, e.s(["default", 0, o])
}]);

//# debugId=afc59979-4bec-5a39-7e94-16c74d5bd1df
//# sourceMappingURL=3l3x17im9rf2e.js.map