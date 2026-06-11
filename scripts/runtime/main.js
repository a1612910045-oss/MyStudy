/**
 * 学习笔记 - 目录树 + 单文档阅读
 */

// 栏目标签从 res/sections.json 动态加载（site-data.js 内嵌时直接从 SITE_DATA.sections 读取）
let SECTION_LABELS = {};
let siteData = {};

document.addEventListener("DOMContentLoaded", async () => {
  initMobileMenu();
  initCursorParticles();

  try {
    siteData = await loadSiteData();
    renderNavTree();
    initSearch();
    bindHashNavigation();
    renderCurrentRoute();
  } catch (err) {
    console.error("初始化失败:", err);
    renderError("加载失败，请检查数据文件后重试");
  }
});

/* ===== 鼠标粒子 ===== */
function initCursorParticles() {
  const canvas = document.getElementById("cursorParticles");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!canvas || prefersReducedMotion) return;

  const ctx = canvas.getContext("2d");
  const particles = [];
  const pointer = { x: 0, y: 0, active: false };
  let dpr = 1;
  let animationId = 0;
  let lastSpawn = 0;
  let lastMove = 0;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function spawnParticle(x, y) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.35 + Math.random() * 0.75;

    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 0.15,
      size: 1.2 + Math.random() * 2.6,
      life: 1,
      decay: 0.018 + Math.random() * 0.018,
      hue: Math.random() > 0.34 ? "gold" : "warm",
    });

    if (particles.length > 120) particles.shift();
  }

  function handlePointerMove(event) {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
    lastMove = performance.now();

    const now = lastMove;
    if (now - lastSpawn < 16) return;
    lastSpawn = now;

    for (let i = 0; i < 3; i++) {
      spawnParticle(
        pointer.x + (Math.random() - 0.5) * 8,
        pointer.y + (Math.random() - 0.5) * 8
      );
    }
  }

  function render() {
    if (performance.now() - lastMove > 140) {
      pointer.active = false;
    }

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.985;
      p.vy = p.vy * 0.985 - 0.004;
      p.life -= p.decay;

      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }

      const alpha = Math.max(p.life, 0);
      const radius = p.size * (0.8 + (1 - p.life) * 1.8);
      const color = p.hue === "gold"
        ? `rgba(183, 149, 11, ${alpha * 0.12})`
        : `rgba(139, 112, 0, ${alpha * 0.1})`;

      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 4);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius * 4, 0, Math.PI * 2);
      ctx.fill();
    }

    if (pointer.active || particles.length) {
      animationId = requestAnimationFrame(render);
    } else {
      animationId = 0;
    }
  }

  function startRender() {
    if (!animationId) animationId = requestAnimationFrame(render);
  }

  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    handlePointerMove(event);
    startRender();
  }, { passive: true });
  window.addEventListener("pointerleave", () => {
    pointer.active = false;
  });
}

/* ===== 搜索 ===== */
function initSearch() {
  const input = document.getElementById("siteSearch");
  const count = document.getElementById("searchCount");

  if (!input) return;

  input.addEventListener("input", () => {
    const query = input.value.trim();

    if (!query) {
      count.textContent = "";
      renderNavTree();
      setActiveFromCurrentHash();
      return;
    }

    const results = searchArticles(query);
    renderSearchResults(results, query);
    count.textContent = results.length ? `${results.length} 个结果` : "没有匹配结果";
  });
}

function searchArticles(query) {
  const normalizedQuery = normalizeText(query);
  const articles = getAllArticles();

  return articles.filter(({ item, dir }) => {
    const haystack = normalizeText([
      SECTION_LABELS[dir],
      item.title,
      item.date,
      item.excerpt,
      item.slug,
      ...(item.tags || []),
      ...(item.folders || []),
    ].join(" "));

    return haystack.includes(normalizedQuery);
  });
}

function getAllArticles() {
  return Object.keys(SECTION_LABELS).flatMap((dir) =>
    (siteData[dir] || []).map((item) => ({ dir, item }))
  );
}

function renderSearchResults(results, query) {
  const nav = document.getElementById("navTree");
  if (!nav) return;

  const resultHtml = results.length
    ? results.map(({ dir, item }) => renderSearchResult(dir, item, query)).join("")
    : '<p class="search-empty">换个关键词试试</p>';

  nav.innerHTML = `
    <button class="nav-item nav-leaf" type="button" data-page="about">
      <span class="nav-icon">●</span>关于
    </button>
    <div class="search-results">
      ${resultHtml}
    </div>
  `;

  nav.querySelector('[data-page="about"]')?.addEventListener("click", () => {
    navigateTo("#about");
  });

  nav.querySelectorAll("[data-dir][data-slug]").forEach((button) => {
    button.addEventListener("click", () => {
      navigateToArticle(button.dataset.dir, button.dataset.slug);
    });
  });

  setActiveFromCurrentHash();
}

function renderSearchResult(dir, item, query) {
  const folderPath = item.folders?.length ? `${item.folders.join(" / ")} / ` : "";
  const meta = [SECTION_LABELS[dir], folderPath ? folderPath.slice(0, -3) : "", item.date]
    .filter(Boolean)
    .join(" · ");

  return `
    <button class="search-result" type="button" data-dir="${dir}" data-slug="${escAttr(item.slug)}">
      <span class="search-result-title">${highlightMatch(item.title, query)}</span>
      <span class="search-result-meta">${esc(meta)}</span>
    </button>
  `;
}

function highlightMatch(text, query) {
  const safeText = esc(text);
  const escapedQuery = escRegExp(query.trim());

  if (!escapedQuery) return safeText;

  return safeText.replace(new RegExp(`(${escapedQuery})`, "ig"), "<mark>$1</mark>");
}

function normalizeText(text) {
  return String(text || "").toLowerCase();
}

function escRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/* ===== 移动端：侧边栏开关 ===== */
function initMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const main = document.getElementById("mainContent");

  if (!toggle || !sidebar || !main) return;

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    sidebar.classList.toggle("open");
  });

  main.addEventListener("click", () => {
    closeMobileMenu();
  });
}

function closeMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");

  toggle?.classList.remove("active");
  sidebar?.classList.remove("open");
}

/* ===== 数据 ===== */
const RES_PREFIX = "res/";

async function loadSiteData() {
  // 优先走预构建的 site-data.js（内嵌 sections + items）
  if (window.SITE_DATA) {
    SECTION_LABELS = window.SITE_DATA.sections || {};
    return window.SITE_DATA.items || {};
  }

  // fallback：从 res/ 动态加载
  SECTION_LABELS = await fetchSectionsConfig();

  const dirs = Object.keys(SECTION_LABELS);
  const results = await Promise.all(dirs.map((dir) => fetchIndexItems(dir)));
  const data = {};
  dirs.forEach((dir, i) => { data[dir] = results[i]; });
  return data;
}

async function fetchSectionsConfig() {
  const res = await fetch(`${RES_PREFIX}sections.json`);
  if (!res.ok) throw new Error(`无法加载栏目配置: HTTP ${res.status}`);
  return res.json();
}

async function fetchIndexItems(dir) {
  const res = await fetch(`${RES_PREFIX}${dir}/index.json`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function getArticleContent(dir, slug) {
  const embedded = siteData[dir]?.find((item) => item.slug === slug)?.content;
  if (embedded) return embedded;

  const res = await fetch(getArticleUrl(dir, slug));
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

function getArticleUrl(dir, slug) {
  return `${RES_PREFIX}${dir}/${slug.split("/").map(encodeURIComponent).join("/")}.md`;
}

/* ===== 左侧目录树 ===== */
function renderNavTree() {
  const nav = document.getElementById("navTree");
  if (!nav) return;

  nav.innerHTML = `
    <button class="nav-item nav-leaf" type="button" data-page="about">
      <span class="nav-icon">●</span>关于
    </button>
    ${renderSectionGroup("projects")}
    ${renderSectionGroup("notes")}
    ${renderSectionGroup("talk")}
  `;

  nav.querySelectorAll(".nav-group-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest(".nav-group");
      const isOpen = group.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  nav.querySelector('[data-page="about"]')?.addEventListener("click", () => {
    navigateTo("#about");
  });

  nav.querySelectorAll("[data-dir][data-slug]").forEach((button) => {
    button.addEventListener("click", () => {
      const dir = button.dataset.dir;
      const slug = button.dataset.slug;
      navigateToArticle(dir, slug);
    });
  });
}

function renderSectionGroup(dir) {
  const items = siteData[dir] || [];
  const tree = createFolderTree(items);

  return `
    <div class="nav-group" data-group="${dir}">
      <button class="nav-group-toggle" type="button" aria-expanded="false">
        <span class="nav-caret"></span>${SECTION_LABELS[dir]}
      </button>
      <div class="nav-children">
        ${renderTreeNodes(tree, dir)}
      </div>
    </div>
  `;
}

function renderArticleLeaf(dir, item) {
  return `
    <button class="nav-item nav-leaf nav-article" type="button" data-dir="${dir}" data-slug="${escAttr(item.slug)}">
      <span class="nav-icon">●</span>${esc(item.title)}
    </button>
  `;
}

function renderTreeNodes(node, dir) {
  const folderHtml = [...node.folders.values()]
    .sort((a, b) => a.name.localeCompare(b.name, "zh-CN"))
    .map((folder) => `
      <div class="nav-group nav-folder">
        <button class="nav-group-toggle" type="button" aria-expanded="false">
          <span class="nav-caret"></span>${esc(folder.name)}
        </button>
        <div class="nav-children">
          ${renderTreeNodes(folder, dir)}
        </div>
      </div>
    `)
    .join("");

  const articleHtml = node.items
    .slice()
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
    .map((item) => renderArticleLeaf(dir, item))
    .join("");

  return `${folderHtml}${articleHtml}`;
}

function createFolderTree(items) {
  const root = { name: "", folders: new Map(), items: [] };

  items.forEach((item) => {
    const folders = Array.isArray(item.folders) ? item.folders : [];
    let current = root;

    folders.forEach((folder) => {
      if (!current.folders.has(folder)) {
        current.folders.set(folder, { name: folder, folders: new Map(), items: [] });
      }
      current = current.folders.get(folder);
    });

    current.items.push(item);
  });

  return root;
}

/* ===== 路由与渲染 ===== */
function bindHashNavigation() {
  window.addEventListener("hashchange", renderCurrentRoute);
}

function navigateTo(hash) {
  if (window.location.hash === hash) {
    renderCurrentRoute();
  } else {
    window.location.hash = hash;
  }

  closeMobileMenu();
}

function navigateToArticle(dir, slug) {
  navigateTo(`#${dir}/${encodeURIComponent(slug)}`);
}

async function renderCurrentRoute() {
  const hash = window.location.hash || "#about";

  if (hash === "#about") {
    await renderAbout();
    setActiveNav("about");
    return;
  }

  const dirs = Object.keys(SECTION_LABELS).join("|");
  const match = hash.match(new RegExp(`^#(${dirs})\/(.+)$`));
  if (!match) {
    navigateTo("#about");
    return;
  }

  const [, dir, encodedSlug] = match;
  const slug = decodeURIComponent(encodedSlug);
  await renderArticle(dir, slug);
}

async function renderAbout() {
  const view = document.getElementById("contentView");
  if (!view) return;

  try {
    const res = await fetch(`${RES_PREFIX}about.md`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const raw = await res.text();
    view.innerHTML = `
      <article class="article-doc">
        <p class="section-heading">关于</p>
        <div class="article-body">${renderMarkdown(raw)}</div>
      </article>`;
    document.title = "学习笔记";
  } catch (err) {
    console.error("加载关于页面失败:", err);
    renderError("无法加载关于页面");
  }
}

async function renderArticle(dir, slug) {
  const view = document.getElementById("contentView");
  const item = siteData[dir]?.find((entry) => entry.slug === slug);

  if (!view || !item) {
    renderError("没有找到这篇文章");
    setActiveNav("");
    return;
  }

  setActiveNav(`${dir}/${slug}`);
  view.innerHTML = '<p class="loading-msg">加载中…</p>';

  try {
    const raw = await getArticleContent(dir, slug);
    view.innerHTML = `
      <article class="article-doc">
        <p class="section-heading">${esc(SECTION_LABELS[dir])}</p>
        <header class="article-header">
          <h2>${esc(item.title)}</h2>
          <div class="article-meta">
            ${renderArticleMeta(item)}
          </div>
        </header>
        <div class="article-body">${renderMarkdown(raw)}</div>
      </article>
    `;
    document.title = `${item.title} - 学习笔记`;
  } catch (err) {
    console.error(`加载 ${dir}/${slug}.md 失败:`, err);
    renderError("无法加载文章内容");
  }
}

function renderArticleMeta(item) {
  const date = item.date ? `<span>${esc(item.date)}</span>` : "";
  const tags = (item.tags || []).map((tag) => `<span>${esc(tag)}</span>`).join("");
  return `${date}${tags}`;
}

function renderError(message) {
  const view = document.getElementById("contentView");
  if (!view) return;

  view.innerHTML = `<p class="empty-msg">${esc(message)}</p>`;
}

function setActiveNav(route) {
  document.querySelectorAll(".nav-item").forEach((item) => {
    const itemRoute = item.dataset.page === "about"
      ? "about"
      : `${item.dataset.dir}/${item.dataset.slug}`;
    item.classList.toggle("active", itemRoute === route);
  });

  document.querySelectorAll(".search-result").forEach((item) => {
    const itemRoute = `${item.dataset.dir}/${item.dataset.slug}`;
    item.classList.toggle("active", itemRoute === route);
  });

  document.querySelectorAll(".nav-group").forEach((group) => {
    const hasActiveItem = Boolean(group.querySelector(".nav-item.active"));
    if (hasActiveItem) {
      group.classList.add("open");
      group.querySelector(":scope > .nav-group-toggle")?.setAttribute("aria-expanded", "true");
    }
  });
}

function setActiveFromCurrentHash() {
  const hash = window.location.hash || "#about";

  if (hash === "#about") {
    setActiveNav("about");
    return;
  }

  const dirs = Object.keys(SECTION_LABELS).join("|");
  const match = hash.match(new RegExp(`^#(${dirs})\/(.+)$`));
  if (!match) return;

  setActiveNav(`${match[1]}/${decodeURIComponent(match[2])}`);
}

// Markdown 渲染由 js/markdown.js 提供：renderMarkdown / inlineMd / esc

function escAttr(s) {
  return esc(s).replace(/'/g, "&#39;");
}
