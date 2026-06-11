# Unity 编辑器与项目结构
> 2026-06 | Unity · 编辑器 · 项目结构

Unity 编辑器不是「代码编辑器」，它是一个实时运行的场景编辑环境。理解它的布局设计意图，能大幅减少找按钮的时间和对第三方教程的依赖。

## 五大视图：谁管什么

| 视图 | 中译 | 职责 |
|---|---|---|
| Hierarchy | 层级 | 当前场景所有 GameObject 的树状列表 |
| Scene | 场景 | 3D/2D 可视化编辑区域 |
| Game | 游戏 | 实际运行画面预览，按摄像机渲染 |
| Inspector | 检视器 | 选中对象的 Component 详情面板 |
| Project | 项目 | 文件浏览器——所有资源都在这里 |

Hierarchy 决定「什么东西在当前场景」；Inspector 决定「被选中的东西有哪些属性」；Project 窗口是「还没放进场景的一切」。

快捷键是最值回票价的投资：
- `Q W E R T` 切换视野工具（手型/平移/旋转/缩放/矩形）
- `F` 聚焦选中对象
- `Ctrl+Shift+F` 将选中对象贴到场景视图当前视角

## 项目目录约定

一个标准项目的根目录大致如下：

```
Assets/
├── Animations/       # 动画控制器、动画片段
├── Audio/            # 音频
├── Prefabs/          # 预制体
├── Resources/        # 动态加载（不推荐大量使用）
├── Scenes/           # 场景文件
├── Scripts/          # C# 脚本
├── Textures/         # 贴图
├── ThirdParty/       # 第三方插件
└── UI/               # UGUI 资源
```

这是约定，不是硬性要求。但团队项目统一目录结构能显著降低找文件的心智成本。

Packages 目录不由你手动管理——通过 Package Manager 添加的包（Addressables、Input System、Timeline 等）都放在这里。

## 场景（Scene）

场景是一个独立的世界空间。一个游戏通常由多个场景组成：菜单、关卡 1、关卡 2、结算。

场景文件（`.unity`）是 YAML 格式的文本，可以用版本控制管理。多人协作时的冲突通常集中在场景文件上——预制体能缓解这个问题。

单个场景不要过大。场景越大，打开越慢，多人合并越容易冲突。常见的策略是「场景叠加」：一个主场景 + 多个子场景（通过 Multi-Scene Editing）。

## 预制体（Prefab）

预制体是 GameObject 的模板。你在工厂里设计好蓝图（Prefab），运行时按需复制出实例。

三种操作：
- **Prefab 变更**：在 Prefab Mode 里修改模板，所有实例同步更新。
- **Override**：实例上的单独修改覆盖模板值。
- **Unpack**：断开预制体关联，变成普通 GameObject。

预制体嵌套（Nested Prefab）在 2018.3 引入：一个预制体可以包含另一个预制体。复杂 UI 和角色组件常用。

## 资源（Asset）与 Meta 文件

`Assets/` 下每个文件和目录都有一个对应的 `.meta` 文件。`.meta` 记录 GUID（全局唯一标识符）、导入设置等。

永远把 `.meta` 一起提交到版本控制。如果只提交了贴图没提交 `.meta`，别人的引擎可能找不到资源引用——GUID 不匹配。

## Package Manager

Unity 通过 Package Manager 管理功能模块：
- `com.unity.addressables`（资源管理）
- `com.unity.inputsystem`（新输入系统）
- `com.unity.textmeshpro`（文字渲染）
- `com.unity.timeline`（时间轴）

把 Package Manager 当成 Unity 的「包管理器」——按需安装，不用的不装，保持项目轻量。

## Build Settings

`File → Build Settings` 决定输出平台：PC、Android、iOS、WebGL。平台切换会触发资源重新导入（纹理格式等会根据平台变化），第一次通常较慢。

微信小游戏本质上是 WebGL 平台 + 微信 SDK 封装。
