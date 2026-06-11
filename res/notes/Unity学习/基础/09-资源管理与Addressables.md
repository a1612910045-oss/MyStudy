# 资源管理与 Addressables
> 2026-06 | Unity · Addressables · AssetBundle · 资源加载

资源管理在 Unity 项目里的分量，往往在中后期才暴露出来。前期几张图、几个预制体，Resources.Load 就够了。当项目变大、需要热更新时，Addressables 是当前 Unity 官方推荐的方案。

## 三种加载方式

| 方式 | 适用阶段 | 热更新 | 内存控制 |
|---|---|---|---|
| Resources.Load | 原型 / 小型项目 | 不支持 | 同步加载，资源常驻 |
| AssetBundle | 传统方案 | 手动实现 | 需要自己管理加载卸载 |
| Addressables | 推荐方案 | 内置支持 | 引用计数自动管理 |

Resources 目录会在打包时全部打进包体，且资源永远不会被卸载。**生产项目不要依赖 Resources。**

## Addressables 核心概念

Addressables 通过 Package Manager 安装（`com.unity.addressables`），用「地址」代替「路径」来定位资源。

```csharp
// 用地址加载
var handle = Addressables.LoadAssetAsync<GameObject>("Enemy_Orc");
handle.Completed += (op) =>
{
    if (op.Status == AsyncOperationStatus.Succeeded)
    {
        Instantiate(op.Result);
    }
};

// 或者用 await（推荐）
async void Start()
{
    var prefab = await Addressables.LoadAssetAsync<GameObject>("Enemy_Orc").Task;
    Instantiate(prefab);
}
```

地址可以手动设置，也可以让 Unity 用资源路径自动生成。

## Group 和 Label

Addressables 用 Group 组织资源。常见分组：

```
Group: Prefabs_Enemies   → 所有敌人预制体
Group: Audio_SFX         → 音效
Group: UI_Common         → 公共 UI 资源
Group: Textures_Scene01  → 场景专属贴图
```

Group 决定资源的打包策略——每个 Group 可以打成一个独立的 AssetBundle，也可以合并到更大的 Bundle。

Label 是跨 Group 的标签。给资源打上 `"scene01"` 标签，加载时用标签批量加载：

```csharp
var handle = Addressables.LoadAssetsAsync<Texture2D>("scene01", null);
```

## 加载与释放

```csharp
// 加载 GameObject（实例化）
var handle = Addressables.InstantiateAsync("Enemy_Orc", position, rotation);

// 用完后释放——Addressables 会自动回收引用计数
Addressables.ReleaseInstance(handle);

// 加载 AssetReference
[SerializeField] private AssetReferenceGameObject enemyPrefabRef;
var handle = enemyPrefabRef.InstantiateAsync(position, rotation);
```

**释放不是可选的**。每次 Load 都要有对应的 Release。累积未释放的引用会导致资源永远不被卸载，最终撑爆内存。

检查内存泄漏的方法：Window → Asset Management → Addressables → Event Viewer。

## AssetReference

AssetReference 让资源引用在 Inspector 里可直接拖拽，同时保留 Addressables 的异步加载和内存管理能力：

```csharp
public AssetReferenceGameObject enemyPrefab;
public AssetReferenceT<AudioClip> bgm;
public AssetReferenceSprite icon;
```

比裸用 `string address` 更安全——Inspector 里拖入资源时 Unity 会校验类型和地址。

## 远程加载与热更新

Addressables 的远程加载是通过配置 RemoteLoadPath 实现的。简单流程：

1. 在 Addressables Profiles 里设置 RemoteLoadPath 为 CDN 地址。
2. 为需要热更的 Group 设置 Build Path = RemoteBuildPath，Load Path = RemoteLoadPath。
3. 构建后生成 `.bundle` + `.hash` + catalog 文件，上传到 CDN。
4. 客户端启动时调用 `Addressables.CheckForCatalogUpdates()` 检查更新，有更新时 `Addressables.UpdateCatalogs()` 下载新 catalog。

更新流程：
```csharp
async Task CheckUpdate()
{
    var checkHandle = Addressables.CheckForCatalogUpdates(false);
    var catalogs = await checkHandle.Task;
    if (catalogs.Count > 0)
    {
        var updateHandle = Addressables.UpdateCatalogs(catalogs, false);
        await updateHandle.Task;
        // catalog 已更新，后续 Load 会使用新地址
    }
    Addressables.Release(checkHandle);
}
```

## 迁移建议

如果你手里是还在用 Resources 或裸 AssetBundle 的老项目：

- Resources：先在项目中全局搜索 `Resources.Load` 统计引用量。量小就直接换 Addressables。量大按模块逐步迁移——先拆资源目录，建立 Group，改一处加载代码验证一处。
- AssetBundle：Addressables 底层也是 AssetBundle。迁移的核心是把 Bundle 的构建和管理交给 Addressables，业务代码从 `AssetBundle.LoadFromFile` 换成 `Addressables.LoadAssetAsync`。

## 常见坑

- **编辑器模式直接加载**：Addressables 在编辑器里默认走 Fast Mode（直接加载项目资源，不打包）。部署前记得在 Play Mode Script 里切到 `Use Existing Build` 验证真实加载行为。
- **重复加载同一资源**：如果地址相同，Addressables 内部会复用已加载的资源，不会重复加载。但要确保用了正确的 Release 方法做引用计数管理。
- **Sprite Atlas 加载**：Sprite 在使用 Atlas 时，加载单个 Sprite 会导致整个 Atlas 驻留内存。考虑将 Atlas 单独分组，管理加载时机。
- **Scene 加载**：Addressables 支持场景加载 `Addressables.LoadSceneAsync("Level01")`，同样需要对应的 `UnloadSceneAsync`。
