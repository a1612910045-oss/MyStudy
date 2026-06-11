# 学习笔记

个人学习知识记录网站，纯静态页面，可直接部署到 GitHub Pages。

## 关于我

- 一年 Unity 游戏开发经验
- 正在系统性学习 AI 开发相关知识
- 这个网站用于记录学习笔记、项目经历和代码实践

## 技术栈

- HTML5
- CSS3（CSS 变量、Grid、Flexbox、响应式）
- 原生 JavaScript（无框架依赖）

## 功能特性

- 明亮主题，现代简约设计
- 完全响应式（桌面 / 平板 / 手机）
- 左侧固定导航栏，目录树折叠展开
- 毛玻璃顶栏（移动端）
- 搜索支持文章标题、标签、目录
- 鼠标粒子跟随动效

## 添加新栏目

1. 在 `res/` 下新建目录（如 `res/diary/`），放入 `.md` 文件
2. 在 `res/sections.json` 加一条 `"diary": "日记"`
3. 运行 `node scripts/developTool/build-index.mjs` 生成索引
4. 推送后网站自动显示新栏目

`.md` 文件格式：第一行 `# 标题`，第二行 `> 日期 | 标签1 · 标签2`，空行后正文。

## 本地预览

```bash
node scripts/developTool/build-index.mjs
python -m http.server 8000
```

浏览器打开 `http://localhost:8000`。

## 部署到 GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 在仓库 **Settings → Pages** 中将 Source 设为 `GitHub Actions`
3. 推送后 `.github/workflows/deploy.yml` 会自动构建部署

## 目录结构

```
.
├── index.html                # 主页面
├── css/
│   └── style.css             # 样式表
├── scripts/
│   ├── runtime/
│   │   ├── main.js           # 交互逻辑
│   │   ├── markdown.js       # Markdown 渲染器
│   │   └── site-data.js      # 预构建的全量数据（可选）
│   └── developTool/
│       └── build-index.mjs   # 扫描 .md 生成索引
├── res/
│   ├── sections.json         # 栏目配置（dir → 显示名）
│   ├── projects/             # 栏目：项目
│   ├── notes/                # 栏目：笔记
│   └── talk/                 # 栏目：杂谈
├── .github/
│   └── workflows/
│       └── deploy.yml        # 自动部署配置
└── README.md
```

## License

MIT
