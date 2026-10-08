;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "053479d9-84f6-6b5d-45aa-b388739c18e5")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 826129, e => {
  e.v(t => Promise.all(["static/chunks/2ocy32qsoi1my.js", "static/chunks/22rz4w8z_m085.js", "static/chunks/1saebv-_ucw0q.js", "static/chunks/1s1vof6cr12g6.js", "static/chunks/3c75zinm_alvt.js", "static/chunks/09dt2drzczjdx.js", "static/chunks/2d9sc0xq8_gbh.js", "static/chunks/379i5xrkite5g.js", "static/chunks/22u7rv1flyl-h.js", "static/chunks/3ub2md4gau7p-.js", "static/chunks/0y59g8ok4v1he.css", "static/chunks/3thqruy8878oi.css"].map(t => e.l(t))).then(() => t(264763)))
}, 50499, e => {
  e.v(t => Promise.all(["static/chunks/3lmoa4l09gkvf.js", "static/chunks/3j8-wbned2uw5.js", "static/chunks/1-472z1fdzkxm.js", "static/chunks/1xrw-01vc3xns.js", "static/chunks/3thqruy8878oi.css"].map(t => e.l(t))).then(() => t(875660)))
}, 409189, e => {
  e.v(t => Promise.all(["static/chunks/0qiv8j-9pg04-.js"].map(t => e.l(t))).then(() => t(219077)))
}, 920341, e => {
  e.v(t => Promise.all(["static/chunks/3rrk-n6uhh88q.js", "static/chunks/1tv-yb72epqcu.js", "static/chunks/2ehv4kwvruz3h.js", "static/chunks/0sxbnxhzjbmzc.js"].map(t => e.l(t))).then(() => t(940575)))
}, 398842, e => {
  e.v(t => Promise.all(["static/chunks/2yrenvtj6543i.js", "static/chunks/1agf6mw0ebxyd.js"].map(t => e.l(t))).then(() => t(760429)))
}, 747487, e => {
  e.v(t => Promise.all(["static/chunks/0k4nzn5v1ejx9.js"].map(t => e.l(t))).then(() => t(41992)))
}, 686887, e => {
  e.v(t => Promise.all(["static/chunks/2zfpu2ra47xpl.js"].map(t => e.l(t))).then(() => t(114349)))
}, 579923, e => {
  e.v(t => Promise.all(["static/chunks/43q9q31-6hz21.js"].map(t => e.l(t))).then(() => t(812526)))
}, 18327, e => {
  e.v(t => Promise.all(["static/chunks/0rm4ld7qs9rvy.js"].map(t => e.l(t))).then(() => t(488857)))
}, 401605, 540934, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    r = e.i(519172),
    o = e.i(763971),
    c = e.i(635470),
    l = e.i(393202),
    i = e.i(630203),
    n = e.i(720756),
    s = e.i(175286),
    u = e.i(22338),
    y = e.i(173214),
    A = e.i(845558),
    h = e.i(535678),
    p = e.i(359783),
    T = e.i(813280),
    S = e.i(870228),
    d = e.i(66284),
    H = e.i(396502),
    R = e.i(210316);

  function E(e) {
    let r, o, c, l, i, n = (0, a.c)(17),
      {
        blockerSource: s,
        reset: u,
        spaceKey: y,
        surface: A
      } = e,
      h = (0, R.useArtifactLoadAttemptReporter)(),
      p = h?.fail,
      T = h?.restart;
    n[0] !== T || n[1] !== y ? (r = () => T?.(y, "route_error_recovery") ?? null, n[0] = T, n[1] = y, n[2] = r) : r = n[2];
    let S = r;
    n[3] !== p || n[4] !== y ? (o = (e, t) => {
      null != t && p?.(y, {
        failureStage: "route_exception"
      }, t)
    }, n[3] = p, n[4] = y, n[5] = o) : o = n[5];
    let E = o;
    return n[6] !== s || n[7] !== y || n[8] !== A ? (c = (0, t.jsx)(H.ArtifactLoadBlockingFailureReporter, {
      failureStage: "route_exception",
      source: s,
      spaceKey: y,
      surface: A
    }), n[6] = s, n[7] = y, n[8] = A, n[9] = c) : c = n[9], n[10] !== E || n[11] !== S || n[12] !== u ? (l = (0, t.jsx)(d.HatchSpacesErrorFallback, {
      onRetryError: E,
      onRetryStart: S,
      reset: u,
      surface: "space"
    }), n[10] = E, n[11] = S, n[12] = u, n[13] = l) : l = n[13], n[14] !== c || n[15] !== l ? (i = (0, t.jsxs)(t.Fragment, {
      children: [c, l]
    }), n[14] = c, n[15] = l, n[16] = i) : i = n[16], i
  }
  e.s(["ArtifactRouteErrorFallback", 0, E], 540934);
  var m = e.i(351321),
    _ = e.i(345717),
    C = e.i(374785);

  function P(e) {
    let r, o, c, l, i, n, s, u = (0, a.c)(13),
      {
        className: y,
        headingLevel: A,
        HomeLink: h
      } = e,
      p = 1 === (void 0 === A ? 2 : A) ? "h1" : "h2";
    return u[0] !== y ? (r = (0, C.cn)("flex h-full flex-col items-center justify-center gap-4 py-16 text-center", y), u[0] = y, u[1] = r) : r = u[1], u[2] === Symbol.for("react.memo_cache_sentinel") ? (o = _.fbt._("Page not found", null, {
      hk: "3StvRl"
    }), u[2] = o) : o = u[2], u[3] !== p ? (c = (0, t.jsx)(p, {
      className: "text-primary text-title-3-emphasized",
      children: o
    }), u[3] = p, u[4] = c) : c = u[4], u[5] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("p", {
      className: "text-secondary text-subheadline",
      children: _.fbt._("The page you are looking for does not exist or has been moved.", null, {
        hk: "2tBmqG"
      })
    }), u[5] = l) : l = u[5], u[6] === Symbol.for("react.memo_cache_sentinel") ? (i = _.fbt._("Back to chat", null, {
      hk: "qFCUM"
    }), u[6] = i) : i = u[6], u[7] !== h ? (n = (0, t.jsx)(h, {
      className: "text-hatch-accent text-subheadline-emphasized hover:underline",
      children: i
    }), u[7] = h, u[8] = n) : n = u[8], u[9] !== r || u[10] !== c || u[11] !== n ? (s = (0, t.jsxs)("div", {
      className: r,
      children: [c, l, n]
    }), u[9] = r, u[10] = c, u[11] = n, u[12] = s) : s = u[12], s
  }
  var f = e.i(685231);

  function L(e) {
    let r, o = (0, a.c)(3),
      {
        children: c,
        className: l
      } = e;
    return o[0] !== c || o[1] !== l ? (r = (0, t.jsx)(m.default, {
      to: "/",
      className: l,
      children: c
    }), o[0] = c, o[1] = l, o[2] = r) : r = o[2], r
  }

  function v() {
    let e, r = (0, a.c)(1);
    return (0, f.useReportInitialLoadRouteContent)("unavailable", !0), r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(P, {
      HomeLink: L
    }), r[0] = e) : e = r[0], e
  }
  var g = e.i(306941),
    b = e.i(304117),
    N = e.i(546963),
    j = e.i(439393);

  function k(e, t) {
    if (null != e.activityKey) return e.activityKey;
    if (0 === e.paramNames.length) return e.path;
    let a = e.path;
    for (let r of e.paramNames) a = a.replace(`:${r}`, t[r] ?? "");
    return a
  }

  function I(e, t, a, r) {
    let o = new Map(e);
    if (o.set(a, {
        route: t.route,
        params: t.params,
        match: t,
        lastActiveAt: r
      }), o.size > 5) {
      let e = function(e, t) {
        let a = null,
          r = 1 / 0;
        for (let [o, c] of e) o !== t && c.lastActiveAt < r && (r = c.lastActiveAt, a = o);
        return a
      }(o, a);
      null != e && o.delete(e)
    }
    return o
  }
  var x = e.i(301970),
    F = e.i(863641);
  let w = (0, p.createClientLogger)("ShellRouter");

  function Y(e) {
    let r, o = (0, a.c)(3),
      {
        error: c,
        reset: l,
        route: i
      } = e;
    return (0, f.useReportShellPrimaryContent)(i, "error"), o[0] !== c || o[1] !== l ? (r = (0, t.jsx)(S.HatchContentErrorFallback, {
      error: c,
      onRetry: l
    }), o[0] = c, o[1] = l, o[2] = r) : r = o[2], r
  }

  function U(e) {
    let {
      route: t
    } = e;
    return (0, f.useReportShellPrimaryContent)(t, "error"), null
  }

  function D() {
    return (0, f.useReportInitialLoadRouteContent)("error"), null
  }

  function B(e) {
    let t, o = (0, a.c)(2),
      {
        identity: c
      } = e;
    return o[0] !== c ? (t = [c], o[0] = c, o[1] = t) : t = o[1], (0, r.useLayoutEffect)(O, t), null
  }

  function O() {
    (0, h.markInitialLoadPoint)("route_component_committed")
  }
  let K = (0, r.createContext)(null);
  e.s(["default", 0, function() {
    let e, h, p, d, m, _, C, P, L, O, M, z, G, q, $ = (0, a.c)(37),
      Q = (0, o.usePathname)(),
      V = (0, o.useSearchParams)(),
      W = (0, l.useQueryClient)(),
      J = (0, n.useGatewayQueryContext)(),
      X = (0, j.useShellRouteExperiments)(),
      Z = (0, y.useSetPageTracePolicy)(),
      {
        isReady: ee
      } = (0, s.useHatchRpc)(),
      et = (0, A.useRisingEdgeCount)(ee);
    $[0] !== et ? (e = [et], $[0] = et, $[1] = e) : e = $[1];
    let ea = e;
    $[2] !== Q || $[3] !== V ? (h = (0, u.resolveShellLocationMatch)(Q, V, g.shellRoutes), $[2] = Q, $[3] = V, $[4] = h) : h = $[4];
    let {
      directMatch: er,
      aliasRedirect: eo,
      aliasMatch: ec,
      match: el
    } = h, ei = (0, R.useArtifactLoadAttemptReporter)();
    $[5] !== el ? (p = null != el && (0, b.isLayoutOwnedChatShellRoutePath)(el.route.path), $[5] = el, $[6] = p) : p = $[6];
    let en = p;
    $[7] !== X || $[8] !== J || $[9] !== el || $[10] !== W ? (d = null == el ? void 0 : (0, N.primeActiveShellRoute)(el, {
      queryClient: W,
      gatewayCtx: J,
      experiments: X
    }), $[7] = X, $[8] = J, $[9] = el, $[10] = W, $[11] = d) : d = $[11];
    let es = d;
    $[12] !== el ? (m = () => !el || (0, b.isLayoutOwnedChatShellRoutePath)(el.route.path) || "unmount" === el.route.activityRetention ? new Map : new Map([
      [k(el.route, el.params), {
        route: el.route,
        params: el.params,
        match: el,
        lastActiveAt: Date.now()
      }]
    ]), $[12] = el, $[13] = m) : m = $[13];
    let [eu, ey] = (0, r.useState)(m);
    if ($[14] !== el ? (_ = () => {
        ey(e => {
          let t;
          if (!el || (0, b.isLayoutOwnedChatShellRoutePath)(el.route.path)) return e;
          let a = k(el.route, el.params);
          return t = I(e, el, a, Date.now()), "unmount" === el.route.activityRetention && t.delete(a), t
        })
      }, C = [el], $[14] = el, $[15] = _, $[16] = C) : (_ = $[15], C = $[16]), (0, r.useEffect)(_, C), $[17] !== el || $[18] !== Z ? (P = () => {
        el && Z(el.tracePolicy)
      }, L = [el, Z], $[17] = el, $[18] = Z, $[19] = P, $[20] = L) : (P = $[19], L = $[20]), (0, r.useEffect)(P, L), $[21] !== es || $[22] !== el ? (M = () => {
        el && null != es && es.catch(e => {
          w.error({
            error: e instanceof Error ? e : Error(String(e))
          }, `Route priming failed for: ${el.route.displayName}`)
        })
      }, O = [es, el], $[21] = es, $[22] = el, $[23] = O, $[24] = M) : (O = $[23], M = $[24]), (0, r.useEffect)(M, O), $[25] !== ec || $[26] !== eo || $[27] !== er ? (z = () => {
        er || null == eo || null == ec || window.history.replaceState(null, "", eo)
      }, G = [er, eo, ec], $[25] = ec, $[26] = eo, $[27] = er, $[28] = z, $[29] = G) : (z = $[28], G = $[29]), (0, r.useLayoutEffect)(z, G), !el) {
      let e;
      return $[30] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(v, {}), $[30] = e) : e = $[30], e
    }
    if ($[31] !== ei || $[32] !== en || $[33] !== el || $[34] !== eu || $[35] !== ea) {
      let e = en ? null : k(el.route, el.params),
        a = null != e ? I(eu, el, e, Date.now()) : eu;
      q = (0, t.jsx)(t.Fragment, {
        children: Array.from(a.entries()).map(a => {
          let [o, l] = a, n = o === e, s = n ? el : l.match, u = n ? el.params : l.params, y = "space" === l.route.panelType ? "viewer" : "space_edit" === l.route.panelType ? "editor" : null, A = null == y ? null : (u.slug ?? "").trim() || null, h = (0, f.getShellPrimaryContentRoute)(s), p = null != l.route.errorFallback ? (0, t.jsxs)(t.Fragment, {
            children: [n ? null == h ? (0, t.jsx)(D, {}) : (0, t.jsx)(U, {
              route: h
            }) : null, l.route.errorFallback]
          }) : e => {
            let {
              error: a,
              reset: r
            } = e;
            return (0, t.jsxs)(t.Fragment, {
              children: [n && null == h ? (0, t.jsx)(D, {}) : null, null != A && null != y ? (0, t.jsx)(E, {
                blockerSource: "shell_route",
                reset: r,
                spaceKey: A,
                surface: y
              }) : null == h ? (0, t.jsx)(S.HatchContentErrorFallback, {
                error: a,
                onRetry: r
              }) : (0, t.jsx)(Y, {
                error: a,
                reset: r,
                route: h
              })]
            })
          };
          return (0, t.jsx)(r.Activity, {
            mode: n ? "visible" : "hidden",
            children: (0, t.jsx)(f.ShellPrimaryContentIdentityProvider, {
              identity: s.identity,
              isActive: n,
              children: (0, t.jsx)(K.Provider, {
                value: s,
                children: (0, t.jsx)(c.QueryErrorResetBoundary, {
                  children: e => {
                    let {
                      reset: a
                    } = e;
                    return (0, t.jsx)(T.EctoErrorBoundary, {
                      surface: function(e) {
                        switch (e) {
                          case x.EctoRouteTracePolicy.HATCH:
                            return F.HATCH_SENTRY_SURFACES.CHAT;
                          case x.EctoRouteTracePolicy.HATCH_AGENTS:
                            return F.HATCH_SENTRY_SURFACES.SHARED_AGENTS;
                          case x.EctoRouteTracePolicy.HATCH_LIBRARY:
                            return F.HATCH_SENTRY_SURFACES.LIBRARY;
                          case x.EctoRouteTracePolicy.HATCH_LIBRARY_RECENT:
                            return F.HATCH_SENTRY_SURFACES.LIBRARY_RECENT;
                          case x.EctoRouteTracePolicy.HATCH_LIBRARY_ARTIFACTS:
                            return F.HATCH_SENTRY_SURFACES.LIBRARY_SPACES;
                          case x.EctoRouteTracePolicy.HATCH_LIBRARY_DOCUMENTS:
                            return F.HATCH_SENTRY_SURFACES.LIBRARY_DOCUMENTS;
                          case x.EctoRouteTracePolicy.HATCH_LIBRARY_MEDIA:
                            return F.HATCH_SENTRY_SURFACES.LIBRARY_MEDIA;
                          case x.EctoRouteTracePolicy.HATCH_LIBRARY_FILES:
                            return F.HATCH_SENTRY_SURFACES.LIBRARY_FILES;
                          case x.EctoRouteTracePolicy.HATCH_LIBRARY_PODCASTS:
                            return F.HATCH_SENTRY_SURFACES.LIBRARY_PODCASTS;
                          case x.EctoRouteTracePolicy.HATCH_ARTIFACTS:
                            return F.HATCH_SENTRY_SURFACES.ARTIFACTS;
                          case x.EctoRouteTracePolicy.HATCH_GOALS:
                            return F.HATCH_SENTRY_SURFACES.GOALS;
                          case x.EctoRouteTracePolicy.HATCH_FEED:
                            return F.HATCH_SENTRY_SURFACES.FEED;
                          case x.EctoRouteTracePolicy.HATCH_IDEAS:
                            return F.HATCH_SENTRY_SURFACES.IDEAS;
                          case x.EctoRouteTracePolicy.HATCH_SPACE:
                            return F.HATCH_SENTRY_SURFACES.SPACE;
                          case x.EctoRouteTracePolicy.HATCH_SPACE_EDIT:
                            return F.HATCH_SENTRY_SURFACES.SPACE_EDIT;
                          case x.EctoRouteTracePolicy.HATCH_SAVED_SPACE:
                            return F.HATCH_SENTRY_SURFACES.SAVED_SPACE;
                          case x.EctoRouteTracePolicy.HATCH_SHARE:
                            return F.HATCH_SENTRY_SURFACES.SHARE;
                          case x.EctoRouteTracePolicy.HATCH_FLOCK:
                            return F.HATCH_SENTRY_SURFACES.FLOCK;
                          case x.EctoRouteTracePolicy.HATCH_ARTIFACT_SHARE:
                            return F.HATCH_SENTRY_SURFACES.ARTIFACT_SHARE;
                          case x.EctoRouteTracePolicy.HATCH_MEDIA_SHARE:
                            return F.HATCH_SENTRY_SURFACES.MEDIA_SHARE;
                          case x.EctoRouteTracePolicy.HATCH_CONNECT:
                            return F.HATCH_SENTRY_SURFACES.CONNECT;
                          case x.EctoRouteTracePolicy.HATCH_SETTINGS:
                            return F.HATCH_SENTRY_SURFACES.SETTINGS;
                          case x.EctoRouteTracePolicy.STORYBOOK:
                            return F.HATCH_SENTRY_SURFACES.ROOT
                        }
                      }(l.route.tracePolicy),
                      withQueryReset: !1,
                      resetKeys: ea,
                      onError: n && null != A && null != y ? () => ei?.reportBlockingFailure(A, y, "shell_route", {
                        failureStage: "route_exception"
                      }) : void 0,
                      fallback: p,
                      onReset: () => {
                        a(), l.route.forceRemountOnError && ey(e => {
                          if (!e.has(o)) return e;
                          let t = new Map(e);
                          return t.delete(o), t
                        })
                      },
                      children: (0, t.jsx)(i.HeroPlaceholder, {
                        fallback: l.route.pending ?? null,
                        name: `shell-route:${l.route.path}`,
                        children: (0, t.jsxs)(t.Fragment, {
                          children: ["editor" === y && null != A ? (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(l.route.component, {
                              params: u,
                              searchParams: s.searchParams
                            }), (0, t.jsx)(H.ArtifactLoadRecoveryCommit, {
                              spaceKey: A,
                              surface: "editor"
                            })]
                          }) : (0, t.jsx)(l.route.component, {
                            params: u,
                            searchParams: s.searchParams
                          }), n ? (0, t.jsx)(B, {
                            identity: s.identity
                          }) : null]
                        })
                      })
                    })
                  }
                })
              })
            })
          }, o)
        })
      }), $[31] = ei, $[32] = en, $[33] = el, $[34] = eu, $[35] = ea, $[36] = q
    } else q = $[36];
    return q
  }, "useShellRouteContext", 0, function() {
    let e = (0, r.useContext)(K);
    if (!e) throw Error("useShellRouteContext must be used within <ShellRouter>.");
    return e
  }], 401605)
}, 306941, e => {
  "use strict";
  var t = e.i(301970),
    a = e.i(519172),
    r = e.i(535678),
    o = e.i(915637);
  let c = new WeakMap;

  function l(e, t) {
    let o = null == t.loader ? void 0 : async a => {
      let o = (0, r.beginInitialLoadSpan)("route_loader", e.tracePolicy);
      try {
        await t.loader?.(a), (0, r.endInitialLoadSpan)(o, "success")
      } catch (e) {
        throw (0, r.endInitialLoadSpan)(o, "error"), e
      }
    }, l = {
      ...e,
      loader: o,
      errorFallback: t.errorFallback,
      forceRemountOnError: t.forceRemountOnError
    };
    if ("loadComponent" in t && "function" == typeof t.loadComponent) {
      let {
        Component: o,
        preload: i
      } = function(e, t) {
        let o = c.get(e);
        if (null != o) return o;
        let l = null,
          i = null,
          n = () => {
            if (l) return Promise.resolve(l);
            if (!i) {
              let a = (0, r.beginInitialLoadSpan)("route_chunk", t);
              i = e().then(e => (l = e, (0, r.endInitialLoadSpan)(a, "success"), e), e => {
                throw i = null, (0, r.endInitialLoadSpan)(a, "error"), e
              })
            }
            return i
          },
          s = (0, a.lazy)(n),
          u = {
            Component: e => l ? (0, a.createElement)(l.default, e) : (0, a.createElement)(s, e),
            preload: n
          };
        return c.set(e, u), u
      }(t.loadComponent, e.tracePolicy);
      return Object.freeze({
        ...l,
        component: o,
        preload: i,
        pending: t.pending
      })
    }
    return Object.freeze({
      ...l,
      component: t.component
    })
  }
  var i = e.i(304117),
    n = e.i(834903),
    s = e.i(576833),
    u = e.i(671204),
    y = e.i(751444);
  let A = () => e.A(826129).then(e => ({
      default: e.HatchLibraryRoute
    })),
    h = () => e.A(920341).then(e => ({
      default: e.HatchSharedAgentsRoute
    }));

  function p({
    searchParams: e
  }) {
    let t, a = e.get("view");
    switch (e.delete("view"), a) {
      case "images":
        t = `${i.SHELL_PATH.libraryMedia}?view=images`;
        break;
      case "video":
      case "videos":
        t = `${i.SHELL_PATH.libraryMedia}?view=video`;
        break;
      case "media":
        t = i.SHELL_PATH.libraryMedia;
        break;
      case "files":
        t = i.SHELL_PATH.libraryFiles;
        break;
      case "documents":
      case "your_files":
      case "search":
        t = `${i.SHELL_PATH.libraryArtifacts}?view=documents`;
        break;
      case "web":
      case "spaces":
        t = `${i.SHELL_PATH.libraryArtifacts}?view=web`;
        break;
      default:
        t = i.SHELL_PATH.libraryArtifacts
    }
    let r = e.toString();
    return r ? `${t}${t.includes("?")?"&":"?"}${r}` : t
  }

  function T(e) {
    let t = (0, o.getShellRouteMetadata)(e.path);
    return "loadComponent" in e && void 0 === e.pending ? l(t, {
      ...e,
      pending: (0, n.pickHatchShellRouteFallback)(e.path).body
    }) : l(t, e)
  }
  let S = [T({
    path: i.SHELL_PATH.chat,
    loadComponent: s.loadHatchChatRoute,
    panelType: "chat",
    tracePolicy: t.EctoRouteTracePolicy.HATCH,
    displayName: "Chat"
  }), T({
    path: i.SHELL_PATH.threadDraft,
    loadComponent: s.loadHatchChatRoute,
    panelType: "chat",
    tracePolicy: t.EctoRouteTracePolicy.HATCH,
    displayName: "New Thread"
  }), T({
    path: i.SHELL_PATH.thread,
    loadComponent: s.loadHatchChatRoute,
    panelType: "chat",
    tracePolicy: t.EctoRouteTracePolicy.HATCH,
    displayName: "Thread"
  }), T({
    path: i.SHELL_PATH.libraryRecent,
    loadComponent: A,
    activityKey: "library",
    panelType: "files",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_LIBRARY_RECENT,
    displayName: "Library: Recent",
    searchParams: u.libraryRouteSearchParamsSchema
  }), T({
    path: i.SHELL_PATH.libraryArtifacts,
    aliases: [{
      path: i.SHELL_ALIAS_PATH.library,
      resolveRedirect: p
    }, {
      path: i.SHELL_ALIAS_PATH.libraryTrailingSlash,
      resolveRedirect: p
    }, {
      path: i.SHELL_ALIAS_PATH.spaces
    }, {
      path: i.SHELL_ALIAS_PATH.spacesTrailingSlash
    }],
    loadComponent: A,
    activityKey: "library",
    panelType: "files",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_LIBRARY_ARTIFACTS,
    displayName: "Library: All Artifacts",
    searchParams: u.libraryRouteSearchParamsSchema
  }), T({
    path: i.SHELL_PATH.libraryDocuments,
    loadComponent: A,
    activityKey: "library",
    panelType: "files",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_LIBRARY_DOCUMENTS,
    displayName: "Library: Documents",
    searchParams: u.libraryRouteSearchParamsSchema
  }), T({
    path: i.SHELL_PATH.libraryMedia,
    loadComponent: A,
    activityKey: "library",
    panelType: "files",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_LIBRARY_MEDIA,
    displayName: "Library: All Media",
    searchParams: u.libraryRouteSearchParamsSchema
  }), T({
    path: i.SHELL_PATH.libraryFiles,
    loadComponent: A,
    activityKey: "library",
    panelType: "files",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_LIBRARY_FILES,
    displayName: "Library: System Files",
    searchParams: u.libraryRouteSearchParamsSchema
  }), T({
    path: i.SHELL_PATH.libraryPodcasts,
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
  }), T({
    path: i.SHELL_PATH.artifacts,
    loadComponent: s.loadHatchArtifactsRoute,
    panelType: "artifacts",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_ARTIFACTS,
    displayName: "Artifacts"
  }), T({
    path: i.SHELL_PATH.ideas,
    loadComponent: s.loadHatchIdeasRoute,
    activityKey: "ideas",
    panelType: "ideas",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_IDEAS,
    displayName: "Ideas",
    loader: async ({
      queryClient: t,
      gatewayCtx: a,
      experiments: r,
      searchParams: o
    }) => {
      if (!a.gatewayUrl) return;
      let {
        exploreIdeasInfiniteQuery: c,
        exploreIdeaPreviewQuery: l,
        EXPLORE_IDEAS_SECTION_PAGE_SIZE: i
      } = await e.A(686887), n = {
        gatewayUrl: a.gatewayUrl,
        gatewayScopeKey: a.gatewayScopeKey ?? a.targetKey,
        colorIcons: r.ideaColorIcons
      }, s = o?.ideaId ?? null;
      await Promise.all([c.prefetch(t, {
        ...n,
        pageSize: i
      }, a), null != s && a.isReady ? l.prefetch(t, {
        ...n,
        ideaCardId: s
      }, a) : void 0])
    }
  }), T({
    path: i.SHELL_PATH.feed,
    loadComponent: s.loadHatchFeedRoute,
    activityKey: "feed",
    panelType: "feed",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_FEED,
    displayName: "Feed"
  }), T({
    path: i.SHELL_PATH.libraryArtifact,
    aliases: [{
      path: i.SHELL_ALIAS_PATH.space
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
      let o = (r.slug ?? "").trim(),
        c = a.gatewayUrl;
      if (0 === o.length || null == c) return;
      let l = (0, y.beginSpaceCatalogReconciliation)(t, c, o);
      try {
        let {
          ensureOwnedSpaceCatalogEntry: r
        } = await e.A(18327), i = await r({
          gatewayCtx: a,
          queryClient: t,
          slug: o
        });
        null != l && ("error" === i.status ? (0, y.failSpaceCatalogReconciliation)(t, c, o, l) : (0, y.finishSpaceCatalogReconciliation)(t, c, o, l))
      } catch (e) {
        throw null != l && (0, y.failSpaceCatalogReconciliation)(t, c, o, l), e
      }
    }
  }), T({
    path: i.SHELL_PATH.spaceEdit,
    loadComponent: () => e.A(398842).then(e => ({
      default: e.HatchSpaceEditRoute
    })),
    panelType: "space_edit",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_SPACE_EDIT,
    displayName: "Edit artifact"
  }), T({
    path: i.SHELL_PATH.savedSpace,
    loadComponent: () => e.A(409189).then(e => ({
      default: e.HatchSavedSpaceRoute
    })),
    activityRetention: "unmount",
    panelType: "space",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_SAVED_SPACE,
    displayName: "Saved Artifact"
  }), T({
    path: i.SHELL_PATH.goals,
    loadComponent: s.loadHatchGoalsRoute,
    activityKey: "goals",
    panelType: "goals",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_GOALS,
    displayName: "Goals"
  }), T({
    path: i.SHELL_PATH.goal,
    loadComponent: s.loadHatchGoalsRoute,
    activityKey: "goals",
    panelType: "goals",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_GOALS,
    displayName: "Goal"
  }), T({
    path: i.SHELL_PATH.sharedAgents,
    loadComponent: h,
    activityKey: "agents",
    panelType: "agents",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_AGENTS,
    displayName: "Shared Agents"
  }), T({
    path: i.SHELL_PATH.sharedAgentsClaim,
    loadComponent: h,
    activityKey: "agents",
    activityRetention: "unmount",
    panelType: "agents",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_AGENTS,
    displayName: "Accept Shared Agent"
  }), T({
    path: i.SHELL_PATH.sharedAgentsSharedWithYou,
    loadComponent: h,
    activityKey: "agents",
    panelType: "agents",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_AGENTS,
    displayName: "Shared with you"
  }), T({
    path: i.SHELL_PATH.sharedAgent,
    loadComponent: h,
    activityKey: "agents",
    panelType: "agents",
    tracePolicy: t.EctoRouteTracePolicy.HATCH_AGENTS,
    displayName: "Shared Agent"
  })];
  e.s(["shellRoutes", 0, S], 306941)
}]);

//# debugId=053479d9-84f6-6b5d-45aa-b388739c18e5
//# sourceMappingURL=37be0m_c0c05_.js.map