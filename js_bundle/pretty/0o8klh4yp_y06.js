;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "de40dc0e-918d-a8ca-cb3a-a71d7cd1a8de")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 925494, e => {
  "use strict";
  let t = {
    META_TERMS: "https://www.facebook.com/legal/terms",
    AI_TERMS: "https://www.facebook.com/legal/ai-terms",
    AI_TERMS_UK: "https://www.facebook.com/legal/uk-ai-terms",
    AI_TERMS_EU: "https://www.facebook.com/legal/eu-ai-terms",
    AI_TERMS_BR: "https://www.facebook.com/legal/br-ai-terms",
    PRIVACY_POLICY_AI_PARTNERS: "https://www.facebook.com/privacy/dialog/ai-partners",
    AI_AT_META_PRIVACY: "https://www.facebook.com/privacy/genai/",
    PRIVACY_POLICY: "https://muse.ai/privacy",
    COOKIES_NOTICE: "https://www.facebook.com/privacy/policies/cookies/",
    OBJECT_TOS_LINK: "https://auth.meta.com/form/?form_id=1195697011444585",
    LEARN_MORE_ABOUT_PRIVACY_POLICY: "https://www.facebook.com/privacy/guide/genai",
    HATCH_DATA_CONTROLS_PRIVACY_HELP: "https://www.meta.com/help/artificial-intelligence/1047255454427887/",
    SMS_NOTIFICATIONS_HELP: "https://www.meta.com/help/artificial-intelligence/31983416211257755/",
    HATCH_TERMS: "https://muse.ai/terms",
    HATCH_CONNECTOR_TERMS: "https://muse.ai/platform/terms",
    HATCH_PRIVACY_POLICY: "https://muse.ai/privacy"
  };
  e.s(["TermsOfServiceLinks", 0, t, "classifyDisclosureLink", 0, function(e) {
    return e === t.HATCH_TERMS || /^\/terms\/?($|[?#])/i.test(e) ? "hatch_terms" : /ai-terms/i.test(e) ? "ai_terms" : e === t.META_TERMS || /\/legal\/terms\b/i.test(e) ? "meta_terms" : /\/privacy\b/i.test(e) ? "privacy_policy" : "other"
  }])
}, 701021, e => {
  "use strict";

  function t() {
    window.__hatchPeerInviteHandoff?.clear()
  }
  e.s(["HATCH_PEER_INVITE_FRAGMENT_MAX_LENGTH", 0, 2048, "captureHatchPeerInviteFragment", 0, function() {
    var e;
    if ("/hatch/peer/accept" !== (e = window.location.pathname) && "/hatch/peer/accept/" !== e || !window.location.hash) return;
    let a = window.location.hash.slice(1);
    if (window.history.replaceState(null, "", window.location.pathname + window.location.search), t(), !(a.length > 0 && a.length <= 2048 && a.length % 4 != 1 && /^[A-Za-z0-9_-]+$/.test(a))) return;
    let r = a,
      n = Date.now() + 3e5,
      i = () => {
        r = null, window.removeEventListener("pagehide", i), window.__hatchPeerInviteHandoff === l && delete window.__hatchPeerInviteHandoff
      },
      s = () => (Date.now() >= n && i(), null != r),
      l = {
        available: s,
        take: () => {
          let e = s() ? r : null;
          return i(), e
        },
        clear: i
      };
    Object.defineProperty(window, "__hatchPeerInviteHandoff", {
      value: l,
      configurable: !0
    }), window.addEventListener("pagehide", i, {
      once: !0
    })
  }, "clearHatchPeerInviteHandoff", 0, t, "hasHatchPeerInviteHandoff", 0, function() {
    return window.__hatchPeerInviteHandoff?.available() === !0
  }, "takeHatchPeerInviteHandoff", 0, function() {
    return window.__hatchPeerInviteHandoff?.take() ?? null
  }])
}, 384706, e => {
  "use strict";
  var t = e.i(519172);
  let a = (0, t.createContext)(!1);
  e.s(["HatchAvatarShareEligibilityContext", 0, a, "useHatchAvatarShareEligibility", 0, function() {
    return (0, t.useContext)(a)
  }])
}, 724103, e => {
  "use strict";
  var t = e.i(713140),
    a = e.i(235072);
  e.s(["buildPeerSidechatContactNames", 0, function(e) {
    let a = new Map;
    for (let r of e) {
      if ("verified" !== r.status || null == r.chatSessionId) continue;
      let e = (0, t.normalizeThreadSessionTitle)(r.displayName) ?? (0, t.normalizeThreadSessionTitle)(r.agentName);
      null == e || a.has(r.chatSessionId) || a.set(r.chatSessionId, e)
    }
    return a
  }, "resolvePeerSidechatContactTitle", 0, function(e, r) {
    var n;
    let i;
    return null != e && (0, a.isPeerSidechatSession)(e) ? (n = e.title, null != (i = (0, t.normalizeThreadSessionTitle)(n)) && "Peer" !== i) ? null : r.get(e.session_id) ?? null : null
  }])
}, 960607, e => {
  "use strict";
  var t = e.i(183912),
    a = e.i(389409);
  let r = new Set(["m4v", "mov", "mp4", "ogv", "webm"]),
    n = new Set(["v"]),
    i = {
      isVm: !1,
      noisePath: null
    };

  function s(e) {
    let t;
    try {
      t = new URL(e, "https://example.invalid")
    } catch {
      return i
    }
    if ("http:" !== t.protocol && "https:" !== t.protocol || !(0, a.isHatchVmGatewayHostname)(t.hostname)) return i;
    let r = t.pathname.indexOf("/fs/raw/"),
      s = t.pathname.indexOf("/media/raw/"),
      l = r >= 0 && (s < 0 || r < s),
      u = l ? r : s;
    if (u < 0) return {
      isVm: !0,
      noisePath: null
    };
    let o = t.pathname.slice(u + (l ? "/fs/raw/" : "/media/raw/").length);
    if (!o.startsWith("workspace/") || ! function(e) {
        let t = e.split("/");
        if ("workspace" !== t[0] || t.length < 2) return !1;
        for (let e of t) {
          let t = c(e);
          if (null == t || 0 === t.length || "." === t || ".." === t || t.includes("/") || t.includes("\\") || t.includes("\0")) return !1
        }
        return !0
      }(o)) return {
      isVm: !0,
      noisePath: null
    };
    let h = new URLSearchParams;
    if (l)
      for (let [e, a] of t.searchParams) n.has(e) && h.append(e, a);
    let d = h.toString();
    return {
      isVm: !0,
      noisePath: `/${o}${d.length>0?`?${d}`:""}`
    }
  }

  function l(e) {
    return s(e).isVm
  }

  function u(e) {
    try {
      let a = new URL(e, "https://example.invalid"),
        r = "https://example.invalid" === a.origin && e.startsWith("/");
      return "/api/session/fileserver-read" === a.pathname && (r || (0, t.getHatchOriginsAllowlist)().has(a.origin))
    } catch {
      return !1
    }
  }

  function o(e) {
    try {
      return decodeURIComponent(e)
    } catch {
      return e
    }
  }

  function c(e) {
    let t = e;
    for (let e = 0; e < 8; e++) {
      let e = o(t);
      if (e === t) return t;
      t = e
    }
    return o(t) === t ? t : null
  }

  function h(e) {
    let t = o(e.split(/[?#]/)[0] ?? e).split(/[\\/]/).pop();
    if (!t || 0 === t.length) return null;
    let a = t.split(".").pop()?.toLowerCase();
    return a && a !== t.toLowerCase() ? a : null
  }

  function d(e) {
    let t = e.trim();
    if (0 === t.length) return null;
    let a = f(t);
    if (null != a) return h(a);
    if (u(t)) return null;
    try {
      let e = new URL(t, "https://example.invalid"),
        a = e.searchParams.get("path");
      if (null != a && a.trim().length > 0) return h(a);
      return h(e.pathname)
    } catch {
      return h(t)
    }
  }

  function y(e) {
    let t = c(e);
    return null == t || "." === t || ".." === t
  }

  function f(e) {
    if (!u(e)) return null;
    try {
      let t = new URL(e, "https://example.invalid").searchParams.get("path"),
        a = t?.trim();
      if (null == a || 0 === a.length) return null;
      let r = a.trim().replace(/\\/g, "/").replace(/^\/+/, "");
      if (/[?#]/.test(r)) return null;
      let n = r.split("/").filter(e => e.length > 0);
      return n.length < 2 || "workspace" !== n[0] || n.some(y) ? null : n.join("/")
    } catch {
      return null
    }
  }

  function p(e) {
    let t = e.trim();
    if (0 === t.length) return "image";
    let a = t.toLowerCase();
    if (a.startsWith("data:")) return a.startsWith("data:video/") ? "video" : "image";
    if (a.startsWith("blob:")) return "image";
    let n = d(t);
    return n && r.has(n) ? "video" : "image"
  }
  let g = new Set(["mp3", "m4a", "wav", "ogg", "flac", "aac", "opus"]),
    m = {
      mp3: "audio/mpeg",
      m4a: "audio/mp4",
      wav: "audio/wav",
      ogg: "audio/ogg",
      flac: "audio/flac",
      aac: "audio/aac",
      opus: "audio/opus"
    };

  function w(e, t) {
    let a, r = e.replace(/^\/+/, "").split(/[?#]/)[0] ?? e;
    try {
      a = decodeURIComponent(r)
    } catch {
      a = r
    }
    let n = a.split("/").pop() ?? "audio",
      i = h(t) ?? h(a) ?? "mp3";
    return {
      path: a,
      filename: n,
      mimeType: m[i.toLowerCase()] ?? "audio/mpeg"
    }
  }
  e.s(["getHatchVmMedia", 0, s, "getTrustedWorkspaceFilePathFromSource", 0, f, "getVmMediaNoiseFetchPath", 0, function(e) {
    let t = s(e);
    return t.isVm ? t.noisePath : void 0
  }, "hatchMediaPlaybackSource", 0, function(e) {
    let t = e.previewUrl ?? null;
    if (null != t && t.length > 0 && !l(t)) return {
      kind: "direct",
      url: t
    };
    let a = null != e.path && e.path.length > 0 ? e.path : null;
    if (null != a) return {
      kind: "noise",
      path: a,
      urlEncodedPath: !1
    };
    if (null != t && t.length > 0) {
      let e = s(t);
      if (e.isVm && null != e.noisePath) return {
        kind: "noise",
        path: e.noisePath,
        urlEncodedPath: !0
      }
    }
    return null
  }, "inferHatchMediaKind", 0, p, "isHatchVideoSource", 0, function(e) {
    return "video" === p(e)
  }, "isHatchVmMediaUrl", 0, l, "isInternalHatchFileserverSource", 0, u, "mediaCacheKey", 0, function(e, t) {
    return `${t?"url-encoded":"literal"}:${e}`
  }, "parseWorkspaceAudioFile", 0, function(e) {
    let t;
    if (!(null != (t = d(e)) && g.has(t))) return null;
    if (e.startsWith("sandbox://")) return w(e.slice(10), e);
    let a = f(e);
    return null == a ? null : w(a, e)
  }])
}, 767369, e => {
  "use strict";
  var t = e.i(863641),
    a = e.i(790170);
  let r = {
      imessage: !0,
      messenger: !0,
      telegram: !0,
      whatsapp: !0
    },
    n = (0, a.createGatewayQuery)({
      id: "channels.status",
      queryKey: ({
        provider: e,
        targetKey: t
      }) => {
        let a;
        return ["channels", "status", e ?? "all", ...(a = t) ? [a] : []]
      },
      noiseFn: (e, t) => i(e.sendRequest, t.provider),
      staleTime: 3e4,
      meta: {
        sentrySurface: t.HATCH_SENTRY_SURFACES.SETTINGS_CHANNELS
      }
    });
  async function i(e, t) {
    return e("channels.status", t ? {
      provider: t
    } : {})
  }
  e.s(["channelsStatusQuery", 0, n, "findChannelStatus", 0, function(e, t) {
    return e?.channels.find(e => e.provider === t)
  }, "hasPendingChannelLink", 0, function(e) {
    return e?.channels.some(e => "link_pending" === e.status || "unlink_pending" === e.status) ?? !1
  }, "isChannelProvider", 0, function(e) {
    return "string" == typeof e && Object.hasOwn(r, e)
  }])
}, 790170, e => {
  "use strict";
  var t = e.i(226488),
    a = e.i(85461),
    r = e.i(975740);

  function n(e) {
    let t = e.targetKey;
    return {
      ...e,
      sendRequest: (a, r, n) => {
        let i = n?.expectedGatewayTargetKey != null ? {
          ...n,
          expectedGatewayTargetKey: t
        } : {
          ...n,
          expectedTargetKey: t
        };
        return e.sendRequest(a, r, i)
      }
    }
  }
  e.s(["createGatewayInfiniteQuery", 0, function(e) {
    let t = {
      infiniteQueryOptions: (t, i) => {
        let s, l = n(i);
        if (e.noiseFn) s = e.noiseFn;
        else if (null != (0, a.resolveHttpRoute)(e.id)) s = async (t, a, r) => {
          let {
            gatewayUrl: n,
            ...i
          } = a, s = {
            ...i,
            ...null != r ? {
              cursor: r
            } : {}
          };
          return t.sendRequest(e.id, s)
        };
        else if (e.queryFn) s = e.queryFn;
        else throw Error(`createGatewayInfiniteQuery(${e.id}): no noiseFn, no Noise route, and no queryFn`);
        return {
          queryKey: e.queryKey(t),
          queryFn: ({
            pageParam: a
          }) => {
            let n = e.earlyPreload?.(t, l, a);
            if (null != n) {
              let e = (0, r.getEarlyGatewayQueryPreload)(n.sourceKey);
              if (null != e) {
                let t = e.promise.then(n.transform);
                return t.then(() => (0, r.clearEarlyGatewayQueryPromise)(n.sourceKey, e.promise), () => (0, r.clearEarlyGatewayQueryPromise)(n.sourceKey, e.promise)), t
              }
            }
            return s(l, t, a)
          },
          initialPageParam: e.initialPageParam,
          getNextPageParam: e.getNextPageParam,
          staleTime: e.staleTime,
          gcTime: e.gcTime,
          meta: e.meta,
          refetchOnMount: !1
        }
      },
      suspenseInfiniteQueryOptions: (e, a) => t.infiniteQueryOptions(e, a),
      queryKey: e.queryKey,
      invalidate: (t, a) => t.invalidateQueries({
        queryKey: e.queryKey(a)
      }),
      invalidateAll: t => {
        if (!e.invalidationKey) throw Error(`createGatewayInfiniteQuery(${e.id}): invalidateAll called but no invalidationKey configured`);
        return t.invalidateQueries({
          queryKey: e.invalidationKey()
        })
      },
      setData: (t, a, r) => t.setQueryData(e.queryKey(a), r),
      removeData: (t, a) => t.removeQueries({
        queryKey: e.queryKey(a)
      }),
      prefetch: async (e, a, r) => {
        try {
          await e.prefetchInfiniteQuery(t.infiniteQueryOptions(a, r))
        } catch {}
      }
    };
    return t
  }, "createGatewayQuery", 0, function(e) {
    let r = {
      queryOptions: (r, i) => {
        let s, l = n(i);
        if (e.noiseFn) s = e.noiseFn;
        else if (null != (0, a.resolveHttpRoute)(e.id)) s = async (t, a) => {
          let {
            gatewayUrl: r,
            ...n
          } = a;
          return t.sendRequest(e.id, n)
        };
        else if (e.queryFn) s = e.queryFn;
        else throw Error(`createGatewayQuery(${e.id}): no noiseFn, no Noise route, and no queryFn`);
        return (0, t.queryOptions)({
          queryKey: e.queryKey(r),
          queryFn: () => s(l, r),
          staleTime: e.staleTime,
          gcTime: e.gcTime,
          meta: e.meta,
          refetchOnMount: !1
        })
      },
      queryKey: e.queryKey,
      invalidate: (t, a) => t.invalidateQueries({
        queryKey: e.queryKey(a)
      }),
      invalidateAll: t => {
        if (!e.invalidationKey) throw Error(`createGatewayQuery(${e.id}): invalidateAll called but no invalidationKey configured`);
        return t.invalidateQueries({
          queryKey: e.invalidationKey()
        })
      },
      setData: (t, a, r) => t.setQueryData(e.queryKey(a), r),
      removeData: (t, a) => t.removeQueries({
        queryKey: e.queryKey(a)
      }),
      prefetch: async (e, t, a) => {
        try {
          await e.prefetchQuery(r.queryOptions(t, a))
        } catch {}
      }
    };
    return r
  }], 790170)
}, 720756, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(871157),
    r = e.i(175286),
    n = e.i(907579);

  function i() {
    let e, i, s = (0, t.c)(12),
      {
        gatewayUrl: l,
        gatewayScopeKey: u,
        vmName: o,
        sendRequest: c,
        isReady: h,
        ensureLiveConnection: d
      } = (0, r.useHatchRpc)();
    s[0] !== l || s[1] !== o ? (e = (0, a.gatewayTargetKey)(l, o), s[0] = l, s[1] = o, s[2] = e) : e = s[2];
    let y = e,
      f = u ?? y,
      p = (0, n.useHatchGatewayFs)();
    return s[3] !== d || s[4] !== p || s[5] !== l || s[6] !== h || s[7] !== f || s[8] !== c || s[9] !== y || s[10] !== o ? (i = {
      gatewayUrl: l,
      vmName: o,
      targetKey: y,
      gatewayScopeKey: f,
      sendRequest: c,
      fs: p,
      isReady: h,
      waitForTransport: d
    }, s[3] = d, s[4] = p, s[5] = l, s[6] = h, s[7] = f, s[8] = c, s[9] = y, s[10] = o, s[11] = i) : i = s[11], i
  }
  e.s(["useGatewayQueryContext", 0, i, "useRequiredGatewayQueryContext", 0, function() {
    let e = i();
    if (!e.gatewayUrl) throw Error("useRequiredGatewayQueryContext: gatewayUrl is null. Only use in components rendered after shell bootstrap.");
    return e
  }])
}, 713140, 235072, e => {
  "use strict";
  var t = e.i(766271),
    a = e.i(863641);
  let r = "peer";
  e.s(["PEER_SIDECHAT_CHANNEL", 0, r, "isPeerSidechatSession", 0, function(e) {
    return e?.peer_sidechat === !0
  }], 235072);
  var n = e.i(767369),
    i = e.i(790170);
  let s = {
      include_peer_sidechats: !0
    },
    l = new Set,
    u = {
      all: ["thread-sessions"],
      list: e => ["thread-sessions", e]
    },
    o = (0, i.createGatewayQuery)({
      id: "thread-sessions.list",
      queryKey: ({
        targetKey: e
      }) => u.list(e),
      noiseFn: async (e, {
        targetKey: a
      }) => {
        var r;
        let n = await e.sendRequest("sessions.list", s, {
          expectedGatewayTargetKey: a
        });
        return r = u.list(a), l.delete((0, t.hashKey)(r)), g(n)
      },
      invalidationKey: () => u.all,
      staleTime: 3e4,
      meta: {
        sentrySurface: a.HATCH_SENTRY_SURFACES.CHAT_CHANNEL
      }
    }),
    c = {
      all: ["thread-session"],
      detail: (e, t) => ["thread-session", e, t]
    },
    h = (0, i.createGatewayQuery)({
      id: "sessions.get",
      queryKey: ({
        targetKey: e,
        sessionId: t
      }) => c.detail(e, t),
      noiseFn: async (e, {
        targetKey: t,
        sessionId: a
      }) => (function(e) {
        var t;
        let a = w(e) && "session" in e && !("session_id" in e) ? e.session : e;
        if (!(w(t = a) && "string" == typeof t.session_id && t.session_id.trim().length > 0 && "string" == typeof t.status && "boolean" == typeof t.is_primary && "boolean" == typeof t.is_thread)) throw Error("sessions.get returned an invalid session payload");
        return m(a)
      })(await e.sendRequest("sessions.get", {
        id: a
      }, {
        expectedGatewayTargetKey: t
      })),
      invalidationKey: () => c.all,
      staleTime: 3e4,
      meta: {
        sentrySurface: a.HATCH_SENTRY_SURFACES.CHAT_CHANNEL
      }
    }),
    d = {
      all: ["archived-sessions"],
      list: e => ["archived-sessions", e]
    },
    y = (0, i.createGatewayQuery)({
      id: "archived-sessions.list",
      queryKey: ({
        targetKey: e
      }) => d.list(e),
      noiseFn: async (e, {
        targetKey: t
      }) => g(await e.sendRequest("sessions.list", {
        ...s,
        view: "archived"
      }, {
        expectedGatewayTargetKey: t
      })),
      invalidationKey: () => d.all,
      staleTime: 3e4
    });

  function f(e) {
    if ("string" != typeof e) return null;
    let t = e.trim();
    return t.length > 0 ? t : null
  }

  function p(e) {
    return null == e || !Number.isFinite(e) || e <= 0 ? 0 : e < 1e11 ? 1e3 * e : e
  }

  function g(e) {
    return e.sessions.map(m)
  }

  function m(e) {
    var t;
    let a = f(e.title),
      i = f("string" == typeof e.channel ? e.channel : null),
      s = f("string" == typeof e.space_slug ? e.space_slug : null) ?? f("string" == typeof e.space_id ? e.space_id : null),
      l = "peer" === (t = e.read_only_reason) || "provider" === t || "internal" === t ? t : null,
      u = "peer" === l || i === r,
      o = p(e.created_at ?? e.created_at_ms),
      c = p(e.updated_at ?? e.updated_at_ms);
    return {
      session_id: e.session_id,
      ...(0, n.isChannelProvider)(i) ? {
        channel: i
      } : {},
      ...u ? {
        peer_sidechat: !0
      } : {},
      ..."boolean" == typeof e.can_send_messages ? {
        can_send_messages: e.can_send_messages
      } : {},
      ..."boolean" == typeof e.can_send_actions ? {
        can_send_actions: e.can_send_actions
      } : {},
      ...null == l ? {} : {
        read_only_reason: l
      },
      created_at: o,
      updated_at: c,
      status: e.status,
      title: a ?? void 0,
      snippet: e.snippet,
      is_primary: e.is_primary,
      is_thread: e.is_thread,
      archived: e.archived,
      pinned: e.pinned,
      unread_count: e.unread_count,
      ...null == s ? {} : {
        space_slug: s
      }
    }
  }

  function w(e) {
    return "object" == typeof e && null != e && !Array.isArray(e)
  }
  e.s(["THREAD_SESSIONS_LIST_PARAMS", 0, s, "archivedSessionsListQuery", 0, y, "archivedSessionsQueryKeys", 0, d, "findThreadSessionTitle", 0, function(e, t) {
    if (null == e || null == t) return null;
    let a = e.find(e => e.session_id === t);
    return f(a?.title)
  }, "getCachedThreadSession", 0, function(e, t) {
    let a = e.getQueryData(h.queryKey(t));
    return null != a ? a : e.getQueryData(o.queryKey({
      targetKey: t.targetKey
    }))?.find(e => e.session_id === t.sessionId)
  }, "isHydrateOnlySessionList", 0, function(e) {
    return l.has((0, t.hashKey)(e))
  }, "markHydrateOnlySessionList", 0, function(e) {
    l.add((0, t.hashKey)(e))
  }, "normalizeThreadSessionTimestamp", 0, p, "normalizeThreadSessionTitle", 0, f, "threadSessionQuery", 0, h, "threadSessionQueryKeys", 0, c, "threadSessionsListQuery", 0, o, "threadSessionsQueryKeys", 0, u], 713140)
}, 490289, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(519172),
    r = e.i(849329),
    n = e.i(393202),
    i = e.i(365500),
    s = e.i(359783),
    l = e.i(917694),
    u = e.i(175286),
    o = e.i(14751),
    c = e.i(720756),
    h = e.i(713140);
  let d = (0, s.createClientLogger)("useHatchThreadSessionsQuery");

  function y(e) {
    d.retainForBugReport("warn", "Failed to prune cached side chat transcripts")
  }

  function f(e) {
    d.retainForBugReport("warn", "Failed to persist side chat list")
  }

  function p(e) {
    d.retainForBugReport("warn", "Failed to read cached side chat list")
  }
  e.s(["useHatchThreadSessionsQuery", 0, function(e) {
    let s, d, g, m, w, S, C, v, _, T, H, P = (0, t.c)(38),
      I = void 0 === e || e,
      {
        isReady: K,
        gatewayUrl: b,
        vmName: R
      } = (0, u.useHatchRpc)(),
      A = (0, c.useGatewayQueryContext)(),
      E = (0, i.useOptionalAuth)(),
      M = E?.userId ?? null,
      O = (0, n.useQueryClient)();
    if (P[0] !== A) {
      let e = {
        targetKey: A.targetKey
      };
      s = h.threadSessionsListQuery.queryOptions(e, A), P[0] = A, P[1] = s
    } else s = P[1];
    let Q = s;
    P[2] !== A.targetKey ? (d = h.threadSessionsListQuery.queryKey({
      targetKey: A.targetKey
    }), P[2] = A.targetKey, P[3] = d) : d = P[3];
    let N = d;
    P[4] !== E || P[5] !== A.targetKey || P[6] !== b || P[7] !== R ? (g = E?.userId != null && (null != b || null != R) ? (0, l.buildSideChatListCacheKey)(E.userId, A.targetKey) : null, P[4] = E, P[5] = A.targetKey, P[6] = b, P[7] = R, P[8] = g) : g = P[8];
    let q = g;
    P[9] !== I || P[10] !== b || P[11] !== K ? (m = I && (0, o.isMethodReadyForTransport)({
      method: "sessions.list",
      gatewayUrl: b,
      isWsReady: K
    }), P[9] = I, P[10] = b, P[11] = K, P[12] = m) : m = P[12], P[13] !== Q || P[14] !== m ? (w = {
      ...Q,
      refetchOnMount: !0,
      enabled: m
    }, P[13] = Q, P[14] = m, P[15] = w) : w = P[15];
    let L = (0, r.useQuery)(w);
    return P[16] !== A.targetKey || P[17] !== q || P[18] !== O || P[19] !== N ? (S = () => {
      if (null == q || null != O.getQueryData(N)) return;
      let e = !1;
      return (0, l.readSideChatListCache)(q, A.targetKey).then(t => {
        e || null == t || null != O.getQueryData(N) || (O.setQueryData(N, t.sessions, {
          updatedAt: t.cachedAtMs
        }), (0, h.markHydrateOnlySessionList)(N))
      }).catch(p), () => {
        e = !0
      }
    }, C = [A.targetKey, q, O, N], P[16] = A.targetKey, P[17] = q, P[18] = O, P[19] = N, P[20] = S, P[21] = C) : (S = P[20], C = P[21]), (0, a.useEffect)(S, C), P[22] !== A.targetKey || P[23] !== I || P[24] !== q || P[25] !== L.data || P[26] !== O || P[27] !== N ? (v = () => {
      if (!I || null == q || null == L.data || (0, h.isHydrateOnlySessionList)(N)) return;
      let e = O.getQueryState(N)?.dataUpdatedAt ?? Date.now(),
        t = (0, l.buildSideChatListCacheEntry)(q, A.targetKey, L.data, e);
      (0, l.writeSideChatListCache)(t).catch(f)
    }, _ = [A.targetKey, I, q, L.data, O, N], P[22] = A.targetKey, P[23] = I, P[24] = q, P[25] = L.data, P[26] = O, P[27] = N, P[28] = v, P[29] = _) : (v = P[28], _ = P[29]), (0, a.useEffect)(v, _), P[30] !== A.targetKey || P[31] !== I || P[32] !== L.data || P[33] !== O || P[34] !== N || P[35] !== M ? (T = () => {
      if (!I || null == M || null == L.data) return;
      let e = O.getQueryState(N)?.dataUpdatedAt ?? Date.now();
      (0, l.pruneSideChatTranscriptCache)(M, A.targetKey, L.data, e).catch(y)
    }, H = [A.targetKey, I, L.data, O, N, M], P[30] = A.targetKey, P[31] = I, P[32] = L.data, P[33] = O, P[34] = N, P[35] = M, P[36] = T, P[37] = H) : (T = P[36], H = P[37]), (0, a.useEffect)(T, H), L
  }])
}, 384784, 993801, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(479223),
    r = e.i(384706),
    n = e.i(390808),
    i = e.i(829051),
    s = e.i(490289),
    l = e.i(713140),
    u = e.i(724103),
    o = e.i(274169),
    c = e.i(235072);
  let h = new Map;

  function d(e) {
    let a, r, n, i, s, l = (0, t.c)(11);
    l[0] !== e ? (a = e?.some(c.isPeerSidechatSession) ?? !1, l[0] = e, l[1] = a) : a = l[1];
    let d = a;
    l[2] !== d ? (r = {
      enabled: d
    }, l[2] = d, l[3] = r) : r = l[3];
    let f = (0, o.useTrustedNetworkStatusQuery)(r),
      p = d && null != f.current,
      g = f.current ?? f.cachedMountableStatus;
    l[4] === Symbol.for("react.memo_cache_sentinel") ? (n = {
      contacts: !0
    }, l[4] = n) : n = l[4], l[5] !== p || l[6] !== g ? (i = {
      enteredFeature: p,
      currentStatus: g,
      requestedReads: n
    }, l[5] = p, l[6] = g, l[7] = i) : i = l[7];
    let {
      contacts: m
    } = (0, o.useTrustedNetworkManagementQueries)(i), w = m.data?.pages;
    return l[8] !== d || l[9] !== w ? (s = d && null != w ? (0, u.buildPeerSidechatContactNames)(w.flatMap(y)) : h, l[8] = d, l[9] = w, l[10] = s) : s = l[10], s
  }

  function y(e) {
    return e.items
  }
  e.s(["usePeerSidechatContactNames", 0, d], 993801);
  var f = e.i(672495);
  let p = e => (0, i.getVisibleTranscriptMessageIds)(e.messageIds, e.messagesById),
    g = e => e.isLoading,
    m = e => e.historyLoaded,
    w = e => e.isCheckingPersistentCache,
    S = e => e.hasProvisionalCachedHistory,
    C = e => e.isRefreshingCachedHistory,
    v = e => e.isStreaming,
    _ = e => e.hasMore,
    T = e => e.isLoadingOlder,
    H = e => e.isExpectingBotResponse,
    P = e => e.expectingBotResponseAnchorIndex,
    I = e => e.model,
    K = e => e.modelIdentityVisibility,
    b = e => e.voiceId,
    R = e => e.captionsEnabled,
    A = e => e.isLoadingNewer,
    E = e => e.hasMoreNewer,
    M = e => e.isAtBottom,
    O = e => e.isViewingHistory,
    Q = e => e.modelDisplayName,
    N = e => e.availableModels,
    q = e => {
      for (let t of (0, i.getVisibleTranscriptMessageIds)(e.messageIds, e.messagesById)) {
        let a = e.messagesById[t];
        if (a?.role !== "user") continue;
        let r = a.content.trim().replace(/\s+/g, " ");
        if (r.length > 0) return r
      }
      return null
    };

  function L() {
    return (0, f.useHatchChatSelector)(x)
  }

  function x(e) {
    return e.deletedChatImageKeys
  }

  function F(e) {
    return (0, i.getVisibleTranscriptMessageIds)(e.messageIds, e.messagesById).map(t => e.messagesById[t])
  }

  function k(e) {
    let a, r, n, i = (0, t.c)(9),
      o = e?.kind === "thread" ? e.sessionId : null,
      c = (0, s.useHatchThreadSessionsQuery)(null != o);
    i[0] !== o ? (a = e => null == o ? null : e.threadTitlesBySession[o] ?? null, i[0] = o, i[1] = a) : a = i[1];
    let h = (0, f.useHatchChatSelector)(a),
      y = (0, f.useHatchChatSelector)(q);
    i[2] !== o || i[3] !== c.data ? (r = (0, l.findThreadSessionTitle)(c.data, o), i[2] = o, i[3] = c.data, i[4] = r) : r = i[4];
    let p = r,
      g = d(c.data);
    return i[5] !== o || i[6] !== g || i[7] !== c.data ? (n = (0, u.resolvePeerSidechatContactTitle)(c.data?.find(e => e.session_id === o), g), i[5] = o, i[6] = g, i[7] = c.data, i[8] = n) : n = i[8], n ?? p ?? h ?? y
  }
  let V = [];
  e.s(["findMessageForAudioTrack", 0, function(e, t) {
    if (null == t) return null;
    let a = e => e.startsWith("/") ? e.slice(1) : e,
      r = a(t);
    for (let n of e.messageIds) {
      let i = e.messagesById[n];
      if (i?.files != null)
        for (let e of i.files) {
          let n = e.path ?? e.filename;
          if (n === t || a(n) === r) return i
        }
    }
    return null
  }, "useCaptionsEnabled", 0, function() {
    return (0, f.useHatchChatSelector)(R)
  }, "useChatAvailableModels", 0, function() {
    return (0, f.useHatchChatSelector)(N, a.shallow)
  }, "useChatExpectingBotResponseAnchorIndex", 0, function() {
    return (0, f.useHatchChatSelector)(P)
  }, "useChatHasMore", 0, function() {
    return (0, f.useHatchChatSelector)(_)
  }, "useChatHasMoreNewer", 0, function() {
    return (0, f.useHatchChatSelector)(E)
  }, "useChatHasProvisionalCachedHistory", 0, function() {
    return (0, f.useHatchChatSelector)(S)
  }, "useChatHistoryLoaded", 0, function() {
    return (0, f.useHatchChatSelector)(m)
  }, "useChatIsAtBottom", 0, function() {
    return (0, f.useHatchChatSelector)(M)
  }, "useChatIsCheckingPersistentCache", 0, function() {
    return (0, f.useHatchChatSelector)(w)
  }, "useChatIsExpectingBotResponse", 0, function() {
    return (0, f.useHatchChatSelector)(H)
  }, "useChatIsLoading", 0, function() {
    return (0, f.useHatchChatSelector)(g)
  }, "useChatIsLoadingNewer", 0, function() {
    return (0, f.useHatchChatSelector)(A)
  }, "useChatIsLoadingOlder", 0, function() {
    return (0, f.useHatchChatSelector)(T)
  }, "useChatIsRefreshingCachedHistory", 0, function() {
    return (0, f.useHatchChatSelector)(C)
  }, "useChatIsStreaming", 0, function() {
    return (0, f.useHatchChatSelector)(v)
  }, "useChatIsViewingHistory", 0, function() {
    return (0, f.useHatchChatSelector)(O)
  }, "useChatMessage", 0, function(e) {
    let a, r = (0, t.c)(2);
    return r[0] !== e ? (a = t => t.messagesById[e], r[0] = e, r[1] = a) : a = r[1], (0, f.useHatchChatSelector)(a)
  }, "useChatMessageIds", 0, function() {
    return (0, f.useHatchChatSelector)(p, a.shallow)
  }, "useChatMessagesArray", 0, function() {
    return (0, f.useHatchChatSelector)(F, a.shallow)
  }, "useChatModel", 0, function() {
    return (0, f.useHatchChatSelector)(I)
  }, "useChatModelDisplayName", 0, function() {
    return (0, f.useHatchChatSelector)(Q)
  }, "useChatModelIdentityVisibility", 0, function() {
    return (0, f.useHatchChatSelector)(K)
  }, "useChatThreadTitle", 0, function() {
    return k((0, n.useEffectiveHatchChatRoute)())
  }, "useChatThreadTitleForRoute", 0, k, "useChatUnreadCount", 0, function() {
    let e, a = (0, t.c)(2),
      n = (0, r.useHatchAvatarShareEligibility)();
    return a[0] !== n ? (e = e => ((e, t) => {
      let a = e.chat;
      if (!a.lastSeenTimestamp) return 0;
      let r = 0,
        n = (0, i.getVisibleTranscriptMessageIds)(a.messageIds, a.messagesById);
      for (let e = n.length - 1; e >= 0; e -= 1) {
        let s = a.messagesById[n[e]];
        !s || s.isTextStreaming || s.isBackground || "user" === s.role || "system" === s.role || !("assistant" === s.role && null != s.messageId && ((0, i.isHiddenNoopToolMessage)(s) || !(0, i.hasVisibleAssistantOutput)(s, !0, t))) && s.createdAt > a.lastSeenTimestamp && (r += 1)
      }
      return r
    })(e, n), a[0] = n, a[1] = e) : e = a[1], (0, f.useHatchSelector)(e)
  }, "useDeletedChatImageKeys", 0, L, "useDeletedChatMediaKeys", 0, L, "useMessageReactions", 0, function(e) {
    let a, r = (0, t.c)(2);
    return r[0] !== e ? (a = t => null == e ? V : t.reactions[e] ?? V, r[0] = e, r[1] = a) : a = r[1], (0, f.useHatchChatSelector)(a)
  }, "useVoiceId", 0, function() {
    return (0, f.useHatchChatSelector)(b)
  }], 384784)
}, 226488, e => {
  "use strict";
  e.s(["queryOptions", 0, function(e) {
    return e
  }])
}, 293760, 121712, e => {
  "use strict";
  var t = e.i(414822),
    a = e.i(384778),
    r = class extends t.QueryObserver {
      constructor(e, t) {
        super(e, t)
      }
      bindMethods() {
        super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
      }
      setOptions(e) {
        super.setOptions({
          ...e,
          behavior: (0, a.infiniteQueryBehavior)()
        })
      }
      getOptimisticResult(e) {
        return e.behavior = (0, a.infiniteQueryBehavior)(), super.getOptimisticResult(e)
      }
      fetchNextPage(e) {
        return this.fetch({
          ...e,
          meta: {
            fetchMore: {
              direction: "forward"
            }
          }
        })
      }
      fetchPreviousPage(e) {
        return this.fetch({
          ...e,
          meta: {
            fetchMore: {
              direction: "backward"
            }
          }
        })
      }
      createResult(e, t) {
        let {
          state: r
        } = e, n = super.createResult(e, t), {
          isFetching: i,
          isRefetching: s,
          isError: l,
          isRefetchError: u
        } = n, o = r.fetchMeta?.fetchMore?.direction, c = l && "forward" === o, h = i && "forward" === o, d = l && "backward" === o, y = i && "backward" === o;
        return {
          ...n,
          fetchNextPage: this.fetchNextPage,
          fetchPreviousPage: this.fetchPreviousPage,
          hasNextPage: (0, a.hasNextPage)(t, r.data),
          hasPreviousPage: (0, a.hasPreviousPage)(t, r.data),
          isFetchNextPageError: c,
          isFetchingNextPage: h,
          isFetchPreviousPageError: d,
          isFetchingPreviousPage: y,
          isRefetchError: u && !c && !d,
          isRefetching: s && !h && !y
        }
      }
    };
  e.s(["InfiniteQueryObserver", 0, r], 121712);
  var n = e.i(768380);
  e.s(["useInfiniteQuery", 0, function(e, t) {
    return (0, n.useBaseQuery)(e, r, t)
  }], 293760)
}, 479223, e => {
  "use strict";
  let t = (e, t) => {
    let a = e instanceof Map ? e : new Map(e.entries()),
      r = t instanceof Map ? t : new Map(t.entries());
    if (a.size !== r.size) return !1;
    for (let [e, t] of a)
      if (!r.has(e) || !Object.is(t, r.get(e))) return !1;
    return !0
  };
  e.s(["shallow", 0, function(e, a) {
    if (Object.is(e, a)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof a || null === a || Object.getPrototypeOf(e) !== Object.getPrototypeOf(a)) return !1;
    if (Symbol.iterator in e && Symbol.iterator in a) {
      if ("entries" in e && "entries" in a) return t(e, a);
      let r = e[Symbol.iterator](),
        n = a[Symbol.iterator](),
        i = r.next(),
        s = n.next();
      for (; !i.done && !s.done;) {
        if (!Object.is(i.value, s.value)) return !1;
        i = r.next(), s = n.next()
      }
      return !!i.done && !!s.done
    }
    return t({
      entries: () => Object.entries(e)
    }, {
      entries: () => Object.entries(a)
    })
  }])
}, 203576, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099);

  function r(e) {
    let r, n, i, s, l = (0, a.c)(9);
    return l[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), l[0] = e.title, l[1] = r) : r = l[1], l[2] !== e.children ? (n = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), l[2] = e.children, l[3] = n) : n = l[3], l[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      d: "M11.977 23c-3.336-.022-5.902-1.105-7.625-3.217-1.534-1.88-2.325-4.496-2.352-7.775v-.016c.027-3.279.818-5.895 2.352-7.775C6.075 2.105 8.64 1.022 11.977 1H11.99c2.558.017 4.698.664 6.361 1.922 1.563 1.183 2.663 2.87 3.27 5.013l-1.9.52c-1.029-3.63-3.632-5.484-7.737-5.514-2.71.02-4.76.858-6.094 2.491C4.642 6.962 3.997 9.172 3.973 12c.024 2.828.67 5.038 1.917 6.568 1.333 1.633 3.383 2.471 6.094 2.49 2.443-.016 4.06-.577 5.405-1.873 1.535-1.479 1.507-3.293 1.016-4.397-.29-.65-.814-1.192-1.522-1.603-.178 1.237-.579 2.242-1.197 2.999-.825 1.01-1.994 1.562-3.474 1.64-1.121.06-2.2-.2-3.038-.734-.99-.63-1.57-1.596-1.632-2.718-.06-1.091.38-2.094 1.238-2.825.82-.698 1.975-1.107 3.338-1.183a12.946 12.946 0 0 1 2.814.13c-.115-.68-.348-1.219-.697-1.61-.478-.535-1.218-.81-2.198-.816-.79-.002-1.876.201-2.564 1.209L7.835 8.194c.919-1.344 2.412-2.08 4.214-2.067 2.977.018 4.75 1.81 4.927 4.939.1.041.2.085.299.13 1.389.643 2.405 1.616 2.938 2.814.742 1.67.81 4.391-1.443 6.562-1.723 1.66-3.813 2.408-6.78 2.428h-.013zm.94-10.717c-.224 0-.454.006-.688.02-1.71.094-2.777.865-2.716 1.964.063 1.15 1.353 1.684 2.593 1.62 1.14-.061 2.626-.498 2.875-3.402a10.04 10.04 0 0 0-2.063-.202z"
    }), l[4] = i) : i = l[4], l[5] !== e || l[6] !== r || l[7] !== n ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, n, i]
    }), l[5] = e, l[6] = r, l[7] = n, l[8] = s) : s = l[8], s
  }
  r._isSVG = !0, e.s(["default", 0, r])
}]);

//# debugId=de40dc0e-918d-a8ca-cb3a-a71d7cd1a8de
//# sourceMappingURL=2tj8thm4xiujc.js.map