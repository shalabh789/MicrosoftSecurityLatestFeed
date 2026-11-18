// Accent picker + contents scroll-spy. Vanilla JS; app.js is untouched apart from theme persistence.
(function () {
  var d = document, root = d.documentElement
  var $ = function (s, c) { return (c || d).querySelector(s) }
  var all = function (s, c) { return [].slice.call((c || d).querySelectorAll(s)) }
  var save = function (k, v) { try { localStorage.setItem(k, v) } catch (e) {} }
  // [id, swatch, [[chroma, hue] x3]] — lightness comes from --L, which the theme sets.
  var A = [["theme","oklch(.92 0 0)",[[0,0]]],["mint","oklch(.77 .15 163)",[[.15,163]]],["orange","oklch(.76 .14 55)",[[.14,55]]],["green","oklch(.74 .14 145)",[[.14,145]]],
    ["cyan","oklch(.76 .1 210)",[[.1,210]]],["blue","oklch(.7 .12 255)",[[.12,255]]],["purple","oklch(.72 .12 300)",[[.12,300]]],["pink","oklch(.74 .14 8)",[[.14,8]]],
    ["sunset","linear-gradient(135deg,oklch(.7 .19 19),oklch(.86 .12 74),oklch(.92 .1 89))",[[.19,19],[.12,74],[.1,89]]],
    ["ocean","linear-gradient(140deg,oklch(.77 .15 228),oklch(.59 .23 259),oklch(.72 .15 248))",[[.15,228],[.23,259],[.15,248]]],
    ["neon","linear-gradient(145deg,oklch(.92 .23 129),oklch(.89 .18 162),oklch(.8 .15 220))",[[.23,129],[.18,162],[.15,220]]],
    ["aurora","linear-gradient(145deg,oklch(.68 .25 351),oklch(.5 .14 307),oklch(.6 .13 244))",[[.25,351],[.14,307],[.13,244]]],
    ["fire","linear-gradient(145deg,oklch(.67 .22 33),oklch(.59 .22 1),oklch(.82 .15 72))",[[.22,33],[.22,1],[.15,72]]],
    ["prism","linear-gradient(145deg,oklch(.75 .14 220),oklch(.69 .19 313),oklch(.66 .2 21))",[[.14,220],[.19,313],[.2,21]]]]
  function apply(id) {
    var def = A.filter(function (a) { return a[0] === id })[0] || A[A.length - 1]
    ;["--a", "--a2", "--a3"].forEach(function (n, i) {
      var p = def[2][i] || def[2][0]
      if (def[0] === "theme") root.style.setProperty(n, "var(--text)")
      else root.style.setProperty(n, "oklch(var(--L) " + p[0] + " " + p[1] + ")")
    })
    root.dataset.accent = def[0]
  }
  var host = $("[data-swatches]")
  if (host) [A.slice(0, 8), A.slice(8)].forEach(function (row) {
    var g = d.createElement("div"); g.className = "swatches"
    row.forEach(function (a) {
      var l = d.createElement("label"); l.className = "swatch"; l.style.setProperty("--s", a[1])
      l.innerHTML = '<input type="radio" name="accent" value="' + a[0] + '" aria-label="' + a[0] + '">'; g.appendChild(l)
    }); host.appendChild(g)
  })
  function sync() { all("[name=accent]").forEach(function (i) { i.checked = i.value === root.dataset.accent }) }
  d.addEventListener("change", function (e) {
    if (e.target.name !== "accent") return
    var id = e.target.value, go = function () { apply(id); save("accent", id); sync() }
    if (d.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) { root.classList.add("wiping"); d.startViewTransition(go).finished.finally(function () { root.classList.remove("wiping") }) } else go()
  })
  apply(root.dataset.accent || "prism"); sync()

  // Scroll-spy for the sidebar. Links are ordinary #section anchors, which app.js already handles.
  var links = all(".toc a"), nodes = links.map(function (l) { return d.getElementById(l.getAttribute("href").slice(1)) })
  var spyPaused = false, settleTimer
  function spy() {
    if (spyPaused) return
    var cur = 0, bottom = innerHeight + scrollY >= root.scrollHeight - 4
    var padding = parseFloat(getComputedStyle(root).scrollPaddingTop) || 0
    nodes.forEach(function (n, i) {
      var margin = n ? parseFloat(getComputedStyle(n).scrollMarginTop) || 0 : 0
      if (n && n.offsetHeight && n.getBoundingClientRect().top < padding + margin + 24) cur = i
    })
    if (bottom) cur = nodes.length - 1
    links.forEach(function (l, i) { l.parentNode.hidden = !(nodes[i] && nodes[i].offsetHeight); if (i === cur) l.setAttribute("aria-current", "location"); else l.removeAttribute("aria-current") })
  }
  function resumeSpy() {
    if (!spyPaused) return
    spyPaused = false
    clearTimeout(settleTimer)
    spy()
  }
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      spyPaused = true
      clearTimeout(settleTimer)
      links.forEach(function (other) { other.removeAttribute("aria-current") })
      link.setAttribute("aria-current", "location")
      settleTimer = setTimeout(resumeSpy, 1000)
    })
  })
  addEventListener("scrollend", resumeSpy)
  var q = false
  addEventListener("scroll", function () { if (q) return; q = true; requestAnimationFrame(function () { q = false; spy() }) }, { passive: true })
  addEventListener("load", spy); spy()
})()
