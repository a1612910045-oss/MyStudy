# Spine 与 2D 骨骼动画
> 2026-06 | Unity · Spine · 2D · 骨骼动画 · SkeletonAnimation

如果你做 2D 游戏，Spine 很可能是动画管线中最核心的第三方工具。它用骨骼 + 网格变形 + 插槽替代传统的精灵序列帧，把动画数据量压到极小，同时保持动作的流畅度。

## 什么是 Spine

Spine 是一个独立的 2D 骨骼动画编辑器（由 Esoteric Software 开发）。设计师在 Spine 里创建骨骼、绑定图片、制作动画，导出三个文件：

- `.json` 或 `.skel`（二进制）：骨架数据
- `.atlas`：纹理图集描述
- `.png`：合并的纹理图集

Unity 侧通过 `spine-unity` 运行时包来加载和播放这些文件。

## 导入与组件

将 Spine 导出文件拖入 Unity 后，会生成一个 `SkeletonDataAsset`。把这个资源拖到场景中，Unity 自动创建：

```
GameObject "Player"
  ├── SkeletonAnimation (核心组件)
  └── MeshRenderer (渲染)
```

`SkeletonAnimation` 是 Spine 动画的入口，负责播放、混合和事件分发。

## 播放动画

```csharp
private SkeletonAnimation skeleton;

void Awake()
{
    skeleton = GetComponent<SkeletonAnimation>();
}

void PlayAnimation(string name, bool loop = true)
{
    skeleton.AnimationState.SetAnimation(0, name, loop);
}
```

`SetAnimation` 参数：
- 第一个参数是 track index（轨道编号）。Track 0 是默认全身轨道。不同轨道可以同时播放不同动画（比如上半身射击在 Track 1，下半身跑动在 Track 0）。
- 第二个参数是动画名称（Spine 里定义的名字，不是文件名）。
- 第三个参数是否循环。

## 动画混合

```csharp
// 叠加动画（不会打断当前动画，会平滑混合进来）
skeleton.AnimationState.AddAnimation(0, "idle", true, 0f); // 当前动画结束后播 idle

// 交叉淡入
var entry = skeleton.AnimationState.SetAnimation(0, "run", true);
entry.MixDuration = 0.2f; // 和上一个动画混合 0.2 秒
```

`TrackEntry` 提供了丰富的控制：

```csharp
var entry = skeleton.AnimationState.SetAnimation(0, "attack", false);

entry.Complete += (e) =>
{
    // 动画播放完毕后回调
    PlayAnimation("idle");
};

entry.TimeScale = 1.5f; // 加速播放
entry.Alpha = 0.8f;      // 透明度混合
```

## 动画事件

在 Spine 编辑器里可以在动画时间线上插入自定义事件。Unity 侧订阅：

```csharp
skeleton.AnimationState.Event += (track, e) =>
{
    if (e.Data.Name == "footstep")
    {
        audioSource.PlayOneShot(footstepSound);
    }
    else if (e.Data.Name == "swing")
    {
        CheckHit();
    }
};
```

比 Unity Animation Event 更灵活——事件数据可以携带字符串、整数、浮点数参数。

## 换肤

Spine 的皮肤（Skin）可以切换角色外观，而不需要换动画：

```csharp
skeleton.Skeleton.SetSkin("armor_02");
skeleton.Skeleton.SetSlotsToSetupPose(); // 应用皮肤后的重置
```

皮肤可以叠加和组合——这在做纸娃娃换装系统时非常有用。

## 骨骼操控

你可以直接在代码里控制某个骨骼的位置或旋转：

```csharp
var bone = skeleton.Skeleton.FindBone("aim_target");
bone.Rotation = 45f;

// 或者让武器指向鼠标
var mouseWorldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
var bone = skeleton.Skeleton.FindBone("weapon_hand");
// 解算 IK 或手动设置旋转
```

大部分情况不需要手动操控骨骼。但做朝向瞄准、IK 效果时需要。

## 顺序与渲染

Spine 对象的渲染顺序由 SkeletonAnimation 上的 Sorting Layer 和 Order in Layer 控制，和其他 SpriteRenderer 一样。深度遮挡通常通过 Sorting Layer 或 Z 轴位置解决。

Spine 不使用 Unity Animator——它的动画播放完全由自己的 AnimationState 管理。所以不要给 Spine 对象挂 Animator 组件。

## 常见问题

**动画不播放**：检查 `skeletonAnimation.skeletonDataAsset` 是否赋值。通常先创建 `SkeletonDataAsset`，再在 Inspector 拖入 `_SkeletonData` 和 `_AtlasAssets`。

**材质丢失**：纹理的 Material 需要设为 Spine 的专用材质（通常是 `Spine/Skeleton` 或 `Spine/SkeletonGraphic`），而不是默认的 Sprite-Default。

**UI 中使用 Spine**：用 `SkeletonGraphic` 替代 `SkeletonAnimation`。SkeletonGraphic 是 UGUI 兼容组件，可以参与 Canvas 的 Mask、Layout 和排序。

**内存**：SkeletonDataAsset 在首次加载时会创建内部数据结构。多个相同骨架的实例共享同一份 SkeletonData（类似 Unity 的 Mesh 共享），但每个实例有自己的骨骼变换数据。

**微信小游戏**：Spine 运行时在 WebGL 平台通常工作良好，但要关注纹理图集大小——过大的图集在移动端可能导致内存压力。
