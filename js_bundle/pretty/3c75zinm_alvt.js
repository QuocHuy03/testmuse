;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "09711112-bd44-5b49-41fe-954ab08efc27")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 947572, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    i = e.i(396817),
    l = e.i(519172),
    r = e.i(651126),
    a = e.i(181883),
    s = e.i(482129),
    o = e.i(972770),
    c = e.i(646361),
    d = e.i(181959),
    u = e.i(345717),
    h = e.i(374785),
    p = e.i(255859);
  e.i(173662);
  var f = e.i(354385),
    m = e.i(499608),
    x = e.i(907579),
    y = e.i(175286),
    g = e.i(941960),
    b = e.i(397240),
    v = e.i(951126),
    _ = e.i(44698);

  function w(e) {
    let i, r, a, s, o, c, d, u, p = (0, n.c)(24);
    p[0] !== e ? ({
      children: i,
      isMobile: r,
      sheetTitle: c,
      hideSheetTitle: d,
      open: s,
      onOpenChange: a,
      ...o
    } = e, p[0] = e, p[1] = i, p[2] = r, p[3] = a, p[4] = s, p[5] = o, p[6] = c, p[7] = d) : (i = p[1], r = p[2], a = p[3], s = p[4], o = p[5], c = p[6], d = p[7]);
    let f = void 0 !== d && d,
      m = (0, b.useIsMobileBreakpoint)();
    if (r ?? m) {
      let e, n;
      if (p[8] !== i || p[9] !== f || p[10] !== c) {
        let n;
        p[12] !== f || p[13] !== c ? (n = e => {
          if (l.isValidElement(e)) {
            if (e.type === v.HoverCardTrigger) return (0, t.jsx)(_.SheetTrigger, {
              asChild: !0,
              children: e.props.children
            });
            if (e.type === v.HoverCardContent) {
              let n = e.props;
              return (0, t.jsxs)(_.SheetContent, {
                side: "bottom",
                className: "max-h-[80vh] overflow-y-auto",
                showCloseButton: !1,
                children: [null != c && (0, t.jsx)(_.SheetHeader, {
                  className: f ? "sr-only" : void 0,
                  children: (0, t.jsx)(_.SheetTitle, {
                    children: c
                  })
                }), (0, t.jsx)("div", {
                  className: (0, h.cn)("pb-8", n.className),
                  children: n.children
                })]
              })
            }
          }
          return e
        }, p[12] = f, p[13] = c, p[14] = n) : n = p[14], e = l.Children.map(i, n), p[8] = i, p[9] = f, p[10] = c, p[11] = e
      } else e = p[11];
      return p[15] !== a || p[16] !== s || p[17] !== e ? (n = (0, t.jsx)(_.Sheet, {
        open: s,
        onOpenChange: a,
        children: e
      }), p[15] = a, p[16] = s, p[17] = e, p[18] = n) : n = p[18], n
    }
    return p[19] !== i || p[20] !== a || p[21] !== s || p[22] !== o ? (u = (0, t.jsx)(v.HoverCard, {
      open: s,
      onOpenChange: a,
      ...o,
      children: i
    }), p[19] = i, p[20] = a, p[21] = s, p[22] = o, p[23] = u) : u = p[23], u
  }
  var j = e.i(590328),
    k = e.i(430116),
    N = e.i(895293),
    C = e.i(848048),
    I = e.i(281539),
    T = e.i(823173);

  function S(e) {
    let i, r, o, d, h, p, f, m, x, y, _, S, E, P, D, R, H, M, A, O, U, z = (0, n.c)(71),
      {
        citations: L,
        children: $,
        context: F
      } = e,
      [B, W] = (0, l.useState)(0),
      V = (0, b.useIsMobileBreakpoint)(),
      Y = L[0],
      G = Y?.sourceType ?? void 0,
      K = Y?.sourceEntityId ?? void 0;
    z[0] !== G || z[1] !== F || z[2] !== K ? (i = {
      citation_source_type: G,
      source_entity_id: K,
      context: F
    }, z[0] = G, z[1] = F, z[2] = K, z[3] = i) : i = z[3];
    let X = i;
    z[4] !== X ? (r = {
      eventName: I.HatchClickEvent.CITATION_HOVERCARD_CLICK,
      actionTarget: "citation_hover_card",
      actionType: "click",
      metadata: X
    }, z[4] = X, z[5] = r) : r = z[5];
    let {
      ref: J,
      onClick: Q
    } = (0, C.useTrackedClickRef)(r);
    z[6] !== X ? (o = {
      eventName: T.HatchImpressionEvent.CITATION_HOVERCARD_IMPRESSION,
      actionTarget: "citation_hover_card",
      metadata: X
    }, z[6] = X, z[7] = o) : o = z[7], z[8] === Symbol.for("react.memo_cache_sentinel") ? (d = {
      threshold: "1px"
    }, z[8] = d) : d = z[8];
    let {
      ref: q
    } = (0, C.useTrackedImpressionRef)(o, d), Z = (0, C.useInteractionLoggerWithLazyData)();
    z[9] !== J || z[10] !== q ? (h = e => {
      J(e), q(e)
    }, z[9] = J, z[10] = q, z[11] = h) : h = z[11];
    let ee = h;
    if (0 === L.length) {
      let e;
      return z[12] !== $ ? (e = (0, t.jsx)(t.Fragment, {
        children: $
      }), z[12] = $, z[13] = e) : e = z[13], e
    }
    let et = L[B];
    if (!et) {
      let e;
      return z[14] !== $ ? (e = (0, t.jsx)(t.Fragment, {
        children: $
      }), z[14] = $, z[15] = e) : e = z[15], e
    }
    let en = L.length > 1;
    z[16] !== L || z[17] !== F || z[18] !== B || z[19] !== Z ? (p = e => {
      e.preventDefault(), e.stopPropagation();
      let t = B > 0 ? B - 1 : L.length - 1,
        n = L[t];
      Z({
        eventName: I.HatchClickEvent.CITATION_HOVERCARD_NAV_BACKWARD,
        actionTarget: "citation_hover_card",
        actionType: "click",
        metadata: {
          citation_source_type: n?.sourceType ?? void 0,
          source_entity_id: n?.sourceEntityId ?? void 0,
          context: F
        }
      }), W(t)
    }, z[16] = L, z[17] = F, z[18] = B, z[19] = Z, z[20] = p) : p = z[20];
    let ei = p;
    z[21] !== L || z[22] !== F || z[23] !== B || z[24] !== Z ? (f = e => {
      e.preventDefault(), e.stopPropagation();
      let t = B < L.length - 1 ? B + 1 : 0,
        n = L[t];
      Z({
        eventName: I.HatchClickEvent.CITATION_HOVERCARD_NAV_FORWARD,
        actionTarget: "citation_hover_card",
        actionType: "click",
        metadata: {
          citation_source_type: n?.sourceType ?? void 0,
          source_entity_id: n?.sourceEntityId ?? void 0,
          context: F
        }
      }), W(t)
    }, z[21] = L, z[22] = F, z[23] = B, z[24] = Z, z[25] = f) : f = z[25];
    let el = f;
    z[26] === Symbol.for("react.memo_cache_sentinel") ? (m = u.fbs._("Citation", null, {
      hk: "4e1Dqz"
    }), z[26] = m) : m = z[26], z[27] !== $ ? (x = (0, t.jsx)(v.HoverCardTrigger, {
      asChild: !0,
      children: $
    }), z[27] = $, z[28] = x) : x = z[28];
    let er = `flex flex-col ${V?"w-full":"max-w-80 min-w-48"}`;
    return z[29] !== L.length || z[30] !== B || z[31] !== el || z[32] !== ei || z[33] !== en ? (y = en && (0, t.jsxs)(j.Flexbox, {
      direction: "row",
      alignItems: "center",
      justifyContent: "between",
      className: "-ms-1 mb-1",
      children: [(0, t.jsxs)(j.Flexbox, {
        direction: "row",
        gap: 1,
        alignItems: "center",
        children: [(0, t.jsx)("button", {
          onClick: ei,
          "aria-label": u.fbs._("Previous citation", null, {
            hk: "4ckBGq"
          }),
          className: "hover:bg-fill-secondary-elevated text-text-primary flex h-6 w-6 cursor-pointer items-center justify-center rounded-full transition-colors",
          children: (0, t.jsx)(c.HatchIcon, {
            icon: a.default,
            size: 16
          })
        }), (0, t.jsx)("button", {
          onClick: el,
          "aria-label": u.fbs._("Next citation", null, {
            hk: "2OjxxJ"
          }),
          className: "hover:bg-fill-secondary-elevated text-text-primary flex h-6 w-6 cursor-pointer items-center justify-center rounded-full transition-colors",
          children: (0, t.jsx)(c.HatchIcon, {
            icon: s.default,
            size: 16
          })
        })]
      }), (0, t.jsx)("span", {
        className: "text-caption-1 text-text-secondary-emphasized",
        children: u.fbt._("{current}/{total}", [u.fbt._param("current", B + 1), u.fbt._param("total", L.length)], {
          hk: "kJ0wC"
        })
      })]
    }), z[29] = L.length, z[30] = B, z[31] = el, z[32] = ei, z[33] = en, z[34] = y) : y = z[34], z[35] !== et.description || z[36] !== et.referenceDisplayName ? (_ = et.description && et.description !== et.referenceDisplayName && (0, t.jsx)(k.Text, {
      variant: "footnote",
      color: "primary",
      className: "line-clamp-2",
      children: et.description
    }), z[35] = et.description, z[36] = et.referenceDisplayName, z[37] = _) : _ = z[37], z[38] !== et.faviconUrl || z[39] !== et.referenceUrl ? (S = (0, t.jsx)(N.EctoFavicon, {
      faviconUrl: et.faviconUrl,
      sourceUrl: et.referenceUrl,
      size: "sm",
      fallbackColor: "var(--ai-gray-a650)",
      className: "me-1"
    }), z[38] = et.faviconUrl, z[39] = et.referenceUrl, z[40] = S) : S = z[40], z[41] !== et.referenceDisplayName ? (E = (0, t.jsx)("span", {
      className: "text-footnote text-text-secondary truncate",
      children: et.referenceDisplayName
    }), z[41] = et.referenceDisplayName, z[42] = E) : E = z[42], z[43] !== S || z[44] !== E ? (P = (0, t.jsxs)("div", {
      className: "flex items-center pt-1",
      children: [S, E]
    }), z[43] = S, z[44] = E, z[45] = P) : P = z[45], z[46] !== y || z[47] !== _ || z[48] !== P ? (D = (0, t.jsxs)(j.Flexbox, {
      direction: "column",
      gap: 1,
      className: "px-4 pt-3",
      children: [y, _, P]
    }), z[46] = y, z[47] = _, z[48] = P, z[49] = D) : D = z[49], z[50] !== et.description || z[51] !== et.previewImageUrl || z[52] !== et.referenceDisplayName ? (R = et.previewImageUrl && (0, t.jsx)("div", {
      className: "px-3 pt-3 pb-3",
      children: (0, t.jsx)("div", {
        className: "bg-bg-secondary outline-fill-divider rounded-10 relative h-52 w-full overflow-hidden outline outline-[0.5px] -outline-offset-[0.5px]",
        children: (0, t.jsx)("img", {
          src: et.previewImageUrl,
          alt: et.description || et.referenceDisplayName,
          className: "h-full w-full object-cover"
        })
      })
    }), z[50] = et.description, z[51] = et.previewImageUrl, z[52] = et.referenceDisplayName, z[53] = R) : R = z[53], z[54] !== et.previewImageUrl ? (H = !et.previewImageUrl && (0, t.jsx)("div", {
      className: "pb-4"
    }), z[54] = et.previewImageUrl, z[55] = H) : H = z[55], z[56] !== D || z[57] !== R || z[58] !== H ? (M = (0, t.jsxs)("div", {
      className: "flex flex-col select-none",
      children: [D, R, H]
    }), z[56] = D, z[57] = R, z[58] = H, z[59] = M) : M = z[59], z[60] !== et.referenceUrl || z[61] !== Q || z[62] !== M ? (A = (0, t.jsx)(g.EctoAnchor, {
      href: et.referenceUrl,
      onClick: Q,
      className: "block no-underline hover:no-underline",
      children: M
    }), z[60] = et.referenceUrl, z[61] = Q, z[62] = M, z[63] = A) : A = z[63], z[64] !== ee || z[65] !== er || z[66] !== A ? (O = (0, t.jsx)(v.HoverCardContent, {
      className: "w-auto p-0",
      align: "start",
      children: (0, t.jsx)("div", {
        ref: ee,
        className: er,
        children: A
      })
    }), z[64] = ee, z[65] = er, z[66] = A, z[67] = O) : O = z[67], z[68] !== O || z[69] !== x ? (U = (0, t.jsxs)(w, {
      sheetTitle: m,
      hideSheetTitle: !0,
      children: [x, O]
    }), z[68] = O, z[69] = x, z[70] = U) : U = z[70], U
  }
  var E = e.i(682178),
    P = e.i(457169),
    D = e.i(448892),
    R = e.i(410400);

  function H(e) {
    let i, r, a, s, o, c, d, u, h = (0, n.c)(17),
      p = (0, l.useId)();
    h[0] !== e.title ? (i = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), h[0] = e.title, h[1] = i) : i = h[1];
    let f = `url(#${p})`;
    return h[2] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)("path", {
      d: "M4.94 6.542a3.41 3.41 0 0 1 4.807 0 .759.759 0 0 1 0 1.075.767.767 0 0 1-1.08 0 1.878 1.878 0 0 0-2.648 0L4.29 9.34a2.42 2.42 0 0 0-.001 3.432 2.445 2.445 0 0 0 3.447 0l1.198-1.193a.766.766 0 0 1 1.08 0 .759.759 0 0 1 0 1.076l-1.198 1.192a3.976 3.976 0 0 1-5.607 0 3.936 3.936 0 0 1 .001-5.582l1.73-1.724z"
    }), a = (0, t.jsx)("path", {
      d: "M7.468 2.432a3.976 3.976 0 0 1 5.607 0 3.936 3.936 0 0 1 0 5.582l-1.732 1.724a3.409 3.409 0 0 1-4.806 0 .758.758 0 0 1 0-1.075.766.766 0 0 1 1.08 0 1.878 1.878 0 0 0 2.647 0l1.73-1.724a2.42 2.42 0 0 0 0-3.432 2.445 2.445 0 0 0-3.446 0L7.35 4.7a.766.766 0 0 1-1.08 0 .758.758 0 0 1 0-1.075l1.198-1.193z"
    }), h[2] = r, h[3] = a) : (r = h[2], a = h[3]), h[4] !== f ? (s = (0, t.jsxs)("g", {
      clipPath: f,
      children: [r, a]
    }), h[4] = f, h[5] = s) : s = h[5], h[6] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)("path", {
      d: "M0 0H16V16H0z"
    }), h[6] = o) : o = h[6], h[7] !== p ? (c = (0, t.jsx)("clipPath", {
      id: p,
      children: o
    }), h[7] = p, h[8] = c) : c = h[8], h[9] !== e.children || h[10] !== c ? (d = (0, t.jsxs)("defs", {
      children: [c, e.children]
    }), h[9] = e.children, h[10] = c, h[11] = d) : d = h[11], h[12] !== e || h[13] !== i || h[14] !== s || h[15] !== d ? (u = (0, t.jsxs)("svg", {
      viewBox: "0 0 16 16",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [i, s, d]
    }), h[12] = e, h[13] = i, h[14] = s, h[15] = d, h[16] = u) : u = h[16], u
  }

  function M(e) {
    let i, l, r, a, s, o, d, u, p, f = (0, n.c)(38),
      {
        citations: m,
        className: x
      } = e,
      y = m[0],
      b = y?.sourceType ?? void 0,
      v = y?.sourceEntityId ?? void 0;
    f[0] !== b || f[1] !== v ? (i = {
      eventName: I.HatchClickEvent.OPEN_INLINE_CITATIONS,
      actionTarget: "citation_pill",
      actionType: "click",
      metadata: {
        citation_source_type: b,
        source_entity_id: v
      }
    }, f[0] = b, f[1] = v, f[2] = i) : i = f[2];
    let {
      ref: _,
      onClick: w
    } = (0, C.useTrackedClickRef)(i), j = y?.sourceType ?? void 0, k = y?.sourceEntityId ?? void 0;
    f[3] !== j || f[4] !== k ? (l = {
      eventName: T.HatchImpressionEvent.INLINE_CITATION_RESPONSE_UX,
      actionTarget: "citation_pill",
      metadata: {
        citation_source_type: j,
        source_entity_id: k
      }
    }, f[3] = j, f[4] = k, f[5] = l) : l = f[5], f[6] === Symbol.for("react.memo_cache_sentinel") ? (r = {
      threshold: "50%"
    }, f[6] = r) : r = f[6];
    let {
      ref: N
    } = (0, C.useTrackedImpressionRef)(l, r);
    f[7] !== _ || f[8] !== N ? (a = e => {
      _(e), N(e)
    }, f[7] = _, f[8] = N, f[9] = a) : a = f[9];
    let M = a;
    if (0 === m.length || !y) return null;
    let A = (0, E.isFirstPartySource)(y.sourceType),
      O = y.referenceDisplayName;
    if (!A) {
      let e, n, i, l, r = y.referenceUrl;
      return f[10] !== x ? (e = (0, h.cn)("inline-flex items-center justify-center align-middle no-underline transition-colors", "h-[18px] w-[18px] rounded-full", "bg-fill-secondary hover:bg-fill-tertiary", "relative -top-0.5", x), f[10] = x, f[11] = e) : e = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)(c.HatchIcon, {
        icon: H,
        size: 10,
        className: "text-text-secondary"
      }), f[12] = n) : n = f[12], f[13] !== y.referenceDisplayName || f[14] !== y.referenceUrl || f[15] !== w || f[16] !== M || f[17] !== e ? (i = (0, t.jsx)(g.EctoAnchor, {
        ref: M,
        href: r,
        onClick: w,
        "data-testid": "citation-pill",
        "data-copy-text": "[·]",
        className: e,
        "aria-label": y.referenceDisplayName,
        children: n
      }), f[13] = y.referenceDisplayName, f[14] = y.referenceUrl, f[15] = w, f[16] = M, f[17] = e, f[18] = i) : i = f[18], f[19] !== m || f[20] !== i ? (l = (0, t.jsx)(S, {
        citations: m,
        context: "inline",
        children: i
      }), f[19] = m, f[20] = i, f[21] = l) : l = f[21], l
    }
    f[22] !== y.sourceType ? (s = function(e) {
      switch (e) {
        case "INSTAGRAM_POST":
          return P.default;
        case "THREADS_POST":
          return D.default;
        case "FACEBOOK_POST":
          return R.default;
        default:
          return
      }
    }(y.sourceType), f[22] = y.sourceType, f[23] = s) : s = f[23];
    let U = s,
      z = y.referenceUrl;
    return f[24] !== x ? (o = (0, h.cn)("inline-flex items-center justify-center align-middle no-underline", "h-[18px] w-[18px] rounded-full", "bg-fill-secondary hover:bg-fill-tertiary transition-colors", "relative -top-0.5", x), f[24] = x, f[25] = o) : o = f[25], f[26] !== U ? (d = U && (0, t.jsx)(U, {
      className: "text-text-secondary h-3 w-3"
    }), f[26] = U, f[27] = d) : d = f[27], f[28] !== O || f[29] !== y.referenceUrl || f[30] !== w || f[31] !== M || f[32] !== o || f[33] !== d ? (u = (0, t.jsx)(g.EctoAnchor, {
      ref: M,
      href: z,
      skipLinkshim: !0,
      onClick: w,
      "data-testid": "citation-pill",
      "data-copy-text": "[·]",
      className: o,
      "aria-label": O,
      children: d
    }), f[28] = O, f[29] = y.referenceUrl, f[30] = w, f[31] = M, f[32] = o, f[33] = d, f[34] = u) : u = f[34], f[35] !== m || f[36] !== u ? (p = (0, t.jsx)(S, {
      citations: m,
      children: u
    }), f[35] = m, f[36] = u, f[37] = p) : p = f[37], p
  }
  H._isSVG = !0;
  var A = e.i(18516),
    O = e.i(440802),
    U = e.i(239286),
    z = e.i(25113),
    L = e.i(486868),
    $ = e.i(744387),
    F = e.i(501756),
    B = e.i(905156),
    W = e.i(386634),
    V = e.i(927648);

  function Y(e) {
    let i, l, r, a, s, o, d, u, p, f, m, x, y, g, b, v, _, w = (0, n.c)(46),
      {
        citation: j
      } = e,
      {
        openDetails: k
      } = (0, F.useHatchAdsDetailsPanel)(),
      N = j.entity,
      S = j.citationId,
      E = N.entityType,
      P = null != N.adsManagerUrl,
      D = j.hostMessageId;
    w[0] !== j.sessionId ? (i = (0, B.hatchThreadTargetLoggingMetadata)(j.sessionId), w[0] = j.sessionId, w[1] = i) : i = w[1], w[2] !== j.citationId || w[3] !== j.hostMessageId || w[4] !== N.entityType || w[5] !== P || w[6] !== i ? (l = {
      surface: "chat",
      citation_id: S,
      entity_type: E,
      has_ads_manager_url: P,
      host_message_id: D,
      subsurface: "message_text",
      ...i
    }, w[2] = j.citationId, w[3] = j.hostMessageId, w[4] = N.entityType, w[5] = P, w[6] = i, w[7] = l) : l = w[7];
    let R = l;
    w[8] !== R ? (r = {
      eventName: I.HatchClickEvent.CHAT_ADS_ENTITY_CLICK,
      actionTarget: "ads_entity",
      actionType: "click",
      metadata: R
    }, w[8] = R, w[9] = r) : r = w[9];
    let {
      ref: H,
      onClick: M
    } = (0, C.useTrackedClickRef)(r);
    w[10] !== R ? (a = {
      eventName: T.HatchImpressionEvent.CHAT_ADS_ENTITY_IMPRESSION,
      actionTarget: "ads_entity",
      metadata: R
    }, w[10] = R, w[11] = a) : a = w[11], w[12] === Symbol.for("react.memo_cache_sentinel") ? (s = {
      threshold: "50%"
    }, w[12] = s) : s = w[12];
    let {
      ref: A
    } = (0, C.useTrackedImpressionRef)(a, s);
    w[13] !== H || w[14] !== A ? (o = e => {
      H(e), A(e)
    }, w[13] = H, w[14] = A, w[15] = o) : o = w[15];
    let O = o;
    w[16] !== j.hostMessageId || w[17] !== j.sessionId || w[18] !== N || w[19] !== M || w[20] !== k ? (d = () => {
      M(), k(N, {
        hostMessageId: j.hostMessageId,
        ...null != j.sessionId ? {
          sessionId: j.sessionId
        } : {}
      })
    }, w[16] = j.hostMessageId, w[17] = j.sessionId, w[18] = N, w[19] = M, w[20] = k, w[21] = d) : d = w[21];
    let U = (0, $.usePressable)(d),
      z = N.displayName;
    w[22] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, h.cn)("rounded-3 mx-0.5 cursor-pointer hover:brightness-95 active:brightness-90 dark:hover:brightness-110 dark:active:brightness-95", "focus-visible:ring-hatch-accent/40 focus-visible:ring-2 focus-visible:outline-none"), w[22] = u) : u = w[22];
    let Y = V.ADS_ENTITY_TYPE_ICONS[N.entityType];
    return w[23] !== Y ? (p = (0, t.jsx)("span", {
      "aria-hidden": "true",
      "data-copy-exclude": !0,
      children: (0, t.jsx)(c.HatchIcon, {
        icon: Y,
        size: 14,
        className: "text-text-secondary me-1 align-[-0.18em]"
      })
    }), w[23] = Y, w[24] = p) : p = w[24], w[25] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, h.cn)("text-response-medium", "underline decoration-dotted decoration-1 underline-offset-[18.5%] [text-decoration-skip-ink:none] [text-underline-position:from-font]"), w[25] = f) : f = w[25], w[26] !== N.displayName ? (m = (0, t.jsx)("span", {
      className: f,
      children: N.displayName
    }), w[26] = N.displayName, w[27] = m) : m = w[27], w[28] !== N.entityType ? (x = (0, W.adsEntityTypeLabel)(N.entityType), w[28] = N.entityType, w[29] = x) : x = w[29], w[30] !== x ? (y = (0, t.jsx)("span", {
      className: "sr-only",
      "data-copy-exclude": !0,
      children: x
    }), w[30] = x, w[31] = y) : y = w[31], w[32] !== N.displayName || w[33] !== O || w[34] !== U || w[35] !== p || w[36] !== m || w[37] !== y ? (g = (0, t.jsx)(L.TooltipTrigger, {
      asChild: !0,
      children: (0, t.jsxs)("span", {
        ...U,
        ref: O,
        "data-copy-text": z,
        className: u,
        children: [p, m, y]
      })
    }), w[32] = N.displayName, w[33] = O, w[34] = U, w[35] = p, w[36] = m, w[37] = y, w[38] = g) : g = w[38], w[39] !== N.entityType ? (b = (0, W.adsEntityTypeLabel)(N.entityType), w[39] = N.entityType, w[40] = b) : b = w[40], w[41] !== b ? (v = (0, t.jsx)(L.TooltipContent, {
      children: b
    }), w[41] = b, w[42] = v) : v = w[42], w[43] !== g || w[44] !== v ? (_ = (0, t.jsx)(L.TooltipProvider, {
      delayDuration: 500,
      children: (0, t.jsxs)(L.Tooltip, {
        children: [g, v]
      })
    }), w[43] = g, w[44] = v, w[45] = _) : _ = w[45], _
  }
  var G = e.i(234565),
    K = e.i(860150),
    X = e.i(580908);

  function J(e) {
    let i, l, r, a, s, o, c, d, p, f, m, x, y, g = (0, n.c)(47),
      {
        citation: b
      } = e,
      {
        openDetails: v
      } = (0, G.useHatchShoppingPanel)(),
      _ = (0, B.useHatchChatThreadLoggingMetadataFromContext)(),
      w = !0 === b.product.isUnavailable;
    g[0] !== b.hostMessageId || g[1] !== b.index || g[2] !== b.product || g[3] !== b.widgetId ? (i = (0, X.buildProductClickMetadata)(b.product, b.index, {
      widgetId: b.widgetId,
      hostMessageId: b.hostMessageId
    }), g[0] = b.hostMessageId, g[1] = b.index, g[2] = b.product, g[3] = b.widgetId, g[4] = i) : i = g[4], g[5] !== b.citationId || g[6] !== i || g[7] !== _ ? (l = {
      ...i,
      citation_id: b.citationId,
      subsurface: "message_text",
      widget_template: "unknown",
      ..._
    }, g[5] = b.citationId, g[6] = i, g[7] = _, g[8] = l) : l = g[8];
    let j = l;
    g[9] !== j ? (r = {
      eventName: I.HatchClickEvent.CHAT_SHOPPING_PRODUCT_ENTITY_CLICK,
      actionTarget: "shopping_product_entity",
      actionType: "click",
      metadata: j
    }, g[9] = j, g[10] = r) : r = g[10];
    let {
      ref: k,
      onClick: N
    } = (0, C.useTrackedClickRef)(r);
    g[11] !== j ? (a = {
      eventName: T.HatchImpressionEvent.CHAT_SHOPPING_PRODUCT_ENTITY_IMPRESSION,
      actionTarget: "shopping_product_entity",
      metadata: j
    }, g[11] = j, g[12] = a) : a = g[12], g[13] === Symbol.for("react.memo_cache_sentinel") ? (s = {
      threshold: "50%"
    }, g[13] = s) : s = g[13];
    let {
      ref: S
    } = (0, C.useTrackedImpressionRef)(a, s);
    g[14] !== k || g[15] !== S ? (o = e => {
      k(e), S(e)
    }, g[14] = k, g[15] = S, g[16] = o) : o = g[16];
    let E = o;
    g[17] !== b.hostMessageId || g[18] !== b.product || g[19] !== b.products || g[20] !== b.sessionId || g[21] !== b.widgetId || g[22] !== w || g[23] !== N || g[24] !== v ? (c = () => {
      w || (N(), v(b.product, {
        widgetId: b.widgetId,
        hostMessageId: b.hostMessageId,
        products: b.products,
        ...null != b.sessionId ? {
          sessionId: b.sessionId
        } : {},
        origin: "text"
      }))
    }, g[17] = b.hostMessageId, g[18] = b.product, g[19] = b.products, g[20] = b.sessionId, g[21] = b.widgetId, g[22] = w, g[23] = N, g[24] = v, g[25] = c) : c = g[25];
    let P = (0, $.usePressable)(c),
      D = w || void 0,
      R = b.product.name,
      H = !w && "cursor-pointer";
    return g[26] !== H ? (d = (0, h.cn)("group rounded-3 mx-0.5", "focus-visible:ring-hatch-accent/40 focus-visible:ring-2 focus-visible:outline-none", H), g[26] = H, g[27] = d) : d = g[27], g[28] !== b.product.name || g[29] !== w ? (p = w ? u.fbs._("{product name} is no longer available", [u.fbs._param("product name", b.product.name)], {
      hk: "eGCMZ"
    }).toString() : void 0, g[28] = b.product.name, g[29] = w, g[30] = p) : p = g[30], g[31] !== b.product ? (f = (0, t.jsx)("span", {
      "aria-hidden": "true",
      children: (0, t.jsx)(K.ProductCardThumbnail, {
        product: b.product,
        className: "border-fill-divider rounded-4 me-1 inline-block h-[1.1em] w-auto min-w-[0.6em] border-[0.5px] align-[-0.22em]",
        imageClassName: "block h-full w-auto max-w-[1.1em] object-cover",
        iconSize: 12
      })
    }), g[31] = b.product, g[32] = f) : f = g[32], g[33] !== w ? (m = (0, h.cn)("text-response-emphasized", w ? "text-text-secondary decoration-text-tertiary line-through" : (0, h.cn)("decoration-text-secondary underline decoration-dotted decoration-1 underline-offset-[18.5%] [text-decoration-skip-ink:none] [text-underline-position:from-font]", "group-hover:decoration-text-primary motion-safe:transition-colors")), g[33] = w, g[34] = m) : m = g[34], g[35] !== b.product.name || g[36] !== m ? (x = (0, t.jsx)("span", {
      className: m,
      children: b.product.name
    }), g[35] = b.product.name, g[36] = m, g[37] = x) : x = g[37], g[38] !== b.product.name || g[39] !== E || g[40] !== P || g[41] !== d || g[42] !== p || g[43] !== f || g[44] !== x || g[45] !== D ? (y = (0, t.jsxs)("span", {
      ...P,
      ref: E,
      "aria-disabled": D,
      "data-copy-text": R,
      className: d,
      title: p,
      children: [f, x]
    }), g[38] = b.product.name, g[39] = E, g[40] = P, g[41] = d, g[42] = p, g[43] = f, g[44] = x, g[45] = D, g[46] = y) : y = g[46], y
  }
  var Q = e.i(714990);

  function q(e) {
    try {
      return decodeURIComponent(e)
    } catch {
      return e
    }
  }

  function Z(e, t) {
    return e.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || t
  }

  function ee(e) {
    return e instanceof Error ? e.message : String(e)
  }
  async function et(e, t) {
    let n = document.createElement("iframe");
    n.setAttribute("sandbox", "allow-same-origin"), n.style.position = "fixed", n.style.left = "-20000px", n.style.top = "0", n.style.width = "1280px", n.style.height = "720px", n.style.border = "0", n.style.opacity = "0", n.style.pointerEvents = "none", document.body.appendChild(n);
    try {
      await new Promise((e, i) => {
        let l = window.setTimeout(() => {
          i(Error("Timed out while rendering slide."))
        }, 1e4);
        n.addEventListener("load", () => {
          window.clearTimeout(l), e()
        }, {
          once: !0
        }), n.srcdoc = t
      }), await new Promise(e => {
        window.setTimeout(e, 120)
      });
      let i = n.contentDocument;
      if (!i) throw Error("Unable to access rendered slide content.");
      i.body && (i.body.style.margin = "0", i.body.style.backgroundColor = "rgb(255, 255, 255)");
      let l = i.documentElement;
      if (!l) throw Error("Rendered slide document is empty.");
      return await e.default(l, {
        scale: 2,
        useCORS: !0,
        backgroundColor: "rgb(255, 255, 255)",
        width: 1280,
        height: 720,
        windowWidth: 1280,
        windowHeight: 720,
        scrollX: 0,
        scrollY: 0
      })
    } finally {
      n.remove()
    }
  }

  function en(e) {
    let t = q(e),
      n = (t.split(/[?#]/)[0] ?? t).trim().replace(/^file:\/\//, "").replace(/\\/g, "/").replace(/\/{2,}/g, "/").replace(/^\/+/, "");
    if (!n) return "";
    let i = n.split("/").filter(Boolean);
    if (0 === i.length) return "";
    let l = i.indexOf("workspace");
    return l >= 0 ? i.slice(l).join("/") : "home" === i[0] && i.length >= 3 || "Users" === i[0] && i.length >= 3 ? i.slice(2).join("/") : i.join("/")
  }

  function ei(e) {
    let t = en(e);
    if (!t) return [];
    let n = t.split("/").filter(Boolean),
      i = new Set([t]);
    for (let e = 1; e < n.length && e < 6; e++) i.add(n.slice(e).join("/"));
    return Array.from(i)
  }

  function el(e, t) {
    var n = [...ei(e.absolute_path), ...ei(`${t.projectPath}/${e.id}.html`)];
    let i = new Set,
      l = [];
    for (let e of n) {
      let t = en(e);
      !t || i.has(t) || (i.add(t), l.push(t))
    }
    return l
  }

  function er({
    href: n,
    subtitle: g,
    deckName: b
  }) {
    let {
      gatewayUrl: v
    } = (0, y.useHatchRpc)(), _ = (0, x.useHatchGatewayFs)(), w = (0, f.getHatchQueryClient)(), [j, k] = (0, l.useState)(!1), [N, C] = (0, l.useState)(!1), [I, T] = (0, l.useState)(null), [S, E] = (0, l.useState)(null), [P, D] = (0, l.useState)(0), [R, H] = (0, l.useState)({}), [M, z] = (0, l.useState)(null), [L, $] = (0, l.useState)(!1), [, F] = (0, l.useState)(null), [, B] = (0, l.useState)(!1), [, W] = (0, l.useState)(null), [V, Y] = (0, l.useState)(!1), [G, K] = (0, l.useState)(null), X = (0, l.useRef)(null), J = (0, l.useRef)(null), Q = (0, l.useRef)({}), ea = (0, l.useRef)({}), es = (0, l.useRef)({}), eo = (0, l.useRef)(new Map), ec = (0, l.useRef)(null), ed = (0, l.useRef)(0), eu = (0, l.useRef)(null), eh = (0, l.useRef)(null), ep = (0, l.useRef)(null);
    (0, l.useEffect)(() => {
      Q.current = R
    }, [R]), (0, l.useEffect)(() => () => {
      ep.current?.()
    }, []);
    let ef = (0, l.useMemo)(() => (function(e) {
        if (!e.startsWith("hatch-slides://")) return null;
        let t = e.replace(/^hatch-slides:\/\//, "").split(/[?#]/)[0]?.trim() ?? "";
        return t ? q(t).replace(/\/+$/, "") : null
      })(n), [n]),
      em = (0, l.useMemo)(() => ef ? ei(`${ef}/slides.json`) : [], [ef]),
      ex = (0, l.useCallback)(async e => (0, m.ensureFirstAvailableReadData)(w, _, e), [_, w]),
      ey = (0, l.useCallback)(async (e, t) => {
        let n = ed.current,
          i = ea.current[t.id];
        if (null != i) return i;
        let l = Q.current[t.id];
        if (null != l) return l;
        let r = eo.current.get(t.id);
        if (r) return r;
        let a = ex(el(t, e)).then(({
          path: e,
          text: i
        }) => (n !== ed.current || (es.current[t.id] = e, H(e => n !== ed.current || null != e[t.id] ? e : {
          ...e,
          [t.id]: i
        })), i)).finally(() => {
          eo.current.get(t.id) === a && n === ed.current && eo.current.delete(t.id)
        });
        return eo.current.set(t.id, a), a
      }, [ex]),
      eg = (0, l.useCallback)(() => {
        if (!ef) return T("Invalid presentation path."), Promise.resolve(null);
        if (ec.current) return ec.current;
        let e = (async () => {
          C(!0), T(null), z(null), F(null);
          try {
            let {
              path: e,
              text: t
            } = await ex(em), n = JSON.parse(t), i = (n.slides ?? []).filter(e => null != e && "string" == typeof e.id && "string" == typeof e.absolute_path && e.id.trim().length > 0 && e.absolute_path.trim().length > 0);
            if (0 === i.length) throw Error("No slides were found in the presentation payload.");
            let l = e.replace(/\/+$/, "").replace(/\/slides\.json$/i, "") || ef,
              r = {
                title: n.main_title?.trim() || b,
                slides: i,
                projectPath: l
              };
            E(r), D(0), ed.current += 1, eo.current.clear(), es.current = {}, Q.current = {}, ea.current = {}, H({}), z(null), W(null);
            let a = r.slides[0];
            return a && ey(r, a).catch(() => {}), r
          } catch (e) {
            return T(e instanceof Error ? e.message : "Failed to load presentation. Try again."), E(null), null
          } finally {
            C(!1), ec.current = null
          }
        })();
        return ec.current = e, e
      }, [b, ey, ef, ex, em]);
    (0, l.useEffect)(() => {
      if (V || S || N || I || !ef) return;
      let e = X.current;
      if (!e) return;
      let t = new IntersectionObserver(e => {
        let [n] = e;
        n?.isIntersecting && (t.disconnect(), Y(!0), eg())
      }, {
        threshold: .01,
        rootMargin: "240px 0px"
      });
      return t.observe(e), () => t.disconnect()
    }, [S, I, V, N, eg, ef]), (0, l.useEffect)(() => {
      !j || S || N || eg()
    }, [S, N, j, eg]);
    let eb = (0, l.useCallback)(async (t, n) => {
        let i = await Promise.all(t.slides.map(async e => {
            let i = n[e.id];
            if (null != i) return {
              id: e.id,
              title: e.page_title ?? e.id,
              html: i
            };
            let {
              path: l,
              text: r
            } = await ex(el(e, t));
            return es.current[e.id] = l, {
              id: e.id,
              title: e.page_title ?? e.id,
              html: r
            }
          })),
          l = await e.A(366997),
          r = [];
        for (let e of i) {
          let t = await et(l, e.html);
          r.push({
            ...e,
            canvas: t
          })
        }
        let a = {};
        for (let e of i) a[e.id] = e.html;
        return {
          renderedSlides: r,
          slideHtmlUpdates: a
        }
      }, [ex]),
      ev = (0, l.useCallback)(() => {
        let e = J.current,
          t = eu.current,
          n = e?.contentDocument;
        if (!e || !t || !n?.documentElement) return;
        let i = n.documentElement.outerHTML;
        i && (ea.current[t] = i, eh.current = {
          slideId: t,
          html: i,
          iframe: e
        })
      }, []),
      e_ = (0, l.useCallback)(() => {
        ev();
        let e = Object.entries(ea.current);
        if (0 === e.length) return {};
        let t = {},
          n = Q.current;
        for (let [i, l] of e) n[i] !== l && (t[i] = l);
        return 0 === Object.keys(t).length ? (ea.current = {}, {}) : (Q.current = {
          ...n,
          ...t
        }, H(e => {
          let n = !1,
            i = {
              ...e
            };
          for (let [e, l] of Object.entries(t)) i[e] !== l && (i[e] = l, n = !0);
          return n ? i : e
        }), ea.current = {}, t)
      }, [ev]),
      ew = (0, l.useCallback)(async e => {
        if (!S || 0 === Object.keys(e).length) return;
        B(!0), W(null);
        let t = Object.entries(e).flatMap(([e, t]) => {
          let n = S.slides.find(t => t.id === e);
          if (!n) return [];
          let i = function(e, t, n) {
            if (n) {
              let e = en(n);
              if (e) return e
            }
            let i = en(e.absolute_path);
            if (i) return i;
            let l = en(t.projectPath),
              r = function(e) {
                let t = en(e);
                if (!t) return "";
                if (t.startsWith("workspace/")) return t.slice(10);
                let n = "/workspace/",
                  i = t.indexOf(n);
                return i >= 0 ? t.slice(i + n.length) : t
              }(l);
            if (l && i.startsWith(`${l}/`) && r) {
              let e = i.slice(l.length + 1),
                t = en(`${r}/${e}`);
              if (t) return t
            }
            return null
          }(n, S, es.current[e] ?? null);
          return i ? [{
            slideId: e,
            html: t,
            path: i
          }] : []
        });
        if (0 === t.length) return void B(!1);
        if (!v) {
          W(`${p.PRODUCT_BRAND.shortName} is unavailable. Unable to save slides.`), B(!1);
          return
        }
        let n = (await Promise.allSettled(t.map(async e => {
          try {
            await _.write(e.path, e.html), (0, m.setReadData)(w, e.path, e.html), es.current[e.slideId] = e.path
          } catch (t) {
            throw Error(`Path ${e.path}: ${ee(t)}`)
          }
        }))).filter(e => "rejected" === e.status).at(0);
        n && W(ee(n.reason) || "Failed to save one or more slides."), B(!1)
      }, [S, _, w, v]),
      ej = (0, l.useCallback)(async t => {
        if (!L) {
          $(!0), F(null);
          try {
            let n = S ?? await eg();
            if (!n) throw Error("Unable to load presentation for download.");
            ev();
            let i = {
                ...Q.current,
                ...ea.current
              },
              {
                renderedSlides: l,
                slideHtmlUpdates: r
              } = await eb(n, i);
            if (H(e => ({
                ...e,
                ...r
              })), "pdf" === t) {
              let t = new(await e.A(323086)).default({
                  orientation: "landscape",
                  unit: "pt",
                  format: "a4"
                }),
                i = t.internal.pageSize.getWidth(),
                r = t.internal.pageSize.getHeight();
              for (let [e, n] of l.entries()) {
                let l = n.canvas.toDataURL("image/png");
                e > 0 && t.addPage();
                let a = i,
                  s = n.canvas.height * a / n.canvas.width;
                s > r && (s = r, a = n.canvas.width * s / n.canvas.height);
                let o = (i - a) / 2,
                  c = (r - s) / 2;
                t.addImage(l, "PNG", o, c, a, s, void 0, "FAST")
              }
              let a = `${Z(n.title,"slides-deck")}.pdf`;
              t.save(a)
            } else {
              let t = new(await e.A(356312)).default;
              for (let e of (t.defineLayout({
                  name: "CUSTOM_16_9",
                  width: 10,
                  height: 5.625
                }), t.layout = "CUSTOM_16_9", l)) {
                let n = e.canvas.toDataURL("image/png");
                t.addSlide().addImage({
                  data: n,
                  x: 0,
                  y: 0,
                  w: "100%",
                  h: "100%"
                })
              }
              let i = `${Z(n.title,"slides-deck")}.pptx`;
              await t.writeFile({
                fileName: i
              })
            }
          } catch (e) {
            F(e instanceof Error ? e.message : "Failed to prepare presentation download.")
          } finally {
            $(!1)
          }
        }
      }, [ev, S, L, eb, eg]),
      ek = (0, l.useCallback)(() => {
        ev(), D(e => S && 0 !== S.slides.length ? 0 === e ? S.slides.length - 1 : e - 1 : e), z(null)
      }, [ev, S]),
      eN = (0, l.useCallback)(() => {
        ev(), D(e => S && 0 !== S.slides.length ? e >= S.slides.length - 1 ? 0 : e + 1 : e), z(null)
      }, [ev, S]),
      eC = (0, l.useCallback)(e => {
        S && !(S.slides.length <= 1) && K({
          x: e.clientX,
          y: e.clientY
        })
      }, [S]),
      eI = (0, l.useCallback)(e => {
        if (!S || S.slides.length <= 1 || !G) return void K(null);
        let t = e.clientX - G.x,
          n = e.clientY - G.y;
        Math.abs(t) > 50 && Math.abs(t) > Math.abs(n) && (t > 0 ? ek() : eN()), K(null)
      }, [S, eN, ek, G]);
    (0, l.useEffect)(() => {
      if (!j || !S || S.slides.length <= 1) return;
      let e = e => {
        "ArrowLeft" === e.key ? (e.preventDefault(), ek()) : "ArrowRight" === e.key && (e.preventDefault(), eN())
      };
      return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, [S, eN, ek, j]);
    let eT = (0, l.useCallback)(() => {
      let e = J.current,
        t = eu.current;
      if (!e || !t) return;
      let n = e.contentDocument;
      if (!n || !n.documentElement) return;
      ep.current?.(), ep.current = null;
      try {
        n.designMode = "on"
      } catch {}
      n.body && (n.body.setAttribute("contenteditable", "true"), n.body.setAttribute("spellcheck", "false"), n.body.style.outline = "none");
      let i = () => {
        let i = n.documentElement?.outerHTML;
        i && (ea.current[t] = i, eh.current = {
          slideId: t,
          html: i,
          iframe: e
        })
      };
      n.addEventListener("input", i), ep.current = () => {
        n.removeEventListener("input", i)
      }
    }, []);
    (0, l.useEffect)(() => {
      if (!S) return;
      let e = S.slides[P];
      if (!e) return;
      let t = !1;
      return z(null), ey(S, e).catch(e => {
        t || z(e instanceof Error ? e.message : "Failed to load slide HTML.")
      }), () => {
        t = !0
      }
    }, [P, S, ey]), (0, l.useEffect)(() => {
      if (S)
        for (let e of [P - 1, P + 1]) {
          let t = S.slides[e];
          t && ey(S, t).catch(() => {})
        }
    }, [P, S, ey]);
    let eS = S?.slides[P],
      eE = eS?.id ?? null,
      eP = eE ? ea.current[eE] ?? R[eE] ?? null : null,
      eD = !!S && S.slides.length > 1,
      eR = S?.title ?? b,
      eH = !N && !I && !M && null != eP,
      eM = (0, l.useCallback)(() => {
        k(!0), S || eg()
      }, [S, eg]),
      eA = (0, l.useCallback)(e => {
        if (!e || !j || !eE || null == eP) return;
        let t = eh.current;
        (t?.slideId !== eE || t.html !== eP || t.iframe !== e) && (eu.current = eE, eh.current = {
          slideId: eE,
          html: eP,
          iframe: e
        }, e.srcdoc = eP)
      }, [eP, eE, j]),
      eO = (0, l.useCallback)(e => {
        if (J.current = e, !e) {
          ep.current?.(), ep.current = null, eh.current = null;
          return
        }
        eA(e)
      }, [eA]);
    (0, l.useEffect)(() => {
      eA(J.current)
    }, [eA]);
    let eU = (0, l.useCallback)(e => {
      if (!e) {
        let e = e_();
        Object.keys(e).length > 0 && ew(e)
      }
      k(e)
    }, [e_, ew]);
    return (0, t.jsxs)("span", {
      style: {
        display: "contents"
      },
      children: [(0, t.jsx)("span", {
        ref: X,
        className: "my-2 block w-[28rem] max-w-full cursor-pointer",
        onClick: eM,
        role: "button",
        tabIndex: 0,
        onKeyDown: e => {
          ("Enter" === e.key || " " === e.key) && (e.preventDefault(), eM())
        },
        children: (0, t.jsxs)("span", {
          className: "bg-fill-primary dark:bg-bg-primary rounded-16 border-fill-divider dark:border-fill-divider/50 block overflow-hidden border",
          children: [(0, t.jsxs)("span", {
            className: "flex items-center gap-3 px-3 py-3",
            children: [(0, t.jsx)("span", {
              className: "rounded-10 flex h-10 w-10 shrink-0 items-center justify-center bg-amber-500/10",
              children: (0, t.jsx)(c.HatchIcon, {
                icon: o.default,
                size: 20,
                className: "text-amber-500"
              })
            }), (0, t.jsxs)("span", {
              className: "flex min-w-0 flex-col gap-0.5",
              children: [(0, t.jsx)("span", {
                className: "text-footnote-emphasized text-text-primary truncate",
                children: eR
              }), (0, t.jsx)("span", {
                className: "text-caption-1 text-text-tertiary",
                children: S ? `Slides \xb7 ${S.slides.length}` : u.fbs._("Slides", null, {
                  hk: "dx8cX"
                })
              })]
            })]
          }), (0, t.jsx)("span", {
            className: "group/slides block px-3 pb-3",
            children: (0, t.jsxs)("span", {
              className: "rounded-8 relative block aspect-video w-full overflow-hidden",
              children: [(N || !S && !I) && (0, t.jsx)("span", {
                className: "flex h-full w-full items-center justify-center",
                children: (0, t.jsx)(U.Spinner, {
                  size: 16
                })
              }), !N && (I || M) && (0, t.jsx)("span", {
                className: "text-caption-1 text-text-tertiary flex h-full w-full items-center justify-center px-4 text-center",
                children: I ? u.fbs._("Unable to load presentation.", null, {
                  hk: "ySRxQ"
                }) : u.fbs._("Failed to load this slide.", null, {
                  hk: "1NHD0l"
                })
              }), !N && !I && !M && null == eP && S && (0, t.jsx)("span", {
                className: "flex h-full w-full items-center justify-center",
                children: (0, t.jsx)(U.Spinner, {
                  size: 16
                })
              }), eH && (0, t.jsx)("iframe", {
                sandbox: "allow-same-origin",
                className: "pointer-events-none absolute inset-0 border-0 select-none",
                style: {
                  width: "300%",
                  height: "300%",
                  transform: "scale(0.333333)",
                  transformOrigin: "0 0"
                },
                title: eS?.page_title ?? eS?.id ?? u.fbs._("Slide preview", null, {
                  hk: "GYawW"
                }),
                srcDoc: eP
              }), eD && (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("button", {
                  type: "button",
                  className: "absolute start-1.5 top-1/2 z-20 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover/slides:opacity-100 hover:bg-black/70",
                  onClick: e => {
                    e.stopPropagation(), ek()
                  },
                  "aria-label": u.fbs._("Previous slide", null, {
                    hk: "476ay1"
                  }),
                  children: (0, t.jsx)(c.HatchIcon, {
                    icon: a.default,
                    size: 14
                  })
                }), (0, t.jsx)("button", {
                  type: "button",
                  className: "absolute end-1.5 top-1/2 z-20 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover/slides:opacity-100 hover:bg-black/70",
                  onClick: e => {
                    e.stopPropagation(), eN()
                  },
                  "aria-label": u.fbs._("Next slide", null, {
                    hk: "2zv01I"
                  }),
                  children: (0, t.jsx)(c.HatchIcon, {
                    icon: s.default,
                    size: 14
                  })
                }), (0, t.jsx)("span", {
                  className: "absolute start-2 top-2 z-20 opacity-0 transition-opacity duration-200 group-hover/slides:opacity-100",
                  children: (0, t.jsx)("span", {
                    className: "text-caption-1 rounded-full bg-black/50 px-2.5 py-1 text-white/90 backdrop-blur-sm",
                    children: `${P+1}/${S.slides.length}`
                  })
                })]
              }), (0, t.jsx)("span", {
                className: "rounded-8 pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
              })]
            })
          })]
        })
      }), (0, t.jsx)(i.Root, {
        open: j,
        onOpenChange: eU,
        children: (0, t.jsxs)(i.Portal, {
          children: [(0, t.jsx)(i.Overlay, {
            className: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          }), (0, t.jsxs)(i.Content, {
            className: (0, h.cn)("dark fixed inset-0 z-50 outline-none", "data-[state=open]:animate-in data-[state=closed]:animate-out", "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"),
            onClick: () => eU(!1),
            children: [(0, t.jsx)(i.Title, {
              className: "sr-only",
              children: u.fbs._("Slides viewer", null, {
                hk: "4uvdnB"
              })
            }), (0, t.jsx)(i.Close, {
              asChild: !0,
              children: (0, t.jsx)(O.IconButton, {
                icon: d.default,
                label: u.fbs._("Close", null, {
                  hk: "2VsTTj"
                }),
                variant: "on-media",
                size: "32",
                className: "absolute start-4 top-4 z-20"
              })
            }), (0, t.jsxs)(A.DropdownMenu, {
              children: [(0, t.jsx)(A.DropdownMenuTrigger, {
                asChild: !0,
                children: (0, t.jsx)(O.IconButton, {
                  icon: r.default,
                  label: u.fbs._("Download", null, {
                    hk: "1663JZ"
                  }),
                  variant: "on-media",
                  size: "32",
                  disabled: L,
                  className: "absolute end-4 top-4 z-20",
                  onPointerDown: e => {
                    e.stopPropagation()
                  },
                  onClick: e => {
                    e.stopPropagation()
                  }
                })
              }), (0, t.jsxs)(A.DropdownMenuContent, {
                align: "end",
                side: "bottom",
                children: [(0, t.jsx)(A.DropdownMenuItem, {
                  label: u.fbs._("PDF (.pdf)", null, {
                    hk: "38CAvf"
                  }),
                  onSelect: () => {
                    ej("pdf")
                  }
                }), (0, t.jsx)(A.DropdownMenuItem, {
                  label: u.fbs._("PowerPoint (.pptx)", null, {
                    hk: "e0f2n"
                  }),
                  onSelect: () => {
                    ej("pptx")
                  }
                })]
              })]
            }), eD && (0, t.jsxs)(t.Fragment, {
              children: [(0, t.jsx)(O.IconButton, {
                icon: a.default,
                label: u.fbs._("Previous", null, {
                  hk: "4nSn6g"
                }),
                variant: "on-media",
                size: "48",
                className: "absolute start-4 top-1/2 z-20 -translate-y-1/2",
                onClick: e => {
                  e.stopPropagation(), ek()
                }
              }), (0, t.jsx)(O.IconButton, {
                icon: s.default,
                label: u.fbs._("Next", null, {
                  hk: "3inXTw"
                }),
                variant: "on-media",
                size: "48",
                className: "absolute end-4 top-1/2 z-20 -translate-y-1/2",
                onClick: e => {
                  e.stopPropagation(), eN()
                }
              })]
            }), (0, t.jsx)("div", {
              className: "relative z-10 flex h-full w-full items-center justify-center p-4 md:p-8",
              onPointerDown: eC,
              onPointerUp: eI,
              children: (0, t.jsxs)("span", {
                className: "flex h-full max-h-[92vh] w-full max-w-[min(1240px,96vw)] flex-col justify-center gap-3",
                onClick: e => e.stopPropagation(),
                children: [(0, t.jsxs)("span", {
                  className: "flex items-center justify-between text-white",
                  children: [(0, t.jsx)("span", {
                    className: "text-subheadline-medium",
                    children: eR
                  }), S && (0, t.jsx)("span", {
                    className: "text-caption-1 rounded-full bg-white/15 px-2.5 py-1 backdrop-blur-sm",
                    children: `${P+1}/${S.slides.length}`
                  })]
                }), N && (0, t.jsx)("span", {
                  className: "text-subheadline text-white/80",
                  children: u.fbs._("Loading presentation...", null, {
                    hk: "4xHowb"
                  })
                }), !N && I && (0, t.jsx)("span", {
                  className: "text-subheadline text-white/80",
                  children: `${u.fbs._("Unable to load presentation.",null,{hk:"ySRxQ"})} ${I}`
                }), !N && !I && M && (0, t.jsx)("span", {
                  className: "text-subheadline text-white/80",
                  children: `${u.fbs._("Failed to load this slide.",null,{hk:"1NHD0l"})} ${M}`
                }), !N && !I && !M && null == eP && (0, t.jsx)("span", {
                  className: "text-subheadline text-white/80",
                  children: u.fbs._("Loading slide...", null, {
                    hk: "1WcgUN"
                  })
                }), !N && !I && !M && null != eP && (0, t.jsx)("iframe", {
                  ref: eO,
                  sandbox: "allow-same-origin",
                  className: "rounded-12 aspect-video max-h-[80vh] w-full border border-white/20 bg-black",
                  title: eS?.page_title ?? eS?.id ?? u.fbs._("Slide preview", null, {
                    hk: "2A2yUh"
                  }),
                  onLoad: eT
                }), !N && !I && !M && null != eP && (0, t.jsx)("span", {
                  className: "flex justify-center",
                  children: (0, t.jsx)("span", {
                    className: "text-caption-1 rounded-full bg-white/10 px-3 py-1 text-white/50",
                    children: u.fbs._("Tip: click any text in the slide to edit it inline. Edits are preserved while browsing this deck.", null, {
                      hk: "3XazVc"
                    })
                  })
                })]
              })
            })]
          })]
        })
      })]
    })
  }

  function ea(e) {
    let t = [];
    return l.Children.forEach(e, e => {
      if ("string" == typeof e) t.push(e);
      else if ("number" == typeof e) t.push(String(e));
      else if ((0, l.isValidElement)(e)) {
        let n = e.props;
        n.children && t.push(ea(n.children))
      }
    }), t.join("")
  }
  e.s(["EctoMarkdownLink", 0, function(e) {
    var i, r;
    let a, s, o, c, d, u, p, f, m, x, y, b, v = (0, n.c)(51);
    v[0] !== e ? ({
      href: o,
      children: a,
      className: s,
      ...c
    } = e, v[0] = e, v[1] = a, v[2] = s, v[3] = o, v[4] = c) : (a = v[1], s = v[2], o = v[3], c = v[4]);
    let _ = o?.startsWith("http://") || o?.startsWith("https://"),
      w = o?.startsWith("#citation-"),
      j = null != o && (0, Q.isProductCitationHref)(o),
      k = null != o && (0, W.isAdsCitationHref)(o),
      N = o?.startsWith("hatch-slides://"),
      C = function(e) {
        let t, i, r, a, s = (0, n.c)(11),
          o = (0, l.useContext)(z.CitationContext);
        if (!o) {
          let e;
          return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = [], s[0] = e) : e = s[0], e
        }
        s[1] !== o.citations || s[2] !== e ? (t = o.citations.get(e), s[1] = o.citations, s[2] = e, s[3] = t) : t = s[3];
        let c = t;
        if (c) return c;
        if (!e.startsWith("#citation-delta-")) {
          let e;
          return s[4] === Symbol.for("react.memo_cache_sentinel") ? (e = [], s[4] = e) : e = s[4], e
        }
        s[5] !== e ? (i = e.slice(16).toLowerCase(), s[5] = e, s[6] = i) : i = s[6];
        let d = i,
          u = o.citations;
        if (s[7] !== o.citations || s[8] !== d) {
          for (let [e, t] of(r = Symbol.for("react.early_return_sentinel"), u.entries()))
            if (e.startsWith("#citation-delta-") && e.slice(16).toLowerCase() === d) {
              r = t;
              break
            } s[7] = o.citations, s[8] = d, s[9] = r
        } else r = s[9];
        return r !== Symbol.for("react.early_return_sentinel") ? r : (s[10] === Symbol.for("react.memo_cache_sentinel") ? (a = [], s[10] = a) : a = s[10], a)
      }(o ?? ""),
      I = (i = o ?? "", f = (0, n.c)(3), m = (0, l.useContext)(z.CitationContext), f[0] !== m?.productCitations || f[1] !== i ? (p = m?.productCitations.get(i) ?? null, f[0] = m?.productCitations, f[1] = i, f[2] = p) : p = f[2], p),
      T = (r = o ?? "", y = (0, n.c)(3), b = (0, l.useContext)(z.CitationContext), y[0] !== b?.adsCitations || y[1] !== r ? (x = b?.adsCitations.get(r) ?? null, y[0] = b?.adsCitations, y[1] = r, y[2] = x) : x = y[2], x);
    if (j) {
      let e;
      return v[5] !== a || v[6] !== s || v[7] !== I ? (e = null != I ? (0, t.jsx)(J, {
        citation: I
      }) : (0, t.jsx)("span", {
        className: (0, h.cn)(s),
        children: ea(a)
      }), v[5] = a, v[6] = s, v[7] = I, v[8] = e) : e = v[8], e
    }
    if (k) {
      let e;
      return v[9] !== T || v[10] !== a || v[11] !== s ? (e = null != T ? (0, t.jsx)(Y, {
        citation: T
      }) : (0, t.jsx)("span", {
        className: (0, h.cn)(s),
        children: ea(a)
      }), v[9] = T, v[10] = a, v[11] = s, v[12] = e) : e = v[12], e
    }
    if (w) {
      let e, n, i, l, r;
      if (C.length > 0) {
        let e;
        return v[13] !== C || v[14] !== s ? (e = (0, t.jsx)(M, {
          citations: C,
          className: s
        }), v[13] = C, v[14] = s, v[15] = e) : e = v[15], e
      }
      v[16] !== o ? (e = o?.replace(/^#citation-delta-/, "") ?? "", v[16] = o, v[17] = e) : e = v[17];
      let c = e;
      v[18] !== a || v[19] !== c ? (n = c.length > 0 ? `[${c}]` : ea(a), v[18] = a, v[19] = c, v[20] = n) : n = v[20];
      let d = n;
      return v[21] !== s ? (i = (0, h.cn)(s), v[21] = s, v[22] = i) : i = v[22], v[23] !== a ? (l = ea(a), v[23] = a, v[24] = l) : l = v[24], v[25] !== i || v[26] !== l || v[27] !== d ? (r = (0, t.jsx)("span", {
        className: i,
        "aria-label": l,
        children: d
      }), v[25] = i, v[26] = l, v[27] = d, v[28] = r) : r = v[28], r
    }
    if (N && o) {
      let e, n, i;
      v[29] !== o ? (e = function(e) {
        let t = e.replace(/^hatch-slides:\/\//, "").replace(/\/+$/, "").split("/").filter(Boolean),
          n = t[t.length - 1];
        if (!n) return "Slides deck";
        try {
          return decodeURIComponent(n)
        } catch {
          return n
        }
      }(o), v[29] = o, v[30] = e) : e = v[30];
      let l = e;
      v[31] !== a ? (n = ea(a).trim(), v[31] = a, v[32] = n) : n = v[32];
      let r = n,
        s = r && r !== o ? r : `Presentation ready: ${l}`;
      return v[33] !== l || v[34] !== o || v[35] !== s ? (i = (0, t.jsx)(er, {
        href: o,
        subtitle: s,
        deckName: l
      }), v[33] = l, v[34] = o, v[35] = s, v[36] = i) : i = v[36], i
    }
    if (_) {
      let e, n;
      return v[37] !== s ? (e = (0, h.cn)("text-text-primary-link no-underline", s), v[37] = s, v[38] = e) : e = v[38], v[39] !== a || v[40] !== o || v[41] !== c || v[42] !== e ? (n = (0, t.jsx)(g.EctoAnchor, {
        href: o,
        className: e,
        ...c,
        children: a
      }), v[39] = a, v[40] = o, v[41] = c, v[42] = e, v[43] = n) : n = v[43], n
    }
    return v[44] !== s ? (d = (0, h.cn)("text-text-primary-link no-underline", s), v[44] = s, v[45] = d) : d = v[45], v[46] !== a || v[47] !== o || v[48] !== c || v[49] !== d ? (u = (0, t.jsx)("a", {
      href: o,
      className: d,
      ...c,
      children: a
    }), v[46] = a, v[47] = o, v[48] = c, v[49] = d, v[50] = u) : u = v[50], u
  }, "HatchSlidesLinkCard", 0, er], 947572)
}]);

//# debugId=09711112-bd44-5b49-41fe-954ab08efc27
//# sourceMappingURL=0c3ck1v2clw9o.js.map