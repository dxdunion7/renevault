jQuery(function(t) {
    "use strict";
    var i = window.navigator.userAgent,
        e = /MSIE|Trident|Edge/.test(i);
    if (e && "undefined" == typeof Modernizr && jQuery(".qx-slider-pro-v2 .slider-pro-item").each(function() {
            var t = jQuery(this),
                i = t.find("img").prop("src");
            i && t.css("backgroundImage", "url(" + i + ")").addClass("compat-object-fit")
        }), t(".qx-image--lightbox").length > 0 && t(".qx-image--lightbox").magnificPopup({
            type: "image",
            removalDelay: 500,
            mainClass: "mfp-fade",
            zoom: {
                enabled: !0,
                duration: 500,
                opener: function(t) {
                    return t.find("img")
                }
            }
        }), function() {
            function i() {
                var i = t(".qx-section--stretch");
                if (i.length) {
                    var e = 0,
                        n = 0,
                        r = jQuery("html").attr("dir");
                    i.attr("style", ""), n = jQuery(window).width(), e = i.offset().left, i.css({
                        position: "relative",
                        width: n
                    }), "rtl" === r ? i.css({
                        marginRight: e
                    }) : i.css({
                        marginLeft: -e
                    })
                }
            }
            window.onload = window.onresize = i
        }(), t(window).load(function() {
            if (t(".qx-fg-items").length) {
                var i = t(".qx-fg-items");
                i.isotope({
                    itemSelector: ".qx-fg-item",
                    layoutMode: "fitRows",
                    percentPosition: !0
                });
                var e = t(".qx-fg-filter>li>a");
                e.on("click", function() {
                    e.removeClass("active"), t(this).addClass("active");
                    var n = t(this).attr("data-filter");
                    return i.isotope({
                        filter: n
                    }), !1
                })
            }
            "function" == typeof WOW && (new WOW).init()
        }), jQuery(".qx-element-gallery-v2").find(".qx-active").click(), t("#confetti").length > 0) {
        var n = 75,
            r = [
                [76, 175, 80],
                [33, 150, 243],
                [219, 56, 83],
                [244, 67, 54],
                [255, 193, 7]
            ],
            o = 2 * Math.PI,
            s = document.getElementById("confetti"),
            a = s.getContext("2d"),
            h = 0,
            u = 0,
            c = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
                    window.setTimeout(t, 1e3 / 60)
                }
            }(),
            d = function(t, i, e) {
                return t < i || t > e ? 0 : Math.abs(t === i ? 1 : (t - e) / (i - e))
            },
            f = function(t, i, e) {
                var n, r = !1;
                t = t[0] || t;
                var o = function(t) {
                        n = t, s()
                    },
                    s = function() {
                        r || (c(a), r = !0)
                    },
                    a = function() {
                        e.call(t, n), r = !1
                    };
                try {
                    t.addEventListener(i, o, !1)
                } catch (h) {}
                return o
            },
            m = function() {
                h = s.width = window.innerWidth, u = s.height = window.innerHeight
            },
            l = function(i) {
                t(s).css("opacity", d(window.scrollY, 0, u))
            };
        f(window, "resize", m), f(window, "scroll", l), setTimeout(m, 0);
        var w = function(t, i) {
                return (i - t) * Math.random() + t
            },
            p = function(t, i, e, n) {
                return a.beginPath(), a.arc(t, i, e, 0, o, !1), a.fillStyle = n, a.fill()
            },
            y = .5;
        t(document).on("mousemove", function(t) {
            return y = t.pageX / h
        }), window.requestAnimationFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                return window.setTimeout(t, 1e3 / 60)
            }
        }();
        var g = function() {
                function t() {
                    this.style = r[~~w(0, 5)], this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2], this.r = ~~w(2, 6), this.r2 = 2 * this.r, this.replace()
                }
                return t.prototype.replace = function() {
                    return this.opacity = 0, this.dop = .03 * w(1, 4), this.x = w(-this.r2, h - this.r2), this.y = w(-20, u - this.r2), this.xmax = h - this.r, this.ymax = u - this.r, this.vx = w(0, 2) + 8 * y - 5, this.vy = .7 * this.r + w(-1, 1)
                }, t.prototype.draw = function() {
                    var t;
                    return this.x += this.vx, this.y += this.vy, this.opacity += this.dop, this.opacity > 1 && (this.opacity = 1, this.dop *= -1), (this.opacity < 0 || this.y > this.ymax) && this.replace(), 0 < (t = this.x) && t < this.xmax || (this.x = (this.x + this.xmax) % this.xmax), p(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")")
                }, t
            }(),
            x = function() {
                var t, i, e, r;
                for (e = [], r = t = 1, i = n; 1 <= i ? t <= i : t >= i; r = 1 <= i ? ++t : --t) e.push(new g);
                return e
            }();
        window.step = function() {
            var t, i, e, n;
            for (requestAnimationFrame(step), a.clearRect(0, 0, h, u), n = [], i = 0, e = x.length; i < e; i++) t = x[i], n.push(t.draw());
            return n
        }, step()
    }
});