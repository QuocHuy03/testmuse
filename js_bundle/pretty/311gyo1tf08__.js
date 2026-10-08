;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "a48b1190-2ee7-b725-be28-d57e25814799")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 127643, e => {
  "use strict";
  var t = e.i(722099),
    r = e.i(519172),
    n = e.i(397240),
    i = e.i(979974),
    a = e.i(359783),
    l = e.i(123960),
    u = e.i(390808),
    s = e.i(438451),
    o = e.i(648701),
    d = e.i(654764),
    c = e.i(435265),
    p = e.i(508180),
    y = e.i(514540),
    f = e.i(170525);
  let h = (0, a.createClientLogger)("useHatchIdeaActivation"),
    m = new Set,
    g = new Set,
    _ = new Set;

  function C(e) {
    return g.add(e), () => {
      g.delete(e)
    }
  }

  function I() {
    return _
  }

  function x() {
    for (let e of (_ = new Set(m), g)) e()
  }

  function w(e) {
    m.delete(e) && x()
  }
  e.s(["useHatchIdeaActivation", 0, function(e) {
    let a, g, _, v, b = (0, t.c)(19);
    b[0] !== e ? (a = void 0 === e ? {} : e, b[0] = e, b[1] = a) : a = b[1];
    let {
      onActivationStart: Q,
      revealChatInSplitView: S
    } = a, P = void 0 !== S && S, E = (0, y.useExecuteExploreIdeaMutation)(), {
      requestHistoryRehydrate: k
    } = (0, l.useHatchChat)(), {
      navigate: A
    } = (0, c.useShellNavigate)(), K = (0, i.useIsNarrowViewport)(), M = (0, n.useIsMobileBreakpoint)(), L = (0, d.useActiveRoute)().panelType, R = (0, u.useEffectiveHatchChatRoute)(), F = (0, o.useSidePanelChatCollapsed)(), H = K || M, q = R?.kind !== "thread" || "chat" !== L && (F || H) ? null : R.sessionId, G = q ?? (P && R?.kind === "thread" && !H ? R.sessionId : null), N = (0, r.useSyncExternalStore)(C, I, I);
    b[2] !== N ? (g = e => (0, f.isHatchIdeaBuildInstalled)(e.buildStatus) ? "installed" : "failed" === e.buildStatus ? "available" : N.has(e.id) || "in_progress" === e.buildStatus ? "pending" : "available", b[2] = N, b[3] = g) : g = b[3];
    let U = g;
    b[4] !== R?.kind || b[5] !== E || b[6] !== G || b[7] !== U || b[8] !== H || b[9] !== K || b[10] !== A || b[11] !== Q || b[12] !== k || b[13] !== P || b[14] !== q ? (_ = (e, t) => {
      if ("available" === U(e)) {
        var r;
        r = e.id, m.has(r) || (m.add(r), x()), Q?.(e), P ? H ? A(null != G ? (0, s.buildHatchThreadPath)(G) : "/") : window.dispatchEvent(new Event("hatch-expand-chat")) : K || R?.kind === "thread" && null == q ? A(null != q ? (0, s.buildHatchThreadPath)(q) : "/") : window.dispatchEvent(new Event("hatch-expand-chat")), E.mutate({
          ideaCardId: e.id,
          selectedItemIds: t,
          ...null != G && {
            sessionId: G
          }
        }, {
          onSuccess: t => {
            if (!t.success) {
              w(e.id), h.error({
                ideaCardId: e.id
              }, "Execute idea card rejected in-band (success: false)");
              return
            }
            p.reduceChat({
              type: "chat/set_expecting_bot_response",
              isExpectingBotResponse: !0
            }), k("ideas.execute_success").then(t => {
              "applied" !== t.result && "joined" !== t.result && w(e.id)
            })
          },
          onError: t => {
            w(e.id), h.error({
              error: t instanceof Error ? t : Error(String(t)),
              ideaCardId: e.id
            }, "Execute idea card failed")
          }
        })
      }
    }, b[4] = R?.kind, b[5] = E, b[6] = G, b[7] = U, b[8] = H, b[9] = K, b[10] = A, b[11] = Q, b[12] = k, b[13] = P, b[14] = q, b[15] = _) : _ = b[15], R?.kind;
    let T = _;
    return b[16] !== T || b[17] !== U ? (v = {
      activateIdea: T,
      getActionState: U
    }, b[16] = T, b[17] = U, b[18] = v) : v = b[18], v
  }])
}, 171311, e => {
  "use strict";
  var t = e.i(281851),
    r = e.i(228750);
  let n = {
    all: ["feed"],
    list: (e, t) => ["feed", e, "list", t ?? ""],
    infiniteList: (e, t) => ["feed", e, "infiniteList", t ?? ""],
    unit: (e, t) => ["feed", e, "unit", t],
    status: (e, t) => ["feed", e, "status", t ?? ""],
    prompts: e => ["feed", e, "prompts"]
  };

  function i(e, n, i, a, l) {
    let u = {
      version: 1,
      queryKey: n,
      sourceKey: JSON.stringify(n),
      staleTimeMs: l,
      targetKey: e.targetKey,
      request: {
        method: i,
        params: a,
        resultMode: "raw",
        ..."feed.list" === i ? {
          clientParams: [{
            kind: "browser_timezone",
            paramName: "timezone"
          }]
        } : {}
      },
      dependency: {
        queryKey: (0, r.buildOnboardingStartQueryKey)(e.targetKey),
        skipWhen: {
          field: "variant",
          equals: t.UI_DRIVEN_ONBOARDING_VARIANT
        }
      }
    };
    return {
      descriptor: u,
      queryKey: n,
      sourceKey: u.sourceKey
    }
  }
  e.s(["bindFeedListGatewayQuery", 0, function(e, t) {
    return i(e, n.list(e.gatewayUrl, t), "feed.list", null == t || 0 === t.length ? {} : {
      prompt_id: t
    }, 3e4)
  }, "bindFeedPromptGatewayQuery", 0, function(e) {
    return i(e, n.prompts(e.gatewayUrl), "feed.prompt.get", {}, 3e4)
  }, "bindFeedStatusGatewayQuery", 0, function(e, t) {
    return i(e, n.status(e.gatewayUrl, t), "feed.status", null == t || 0 === t.length ? {} : {
      prompt_id: t
    }, 0)
  }, "feedQueryKeys", 0, n])
}, 942970, e => {
  "use strict";
  var t = e.i(790170),
    r = e.i(171311);
  let n = ["like", "love", "dislike"];

  function i(e) {
    if ("string" != typeof e) return null;
    let t = e.trim();
    return 0 === t.length ? null : t
  }

  function a(e) {
    return "number" == typeof e && Number.isFinite(e) ? e : null
  }

  function l(e) {
    return "object" == typeof e && null != e && !Array.isArray(e)
  }

  function u(e) {
    var t;
    if (!l(e)) return null;
    let r = i(e.unit_id),
      u = i(e.run_id),
      s = i(e.edition_local_date);
    if (null == r || null == u || null == s) return null;
    let o = i(e.origin) ?? "generated";
    return {
      unitId: r,
      runId: u,
      editionKind: i(e.edition_kind) ?? "adhoc",
      editionLocalDate: s,
      editionGeneratedAtMs: a(e.edition_generated_at_ms) ?? 0,
      position: a(e.position) ?? 0,
      kicker: i(e.kicker) ?? "",
      title: i(e.title),
      bodyMd: "string" == typeof e.body_md ? e.body_md : "",
      whyDidISeeThis: i(e.why_did_i_see_this),
      iconUrl: i(e.icon_url),
      emoji: i(e.emoji),
      attachment: function(e) {
        let t, r, n, u, s;
        if (!l(e)) return {
          kind: "none"
        };
        let o = (t = i(e.social_embed_url), r = i(e.social_attribution_text), n = i(e.social_post_username), u = i(e.social_source_name), s = i(e.social_source_icon_url), {
          ...null != t ? {
            socialEmbedUrl: t
          } : {},
          ...null != r ? {
            socialAttributionText: r
          } : {},
          ...null != n ? {
            socialPostUsername: n
          } : {},
          ...null != u ? {
            socialSourceName: u
          } : {},
          ...null != s ? {
            socialSourceIconUrl: s
          } : {}
        });
        switch (e.kind) {
          case "hero_image": {
            let t = i(e.hero_image_url);
            if (null == t) return {
              kind: "none",
              ...o
            };
            let r = i(e.video_url),
              n = a(e.social_thumbnail_aspect_ratio);
            return {
              kind: "hero_image",
              heroImageUrl: t,
              ...null != r ? {
                videoUrl: r
              } : {},
              ...null != n && n > 0 ? {
                aspectRatio: n
              } : {},
              ...o
            }
          }
          case "carousel": {
            let t = function(e) {
              if (!Array.isArray(e)) return [];
              let t = [];
              for (let r of e) {
                let e = i(r);
                null != e && t.push(e)
              }
              return t
            }(e.image_urls);
            if (0 === t.length) return {
              kind: "none",
              ...o
            };
            let r = function(e, t) {
              if (!Array.isArray(e) || e.length !== t.length) return;
              let r = !1,
                n = e.map((e, n) => {
                  let a = t[n] ?? "";
                  if (!l(e)) return {
                    kind: "image",
                    url: a
                  };
                  let u = i(e.url);
                  if ("video" === e.kind && null != u) {
                    let t = i(e.poster_url);
                    return null == t ? {
                      kind: "image",
                      url: a
                    } : (r = !0, {
                      kind: "video",
                      url: u,
                      posterUrl: t
                    })
                  }
                  return {
                    kind: "image",
                    url: u ?? a
                  }
                });
              return r ? n : void 0
            }(e.media_items, t);
            return {
              kind: "carousel",
              imageUrls: t,
              ...null != r ? {
                mediaItems: r
              } : {},
              ...o
            }
          }
          case "widget": {
            let t = "string" == typeof e.widget_html ? e.widget_html : null;
            return null != t && t.trim().length > 0 ? {
              kind: "widget",
              widgetHtml: t,
              ...o
            } : {
              kind: "none",
              ...o
            }
          }
          case "social_embed": {
            let t = i(e.social_embed_url);
            if (null == t) return {
              kind: "none",
              ...o
            };
            let r = i(e.social_thumbnail_url),
              n = !0 === e.social_is_carousel,
              a = function(e) {
                if (!Array.isArray(e) || e.length < 2 || e.length > 10) return;
                let t = [];
                for (let r of e) {
                  if (!l(r)) return;
                  let e = i(r.media_url);
                  if (null == e) return;
                  if ("image" === r.kind) {
                    t.push({
                      kind: "image",
                      mediaUrl: e
                    });
                    continue
                  }
                  if ("video" === r.kind) {
                    let n = i(r.thumbnail_url);
                    t.push(null != n ? {
                      kind: "video",
                      mediaUrl: e,
                      thumbnailUrl: n
                    } : {
                      kind: "video",
                      mediaUrl: e
                    });
                    continue
                  }
                  return
                }
                return t
              }(e.social_media_items);
            return {
              kind: "social_embed",
              socialEmbedUrl: t,
              ...null != r ? {
                socialThumbnailUrl: r
              } : {},
              ...n ? {
                socialIsCarousel: !0
              } : {},
              ...null != a ? {
                socialMediaItems: a
              } : {},
              ...o
            }
          }
          default:
            return {
              kind: "none", ...o
            }
        }
      }(e.attachment),
      category: i(e.category) ?? "",
      connectorAttribution: i(e.connector_attribution),
      isReflective: !0 === e.is_reflective,
      stats: function(e) {
        if (!Array.isArray(e)) return [];
        let t = [];
        for (let r of e) {
          if (!l(r)) continue;
          let e = i(r.label),
            n = i(r.value) ?? a(r.value)?.toString() ?? null;
          null != e && null != n && t.push({
            label: e,
            value: n
          })
        }
        return t
      }(e.stats),
      reaction: "string" == typeof(t = e.reaction) && n.includes(t) ? t : null,
      shareCount: a(e.share_count) ?? 0,
      discussCount: a(e.discuss_count) ?? 0,
      origin: o,
      ideaAction: "idea" === o ? function(e) {
        if (!l(e)) return null;
        let t = i(e.idea_id);
        return null == t || 0 === t.length ? null : {
          ideaId: t,
          state: "built" === e.state ? "built" : "available"
        }
      }(e.idea_action) : null,
      promptId: i(e.prompt_id),
      seenAtMs: a(e.seen_at_ms),
      createdAtMs: a(e.created_at_ms) ?? 0,
      updatedAtMs: a(e.updated_at_ms) ?? 0
    }
  }

  function s(e) {
    if (!l(e)) return {
      promptId: null,
      days: [],
      pagination: {
        nextCursor: null,
        prevCursor: null
      }
    };
    let t = [];
    for (let r of Array.isArray(e.days) ? e.days : []) {
      let e = function(e) {
        if (!l(e)) return null;
        let t = i(e.local_date);
        if (null == t) return null;
        let r = [];
        for (let t of Array.isArray(e.editions) ? e.editions : []) {
          let e = l(t) ? {
            kind: i(t.kind) ?? "adhoc",
            title: i(t.title) ?? "",
            generatedAtMs: a(t.generated_at_ms) ?? 0,
            units: function(e) {
              if (!Array.isArray(e)) return [];
              let t = [];
              for (let r of e) {
                let e = u(r);
                null != e && t.push(e)
              }
              return t
            }(t.units)
          } : null;
          null != e && r.push(e)
        }
        return {
          localDate: t,
          editions: r
        }
      }(r);
      null != e && t.push(e)
    }
    let r = l(e.pagination) ? e.pagination : {};
    return {
      promptId: i(e.prompt_id),
      days: t,
      pagination: {
        nextCursor: i(r.next_cursor),
        prevCursor: i(r.prev_cursor)
      }
    }
  }

  function o(e) {
    if (!l(e)) return null;
    let t = i(e.prompt_id);
    return null == t ? null : {
      promptId: t,
      fullPrompt: i(e.full_prompt) ?? ("string" == typeof e.free_text ? e.free_text : ""),
      createdAtMs: a(e.created_at_ms) ?? 0,
      updatedAtMs: a(e.updated_at_ms) ?? 0
    }
  }

  function d(e) {
    return l(e) ? {
      prompt: o(e.prompt)
    } : {
      prompt: null
    }
  }

  function c(e) {
    return l(e) ? {
      promptId: i(e.prompt_id),
      promptEnabled: !0 === e.prompt_enabled,
      refreshInProgress: !0 === e.refresh_in_progress,
      runId: i(e.run_id),
      trigger: i(e.trigger),
      startedAtMs: a(e.started_at_ms),
      nextScheduledAtMs: a(e.next_scheduled_at_ms),
      nextEditionKind: i(e.next_edition_kind),
      freshestGeneratedAtMs: a(e.freshest_generated_at_ms)
    } : {
      promptId: null,
      promptEnabled: !1,
      refreshInProgress: !1,
      runId: null,
      trigger: null,
      startedAtMs: null,
      nextScheduledAtMs: null,
      nextEditionKind: null,
      freshestGeneratedAtMs: null
    }
  }
  let p = (0, t.createGatewayQuery)({
    id: "feed.list",
    queryKey: ({
      gatewayUrl: e,
      promptId: t
    }) => r.feedQueryKeys.list(e, t),
    noiseFn: async (e, t) => {
      let r = {};
      null != t.promptId && t.promptId.length > 0 && (r.prompt_id = t.promptId);
      let n = y();
      return null != n && (r.timezone = n), s(await e.sendRequest("feed.list", r))
    },
    invalidationKey: () => r.feedQueryKeys.all,
    staleTime: 3e4
  });

  function y() {
    try {
      let e = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return e.length > 0 ? e : null
    } catch {
      return null
    }
  }
  let f = (0, t.createGatewayInfiniteQuery)({
    id: "feed.list",
    queryKey: ({
      gatewayUrl: e,
      promptId: t
    }) => r.feedQueryKeys.infiniteList(e, t),
    noiseFn: async (e, t, r) => {
      let n = {},
        i = r?.promptId ?? t.promptId;
      null != i && i.length > 0 && (n.prompt_id = i), null != r && r.cursor.length > 0 && (n.cursor = r.cursor);
      let a = y();
      return null != a && (n.timezone = a), s(await e.sendRequest("feed.list", n))
    },
    invalidationKey: () => r.feedQueryKeys.all,
    initialPageParam: null,
    getNextPageParam: e => null != e.pagination.nextCursor ? {
      cursor: e.pagination.nextCursor,
      promptId: e.promptId
    } : void 0,
    staleTime: 3e4
  });
  (0, t.createGatewayQuery)({
    id: "feed.status",
    queryKey: ({
      gatewayUrl: e,
      promptId: t
    }) => r.feedQueryKeys.status(e, t),
    noiseFn: async (e, t) => {
      let r = {};
      return null != t.promptId && t.promptId.length > 0 && (r.prompt_id = t.promptId), c(await e.sendRequest("feed.status", r))
    },
    invalidationKey: () => r.feedQueryKeys.all,
    staleTime: 0
  });
  let h = (0, t.createGatewayQuery)({
    id: "feed.prompt.get",
    queryKey: ({
      gatewayUrl: e
    }) => r.feedQueryKeys.prompts(e),
    noiseFn: async e => d(await e.sendRequest("feed.prompt.get", {})),
    invalidationKey: () => r.feedQueryKeys.all,
    staleTime: 3e4
  });
  async function m(e, t, r) {
    var n;
    return l(n = await r("feed.unit.reaction", {
      unit_id: e,
      reaction: t
    })) ? u(n.unit) : null
  }
  async function g(e, t) {
    await t("feed.unit.delete", {
      unit_id: e
    })
  }
  async function _(e, t) {
    let r = {};
    null != e && e.length > 0 && (r.prompt_id = e);
    let n = await t("feed.regenerate", r);
    return l(n) ? {
      runId: i(n.run_id),
      alreadyInProgress: !0 === n.already_in_progress,
      queued: !0 === n.queued,
      promptEnabled: "boolean" == typeof n.prompt_enabled ? n.prompt_enabled : null
    } : {
      runId: null,
      alreadyInProgress: !1,
      queued: !1,
      promptEnabled: null
    }
  }
  async function C(e, t) {
    var r;
    return l(r = await t("feed.prompt.update", {
      prompt: e.fullPrompt
    })) ? o(r.prompt) : null
  }
  e.s(["deleteFeedUnit", 0, g, "feedFreshestRenderedGeneratedAtMs", 0, function(e) {
    let t = 0;
    for (let r of e.days)
      for (let e of r.editions) e.generatedAtMs > t && (t = e.generatedAtMs);
    return t
  }, "feedListInfiniteQuery", 0, f, "feedListQuery", 0, p, "feedPromptQuery", 0, h, "feedQueryMatchesPromptScope", 0, function(e, t) {
    return "unit" === e[2] || e.includes(t)
  }, "getFeedListGatewayQuery", 0, function(e) {
    return {
      bind: t => (0, r.bindFeedListGatewayQuery)(t, e),
      transform: s,
      staleTime: 3e4
    }
  }, "getFeedPromptGatewayQuery", 0, function() {
    return {
      bind: r.bindFeedPromptGatewayQuery,
      transform: d,
      staleTime: 3e4
    }
  }, "getFeedStatusGatewayQuery", 0, function(e) {
    return {
      bind: t => (0, r.bindFeedStatusGatewayQuery)(t, e),
      transform: c,
      staleTime: 0
    }
  }, "mapUnitInFeedList", 0, function(e, t, r) {
    return {
      ...e,
      days: e.days.map(e => ({
        ...e,
        editions: e.editions.map(e => ({
          ...e,
          units: e.units.map(e => e.unitId === t ? r(e) : e)
        }))
      }))
    }
  }, "mergeFeedListPages", 0, function(e) {
    let t = new Map;
    for (let r of e)
      for (let e of r.days) t.has(e.localDate) || t.set(e.localDate, e);
    let r = e[0],
      n = e[e.length - 1];
    return {
      promptId: r?.promptId ?? null,
      days: [...t.values()],
      pagination: n?.pagination ?? {
        nextCursor: null,
        prevCursor: null
      }
    }
  }, "normalizeFeedUnit", 0, u, "regenerateFeed", 0, _, "removeUnitFromFeedList", 0, function(e, t) {
    return {
      ...e,
      days: e.days.map(e => ({
        ...e,
        editions: e.editions.map(e => ({
          ...e,
          units: e.units.filter(e => e.unitId !== t)
        })).filter(e => e.units.length > 0)
      })).filter(e => e.editions.length > 0)
    }
  }, "setFeedUnitReaction", 0, m, "upsertFeedPrompt", 0, C])
}, 129499, e => {
  "use strict";
  var t = e.i(722099),
    r = e.i(849329),
    n = e.i(175286),
    i = e.i(389409),
    a = e.i(499608);

  function l(e, t, r) {
    return {
      queryKey: ["explore-media-blob", e, t],
      queryFn: async () => {
        if (null == t) return null;
        let e = t.split("/idea-cards/media/")[1] ?? "",
          n = e.indexOf("?"),
          i = -1 === n ? e : e.slice(0, n),
          a = Object.fromEntries(new URLSearchParams(-1 === n ? "" : e.slice(n + 1)));
        return await r("idea-cards.media", {
          handle: i,
          ...a
        })
      },
      staleTime: 1 / 0,
      gcTime: 18e5,
      retry: 1
    }
  }

  function u(e, t) {
    let r;
    if (e.startsWith("/")) {
      try {
        let t = new URL(e, "http://n");
        if (t.pathname.includes("/idea-cards/media/")) return t.pathname + t.search
      } catch {}
      return null
    }
    try {
      r = new URL(e)
    } catch {
      return null
    }
    if (!r.pathname.includes("/idea-cards/media/")) return null;
    let n = null;
    try {
      n = new URL(t.includes("://") ? t : `https://${t}`).host
    } catch {
      n = null
    }
    let a = window.location.host;
    return r.host === n || r.host === a || (0, i.isHatchVmGatewayHostname)(r.hostname) ? r.pathname + r.search : null
  }
  e.s(["prefetchExploreMediaBlob", 0, function(e, t, r, n, i) {
    if (null == r || 0 === t.length) return Promise.resolve();
    let a = u(r, t);
    return null == a ? Promise.resolve() : e.prefetchQuery({
      ...l(t, a, n),
      meta: {
        sentrySurface: i
      }
    })
  }, "useExploreMediaBlobUrl", 0, function(e, i) {
    let s, o, d, c, p, y, f = (0, t.c)(18),
      {
        gatewayUrl: h,
        sendRequest: m
      } = (0, n.useHatchRpc)(),
      g = h ?? "";
    if (f[0] !== g || f[1] !== m || f[2] !== e) {
      let t = null != e && g.length > 0 ? u(e, g) : null;
      s = null != t, d = r.useQuery, o = l(g, t, m), f[0] = g, f[1] = m, f[2] = e, f[3] = s, f[4] = o, f[5] = d
    } else s = f[3], o = f[4], d = f[5];
    f[6] !== i ? (c = {
      sentrySurface: i
    }, f[6] = i, f[7] = c) : c = f[7], f[8] !== s || f[9] !== o || f[10] !== c ? (p = {
      ...o,
      enabled: s,
      meta: c
    }, f[8] = s, f[9] = o, f[10] = c, f[11] = p) : p = f[11];
    let {
      data: _,
      isPending: C,
      isError: I,
      fetchStatus: x
    } = d(p), w = (0, a.useBlobUrl)(_ ?? null);
    if (!s) {
      let t, r = e ?? null;
      return f[12] !== r ? (t = {
        src: r,
        isLoading: !1,
        isError: !1
      }, f[12] = r, f[13] = t) : t = f[13], t
    }
    let v = "fetching" === x || C && null == w && !I;
    return f[14] !== w || f[15] !== I || f[16] !== v ? (y = {
      src: w,
      isLoading: v,
      isError: I
    }, f[14] = w, f[15] = I, f[16] = v, f[17] = y) : y = f[17], y
  }])
}, 514540, e => {
  "use strict";
  var t = e.i(722099),
    r = e.i(293760),
    n = e.i(503037),
    i = e.i(849329),
    a = e.i(393202),
    l = e.i(175286),
    u = e.i(543912),
    s = e.i(14751),
    o = e.i(720756);
  e.i(942970);
  var d = e.i(171311),
    c = e.i(867258),
    p = e.i(281918),
    y = e.i(863641);
  let f = {
    ideas: [],
    groups: [],
    heroIdeaIds: [],
    subtitle: null,
    showNullStateMessage: !1,
    pagination: {
      nextCursor: null,
      hasNextPage: !1
    }
  };

  function h(e) {
    return "list" === e.queryKey[2] || "unit" === e.queryKey[2]
  }

  function m(e) {
    return "preview" === e.queryKey[2]
  }

  function g(e) {
    return "detail" === e.queryKey[2]
  }

  function _(e) {
    return "infiniteList" === e.queryKey[2]
  }

  function C(e) {
    return "list" === e.queryKey[2]
  }
  e.s(["useExecuteExploreIdeaMutation", 0, function() {
    let e, r, i, u, s, o = (0, t.c)(16),
      {
        gatewayUrl: p,
        gatewayScopeKey: y,
        sendRequest: f,
        isReady: I,
        ensureLiveConnection: x
      } = (0, l.useHatchRpc)(),
      w = (0, a.useQueryClient)(),
      v = p ?? "",
      b = y ?? v;
    return o[0] !== x || o[1] !== I || o[2] !== v || o[3] !== f ? (e = async e => {
      if (0 === v.length) throw Error("Gateway URL not available yet");
      return I || await x(), (0, c.executeExploreIdeaCard)(e.ideaCardId, e.selectedItemIds, f, {
        sessionId: e.sessionId
      })
    }, o[0] = x, o[1] = I, o[2] = v, o[3] = f, o[4] = e) : e = o[4], o[5] !== w || o[6] !== b ? (r = e => {
      let {
        ideaCardId: t
      } = e, r = [];
      for (let [e, n] of w.getQueriesData({
          queryKey: ["exploreIdeas", b],
          predicate: C
        })) {
        if (null == n) continue;
        r.push({
          key: e,
          data: n
        });
        let i = n.ideas.map(e => e.id === t ? {
          ...e,
          buildStatus: "in_progress"
        } : e);
        w.setQueryData(e, {
          ...n,
          ideas: i
        })
      }
      let n = [];
      for (let [e, r] of w.getQueriesData({
          queryKey: ["exploreIdeas", b],
          predicate: _
        })) null != r && (n.push({
        key: e,
        data: r
      }), w.setQueryData(e, {
        ...r,
        pages: r.pages.map(e => ({
          ...e,
          ideas: e.ideas.map(e => e.id === t ? {
            ...e,
            buildStatus: "in_progress"
          } : e)
        }))
      }));
      let i = [];
      for (let [e, r] of w.getQueriesData({
          queryKey: ["exploreIdeas", b],
          predicate: g
        })) null != r && r.ideaCardId === t && (i.push({
        key: e,
        data: r
      }), w.setQueryData(e, {
        ...r,
        buildStatus: "in_progress"
      }));
      let a = [];
      for (let [e, r] of w.getQueriesData({
          queryKey: ["exploreIdeas", b],
          predicate: m
        })) null != r && r.idea.id === t && (a.push({
        key: e,
        data: r
      }), w.setQueryData(e, {
        idea: {
          ...r.idea,
          buildStatus: "in_progress"
        },
        detail: {
          ...r.detail,
          buildStatus: "in_progress"
        }
      }));
      return {
        listSnapshots: r,
        infiniteListSnapshots: n,
        detailSnapshots: i,
        previewSnapshots: a
      }
    }, o[5] = w, o[6] = b, o[7] = r) : r = o[7], o[8] !== w ? (i = (e, t, r) => {
      if (r?.listSnapshots != null)
        for (let {
            key: e,
            data: t
          }
          of r.listSnapshots) w.setQueryData(e, t);
      if (r?.infiniteListSnapshots != null)
        for (let {
            key: e,
            data: t
          }
          of r.infiniteListSnapshots) w.setQueryData(e, t);
      if (r?.detailSnapshots != null)
        for (let {
            key: e,
            data: t
          }
          of r.detailSnapshots) w.setQueryData(e, t);
      for (let {
          key: e,
          data: t
        }
        of r?.previewSnapshots ?? []) w.setQueryData(e, t)
    }, u = async (e, t, r, n) => {
      if (e?.success === !1)
        for (let {
            key: e,
            data: t
          }
          of n?.previewSnapshots ?? []) w.setQueryData(e, t);
      await Promise.all([c.exploreIdeasListQuery.invalidateAll(w), c.exploreIdeaDetailQuery.invalidateAll(w), w.invalidateQueries({
        queryKey: d.feedQueryKeys.all,
        predicate: h
      })])
    }, o[8] = w, o[9] = i, o[10] = u) : (i = o[9], u = o[10]), o[11] !== e || o[12] !== r || o[13] !== i || o[14] !== u ? (s = {
      mutationFn: e,
      onMutate: r,
      onError: i,
      onSettled: u
    }, o[11] = e, o[12] = r, o[13] = i, o[14] = u, o[15] = s) : s = o[15], (0, n.useMutation)(s)
  }, "useHatchExploreIdeaCardQuery", 0, function(e) {
    let r, n, a, s = (0, t.c)(10),
      {
        gatewayUrl: d,
        gatewayScopeKey: p
      } = (0, l.useHatchRpc)(),
      f = (0, o.useGatewayQueryContext)(),
      h = (0, u.useHatchIdeaColorIconsWithoutExposure)(),
      m = d ?? "",
      g = p ?? m,
      _ = null != e && m.length > 0;
    return s[0] !== h || s[1] !== f || s[2] !== e || s[3] !== g || s[4] !== m ? (r = c.exploreIdeaCardQuery.queryOptions({
      gatewayUrl: m,
      gatewayScopeKey: g,
      ideaCardId: e ?? "",
      colorIcons: h
    }, f), s[0] = h, s[1] = f, s[2] = e, s[3] = g, s[4] = m, s[5] = r) : r = s[5], s[6] === Symbol.for("react.memo_cache_sentinel") ? (n = {
      sentrySurface: y.HATCH_SENTRY_SURFACES.CHAT_FEED
    }, s[6] = n) : n = s[6], s[7] !== _ || s[8] !== r ? (a = {
      ...r,
      enabled: _,
      meta: n
    }, s[7] = _, s[8] = r, s[9] = a) : a = s[9], (0, i.useQuery)(a)
  }, "useHatchExploreIdeaDetailQuery", 0, function(e, r) {
    let n, a, s, d = (0, t.c)(12),
      {
        sentrySurface: p
      } = r,
      {
        gatewayUrl: y,
        gatewayScopeKey: f
      } = (0, l.useHatchRpc)(),
      h = (0, o.useGatewayQueryContext)(),
      m = (0, u.useHatchIdeaColorIconsWithoutExposure)(),
      g = y ?? "",
      _ = f ?? g,
      C = null != e && g.length > 0;
    return d[0] !== m || d[1] !== h || d[2] !== e || d[3] !== _ || d[4] !== g ? (n = c.exploreIdeaDetailQuery.queryOptions({
      gatewayUrl: g,
      gatewayScopeKey: _,
      ideaCardId: e ?? "",
      colorIcons: m
    }, h), d[0] = m, d[1] = h, d[2] = e, d[3] = _, d[4] = g, d[5] = n) : n = d[5], d[6] !== p ? (a = {
      sentrySurface: p
    }, d[6] = p, d[7] = a) : a = d[7], d[8] !== C || d[9] !== n || d[10] !== a ? (s = {
      ...n,
      enabled: C,
      meta: a
    }, d[8] = C, d[9] = n, d[10] = a, d[11] = s) : s = d[11], (0, i.useQuery)(s)
  }, "useHatchExploreIdeaPreviewQuery", 0, function(e) {
    let r, n, a = (0, t.c)(7),
      l = (0, o.useGatewayQueryContext)(),
      s = (0, u.useHatchIdeaColorIconsWithoutExposure)();
    a[0] !== s || a[1] !== l || a[2] !== e ? (r = c.exploreIdeaPreviewQuery.queryOptions({
      gatewayUrl: l.gatewayUrl ?? "",
      gatewayScopeKey: l.gatewayScopeKey ?? l.targetKey,
      ideaCardId: e ?? "",
      colorIcons: s
    }, l), a[0] = s, a[1] = l, a[2] = e, a[3] = r) : r = a[3];
    let d = null != e && null != l.gatewayUrl && l.isReady;
    return a[4] !== r || a[5] !== d ? (n = {
      ...r,
      enabled: d
    }, a[4] = r, a[5] = d, a[6] = n) : n = a[6], (0, i.useQuery)(n)
  }, "useHatchExploreIdeasQuery", 0, function(e) {
    let n, i, a, d, y, h, m, g, _, C, I = (0, t.c)(36);
    I[0] !== e ? (n = void 0 === e ? {} : e, I[0] = e, I[1] = n) : n = I[1];
    let x = n.enabled ?? !0,
      w = (0, u.useHatchIdeaColorIconsWithoutExposure)(),
      {
        gatewayUrl: v,
        gatewayScopeKey: b,
        isReady: Q
      } = (0, l.useHatchRpc)(),
      S = (0, o.useGatewayQueryContext)(),
      P = v ?? "",
      E = b ?? P;
    I[2] !== w || I[3] !== E || I[4] !== P ? (i = {
      gatewayUrl: P,
      gatewayScopeKey: E,
      pageSize: p.EXPLORE_IDEAS_SECTION_PAGE_SIZE,
      colorIcons: w
    }, I[2] = w, I[3] = E, I[4] = P, I[5] = i) : i = I[5];
    let k = i;
    I[6] !== x || I[7] !== Q || I[8] !== P ? (a = x && P.length > 0 && (0, s.isMethodReadyForTransport)({
      method: "api.idea-cards.list",
      gatewayUrl: P,
      isWsReady: Q
    }), I[6] = x, I[7] = Q, I[8] = P, I[9] = a) : a = I[9];
    let A = a;
    I[10] !== S || I[11] !== k ? (d = c.exploreIdeasInfiniteQuery.infiniteQueryOptions(k, S), I[10] = S, I[11] = k, I[12] = d) : d = I[12], I[13] !== A || I[14] !== d ? (y = {
      ...d,
      enabled: A
    }, I[13] = A, I[14] = d, I[15] = y) : y = I[15];
    let K = (0, r.useInfiniteQuery)(y);
    I[16] !== K.data?.pages ? (h = K.data?.pages ?? [], I[16] = K.data?.pages, I[17] = h) : h = I[17], I[18] !== h ? (m = (0, c.mergeExploreIdeasPages)(h), I[18] = h, I[19] = m) : m = I[19];
    let M = m,
      L = null == K.data ? f : M,
      R = K.isPending || K.isFetchingNextPage,
      F = K.hasNextPage ?? !1;
    I[20] !== K ? (g = () => {
      K.fetchNextPage()
    }, I[20] = K, I[21] = g) : g = I[21];
    let H = K.data?.pages.length ?? 0;
    return I[22] !== K ? (_ = () => {
      K.refetch()
    }, I[22] = K, I[23] = _) : _ = I[23], I[24] !== K.error || I[25] !== K.isError || I[26] !== K.isFetchNextPageError || I[27] !== K.isFetchingNextPage || I[28] !== K.isPending || I[29] !== F || I[30] !== g || I[31] !== H || I[32] !== _ || I[33] !== L || I[34] !== R ? (C = {
      data: L,
      isPending: K.isPending,
      packsPending: K.isPending,
      postsPending: R,
      hasNextPage: F,
      isFetchingNextPage: K.isFetchingNextPage,
      isFetchNextPageError: K.isFetchNextPageError,
      fetchNextPageError: K.error,
      fetchNextPage: g,
      isError: K.isError,
      pageCount: H,
      refetch: _
    }, I[24] = K.error, I[25] = K.isError, I[26] = K.isFetchNextPageError, I[27] = K.isFetchingNextPage, I[28] = K.isPending, I[29] = F, I[30] = g, I[31] = H, I[32] = _, I[33] = L, I[34] = R, I[35] = C) : C = I[35], C
  }, "usePrefetchExploreIdeaDetail", 0, function() {
    let e, r = (0, t.c)(6),
      n = (0, a.useQueryClient)(),
      {
        gatewayUrl: i,
        gatewayScopeKey: s
      } = (0, l.useHatchRpc)(),
      d = (0, o.useGatewayQueryContext)(),
      p = (0, u.useHatchIdeaColorIconsWithoutExposure)(),
      y = i ?? "",
      f = s ?? y;
    return r[0] !== p || r[1] !== d || r[2] !== n || r[3] !== f || r[4] !== y ? (e = e => {
      0 !== y.length && c.exploreIdeaDetailQuery.prefetch(n, {
        gatewayUrl: y,
        gatewayScopeKey: f,
        ideaCardId: e,
        colorIcons: p
      }, d)
    }, r[0] = p, r[1] = d, r[2] = n, r[3] = f, r[4] = y, r[5] = e) : e = r[5], e
  }])
}, 654764, e => {
  "use strict";
  var t = e.i(722099),
    r = e.i(763971),
    n = e.i(22338),
    i = e.i(915637);
  e.s(["useActiveRoute", 0, function() {
    let e, a = (0, t.c)(6),
      l = (0, r.usePathname)(),
      u = (0, r.useSearchParams)();
    e: {
      let t, r;a[0] !== l || a[1] !== u ? (t = (0, n.resolveShellLocationMatch)(l, u, i.shellRouteMetadata), a[0] = l, a[1] = u, a[2] = t) : t = a[2];
      let {
        match: s
      } = t;
      if (s) {
        let t;
        a[3] !== s ? (t = {
          match: s,
          panelType: s.route.panelType,
          tracePolicy: s.tracePolicy,
          isShellRoute: !0,
          params: s.params
        }, a[3] = s, a[4] = t) : t = a[4], e = t;
        break e
      }
      a[5] === Symbol.for("react.memo_cache_sentinel") ? (r = {
        match: null,
        panelType: "chat",
        tracePolicy: void 0,
        isShellRoute: !1,
        params: {}
      }, a[5] = r) : r = a[5],
      e = r
    }
    return e
  }])
}, 39299, e => {
  "use strict";
  var t = e.i(984416),
    r = e.i(722099);

  function n(e) {
    let n, i, a, l, u = (0, r.c)(9);
    return u[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), u[0] = e.title, u[1] = n) : n = u[1], u[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), u[2] = e.children, u[3] = i) : i = u[3], u[4] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 0.13C16.62 0.13 20.38 3.88 20.38 8.5C20.38 10.85 19.36 12.42 18.46 13.68C17.53 15 16.88 15.84 16.88 17V17.88H16.87C16.87 17.92 16.88 17.96 16.88 18V19.5C16.88 20.73 15.95 21.73 14.75 21.86C14.74 21.92 14.72 21.98 14.7 22.03C14.64 22.19 14.54 22.37 14.45 22.55L14.25 22.95C14.21 23.04 14.12 23.24 13.97 23.41L13.9 23.48L13.79 23.58C13.67 23.68 13.53 23.75 13.39 23.8C13.14 23.89 12.87 23.88 12.76 23.88H11.24C11.13 23.88 10.86 23.89 10.61 23.8C10.42 23.73 10.24 23.63 10.1 23.48C9.91 23.3 9.8 23.05 9.75 22.95L9.55 22.55C9.46 22.37 9.36 22.19 9.3 22.03C9.28 21.98 9.26 21.92 9.25 21.86C8.05 21.73 7.13 20.73 7.13 19.5V18C7.13 17.96 7.13 17.92 7.13 17.88H7.13V17C7.13 15.84 6.47 14.99 5.54 13.67C4.64 12.4 3.63 10.84 3.63 8.5C3.63 3.88 7.38 0.13 12 0.13ZM11.29 22.13H12.71L12.84 21.88H11.17L11.29 22.13ZM9 17.88C8.93 17.88 8.88 17.93 8.88 18V19.5C8.88 19.85 9.15 20.13 9.5 20.13H14.5C14.85 20.13 15.13 19.85 15.13 19.5V18C15.13 17.93 15.07 17.88 15 17.88H9ZM12 1.88C8.34 1.88 5.38 4.84 5.38 8.5C5.38 10.27 6.11 11.45 6.96 12.66C7.64 13.62 8.52 14.72 8.79 16.13H15.21C15.48 14.72 16.36 13.63 17.04 12.67C17.89 11.47 18.63 10.28 18.63 8.5C18.63 4.84 15.66 1.88 12 1.88Z"
    }), u[4] = a) : a = u[4], u[5] !== e || u[6] !== n || u[7] !== i ? (l = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, i, a]
    }), u[5] = e, u[6] = n, u[7] = i, u[8] = l) : l = u[8], l
  }
  n._isSVG = !0, e.s(["default", 0, n])
}, 646398, e => {
  "use strict";
  var t = e.i(984416),
    r = e.i(722099);

  function n(e) {
    let n, i, a, l, u, s, o, d, c, p = (0, r.c)(14);
    return p[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), p[0] = e.title, p[1] = n) : n = p[1], p[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), p[2] = e.children, p[3] = i) : i = p[3], p[4] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.8 8.77C11.84 8 10.47 8 9.51 8.77C9.39 8.87 9.27 8.99 9.13 9.13C8.99 9.27 8.87 9.39 8.78 9.51C8 10.47 8 11.84 8.78 12.8C8.87 12.92 8.99 13.04 9.13 13.18L18.04 22.09C18.18 22.23 18.3 22.35 18.42 22.44C19.38 23.22 20.75 23.22 21.71 22.44C21.83 22.35 21.95 22.23 22.09 22.09C22.23 21.95 22.35 21.83 22.44 21.71C23.22 20.75 23.22 19.38 22.44 18.41C22.35 18.3 22.23 18.18 22.09 18.04L13.18 9.13C13.04 8.99 12.92 8.87 12.8 8.77ZM20.85 19.27C21.02 19.45 21.06 19.49 21.08 19.51C21.34 19.83 21.34 20.29 21.08 20.61C21.06 20.64 21.02 20.68 20.85 20.85C20.68 21.02 20.64 21.06 20.61 21.08C20.29 21.34 19.83 21.34 19.51 21.08C19.49 21.06 19.45 21.02 19.28 20.85L14.57 16.14C15.21 15.74 15.75 15.21 16.14 14.57L20.85 19.27ZM10.61 10.14C10.93 9.88 11.39 9.88 11.71 10.14C11.73 10.16 11.77 10.2 11.95 10.37L14.85 13.28C14.54 13.97 13.98 14.54 13.28 14.85L10.37 11.94C10.2 11.77 10.16 11.73 10.14 11.71C9.88 11.38 9.88 10.93 10.14 10.61C10.16 10.58 10.2 10.54 10.37 10.37C10.54 10.2 10.58 10.16 10.61 10.14Z"
    }), l = (0, t.jsx)("path", {
      d: "M6.79 17.21C6.44 16.87 5.89 16.87 5.55 17.21L3.6 19.16C3.26 19.5 3.26 20.05 3.6 20.4C3.95 20.74 4.5 20.74 4.84 20.4L6.79 18.45C7.13 18.11 7.13 17.56 6.79 17.21Z"
    }), u = (0, t.jsx)("path", {
      d: "M1 11.13C0.52 11.13 0.13 11.52 0.13 12C0.13 12.48 0.52 12.88 1 12.88H3.75C4.23 12.88 4.63 12.48 4.63 12C4.63 11.52 4.23 11.13 3.75 11.13H1Z"
    }), s = (0, t.jsx)("path", {
      d: "M20.4 3.6C20.06 3.26 19.5 3.26 19.16 3.6L17.21 5.55C16.87 5.89 16.87 6.44 17.21 6.79C17.56 7.13 18.11 7.13 18.45 6.79L20.4 4.84C20.74 4.5 20.74 3.95 20.4 3.6Z"
    }), o = (0, t.jsx)("path", {
      d: "M4.84 3.6C4.5 3.26 3.95 3.26 3.6 3.6C3.26 3.94 3.26 4.5 3.6 4.84L5.55 6.79C5.89 7.13 6.44 7.13 6.79 6.79C7.13 6.44 7.13 5.89 6.79 5.55L4.84 3.6Z"
    }), d = (0, t.jsx)("path", {
      d: "M12 0.13C11.52 0.13 11.13 0.52 11.13 1V3.75C11.13 4.23 11.52 4.62 12 4.63C12.48 4.63 12.88 4.23 12.88 3.75V1C12.88 0.52 12.48 0.13 12 0.13Z"
    }), p[4] = a, p[5] = l, p[6] = u, p[7] = s, p[8] = o, p[9] = d) : (a = p[4], l = p[5], u = p[6], s = p[7], o = p[8], d = p[9]), p[10] !== e || p[11] !== n || p[12] !== i ? (c = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, i, a, l, u, s, o, d]
    }), p[10] = e, p[11] = n, p[12] = i, p[13] = c) : c = p[13], c
  }
  n._isSVG = !0, e.s(["default", 0, n])
}]);

//# debugId=a48b1190-2ee7-b725-be28-d57e25814799
//# sourceMappingURL=2bw6c-3189bh5.js.map