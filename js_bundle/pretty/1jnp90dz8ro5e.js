;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "1b89ef2c-f993-b861-c0d1-74f0f140195c")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 464800, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    l = e.i(519172),
    i = e.i(41507),
    n = e.i(245398);

  function r(e) {
    let l, n = (0, a.c)(3),
      {
        children: r,
        layout: s
      } = e;
    return n[0] !== r || n[1] !== s ? (l = (0, t.jsx)(i.HatchChatMessageLayoutContext.Provider, {
      value: s,
      children: r
    }), n[0] = r, n[1] = s, n[2] = l) : l = n[2], l
  }

  function s(e) {
    return null != e && "boolean" != typeof e && ("string" == typeof e ? e.trim().length > 0 : !(0, l.isValidElement)(e) || e.type !== l.Fragment || l.Children.count(e.props.children) > 0)
  }

  function c(e) {
    let l, i = (0, a.c)(2),
      {
        children: n
      } = e;
    return i[0] !== n ? (l = (0, t.jsx)(t.Fragment, {
      children: n
    }), i[0] = n, i[1] = l) : l = i[1], l
  }

  function o(e) {
    return (0, l.isValidElement)(e) && e.type === c && !0 === e.props.taperWithPrevious
  }
  e.s(["HatchChatBubbleSequence", 0, function(e) {
    let c, u = (0, a.c)(3),
      {
        children: d
      } = e,
      m = (0, l.useContext)(i.HatchChatMessageLayoutContext);
    if (u[0] !== d || u[1] !== m) {
      let e = l.Children.toArray(d).filter(s);
      c = e.map((a, s) => {
        let c = (0, n.layoutForHatchChatBubbleSurface)(m, s, e.length, {
          taperWithPrevious: o(a),
          taperWithNext: o(e[s + 1])
        });
        return (0, t.jsx)(r, {
          layout: c,
          children: (0, t.jsx)("div", {
            className: "contents",
            "data-chat-bubble-surface-position": c.surfacePosition,
            "data-chat-bubble-surface-index": c.surfaceIndex,
            "data-chat-bubble-surface-count": c.surfaceCount,
            style: (0, i.hatchChatBubbleRadiusStyle)(c),
            children: a
          })
        }, (0, l.isValidElement)(a) ? a.key ?? `surface-${s}` : `surface-${s}`)
      }), u[0] = d, u[1] = m, u[2] = c
    } else c = u[2];
    return c
  }, "HatchChatBubbleSequenceSurface", 0, c, "HatchChatMessageLayoutProvider", 0, r])
}, 326808, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    l = e.i(646361),
    i = e.i(239286),
    n = e.i(374785);
  e.s(["HatchFileChip", 0, function(e) {
    let r, s, c, o, u, d, m, h, f = (0, a.c)(25),
      {
        filename: p,
        typeLabel: g,
        icon: x,
        variant: y,
        appearance: b,
        isLoading: v,
        title: C
      } = e,
      S = void 0 === y ? "accent" : y,
      I = void 0 !== v && v,
      j = "artifactBubble" === (void 0 === b ? "default" : b),
      _ = j ? "text-subheadline-medium" : "text-footnote-emphasized";
    f[0] !== _ ? (r = (0, n.cn)("text-text-primary block min-w-0 truncate", _), f[0] = _, f[1] = r) : r = f[1], f[2] !== p || f[3] !== r || f[4] !== C ? (s = (0, t.jsx)("span", {
      className: r,
      title: C,
      children: p
    }), f[2] = p, f[3] = r, f[4] = C, f[5] = s) : s = f[5];
    let H = s,
      T = j ? "gap-2 py-2.5 ps-3 pe-4" : "gap-3 px-3 py-3";
    f[6] !== T ? (c = (0, n.cn)("flex min-w-0 flex-1 items-center", T), f[6] = T, f[7] = c) : c = f[7], f[8] !== x || f[9] !== I || f[10] !== S ? (o = "plain" === S ? (0, t.jsx)("span", {
      className: "flex h-10 w-10 shrink-0 items-center justify-center",
      children: I ? (0, t.jsx)(i.Spinner, {
        size: 20
      }) : (0, t.jsx)(l.HatchIcon, {
        icon: x,
        size: 40,
        "aria-hidden": "true"
      })
    }) : (0, t.jsx)("span", {
      className: "bg-hatch-accent/10 rounded-10 flex h-10 w-10 shrink-0 items-center justify-center",
      children: I ? (0, t.jsx)(i.Spinner, {
        size: 16
      }) : (0, t.jsx)(l.HatchIcon, {
        icon: x,
        size: 20,
        className: "text-hatch-accent",
        "aria-hidden": "true"
      })
    }), f[8] = x, f[9] = I, f[10] = S, f[11] = o) : o = f[11];
    let k = !j && "gap-0.5";
    return f[12] !== k ? (u = (0, n.cn)("flex min-w-0 flex-1 flex-col", k), f[12] = k, f[13] = u) : u = f[13], f[14] !== j || f[15] !== g ? (d = g && (0, t.jsx)("span", {
      className: (0, n.cn)("truncate", j ? "text-footnote text-text-secondary" : "text-caption-1 text-text-tertiary"),
      title: g,
      children: g
    }), f[14] = j, f[15] = g, f[16] = d) : d = f[16], f[17] !== H || f[18] !== u || f[19] !== d ? (m = (0, t.jsxs)("span", {
      className: u,
      children: [H, d]
    }), f[17] = H, f[18] = u, f[19] = d, f[20] = m) : m = f[20], f[21] !== m || f[22] !== c || f[23] !== o ? (h = (0, t.jsxs)("span", {
      className: c,
      children: [o, m]
    }), f[21] = m, f[22] = c, f[23] = o, f[24] = h) : h = f[24], h
  }])
}, 388586, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    l = e.i(519172),
    i = e.i(813280),
    n = e.i(315882),
    r = e.i(760806),
    s = e.i(596860),
    c = e.i(205254),
    o = e.i(648386);

  function u(e) {
    let i, n, r, s, c, o, u, d = (0, a.c)(16),
      m = (0, l.useId)();
    d[0] !== e.title ? (i = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), d[0] = e.title, d[1] = i) : i = d[1];
    let h = `url(#${m})`;
    return d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)("path", {
      d: "M14.928 7.371a1 1 0 1 0-1.857-.742l-4 10a1 1 0 0 0 1.857.742l4-10zM3.293 12.707a1 1 0 0 1 0-1.414l3-3a1 1 0 1 1 1.414 1.414L5.414 12l2.293 2.293a1 1 0 1 1-1.414 1.414l-3-3zM20.707 11.293l-3-3a1 1 0 1 0-1.414 1.414L18.586 12l-2.293 2.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414z"
    }), d[2] = n) : n = d[2], d[3] !== h ? (r = (0, t.jsx)("g", {
      clipPath: h,
      children: n
    }), d[3] = h, d[4] = r) : r = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)("path", {
      d: "M0 0H24V24H0z"
    }), d[5] = s) : s = d[5], d[6] !== m ? (c = (0, t.jsx)("clipPath", {
      id: m,
      children: s
    }), d[6] = m, d[7] = c) : c = d[7], d[8] !== e.children || d[9] !== c ? (o = (0, t.jsxs)("defs", {
      children: [c, e.children]
    }), d[8] = e.children, d[9] = c, d[10] = o) : o = d[10], d[11] !== e || d[12] !== i || d[13] !== r || d[14] !== o ? (u = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [i, r, o]
    }), d[11] = e, d[12] = i, d[13] = r, d[14] = o, d[15] = u) : u = d[15], u
  }
  u._isSVG = !0;
  var d = e.i(288119),
    m = e.i(326808),
    h = e.i(374785),
    f = e.i(562200),
    p = e.i(829051),
    g = e.i(245398);

  function x(e) {
    let l, i, n, r, s = (0, a.c)(17),
      {
        file: c,
        onClick: x,
        outgoing: y
      } = e;
    (0, f.useHoldReleaseSignal)(void 0 !== y && y ? null : c.path);
    let b = "text" === c.category ? u : o.default;
    s[0] !== c.filename ? (l = (0, d.getFileTypeLabel)(c.filename), s[0] = c.filename, s[1] = l) : l = s[1];
    let v = l,
      C = v ? `${c.filename}, ${v}` : c.filename,
      S = null != c.path && null != x;
    s[2] !== b || s[3] !== c.filename || s[4] !== v ? (i = (0, t.jsx)(m.HatchFileChip, {
      filename: c.filename,
      typeLabel: v,
      icon: b,
      appearance: "artifactBubble",
      title: c.filename
    }), s[2] = b, s[3] = c.filename, s[4] = v, s[5] = i) : i = s[5];
    let I = i,
      j = S && "cursor-pointer",
      _ = S && p.BUBBLE_HOVER_CLASS;
    s[6] !== j || s[7] !== _ ? (n = (0, h.cn)(g.HATCH_CHAT_GROUPABLE_BUBBLE_CLASS, "rounded-22 min-h-[60px] w-[280px] max-w-full overflow-hidden bg-[var(--hatch-agent-bubble-bg)] text-start", j, _), s[6] = j, s[7] = _, s[8] = n) : n = s[8];
    let H = n;
    if (!S) {
      let e;
      return s[9] !== H || s[10] !== I ? (e = (0, t.jsx)("div", {
        className: H,
        children: I
      }), s[9] = H, s[10] = I, s[11] = e) : e = s[11], e
    }
    return s[12] !== C || s[13] !== H || s[14] !== I || s[15] !== x ? (r = (0, t.jsx)("button", {
      type: "button",
      className: H,
      onClick: x,
      "aria-label": C,
      children: I
    }), s[12] = C, s[13] = H, s[14] = I, s[15] = x, s[16] = r) : r = s[16], r
  }
  var y = e.i(345717),
    b = e.i(848048),
    v = e.i(281539),
    C = e.i(905156),
    S = e.i(441635),
    I = e.i(176048),
    j = e.i(91521),
    _ = e.i(437081),
    H = e.i(239286),
    T = e.i(539522),
    k = e.i(791661),
    A = e.i(926250),
    M = e.i(52038),
    w = e.i(508180),
    L = e.i(384784),
    U = e.i(840282),
    B = e.i(185576),
    E = e.i(767408),
    N = e.i(258544),
    R = e.i(74894),
    D = e.i(341771);

  function P(e, t, a, l) {
    return null != l && l.length > 0 ? l : null != a && a.length > 0 ? `message:${a}` : null != e.media ? `media:${e.media.resource_id}:${e.media.version}` : `legacy:${e.filename}:${t}`
  }

  function $(e) {
    let l, i, n = (0, a.c)(8),
      {
        isSingleImage: r,
        cornerRadiusClass: s,
        messageId: c,
        createdAt: o
      } = e,
      u = r && g.HATCH_CHAT_GROUPABLE_BUBBLE_CLASS,
      d = r ? "aspect-[11/9] w-[220px] max-w-full" : "aspect-square w-full";
    return n[0] !== s || n[1] !== u || n[2] !== d ? (l = (0, h.cn)(s, u, "shrink-0", d), n[0] = s, n[1] = u, n[2] = d, n[3] = l) : l = n[3], n[4] !== o || n[5] !== c || n[6] !== l ? (i = (0, t.jsx)(N.HatchDeletedImageTombstone, {
      className: l,
      messageId: c,
      createdAt: o
    }), n[4] = o, n[5] = c, n[6] = l, n[7] = i) : i = n[7], i
  }

  function F({
    file: e,
    iconSrcBySlug: a,
    deleted: i = !1,
    isSingleImage: n,
    cornerRadiusClass: r,
    isOverflowHidden: s = !1,
    onResolve: c,
    onDelete: o,
    onOpen: u,
    messageId: d,
    createdAt: m,
    onReply: f
  }) {
    let p = (0, C.useHatchChatThreadLoggingMetadataFromContext)(),
      x = e.path ?? null,
      y = (0, B.resolveCanonicalSpaceIconSrcBySlug)(x, a),
      S = (0, T.resolveLocalImagePath)(y),
      _ = (0, A.useResolvedHatchImageMedia)({
        sourceUrl: y,
        filePath: S ?? x,
        media: e.media,
        previewUrl: e.previewUrl,
        usage: "thumbnail"
      }),
      k = _.src,
      M = (0, l.useMemo)(() => (0, j.chatMessageFileToMediaItem)(e, k), [e, k]),
      {
        dimensions: w,
        rememberDimensions: L
      } = (0, D.useHatchImageDimensions)(n ? k : null),
      R = (0, D.containedImageFrameStyle)(w, 220, 180, 11 / 9),
      P = (0, l.useRef)(c);
    P.current = c, (0, l.useEffect)(() => {
      P.current?.(i ? null : M)
    }, [i, M]);
    let G = {
        surface: "chat",
        subsurface: "message_image_context_menu",
        ...p,
        file_extension: (0, E.fileExtensionForTelemetry)(e.filename)
      },
      z = (0, b.useTrackedClickRef)({
        eventName: v.HatchClickEvent.CHAT_MEDIA_CLICK,
        actionTarget: "image_thumbnail",
        actionType: "click",
        metadata: {
          ...G,
          subsurface: "message"
        }
      }),
      O = (0, h.cn)(r, n && g.HATCH_CHAT_GROUPABLE_BUBBLE_CLASS, "overflow-hidden", n ? "max-w-full" : "aspect-square w-full"),
      V = n ? "h-full w-full object-contain" : "h-full w-full object-cover",
      q = (0, h.cn)(O, "flex items-center justify-center");
    if (i) return (0, t.jsx)($, {
      isSingleImage: n,
      cornerRadiusClass: r,
      messageId: d,
      createdAt: m
    });
    if (null == k) return (0, t.jsx)("div", {
      className: "flex shrink-0",
      children: "loading" === _.resolutionStatus ? (0, t.jsx)("div", {
        className: (0, h.cn)(q, "bg-[var(--hatch-agent-bubble-bg)]"),
        style: n ? R : void 0,
        children: (0, t.jsx)(H.Spinner, {
          size: 16
        })
      }) : (0, t.jsx)(N.HatchUnavailableMediaTile, {
        kind: "image",
        messageId: d,
        createdAt: m,
        className: (0, h.cn)(q, n && "aspect-[11/9] w-[220px]"),
        testId: "chat-image-not-found"
      })
    });
    let K = (0, t.jsx)("button", {
      ref: s ? void 0 : z.ref,
      type: "button",
      tabIndex: s ? -1 : void 0,
      onClick: e => (0, U.handleContextMenuTriggerClick)(e, () => {
        z.onClick(), u?.()
      }),
      className: (0, h.cn)(O, "relative cursor-pointer", n && "flex items-center justify-center"),
      style: n ? R : void 0,
      children: (0, t.jsx)(I.EctoGracefulImage, {
        src: k,
        alt: e.filename,
        loading: "lazy",
        fade: !1,
        onLoad: e => L(e.currentTarget),
        className: (0, h.cn)(V, "outline-media-protection-border outline-[0.5px] -outline-offset-[0.5px]"),
        style: {
          borderRadius: "inherit"
        }
      })
    });
    return (0, t.jsx)("div", {
      className: "flex shrink-0",
      children: s ? K : (0, t.jsx)(N.HatchChatImageContextMenu, {
        sourceUrl: k,
        replySourceUrl: e.previewUrl ?? y,
        mediaItem: M,
        filename: e.filename,
        mimeType: e.mimeType,
        messageId: d,
        createdAt: m,
        onReply: f,
        onDelete: o,
        children: K
      })
    })
  }

  function G({
    overflowCount: e,
    cornerRadiusClass: a,
    file: l,
    mediaItem: i,
    deleted: n,
    disabled: r,
    onOpen: s,
    onDelete: c,
    messageId: o,
    createdAt: u,
    onReply: d
  }) {
    let m = (0, C.useHatchChatThreadLoggingMetadataFromContext)(),
      f = (0, b.useTrackedClickRef)({
        eventName: v.HatchClickEvent.CHAT_MEDIA_CLICK,
        actionTarget: "image_thumbnail",
        actionType: "click",
        metadata: {
          surface: "chat",
          subsurface: "message",
          ...m,
          file_extension: (0, E.fileExtensionForTelemetry)(l.filename)
        }
      }),
      p = (0, j.getHatchMediaItemRenderSrc)(i, "thumbnail"),
      g = (0, t.jsx)("button", {
        ref: f.ref,
        type: "button",
        "aria-label": y.fbs._("Open image gallery with {image count} images", [y.fbs._param("image count", String(e + R.HATCH_IMAGE_GRID_MAX_VISIBLE))], {
          hk: "4zyTj4"
        }),
        disabled: r,
        className: (0, h.cn)(a, "bg-media-overflow-scrim text-text-white text-display outline-media-protection-border focus-visible:ring-hatch-accent/40 absolute inset-0 z-10 flex items-center justify-center outline-[0.5px] -outline-offset-[0.5px] focus-visible:ring-2 focus-visible:outline-none disabled:cursor-default"),
        onClick: e => {
          e.stopPropagation(), f.onClick(), s()
        },
        children: y.fbs._("+{overflow count}", [y.fbs._param("overflow count", String(e))], {
          hk: "4CkE6o"
        })
      });
    return null == p || null == i || n ? g : (0, t.jsx)(N.HatchChatImageContextMenu, {
      sourceUrl: p,
      mediaItem: i,
      filename: l.filename,
      mimeType: l.mimeType,
      messageId: o,
      createdAt: u,
      onReply: d,
      onDelete: c,
      children: g
    })
  }

  function z(e) {
    let i, n, r, s, c, o, u, d, m, f, p, x, y, b, v, C, I, H, T, A = (0, a.c)(76),
      {
        files: U,
        messageId: E,
        messageOccurrenceId: N,
        createdAt: D,
        onReply: $
      } = e,
      {
        data: z
      } = (0, k.useHatchSpacesQuery)();
    A[0] !== z ? (i = void 0 === z ? [] : z, A[0] = z, A[1] = i) : i = A[1];
    let q = i,
      {
        gatewayUrl: K,
        vmName: W
      } = (0, M.useHatchServerData)();
    A[2] !== q ? (n = (0, B.buildSpaceIconSrcBySlug)(q), A[2] = q, A[3] = n) : n = A[3];
    let X = n,
      Q = W ?? K ?? "unscoped",
      J = (0, L.useDeletedChatImageKeys)(),
      Y = (0, l.useRef)(null),
      [Z, ee] = (0, l.useState)(!1),
      [et, ea] = (0, l.useState)(0);
    A[4] !== U ? (r = () => U.map(V), A[4] = U, A[5] = r) : r = A[5];
    let [el, ei] = (0, l.useState)(r);
    A[6] !== Q ? (s = e => {
      let t = Y.current;
      Y.current = null, null != t && (0, w.markChatImageDeleted)(Q, t, e.requestedPath), ee(!1)
    }, A[6] = Q, A[7] = s) : s = A[7];
    let en = s;
    A[8] !== en ? (c = {
      origin: "chat_image_context_menu",
      onDeleted: en
    }, A[8] = en, A[9] = c) : c = A[9];
    let {
      requestDelete: er
    } = (0, _.useHatchDeleteConfirmation)(c);
    A[10] !== en ? (o = {
      origin: "media_lightbox",
      onDeleted: en
    }, A[10] = en, A[11] = o) : o = A[11];
    let {
      requestDelete: es
    } = (0, _.useHatchDeleteConfirmation)(o);
    A[12] !== U ? (u = () => {
      ei(e => {
        let t = e.length !== U.length,
          a = U.map((a, l) => {
            let i = (0, j.chatMessageFileToMediaItem)(a, a.previewUrl ?? null) ?? e[l] ?? null;
            return (0, j.areHatchMediaItemsEqual)(e[l], i) || (t = !0), i
          });
        return t ? a : e
      })
    }, d = [U], A[12] = U, A[13] = u, A[14] = d) : (u = A[13], d = A[14]), (0, l.useEffect)(u, d), A[15] === Symbol.for("react.memo_cache_sentinel") ? (m = (e, t) => {
      ei(a => {
        if ((0, j.areHatchMediaItemsEqual)(a[e], t)) return a;
        let l = [...a];
        return l[e] = t, l
      })
    }, A[15] = m) : m = A[15];
    let ec = m;
    if (A[16] !== J || A[17] !== Q || A[18] !== U || A[19] !== E || A[20] !== N || A[21] !== el) {
      let e;
      A[23] !== J || A[24] !== Q || A[25] !== U || A[26] !== E || A[27] !== N ? (e = (e, t) => {
        let a = U[t];
        return null == e || null == a || null != e.path && J.has((0, w.getDeletedChatImageKey)(Q, P(a, t, E, N), e.path)) ? [] : [{
          sourceIndex: t,
          item: e
        }]
      }, A[23] = J, A[24] = Q, A[25] = U, A[26] = E, A[27] = N, A[28] = e) : e = A[28], f = el.flatMap(e), A[16] = J, A[17] = Q, A[18] = U, A[19] = E, A[20] = N, A[21] = el, A[22] = f
    } else f = A[22];
    let eo = f;
    A[29] !== eo ? (p = eo.map(O), A[29] = eo, A[30] = p) : p = A[30];
    let eu = p;
    if (A[31] !== et || A[32] !== eo) {
      let e;
      A[34] !== et ? (e = e => e.sourceIndex === et, A[34] = et, A[35] = e) : e = A[35], x = eo.findIndex(e), A[31] = et, A[32] = eo, A[33] = x
    } else x = A[33];
    let ed = Math.max(0, x);
    A[36] !== U || A[37] !== E || A[38] !== N || A[39] !== es || A[40] !== eo ? (y = (e, t) => {
      if (null != e.path) {
        let a = eo[t]?.sourceIndex;
        if (null == a) return;
        let l = U[a];
        null != l && (Y.current = P(l, a, E, N), es(e.path))
      }
    }, A[36] = U, A[37] = E, A[38] = N, A[39] = es, A[40] = eo, A[41] = y) : y = A[41];
    let em = y,
      eh = 1 === U.length,
      ef = Math.max(0, U.length - R.HATCH_IMAGE_GRID_MAX_VISIBLE),
      ep = !eh && g.HATCH_CHAT_GROUPABLE_BUBBLE_CLASS,
      eg = !eh && "overflow-auto";
    return A[42] !== U.length || A[43] !== eh || A[44] !== ep || A[45] !== eg ? (b = (0, h.cn)(ep, eg, "relative grid max-w-full justify-end", R.HATCH_IMAGE_GRID_GAP, !eh && (0, R.hatchImageGridCellSizeClass)(U.length)), A[42] = U.length, A[43] = eh, A[44] = ep, A[45] = eg, A[46] = b) : b = A[46], A[47] !== U.length || A[48] !== eh ? (v = eh ? void 0 : {
      gridTemplateColumns: (0, R.hatchImageGridTemplate)(U.length)
    }, A[47] = U.length, A[48] = eh, A[49] = v) : v = A[49], A[50] !== D || A[51] !== J || A[52] !== Q || A[53] !== U || A[54] !== X || A[55] !== eh || A[56] !== eu || A[57] !== E || A[58] !== N || A[59] !== $ || A[60] !== ef || A[61] !== er || A[62] !== el ? (C = U.map((e, a) => {
      let l, i = a >= R.HATCH_IMAGE_GRID_MAX_VISIBLE,
        n = a === R.HATCH_IMAGE_GRID_MAX_VISIBLE - 1 && ef > 0,
        r = null != (l = e.path ?? e.media?.path ?? null) && J.has((0, w.getDeletedChatImageKey)(Q, P(e, a, E, N), l)),
        s = eh ? R.HATCH_IMAGE_GRID_RADIUS : (0, R.hatchImageGridCellRadiusClass)(U.length, a);
      return (0, t.jsxs)("div", {
        "aria-hidden": i ? "true" : void 0,
        inert: !!i || void 0,
        className: i ? "pointer-events-none absolute size-px overflow-hidden opacity-0" : "relative",
        children: [(0, t.jsx)("div", {
          "aria-hidden": n ? "true" : void 0,
          inert: !!n || void 0,
          children: (0, t.jsx)(F, {
            file: e,
            iconSrcBySlug: X,
            deleted: r,
            isSingleImage: eh,
            cornerRadiusClass: s,
            isOverflowHidden: i || n,
            onResolve: e => ec(a, e),
            onDelete: t => {
              Y.current = P(e, a, E, N), er(t)
            },
            messageId: E,
            createdAt: D,
            onReply: $,
            onOpen: () => {
              ea(a), ee(!0)
            }
          })
        }), n && (0, t.jsx)(G, {
          overflowCount: ef,
          cornerRadiusClass: s,
          file: e,
          mediaItem: el[a] ?? null,
          deleted: r,
          disabled: 0 === eu.length,
          onOpen: () => {
            ea(a), ee(!0)
          },
          onDelete: t => {
            Y.current = P(e, a, E, N), er(t)
          },
          messageId: E,
          createdAt: D,
          onReply: $
        })]
      }, `${e.filename}-img-${a}`)
    }), A[50] = D, A[51] = J, A[52] = Q, A[53] = U, A[54] = X, A[55] = eh, A[56] = eu, A[57] = E, A[58] = N, A[59] = $, A[60] = ef, A[61] = er, A[62] = el, A[63] = C) : C = A[63], A[64] !== b || A[65] !== v || A[66] !== C ? (I = (0, t.jsx)("div", {
      className: b,
      style: v,
      children: C
    }), A[64] = b, A[65] = v, A[66] = C, A[67] = I) : I = A[67], A[68] !== em || A[69] !== ed || A[70] !== eu || A[71] !== Z ? (H = (0, t.jsx)(S.HatchMediaLightbox, {
      items: eu,
      initialIndex: ed,
      open: Z,
      onOpenChange: ee,
      onDelete: em
    }), A[68] = em, A[69] = ed, A[70] = eu, A[71] = Z, A[72] = H) : H = A[72], A[73] !== I || A[74] !== H ? (T = (0, t.jsxs)(t.Fragment, {
      children: [I, H]
    }), A[73] = I, A[74] = H, A[75] = T) : T = A[75], T
  }

  function O(e) {
    return e.item
  }

  function V(e) {
    return (0, j.chatMessageFileToMediaItem)(e, e.previewUrl ?? null)
  }
  var q = e.i(764866),
    K = e.i(646361);
  e.i(970012);
  var W = e.i(89820);
  let X = (0, h.cn)(g.HATCH_CHAT_GROUPABLE_BUBBLE_CLASS, "relative aspect-[11/7] w-[220px] max-w-full overflow-hidden");

  function Q(e) {
    let l, i, n, r, s = (0, a.c)(69),
      {
        file: c,
        onClick: o,
        deleted: u,
        messageId: d,
        createdAt: m,
        onReply: h,
        onDelete: f
      } = e,
      p = c.media?.version;
    s[0] !== c.media || s[1] !== c.path || s[2] !== c.previewUrl || s[3] !== p ? (l = {
      filePath: c.path,
      media: c.media,
      previewUrl: c.previewUrl,
      cacheVersion: p,
      loadLegacyPlayback: !1,
      generateLegacyPoster: !0
    }, s[0] = c.media, s[1] = c.path, s[2] = c.previewUrl, s[3] = p, s[4] = l) : l = s[4];
    let g = (0, A.useResolvedHatchVideoMedia)(l);
    s[5] !== c || s[6] !== g.playbackSrc || s[7] !== g.posterSrc ? (i = (0, j.chatMessageFileToMediaItem)(c, g.playbackSrc, g.posterSrc), s[5] = c, s[6] = g.playbackSrc, s[7] = g.posterSrc, s[8] = i) : i = s[8];
    let x = i,
      y = g.playbackSrc ?? c.previewUrl ?? "";
    s[9] !== c.path || s[10] !== c.previewUrl || s[11] !== g.playbackSrc ? (n = null != c.path || null == c.previewUrl || c.previewUrl.startsWith("blob:") ? g.playbackSrc : c.previewUrl, s[9] = c.path, s[10] = c.previewUrl, s[11] = g.playbackSrc, s[12] = n) : n = s[12];
    let b = n;
    if (void 0 !== u && u) {
      let e;
      return s[13] !== m || s[14] !== d ? (e = (0, t.jsx)(N.HatchDeletedMediaTombstone, {
        kind: "video",
        className: X,
        messageId: d,
        createdAt: m
      }), s[13] = m, s[14] = d, s[15] = e) : e = s[15], e
    }
    if ("failed" === g.resolutionStatus) {
      let e;
      return s[16] !== m || s[17] !== d ? (e = (0, t.jsx)(N.HatchUnavailableMediaTile, {
        kind: "video",
        messageId: d,
        createdAt: m,
        className: X,
        testId: "chat-video-not-found"
      }), s[16] = m, s[17] = d, s[18] = e) : e = s[18], e
    }
    if ("loading" === g.resolutionStatus) {
      let e;
      return s[19] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("span", {
        className: `${X} rounded-22 flex items-center justify-center bg-[var(--hatch-agent-bubble-bg)]`,
        children: (0, t.jsx)(H.Spinner, {
          size: 16
        })
      }), s[19] = e) : e = s[19], e
    }
    if (null != g.posterSrc) {
      let e, a, l, i, n;
      s[20] !== o ? (e = e => {
        e.stopPropagation(), (0, U.handleContextMenuTriggerClick)(e, () => o?.())
      }, s[20] = o, s[21] = e) : e = s[21], s[22] !== c.filename || s[23] !== g.posterSrc ? (a = (0, t.jsx)(I.EctoGracefulImage, {
        src: g.posterSrc,
        alt: c.filename,
        className: "h-full w-full object-cover",
        fade: !1
      }), s[22] = c.filename, s[23] = g.posterSrc, s[24] = a) : a = s[24], s[25] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)(J, {}), s[25] = l) : l = s[25], s[26] !== e || s[27] !== a ? (i = (0, t.jsxs)("button", {
        type: "button",
        onClick: e,
        className: `${X} rounded-22 outline-media-protection-border cursor-pointer outline-[0.5px] -outline-offset-[0.5px]`,
        children: [a, l]
      }), s[26] = e, s[27] = a, s[28] = i) : i = s[28];
      let r = i;
      return s[29] !== m || s[30] !== c.filename || s[31] !== c.media?.version || s[32] !== c.mimeType || s[33] !== g.posterSrc || s[34] !== x || s[35] !== d || s[36] !== f || s[37] !== h || s[38] !== b || s[39] !== y || s[40] !== r ? (n = null != x ? (0, t.jsx)(N.HatchChatMediaContextMenu, {
        shareButtonLayout: "inline",
        mediaKind: "video",
        sourceUrl: y,
        replyPreviewUrl: g.posterSrc,
        replySourceUrl: b,
        replyCacheVersion: c.media?.version,
        mediaItem: x,
        filename: c.filename,
        mimeType: c.mimeType,
        messageId: d,
        createdAt: m,
        onReply: h,
        onDelete: f,
        children: r
      }) : r, s[29] = m, s[30] = c.filename, s[31] = c.media?.version, s[32] = c.mimeType, s[33] = g.posterSrc, s[34] = x, s[35] = d, s[36] = f, s[37] = h, s[38] = b, s[39] = y, s[40] = r, s[41] = n) : n = s[41], n
    }
    if (null != g.playbackSrc) {
      let e, a, l, i, n, r;
      s[42] !== o ? (e = e => {
        e.stopPropagation(), (0, U.handleContextMenuTriggerClick)(e, () => o?.())
      }, s[42] = o, s[43] = e) : e = s[43];
      let u = c.filename,
        p = g.playbackSrc;
      s[44] !== g.playbackSrc ? (a = (0, W.getSignedMediaCrossOrigin)(g.playbackSrc), s[44] = g.playbackSrc, s[45] = a) : a = s[45], s[46] !== g.playbackSrc || s[47] !== a ? (l = (0, t.jsx)("video", {
        src: p,
        crossOrigin: a,
        muted: !0,
        playsInline: !0,
        preload: "metadata",
        className: "h-full w-full object-cover"
      }), s[46] = g.playbackSrc, s[47] = a, s[48] = l) : l = s[48], s[49] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)(J, {}), s[49] = i) : i = s[49], s[50] !== c.filename || s[51] !== l || s[52] !== e ? (n = (0, t.jsxs)("button", {
        type: "button",
        onClick: e,
        "aria-label": u,
        className: `${X} rounded-22 outline-media-protection-border cursor-pointer outline-[0.5px] -outline-offset-[0.5px]`,
        children: [l, i]
      }), s[50] = c.filename, s[51] = l, s[52] = e, s[53] = n) : n = s[53];
      let v = n;
      return s[54] !== m || s[55] !== c.filename || s[56] !== c.media?.version || s[57] !== c.mimeType || s[58] !== x || s[59] !== d || s[60] !== f || s[61] !== h || s[62] !== b || s[63] !== y || s[64] !== v ? (r = null != x ? (0, t.jsx)(N.HatchChatMediaContextMenu, {
        shareButtonLayout: "inline",
        mediaKind: "video",
        sourceUrl: y,
        replySourceUrl: b,
        replyCacheVersion: c.media?.version,
        mediaItem: x,
        filename: c.filename,
        mimeType: c.mimeType,
        messageId: d,
        createdAt: m,
        onReply: h,
        onDelete: f,
        children: v
      }) : v, s[54] = m, s[55] = c.filename, s[56] = c.media?.version, s[57] = c.mimeType, s[58] = x, s[59] = d, s[60] = f, s[61] = h, s[62] = b, s[63] = y, s[64] = v, s[65] = r) : r = s[65], r
    }
    return s[66] !== c || s[67] !== o ? (r = (0, t.jsx)(Y, {
      file: c,
      onClick: o
    }), s[66] = c, s[67] = o, s[68] = r) : r = s[68], r
  }

  function J() {
    let e, l = (0, a.c)(1);
    return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("div", {
      className: "absolute inset-0 flex items-center justify-center bg-black/30",
      children: (0, t.jsx)(K.HatchIcon, {
        icon: q.default,
        size: 24,
        className: "text-white"
      })
    }), l[0] = e) : e = l[0], e
  }

  function Y(e) {
    let l, i, n, r, s, c, o = (0, a.c)(15),
      {
        file: u,
        onClick: m
      } = e;
    o[0] !== u.filename ? (l = (0, d.getFileTypeLabel)(u.filename), o[0] = u.filename, o[1] = l) : l = o[1];
    let h = l;
    o[2] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("span", {
      className: "bg-hatch-accent/10 rounded-10 flex h-10 w-10 shrink-0 items-center justify-center",
      children: (0, t.jsx)(K.HatchIcon, {
        icon: q.default,
        size: 20,
        className: "text-hatch-accent"
      })
    }), o[2] = i) : i = o[2], o[3] !== u.filename ? (n = (0, t.jsx)("span", {
      className: "text-footnote-emphasized text-text-primary truncate",
      children: u.filename
    }), o[3] = u.filename, o[4] = n) : n = o[4], o[5] !== h ? (r = h && (0, t.jsx)("span", {
      className: "text-caption-1 text-text-tertiary",
      children: h
    }), o[5] = h, o[6] = r) : r = o[6], o[7] !== n || o[8] !== r ? (s = (0, t.jsxs)(t.Fragment, {
      children: [i, (0, t.jsxs)("span", {
        className: "flex min-w-0 flex-col gap-0.5",
        children: [n, r]
      })]
    }), o[7] = n, o[8] = r, o[9] = s) : s = o[9];
    let f = s;
    if (!m) {
      let e;
      return o[10] !== f ? (e = (0, t.jsx)("div", {
        className: "bg-fill-primary rounded-16 border-fill-divider flex w-64 max-w-full items-center gap-3 border px-3 py-3",
        children: f
      }), o[10] = f, o[11] = e) : e = o[11], e
    }
    return o[12] !== f || o[13] !== m ? (c = (0, t.jsx)("button", {
      type: "button",
      onClick: m,
      className: "bg-fill-primary rounded-16 border-fill-divider flex w-64 max-w-full cursor-pointer items-center gap-3 border px-3 py-3",
      children: f
    }), o[12] = f, o[13] = m, o[14] = c) : c = o[14], c
  }
  var Z = e.i(346791),
    ee = e.i(464800),
    et = e.i(157139);

  function ea(e) {
    let i, n, r, s, c, o = (0, a.c)(21),
      {
        files: u,
        messageId: d,
        messageOccurrenceId: m,
        createdAt: h,
        onReply: f
      } = e,
      {
        openFileInDialog: p
      } = (0, Z.useHatchStatusPanel)(),
      g = (0, et.useHatchMessageShareSource)(),
      {
        gatewayUrl: x,
        vmName: y
      } = (0, M.useHatchServerData)(),
      S = y ?? x ?? "unscoped",
      I = (0, L.useDeletedChatMediaKeys)(),
      j = (0, l.useRef)(null),
      H = (0, b.useInteractionLoggerWithLazyData)(),
      T = (0, C.useHatchChatThreadLoggingMetadataFromContext)();
    o[0] !== S ? (i = e => {
      let t = j.current;
      j.current = null, null != t && (0, w.markChatMediaDeleted)(S, t, e.requestedPath)
    }, o[0] = S, o[1] = i) : i = o[1];
    let k = i;
    o[2] !== k ? (n = {
      origin: "chat_media_context_menu",
      onDeleted: k
    }, o[2] = k, o[3] = n) : n = o[3];
    let {
      requestDelete: A
    } = (0, _.useHatchDeleteConfirmation)(n);
    o[4] !== H || o[5] !== p || o[6] !== g || o[7] !== T ? (r = e => {
      H({
        eventName: v.HatchClickEvent.CHAT_MEDIA_CLICK,
        actionTarget: "video_thumbnail",
        actionType: "click",
        metadata: {
          category: e.category,
          file_extension: (0, E.fileExtensionForTelemetry)(e.filename),
          ...T
        }
      }), e.path && p(e.path, {
        media: e.media ?? null,
        origin: "chat",
        ...null != g ? {
          shareMessageId: g
        } : {}
      })
    }, o[4] = H, o[5] = p, o[6] = g, o[7] = T, o[8] = r) : r = o[8];
    let U = r;
    return o[9] !== h || o[10] !== I || o[11] !== S || o[12] !== u || o[13] !== U || o[14] !== d || o[15] !== m || o[16] !== f || o[17] !== A ? (s = u.map((e, a) => {
      let l = function({
          file: e,
          fileIndex: t,
          messageId: a,
          messageOccurrenceId: l
        }) {
          return null != l && l.length > 0 ? l : null != a && a.length > 0 ? `message:${a}` : null != e.media ? `media:${e.media.resource_id}:${e.media.version}` : `legacy:${e.filename}:${t}`
        }({
          file: e,
          fileIndex: a,
          messageId: d,
          messageOccurrenceId: m
        }),
        i = e.path ?? e.media?.path ?? null;
      return (0, t.jsx)(Q, {
        file: e,
        deleted: null != i && I.has((0, w.getDeletedChatMediaKey)(S, l, i)),
        messageId: d,
        createdAt: h,
        onReply: f,
        onDelete: e => {
          j.current = l, A(e)
        },
        onClick: e.path ? () => U(e) : void 0
      }, `${e.filename}-video-${a}`)
    }), o[9] = h, o[10] = I, o[11] = S, o[12] = u, o[13] = U, o[14] = d, o[15] = m, o[16] = f, o[17] = A, o[18] = s) : s = o[18], o[19] !== s ? (c = (0, t.jsx)(ee.HatchChatBubbleSequence, {
      children: s
    }), o[19] = s, o[20] = c) : c = o[20], c
  }
  var el = e.i(416873),
    ei = e.i(790351);
  let en = /\.(mp3|m4a|wav|ogg|flac|aac|opus)$/i;

  function er(e) {
    return !!("audio" === e.category || e.mimeType.startsWith("audio/") || en.test(e.filename))
  }

  function es(e) {
    return "video" === e.category || e.mimeType.startsWith("video/")
  }

  function ec(e) {
    return "image" === e.category || e.mimeType.startsWith("image/")
  }

  function eo(e) {
    return !er(e) && !es(e) && !ec(e)
  }

  function eu(e) {
    return !er(e) && !ec(e) && es(e)
  }
  e.s(["HatchMessageFiles", 0, function(e) {
    let o, u, d, m, f, p, g, y, S, I = (0, a.c)(62),
      {
        files: j,
        outgoing: _,
        messageId: H,
        messageOccurrenceId: T,
        messageCreatedAt: k,
        messageSeq: A,
        onMediaReply: M,
        podcastCopyContent: w
      } = e,
      L = void 0 !== _ && _,
      {
        openFileInDialog: U
      } = (0, Z.useHatchStatusPanel)(),
      B = (0, b.useInteractionLoggerWithLazyData)(),
      N = (0, C.useHatchChatThreadLoggingMetadataFromContext)();
    I[0] !== j ? (o = j.filter(ec), I[0] = j, I[1] = o) : o = I[1];
    let R = o;
    if (I[2] !== j || I[3] !== R || I[4] !== B || I[5] !== k || I[6] !== H || I[7] !== T || I[8] !== A || I[9] !== M || I[10] !== U || I[11] !== L || I[12] !== w || I[13] !== N) {
      let e, a, o, y, b = j.filter(er);
      I[20] !== j ? (e = j.filter(eu), I[20] = j, I[21] = e) : e = I[21];
      let C = e,
        S = j.filter(eo);
      I[22] !== B || I[23] !== U || I[24] !== N ? (a = e => {
        B({
          eventName: v.HatchClickEvent.CHAT_FILE_CLICK,
          actionTarget: "file_chip",
          actionType: "click",
          metadata: {
            category: e.category,
            file_extension: (0, E.fileExtensionForTelemetry)(e.filename),
            ...N
          }
        }), e.path && U(e.path, {
          origin: "chat"
        })
      }, I[22] = B, I[23] = U, I[24] = N, I[25] = a) : a = I[25];
      let _ = a,
        D = L ? "items-end" : "items-start";
      I[26] !== D ? (g = (0, h.cn)("flex flex-col gap-1", D), I[26] = D, I[27] = g) : g = I[27], u = ee.HatchChatBubbleSequence, I[28] !== R || I[29] !== k || I[30] !== H || I[31] !== T || I[32] !== M ? (d = R.length > 0 && (0, t.jsx)(z, {
        files: R,
        messageId: H,
        messageOccurrenceId: T,
        createdAt: k,
        onReply: M
      }), I[28] = R, I[29] = k, I[30] = H, I[31] = T, I[32] = M, I[33] = d) : d = I[33], I[34] !== k || I[35] !== H || I[36] !== A || I[37] !== M || I[38] !== L || I[39] !== w ? (o = (e, a) => (0, t.jsx)(i.EctoErrorBoundary, {
        surface: "hatch.chat.message.audio",
        fallback: () => (0, t.jsx)(c.HatchAudioBubbleError, {
          variant: L ? "outgoing" : "incoming"
        }),
        children: (0, t.jsx)(l.Suspense, {
          fallback: (0, t.jsx)(s.HatchAudioBubbleSkeleton, {
            variant: L ? "outgoing" : "incoming"
          }),
          children: (0, r.isPodcastFile)(e) ? (0, t.jsx)(n.HatchPodcastBubbleLazy, {
            copyContent: w,
            createdAt: k,
            enableChatContextMenu: !0,
            file: e,
            outgoing: L,
            messageId: H,
            messageSeq: A,
            onReply: null == M ? void 0 : () => M((0, el.getMessageQuoteMedia)({
              files: [e],
              images: []
            }))
          }) : (0, t.jsx)(n.HatchAudioBubbleLazy, {
            file: e,
            outgoing: L,
            messageId: H,
            messageSeq: A
          })
        })
      }, `${e.filename}-audio-${a}`), I[34] = k, I[35] = H, I[36] = A, I[37] = M, I[38] = L, I[39] = w, I[40] = o) : o = I[40], m = b.map(o), I[41] !== k || I[42] !== H || I[43] !== T || I[44] !== M || I[45] !== C ? (f = C.length > 0 && (0, t.jsx)(ea, {
        files: C,
        messageId: H,
        messageOccurrenceId: T,
        createdAt: k,
        onReply: M
      }), I[41] = k, I[42] = H, I[43] = T, I[44] = M, I[45] = C, I[46] = f) : f = I[46], I[47] !== _ || I[48] !== k || I[49] !== H || I[50] !== M || I[51] !== L ? (y = (e, a) => (0, t.jsx)(ei.HatchMessageSurfaceContextMenu, {
        copyContent: e.filename,
        createdAt: k,
        messageId: H,
        onReply: null == M ? void 0 : () => M(),
        touchAnchorToTriggerEdge: L ? "end" : "start",
        triggerClassName: "w-fit max-w-full",
        children: (0, t.jsx)(x, {
          file: e,
          onClick: () => _(e),
          outgoing: L
        })
      }, `${e.filename}-doc-${a}`), I[47] = _, I[48] = k, I[49] = H, I[50] = M, I[51] = L, I[52] = y) : y = I[52], p = S.map(y), I[2] = j, I[3] = R, I[4] = B, I[5] = k, I[6] = H, I[7] = T, I[8] = A, I[9] = M, I[10] = U, I[11] = L, I[12] = w, I[13] = N, I[14] = u, I[15] = d, I[16] = m, I[17] = f, I[18] = p, I[19] = g
    } else u = I[14], d = I[15], m = I[16], f = I[17], p = I[18], g = I[19];
    return I[53] !== u || I[54] !== d || I[55] !== m || I[56] !== f || I[57] !== p ? (y = (0, t.jsxs)(u, {
      children: [d, m, f, p]
    }), I[53] = u, I[54] = d, I[55] = m, I[56] = f, I[57] = p, I[58] = y) : y = I[58], I[59] !== g || I[60] !== y ? (S = (0, t.jsx)("div", {
      className: g,
      children: y
    }), I[59] = g, I[60] = y, I[61] = S) : S = I[61], S
  }], 388586)
}, 416873, e => {
  "use strict";
  var t = e.i(760806);

  function a(e) {
    return {
      kind: "image",
      sourceUrl: e.previewUrl,
      filePath: e.path ?? e.media?.path ?? null
    }
  }
  e.s(["getMessageQuoteMedia", 0, function(e) {
    let l = [...(e.images ?? []).map(a), ...(e.files ?? []).flatMap(e => {
        let a, l, i = (a = e.path ?? e.media?.path ?? null, "image" === (l = e.media?.kind) || "image" === e.category || e.mimeType.startsWith("image/") ? {
          kind: "image",
          sourceUrl: e.previewUrl ?? null,
          filePath: a
        } : "video" === l || "video" === e.category || e.mimeType.startsWith("video/") ? {
          kind: "video",
          sourceUrl: null,
          filePath: a,
          posterUrl: e.previewUrl ?? null,
          cacheVersion: e.media?.version ?? null
        } : ("audio" === e.category || e.mimeType.startsWith("audio/")) && (0, t.isPodcastFile)(e) ? {
          kind: "podcast",
          sourceUrl: e.previewUrl ?? null,
          filePath: a
        } : null);
        return null == i ? [] : [i]
      })],
      i = l[0];
    if (!(null == i || l.some(e => e.kind !== i.kind))) return 1 === l.length ? i : function(e) {
      switch (e) {
        case "image":
        case "podcast":
          return {
            kind: e, sourceUrl: null, filePath: null
          };
        case "video":
          return {
            kind: e, sourceUrl: null, filePath: null, posterUrl: null, cacheVersion: null
          }
      }
    }(i.kind)
  }])
}]);

//# debugId=1b89ef2c-f993-b861-c0d1-74f0f140195c
//# sourceMappingURL=3hyw1mm-n-_h9.js.map