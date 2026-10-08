;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "efc36b09-a371-2470-2e7c-e61d06deeb61")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 258544, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    i = e.i(519172),
    r = e.i(848048),
    n = e.i(345717),
    l = e.i(251932),
    o = e.i(621570),
    s = e.i(440149),
    u = e.i(559401),
    c = e.i(173174),
    d = e.i(764866),
    h = e.i(509789),
    m = e.i(646361),
    f = e.i(281539),
    g = e.i(905156),
    p = e.i(907579),
    b = e.i(648094),
    _ = e.i(960607),
    v = e.i(269677),
    C = e.i(47247),
    y = e.i(359783),
    x = e.i(767408),
    M = e.i(374785),
    k = e.i(863641),
    S = e.i(805163),
    E = e.i(822622),
    I = e.i(450106),
    T = e.i(219327),
    w = e.i(378534),
    H = e.i(176358),
    R = e.i(731714);
  let P = (0, y.createClientLogger)("HatchChatMediaContextMenu");

  function A({
    children: e,
    kind: a,
    state: l,
    messageId: o,
    createdAt: s
  }) {
    let [u, c] = (0, i.useState)(!1), d = (0, T.useOptionalHatchReactionTarget)(), m = (0, g.useHatchChatThreadLoggingMetadataFromContext)(), p = (0, r.useTrackedClickRef)({
      eventName: f.HatchClickEvent.CHAT_MESSAGE_OVERFLOW_OPEN,
      actionTarget: "message_overflow_button",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "context_menu",
        entry_point: "right_click",
        ...m,
        ...null != o ? {
          message_id: o
        } : {},
        media_kind: a,
        media_state: l
      }
    }), b = "image" === a ? n.fbs._("Image not found", null, {
      hk: "MlgZV"
    }) : n.fbs._("Video not found", null, {
      hk: "1Sd0Sp"
    }), _ = n.fbs._("It may be unavailable or removed.", null, {
      hk: "23keJ6"
    }), v = (0, i.useCallback)(e => {
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
          "aria-label": `${b}. ${_}`,
          onContextMenu: e => e.stopPropagation(),
          children: e
        })
      }), (0, t.jsxs)(h.ContextMenuContent, {
        children: [null != s ? (0, t.jsx)(I.HatchMessageMenuTimestamp, {
          createdAt: s
        }) : null, (0, t.jsx)(I.HatchMessagePrimaryMenuItems, {
          messageId: o,
          onReactionSelect: null != d ? v : void 0,
          reactions: d?.reactions,
          subsurface: "context_menu",
          variant: "context"
        }), (0, t.jsxs)(h.ContextMenuLabel, {
          className: "flex flex-col items-start gap-0.5 px-2 pt-0.5 pb-1.5",
          children: [(0, t.jsx)("span", {
            className: "text-subheadline text-text-primary",
            children: b
          }), (0, t.jsx)("span", {
            className: "text-caption-1 text-text-secondary",
            children: _
          })]
        })]
      })]
    })
  }

  function D(e) {
    let i, r, l, o, s, c, h = (0, a.c)(21),
      {
        kind: f,
        state: g,
        enableContextMenu: p,
        messageId: b,
        createdAt: _,
        className: v,
        testId: C,
        containerRef: y
      } = e,
      x = void 0 === g ? "not_found" : g,
      k = void 0 === p || p,
      S = "video" === f;
    h[0] !== S ? (i = S ? n.fbs._("Video not found", null, {
      hk: "4nVWm"
    }) : n.fbs._("Image not found", null, {
      hk: "3zJYi1"
    }), h[0] = S, h[1] = i) : i = h[1];
    let E = i;
    h[2] !== v ? (r = (0, M.cn)("rounded-22 group-focus-visible:outline-hatch-accent flex min-h-[120px] min-w-[120px] cursor-default flex-col items-center justify-center gap-1 overflow-hidden border-0 bg-[var(--hatch-agent-bubble-bg)] text-center shadow-none ring-0 outline-none select-none group-focus-visible:outline-2 group-focus-visible:outline-offset-2", v), h[2] = v, h[3] = r) : r = h[3];
    let I = S ? d.default : u.default;
    h[4] !== I ? (l = (0, t.jsx)(m.HatchIcon, {
      icon: I,
      size: 24,
      className: "text-icon-secondary",
      "aria-hidden": "true"
    }), h[4] = I, h[5] = l) : l = h[5], h[6] !== E ? (o = (0, t.jsx)("span", {
      className: "text-caption-2-emphasized text-text-secondary",
      children: E
    }), h[6] = E, h[7] = o) : o = h[7], h[8] !== y || h[9] !== r || h[10] !== l || h[11] !== o || h[12] !== C ? (s = (0, t.jsxs)("div", {
      ref: y,
      className: r,
      "data-testid": C,
      children: [l, o]
    }), h[8] = y, h[9] = r, h[10] = l, h[11] = o, h[12] = C, h[13] = s) : s = h[13];
    let T = s;
    return h[14] !== _ || h[15] !== k || h[16] !== f || h[17] !== b || h[18] !== x || h[19] !== T ? (c = k ? (0, t.jsx)(A, {
      kind: f,
      state: x,
      messageId: b,
      createdAt: _,
      children: T
    }) : T, h[14] = _, h[15] = k, h[16] = f, h[17] = b, h[18] = x, h[19] = T, h[20] = c) : c = h[20], c
  }

  function N(e) {
    let i, r = (0, a.c)(6),
      {
        kind: n,
        className: l,
        messageId: o,
        createdAt: s
      } = e,
      u = `chat-${n}-deleted-tombstone`;
    return r[0] !== l || r[1] !== s || r[2] !== n || r[3] !== o || r[4] !== u ? (i = (0, t.jsx)(D, {
      kind: n,
      state: "deleted",
      messageId: o,
      createdAt: s,
      className: l,
      testId: u
    }), r[0] = l, r[1] = s, r[2] = n, r[3] = o, r[4] = u, r[5] = i) : i = r[5], i
  }
  async function j({
    fs: e,
    source: t,
    maxBytes: a,
    signal: i
  }) {
    let r = async (t, r) => {
      let n = await e.rawFetch(t, {
        ...null != a ? {
          range: {
            start: 0,
            end: a
          }
        } : {},
        signal: i,
        ...r ? {
          urlEncodedPath: !0
        } : {}
      });
      if (!n.ok) throw Error("Failed to read chat media over Noise", {
        cause: (0, S.toError)(n.error)
      });
      return n.data
    };
    if ("noise" === t.kind) return r(t.path, t.urlEncodedPath);
    let n = t.url,
      l = (0, _.getVmMediaNoiseFetchPath)(n);
    if (void 0 !== l) {
      if (null == l) throw Error("Chat media source is not fetchable");
      return r(l, !0)
    }
    if (n.startsWith("data:")) return (0, v.readDataUrlBlobWithLimit)(n, a);
    let o = await fetch(n, {
      redirect: "error",
      signal: i
    });
    if (!o.ok) throw Error(`Failed to fetch chat media with HTTP ${o.status}`);
    return null == a ? o.blob() : (0, v.readImageResponseBlobWithLimit)(o, a)
  }

  function F({
    children: e,
    shareButtonLayout: a,
    mediaKind: u,
    sourceUrl: d,
    replyPreviewUrl: m,
    replySourceUrl: y,
    replyCacheVersion: S,
    mediaItem: A,
    filename: D,
    mimeType: N,
    messageId: L,
    createdAt: O,
    onReply: G,
    onDelete: U
  }) {
    let B = (0, p.useHatchGatewayFs)(),
      $ = (0, T.useOptionalHatchReactionTarget)(),
      W = (0, g.useHatchChatThreadLoggingMetadataFromContext)(),
      K = (0, r.useInteractionLoggerWithLazyData)(),
      z = (0, i.useRef)(!1),
      V = (0, i.useRef)(null),
      q = (0, i.useRef)(!1),
      Y = (0, i.useRef)(!1),
      [Z, X] = (0, i.useState)(null),
      [Q, J] = (0, i.useState)(!1),
      ee = (0, i.useRef)(null),
      et = `${A?.path??""}\u0000${d}`,
      ea = Z === et,
      ei = null;
    A?.path == null && (ei = void 0 !== y ? y : d || null);
    let er = function({
        mediaKind: e,
        explicitMimeType: t,
        filename: a,
        mediaItem: i,
        sourceUrl: r
      }) {
        if (null != t && t.length > 0) return t;
        if (r.startsWith("data:")) {
          let t = r.search(/[;,]/),
            a = r.slice(5, t < 0 ? void 0 : t);
          return a.startsWith(`${e}/`) ? a : void 0
        }
        for (let t of [i?.path, a, r]) {
          if (null == t) continue;
          let a = (0, E.inferMarkdownMediaMimeType)(t);
          if (a.startsWith(`${e}/`)) return a
        }
      }({
        mediaKind: u,
        explicitMimeType: N,
        filename: D,
        mediaItem: A,
        sourceUrl: d
      }),
      en = (0, i.useMemo)(() => {
        let e = A?.path?.trim();
        return null != e && e.length > 0 ? void 0 === (0, _.getVmMediaNoiseFetchPath)(e) ? (0, _.hatchMediaPlaybackSource)({
          path: e
        }) : (0, _.hatchMediaPlaybackSource)({
          previewUrl: e
        }) : (0, _.hatchMediaPlaybackSource)({
          previewUrl: d
        })
      }, [A?.path, d]),
      el = null != en && ("image" === u ? null == er || (0, v.isImageCopySupported)(er) : null != er && (0, v.isVideoCopySupported)(er)),
      eo = A?.path,
      es = n.fbs._("Video downloaded", null, {
        hk: "1wBeuC"
      }),
      eu = n.fbs._("Image copied", null, {
        hk: "2KdpNK"
      }),
      ec = n.fbs._("Video copied", null, {
        hk: "E91Ti"
      }),
      ed = n.fbs._("Image downloaded", null, {
        hk: "4kWZn0"
      }),
      eh = n.fbs._("Video downloaded", null, {
        hk: "9goeY"
      }),
      em = n.fbs._("Failed to copy image", null, {
        hk: "VfFkP"
      }),
      ef = n.fbs._("Failed to copy video", null, {
        hk: "279b94"
      }),
      eg = n.fbs._("Failed to download image", null, {
        hk: "1r9bsW"
      }),
      ep = n.fbs._("Failed to download video", null, {
        hk: "2r6W8S"
      });
    (0, i.useEffect)(() => () => {
      let e = V.current;
      e?.abort(), V.current === e && (V.current = null, z.current = !1)
    }, [et]);
    let eb = (0, i.useMemo)(() => ({
        surface: "chat",
        subsurface: "context_menu",
        entry_point: "right_click",
        ...W,
        ...null != L ? {
          message_id: L
        } : {},
        media_kind: u,
        file_extension: (0, x.fileExtensionForTelemetry)(D)
      }), [D, u, L, W]),
      e_ = (0, r.useTrackedClickRef)({
        eventName: f.HatchClickEvent.CHAT_MESSAGE_OVERFLOW_OPEN,
        actionTarget: "message_overflow_button",
        actionType: "click",
        metadata: eb
      }),
      ev = (0, r.useTrackedClickRef)({
        eventName: f.HatchClickEvent.CHAT_REPLY_MESSAGE,
        actionTarget: "media_context_menu_reply",
        actionType: "click",
        metadata: eb
      }),
      {
        ref: eC,
        onClick: ey
      } = (0, r.useTrackedClickRef)({
        eventName: f.HatchClickEvent.CHAT_COPY_RESPONSE,
        actionTarget: "media_context_menu_copy",
        actionType: "click",
        metadata: eb
      }),
      {
        ref: ex,
        onClick: eM
      } = (0, r.useTrackedClickRef)({
        eventName: f.HatchClickEvent.MEDIA_DOWNLOAD,
        actionTarget: "media_context_menu_download",
        actionType: "click",
        metadata: eb
      }),
      ek = (0, r.useTrackedClickRef)({
        eventName: f.HatchClickEvent.FILE_DELETE_CLICK,
        actionTarget: "media_context_menu_delete",
        actionType: "click",
        metadata: {
          ...eb,
          target_kind: "media"
        }
      }),
      eS = (0, i.useCallback)(e => {
        $?.onToggleReaction(e), J(!1)
      }, [$]),
      eE = (0, i.useCallback)(async e => {
        if (z.current || null == en) return;
        let t = (0, C.captureHatchToast)();
        z.current = !0;
        let a = new AbortController;
        V.current = a, X(et);
        let i = e;
        try {
          if ("copy" === e) {
            let e = null,
              r = () => e ??= j({
                fs: B,
                source: en,
                maxBytes: v.MAX_COPY_MEDIA_BYTES,
                signal: a.signal
              });
            if ("image" === u) await (0, v.copyImageBlobToClipboard)({
              mimeType: er,
              signal: a.signal,
              loadBlob: r
            });
            else try {
              await (0, v.copyVideoBlobToClipboard)({
                mimeType: er,
                signal: a.signal,
                loadBlob: r
              })
            } catch (n) {
              if (!(n instanceof v.UnsupportedMediaClipboardError)) throw n;
              P.retainForBugReport("info", "Chat media action unavailable"), i = "download";
              let r = await (e ?? j({
                fs: B,
                source: en,
                signal: a.signal
              }));
              if (a.signal.aborted) return;
              (0, b.triggerBlobDownload)(D, r), K({
                eventName: f.HatchClickEvent.MEDIA_DOWNLOAD,
                actionTarget: "media_context_menu_video_download_fallback",
                actionType: "click",
                metadata: eb
              }), t.success(es);
              return
            }
            if (a.signal.aborted) return;
            ey(), t.success("image" === u ? eu : ec)
          } else {
            let e = await j({
              fs: B,
              source: en,
              signal: a.signal
            });
            if (a.signal.aborted) return;
            (0, b.triggerBlobDownload)(D, e), t.success("image" === u ? ed : eh)
          }
        } catch (l) {
          var r;
          if (a.signal.aborted) return;
          let n = l instanceof v.UnsupportedMediaClipboardError ? "clipboard_unsupported" : l instanceof v.MediaCopyLimitError ? "media_limit" : l instanceof DOMException && "NotAllowedError" === l.name ? "clipboard_permission" : "unexpected";
          if (l instanceof v.UnsupportedMediaClipboardError || l instanceof v.MediaCopyLimitError) P.retainForBugReport("info", "Chat media action unavailable");
          else {
            let e = l instanceof Error && null != l.cause ? l.cause : l;
            P.error({
              error: (r = i, Error(`Chat media ${r} failed`)),
              errorName: (0, x.errorNameForTelemetry)(e),
              errorClass: (0, x.classifyErrorForTelemetry)(e),
              action: i,
              mediaKind: u,
              fileExtension: (0, x.fileExtensionForTelemetry)(D),
              tags: (0, k.hatchSentryTags)(k.HATCH_SENTRY_SURFACES.CHAT_MESSAGE, {
                action: i,
                failure_reason: n,
                media_kind: u
              })
            }, "Chat media action failed")
          }
          t.error("copy" === e ? "image" === u ? em : ef : "image" === u ? eg : ep)
        } finally {
          V.current === a && (V.current = null, z.current = !1, a.signal.aborted || X(null))
        }
      }, [D, B, em, eu, eg, ed, ey, K, en, u, er, et, eb, ef, ec, ep, eh, es]),
      eI = (0, R.useMergeRefs)(ee, e_.ref);
    return (0, t.jsxs)(h.ContextMenu, {
      open: Q,
      onOpenChange: e => {
        J(e), e && q.current && (Y.current = !0), e && e_.onClick()
      },
      children: [(0, t.jsx)(h.ContextMenuTrigger, {
        asChild: !0,
        suppressTouchSelection: !0,
        children: (0, t.jsx)("span", {
          ref: eI,
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
          children: null != a && A?.kind === "video" ? (0, t.jsxs)("span", {
            className: (0, M.cn)("relative max-w-full min-w-0", "fill" === a ? "grid" : "inline-grid align-top"),
            children: [e, (0, t.jsx)("span", {
              className: "absolute end-2 top-2 z-30",
              children: (0, t.jsx)(H.HatchMediaShareButton, {
                item: A,
                placement: "media_tile"
              })
            })]
          }) : e
        })
      }), (0, t.jsxs)(h.ContextMenuContent, {
        children: [null != O ? (0, t.jsx)(I.HatchMessageMenuTimestamp, {
          createdAt: O
        }) : null, (0, t.jsx)(I.HatchMessagePrimaryMenuItems, {
          messageId: L,
          onReactionSelect: null != $ ? eS : void 0,
          reactions: $?.reactions,
          subsurface: "context_menu",
          variant: "context"
        }), null != G ? (0, t.jsx)(h.ContextMenuItem, {
          ref: ev.ref,
          disabled: ea,
          leadingIcon: o.default,
          label: n.fbs._("Reply", null, {
            hk: "3iWsaW"
          }),
          onSelect: () => {
            ev.onClick(), G("image" === u ? {
              kind: "image",
              sourceUrl: ei,
              filePath: A?.path ?? null
            } : {
              kind: "video",
              sourceUrl: ei,
              filePath: A?.path ?? null,
              posterUrl: A?.path == null ? m ?? null : null,
              cacheVersion: S ?? null
            })
          }
        }) : null, null != A ? (0, t.jsx)(w.HatchMediaShareMenuItem, {
          item: A,
          variant: "context",
          disabled: ea,
          getReturnFocus: () => ee.current?.querySelector("button, a[href], [tabindex='0']") ?? null
        }) : null, el ? (0, t.jsx)(h.ContextMenuItem, {
          ref: eC,
          disabled: ea,
          leadingIcon: s.default,
          label: n.fbs._("Copy", null, {
            hk: "4G2RYO"
          }),
          onSelect: () => {
            eE("copy")
          }
        }) : null, null != en ? (0, t.jsx)(h.ContextMenuItem, {
          ref: ex,
          disabled: ea,
          leadingIcon: l.default,
          label: n.fbs._("Download", null, {
            hk: "2iWMwS"
          }),
          onSelect: () => {
            eM(), eE("download")
          }
        }) : null, null != eo && null != U ? (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(h.ContextMenuSeparator, {}), (0, t.jsx)(h.ContextMenuItem, {
            ref: ek.ref,
            disabled: ea,
            leadingIcon: c.default,
            label: n.fbs._("Delete", null, {
              hk: "3zCax0"
            }),
            variant: "destructive",
            onSelect: () => {
              ek.onClick(), U(eo)
            }
          })]
        }) : null]
      })]
    })
  }
  e.s(["HatchChatImageContextMenu", 0, function(e) {
    let i, r = (0, a.c)(2);
    return r[0] !== e ? (i = (0, t.jsx)(F, {
      ...e,
      mediaKind: "image"
    }), r[0] = e, r[1] = i) : i = r[1], i
  }, "HatchChatMediaContextMenu", 0, F, "HatchDeletedImageTombstone", 0, function(e) {
    let i, r = (0, a.c)(4),
      {
        className: n,
        messageId: l,
        createdAt: o
      } = e;
    return r[0] !== n || r[1] !== o || r[2] !== l ? (i = (0, t.jsx)(N, {
      kind: "image",
      className: n,
      messageId: l,
      createdAt: o
    }), r[0] = n, r[1] = o, r[2] = l, r[3] = i) : i = r[3], i
  }, "HatchDeletedMediaTombstone", 0, N, "HatchUnavailableMediaTile", 0, D])
}, 509596, 993902, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    i = e.i(848048),
    r = e.i(823173),
    n = e.i(374785),
    l = e.i(74894),
    o = e.i(258544);
  e.s(["HatchMarkdownImageNotFoundTile", 0, function(e) {
    let s, u, c, d, h = (0, a.c)(12),
      {
        variant: m,
        enableChatImageMenu: f,
        className: g,
        messageId: p,
        createdAt: b
      } = e,
      _ = void 0 !== f && f;
    h[0] !== m ? (s = {
      eventName: r.HatchImpressionEvent.MARKDOWN_IMAGE_NOT_FOUND_IMPRESSION,
      actionTarget: "markdown_image_not_found",
      metadata: {
        surface: "hatch_markdown",
        variant: m
      }
    }, h[0] = m, h[1] = s) : s = h[1], h[2] === Symbol.for("react.memo_cache_sentinel") ? (u = {
      threshold: "50%"
    }, h[2] = u) : u = h[2];
    let {
      ref: v
    } = (0, i.useTrackedImpressionRef)(s, u), C = "grid" === m ? "px-3 py-4" : "px-4 py-5";
    return h[3] !== g || h[4] !== C ? (c = (0, n.cn)(l.HATCH_IMAGE_GRID_RADIUS, "h-full w-full", C, g), h[3] = g, h[4] = C, h[5] = c) : c = h[5], h[6] !== b || h[7] !== _ || h[8] !== p || h[9] !== v || h[10] !== c ? (d = (0, t.jsx)(o.HatchUnavailableMediaTile, {
      kind: "image",
      enableContextMenu: _,
      messageId: p,
      createdAt: b,
      containerRef: v,
      className: c,
      testId: "chat-image-not-found"
    }), h[6] = b, h[7] = _, h[8] = p, h[9] = v, h[10] = c, h[11] = d) : d = h[11], d
  }], 509596);
  var s = e.i(519172),
    u = e.i(539522),
    c = e.i(91521),
    d = e.i(921192),
    h = e.i(791661),
    m = e.i(926250),
    f = e.i(185576),
    g = e.i(546211);
  e.s(["useHatchMarkdownImageState", 0, function(e, t) {
    let i, r, n, l, o, p, b, _, v, C, y, x = (0, a.c)(55),
      M = void 0 !== t && t,
      {
        data: k
      } = (0, h.useHatchSpacesQuery)();
    x[0] !== k ? (i = void 0 === k ? [] : k, x[0] = k, x[1] = i) : i = x[1];
    let S = i;
    x[2] !== S ? (r = (0, f.buildSpaceIconSrcBySlug)(S), x[2] = S, x[3] = r) : r = x[3];
    let E = r;
    x[4] === Symbol.for("react.memo_cache_sentinel") ? (n = {
      resolvedSrc: null,
      loadState: "loading"
    }, x[4] = n) : n = x[4];
    let [I, T] = (0, s.useState)(n);
    x[5] !== E || x[6] !== e ? (l = (0, f.resolveCanonicalSpaceIconSrcBySlug)(e ?? null, E), o = (0, u.resolveLocalImagePath)(l), x[5] = E, x[6] = e, x[7] = l, x[8] = o) : (l = x[7], o = x[8]);
    let w = o,
      H = (0, g.useHatchMessageMediaResource)(e ?? null, "image"),
      R = (0, g.useHatchMessageMediaResource)(l, "image"),
      P = H ?? R;
    x[9] !== w || x[10] !== P || x[11] !== l || x[12] !== M ? (p = {
      sourceUrl: l,
      sourcePathUrlEncoded: M,
      filePath: w,
      filePathUrlEncoded: M,
      media: P,
      usage: "thumbnail"
    }, x[9] = w, x[10] = P, x[11] = l, x[12] = M, x[13] = p) : p = x[13];
    let A = (0, m.useResolvedHatchImageMedia)(p);
    x[14] !== A.src || x[15] !== P || x[16] !== l || x[17] !== M || x[18] !== e ? (b = null != e ? (0, c.markdownImageToMediaItem)(l ?? e, P, A.src, {
      sourcePathUrlEncoded: M
    }) : null, x[14] = A.src, x[15] = P, x[16] = l, x[17] = M, x[18] = e, x[19] = b) : b = x[19];
    let D = b;
    if (x[20] !== D) {
      let e = (0, c.getHatchMediaItemRenderSrc)(D, "thumbnail");
      _ = null != e ? (0, d.proxyExternalImageUrl)(e) : null, x[20] = D, x[21] = _
    } else _ = x[21];
    let N = _;
    x[22] !== N ? (v = () => {
      null != N && T(e => e.resolvedSrc === N && "loading" !== e.loadState ? e : {
        resolvedSrc: N,
        loadState: "ready"
      })
    }, x[22] = N, x[23] = v) : v = x[23];
    let j = v;
    x[24] !== N ? (C = e => {
      T({
        resolvedSrc: N,
        loadState: "failed"
      })
    }, x[24] = N, x[25] = C) : C = x[25];
    let F = C;
    if (!e) {
      let e;
      return x[26] !== F || x[27] !== j ? (e = {
        loadState: "failed",
        resolvedSrc: null,
        mediaItem: null,
        handleLoad: j,
        handleError: F
      }, x[26] = F, x[27] = j, x[28] = e) : e = x[28], e
    }
    if ("failed" === A.resolutionStatus) {
      let e;
      return x[29] !== F || x[30] !== j || x[31] !== D || x[32] !== N ? (e = {
        loadState: "failed",
        resolvedSrc: N,
        mediaItem: D,
        handleLoad: j,
        handleError: F
      }, x[29] = F, x[30] = j, x[31] = D, x[32] = N, x[33] = e) : e = x[33], e
    }
    if (null == N) {
      let e;
      if ("loading" === A.resolutionStatus) {
        let e;
        return x[34] !== F || x[35] !== j || x[36] !== D || x[37] !== N ? (e = {
          loadState: "loading",
          resolvedSrc: N,
          mediaItem: D,
          handleLoad: j,
          handleError: F
        }, x[34] = F, x[35] = j, x[36] = D, x[37] = N, x[38] = e) : e = x[38], e
      }
      return x[39] !== F || x[40] !== j || x[41] !== D || x[42] !== N ? (e = {
        loadState: "failed",
        resolvedSrc: N,
        mediaItem: D,
        handleLoad: j,
        handleError: F
      }, x[39] = F, x[40] = j, x[41] = D, x[42] = N, x[43] = e) : e = x[43], e
    }
    let L = I.resolvedSrc === N ? I.loadState : "loading";
    if ("failed" === L) {
      let e;
      return x[44] !== F || x[45] !== j || x[46] !== D || x[47] !== N ? (e = {
        loadState: "failed",
        resolvedSrc: N,
        mediaItem: D,
        handleLoad: j,
        handleError: F
      }, x[44] = F, x[45] = j, x[46] = D, x[47] = N, x[48] = e) : e = x[48], e
    }
    let O = "ready" === L ? "ready" : "loading";
    return x[49] !== F || x[50] !== j || x[51] !== D || x[52] !== N || x[53] !== O ? (y = {
      loadState: O,
      resolvedSrc: N,
      mediaItem: D,
      handleLoad: j,
      handleError: F
    }, x[49] = F, x[50] = j, x[51] = D, x[52] = N, x[53] = O, x[54] = y) : y = x[54], y
  }], 993902)
}, 546211, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    i = e.i(519172),
    r = e.i(55473);
  let n = {
      image: new Map,
      video: new Map
    },
    l = (0, i.createContext)(n);
  e.s(["HatchMessageMediaProvider", 0, function(e) {
    let i, n, o = (0, a.c)(6),
      {
        images: s,
        files: u,
        children: c
      } = e;
    if (o[0] !== u || o[1] !== s) {
      for (let e of (i = {
          image: new Map,
          video: new Map
        }, [...s ?? [], ...u ?? []])) ! function(e, t) {
        let a = t.media;
        if (null == a) return;
        let i = e[a.kind];
        for (let e of [t.path, a.path])
          for (let t of (0, r.getHatchMediaPathAliases)(e)) i.set(t, a)
      }(i, e);
      o[0] = u, o[1] = s, o[2] = i
    } else i = o[2];
    let d = i;
    return o[3] !== c || o[4] !== d ? (n = (0, t.jsx)(l.Provider, {
      value: d,
      children: c
    }), o[3] = c, o[4] = d, o[5] = n) : n = o[5], n
  }, "useHatchMessageMediaResource", 0, function(e, t) {
    let n, o = (0, a.c)(4),
      s = (0, i.useContext)(l);
    if (o[0] !== t || o[1] !== s || o[2] !== e) {
      for (let a of (n = Symbol.for("react.early_return_sentinel"), (0, r.getHatchMediaPathAliases)(e))) {
        let e = s[t].get(a);
        if (null != e) {
          n = e;
          break
        }
      }
      o[0] = t, o[1] = s, o[2] = e, o[3] = n
    } else n = o[3];
    return n !== Symbol.for("react.early_return_sentinel") ? n : null
  }])
}, 811131, e => {
  "use strict";
  let t = {
    audio: "__hatchForceAudioError",
    approval: "__hatchForceApprovalError",
    htmlpreview: "__hatchForceHtmlPreviewError",
    imagegrid: "__hatchForceImageGridError"
  };
  e.s(["maybeThrowChatSubtreeDebugError", 0, function(e) {
    let a = t[e];
    if (window[a]) throw Error(`Forced render error for chat subtree: ${e} (staging debug)`)
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

  function i(e) {
    let i = e.split("/").pop();
    if (!i) return "application/octet-stream";
    let r = i.split(".").pop()?.toLowerCase();
    return r ? t[r] ?? a[r] ?? "application/octet-stream" : "application/octet-stream"
  }
  e.s(["inferMarkdownImageMimeType", 0, function(e) {
    let t = i(e);
    return t.startsWith("image/") ? t : "image/png"
  }, "inferMarkdownMediaMimeType", 0, i])
}, 68032, e => {
  "use strict";
  var t = e.i(722469);
  e.s(["resolveHatchDeleteTarget", 0, function(e, a) {
    let i = (0, t.normalizePath)(e);
    if (function(e) {
        let a = (0, t.normalizePath)(e).split("/").filter(e => e.length > 0);
        if (4 !== a.length || "workspace" !== a[0] || "artifacts" !== a[1] && "your_files" !== a[1]) return !1;
        let i = a[2] ?? "",
          r = a[3] ?? "";
        return "index.html" === r || r === `${i}.html`
      }(i)) {
      let e = i.split("/").filter(e => e.length > 0),
        r = e[2] ?? "";
      return {
        requestedPath: i,
        resolvedPath: `/workspace/${e[1]}/${r}`,
        kind: "artifact",
        displayName: (0, t.getNameFromPath)(i),
        origin: a
      }
    }
    return {
      requestedPath: i,
      resolvedPath: i,
      kind: "file",
      displayName: (0, t.getNameFromPath)(i),
      origin: a
    }
  }])
}, 279419, e => {
  "use strict";
  var t = e.i(47247),
    a = e.i(658895),
    i = e.i(335004),
    r = e.i(863919);
  let n = new a.LRUCache(128);

  function l(e, t) {
    let a = Date.now();
    return !(a - (n.get(e) ?? 0) < t) && (n.set(e, a), !0)
  }

  function o(e, t, a) {
    "info" === t ? e.info(a) : e.error(a)
  }
  e.s(["handleHatchGatewayError", 0, function(e, a) {
    let {
      surface: n,
      errorMessage: s,
      context: u,
      toast: c,
      toastApi: d = t.toast
    } = a, h = c?.mode ?? "none", m = c?.variant ?? "error", f = c?.throttleMs ?? 5e3, g = c?.message, p = (0, i.toHatchGatewayError)(e);
    if ((0, r.logHatchGatewayError)(e, {
        surface: n,
        errorMessage: s,
        context: u
      }), null != p) {
      if (null == g || "none" === h) return;
      let e = c?.dedupeKey ?? `${n}:${m}:${p.kind}:${p.reason??"none"}:${String(g)}`;
      ("always" === h || l(e, f)) && o(d, m, g);
      return
    }
    if (null == g || "none" === h) return;
    let b = c?.dedupeKey ?? `${n}:${m}:unexpected:${String(g)}`;
    ("always" === h || l(b, f)) && o(d, m, g)
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
    i = e.i(345717),
    r = e.i(848048),
    n = e.i(832815),
    l = e.i(509789),
    o = e.i(18516),
    s = e.i(281539),
    u = e.i(634791);
  n.default._isSVG = !0, e.s(["HatchMediaShareMenuItem", 0, function(e) {
    let c, d, h, m, f = (0, a.c)(13),
      {
        item: g,
        library: p,
        variant: b,
        disabled: _,
        getReturnFocus: v
      } = e,
      C = void 0 !== p && p,
      y = void 0 !== _ && _,
      x = (0, u.useHatchMediaShareAction)(g, C),
      M = C ? "library" : "chat",
      k = "context" === b ? "context_menu" : "overflow_menu";
    f[0] !== M || f[1] !== k ? (c = {
      eventName: s.HatchClickEvent.MEDIA_SHARE_OPEN,
      actionTarget: "media_share",
      actionType: "click",
      metadata: {
        source: "media",
        surface: M,
        subsurface: k
      }
    }, f[0] = M, f[1] = k, f[2] = c) : c = f[2];
    let {
      ref: S,
      onClick: E
    } = (0, r.useTrackedClickRef)(c);
    if (null == x) return null;
    let I = "context" === b ? l.ContextMenuItem : o.DropdownMenuItem;
    return f[3] === Symbol.for("react.memo_cache_sentinel") ? (d = i.fbs._("Share", null, {
      hk: "1N4Qhs"
    }), f[3] = d) : d = f[3], f[4] !== v || f[5] !== E || f[6] !== x ? (h = () => {
      E(), x(v?.() ?? void 0)
    }, f[4] = v, f[5] = E, f[6] = x, f[7] = h) : h = f[7], f[8] !== I || f[9] !== y || f[10] !== S || f[11] !== h ? (m = (0, t.jsx)(I, {
      ref: S,
      leadingIcon: n.default,
      label: d,
      disabled: y,
      onSelect: h
    }), f[8] = I, f[9] = y, f[10] = S, f[11] = h, f[12] = m) : m = f[12], m
  }])
}, 156056, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    i = e.i(345717),
    r = e.i(295967),
    n = e.i(374785);
  e.s(["HatchHtmlPreviewSkeleton", 0, function(e) {
    let l, o, s, u, c, d, h, m = (0, a.c)(14);
    m[0] !== e ? (l = void 0 === e ? {} : e, m[0] = e, m[1] = l) : l = m[1];
    let {
      announce: f,
      className: g,
      standalone: p
    } = l;
    m[2] !== g ? (o = (0, n.cn)("h-full w-full", g), m[2] = g, m[3] = o) : o = m[3];
    let b = void 0 === f || f ? void 0 : "off";
    m[4] === Symbol.for("react.memo_cache_sentinel") ? (s = i.fbs._("Loading preview", null, {
      hk: "43wfJW"
    }), m[4] = s) : s = m[4];
    let _ = void 0 !== p && p && "min-h-[240px]";
    return m[5] !== _ ? (u = (0, n.cn)("h-full w-full", _), m[5] = _, m[6] = u) : u = m[6], m[7] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, t.jsx)("div", {
      "aria-hidden": !0,
      className: "bg-fill-secondary rounded-6 h-full w-full motion-safe:animate-pulse"
    }), m[7] = c) : c = m[7], m[8] !== b || m[9] !== u ? (d = (0, t.jsx)("div", {
      role: "status",
      "aria-busy": "true",
      "aria-live": b,
      "aria-label": s,
      className: u,
      children: c
    }), m[8] = b, m[9] = u, m[10] = d) : d = m[10], m[11] !== d || m[12] !== o ? (h = (0, t.jsx)(r.LoadingState, {
      name: "chat_html_preview",
      className: o,
      children: d
    }), m[11] = d, m[12] = o, m[13] = h) : h = m[13], h
  }])
}, 185576, 341771, e => {
  "use strict";
  var t = e.i(308206);
  e.i(530611);
  var a = e.i(246586);
  e.s(["buildSpaceIconSrcBySlug", 0, function(e) {
    let t = new Map;
    for (let i of e) {
      let e = (0, a.resolveSpaceIconSrc)(i.image_url);
      null != e && 0 !== i.slug.length && t.set(i.slug, e)
    }
    return t
  }, "resolveCanonicalSpaceIconSrcBySlug", 0, function(e, a) {
    if (null == e) return null;
    let i = function(e) {
      if (null == e) return null;
      let a = (0, t.normalizeFsEventPath)(e);
      if (null == a) return null;
      let i = a.split("/");
      if (i.length < 4 || "workspace" !== i[0]) return null;
      let r = i[1];
      if ("spaces" !== r && "space_data" !== r) return null;
      let n = i[2],
        l = i[3]?.toLowerCase() ?? "";
      return null != n && 0 !== n.length && ("icon" === l || l.startsWith("icon.")) ? n : null
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
    return null == i ? e : a.get(i) ?? e
  }], 185576);
  var i = e.i(722099),
    r = e.i(329898);
  e.s(["containedImageFrameStyle", 0, function(e, t, a, i = 1) {
    if (null == e) return {
      aspectRatio: String(i),
      width: t
    };
    let r = e.width / e.height;
    return {
      aspectRatio: String(r),
      width: Math.min(e.width, t, a * r)
    }
  }, "useHatchImageDimensions", 0, function(e) {
    let t, a, n = (0, i.c)(6),
      {
        dimensions: l,
        rememberDimensions: o
      } = (0, r.useHatchImageDimensionProbe)(e);
    n[0] !== o || n[1] !== e ? (t = t => {
      null != e && o({
        width: t.naturalWidth,
        height: t.naturalHeight
      })
    }, n[0] = o, n[1] = e, n[2] = t) : t = n[2];
    let s = t;
    return n[3] !== l || n[4] !== s ? (a = {
      dimensions: l,
      rememberDimensions: s
    }, n[3] = l, n[4] = s, n[5] = a) : a = n[5], a
  }], 341771)
}, 437081, e => {
  "use strict";
  var t = e.i(519172),
    a = e.i(345717),
    i = e.i(393202),
    r = e.i(848048),
    n = e.i(281539),
    l = e.i(823173),
    o = e.i(47247),
    s = e.i(359783),
    u = e.i(796413),
    c = e.i(52038),
    d = e.i(175286),
    h = e.i(279419),
    m = e.i(288119),
    f = e.i(907579),
    g = e.i(68032),
    p = e.i(767408);
  let b = (0, s.createClientLogger)("HatchDeleteConfirmation");
  e.s(["useHatchDeleteConfirmation", 0, function({
    origin: s,
    onDeleted: _
  }) {
    let v = (0, f.useHatchGatewayFs)(),
      C = (0, i.useQueryClient)(),
      {
        gatewayUrl: y,
        vmName: x
      } = (0, c.useHatchServerData)(),
      {
        gatewayScopeKey: M
      } = (0, d.useHatchRpc)(),
      k = (0, u.useConfirmationDialog)(),
      S = (0, t.useRef)(0),
      E = (0, t.useRef)(null),
      [I, T] = (0, t.useState)(null),
      [w, H] = (0, t.useState)(!1),
      R = I?.target ?? null,
      P = a.fbs._("Failed to delete artifact", null, {
        hk: "2y6YN9"
      }),
      A = a.fbs._("Failed to delete file", null, {
        hk: "GD1Kh"
      }),
      D = a.fbs._("Artifact deleted", null, {
        hk: "1vYlZD"
      }),
      N = a.fbs._("File deleted", null, {
        hk: "dvnA6"
      }),
      j = a.fbs._("If you've shared it, its link will become inactive and visitors won't be able to access it. Deleting it removes the entire artifact folder and its associated media from your library, and cannot be undone.", null, {
        hk: "36gE5k"
      }),
      F = a.fbs._("If you've shared it, its link will become inactive and visitors won't be able to access it. Deleting it removes it from your library, and cannot be undone.", null, {
        hk: "3AS5rT"
      }),
      L = a.fbs._("Delete", null, {
        hk: "24DgvP"
      }),
      O = a.fbs._("Cancel", null, {
        hk: "3m5CmX"
      }),
      G = null == R ? null : a.fbs._("Delete {itemName}?", [a.fbs._param("itemName", R.displayName)], {
        hk: "4qRZoE"
      }),
      U = R?.requestedPath,
      B = U ? (0, m.getFileExtension)(U) : "",
      $ = B && B !== U ? B : void 0,
      W = "media_lightbox" === s || "chat_image_context_menu" === s || "chat_media_context_menu" === s ? "media" : R?.kind ?? "file",
      {
        ref: K
      } = (0, r.useTrackedImpressionRef)({
        eventName: l.HatchImpressionEvent.FILE_DELETE_DIALOG_IMPRESSION,
        actionTarget: "delete_dialog",
        vmId: x ?? void 0,
        filePath: U ?? void 0,
        fileType: $ || void 0,
        metadata: {
          origin: s,
          target_kind: W
        }
      }, {
        threshold: "50%"
      }),
      {
        ref: z,
        onClick: V
      } = (0, r.useTrackedClickRef)({
        eventName: n.HatchClickEvent.FILE_DELETE_CONFIRM_CLICK,
        actionTarget: "delete_confirm_button",
        actionType: "click",
        vmId: x ?? void 0,
        filePath: U ?? void 0,
        fileType: $ || void 0,
        metadata: {
          origin: s,
          target_kind: W
        }
      }),
      {
        ref: q,
        onClick: Y
      } = (0, r.useTrackedClickRef)({
        eventName: n.HatchClickEvent.FILE_DELETE_CANCEL_CLICK,
        actionTarget: "delete_cancel_button",
        actionType: "click",
        vmId: x ?? void 0,
        filePath: U ?? void 0,
        fileType: $ || void 0,
        metadata: {
          origin: s,
          target_kind: W
        }
      }),
      Z = (0, t.useCallback)(() => {
        T(null)
      }, []),
      X = (0, t.useCallback)(async (t, a) => {
        if (!w) {
          H(!0), T(null);
          try {
            let {
              deleteHatchTarget: i
            } = await e.A(109798), r = await i({
              target: t,
              fs: v,
              queryClient: C,
              gatewayUrl: y,
              gatewayScopeKey: M
            });
            if (!r.ok) return void(0, h.handleHatchGatewayError)(r.error, {
              surface: "files.delete",
              errorMessage: "Failed to delete Hatch target",
              context: {
                requestedPath: (0, p.redactPathForTelemetry)(t.requestedPath),
                resolvedPath: (0, p.redactPathForTelemetry)(t.resolvedPath),
                origin: s
              },
              toast: {
                message: "artifact" === t.kind ? P : A,
                mode: "throttled"
              },
              toastApi: a
            });
            a.success("artifact" === t.kind ? D : N), _?.(t)
          } catch (i) {
            a.error("artifact" === t.kind ? P : A);
            let e = i instanceof Error ? i : Error("object" == typeof i && null != i && "message" in i ? i.message : String(i));
            b.error({
              error: e,
              requestedPath: t.requestedPath,
              resolvedPath: t.resolvedPath,
              origin: s
            }, "Delete failed")
          } finally {
            H(!1)
          }
        }
      }, [P, D, A, N, v, M, y, w, _, s, C]);
    return (0, t.useEffect)(() => {
      if (null == I || E.current === I.id) return;
      E.current = I.id;
      let e = I.target;
      k({
        title: G,
        description: "artifact" === e.kind ? j : F,
        onConfirm: () => {
          X(e, I.toast)
        },
        onCancel: Z,
        onPrimaryButtonClick: V,
        onSecondaryButtonClick: Y,
        buttonLayout: "vertical",
        contentRef: K,
        primaryButtonProps: {
          ref: z,
          label: L,
          size: "36",
          variant: "destructive",
          disabled: w
        },
        secondaryButtonProps: {
          ref: q,
          label: O,
          size: "36",
          variant: "flat",
          disabled: w
        }
      })
    }, [j, O, q, z, L, G, K, F, Z, X, w, Y, V, k, I]), {
      requestDelete: (0, t.useCallback)(e => {
        if (w) return;
        let t = (0, g.resolveHatchDeleteTarget)(e, s);
        S.current += 1, T({
          id: S.current,
          target: t,
          toast: (0, o.captureHatchToast)()
        })
      }, [w, s])
    }
  }])
}, 503037, e => {
  "use strict";
  var t = e.i(519172),
    a = e.i(51449),
    i = e.i(259864),
    r = e.i(578889),
    n = e.i(766271),
    l = class extends r.Subscribable {
      #e;
      #t = void 0;
      #a;
      #i;
      constructor(e, t) {
        super(), this.#e = e, this.setOptions(t), this.bindMethods(), this.#r()
      }
      bindMethods() {
        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
      }
      setOptions(e) {
        let t = this.options;
        this.options = this.#e.defaultMutationOptions(e), (0, n.shallowEqualObjects)(this.options, t) || this.#e.getMutationCache().notify({
          type: "observerOptionsUpdated",
          mutation: this.#a,
          observer: this
        }), t?.mutationKey && this.options.mutationKey && (0, n.hashKey)(t.mutationKey) !== (0, n.hashKey)(this.options.mutationKey) ? this.reset() : this.#a?.state.status === "pending" && this.#a.setOptions(this.options)
      }
      onUnsubscribe() {
        this.hasListeners() || this.#a?.removeObserver(this)
      }
      onMutationUpdate(e) {
        this.#r(), this.#n(e)
      }
      getCurrentResult() {
        return this.#t
      }
      reset() {
        this.#a?.removeObserver(this), this.#a = void 0, this.#r(), this.#n()
      }
      mutate(e, t) {
        return this.#i = t, this.#a?.removeObserver(this), this.#a = this.#e.getMutationCache().build(this.#e, this.options), this.#a.addObserver(this), this.#a.execute(e)
      }
      #r() {
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
      #n(e) {
        i.notifyManager.batch(() => {
          if (this.#i && this.hasListeners()) {
            let t = this.#t.variables,
              a = this.#t.context,
              i = {
                client: this.#e,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
              };
            if (e?.type === "success") {
              try {
                this.#i.onSuccess?.(e.data, t, a, i)
              } catch (e) {
                Promise.reject(e)
              }
              try {
                this.#i.onSettled?.(e.data, null, t, a, i)
              } catch (e) {
                Promise.reject(e)
              }
            } else if (e?.type === "error") {
              try {
                this.#i.onError?.(e.error, t, a, i)
              } catch (e) {
                Promise.reject(e)
              }
              try {
                this.#i.onSettled?.(void 0, e.error, t, a, i)
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
    o = e.i(393202);
  e.s(["useMutation", 0, function(e, a) {
    let r = (0, o.useQueryClient)(a),
      [s] = t.useState(() => new l(r, e));
    t.useEffect(() => {
      s.setOptions(e)
    }, [s, e]);
    let u = t.useSyncExternalStore(t.useCallback(e => s.subscribe(i.notifyManager.batchCalls(e)), [s]), () => s.getCurrentResult(), () => s.getCurrentResult()),
      c = t.useCallback((e, t) => {
        s.mutate(e, t).catch(n.noop)
      }, [s]);
    if (u.error && (0, n.shouldThrowError)(s.options.throwOnError, [u.error])) throw u.error;
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

  function i(e) {
    let i, r, n, l, o, s, u = (0, a.c)(11);
    return u[0] !== e.title ? (i = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), u[0] = e.title, u[1] = i) : i = u[1], u[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), u[2] = e.children, u[3] = r) : r = u[3], u[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)("path", {
      d: "M4 10C5.1 10 6 10.9 6 12C6 13.1 5.1 14 4 14C2.9 14 2 13.1 2 12C2 10.9 2.9 10 4 10Z"
    }), l = (0, t.jsx)("path", {
      d: "M12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10Z"
    }), o = (0, t.jsx)("path", {
      d: "M20 10C21.1 10 22 10.9 22 12C22 13.1 21.1 14 20 14C18.9 14 18 13.1 18 12C18 10.9 18.9 10 20 10Z"
    }), u[4] = n, u[5] = l, u[6] = o) : (n = u[4], l = u[5], o = u[6]), u[7] !== e || u[8] !== i || u[9] !== r ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [i, r, n, l, o]
    }), u[7] = e, u[8] = i, u[9] = r, u[10] = s) : s = u[10], s
  }
  i._isSVG = !0, e.s(["default", 0, i])
}]);

//# debugId=efc36b09-a371-2470-2e7c-e61d06deeb61
//# sourceMappingURL=1e4ns8spqwbxy.js.map