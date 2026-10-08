;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "ba9eb468-2f26-03df-c209-2feea6c952bd")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 474493, e => {
  "use strict";
  e.s(["ectoEaseIn", 0, [.88, 0, 0, 1], "springTransition", 0, {
    snappy: {
      type: "spring",
      stiffness: 1e3,
      damping: 70
    },
    fast: {
      type: "spring",
      stiffness: 1500,
      damping: 80
    }
  }])
}, 999127, e => {
  "use strict";
  var t = e.i(722099),
    l = e.i(519172),
    n = e.i(763971),
    r = e.i(302230),
    i = e.i(438451),
    s = e.i(397355),
    C = e.i(384784),
    u = e.i(149505),
    o = e.i(508180);

  function a(e, t) {
    return "subgoal" === e ? `I want to create a sub-goal under "${t}" about ` : `Discuss the goal "${t}"`
  }
  e.s(["buildGoalThreadSeedPrefill", 0, a, "useSeedComposerForFreshGoalThread", 0, function(e) {
    let c, d, h, f, p, g, m, v, L = (0, t.c)(23),
      x = (0, n.useSearchParams)();
    L[0] !== x ? (c = x.has(r.HATCH_PROMPT_QUERY_PARAM) || x.has(r.HATCH_PROMPT_ID_QUERY_PARAM), L[0] = x, L[1] = c) : c = L[1];
    let M = c,
      j = (0, C.useChatHistoryLoaded)(),
      _ = (0, C.useChatMessageIds)(),
      Z = (0, u.useComposerInputValue)(),
      H = e?.kind === "thread" ? e.sessionId : null;
    e: {
      let t;
      if (e?.kind !== "thread") {
        d = null;
        break e
      }
      L[2] !== x ? (t = x.get(i.HATCH_THREAD_GOAL_ID_PARAM)?.trim() ?? "", L[2] = x, L[3] = t) : t = L[3];
      let l = t;d = l.length > 0 ? l : null
    }
    let S = d,
      y = null != H && null != S && !M,
      {
        data: b,
        isPending: R
      } = (0, s.useHatchGoalsQuery)(y),
      {
        data: D,
        isPending: w
      } = (0, s.useHatchTrackingGoalsQuery)(y);
    L[4] !== b ? (h = b ?? [], L[4] = b, L[5] = h) : h = L[5], L[6] !== D ? (f = D ?? [], L[6] = D, L[7] = f) : f = L[7], L[8] !== h || L[9] !== f ? (p = [...h, ...f], L[8] = h, L[9] = f, L[10] = p) : p = L[10];
    let A = p;
    t: {
      if (e?.kind !== "thread") {
        g = "discuss";
        break t
      }
      g = "subgoal" === (x.get(i.HATCH_THREAD_GOAL_INTENT_PARAM)?.trim().toLowerCase() ?? "") ? "subgoal" : "discuss"
    }
    let T = g,
      P = (0, l.useRef)(null),
      G = (0, l.useRef)(null);
    L[11] !== H || L[12] !== S || L[13] !== Z || L[14] !== T || L[15] !== A || L[16] !== M || L[17] !== j || L[18] !== _.length || L[19] !== w || L[20] !== R ? (m = () => {
      if (null == H || null == S) return;
      let e = `${H}::${S}::${T}`;
      if (!j) {
        G.current = e;
        return
      }
      if (M || G.current !== e || P.current === e) return;
      if (_.length > 0 || Z.length > 0) {
        P.current = e;
        return
      }
      if (R || w) return;
      let t = function e(t, l) {
          for (let n of t) {
            if (n.id === l) return n;
            let t = e(n.subGoals, l);
            if (null != t) return t
          }
          return null
        }(A, S),
        l = t?.title?.trim();
      if (null == l || 0 === l.length) {
        P.current = e;
        return
      }
      o.setComposerInputValue(a(T, l)), P.current = e
    }, v = [H, S, Z, T, A, M, j, _.length, w, R], L[11] = H, L[12] = S, L[13] = Z, L[14] = T, L[15] = A, L[16] = M, L[17] = j, L[18] = _.length, L[19] = w, L[20] = R, L[21] = m, L[22] = v) : (m = L[21], v = L[22]), (0, l.useEffect)(m, v)
  }])
}, 591831, e => {
  "use strict";
  var t = e.i(722099),
    l = e.i(519172),
    n = e.i(513637);
  e.s(["useHatchListDragReorder", 0, function(e) {
    let r, i, s, C, u, o, a, c, d, h, f, p, g, m, v, L, x, M, j, _, Z = (0, t.c)(61),
      {
        dragDataType: H,
        itemIds: S,
        disabled: y,
        intoBandRatio: b,
        springLoadDelayMs: R,
        canDropInto: D,
        resolveDrop: w,
        resolveEndDrop: A,
        onDrop: T,
        onDragStart: P
      } = e,
      G = void 0 !== y && y,
      V = void 0 === b ? 0 : b,
      I = void 0 === R ? 0 : R,
      E = (0, l.useRef)(null),
      [B, $] = (0, l.useState)(null),
      [N, O] = (0, l.useState)(null),
      [F, k] = (0, l.useState)(!1),
      [U, Y] = (0, l.useState)(null),
      Q = (0, l.useRef)(null);
    Z[0] === Symbol.for("react.memo_cache_sentinel") ? (r = () => {
      null != Q.current && (clearTimeout(Q.current), Q.current = null)
    }, Z[0] = r) : r = Z[0];
    let z = r;
    Z[1] === Symbol.for("react.memo_cache_sentinel") ? (i = () => {
      z(), E.current = null, $(null), O(null), k(!1), Y(null)
    }, Z[1] = i) : i = Z[1];
    let J = i;
    Z[2] !== G || Z[3] !== B || Z[4] !== S ? (s = () => {
      null != B && (G || !S.includes(B)) && J()
    }, C = [J, G, B, S], Z[2] = G, Z[3] = B, Z[4] = S, Z[5] = s, Z[6] = C) : (s = Z[5], C = Z[6]), (0, l.useEffect)(s, C), Z[7] === Symbol.for("react.memo_cache_sentinel") ? (u = () => z, o = [z], Z[7] = u, Z[8] = o) : (u = Z[7], o = Z[8]), (0, l.useEffect)(u, o), Z[9] !== H ? (a = function(e) {
      return e.dataTransfer.getData(H) || E.current
    }, Z[9] = H, Z[10] = a) : a = Z[10];
    let K = a;
    Z[11] !== D || Z[12] !== V ? (c = function(e, t, l) {
      let r = (0, n.resolveDropZone)(e, V);
      return "into" === r && D?.(t, l) === !1 ? (0, n.resolveDropZone)(e, 0) : r
    }, Z[11] = D, Z[12] = V, Z[13] = c) : c = Z[13];
    let q = c;
    Z[14] !== I || Z[15] !== U ? (d = function(e, t) {
      I <= 0 || "into" !== t || U === e ? z() : null == Q.current && (Q.current = setTimeout(() => {
        Q.current = null, Y(e)
      }, I))
    }, Z[14] = I, Z[15] = U, Z[16] = d) : d = Z[16];
    let W = d;
    Z[17] !== G || Z[18] !== H || Z[19] !== S || Z[20] !== P ? (h = function(e, t) {
      G || !S.includes(t) ? e.preventDefault() : (e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData(H, t), E.current = t, $(t), O(null), k(!1), Y(null), P?.(t))
    }, Z[17] = G, Z[18] = H, Z[19] = S, Z[20] = P, Z[21] = h) : h = Z[21];
    let X = h;
    Z[22] !== N || Z[23] !== K || Z[24] !== w || Z[25] !== q || Z[26] !== W ? (f = function(e, t) {
      let l = K(e);
      if (null == l) return;
      e.stopPropagation(), k(!1);
      let n = q(e, l, t);
      if (null == w(l, t, n)) {
        z(), O(e => e?.itemId === t ? null : e);
        return
      }
      e.preventDefault(), e.dataTransfer.dropEffect = "move", (N?.itemId !== t || N.zone !== n) && z(), W(t, n), O(e => e?.itemId === t && e.zone === n ? e : {
        itemId: t,
        zone: n
      })
    }, Z[22] = N, Z[23] = K, Z[24] = w, Z[25] = q, Z[26] = W, Z[27] = f) : f = Z[27];
    let ee = f;
    Z[28] === Symbol.for("react.memo_cache_sentinel") ? (p = function(e, t) {
      let l = e.relatedTarget;
      l instanceof Node && e.currentTarget.contains(l) || (z(), O(e => e?.itemId === t ? null : e))
    }, Z[28] = p) : p = Z[28];
    let et = p;
    Z[29] !== T || Z[30] !== K || Z[31] !== w || Z[32] !== q ? (g = function(e, t) {
      let l = K(e);
      if (null == l) return void J();
      e.stopPropagation();
      let n = w(l, t, q(e, l, t));
      null == n ? J() : (e.preventDefault(), J(), T(n))
    }, Z[29] = T, Z[30] = K, Z[31] = w, Z[32] = q, Z[33] = g) : g = Z[33];
    let el = g;
    Z[34] !== K || Z[35] !== A ? (m = function(e) {
      let t = K(e);
      return null == t || null == A ? null : A(t)
    }, Z[34] = K, Z[35] = A, Z[36] = m) : m = Z[36];
    let en = m;
    Z[37] !== en ? (v = function(e) {
      null == en(e) ? k(!1) : (e.preventDefault(), e.dataTransfer.dropEffect = "move", z(), O(null), k(!0))
    }, Z[37] = en, Z[38] = v) : v = Z[38];
    let er = v;
    Z[39] === Symbol.for("react.memo_cache_sentinel") ? (L = function(e) {
      let t = e.relatedTarget;
      t instanceof Node && e.currentTarget.contains(t) || k(!1)
    }, Z[39] = L) : L = Z[39];
    let ei = L;
    Z[40] !== T || Z[41] !== en ? (x = function(e) {
      let t = en(e);
      null == t ? J() : (e.preventDefault(), e.stopPropagation(), J(), T(t))
    }, Z[40] = T, Z[41] = en, Z[42] = x) : x = Z[42];
    let es = x;
    Z[43] !== N || Z[44] !== G || Z[45] !== B || Z[46] !== ee || Z[47] !== X || Z[48] !== el || Z[49] !== S ? (M = function(e) {
      return {
        draggable: !G && S.length > 1 && S.includes(e),
        isDragging: B === e,
        dropZone: N?.itemId === e ? N.zone : null,
        onDragStart: t => X(t, e),
        onDragEnd: J,
        onDragOver: t => ee(t, e),
        onDragLeave: t => et(t, e),
        onDrop: t => el(t, e)
      }
    }, Z[43] = N, Z[44] = G, Z[45] = B, Z[46] = ee, Z[47] = X, Z[48] = el, Z[49] = S, Z[50] = M) : M = Z[50];
    let eC = M,
      eu = null != B;
    return Z[51] !== er || Z[52] !== es ? (j = {
      onDragOver: er,
      onDragLeave: ei,
      onDrop: es
    }, Z[51] = er, Z[52] = es, Z[53] = j) : j = Z[53], Z[54] !== B || Z[55] !== eC || Z[56] !== F || Z[57] !== U || Z[58] !== eu || Z[59] !== j ? (_ = {
      getRowDragProps: eC,
      draggedItemId: B,
      isDragging: eu,
      springLoadedItemId: U,
      isEndZoneActive: F,
      endZoneProps: j
    }, Z[54] = B, Z[55] = eC, Z[56] = F, Z[57] = U, Z[58] = eu, Z[59] = j, Z[60] = _) : _ = Z[60], _
  }])
}, 935523, e => {
  "use strict";
  var t = e.i(285442);
  let l = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function n(e) {
    for (let t of [e.effectiveAt, e.createdAt]) {
      if (null == t) continue;
      let e = Date.parse(t);
      if (!Number.isNaN(e)) return e
    }
    return -1 / 0
  }

  function r(e) {
    let t = new Date(e);
    return t.setHours(0, 0, 0, 0), t.getTime()
  }

  function i(e) {
    for (let t of [e.lastEventAt, e.createdAt]) {
      if (null == t) continue;
      let e = Date.parse(t);
      if (!Number.isNaN(e)) return e
    }
    return -1 / 0
  }

  function s(e) {
    for (let t of [e.lastEventAt, e.createdAt]) {
      if (null == t) continue;
      let e = Date.parse(t);
      if (!Number.isNaN(e)) return e
    }
    return -1 / 0
  }
  e.s(["flattenAllGoals", 0, function(e) {
    let t = [],
      l = (e, n) => {
        for (let r of e) t.push({
          goal: r,
          ancestorIds: n
        }), r.subGoals.length > 0 && l(r.subGoals, [...n, r.id])
      };
    return l(e, []), t
  }, "groupCompletedGoalEntriesByMonth", 0, function(e, l = []) {
    let n = new Map,
      r = [];
    for (let t of e) {
      let e = i(t.goal);
      if (e === -1 / 0) {
        r.push(t);
        continue
      }
      let l = new Date(e),
        s = `${l.getFullYear()}-${(l.getMonth()+1).toString().padStart(2,"0")}`,
        C = n.get(s);
      C ? (C.entries.push(t), e > C.ts && (C.ts = e)) : n.set(s, {
        ts: e,
        entries: [t]
      })
    }
    let s = Array.from(n.entries()).sort(([, e], [, t]) => t.ts - e.ts).map(([e, n]) => ({
      key: e,
      label: (0, t.formatMonthYear)(n.ts, l),
      entries: n.entries.slice().sort((e, t) => i(t.goal) - i(e.goal))
    }));
    return r.length > 0 && s.push({
      key: "undated",
      label: "—",
      entries: r
    }), s
  }, "groupGoalUpdatesByDay", 0, function(e, t = new Date) {
    let i = t.getTime(),
      s = new Map,
      C = [];
    for (let t of e) {
      let e = n(t);
      if (e === -1 / 0) {
        C.push(t);
        continue
      }
      let l = function(e) {
          let t = new Date(e),
            l = t.getFullYear().toString().padStart(4, "0"),
            n = (t.getMonth() + 1).toString().padStart(2, "0"),
            r = t.getDate().toString().padStart(2, "0");
          return `${l}-${n}-${r}`
        }(e),
        r = s.get(l);
      r ? (r.updates.push(t), e > r.ts && (r.ts = e)) : s.set(l, {
        ts: e,
        updates: [t]
      })
    }
    let u = Array.from(s.entries()).sort(([, e], [, t]) => t.ts - e.ts).map(([e, t]) => ({
      key: e,
      label: function(e, t) {
        let n = r(t),
          i = r(e);
        if (i === n) return "Today";
        if (i === n - 864e5) return "Yesterday";
        let s = new Date(e),
          C = l[s.getMonth()],
          u = s.getDate();
        return s.getFullYear() === new Date(t).getFullYear() ? `${C} ${u}` : `${C} ${u}, ${s.getFullYear()}`
      }(t.ts, i),
      updates: t.updates.slice().sort((e, t) => n(t) - n(e))
    }));
    return C.length > 0 && u.push({
      key: "undated",
      label: "—",
      updates: C
    }), u
  }, "limitCompletedGroups", 0, function(e, t) {
    let l = [],
      n = t;
    for (let t of e) {
      if (n <= 0) break;
      let e = t.entries.slice(0, n);
      0 !== e.length && (n -= e.length, l.push({
        ...t,
        entries: e
      }))
    }
    return l
  }, "sortGoalsByRecency", 0, function e(t) {
    return [...t].map(t => 0 === t.subGoals.length ? t : {
      ...t,
      subGoals: e(t.subGoals)
    }).sort((e, t) => {
      let l = s(t) - s(e);
      return 0 !== l ? l : e.id.localeCompare(t.id)
    })
  }])
}, 263947, e => {
  "use strict";
  var t = e.i(722099),
    l = e.i(519172);
  e.s(["useProgressiveReveal", 0, function(e, n) {
    let r, i, s, C = (0, t.c)(10),
      u = void 0 === n ? 10 : n,
      [o, a] = (0, l.useState)(u);
    C[0] !== e || C[1] !== o ? (r = e.slice(0, o), C[0] = e, C[1] = o, C[2] = r) : r = C[2];
    let c = r,
      d = o < e.length,
      h = Math.min(u, e.length - c.length);
    C[3] !== u ? (i = () => a(e => e + u), C[3] = u, C[4] = i) : i = C[4];
    let f = i;
    return C[5] !== d || C[6] !== h || C[7] !== f || C[8] !== c ? (s = {
      visible: c,
      hasMore: d,
      revealCount: h,
      revealMore: f
    }, C[5] = d, C[6] = h, C[7] = f, C[8] = c, C[9] = s) : s = C[9], s
  }])
}, 30488, e => {
  "use strict";
  let t = null;
  e.s(["consumePendingComposerFocus", 0, function() {
    if (null == t) return !1;
    let e = ("u" > typeof performance ? performance.now() : Date.now()) - t <= 1500;
    return t = null, e
  }, "markPendingComposerFocus", 0, function() {
    t = "u" > typeof performance ? performance.now() : Date.now()
  }])
}, 149505, e => {
  "use strict";
  var t = e.i(672495);
  let l = e => e.inputValue,
    n = e => e.widgetOrigin?.placeholder ?? null,
    r = e => e.pendingAttachments,
    i = e => e.processingFiles,
    s = e => e.pendingSend;
  e.s(["useComposerInputValue", 0, function() {
    return (0, t.useHatchComposerSelector)(l)
  }, "useComposerPendingAttachments", 0, function() {
    return (0, t.useHatchComposerSelector)(r)
  }, "useComposerPendingSend", 0, function() {
    return (0, t.useHatchComposerSelector)(s)
  }, "useComposerProcessingFiles", 0, function() {
    return (0, t.useHatchComposerSelector)(i)
  }, "useComposerWidgetCustomInputPlaceholder", 0, function() {
    return (0, t.useHatchComposerSelector)(n)
  }])
}, 737220, e => {
  "use strict";
  var t = e.i(722099),
    l = e.i(849329),
    n = e.i(720756),
    r = e.i(522730);
  e.s(["useLoggableSpaceId", 0, function(e) {
    let i, s, C, u = (0, t.c)(8),
      o = (0, n.useGatewayQueryContext)();
    u[0] !== o ? (i = r.spacesListQuery.queryOptions({
      gatewayUrl: o.gatewayUrl ?? "",
      includeConstructing: !0
    }, o), u[0] = o, u[1] = i) : i = u[1];
    let a = null != o.gatewayUrl && o.gatewayUrl.length > 0;
    u[2] !== e ? (s = t => {
      if (null == e || 0 === e.length) return null;
      let l = t.find(t => t.slug === e && !0 !== t.is_saved_foreign_share);
      return null != l ? (0, r.loggableSpaceId)(l) : null
    }, u[2] = e, u[3] = s) : s = u[3], u[4] !== i || u[5] !== a || u[6] !== s ? (C = {
      ...i,
      enabled: a,
      select: s
    }, u[4] = i, u[5] = a, u[6] = s, u[7] = C) : C = u[7];
    let {
      data: c
    } = (0, l.useQuery)(C);
    return c ?? null
  }])
}, 507373, e => {
  "use strict";
  var t = e.i(984416),
    l = e.i(722099);

  function n(e) {
    let n, r, i, s, C, u, o, a = (0, l.c)(12);
    return a[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), a[0] = e.title, a[1] = n) : n = a[1], a[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), a[2] = e.children, a[3] = r) : r = a[3], a[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      d: "M12 5.13C12.48 5.13 12.88 5.52 12.88 6V12C12.88 12.48 12.48 12.88 12 12.88H7C6.52 12.88 6.13 12.48 6.13 12C6.13 11.52 6.52 11.13 7 11.13H11.13V6C11.13 5.52 11.52 5.13 12 5.13Z"
    }), s = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 1.13C18.01 1.13 22.88 5.99 22.88 12C22.88 15.2 21.49 18.07 19.3 20.06L21.62 22.38C21.96 22.72 21.96 23.28 21.62 23.62C21.28 23.96 20.72 23.96 20.38 23.62L17.9 21.13C16.2 22.23 14.17 22.88 12 22.88C9.83 22.88 7.8 22.23 6.1 21.13L3.62 23.62C3.28 23.96 2.72 23.96 2.38 23.62C2.04 23.28 2.04 22.72 2.38 22.38L4.7 20.06C2.5 18.07 1.13 15.2 1.13 12C1.13 5.99 5.99 1.13 12 1.13ZM12 2.88C6.96 2.88 2.88 6.96 2.88 12C2.88 14.98 4.31 17.63 6.52 19.29C6.53 19.3 6.54 19.31 6.56 19.33C8.08 20.46 9.96 21.13 12 21.13C14.04 21.13 15.92 20.46 17.44 19.33C17.45 19.31 17.47 19.3 17.48 19.29C19.69 17.63 21.13 14.98 21.13 12C21.13 6.96 17.04 2.88 12 2.88Z"
    }), C = (0, t.jsx)("path", {
      d: "M4 0.13C4.81 0.13 5.56 0.37 6.18 0.8C3.88 1.99 1.99 3.88 0.8 6.18C0.37 5.56 0.13 4.81 0.13 4C0.13 1.86 1.86 0.13 4 0.13Z"
    }), u = (0, t.jsx)("path", {
      d: "M20 0.13C22.14 0.13 23.88 1.86 23.88 4C23.88 4.81 23.63 5.56 23.2 6.18C22 3.88 20.12 1.99 17.82 0.8C18.44 0.37 19.19 0.13 20 0.13Z"
    }), a[4] = i, a[5] = s, a[6] = C, a[7] = u) : (i = a[4], s = a[5], C = a[6], u = a[7]), a[8] !== e || a[9] !== n || a[10] !== r ? (o = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, r, i, s, C, u]
    }), a[8] = e, a[9] = n, a[10] = r, a[11] = o) : o = a[11], o
  }
  n._isSVG = !0, e.s(["default", 0, n])
}, 509335, e => {
  "use strict";
  var t = e.i(984416),
    l = e.i(722099);

  function n(e) {
    let n, r, i, s, C = (0, l.c)(9);
    return C[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), C[0] = e.title, C[1] = n) : n = C[1], C[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), C[2] = e.children, C[3] = r) : r = C[3], C[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      d: "M11.45 2.32C11.79 2.04 12.3 2.06 12.62 2.38L20.12 9.88C20.46 10.22 20.46 10.78 20.12 11.12C19.78 11.46 19.22 11.46 18.88 11.12L12.87 5.11V21C12.87 21.48 12.48 21.88 12 21.88C11.52 21.87 11.12 21.48 11.12 21V5.11L5.12 11.12C4.78 11.46 4.22 11.46 3.88 11.12C3.54 10.78 3.54 10.22 3.88 9.88L11.38 2.38L11.45 2.32Z"
    }), C[4] = i) : i = C[4], C[5] !== e || C[6] !== n || C[7] !== r ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, r, i]
    }), C[5] = e, C[6] = n, C[7] = r, C[8] = s) : s = C[8], s
  }
  n._isSVG = !0, e.s(["default", 0, n])
}, 825998, e => {
  "use strict";
  var t = e.i(984416),
    l = e.i(722099);

  function n(e) {
    let n, r, i, s, C = (0, l.c)(9);
    return C[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), C[0] = e.title, C[1] = n) : n = C[1], C[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), C[2] = e.children, C[3] = r) : r = C[3], C[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15.27 0.13C16.7 0.13 17.91 1.18 18.11 2.59L18.33 4.13H19.8C20.35 4.13 20.81 4.12 21.18 4.16C21.57 4.19 21.95 4.26 22.31 4.44C22.85 4.71 23.29 5.15 23.56 5.69C23.74 6.05 23.81 6.43 23.84 6.82C23.88 7.19 23.88 7.65 23.88 8.2C23.88 8.48 23.87 8.75 23.87 9H23.88V14.6C23.88 15.71 23.88 16.59 23.82 17.3C23.76 18.02 23.63 18.64 23.34 19.21C22.88 20.13 22.13 20.88 21.21 21.34C20.64 21.63 20.02 21.76 19.3 21.82C18.59 21.88 17.71 21.88 16.6 21.88H7.4C6.29 21.88 5.41 21.88 4.7 21.82C3.98 21.76 3.36 21.63 2.79 21.34C1.87 20.88 1.12 20.13 0.66 19.21C0.37 18.64 0.24 18.02 0.18 17.3C0.12 16.59 0.13 15.71 0.13 14.6V9H0.13C0.13 8.75 0.13 8.48 0.13 8.2C0.13 7.65 0.12 7.19 0.16 6.82C0.19 6.43 0.26 6.05 0.44 5.69C0.71 5.15 1.15 4.71 1.69 4.44C2.05 4.26 2.43 4.19 2.82 4.16C3.19 4.12 3.65 4.13 4.2 4.13H5.73L5.91 2.64C6.09 1.2 7.32 0.13 8.77 0.13H15.27ZM22.13 13.24C22.01 13.31 21.89 13.39 21.76 13.45C21.29 13.69 20.8 13.79 20.24 13.83C19.7 13.88 19.03 13.88 18.2 13.88H5.8C4.97 13.88 4.3 13.88 3.76 13.83C3.2 13.79 2.71 13.69 2.24 13.45C2.11 13.39 1.99 13.31 1.88 13.24V14.6C1.88 15.73 1.88 16.53 1.93 17.16C1.98 17.77 2.07 18.14 2.22 18.42C2.52 19.01 2.99 19.48 3.58 19.78C3.86 19.93 4.23 20.02 4.84 20.07C5.47 20.12 6.27 20.13 7.4 20.13H16.6C17.73 20.13 18.53 20.12 19.16 20.07C19.77 20.02 20.14 19.93 20.42 19.78C21.01 19.48 21.48 19.01 21.78 18.42C21.93 18.14 22.02 17.77 22.07 17.16C22.12 16.53 22.13 15.73 22.13 14.6V13.24ZM4.2 5.88C3.63 5.88 3.25 5.88 2.96 5.9C2.68 5.92 2.56 5.96 2.49 6C2.28 6.11 2.11 6.28 2 6.49C1.96 6.56 1.92 6.68 1.9 6.96C1.88 7.25 1.88 7.63 1.88 8.2C1.88 9.05 1.88 9.64 1.91 10.1C1.95 10.55 2.02 10.79 2.11 10.96C2.31 11.36 2.64 11.69 3.04 11.89C3.21 11.98 3.45 12.05 3.9 12.09C4.36 12.12 4.95 12.13 5.8 12.13H18.2C19.05 12.13 19.64 12.12 20.1 12.09C20.55 12.05 20.79 11.98 20.96 11.89C21.36 11.69 21.69 11.36 21.89 10.96C21.98 10.79 22.05 10.55 22.09 10.1C22.12 9.64 22.13 9.05 22.13 8.2C22.13 7.63 22.12 7.25 22.1 6.96C22.08 6.68 22.04 6.56 22 6.49C21.89 6.28 21.72 6.11 21.51 6C21.44 5.96 21.32 5.92 21.04 5.9C20.75 5.88 20.37 5.88 19.8 5.88H4.2ZM8.77 1.88C8.2 1.88 7.72 2.3 7.65 2.86L7.49 4.13H16.56L16.38 2.84C16.3 2.29 15.83 1.88 15.27 1.88H8.77Z"
    }), C[4] = i) : i = C[4], C[5] !== e || C[6] !== n || C[7] !== r ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, r, i]
    }), C[5] = e, C[6] = n, C[7] = r, C[8] = s) : s = C[8], s
  }
  n._isSVG = !0, e.s(["default", 0, n])
}, 979473, e => {
  "use strict";
  var t = e.i(984416),
    l = e.i(722099);

  function n(e) {
    let n, r, i, s, C = (0, l.c)(9);
    return C[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), C[0] = e.title, C[1] = n) : n = C[1], C[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), C[2] = e.children, C[3] = r) : r = C[3], C[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17 2.13C20.48 2.13 23.38 5.01 23.38 8.48C23.37 13.54 19.28 18.34 13.97 21.81C12.77 22.59 11.23 22.59 10.03 21.81C4.73 18.34 0.63 13.54 0.63 8.48C0.62 5.01 3.52 2.13 7 2.13C8.63 2.13 10.23 2.75 11.47 3.99L12 4.51L12.53 3.99C13.77 2.75 15.37 2.13 17 2.13ZM17 3.88C15.82 3.88 14.67 4.32 13.77 5.22L12.62 6.37C12.28 6.71 11.72 6.71 11.38 6.37L10.23 5.22C9.33 4.32 8.18 3.88 7 3.88C4.48 3.88 2.37 5.99 2.38 8.48C2.38 12.62 5.82 16.96 10.99 20.35C11.6 20.75 12.4 20.75 13.01 20.35C18.18 16.96 21.62 12.62 21.63 8.48C21.63 5.99 19.52 3.88 17 3.88Z"
    }), C[4] = i) : i = C[4], C[5] !== e || C[6] !== n || C[7] !== r ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, r, i]
    }), C[5] = e, C[6] = n, C[7] = r, C[8] = s) : s = C[8], s
  }
  n._isSVG = !0, e.s(["default", 0, n])
}, 715732, e => {
  "use strict";
  var t = e.i(984416),
    l = e.i(722099);

  function n(e) {
    let n, r, i, s, C, u, o, a, c, d = (0, l.c)(14);
    return d[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), d[0] = e.title, d[1] = n) : n = d[1], d[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), d[2] = e.children, d[3] = r) : r = d[3], d[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      d: "M4.3 14.98C4.59 14.59 5.13 14.51 5.52 14.8C5.91 15.08 5.99 15.63 5.7 16.02L3.07 19.56C2.92 19.78 2.67 19.91 2.4 19.92C2.14 19.93 1.88 19.81 1.71 19.61L0.34 18.01C0.02 17.65 0.06 17.09 0.43 16.78C0.8 16.46 1.35 16.51 1.66 16.87L2.32 17.64L4.3 14.98Z"
    }), s = (0, t.jsx)("path", {
      d: "M22 17.13C22.48 17.13 22.88 17.52 22.88 18C22.88 18.48 22.48 18.88 22 18.88H8C7.52 18.88 7.13 18.48 7.13 18C7.13 17.52 7.52 17.13 8 17.13H22Z"
    }), C = (0, t.jsx)("path", {
      d: "M4.3 8.98C4.59 8.59 5.13 8.51 5.52 8.8C5.91 9.08 5.99 9.63 5.7 10.02L3.07 13.56C2.92 13.78 2.67 13.91 2.4 13.92C2.14 13.93 1.88 13.81 1.71 13.61L0.34 12.01C0.02 11.65 0.06 11.09 0.43 10.78C0.8 10.46 1.35 10.51 1.66 10.87L2.32 11.64L4.3 8.98Z"
    }), u = (0, t.jsx)("path", {
      d: "M22 11.13C22.48 11.13 22.88 11.52 22.88 12C22.88 12.48 22.48 12.88 22 12.88H8C7.52 12.88 7.13 12.48 7.13 12C7.13 11.52 7.52 11.13 8 11.13H22Z"
    }), o = (0, t.jsx)("path", {
      d: "M4.3 2.98C4.59 2.59 5.13 2.51 5.52 2.8C5.91 3.08 5.99 3.63 5.7 4.02L3.07 7.56C2.92 7.78 2.67 7.91 2.4 7.92C2.14 7.93 1.88 7.81 1.71 7.61L0.34 6.01C0.02 5.65 0.06 5.09 0.43 4.78C0.8 4.46 1.35 4.51 1.66 4.87L2.32 5.64L4.3 2.98Z"
    }), a = (0, t.jsx)("path", {
      d: "M22 5.13C22.48 5.13 22.88 5.52 22.88 6C22.88 6.48 22.48 6.87 22 6.88H8C7.52 6.88 7.13 6.48 7.13 6C7.13 5.52 7.52 5.13 8 5.13H22Z"
    }), d[4] = i, d[5] = s, d[6] = C, d[7] = u, d[8] = o, d[9] = a) : (i = d[4], s = d[5], C = d[6], u = d[7], o = d[8], a = d[9]), d[10] !== e || d[11] !== n || d[12] !== r ? (c = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, r, i, s, C, u, o, a]
    }), d[10] = e, d[11] = n, d[12] = r, d[13] = c) : c = d[13], c
  }
  n._isSVG = !0, e.s(["default", 0, n])
}, 759343, e => {
  "use strict";
  var t = e.i(984416),
    l = e.i(722099);

  function n(e) {
    let n, r, i, s, C, u, o, a, c, d = (0, l.c)(14);
    return d[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), d[0] = e.title, d[1] = n) : n = d[1], d[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), d[2] = e.children, d[3] = r) : r = d[3], d[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      d: "M12 14C13.1 14 14 14.9 14 16C14 17.1 13.1 18 12 18C10.9 18 10 17.1 10 16C10 14.9 10.9 14 12 14Z"
    }), s = (0, t.jsx)("path", {
      d: "M5 9.5C5.83 9.5 6.5 10.17 6.5 11C6.5 11.83 5.83 12.5 5 12.5C4.17 12.5 3.5 11.83 3.5 11C3.5 10.17 4.17 9.5 5 9.5Z"
    }), C = (0, t.jsx)("path", {
      d: "M8.5 6C9.33 6 10 6.67 10 7.5C10 8.33 9.33 9 8.5 9C7.67 9 7 8.33 7 7.5C7 6.67 7.67 6 8.5 6Z"
    }), u = (0, t.jsx)("path", {
      d: "M18 6C18.83 6 19.5 6.67 19.5 7.5C19.5 8.33 18.83 9 18 9C17.17 9 16.5 8.33 16.5 7.5C16.5 6.67 17.17 6 18 6Z"
    }), o = (0, t.jsx)("path", {
      d: "M13.25 5C14.08 5 14.75 5.67 14.75 6.5C14.75 7.33 14.08 8 13.25 8C12.42 8 11.75 7.33 11.75 6.5C11.75 5.67 12.42 5 13.25 5Z"
    }), a = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.97 1.15C14.11 1.04 16.74 1.32 18.99 2.21C21.22 3.08 23.24 4.63 23.76 7.13C24.18 9.15 23.39 10.61 22.45 11.57C21.55 12.49 20.46 12.99 20.25 13.11C20.14 13.17 19.98 13.23 19.87 13.28C19.74 13.34 19.59 13.41 19.43 13.49C19.11 13.65 18.79 13.84 18.56 14.07C18.33 14.3 18.22 14.52 18.2 14.76C18.18 15 18.24 15.41 18.67 16.02C19.43 17.12 19.74 18.2 19.51 19.21C19.29 20.21 18.58 20.94 17.78 21.46C16.2 22.47 13.85 22.87 12.01 22.88C5.53 22.88 0.13 18.09 0.13 12.01C0.13 9.01 1.29 6.37 3.39 4.43C5.47 2.5 8.43 1.32 11.97 1.15ZM18.35 3.83C16.38 3.06 14.01 2.8 12.06 2.89C8.85 3.06 6.31 4.11 4.57 5.72C2.85 7.31 1.88 9.49 1.88 12.01C1.88 16.97 6.33 21.13 12.01 21.13C13.68 21.12 15.65 20.74 16.84 19.98C17.42 19.61 17.72 19.22 17.8 18.83C17.89 18.45 17.82 17.87 17.23 17.02C16.65 16.19 16.39 15.38 16.45 14.62C16.52 13.84 16.9 13.25 17.33 12.83C17.75 12.41 18.25 12.12 18.64 11.92C18.84 11.82 19.03 11.74 19.16 11.68C19.24 11.65 19.29 11.63 19.34 11.6C19.38 11.59 19.4 11.58 19.4 11.58C19.74 11.38 20.53 11.03 21.21 10.35C21.84 9.7 22.32 8.8 22.05 7.49C21.7 5.81 20.32 4.61 18.35 3.83Z"
    }), d[4] = i, d[5] = s, d[6] = C, d[7] = u, d[8] = o, d[9] = a) : (i = d[4], s = d[5], C = d[6], u = d[7], o = d[8], a = d[9]), d[10] !== e || d[11] !== n || d[12] !== r ? (c = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, r, i, s, C, u, o, a]
    }), d[10] = e, d[11] = n, d[12] = r, d[13] = c) : c = d[13], c
  }
  n._isSVG = !0, e.s(["default", 0, n])
}, 367112, e => {
  "use strict";
  var t = e.i(984416),
    l = e.i(722099);

  function n(e) {
    let n, r, i, s, C = (0, l.c)(9);
    return C[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), C[0] = e.title, C[1] = n) : n = C[1], C[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), C[2] = e.children, C[3] = r) : r = C[3], C[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.51 2.69C17.84 1.36 19.99 1.36 21.31 2.69C22.64 4.01 22.64 6.16 21.31 7.49L9.84 18.96C9.17 19.63 8.36 20.16 7.47 20.5L3.88 21.9C2.76 22.34 1.66 21.24 2.1 20.12L3.5 16.53C3.84 15.64 4.37 14.83 5.04 14.16L16.51 2.69ZM6.28 15.4C5.78 15.9 5.38 16.5 5.13 17.16L4.04 19.96L6.84 18.87C7.5 18.61 8.1 18.22 8.6 17.72L18.06 8.26C17.48 7.32 16.68 6.52 15.74 5.94L6.28 15.4ZM20.07 3.93C19.43 3.28 18.39 3.28 17.75 3.93L17 4.67C17.92 5.29 18.7 6.08 19.33 7L20.07 6.25C20.71 5.61 20.72 4.57 20.07 3.93Z"
    }), C[4] = i) : i = C[4], C[5] !== e || C[6] !== n || C[7] !== r ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, r, i]
    }), C[5] = e, C[6] = n, C[7] = r, C[8] = s) : s = C[8], s
  }
  n._isSVG = !0, e.s(["default", 0, n])
}, 939059, e => {
  "use strict";
  var t = e.i(984416),
    l = e.i(722099);

  function n(e) {
    let n, r, i, s, C, u, o, a = (0, l.c)(12);
    return a[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), a[0] = e.title, a[1] = n) : n = a[1], a[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), a[2] = e.children, a[3] = r) : r = a[3], a[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      d: "M7.5 13.13C8 13.13 8.48 13.16 8.92 13.22C8.42 13.76 8.01 14.32 7.68 14.88C7.62 14.88 7.56 14.88 7.5 14.88C5.57 14.88 4.32 15.44 3.51 16.12C2.75 16.75 2.32 17.51 2.09 18.13H6.51C6.48 18.79 6.64 19.38 6.93 19.88H2C1.49 19.88 0.99 19.67 0.66 19.28C0.32 18.88 0.18 18.31 0.37 17.75C0.65 16.88 1.25 15.72 2.39 14.78C3.54 13.82 5.2 13.13 7.5 13.13Z"
    }), s = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16 12.13C18.57 12.13 20.38 13.03 21.6 14.22C22.66 15.25 23.25 16.46 23.56 17.4L23.67 17.79C24 19 23 19.87 22 19.88H10C9 19.87 7.99 19 8.32 17.79C8.59 16.81 9.19 15.4 10.4 14.22C11.62 13.03 13.43 12.13 16 12.13ZM16 13.88C13.88 13.88 12.51 14.6 11.62 15.48C10.75 16.32 10.28 17.35 10.05 18.13H21.95C21.72 17.35 21.25 16.32 20.38 15.47C19.49 14.6 18.12 13.88 16 13.88Z"
    }), C = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.05 3.93C7.97 3.93 8.78 4.27 9.39 4.95L9.4 4.96C10.01 5.66 10.27 6.57 10.27 7.58C10.27 8.59 10.01 9.49 9.4 10.19C8.79 10.89 7.98 11.23 7.05 11.23C6.17 11.23 5.39 10.93 4.8 10.31L4.68 10.18C4.07 9.48 3.82 8.58 3.82 7.58C3.82 6.57 4.07 5.66 4.69 4.96C5.3 4.26 6.12 3.93 7.05 3.93ZM7.05 5.68C6.56 5.68 6.24 5.83 6 6.11L5.91 6.23C5.7 6.52 5.57 6.95 5.57 7.58C5.57 8.29 5.75 8.74 6 9.04L6.01 9.04C6.25 9.33 6.57 9.48 7.05 9.48C7.5 9.48 7.82 9.33 8.08 9.04C8.34 8.74 8.52 8.29 8.52 7.58C8.52 6.86 8.34 6.41 8.08 6.11C7.83 5.83 7.51 5.68 7.05 5.68Z"
    }), u = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.06 2.43C17.04 2.43 17.9 2.79 18.55 3.5L18.56 3.51C19.21 4.25 19.49 5.22 19.49 6.3C19.49 7.37 19.21 8.33 18.56 9.07C17.9 9.8 17.05 10.17 16.06 10.17C15.06 10.17 14.18 9.81 13.54 9.06C12.89 8.32 12.61 7.37 12.61 6.3C12.61 5.22 12.89 4.25 13.54 3.51C14.19 2.78 15.06 2.43 16.06 2.43ZM16.06 4.18C15.5 4.18 15.13 4.36 14.85 4.67C14.56 5.01 14.36 5.51 14.36 6.3C14.36 7.07 14.56 7.57 14.85 7.91L14.86 7.92C15.14 8.24 15.51 8.42 16.06 8.42C16.58 8.42 16.95 8.24 17.25 7.91C17.54 7.57 17.74 7.07 17.74 6.3C17.74 5.51 17.54 5.01 17.25 4.68C16.95 4.35 16.58 4.18 16.06 4.18Z"
    }), a[4] = i, a[5] = s, a[6] = C, a[7] = u) : (i = a[4], s = a[5], C = a[6], u = a[7]), a[8] !== e || a[9] !== n || a[10] !== r ? (o = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, r, i, s, C, u]
    }), a[8] = e, a[9] = n, a[10] = r, a[11] = o) : o = a[11], o
  }
  n._isSVG = !0, e.s(["default", 0, n])
}, 376339, e => {
  "use strict";
  var t = e.i(984416),
    l = e.i(722099);

  function n(e) {
    let n, r, i, s, C, u, o, a, c, d = (0, l.c)(14);
    return d[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), d[0] = e.title, d[1] = n) : n = d[1], d[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), d[2] = e.children, d[3] = r) : r = d[3], d[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.2 8.77C12.16 8 13.53 8 14.49 8.77C14.61 8.87 14.73 8.99 14.87 9.13C15.01 9.27 15.13 9.39 15.23 9.51C16 10.47 16 11.84 15.22 12.8C15.13 12.92 15.01 13.04 14.87 13.18L5.96 22.09C5.82 22.23 5.7 22.35 5.58 22.44C4.62 23.22 3.25 23.22 2.29 22.44C2.17 22.35 2.05 22.23 1.91 22.09C1.77 21.95 1.65 21.83 1.56 21.71C0.78 20.75 0.78 19.38 1.56 18.41C1.65 18.3 1.77 18.18 1.91 18.04L10.82 9.13C10.96 8.99 11.08 8.87 11.2 8.77ZM3.15 19.27C2.98 19.45 2.94 19.49 2.92 19.51C2.66 19.83 2.66 20.29 2.92 20.61C2.94 20.64 2.98 20.68 3.15 20.85C3.32 21.02 3.36 21.06 3.39 21.08C3.71 21.34 4.17 21.34 4.49 21.08C4.51 21.06 4.55 21.02 4.72 20.85L9.43 16.14C8.79 15.74 8.25 15.21 7.86 14.57L3.15 19.27ZM13.39 10.14C13.07 9.88 12.62 9.88 12.29 10.14C12.27 10.16 12.23 10.2 12.05 10.37L9.15 13.28C9.46 13.98 10.02 14.54 10.72 14.85L13.63 11.94C13.8 11.77 13.84 11.73 13.86 11.71C14.12 11.38 14.12 10.93 13.86 10.61C13.84 10.58 13.8 10.54 13.63 10.37C13.46 10.2 13.42 10.16 13.39 10.14Z"
    }), s = (0, t.jsx)("path", {
      d: "M17.21 17.21C17.56 16.87 18.11 16.87 18.45 17.21L20.4 19.16C20.74 19.5 20.74 20.05 20.4 20.4C20.05 20.74 19.5 20.74 19.16 20.4L17.21 18.45C16.87 18.11 16.87 17.56 17.21 17.21Z"
    }), C = (0, t.jsx)("path", {
      d: "M23 11.13C23.48 11.13 23.87 11.52 23.88 12C23.87 12.48 23.48 12.88 23 12.88H20.25C19.77 12.88 19.37 12.48 19.37 12C19.37 11.52 19.77 11.13 20.25 11.13H23Z"
    }), u = (0, t.jsx)("path", {
      d: "M3.6 3.6C3.94 3.26 4.5 3.26 4.84 3.6L6.79 5.55C7.13 5.89 7.13 6.44 6.79 6.79C6.44 7.13 5.89 7.13 5.55 6.79L3.6 4.84C3.26 4.5 3.26 3.95 3.6 3.6Z"
    }), o = (0, t.jsx)("path", {
      d: "M19.16 3.6C19.5 3.26 20.05 3.26 20.4 3.6C20.74 3.94 20.74 4.5 20.4 4.84L18.45 6.79C18.11 7.13 17.56 7.13 17.21 6.79C16.87 6.44 16.87 5.89 17.21 5.55L19.16 3.6Z"
    }), a = (0, t.jsx)("path", {
      d: "M12 0.13C12.48 0.13 12.88 0.52 12.88 1V3.75C12.88 4.23 12.48 4.62 12 4.63C11.52 4.62 11.13 4.23 11.13 3.75V1C11.13 0.52 11.52 0.13 12 0.13Z"
    }), d[4] = i, d[5] = s, d[6] = C, d[7] = u, d[8] = o, d[9] = a) : (i = d[4], s = d[5], C = d[6], u = d[7], o = d[8], a = d[9]), d[10] !== e || d[11] !== n || d[12] !== r ? (c = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, r, i, s, C, u, o, a]
    }), d[10] = e, d[11] = n, d[12] = r, d[13] = c) : c = d[13], c
  }
  n._isSVG = !0, e.s(["default", 0, n])
}, 646398, e => {
  "use strict";
  var t = e.i(984416),
    l = e.i(722099);

  function n(e) {
    let n, r, i, s, C, u, o, a, c, d = (0, l.c)(14);
    return d[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), d[0] = e.title, d[1] = n) : n = d[1], d[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), d[2] = e.children, d[3] = r) : r = d[3], d[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.8 8.77C11.84 8 10.47 8 9.51 8.77C9.39 8.87 9.27 8.99 9.13 9.13C8.99 9.27 8.87 9.39 8.78 9.51C8 10.47 8 11.84 8.78 12.8C8.87 12.92 8.99 13.04 9.13 13.18L18.04 22.09C18.18 22.23 18.3 22.35 18.42 22.44C19.38 23.22 20.75 23.22 21.71 22.44C21.83 22.35 21.95 22.23 22.09 22.09C22.23 21.95 22.35 21.83 22.44 21.71C23.22 20.75 23.22 19.38 22.44 18.41C22.35 18.3 22.23 18.18 22.09 18.04L13.18 9.13C13.04 8.99 12.92 8.87 12.8 8.77ZM20.85 19.27C21.02 19.45 21.06 19.49 21.08 19.51C21.34 19.83 21.34 20.29 21.08 20.61C21.06 20.64 21.02 20.68 20.85 20.85C20.68 21.02 20.64 21.06 20.61 21.08C20.29 21.34 19.83 21.34 19.51 21.08C19.49 21.06 19.45 21.02 19.28 20.85L14.57 16.14C15.21 15.74 15.75 15.21 16.14 14.57L20.85 19.27ZM10.61 10.14C10.93 9.88 11.39 9.88 11.71 10.14C11.73 10.16 11.77 10.2 11.95 10.37L14.85 13.28C14.54 13.97 13.98 14.54 13.28 14.85L10.37 11.94C10.2 11.77 10.16 11.73 10.14 11.71C9.88 11.38 9.88 10.93 10.14 10.61C10.16 10.58 10.2 10.54 10.37 10.37C10.54 10.2 10.58 10.16 10.61 10.14Z"
    }), s = (0, t.jsx)("path", {
      d: "M6.79 17.21C6.44 16.87 5.89 16.87 5.55 17.21L3.6 19.16C3.26 19.5 3.26 20.05 3.6 20.4C3.95 20.74 4.5 20.74 4.84 20.4L6.79 18.45C7.13 18.11 7.13 17.56 6.79 17.21Z"
    }), C = (0, t.jsx)("path", {
      d: "M1 11.13C0.52 11.13 0.13 11.52 0.13 12C0.13 12.48 0.52 12.88 1 12.88H3.75C4.23 12.88 4.63 12.48 4.63 12C4.63 11.52 4.23 11.13 3.75 11.13H1Z"
    }), u = (0, t.jsx)("path", {
      d: "M20.4 3.6C20.06 3.26 19.5 3.26 19.16 3.6L17.21 5.55C16.87 5.89 16.87 6.44 17.21 6.79C17.56 7.13 18.11 7.13 18.45 6.79L20.4 4.84C20.74 4.5 20.74 3.95 20.4 3.6Z"
    }), o = (0, t.jsx)("path", {
      d: "M4.84 3.6C4.5 3.26 3.95 3.26 3.6 3.6C3.26 3.94 3.26 4.5 3.6 4.84L5.55 6.79C5.89 7.13 6.44 7.13 6.79 6.79C7.13 6.44 7.13 5.89 6.79 5.55L4.84 3.6Z"
    }), a = (0, t.jsx)("path", {
      d: "M12 0.13C11.52 0.13 11.13 0.52 11.13 1V3.75C11.13 4.23 11.52 4.62 12 4.63C12.48 4.63 12.88 4.23 12.88 3.75V1C12.88 0.52 12.48 0.13 12 0.13Z"
    }), d[4] = i, d[5] = s, d[6] = C, d[7] = u, d[8] = o, d[9] = a) : (i = d[4], s = d[5], C = d[6], u = d[7], o = d[8], a = d[9]), d[10] !== e || d[11] !== n || d[12] !== r ? (c = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, r, i, s, C, u, o, a]
    }), d[10] = e, d[11] = n, d[12] = r, d[13] = c) : c = d[13], c
  }
  n._isSVG = !0, e.s(["default", 0, n])
}, 302230, e => {
  "use strict";
  e.s(["HATCH_PROMPT_ID_QUERY_PARAM", 0, "prompt_id", "HATCH_PROMPT_QUERY_PARAM", 0, "prompt", "isHatchDeeplinkPromptId", 0, function(e) {
    return "string" == typeof e && /^[1-9]\d{0,18}$/.test(e)
  }])
}]);

//# debugId=ba9eb468-2f26-03df-c209-2feea6c952bd
//# sourceMappingURL=1let-21r27u1q.js.map