;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "39f94979-8485-d711-4b3e-eb8527013302")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 538206, e => {
  "use strict";
  var t = e.i(984416),
    l = e.i(792135),
    n = e.i(393401),
    r = e.i(294237),
    a = e.i(519172),
    i = e.i(374785),
    o = e.i(848048),
    u = e.i(646361);
  let s = (0, r.cva)(" inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full focus:not-focus-visible:outline-none transition-transform duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 select-none", {
      defaultVariants: {
        size: "36",
        variant: "primary"
      },
      variants: {
        size: {
          20: "size-6",
          24: "size-7",
          28: "size-8",
          32: "size-9",
          "32-24": "size-9",
          36: "size-10",
          48: "size-14"
        },
        variant: {
          ...n.baseButtonVariants
        }
      }
    }),
    c = {
      20: 16,
      24: 20,
      28: 20,
      32: 20,
      "32-24": 24,
      36: 28,
      48: 24
    },
    d = a.forwardRef(function({
      asChild: e = !1,
      className: n,
      icon: r,
      iconClassName: a,
      label: d,
      size: h,
      variant: f,
      analyticsEvent: m,
      analyticsActionOverride: b,
      analyticsMetadata: g,
      onClick: p,
      children: v = e => e,
      ...y
    }, w) {
      let C = e ? l.Slot : "button",
        k = c[h ?? "32"] ?? 24,
        {
          wrapWithAnalytics: x
        } = (0, o.useAnalyticsHandler)(m, "IconRailButton", b, g);
      return (0, t.jsx)("div", {
        className: (0, i.cn)("contents", ("on-media" === f || "on-media-borderless" === f) && "dark"),
        children: (0, t.jsx)(C, {
          ref: w,
          "aria-label": d,
          className: (0, i.cn)(s({
            className: n,
            size: h,
            variant: f
          })),
          "data-slot": "button",
          onClick: x(p),
          ...y,
          children: v((0, t.jsx)(u.HatchIcon, {
            icon: r,
            size: k,
            className: (0, i.cn)("m-0.5", a)
          }))
        })
      })
    });
  d.displayName = "IconRailButton", e.s(["IconRailButton", 0, d])
}, 660983, e => {
  "use strict";
  var t = e.i(984416),
    l = e.i(722099),
    n = e.i(239286),
    r = e.i(295967);
  e.s(["LoadingSpinner", 0, function(e) {
    let a, i, o = (0, l.c)(7),
      {
        size: u,
        className: s,
        style: c,
        name: d
      } = e,
      h = void 0 === u ? 24 : u;
    return o[0] !== h ? (a = (0, t.jsx)(n.Spinner, {
      size: h
    }), o[0] = h, o[1] = a) : a = o[1], o[2] !== s || o[3] !== d || o[4] !== c || o[5] !== a ? (i = (0, t.jsx)(r.LoadingState, {
      className: s,
      style: c,
      name: d,
      children: a
    }), o[2] = s, o[3] = d, o[4] = c, o[5] = a, o[6] = i) : i = o[6], i
  }])
}, 566905, e => {
  "use strict";
  var t = e.i(722099),
    l = e.i(42673);
  e.s(["useIsIOSWebkit", 0, function() {
    let e, n, r = (0, t.c)(4),
      a = (0, l.useUserAgent)();
    r[0] !== a?.os.name ? (e = a?.os.name?.toLowerCase(), r[0] = a?.os.name, r[1] = e) : e = r[1];
    let i = e;
    r[2] !== a?.engine.name ? (n = a?.engine.name?.toLowerCase(), r[2] = a?.engine.name, r[3] = n) : n = r[3];
    let o = n,
      u = ("mac os" === i || "macos" === i) && "u" > typeof navigator && navigator.maxTouchPoints > 1;
    return "webkit" === o && ("ios" === i || u)
  }])
}, 441635, e => {
  "use strict";
  var t = e.i(984416),
    l = e.i(345717),
    n = e.i(722099),
    r = e.i(396817),
    a = e.i(181959),
    i = e.i(181883),
    o = e.i(482129),
    u = e.i(651126),
    s = e.i(173174),
    c = e.i(440802),
    d = e.i(519172),
    h = e.i(89820);

  function f(e) {
    let l, r, a, i, o, u, s, c = (0, n.c)(25),
      {
        backgroundImage: f,
        backgroundImageCrossOrigin: m,
        fallbackKey: b,
        fadeInOnInitialLoad: g
      } = e,
      p = void 0 === b ? null : b,
      v = void 0 !== g && g,
      [y, w] = (0, d.useState)(!v && f ? f : null),
      [C, k] = (0, d.useState)(null),
      [x, E] = (0, d.useState)(f);
    f !== x && (E(f), f || (k(y), w(null)));
    let _ = null != C || v;
    c[0] !== f || c[1] !== y ? (l = () => {
      null != f && f !== y && (k(y), w(f))
    }, c[0] = f, c[1] = y, c[2] = l) : l = c[2];
    let T = l;
    c[3] !== y || c[4] !== p ? (r = null == y && null != p ? function(e) {
      let t = 0;
      for (let l = 0; l < e.length; l++) t = 31 * t + e.charCodeAt(l) | 0;
      return (t % 360 + 360) % 360
    }(p) : null, c[3] = y, c[4] = p, c[5] = r) : r = c[5];
    let H = r;
    c[6] !== H ? (a = null == H ? void 0 : {
      background: `radial-gradient(ellipse at 30% 50%, hsla(${H}, 40%, 25%, 0.6), transparent 70%), radial-gradient(ellipse at 70% 60%, hsla(${(H+40)%360}, 30%, 20%, 0.5), transparent 70%), black`
    }, c[6] = H, c[7] = a) : a = c[7];
    let R = a;
    return c[8] !== f || c[9] !== m || c[10] !== y || c[11] !== T ? (i = f && f !== y && (0, t.jsx)("img", {
      src: f,
      alt: "",
      crossOrigin: m ?? (0, h.getSignedMediaCrossOrigin)(f),
      onLoad: T,
      className: "hidden"
    }, `preloader-${f}`), c[8] = f, c[9] = m, c[10] = y, c[11] = T, c[12] = i) : i = c[12], c[13] !== m || c[14] !== y || c[15] !== _ ? (o = null != y && (0, t.jsx)("img", {
      src: y,
      alt: "",
      crossOrigin: m ?? (0, h.getSignedMediaCrossOrigin)(y),
      className: `absolute start-1/2 top-1/2 h-[200vh] w-[200vw] -translate-x-1/2 -translate-y-1/2 object-cover opacity-50 [mix-blend-mode:plus-lighter] blur-[183.27272033691406px] will-change-[opacity] ${_?"motion-safe:animate-[lightboxFadeIn_0.3s_ease_both]":""}`
    }, y), c[13] = m, c[14] = y, c[15] = _, c[16] = o) : o = c[16], c[17] !== m || c[18] !== C ? (u = null != C && (0, t.jsx)("img", {
      src: C,
      alt: "",
      crossOrigin: m ?? (0, h.getSignedMediaCrossOrigin)(C),
      className: "absolute start-1/2 top-1/2 h-[200vh] w-[200vw] -translate-x-1/2 -translate-y-1/2 object-cover opacity-50 [mix-blend-mode:plus-lighter] blur-[183.27272033691406px] will-change-[opacity] motion-safe:animate-[lightboxFadeOut_0.3s_ease_both] motion-reduce:hidden"
    }, C), c[17] = m, c[18] = C, c[19] = u) : u = c[19], c[20] !== R || c[21] !== i || c[22] !== o || c[23] !== u ? (s = (0, t.jsxs)("div", {
      className: "absolute inset-0 z-0 h-full w-full overflow-hidden bg-black [contain:strict]",
      style: R,
      children: [i, o, u]
    }), c[20] = R, c[21] = i, c[22] = o, c[23] = u, c[24] = s) : s = c[24], s
  }
  var m = e.i(374785),
    b = e.i(486868),
    g = e.i(848048),
    p = e.i(255772),
    v = e.i(281539),
    y = e.i(823173),
    w = e.i(566905),
    C = e.i(47247),
    k = e.i(359783),
    x = e.i(863641),
    E = e.i(419453),
    _ = e.i(960607);
  e.i(970012);
  var T = e.i(91521),
    H = e.i(648094),
    R = e.i(907579),
    j = e.i(487186),
    L = e.i(439947),
    M = e.i(660983),
    S = e.i(176358),
    U = e.i(921192);
  let P = (0, k.createClientLogger)("HatchMediaLightbox");

  function I(e) {
    return null == e || 0 === e.length || (0, _.isHatchVmMediaUrl)(e) ? null : (0, U.proxyExternalImageUrl)(e)
  }

  function N(e) {
    try {
      let t = new URL(e, window.location.href);
      if ("https:" !== t.protocol && "http:" !== t.protocol) return null;
      return t.origin === window.location.origin ? "same-origin" : "omit"
    } catch {
      return null
    }
  }
  async function O({
    fs: e,
    item: t,
    downloadSrc: l,
    sourceSrc: n,
    filename: r,
    toast: a,
    messages: i
  }) {
    if (null != t.path) {
      let l = await e.rawFetch(t.path);
      return l.ok ? ((0, H.triggerBlobDownload)(r, l.data), void a(i.success)) : void a(i.error)
    }
    let o = N(l);
    if (null != o) {
      try {
        let e = await fetch(l, {
          credentials: o
        });
        if (!e.ok) throw Error(`Media download failed with HTTP ${e.status}`);
        (0, H.triggerBlobDownload)(r, await e.blob()), a(i.success)
      } catch (e) {
        P.error({
          error: e instanceof Error ? e : Error(String(e)),
          hostname: function(e) {
            try {
              return new URL(e, window.location.href).hostname
            } catch {
              return null
            }
          }(n),
          tags: (0, x.hatchSentryTags)(x.HATCH_SENTRY_SURFACES.MEDIA_VIEWER)
        }, "HTTP media download failed"), a(i.error)
      }
      return
    }! function(e, t, l, n) {
      try {
        let r = null;
        if (e.startsWith("data:")) {
          let t, l = e.indexOf(",");
          if (-1 === l) return;
          let n = e.slice(0, l),
            a = e.slice(l + 1),
            i = n.includes(";base64"),
            o = n.match(/^data:([^;,]+)/),
            u = o?.[1] ?? "image/png";
          if (i) {
            let e = atob(a);
            t = new Uint8Array(e.length);
            for (let l = 0; l < e.length; l++) t[l] = e.charCodeAt(l)
          } else {
            let e = decodeURIComponent(a);
            t = new TextEncoder().encode(e)
          }
          let s = new Blob([t.buffer], {
            type: u
          });
          r = URL.createObjectURL(s)
        }
        let a = document.createElement("a");
        a.href = r ?? e, a.download = t, document.body.appendChild(a), a.click(), document.body.removeChild(a), r && URL.revokeObjectURL(r), l(n.success)
      } catch {
        l(n.error)
      }
    }(l, r, a, i)
  }

  function A(e) {
    let t = (function(e) {
      try {
        return decodeURIComponent(e)
      } catch {
        return e
      }
    })(e.split(/[?#]/)[0] ?? e).split(/[\\/]/).pop();
    return t && t.length > 0 ? t : void 0
  }

  function D(e) {
    if (!(e.startsWith("data:") || e.startsWith("blob:"))) try {
      let t = new URL(e, window.location.href);
      if (t.pathname === E.VIDEO_PROXY_PATH && "same-origin" === N(e)) {
        let e = (0, E.parseExternalVideoUrl)(t.searchParams.get("url") ?? "");
        return null == e ? void 0 : A(e.pathname)
      }
      let l = t.searchParams.get("path");
      if (l) return A(l);
      let n = A(t.pathname);
      if ("fileserver-read" === n) return;
      return n
    } catch {
      return A(e)
    }
  }

  function F() {
    let e, t = (0, n.c)(1);
    return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
      metadata: {
        surface: "media_viewer",
        screen: "lightbox"
      }
    }, t[0] = e) : e = t[0], (0, g.useTimeSpent)(p.HatchTimeSpentEvent.MEDIA_VIEWER, "media_viewer", e), null
  }
  e.s(["HatchMediaLightbox", 0, function({
    allowLibraryShare: e = !1,
    items: n,
    initialIndex: p = 0,
    alt: k = "",
    itemAlts: x,
    open: E,
    onOpenChange: H,
    onDelete: U,
    startUnmuted: P = !1,
    mediaStatus: N = "ready",
    navigation: A
  }) {
    let B = (0, R.useHatchGatewayFs)(),
      V = l.fbs._("Media saved", null, {
        hk: "t7CIw"
      }),
      z = l.fbs._("Download failed. Please try again.", null, {
        hk: "2uptWb"
      }),
      [K, W] = (0, d.useState)(p),
      [$, G] = (0, d.useState)(null),
      [X, Y] = (0, d.useState)(!1),
      q = (0, d.useRef)(!1),
      Z = (0, w.useIsIOSWebkit)(),
      {
        ref: Q
      } = (0, g.useTrackedImpressionRef)({
        eventName: y.HatchImpressionEvent.MEDIA_VIEWER_IMPRESSION,
        actionTarget: "media_lightbox",
        metadata: {
          surface: "media_viewer",
          screen: "media_fullscreen"
        }
      }, {
        threshold: "50%"
      }),
      {
        ref: J,
        onClick: ee
      } = (0, g.useTrackedClickRef)({
        eventName: v.HatchClickEvent.MEDIA_CLOSE,
        actionTarget: "close_button",
        actionType: "dismiss",
        metadata: {
          surface: "media_viewer",
          screen: "media_fullscreen"
        }
      }),
      {
        ref: et,
        onClick: el
      } = (0, g.useTrackedClickRef)({
        eventName: v.HatchClickEvent.MEDIA_NAV_PREV,
        actionTarget: "prev_button",
        actionType: "click",
        metadata: {
          surface: "media_viewer",
          subsurface: "navigation"
        }
      }),
      {
        ref: en,
        onClick: er
      } = (0, g.useTrackedClickRef)({
        eventName: v.HatchClickEvent.MEDIA_NAV_NEXT,
        actionTarget: "next_button",
        actionType: "click",
        metadata: {
          surface: "media_viewer",
          subsurface: "navigation"
        }
      }),
      {
        ref: ea,
        onClick: ei
      } = (0, g.useTrackedClickRef)({
        eventName: v.HatchClickEvent.FILE_DELETE_CLICK,
        actionTarget: "delete_button",
        actionType: "click",
        metadata: {
          surface: "media_viewer",
          subsurface: "media_controls",
          screen: "media_fullscreen",
          target_kind: "media"
        }
      }),
      {
        ref: eo,
        onClick: eu
      } = (0, g.useTrackedClickRef)({
        eventName: v.HatchClickEvent.MEDIA_DOWNLOAD,
        actionTarget: "download_button",
        actionType: "click",
        metadata: {
          surface: "media_viewer",
          subsurface: "media_controls",
          screen: "media_fullscreen"
        }
      }),
      es = (0, d.useCallback)(e => {
        e || ee(), H(e)
      }, [ee, H]);
    (0, d.useEffect)(() => {
      E && W(p)
    }, [E, p]);
    let ec = n[K] ?? null,
      ed = x?.[K]?.trim(),
      eh = null != ed && ed.length > 0 ? ed : k,
      ef = (0, T.getHatchMediaItemRenderSrc)(ec, "full") ?? "",
      em = ec?.kind ?? "image",
      eb = "image" === em ? I(ef) ?? "" : ef.length > 0 && !(0, _.isHatchVmMediaUrl)(ef) ? ef : "",
      eg = I((0, T.getHatchMediaItemRenderSrc)(ec, "thumbnail")),
      ep = ef.length > 0 && 0 === eb.length,
      ev = null != ec && (null != ec.path || eb.length > 0),
      ey = (0, L.resolveHatchMediaBackdrop)({
        mediaKind: em,
        currentSrc: eb,
        posterSrc: eg
      }),
      ew = (0, d.useRef)(null != ey);
    null != ey && (ew.current = !0);
    let eC = n.length > 1,
      ek = A?.canGoPrevious ?? eC,
      ex = A?.canGoNext ?? eC,
      eE = A?.isPending ?? !1,
      e_ = null == A ? eC : ek || ex || eE,
      eT = (0, d.useCallback)(() => {
        W(e => e > 0 ? e - 1 : n.length - 1)
      }, [n.length]),
      eH = (0, d.useCallback)(() => {
        W(e => e < n.length - 1 ? e + 1 : 0)
      }, [n.length]),
      eR = (0, d.useCallback)(() => {
        if (ek && !eE) {
          if (el(), null != A) return void A.onPrevious();
          eT()
        }
      }, [ek, eT, el, A, eE]),
      ej = (0, d.useCallback)(() => {
        if (ex && !eE) {
          if (er(), null != A) return void A.onNext();
          eH()
        }
      }, [ex, eH, er, A, eE]);
    return (0, d.useEffect)(() => {
      if (!E || !e_) return;
      let e = e => {
        var t;
        if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || (t = e.target) instanceof HTMLElement && (t !== document.body && null == t.closest("[data-hatch-media-lightbox='true']") || t.isContentEditable || null != t.closest("input, textarea, select, video, audio, [contenteditable='true']")))) {
          if ("ArrowLeft" === e.key) {
            if (!ek || eE) return;
            e.preventDefault(), eR()
          } else if ("ArrowRight" === e.key) {
            if (!ex || eE) return;
            e.preventDefault(), ej()
          }
        }
      };
      return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, [E, e_, ek, ex, eE, eR, ej]), (0, t.jsx)(r.Root, {
      open: E,
      onOpenChange: es,
      children: (0, t.jsxs)(r.Portal, {
        children: [(0, t.jsx)(r.Overlay, {
          className: "fixed inset-0 z-50"
        }), (0, t.jsx)(F, {}), (0, t.jsxs)(r.Content, {
          "data-hatch-media-lightbox": "true",
          className: (0, m.cn)("dark fixed inset-0 z-50 outline-none", "data-[state=open]:animate-in data-[state=closed]:animate-out", "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"),
          onClick: () => es(!1),
          ref: Q,
          children: [(0, t.jsx)(r.Title, {
            className: "sr-only",
            children: eh || l.fbs._("Media preview", null, {
              hk: "4ut6L1"
            })
          }), (0, t.jsx)("span", {
            className: "sr-only",
            "aria-live": "polite",
            "aria-atomic": "true",
            children: eh
          }), Z ? (0, t.jsx)("div", {
            className: "absolute inset-0 z-0 bg-black",
            "aria-hidden": "true",
            "data-hatch-media-lightbox-static-backdrop": "true"
          }) : (0, t.jsx)(f, {
            backgroundImage: ey,
            fadeInOnInitialLoad: "video" === em && !ew.current
          }), (0, t.jsx)(r.Close, {
            asChild: !0,
            children: (0, t.jsx)(c.IconButton, {
              ref: J,
              icon: a.default,
              label: l.fbs._("Close", null, {
                hk: "3ybN0s"
              }),
              variant: "on-media",
              size: "32",
              className: "absolute start-4 top-4 z-20",
              onClick: e => e.stopPropagation()
            })
          }), (0, t.jsxs)("div", {
            className: "absolute end-4 top-4 z-20 flex gap-2",
            children: [null != ec && "ready" === N && (0, t.jsx)(S.HatchMediaShareButton, {
              item: ec,
              library: e
            }), U && ec?.path != null && (0, t.jsx)(b.TooltipProvider, {
              delayDuration: 0,
              skipDelayDuration: 1 / 0,
              children: (0, t.jsxs)(b.Tooltip, {
                children: [(0, t.jsx)(b.TooltipTrigger, {
                  asChild: !0,
                  children: (0, t.jsx)(c.IconButton, {
                    ref: ea,
                    icon: s.default,
                    label: l.fbs._("Delete", null, {
                      hk: "3qFcOc"
                    }),
                    variant: "on-media",
                    size: "32",
                    onClick: e => {
                      e.stopPropagation(), ei(), U(ec, K)
                    }
                  })
                }), (0, t.jsx)(b.TooltipContent, {
                  side: "bottom",
                  sideOffset: 8,
                  children: l.fbt._("Delete", null, {
                    hk: "kry0K"
                  })
                })]
              })
            }), (0, t.jsx)(b.TooltipProvider, {
              delayDuration: 0,
              skipDelayDuration: 1 / 0,
              children: (0, t.jsxs)(b.Tooltip, {
                children: [(0, t.jsx)(b.TooltipTrigger, {
                  asChild: !0,
                  children: (0, t.jsx)(c.IconButton, {
                    ref: eo,
                    icon: u.default,
                    label: l.fbs._("Download", null, {
                      hk: "1Q6ZPx"
                    }),
                    variant: "on-media",
                    size: "32",
                    "aria-disabled": !ev || "ready" !== N || X || void 0,
                    "aria-busy": "loading" === N || X || void 0,
                    className: "aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
                    onClick: e => {
                      if (e.stopPropagation(), "ready" !== N || !ev || null == ec || q.current) return;
                      q.current = !0, Y(!0), eu();
                      let t = (0, C.captureHatchToast)();
                      O({
                        fs: B,
                        item: ec,
                        downloadSrc: eb,
                        sourceSrc: ef,
                        filename: function(e, t, l, n) {
                          let r = "video" === (n ?? (0, _.inferHatchMediaKind)(t)) ? `hatch-video-${l+1}.mp4` : `hatch-image-${l+1}.jpg`;
                          if (!e) return D(t) ?? r;
                          let a = e.trim().split(/[\\/]/).pop();
                          return a && a.length > 0 ? a : D(t) ?? r
                        }(ec.filename, ef, K, em),
                        toast: t,
                        messages: {
                          success: V,
                          error: z
                        }
                      }).finally(() => {
                        q.current = !1, Y(!1)
                      })
                    }
                  })
                }), (0, t.jsx)(b.TooltipContent, {
                  side: "bottom",
                  sideOffset: 8,
                  children: l.fbt._("Download", null, {
                    hk: "1gYTnW"
                  })
                })]
              })
            })]
          }), e_ && (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(c.IconButton, {
              ref: et,
              icon: i.default,
              label: l.fbs._("Previous", null, {
                hk: "6TJ6j"
              }),
              variant: "on-media",
              size: "48",
              className: "absolute start-4 top-1/2 z-20 -translate-y-1/2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
              "aria-disabled": !ek || eE || void 0,
              "aria-busy": eE || void 0,
              onClick: e => {
                e.stopPropagation(), eR()
              }
            }), (0, t.jsx)(c.IconButton, {
              ref: en,
              icon: o.default,
              label: l.fbs._("Next", null, {
                hk: "4pKy3q"
              }),
              variant: "on-media",
              size: "48",
              className: "absolute end-4 top-1/2 z-20 -translate-y-1/2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
              "aria-disabled": !ex || eE || void 0,
              "aria-busy": eE || void 0,
              onClick: e => {
                e.stopPropagation(), ej()
              }
            })]
          }), (0, t.jsx)("div", {
            className: "relative z-10 flex h-full w-full items-center justify-center p-4",
            onPointerDown: e => {
              e_ && !eE && G({
                x: e.clientX,
                y: e.clientY
              })
            },
            onPointerUp: e => {
              if (!e_ || eE || !$) return void G(null);
              let t = e.clientX - $.x,
                l = e.clientY - $.y;
              Math.abs(t) > 50 && Math.abs(t) > Math.abs(l) && (t > 0 ? eR() : ej()), G(null)
            },
            children: "loading" === N ? (0, t.jsx)("div", {
              role: "status",
              "aria-busy": "true",
              "aria-label": l.fbs._("Loading media", null, {
                hk: "1jO5vq"
              }),
              children: (0, t.jsx)(M.LoadingSpinner, {
                name: "media_lightbox"
              })
            }) : "failed" === N || ep ? (0, t.jsx)("div", {
              role: "alert",
              className: "text-body-2 text-white",
              children: l.fbs._("This media could not be displayed.", null, {
                hk: "3ALY50"
              })
            }) : eb ? "video" === em ? (0, t.jsx)(j.HatchVideoPlayer, {
              src: eb,
              posterSrc: ey,
              variant: "lightbox",
              startUnmuted: P
            }) : (0, t.jsx)("img", {
              src: eb,
              alt: eh,
              crossOrigin: (0, h.getSignedMediaCrossOrigin)(eb),
              className: "animate-in zoom-in-95 rounded-8 max-h-[90vh] max-w-[90vw] object-contain select-none",
              onClick: e => e.stopPropagation()
            }) : null
          })]
        })]
      })
    })
  }], 441635)
}, 439947, e => {
  "use strict";
  e.s(["HATCH_VIDEO_THUMBNAIL_CHUNK_SIZE", 0, 1048576, "formatHatchVideoTime", 0, function(e) {
    if (!Number.isFinite(e) || e <= 0) return "0s";
    let t = Math.floor(e),
      l = Math.floor(t / 3600),
      n = Math.floor(t % 3600 / 60),
      r = t % 60,
      a = [];
    return l > 0 && a.push(`${l}h`), n > 0 && a.push(`${n}m`), (r > 0 || 0 === a.length) && a.push(`${r}s`), a.join(" ")
  }, "resolveHatchMediaBackdrop", 0, function({
    mediaKind: e,
    currentSrc: t,
    posterSrc: l
  }) {
    return "image" === e ? t : l ?? null
  }])
}, 648094, e => {
  "use strict";
  var t = e.i(359783),
    l = e.i(120511),
    n = e.i(805163);
  let r = (0, t.createClientLogger)("HatchFileDownload");
  async function a(e) {
    if (null != e.binaryBlob) return e.binaryBlob;
    if (null == e.filePath) throw Error("Missing file path for binary download");
    let t = await e.fs.rawFetch(e.filePath);
    if (!t.ok) throw t.error;
    return t.data
  }

  function i(e, t) {
    let n = (0, l.getMimeType)(e),
      r = "application/octet-stream" !== n && t.type !== n ? t.slice(0, t.size, n) : t,
      a = URL.createObjectURL(r),
      i = document.createElement("a");
    try {
      i.href = a, i.download = e, document.body.appendChild(i), i.click()
    } finally {
      i.remove(), URL.revokeObjectURL(a)
    }
  }
  async function o(e) {
    if (e.isDirty || null == e.filePath) return new Blob([e.editedContent], {
      type: (0, l.getMimeType)(e.fileName)
    });
    if (null != e.textContent) return new Blob([e.textContent], {
      type: (0, l.getMimeType)(e.fileName)
    });
    let t = await e.fs.read(e.filePath);
    if (!t.ok) throw t.error;
    return new Blob([t.data.content], {
      type: (0, l.getMimeType)(e.fileName)
    })
  }
  async function u(e) {
    try {
      if (e.isBinaryFile) {
        let t = await a(e);
        i(e.fileName, t);
        return
      }
      let t = await o(e);
      i(e.fileName, t)
    } catch (t) {
      throw r.error({
        error: (0, n.toError)(t),
        source: e.source ?? "unknown",
        filePath: e.filePath,
        fileName: e.fileName,
        isDirty: e.isDirty,
        isBinaryFile: e.isBinaryFile,
        hasBinaryBlob: null != e.binaryBlob,
        hasTextContent: null != e.textContent
      }, "Failed to download Hatch file"), t
    }
  }
  e.s(["downloadHatchFile", 0, u, "triggerBlobDownload", 0, i])
}, 602328, e => {
  "use strict";
  e.i(970012);
  var t = e.i(89820);

  function l(e) {
    e.pause(), e.removeAttribute("src"), e.load()
  }

  function n(e, t) {
    return new Promise((n, r) => {
      let a = document.createElement("canvas"),
        i = a.getContext("2d");
      if (!i) {
        l(e), r(Error("Could not get canvas context"));
        return
      }
      let o = !1,
        u = null,
        s = n => {
          o || (o = !0, null != u && window.clearTimeout(u), t?.removeEventListener("abort", c), e.onseeked = null, e.onerror = null, e.onloadedmetadata = null, e.onloadeddata = null, l(e), n())
        },
        c = () => {
          s(() => {
            r(new DOMException("Video thumbnail generation aborted", "AbortError"))
          })
        },
        d = () => {
          try {
            a.width = e.videoWidth, a.height = e.videoHeight, i.drawImage(e, 0, 0, a.width, a.height), a.toBlob(e => {
              e ? s(() => {
                n(URL.createObjectURL(e))
              }) : s(() => {
                r(Error("Failed to create thumbnail blob"))
              })
            }, "image/jpeg")
          } catch (e) {
            s(() => r(e))
          }
        };
      (e.onseeked = d, e.onerror = () => {
        s(() => {
          r(Error("Failed to load video"))
        })
      }, e.onloadedmetadata = () => {
        var t;
        let l = !Number.isFinite(t = e.duration) || t <= 0 ? .05 : Math.max(0, Math.min(.05, t - .01));
        0 === l ? e.readyState >= 2 ? d() : e.onloadeddata = d : e.currentTime = l
      }, t?.addEventListener("abort", c, {
        once: !0
      }), t?.aborted === !0) ? c(): (u = window.setTimeout(() => {
        s(() => {
          r(Error("Timed out while generating video thumbnail"))
        })
      }, 4e3), e.load())
    })
  }
  e.s(["VIDEO_THUMBNAIL_SEEK_TIME_SECONDS", 0, .05, "generateVideoThumbnailFromFile", 0, function(e) {
    let t = document.createElement("video");
    t.preload = "metadata", t.muted = !0, t.playsInline = !0;
    let l = URL.createObjectURL(e);
    return t.src = l, n(t).finally(() => {
      URL.revokeObjectURL(l)
    })
  }, "generateVideoThumbnailFromUrl", 0, function(e, l) {
    if ((0, t.isSignedMediaRawUrl)(e)) return Promise.reject(Error("Signed media URLs are rendered directly"));
    let r = document.createElement("video");
    return r.preload = "metadata", r.muted = !0, r.playsInline = !0, e.startsWith("blob:") || (r.crossOrigin = "anonymous"), r.src = e, n(r, l)
  }])
}, 176358, e => {
  "use strict";
  var t = e.i(984416),
    l = e.i(722099),
    n = e.i(345717),
    r = e.i(848048),
    a = e.i(832815),
    i = e.i(440802),
    o = e.i(538206),
    u = e.i(486868),
    s = e.i(281539),
    c = e.i(634791);
  a.default._isSVG = !0, e.s(["HatchMediaShareButton", 0, function(e) {
    let d, h, f, m, b, g, p, v = (0, l.c)(18),
      {
        item: y,
        library: w,
        toolbar: C,
        placement: k,
        onShare: x
      } = e,
      E = void 0 !== w && w,
      _ = void 0 !== C && C,
      T = (0, c.useHatchMediaShareAction)(y, E),
      H = E ? "library" : "chat",
      R = k ?? (_ ? "widget_toolbar" : "media_viewer");
    v[0] !== H || v[1] !== R ? (d = {
      eventName: s.HatchClickEvent.MEDIA_SHARE_OPEN,
      actionTarget: "media_share",
      actionType: "click",
      metadata: {
        source: "media",
        surface: H,
        subsurface: R
      }
    }, v[0] = H, v[1] = R, v[2] = d) : d = v[2];
    let {
      ref: j,
      onClick: L
    } = (0, r.useTrackedClickRef)(d);
    if (null == T) return null;
    v[3] === Symbol.for("react.memo_cache_sentinel") ? (h = n.fbs._("Share", null, {
      hk: "1N4Qhs"
    }), v[3] = h) : h = v[3];
    let M = h;
    v[4] !== L || v[5] !== x || v[6] !== T ? (f = e => {
      e.stopPropagation(), L(), T(e.currentTarget), x?.()
    }, v[4] = L, v[5] = x, v[6] = T, v[7] = f) : f = v[7];
    let S = f;
    v[8] !== S || v[9] !== k || v[10] !== j || v[11] !== _ ? (m = _ || "media_row" === k ? (0, t.jsx)(o.IconRailButton, {
      ref: j,
      icon: a.default,
      size: "24",
      variant: "borderless",
      label: M,
      onClick: S,
      className: "text-text-secondary"
    }) : (0, t.jsx)(i.IconButton, {
      ref: j,
      icon: a.default,
      size: "32",
      variant: "on-media",
      label: M,
      onClick: S
    }), v[8] = S, v[9] = k, v[10] = j, v[11] = _, v[12] = m) : m = v[12];
    let U = m;
    return v[13] !== U ? (b = (0, t.jsx)(u.TooltipTrigger, {
      asChild: !0,
      children: U
    }), v[13] = U, v[14] = b) : b = v[14], v[15] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, t.jsx)(u.TooltipContent, {
      side: "bottom",
      children: M
    }), v[15] = g) : g = v[15], v[16] !== b ? (p = (0, t.jsx)(u.TooltipProvider, {
      delayDuration: 500,
      children: (0, t.jsxs)(u.Tooltip, {
        children: [b, g]
      })
    }), v[16] = b, v[17] = p) : p = v[17], p
  }])
}, 634791, e => {
  "use strict";
  var t = e.i(722099),
    l = e.i(519172),
    n = e.i(157139);
  e.s(["useHatchMediaShareAction", 0, function(e, r) {
    let a, i, o, u = (0, t.c)(13),
      s = (0, n.useHatchContentShare)(),
      c = (0, n.useHatchMessageShareSource)(),
      d = (0, l.useContext)(n.HatchPresentationMediaShareSourcesContext),
      h = r ? null : c,
      f = e?.originalSource ?? e?.path ?? e?.variants.original;
    u[0] !== e?.originalSourceUrlEncoded || u[1] !== e?.path || u[2] !== r || u[3] !== f || u[4] !== d ? (a = r ? e?.path : e?.originalSourceUrlEncoded === !0 ? null : d?.get(f ?? ""), u[0] = e?.originalSourceUrlEncoded, u[1] = e?.path, u[2] = r, u[3] = f, u[4] = d, u[5] = a) : a = u[5];
    let m = a;
    u[6] !== m || u[7] !== h ? (i = null != h ? {
      contentType: "message",
      contentId: h
    } : m?.trim() ? {
      contentType: "media",
      contentId: m
    } : null, u[6] = m, u[7] = h, u[8] = i) : i = u[8];
    let b = i;
    return null != s && null != e && null != b && f?.trim() ? (u[9] !== b || u[10] !== e || u[11] !== s ? (o = t => s.shareMedia(e, b, t), u[9] = b, u[10] = e, u[11] = s, u[12] = o) : o = u[12], o) : null
  }])
}, 926250, e => {
  "use strict";
  var t = e.i(722099),
    l = e.i(519172),
    n = e.i(539522),
    r = e.i(826972),
    a = e.i(55473),
    i = e.i(960607);
  e.i(970012);
  var o = e.i(89820),
    u = e.i(602328),
    s = e.i(499608),
    c = e.i(709853),
    d = e.i(907579),
    h = e.i(439947);
  let f = new Map,
    m = new Map;

  function b(e) {
    let t = e?.trim();
    return null != t && t.length > 0 ? t : null
  }
  let g = e => ({
    path: e,
    urlEncoded: !1
  });

  function p(e) {
    if (null == e) return null;
    let t = e.trim();
    if (0 === t.length) return null;
    let l = (0, i.getVmMediaNoiseFetchPath)(t);
    if (void 0 !== l) return null == l ? null : {
      path: l,
      urlEncoded: !0
    };
    let n = (0, i.getTrustedWorkspaceFilePathFromSource)(t);
    if (null != n) return g(n.startsWith("/") ? n : `/${n}`);
    if (null != (0, a.getHatchDirectMediaSource)(t)) return null;
    let r = (0, a.getHatchMediaFetchPath)(t);
    return null != r ? g(r) : t.startsWith("sandbox://") ? null : g(t)
  }

  function v(e, t = !1) {
    if (null == e) return null;
    let l = e.trim();
    if (0 === l.length) return null;
    let o = (0, i.getVmMediaNoiseFetchPath)(l);
    if (void 0 !== o) return null == o ? null : {
      path: o,
      urlEncoded: !0
    };
    let u = (0, i.getTrustedWorkspaceFilePathFromSource)(l);
    if (null != u) return p(u);
    if (null != (0, a.getHatchDirectMediaSource)(l)) return null;
    let s = (0, a.getHatchMediaFetchPath)(l) ?? (0, n.resolveLocalImagePath)(l);
    if (null == s) return null;
    if (!t) return g(s);
    let c = (0, r.resolveHatchGatewayUrlPath)(s);
    return null == c ? null : {
      path: c.path,
      urlEncoded: c.urlEncodedPath
    }
  }

  function y(e) {
    return null == e || (0, i.isInternalHatchFileserverSource)(e) || (0, i.isHatchVmMediaUrl)(e) ? null : (0, a.getHatchDirectMediaSource)(e)
  }

  function w(e) {
    return null == e || (0, i.isInternalHatchFileserverSource)(e) || (0, i.isHatchVmMediaUrl)(e) ? null : e
  }

  function C(e) {
    !e.evicted || e.revoked || e.activeConsumers > 0 || e.pendingConsumers > 0 || (e.revoked = !0, URL.revokeObjectURL(e.url))
  }

  function k(e) {
    e.evicted = !0, C(e)
  }

  function x() {
    for (; f.size > 100;) {
      let e = null;
      for (let t of f)
        if (0 === t[1].activeConsumers && 0 === t[1].pendingConsumers) {
          e = t;
          break
        } if (null == e) return;
      let [t, l] = e;
      f.delete(t), k(l)
    }
  }

  function E(e, t) {
    if (f.get(e) !== t || t.evicted) return null;
    f.delete(e), f.set(e, t), t.activeConsumers++, x();
    let l = !1;
    return {
      cacheKey: e,
      url: t.url,
      release: () => {
        l || (l = !0, queueMicrotask(() => {
          t.activeConsumers--, C(t), x()
        }))
      }
    }
  }

  function _(e) {
    let t = f.get(e);
    return null == t ? null : E(e, t)
  }

  function T(e) {
    queueMicrotask(() => {
      e.pendingConsumers--, C(e), x()
    })
  }

  function H(e, t) {
    if (t.pendingConsumers <= 0) return null;
    t.pendingConsumers--;
    let l = E(e, t);
    return C(t), x(), l
  }

  function R(e, t, l = e) {
    let n, r = null == (n = f.get(e)) ? null : (f.delete(e), f.set(e, n), n.url);
    if (null != r) {
      let t = f.get(e);
      if (null == t) return {
        claim: () => null,
        promise: Promise.resolve(null),
        release: () => {}
      };
      t.pendingConsumers++;
      let l = !1;
      return {
        promise: Promise.resolve(r),
        claim: n => l || n !== t.url ? null : (l = !0, H(e, t)),
        release: () => {
          l || (l = !0, T(t))
        }
      }
    }
    let a = m.get(l);
    if (null == a) {
      let n = new AbortController,
        r = a = {
          completedEntry: null,
          controller: n,
          pendingAbortToken: null,
          subscribers: 0,
          promise: Promise.resolve(null)
        };
      r.promise = t(n.signal).then(t => {
        let a = m.get(l) === r;
        if (null != t && !n.signal.aborted && a) {
          let l = function(e, t) {
            let l = f.get(e);
            if (l?.url === t) return f.delete(e), f.set(e, l), l;
            null != l && (f.delete(e), k(l));
            let n = {
              activeConsumers: 0,
              evicted: !1,
              pendingConsumers: 0,
              revoked: !1,
              url: t
            };
            return f.set(e, n), n
          }(e, t);
          r.completedEntry = l, l.pendingConsumers += r.subscribers, x()
        } else null != t && URL.revokeObjectURL(t);
        return n.signal.aborted || !a ? null : t
      }).catch(() => null).finally(() => {
        m.get(l) === r && m.delete(l)
      }), m.set(l, r)
    }
    a.pendingAbortToken = null, a.subscribers++;
    let i = !1,
      o = !1;
    return {
      promise: a.promise,
      claim: t => {
        let l = a.completedEntry;
        return i || o || null == l || l.url !== t ? null : (o = !0, H(e, l))
      },
      release: () => {
        if (i) return;
        i = !0, a.subscribers--;
        let e = a.completedEntry;
        if (o || null == e || (o = !0, T(e)), x(), a.subscribers > 0 || m.get(l) !== a) return;
        let t = {};
        a.pendingAbortToken = t, queueMicrotask(() => {
          a.pendingAbortToken !== t || a.subscribers > 0 || m.get(l) !== a || (m.delete(l), a.controller.abort())
        })
      }
    }
  }
  async function j(e, t) {
    if ((0, o.isSignedMediaRawUrl)(e)) return null;
    try {
      return await (0, u.generateVideoThumbnailFromUrl)(e, t)
    } catch {
      return null
    }
  }

  function L(e, t) {
    e.aborted && null != t && URL.revokeObjectURL(t), e.throwIfAborted()
  }
  async function M({
    path: e,
    urlEncodedPath: t,
    playbackSrc: l,
    allowFullFetch: n,
    rawFetch: r,
    signal: a
  }) {
    let i = null;
    try {
      let l = await r(e, {
        range: {
          start: 0,
          end: h.HATCH_VIDEO_THUMBNAIL_CHUNK_SIZE - 1
        },
        signal: a,
        urlEncodedPath: t
      });
      if (a.throwIfAborted(), l.ok) {
        i = URL.createObjectURL(l.data);
        let e = await j(i, a);
        if (L(a, e), null != e) return e
      }
    } catch {
      a.throwIfAborted()
    } finally {
      null != i && URL.revokeObjectURL(i)
    }
    if (null != l) {
      let e = await j(l, a);
      if (L(a, e), null != e) return e
    }
    if (!n) return null;
    let o = null;
    try {
      let l = await r(e, {
        signal: a,
        urlEncodedPath: t
      });
      if (a.throwIfAborted(), !l.ok) return null;
      return o = URL.createObjectURL(l.data), await j(o, a)
    } catch {
      return a.throwIfAborted(), null
    } finally {
      null != o && URL.revokeObjectURL(o)
    }
  }

  function S() {}

  function U() {
    return null
  }
  e.s(["useResolvedHatchImageMedia", 0, function(e) {
    let l, n = (0, t.c)(5),
      {
        sourceUrl: a,
        sourcePathUrlEncoded: o,
        filePath: u,
        filePathUrlEncoded: d,
        previewUrl: h,
        usage: f,
        abortOnUnused: m,
        enabled: g
      } = e,
      C = void 0 !== d && d,
      k = b(h),
      x = null != k && (0, i.isHatchVmMediaUrl)(k) ? null : k,
      E = b(u),
      _ = b(a),
      T = p(E),
      H = null != T && C ? (0, r.resolveHatchGatewayUrlPath)(T.path) : null,
      R = null != T && C ? null == H ? null : {
        path: H.path,
        urlEncoded: H.urlEncodedPath
      } : T,
      j = null == x ? R ?? v(_, void 0 !== o && o) ?? v(k) : null,
      L = null == x && null == j ? y(E) ?? y(_) ?? (null == E ? w(_) : null) : null,
      M = (void 0 === g || g) && null == x && null != j,
      {
        data: S,
        status: U
      } = (0, s.useRawQuery)(j?.path ?? null, {
        abortOnUnused: void 0 !== m && m,
        enabled: M,
        urlEncodedPath: j?.urlEncoded
      }),
      P = (0, c.useCachedBlobUrl)(null != j ? (0, i.mediaCacheKey)(j.path, j.urlEncoded) : null, S, j?.path),
      I = x ?? P ?? L ?? null;
    if (null != I) {
      let e;
      return n[0] !== I ? (e = {
        src: I,
        resolutionStatus: "ready"
      }, n[0] = I, n[1] = e) : e = n[1], e
    }
    if (M) {
      let e, t = "error" === U ? "failed" : "loading";
      return n[2] !== t ? (e = {
        src: null,
        resolutionStatus: t
      }, n[2] = t, n[3] = e) : e = n[3], e
    }
    return n[4] === Symbol.for("react.memo_cache_sentinel") ? (l = {
      src: null,
      resolutionStatus: "empty"
    }, n[4] = l) : l = n[4], l
  }, "useResolvedHatchVideoMedia", 0, function(e) {
    let n, r, a, u, h, f, m, g, C, k, x, E, T, H, L, P, I, N = (0, t.c)(53),
      {
        sourceUrl: O,
        filePath: A,
        filePathUrlEncoded: D,
        previewUrl: F,
        cacheVersion: B,
        enabled: V,
        loadLegacyPlayback: z,
        generateLegacyPoster: K,
        allowFullPosterFetch: W
      } = e,
      $ = void 0 !== D && D,
      G = void 0 === V || V,
      X = void 0 === z || z,
      Y = void 0 === K || K,
      q = void 0 === W || W,
      Z = (0, d.useHatchGatewayFs)();
    N[0] !== F ? (r = null != (n = b(F)) && (0, i.isHatchVmMediaUrl)(n) ? null : n, N[0] = F, N[1] = n, N[2] = r) : (n = N[1], r = N[2]);
    let Q = r;
    N[3] !== A ? (a = b(A), N[3] = A, N[4] = a) : a = N[4];
    let J = a;
    N[5] !== O ? (u = b(O), N[5] = O, N[6] = u) : u = N[6];
    let ee = u;
    N[7] !== B ? (h = b(B), N[7] = B, N[8] = h) : h = N[8];
    let et = h;
    e: {
      let e;
      if (null != J) {
        let e, t;
        N[9] !== J ? (e = p(J), N[9] = J, N[10] = e) : e = N[10];
        let l = e;
        N[11] !== l || N[12] !== $ ? (t = null != l && $ ? {
          ...l,
          urlEncoded: !0
        } : l, N[11] = l, N[12] = $, N[13] = t) : t = N[13], f = t;
        break e
      }
      N[14] !== n || N[15] !== ee ? (e = v(ee) ?? v(n), N[14] = n, N[15] = ee, N[16] = e) : e = N[16],
      f = e
    }
    let el = f;
    N[17] !== el || N[18] !== J || N[19] !== ee ? (m = y(J) ?? y(ee) ?? (null == el ? w(ee) : null), N[17] = el, N[18] = J, N[19] = ee, N[20] = m) : m = N[20];
    let en = m,
      er = G && X && null == en && null != el,
      ea = el?.urlEncoded;
    N[21] !== er || N[22] !== ea ? (g = {
      abortOnUnused: !0,
      enabled: er,
      urlEncodedPath: ea
    }, N[21] = er, N[22] = ea, N[23] = g) : g = N[23];
    let {
      data: ei,
      isLoading: eo,
      isError: eu
    } = (0, s.useRawQuery)(er ? el.path : null, g);
    N[24] !== el || N[25] !== er ? (C = er ? (0, i.mediaCacheKey)(el.path, el.urlEncoded) : null, N[24] = el, N[25] = er, N[26] = C) : C = N[26];
    let es = (0, c.useCachedBlobUrl)(C, er ? ei : null, er ? el.path : void 0),
      ec = en ?? es ?? null;
    N[27] !== ec ? (k = null == ec || !(0, o.isSignedMediaRawUrl)(ec), N[27] = ec, N[28] = k) : k = N[28];
    let ed = k;
    N[29] !== ed || N[30] !== el || N[31] !== ec || N[32] !== et ? (x = null != el ? `path:${(0,i.mediaCacheKey)(el.path,el.urlEncoded)}:${et??""}` : ed && null != ec ? `direct:${ec}:${et??""}` : null, N[29] = ed, N[30] = el, N[31] = ec, N[32] = et, N[33] = x) : x = N[33];
    let eh = x,
      ef = null != el && null != eh ? `${eh}:${q?"full":"range-only"}` : eh,
      em = G && Y && null == Q && null != eh,
      [eb, eg] = (0, l.useState)(null),
      ep = em && eb?.cacheKey === eh ? eb : null,
      ev = ep?.url ?? null,
      ey = em ? ep?.status ?? "idle" : "done",
      ew = (0, l.useRef)(!1),
      eC = (0, l.useRef)(null),
      ek = (0, l.useRef)(null);
    N[34] === Symbol.for("react.memo_cache_sentinel") ? (E = (e, t) => {
      let l = eC.current;
      if (l?.cacheKey === e && (null == t || l.url === t)) return eg({
        cacheKey: e,
        status: "done",
        url: l.url
      }), !0;
      let n = _(e);
      return null == n || null != t && n.url !== t ? (n?.release(), !1) : (l?.release(), eC.current = n, eg({
        cacheKey: e,
        status: "done",
        url: n.url
      }), !0)
    }, N[34] = E) : E = N[34];
    let ex = E;
    N[35] !== eh || N[36] !== em ? (T = () => {
      let e = {};
      ek.current = e;
      let t = em && null != eh ? _(eh) : null;
      return eC.current = t, eg(null != eh && null != t ? {
        cacheKey: eh,
        status: "done",
        url: t.url
      } : null), ew.current = !1, () => {
        ek.current === e && (ek.current = null);
        let t = eC.current;
        eC.current = null, t?.release()
      }
    }, H = [eh, em], N[35] = eh, N[36] = em, N[37] = T, N[38] = H) : (T = N[37], H = N[38]), (0, l.useLayoutEffect)(T, H), N[39] !== q || N[40] !== Z.rawFetch || N[41] !== el || N[42] !== ec || N[43] !== eh || N[44] !== ef || N[45] !== em ? (L = () => {
      if (!em || null == eh || ex(eh) || ew.current) return;
      let e = !1,
        t = ek.current;
      ew.current = !0, eg({
        cacheKey: eh,
        status: "loading",
        url: null
      });
      let l = null != el ? R(eh, e => M({
        path: el.path,
        urlEncodedPath: el.urlEncoded,
        playbackSrc: ec,
        allowFullFetch: q,
        rawFetch: Z.rawFetch,
        signal: e
      }), ef ?? eh) : null != ec ? R(eh, e => j(ec, e)) : {
        claim: U,
        promise: Promise.resolve(null),
        release: S
      };
      return l.promise.then(n => {
        if (!e && ek.current === t) {
          if (ew.current = !1, null != n) {
            let e = l.claim(n);
            if (null != e) {
              let t = eC.current;
              t?.release(), eC.current = e, eg({
                cacheKey: eh,
                status: "done",
                url: e.url
              });
              return
            }
          }
          eg({
            cacheKey: eh,
            status: "done",
            url: null
          })
        }
      }), () => {
        e = !0, ew.current = !1, l.release()
      }
    }, P = [ex, q, Z.rawFetch, el, ec, eh, ef, em], N[39] = q, N[40] = Z.rawFetch, N[41] = el, N[42] = ec, N[43] = eh, N[44] = ef, N[45] = em, N[46] = L, N[47] = P) : (L = N[46], P = N[47]), (0, l.useEffect)(L, P);
    let eE = Q ?? ev,
      e_ = G && Y && null == eE && null != eh && "done" !== ey,
      eT = G && !X && Y && null == Q && null != eh && "done" === ey && null == ec && null == eE,
      eH = null != en || null != el || null != Q || null != eh,
      eR = null != ec || null != eE ? "ready" : eu || eT ? "failed" : e_ || er && eo || eH ? "loading" : "empty",
      ej = er && eo;
    return N[48] !== ec || N[49] !== eE || N[50] !== eR || N[51] !== ej ? (I = {
      playbackSrc: ec,
      posterSrc: eE,
      resolutionStatus: eR,
      isLoadingPlayback: ej
    }, N[48] = ec, N[49] = eE, N[50] = eR, N[51] = ej, N[52] = I) : I = N[52], I
  }])
}, 309515, 916795, e => {
  "use strict";

  function t(e, [l, n]) {
    return Math.min(n, Math.max(l, e))
  }(0, Object.defineProperty)(t, "name", {
    value: "clamp",
    configurable: !0
  }), e.s(["clamp", 0, t], 309515);
  var l = e.i(519172);

  function n(e) {
    let t = l.useRef({
      value: e,
      previous: e
    });
    return l.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
  }(0, Object.defineProperty)(n, "name", {
    value: "usePrevious",
    configurable: !0
  }), e.s(["usePrevious", 0, n], 916795)
}, 173174, e => {
  "use strict";
  var t = e.i(984416),
    l = e.i(722099);

  function n(e) {
    let n, r, a, i, o = (0, l.c)(9);
    return o[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), o[0] = e.title, o[1] = n) : n = o[1], o[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), o[2] = e.children, o[3] = r) : r = o[3], o[4] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.96 0.13C15.08 0.13 16.06 0.92 16.28 2.02L16.71 4.13H22C22.48 4.13 22.88 4.52 22.88 5C22.88 5.48 22.48 5.88 22 5.88H20.6L20.31 15.81C20.28 16.89 20.25 17.75 20.17 18.44C20.1 19.14 19.96 19.75 19.66 20.3C19.19 21.19 18.44 21.91 17.54 22.36C16.98 22.64 16.37 22.76 15.66 22.82C14.97 22.88 14.11 22.88 13.04 22.88H10.96C9.89 22.88 9.03 22.88 8.33 22.82C7.63 22.76 7.02 22.64 6.46 22.36C5.56 21.91 4.81 21.19 4.34 20.3C4.04 19.75 3.9 19.14 3.83 18.44C3.75 17.75 3.72 16.89 3.69 15.81L3.4 5.88H2C1.52 5.88 1.13 5.48 1.13 5C1.13 4.52 1.52 4.13 2 4.13H7.29L7.72 2.02C7.94 0.92 8.92 0.13 10.04 0.13H13.96ZM5.44 15.76C5.47 16.87 5.5 17.64 5.56 18.25C5.63 18.84 5.73 19.2 5.88 19.48C6.19 20.05 6.66 20.51 7.24 20.8C7.52 20.94 7.88 21.03 8.48 21.08C9.08 21.12 9.86 21.13 10.96 21.13H13.04C14.14 21.13 14.92 21.12 15.52 21.08C16.12 21.03 16.48 20.94 16.76 20.8C17.34 20.51 17.81 20.05 18.12 19.48C18.27 19.2 18.37 18.84 18.44 18.25C18.5 17.64 18.53 16.87 18.56 15.76L18.85 5.88H5.15L5.44 15.76ZM10.04 1.88C9.75 1.88 9.49 2.08 9.43 2.37L9.07 4.13H14.93L14.57 2.37C14.51 2.08 14.25 1.88 13.96 1.88H10.04Z"
    }), o[4] = a) : a = o[4], o[5] !== e || o[6] !== n || o[7] !== r ? (i = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, r, a]
    }), o[5] = e, o[6] = n, o[7] = r, o[8] = i) : i = o[8], i
  }
  n._isSVG = !0, e.s(["default", 0, n])
}, 419453, e => {
  "use strict";
  var t = e.i(389409);
  e.s(["MAX_EXTERNAL_VIDEO_URL_LENGTH", 0, 8192, "VIDEO_PROXY_PATH", 0, "/api/video-proxy", "parseExternalVideoUrl", 0, function(e) {
    if (0 === e.length || e.length > 8192) return null;
    try {
      let l = new URL(e);
      if ("https:" !== l.protocol || l.username.length > 0 || l.password.length > 0 || l.port.length > 0 || (0, t.isHatchVmGatewayHostname)(l.hostname)) return null;
      return l
    } catch {
      return null
    }
  }])
}]);

//# debugId=39f94979-8485-d711-4b3e-eb8527013302
//# sourceMappingURL=2l0jjpogtqsvu.js.map