var ddmenuOptions = {
    menuId: "ddmenu",
    linkIdToMenuHtml: null,
    effect: "slide", //"slide", "fade", or "none"
    open: "onmouseover", // or "onclick"
    speed: 200,
    delay: 50,
    l: "2c8m1"
};
var ddmenu = new McDdMenu(ddmenuOptions);
/* Drop down menu */
function McDdMenu(m) {
    if (typeof String.prototype.trim !== "function") String.prototype.trim =
        function() {
            return this.replace(/^\s+|\s+$/g, "")
        };
    var cb = function(a, b) {
            return a.getElementsByTagName(b)
        },
        x = navigator,
        R = function(b, d) {
            if (window.getComputedStyle) var c = window.getComputedStyle(b,
                null);
            else if (b.currentStyle) c = b.currentStyle;
            else c = b[a];
            return c[d]
        },
        L = function(a) {
            if (a && a.stopPropagation) a.stopPropagation();
            else if (window.event) window.event.cancelBubble = true
        },
        W = function(b) {
            var a = b ? b : window.event;
            if (a.preventDefault) a.preventDefault();
            else if (a) a.returnValue = false
        },
        s, a, d, r, o, H, N, e = document,
        k = "className",
        c = "length",
        D = "addEventListener",
        i = "target",
        ob = ["$1$2$3", "$1$2$3", "$1$24", "$1$23", "$1$22"],
        n = "offsetWidth",
        y = "zIndex",
        u = "onclick",
        pb = "",
        h = [],
        b, T, A, w, f, j = function() {
            return f && f[n] && p > 8
        };
    if (typeof McDDs == "undefined") McDDs = [];
    var hb = function(b) {
            var a = 1,
                d = McDDs[c];
            while (d--)
                if (McDDs[d].a == b.a) a = 0;
            a && McDDs.push(b)
        },
        g = function(a, c, b) {
            if (a[D]) a[D](c, b, false);
            else a.attachEvent && a.attachEvent("on" + c, b)
        },
        B = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
        G = (x.msPointerEnabled || x.pointerEnabled) && (x.msMaxTouchPoints ||
            x.maxTouchPoints);
    if (G)
        if (x.msPointerEnabled) var S = "MSPointerOver",
            U = "MSPointerOut";
        else {
            S = "pointerOver";
            U = "pointerOut"
        }
    var Q = function(a) {
            if (a) {
                var b = a[i];
                if (!b) {
                    b = a.srcElement;
                    a[i] = b
                }
                a[i].by = 4
            }
        },
        M = function(b) {
            var a = h[c];
            while (a--) h[a].a != null && b != h[a] && h[a].l()
        },
        nb = [/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/,
            /.*([\w\-])\.(\w)(\w)\.[^.]+$/, /^(?:.*\.)?(\w)(\w)\.[^.]+$/,
            /.*([\w\-])([\w\-])\.com\.[^.]+$/, /^(\w)[^.]*(\w)$/
        ],
        ib = function() {
            var c = 50,
                b = x.userAgent,
                a;
            if ((a = b.indexOf("MSIE ")) != -1) c = parseInt(b.substring(a +
                5, b.indexOf(".", a)));
            return c
        },
        P = function() {
            b = {
                a: m.l,
                b: m.menuId,
                c: m.effect == "none" ? 0 : m.effect == "slide" ? 1 : 2,
                d: m.delay,
                e: m.linkIdToMenuHtml,
                f: m.speed,
                g: m.open.toLowerCase()
            };
            if (!b.d) b.c = 0;
            b.c2 = b.c
        },
        p = ib(),
        C = function(e) {
            var a = e.childNodes,
                d = [];
            if (a)
                for (var b = 0, f = a[c]; b < f; b++) a[b].nodeType == 1 &&
                    d.push(a[b]);
            return d
        },
        db = function(a) {
            return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/,
                "$1$3$2")
        },
        lb = function(h, a) {
            var b = function(a) {
                    for (var d = unescape(a.substr(0, a[c] - 1)), f = a.substr(
                        a[c] - 1, 1), e = "", b = 0; b < d[c]; b++) e +=
                        String.fromCharCode(d.charCodeAt(b) - f);
                    return unescape(e)
                },
                f = e.domain,
                d = Math.random(),
                g = b(db(f));
            T = "%66%75%6E%63%74%69%6F%6E%20%71%51%28%73%2C%6B%29%7B%76%3";
            if (O(a + d)[c] % g[c] > 8) try {
                a = (new Function("$", "_", "e", O(T, d[c]))).apply(
                    this, [g, a, d])
            } catch (i) {} else d < .14 && (!f || f == b("qthfqmtxy5")) &&
                a != "6c0l6" && a != "6c016" && h[s].appendChild(e[b(
                    "hwjfyjYj}yStij5")](b("iirjsz%ywnfq%{jwxnts5")))
        },
        l = window.clearTimeout,
        v = window.setTimeout,
        E = "createElement",
        t = function(a, b) {
            return b ? e[a](b) : e[a]
        },
        O = function(e, b) {
            for (var d = [], a = 0; a < e[c]; a++) d[d[c]] = String.fromCharCode(
                e.charCodeAt(a) - (b && b > 7 ? b : 3));
            return d.join("")
        },
        kb = function(a, d) {
            var b = a[c];
            while (b--)
                if (a[b] === d) return true;
            return false
        },
        X = function(a, c) {
            var b = false;
            if (a[k]) b = kb(a[k].split(" "), c);
            return b
        },
        z = function(a, b, c) {
            if (!X(a, b))
                if (a[k] == "") a[k] = b;
                else if (c) a[k] = b + " " + a[k];
            else a[k] += " " + b
        },
        J = function(d, f) {
            if (d[k]) {
                for (var e = "", b = d[k].split(" "), a = 0, g = b[c]; a <
                    g; a++)
                    if (b[a] !== f) e += b[a] + " ";
                d[k] = e.trim()
            }
        },
        eb = function(d) {
            var c = d.children[0][a];
            c.WebkitTransition = c.msTransition = c.MozTransition = c.OTransition =
                "background-color " + (b.f + 100) + "ms ease-out"
        },
        q = function(b, c) {
            b.oP = c;
            if (p > 8) b[a].opacity = c;
            else b[a].filter = "alpha(opacity=" + c * 100 + ")"
        },
        Z = function(b, a) {
            return 1 - Math.pow(1 - b, a)
        },
        F = function(c, f, g) {
            for (var a = [], e = Math.ceil(g / 16), d = 1; d <= e; d++)
                if (b.c == 2) a.push(c + Z(d / e, 2) * (f - c));
                else a.push(Math.round(c + Z(d / e, 2.5) * (f - c)));
            a.Q = 0;
            return a
        },
        I = function(a) {
            return a.pointerType == a.MSPOINTER_TYPE_MOUSE || a.pointerType ==
                "mouse"
        },
        Y = function(b) {
            var a = this;
            a.a = null;
            a.b = b;
            a.a = null;
            a.d = null;
            a.e = null;
            a.f();
            a.g();
            a.s = 0
        },
        bb = function(a) {
            w = R(a, "z-index") || R(a, "zIndex");
            if (w == "auto" || w == "") w = 1e10;
            this.q(a);
            this.r(a)
        };
    Y.prototype = {
        j: function() {
            var a = this;
            l(a.d);
            a.d = v(function() {
                a.l()
            }, 27)
        },
        k: function() {
            if (this.s == 1) return;
            var e = this,
                c = e.a;
            c[a][d] = "block";
            c[a][r] = "9999px";
            c.mw = c.sI.clientWidth;
            c.mh = c.sI.clientHeight;
            c[a][r] = j() ? "auto" : c.mw + "px";
            c[a][o] = b.c == 1 ? "0px" : c.mh + "px";
            c[a].top = j() ? "0" : c.pA[H] - c.clientTop - 1 + "px";
            z(e.b, "over");
            e.b[a][y] = 2;
            if (p < 10) e.b[a][y] += w;
            if (b.c) {
                l(e.e);
                e.s = 1;
                if (b.c == 1) e.m();
                else e.n()
            }
        },
        f: function() {
            var b = this;
            if (p < 8) {
                if (!(f && f[n])) b.b[a][d] = "inline";
                this.b[a].zoom = 1
            }
            var i = C(b.b);
            if (i[c]) {
                if (i[0][N] != "A") {
                    var e = t(E, "a");
                    e.setAttribute("href", "#");
                    g(e, "click", function(a) {
                        W(a)
                    });
                    b.b.insertBefore(e, b.b.firstChild);
                    var h;
                    while (h = e.nextSibling) {
                        if (h.nodeType == 1 && h[N] == "DIV") break;
                        e.appendChild(h)
                    }
                    e.innerHTML = e.innerHTML.trim();
                    b.a = e
                } else {
                    b.a = i[0];
                    b.a.getAttribute("href") == "#" && g(b.a,
                        "click", function(a) {
                            W(a)
                        })
                } if (p < 8) {
                    this.a[a].zoom = 1;
                    if (!(f && f[n])) this.a[a][d] = "inline"
                }
            }
        },
        m: function() {
            var d = this,
                e = F(0, this.a.mh, b.f);
            d.e = setInterval(function() {
                if (++e.Q < e[c]) d.a[a][o] = e[e.Q] + "px";
                else {
                    d.a[a][o] = d.a.mh + "px";
                    l(d.e)
                }
            }, 16)
        },
        n: function() {
            var a = this,
                d = F(a.a.oP, 1, b.f * (1 - a.a.oP));
            a.e = setInterval(function() {
                if (++d.Q < d[c]) q(a.a, d[d.Q]);
                else {
                    q(a.a, 1);
                    l(a.e)
                }
            }, 16)
        },
        g: function() {
            var e = this,
                n = C(e.b),
                l = n[0];
            l.ta = 1;
            if (n[c] == 2) {
                l[a][y] = 3;
                if (p < 10) l[a][y] += w;
                z(l, "arrow", 1);
                l.innerHTML += '<i class="icon"> </i>';
                var k = n[1];
                z(k, "drop", 1);
                k[a][d] = "block";
                k[a][r] = "9999px";
                k[a].overflow = "hidden";
                var v = k.clientHeight,
                    h = t(E, "div");
                h[a].padding = h[a].margin = "0";
                h[a][d] = "block";
                h[a].position = "relative";
                h[a].styleFloat = h[a].cssFloat = "left";
                h = k.insertBefore(h, k.firstChild);
                var s;
                while (s = h.nextSibling) h.appendChild(s);
                h[a].top = "auto";
                h[a].bottom = "0";
                var o = h.offsetTop,
                    m = v - o - h.clientHeight;
                if (m < 0) m = 0;
                h[a].position = "absolute";
                h[a].paddingTop = o + "px";
                h[a].paddingBottom = m + "px";
                k[a].paddingTop = k[a].paddingBottom = "0px";
                b.c == 2 && q(k, 0);
                k[a][d] = "none";
                e.a = k;
                e.a.pA = l;
                e.a.sI = h;
                if (b.g == u) g(e.b, "click", function(a) {
                    Q(a);
                    e.ia(a)
                });
                else if (G) {
                    g(e.b, S, function(a) {
                        if (!j()) {
                            a[i].by = 3;
                            if (I(a)) e.i(a);
                            else e.ia(a)
                        }
                    });
                    g(e.b, U, function(a) {
                        !j() && I(a) && e.j()
                    });
                    g(e.b, "click", function(a) {
                        if (j()) {
                            a[i].by = 3;
                            e.ia(a)
                        }
                        L(a)
                    })
                } else {
                    if (B) e.b.ontouchstart = function(a) {
                        a[i].by = 1;
                        a[i].ta && e.ia(a)
                    };
                    else if (f) e.b[u] = function(a) {
                        if (j()) {
                            a[i].by = 1;
                            a[i].ta && e.ia(a)
                        }
                    };
                    g(e.b, "mouseover", function(a) {
                        if (!j()) {
                            Q(a);
                            e.i(a)
                        }
                    });
                    g(e.b, "mouseout", function() {
                        !j() && e.j()
                    })
                }
                b.c && eb(e.b)
            } else {
                e.a = null;
                g(e.b, "mouseover", function() {
                    z(this, "over")
                });
                g(e.b, "mouseout", function() {
                    J(this, "over")
                })
            }
        },
        ia: function(d) {
            L(d);
            M(this);
            this.i(d);
            if (McDDs[c] > 1)
                for (var a = 0; a < McDDs[c]; a++) McDDs[a].a != b.b &&
                    McDDs[a].c()
        },
        o: function() {
            if (this.a[a][d] != "none") {
                var e = this,
                    f = F(e.a[H], 0, b.f * .5 * e.a[H] / e.a.mh);
                e.e = setInterval(function() {
                    if (++f.Q < f[c]) e.a[a][o] = f[f.Q] +
                        "px";
                    else if (e.a[a][o] == "2px") {
                        e.a[a][d] = "none";
                        e.a[a][o] = "0px";
                        e.b[a][y] = 0;
                        l(e.e)
                    } else e.a[a][r] = e.a[a][o] = "2px"
                }, 16)
            }
        },
        p: function() {
            if (this.a[a][d] != "none") {
                var e = this,
                    f = F(e.a.oP, 0, b.f * .7 * e.a.oP);
                e.e = setInterval(function() {
                    if (++f.Q < f[c]) q(e.a, f[f.Q]);
                    else if (e.a[a][r] == "2px") {
                        q(e.a, 0);
                        e.a[a][d] = "none";
                        e.b[a][y] = 0;
                        l(e.e)
                    } else e.a[a][r] = "2px"
                }, 16)
            }
        },
        i: function(c) {
            var a = this;
            l(a.d);
            if (f && b.c2 == 2 && a.s < 1) {
                b.c = j() ? 1 : 2;
                q(a.a, b.c == 2 ? 0 : 1)
            }
            if (b.g == u || j() || G && !I(c) || B && c[i].by == 1)
                a.d = v(function() {
                    if (a.s < 1) a.k();
                    else a.l()
                }, a.s < 1 ? 0 : 50);
            else a.d = v(function() {
                a.k()
            }, b.d)
        },
        l: function() {
            var c = this;
            if (c.s == -1) return;
            J(c.b, "over");
            if (b.c == 0) c.a[a][d] = "none";
            else {
                l(c.e);
                c.s = -1;
                if (b.c == 1) c.o();
                else c.p()
            }
        }
    };
    bb.prototype = {
        q: function(a) {
            lb(a, b.a)
        },
        r: function(d) {
            (b.g == u || G || B) && g(e, B ? "touchstart" : "click",
                function(a) {
                    !(a[i] || a.srcElement).by && M(0)
                });
            r = "width";
            o = "height";
            (new Function("a", "b", "c", "d", "e", "f", "g", "h",
                "i", "j", "k", "z", "y", "x", function(d) {
                    for (var b = [], a = 0, e = d[c]; a < e; a++)
                        b[b[c]] = String.fromCharCode(d.charCodeAt(
                            a) - 4);
                    return b.join("")
                }(
                    "zev$NAjyrgxmsr,|0}-zev$eAjyrgxmsr,f-zev$gAf2glevGshiEx,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-\u0081?vixyvr$|/e,}_6a-/}_4a/e,}_5a-?\u00810qAe2e\u0080\u0080+:+0rAtevwiMrx,q2glevEx,4--\u0080\u0080:0R?mj,RAk,g,+kvthpu+---zev$sA,R2vitpegi,h_r16a0l_r16a--2wtpmx,++-0tAQexl_g,+yhukvt+-a,-?mj,q%AN,r/+g+0s-**R2mrhi|Sj,+epl+-AA15-mj,tB2;-zev$uAk,g,+jylh{l[l{Uvkl+-0g,+kktlu|A'{yphs'}lyzpvu+--0vAm_oa0wAv_oa?mj,tB2=9**w2rshiReqi%A+FSH]+-w_oa2mrwivxFijsvi,u0w-?ipwi$w2mrwivxFijsvi,u0v-\u0081\u0081\u0081jsv,zev$xA4?x@~2pirkxl?x//-mj,~_xa2rshiReqiAA+PM+-|2tywl,ri{$},~_xa--?"
                ))).apply(this, [b, 0, O, nb, db, 0, t, ob, d, 0, s,
                C(d), Y, h
            ]);
            if (h[0].b[s]) {
                h[0].b[s][a].overflow = "hidden";
                setTimeout(function() {
                    h[0].b[s][a].overflow = "visible"
                }, 10)
            }
        }
    };
        V = function() {
            if (A) {
                l(A);
                A = null
            }
            s = "parentNode", a = "style", d = "display", N = "nodeName", H =
                "offsetHeight";
            if (b.e) {
                var c = t("getElementById", b.e);
                if (c) fb(c);
                else alert('Cannot find the anchor (id="' + b.e + '")')
            } else K()
        },
        K = function() {
            var k = 0,
                e = t("getElementById", b.b);
            if (e && e[n]) {
                for (var i = C(e), j = 0, g = 0; g < i[c]; g++)
                    if (X(i[g], "menu-icon")) f = i[g];
                e = cb(e, "ul");
                if (e[c]) {
                    k = 1;
                    e = e[0];
                    if (f) {
                        if (p < 9 && f[n]) b.g = u;
                        f[u] = function(b) {
                            e[a][d] = e[n] == 0 ? "block" : "";
                            e[n] == 0 ? J(this, "menu-icon-active") : z(
                                this, "menu-icon-active");
                            L(b)
                        };
                        if (!e[n]) {
                            e[a][d] = "block";
                            j = 1
                        }
                    }
                }
            }
            if (k) {
                var h = new bb(e);
                h.a = b.b;
                h.c = M;
                hb(h);
                if (j == 1) e[a][d] = "";
                e[a].visibility = "visible"
            } else A = v(K, 500)
        },
        jb = function(d) {
            var b = false;

            function a() {
                if (b) return;
                b = true;
                v(d, 4)
            }
            if (e[D]) e[D]("DOMContentLoaded", a, false);
            else if (e.attachEvent) {
                try {
                    var f = window.frameElement != null
                } catch (h) {}
                if (e.documentElement.doScroll && !f) {
                    function c() {
                        if (b) return;
                        try {
                            e.documentElement.doScroll("left");
                            a()
                        } catch (d) {
                            v(c, 10)
                        }
                    }
                    c()
                }
                e.attachEvent("onreadystatechange", function() {
                    e.readyState === "complete" && a()
                })
            }
            g(window, "load", a)
        };
    if (p < 9) {
        var mb = t(E, "nav"),
            ab = cb(e, "head");
        if (!ab[c]) return;
        ab[0].appendChild(mb)
    }
    P();
    jb(V);
    var gb = function() {
        var d = arguments[0];
        if (d) {
            for (var f in d) m[f] = d[f];
            P()
        }
        for (var e, a = 0; a < h[c]; a++) {
            e = h[a].a;
            if (e) {
                h[a].s = 0;
                q(e, b.c == 2 ? 0 : 1)
            }
        }
    };
    return {
        changeOptions: gb,
        init: V
    }
}
