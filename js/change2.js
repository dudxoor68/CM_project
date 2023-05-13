/*! For license information please see editor-css.js.LICENSE.txt */
"use strict";
(self.webpackChunkinteractive_examples =
  self.webpackChunkinteractive_examples || []).push([
  [152],
  {
    774: (e, t, n) => {
      var o = n(853),
        r = n(557),
        c = n(337),
        i = n(479);
      !(function () {
        const e = document.getElementById("example-choice-list"),
          t = e.querySelectorAll(".example-choice"),
          n = Array.from(t, (e) => e.querySelector("code").textContent),
          l = document.getElementById("editor-wrapper"),
          s = document.getElementById("output"),
          d = document.getElementById("warning-no-support"),
          a = [];
        let u = 0;
        function m(e, t) {
          return (0, i.Q_)(e, t, (0, i.n8)(), { lineNumbers: !1 });
        }
        function p(e, t) {
          for (let n = 0, o = e.length; n < o; n++) if (e[n] === t) return n;
          return -1;
        }
        c.EA(n) && !document.all
          ? ((function () {
              l.classList.remove("hidden"),
                e.classList.add("live"),
                s.classList.remove("hidden");
              for (let e = 0, n = t.length; e < n; e++) {
                const n = t[e],
                  o = document.createElement("button"),
                  r = document.createElement("span"),
                  c = n.querySelector("code");
                a.push(c.textContent),
                  m(n.querySelector("pre"), c.textContent),
                  o.setAttribute("type", "button"),
                  o.classList.add("example-choice-button"),
                  r.classList.add("visually-hidden"),
                  (r.textContent = "Choose example " + (e + 1)),
                  o.append(r),
                  n.append(o),
                  n.getAttribute("initial-choice") && (u = p(t, n)),
                  c.remove();
              }
              r.z2(),
                document
                  .getElementById("reset")
                  .addEventListener("click", () => {
                    t.forEach((e, t) => {
                      const n = e.querySelector("pre");
                      for (const e of n.children) e.remove();
                      e.classList.remove("invalid", "selected"), m(n, a[t]);
                    }),
                      c.xY(t),
                      u ? (r.LT(t[u]), o.y(t[u])) : (r.LT(t[0]), o.y(t[0]));
                  }),
                (function () {
                  for (let e = 0, n = t.length; e < n; e++) {
                    const n = t[e],
                      o = n.querySelector(".copy");
                    o.setAttribute("aria-label", "Copy to clipboard"),
                      n.addEventListener("mouseover", () => {
                        o.setAttribute("aria-hidden", !1);
                      }),
                      n.addEventListener("mouseout", () => {
                        o.setAttribute("aria-hidden", !0);
                      });
                  }
                })(),
                c.xY(t),
                o.u();
            })(),
            r.LT(t[u]),
            o.y(t[u]))
          : d.classList.remove("hidden");
      })();
    },
  },
  (e) => {
    e((e.s = 774));
  },
]);
