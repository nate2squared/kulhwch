
		/**
		 * @license almond 0.3.0 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
		 * Available via the MIT or new BSD license.
		 * see: http://github.com/jrburke/almond for details
		 */

		/*!
		 * jQuery JavaScript Library v2.1.1
		 * http://jquery.com/
		 *
		 * Includes Sizzle.js
		 * http://sizzlejs.com/
		 *
		 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
		 * Released under the MIT license
		 * http://jquery.org/license
		 *
		 * Date: 2014-05-01T17:11Z
		 */

		/*!
		 * Sizzle CSS Selector Engine v1.10.19
		 * http://sizzlejs.com/
		 *
		 * Copyright 2013 jQuery Foundation, Inc. and other contributors
		 * Released under the MIT license
		 * http://jquery.org/license
		 *
		 * Date: 2014-04-18
		 */

		/*!
		 * https://github.com/paulmillr/es6-shim
		 * @license es6-shim Copyright 2013-2014 by Paul Miller (http://paulmillr.com)
		 *   and contributors,  MIT License
		 * es6-shim: v0.22.1
		 * see https://github.com/paulmillr/es6-shim/blob/0.22.1/LICENSE
		 * Details and documentation:
		 * https://github.com/paulmillr/es6-shim/
		 */

		 // with permission and license, per https://twitter.com/inexorabletash/status/372206509540659200

		(function () {
			var requirejs, require, define;
			(function (e) {
				function h(e, t) {
					return f.call(e, t)
				}

				function p(e, t) {
					var n, r, i, s, o, a, f, l, h, p, d, v = t && t.split("/"),
						m = u.map,
						g = m && m["*"] || {};
					if (e && e.charAt(0) === ".")
						if (t) {
							v = v.slice(0, v.length - 1), e = e.split("/"), o = e.length - 1, u.nodeIdCompat && c.test(e[o]) && (e[o] = e[o].replace(c, "")), e = v.concat(e);
							for (h = 0; h < e.length; h += 1) {
								d = e[h];
								if (d === ".") e.splice(h, 1), h -= 1;
								else if (d === "..") {
									if (h === 1 && (e[2] === ".." || e[0] === "..")) break;
									h > 0 && (e.splice(h - 1, 2), h -= 2)
								}
							}
							e = e.join("/")
						} else e.indexOf("./") === 0 && (e = e.substring(2));
					if ((v || g) && m) {
						n = e.split("/");
						for (h = n.length; h > 0; h -= 1) {
							r = n.slice(0, h).join("/");
							if (v)
								for (p = v.length; p > 0; p -= 1) {
									i = m[v.slice(0, p).join("/")];
									if (i) {
										i = i[r];
										if (i) {
											s = i, a = h;
											break
										}
									}
								}
							if (s) break;
							!f && g && g[r] && (f = g[r], l = h)
						}!s && f && (s = f, a = l), s && (n.splice(0, a, s), e = n.join("/"))
					}
					return e
				}

				function d(t, r) {
					return function () {
						var i = l.call(arguments, 0);
						return typeof i[0] != "string" && i.length === 1 && i.push(null), n.apply(e, i.concat([t, r]))
					}
				}

				function v(e) {
					return function (t) {
						return p(t, e)
					}
				}

				function m(e) {
					return function (t) {
						s[e] = t
					}
				}

				function g(n) {
					if (h(o, n)) {
						var r = o[n];
						delete o[n], a[n] = !0, t.apply(e, r)
					}
					if (!h(s, n) && !h(a, n)) throw new Error("No " + n);
					return s[n]
				}

				function y(e) {
					var t, n = e ? e.indexOf("!") : -1;
					return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
				}

				function b(e) {
					return function () {
						return u && u.config && u.config[e] || {}
					}
				}
				var t, n, r, i, s = {},
					o = {},
					u = {},
					a = {},
					f = Object.prototype.hasOwnProperty,
					l = [].slice,
					c = /\.js$/;
				r = function (e, t) {
					var n, r = y(e),
						i = r[0];
					return e = r[1], i && (i = p(i, t), n = g(i)), i ? n && n.normalize ? e = n.normalize(e, v(t)) : e = p(e, t) : (e = p(e, t), r = y(e), i = r[0], e = r[1], i && (n = g(i))), {
						f: i ? i + "!" + e : e,
						n: e,
						pr: i,
						p: n
					}
				}, i = {
					require: function (e) {
						return d(e)
					},
					exports: function (e) {
						var t = s[e];
						return typeof t != "undefined" ? t : s[e] = {}
					},
					module: function (e) {
						return {
							id: e,
							uri: "",
							exports: s[e],
							config: b(e)
						}
					}
				}, t = function (t, n, u, f) {
					var l, c, p, v, y, b = [],
						w = typeof u,
						E;
					f = f || t;
					if (w === "undefined" || w === "function") {
						n = !n.length && u.length ? ["require", "exports", "module"] : n;
						for (y = 0; y < n.length; y += 1) {
							v = r(n[y], f), c = v.f;
							if (c === "require") b[y] = i.require(t);
							else if (c === "exports") b[y] = i.exports(t), E = !0;
							else if (c === "module") l = b[y] = i.module(t);
							else if (h(s, c) || h(o, c) || h(a, c)) b[y] = g(c);
							else {
								if (!v.p) throw new Error(t + " missing " + c);
								v.p.load(v.n, d(f, !0), m(c), {}), b[y] = s[c]
							}
						}
						p = u ? u.apply(s[t], b) : undefined;
						if (t)
							if (l && l.exports !== e && l.exports !== s[t]) s[t] = l.exports;
							else if (p !== e || !E) s[t] = p
					} else t && (s[t] = u)
				}, requirejs = require = n = function (s, o, a, f, l) {
					if (typeof s == "string") return i[s] ? i[s](o) : g(r(s, o).f);
					if (!s.splice) {
						u = s, u.deps && n(u.deps, u.callback);
						if (!o) return;
						o.splice ? (s = o, o = a, a = null) : s = e
					}
					return o = o || function () {}, typeof a == "function" && (a = f, f = l), f ? t(e, s, o, a) : setTimeout(function () {
						t(e, s, o, a)
					}, 4), n
				}, n.config = function (e) {
					return n(e)
				}, requirejs._defined = s, define = function (e, t, n) {
					t.splice || (n = t, t = []), !h(s, e) && !h(o, e) && (o[e] = [e, t, n])
				}, define.amd = {
					jQuery: !0
				}
			})(), define("almond", function () {}),
			function (e, t) {
				typeof module == "object" && typeof module.exports == "object" ? module.exports = e.document ? t(e, !0) : function (e) {
					if (!e.document) throw new Error("jQuery requires a window with a document");
					return t(e)
				} : t(e)
			}(typeof window != "undefined" ? window : this, function (window, noGlobal) {
				function isArraylike(e) {
					var t = e.length,
						n = jQuery.type(e);
					return n === "function" || jQuery.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
				}

				function winnow(e, t, n) {
					if (jQuery.isFunction(t)) return jQuery.grep(e, function (e, r) {
						return !!t.call(e, r, e) !== n
					});
					if (t.nodeType) return jQuery.grep(e, function (e) {
						return e === t !== n
					});
					if (typeof t == "string") {
						if (risSimple.test(t)) return jQuery.filter(t, e, n);
						t = jQuery.filter(t, e)
					}
					return jQuery.grep(e, function (e) {
						return indexOf.call(t, e) >= 0 !== n
					})
				}

				function sibling(e, t) {
					while ((e = e[t]) && e.nodeType !== 1);
					return e
				}

				function createOptions(e) {
					var t = optionsCache[e] = {};
					return jQuery.each(e.match(rnotwhite) || [], function (e, n) {
						t[n] = !0
					}), t
				}

				function completed() {
					document.removeEventListener("DOMContentLoaded", completed, !1), window.removeEventListener("load", completed, !1), jQuery.ready()
				}

				function Data() {
					Object.defineProperty(this.cache = {}, 0, {
						get: function () {
							return {}
						}
					}), this.expando = jQuery.expando + Math.random()
				}

				function dataAttr(e, t, n) {
					var r;
					if (n === undefined && e.nodeType === 1) {
						r = "data-" + t.replace(rmultiDash, "-$1").toLowerCase(), n = e.getAttribute(r);
						if (typeof n == "string") {
							try {
								n = n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : +n + "" === n ? +n : rbrace.test(n) ? jQuery.parseJSON(n) : n
							} catch (i) {}
							data_user.set(e, t, n)
						} else n = undefined
					}
					return n
				}

				function returnTrue() {
					return !0
				}

				function returnFalse() {
					return !1
				}

				function safeActiveElement() {
					try {
						return document.activeElement
					} catch (e) {}
				}

				function manipulationTarget(e, t) {
					return jQuery.nodeName(e, "table") && jQuery.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
				}

				function disableScript(e) {
					return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e
				}

				function restoreScript(e) {
					var t = rscriptTypeMasked.exec(e.type);
					return t ? e.type = t[1] : e.removeAttribute("type"), e
				}

				function setGlobalEval(e, t) {
					var n = 0,
						r = e.length;
					for (; n < r; n++) data_priv.set(e[n], "globalEval", !t || data_priv.get(t[n], "globalEval"))
				}

				function cloneCopyEvent(e, t) {
					var n, r, i, s, o, u, a, f;
					if (t.nodeType !== 1) return;
					if (data_priv.hasData(e)) {
						s = data_priv.access(e), o = data_priv.set(t, s), f = s.events;
						if (f) {
							delete o.handle, o.events = {};
							for (i in f)
								for (n = 0, r = f[i].length; n < r; n++) jQuery.event.add(t, i, f[i][n])
						}
					}
					data_user.hasData(e) && (u = data_user.access(e), a = jQuery.extend({}, u), data_user.set(t, a))
				}

				function getAll(e, t) {
					var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
					return t === undefined || t && jQuery.nodeName(e, t) ? jQuery.merge([e], n) : n
				}

				function fixInput(e, t) {
					var n = t.nodeName.toLowerCase();
					if (n === "input" && rcheckableType.test(e.type)) t.checked = e.checked;
					else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
				}

				function actualDisplay(e, t) {
					var n, r = jQuery(t.createElement(e)).appendTo(t.body),
						i = window.getDefaultComputedStyle && (n = window.getDefaultComputedStyle(r[0])) ? n.display : jQuery.css(r[0], "display");
					return r.detach(), i
				}

				function defaultDisplay(e) {
					var t = document,
						n = elemdisplay[e];
					if (!n) {
						n = actualDisplay(e, t);
						if (n === "none" || !n) iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = iframe[0].contentDocument, t.write(), t.close(), n = actualDisplay(e, t), iframe.detach();
						elemdisplay[e] = n
					}
					return n
				}

				function curCSS(e, t, n) {
					var r, i, s, o, u = e.style;
					return n = n || getStyles(e), n && (o = n.getPropertyValue(t) || n[t]), n && (o === "" && !jQuery.contains(e.ownerDocument, e) && (o = jQuery.style(e, t)), rnumnonpx.test(o) && rmargin.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s)), o !== undefined ? o + "" : o
				}

				function addGetHookIf(e, t) {
					return {
						get: function () {
							if (e()) {
								delete this.get;
								return
							}
							return (this.get = t).apply(this, arguments)
						}
					}
				}

				function vendorPropName(e, t) {
					if (t in e) return t;
					var n = t[0].toUpperCase() + t.slice(1),
						r = t,
						i = cssPrefixes.length;
					while (i--) {
						t = cssPrefixes[i] + n;
						if (t in e) return t
					}
					return r
				}

				function setPositiveNumber(e, t, n) {
					var r = rnumsplit.exec(t);
					return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
				}

				function augmentWidthOrHeight(e, t, n, r, i) {
					var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
						o = 0;
					for (; s < 4; s += 2) n === "margin" && (o += jQuery.css(e, n + cssExpand[s], !0, i)), r ? (n === "content" && (o -= jQuery.css(e, "padding" + cssExpand[s], !0, i)), n !== "margin" && (o -= jQuery.css(e, "border" + cssExpand[s] + "Width", !0, i))) : (o += jQuery.css(e, "padding" + cssExpand[s], !0, i), n !== "padding" && (o += jQuery.css(e, "border" + cssExpand[s] + "Width", !0, i)));
					return o
				}

				function getWidthOrHeight(e, t, n) {
					var r = !0,
						i = t === "width" ? e.offsetWidth : e.offsetHeight,
						s = getStyles(e),
						o = jQuery.css(e, "boxSizing", !1, s) === "border-box";
					if (i <= 0 || i == null) {
						i = curCSS(e, t, s);
						if (i < 0 || i == null) i = e.style[t];
						if (rnumnonpx.test(i)) return i;
						r = o && (support.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
					}
					return i + augmentWidthOrHeight(e, t, n || (o ? "border" : "content"), r, s) + "px"
				}

				function showHide(e, t) {
					var n, r, i, s = [],
						o = 0,
						u = e.length;
					for (; o < u; o++) {
						r = e[o];
						if (!r.style) continue;
						s[o] = data_priv.get(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && isHidden(r) && (s[o] = data_priv.access(r, "olddisplay", defaultDisplay(r.nodeName)))) : (i = isHidden(r), (n !== "none" || !i) && data_priv.set(r, "olddisplay", i ? n : jQuery.css(r, "display")))
					}
					for (o = 0; o < u; o++) {
						r = e[o];
						if (!r.style) continue;
						if (!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "" : "none"
					}
					return e
				}

				function Tween(e, t, n, r, i) {
					return new Tween.prototype.init(e, t, n, r, i)
				}

				function createFxNow() {
					return setTimeout(function () {
						fxNow = undefined
					}), fxNow = jQuery.now()
				}

				function genFx(e, t) {
					var n, r = 0,
						i = {
							height: e
						};
					t = t ? 1 : 0;
					for (; r < 4; r += 2 - t) n = cssExpand[r], i["margin" + n] = i["padding" + n] = e;
					return t && (i.opacity = i.width = e), i
				}

				function createTween(e, t, n) {
					var r, i = (tweeners[t] || []).concat(tweeners["*"]),
						s = 0,
						o = i.length;
					for (; s < o; s++)
						if (r = i[s].call(n, t, e)) return r
				}

				function defaultPrefilter(e, t, n) {
					var r, i, s, o, u, a, f, l, c = this,
						h = {},
						p = e.style,
						d = e.nodeType && isHidden(e),
						v = data_priv.get(e, "fxshow");
					n.queue || (u = jQuery._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function () {
						u.unqueued || a()
					}), u.unqueued++, c.always(function () {
						c.always(function () {
							u.unqueued--, jQuery.queue(e, "fx").length || u.empty.fire()
						})
					})), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], f = jQuery.css(e, "display"), l = f === "none" ? data_priv.get(e, "olddisplay") || defaultDisplay(e.nodeName) : f, l === "inline" && jQuery.css(e, "float") === "none" && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function () {
						p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
					}));
					for (r in t) {
						i = t[r];
						if (rfxtypes.exec(i)) {
							delete t[r], s = s || i === "toggle";
							if (i === (d ? "hide" : "show")) {
								if (i !== "show" || !v || v[r] === undefined) continue;
								d = !0
							}
							h[r] = v && v[r] || jQuery.style(e, r)
						} else f = undefined
					}
					if (!jQuery.isEmptyObject(h)) {
						v ? "hidden" in v && (d = v.hidden) : v = data_priv.access(e, "fxshow", {}), s && (v.hidden = !d), d ? jQuery(e).show() : c.done(function () {
							jQuery(e).hide()
						}), c.done(function () {
							var t;
							data_priv.remove(e, "fxshow");
							for (t in h) jQuery.style(e, t, h[t])
						});
						for (r in h) o = createTween(d ? v[r] : 0, r, c), r in v || (v[r] = o.start, d && (o.end = o.start, o.start = r === "width" || r === "height" ? 1 : 0))
					} else(f === "none" ? defaultDisplay(e.nodeName) : f) === "inline" && (p.display = f)
				}

				function propFilter(e, t) {
					var n, r, i, s, o;
					for (n in e) {
						r = jQuery.camelCase(n), i = t[r], s = e[n], jQuery.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = jQuery.cssHooks[r];
						if (o && "expand" in o) {
							s = o.expand(s), delete e[r];
							for (n in s) n in e || (e[n] = s[n], t[n] = i)
						} else t[r] = i
					}
				}

				function Animation(e, t, n) {
					var r, i, s = 0,
						o = animationPrefilters.length,
						u = jQuery.Deferred().always(function () {
							delete a.elem
						}),
						a = function () {
							if (i) return !1;
							var t = fxNow || createFxNow(),
								n = Math.max(0, f.startTime + f.duration - t),
								r = n / f.duration || 0,
								s = 1 - r,
								o = 0,
								a = f.tweens.length;
							for (; o < a; o++) f.tweens[o].run(s);
							return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
						},
						f = u.promise({
							elem: e,
							props: jQuery.extend({}, t),
							opts: jQuery.extend(!0, {
								specialEasing: {}
							}, n),
							originalProperties: t,
							originalOptions: n,
							startTime: fxNow || createFxNow(),
							duration: n.duration,
							tweens: [],
							createTween: function (t, n) {
								var r = jQuery.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
								return f.tweens.push(r), r
							},
							stop: function (t) {
								var n = 0,
									r = t ? f.tweens.length : 0;
								if (i) return this;
								i = !0;
								for (; n < r; n++) f.tweens[n].run(1);
								return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
							}
						}),
						l = f.props;
					propFilter(l, f.opts.specialEasing);
					for (; s < o; s++) {
						r = animationPrefilters[s].call(f, e, l, f.opts);
						if (r) return r
					}
					return jQuery.map(l, createTween, f), jQuery.isFunction(f.opts.start) && f.opts.start.call(e, f), jQuery.fx.timer(jQuery.extend(a, {
						elem: e,
						anim: f,
						queue: f.opts.queue
					})), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
				}

				function addToPrefiltersOrTransports(e) {
					return function (t, n) {
						typeof t != "string" && (n = t, t = "*");
						var r, i = 0,
							s = t.toLowerCase().match(rnotwhite) || [];
						if (jQuery.isFunction(n))
							while (r = s[i++]) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
					}
				}

				function inspectPrefiltersOrTransports(e, t, n, r) {
					function o(u) {
						var a;
						return i[u] = !0, jQuery.each(e[u] || [], function (e, u) {
							var f = u(t, n, r);
							if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
							if (s) return !(a = f)
						}), a
					}
					var i = {},
						s = e === transports;
					return o(t.dataTypes[0]) || !i["*"] && o("*")
				}

				function ajaxExtend(e, t) {
					var n, r, i = jQuery.ajaxSettings.flatOptions || {};
					for (n in t) t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
					return r && jQuery.extend(!0, e, r), e
				}

				function ajaxHandleResponses(e, t, n) {
					var r, i, s, o, u = e.contents,
						a = e.dataTypes;
					while (a[0] === "*") a.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
					if (r)
						for (i in u)
							if (u[i] && u[i].test(r)) {
								a.unshift(i);
								break
							}
					if (a[0] in n) s = a[0];
					else {
						for (i in n) {
							if (!a[0] || e.converters[i + " " + a[0]]) {
								s = i;
								break
							}
							o || (o = i)
						}
						s = s || o
					} if (s) return s !== a[0] && a.unshift(s), n[s]
				}

				function ajaxConvert(e, t, n, r) {
					var i, s, o, u, a, f = {},
						l = e.dataTypes.slice();
					if (l[1])
						for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
					s = l.shift();
					while (s) {
						e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift();
						if (s)
							if (s === "*") s = a;
							else if (a !== "*" && a !== s) {
							o = f[a + " " + s] || f["* " + s];
							if (!o)
								for (i in f) {
									u = i.split(" ");
									if (u[1] === s) {
										o = f[a + " " + u[0]] || f["* " + u[0]];
										if (o) {
											o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
											break
										}
									}
								}
							if (o !== !0)
								if (o && e["throws"]) t = o(t);
								else try {
									t = o(t)
								} catch (c) {
									return {
										state: "parsererror",
										error: o ? c : "No conversion from " + a + " to " + s
									}
								}
						}
					}
					return {
						state: "success",
						data: t
					}
				}

				function buildParams(e, t, n, r) {
					var i;
					if (jQuery.isArray(t)) jQuery.each(t, function (t, i) {
						n || rbracket.test(e) ? r(e, i) : buildParams(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
					});
					else if (!n && jQuery.type(t) === "object")
						for (i in t) buildParams(e + "[" + i + "]", t[i], n, r);
					else r(e, t)
				}

				function getWindow(e) {
					return jQuery.isWindow(e) ? e : e.nodeType === 9 && e.defaultView
				}
				var arr = [],
					slice = arr.slice,
					concat = arr.concat,
					push = arr.push,
					indexOf = arr.indexOf,
					class2type = {},
					toString = class2type.toString,
					hasOwn = class2type.hasOwnProperty,
					support = {},
					document = window.document,
					version = "2.1.1",
					jQuery = function (e, t) {
						return new jQuery.fn.init(e, t)
					},
					rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
					rmsPrefix = /^-ms-/,
					rdashAlpha = /-([\da-z])/gi,
					fcamelCase = function (e, t) {
						return t.toUpperCase()
					};
				jQuery.fn = jQuery.prototype = {
					jquery: version,
					constructor: jQuery,
					selector: "",
					length: 0,
					toArray: function () {
						return slice.call(this)
					},
					get: function (e) {
						return e != null ? e < 0 ? this[e + this.length] : this[e] : slice.call(this)
					},
					pushStack: function (e) {
						var t = jQuery.merge(this.constructor(), e);
						return t.prevObject = this, t.context = this.context, t
					},
					each: function (e, t) {
						return jQuery.each(this, e, t)
					},
					map: function (e) {
						return this.pushStack(jQuery.map(this, function (t, n) {
							return e.call(t, n, t)
						}))
					},
					slice: function () {
						return this.pushStack(slice.apply(this, arguments))
					},
					first: function () {
						return this.eq(0)
					},
					last: function () {
						return this.eq(-1)
					},
					eq: function (e) {
						var t = this.length,
							n = +e + (e < 0 ? t : 0);
						return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
					},
					end: function () {
						return this.prevObject || this.constructor(null)
					},
					push: push,
					sort: arr.sort,
					splice: arr.splice
				}, jQuery.extend = jQuery.fn.extend = function () {
					var e, t, n, r, i, s, o = arguments[0] || {},
						u = 1,
						a = arguments.length,
						f = !1;
					typeof o == "boolean" && (f = o, o = arguments[u] || {}, u++), typeof o != "object" && !jQuery.isFunction(o) && (o = {}), u === a && (o = this, u--);
					for (; u < a; u++)
						if ((e = arguments[u]) != null)
							for (t in e) {
								n = o[t], r = e[t];
								if (o === r) continue;
								f && r && (jQuery.isPlainObject(r) || (i = jQuery.isArray(r))) ? (i ? (i = !1, s = n && jQuery.isArray(n) ? n : []) : s = n && jQuery.isPlainObject(n) ? n : {}, o[t] = jQuery.extend(f, s, r)) : r !== undefined && (o[t] = r)
							}
						return o
				}, jQuery.extend({
					expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
					isReady: !0,
					error: function (e) {
						throw new Error(e)
					},
					noop: function () {},
					isFunction: function (e) {
						return jQuery.type(e) === "function"
					},
					isArray: Array.isArray,
					isWindow: function (e) {
						return e != null && e === e.window
					},
					isNumeric: function (e) {
						return !jQuery.isArray(e) && e - parseFloat(e) >= 0
					},
					isPlainObject: function (e) {
						return jQuery.type(e) !== "object" || e.nodeType || jQuery.isWindow(e) ? !1 : e.constructor && !hasOwn.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
					},
					isEmptyObject: function (e) {
						var t;
						for (t in e) return !1;
						return !0
					},
					type: function (e) {
						return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? class2type[toString.call(e)] || "object" : typeof e
					},
					globalEval: function (code) {
						var script, indirect = eval;
						code = jQuery.trim(code), code && (code.indexOf("use strict") === 1 ? (script = document.createElement("script"), script.text = code, document.head.appendChild(script).parentNode.removeChild(script)) : indirect(code))
					},
					camelCase: function (e) {
						return e.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
					},
					nodeName: function (e, t) {
						return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
					},
					each: function (e, t, n) {
						var r, i = 0,
							s = e.length,
							o = isArraylike(e);
						if (n)
							if (o)
								for (; i < s; i++) {
									r = t.apply(e[i], n);
									if (r === !1) break
								} else
									for (i in e) {
										r = t.apply(e[i], n);
										if (r === !1) break
									} else if (o)
										for (; i < s; i++) {
											r = t.call(e[i], i, e[i]);
											if (r === !1) break
										} else
											for (i in e) {
												r = t.call(e[i], i, e[i]);
												if (r === !1) break
											}
									return e
					},
					trim: function (e) {
						return e == null ? "" : (e + "").replace(rtrim, "")
					},
					makeArray: function (e, t) {
						var n = t || [];
						return e != null && (isArraylike(Object(e)) ? jQuery.merge(n, typeof e == "string" ? [e] : e) : push.call(n, e)), n
					},
					inArray: function (e, t, n) {
						return t == null ? -1 : indexOf.call(t, e, n)
					},
					merge: function (e, t) {
						var n = +t.length,
							r = 0,
							i = e.length;
						for (; r < n; r++) e[i++] = t[r];
						return e.length = i, e
					},
					grep: function (e, t, n) {
						var r, i = [],
							s = 0,
							o = e.length,
							u = !n;
						for (; s < o; s++) r = !t(e[s], s), r !== u && i.push(e[s]);
						return i
					},
					map: function (e, t, n) {
						var r, i = 0,
							s = e.length,
							o = isArraylike(e),
							u = [];
						if (o)
							for (; i < s; i++) r = t(e[i], i, n), r != null && u.push(r);
						else
							for (i in e) r = t(e[i], i, n), r != null && u.push(r);
						return concat.apply([], u)
					},
					guid: 1,
					proxy: function (e, t) {
						var n, r, i;
						return typeof t == "string" && (n = e[t], t = e, e = n), jQuery.isFunction(e) ? (r = slice.call(arguments, 2), i = function () {
							return e.apply(t || this, r.concat(slice.call(arguments)))
						}, i.guid = e.guid = e.guid || jQuery.guid++, i) : undefined
					},
					now: Date.now,
					support: support
				}), jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
					class2type["[object " + t + "]"] = t.toLowerCase()
				});
				var Sizzle = function (e) {
					function st(e, t, r, i) {
						var s, u, f, l, c, d, g, y, S, x;
						(t ? t.ownerDocument || t : E) !== p && h(t), t = t || p, r = r || [];
						if (!e || typeof e != "string") return r;
						if ((l = t.nodeType) !== 1 && l !== 9) return [];
						if (v && !i) {
							if (s = Z.exec(e))
								if (f = s[1]) {
									if (l === 9) {
										u = t.getElementById(f);
										if (!u || !u.parentNode) return r;
										if (u.id === f) return r.push(u), r
									} else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && b(t, u) && u.id === f) return r.push(u), r
								} else {
									if (s[2]) return P.apply(r, t.getElementsByTagName(e)), r;
									if ((f = s[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(r, t.getElementsByClassName(f)), r
								}
							if (n.qsa && (!m || !m.test(e))) {
								y = g = w, S = t, x = l === 9 && e;
								if (l === 1 && t.nodeName.toLowerCase() !== "object") {
									d = o(e), (g = t.getAttribute("id")) ? y = g.replace(tt, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", c = d.length;
									while (c--) d[c] = y + mt(d[c]);
									S = et.test(e) && dt(t.parentNode) || t, x = d.join(",")
								}
								if (x) try {
									return P.apply(r, S.querySelectorAll(x)), r
								} catch (T) {} finally {
									g || t.removeAttribute("id")
								}
							}
						}
						return a(e.replace(z, "$1"), t, r, i)
					}

					function ot() {
						function t(n, i) {
							return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
						}
						var e = [];
						return t
					}

					function ut(e) {
						return e[w] = !0, e
					}

					function at(e) {
						var t = p.createElement("div");
						try {
							return !!e(t)
						} catch (n) {
							return !1
						} finally {
							t.parentNode && t.parentNode.removeChild(t), t = null
						}
					}

					function ft(e, t) {
						var n = e.split("|"),
							i = e.length;
						while (i--) r.attrHandle[n[i]] = t
					}

					function lt(e, t) {
						var n = t && e,
							r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || A) - (~e.sourceIndex || A);
						if (r) return r;
						if (n)
							while (n = n.nextSibling)
								if (n === t) return -1;
						return e ? 1 : -1
					}

					function ct(e) {
						return function (t) {
							var n = t.nodeName.toLowerCase();
							return n === "input" && t.type === e
						}
					}

					function ht(e) {
						return function (t) {
							var n = t.nodeName.toLowerCase();
							return (n === "input" || n === "button") && t.type === e
						}
					}

					function pt(e) {
						return ut(function (t) {
							return t = +t, ut(function (n, r) {
								var i, s = e([], n.length, t),
									o = s.length;
								while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
							})
						})
					}

					function dt(e) {
						return e && typeof e.getElementsByTagName !== L && e
					}

					function vt() {}

					function mt(e) {
						var t = 0,
							n = e.length,
							r = "";
						for (; t < n; t++) r += e[t].value;
						return r
					}

					function gt(e, t, n) {
						var r = t.dir,
							i = n && r === "parentNode",
							s = x++;
						return t.first ? function (t, n, s) {
							while (t = t[r])
								if (t.nodeType === 1 || i) return e(t, n, s)
						} : function (t, n, o) {
							var u, a, f = [S, s];
							if (o) {
								while (t = t[r])
									if (t.nodeType === 1 || i)
										if (e(t, n, o)) return !0
							} else
								while (t = t[r])
									if (t.nodeType === 1 || i) {
										a = t[w] || (t[w] = {});
										if ((u = a[r]) && u[0] === S && u[1] === s) return f[2] = u[2];
										a[r] = f;
										if (f[2] = e(t, n, o)) return !0
									}
						}
					}

					function yt(e) {
						return e.length > 1 ? function (t, n, r) {
							var i = e.length;
							while (i--)
								if (!e[i](t, n, r)) return !1;
							return !0
						} : e[0]
					}

					function bt(e, t, n) {
						var r = 0,
							i = t.length;
						for (; r < i; r++) st(e, t[r], n);
						return n
					}

					function wt(e, t, n, r, i) {
						var s, o = [],
							u = 0,
							a = e.length,
							f = t != null;
						for (; u < a; u++)
							if (s = e[u])
								if (!n || n(s, r, i)) o.push(s), f && t.push(u);
						return o
					}

					function Et(e, t, n, r, i, s) {
						return r && !r[w] && (r = Et(r)), i && !i[w] && (i = Et(i, s)), ut(function (s, o, u, a) {
							var f, l, c, h = [],
								p = [],
								d = o.length,
								v = s || bt(t || "*", u.nodeType ? [u] : u, []),
								m = e && (s || !t) ? wt(v, h, e, u, a) : v,
								g = n ? i || (s ? e : d || r) ? [] : o : m;
							n && n(m, g, u, a);
							if (r) {
								f = wt(g, p), r(f, [], u, a), l = f.length;
								while (l--)
									if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
							}
							if (s) {
								if (i || e) {
									if (i) {
										f = [], l = g.length;
										while (l--)(c = g[l]) && f.push(m[l] = c);
										i(null, g = [], f, a)
									}
									l = g.length;
									while (l--)(c = g[l]) && (f = i ? B.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
								}
							} else g = wt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : P.apply(o, g)
						})
					}

					function St(e) {
						var t, n, i, s = e.length,
							o = r.relative[e[0].type],
							u = o || r.relative[" "],
							a = o ? 1 : 0,
							l = gt(function (e) {
								return e === t
							}, u, !0),
							c = gt(function (e) {
								return B.call(t, e) > -1
							}, u, !0),
							h = [
								function (e, n, r) {
									return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
								}];
						for (; a < s; a++)
							if (n = r.relative[e[a].type]) h = [gt(yt(h), n)];
							else {
								n = r.filter[e[a].type].apply(null, e[a].matches);
								if (n[w]) {
									i = ++a;
									for (; i < s; i++)
										if (r.relative[e[i].type]) break;
									return Et(a > 1 && yt(h), a > 1 && mt(e.slice(0, a - 1).concat({
										value: e[a - 2].type === " " ? "*" : ""
									})).replace(z, "$1"), n, a < i && St(e.slice(a, i)), i < s && St(e = e.slice(i)), i < s && mt(e))
								}
								h.push(n)
							}
						return yt(h)
					}

					function xt(e, t) {
						var n = t.length > 0,
							i = e.length > 0,
							s = function (s, o, u, a, l) {
								var c, h, d, v = 0,
									m = "0",
									g = s && [],
									y = [],
									b = f,
									w = s || i && r.find.TAG("*", l),
									E = S += b == null ? 1 : Math.random() || .1,
									x = w.length;
								l && (f = o !== p && o);
								for (; m !== x && (c = w[m]) != null; m++) {
									if (i && c) {
										h = 0;
										while (d = e[h++])
											if (d(c, o, u)) {
												a.push(c);
												break
											}
										l && (S = E)
									}
									n && ((c = !d && c) && v--, s && g.push(c))
								}
								v += m;
								if (n && m !== v) {
									h = 0;
									while (d = t[h++]) d(g, y, o, u);
									if (s) {
										if (v > 0)
											while (m--)!g[m] && !y[m] && (y[m] = _.call(a));
										y = wt(y)
									}
									P.apply(a, y), l && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(a)
								}
								return l && (S = E, f = b), g
							};
						return n ? ut(s) : s
					}
					var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w = "sizzle" + -(new Date),
						E = e.document,
						S = 0,
						x = 0,
						T = ot(),
						N = ot(),
						C = ot(),
						k = function (e, t) {
							return e === t && (c = !0), 0
						},
						L = typeof undefined,
						A = 1 << 31,
						O = {}.hasOwnProperty,
						M = [],
						_ = M.pop,
						D = M.push,
						P = M.push,
						H = M.slice,
						B = M.indexOf || function (e) {
							var t = 0,
								n = this.length;
							for (; t < n; t++)
								if (this[t] === e) return t;
							return -1
						},
						j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
						F = "[\\x20\\t\\r\\n\\f]",
						I = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
						q = I.replace("w", "w#"),
						R = "\\[" + F + "*(" + I + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + F + "*\\]",
						U = ":(" + I + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|" + ".*" + ")\\)|)",
						z = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
						W = new RegExp("^" + F + "*," + F + "*"),
						X = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
						V = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
						$ = new RegExp(U),
						J = new RegExp("^" + q + "$"),
						K = {
							ID: new RegExp("^#(" + I + ")"),
							CLASS: new RegExp("^\\.(" + I + ")"),
							TAG: new RegExp("^(" + I.replace("w", "w*") + ")"),
							ATTR: new RegExp("^" + R),
							PSEUDO: new RegExp("^" + U),
							CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
							bool: new RegExp("^(?:" + j + ")$", "i"),
							needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
						},
						Q = /^(?:input|select|textarea|button)$/i,
						G = /^h\d$/i,
						Y = /^[^{]+\{\s*\[native \w/,
						Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
						et = /[+~]/,
						tt = /'|\\/g,
						nt = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
						rt = function (e, t, n) {
							var r = "0x" + t - 65536;
							return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
						};
					try {
						P.apply(M = H.call(E.childNodes), E.childNodes), M[E.childNodes.length].nodeType
					} catch (it) {
						P = {
							apply: M.length ? function (e, t) {
								D.apply(e, H.call(t))
							} : function (e, t) {
								var n = e.length,
									r = 0;
								while (e[n++] = t[r++]);
								e.length = n - 1
							}
						}
					}
					n = st.support = {}, s = st.isXML = function (e) {
						var t = e && (e.ownerDocument || e).documentElement;
						return t ? t.nodeName !== "HTML" : !1
					}, h = st.setDocument = function (e) {
						var t, i = e ? e.ownerDocument || e : E,
							o = i.defaultView;
						if (i === p || i.nodeType !== 9 || !i.documentElement) return p;
						p = i, d = i.documentElement, v = !s(i), o && o !== o.top && (o.addEventListener ? o.addEventListener("unload", function () {
							h()
						}, !1) : o.attachEvent && o.attachEvent("onunload", function () {
							h()
						})), n.attributes = at(function (e) {
							return e.className = "i", !e.getAttribute("className")
						}), n.getElementsByTagName = at(function (e) {
							return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
						}), n.getElementsByClassName = Y.test(i.getElementsByClassName) && at(function (e) {
							return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", e.getElementsByClassName("i").length === 2
						}), n.getById = at(function (e) {
							return d.appendChild(e).id = w, !i.getElementsByName || !i.getElementsByName(w).length
						}), n.getById ? (r.find.ID = function (e, t) {
							if (typeof t.getElementById !== L && v) {
								var n = t.getElementById(e);
								return n && n.parentNode ? [n] : []
							}
						}, r.filter.ID = function (e) {
							var t = e.replace(nt, rt);
							return function (e) {
								return e.getAttribute("id") === t
							}
						}) : (delete r.find.ID, r.filter.ID = function (e) {
							var t = e.replace(nt, rt);
							return function (e) {
								var n = typeof e.getAttributeNode !== L && e.getAttributeNode("id");
								return n && n.value === t
							}
						}), r.find.TAG = n.getElementsByTagName ? function (e, t) {
							if (typeof t.getElementsByTagName !== L) return t.getElementsByTagName(e)
						} : function (e, t) {
							var n, r = [],
								i = 0,
								s = t.getElementsByTagName(e);
							if (e === "*") {
								while (n = s[i++]) n.nodeType === 1 && r.push(n);
								return r
							}
							return s
						}, r.find.CLASS = n.getElementsByClassName && function (e, t) {
							if (typeof t.getElementsByClassName !== L && v) return t.getElementsByClassName(e)
						}, g = [], m = [];
						if (n.qsa = Y.test(i.querySelectorAll)) at(function (e) {
							e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + j + ")"), e.querySelectorAll(":checked").length || m.push(":checked")
						}), at(function (e) {
							var t = i.createElement("input");
							t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
						});
						return (n.matchesSelector = Y.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && at(function (e) {
							n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push("!=", U)
						}), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = Y.test(d.compareDocumentPosition), b = t || Y.test(d.contains) ? function (e, t) {
							var n = e.nodeType === 9 ? e.documentElement : e,
								r = t && t.parentNode;
							return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
						} : function (e, t) {
							if (t)
								while (t = t.parentNode)
									if (t === e) return !0;
							return !1
						}, k = t ? function (e, t) {
							if (e === t) return c = !0, 0;
							var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
							return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, r & 1 || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === i || e.ownerDocument === E && b(E, e) ? -1 : t === i || t.ownerDocument === E && b(E, t) ? 1 : l ? B.call(l, e) - B.call(l, t) : 0 : r & 4 ? -1 : 1)
						} : function (e, t) {
							if (e === t) return c = !0, 0;
							var n, r = 0,
								s = e.parentNode,
								o = t.parentNode,
								u = [e],
								a = [t];
							if (!s || !o) return e === i ? -1 : t === i ? 1 : s ? -1 : o ? 1 : l ? B.call(l, e) - B.call(l, t) : 0;
							if (s === o) return lt(e, t);
							n = e;
							while (n = n.parentNode) u.unshift(n);
							n = t;
							while (n = n.parentNode) a.unshift(n);
							while (u[r] === a[r]) r++;
							return r ? lt(u[r], a[r]) : u[r] === E ? -1 : a[r] === E ? 1 : 0
						}, i
					}, st.matches = function (e, t) {
						return st(e, null, null, t)
					}, st.matchesSelector = function (e, t) {
						(e.ownerDocument || e) !== p && h(e), t = t.replace(V, "='$1']");
						if (n.matchesSelector && v && (!g || !g.test(t)) && (!m || !m.test(t))) try {
							var r = y.call(e, t);
							if (r || n.disconnectedMatch || e.document && e.document.nodeType !== 11) return r
						} catch (i) {}
						return st(t, p, null, [e]).length > 0
					}, st.contains = function (e, t) {
						return (e.ownerDocument || e) !== p && h(e), b(e, t)
					}, st.attr = function (e, t) {
						(e.ownerDocument || e) !== p && h(e);
						var i = r.attrHandle[t.toLowerCase()],
							s = i && O.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : undefined;
						return s !== undefined ? s : n.attributes || !v ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
					}, st.error = function (e) {
						throw new Error("Syntax error, unrecognized expression: " + e)
					}, st.uniqueSort = function (e) {
						var t, r = [],
							i = 0,
							s = 0;
						c = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(k);
						if (c) {
							while (t = e[s++]) t === e[s] && (i = r.push(s));
							while (i--) e.splice(r[i], 1)
						}
						return l = null, e
					}, i = st.getText = function (e) {
						var t, n = "",
							r = 0,
							s = e.nodeType;
						if (!s)
							while (t = e[r++]) n += i(t);
						else if (s === 1 || s === 9 || s === 11) {
							if (typeof e.textContent == "string") return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
						} else if (s === 3 || s === 4) return e.nodeValue;
						return n
					}, r = st.selectors = {
						cacheLength: 50,
						createPseudo: ut,
						match: K,
						attrHandle: {},
						find: {},
						relative: {
							">": {
								dir: "parentNode",
								first: !0
							},
							" ": {
								dir: "parentNode"
							},
							"+": {
								dir: "previousSibling",
								first: !0
							},
							"~": {
								dir: "previousSibling"
							}
						},
						preFilter: {
							ATTR: function (e) {
								return e[1] = e[1].replace(nt, rt), e[3] = (e[3] || e[4] || e[5] || "").replace(nt, rt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
							},
							CHILD: function (e) {
								return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && st.error(e[0]), e
							},
							PSEUDO: function (e) {
								var t, n = !e[6] && e[2];
								return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
							}
						},
						filter: {
							TAG: function (e) {
								var t = e.replace(nt, rt).toLowerCase();
								return e === "*" ? function () {
									return !0
								} : function (e) {
									return e.nodeName && e.nodeName.toLowerCase() === t
								}
							},
							CLASS: function (e) {
								var t = T[e + " "];
								return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && T(e, function (e) {
									return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "")
								})
							},
							ATTR: function (e, t, n) {
								return function (r) {
									var i = st.attr(r, e);
									return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
								}
							},
							CHILD: function (e, t, n, r, i) {
								var s = e.slice(0, 3) !== "nth",
									o = e.slice(-4) !== "last",
									u = t === "of-type";
								return r === 1 && i === 0 ? function (e) {
									return !!e.parentNode
								} : function (t, n, a) {
									var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
										m = t.parentNode,
										g = u && t.nodeName.toLowerCase(),
										y = !a && !u;
									if (m) {
										if (s) {
											while (v) {
												c = t;
												while (c = c[v])
													if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
												d = v = e === "only" && !d && "nextSibling"
											}
											return !0
										}
										d = [o ? m.firstChild : m.lastChild];
										if (o && y) {
											l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === S && f[1], h = f[0] === S && f[2], c = p && m.childNodes[p];
											while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
												if (c.nodeType === 1 && ++h && c === t) {
													l[e] = [S, p, h];
													break
												}
										} else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === S) h = f[1];
										else
											while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
												if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
													y && ((c[w] || (c[w] = {}))[e] = [S, h]);
													if (c === t) break
												} return h -= i, h === r || h % r === 0 && h / r >= 0
									}
								}
							},
							PSEUDO: function (e, t) {
								var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
								return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ut(function (e, n) {
									var r, s = i(e, t),
										o = s.length;
									while (o--) r = B.call(e, s[o]), e[r] = !(n[r] = s[o])
								}) : function (e) {
									return i(e, 0, n)
								}) : i
							}
						},
						pseudos: {
							not: ut(function (e) {
								var t = [],
									n = [],
									r = u(e.replace(z, "$1"));
								return r[w] ? ut(function (e, t, n, i) {
									var s, o = r(e, null, i, []),
										u = e.length;
									while (u--)
										if (s = o[u]) e[u] = !(t[u] = s)
								}) : function (e, i, s) {
									return t[0] = e, r(t, null, s, n), !n.pop()
								}
							}),
							has: ut(function (e) {
								return function (t) {
									return st(e, t).length > 0
								}
							}),
							contains: ut(function (e) {
								return function (t) {
									return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
								}
							}),
							lang: ut(function (e) {
								return J.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(nt, rt).toLowerCase(),
									function (t) {
										var n;
										do
											if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
										while ((t = t.parentNode) && t.nodeType === 1);
										return !1
									}
							}),
							target: function (t) {
								var n = e.location && e.location.hash;
								return n && n.slice(1) === t.id
							},
							root: function (e) {
								return e === d
							},
							focus: function (e) {
								return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
							},
							enabled: function (e) {
								return e.disabled === !1
							},
							disabled: function (e) {
								return e.disabled === !0
							},
							checked: function (e) {
								var t = e.nodeName.toLowerCase();
								return t === "input" && !!e.checked || t === "option" && !!e.selected
							},
							selected: function (e) {
								return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
							},
							empty: function (e) {
								for (e = e.firstChild; e; e = e.nextSibling)
									if (e.nodeType < 6) return !1;
								return !0
							},
							parent: function (e) {
								return !r.pseudos.empty(e)
							},
							header: function (e) {
								return G.test(e.nodeName)
							},
							input: function (e) {
								return Q.test(e.nodeName)
							},
							button: function (e) {
								var t = e.nodeName.toLowerCase();
								return t === "input" && e.type === "button" || t === "button"
							},
							text: function (e) {
								var t;
								return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
							},
							first: pt(function () {
								return [0]
							}),
							last: pt(function (e, t) {
								return [t - 1]
							}),
							eq: pt(function (e, t, n) {
								return [n < 0 ? n + t : n]
							}),
							even: pt(function (e, t) {
								var n = 0;
								for (; n < t; n += 2) e.push(n);
								return e
							}),
							odd: pt(function (e, t) {
								var n = 1;
								for (; n < t; n += 2) e.push(n);
								return e
							}),
							lt: pt(function (e, t, n) {
								var r = n < 0 ? n + t : n;
								for (; --r >= 0;) e.push(r);
								return e
							}),
							gt: pt(function (e, t, n) {
								var r = n < 0 ? n + t : n;
								for (; ++r < t;) e.push(r);
								return e
							})
						}
					}, r.pseudos.nth = r.pseudos.eq;
					for (t in {
						radio: !0,
						checkbox: !0,
						file: !0,
						password: !0,
						image: !0
					}) r.pseudos[t] = ct(t);
					for (t in {
						submit: !0,
						reset: !0
					}) r.pseudos[t] = ht(t);
					return vt.prototype = r.filters = r.pseudos, r.setFilters = new vt, o = st.tokenize = function (e, t) {
						var n, i, s, o, u, a, f, l = N[e + " "];
						if (l) return t ? 0 : l.slice(0);
						u = e, a = [], f = r.preFilter;
						while (u) {
							if (!n || (i = W.exec(u))) i && (u = u.slice(i[0].length) || u), a.push(s = []);
							n = !1;
							if (i = X.exec(u)) n = i.shift(), s.push({
								value: n,
								type: i[0].replace(z, " ")
							}), u = u.slice(n.length);
							for (o in r.filter)(i = K[o].exec(u)) && (!f[o] || (i = f[o](i))) && (n = i.shift(), s.push({
								value: n,
								type: o,
								matches: i
							}), u = u.slice(n.length));
							if (!n) break
						}
						return t ? u.length : u ? st.error(e) : N(e, a).slice(0)
					}, u = st.compile = function (e, t) {
						var n, r = [],
							i = [],
							s = C[e + " "];
						if (!s) {
							t || (t = o(e)), n = t.length;
							while (n--) s = St(t[n]), s[w] ? r.push(s) : i.push(s);
							s = C(e, xt(i, r)), s.selector = e
						}
						return s
					}, a = st.select = function (e, t, i, s) {
						var a, f, l, c, h, p = typeof e == "function" && e,
							d = !s && o(e = p.selector || e);
						i = i || [];
						if (d.length === 1) {
							f = d[0] = d[0].slice(0);
							if (f.length > 2 && (l = f[0]).type === "ID" && n.getById && t.nodeType === 9 && v && r.relative[f[1].type]) {
								t = (r.find.ID(l.matches[0].replace(nt, rt), t) || [])[0];
								if (!t) return i;
								p && (t = t.parentNode), e = e.slice(f.shift().value.length)
							}
							a = K.needsContext.test(e) ? 0 : f.length;
							while (a--) {
								l = f[a];
								if (r.relative[c = l.type]) break;
								if (h = r.find[c])
									if (s = h(l.matches[0].replace(nt, rt), et.test(f[0].type) && dt(t.parentNode) || t)) {
										f.splice(a, 1), e = s.length && mt(f);
										if (!e) return P.apply(i, s), i;
										break
									}
							}
						}
						return (p || u(e, d))(s, t, !v, i, et.test(e) && dt(t.parentNode) || t), i
					}, n.sortStable = w.split("").sort(k).join("") === w, n.detectDuplicates = !!c, h(), n.sortDetached = at(function (e) {
						return e.compareDocumentPosition(p.createElement("div")) & 1
					}), at(function (e) {
						return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute("href") === "#"
					}) || ft("type|href|height|width", function (e, t, n) {
						if (!n) return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
					}), (!n.attributes || !at(function (e) {
						return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === ""
					})) && ft("value", function (e, t, n) {
						if (!n && e.nodeName.toLowerCase() === "input") return e.defaultValue
					}), at(function (e) {
						return e.getAttribute("disabled") == null
					}) || ft(j, function (e, t, n) {
						var r;
						if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
					}), st
				}(window);
				jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML, jQuery.contains = Sizzle.contains;
				var rneedsContext = jQuery.expr.match.needsContext,
					rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
					risSimple = /^.[^:#\[\.,]*$/;
				jQuery.filter = function (e, t, n) {
					var r = t[0];
					return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? jQuery.find.matchesSelector(r, e) ? [r] : [] : jQuery.find.matches(e, jQuery.grep(t, function (e) {
						return e.nodeType === 1
					}))
				}, jQuery.fn.extend({
					find: function (e) {
						var t, n = this.length,
							r = [],
							i = this;
						if (typeof e != "string") return this.pushStack(jQuery(e).filter(function () {
							for (t = 0; t < n; t++)
								if (jQuery.contains(i[t], this)) return !0
						}));
						for (t = 0; t < n; t++) jQuery.find(e, i[t], r);
						return r = this.pushStack(n > 1 ? jQuery.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
					},
					filter: function (e) {
						return this.pushStack(winnow(this, e || [], !1))
					},
					not: function (e) {
						return this.pushStack(winnow(this, e || [], !0))
					},
					is: function (e) {
						return !!winnow(this, typeof e == "string" && rneedsContext.test(e) ? jQuery(e) : e || [], !1).length
					}
				});
				var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
					init = jQuery.fn.init = function (e, t) {
						var n, r;
						if (!e) return this;
						if (typeof e == "string") {
							e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? n = [null, e, null] : n = rquickExpr.exec(e);
							if (n && (n[1] || !t)) {
								if (n[1]) {
									t = t instanceof jQuery ? t[0] : t, jQuery.merge(this, jQuery.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : document, !0));
									if (rsingleTag.test(n[1]) && jQuery.isPlainObject(t))
										for (n in t) jQuery.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
									return this
								}
								return r = document.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = document, this.selector = e, this
							}
							return !t || t.jquery ? (t || rootjQuery).find(e) : this.constructor(t).find(e)
						}
						return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : jQuery.isFunction(e) ? typeof rootjQuery.ready != "undefined" ? rootjQuery.ready(e) : e(jQuery) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), jQuery.makeArray(e, this))
					};
				init.prototype = jQuery.fn, rootjQuery = jQuery(document);
				var rparentsprev = /^(?:parents|prev(?:Until|All))/,
					guaranteedUnique = {
						children: !0,
						contents: !0,
						next: !0,
						prev: !0
					};
				jQuery.extend({
					dir: function (e, t, n) {
						var r = [],
							i = n !== undefined;
						while ((e = e[t]) && e.nodeType !== 9)
							if (e.nodeType === 1) {
								if (i && jQuery(e).is(n)) break;
								r.push(e)
							}
						return r
					},
					sibling: function (e, t) {
						var n = [];
						for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
						return n
					}
				}), jQuery.fn.extend({
					has: function (e) {
						var t = jQuery(e, this),
							n = t.length;
						return this.filter(function () {
							var e = 0;
							for (; e < n; e++)
								if (jQuery.contains(this, t[e])) return !0
						})
					},
					closest: function (e, t) {
						var n, r = 0,
							i = this.length,
							s = [],
							o = rneedsContext.test(e) || typeof e != "string" ? jQuery(e, t || this.context) : 0;
						for (; r < i; r++)
							for (n = this[r]; n && n !== t; n = n.parentNode)
								if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && jQuery.find.matchesSelector(n, e))) {
									s.push(n);
									break
								}
						return this.pushStack(s.length > 1 ? jQuery.unique(s) : s)
					},
					index: function (e) {
						return e ? typeof e == "string" ? indexOf.call(jQuery(e), this[0]) : indexOf.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
					},
					add: function (e, t) {
						return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(e, t))))
					},
					addBack: function (e) {
						return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
					}
				}), jQuery.each({
					parent: function (e) {
						var t = e.parentNode;
						return t && t.nodeType !== 11 ? t : null
					},
					parents: function (e) {
						return jQuery.dir(e, "parentNode")
					},
					parentsUntil: function (e, t, n) {
						return jQuery.dir(e, "parentNode", n)
					},
					next: function (e) {
						return sibling(e, "nextSibling")
					},
					prev: function (e) {
						return sibling(e, "previousSibling")
					},
					nextAll: function (e) {
						return jQuery.dir(e, "nextSibling")
					},
					prevAll: function (e) {
						return jQuery.dir(e, "previousSibling")
					},
					nextUntil: function (e, t, n) {
						return jQuery.dir(e, "nextSibling", n)
					},
					prevUntil: function (e, t, n) {
						return jQuery.dir(e, "previousSibling", n)
					},
					siblings: function (e) {
						return jQuery.sibling((e.parentNode || {}).firstChild, e)
					},
					children: function (e) {
						return jQuery.sibling(e.firstChild)
					},
					contents: function (e) {
						return e.contentDocument || jQuery.merge([], e.childNodes)
					}
				}, function (e, t) {
					jQuery.fn[e] = function (n, r) {
						var i = jQuery.map(this, t, n);
						return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (i = jQuery.filter(r, i)), this.length > 1 && (guaranteedUnique[e] || jQuery.unique(i), rparentsprev.test(e) && i.reverse()), this.pushStack(i)
					}
				});
				var rnotwhite = /\S+/g,
					optionsCache = {};
				jQuery.Callbacks = function (e) {
					e = typeof e == "string" ? optionsCache[e] || createOptions(e) : jQuery.extend({}, e);
					var t, n, r, i, s, o, u = [],
						a = !e.once && [],
						f = function (c) {
							t = e.memory && c, n = !0, o = i || 0, i = 0, s = u.length, r = !0;
							for (; u && o < s; o++)
								if (u[o].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
									t = !1;
									break
								}
							r = !1, u && (a ? a.length && f(a.shift()) : t ? u = [] : l.disable())
						},
						l = {
							add: function () {
								if (u) {
									var n = u.length;
									(function o(t) {
										jQuery.each(t, function (t, n) {
											var r = jQuery.type(n);
											r === "function" ? (!e.unique || !l.has(n)) && u.push(n) : n && n.length && r !== "string" && o(n)
										})
									})(arguments), r ? s = u.length : t && (i = n, f(t))
								}
								return this
							},
							remove: function () {
								return u && jQuery.each(arguments, function (e, t) {
									var n;
									while ((n = jQuery.inArray(t, u, n)) > -1) u.splice(n, 1), r && (n <= s && s--, n <= o && o--)
								}), this
							},
							has: function (e) {
								return e ? jQuery.inArray(e, u) > -1 : !!u && !!u.length
							},
							empty: function () {
								return u = [], s = 0, this
							},
							disable: function () {
								return u = a = t = undefined, this
							},
							disabled: function () {
								return !u
							},
							lock: function () {
								return a = undefined, t || l.disable(), this
							},
							locked: function () {
								return !a
							},
							fireWith: function (e, t) {
								return u && (!n || a) && (t = t || [], t = [e, t.slice ? t.slice() : t], r ? a.push(t) : f(t)), this
							},
							fire: function () {
								return l.fireWith(this, arguments), this
							},
							fired: function () {
								return !!n
							}
						};
					return l
				}, jQuery.extend({
					Deferred: function (e) {
						var t = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
							n = "pending",
							r = {
								state: function () {
									return n
								},
								always: function () {
									return i.done(arguments).fail(arguments), this
								},
								then: function () {
									var e = arguments;
									return jQuery.Deferred(function (n) {
										jQuery.each(t, function (t, s) {
											var o = jQuery.isFunction(e[t]) && e[t];
											i[s[1]](function () {
												var e = o && o.apply(this, arguments);
												e && jQuery.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
											})
										}), e = null
									}).promise()
								},
								promise: function (e) {
									return e != null ? jQuery.extend(e, r) : r
								}
							},
							i = {};
						return r.pipe = r.then, jQuery.each(t, function (e, s) {
							var o = s[2],
								u = s[3];
							r[s[1]] = o.add, u && o.add(function () {
								n = u
							}, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function () {
								return i[s[0] + "With"](this === i ? r : this, arguments), this
							}, i[s[0] + "With"] = o.fireWith
						}), r.promise(i), e && e.call(i, i), i
					},
					when: function (e) {
						var t = 0,
							n = slice.call(arguments),
							r = n.length,
							i = r !== 1 || e && jQuery.isFunction(e.promise) ? r : 0,
							s = i === 1 ? e : jQuery.Deferred(),
							o = function (e, t, n) {
								return function (r) {
									t[e] = this, n[e] = arguments.length > 1 ? slice.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
								}
							},
							u, a, f;
						if (r > 1) {
							u = new Array(r), a = new Array(r), f = new Array(r);
							for (; t < r; t++) n[t] && jQuery.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
						}
						return i || s.resolveWith(f, n), s.promise()
					}
				});
				var readyList;
				jQuery.fn.ready = function (e) {
					return jQuery.ready.promise().done(e), this
				}, jQuery.extend({
					isReady: !1,
					readyWait: 1,
					holdReady: function (e) {
						e ? jQuery.readyWait++ : jQuery.ready(!0)
					},
					ready: function (e) {
						if (e === !0 ? --jQuery.readyWait : jQuery.isReady) return;
						jQuery.isReady = !0;
						if (e !== !0 && --jQuery.readyWait > 0) return;
						readyList.resolveWith(document, [jQuery]), jQuery.fn.triggerHandler && (jQuery(document).triggerHandler("ready"), jQuery(document).off("ready"))
					}
				}), jQuery.ready.promise = function (e) {
					return readyList || (readyList = jQuery.Deferred(), document.readyState === "complete" ? setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", completed, !1), window.addEventListener("load", completed, !1))), readyList.promise(e)
				}, jQuery.ready.promise();
				var access = jQuery.access = function (e, t, n, r, i, s, o) {
					var u = 0,
						a = e.length,
						f = n == null;
					if (jQuery.type(n) === "object") {
						i = !0;
						for (u in n) jQuery.access(e, t, u, n[u], !0, s, o)
					} else if (r !== undefined) {
						i = !0, jQuery.isFunction(r) || (o = !0), f && (o ? (t.call(e, r), t = null) : (f = t, t = function (e, t, n) {
							return f.call(jQuery(e), n)
						}));
						if (t)
							for (; u < a; u++) t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)))
					}
					return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
				};
				jQuery.acceptData = function (e) {
					return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
				}, Data.uid = 1, Data.accepts = jQuery.acceptData, Data.prototype = {
					key: function (e) {
						if (!Data.accepts(e)) return 0;
						var t = {},
							n = e[this.expando];
						if (!n) {
							n = Data.uid++;
							try {
								t[this.expando] = {
									value: n
								}, Object.defineProperties(e, t)
							} catch (r) {
								t[this.expando] = n, jQuery.extend(e, t)
							}
						}
						return this.cache[n] || (this.cache[n] = {}), n
					},
					set: function (e, t, n) {
						var r, i = this.key(e),
							s = this.cache[i];
						if (typeof t == "string") s[t] = n;
						else if (jQuery.isEmptyObject(s)) jQuery.extend(this.cache[i], t);
						else
							for (r in t) s[r] = t[r];
						return s
					},
					get: function (e, t) {
						var n = this.cache[this.key(e)];
						return t === undefined ? n : n[t]
					},
					access: function (e, t, n) {
						var r;
						return t === undefined || t && typeof t == "string" && n === undefined ? (r = this.get(e, t), r !== undefined ? r : this.get(e, jQuery.camelCase(t))) : (this.set(e, t, n), n !== undefined ? n : t)
					},
					remove: function (e, t) {
						var n, r, i, s = this.key(e),
							o = this.cache[s];
						if (t === undefined) this.cache[s] = {};
						else {
							jQuery.isArray(t) ? r = t.concat(t.map(jQuery.camelCase)) : (i = jQuery.camelCase(t), t in o ? r = [t, i] : (r = i, r = r in o ? [r] : r.match(rnotwhite) || [])), n = r.length;
							while (n--) delete o[r[n]]
						}
					},
					hasData: function (e) {
						return !jQuery.isEmptyObject(this.cache[e[this.expando]] || {})
					},
					discard: function (e) {
						e[this.expando] && delete this.cache[e[this.expando]]
					}
				};
				var data_priv = new Data,
					data_user = new Data,
					rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
					rmultiDash = /([A-Z])/g;
				jQuery.extend({
					hasData: function (e) {
						return data_user.hasData(e) || data_priv.hasData(e)
					},
					data: function (e, t, n) {
						return data_user.access(e, t, n)
					},
					removeData: function (e, t) {
						data_user.remove(e, t)
					},
					_data: function (e, t, n) {
						return data_priv.access(e, t, n)
					},
					_removeData: function (e, t) {
						data_priv.remove(e, t)
					}
				}), jQuery.fn.extend({
					data: function (e, t) {
						var n, r, i, s = this[0],
							o = s && s.attributes;
						if (e === undefined) {
							if (this.length) {
								i = data_user.get(s);
								if (s.nodeType === 1 && !data_priv.get(s, "hasDataAttrs")) {
									n = o.length;
									while (n--) o[n] && (r = o[n].name, r.indexOf("data-") === 0 && (r = jQuery.camelCase(r.slice(5)), dataAttr(s, r, i[r])));
									data_priv.set(s, "hasDataAttrs", !0)
								}
							}
							return i
						}
						return typeof e == "object" ? this.each(function () {
							data_user.set(this, e)
						}) : access(this, function (t) {
							var n, r = jQuery.camelCase(e);
							if (s && t === undefined) {
								n = data_user.get(s, e);
								if (n !== undefined) return n;
								n = data_user.get(s, r);
								if (n !== undefined) return n;
								n = dataAttr(s, r, undefined);
								if (n !== undefined) return n;
								return
							}
							this.each(function () {
								var n = data_user.get(this, r);
								data_user.set(this, r, t), e.indexOf("-") !== -1 && n !== undefined && data_user.set(this, e, t)
							})
						}, null, t, arguments.length > 1, null, !0)
					},
					removeData: function (e) {
						return this.each(function () {
							data_user.remove(this, e)
						})
					}
				}), jQuery.extend({
					queue: function (e, t, n) {
						var r;
						if (e) return t = (t || "fx") + "queue", r = data_priv.get(e, t), n && (!r || jQuery.isArray(n) ? r = data_priv.access(e, t, jQuery.makeArray(n)) : r.push(n)), r || []
					},
					dequeue: function (e, t) {
						t = t || "fx";
						var n = jQuery.queue(e, t),
							r = n.length,
							i = n.shift(),
							s = jQuery._queueHooks(e, t),
							o = function () {
								jQuery.dequeue(e, t)
							};
						i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
					},
					_queueHooks: function (e, t) {
						var n = t + "queueHooks";
						return data_priv.get(e, n) || data_priv.access(e, n, {
							empty: jQuery.Callbacks("once memory").add(function () {
								data_priv.remove(e, [t + "queue", n])
							})
						})
					}
				}), jQuery.fn.extend({
					queue: function (e, t) {
						var n = 2;
						return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? jQuery.queue(this[0], e) : t === undefined ? this : this.each(function () {
							var n = jQuery.queue(this, e, t);
							jQuery._queueHooks(this, e), e === "fx" && n[0] !== "inprogress" && jQuery.dequeue(this, e)
						})
					},
					dequeue: function (e) {
						return this.each(function () {
							jQuery.dequeue(this, e)
						})
					},
					clearQueue: function (e) {
						return this.queue(e || "fx", [])
					},
					promise: function (e, t) {
						var n, r = 1,
							i = jQuery.Deferred(),
							s = this,
							o = this.length,
							u = function () {
								--r || i.resolveWith(s, [s])
							};
						typeof e != "string" && (t = e, e = undefined), e = e || "fx";
						while (o--) n = data_priv.get(s[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
						return u(), i.promise(t)
					}
				});
				var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
					cssExpand = ["Top", "Right", "Bottom", "Left"],
					isHidden = function (e, t) {
						return e = t || e, jQuery.css(e, "display") === "none" || !jQuery.contains(e.ownerDocument, e)
					},
					rcheckableType = /^(?:checkbox|radio)$/i;
				(function () {
					var e = document.createDocumentFragment(),
						t = e.appendChild(document.createElement("div")),
						n = document.createElement("input");
					n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), support.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", support.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
				})();
				var strundefined = typeof undefined;
				support.focusinBubbles = "onfocusin" in window;
				var rkeyEvent = /^key/,
					rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
					rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
					rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
				jQuery.event = {
					global: {},
					add: function (e, t, n, r, i) {
						var s, o, u, a, f, l, c, h, p, d, v, m = data_priv.get(e);
						if (!m) return;
						n.handler && (s = n, n = s.handler, i = s.selector), n.guid || (n.guid = jQuery.guid++), (a = m.events) || (a = m.events = {}), (o = m.handle) || (o = m.handle = function (t) {
							return typeof jQuery !== strundefined && jQuery.event.triggered !== t.type ? jQuery.event.dispatch.apply(e, arguments) : undefined
						}), t = (t || "").match(rnotwhite) || [""], f = t.length;
						while (f--) {
							u = rtypenamespace.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
							if (!p) continue;
							c = jQuery.event.special[p] || {}, p = (i ? c.delegateType : c.bindType) || p, c = jQuery.event.special[p] || {}, l = jQuery.extend({
								type: p,
								origType: v,
								data: r,
								handler: n,
								guid: n.guid,
								selector: i,
								needsContext: i && jQuery.expr.match.needsContext.test(i),
								namespace: d.join(".")
							}, s), (h = a[p]) || (h = a[p] = [], h.delegateCount = 0, (!c.setup || c.setup.call(e, r, d, o) === !1) && e.addEventListener && e.addEventListener(p, o, !1)), c.add && (c.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, l) : h.push(l), jQuery.event.global[p] = !0
						}
					},
					remove: function (e, t, n, r, i) {
						var s, o, u, a, f, l, c, h, p, d, v, m = data_priv.hasData(e) && data_priv.get(e);
						if (!m || !(a = m.events)) return;
						t = (t || "").match(rnotwhite) || [""], f = t.length;
						while (f--) {
							u = rtypenamespace.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
							if (!p) {
								for (p in a) jQuery.event.remove(e, p + t[f], n, r, !0);
								continue
							}
							c = jQuery.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = a[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length;
							while (s--) l = h[s], (i || v === l.origType) && (!n || n.guid === l.guid) && (!u || u.test(l.namespace)) && (!r || r === l.selector || r === "**" && l.selector) && (h.splice(s, 1), l.selector && h.delegateCount--, c.remove && c.remove.call(e, l));
							o && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && jQuery.removeEvent(e, p, m.handle), delete a[p])
						}
						jQuery.isEmptyObject(a) && (delete m.handle, data_priv.remove(e, "events"))
					},
					trigger: function (e, t, n, r) {
						var i, s, o, u, a, f, l, c = [n || document],
							h = hasOwn.call(e, "type") ? e.type : e,
							p = hasOwn.call(e, "namespace") ? e.namespace.split(".") : [];
						s = o = n = n || document;
						if (n.nodeType === 3 || n.nodeType === 8) return;
						if (rfocusMorph.test(h + jQuery.event.triggered)) return;
						h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, e = e[jQuery.expando] ? e : new jQuery.Event(h, typeof e == "object" && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = n), t = t == null ? [e] : jQuery.makeArray(t, [e]), l = jQuery.event.special[h] || {};
						if (!r && l.trigger && l.trigger.apply(n, t) === !1) return;
						if (!r && !l.noBubble && !jQuery.isWindow(n)) {
							u = l.delegateType || h, rfocusMorph.test(u + h) || (s = s.parentNode);
							for (; s; s = s.parentNode) c.push(s), o = s;
							o === (n.ownerDocument || document) && c.push(o.defaultView || o.parentWindow || window)
						}
						i = 0;
						while ((s = c[i++]) && !e.isPropagationStopped()) e.type = i > 1 ? u : l.bindType || h, f = (data_priv.get(s, "events") || {})[e.type] && data_priv.get(s, "handle"), f && f.apply(s, t), f = a && s[a], f && f.apply && jQuery.acceptData(s) && (e.result = f.apply(s, t), e.result === !1 && e.preventDefault());
						return e.type = h, !r && !e.isDefaultPrevented() && (!l._default || l._default.apply(c.pop(), t) === !1) && jQuery.acceptData(n) && a && jQuery.isFunction(n[h]) && !jQuery.isWindow(n) && (o = n[a], o && (n[a] = null), jQuery.event.triggered = h, n[h](), jQuery.event.triggered = undefined, o && (n[a] = o)), e.result
					},
					dispatch: function (e) {
						e = jQuery.event.fix(e);
						var t, n, r, i, s, o = [],
							u = slice.call(arguments),
							a = (data_priv.get(this, "events") || {})[e.type] || [],
							f = jQuery.event.special[e.type] || {};
						u[0] = e, e.delegateTarget = this;
						if (f.preDispatch && f.preDispatch.call(this, e) === !1) return;
						o = jQuery.event.handlers.call(this, e, a), t = 0;
						while ((i = o[t++]) && !e.isPropagationStopped()) {
							e.currentTarget = i.elem, n = 0;
							while ((s = i.handlers[n++]) && !e.isImmediatePropagationStopped())
								if (!e.namespace_re || e.namespace_re.test(s.namespace)) e.handleObj = s, e.data = s.data, r = ((jQuery.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, u), r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())
						}
						return f.postDispatch && f.postDispatch.call(this, e), e.result
					},
					handlers: function (e, t) {
						var n, r, i, s, o = [],
							u = t.delegateCount,
							a = e.target;
						if (u && a.nodeType && (!e.button || e.type !== "click"))
							for (; a !== this; a = a.parentNode || this)
								if (a.disabled !== !0 || e.type !== "click") {
									r = [];
									for (n = 0; n < u; n++) s = t[n], i = s.selector + " ", r[i] === undefined && (r[i] = s.needsContext ? jQuery(i, this).index(a) >= 0 : jQuery.find(i, this, null, [a]).length), r[i] && r.push(s);
									r.length && o.push({
										elem: a,
										handlers: r
									})
								}
						return u < t.length && o.push({
							elem: this,
							handlers: t.slice(u)
						}), o
					},
					props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
					fixHooks: {},
					keyHooks: {
						props: "char charCode key keyCode".split(" "),
						filter: function (e, t) {
							return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
						}
					},
					mouseHooks: {
						props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
						filter: function (e, t) {
							var n, r, i, s = t.button;
							return e.pageX == null && t.clientX != null && (n = e.target.ownerDocument || document, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !e.which && s !== undefined && (e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), e
						}
					},
					fix: function (e) {
						if (e[jQuery.expando]) return e;
						var t, n, r, i = e.type,
							s = e,
							o = this.fixHooks[i];
						o || (this.fixHooks[i] = o = rmouseEvent.test(i) ? this.mouseHooks : rkeyEvent.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new jQuery.Event(s), t = r.length;
						while (t--) n = r[t], e[n] = s[n];
						return e.target || (e.target = document), e.target.nodeType === 3 && (e.target = e.target.parentNode), o.filter ? o.filter(e, s) : e
					},
					special: {
						load: {
							noBubble: !0
						},
						focus: {
							trigger: function () {
								if (this !== safeActiveElement() && this.focus) return this.focus(), !1
							},
							delegateType: "focusin"
						},
						blur: {
							trigger: function () {
								if (this === safeActiveElement() && this.blur) return this.blur(), !1
							},
							delegateType: "focusout"
						},
						click: {
							trigger: function () {
								if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) return this.click(), !1
							},
							_default: function (e) {
								return jQuery.nodeName(e.target, "a")
							}
						},
						beforeunload: {
							postDispatch: function (e) {
								e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
							}
						}
					},
					simulate: function (e, t, n, r) {
						var i = jQuery.extend(new jQuery.Event, n, {
							type: e,
							isSimulated: !0,
							originalEvent: {}
						});
						r ? jQuery.event.trigger(i, null, t) : jQuery.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
					}
				}, jQuery.removeEvent = function (e, t, n) {
					e.removeEventListener && e.removeEventListener(t, n, !1)
				}, jQuery.Event = function (e, t) {
					if (!(this instanceof jQuery.Event)) return new jQuery.Event(e, t);
					e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === !1 ? returnTrue : returnFalse) : this.type = e, t && jQuery.extend(this, t), this.timeStamp = e && e.timeStamp || jQuery.now(), this[jQuery.expando] = !0
				}, jQuery.Event.prototype = {
					isDefaultPrevented: returnFalse,
					isPropagationStopped: returnFalse,
					isImmediatePropagationStopped: returnFalse,
					preventDefault: function () {
						var e = this.originalEvent;
						this.isDefaultPrevented = returnTrue, e && e.preventDefault && e.preventDefault()
					},
					stopPropagation: function () {
						var e = this.originalEvent;
						this.isPropagationStopped = returnTrue, e && e.stopPropagation && e.stopPropagation()
					},
					stopImmediatePropagation: function () {
						var e = this.originalEvent;
						this.isImmediatePropagationStopped = returnTrue, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
					}
				}, jQuery.each({
					mouseenter: "mouseover",
					mouseleave: "mouseout",
					pointerenter: "pointerover",
					pointerleave: "pointerout"
				}, function (e, t) {
					jQuery.event.special[e] = {
						delegateType: t,
						bindType: t,
						handle: function (e) {
							var n, r = this,
								i = e.relatedTarget,
								s = e.handleObj;
							if (!i || i !== r && !jQuery.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
							return n
						}
					}
				}), support.focusinBubbles || jQuery.each({
					focus: "focusin",
					blur: "focusout"
				}, function (e, t) {
					var n = function (e) {
						jQuery.event.simulate(t, e.target, jQuery.event.fix(e), !0)
					};
					jQuery.event.special[t] = {
						setup: function () {
							var r = this.ownerDocument || this,
								i = data_priv.access(r, t);
							i || r.addEventListener(e, n, !0), data_priv.access(r, t, (i || 0) + 1)
						},
						teardown: function () {
							var r = this.ownerDocument || this,
								i = data_priv.access(r, t) - 1;
							i ? data_priv.access(r, t, i) : (r.removeEventListener(e, n, !0), data_priv.remove(r, t))
						}
					}
				}), jQuery.fn.extend({
					on: function (e, t, n, r, i) {
						var s, o;
						if (typeof e == "object") {
							typeof t != "string" && (n = n || t, t = undefined);
							for (o in e) this.on(o, t, n, e[o], i);
							return this
						}
						n == null && r == null ? (r = t, n = t = undefined) : r == null && (typeof t == "string" ? (r = n, n = undefined) : (r = n, n = t, t = undefined));
						if (r === !1) r = returnFalse;
						else if (!r) return this;
						return i === 1 && (s = r, r = function (e) {
							return jQuery().off(e), s.apply(this, arguments)
						}, r.guid = s.guid || (s.guid = jQuery.guid++)), this.each(function () {
							jQuery.event.add(this, e, r, n, t)
						})
					},
					one: function (e, t, n, r) {
						return this.on(e, t, n, r, 1)
					},
					off: function (e, t, n) {
						var r, i;
						if (e && e.preventDefault && e.handleObj) return r = e.handleObj, jQuery(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
						if (typeof e == "object") {
							for (i in e) this.off(i, t, e[i]);
							return this
						}
						if (t === !1 || typeof t == "function") n = t, t = undefined;
						return n === !1 && (n = returnFalse), this.each(function () {
							jQuery.event.remove(this, e, n, t)
						})
					},
					trigger: function (e, t) {
						return this.each(function () {
							jQuery.event.trigger(e, t, this)
						})
					},
					triggerHandler: function (e, t) {
						var n = this[0];
						if (n) return jQuery.event.trigger(e, t, n, !0)
					}
				});
				var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
					rtagName = /<([\w:]+)/,
					rhtml = /<|&#?\w+;/,
					rnoInnerhtml = /<(?:script|style|link)/i,
					rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
					rscriptType = /^$|\/(?:java|ecma)script/i,
					rscriptTypeMasked = /^true\/(.*)/,
					rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
					wrapMap = {
						option: [1, "<select multiple='multiple'>", "</select>"],
						thead: [1, "<table>", "</table>"],
						col: [2, "<table><colgroup>", "</colgroup></table>"],
						tr: [2, "<table><tbody>", "</tbody></table>"],
						td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
						_default: [0, "", ""]
					};
				wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, wrapMap.th = wrapMap.td, jQuery.extend({
					clone: function (e, t, n) {
						var r, i, s, o, u = e.cloneNode(!0),
							a = jQuery.contains(e.ownerDocument, e);
						if (!support.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !jQuery.isXMLDoc(e)) {
							o = getAll(u), s = getAll(e);
							for (r = 0, i = s.length; r < i; r++) fixInput(s[r], o[r])
						}
						if (t)
							if (n) {
								s = s || getAll(e), o = o || getAll(u);
								for (r = 0, i = s.length; r < i; r++) cloneCopyEvent(s[r], o[r])
							} else cloneCopyEvent(e, u);
						return o = getAll(u, "script"), o.length > 0 && setGlobalEval(o, !a && getAll(e, "script")), u
					},
					buildFragment: function (e, t, n, r) {
						var i, s, o, u, a, f, l = t.createDocumentFragment(),
							c = [],
							h = 0,
							p = e.length;
						for (; h < p; h++) {
							i = e[h];
							if (i || i === 0)
								if (jQuery.type(i) === "object") jQuery.merge(c, i.nodeType ? [i] : i);
								else if (!rhtml.test(i)) c.push(t.createTextNode(i));
							else {
								s = s || l.appendChild(t.createElement("div")), o = (rtagName.exec(i) || ["", ""])[1].toLowerCase(), u = wrapMap[o] || wrapMap._default, s.innerHTML = u[1] + i.replace(rxhtmlTag, "<$1></$2>") + u[2], f = u[0];
								while (f--) s = s.lastChild;
								jQuery.merge(c, s.childNodes), s = l.firstChild, s.textContent = ""
							}
						}
						l.textContent = "", h = 0;
						while (i = c[h++]) {
							if (r && jQuery.inArray(i, r) !== -1) continue;
							a = jQuery.contains(i.ownerDocument, i), s = getAll(l.appendChild(i), "script"), a && setGlobalEval(s);
							if (n) {
								f = 0;
								while (i = s[f++]) rscriptType.test(i.type || "") && n.push(i)
							}
						}
						return l
					},
					cleanData: function (e) {
						var t, n, r, i, s = jQuery.event.special,
							o = 0;
						for (;
							(n = e[o]) !== undefined; o++) {
							if (jQuery.acceptData(n)) {
								i = n[data_priv.expando];
								if (i && (t = data_priv.cache[i])) {
									if (t.events)
										for (r in t.events) s[r] ? jQuery.event.remove(n, r) : jQuery.removeEvent(n, r, t.handle);
									data_priv.cache[i] && delete data_priv.cache[i]
								}
							}
							delete data_user.cache[n[data_user.expando]]
						}
					}
				}), jQuery.fn.extend({
					text: function (e) {
						return access(this, function (e) {
							return e === undefined ? jQuery.text(this) : this.empty().each(function () {
								if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) this.textContent = e
							})
						}, null, e, arguments.length)
					},
					append: function () {
						return this.domManip(arguments, function (e) {
							if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
								var t = manipulationTarget(this, e);
								t.appendChild(e)
							}
						})
					},
					prepend: function () {
						return this.domManip(arguments, function (e) {
							if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
								var t = manipulationTarget(this, e);
								t.insertBefore(e, t.firstChild)
							}
						})
					},
					before: function () {
						return this.domManip(arguments, function (e) {
							this.parentNode && this.parentNode.insertBefore(e, this)
						})
					},
					after: function () {
						return this.domManip(arguments, function (e) {
							this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
						})
					},
					remove: function (e, t) {
						var n, r = e ? jQuery.filter(e, this) : this,
							i = 0;
						for (;
							(n = r[i]) != null; i++)!t && n.nodeType === 1 && jQuery.cleanData(getAll(n)), n.parentNode && (t && jQuery.contains(n.ownerDocument, n) && setGlobalEval(getAll(n, "script")), n.parentNode.removeChild(n));
						return this
					},
					empty: function () {
						var e, t = 0;
						for (;
							(e = this[t]) != null; t++) e.nodeType === 1 && (jQuery.cleanData(getAll(e, !1)), e.textContent = "");
						return this
					},
					clone: function (e, t) {
						return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
							return jQuery.clone(this, e, t)
						})
					},
					html: function (e) {
						return access(this, function (e) {
							var t = this[0] || {},
								n = 0,
								r = this.length;
							if (e === undefined && t.nodeType === 1) return t.innerHTML;
							if (typeof e == "string" && !rnoInnerhtml.test(e) && !wrapMap[(rtagName.exec(e) || ["", ""])[1].toLowerCase()]) {
								e = e.replace(rxhtmlTag, "<$1></$2>");
								try {
									for (; n < r; n++) t = this[n] || {}, t.nodeType === 1 && (jQuery.cleanData(getAll(t, !1)), t.innerHTML = e);
									t = 0
								} catch (i) {}
							}
							t && this.empty().append(e)
						}, null, e, arguments.length)
					},
					replaceWith: function () {
						var e = arguments[0];
						return this.domManip(arguments, function (t) {
							e = this.parentNode, jQuery.cleanData(getAll(this)), e && e.replaceChild(t, this)
						}), e && (e.length || e.nodeType) ? this : this.remove()
					},
					detach: function (e) {
						return this.remove(e, !0)
					},
					domManip: function (e, t) {
						e = concat.apply([], e);
						var n, r, i, s, o, u, a = 0,
							f = this.length,
							l = this,
							c = f - 1,
							h = e[0],
							p = jQuery.isFunction(h);
						if (p || f > 1 && typeof h == "string" && !support.checkClone && rchecked.test(h)) return this.each(function (n) {
							var r = l.eq(n);
							p && (e[0] = h.call(this, n, r.html())), r.domManip(e, t)
						});
						if (f) {
							n = jQuery.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, n.childNodes.length === 1 && (n = r);
							if (r) {
								i = jQuery.map(getAll(n, "script"), disableScript), s = i.length;
								for (; a < f; a++) o = n, a !== c && (o = jQuery.clone(o, !0, !0), s && jQuery.merge(i, getAll(o, "script"))), t.call(this[a], o, a);
								if (s) {
									u = i[i.length - 1].ownerDocument, jQuery.map(i, restoreScript);
									for (a = 0; a < s; a++) o = i[a], rscriptType.test(o.type || "") && !data_priv.access(o, "globalEval") && jQuery.contains(u, o) && (o.src ? jQuery._evalUrl && jQuery._evalUrl(o.src) : jQuery.globalEval(o.textContent.replace(rcleanScript, "")))
								}
							}
						}
						return this
					}
				}), jQuery.each({
					appendTo: "append",
					prependTo: "prepend",
					insertBefore: "before",
					insertAfter: "after",
					replaceAll: "replaceWith"
				}, function (e, t) {
					jQuery.fn[e] = function (e) {
						var n, r = [],
							i = jQuery(e),
							s = i.length - 1,
							o = 0;
						for (; o <= s; o++) n = o === s ? this : this.clone(!0), jQuery(i[o])[t](n), push.apply(r, n.get());
						return this.pushStack(r)
					}
				});
				var iframe, elemdisplay = {},
					rmargin = /^margin/,
					rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"),
					getStyles = function (e) {
						return e.ownerDocument.defaultView.getComputedStyle(e, null)
					};
				(function () {
					function s() {
						i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i.innerHTML = "", n.appendChild(r);
						var s = window.getComputedStyle(i, null);
						e = s.top !== "1%", t = s.width === "4px", n.removeChild(r)
					}
					var e, t, n = document.documentElement,
						r = document.createElement("div"),
						i = document.createElement("div");
					if (!i.style) return;
					i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", support.clearCloneStyle = i.style.backgroundClip === "content-box", r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(i), window.getComputedStyle && jQuery.extend(support, {
						pixelPosition: function () {
							return s(), e
						},
						boxSizingReliable: function () {
							return t == null && s(), t
						},
						reliableMarginRight: function () {
							var e, t = i.appendChild(document.createElement("div"));
							return t.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", i.style.width = "1px", n.appendChild(r), e = !parseFloat(window.getComputedStyle(t, null).marginRight), n.removeChild(r), e
						}
					})
				})(), jQuery.swap = function (e, t, n, r) {
					var i, s, o = {};
					for (s in t) o[s] = e.style[s], e.style[s] = t[s];
					i = n.apply(e, r || []);
					for (s in t) e.style[s] = o[s];
					return i
				};
				var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
					rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
					rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
					cssShow = {
						position: "absolute",
						visibility: "hidden",
						display: "block"
					},
					cssNormalTransform = {
						letterSpacing: "0",
						fontWeight: "400"
					},
					cssPrefixes = ["Webkit", "O", "Moz", "ms"];
				jQuery.extend({
					cssHooks: {
						opacity: {
							get: function (e, t) {
								if (t) {
									var n = curCSS(e, "opacity");
									return n === "" ? "1" : n
								}
							}
						}
					},
					cssNumber: {
						columnCount: !0,
						fillOpacity: !0,
						flexGrow: !0,
						flexShrink: !0,
						fontWeight: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0
					},
					cssProps: {
						"float": "cssFloat"
					},
					style: function (e, t, n, r) {
						if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
						var i, s, o, u = jQuery.camelCase(t),
							a = e.style;
						t = jQuery.cssProps[u] || (jQuery.cssProps[u] = vendorPropName(a, u)), o = jQuery.cssHooks[t] || jQuery.cssHooks[u];
						if (n === undefined) return o && "get" in o && (i = o.get(e, !1, r)) !== undefined ? i : a[t];
						s = typeof n, s === "string" && (i = rrelNum.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(jQuery.css(e, t)), s = "number");
						if (n == null || n !== n) return;
						s === "number" && !jQuery.cssNumber[u] && (n += "px"), !support.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (a[t] = "inherit");
						if (!o || !("set" in o) || (n = o.set(e, n, r)) !== undefined) a[t] = n
					},
					css: function (e, t, n, r) {
						var i, s, o, u = jQuery.camelCase(t);
						return t = jQuery.cssProps[u] || (jQuery.cssProps[u] = vendorPropName(e.style, u)), o = jQuery.cssHooks[t] || jQuery.cssHooks[u], o && "get" in o && (i = o.get(e, !0, n)), i === undefined && (i = curCSS(e, t, r)), i === "normal" && t in cssNormalTransform && (i = cssNormalTransform[t]), n === "" || n ? (s = parseFloat(i), n === !0 || jQuery.isNumeric(s) ? s || 0 : i) : i
					}
				}), jQuery.each(["height", "width"], function (e, t) {
					jQuery.cssHooks[t] = {
						get: function (e, n, r) {
							if (n) return rdisplayswap.test(jQuery.css(e, "display")) && e.offsetWidth === 0 ? jQuery.swap(e, cssShow, function () {
								return getWidthOrHeight(e, t, r)
							}) : getWidthOrHeight(e, t, r)
						},
						set: function (e, n, r) {
							var i = r && getStyles(e);
							return setPositiveNumber(e, n, r ? augmentWidthOrHeight(e, t, r, jQuery.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
						}
					}
				}), jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (e, t) {
					if (t) return jQuery.swap(e, {
						display: "inline-block"
					}, curCSS, [e, "marginRight"])
				}), jQuery.each({
					margin: "",
					padding: "",
					border: "Width"
				}, function (e, t) {
					jQuery.cssHooks[e + t] = {
						expand: function (n) {
							var r = 0,
								i = {},
								s = typeof n == "string" ? n.split(" ") : [n];
							for (; r < 4; r++) i[e + cssExpand[r] + t] = s[r] || s[r - 2] || s[0];
							return i
						}
					}, rmargin.test(e) || (jQuery.cssHooks[e + t].set = setPositiveNumber)
				}), jQuery.fn.extend({
					css: function (e, t) {
						return access(this, function (e, t, n) {
							var r, i, s = {},
								o = 0;
							if (jQuery.isArray(t)) {
								r = getStyles(e), i = t.length;
								for (; o < i; o++) s[t[o]] = jQuery.css(e, t[o], !1, r);
								return s
							}
							return n !== undefined ? jQuery.style(e, t, n) : jQuery.css(e, t)
						}, e, t, arguments.length > 1)
					},
					show: function () {
						return showHide(this, !0)
					},
					hide: function () {
						return showHide(this)
					},
					toggle: function (e) {
						return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function () {
							isHidden(this) ? jQuery(this).show() : jQuery(this).hide()
						})
					}
				}), jQuery.Tween = Tween, Tween.prototype = {
					constructor: Tween,
					init: function (e, t, n, r, i, s) {
						this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (jQuery.cssNumber[n] ? "" : "px")
					},
					cur: function () {
						var e = Tween.propHooks[this.prop];
						return e && e.get ? e.get(this) : Tween.propHooks._default.get(this)
					},
					run: function (e) {
						var t, n = Tween.propHooks[this.prop];
						return this.options.duration ? this.pos = t = jQuery.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Tween.propHooks._default.set(this), this
					}
				}, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
					_default: {
						get: function (e) {
							var t;
							return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = jQuery.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
						},
						set: function (e) {
							jQuery.fx.step[e.prop] ? jQuery.fx.step[e.prop](e) : e.elem.style && (e.elem.style[jQuery.cssProps[e.prop]] != null || jQuery.cssHooks[e.prop]) ? jQuery.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
						}
					}
				}, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
					set: function (e) {
						e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
					}
				}, jQuery.easing = {
					linear: function (e) {
						return e
					},
					swing: function (e) {
						return .5 - Math.cos(e * Math.PI) / 2
					}
				}, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
				var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
					rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
					rrun = /queueHooks$/,
					animationPrefilters = [defaultPrefilter],
					tweeners = {
						"*": [
							function (e, t) {
								var n = this.createTween(e, t),
									r = n.cur(),
									i = rfxnum.exec(t),
									s = i && i[3] || (jQuery.cssNumber[e] ? "" : "px"),
									o = (jQuery.cssNumber[e] || s !== "px" && +r) && rfxnum.exec(jQuery.css(n.elem, e)),
									u = 1,
									a = 20;
								if (o && o[3] !== s) {
									s = s || o[3], i = i || [], o = +r || 1;
									do u = u || ".5", o /= u, jQuery.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && u !== 1 && --a)
								}
								return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
							}]
					};
				jQuery.Animation = jQuery.extend(Animation, {
					tweener: function (e, t) {
						jQuery.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
						var n, r = 0,
							i = e.length;
						for (; r < i; r++) n = e[r], tweeners[n] = tweeners[n] || [], tweeners[n].unshift(t)
					},
					prefilter: function (e, t) {
						t ? animationPrefilters.unshift(e) : animationPrefilters.push(e)
					}
				}), jQuery.speed = function (e, t, n) {
					var r = e && typeof e == "object" ? jQuery.extend({}, e) : {
						complete: n || !n && t || jQuery.isFunction(e) && e,
						duration: e,
						easing: n && t || t && !jQuery.isFunction(t) && t
					};
					r.duration = jQuery.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in jQuery.fx.speeds ? jQuery.fx.speeds[r.duration] : jQuery.fx.speeds._default;
					if (r.queue == null || r.queue === !0) r.queue = "fx";
					return r.old = r.complete, r.complete = function () {
						jQuery.isFunction(r.old) && r.old.call(this), r.queue && jQuery.dequeue(this, r.queue)
					}, r
				}, jQuery.fn.extend({
					fadeTo: function (e, t, n, r) {
						return this.filter(isHidden).css("opacity", 0).show().end().animate({
							opacity: t
						}, e, n, r)
					},
					animate: function (e, t, n, r) {
						var i = jQuery.isEmptyObject(e),
							s = jQuery.speed(t, n, r),
							o = function () {
								var t = Animation(this, jQuery.extend({}, e), s);
								(i || data_priv.get(this, "finish")) && t.stop(!0)
							};
						return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
					},
					stop: function (e, t, n) {
						var r = function (e) {
							var t = e.stop;
							delete e.stop, t(n)
						};
						return typeof e != "string" && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
							var t = !0,
								i = e != null && e + "queueHooks",
								s = jQuery.timers,
								o = data_priv.get(this);
							if (i) o[i] && o[i].stop && r(o[i]);
							else
								for (i in o) o[i] && o[i].stop && rrun.test(i) && r(o[i]);
							for (i = s.length; i--;) s[i].elem === this && (e == null || s[i].queue === e) && (s[i].anim.stop(n), t = !1, s.splice(i, 1));
							(t || !n) && jQuery.dequeue(this, e)
						})
					},
					finish: function (e) {
						return e !== !1 && (e = e || "fx"), this.each(function () {
							var t, n = data_priv.get(this),
								r = n[e + "queue"],
								i = n[e + "queueHooks"],
								s = jQuery.timers,
								o = r ? r.length : 0;
							n.finish = !0, jQuery.queue(this, e, []), i && i.stop && i.stop.call(this, !0);
							for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
							for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
							delete n.finish
						})
					}
				}), jQuery.each(["toggle", "show", "hide"], function (e, t) {
					var n = jQuery.fn[t];
					jQuery.fn[t] = function (e, r, i) {
						return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(genFx(t, !0), e, r, i)
					}
				}), jQuery.each({
					slideDown: genFx("show"),
					slideUp: genFx("hide"),
					slideToggle: genFx("toggle"),
					fadeIn: {
						opacity: "show"
					},
					fadeOut: {
						opacity: "hide"
					},
					fadeToggle: {
						opacity: "toggle"
					}
				}, function (e, t) {
					jQuery.fn[e] = function (e, n, r) {
						return this.animate(t, e, n, r)
					}
				}), jQuery.timers = [], jQuery.fx.tick = function () {
					var e, t = 0,
						n = jQuery.timers;
					fxNow = jQuery.now();
					for (; t < n.length; t++) e = n[t], !e() && n[t] === e && n.splice(t--, 1);
					n.length || jQuery.fx.stop(), fxNow = undefined
				}, jQuery.fx.timer = function (e) {
					jQuery.timers.push(e), e() ? jQuery.fx.start() : jQuery.timers.pop()
				}, jQuery.fx.interval = 13, jQuery.fx.start = function () {
					timerId || (timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval))
				}, jQuery.fx.stop = function () {
					clearInterval(timerId), timerId = null
				}, jQuery.fx.speeds = {
					slow: 600,
					fast: 200,
					_default: 400
				}, jQuery.fn.delay = function (e, t) {
					return e = jQuery.fx ? jQuery.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
						var r = setTimeout(t, e);
						n.stop = function () {
							clearTimeout(r)
						}
					})
				},
				function () {
					var e = document.createElement("input"),
						t = document.createElement("select"),
						n = t.appendChild(document.createElement("option"));
					e.type = "checkbox", support.checkOn = e.value !== "", support.optSelected = n.selected, t.disabled = !0, support.optDisabled = !n.disabled, e = document.createElement("input"), e.value = "t", e.type = "radio", support.radioValue = e.value === "t"
				}();
				var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle;
				jQuery.fn.extend({
					attr: function (e, t) {
						return access(this, jQuery.attr, e, t, arguments.length > 1)
					},
					removeAttr: function (e) {
						return this.each(function () {
							jQuery.removeAttr(this, e)
						})
					}
				}), jQuery.extend({
					attr: function (e, t, n) {
						var r, i, s = e.nodeType;
						if (!e || s === 3 || s === 8 || s === 2) return;
						if (typeof e.getAttribute === strundefined) return jQuery.prop(e, t, n);
						if (s !== 1 || !jQuery.isXMLDoc(e)) t = t.toLowerCase(), r = jQuery.attrHooks[t] || (jQuery.expr.match.bool.test(t) ? boolHook : nodeHook);
						if (n === undefined) return r && "get" in r && (i = r.get(e, t)) !== null ? i : (i = jQuery.find.attr(e, t), i == null ? undefined : i);
						if (n !== null) return r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n);
						jQuery.removeAttr(e, t)
					},
					removeAttr: function (e, t) {
						var n, r, i = 0,
							s = t && t.match(rnotwhite);
						if (s && e.nodeType === 1)
							while (n = s[i++]) r = jQuery.propFix[n] || n, jQuery.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
					},
					attrHooks: {
						type: {
							set: function (e, t) {
								if (!support.radioValue && t === "radio" && jQuery.nodeName(e, "input")) {
									var n = e.value;
									return e.setAttribute("type", t), n && (e.value = n), t
								}
							}
						}
					}
				}), boolHook = {
					set: function (e, t, n) {
						return t === !1 ? jQuery.removeAttr(e, n) : e.setAttribute(n, n), n
					}
				}, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (e, t) {
					var n = attrHandle[t] || jQuery.find.attr;
					attrHandle[t] = function (e, t, r) {
						var i, s;
						return r || (s = attrHandle[t], attrHandle[t] = i, i = n(e, t, r) != null ? t.toLowerCase() : null, attrHandle[t] = s), i
					}
				});
				var rfocusable = /^(?:input|select|textarea|button)$/i;
				jQuery.fn.extend({
					prop: function (e, t) {
						return access(this, jQuery.prop, e, t, arguments.length > 1)
					},
					removeProp: function (e) {
						return this.each(function () {
							delete this[jQuery.propFix[e] || e]
						})
					}
				}), jQuery.extend({
					propFix: {
						"for": "htmlFor",
						"class": "className"
					},
					prop: function (e, t, n) {
						var r, i, s, o = e.nodeType;
						if (!e || o === 3 || o === 8 || o === 2) return;
						return s = o !== 1 || !jQuery.isXMLDoc(e), s && (t = jQuery.propFix[t] || t, i = jQuery.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && (r = i.get(e, t)) !== null ? r : e[t]
					},
					propHooks: {
						tabIndex: {
							get: function (e) {
								return e.hasAttribute("tabindex") || rfocusable.test(e.nodeName) || e.href ? e.tabIndex : -1
							}
						}
					}
				}), support.optSelected || (jQuery.propHooks.selected = {
					get: function (e) {
						var t = e.parentNode;
						return t && t.parentNode && t.parentNode.selectedIndex, null
					}
				}), jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
					jQuery.propFix[this.toLowerCase()] = this
				});
				var rclass = /[\t\r\n\f]/g;
				jQuery.fn.extend({
					addClass: function (e) {
						var t, n, r, i, s, o, u = typeof e == "string" && e,
							a = 0,
							f = this.length;
						if (jQuery.isFunction(e)) return this.each(function (t) {
							jQuery(this).addClass(e.call(this, t, this.className))
						});
						if (u) {
							t = (e || "").match(rnotwhite) || [];
							for (; a < f; a++) {
								n = this[a], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(rclass, " ") : " ");
								if (r) {
									s = 0;
									while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
									o = jQuery.trim(r), n.className !== o && (n.className = o)
								}
							}
						}
						return this
					},
					removeClass: function (e) {
						var t, n, r, i, s, o, u = arguments.length === 0 || typeof e == "string" && e,
							a = 0,
							f = this.length;
						if (jQuery.isFunction(e)) return this.each(function (t) {
							jQuery(this).removeClass(e.call(this, t, this.className))
						});
						if (u) {
							t = (e || "").match(rnotwhite) || [];
							for (; a < f; a++) {
								n = this[a], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(rclass, " ") : "");
								if (r) {
									s = 0;
									while (i = t[s++])
										while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
									o = e ? jQuery.trim(r) : "", n.className !== o && (n.className = o)
								}
							}
						}
						return this
					},
					toggleClass: function (e, t) {
						var n = typeof e;
						return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : jQuery.isFunction(e) ? this.each(function (n) {
							jQuery(this).toggleClass(e.call(this, n, this.className, t), t)
						}) : this.each(function () {
							if (n === "string") {
								var t, r = 0,
									i = jQuery(this),
									s = e.match(rnotwhite) || [];
								while (t = s[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
							} else if (n === strundefined || n === "boolean") this.className && data_priv.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : data_priv.get(this, "__className__") || ""
						})
					},
					hasClass: function (e) {
						var t = " " + e + " ",
							n = 0,
							r = this.length;
						for (; n < r; n++)
							if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(rclass, " ").indexOf(t) >= 0) return !0;
						return !1
					}
				});
				var rreturn = /\r/g;
				jQuery.fn.extend({
					val: function (e) {
						var t, n, r, i = this[0];
						if (!arguments.length) {
							if (i) return t = jQuery.valHooks[i.type] || jQuery.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, typeof n == "string" ? n.replace(rreturn, "") : n == null ? "" : n);
							return
						}
						return r = jQuery.isFunction(e), this.each(function (n) {
							var i;
							if (this.nodeType !== 1) return;
							r ? i = e.call(this, n, jQuery(this).val()) : i = e, i == null ? i = "" : typeof i == "number" ? i += "" : jQuery.isArray(i) && (i = jQuery.map(i, function (e) {
								return e == null ? "" : e + ""
							})), t = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
							if (!t || !("set" in t) || t.set(this, i, "value") === undefined) this.value = i
						})
					}
				}), jQuery.extend({
					valHooks: {
						option: {
							get: function (e) {
								var t = jQuery.find.attr(e, "value");
								return t != null ? t : jQuery.trim(jQuery.text(e))
							}
						},
						select: {
							get: function (e) {
								var t, n, r = e.options,
									i = e.selectedIndex,
									s = e.type === "select-one" || i < 0,
									o = s ? null : [],
									u = s ? i + 1 : r.length,
									a = i < 0 ? u : s ? i : 0;
								for (; a < u; a++) {
									n = r[a];
									if ((n.selected || a === i) && (support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !jQuery.nodeName(n.parentNode, "optgroup"))) {
										t = jQuery(n).val();
										if (s) return t;
										o.push(t)
									}
								}
								return o
							},
							set: function (e, t) {
								var n, r, i = e.options,
									s = jQuery.makeArray(t),
									o = i.length;
								while (o--) {
									r = i[o];
									if (r.selected = jQuery.inArray(r.value, s) >= 0) n = !0
								}
								return n || (e.selectedIndex = -1), s
							}
						}
					}
				}), jQuery.each(["radio", "checkbox"], function () {
					jQuery.valHooks[this] = {
						set: function (e, t) {
							if (jQuery.isArray(t)) return e.checked = jQuery.inArray(jQuery(e).val(), t) >= 0
						}
					}, support.checkOn || (jQuery.valHooks[this].get = function (e) {
						return e.getAttribute("value") === null ? "on" : e.value
					})
				}), jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
					jQuery.fn[t] = function (e, n) {
						return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
					}
				}), jQuery.fn.extend({
					hover: function (e, t) {
						return this.mouseenter(e).mouseleave(t || e)
					},
					bind: function (e, t, n) {
						return this.on(e, null, t, n)
					},
					unbind: function (e, t) {
						return this.off(e, null, t)
					},
					delegate: function (e, t, n, r) {
						return this.on(t, e, n, r)
					},
					undelegate: function (e, t, n) {
						return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
					}
				});
				var nonce = jQuery.now(),
					rquery = /\?/;
				jQuery.parseJSON = function (e) {
					return JSON.parse(e + "")
				}, jQuery.parseXML = function (e) {
					var t, n;
					if (!e || typeof e != "string") return null;
					try {
						n = new DOMParser, t = n.parseFromString(e, "text/xml")
					} catch (r) {
						t = undefined
					}
					return (!t || t.getElementsByTagName("parsererror").length) && jQuery.error("Invalid XML: " + e), t
				};
				var ajaxLocParts, ajaxLocation, rhash = /#.*$/,
					rts = /([?&])_=[^&]*/,
					rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
					rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
					rnoContent = /^(?:GET|HEAD)$/,
					rprotocol = /^\/\//,
					rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
					prefilters = {},
					transports = {},
					allTypes = "*/".concat("*");
				try {
					ajaxLocation = location.href
				} catch (e) {
					ajaxLocation = document.createElement("a"), ajaxLocation.href = "", ajaxLocation = ajaxLocation.href
				}
				ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [], jQuery.extend({
					active: 0,
					lastModified: {},
					etag: {},
					ajaxSettings: {
						url: ajaxLocation,
						type: "GET",
						isLocal: rlocalProtocol.test(ajaxLocParts[1]),
						global: !0,
						processData: !0,
						async: !0,
						contentType: "application/x-www-form-urlencoded; charset=UTF-8",
						accepts: {
							"*": allTypes,
							text: "text/plain",
							html: "text/html",
							xml: "application/xml, text/xml",
							json: "application/json, text/javascript"
						},
						contents: {
							xml: /xml/,
							html: /html/,
							json: /json/
						},
						responseFields: {
							xml: "responseXML",
							text: "responseText",
							json: "responseJSON"
						},
						converters: {
							"* text": String,
							"text html": !0,
							"text json": jQuery.parseJSON,
							"text xml": jQuery.parseXML
						},
						flatOptions: {
							url: !0,
							context: !0
						}
					},
					ajaxSetup: function (e, t) {
						return t ? ajaxExtend(ajaxExtend(e, jQuery.ajaxSettings), t) : ajaxExtend(jQuery.ajaxSettings, e)
					},
					ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
					ajaxTransport: addToPrefiltersOrTransports(transports),
					ajax: function (e, t) {
						function S(e, t, s, u) {
							var f, m, g, b, E, S = t;
							if (y === 2) return;
							y = 2, o && clearTimeout(o), n = undefined, i = u || "", w.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || e === 304, s && (b = ajaxHandleResponses(l, w, s)), b = ajaxConvert(l, b, w, f);
							if (f) l.ifModified && (E = w.getResponseHeader("Last-Modified"), E && (jQuery.lastModified[r] = E), E = w.getResponseHeader("etag"), E && (jQuery.etag[r] = E)), e === 204 || l.type === "HEAD" ? S = "nocontent" : e === 304 ? S = "notmodified" : (S = b.state, m = b.data, g = b.error, f = !g);
							else {
								g = S;
								if (e || !S) S = "error", e < 0 && (e = 0)
							}
							w.status = e, w.statusText = (t || S) + "", f ? p.resolveWith(c, [m, S, w]) : p.rejectWith(c, [w, S, g]), w.statusCode(v), v = undefined, a && h.trigger(f ? "ajaxSuccess" : "ajaxError", [w, l, f ? m : g]), d.fireWith(c, [w, S]), a && (h.trigger("ajaxComplete", [w, l]), --jQuery.active || jQuery.event.trigger("ajaxStop"))
						}
						typeof e == "object" && (t = e, e = undefined), t = t || {};
						var n, r, i, s, o, u, a, f, l = jQuery.ajaxSetup({}, t),
							c = l.context || l,
							h = l.context && (c.nodeType || c.jquery) ? jQuery(c) : jQuery.event,
							p = jQuery.Deferred(),
							d = jQuery.Callbacks("once memory"),
							v = l.statusCode || {},
							m = {},
							g = {},
							y = 0,
							b = "canceled",
							w = {
								readyState: 0,
								getResponseHeader: function (e) {
									var t;
									if (y === 2) {
										if (!s) {
											s = {};
											while (t = rheaders.exec(i)) s[t[1].toLowerCase()] = t[2]
										}
										t = s[e.toLowerCase()]
									}
									return t == null ? null : t
								},
								getAllResponseHeaders: function () {
									return y === 2 ? i : null
								},
								setRequestHeader: function (e, t) {
									var n = e.toLowerCase();
									return y || (e = g[n] = g[n] || e, m[e] = t), this
								},
								overrideMimeType: function (e) {
									return y || (l.mimeType = e), this
								},
								statusCode: function (e) {
									var t;
									if (e)
										if (y < 2)
											for (t in e) v[t] = [v[t], e[t]];
										else w.always(e[w.status]);
									return this
								},
								abort: function (e) {
									var t = e || b;
									return n && n.abort(t), S(0, t), this
								}
							};
						p.promise(w).complete = d.add, w.success = w.done, w.error = w.fail, l.url = ((e || l.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//"), l.type = t.method || t.type || l.method || l.type, l.dataTypes = jQuery.trim(l.dataType || "*").toLowerCase().match(rnotwhite) || [""], l.crossDomain == null && (u = rurl.exec(l.url.toLowerCase()), l.crossDomain = !(!u || u[1] === ajaxLocParts[1] && u[2] === ajaxLocParts[2] && (u[3] || (u[1] === "http:" ? "80" : "443")) === (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443")))), l.data && l.processData && typeof l.data != "string" && (l.data = jQuery.param(l.data, l.traditional)), inspectPrefiltersOrTransports(prefilters, l, t, w);
						if (y === 2) return w;
						a = l.global, a && jQuery.active++ === 0 && jQuery.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !rnoContent.test(l.type), r = l.url, l.hasContent || (l.data && (r = l.url += (rquery.test(r) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = rts.test(r) ? r.replace(rts, "$1_=" + nonce++) : r + (rquery.test(r) ? "&" : "?") + "_=" + nonce++)), l.ifModified && (jQuery.lastModified[r] && w.setRequestHeader("If-Modified-Since", jQuery.lastModified[r]), jQuery.etag[r] && w.setRequestHeader("If-None-Match", jQuery.etag[r])), (l.data && l.hasContent && l.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : l.accepts["*"]);
						for (f in l.headers) w.setRequestHeader(f, l.headers[f]);
						if (!l.beforeSend || l.beforeSend.call(c, w, l) !== !1 && y !== 2) {
							b = "abort";
							for (f in {
								success: 1,
								error: 1,
								complete: 1
							}) w[f](l[f]);
							n = inspectPrefiltersOrTransports(transports, l, t, w);
							if (!n) S(-1, "No Transport");
							else {
								w.readyState = 1, a && h.trigger("ajaxSend", [w, l]), l.async && l.timeout > 0 && (o = setTimeout(function () {
									w.abort("timeout")
								}, l.timeout));
								try {
									y = 1, n.send(m, S)
								} catch (E) {
									if (!(y < 2)) throw E;
									S(-1, E)
								}
							}
							return w
						}
						return w.abort()
					},
					getJSON: function (e, t, n) {
						return jQuery.get(e, t, n, "json")
					},
					getScript: function (e, t) {
						return jQuery.get(e, undefined, t, "script")
					}
				}), jQuery.each(["get", "post"], function (e, t) {
					jQuery[t] = function (e, n, r, i) {
						return jQuery.isFunction(n) && (i = i || r, r = n, n = undefined), jQuery.ajax({
							url: e,
							type: t,
							dataType: i,
							data: n,
							success: r
						})
					}
				}), jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
					jQuery.fn[t] = function (e) {
						return this.on(t, e)
					}
				}), jQuery._evalUrl = function (e) {
					return jQuery.ajax({
						url: e,
						type: "GET",
						dataType: "script",
						async: !1,
						global: !1,
						"throws": !0
					})
				}, jQuery.fn.extend({
					wrapAll: function (e) {
						var t;
						return jQuery.isFunction(e) ? this.each(function (t) {
							jQuery(this).wrapAll(e.call(this, t))
						}) : (this[0] && (t = jQuery(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
							var e = this;
							while (e.firstElementChild) e = e.firstElementChild;
							return e
						}).append(this)), this)
					},
					wrapInner: function (e) {
						return jQuery.isFunction(e) ? this.each(function (t) {
							jQuery(this).wrapInner(e.call(this, t))
						}) : this.each(function () {
							var t = jQuery(this),
								n = t.contents();
							n.length ? n.wrapAll(e) : t.append(e)
						})
					},
					wrap: function (e) {
						var t = jQuery.isFunction(e);
						return this.each(function (n) {
							jQuery(this).wrapAll(t ? e.call(this, n) : e)
						})
					},
					unwrap: function () {
						return this.parent().each(function () {
							jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes)
						}).end()
					}
				}), jQuery.expr.filters.hidden = function (e) {
					return e.offsetWidth <= 0 && e.offsetHeight <= 0
				}, jQuery.expr.filters.visible = function (e) {
					return !jQuery.expr.filters.hidden(e)
				};
				var r20 = /%20/g,
					rbracket = /\[\]$/,
					rCRLF = /\r?\n/g,
					rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
					rsubmittable = /^(?:input|select|textarea|keygen)/i;
				jQuery.param = function (e, t) {
					var n, r = [],
						i = function (e, t) {
							t = jQuery.isFunction(t) ? t() : t == null ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
						};
					t === undefined && (t = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional);
					if (jQuery.isArray(e) || e.jquery && !jQuery.isPlainObject(e)) jQuery.each(e, function () {
						i(this.name, this.value)
					});
					else
						for (n in e) buildParams(n, e[n], t, i);
					return r.join("&").replace(r20, "+")
				}, jQuery.fn.extend({
					serialize: function () {
						return jQuery.param(this.serializeArray())
					},
					serializeArray: function () {
						return this.map(function () {
							var e = jQuery.prop(this, "elements");
							return e ? jQuery.makeArray(e) : this
						}).filter(function () {
							var e = this.type;
							return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(e) && (this.checked || !rcheckableType.test(e))
						}).map(function (e, t) {
							var n = jQuery(this).val();
							return n == null ? null : jQuery.isArray(n) ? jQuery.map(n, function (e) {
								return {
									name: t.name,
									value: e.replace(rCRLF, "\r\n")
								}
							}) : {
								name: t.name,
								value: n.replace(rCRLF, "\r\n")
							}
						}).get()
					}
				}), jQuery.ajaxSettings.xhr = function () {
					try {
						return new XMLHttpRequest
					} catch (e) {}
				};
				var xhrId = 0,
					xhrCallbacks = {},
					xhrSuccessStatus = {
						0: 200,
						1223: 204
					},
					xhrSupported = jQuery.ajaxSettings.xhr();
				window.ActiveXObject && jQuery(window).on("unload", function () {
					for (var e in xhrCallbacks) xhrCallbacks[e]()
				}), support.cors = !!xhrSupported && "withCredentials" in xhrSupported, support.ajax = xhrSupported = !!xhrSupported, jQuery.ajaxTransport(function (e) {
					var t;
					if (support.cors || xhrSupported && !e.crossDomain) return {
						send: function (n, r) {
							var i, s = e.xhr(),
								o = ++xhrId;
							s.open(e.type, e.url, e.async, e.username, e.password);
							if (e.xhrFields)
								for (i in e.xhrFields) s[i] = e.xhrFields[i];
							e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), !e.crossDomain && !n["X-Requested-With"] && (n["X-Requested-With"] = "XMLHttpRequest");
							for (i in n) s.setRequestHeader(i, n[i]);
							t = function (e) {
								return function () {
									t && (delete xhrCallbacks[o], t = s.onload = s.onerror = null, e === "abort" ? s.abort() : e === "error" ? r(s.status, s.statusText) : r(xhrSuccessStatus[s.status] || s.status, s.statusText, typeof s.responseText == "string" ? {
										text: s.responseText
									} : undefined, s.getAllResponseHeaders()))
								}
							}, s.onload = t(), s.onerror = t("error"), t = xhrCallbacks[o] = t("abort");
							try {
								s.send(e.hasContent && e.data || null)
							} catch (u) {
								if (t) throw u
							}
						},
						abort: function () {
							t && t()
						}
					}
				}), jQuery.ajaxSetup({
					accepts: {
						script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
					},
					contents: {
						script: /(?:java|ecma)script/
					},
					converters: {
						"text script": function (e) {
							return jQuery.globalEval(e), e
						}
					}
				}), jQuery.ajaxPrefilter("script", function (e) {
					e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET")
				}), jQuery.ajaxTransport("script", function (e) {
					if (e.crossDomain) {
						var t, n;
						return {
							send: function (r, i) {
								t = jQuery("<script>").prop({
									async: !0,
									charset: e.scriptCharset,
									src: e.url
								}).on("load error", n = function (e) {
									t.remove(), n = null, e && i(e.type === "error" ? 404 : 200, e.type)
								}), document.head.appendChild(t[0])
							},
							abort: function () {
								n && n()
							}
						}
					}
				});
				var oldCallbacks = [],
					rjsonp = /(=)\?(?=&|$)|\?\?/;
				jQuery.ajaxSetup({
					jsonp: "callback",
					jsonpCallback: function () {
						var e = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
						return this[e] = !0, e
					}
				}), jQuery.ajaxPrefilter("json jsonp", function (e, t, n) {
					var r, i, s, o = e.jsonp !== !1 && (rjsonp.test(e.url) ? "url" : typeof e.data == "string" && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(e.data) && "data");
					if (o || e.dataTypes[0] === "jsonp") return r = e.jsonpCallback = jQuery.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(rjsonp, "$1" + r) : e.jsonp !== !1 && (e.url += (rquery.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
						return s || jQuery.error(r + " was not called"), s[0]
					}, e.dataTypes[0] = "json", i = window[r], window[r] = function () {
						s = arguments
					}, n.always(function () {
						window[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, oldCallbacks.push(r)), s && jQuery.isFunction(i) && i(s[0]), s = i = undefined
					}), "script"
				}), jQuery.parseHTML = function (e, t, n) {
					if (!e || typeof e != "string") return null;
					typeof t == "boolean" && (n = t, t = !1), t = t || document;
					var r = rsingleTag.exec(e),
						i = !n && [];
					return r ? [t.createElement(r[1])] : (r = jQuery.buildFragment([e], t, i), i && i.length && jQuery(i).remove(), jQuery.merge([], r.childNodes))
				};
				var _load = jQuery.fn.load;
				jQuery.fn.load = function (e, t, n) {
					if (typeof e != "string" && _load) return _load.apply(this, arguments);
					var r, i, s, o = this,
						u = e.indexOf(" ");
					return u >= 0 && (r = jQuery.trim(e.slice(u)), e = e.slice(0, u)), jQuery.isFunction(t) ? (n = t, t = undefined) : t && typeof t == "object" && (i = "POST"), o.length > 0 && jQuery.ajax({
						url: e,
						type: i,
						dataType: "html",
						data: t
					}).done(function (e) {
						s = arguments, o.html(r ? jQuery("<div>").append(jQuery.parseHTML(e)).find(r) : e)
					}).complete(n && function (e, t) {
						o.each(n, s || [e.responseText, t, e])
					}), this
				}, jQuery.expr.filters.animated = function (e) {
					return jQuery.grep(jQuery.timers, function (t) {
						return e === t.elem
					}).length
				};
				var docElem = window.document.documentElement;
				jQuery.offset = {
					setOffset: function (e, t, n) {
						var r, i, s, o, u, a, f, l = jQuery.css(e, "position"),
							c = jQuery(e),
							h = {};
						l === "static" && (e.style.position = "relative"), u = c.offset(), s = jQuery.css(e, "top"), a = jQuery.css(e, "left"), f = (l === "absolute" || l === "fixed") && (s + a).indexOf("auto") > -1, f ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(a) || 0), jQuery.isFunction(t) && (t = t.call(e, n, u)), t.top != null && (h.top = t.top - u.top + o), t.left != null && (h.left = t.left - u.left + i), "using" in t ? t.using.call(e, h) : c.css(h)
					}
				}, jQuery.fn.extend({
					offset: function (e) {
						if (arguments.length) return e === undefined ? this : this.each(function (t) {
							jQuery.offset.setOffset(this, e, t)
						});
						var t, n, r = this[0],
							i = {
								top: 0,
								left: 0
							},
							s = r && r.ownerDocument;
						if (!s) return;
						return t = s.documentElement, jQuery.contains(t, r) ? (typeof r.getBoundingClientRect !== strundefined && (i = r.getBoundingClientRect()), n = getWindow(s), {
							top: i.top + n.pageYOffset - t.clientTop,
							left: i.left + n.pageXOffset - t.clientLeft
						}) : i
					},
					position: function () {
						if (!this[0]) return;
						var e, t, n = this[0],
							r = {
								top: 0,
								left: 0
							};
						return jQuery.css(n, "position") === "fixed" ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), jQuery.nodeName(e[0], "html") || (r = e.offset()), r.top += jQuery.css(e[0], "borderTopWidth", !0), r.left += jQuery.css(e[0], "borderLeftWidth", !0)), {
							top: t.top - r.top - jQuery.css(n, "marginTop", !0),
							left: t.left - r.left - jQuery.css(n, "marginLeft", !0)
						}
					},
					offsetParent: function () {
						return this.map(function () {
							var e = this.offsetParent || docElem;
							while (e && !jQuery.nodeName(e, "html") && jQuery.css(e, "position") === "static") e = e.offsetParent;
							return e || docElem
						})
					}
				}), jQuery.each({
					scrollLeft: "pageXOffset",
					scrollTop: "pageYOffset"
				}, function (e, t) {
					var n = "pageYOffset" === t;
					jQuery.fn[e] = function (r) {
						return access(this, function (e, r, i) {
							var s = getWindow(e);
							if (i === undefined) return s ? s[t] : e[r];
							s ? s.scrollTo(n ? window.pageXOffset : i, n ? i : window.pageYOffset) : e[r] = i
						}, e, r, arguments.length, null)
					}
				}), jQuery.each(["top", "left"], function (e, t) {
					jQuery.cssHooks[t] = addGetHookIf(support.pixelPosition, function (e, n) {
						if (n) return n = curCSS(e, t), rnumnonpx.test(n) ? jQuery(e).position()[t] + "px" : n
					})
				}), jQuery.each({
					Height: "height",
					Width: "width"
				}, function (e, t) {
					jQuery.each({
						padding: "inner" + e,
						content: t,
						"": "outer" + e
					}, function (n, r) {
						jQuery.fn[r] = function (r, i) {
							var s = arguments.length && (n || typeof r != "boolean"),
								o = n || (r === !0 || i === !0 ? "margin" : "border");
							return access(this, function (t, n, r) {
								var i;
								return jQuery.isWindow(t) ? t.document.documentElement["client" + e] : t.nodeType === 9 ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? jQuery.css(t, n, o) : jQuery.style(t, n, r, o)
							}, t, s ? r : undefined, s, null)
						}
					})
				}), jQuery.fn.size = function () {
					return this.length
				}, jQuery.fn.andSelf = jQuery.fn.addBack, typeof define == "function" && define.amd && define("jquery", [], function () {
					return jQuery
				});
				var _jQuery = window.jQuery,
					_$ = window.$;
				return jQuery.noConflict = function (e) {
					return window.$ === jQuery && (window.$ = _$), e && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery
				}, typeof noGlobal === strundefined && (window.jQuery = window.$ = jQuery), jQuery
			}),
			function (e, t) {
				typeof define == "function" && define.amd ? define("es6-shim", t) : typeof exports == "object" ? module.exports = t() : e.returnExports = t()
			}(this, function () {
				"use strict";
				var e = function (e) {
						try {
							e()
						} catch (t) {
							return !1
						}
						return !0
					},
					t = function (e, t) {
						try {
							var n = function () {
								e.apply(this, arguments)
							};
							return n.__proto__ ? (Object.setPrototypeOf(n, e), n.prototype = Object.create(e.prototype, {
								constructor: {
									value: e
								}
							}), t(n)) : !1
						} catch (r) {
							return !1
						}
					},
					n = function () {
						try {
							return Object.defineProperty({}, "x", {}), !0
						} catch (e) {
							return !1
						}
					},
					r = function () {
						var e = !1;
						if (String.prototype.startsWith) try {
							"/a/".startsWith(/a/)
						} catch (t) {
							e = !0
						}
						return e
					},
					i = new Function("return this;"),
					s = i(),
					o = s.isFinite,
					u = !!Object.defineProperty && n(),
					a = r(),
					f = Function.call.bind(String.prototype.indexOf),
					l = Function.call.bind(Object.prototype.toString),
					c = Function.call.bind(Object.prototype.hasOwnProperty),
					h, p = function () {},
					d = s.Symbol || {},
					v = {
						string: function (e) {
							return l(e) === "[object String]"
						},
						regex: function (e) {
							return l(e) === "[object RegExp]"
						},
						symbol: function (e) {
							return typeof s.Symbol == "function" && typeof e == "symbol"
						}
					},
					m = function (e, t, n, r) {
						if (!r && t in e) return;
						u ? Object.defineProperty(e, t, {
							configurable: !0,
							enumerable: !1,
							writable: !0,
							value: n
						}) : e[t] = n
					},
					g = {
						getter: function (e, t, n) {
							if (!u) throw new TypeError("getters require true ES5 support");
							Object.defineProperty(e, t, {
								configurable: !0,
								enumerable: !1,
								get: n
							})
						},
						proxy: function (e, t, n) {
							if (!u) throw new TypeError("getters require true ES5 support");
							var r = Object.getOwnPropertyDescriptor(e, t);
							Object.defineProperty(n, t, {
								configurable: r.configurable,
								enumerable: r.enumerable,
								get: function () {
									return e[t]
								},
								set: function (r) {
									e[t] = r
								}
							})
						},
						redefine: function (e, t, n) {
							if (u) {
								var r = Object.getOwnPropertyDescriptor(e, t);
								r.value = n, Object.defineProperty(e, t, r)
							} else e[t] = n
						}
					},
					y = function (e, t) {
						Object.keys(t).forEach(function (n) {
							var r = t[n];
							m(e, n, r, !1)
						})
					},
					b = Object.create || function (e, t) {
						function n() {}
						n.prototype = e;
						var r = new n;
						return typeof t != "undefined" && y(r, t), r
					},
					w = v.symbol(d.iterator) ? d.iterator : "_es6-shim iterator_";
				s.Set && typeof (new s.Set)["@@iterator"] == "function" && (w = "@@iterator");
				var E = function (e, t) {
						t || (t = function () {
							return this
						});
						var n = {};
						n[w] = t, y(e, n), !e[w] && v.symbol(w) && (e[w] = t)
					},
					S = function (t) {
						var n = l(t),
							r = n === "[object Arguments]";
						return r || (r = n !== "[object Array]" && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && l(t.callee) === "[object Function]"), r
					},
					x = {
						CheckObjectCoercible: function (e, t) {
							if (e == null) throw new TypeError(t || "Cannot call method on " + e);
							return e
						},
						TypeIsObject: function (e) {
							return e != null && Object(e) === e
						},
						ToObject: function (e, t) {
							return Object(x.CheckObjectCoercible(e, t))
						},
						IsCallable: function (e) {
							return typeof e == "function" && l(e) === "[object Function]"
						},
						ToInt32: function (e) {
							return e >> 0
						},
						ToUint32: function (e) {
							return e >>> 0
						},
						ToInteger: function (e) {
							var t = +e;
							return Number.isNaN(t) ? 0 : t === 0 || !Number.isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t))
						},
						ToLength: function (e) {
							var t = x.ToInteger(e);
							return t <= 0 ? 0 : t > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : t
						},
						SameValue: function (e, t) {
							return e === t ? e === 0 ? 1 / e === 1 / t : !0 : Number.isNaN(e) && Number.isNaN(t)
						},
						SameValueZero: function (e, t) {
							return e === t || Number.isNaN(e) && Number.isNaN(t)
						},
						IsIterable: function (e) {
							return x.TypeIsObject(e) && (typeof e[w] != "undefined" || S(e))
						},
						GetIterator: function (e) {
							if (S(e)) return new h(e, "value");
							var t = e[w];
							if (!x.IsCallable(t)) throw new TypeError("value is not an iterable");
							var n = t.call(e);
							if (!x.TypeIsObject(n)) throw new TypeError("bad iterator");
							return n
						},
						IteratorNext: function (e) {
							var t = arguments.length > 1 ? e.next(arguments[1]) : e.next();
							if (!x.TypeIsObject(t)) throw new TypeError("bad iterator");
							return t
						},
						Construct: function (e, t) {
							var n;
							x.IsCallable(e["@@create"]) ? n = e["@@create"]() : n = b(e.prototype || null), y(n, {
								_es6construct: !0
							});
							var r = e.apply(n, t);
							return x.TypeIsObject(r) ? r : n
						}
					},
					T = function (e) {
						if (!x.TypeIsObject(e)) throw new TypeError("bad object");
						return e._es6construct || (e.constructor && x.IsCallable(e.constructor["@@create"]) && (e = e.constructor["@@create"](e)), y(e, {
							_es6construct: !0
						})), e
					},
					N = function () {
						function e(e) {
							var t = Math.floor(e),
								n = e - t;
							return n < .5 ? t : n > .5 ? t + 1 : t % 2 ? t + 1 : t
						}

						function t(t, n, r) {
							var i = (1 << n - 1) - 1,
								s, o, u, a, f, l, c;
							t !== t ? (o = (1 << n) - 1, u = Math.pow(2, r - 1), s = 0) : t === Infinity || t === -Infinity ? (o = (1 << n) - 1, u = 0, s = t < 0 ? 1 : 0) : t === 0 ? (o = 0, u = 0, s = 1 / t === -Infinity ? 1 : 0) : (s = t < 0, t = Math.abs(t), t >= Math.pow(2, 1 - i) ? (o = Math.min(Math.floor(Math.log(t) / Math.LN2), 1023), u = e(t / Math.pow(2, o) * Math.pow(2, r)), u / Math.pow(2, r) >= 2 && (o += 1, u = 1), o > i ? (o = (1 << n) - 1, u = 0) : (o += i, u -= Math.pow(2, r))) : (o = 0, u = e(t / Math.pow(2, 1 - i - r)))), f = [];
							for (a = r; a; a -= 1) f.push(u % 2 ? 1 : 0), u = Math.floor(u / 2);
							for (a = n; a; a -= 1) f.push(o % 2 ? 1 : 0), o = Math.floor(o / 2);
							f.push(s ? 1 : 0), f.reverse(), l = f.join(""), c = [];
							while (l.length) c.push(parseInt(l.slice(0, 8), 2)), l = l.slice(8);
							return c
						}

						function n(e, t, n) {
							var r = [],
								i, s, o, u, a, f, l, c;
							for (i = e.length; i; i -= 1) {
								o = e[i - 1];
								for (s = 8; s; s -= 1) r.push(o % 2 ? 1 : 0), o >>= 1
							}
							return r.reverse(), u = r.join(""), a = (1 << t - 1) - 1, f = parseInt(u.slice(0, 1), 2) ? -1 : 1, l = parseInt(u.slice(1, 1 + t), 2), c = parseInt(u.slice(1 + t), 2), l === (1 << t) - 1 ? c !== 0 ? NaN : f * Infinity : l > 0 ? f * Math.pow(2, l - a) * (1 + c / Math.pow(2, n)) : c !== 0 ? f * Math.pow(2, -(a - 1)) * (c / Math.pow(2, n)) : f < 0 ? 0 : 0
						}

						function r(e) {
							return n(e, 11, 52)
						}

						function i(e) {
							return t(e, 11, 52)
						}

						function s(e) {
							return n(e, 8, 23)
						}

						function o(e) {
							return t(e, 8, 23)
						}
						var u = {
							toFloat32: function (e) {
								return s(o(e))
							}
						};
						if (typeof Float32Array != "undefined") {
							var a = new Float32Array(1);
							u.toFloat32 = function (e) {
								return a[0] = e, a[0]
							}
						}
						return u
					}();
				y(String, {
					fromCodePoint: function (t) {
						var n = [],
							r;
						for (var i = 0, s = arguments.length; i < s; i++) {
							r = Number(arguments[i]);
							if (!x.SameValue(r, x.ToInteger(r)) || r < 0 || r > 1114111) throw new RangeError("Invalid code point " + r);
							r < 65536 ? n.push(String.fromCharCode(r)) : (r -= 65536, n.push(String.fromCharCode((r >> 10) + 55296)), n.push(String.fromCharCode(r % 1024 + 56320)))
						}
						return n.join("")
					},
					raw: function (t) {
						var n = x.ToObject(t, "bad callSite"),
							r = n.raw,
							i = x.ToObject(r, "bad raw value"),
							s = i.length,
							o = x.ToLength(s);
						if (o <= 0) return "";
						var u = [],
							a = 0,
							f, l, c, h;
						while (a < o) {
							f = String(a), l = i[f], c = String(l), u.push(c);
							if (a + 1 >= o) break;
							l = a + 1 < arguments.length ? arguments[a + 1] : "", h = String(l), u.push(h), a++
						}
						return u.join("")
					}
				});
				if (String.fromCodePoint.length !== 1) {
					var C = Function.apply.bind(String.fromCodePoint);
					m(String, "fromCodePoint", function (e) {
						return C(this, arguments)
					}, !0)
				}
				var k = {
					repeat: function () {
						var e = function (t, n) {
							if (n < 1) return "";
							if (n % 2) return e(t, n - 1) + t;
							var r = e(t, n / 2);
							return r + r
						};
						return function (t) {
							var n = String(x.CheckObjectCoercible(this));
							t = x.ToInteger(t);
							if (t < 0 || t === Infinity) throw new RangeError("Invalid String#repeat value");
							return e(n, t)
						}
					}(),
					startsWith: function (e) {
						var t = String(x.CheckObjectCoercible(this));
						if (v.regex(e)) throw new TypeError('Cannot call method "startsWith" with a regex');
						e = String(e);
						var n = arguments.length > 1 ? arguments[1] : void 0,
							r = Math.max(x.ToInteger(n), 0);
						return t.slice(r, r + e.length) === e
					},
					endsWith: function (e) {
						var t = String(x.CheckObjectCoercible(this));
						if (v.regex(e)) throw new TypeError('Cannot call method "endsWith" with a regex');
						e = String(e);
						var n = t.length,
							r = arguments.length > 1 ? arguments[1] : void 0,
							i = typeof r == "undefined" ? n : x.ToInteger(r),
							s = Math.min(Math.max(i, 0), n);
						return t.slice(s - e.length, s) === e
					},
					includes: function (t) {
						var n = arguments.length > 1 ? arguments[1] : void 0;
						return f(this, t, n) !== -1
					},
					codePointAt: function (e) {
						var t = String(x.CheckObjectCoercible(this)),
							n = x.ToInteger(e),
							r = t.length;
						if (n >= 0 && n < r) {
							var i = t.charCodeAt(n),
								s = n + 1 === r;
							if (i < 55296 || i > 56319 || s) return i;
							var o = t.charCodeAt(n + 1);
							return o < 56320 || o > 57343 ? i : (i - 55296) * 1024 + (o - 56320) + 65536
						}
					}
				};
				y(String.prototype, k);
				var L = "".trim().length !== 1;
				if (L) {
					delete String.prototype.trim;
					var A = ["	\n\f\r   ᠎    ", "         　\u2028", "\u2029﻿"].join(""),
						O = new RegExp("(^[" + A + "]+)|([" + A + "]+$)", "g");
					y(String.prototype, {
						trim: function () {
							if (typeof this == "undefined" || this === null) throw new TypeError("can't convert " + this + " to object");
							return String(this).replace(O, "")
						}
					})
				}
				var M = function (e) {
					this._s = String(x.CheckObjectCoercible(e)), this._i = 0
				};
				M.prototype.next = function () {
					var e = this._s,
						t = this._i;
					if (typeof e == "undefined" || t >= e.length) return this._s = void 0, {
						value: void 0,
						done: !0
					};
					var n = e.charCodeAt(t),
						r, i;
					return n < 55296 || n > 56319 || t + 1 === e.length ? i = 1 : (r = e.charCodeAt(t + 1), i = r < 56320 || r > 57343 ? 1 : 2), this._i = t + i, {
						value: e.substr(t, i),
						done: !1
					}
				}, E(M.prototype), E(String.prototype, function () {
					return new M(this)
				}), a || y(String.prototype, {
					startsWith: k.startsWith,
					endsWith: k.endsWith
				});
				var _ = {
					from: function (e) {
						var t = arguments.length > 1 ? arguments[1] : void 0,
							n = x.ToObject(e, "bad iterable");
						if (typeof t != "undefined" && !x.IsCallable(t)) throw new TypeError("Array.from: when provided, the second argument must be a function");
						var r = arguments.length > 2,
							i = r ? arguments[2] : void 0,
							s = x.IsIterable(n),
							o, u, a, f;
						if (s) {
							a = 0, u = x.IsCallable(this) ? Object(new this) : [];
							var l = s ? x.GetIterator(n) : null,
								c;
							do c = x.IteratorNext(l), c.done || (f = c.value, t ? u[a] = r ? t.call(i, f, a) : t(f, a) : u[a] = f, a += 1); while (!c.done);
							o = a
						} else {
							o = x.ToLength(n.length), u = x.IsCallable(this) ? Object(new this(o)) : new Array(o);
							for (a = 0; a < o; ++a) f = n[a], t ? u[a] = r ? t.call(i, f, a) : t(f, a) : u[a] = f
						}
						return u.length = o, u
					},
					of: function () {
						return Array.from(arguments)
					}
				};
				y(Array, _);
				var D = function () {
					try {
						return Array.from({
							length: -1
						}).length === 0
					} catch (e) {
						return !1
					}
				};
				D() || m(Array, "from", _.from, !0), h = function (e, t) {
					this.i = 0, this.array = e, this.kind = t
				}, y(h.prototype, {
					next: function () {
						var e = this.i,
							t = this.array;
						if (this instanceof h) {
							if (typeof t != "undefined") {
								var n = x.ToLength(t.length);
								for (; e < n; e++) {
									var r = this.kind,
										i;
									return r === "key" ? i = e : r === "value" ? i = t[e] : r === "entry" && (i = [e, t[e]]), this.i = e + 1, {
										value: i,
										done: !1
									}
								}
							}
							return this.array = void 0, {
								value: void 0,
								done: !0
							}
						}
						throw new TypeError("Not an ArrayIterator")
					}
				}), E(h.prototype);
				var P = {
					copyWithin: function (e, t) {
						var n = arguments[2],
							r = x.ToObject(this),
							i = x.ToLength(r.length);
						e = x.ToInteger(e), t = x.ToInteger(t);
						var s = e < 0 ? Math.max(i + e, 0) : Math.min(e, i),
							o = t < 0 ? Math.max(i + t, 0) : Math.min(t, i);
						n = typeof n == "undefined" ? i : x.ToInteger(n);
						var u = n < 0 ? Math.max(i + n, 0) : Math.min(n, i),
							a = Math.min(u - o, i - s),
							f = 1;
						o < s && s < o + a && (f = -1, o += a - 1, s += a - 1);
						while (a > 0) c(r, o) ? r[s] = r[o] : delete r[o], o += f, s += f, a -= 1;
						return r
					},
					fill: function (e) {
						var t = arguments.length > 1 ? arguments[1] : void 0,
							n = arguments.length > 2 ? arguments[2] : void 0,
							r = x.ToObject(this),
							i = x.ToLength(r.length);
						t = x.ToInteger(typeof t == "undefined" ? 0 : t), n = x.ToInteger(typeof n == "undefined" ? i : n);
						var s = t < 0 ? Math.max(i + t, 0) : Math.min(t, i),
							o = n < 0 ? i + n : n;
						for (var u = s; u < i && u < o; ++u) r[u] = e;
						return r
					},
					find: function (t) {
						var n = x.ToObject(this),
							r = x.ToLength(n.length);
						if (!x.IsCallable(t)) throw new TypeError("Array#find: predicate must be a function");
						var i = arguments.length > 1 ? arguments[1] : null;
						for (var s = 0, o; s < r; s++) {
							o = n[s];
							if (i) {
								if (t.call(i, o, s, n)) return o
							} else if (t(o, s, n)) return o
						}
					},
					findIndex: function (t) {
						var n = x.ToObject(this),
							r = x.ToLength(n.length);
						if (!x.IsCallable(t)) throw new TypeError("Array#findIndex: predicate must be a function");
						var i = arguments.length > 1 ? arguments[1] : null;
						for (var s = 0; s < r; s++)
							if (i) {
								if (t.call(i, n[s], s, n)) return s
							} else if (t(n[s], s, n)) return s;
						return -1
					},
					keys: function () {
						return new h(this, "key")
					},
					values: function () {
						return new h(this, "value")
					},
					entries: function () {
						return new h(this, "entry")
					}
				};
				Array.prototype.keys && !x.IsCallable([1].keys().next) && delete Array.prototype.keys, Array.prototype.entries && !x.IsCallable([1].entries().next) && delete Array.prototype.entries, Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[w] && (y(Array.prototype, {
					values: Array.prototype[w]
				}), v.symbol(d.unscopables) && (Array.prototype[d.unscopables].values = !0)), y(Array.prototype, P), E(Array.prototype, function () {
					return this.values()
				}), Object.getPrototypeOf && E(Object.getPrototypeOf([].values()));
				var H = Math.pow(2, 53) - 1;
				y(Number, {
					MAX_SAFE_INTEGER: H,
					MIN_SAFE_INTEGER: -H,
					EPSILON: 2.220446049250313e-16,
					parseInt: s.parseInt,
					parseFloat: s.parseFloat,
					isFinite: function (e) {
						return typeof e == "number" && o(e)
					},
					isInteger: function (e) {
						return Number.isFinite(e) && x.ToInteger(e) === e
					},
					isSafeInteger: function (e) {
						return Number.isInteger(e) && Math.abs(e) <= Number.MAX_SAFE_INTEGER
					},
					isNaN: function (e) {
						return e !== e
					}
				}), [, 1].find(function (e, t) {
					return t === 0
				}) || m(Array.prototype, "find", P.find, !0), [, 1].findIndex(function (e, t) {
					return t === 0
				}) !== 0 && m(Array.prototype, "findIndex", P.findIndex, !0), u && y(Object, {
					assign: function (e, t) {
						if (!x.TypeIsObject(e)) throw new TypeError("target must be an object");
						return Array.prototype.reduce.call(arguments, function (e, t) {
							return Object.keys(Object(t)).reduce(function (e, n) {
								return e[n] = t[n], e
							}, e)
						})
					},
					is: function (e, t) {
						return x.SameValue(e, t)
					},
					setPrototypeOf: function (e, t) {
						var n, r = function (e, t) {
								if (!x.TypeIsObject(e)) throw new TypeError("cannot set prototype on a non-object");
								if (t !== null && !x.TypeIsObject(t)) throw new TypeError("can only set prototype to an object or null" + t)
							},
							i = function (e, t) {
								return r(e, t), n.call(e, t), e
							};
						try {
							n = e.getOwnPropertyDescriptor(e.prototype, t).set, n.call({}, null)
						} catch (s) {
							if (e.prototype !== {}[t]) return;
							n = function (e) {
								this[t] = e
							}, i.polyfill = i(i({}, null), e.prototype) instanceof e
						}
						return i
					}(Object, "__proto__")
				}), Object.setPrototypeOf && Object.getPrototypeOf && Object.getPrototypeOf(Object.setPrototypeOf({}, null)) !== null && Object.getPrototypeOf(Object.create(null)) === null && function () {
					var e = Object.create(null),
						t = Object.getPrototypeOf,
						n = Object.setPrototypeOf;
					Object.getPrototypeOf = function (n) {
						var r = t(n);
						return r === e ? null : r
					}, Object.setPrototypeOf = function (t, r) {
						return r === null && (r = e), n(t, r)
					}, Object.setPrototypeOf.polyfill = !1
				}();
				try {
					Object.keys("foo")
				} catch (B) {
					var j = Object.keys;
					Object.keys = function (e) {
						return j(x.ToObject(e))
					}
				}
				if (!RegExp.prototype.flags && u) {
					var F = function () {
						if (!x.TypeIsObject(this)) throw new TypeError("Method called on incompatible type: must be an object.");
						var t = "";
						return this.global && (t += "g"), this.ignoreCase && (t += "i"), this.multiline && (t += "m"), this.unicode && (t += "u"), this.sticky && (t += "y"), t
					};
					g.getter(RegExp.prototype, "flags", F)
				}
				var I = function () {
					try {
						return String(new RegExp(/a/g, "i")) === "/a/i"
					} catch (e) {
						return !1
					}
				}();
				if (!I && u) {
					var q = RegExp,
						R = function Z(e, t) {
							return v.regex(e) && v.string(t) ? new Z(e.source, t) : new q(e, t)
						};
					m(R, "toString", q.toString.bind(q), !0), Object.setPrototypeOf && Object.setPrototypeOf(q, R), Object.getOwnPropertyNames(q).forEach(function (e) {
						if (e === "$input") return;
						if (e in p) return;
						g.proxy(q, e, R)
					}), R.prototype = q.prototype, g.redefine(q.prototype, "constructor", R), RegExp = R, g.redefine(s, "RegExp", R)
				}
				var U = {
					acosh: function (e) {
						return e = Number(e), Number.isNaN(e) || e < 1 ? NaN : e === 1 ? 0 : e === Infinity ? e : Math.log(e + Math.sqrt(e * e - 1))
					},
					asinh: function (e) {
						return e = Number(e), e === 0 || !o(e) ? e : e < 0 ? -Math.asinh(-e) : Math.log(e + Math.sqrt(e * e + 1))
					},
					atanh: function (e) {
						return e = Number(e), Number.isNaN(e) || e < -1 || e > 1 ? NaN : e === -1 ? -Infinity : e === 1 ? Infinity : e === 0 ? e : .5 * Math.log((1 + e) / (1 - e))
					},
					cbrt: function (e) {
						e = Number(e);
						if (e === 0) return e;
						var t = e < 0,
							n;
						return t && (e = -e), n = Math.pow(e, 1 / 3), t ? -n : n
					},
					clz32: function (e) {
						e = Number(e);
						var t = x.ToUint32(e);
						return t === 0 ? 32 : 32 - t.toString(2).length
					},
					cosh: function (e) {
						return e = Number(e), e === 0 ? 1 : Number.isNaN(e) ? NaN : o(e) ? (e < 0 && (e = -e), e > 21 ? Math.exp(e) / 2 : (Math.exp(e) + Math.exp(-e)) / 2) : Infinity
					},
					expm1: function (e) {
						return e = Number(e), e === -Infinity ? -1 : !o(e) || e === 0 ? e : Math.exp(e) - 1
					},
					hypot: function (e, t) {
						var n = !1,
							r = !0,
							i = !1,
							s = [];
						Array.prototype.every.call(arguments, function (e) {
							var t = Number(e);
							return Number.isNaN(t) ? n = !0 : t === Infinity || t === -Infinity ? i = !0 : t !== 0 && (r = !1), i ? !1 : (n || s.push(Math.abs(t)), !0)
						});
						if (i) return Infinity;
						if (n) return NaN;
						if (r) return 0;
						s.sort(function (e, t) {
							return t - e
						});
						var o = s[0],
							u = s.map(function (e) {
								return e / o
							}),
							a = u.reduce(function (e, t) {
								return e + t * t
							}, 0);
						return o * Math.sqrt(a)
					},
					log2: function (e) {
						return Math.log(e) * Math.LOG2E
					},
					log10: function (e) {
						return Math.log(e) * Math.LOG10E
					},
					log1p: function (e) {
						e = Number(e);
						if (e < -1 || Number.isNaN(e)) return NaN;
						if (e === 0 || e === Infinity) return e;
						if (e === -1) return -Infinity;
						var t = 0,
							n = 50;
						if (e < 0 || e > 1) return Math.log(1 + e);
						for (var r = 1; r < n; r++) r % 2 === 0 ? t -= Math.pow(e, r) / r : t += Math.pow(e, r) / r;
						return t
					},
					sign: function (e) {
						var t = +e;
						return t === 0 ? t : Number.isNaN(t) ? t : t < 0 ? -1 : 1
					},
					sinh: function (e) {
						return e = Number(e), !o(e) || e === 0 ? e : (Math.exp(e) - Math.exp(-e)) / 2
					},
					tanh: function (e) {
						return e = Number(e), Number.isNaN(e) || e === 0 ? e : e === Infinity ? 1 : e === -Infinity ? -1 : (Math.exp(e) - Math.exp(-e)) / (Math.exp(e) + Math.exp(-e))
					},
					trunc: function (e) {
						var t = Number(e);
						return t < 0 ? -Math.floor(-t) : Math.floor(t)
					},
					imul: function (e, t) {
						e = x.ToUint32(e), t = x.ToUint32(t);
						var n = e >>> 16 & 65535,
							r = e & 65535,
							i = t >>> 16 & 65535,
							s = t & 65535;
						return r * s + (n * s + r * i << 16 >>> 0) | 0
					},
					fround: function (e) {
						if (e === 0 || e === Infinity || e === -Infinity || Number.isNaN(e)) return e;
						var t = Number(e);
						return N.toFloat32(t)
					}
				};
				y(Math, U), Math.imul(4294967295, 5) !== -5 && (Math.imul = U.imul);
				var z = function () {
					var e, t;
					x.IsPromise = function (e) {
						return x.TypeIsObject(e) ? e._promiseConstructor ? typeof e._status == "undefined" ? !1 : !0 : !1 : !1
					};
					var n = function (e) {
							if (!x.IsCallable(e)) throw new TypeError("bad promise constructor");
							var t = this,
								n = function (e, n) {
									t.resolve = e, t.reject = n
								};
							t.promise = x.Construct(e, [n]);
							if (!t.promise._es6construct) throw new TypeError("bad promise constructor");
							if (!x.IsCallable(t.resolve) || !x.IsCallable(t.reject)) throw new TypeError("bad promise constructor")
						},
						r = s.setTimeout,
						i;
					typeof window != "undefined" && x.IsCallable(window.postMessage) && (i = function () {
						var e = [],
							t = "zero-timeout-message",
							n = function (n) {
								e.push(n), window.postMessage(t, "*")
							},
							r = function (n) {
								if (n.source === window && n.data === t) {
									n.stopPropagation();
									if (e.length === 0) return;
									var r = e.shift();
									r()
								}
							};
						return window.addEventListener("message", r, !0), n
					});
					var o = function () {
							var e = s.Promise;
							return e && e.resolve && function (t) {
								return e.resolve().then(t)
							}
						},
						u = x.IsCallable(s.setImmediate) ? s.setImmediate.bind(s) : typeof process == "object" && process.nextTick ? process.nextTick : o() || (x.IsCallable(i) ? i() : function (e) {
							r(e, 0)
						}),
						a = function (e, t) {
							if (!x.TypeIsObject(e)) return !1;
							var n = t.resolve,
								r = t.reject;
							try {
								var i = e.then;
								if (!x.IsCallable(i)) return !1;
								i.call(e, n, r)
							} catch (s) {
								r(s)
							}
							return !0
						},
						f = function (e, t) {
							e.forEach(function (e) {
								u(function () {
									var n = e.handler,
										r = e.capability,
										i = r.resolve,
										s = r.reject;
									try {
										var o = n(t);
										if (o === r.promise) throw new TypeError("self resolution");
										var u = a(o, r);
										u || i(o)
									} catch (f) {
										s(f)
									}
								})
							})
						},
						l = function (e, t, r) {
							return function (i) {
								if (i === e) return r(new TypeError("self resolution"));
								var s = e._promiseConstructor,
									o = new n(s),
									u = a(i, o);
								return u ? o.promise.then(t, r) : t(i)
							}
						};
					e = function (e) {
						var t = this;
						t = T(t);
						if (!t._promiseConstructor) throw new TypeError("bad promise");
						if (typeof t._status != "undefined") throw new TypeError("promise already initialized");
						if (!x.IsCallable(e)) throw new TypeError("not a valid resolver");
						t._status = "unresolved", t._resolveReactions = [], t._rejectReactions = [];
						var n = function (e) {
								if (t._status !== "unresolved") return;
								var n = t._resolveReactions;
								t._result = e, t._resolveReactions = void 0, t._rejectReactions = void 0, t._status = "has-resolution", f(n, e)
							},
							r = function (e) {
								if (t._status !== "unresolved") return;
								var n = t._rejectReactions;
								t._result = e, t._resolveReactions = void 0, t._rejectReactions = void 0, t._status = "has-rejection", f(n, e)
							};
						try {
							e(n, r)
						} catch (i) {
							r(i)
						}
						return t
					}, t = e.prototype;
					var c = function (e, t, n, r) {
						var i = !1;
						return function (s) {
							if (i) return;
							i = !0, t[e] = s;
							if (--r.count === 0) {
								var o = n.resolve;
								o(t)
							}
						}
					};
					return y(e, {
						"@@create": function (e) {
							var n = this,
								r = n.prototype || t;
							return e = e || b(r), y(e, {
								_status: void 0,
								_result: void 0,
								_resolveReactions: void 0,
								_rejectReactions: void 0,
								_promiseConstructor: void 0
							}), e._promiseConstructor = n, e
						},
						all: function (t) {
							var r = this,
								i = new n(r),
								s = i.resolve,
								o = i.reject;
							try {
								if (!x.IsIterable(t)) throw new TypeError("bad iterable");
								var u = x.GetIterator(t),
									a = [],
									f = {
										count: 1
									};
								for (var l = 0;; l++) {
									var h = x.IteratorNext(u);
									if (h.done) break;
									var p = r.resolve(h.value),
										d = c(l, a, i, f);
									f.count++, p.then(d, i.reject)
								}--f.count === 0 && s(a)
							} catch (v) {
								o(v)
							}
							return i.promise
						},
						race: function (t) {
							var r = this,
								i = new n(r),
								s = i.resolve,
								o = i.reject;
							try {
								if (!x.IsIterable(t)) throw new TypeError("bad iterable");
								var u = x.GetIterator(t);
								for (;;) {
									var a = x.IteratorNext(u);
									if (a.done) break;
									var f = r.resolve(a.value);
									f.then(s, o)
								}
							} catch (l) {
								o(l)
							}
							return i.promise
						},
						reject: function (t) {
							var r = this,
								i = new n(r),
								s = i.reject;
							return s(t), i.promise
						},
						resolve: function (t) {
							var r = this;
							if (x.IsPromise(t)) {
								var i = t._promiseConstructor;
								if (i === r) return t
							}
							var s = new n(r),
								o = s.resolve;
							return o(t), s.promise
						}
					}), y(t, {
						"catch": function (e) {
							return this.then(void 0, e)
						},
						then: function (t, r) {
							var i = this;
							if (!x.IsPromise(i)) throw new TypeError("not a promise");
							var s = this.constructor,
								o = new n(s);
							x.IsCallable(r) || (r = function (e) {
								throw e
							}), x.IsCallable(t) || (t = function (e) {
								return e
							});
							var u = l(i, t, r),
								a = {
									capability: o,
									handler: u
								},
								c = {
									capability: o,
									handler: r
								};
							switch (i._status) {
							case "unresolved":
								i._resolveReactions.push(a), i._rejectReactions.push(c);
								break;
							case "has-resolution":
								f([a], i._result);
								break;
							case "has-rejection":
								f([c], i._result);
								break;
							default:
								throw new TypeError("unexpected")
							}
							return o.promise
						}
					}), e
				}();
				s.Promise && (delete s.Promise.accept, delete s.Promise.defer, delete s.Promise.prototype.chain), y(s, {
					Promise: z
				});
				var W = t(s.Promise, function (e) {
						return e.resolve(42) instanceof e
					}),
					X = function () {
						try {
							return s.Promise.reject(42).then(null, 5).then(null, p), !0
						} catch (e) {
							return !1
						}
					}(),
					V = function () {
						try {
							Promise.call(3, p)
						} catch (e) {
							return !0
						}
						return !1
					}();
				if (!W || !X || !V) Promise = z, m(s, "Promise", z, !0);
				var $ = function (e) {
						var t = Object.keys(e.reduce(function (e, t) {
							return e[t] = !0, e
						}, {}));
						return e.join(":") === t.join(":")
					},
					J = $(["z", "a", "bb"]),
					K = $(["z", 1, "a", "3", 2]);
				if (u) {
					var Q = function (t) {
							if (!J) return null;
							var n = typeof t;
							return n === "string" ? "$" + t : n === "number" ? K ? t : "n" + t : null
						},
						G = function () {
							return Object.create ? Object.create(null) : {}
						},
						Y = {
							Map: function () {
								function t(e, t) {
									this.key = e, this.value = t, this.next = null, this.prev = null
								}

								function n(e, t) {
									this.head = e._head, this.i = this.head, this.kind = t
								}

								function r(e) {
									var n = this;
									if (!x.TypeIsObject(n)) throw new TypeError("Map does not accept arguments when called as a function");
									n = T(n);
									if (!n._es6map) throw new TypeError("bad map");
									var r = new t(null, null);
									r.next = r.prev = r, y(n, {
										_head: r,
										_storage: G(),
										_size: 0
									});
									if (typeof e != "undefined" && e !== null) {
										var i = x.GetIterator(e),
											s = n.set;
										if (!x.IsCallable(s)) throw new TypeError("bad map");
										for (;;) {
											var o = x.IteratorNext(i);
											if (o.done) break;
											var u = o.value;
											if (!x.TypeIsObject(u)) throw new TypeError("expected iterable of pairs");
											s.call(n, u[0], u[1])
										}
									}
									return n
								}
								var e = {};
								t.prototype.isRemoved = function () {
									return this.key === e
								}, n.prototype = {
									next: function () {
										var e = this.i,
											t = this.kind,
											n = this.head,
											r;
										if (typeof this.i == "undefined") return {
											value: void 0,
											done: !0
										};
										while (e.isRemoved() && e !== n) e = e.prev;
										while (e.next !== n) {
											e = e.next;
											if (!e.isRemoved()) return t === "key" ? r = e.key : t === "value" ? r = e.value : r = [e.key, e.value], this.i = e, {
												value: r,
												done: !1
											}
										}
										return this.i = void 0, {
											value: void 0,
											done: !0
										}
									}
								}, E(n.prototype);
								var i = r.prototype;
								return y(r, {
									"@@create": function (e) {
										var t = this,
											n = t.prototype || i;
										return e = e || b(n), y(e, {
											_es6map: !0
										}), e
									}
								}), g.getter(r.prototype, "size", function () {
									if (typeof this._size == "undefined") throw new TypeError("size method called on incompatible Map");
									return this._size
								}), y(r.prototype, {
									get: function (e) {
										var t = Q(e);
										if (t !== null) {
											var n = this._storage[t];
											if (n) return n.value;
											return
										}
										var r = this._head,
											i = r;
										while ((i = i.next) !== r)
											if (x.SameValueZero(i.key, e)) return i.value
									},
									has: function (e) {
										var t = Q(e);
										if (t !== null) return typeof this._storage[t] != "undefined";
										var n = this._head,
											r = n;
										while ((r = r.next) !== n)
											if (x.SameValueZero(r.key, e)) return !0;
										return !1
									},
									set: function (e, n) {
										var r = this._head,
											i = r,
											s, o = Q(e);
										if (o !== null) {
											if (typeof this._storage[o] != "undefined") return this._storage[o].value = n, this;
											s = this._storage[o] = new t(e, n), i = r.prev
										}
										while ((i = i.next) !== r)
											if (x.SameValueZero(i.key, e)) return i.value = n, this;
										return s = s || new t(e, n), x.SameValue(0, e) && (s.key = 0), s.next = this._head, s.prev = this._head.prev, s.prev.next = s, s.next.prev = s, this._size += 1, this
									},
									"delete": function (t) {
										var n = this._head,
											r = n,
											i = Q(t);
										if (i !== null) {
											if (typeof this._storage[i] == "undefined") return !1;
											r = this._storage[i].prev, delete this._storage[i]
										}
										while ((r = r.next) !== n)
											if (x.SameValueZero(r.key, t)) return r.key = r.value = e, r.prev.next = r.next, r.next.prev = r.prev, this._size -= 1, !0;
										return !1
									},
									clear: function () {
										this._size = 0, this._storage = G();
										var t = this._head,
											n = t,
											r = n.next;
										while ((n = r) !== t) n.key = n.value = e, r = n.next, n.next = n.prev = t;
										t.next = t.prev = t
									},
									keys: function () {
										return new n(this, "key")
									},
									values: function () {
										return new n(this, "value")
									},
									entries: function () {
										return new n(this, "key+value")
									},
									forEach: function (e) {
										var t = arguments.length > 1 ? arguments[1] : null,
											n = this.entries();
										for (var r = n.next(); !r.done; r = n.next()) t ? e.call(t, r.value[1], r.value[0], this) : e(r.value[1], r.value[0], this)
									}
								}), E(r.prototype, function () {
									return this.entries()
								}), r
							}(),
							Set: function () {
								var e = function (t) {
										var n = this;
										if (!x.TypeIsObject(n)) throw new TypeError("Set does not accept arguments when called as a function");
										n = T(n);
										if (!n._es6set) throw new TypeError("bad set");
										y(n, {
											"[[SetData]]": null,
											_storage: G()
										});
										if (typeof t != "undefined" && t !== null) {
											var r = x.GetIterator(t),
												i = n.add;
											if (!x.IsCallable(i)) throw new TypeError("bad set");
											for (;;) {
												var s = x.IteratorNext(r);
												if (s.done) break;
												var o = s.value;
												i.call(n, o)
											}
										}
										return n
									},
									t = e.prototype;
								y(e, {
									"@@create": function (e) {
										var n = this,
											r = n.prototype || t;
										return e = e || b(r), y(e, {
											_es6set: !0
										}), e
									}
								});
								var n = function (t) {
									if (!t["[[SetData]]"]) {
										var n = t["[[SetData]]"] = new Y.Map;
										Object.keys(t._storage).forEach(function (e) {
											e.charCodeAt(0) === 36 ? e = e.slice(1) : e.charAt(0) === "n" ? e = +e.slice(1) : e = +e, n.set(e, e)
										}), t._storage = null
									}
								};
								return g.getter(e.prototype, "size", function () {
									if (typeof this._storage == "undefined") throw new TypeError("size method called on incompatible Set");
									return n(this), this["[[SetData]]"].size
								}), y(e.prototype, {
									has: function (e) {
										var t;
										return this._storage && (t = Q(e)) !== null ? !!this._storage[t] : (n(this), this["[[SetData]]"].has(e))
									},
									add: function (e) {
										var t;
										return this._storage && (t = Q(e)) !== null ? (this._storage[t] = !0, this) : (n(this), this["[[SetData]]"].set(e, e), this)
									},
									"delete": function (e) {
										var t;
										if (this._storage && (t = Q(e)) !== null) {
											var r = c(this._storage, t);
											return delete this._storage[t] && r
										}
										return n(this), this["[[SetData]]"]["delete"](e)
									},
									clear: function () {
										this._storage ? this._storage = G() : this["[[SetData]]"].clear()
									},
									values: function () {
										return n(this), this["[[SetData]]"].values()
									},
									entries: function () {
										return n(this), this["[[SetData]]"].entries()
									},
									forEach: function (e) {
										var t = arguments.length > 1 ? arguments[1] : null,
											r = this;
										n(r), this["[[SetData]]"].forEach(function (n, i) {
											t ? e.call(t, i, i, r) : e(i, i, r)
										})
									}
								}), m(e, "keys", e.values, !0), E(e.prototype, function () {
									return this.values()
								}), e
							}()
						};
					y(s, Y);
					if (s.Map || s.Set)
						if (typeof s.Map.prototype.clear != "function" || (new s.Set).size !== 0 || (new s.Map).size !== 0 || typeof s.Map.prototype.keys != "function" || typeof s.Set.prototype.keys != "function" || typeof s.Map.prototype.forEach != "function" || typeof s.Set.prototype.forEach != "function" || e(s.Map) || e(s.Set) || !t(s.Map, function (e) {
							var t = new e([]);
							return t.set(42, 42), t instanceof e
						})) s.Map = Y.Map, s.Set = Y.Set;
					s.Set.prototype.keys !== s.Set.prototype.values && m(s.Set.prototype, "keys", s.Set.prototype.values, !0), E(Object.getPrototypeOf((new s.Map).keys())), E(Object.getPrototypeOf((new s.Set).keys()))
				}
				return s
			}), define("jqueryplugins", ["jquery"], function (e) {
				"use strict";
				e.prototype.extend({
					popAttr: function (e) {
						var t = this.attr(e);
						return this.removeAttr(e), t
					},
					tag: function () {
						return this[0] && this[0].tagName.toLowerCase()
					}
				})
			}),
			function () {
				"use strict";

				function i(e) {
					var t = e.innerText,
						n = [e.innerMode],
						i = [],
						o, u, a, f, l, c = 0,
						h = 0,
						p = null;
					while (c < t.length) {
						l = t.slice(c);
						for (o = 0, u = n[0].length; o < u; o += 1) {
							a = r[n[0][o]];
							if ((!a.canFollow || a.canFollow.indexOf(p && p.type) > -1) && (!a.cannotFollow || a.cannotFollow.indexOf(p && p.type) === -1) && (!a.opener || a.opener.exec(l)) && (f = a.pattern.exec(l))) {
								h < c && e.addChild({
									type: "text",
									match: t.slice(h, c),
									innerMode: n[0]
								}), p = e.addChild(a.fn(f)), c += p.text.length, h = c, p.type.endsWith("Front") ? (i.unshift(p), n.unshift(p.innerMode)) : p.type.endsWith("Back") && (i.length && p.matches && i[0].type in p.matches ? (s(e, p, i.shift()), n.shift()) : p.demote());
								break
							}
						}
						o === u && (c += 1)
					}
					h < c && e.addChild({
						type: "text",
						match: t.slice(h, c),
						innerMode: n[0]
					});
					while (i.length > 0) i.shift().demote();
					return e
				}

				function s(e, t, n) {
					var r = e.children.indexOf(t),
						s = e.children.indexOf(n),
						o, u, a;
					t.children = e.children.splice(s + 1, r - (s + 1)), t.type = t.matches[n.type], t.innerText = "";
					for (o = 0, u = t.children.length; o < u; o++) t.innerText += t.children[o].text;
					t.text = n.text + t.innerText + t.text;
					for (a in n) Object.hasOwnProperty.call(n, a) && !Object.hasOwnProperty.call(t, a) && (t[a] = n[a]);
					e.children.splice(s, 1), t.type === "macro" && (t.children = [], i(t))
				}
				var e, t, n, r = {};
				Object.assign = Object.assign || function (t) {
					var n = 1,
						r, i;
					for (; n < arguments.length; n++) {
						r = arguments[n];
						for (i in r) Object.hasOwnProperty.call(r, i) && (t[i] = r[i])
					}
					return t
				}, n = {
					constructor: function () {
						for (var e = 0; e < arguments.length; e++) Object.assign(this, arguments[e])
					},
					addChild: function (t) {
						var n = this.lastChildEnd(),
							r, s = t.match;
						return Array.isArray(s) && (s = s[0]), r = new this.constructor({
							start: n,
							end: s && n + s.length,
							text: s,
							children: []
						}, t), r.innerText && i(r), this.children.push(r), r
					},
					forEach: function o(e) {
						e(this), this.children.forEach(function () {
							o(e)
						})
					},
					lastChild: function () {
						return this.children ? this.children[this.children.length - 1] || null : null
					},
					lastChildEnd: function () {
						var t = this.lastChild();
						return t ? t.end : this.start || 0
					},
					tokenAt: function (t) {
						return t < this.start || t >= this.end ? null : this.children ? this.children.reduce(function (e, n) {
							return e || n.tokenAt(t)
						}, null) : this
					},
					nearestTokenAt: function (t) {
						return t < this.start || t >= this.end ? null : this.children ? this.children.reduce(function (e, n) {
							return e || (t >= n.start && t < n.end ? n : null)
						}, null) : this
					},
					everyLeaf: function u(e) {
						var t;
						return !this.children || this.children.length === 0 ? !!e(this) : this.children.everyLeaf(function () {
							t = t && !!u(e)
						})
					},
					isWhitespace: function () {
						return this.everyLeaf(function (e) {
							return !e.text.trim()
						})
					},
					demote: function () {
						this.type = "text"
					},
					toString: function () {
						var e = this.type;
						return this.children && this.children.length > 0 && (e += "[" + this.children + "]"), e
					}
				}, t = n.constructor, t.prototype = n, e = {
					lex: function (n, r) {
						var s = i(new t({
							type: "root",
							start: r || 0,
							end: n.length,
							text: n,
							innerText: n,
							children: [],
							innerMode: e.startMode
						}));
						return s
					},
					rules: r
				}, typeof module == "object" ? module.exports = e : typeof define == "function" && define.amd ? define("markup/lexer", [], function () {
					return e
				}) : this.TwineLexer = e
			}.call(this || (typeof global != "undefined" ? global : window)),
			function () {
				"use strict";

				function t(e) {
					return e && typeof e == "object" ? (Object.keys(e).forEach(function (n) {
						e[n] = t(e[n])
					}), e) : (e + "").replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
				}

				function n(e, n) {
					return e = t(e), n = n ? t(n) : e, e + "(?:" + r(n + "\\") + "\\\\.)" + "*" + r(n + "\\") + n
				}

				function r() {
					return "[^" + Array.apply(0, arguments).map(t).join("") + "]*"
				}

				function i(e) {
					return function () {
						return "(" + e + Array.apply(0, arguments).join("|") + ")"
					}
				}

				function a(e, n) {
					var r = Array.isArray(e) ? e[0] : e,
						i = Array.isArray(e) && e[1] || r;
					return t(r) + "([^]*?)" + t(i) + function (n) {
						var r = n.split("").reduce(function (e, t) {
							return e === t && e
						});
						return r && o(t(r))
					}(i) + (n ? "|" + a.apply(0, Array.apply(0, arguments).slice(1)) : "")
				}

				function f(e) {
					return e.replace(/(?:([A-Z])|([a-z]))/g, function (e, t, n) {
						return "[" + (t || n.toUpperCase()) + (n || t.toLowerCase()) + "]"
					})
				}

				function l(e) {
					var n, r;
					return arguments.length > 1 || 1 ? (r = Array.apply(0, arguments).map(t), n = s.apply(0, r) + o.apply(0, r), new RegExp(n)) : {
						exec: function (t) {
							var n = e.length;
							while (--n >= 0)
								if (t[n] !== e[n]) return !1;
							return !0
						}
					}
				}
				var e, s = i("?:"),
					o = i("?!"),
					u = i("?="),
					c = "\\s*",
					h = "\\b",
					p = "(?=\\n+|$)",
					d = "[\\w\\-À-Þß-ÿŐŰőű]",
					v = "[\\wÀ-Þß-ÿŐŰőű]",
					m = u(s(r("'\"\\") + s("\\.", n("'"), n('"'))) + "*" + r("'\\") + "$"),
					g = "(?:\\*)",
					y = c + "(" + g + "+)\\s+([^\\n]*)" + p,
					b = "(?:0\\.)",
					w = c + "(" + b + "+)([^\\n]*)" + p,
					E = c + "[-*_]{3,}" + c + p,
					S = "\n" + c + "(#{1,6})" + c + "([^\\n]+?)" + c + "#*" + c + p,
					x = c + "(==+>|<=+|=+><=+|<==+>)" + c + p,
					T = {
						opener: "\\[\\[(?!\\[)",
						text: "(" + r("]") + ")",
						rightSeparator: s("\\->", "\\|"),
						leftSeparator: "<\\-",
						closer: "\\]\\]",
						legacySeparator: "\\|",
						legacyText: "(" + r("]|") + "?)"
					},
					N = d.replace("\\-", "") + "+",
					C = "\\$(" + N + ")",
					k = "'s" + c + "(" + N + ")",
					L = "\\b" + s("it", "time") + "\\b",
					A = "its" + c + "(" + N + ")",
					O = {
						opener: "\\(",
						name: "(" + s(d.replace("]", "\\/]") + d + "*", C) + "):",
						closer: "\\)"
					},
					M = "<<[^>\\s]+\\s*(?:\\\\.|'(?:[^'\\\\]*\\\\.)*[^'\\\\]*'|\"(?:[^\"\\\\]*\\\\.)*[^\"\\\\]*\"|[^'\"\\\\>]|>(?!>))*>>",
					_ = {
						name: "\\w[\\w\\-]*",
						attrs: "(?:\"[^\"]*\"|'[^']*'|[^'\">])*?"
					},
					D = "\\|(" + d.replace("]", "_]") + "*)>",
					P = "<(" + d.replace("]", "_]") + "*)\\|",
					H = {
						single: n("'"),
						"double": n('"')
					},
					B = "\\b(\\d+(?:\\.\\d+)?(?:[eE][+\\-]?\\d+)?|NaN)" + o("m?s") + "\\b";
				T.main = T.opener + s(T.text + T.rightSeparator, T.text.replace("*", "*?") + T.leftSeparator) + T.text, e = {
					upperLetter: "[A-ZÀ-ÞŐŰ]",
					lowerLetter: "[a-z0-9_\\-ß-ÿőű]",
					anyLetter: d,
					anyLetterStrict: v,
					unquoted: m,
					escapedLine: "\\\\\\n",
					br: "\\n",
					comment: "<!--[^]*?-->",
					commentOpener: l("<!--"),
					tag: "<\\/?" + _.name + _.attrs + ">",
					tagOpener: l("<"),
					url: "(" + s("https?", "mailto", "javascript", "ftp", "data") + ":\\/\\/[^\\s<]+[^<.,:;\"')\\]\\s])",
					bullet: g,
					hr: E,
					heading: S,
					align: x,
					strong: a("__", "**"),
					strongOpener: l("__", "**"),
					em: a("_", "*"),
					emOpener: l("_", "*"),
					del: a("~~"),
					delOpener: l("~~"),
					italic: a("//"),
					italicOpener: l("//"),
					bold: a("''"),
					boldOpener: l("''"),
					sup: a("^^"),
					supOpener: l("^^"),
					verbatim: "(`+)" + c + "([^]*?[^`])" + c + "\\1(?!`)",
					verbatimOpener: l("`"),
					collapsed: "{([^]*?[^}])}",
					collapsedOpener: l("{"),
					bulleted: y,
					numbered: w,
					hookAppendedFront: "\\[",
					hookPrependedFront: D + "\\[",
					hookAnonymousFront: "\\[",
					hookBack: "\\]" + o(P),
					hookAppendedBack: "\\]" + P,
					passageLink: T.main + T.closer,
					passageLinkOpener: l("[["),
					legacyLink: T.opener + T.legacyText + T.legacySeparator + T.legacyText + T.closer,
					legacyLinkOpener: l("[["),
					simpleLink: T.opener + T.legacyText + T.closer,
					simpleLinkOpener: l("[["),
					macroFront: O.opener + u(O.name),
					macroName: O.name,
					groupingFront: "\\(" + o(O.name),
					groupingBack: "\\)",
					twine1Macro: M,
					variableProperty: k,
					variable: C,
					hookRef: "\\?(" + d + "+)\\b",
					hookRefOpener: l("?"),
					cssTime: "\\b(\\d+\\.?\\d*|\\d*\\.?\\d+)(m?s)\\b",
					colour: s(f(s("Red", "Orange", "Yellow", "Lime", "Green", "Cyan", "Aqua", "Blue", "Navy", "Purple", "Fuchsia", "Magenta", "White", "Gray", "Grey", "Black")), "#[\\dA-Fa-f]{3}(?:[\\dA-Fa-f]{3})?"),
					number: B,
					"boolean": "(true|false|null|undefined)",
					identifier: L,
					itsProperty: A,
					string: s(H.single, H.double),
					is: h + f("is") + o(" not", " in") + h,
					isNot: s(h + f("is not") + h, "!="),
					and: s(h + f("and") + h, "&&"),
					or: s(h + f("or") + h, "\\|\\|"),
					not: s(h + f("not") + h, "!" + o("=")),
					inequality: s("<(?!=)", "<=", ">(?!=)", ">="),
					isIn: h + f("is in") + h,
					contains: h + f("contains") + h,
					arithmetic: s("\\+", "\\-", "\\*", "\\/", "%") + o("="),
					comma: ",",
					spread: "\\.\\.\\." + o("\\."),
					to: s(h + f("to") + h, "="),
					into: h + "into" + h,
					augmentedAssign: s("\\+", "\\-", "\\*", "\\/", "%") + "="
				}, typeof module == "object" ? module.exports = e : typeof define == "function" && define.amd ? define("markup/patterns", [], function () {
					return e
				}) : this.Patterns = e
			}.call(this || (typeof global != "undefined" ? global : window)),
			function () {
				"use strict";

				function t(t) {
					function f(e) {
						return e = e || "innerText",
							function (t) {
								var n = t.reduceRight(function (e, t, n) {
										return e || (n ? t : "")
									}, ""),
									r = {};
								return r[e] = n, r
							}
					}

					function l(e, t) {
						return Object.keys(t).forEach(function (n) {
							t[n].fn = function (t, r) {
								var i = t(r);
								return i.match || (i.match = r), i.type || (i.type = n), i.innerMode || (i.innerMode = e), i
							}.bind(t[n], t[n].fn)
						}), t
					}
					var n, r, i, s, o, u = [],
						a = [];
					return n = l(u, {
						hr: {
							fn: Object
						},
						bulleted: {
							fn: function (e) {
								return {
									depth: e[1].length,
									innerText: e[2]
								}
							}
						},
						heading: {
							fn: function (e) {
								return {
									depth: e[1].length,
									innerText: e[2]
								}
							}
						},
						align: {
							fn: function (e) {
								var t, n = e[1],
									r = n.indexOf("><");
								return~ r ? t = Math.round(r / (n.length - 2) * 50) : n[0] === "<" && n.slice(-1) === ">" ? t = "justify" : n.includes(">") ? t = "right" : n.includes("<") && (t = "left"), {
									align: t
								}
							}
						},
						numbered: {
							fn: function (e) {
								return {
									depth: e[1].length / 2,
									innerText: e[2]
								}
							}
						}
					}), r = l(u, {
						twine1Macro: {
							fn: Object
						},
						br: {
							fn: Object
						},
						strong: {
							fn: f()
						},
						em: {
							fn: f()
						},
						bold: {
							fn: f()
						},
						italic: {
							fn: f()
						},
						del: {
							fn: f()
						},
						sup: {
							fn: f()
						},
						comment: {
							fn: Object
						},
						tag: {
							fn: Object
						},
						url: {
							fn: Object
						},
						passageLink: {
							fn: function (e) {
								var t = e[1],
									n = e[2],
									r = e[3];
								return {
									type: "twineLink",
									innerText: n ? r : t,
									passage: t ? r : n
								}
							}
						},
						simpleLink: {
							fn: function (e) {
								return {
									type: "twineLink",
									innerText: e[1],
									passage: e[1]
								}
							}
						},
						hookPrependedFront: {
							fn: function (e) {
								return {
									name: e[1],
									tagPosition: "prepended"
								}
							}
						},
						hookAnonymousFront: {
							fn: Object,
							canFollow: ["macro", "variable"]
						},
						hookAppendedFront: {
							fn: Object,
							cannotFollow: ["macro", "variable"]
						},
						hookBack: {
							fn: function () {
								return {
									type: "hookAppendedBack",
									matches: {
										hookPrependedFront: "hook",
										hookAnonymousFront: "hook"
									}
								}
							}
						},
						hookAppendedBack: {
							fn: function (e) {
								return {
									name: e[1],
									tagPosition: "appended",
									matches: {
										hookAppendedFront: "hook"
									}
								}
							}
						},
						verbatim: {
							fn: function (e) {
								return {
									verbatim: e[2]
								}
							}
						},
						collapsed: {
							fn: function (e) {
								return {
									innerText: e[1].replace(/[\s\n]+/g, " ").trim()
								}
							}
						},
						escapedLine: {
							fn: Object
						},
						legacyLink: {
							fn: function (e) {
								return {
									type: "twineLink",
									innerText: e[1],
									passage: e[2]
								}
							}
						}
					}), i = l(a, {
						macroFront: {
							fn: function (e) {
								return {
									name: e[1]
								}
							}
						},
						groupingBack: {
							fn: function () {
								return {
									matches: {
										groupingFront: "grouping",
										macroFront: "macro"
									}
								}
							}
						},
						hookRef: {
							fn: f("name")
						},
						variable: {
							fn: f("name")
						}
					}), s = l(a, Object.assign({
						macroName: {
							canFollow: [null],
							fn: function (e) {
								return e[2] ? {
									isMethodCall: !0,
									innerText: e[2]
								} : {
									isMethodCall: !1
								}
							}
						},
						groupingFront: {
							fn: Object
						},
						variableProperty: {
							fn: f("name")
						},
						string: {
							fn: Object
						},
						cssTime: {
							fn: function (e) {
								return {
									value: +e[1] * (e[2].toLowerCase() === "s" ? 1e3 : 1)
								}
							}
						},
						colour: {
							fn: function (e) {
								var t, n = e[0].toLowerCase(),
									r = {
										red: "e61919",
										orange: "e68019",
										yellow: "e5e619",
										lime: "80e619",
										green: "19e619",
										cyan: "19e5e6",
										aqua: "19e5e6",
										blue: "197fe6",
										navy: "1919e6",
										purple: "7f19e6",
										fuchsia: "e619e5",
										magenta: "e619e5",
										white: "fff",
										black: "000",
										gray: "888",
										grey: "888"
									};
								return Object.hasOwnProperty.call(r, n) ? t = "#" + r[n] : t = n, {
									colour: t
								}
							}
						},
						number: {
							fn: function (e) {
								return {
									value: parseFloat(e[0])
								}
							}
						},
						arithmetic: {
							fn: function (e) {
								return {
									operator: e[0]
								}
							}
						},
						inequality: {
							fn: function (e) {
								return {
									operator: e[0]
								}
							}
						},
						augmentedAssign: {
							fn: function (e) {
								return {
									operator: e[0][0]
								}
							}
						},
						identifier: {
							fn: f("name")
						},
						itsProperty: {
							fn: f("name")
						}
					}, ["boolean", "is", "to", "into", "and", "or", "not", "isNot", "comma", "spread", "contains", "isIn"].reduce(function (e, t) {
						return e[t] = {
							fn: Object
						}, e
					}, {}))), [].push.apply(u, Object.keys(n).concat(Object.keys(r)).concat(Object.keys(i))), [].push.apply(a, Object.keys(i).concat(Object.keys(s))), o = Object.assign({}, n, r, i, s), Object.keys(o).forEach(function (t) {
						var n = e[t];
						typeof n != "string" ? o[t].pattern = n : o[t].pattern = new RegExp("^(?:" + n + ")"), e[t + "Opener"] && (o[t].opener = e[t + "Opener"])
					}), Object.assign(t.rules, o), t.startMode = u, t
				}

				function n(n) {
					var r = Object.freeze({
						lex: t(n).lex,
						Patterns: e
					});
					return r
				}
				var e;
				typeof module == "object" ? (e = require("./patterns"), module.exports = n(require("./lexer"))) : typeof define == "function" && define.amd ? define("markup/markup", ["./lexer", "./patterns"], function (t, r) {
					return e = r, n(t)
				}) : (e = this.Patterns, this.TwineMarkup = n(this.TwineLexer))
			}.call(this || (typeof global != "undefined" ? global : window)), define("utils/selectors", [], function () {
				"use strict";
				return Object.freeze({
					passage: "tw-passage",
					story: "tw-story",
					sidebar: "tw-sidebar",
					internalLink: "tw-link",
					brokenLink: "tw-broken-link",
					hook: "tw-hook",
					pseudoHook: "tw-pseudo-hook",
					expression: "tw-expression",
					enchanter: "[enchanter]",
					script: "[role=script]",
					stylesheet: "[role=stylesheet]",
					storyData: "tw-storydata",
					passageData: "tw-passagedata",
					whitespace: "tw-char[char=space], tw-char[char=tab], br"
				})
			}), define("utils/customelements", [], function () {
				"use strict";
				if (!document.registerElement) return;
				var e = {};
				return function t(n, r) {
					var i, s = Object.create(HTMLElement.prototype),
						o = {};
					return r = Array.from(arguments).slice(1), r.forEach(function (e) {
						o[e] = {
							value: null
						}
					}), Object.defineProperties(s, o), i = document.registerElement(n, {
						prototype: s
					}), e[n] = i, t
				}("tw-storydata", "storyname", "startnode", "creator", "creator-version", "options")("tw-passagedata", "name", "pid", "position")("tw-story")("tw-debugger")("tw-passage")("tw-link", "passage-id", "passage-expr")("tw-broken-link")("tw-expression", "type", "name", "title", "js")("tw-sidebar")("tw-icon")("tw-align")("tw-hook", "name", "code")("tw-pseudo-hook")("tw-transition-container")("tw-temp-container"), Object.freeze(e)
			}), define("utils", ["jquery", "markup/markup", "utils/selectors", "utils/customelements"], function (e, t, n) {
				"use strict";
				var r = {
						configurable: 0,
						writable: 0
					},
					i = {
						"transition-in": Object.create(null),
						"transition-out": Object.create(null)
					},
					s = {
						lockProperties: function (e) {
							var t, n, i = Object.keys(e),
								s = {};
							for (t = 0; t < i.length; t++) n = i[t], s[n] = r;
							return Object.defineProperties(e, s)
						},
						lockProperty: function (e, t, n) {
							var i = Object.create(r);
							return n && (i.value = n), Object.defineProperty(e, t, i), e
						},
						containsError: function () {
							return Array.from(arguments).reduce(function (e, t) {
								return e ? e : t instanceof Error ? t : Array.isArray(t) ? s.containsError.apply(this, t) : !1
							}, !1)
						},
						toJSLiteral: JSON.stringify,
						toTSStringLiteral: function (e) {
							var t = Math.max.apply(0, (e.match(/(`+)/g) || []).map(function (e) {
								return e.length
							}).concat(0)) + 1;
							return "`".repeat(t) + e + "`".repeat(t)
						},
						cssTimeUnit: function (e) {
							var t;
							if (typeof e == "string") {
								e = e.toLowerCase();
								if (e.slice(-2) === "ms") return +e.slice(0, -2) || 0;
								if (e.slice(-1) === "s") return +e.slice(0, -1) * 1e3 || 0
							} else if (Array.isArray(e)) return t = [], e.forEach(function (e) {
								var n = s.cssTimeUnit(e);
								n > 0 && t.push(n)
							}), t;
							return 0
						},
						nth: function (e) {
							var t = (e + "").slice(-1);
							return e + (t === "1" ? "st" : t === "2" ? "nd" : t === "3" ? "rd" : "th")
						},
						plural: function (e, t) {
							return e + " " + t + (e > 1 ? "s" : "")
						},
						unescape: function (e) {
							var t;
							if (e.length <= 1) return e;
							switch (e) {
							case "&lt;":
								return "<";
							case "&gt;":
								return ">";
							case "&amp;":
								return "&";
							case "&quot;":
								return '"';
							case "&#39;":
								return "'";
							case "&nbsp;":
								return String.fromCharCode(160);
							case "&zwnj;":
								return String.fromCharCode(8204);
							default:
								return t = document.createElement("p"), t.innerHTML = e, t.textContent
							}
						},
						escape: function (e) {
							return e.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
						},
						insensitiveName: function (e) {
							return (e + "").toLowerCase().replace(/-|_/g, "")
						},
						wrapHTMLTag: function (e, t) {
							return "<" + t + ">" + e + "</" + t + ">"
						},
						charToSpan: function (e) {
							var t = e === "&#39;" ? '"' : "'",
								n = s.unescape(e);
							switch (n) {
							case " ":
								n = "space";
								break;
							case "	":
								n = "tab"
							}
							return "<tw-char value=" + t + n + t + ">" + e + "</tw-char>"
						},
						charSpanify: function (e) {
							if (typeof e != "string") throw new Error("charSpanify received a non-string:" + e);
							return e.replace(/&[#\w]+;|./g, s.charToSpan)
						},
						findAndFilter: function (t, n) {
							return t = e(t || document.documentElement), t.filter(n).add(t.find(n))
						},
						closestHookSpan: function (e) {
							var t = e.closest(n.hook + "," + n.pseudoHook);
							return t.length ? t : e
						},
						transitionReplace: function (t, n, r) {
							var i, o, u;
							t = s.closestHookSpan(t), i = e("<tw-transition-container>").css("position", "relative"), i.insertBefore(t.first()), n && (o = e("<tw-transition-container>").appendTo(i), n.appendTo(o)), u = e("<tw-transition-container>").css("position", "absolute").prependTo(i), t.detach().appendTo(u), s.transitionOut(u, r), n && s.transitionIn(o, r, function () {
								o.unwrap().children().first().unwrap()
							})
						},
						transitionOut: function (e, t) {
							function i() {
								e.remove()
							}
							var n, r = e.filter(function (e, t) {
								return t.nodeType === Node.TEXT_NODE
							}).length > 0;
							r && (e = e.wrapAll("<tw-transition-container>").parent()), e.attr("data-t8n", t).addClass("transition-out"), n = s.transitionTime(t, "transition-out"), n ? window.setTimeout(i, n) : i()
						},
						transitionIn: function (e, t) {
							function i() {
								r ? e.contents().unwrap() : e.removeClass("transition-in").removeAttr("data-t8n")
							}
							var n, r = e.filter(function (e, t) {
								return t.nodeType === Node.TEXT_NODE
							}).length > 0;
							r && (e = e.wrapAll("<tw-transition-container>").parent()), e.attr("data-t8n", t).addClass("transition-in"), n = s.transitionTime(t, "transition-in"), n ? window.setTimeout(i, n) : i()
						},
						transitionTime: function (t, n) {
							var r;
							return i[n][t] || (r = e("<p>").appendTo(document.body).attr("data-t8n", t).addClass(n), i[n][t] = s.cssTimeUnit(r.css("animation-duration")) + s.cssTimeUnit(r.css("animation-delay")), r.remove()), i[n][t]
						},
						$: function (t, n) {
							return e(t, n).not(".transition-out, .transition-out *")
						},
						log: function (e) {
							console.log(e)
						},
						impossible: function (e, t) {
							console.error(e + "(): " + t)
						},
						assert: function (e) {
							e || console.error("Assertion failed!")
						},
						assertMustHave: function (e, t) {
							for (var n = 0; n < t.length; n += 1) t[n] in e || console.error("Assertion failed: " + e + " lacks property " + t[n])
						},
						assertOnlyHas: function (e, t) {
							for (var n in e) t.indexOf(n) === -1 && console.error("Assertion failed: " + e + " had unexpected property '" + n + "'!")
						},
						storyElement: e(n.story)
					};
				return Object.freeze(s)
			}), define("twinescript/compiler", ["utils"], function (e) {
				"use strict";

				function t(e, t) {
					var n, r = arguments.length === 1 ? t : Array.prototype.slice.call(arguments, 1);
					for (n = 0; n < e.length; n += 1)
						if (0 + r.indexOf(e[n].type) > -1) return n;
					return NaN
				}

				function n(e) {
					var n = Array.prototype.slice.call(arguments, 0);
					return n[0] = Array.from(e).reverse(), e.length - 1 - t.apply(0, n)
				}

				function r(t, n, r) {
					return "Operations.makeAssignmentRequest(" + t + "," + n + "," + e.toJSLiteral(r) + ")"
				}

				function i(s, o) {
					var u, a, f, l, c, h, p, d, v = !0,
						m = !0,
						g = !1;
					if (!s) return "";
					s = [].concat(s);
					if (s.length === 1) {
						c = s[0];
						if (c.type === "identifier") return o ? "Operations.makeVarRef(Operations.Identifiers, '" + c.text + "' )" : " Operations.Identifiers." + c.text + " ";
						if (c.type === "variable") return " Operations." + (o ? "makeVarRef" : "get") + "(State.variables," + e.toJSLiteral(c.name) + ")";
						if (c.type === "hookRef") return o ? "Operations.makeVarRef(section.selectHook('?" + c.name + "'), 'TwineScript_Assignee')" : " section.selectHook('?" + c.name + "') ";
						if (c.type === "string") return c.text.replace(/\n/g, "\\n");
						if (c.type === "colour") return "Colour.create(" + e.toJSLiteral(c.colour) + ")";
						if (c.type === "root") return i(c.children)
					}
					return (u = t(s, "comma")) > -1 ? h = "," : (u = t(s, "spread")) > -1 ? (h = "Operations.makeSpreader(", f = i(s.splice(u + 1)) + ")", v = !1) : (u = t(s, "to")) > -1 ? (d = "to", a = i(s.slice(0, u), "varRef")) : (u = t(s, "into")) > -1 ? (d = "into", f = i(s.slice(0, u), "varRef"), a = i(s.slice(u + 1), "varRef")) : (u = t(s, "augmentedAssign")) > -1 ? (d = s[u].operator, a = i(s.slice(0, u), "varRef"), f = "Operations['" + d + "'](" + (i(s.slice(0, u)) + "," + i(s.splice(u + 1))) + ")") : (u = t(s, "and", "or")) > -1 ? h = s[u].type === "and" ? " && " : " || " : (u = t(s, "is", "isNot", "contains", "isIn")) > -1 ? (g = !0, p = s[u].type) : (u = t(s, "inequality")) > -1 ? (g = !0, p = s[u].operator) : (u = t(s, "arithmetic")) > -1 ? (p = s[u].operator, "+-".includes(s[u].text) && (a = i(s.slice(0, u)), a || (a = "0"))) : (u = t(s, "not")) > -1 ? (h = "!", v = !1) : (u = n(s, "variableProperty")) > -1 ? (a = "Operations." + (o ? "makeVarRef" : "get") + "(" + i(s.slice(0, u)) + "," + e.toJSLiteral(s[u].name) + ")", h = " ", v = m = !1) : (u = n(s, "itsProperty")) > -1 ? (a = "Operations.get(Operations.Identifiers.it," + e.toJSLiteral(s[u].name) + ")", h = " ", v = m = !1) : (u = t(s, "macro")) > -1 ? (l = s[u].children[0], e.assert(l.type === "macroName"), h = "Macros.run(" + (l.isMethodCall ? i(l.children) : '"' + s[u].name + '"') + ", [" + "section," + i(s[u].children.slice(1)) + "])", v = m = !1) : (u = t(s, "grouping")) > -1 && (h = "(" + i(s[u].children, o) + ")", v = m = !1), u > -1 ? (a = a || i(s.slice(0, u), o).trim(), f = f || i(s.splice(u + 1)).trim(), g && !a && (a = " Operations.Identifiers.it "), v && !a || m && !f ? "new SyntaxError('I need some code to be " + (v ? "left " : "") + (v && m ? "and " : "") + (m ? "right " : "") + "of " + '"' + s[u].text + '"' + "')" : h ? a + h + f : d ? r(a, f, d) : p ? " Operations[" + e.toJSLiteral(p) + "](" + a + "," + f + ") " : "") : s.length === 1 ? ((c.value || c.text) + "").trim() : s.reduce(function (e, t) {
						return e + i(t, o)
					}, "")
				}
				return i
			}), define("renderer", ["utils", "markup/markup", "twinescript/compiler"], function (e, t, n) {
				"use strict";

				function r(t, n) {
					return e.wrapHTMLTag(o.render(t.children), n)
				}
				var i = "text-align: center; max-width:50%; ",
					s = e.escape,
					o = {
						options: {},
						exec: function () {
							var n, r;
							return function (i) {
								return typeof i != "string" ? (e.impossible("Renderer.exec", "source was not a string, but " + typeof i), "") : i === n ? r : (n = i, r = this.render(t.lex(i).children), r)
							}
						}(),
						render: function u(a) {
							var f, l, c, h, p, d, v, m = 0,
								g = "";
							if (!a) return g;
							l = a.length;
							for (; m < l; m += 1) {
								f = a[m];
								switch (f.type) {
								case "twine1Macro":
									g += "<tw-error class='error' title=\"" + s(f.text) + '">' + "Twine 2 macros use a different syntax to Twine 1 macros." + "</tw-error>";
									break;
								case "numbered":
								case "bulleted":
									c = f.type === "numbered" ? "ol" : "ul", g += "<" + c + ">";
									while (m < l && a[m] && a[m].type === f.type) g += r(a[m], "li"), m += 1, a[m] && a[m].type === "br" && (m += 1);
									g += "</" + c + ">";
									break;
								case "align":
									while (f && f.type === "align") {
										h = "", p = "", d = f.align, v = m += 1;
										if (d === "left") break;
										while (m < l && a[m] && a[m].type !== "align") m += 1;
										p += u(a.slice(v, m));
										switch (d) {
										case "center":
											h += i + "margin:auto;";
											break;
										case "justify":
										case "right":
											h += "text-align: " + d + ";";
											break;
										default:
											+d && (h += i + "margin-left: " + d + "%;")
										}
										g += "<tw-align " + (h ? 'style="' + h + '"' : "") + (o.options.debug ? ' title="' + f.text + '"' : "") + ">" + p + "</tw-align>\n", f = a[m]
									}
									break;
								case "heading":
									g += r(f, "h" + f.depth);
									break;
								case "br":
								case "hr":
									g += "<" + f.type + ">";
									break;
								case "comment":
									break;
								case "inlineUrl":
									g += '<a class="link" href="' + s(f.text) + '">' + f.text + "</a>";
									break;
								case "tag":
									g += f.text;
									break;
								case "sub":
								case "sup":
								case "del":
								case "strong":
								case "em":
									g += r(f, f.type);
									break;
								case "bold":
									g += r(f, "b");
									break;
								case "italic":
									g += r(f, "i");
									break;
								case "twineLink":
									var y = t.lex("(link-goto:" + e.toJSLiteral(f.innerText) + "," + e.toJSLiteral(f.passage) + ")");
									g += u(y.children);
									break;
								case "hook":
									g += "<tw-hook " + (f.name ? 'name="' + f.name + '"' : "") + (o.options.debug && f.name ? ' title="Hook: ?' + f.name + '"' : "") + ' code="' + s(f.innerText) + '">' + "</tw-hook>";
									break;
								case "verbatim":
									g += s(f.verbatim);
									break;
								case "hookRef":
								case "variable":
								case "macro":
									g += '<tw-expression type="' + f.type + '" name="' + s(f.name || f.text) + '"' + (o.options.debug ? ' title="' + s(f.text) + '"' : "") + ' js="' + s(n(f)) + '">' + "</tw-expression>";
									break;
								default:
									g += f.children && f.children.length ? u(f.children) : f.text
								}
							}
							return g
						}
					};
				return Object.freeze(o)
			}), define("story", ["jquery", "utils", "utils/selectors"], function (e, t, n) {
				"use strict";
				var r = {
					options: {},
					effects: {},
					startPassage: "",
					passageNamed: function (r) {
						var i = e(n.storyData + " > " + n.passageData + "[name=" + t.toJSLiteral(r) + "]");
						return !!i.length && i
					},
					passageWithID: function (t) {
						var r = e(n.storyData + " > " + n.passageData + '[pid="' + t + '"]');
						return !!r.length && r
					},
					getPassageName: function (e) {
						var t = this.passageWithID(e);
						return t ? t.attr("name") : ""
					},
					getPassageID: function (e) {
						var t = this.passageNamed(e);
						return t ? t.attr("pid") : ""
					}
				};
				return t.log("Loaded the story (" + e(n.passageData).length + " passages)"), Object.seal(r)
			}), define("state", ["story", "utils"], function (e, t) {
				"use strict";
				var n = {
						passage: "",
						variables: null,
						create: function (e, t) {
							var r = Object.create(n);
							return r.passage = e || "", r.variables = Object.assign(Object.create(this.variables), t), r
						}
					},
					r = [],
					i = -1,
					s = n.create(),
					o = {
						get passage() {
							return s.passage
						}, get variables() {
							return s.variables
						}, get pastLength() {
							return i
						}, get futureLength() {
							return r.length - 1 - i
						}, passageNameVisited: function (t) {
							var n = e.getPassageID(t);
							return this.passageIDVisited(n)
						},
						passageIDVisited: function (t) {
							var n, s = 0;
							if (!e.passageWithID(t)) return 0;
							for (n = 0; n <= i; n++) s += +(t === r[n].passage);
							return s
						},
						passageNameLastVisited: function (t) {
							var n = e.getPassageID(t);
							return this.passageIDLastVisited(n)
						},
						passageIDLastVisited: function (t) {
							var n;
							if (!e.passageWithID(t)) return Infinity;
							if (t === s.passage) return 0;
							for (n = i; n > 0; n--)
								if (r[n].passage === t) return i - n + 1;
							return Infinity
						},
						previousPassage: function () {
							return r[i].passage
						},
						pastPassageNames: function () {
							var t, n = [];
							for (t = i - 1; t >= 0; t--) n.unshift(e.getPassageName(r[t].passage));
							return n
						},
						newPresent: function (e) {
							s = (r[i] || n).create(e)
						},
						play: function (e) {
							s || t.impossible("State.play", "present is undefined!"), s.passage = e, r = r.slice(0, i + 1).concat(s), i += 1, this.newPresent(e)
						},
						rewind: function (e) {
							var t = 1,
								n = !1;
							if (e)
								if (typeof e == "string") {
									t = this.passageIDLastVisited(e);
									if (t === Infinity) return
								} else typeof e == "number" && (t = e);
							for (; t > 0 && i >= 0; t--) n = !0, i -= 1;
							return n && this.newPresent(r[i].passage), n
						},
						fastForward: function (e) {
							var t = 1,
								n = !1;
							typeof e == "number" && (t = e);
							for (; t > 0 && r.length > 0; t--) n = !0, i += 1;
							return n && this.newPresent(r[i].passage), n
						}
					};
				return Object.seal(n), Object.freeze(o)
			}), define("utils/operationutils", ["utils"], function (e) {
				"use strict";

				function t(e) {
					return !!e && (typeof e == "object" || typeof e == "function")
				}

				function n(e) {
					return Array.isArray(e) ? "array" : e instanceof Map ? "datamap" : e instanceof Set ? "dataset" : e && typeof e == "object" ? "object" : ""
				}

				function r(e) {
					return typeof e == "string" || Array.isArray(e)
				}

				function i(n) {
					if (!t(n)) return n;
					if (typeof n.TwineScript_Clone == "function") return n.TwineScript_Clone();
					if (Array.isArray(n)) return [].concat(n);
					if (n instanceof Map) return new Map(n);
					if (n instanceof Set) return new Set(n);
					if (typeof n == "function") return n.bind();
					switch (Object.getPrototypeOf(n)) {
					case Object.prototype:
						return Object.assign({}, n);
					case null:
						return Object.assign(Object.create(null), n)
					}
					return e.log(n), e.impossible("Operations.clone", "The value " + n + " cannot be cloned!"), n
				}

				function s(e, n, r) {
					return typeof n == "string" && t(r) && "TwineScript_ToString" in r ? e(n, r.TwineScript_ToString()) : typeof r == "string" && t(n) && "TwineScript_ToString" in n ? e(n.TwineScript_ToString(), r) : !1
				}

				function o(n) {
					return t(n) && "TwineScript_ObjectName" in n ? n.TwineScript_ObjectName : Array.isArray(n) ? "an array" : n instanceof Map ? "a datamap" : n instanceof Set ? "a dataset" : typeof n == "string" || typeof n == "number" ? "the " + typeof n + " " + e.toJSLiteral(n) : Object.getPrototypeOf(Object(n)) === null ? "a bare object" : String(n)
				}

				function u(n) {
					if (n.innerType) return n.pattern === "either" ? (e.assert(Array.isArray(n.innerType)), n.innerType.map(u).join(" or ")) : n.pattern === "optional" ? "(an optional) " + u(n.innerType) : u(n.innerType);
					return n === String || n === Number || n === Boolean ? "a " + n.name.toLowerCase() : n === Map || n === Set ? "a data" + n.name.toLowerCase() : n === Array ? "an " + n.name.toLowerCase() : t(n) && "TwineScript_TypeName" in n ? n.TwineScript_TypeName : o(n)
				}

				function a(e, t) {
					if (e) {
						if (r(e)) return e.indexOf(t) > -1;
						if (e instanceof Set || e instanceof Map) return e.has(t)
					}
					return Object.is(e, t)
				}
				var f = Object.freeze({
					isObject: t,
					collectionType: n,
					isSequential: r,
					clone: i,
					coerceToString: s,
					objectName: o,
					typeName: u,
					contains: a
				});
				return f
			}), define("macros", ["jquery", "story", "utils", "utils/operationutils"], function (e, t, n, r) {
				"use strict";

				function u(e) {
					return function (i) {
						i = i.reduce(function (e, t) {
							if (t && t.spreader === !0)
								if (Array.isArray(t.value) || typeof t.value == "string")
									for (var n = 0; n < t.value.length; n++) e.push(t.value[n]);
								else t.value instanceof Set ? t.value.forEach(function (t) {
									e.push(t)
								}) : e.push(new TypeError("I can't spread out " + r.objectName(t.value) + ", which is not a string or array."));
							else e.push(t);
							return e
						}, []);
						var s = n.containsError(i);
						return s ? s : e.apply(0, i)
					}
				}

				function a(e, t) {
					if (t === null) return e === undefined;
					if (t.innerType)
						if (t.pattern === "optional" || t.pattern === "zero or more") {
							if (e === undefined) return !0;
							t = t.innerType
						} else if (t.pattern === "either") return t.innerType.some(function (t) {
						return a(e, t)
					});
					return t !== undefined && e === undefined ? !1 : t === i.TypeSignature.Any && e !== undefined ? !0 : t === String ? typeof e == "string" : t === Boolean ? typeof e == "boolean" : t === Number ? typeof e == "number" : t === Array ? Array.isArray(e) : Object.isPrototypeOf.call(t, e)
				}

				function f(e, t, i) {
					return i ? (i = [].concat(i), e = "(" + (Array.isArray(e) && e.length > 1 ? e[0] : e) + ":)", function () {
						var o = Array.from(arguments).slice(1),
							u, f, l, c, h;
						for (l = 0, c = Math.max(o.length, i.length); l < c; l += 1) {
							u = i[l], f = o[l];
							if (l >= i.length && !h) return new TypeError(o.length - i.length + " too many values were given to this " + e + " macro.");
							u || (u = h), u.innerType && (u.pattern === "rest" || u.pattern === "zero or more") && (h = u.innerType, u.pattern === "rest" && (u = u.innerType));
							if (!a(f, u)) return f === undefined ? new TypeError("The " + e + " macro needs " + n.plural(i.length - l, "more value") + ".") : new TypeError(e + "'s " + n.nth(l + 1) + " value is " + r.objectName(f) + ", but should be " + r.typeName(u) + ".")
						}
						return t.apply(0, arguments)
					}) : t
				}

				function l(e, t, r) {
					Array.isArray(e) ? e.forEach(function (e) {
						n.lockProperty(s, n.insensitiveName(e), r)
					}) : n.lockProperty(s, n.insensitiveName(e), r)
				}
				var i, s = {},
					o = {};
				return i = {
					has: function (e) {
						return e = n.insensitiveName(e), s.hasOwnProperty(e)
					},
					get: function (e) {
						return e = n.insensitiveName(e), s.hasOwnProperty(e) && s[e]
					},
					add: function c(e, t, n) {
						return l(e, "value", u(f(e, t, n))), c
					},
					addChanger: function h(e, t, r, i) {
						return n.assert(r), l(e, "changer", u(f(e, t, i))), o[Array.isArray(e) ? e[0] : e] = r, h
					},
					getChangerFn: function (t) {
						return o[t]
					},
					TypeSignature: {
						optional: function (e) {
							return {
								pattern: "optional",
								innerType: e
							}
						},
						zeroOrMore: function (e) {
							return {
								pattern: "zero or more",
								innerType: e
							}
						},
						either: function () {
							return {
								pattern: "either",
								innerType: Array.from(arguments)
							}
						},
						rest: function (e) {
							return {
								pattern: "rest",
								innerType: e
							}
						},
						Any: {
							TwineScript_TypeName: "anything"
						}
					},
					run: function (e, r) {
						var s;
						return n.containsError(e) ? e : i.has(e) ? (s = i.get(e), s(r)) : t.passageNamed(e) ? new Error("Passage macros are not implemented yet.") : new ReferenceError("I can't run the macro '" + e + "' because it doesn't exist.")
					}
				}, Object.freeze(i)
			}), define("datatypes/colour", ["utils", "jquery"], function (e, t) {
				"use strict";

				function u(e) {
					if (e in o) return o[e];
					var n = t("<p>").css("background-color", e).css("background-color");
					return n.startsWith("rgb") ? n = n.match(/\d+/g).reduce(function (e, t, n) {
						return e["rgb" [n]] = +t, e
					}, {}) : n = {
						r: 192,
						g: 192,
						b: 192
					}, o[e] = n, n
				}

				function a(e) {
					return typeof e != "string" ? e : (e = e.replace("#", ""), e = e.replace(i, "$1$1$2$2$3$3"), {
						r: parseInt(e.slice(0, 2), 16),
						g: parseInt(e.slice(2, 4), 16),
						b: parseInt(e.slice(4, 6), 16)
					})
				}
				var n, r = /^([\da-fA-F])$/,
					i = /^([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
					s = /^([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
					o = Object.create(null);
				return n = Object.freeze({
					colour: !0,
					TwineScript_TypeName: "a colour",
					TwineScript_ObjectName: "a colour",
					"TwineScript_+": function (e) {
						var t = this,
							r = e;
						return n.create({
							r: Math.min(Math.round((t.r + r.r) * .6), 255),
							g: Math.min(Math.round((t.g + r.g) * .6), 255),
							b: Math.min(Math.round((t.b + r.b) * .6), 255)
						})
					},
					TwineScript_Print: function () {
						return "<tw-colour style='background-color:rgb(" + [this.r, this.g, this.b].join(",") + ");'></span>"
					},
					TwineScript_Clone: function () {
						return n.create(this)
					},
					toJSON: function () {
						return Object.assign({
							colour: !0
						}, this)
					},
					toHexString: function () {
						return e.assert(this !== n), "#" + this.r.toString(16).replace(r, "0$1") + this.g.toString(16).replace(r, "0$1") + this.b.toString(16).replace(r, "0$1")
					},
					create: function (e) {
						return typeof e == "string" ? n.isHexString(e) ? this.create(a(e)) : this.create(u(e)) : Object.assign(Object.create(this), e)
					},
					isHexString: function (e) {
						return typeof e == "string" && e[0] === "#" && (e.slice(1).match(i) || e.slice(1).match(s))
					}
				}), n
			}), define("datatypes/assignmentrequest", ["utils"], function (e) {
				"use strict";
				var t = Object.freeze({
					assignmentRequest: !0,
					TwineScript_TypeName: "an assignment operation",
					TwineScript_ObjectName: "an assignment operation",
					TwineScript_Print: function () {
						return "[an assignment operation]"
					},
					create: function (t, n, r) {
						return e.assert("propertyChain" in t && "object" in t), Object.assign(Object.create(this), {
							dest: t,
							src: n,
							operator: r
						})
					},
					TwineScript_Clone: function () {
						return t.create(this.dest, this.src, this.operator)
					}
				});
				return t
			}), define("twinescript/operations", ["utils", "state", "story", "datatypes/colour", "datatypes/assignmentrequest", "utils/operationutils"], function (e, t, n, r, i, s) {
				"use strict";

				function g(t, n) {
					var r = "Only I can use data keys beginning with ",
						i, s;
					if (s = e.containsError(t, n)) return s;
					if (n.startsWith("__")) return new Error(r + "'__'.");
					if (n.startsWith("TwineScript") && n !== "TwineScript_Assignee") return new Error(r + "'TwineScript'.");
					if (h(t))
						if (i = /(\d+)(?:st|[nr]d|th)/.exec(n)) n = i[1] - 1 + "";
						else if (n === "last") n = t.length - 1 + "";
					else if (i = /(\d+)(?:st|[nr]d|th)-last/.exec(n)) n = t.length - i[1] + "";
					else if (n !== "length") return new Error("You can only use positions ('4th', 'last', '2nd-last', etc.) and 'length' with a " + v(t) + ".");
					return n
				}

				function y(t, n) {
					return n = n || "do this to",
						function (r, i) {
							var s;
							return (s = e.containsError(r, i)) ? s : typeof r != "number" || typeof i != "number" ? new TypeError("I can only " + n + " numbers, not " + v(typeof r != "number" ? r : i) + ".") : t(r, i)
						}
				}

				function b(t) {
					return function (n, r) {
						var i;
						return (i = e.containsError(n, r)) ? i : n && n.varref ? new TypeError("I can't give an expression a new value.") : typeof n != typeof r || c(n) !== c(r) ? d(t, n, r) || new TypeError(v(n) + " isn't the same type of data as " + v(r)) : t(n, r)
					}
				}

				function w(e) {
					return function (t, n) {
						return u = t, e(u, n)
					}
				}
				var o, u = 0,
					a = /^(?:[1-9]\d*|0)$/,
					f = 0,
					l = s.isObject,
					c = s.collectionType,
					h = s.isSequential,
					p = s.clone,
					d = s.coerceToString,
					v = s.objectName,
					m = s.contains;
				return o = {
					create: function (e) {
						var t = Object.create(this);
						return t.Identifiers = {
							get it() {
								return u
							}, get time() {
								return Date.now() - e.timestamp
							}
						}, t
					},
					"+": b(function (e, t) {
						var n;
						return Array.isArray(e) ? [].concat(e, t) : e instanceof Map ? (n = new Map(e), t.forEach(function (e, t) {
							n.set(t, e)
						}), n) : e instanceof Set ? (n = new Set(e), t.forEach(function (e) {
							n.add(e)
						}), n) : typeof e["TwineScript_+"] == "function" ? e["TwineScript_+"](t) : e + t
					}),
					"-": b(function (e, t) {
						var n;
						return Array.isArray(e) ? e.filter(function (e) {
							return t.indexOf(e) === -1
						}) : e instanceof Set ? (n = new Set(e), t.forEach(function (e) {
							n.delete(e)
						}), n) : typeof e == "string" ? e.split(t).join("") : e - t
					}),
					"*": y(b(function (e, t) {
						return e * t
					}), "multiply"),
					"/": y(b(function (e, t) {
						return e / t
					}), "divide"),
					"%": y(b(function (e, t) {
						return e % t
					}), "modulus"),
					"<": w(y(b(function (e, t) {
						return e < t
					}), "do < to")),
					">": w(y(b(function (e, t) {
						return e > t
					}), "do > to")),
					"<=": w(y(b(function (e, t) {
						return e <= t
					}), "do <= to")),
					">=": w(y(b(function (e, t) {
						return e >= t
					}), "do >= to")),
					is: w(Object.is),
					isNot: w(function (e, t) {
						return !o.is(e, t)
					}),
					contains: w(m),
					isIn: w(function (e, t) {
						return m(t, e)
					}),
					get: function (n, r) {
						return n === null || n === undefined ? new ReferenceError("I can't get a property named '" + r + "' from " + typeof n + ".") : e.containsError(n) ? n : (r = g(n, r), e.containsError(r) ? r : (n instanceof Map ? !!n.has(r) : r in Object(n)) ? n instanceof Map ? n.get(r) : n[r] : n === t.variables ? f : new ReferenceError("I can't find a '" + r + "' data key in " + v(n)))
					},
					"delete": function (e, t) {
						if (Array.isArray(e) && a.exec(t)) {
							e.splice(t, 1);
							return
						}
						if (!delete e[t]) return new ReferenceError("I couldn't delete '" + t + "' from " + v(e) + ".")
					},
					makeSpreader: function (e) {
						return {
							value: e,
							spreader: !0
						}
					},
					makeVarRef: function () {
						function e(e, t) {
							return e instanceof Map ? e.get(t) : e[t]
						}

						function t(e, t, n) {
							e instanceof Map ? e.set(t, n) : e[t] = n
						}
						var n = Object.freeze({
							varref: !0,
							TwineScript_ObjectName: "the left half of an assignment operation",
							get deepestObject() {
								return this.propertyChain.slice(0, -1).reduce(e, this.object)
							},
							get deepestProperty() {
								return this.propertyChain.slice(-1)[0]
							},
							get: function () {
								return o.get(this.deepestObject, this.deepestProperty)
							},
							set: function (e) {
								e && e.TwineScript_AssignValue && (e = e.TwineScript_AssignValue()), l(e) && (e = p(e)), t(this.deepestObject, this.deepestProperty, e)
							},
							"delete": function () {
								o.delete(this.deepestObject, this.deepestProperty)
							}
						});
						return function (t, r) {
							return r = [].concat(r), r = r.reduce(function (t, n) {
								var r = t.chain,
									i = t.object;
								return n = g(i, n), r.push(n), i = e(i, n), {
									chain: r,
									object: i
								}
							}, {
								chain: [],
								object: t
							}).chain, u = r.reduce(o.get, t), Object.assign(Object.create(n), {
								object: t,
								propertyChain: r
							})
						}
					}(),
					makeAssignmentRequest: function (t, n, r) {
						var s, o = e.containsError(t, n);
						return o ? o : !!l(t) && "propertyChain" in t ? (s = t.propertyChain, (o = e.containsError(s)) ? o : Array.isArray(t.object[s[0]]) && s[1] && !a.exec(s[1]) ? new RangeError("Arrays can only have number data keys (not '" + s[1] + "').") : i.create(t, n, r)) : new TypeError("I can't give " + v(t) + " a new value.")
					}
				}, Object.freeze(o)
			}), define("twinescript/environ", ["macros", "state", "utils", "datatypes/colour", "twinescript/operations"], function (Macros, State, Utils, Colour, OperationsProto) {
				"use strict";
				return function environ(section) {
					(typeof section != "object" || !section) && Utils.impossible("TwineScript.environ", "no Section argument was given!");
					var Operations = OperationsProto.create(section);
					return Operations, Macros, State, Object.assign(section, {
						eval: function () {
							try {
								return eval(Array.from(arguments).join(""))
							} catch (e) {
								return Utils.log(e), Utils.log(Array.from(arguments).join("")), e.message = "☕ " + e.message, e
							}
						}
					})
				}
			}), define("utils/hookutils", ["jquery", "utils", "utils/selectors"], function (e, t, n) {
				"use strict";

				function r(e, t, n) {
					var r = e.textContent.length;
					if (t >= r) return;
					var i, s = [i = t === 0 ? e : e.splitText(t)];
					return n && (n <= 0 && (n = r - n), n < r && s.push(i.splitText(n - t))), s
				}

				function i(t) {
					return Array.apply(0, e(t).find("*").addBack().contents().filter(function () {
						return this.nodeType === Node.TEXT_NODE
					})).sort(function (e, t) {
						return e.compareDocumentPosition(t) === 2 ? 1 : -1
					})
				}

				function s(e, t) {
					var n = [],
						i = "",
						o = [],
						u, a, f;
					if (!e.length || !t) return o;
					while (e.length > 0) {
						n.push(e[0]), i += e[0].textContent, e.shift(), u = i.indexOf(t);
						if (u > -1) {
							a = i.length - (u + t.length);
							while (u >= n[0].textContent.length) u -= n[0].textContent.length, n.shift();
							if (n.length === 1) {
								f = r(n[0], u, u + t.length), o.push(f[0]), f[1] && e.unshift(f[1]);
								break
							}
							o.push(r(n[0], u, n[0].length)[0]), o.push.apply(o, n.slice(1, -1)), f = r(n[n.length - 1], 0, n[n.length - 1].textContent.length - a), o.push(f[0]), f[1] && e.unshift(f[1]), o = o.filter(Boolean);
							break
						}
					}
					return [o].concat(s(e, t))
				}
				var o = {
					wrapTextNodes: function (t, n, r) {
						var o = s(i(n), t),
							u = e();
						return o.forEach(function (t) {
							u = u.add(e(t).wrapAll(r))
						}), u
					},
					selectorType: function (e) {
						var t;
						return e && typeof e == "string" ? (t = /\?(\w*)/.exec(e), t && t.length ? "hookRef" : "string") : "undefined"
					},
					hookToSelector: function (e) {
						return e = e.replace(/"/g, "&quot;"), n.hook + '[name="' + e + '"]'
					}
				};
				return Object.freeze(o)
			}), define("datatypes/hookset", ["utils/hookutils", "jquery"], function (e, t) {
				"use strict";

				function n(t) {
					var n = Array.from(arguments).slice(1),
						r = this.section.$(e.hookToSelector(this.selector.slice(1)));
					return t in r && r[t].apply(r, n)
				}
				var r = Object.freeze({
					forEach: function (e) {
						return n.call(this, "each", function () {
							e(t(this))
						})
					},
					text: function () {
						return n.call(this, "text")
					},
					TwineScript_ToString: function () {
						return this.text()
					},
					TwineScript_Print: function () {
						return this.text()
					},
					get TwineScript_ObjectName() {
						return this.selector + " (a hook reference)"
					},
					TwineScript_TypeName: "a hook reference (like ?this)",
					get TwineScript_Assignee() {},
					set TwineScript_Assignee(e) {
						return n.call(this, "text", e)
					},
					TwineScript_AssignValue: function () {
						return n.call(this, "text")
					},
					create: function (e, t) {
						var n = Object.create(this);
						return n.section = e, n.selector = t, Object.freeze(n)
					}
				});
				return r
			}), define("internaltypes/pseudohookset", ["jquery", "utils/hookutils"], function (e, t) {
				"use strict";
				var n = Object.freeze({
					forEach: function (n) {
						var r = t.wrapTextNodes(this.selector, this.section.dom, "<tw-pseudo-hook>").parent();
						r.each(function () {
							n(e(this))
						}), r.contents().unwrap().parent().each(function () {
							this.normalize()
						})
					},
					create: function (e, t) {
						var n = Object.create(this);
						return n.section = e, n.selector = t, n
					}
				});
				return n
			}), define("internaltypes/changedescriptor", ["jquery", "utils", "renderer"], function (e, t, n) {
				"use strict";
				var r, i;
				return r = {
					code: "",
					enabled: !0,
					target: null,
					append: "append",
					transition: "instant",
					transitionTime: 0,
					attr: null,
					data: null,
					create: function (e) {
						return Object.assign(Object.create(this), e)
					},
					render: function () {
						var r = this.target,
							s = this.code,
							o = this.append,
							u = this.transition,
							a = this.attr,
							f = this.data,
							l = this.enabled,
							c;
						t.assertOnlyHas(this, i);
						if (!r || !l) return e();
						c = e(s && e.parseHTML(n.exec(s)));
						if (!(o in r)) {
							if (o !== "replace") {
								t.impossible("Section.render", "The target jQuery doesn't have a '" + o + "' method.");
								return
							}
							r.empty(), o = "append"
						}
						return r[o](c.length ? c : undefined), a && r.attr(a), f && r.data(f), u && t.transitionIn(o === "replace" ? r : c, u), c
					}
				}, i = Object.keys(r), Object.seal(r)
			}), define("section", ["jquery", "utils", "utils/selectors", "renderer", "twinescript/environ", "story", "state", "utils/hookutils", "datatypes/hookset", "internaltypes/pseudohookset", "internaltypes/changedescriptor"], function (e, t, n, r, i, s, o, u, a, f, l) {
				"use strict";

				function h(e, t) {
					if (e.name === "TwineWarning" && !s.options.debug) return;
					t.replaceWith("<tw-error class='" + (e.name === "TwineWarning" ? "warning" : "error") + "' title='" + t.attr("title") + "'>" + e.message + "</tw-error>")
				}

				function p(r) {
					var i = r.next(n.hook),
						s = this.eval(r.popAttr("js") || "");
					if (s && s.changer) i.length ? this.renderInto(i.popAttr("code"), i, s) : h(new TypeError("The (" + s.macroName + ":) macro should be assigned to a variable or attached to a hook."), r);
					else if (s && s.live) d.call(this, i, s.delay, s.event);
					else if (typeof s == "function") s(i, this);
					else if (t.containsError(s)) h(s, r);
					else if (s && s.TwineScript_Print) s = s.TwineScript_Print(), s instanceof e ? r.append(s) : t.containsError(s) ? h(s, r) : this.renderInto(s, r);
					else if (typeof s == "string" || typeof s == "number" || typeof s == "object" && s && s.toString !== Object.prototype.toString) this.renderInto(s + "", r);
					else if (s === !1 || s === null || s === undefined) {
						i.removeAttr("code"), r.addClass("false");
						if (i.length) {
							t.insensitiveName(r.attr("name")) !== "elseif" && (this.stack[0].lastHookShown = !1);
							return
						}
					}
					i.length && (this.stack[0].lastHookShown = !0)
				}

				function d(e, t) {
					var r = e.popAttr("code") || "",
						i;
					t = t === undefined ? 20 : t, i = function () {
						this.renderInto(r, e, {
							append: "replace"
						});
						if (e.find(n.expression + "[name='stop']").length) return;
						if (!this.inDOM()) return;
						setTimeout(i, t)
					}.bind(this), setTimeout(i, t)
				}
				var c;
				return c = {
					section: !0,
					create: function (n) {
						var r;
						return t.assert(n instanceof e && n.length === 1), r = Object.assign(Object.create(this), {
							timestamp: Date.now(),
							dom: n || t.storyElement,
							stack: [],
							enchantments: []
						}), r = i(r), r
					},
					inDOM: function () {
						return e(document.documentElement).find(this.dom).length > 0
					},
					$: function (e) {
						return t.$(e, this.dom)
					},
					evaluateTwineMarkup: function (t) {
						var n = e("<p>"),
							r;
						return this.renderInto(t, n), (r = n.find("tw-error")).length > 0 ? r : n.text()
					},
					selectHook: function (e) {
						if (a.isPrototypeOf(e) || f.isPrototypeOf(e)) return e;
						switch (u.selectorType(e)) {
						case "hookRef":
							return a.create(this, e);
						case "string":
							return f.create(this, e)
						}
						return null
					},
					renderInto: function (r, i, s) {
						var o = l.create({
								target: i,
								code: r
							}),
							u = e(),
							a = this;
						Object.defineProperty(o, "section", {
							value: this
						}), s && [].concat(s).forEach(function (e) {
							e.changer ? e.run(o) : Object.assign(o, e)
						}), typeof o.target == "string" && (o.target = this.selectHook(o.target));
						if (!o.target) {
							t.impossible("Section.renderInto", "ChangeDescriptor has code but not a target!");
							return
						}
						o.target instanceof e ? u = o.render() : o.target.forEach(function (e) {
							u = u.add(o.create({
								target: e
							}).render())
						}), this.stack.unshift(Object.create(null)), t.findAndFilter(u, n.hook + "," + n.expression).each(function () {
							var r = e(this);
							switch (r.tag()) {
							case n.hook:
								r.attr("code") && (a.renderInto(r.attr("code"), r), r.removeAttr("code"));
								break;
							case n.expression:
								p.call(a, r)
							}
						}), this.stack.shift(), this.updateEnchantments()
					},
					updateEnchantments: function () {
						this.enchantments.forEach(function (e) {
							e.refreshScope(), e.enchantScope()
						})
					}
				}, Object.preventExtensions(c)
			}), define("engine", ["jquery", "story", "utils", "utils/selectors", "state", "section"], function (e, t, n, r, i, s) {
				"use strict";

				function o() {
					var n, s, o, u;
					return n = e("<tw-passage><tw-sidebar>"), u = n.children(r.sidebar), t.options.permalink && i.save && u.append('<tw-icon class="permalink" title="Permanent link to this passage"><a href="#' + i.save() + '">&sect;'), s = e('<tw-icon class="undo" title="Undo">&#8630;</tw-icon>').click(a.goBack), o = e('<tw-icon class="redo" title="Redo">&#8631;</tw-icon>').click(a.goForward), i.pastLength <= 0 && s.css("visibility", "hidden"), i.futureLength <= 0 && o.css("visibility", "hidden"), u.append(s).append(o), n
				}

				function u(r, i) {
					var u, a = "instant",
						f = t.passageWithID(r),
						l, c, h = n.storyElement;
					if (!f) {
						n.impossible("Engine.showPassage", "There's no passage with the id \"" + r + '"!');
						return
					}
					h.detach(), l = n.$(h.children(n.passageSelector)), !i && a && n.transitionOut(l, a), u = o().appendTo(h), c = s.create(u), c.renderInto(n.unescape(f.html()), u, {
						transition: "dissolve"
					}), e("html").append(h).scrollTop(i ? u.offset().top - e(window).height() * .05 : 0)
				}
				var a = {
					goBack: function () {
						i.rewind() && u(i.passage)
					},
					goForward: function () {
						i.fastForward() && u(i.passage)
					},
					goToPassage: function (e, t) {
						i.play(e), u(e, t)
					},
					showPassage: u
				};
				return Object.freeze(a)
			}), define("datatypes/changercommand", ["utils", "macros"], function (e, t) {
				"use strict";
				var n = {
					changer: !0,
					get TwineScript_ObjectName() {
						return "a (" + this.macroName + ":) command"
					},
					TwineScript_TypeName: "a changer command",
					TwineScript_Print: function () {
						return "[A '" + this.macroName + "' command]"
					},
					create: function (t, n, r) {
						return e.assert(n === undefined || Array.isArray(n)), Object.assign(Object.create(this), {
							macroName: t,
							params: n,
							next: r || null
						})
					},
					"TwineScript_+": function (e) {
						var t = this.TwineScript_Clone();
						while (t.next) t = t.next;
						return t.next = e, t
					},
					TwineScript_Clone: function () {
						return this.create(this.macroName, this.params, this.next)
					},
					run: function (e) {
						t.getChangerFn(this.macroName).apply(0, [e].concat(this.params)), this.next && this.next.run(e)
					}
				};
				return Object.freeze(n)
			}), define("internaltypes/twinewarning", [], function () {
				"use strict";
				return function (t) {
					var n = new Error(t);
					return n.name = "TwineWarning", n
				}
			}), define("macrolib/values", ["macros"], function (e) {
				"use strict";

				function i(e) {
					return function () {
						var t = e.apply(this, arguments);
						if (typeof t != "number" || isNaN(t)) throw new RangeError("math result is " + t);
						return t
					}
				}

				function s() {
					return arguments[~~(Math.random() * arguments.length)]
				}
				var t = e.TypeSignature.rest,
					n = e.TypeSignature.zeroOrMore,
					r = e.TypeSignature.Any;
				e.add(["text", "string"], function (t, n) {
					return n = Array.prototype.slice.call(arguments, 1).join(""), n
				}, [n(r)])("substring", function o(e, t, n, r) {
					return n > r ? o(e, t, r, n) : t.slice(n - 1, r)
				}, [String, Number, Number])(["num", "number"], function (t, n) {
					return +n
				}, [r])("if", function (t, n) {
					return !!n
				}, [r])("unless", function (t, n) {
					return !n
				}, [r])("elseif", function (t, n) {
					return "lastHookShown" in t.stack[0] ? t.stack[0].lastHookShown === !1 && !!n : new Error("There's nothing before this to do (else-if:) with.")
				}, [r])("else", function (t) {
					return "lastHookShown" in t.stack[0] ? t.stack[0].lastHookShown === !1 : new Error("There's nothing before this to do (else:) with.")
				}, null), {
					weekday: [
						function () {
							return ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"][(new Date).getDay()] + "day"
						},
						null],
					monthday: [
						function () {
							return (new Date).getDate()
						},
						null],
					currenttime: [
						function () {
							var e = new Date,
								t = e.getHours() < 12;
							return e.getHours() % 12 + ":" + e.getMinutes() + " " + (t ? "A" : "P") + "M"
						},
						null],
					currentdate: [
						function () {
							return (new Date).toDateString()
						},
						null],
					min: [Math.min, t(Number)],
					max: [Math.max, t(Number)],
					abs: [Math.abs, Number],
					sign: [Math.sign, Number],
					sin: [Math.sin, Number],
					cos: [Math.cos, Number],
					tan: [Math.tan, Number],
					floor: [Math.floor, Number],
					round: [Math.round, Number],
					ceil: [Math.ceil, Number],
					pow: [Math.pow, Number],
					exp: [Math.exp, Number],
					sqrt: [i(Math.sqrt), Number],
					log: [i(Math.log), Number],
					log10: [i(Math.log10), Number],
					log2: [i(Math.log2), Number],
					random: [
						function (t, n) {
							var r, i;
							return n ? (r = Math.min(t, n), i = Math.max(t, n)) : (r = 0, i = t), i += 1, ~~ (Math.random() * (i - r)) + r
						}, [Number, Number]],
					either: [s, t(r)],
					alert: [
						function (e) {
							return window.alert(e || "")
						},
						String],
					prompt: [
						function (e, t) {
							return window.prompt(e || "", t || "") || ""
						},
						String, String],
					confirm: [
						function (e) {
							return window.confirm(e || "")
						},
						String],
					openURL: [window.open, String],
					reload: [window.location.reload.bind(window.location), null],
					gotoURL: [window.location.assign.bind(window.location), String],
					pageURL: [
						function () {
							return window.location.href
						},
						null],
					"": function () {
						Object.keys(this).forEach(function (t) {
							var n, r;
							t && (n = this[t][0], r = this[t][1], e.add(t, function () {
								return n.apply(0, Array.from(arguments).slice(1))
							}.bind(this), r))
						}.bind(this))
					}
				}[""]()
			}), define("macrolib/commands", ["macros", "utils", "story", "engine"], function (e, t, n, r) {
				"use strict";
				var i = e.TypeSignature.Any,
					s = e.TypeSignature.optional;
				e.add("display", function (r, i) {
					return n.passageNamed(i) ? {
						TwineScript_ObjectName: "a (display: " + t.toJSLiteral(i) + ") command",
						TwineScript_TypeName: "a (display:) command",
						TwineScript_Print: function () {
							return t.unescape(n.passageNamed(i).html())
						}
					} : new ReferenceError("I can't display the passage '" + i + "' because it doesn't exist.")
				}, [String])("print", function (e, n) {
					return t.containsError(n) ? n : (n && typeof n.TwineScript_Print == "function" ? n = n.TwineScript_Print() : n += "", {
						TwineScript_ObjectName: "a (print: " + t.toJSLiteral(n) + ") command",
						TwineScript_TypeName: "a (print:) command",
						TwineScript_Print: function () {
							return n
						}
					})
				}, [i])("goto", function (e, i) {
					var s = n.getPassageID(i);
					return s ? {
						TwineScript_ObjectName: "a (goto: " + t.toJSLiteral(i) + ") command",
						TwineScript_TypeName: "a (goto:) command",
						TwineScript_Print: function () {
							return r.goToPassage(s), ""
						}
					} : new RangeError("There's no passage named '" + i + "'.")
				}, [String])("live", function (t, n) {
					return {
						live: !0,
						delay: n
					}
				}, [s(Number)])("stop", function () {
					return {
						TwineScript_ObjectName: "a (stop:) command",
						TwineScript_TypeName: "a (stop:) command",
						TwineScript_Print: function () {
							return ""
						}
					}
				}, [])
			}), define("macrolib/datastructures", ["macros", "utils", "utils/operationutils", "state", "datatypes/assignmentrequest"], function (e, t, n, r, i) {
				"use strict";
				var s = e.TypeSignature.rest,
					o = e.TypeSignature.zeroOrMore,
					u = e.TypeSignature.Any;
				e.add("set", function (t, n) {
					var r, i;
					n = Array.prototype.slice.call(arguments, 1);
					for (r = 0; r < n.length; r += 1) {
						i = n[r];
						if (i.operator === "into") return new SyntaxError("Please say 'to' when using the (set:) macro.");
						i.dest.set(i.src)
					}
					return ""
				}, [s(i)])("put", function (t, n) {
					var r, i;
					n = Array.prototype.slice.call(arguments, 1);
					for (r = 0; r < n.length; r += 1) {
						i = n[r];
						if (i.operator === "to") return new SyntaxError("Please say 'into' when using the (put:) macro.");
						i.dest.set(i.src)
					}
					return ""
				}, [s(i)])("move", function (n, r) {
					var i, s;
					if (r.src && r.src.varref) {
						i = r.src.get();
						if (s = t.containsError(i)) return s;
						r.dest.set(i), r.src.delete()
					} else r.dest.set(r.src);
					return ""
				}, [s(i)])(["a", "array"], function () {
					return Array.from(arguments).slice(1)
				}, o(u))("range", function a(e, t, n) {
					if (t > n) return a(e, n, t).reverse();
					var r = [t];
					n -= t;
					while (n-- > 0) r.push(++t);
					return r
				}, [Number, Number])("subarray", function f(e, t, n, r) {
					return n > r ? f(e, t, r, n) : t.slice(n - 1, r)
				}, [Array, Number, Number])("history", function () {
					return r.pastPassageNames()
				}, [])("datamap", function () {
					var e, t;
					return t = new Map(Array.from(arguments).slice(1).reduce(function (t, n) {
						return e === undefined ? e = n : (t.push([e, n]), e = undefined), t
					}, [])), e !== undefined ? new TypeError("This datamap has a key without a value.") : t
				}, o(u))("dataset", function () {
					return new Set(Array.from(arguments).slice(1))
				}, o(u))("count", function (e, t, r) {
					switch (n.collectionType(t)) {
					case "dataset":
					case "datamap":
						return +t.has(name);
					case "string":
						return typeof r != "string" ? new TypeError(n.objectName(t) + " can't contain  " + n.objectName(r) + " because it isn't a string.") : t.split(r).length - 1;
					case "array":
						return t.reduce(function (e, t) {
							return e + (t === r)
						}, 0)
					}
				}, [u, u])
			}), define("macrolib/stylechangers", ["macros", "utils", "datatypes/colour", "datatypes/changercommand"], function (e, t, n, r) {
				"use strict";
				var i = e.TypeSignature.either,
					s = e.TypeSignature.optional;
				e.addChanger(["hook"], function (t, n) {
					return r.create("hook", [n])
				}, function (e, t) {
					e.attr = Object.assign(e.attr || {}, {
						name: t
					})
				}, [String])(["transition", "t8n"], function (t, n, i) {
					return r.create("transition", [n, i])
				}, function (e, t, n) {
					return e.transition = t, e.transitionTime = n, e
				}, [String, s(Number)])("font", function (t, n) {
					return r.create("font", [n])
				}, function (e, t) {
					return e.code = "<span style='font-family:" + t + "'>" + e.code + "</span>", e
				}, [String])(["text-colour", "text-color", "color", "colour"], function (t, n) {
					return n && n.colour && (n = n.toHexString(n)), r.create("text-colour", [n])
				}, function (e, t) {
					return e.code = "<span style='color:" + t + "'>" + e.code + "</span>", e
				}, [i(String, n)])("background", function (t, n) {
					return n && n.colour && (n = n.toHexString(n)), r.create("background", [n])
				}, function (e, t) {
					var r;
					return n.isHexString(t) ? r = "background-color" : (r = "background-size:cover; background-image", t = "url(" + t + ")"), e.code = "<span style='" + r + ":" + t + "'>" + e.code + "</span>", e
				}, [i(String, n)])("text-style", function (t, n) {
					return r.create("text-style", [n])
				}, function () {
					var e = Object.assign(Object.create(null), {
						bold: "b",
						italic: "i",
						underline: "u",
						strike: "s",
						superscript: "sup",
						subscript: "sub",
						blink: "blink",
						mark: "mark",
						"delete": "del"
					}, ["outline", "shadow", "emboss", "condense", "expand", "blur", "blurrier", "smear", "mirror", "upside-down", "fade-in-out", "rumble", "shudder"].reduce(function (e, n) {
						return e[t.insensitiveName(n)] = "tw-" + n, e
					}, {}));
					return function (r, i) {
						var s = ["", ""];
						return i = t.insensitiveName(i), i in e && (s = t.wrapHTMLTag("_", e[i]).split("_")), r.code = s.join(r.code), r
					}
				}(), [String])
			}), define("macrolib/enchantments", ["jquery", "utils", "macros", "datatypes/hookset", "datatypes/changercommand"], function (e, t, n, r, i) {
				"use strict";

				function u(n, r) {
					return t.assert(n), e(document.documentElement).on(n.event + ".enchantment", "." + n.classList.replace(/ /g, "."), function () {
						var n = e(this),
							r = n.data("enchantmentEvent");
						r && r(n)
					}), [
						function (t, n, s) {
							return n.selector && (n = n.selector), i.create(r, [n, s])
						},
						function (r, i, s) {
							var o, u, a = e();
							return r.enabled = !1, n.rerender && (r.target = s || i, r.append = n.rerender), o = {
								enchantScope: function () {
									u = r.section.selectHook(i);
									if (!u) return;
									a = e(), u.forEach(function (e) {
										var t;
										e.wrapAll("<tw-enchantment class='" + n.classList + "'>"), t = e.parent(), a = a.add(t), e.parent().data("enchantmentEvent", function () {
											var t;
											n.once && (t = r.section.enchantments.indexOf(o), r.section.enchantments.splice(t, 1), o.refreshScope()), r.section.renderInto(r.code, null, Object.assign({}, r, {
												enabled: !0
											}))
										})
									})
								},
								refreshScope: function () {
									a.each(function () {
										e(this).contents().unwrap()
									})
								}
							}, r.section.enchantments.push(o), o.enchantScope(), r
						}]
				}
				var s = n.TypeSignature.either,
					o = ["replace", "append", "prepend"];
				o.forEach(function (e) {
					n.addChanger(e, function (t, n) {
						return i.create(e, [n])
					}, function (t, n) {
						return t.target = n, t.append = e, t
					}, s(r, String))
				});
				var a = [{
					name: "click",
					enchantDesc: {
						event: "click",
						once: !0,
						rerender: "",
						classList: "link enchantment-link"
					}
				}, {
					name: "mouseover",
					enchantDesc: {
						event: "mouseenter",
						once: !0,
						rerender: "",
						classList: "enchantment-mouseover"
					}
				}, {
					name: "mouseout",
					enchantDesc: {
						event: "mouseleave",
						once: !0,
						rerender: "",
						classList: "enchantment-mouseout"
					}
				}];
				a.forEach(function (e) {
					n.addChanger.apply(0, [e.name].concat(u(e.enchantDesc, e.name)))
				}), o.forEach(function (e) {
					a.forEach(function (t) {
						var r = Object.assign({}, t.enchantDesc, {
								rerender: e
							}),
							i = t.name + "-" + e;
						n.addChanger.apply(0, [i].concat(u(r, i)))
					})
				})
			}), define("macrolib/links", ["jquery", "macros", "utils", "utils/selectors", "story", "state", "engine", "datatypes/changercommand"], function (e, t, n, r, i, s, o, u) {
				"use strict";
				var a = t.TypeSignature.optional;
				e(document.documentElement).on("click.passage-link", r.internalLink, function () {
					var n = e(this),
						r = n.parent().data("clickEvent");
					if (r) {
						r(n);
						return
					}
					var i = n.attr("passage-id");
					i && o.goToPassage(i, !1)
				}), t.addChanger(["link"], function (e, t) {
					return u.create("link", [t])
				}, function (e, t) {
					var n = e.code;
					e.code = "<tw-link>" + t + "</tw-link>", e.append = "replace", e.data = {
						clickEvent: function () {
							e.code = n, e.section.renderInto(n + "", null, e)
						}
					}
				}, [String]), t.add(["link-goto"], function (t, r, o) {
					return {
						TwineScript_TypeName: "a (link-goto: " + n.toJSLiteral(r) + ", " + n.toJSLiteral(o) + ") command",
						TwineScript_ObjectName: "a (link-goto:) command",
						TwineScript_Print: function () {
							var u = -1,
								a, f;
							f = t.evaluateTwineMarkup(n.unescape(o || r));
							if (f instanceof e) return f;
							a = i.getPassageID(f);
							if (a) u = s.passageIDVisited(a);
							else if (!~u) return '<tw-broken-link passage-id="' + a + '">' + (r || o) + "</tw-broken-link>";
							return "<tw-link " + (u > 0 ? 'class="visited" ' : "") + (i.options.debug ? 'passage-name="' + f + '" ' : "") + 'passage-id="' + a + '">' + (r || o) + "</tw-link>"
						}
					}
				}, [String, a(String)])
			}), define("macrolib", ["jquery", "markup/markup", "story", "macros", "utils", "datatypes/changercommand", "internaltypes/twinewarning", "macrolib/values", "macrolib/commands", "macrolib/datastructures", "macrolib/stylechangers", "macrolib/enchantments", "macrolib/links"], function (e, t, n, r, i) {
				"use strict";
				i.log("Loaded the built-in macros.")
			}), require.config({
				paths: {
					jquery: "../node_modules/jquery/dist/jquery",
					"lz-string": "../node_modules/lz-string/libs/lz-string-1.3.3",
					almond: "../node_modules/almond/almond",
					"es6-shim": "../node_modules/es6-shim/es6-shim",
					jqueryplugins: "utils/jqueryplugins"
				},
				deps: ["jquery", "es6-shim", "jqueryplugins"]
			}), require(["jquery", "renderer", "story", "state", "engine", "utils", "utils/selectors", "macrolib"], function ($, Renderer, Story, State, Engine, Utils, Selectors) {
				"use strict";

				function _eval(text) {
					return eval(text + "")
				}
				var debugHTML = "<tw-debugger><button class='show-invisibles'>&#9903; Debug View</button></tw-debugger>",
					installHandlers = function () {
						var e = $(document.documentElement);
						Story.options.debug && ($(document.body).append(debugHTML), $(".show-invisibles").click(function () {
							e.toggleClass("debug-mode").is(".debug-mode")
						})), installHandlers = null
					};
				$(document).ready(function () {
					var t = $(Selectors.storyData),
						n, r = $(Selectors.script),
						i = $(Selectors.stylesheet);
					if (t.length === 0) return;
					n = t.attr("options"), n && n.split(/\s/).forEach(function (e) {
						Renderer.options[e] = Story.options[e] = !0
					}), Story.startPassage = t.attr("startnode"), installHandlers(), r.each(function (e) {
						try {
							_eval($(this).html())
						} catch (t) {
							alert("There is a problem with this story's script (#" + (e + 1) + "):\n\n" + t.message)
						}
					}), i.each(function (e) {
						$(document.head).after('<style data-title="Story stylesheet ' + (e + 1) + '">' + $(this).html())
					});
					if (window.location.hash && !window.location.hash.includes("stories") && State.load(window.location.hash)) {
						Engine.showPassage(State.passage);
						return
					}
					Engine.goToPassage(Story.startPassage)
				})
			}), define("harlowe", function () {}), require(["harlowe"])
		})();

