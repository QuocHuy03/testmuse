;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "2eeac1bc-9b50-deee-411f-1cf2f3547e80")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 722469, e => {
  "use strict";
  var t = e.i(120511),
    r = e.i(288119),
    a = e.i(712824),
    n = e.i(970012);

  function i(e) {
    return e.startsWith(".") || r.HIDDEN_DIRS.has(e)
  }

  function s(e) {
    let t = e.startsWith("/"),
      r = e.split("/").filter(e => e.length > 0),
      a = +("workspace" === r[0]),
      n = r.slice(a),
      i = n.at(-1),
      s = n.at(-2);
    if ("meta.json" !== i || null == s || !s.includes(".") || "artifacts" !== n[0] && "your_files" !== n[0]) return null;
    let u = [...r.slice(0, -1), s];
    return `${t?"/":""}${u.join("/")}`
  }

  function u(e) {
    let t, r, a = s(e);
    if (null != a) return u(a);
    let n = e.substring(e.lastIndexOf("/") + 1),
      i = ("artifacts" === (r = "workspace" === (t = e.split("/").filter(e => e.length > 0))[0] ? t.slice(1) : t)[0] || "your_files" === r[0]) && 3 === r.length ? r : null;
    if (null != i) {
      let e = i[2] ?? "",
        t = i[1] ?? "";
      if ("index.html" === e || e === `${t}.html`) return t.includes(".") ? t : t.split("-").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")
    }
    return n
  }

  function o(e) {
    return "json" === e || "csv" === e || "text" === e
  }

  function l(e) {
    let r = (0, t.getFileCategory)(e);
    return "markdown" === r ? 262144 : "html" === r ? 0xa00000 : "text" === r ? (0, t.hasKnownTextMimeType)(e) ? 4096 : null : o(r) ? 262144 : null
  }
  e.s(["buildMediaPreviewReads", 0, function(e) {
    let r = [];
    for (let a of e) {
      let e = u(a.path),
        i = l(e);
      if (null != i) {
        r.push({
          path: a.path,
          offset: 0,
          len: i
        });
        continue
      }
      let s = "image" === (0, t.getFileCategory)(e) ? 32768 : null;
      null != s && !(0, n.hasRenderableMediaResource)(a.media, "image") && a.size > 0 && a.size <= s && r.push({
        path: a.path,
        offset: 0,
        len: a.size
      })
    }
    return r
  }, "extractPreview", 0, function(e, r) {
    if (r.error) return null;
    let n = (0, t.getFileCategory)(e);
    if ("image" === n) {
      let a = (0, t.getMimeType)(e);
      return `data:${a};base64,${r.data_base64}`
    }
    if ("html" === n) return (0, a.decodeFsTextPayload)(r);
    if ("markdown" === n || o(n)) {
      let e = (0, a.decodeFsTextPayload)(r);
      return null != e ? e.slice(0, 500) : null
    }
    return null
  }, "getArtifactPrimaryOutputPathFromMetadataPath", 0, s, "getNameFromPath", 0, u, "getTextPreviewMaxBytes", 0, l, "isArtifactMetadataPath", 0, function(e) {
    let t = e.split("/").filter(e => e.length > 0),
      r = "workspace" === t[0] ? t.slice(1) : t;
    return ("artifacts" === r[0] || "your_files" === r[0]) && 3 === r.length && "meta.json" === r[2]
  }, "isTextPreviewCategory", 0, o, "normalizePath", 0, function(e) {
    return e.startsWith("/") ? e : `/${e}`
  }, "shouldDeferLibraryContent", 0, function(e) {
    return !e.hasGatewayUrl || !e.hasEverBeenReady
  }, "shouldHidePath", 0, function(e) {
    let t = (e.startsWith("/") ? e.slice(1) : e).split("/").filter(e => e.length > 0);
    if (0 === t.length) return !0;
    let a = "workspace" === t[0] ? t.slice(1) : t;
    if (0 === a.length) return !1;
    if (a.some(i)) return !0;
    let n = a[a.length - 1] ?? "",
      s = 1 === a.length ? "/" : `/${a.slice(0,-1).join("/")}`;
    return (0, r.shouldHideEntry)({
      name: n,
      path: e,
      type: "file",
      size: 0,
      modifiedAt: ""
    }, s)
  }])
}, 499608, 709853, e => {
  "use strict";
  var t = e.i(722099),
    r = e.i(519172),
    a = e.i(722469);

  function n(e) {
    let t = (0, a.normalizePath)(e),
      r = t.split("#", 1)[0] ?? t;
    return r.split("?", 1)[0] ?? r
  }
  let i = new Map,
    s = new Map,
    u = 0,
    o = 0,
    l = new Map,
    c = new Set,
    h = new Map;

  function f() {
    return o
  }

  function d(e) {
    e.activeCount++, e.lastUsedAt = Date.now()
  }

  function y(e) {
    for (let t of i.values())
      if (t.url === e) {
        t.activeCount = Math.max(0, t.activeCount - 1), p();
        return
      } let t = s.get(e);
    t && (t.activeCount = Math.max(0, t.activeCount - 1), 0 === t.activeCount && globalThis.setTimeout(() => {
      let t = s.get(e);
      t && 0 === t.activeCount && (URL.revokeObjectURL(e), s.delete(e))
    }, 500))
  }

  function p() {
    let e = function() {
      let e = 0;
      for (let t of i.values()) e += t.blob.size;
      return e
    }();
    for (; i.size > 100 || e > 0x4000000;) {
      let t = function() {
        let e = null;
        for (let [t, r] of i) r.activeCount > 0 || (!e || r.lastUsedAt < e[1].lastUsedAt) && (e = [t, r]);
        if (e) {
          let t = e[1].blob.size,
            r = e[1].url;
          return i.delete(e[0]), globalThis.setTimeout(() => {
            URL.revokeObjectURL(r)
          }, 500), t
        }
        return null
      }();
      if (null == t) return;
      e -= t
    }
  }

  function m(e) {
    let t = n(e);
    for (let [e, r] of i) n(r.sourcePath) === t && (i.delete(e), 0 === r.activeCount ? URL.revokeObjectURL(r.url) : s.set(r.url, r));
    for (let [e, r] of s) n(r.sourcePath) === t && 0 === r.activeCount && (URL.revokeObjectURL(e), s.delete(e))
  }

  function g(e) {
    m(e);
    let t = n(e);
    for (let e of (l.set(t, (l.get(t) ?? 0) + 1), h.get(t) ?? [])) e()
  }
  e.s(["clearBlobUrlCache", 0, function() {
    for (let [e, t] of i) i.delete(e), 0 === t.activeCount ? URL.revokeObjectURL(t.url) : s.set(t.url, t);
    for (let e of (o++, l.clear(), c)) e()
  }, "evictBlobUrlCacheEntry", 0, g, "evictBlobUrlCacheEntryWithoutNotification", 0, m, "useCachedBlobUrl", 0, function(e, t, a) {
    let o = a ?? e,
      m = (0, r.useMemo)(() => null == o ? null : n(o), [o]),
      g = (0, r.useCallback)(e => (c.add(e), () => {
        c.delete(e)
      }), []),
      b = (0, r.useSyncExternalStore)(g, f, f),
      v = (0, r.useCallback)(e => (function(e, t) {
        if (null == e) return () => void 0;
        let r = h.get(e) ?? new Set;
        return r.add(t), h.set(e, r), () => {
          let r = h.get(e);
          r?.delete(t), r?.size === 0 && h.delete(e)
        }
      })(m, e), [m]),
      w = (0, r.useCallback)(() => null == m ? 0 : l.get(m) ?? 0, [m]),
      P = (0, r.useSyncExternalStore)(v, w, w),
      C = (0, r.useRef)({
        sourcePath: m,
        resetVersion: b,
        pathVersion: P
      }),
      [q, O] = (0, r.useState)(() => ({
        key: e,
        url: null == e ? null : i.get(e)?.url ?? null
      })),
      Q = (0, r.useCallback)(t => O(r => r.key === e && r.url === t ? r : {
        key: e,
        url: t
      }), [e]),
      x = q.key === e ? q.url : null == e ? null : i.get(e)?.url ?? null,
      M = (0, r.useRef)(null);
    return (0, r.useEffect)(() => {
      let r = null == e ? void 0 : i.get(e),
        a = C.current,
        n = a.resetVersion !== b,
        l = a.sourcePath === m && a.pathVersion !== P;
      if (C.current = {
          sourcePath: m,
          resetVersion: b,
          pathVersion: P
        }, n || l || !e) {
        M.current && (y(M.current), M.current = null), Q(null);
        return
      }
      if (r && (null == t || r.blob === t)) return M.current !== r.url && (M.current && y(M.current), d(r), M.current = r.url), Q(r.url), () => {
        M.current && (y(M.current), M.current = null)
      };
      if (null == t) {
        M.current && (y(M.current), M.current = null), Q(null);
        return
      }
      r && (0 === r.activeCount ? URL.revokeObjectURL(r.url) : s.set(r.url, r), i.delete(e)), M.current && (y(M.current), M.current = null);
      let c = URL.createObjectURL(t),
        h = {
          url: c,
          blob: t,
          generation: u++,
          activeCount: 0,
          lastUsedAt: Date.now(),
          sourcePath: o ?? e
        };
      return i.set(e, h), d(h), p(), M.current = c, Q(c), () => {
        M.current && (y(M.current), M.current = null)
      }
    }, [e, t, o, m, b, P, Q]), x
  }], 709853);
  var b = e.i(414822),
    v = e.i(849329),
    w = e.i(393202),
    P = e.i(766271),
    C = e.i(712824),
    q = e.i(120511),
    O = e.i(907579),
    Q = e.i(175286);
  let x = {
    stat: e => ["file", "stat", (0, a.normalizePath)(e)],
    contentPathPrefix: e => ["file", "content", (0, a.normalizePath)(e)],
    text: (e, t) => ["file", "content", (0, a.normalizePath)(e), "text", t?.maxBytes ?? "full"],
    blob: e => ["file", "content", (0, a.normalizePath)(e), "blob"],
    blobRange: (e, t, r) => ["file", "content", (0, a.normalizePath)(e), "blob", t, r],
    spreadsheetByPath: e => ["file", "spreadsheet-by-path", (0, a.normalizePath)(e)],
    pptxSlidesByPath: e => ["file", "pptx-slides-by-path", (0, a.normalizePath)(e)]
  };

  function M(e, t) {
    if (t.error) return null;
    let r = e.substring(e.lastIndexOf("/") + 1),
      n = (0, q.getFileCategory)(r);
    return "html" === n || "markdown" === n || (0, a.isTextPreviewCategory)(n) ? (0, C.decodeFsTextPayload)(t, {
      preferBase64: !0
    }) : null
  }

  function R(e, t, r) {
    let a = null == t ? x.blob(e) : x.blobRange(e, t.start, t.end);
    return r ? [...a, "url-encoded"] : a
  }

  function k(e, t, r) {
    let n = (0, a.normalizePath)(t),
      i = r?.maxBytes;
    return {
      queryKey: x.text(n, r),
      queryFn: async () => {
        if (null != i) {
          let t = await e.reads([{
            path: n,
            offset: 0,
            len: i
          }]);
          if (!t.ok) throw t.error;
          let [r] = t.data;
          if (!r) throw Error(`Unable to read file content for ${n}`);
          if (r.error) throw Error(r.error);
          let a = M(n, r);
          if (null == a) throw Error(`Unable to decode text content for ${n}`);
          return a
        }
        let t = await e.read(n);
        if (!t.ok) throw t.error;
        return t.data.content
      },
      staleTime: 1 / 0,
      gcTime: 18e5
    }
  }

  function F(e, t, r) {
    let n = (0, a.normalizePath)(t);
    return {
      queryKey: R(n, r?.range, r?.urlEncodedPath),
      queryFn: async t => {
        let a = r?.abortOnUnused === !0 ? t.signal : void 0,
          i = {
            ...r?.range != null ? {
              range: r.range
            } : {},
            ...r?.urlEncodedPath === !0 ? {
              urlEncodedPath: !0
            } : {},
            ...null != a ? {
              signal: a
            } : {}
          },
          s = r?.range != null || r?.urlEncodedPath === !0 || null != a,
          u = async () => {
            await r?.waitForTransport?.();
            let t = await e.rawFetch(n, s ? i : void 0);
            if (!t.ok) throw t.error;
            return t.data
          }, o = r?.resolveBlob;
        return null == o ? u() : o(n, u)
      },
      staleTime: 1 / 0,
      gcTime: 18e5
    }
  }

  function E(e) {
    e.slides.forEach(e => e.shapes.forEach(e => {
      e.imageUrl && URL.revokeObjectURL(e.imageUrl)
    }))
  }

  function T(e) {
    let t = (0, w.useQueryClient)(),
      a = (0, r.useMemo)(() => (0, P.hashKey)(e), [JSON.stringify(e)]),
      n = (0, r.useRef)(null);
    (0, r.useEffect)(() => t.getQueryCache().subscribe(e => {
      if ((0, P.hashKey)(e.query.queryKey) === a)
        if ("removed" === e.type) {
          let t = e.query.state.data;
          t && E(t), n.current = null
        } else "updated" === e.type && "success" === e.action.type && (n.current && E(n.current), n.current = e.query.state.data)
    }), [t, a])
  }

  function U(e, t, r, n) {
    return e.ensureQueryData(k(t, (0, a.normalizePath)(r), n))
  }
  async function D(e, t, r, n) {
    let i = new Set,
      s = null;
    for (let u of r) {
      let r = (0, a.normalizePath)(u);
      if (!(!r || i.has(r))) {
        i.add(r);
        try {
          let a = await U(e, t, r, n);
          return {
            path: r,
            text: a
          }
        } catch (e) {
          s = e
        }
      }
    }
    if (s instanceof Error) throw s;
    throw Error("Unable to read file content.")
  }
  async function B(e, t, r, n) {
    let i = F(t, (0, a.normalizePath)(r), n),
      s = new b.QueryObserver(e, {
        ...i,
        enabled: !1
      }).subscribe(() => {});
    try {
      return await e.ensureQueryData(i)
    } finally {
      s()
    }
  }

  function S(e, t) {
    let r = function(e) {
      let t = e.queryKey;
      if ("file" !== t[0]) return null;
      let r = t[1];
      return "snapshot" === r ? "string" == typeof t[3] ? t[3] : null : ("stat" === r || "content" === r || "spreadsheet-by-path" === r || "pptx-slides-by-path" === r) && "string" == typeof t[2] ? t[2] : null
    }(e);
    return null != r && (r === t || r.startsWith(`${t}?`))
  }

  function A(e) {
    let t = e.queryKey;
    return "file" === t[0] && "content" === t[1] && "blob" === t[3]
  }

  function K(e, t) {
    let r = n(t);
    e.removeQueries({
      predicate: e => S(e, r)
    }), g(t)
  }

  function z(e, t, r, n) {
    e.setQueryData(x.text((0, a.normalizePath)(t), n), r)
  }

  function j(e, t, r) {
    let n = (0, a.normalizePath)(t);
    z(e, n, r);
    let i = n.substring(n.lastIndexOf("/") + 1),
      s = (0, a.getTextPreviewMaxBytes)(i);
    null != s && z(e, n, function(e, t) {
      if (t <= 0 || 0 === e.length) return "";
      let r = 0,
        a = 0;
      for (let n of e) {
        let e = n.codePointAt(0);
        if (null == e) break;
        let i = e <= 127 ? 1 : e <= 2047 ? 2 : e <= 65535 ? 3 : 4;
        if (r + i > t) break;
        r += i, a += n.length
      }
      return a === e.length ? e : e.slice(0, a)
    }(r, s), {
      maxBytes: s
    })
  }
  e.s(["ensureBlobData", 0, B, "ensureFirstAvailableReadData", 0, D, "ensureReadData", 0, U, "fileQueryKeys", 0, x, "primeReadsIntoTextCache", 0, function(e, t, r) {
    let n = new Set;
    for (let i of t) {
      let t = (0, a.normalizePath)(i.path),
        s = M(t, i);
      if (null == s) continue;
      let u = r?.maxBytesByPath?.get(t);
      null != u && z(e, t, s, {
        maxBytes: u
      }), i.eof && (z(e, t, s), n.add(t))
    }
    return n
  }, "readQueryOptions", 0, k, "refreshFileQueriesByPath", 0, function(e, t) {
    let r = n(t),
      a = e => S(e, r);
    e.removeQueries({
      predicate: e => {
        let t;
        return a(e) && ("snapshot" === (t = e.queryKey[1]) || "spreadsheet-by-path" === t || "pptx-slides-by-path" === t || "content" === t && "text" === e.queryKey[3] || 0 === e.getObserversCount() && !A(e))
      }
    }), m(t), e.invalidateQueries({
      predicate: a
    })
  }, "removeFileQueriesByPath", 0, K, "retryFailedRawFileQueries", 0, function(e) {
    return e.invalidateQueries({
      queryKey: ["file", "content"],
      predicate: e => A(e) && "error" === e.state.status
    })
  }, "setReadData", 0, z, "setWrittenTextData", 0, j, "useBlobUrl", 0, function(e, a) {
    let n, i, s = (0, t.c)(4),
      [u, o] = (0, r.useState)(null);
    return s[0] !== e || s[1] !== a ? (n = () => {
      if (null == e || "u" < typeof URL || "function" != typeof URL.createObjectURL || "function" != typeof URL.revokeObjectURL) return void o(null);
      let t = null != a && e.type !== a ? new Blob([e], {
          type: a
        }) : e,
        r = URL.createObjectURL(t);
      return o(r), () => {
        URL.revokeObjectURL(r)
      }
    }, i = [e, a], s[0] = e, s[1] = a, s[2] = n, s[3] = i) : (n = s[2], i = s[3]), (0, r.useEffect)(n, i), u
  }, "useFileStatQuery", 0, function(e, r) {
    let n, i, s, u, o, l = (0, t.c)(11),
      c = (0, O.useHatchGatewayFs)();
    l[0] !== e ? (n = e ? (0, a.normalizePath)(e) : "", s = v.useQuery, i = x.stat(n || "/"), l[0] = e, l[1] = n, l[2] = i, l[3] = s) : (n = l[1], i = l[2], s = l[3]), l[4] !== c || l[5] !== n ? (u = async () => {
      let e = await c.stat(n);
      if (!e.ok) throw e.error;
      return e.data
    }, l[4] = c, l[5] = n, l[6] = u) : u = l[6];
    let h = null != e && (r?.enabled ?? !0);
    return l[7] !== i || l[8] !== u || l[9] !== h ? (o = {
      queryKey: i,
      queryFn: u,
      enabled: h,
      staleTime: 1 / 0
    }, l[7] = i, l[8] = u, l[9] = h, l[10] = o) : o = l[10], s(o)
  }, "useParsedPptxSlides", 0, function(t) {
    let r = ["file", "pptx-slides", t];
    return T(r), (0, v.useQuery)({
      queryKey: r,
      queryFn: async () => {
        let {
          parsePptx: r
        } = await e.A(677358), a = await fetch(t);
        if (!a.ok) throw Error(`Failed to fetch PPTX: ${a.status}`);
        return r(await a.arrayBuffer())
      },
      enabled: null != t,
      staleTime: 1 / 0
    })
  }, "useParsedPptxSlidesByPath", 0, function(t) {
    let r = (0, O.useHatchGatewayFs)(),
      n = t ? (0, a.normalizePath)(t) : "",
      i = x.pptxSlidesByPath(n);
    return T(i), (0, v.useQuery)({
      queryKey: i,
      queryFn: async () => {
        let {
          parsePptx: t
        } = await e.A(677358), a = await r.rawFetch(n);
        if (!a.ok) throw a.error;
        return t(await a.data.arrayBuffer())
      },
      enabled: null != t,
      staleTime: 1 / 0
    })
  }, "useParsedSpreadsheet", 0, function(t) {
    return (0, v.useQuery)({
      queryKey: ["file", "spreadsheet", t],
      queryFn: async () => {
        let {
          parseSpreadsheetInWorker: r
        } = await e.A(398534), a = await fetch(t);
        if (!a.ok) throw Error(`Failed to fetch spreadsheet: ${a.status}`);
        return r(await a.arrayBuffer())
      },
      enabled: null != t,
      staleTime: 1 / 0
    })
  }, "useParsedSpreadsheetByPath", 0, function(t, r = !1) {
    let n = (0, O.useHatchGatewayFs)(),
      i = t ? (0, a.normalizePath)(t) : "";
    return (0, v.useQuery)({
      queryKey: x.spreadsheetByPath(i),
      queryFn: async () => {
        performance.mark("spreadsheet-fetch-start");
        let t = await n.rawFetch(i);
        if (performance.measure("spreadsheet-fetch", "spreadsheet-fetch-start"), !t.ok) throw t.error;
        if (t.data.size > 5e7) return null;
        performance.mark("spreadsheet-arraybuffer-start");
        let a = await t.data.arrayBuffer();
        performance.measure("spreadsheet-arraybuffer", "spreadsheet-arraybuffer-start"), performance.mark("spreadsheet-worker-parse-start");
        let {
          parseSpreadsheetInWorker: s
        } = await e.A(398534), u = await s(a, r);
        return performance.measure("spreadsheet-worker-parse", "spreadsheet-worker-parse-start"), u
      },
      enabled: null != t,
      staleTime: 1 / 0
    })
  }, "useRawQuery", 0, function(e, r) {
    let n, i, s, u, o = (0, t.c)(21),
      l = (0, O.useHatchGatewayFs)(),
      {
        ensureLiveConnection: c,
        isReady: h
      } = (0, Q.useHatchRpc)(),
      f = (0, w.useQueryClient)();
    o[0] !== e ? (n = e ? (0, a.normalizePath)(e) : "", o[0] = e, o[1] = n) : n = o[1];
    let d = n || "/",
      y = r?.range,
      p = r?.urlEncodedPath,
      m = r?.resolveBlob;
    e: {
      let e, t;
      if (null == m) {
        i = void 0;
        break e
      }
      o[2] !== d || o[3] !== y || o[4] !== p ? (e = R(d, y, p), o[2] = d, o[3] = y, o[4] = p, o[5] = e) : e = o[5];
      let r = e;o[6] !== f || o[7] !== r || o[8] !== m ? (t = (e, t) => m(e, t, e => f.setQueryData(r, e)), o[6] = f, o[7] = r, o[8] = m, o[9] = t) : t = o[9],
      i = t
    }
    let g = i,
      b = r?.abortOnUnused,
      P = h ? void 0 : c;
    o[10] !== g || o[11] !== l || o[12] !== d || o[13] !== y || o[14] !== b || o[15] !== P || o[16] !== p ? (s = F(l, d, {
      abortOnUnused: b,
      range: y,
      urlEncodedPath: p,
      resolveBlob: g,
      waitForTransport: P
    }), o[10] = g, o[11] = l, o[12] = d, o[13] = y, o[14] = b, o[15] = P, o[16] = p, o[17] = s) : s = o[17];
    let C = null != e && (r?.enabled ?? !0);
    return o[18] !== s || o[19] !== C ? (u = {
      ...s,
      enabled: C
    }, o[18] = s, o[19] = C, o[20] = u) : u = o[20], (0, v.useQuery)(u)
  }, "useReadQuery", 0, function(e, r) {
    let n, i, s, u = (0, t.c)(8),
      o = (0, O.useHatchGatewayFs)();
    if (u[0] !== o || u[1] !== r?.maxBytes || u[2] !== e) {
      let t = e ? (0, a.normalizePath)(e) : "";
      i = v.useQuery, n = k(o, t || "/", {
        maxBytes: r?.maxBytes
      }), u[0] = o, u[1] = r?.maxBytes, u[2] = e, u[3] = n, u[4] = i
    } else n = u[3], i = u[4];
    let l = null != e && (r?.enabled ?? !0);
    return u[5] !== n || u[6] !== l ? (s = {
      ...n,
      enabled: l
    }, u[5] = n, u[6] = l, u[7] = s) : s = u[7], i(s)
  }, "useWriteAndInvalidateFile", 0, function() {
    let e, r = (0, t.c)(3),
      a = (0, O.useHatchGatewayFs)(),
      n = (0, w.useQueryClient)();
    return r[0] !== a || r[1] !== n ? (e = async (e, t, r) => {
      let i = await a.write(e, t, r);
      return i.ok && (K(n, e), j(n, e, t)), i
    }, r[0] = a, r[1] = n, r[2] = e) : e = r[2], e
  }], 499608)
}, 354385, 910030, e => {
  "use strict";
  let t;
  var r = e.i(766271),
    a = e.i(959243),
    n = e.i(259864),
    i = e.i(578889),
    s = class extends i.Subscribable {
      constructor(e = {}) {
        super(), this.config = e, this.#e = new Map
      }
      #e;
      build(e, t, n) {
        let i = t.queryKey,
          s = t.queryHash ?? (0, r.hashQueryKeyByOptions)(i, t),
          u = this.get(s);
        return u || (u = new a.Query({
          client: e,
          queryKey: i,
          queryHash: s,
          options: e.defaultQueryOptions(t),
          state: n,
          defaultOptions: e.getQueryDefaults(i)
        }), this.add(u)), u
      }
      add(e) {
        this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
          type: "added",
          query: e
        }))
      }
      remove(e) {
        let t = this.#e.get(e.queryHash);
        t && (e.destroy(), t === e && this.#e.delete(e.queryHash), this.notify({
          type: "removed",
          query: e
        }))
      }
      clear() {
        n.notifyManager.batch(() => {
          this.getAll().forEach(e => {
            this.remove(e)
          })
        })
      }
      get(e) {
        return this.#e.get(e)
      }
      getAll() {
        return [...this.#e.values()]
      }
      find(e) {
        let t = {
          exact: !0,
          ...e
        };
        return this.getAll().find(e => (0, r.matchQuery)(t, e))
      }
      findAll(e = {}) {
        let t = this.getAll();
        return Object.keys(e).length > 0 ? t.filter(t => (0, r.matchQuery)(e, t)) : t
      }
      notify(e) {
        n.notifyManager.batch(() => {
          this.listeners.forEach(t => {
            t(e)
          })
        })
      }
      onFocus() {
        n.notifyManager.batch(() => {
          this.getAll().forEach(e => {
            e.onFocus()
          })
        })
      }
      onOnline() {
        n.notifyManager.batch(() => {
          this.getAll().forEach(e => {
            e.onOnline()
          })
        })
      }
    },
    u = e.i(51449),
    o = i,
    l = class extends o.Subscribable {
      constructor(e = {}) {
        super(), this.config = e, this.#t = new Set, this.#r = new Map, this.#a = 0
      }
      #t;
      #r;
      #a;
      build(e, t, r) {
        let a = new u.Mutation({
          client: e,
          mutationCache: this,
          mutationId: ++this.#a,
          options: e.defaultMutationOptions(t),
          state: r
        });
        return this.add(a), a
      }
      add(e) {
        this.#t.add(e);
        let t = c(e);
        if ("string" == typeof t) {
          let r = this.#r.get(t);
          r ? r.push(e) : this.#r.set(t, [e])
        }
        this.notify({
          type: "added",
          mutation: e
        })
      }
      remove(e) {
        if (this.#t.delete(e)) {
          let t = c(e);
          if ("string" == typeof t) {
            let r = this.#r.get(t);
            if (r)
              if (r.length > 1) {
                let t = r.indexOf(e); - 1 !== t && r.splice(t, 1)
              } else r[0] === e && this.#r.delete(t)
          }
        }
        this.notify({
          type: "removed",
          mutation: e
        })
      }
      canRun(e) {
        let t = c(e);
        if ("string" != typeof t) return !0;
        {
          let r = this.#r.get(t),
            a = r?.find(e => "pending" === e.state.status);
          return !a || a === e
        }
      }
      runNext(e) {
        let t = c(e);
        if ("string" != typeof t) return Promise.resolve();
        {
          let r = this.#r.get(t)?.find(t => t !== e && t.state.isPaused);
          return r?.continue() ?? Promise.resolve()
        }
      }
      clear() {
        n.notifyManager.batch(() => {
          this.#t.forEach(e => {
            this.notify({
              type: "removed",
              mutation: e
            })
          }), this.#t.clear(), this.#r.clear()
        })
      }
      getAll() {
        return Array.from(this.#t)
      }
      find(e) {
        let t = {
          exact: !0,
          ...e
        };
        return this.getAll().find(e => (0, r.matchMutation)(t, e))
      }
      findAll(e = {}) {
        return this.getAll().filter(t => (0, r.matchMutation)(e, t))
      }
      notify(e) {
        n.notifyManager.batch(() => {
          this.listeners.forEach(t => {
            t(e)
          })
        })
      }
      resumePausedMutations() {
        let e = this.getAll().filter(e => e.state.isPaused);
        return n.notifyManager.batch(() => Promise.all(e.map(e => e.continue().catch(r.noop))))
      }
    };

  function c(e) {
    return e.options.scope?.id
  }
  var h = e.i(82679),
    f = e.i(60045),
    d = e.i(384778),
    y = class {
      #n;
      #i;
      #s;
      #u;
      #o;
      #l;
      #c;
      #h;
      constructor(e = {}) {
        this.#n = e.queryCache || new s, this.#i = e.mutationCache || new l, this.#s = e.defaultOptions || {}, this.#u = new Map, this.#o = new Map, this.#l = 0
      }
      mount() {
        this.#l++, 1 === this.#l && (this.#c = h.focusManager.subscribe(async e => {
          e && (await this.resumePausedMutations(), this.#n.onFocus())
        }), this.#h = f.onlineManager.subscribe(async e => {
          e && (await this.resumePausedMutations(), this.#n.onOnline())
        }))
      }
      unmount() {
        this.#l--, 0 === this.#l && (this.#c?.(), this.#c = void 0, this.#h?.(), this.#h = void 0)
      }
      isFetching(e) {
        return this.#n.findAll({
          ...e,
          fetchStatus: "fetching"
        }).length
      }
      isMutating(e) {
        return this.#i.findAll({
          ...e,
          status: "pending"
        }).length
      }
      getQueryData(e) {
        let t = this.defaultQueryOptions({
          queryKey: e
        });
        return this.#n.get(t.queryHash)?.state.data
      }
      ensureQueryData(e) {
        let t = this.defaultQueryOptions(e),
          a = this.#n.build(this, t),
          n = a.state.data;
        return void 0 === n ? this.fetchQuery(e) : (e.revalidateIfStale && a.isStaleByTime((0, r.resolveStaleTime)(t.staleTime, a)) && this.prefetchQuery(t), Promise.resolve(n))
      }
      getQueriesData(e) {
        return this.#n.findAll(e).map(({
          queryKey: e,
          state: t
        }) => [e, t.data])
      }
      setQueryData(e, t, a) {
        let n = this.defaultQueryOptions({
            queryKey: e
          }),
          i = this.#n.get(n.queryHash),
          s = i?.state.data,
          u = (0, r.functionalUpdate)(t, s);
        if (void 0 !== u) return this.#n.build(this, n).setData(u, {
          ...a,
          manual: !0
        })
      }
      setQueriesData(e, t, r) {
        return n.notifyManager.batch(() => this.#n.findAll(e).map(({
          queryKey: e
        }) => [e, this.setQueryData(e, t, r)]))
      }
      getQueryState(e) {
        let t = this.defaultQueryOptions({
          queryKey: e
        });
        return this.#n.get(t.queryHash)?.state
      }
      removeQueries(e) {
        let t = this.#n;
        n.notifyManager.batch(() => {
          t.findAll(e).forEach(e => {
            t.remove(e)
          })
        })
      }
      resetQueries(e, t) {
        let r = this.#n;
        return n.notifyManager.batch(() => (r.findAll(e).forEach(e => {
          e.reset()
        }), this.refetchQueries({
          type: "active",
          ...e
        }, t)))
      }
      cancelQueries(e, t = {}) {
        let a = {
          revert: !0,
          ...t
        };
        return Promise.all(n.notifyManager.batch(() => this.#n.findAll(e).map(e => e.cancel(a)))).then(r.noop).catch(r.noop)
      }
      invalidateQueries(e, t = {}) {
        return n.notifyManager.batch(() => (this.#n.findAll(e).forEach(e => {
          e.invalidate()
        }), e?.refetchType === "none") ? Promise.resolve() : this.refetchQueries({
          ...e,
          type: e?.refetchType ?? e?.type ?? "active"
        }, t))
      }
      refetchQueries(e, t = {}) {
        let a = {
          ...t,
          cancelRefetch: t.cancelRefetch ?? !0
        };
        return Promise.all(n.notifyManager.batch(() => this.#n.findAll(e).filter(e => !e.isDisabled() && !e.isStatic()).map(e => {
          let t = e.fetch(void 0, a);
          return a.throwOnError || (t = t.catch(r.noop)), "paused" === e.state.fetchStatus ? Promise.resolve() : t
        }))).then(r.noop)
      }
      fetchQuery(e) {
        let t = this.defaultQueryOptions(e);
        void 0 === t.retry && (t.retry = !1);
        let a = this.#n.build(this, t);
        return a.isStaleByTime((0, r.resolveStaleTime)(t.staleTime, a)) ? a.fetch(t) : Promise.resolve(a.state.data)
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(r.noop).catch(r.noop)
      }
      fetchInfiniteQuery(e) {
        return e.behavior = (0, d.infiniteQueryBehavior)(e.pages), this.fetchQuery(e)
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(r.noop).catch(r.noop)
      }
      ensureInfiniteQueryData(e) {
        return e.behavior = (0, d.infiniteQueryBehavior)(e.pages), this.ensureQueryData(e)
      }
      resumePausedMutations() {
        return f.onlineManager.isOnline() ? this.#i.resumePausedMutations() : Promise.resolve()
      }
      getQueryCache() {
        return this.#n
      }
      getMutationCache() {
        return this.#i
      }
      getDefaultOptions() {
        return this.#s
      }
      setDefaultOptions(e) {
        this.#s = e
      }
      setQueryDefaults(e, t) {
        this.#u.set((0, r.hashKey)(e), {
          queryKey: e,
          defaultOptions: t
        })
      }
      getQueryDefaults(e) {
        let t = [...this.#u.values()],
          a = {};
        return t.forEach(t => {
          (0, r.partialMatchKey)(e, t.queryKey) && Object.assign(a, t.defaultOptions)
        }), a
      }
      setMutationDefaults(e, t) {
        this.#o.set((0, r.hashKey)(e), {
          mutationKey: e,
          defaultOptions: t
        })
      }
      getMutationDefaults(e) {
        let t = [...this.#o.values()],
          a = {};
        return t.forEach(t => {
          (0, r.partialMatchKey)(e, t.mutationKey) && Object.assign(a, t.defaultOptions)
        }), a
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        let t = {
          ...this.#s.queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0
        };
        return t.queryHash || (t.queryHash = (0, r.hashQueryKeyByOptions)(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === r.skipToken && (t.enabled = !1), t
      }
      defaultMutationOptions(e) {
        return e?._defaulted ? e : {
          ...this.#s.mutations,
          ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
          ...e,
          _defaulted: !0
        }
      }
      clear() {
        this.#n.clear(), this.#i.clear()
      }
    };
  e.s(["QueryClient", 0, y], 910030);
  var p = e.i(925301),
    m = e.i(863641);
  let g = Symbol("hatch.handledError");

  function b(e) {
    return Object.defineProperty(e, g, {
      value: !0,
      enumerable: !1
    }), e
  }

  function v(e) {
    return "object" == typeof e && null !== e && !0 === e[g]
  }
  e.s(["createHatchHandledError", 0, function(e) {
    return b(Error(e))
  }, "getHatchQueryClient", 0, function() {
    return t ??= new y({
      queryCache: new s({
        onError: (e, t) => {
          let r = t.meta?.sentrySurface;
          if (null != r && !v(e)) {
            var a, n;
            let i;
            (0, m.captureHatchException)(r, e, {
              tags: {
                query_operation: (a = t.state.fetchMeta, n = void 0 !== t.state.data, "forward" === (i = a?.fetchMore?.direction) ? "pagination_next" : "backward" === i ? "pagination_previous" : n ? "refetch" : "initial")
              }
            })
          }
        }
      }),
      defaultOptions: {
        queries: {
          staleTime: 6e4,
          gcTime: 3e5,
          retry: (e, t) => !(0, p.isGatewayRateLimitError)(t) && e < 1,
          refetchOnWindowFocus: !1
        }
      }
    })
  }, "isHatchHandledError", 0, v, "markHatchErrorHandled", 0, b], 354385)
}, 384778, e => {
  "use strict";
  var t = e.i(766271);

  function r(e, {
    pages: t,
    pageParams: a
  }) {
    let n = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[n], t, a[n], a) : void 0
  }

  function a(e, {
    pages: t,
    pageParams: r
  }) {
    return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, r[0], r) : void 0
  }
  e.s(["hasNextPage", 0, function(e, t) {
    return !!t && null != r(e, t)
  }, "hasPreviousPage", 0, function(e, t) {
    return !!t && !!e.getPreviousPageParam && null != a(e, t)
  }, "infiniteQueryBehavior", 0, function(e) {
    return {
      onFetch: (n, i) => {
        let s = n.options,
          u = n.fetchOptions?.meta?.fetchMore?.direction,
          o = n.state.data?.pages || [],
          l = n.state.data?.pageParams || [],
          c = {
            pages: [],
            pageParams: []
          },
          h = 0,
          f = async () => {
            let i = !1,
              f = (0, t.ensureQueryFn)(n.options, n.fetchOptions),
              d = async (e, r, a) => {
                let s;
                if (i) return Promise.reject();
                if (null == r && e.pages.length) return Promise.resolve(e);
                let u = (s = {
                    client: n.client,
                    queryKey: n.queryKey,
                    pageParam: r,
                    direction: a ? "backward" : "forward",
                    meta: n.options.meta
                  }, (0, t.addConsumeAwareSignal)(s, () => n.signal, () => i = !0), s),
                  o = await f(u),
                  {
                    maxPages: l
                  } = n.options,
                  c = a ? t.addToStart : t.addToEnd;
                return {
                  pages: c(e.pages, o, l),
                  pageParams: c(e.pageParams, r, l)
                }
              };
            if (u && o.length) {
              let e = "backward" === u,
                t = {
                  pages: o,
                  pageParams: l
                },
                n = (e ? a : r)(s, t);
              c = await d(t, n, e)
            } else {
              let t = e ?? o.length;
              do {
                let e = 0 === h ? l[0] ?? s.initialPageParam : r(s, c);
                if (h > 0 && null == e) break;
                c = await d(c, e), h++
              } while (h < t)
            }
            return c
          };
        n.options.persister ? n.fetchFn = () => n.options.persister?.(f, {
          client: n.client,
          queryKey: n.queryKey,
          meta: n.options.meta,
          signal: n.signal
        }, i) : n.fetchFn = f
      }
    }
  }])
}, 51449, e => {
  "use strict";
  var t = e.i(259864),
    r = e.i(539392),
    a = e.i(313805),
    n = class extends r.Removable {
      #f;
      #d;
      #i;
      #y;
      constructor(e) {
        super(), this.#f = e.client, this.mutationId = e.mutationId, this.#i = e.mutationCache, this.#d = [], this.state = e.state || i(), this.setOptions(e.options), this.scheduleGc()
      }
      setOptions(e) {
        this.options = e, this.updateGcTime(this.options.gcTime)
      }
      get meta() {
        return this.options.meta
      }
      addObserver(e) {
        this.#d.includes(e) || (this.#d.push(e), this.clearGcTimeout(), this.#i.notify({
          type: "observerAdded",
          mutation: this,
          observer: e
        }))
      }
      removeObserver(e) {
        this.#d = this.#d.filter(t => t !== e), this.scheduleGc(), this.#i.notify({
          type: "observerRemoved",
          mutation: this,
          observer: e
        })
      }
      optionalRemove() {
        this.#d.length || ("pending" === this.state.status ? this.scheduleGc() : this.#i.remove(this))
      }
      continue () {
        return this.#y?.continue() ?? this.execute(this.state.variables)
      }
      async execute(e) {
        let t = () => {
            this.#p({
              type: "continue"
            })
          },
          r = {
            client: this.#f,
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
          };
        this.#y = (0, a.createRetryer)({
          fn: () => this.options.mutationFn ? this.options.mutationFn(e, r) : Promise.reject(Error("No mutationFn found")),
          onFail: (e, t) => {
            this.#p({
              type: "failed",
              failureCount: e,
              error: t
            })
          },
          onPause: () => {
            this.#p({
              type: "pause"
            })
          },
          onContinue: t,
          retry: this.options.retry ?? 0,
          retryDelay: this.options.retryDelay,
          networkMode: this.options.networkMode,
          canRun: () => this.#i.canRun(this)
        });
        let n = "pending" === this.state.status,
          i = !this.#y.canStart();
        try {
          if (n) t();
          else {
            this.#p({
              type: "pending",
              variables: e,
              isPaused: i
            }), this.#i.config.onMutate && await this.#i.config.onMutate(e, this, r);
            let t = await this.options.onMutate?.(e, r);
            t !== this.state.context && this.#p({
              type: "pending",
              context: t,
              variables: e,
              isPaused: i
            })
          }
          let a = await this.#y.start();
          return await this.#i.config.onSuccess?.(a, e, this.state.context, this, r), await this.options.onSuccess?.(a, e, this.state.context, r), await this.#i.config.onSettled?.(a, null, this.state.variables, this.state.context, this, r), await this.options.onSettled?.(a, null, e, this.state.context, r), this.#p({
            type: "success",
            data: a
          }), a
        } catch (t) {
          try {
            await this.#i.config.onError?.(t, e, this.state.context, this, r)
          } catch (e) {
            Promise.reject(e)
          }
          try {
            await this.options.onError?.(t, e, this.state.context, r)
          } catch (e) {
            Promise.reject(e)
          }
          try {
            await this.#i.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this, r)
          } catch (e) {
            Promise.reject(e)
          }
          try {
            await this.options.onSettled?.(void 0, t, e, this.state.context, r)
          } catch (e) {
            Promise.reject(e)
          }
          throw this.#p({
            type: "error",
            error: t
          }), t
        } finally {
          this.#i.runNext(this)
        }
      }
      #p(e) {
        this.state = (t => {
          switch (e.type) {
            case "failed":
              return {
                ...t, failureCount: e.failureCount, failureReason: e.error
              };
            case "pause":
              return {
                ...t, isPaused: !0
              };
            case "continue":
              return {
                ...t, isPaused: !1
              };
            case "pending":
              return {
                ...t, context: e.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: e.isPaused, status: "pending", variables: e.variables, submittedAt: Date.now()
              };
            case "success":
              return {
                ...t, data: e.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
              };
            case "error":
              return {
                ...t, data: void 0, error: e.error, failureCount: t.failureCount + 1, failureReason: e.error, isPaused: !1, status: "error"
              }
          }
        })(this.state), t.notifyManager.batch(() => {
          this.#d.forEach(t => {
            t.onMutationUpdate(e)
          }), this.#i.notify({
            mutation: this,
            type: "updated",
            action: e
          })
        })
      }
    };

  function i() {
    return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: !1,
      status: "idle",
      variables: void 0,
      submittedAt: 0
    }
  }
  e.s(["Mutation", 0, n, "getDefaultState", 0, i])
}]);

//# debugId=2eeac1bc-9b50-deee-411f-1cf2f3547e80
//# sourceMappingURL=1nj9n42351_jc.js.map