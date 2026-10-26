/* xanderpico — progressive enhancement for the Threads layout.
   Plain local JavaScript: no network requests, no storage, no cookies.
   Without it every thread, question and record is simply listed. */
(function (root, factory) {
  "use strict";
  var api = factory();
  root.XanderArchive = api;
  if (typeof module === "object" && module.exports) module.exports = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  function tokens(value) {
    return String(value || "").trim().split(/\s+/).filter(Boolean);
  }

  function parseRow(element) {
    function attr(name) { return element.getAttribute("data-" + name) || ""; }
    return {
      element: element,
      text: String(element.textContent || "").toLowerCase(),
      title: attr("title").toLowerCase(),
      date: attr("date"),
      updated: attr("updated") || attr("date"),
      kind: attr("kind"),
      tags: tokens(attr("tags")),
      threads: tokens(attr("threads")),
      year: attr("year"),
      resource: attr("resource")
    };
  }

  function match(filters, row) {
    filters = filters || {};
    var text = String(filters.text || "").trim().toLowerCase();
    if (text && row.text.indexOf(text) === -1) return false;
    if (filters.tag && row.tags.indexOf(filters.tag) === -1) return false;
    if (filters.kind && row.kind !== filters.kind) return false;
    if (filters.year && row.year !== filters.year) return false;
    if (filters.resource && row.resource !== filters.resource) return false;
    if (filters.thread && row.threads.indexOf(filters.thread) === -1) return false;
    return true;
  }

  function sort(rows, key) {
    key = key || "date-new";
    var field = key === "title" ? "title" : key === "updated" ? "updated" : "date";
    var ascending = key === "title" || key === "date-old";
    return rows.slice().sort(function (a, b) {
      var order = String(a[field] || "").localeCompare(String(b[field] || ""));
      return ascending ? order : -order;
    });
  }

  function readFilters(params, keys) {
    var filters = { text: params.get("q") || "" };
    keys.forEach(function (key) { filters[key] = params.get(key) || ""; });
    return filters;
  }

  return { parseRow: parseRow, match: match, sort: sort, readFilters: readFilters };
});

(function () {
  "use strict";
  if (typeof document === "undefined") return;

  var archive = XanderArchive;
  document.documentElement.classList.add("js");
  var main = document.getElementById("main");
  var mapEl = document.getElementById("q-map");
  var qmap = mapEl ? JSON.parse(mapEl.textContent) : {};
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

  function archiveFilters() {
    document.querySelectorAll("[data-archive]").forEach(function (box) {
      var controls = box.querySelector("[data-archive-controls]");
      if (controls) controls.hidden = false;
      var input = box.querySelector("[data-archive-search]");
      var sortControl = box.querySelector("[data-archive-sort]");
      var selects = Array.prototype.slice.call(box.querySelectorAll("[data-filter-key]"));
      var keys = selects.map(function (select) { return select.getAttribute("data-filter-key"); });

      function update() {
        var filters = { text: input ? input.value : "" };
        selects.forEach(function (select) { filters[select.getAttribute("data-filter-key")] = select.value; });
        var rows = Array.prototype.slice.call(box.querySelectorAll("[data-item]")).map(archive.parseRow);
        var shown = rows.filter(function (row) { return archive.match(filters, row); });
        rows.forEach(function (row) { row.element.hidden = shown.indexOf(row) === -1; });
        archive.sort(rows, sortControl ? sortControl.value : "date-new").forEach(function (row) { row.element.parentNode.appendChild(row.element); });
        box.querySelector("[data-count]").textContent = shown.length + " of " + rows.length;
        box.querySelector("[data-no-results]").hidden = shown.length !== 0;
        var q = new URLSearchParams();
        if (filters.text) q.set("q", filters.text);
        keys.forEach(function (key) { if (filters[key]) q.set(key, filters[key]); });
        if (sortControl && sortControl.value !== "date-new") q.set("sort", sortControl.value);
        history.replaceState(null, "", location.pathname + (q.toString() ? "?" + q : "") + location.hash);
      }

      var restored = archive.readFilters(new URLSearchParams(location.search), keys);
      if (input) input.value = restored.text;
      selects.forEach(function (select) {
        select.value = restored[select.getAttribute("data-filter-key")];
        select.addEventListener("change", update);
      });
      if (sortControl) {
        sortControl.value = new URLSearchParams(location.search).get("sort") || "date-new";
        sortControl.addEventListener("change", update);
      }
      if (input) input.addEventListener("input", update);
      update();
    });
  }

  archiveFilters();
  apply();
})();
