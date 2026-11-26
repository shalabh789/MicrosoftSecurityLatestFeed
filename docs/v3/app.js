(() => {
  "use strict";

  const TYPE_NAMES = {
    video: "Video", x: "X", threat: "Threat", cve: "CVE",
    blog: "Blog", learn: "Learn", reddit: "Reddit", change: "Change", roadmap: "Roadmap"
  };
  const FAMILY_MAP = {
    defender: "Defender", sentinel: "Sentinel", entra: "Entra", purview: "Purview",
    intune: "Intune", "security copilot": "Security Copilot", azure: "Azure",
    windows: "Windows", m365: "M365", "microsoft 365": "M365"
  };
  const PAGE_SIZE = 50;
  const ROOT = new URL("./", window.location.href);
  const CONTENT_ROOT = location.hostname === "shalabh789.github.io"
    ? new URL("https://raw.githubusercontent.com/shalabh789/MicrosoftSecurityLatestFeed/main/")
    : ROOT;
  const $ = (selector) => document.querySelector(selector);
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
  const allText = (values) => (values || []).map((value) => String(value));
  const dateValue = (value) => {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? String(value || "Date unavailable") :
      new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeZone: "UTC" }).format(date);
  };
  const generatedDateValue = (value) => {
    const date = new Date(value);
    if (value == null || value === "" || Number.isNaN(date.getTime())) return "";
    const parts = Object.fromEntries(new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23"
    }).formatToParts(date).map(({ type, value: part }) => [type, part]));
    return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second}`;
  };
  const dateKey = (value) => {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? "" : date.toISOString().slice(0, 10);
  };
  const count = (value) => (typeof value === "number" ? value : (value || []).length).toLocaleString();
  const itemUrl = (item) => {
    try {
      const url = new URL(item.url);
      return ["https:", "http:"].includes(url.protocol) ? url.href : "#";
    } catch {
      return "#";
    }
  };
  const assetUrl = (item) => {
    if (!item.asset) return "";
    const segments = item.asset.split("/");
    if (segments[0] !== "research" || segments.some((segment) => !segment || segment === "." || segment === "..")) return "";
    return new URL(segments.map(encodeURIComponent).join("/"), CONTENT_ROOT).href;
  };
  const engagementScore = (item) => {
    const values = item.engagement || {};
    return Object.values(values).reduce((sum, value) => sum + (Number(value) || 0), 0);
  };

  const controls = {
    week: $("#week-select"),
    search: $("#feed-search"),
    learnStatus: $("#learn-status"),
    learnFrom: $("#learn-date-from"),
    learnTo: $("#learn-date-to")
  };
  const state = {
    weeks: [],
    cache: new Map(),
    data: null,
    filtered: [],
    page: 0,
    theme: document.documentElement.dataset.theme || "dark",
    section: "",
    type: "",
    learnProduct: "",
    expandedMedia: { video: false, x: false },
    expandedCves: false,
    expandedRoadmap: new Set(),
    syncing: false
  };

  function parseHash() {
    const params = new URLSearchParams(location.hash.slice(1));
    return Object.fromEntries(params.entries());
  }

  function writeHash(section) {
    if (state.syncing) return;
    if (section !== undefined) state.section = section;
    const params = new URLSearchParams();
    const activeSection = state.section || parseHash().section;
    const values = {
      week: controls.week.value,
      type: state.type || "",
      q: controls.search.value.trim(),
      learnProduct: state.learnProduct,
      learnStatus: controls.learnStatus.value,
      learnFrom: controls.learnFrom.value,
      learnTo: controls.learnTo.value
    };
    if (activeSection) params.set("section", activeSection);
    Object.entries(values).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    const next = params.toString();
    if (location.hash.slice(1) !== next) history.replaceState(null, "", `${location.pathname}${location.search}${next ? `#${next}` : ""}`);
  }

  function applyHash(params) {
    state.syncing = true;
    state.section = params.section || "";
    state.type = params.type || "";
    state.learnProduct = params.learnProduct || "";
    controls.search.value = params.q || "";
    const fields = {
      learnStatus: controls.learnStatus,
      learnFrom: controls.learnFrom,
      learnTo: controls.learnTo
    };
    Object.entries(fields).forEach(([key, field]) => {
      field.value = params[key] || "";
    });
    state.syncing = false;
  }

  function productMatches(item, selected) {
    if (!selected) return true;
    const tags = allText(item.product).map((tag) => tag.toLowerCase());
    return tags.some((tag) => (FAMILY_MAP[tag] || tag).toLowerCase() === selected.toLowerCase());
  }

  function selectedFilterItems() {
    return state.data.items.filter((item) => {
      if (state.type && item.type !== state.type) return false;
      const query = controls.search.value.trim().toLocaleLowerCase();
      if (!query) return true;
      const searchable = [
        item.title, item.summary, item.id, ...(item.cves || []), ...(item.product || [])
      ].join(" ").toLocaleLowerCase();
      return searchable.includes(query);
    });
  }

  function populateOptions(data) {
    const start = dateKey(data.start);
    const end = dateKey(data.end);
    controls.learnFrom.min = start;
    controls.learnFrom.max = end;
    controls.learnTo.min = start;
    controls.learnTo.max = end;
  }

  function renderTypeChips() {
    const active = state.type || "";
    $("#type-chips").innerHTML = Object.entries(TYPE_NAMES).map(([type, label]) =>
      `<button class="chip" type="button" data-type="${type}" aria-pressed="${active === type}">${label} <span>${count(state.data.items.filter((item) => item.type === type))}</span></button>`
    ).join("");
    $("#type-chips").querySelectorAll("[data-type]").forEach((button) => {
      button.addEventListener("click", () => {
        state.type = state.type === button.dataset.type ? "" : button.dataset.type;
        state.page = 0;
        render();
      });
    });
  }

  function renderTiles(items) {
    const newItems = items.filter((item) =>
      ["video", "x", "threat", "blog", "learn", "reddit"].includes(item.type) && item.in_window !== false
    );
    const nonCvesInWindow = newItems.length;
    const countType = (type) => newItems.filter((item) => item.type === type).length;
    const cves = items.filter((item) => item.type === "cve");
    const critical = cves.filter((item) => item.severity === "Critical").length;
    const exploited = cves.filter((item) => item.exploited === true).length;
    $("#summary-tiles").innerHTML = [
      ["New additions this week", count(nonCvesInWindow), `${count(countType("video"))} videos · ${count(countType("x"))} X · ${count(countType("threat"))} threats · ${count(countType("blog"))} blogs · ${count(countType("learn"))} Learn · ${count(countType("reddit"))} community`],
      ["Blogs", count(countType("blog")), "Microsoft security reporting"],
      ["Videos", count(countType("video")), "Microsoft security videos"],
      ["CVEs this month", count(cves.length), `${count(exploited)} exploited · ${count(critical)} Critical`]
    ].map(([label, amount, detail]) => `<article class="tile"><span>${label}</span><strong>${amount}</strong><div class="tile-detail">${detail}</div></article>`).join("");
  }

  function renderLeadership(items) {
    const visible = new Set(items.map((item) => item.id));
    const entries = (state.data.leadership_summary || []).map((entry) => ({
      text: entry.text,
      target: (entry.item_ids || []).find((id) => visible.has(id))
    })).filter((entry) => entry.target);
    $("#leadership-list").innerHTML = entries.map((entry) =>
      `<li>${escapeHtml(entry.text)} <a href="#${escapeHtml(entry.target)}" data-item-target="${escapeHtml(entry.target)}">View related item</a></li>`
    ).join("");
    $("#leadership").hidden = !entries.length;
  }

  function renderKeyDates() {
    const dates = (state.data.key_dates || []).filter((entry) => !dateIsPast(entry.date));
    $("#key-dates").innerHTML = dates.map((entry) =>
      `<a class="date-chip" href="${escapeHtml(itemUrl({ url: entry.url }))}" target="_blank" rel="noopener noreferrer"><time datetime="${escapeHtml(entry.date)}">${escapeHtml(dateValue(entry.date))}</time> · ${escapeHtml(entry.label)}</a>`
    ).join("");
    $("#key-dates").hidden = !dates.length;
  }

  function renderThemes(items) {
    const itemMap = new Map(items.map((item) => [item.id, item]));
    const themes = state.data.themes || [];
    const visibleThemes = themes.filter((theme) => (theme.item_ids || []).some((id) => itemMap.has(id)));
    $("#theme-count").textContent = `${visibleThemes.length} themes`;
    $("#theme-grid").innerHTML = visibleThemes.map((theme) => {
      const index = themes.indexOf(theme);
      const available = (theme.item_ids || []).filter((id) => itemMap.has(id));
      const representative = available.map((id) => itemMap.get(id)).sort((a, b) => engagementScore(b) - engagementScore(a))[0];
      return `<article class="theme-card"><p class="eyebrow">Theme ${index + 1}</p><h3>${escapeHtml(theme.name)}</h3><p class="theme-summary">${escapeHtml(theme.summary)}</p>${representative ? linkedImageMarkup(representative, `${theme.name}: ${representative.title}`) : ""}<button class="button secondary" type="button" data-theme-index="${index}">Explore ${count(available)} items</button></article>`;
    }).join("") || '<p class="muted">No themes match the current filters.</p>';
    $("#theme-grid").querySelectorAll("[data-theme-index]").forEach((button) => {
      button.addEventListener("click", () => openTheme(Number(button.dataset.themeIndex), items));
    });
  }

  function openTheme(index, items) {
    const theme = state.data.themes[index];
    const map = new Map(items.map((item) => [item.id, item]));
    $("#theme-dialog-title").textContent = theme.name;
    $("#theme-dialog-summary").textContent = theme.summary;
    $("#theme-dialog-items").innerHTML = (theme.item_ids || []).map((id) => map.get(id)).filter(Boolean)
      .map((item) => `<li><a href="${escapeHtml(itemUrl(item))}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a> <span class="muted">· ${escapeHtml(TYPE_NAMES[item.type] || item.type)} · ${escapeHtml(dateValue(item.date))}</span>${linkedImageMarkup(item, item.title)}</li>`).join("") ||
      "<li>No matching items for the current filters.</li>";
    $("#theme-dialog").showModal();
  }

  function imageMarkup(item, alt) {
    const src = assetUrl(item);
    return src && item.type !== "threat"
      ? `<img class="media-image" src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" onerror="this.remove()">`
      : "";
  }

  function linkedImageMarkup(item, alt) {
    const image = imageMarkup(item, alt);
    return image ? `<a href="${escapeHtml(itemUrl(item))}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(alt)}">${image}</a>` : "";
  }

  function expandableMarkup(text, lines) {
    if (!text) return "";
    return `<div class="expandable-block"><p class="expandable-text clamped" style="--line-count:${lines}">${escapeHtml(text)}</p><button class="text-toggle" type="button" aria-expanded="false">Show more</button></div>`;
  }

  function renderMedia(items, type, target, showEngagement = false) {
    const records = items.filter((item) => item.type === type).sort((a, b) => {
      if (type === "video") return Number(b.engagement?.views || 0) - Number(a.engagement?.views || 0);
      return showEngagement ? engagementScore(b) - engagementScore(a) : new Date(b.date) - new Date(a.date);
    });
    const element = $(target);
    const countElement = $(`#${type === "video" ? "video" : type}-count`);
    if (countElement) countElement.textContent = `${count(records)} items`;
    const limit = type === "video" ? 5 : 8;
    const shown = state.expandedMedia[type] ? records : records.slice(0, limit);
    element.innerHTML = shown.map((item) => {
      const source = item.source || "Microsoft";
      const caption = showEngagement ? `${source} · ${dateValue(item.date)} · ${engagementLabel(item)}` : `${source} · ${dateValue(item.date)}`;
      const description = type === "video" ? expandableMarkup(item.description, 3) : "";
      return `<article ${itemIdAttribute(item)} class="content-card media-card" data-item-id="${escapeHtml(item.id)}">
        ${linkedImageMarkup(item, item.title)}
        <div class="card-copy"><h3><a href="${escapeHtml(itemUrl(item))}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a></h3><p>${escapeHtml(item.summary)}</p>${description}<p class="meta">${escapeHtml(caption)}</p></div>
      </article>`;
    }).join("") || '<p class="muted">No matching items.</p>';
    const toggle = $(`#${type}-toggle`);
    toggle.hidden = records.length <= limit;
    toggle.setAttribute("aria-expanded", String(state.expandedMedia[type]));
    toggle.textContent = state.expandedMedia[type]
      ? "Show fewer"
      : type === "video"
        ? `Explore more videos (${count(records.length - limit)})`
        : `Show all ${count(records)} posts`;
  }

  function todayInIndia() {
    return new Date().toLocaleDateString("sv-SE", { timeZone: "Asia/Kolkata" });
  }

  function dateIsPast(value) {
    const date = String(value || "");
    const today = todayInIndia();
    if (/^\d{4}-\d{2}$/.test(date)) return date < today.slice(0, 7);
    return /^\d{4}-\d{2}-\d{2}$/.test(date) && date < today;
  }

  function appearsInChanges(item) {
    return item.type === "change" || Boolean(item.change_date && !dateIsPast(item.change_date));
  }

  function itemIdAttribute(item) {
    return appearsInChanges(item) ? "" : `id="${escapeHtml(item.id)}"`;
  }

  function renderChanges(items) {
    const records = items.filter((item) =>
      (item.type === "change" || item.change_date) && (!item.change_date || !dateIsPast(item.change_date))
    );
    const dated = records.filter((item) => item.change_date)
      .sort((a, b) => a.change_date.localeCompare(b.change_date));
    const undated = records.filter((item) => !item.change_date);
    const row = (item) => `<article id="${escapeHtml(item.id)}" class="change-row" data-item-id="${escapeHtml(item.id)}">
      <time datetime="${escapeHtml(item.change_date || "")}">${escapeHtml(item.change_date ? dateValue(item.change_date) : "")}</time>
      <span class="badge">${escapeHtml((item.change_type || "change").replaceAll("_", " "))}</span>
      <span>${escapeHtml(allText(item.product).join(", ") || "—")}</span>
      <div><h3><a href="${escapeHtml(itemUrl(item))}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a></h3><p>${escapeHtml(item.summary)}</p></div>
    </article>`;
    $("#change-count").textContent = `${count(records)} items`;
    $("#change-list").innerHTML = [
      dated.map(row).join(""),
      undated.length ? `<h3 class="subheading">Date not announced</h3>${undated.map(row).join("")}` : ""
    ].join("");
    $("#changes").hidden = !records.length;
  }

  function renderRoadmap(items) {
    const records = items.filter((item) => item.type === "roadmap");
    const groups = new Map();
    records.forEach((item) => {
      const product = allText(item.product)[0] || "Other";
      if (!groups.has(product)) groups.set(product, []);
      groups.get(product).push(item);
    });
    $("#roadmap-count").textContent = `${count(records)} items`;
    $("#roadmap-list").innerHTML = [...groups.entries()].map(([product, group]) => {
      const expanded = state.expandedRoadmap.has(product);
      const shown = expanded ? group : group.slice(0, 5);
      const rows = shown.map((item) => `<article ${itemIdAttribute(item)} class="roadmap-row" data-item-id="${escapeHtml(item.id)}">
        <p class="roadmap-meta"><span class="badge">${escapeHtml(item.status || "Status unreported")}</span><span>${escapeHtml(item.rollout || "Rollout unreported")}</span></p>
        <h3><a href="${escapeHtml(itemUrl(item))}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a></h3>
        <p>${escapeHtml(item.summary)}</p>
        <p class="meta">${item.roadmap_id ? `Roadmap ID ${escapeHtml(item.roadmap_id)}` : ""}${item.roadmap_id && item.mc_id ? " · " : ""}${item.mc_id ? `MC ID ${escapeHtml(item.mc_id)}` : ""}</p>
      </article>`).join("");
      const toggle = group.length > 5
        ? `<button class="button secondary roadmap-toggle" type="button" data-product="${escapeHtml(product)}" aria-expanded="${expanded}">${expanded ? "Show fewer" : `Show all ${count(group.length)}`}</button>`
        : "";
      return `<section class="roadmap-group"><h3>${escapeHtml(product)}</h3><div class="roadmap-grid">${rows}</div>${toggle}</section>`;
    }).join("");
    $("#roadmap").hidden = !records.length;
  }

  function engagementLabel(item) {
    const engagement = item.engagement || {};
    const values = Object.entries(engagement).filter(([, value]) => Number(value) > 0).slice(0, 3);
    return values.map(([key, value]) => `${Number(value).toLocaleString()} ${key}`).join(" · ") || "Engagement not reported";
  }

  function renderThreats(items) {
    const records = items.filter((item) => item.type === "threat").sort((a, b) => new Date(b.date) - new Date(a.date));
    $("#threat-count").textContent = `${count(records)} reports`;
    $("#threat-table").innerHTML = records.map((item) => `<tr ${itemIdAttribute(item)} data-item-id="${escapeHtml(item.id)}">
      <td>${escapeHtml(dateValue(item.date))}</td>
      <td><a href="${escapeHtml(itemUrl(item))}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a><p>${escapeHtml(item.summary)}</p></td>
      <td>${(item.cves || []).map((cve) => `<a href="https://msrc.microsoft.com/update-guide/vulnerability/${encodeURIComponent(cve)}" target="_blank" rel="noopener noreferrer">${escapeHtml(cve)}</a>`).join(", ") || "—"}</td>
      <td>${escapeHtml(item.source)}</td>
    </tr>`).join("") || '<tr><td colspan="4">No matching threat reports.</td></tr>';
  }

  function renderBlogs(items) {
    const records = items.filter((item) => item.type === "blog").sort((a, b) => new Date(b.date) - new Date(a.date));
    $("#blog-count").textContent = `${count(records)} posts`;
    $("#blog-grid").innerHTML = records.map((item) => `<article ${itemIdAttribute(item)} class="content-card" data-item-id="${escapeHtml(item.id)}">
      <p class="eyebrow">${escapeHtml(allText(item.product).join(", ") || "Security")}</p>
      <h3><a href="${escapeHtml(itemUrl(item))}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a></h3>
      <p>${escapeHtml(item.summary)}</p>
      <p class="meta">${escapeHtml(dateValue(item.date))} · ${escapeHtml(item.source)}</p>
    </article>`).join("") || '<p class="muted">No matching blog posts.</p>';
  }

  function learnProductName(item) {
    return item.learn_product || allText(item.product)[0] || "Other";
  }

  function learnMatchesFilters(item) {
    if (controls.learnStatus.value && item.status !== controls.learnStatus.value) return false;
    const date = dateKey(item.date);
    if ((controls.learnFrom.value || controls.learnTo.value) && !date) return false;
    if (controls.learnFrom.value && date < controls.learnFrom.value) return false;
    if (controls.learnTo.value && date > controls.learnTo.value) return false;
    return true;
  }

  function renderProductStatusStrip(items) {
    const groups = new Map();
    state.data.items.filter((item) => item.type === "learn").forEach((item) => {
      const name = learnProductName(item);
      if (!groups.has(name)) groups.set(name, []);
      groups.get(name).push(item);
    });
    $("#product-status-strip").innerHTML = [...groups.entries()].map(([name, group]) => {
      const visible = group.filter((item) => items.includes(item) && learnMatchesFilters(item));
      return `<button class="chip product-status-chip" type="button" data-product-name="${escapeHtml(name)}" aria-pressed="${state.learnProduct === name}">${escapeHtml(name)} <span>${count(visible.length)}</span></button>`;
    }).join("");
  }

  function renderProducts(items) {
    const learnItems = items.filter((item) => item.type === "learn");
    const allLearn = state.data.items.filter((item) => item.type === "learn");
    const groups = new Map();
    allLearn.forEach((item) => {
      const name = learnProductName(item);
      if (!groups.has(name)) groups.set(name, []);
      groups.get(name).push(item);
    });
    const visibleGroups = [...groups.entries()].map(([name, group]) => [
      name,
      group.filter((item) => learnItems.includes(item) && (!state.learnProduct || name === state.learnProduct) && learnMatchesFilters(item))
    ]).filter(([, visible]) => visible.length);
    const visibleLearnCount = visibleGroups.reduce((total, [, visible]) => total + visible.length, 0);
    $("#learn-count").textContent = `${count(visibleLearnCount)} updates`;
    $("#product-list").innerHTML = visibleGroups.map(([name, visible], index) => {
      const group = groups.get(name);
      const latestItem = group.slice().sort((a, b) => new Date(b.date) - new Date(a.date))[0];
      const newestSection = latestItem?.section || "What's new";
      const current = group.filter((item) => item.section === newestSection);
      const ga = current.filter((item) => item.status === "GA").length;
      const preview = current.filter((item) => item.status === "Preview").length;
      const other = current.filter((item) => !["GA", "Preview"].includes(item.status)).length;
      let sourceUrl = latestItem ? itemUrl(latestItem) : "#";
      try {
        const url = new URL(sourceUrl);
        url.hash = "";
        sourceUrl = url.href;
      } catch {}
      return `<details class="product-block"${index === 0 ? " open" : ""}>
        <summary class="product-block-summary">
          <span><span class="eyebrow">Product</span><strong>${escapeHtml(name)}</strong></span>
          <span><span class="eyebrow">Latest heading</span><strong>${escapeHtml(newestSection)}</strong></span>
          <span><span class="eyebrow">Status</span><strong>${count(ga)} GA · ${count(preview)} Preview · ${count(other)} other</strong></span>
        </summary>
        <p class="product-source"><a href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener noreferrer">Source</a></p>
        <div class="learn-items">${visible.map((item) => `<article ${itemIdAttribute(item)} class="learn-item" data-item-id="${escapeHtml(item.id)}">
          <div><p class="learn-status"><span class="badge">${escapeHtml(item.status || "Update")}</span></p>
            <h3><a href="${escapeHtml(itemUrl(item))}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a></h3>
            <p>${escapeHtml(item.summary)}</p>${expandableMarkup(item.details, 4)}<p class="meta">${escapeHtml(item.section || "Learn")} · ${escapeHtml(dateValue(item.date))} · ${escapeHtml(item.date_precision || "date")}</p>
          </div>
        </article>`).join("")}</div>
      </details>`;
    }).join("") || '<p class="muted">No matching Learn updates.</p>';
  }

  function renderCommunity(items) {
    const records = items.filter((item) => item.type === "reddit").sort((a, b) => new Date(b.date) - new Date(a.date));
    $("#reddit-count").textContent = `${count(records)} threads`;
    $("#reddit-table").innerHTML = records.map((item) => `<tr ${itemIdAttribute(item)} data-item-id="${escapeHtml(item.id)}">
      <td>${escapeHtml(dateValue(item.date))}</td>
      <td><a href="${escapeHtml(itemUrl(item))}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a>${linkedImageMarkup(item, item.title)}</td>
      <td>${escapeHtml(item.summary)}</td>
      <td>${escapeHtml(allText(item.product).join(", ") || "—")}</td>
      <td>${escapeHtml(engagementLabel(item))}</td>
    </tr>`).join("") || '<tr><td colspan="5">No matching community threads.</td></tr>';
  }

  function cveRecords(items) {
    return items.filter((item) => item.type === "cve")
      .sort((a, b) => Number(b.exploited) - Number(a.exploited) || Number(b.cvss || 0) - Number(a.cvss || 0) || a.id.localeCompare(b.id));
  }

  function renderCveCharts(items) {
    const records = items.filter((item) => item.type === "cve");
    const families = new Map();
    records.forEach((item) => {
      const family = allText(item.product).map((tag) => FAMILY_MAP[tag.toLowerCase()] || tag)[0] || "Other";
      families.set(family, (families.get(family) || 0) + 1);
    });
    const max = Math.max(1, ...families.values());
    const bars = [...families.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10).map(([name, total]) =>
      `<div class="bar-row"><span>${escapeHtml(name)}</span><div class="bar-track"><div class="bar-fill" style="width:${Math.round(total / max * 100)}%"></div></div><span>${count(total)}</span></div>`
    ).join("");
    const severity = ["Critical", "Important", "Moderate", "Low"].map((name) =>
      [name, records.filter((item) => item.severity === name).length]
    );
    const severityMax = Math.max(1, ...severity.map(([, total]) => total));
    $("#cve-charts").innerHTML = `<article class="chart-card"><h3>CVEs by product family</h3>${bars || '<p class="muted">No product family data.</p>'}</article>
      <article class="chart-card"><h3>CVSS severity distribution</h3><div class="severity-bars">${severity.map(([name, total]) =>
        `<div class="severity-column"><span style="height:${Math.max(8, Math.round(total / severityMax * 72))}px" aria-label="${count(total)} ${name} CVEs"></span>${count(total)}<br>${escapeHtml(name)}</div>`
      ).join("")}</div></article>`;
  }

  function renderCves(items) {
    const allCves = items.filter((item) => item.type === "cve");
    const records = cveRecords(items);
    const mentionIds = (entry) => Array.isArray(entry.mention_ids) && entry.mention_ids.length
      ? entry.mention_ids
      : [entry.cve_id || entry.id].filter(Boolean);
    const textValues = (value) => value == null ? [] : Array.isArray(value) ? value.map(String) : [String(value)];
    const suppliedSpotlights = Array.isArray(state.data.cve_spotlight) && state.data.cve_spotlight.length > 0;
    const spotlightRows = suppliedSpotlights
      ? state.data.cve_spotlight.slice().sort((a, b) => Number(a.rank || 0) - Number(b.rank || 0))
        .filter((entry) => mentionIds(entry).some((id) => allCves.some((item) => item.id === id)))
        .slice(0, 5)
      : records.slice(0, 5).map((item, index) => ({
        rank: index + 1, cve_id: item.id, headline: item.title, title: item.title,
        product: item.product, cvss: item.cvss, severity: item.severity,
        exploited: item.exploited, disclosed: item.disclosed, fallback: true
      }));
    const spotlightIds = new Set(spotlightRows.map((entry) => entry.cve_id || entry.id || mentionIds(entry)[0]).filter(Boolean));
    const remaining = records.filter((item) => !spotlightIds.has(item.id));
    const pageCount = Math.max(1, Math.ceil(remaining.length / PAGE_SIZE));
    state.page = Math.min(state.page, pageCount - 1);
    const pageItems = remaining.slice(state.page * PAGE_SIZE, (state.page + 1) * PAGE_SIZE);
    const critical = allCves.filter((item) => item.severity === "Critical").length;
    const exploited = allCves.filter((item) => item.exploited === true).length;
    $("#cve-count").textContent = `${count(allCves)} CVEs`;
    $("#cve-tiles").innerHTML = [
      ["Total", allCves.length],
      ["Critical", critical],
      ["Exploited", exploited]
    ].map(([label, total]) => `<article class="tile"><span>${label}</span><strong>${count(total)}</strong></article>`).join("");
    const cveMap = new Map(state.data.items.filter((item) => item.type === "cve").map((item) => [item.id, item]));
    const renderBadge = (label, className = "") => `<span class="badge ${className}">${escapeHtml(label)}</span>`;
    const renderLinks = (links) => (Array.isArray(links) ? links : links ? [links] : []).map((link) => {
      const label = typeof link === "string" ? link : link.label || link.url;
      const url = itemUrl(typeof link === "string" ? { url: link } : link);
      return `<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;
    }).join("") || "<li>None listed.</li>";
    $("#cve-spotlights").innerHTML = spotlightRows.map((entry, index) => {
      const ids = mentionIds(entry);
      const cveId = entry.cve_id || entry.id || ids[0];
      const mentioned = ids.map((id) => cveMap.get(id))
        .filter((item) => item && allCves.some((visible) => visible.id === item.id));
      const related = mentioned.find((item) => allCves.some((visible) => visible.id === item.id));
      const productValues = Array.isArray(entry.product) ? entry.product : entry.product ? [entry.product] : allText(related?.product);
      const products = textValues(productValues).join(", ") ||
        textValues(entry.affected_products).slice(0, 2).join(", ") || "Microsoft products";
      const scoreValueRaw = entry.cvss ?? related?.cvss;
      const score = scoreValueRaw == null || scoreValueRaw === "" ? Number.NaN : Number(scoreValueRaw);
      const scoreValue = Number.isFinite(score) ? Math.min(10, Math.max(0, score)) : 0;
      const severityName = entry.severity || related?.severity || "Unknown";
      const status = `${entry.exploited ? renderBadge("EXPLOITED", "exploited") : ""}${entry.disclosed ? renderBadge("DISCLOSED") : ""}`;
      const rank = String(entry.rank || index + 1).padStart(2, "0");
      const sourceLink = `https://msrc.microsoft.com/update-guide/vulnerability/${encodeURIComponent(cveId)}`;
      const title = entry.headline || entry.title || related?.title || cveId;
      if (entry.fallback) {
        return `<article class="cve-spotlight fallback">
          <a class="cve-spotlight-link" href="${escapeHtml(sourceLink)}" target="_blank" rel="noopener noreferrer">
            <span class="cve-rank">${escapeHtml(rank)}</span><span class="cve-spotlight-copy">
              <strong>${escapeHtml(title)}</strong><span class="cve-subtitle">${escapeHtml(cveId)} · ${escapeHtml(products)}</span>
              <span class="cve-spotlight-meta"><span class="cve-score">${Number.isFinite(score) ? score.toFixed(1) : "—"}/10</span><span class="bar-track"><span class="bar-fill" style="width:${scoreValue * 10}%"></span></span>${renderBadge(severityName, severityName === "Critical" ? "critical" : "")}${status}</span>
            </span>
          </a>
        </article>`;
      }
      const why = textValues(entry.why_important).map((point) => `<li>${escapeHtml(point)}</li>`).join("") || "<li>Not provided.</li>";
      const actions = textValues(entry.what_to_do).map((point) => `<li>${escapeHtml(point)}</li>`).join("") || "<li>Not provided.</li>";
      const mentionedLinks = mentioned.map((item) =>
        `<li><a href="#${escapeHtml(item.id)}" data-item-target="${escapeHtml(item.id)}">${escapeHtml(item.title || item.id)}</a></li>`
      ).join("") || "<li>None listed.</li>";
      const productsList = textValues(entry.affected_products || entry.product || related?.product)
        .map((product) => `<li>${escapeHtml(product)}</li>`).join("") || "<li>Not provided.</li>";
      return `<details class="cve-spotlight" name="cve-spotlight" data-mention-ids="${escapeHtml(ids.join(","))}">
        <summary class="cve-spotlight-summary">
          <span class="cve-rank">${escapeHtml(rank)}</span><span class="cve-spotlight-copy">
            <strong>${escapeHtml(title)}</strong><span class="cve-subtitle">${escapeHtml(cveId)} · ${escapeHtml(products)}</span>
            <span class="cve-spotlight-meta"><span class="cve-score">${Number.isFinite(score) ? score.toFixed(1) : "—"}/10</span><span class="bar-track" role="img" aria-label="CVSS ${Number.isFinite(score) ? score.toFixed(1) : "unknown"} out of 10"><span class="bar-fill" style="width:${scoreValue * 10}%"></span></span>${renderBadge(severityName, severityName === "Critical" ? "critical" : "")}${status}</span>
          </span>
        </summary>
        <div class="cve-spotlight-detail">
          <div class="cve-story"><p>${escapeHtml(entry.story || "No story provided.")}</p><h3>[ WHY IT IS IMPORTANT ]</h3><ul>${why}</ul><h3>[ WHAT TO DO ]</h3><ul>${actions}</ul></div>
          <aside class="cve-side-panel">
            <h3>Products</h3><ul>${productsList}</ul>
            <h3>Impact</h3><p>${escapeHtml(entry.impact || "Not provided.")}</p>
            <h3>CVSS</h3><p>${Number.isFinite(score) ? score.toFixed(1) : "—"} · ${escapeHtml(entry.cvss_vector || "Vector unavailable")}</p>
            <h3>Exploitability</h3><p>${escapeHtml(entry.exploitability || "Not reported.")}</p>
            <h3>Fix links</h3><ul>${renderLinks(entry.fix_links)}</ul>
            <h3>Sources</h3><ul>${renderLinks(entry.sources)}</ul>
            <h3>Mentioned this week</h3><ul>${mentionedLinks}</ul>
          </aside>
        </div>
      </details>`;
    }).join("") || '<p class="muted">No CVE spotlight entries match the current filters.</p>';
    $("#cve-show-all").hidden = remaining.length === 0;
    $("#cve-show-all").setAttribute("aria-expanded", String(state.expandedCves));
    $("#cve-show-all").textContent = state.expandedCves
      ? "Show fewer CVEs"
      : `Explore more CVEs (${count(remaining.length)})`;
    $("#cve-explore").hidden = !state.expandedCves || remaining.length === 0;
    $("#cve-table").innerHTML = pageItems.map((item) => `<tr ${itemIdAttribute(item)} data-item-id="${escapeHtml(item.id)}">
      <td><a href="${escapeHtml(itemUrl(item))}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.id)}</a><br><span class="muted">${escapeHtml(dateValue(item.date))}</span></td>
      <td><span class="badge ${item.severity === "Critical" ? "critical" : ""}">${escapeHtml(item.severity || "Unknown")}</span></td>
      <td>${Number.isFinite(Number(item.cvss)) ? Number(item.cvss).toFixed(1) : "—"}</td>
      <td>${escapeHtml(allText(item.product).join(", ") || "—")}</td>
      <td>${escapeHtml(item.title)}</td>
      <td>${item.exploited ? '<span class="badge exploited">EXPLOITED</span>' : ""}${item.disclosed ? '<span class="badge">DISCLOSED</span>' : ""}${!item.exploited && !item.disclosed ? "—" : ""}</td>
    </tr>`).join("") || `<tr><td colspan="6">No other CVEs match the current filters.</td></tr>`;
    $("#cve-page").textContent = `Page ${state.page + 1} of ${pageCount} · ${count(pageItems)} rows`;
    $("#cve-prev").disabled = state.page === 0;
    $("#cve-next").disabled = state.page >= pageCount - 1;
    $("#cve-prev").hidden = remaining.length <= PAGE_SIZE;
    $("#cve-next").hidden = remaining.length <= PAGE_SIZE;
    renderCveCharts(items);
  }

  function renderFooter() {
    const week = state.data.week;
    $("#footer-week").textContent = week;
    $("#release-link").href = `https://github.com/shalabh789/MicrosoftSecurityLatestFeed/releases/tag/${encodeURIComponent(week)}`;
    const stamp = $("#build-stamp");
    const commit = stamp.dataset.commit || "";
    const shortSha = /^[a-f0-9]{40}$/i.test(commit) ? commit.slice(0, 7) : "local";
    const builtAt = new Date(stamp.dataset.builtAt);
    const dateTime = Number.isNaN(builtAt.getTime())
      ? "time unavailable"
      : new Intl.DateTimeFormat("en-IN", {
        dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata"
      }).format(builtAt) + " IST";
    const commitLabel = shortSha === "local"
      ? shortSha
      : `<a href="https://github.com/shalabh789/MicrosoftSecurityLatestFeed/commit/${escapeHtml(commit)}">${escapeHtml(shortSha)}</a>`;
    stamp.innerHTML = `Built from ${commitLabel} · ${escapeHtml(dateTime)}`;
  }

  function setTheme(theme) {
    state.theme = theme;
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch (e) {}
    $("#theme-toggle").textContent = theme === "dark" ? "Light mode" : "Dark mode";
    $("#theme-toggle").setAttribute("aria-pressed", String(theme === "dark"));
  }

  function render() {
    if (!state.data) return;
    const items = selectedFilterItems();
    state.filtered = items;
    renderTypeChips();
    renderTiles(items);
    renderLeadership(items);
    renderThemes(items);
    renderCves(items);
    renderChanges(items);
    renderRoadmap(items);
    renderMedia(items, "video", "#video-grid");
    renderMedia(items, "x", "#x-grid", true);
    renderThreats(items);
    renderBlogs(items);
    renderProductStatusStrip(items);
    renderProducts(items);
    renderCommunity(items);
    $("#filter-summary").textContent = `${count(items)} of ${count(state.data.items)} items match the current filters.`;
    renderKeyDates();
    $("#last-updated").textContent = `Updated ${dateValue(state.data.generated)}`;
    writeHash();
  }

  async function loadWeek(week) {
    if (state.cache.has(week)) {
      state.data = state.cache.get(week);
    } else {
      const entry = state.weeks.find((record) => record.week === week);
      if (!entry) throw new Error(`No data is registered for ${week}.`);
      const response = await fetch(new URL(entry.data, CONTENT_ROOT));
      if (!response.ok) throw new Error(`Could not load ${entry.data} (${response.status}).`);
      const data = await response.json();
      if (!data || !Array.isArray(data.items)) throw new Error(`The data file for ${week} is invalid.`);
      state.cache.set(week, data);
      state.data = data;
    }
    populateOptions(state.data);
    const generated = generatedDateValue(state.data.generated);
    $("#generated-stamp").textContent = generated ? `generated ${generated} IST` : "";
    renderFooter();
  }

  function ensureWeekOption(week) {
    if ([...controls.week.options].some((option) => option.value === week)) return;
    const entry = state.weeks.find((record) => record.week === week);
    if (entry) controls.week.add(new Option(entry.week, entry.week));
  }

  async function boot() {
    try {
      const response = await fetch(new URL("data/index.json", CONTENT_ROOT));
      if (!response.ok) throw new Error(`Could not load week index (${response.status}).`);
      state.weeks = await response.json();
      if (!Array.isArray(state.weeks) || !state.weeks.length) throw new Error("No weekly data is available.");
      state.weeks.sort((a, b) => b.week.localeCompare(a.week, undefined, { numeric: true }));
      const rawHash = location.hash.slice(1);
      const initialAnchor = rawHash && !rawHash.includes("=") && document.getElementById(decodeURIComponent(rawHash))
        ? decodeURIComponent(rawHash)
        : "";
      const params = initialAnchor ? {} : parseHash();
      const defaultWeek = state.weeks[0].week;
      const week = state.weeks.some((entry) => entry.week === params.week) ? params.week : defaultWeek;
      controls.week.innerHTML = state.weeks.slice(0, 10)
        .map((entry) => `<option value="${escapeHtml(entry.week)}">${escapeHtml(entry.week)}</option>`).join("");
      ensureWeekOption(week);
      controls.week.value = week;
      await loadWeek(week);
      applyHash(params);
      if (initialAnchor) state.section = initialAnchor;
      render();
      if (initialAnchor) document.getElementById(initialAnchor)?.scrollIntoView();
    } catch (error) {
      const main = $("#main");
      main.innerHTML = `<p class="error-message" role="alert">The dashboard could not load: ${escapeHtml(error.message)} Please check the weekly data files and try again.</p>`;
    }
  }

  [controls.learnStatus, controls.learnFrom, controls.learnTo].forEach((control) => {
    control.addEventListener("change", () => {
      state.page = 0;
      render();
    });
  });
  controls.search.addEventListener("input", () => {
    state.page = 0;
    render();
  });
  $("#search-clear").addEventListener("click", () => {
    controls.search.value = "";
    state.page = 0;
    render();
    controls.search.focus();
  });
  controls.week.addEventListener("change", async () => {
    try {
      await loadWeek(controls.week.value);
      applyHash({ week: controls.week.value, section: state.section });
      state.page = 0;
      render();
    } catch (error) {
      $("#filter-summary").textContent = error.message;
    }
  });
  $("#cve-show-all").addEventListener("click", () => {
    state.expandedCves = !state.expandedCves;
    state.page = 0;
    renderCves(state.filtered);
    if (state.expandedCves) $("#cve-explore").scrollIntoView({ behavior: "smooth" });
  });
  $("#cve-prev").addEventListener("click", () => { state.page -= 1; renderCves(state.filtered); });
  $("#cve-next").addEventListener("click", () => { state.page += 1; renderCves(state.filtered); });
  $("#video-toggle").addEventListener("click", () => {
    state.expandedMedia.video = !state.expandedMedia.video;
    render();
  });
  $("#x-toggle").addEventListener("click", () => {
    state.expandedMedia.x = !state.expandedMedia.x;
    render();
  });
  $("#product-status-strip").addEventListener("click", (event) => {
    const button = event.target.closest("[data-product-name]");
    if (!button) return;
    state.learnProduct = state.learnProduct === button.dataset.productName ? "" : button.dataset.productName;
    render();
    $("#products").scrollIntoView({ behavior: "smooth" });
  });
  $("#theme-toggle").addEventListener("click", () => setTheme(state.theme === "dark" ? "light" : "dark"));
  $("#theme-dialog-close").addEventListener("click", () => $("#theme-dialog").close());
  $("#theme-dialog").addEventListener("click", (event) => {
    if (event.target === $("#theme-dialog")) $("#theme-dialog").close();
  });
  document.addEventListener("click", (event) => {
    const roadmapToggle = event.target.closest(".roadmap-toggle");
    if (roadmapToggle) {
      const product = roadmapToggle.dataset.product;
      if (state.expandedRoadmap.has(product)) state.expandedRoadmap.delete(product);
      else state.expandedRoadmap.add(product);
      render();
      return;
    }
    const button = event.target.closest(".text-toggle");
    if (!button) return;
    const expanded = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(expanded));
    button.textContent = expanded ? "Show less" : "Show more";
    button.previousElementSibling.classList.toggle("clamped", !expanded);
  });
  document.addEventListener("click", (event) => {
    const itemLink = event.target.closest("a[data-item-target]");
    if (itemLink) {
      const id = itemLink.dataset.itemTarget;
      let target = document.getElementById(id);
      const item = state.filtered.find((record) => record.id === id);
      if (item?.type === "cve") {
        const spotlight = [...$("#cve-spotlights").querySelectorAll(".cve-spotlight[data-mention-ids]")]
          .find((row) => row.dataset.mentionIds.split(",").includes(id));
        if (spotlight) {
          spotlight.open = true;
          target = spotlight;
        } else {
          state.expandedCves = true;
          const spotlightIds = new Set([...$("#cve-spotlights").querySelectorAll("[data-mention-ids]")]
            .flatMap((row) => row.dataset.mentionIds.split(",")));
          const index = cveRecords(state.filtered).filter((record) => !spotlightIds.has(record.id)).findIndex((record) => record.id === id);
          state.page = Math.max(0, Math.floor(index / PAGE_SIZE));
          renderCves(state.filtered);
          target = document.getElementById(id);
        }
      }
      if (!target && item?.type === "roadmap") {
        state.expandedRoadmap.add(allText(item.product)[0] || "Other");
        renderRoadmap(state.filtered);
        target = document.getElementById(id);
      }
      if (!target && (item?.type === "video" || item?.type === "x")) {
        state.expandedMedia[item.type] = true;
        render();
        target = document.getElementById(id);
      }
      if (!target && item?.type === "learn") {
        state.learnProduct = "";
        controls.learnStatus.value = "";
        controls.learnFrom.value = "";
        controls.learnTo.value = "";
        renderProducts(state.filtered);
        target = document.getElementById(id);
      }
      if (target) {
        event.preventDefault();
        target.scrollIntoView();
        writeHash(target.closest(".content-section")?.id || "");
      }
      return;
    }
    if (event.defaultPrevented) return;
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const section = decodeURIComponent(link.getAttribute("href").slice(1));
    const target = document.getElementById(section);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView();
    writeHash(section);
  });
  window.addEventListener("hashchange", async () => {
    const rawHash = location.hash.slice(1);
    const anchor = rawHash && !rawHash.includes("=") ? decodeURIComponent(rawHash) : "";
    if (anchor && document.getElementById(anchor)) {
      document.getElementById(anchor).scrollIntoView();
      writeHash(anchor);
      return;
    }
    const params = parseHash();
    if (params.week && params.week !== controls.week.value && state.weeks.some((entry) => entry.week === params.week)) {
      ensureWeekOption(params.week);
      controls.week.value = params.week;
      await loadWeek(params.week);
    }
    applyHash(params);
    state.page = 0;
    render();
  });
  setTheme(state.theme);
  boot();
})();
