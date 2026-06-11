/**
 * 独立 Markdown 渲染器 —— 纯按行解析，零依赖
 *
 * 支持的语法：
 *   标题         # ~ ######
 *   代码块       ```lang ... ```
 *   表格         | a | b |  + 分隔行
 *   引用         > text
 *   无序列表     - / * text
 *   有序列表     1. text
 *   嵌套列表     缩进 2/4 空格
 *   水平线       --- / *** / ___
 *   行内         **粗体**  *斜体*  ~~删除线~~  `代码`  [链接](url)
 *   图片         ![alt](url)
 *   段落         默认
 */

// 转义 HTML
function esc(s) {
  if (!s) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// 行内 Markdown → HTML
function inlineMd(text) {
  let result = esc(text);

  // 图片（在链接之前处理，避免被链接规则误匹配）
  result = result.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img src="$2" alt="$1" loading="lazy">');

  // 链接
  result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener">$1</a>');

  // 加粗
  result = result.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // 斜体（处理剩余的单个 * ，不跟空格）
  result = result.replace(/\*(?!\s)([^*\n]+?)(?<!\s)\*/g, "<em>$1</em>");

  // 删除线
  result = result.replace(/~~(.+?)~~/g, "<del>$1</del>");

  // 行内代码
  result = result.replace(/`([^`]+)`/g, "<code>$1</code>");

  return result;
}

// 主入口：原始 Markdown 字符串 → HTML
function renderMarkdown(raw) {
  const lines = raw.split("\n");
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // 跳过文章元数据（第一行的 # 标题和第二行的 > 日期标签）
    if (i === 0 && trimmed.startsWith("# ") && blocks.length === 0) {
      i++;
      if (i < lines.length && lines[i].trim().startsWith("> ") && blocks.length === 0) {
        i++;
      }
      continue;
    }

    // 围栏代码块
    if (trimmed.startsWith("```")) {
      const lang = trimmed.slice(3).trim();
      let codeLines = [];

      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // 跳过结束 ```

      blocks.push({
        type: "code",
        lang,
        code: codeLines.join("\n"),
      });
      continue;
    }

    // 表格 —— 当前行以 | 开头，且下一行是分隔行
    if (trimmed.startsWith("|") && i + 1 < lines.length && isTableSeparator(lines[i + 1].trim())) {
      const headerRow = trimmed;
      const sepRow = lines[i + 1].trim();
      const dataRows = [];

      i += 2;
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        dataRows.push(lines[i].trim());
        i++;
      }

      blocks.push({
        type: "table",
        header: parseTableRow(headerRow),
        alignments: parseTableAlignments(sepRow),
        rows: dataRows.map(parseTableRow),
      });
      continue;
    }

    // 水平线
    if (/^(-{3,}|\*{3,}|_{3,})\s*$/.test(trimmed)) {
      blocks.push({ type: "hr" });
      i++;
      continue;
    }

    // 标题
    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)/);
    if (headingMatch) {
      blocks.push({
        type: "heading",
        level: headingMatch[1].length,
        text: headingMatch[2],
      });
      i++;
      continue;
    }

    // 引用块（支持连续多行）
    if (trimmed.startsWith("> ")) {
      const quoteLines = [];

      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        quoteLines.push(lines[i].trim().slice(2));
        i++;
      }

      blocks.push({
        type: "blockquote",
        lines: quoteLines,
      });
      continue;
    }

    // 无序列表（支持嵌套）
    const ulMatch = line.match(/^(\s*)[-*]\s+(.+)/);
    if (ulMatch && !trimmed.match(/^[-*]{3,}\s*$/)) {
      const indent = ulMatch[1].length;
      const items = [];

      while (i < lines.length) {
        const currentLine = lines[i];
        const currentTrim = currentLine.trim();

        // 空行结束列表
        if (!currentTrim) break;

        const itemMatch = currentLine.match(/^(\s*)[-*]\s+(.+)/);
        if (!itemMatch || itemMatch[1].length !== indent) break;

        items.push({ text: itemMatch[2], indent: itemMatch[1].length });
        i++;

        // 吞掉紧接的空行（保持列表连续性）
        while (i < lines.length && !lines[i].trim()) i++;
      }

      blocks.push({ type: "ul", items });
      continue;
    }

    // 有序列表（支持嵌套）
    const olMatch = line.match(/^(\s*)(\d+)\.\s+(.+)/);
    if (olMatch) {
      const indent = olMatch[1].length;
      const items = [];

      while (i < lines.length) {
        const currentLine = lines[i];
        const currentTrim = currentLine.trim();

        if (!currentTrim) break;

        const itemMatch = currentLine.match(/^(\s*)(\d+)\.\s+(.+)/);
        if (!itemMatch || itemMatch[1].length !== indent) break;

        items.push({ text: itemMatch[3], indent: itemMatch[1].length });
        i++;

        while (i < lines.length && !lines[i].trim()) i++;
      }

      blocks.push({ type: "ol", items });
      continue;
    }

    // 空行跳过
    if (!trimmed) {
      i++;
      continue;
    }

    // 段落 —— 收集连续非空非特殊行
    const paraLines = [];
    while (i < lines.length && lines[i].trim() && !isBlockStart(lines[i].trim())) {
      paraLines.push(lines[i].trim());
      i++;
    }

    if (paraLines.length) {
      blocks.push({
        type: "paragraph",
        text: paraLines.join("\n"),
      });
    } else {
      i++;
    }
  }

  return blocksToHtml(blocks);
}

// 判断一行是否是表格分隔行
function isTableSeparator(line) {
  // 格式如 | --- | :---: | ---: |
  if (!line.startsWith("|")) return false;
  const cells = line.split("|").filter(Boolean);
  if (cells.length === 0) return false;
  return cells.every(cell => /^:?-{3,}:?$/.test(cell.trim()));
}

// 解析表格的一行 → 单元格数组
function parseTableRow(line) {
  return line
    .split("|")
    .slice(1, -1) // 去掉首尾空串
    .map(cell => cell.trim());
}

// 从分隔行解析对齐方式
function parseTableAlignments(sepLine) {
  const cells = sepLine.split("|").filter(Boolean);
  return cells.map(cell => {
    const trimmed = cell.trim();
    if (trimmed.startsWith(":") && trimmed.endsWith(":")) return "center";
    if (trimmed.endsWith(":")) return "right";
    return "left";
  });
}

// 判断一行是否是新 Block 的起始
function isBlockStart(trimmed) {
  return (
    trimmed.startsWith("```") ||
    trimmed.startsWith("#") ||
    trimmed.startsWith("> ") ||
    /^[-*]\s/.test(trimmed) ||
    /^\d+\.\s/.test(trimmed) ||
    /^(-{3,}|\*{3,}|_{3,})\s*$/.test(trimmed) ||
    (trimmed.startsWith("|") && isTableSeparatorLike(trimmed))
  );
}

// 粗略判断是否可能是表格行（不精确，只用于段落中断）
function isTableSeparatorLike(line) {
  return line.startsWith("|");
}

// Block 数组 → HTML 字符串
function blocksToHtml(blocks) {
  const parts = [];

  for (const block of blocks) {
    switch (block.type) {
      case "heading": {
        const tag = `h${Math.min(block.level + 1, 6)}`; // ## → h3, ### → h4 … 避免 h1
        parts.push(`<${tag}>${inlineMd(block.text)}</${tag}>`);
        break;
      }
      case "code": {
        const langLabel = block.lang
          ? `<span class="code-lang">${esc(block.lang)}</span>`
          : "";
        parts.push(
          `<div class="code-block">${langLabel}<pre><code>${esc(block.code)}</code></pre></div>`
        );
        break;
      }
      case "table": {
        parts.push(renderTable(block));
        break;
      }
      case "hr": {
        parts.push("<hr>");
        break;
      }
      case "blockquote": {
        const content = block.lines.map(line => inlineMd(line)).join("<br>");
        parts.push(`<blockquote>${content}</blockquote>`);
        break;
      }
      case "ul": {
        parts.push(renderList(block.items, "ul"));
        break;
      }
      case "ol": {
        parts.push(renderList(block.items, "ol"));
        break;
      }
      case "paragraph": {
        // 段落内换行 → <br>
        const content = block.text.split("\n").map(inlineMd).join("<br>");
        parts.push(`<p>${content}</p>`);
        break;
      }
    }
  }

  return parts.join("\n");
}

// 渲染表格
function renderTable(block) {
  const { header, alignments, rows } = block;

  let html = '<div class="table-wrap"><table>\n<thead>\n<tr>\n';
  for (let i = 0; i < header.length; i++) {
    const align = alignments[i] || "left";
    html += `  <th style="text-align:${align}">${inlineMd(header[i])}</th>\n`;
  }
  html += "</tr>\n</thead>\n<tbody>\n";

  for (const row of rows) {
    html += "<tr>\n";
    for (let i = 0; i < row.length; i++) {
      const align = alignments[i] || "left";
      html += `  <td style="text-align:${align}">${inlineMd(row[i])}</td>\n`;
    }
    html += "</tr>\n";
  }

  html += "</tbody>\n</table></div>";
  return html;
}

// 渲染列表（支持简单嵌套：子项缩进 > 父项缩进）
function renderList(items, tag) {
  if (!items.length) return "";

  // 按缩进级别分组
  const groups = [];
  let currentGroup = { indent: items[0].indent, items: [] };

  for (const item of items) {
    if (item.indent !== currentGroup.indent) {
      groups.push(currentGroup);
      currentGroup = { indent: item.indent, items: [] };
    }
    currentGroup.items.push(item.text);
  }
  groups.push(currentGroup);

  // 只有一层直接渲染
  if (groups.length <= 1) {
    const itemsHtml = currentGroup.items.map(text => `<li>${inlineMd(text)}</li>`).join("\n");
    return `<${tag} class="md-list">\n${itemsHtml}\n</${tag}>`;
  }

  // 多层嵌套
  return renderNestedList(groups, tag, 0);
}

function renderNestedList(groups, tag, index) {
  if (index >= groups.length) return "";

  const group = groups[index];
  const isLast = index === groups.length - 1;
  const deeper = !isLast && groups[index + 1].indent > group.indent;
  const deeperItems = deeper
    ? groups.slice(index + 1).filter(g => g.indent > group.indent)
    : [];
  const nextSame = deeper
    ? index + 1 + deeperItems.length
    : index + 1;

  let html = `<${tag} class="md-list">\n`;

  for (const text of group.items) {
    html += `  <li>${inlineMd(text)}`;

    if (deeper && deeperItems.length) {
      // 把更深层嵌套进第一个 <li>（简化处理）
      html += `\n${renderNestedList(deeperItems, tag, 0)}`;
      deeperItems.length = 0; // 只嵌套一次
    }

    html += `</li>\n`;
  }

  html += `</${tag}>`;

  if (nextSame < groups.length) {
    html += "\n" + renderNestedList(groups, tag, nextSame);
  }

  return html;
}
