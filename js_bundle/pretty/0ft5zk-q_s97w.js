;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "01e099f9-4f9d-03a3-adf0-ed83412432cd")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 701021, e => {
  "use strict";

  function t() {
    window.__hatchPeerInviteHandoff?.clear()
  }
  e.s(["HATCH_PEER_INVITE_FRAGMENT_MAX_LENGTH", 0, 2048, "captureHatchPeerInviteFragment", 0, function() {
    var e;
    if ("/hatch/peer/accept" !== (e = window.location.pathname) && "/hatch/peer/accept/" !== e || !window.location.hash) return;
    let n = window.location.hash.slice(1);
    if (window.history.replaceState(null, "", window.location.pathname + window.location.search), t(), !(n.length > 0 && n.length <= 2048 && n.length % 4 != 1 && /^[A-Za-z0-9_-]+$/.test(n))) return;
    let a = n,
      r = Date.now() + 3e5,
      i = () => {
        a = null, window.removeEventListener("pagehide", i), window.__hatchPeerInviteHandoff === l && delete window.__hatchPeerInviteHandoff
      },
      s = () => (Date.now() >= r && i(), null != a),
      l = {
        available: s,
        take: () => {
          let e = s() ? a : null;
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
  let n = (0, t.createContext)(!1);
  e.s(["HatchAvatarShareEligibilityContext", 0, n, "useHatchAvatarShareEligibility", 0, function() {
    return (0, t.useContext)(n)
  }])
}, 724103, e => {
  "use strict";
  var t = e.i(713140),
    n = e.i(235072);
  e.s(["buildPeerSidechatContactNames", 0, function(e) {
    let n = new Map;
    for (let a of e) {
      if ("verified" !== a.status || null == a.chatSessionId) continue;
      let e = (0, t.normalizeThreadSessionTitle)(a.displayName) ?? (0, t.normalizeThreadSessionTitle)(a.agentName);
      null == e || n.has(a.chatSessionId) || n.set(a.chatSessionId, e)
    }
    return n
  }, "resolvePeerSidechatContactTitle", 0, function(e, a) {
    var r;
    let i;
    return null != e && (0, n.isPeerSidechatSession)(e) ? (r = e.title, null != (i = (0, t.normalizeThreadSessionTitle)(r)) && "Peer" !== i) ? null : a.get(e.session_id) ?? null : null
  }])
}, 960607, e => {
  "use strict";
  var t = e.i(183912),
    n = e.i(389409);
  let a = new Set(["m4v", "mov", "mp4", "ogv", "webm"]),
    r = new Set(["v"]),
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
    if ("http:" !== t.protocol && "https:" !== t.protocol || !(0, n.isHatchVmGatewayHostname)(t.hostname)) return i;
    let a = t.pathname.indexOf("/fs/raw/"),
      s = t.pathname.indexOf("/media/raw/"),
      l = a >= 0 && (s < 0 || a < s),
      u = l ? a : s;
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
    let d = new URLSearchParams;
    if (l)
      for (let [e, n] of t.searchParams) r.has(e) && d.append(e, n);
    let h = d.toString();
    return {
      isVm: !0,
      noisePath: `/${o}${h.length>0?`?${h}`:""}`
    }
  }

  function l(e) {
    return s(e).isVm
  }

  function u(e) {
    try {
      let n = new URL(e, "https://example.invalid"),
        a = "https://example.invalid" === n.origin && e.startsWith("/");
      return "/api/session/fileserver-read" === n.pathname && (a || (0, t.getHatchOriginsAllowlist)().has(n.origin))
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

  function d(e) {
    let t = o(e.split(/[?#]/)[0] ?? e).split(/[\\/]/).pop();
    if (!t || 0 === t.length) return null;
    let n = t.split(".").pop()?.toLowerCase();
    return n && n !== t.toLowerCase() ? n : null
  }

  function h(e) {
    let t = e.trim();
    if (0 === t.length) return null;
    let n = f(t);
    if (null != n) return d(n);
    if (u(t)) return null;
    try {
      let e = new URL(t, "https://example.invalid"),
        n = e.searchParams.get("path");
      if (null != n && n.trim().length > 0) return d(n);
      return d(e.pathname)
    } catch {
      return d(t)
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
        n = t?.trim();
      if (null == n || 0 === n.length) return null;
      let a = n.trim().replace(/\\/g, "/").replace(/^\/+/, "");
      if (/[?#]/.test(a)) return null;
      let r = a.split("/").filter(e => e.length > 0);
      return r.length < 2 || "workspace" !== r[0] || r.some(y) ? null : r.join("/")
    } catch {
      return null
    }
  }

  function g(e) {
    let t = e.trim();
    if (0 === t.length) return "image";
    let n = t.toLowerCase();
    if (n.startsWith("data:")) return n.startsWith("data:video/") ? "video" : "image";
    if (n.startsWith("blob:")) return "image";
    let r = h(t);
    return r && a.has(r) ? "video" : "image"
  }
  let p = new Set(["mp3", "m4a", "wav", "ogg", "flac", "aac", "opus"]),
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
    let n, a = e.replace(/^\/+/, "").split(/[?#]/)[0] ?? e;
    try {
      n = decodeURIComponent(a)
    } catch {
      n = a
    }
    let r = n.split("/").pop() ?? "audio",
      i = d(t) ?? d(n) ?? "mp3";
    return {
      path: n,
      filename: r,
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
    let n = null != e.path && e.path.length > 0 ? e.path : null;
    if (null != n) return {
      kind: "noise",
      path: n,
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
  }, "inferHatchMediaKind", 0, g, "isHatchVideoSource", 0, function(e) {
    return "video" === g(e)
  }, "isHatchVmMediaUrl", 0, l, "isInternalHatchFileserverSource", 0, u, "mediaCacheKey", 0, function(e, t) {
    return `${t?"url-encoded":"literal"}:${e}`
  }, "parseWorkspaceAudioFile", 0, function(e) {
    let t;
    if (!(null != (t = h(e)) && p.has(t))) return null;
    if (e.startsWith("sandbox://")) return w(e.slice(10), e);
    let n = f(e);
    return null == n ? null : w(n, e)
  }])
}, 767369, e => {
  "use strict";
  var t = e.i(863641),
    n = e.i(790170);
  let a = {
      imessage: !0,
      messenger: !0,
      telegram: !0,
      whatsapp: !0
    },
    r = (0, n.createGatewayQuery)({
      id: "channels.status",
      queryKey: ({
        provider: e,
        targetKey: t
      }) => {
        let n;
        return ["channels", "status", e ?? "all", ...(n = t) ? [n] : []]
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
  e.s(["channelsStatusQuery", 0, r, "findChannelStatus", 0, function(e, t) {
    return e?.channels.find(e => e.provider === t)
  }, "hasPendingChannelLink", 0, function(e) {
    return e?.channels.some(e => "link_pending" === e.status || "unlink_pending" === e.status) ?? !1
  }, "isChannelProvider", 0, function(e) {
    return "string" == typeof e && Object.hasOwn(a, e)
  }])
}, 790170, e => {
  "use strict";
  var t = e.i(226488),
    n = e.i(85461),
    a = e.i(975740);

  function r(e) {
    let t = e.targetKey;
    return {
      ...e,
      sendRequest: (n, a, r) => {
        let i = r?.expectedGatewayTargetKey != null ? {
          ...r,
          expectedGatewayTargetKey: t
        } : {
          ...r,
          expectedTargetKey: t
        };
        return e.sendRequest(n, a, i)
      }
    }
  }
  e.s(["createGatewayInfiniteQuery", 0, function(e) {
    let t = {
      infiniteQueryOptions: (t, i) => {
        let s, l = r(i);
        if (e.noiseFn) s = e.noiseFn;
        else if (null != (0, n.resolveHttpRoute)(e.id)) s = async (t, n, a) => {
          let {
            gatewayUrl: r,
            ...i
          } = n, s = {
            ...i,
            ...null != a ? {
              cursor: a
            } : {}
          };
          return t.sendRequest(e.id, s)
        };
        else if (e.queryFn) s = e.queryFn;
        else throw Error(`createGatewayInfiniteQuery(${e.id}): no noiseFn, no Noise route, and no queryFn`);
        return {
          queryKey: e.queryKey(t),
          queryFn: ({
            pageParam: n
          }) => {
            let r = e.earlyPreload?.(t, l, n);
            if (null != r) {
              let e = (0, a.getEarlyGatewayQueryPreload)(r.sourceKey);
              if (null != e) {
                let t = e.promise.then(r.transform);
                return t.then(() => (0, a.clearEarlyGatewayQueryPromise)(r.sourceKey, e.promise), () => (0, a.clearEarlyGatewayQueryPromise)(r.sourceKey, e.promise)), t
              }
            }
            return s(l, t, n)
          },
          initialPageParam: e.initialPageParam,
          getNextPageParam: e.getNextPageParam,
          staleTime: e.staleTime,
          gcTime: e.gcTime,
          meta: e.meta,
          refetchOnMount: !1
        }
      },
      suspenseInfiniteQueryOptions: (e, n) => t.infiniteQueryOptions(e, n),
      queryKey: e.queryKey,
      invalidate: (t, n) => t.invalidateQueries({
        queryKey: e.queryKey(n)
      }),
      invalidateAll: t => {
        if (!e.invalidationKey) throw Error(`createGatewayInfiniteQuery(${e.id}): invalidateAll called but no invalidationKey configured`);
        return t.invalidateQueries({
          queryKey: e.invalidationKey()
        })
      },
      setData: (t, n, a) => t.setQueryData(e.queryKey(n), a),
      removeData: (t, n) => t.removeQueries({
        queryKey: e.queryKey(n)
      }),
      prefetch: async (e, n, a) => {
        try {
          await e.prefetchInfiniteQuery(t.infiniteQueryOptions(n, a))
        } catch {}
      }
    };
    return t
  }, "createGatewayQuery", 0, function(e) {
    let a = {
      queryOptions: (a, i) => {
        let s, l = r(i);
        if (e.noiseFn) s = e.noiseFn;
        else if (null != (0, n.resolveHttpRoute)(e.id)) s = async (t, n) => {
          let {
            gatewayUrl: a,
            ...r
          } = n;
          return t.sendRequest(e.id, r)
        };
        else if (e.queryFn) s = e.queryFn;
        else throw Error(`createGatewayQuery(${e.id}): no noiseFn, no Noise route, and no queryFn`);
        return (0, t.queryOptions)({
          queryKey: e.queryKey(a),
          queryFn: () => s(l, a),
          staleTime: e.staleTime,
          gcTime: e.gcTime,
          meta: e.meta,
          refetchOnMount: !1
        })
      },
      queryKey: e.queryKey,
      invalidate: (t, n) => t.invalidateQueries({
        queryKey: e.queryKey(n)
      }),
      invalidateAll: t => {
        if (!e.invalidationKey) throw Error(`createGatewayQuery(${e.id}): invalidateAll called but no invalidationKey configured`);
        return t.invalidateQueries({
          queryKey: e.invalidationKey()
        })
      },
      setData: (t, n, a) => t.setQueryData(e.queryKey(n), a),
      removeData: (t, n) => t.removeQueries({
        queryKey: e.queryKey(n)
      }),
      prefetch: async (e, t, n) => {
        try {
          await e.prefetchQuery(a.queryOptions(t, n))
        } catch {}
      }
    };
    return a
  }], 790170)
}, 720756, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(871157),
    a = e.i(175286),
    r = e.i(907579);

  function i() {
    let e, i, s = (0, t.c)(12),
      {
        gatewayUrl: l,
        gatewayScopeKey: u,
        vmName: o,
        sendRequest: c,
        isReady: d,
        ensureLiveConnection: h
      } = (0, a.useHatchRpc)();
    s[0] !== l || s[1] !== o ? (e = (0, n.gatewayTargetKey)(l, o), s[0] = l, s[1] = o, s[2] = e) : e = s[2];
    let y = e,
      f = u ?? y,
      g = (0, r.useHatchGatewayFs)();
    return s[3] !== h || s[4] !== g || s[5] !== l || s[6] !== d || s[7] !== f || s[8] !== c || s[9] !== y || s[10] !== o ? (i = {
      gatewayUrl: l,
      vmName: o,
      targetKey: y,
      gatewayScopeKey: f,
      sendRequest: c,
      fs: g,
      isReady: d,
      waitForTransport: h
    }, s[3] = h, s[4] = g, s[5] = l, s[6] = d, s[7] = f, s[8] = c, s[9] = y, s[10] = o, s[11] = i) : i = s[11], i
  }
  e.s(["useGatewayQueryContext", 0, i, "useRequiredGatewayQueryContext", 0, function() {
    let e = i();
    if (!e.gatewayUrl) throw Error("useRequiredGatewayQueryContext: gatewayUrl is null. Only use in components rendered after shell bootstrap.");
    return e
  }])
}, 713140, 235072, e => {
  "use strict";
  var t = e.i(766271),
    n = e.i(863641);
  let a = "peer";
  e.s(["PEER_SIDECHAT_CHANNEL", 0, a, "isPeerSidechatSession", 0, function(e) {
    return e?.peer_sidechat === !0
  }], 235072);
  var r = e.i(767369),
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
        targetKey: n
      }) => {
        var a;
        let r = await e.sendRequest("sessions.list", s, {
          expectedGatewayTargetKey: n
        });
        return a = u.list(n), l.delete((0, t.hashKey)(a)), p(r)
      },
      invalidationKey: () => u.all,
      staleTime: 3e4,
      meta: {
        sentrySurface: n.HATCH_SENTRY_SURFACES.CHAT_CHANNEL
      }
    }),
    c = {
      all: ["thread-session"],
      detail: (e, t) => ["thread-session", e, t]
    },
    d = (0, i.createGatewayQuery)({
      id: "sessions.get",
      queryKey: ({
        targetKey: e,
        sessionId: t
      }) => c.detail(e, t),
      noiseFn: async (e, {
        targetKey: t,
        sessionId: n
      }) => (function(e) {
        var t;
        let n = w(e) && "session" in e && !("session_id" in e) ? e.session : e;
        if (!(w(t = n) && "string" == typeof t.session_id && t.session_id.trim().length > 0 && "string" == typeof t.status && "boolean" == typeof t.is_primary && "boolean" == typeof t.is_thread)) throw Error("sessions.get returned an invalid session payload");
        return m(n)
      })(await e.sendRequest("sessions.get", {
        id: n
      }, {
        expectedGatewayTargetKey: t
      })),
      invalidationKey: () => c.all,
      staleTime: 3e4,
      meta: {
        sentrySurface: n.HATCH_SENTRY_SURFACES.CHAT_CHANNEL
      }
    }),
    h = {
      all: ["archived-sessions"],
      list: e => ["archived-sessions", e]
    },
    y = (0, i.createGatewayQuery)({
      id: "archived-sessions.list",
      queryKey: ({
        targetKey: e
      }) => h.list(e),
      noiseFn: async (e, {
        targetKey: t
      }) => p(await e.sendRequest("sessions.list", {
        ...s,
        view: "archived"
      }, {
        expectedGatewayTargetKey: t
      })),
      invalidationKey: () => h.all,
      staleTime: 3e4
    });

  function f(e) {
    if ("string" != typeof e) return null;
    let t = e.trim();
    return t.length > 0 ? t : null
  }

  function g(e) {
    return null == e || !Number.isFinite(e) || e <= 0 ? 0 : e < 1e11 ? 1e3 * e : e
  }

  function p(e) {
    return e.sessions.map(m)
  }

  function m(e) {
    var t;
    let n = f(e.title),
      i = f("string" == typeof e.channel ? e.channel : null),
      s = f("string" == typeof e.space_slug ? e.space_slug : null) ?? f("string" == typeof e.space_id ? e.space_id : null),
      l = "peer" === (t = e.read_only_reason) || "provider" === t || "internal" === t ? t : null,
      u = "peer" === l || i === a,
      o = g(e.created_at ?? e.created_at_ms),
      c = g(e.updated_at ?? e.updated_at_ms);
    return {
      session_id: e.session_id,
      ...(0, r.isChannelProvider)(i) ? {
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
      title: n ?? void 0,
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
  e.s(["THREAD_SESSIONS_LIST_PARAMS", 0, s, "archivedSessionsListQuery", 0, y, "archivedSessionsQueryKeys", 0, h, "findThreadSessionTitle", 0, function(e, t) {
    if (null == e || null == t) return null;
    let n = e.find(e => e.session_id === t);
    return f(n?.title)
  }, "getCachedThreadSession", 0, function(e, t) {
    let n = e.getQueryData(d.queryKey(t));
    return null != n ? n : e.getQueryData(o.queryKey({
      targetKey: t.targetKey
    }))?.find(e => e.session_id === t.sessionId)
  }, "isHydrateOnlySessionList", 0, function(e) {
    return l.has((0, t.hashKey)(e))
  }, "markHydrateOnlySessionList", 0, function(e) {
    l.add((0, t.hashKey)(e))
  }, "normalizeThreadSessionTimestamp", 0, g, "normalizeThreadSessionTitle", 0, f, "threadSessionQuery", 0, d, "threadSessionQueryKeys", 0, c, "threadSessionsListQuery", 0, o, "threadSessionsQueryKeys", 0, u], 713140)
}, 490289, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(519172),
    a = e.i(849329),
    r = e.i(393202),
    i = e.i(365500),
    s = e.i(359783),
    l = e.i(917694),
    u = e.i(175286),
    o = e.i(14751),
    c = e.i(720756),
    d = e.i(713140);
  let h = (0, s.createClientLogger)("useHatchThreadSessionsQuery");

  function y(e) {
    h.retainForBugReport("warn", "Failed to prune cached side chat transcripts")
  }

  function f(e) {
    h.retainForBugReport("warn", "Failed to persist side chat list")
  }

  function g(e) {
    h.retainForBugReport("warn", "Failed to read cached side chat list")
  }
  e.s(["useHatchThreadSessionsQuery", 0, function(e) {
    let s, h, p, m, w, S, v, C, H, _, K, P = (0, t.c)(38),
      T = void 0 === e || e,
      {
        isReady: I,
        gatewayUrl: b,
        vmName: Q
      } = (0, u.useHatchRpc)(),
      R = (0, c.useGatewayQueryContext)(),
      q = (0, i.useOptionalAuth)(),
      M = q?.userId ?? null,
      E = (0, r.useQueryClient)();
    if (P[0] !== R) {
      let e = {
        targetKey: R.targetKey
      };
      s = d.threadSessionsListQuery.queryOptions(e, R), P[0] = R, P[1] = s
    } else s = P[1];
    let A = s;
    P[2] !== R.targetKey ? (h = d.threadSessionsListQuery.queryKey({
      targetKey: R.targetKey
    }), P[2] = R.targetKey, P[3] = h) : h = P[3];
    let x = h;
    P[4] !== q || P[5] !== R.targetKey || P[6] !== b || P[7] !== Q ? (p = q?.userId != null && (null != b || null != Q) ? (0, l.buildSideChatListCacheKey)(q.userId, R.targetKey) : null, P[4] = q, P[5] = R.targetKey, P[6] = b, P[7] = Q, P[8] = p) : p = P[8];
    let O = p;
    P[9] !== T || P[10] !== b || P[11] !== I ? (m = T && (0, o.isMethodReadyForTransport)({
      method: "sessions.list",
      gatewayUrl: b,
      isWsReady: I
    }), P[9] = T, P[10] = b, P[11] = I, P[12] = m) : m = P[12], P[13] !== A || P[14] !== m ? (w = {
      ...A,
      refetchOnMount: !0,
      enabled: m
    }, P[13] = A, P[14] = m, P[15] = w) : w = P[15];
    let N = (0, a.useQuery)(w);
    return P[16] !== R.targetKey || P[17] !== O || P[18] !== E || P[19] !== x ? (S = () => {
      if (null == O || null != E.getQueryData(x)) return;
      let e = !1;
      return (0, l.readSideChatListCache)(O, R.targetKey).then(t => {
        e || null == t || null != E.getQueryData(x) || (E.setQueryData(x, t.sessions, {
          updatedAt: t.cachedAtMs
        }), (0, d.markHydrateOnlySessionList)(x))
      }).catch(g), () => {
        e = !0
      }
    }, v = [R.targetKey, O, E, x], P[16] = R.targetKey, P[17] = O, P[18] = E, P[19] = x, P[20] = S, P[21] = v) : (S = P[20], v = P[21]), (0, n.useEffect)(S, v), P[22] !== R.targetKey || P[23] !== T || P[24] !== O || P[25] !== N.data || P[26] !== E || P[27] !== x ? (C = () => {
      if (!T || null == O || null == N.data || (0, d.isHydrateOnlySessionList)(x)) return;
      let e = E.getQueryState(x)?.dataUpdatedAt ?? Date.now(),
        t = (0, l.buildSideChatListCacheEntry)(O, R.targetKey, N.data, e);
      (0, l.writeSideChatListCache)(t).catch(f)
    }, H = [R.targetKey, T, O, N.data, E, x], P[22] = R.targetKey, P[23] = T, P[24] = O, P[25] = N.data, P[26] = E, P[27] = x, P[28] = C, P[29] = H) : (C = P[28], H = P[29]), (0, n.useEffect)(C, H), P[30] !== R.targetKey || P[31] !== T || P[32] !== N.data || P[33] !== E || P[34] !== x || P[35] !== M ? (_ = () => {
      if (!T || null == M || null == N.data) return;
      let e = E.getQueryState(x)?.dataUpdatedAt ?? Date.now();
      (0, l.pruneSideChatTranscriptCache)(M, R.targetKey, N.data, e).catch(y)
    }, K = [R.targetKey, T, N.data, E, x, M], P[30] = R.targetKey, P[31] = T, P[32] = N.data, P[33] = E, P[34] = x, P[35] = M, P[36] = _, P[37] = K) : (_ = P[36], K = P[37]), (0, n.useEffect)(_, K), N
  }])
}, 384784, 993801, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(479223),
    a = e.i(384706),
    r = e.i(390808),
    i = e.i(829051),
    s = e.i(490289),
    l = e.i(713140),
    u = e.i(724103),
    o = e.i(274169),
    c = e.i(235072);
  let d = new Map;

  function h(e) {
    let n, a, r, i, s, l = (0, t.c)(11);
    l[0] !== e ? (n = e?.some(c.isPeerSidechatSession) ?? !1, l[0] = e, l[1] = n) : n = l[1];
    let h = n;
    l[2] !== h ? (a = {
      enabled: h
    }, l[2] = h, l[3] = a) : a = l[3];
    let f = (0, o.useTrustedNetworkStatusQuery)(a),
      g = h && null != f.current,
      p = f.current ?? f.cachedMountableStatus;
    l[4] === Symbol.for("react.memo_cache_sentinel") ? (r = {
      contacts: !0
    }, l[4] = r) : r = l[4], l[5] !== g || l[6] !== p ? (i = {
      enteredFeature: g,
      currentStatus: p,
      requestedReads: r
    }, l[5] = g, l[6] = p, l[7] = i) : i = l[7];
    let {
      contacts: m
    } = (0, o.useTrustedNetworkManagementQueries)(i), w = m.data?.pages;
    return l[8] !== h || l[9] !== w ? (s = h && null != w ? (0, u.buildPeerSidechatContactNames)(w.flatMap(y)) : d, l[8] = h, l[9] = w, l[10] = s) : s = l[10], s
  }

  function y(e) {
    return e.items
  }
  e.s(["usePeerSidechatContactNames", 0, h], 993801);
  var f = e.i(672495);
  let g = e => (0, i.getVisibleTranscriptMessageIds)(e.messageIds, e.messagesById),
    p = e => e.isLoading,
    m = e => e.historyLoaded,
    w = e => e.isCheckingPersistentCache,
    S = e => e.hasProvisionalCachedHistory,
    v = e => e.isRefreshingCachedHistory,
    C = e => e.isStreaming,
    H = e => e.hasMore,
    _ = e => e.isLoadingOlder,
    K = e => e.isExpectingBotResponse,
    P = e => e.expectingBotResponseAnchorIndex,
    T = e => e.model,
    I = e => e.modelIdentityVisibility,
    b = e => e.voiceId,
    Q = e => e.captionsEnabled,
    R = e => e.isLoadingNewer,
    q = e => e.hasMoreNewer,
    M = e => e.isAtBottom,
    E = e => e.isViewingHistory,
    A = e => e.modelDisplayName,
    x = e => e.availableModels,
    O = e => {
      for (let t of (0, i.getVisibleTranscriptMessageIds)(e.messageIds, e.messagesById)) {
        let n = e.messagesById[t];
        if (n?.role !== "user") continue;
        let a = n.content.trim().replace(/\s+/g, " ");
        if (a.length > 0) return a
      }
      return null
    };

  function N() {
    return (0, f.useHatchChatSelector)(F)
  }

  function F(e) {
    return e.deletedChatImageKeys
  }

  function L(e) {
    return (0, i.getVisibleTranscriptMessageIds)(e.messageIds, e.messagesById).map(t => e.messagesById[t])
  }

  function G(e) {
    let n, a, r, i = (0, t.c)(9),
      o = e?.kind === "thread" ? e.sessionId : null,
      c = (0, s.useHatchThreadSessionsQuery)(null != o);
    i[0] !== o ? (n = e => null == o ? null : e.threadTitlesBySession[o] ?? null, i[0] = o, i[1] = n) : n = i[1];
    let d = (0, f.useHatchChatSelector)(n),
      y = (0, f.useHatchChatSelector)(O);
    i[2] !== o || i[3] !== c.data ? (a = (0, l.findThreadSessionTitle)(c.data, o), i[2] = o, i[3] = c.data, i[4] = a) : a = i[4];
    let g = a,
      p = h(c.data);
    return i[5] !== o || i[6] !== p || i[7] !== c.data ? (r = (0, u.resolvePeerSidechatContactTitle)(c.data?.find(e => e.session_id === o), p), i[5] = o, i[6] = p, i[7] = c.data, i[8] = r) : r = i[8], r ?? g ?? d ?? y
  }
  let k = [];
  e.s(["findMessageForAudioTrack", 0, function(e, t) {
    if (null == t) return null;
    let n = e => e.startsWith("/") ? e.slice(1) : e,
      a = n(t);
    for (let r of e.messageIds) {
      let i = e.messagesById[r];
      if (i?.files != null)
        for (let e of i.files) {
          let r = e.path ?? e.filename;
          if (r === t || n(r) === a) return i
        }
    }
    return null
  }, "useCaptionsEnabled", 0, function() {
    return (0, f.useHatchChatSelector)(Q)
  }, "useChatAvailableModels", 0, function() {
    return (0, f.useHatchChatSelector)(x, n.shallow)
  }, "useChatExpectingBotResponseAnchorIndex", 0, function() {
    return (0, f.useHatchChatSelector)(P)
  }, "useChatHasMore", 0, function() {
    return (0, f.useHatchChatSelector)(H)
  }, "useChatHasMoreNewer", 0, function() {
    return (0, f.useHatchChatSelector)(q)
  }, "useChatHasProvisionalCachedHistory", 0, function() {
    return (0, f.useHatchChatSelector)(S)
  }, "useChatHistoryLoaded", 0, function() {
    return (0, f.useHatchChatSelector)(m)
  }, "useChatIsAtBottom", 0, function() {
    return (0, f.useHatchChatSelector)(M)
  }, "useChatIsCheckingPersistentCache", 0, function() {
    return (0, f.useHatchChatSelector)(w)
  }, "useChatIsExpectingBotResponse", 0, function() {
    return (0, f.useHatchChatSelector)(K)
  }, "useChatIsLoading", 0, function() {
    return (0, f.useHatchChatSelector)(p)
  }, "useChatIsLoadingNewer", 0, function() {
    return (0, f.useHatchChatSelector)(R)
  }, "useChatIsLoadingOlder", 0, function() {
    return (0, f.useHatchChatSelector)(_)
  }, "useChatIsRefreshingCachedHistory", 0, function() {
    return (0, f.useHatchChatSelector)(v)
  }, "useChatIsStreaming", 0, function() {
    return (0, f.useHatchChatSelector)(C)
  }, "useChatIsViewingHistory", 0, function() {
    return (0, f.useHatchChatSelector)(E)
  }, "useChatMessage", 0, function(e) {
    let n, a = (0, t.c)(2);
    return a[0] !== e ? (n = t => t.messagesById[e], a[0] = e, a[1] = n) : n = a[1], (0, f.useHatchChatSelector)(n)
  }, "useChatMessageIds", 0, function() {
    return (0, f.useHatchChatSelector)(g, n.shallow)
  }, "useChatMessagesArray", 0, function() {
    return (0, f.useHatchChatSelector)(L, n.shallow)
  }, "useChatModel", 0, function() {
    return (0, f.useHatchChatSelector)(T)
  }, "useChatModelDisplayName", 0, function() {
    return (0, f.useHatchChatSelector)(A)
  }, "useChatModelIdentityVisibility", 0, function() {
    return (0, f.useHatchChatSelector)(I)
  }, "useChatThreadTitle", 0, function() {
    return G((0, r.useEffectiveHatchChatRoute)())
  }, "useChatThreadTitleForRoute", 0, G, "useChatUnreadCount", 0, function() {
    let e, n = (0, t.c)(2),
      r = (0, a.useHatchAvatarShareEligibility)();
    return n[0] !== r ? (e = e => ((e, t) => {
      let n = e.chat;
      if (!n.lastSeenTimestamp) return 0;
      let a = 0,
        r = (0, i.getVisibleTranscriptMessageIds)(n.messageIds, n.messagesById);
      for (let e = r.length - 1; e >= 0; e -= 1) {
        let s = n.messagesById[r[e]];
        !s || s.isTextStreaming || s.isBackground || "user" === s.role || "system" === s.role || !("assistant" === s.role && null != s.messageId && ((0, i.isHiddenNoopToolMessage)(s) || !(0, i.hasVisibleAssistantOutput)(s, !0, t))) && s.createdAt > n.lastSeenTimestamp && (a += 1)
      }
      return a
    })(e, r), n[0] = r, n[1] = e) : e = n[1], (0, f.useHatchSelector)(e)
  }, "useDeletedChatImageKeys", 0, N, "useDeletedChatMediaKeys", 0, N, "useMessageReactions", 0, function(e) {
    let n, a = (0, t.c)(2);
    return a[0] !== e ? (n = t => null == e ? k : t.reactions[e] ?? k, a[0] = e, a[1] = n) : n = a[1], (0, f.useHatchChatSelector)(n)
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
    n = e.i(384778),
    a = class extends t.QueryObserver {
      constructor(e, t) {
        super(e, t)
      }
      bindMethods() {
        super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
      }
      setOptions(e) {
        super.setOptions({
          ...e,
          behavior: (0, n.infiniteQueryBehavior)()
        })
      }
      getOptimisticResult(e) {
        return e.behavior = (0, n.infiniteQueryBehavior)(), super.getOptimisticResult(e)
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
          state: a
        } = e, r = super.createResult(e, t), {
          isFetching: i,
          isRefetching: s,
          isError: l,
          isRefetchError: u
        } = r, o = a.fetchMeta?.fetchMore?.direction, c = l && "forward" === o, d = i && "forward" === o, h = l && "backward" === o, y = i && "backward" === o;
        return {
          ...r,
          fetchNextPage: this.fetchNextPage,
          fetchPreviousPage: this.fetchPreviousPage,
          hasNextPage: (0, n.hasNextPage)(t, a.data),
          hasPreviousPage: (0, n.hasPreviousPage)(t, a.data),
          isFetchNextPageError: c,
          isFetchingNextPage: d,
          isFetchPreviousPageError: h,
          isFetchingPreviousPage: y,
          isRefetchError: u && !c && !h,
          isRefetching: s && !d && !y
        }
      }
    };
  e.s(["InfiniteQueryObserver", 0, a], 121712);
  var r = e.i(768380);
  e.s(["useInfiniteQuery", 0, function(e, t) {
    return (0, r.useBaseQuery)(e, a, t)
  }], 293760)
}, 479223, e => {
  "use strict";
  let t = (e, t) => {
    let n = e instanceof Map ? e : new Map(e.entries()),
      a = t instanceof Map ? t : new Map(t.entries());
    if (n.size !== a.size) return !1;
    for (let [e, t] of n)
      if (!a.has(e) || !Object.is(t, a.get(e))) return !1;
    return !0
  };
  e.s(["shallow", 0, function(e, n) {
    if (Object.is(e, n)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof n || null === n || Object.getPrototypeOf(e) !== Object.getPrototypeOf(n)) return !1;
    if (Symbol.iterator in e && Symbol.iterator in n) {
      if ("entries" in e && "entries" in n) return t(e, n);
      let a = e[Symbol.iterator](),
        r = n[Symbol.iterator](),
        i = a.next(),
        s = r.next();
      for (; !i.done && !s.done;) {
        if (!Object.is(i.value, s.value)) return !1;
        i = a.next(), s = r.next()
      }
      return !!i.done && !!s.done
    }
    return t({
      entries: () => Object.entries(e)
    }, {
      entries: () => Object.entries(n)
    })
  }])
}, 203576, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function a(e) {
    let a, r, i, s, l = (0, n.c)(9);
    return l[0] !== e.title ? (a = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), l[0] = e.title, l[1] = a) : a = l[1], l[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), l[2] = e.children, l[3] = r) : r = l[3], l[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      d: "M11.977 23c-3.336-.022-5.902-1.105-7.625-3.217-1.534-1.88-2.325-4.496-2.352-7.775v-.016c.027-3.279.818-5.895 2.352-7.775C6.075 2.105 8.64 1.022 11.977 1H11.99c2.558.017 4.698.664 6.361 1.922 1.563 1.183 2.663 2.87 3.27 5.013l-1.9.52c-1.029-3.63-3.632-5.484-7.737-5.514-2.71.02-4.76.858-6.094 2.491C4.642 6.962 3.997 9.172 3.973 12c.024 2.828.67 5.038 1.917 6.568 1.333 1.633 3.383 2.471 6.094 2.49 2.443-.016 4.06-.577 5.405-1.873 1.535-1.479 1.507-3.293 1.016-4.397-.29-.65-.814-1.192-1.522-1.603-.178 1.237-.579 2.242-1.197 2.999-.825 1.01-1.994 1.562-3.474 1.64-1.121.06-2.2-.2-3.038-.734-.99-.63-1.57-1.596-1.632-2.718-.06-1.091.38-2.094 1.238-2.825.82-.698 1.975-1.107 3.338-1.183a12.946 12.946 0 0 1 2.814.13c-.115-.68-.348-1.219-.697-1.61-.478-.535-1.218-.81-2.198-.816-.79-.002-1.876.201-2.564 1.209L7.835 8.194c.919-1.344 2.412-2.08 4.214-2.067 2.977.018 4.75 1.81 4.927 4.939.1.041.2.085.299.13 1.389.643 2.405 1.616 2.938 2.814.742 1.67.81 4.391-1.443 6.562-1.723 1.66-3.813 2.408-6.78 2.428h-.013zm.94-10.717c-.224 0-.454.006-.688.02-1.71.094-2.777.865-2.716 1.964.063 1.15 1.353 1.684 2.593 1.62 1.14-.061 2.626-.498 2.875-3.402a10.04 10.04 0 0 0-2.063-.202z"
    }), l[4] = i) : i = l[4], l[5] !== e || l[6] !== a || l[7] !== r ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [a, r, i]
    }), l[5] = e, l[6] = a, l[7] = r, l[8] = s) : s = l[8], s
  }
  a._isSVG = !0, e.s(["default", 0, a])
}]);

//# debugId=01e099f9-4f9d-03a3-adf0-ed83412432cd
//# sourceMappingURL=12ll1evrmaffu.js.map