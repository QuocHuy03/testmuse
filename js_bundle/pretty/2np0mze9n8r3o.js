;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "2503fd77-310e-68cb-a221-3e2255dacfa5")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 513637, e => {
  "use strict";

  function t(e, t) {
    return e.length === t.length && e.every((e, a) => e === t[a])
  }
  e.s(["hatchListIdsEqual", 0, t, "resolveDropZone", 0, function(e, t) {
    if (t <= 0) {
      let t;
      return t = e.currentTarget.getBoundingClientRect(), e.clientY < t.top + t.height / 2 ? "before" : "after"
    }
    let a = e.currentTarget.getBoundingClientRect(),
      l = a.height * Math.min(t, 1),
      r = (a.height - l) / 2,
      n = e.clientY - a.top;
    return n < r ? "before" : n > a.height - r ? "after" : "into"
  }, "resolveListReorder", 0, function(e, a, l, r) {
    if (a === l || !e.includes(a) || !e.includes(l)) return null;
    let n = e.filter(e => e !== a),
      i = n.indexOf(l);
    if (-1 === i) return null;
    let u = "before" === r ? i : i + 1,
      s = [...n];
    return (s.splice(u, 0, a), t(s, e)) ? null : {
      insertionIndex: u,
      direction: u < e.indexOf(a) ? "earlier" : "later"
    }
  }])
}, 552122, e => {
  "use strict";
  var t = e.i(281851),
    a = e.i(399172),
    l = e.i(228750);
  let r = {
    all: ["goals"],
    list: e => ["goals", e, "list"],
    trackingList: e => ["goals", e, "list", "tracking"],
    completedList: e => ["goals", e, "list", "completed"],
    detail: (e, t) => ["goals", e, "detail", t]
  };

  function n(e, a, r, n) {
    let i = {
      version: 1,
      queryKey: a,
      sourceKey: JSON.stringify(a),
      staleTimeMs: 5e3,
      targetKey: e.targetKey,
      request: {
        method: r,
        params: n,
        resultMode: "raw"
      },
      dependency: {
        queryKey: (0, l.buildOnboardingStartQueryKey)(e.targetKey),
        skipWhen: {
          field: "variant",
          equals: t.UI_DRIVEN_ONBOARDING_VARIANT
        }
      }
    };
    return {
      descriptor: i,
      queryKey: a,
      sourceKey: i.sourceKey
    }
  }
  e.s(["bindGoalDetailGatewayQuery", 0, function(e, t) {
    return n(e, r.detail((0, a.getGatewayRenderQueryScopeKey)(e), t), "goals.get", {
      id: t
    })
  }, "bindGoalsCompletedListGatewayQuery", 0, function(e) {
    return n(e, r.completedList((0, a.getGatewayRenderQueryScopeKey)(e)), "goals.list", {
      status: "completed"
    })
  }, "bindGoalsListGatewayQuery", 0, function(e) {
    return n(e, r.list((0, a.getGatewayRenderQueryScopeKey)(e)), "goals.list", {
      source: "user_goal"
    })
  }, "bindGoalsTrackingListGatewayQuery", 0, function(e) {
    return n(e, r.trackingList((0, a.getGatewayRenderQueryScopeKey)(e)), "goals.list", {
      source: "assistant_tracking"
    })
  }, "goalsQueryKeys", 0, r])
}, 644036, e => {
  "use strict";
  var t = e.i(925301),
    a = e.i(790170),
    l = e.i(552122);

  function r(e) {
    if ("string" != typeof e) return null;
    let t = e.trim();
    return 0 === t.length ? null : t
  }

  function n(e, t) {
    return "boolean" == typeof e ? e : t
  }

  function i(e) {
    return Array.isArray(e) ? e : []
  }

  function u(e) {
    return "object" == typeof e && null != e && !Array.isArray(e)
  }

  function s(e) {
    return u(e) ? e : {}
  }

  function o(e) {
    var t, a, l;
    if (!u(e)) return null;
    let s = r(e.goal_id ?? e.id);
    if (null == s) return null;
    let c = i(e.subGoals ?? e.sub_goals).map(e => o(e)).filter(e => null != e);
    return {
      id: s,
      title: r(e.title),
      summary: r(e.summary),
      momentum: r(e.momentum),
      momentumStatus: "on_track" === (t = e.momentumStatus ?? e.momentum_status) || "at_risk" === t || "behind" === t ? t : null,
      description: r(e.description),
      emoji: r(e.emoji),
      imageUrl: r(e.imageUrl ?? e.image_url),
      source: "user_goal" === (a = e.source) || "assistant_tracking" === a ? a : null,
      status: "active" === (l = e.status) || "paused" === l || "retired" === l || "completed" === l ? l : null,
      createdAt: r(e.createdAt ?? e.created_at),
      lastEventAt: r(e.lastEventAt ?? e.last_event_at),
      parentGoalId: r(e.parentGoalId ?? e.parent_goal_id),
      sortOrder: function(e) {
        if ("number" == typeof e && Number.isFinite(e)) return e;
        if ("string" == typeof e) {
          let t = Number(e);
          if (Number.isFinite(t)) return t
        }
        return 0
      }(e.sortOrder ?? e.sort_order),
      subGoals: c,
      sessionId: r(e.sessionId ?? e.session_id),
      isThread: n(e.isThread ?? e.is_thread, !1)
    }
  }

  function c(e) {
    return i(e).map(e => o(e)).filter(e => null != e)
  }

  function d(e) {
    if (!u(e)) return Array.isArray(e) ? c(e) : [];
    if (Array.isArray(e.goals)) return c(e.goals);
    let t = e.result;
    return Array.isArray(t) ? c(t) : u(t) && Array.isArray(t.goals) ? c(t.goals) : []
  }

  function y(e) {
    return i(e).map(e => (function(e) {
      if (!u(e)) return null;
      let t = r(e.updateId ?? e.update_id ?? e.id),
        a = r(e.goalId ?? e.goal_id),
        l = r(e.title);
      return null == t || null == a || null == l ? null : {
        updateId: t,
        goalId: a,
        title: l,
        summary: r(e.summary),
        description: r(e.description),
        effectiveAt: r(e.effectiveAt ?? e.effective_at),
        createdAt: r(e.createdAt ?? e.created_at)
      }
    })(e)).filter(e => null != e)
  }

  function g(e) {
    return i(e).map(e => (function(e) {
      var t;
      if (!u(e)) return null;
      let a = r(e.suggestionId ?? e.suggestion_id ?? e.id),
        l = r(e.goalId ?? e.goal_id),
        n = r(e.ideaId ?? e.idea_id),
        s = function(e) {
          if (!u(e)) return null;
          let t = r(e.id),
            a = r(e.title),
            l = r(e.summary);
          return null == t || null == a || null == l ? null : {
            id: t,
            title: a,
            summary: l,
            kind: r(e.kind),
            rationale: r(e.rationale),
            categoryLabel: r(e.categoryLabel ?? e.category_label),
            dateLabel: r(e.dateLabel ?? e.date_label),
            audience: r(e.audience),
            lane: r(e.lane),
            previewImageUrl: r(e.previewImageUrl ?? e.preview_image_url),
            installMarkdown: r(e.installMarkdown ?? e.install_markdown),
            items: i(e.items).map(e => (function(e) {
              if (!u(e)) return null;
              let t = r(e.id),
                a = r(e.title);
              return null == t || null == a ? null : {
                id: t,
                title: a,
                summary: r(e.summary),
                kind: r(e.kind),
                status: r(e.status)
              }
            })(e)).filter(e => null != e),
            tags: i(e.tags).map(e => r(e)).filter(e => null != e)
          }
        }(e.idea);
      return null == a || null == l || null == n || null == s ? null : {
        suggestionId: a,
        goalId: l,
        ideaId: n,
        status: "suggested" === (t = e.status) || "accepted" === t || "dismissed" === t ? t : null,
        createdAt: r(e.createdAt ?? e.created_at),
        updatedAt: r(e.updatedAt ?? e.updated_at),
        idea: s
      }
    })(e)).filter(e => null != e)
  }

  function f(e) {
    let t = s(e).chat;
    return u(t) ? {
      chat: {
        streamOwnerMessageId: r(t.streamOwnerMessageId ?? t.stream_owner_message_id),
        channel: r(t.channel),
        sessionId: r(t.sessionId ?? t.session_id),
        isThread: n(t.isThread ?? t.is_thread, !1)
      }
    } : {
      chat: null
    }
  }

  function p(e) {
    return i(e).map(e => (function(e) {
      var t;
      if (!u(e)) return null;
      let a = r(e.associationId ?? e.association_id ?? e.id),
        l = "cron" === (t = e.associationType ?? e.association_type) || "document" === t || "space" === t ? t : null;
      if (null == a || null == l) return null;
      let n = {
        associationId: a,
        imageUrl: r(e.imageUrl ?? e.image_url),
        createdAt: r(e.createdAt ?? e.created_at),
        updatedAt: r(e.updatedAt ?? e.updated_at)
      };
      switch (l) {
        case "space": {
          let t, a, i = null == (a = r((t = {
            ...s(e.details)
          }).slug ?? t.space_id ?? t.spaceId ?? t.id)) ? null : (t.slug = a, t);
          return null == i ? null : {
            ...n,
            associationType: l,
            details: i
          }
        }
        case "document": {
          let t, a, i = null == (a = r((t = {
            ...s(e.details)
          }).path ?? t.file_path ?? t.filePath ?? t.id)) ? null : (t.path = a, t);
          return null == i ? null : {
            ...n,
            associationType: l,
            details: i
          }
        }
        case "cron": {
          let t, a, i = null == (a = r((t = {
            ...s(e.details)
          }).id ?? t.job_id ?? t.jobId ?? t.cron_id ?? t.cronId)) ? null : (t.id = a, t);
          return null == i ? null : {
            ...n,
            associationType: l,
            details: i
          }
        }
      }
    })(e)).filter(e => null != e)
  }

  function m(e) {
    if (!u(e)) return null;
    let t = r(e.briefingId ?? e.briefing_id ?? e.id),
      a = r(e.goalId ?? e.goal_id),
      l = r(e.path);
    return null == t || null == a || null == l ? null : {
      briefingId: t,
      goalId: a,
      path: l,
      createdAt: r(e.createdAt ?? e.created_at),
      updatedAt: r(e.updatedAt ?? e.updated_at),
      lastOpenedAt: r(e.lastOpenedAt ?? e.last_opened_at)
    }
  }

  function G(e) {
    return i(e).map(e => m(e)).filter(e => null != e)
  }

  function w(e) {
    if (!u(e)) return null;
    let t = u(e.goal) ? e.goal : null,
      a = e.updates,
      l = e.suggestions,
      r = e.associations,
      n = G(e.briefings);
    if (null != t) {
      let i = o(t);
      return null == i ? null : {
        goal: i,
        updates: y(a),
        suggestions: g(l),
        associations: p(r),
        recentBriefing: m(e.recentBriefing ?? e.recent_briefing) ?? n[0] ?? null,
        briefings: n
      }
    }
    if (u(e.result)) {
      let t = e.result,
        a = u(t.goal) ? o(t.goal) : null;
      return null == a ? null : {
        goal: a,
        updates: y(t.updates),
        suggestions: g(t.suggestions),
        associations: p(t.associations),
        recentBriefing: m(t.recentBriefing ?? t.recent_briefing) ?? G(t.briefings)[0] ?? null,
        briefings: G(t.briefings)
      }
    }
    return null
  }

  function Q(e) {
    let t = "string" == typeof e.title ? e.title.trim() : void 0,
      a = "string" == typeof e.description ? e.description.trim() : void 0,
      l = e.status,
      r = "parentGoalId" in e;
    if (null == t && null == a && null == l && !r) throw Error("updateGoal requires at least one of title, description, status, or parentGoalId");
    let n = {};
    return null != t && (n.title = t), null != a && (n.description = a), null != l && (n.status = l), r && (n.parent_goal_id = e.parentGoalId ?? null), n
  }
  async function _(e, t, a) {
    let l = Q(t);
    return w(await a("goals.update", {
      id: e,
      ...l
    }))
  }
  async function h(e, t, a) {
    let l = await a("goals.update", {
      id: e,
      ...Q({
        parentGoalId: t
      })
    });
    return u(l) && "string" == typeof l.goal_id ? {
      appliedParentGoalId: r(l.parentGoalId ?? l.parent_goal_id)
    } : null
  }
  async function b(e, t, a) {
    await a("goals.reorder", {
      id: e,
      order: t
    })
  }
  async function v(e, t) {
    await t("goals.delete", {
      id: e
    })
  }
  async function I(e, t, a, l) {
    return f(await l("goals.suggestions.decide", {
      goal_id: e,
      suggestion_id: t,
      decision: a
    }))
  }
  async function L(e, t, a) {
    let l = {};
    return null != t && (l.source = t), null != a && (l.status = a), d(await e("goals.list", l))
  }
  async function S(e, t) {
    return w(await e("goals.get", {
      id: t
    }))
  }
  async function A(e, t, a) {
    let l, i;
    return {
      action: r((i = u((l = s(await a("iframe.call", {
        action: e,
        payload: t
      }))).result) && (null != l.result.action || null != l.result.ok) ? l.result : l).action) ?? "",
      ok: n(i.ok, !1),
      result: i.result
    }
  }
  let T = (0, a.createGatewayQuery)({
      id: "goals.list",
      queryKey: ({
        gatewayUrl: e
      }) => l.goalsQueryKeys.list(e),
      noiseFn: e => L(e.sendRequest, "user_goal"),
      invalidationKey: () => l.goalsQueryKeys.all,
      staleTime: 5e3
    }),
    R = (0, a.createGatewayQuery)({
      id: "goals.list",
      queryKey: ({
        gatewayUrl: e
      }) => l.goalsQueryKeys.trackingList(e),
      noiseFn: e => L(e.sendRequest, "assistant_tracking"),
      invalidationKey: () => l.goalsQueryKeys.all,
      staleTime: 5e3
    });
  (0, a.createGatewayQuery)({
    id: "goals.list",
    queryKey: ({
      gatewayUrl: e
    }) => l.goalsQueryKeys.completedList(e),
    noiseFn: e => L(e.sendRequest, void 0, "completed"),
    invalidationKey: () => l.goalsQueryKeys.all,
    staleTime: 5e3
  });
  let D = (0, a.createGatewayQuery)({
    id: "goals.detail",
    queryKey: ({
      gatewayUrl: e,
      goalId: t
    }) => l.goalsQueryKeys.detail(e, t),
    noiseFn: (e, t) => S(e.sendRequest, t.goalId),
    invalidationKey: () => l.goalsQueryKeys.all,
    staleTime: 5e3
  });
  e.s(["callIframeAction", 0, A, "decideGoalSuggestion", 0, I, "deleteGoal", 0, v, "extractGoalDetail", 0, w, "getGoalDetailGatewayQuery", 0, function(e) {
    return {
      bind: t => (0, l.bindGoalDetailGatewayQuery)(t, e),
      transform: w,
      staleTime: 5e3
    }
  }, "getGoalsCompletedListGatewayQuery", 0, function() {
    return {
      bind: l.bindGoalsCompletedListGatewayQuery,
      transform: d,
      staleTime: 5e3
    }
  }, "getGoalsListGatewayQuery", 0, function() {
    return {
      bind: l.bindGoalsListGatewayQuery,
      transform: d,
      staleTime: 5e3
    }
  }, "getGoalsTrackingListGatewayQuery", 0, function() {
    return {
      bind: l.bindGoalsTrackingListGatewayQuery,
      transform: d,
      staleTime: 5e3
    }
  }, "goalMoveMutationKey", 0, ["goals", "move"], "goalsDetailQuery", 0, D, "goalsListQuery", 0, T, "goalsTrackingListQuery", 0, R, "isGoalLifecycleTransitionInProgress", 0, function(e) {
    return (0, t.isGatewayRequestError)(e) && "goal_lifecycle_transition_in_progress" === e.code
  }, "normalizeGoalSuggestionDecisionResponse", 0, f, "reorderGoal", 0, b, "reparentGoal", 0, h, "updateGoal", 0, _])
}, 397355, 350686, e => {
  "use strict";
  var t = e.i(722099),
    a = e.i(503037),
    l = e.i(393202),
    r = e.i(760741),
    n = e.i(519172),
    i = e.i(863641),
    u = e.i(175286),
    s = e.i(720756),
    o = e.i(644036),
    c = e.i(513637);

  function d(e, t, a = null) {
    for (let l of e) {
      if (l.id === t) return {
        goal: l,
        parentGoalId: a,
        siblings: e
      };
      let r = d(l.subGoals, t, l.id);
      if (null != r) return r
    }
    return null
  }

  function y(e, t) {
    return d(e, t)?.siblings.map(e => e.id) ?? []
  }

  function g(e) {
    return e.map((e, t) => e.sortOrder === t ? e : {
      ...e,
      sortOrder: t
    })
  }

  function f(e, t) {
    return e.filter(e => e.id !== t).map(e => 0 === e.subGoals.length ? e : {
      ...e,
      subGoals: f(e.subGoals, t)
    })
  }

  function p(e, t, a) {
    let l = d(e, t);
    if (null == l) return [...e];
    let r = l.siblings.filter(e => e.id !== t),
      n = Math.max(0, Math.min(a, r.length)),
      i = [...r];
    return i.splice(n, 0, l.goal),
      function e(t, a, l) {
        return null == a ? [...l] : t.map(t => t.id === a ? {
          ...t,
          subGoals: [...l]
        } : 0 === t.subGoals.length ? t : {
          ...t,
          subGoals: e(t.subGoals, a, l)
        })
      }(e, l.parentGoalId, g(i))
  }

  function m(e, t, a) {
    if (t === a) return !1;
    let l = d(e, t),
      r = d(e, a);
    return null != l && null != r && null == r.parentGoalId && 0 === l.goal.subGoals.length && l.parentGoalId !== a
  }

  function G(e, t, a) {
    let l = [...e],
      r = null == a ? l.length : Math.max(0, Math.min(a, l.length));
    return l.splice(r, 0, t), g(l)
  }

  function w(e, t, a, l = null) {
    let r = d(e, t);
    if (null == r) return [...e];
    if (r.parentGoalId === a) return null == l ? [...e] : p(e, t, l);
    let n = {
        ...r.goal,
        parentGoalId: a
      },
      i = f(e, t);
    return null == a ? G(i, n, l) : i.map(e => e.id === a ? {
      ...e,
      subGoals: G(e.subGoals, n, l)
    } : e)
  }
  e.s(["canDetachGoal", 0, function(e, t) {
    return d(e, t)?.parentGoalId != null
  }, "canNestGoalUnder", 0, m, "getGoalSiblingIds", 0, y, "locateGoalInTree", 0, d, "removeGoalFromTree", 0, f, "reorderGoalInTree", 0, p, "reparentGoalInTree", 0, w, "resolveGoalEdgeDrop", 0, function({
    visible: e,
    all: t
  }, a, l, r, {
    allowReparent: n
  }) {
    if (a === l) return null;
    let i = d(t, a),
      u = d(t, l);
    if (null == i || null == u) return null;
    if (i.parentGoalId === u.parentGoalId) {
      let t = (0, c.resolveListReorder)(y(e, a), a, l, r),
        n = (0, c.resolveListReorder)(i.siblings.map(e => e.id), a, l, r);
      return null == t || null == n ? null : {
        kind: "reorder",
        order: n.insertionIndex,
        visiblePosition: t.insertionIndex + 1,
        visibleCount: y(e, a).length
      }
    }
    if (!n) return null;
    let s = u.parentGoalId;
    if (null != s && !m(t, a, s)) return null;
    let o = u.siblings.findIndex(e => e.id === l);
    return {
      kind: "move",
      parentGoalId: s,
      order: "before" === r ? o : o + 1
    }
  }], 350686);
  var Q = e.i(809204);
  let _ = (0, e.i(359783).createClientLogger)("goals_mutations");

  function h() {
    let {
      gatewayUrl: e,
      gatewayScopeKey: t
    } = (0, u.useHatchRpc)(), a = (0, n.useRef)(null);
    return null != e && e.length > 0 && (a.current = t ?? e), a.current
  }
  e.s(["useCallIframeActionMutation", 0, function() {
    let e, r, n, i = (0, t.c)(11),
      {
        gatewayUrl: s,
        gatewayScopeKey: c,
        sendRequest: d,
        isReady: y,
        ensureLiveConnection: g
      } = (0, u.useHatchRpc)(),
      f = (0, l.useQueryClient)(),
      p = c ?? s ?? "";
    return i[0] !== g || i[1] !== s || i[2] !== y || i[3] !== d ? (e = async e => {
      let {
        action: t,
        payload: a
      } = e;
      if (null == s) throw Error("Gateway URL not available yet");
      return y || await g(), (0, o.callIframeAction)(t, a, d)
    }, i[0] = g, i[1] = s, i[2] = y, i[3] = d, i[4] = e) : e = i[4], i[5] !== f || i[6] !== p ? (r = async (e, t) => {
      let a = t.payload.goalId ?? t.payload.goal_id,
        l = "string" == typeof a ? a : null;
      null != l && l.trim().length > 0 && await o.goalsDetailQuery.invalidate(f, {
        gatewayUrl: p,
        goalId: l.trim()
      }), await o.goalsListQuery.invalidateAll(f)
    }, i[5] = f, i[6] = p, i[7] = r) : r = i[7], i[8] !== e || i[9] !== r ? (n = {
      mutationFn: e,
      onSuccess: r
    }, i[8] = e, i[9] = r, i[10] = n) : n = i[10], (0, a.useMutation)(n)
  }, "useDecideGoalSuggestionMutation", 0, function() {
    let e, r, n, i, s, c = (0, t.c)(15),
      {
        gatewayUrl: d,
        gatewayScopeKey: y,
        sendRequest: g,
        isReady: f,
        ensureLiveConnection: p
      } = (0, u.useHatchRpc)(),
      m = (0, l.useQueryClient)(),
      G = y ?? d ?? "";
    return c[0] !== p || c[1] !== d || c[2] !== f || c[3] !== g ? (e = async e => {
      let {
        goalId: t,
        suggestionId: a,
        decision: l
      } = e;
      if (null == d) throw Error("Gateway URL not available yet");
      return f || await p(), (0, o.decideGoalSuggestion)(t, a, l, g)
    }, c[0] = p, c[1] = d, c[2] = f, c[3] = g, c[4] = e) : e = c[4], c[5] !== m || c[6] !== G ? (r = e => {
      let {
        goalId: t,
        suggestionId: a,
        decision: l
      } = e, r = m.getQueryData(o.goalsDetailQuery.queryKey({
        gatewayUrl: G,
        goalId: t
      }));
      return o.goalsDetailQuery.setData(m, {
        gatewayUrl: G,
        goalId: t
      }, e => null == e ? e : {
        ...e,
        suggestions: e.suggestions.map(e => e.suggestionId === a ? {
          ...e,
          status: l
        } : e)
      }), {
        goalId: t,
        previousDetail: r
      }
    }, n = (e, t, a) => {
      a?.previousDetail !== void 0 && o.goalsDetailQuery.setData(m, {
        gatewayUrl: G,
        goalId: a.goalId
      }, a.previousDetail)
    }, i = async (e, t, a) => {
      await o.goalsDetailQuery.invalidate(m, {
        gatewayUrl: G,
        goalId: a.goalId
      }), await o.goalsListQuery.invalidateAll(m)
    }, c[5] = m, c[6] = G, c[7] = r, c[8] = n, c[9] = i) : (r = c[7], n = c[8], i = c[9]), c[10] !== e || c[11] !== r || c[12] !== n || c[13] !== i ? (s = {
      mutationFn: e,
      onMutate: r,
      onError: n,
      onSettled: i
    }, c[10] = e, c[11] = r, c[12] = n, c[13] = i, c[14] = s) : s = c[14], (0, a.useMutation)(s)
  }, "useDeleteGoalMutation", 0, function(e) {
    let r, n, i, s, c, d, y = (0, t.c)(25),
      {
        gatewayUrl: g,
        gatewayScopeKey: p,
        sendRequest: m,
        isReady: G,
        ensureLiveConnection: w
      } = (0, u.useHatchRpc)(),
      Q = (0, l.useQueryClient)(),
      _ = p ?? g ?? "";
    return y[0] !== w || y[1] !== g || y[2] !== e || y[3] !== G || y[4] !== m ? (r = async () => {
      if (null == g) throw Error("Gateway URL not available yet");
      G || await w(), await (0, o.deleteGoal)(e, m)
    }, y[0] = w, y[1] = g, y[2] = e, y[3] = G, y[4] = m, y[5] = r) : r = y[5], y[6] !== e || y[7] !== Q || y[8] !== _ ? (n = () => {
      let t = Q.getQueryData(o.goalsListQuery.queryKey({
        gatewayUrl: _
      }));
      return o.goalsListQuery.setData(Q, {
        gatewayUrl: _
      }, t => null == t ? t : f(t, e)), {
        previousList: t
      }
    }, y[6] = e, y[7] = Q, y[8] = _, y[9] = n) : n = y[9], y[10] !== Q || y[11] !== _ ? (i = (e, t, a) => {
      a?.previousList != null && o.goalsListQuery.setData(Q, {
        gatewayUrl: _
      }, a.previousList)
    }, y[10] = Q, y[11] = _, y[12] = i) : i = y[12], y[13] !== e || y[14] !== Q || y[15] !== _ ? (s = async () => {
      o.goalsDetailQuery.removeData(Q, {
        gatewayUrl: _,
        goalId: e
      })
    }, y[13] = e, y[14] = Q, y[15] = _, y[16] = s) : s = y[16], y[17] !== Q ? (c = async () => {
      await o.goalsListQuery.invalidateAll(Q)
    }, y[17] = Q, y[18] = c) : c = y[18], y[19] !== r || y[20] !== n || y[21] !== i || y[22] !== s || y[23] !== c ? (d = {
      mutationFn: r,
      onMutate: n,
      onError: i,
      onSuccess: s,
      onSettled: c
    }, y[19] = r, y[20] = n, y[21] = i, y[22] = s, y[23] = c, y[24] = d) : d = y[24], (0, a.useMutation)(d)
  }, "useHatchCompletedGoalsQuery", 0, function(e) {
    let a, l, r, n = (0, t.c)(4),
      u = void 0 === e || e;
    n[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.getGoalsCompletedListGatewayQuery)(), n[0] = a) : a = n[0];
    let s = a;
    return n[1] === Symbol.for("react.memo_cache_sentinel") ? (l = {
      sentrySurface: i.HATCH_SENTRY_SURFACES.GOALS_COMPLETED
    }, n[1] = l) : l = n[1], n[2] !== u ? (r = {
      enabled: u,
      meta: l
    }, n[2] = u, n[3] = r) : r = n[3], (0, Q.useGatewayQuery)(s, r)
  }, "useHatchGoalQuery", 0, function(e, a) {
    let l, r, n = (0, t.c)(4);
    n[0] !== e ? (l = null == e ? null : (0, o.getGoalDetailGatewayQuery)(e), n[0] = e, n[1] = l) : l = n[1];
    let i = l,
      u = (void 0 === a || a) && null != e;
    return n[2] !== u ? (r = {
      enabled: u
    }, n[2] = u, n[3] = r) : r = n[3], (0, Q.useGatewayQuery)(i, r)
  }, "useHatchGoalSuspenseQuery", 0, function(e) {
    let a, l, n, i, u = (0, t.c)(10),
      c = (0, s.useGatewayQueryContext)(),
      d = h() ?? "";
    if (u[0] !== c || u[1] !== e || u[2] !== d ? (a = o.goalsDetailQuery.queryOptions({
        gatewayUrl: d,
        goalId: e
      }, c), u[0] = c, u[1] = e, u[2] = d, u[3] = a) : a = u[3], u[4] !== a ? ({
        queryFn: l,
        ...n
      } = a, u[4] = a, u[5] = l, u[6] = n) : (l = u[5], n = u[6]), "function" != typeof l) throw Error("goalsDetailQuery returned a non-function queryFn");
    return u[7] !== l || u[8] !== n ? (i = {
      ...n,
      queryFn: l
    }, u[7] = l, u[8] = n, u[9] = i) : i = u[9], (0, r.useSuspenseQuery)(i)
  }, "useHatchGoalsQuery", 0, function(e) {
    let a, l, r = (0, t.c)(3),
      n = void 0 === e || e;
    r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.getGoalsListGatewayQuery)(), r[0] = a) : a = r[0];
    let i = a;
    return r[1] !== n ? (l = {
      enabled: n
    }, r[1] = n, r[2] = l) : l = r[2], (0, Q.useGatewayQuery)(i, l)
  }, "useHatchGoalsRouteReady", 0, function(e) {
    let a, l, r, n, i, u, s = (0, t.c)(7),
      c = void 0 === e ? null : e;
    s[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.getGoalsListGatewayQuery)(), s[0] = a) : a = s[0];
    let d = a;
    s[1] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, o.getGoalsTrackingListGatewayQuery)(), s[1] = l) : l = s[1];
    let y = l;
    s[2] !== c ? (r = null == c ? null : (0, o.getGoalDetailGatewayQuery)(c), s[2] = c, s[3] = r) : r = s[3];
    let g = r;
    s[4] === Symbol.for("react.memo_cache_sentinel") ? (n = {
      retry: !1
    }, s[4] = n) : n = s[4];
    let f = (0, Q.useGatewayQuery)(d, n);
    s[5] === Symbol.for("react.memo_cache_sentinel") ? (i = {
      retry: !1
    }, s[5] = i) : i = s[5];
    let p = (0, Q.useGatewayQuery)(y, i);
    return s[6] === Symbol.for("react.memo_cache_sentinel") ? (u = {
      retry: !1
    }, s[6] = u) : u = s[6], (0, Q.useGatewayQuery)(g, u), "pending" !== f.status && "pending" !== p.status
  }, "useHatchGoalsSuspenseQuery", 0, function() {
    let e, a, l, n, i = (0, t.c)(9),
      u = (0, s.useGatewayQueryContext)(),
      c = h() ?? "";
    if (i[0] !== u || i[1] !== c ? (e = o.goalsListQuery.queryOptions({
        gatewayUrl: c
      }, u), i[0] = u, i[1] = c, i[2] = e) : e = i[2], i[3] !== e ? ({
        queryFn: a,
        ...l
      } = e, i[3] = e, i[4] = a, i[5] = l) : (a = i[4], l = i[5]), "function" != typeof a) throw Error("goalsListQuery returned a non-function queryFn");
    return i[6] !== a || i[7] !== l ? (n = {
      ...l,
      queryFn: a,
      refetchOnMount: !0
    }, i[6] = a, i[7] = l, i[8] = n) : n = i[8], (0, r.useSuspenseQuery)(n)
  }, "useHatchTrackingGoalsQuery", 0, function(e) {
    let a, l, r = (0, t.c)(3),
      n = void 0 === e || e;
    r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.getGoalsTrackingListGatewayQuery)(), r[0] = a) : a = r[0];
    let i = a;
    return r[1] !== n ? (l = {
      enabled: n
    }, r[1] = n, r[2] = l) : l = r[2], (0, Q.useGatewayQuery)(i, l)
  }, "useHatchTrackingGoalsSuspenseQuery", 0, function() {
    let e, a, l, n, i = (0, t.c)(9),
      u = (0, s.useGatewayQueryContext)(),
      c = h() ?? "";
    if (i[0] !== u || i[1] !== c ? (e = o.goalsTrackingListQuery.queryOptions({
        gatewayUrl: c
      }, u), i[0] = u, i[1] = c, i[2] = e) : e = i[2], i[3] !== e ? ({
        queryFn: a,
        ...l
      } = e, i[3] = e, i[4] = a, i[5] = l) : (a = i[4], l = i[5]), "function" != typeof a) throw Error("goalsTrackingListQuery returned a non-function queryFn");
    return i[6] !== a || i[7] !== l ? (n = {
      ...l,
      queryFn: a,
      refetchOnMount: !0
    }, i[6] = a, i[7] = l, i[8] = n) : n = i[8], (0, r.useSuspenseQuery)(n)
  }, "useInvalidateGoalsLists", 0, function() {
    let e, a = (0, t.c)(2),
      r = (0, l.useQueryClient)();
    return a[0] !== r ? (e = () => {
      o.goalsListQuery.invalidateAll(r)
    }, a[0] = r, a[1] = e) : e = a[1], e
  }, "useReorderGoalMutation", 0, function(e) {
    let r, n, s, c, d, y, g = (0, t.c)(21);
    g[0] !== e ? (r = void 0 === e ? {} : e, g[0] = e, g[1] = r) : r = g[1];
    let {
      onFailed: f
    } = r, {
      gatewayUrl: m,
      gatewayScopeKey: G,
      sendRequest: w,
      isReady: Q,
      ensureLiveConnection: h
    } = (0, u.useHatchRpc)(), b = (0, l.useQueryClient)(), v = G ?? m ?? "";
    return g[2] !== h || g[3] !== m || g[4] !== Q || g[5] !== w ? (n = async e => {
      let {
        goalId: t,
        order: a
      } = e;
      if (null == m) throw Error("Gateway URL not available yet");
      Q || await h(), await (0, o.reorderGoal)(t, a, w)
    }, g[2] = h, g[3] = m, g[4] = Q, g[5] = w, g[6] = n) : n = g[6], g[7] !== b || g[8] !== v ? (s = async e => {
      let {
        goalId: t,
        order: a
      } = e;
      await b.cancelQueries({
        queryKey: o.goalsListQuery.queryKey({
          gatewayUrl: v
        })
      });
      let l = b.getQueryData(o.goalsListQuery.queryKey({
        gatewayUrl: v
      }));
      return o.goalsListQuery.setData(b, {
        gatewayUrl: v
      }, e => null == e ? e : p(e, t, a)), {
        previousList: l
      }
    }, g[7] = b, g[8] = v, g[9] = s) : s = g[9], g[10] !== f || g[11] !== b || g[12] !== v ? (c = (e, t, a) => {
      a?.previousList != null && o.goalsListQuery.setData(b, {
        gatewayUrl: v
      }, a.previousList), _.error({
        error: e instanceof Error ? e : Error(String(e)),
        goalId: t.goalId,
        tags: (0, i.hatchSentryTags)(i.HATCH_SENTRY_SURFACES.GOALS_LIST)
      }, "Failed to reorder goal"), f?.()
    }, g[10] = f, g[11] = b, g[12] = v, g[13] = c) : c = g[13], g[14] !== b ? (d = async () => {
      await o.goalsListQuery.invalidateAll(b)
    }, g[14] = b, g[15] = d) : d = g[15], g[16] !== n || g[17] !== s || g[18] !== c || g[19] !== d ? (y = {
      mutationKey: o.goalMoveMutationKey,
      mutationFn: n,
      onMutate: s,
      onError: c,
      onSettled: d
    }, g[16] = n, g[17] = s, g[18] = c, g[19] = d, g[20] = y) : y = g[20], (0, a.useMutation)(y)
  }, "useReparentGoalMutation", 0, function(e) {
    let r, n, s, c, d, y, g, f = (0, t.c)(23);
    f[0] !== e ? (r = void 0 === e ? {} : e, f[0] = e, f[1] = r) : r = f[1];
    let {
      onServerIgnored: p
    } = r, {
      gatewayUrl: m,
      gatewayScopeKey: G,
      sendRequest: Q,
      isReady: h,
      ensureLiveConnection: b
    } = (0, u.useHatchRpc)(), v = (0, l.useQueryClient)(), I = G ?? m ?? "";
    return f[2] !== b || f[3] !== m || f[4] !== h || f[5] !== Q ? (n = async e => {
      let {
        goalId: t,
        parentGoalId: a,
        order: l
      } = e, r = void 0 === l ? null : l;
      if (null == m) throw Error("Gateway URL not available yet");
      h || await b();
      let n = await (0, o.reparentGoal)(t, a, Q),
        i = null != n && n.appliedParentGoalId !== a;
      return i || null == n || null == r || await (0, o.reorderGoal)(t, r, Q), {
        wasIgnored: i
      }
    }, f[2] = b, f[3] = m, f[4] = h, f[5] = Q, f[6] = n) : n = f[6], f[7] !== v || f[8] !== I ? (s = async e => {
      let {
        goalId: t,
        parentGoalId: a,
        order: l
      } = e, r = void 0 === l ? null : l;
      await v.cancelQueries({
        queryKey: o.goalsListQuery.queryKey({
          gatewayUrl: I
        })
      });
      let n = v.getQueryData(o.goalsListQuery.queryKey({
        gatewayUrl: I
      }));
      return o.goalsListQuery.setData(v, {
        gatewayUrl: I
      }, e => null == e ? e : w(e, t, a, r)), {
        previousList: n
      }
    }, f[7] = v, f[8] = I, f[9] = s) : s = f[9], f[10] !== p ? (c = e => {
      let {
        wasIgnored: t
      } = e;
      t && p?.()
    }, f[10] = p, f[11] = c) : c = f[11], f[12] !== v || f[13] !== I ? (d = (e, t, a) => {
      a?.previousList != null && o.goalsListQuery.setData(v, {
        gatewayUrl: I
      }, a.previousList), _.error({
        error: e instanceof Error ? e : Error(String(e)),
        goalId: t.goalId,
        tags: (0, i.hatchSentryTags)(i.HATCH_SENTRY_SURFACES.GOALS_LIST)
      }, "Failed to reparent goal")
    }, f[12] = v, f[13] = I, f[14] = d) : d = f[14], f[15] !== v ? (y = async () => {
      await o.goalsListQuery.invalidateAll(v)
    }, f[15] = v, f[16] = y) : y = f[16], f[17] !== n || f[18] !== s || f[19] !== c || f[20] !== d || f[21] !== y ? (g = {
      mutationKey: o.goalMoveMutationKey,
      mutationFn: n,
      onMutate: s,
      onSuccess: c,
      onError: d,
      onSettled: y
    }, f[17] = n, f[18] = s, f[19] = c, f[20] = d, f[21] = y, f[22] = g) : g = f[22], (0, a.useMutation)(g)
  }, "useSetGoalStatusMutation", 0, function() {
    let e, r, n, i = (0, t.c)(11),
      {
        gatewayUrl: s,
        gatewayScopeKey: c,
        sendRequest: d,
        isReady: y,
        ensureLiveConnection: g
      } = (0, u.useHatchRpc)(),
      f = (0, l.useQueryClient)(),
      p = c ?? s ?? "";
    return i[0] !== g || i[1] !== s || i[2] !== y || i[3] !== d ? (e = async e => {
      let {
        goalId: t,
        status: a
      } = e;
      if (null == s) throw Error("Gateway URL not available yet");
      return y || await g(), (0, o.updateGoal)(t, {
        status: a
      }, d)
    }, i[0] = g, i[1] = s, i[2] = y, i[3] = d, i[4] = e) : e = i[4], i[5] !== f || i[6] !== p ? (r = (e, t) => {
      let {
        goalId: a
      } = t;
      null != e && o.goalsDetailQuery.setData(f, {
        gatewayUrl: p,
        goalId: a
      }, e), o.goalsListQuery.invalidateAll(f)
    }, i[5] = f, i[6] = p, i[7] = r) : r = i[7], i[8] !== e || i[9] !== r ? (n = {
      mutationFn: e,
      onSuccess: r
    }, i[8] = e, i[9] = r, i[10] = n) : n = i[10], (0, a.useMutation)(n)
  }, "useUpdateGoalMutation", 0, function(e) {
    let r, n, i, s = (0, t.c)(13),
      {
        gatewayUrl: c,
        gatewayScopeKey: d,
        sendRequest: y,
        isReady: g,
        ensureLiveConnection: f
      } = (0, u.useHatchRpc)(),
      p = (0, l.useQueryClient)(),
      m = d ?? c ?? "";
    return s[0] !== f || s[1] !== c || s[2] !== e || s[3] !== g || s[4] !== y ? (r = async t => {
      if (null == c) throw Error("Gateway URL not available yet");
      return g || await f(), (0, o.updateGoal)(e, t, y)
    }, s[0] = f, s[1] = c, s[2] = e, s[3] = g, s[4] = y, s[5] = r) : r = s[5], s[6] !== e || s[7] !== p || s[8] !== m ? (n = async t => {
      null != t ? o.goalsDetailQuery.setData(p, {
        gatewayUrl: m,
        goalId: e
      }, t) : await o.goalsDetailQuery.invalidate(p, {
        gatewayUrl: m,
        goalId: e
      }), await o.goalsListQuery.invalidateAll(p)
    }, s[6] = e, s[7] = p, s[8] = m, s[9] = n) : n = s[9], s[10] !== r || s[11] !== n ? (i = {
      mutationFn: r,
      onSuccess: n
    }, s[10] = r, s[11] = n, s[12] = i) : i = s[12], (0, a.useMutation)(i)
  }], 397355)
}, 760741, e => {
  "use strict";
  var t = e.i(414822),
    a = e.i(768380),
    l = e.i(436795);
  e.s(["useSuspenseQuery", 0, function(e, r) {
    return (0, a.useBaseQuery)({
      ...e,
      enabled: !0,
      suspense: !0,
      throwOnError: l.defaultThrowOnError,
      placeholderData: void 0
    }, t.QueryObserver, r)
  }])
}]);

//# debugId=2503fd77-310e-68cb-a221-3e2255dacfa5
//# sourceMappingURL=1duic20hh3td2.js.map