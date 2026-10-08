;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "75e5916c-723c-fcd6-4416-68a1d43f0aa0")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 670578, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    r = e.i(420297),
    l = e.i(646361),
    n = e.i(430116),
    i = e.i(374785);

  function o(e) {
    let o, c, u, s, y, d, p, f, h, m, S, A, _, T, R, C, E = (0, a.c)(41);
    E[0] !== e ? ({
      action: o,
      className: c,
      icon: u,
      illustration: s,
      subtitle: d,
      title: f,
      titleAs: p,
      ...y
    } = e, E[0] = e, E[1] = o, E[2] = c, E[3] = u, E[4] = s, E[5] = y, E[6] = d, E[7] = p, E[8] = f) : (o = E[1], c = E[2], u = E[3], s = E[4], y = E[5], d = E[6], p = E[7], f = E[8]);
    let H = void 0 === p ? "h2" : p,
      g = null;
    if (null != o) {
      let e, a, l, n, c;
      E[9] !== o ? ({
        className: e,
        variant: l,
        ...a
      } = o, E[9] = o, E[10] = e, E[11] = a, E[12] = l) : (e = E[10], a = E[11], l = E[12]);
      let u = "primary" === (void 0 === l ? "secondary" : l) ? "primary" : "flat";
      E[13] !== e ? (n = (0, i.cn)("mt-3", e), E[13] = e, E[14] = n) : n = E[14], E[15] !== a || E[16] !== u || E[17] !== n ? (c = (0, t.jsx)(r.Button, {
        type: "button",
        ...a,
        size: "36",
        variant: u,
        className: n
      }), E[15] = a, E[16] = u, E[17] = n, E[18] = c) : c = E[18], g = c
    }
    return E[19] !== c ? (h = (0, i.cn)("flex w-full flex-col items-center", c), E[19] = c, E[20] = h) : h = E[20], E[21] !== u || E[22] !== s ? (m = null != u ? (0, t.jsx)(l.HatchIcon, {
      icon: u,
      size: 28,
      iconSize: 28,
      className: "text-text-secondary",
      "aria-hidden": "true"
    }) : s, E[21] = u, E[22] = s, E[23] = m) : m = E[23], E[24] === Symbol.for("react.memo_cache_sentinel") ? (S = {
      fontSize: 15
    }, E[24] = S) : S = E[24], E[25] !== f || E[26] !== H ? (A = (0, t.jsx)(n.Text, {
      as: H,
      variant: "subheadline-medium",
      color: "primary",
      style: S,
      children: f
    }), E[25] = f, E[26] = H, E[27] = A) : A = E[27], E[28] !== d ? (_ = null != d && (0, t.jsx)(n.Text, {
      as: "p",
      variant: "footnote",
      color: "primary",
      children: d
    }), E[28] = d, E[29] = _) : _ = E[29], E[30] !== g || E[31] !== A || E[32] !== _ ? (T = (0, t.jsxs)("div", {
      className: "flex w-full flex-col items-center gap-0.5",
      children: [A, _, g]
    }), E[30] = g, E[31] = A, E[32] = _, E[33] = T) : T = E[33], E[34] !== m || E[35] !== T ? (R = (0, t.jsxs)("div", {
      "data-slot": "null-state-content",
      className: "max-w-null-state mx-auto flex w-full flex-col items-center gap-1 text-center",
      children: [m, T]
    }), E[34] = m, E[35] = T, E[36] = R) : R = E[36], E[37] !== y || E[38] !== h || E[39] !== R ? (C = (0, t.jsx)("div", {
      "data-slot": "null-state",
      className: h,
      ...y,
      children: R
    }), E[37] = y, E[38] = h, E[39] = R, E[40] = C) : C = E[40], C
  }
  o.displayName = "NullState", e.s(["NullState", 0, o])
}, 66284, 142074, 210316, 396502, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(519172),
    r = e.i(393202),
    l = e.i(345717),
    n = e.i(180110),
    i = e.i(770256),
    o = e.i(646361),
    c = e.i(670578),
    u = e.i(281539),
    s = e.i(823173),
    y = e.i(374785),
    d = e.i(848048),
    p = e.i(789078);
  e.i(522730);
  var f = e.i(812240),
    h = e.i(722099),
    m = e.i(825442),
    S = e.i(486868);

  function A(e) {
    let a, r, l, n, i, o = (0, h.c)(13),
      {
        label: c,
        shortcut: u,
        disabled: s,
        children: y
      } = e;
    return o[0] !== y ? (a = (0, t.jsx)(S.TooltipTrigger, {
      asChild: !0,
      children: y
    }), o[0] = y, o[1] = a) : a = o[1], o[2] !== c ? (r = (0, t.jsx)("span", {
      children: c
    }), o[2] = c, o[3] = r) : r = o[3], o[4] !== u ? (l = null != u && (0, t.jsx)(m.EctoKeyboardShortcut, {
      shortcut: u,
      className: "text-text-secondary"
    }), o[4] = u, o[5] = l) : l = o[5], o[6] !== r || o[7] !== l ? (n = (0, t.jsx)(S.TooltipContent, {
      side: "right",
      sideOffset: -4,
      children: (0, t.jsxs)("span", {
        className: "flex items-center gap-2",
        children: [r, l]
      })
    }), o[6] = r, o[7] = l, o[8] = n) : n = o[8], o[9] !== s || o[10] !== a || o[11] !== n ? (i = (0, t.jsxs)(S.Tooltip, {
      disabled: s,
      delayDuration: 0,
      children: [a, n]
    }), o[9] = s, o[10] = a, o[11] = n, o[12] = i) : i = o[12], i
  }
  e.s(["DockItemTooltip", 0, A], 142074), e.s(["HatchSpacesErrorFallback", 0, function({
    onRetryError: e,
    onRetryStart: h,
    refresh: m,
    reset: S,
    surface: _,
    compact: T = !1,
    compactItemGap: R = 0,
    compactItemSize: C = 36,
    compactLabel: E,
    includeSavedSpaces: H = !1
  }) {
    let g = (0, r.useQueryClient)(),
      {
        ref: P
      } = (0, d.useTrackedImpressionRef)({
        eventName: s.HatchImpressionEvent.ERROR_CONTENT_IMPRESSION,
        actionTarget: "spaces_error_fallback",
        metadata: {
          surface: "spaces",
          subsurface: _
        }
      }, {
        threshold: "50%"
      }),
      {
        ref: b,
        onClick: L
      } = (0, d.useTrackedClickRef)({
        eventName: u.HatchClickEvent.ERROR_PAGE_TRY_AGAIN_CLICK,
        actionTarget: "spaces_error_fallback_try_again",
        actionType: "click",
        metadata: {
          surface: "spaces",
          subsurface: _
        }
      }),
      v = (0, a.useCallback)(async () => {
        L();
        let t = h?.() ?? null,
          a = [null != m ? m() : g.invalidateQueries({
            queryKey: f.spacesQueryKeys.all,
            refetchType: "all"
          })];
        H && a.push(g.invalidateQueries({
          queryKey: p.savedSpacesQueryKeys.all,
          refetchType: "all"
        }));
        try {
          await Promise.all(a), S?.()
        } catch (a) {
          e?.(a, t);
          return
        }
      }, [H, L, e, h, g, m, S]);
    if (T) {
      let e = "rail-item" === _ ? l.fbs._("Retry loading this artifact", null, {
          hk: "4CUsZh"
        }) : "library" === _ ? l.fbs._("Retry loading artifacts", null, {
          hk: "fcsBs"
        }) : l.fbs._("Retry loading artifacts", null, {
          hk: "3Eg3iF"
        }),
        a = null == E ? Math.round(2 / 3 * C) : 20,
        r = "rail-item" === _ ? l.fbs._("Couldn't load artifact. Click to retry.", null, {
          hk: "3AO8Nq"
        }) : "library" === _ ? l.fbs._("Couldn't load artifacts. Click to retry.", null, {
          hk: "3xdpkE"
        }) : l.fbs._("Couldn't load artifacts. Click to retry.", null, {
          hk: "2i0NBM"
        }),
        i = "library" === _ ? l.fbs._("Couldn't load artifacts", null, {
          hk: "4vLYep"
        }) : l.fbs._("Couldn't load artifacts", null, {
          hk: "3vuQT0"
        }),
        c = (0, t.jsxs)("button", {
          ref: b,
          type: "button",
          "aria-label": e,
          className: (0, y.cn)("group text-text-primary flex w-full cursor-pointer items-center text-start whitespace-nowrap transition-colors", null == E ? "justify-center p-0" : "squircle-12 hover:bg-fill-secondary-elevated gap-2 px-2 py-1.5"),
          onClick: v,
          children: [(0, t.jsxs)("span", {
            className: (0, y.cn)("bg-fill-secondary-elevated dark:bg-fill-primary relative flex shrink-0 items-center justify-center rounded-full transition-colors", null != E && "size-6"),
            style: null == E ? {
              width: C,
              height: C
            } : void 0,
            children: [(0, t.jsx)(o.HatchIcon, {
              icon: n.default,
              size: a,
              className: "text-text-destructive"
            }), (0, t.jsx)("span", {
              "aria-hidden": "true",
              className: "bg-text-destructive ring-fill-primary absolute -end-0.5 -top-0.5 size-2.5 rounded-full ring-2"
            })]
          }), null != E && (0, t.jsx)("span", {
            className: "text-subheadline text-text-primary min-w-0 flex-1 truncate",
            children: E
          })]
        });
      return (0, t.jsx)("div", {
        ref: P,
        role: "alert",
        className: "w-full px-0",
        title: i,
        style: null == E ? {
          minHeight: C,
          paddingBlock: R / 2
        } : void 0,
        children: (0, t.jsx)(A, {
          label: r,
          disabled: null != E,
          children: c
        })
      })
    }
    let x = "space" === _ ? l.fbs._("Couldn't load this artifact", null, {
      hk: "4lLNDp"
    }) : "library" === _ ? l.fbs._("Couldn't load artifacts", null, {
      hk: "1Kvkfv"
    }) : l.fbs._("Couldn't load artifacts", null, {
      hk: "2JBghG"
    });
    return (0, t.jsx)("div", {
      ref: P,
      role: "alert",
      className: "flex min-h-0 flex-1 items-center justify-center p-6",
      children: (0, t.jsx)(c.NullState, {
        icon: i.default,
        title: x,
        subtitle: l.fbs._("Please try again.", null, {
          hk: "409PS1"
        }),
        action: {
          ref: b,
          type: "button",
          variant: "primary",
          leadingIcon: n.default,
          label: l.fbs._("Try again", null, {
            hk: "3FlFpc"
          }),
          onClick: v
        }
      })
    })
  }], 66284);
  var _ = e.i(301970),
    T = e.i(986907);
  let R = (0, a.createContext)(null);

  function C(e) {
    return `${e.surface}:${e.spaceKey}`
  }
  let E = ["availability", "catalog", "shell_route", "space_route", "viewer_stage", "editor_stage"];

  function H(e, t) {
    return null == e || null == t ? e === t : e.spaceKey === t.spaceKey && e.surface === t.surface
  }

  function g(e, t, a) {
    e.path = t, e.fallbackUsed = a, e.trace.annotate({
      string: {
        load_path: t
      },
      bool: {
        fallback_used: a
      }
    })
  }

  function P(e, t) {
    e.points.has(t) || (e.points.add(t), e.trace.markerPoint(t))
  }

  function b(e) {
    return e + 1
  }

  function L(e) {
    return e + 1
  }

  function v(e) {
    return e + 1
  }

  function x() {
    return (0, a.useContext)(R)
  }
  e.s(["ARTIFACT_LOAD_TIMEOUT_MS", 0, 3e4, "ArtifactLoadAttemptProvider", 0, function(e) {
    let t, r, l = (0, h.c)(7),
      {
        activeSpaceKey: n,
        children: i,
        lifecycleStatus: o,
        surface: c
      } = e;
    l[0] !== n || l[1] !== o || l[2] !== c ? (t = {
      activeSpaceKey: n,
      lifecycleStatus: o,
      surface: c
    }, l[0] = n, l[1] = o, l[2] = c, l[3] = t) : t = l[3];
    let u = function(e) {
      let t, r, l, n, i, o, c, u, s, y, d, p, f, m, S, A, R, x, N = (0, h.c)(43),
        {
          activeSpaceKey: I,
          lifecycleStatus: k,
          surface: w
        } = e,
        F = (0, a.useRef)(null),
        K = (0, a.useRef)(null),
        j = (0, a.useRef)(null),
        U = (0, a.useRef)(null);
      N[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Map, N[0] = t) : t = N[0];
      let Y = (0, a.useRef)(t),
        O = (0, a.useRef)(0),
        [D, M] = (0, a.useState)(0),
        [B, G] = (0, a.useState)(0),
        z = (0, a.useRef)(0),
        $ = (0, a.useRef)(k),
        Q = (0, a.useRef)(null),
        V = (0, a.useRef)(0),
        [q, W] = (0, a.useState)(0);
      N[1] === Symbol.for("react.memo_cache_sentinel") ? (r = (e, t, a, r) => {
        F.current === e && (F.current = null, ("SUCCESS" === t || "FAIL" === t || "TIMEOUT" === t) && (j.current = {
          spaceKey: e.spaceKey,
          surface: e.surface
        }), ("SUCCESS" === t || "CANCEL" === t) && (U.current = null), e.cleanupDeadline(), null != a && e.trace.annotate(a), null != r && P(e, r), (0, T.endManualTrace)(e.trace, t))
      }, N[1] = r) : r = N[1];
      let J = r;
      N[2] === Symbol.for("react.memo_cache_sentinel") ? (l = (e, t) => {
        let a = F.current;
        null != a && J(a, void 0 === t ? "CANCEL" : t, {
          string: {
            cancel_reason: e
          }
        })
      }, N[2] = l) : l = N[2];
      let Z = l;
      N[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (e, t) => {
        let a = t.path ?? e.path;
        g(e, a, t.fallbackUsed ?? e.fallbackUsed), U.current = {
          failureStage: t.failureStage,
          path: a,
          spaceKey: e.spaceKey,
          surface: e.surface
        }, J(e, "FAIL", {
          string: {
            failure_stage: t.failureStage
          }
        }, "load_failed")
      }, N[3] = n) : n = N[3];
      let X = n;
      N[4] !== w ? (i = (e, t, a) => {
        Z("superseded"), j.current = null, "navigation" === t && (U.current = null);
        let r = U.current,
          l = "navigation" !== t && null != r && r.spaceKey === e && r.surface === w ? {
            previous_failure_stage: r.failureStage,
            previous_load_path: r.path
          } : {},
          n = (0, T.startManualInteraction)(_.EctoInteractionTracePolicy.ARTIFACT_LOAD, {
            debugName: "artifact-load",
            includeUri: !1
          }),
          i = "u" > typeof document && document.hidden;
        n.annotate({
          string: {
            load_path: "unresolved",
            surface: w,
            trigger: t,
            ...l
          },
          int: {
            retry_index: a
          },
          bool: {
            fallback_used: !1,
            ...i ? {
              was_hidden: !0
            } : {}
          }
        });
        let o = AbortSignal.timeout(3e4),
          c = () => {
            let t = F.current;
            null != t && t.spaceKey === e && t.surface === w && (U.current = {
              failureStage: "display_timeout",
              path: t.path,
              spaceKey: t.spaceKey,
              surface: t.surface
            }, J(t, "TIMEOUT", {
              string: {
                failure_stage: "display_timeout",
                load_path: t.path
              },
              bool: {
                fallback_used: t.fallbackUsed
              }
            }, "display_timeout"))
          };
        o.addEventListener("abort", c, {
          once: !0
        });
        let u = V.current + 1;
        return F.current = {
          blockerGenerationAtStart: "navigation" === t ? 0 : O.current,
          cleanupDeadline: () => o.removeEventListener("abort", c),
          fallbackUsed: !1,
          path: "unresolved",
          recoveryCommitPending: "navigation" !== t && (Y.current.get(C({
            spaceKey: e,
            surface: w
          }))?.size ?? 0) > 0,
          points: new Set,
          spaceKey: e,
          surface: w,
          token: u,
          trace: n
        }, V.current = u, W(u), u
      }, N[4] = w, N[5] = i) : i = N[5];
      let ee = i;
      N[6] !== I || N[7] !== ee || N[8] !== k || N[9] !== w ? (o = () => {
        $.current = k;
        let e = K.current,
          t = null == I ? null : {
            spaceKey: I,
            surface: w
          },
          a = !H(e, t);
        if (K.current = t, null == t) {
          Q.current = null, U.current = null, null != e && Z("route_closed");
          return
        }
        if (a) {
          if (Q.current = null, Z("active_artifact_changed"), j.current = null, U.current = null, z.current = 0, "constructing" === k) return;
          ee(t.spaceKey, "navigation", 0)
        } else if ("constructing" === k) return void Z("artifact_constructing");
        else if (Q.current?.spaceKey === t.spaceKey && Q.current.surface === t.surface) {
          let e = Q.current;
          Q.current = null, z.current = z.current + 1, ee(t.spaceKey, e.trigger, z.current)
        } else null != F.current || H(j.current, t) || (z.current = 0, ee(t.spaceKey, "navigation", 0));
        let r = F.current;
        if (null != r) {
          let e = function(e, t) {
            if (null == e) return null;
            for (let a of E) {
              let r = e.get(a);
              if (null != r && (0 === t || r.generation > t)) return r.failure
            }
            return null
          }(Y.current.get(C(t)), r.blockerGenerationAtStart);
          null != e && r.spaceKey === t.spaceKey && r.surface === t.surface && X(r, e)
        }
      }, N[6] = I, N[7] = ee, N[8] = k, N[9] = w, N[10] = o) : o = N[10], N[11] !== I || N[12] !== ee || N[13] !== D || N[14] !== k || N[15] !== w ? (c = [I, ee, D, Z, X, J, k, w], N[11] = I, N[12] = ee, N[13] = D, N[14] = k, N[15] = w, N[16] = c) : c = N[16], (0, a.useLayoutEffect)(o, c), N[17] === Symbol.for("react.memo_cache_sentinel") ? (u = () => () => {
        Z("surface_unmounted")
      }, s = [Z], N[17] = u, N[18] = s) : (u = N[17], s = N[18]), (0, a.useEffect)(u, s), N[19] !== w ? (y = (e, t, a) => {
        let r = F.current;
        null != r && r.spaceKey === e && r.surface === w && (g(r, t, a), P(r, "stage_mounted"))
      }, N[19] = w, N[20] = y) : y = N[20];
      let et = y;
      N[21] !== w ? (d = (e, t, a) => {
        let r = F.current;
        null != r && r.spaceKey === e && r.surface === w && (g(r, t, a), P(r, "source_ready"))
      }, N[21] = w, N[22] = d) : d = N[22];
      let ea = d;
      N[23] !== w ? (p = (e, t, a) => {
        let r = F.current;
        null == r || r.spaceKey !== e || r.surface !== w || null != a && r.token !== a || (Y.current.get(C({
          spaceKey: r.spaceKey,
          surface: r.surface
        }))?.size ?? 0) > 0 || r.recoveryCommitPending || (g(r, t.path, t.fallbackUsed), J(r, "SUCCESS", {
          bool: {
            cache_hit: t.cacheHit
          }
        }, "frame_presented"))
      }, N[23] = w, N[24] = p) : p = N[24];
      let er = p;
      N[25] !== w ? (f = (e, t, a) => {
        let r = F.current;
        null != r && r.spaceKey === e && r.surface === w && r.token === a && X(r, t)
      }, N[25] = w, N[26] = f) : f = N[26];
      let el = f;
      N[27] === Symbol.for("react.memo_cache_sentinel") ? (m = (e, t, a, r) => {
        let l = C({
            spaceKey: e,
            surface: t
          }),
          n = Y.current.get(l) ?? new Map;
        O.current = O.current + 1, n.set(a, {
          failure: r,
          generation: O.current
        }), Y.current.set(l, n), M(v)
      }, N[27] = m) : m = N[27];
      let en = m;
      N[28] === Symbol.for("react.memo_cache_sentinel") ? (S = (e, t, a) => {
        let r = C({
            spaceKey: e,
            surface: t
          }),
          l = Y.current.get(r);
        l?.delete(a) === !0 && (l?.size === 0 && Y.current.delete(r), M(L))
      }, N[28] = S) : S = N[28];
      let ei = S;
      N[29] === Symbol.for("react.memo_cache_sentinel") ? (A = (e, t) => {
        let a = F.current;
        null == a || a.spaceKey !== e || a.surface !== t || !a.recoveryCommitPending || (Y.current.get(C({
          spaceKey: e,
          surface: t
        }))?.size ?? 0) > 0 || (a.recoveryCommitPending = !1, G(b))
      }, N[29] = A) : A = N[29];
      let eo = A;
      N[30] !== ee || N[31] !== w ? (R = (e, t) => {
        let a = void 0 === t ? "user_retry" : t,
          r = K.current;
        return r?.spaceKey !== e || r.surface !== w ? null : "constructing" === $.current ? (Q.current = {
          spaceKey: e,
          surface: w,
          trigger: a
        }, null) : (Q.current = null, z.current = z.current + 1, ee(e, a, z.current))
      }, N[30] = ee, N[31] = w, N[32] = R) : R = N[32];
      let ec = R;
      return N[33] !== q || N[34] !== D || N[35] !== el || N[36] !== ea || N[37] !== et || N[38] !== B || N[39] !== ec || N[40] !== er || N[41] !== w ? (x = {
        attemptToken: q,
        blockingStateVersion: D,
        clearBlockingFailure: ei,
        commitRecovery: eo,
        fail: el,
        noteSourceReady: ea,
        noteStageMounted: et,
        presentationGateVersion: B,
        reportBlockingFailure: en,
        restart: ec,
        surface: w,
        succeed: er
      }, N[33] = q, N[34] = D, N[35] = el, N[36] = ea, N[37] = et, N[38] = B, N[39] = ec, N[40] = er, N[41] = w, N[42] = x) : x = N[42], x
    }(t);
    return l[4] !== i || l[5] !== u ? (r = (0, a.createElement)(R.Provider, {
      value: u
    }, i), l[4] = i, l[5] = u, l[6] = r) : r = l[6], r
  }, "useArtifactLoadAttemptReporter", 0, x], 210316), e.s(["ArtifactLoadBlockingFailureReporter", 0, function(e) {
    let t, r, l = (0, h.c)(10),
      {
        fallbackUsed: n,
        failureStage: i,
        path: o,
        reporter: c,
        source: u,
        spaceKey: s,
        surface: y
      } = e,
      d = x(),
      p = c ?? d,
      f = p?.clearBlockingFailure,
      m = p?.reportBlockingFailure;
    return l[0] !== f || l[1] !== i || l[2] !== n || l[3] !== o || l[4] !== m || l[5] !== u || l[6] !== s || l[7] !== y ? (t = () => (m?.(s, y, u, {
      failureStage: i,
      ...null == n ? {} : {
        fallbackUsed: n
      },
      ...null == o ? {} : {
        path: o
      }
    }), () => f?.(s, y, u)), r = [f, i, n, o, m, u, s, y], l[0] = f, l[1] = i, l[2] = n, l[3] = o, l[4] = m, l[5] = u, l[6] = s, l[7] = y, l[8] = t, l[9] = r) : (t = l[8], r = l[9]), (0, a.useLayoutEffect)(t, r), null
  }, "ArtifactLoadRecoveryCommit", 0, function(e) {
    let t, r, l = (0, h.c)(10),
      {
        spaceKey: n,
        surface: i
      } = e,
      o = x(),
      c = o?.attemptToken ?? 0,
      u = o?.blockingStateVersion ?? 0,
      s = o?.commitRecovery;
    return l[0] !== s || l[1] !== n || l[2] !== i ? (t = () => {
      s?.(n, i)
    }, l[0] = s, l[1] = n, l[2] = i, l[3] = t) : t = l[3], l[4] !== c || l[5] !== u || l[6] !== s || l[7] !== n || l[8] !== i ? (r = [c, u, s, n, i], l[4] = c, l[5] = u, l[6] = s, l[7] = n, l[8] = i, l[9] = r) : r = l[9], (0, a.useEffect)(t, r), null
  }], 396502)
}, 351321, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(519172),
    r = e.i(848048),
    l = e.i(763971),
    n = e.i(393202),
    i = e.i(271954),
    o = e.i(731714),
    c = e.i(22338),
    u = e.i(439393),
    s = e.i(720756),
    y = e.i(62822),
    d = e.i(764113),
    p = e.i(304117),
    f = e.i(546963),
    h = e.i(915637),
    m = e.i(685231);
  e.s(["default", 0, function({
    to: S,
    children: A,
    analytics: _,
    noPrefetch: T = !1,
    searchParams: R,
    commitWrapper: C,
    className: E,
    ref: H,
    onClick: g,
    onMouseEnter: P,
    onFocus: b,
    ...L
  }) {
    let v = (0, l.usePathname)(),
      {
        navigate: x
      } = (0, i.useNavigate)(),
      N = (0, l.useSearchParams)(),
      I = null == N ? "" : `?${N.toString()}`,
      k = (0, n.useQueryClient)(),
      w = (0, s.useGatewayQueryContext)(),
      F = (0, u.useShellRouteExperiments)(),
      K = (0, m.useShellPrimaryContentSnapshot)(),
      j = (0, y.useHatchPostContentSafetyReady)(),
      U = (0, c.resolveShellLocation)({
        to: S,
        searchParams: R,
        currentSearch: I
      }),
      Y = _?.actionTarget ?? "ShellLink",
      O = (0, r.useInteractionEventHandler)(null == _ ? null : {
        ..._,
        actionTarget: Y
      }),
      D = (0, o.useMergeRefs)(O, H),
      M = (0, a.useCallback)(() => {
        if (T) return;
        let t = (0, c.resolveShellLocationMatch)(v, N ?? new URLSearchParams, h.shellRouteMetadata).match;
        if (!j || !(0, m.isShellPostContentEligibleForRoute)(K, t, w.gatewayUrl, w.vmName)) return;
        let a = new URL(U, window.location.origin),
          r = (0, f.getShellRoutePrefetchEpoch)();
        e.A(722496).then(({
          shellRoutes: e
        }) => {
          if (r !== (0, f.getShellRoutePrefetchEpoch)()) return;
          let {
            match: t
          } = (0, c.resolveShellLocationMatch)(a.pathname, a.searchParams, e);
          t && (0, f.scheduleShellRouteIntentPrefetch)(t, {
            queryClient: k,
            gatewayCtx: w,
            experiments: F
          })
        }).catch(() => {})
      }, [F, w, T, v, j, K, k, U, N]),
      B = (0, a.useCallback)(e => {
        var t;
        if (g?.(e), e.defaultPrevented || 0 !== e.button || (t = e).metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
        let a = e.currentTarget.target;
        if (a && "_self" !== a) return;
        e.preventDefault();
        let r = new URL(U, window.location.origin);
        if (!(0, p.shouldUseShellHistoryNavigation)(v, r.pathname)) return void x(U);
        let l = () => {
          "/" === r.pathname && "/" === v ? window.dispatchEvent(new CustomEvent("hatch-scroll-to-bottom")) : (0, d.commitShellNavigation)({
            resolved: U,
            fromPathname: v
          }, {
            queryClient: k,
            gatewayCtx: w,
            experiments: F
          })
        };
        C ? C(l, r.pathname) : l()
      }, [C, g, U, v, x, k, w, F]),
      G = (0, a.useCallback)(e => {
        P?.(e), M()
      }, [P, M]),
      z = (0, a.useCallback)(e => {
        b?.(e), M()
      }, [b, M]);
    return (0, t.jsx)("a", {
      ref: D,
      href: U,
      className: E,
      onClick: B,
      onMouseEnter: G,
      onFocus: z,
      ...L,
      "data-hatch-shell-navigation": "true",
      children: A
    })
  }])
}, 401605, 540934, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    r = e.i(519172),
    l = e.i(763971),
    n = e.i(635470),
    i = e.i(393202),
    o = e.i(630203),
    c = e.i(720756),
    u = e.i(175286),
    s = e.i(22338),
    y = e.i(173214),
    d = e.i(845558),
    p = e.i(535678),
    f = e.i(359783),
    h = e.i(813280),
    m = e.i(870228),
    S = e.i(66284),
    A = e.i(396502),
    _ = e.i(210316);

  function T(e) {
    let r, l, n, i, o, c = (0, a.c)(17),
      {
        blockerSource: u,
        reset: s,
        spaceKey: y,
        surface: d
      } = e,
      p = (0, _.useArtifactLoadAttemptReporter)(),
      f = p?.fail,
      h = p?.restart;
    c[0] !== h || c[1] !== y ? (r = () => h?.(y, "route_error_recovery") ?? null, c[0] = h, c[1] = y, c[2] = r) : r = c[2];
    let m = r;
    c[3] !== f || c[4] !== y ? (l = (e, t) => {
      null != t && f?.(y, {
        failureStage: "route_exception"
      }, t)
    }, c[3] = f, c[4] = y, c[5] = l) : l = c[5];
    let T = l;
    return c[6] !== u || c[7] !== y || c[8] !== d ? (n = (0, t.jsx)(A.ArtifactLoadBlockingFailureReporter, {
      failureStage: "route_exception",
      source: u,
      spaceKey: y,
      surface: d
    }), c[6] = u, c[7] = y, c[8] = d, c[9] = n) : n = c[9], c[10] !== T || c[11] !== m || c[12] !== s ? (i = (0, t.jsx)(S.HatchSpacesErrorFallback, {
      onRetryError: T,
      onRetryStart: m,
      reset: s,
      surface: "space"
    }), c[10] = T, c[11] = m, c[12] = s, c[13] = i) : i = c[13], c[14] !== n || c[15] !== i ? (o = (0, t.jsxs)(t.Fragment, {
      children: [n, i]
    }), c[14] = n, c[15] = i, c[16] = o) : o = c[16], o
  }
  e.s(["ArtifactRouteErrorFallback", 0, T], 540934);
  var R = e.i(351321),
    C = e.i(345717),
    E = e.i(374785);

  function H(e) {
    let r, l, n, i, o, c, u, s = (0, a.c)(13),
      {
        className: y,
        headingLevel: d,
        HomeLink: p
      } = e,
      f = 1 === (void 0 === d ? 2 : d) ? "h1" : "h2";
    return s[0] !== y ? (r = (0, E.cn)("flex h-full flex-col items-center justify-center gap-4 py-16 text-center", y), s[0] = y, s[1] = r) : r = s[1], s[2] === Symbol.for("react.memo_cache_sentinel") ? (l = C.fbt._("Page not found", null, {
      hk: "3StvRl"
    }), s[2] = l) : l = s[2], s[3] !== f ? (n = (0, t.jsx)(f, {
      className: "text-primary text-title-3-emphasized",
      children: l
    }), s[3] = f, s[4] = n) : n = s[4], s[5] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("p", {
      className: "text-secondary text-subheadline",
      children: C.fbt._("The page you are looking for does not exist or has been moved.", null, {
        hk: "2tBmqG"
      })
    }), s[5] = i) : i = s[5], s[6] === Symbol.for("react.memo_cache_sentinel") ? (o = C.fbt._("Back to chat", null, {
      hk: "qFCUM"
    }), s[6] = o) : o = s[6], s[7] !== p ? (c = (0, t.jsx)(p, {
      className: "text-hatch-accent text-subheadline-emphasized hover:underline",
      children: o
    }), s[7] = p, s[8] = c) : c = s[8], s[9] !== r || s[10] !== n || s[11] !== c ? (u = (0, t.jsxs)("div", {
      className: r,
      children: [n, i, c]
    }), s[9] = r, s[10] = n, s[11] = c, s[12] = u) : u = s[12], u
  }
  var g = e.i(685231);

  function P(e) {
    let r, l = (0, a.c)(3),
      {
        children: n,
        className: i
      } = e;
    return l[0] !== n || l[1] !== i ? (r = (0, t.jsx)(R.default, {
      to: "/",
      className: i,
      children: n
    }), l[0] = n, l[1] = i, l[2] = r) : r = l[2], r
  }

  function b() {
    let e, r = (0, a.c)(1);
    return (0, g.useReportInitialLoadRouteContent)("unavailable", !0), r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(H, {
      HomeLink: P
    }), r[0] = e) : e = r[0], e
  }
  var L = e.i(306941),
    v = e.i(304117),
    x = e.i(546963),
    N = e.i(439393);

  function I(e, t) {
    if (null != e.activityKey) return e.activityKey;
    if (0 === e.paramNames.length) return e.path;
    let a = e.path;
    for (let r of e.paramNames) a = a.replace(`:${r}`, t[r] ?? "");
    return a
  }

  function k(e, t, a, r) {
    let l = new Map(e);
    if (l.set(a, {
        route: t.route,
        params: t.params,
        match: t,
        lastActiveAt: r
      }), l.size > 5) {
      let e = function(e, t) {
        let a = null,
          r = 1 / 0;
        for (let [l, n] of e) l !== t && n.lastActiveAt < r && (r = n.lastActiveAt, a = l);
        return a
      }(l, a);
      null != e && l.delete(e)
    }
    return l
  }
  var w = e.i(301970),
    F = e.i(863641);
  let K = (0, f.createClientLogger)("ShellRouter");

  function j(e) {
    let r, l = (0, a.c)(3),
      {
        error: n,
        reset: i,
        route: o
      } = e;
    return (0, g.useReportShellPrimaryContent)(o, "error"), l[0] !== n || l[1] !== i ? (r = (0, t.jsx)(m.HatchContentErrorFallback, {
      error: n,
      onRetry: i
    }), l[0] = n, l[1] = i, l[2] = r) : r = l[2], r
  }

  function U(e) {
    let {
      route: t
    } = e;
    return (0, g.useReportShellPrimaryContent)(t, "error"), null
  }

  function Y() {
    return (0, g.useReportInitialLoadRouteContent)("error"), null
  }

  function O(e) {
    let t, l = (0, a.c)(2),
      {
        identity: n
      } = e;
    return l[0] !== n ? (t = [n], l[0] = n, l[1] = t) : t = l[1], (0, r.useLayoutEffect)(D, t), null
  }

  function D() {
    (0, p.markInitialLoadPoint)("route_component_committed")
  }
  let M = (0, r.createContext)(null);
  e.s(["default", 0, function() {
    let e, p, f, S, R, C, E, H, P, D, B, G, z, $, Q = (0, a.c)(37),
      V = (0, l.usePathname)(),
      q = (0, l.useSearchParams)(),
      W = (0, i.useQueryClient)(),
      J = (0, c.useGatewayQueryContext)(),
      Z = (0, N.useShellRouteExperiments)(),
      X = (0, y.useSetPageTracePolicy)(),
      {
        isReady: ee
      } = (0, u.useHatchRpc)(),
      et = (0, d.useRisingEdgeCount)(ee);
    Q[0] !== et ? (e = [et], Q[0] = et, Q[1] = e) : e = Q[1];
    let ea = e;
    Q[2] !== V || Q[3] !== q ? (p = (0, s.resolveShellLocationMatch)(V, q, L.shellRoutes), Q[2] = V, Q[3] = q, Q[4] = p) : p = Q[4];
    let {
      directMatch: er,
      aliasRedirect: el,
      aliasMatch: en,
      match: ei
    } = p, eo = (0, _.useArtifactLoadAttemptReporter)();
    Q[5] !== ei ? (f = null != ei && (0, v.isLayoutOwnedChatShellRoutePath)(ei.route.path), Q[5] = ei, Q[6] = f) : f = Q[6];
    let ec = f;
    Q[7] !== Z || Q[8] !== J || Q[9] !== ei || Q[10] !== W ? (S = null == ei ? void 0 : (0, x.primeActiveShellRoute)(ei, {
      queryClient: W,
      gatewayCtx: J,
      experiments: Z
    }), Q[7] = Z, Q[8] = J, Q[9] = ei, Q[10] = W, Q[11] = S) : S = Q[11];
    let eu = S;
    Q[12] !== ei ? (R = () => !ei || (0, v.isLayoutOwnedChatShellRoutePath)(ei.route.path) || "unmount" === ei.route.activityRetention ? new Map : new Map([
      [I(ei.route, ei.params), {
        route: ei.route,
        params: ei.params,
        match: ei,
        lastActiveAt: Date.now()
      }]
    ]), Q[12] = ei, Q[13] = R) : R = Q[13];
    let [es, ey] = (0, r.useState)(R);
    if (Q[14] !== ei ? (C = () => {
        ey(e => {
          let t;
          if (!ei || (0, v.isLayoutOwnedChatShellRoutePath)(ei.route.path)) return e;
          let a = I(ei.route, ei.params);
          return t = k(e, ei, a, Date.now()), "unmount" === ei.route.activityRetention && t.delete(a), t
        })
      }, E = [ei], Q[14] = ei, Q[15] = C, Q[16] = E) : (C = Q[15], E = Q[16]), (0, r.useEffect)(C, E), Q[17] !== ei || Q[18] !== X ? (H = () => {
        ei && X(ei.tracePolicy)
      }, P = [ei, X], Q[17] = ei, Q[18] = X, Q[19] = H, Q[20] = P) : (H = Q[19], P = Q[20]), (0, r.useEffect)(H, P), Q[21] !== eu || Q[22] !== ei ? (B = () => {
        ei && null != eu && eu.catch(e => {
          K.error({
            error: e instanceof Error ? e : Error(String(e))
          }, `Route priming failed for: ${ei.route.displayName}`)
        })
      }, D = [eu, ei], Q[21] = eu, Q[22] = ei, Q[23] = D, Q[24] = B) : (D = Q[23], B = Q[24]), (0, r.useEffect)(B, D), Q[25] !== en || Q[26] !== el || Q[27] !== er ? (G = () => {
        er || null == el || null == en || window.history.replaceState(null, "", el)
      }, z = [er, el, en], Q[25] = en, Q[26] = el, Q[27] = er, Q[28] = G, Q[29] = z) : (G = Q[28], z = Q[29]), (0, r.useLayoutEffect)(G, z), !ei) {
      let e;
      return Q[30] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(b, {}), Q[30] = e) : e = Q[30], e
    }
    if (Q[31] !== eo || Q[32] !== ec || Q[33] !== ei || Q[34] !== es || Q[35] !== ea) {
      let e = ec ? null : I(ei.route, ei.params),
        a = null != e ? k(es, ei, e, Date.now()) : es;
      $ = (0, t.jsx)(t.Fragment, {
        children: Array.from(a.entries()).map(a => {
          let [l, i] = a, c = l === e, u = c ? ei : i.match, s = c ? ei.params : i.params, y = "space" === i.route.panelType ? "viewer" : "space_edit" === i.route.panelType ? "editor" : null, d = null == y ? null : (s.slug ?? "").trim() || null, p = (0, g.getShellPrimaryContentRoute)(u), f = null != i.route.errorFallback ? (0, t.jsxs)(t.Fragment, {
            children: [c ? null == p ? (0, t.jsx)(Y, {}) : (0, t.jsx)(U, {
              route: p
            }) : null, i.route.errorFallback]
          }) : e => {
            let {
              error: a,
              reset: r
            } = e;
            return (0, t.jsxs)(t.Fragment, {
              children: [c && null == p ? (0, t.jsx)(Y, {}) : null, null != d && null != y ? (0, t.jsx)(T, {
                blockerSource: "shell_route",
                reset: r,
                spaceKey: d,
                surface: y
              }) : null == p ? (0, t.jsx)(m.HatchContentErrorFallback, {
                error: a,
                onRetry: r
              }) : (0, t.jsx)(j, {
                error: a,
                reset: r,
                route: p
              })]
            })
          };
          return (0, t.jsx)(r.Activity, {
            mode: c ? "visible" : "hidden",
            children: (0, t.jsx)(g.ShellPrimaryContentIdentityProvider, {
              identity: u.identity,
              isActive: c,
              children: (0, t.jsx)(M.Provider, {
                value: u,
                children: (0, t.jsx)(n.QueryErrorResetBoundary, {
                  children: e => {
                    let {
                      reset: a
                    } = e;
                    return (0, t.jsx)(h.EctoErrorBoundary, {
                      surface: function(e) {
                        switch (e) {
                          case w.EctoRouteTracePolicy.HATCH:
                            return F.HATCH_SENTRY_SURFACES.CHAT;
                          case w.EctoRouteTracePolicy.HATCH_AGENTS:
                            return F.HATCH_SENTRY_SURFACES.SHARED_AGENTS;
                          case w.EctoRouteTracePolicy.HATCH_LIBRARY:
                            return F.HATCH_SENTRY_SURFACES.LIBRARY;
                          case w.EctoRouteTracePolicy.HATCH_LIBRARY_RECENT:
                            return F.HATCH_SENTRY_SURFACES.LIBRARY_RECENT;
                          case w.EctoRouteTracePolicy.HATCH_LIBRARY_ARTIFACTS:
                            return F.HATCH_SENTRY_SURFACES.LIBRARY_SPACES;
                          case w.EctoRouteTracePolicy.HATCH_LIBRARY_DOCUMENTS:
                            return F.HATCH_SENTRY_SURFACES.LIBRARY_DOCUMENTS;
                          case w.EctoRouteTracePolicy.HATCH_LIBRARY_MEDIA:
                            return F.HATCH_SENTRY_SURFACES.LIBRARY_MEDIA;
                          case w.EctoRouteTracePolicy.HATCH_LIBRARY_FILES:
                            return F.HATCH_SENTRY_SURFACES.LIBRARY_FILES;
                          case w.EctoRouteTracePolicy.HATCH_LIBRARY_PODCASTS:
                            return F.HATCH_SENTRY_SURFACES.LIBRARY_PODCASTS;
                          case w.EctoRouteTracePolicy.HATCH_ARTIFACTS:
                            return F.HATCH_SENTRY_SURFACES.ARTIFACTS;
                          case w.EctoRouteTracePolicy.HATCH_GOALS:
                            return F.HATCH_SENTRY_SURFACES.GOALS;
                          case w.EctoRouteTracePolicy.HATCH_FEED:
                            return F.HATCH_SENTRY_SURFACES.FEED;
                          case w.EctoRouteTracePolicy.HATCH_IDEAS:
                            return F.HATCH_SENTRY_SURFACES.IDEAS;
                          case w.EctoRouteTracePolicy.HATCH_SPACE:
                            return F.HATCH_SENTRY_SURFACES.SPACE;
                          case w.EctoRouteTracePolicy.HATCH_SPACE_EDIT:
                            return F.HATCH_SENTRY_SURFACES.SPACE_EDIT;
                          case w.EctoRouteTracePolicy.HATCH_SAVED_SPACE:
                            return F.HATCH_SENTRY_SURFACES.SAVED_SPACE;
                          case w.EctoRouteTracePolicy.HATCH_SHARE:
                            return F.HATCH_SENTRY_SURFACES.SHARE;
                          case w.EctoRouteTracePolicy.HATCH_FLOCK:
                            return F.HATCH_SENTRY_SURFACES.FLOCK;
                          case w.EctoRouteTracePolicy.HATCH_ARTIFACT_SHARE:
                            return F.HATCH_SENTRY_SURFACES.ARTIFACT_SHARE;
                          case w.EctoRouteTracePolicy.HATCH_MEDIA_SHARE:
                            return F.HATCH_SENTRY_SURFACES.MEDIA_SHARE;
                          case w.EctoRouteTracePolicy.HATCH_CONNECT:
                            return F.HATCH_SENTRY_SURFACES.CONNECT;
                          case w.EctoRouteTracePolicy.HATCH_SETTINGS:
                            return F.HATCH_SENTRY_SURFACES.SETTINGS;
                          case w.EctoRouteTracePolicy.STORYBOOK:
                            return F.HATCH_SENTRY_SURFACES.ROOT
                        }
                      }(i.route.tracePolicy),
                      withQueryReset: !1,
                      resetKeys: ea,
                      onError: c && null != d && null != y ? () => eo?.reportBlockingFailure(d, y, "shell_route", {
                        failureStage: "route_exception"
                      }) : void 0,
                      fallback: f,
                      onReset: () => {
                        a(), i.route.forceRemountOnError && ey(e => {
                          if (!e.has(l)) return e;
                          let t = new Map(e);
                          return t.delete(l), t
                        })
                      },
                      children: (0, t.jsx)(o.HeroPlaceholder, {
                        fallback: i.route.pending ?? null,
                        name: `shell-route:${i.route.path}`,
                        children: (0, t.jsxs)(t.Fragment, {
                          children: ["editor" === y && null != d ? (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(i.route.component, {
                              params: s,
                              searchParams: u.searchParams
                            }), (0, t.jsx)(A.ArtifactLoadRecoveryCommit, {
                              spaceKey: d,
                              surface: "editor"
                            })]
                          }) : (0, t.jsx)(i.route.component, {
                            params: s,
                            searchParams: u.searchParams
                          }), c ? (0, t.jsx)(O, {
                            identity: u.identity
                          }) : null]
                        })
                      })
                    })
                  }
                })
              })
            })
          }, l)
        })
      }), Q[31] = eo, Q[32] = ec, Q[33] = ei, Q[34] = es, Q[35] = ea, Q[36] = $
    } else $ = Q[36];
    return $
  }, "useShellRouteContext", 0, function() {
    let e = (0, r.useContext)(M);
    if (!e) throw Error("useShellRouteContext must be used within <ShellRouter>.");
    return e
  }], 401605)
}, 685231, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(519172),
    r = e.i(871157),
    l = e.i(720756),
    n = e.i(535678),
    i = e.i(322095),
    o = e.i(304117);
  let c = Object.freeze({
      availability: Object.freeze({
        gatewayReady: !1,
        online: !1,
        pageVisible: !1
      }),
      generation: 0,
      gatewayIdentity: "",
      identity: "",
      outcome: null,
      phase: "inactive",
      route: null,
      surfaceCommitted: !1
    }),
    u = c,
    s = 1,
    y = new Set,
    d = (0, a.createContext)(null);

  function p(e) {
    if (e !== u)
      for (let t of (u = Object.freeze(e), y)) t()
  }

  function f(e, t) {
    "u" > typeof performance && "function" == typeof performance.mark && performance.mark(`hatch:${e}:${t}`)
  }

  function h(e) {
    return e.gatewayReady && e.online && e.pageVisible
  }

  function m(e) {
    var t;
    if (null == e.outcome || null == e.route) return void p(e);
    if (e.surfaceCommitted && h(e.availability) && ("content" === (t = e.outcome) || "empty" === t)) {
      "post_content_eligible" !== u.phase && (f("post_content_eligible", e.route), (0, n.markInitialLoadPoint)("post_content_eligible")), p({
        ...e,
        phase: "post_content_eligible"
      });
      return
    }
    p({
      ...e,
      phase: "primary_content_settled"
    })
  }

  function S(e) {
    let t = e?.route.path;
    return t === o.SHELL_PATH.chat || t === o.SHELL_PATH.thread || t === o.SHELL_PATH.threadDraft ? "chat" : t === o.SHELL_PATH.ideas ? "ideas" : t === o.SHELL_PATH.goals || t === o.SHELL_PATH.goal ? "goals" : t === o.SHELL_PATH.feed ? "feed" : t === o.SHELL_PATH.libraryArtifact ? null : t?.startsWith("/library/") === !0 ? "library" : null
  }

  function A(e, t) {
    return (0, r.gatewayTargetKey)(e, t)
  }

  function _(e) {
    if ("inactive" === u.phase) return;
    let t = {
      ...u.availability,
      ...e
    };
    (t.gatewayReady !== u.availability.gatewayReady || t.online !== u.availability.online || t.pageVisible !== u.availability.pageVisible) && m({
      ...u,
      availability: t
    })
  }

  function T() {
    return u
  }

  function R(e) {
    return y.add(e), () => y.delete(e)
  }

  function C() {
    return c
  }
  e.s(["ShellPrimaryContentIdentityProvider", 0, function({
    children: e,
    identity: t,
    isActive: r
  }) {
    return (0, a.createElement)(d.Provider, {
      value: {
        identity: t,
        isActive: r
      }
    }, e)
  }, "beginShellPrimaryContentLifecycle", 0, function(e, t, a, r) {
    let l = S(e);
    if (null == l || null == e) return "inactive" !== u.phase && p(c), u;
    let n = A(t, a);
    return u.route === l && u.identity === e.identity && u.gatewayIdentity === n ? _(r) : p({
      availability: r,
      generation: s++,
      gatewayIdentity: n,
      identity: e.identity,
      outcome: null,
      phase: "loading",
      route: l,
      surfaceCommitted: !1
    }), u
  }, "getShellPrimaryContentGatewayIdentity", 0, A, "getShellPrimaryContentRoute", 0, S, "isShellPostContentEligibleForRoute", 0, function(e, t, a, r, l) {
    return (null == l || t?.identity === l) && (null == S(t) || null != t && "post_content_eligible" === e.phase && e.identity === t.identity && e.gatewayIdentity === A(a, r))
  }, "isShellPrimaryContentFailureForRoute", 0, function(e, t, a, r, l) {
    return (null == l || t?.identity === l) && null != t && e.surfaceCommitted && ("error" === e.outcome || "unavailable" === e.outcome) && e.identity === t.identity && e.gatewayIdentity === A(a, r)
  }, "isShellSafetyWorkEligibleForRoute", 0, function(e, t, a, r) {
    return null == S(t) || null != t && "inactive" !== e.phase && h(e.availability) && e.identity === t.identity && e.gatewayIdentity === A(a, r)
  }, "rearmShellPrimaryContentCommit", 0, function() {
    u.surfaceCommitted && p({
      ...u,
      phase: "primary_content_settled",
      surfaceCommitted: !1
    })
  }, "updateShellPrimaryContentAvailability", 0, _, "useReportInitialLoadRouteContent", 0, function(e, r) {
    let l, n, o = (0, t.c)(7),
      c = (0, a.useContext)(d),
      u = c?.isActive ?? r ?? !1,
      s = c?.identity ?? null;
    o[0] !== u || o[1] !== e ? (l = () => {
      u && null != e && (0, i.markInitialLoadPrimaryContentVisible)(e)
    }, o[0] = u, o[1] = e, o[2] = l) : l = o[2], o[3] !== s || o[4] !== u || o[5] !== e ? (n = [s, u, e], o[3] = s, o[4] = u, o[5] = e, o[6] = n) : n = o[6], (0, a.useLayoutEffect)(l, n)
  }, "useReportShellPrimaryContent", 0, function(e, r, n) {
    let o, c, s = (0, t.c)(9),
      {
        gatewayUrl: y,
        vmName: p,
        isReady: h
      } = (0, l.useGatewayQueryContext)(),
      S = (0, a.useContext)(d),
      _ = n ?? S?.identity,
      T = S?.isActive ?? null != n;
    s[0] !== y || s[1] !== _ || s[2] !== T || s[3] !== h || s[4] !== r || s[5] !== e || s[6] !== p ? (o = () => {
      T && h && null != r && null != _ && (u.route !== e || u.identity !== _ || u.gatewayIdentity !== A(y, p) || "inactive" === u.phase || u.outcome === r && u.surfaceCommitted && ("primary_content_settled" === u.phase || "post_content_eligible" === u.phase) || (f("primary_content_settled", e), (0, i.markInitialLoadPrimaryContentVisible)(r), m({
        ...u,
        outcome: r,
        phase: "primary_content_settled",
        surfaceCommitted: !0
      })))
    }, c = [y, _, T, h, r, e, p], s[0] = y, s[1] = _, s[2] = T, s[3] = h, s[4] = r, s[5] = e, s[6] = p, s[7] = o, s[8] = c) : (o = s[7], c = s[8]), (0, a.useEffect)(o, c)
  }, "useShellPrimaryContentIdentity", 0, function() {
    return (0, a.useContext)(d)?.identity ?? null
  }, "useShellPrimaryContentSnapshot", 0, function() {
    return (0, a.useSyncExternalStore)(R, T, C)
  }])
}, 306941, e => {
  "use strict";
  var t = e.i(301970),
    a = e.i(519172),
    r = e.i(535678),
    l = e.i(915637);
  let n = new WeakMap;

  function i(e, t) {
    let l = null == t.loader ? void 0 : async a => {
      let l = (0, r.beginInitialLoadSpan)("route_loader", e.tracePolicy);
      try {
        await t.loader?.(a), (0, r.endInitialLoadSpan)(l, "success")
      } catch (e) {
        throw (0, r.endInitialLoadSpan)(l, "error"), e
      }
    }, i = {
      ...e,
      loader: l,
      errorFallback: t.errorFallback,
      forceRemountOnError: t.forceRemountOnError
    };
    if ("loadComponent" in t && "function" == typeof t.loadComponent) {
      let {
        Component: l,
        preload: o
      } = function(e, t) {
        let l = n.get(e);
        if (null != l) return l;
        let i = null,
          o = null,
          c = () => {
            if (i) return Promise.resolve(i);
            if (!o) {
              let a = (0, r.beginInitialLoadSpan)("route_chunk", t);
              o = e().then(e => (i = e, (0, r.endInitialLoadSpan)(a, "success"), e), e => {
                throw o = null, (0, r.endInitialLoadSpan)(a, "error"), e
              })
            }
            return o
          },
          u = (0, a.lazy)(c),
          s = {
            Component: e => i ? (0, a.createElement)(i.default, e) : (0, a.createElement)(u, e),
            preload: c
          };
        return n.set(e, s), s
      }(t.loadComponent, e.tracePolicy);
      return Object.freeze({
        ...i,
        component: l,
        preload: o,
        pending: t.pending
      })
    }
    return Object.freeze({
      ...i,
      component: t.component
    })
  }
  var o = e.i(304117),
    c = e.i(834903),
    u = e.i(576833),
    s = e.i(671204),
    y = e.i(751444);
  let d = () => e.A(826129).then(e => ({
      default: e.HatchLibraryRoute
    })),
    p = () => e.A(920341).then(e => ({
      default: e.HatchSharedAgentsRoute
    }));

  function f({
    searchParams: e
  }) {
    let t, a = e.get("view");
    switch (e.delete("view"), a) {
      case "images":
        t = `${o.SHELL_PATH.libraryMedia}?view=images`;
        break;
      case "video":
      case "videos":
        t = `${o.SHELL_PATH.libraryMedia}?view=video`;
        break;
      case "media":
        t = o.SHELL_PATH.libraryMedia;
        break;
      case "files":
        t = o.SHELL_PATH.libraryFiles;
        break;
      case "documents":
      case "your_files":
      case "search":
        t = `${o.SHELL_PATH.libraryArtifacts}?view=documents`;
        break;
      case "web":
      case "spaces":
        t = `${o.SHELL_PATH.libraryArtifacts}?view=web`;
        break;
      default:
        t = o.SHELL_PATH.libraryArtifacts
    }
    let r = e.toString();
    return r ? `${t}${t.includes("?")?"&":"?"}${r}` : t
  }

  function h(e) {
    let t = (0, l.getShellRouteMetadata)(e.path);
    return "loadComponent" in e && void 0 === e.pending ? i(t, {
      ...e,
      pending: (0, c.pickHatchShellRouteFallback)(e.path).body
    }) : i(t, e)
  }
  let m = [h({
    path: o.SHELL_PATH.chat,
    loadComponent: u.loadHatchChatRoute,
    panelType: "chat",
    tracePolicy: t.EctoRouteTracePolicy.HATCH,
    displayName: "Chat"
  }), h({
    path: o.SHELL_PATH.threadDraft,
    loadComponent: u.loadHatchChatRoute,
    panelType: "chat",
    tracePolicy: t.EctoRouteTracePolicy.HATCH,
    displayName: "New Thread"
  }), h({
    path: o.SHELL_PATH.thread,
    loadComponent: u.loadHatchChatRoute,
    panelType: "chat",
    tracePolicy: t.EctoRouteTracePolicy.HATCH,
    displayName: "Thread"
  }), h({
    path: o.SHELL_PATH.libraryRecent,
    loadComponent: d,
    activityKey: "library",
    panelType: "files",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_LIBRARY_RECENT,
    displayName: "Library: Recent",
    searchParams: s.libraryRouteSearchParamsSchema
  }), h({
    path: o.SHELL_PATH.libraryArtifacts,
    aliases: [{
      path: o.SHELL_ALIAS_PATH.library,
      resolveRedirect: f
    }, {
      path: o.SHELL_ALIAS_PATH.libraryTrailingSlash,
      resolveRedirect: f
    }, {
      path: o.SHELL_ALIAS_PATH.spaces
    }, {
      path: o.SHELL_ALIAS_PATH.spacesTrailingSlash
    }],
    loadComponent: d,
    activityKey: "library",
    panelType: "files",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_LIBRARY_ARTIFACTS,
    displayName: "Library: All Artifacts",
    searchParams: s.libraryRouteSearchParamsSchema
  }), h({
    path: o.SHELL_PATH.libraryDocuments,
    loadComponent: d,
    activityKey: "library",
    panelType: "files",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_LIBRARY_DOCUMENTS,
    displayName: "Library: Documents",
    searchParams: s.libraryRouteSearchParamsSchema
  }), h({
    path: o.SHELL_PATH.libraryMedia,
    loadComponent: d,
    activityKey: "library",
    panelType: "files",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_LIBRARY_MEDIA,
    displayName: "Library: All Media",
    searchParams: s.libraryRouteSearchParamsSchema
  }), h({
    path: o.SHELL_PATH.libraryFiles,
    loadComponent: d,
    activityKey: "library",
    panelType: "files",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_LIBRARY_FILES,
    displayName: "Library: System Files",
    searchParams: s.libraryRouteSearchParamsSchema
  }), h({
    path: o.SHELL_PATH.libraryPodcasts,
    loadComponent: () => e.A(50499).then(e => ({
      default: e.HatchPodcastsRoute
    })),
    panelType: "files",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_LIBRARY_PODCASTS,
    displayName: "Podcasts",
    loader: async ({
      queryClient: t,
      gatewayCtx: a
    }) => {
      if (!a.gatewayUrl) return;
      let {
        podcastManifestQuery: r
      } = await e.A(579923);
      await r.prefetch(t, {
        gatewayUrl: a.gatewayUrl
      }, a)
    }
  }), h({
    path: o.SHELL_PATH.artifacts,
    loadComponent: u.loadHatchArtifactsRoute,
    panelType: "artifacts",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_ARTIFACTS,
    displayName: "Artifacts"
  }), h({
    path: o.SHELL_PATH.ideas,
    loadComponent: u.loadHatchIdeasRoute,
    activityKey: "ideas",
    panelType: "ideas",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_IDEAS,
    displayName: "Ideas",
    loader: async ({
      queryClient: t,
      gatewayCtx: a,
      experiments: r,
      searchParams: l
    }) => {
      if (!a.gatewayUrl) return;
      let {
        exploreIdeasInfiniteQuery: n,
        exploreIdeaPreviewQuery: i,
        EXPLORE_IDEAS_SECTION_PAGE_SIZE: o
      } = await e.A(686887), c = {
        gatewayUrl: a.gatewayUrl,
        gatewayScopeKey: a.gatewayScopeKey ?? a.targetKey,
        colorIcons: r.ideaColorIcons
      }, u = l?.ideaId ?? null;
      await Promise.all([n.prefetch(t, {
        ...c,
        pageSize: o
      }, a), null != u && a.isReady ? i.prefetch(t, {
        ...c,
        ideaCardId: u
      }, a) : void 0])
    }
  }), h({
    path: o.SHELL_PATH.feed,
    loadComponent: u.loadHatchFeedRoute,
    activityKey: "feed",
    panelType: "feed",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_FEED,
    displayName: "Feed"
  }), h({
    path: o.SHELL_PATH.libraryArtifact,
    aliases: [{
      path: o.SHELL_ALIAS_PATH.space
    }],
    loadComponent: () => e.A(747487).then(e => ({
      default: e.HatchSpaceRoute
    })),
    panelType: "space",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_SPACE,
    displayName: "Artifact",
    loader: async ({
      queryClient: t,
      gatewayCtx: a,
      params: r
    }) => {
      let l = (r.slug ?? "").trim(),
        n = a.gatewayUrl;
      if (0 === l.length || null == n) return;
      let i = (0, y.beginSpaceCatalogReconciliation)(t, n, l);
      try {
        let {
          ensureOwnedSpaceCatalogEntry: r
        } = await e.A(18327), o = await r({
          gatewayCtx: a,
          queryClient: t,
          slug: l
        });
        null != i && ("error" === o.status ? (0, y.failSpaceCatalogReconciliation)(t, n, l, i) : (0, y.finishSpaceCatalogReconciliation)(t, n, l, i))
      } catch (e) {
        throw null != i && (0, y.failSpaceCatalogReconciliation)(t, n, l, i), e
      }
    }
  }), h({
    path: o.SHELL_PATH.spaceEdit,
    loadComponent: () => e.A(398842).then(e => ({
      default: e.HatchSpaceEditRoute
    })),
    panelType: "space_edit",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_SPACE_EDIT,
    displayName: "Edit artifact"
  }), h({
    path: o.SHELL_PATH.savedSpace,
    loadComponent: () => e.A(409189).then(e => ({
      default: e.HatchSavedSpaceRoute
    })),
    activityRetention: "unmount",
    panelType: "space",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_SAVED_SPACE,
    displayName: "Saved Artifact"
  }), h({
    path: o.SHELL_PATH.goals,
    loadComponent: u.loadHatchGoalsRoute,
    activityKey: "goals",
    panelType: "goals",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_GOALS,
    displayName: "Goals"
  }), h({
    path: o.SHELL_PATH.goal,
    loadComponent: u.loadHatchGoalsRoute,
    activityKey: "goals",
    panelType: "goals",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_GOALS,
    displayName: "Goal"
  }), h({
    path: o.SHELL_PATH.sharedAgents,
    loadComponent: p,
    activityKey: "agents",
    panelType: "agents",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_AGENTS,
    displayName: "Shared Agents"
  }), h({
    path: o.SHELL_PATH.sharedAgentsClaim,
    loadComponent: p,
    activityKey: "agents",
    activityRetention: "unmount",
    panelType: "agents",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_AGENTS,
    displayName: "Accept Shared Agent"
  }), h({
    path: o.SHELL_PATH.sharedAgentsSharedWithYou,
    loadComponent: p,
    activityKey: "agents",
    panelType: "agents",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_AGENTS,
    displayName: "Shared with you"
  }), h({
    path: o.SHELL_PATH.sharedAgent,
    loadComponent: p,
    activityKey: "agents",
    panelType: "agents",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_AGENTS,
    displayName: "Shared Agent"
  })];
  e.s(["shellRoutes", 0, m], 306941)
}]);

//# debugId=75e5916c-723c-fcd6-4416-68a1d43f0aa0
//# sourceMappingURL=0ob_4ucoybenz.js.map