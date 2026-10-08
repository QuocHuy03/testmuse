;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "e7aeff4c-5c7f-8f8e-3216-60337ee51364")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 907579, 848424, e => {
  "use strict";
  var t = e.i(519172),
    r = e.i(359783),
    s = e.i(175286),
    a = e.i(925301),
    i = e.i(32911),
    n = e.i(335004),
    o = e.i(712824),
    u = e.i(826972),
    l = e.i(970012),
    c = e.i(871157);

  function h(e) {
    return "" === e || "/" === e ? "/" : e.startsWith("/") ? e : "/" + e
  }

  function d(e, t) {
    return null != e && e.length > 0 ? e : "number" == typeof t && Number.isFinite(t) && t > 0 ? new Date(t).toISOString() : ""
  }

  function p(e, t) {
    let r = "/" === e ? "" : e;
    return {
      entries: (t.entries ?? []).filter(e => "file" === e.type || "directory" === e.type).map(e => {
        let t = h("" === r ? e.name : `${r}/${e.name}`),
          s = (0, l.parseHatchMediaResource)(e.media, {
            fallbackPath: t
          }) ?? void 0;
        return {
          name: e.name,
          path: t,
          type: e.type,
          size: e.size ?? 0,
          modifiedAt: d(e.modifiedAt, e.modified_ms),
          ...null != s ? {
            media: s
          } : {}
        }
      }),
      truncated: !1
    }
  }

  function f(e) {
    if (!Array.isArray(e.entries)) throw Error("Library query returned unexpected response shape");
    return {
      entries: e.entries.map(e => {
        let t = h(e.path),
          r = (0, l.parseHatchMediaResource)(e.media, {
            fallbackPath: t
          }) ?? void 0;
        return {
          name: e.name,
          path: t,
          type: "file",
          size: e.size,
          modifiedAt: d(void 0, e.modified_ms),
          ...null != r ? {
            media: r
          } : {}
        }
      }),
      total: e.total,
      hasMore: e.has_more
    }
  }
  e.s(["fromFsModifiedValue", 0, d, "normalizeFsLibraryResponse", 0, f, "normalizeFsListResponse", 0, p, "toHatchInternalPath", 0, h], 848424);
  let y = (0, r.createClientLogger)("HatchGatewayFs");
  async function m(e, t, r, s, i) {
    if (!s) throw (0, a.createGatewayTransportError)(`Noise transport not ready for ${t}`);
    let n = t.replace(/^\//, "").replace(/\//g, ".");
    return null == i ? s(n, r) : s(n, r, i)
  }
  e.s(["useHatchGatewayFs", 0, function() {
    let {
      gatewayUrl: e,
      sendRequest: r,
      vmName: v
    } = (0, s.useHatchRpc)(), b = (0, t.useRef)(e);
    b.current = e;
    let w = (0, t.useRef)(r);
    w.current = r;
    let g = (0, t.useRef)(v);
    return g.current = v, (0, t.useMemo)(() => {
      let e = () => (0, i.requireGatewayUrlOrThrow)(b.current),
        t = async (t, r) => m(e(), t, r, w.current), r = async (t, r, s) => {
          let i = e(),
            l = w.current,
            h = (0, c.gatewayTargetKey)(i, g.current),
            d = (0, u.toHatchGatewayApiPath)(t),
            p = r.size,
            f = Math.ceil(p / 524288),
            y = s?.stageBeforePublish === !0 && f > 1,
            v = d.lastIndexOf("/"),
            b = v >= 0 ? d.slice(0, v + 1) : "",
            R = `${b}.upload-${crypto.randomUUID()}.part`,
            S = y ? R : d,
            T = !1,
            O = !y;
          s?.registerTargetScopedCleanup?.(() => T ? Promise.resolve((0, n.okHatchGatewayResult)(void 0)) : (T = !0, O) ? (0, n.runHatchGatewayResultOperation)(async () => {
            await m(i, "/fs/delete", {
              path: d,
              recursive: !1
            }, l, {
              expectedGatewayTargetKey: h
            })
          }) : Promise.resolve((0, n.okHatchGatewayResult)(void 0)));
          let E = new Map,
            G = 0,
            C = 0,
            I = () => {
              if (C >= p) return;
              let e = Math.min(C + 524288, p);
              E.set(G, (0, o.encodeBlobToBase64)(r.slice(C, e))), G++, C = e
            };
          for (let e = 0; e < Math.min(3, f); e++) I();
          try {
            0 === f && await m(i, "/fs/write", {
              path: S,
              data_base64: "",
              overwrite: !0,
              append: !1,
              create_parent: !0
            }, l, {
              expectedGatewayTargetKey: h,
              signal: s?.signal
            });
            let e = 0;
            for (let t = 0; t < f; t++) {
              s?.signal?.throwIfAborted();
              let r = await E.get(t);
              E.delete(t), I();
              let a = Math.min(e + 524288, p);
              await m(i, "/fs/write", {
                path: S,
                data_base64: r,
                overwrite: 0 === t,
                append: 0 !== t,
                create_parent: 0 === t
              }, l, {
                expectedGatewayTargetKey: h,
                signal: s?.signal
              }), e = a, s?.onProgress?.(Math.round(e / p * 100))
            }
            if (!y) return;
            let t = await m(i, "/fs/stat", {
              path: R
            }, l, {
              expectedGatewayTargetKey: h,
              signal: s?.signal
            });
            if ("file" !== t.kind || t.size !== p) throw (0, a.createGatewayTransportError)("Uploaded file failed size validation");
            try {
              await m(i, "/fs/rename", {
                source: R,
                destination: d,
                create_parent: !0,
                overwrite: !0
              }, l, {
                expectedGatewayTargetKey: h,
                signal: s?.signal
              }), O = !0
            } catch (e) {
              try {
                let e = !0;
                try {
                  await m(i, "/fs/stat", {
                    path: R
                  }, l, {
                    expectedGatewayTargetKey: h,
                    signal: s?.signal
                  })
                } catch (t) {
                  if ((0, n.toHatchGatewayError)(t)?.kind !== "not_found") throw t;
                  e = !1
                }
                let t = await m(i, "/fs/stat", {
                  path: d
                }, l, {
                  expectedGatewayTargetKey: h,
                  signal: s?.signal
                });
                if (!e && "file" === t.kind && t.size === p) {
                  O = !0;
                  return
                }
              } catch {}
              throw e
            }
          } catch (e) {
            if (y) try {
              await m(i, "/fs/delete", {
                path: R,
                recursive: !1
              }, l, {
                expectedGatewayTargetKey: h
              })
            } catch {}
            throw e
          }
        }, s = async (e, t, s) => {
          await r(e, t, s)
        }, v = async (e, t) => (0, n.runHatchGatewayResultOperation)(async () => {
          let r = (0, u.toHatchGatewayRawApiPath)(e, t?.urlEncodedPath === !0),
            s = function(e) {
              let t = e.split("?", 2)[1]?.split("#", 2)[0];
              if (!t || 0 === t.length) return {};
              let r = new URLSearchParams(t),
                s = {},
                a = new Set;
              for (let e of r.keys()) {
                if (a.has(e)) continue;
                a.add(e);
                let t = r.getAll(e);
                0 !== t.length && (s[e] = 1 === t.length ? t[0] : t)
              }
              return s
            }(e),
            i = w.current;
          if (!i) throw (0, a.createGatewayTransportError)("Noise transport not ready for fs.raw");
          let n = {
              ...s,
              path: r
            },
            o = [];
          if (t?.range != null) {
            if (!Number.isSafeInteger(t.range.start) || !Number.isSafeInteger(t.range.end) || t.range.start < 0 || t.range.end < t.range.start) throw (0, a.createGatewayTransportError)("Invalid fs.raw byte range");
            o.push({
              key: "Range",
              value: `bytes=${t.range.start}-${t.range.end}`
            })
          }
          let l = {
            extraHeaders: o
          };
          return t?.signal != null && (l.signal = t.signal), i("fs.raw", n, l)
        }), R = async e => (0, n.runHatchGatewayResultOperation)(async () => {
          let t = await v(e);
          return t.ok ? t.data.text() : t
        });
      return {
        list: async e => (0, n.runHatchGatewayResultOperation)(async () => {
          let t = await w.current("fs.list", {
            path: (0, u.toHatchGatewayApiPath)(e)
          });
          return p(e, t)
        }),
        read: async (r, s) => (0, n.runHatchGatewayResultOperation)(async () => {
          let i = s?.expectedGatewayTargetKey != null || s?.signal != null,
            l = i ? e() : null,
            h = i ? w.current : void 0,
            d = null == l ? null : (0, c.gatewayTargetKey)(l, g.current),
            p = s?.expectedGatewayTargetKey ?? d;
          if (null != p && null != d && p !== d) throw (0, a.createGatewayTargetChangedError)();
          let f = e => null == l ? t("/fs/read", e) : m(l, "/fs/read", e, h, {
              ...null == p ? {} : {
                expectedGatewayTargetKey: p
              },
              ...s?.signal == null ? {} : {
                signal: s.signal
              }
            }),
            v = [],
            b = [],
            R = 0,
            S = !1,
            T = s?.encoding === "base64",
            O = s?.maxBytes;
          if (null != O && (!Number.isSafeInteger(O) || O < 0)) return (0, n.errHatchGatewayResult)((0, n.createHatchGatewayError)("server", "Invalid fs.read byte limit"));
          for (; !S;) {
            let e = null == O ? 1048576 : Math.min(1048576, Math.max(1, O - R + 1)),
              t = await f({
                path: (0, u.toHatchGatewayApiPath)(r),
                offset: R,
                len: e
              }),
              s = t.len ?? 0;
            if (null != O && (!Number.isSafeInteger(s) || s < 0 || s > e || R + s > O)) return (0, n.errHatchGatewayResult)((0, n.createHatchGatewayError)("server", "Gateway fs read exceeded configured byte limit"));
            let a = null;
            if (null != O) {
              if (!(0, o.hasExpectedBase64Shape)(t.data_base64, s)) return (0, n.errHatchGatewayResult)((0, n.createHatchGatewayError)("server", "Gateway fs read returned malformed bounded payload"));
              try {
                a = (0, o.decodeBase64ToBytes)(t.data_base64)
              } catch (e) {
                return (0, n.errHatchGatewayResult)((0, n.createHatchGatewayError)("server", "Gateway fs read returned malformed bounded payload", {
                  cause: e
                }))
              }
              if (a.byteLength !== s) return (0, n.errHatchGatewayResult)((0, n.createHatchGatewayError)("server", "Gateway fs read returned malformed bounded payload"))
            }
            if (T ? b.push(a ?? (0, o.decodeBase64ToBytes)(t.data_base64 ?? "")) : v.push((0, o.decodeFsTextPayload)(t, {
                preferBase64: !0
              }) ?? ""), 0 === s && !t.eof) {
              if (null != O) return (0, n.errHatchGatewayResult)((0, n.createHatchGatewayError)("server", "Gateway fs read could not confirm the configured byte limit"));
              break
            }
            R += s, S = t.eof
          }
          if (y.retainForBugReport("info", "Gateway fs read"), T) {
            let e = new Uint8Array(b.reduce((e, t) => e + t.length, 0)),
              t = 0;
            for (let r of b) e.set(r, t), t += r.length;
            return {
              content: (0, o.encodeBytesToBase64)(e),
              encoding: "base64"
            }
          }
          return {
            content: v.join("")
          }
        }),
        reads: async e => (0, n.runHatchGatewayResultOperation)(async () => {
          if (0 === e.length) return [];
          let r = {
              entries: e.map(e => ({
                ...e,
                path: (0, u.toHatchGatewayApiPath)(e.path)
              }))
            },
            s = await t("/fs/reads", r);
          return ("ok" in s && "result" in s ? s.result : s).entries
        }),
        write: async (e, r, s) => (0, n.runHatchGatewayResultOperation)(async () => {
          let a = s?.createDirectories ?? !1;
          s?.encoding === "base64" ? await t("/fs/write", {
            path: (0, u.toHatchGatewayApiPath)(e),
            data_base64: r,
            overwrite: !0,
            append: !1,
            create_parent: a
          }) : await t("/fs/write", {
            path: (0, u.toHatchGatewayApiPath)(e),
            text: r,
            overwrite: !0,
            append: !1,
            create_parent: a
          })
        }),
        mkdir: async e => (0, n.runHatchGatewayResultOperation)(async () => {
          await t("/fs/mkdir", {
            path: (0, u.toHatchGatewayApiPath)(e),
            recursive: !0
          })
        }),
        del: async e => (0, n.runHatchGatewayResultOperation)(async () => {
          await t("/fs/delete", {
            path: (0, u.toHatchGatewayApiPath)(e),
            recursive: !0
          })
        }),
        rename: async (e, r) => (0, n.runHatchGatewayResultOperation)(async () => {
          await t("/fs/rename", {
            source: (0, u.toHatchGatewayApiPath)(e),
            destination: (0, u.toHatchGatewayApiPath)(r),
            create_parent: !0
          })
        }),
        delete: async e => (0, n.runHatchGatewayResultOperation)(async () => {
          await t("/fs/delete", {
            path: (0, u.toHatchGatewayApiPath)(e),
            recursive: !1
          })
        }),
        uploadFile: async (e, t, r) => (0, n.runHatchGatewayResultOperation)(async () => {
          await s(e, t, r)
        }),
        search: async e => (0, n.runHatchGatewayResultOperation)(async () => {
          let r = await t("/fs/search", e);
          return Array.isArray(r.entries) ? {
            entries: r.entries.map(e => {
              let t = h(e.path),
                r = (0, l.parseHatchMediaResource)(e.media, {
                  fallbackPath: t
                }) ?? void 0;
              return {
                name: e.name,
                path: t,
                type: "file",
                size: e.size,
                modifiedAt: d(void 0, e.modified_ms),
                ...null != r ? {
                  media: r
                } : {}
              }
            }),
            total: r.total,
            hasMore: r.has_more
          } : (y.error({
            raw: r,
            params: e
          }, "File search returned unexpected response shape"), (0, n.errHatchGatewayResult)((0, n.createHatchGatewayError)("server", "File search returned unexpected response shape", {
            cause: r
          })))
        }),
        library: async e => (0, n.runHatchGatewayResultOperation)(async () => {
          let r = await t("/fs/library", e);
          try {
            return f(r)
          } catch (t) {
            return y.error({
              error: t,
              raw: r,
              params: e
            }, "Library query returned unexpected response shape"), (0, n.errHatchGatewayResult)((0, n.createHatchGatewayError)("server", "Library query returned unexpected response shape", {
              cause: r
            }))
          }
        }),
        stat: async e => (0, n.runHatchGatewayResultOperation)(async () => {
          let r = await t("/fs/stat", {
            path: (0, u.toHatchGatewayApiPath)(e)
          });
          return {
            path: r.path,
            kind: r.kind,
            size: r.size,
            modifiedAt: d(void 0, r.modified_ms),
            modifiedMs: r.modified_ms ?? 0
          }
        }),
        stats: async e => (0, n.runHatchGatewayResultOperation)(async () => {
          let r = await t("/fs/stats", {
              paths: e.map(u.toHatchGatewayApiPath)
            }),
            s = "ok" in r && "result" in r ? r.result : r,
            a = s.entries;
          return Array.isArray(a) ? a.filter(e => null == e.error).map(e => ({
            path: e.path,
            kind: e.kind ?? "file",
            size: e.size ?? 0,
            modifiedAt: d(void 0, e.modified_ms),
            modifiedMs: e.modified_ms ?? 0
          })) : 0 === e.length ? [] : (0, n.errHatchGatewayResult)((0, n.createHatchGatewayError)("server", `fs.stats returned malformed response: expected entries array, got ${typeof a}`, {
            cause: s
          }))
        }),
        rawFetch: v,
        rawText: R,
        exportPdf: async (e, t) => (0, n.runHatchGatewayResultOperation)(async () => {
          let r = w.current;
          if (!r) throw (0, a.createGatewayTransportError)("Noise transport not ready for fs.export");
          let s = {
            path: (0, u.toHatchGatewayApiPath)(e),
            format: "pdf"
          };
          return t?.signal != null ? await r("fs.export", s, {
            signal: t.signal
          }) : await r("fs.export", s)
        })
      }
    }, [])
  }], 907579)
}, 82679, 578889, e => {
  "use strict";
  var t = class {
    constructor() {
      this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
      return this.listeners.add(e), this.onSubscribe(), () => {
        this.listeners.delete(e), this.onUnsubscribe()
      }
    }
    hasListeners() {
      return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
  };
  e.s(["Subscribable", 0, t], 578889);
  var r = e.i(766271),
    s = new class extends t {
      #e;
      #t;
      #r;
      constructor() {
        super(), this.#r = e => {
          if (!r.isServer && window.addEventListener) {
            let t = () => e();
            return window.addEventListener("visibilitychange", t, !1), () => {
              window.removeEventListener("visibilitychange", t)
            }
          }
        }
      }
      onSubscribe() {
        this.#t || this.setEventListener(this.#r)
      }
      onUnsubscribe() {
        this.hasListeners() || (this.#t?.(), this.#t = void 0)
      }
      setEventListener(e) {
        this.#r = e, this.#t?.(), this.#t = e(e => {
          "boolean" == typeof e ? this.setFocused(e) : this.onFocus()
        })
      }
      setFocused(e) {
        this.#e !== e && (this.#e = e, this.onFocus())
      }
      onFocus() {
        let e = this.isFocused();
        this.listeners.forEach(t => {
          t(e)
        })
      }
      isFocused() {
        return "boolean" == typeof this.#e ? this.#e : globalThis.document?.visibilityState !== "hidden"
      }
    };
  e.s(["focusManager", 0, s], 82679)
}, 259864, e => {
  "use strict";
  let t, r, s, a, i, n;
  var o = e.i(305763).systemSetTimeoutZero,
    u = (t = [], r = 0, s = e => {
      e()
    }, a = e => {
      e()
    }, i = o, {
      batch: e => {
        let n;
        r++;
        try {
          n = e()
        } finally {
          let e;
          --r || (e = t, t = [], e.length && i(() => {
            a(() => {
              e.forEach(e => {
                s(e)
              })
            })
          }))
        }
        return n
      },
      batchCalls: e => (...t) => {
        n(() => {
          e(...t)
        })
      },
      schedule: n = e => {
        r ? t.push(e) : i(() => {
          s(e)
        })
      },
      setNotifyFunction: e => {
        s = e
      },
      setBatchNotifyFunction: e => {
        a = e
      },
      setScheduler: e => {
        i = e
      }
    });
  e.s(["notifyManager", 0, u])
}, 959243, e => {
  "use strict";
  var t = e.i(766271),
    r = e.i(259864),
    s = e.i(313805),
    a = e.i(539392),
    i = class extends a.Removable {
      #s;
      #a;
      #i;
      #n;
      #o;
      #u;
      #l;
      constructor(e) {
        super(), this.#l = !1, this.#u = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#n = e.client, this.#i = this.#n.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#s = u(this.options), this.state = e.state ?? this.#s, this.scheduleGc()
      }
      get meta() {
        return this.options.meta
      }
      get promise() {
        return this.#o?.promise
      }
      setOptions(e) {
        if (this.options = {
            ...this.#u,
            ...e
          }, this.updateGcTime(this.options.gcTime), this.state && void 0 === this.state.data) {
          let e = u(this.options);
          void 0 !== e.data && (this.setState(o(e.data, e.dataUpdatedAt)), this.#s = e)
        }
      }
      optionalRemove() {
        this.observers.length || "idle" !== this.state.fetchStatus || this.#i.remove(this)
      }
      setData(e, r) {
        let s = (0, t.replaceData)(this.state.data, e, this.options);
        return this.#c({
          data: s,
          type: "success",
          dataUpdatedAt: r?.updatedAt,
          manual: r?.manual
        }), s
      }
      setState(e, t) {
        this.#c({
          type: "setState",
          state: e,
          setStateOptions: t
        })
      }
      cancel(e) {
        let r = this.#o?.promise;
        return this.#o?.cancel(e), r ? r.then(t.noop).catch(t.noop) : Promise.resolve()
      }
      destroy() {
        super.destroy(), this.cancel({
          silent: !0
        })
      }
      reset() {
        this.destroy(), this.setState(this.#s)
      }
      isActive() {
        return this.observers.some(e => !1 !== (0, t.resolveEnabled)(e.options.enabled, this))
      }
      isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === t.skipToken || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
      }
      isStatic() {
        return this.getObserversCount() > 0 && this.observers.some(e => "static" === (0, t.resolveStaleTime)(e.options.staleTime, this))
      }
      isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : void 0 === this.state.data || this.state.isInvalidated
      }
      isStaleByTime(e = 0) {
        return void 0 === this.state.data || "static" !== e && (!!this.state.isInvalidated || !(0, t.timeUntilStale)(this.state.dataUpdatedAt, e))
      }
      onFocus() {
        let e = this.observers.find(e => e.shouldFetchOnWindowFocus());
        e?.refetch({
          cancelRefetch: !1
        }), this.#o?.continue()
      }
      onOnline() {
        let e = this.observers.find(e => e.shouldFetchOnReconnect());
        e?.refetch({
          cancelRefetch: !1
        }), this.#o?.continue()
      }
      addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#i.notify({
          type: "observerAdded",
          query: this,
          observer: e
        }))
      }
      removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.#o && (this.#l ? this.#o.cancel({
          revert: !0
        }) : this.#o.cancelRetry()), this.scheduleGc()), this.#i.notify({
          type: "observerRemoved",
          query: this,
          observer: e
        }))
      }
      getObserversCount() {
        return this.observers.length
      }
      invalidate() {
        this.state.isInvalidated || this.#c({
          type: "invalidate"
        })
      }
      async fetch(e, r) {
        let a;
        if ("idle" !== this.state.fetchStatus && this.#o?.status() !== "rejected") {
          if (void 0 !== this.state.data && r?.cancelRefetch) this.cancel({
            silent: !0
          });
          else if (this.#o) return this.#o.continueRetry(), this.#o.promise
        }
        if (e && this.setOptions(e), !this.options.queryFn) {
          let e = this.observers.find(e => e.options.queryFn);
          e && this.setOptions(e.options)
        }
        let i = new AbortController,
          n = e => {
            Object.defineProperty(e, "signal", {
              enumerable: !0,
              get: () => (this.#l = !0, i.signal)
            })
          },
          o = () => {
            let e, s = (0, t.ensureQueryFn)(this.options, r),
              a = (n(e = {
                client: this.#n,
                queryKey: this.queryKey,
                meta: this.meta
              }), e);
            return (this.#l = !1, this.options.persister) ? this.options.persister(s, a, this) : s(a)
          },
          u = (n(a = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#n,
            state: this.state,
            fetchFn: o
          }), a);
        this.options.behavior?.onFetch(u, this), this.#a = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== u.fetchOptions?.meta) && this.#c({
          type: "fetch",
          meta: u.fetchOptions?.meta
        }), this.#o = (0, s.createRetryer)({
          initialPromise: r?.initialPromise,
          fn: u.fetchFn,
          onCancel: e => {
            e instanceof s.CancelledError && e.revert && this.setState({
              ...this.#a,
              fetchStatus: "idle"
            }), i.abort()
          },
          onFail: (e, t) => {
            this.#c({
              type: "failed",
              failureCount: e,
              error: t
            })
          },
          onPause: () => {
            this.#c({
              type: "pause"
            })
          },
          onContinue: () => {
            this.#c({
              type: "continue"
            })
          },
          retry: u.options.retry,
          retryDelay: u.options.retryDelay,
          networkMode: u.options.networkMode,
          canRun: () => !0
        });
        try {
          let e = await this.#o.start();
          if (void 0 === e) throw Error(`${this.queryHash} data is undefined`);
          return this.setData(e), this.#i.config.onSuccess?.(e, this), this.#i.config.onSettled?.(e, this.state.error, this), e
        } catch (e) {
          if (e instanceof s.CancelledError) {
            if (e.silent) return this.#o.promise;
            else if (e.revert) {
              if (void 0 === this.state.data) throw e;
              return this.state.data
            }
          }
          throw this.#c({
            type: "error",
            error: e
          }), this.#i.config.onError?.(e, this), this.#i.config.onSettled?.(this.state.data, e, this), e
        } finally {
          this.scheduleGc()
        }
      }
      #c(e) {
        let t = t => {
          switch (e.type) {
            case "failed":
              return {
                ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error
              };
            case "pause":
              return {
                ...t, fetchStatus: "paused"
              };
            case "continue":
              return {
                ...t, fetchStatus: "fetching"
              };
            case "fetch":
              return {
                ...t, ...n(t.data, this.options), fetchMeta: e.meta ?? null
              };
            case "success":
              let r = {
                ...t,
                ...o(e.data, e.dataUpdatedAt),
                dataUpdateCount: t.dataUpdateCount + 1,
                ...!e.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null
                }
              };
              return this.#a = e.manual ? r : void 0, r;
            case "error":
              let s = e.error;
              return {
                ...t, error: s, errorUpdateCount: t.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: t.fetchFailureCount + 1, fetchFailureReason: s, fetchStatus: "idle", status: "error", isInvalidated: !0
              };
            case "invalidate":
              return {
                ...t, isInvalidated: !0
              };
            case "setState":
              return {
                ...t, ...e.state
              }
          }
        };
        this.state = t(this.state), r.notifyManager.batch(() => {
          this.observers.forEach(e => {
            e.onQueryUpdate()
          }), this.#i.notify({
            query: this,
            type: "updated",
            action: e
          })
        })
      }
    };

  function n(e, t) {
    return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: (0, s.canFetch)(t.networkMode) ? "fetching" : "paused",
      ...void 0 === e && {
        error: null,
        status: "pending"
      }
    }
  }

  function o(e, t) {
    return {
      data: e,
      dataUpdatedAt: t ?? Date.now(),
      error: null,
      isInvalidated: !1,
      status: "success"
    }
  }

  function u(e) {
    let t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
      r = void 0 !== t,
      s = r ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
      data: t,
      dataUpdateCount: 0,
      dataUpdatedAt: r ? s ?? Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: !1,
      status: r ? "success" : "pending",
      fetchStatus: "idle"
    }
  }
  e.s(["Query", 0, i, "fetchState", 0, n])
}, 414822, e => {
  "use strict";
  var t = e.i(82679),
    r = e.i(259864),
    s = e.i(959243),
    a = e.i(578889),
    i = e.i(757142),
    n = e.i(766271),
    o = e.i(305763),
    u = class extends a.Subscribable {
      constructor(e, t) {
        super(), this.options = t, this.#n = e, this.#h = null, this.#d = (0, i.pendingThenable)(), this.bindMethods(), this.setOptions(t)
      }
      #n;
      #p = void 0;
      #f = void 0;
      #y = void 0;
      #m;
      #v;
      #d;
      #h;
      #b;
      #w;
      #g;
      #R;
      #S;
      #T;
      #O = new Set;
      bindMethods() {
        this.refetch = this.refetch.bind(this)
      }
      onSubscribe() {
        1 === this.listeners.size && (this.#p.addObserver(this), l(this.#p, this.options) ? this.#E() : this.updateResult(), this.#G())
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy()
      }
      shouldFetchOnReconnect() {
        return c(this.#p, this.options, this.options.refetchOnReconnect)
      }
      shouldFetchOnWindowFocus() {
        return c(this.#p, this.options, this.options.refetchOnWindowFocus)
      }
      destroy() {
        this.listeners = new Set, this.#C(), this.#I(), this.#p.removeObserver(this)
      }
      setOptions(e) {
        let t = this.options,
          r = this.#p;
        if (this.options = this.#n.defaultQueryOptions(e), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled && "function" != typeof this.options.enabled && "boolean" != typeof(0, n.resolveEnabled)(this.options.enabled, this.#p)) throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
        this.#Q(), this.#p.setOptions(this.options), t._defaulted && !(0, n.shallowEqualObjects)(this.options, t) && this.#n.getQueryCache().notify({
          type: "observerOptionsUpdated",
          query: this.#p,
          observer: this
        });
        let s = this.hasListeners();
        s && h(this.#p, r, this.options, t) && this.#E(), this.updateResult(), s && (this.#p !== r || (0, n.resolveEnabled)(this.options.enabled, this.#p) !== (0, n.resolveEnabled)(t.enabled, this.#p) || (0, n.resolveStaleTime)(this.options.staleTime, this.#p) !== (0, n.resolveStaleTime)(t.staleTime, this.#p)) && this.#F();
        let a = this.#H();
        s && (this.#p !== r || (0, n.resolveEnabled)(this.options.enabled, this.#p) !== (0, n.resolveEnabled)(t.enabled, this.#p) || a !== this.#T) && this.#P(a)
      }
      getOptimisticResult(e) {
        var t, r;
        let s = this.#n.getQueryCache().build(this.#n, e),
          a = this.createResult(s, e);
        return t = this, r = a, (0, n.shallowEqualObjects)(t.getCurrentResult(), r) || (this.#y = a, this.#v = this.options, this.#m = this.#p.state), a
      }
      getCurrentResult() {
        return this.#y
      }
      trackResult(e, t) {
        return new Proxy(e, {
          get: (e, r) => (this.trackProp(r), t?.(r), "promise" === r && (this.trackProp("data"), this.options.experimental_prefetchInRender || "pending" !== this.#d.status || this.#d.reject(Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(e, r))
        })
      }
      trackProp(e) {
        this.#O.add(e)
      }
      getCurrentQuery() {
        return this.#p
      }
      refetch({
        ...e
      } = {}) {
        return this.fetch({
          ...e
        })
      }
      fetchOptimistic(e) {
        let t = this.#n.defaultQueryOptions(e),
          r = this.#n.getQueryCache().build(this.#n, t);
        return r.fetch().then(() => this.createResult(r, t))
      }
      fetch(e) {
        return this.#E({
          ...e,
          cancelRefetch: e.cancelRefetch ?? !0
        }).then(() => (this.updateResult(), this.#y))
      }
      #E(e) {
        this.#Q();
        let t = this.#p.fetch(this.options, e);
        return e?.throwOnError || (t = t.catch(n.noop)), t
      }
      #F() {
        this.#C();
        let e = (0, n.resolveStaleTime)(this.options.staleTime, this.#p);
        if (n.isServer || this.#y.isStale || !(0, n.isValidTimeout)(e)) return;
        let t = (0, n.timeUntilStale)(this.#y.dataUpdatedAt, e);
        this.#R = o.timeoutManager.setTimeout(() => {
          this.#y.isStale || this.updateResult()
        }, t + 1)
      }
      #H() {
        return ("function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.#p) : this.options.refetchInterval) ?? !1
      }
      #P(e) {
        this.#I(), this.#T = e, !n.isServer && !1 !== (0, n.resolveEnabled)(this.options.enabled, this.#p) && (0, n.isValidTimeout)(this.#T) && 0 !== this.#T && (this.#S = o.timeoutManager.setInterval(() => {
          (this.options.refetchIntervalInBackground || t.focusManager.isFocused()) && this.#E()
        }, this.#T))
      }
      #G() {
        this.#F(), this.#P(this.#H())
      }
      #C() {
        this.#R && (o.timeoutManager.clearTimeout(this.#R), this.#R = void 0)
      }
      #I() {
        this.#S && (o.timeoutManager.clearInterval(this.#S), this.#S = void 0)
      }
      createResult(e, t) {
        let r, a = this.#p,
          o = this.options,
          u = this.#y,
          c = this.#m,
          p = this.#v,
          f = e !== a ? e.state : this.#f,
          {
            state: y
          } = e,
          m = {
            ...y
          },
          v = !1;
        if (t._optimisticResults) {
          let r = this.hasListeners(),
            i = !r && l(e, t),
            n = r && h(e, a, t, o);
          (i || n) && (m = {
            ...m,
            ...(0, s.fetchState)(y.data, e.options)
          }), "isRestoring" === t._optimisticResults && (m.fetchStatus = "idle")
        }
        let {
          error: b,
          errorUpdatedAt: w,
          status: g
        } = m;
        r = m.data;
        let R = !1;
        if (void 0 !== t.placeholderData && void 0 === r && "pending" === g) {
          let e;
          u?.isPlaceholderData && t.placeholderData === p?.placeholderData ? (e = u.data, R = !0) : e = "function" == typeof t.placeholderData ? t.placeholderData(this.#g?.state.data, this.#g) : t.placeholderData, void 0 !== e && (g = "success", r = (0, n.replaceData)(u?.data, e, t), v = !0)
        }
        if (t.select && void 0 !== r && !R)
          if (u && r === c?.data && t.select === this.#b) r = this.#w;
          else try {
            this.#b = t.select, r = t.select(r), r = (0, n.replaceData)(u?.data, r, t), this.#w = r, this.#h = null
          } catch (e) {
            this.#h = e
          }
        this.#h && (b = this.#h, r = this.#w, w = Date.now(), g = "error");
        let S = "fetching" === m.fetchStatus,
          T = "pending" === g,
          O = "error" === g,
          E = T && S,
          G = void 0 !== r,
          C = {
            status: g,
            fetchStatus: m.fetchStatus,
            isPending: T,
            isSuccess: "success" === g,
            isError: O,
            isInitialLoading: E,
            isLoading: E,
            data: r,
            dataUpdatedAt: m.dataUpdatedAt,
            error: b,
            errorUpdatedAt: w,
            failureCount: m.fetchFailureCount,
            failureReason: m.fetchFailureReason,
            errorUpdateCount: m.errorUpdateCount,
            isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
            isFetchedAfterMount: m.dataUpdateCount > f.dataUpdateCount || m.errorUpdateCount > f.errorUpdateCount,
            isFetching: S,
            isRefetching: S && !T,
            isLoadingError: O && !G,
            isPaused: "paused" === m.fetchStatus,
            isPlaceholderData: v,
            isRefetchError: O && G,
            isStale: d(e, t),
            refetch: this.refetch,
            promise: this.#d,
            isEnabled: !1 !== (0, n.resolveEnabled)(t.enabled, e)
          };
        if (this.options.experimental_prefetchInRender) {
          let t = void 0 !== C.data,
            r = "error" === C.status && !t,
            s = e => {
              r ? e.reject(C.error) : t && e.resolve(C.data)
            },
            n = () => {
              s(this.#d = C.promise = (0, i.pendingThenable)())
            },
            o = this.#d;
          switch (o.status) {
            case "pending":
              e.queryHash === a.queryHash && s(o);
              break;
            case "fulfilled":
              (r || C.data !== o.value) && n();
              break;
            case "rejected":
              r && C.error === o.reason || n()
          }
        }
        return C
      }
      updateResult() {
        let e = this.#y,
          t = this.createResult(this.#p, this.options);
        if (this.#m = this.#p.state, this.#v = this.options, void 0 !== this.#m.data && (this.#g = this.#p), (0, n.shallowEqualObjects)(t, e)) return;
        this.#y = t;
        let r = () => {
          if (!e) return !0;
          let {
            notifyOnChangeProps: t
          } = this.options, r = "function" == typeof t ? t() : t;
          if ("all" === r || !r && !this.#O.size) return !0;
          let s = new Set(r ?? this.#O);
          return this.options.throwOnError && s.add("error"), Object.keys(this.#y).some(t => this.#y[t] !== e[t] && s.has(t))
        };
        this.#x({
          listeners: r()
        })
      }
      #Q() {
        let e = this.#n.getQueryCache().build(this.#n, this.options);
        if (e === this.#p) return;
        let t = this.#p;
        this.#p = e, this.#f = e.state, this.hasListeners() && (t?.removeObserver(this), e.addObserver(this))
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && this.#G()
      }
      #x(e) {
        r.notifyManager.batch(() => {
          e.listeners && this.listeners.forEach(e => {
            e(this.#y)
          }), this.#n.getQueryCache().notify({
            query: this.#p,
            type: "observerResultsUpdated"
          })
        })
      }
    };

  function l(e, t) {
    return !1 !== (0, n.resolveEnabled)(t.enabled, e) && void 0 === e.state.data && ("error" !== e.state.status || !1 !== t.retryOnMount) || void 0 !== e.state.data && c(e, t, t.refetchOnMount)
  }

  function c(e, t, r) {
    if (!1 !== (0, n.resolveEnabled)(t.enabled, e) && "static" !== (0, n.resolveStaleTime)(t.staleTime, e)) {
      let s = "function" == typeof r ? r(e) : r;
      return "always" === s || !1 !== s && d(e, t)
    }
    return !1
  }

  function h(e, t, r, s) {
    return (e !== t || !1 === (0, n.resolveEnabled)(s.enabled, e)) && (!r.suspense || "error" !== e.state.status) && d(e, r)
  }

  function d(e, t) {
    return !1 !== (0, n.resolveEnabled)(t.enabled, e) && e.isStaleByTime((0, n.resolveStaleTime)(t.staleTime, e))
  }
  e.s(["QueryObserver", 0, u])
}, 539392, e => {
  "use strict";
  var t = e.i(305763),
    r = e.i(766271),
    s = class {
      #A;
      destroy() {
        this.clearGcTimeout()
      }
      scheduleGc() {
        this.clearGcTimeout(), (0, r.isValidTimeout)(this.gcTime) && (this.#A = t.timeoutManager.setTimeout(() => {
          this.optionalRemove()
        }, this.gcTime))
      }
      updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (r.isServer ? 1 / 0 : 3e5))
      }
      clearGcTimeout() {
        this.#A && (t.timeoutManager.clearTimeout(this.#A), this.#A = void 0)
      }
    };
  e.s(["Removable", 0, s])
}, 313805, 60045, 757142, e => {
  "use strict";
  var t = e.i(82679),
    r = e.i(578889),
    s = e.i(766271),
    a = new class extends r.Subscribable {
      #M = !0;
      #t;
      #r;
      constructor() {
        super(), this.#r = e => {
          if (!s.isServer && window.addEventListener) {
            let t = () => e(!0),
              r = () => e(!1);
            return window.addEventListener("online", t, !1), window.addEventListener("offline", r, !1), () => {
              window.removeEventListener("online", t), window.removeEventListener("offline", r)
            }
          }
        }
      }
      onSubscribe() {
        this.#t || this.setEventListener(this.#r)
      }
      onUnsubscribe() {
        this.hasListeners() || (this.#t?.(), this.#t = void 0)
      }
      setEventListener(e) {
        this.#r = e, this.#t?.(), this.#t = e(this.setOnline.bind(this))
      }
      setOnline(e) {
        this.#M !== e && (this.#M = e, this.listeners.forEach(t => {
          t(e)
        }))
      }
      isOnline() {
        return this.#M
      }
    };

  function i() {
    let e, t, r = new Promise((r, s) => {
      e = r, t = s
    });

    function s(e) {
      Object.assign(r, e), delete r.resolve, delete r.reject
    }
    return r.status = "pending", r.catch(() => {}), r.resolve = t => {
      s({
        status: "fulfilled",
        value: t
      }), e(t)
    }, r.reject = e => {
      s({
        status: "rejected",
        reason: e
      }), t(e)
    }, r
  }

  function n(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
  }

  function o(e) {
    return (e ?? "online") !== "online" || a.isOnline()
  }
  e.s(["onlineManager", 0, a], 60045), e.s(["pendingThenable", 0, i], 757142);
  var u = class extends Error {
    constructor(e) {
      super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent
    }
  };
  e.s(["CancelledError", 0, u, "canFetch", 0, o, "createRetryer", 0, function(e) {
    let r, l = !1,
      c = 0,
      h = i(),
      d = () => t.focusManager.isFocused() && ("always" === e.networkMode || a.isOnline()) && e.canRun(),
      p = () => o(e.networkMode) && e.canRun(),
      f = e => {
        "pending" === h.status && (r?.(), h.resolve(e))
      },
      y = e => {
        "pending" === h.status && (r?.(), h.reject(e))
      },
      m = () => new Promise(t => {
        r = e => {
          ("pending" !== h.status || d()) && t(e)
        }, e.onPause?.()
      }).then(() => {
        r = void 0, "pending" === h.status && e.onContinue?.()
      }),
      v = () => {
        let t;
        if ("pending" !== h.status) return;
        let r = 0 === c ? e.initialPromise : void 0;
        try {
          t = r ?? e.fn()
        } catch (e) {
          t = Promise.reject(e)
        }
        Promise.resolve(t).then(f).catch(t => {
          if ("pending" !== h.status) return;
          let r = e.retry ?? 3 * !s.isServer,
            a = e.retryDelay ?? n,
            i = "function" == typeof a ? a(c, t) : a,
            o = !0 === r || "number" == typeof r && c < r || "function" == typeof r && r(c, t);
          l || !o ? y(t) : (c++, e.onFail?.(c, t), (0, s.sleep)(i).then(() => d() ? void 0 : m()).then(() => {
            l ? y(t) : v()
          }))
        })
      };
    return {
      promise: h,
      status: () => h.status,
      cancel: t => {
        if ("pending" === h.status) {
          let r = new u(t);
          y(r), e.onCancel?.(r)
        }
      },
      continue: () => (r?.(), h),
      cancelRetry: () => {
        l = !0
      },
      continueRetry: () => {
        l = !1
      },
      canStart: p,
      start: () => (p() ? v() : m().then(v), h)
    }
  }, "isCancelledError", 0, function(e) {
    return e instanceof u
  }], 313805)
}, 766271, 305763, e => {
  "use strict";
  var t = {
      setTimeout: (e, t) => setTimeout(e, t),
      clearTimeout: e => clearTimeout(e),
      setInterval: (e, t) => setInterval(e, t),
      clearInterval: e => clearInterval(e)
    },
    r = new class {
      #k = t;
      #U = !1;
      setTimeoutProvider(e) {
        this.#k = e
      }
      setTimeout(e, t) {
        return this.#k.setTimeout(e, t)
      }
      clearTimeout(e) {
        this.#k.clearTimeout(e)
      }
      setInterval(e, t) {
        return this.#k.setInterval(e, t)
      }
      clearInterval(e) {
        this.#k.clearInterval(e)
      }
    };
  e.s(["systemSetTimeoutZero", 0, function(e) {
    setTimeout(e, 0)
  }, "timeoutManager", 0, r], 305763);
  var s = "u" < typeof window || "Deno" in globalThis;

  function a(e, t) {
    return (t?.queryKeyHashFn || i)(e)
  }

  function i(e) {
    return JSON.stringify(e, (e, t) => c(t) ? Object.keys(t).sort().reduce((e, r) => (e[r] = t[r], e), {}) : t)
  }

  function n(e, t) {
    return e === t || typeof e == typeof t && !!e && !!t && "object" == typeof e && "object" == typeof t && Object.keys(t).every(r => n(e[r], t[r]))
  }
  var o = Object.prototype.hasOwnProperty;

  function u(e, t, r = 0) {
    if (e === t) return e;
    if (r > 500) return t;
    let s = l(e) && l(t);
    if (!s && !(c(e) && c(t))) return t;
    let a = (s ? e : Object.keys(e)).length,
      i = s ? t : Object.keys(t),
      n = i.length,
      h = s ? Array(n) : {},
      d = 0;
    for (let l = 0; l < n; l++) {
      let n = s ? l : i[l],
        c = e[n],
        p = t[n];
      if (c === p) {
        h[n] = c, (s ? l < a : o.call(e, n)) && d++;
        continue
      }
      if (null === c || null === p || "object" != typeof c || "object" != typeof p) {
        h[n] = p;
        continue
      }
      let f = u(c, p, r + 1);
      h[n] = f, f === c && d++
    }
    return a === n && d === a ? e : h
  }

  function l(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
  }

  function c(e) {
    if (!h(e)) return !1;
    let t = e.constructor;
    if (void 0 === t) return !0;
    let r = t.prototype;
    return !!h(r) && !!r.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(e) === Object.prototype
  }

  function h(e) {
    return "[object Object]" === Object.prototype.toString.call(e)
  }
  var d = Symbol();
  e.s(["addConsumeAwareSignal", 0, function(e, t, r) {
    let s, a = !1;
    return Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (s ??= t(), a || (a = !0, s.aborted ? r() : s.addEventListener("abort", r, {
        once: !0
      })), s)
    }), e
  }, "addToEnd", 0, function(e, t, r = 0) {
    let s = [...e, t];
    return r && s.length > r ? s.slice(1) : s
  }, "addToStart", 0, function(e, t, r = 0) {
    let s = [t, ...e];
    return r && s.length > r ? s.slice(0, -1) : s
  }, "ensureQueryFn", 0, function(e, t) {
    return !e.queryFn && t?.initialPromise ? () => t.initialPromise : e.queryFn && e.queryFn !== d ? e.queryFn : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
  }, "functionalUpdate", 0, function(e, t) {
    return "function" == typeof e ? e(t) : e
  }, "hashKey", 0, i, "hashQueryKeyByOptions", 0, a, "isServer", 0, s, "isValidTimeout", 0, function(e) {
    return "number" == typeof e && e >= 0 && e !== 1 / 0
  }, "keepPreviousData", 0, function(e) {
    return e
  }, "matchMutation", 0, function(e, t) {
    let {
      exact: r,
      status: s,
      predicate: a,
      mutationKey: o
    } = e;
    if (o) {
      if (!t.options.mutationKey) return !1;
      if (r) {
        if (i(t.options.mutationKey) !== i(o)) return !1
      } else if (!n(t.options.mutationKey, o)) return !1
    }
    return (!s || t.state.status === s) && (!a || !!a(t))
  }, "matchQuery", 0, function(e, t) {
    let {
      type: r = "all",
      exact: s,
      fetchStatus: i,
      predicate: o,
      queryKey: u,
      stale: l
    } = e;
    if (u) {
      if (s) {
        if (t.queryHash !== a(u, t.options)) return !1
      } else if (!n(t.queryKey, u)) return !1
    }
    if ("all" !== r) {
      let e = t.isActive();
      if ("active" === r && !e || "inactive" === r && e) return !1
    }
    return ("boolean" != typeof l || t.isStale() === l) && (!i || i === t.state.fetchStatus) && (!o || !!o(t))
  }, "noop", 0, function() {}, "partialMatchKey", 0, n, "replaceData", 0, function(e, t, r) {
    return "function" == typeof r.structuralSharing ? r.structuralSharing(e, t) : !1 !== r.structuralSharing ? u(e, t) : t
  }, "replaceEqualDeep", 0, u, "resolveEnabled", 0, function(e, t) {
    return "function" == typeof e ? e(t) : e
  }, "resolveStaleTime", 0, function(e, t) {
    return "function" == typeof e ? e(t) : e
  }, "shallowEqualObjects", 0, function(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
    for (let r in e)
      if (e[r] !== t[r]) return !1;
    return !0
  }, "shouldThrowError", 0, function(e, t) {
    return "function" == typeof e ? e(...t) : !!e
  }, "skipToken", 0, d, "sleep", 0, function(e) {
    return new Promise(t => {
      r.setTimeout(t, e)
    })
  }, "timeUntilStale", 0, function(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
  }], 766271)
}, 971862, e => {
  "use strict";
  var t = e.i(519172),
    r = t.createContext(!1);
  r.Provider, e.s(["useIsRestoring", 0, () => t.useContext(r)])
}, 393202, e => {
  "use strict";
  var t = e.i(519172),
    r = e.i(984416),
    s = t.createContext(void 0);
  e.s(["QueryClientProvider", 0, ({
    client: e,
    children: a
  }) => (t.useEffect(() => (e.mount(), () => {
    e.unmount()
  }), [e]), (0, r.jsx)(s.Provider, {
    value: e,
    children: a
  })), "useQueryClient", 0, e => {
    let r = t.useContext(s);
    if (e) return e;
    if (!r) throw Error("No QueryClient set, use QueryClientProvider to set one");
    return r
  }])
}, 800508, e => {
  "use strict";
  var t = e.i(519172),
    r = e.i(766271);
  e.s(["ensurePreventErrorBoundaryRetry", 0, (e, t, s) => {
    let a = s?.state.error && "function" == typeof e.throwOnError ? (0, r.shouldThrowError)(e.throwOnError, [s.state.error, s]) : e.throwOnError;
    (e.suspense || e.experimental_prefetchInRender || a) && !t.isReset() && (e.retryOnMount = !1)
  }, "getHasError", 0, ({
    result: e,
    errorResetBoundary: t,
    throwOnError: s,
    query: a,
    suspense: i
  }) => e.isError && !t.isReset() && !e.isFetching && a && (i && void 0 === e.data || (0, r.shouldThrowError)(s, [e.error, a])), "useClearResetErrorBoundary", 0, e => {
    t.useEffect(() => {
      e.clearReset()
    }, [e])
  }])
}, 849329, 436795, 768380, e => {
  "use strict";
  var t = e.i(414822),
    r = e.i(519172),
    s = e.i(766271),
    a = e.i(259864),
    i = e.i(393202),
    n = e.i(635470),
    o = e.i(800508),
    u = e.i(971862),
    l = e => {
      if (e.suspense) {
        let t = e => "static" === e ? e : Math.max(e ?? 1e3, 1e3),
          r = e.staleTime;
        e.staleTime = "function" == typeof r ? (...e) => t(r(...e)) : t(r), "number" == typeof e.gcTime && (e.gcTime = Math.max(e.gcTime, 1e3))
      }
    },
    c = (e, t) => e.isLoading && e.isFetching && !t,
    h = (e, t) => e?.suspense && t.isPending,
    d = (e, t, r) => t.fetchOptimistic(e).catch(() => {
      r.clearReset()
    });

  function p(e, t, p) {
    let f = (0, u.useIsRestoring)(),
      y = (0, n.useQueryErrorResetBoundary)(),
      m = (0, i.useQueryClient)(p),
      v = m.defaultQueryOptions(e);
    m.getDefaultOptions().queries?._experimental_beforeQuery?.(v);
    let b = m.getQueryCache().get(v.queryHash);
    v._optimisticResults = f ? "isRestoring" : "optimistic", l(v), (0, o.ensurePreventErrorBoundaryRetry)(v, y, b), (0, o.useClearResetErrorBoundary)(y);
    let w = !m.getQueryCache().get(v.queryHash),
      [g] = r.useState(() => new t(m, v)),
      R = g.getOptimisticResult(v),
      S = !f && !1 !== e.subscribed;
    if (r.useSyncExternalStore(r.useCallback(e => {
        let t = S ? g.subscribe(a.notifyManager.batchCalls(e)) : s.noop;
        return g.updateResult(), t
      }, [g, S]), () => g.getCurrentResult(), () => g.getCurrentResult()), r.useEffect(() => {
        g.setOptions(v)
      }, [v, g]), h(v, R)) throw d(v, g, y);
    if ((0, o.getHasError)({
        result: R,
        errorResetBoundary: y,
        throwOnError: v.throwOnError,
        query: b,
        suspense: v.suspense
      })) throw R.error;
    if (m.getDefaultOptions().queries?._experimental_afterQuery?.(v, R), v.experimental_prefetchInRender && !s.isServer && c(R, f)) {
      let e = w ? d(v, g, y) : b?.promise;
      e?.catch(s.noop).finally(() => {
        g.updateResult()
      })
    }
    return v.notifyOnChangeProps ? R : g.trackResult(R)
  }
  e.s(["defaultThrowOnError", 0, (e, t) => void 0 === t.state.data, "ensureSuspenseTimers", 0, l, "fetchOptimistic", 0, d, "shouldSuspend", 0, h, "willFetch", 0, c], 436795), e.s(["useBaseQuery", 0, p], 768380), e.s(["useQuery", 0, function(e, r) {
    return p(e, t.QueryObserver, r)
  }], 849329)
}]);

//# debugId=e7aeff4c-5c7f-8f8e-3216-60337ee51364
//# sourceMappingURL=0_4x-310hzt5i.js.map