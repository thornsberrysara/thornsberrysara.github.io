if (screen.width > 760) {
  (function() {
    var r = Math.random,
      n = 0,
      d = document,
      w = window,
      i = d.createElement("img"),
      z = d.createElement("div"),
      zs = z.style,
      a = w.innerWidth * r(),
      b = w.innerHeight * r();
    zs.position = "fixed";
    zs.left = 0;
    zs.top = 0;
    zs.opacity = 0;
    z.appendChild(i);
    i.src = "./assets/bug.svg";
    d.body.appendChild(z);
    function R(o, m) {
      return Math.max(Math.min(o + (r() - 0.5) * 400, m - 50), 50);
    }
    function A() {
      var x = R(a, w.innerWidth),
        y = R(b, w.innerHeight),
        d = 5 * Math.sqrt((a - x) * (a - x) + (b - y) * (b - y));
      zs.opacity = n;
      n = 1;
      zs.transition = zs.webkitTransition = d / 1e3 + "s linear";
      zs.transform = zs.webkitTransform = "translate(" + x + "px," + y + "px)";
      i.style.transform = i.style.webkitTransform = a > x ? "" : "scaleX(-1)";
      a = x;
      b = y;
      setTimeout(A, d);
    }
    setTimeout(A, r() * 3e3);
    i.onclick = function() {
      alert("thanks for helping me debug my code!");
    };
  })();
}
