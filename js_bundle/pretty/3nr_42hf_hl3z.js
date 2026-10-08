;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "c5d0f879-cfcf-cd4a-c761-1c6c563dd458")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 503367, e => {
  "use strict";
  var t = e.i(255859);
  let r = t.PRODUCT_SOCIAL_TITLE,
    a = `Try ${t.PRODUCT_BRAND.shortName}, your personal AI agent that gets things done. Give ${t.PRODUCT_BRAND.shortName} a goal or an everyday task and it handles the rest, from finances and health to shopping and the people you care about.`,
    i = `${t.PRODUCT_BRAND.shortName} wearing headphones and working at a laptop`;
  t.PRODUCT_BRAND.shortName, e.s(["MUSE_SOCIAL_DESCRIPTION", 0, a, "MUSE_SOCIAL_IMAGE_ALT", 0, i, "MUSE_SOCIAL_IMAGE_HEIGHT", 0, 630, "MUSE_SOCIAL_IMAGE_PATH", 0, "/images/landing/brand/og-image.jpg?v=3", "MUSE_SOCIAL_IMAGE_WIDTH", 0, 1200, "MUSE_SOCIAL_TITLE", 0, r, "MUSE_SOCIAL_VIDEO_HEIGHT", 0, 630, "MUSE_SOCIAL_VIDEO_PATH", 0, "/videos/landing/brand/og-video.mp4?v=1", "MUSE_SOCIAL_VIDEO_TYPE", 0, "video/mp4", "MUSE_SOCIAL_VIDEO_WIDTH", 0, 1200])
}, 581386, e => {
  "use strict";
  var t = e.i(984416),
    r = e.i(345717),
    a = e.i(722099),
    i = e.i(294237),
    n = e.i(181883),
    l = e.i(181959),
    s = e.i(440802),
    o = e.i(374785);
  l.default._isSVG = !0, n.default._isSVG = !0;
  let c = (0, i.cva)("flex justify-center px-5", {
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

  function u(e) {
    let i, c, u, d, h, f, m, p = (0, a.c)(24),
      {
        onBack: g,
        backRef: y,
        closeRef: v,
        onClose: _,
        showCloseButton: w,
        title: S,
        titleId: C,
        titleRef: b,
        variant: A
      } = e,
      x = void 0 === w || w,
      E = void 0 === A ? "default" : A,
      k = "idea" === E ? "text-hatch-idea-share-title" : "text-title-3-emphasized";
    p[0] !== k ? (i = (0, o.cn)("text-text-primary min-w-0", k), p[0] = k, p[1] = i) : i = p[1], p[2] !== S ? (c = S ?? r.fbt._("Share", null, {
      hk: "38UVfR"
    }), p[2] = S, p[3] = c) : c = p[3], p[4] !== i || p[5] !== c || p[6] !== C || p[7] !== b ? (u = (0, t.jsx)("h2", {
      id: C,
      ref: b,
      tabIndex: -1,
      className: i,
      children: c
    }), p[4] = i, p[5] = c, p[6] = C, p[7] = b, p[8] = u) : u = p[8];
    let I = u,
      H = "idea" === E ? "flex shrink-0 items-center justify-between gap-2 py-4 pe-4" : "flex items-center justify-between gap-4 p-4 pb-2",
      T = "idea" === E && (null == g ? "ps-6" : "ps-4");
    return p[9] !== H || p[10] !== T ? (d = (0, o.cn)(H, T), p[9] = H, p[10] = T, p[11] = d) : d = p[11], p[12] !== y || p[13] !== I || p[14] !== g ? (h = null == g ? I : (0, t.jsxs)("div", {
      className: "flex min-w-0 items-center gap-2",
      children: [(0, t.jsx)(s.IconButton, {
        ref: y,
        icon: n.default,
        iconSize: 20,
        label: r.fbs._("Back", null, {
          hk: "g9KUU"
        }),
        size: "28",
        variant: "elevated",
        className: "rtl:rotate-180",
        onClick: g
      }), I]
    }), p[12] = y, p[13] = I, p[14] = g, p[15] = h) : h = p[15], p[16] !== v || p[17] !== _ || p[18] !== x ? (f = x && (0, t.jsx)(s.IconButton, {
      ref: v,
      icon: l.default,
      iconSize: 20,
      label: r.fbs._("Close", null, {
        hk: "TXbmd"
      }),
      size: "28",
      variant: "elevated",
      onClick: _
    }), p[16] = v, p[17] = _, p[18] = x, p[19] = f) : f = p[19], p[20] !== h || p[21] !== f || p[22] !== d ? (m = (0, t.jsxs)("div", {
      className: d,
      children: [h, f]
    }), p[20] = h, p[21] = f, p[22] = d, p[23] = m) : m = p[23], m
  }

  function d(e) {
    let r, i, n, l, s, u, d, h = (0, a.c)(21),
      {
        actions: f,
        children: m,
        description: p,
        preview: g,
        layout: y
      } = e,
      v = void 0 === y ? "publish" : y,
      _ = "idea" === v ? "pb-5" : "avatar" === v || "media" === v ? "pb-5 md:pb-0" : "pb-9";
    h[0] !== _ ? (r = (0, o.cn)("relative flex min-w-0 flex-col", _), h[0] = _, h[1] = r) : r = h[1], h[2] !== v ? (i = c({
      layout: v
    }), h[2] = v, h[3] = i) : i = h[3], h[4] !== g || h[5] !== i ? (n = (0, t.jsx)("div", {
      className: i,
      children: g
    }), h[4] = g, h[5] = i, h[6] = n) : n = h[6], h[7] !== p || h[8] !== v ? (l = "idea" !== v && (0, t.jsx)("div", {
      className: (0, o.cn)("px-5", ("avatar" === v || "media" === v) && "md:px-0"),
      children: (0, t.jsx)("div", {
        className: "max-w-artifact-share-copy text-subheadline-large text-text-primary mx-auto text-center",
        "aria-live": "polite",
        children: p
      })
    }), h[7] = p, h[8] = v, h[9] = l) : l = h[9];
    let w = "idea" === v ? null : "avatar" === v ? "mt-5 md:mt-4" : "media" === v ? "mt-6 md:mt-4" : "published" === v ? "mt-10" : "mt-4";
    return h[10] !== w ? (s = (0, o.cn)("flex w-full justify-center", w), h[10] = w, h[11] = s) : s = h[11], h[12] !== f || h[13] !== s ? (u = (0, t.jsx)("div", {
      className: s,
      children: f
    }), h[12] = f, h[13] = s, h[14] = u) : u = h[14], h[15] !== m || h[16] !== r || h[17] !== n || h[18] !== l || h[19] !== u ? (d = (0, t.jsxs)("div", {
      className: r,
      children: [n, l, u, m]
    }), h[15] = m, h[16] = r, h[17] = n, h[18] = l, h[19] = u, h[20] = d) : d = h[20], d
  }
  e.s(["HatchShareDialogBody", 0, d, "HatchShareDialogHeader", 0, u, "HatchShareDialogLayout", 0, function(e) {
    let r, i, n, l, s, o, c, h, f, m, p, g, y, v = (0, a.c)(26);
    return v[0] !== e ? ({
      onBack: l,
      backRef: r,
      closeRef: n,
      onClose: s,
      showCloseButton: o,
      title: c,
      titleRef: f,
      titleId: h,
      variant: m,
      ...i
    } = e, v[0] = e, v[1] = r, v[2] = i, v[3] = n, v[4] = l, v[5] = s, v[6] = o, v[7] = c, v[8] = h, v[9] = f, v[10] = m) : (r = v[1], i = v[2], n = v[3], l = v[4], s = v[5], o = v[6], c = v[7], h = v[8], f = v[9], m = v[10]), v[11] !== r || v[12] !== n || v[13] !== l || v[14] !== s || v[15] !== o || v[16] !== c || v[17] !== h || v[18] !== f || v[19] !== m ? (p = (0, t.jsx)(u, {
      onBack: l,
      backRef: r,
      closeRef: n,
      onClose: s,
      showCloseButton: o,
      title: c,
      titleRef: f,
      titleId: h,
      variant: m
    }), v[11] = r, v[12] = n, v[13] = l, v[14] = s, v[15] = o, v[16] = c, v[17] = h, v[18] = f, v[19] = m, v[20] = p) : p = v[20], v[21] !== i ? (g = (0, t.jsx)(d, {
      ...i
    }), v[21] = i, v[22] = g) : g = v[22], v[23] !== p || v[24] !== g ? (y = (0, t.jsxs)("div", {
      className: "relative flex min-w-0 flex-col",
      children: [p, g]
    }), v[23] = p, v[24] = g, v[25] = y) : y = v[25], y
  }])
}, 598747, 773861, e => {
  "use strict";
  var t = e.i(984416),
    r = e.i(722099),
    a = e.i(519172),
    i = e.i(294237),
    n = e.i(345717),
    l = e.i(203576),
    s = e.i(900772),
    o = e.i(832815),
    c = e.i(200388),
    u = e.i(358338),
    d = e.i(848048),
    h = e.i(440802),
    f = e.i(612270),
    m = e.i(374785),
    p = e.i(47247),
    g = e.i(359783),
    y = e.i(863641),
    v = e.i(782339);
  let _ = ["copy_link", "whatsapp", "messenger", "instagram", "x", "threads"];

  function w(e, t, r, a = "") {
    let i, n = a.length > 0 ? `${a}
${t}` : t;
    switch (e) {
      case "messenger":
        (i = new URL(r ? "fb-messenger://share" : "https://www.facebook.com/share_as_message/")).searchParams.set("app_id", v.EctoAppIDs.HATCH_WEB), i.searchParams.set("link", t);
        break;
      case "instagram":
        (i = new URL("https://www.instagram.com/intent/share/")).searchParams.set("text", n);
        break;
      case "whatsapp":
        (i = new URL("https://wa.me/")).searchParams.set("text", n);
        break;
      case "threads":
        (i = new URL("https://www.threads.net/intent/post")).searchParams.set("text", n);
        break;
      case "x":
        (i = new URL("https://x.com/intent/tweet")).searchParams.set("url", t), a.length > 0 && i.searchParams.set("text", a)
    }
    return {
      url: i.toString(),
      target: "messenger" === e && r ? "_self" : "_blank"
    }
  }
  e.s(["HATCH_SHARE_TRAY_DEFAULT_DESTINATIONS", 0, _, "getHatchShareDestination", 0, w], 773861), o.default._isSVG = !0, c.default._isSVG = !0, u.default._isSVG = !0;
  let S = (0, g.createClientLogger)("HatchShareTray"),
    C = (0, i.cva)("w-full overflow-x-auto px-5", {
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

  function b(e) {
    let a, i = (0, r.c)(3),
      {
        width: n,
        height: l
      } = e;
    return i[0] !== l || i[1] !== n ? (a = (0, t.jsx)("img", {
      src: "/images/sharing/whatsapp.svg",
      width: n,
      height: l,
      alt: ""
    }), i[0] = l, i[1] = n, i[2] = a) : a = i[2], a
  }

  function A(e) {
    let a, i = (0, r.c)(3),
      {
        width: n,
        height: l
      } = e;
    return i[0] !== l || i[1] !== n ? (a = (0, t.jsx)("img", {
      src: "/images/sharing/instagram-messages.svg",
      width: n,
      height: l,
      alt: ""
    }), i[0] = l, i[1] = n, i[2] = a) : a = i[2], a
  }

  function x() {
    return () => {}
  }

  function E() {
    return "function" == typeof navigator.share
  }

  function k() {
    return !1
  }

  function I(e) {
    let i, n, l, s, o, c = (0, r.c)(22),
      {
        action: u,
        disabled: f,
        onClick: p,
        tracking: g
      } = e,
      y = (0, a.useId)(),
      {
        ref: v,
        onClick: _
      } = (0, d.useTrackedClickRef)(g),
      w = "messenger" === u.destination ? "text-hatch-accent" : "text-text-primary";
    c[0] !== _ || c[1] !== p ? (i = () => {
      _(), p()
    }, c[0] = _, c[1] = p, c[2] = i) : i = c[2], c[3] !== u.icon || c[4] !== u.iconSize || c[5] !== u.label || c[6] !== f || c[7] !== y || c[8] !== v || c[9] !== w || c[10] !== i ? (n = (0, t.jsx)(h.IconButton, {
      ref: v,
      id: y,
      type: "button",
      icon: u.icon,
      iconSize: u.iconSize,
      size: "60",
      variant: "flat",
      label: u.label,
      disabled: f,
      className: "bg-bg-secondary enabled:group-hover:brightness-95 dark:enabled:group-hover:brightness-110",
      iconClassName: w,
      onClick: i
    }), c[3] = u.icon, c[4] = u.iconSize, c[5] = u.label, c[6] = f, c[7] = y, c[8] = v, c[9] = w, c[10] = i, c[11] = n) : n = c[11];
    let S = f ? "cursor-default" : "cursor-pointer",
      C = "instagram" === u.destination && "w-16";
    return c[12] !== S || c[13] !== C ? (l = (0, m.cn)("text-footnote-medium text-text-primary text-center", S, C), c[12] = S, c[13] = C, c[14] = l) : l = c[14], c[15] !== u.label || c[16] !== y || c[17] !== l ? (s = (0, t.jsx)("label", {
      htmlFor: y,
      className: l,
      children: u.label
    }), c[15] = u.label, c[16] = y, c[17] = l, c[18] = s) : s = c[18], c[19] !== n || c[20] !== s ? (o = (0, t.jsxs)("div", {
      className: "group flex max-w-20 min-w-15 shrink-0 flex-col items-center gap-2",
      children: [n, s]
    }), c[19] = n, c[20] = s, c[21] = o) : o = c[21], o
  }
  e.s(["HatchShareTray", 0, function({
    destinations: e = _,
    getTracking: r,
    layout: i = "standalone",
    onCopy: d,
    sentrySurface: h,
    shareText: g = "",
    shareUrl: v
  }) {
    let H = (0, f.useIsTouchDevice)(),
      T = (0, a.useSyncExternalStore)(x, E, k),
      R = (0, a.useRef)(!1),
      P = n.fbs._("Something went wrong. Please try again.", null, {
        hk: "ppKTW"
      }),
      L = [{
        destination: "share",
        icon: o.default,
        iconSize: 24,
        label: n.fbs._("Share", null, {
          hk: "2jPSuX"
        })
      }, {
        destination: "copy_link",
        icon: c.default,
        iconSize: 24,
        label: n.fbs._("Copy link", null, {
          hk: "3TRLtT"
        })
      }, {
        destination: "whatsapp",
        icon: b,
        iconSize: 28,
        label: n.fbs._("WhatsApp", null, {
          hk: "2IgkvQ"
        })
      }, {
        destination: "messenger",
        icon: u.default,
        iconSize: 24,
        label: n.fbs._("Messenger", null, {
          hk: "wHFA5"
        })
      }, {
        destination: "instagram",
        icon: A,
        iconSize: 28,
        label: n.fbs._("Instagram messages", null, {
          hk: "3phkEb"
        })
      }, {
        destination: "x",
        icon: s.default,
        iconSize: 24,
        label: n.fbs._("X", null, {
          hk: "2MA9sN"
        })
      }, {
        destination: "threads",
        icon: l.default,
        iconSize: 24,
        label: n.fbs._("Threads", null, {
          hk: "2intVS"
        })
      }],
      U = e.flatMap(e => {
        if ("share" === e && !T) return [];
        let t = L.find(t => t.destination === e);
        return null == t ? [] : [t]
      });
    return (0, t.jsx)("div", {
      className: C({
        layout: i
      }),
      children: (0, t.jsx)("div", {
        className: (0, m.cn)("mx-auto flex w-fit items-start gap-6 py-1", "dialog" === i && "md:gap-4"),
        children: U.map(e => (0, t.jsx)(I, {
          action: e,
          tracking: r(e.destination),
          disabled: null == v,
          onClick: () => (function(e) {
            if (null != v) {
              if ("copy_link" === e) return void d();
              if ("share" === e) return void
              function(e) {
                let t;
                if (R.current) return;
                R.current = !0;
                let r = (0, p.captureHatchToast)();
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
                  (e instanceof DOMException || e instanceof Error) && "AbortError" === e.name || (S.error({
                    error: e,
                    destination: "share",
                    tags: (0, y.hatchSentryTags)(h)
                  }, "Could not open the system share sheet"), r.error(P))
                }).finally(() => {
                  R.current = !1
                })
              }(v);
              try {
                let t = w(e, v, H, g);
                "_self" === t.target ? window.location.assign(t.url) : window.open(t.url, "_blank", "noopener,noreferrer")
              } catch (t) {
                S.error({
                  error: t,
                  destination: e,
                  tags: (0, y.hatchSentryTags)(h)
                }, "Could not open share composer"), (0, p.captureHatchToast)().error(P)
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
}, 177649, e => {
  "use strict";
  var t = e.i(9326);
  let r = "/videos/avatars/hatch.mp4",
    a = new Set(["/videos/avatars/hatch.mp4", "/videos/avatars/hatch_working.mp4", "/videos/avatars/hatch_making_something.mp4"]),
    i = "/images/avatars/hatch.jpg",
    n = "/videos/avatars/hatch_milestone_level_up.mp4",
    l = {
      default: {
        kind: "video",
        src: r
      },
      connecting: {
        kind: "video",
        src: r
      },
      resume: {
        kind: "video",
        src: r
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
        src: n
      }
    };
  e.s(["BUILT_IN_HATCH_AVATAR_VIDEO_SRCS", 0, a, "DEFAULT_HATCH_AVATAR_IMAGE", 0, i, "DEFAULT_HATCH_AVATAR_VIDEO", 0, r, "DEFAULT_HATCH_MILESTONE_ACHIEVEMENT_VIDEO", 0, "/videos/avatars/hatch_milestone_achievement.mp4", "DEFAULT_HATCH_MILESTONE_LEVEL_UP_VIDEO", 0, n, "getBaseHatchAvatarVisualState", 0, function(e, t, r = !1) {
    if (r) return "resume";
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
  }, "resolveLoopingHatchAvatarMedia", 0, function e(r, a) {
    if ("resume" === r && (null == a.videoUrlsByVariant.resume || a.videoUrlsByVariant.resume === a.videoUrlsByVariant.default)) return e("default", a);
    for (let e of (0, t.getHatchAvatarVariantFallbackOrder)(r)) {
      let t = a.videoUrlsByVariant[e];
      if (t) return {
        key: `video:${e}:${t}`,
        kind: "video",
        src: t,
        loop: !0,
        resolvedVariant: e
      }
    }
    if (a.imageUrl) return {
      key: `image:${a.imageUrl}`,
      kind: "image",
      src: a.imageUrl,
      resolvedVariant: r
    };
    let i = l[r];
    return "image" === i.kind ? {
      key: `image:fallback:${r}:${i.src}`,
      kind: "image",
      src: i.src,
      resolvedVariant: r
    } : {
      key: `video:fallback:${r}:${i.src}`,
      kind: "video",
      src: i.src,
      loop: !0,
      resolvedVariant: r
    }
  }, "resolveMilestoneMedia", 0, function(e) {
    let t = e ?? n;
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
    for (let r of t.HATCH_AVATAR_VARIANTS) {
      if ("resume" === r) continue;
      let t = e.videoUrlsByVariant[r];
      if (null != t) return {
        key: `video:static-fallback:${r}:${t}`,
        kind: "video",
        src: t,
        loop: !1,
        resolvedVariant: r
      }
    }
    return {
      key: `image:fallback:static:${i}`,
      kind: "image",
      src: i,
      resolvedVariant: "default"
    }
  }])
}, 960607, e => {
  "use strict";
  var t = e.i(183912),
    r = e.i(389409);
  let a = new Set(["m4v", "mov", "mp4", "ogv", "webm"]),
    i = new Set(["v"]),
    n = {
      isVm: !1,
      noisePath: null
    };

  function l(e) {
    let t;
    try {
      t = new URL(e, "https://example.invalid")
    } catch {
      return n
    }
    if ("http:" !== t.protocol && "https:" !== t.protocol || !(0, r.isHatchVmGatewayHostname)(t.hostname)) return n;
    let a = t.pathname.indexOf("/fs/raw/"),
      l = t.pathname.indexOf("/media/raw/"),
      s = a >= 0 && (l < 0 || a < l),
      o = s ? a : l;
    if (o < 0) return {
      isVm: !0,
      noisePath: null
    };
    let c = t.pathname.slice(o + (s ? "/fs/raw/" : "/media/raw/").length);
    if (!c.startsWith("workspace/") || ! function(e) {
        let t = e.split("/");
        if ("workspace" !== t[0] || t.length < 2) return !1;
        for (let e of t) {
          let t = u(e);
          if (null == t || 0 === t.length || "." === t || ".." === t || t.includes("/") || t.includes("\\") || t.includes("\0")) return !1
        }
        return !0
      }(c)) return {
      isVm: !0,
      noisePath: null
    };
    let d = new URLSearchParams;
    if (s)
      for (let [e, r] of t.searchParams) i.has(e) && d.append(e, r);
    let h = d.toString();
    return {
      isVm: !0,
      noisePath: `/${c}${h.length>0?`?${h}`:""}`
    }
  }

  function s(e) {
    return l(e).isVm
  }

  function o(e) {
    try {
      let r = new URL(e, "https://example.invalid"),
        a = "https://example.invalid" === r.origin && e.startsWith("/");
      return "/api/session/fileserver-read" === r.pathname && (a || (0, t.getHatchOriginsAllowlist)().has(r.origin))
    } catch {
      return !1
    }
  }

  function c(e) {
    try {
      return decodeURIComponent(e)
    } catch {
      return e
    }
  }

  function u(e) {
    let t = e;
    for (let e = 0; e < 8; e++) {
      let e = c(t);
      if (e === t) return t;
      t = e
    }
    return c(t) === t ? t : null
  }

  function d(e) {
    let t = c(e.split(/[?#]/)[0] ?? e).split(/[\\/]/).pop();
    if (!t || 0 === t.length) return null;
    let r = t.split(".").pop()?.toLowerCase();
    return r && r !== t.toLowerCase() ? r : null
  }

  function h(e) {
    let t = e.trim();
    if (0 === t.length) return null;
    let r = m(t);
    if (null != r) return d(r);
    if (o(t)) return null;
    try {
      let e = new URL(t, "https://example.invalid"),
        r = e.searchParams.get("path");
      if (null != r && r.trim().length > 0) return d(r);
      return d(e.pathname)
    } catch {
      return d(t)
    }
  }

  function f(e) {
    let t = u(e);
    return null == t || "." === t || ".." === t
  }

  function m(e) {
    if (!o(e)) return null;
    try {
      let t = new URL(e, "https://example.invalid").searchParams.get("path"),
        r = t?.trim();
      if (null == r || 0 === r.length) return null;
      let a = r.trim().replace(/\\/g, "/").replace(/^\/+/, "");
      if (/[?#]/.test(a)) return null;
      let i = a.split("/").filter(e => e.length > 0);
      return i.length < 2 || "workspace" !== i[0] || i.some(f) ? null : i.join("/")
    } catch {
      return null
    }
  }

  function p(e) {
    let t = e.trim();
    if (0 === t.length) return "image";
    let r = t.toLowerCase();
    if (r.startsWith("data:")) return r.startsWith("data:video/") ? "video" : "image";
    if (r.startsWith("blob:")) return "image";
    let i = h(t);
    return i && a.has(i) ? "video" : "image"
  }
  let g = new Set(["mp3", "m4a", "wav", "ogg", "flac", "aac", "opus"]),
    y = {
      mp3: "audio/mpeg",
      m4a: "audio/mp4",
      wav: "audio/wav",
      ogg: "audio/ogg",
      flac: "audio/flac",
      aac: "audio/aac",
      opus: "audio/opus"
    };

  function v(e, t) {
    let r, a = e.replace(/^\/+/, "").split(/[?#]/)[0] ?? e;
    try {
      r = decodeURIComponent(a)
    } catch {
      r = a
    }
    let i = r.split("/").pop() ?? "audio",
      n = d(t) ?? d(r) ?? "mp3";
    return {
      path: r,
      filename: i,
      mimeType: y[n.toLowerCase()] ?? "audio/mpeg"
    }
  }
  e.s(["getHatchVmMedia", 0, l, "getTrustedWorkspaceFilePathFromSource", 0, m, "getVmMediaNoiseFetchPath", 0, function(e) {
    let t = l(e);
    return t.isVm ? t.noisePath : void 0
  }, "hatchMediaPlaybackSource", 0, function(e) {
    let t = e.previewUrl ?? null;
    if (null != t && t.length > 0 && !s(t)) return {
      kind: "direct",
      url: t
    };
    let r = null != e.path && e.path.length > 0 ? e.path : null;
    if (null != r) return {
      kind: "noise",
      path: r,
      urlEncodedPath: !1
    };
    if (null != t && t.length > 0) {
      let e = l(t);
      if (e.isVm && null != e.noisePath) return {
        kind: "noise",
        path: e.noisePath,
        urlEncodedPath: !0
      }
    }
    return null
  }, "inferHatchMediaKind", 0, p, "isHatchVideoSource", 0, function(e) {
    return "video" === p(e)
  }, "isHatchVmMediaUrl", 0, s, "isInternalHatchFileserverSource", 0, o, "mediaCacheKey", 0, function(e, t) {
    return `${t?"url-encoded":"literal"}:${e}`
  }, "parseWorkspaceAudioFile", 0, function(e) {
    let t;
    if (!(null != (t = h(e)) && g.has(t))) return null;
    if (e.startsWith("sandbox://")) return v(e.slice(10), e);
    let r = m(e);
    return null == r ? null : v(r, e)
  }])
}, 476467, 386048, e => {
  "use strict";
  var t = e.i(359783),
    r = e.i(681875);
  let a = "hatch:pin-reminder:v1:",
    i = /^[0-9]+$/;
  class n extends Error {
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
      if (!i.test(e)) throw new n("PIN must be ASCII digits");
      let t = new Uint8Array(e.length);
      for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
      return t
    }(e);
    try {
      let e = await crypto.subtle.digest("SHA-256", t.buffer);
      return new Uint8Array(e)
    } finally {
      t.fill(0)
    }
  }
  async function o(e, t, r) {
    let i = await s(t),
      o = null != r ? new Uint8Array(r) : crypto.getRandomValues(new Uint8Array(12));
    if (12 !== o.length) throw new n("PIN reminder nonce must be 12 bytes");
    let c = await l(e),
      u = new Uint8Array(await crypto.subtle.encrypt({
        name: "AES-GCM",
        iv: o,
        tagLength: 128
      }, c, i.buffer));
    i.fill(0);
    let d = new Uint8Array(o.length + u.length);
    return d.set(o, 0), d.set(u, o.length), `${a}${function(e){let t="";for(let r of e)t+=String.fromCharCode(r);return btoa(t)}(d)}`
  }
  async function c(e, t) {
    let r, i;
    if (!t.startsWith(a)) throw new n("Unsupported PIN reminder envelope version");
    try {
      r = function(e) {
        let t = atob(e),
          r = new Uint8Array(t.length);
        for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
        return r
      }(t.slice(a.length))
    } catch {
      throw new n("PIN reminder envelope is not valid Base64")
    }
    if (60 !== r.length) throw new n("PIN reminder envelope has the wrong length");
    let s = await l(e);
    try {
      i = await crypto.subtle.decrypt({
        name: "AES-GCM",
        iv: r.slice(0, 12),
        tagLength: 128
      }, s, r.slice(12).buffer)
    } catch {
      throw new n("PIN reminder envelope failed authentication")
    }
    if (32 !== i.byteLength) throw new n("PIN reminder verifier has the wrong length");
    return new Uint8Array(i)
  }
  async function u(e, t, r) {
    let a = await c(e, t),
      i = await s(r);
    try {
      if (a.length !== i.length) return !1;
      let e = 0;
      for (let t = 0; t < a.length; t++) e |= a[t] ^ i[t];
      return 0 === e
    } finally {
      a.fill(0), i.fill(0)
    }
  }
  e.s(["PinReminderCryptoError", 0, n, "decryptPinVerifier", 0, c, "encryptPinVerifier", 0, o, "verifyPinAgainstEnvelope", 0, u], 386048);
  var d = e.i(863641);
  let h = (0, t.createClientLogger)("HatchPinReminderOutbox"),
    f = null;
  async function m(e, t) {
    try {
      let a = await (0, r.readCvmRecoveryKey)();
      if (null == a) return h.retainForBugReport("debug", "No cached recovery key — skipping PIN verifier update"), !1;
      return f = {
        update_id: crypto.randomUUID(),
        encrypted_pin_verifier: await o(a, e),
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
  }, "queuePinVerifierUpdate", 0, m, "takeQueuedPinVerifierUpdate", 0, function() {
    let e = f;
    return f = null, e
  }], 476467)
}, 790170, e => {
  "use strict";
  var t = e.i(226488),
    r = e.i(85461),
    a = e.i(975740);

  function i(e) {
    let t = e.targetKey;
    return {
      ...e,
      sendRequest: (r, a, i) => {
        let n = i?.expectedGatewayTargetKey != null ? {
          ...i,
          expectedGatewayTargetKey: t
        } : {
          ...i,
          expectedTargetKey: t
        };
        return e.sendRequest(r, a, n)
      }
    }
  }
  e.s(["createGatewayInfiniteQuery", 0, function(e) {
    let t = {
      infiniteQueryOptions: (t, n) => {
        let l, s = i(n);
        if (e.noiseFn) l = e.noiseFn;
        else if (null != (0, r.resolveHttpRoute)(e.id)) l = async (t, r, a) => {
          let {
            gatewayUrl: i,
            ...n
          } = r, l = {
            ...n,
            ...null != a ? {
              cursor: a
            } : {}
          };
          return t.sendRequest(e.id, l)
        };
        else if (e.queryFn) l = e.queryFn;
        else throw Error(`createGatewayInfiniteQuery(${e.id}): no noiseFn, no Noise route, and no queryFn`);
        return {
          queryKey: e.queryKey(t),
          queryFn: ({
            pageParam: r
          }) => {
            let i = e.earlyPreload?.(t, s, r);
            if (null != i) {
              let e = (0, a.getEarlyGatewayQueryPreload)(i.sourceKey);
              if (null != e) {
                let t = e.promise.then(i.transform);
                return t.then(() => (0, a.clearEarlyGatewayQueryPromise)(i.sourceKey, e.promise), () => (0, a.clearEarlyGatewayQueryPromise)(i.sourceKey, e.promise)), t
              }
            }
            return l(s, t, r)
          },
          initialPageParam: e.initialPageParam,
          getNextPageParam: e.getNextPageParam,
          staleTime: e.staleTime,
          gcTime: e.gcTime,
          meta: e.meta,
          refetchOnMount: !1
        }
      },
      suspenseInfiniteQueryOptions: (e, r) => t.infiniteQueryOptions(e, r),
      queryKey: e.queryKey,
      invalidate: (t, r) => t.invalidateQueries({
        queryKey: e.queryKey(r)
      }),
      invalidateAll: t => {
        if (!e.invalidationKey) throw Error(`createGatewayInfiniteQuery(${e.id}): invalidateAll called but no invalidationKey configured`);
        return t.invalidateQueries({
          queryKey: e.invalidationKey()
        })
      },
      setData: (t, r, a) => t.setQueryData(e.queryKey(r), a),
      removeData: (t, r) => t.removeQueries({
        queryKey: e.queryKey(r)
      }),
      prefetch: async (e, r, a) => {
        try {
          await e.prefetchInfiniteQuery(t.infiniteQueryOptions(r, a))
        } catch {}
      }
    };
    return t
  }, "createGatewayQuery", 0, function(e) {
    let a = {
      queryOptions: (a, n) => {
        let l, s = i(n);
        if (e.noiseFn) l = e.noiseFn;
        else if (null != (0, r.resolveHttpRoute)(e.id)) l = async (t, r) => {
          let {
            gatewayUrl: a,
            ...i
          } = r;
          return t.sendRequest(e.id, i)
        };
        else if (e.queryFn) l = e.queryFn;
        else throw Error(`createGatewayQuery(${e.id}): no noiseFn, no Noise route, and no queryFn`);
        return (0, t.queryOptions)({
          queryKey: e.queryKey(a),
          queryFn: () => l(s, a),
          staleTime: e.staleTime,
          gcTime: e.gcTime,
          meta: e.meta,
          refetchOnMount: !1
        })
      },
      queryKey: e.queryKey,
      invalidate: (t, r) => t.invalidateQueries({
        queryKey: e.queryKey(r)
      }),
      invalidateAll: t => {
        if (!e.invalidationKey) throw Error(`createGatewayQuery(${e.id}): invalidateAll called but no invalidationKey configured`);
        return t.invalidateQueries({
          queryKey: e.invalidationKey()
        })
      },
      setData: (t, r, a) => t.setQueryData(e.queryKey(r), a),
      removeData: (t, r) => t.removeQueries({
        queryKey: e.queryKey(r)
      }),
      prefetch: async (e, t, r) => {
        try {
          await e.prefetchQuery(a.queryOptions(t, r))
        } catch {}
      }
    };
    return a
  }], 790170)
}, 720756, e => {
  "use strict";
  var t = e.i(722099),
    r = e.i(871157),
    a = e.i(175286),
    i = e.i(907579);

  function n() {
    let e, n, l = (0, t.c)(12),
      {
        gatewayUrl: s,
        gatewayScopeKey: o,
        vmName: c,
        sendRequest: u,
        isReady: d,
        ensureLiveConnection: h
      } = (0, a.useHatchRpc)();
    l[0] !== s || l[1] !== c ? (e = (0, r.gatewayTargetKey)(s, c), l[0] = s, l[1] = c, l[2] = e) : e = l[2];
    let f = e,
      m = o ?? f,
      p = (0, i.useHatchGatewayFs)();
    return l[3] !== h || l[4] !== p || l[5] !== s || l[6] !== d || l[7] !== m || l[8] !== u || l[9] !== f || l[10] !== c ? (n = {
      gatewayUrl: s,
      vmName: c,
      targetKey: f,
      gatewayScopeKey: m,
      sendRequest: u,
      fs: p,
      isReady: d,
      waitForTransport: h
    }, l[3] = h, l[4] = p, l[5] = s, l[6] = d, l[7] = m, l[8] = u, l[9] = f, l[10] = c, l[11] = n) : n = l[11], n
  }
  e.s(["useGatewayQueryContext", 0, n, "useRequiredGatewayQueryContext", 0, function() {
    let e = n();
    if (!e.gatewayUrl) throw Error("useRequiredGatewayQueryContext: gatewayUrl is null. Only use in components rendered after shell bootstrap.");
    return e
  }])
}, 498054, e => {
  "use strict";
  var t = e.i(790170);
  let r = ["nodes"];
  async function a(e) {
    let t = await e("node.list", {});
    return {
      nodes: t.nodes ?? t.devices ?? []
    }
  }
  let i = (0, t.createGatewayQuery)({
    id: "node.list",
    queryKey: ({
      gatewayUrl: e
    }) => ["nodes", "list", e],
    noiseFn: e => a(e.sendRequest),
    invalidationKey: () => r,
    staleTime: 3e4
  });
  e.s(["nodeListQuery", 0, i])
}, 999498, 947643, e => {
  "use strict";
  var t = e.i(722099),
    r = e.i(519172),
    a = e.i(170525);

  function i(e) {
    return "unavailable" === e.kind ? null : `${e.kind}:${e.targetIdeaId}`
  }
  e.s(["createHatchIdeaShareRetirementStore", 0, function() {
    let e = new Set,
      t = new Map,
      r = new Map,
      i = new Map,
      n = new Map,
      l = null;

    function s() {
      for (let t of e) t()
    }
    return {
      subscribe: t => (e.add(t), () => {
        e.delete(t)
      }),
      observe(e, r) {
        let a = t.get(e) ?? new Map;
        t.set(e, a), a.set(r, (a.get(r) ?? 0) + 1);
        let i = !0;
        return () => {
          if (!i) return;
          i = !1;
          let n = (a.get(r) ?? 0) - 1;
          n > 0 ? a.set(r, n) : (a.delete(r), 0 === a.size && t.get(e) === a && t.delete(e))
        }
      },
      retire(e, o) {
        i.set(e, (i.get(e) ?? 0) + 1);
        let c = r.get(e) ?? new Set,
          u = c.size;
        for (let r of (c.add(o), t.get(e)?.keys() ?? [])) c.add(r);
        c.size !== u && (r.set(e, c), s()),
          function e(t) {
            let o, c = l;
            if (null == c || n.has(t)) return;
            let u = {};
            n.set(t, u);
            let d = i.get(t) ?? 0,
              h = a => {
                if (l === c && n.get(t) === u) {
                  if (n.delete(t), (i.get(t) ?? 0) !== d) return void e(t);
                  a && r.delete(t) && s()
                }
              };
            try {
              o = c.recheck(t)
            } catch (e) {
              o = Promise.reject(e)
            }
            o.then(e => h(null != e && (0, a.isHatchIdeaShareable)(e)), () => h(!1))
          }(e)
      },
      isRetired: (e, t) => r.get(e)?.has(t) ?? !1,
      connect(e) {
        let t = {
          recheck: e
        };
        return l = t, n.clear(), () => {
          l === t && (l = null, n.clear())
        }
      }
    }
  }, "hatchIdeaShareRevision", 0, i], 947643);
  let n = (0, r.createContext)(null),
    l = (0, r.createContext)(null);

  function s() {
    return () => {}
  }

  function o() {}

  function c() {
    return !1
  }
  e.s(["HatchIdeaShareContext", 0, n, "HatchIdeaShareRetirementContext", 0, l, "useHatchIdeaShare", 0, function() {
    return (0, r.useContext)(n)
  }, "useIsHatchIdeaShareRetired", 0, function(e, a) {
    let n, o, u, d, h = (0, t.c)(11),
      f = (0, r.useContext)(l);
    h[0] !== a ? (n = i(a), h[0] = a, h[1] = n) : n = h[1];
    let m = n;
    return h[2] !== e || h[3] !== m || h[4] !== f ? (o = () => {
      if (null != f && null != m) return f.observe(e, m)
    }, u = [f, e, m], h[2] = e, h[3] = m, h[4] = f, h[5] = o, h[6] = u) : (o = h[5], u = h[6]), (0, r.useEffect)(o, u), h[7] !== e || h[8] !== m || h[9] !== f ? (d = () => null != f && null != m && f.isRetired(e, m), h[7] = e, h[8] = m, h[9] = f, h[10] = d) : d = h[10], (0, r.useSyncExternalStore)(f?.subscribe ?? s, d, c)
  }, "useRetireHatchIdeaShare", 0, function() {
    return (0, r.useContext)(l)?.retire ?? o
  }], 999498)
}, 321427, 929269, 448673, e => {
  "use strict";
  var t = e.i(984416),
    r = e.i(722099),
    a = e.i(345717),
    i = e.i(295967),
    n = e.i(374785),
    l = e.i(255859),
    s = e.i(581386),
    o = e.i(598747),
    c = e.i(281539),
    u = e.i(863641),
    d = e.i(481349),
    h = e.i(916981);

  function f(e) {
    let i, n, f, m, p, g, y = (0, r.c)(16),
      {
        card: v,
        children: _,
        ideaCardId: w,
        onCopy: S,
        shareUrl: C
      } = e,
      b = (0, h.useHatchShareLinkDialogPresentation)();
    y[0] === Symbol.for("react.memo_cache_sentinel") ? (i = a.fbs._("Try this idea on {product}!", [a.fbs._param("product", l.PRODUCT_BRAND.shortName)], {
      hk: "2Pfx0c"
    }), y[0] = i) : i = y[0];
    let A = i;
    return y[1] !== v ? (n = (0, t.jsx)("div", {
      className: d.HATCH_IDEA_SHARE_PREVIEW_CLASS,
      children: v
    }), y[1] = v, y[2] = n) : n = y[2], y[3] !== b ? (f = (0, d.hatchIdeaShareDestinations)(b), y[3] = b, y[4] = f) : f = y[4], y[5] !== w ? (m = e => ({
      eventName: c.HatchClickEvent.IDEA_SHARE_DESTINATION_CLICK,
      actionTarget: "idea_share_destination",
      actionType: "click",
      metadata: {
        destination: e,
        idea_id: w,
        surface: "idea_share"
      }
    }), y[5] = w, y[6] = m) : m = y[6], y[7] !== S || y[8] !== C || y[9] !== f || y[10] !== m ? (p = (0, t.jsx)(o.HatchShareTray, {
      destinations: f,
      getTracking: m,
      onCopy: S,
      sentrySurface: u.HATCH_SENTRY_SURFACES.IDEAS_SHARE,
      shareText: A,
      shareUrl: C
    }), y[7] = S, y[8] = C, y[9] = f, y[10] = m, y[11] = p) : p = y[11], y[12] !== _ || y[13] !== n || y[14] !== p ? (g = (0, t.jsx)(s.HatchShareDialogBody, {
      layout: "idea",
      preview: n,
      actions: p,
      children: _
    }), y[12] = _, y[13] = n, y[14] = p, y[15] = g) : g = y[15], g
  }
  e.s(["HatchIdeaShareDialogLayout", 0, f], 929269);
  var m = e.i(832964),
    p = e.i(239286),
    g = e.i(503367);

  function y(e) {
    let a, i, n = (0, r.c)(3),
      {
        children: l
      } = e;
    return n[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)("img", {
      src: d.HATCH_IDEA_SHARE_PLACEHOLDER_SRC,
      alt: "",
      "aria-hidden": "true",
      width: g.MUSE_SOCIAL_IMAGE_WIDTH,
      height: g.MUSE_SOCIAL_IMAGE_HEIGHT,
      className: "block h-auto w-full"
    }), n[0] = a) : a = n[0], n[1] !== l ? (i = (0, t.jsxs)("div", {
      className: d.HATCH_IDEA_SHARE_CARD_CLASS,
      children: [a, l]
    }), n[1] = l, n[2] = i) : i = n[2], i
  }

  function v() {
    let e, a, i = (0, r.c)(2);
    return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(m.Skeleton, {
      className: "absolute inset-0",
      strength: "light"
    }), i[0] = e) : e = i[0], i[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsxs)("div", {
      "aria-hidden": "true",
      "data-testid": "idea-share-preparing",
      className: "pointer-events-none absolute inset-0 flex items-center justify-center motion-reduce:[&_*]:!animate-none",
      children: [e, (0, t.jsx)("div", {
        className: "bg-fill-primary shadow-blur-elevation-01 relative rounded-full p-3",
        children: (0, t.jsx)(p.Spinner, {
          size: 24,
          isDecorative: !0
        })
      })]
    }), i[1] = a) : a = i[1], a
  }

  function _() {}

  function w(e) {
    let l, s, o, c, u = (0, r.c)(7),
      {
        announcesLoading: h
      } = e;
    u[0] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.cn)(d.HATCH_IDEA_SHARE_CARD_CLASS, "motion-reduce:[&_*]:!animate-none"), u[0] = l) : l = u[0];
    let f = h ? "status" : void 0;
    return u[1] !== h ? (s = h ? a.fbs._("Loading idea preview", null, {
      hk: "1VLWF3"
    }) : void 0, u[1] = h, u[2] = s) : s = u[2], u[3] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)(y, {
      children: (0, t.jsx)(v, {})
    }), u[3] = o) : o = u[3], u[4] !== f || u[5] !== s ? (c = (0, t.jsx)(i.LoadingState, {
      name: "idea_share_create",
      className: l,
      children: (0, t.jsx)("div", {
        role: f,
        "aria-label": s,
        "aria-busy": "true",
        children: o
      })
    }), u[4] = f, u[5] = s, u[6] = c) : c = u[6], c
  }
  e.s(["HatchIdeaSharePreviewFrame", 0, y, "HatchIdeaSharePreviewPreparing", 0, v], 448673), e.s(["HatchIdeaShareDialogSkeleton", 0, function(e) {
    let a, i, n = (0, r.c)(3),
      {
        ideaCardId: l
      } = e;
    return n[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)(w, {
      announcesLoading: !0
    }), n[0] = a) : a = n[0], n[1] !== l ? (i = (0, t.jsx)(f, {
      ideaCardId: l,
      card: a,
      shareUrl: null,
      onCopy: _
    }), n[1] = l, n[2] = i) : i = n[2], i
  }, "HatchIdeaSharePreviewSkeleton", 0, w], 321427)
}, 25527, e => {
  "use strict";
  var t = e.i(984416),
    r = e.i(345717),
    a = e.i(722099),
    i = e.i(581386),
    n = e.i(598747),
    l = e.i(281539),
    s = e.i(863641);
  e.s(["HatchMediaShareDialogLayout", 0, function(e) {
    let o, c, u, d = (0, a.c)(13),
      {
        children: h,
        onCopy: f,
        preview: m,
        shareUrl: p,
        source: g,
        isBlocked: y
      } = e,
      v = void 0 !== y && y;
    return d[0] !== v || d[1] !== g ? (o = v ? (0, t.jsx)("p", {
      role: "alert",
      children: r.fbt._("This content may contain personal details about other people and can't be shared.", null, {
        hk: "3Uq99g"
      })
    }) : "message" === g ? r.fbt._("Anyone who has the link will be able to see this message.", null, {
      hk: "4rQbWh"
    }) : r.fbt._("Anyone who has the link will be able to see this media.", null, {
      hk: "1AhWX0"
    }), d[0] = v, d[1] = g, d[2] = o) : o = d[2], d[3] !== v || d[4] !== f || d[5] !== p || d[6] !== g ? (c = v ? null : (0, t.jsx)(n.HatchShareTray, {
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
      shareUrl: p
    }), d[3] = v, d[4] = f, d[5] = p, d[6] = g, d[7] = c) : c = d[7], d[8] !== h || d[9] !== m || d[10] !== o || d[11] !== c ? (u = (0, t.jsx)(i.HatchShareDialogBody, {
      layout: "media",
      preview: m,
      description: o,
      actions: c,
      children: h
    }), d[8] = h, d[9] = m, d[10] = o, d[11] = c, d[12] = u) : u = d[12], u
  }, "MEDIA_SHARE_PREVIEW_CLASS", 0, "bg-bg-primary rounded-32 shadow-blur-elevation-03 relative flex aspect-square w-full max-w-83 items-center justify-center overflow-hidden"])
}, 481349, e => {
  "use strict";
  let t = e.i(773861).HATCH_SHARE_TRAY_DEFAULT_DESTINATIONS,
    r = ["share", ...t];
  e.s(["HATCH_IDEA_SHARE_CARD_CLASS", 0, "relative w-full", "HATCH_IDEA_SHARE_PLACEHOLDER_SRC", 0, "/images/sharing/idea-og-placeholder.png", "HATCH_IDEA_SHARE_PREVIEW_CLASS", 0, "w-full", "hatchIdeaShareDestinations", 0, function(e) {
    return "sheet" === e ? r : t
  }])
}, 916981, e => {
  "use strict";
  var t = e.i(519172);
  let r = (0, t.createContext)("dialog");
  e.s(["HatchShareLinkDialogPresentationContext", 0, r, "useHatchShareLinkDialogPresentation", 0, function() {
    return (0, t.useContext)(r)
  }])
}, 226488, e => {
  "use strict";
  e.s(["queryOptions", 0, function(e) {
    return e
  }])
}, 293760, 121712, e => {
  "use strict";
  var t = e.i(414822),
    r = e.i(384778),
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
          behavior: (0, r.infiniteQueryBehavior)()
        })
      }
      getOptimisticResult(e) {
        return e.behavior = (0, r.infiniteQueryBehavior)(), super.getOptimisticResult(e)
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
        } = e, i = super.createResult(e, t), {
          isFetching: n,
          isRefetching: l,
          isError: s,
          isRefetchError: o
        } = i, c = a.fetchMeta?.fetchMore?.direction, u = s && "forward" === c, d = n && "forward" === c, h = s && "backward" === c, f = n && "backward" === c;
        return {
          ...i,
          fetchNextPage: this.fetchNextPage,
          fetchPreviousPage: this.fetchPreviousPage,
          hasNextPage: (0, r.hasNextPage)(t, a.data),
          hasPreviousPage: (0, r.hasPreviousPage)(t, a.data),
          isFetchNextPageError: u,
          isFetchingNextPage: d,
          isFetchPreviousPageError: h,
          isFetchingPreviousPage: f,
          isRefetchError: o && !u && !h,
          isRefetching: l && !d && !f
        }
      }
    };
  e.s(["InfiniteQueryObserver", 0, a], 121712);
  var i = e.i(768380);
  e.s(["useInfiniteQuery", 0, function(e, t) {
    return (0, i.useBaseQuery)(e, a, t)
  }], 293760)
}, 203576, e => {
  "use strict";
  var t = e.i(984416),
    r = e.i(722099);

  function a(e) {
    let a, i, n, l, s = (0, r.c)(9);
    return s[0] !== e.title ? (a = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = a) : a = s[1], s[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = i) : i = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)("path", {
      d: "M11.977 23c-3.336-.022-5.902-1.105-7.625-3.217-1.534-1.88-2.325-4.496-2.352-7.775v-.016c.027-3.279.818-5.895 2.352-7.775C6.075 2.105 8.64 1.022 11.977 1H11.99c2.558.017 4.698.664 6.361 1.922 1.563 1.183 2.663 2.87 3.27 5.013l-1.9.52c-1.029-3.63-3.632-5.484-7.737-5.514-2.71.02-4.76.858-6.094 2.491C4.642 6.962 3.997 9.172 3.973 12c.024 2.828.67 5.038 1.917 6.568 1.333 1.633 3.383 2.471 6.094 2.49 2.443-.016 4.06-.577 5.405-1.873 1.535-1.479 1.507-3.293 1.016-4.397-.29-.65-.814-1.192-1.522-1.603-.178 1.237-.579 2.242-1.197 2.999-.825 1.01-1.994 1.562-3.474 1.64-1.121.06-2.2-.2-3.038-.734-.99-.63-1.57-1.596-1.632-2.718-.06-1.091.38-2.094 1.238-2.825.82-.698 1.975-1.107 3.338-1.183a12.946 12.946 0 0 1 2.814.13c-.115-.68-.348-1.219-.697-1.61-.478-.535-1.218-.81-2.198-.816-.79-.002-1.876.201-2.564 1.209L7.835 8.194c.919-1.344 2.412-2.08 4.214-2.067 2.977.018 4.75 1.81 4.927 4.939.1.041.2.085.299.13 1.389.643 2.405 1.616 2.938 2.814.742 1.67.81 4.391-1.443 6.562-1.723 1.66-3.813 2.408-6.78 2.428h-.013zm.94-10.717c-.224 0-.454.006-.688.02-1.71.094-2.777.865-2.716 1.964.063 1.15 1.353 1.684 2.593 1.62 1.14-.061 2.626-.498 2.875-3.402a10.04 10.04 0 0 0-2.063-.202z"
    }), s[4] = n) : n = s[4], s[5] !== e || s[6] !== a || s[7] !== i ? (l = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [a, i, n]
    }), s[5] = e, s[6] = a, s[7] = i, s[8] = l) : l = s[8], l
  }
  a._isSVG = !0, e.s(["default", 0, a])
}, 900772, e => {
  "use strict";
  var t = e.i(984416),
    r = e.i(722099);

  function a(e) {
    let a, i, n, l, s = (0, r.c)(9);
    return s[0] !== e.title ? (a = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = a) : a = s[1], s[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = i) : i = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.269 3H2l7.493 9.786L2.026 21h2.703l6-6.6L15.78 21h6.27l-7.92-10.343L21.092 3H18.39l-5.493 6.043L8.269 3zm8.5 16L6.05 5h1.231L18 19h-1.231z"
    }), s[4] = n) : n = s[4], s[5] !== e || s[6] !== a || s[7] !== i ? (l = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [a, i, n]
    }), s[5] = e, s[6] = a, s[7] = i, s[8] = l) : l = s[8], l
  }
  a._isSVG = !0, e.s(["default", 0, a])
}, 200388, e => {
  "use strict";
  var t = e.i(984416),
    r = e.i(722099);

  function a(e) {
    let a, i, n, l, s, o = (0, r.c)(10);
    return o[0] !== e.title ? (a = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), o[0] = e.title, o[1] = a) : a = o[1], o[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), o[2] = e.children, o[3] = i) : i = o[3], o[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)("path", {
      d: "M15.45 8.55C18.13 11.24 18.13 15.59 15.45 18.27L12.62 21.1C9.93 23.79 5.58 23.79 2.9 21.1C0.21 18.42 0.21 14.07 2.9 11.38L4.87 9.4C4.76 10.22 4.76 11.05 4.89 11.86L4.13 12.62C2.13 14.62 2.13 17.86 4.13 19.87C6.13 21.87 9.38 21.87 11.38 19.87L14.21 17.04C16.21 15.04 16.21 11.79 14.21 9.79C13.3 8.88 12.12 8.38 10.93 8.3C10.96 8.27 10.99 8.23 11.03 8.2L12.43 6.79C13.54 7.1 14.58 7.69 15.45 8.55Z"
    }), l = (0, t.jsx)("path", {
      d: "M21.1 2.9C23.79 5.58 23.79 9.93 21.1 12.62L19.13 14.59C19.24 13.78 19.24 12.95 19.11 12.13L19.87 11.38C21.87 9.38 21.87 6.13 19.87 4.13C17.86 2.13 14.62 2.13 12.62 4.13L9.79 6.96C7.79 8.96 7.79 12.21 9.79 14.21C10.7 15.12 11.87 15.62 13.07 15.7C13.04 15.73 13 15.77 12.97 15.8L11.57 17.21C10.46 16.9 9.42 16.31 8.55 15.45C5.87 12.76 5.87 8.41 8.55 5.72L11.38 2.9C14.07 0.21 18.42 0.21 21.1 2.9Z"
    }), o[4] = n, o[5] = l) : (n = o[4], l = o[5]), o[6] !== e || o[7] !== a || o[8] !== i ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [a, i, n, l]
    }), o[6] = e, o[7] = a, o[8] = i, o[9] = s) : s = o[9], s
  }
  a._isSVG = !0, e.s(["default", 0, a])
}, 358338, e => {
  "use strict";
  var t = e.i(984416),
    r = e.i(722099);

  function a(e) {
    let a, i, n, l, s, o = (0, r.c)(10);
    return o[0] !== e.title ? (a = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), o[0] = e.title, o[1] = a) : a = o[1], o[2] !== e.children ? (i = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), o[2] = e.children, o[3] = i) : i = o[3], o[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)("path", {
      d: "M17.02 8.79C17.42 8.47 17.74 8.2 18.06 8.48C18.39 8.75 18.13 9.18 17.4 10.41C17.25 10.66 17.07 10.95 16.88 11.28C16.68 11.62 16.5 11.93 16.34 12.22C15.28 14.06 14.77 14.96 13.86 14.96C12.99 14.96 12.34 14.36 11.59 13.66C11.43 13.52 11.27 13.37 11.1 13.22C10.22 12.44 9.93 12.35 8.93 13.22C8.01 14.02 7.36 14.56 6.83 14.96C6.3 15.36 6.11 15.49 5.71 15.22C5.4 15.01 5.63 14.56 5.84 14.22C6.26 13.56 6.97 12.44 7.6 11.42C8.06 10.68 8.49 10.01 8.74 9.61C9.33 8.68 10.38 8.77 11.43 9.61C11.84 9.94 12.09 10.13 12.28 10.28C12.52 10.47 12.67 10.59 12.94 10.81C13.66 11.42 13.86 11.35 14.65 10.68C15.44 10.01 16.22 9.41 16.75 9.01C16.84 8.94 16.93 8.86 17.02 8.79Z"
    }), l = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 1C18.04 1 23 5.74 23 11.66C23 17.58 18.04 22.32 12 22.32C10.97 22.32 9.97 22.18 9.03 21.92C8.39 22.25 7.59 22.64 7.11 22.82C6.52 23.06 5.86 23.09 5.31 22.73C4.77 22.38 4.56 21.81 4.56 21.32V19.51C2.38 17.57 1 14.78 1 11.66C1 5.74 5.96 1 12 1ZM12 3C7 3 3 6.91 3 11.66C3 14.31 4.23 16.68 6.19 18.28L6.56 18.58V20.88C7.06 20.67 7.86 20.28 8.47 19.97L8.83 19.78L9.22 19.9C10.1 20.17 11.03 20.32 12 20.32C17 20.32 21 16.41 21 11.66C21 6.91 17 3 12 3Z"
    }), o[4] = n, o[5] = l) : (n = o[4], l = o[5]), o[6] !== e || o[7] !== a || o[8] !== i ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [a, i, n, l]
    }), o[6] = e, o[7] = a, o[8] = i, o[9] = s) : s = o[9], s
  }
  a._isSVG = !0, e.s(["default", 0, a])
}]);

//# debugId=c5d0f879-cfcf-cd4a-c761-1c6c563dd458
//# sourceMappingURL=3qer50kq_yec8.js.map