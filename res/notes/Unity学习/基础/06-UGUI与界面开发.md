# UGUI 与界面开发
> 2026-06 | Unity · UGUI · Canvas · RectTransform

UGUI 是 Unity 内置的 UI 系统，2014 年在 Unity 4.6 引入，至今仍是大多数项目的主力 UI 方案。UI Toolkit（UIElements）是新方向，但生态和案例远不如 UGUI 成熟。

## 核心概念：Canvas

Canvas 是 UI 的根。所有 UI 元素必须放在 Canvas 下面。

Canvas 的 Render Mode 决定 UI 如何渲染：

| 模式 | 说明 | 适用场景 |
|---|---|---|
| Screen Space - Overlay | UI 直接覆盖在屏幕最上层，不受摄像机影响 | HUD、菜单 |
| Screen Space - Camera | UI 在某个摄像机前方渲染，受 Z 轴影响 | 有 3D 物体需要穿插 UI |
| World Space | UI 如同 3D 对象一样放在世界里 | 场景内浮标、血条 |

绝大多数情况用 Screen Space - Overlay。它的 Canvas Scaler 组件负责屏幕适配。

## Canvas Scaler：屏幕适配的关键

Canvas Scaler 的 UI Scale Mode 推荐：

- **Scale With Screen Size**：根据参考分辨率等比缩放。设 Reference Resolution 为设计分辨率（比如 1920×1080），Screen Match Mode 为 `0.5`（宽高等权重）。这样 UI 在不同分辨率下都能保持相对比例。

- **Constant Pixel Size**：不缩放。适合像素级精准的 UI。

微信小游戏适配时，通常设 750×1334 或 720×1280 为参考分辨率。

## RectTransform

RectTransform 是 UI 元素的 Transform，在普通 Transform 基础上增加了锚定和对齐。

核心属性：

```csharp
rectTransform.anchoredPosition;  // 相对于锚点的位置
rectTransform.sizeDelta;          // 相对于锚点的大小偏移
rectTransform.anchorMin;          // 锚点左下（0~1）
rectTransform.anchorMax;          // 锚点右上（0~1）
rectTransform.pivot;              // 轴心（0~1）
```

**最常见的锚定方式**：

- 锚点聚在左上角 → 元素位置固定在左上（适合返回按钮）。
- 锚点展开成全屏 → 元素随屏幕拉伸（适合全屏背景）。
- 锚点在中点 → 元素居中（适合对话框）。

按住 `Shift` 拖锚点可以同时设置位置。

## 常用控件

### Text / TextMeshPro

TextMeshPro（TMP）比传统 Text 渲染质量好很多。通过 Package Manager 安装 `com.unity.textmeshpro`。

```csharp
using TMPro;

tmpText.text = $"Score: {score}";
tmpText.fontSize = 36;
tmpText.color = Color.white;
```

TMP 支持 SDF 字体，缩放不会模糊。自定义字体需要通过 Font Asset Creator 生成 SDF 资源。

### Image

```csharp
image.sprite = newSprite;
image.fillAmount = 0.75f;  // 圆形进度条
```

Image Type 有四种：Simple、Sliced（九宫格）、Tiled、Filled（环形/条形进度条）。九宫格适合做圆角按钮边框。

### Button

```csharp
button.onClick.AddListener(() => OnButtonClicked());
button.interactable = false; // 灰色不可点
```

Button 自带 Transition（颜色、Sprite 切换、动画）。复杂动效用 Animation Transition，简单用 Color Tint 就够。

### Slider / Scrollbar

```csharp
slider.value = 0.5f;
slider.onValueChanged.AddListener(val => OnVolumeChanged(val));
```

### Layout 组件

- **Horizontal Layout Group**：水平排列子元素。
- **Vertical Layout Group**：垂直排列。
- **Grid Layout Group**：网格排列。
- **Content Size Fitter**：自动调整自身大小以适应内容。

ScrollView = ScrollRect + Mask + Content（带 Layout Group）+ Scrollbar。Content 里放 Layout Group 会自动计算可滚动范围。

## 常见问题与最佳实践

**Canvas 重建**：任何 UI 元素的可视属性变化（SetActive、颜色、文本、位置）都会触发 Canvas 重建。重建有开销，尤其在复杂的 UI 层级中。

缓解方式：
- 把频繁变动的 UI（比如血条、伤害数字）放到单独的 Canvas 上，这样只重建这个 Canvas。
- 用对象池管理频繁创建销毁的 UI 元素。
- 对静态 UI 勾选 `Canvas` 的 `Pixel Perfect`（视情况）。

**Raycast Target**：Image 和 Text 默认开启 Raycast Target。如果元素不需要点击，关掉——否则它会在事件系统中参与射线检测，浪费性能。

**Layout 更新成本**：Content Size Fitter + Layout Group 每帧都可能重新计算。如果布局不频繁变化，考虑直接手动设置位置。

**事件穿透**：UI 点击穿透到下面 3D 物体的常见问题。检查 EventSystem 的 `IsPointerOverGameObject()`：

```csharp
if (EventSystem.current.IsPointerOverGameObject())
{
    return; // 点到了 UI 上，不处理 3D 点击
}
```
