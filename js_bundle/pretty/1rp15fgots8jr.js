;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "0bd3741f-436a-ed25-b861-d3fac976daa0")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 890169, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(519172),
    n = e.i(479223),
    r = e.i(345717),
    i = e.i(848048),
    s = e.i(393202),
    o = e.i(271954);
  e.i(150722);
  var u = e.i(255859);
  let c = u.LOGGED_IN_PRODUCT_BRAND.fullName;
  var l = e.i(359783),
    d = e.i(863641),
    h = e.i(281539),
    f = e.i(304117),
    p = e.i(823173),
    g = e.i(829051),
    m = e.i(508180),
    _ = e.i(611906),
    y = e.i(175286),
    v = e.i(696254),
    T = e.i(791661),
    S = e.i(134348),
    A = e.i(438451),
    w = e.i(925301),
    C = e.i(871157),
    E = e.i(713140),
    I = e.i(272382),
    b = e.i(218105),
    R = e.i(144166);
  let N = (0, l.createClientLogger)("HatchTabNotification");

  function P(e) {
    let t = e?.trim() ?? "";
    return t.length > 0 ? t : null
  }

  function H(e, t, a) {
    let n = Object.entries(e.activity.snapshotPendingApprovalsById).filter(([t, a]) => {
      let n = P(a) ?? S.PENDING_APPROVAL_SNAPSHOT_KEY;
      return !0 !== e.activity.resolvedApprovalIdsById[t] && (0, S.isPendingApprovalStatus)(e.activity.taskStatusesByTaskId[n] ?? "")
    });
    if (1 !== n.length) return {
      pathname: "/"
    };
    let [r, i] = n[0], s = e.activity.snapshotPendingApprovalScopesById[r], o = null == i ? void 0 : e.activity.liveTaskScopesByTaskId[i];
    return {
      pathname: function(e, t, a) {
        let n = P(e?.threadId),
          r = e?.isThread === !0 ? P(e.sessionId) : null,
          i = n ?? r;
        if (null == i || e?.isThread === !1) return "/";
        let s = a.get(i);
        if (s?.is_primary === !0) return "/";
        if (s?.is_thread === !0 && !0 !== s.archived) return (0, A.buildHatchThreadPath)(i);
        if (t.currentChatSessionId === i) {
          if ("main" === t.currentChatRouteKey) return "/";
          if (t.currentChatRouteKey === `thread:${i}`) return (0, A.buildHatchThreadPath)(i)
        }
        return e?.isThread === !0 ? (0, A.buildHatchThreadPath)(i) : "/"
      }(s?.threadId != null ? s : o ?? s ?? null, e.activity, function(e, t) {
        let a = new Map;
        for (let n of e.getQueryData(E.threadSessionsQueryKeys.list(t)) ?? []) a.set(n.session_id, n);
        return a
      }(t, a))
    }
  }

  function O(e) {
    let t = new URLSearchParams({
      [b.HATCH_STATUS_PANEL_QUERY_PARAM]: b.HATCH_STATUS_PANEL_APPROVALS_VALUE
    });
    return `${e}?${t.toString()}`
  }

  function L(e, t) {
    return "main" === t ? e.is_primary : e.session_id === t
  }

  function k(e) {
    let t = e.chat;
    if (null == t.lastSeenTimestamp) return 0;
    let a = 0,
      n = (0, g.getVisibleTranscriptMessageIds)(t.messageIds, t.messagesById);
    for (let e = n.length - 1; e >= 0; e--) {
      let r = t.messagesById[n[e]];
      r && !r.isTextStreaming && !r.isBackground && "user" !== r.role && "system" !== r.role && ("assistant" !== r.role || null == r.messageId || 0 !== r.content.trim().length) && r.createdAt > t.lastSeenTimestamp && a++
    }
    return a
  }

  function F(e) {
    let t = k(e),
      a = (0, S.countPendingApprovalNotifications)(e.activity);
    return {
      unreadCount: t,
      pendingApprovalCount: a,
      totalCount: t + a
    }
  }

  function B(e) {
    return {
      unread_count: e.unreadCount,
      pending_approval_count: e.pendingApprovalCount,
      notification_count: e.totalCount
    }
  }

  function K(e, t) {
    return t > 0 ? `(${t}) ${e}` : e
  }

  function Q(e) {
    return e.split(/[-_\s]+/).filter(Boolean).map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")
  }

  function M(e, t) {
    if (!e.startsWith(t)) return null;
    let [a] = e.slice(t.length).split("/", 1);
    return a && a.length > 0 ? function(e) {
      try {
        return decodeURIComponent(e)
      } catch {
        return e
      }
    }(a) : null
  }
  var U = e.i(543912),
    D = e.i(867258),
    G = e.i(281918),
    q = e.i(942970),
    W = e.i(720756),
    x = e.i(644036),
    V = e.i(724480);
  async function $({
    queryClient: e,
    gateway: t,
    colorIcons: a
  }) {
    let n = t.gatewayUrl;
    if (null == n) return !1;
    if (!t.isReady) try {
      await t.waitForTransport()
    } catch {
      return !1
    }
    let r = t.gatewayScopeKey ?? t.targetKey;
    try {
      return await Promise.all([V.libraryArtifactsQuery.prefetch(e, {
        gatewayUrl: n,
        gatewayScopeKey: r
      }, t), q.feedListQuery.prefetch(e, {
        gatewayUrl: n,
        promptId: null
      }, t), q.feedPromptQuery.prefetch(e, {
        gatewayUrl: n
      }, t), x.goalsListQuery.prefetch(e, {
        gatewayUrl: r
      }, t), x.goalsTrackingListQuery.prefetch(e, {
        gatewayUrl: r
      }, t), D.exploreIdeasInfiniteQuery.prefetch(e, {
        gatewayUrl: n,
        gatewayScopeKey: r,
        pageSize: G.EXPLORE_IDEAS_SECTION_PAGE_SIZE,
        colorIcons: a
      }, t)]), !0
    } catch {
      return !1
    }
  }
  var j = e.i(576833);

  function z() {
    for (let e of [j.loadHatchArtifactsRoute, j.loadHatchFeedRoute, j.loadHatchGoalsRoute, j.loadHatchIdeasRoute]) e().catch(Y)
  }

  function Y() {}
  e.s(["default", 0, function(e) {
    let l, g, S, P, D, G, q, x, V, j, Y, Z, X, J, ee, et, ea, en = (0, t.c)(1),
      {
        gatewayUrl: er
      } = e;
    return D = (0, t.c)(7), G = (0, s.useQueryClient)(), q = (0, W.useGatewayQueryContext)(), x = (0, U.useHatchIdeaColorIconsWithoutExposure)(), D[0] === Symbol.for("react.memo_cache_sentinel") ? (g = new Set, D[0] = g) : g = D[0], V = (0, a.useRef)(g), j = q.gatewayScopeKey ?? q.targetKey, D[1] !== x || D[2] !== q || D[3] !== G || D[4] !== j ? (S = () => {
        null == q.gatewayUrl || V.current.has(j) || (V.current.add(j), $({
          queryClient: G,
          gateway: q,
          colorIcons: x
        }).then(e => {
          e || V.current.delete(j)
        }))
      }, P = [x, q, G, j], D[1] = x, D[2] = q, D[3] = G, D[4] = j, D[5] = S, D[6] = P) : (S = D[5], P = D[6]), (0, a.useEffect)(S, P), en[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [], en[0] = l) : l = en[0], (0, a.useEffect)(z, l),
      function() {
        var e, t, l, g;
        let S = (0, o.useLocation)(),
          P = "chat" === (0, _.panelFromPathname)(S.pathname),
          U = function(e) {
            switch (e?.kind) {
              case "thread":
                return e.sessionId;
              case "draft":
              case "invalid_thread":
                return null;
              default:
                return "main"
            }
          }((0, A.parseHatchChatRoute)(S.pathname)),
          D = (0, a.useRef)(P),
          G = (0, a.useRef)(U);
        D.current = P, G.current = U;
        let q = (0, v.useIdentityName)(),
          W = (0, v.useHatchAssistantCustomName)(),
          {
            data: x = []
          } = (0, T.useHatchSpacesQuery)(),
          V = (0, a.useMemo)(() => x.filter(e => e.is_saved_foreign_share && null != e.shortcode), [x]),
          $ = (0, a.useMemo)(() => {
            let e, t = function(e, t, a) {
              let n = (0, f.getArtifactViewerSlug)(e) ?? M(e, "/edit-space/");
              if (null != n) {
                let e = t.find(e => e.slug === n)?.name.trim();
                return e && e.length > 0 ? e : Q(n)
              }
              let r = M(e, "/saved-space/");
              if (null != r) {
                let e = a.find(e => e.shortcode === r || e.shortcode?.endsWith(`-${r}`))?.name.trim();
                return e && e.length > 0 ? e : Q(r)
              }
              return "/" === e || e.startsWith("/thread/") ? "Chat" : "/library" === e || e.startsWith("/library/") ? "Library" : "/artifacts" === e || e.startsWith("/artifacts/") ? "Artifacts" : "/ideas" === e || e.startsWith("/ideas/") ? "Ideas" : "/goals" === e || e.startsWith("/goals/") ? "Goals" : "/feed" === e || e.startsWith("/feed/") ? "Feed" : "/saved-space" === e ? "Saved Artifact" : ""
            }(S.pathname, x, V);
            return (0, u.formatProductTitle)(t, (e = q.trim()).length > 0 ? e : c)
          }, [q, S.pathname, V, x]),
          [j, z] = (0, a.useState)(null),
          Y = j?.counts.pendingApprovalCount ?? 1,
          Z = (e = Y, t = W, 1 === e ? null == t ? r.fbs._("Review the request so the agent can continue.", null, {
            hk: "3WmIfg"
          }).toString() : r.fbs._("Review the request so {assistant} can continue.", [r.fbs._param("assistant", t)], {
            hk: "mUzWE"
          }).toString() : null == t ? r.fbs._("Review the requests so the agent can continue.", null, {
            hk: "2E2bPD"
          }).toString() : r.fbs._("Review the requests so {assistant} can continue.", [r.fbs._param("assistant", t)], {
            hk: "3HmaNX"
          }).toString()),
          X = (l = Y, g = W, 1 === l ? null == g ? r.fbs._("The agent needs approval", null, {
            hk: "3eNZ6m"
          }).toString() : r.fbs._("{assistant} needs approval", [r.fbs._param("assistant", g)], {
            hk: "3RfvoQ"
          }).toString() : null == g ? r.fbs._("The agent needs {approvalCount} approvals", [r.fbs._param("approvalCount", String(l))], {
            hk: "LHn9z"
          }).toString() : r.fbs._("{assistant} needs {approvalCount} approvals", [r.fbs._param("assistant", g), r.fbs._param("approvalCount", String(l))], {
            hk: "4FOArx"
          }).toString()),
          J = (0, a.useRef)($);
        J.current = $;
        let {
          sendRequest: ee,
          onEvent: et,
          gatewayUrl: ea,
          vmName: en
        } = (0, y.useHatchRpc)(), {
          navigateWithinHatch: er
        } = (0, I.useHatchNavigation)(), ei = (0, s.useQueryClient)(), es = (0, i.useInteractionLoggerWithLazyData)(), eo = (0, a.useRef)(es);
        eo.current = es;
        let eu = (0, a.useRef)(er);
        eu.current = er;
        let ec = (0, a.useRef)(ei);
        ec.current = ei;
        let el = (0, a.useRef)((0, C.gatewayTargetKey)(ea, en));
        el.current = (0, C.gatewayTargetKey)(ea, en);
        let ed = (0, a.useRef)(null),
          eh = (0, a.useRef)(0),
          ef = (0, a.useRef)(0);
        (0, a.useEffect)(() => {
          if (null == j || j.sequence <= ef.current) return;
          ef.current = j.sequence, ed.current?.close(), ed.current = null;
          let e = function(e, t, a, n) {
            if (!("Notification" in window && "granted" === window.Notification.permission)) return null;
            try {
              let r = (0, R.readDocumentFaviconHref)() ?? void 0,
                i = {
                  badge: r,
                  body: t,
                  data: {
                    hatchTarget: O(n.pathname)
                  },
                  icon: a ?? r,
                  renotify: !0,
                  requireInteraction: !0,
                  tag: "hatch_pending_approval"
                };
              return new window.Notification(e, i)
            } catch (e) {
              return N.retainForBugReport("warn", "Failed to show pending approval browser notification"), null
            }
          }(X, Z, (0, R.readActiveBaseFaviconHref)(), j.target);
          null != e && (ed.current = e, eo.current({
            eventName: p.HatchImpressionEvent.HATCH_PENDING_APPROVAL_BROWSER_NOTIFICATION_IMPRESSION,
            actionTarget: "pending_approval_browser_notification",
            actionType: "vpv_impression",
            metadata: B(j.counts)
          }), e.onclick = () => {
            eo.current({
              eventName: h.HatchClickEvent.HATCH_PENDING_APPROVAL_BROWSER_NOTIFICATION_CLICK,
              actionTarget: "pending_approval_browser_notification",
              actionType: "click",
              metadata: B(j.counts)
            }), window.focus();
            let t = H(m.getSnapshot(), ec.current, el.current);
            eu.current(O(t.pathname)), window.dispatchEvent(new Event(b.HATCH_OPEN_APPROVALS_PANEL_EVENT)), e.close()
          }, e.onclose = () => {
            ed.current === e && (ed.current = null)
          })
        }, [Z, X, j]);
        let ep = (0, a.useRef)(!1),
          eg = (0, a.useCallback)((e = !1) => {
            let t = m.getSnapshot().chat.lastSeenTimestamp;
            m.markMessagesSeen();
            let a = m.getSnapshot().chat.lastSeenTimestamp,
              n = G.current;
            null != n && (e || null != a && (a !== t || ep.current)) && (ep.current = !0, ei.setQueriesData({
              queryKey: E.threadSessionsQueryKeys.all
            }, e => e?.map(e => L(e, n) ? {
              ...e,
              unread_count: 0
            } : e)), ee("chat.mark_seen", {
              thread_id: n
            }).then(e => {
              let t = e?.thread_id ?? n;
              ep.current = !1, ei.setQueriesData({
                queryKey: E.threadSessionsQueryKeys.all
              }, e => e?.map(e => L(e, t) ? {
                ...e,
                unread_count: 0
              } : e))
            }).catch(e => {
              ep.current = !0, ei.invalidateQueries({
                queryKey: E.threadSessionsQueryKeys.all
              });
              let t = {
                error: e,
                threadId: n,
                tags: (0, d.hatchSentryTags)(d.HATCH_SENTRY_SURFACES.CHAT)
              };
              (0, w.isGatewayDisconnectError)(e) ? N.retainForBugReport("warn", "chat.mark_seen failed (gateway disconnected)"): N.error(t, "chat.mark_seen failed")
            }))
          }, [ei, ee]),
          em = (0, a.useRef)(eg);
        em.current = eg, (0, a.useEffect)(() => et("chat.seen", e => {
          if (ei.invalidateQueries({
              queryKey: E.threadSessionsQueryKeys.all
            }), e.thread_id !== G.current) return;
          let t = new Date(e.seen_at_ms).toISOString();
          m.setLastSeenTimestamp(t)
        }), [et, ei]), (0, a.useEffect)(() => {
          if ("u" < typeof BroadcastChannel) return;
          let e = new BroadcastChannel("hatch-seen-state"),
            t = null;
          e.onmessage = a => {
            t = a.data.lastSeenTimestamp, m.setLastSeenTimestamp(a.data.lastSeenTimestamp), t = null;
            let n = m.getSnapshot().chat.lastSeenTimestamp;
            n && n !== a.data.lastSeenTimestamp && e.postMessage({
              lastSeenTimestamp: n
            })
          };
          let a = m.subscribe(e => e.chat.lastSeenTimestamp, a => {
            a && a !== t && e.postMessage({
              lastSeenTimestamp: a
            })
          });
          return () => {
            a(), e.close()
          }
        }, []), (0, a.useEffect)(() => {
          if (!P || null == U) return;
          let e = requestAnimationFrame(() => {
            let e = k(m.getSnapshot());
            e > 0 && eo.current({
              eventName: h.HatchClickEvent.NOTIFICATION_AUTO_MARK_SEEN,
              actionTarget: "auto_mark_seen",
              actionType: "click",
              metadata: {
                trigger: "navigate_to_chat",
                unread_count: e
              }
            }), eg(!0)
          });
          return () => cancelAnimationFrame(e)
        }, [P, eg, U]), (0, a.useEffect)(() => {
          if ("u" < typeof document) return;
          let e = F(m.getSnapshot());
          document.title = K($, e.totalCount), e.totalCount > 0 && (0, R.setFaviconBadge)(!0)
        }, [$]), (0, a.useEffect)(() => {
          if ("u" < typeof document) return;
          let e = F(m.getSnapshot()),
            t = e.totalCount,
            a = e.pendingApprovalCount,
            r = t > 0;
          document.title = K(J.current, t), r && (0, R.setFaviconBadge)(!0);
          let i = e => {
              eo.current({
                eventName: p.HatchImpressionEvent.TAB_NOTIFICATION_BADGE_IMPRESSION,
                actionTarget: "tab_notification_badge",
                actionType: "vpv_impression",
                metadata: B(e)
              })
            },
            s = () => {
              ed.current?.close(), ed.current = null
            },
            o = e => {
              s();
              let t = H(m.getSnapshot(), ec.current, el.current);
              eh.current += 1, z({
                counts: e,
                sequence: eh.current,
                target: t
              })
            },
            u = e => {
              let n = 0 === a && e.pendingApprovalCount > 0,
                u = e.pendingApprovalCount > a;
              if (e.pendingApprovalCount < a && (s(), z(null)), e.totalCount === t) {
                0 === e.totalCount && (0, R.setFaviconBadge)(!1), n && i(e), u && o(e), a = e.pendingApprovalCount;
                return
              }
              let c = e.totalCount > 0;
              document.title = K(J.current, e.totalCount);
              let l = !1;
              c !== r && (r = c, (0, R.setFaviconBadge)(c), c && (l = !0)), (l || n) && i(e), u && o(e), t = e.totalCount, a = e.pendingApprovalCount
            },
            l = m.subscribe(e => {
              let t = F(e);
              return {
                unreadCount: t.unreadCount,
                pendingApprovalCount: t.pendingApprovalCount,
                totalCount: t.totalCount,
                isAtBottom: e.chat.isAtBottom
              }
            }, ({
              unreadCount: e,
              pendingApprovalCount: t,
              totalCount: a
            }) => {
              if (e > 0 && !document.hidden && D.current && m.getSnapshot().chat.isAtBottom) {
                eo.current({
                  eventName: h.HatchClickEvent.NOTIFICATION_AUTO_MARK_SEEN,
                  actionTarget: "auto_mark_seen",
                  actionType: "click",
                  metadata: {
                    trigger: "active_viewing",
                    unread_count: e
                  }
                }), em.current();
                return
              }
              u({
                unreadCount: e,
                pendingApprovalCount: t,
                totalCount: a
              })
            }, {
              equalityFn: n.shallow
            }),
            d = () => {
              if (document.hidden || !D.current) return;
              let e = k(m.getSnapshot());
              e > 0 && eo.current({
                eventName: h.HatchClickEvent.NOTIFICATION_AUTO_MARK_SEEN,
                actionTarget: "auto_mark_seen",
                actionType: "click",
                metadata: {
                  trigger: "return_to_tab",
                  unread_count: e
                }
              }), em.current(), u(F(m.getSnapshot()))
            };
          return document.addEventListener("visibilitychange", d), window.addEventListener("focus", d), () => {
            l(), document.removeEventListener("visibilitychange", d), window.removeEventListener("focus", d), s(), document.title = c, (0, R.setFaviconBadge)(!1)
          }
        }, [])
      }(), (et = (0, t.c)(10))[0] !== er ? (Y = () => {
        let e = er?.trim();
        e && window.postMessage({
          type: "hatch_browser_node_pair",
          version: 1,
          gatewayUrl: e
        }, window.location.origin)
      }, et[0] = er, et[1] = Y) : Y = et[1], ea = Y, et[2] !== ea ? (Z = () => {
        ea()
      }, X = [ea], et[2] = ea, et[3] = Z, et[4] = X) : (Z = et[3], X = et[4]), (0, a.useEffect)(Z, X), et[5] !== ea ? (J = () => {
        let e = e => {
            (function(e) {
              if (e.source !== window || e.origin !== window.location.origin) return !1;
              let t = e.data;
              return "object" == typeof t && null !== t && "hatch_browser_node_pair_ready" === t.type && 1 === t.version
            })(e) && ea()
          },
          t = () => {
            ea()
          },
          a = () => {
            "visible" === document.visibilityState && ea()
          };
        return window.addEventListener("message", e), window.addEventListener("focus", t), document.addEventListener("visibilitychange", a), () => {
          window.removeEventListener("message", e), window.removeEventListener("focus", t), document.removeEventListener("visibilitychange", a)
        }
      }, et[5] = ea, et[6] = J) : J = et[6], et[7] !== ea || et[8] !== er ? (ee = [ea, er], et[7] = ea, et[8] = er, et[9] = ee) : ee = et[9], (0, a.useEffect)(J, ee), null
  }], 890169)
}, 531107, e => {
  "use strict";
  var t = e.i(880061);
  async function a(e, a) {
    let {
      offset: n,
      limit: r
    } = a, i = (0, t.getHatchGatewayDataOrFallback)(await e.library({
      preset: "artifacts",
      limit: r,
      offset: n
    }), {
      entries: [],
      total: n,
      hasMore: !1
    }, {
      surface: "library.artifacts",
      errorMessage: "Failed to load Hatch artifacts",
      context: {
        offset: n,
        limit: r
      }
    }), s = n + i.entries.length;
    return {
      entries: i.entries,
      total: Math.max(i.total, s),
      hasMore: i.hasMore,
      nextOffset: s
    }
  }
  e.s(["fetchArtifactsPage", 0, a, "flattenArtifactPages", 0, function(e) {
    if (!e || 0 === e.pages.length) return {
      entries: [],
      total: 0,
      hasMore: !1,
      nextOffset: 0
    };
    let t = [],
      a = new Set,
      n = 0,
      r = !1,
      i = 0;
    for (let s of e.pages)
      for (let e of (n = Math.max(n, s.total), r = s.hasMore, i = s.nextOffset, s.entries)) a.has(e.path) || (a.add(e.path), t.push(e));
    return {
      entries: t,
      total: Math.max(n, t.length),
      hasMore: r,
      nextOffset: i
    }
  }, "formatSlugAsTitle", 0, function(e) {
    return e.replace(/[-_]+/g, " ").replace(/\b\w/g, e => e.toUpperCase())
  }, "projectDirFromFilePath", 0, function(e) {
    let t = e.match(/^\/?(workspace\/(?:your_files|artifacts)\/[^/]+)\//);
    return t?.[1] ?? null
  }])
}, 724480, e => {
  "use strict";
  var t = e.i(3116),
    a = e.i(790170),
    n = e.i(531107),
    r = e.i(765414);
  let i = (0, a.createGatewayInfiniteQuery)({
    id: "library.artifacts",
    queryKey: ({
      gatewayUrl: e,
      gatewayScopeKey: a
    }) => (0, t.hatchLibraryArtifactsQueryKey)(e, a),
    queryFn: (e, t, a) => (0, n.fetchArtifactsPage)(e.fs, {
      offset: a,
      limit: r.ARTIFACTS_PAGE_SIZE
    }),
    initialPageParam: 0,
    getNextPageParam: e => e.hasMore ? e.nextOffset : void 0,
    staleTime: 1e4
  });
  e.s(["flattenLibraryArtifactInfiniteData", 0, function(e) {
    return (0, n.flattenArtifactPages)(e)
  }, "libraryArtifactsQuery", 0, i])
}, 272382, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(271954),
    n = e.i(963910);
  e.s(["useHatchNavigation", 0, function() {
    let e, r, i, s, o, u, c, l = (0, t.c)(12),
      d = (u = (0, t.c)(2), c = (0, a.useLocation)(), u[0] !== c.search ? (o = (0, n.parseHatchGatewayTarget)(c.search), u[0] = c.search, u[1] = o) : o = u[1], o);
    l[0] !== d ? (e = e => (0, n.applyHatchGatewayTargetToPath)(e, d), l[0] = d, l[1] = e) : e = l[1];
    let h = e;
    l[2] !== d ? (r = e => (0, n.applyHatchGatewayTargetToReturnTo)(e, d), l[2] = d, l[3] = r) : r = l[3];
    let f = r,
      {
        navigate: p
      } = (0, a.useNavigate)();
    l[4] !== h || l[5] !== p ? (i = e => p(h(e)), l[4] = h, l[5] = p, l[6] = i) : i = l[6];
    let g = i;
    return l[7] !== h || l[8] !== f || l[9] !== d || l[10] !== g ? (s = {
      gatewayTarget: d,
      navigateWithinHatch: g,
      buildHatchPath: h,
      buildReturnToUrl: f
    }, l[7] = h, l[8] = f, l[9] = d, l[10] = g, l[11] = s) : s = l[11], s
  }])
}]);

//# debugId=0bd3741f-436a-ed25-b861-d3fac976daa0
//# sourceMappingURL=3wjjbhsx6gaoa.js.map