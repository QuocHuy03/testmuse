;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "38824882-fab0-c40a-b9d3-c0e511eb4f83")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 979974, 648701, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(229302),
    r = e.i(519172);
  let i = "(max-width: 1023px)";

  function n() {
    return window.matchMedia(i).matches
  }

  function s(e) {
    let t = window.matchMedia(i);
    return t.addEventListener("change", e), () => t.removeEventListener("change", e)
  }
  e.s(["useIsNarrowViewport", 0, function() {
    let e, i = (0, t.c)(2),
      {
        width: l
      } = (0, r.use)(a.EctoWindowDimensionsContext);
    i[0] !== l ? (e = () => null != l && l < 1024, i[0] = l, i[1] = e) : e = i[1];
    let c = e;
    return (0, r.useSyncExternalStore)(s, n, c)
  }], 979974);
  let l = "hatch:side-panel-chat-collapsed-change",
    c = "hatch:session-side-chat-open",
    o = "hatch:session-side-chat-intent-set",
    u = !0,
    h = null;

  function d() {
    return u
  }

  function f(e) {
    return window.addEventListener(l, e), () => {
      window.removeEventListener(l, e)
    }
  }

  function p() {
    return !0
  }
  e.s(["clearSessionSideChatOpen", 0, function() {
    h = null;
    try {
      window.sessionStorage.removeItem(o), window.sessionStorage.removeItem(c)
    } catch {}
  }, "readSessionSideChatOpen", 0, function() {
    let e = function() {
      try {
        if ("true" !== window.sessionStorage.getItem(o)) return null;
        let e = window.sessionStorage.getItem(c);
        if ("true" === e) return !0;
        if ("false" === e) return !1
      } catch {}
      return null
    }();
    return null != e && (h = e), h
  }, "readSidePanelChatCollapsed", 0, d, "useSidePanelChatCollapsed", 0, function() {
    return (0, r.useSyncExternalStore)(f, d, p)
  }, "writeSessionSideChatOpen", 0, function(e) {
    h = e;
    try {
      window.sessionStorage.setItem(o, "true"), window.sessionStorage.setItem(c, e ? "true" : "false")
    } catch {}
  }, "writeSidePanelChatCollapsed", 0, function(e) {
    u !== e && (u = e, window.dispatchEvent(new CustomEvent(l)))
  }], 648701)
}, 21900, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    r = e.i(519172),
    i = e.i(345717),
    n = e.i(832815),
    s = e.i(534955),
    l = e.i(18516),
    c = e.i(509789),
    o = e.i(542974),
    u = e.i(367341);

  function h(e) {
    let r, i, n = (0, a.c)(6),
      {
        children: s,
        showTrailingSeparator: o,
        variant: u
      } = e;
    return n[0] !== o || n[1] !== u ? (r = o && ("dropdown" === u ? (0, t.jsx)(l.DropdownMenuSeparator, {}) : (0, t.jsx)(c.ContextMenuSeparator, {})), n[0] = o, n[1] = u, n[2] = r) : r = n[2], n[3] !== s || n[4] !== r ? (i = (0, t.jsxs)(t.Fragment, {
      children: [s, r]
    }), n[3] = s, n[4] = r, n[5] = i) : i = n[5], i
  }

  function d({
    Item: e,
    onSelect: a,
    showUnavailableItem: n,
    showTrailingSeparator: l,
    spaceSlug: c,
    tracking: f,
    variant: p
  }) {
    let {
      isShared: S,
      isLoading: C,
      isStatusKnown: m,
      isStatusError: _
    } = (0, o.useSpaceShareStatus)(c);
    return ((0, r.useEffect)(() => {
      (0, u.reportUnresolvedArtifactSharingVmType)()
    }, []), m ? !S || C : _) ? n ? (0, t.jsx)(h, {
      showTrailingSeparator: l,
      variant: p,
      children: (0, t.jsx)(e, {
        disabled: !0,
        leadingIcon: s.default,
        label: i.fbs._("Sharing unavailable", null, {
          hk: "4rJ2i8"
        })
      })
    }) : null : m ? (0, t.jsx)(h, {
      showTrailingSeparator: l,
      variant: p,
      children: (0, t.jsx)(e, {
        ref: f.ref,
        leadingIcon: s.default,
        label: i.fbs._("Stop sharing", null, {
          hk: "24eKpT"
        }),
        onSelect: () => {
          f.onClick(), a("unshare")
        }
      })
    }) : (0, t.jsx)(h, {
      showTrailingSeparator: l,
      variant: p,
      children: (0, t.jsx)(e, {
        disabled: !0,
        leadingIcon: s.default,
        label: i.fbs._("Checking sharing status…", null, {
          hk: "1eggQR"
        })
      })
    })
  }
  e.s(["HatchArtifactSharingMenuItem", 0, function({
    canCreateShare: e,
    onSelect: a,
    shareTracking: r,
    showUnavailableItem: s = !1,
    showTrailingSeparator: o = !1,
    spaceSlug: u,
    unshareTracking: f,
    variant: p
  }) {
    let S = "dropdown" === p ? l.DropdownMenuItem : c.ContextMenuItem;
    return e ? (0, t.jsx)(h, {
      showTrailingSeparator: o,
      variant: p,
      children: (0, t.jsx)(S, {
        ref: r.ref,
        leadingIcon: n.default,
        label: i.fbs._("Share", null, {
          hk: "3bUXmi"
        }),
        onSelect: () => {
          r.onClick(), a("default")
        }
      })
    }) : (0, t.jsx)(d, {
      Item: S,
      onSelect: a,
      showUnavailableItem: s,
      showTrailingSeparator: o,
      spaceSlug: u,
      tracking: f,
      variant: p
    })
  }])
}, 567936, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(519172),
    r = e.i(345717),
    i = e.i(325814),
    n = e.i(44698),
    s = e.i(813280),
    l = e.i(397240),
    c = e.i(863641),
    o = e.i(374785),
    u = e.i(367341),
    h = e.i(870228),
    d = e.i(727099),
    f = e.i(722099),
    p = e.i(848048),
    S = e.i(420297),
    C = e.i(281539),
    m = e.i(558175);

  function _(e) {
    let a, i, n, s, l, c, o, u = (0, f.c)(15),
      {
        focusTitle: h,
        isMobile: d,
        onClose: _
      } = e;
    u[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
      eventName: C.HatchClickEvent.SPACE_SHARE_UNPUBLISHED_DONE_CLICK,
      actionTarget: "space_share_unpublished_done",
      actionType: "click",
      metadata: {
        surface: "hatch.dialog.share.space",
        subsurface: "unpublished"
      }
    }, u[0] = a) : a = u[0];
    let {
      ref: g,
      onClick: y
    } = (0, p.useTrackedClickRef)(a), b = !d;
    return u[1] === Symbol.for("react.memo_cache_sentinel") ? (i = r.fbt._("Artifact unpublished", null, {
      hk: "2ZMtGU"
    }), n = r.fbt._("Anyone who has the link will no longer be able to see it. You can publish again any time.", null, {
      hk: "208So4"
    }), u[1] = i, u[2] = n) : (i = u[1], n = u[2]), u[3] === Symbol.for("react.memo_cache_sentinel") ? (s = r.fbs._("Done", null, {
      hk: "2pbSDP"
    }), u[3] = s) : s = u[3], u[4] !== y || u[5] !== _ ? (l = () => {
      y(), _()
    }, u[4] = y, u[5] = _, u[6] = l) : l = u[6], u[7] !== g || u[8] !== l ? (c = (0, t.jsx)(S.Button, {
      ref: g,
      variant: "primary",
      radius: "rounded",
      fullWidth: !0,
      "data-testid": "hatch-space-share-dialog-unpublished-done",
      label: s,
      onClick: l
    }), u[7] = g, u[8] = l, u[9] = c) : c = u[9], u[10] !== h || u[11] !== _ || u[12] !== b || u[13] !== c ? (o = (0, t.jsx)(m.HatchSpaceShareDialogScreen, {
      focusTitle: h,
      screen: "unpublished",
      showCloseButton: b,
      onClose: _,
      title: i,
      description: n,
      actions: c
    }), u[10] = h, u[11] = _, u[12] = b, u[13] = c, u[14] = o) : o = u[14], o
  }
  var g = e.i(346577),
    y = e.i(47247),
    b = e.i(359783),
    v = e.i(938803);
  let x = (0, b.createClientLogger)("HatchSpaceShareDialogUnshareScreen");

  function w(e) {
    let i, n, s, l, o, u, h, d, _, b, w, E, k, A, R, T, j = (0, f.c)(43),
      {
        focusTitle: H,
        isMobile: N,
        onCancel: L,
        onClose: M,
        onDismissalLockChange: D,
        onUnpublished: I,
        spaceName: P,
        spaceSlug: O
      } = e,
      {
        unpublish: U,
        isUnpublishing: K
      } = (0, v.useSpaceUnshare)(O);
    j[0] === Symbol.for("react.memo_cache_sentinel") ? (i = r.fbs._("Something went wrong. Please try again.", null, {
      hk: "18ZDbu"
    }), j[0] = i) : i = j[0];
    let Q = i;
    j[1] === Symbol.for("react.memo_cache_sentinel") ? (n = {
      eventName: C.HatchClickEvent.SPACE_SHARE_UNSHARE_CONFIRM_CLICK,
      actionTarget: "space_share_unpublish_confirm",
      actionType: "click",
      metadata: {
        surface: "hatch.dialog.share.space",
        subsurface: "unpublish"
      }
    }, j[1] = n) : n = j[1];
    let {
      ref: F,
      onClick: V
    } = (0, p.useTrackedClickRef)(n);
    j[2] === Symbol.for("react.memo_cache_sentinel") ? (s = {
      eventName: C.HatchClickEvent.SPACE_SHARE_UNSHARE_CANCEL_CLICK,
      actionTarget: "space_share_unpublish_cancel",
      actionType: "click",
      metadata: {
        surface: "hatch.dialog.share.space",
        subsurface: "unpublish"
      }
    }, j[2] = s) : s = j[2];
    let {
      ref: B,
      onClick: W
    } = (0, p.useTrackedClickRef)(s);
    j[3] !== K || j[4] !== D ? (l = () => {
      D(K)
    }, o = [K, D], j[3] = K, j[4] = D, j[5] = l, j[6] = o) : (l = j[5], o = j[6]), (0, a.useEffect)(l, o), j[7] !== D ? (u = () => () => {
      D(!1)
    }, h = [D], j[7] = D, j[8] = u, j[9] = h) : (u = j[8], h = j[9]), (0, a.useEffect)(u, h), j[10] !== V || j[11] !== D || j[12] !== I || j[13] !== U ? (d = async () => {
      let e = (0, y.captureHatchToast)();
      V(), D(!0);
      try {
        await U(), D(!1), I()
      } catch (a) {
        let t = a instanceof Error ? a : Error(String(a));
        D(!1), x.error({
          error: t,
          tags: (0, c.hatchSentryTags)(c.HATCH_SENTRY_SURFACES.SHARE)
        }, "Failed to unpublish artifact"), e.error(Q)
      }
    }, j[10] = V, j[11] = D, j[12] = I, j[13] = U, j[14] = d) : d = j[14];
    let G = d,
      q = !N;
    return j[15] !== P ? (_ = r.fbt._("Unpublish {artifact name}?", [r.fbt._param("artifact name", P)], {
      hk: "2hKhfm"
    }), j[15] = P, j[16] = _) : _ = j[16], j[17] === Symbol.for("react.memo_cache_sentinel") ? (b = r.fbt._("If you unpublish, your link will become inactive and visitors won't be able to access it. You can publish it again any time.", null, {
      hk: "1deuxx"
    }), j[17] = b) : b = j[17], j[18] !== K ? (w = K ? (0, t.jsxs)("span", {
      className: "flex items-center gap-2",
      children: [(0, t.jsx)(g.HatchSpinner, {
        size: 16,
        color: "currentColor",
        isDecorative: !0,
        className: "text-text-on-accent"
      }), r.fbs._("Unpublishing…", null, {
        hk: "2z7Ysf"
      })]
    }) : r.fbs._("Unpublish", null, {
      hk: "2B5SRh"
    }), j[18] = K, j[19] = w) : w = j[19], j[20] !== G ? (E = () => void G(), j[20] = G, j[21] = E) : E = j[21], j[22] !== F || j[23] !== K || j[24] !== w || j[25] !== E ? (k = (0, t.jsx)(S.Button, {
      ref: F,
      variant: "destructive",
      radius: "rounded",
      fullWidth: !0,
      "aria-busy": K,
      "data-testid": "hatch-space-share-dialog-unshare-confirm",
      label: w,
      onClick: E,
      disabled: K
    }), j[22] = F, j[23] = K, j[24] = w, j[25] = E, j[26] = k) : k = j[26], j[27] !== B || j[28] !== N || j[29] !== K || j[30] !== W || j[31] !== L ? (A = N && (0, t.jsx)(S.Button, {
      ref: B,
      variant: "borderless",
      radius: "rounded",
      fullWidth: !0,
      "aria-busy": K,
      "aria-disabled": K,
      className: "aria-disabled:bg-fill-secondary aria-disabled:text-text-primary aria-disabled:cursor-not-allowed",
      "data-testid": "hatch-space-share-dialog-unshare-cancel",
      label: r.fbs._("Cancel", null, {
        hk: "1o4FLv"
      }),
      onClick: () => {
        K || (W(), L())
      }
    }), j[27] = B, j[28] = N, j[29] = K, j[30] = W, j[31] = L, j[32] = A) : A = j[32], j[33] !== k || j[34] !== A ? (R = (0, t.jsxs)("div", {
      className: "flex w-full flex-col gap-2",
      children: [k, A]
    }), j[33] = k, j[34] = A, j[35] = R) : R = j[35], j[36] !== H || j[37] !== K || j[38] !== M || j[39] !== _ || j[40] !== R || j[41] !== q ? (T = (0, t.jsx)(m.HatchSpaceShareDialogScreen, {
      focusTitle: H,
      isCloseDisabled: K,
      screen: "unpublish",
      showCloseButton: q,
      onClose: M,
      title: _,
      description: b,
      actions: R
    }), j[36] = H, j[37] = K, j[38] = M, j[39] = _, j[40] = R, j[41] = q, j[42] = T) : T = j[42], T
  }
  var E = e.i(720756);
  let k = (0, a.lazy)(() => e.A(181608).then(e => ({
    default: e.HatchSpaceShareDialogDefaultScreen
  })));
  e.s(["HatchSpaceShareDialog", 0, function({
    artifact: e,
    isOpen: f,
    onClose: p,
    onNavigateToChat: S,
    shareType: C,
    spaceName: m,
    spaceSlug: g,
    initialScreen: y = "default"
  }) {
    let b = (0, l.useIsMobileBreakpoint)(),
      {
        gatewayScopeKey: v
      } = (0, E.useGatewayQueryContext)(),
      x = (0, u.useCanShareArtifactsFromServingVm)(),
      A = "unshare" === y ? "unpublish" : "default",
      [R, T] = (0, a.useState)(A),
      [j, H] = (0, a.useState)("default"),
      [N, L] = (0, a.useState)(!1),
      [M, D] = (0, a.useState)(!1),
      I = (0, a.useRef)(f);
    I.current = f;
    let P = (0, a.useCallback)(() => {
        T(A), H("default"), L(!1), D(!1)
      }, [A]),
      O = (0, a.useCallback)(() => {
        I.current = !1, p(), P()
      }, [p, P]),
      U = (0, a.useCallback)(e => {
        L(!0), T(e)
      }, []),
      K = (0, a.useCallback)(e => {
        I.current && U(e)
      }, [U]),
      Q = (0, a.useCallback)(() => {
        K("published")
      }, [K]),
      F = (0, a.useCallback)(() => {
        K("default")
      }, [K]),
      V = (0, a.useCallback)(() => {
        K("unpublished")
      }, [K]),
      B = (0, a.useCallback)(() => {
        M || O()
      }, [O, M]),
      W = (0, a.useCallback)(e => {
        e || B()
      }, [B]);
    (0, a.useEffect)(() => {
      f || P()
    }, [f, P]), (0, a.useEffect)(() => {
      f && !x && "unpublish" !== R && O()
    }, [x, O, f, R]);
    let G = (0, a.useCallback)(() => {
      H("published" === R ? "published" : "default"), U("unpublish")
    }, [R, U]);
    if (!x && "unpublish" !== R) return null;
    let q = !x,
      $ = "unpublish" === R ? (0, t.jsx)(w, {
        focusTitle: N,
        isMobile: b,
        spaceName: m,
        spaceSlug: g,
        onClose: B,
        onDismissalLockChange: D,
        onUnpublished: q ? O : V,
        onCancel: q ? B : () => U(j)
      }) : "unpublished" === R ? (0, t.jsx)(_, {
        focusTitle: N,
        isMobile: b,
        onClose: B
      }) : (0, t.jsx)(k, {
        artifact: e,
        focusTitle: N,
        isMobile: b,
        presentation: R,
        spaceName: m,
        spaceSlug: g,
        shareType: C,
        onClose: O,
        onDismissalLockChange: D,
        onPublished: Q,
        onPublishedStateCleared: F,
        onUnpublishClick: G,
        onNavigateToChat: () => {
          O(), S()
        }
      }, `${v}:${g}:${f}`),
      Z = (0, t.jsx)(s.EctoErrorBoundary, {
        surface: c.HATCH_SENTRY_SURFACES.SHARE,
        resetKeys: [v, g, R, f],
        fallback: ({
          error: e,
          reset: a
        }) => (0, t.jsx)("div", {
          className: "p-5",
          children: (0, t.jsx)(h.HatchContentErrorFallback, {
            error: e,
            onRetry: a
          })
        }),
        children: (0, t.jsx)(a.Suspense, {
          fallback: (0, t.jsx)(d.HatchSpaceShareDialogSkeleton, {
            isMobile: b,
            onClose: O
          }),
          children: $
        })
      });
    return b ? (0, t.jsx)(n.Sheet, {
      open: f,
      onOpenChange: W,
      children: (0, t.jsxs)(n.SheetContent, {
        side: "bottom",
        showCloseButton: !1,
        className: "!rounded-t-40 !gap-0 !px-0 !py-0",
        children: [(0, t.jsx)(n.SheetTitle, {
          className: "sr-only",
          children: r.fbs._("Share artifact", null, {
            hk: "1ck69Z"
          })
        }), Z]
      })
    }) : (0, t.jsx)(i.Dialog, {
      open: f,
      onOpenChange: W,
      children: (0, t.jsxs)(i.DialogContent, {
        showCloseButton: !1,
        contentClassName: "!p-0",
        backgroundClassName: (0, o.cn)("bg-fill-primary", "default" === R || "published" === R ? "!rounded-22" : "!squircle-26"),
        className: (0, o.cn)("!gap-0 !px-0 !py-0", "default" === R || "published" === R ? "max-w-artifact-share-dialog !rounded-22" : "max-w-artifact-share-confirmation !squircle-26"),
        children: [(0, t.jsx)(i.DialogTitle, {
          className: "sr-only",
          children: r.fbs._("Share artifact", null, {
            hk: "1ck69Z"
          })
        }), Z]
      })
    })
  }], 567936)
}, 727099, 558175, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    r = e.i(345717),
    i = e.i(848048),
    n = e.i(832964),
    s = e.i(295967),
    l = e.i(281539),
    c = e.i(581386),
    o = e.i(665652),
    u = e.i(73538);
  e.s(["HatchSpaceShareDialogSkeleton", 0, function(e) {
    let h, d, f, p, S, C, m, _, g = (0, a.c)(15),
      {
        isMobile: y,
        onClose: b,
        preview: v
      } = e;
    g[0] === Symbol.for("react.memo_cache_sentinel") ? (h = {
      eventName: l.HatchClickEvent.SPACE_SHARE_DIALOG_CLOSE_CLICK,
      actionTarget: "space_share_dialog_close",
      actionType: "click",
      metadata: {
        surface: "hatch.dialog.share.space",
        subsurface: "loading"
      }
    }, g[0] = h) : h = g[0];
    let {
      ref: x,
      onClick: w
    } = (0, i.useTrackedClickRef)(h);
    g[1] === Symbol.for("react.memo_cache_sentinel") ? (d = r.fbs._("Loading sharing settings", null, {
      hk: "3blXeK"
    }), g[1] = d) : d = g[1], g[2] !== w || g[3] !== b ? (f = () => {
      w(), b()
    }, g[2] = w, g[3] = b, g[4] = f) : f = g[4];
    let E = !y;
    return g[5] !== v ? (p = v ?? (0, t.jsxs)("div", {
      className: u.ARTIFACT_SHARE_PREVIEW_CARD_CLASS,
      "aria-hidden": "true",
      children: [(0, t.jsx)("div", {
        className: "px-1 pt-1",
        children: (0, t.jsx)(n.Skeleton, {
          className: u.ARTIFACT_SHARE_PREVIEW_MEDIA_CLASS
        })
      }), (0, t.jsxs)("div", {
        className: u.ARTIFACT_SHARE_PREVIEW_FOOTER_CLASS,
        children: [(0, t.jsx)(n.Skeleton, {
          className: "size-10 shrink-0 rounded-full"
        }), (0, t.jsxs)("div", {
          className: "flex flex-1 flex-col gap-2",
          children: [(0, t.jsx)(n.Skeleton, {
            className: "h-5 w-full"
          }), (0, t.jsx)(n.Skeleton, {
            className: "h-3 w-1/4"
          })]
        })]
      })]
    }), g[5] = v, g[6] = p) : p = g[6], g[7] === Symbol.for("react.memo_cache_sentinel") ? (S = (0, t.jsx)(n.Skeleton, {
      className: "h-5 w-full",
      "aria-hidden": "true"
    }), C = (0, t.jsx)(n.Skeleton, {
      className: "w-artifact-share-publish h-11.5 rounded-full",
      "aria-hidden": "true"
    }), g[7] = S, g[8] = C) : (S = g[7], C = g[8]), g[9] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, t.jsx)("div", {
      className: "mt-6 px-5",
      children: (0, t.jsx)("div", {
        className: "max-w-artifact-share-disclosure mx-auto",
        children: (0, t.jsx)(o.HatchSpaceShareDisclosure, {})
      })
    }), g[9] = m) : m = g[9], g[10] !== x || g[11] !== f || g[12] !== E || g[13] !== p ? (_ = (0, t.jsx)(s.LoadingState, {
      name: "artifact_share_dialog",
      className: "motion-reduce:[&_*]:!animate-none",
      children: (0, t.jsx)("div", {
        role: "status",
        "aria-busy": "true",
        "aria-label": d,
        children: (0, t.jsx)(c.HatchShareDialogLayout, {
          closeRef: x,
          onClose: f,
          showCloseButton: E,
          preview: p,
          description: S,
          actions: C,
          children: m
        })
      })
    }), g[10] = x, g[11] = f, g[12] = E, g[13] = p, g[14] = _) : _ = g[14], _
  }], 727099);
  var h = e.i(519172),
    d = e.i(181959),
    f = e.i(440802),
    p = e.i(374785),
    S = e.i(823173);

  function C(e) {
    let n, s, o, u, C, m, _, g, y, b, v, x = (0, a.c)(54),
      {
        actions: w,
        children: E,
        description: k,
        focusTitle: A,
        isCloseDisabled: R,
        onClose: T,
        preview: j,
        screen: H,
        showCloseButton: N,
        title: L
      } = e,
      M = void 0 !== R && R,
      D = (0, h.useRef)(null),
      I = "publish" === H || "unpublish" === H || "unpublished" === H;
    x[0] !== H ? (n = {
      eventName: l.HatchClickEvent.SPACE_SHARE_DIALOG_CLOSE_CLICK,
      actionTarget: "space_share_dialog_close",
      actionType: "click",
      metadata: {
        surface: "hatch.dialog.share.space",
        subsurface: H
      }
    }, x[0] = H, x[1] = n) : n = x[1];
    let {
      ref: P,
      onClick: O
    } = (0, i.useTrackedClickRef)(n);
    x[2] !== H ? (s = {
      eventName: S.HatchImpressionEvent.SPACE_SHARE_DIALOG_IMPRESSION,
      actionTarget: "space_share_dialog",
      metadata: {
        surface: "hatch.dialog.share.space",
        subsurface: H
      }
    }, x[2] = H, x[3] = s) : s = x[3];
    let {
      ref: U
    } = (0, i.useTrackedImpressionRef)(s);
    if (x[4] !== A ? (o = () => {
        A && D.current?.focus()
      }, x[4] = A, x[5] = o) : o = x[5], x[6] !== A || x[7] !== H ? (u = [A, H], x[6] = A, x[7] = H, x[8] = u) : u = x[8], (0, h.useEffect)(o, u), null != j) {
      let e, a, r, i = `hatch-space-share-dialog-${H}-screen`;
      x[9] !== M || x[10] !== O || x[11] !== T ? (e = () => {
        M || (O(), T())
      }, x[9] = M, x[10] = O, x[11] = T, x[12] = e) : e = x[12];
      let n = "publish" === H ? "publish" : "published";
      return x[13] !== w || x[14] !== E || x[15] !== P || x[16] !== k || x[17] !== j || x[18] !== N || x[19] !== e || x[20] !== n ? (a = (0, t.jsx)(c.HatchShareDialogLayout, {
        actions: w,
        closeRef: P,
        description: k,
        onClose: e,
        preview: j,
        layout: n,
        showCloseButton: N,
        titleRef: D,
        children: E
      }), x[13] = w, x[14] = E, x[15] = P, x[16] = k, x[17] = j, x[18] = N, x[19] = e, x[20] = n, x[21] = a) : a = x[21], x[22] !== U || x[23] !== i || x[24] !== a ? (r = (0, t.jsx)("div", {
        ref: U,
        "data-testid": i,
        children: a
      }), x[22] = U, x[23] = i, x[24] = a, x[25] = r) : r = x[25], r
    }
    let K = `hatch-space-share-dialog-${H}-screen`,
      Q = I ? "gap-6 p-6" : "gap-4 p-5";
    x[26] !== Q ? (C = (0, p.cn)("relative flex flex-col", Q), x[26] = Q, x[27] = C) : C = x[27], x[28] !== P || x[29] !== M || x[30] !== O || x[31] !== T || x[32] !== N || x[33] !== I ? (m = N && (0, t.jsx)("div", {
      className: (0, p.cn)("absolute", I ? "end-4 top-4" : "end-3 top-3"),
      children: (0, t.jsx)(f.IconButton, {
        ref: P,
        icon: d.default,
        label: r.fbs._("Close", null, {
          hk: "255x4p"
        }),
        "aria-busy": M,
        "aria-disabled": M,
        className: "aria-disabled:cursor-not-allowed aria-disabled:shadow-none",
        variant: "elevated",
        size: "28",
        onClick: () => {
          M || (O(), T())
        }
      })
    }), x[28] = P, x[29] = M, x[30] = O, x[31] = T, x[32] = N, x[33] = I, x[34] = m) : m = x[34];
    let F = `hatch-space-share-dialog-${H}-header`,
      V = I ? "gap-4" : "gap-1";
    return x[35] !== V ? (_ = (0, p.cn)("flex min-w-0 flex-col pe-8", V), x[35] = V, x[36] = _) : _ = x[36], x[37] !== L ? (g = (0, t.jsx)("h2", {
      ref: D,
      tabIndex: -1,
      className: "text-body-emphasized text-text-primary text-start",
      children: L
    }), x[37] = L, x[38] = g) : g = x[38], x[39] !== k ? (y = (0, t.jsx)("div", {
      className: "text-subheadline text-text-primary text-start",
      children: k
    }), x[39] = k, x[40] = y) : y = x[40], x[41] !== F || x[42] !== _ || x[43] !== g || x[44] !== y ? (b = (0, t.jsxs)("div", {
      "data-testid": F,
      className: _,
      children: [g, y]
    }), x[41] = F, x[42] = _, x[43] = g, x[44] = y, x[45] = b) : b = x[45], x[46] !== w || x[47] !== E || x[48] !== U || x[49] !== b || x[50] !== K || x[51] !== C || x[52] !== m ? (v = (0, t.jsxs)("div", {
      ref: U,
      "data-testid": K,
      className: C,
      children: [m, b, E, w]
    }), x[46] = w, x[47] = E, x[48] = U, x[49] = b, x[50] = K, x[51] = C, x[52] = m, x[53] = v) : v = x[53], v
  }
  e.s(["HatchSpaceShareDialogScreen", 0, function(e) {
    let r, i, n, s = (0, a.c)(6);
    return s[0] !== e ? ({
      screen: i,
      ...r
    } = e, s[0] = e, s[1] = r, s[2] = i) : (r = s[1], i = s[2]), s[3] !== r || s[4] !== i ? (n = (0, t.jsx)(C, {
      screen: i,
      ...r
    }, i), s[3] = r, s[4] = i, s[5] = n) : n = s[5], n
  }], 558175)
}, 665652, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(345717),
    r = e.i(722099),
    i = e.i(565639),
    n = e.i(646361),
    s = e.i(255859);
  i.default._isSVG = !0, e.s(["HatchSpaceShareDisclosure", 0, function() {
    let e, l, c = (0, r.c)(2);
    return c[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(n.HatchIcon, {
      icon: i.default,
      size: 20,
      iconSize: 20,
      className: "text-text-destructive shrink-0",
      "aria-hidden": "true"
    }), c[0] = e) : e = c[0], c[1] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsxs)("div", {
      className: "text-subheadline-large text-text-primary bg-fill-secondary dark:bg-fill-secondary-elevated rounded-22 flex items-center gap-4 px-4 py-3",
      children: [e, (0, t.jsx)("span", {
        className: "min-w-0 flex-1",
        children: a.fbt._("This artifact may include images, videos, or other media you shared with {productName}.", [a.fbt._param("productName", s.PRODUCT_BRAND.shortName)], {
          hk: "32WzUR"
        })
      })]
    }), c[1] = l) : l = c[1], l
  }])
}, 367341, e => {
  "use strict";
  var t = e.i(519172),
    a = e.i(815502),
    r = e.i(863641);
  let i = !1;
  class n extends Error {
    code = "artifact_sharing_unavailable";
    constructor() {
      super("Artifact sharing requires a confirmed standard VM"), this.name = "ArtifactSharingUnavailableError"
    }
  }

  function s() {
    let {
      vmId: e,
      isCvm: t
    } = (0, a.getServingVmAttribution)();
    return null == e ? "unbound" : null == t ? "unresolved" : t ? "confidential" : "standard"
  }

  function l() {
    if (i) return;
    let {
      vmId: e,
      isCvm: t
    } = (0, a.getServingVmAttribution)();
    null != e && null == t && (i = !0, (0, r.captureHatchMessage)(r.HATCH_SENTRY_SURFACES.SHARE, "Artifact sharing blocked because serving VM type is unresolved", {
      level: "warning",
      extra: {
        vmId: e
      }
    }))
  }

  function c() {
    return "unbound"
  }
  e.s(["ArtifactSharingUnavailableError", 0, n, "assertArtifactSharingAvailable", 0, function() {
    let e;
    if ("unresolved" === (e = s()) && l(), "standard" !== e) throw new n
  }, "reportUnresolvedArtifactSharingVmType", 0, l, "useCanShareArtifactsFromServingVm", 0, function() {
    return "standard" === (0, t.useSyncExternalStore)(a.subscribeServingVmAttribution, s, c)
  }])
}, 73538, e => {
  "use strict";
  e.s(["ARTIFACT_SHARE_PREVIEW_CARD_CLASS", 0, "max-w-artifact-share-preview min-h-artifact-share-card rounded-22 bg-fill-secondary dark:bg-fill-secondary-elevated flex w-full flex-col justify-center overflow-hidden", "ARTIFACT_SHARE_PREVIEW_FOOTER_CLASS", 0, "flex items-center gap-2 py-3 ps-3 pe-4", "ARTIFACT_SHARE_PREVIEW_MEDIA_CLASS", 0, "aspect-artifact-share-preview rounded-18 w-full"])
}, 663396, e => {
  "use strict";
  e.s(["getSpaceShareDiscoveryQueryKey", 0, function(e, t) {
    return ["space-share-discovery", e, t]
  }, "getSpaceShareStatusQueryKey", 0, function(e, t) {
    return ["space-share-status", e, t]
  }])
}, 992, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(83541),
    r = e.i(490878),
    i = e.i(951702),
    n = e.i(782361);
  e.s(["useArtifactsConnection", 0, function(e, s, l, c) {
    let o, u, h, d = (0, t.c)(13),
      f = void 0 === l || l,
      p = void 0 === c ? f : c,
      {
        state: S,
        retry: C
      } = (0, r.useArtifactsConnectionState)(e, s, f),
      m = (0, n.useNavigationItemsById)(f && p);
    if (d[0] !== m || d[1] !== S.nodes) {
      var _;
      let e, t;
      _ = S.nodes, e = !1, t = _.map(t => {
        let a = (0, i.artifactRefToRecentsTouch)(t.artifactRef);
        if (null == a) return t;
        let r = m.get((0, n.navigationItemId)(a.source, a.item_key))?.icon?.trim();
        return null == r || 0 === r.length || t.preview?.iconUrl === r ? t : (e = !0, {
          ...t,
          preview: {
            iconUrl: r,
            thumbnailUrl: t.preview?.thumbnailUrl ?? null,
            widthPx: t.preview?.widthPx ?? null,
            heightPx: t.preview?.heightPx ?? null
          }
        })
      }), o = e ? t : _, u = (0, a.partitionArtifacts)(o), d[0] = m, d[1] = S.nodes, d[2] = o, d[3] = u
    } else o = d[2], u = d[3];
    let {
      pinned: g,
      recent: y,
      all: b
    } = u, v = "ready" === S.snapshotState && 0 === o.length;
    return d[4] !== b || d[5] !== o || d[6] !== g || d[7] !== y || d[8] !== C || d[9] !== S.snapshotState || d[10] !== S.totalCount || d[11] !== v ? (h = {
      snapshotState: S.snapshotState,
      nodes: o,
      pinned: g,
      recent: y,
      all: b,
      totalCount: S.totalCount,
      isEmpty: v,
      retry: C
    }, d[4] = b, d[5] = o, d[6] = g, d[7] = y, d[8] = C, d[9] = S.snapshotState, d[10] = S.totalCount, d[11] = v, d[12] = h) : h = d[12], h
  }])
}, 938803, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(519172),
    r = e.i(780021),
    i = e.i(503037),
    n = e.i(393202),
    s = e.i(85461),
    l = e.i(367341),
    c = e.i(207274),
    o = e.i(736578),
    u = e.i(720756);
  e.i(522730);
  var h = e.i(812240),
    d = e.i(663396);
  let f = ((0, s.resolveHttpRoute)("spaces.share")?.requestTimeoutMs ?? o.REQUEST_TIMEOUT_MS) + 15e3;
  e.s(["isPrivacyBlockError", 0, function(e) {
    return "object" == typeof e && null != e && "code" in e && "share_blocked_by_privacy" === e.code
  }, "useSpaceShare", 0, function(e, t) {
    let {
      gatewayUrl: s,
      gatewayScopeKey: o,
      sendRequest: p,
      isReady: S,
      waitForTransport: C
    } = (0, u.useGatewayQueryContext)(), m = `${o??s}:${e}`, _ = (0, a.useRef)(m);
    _.current = m, (0, a.useEffect)(() => (_.current = m, () => {
      _.current = null
    }), [m]);
    let g = (0, n.useQueryClient)(),
      y = (0, d.getSpaceShareStatusQueryKey)(s, e),
      b = (0, d.getSpaceShareDiscoveryQueryKey)(s, e),
      v = ["space-share", s, e],
      x = (0, r.useIsMutating)({
        mutationKey: v,
        exact: !0
      }),
      {
        mutateAsync: w,
        isPending: E
      } = (0, i.useMutation)({
        mutationKey: v,
        onMutate: async () => {
          g.setQueryData(b, null), await g.cancelQueries({
            queryKey: y
          })
        },
        mutationFn: async () => {
          if ((0, l.assertArtifactSharingAvailable)(), null == s) throw Error("Gateway URL is not available");
          try {
            if (S || await C(), (0, l.assertArtifactSharingAvailable)(), _.current !== m) throw (0, c.createGatewayAbortError)("Artifact sharing target changed before dispatch");
            let a = Date.now();
            g.setQueryData(b, {
              startedAtMs: a,
              pollingSinceMs: a,
              expiresAtMs: a + f,
              phase: "polling"
            });
            let r = await p("spaces.share", {
              slug: e,
              share_type: t
            });
            return function(e) {
              if (null == e || "object" != typeof e || !0 !== e.ok) throw Error("Invalid artifact share response");
              if (null != e.disclosure_confirmation) throw Error("Artifact share requires an additional confirmation")
            }(r), r
          } catch (r) {
            var a;
            let e, t = -1 === (e = (a = r instanceof Error ? r.message : String(r)).indexOf("\n\nIssues found:")) ? null : {
              code: "share_blocked_by_privacy",
              summary: a.slice(0, e),
              details: a.slice(e + 2)
            };
            if (t) throw t;
            throw r
          }
        },
        onSuccess: e => {
          let a = "string" == typeof e.url && e.url.trim().length > 0 ? e.url : null;
          if (null != a) g.setQueryData(y, {
            ok: e.ok,
            url: a,
            share_type: e.share_type ?? t
          }), g.setQueryData(b, null);
          else {
            let e = g.getQueryData(y);
            if (e?.url != null && null != e.share_type) g.setQueryData(b, null);
            else {
              let e = Date.now(),
                t = g.getQueryData(b);
              g.setQueryData(b, {
                startedAtMs: t?.startedAtMs ?? e,
                pollingSinceMs: e,
                expiresAtMs: e + 15e3,
                phase: "polling"
              }), g.invalidateQueries({
                queryKey: y
              })
            }
          }
          g.invalidateQueries({
            queryKey: h.spacesQueryKeys.all
          })
        },
        onError: () => {
          g.setQueryData(b, null), g.invalidateQueries({
            queryKey: y
          })
        }
      });
    return {
      publish: (0, a.useCallback)(() => {
        try {
          (0, l.assertArtifactSharingAvailable)()
        } catch (e) {
          return Promise.reject(e)
        }
        return w()
      }, [w]),
      isPublishing: E || x > 0
    }
  }, "useSpaceShareFix", 0, function(e) {
    let a, r, n = (0, t.c)(9),
      {
        gatewayUrl: s,
        sendRequest: l,
        isReady: c,
        waitForTransport: o
      } = (0, u.useGatewayQueryContext)();
    n[0] !== s || n[1] !== c || n[2] !== l || n[3] !== e || n[4] !== o ? (a = {
      mutationFn: async t => {
        if (null == s) throw Error("Gateway URL is not available");
        return c || await o(), await l("spaces.share.fix", {
          slug: e,
          message: t
        })
      }
    }, n[0] = s, n[1] = c, n[2] = l, n[3] = e, n[4] = o, n[5] = a) : a = n[5];
    let {
      mutateAsync: h,
      isPending: d
    } = (0, i.useMutation)(a);
    return n[6] !== h || n[7] !== d ? (r = {
      fix: h,
      isFixing: d
    }, n[6] = h, n[7] = d, n[8] = r) : r = n[8], r
  }, "useSpaceUnshare", 0, function(e) {
    let a, r, s, l, c, o, f, p = (0, t.c)(26),
      {
        gatewayUrl: S,
        sendRequest: C,
        isReady: m,
        waitForTransport: _
      } = (0, u.useGatewayQueryContext)(),
      g = (0, n.useQueryClient)();
    p[0] !== S || p[1] !== e ? (a = (0, d.getSpaceShareStatusQueryKey)(S, e), p[0] = S, p[1] = e, p[2] = a) : a = p[2];
    let y = a;
    p[3] !== S || p[4] !== e ? (r = (0, d.getSpaceShareDiscoveryQueryKey)(S, e), p[3] = S, p[4] = e, p[5] = r) : r = p[5];
    let b = r;
    p[6] !== g || p[7] !== b || p[8] !== y ? (s = async () => {
      g.setQueryData(b, null), await g.cancelQueries({
        queryKey: y
      })
    }, p[6] = g, p[7] = b, p[8] = y, p[9] = s) : s = p[9], p[10] !== S || p[11] !== m || p[12] !== C || p[13] !== e || p[14] !== _ ? (l = async () => {
      if (null == S) throw Error("Gateway URL is not available");
      return m || await _(), await C("spaces.unshare", {
        slug: e
      })
    }, p[10] = S, p[11] = m, p[12] = C, p[13] = e, p[14] = _, p[15] = l) : l = p[15], p[16] !== g || p[17] !== y ? (c = () => {
      g.setQueryData(y, {
        ok: !0,
        url: null,
        share_type: null
      }), g.invalidateQueries({
        queryKey: h.spacesQueryKeys.all
      })
    }, p[16] = g, p[17] = y, p[18] = c) : c = p[18], p[19] !== s || p[20] !== l || p[21] !== c ? (o = {
      onMutate: s,
      mutationFn: l,
      onSuccess: c
    }, p[19] = s, p[20] = l, p[21] = c, p[22] = o) : o = p[22];
    let {
      mutateAsync: v,
      isPending: x
    } = (0, i.useMutation)(o);
    return p[23] !== x || p[24] !== v ? (f = {
      unpublish: v,
      isUnpublishing: x
    }, p[23] = x, p[24] = v, p[25] = f) : f = p[25], f
  }])
}, 542974, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(519172),
    r = e.i(849329),
    i = e.i(393202),
    n = e.i(14751),
    s = e.i(359783),
    l = e.i(175286),
    c = e.i(663396),
    o = e.i(863641);
  let u = (0, s.createClientLogger)("useSpaceShareStatus");
  async function h() {
    return null
  }
  e.s(["useSpaceShareStatus", 0, function(e) {
    let s, d, f, p, S, C, m, _, g, y, b, v = (0, t.c)(55),
      {
        gatewayUrl: x,
        sendRequest: w,
        isReady: E,
        ensureLiveConnection: k
      } = (0, l.useHatchRpc)(),
      A = (0, i.useQueryClient)(),
      R = (0, a.useRef)(null);
    v[0] !== x || v[1] !== e ? (s = (0, c.getSpaceShareDiscoveryQueryKey)(x, e), v[0] = x, v[1] = e, v[2] = s) : s = v[2];
    let T = s;
    v[3] !== T ? (d = {
      queryKey: T,
      queryFn: h,
      enabled: !1
    }, v[3] = T, v[4] = d) : d = v[4];
    let {
      data: j
    } = (0, r.useQuery)(d);
    v[5] !== x || v[6] !== E || v[7] !== e ? (f = null != e && e.length > 0 && null != x && (0, n.isMethodReadyForTransport)({
      method: "spaces.share.status",
      gatewayUrl: x,
      isWsReady: E
    }), v[5] = x, v[6] = E, v[7] = e, v[8] = f) : f = v[8];
    let H = f;
    u.retainForBugReport("debug", "share status check"), v[9] !== x || v[10] !== e ? (p = (0, c.getSpaceShareStatusQueryKey)(x, e), v[9] = x, v[10] = e, v[11] = p) : p = v[11], v[12] !== k || v[13] !== E || v[14] !== w || v[15] !== e ? (S = async () => (E || await k(), await w("spaces.share.status", {
      slug: e
    })), v[12] = k, v[13] = E, v[14] = w, v[15] = e, v[16] = S) : S = v[16], v[17] !== j ? (C = e => (function(e, t, a, r) {
      if (null == e || "polling" !== e.phase || null != t) return !1;
      let i = e.expiresAtMs - r;
      if (i <= 0) return !1;
      let n = r - e.startedAtMs,
        s = r - e.pollingSinceMs;
      return Math.min(a ? 3e4 : n < 6e3 ? 500 : s < 3e4 ? 2e3 : 15e3, i)
    })(j, e.state.data?.share_type, null != e.state.error, Date.now()), v[17] = j, v[18] = C) : C = v[18], v[19] === Symbol.for("react.memo_cache_sentinel") ? (m = {
      sentrySurface: o.HATCH_SENTRY_SURFACES.SHARE
    }, v[19] = m) : m = v[19], v[20] !== H || v[21] !== p || v[22] !== S || v[23] !== C ? (_ = {
      queryKey: p,
      queryFn: S,
      enabled: H,
      refetchInterval: C,
      meta: m,
      staleTime: 15e3,
      retry: !1
    }, v[20] = H, v[21] = p, v[22] = S, v[23] = C, v[24] = _) : _ = v[24];
    let {
      data: N,
      dataUpdatedAt: L,
      errorUpdatedAt: M,
      isError: D,
      isLoading: I,
      refetch: P
    } = (0, r.useQuery)(_);
    v[25] !== N?.share_type || v[26] !== N?.url || v[27] !== L || v[28] !== j || v[29] !== T || v[30] !== H || v[31] !== M || v[32] !== A || v[33] !== P ? (g = () => {
      if (null == j) {
        R.current = null;
        return
      }
      if (N?.share_type != null) return void A.setQueryData(T, null);
      if ("readiness_unconfirmed" === j.phase || Date.now() < j.expiresAtMs) return;
      let e = L >= j.expiresAtMs,
        t = M >= j.expiresAtMs;
      if (!e && !t && H) return void P();
      let a = N?.url != null;
      e && R.current !== j.startedAtMs && (R.current = j.startedAtMs, (0, o.captureHatchMessage)(o.HATCH_SENTRY_SURFACES.SHARE, a ? "Share deployment readiness timed out" : "Share URL discovery timed out", {
        level: "warning",
        extra: {
          waitedMs: Math.max(0, L - j.startedAtMs),
          budgetMs: Math.max(0, j.expiresAtMs - j.startedAtMs),
          hasProvisionalUrl: a
        }
      })), A.setQueryData(T, a ? {
        ...j,
        phase: "readiness_unconfirmed"
      } : null)
    }, v[25] = N?.share_type, v[26] = N?.url, v[27] = L, v[28] = j, v[29] = T, v[30] = H, v[31] = M, v[32] = A, v[33] = P, v[34] = g) : g = v[34];
    let O = N?.share_type,
      U = N?.url;
    v[35] !== L || v[36] !== j || v[37] !== T || v[38] !== H || v[39] !== M || v[40] !== A || v[41] !== P || v[42] !== U || v[43] !== O ? (y = [O, U, L, j, T, M, H, A, P], v[35] = L, v[36] = j, v[37] = T, v[38] = H, v[39] = M, v[40] = A, v[41] = P, v[42] = U, v[43] = O, v[44] = y) : y = v[44], (0, a.useEffect)(g, y);
    let K = N?.url != null,
      Q = N?.url ?? null,
      F = j?.phase === "polling" && N?.url == null,
      V = j?.phase === "polling" && N?.url != null && null == N.share_type,
      B = j?.phase === "readiness_unconfirmed" && N?.url != null && null == N.share_type,
      W = !!H && I,
      G = null != N;
    return v[45] !== D || v[46] !== P || v[47] !== K || v[48] !== Q || v[49] !== F || v[50] !== V || v[51] !== B || v[52] !== W || v[53] !== G ? (b = {
      isShared: K,
      sharedUrl: Q,
      isDiscoveringShareUrl: F,
      isShareDeploymentPending: V,
      isShareReadinessUnconfirmed: B,
      isLoading: W,
      isStatusKnown: G,
      isStatusError: D,
      refetch: P
    }, v[45] = D, v[46] = P, v[47] = K, v[48] = Q, v[49] = F, v[50] = V, v[51] = B, v[52] = W, v[53] = G, v[54] = b) : b = v[54], b
  }])
}, 69470, e => {
  "use strict";
  var t = e.i(519172),
    a = e.i(345717),
    r = e.i(47247),
    i = e.i(359783),
    n = e.i(863641),
    s = e.i(175286),
    l = e.i(925301),
    c = e.i(648094);
  let o = (0, i.createClientLogger)("download_space_html");
  e.s(["useDownloadSpaceHtml", 0, function(e) {
    let {
      sendRequest: i,
      isReady: u,
      ensureLiveConnection: h,
      gatewayUrl: d
    } = (0, s.useHatchRpc)(), f = (0, t.useRef)(new Set), p = a.fbs._("Artifacts are unavailable while disconnected.", null, {
      hk: "fnmaD"
    }), S = a.fbs._("Artifacts are unavailable while disconnected.", null, {
      hk: "fnmaD"
    }), C = a.fbs._("Failed to download artifact", null, {
      hk: "27CRr"
    });
    return (0, t.useCallback)((t, a) => {
      let s = t.trim();
      if (0 === s.length || f.current.has(s)) return;
      if (null == d) return void r.toast.error(p);
      let m = a?.displayName?.trim() ?? "",
        _ = `${m.length>0?m:s}.html`,
        g = (0, r.captureHatchToast)();
      f.current.add(s), (async () => {
        try {
          u || await h();
          let e = await i("spaces.export_html", {
            slug: s
          });
          if (!(e instanceof Blob)) throw Error("Space HTML export did not return a file");
          (0, c.triggerBlobDownload)(_, e)
        } catch (a) {
          let t = a instanceof Error ? a : Error(String(a));
          if ((0, l.isGatewayDisconnectError)(a)) {
            o.retainForBugReport("warn", "Space HTML export attempted while gateway disconnected"), g.error(S);
            return
          }(0, l.isGatewayRequestError)(a) && "jarvis_rejection" === a.kind && "not_found" === a.code ? o.retainForBugReport("warn", "Space HTML export not found") : o.error({
            error: t,
            spaceSlug: s,
            tags: (0, n.hatchSentryTags)(e)
          }, "Failed to download space HTML export"), g.error(C)
        } finally {
          f.current.delete(s)
        }
      })()
    }, [h, d, u, i, e, p, S, C])
  }])
}, 845288, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(848048),
    r = e.i(281539);

  function i(e, t, a) {
    return {
      surface: "spaces",
      subsurface: e,
      artifact_source: t,
      entry_point: a
    }
  }

  function n(e, n, s, l) {
    let c, o, u = (0, t.c)(8),
      h = "file" === s ? "file_overflow" : "space_overflow",
      d = e ? r.HatchClickEvent.SPACE_OVERFLOW_UNPIN_CLICK : r.HatchClickEvent.SPACE_OVERFLOW_PIN_CLICK,
      f = e ? `${h}_unpin` : `${h}_pin`;
    return u[0] !== l || u[1] !== s || u[2] !== n ? (c = i(n, s, l), u[0] = l, u[1] = s, u[2] = n, u[3] = c) : c = u[3], u[4] !== d || u[5] !== f || u[6] !== c ? (o = {
      eventName: d,
      actionTarget: f,
      actionType: "click",
      metadata: c
    }, u[4] = d, u[5] = f, u[6] = c, u[7] = o) : o = u[7], (0, a.useTrackedClickRef)(o)
  }
  e.s(["useSpaceMenuItemTracking", 0, function(e, s, l, c) {
    let o, u, h, d, f, p, S = (0, t.c)(23);
    S[0] !== c || S[1] !== l || S[2] !== s ? (o = i(s, l, c), S[0] = c, S[1] = l, S[2] = s, S[3] = o) : o = S[3];
    let C = o,
      m = "file" === l ? "file_overflow" : "space_overflow",
      _ = n(e, s, l, c),
      g = `${m}_share`;
    S[4] !== C || S[5] !== g ? (u = {
      eventName: r.HatchClickEvent.SPACE_OVERFLOW_SHARE_CLICK,
      actionTarget: g,
      actionType: "click",
      metadata: C
    }, S[4] = C, S[5] = g, S[6] = u) : u = S[6];
    let y = (0, a.useTrackedClickRef)(u),
      b = `${m}_unshare`;
    S[7] !== C || S[8] !== b ? (h = {
      eventName: r.HatchClickEvent.SPACE_OVERFLOW_UNSHARE_CLICK,
      actionTarget: b,
      actionType: "click",
      metadata: C
    }, S[7] = C, S[8] = b, S[9] = h) : h = S[9];
    let v = (0, a.useTrackedClickRef)(h),
      x = `${m}_download`;
    S[10] !== C || S[11] !== x ? (d = {
      eventName: r.HatchClickEvent.SPACE_OVERFLOW_DOWNLOAD_CLICK,
      actionTarget: x,
      actionType: "click",
      metadata: C
    }, S[10] = C, S[11] = x, S[12] = d) : d = S[12];
    let w = (0, a.useTrackedClickRef)(d),
      E = "saved_space" === l ? r.HatchClickEvent.SAVED_SPACE_OVERFLOW_REMOVE_CLICK : r.HatchClickEvent.SPACE_OVERFLOW_DELETE_CLICK,
      k = "saved_space" === l ? "saved_space_overflow_remove" : `${m}_delete`;
    S[13] !== C || S[14] !== E || S[15] !== k ? (f = {
      eventName: E,
      actionTarget: k,
      actionType: "click",
      metadata: C
    }, S[13] = C, S[14] = E, S[15] = k, S[16] = f) : f = S[16];
    let A = (0, a.useTrackedClickRef)(f);
    return S[17] !== w || S[18] !== _ || S[19] !== A || S[20] !== y || S[21] !== v ? (p = {
      pin: _,
      share: y,
      unshare: v,
      download: w,
      remove: A
    }, S[17] = w, S[18] = _, S[19] = A, S[20] = y, S[21] = v, S[22] = p) : p = S[22], p
  }, "useSpaceMenuOpenTracking", 0, function(e, n, s) {
    let l, c, o = (0, t.c)(7),
      u = "file" === n ? "file_options_menu" : "space_options_menu";
    return o[0] !== s || o[1] !== n || o[2] !== e ? (l = i(e, n, s), o[0] = s, o[1] = n, o[2] = e, o[3] = l) : l = o[3], o[4] !== u || o[5] !== l ? (c = {
      eventName: r.HatchClickEvent.SPACE_OPTIONS_MENU_OPEN_CLICK,
      actionTarget: u,
      actionType: "click",
      metadata: l
    }, o[4] = u, o[5] = l, o[6] = c) : c = o[6], (0, a.useTrackedClickRef)(c)
  }, "useSpaceMenuPinTracking", 0, n])
}, 534955, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099);

  function r(e) {
    let r, i, n, s, l, c = (0, a.c)(10);
    return c[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), c[0] = e.title, c[1] = r) : r = c[1], c[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), c[2] = e.children, c[3] = i) : i = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)("path", {
      d: "M15.38 7.38C15.72 7.04 16.28 7.04 16.62 7.38C16.96 7.72 16.96 8.28 16.62 8.62L8.62 16.62C8.28 16.96 7.72 16.96 7.38 16.62C7.04 16.28 7.04 15.72 7.38 15.38L15.38 7.38Z"
    }), s = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 1.13C18.01 1.13 22.88 5.99 22.88 12C22.88 18.01 18.01 22.88 12 22.88C5.99 22.88 1.13 18.01 1.13 12C1.13 5.99 5.99 1.13 12 1.13ZM12 2.88C6.96 2.88 2.88 6.96 2.88 12C2.88 17.04 6.96 21.13 12 21.13C17.04 21.13 21.13 17.04 21.13 12C21.13 6.96 17.04 2.88 12 2.88Z"
    }), c[4] = n, c[5] = s) : (n = c[4], s = c[5]), c[6] !== e || c[7] !== r || c[8] !== i ? (l = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, n, s]
    }), c[6] = e, c[7] = r, c[8] = i, c[9] = l) : l = c[9], l
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 304905, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099);

  function r(e) {
    let r, i, n, s, l = (0, a.c)(9);
    return l[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), l[0] = e.title, l[1] = r) : r = l[1], l[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), l[2] = e.children, l[3] = i) : i = l[3], l[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 1.13C18.01 1.13 22.88 5.99 22.88 12C22.88 18.01 18.01 22.88 12 22.88C5.99 22.88 1.13 18.01 1.13 12C1.13 5.99 5.99 1.13 12 1.13ZM16.15 7.85C15.81 7.5 15.26 7.5 14.92 7.85L12 10.76L9.08 7.85C8.74 7.5 8.19 7.5 7.85 7.85C7.5 8.19 7.5 8.74 7.85 9.08L10.76 12L7.85 14.92C7.5 15.26 7.5 15.81 7.85 16.15C8.19 16.5 8.74 16.5 9.08 16.15L12 13.24L14.92 16.15C15.26 16.5 15.81 16.5 16.15 16.15C16.5 15.81 16.5 15.26 16.15 14.92L13.24 12L16.15 9.08C16.5 8.74 16.5 8.19 16.15 7.85Z"
    }), l[4] = n) : n = l[4], l[5] !== e || l[6] !== r || l[7] !== i ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, n]
    }), l[5] = e, l[6] = r, l[7] = i, l[8] = s) : s = l[8], s
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 565639, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099);

  function r(e) {
    let r, i, n, s, l, c, o = (0, a.c)(11);
    return o[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), o[0] = e.title, o[1] = r) : r = o[1], o[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), o[2] = e.children, o[3] = i) : i = o[3], o[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)("path", {
      d: "M12 16.22C12.41 16.22 12.75 16.34 13 16.57C13.26 16.8 13.39 17.11 13.39 17.49C13.39 17.87 13.26 18.17 13 18.4C12.75 18.63 12.41 18.75 12 18.75C11.59 18.75 11.25 18.63 11 18.4C10.74 18.17 10.62 17.87 10.62 17.49C10.62 17.11 10.74 16.8 11 16.57C11.25 16.34 11.59 16.22 12 16.22Z"
    }), s = (0, t.jsx)("path", {
      d: "M12 6.75C12.65 6.75 13.16 7.28 13.14 7.93L12.95 14.03C12.93 14.54 12.51 14.94 12 14.94C11.49 14.94 11.07 14.54 11.06 14.03L10.86 7.93C10.84 7.28 11.36 6.75 12 6.75Z"
    }), l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.83 1.41C11.57 1.07 12.43 1.07 13.17 1.41C13.69 1.64 14.07 2.07 14.4 2.53C14.73 3.01 15.09 3.65 15.54 4.43L22.02 15.78C22.46 16.55 22.83 17.18 23.06 17.7C23.3 18.21 23.47 18.75 23.41 19.31C23.32 20.12 22.9 20.85 22.24 21.33C21.78 21.66 21.23 21.77 20.67 21.82C20.1 21.88 19.37 21.88 18.48 21.88H5.51C4.63 21.88 3.9 21.88 3.33 21.82C2.77 21.77 2.22 21.66 1.76 21.33C1.1 20.85 0.67 20.12 0.59 19.31C0.53 18.75 0.7 18.21 0.94 17.7C1.17 17.18 1.54 16.55 1.98 15.78L8.46 4.43C8.91 3.65 9.27 3.01 9.6 2.53C9.93 2.07 10.31 1.64 10.83 1.41ZM12.46 3C12.17 2.87 11.83 2.87 11.54 3C11.46 3.04 11.31 3.14 11.04 3.54C10.76 3.93 10.44 4.49 9.98 5.3L3.49 16.65C3.04 17.45 2.72 18 2.53 18.43C2.33 18.86 2.32 19.04 2.33 19.12C2.36 19.44 2.53 19.73 2.79 19.91C2.85 19.96 3.02 20.04 3.49 20.08C3.96 20.12 4.59 20.13 5.51 20.13H18.48C19.41 20.13 20.04 20.12 20.51 20.08C20.98 20.04 21.14 19.96 21.21 19.91C21.47 19.73 21.64 19.44 21.67 19.12C21.68 19.04 21.67 18.86 21.47 18.43C21.27 18 20.96 17.45 20.5 16.65L14.02 5.3C13.55 4.49 13.24 3.93 12.96 3.54C12.69 3.14 12.53 3.04 12.46 3Z"
    }), o[4] = n, o[5] = s, o[6] = l) : (n = o[4], s = o[5], l = o[6]), o[7] !== e || o[8] !== r || o[9] !== i ? (c = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, i, n, s, l]
    }), o[7] = e, o[8] = r, o[9] = i, o[10] = c) : c = o[10], c
  }
  r._isSVG = !0, e.s(["default", 0, r])
}]);

//# debugId=38824882-fab0-c40a-b9d3-c0e511eb4f83
//# sourceMappingURL=01j8ib52eem4r.js.map