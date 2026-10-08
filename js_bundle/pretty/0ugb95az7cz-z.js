;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "b56d3a70-814e-15f6-605a-bf0ceb64eb99")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 658895, e => {
  "use strict";
  class t {
    map = new Map;
    maxSize;
    onEvict;
    constructor(e, t) {
      this.maxSize = e, this.onEvict = t
    }
    get(e) {
      if (!this.map.has(e)) return;
      let t = this.map.get(e);
      return this.map.delete(e), this.map.set(e, t), t
    }
    peek(e) {
      return this.map.get(e)
    }
    has(e) {
      return this.map.has(e)
    }
    set(e, t) {
      let n = this.map.has(e),
        r = this.map.get(e);
      for (n && this.map.delete(e), this.map.set(e, t), n && !Object.is(r, t) && this.onEvict?.(e, r); this.map.size > this.maxSize;) {
        let e = this.map.entries().next();
        if (e.done) break;
        let [t, n] = e.value;
        this.map.delete(t), this.onEvict?.(t, n)
      }
    }
    delete(e) {
      let t = this.map.get(e),
        n = this.map.delete(e);
      return n && this.onEvict?.(e, t), n
    }
    clear() {
      if (this.onEvict)
        for (let [e, t] of this.map) this.onEvict(e, t);
      this.map.clear()
    }
    get size() {
      return this.map.size
    }
  }
  e.s(["LRUCache", 0, t])
}, 503367, e => {
  "use strict";
  var t = e.i(255859);
  let n = t.PRODUCT_SOCIAL_TITLE,
    r = `Try ${t.PRODUCT_BRAND.shortName}, your personal AI agent that gets things done. Give ${t.PRODUCT_BRAND.shortName} a goal or an everyday task and it handles the rest, from finances and health to shopping and the people you care about.`,
    a = `${t.PRODUCT_BRAND.shortName} wearing headphones and working at a laptop`;
  t.PRODUCT_BRAND.shortName, e.s(["MUSE_SOCIAL_DESCRIPTION", 0, r, "MUSE_SOCIAL_IMAGE_ALT", 0, a, "MUSE_SOCIAL_IMAGE_HEIGHT", 0, 630, "MUSE_SOCIAL_IMAGE_PATH", 0, "/images/landing/brand/og-image.jpg?v=3", "MUSE_SOCIAL_IMAGE_WIDTH", 0, 1200, "MUSE_SOCIAL_TITLE", 0, n, "MUSE_SOCIAL_VIDEO_HEIGHT", 0, 630, "MUSE_SOCIAL_VIDEO_PATH", 0, "/videos/landing/brand/og-video.mp4?v=1", "MUSE_SOCIAL_VIDEO_TYPE", 0, "video/mp4", "MUSE_SOCIAL_VIDEO_WIDTH", 0, 1200])
}, 874514, e => {
  "use strict";

  function t(e) {
    try {
      return new Intl.NumberFormat(void 0, {
        style: "currency",
        currency: e
      }).resolvedOptions().maximumFractionDigits ?? 2
    } catch {
      return 2
    }
  }

  function n(e, n) {
    let r = t(n),
      a = e < 0 ? "-" : "",
      i = Math.abs(Math.trunc(e));
    if (0 === r) return `${a}${i}`;
    let l = String(i).padStart(r + 1, "0");
    return `${a}${l.slice(0,-r)}.${l.slice(-r)}`
  }
  e.s(["formatStefiPrice", 0, function(e) {
    let t = n(e.amount, e.currency);
    try {
      return new Intl.NumberFormat(void 0, {
        style: "currency",
        currency: e.currency
      }).format(t)
    } catch {
      return `${e.currency} ${t}`
    }
  }, "majorUnitsStringToMinorUnits", 0, function(e, n) {
    let r = e.trim();
    if (!/^-?\d+(\.\d+)?$/.test(r)) return null;
    let a = r.startsWith("-"),
      [i = "", l = ""] = (a ? r.slice(1) : r).split("."),
      s = t(n),
      o = l.padEnd(s, "0").slice(0, s),
      u = Number(`${i}${o}`);
    return Number.isSafeInteger(u) ? a ? -u : u : null
  }, "minorUnitsToMajorUnitsString", 0, n])
}, 581386, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(345717),
    r = e.i(722099),
    a = e.i(294237),
    i = e.i(181883),
    l = e.i(181959),
    s = e.i(440802),
    o = e.i(374785);
  l.default._isSVG = !0, i.default._isSVG = !0;
  let u = (0, a.cva)("flex justify-center px-5", {
    variants: {
      layout: {
        idea: "pt-2 pb-7",
        publish: "pt-2 pb-4",
        published: "pt-2 pb-5",
        avatar: "pt-6.5 pb-5 md:px-0 md:pt-0 md:pb-4",
        media: "pt-4 pb-10 md:px-0 md:pt-0 md:pb-4"
      }
    },
    defaultVariants: {
      layout: "publish"
    }
  });

  function c(e) {
    let a, u, c, d, h, f, p, m = (0, r.c)(24),
      {
        onBack: g,
        backRef: v,
        closeRef: S,
        onClose: _,
        showCloseButton: A,
        title: C,
        titleId: I,
        titleRef: y,
        variant: b
      } = e,
      k = void 0 === A || A,
      E = void 0 === b ? "default" : b,
      T = "idea" === E ? "text-hatch-idea-share-title" : "text-title-3-emphasized";
    m[0] !== T ? (a = (0, o.cn)("text-text-primary min-w-0", T), m[0] = T, m[1] = a) : a = m[1], m[2] !== C ? (u = C ?? n.fbt._("Share", null, {
      hk: "38UVfR"
    }), m[2] = C, m[3] = u) : u = m[3], m[4] !== a || m[5] !== u || m[6] !== I || m[7] !== y ? (c = (0, t.jsx)("h2", {
      id: I,
      ref: y,
      tabIndex: -1,
      className: a,
      children: u
    }), m[4] = a, m[5] = u, m[6] = I, m[7] = y, m[8] = c) : c = m[8];
    let w = c,
      P = "idea" === E ? "flex shrink-0 items-center justify-between gap-2 py-4 pe-4" : "flex items-center justify-between gap-4 p-4 pb-2",
      x = "idea" === E && (null == g ? "ps-6" : "ps-4");
    return m[9] !== P || m[10] !== x ? (d = (0, o.cn)(P, x), m[9] = P, m[10] = x, m[11] = d) : d = m[11], m[12] !== v || m[13] !== w || m[14] !== g ? (h = null == g ? w : (0, t.jsxs)("div", {
      className: "flex min-w-0 items-center gap-2",
      children: [(0, t.jsx)(s.IconButton, {
        ref: v,
        icon: i.default,
        iconSize: 20,
        label: n.fbs._("Back", null, {
          hk: "g9KUU"
        }),
        size: "28",
        variant: "elevated",
        className: "rtl:rotate-180",
        onClick: g
      }), w]
    }), m[12] = v, m[13] = w, m[14] = g, m[15] = h) : h = m[15], m[16] !== S || m[17] !== _ || m[18] !== k ? (f = k && (0, t.jsx)(s.IconButton, {
      ref: S,
      icon: l.default,
      iconSize: 20,
      label: n.fbs._("Close", null, {
        hk: "TXbmd"
      }),
      size: "28",
      variant: "elevated",
      onClick: _
    }), m[16] = S, m[17] = _, m[18] = k, m[19] = f) : f = m[19], m[20] !== h || m[21] !== f || m[22] !== d ? (p = (0, t.jsxs)("div", {
      className: d,
      children: [h, f]
    }), m[20] = h, m[21] = f, m[22] = d, m[23] = p) : p = m[23], p
  }

  function d(e) {
    let n, a, i, l, s, c, d, h = (0, r.c)(21),
      {
        actions: f,
        children: p,
        description: m,
        preview: g,
        layout: v
      } = e,
      S = void 0 === v ? "publish" : v,
      _ = "idea" === S ? "pb-5" : "avatar" === S || "media" === S ? "pb-5 md:pb-0" : "pb-9";
    h[0] !== _ ? (n = (0, o.cn)("relative flex min-w-0 flex-col", _), h[0] = _, h[1] = n) : n = h[1], h[2] !== S ? (a = u({
      layout: S
    }), h[2] = S, h[3] = a) : a = h[3], h[4] !== g || h[5] !== a ? (i = (0, t.jsx)("div", {
      className: a,
      children: g
    }), h[4] = g, h[5] = a, h[6] = i) : i = h[6], h[7] !== m || h[8] !== S ? (l = "idea" !== S && (0, t.jsx)("div", {
      className: (0, o.cn)("px-5", ("avatar" === S || "media" === S) && "md:px-0"),
      children: (0, t.jsx)("div", {
        className: "max-w-artifact-share-copy text-subheadline-large text-text-primary mx-auto text-center",
        "aria-live": "polite",
        children: m
      })
    }), h[7] = m, h[8] = S, h[9] = l) : l = h[9];
    let A = "idea" === S ? null : "avatar" === S ? "mt-5 md:mt-4" : "media" === S ? "mt-6 md:mt-4" : "published" === S ? "mt-10" : "mt-4";
    return h[10] !== A ? (s = (0, o.cn)("flex w-full justify-center", A), h[10] = A, h[11] = s) : s = h[11], h[12] !== f || h[13] !== s ? (c = (0, t.jsx)("div", {
      className: s,
      children: f
    }), h[12] = f, h[13] = s, h[14] = c) : c = h[14], h[15] !== p || h[16] !== n || h[17] !== i || h[18] !== l || h[19] !== c ? (d = (0, t.jsxs)("div", {
      className: n,
      children: [i, l, c, p]
    }), h[15] = p, h[16] = n, h[17] = i, h[18] = l, h[19] = c, h[20] = d) : d = h[20], d
  }
  e.s(["HatchShareDialogBody", 0, d, "HatchShareDialogHeader", 0, c, "HatchShareDialogLayout", 0, function(e) {
    let n, a, i, l, s, o, u, h, f, p, m, g, v, S = (0, r.c)(26);
    return S[0] !== e ? ({
      onBack: l,
      backRef: n,
      closeRef: i,
      onClose: s,
      showCloseButton: o,
      title: u,
      titleRef: f,
      titleId: h,
      variant: p,
      ...a
    } = e, S[0] = e, S[1] = n, S[2] = a, S[3] = i, S[4] = l, S[5] = s, S[6] = o, S[7] = u, S[8] = h, S[9] = f, S[10] = p) : (n = S[1], a = S[2], i = S[3], l = S[4], s = S[5], o = S[6], u = S[7], h = S[8], f = S[9], p = S[10]), S[11] !== n || S[12] !== i || S[13] !== l || S[14] !== s || S[15] !== o || S[16] !== u || S[17] !== h || S[18] !== f || S[19] !== p ? (m = (0, t.jsx)(c, {
      onBack: l,
      backRef: n,
      closeRef: i,
      onClose: s,
      showCloseButton: o,
      title: u,
      titleRef: f,
      titleId: h,
      variant: p
    }), S[11] = n, S[12] = i, S[13] = l, S[14] = s, S[15] = o, S[16] = u, S[17] = h, S[18] = f, S[19] = p, S[20] = m) : m = S[20], S[21] !== a ? (g = (0, t.jsx)(d, {
      ...a
    }), S[21] = a, S[22] = g) : g = S[22], S[23] !== m || S[24] !== g ? (v = (0, t.jsxs)("div", {
      className: "relative flex min-w-0 flex-col",
      children: [m, g]
    }), S[23] = m, S[24] = g, S[25] = v) : v = S[25], v
  }])
}, 598747, 773861, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(519172),
    a = e.i(294237),
    i = e.i(345717),
    l = e.i(203576),
    s = e.i(900772),
    o = e.i(832815),
    u = e.i(200388),
    c = e.i(358338),
    d = e.i(848048),
    h = e.i(440802),
    f = e.i(612270),
    p = e.i(374785),
    m = e.i(47247),
    g = e.i(359783),
    v = e.i(863641),
    S = e.i(782339);
  let _ = ["copy_link", "whatsapp", "messenger", "instagram", "x", "threads"];

  function A(e, t, n, r = "") {
    let a, i = r.length > 0 ? `${r}
${t}` : t;
    switch (e) {
      case "messenger":
        (a = new URL(n ? "fb-messenger://share" : "https://www.facebook.com/share_as_message/")).searchParams.set("app_id", S.EctoAppIDs.HATCH_WEB), a.searchParams.set("link", t);
        break;
      case "instagram":
        (a = new URL("https://www.instagram.com/intent/share/")).searchParams.set("text", i);
        break;
      case "whatsapp":
        (a = new URL("https://wa.me/")).searchParams.set("text", i);
        break;
      case "threads":
        (a = new URL("https://www.threads.net/intent/post")).searchParams.set("text", i);
        break;
      case "x":
        (a = new URL("https://x.com/intent/tweet")).searchParams.set("url", t), r.length > 0 && a.searchParams.set("text", r)
    }
    return {
      url: a.toString(),
      target: "messenger" === e && n ? "_self" : "_blank"
    }
  }
  e.s(["HATCH_SHARE_TRAY_DEFAULT_DESTINATIONS", 0, _, "getHatchShareDestination", 0, A], 773861), o.default._isSVG = !0, u.default._isSVG = !0, c.default._isSVG = !0;
  let C = (0, g.createClientLogger)("HatchShareTray"),
    I = (0, a.cva)("w-full overflow-x-auto px-5", {
      variants: {
        layout: {
          standalone: "",
          dialog: "md:px-0"
        }
      },
      defaultVariants: {
        layout: "standalone"
      }
    });

  function y(e) {
    let r, a = (0, n.c)(3),
      {
        width: i,
        height: l
      } = e;
    return a[0] !== l || a[1] !== i ? (r = (0, t.jsx)("img", {
      src: "/images/sharing/whatsapp.svg",
      width: i,
      height: l,
      alt: ""
    }), a[0] = l, a[1] = i, a[2] = r) : r = a[2], r
  }

  function b(e) {
    let r, a = (0, n.c)(3),
      {
        width: i,
        height: l
      } = e;
    return a[0] !== l || a[1] !== i ? (r = (0, t.jsx)("img", {
      src: "/images/sharing/instagram-messages.svg",
      width: i,
      height: l,
      alt: ""
    }), a[0] = l, a[1] = i, a[2] = r) : r = a[2], r
  }

  function k() {
    return () => {}
  }

  function E() {
    return "function" == typeof navigator.share
  }

  function T() {
    return !1
  }

  function w(e) {
    let a, i, l, s, o, u = (0, n.c)(22),
      {
        action: c,
        disabled: f,
        onClick: m,
        tracking: g
      } = e,
      v = (0, r.useId)(),
      {
        ref: S,
        onClick: _
      } = (0, d.useTrackedClickRef)(g),
      A = "messenger" === c.destination ? "text-hatch-accent" : "text-text-primary";
    u[0] !== _ || u[1] !== m ? (a = () => {
      _(), m()
    }, u[0] = _, u[1] = m, u[2] = a) : a = u[2], u[3] !== c.icon || u[4] !== c.iconSize || u[5] !== c.label || u[6] !== f || u[7] !== v || u[8] !== S || u[9] !== A || u[10] !== a ? (i = (0, t.jsx)(h.IconButton, {
      ref: S,
      id: v,
      type: "button",
      icon: c.icon,
      iconSize: c.iconSize,
      size: "60",
      variant: "flat",
      label: c.label,
      disabled: f,
      className: "bg-bg-secondary enabled:group-hover:brightness-95 dark:enabled:group-hover:brightness-110",
      iconClassName: A,
      onClick: a
    }), u[3] = c.icon, u[4] = c.iconSize, u[5] = c.label, u[6] = f, u[7] = v, u[8] = S, u[9] = A, u[10] = a, u[11] = i) : i = u[11];
    let C = f ? "cursor-default" : "cursor-pointer",
      I = "instagram" === c.destination && "w-16";
    return u[12] !== C || u[13] !== I ? (l = (0, p.cn)("text-footnote-medium text-text-primary text-center", C, I), u[12] = C, u[13] = I, u[14] = l) : l = u[14], u[15] !== c.label || u[16] !== v || u[17] !== l ? (s = (0, t.jsx)("label", {
      htmlFor: v,
      className: l,
      children: c.label
    }), u[15] = c.label, u[16] = v, u[17] = l, u[18] = s) : s = u[18], u[19] !== i || u[20] !== s ? (o = (0, t.jsxs)("div", {
      className: "group flex max-w-20 min-w-15 shrink-0 flex-col items-center gap-2",
      children: [i, s]
    }), u[19] = i, u[20] = s, u[21] = o) : o = u[21], o
  }
  e.s(["HatchShareTray", 0, function({
    destinations: e = _,
    getTracking: n,
    layout: a = "standalone",
    onCopy: d,
    sentrySurface: h,
    shareText: g = "",
    shareUrl: S
  }) {
    let P = (0, f.useIsTouchDevice)(),
      x = (0, r.useSyncExternalStore)(k, E, T),
      H = (0, r.useRef)(!1),
      R = i.fbs._("Something went wrong. Please try again.", null, {
        hk: "ppKTW"
      }),
      N = [{
        destination: "share",
        icon: o.default,
        iconSize: 24,
        label: i.fbs._("Share", null, {
          hk: "2jPSuX"
        })
      }, {
        destination: "copy_link",
        icon: u.default,
        iconSize: 24,
        label: i.fbs._("Copy link", null, {
          hk: "3TRLtT"
        })
      }, {
        destination: "whatsapp",
        icon: y,
        iconSize: 28,
        label: i.fbs._("WhatsApp", null, {
          hk: "2IgkvQ"
        })
      }, {
        destination: "messenger",
        icon: c.default,
        iconSize: 24,
        label: i.fbs._("Messenger", null, {
          hk: "wHFA5"
        })
      }, {
        destination: "instagram",
        icon: b,
        iconSize: 28,
        label: i.fbs._("Instagram messages", null, {
          hk: "3phkEb"
        })
      }, {
        destination: "x",
        icon: s.default,
        iconSize: 24,
        label: i.fbs._("X", null, {
          hk: "2MA9sN"
        })
      }, {
        destination: "threads",
        icon: l.default,
        iconSize: 24,
        label: i.fbs._("Threads", null, {
          hk: "2intVS"
        })
      }],
      L = e.flatMap(e => {
        if ("share" === e && !x) return [];
        let t = N.find(t => t.destination === e);
        return null == t ? [] : [t]
      });
    return (0, t.jsx)("div", {
      className: I({
        layout: a
      }),
      children: (0, t.jsx)("div", {
        className: (0, p.cn)("mx-auto flex w-fit items-start gap-6 py-1", "dialog" === a && "md:gap-4"),
        children: L.map(e => (0, t.jsx)(w, {
          action: e,
          tracking: n(e.destination),
          disabled: null == S,
          onClick: () => (function(e) {
            if (null != S) {
              if ("copy_link" === e) return void d();
              if ("share" === e) return void
              function(e) {
                let t;
                if (H.current) return;
                H.current = !0;
                let n = (0, m.captureHatchToast)();
                try {
                  t = navigator.share(g.length > 0 ? {
                    text: g,
                    url: e
                  } : {
                    url: e
                  })
                } catch (e) {
                  t = Promise.reject(e)
                }
                t.catch(e => {
                  (e instanceof DOMException || e instanceof Error) && "AbortError" === e.name || (C.error({
                    error: e,
                    destination: "share",
                    tags: (0, v.hatchSentryTags)(h)
                  }, "Could not open the system share sheet"), n.error(R))
                }).finally(() => {
                  H.current = !1
                })
              }(S);
              try {
                let t = A(e, S, P, g);
                "_self" === t.target ? window.location.assign(t.url) : window.open(t.url, "_blank", "noopener,noreferrer")
              } catch (t) {
                C.error({
                  error: t,
                  destination: e,
                  tags: (0, v.hatchSentryTags)(h)
                }, "Could not open share composer"), (0, m.captureHatchToast)().error(R)
              }
            }
          })(e.destination)
        }, e.destination))
      })
    })
  }], 598747)
}, 771995, e => {
  "use strict";
  let t = new Set;
  e.s(["claimWidgetImpression", 0, function(e) {
    if (0 === e.length || t.has(e)) return !1;
    if (t.size >= 1e3) {
      let e = t.values().next();
      e.done || t.delete(e.value)
    }
    return t.add(e), !0
  }, "resetSeenWidgetImpressions", 0, function() {
    t.clear()
  }])
}, 891387, e => {
  "use strict";
  var t = e.i(134348),
    n = e.i(438451);

  function r(e, t) {
    return void 0 === t || t === (0, n.getHatchChatRouteKey)(e)
  }

  function a(e, t, n, a) {
    var i;
    return null != t && "draft" !== t.kind && "invalid_thread" !== t.kind && !!r(t, a.currentChatRouteKey) && (null == n ? !1 !== a.assumeUnknownRootAgentMatches : (i = a.companionRootAgentIdsByAgentId, (i?.[e] ?? e) === n))
  }

  function i(e, t, n) {
    return e?.kind !== "main" && e?.kind !== "thread" ? null : null != t && r(e, n) ? t : "thread" === e.kind ? e.sessionId : null
  }

  function l(e) {
    let t = e.scope?.threadId ?? null;
    return null == e.rootAgentId ? {
      threadId: t,
      sessionId: e.sessionScopeId ?? null,
      isThread: null != e.sessionScopeId
    } : {
      threadId: t,
      rootAgentId: e.rootAgentId,
      sessionId: null,
      isThread: null
    }
  }

  function s(e, t, n, l = {}) {
    if (null == e) return !1;
    if (null != e.threadId) {
      let r = i(t, l.currentChatSessionId, l.currentChatRouteKey);
      return null != r ? e.threadId === r : null != e.rootAgentId && a(e.rootAgentId, t, n, l)
    }
    return null != e.rootAgentId ? a(e.rootAgentId, t, n, l) : o(e) ? null != t && r(t, l.currentChatRouteKey) : t?.kind === "thread" ? e.sessionId === t.sessionId : t?.kind === "main" && (!1 === e.isThread || null == e.sessionId && !0 !== e.isThread)
  }

  function o(e) {
    return null == e.threadId && null == e.sessionId && null == e.isThread
  }

  function u(e, n, r, a, i = {}) {
    if (!0 === function(e) {
        let {
          activeChatRoute: n,
          assumeUnknownRootAgentMatches: r,
          currentChatRootAgentId: a,
          currentChatRouteKey: i,
          currentChatSessionId: l,
          includeTasklessSnapshotKey: u,
          companionRootAgentIdsByAgentId: c,
          liveTaskScopesByTaskId: d,
          resolvedApprovalIdsById: h,
          snapshotPendingApprovalBackgroundOnlyById: f,
          snapshotPendingApprovalsById: p,
          snapshotPendingApprovalScopesById: m,
          targetAttentionMode: g,
          taskStatusesByTaskId: v
        } = e;
        if (null == p) return null;
        for (let [e, S] of Object.entries(p)) {
          if (h?.[e] === !0) continue;
          let p = (null == S || 0 === S.length ? v[t.PENDING_APPROVAL_SNAPSHOT_KEY] : v[S]) ?? null;
          if (null == p || !(0, t.isPendingApprovalStatus)(p) || "background" === g !== (f?.[e] ?? p === t.BACKGROUND_PENDING_APPROVAL_STATUS)) continue;
          let _ = m?.[e],
            A = null == S || 0 === S.length ? void 0 : d[S],
            C = _?.threadId != null || null == A || o(A) && null != _ ? _ : A;
          if (null != C) {
            if (s(C, n, a, {
                assumeUnknownRootAgentMatches: r,
                companionRootAgentIdsByAgentId: c,
                currentChatRouteKey: i,
                currentChatSessionId: l
              })) return !0;
            continue
          }
          if ((null == S || 0 === S.length) && u && n?.kind === "main") return !0
        }
        return !1
      }({
        activeChatRoute: r,
        assumeUnknownRootAgentMatches: i.assumeUnknownRootAgentMatches,
        currentChatRootAgentId: i.currentChatRootAgentId ?? null,
        currentChatRouteKey: i.currentChatRouteKey,
        currentChatSessionId: i.currentChatSessionId,
        includeTasklessSnapshotKey: !0 === i.includeTasklessSnapshotKey,
        companionRootAgentIdsByAgentId: i.companionRootAgentIdsByAgentId,
        liveTaskScopesByTaskId: n,
        resolvedApprovalIdsById: i.resolvedApprovalIdsById,
        snapshotPendingApprovalBackgroundOnlyById: i.snapshotPendingApprovalBackgroundOnlyById,
        snapshotPendingApprovalsById: i.snapshotPendingApprovalsById,
        snapshotPendingApprovalScopesById: i.snapshotPendingApprovalScopesById,
        targetAttentionMode: a,
        taskStatusesByTaskId: e
      })) return !0;
    if (!0 === i.requireSnapshotMatch) return !1;
    let l = "background" === a ? t.BACKGROUND_PENDING_APPROVAL_STATUS : t.BLOCKING_PENDING_APPROVAL_STATUS;
    return Object.entries(e).some(([e, a]) => {
      if (a !== l) return !1;
      if (e === t.PENDING_APPROVAL_SNAPSHOT_KEY) return null == i.snapshotPendingApprovalsById && !0 === i.includeTasklessSnapshotKey && r?.kind === "main";
      if (null != i.snapshotPendingApprovalsById && (0, t.hasUnresolvedSnapshotPendingTaskId)(i.snapshotPendingApprovalsById, i.resolvedApprovalIdsById ?? {}, e)) return !1;
      let o = n[e];
      return null != o && s(o, r, i.currentChatRootAgentId ?? null, {
        assumeUnknownRootAgentMatches: i.assumeUnknownRootAgentMatches,
        companionRootAgentIdsByAgentId: i.companionRootAgentIdsByAgentId,
        currentChatRouteKey: i.currentChatRouteKey,
        currentChatSessionId: i.currentChatSessionId
      })
    })
  }
  e.s(["approvalMatchesComposerRoute", 0, function(e, t, n, r = {}) {
    if (null == t || "draft" === t.kind || "invalid_thread" === t.kind) return !1;
    let l = e.scope?.threadId ?? null;
    if (null != l) {
      let s = i(t, r.currentChatSessionId, r.currentChatRouteKey);
      return null != s ? l === s : null != e.rootAgentId && a(e.rootAgentId, t, n, r)
    }
    if (null != e.rootAgentId) return a(e.rootAgentId, t, n, r);
    let s = e.sessionScopeId;
    return "thread" === t.kind ? s === t.sessionId : null == s
  }, "approvalSnapshotScope", 0, l, "approvalsToSnapshotPendingApprovalBackgroundOnly", 0, function(e) {
    let t = {};
    for (let n of e) {
      let e = n.serverPresentation?.attentionMode;
      null != e && (t[n.approvalId] = "background" === e)
    }
    return t
  }, "approvalsToSnapshotPendingApprovalScopes", 0, function(e) {
    let t = {};
    for (let n of e) t[n.approvalId] = l(n);
    return t
  }, "getComposerSessionIdForRoute", 0, i, "hasBackgroundApprovalForChatRoute", 0, function(e, t, n, r = {}) {
    return u(e, t, n, "background", r)
  }, "hasBlockingApprovalForChatRoute", 0, function(e, t, n, r = {}) {
    return u(e, t, n, "foreground", r)
  }, "hasForegroundApprovalForUnknownTargetRoute", 0, function(e, n = {}) {
    let r = n.snapshotPendingApprovalsById;
    if (null != r) {
      for (let [a, i] of Object.entries(r)) {
        if (n.resolvedApprovalIdsById?.[a] === !0) continue;
        let r = n.snapshotPendingApprovalBackgroundOnlyById?.[a];
        if (!0 !== r && (!1 === r || (null == i || 0 === i.length ? e[t.PENDING_APPROVAL_SNAPSHOT_KEY] : e[i]) !== t.BACKGROUND_PENDING_APPROVAL_STATUS)) return !0
      }
      return !1
    }
    return !0 !== n.requireSnapshotMatch && Object.values(e).some(e => e === t.BLOCKING_PENDING_APPROVAL_STATUS)
  }, "hasPendingApprovalForAnyComposer", 0, function(e, n = {}) {
    return Object.entries(e).some(([e, r]) => {
      if (!(0, t.isPendingApprovalStatus)(r)) return !1;
      let a = function(e) {
        let {
          includeTasklessSnapshotKey: n,
          resolvedApprovalIdsById: r,
          snapshotPendingApprovalsById: a,
          taskId: i
        } = e;
        if (i === t.PENDING_APPROVAL_SNAPSHOT_KEY && null == a) return n;
        if (null == a) return null;
        let l = !1;
        for (let [e, n] of Object.entries(a))
          if (r?.[e] !== !0 && (i === t.PENDING_APPROVAL_SNAPSHOT_KEY ? null == n || 0 === n.length : n === i)) return l = !0, !0;
        return !l && null
      }({
        includeTasklessSnapshotKey: e === t.PENDING_APPROVAL_SNAPSHOT_KEY,
        resolvedApprovalIdsById: n.resolvedApprovalIdsById,
        snapshotPendingApprovalsById: n.snapshotPendingApprovalsById,
        taskId: e
      });
      return null != a ? a : !0 !== n.requireSnapshotMatch && e !== t.PENDING_APPROVAL_SNAPSHOT_KEY
    })
  }, "isBackgroundOnlyComposerApproval", 0, function(e, n, r) {
    let a = e.serverPresentation?.attentionMode;
    if (null != a) return "background" === a;
    let i = null == e.taskId ? null : n[e.taskId] ?? null,
      l = null == e.taskId ? null : r[e.taskId] ?? null;
    return null != l ? l === t.BACKGROUND_PENDING_APPROVAL_STATUS : i === t.BACKGROUND_PENDING_APPROVAL_STATUS
  }])
}, 177649, e => {
  "use strict";
  var t = e.i(9326);
  let n = "/videos/avatars/hatch.mp4",
    r = new Set(["/videos/avatars/hatch.mp4", "/videos/avatars/hatch_working.mp4", "/videos/avatars/hatch_making_something.mp4"]),
    a = "/images/avatars/hatch.jpg",
    i = "/videos/avatars/hatch_milestone_level_up.mp4",
    l = {
      default: {
        kind: "video",
        src: n
      },
      connecting: {
        kind: "video",
        src: n
      },
      resume: {
        kind: "video",
        src: n
      },
      working: {
        kind: "video",
        src: "/videos/avatars/hatch_working.mp4"
      },
      making_something: {
        kind: "video",
        src: "/videos/avatars/hatch_making_something.mp4"
      },
      waiting_for_subagents: {
        kind: "video",
        src: "/videos/avatars/hatch_working.mp4"
      },
      milestone: {
        kind: "video",
        src: i
      }
    };
  e.s(["BUILT_IN_HATCH_AVATAR_VIDEO_SRCS", 0, r, "DEFAULT_HATCH_AVATAR_IMAGE", 0, a, "DEFAULT_HATCH_AVATAR_VIDEO", 0, n, "DEFAULT_HATCH_MILESTONE_ACHIEVEMENT_VIDEO", 0, "/videos/avatars/hatch_milestone_achievement.mp4", "DEFAULT_HATCH_MILESTONE_LEVEL_UP_VIDEO", 0, i, "getBaseHatchAvatarVisualState", 0, function(e, t, n = !1) {
    if (n) return "resume";
    switch (e.phase) {
      case "connected":
        switch (t) {
          case null:
          case "online":
          default:
            return "default";
          case "responding":
          case "composing":
          case "working":
          case "waiting_for_subagents":
          case "compacting":
            return "working";
          case "making_something":
            return "making_something";
          case "waiting_for_user":
          case "needs_approval":
          case "out_of_credits":
            return "static"
        }
      case "connecting":
      case "reconnecting":
        return "default";
      case "unavailable":
        return "no_vm" === e.reason ? "default" : "static";
      default:
        return e.phase, "static"
    }
  }, "resolveLoopingHatchAvatarMedia", 0, function e(n, r) {
    if ("resume" === n && (null == r.videoUrlsByVariant.resume || r.videoUrlsByVariant.resume === r.videoUrlsByVariant.default)) return e("default", r);
    for (let e of (0, t.getHatchAvatarVariantFallbackOrder)(n)) {
      let t = r.videoUrlsByVariant[e];
      if (t) return {
        key: `video:${e}:${t}`,
        kind: "video",
        src: t,
        loop: !0,
        resolvedVariant: e
      }
    }
    if (r.imageUrl) return {
      key: `image:${r.imageUrl}`,
      kind: "image",
      src: r.imageUrl,
      resolvedVariant: n
    };
    let a = l[n];
    return "image" === a.kind ? {
      key: `image:fallback:${n}:${a.src}`,
      kind: "image",
      src: a.src,
      resolvedVariant: n
    } : {
      key: `video:fallback:${n}:${a.src}`,
      kind: "video",
      src: a.src,
      loop: !0,
      resolvedVariant: n
    }
  }, "resolveMilestoneMedia", 0, function(e) {
    let t = e ?? i;
    return {
      key: `video:milestone:${t}`,
      kind: "video",
      src: t,
      loop: !1,
      resolvedVariant: "default"
    }
  }, "resolveStaticHatchAvatarMedia", 0, function(e) {
    if (null != e.imageUrl) return {
      key: `image:${e.imageUrl}`,
      kind: "image",
      src: e.imageUrl,
      resolvedVariant: "default"
    };
    for (let n of t.HATCH_AVATAR_VARIANTS) {
      if ("resume" === n) continue;
      let t = e.videoUrlsByVariant[n];
      if (null != t) return {
        key: `video:static-fallback:${n}:${t}`,
        kind: "video",
        src: t,
        loop: !1,
        resolvedVariant: n
      }
    }
    return {
      key: `image:fallback:static:${a}`,
      kind: "image",
      src: a,
      resolvedVariant: "default"
    }
  }])
}, 91521, e => {
  "use strict";
  var t = e.i(55473),
    n = e.i(826972);

  function r(e) {
    let t = e?.trim();
    return null != t && t.length > 0 ? t : void 0
  }

  function a(e, i = !1) {
    let l, s = r(e);
    if (null != s && null == (0, t.getHatchDirectMediaSource)(s)) {
      if (s.startsWith("sandbox://") || /^\/?workspace\//.test(s)) {
        let e = (0, t.getHatchMediaFetchPath)(s);
        if (null == e) return;
        l = e
      } else l = s;
      return i ? (0, n.resolveHatchGatewayUrlPath)(l)?.path ?? void 0 : l
    }
  }

  function i(e) {
    let t = r(e);
    if (null == t) return;
    let n = ((function(e) {
      try {
        return decodeURIComponent(e)
      } catch {
        return e
      }
    })(t).split(/[?#]/)[0] ?? t).split(/[\\/]/).pop();
    return null != n && n.length > 0 ? n : void 0
  }

  function l(e) {
    let t = r(e);
    if (!(null == t || t.startsWith("data:") || t.startsWith("blob:"))) {
      if (t.startsWith("sandbox://")) return i(t.slice(10));
      try {
        let e = new URL(t),
          n = e.searchParams.get("path");
        if (n) return i(n);
        let r = i(e.pathname);
        return "fileserver-read" === r ? void 0 : r
      } catch {
        return i(t)
      }
    }
  }

  function s({
    kind: e,
    path: t,
    filename: n,
    media: i,
    pathUrlEncoded: o,
    originalFallback: u,
    thumbnailFallback: c
  }) {
    let d = r(u),
      h = r(c),
      f = {
        ...null != d ? {
          original: d
        } : {},
        ...null != h ? {
          thumbnail: h
        } : {}
      };
    if (null == r(f.original) && null == r(f.thumbnail)) return null;
    let p = a(t, o) ?? a(i?.path),
      m = r(n) ?? l(t) ?? l(i?.path);
    return {
      kind: e,
      ...null != p ? {
        path: p
      } : {},
      ...null != m ? {
        filename: m
      } : {},
      variants: f
    }
  }
  e.s(["areHatchMediaItemsEqual", 0, function(e, t) {
    return e === t || (null == e || null == t ? null == e && null == t : e.kind === t.kind && e.path === t.path && e.filename === t.filename && e.originalSource === t.originalSource && e.originalSourceUrlEncoded === t.originalSourceUrlEncoded && e.variants.original === t.variants.original && e.variants.thumbnail === t.variants.thumbnail)
  }, "chatMessageFileToMediaItem", 0, function(e, t, n) {
    let r = e.media?.kind === "image" || e.media?.kind === "video" ? e.media.kind : "video" === e.category || e.mimeType.startsWith("video/") ? "video" : "image";
    return s({
      kind: r,
      path: e.path,
      filename: e.filename,
      media: e.media,
      originalFallback: t ?? ("image" === r ? e.previewUrl : null),
      thumbnailFallback: n ?? e.previewUrl ?? t
    })
  }, "fileDialogMediaToMediaItem", 0, function({
    kind: e,
    filePath: t,
    fileName: n,
    media: r,
    resolvedFallback: a,
    posterFallback: i
  }) {
    return s({
      kind: e,
      path: t,
      filename: n ?? l(t),
      media: r,
      originalFallback: a,
      thumbnailFallback: i ?? ("image" === e ? a : null)
    })
  }, "getHatchMediaItemRenderSrc", 0, function(e, t) {
    if (null == e) return null;
    let n = "thumbnail" === t ? e.variants.thumbnail : e.variants.original,
      a = "thumbnail" === t ? e.variants.original : e.variants.thumbnail;
    return r(n) ?? r(a) ?? null
  }, "markdownImageToMediaItem", 0, function(e, t, n, r) {
    let a = s({
      kind: "image",
      path: e,
      pathUrlEncoded: r?.sourcePathUrlEncoded,
      filename: l(e),
      media: t,
      originalFallback: n,
      thumbnailFallback: n
    });
    return null == a ? null : {
      ...a,
      originalSource: e,
      ...r?.sourcePathUrlEncoded === !0 ? {
        originalSourceUrlEncoded: !0
      } : {}
    }
  }, "markdownVideoToMediaItem", 0, function(e, t, n, r) {
    let a = s({
      kind: "video",
      path: e,
      filename: l(e),
      media: t,
      originalFallback: n,
      thumbnailFallback: r
    });
    return null == a ? null : {
      ...a,
      originalSource: e
    }
  }])
}, 134348, e => {
  "use strict";
  let t = "__pending_approval__",
    n = "pending_user_confirmation",
    r = "background_pending_user_confirmation",
    a = new Set(["user_confirmed", "user_denied", "resumed_after_confirmation"]),
    i = new Set([n, r]);

  function l(e) {
    return a.has(e)
  }

  function s(e) {
    return i.has(e)
  }

  function o(e, t) {
    return Object.values(e).some(e => e === t)
  }

  function u(e, t, n) {
    return Object.entries(e).some(([e, r]) => r === n && !0 !== t[e])
  }
  e.s(["APPROVAL_RESOLUTION_GRACE_MS", 0, 5e3, "BACKGROUND_PENDING_APPROVAL_STATUS", 0, r, "BLOCKING_PENDING_APPROVAL_STATUS", 0, n, "PENDING_APPROVAL_SNAPSHOT_KEY", 0, t, "applyLiveApprovalTaskScope", 0, function(e) {
    let {
      liveTaskScopesByTaskId: t,
      scope: n,
      status: r,
      taskId: a
    } = e;
    if (s(r)) {
      let e = t[a];
      return e?.sessionId === n.sessionId && e.isThread === n.isThread && (e.threadId ?? null) === (n.threadId ?? null) && (e.rootAgentId ?? null) === (n.rootAgentId ?? null) ? t : {
        ...t,
        [a]: n
      }
    }
    if (null == t[a]) return t;
    let i = {
      ...t
    };
    return delete i[a], i
  }, "applyLiveApprovalTaskStatus", 0, function(e) {
    let {
      liveTaskStatusesByTaskId: t,
      resolvedTaskGraceUntilByTaskId: n,
      taskId: r,
      status: a,
      now: i
    } = e;
    if (s(a)) {
      if (t[r] === a && null == n[r]) return {
        liveTaskStatusesByTaskId: t,
        resolvedTaskGraceUntilByTaskId: n
      };
      let e = {
          ...t
        },
        i = {
          ...n
        };
      return e[r] = a, delete i[r], {
        liveTaskStatusesByTaskId: e,
        resolvedTaskGraceUntilByTaskId: i
      }
    }
    if (l(a)) {
      let e = n[r];
      if (t[r] === a && null != e && e > i) return {
        liveTaskStatusesByTaskId: t,
        resolvedTaskGraceUntilByTaskId: n
      };
      let l = {
          ...t
        },
        s = {
          ...n
        };
      return l[r] = a, s[r] = i + 5e3, {
        liveTaskStatusesByTaskId: l,
        resolvedTaskGraceUntilByTaskId: s
      }
    }
    if (null == t[r] && null == n[r]) return {
      liveTaskStatusesByTaskId: t,
      resolvedTaskGraceUntilByTaskId: n
    };
    let o = {
        ...t
      },
      u = {
        ...n
      };
    return delete o[r], delete u[r], {
      liveTaskStatusesByTaskId: o,
      resolvedTaskGraceUntilByTaskId: u
    }
  }, "approvalsToSnapshotPendingApprovalRequestedAtMs", 0, function(e) {
    let t = {};
    for (let n of e) t[n.approvalId] = Number.isFinite(n.requestedAtMs) && n.requestedAtMs > 0 ? n.requestedAtMs : null;
    return t
  }, "approvalsToSnapshotPendingApprovals", 0, function(e) {
    let t = {};
    for (let n of e) t[n.approvalId] = n.taskId;
    return t
  }, "countPendingApprovalNotifications", 0, function(e) {
    let a = new Set,
      i = new Set,
      l = 0;
    for (let [r, o] of Object.entries(e.snapshotPendingApprovalsById))
      if (!0 !== e.resolvedApprovalIdsById[r]) {
        if (null != o && o.length > 0 && i.add(o), null == o || 0 === o.length) {
          (e.taskStatusesByTaskId[t] ?? "") === n && (l += 1);
          continue
        }
        s(e.taskStatusesByTaskId[o] ?? "") && (a.add(o), l += 1)
      } for (let [n, o] of Object.entries(e.taskStatusesByTaskId))
      if (!(n === t || a.has(n) || i.has(n)) && s(o)) {
        if (o === r && !i.has(n)) continue;
        l += 1
      } return l
  }, "derivePendingApprovalTaskStatuses", 0, function(e) {
    let {
      liveTaskStatusesByTaskId: a,
      snapshotPendingApprovalsById: i,
      resolvedApprovalIdsById: l,
      resolvedTaskGraceUntilByTaskId: c,
      now: d,
      mode: h
    } = e, f = {}, p = !1;
    for (let [e, t] of Object.entries(i)) {
      if (!0 === l[e]) continue;
      if (null == t || 0 === t.length) {
        p = !0;
        continue
      }
      let r = a[t],
        i = c[t] ?? 0,
        o = !s(r ?? "") && i > d;
      "background" === h && o || (f[t] = s(r ?? "") ? r : n)
    }
    for (let [e, t] of Object.entries(a)) {
      if (s(t)) {
        if (t === r && !u(i, l, e)) continue;
        f[e] = t;
        continue
      }
      let n = c[e] ?? 0,
        a = "blocking" === h && o(i, e);
      n > d && !a && delete f[e]
    }
    return p && (f[t] = n), f
  }, "hasSnapshotPendingTaskId", 0, o, "hasUnresolvedSnapshotPendingTaskId", 0, u, "isPendingApprovalStatus", 0, s, "pruneExpiredResolvedTaskGraceUntil", 0, function(e, t) {
    let n = {};
    for (let [r, a] of Object.entries(e)) a > t && (n[r] = a);
    return n
  }, "retainLiveApprovalTaskScopes", 0, function(e, t) {
    let n = e ?? {},
      r = n;
    for (let e of Object.keys(n)) null == t[e] && (r === n && (r = {
      ...n
    }), delete r[e]);
    return r
  }, "retainResolvedApprovalIdsPresentInSnapshot", 0, function(e, t) {
    let n = {};
    for (let r of Object.keys(e)) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = !0);
    return n
  }, "sameApprovalTaskScopeRecord", 0, function(e, t) {
    let n = e ?? {},
      r = t ?? {},
      a = Object.keys(n),
      i = Object.keys(r);
    return a.length === i.length && a.every(e => {
      let t = n[e],
        a = r[e];
      return null != t && null != a && t.sessionId === a.sessionId && t.isThread === a.isThread && (t.threadId ?? null) === (a.threadId ?? null) && (t.rootAgentId ?? null) === (a.rootAgentId ?? null)
    })
  }, "sameRecord", 0, function(e, t) {
    let n = Object.keys(e),
      r = Object.keys(t);
    return n.length === r.length && n.every(n => e[n] === t[n])
  }, "shouldRetainLivePendingAfterSnapshotMiss", 0, function(e, t) {
    return "blocking" === t ? e <= 2 : e < 2
  }, "shouldStartApprovalResolutionGrace", 0, l])
}, 476467, 386048, e => {
  "use strict";
  var t = e.i(359783),
    n = e.i(681875);
  let r = "hatch:pin-reminder:v1:",
    a = /^[0-9]+$/;
  class i extends Error {
    constructor(e) {
      super(e), this.name = "PinReminderCryptoError"
    }
  }
  async function l(e) {
    let t = await crypto.subtle.deriveBits({
      name: "HKDF",
      hash: "SHA-256",
      salt: new Uint8Array(0),
      info: new TextEncoder().encode("hatch:pin-reminder:key:v1")
    }, e, 256);
    try {
      return await crypto.subtle.importKey("raw", t, "AES-GCM", !1, ["encrypt", "decrypt"])
    } finally {
      new Uint8Array(t).fill(0)
    }
  }
  async function s(e) {
    let t = function(e) {
      if (!a.test(e)) throw new i("PIN must be ASCII digits");
      let t = new Uint8Array(e.length);
      for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
      return t
    }(e);
    try {
      let e = await crypto.subtle.digest("SHA-256", t.buffer);
      return new Uint8Array(e)
    } finally {
      t.fill(0)
    }
  }
  async function o(e, t, n) {
    let a = await s(t),
      o = null != n ? new Uint8Array(n) : crypto.getRandomValues(new Uint8Array(12));
    if (12 !== o.length) throw new i("PIN reminder nonce must be 12 bytes");
    let u = await l(e),
      c = new Uint8Array(await crypto.subtle.encrypt({
        name: "AES-GCM",
        iv: o,
        tagLength: 128
      }, u, a.buffer));
    a.fill(0);
    let d = new Uint8Array(o.length + c.length);
    return d.set(o, 0), d.set(c, o.length), `${r}${function(e){let t="";for(let n of e)t+=String.fromCharCode(n);return btoa(t)}(d)}`
  }
  async function u(e, t) {
    let n, a;
    if (!t.startsWith(r)) throw new i("Unsupported PIN reminder envelope version");
    try {
      n = function(e) {
        let t = atob(e),
          n = new Uint8Array(t.length);
        for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
        return n
      }(t.slice(r.length))
    } catch {
      throw new i("PIN reminder envelope is not valid Base64")
    }
    if (60 !== n.length) throw new i("PIN reminder envelope has the wrong length");
    let s = await l(e);
    try {
      a = await crypto.subtle.decrypt({
        name: "AES-GCM",
        iv: n.slice(0, 12),
        tagLength: 128
      }, s, n.slice(12).buffer)
    } catch {
      throw new i("PIN reminder envelope failed authentication")
    }
    if (32 !== a.byteLength) throw new i("PIN reminder verifier has the wrong length");
    return new Uint8Array(a)
  }
  async function c(e, t, n) {
    let r = await u(e, t),
      a = await s(n);
    try {
      if (r.length !== a.length) return !1;
      let e = 0;
      for (let t = 0; t < r.length; t++) e |= r[t] ^ a[t];
      return 0 === e
    } finally {
      r.fill(0), a.fill(0)
    }
  }
  e.s(["PinReminderCryptoError", 0, i, "decryptPinVerifier", 0, u, "encryptPinVerifier", 0, o, "verifyPinAgainstEnvelope", 0, c], 386048);
  var d = e.i(863641);
  let h = (0, t.createClientLogger)("HatchPinReminderOutbox"),
    f = null;
  async function p(e, t) {
    try {
      let r = await (0, n.readCvmRecoveryKey)();
      if (null == r) return h.retainForBugReport("debug", "No cached recovery key — skipping PIN verifier update"), !1;
      return f = {
        update_id: crypto.randomUUID(),
        encrypted_pin_verifier: await o(r, e),
        last_successful_entry_at_ms: Date.now(),
        reason: t
      }, !0
    } catch (e) {
      return h.error({
        error: e instanceof Error ? e : Error(String(e)),
        tags: (0, d.hatchSentryTags)(d.HATCH_SENTRY_SURFACES.CVM_PIN_REMINDER)
      }, "Failed to seal PIN verifier for update"), !1
    }
  }
  e.s(["peekQueuedPinVerifierUpdate", 0, function() {
    return f
  }, "queuePinVerifierUpdate", 0, p, "takeQueuedPinVerifierUpdate", 0, function() {
    let e = f;
    return f = null, e
  }], 476467)
}, 498054, e => {
  "use strict";
  var t = e.i(790170);
  let n = ["nodes"];
  async function r(e) {
    let t = await e("node.list", {});
    return {
      nodes: t.nodes ?? t.devices ?? []
    }
  }
  let a = (0, t.createGatewayQuery)({
    id: "node.list",
    queryKey: ({
      gatewayUrl: e
    }) => ["nodes", "list", e],
    noiseFn: e => r(e.sendRequest),
    invalidationKey: () => n,
    staleTime: 3e4
  });
  e.s(["nodeListQuery", 0, a])
}, 157139, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(519172);
  let r = (0, n.createContext)(null),
    a = (0, n.createContext)(null),
    i = (0, n.createContext)(null);
  e.s(["HatchContentShareContext", 0, r, "HatchMessageShareSourceContext", 0, a, "HatchPresentationMediaShareSourcesContext", 0, i, "useHatchContentShare", 0, function() {
    return (0, n.useContext)(r)
  }, "useHatchMessageShareSource", 0, function() {
    let e, r = (0, t.c)(2),
      i = (0, n.useContext)(a);
    return r[0] !== i ? (e = null != i && i.startsWith("assistant-msg-") && i.length > 14 && !/\s/.test(i) ? i : null, r[0] = i, r[1] = e) : e = r[1], e
  }])
}, 999498, 947643, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(519172),
    r = e.i(170525);

  function a(e) {
    return "unavailable" === e.kind ? null : `${e.kind}:${e.targetIdeaId}`
  }
  e.s(["createHatchIdeaShareRetirementStore", 0, function() {
    let e = new Set,
      t = new Map,
      n = new Map,
      a = new Map,
      i = new Map,
      l = null;

    function s() {
      for (let t of e) t()
    }
    return {
      subscribe: t => (e.add(t), () => {
        e.delete(t)
      }),
      observe(e, n) {
        let r = t.get(e) ?? new Map;
        t.set(e, r), r.set(n, (r.get(n) ?? 0) + 1);
        let a = !0;
        return () => {
          if (!a) return;
          a = !1;
          let i = (r.get(n) ?? 0) - 1;
          i > 0 ? r.set(n, i) : (r.delete(n), 0 === r.size && t.get(e) === r && t.delete(e))
        }
      },
      retire(e, o) {
        a.set(e, (a.get(e) ?? 0) + 1);
        let u = n.get(e) ?? new Set,
          c = u.size;
        for (let n of (u.add(o), t.get(e)?.keys() ?? [])) u.add(n);
        u.size !== c && (n.set(e, u), s()),
          function e(t) {
            let o, u = l;
            if (null == u || i.has(t)) return;
            let c = {};
            i.set(t, c);
            let d = a.get(t) ?? 0,
              h = r => {
                if (l === u && i.get(t) === c) {
                  if (i.delete(t), (a.get(t) ?? 0) !== d) return void e(t);
                  r && n.delete(t) && s()
                }
              };
            try {
              o = u.recheck(t)
            } catch (e) {
              o = Promise.reject(e)
            }
            o.then(e => h(null != e && (0, r.isHatchIdeaShareable)(e)), () => h(!1))
          }(e)
      },
      isRetired: (e, t) => n.get(e)?.has(t) ?? !1,
      connect(e) {
        let t = {
          recheck: e
        };
        return l = t, i.clear(), () => {
          l === t && (l = null, i.clear())
        }
      }
    }
  }, "hatchIdeaShareRevision", 0, a], 947643);
  let i = (0, n.createContext)(null),
    l = (0, n.createContext)(null);

  function s() {
    return () => {}
  }

  function o() {}

  function u() {
    return !1
  }
  e.s(["HatchIdeaShareContext", 0, i, "HatchIdeaShareRetirementContext", 0, l, "useHatchIdeaShare", 0, function() {
    return (0, n.useContext)(i)
  }, "useIsHatchIdeaShareRetired", 0, function(e, r) {
    let i, o, c, d, h = (0, t.c)(11),
      f = (0, n.useContext)(l);
    h[0] !== r ? (i = a(r), h[0] = r, h[1] = i) : i = h[1];
    let p = i;
    return h[2] !== e || h[3] !== p || h[4] !== f ? (o = () => {
      if (null != f && null != p) return f.observe(e, p)
    }, c = [f, e, p], h[2] = e, h[3] = p, h[4] = f, h[5] = o, h[6] = c) : (o = h[5], c = h[6]), (0, n.useEffect)(o, c), h[7] !== e || h[8] !== p || h[9] !== f ? (d = () => null != f && null != p && f.isRetired(e, p), h[7] = e, h[8] = p, h[9] = f, h[10] = d) : d = h[10], (0, n.useSyncExternalStore)(f?.subscribe ?? s, d, u)
  }, "useRetireHatchIdeaShare", 0, function() {
    return (0, n.useContext)(l)?.retire ?? o
  }], 999498)
}, 321427, 929269, 448673, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(345717),
    a = e.i(295967),
    i = e.i(374785),
    l = e.i(255859),
    s = e.i(581386),
    o = e.i(598747),
    u = e.i(281539),
    c = e.i(863641),
    d = e.i(481349),
    h = e.i(916981);

  function f(e) {
    let a, i, f, p, m, g, v = (0, n.c)(16),
      {
        card: S,
        children: _,
        ideaCardId: A,
        onCopy: C,
        shareUrl: I
      } = e,
      y = (0, h.useHatchShareLinkDialogPresentation)();
    v[0] === Symbol.for("react.memo_cache_sentinel") ? (a = r.fbs._("Try this idea on {product}!", [r.fbs._param("product", l.PRODUCT_BRAND.shortName)], {
      hk: "2Pfx0c"
    }), v[0] = a) : a = v[0];
    let b = a;
    return v[1] !== S ? (i = (0, t.jsx)("div", {
      className: d.HATCH_IDEA_SHARE_PREVIEW_CLASS,
      children: S
    }), v[1] = S, v[2] = i) : i = v[2], v[3] !== y ? (f = (0, d.hatchIdeaShareDestinations)(y), v[3] = y, v[4] = f) : f = v[4], v[5] !== A ? (p = e => ({
      eventName: u.HatchClickEvent.IDEA_SHARE_DESTINATION_CLICK,
      actionTarget: "idea_share_destination",
      actionType: "click",
      metadata: {
        destination: e,
        idea_id: A,
        surface: "idea_share"
      }
    }), v[5] = A, v[6] = p) : p = v[6], v[7] !== C || v[8] !== I || v[9] !== f || v[10] !== p ? (m = (0, t.jsx)(o.HatchShareTray, {
      destinations: f,
      getTracking: p,
      onCopy: C,
      sentrySurface: c.HATCH_SENTRY_SURFACES.IDEAS_SHARE,
      shareText: b,
      shareUrl: I
    }), v[7] = C, v[8] = I, v[9] = f, v[10] = p, v[11] = m) : m = v[11], v[12] !== _ || v[13] !== i || v[14] !== m ? (g = (0, t.jsx)(s.HatchShareDialogBody, {
      layout: "idea",
      preview: i,
      actions: m,
      children: _
    }), v[12] = _, v[13] = i, v[14] = m, v[15] = g) : g = v[15], g
  }
  e.s(["HatchIdeaShareDialogLayout", 0, f], 929269);
  var p = e.i(832964),
    m = e.i(239286),
    g = e.i(503367);

  function v(e) {
    let r, a, i = (0, n.c)(3),
      {
        children: l
      } = e;
    return i[0] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)("img", {
      src: d.HATCH_IDEA_SHARE_PLACEHOLDER_SRC,
      alt: "",
      "aria-hidden": "true",
      width: g.MUSE_SOCIAL_IMAGE_WIDTH,
      height: g.MUSE_SOCIAL_IMAGE_HEIGHT,
      className: "block h-auto w-full"
    }), i[0] = r) : r = i[0], i[1] !== l ? (a = (0, t.jsxs)("div", {
      className: d.HATCH_IDEA_SHARE_CARD_CLASS,
      children: [r, l]
    }), i[1] = l, i[2] = a) : a = i[2], a
  }

  function S() {
    let e, r, a = (0, n.c)(2);
    return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(p.Skeleton, {
      className: "absolute inset-0",
      strength: "light"
    }), a[0] = e) : e = a[0], a[1] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsxs)("div", {
      "aria-hidden": "true",
      "data-testid": "idea-share-preparing",
      className: "pointer-events-none absolute inset-0 flex items-center justify-center motion-reduce:[&_*]:!animate-none",
      children: [e, (0, t.jsx)("div", {
        className: "bg-fill-primary shadow-blur-elevation-01 relative rounded-full p-3",
        children: (0, t.jsx)(m.Spinner, {
          size: 24,
          isDecorative: !0
        })
      })]
    }), a[1] = r) : r = a[1], r
  }

  function _() {}

  function A(e) {
    let l, s, o, u, c = (0, n.c)(7),
      {
        announcesLoading: h
      } = e;
    c[0] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, i.cn)(d.HATCH_IDEA_SHARE_CARD_CLASS, "motion-reduce:[&_*]:!animate-none"), c[0] = l) : l = c[0];
    let f = h ? "status" : void 0;
    return c[1] !== h ? (s = h ? r.fbs._("Loading idea preview", null, {
      hk: "1VLWF3"
    }) : void 0, c[1] = h, c[2] = s) : s = c[2], c[3] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)(v, {
      children: (0, t.jsx)(S, {})
    }), c[3] = o) : o = c[3], c[4] !== f || c[5] !== s ? (u = (0, t.jsx)(a.LoadingState, {
      name: "idea_share_create",
      className: l,
      children: (0, t.jsx)("div", {
        role: f,
        "aria-label": s,
        "aria-busy": "true",
        children: o
      })
    }), c[4] = f, c[5] = s, c[6] = u) : u = c[6], u
  }
  e.s(["HatchIdeaSharePreviewFrame", 0, v, "HatchIdeaSharePreviewPreparing", 0, S], 448673), e.s(["HatchIdeaShareDialogSkeleton", 0, function(e) {
    let r, a, i = (0, n.c)(3),
      {
        ideaCardId: l
      } = e;
    return i[0] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)(A, {
      announcesLoading: !0
    }), i[0] = r) : r = i[0], i[1] !== l ? (a = (0, t.jsx)(f, {
      ideaCardId: l,
      card: r,
      shareUrl: null,
      onCopy: _
    }), i[1] = l, i[2] = a) : a = i[2], a
  }, "HatchIdeaSharePreviewSkeleton", 0, A], 321427)
}, 25527, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(345717),
    r = e.i(722099),
    a = e.i(581386),
    i = e.i(598747),
    l = e.i(281539),
    s = e.i(863641);
  e.s(["HatchMediaShareDialogLayout", 0, function(e) {
    let o, u, c, d = (0, r.c)(13),
      {
        children: h,
        onCopy: f,
        preview: p,
        shareUrl: m,
        source: g,
        isBlocked: v
      } = e,
      S = void 0 !== v && v;
    return d[0] !== S || d[1] !== g ? (o = S ? (0, t.jsx)("p", {
      role: "alert",
      children: n.fbt._("This content may contain personal details about other people and can't be shared.", null, {
        hk: "3Uq99g"
      })
    }) : "message" === g ? n.fbt._("Anyone who has the link will be able to see this message.", null, {
      hk: "4rQbWh"
    }) : n.fbt._("Anyone who has the link will be able to see this media.", null, {
      hk: "1AhWX0"
    }), d[0] = S, d[1] = g, d[2] = o) : o = d[2], d[3] !== S || d[4] !== f || d[5] !== m || d[6] !== g ? (u = S ? null : (0, t.jsx)(i.HatchShareTray, {
      layout: "dialog",
      getTracking: e => ({
        eventName: "copy_link" === e ? l.HatchClickEvent.MEDIA_SHARE_COPY_LINK : l.HatchClickEvent.MEDIA_SHARE_DESTINATION_CLICK,
        actionTarget: "copy_link" === e ? "media_share_copy_link" : `media_share_destination_${e}`,
        actionType: "click",
        metadata: {
          surface: "media_share",
          subsurface: "create",
          source: g,
          destination: e
        }
      }),
      onCopy: f,
      sentrySurface: s.HATCH_SENTRY_SURFACES.MEDIA_SHARE_CREATE,
      shareUrl: m
    }), d[3] = S, d[4] = f, d[5] = m, d[6] = g, d[7] = u) : u = d[7], d[8] !== h || d[9] !== p || d[10] !== o || d[11] !== u ? (c = (0, t.jsx)(a.HatchShareDialogBody, {
      layout: "media",
      preview: p,
      description: o,
      actions: u,
      children: h
    }), d[8] = h, d[9] = p, d[10] = o, d[11] = u, d[12] = c) : c = d[12], c
  }, "MEDIA_SHARE_PREVIEW_CLASS", 0, "bg-bg-primary rounded-32 shadow-blur-elevation-03 relative flex aspect-square w-full max-w-83 items-center justify-center overflow-hidden"])
}, 481349, e => {
  "use strict";
  let t = e.i(773861).HATCH_SHARE_TRAY_DEFAULT_DESTINATIONS,
    n = ["share", ...t];
  e.s(["HATCH_IDEA_SHARE_CARD_CLASS", 0, "relative w-full", "HATCH_IDEA_SHARE_PLACEHOLDER_SRC", 0, "/images/sharing/idea-og-placeholder.png", "HATCH_IDEA_SHARE_PREVIEW_CLASS", 0, "w-full", "hatchIdeaShareDestinations", 0, function(e) {
    return "sheet" === e ? n : t
  }])
}, 916981, e => {
  "use strict";
  var t = e.i(519172);
  let n = (0, t.createContext)("dialog");
  e.s(["HatchShareLinkDialogPresentationContext", 0, n, "useHatchShareLinkDialogPresentation", 0, function() {
    return (0, t.useContext)(n)
  }])
}, 672495, 279188, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(68426),
    r = e.i(984416),
    a = e.i(519172),
    i = e.i(508180);
  let l = a.createContext(null);

  function s() {
    return a.useContext(l) ?? (0, i.getActiveHatchStore)()
  }

  function o(e, t) {
    let r = s();
    return (0, n.useStoreWithEqualityFn)(r, e, t)
  }

  function u(e) {
    return e.activeSession
  }
  e.s(["HatchStoreProvider", 0, function({
    children: e,
    initialState: t,
    scopeKey: n = "default"
  }) {
    let s = a.useMemo(() => (0, i.createHatchStore)(t), [n]);
    return a.useLayoutEffect(() => ((0, i.setActiveHatchStore)(s), () => {
      s !== (0, i.getDefaultHatchStore)() && ((0, i.disposeHatchStore)(s), (0, i.setActiveHatchStore)((0, i.getDefaultHatchStore)()))
    }), [n, s]), (0, r.jsx)(l.Provider, {
      value: s,
      children: e
    })
  }, "useHatchStoreApi", 0, s], 279188), e.s(["useActiveBrowserSession", 0, function() {
    let e, n;
    return (n = (0, t.c)(2))[0] !== u ? (e = e => u(e.browserPanel), n[0] = u, n[1] = e) : e = n[1], o(e, void 0)
  }, "useHatchActivitySelector", 0, function(e, n) {
    let r, a = (0, t.c)(2);
    return a[0] !== e ? (r = t => e(t.activity), a[0] = e, a[1] = r) : r = a[1], o(r, n)
  }, "useHatchAudioPlayerSelector", 0, function(e, n) {
    let r, a = (0, t.c)(2);
    return a[0] !== e ? (r = t => e(t.audioPlayer), a[0] = e, a[1] = r) : r = a[1], o(r, n)
  }, "useHatchAvatarSelector", 0, function(e, n) {
    let r, a = (0, t.c)(2);
    return a[0] !== e ? (r = t => e(t.avatar), a[0] = e, a[1] = r) : r = a[1], o(r, n)
  }, "useHatchChatSelector", 0, function(e, n) {
    let r, a = (0, t.c)(2);
    return a[0] !== e ? (r = t => e(t.chat), a[0] = e, a[1] = r) : r = a[1], o(r, n)
  }, "useHatchComposerSelector", 0, function(e, n) {
    let r, a = (0, t.c)(2);
    return a[0] !== e ? (r = t => e(t.composer), a[0] = e, a[1] = r) : r = a[1], o(r, n)
  }, "useHatchDeviceContextSelector", 0, function(e, n) {
    let r, a = (0, t.c)(2);
    return a[0] !== e ? (r = t => e(t.deviceContext), a[0] = e, a[1] = r) : r = a[1], o(r, n)
  }, "useHatchFilesSelector", 0, function(e, n) {
    let r, a = (0, t.c)(2);
    return a[0] !== e ? (r = t => e(t.files), a[0] = e, a[1] = r) : r = a[1], o(r, n)
  }, "useHatchIdentitySelector", 0, function(e, n) {
    let r, a = (0, t.c)(2);
    return a[0] !== e ? (r = t => e(t.identity), a[0] = e, a[1] = r) : r = a[1], o(r, n)
  }, "useHatchSearchSelector", 0, function(e, n) {
    let r, a = (0, t.c)(2);
    return a[0] !== e ? (r = t => e(t.search), a[0] = e, a[1] = r) : r = a[1], o(r, n)
  }, "useHatchSelector", 0, o, "useHatchTasksSelector", 0, function(e, n) {
    let r, a = (0, t.c)(2);
    return a[0] !== e ? (r = t => e(t.tasks), a[0] = e, a[1] = r) : r = a[1], o(r, n)
  }], 672495)
}, 107983, (e, t, n) => {
  "use strict";
  var r = e.r(519172),
    a = "function" == typeof Object.is ? Object.is : function(e, t) {
      return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    },
    i = r.useState,
    l = r.useEffect,
    s = r.useLayoutEffect,
    o = r.useDebugValue;

  function u(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !a(e, n)
    } catch (e) {
      return !0
    }
  }
  var c = "u" < typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
    return t()
  } : function(e, t) {
    var n = t(),
      r = i({
        inst: {
          value: n,
          getSnapshot: t
        }
      }),
      a = r[0].inst,
      c = r[1];
    return s(function() {
      a.value = n, a.getSnapshot = t, u(a) && c({
        inst: a
      })
    }, [e, n, t]), l(function() {
      return u(a) && c({
        inst: a
      }), e(function() {
        u(a) && c({
          inst: a
        })
      })
    }, [e]), o(n), n
  };
  n.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c
}, 33347, (e, t, n) => {
  "use strict";
  t.exports = e.r(107983)
}, 683842, (e, t, n) => {
  "use strict";
  var r = e.r(519172),
    a = e.r(33347),
    i = "function" == typeof Object.is ? Object.is : function(e, t) {
      return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    },
    l = a.useSyncExternalStore,
    s = r.useRef,
    o = r.useEffect,
    u = r.useMemo,
    c = r.useDebugValue;
  n.useSyncExternalStoreWithSelector = function(e, t, n, r, a) {
    var d = s(null);
    if (null === d.current) {
      var h = {
        hasValue: !1,
        value: null
      };
      d.current = h
    } else h = d.current;
    var f = l(e, (d = u(function() {
      function e(e) {
        if (!o) {
          if (o = !0, l = e, e = r(e), void 0 !== a && h.hasValue) {
            var t = h.value;
            if (a(t, e)) return s = t
          }
          return s = e
        }
        if (t = s, i(l, e)) return t;
        var n = r(e);
        return void 0 !== a && a(t, n) ? (l = e, t) : (l = e, s = n)
      }
      var l, s, o = !1,
        u = void 0 === n ? null : n;
      return [function() {
        return e(t())
      }, null === u ? void 0 : function() {
        return e(u())
      }]
    }, [t, n, r, a]))[0], d[1]);
    return o(function() {
      h.hasValue = !0, h.value = f
    }, [f]), c(f), f
  }
}, 551165, (e, t, n) => {
  "use strict";
  t.exports = e.r(683842)
}, 68426, e => {
  "use strict";
  var t = e.i(519172),
    n = e.i(551165);
  e.i(978911);
  let {
    useSyncExternalStoreWithSelector: r
  } = n.default, a = e => e;
  e.s(["useStoreWithEqualityFn", 0, function(e, n = a, i) {
    let l = r(e.subscribe, e.getState, e.getInitialState, n, i);
    return t.default.useDebugValue(l), l
  }])
}, 900772, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, a, i, l, s = (0, n.c)(9);
    return s[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = r) : r = s[1], s[2] !== e.children ? (a = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = a) : a = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.269 3H2l7.493 9.786L2.026 21h2.703l6-6.6L15.78 21h6.27l-7.92-10.343L21.092 3H18.39l-5.493 6.043L8.269 3zm8.5 16L6.05 5h1.231L18 19h-1.231z"
    }), s[4] = i) : i = s[4], s[5] !== e || s[6] !== r || s[7] !== a ? (l = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, a, i]
    }), s[5] = e, s[6] = r, s[7] = a, s[8] = l) : l = s[8], l
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 832815, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, a, i, l, s, o = (0, n.c)(10);
    return o[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), o[0] = e.title, o[1] = r) : r = o[1], o[2] !== e.children ? (a = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), o[2] = e.children, o[3] = a) : a = o[3], o[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      d: "M8.5 9.87H7.8C6.95 9.87 6.36 9.88 5.9 9.91C5.45 9.95 5.21 10.02 5.04 10.11C4.64 10.31 4.31 10.63 4.11 11.03C4.02 11.21 3.95 11.45 3.91 11.9C3.88 12.36 3.88 12.94 3.88 13.8V18.2C3.88 19.05 3.88 19.64 3.91 20.1C3.95 20.54 4.02 20.79 4.11 20.96C4.31 21.36 4.64 21.69 5.04 21.89C5.21 21.98 5.45 22.05 5.9 22.09C6.36 22.12 6.95 22.12 7.8 22.12H16.2C17.05 22.12 17.64 22.12 18.1 22.09C18.55 22.05 18.79 21.98 18.96 21.89C19.36 21.69 19.69 21.36 19.89 20.96C19.98 20.79 20.05 20.54 20.09 20.1C20.12 19.64 20.13 19.05 20.13 18.2V13.8C20.13 12.94 20.12 12.36 20.09 11.9C20.05 11.45 19.98 11.21 19.89 11.03C19.69 10.63 19.36 10.31 18.96 10.11C18.79 10.02 18.55 9.95 18.1 9.91C17.64 9.88 17.05 9.87 16.2 9.87H15.5V8.12H16.2C17.03 8.12 17.7 8.12 18.24 8.17C18.8 8.21 19.29 8.31 19.76 8.55C20.49 8.92 21.08 9.51 21.45 10.24C21.69 10.71 21.79 11.2 21.83 11.76C21.88 12.3 21.88 12.97 21.88 13.8V18.2C21.88 19.02 21.88 19.7 21.83 20.24C21.79 20.79 21.69 21.29 21.45 21.76C21.08 22.49 20.49 23.08 19.76 23.45C19.29 23.69 18.8 23.79 18.24 23.83C17.7 23.87 17.03 23.87 16.2 23.87H7.8C6.97 23.87 6.3 23.87 5.76 23.83C5.2 23.79 4.71 23.69 4.24 23.45C3.51 23.08 2.92 22.49 2.55 21.76C2.31 21.29 2.21 20.79 2.17 20.24C2.12 19.7 2.13 19.02 2.13 18.2V13.8C2.13 12.97 2.12 12.3 2.17 11.76C2.21 11.2 2.31 10.71 2.55 10.24C2.92 9.51 3.51 8.92 4.24 8.55C4.71 8.31 5.2 8.21 5.76 8.17C6.3 8.12 6.97 8.12 7.8 8.12H8.5V9.87Z"
    }), l = (0, t.jsx)("path", {
      d: "M11.38 0.38C11.72 0.04 12.28 0.04 12.62 0.38L16.62 4.38C16.96 4.72 16.96 5.28 16.62 5.62C16.28 5.96 15.72 5.96 15.38 5.62L12.88 3.11V16C12.88 16.48 12.48 16.87 12 16.87C11.52 16.87 11.13 16.48 11.13 16V3.11L8.62 5.62C8.28 5.96 7.72 5.96 7.38 5.62C7.04 5.28 7.04 4.72 7.38 4.38L11.38 0.38Z"
    }), o[4] = i, o[5] = l) : (i = o[4], l = o[5]), o[6] !== e || o[7] !== r || o[8] !== a ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, a, i, l]
    }), o[6] = e, o[7] = r, o[8] = a, o[9] = s) : s = o[9], s
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 200388, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, a, i, l, s, o = (0, n.c)(10);
    return o[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), o[0] = e.title, o[1] = r) : r = o[1], o[2] !== e.children ? (a = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), o[2] = e.children, o[3] = a) : a = o[3], o[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      d: "M15.45 8.55C18.13 11.24 18.13 15.59 15.45 18.27L12.62 21.1C9.93 23.79 5.58 23.79 2.9 21.1C0.21 18.42 0.21 14.07 2.9 11.38L4.87 9.4C4.76 10.22 4.76 11.05 4.89 11.86L4.13 12.62C2.13 14.62 2.13 17.86 4.13 19.87C6.13 21.87 9.38 21.87 11.38 19.87L14.21 17.04C16.21 15.04 16.21 11.79 14.21 9.79C13.3 8.88 12.12 8.38 10.93 8.3C10.96 8.27 10.99 8.23 11.03 8.2L12.43 6.79C13.54 7.1 14.58 7.69 15.45 8.55Z"
    }), l = (0, t.jsx)("path", {
      d: "M21.1 2.9C23.79 5.58 23.79 9.93 21.1 12.62L19.13 14.59C19.24 13.78 19.24 12.95 19.11 12.13L19.87 11.38C21.87 9.38 21.87 6.13 19.87 4.13C17.86 2.13 14.62 2.13 12.62 4.13L9.79 6.96C7.79 8.96 7.79 12.21 9.79 14.21C10.7 15.12 11.87 15.62 13.07 15.7C13.04 15.73 13 15.77 12.97 15.8L11.57 17.21C10.46 16.9 9.42 16.31 8.55 15.45C5.87 12.76 5.87 8.41 8.55 5.72L11.38 2.9C14.07 0.21 18.42 0.21 21.1 2.9Z"
    }), o[4] = i, o[5] = l) : (i = o[4], l = o[5]), o[6] !== e || o[7] !== r || o[8] !== a ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, a, i, l]
    }), o[6] = e, o[7] = r, o[8] = a, o[9] = s) : s = o[9], s
  }
  r._isSVG = !0, e.s(["default", 0, r])
}, 358338, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099);

  function r(e) {
    let r, a, i, l, s, o = (0, n.c)(10);
    return o[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), o[0] = e.title, o[1] = r) : r = o[1], o[2] !== e.children ? (a = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), o[2] = e.children, o[3] = a) : a = o[3], o[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      d: "M17.02 8.79C17.42 8.47 17.74 8.2 18.06 8.48C18.39 8.75 18.13 9.18 17.4 10.41C17.25 10.66 17.07 10.95 16.88 11.28C16.68 11.62 16.5 11.93 16.34 12.22C15.28 14.06 14.77 14.96 13.86 14.96C12.99 14.96 12.34 14.36 11.59 13.66C11.43 13.52 11.27 13.37 11.1 13.22C10.22 12.44 9.93 12.35 8.93 13.22C8.01 14.02 7.36 14.56 6.83 14.96C6.3 15.36 6.11 15.49 5.71 15.22C5.4 15.01 5.63 14.56 5.84 14.22C6.26 13.56 6.97 12.44 7.6 11.42C8.06 10.68 8.49 10.01 8.74 9.61C9.33 8.68 10.38 8.77 11.43 9.61C11.84 9.94 12.09 10.13 12.28 10.28C12.52 10.47 12.67 10.59 12.94 10.81C13.66 11.42 13.86 11.35 14.65 10.68C15.44 10.01 16.22 9.41 16.75 9.01C16.84 8.94 16.93 8.86 17.02 8.79Z"
    }), l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 1C18.04 1 23 5.74 23 11.66C23 17.58 18.04 22.32 12 22.32C10.97 22.32 9.97 22.18 9.03 21.92C8.39 22.25 7.59 22.64 7.11 22.82C6.52 23.06 5.86 23.09 5.31 22.73C4.77 22.38 4.56 21.81 4.56 21.32V19.51C2.38 17.57 1 14.78 1 11.66C1 5.74 5.96 1 12 1ZM12 3C7 3 3 6.91 3 11.66C3 14.31 4.23 16.68 6.19 18.28L6.56 18.58V20.88C7.06 20.67 7.86 20.28 8.47 19.97L8.83 19.78L9.22 19.9C10.1 20.17 11.03 20.32 12 20.32C17 20.32 21 16.41 21 11.66C21 6.91 17 3 12 3Z"
    }), o[4] = i, o[5] = l) : (i = o[4], l = o[5]), o[6] !== e || o[7] !== r || o[8] !== a ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, a, i, l]
    }), o[6] = e, o[7] = r, o[8] = a, o[9] = s) : s = o[9], s
  }
  r._isSVG = !0, e.s(["default", 0, r])
}]);

//# debugId=b56d3a70-814e-15f6-605a-bf0ceb64eb99
//# sourceMappingURL=0zgsy8bj-8-hr.js.map