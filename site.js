/* xanderpico — progressive enhancement for the Threads layout.
   Plain local JavaScript: no network requests, no storage, no cookies.
   Without it every thread, question and record is simply listed. */
(function () {
  "use strict";
  document.documentElement.classList.add("js");
  var main = document.getElementById("main");
  var mapEl = document.getElementById("q-map");
  var qmap = mapEl ? JSON.parse(mapEl.textContent) : {};
  var rec = document.querySelector("[data-records]");
  var state = { threads: null, text: "", anchors: [] };

  function apply() {
    document.querySelectorAll("[data-filter]").forEach(function (box) {
      var items = box.querySelectorAll("[data-item]");
      var shown = 0;
      items.forEach(function (li) {
        var ths = (li.getAttribute("data-threads") || "").split(" ");
        var okT = !state.threads || ths.some(function (t) { return state.threads.indexOf(t) !== -1; });
        var okX = !state.text || li.textContent.toLowerCase().indexOf(state.text) !== -1;
        li.hidden = !(okT && okX);
        li.classList.toggle("anchor", state.anchors.indexOf(li.id) !== -1);
        if (!li.hidden) shown++;
        var dot = box.querySelector('.tl-dot[href="#' + li.id + '"]');
        if (dot) dot.classList.toggle("off", li.hidden);
      });
      box.querySelectorAll("section").forEach(function (sec) {
        var any = sec.querySelector("[data-item]:not([hidden])");
        sec.hidden = !any;
      });
      box.querySelectorAll(".chip[data-thread]").forEach(function (b) {
        var t = b.getAttribute("data-thread");
        var on = t === "all" ? !state.threads : !!state.threads && state.threads.indexOf(t) !== -1;
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
      var count = box.querySelector("[data-count]");
      if (count) count.textContent = "Showing " + shown + " of " + items.length + " " + (box.getAttribute("data-noun") || "records") +
        (state.threads ? " · threads: " + state.threads.length : "") + (state.text ? " · text: “" + state.text + "”" : "");
    });
  }

  function setQuestion(id) {
    var q = id ? qmap[id] : null;
    document.querySelectorAll(".q").forEach(function (b) {
      b.setAttribute("aria-pressed", String(!!q && b.getAttribute("data-q") === id));
    });
    if (main) { if (q) main.setAttribute("data-active-q", id); else main.removeAttribute("data-active-q"); }
    document.querySelectorAll(".thread").forEach(function (t) {
      t.classList.toggle("lit", !!q && q.threads.indexOf(t.getAttribute("data-thread")) !== -1);
    });
    state.threads = q ? q.threads.slice() : null;
    state.anchors = q ? q.anchors.slice() : [];
    apply();
  }

  document.querySelectorAll(".q").forEach(function (b) {
    b.addEventListener("click", function () {
      setQuestion(b.getAttribute("aria-pressed") === "true" ? null : b.getAttribute("data-q"));
    });
  });

  document.querySelectorAll("[data-filter]").forEach(function (box) {
    box.querySelectorAll(".chip[data-thread]").forEach(function (b) {
      b.addEventListener("click", function () {
        var t = b.getAttribute("data-thread");
        if (main && main.hasAttribute("data-active-q")) setQuestion(null);
        if (t === "all") state.threads = null;
        else if (state.threads && state.threads.length === 1 && state.threads[0] === t) state.threads = null;
        else state.threads = [t];
        apply();
      });
    });
    var input = box.querySelector("[data-search]");
    if (input) input.addEventListener("input", function () { state.text = input.value.trim().toLowerCase(); apply(); });
    box.querySelectorAll(".tl-dot").forEach(function (d) {
      d.addEventListener("click", function (e) {
        var li = document.getElementById(d.getAttribute("href").slice(1));
        if (!li) return;
        e.preventDefault();
        if (li.hidden) { setQuestion(null); state.threads = null; state.text = ""; if (input) input.value = ""; apply(); }
        li.scrollIntoView({ block: "center" });
        li.classList.remove("flash"); void li.offsetWidth; li.classList.add("flash");
      });
    });
  });
  apply();
})();
