;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "9f195e73-8780-0c7d-aaa3-f5caed43e477")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 274797, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(519172),
    r = e.i(990033);
  let n = null,
    i = new Map;

  function l() {
    return null == n && (n = new ResizeObserver(s)), n
  }

  function s(e) {
    let t = new Map,
      a = new Map;
    for (let r of e) {
      let e = r.contentRect;
      t.set(r.target, e), a.set(r.target, r)
    }
    let r = new Set(i.keys());
    for (let [e, n] of t) {
      let t = i.get(e);
      if (null != t)
        for (let [, r] of t) try {
          r(n, e, a)
        } catch {} else r.has(e)
    }
  }
  e.s(["useResizeObserver", 0, function(e) {
    let n, s, o, u = (0, t.c)(4),
      c = (0, a.useRef)(null),
      d = (0, a.useRef)(e);
    return u[0] !== e ? (n = () => {
      d.current = e
    }, s = [e], u[0] = e, u[1] = n, u[2] = s) : (n = u[1], s = u[2]), (0, a.useLayoutEffect)(n, s), u[3] === Symbol.for("react.memo_cache_sentinel") ? (o = e => {
      var t, a, n, s;
      let o, u, h = null == e ? null : (t = e, a = (e, t, a) => {
        d.current && d.current(e, t, a)
      }, o = (0, r.v4)(), (u = i.get(t) ?? new Map).set(o, a), i.set(t, u), l().observe(t), n = t, s = o, () => {
        let e = i.get(n);
        null != e && (e.delete(s), 0 === e.size && (l().unobserve(n), i.delete(n)))
      });
      c.current && c.current(), c.current = h
    }, u[3] = o) : o = u[3], o
  }])
}, 438181, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    r = e.i(519172);
  let n = (0, r.createContext)(null);
  e.s(["MediaLoadSignalProvider", 0, function(e) {
    let i, l, s, o, u, c, d, h = (0, a.c)(8),
      {
        children: m
      } = e;
    h[0] === Symbol.for("react.memo_cache_sentinel") ? (i = new Set, h[0] = i) : i = h[0];
    let f = (0, r.useRef)(i);
    h[1] === Symbol.for("react.memo_cache_sentinel") ? (l = e => (f.current.add(e), () => {
      f.current.delete(e)
    }), h[1] = l) : l = h[1];
    let b = l;
    h[2] === Symbol.for("react.memo_cache_sentinel") ? (s = e => {
      for (let t of f.current) t.onMediaLoaded(e)
    }, h[2] = s) : s = h[2];
    let p = s;
    h[3] === Symbol.for("react.memo_cache_sentinel") ? (o = e => {
      for (let t of f.current) t.onMediaError(e)
    }, h[3] = o) : o = h[3];
    let g = o;
    h[4] === Symbol.for("react.memo_cache_sentinel") ? (u = e => {
      for (let t of f.current) t.onFileMounted?.(e)
    }, h[4] = u) : u = h[4];
    let _ = u;
    h[5] === Symbol.for("react.memo_cache_sentinel") ? (c = {
      onMediaLoaded: p,
      onMediaError: g,
      onFileMounted: _,
      subscribe: b
    }, h[5] = c) : c = h[5];
    let v = c;
    return h[6] !== m ? (d = (0, t.jsx)(n.Provider, {
      value: v,
      children: m
    }), h[6] = m, h[7] = d) : d = h[7], d
  }, "useMediaLoadSignal", 0, function() {
    let e = (0, r.useContext)(n);
    if (null == e) throw Error("useMediaLoadSignal must be used within MediaLoadSignalProvider");
    return e
  }, "useMediaLoadSubscription", 0, function(e) {
    let t = (0, r.useRef)(e);
    t.current = e;
    let a = (0, r.useMemo)(() => ({
        onMediaLoaded: e => t.current.onMediaLoaded(e),
        onMediaError: e => t.current.onMediaError(e),
        onFileMounted: e => t.current.onFileMounted?.(e)
      }), []),
      i = (0, r.useContext)(n);
    (0, r.useEffect)(() => {
      if (null != i) return i.subscribe(a)
    }, [i, a])
  }])
}, 562200, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(519172),
    r = e.i(438181),
    n = e.i(288119);
  e.s(["useHoldReleaseSignal", 0, function(e) {
    let i, l, s, o = (0, t.c)(6),
      {
        onFileMounted: u
      } = (0, r.useMediaLoadSignal)();
    o[0] !== e ? (i = null != e ? (0, n.normalizeSandboxFilePath)(e) : null, o[0] = e, o[1] = i) : i = o[1];
    let c = i;
    o[2] !== c || o[3] !== u ? (l = () => {
      c && u(c)
    }, s = [c, u], o[2] = c, o[3] = u, o[4] = l, o[5] = s) : (l = o[4], s = o[5]), (0, a.useEffect)(l, s)
  }])
}, 218105, e => {
  "use strict";
  let t = (0, e.i(519172).createContext)(null);
  e.s(["HATCH_OPEN_APPROVALS_PANEL_EVENT", 0, "hatch:open-approvals-panel", "HATCH_STATUS_PANEL_APPROVALS_VALUE", 0, "approvals", "HATCH_STATUS_PANEL_QUERY_PARAM", 0, "status_panel", "HatchStatusPanelContext", 0, t])
}, 258544, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    r = e.i(519172),
    n = e.i(848048),
    i = e.i(345717),
    l = e.i(251932),
    s = e.i(621570),
    o = e.i(440149),
    u = e.i(559401),
    c = e.i(173174),
    d = e.i(764866),
    h = e.i(509789),
    m = e.i(646361),
    f = e.i(281539),
    b = e.i(905156),
    p = e.i(907579),
    g = e.i(648094),
    _ = e.i(960607),
    v = e.i(269677),
    C = e.i(47247),
    y = e.i(359783),
    x = e.i(767408),
    k = e.i(374785),
    S = e.i(863641),
    M = e.i(805163),
    E = e.i(822622),
    H = e.i(450106),
    A = e.i(219327),
    T = e.i(378534),
    w = e.i(176358),
    P = e.i(731714);
  let I = (0, y.createClientLogger)("HatchChatMediaContextMenu");

  function R({
    children: e,
    kind: a,
    state: l,
    messageId: s,
    createdAt: o
  }) {
    let [u, c] = (0, r.useState)(!1), d = (0, A.useOptionalHatchReactionTarget)(), m = (0, b.useHatchChatThreadLoggingMetadataFromContext)(), p = (0, n.useTrackedClickRef)({
      eventName: f.HatchClickEvent.CHAT_MESSAGE_OVERFLOW_OPEN,
      actionTarget: "message_overflow_button",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "context_menu",
        entry_point: "right_click",
        ...m,
        ...null != s ? {
          message_id: s
        } : {},
        media_kind: a,
        media_state: l
      }
    }), g = "image" === a ? i.fbs._("Image not found", null, {
      hk: "MlgZV"
    }) : i.fbs._("Video not found", null, {
      hk: "1Sd0Sp"
    }), _ = i.fbs._("It may be unavailable or removed.", null, {
      hk: "23keJ6"
    }), v = (0, r.useCallback)(e => {
      d?.onToggleReaction(e), c(!1)
    }, [d]);
    return (0, t.jsxs)(h.ContextMenu, {
      open: u,
      onOpenChange: e => {
        c(e), e && p.onClick()
      },
      children: [(0, t.jsx)(h.ContextMenuTrigger, {
        asChild: !0,
        children: (0, t.jsx)("span", {
          ref: p.ref,
          className: "group contents",
          tabIndex: 0,
          "aria-haspopup": "menu",
          "aria-label": `${g}. ${_}`,
          onContextMenu: e => e.stopPropagation(),
          children: e
        })
      }), (0, t.jsxs)(h.ContextMenuContent, {
        children: [null != o ? (0, t.jsx)(H.HatchMessageMenuTimestamp, {
          createdAt: o
        }) : null, (0, t.jsx)(H.HatchMessagePrimaryMenuItems, {
          messageId: s,
          onReactionSelect: null != d ? v : void 0,
          reactions: d?.reactions,
          subsurface: "context_menu",
          variant: "context"
        }), (0, t.jsxs)(h.ContextMenuLabel, {
          className: "flex flex-col items-start gap-0.5 px-2 pt-0.5 pb-1.5",
          children: [(0, t.jsx)("span", {
            className: "text-subheadline text-text-primary",
            children: g
          }), (0, t.jsx)("span", {
            className: "text-caption-1 text-text-secondary",
            children: _
          })]
        })]
      })]
    })
  }

  function L(e) {
    let r, n, l, s, o, c, h = (0, a.c)(21),
      {
        kind: f,
        state: b,
        enableContextMenu: p,
        messageId: g,
        createdAt: _,
        className: v,
        testId: C,
        containerRef: y
      } = e,
      x = void 0 === b ? "not_found" : b,
      S = void 0 === p || p,
      M = "video" === f;
    h[0] !== M ? (r = M ? i.fbs._("Video not found", null, {
      hk: "4nVWm"
    }) : i.fbs._("Image not found", null, {
      hk: "3zJYi1"
    }), h[0] = M, h[1] = r) : r = h[1];
    let E = r;
    h[2] !== v ? (n = (0, k.cn)("rounded-22 group-focus-visible:outline-hatch-accent flex min-h-[120px] min-w-[120px] cursor-default flex-col items-center justify-center gap-1 overflow-hidden border-0 bg-[var(--hatch-agent-bubble-bg)] text-center shadow-none ring-0 outline-none select-none group-focus-visible:outline-2 group-focus-visible:outline-offset-2", v), h[2] = v, h[3] = n) : n = h[3];
    let H = M ? d.default : u.default;
    h[4] !== H ? (l = (0, t.jsx)(m.HatchIcon, {
      icon: H,
      size: 24,
      className: "text-icon-secondary",
      "aria-hidden": "true"
    }), h[4] = H, h[5] = l) : l = h[5], h[6] !== E ? (s = (0, t.jsx)("span", {
      className: "text-caption-2-emphasized text-text-secondary",
      children: E
    }), h[6] = E, h[7] = s) : s = h[7], h[8] !== y || h[9] !== n || h[10] !== l || h[11] !== s || h[12] !== C ? (o = (0, t.jsxs)("div", {
      ref: y,
      className: n,
      "data-testid": C,
      children: [l, s]
    }), h[8] = y, h[9] = n, h[10] = l, h[11] = s, h[12] = C, h[13] = o) : o = h[13];
    let A = o;
    return h[14] !== _ || h[15] !== S || h[16] !== f || h[17] !== g || h[18] !== x || h[19] !== A ? (c = S ? (0, t.jsx)(R, {
      kind: f,
      state: x,
      messageId: g,
      createdAt: _,
      children: A
    }) : A, h[14] = _, h[15] = S, h[16] = f, h[17] = g, h[18] = x, h[19] = A, h[20] = c) : c = h[20], c
  }

  function N(e) {
    let r, n = (0, a.c)(6),
      {
        kind: i,
        className: l,
        messageId: s,
        createdAt: o
      } = e,
      u = `chat-${i}-deleted-tombstone`;
    return n[0] !== l || n[1] !== o || n[2] !== i || n[3] !== s || n[4] !== u ? (r = (0, t.jsx)(L, {
      kind: i,
      state: "deleted",
      messageId: s,
      createdAt: o,
      className: l,
      testId: u
    }), n[0] = l, n[1] = o, n[2] = i, n[3] = s, n[4] = u, n[5] = r) : r = n[5], r
  }
  async function D({
    fs: e,
    source: t,
    maxBytes: a,
    signal: r
  }) {
    let n = async (t, n) => {
      let i = await e.rawFetch(t, {
        ...null != a ? {
          range: {
            start: 0,
            end: a
          }
        } : {},
        signal: r,
        ...n ? {
          urlEncodedPath: !0
        } : {}
      });
      if (!i.ok) throw Error("Failed to read chat media over Noise", {
        cause: (0, M.toError)(i.error)
      });
      return i.data
    };
    if ("noise" === t.kind) return n(t.path, t.urlEncodedPath);
    let i = t.url,
      l = (0, _.getVmMediaNoiseFetchPath)(i);
    if (void 0 !== l) {
      if (null == l) throw Error("Chat media source is not fetchable");
      return n(l, !0)
    }
    if (i.startsWith("data:")) return (0, v.readDataUrlBlobWithLimit)(i, a);
    let s = await fetch(i, {
      redirect: "error",
      signal: r
    });
    if (!s.ok) throw Error(`Failed to fetch chat media with HTTP ${s.status}`);
    return null == a ? s.blob() : (0, v.readImageResponseBlobWithLimit)(s, a)
  }

  function j({
    children: e,
    shareButtonLayout: a,
    mediaKind: u,
    sourceUrl: d,
    replyPreviewUrl: m,
    replySourceUrl: y,
    replyCacheVersion: M,
    mediaItem: R,
    filename: L,
    mimeType: N,
    messageId: F,
    createdAt: O,
    onReply: B,
    onDelete: z
  }) {
    let G = (0, p.useHatchGatewayFs)(),
      U = (0, A.useOptionalHatchReactionTarget)(),
      $ = (0, b.useHatchChatThreadLoggingMetadataFromContext)(),
      W = (0, n.useInteractionLoggerWithLazyData)(),
      K = (0, r.useRef)(!1),
      V = (0, r.useRef)(null),
      q = (0, r.useRef)(!1),
      Y = (0, r.useRef)(!1),
      [X, Z] = (0, r.useState)(null),
      [Q, J] = (0, r.useState)(!1),
      ee = (0, r.useRef)(null),
      et = `${R?.path??""}\u0000${d}`,
      ea = X === et,
      er = null;
    R?.path == null && (er = void 0 !== y ? y : d || null);
    let en = function({
        mediaKind: e,
        explicitMimeType: t,
        filename: a,
        mediaItem: r,
        sourceUrl: n
      }) {
        if (null != t && t.length > 0) return t;
        if (n.startsWith("data:")) {
          let t = n.search(/[;,]/),
            a = n.slice(5, t < 0 ? void 0 : t);
          return a.startsWith(`${e}/`) ? a : void 0
        }
        for (let t of [r?.path, a, n]) {
          if (null == t) continue;
          let a = (0, E.inferMarkdownMediaMimeType)(t);
          if (a.startsWith(`${e}/`)) return a
        }
      }({
        mediaKind: u,
        explicitMimeType: N,
        filename: L,
        mediaItem: R,
        sourceUrl: d
      }),
      ei = (0, r.useMemo)(() => {
        let e = R?.path?.trim();
        return null != e && e.length > 0 ? void 0 === (0, _.getVmMediaNoiseFetchPath)(e) ? (0, _.hatchMediaPlaybackSource)({
          path: e
        }) : (0, _.hatchMediaPlaybackSource)({
          previewUrl: e
        }) : (0, _.hatchMediaPlaybackSource)({
          previewUrl: d
        })
      }, [R?.path, d]),
      el = null != ei && ("image" === u ? null == en || (0, v.isImageCopySupported)(en) : null != en && (0, v.isVideoCopySupported)(en)),
      es = R?.path,
      eo = i.fbs._("Video downloaded", null, {
        hk: "1wBeuC"
      }),
      eu = i.fbs._("Image copied", null, {
        hk: "2KdpNK"
      }),
      ec = i.fbs._("Video copied", null, {
        hk: "E91Ti"
      }),
      ed = i.fbs._("Image downloaded", null, {
        hk: "4kWZn0"
      }),
      eh = i.fbs._("Video downloaded", null, {
        hk: "9goeY"
      }),
      em = i.fbs._("Failed to copy image", null, {
        hk: "VfFkP"
      }),
      ef = i.fbs._("Failed to copy video", null, {
        hk: "279b94"
      }),
      eb = i.fbs._("Failed to download image", null, {
        hk: "1r9bsW"
      }),
      ep = i.fbs._("Failed to download video", null, {
        hk: "2r6W8S"
      });
    (0, r.useEffect)(() => () => {
      let e = V.current;
      e?.abort(), V.current === e && (V.current = null, K.current = !1)
    }, [et]);
    let eg = (0, r.useMemo)(() => ({
        surface: "chat",
        subsurface: "context_menu",
        entry_point: "right_click",
        ...$,
        ...null != F ? {
          message_id: F
        } : {},
        media_kind: u,
        file_extension: (0, x.fileExtensionForTelemetry)(L)
      }), [L, u, F, $]),
      e_ = (0, n.useTrackedClickRef)({
        eventName: f.HatchClickEvent.CHAT_MESSAGE_OVERFLOW_OPEN,
        actionTarget: "message_overflow_button",
        actionType: "click",
        metadata: eg
      }),
      ev = (0, n.useTrackedClickRef)({
        eventName: f.HatchClickEvent.CHAT_REPLY_MESSAGE,
        actionTarget: "media_context_menu_reply",
        actionType: "click",
        metadata: eg
      }),
      {
        ref: eC,
        onClick: ey
      } = (0, n.useTrackedClickRef)({
        eventName: f.HatchClickEvent.CHAT_COPY_RESPONSE,
        actionTarget: "media_context_menu_copy",
        actionType: "click",
        metadata: eg
      }),
      {
        ref: ex,
        onClick: ek
      } = (0, n.useTrackedClickRef)({
        eventName: f.HatchClickEvent.MEDIA_DOWNLOAD,
        actionTarget: "media_context_menu_download",
        actionType: "click",
        metadata: eg
      }),
      eS = (0, n.useTrackedClickRef)({
        eventName: f.HatchClickEvent.FILE_DELETE_CLICK,
        actionTarget: "media_context_menu_delete",
        actionType: "click",
        metadata: {
          ...eg,
          target_kind: "media"
        }
      }),
      eM = (0, r.useCallback)(e => {
        U?.onToggleReaction(e), J(!1)
      }, [U]),
      eE = (0, r.useCallback)(async e => {
        if (K.current || null == ei) return;
        let t = (0, C.captureHatchToast)();
        K.current = !0;
        let a = new AbortController;
        V.current = a, Z(et);
        let r = e;
        try {
          if ("copy" === e) {
            let e = null,
              n = () => e ??= D({
                fs: G,
                source: ei,
                maxBytes: v.MAX_COPY_MEDIA_BYTES,
                signal: a.signal
              });
            if ("image" === u) await (0, v.copyImageBlobToClipboard)({
              mimeType: en,
              signal: a.signal,
              loadBlob: n
            });
            else try {
              await (0, v.copyVideoBlobToClipboard)({
                mimeType: en,
                signal: a.signal,
                loadBlob: n
              })
            } catch (i) {
              if (!(i instanceof v.UnsupportedMediaClipboardError)) throw i;
              I.retainForBugReport("info", "Chat media action unavailable"), r = "download";
              let n = await (e ?? D({
                fs: G,
                source: ei,
                signal: a.signal
              }));
              if (a.signal.aborted) return;
              (0, g.triggerBlobDownload)(L, n), W({
                eventName: f.HatchClickEvent.MEDIA_DOWNLOAD,
                actionTarget: "media_context_menu_video_download_fallback",
                actionType: "click",
                metadata: eg
              }), t.success(eo);
              return
            }
            if (a.signal.aborted) return;
            ey(), t.success("image" === u ? eu : ec)
          } else {
            let e = await D({
              fs: G,
              source: ei,
              signal: a.signal
            });
            if (a.signal.aborted) return;
            (0, g.triggerBlobDownload)(L, e), t.success("image" === u ? ed : eh)
          }
        } catch (l) {
          var n;
          if (a.signal.aborted) return;
          let i = l instanceof v.UnsupportedMediaClipboardError ? "clipboard_unsupported" : l instanceof v.MediaCopyLimitError ? "media_limit" : l instanceof DOMException && "NotAllowedError" === l.name ? "clipboard_permission" : "unexpected";
          if (l instanceof v.UnsupportedMediaClipboardError || l instanceof v.MediaCopyLimitError) I.retainForBugReport("info", "Chat media action unavailable");
          else {
            let e = l instanceof Error && null != l.cause ? l.cause : l;
            I.error({
              error: (n = r, Error(`Chat media ${n} failed`)),
              errorName: (0, x.errorNameForTelemetry)(e),
              errorClass: (0, x.classifyErrorForTelemetry)(e),
              action: r,
              mediaKind: u,
              fileExtension: (0, x.fileExtensionForTelemetry)(L),
              tags: (0, S.hatchSentryTags)(S.HATCH_SENTRY_SURFACES.CHAT_MESSAGE, {
                action: r,
                failure_reason: i,
                media_kind: u
              })
            }, "Chat media action failed")
          }
          t.error("copy" === e ? "image" === u ? em : ef : "image" === u ? eb : ep)
        } finally {
          V.current === a && (V.current = null, K.current = !1, a.signal.aborted || Z(null))
        }
      }, [L, G, em, eu, eb, ed, ey, W, ei, u, en, et, eg, ef, ec, ep, eh, eo]),
      eH = (0, P.useMergeRefs)(ee, e_.ref);
    return (0, t.jsxs)(h.ContextMenu, {
      open: Q,
      onOpenChange: e => {
        J(e), e && q.current && (Y.current = !0), e && e_.onClick()
      },
      children: [(0, t.jsx)(h.ContextMenuTrigger, {
        asChild: !0,
        suppressTouchSelection: !0,
        children: (0, t.jsx)("span", {
          ref: eH,
          className: "contents",
          onClickCapture: e => {
            Y.current && (Y.current = !1, e.preventDefault(), e.stopPropagation())
          },
          onContextMenu: e => e.stopPropagation(),
          onKeyDownCapture: () => {
            Y.current = !1
          },
          onPointerCancelCapture: () => {
            q.current = !1
          },
          onPointerDown: e => {
            Y.current = !1, q.current = "touch" === e.pointerType || "pen" === e.pointerType, e.stopPropagation()
          },
          onPointerUpCapture: () => {
            q.current = !1
          },
          children: null != a && R?.kind === "video" ? (0, t.jsxs)("span", {
            className: (0, k.cn)("relative max-w-full min-w-0", "fill" === a ? "grid" : "inline-grid align-top"),
            children: [e, (0, t.jsx)("span", {
              className: "absolute end-2 top-2 z-30",
              children: (0, t.jsx)(w.HatchMediaShareButton, {
                item: R,
                placement: "media_tile"
              })
            })]
          }) : e
        })
      }), (0, t.jsxs)(h.ContextMenuContent, {
        children: [null != O ? (0, t.jsx)(H.HatchMessageMenuTimestamp, {
          createdAt: O
        }) : null, (0, t.jsx)(H.HatchMessagePrimaryMenuItems, {
          messageId: F,
          onReactionSelect: null != U ? eM : void 0,
          reactions: U?.reactions,
          subsurface: "context_menu",
          variant: "context"
        }), null != B ? (0, t.jsx)(h.ContextMenuItem, {
          ref: ev.ref,
          disabled: ea,
          leadingIcon: s.default,
          label: i.fbs._("Reply", null, {
            hk: "3iWsaW"
          }),
          onSelect: () => {
            ev.onClick(), B("image" === u ? {
              kind: "image",
              sourceUrl: er,
              filePath: R?.path ?? null
            } : {
              kind: "video",
              sourceUrl: er,
              filePath: R?.path ?? null,
              posterUrl: R?.path == null ? m ?? null : null,
              cacheVersion: M ?? null
            })
          }
        }) : null, null != R ? (0, t.jsx)(T.HatchMediaShareMenuItem, {
          item: R,
          variant: "context",
          disabled: ea,
          getReturnFocus: () => ee.current?.querySelector("button, a[href], [tabindex='0']") ?? null
        }) : null, el ? (0, t.jsx)(h.ContextMenuItem, {
          ref: eC,
          disabled: ea,
          leadingIcon: o.default,
          label: i.fbs._("Copy", null, {
            hk: "4G2RYO"
          }),
          onSelect: () => {
            eE("copy")
          }
        }) : null, null != ei ? (0, t.jsx)(h.ContextMenuItem, {
          ref: ex,
          disabled: ea,
          leadingIcon: l.default,
          label: i.fbs._("Download", null, {
            hk: "2iWMwS"
          }),
          onSelect: () => {
            ek(), eE("download")
          }
        }) : null, null != es && null != z ? (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(h.ContextMenuSeparator, {}), (0, t.jsx)(h.ContextMenuItem, {
            ref: eS.ref,
            disabled: ea,
            leadingIcon: c.default,
            label: i.fbs._("Delete", null, {
              hk: "3zCax0"
            }),
            variant: "destructive",
            onSelect: () => {
              eS.onClick(), z(es)
            }
          })]
        }) : null]
      })]
    })
  }
  e.s(["HatchChatImageContextMenu", 0, function(e) {
    let r, n = (0, a.c)(2);
    return n[0] !== e ? (r = (0, t.jsx)(j, {
      ...e,
      mediaKind: "image"
    }), n[0] = e, n[1] = r) : r = n[1], r
  }, "HatchChatMediaContextMenu", 0, j, "HatchDeletedImageTombstone", 0, function(e) {
    let r, n = (0, a.c)(4),
      {
        className: i,
        messageId: l,
        createdAt: s
      } = e;
    return n[0] !== i || n[1] !== s || n[2] !== l ? (r = (0, t.jsx)(N, {
      kind: "image",
      className: i,
      messageId: l,
      createdAt: s
    }), n[0] = i, n[1] = s, n[2] = l, n[3] = r) : r = n[3], r
  }, "HatchDeletedMediaTombstone", 0, N, "HatchUnavailableMediaTile", 0, L])
}, 41507, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(519172),
    r = e.i(245398);

  function n(e) {
    let t = "var(--hatch-chat-bubble-corner-cap, 60%)";
    return `min(${e}, ${t}) min(${e}, ${t})`
  }
  let i = {
      startStart: n("var(--hatch-chat-bubble-render-radius-start-start, var(--hatch-chat-bubble-radius-start-start, 22px))"),
      startEnd: n("var(--hatch-chat-bubble-render-radius-start-end, var(--hatch-chat-bubble-radius-start-end, 22px))"),
      endStart: n("var(--hatch-chat-bubble-render-radius-end-start, var(--hatch-chat-bubble-radius-end-start, 22px))"),
      endEnd: n("var(--hatch-chat-bubble-render-radius-end-end, var(--hatch-chat-bubble-radius-end-end, 22px))")
    },
    l = (0, a.createContext)(r.STANDALONE_CHAT_MESSAGE_LAYOUT);

  function s(e) {
    return e === r.HATCH_CHAT_BUBBLE_RADIUS_PX ? `var(--hatch-chat-bubble-scale-base, ${r.HATCH_CHAT_BUBBLE_CONTINUOUS_RADIUS_PX}px)` : e === r.HATCH_CHAT_TUCKED_RADIUS_PX ? `var(--hatch-chat-bubble-scale-tuck, ${r.HATCH_CHAT_TUCKED_CONTINUOUS_RADIUS_PX}px)` : `${(0,r.hatchChatContinuousRadiusPx)(e)}px`
  }

  function o(e) {
    return {
      "--hatch-chat-bubble-radius-start-start": `${e.startStart}px`,
      "--hatch-chat-bubble-radius-start-end": `${e.startEnd}px`,
      "--hatch-chat-bubble-radius-end-start": `${e.endStart}px`,
      "--hatch-chat-bubble-radius-end-end": `${e.endEnd}px`,
      "--hatch-chat-bubble-continuous-radius-start-start": s(e.startStart),
      "--hatch-chat-bubble-continuous-radius-start-end": s(e.startEnd),
      "--hatch-chat-bubble-continuous-radius-end-start": s(e.endStart),
      "--hatch-chat-bubble-continuous-radius-end-end": s(e.endEnd)
    }
  }

  function u(e) {
    return {
      ...o((0, r.normalizeHatchChatBubbleRadius)(e.radius)),
      borderStartStartRadius: i.startStart,
      borderStartEndRadius: i.startEnd,
      borderEndStartRadius: i.endStart,
      borderEndEndRadius: i.endEnd
    }
  }

  function c(e, t = {}) {
    var a;
    let n = {
      ...o((0, r.normalizeHatchChatBubbleRadius)({
        ...e.radius,
        ..."number" == typeof(a = t.radius) ? {
          startStart: a,
          startEnd: a,
          endStart: a,
          endEnd: a
        } : a ?? {}
      })),
      borderStartStartRadius: i.startStart,
      borderStartEndRadius: i.startEnd,
      borderEndStartRadius: i.endStart,
      borderEndEndRadius: i.endEnd
    };
    return null != t.spaceBeforePx && (n.marginBlockStart = t.spaceBeforePx - e.spaceBeforePx), null != t.spaceAfterPx && (n.marginBlockEnd = t.spaceAfterPx - e.spaceAfterPx), n
  }
  e.s(["HatchChatMessageLayoutContext", 0, l, "hatchChatBubbleRadiusStyle", 0, u, "hatchChatBubbleStyle", 0, c, "hatchChatMessageLayoutDataAttributes", 0, function(e, t, a) {
    return {
      "data-message-item": !0,
      "data-message-id": t,
      "data-message-role": a,
      "data-message-side": e.side,
      ...e.isGroupable ? {
        "data-message-groupable": !0
      } : {},
      "data-message-turn-id": e.turnId,
      "data-message-group-id": e.groupId,
      "data-message-group-position": e.groupPosition,
      ...e.groupedWithPrevious ? {
        "data-message-grouped-with-previous": !0
      } : {},
      ...e.groupedWithNext ? {
        "data-message-grouped-with-next": !0
      } : {}
    }
  }, "hatchChatMessageLayoutStyle", 0, function(e, t = e.spaceAfterPx) {
    return {
      marginBlockStart: e.spaceBeforePx,
      ...e.spaceAfterPx !== t ? {
        marginBlockEnd: e.spaceAfterPx - t
      } : {},
      ...u(e)
    }
  }, "useHatchChatBubbleLayout", 0, function(e) {
    let n, i, s, o = (0, t.c)(8);
    o[0] !== e ? (n = void 0 === e ? {} : e, o[0] = e, o[1] = n) : n = o[1];
    let u = n,
      d = (0, a.useContext)(l);
    return o[2] !== d || o[3] !== u ? (i = c(d, u), o[2] = d, o[3] = u, o[4] = i) : i = o[4], o[5] !== d || o[6] !== i ? (s = {
      className: r.HATCH_CHAT_GROUPABLE_BUBBLE_CLASS,
      layout: d,
      style: i
    }, o[5] = d, o[6] = i, o[7] = s) : s = o[7], s
  }])
}, 546211, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    r = e.i(519172),
    n = e.i(55473);
  let i = {
      image: new Map,
      video: new Map
    },
    l = (0, r.createContext)(i);
  e.s(["HatchMessageMediaProvider", 0, function(e) {
    let r, i, s = (0, a.c)(6),
      {
        images: o,
        files: u,
        children: c
      } = e;
    if (s[0] !== u || s[1] !== o) {
      for (let e of (r = {
          image: new Map,
          video: new Map
        }, [...o ?? [], ...u ?? []])) ! function(e, t) {
        let a = t.media;
        if (null == a) return;
        let r = e[a.kind];
        for (let e of [t.path, a.path])
          for (let t of (0, n.getHatchMediaPathAliases)(e)) r.set(t, a)
      }(r, e);
      s[0] = u, s[1] = o, s[2] = r
    } else r = s[2];
    let d = r;
    return s[3] !== c || s[4] !== d ? (i = (0, t.jsx)(l.Provider, {
      value: d,
      children: c
    }), s[3] = c, s[4] = d, s[5] = i) : i = s[5], i
  }, "useHatchMessageMediaResource", 0, function(e, t) {
    let i, s = (0, a.c)(4),
      o = (0, r.useContext)(l);
    if (s[0] !== t || s[1] !== o || s[2] !== e) {
      for (let a of (i = Symbol.for("react.early_return_sentinel"), (0, n.getHatchMediaPathAliases)(e))) {
        let e = o[t].get(a);
        if (null != e) {
          i = e;
          break
        }
      }
      s[0] = t, s[1] = o, s[2] = e, s[3] = i
    } else i = s[3];
    return i !== Symbol.for("react.early_return_sentinel") ? i : null
  }])
}, 74894, e => {
  "use strict";
  e.s(["HATCH_IMAGE_GRID_CELL_BG", 0, "bg-fill-secondary", "HATCH_IMAGE_GRID_GAP", 0, "gap-1", "HATCH_IMAGE_GRID_MAX_VISIBLE", 0, 4, "HATCH_IMAGE_GRID_RADIUS", 0, "rounded-22", "HATCH_IMAGE_GRID_SINGLE_CHAT_SIZE_PX", 0, 220, "HATCH_IMAGE_GRID_SINGLE_DEFAULT_FLUID", 0, "aspect-square w-[360px] max-w-full", "HATCH_IMAGE_GRID_SINGLE_DEFAULT_SIZE_PX", 0, 360, "HATCH_IMAGE_GRID_SINGLE_FLUID", 0, "aspect-square w-[220px] max-w-full", "hatchAgentImageGridTemplate", 0, function(e) {
    let t = Math.min(Math.max(e, 1), 4);
    return `repeat(${t>=4?2:t}, minmax(0, 1fr))`
  }, "hatchImageGridCellRadiusClass", 0, function(e, t) {
    let a = Math.min(Math.max(e, 1), 4);
    return 1 === a ? "rounded-22" : a < 4 ? 0 === t ? "[border-start-start-radius:var(--hatch-chat-bubble-render-radius-start-start)] rounded-se-6 rounded-ee-6 [border-end-start-radius:var(--hatch-chat-bubble-render-radius-end-start)]" : t === a - 1 ? "rounded-ss-6 [border-start-end-radius:var(--hatch-chat-bubble-render-radius-start-end)] [border-end-end-radius:var(--hatch-chat-bubble-render-radius-end-end)] rounded-es-6" : "rounded-6" : 0 === t ? "[border-start-start-radius:var(--hatch-chat-bubble-render-radius-start-start)] rounded-se-6 rounded-ee-6 rounded-es-6" : 1 === t ? "rounded-ss-6 [border-start-end-radius:var(--hatch-chat-bubble-render-radius-start-end)] rounded-ee-6 rounded-es-6" : 2 === t ? "rounded-ss-6 rounded-se-6 rounded-ee-6 [border-end-start-radius:var(--hatch-chat-bubble-render-radius-end-start)]" : "rounded-ss-6 rounded-se-6 [border-end-end-radius:var(--hatch-chat-bubble-render-radius-end-end)] rounded-es-6"
  }, "hatchImageGridCellSizeClass", 0, function(e) {
    return e >= 3 ? "[--hatch-image-grid-cell-size:112px] sm:[--hatch-image-grid-cell-size:170px]" : "[--hatch-image-grid-cell-size:170px]"
  }, "hatchImageGridTemplate", 0, function(e, t = !1) {
    if (t && 2 === e) return "repeat(2, minmax(0, var(--hatch-image-grid-cell-size)))";
    let a = Math.min(Math.max(e, 1), 4);
    return `repeat(${a>=4?2:a}, var(--hatch-image-grid-cell-size))`
  }, "hatchMediaGridTemplate", 0, function(e, t = !1) {
    return t && 2 === e ? "repeat(2, minmax(0, 140px))" : `repeat(${Math.min(e,4)}, 140px)`
  }])
}, 822622, e => {
  "use strict";
  let t = {
      avif: "image/avif",
      bmp: "image/bmp",
      gif: "image/gif",
      heic: "image/heic",
      heif: "image/heif",
      ico: "image/x-icon",
      jpeg: "image/jpeg",
      jpg: "image/jpeg",
      png: "image/png",
      svg: "image/svg+xml",
      tif: "image/tiff",
      tiff: "image/tiff",
      webp: "image/webp"
    },
    a = {
      m4v: "video/mp4",
      mov: "video/quicktime",
      mp4: "video/mp4",
      ogv: "video/ogg",
      webm: "video/webm"
    };

  function r(e) {
    let r = e.split("/").pop();
    if (!r) return "application/octet-stream";
    let n = r.split(".").pop()?.toLowerCase();
    return n ? t[n] ?? a[n] ?? "application/octet-stream" : "application/octet-stream"
  }
  e.s(["inferMarkdownImageMimeType", 0, function(e) {
    let t = r(e);
    return t.startsWith("image/") ? t : "image/png"
  }, "inferMarkdownMediaMimeType", 0, r])
}, 760806, e => {
  "use strict";
  let t = "workspace/podcasts";

  function a(e) {
    if (null == e) return !1;
    let a = e.startsWith("sandbox://") ? e.slice(10) : e,
      r = a.startsWith("/") ? a.slice(1) : a;
    return r === t || r.startsWith(`${t}/`)
  }
  e.s(["formatAudioTime", 0, function(e) {
    let t = Number.isFinite(e) && e > 0 ? e : 0,
      a = Math.floor(t / 60),
      r = Math.floor(t % 60);
    return `${a}:${r.toString().padStart(2,"0")}`
  }, "getLinkedPodcastFeedTitle", 0, function(e, t) {
    if (null == e || null == t) return null;
    let a = t.feed_title.trim();
    if (0 === a.length) return null;
    let r = null != e.feed_url && e.feed_url.length > 0 && null != t.feed_url && e.feed_url === t.feed_url,
      n = (e.spotify_episode_uri?.trim().length ?? 0) > 0;
    return r || n ? a : null
  }, "getPodcastSlugFromPath", 0, function(e) {
    if (null == e) return null;
    let a = e.startsWith("sandbox://") ? e.slice(10) : e,
      r = a.startsWith("/") ? a.slice(1) : a;
    if (!r.startsWith(`${t}/`)) return null;
    let [n] = r.slice(t.length + 1).split("/");
    return n?.trim() || null
  }, "isPodcastFile", 0, function(e) {
    return a(e.path)
  }, "isPodcastPath", 0, a])
}, 315882, e => {
  "use strict";
  var t = e.i(519172);
  let a = (0, e.i(359783).createClientLogger)("HatchLazyChatSubtrees"),
    r = null;

  function n() {
    return r ??= e.A(453421).then(e => (e.HatchInlineApprovalCard, {
      default: e.HatchInlineApprovalCard
    })).catch(e => {
      throw r = null, e
    })
  }
  let i = (0, t.lazy)(n),
    l = (0, t.lazy)(() => e.A(762065).then(e => ({
      default: e.HatchAudioBubble
    }))),
    s = (0, t.lazy)(() => e.A(77709).then(e => ({
      default: e.HatchPodcastBubble
    }))),
    o = (0, t.lazy)(() => e.A(705859).then(e => ({
      default: e.HatchChatActionLink
    }))),
    u = (0, t.lazy)(() => e.A(144593).then(e => ({
      default: e.EctoMarkdownRenderer
    }))),
    c = () => e.A(56115).then(e => ({
      default: e.HatchHtmlPreviewFrame
    })),
    d = (0, t.lazy)(() => e.A(668586).then(e => ({
      default: e.HatchDictationRecordingStrip
    }))),
    h = (0, t.lazy)(() => e.A(568902).then(e => ({
      default: e.HatchImageGrid
    }))),
    m = (0, t.lazy)(() => e.A(607696).then(e => ({
      default: e.HatchChatLocalMapWidget
    }))),
    f = (0, t.lazy)(() => e.A(755798).then(e => ({
      default: e.HatchChatLocalMapSceneWidget
    }))),
    b = (0, t.lazy)(() => e.A(748616).then(e => ({
      default: e.HatchChatMarketplaceMapWidget
    })));

  function p() {
    return e.A(3300).then(e => ({
      default: e.HatchConnectorDeepLink
    }))
  }
  e.s(["HatchAudioBubbleLazy", 0, l, "HatchChatActionLinkLazy", 0, o, "HatchChatLocalMapSceneWidgetLazy", 0, f, "HatchChatLocalMapWidgetLazy", 0, m, "HatchChatMarketplaceMapWidgetLazy", 0, b, "HatchDictationRecordingStripLazy", 0, d, "HatchImageGridLazy", 0, h, "HatchInlineApprovalCardLazy", 0, i, "HatchPodcastBubbleLazy", 0, s, "HatchPresentationMarkdownLazy", 0, u, "createHatchConnectorDeepLinkLazy", 0, function() {
    return (0, t.lazy)(() => p().catch(e => (a.retainForBugReport("warn", "connector deep link chunk import failed, retrying"), p())))
  }, "createHatchHtmlPreviewFrameLazy", 0, () => (0, t.lazy)(c), "loadHatchHtmlPreviewFrame", 0, c, "preloadHatchDictationRecordingStrip", 0, function() {
    e.A(668586).catch(() => {})
  }, "preloadHatchInlineApprovalCard", 0, function() {
    n().catch(e => {
      a.retainForBugReport("warn", "Approval card preload failed; the next load will retry")
    })
  }])
}, 68032, e => {
  "use strict";
  var t = e.i(722469);
  e.s(["resolveHatchDeleteTarget", 0, function(e, a) {
    let r = (0, t.normalizePath)(e);
    if (function(e) {
        let a = (0, t.normalizePath)(e).split("/").filter(e => e.length > 0);
        if (4 !== a.length || "workspace" !== a[0] || "artifacts" !== a[1] && "your_files" !== a[1]) return !1;
        let r = a[2] ?? "",
          n = a[3] ?? "";
        return "index.html" === n || n === `${r}.html`
      }(r)) {
      let e = r.split("/").filter(e => e.length > 0),
        n = e[2] ?? "";
      return {
        requestedPath: r,
        resolvedPath: `/workspace/${e[1]}/${n}`,
        kind: "artifact",
        displayName: (0, t.getNameFromPath)(r),
        origin: a
      }
    }
    return {
      requestedPath: r,
      resolvedPath: r,
      kind: "file",
      displayName: (0, t.getNameFromPath)(r),
      origin: a
    }
  }])
}, 279419, e => {
  "use strict";
  var t = e.i(47247),
    a = e.i(658895),
    r = e.i(335004),
    n = e.i(863919);
  let i = new a.LRUCache(128);

  function l(e, t) {
    let a = Date.now();
    return !(a - (i.get(e) ?? 0) < t) && (i.set(e, a), !0)
  }

  function s(e, t, a) {
    "info" === t ? e.info(a) : e.error(a)
  }
  e.s(["handleHatchGatewayError", 0, function(e, a) {
    let {
      surface: i,
      errorMessage: o,
      context: u,
      toast: c,
      toastApi: d = t.toast
    } = a, h = c?.mode ?? "none", m = c?.variant ?? "error", f = c?.throttleMs ?? 5e3, b = c?.message, p = (0, r.toHatchGatewayError)(e);
    if ((0, n.logHatchGatewayError)(e, {
        surface: i,
        errorMessage: o,
        context: u
      }), null != p) {
      if (null == b || "none" === h) return;
      let e = c?.dedupeKey ?? `${i}:${m}:${p.kind}:${p.reason??"none"}:${String(b)}`;
      ("always" === h || l(e, f)) && s(d, m, b);
      return
    }
    if (null == b || "none" === h) return;
    let g = c?.dedupeKey ?? `${i}:${m}:unexpected:${String(b)}`;
    ("always" === h || l(g, f)) && s(d, m, b)
  }])
}, 308206, e => {
  "use strict";
  var t = e.i(826972);
  e.s(["normalizeFsEventPath", 0, function(e) {
    if ("string" != typeof e) return null;
    let a = (0, t.toHatchGatewayApiPath)(e);
    return a || null
  }])
}, 378534, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    r = e.i(345717),
    n = e.i(848048),
    i = e.i(832815),
    l = e.i(509789),
    s = e.i(18516),
    o = e.i(281539),
    u = e.i(634791);
  i.default._isSVG = !0, e.s(["HatchMediaShareMenuItem", 0, function(e) {
    let c, d, h, m, f = (0, a.c)(13),
      {
        item: b,
        library: p,
        variant: g,
        disabled: _,
        getReturnFocus: v
      } = e,
      C = void 0 !== p && p,
      y = void 0 !== _ && _,
      x = (0, u.useHatchMediaShareAction)(b, C),
      k = C ? "library" : "chat",
      S = "context" === g ? "context_menu" : "overflow_menu";
    f[0] !== k || f[1] !== S ? (c = {
      eventName: o.HatchClickEvent.MEDIA_SHARE_OPEN,
      actionTarget: "media_share",
      actionType: "click",
      metadata: {
        source: "media",
        surface: k,
        subsurface: S
      }
    }, f[0] = k, f[1] = S, f[2] = c) : c = f[2];
    let {
      ref: M,
      onClick: E
    } = (0, n.useTrackedClickRef)(c);
    if (null == x) return null;
    let H = "context" === g ? l.ContextMenuItem : s.DropdownMenuItem;
    return f[3] === Symbol.for("react.memo_cache_sentinel") ? (d = r.fbs._("Share", null, {
      hk: "1N4Qhs"
    }), f[3] = d) : d = f[3], f[4] !== v || f[5] !== E || f[6] !== x ? (h = () => {
      E(), x(v?.() ?? void 0)
    }, f[4] = v, f[5] = E, f[6] = x, f[7] = h) : h = f[7], f[8] !== H || f[9] !== y || f[10] !== M || f[11] !== h ? (m = (0, t.jsx)(H, {
      ref: M,
      leadingIcon: i.default,
      label: d,
      disabled: y,
      onSelect: h
    }), f[8] = H, f[9] = y, f[10] = M, f[11] = h, f[12] = m) : m = f[12], m
  }])
}, 205254, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    r = e.i(345717),
    n = e.i(770256),
    i = e.i(848048),
    l = e.i(646361),
    s = e.i(374785),
    o = e.i(823173);
  e.s(["HatchAudioBubbleError", 0, function(e) {
    let u, c, d, h, m, f, b = (0, a.c)(11),
      {
        variant: p
      } = e,
      g = "outgoing" === (void 0 === p ? "incoming" : p);
    b[0] === Symbol.for("react.memo_cache_sentinel") ? (u = {
      eventName: o.HatchImpressionEvent.HATCH_CHAT_MESSAGE_SUBTREE_ERROR_IMPRESSION,
      actionTarget: "HatchAudioBubbleError",
      metadata: {
        surface: "chat",
        subsurface: "message_subtree_error",
        subtree: "audio"
      }
    }, c = {
      threshold: "50%"
    }, b[0] = u, b[1] = c) : (u = b[0], c = b[1]);
    let {
      ref: _
    } = (0, i.useTrackedImpressionRef)(u, c), v = g ? "bg-black text-white dark:bg-white dark:text-black" : "text-text-primary bg-[var(--hatch-agent-bubble-bg)]";
    b[2] !== v ? (d = (0, s.cn)("flex w-[280px] items-center gap-2 rounded-full px-3 py-2.5", v), b[2] = v, b[3] = d) : d = b[3];
    let C = g ? "text-white/70 dark:text-black/70" : "text-text-primary/60";
    return b[4] !== C ? (h = (0, t.jsx)(l.HatchIcon, {
      icon: n.default,
      size: 16,
      className: C
    }), b[4] = C, b[5] = h) : h = b[5], b[6] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, t.jsx)("span", {
      className: "text-subheadline italic",
      children: r.fbs._("Audio unavailable.", null, {
        hk: "39qiYY"
      })
    }), b[6] = m) : m = b[6], b[7] !== _ || b[8] !== d || b[9] !== h ? (f = (0, t.jsxs)("div", {
      ref: _,
      role: "alert",
      className: d,
      children: [h, m]
    }), b[7] = _, b[8] = d, b[9] = h, b[10] = f) : f = b[10], f
  }])
}, 596860, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    r = e.i(345717),
    n = e.i(295967),
    i = e.i(374785);
  e.s(["HatchAudioBubbleSkeleton", 0, function(e) {
    let l, s, o, u, c, d, h, m, f, b, p, g, _, v, C = (0, a.c)(28),
      {
        variant: y
      } = e,
      x = "outgoing" === (void 0 === y ? "incoming" : y);
    C[0] === Symbol.for("react.memo_cache_sentinel") ? (l = r.fbs._("Loading audio message", null, {
      hk: "3hevHY"
    }), C[0] = l) : l = C[0];
    let k = x ? "bg-black dark:bg-white" : "bg-[var(--hatch-agent-bubble-bg)]";
    C[1] !== k ? (s = (0, i.cn)("flex w-[280px] items-center gap-2.5 rounded-full px-3 py-2.5", k), C[1] = k, C[2] = s) : s = C[2];
    let S = x ? "bg-white/20 dark:bg-black/20" : "bg-fill-secondary dark:bg-fill-tertiary";
    C[3] !== S ? (o = (0, i.cn)("h-8 w-8 shrink-0 rounded-full motion-safe:animate-pulse", S), C[3] = S, C[4] = o) : o = C[4], C[5] !== o ? (u = (0, t.jsx)("div", {
      "aria-hidden": !0,
      className: o
    }), C[5] = o, C[6] = u) : u = C[6];
    let M = x ? "bg-white/15 dark:bg-black/15" : "bg-fill-secondary dark:bg-fill-tertiary";
    C[7] !== M ? (c = (0, i.cn)("h-[32px] min-w-0 flex-1 rounded motion-safe:animate-pulse", M), C[7] = M, C[8] = c) : c = C[8], C[9] === Symbol.for("react.memo_cache_sentinel") ? (d = {
      animationDelay: "60ms"
    }, C[9] = d) : d = C[9], C[10] !== c ? (h = (0, t.jsx)("div", {
      "aria-hidden": !0,
      className: c,
      style: d
    }), C[10] = c, C[11] = h) : h = C[11];
    let E = x ? "bg-white/20 dark:bg-black/20" : "bg-fill-secondary dark:bg-fill-tertiary";
    C[12] !== E ? (m = (0, i.cn)("h-3 w-8 shrink-0 rounded motion-safe:animate-pulse", E), C[12] = E, C[13] = m) : m = C[13], C[14] === Symbol.for("react.memo_cache_sentinel") ? (f = {
      animationDelay: "120ms"
    }, C[14] = f) : f = C[14], C[15] !== m ? (b = (0, t.jsx)("div", {
      "aria-hidden": !0,
      className: m,
      style: f
    }), C[15] = m, C[16] = b) : b = C[16];
    let H = x ? "bg-white/20 dark:bg-black/20" : "bg-fill-secondary dark:bg-fill-tertiary";
    return C[17] !== H ? (p = (0, i.cn)("h-6 w-6 shrink-0 rounded-full motion-safe:animate-pulse", H), C[17] = H, C[18] = p) : p = C[18], C[19] === Symbol.for("react.memo_cache_sentinel") ? (g = {
      animationDelay: "180ms"
    }, C[19] = g) : g = C[19], C[20] !== p ? (_ = (0, t.jsx)("div", {
      "aria-hidden": !0,
      className: p,
      style: g
    }), C[20] = p, C[21] = _) : _ = C[21], C[22] !== h || C[23] !== b || C[24] !== _ || C[25] !== s || C[26] !== u ? (v = (0, t.jsx)(n.LoadingState, {
      name: "chat_audio",
      children: (0, t.jsxs)("div", {
        role: "status",
        "aria-busy": "true",
        "aria-label": l,
        className: s,
        children: [u, h, b, _]
      })
    }), C[22] = h, C[23] = b, C[24] = _, C[25] = s, C[26] = u, C[27] = v) : v = C[27], v
  }])
}, 156056, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    r = e.i(345717),
    n = e.i(295967),
    i = e.i(374785);
  e.s(["HatchHtmlPreviewSkeleton", 0, function(e) {
    let l, s, o, u, c, d, h, m = (0, a.c)(14);
    m[0] !== e ? (l = void 0 === e ? {} : e, m[0] = e, m[1] = l) : l = m[1];
    let {
      announce: f,
      className: b,
      standalone: p
    } = l;
    m[2] !== b ? (s = (0, i.cn)("h-full w-full", b), m[2] = b, m[3] = s) : s = m[3];
    let g = void 0 === f || f ? void 0 : "off";
    m[4] === Symbol.for("react.memo_cache_sentinel") ? (o = r.fbs._("Loading preview", null, {
      hk: "43wfJW"
    }), m[4] = o) : o = m[4];
    let _ = void 0 !== p && p && "min-h-[240px]";
    return m[5] !== _ ? (u = (0, i.cn)("h-full w-full", _), m[5] = _, m[6] = u) : u = m[6], m[7] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, t.jsx)("div", {
      "aria-hidden": !0,
      className: "bg-fill-secondary rounded-6 h-full w-full motion-safe:animate-pulse"
    }), m[7] = c) : c = m[7], m[8] !== g || m[9] !== u ? (d = (0, t.jsx)("div", {
      role: "status",
      "aria-busy": "true",
      "aria-live": g,
      "aria-label": o,
      className: u,
      children: c
    }), m[8] = g, m[9] = u, m[10] = d) : d = m[10], m[11] !== d || m[12] !== s ? (h = (0, t.jsx)(n.LoadingState, {
      name: "chat_html_preview",
      className: s,
      children: d
    }), m[11] = d, m[12] = s, m[13] = h) : h = m[13], h
  }])
}, 185576, 341771, e => {
  "use strict";
  var t = e.i(308206);
  e.i(530611);
  var a = e.i(246586);
  e.s(["buildSpaceIconSrcBySlug", 0, function(e) {
    let t = new Map;
    for (let r of e) {
      let e = (0, a.resolveSpaceIconSrc)(r.image_url);
      null != e && 0 !== r.slug.length && t.set(r.slug, e)
    }
    return t
  }, "resolveCanonicalSpaceIconSrcBySlug", 0, function(e, a) {
    if (null == e) return null;
    let r = function(e) {
      if (null == e) return null;
      let a = (0, t.normalizeFsEventPath)(e);
      if (null == a) return null;
      let r = a.split("/");
      if (r.length < 4 || "workspace" !== r[0]) return null;
      let n = r[1];
      if ("spaces" !== n && "space_data" !== n) return null;
      let i = r[2],
        l = r[3]?.toLowerCase() ?? "";
      return null != i && 0 !== i.length && ("icon" === l || l.startsWith("icon.")) ? i : null
    }(e) ?? function(e) {
      if (null == e) return null;
      let t = e.trim().match(/^\/spaces\/v2\/([^/?#]+)\/icon(?:\.[^/?#]+)?(?:[?#].*)?$/i);
      if (null == t) return null;
      try {
        return decodeURIComponent(t[1] ?? "")
      } catch {
        return t[1] ?? null
      }
    }(e);
    return null == r ? e : a.get(r) ?? e
  }], 185576);
  var r = e.i(722099),
    n = e.i(329898);
  e.s(["containedImageFrameStyle", 0, function(e, t, a, r = 1) {
    if (null == e) return {
      aspectRatio: String(r),
      width: t
    };
    let n = e.width / e.height;
    return {
      aspectRatio: String(n),
      width: Math.min(e.width, t, a * n)
    }
  }, "useHatchImageDimensions", 0, function(e) {
    let t, a, i = (0, r.c)(6),
      {
        dimensions: l,
        rememberDimensions: s
      } = (0, n.useHatchImageDimensionProbe)(e);
    i[0] !== s || i[1] !== e ? (t = t => {
      null != e && s({
        width: t.naturalWidth,
        height: t.naturalHeight
      })
    }, i[0] = s, i[1] = e, i[2] = t) : t = i[2];
    let o = t;
    return i[3] !== l || i[4] !== o ? (a = {
      dimensions: l,
      rememberDimensions: o
    }, i[3] = l, i[4] = o, i[5] = a) : a = i[5], a
  }], 341771)
}, 437081, e => {
  "use strict";
  var t = e.i(519172),
    a = e.i(345717),
    r = e.i(393202),
    n = e.i(848048),
    i = e.i(281539),
    l = e.i(823173),
    s = e.i(47247),
    o = e.i(359783),
    u = e.i(796413),
    c = e.i(52038),
    d = e.i(175286),
    h = e.i(279419),
    m = e.i(288119),
    f = e.i(907579),
    b = e.i(68032),
    p = e.i(767408);
  let g = (0, o.createClientLogger)("HatchDeleteConfirmation");
  e.s(["useHatchDeleteConfirmation", 0, function({
    origin: o,
    onDeleted: _
  }) {
    let v = (0, f.useHatchGatewayFs)(),
      C = (0, r.useQueryClient)(),
      {
        gatewayUrl: y,
        vmName: x
      } = (0, c.useHatchServerData)(),
      {
        gatewayScopeKey: k
      } = (0, d.useHatchRpc)(),
      S = (0, u.useConfirmationDialog)(),
      M = (0, t.useRef)(0),
      E = (0, t.useRef)(null),
      [H, A] = (0, t.useState)(null),
      [T, w] = (0, t.useState)(!1),
      P = H?.target ?? null,
      I = a.fbs._("Failed to delete artifact", null, {
        hk: "2y6YN9"
      }),
      R = a.fbs._("Failed to delete file", null, {
        hk: "GD1Kh"
      }),
      L = a.fbs._("Artifact deleted", null, {
        hk: "1vYlZD"
      }),
      N = a.fbs._("File deleted", null, {
        hk: "dvnA6"
      }),
      D = a.fbs._("If you've shared it, its link will become inactive and visitors won't be able to access it. Deleting it removes the entire artifact folder and its associated media from your library, and cannot be undone.", null, {
        hk: "36gE5k"
      }),
      j = a.fbs._("If you've shared it, its link will become inactive and visitors won't be able to access it. Deleting it removes it from your library, and cannot be undone.", null, {
        hk: "3AS5rT"
      }),
      F = a.fbs._("Delete", null, {
        hk: "24DgvP"
      }),
      O = a.fbs._("Cancel", null, {
        hk: "3m5CmX"
      }),
      B = null == P ? null : a.fbs._("Delete {itemName}?", [a.fbs._param("itemName", P.displayName)], {
        hk: "4qRZoE"
      }),
      z = P?.requestedPath,
      G = z ? (0, m.getFileExtension)(z) : "",
      U = G && G !== z ? G : void 0,
      $ = "media_lightbox" === o || "chat_image_context_menu" === o || "chat_media_context_menu" === o ? "media" : P?.kind ?? "file",
      {
        ref: W
      } = (0, n.useTrackedImpressionRef)({
        eventName: l.HatchImpressionEvent.FILE_DELETE_DIALOG_IMPRESSION,
        actionTarget: "delete_dialog",
        vmId: x ?? void 0,
        filePath: z ?? void 0,
        fileType: U || void 0,
        metadata: {
          origin: o,
          target_kind: $
        }
      }, {
        threshold: "50%"
      }),
      {
        ref: K,
        onClick: V
      } = (0, n.useTrackedClickRef)({
        eventName: i.HatchClickEvent.FILE_DELETE_CONFIRM_CLICK,
        actionTarget: "delete_confirm_button",
        actionType: "click",
        vmId: x ?? void 0,
        filePath: z ?? void 0,
        fileType: U || void 0,
        metadata: {
          origin: o,
          target_kind: $
        }
      }),
      {
        ref: q,
        onClick: Y
      } = (0, n.useTrackedClickRef)({
        eventName: i.HatchClickEvent.FILE_DELETE_CANCEL_CLICK,
        actionTarget: "delete_cancel_button",
        actionType: "click",
        vmId: x ?? void 0,
        filePath: z ?? void 0,
        fileType: U || void 0,
        metadata: {
          origin: o,
          target_kind: $
        }
      }),
      X = (0, t.useCallback)(() => {
        A(null)
      }, []),
      Z = (0, t.useCallback)(async (t, a) => {
        if (!T) {
          w(!0), A(null);
          try {
            let {
              deleteHatchTarget: r
            } = await e.A(109798), n = await r({
              target: t,
              fs: v,
              queryClient: C,
              gatewayUrl: y,
              gatewayScopeKey: k
            });
            if (!n.ok) return void(0, h.handleHatchGatewayError)(n.error, {
              surface: "files.delete",
              errorMessage: "Failed to delete Hatch target",
              context: {
                requestedPath: (0, p.redactPathForTelemetry)(t.requestedPath),
                resolvedPath: (0, p.redactPathForTelemetry)(t.resolvedPath),
                origin: o
              },
              toast: {
                message: "artifact" === t.kind ? I : R,
                mode: "throttled"
              },
              toastApi: a
            });
            a.success("artifact" === t.kind ? L : N), _?.(t)
          } catch (r) {
            a.error("artifact" === t.kind ? I : R);
            let e = r instanceof Error ? r : Error("object" == typeof r && null != r && "message" in r ? r.message : String(r));
            g.error({
              error: e,
              requestedPath: t.requestedPath,
              resolvedPath: t.resolvedPath,
              origin: o
            }, "Delete failed")
          } finally {
            w(!1)
          }
        }
      }, [I, L, R, N, v, k, y, T, _, o, C]);
    return (0, t.useEffect)(() => {
      if (null == H || E.current === H.id) return;
      E.current = H.id;
      let e = H.target;
      S({
        title: B,
        description: "artifact" === e.kind ? D : j,
        onConfirm: () => {
          Z(e, H.toast)
        },
        onCancel: X,
        onPrimaryButtonClick: V,
        onSecondaryButtonClick: Y,
        buttonLayout: "vertical",
        contentRef: W,
        primaryButtonProps: {
          ref: K,
          label: F,
          size: "36",
          variant: "destructive",
          disabled: T
        },
        secondaryButtonProps: {
          ref: q,
          label: O,
          size: "36",
          variant: "flat",
          disabled: T
        }
      })
    }, [D, O, q, K, F, B, W, j, X, Z, T, Y, V, S, H]), {
      requestDelete: (0, t.useCallback)(e => {
        if (T) return;
        let t = (0, b.resolveHatchDeleteTarget)(e, o);
        M.current += 1, A({
          id: M.current,
          target: t,
          toast: (0, s.captureHatchToast)()
        })
      }, [T, o])
    }
  }])
}, 346791, e => {
  "use strict";
  var t = e.i(519172),
    a = e.i(218105);

  function r() {
    return (0, t.useContext)(a.HatchStatusPanelContext)
  }
  e.s(["useHatchStatusPanel", 0, function() {
    let e = r();
    if (!e) throw Error("useHatchStatusPanel must be used within HatchStatusPanelProvider");
    return e
  }, "useOptionalHatchStatusPanel", 0, r])
}, 503037, e => {
  "use strict";
  var t = e.i(519172),
    a = e.i(51449),
    r = e.i(259864),
    n = e.i(578889),
    i = e.i(766271),
    l = class extends n.Subscribable {
      #e;
      #t = void 0;
      #a;
      #r;
      constructor(e, t) {
        super(), this.#e = e, this.setOptions(t), this.bindMethods(), this.#n()
      }
      bindMethods() {
        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
      }
      setOptions(e) {
        let t = this.options;
        this.options = this.#e.defaultMutationOptions(e), (0, i.shallowEqualObjects)(this.options, t) || this.#e.getMutationCache().notify({
          type: "observerOptionsUpdated",
          mutation: this.#a,
          observer: this
        }), t?.mutationKey && this.options.mutationKey && (0, i.hashKey)(t.mutationKey) !== (0, i.hashKey)(this.options.mutationKey) ? this.reset() : this.#a?.state.status === "pending" && this.#a.setOptions(this.options)
      }
      onUnsubscribe() {
        this.hasListeners() || this.#a?.removeObserver(this)
      }
      onMutationUpdate(e) {
        this.#n(), this.#i(e)
      }
      getCurrentResult() {
        return this.#t
      }
      reset() {
        this.#a?.removeObserver(this), this.#a = void 0, this.#n(), this.#i()
      }
      mutate(e, t) {
        return this.#r = t, this.#a?.removeObserver(this), this.#a = this.#e.getMutationCache().build(this.#e, this.options), this.#a.addObserver(this), this.#a.execute(e)
      }
      #n() {
        let e = this.#a?.state ?? (0, a.getDefaultState)();
        this.#t = {
          ...e,
          isPending: "pending" === e.status,
          isSuccess: "success" === e.status,
          isError: "error" === e.status,
          isIdle: "idle" === e.status,
          mutate: this.mutate,
          reset: this.reset
        }
      }
      #i(e) {
        r.notifyManager.batch(() => {
          if (this.#r && this.hasListeners()) {
            let t = this.#t.variables,
              a = this.#t.context,
              r = {
                client: this.#e,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
              };
            if (e?.type === "success") {
              try {
                this.#r.onSuccess?.(e.data, t, a, r)
              } catch (e) {
                Promise.reject(e)
              }
              try {
                this.#r.onSettled?.(e.data, null, t, a, r)
              } catch (e) {
                Promise.reject(e)
              }
            } else if (e?.type === "error") {
              try {
                this.#r.onError?.(e.error, t, a, r)
              } catch (e) {
                Promise.reject(e)
              }
              try {
                this.#r.onSettled?.(void 0, e.error, t, a, r)
              } catch (e) {
                Promise.reject(e)
              }
            }
          }
          this.listeners.forEach(e => {
            e(this.#t)
          })
        })
      }
    },
    s = e.i(393202);
  e.s(["useMutation", 0, function(e, a) {
    let n = (0, s.useQueryClient)(a),
      [o] = t.useState(() => new l(n, e));
    t.useEffect(() => {
      o.setOptions(e)
    }, [o, e]);
    let u = t.useSyncExternalStore(t.useCallback(e => o.subscribe(r.notifyManager.batchCalls(e)), [o]), () => o.getCurrentResult(), () => o.getCurrentResult()),
      c = t.useCallback((e, t) => {
        o.mutate(e, t).catch(i.noop)
      }, [o]);
    if (u.error && (0, i.shouldThrowError)(o.options.throwOnError, [u.error])) throw u.error;
    return {
      ...u,
      mutate: c,
      mutateAsync: u.mutate
    }
  }], 503037)
}, 867545, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099);

  function r(e) {
    let r, n, i, l, s, o, u = (0, a.c)(11);
    return u[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), u[0] = e.title, u[1] = r) : r = u[1], u[2] !== e.children ? (n = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), u[2] = e.children, u[3] = n) : n = u[3], u[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      d: "M4 10C5.1 10 6 10.9 6 12C6 13.1 5.1 14 4 14C2.9 14 2 13.1 2 12C2 10.9 2.9 10 4 10Z"
    }), l = (0, t.jsx)("path", {
      d: "M12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10Z"
    }), s = (0, t.jsx)("path", {
      d: "M20 10C21.1 10 22 10.9 22 12C22 13.1 21.1 14 20 14C18.9 14 18 13.1 18 12C18 10.9 18.9 10 20 10Z"
    }), u[4] = i, u[5] = l, u[6] = s) : (i = u[4], l = u[5], s = u[6]), u[7] !== e || u[8] !== r || u[9] !== n ? (o = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, n, i, l, s]
    }), u[7] = e, u[8] = r, u[9] = n, u[10] = o) : o = u[10], o
  }
  r._isSVG = !0, e.s(["default", 0, r])
}]);

//# debugId=9f195e73-8780-0c7d-aaa3-f5caed43e477
//# sourceMappingURL=16-80w8qgepuk.js.map