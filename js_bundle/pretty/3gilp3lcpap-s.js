;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "70b0fc33-b05c-6fc2-3317-d5004c750ebf")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 538206, e => {
  "use strict";
  var t = e.i(984416),
    l = e.i(792135),
    n = e.i(393401),
    r = e.i(294237),
    i = e.i(519172),
    a = e.i(374785),
    u = e.i(848048),
    o = e.i(646361);
  let c = (0, r.cva)(" inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full focus:not-focus-visible:outline-none transition-transform duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 select-none", {
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
    s = {
      20: 16,
      24: 20,
      28: 20,
      32: 20,
      "32-24": 24,
      36: 28,
      48: 24
    },
    d = i.forwardRef(function({
      asChild: e = !1,
      className: n,
      icon: r,
      iconClassName: i,
      label: d,
      size: h,
      variant: f,
      analyticsEvent: m,
      analyticsActionOverride: g,
      analyticsMetadata: b,
      onClick: p,
      children: y = e => e,
      ...v
    }, C) {
      let w = e ? l.Slot : "button",
        E = s[h ?? "32"] ?? 24,
        {
          wrapWithAnalytics: R
        } = (0, u.useAnalyticsHandler)(m, "IconRailButton", g, b);
      return (0, t.jsx)("div", {
        className: (0, a.cn)("contents", ("on-media" === f || "on-media-borderless" === f) && "dark"),
        children: (0, t.jsx)(w, {
          ref: C,
          "aria-label": d,
          className: (0, a.cn)(c({
            className: n,
            size: h,
            variant: f
          })),
          "data-slot": "button",
          onClick: R(p),
          ...v,
          children: y((0, t.jsx)(o.HatchIcon, {
            icon: r,
            size: E,
            className: (0, a.cn)("m-0.5", i)
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
    let i, a, u = (0, l.c)(7),
      {
        size: o,
        className: c,
        style: s,
        name: d
      } = e,
      h = void 0 === o ? 24 : o;
    return u[0] !== h ? (i = (0, t.jsx)(n.Spinner, {
      size: h
    }), u[0] = h, u[1] = i) : i = u[1], u[2] !== c || u[3] !== d || u[4] !== s || u[5] !== i ? (a = (0, t.jsx)(r.LoadingState, {
      className: c,
      style: s,
      name: d,
      children: i
    }), u[2] = c, u[3] = d, u[4] = s, u[5] = i, u[6] = a) : a = u[6], a
  }])
}, 439947, e => {
  "use strict";
  e.s(["HATCH_VIDEO_THUMBNAIL_CHUNK_SIZE", 0, 1048576, "formatHatchVideoTime", 0, function(e) {
    if (!Number.isFinite(e) || e <= 0) return "0s";
    let t = Math.floor(e),
      l = Math.floor(t / 3600),
      n = Math.floor(t % 3600 / 60),
      r = t % 60,
      i = [];
    return l > 0 && i.push(`${l}h`), n > 0 && i.push(`${n}m`), (r > 0 || 0 === i.length) && i.push(`${r}s`), i.join(" ")
  }, "resolveHatchMediaBackdrop", 0, function({
    mediaKind: e,
    currentSrc: t,
    posterSrc: l
  }) {
    return "image" === e ? t : l ?? null
  }])
}, 840282, e => {
  "use strict";
  var t = e.i(69066);

  function l(e) {
    return 0 === e.button && !e.defaultPrevented && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey
  }

  function n(e) {
    return 0 === e.button && !e.defaultPrevented && (!!e.metaKey || !!e.altKey || e.ctrlKey && !(0, t.isMacPlatform)())
  }

  function r(e) {
    e.preventDefault(), e.currentTarget.dispatchEvent(new MouseEvent("contextmenu", {
      bubbles: !0,
      cancelable: !0,
      clientX: e.clientX,
      clientY: e.clientY
    }))
  }
  e.s(["handleContextMenuTriggerClick", 0, function(e, t) {
    n(e) ? r(e) : l(e) && t()
  }, "isPlainPrimaryClick", 0, l, "isSynthesizedContextMenuClick", 0, n, "openContextMenuAtElement", 0, function(e) {
    let t = e.getBoundingClientRect();
    e.dispatchEvent(new MouseEvent("contextmenu", {
      bubbles: !0,
      cancelable: !0,
      button: 2,
      clientX: t.left + t.width / 2,
      clientY: t.top + t.height / 2
    }))
  }, "openContextMenuAtPointer", 0, r, "readSelectionWithin", 0, function(e) {
    if (null == e) return null;
    let t = window.getSelection();
    if (null == t || t.isCollapsed || 0 === t.rangeCount) return null;
    let l = e.ownerDocument?.createElement("div");
    if (null == l) return null;
    let n = "";
    for (let r = 0; r < t.rangeCount; r += 1) {
      let i = t.getRangeAt(r);
      if (i.collapsed || !i.intersectsNode(e)) continue;
      let a = function(e, t) {
        let l = t.ownerDocument?.createRange();
        if (null == l) return null;
        l.selectNodeContents(t);
        let n = e.cloneRange();
        return 0 > n.compareBoundaryPoints(Range.START_TO_START, l) && n.setStart(l.startContainer, l.startOffset), n.compareBoundaryPoints(Range.END_TO_END, l) > 0 && n.setEnd(l.endContainer, l.endOffset), n.collapsed ? null : n
      }(i, e);
      null != a && (l.appendChild(a.cloneContents()), n += a.toString())
    }
    return 0 === n.trim().length ? null : {
      text: n,
      htmlRoot: l
    }
  }])
}, 648094, e => {
  "use strict";
  var t = e.i(359783),
    l = e.i(120511),
    n = e.i(805163);
  let r = (0, t.createClientLogger)("HatchFileDownload");
  async function i(e) {
    if (null != e.binaryBlob) return e.binaryBlob;
    if (null == e.filePath) throw Error("Missing file path for binary download");
    let t = await e.fs.rawFetch(e.filePath);
    if (!t.ok) throw t.error;
    return t.data
  }

  function a(e, t) {
    let n = (0, l.getMimeType)(e),
      r = "application/octet-stream" !== n && t.type !== n ? t.slice(0, t.size, n) : t,
      i = URL.createObjectURL(r),
      a = document.createElement("a");
    try {
      a.href = i, a.download = e, document.body.appendChild(a), a.click()
    } finally {
      a.remove(), URL.revokeObjectURL(i)
    }
  }
  async function u(e) {
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
  async function o(e) {
    try {
      if (e.isBinaryFile) {
        let t = await i(e);
        a(e.fileName, t);
        return
      }
      let t = await u(e);
      a(e.fileName, t)
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
  e.s(["downloadHatchFile", 0, o, "triggerBlobDownload", 0, a])
}, 602328, e => {
  "use strict";
  e.i(970012);
  var t = e.i(89820);

  function l(e) {
    e.pause(), e.removeAttribute("src"), e.load()
  }

  function n(e, t) {
    return new Promise((n, r) => {
      let i = document.createElement("canvas"),
        a = i.getContext("2d");
      if (!a) {
        l(e), r(Error("Could not get canvas context"));
        return
      }
      let u = !1,
        o = null,
        c = n => {
          u || (u = !0, null != o && window.clearTimeout(o), t?.removeEventListener("abort", s), e.onseeked = null, e.onerror = null, e.onloadedmetadata = null, e.onloadeddata = null, l(e), n())
        },
        s = () => {
          c(() => {
            r(new DOMException("Video thumbnail generation aborted", "AbortError"))
          })
        },
        d = () => {
          try {
            i.width = e.videoWidth, i.height = e.videoHeight, a.drawImage(e, 0, 0, i.width, i.height), i.toBlob(e => {
              e ? c(() => {
                n(URL.createObjectURL(e))
              }) : c(() => {
                r(Error("Failed to create thumbnail blob"))
              })
            }, "image/jpeg")
          } catch (e) {
            c(() => r(e))
          }
        };
      (e.onseeked = d, e.onerror = () => {
        c(() => {
          r(Error("Failed to load video"))
        })
      }, e.onloadedmetadata = () => {
        var t;
        let l = !Number.isFinite(t = e.duration) || t <= 0 ? .05 : Math.max(0, Math.min(.05, t - .01));
        0 === l ? e.readyState >= 2 ? d() : e.onloadeddata = d : e.currentTime = l
      }, t?.addEventListener("abort", s, {
        once: !0
      }), t?.aborted === !0) ? s(): (o = window.setTimeout(() => {
        c(() => {
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
    i = e.i(832815),
    a = e.i(440802),
    u = e.i(538206),
    o = e.i(486868),
    c = e.i(281539),
    s = e.i(634791);
  i.default._isSVG = !0, e.s(["HatchMediaShareButton", 0, function(e) {
    let d, h, f, m, g, b, p, y = (0, l.c)(18),
      {
        item: v,
        library: C,
        toolbar: w,
        placement: E,
        onShare: R
      } = e,
      U = void 0 !== C && C,
      M = void 0 !== w && w,
      S = (0, s.useHatchMediaShareAction)(v, U),
      H = U ? "library" : "chat",
      L = E ?? (M ? "widget_toolbar" : "media_viewer");
    y[0] !== H || y[1] !== L ? (d = {
      eventName: c.HatchClickEvent.MEDIA_SHARE_OPEN,
      actionTarget: "media_share",
      actionType: "click",
      metadata: {
        source: "media",
        surface: H,
        subsurface: L
      }
    }, y[0] = H, y[1] = L, y[2] = d) : d = y[2];
    let {
      ref: T,
      onClick: P
    } = (0, r.useTrackedClickRef)(d);
    if (null == S) return null;
    y[3] === Symbol.for("react.memo_cache_sentinel") ? (h = n.fbs._("Share", null, {
      hk: "1N4Qhs"
    }), y[3] = h) : h = y[3];
    let k = h;
    y[4] !== P || y[5] !== R || y[6] !== S ? (f = e => {
      e.stopPropagation(), P(), S(e.currentTarget), R?.()
    }, y[4] = P, y[5] = R, y[6] = S, y[7] = f) : f = y[7];
    let _ = f;
    y[8] !== _ || y[9] !== E || y[10] !== T || y[11] !== M ? (m = M || "media_row" === E ? (0, t.jsx)(u.IconRailButton, {
      ref: T,
      icon: i.default,
      size: "24",
      variant: "borderless",
      label: k,
      onClick: _,
      className: "text-text-secondary"
    }) : (0, t.jsx)(a.IconButton, {
      ref: T,
      icon: i.default,
      size: "32",
      variant: "on-media",
      label: k,
      onClick: _
    }), y[8] = _, y[9] = E, y[10] = T, y[11] = M, y[12] = m) : m = y[12];
    let x = m;
    return y[13] !== x ? (g = (0, t.jsx)(o.TooltipTrigger, {
      asChild: !0,
      children: x
    }), y[13] = x, y[14] = g) : g = y[14], y[15] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, t.jsx)(o.TooltipContent, {
      side: "bottom",
      children: k
    }), y[15] = b) : b = y[15], y[16] !== g ? (p = (0, t.jsx)(o.TooltipProvider, {
      delayDuration: 500,
      children: (0, t.jsxs)(o.Tooltip, {
        children: [g, b]
      })
    }), y[16] = g, y[17] = p) : p = y[17], p
  }])
}, 634791, e => {
  "use strict";
  var t = e.i(722099),
    l = e.i(519172),
    n = e.i(157139);
  e.s(["useHatchMediaShareAction", 0, function(e, r) {
    let i, a, u, o = (0, t.c)(13),
      c = (0, n.useHatchContentShare)(),
      s = (0, n.useHatchMessageShareSource)(),
      d = (0, l.useContext)(n.HatchPresentationMediaShareSourcesContext),
      h = r ? null : s,
      f = e?.originalSource ?? e?.path ?? e?.variants.original;
    o[0] !== e?.originalSourceUrlEncoded || o[1] !== e?.path || o[2] !== r || o[3] !== f || o[4] !== d ? (i = r ? e?.path : e?.originalSourceUrlEncoded === !0 ? null : d?.get(f ?? ""), o[0] = e?.originalSourceUrlEncoded, o[1] = e?.path, o[2] = r, o[3] = f, o[4] = d, o[5] = i) : i = o[5];
    let m = i;
    o[6] !== m || o[7] !== h ? (a = null != h ? {
      contentType: "message",
      contentId: h
    } : m?.trim() ? {
      contentType: "media",
      contentId: m
    } : null, o[6] = m, o[7] = h, o[8] = a) : a = o[8];
    let g = a;
    return null != c && null != e && null != g && f?.trim() ? (o[9] !== g || o[10] !== e || o[11] !== c ? (u = t => c.shareMedia(e, g, t), o[9] = g, o[10] = e, o[11] = c, o[12] = u) : u = o[12], u) : null
  }])
}, 926250, e => {
  "use strict";
  var t = e.i(722099),
    l = e.i(519172),
    n = e.i(539522),
    r = e.i(826972),
    i = e.i(55473),
    a = e.i(960607);
  e.i(970012);
  var u = e.i(89820),
    o = e.i(602328),
    c = e.i(499608),
    s = e.i(709853),
    d = e.i(907579),
    h = e.i(439947);
  let f = new Map,
    m = new Map;

  function g(e) {
    let t = e?.trim();
    return null != t && t.length > 0 ? t : null
  }
  let b = e => ({
    path: e,
    urlEncoded: !1
  });

  function p(e) {
    if (null == e) return null;
    let t = e.trim();
    if (0 === t.length) return null;
    let l = (0, a.getVmMediaNoiseFetchPath)(t);
    if (void 0 !== l) return null == l ? null : {
      path: l,
      urlEncoded: !0
    };
    let n = (0, a.getTrustedWorkspaceFilePathFromSource)(t);
    if (null != n) return b(n.startsWith("/") ? n : `/${n}`);
    if (null != (0, i.getHatchDirectMediaSource)(t)) return null;
    let r = (0, i.getHatchMediaFetchPath)(t);
    return null != r ? b(r) : t.startsWith("sandbox://") ? null : b(t)
  }

  function y(e, t = !1) {
    if (null == e) return null;
    let l = e.trim();
    if (0 === l.length) return null;
    let u = (0, a.getVmMediaNoiseFetchPath)(l);
    if (void 0 !== u) return null == u ? null : {
      path: u,
      urlEncoded: !0
    };
    let o = (0, a.getTrustedWorkspaceFilePathFromSource)(l);
    if (null != o) return p(o);
    if (null != (0, i.getHatchDirectMediaSource)(l)) return null;
    let c = (0, i.getHatchMediaFetchPath)(l) ?? (0, n.resolveLocalImagePath)(l);
    if (null == c) return null;
    if (!t) return b(c);
    let s = (0, r.resolveHatchGatewayUrlPath)(c);
    return null == s ? null : {
      path: s.path,
      urlEncoded: s.urlEncodedPath
    }
  }

  function v(e) {
    return null == e || (0, a.isInternalHatchFileserverSource)(e) || (0, a.isHatchVmMediaUrl)(e) ? null : (0, i.getHatchDirectMediaSource)(e)
  }

  function C(e) {
    return null == e || (0, a.isInternalHatchFileserverSource)(e) || (0, a.isHatchVmMediaUrl)(e) ? null : e
  }

  function w(e) {
    !e.evicted || e.revoked || e.activeConsumers > 0 || e.pendingConsumers > 0 || (e.revoked = !0, URL.revokeObjectURL(e.url))
  }

  function E(e) {
    e.evicted = !0, w(e)
  }

  function R() {
    for (; f.size > 100;) {
      let e = null;
      for (let t of f)
        if (0 === t[1].activeConsumers && 0 === t[1].pendingConsumers) {
          e = t;
          break
        } if (null == e) return;
      let [t, l] = e;
      f.delete(t), E(l)
    }
  }

  function U(e, t) {
    if (f.get(e) !== t || t.evicted) return null;
    f.delete(e), f.set(e, t), t.activeConsumers++, R();
    let l = !1;
    return {
      cacheKey: e,
      url: t.url,
      release: () => {
        l || (l = !0, queueMicrotask(() => {
          t.activeConsumers--, w(t), R()
        }))
      }
    }
  }

  function M(e) {
    let t = f.get(e);
    return null == t ? null : U(e, t)
  }

  function S(e) {
    queueMicrotask(() => {
      e.pendingConsumers--, w(e), R()
    })
  }

  function H(e, t) {
    if (t.pendingConsumers <= 0) return null;
    t.pendingConsumers--;
    let l = U(e, t);
    return w(t), R(), l
  }

  function L(e, t, l = e) {
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
          l || (l = !0, S(t))
        }
      }
    }
    let i = m.get(l);
    if (null == i) {
      let n = new AbortController,
        r = i = {
          completedEntry: null,
          controller: n,
          pendingAbortToken: null,
          subscribers: 0,
          promise: Promise.resolve(null)
        };
      r.promise = t(n.signal).then(t => {
        let i = m.get(l) === r;
        if (null != t && !n.signal.aborted && i) {
          let l = function(e, t) {
            let l = f.get(e);
            if (l?.url === t) return f.delete(e), f.set(e, l), l;
            null != l && (f.delete(e), E(l));
            let n = {
              activeConsumers: 0,
              evicted: !1,
              pendingConsumers: 0,
              revoked: !1,
              url: t
            };
            return f.set(e, n), n
          }(e, t);
          r.completedEntry = l, l.pendingConsumers += r.subscribers, R()
        } else null != t && URL.revokeObjectURL(t);
        return n.signal.aborted || !i ? null : t
      }).catch(() => null).finally(() => {
        m.get(l) === r && m.delete(l)
      }), m.set(l, r)
    }
    i.pendingAbortToken = null, i.subscribers++;
    let a = !1,
      u = !1;
    return {
      promise: i.promise,
      claim: t => {
        let l = i.completedEntry;
        return a || u || null == l || l.url !== t ? null : (u = !0, H(e, l))
      },
      release: () => {
        if (a) return;
        a = !0, i.subscribers--;
        let e = i.completedEntry;
        if (u || null == e || (u = !0, S(e)), R(), i.subscribers > 0 || m.get(l) !== i) return;
        let t = {};
        i.pendingAbortToken = t, queueMicrotask(() => {
          i.pendingAbortToken !== t || i.subscribers > 0 || m.get(l) !== i || (m.delete(l), i.controller.abort())
        })
      }
    }
  }
  async function T(e, t) {
    if ((0, u.isSignedMediaRawUrl)(e)) return null;
    try {
      return await (0, o.generateVideoThumbnailFromUrl)(e, t)
    } catch {
      return null
    }
  }

  function P(e, t) {
    e.aborted && null != t && URL.revokeObjectURL(t), e.throwIfAborted()
  }
  async function k({
    path: e,
    urlEncodedPath: t,
    playbackSrc: l,
    allowFullFetch: n,
    rawFetch: r,
    signal: i
  }) {
    let a = null;
    try {
      let l = await r(e, {
        range: {
          start: 0,
          end: h.HATCH_VIDEO_THUMBNAIL_CHUNK_SIZE - 1
        },
        signal: i,
        urlEncodedPath: t
      });
      if (i.throwIfAborted(), l.ok) {
        a = URL.createObjectURL(l.data);
        let e = await T(a, i);
        if (P(i, e), null != e) return e
      }
    } catch {
      i.throwIfAborted()
    } finally {
      null != a && URL.revokeObjectURL(a)
    }
    if (null != l) {
      let e = await T(l, i);
      if (P(i, e), null != e) return e
    }
    if (!n) return null;
    let u = null;
    try {
      let l = await r(e, {
        signal: i,
        urlEncodedPath: t
      });
      if (i.throwIfAborted(), !l.ok) return null;
      return u = URL.createObjectURL(l.data), await T(u, i)
    } catch {
      return i.throwIfAborted(), null
    } finally {
      null != u && URL.revokeObjectURL(u)
    }
  }

  function _() {}

  function x() {
    return null
  }
  e.s(["useResolvedHatchImageMedia", 0, function(e) {
    let l, n = (0, t.c)(5),
      {
        sourceUrl: i,
        sourcePathUrlEncoded: u,
        filePath: o,
        filePathUrlEncoded: d,
        previewUrl: h,
        usage: f,
        abortOnUnused: m,
        enabled: b
      } = e,
      w = void 0 !== d && d,
      E = g(h),
      R = null != E && (0, a.isHatchVmMediaUrl)(E) ? null : E,
      U = g(o),
      M = g(i),
      S = p(U),
      H = null != S && w ? (0, r.resolveHatchGatewayUrlPath)(S.path) : null,
      L = null != S && w ? null == H ? null : {
        path: H.path,
        urlEncoded: H.urlEncodedPath
      } : S,
      T = null == R ? L ?? y(M, void 0 !== u && u) ?? y(E) : null,
      P = null == R && null == T ? v(U) ?? v(M) ?? (null == U ? C(M) : null) : null,
      k = (void 0 === b || b) && null == R && null != T,
      {
        data: _,
        status: x
      } = (0, c.useRawQuery)(T?.path ?? null, {
        abortOnUnused: void 0 !== m && m,
        enabled: k,
        urlEncodedPath: T?.urlEncoded
      }),
      j = (0, s.useCachedBlobUrl)(null != T ? (0, a.mediaCacheKey)(T.path, T.urlEncoded) : null, _, T?.path),
      F = R ?? j ?? P ?? null;
    if (null != F) {
      let e;
      return n[0] !== F ? (e = {
        src: F,
        resolutionStatus: "ready"
      }, n[0] = F, n[1] = e) : e = n[1], e
    }
    if (k) {
      let e, t = "error" === x ? "failed" : "loading";
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
    let n, r, i, o, h, f, m, b, w, E, R, U, S, H, P, j, F, B = (0, t.c)(53),
      {
        sourceUrl: A,
        filePath: I,
        filePathUrlEncoded: N,
        previewUrl: O,
        cacheVersion: V,
        enabled: D,
        loadLegacyPlayback: K,
        generateLegacyPoster: z,
        allowFullPosterFetch: $
      } = e,
      G = void 0 !== N && N,
      W = void 0 === D || D,
      X = void 0 === K || K,
      Z = void 0 === z || z,
      Y = void 0 === $ || $,
      q = (0, d.useHatchGatewayFs)();
    B[0] !== O ? (r = null != (n = g(O)) && (0, a.isHatchVmMediaUrl)(n) ? null : n, B[0] = O, B[1] = n, B[2] = r) : (n = B[1], r = B[2]);
    let Q = r;
    B[3] !== I ? (i = g(I), B[3] = I, B[4] = i) : i = B[4];
    let J = i;
    B[5] !== A ? (o = g(A), B[5] = A, B[6] = o) : o = B[6];
    let ee = o;
    B[7] !== V ? (h = g(V), B[7] = V, B[8] = h) : h = B[8];
    let et = h;
    e: {
      let e;
      if (null != J) {
        let e, t;
        B[9] !== J ? (e = p(J), B[9] = J, B[10] = e) : e = B[10];
        let l = e;
        B[11] !== l || B[12] !== G ? (t = null != l && G ? {
          ...l,
          urlEncoded: !0
        } : l, B[11] = l, B[12] = G, B[13] = t) : t = B[13], f = t;
        break e
      }
      B[14] !== n || B[15] !== ee ? (e = y(ee) ?? y(n), B[14] = n, B[15] = ee, B[16] = e) : e = B[16],
      f = e
    }
    let el = f;
    B[17] !== el || B[18] !== J || B[19] !== ee ? (m = v(J) ?? v(ee) ?? (null == el ? C(ee) : null), B[17] = el, B[18] = J, B[19] = ee, B[20] = m) : m = B[20];
    let en = m,
      er = W && X && null == en && null != el,
      ei = el?.urlEncoded;
    B[21] !== er || B[22] !== ei ? (b = {
      abortOnUnused: !0,
      enabled: er,
      urlEncodedPath: ei
    }, B[21] = er, B[22] = ei, B[23] = b) : b = B[23];
    let {
      data: ea,
      isLoading: eu,
      isError: eo
    } = (0, c.useRawQuery)(er ? el.path : null, b);
    B[24] !== el || B[25] !== er ? (w = er ? (0, a.mediaCacheKey)(el.path, el.urlEncoded) : null, B[24] = el, B[25] = er, B[26] = w) : w = B[26];
    let ec = (0, s.useCachedBlobUrl)(w, er ? ea : null, er ? el.path : void 0),
      es = en ?? ec ?? null;
    B[27] !== es ? (E = null == es || !(0, u.isSignedMediaRawUrl)(es), B[27] = es, B[28] = E) : E = B[28];
    let ed = E;
    B[29] !== ed || B[30] !== el || B[31] !== es || B[32] !== et ? (R = null != el ? `path:${(0,a.mediaCacheKey)(el.path,el.urlEncoded)}:${et??""}` : ed && null != es ? `direct:${es}:${et??""}` : null, B[29] = ed, B[30] = el, B[31] = es, B[32] = et, B[33] = R) : R = B[33];
    let eh = R,
      ef = null != el && null != eh ? `${eh}:${Y?"full":"range-only"}` : eh,
      em = W && Z && null == Q && null != eh,
      [eg, eb] = (0, l.useState)(null),
      ep = em && eg?.cacheKey === eh ? eg : null,
      ey = ep?.url ?? null,
      ev = em ? ep?.status ?? "idle" : "done",
      eC = (0, l.useRef)(!1),
      ew = (0, l.useRef)(null),
      eE = (0, l.useRef)(null);
    B[34] === Symbol.for("react.memo_cache_sentinel") ? (U = (e, t) => {
      let l = ew.current;
      if (l?.cacheKey === e && (null == t || l.url === t)) return eb({
        cacheKey: e,
        status: "done",
        url: l.url
      }), !0;
      let n = M(e);
      return null == n || null != t && n.url !== t ? (n?.release(), !1) : (l?.release(), ew.current = n, eb({
        cacheKey: e,
        status: "done",
        url: n.url
      }), !0)
    }, B[34] = U) : U = B[34];
    let eR = U;
    B[35] !== eh || B[36] !== em ? (S = () => {
      let e = {};
      eE.current = e;
      let t = em && null != eh ? M(eh) : null;
      return ew.current = t, eb(null != eh && null != t ? {
        cacheKey: eh,
        status: "done",
        url: t.url
      } : null), eC.current = !1, () => {
        eE.current === e && (eE.current = null);
        let t = ew.current;
        ew.current = null, t?.release()
      }
    }, H = [eh, em], B[35] = eh, B[36] = em, B[37] = S, B[38] = H) : (S = B[37], H = B[38]), (0, l.useLayoutEffect)(S, H), B[39] !== Y || B[40] !== q.rawFetch || B[41] !== el || B[42] !== es || B[43] !== eh || B[44] !== ef || B[45] !== em ? (P = () => {
      if (!em || null == eh || eR(eh) || eC.current) return;
      let e = !1,
        t = eE.current;
      eC.current = !0, eb({
        cacheKey: eh,
        status: "loading",
        url: null
      });
      let l = null != el ? L(eh, e => k({
        path: el.path,
        urlEncodedPath: el.urlEncoded,
        playbackSrc: es,
        allowFullFetch: Y,
        rawFetch: q.rawFetch,
        signal: e
      }), ef ?? eh) : null != es ? L(eh, e => T(es, e)) : {
        claim: x,
        promise: Promise.resolve(null),
        release: _
      };
      return l.promise.then(n => {
        if (!e && eE.current === t) {
          if (eC.current = !1, null != n) {
            let e = l.claim(n);
            if (null != e) {
              let t = ew.current;
              t?.release(), ew.current = e, eb({
                cacheKey: eh,
                status: "done",
                url: e.url
              });
              return
            }
          }
          eb({
            cacheKey: eh,
            status: "done",
            url: null
          })
        }
      }), () => {
        e = !0, eC.current = !1, l.release()
      }
    }, j = [eR, Y, q.rawFetch, el, es, eh, ef, em], B[39] = Y, B[40] = q.rawFetch, B[41] = el, B[42] = es, B[43] = eh, B[44] = ef, B[45] = em, B[46] = P, B[47] = j) : (P = B[46], j = B[47]), (0, l.useEffect)(P, j);
    let eU = Q ?? ey,
      eM = W && Z && null == eU && null != eh && "done" !== ev,
      eS = W && !X && Z && null == Q && null != eh && "done" === ev && null == es && null == eU,
      eH = null != en || null != el || null != Q || null != eh,
      eL = null != es || null != eU ? "ready" : eo || eS ? "failed" : eM || er && eu || eH ? "loading" : "empty",
      eT = er && eu;
    return B[48] !== es || B[49] !== eU || B[50] !== eL || B[51] !== eT ? (F = {
      playbackSrc: es,
      posterSrc: eU,
      resolutionStatus: eL,
      isLoadingPlayback: eT
    }, B[48] = es, B[49] = eU, B[50] = eL, B[51] = eT, B[52] = F) : F = B[52], F
  }])
}, 764866, e => {
  "use strict";
  var t = e.i(984416),
    l = e.i(722099);

  function n(e) {
    let n, r, i, a, u = (0, l.c)(9);
    return u[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), u[0] = e.title, u[1] = n) : n = u[1], u[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), u[2] = e.children, u[3] = r) : r = u[3], u[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      d: "M4.13 4.11C4.13 2.28 6.11 1.14 7.7 2.06L21.22 9.95C22.79 10.86 22.79 13.14 21.22 14.05L7.7 21.94C6.11 22.86 4.13 21.72 4.13 19.89V4.11Z"
    }), u[4] = i) : i = u[4], u[5] !== e || u[6] !== n || u[7] !== r ? (a = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, r, i]
    }), u[5] = e, u[6] = n, u[7] = r, u[8] = a) : a = u[8], a
  }
  n._isSVG = !0, e.s(["default", 0, n])
}, 173174, e => {
  "use strict";
  var t = e.i(984416),
    l = e.i(722099);

  function n(e) {
    let n, r, i, a, u = (0, l.c)(9);
    return u[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), u[0] = e.title, u[1] = n) : n = u[1], u[2] !== e.children ? (r = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), u[2] = e.children, u[3] = r) : r = u[3], u[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.96 0.13C15.08 0.13 16.06 0.92 16.28 2.02L16.71 4.13H22C22.48 4.13 22.88 4.52 22.88 5C22.88 5.48 22.48 5.88 22 5.88H20.6L20.31 15.81C20.28 16.89 20.25 17.75 20.17 18.44C20.1 19.14 19.96 19.75 19.66 20.3C19.19 21.19 18.44 21.91 17.54 22.36C16.98 22.64 16.37 22.76 15.66 22.82C14.97 22.88 14.11 22.88 13.04 22.88H10.96C9.89 22.88 9.03 22.88 8.33 22.82C7.63 22.76 7.02 22.64 6.46 22.36C5.56 21.91 4.81 21.19 4.34 20.3C4.04 19.75 3.9 19.14 3.83 18.44C3.75 17.75 3.72 16.89 3.69 15.81L3.4 5.88H2C1.52 5.88 1.13 5.48 1.13 5C1.13 4.52 1.52 4.13 2 4.13H7.29L7.72 2.02C7.94 0.92 8.92 0.13 10.04 0.13H13.96ZM5.44 15.76C5.47 16.87 5.5 17.64 5.56 18.25C5.63 18.84 5.73 19.2 5.88 19.48C6.19 20.05 6.66 20.51 7.24 20.8C7.52 20.94 7.88 21.03 8.48 21.08C9.08 21.12 9.86 21.13 10.96 21.13H13.04C14.14 21.13 14.92 21.12 15.52 21.08C16.12 21.03 16.48 20.94 16.76 20.8C17.34 20.51 17.81 20.05 18.12 19.48C18.27 19.2 18.37 18.84 18.44 18.25C18.5 17.64 18.53 16.87 18.56 15.76L18.85 5.88H5.15L5.44 15.76ZM10.04 1.88C9.75 1.88 9.49 2.08 9.43 2.37L9.07 4.13H14.93L14.57 2.37C14.51 2.08 14.25 1.88 13.96 1.88H10.04Z"
    }), u[4] = i) : i = u[4], u[5] !== e || u[6] !== n || u[7] !== r ? (a = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, r, i]
    }), u[5] = e, u[6] = n, u[7] = r, u[8] = a) : a = u[8], a
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

//# debugId=70b0fc33-b05c-6fc2-3317-d5004c750ebf
//# sourceMappingURL=1hj1rala58an_.js.map