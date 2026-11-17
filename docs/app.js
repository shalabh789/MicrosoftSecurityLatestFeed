(() => {
  "use strict";

  const PRODUCT_CHOICES = [
    "Microsoft Entra ID", "Entra ID Governance", "Global Secure Access", "Defender XDR",
    "Defender for Endpoint", "Defender for Office 365", "Defender for Identity",
    "Defender for Cloud Apps", "Defender for Cloud", "Defender Vulnerability Management",
    "Defender Threat Intelligence", "Security Exposure Management", "Sentinel", "Purview",
    "Intune", "Security Copilot", "Azure network security", "Windows security"
  ];
  const TYPE_NAMES = {
    video: "Video", x: "X", threat: "Threat", cve: "CVE",
    blog: "Blog", learn: "Learn", reddit: "Reddit"
  };
  const PRODUCT_TAGS = {
    "Microsoft Entra ID": ["entra"],
    "Entra ID Governance": ["entra"],
    "Global Secure Access": ["global secure access", "entra"],
    "Defender XDR": ["defender"],
    "Defender for Endpoint": ["defender"],
    "Defender for Office 365": ["defender"],
    "Defender for Identity": ["defender"],
    "Defender for Cloud Apps": ["defender"],
    "Defender for Cloud": ["defender"],
    "Defender Vulnerability Management": ["defender"],
    "Defender Threat Intelligence": ["defender"],
    "Security Exposure Management": ["security exposure management"],
    Sentinel: ["sentinel"],
    Purview: ["purview"],
    Intune: ["intune"],
    "Security Copilot": ["security copilot"],
    "Azure network security": ["azure"],
    "Windows security": ["windows"]
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
    product: $("#by-product"),
    type: $("#type-filter"),
    family: $("#family-filter"),
    country: $("#country-filter"),
    actor: $("#actor-filter"),
    from: $("#date-from"),
    to: $("#date-to"),
    focus: $("#cve-focus"),
    cvss7: $("#cve-cvss7"),
    exploited: $("#cve-exploited"),
    disclosed: $("#cve-disclosed")
  };
  const state = {
    weeks: [],
    cache: new Map(),
    data: null,
    filtered: [],
    page: 0,
    theme: "light",
    section: "",
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
      product: controls.product.value,
      type: controls.type.value,
      family: controls.family.value,
      country: controls.country.value,
      actor: controls.actor.value,
      from: controls.from.value,
      to: controls.to.value,
      focus: controls.focus.checked ? "1" : "0",
      cvss7: controls.cvss7.checked ? "1" : "",
      exploited: controls.exploited.checked ? "1" : "",
      disclosed: controls.disclosed.checked ? "1" : ""
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
    const fields = {
      product: controls.product,
      type: controls.type,
      family: controls.family,
      country: controls.country,
      actor: controls.actor,
      from: controls.from,
      to: controls.to
    };
    Object.entries(fields).forEach(([key, field]) => {
      field.value = params[key] || "";
    });
    controls.focus.checked = params.focus === undefined ? true : params.focus === "1";
    controls.cvss7.checked = params.cvss7 === "1";
    controls.exploited.checked = params.exploited === "1";
    controls.disclosed.checked = params.disclosed === "1";
    state.syncing = false;
  }

  function productMatches(item, selected) {
    if (!selected) return true;
    const needles = PRODUCT_TAGS[selected] || [selected.toLowerCase()];
    const tags = allText(item.product).map((tag) => tag.toLowerCase());
    if (item.learn_product) return String(item.learn_product).toLowerCase() === selected.toLowerCase();
    return needles.some((needle) => tags.some((tag) => tag.includes(needle)));
  }

  function selectedFilterItems() {
    const product = controls.product.value;
    const family = controls.family.value.toLowerCase();
    const type = controls.type.value;
    const country = controls.country.value;
    const actor = controls.actor.value;
    const from = controls.from.value;
    const to = controls.to.value;
    return state.data.items.filter((item) => {
      if (type && item.type !== type) return false;
      if (!productMatches(item, product)) return false;
      if (family && !allText(item.product).some((tag) => tag.toLowerCase().includes(family))) return false;
      if (country && !(item.geo || []).some((geo) => geo.country === country)) return false;
      if (actor && item.actor !== actor) return false;
      const date = dateKey(item.date);
      if (from && date && date < from) return false;
      if (to && date && date > to) return false;
      return true;
    });
  }

  function ensureOption(select, value, label) {
    if (!value || Array.from(select.options).some((option) => option.value === value)) return;
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label || value;
    select.append(option);
  }

  function populateOptions(data) {
    controls.product.innerHTML = '<option value="">All products</option>' +
      PRODUCT_CHOICES.map((product) => `<option value="${escapeHtml(product)}">${escapeHtml(product)}</option>`).join("");
    const families = [...new Set(data.items.flatMap((item) => allText(item.product).map((tag) => FAMILY_MAP[tag.toLowerCase()] || tag)))].sort();
    controls.family.innerHTML = '<option value="">All families</option>' +
      families.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");
    const countries = [...new Set(data.items.flatMap((item) => (item.geo || []).map((geo) => geo.country)).filter(Boolean))].sort();
    controls.country.innerHTML = '<option value="">All countries</option>' +
      countries.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");
    const actors = [...new Set(data.items.map((item) => item.actor).filter(Boolean))].sort();
    controls.actor.innerHTML = '<option value="">All actors</option>' +
      actors.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");
    controls.type.innerHTML = '<option value="">All types</option>' +
      Object.entries(TYPE_NAMES).map(([value, name]) => `<option value="${value}">${name}</option>`).join("");
    const start = dateKey(data.start);
    const end = dateKey(data.end);
    controls.from.min = start;
    controls.from.max = end;
    controls.to.min = start;
    controls.to.max = end;
  }

  function renderTypeChips(items) {
    const active = controls.type.value;
    controls.type.value = "";
    const availableItems = selectedFilterItems();
    controls.type.value = active;
    $("#type-chips").innerHTML = Object.entries(TYPE_NAMES).map(([type, label]) =>
      `<button class="chip" type="button" data-type="${type}" aria-pressed="${active === type}">${label} <span>${count(availableItems.filter((item) => item.type === type))}</span></button>`
    ).join("");
    $("#type-chips").querySelectorAll("[data-type]").forEach((button) => {
      button.addEventListener("click", () => {
        controls.type.value = controls.type.value === button.dataset.type ? "" : button.dataset.type;
        state.page = 0;
        render();
      });
    });
  }

  function renderTiles(items) {
    const newItems = items.filter((item) => item.type !== "cve" && item.in_window !== false);
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

  function renderThemes(items) {
    const itemMap = new Map(items.map((item) => [item.id, item]));
    const themes = state.data.themes || [];
    const visibleThemes = themes.filter((theme) => (theme.item_ids || []).some((id) => itemMap.has(id)));
    $("#theme-count").textContent = `${visibleThemes.length} themes`;
    $("#theme-grid").innerHTML = visibleThemes.map((theme) => {
      const index = themes.indexOf(theme);
      const available = (theme.item_ids || []).filter((id) => itemMap.has(id));
      const representative = available.map((id) => itemMap.get(id)).sort((a, b) => engagementScore(b) - engagementScore(a))[0];
      return `<article class="theme-card"><p class="eyebrow">Theme ${index + 1}</p><h3>${escapeHtml(theme.name)}</h3><p>${escapeHtml(theme.summary)}</p>${representative ? `<a href="${escapeHtml(itemUrl(representative))}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(representative.title)}">${imageMarkup(representative, `${theme.name}: ${representative.title}`)}</a>` : ""}<button class="button secondary" type="button" data-theme-index="${index}">Explore ${count(available)} items</button></article>`;
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
      .map((item) => `<li><a href="${escapeHtml(itemUrl(item))}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a> <span class="muted">· ${escapeHtml(TYPE_NAMES[item.type] || item.type)} · ${escapeHtml(dateValue(item.date))}</span></li>`).join("") ||
      "<li>No matching items for the current filters.</li>";
    $("#theme-dialog").showModal();
  }

  function imageMarkup(item, alt) {
    const src = assetUrl(item);
    return src ? `<img class="media-image" src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'media-placeholder',textContent:'Image unavailable'}))">` :
      '<span class="media-placeholder">No image supplied</span>';
  }

  function renderMedia(items, type, target, showEngagement = false) {
    const records = items.filter((item) => item.type === type).sort((a, b) => showEngagement ? engagementScore(b) - engagementScore(a) : new Date(b.date) - new Date(a.date));
    const element = $(target);
    const countElement = $(`#${type === "video" ? "video" : type}-count`);
    if (countElement) countElement.textContent = `${count(records)} items`;
    element.innerHTML = records.map((item) => {
      const source = item.source || "Microsoft";
      const caption = showEngagement ? `${source} · ${dateValue(item.date)} · ${engagementLabel(item)}` : `${source} · ${dateValue(item.date)}`;
      const summary = showEngagement ? `<p>${escapeHtml(item.summary)}</p>` : `<p>${escapeHtml(item.summary)}</p>`;
      return `<article class="content-card media-card" data-item-id="${escapeHtml(item.id)}">
        <a href="${escapeHtml(itemUrl(item))}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(item.title)}">${imageMarkup(item, item.title)}</a>
        <div class="card-copy"><h3><a href="${escapeHtml(itemUrl(item))}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a></h3>${summary}<p class="meta">${escapeHtml(caption)}</p></div>
      </article>`;
    }).join("") || '<p class="muted">No matching items.</p>';
  }

  function engagementLabel(item) {
    const engagement = item.engagement || {};
    const values = Object.entries(engagement).filter(([, value]) => Number(value) > 0).slice(0, 3);
    return values.map(([key, value]) => `${Number(value).toLocaleString()} ${key}`).join(" · ") || "Engagement not reported";
  }

  function renderThreats(items) {
    const records = items.filter((item) => item.type === "threat").sort((a, b) => new Date(b.date) - new Date(a.date));
    $("#threat-count").textContent = `${count(records)} reports`;
    $("#threat-table").innerHTML = records.map((item) => `<tr data-item-id="${escapeHtml(item.id)}">
      <td>${escapeHtml(dateValue(item.date))}</td>
      <td><a href="${escapeHtml(itemUrl(item))}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a><p>${escapeHtml(item.summary)}</p></td>
      <td>${escapeHtml(item.actor || "Not attributed")}</td>
      <td>${escapeHtml(allText(item.sectors).join(", ") || "Not specified")}</td>
      <td>${(item.cves || []).map((cve) => `<a href="https://msrc.microsoft.com/update-guide/vulnerability/${encodeURIComponent(cve)}" target="_blank" rel="noopener noreferrer">${escapeHtml(cve)}</a>`).join(", ") || "—"}</td>
      <td>${escapeHtml(item.source)}</td>
    </tr>`).join("") || '<tr><td colspan="6">No matching threat reports.</td></tr>';
  }

  function renderBlogs(items) {
    const records = items.filter((item) => item.type === "blog").sort((a, b) => new Date(b.date) - new Date(a.date));
    $("#blog-count").textContent = `${count(records)} posts`;
    $("#blog-grid").innerHTML = records.map((item) => `<article class="content-card" data-item-id="${escapeHtml(item.id)}">
      <p class="eyebrow">${escapeHtml(allText(item.product).join(", ") || "Security")}</p>
      <h3><a href="${escapeHtml(itemUrl(item))}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a></h3>
      <p>${escapeHtml(item.summary)}</p>
      <p class="meta">${escapeHtml(dateValue(item.date))} · ${escapeHtml(item.source)}</p>
    </article>`).join("") || '<p class="muted">No matching blog posts.</p>';
  }

  function learnProductName(item) {
    return item.learn_product || allText(item.product)[0] || "Other";
  }

  function learnMatchesProduct(learnItem, selected) {
    if (!selected) return true;
    return productMatches(learnItem, selected);
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
    const selected = controls.product.value;
    const selectedGroup = selected ? [...groups.entries()].find(([name, group]) =>
      name.toLowerCase() === selected.toLowerCase() || group.some((item) => learnMatchesProduct(item, selected))
    ) : null;
    const visibleGroups = selected
      ? (selectedGroup ? [selectedGroup] : [[selected, []]])
      : [...new Set([...PRODUCT_CHOICES, ...groups.keys()])].map((name) => [name, groups.get(name) || []]);
    $("#learn-count").textContent = `${count(learnItems)} updates`;
    $("#product-list").innerHTML = visibleGroups.map(([name, group]) => {
      const visible = group.filter((item) => learnItems.includes(item));
      const newestSection = visible.slice().sort((a, b) => new Date(b.date) - new Date(a.date))[0]?.section || "No matching Learn updates";
      const groupProduct = selected || PRODUCT_CHOICES.find((product) => product.toLowerCase() === name.toLowerCase()) || productNameForGroup(name);
      const related = items.filter((item) => (item.type === "cve" || item.type === "x" || item.type === "blog") &&
        productMatches(item, groupProduct));
      const cveTotal = related.filter((item) => item.type === "cve").length;
      const xTotal = related.filter((item) => item.type === "x").length;
      const blogTotal = related.filter((item) => item.type === "blog").length;
      const latestItem = visible.slice().sort((a, b) => new Date(b.date) - new Date(a.date))[0];
      const row = `<article class="product-row">
        <h3>${escapeHtml(name)}</h3>
        <p>Latest heading: ${escapeHtml(newestSection)} · ${count(visible.length)} of ${count(group.length)} Learn items match<br>${count(cveTotal)} CVEs · ${count(xTotal)} X posts · ${count(blogTotal)} blogs</p>
        ${latestItem ? `<a href="${escapeHtml(itemUrl(latestItem))}" target="_blank" rel="noopener noreferrer">Latest Learn update</a>` : "<span class=\"muted\">No Learn updates this week</span>"}
        <div class="learn-items">${visible.map((item) => `<article class="learn-item" data-item-id="${escapeHtml(item.id)}">
          <div><h3><a href="${escapeHtml(itemUrl(item))}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a></h3>
            <p>${escapeHtml(item.summary)}</p><p class="meta">${escapeHtml(item.section || "Learn")} · ${escapeHtml(dateValue(item.date))} · ${escapeHtml(item.status || "Update")} · ${escapeHtml(item.date_precision || "date")}</p>
          </div>${imageMarkup(item, `${name}: ${item.title}`)}
        </article>`).join("")}</div>
      </article>`;
      return row;
    }).join("") || '<p class="muted">No matching Learn updates.</p>';
  }

  function productNameForGroup(name) {
    return PRODUCT_CHOICES.find((product) =>
      (PRODUCT_TAGS[product] || []).some((needle) => name.toLowerCase().includes(needle))
    ) || "";
  }

  function renderCommunity(items) {
    const records = items.filter((item) => item.type === "reddit").sort((a, b) => new Date(b.date) - new Date(a.date));
    $("#reddit-count").textContent = `${count(records)} threads`;
    $("#reddit-table").innerHTML = records.map((item) => `<tr data-item-id="${escapeHtml(item.id)}">
      <td>${escapeHtml(dateValue(item.date))}</td>
      <td><a href="${escapeHtml(itemUrl(item))}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a></td>
      <td>${escapeHtml(item.summary)}</td>
      <td>${escapeHtml(allText(item.product).join(", ") || "—")}</td>
      <td>${escapeHtml(engagementLabel(item))}</td>
    </tr>`).join("") || '<tr><td colspan="5">No matching community threads.</td></tr>';
  }

  function cveRecords(items) {
    let records = items.filter((item) => item.type === "cve");
    if (controls.focus.checked) {
      records = records.filter((item) => item.exploited === true && item.severity === "Critical" && Number(item.cvss) >= 9);
    } else {
      if (controls.cvss7.checked) records = records.filter((item) => Number(item.cvss) >= 7);
      if (controls.exploited.checked) records = records.filter((item) => item.exploited === true);
      if (controls.disclosed.checked) records = records.filter((item) => item.disclosed === true);
    }
    return records.sort((a, b) => Number(b.exploited) - Number(a.exploited) || Number(b.cvss || 0) - Number(a.cvss || 0) || a.id.localeCompare(b.id));
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
    const filteredCves = cveRecords(items);
    const pageCount = Math.max(1, Math.ceil(filteredCves.length / PAGE_SIZE));
    state.page = Math.min(state.page, pageCount - 1);
    const pageItems = filteredCves.slice(state.page * PAGE_SIZE, (state.page + 1) * PAGE_SIZE);
    const critical = allCves.filter((item) => item.severity === "Critical").length;
    const exploited = allCves.filter((item) => item.exploited === true).length;
    $("#cve-count").textContent = `${count(filteredCves)} shown of ${count(allCves)} CVEs`;
    $("#cve-tiles").innerHTML = [
      ["Total", allCves.length],
      ["Critical", critical],
      ["Exploited", exploited]
    ].map(([label, total]) => `<article class="tile"><span>${label}</span><strong>${count(total)}</strong></article>`).join("");
    $("#cve-table").innerHTML = pageItems.map((item) => `<tr data-item-id="${escapeHtml(item.id)}">
      <td><a href="${escapeHtml(itemUrl(item))}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.id)}</a><br><span class="muted">${escapeHtml(dateValue(item.date))}</span></td>
      <td><span class="badge ${item.severity === "Critical" ? "critical" : ""}">${escapeHtml(item.severity || "Unknown")}</span></td>
      <td>${Number.isFinite(Number(item.cvss)) ? Number(item.cvss).toFixed(1) : "—"}</td>
      <td>${escapeHtml(allText(item.product).join(", ") || "—")}</td>
      <td>${escapeHtml(item.title)}<p>${escapeHtml(item.summary)}</p></td>
      <td>${item.exploited ? '<span class="badge exploited">Exploited</span>' : ""}${item.disclosed ? '<span class="badge">Publicly disclosed</span>' : ""}${!item.exploited && !item.disclosed ? "—" : ""}</td>
    </tr>`).join("") || `<tr><td colspan="6">${controls.focus.checked
      ? "No CVEs match the strict focus criteria. Use Show all CVEs to browse the full feed."
      : "No CVEs match the current filters."}</td></tr>`;
    $("#cve-page").textContent = `Page ${state.page + 1} of ${pageCount} · ${count(pageItems)} rows`;
    $("#cve-prev").disabled = state.page === 0;
    $("#cve-next").disabled = state.page >= pageCount - 1;
    renderCveCharts(items);
  }

  function renderFooter() {
    const week = state.data.week;
    $("#footer-week").textContent = week;
    const researchPath = state.data.research || `research/${week}/README.md`;
    $("#research-link").href = `https://github.com/shalabh789/MicrosoftSecurityLatestFeed/blob/main/${researchPath}`;
    const entry = state.weeks.find((record) => record.week === week);
    if (entry?.verification) {
      $("#verification-link").innerHTML = ` · <a href="https://github.com/shalabh789/MicrosoftSecurityLatestFeed/blob/main/${escapeHtml(entry.verification)}">Verification report</a>`;
    } else {
      $("#verification-link").textContent = "";
    }
    fetch(new URL(researchPath, CONTENT_ROOT)).then((response) => response.ok ? response.text() : "")
      .then((readme) => {
        const gaps = readme.split(/^## Gaps\s*$/m)[1]?.split(/^## /m)[0] || "";
        const entries = gaps.split(/\r?\n/).filter((line) => line.startsWith("- ")).map((line) => line.slice(2).trim());
        $("#gap-list").replaceChildren(...entries.map((gap) => {
          const item = document.createElement("li");
          item.textContent = gap;
          return item;
        }));
        $("#data-gaps").textContent = entries.length ? `${entries.length} coverage notes from the research report:` : "No data gaps were listed in the research report.";
      }).catch(() => {
        $("#data-gaps").textContent = "Research coverage notes are unavailable.";
      });
  }

  function setTheme(theme) {
    state.theme = theme;
    document.documentElement.dataset.theme = theme;
    $("#theme-toggle").textContent = theme === "dark" ? "Light mode" : "Dark mode";
    $("#theme-toggle").setAttribute("aria-pressed", String(theme === "dark"));
  }

  function render() {
    if (!state.data) return;
    const items = selectedFilterItems();
    state.filtered = items;
    renderTypeChips(items);
    renderTiles(items);
    renderThemes(items);
    renderMedia(items, "video", "#video-grid");
    renderMedia(items, "x", "#x-grid", true);
    renderThreats(items);
    renderBlogs(items);
    renderProducts(items);
    renderCommunity(items);
    renderCves(items);
    $("#filter-summary").textContent = `${count(items)} of ${count(state.data.items)} items match the current filters.`;
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
      data.research = entry.readme;
      state.cache.set(week, data);
      state.data = data;
    }
    populateOptions(state.data);
    renderFooter();
  }

  async function boot() {
    try {
      const response = await fetch(new URL("data/index.json", CONTENT_ROOT));
      if (!response.ok) throw new Error(`Could not load week index (${response.status}).`);
      state.weeks = await response.json();
      if (!Array.isArray(state.weeks) || !state.weeks.length) throw new Error("No weekly data is available.");
      const rawHash = location.hash.slice(1);
      const initialAnchor = rawHash && !rawHash.includes("=") && document.getElementById(decodeURIComponent(rawHash))
        ? decodeURIComponent(rawHash)
        : "";
      const params = initialAnchor ? {} : parseHash();
      const defaultWeek = state.weeks[state.weeks.length - 1].week;
      const week = state.weeks.some((entry) => entry.week === params.week) ? params.week : defaultWeek;
      controls.week.innerHTML = state.weeks.map((entry) => `<option value="${escapeHtml(entry.week)}">${escapeHtml(entry.week)}</option>`).join("");
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

  function clearFilters() {
    controls.product.value = "";
    controls.type.value = "";
    controls.family.value = "";
    controls.country.value = "";
    controls.actor.value = "";
    controls.from.value = "";
    controls.to.value = "";
    controls.focus.checked = false;
    controls.cvss7.checked = false;
    controls.exploited.checked = false;
    controls.disclosed.checked = false;
    state.page = 0;
    render();
  }

  [controls.product, controls.type, controls.family, controls.country, controls.actor, controls.from, controls.to].forEach((control) => {
    control.addEventListener("change", () => {
      state.page = 0;
      render();
    });
  });
  [controls.focus, controls.cvss7, controls.exploited, controls.disclosed].forEach((control) => {
    control.addEventListener("change", () => {
      if (control !== controls.focus && control.checked) controls.focus.checked = false;
      state.page = 0;
      render();
    });
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
  $("#clear-filters").addEventListener("click", clearFilters);
  $("#cve-show-all").addEventListener("click", () => {
    controls.focus.checked = false;
    controls.cvss7.checked = false;
    controls.exploited.checked = false;
    controls.disclosed.checked = false;
    state.page = 0;
    render();
    $("#cves").scrollIntoView({ behavior: "smooth" });
  });
  $("#cve-prev").addEventListener("click", () => { state.page -= 1; renderCves(state.filtered); });
  $("#cve-next").addEventListener("click", () => { state.page += 1; renderCves(state.filtered); });
  $("#theme-toggle").addEventListener("click", () => setTheme(state.theme === "dark" ? "light" : "dark"));
  $("#theme-dialog-close").addEventListener("click", () => $("#theme-dialog").close());
  $("#theme-dialog").addEventListener("click", (event) => {
    if (event.target === $("#theme-dialog")) $("#theme-dialog").close();
  });
  document.addEventListener("click", (event) => {
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
      controls.week.value = params.week;
      await loadWeek(params.week);
    }
    applyHash(params);
    state.page = 0;
    render();
  });
  boot();
})();
