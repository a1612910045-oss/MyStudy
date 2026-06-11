/**
 * 读取 res/sections.json 确定栏目，扫描 res/ 下各子目录的 .md 文件。
 * 生成：
 *   res/{section}/index.json              — 每栏目的索引（不含 content）
 *   scripts/runtime/site-data.js          — 全量嵌入（含 sections 元数据和 content）
 *
 * 新增栏目只需：
 *   1. 在 res/ 下新建目录
 *   2. 在 res/sections.json 加一条 "dirname": "显示名"
 *   3. 往目录里放 .md 文件，第一行 # 标题，第二行 > 日期 | 标签
 * 
 * 执行指令：node scripts/developTool/build-index.mjs
 */

import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..", "..");

// 读取栏目配置
const sectionsPath = join(root, "res", "sections.json");
if (!existsSync(sectionsPath)) {
  console.error("缺少 res/sections.json，请先创建栏目配置文件。");
  process.exit(1);
}

const sections = JSON.parse(readFileSync(sectionsPath, "utf-8"));

function getMarkdownFiles(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getMarkdownFiles(fullPath));
      continue;
    }

    if (entry.isFile() && extname(entry.name).toLowerCase() === ".md") {
      files.push(fullPath);
    }
  }

  return files;
}

function buildSection(dirName, label) {
  const sectionDir = join(root, "res", dirName);
  if (!existsSync(sectionDir)) {
    console.warn(`  目录 res/${dirName}/ 不存在，跳过。`);
    return [];
  }

  const files = getMarkdownFiles(sectionDir);
  const baseDir = join(root, "res", dirName);

  const items = files.map((f) => {
    const raw = readFileSync(f, "utf-8");
    const lines = raw.split("\n");

    // 相对路径：res/projects/xxx.md → projects/xxx
    const relative = f.replace(baseDir + "\\", "").replace(/\\/g, "/");
    const normalized = relative.replace(/\\/g, "/");
    const pathParts = normalized.split("/");
    const fileName = pathParts.at(-1) || "";
    const folders = pathParts.slice(0, -1);
    const slug = normalized.replace(/\.md$/i, "");

    const title = (lines[0] || "").replace(/^#\s*/, "").trim();
    const metaLine = (lines[1] || "").replace(/^>\s*/, "").trim();
    const [dateStr = "", ...tagParts] = metaLine.split("|").map((s) => s.trim());
    const tags = tagParts
      .join("|")
      .split("·")
      .map((t) => t.trim())
      .filter(Boolean);

    const bodyStart = lines.findIndex((l, i) => i >= 2 && l.trim() !== "");
    const body =
      bodyStart >= 0
        ? lines.slice(bodyStart).join("\n").trim().slice(0, 150)
        : "";

    return {
      slug,
      folders,
      fileName,
      title,
      date: dateStr,
      tags,
      excerpt: body,
      content: raw,
    };
  });

  items.sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  const indexItems = items.map(({ content, ...item }) => item);
  const indexPath = join(root, "res", dirName, "index.json");
  writeFileSync(indexPath, JSON.stringify(indexItems, null, 2), "utf-8");
  console.log(`  res/${dirName}/index.json  ← ${items.length} entries (${label})`);

  return items;
}

console.log("Building indexes from res/sections.json…");
console.log(`  sections: ${Object.keys(sections).map(k => `${k}(${sections[k]})`).join(", ")}`);

const siteItems = {};
for (const [dirName, label] of Object.entries(sections)) {
  siteItems[dirName] = buildSection(dirName, label);
}

// 嵌入关于页面内容（支持 file:// 协议离线打开）
let about = "";
const aboutPath = join(root, "res", "about.md");
if (existsSync(aboutPath)) {
  about = readFileSync(aboutPath, "utf-8");
  console.log("  res/about.md  ← embedded");
}

const siteData = {
  sections,
  items: siteItems,
  about,
};

writeFileSync(
  join(root, "scripts", "runtime", "site-data.js"),
  `window.SITE_DATA = ${JSON.stringify(siteData, null, 2)};\n`,
  "utf-8"
);
console.log("  js/site-data.js  ← embedded site data (sections + items)");
console.log("Done.");
