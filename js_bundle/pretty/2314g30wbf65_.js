;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "157f8ba9-ae79-0577-0cb9-b50d535fcaa2")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 306515, 450446, e => {
  "use strict";
  var t = e.i(722099),
    r = e.i(849329),
    a = e.i(863641),
    n = e.i(359783),
    o = e.i(925301),
    i = e.i(790170),
    l = e.i(720756),
    s = e.i(354385),
    p = e.i(361896),
    u = e.i(766271),
    c = e.i(503037),
    y = e.i(393202),
    d = e.i(506257);

  function g(e) {
    return !!(0, o.isGatewayRequestError)(e) && ("transport" === e.kind ? 403 === e.httpStatus && "egress.permissions.scoped" === e.requestMethod : 404 === e.httpStatus || 501 === e.httpStatus || "method_not_found" === e.code || "unknown_method" === e.code || "unsupported_method" === e.code || "not_implemented" === e.code)
  }

  function m(e) {
    if (null == e || "object" != typeof e || Array.isArray(e)) throw Error("Invalid scoped permissions response");
    return e
  }

  function v(e) {
    return null == e || "object" != typeof e || Array.isArray(e) ? null : e
  }

  function w(e) {
    return "allow" === e || "ask" === e || "deny" === e
  }

  function h(e) {
    let t = m(e),
      r = t.state,
      a = null == t.method ? null : t.method;
    if ("predicted" !== r && "pending" !== r && "observed" !== r || null !== a && ("string" != typeof a || 0 === a.trim().length)) throw Error("Invalid required permission");
    if ("connector" === t.kind) {
      if ("string" != typeof t.connector || 0 === t.connector.trim().length) throw Error("Invalid required connector permission");
      return {
        kind: "connector",
        connector: t.connector,
        method: null == a ? null : a.trim(),
        state: r
      }
    }
    if ("website" === t.kind) {
      if ("string" != typeof t.destination || 0 === t.destination.trim().length) throw Error("Invalid required website permission");
      return {
        kind: "website",
        destination: t.destination.trim(),
        method: null == a ? null : a.trim(),
        state: r
      }
    }
    throw Error("Invalid required permission kind")
  }

  function f(e) {
    return Array.isArray(e) ? e.map(h) : null
  }
  let T = (0, i.createGatewayQuery)({
    id: "permissions.scoped",
    queryKey: ({
      gatewayUrl: e,
      scope: t,
      connectors: r
    }) => ["permissions", "scoped", e, t.scopeType, t.scopeId, r.join(",")],
    noiseFn: async (e, {
      scope: t,
      connectors: r
    }) => {
      let a = function(e) {
        let t = m(e),
          r = m(t.scope);
        if ("schedule" !== r.scope_type && "space" !== r.scope_type || "string" != typeof r.scope_id || "string" != typeof t.revision || 0 === t.revision.length || !Array.isArray(t.connectors) || "auto_allow" !== t.web_read_default && "always_ask" !== t.web_read_default || !Array.isArray(t.websites) || !Array.isArray(t.inherited_websites)) throw Error("Invalid scoped permissions response");
        let a = t.connectors.map(e => {
          let t = m(e);
          if ("string" != typeof t.connector) throw Error("Invalid scoped connector identity");
          let r = Object.fromEntries(Object.entries(m(t.methods)).map(([e, t]) => [e, function(e) {
            let {
              label: t,
              mode: r,
              mode_options: a,
              source: n,
              source_label: o,
              override_mode: i,
              expires_at_ms: l
            } = m(e);
            if ("string" != typeof t || !w(r) || !Array.isArray(a) || !a.every(w) || "default" !== n && "main_chat" !== n && "scope_override" !== n && "inherited_read" !== n && "temporary" !== n || "string" != typeof o || null !== i && !w(i) || null !== l && ("number" != typeof l || !Number.isFinite(l))) throw Error("Invalid scoped method permission");
            return {
              label: t,
              mode: r,
              mode_options: a,
              source: n,
              source_label: o,
              override_mode: i,
              expires_at_ms: l
            }
          }(t)]));
          return {
            connector: t.connector,
            methods: r,
            groups: function(e, t) {
              let r = v(e),
                a = v(r?.action_groups ?? r?.actionGroups);
              if (null == a) return [];
              let n = new Set(Object.keys(t));
              return Object.entries(a).flatMap(([e, t]) => {
                let r = v(t);
                if (null == r || !Array.isArray(r.methods)) return [];
                let a = r.methods.flatMap(e => {
                  if ("string" != typeof e) return [];
                  let t = e.trim();
                  return t.length > 0 && n.has(t) ? [t] : []
                });
                if (0 === a.length) return [];
                let o = "string" == typeof r.label && r.label.trim() ? r.label.trim() : e;
                return [{
                  key: e,
                  label: o,
                  category: "string" == typeof r.category && r.category.trim() ? r.category.trim() : null,
                  methods: [...new Set(a)]
                }]
              })
            }(t.display, r)
          }
        });
        return {
          scope: {
            scope_type: r.scope_type,
            scope_id: r.scope_id
          },
          revision: t.revision,
          connectors: a,
          web_read_default: t.web_read_default,
          websites: (0, p.normalizeActivePermissions)({
            items: t.websites
          }).items,
          inherited_websites: (0, p.normalizeActivePermissions)({
            items: t.inherited_websites
          }).items
        }
      }(await e.sendRequest("egress.permissions.scoped", {
        scope_type: t.scopeType,
        scope_id: t.scopeId,
        connectors: r.join(",")
      }).catch(e => {
        throw g(e) && (0, o.isGatewayRequestError)(e) && (0, s.markHatchErrorHandled)(e), e
      }));
      if (a.scope.scope_type !== t.scopeType || a.scope.scope_id !== t.scopeId) throw Error("Scoped permissions response does not match the requested owner");
      return a
    },
    staleTime: 0,
    meta: {
      sentrySurface: a.HATCH_SENTRY_SURFACES.SETTINGS_PERMISSIONS
    }
  });
  e.s(["isScopedPermissionsUnavailable", 0, g, "normalizeScopedRequiredPermissions", 0, f, "useScopedPermissions", 0, function(e, a, n) {
    let o, i, s = (0, t.c)(7),
      p = (0, l.useGatewayQueryContext)();
    s[0] !== a || s[1] !== p || s[2] !== e ? (o = T.queryOptions({
      gatewayUrl: p.gatewayScopeKey ?? p.targetKey,
      scope: e,
      connectors: a
    }, p), s[0] = a, s[1] = p, s[2] = e, s[3] = o) : o = s[3];
    let c = n && null != p.gatewayUrl;
    return s[4] !== o || s[5] !== c ? (i = {
      ...o,
      enabled: c,
      placeholderData: u.keepPreviousData,
      refetchOnMount: "always"
    }, s[4] = o, s[5] = c, s[6] = i) : i = s[6], (0, r.useQuery)(i)
  }, "useSetScopedPermission", 0, function(e) {
    let r, n, i, s, u, g = (0, t.c)(15),
      m = (0, l.useGatewayQueryContext)(),
      v = (0, y.useQueryClient)(),
      w = m.gatewayScopeKey ?? m.targetKey;
    return g[0] !== w || g[1] !== v ? (r = () => (0, d.captureApprovalTargetToken)(v, w), g[0] = w, g[1] = v, g[2] = r) : r = g[2], g[3] !== m || g[4] !== w || g[5] !== v || g[6] !== e ? (n = async t => {
      let r = (0, d.captureApprovalTargetToken)(v, w);
      if (m.isReady || await m.waitForTransport(), !(0, d.isApprovalTargetTokenCurrent)(v, r)) throw (0, o.createGatewayTargetChangedError)();
      return m.sendRequest("egress.permissions.scoped.update", {
        scope_type: e.scopeType,
        scope_id: e.scopeId,
        expected_revision: t.revision,
        connector: t.connector,
        method: t.method,
        mode: t.mode,
        display_name: t.displayName
      }, {
        expectedTargetKey: m.targetKey
      })
    }, g[3] = m, g[4] = w, g[5] = v, g[6] = e, g[7] = n) : n = g[7], g[8] !== v ? (i = async (e, t, r, a) => {
      null != a && null != (0, d.advanceApprovalStateGeneration)(v, a) && await v.invalidateQueries({
        queryKey: p.permissionsQueryKeys.all
      })
    }, g[8] = v, g[9] = i) : i = g[9], g[10] === Symbol.for("react.memo_cache_sentinel") ? (s = {
      sentrySurface: a.HATCH_SENTRY_SURFACES.SETTINGS_PERMISSIONS
    }, g[10] = s) : s = g[10], g[11] !== r || g[12] !== n || g[13] !== i ? (u = {
      onMutate: r,
      mutationFn: n,
      retry: !1,
      onSettled: i,
      meta: s
    }, g[11] = r, g[12] = n, g[13] = i, g[14] = u) : u = g[14], (0, c.useMutation)(u)
  }], 450446);
  let S = (0, n.createClientLogger)("permissionInventoryQueries");

  function A(e) {
    return "object" != typeof e || null == e || Array.isArray(e) ? null : e
  }

  function K(e) {
    return "number" == typeof e && Number.isSafeInteger(e) && e >= 0 ? e : null
  }

  function Q(e) {
    let t = A(e);
    if (t?.kind === "permission") {
      let e = (0, p.normalizeActivePermissions)({
        items: [t.permission]
      }).items[0];
      return null == e ? null : {
        kind: "permission",
        permission: e
      }
    }
    if (t?.kind === "protocol") {
      let e = A(t.protocol),
        r = e?.key,
        a = e?.title,
        n = e?.description,
        o = e?.icon_key,
        i = e?.mode;
      return "string" == typeof r && r.trim().length > 0 && "string" == typeof a && a.trim().length > 0 && (null == n || "string" == typeof n) && (null == o || "string" == typeof o) && ("allow" === i || "ask" === i || "deny" === i) ? {
        kind: "protocol",
        protocol: {
          key: r.trim(),
          title: a.trim(),
          description: "string" == typeof n ? n : null,
          iconKey: "string" == typeof o ? o : null,
          mode: i
        }
      } : null
    }
    if (t?.kind !== "owner") return null;
    let r = A(t.scope),
      a = r?.scope_type,
      n = "schedule" === a ? r?.schedule_id : "space" === a ? r?.space_slug : null,
      o = r?.display_name,
      i = f(t.required_permissions),
      l = t.manage_permissions_available;
    return ("schedule" === a || "space" === a) && "string" == typeof n && 0 !== n.trim().length && "string" == typeof o && 0 !== o.trim().length && null != i && "boolean" == typeof l && Array.isArray(t.permissions) ? {
      kind: "owner",
      scope: {
        scopeType: a,
        scopeId: n
      },
      displayName: o,
      requiredPermissions: i,
      managePermissionsAvailable: l,
      permissions: (0, p.normalizeActivePermissions)({
        items: t.permissions
      }).items
    } : null
  }
  let _ = ["connector", "website", "artifact", "scheduled_task", "direct_network_protocol"],
    k = (0, i.createGatewayQuery)({
      id: "permissions.inventory",
      queryKey: ({
        gatewayUrl: e
      }) => ["permissions", "inventory", e],
      noiseFn: async e => {
        try {
          var t = await e.sendRequest("permissions.inventory", {});
          let r = A(t);
          if (!Array.isArray(r?.sections) || r.sections.length !== _.length) throw Error("Invalid permission inventory response");
          let a = r.sections.flatMap(e => {
            let t = A(e),
              r = t?.category,
              a = K(t?.item_count),
              n = K(t?.permission_count);
            if ("string" != typeof r || !_.includes(r) || null == a || null == n || !Array.isArray(t?.entries)) return [];
            let o = t.entries.map(Q);
            return o.every(e => null != e && function(e, t) {
              switch (t) {
                case "connector":
                case "website":
                  return "permission" === e.kind;
                case "artifact":
                  return "owner" === e.kind && "space" === e.scope.scopeType;
                case "scheduled_task":
                  return "owner" === e.kind && "schedule" === e.scope.scopeType;
                case "direct_network_protocol":
                  return "protocol" === e.kind
              }
            }(e, r)) ? [{
              category: r,
              itemCount: a,
              permissionCount: n,
              entries: o
            }] : []
          });
          if (a.length !== _.length || new Set(a.map(({
              category: e
            }) => e)).size !== _.length) throw Error("Invalid permission inventory response");
          return {
            sections: a
          }
        } catch (e) {
          if ((0, o.isGatewayDisconnectError)(e) && (0, o.isGatewayRequestError)(e) && (0, s.markHatchErrorHandled)(e), (0, o.isGatewayRequestError)(e) && 404 === e.httpStatus && S.retainForBugReport("warn", "Permission inventory route is unavailable"), (0, o.isGatewayRequestError)(e) && (404 === e.httpStatus || 501 === e.httpStatus || "method_not_found" === e.code || "unknown_method" === e.code || "unsupported_method" === e.code || "not_implemented" === e.code)) return null;
          throw e
        }
      },
      staleTime: 5e3,
      meta: {
        sentrySurface: a.HATCH_SENTRY_SURFACES.SETTINGS_PERMISSIONS
      }
    });
  e.s(["permissionInventoryQuery", 0, k, "usePermissionInventory", 0, function(e) {
    let a, n, o = (0, t.c)(5),
      i = (0, l.useGatewayQueryContext)();
    o[0] !== i ? (a = k.queryOptions({
      gatewayUrl: i.gatewayScopeKey ?? i.targetKey
    }, i), o[0] = i, o[1] = a) : a = o[1];
    let s = e && null != i.gatewayUrl;
    return o[2] !== a || o[3] !== s ? (n = {
      ...a,
      enabled: s,
      refetchOnMount: "always"
    }, o[2] = a, o[3] = s, o[4] = n) : n = o[4], (0, r.useQuery)(n)
  }], 306515)
}, 65372, 850114, 543311, e => {
  "use strict";
  var t = e.i(722099),
    r = e.i(519172),
    a = e.i(293760),
    n = e.i(503037),
    o = e.i(849329),
    i = e.i(393202),
    l = e.i(359783),
    s = e.i(134348),
    p = e.i(175286),
    u = e.i(508180),
    c = e.i(361896),
    y = e.i(506257),
    d = e.i(891387);
  e.s(["BULK_APPROVAL_DECISION_CONCURRENCY", 0, 2, "MAX_APPROVALS_PER_COMPOSER_ACTION", 0, 10], 850114);
  var g = e.i(306515),
    m = e.i(424379),
    v = e.i(720756),
    w = e.i(925301),
    h = e.i(871157),
    f = e.i(790170),
    T = e.i(863641);
  let S = (0, l.createClientLogger)("walletQueries");

  function A(e) {
    if (null == e || "object" != typeof e) return null;
    let t = (0, c.trimToNonEmptyString)(e.payment_id);
    return null == t ? null : {
      paymentType: (0, c.trimToNonEmptyString)(e.payment_type),
      paymentId: t,
      paymentMethodLabel: (0, c.trimToNonEmptyString)(e.payment_method_label),
      cardBrand: (0, c.trimToNonEmptyString)(e.card_brand),
      cardLast4: (0, c.trimToNonEmptyString)(e.card_last4)
    }
  }
  class K extends Error {
    constructor(e) {
      super(e), this.name = "WalletSelectionResponseError"
    }
  }
  let Q = ["wallet"],
    _ = (0, f.createGatewayQuery)({
      id: "wallet.get",
      queryKey: ({
        gatewayUrl: e
      }) => ["wallet", e],
      noiseFn: async e => (function(e) {
        if (null == e || "object" != typeof e) return {
          paymentMethods: []
        };
        let t = Array.isArray(e.payment_methods) ? e.payment_methods : [],
          r = 0,
          a = 0,
          n = t.map(e => {
            let t = function(e) {
                if (null == e || "object" != typeof e) return null;
                let t = (0, c.trimToNonEmptyString)(e.payment_method);
                if (null == t) return null;
                let r = Array.isArray(e.payment_options) ? e.payment_options.map(A).filter(e => null != e) : [];
                return {
                  paymentMethod: t,
                  displayName: (0, c.trimToNonEmptyString)(e.display_name),
                  paymentOptions: r
                }
              }(e),
              n = function(e) {
                if (null == e || "object" != typeof e) return 0;
                let t = e.payment_options;
                return Array.isArray(t) ? t.length : 0
              }(e);
            return null == t ? (r += 1, a += n, null) : (a += n - t.paymentOptions.length, t)
          }).filter(e => null != e);
        return n.every(e => 0 === e.paymentOptions.length) && (r > 0 || a > 0) && S.error({
          droppedGroups: r,
          droppedOptions: a,
          rawGroupCount: t.length,
          tags: (0, T.hatchSentryTags)(T.HATCH_SENTRY_SURFACES.CHECKOUT_WALLET)
        }, "Wallet catalog response had rows but produced no usable payment options"), {
          paymentMethods: n
        }
      })(await e.sendRequest("wallet.get", {})),
      invalidationKey: () => Q,
      staleTime: 3e4
    });
  async function k(e, t, r) {
    let a = {
      approval_id: e.approvalId,
      payment_method: e.paymentMethod,
      payment_type: e.paymentType,
      payment_id: e.paymentId
    };
    return function(e, t) {
      let r = null != e && "object" == typeof e ? e : {},
        a = null != r.payment_selection && "object" == typeof r.payment_selection ? r.payment_selection : {},
        n = null != r.payment_details && "object" == typeof r.payment_details ? r.payment_details : {},
        o = (0, c.trimToNonEmptyString)(r.approval_id),
        i = (0, c.trimToNonEmptyString)(a.payment_method),
        l = (0, c.trimToNonEmptyString)(a.payment_type),
        s = (0, c.trimToNonEmptyString)(a.payment_id);
      if (null == o || null == s) throw new K("wallet.set response is missing required fields");
      if (o !== t.approvalId || s !== t.paymentId || null != i && i !== t.paymentMethod || null != l && l !== t.paymentType) throw new K("wallet.set response did not match the requested selection");
      return {
        approvalId: o,
        paymentSelection: {
          paymentMethod: i ?? t.paymentMethod,
          paymentType: l ?? t.paymentType,
          paymentId: s
        },
        paymentDetails: {
          paymentMethodLabel: (0, c.trimToNonEmptyString)(n.payment_method_label),
          cardBrand: (0, c.trimToNonEmptyString)(n.card_brand),
          cardLast4: (0, c.trimToNonEmptyString)(n.card_last4)
        }
      }
    }(null == r ? await t("wallet.set", a) : await t("wallet.set", a, r), e)
  }
  e.s(["WalletSelectionResponseError", 0, K, "setWalletSelection", 0, k, "walletCatalogQuery", 0, _], 543311);
  let I = (0, l.createClientLogger)("useHatchEgressApprovalsQuery"),
    C = new Set;

  function E(e, t) {
    if (!(0, y.isApprovalTargetTokenCurrent)(e, t)) throw (0, w.createGatewayTargetChangedError)()
  }

  function P(e, t) {
    return e.length === t.length && e.every((e, r) => {
      let a = t[r];
      return null != a && e.approvalId === a.approvalId && e.status === a.status && e.decision === a.decision && e.decidedAtMs === a.decidedAtMs
    })
  }
  async function q(e, t) {
    let r = c.approvalsQueryKeys.historyRoot(t);
    await e.invalidateQueries({
      queryKey: r,
      refetchType: "none"
    }), await e.refetchQueries({
      queryKey: r,
      type: "active"
    }, {
      cancelRefetch: !1
    })
  }
  let R = new Set;

  function M(e, t) {
    return JSON.stringify([e, t])
  }
  class U extends Error {
    constructor(e) {
      super(`Decision already in flight for approval ${e}`), this.name = "DuplicateApprovalDecisionError"
    }
  }

  function b(e) {
    let {
      approval: t,
      approvalsAfterDecision: r,
      requestedApprovalId: a
    } = e, n = new Set([a, t.approvalId]);
    u.commitStoreUpdate(e => {
      let o = Date.now(),
        i = {
          ...e.activity.liveTaskStatusesByTaskId
        },
        l = e.activity.liveTaskScopesByTaskId ?? {},
        p = null != r ? (0, s.approvalsToSnapshotPendingApprovals)(r.pending) : {
          ...e.activity.snapshotPendingApprovalsById
        },
        u = null != r ? (0, d.approvalsToSnapshotPendingApprovalScopes)(r.pending) : {
          ...e.activity.snapshotPendingApprovalScopesById ?? {}
        },
        c = null != r ? (0, d.approvalsToSnapshotPendingApprovalBackgroundOnly)(r.pending) : {
          ...e.activity.snapshotPendingApprovalBackgroundOnlyById ?? {}
        },
        y = null != r ? (0, s.approvalsToSnapshotPendingApprovalRequestedAtMs)(r.pending) : {
          ...e.activity.snapshotPendingApprovalRequestedAtMsById
        },
        g = {
          ...e.activity.resolvedApprovalIdsById,
          [a]: !0
        };
      t.approvalId !== a && (g[t.approvalId] = !0);
      let m = null != r ? (0, s.retainResolvedApprovalIdsPresentInSnapshot)(g, p) : g,
        v = {
          ...e.activity.resolvedTaskGraceUntilByTaskId
        };
      if (null == r)
        for (let e of n) delete p[e], delete u[e], delete c[e], delete y[e];
      if (null != t.taskId && t.taskId.length > 0)
        if (Object.entries(p).some(([e, r]) => r === t.taskId && !0 !== m[e])) {
          let e = i[t.taskId];
          i[t.taskId] = (0, s.isPendingApprovalStatus)(e ?? "") ? e : s.BLOCKING_PENDING_APPROVAL_STATUS;
          let a = function(e) {
            let {
              approvalsAfterDecision: t,
              resolvedApprovalIdsById: r,
              snapshotPendingApprovalScopesById: a,
              snapshotPendingApprovalsById: n,
              taskId: o
            } = e;
            for (let e of t?.pending ?? [])
              if (e.taskId === o && !0 !== r[e.approvalId] && (e.scope?.threadId != null || null != e.rootAgentId || null != e.sessionScopeId)) return (0, d.approvalSnapshotScope)(e);
            for (let [e, t] of Object.entries(n)) {
              if (t !== o || !0 === r[e]) continue;
              let n = a[e];
              if (null != n && (null != n.threadId || null != n.rootAgentId || null != n.sessionId)) return n
            }
            return null
          }({
            approvalsAfterDecision: r,
            resolvedApprovalIdsById: m,
            snapshotPendingApprovalScopesById: u,
            snapshotPendingApprovalsById: p,
            taskId: t.taskId
          });
          null != a ? l = {
            ...l,
            [t.taskId]: a
          } : null != l[t.taskId] && (l = {
            ...l
          }, delete l[t.taskId]), delete v[t.taskId]
        } else i[t.taskId] = t.status, null != l[t.taskId] && (l = {
          ...l
        }, delete l[t.taskId]), v[t.taskId] = o + s.APPROVAL_RESOLUTION_GRACE_MS;
      l = (0, s.retainLiveApprovalTaskScopes)(l, i);
      let w = (0, s.derivePendingApprovalTaskStatuses)({
        liveTaskStatusesByTaskId: i,
        snapshotPendingApprovalsById: p,
        resolvedApprovalIdsById: m,
        resolvedTaskGraceUntilByTaskId: v,
        now: o,
        mode: "background"
      });
      return {
        activity: {
          ...e.activity,
          liveTaskStatusesByTaskId: i,
          liveTaskScopesByTaskId: l,
          snapshotPendingApprovalsById: p,
          snapshotPendingApprovalScopesById: u,
          snapshotPendingApprovalBackgroundOnlyById: c,
          snapshotPendingApprovalRequestedAtMsById: y,
          resolvedApprovalIdsById: m,
          resolvedTaskGraceUntilByTaskId: v,
          taskStatusesByTaskId: w
        }
      }
    }, "activity/local_approval_resolution")
  }

  function H(e) {
    let {
      approval: t,
      expectedTargetToken: r,
      gatewayScopeKey: a,
      queryClient: n,
      requestedApprovalId: o
    } = e;
    if (!(0, y.isApprovalTargetTokenCurrent)(n, r)) return !1;
    let i = new Set([o, t.approvalId]);
    return c.approvalsListQuery.setData(n, {
      gatewayUrl: a
    }, e => {
      if (null == e) return {
        pending: [],
        recent: [t]
      };
      let r = [...e.pending, ...e.recent],
        a = r.find(e => e.approvalId === t.approvalId) ?? r.find(e => e.approvalId === o),
        n = a?.serverPresentation != null ? {
          ...t,
          serverPresentation: a.serverPresentation
        } : t;
      return {
        ...e,
        pending: e.pending.filter(e => !i.has(e.approvalId)),
        recent: [n, ...e.recent.filter(e => !i.has(e.approvalId))]
      }
    }), b({
      approval: t,
      approvalsAfterDecision: null,
      requestedApprovalId: o
    }), (0, y.advanceApprovalStateGeneration)(n, r), !0
  }

  function G() {
    let {
      gatewayUrl: e,
      gatewayScopeKey: t,
      vmName: r,
      sendRequest: a,
      isReady: o,
      ensureLiveConnection: l
    } = (0, p.useHatchRpc)(), s = (0, i.useQueryClient)(), u = e ?? "", d = t ?? (0, h.gatewayTargetKey)(u, r ?? null), m = (0, h.gatewayTargetKey)(u, r ?? null);
    return (0, n.useMutation)({
      onMutate: e => ({
        operationKey: M(d, e.approvalId)
      }),
      mutationFn: async e => {
        if (0 === u.length || 0 === d.length) throw Error("Gateway URL not available yet");
        let t = M(d, e.approvalId);
        if (R.has(t)) throw new U(e.approvalId);
        R.add(t);
        let r = (0, y.captureApprovalTargetToken)(s, d);
        return o || await l(), E(s, r), {
          approval: await (0, c.decideApproval)(e, a, {
            expectedTargetKey: m
          }),
          requestGatewayScopeKey: d,
          requestGatewayTargetKey: m,
          requestTargetToken: r
        }
      },
      onSuccess: async ({
        approval: e,
        requestGatewayScopeKey: t,
        requestGatewayTargetKey: r,
        requestTargetToken: n
      }, o) => {
        if (!(0, y.isApprovalTargetTokenCurrent)(s, n)) return;
        (0, y.advanceApprovalStateGeneration)(s, n);
        let i = !1;
        if (null != e) {
          let l = new Set([o.approvalId, e.approvalId]),
            p = !1;
          try {
            for (let u = 0; u < 2; u += 1) {
              let u = (0, y.captureApprovalStateToken)(s, t),
                d = await (0, c.fetchApprovals)(a, {
                  expectedTargetKey: r
                });
              if (!(0, y.isApprovalTargetTokenCurrent)(s, n)) break;
              if ((0, y.commitAcceptedApprovalsPull)({
                  expectedToken: u,
                  freshApprovals: {
                    pending: d.pending.filter(e => !l.has(e.approvalId)),
                    recent: d.recent
                  },
                  gatewayScopeKey: t,
                  queryClient: s,
                  syncActivity: t => {
                    b({
                      approval: e,
                      approvalsAfterDecision: t,
                      requestedApprovalId: o.approvalId
                    })
                  }
                }).accepted) {
                i = !0, p = !0;
                break
              }
            }
          } catch (i) {
            let r = i instanceof Error ? i : Error(String(i)),
              a = {
                approvalId: o.approvalId,
                error: r,
                tags: (0, T.hatchSentryTags)(T.HATCH_SENTRY_SURFACES.CHAT_MESSAGE_APPROVAL)
              };
            (0, w.isGatewayDisconnectError)(r) || (0, w.isGatewayTargetChangedError)(r) ? I.retainForBugReport("warn", "Approval decision reconciliation was interrupted"): I.error(a, "Failed to reconcile approval state after decision"), p = H({
              approval: e,
              expectedTargetToken: n,
              gatewayScopeKey: t,
              queryClient: s,
              requestedApprovalId: o.approvalId
            })
          }
          p || (p = H({
            approval: e,
            expectedTargetToken: n,
            gatewayScopeKey: t,
            queryClient: s,
            requestedApprovalId: o.approvalId
          }))
        }
        if (!(0, y.isApprovalTargetTokenCurrent)(s, n)) return;
        let l = [g.permissionInventoryQuery.invalidate(s, {
          gatewayUrl: t
        }), q(s, t), c.approvalsDetailQuery.invalidate(s, {
          gatewayUrl: t,
          approvalId: o.approvalId
        }), s.refetchQueries({
          queryKey: c.activePermissionsQuery.queryKey({
            gatewayUrl: t
          }),
          type: "active"
        }), c.permissionsDetailQuery.invalidate(s, {
          gatewayUrl: t
        })];
        i || l.push(c.approvalsListQuery.invalidate(s, {
          gatewayUrl: t
        })), await Promise.all(l)
      },
      onSettled: (e, t, r, a) => {
        t instanceof U || R.delete(a?.operationKey ?? M(d, r.approvalId))
      }
    })
  }
  let x = new Set;
  class O extends Error {
    constructor(e) {
      super(`Wallet selection already in flight for approval ${e}`), this.name = "DuplicateWalletSelectionError"
    }
  }
  class N extends Error {
    constructor(e) {
      super(`Wallet selection could not be confirmed for approval ${e}`), this.name = "WalletSelectionReconciliationError"
    }
  }
  async function L(e, t, r, a, n, o, i) {
    try {
      for (let l = 0; l < 2; l += 1) {
        let l = (0, y.captureApprovalStateToken)(e, r),
          s = await (0, c.fetchApprovals)(t, {
            expectedTargetKey: a
          });
        if (!i()) return Error("Gateway changed before wallet selection reconciliation completed"), I.retainForBugReport("warn", "Wallet payment selection reconciliation changed gateways"), !1;
        if ((!o || function(e, t) {
            let r = e.pending.find(e => e.approvalId === t.approvalId);
            return null == r || [r.browserCheckoutApproval?.paymentSelection, r.shopifyCheckoutApproval?.paymentSelection, r.stripeLinkCheckoutApproval?.paymentSelection].some(e => e?.paymentMethod === t.paymentMethod && e.paymentType === t.paymentType && e.paymentId === t.paymentId)
          }(s, n)) && (0, y.commitAcceptedApprovalsPull)({
            expectedToken: l,
            freshApprovals: s,
            gatewayScopeKey: r,
            queryClient: e
          }).accepted) return !0
      }
    } catch (o) {
      await e.invalidateQueries({
        queryKey: c.approvalsListQuery.queryKey({
          gatewayUrl: r
        }),
        refetchType: "none"
      }), await e.refetchQueries({
        queryKey: c.approvalsListQuery.queryKey({
          gatewayUrl: r
        })
      });
      let t = o instanceof Error ? o : Error(String(o)),
        a = {
          error: t,
          tags: (0, T.hatchSentryTags)(T.HATCH_SENTRY_SURFACES.CHECKOUT_WALLET)
        },
        n = "Failed to reconcile approvals after wallet payment selection";
      return (0, w.isGatewayDisconnectError)(t) || (0, w.isGatewayTargetChangedError)(t) ? I.retainForBugReport("warn", n) : I.error(a, n), !1
    }
    let l = Error("Authoritative wallet payment selection was not confirmed");
    return I.error({
      error: l,
      approvalId: n.approvalId,
      attempts: 2,
      tags: (0, T.hatchSentryTags)(T.HATCH_SENTRY_SURFACES.CHECKOUT_WALLET)
    }, "Wallet payment selection reconciliation exhausted"), !1
  }
  e.s(["useDecideEgressApproval", 0, G, "useDecideManyEgressApprovals", 0, function() {
    let e, r = (0, t.c)(2),
      a = G();
    return r[0] !== a ? (e = {
      mutationFn: async e => {
        let {
          decisions: t
        } = e;
        if (0 === t.length) return {
          totalCount: 0,
          successCount: 0,
          failureCount: 0
        };
        if (t.length > 10) throw Error("Approval batch exceeds the supported action limit");
        let r = 0,
          n = 0,
          o = async () => {
            for (; r < t.length;) {
              let e = r;
              r += 1;
              let o = t[e];
              if (null != o) try {
                await a.mutateAsync(o), n += 1
              } catch {}
            }
          };
        return await Promise.all(Array.from({
          length: Math.min(2, t.length)
        }, () => o())), {
          totalCount: t.length,
          successCount: n,
          failureCount: t.length - n
        }
      }
    }, r[0] = a, r[1] = e) : e = r[1], (0, n.useMutation)(e)
  }, "useHatchActivePermissionsQuery", 0, function(e, r) {
    let n, o, i, l, s, u, y = (0, t.c)(19),
      {
        gatewayUrl: d
      } = (0, p.useHatchRpc)(),
      g = (0, v.useGatewayQueryContext)(),
      m = d ?? "",
      w = g.gatewayScopeKey ?? m;
    y[0] !== r || y[1] !== m ? (n = r && m.trim().length > 0, y[0] = r, y[1] = m, y[2] = n) : n = y[2];
    let h = n;
    y[3] !== g || y[4] !== e || y[5] !== w ? (o = c.activePermissionsQuery.infiniteQueryOptions({
      gatewayUrl: w,
      input: e
    }, g), y[3] = g, y[4] = e, y[5] = w, y[6] = o) : o = y[6], y[7] !== h || y[8] !== o ? (i = {
      ...o,
      enabled: h,
      refetchOnMount: !0
    }, y[7] = h, y[8] = o, y[9] = i) : i = y[9];
    let f = (0, a.useInfiniteQuery)(i),
      T = f.data?.pages;
    y[10] !== T ? (l = function(e) {
      if (null == e || 0 === e.length) return {
        items: [],
        nextCursor: null
      };
      let t = new Set;
      return {
        items: e.flatMap(e => e.items.filter(e => !t.has(e.permissionId) && (t.add(e.permissionId), !0))),
        nextCursor: e[e.length - 1]?.nextCursor ?? null
      }
    }(T), y[10] = T, y[11] = l) : l = y[11];
    let S = l,
      A = null != S.nextCursor;
    return y[12] !== f ? (s = () => f.fetchNextPage(), y[12] = f, y[13] = s) : s = y[13], y[14] !== S || y[15] !== f || y[16] !== A || y[17] !== s ? (u = {
      ...f,
      data: S,
      hasMore: A,
      isLoadingMore: f.isFetchingNextPage,
      loadMore: s
    }, y[14] = S, y[15] = f, y[16] = A, y[17] = s, y[18] = u) : u = y[18], u
  }, "useHatchApprovalHistoryQuery", 0, function(e, r, n) {
    let o, i, l, s, u, y, d, g = (0, t.c)(23),
      {
        gatewayUrl: m
      } = (0, p.useHatchRpc)(),
      w = (0, v.useGatewayQueryContext)(),
      h = m ?? "",
      f = w.gatewayScopeKey ?? h;
    g[0] !== r || g[1] !== h ? (o = r && h.trim().length > 0, g[0] = r, g[1] = h, g[2] = o) : o = g[2];
    let T = o;
    g[3] !== w || g[4] !== e || g[5] !== f ? (i = c.approvalHistoryQuery.infiniteQueryOptions({
      gatewayUrl: f,
      input: e
    }, w), g[3] = w, g[4] = e, g[5] = f, g[6] = i) : i = g[6];
    let S = i;
    g[7] !== S.meta || g[8] !== n ? (l = {
      ...S.meta,
      sentrySurface: n
    }, g[7] = S.meta, g[8] = n, g[9] = l) : l = g[9], g[10] !== T || g[11] !== S || g[12] !== l ? (s = {
      ...S,
      enabled: T,
      meta: l,
      refetchOnMount: !0
    }, g[10] = T, g[11] = S, g[12] = l, g[13] = s) : s = g[13];
    let A = (0, a.useInfiniteQuery)(s),
      K = A.data?.pages;
    g[14] !== K ? (u = function(e) {
      if (null == e || 0 === e.length) return {
        items: [],
        nextCursor: null
      };
      let t = new Set;
      return {
        items: e.flatMap(e => e.items.filter(e => !t.has(e.approvalId) && (t.add(e.approvalId), !0))),
        nextCursor: e[e.length - 1]?.nextCursor ?? null
      }
    }(K), g[14] = K, g[15] = u) : u = g[15];
    let Q = u,
      _ = null != Q.nextCursor;
    return g[16] !== A ? (y = () => A.fetchNextPage(), g[16] = A, g[17] = y) : y = g[17], g[18] !== Q || g[19] !== A || g[20] !== _ || g[21] !== y ? (d = {
      ...A,
      data: Q,
      hasMore: _,
      isLoadingMore: A.isFetchingNextPage,
      loadMore: y
    }, g[18] = Q, g[19] = A, g[20] = _, g[21] = y, g[22] = d) : d = g[22], d
  }, "useHatchApprovalsSnapshotCache", 0, function() {
    let e, r, a = (0, t.c)(5),
      {
        gatewayUrl: n
      } = (0, p.useHatchRpc)(),
      i = (0, v.useGatewayQueryContext)(),
      l = i.gatewayScopeKey ?? n ?? "";
    return a[0] !== i || a[1] !== l ? (e = c.approvalsListQuery.queryOptions({
      gatewayUrl: l
    }, i), a[0] = i, a[1] = l, a[2] = e) : e = a[2], a[3] !== e ? (r = {
      ...e,
      enabled: !1
    }, a[3] = e, a[4] = r) : r = a[4], (0, o.useQuery)(r)
  }, "useHatchEgressApprovalsQuery", 0, function(e) {
    let {
      gatewayUrl: t,
      onEvent: a
    } = (0, p.useHatchRpc)(), n = (0, v.useGatewayQueryContext)(), l = (0, i.useQueryClient)(), u = t ?? "", d = n.gatewayScopeKey ?? u, m = e && u.trim().length > 0, w = (0, r.useRef)(null), [h, f] = (0, r.useState)(() => l.getQueryData(c.approvalsListQuery.queryKey({
      gatewayUrl: d
    }))?.source === "snapshot" ? d : null), T = l.getQueryData(c.approvalsListQuery.queryKey({
      gatewayUrl: d
    }))?.source === "snapshot" || h === d, S = (0, r.useRef)(T);
    S.current = T, (0, r.useEffect)(() => {
      if (0 === u.trim().length) return;
      let e = (0, y.captureApprovalTargetToken)(l, d),
        t = null,
        r = a("approvals.snapshot", r => {
          if (!(0, y.isApprovalTargetTokenCurrent)(l, e)) return;
          let a = (0, c.normalizeApprovalsSnapshot)(r),
            n = w.current,
            o = n?.gatewayScopeKey === d && !P(n.approvals.recent, a.recent),
            i = n?.gatewayScopeKey !== d || !P(n.approvals.pending, a.pending);
          w.current = {
            gatewayScopeKey: d,
            approvals: a
          }, S.current = !0, f(d), l.cancelQueries({
            queryKey: c.approvalsListQuery.queryKey({
              gatewayUrl: d
            }),
            exact: !0
          }), (i || o) && g.permissionInventoryQuery.invalidate(l, {
            gatewayUrl: d
          }), o && null == t && (t = setTimeout(() => {
            t = null, (0, y.isApprovalTargetTokenCurrent)(l, e) && q(l, d)
          }, 150))
        });
      return () => {
        null != t && clearTimeout(t), r()
      }
    }, [a, l, d, u]), (0, r.useEffect)(() => {
      if (!m) return;
      let e = (0, y.captureApprovalTargetToken)(l, d),
        t = null,
        r = () => {
          t = null, !S.current && (0, y.isApprovalTargetTokenCurrent)(l, e) && c.approvalsListQuery.invalidate(l, {
            gatewayUrl: d
          })
        },
        n = () => {
          S.current || null == (0, y.advanceApprovalStateGeneration)(l, e) || null == t && (t = setTimeout(r, 150))
        },
        o = a("activity.updated", n),
        i = a("agent.status", e => {
          "object" == typeof e && null != e && "string" == typeof e.activity_code && n()
        }),
        p = a("task.status", e => {
          var t;
          "string" == typeof(t = null != e && "object" == typeof e && "status" in e ? e.status : void 0) && ((0, s.isPendingApprovalStatus)(t) || (0, s.shouldStartApprovalResolutionGrace)(t)) && n()
        });
      return () => {
        null != t && clearTimeout(t), o(), i(), p()
      }
    }, [m, a, l, d]), (0, r.useEffect)(() => {
      if (!m || S.current) return;
      let e = (0, y.captureApprovalTargetToken)(l, d);
      null != (0, y.advanceApprovalStateGeneration)(l, e) && c.approvalsListQuery.invalidate(l, {
        gatewayUrl: d
      })
    }, [m, l, d]);
    let A = c.approvalsListQuery.queryOptions({
        gatewayUrl: d
      }, n),
      K = () => {
        let e = l.getQueryData(A.queryKey);
        if (e?.source === "snapshot") return e;
        let t = w.current;
        return t?.gatewayScopeKey === d ? t.approvals : null
      };
    return (0, o.useQuery)({
      ...A,
      queryFn: async () => {
        if (S.current) return K() ?? {
          pending: [],
          recent: [],
          source: "snapshot"
        };
        let e = (0, y.captureApprovalTargetToken)(l, d);
        n.isReady || await n.waitForTransport();
        for (let t = 0; t < 2; t += 1) {
          if (S.current) return K() ?? {
            pending: [],
            recent: [],
            source: "snapshot"
          };
          let r = (0, y.captureApprovalStateToken)(l, d),
            a = l.getQueryState(A.queryKey)?.dataUpdateCount ?? 0,
            o = await (0, c.fetchApprovals)(n.sendRequest, {
              expectedTargetKey: n.targetKey
            }),
            i = (0, y.commitAcceptedApprovalsPull)({
              expectedToken: r,
              freshApprovals: o,
              gatewayScopeKey: d,
              queryClient: l
            });
          if (i.accepted) return i.approvals;
          if (S.current) return K() ?? {
            pending: [],
            recent: [],
            source: "snapshot"
          };
          let s = l.getQueryData(A.queryKey),
            p = l.getQueryState(A.queryKey)?.dataUpdateCount ?? 0;
          if (null != s && p > a) return s;
          if (t + 1 >= 2 || S.current || !(0, y.isApprovalTargetTokenCurrent)(l, e)) break
        }
        return l.getQueryData(A.queryKey) ?? {
          pending: [],
          recent: []
        }
      },
      enabled: m && !T
    })
  }, "useHatchGroupedActivePermissionsQuery", 0, function(e, r) {
    let n, o, i, l, s, u, y = (0, t.c)(20),
      {
        gatewayUrl: d
      } = (0, p.useHatchRpc)(),
      g = (0, v.useGatewayQueryContext)(),
      m = d ?? "",
      w = g.gatewayScopeKey ?? m;
    y[0] !== r || y[1] !== m ? (n = r && m.trim().length > 0, y[0] = r, y[1] = m, y[2] = n) : n = y[2];
    let h = n;
    y[3] !== g || y[4] !== e || y[5] !== w ? (o = c.groupedActivePermissionsQuery.infiniteQueryOptions({
      gatewayUrl: w,
      input: e
    }, g), y[3] = g, y[4] = e, y[5] = w, y[6] = o) : o = y[6], y[7] !== h || y[8] !== o ? (i = {
      ...o,
      enabled: h,
      refetchOnMount: !0
    }, y[7] = h, y[8] = o, y[9] = i) : i = y[9];
    let f = (0, a.useInfiniteQuery)(i),
      T = f.data?.pages;
    y[10] !== T ? (l = function(e) {
      if (null == e || 0 === e.length) return {
        groups: [],
        nextCursor: null
      };
      let t = new Set;
      return {
        groups: e.flatMap(e => e.groups.filter(e => {
          let r = `${e.scope.scopeType}:${e.scope.sessionScopeId}`;
          return !t.has(r) && (t.add(r), !0)
        })),
        nextCursor: e[e.length - 1]?.nextCursor ?? null
      }
    }(T), y[10] = T, y[11] = l) : l = y[11];
    let S = l,
      A = f.data?.pages.length ?? 0,
      K = null != S.nextCursor;
    return y[12] !== f ? (s = () => f.fetchNextPage(), y[12] = f, y[13] = s) : s = y[13], y[14] !== S || y[15] !== f || y[16] !== A || y[17] !== K || y[18] !== s ? (u = {
      ...f,
      data: S,
      loadedPageCount: A,
      hasMore: K,
      isLoadingMore: f.isFetchingNextPage,
      loadMore: s
    }, y[14] = S, y[15] = f, y[16] = A, y[17] = K, y[18] = s, y[19] = u) : u = y[19], u
  }, "useHatchPermissionsQuery", 0, function(e) {
    let a, n, l, s, u, d = (0, t.c)(19),
      {
        gatewayUrl: g,
        sendRequest: m,
        isReady: w,
        ensureLiveConnection: h
      } = (0, p.useHatchRpc)(),
      f = (0, v.useGatewayQueryContext)(),
      T = (0, i.useQueryClient)(),
      S = g ?? "",
      A = f.gatewayScopeKey ?? S;
    d[0] !== e || d[1] !== S ? (a = e && S.trim().length > 0, d[0] = e, d[1] = S, d[2] = a) : a = d[2];
    let K = a;
    d[3] !== f || d[4] !== A ? (n = c.permissionsDetailQuery.queryOptions({
      gatewayUrl: A
    }, f), d[3] = f, d[4] = A, d[5] = n) : n = d[5], d[6] !== K || d[7] !== n ? (l = {
      ...n,
      enabled: K,
      refetchOnMount: !0
    }, d[6] = K, d[7] = n, d[8] = l) : l = d[8];
    let Q = (0, o.useQuery)(l),
      _ = Q.data?.snoozedUntilMs ?? null;
    return d[9] !== K || d[10] !== f.targetKey || d[11] !== h || d[12] !== w || d[13] !== T || d[14] !== A || d[15] !== m || d[16] !== _ ? (s = () => {
      if (!K || null == _ || _ <= Date.now()) return;
      let e = `${A}:${String(_)}`;
      if (C.has(e)) return;
      C.add(e);
      let t = (0, y.captureApprovalTargetToken)(T, A);
      (async () => {
        w || await h(), E(T, t), await (0, c.deleteHitlSnooze)(m, {
          expectedTargetKey: f.targetKey
        }), null != (0, y.advanceApprovalStateGeneration)(T, t) && await Promise.all([c.permissionsDetailQuery.invalidate(T, {
          gatewayUrl: A
        }), T.refetchQueries({
          queryKey: c.activePermissionsQuery.queryKey({
            gatewayUrl: A
          }),
          type: "active"
        }), c.approvalsListQuery.invalidate(T, {
          gatewayUrl: A
        })])
      })().catch(t => {
        C.delete(e), I.retainForBugReport("warn", "Failed to clear legacy HITL snooze")
      })
    }, u = [K, f.targetKey, h, w, T, A, m, _], d[9] = K, d[10] = f.targetKey, d[11] = h, d[12] = w, d[13] = T, d[14] = A, d[15] = m, d[16] = _, d[17] = s, d[18] = u) : (s = d[17], u = d[18]), (0, r.useEffect)(s, u), Q
  }, "useHatchPermissionsSettingsQuery", 0, function(e) {
    let r, a, n, i = (0, t.c)(9),
      {
        gatewayUrl: l
      } = (0, p.useHatchRpc)(),
      s = (0, v.useGatewayQueryContext)(),
      u = l ?? "",
      y = s.gatewayScopeKey ?? u;
    i[0] !== e || i[1] !== u ? (r = e && u.trim().length > 0, i[0] = e, i[1] = u, i[2] = r) : r = i[2];
    let d = r;
    return i[3] !== s || i[4] !== y ? (a = c.permissionsSettingsQuery.queryOptions({
      gatewayUrl: y
    }, s), i[3] = s, i[4] = y, i[5] = a) : a = i[5], i[6] !== d || i[7] !== a ? (n = {
      ...a,
      enabled: d,
      refetchOnMount: !0
    }, i[6] = d, i[7] = a, i[8] = n) : n = i[8], (0, o.useQuery)(n)
  }, "useResetHatchConnectorPermissions", 0, function() {
    let e, r, a, o, l, s, u = (0, t.c)(23),
      {
        gatewayUrl: d,
        gatewayScopeKey: g,
        vmName: v,
        sendRequest: w,
        isReady: f,
        ensureLiveConnection: T
      } = (0, p.useHatchRpc)(),
      S = (0, i.useQueryClient)(),
      A = d ?? "";
    u[0] !== g || u[1] !== A || u[2] !== v ? (e = g ?? (0, h.gatewayTargetKey)(A, v ?? null), u[0] = g, u[1] = A, u[2] = v, u[3] = e) : e = u[3];
    let K = e,
      Q = v ?? null;
    u[4] !== A || u[5] !== Q ? (r = (0, h.gatewayTargetKey)(A, Q), u[4] = A, u[5] = Q, u[6] = r) : r = u[6];
    let _ = r;
    return u[7] !== S || u[8] !== K ? (a = () => (0, y.captureApprovalTargetToken)(S, K), u[7] = S, u[8] = K, u[9] = a) : a = u[9], u[10] !== T || u[11] !== f || u[12] !== S || u[13] !== K || u[14] !== _ || u[15] !== w ? (o = async e => {
      let t = (0, y.captureApprovalTargetToken)(S, K);
      return f || await T(), E(S, t), (0, c.resetConnectorPermissions)(e, w, {
        expectedTargetKey: _
      })
    }, u[10] = T, u[11] = f, u[12] = S, u[13] = K, u[14] = _, u[15] = w, u[16] = o) : o = u[16], u[17] !== S ? (l = async (e, t, r) => {
      if (null == r || null == (0, y.advanceApprovalStateGeneration)(S, r)) return;
      let a = r.gatewayScopeKey;
      await Promise.all([c.permissionsDetailQuery.invalidate(S, {
        gatewayUrl: a
      }), S.refetchQueries({
        queryKey: c.activePermissionsQuery.queryKey({
          gatewayUrl: a
        }),
        type: "active"
      }), c.approvalsListQuery.invalidate(S, {
        gatewayUrl: a
      }), S.invalidateQueries({
        queryKey: m.settingsConnectorsQueryKeys.permissions(t.connector)
      })])
    }, u[17] = S, u[18] = l) : l = u[18], u[19] !== a || u[20] !== o || u[21] !== l ? (s = {
      onMutate: a,
      mutationFn: o,
      onSuccess: l
    }, u[19] = a, u[20] = o, u[21] = l, u[22] = s) : s = u[22], (0, n.useMutation)(s)
  }, "useResetHatchPermissions", 0, function() {
    let e, r, a, o, l, s, u = (0, t.c)(23),
      {
        gatewayUrl: d,
        gatewayScopeKey: g,
        vmName: m,
        sendRequest: v,
        isReady: w,
        ensureLiveConnection: f
      } = (0, p.useHatchRpc)(),
      T = (0, i.useQueryClient)(),
      S = d ?? "";
    u[0] !== g || u[1] !== S || u[2] !== m ? (e = g ?? (0, h.gatewayTargetKey)(S, m ?? null), u[0] = g, u[1] = S, u[2] = m, u[3] = e) : e = u[3];
    let A = e,
      K = m ?? null;
    u[4] !== S || u[5] !== K ? (r = (0, h.gatewayTargetKey)(S, K), u[4] = S, u[5] = K, u[6] = r) : r = u[6];
    let Q = r;
    return u[7] !== T || u[8] !== A ? (a = () => (0, y.captureApprovalTargetToken)(T, A), u[7] = T, u[8] = A, u[9] = a) : a = u[9], u[10] !== f || u[11] !== w || u[12] !== T || u[13] !== A || u[14] !== Q || u[15] !== v ? (o = async e => {
      let t = (0, y.captureApprovalTargetToken)(T, A);
      return w || await f(), E(T, t), (0, c.resetPermissions)(e, v, {
        expectedTargetKey: Q
      })
    }, u[10] = f, u[11] = w, u[12] = T, u[13] = A, u[14] = Q, u[15] = v, u[16] = o) : o = u[16], u[17] !== T ? (l = async (e, t, r) => {
      if (null == r || null == (0, y.advanceApprovalStateGeneration)(T, r)) return;
      let a = r.gatewayScopeKey;
      await Promise.all([c.permissionsDetailQuery.invalidate(T, {
        gatewayUrl: a
      }), T.refetchQueries({
        queryKey: c.activePermissionsQuery.queryKey({
          gatewayUrl: a
        }),
        type: "active"
      }), c.approvalsListQuery.invalidate(T, {
        gatewayUrl: a
      })])
    }, u[17] = T, u[18] = l) : l = u[18], u[19] !== a || u[20] !== o || u[21] !== l ? (s = {
      onMutate: a,
      mutationFn: o,
      onSuccess: l
    }, u[19] = a, u[20] = o, u[21] = l, u[22] = s) : s = u[22], (0, n.useMutation)(s)
  }, "useRevokeHatchPermission", 0, function() {
    let e, r, a, o, l, s, u = (0, t.c)(23),
      {
        gatewayUrl: d,
        gatewayScopeKey: g,
        vmName: m,
        sendRequest: v,
        isReady: w,
        ensureLiveConnection: f
      } = (0, p.useHatchRpc)(),
      T = (0, i.useQueryClient)(),
      S = d ?? "";
    u[0] !== g || u[1] !== S || u[2] !== m ? (e = g ?? (0, h.gatewayTargetKey)(S, m ?? null), u[0] = g, u[1] = S, u[2] = m, u[3] = e) : e = u[3];
    let A = e,
      K = m ?? null;
    u[4] !== S || u[5] !== K ? (r = (0, h.gatewayTargetKey)(S, K), u[4] = S, u[5] = K, u[6] = r) : r = u[6];
    let Q = r;
    return u[7] !== T || u[8] !== A ? (a = () => (0, y.captureApprovalTargetToken)(T, A), u[7] = T, u[8] = A, u[9] = a) : a = u[9], u[10] !== f || u[11] !== w || u[12] !== T || u[13] !== A || u[14] !== Q || u[15] !== v ? (o = async e => {
      let t = (0, y.captureApprovalTargetToken)(T, A);
      return w || await f(), E(T, t), (0, c.revokePermission)(e, v, {
        expectedTargetKey: Q
      })
    }, u[10] = f, u[11] = w, u[12] = T, u[13] = A, u[14] = Q, u[15] = v, u[16] = o) : o = u[16], u[17] !== T ? (l = async (e, t, r) => {
      if (null == r || null == (0, y.advanceApprovalStateGeneration)(T, r)) return;
      let a = r.gatewayScopeKey;
      await Promise.all([c.permissionsDetailQuery.invalidate(T, {
        gatewayUrl: a
      }), T.refetchQueries({
        queryKey: c.activePermissionsQuery.queryKey({
          gatewayUrl: a
        }),
        type: "active"
      }), c.approvalsListQuery.invalidate(T, {
        gatewayUrl: a
      })])
    }, u[17] = T, u[18] = l) : l = u[18], u[19] !== a || u[20] !== o || u[21] !== l ? (s = {
      onMutate: a,
      mutationFn: o,
      onSuccess: l
    }, u[19] = a, u[20] = o, u[21] = l, u[22] = s) : s = u[22], (0, n.useMutation)(s)
  }, "useSetHatchConnectorPermissions", 0, function() {
    let e, r, a, o, l, s, u = (0, t.c)(23),
      {
        gatewayUrl: d,
        gatewayScopeKey: g,
        vmName: v,
        sendRequest: w,
        isReady: f,
        ensureLiveConnection: T
      } = (0, p.useHatchRpc)(),
      S = (0, i.useQueryClient)(),
      A = d ?? "";
    u[0] !== g || u[1] !== A || u[2] !== v ? (e = g ?? (0, h.gatewayTargetKey)(A, v ?? null), u[0] = g, u[1] = A, u[2] = v, u[3] = e) : e = u[3];
    let K = e,
      Q = v ?? null;
    u[4] !== A || u[5] !== Q ? (r = (0, h.gatewayTargetKey)(A, Q), u[4] = A, u[5] = Q, u[6] = r) : r = u[6];
    let _ = r;
    return u[7] !== S || u[8] !== K ? (a = () => (0, y.captureApprovalTargetToken)(S, K), u[7] = S, u[8] = K, u[9] = a) : a = u[9], u[10] !== T || u[11] !== f || u[12] !== S || u[13] !== K || u[14] !== _ || u[15] !== w ? (o = async e => {
      let t = (0, y.captureApprovalTargetToken)(S, K);
      return f || await T(), E(S, t), (0, c.patchConnectorPermissions)(e, w, {
        expectedTargetKey: _
      })
    }, u[10] = T, u[11] = f, u[12] = S, u[13] = K, u[14] = _, u[15] = w, u[16] = o) : o = u[16], u[17] !== S ? (l = async (e, t, r) => {
      if (null == r || null == (0, y.advanceApprovalStateGeneration)(S, r)) return;
      let a = r.gatewayScopeKey;
      await Promise.all([c.permissionsDetailQuery.invalidate(S, {
        gatewayUrl: a
      }), S.refetchQueries({
        queryKey: c.activePermissionsQuery.queryKey({
          gatewayUrl: a
        }),
        type: "active"
      }), c.approvalsListQuery.invalidate(S, {
        gatewayUrl: a
      }), S.invalidateQueries({
        queryKey: m.settingsConnectorsQueryKeys.permissions(t.connector)
      })])
    }, u[17] = S, u[18] = l) : l = u[18], u[19] !== a || u[20] !== o || u[21] !== l ? (s = {
      onMutate: a,
      mutationFn: o,
      onSuccess: l
    }, u[19] = a, u[20] = o, u[21] = l, u[22] = s) : s = u[22], (0, n.useMutation)(s)
  }, "useSetHatchHitlMode", 0, function() {
    let e, r, a, o, l, s, u = (0, t.c)(23),
      {
        gatewayUrl: d,
        gatewayScopeKey: g,
        vmName: m,
        sendRequest: v,
        isReady: w,
        ensureLiveConnection: f
      } = (0, p.useHatchRpc)(),
      T = (0, i.useQueryClient)(),
      S = d ?? "";
    u[0] !== g || u[1] !== S || u[2] !== m ? (e = g ?? (0, h.gatewayTargetKey)(S, m ?? null), u[0] = g, u[1] = S, u[2] = m, u[3] = e) : e = u[3];
    let A = e,
      K = m ?? null;
    u[4] !== S || u[5] !== K ? (r = (0, h.gatewayTargetKey)(S, K), u[4] = S, u[5] = K, u[6] = r) : r = u[6];
    let Q = r;
    return u[7] !== T || u[8] !== A ? (a = () => (0, y.captureApprovalTargetToken)(T, A), u[7] = T, u[8] = A, u[9] = a) : a = u[9], u[10] !== f || u[11] !== w || u[12] !== T || u[13] !== A || u[14] !== Q || u[15] !== v ? (o = async e => {
      let t = (0, y.captureApprovalTargetToken)(T, A);
      return w || await f(), E(T, t), (0, c.patchHitlMode)(e, v, {
        expectedTargetKey: Q
      })
    }, u[10] = f, u[11] = w, u[12] = T, u[13] = A, u[14] = Q, u[15] = v, u[16] = o) : o = u[16], u[17] !== T ? (l = async (e, t, r) => {
      if (null == r || null == (0, y.advanceApprovalStateGeneration)(T, r)) return;
      let a = r.gatewayScopeKey;
      await Promise.all([c.permissionsDetailQuery.invalidate(T, {
        gatewayUrl: a
      }), T.refetchQueries({
        queryKey: c.activePermissionsQuery.queryKey({
          gatewayUrl: a
        }),
        type: "active"
      }), c.approvalsListQuery.invalidate(T, {
        gatewayUrl: a
      })])
    }, u[17] = T, u[18] = l) : l = u[18], u[19] !== a || u[20] !== o || u[21] !== l ? (s = {
      onMutate: a,
      mutationFn: o,
      onSuccess: l
    }, u[19] = a, u[20] = o, u[21] = l, u[22] = s) : s = u[22], (0, n.useMutation)(s)
  }, "useSetHatchMitmMode", 0, function() {
    let e, r, a, o, l, s, u = (0, t.c)(23),
      {
        gatewayUrl: d,
        gatewayScopeKey: g,
        vmName: m,
        sendRequest: v,
        isReady: w,
        ensureLiveConnection: f
      } = (0, p.useHatchRpc)(),
      T = (0, i.useQueryClient)(),
      S = d ?? "";
    u[0] !== g || u[1] !== S || u[2] !== m ? (e = g ?? (0, h.gatewayTargetKey)(S, m ?? null), u[0] = g, u[1] = S, u[2] = m, u[3] = e) : e = u[3];
    let A = e,
      K = m ?? null;
    u[4] !== S || u[5] !== K ? (r = (0, h.gatewayTargetKey)(S, K), u[4] = S, u[5] = K, u[6] = r) : r = u[6];
    let Q = r;
    return u[7] !== T || u[8] !== A ? (a = () => (0, y.captureApprovalTargetToken)(T, A), u[7] = T, u[8] = A, u[9] = a) : a = u[9], u[10] !== f || u[11] !== w || u[12] !== T || u[13] !== A || u[14] !== Q || u[15] !== v ? (o = async e => {
      let t = (0, y.captureApprovalTargetToken)(T, A);
      return w || await f(), E(T, t), (0, c.patchMitmMode)(e, v, {
        expectedTargetKey: Q
      })
    }, u[10] = f, u[11] = w, u[12] = T, u[13] = A, u[14] = Q, u[15] = v, u[16] = o) : o = u[16], u[17] !== T ? (l = async (e, t, r) => {
      if (null == r || !(0, y.isApprovalTargetTokenCurrent)(T, r)) return;
      let a = r.gatewayScopeKey;
      await Promise.all([c.permissionsDetailQuery.invalidate(T, {
        gatewayUrl: a
      }), T.refetchQueries({
        queryKey: c.activePermissionsQuery.queryKey({
          gatewayUrl: a
        }),
        type: "active"
      })])
    }, u[17] = T, u[18] = l) : l = u[18], u[19] !== a || u[20] !== o || u[21] !== l ? (s = {
      onMutate: a,
      mutationFn: o,
      onSuccess: l
    }, u[19] = a, u[20] = o, u[21] = l, u[22] = s) : s = u[22], (0, n.useMutation)(s)
  }, "useSetHatchPermissionDefaults", 0, function() {
    let e, r, a, o, l, s, u = (0, t.c)(23),
      {
        gatewayUrl: d,
        gatewayScopeKey: g,
        vmName: v,
        sendRequest: w,
        isReady: f,
        ensureLiveConnection: S
      } = (0, p.useHatchRpc)(),
      A = (0, i.useQueryClient)(),
      K = d ?? "";
    u[0] !== g || u[1] !== K || u[2] !== v ? (e = g ?? (0, h.gatewayTargetKey)(K, v ?? null), u[0] = g, u[1] = K, u[2] = v, u[3] = e) : e = u[3];
    let Q = e,
      _ = v ?? null;
    u[4] !== K || u[5] !== _ ? (r = (0, h.gatewayTargetKey)(K, _), u[4] = K, u[5] = _, u[6] = r) : r = u[6];
    let k = r;
    return u[7] !== A || u[8] !== Q ? (a = () => (0, y.captureApprovalTargetToken)(A, Q), u[7] = A, u[8] = Q, u[9] = a) : a = u[9], u[10] !== S || u[11] !== f || u[12] !== A || u[13] !== Q || u[14] !== k || u[15] !== w ? (o = async e => {
      let t = (0, y.captureApprovalTargetToken)(A, Q);
      return f || await S(), E(A, t), (0, c.patchPermissionDefaults)(e, w, {
        expectedTargetKey: k
      })
    }, u[10] = S, u[11] = f, u[12] = A, u[13] = Q, u[14] = k, u[15] = w, u[16] = o) : o = u[16], u[17] !== A ? (l = async (e, t, r) => {
      if (null == r || !(0, y.isApprovalTargetTokenCurrent)(A, r)) return;
      let a = r.gatewayScopeKey,
        n = !1;
      c.permissionsSettingsQuery.setData(A, {
        gatewayUrl: a
      }, r => (null == e.protocols && null != t.protocols && (r?.protocols?.length ?? 0) > 0 && (n = !0), {
        ...e,
        defaultContent: e.defaultContent ?? r?.defaultContent ?? null,
        protocolsHeading: e.protocolsHeading ?? r?.protocolsHeading ?? null,
        protocols: e.protocols ?? r?.protocols?.map(e => {
          let r = t.protocols?.[e.key];
          return null != r ? {
            ...e,
            mode: r
          } : e
        }) ?? null
      })), n && (I.retainForBugReport("warn", "Protocol permission patch echo omitted rows"), (0, T.captureHatchMessage)(T.HATCH_SENTRY_SURFACES.SETTINGS_CONNECTORS, "Protocol permission patch echo omitted rows", {
        level: "warning",
        tags: {
          reason_code: "patch_echo_missing_rows"
        }
      })), await Promise.all([A.invalidateQueries({
        queryKey: c.permissionsDetailQuery.queryKey({
          gatewayUrl: a
        }),
        exact: !0,
        refetchType: "none"
      }), A.invalidateQueries({
        queryKey: m.settingsConnectorsQueryKeys.permissionsAll,
        refetchType: "none"
      })])
    }, u[17] = A, u[18] = l) : l = u[18], u[19] !== a || u[20] !== o || u[21] !== l ? (s = {
      throwOnError: !1,
      onMutate: a,
      mutationFn: o,
      onSuccess: l
    }, u[19] = a, u[20] = o, u[21] = l, u[22] = s) : s = u[22], (0, n.useMutation)(s)
  }, "useSetHatchSniRejectionMode", 0, function() {
    let e, r, a, o, l, s, u = (0, t.c)(23),
      {
        gatewayUrl: d,
        gatewayScopeKey: g,
        vmName: m,
        sendRequest: v,
        isReady: w,
        ensureLiveConnection: f
      } = (0, p.useHatchRpc)(),
      T = (0, i.useQueryClient)(),
      S = d ?? "";
    u[0] !== g || u[1] !== S || u[2] !== m ? (e = g ?? (0, h.gatewayTargetKey)(S, m ?? null), u[0] = g, u[1] = S, u[2] = m, u[3] = e) : e = u[3];
    let A = e,
      K = m ?? null;
    u[4] !== S || u[5] !== K ? (r = (0, h.gatewayTargetKey)(S, K), u[4] = S, u[5] = K, u[6] = r) : r = u[6];
    let Q = r;
    return u[7] !== T || u[8] !== A ? (a = () => (0, y.captureApprovalTargetToken)(T, A), u[7] = T, u[8] = A, u[9] = a) : a = u[9], u[10] !== f || u[11] !== w || u[12] !== T || u[13] !== A || u[14] !== Q || u[15] !== v ? (o = async e => {
      let t = (0, y.captureApprovalTargetToken)(T, A);
      return w || await f(), E(T, t), (0, c.patchSniRejectionMode)(e, v, {
        expectedTargetKey: Q
      })
    }, u[10] = f, u[11] = w, u[12] = T, u[13] = A, u[14] = Q, u[15] = v, u[16] = o) : o = u[16], u[17] !== T ? (l = async (e, t, r) => {
      if (null == r || !(0, y.isApprovalTargetTokenCurrent)(T, r)) return;
      let a = r.gatewayScopeKey;
      await Promise.all([c.permissionsDetailQuery.invalidate(T, {
        gatewayUrl: a
      }), T.refetchQueries({
        queryKey: c.activePermissionsQuery.queryKey({
          gatewayUrl: a
        }),
        type: "active"
      })])
    }, u[17] = T, u[18] = l) : l = u[18], u[19] !== a || u[20] !== o || u[21] !== l ? (s = {
      onMutate: a,
      mutationFn: o,
      onSuccess: l
    }, u[19] = a, u[20] = o, u[21] = l, u[22] = s) : s = u[22], (0, n.useMutation)(s)
  }, "useSetHatchTproxyMode", 0, function() {
    let e, r, a, o, l, s, u = (0, t.c)(23),
      {
        gatewayUrl: d,
        gatewayScopeKey: g,
        vmName: m,
        sendRequest: v,
        isReady: w,
        ensureLiveConnection: f
      } = (0, p.useHatchRpc)(),
      T = (0, i.useQueryClient)(),
      S = d ?? "";
    u[0] !== g || u[1] !== S || u[2] !== m ? (e = g ?? (0, h.gatewayTargetKey)(S, m ?? null), u[0] = g, u[1] = S, u[2] = m, u[3] = e) : e = u[3];
    let A = e,
      K = m ?? null;
    u[4] !== S || u[5] !== K ? (r = (0, h.gatewayTargetKey)(S, K), u[4] = S, u[5] = K, u[6] = r) : r = u[6];
    let Q = r;
    return u[7] !== T || u[8] !== A ? (a = () => (0, y.captureApprovalTargetToken)(T, A), u[7] = T, u[8] = A, u[9] = a) : a = u[9], u[10] !== f || u[11] !== w || u[12] !== T || u[13] !== A || u[14] !== Q || u[15] !== v ? (o = async e => {
      let t = (0, y.captureApprovalTargetToken)(T, A);
      return w || await f(), E(T, t), (0, c.patchTproxyMode)(e, v, {
        expectedTargetKey: Q
      })
    }, u[10] = f, u[11] = w, u[12] = T, u[13] = A, u[14] = Q, u[15] = v, u[16] = o) : o = u[16], u[17] !== T ? (l = async (e, t, r) => {
      if (null == r || !(0, y.isApprovalTargetTokenCurrent)(T, r)) return;
      let a = r.gatewayScopeKey;
      await Promise.all([c.permissionsDetailQuery.invalidate(T, {
        gatewayUrl: a
      }), T.refetchQueries({
        queryKey: c.activePermissionsQuery.queryKey({
          gatewayUrl: a
        }),
        type: "active"
      })])
    }, u[17] = T, u[18] = l) : l = u[18], u[19] !== a || u[20] !== o || u[21] !== l ? (s = {
      onMutate: a,
      mutationFn: o,
      onSuccess: l
    }, u[19] = a, u[20] = o, u[21] = l, u[22] = s) : s = u[22], (0, n.useMutation)(s)
  }, "useSetWalletSelection", 0, function() {
    let e, r, a, o, l, s, u, d, g = (0, t.c)(31),
      {
        gatewayUrl: m,
        gatewayScopeKey: v,
        vmName: w,
        sendRequest: f,
        isReady: T,
        ensureLiveConnection: S
      } = (0, p.useHatchRpc)(),
      A = (0, i.useQueryClient)(),
      Q = m ?? "";
    g[0] !== v || g[1] !== Q || g[2] !== w ? (e = v ?? (0, h.gatewayTargetKey)(Q, w ?? null), g[0] = v, g[1] = Q, g[2] = w, g[3] = e) : e = g[3];
    let _ = e,
      C = w ?? null;
    g[4] !== Q || g[5] !== C ? (r = (0, h.gatewayTargetKey)(Q, C), g[4] = Q, g[5] = C, g[6] = r) : r = g[6];
    let P = r;
    return g[7] !== A || g[8] !== _ || g[9] !== P ? (a = e => ({
      operationKey: M(_, e.approvalId),
      requestGatewayScopeKey: _,
      requestGatewayTargetKey: P,
      requestTargetToken: (0, y.captureApprovalTargetToken)(A, _)
    }), g[7] = A, g[8] = _, g[9] = P, g[10] = a) : a = g[10], g[11] !== S || g[12] !== T || g[13] !== A || g[14] !== _ || g[15] !== P || g[16] !== Q || g[17] !== f ? (o = async e => {
      if (0 === Q.length || 0 === _.length) throw Error("Gateway URL not available yet");
      let t = M(_, e.approvalId);
      if (x.has(t)) throw new O(e.approvalId);
      x.add(t);
      let r = (0, y.captureApprovalTargetToken)(A, _);
      return T || await S(), E(A, r), {
        result: await k(e, f, {
          expectedTargetKey: P
        }),
        requestGatewayScopeKey: _,
        requestGatewayTargetKey: P,
        requestTargetToken: r
      }
    }, g[11] = S, g[12] = T, g[13] = A, g[14] = _, g[15] = P, g[16] = Q, g[17] = f, g[18] = o) : o = g[18], g[19] !== A || g[20] !== f ? (l = async (e, t) => {
      let {
        requestGatewayScopeKey: r,
        requestGatewayTargetKey: a,
        requestTargetToken: n
      } = e;
      if (!(0, y.isApprovalTargetTokenCurrent)(A, n)) {
        let e = new N(t.approvalId);
        throw I.retainForBugReport("warn", "Wallet payment selection changed gateways before reconciliation"), e
      }
      if ((0, y.advanceApprovalStateGeneration)(A, n), !await L(A, f, r, a, t, !0, () => (0, y.isApprovalTargetTokenCurrent)(A, n))) throw new N(t.approvalId);
      await c.approvalsDetailQuery.invalidate(A, {
        gatewayUrl: r,
        approvalId: t.approvalId
      })
    }, s = async (e, t, r) => {
      if (!(e instanceof K)) return;
      let a = r?.requestGatewayScopeKey,
        n = r?.requestGatewayTargetKey,
        o = r?.requestTargetToken;
      null != a && 0 !== a.length && null != n && 0 !== n.length && null != o && (0, y.isApprovalTargetTokenCurrent)(A, o) && ((0, y.advanceApprovalStateGeneration)(A, o), await L(A, f, a, n, t, !1, () => (0, y.isApprovalTargetTokenCurrent)(A, o)), await c.approvalsDetailQuery.invalidate(A, {
        gatewayUrl: a,
        approvalId: t.approvalId
      }))
    }, g[19] = A, g[20] = f, g[21] = l, g[22] = s) : (l = g[21], s = g[22]), g[23] !== _ ? (u = (e, t, r, a) => {
      t instanceof O || x.delete(a?.operationKey ?? M(_, r.approvalId))
    }, g[23] = _, g[24] = u) : u = g[24], g[25] !== a || g[26] !== o || g[27] !== l || g[28] !== s || g[29] !== u ? (d = {
      onMutate: a,
      mutationFn: o,
      onSuccess: l,
      onError: s,
      onSettled: u
    }, g[25] = a, g[26] = o, g[27] = l, g[28] = s, g[29] = u, g[30] = d) : d = g[30], (0, n.useMutation)(d)
  }, "useUpdateHatchActivePermission", 0, function() {
    let e, r, a, o, l, s, u = (0, t.c)(23),
      {
        gatewayUrl: d,
        gatewayScopeKey: g,
        vmName: m,
        sendRequest: v,
        isReady: w,
        ensureLiveConnection: f
      } = (0, p.useHatchRpc)(),
      T = (0, i.useQueryClient)(),
      S = d ?? "";
    u[0] !== g || u[1] !== S || u[2] !== m ? (e = g ?? (0, h.gatewayTargetKey)(S, m ?? null), u[0] = g, u[1] = S, u[2] = m, u[3] = e) : e = u[3];
    let A = e,
      K = m ?? null;
    u[4] !== S || u[5] !== K ? (r = (0, h.gatewayTargetKey)(S, K), u[4] = S, u[5] = K, u[6] = r) : r = u[6];
    let Q = r;
    return u[7] !== T || u[8] !== A ? (a = () => (0, y.captureApprovalTargetToken)(T, A), u[7] = T, u[8] = A, u[9] = a) : a = u[9], u[10] !== f || u[11] !== w || u[12] !== T || u[13] !== A || u[14] !== Q || u[15] !== v ? (o = async e => {
      let t = (0, y.captureApprovalTargetToken)(T, A);
      return w || await f(), E(T, t), (0, c.updateActivePermission)(e, v, {
        expectedTargetKey: Q
      })
    }, u[10] = f, u[11] = w, u[12] = T, u[13] = A, u[14] = Q, u[15] = v, u[16] = o) : o = u[16], u[17] !== T ? (l = async (e, t, r) => {
      if (null == r || null == (0, y.advanceApprovalStateGeneration)(T, r)) return;
      let a = r.gatewayScopeKey;
      await Promise.all([c.permissionsDetailQuery.invalidate(T, {
        gatewayUrl: a
      }), T.refetchQueries({
        queryKey: c.activePermissionsQuery.queryKey({
          gatewayUrl: a
        }),
        type: "active"
      }), c.approvalsListQuery.invalidate(T, {
        gatewayUrl: a
      })])
    }, u[17] = T, u[18] = l) : l = u[18], u[19] !== a || u[20] !== o || u[21] !== l ? (s = {
      onMutate: a,
      mutationFn: o,
      onSuccess: l
    }, u[19] = a, u[20] = o, u[21] = l, u[22] = s) : s = u[22], (0, n.useMutation)(s)
  }], 65372)
}]);

//# debugId=157f8ba9-ae79-0577-0cb9-b50d535fcaa2
//# sourceMappingURL=1oqh-n63117zf.js.map