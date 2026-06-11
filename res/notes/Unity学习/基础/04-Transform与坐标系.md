# Transform 与坐标系
> 2026-06 | Unity · Transform · 坐标系 · 向量

在 Unity 里，一切对象的空间属性——位置、旋转、缩放——都由 Transform 管理。一个 GameObject 可以没有渲染、没有逻辑、没有碰撞，但一定有一个 Transform。

## Transform 的三个核心属性

```csharp
transform.position;   // 世界坐标
transform.rotation;   // 世界旋转（Quaternion）
transform.localScale; // 本地缩放
```

以及它们的本地版本（相对于父对象）：

```csharp
transform.localPosition;
transform.localRotation;  // Quaternion
transform.localEulerAngles; // 欧拉角，调试用
```

一个常见陷阱：直接读写 `transform.rotation` 的 `.x` / `.y` / `.z`：

```csharp
// 错误——Quaternion 的 xyz 不是你理解的角度
transform.rotation.x = 45;

// 正确
transform.rotation = Quaternion.Euler(0, 45, 0);
```

## 世界坐标与本地坐标

世界坐标系是 Unity 场景中唯一的全局参考系。所有对象的 `.position` 都相对于场景原点。

本地坐标系是相对于父对象（或者叫父节点）的坐标系。当你把 `Child` 放进 `Parent` 下面时：

- `Child.transform.position` 返回它在世界中的坐标（跟 Hierachy 没关系）。
- `Child.transform.localPosition` 返回它相对于 `Parent` 的偏移。

移动对象时，问自己：想让它在世界里移动，还是相对于父对象偏移？

```csharp
// 世界坐标平移：不管父对象在哪，目标位置固定
transform.position = new Vector3(0, 5, 0);

// 本地坐标偏移：相对于父对象移动
transform.localPosition = new Vector3(1, 0, 0);

// 增量移动（世界方向）
transform.Translate(Vector3.forward * speed * Time.deltaTime, Space.World);
```

## 旋转

Unity 内部用四元数（Quaternion）表示旋转，因为它在数学上稳定，没有万向节锁。但在 Inspector 里你看到的是欧拉角的三个角度（X, Y, Z）。

```csharp
// 设置绝对旋转
transform.rotation = Quaternion.Euler(0, 90, 0);

// 增量旋转
transform.Rotate(Vector3.up * rotationSpeed * Time.deltaTime);

// 看向目标
transform.LookAt(target);
```

二维游戏里，通常只需要绕 Z 轴旋转：

```csharp
// 面向鼠标
Vector3 diff = Camera.main.ScreenToWorldPoint(Input.mousePosition) - transform.position;
float angle = Mathf.Atan2(diff.y, diff.x) * Mathf.Rad2Deg;
transform.rotation = Quaternion.Euler(0, 0, angle);
```

## 层级关系

父子关系不只是编辑器里的虚线缩进——它影响了坐标和变换链。

```csharp
transform.SetParent(other);            // 保持世界坐标不变
transform.SetParent(other, false);     // 保持世界坐标不变（默认）
transform.SetParent(other, true);      // 保持本地坐标不变
transform.SetParent(null);             // 移到根级
```

常见用途：
- 武器挂到手上：武器是 GameObject 的子对象，跟随手移动。
- UI 元素嵌套：按钮放在 Panel 里，Panel 一动，按钮自动跟着。
- 对象池回收：先解除父子关系再放回池。

## 向量计算基础

Transform 相关的大部分逻辑本质上是向量运算：

```csharp
// 方向
Vector3 direction = (target.position - transform.position).normalized;

// 距离
float distance = Vector3.Distance(a.position, b.position);

// 前方
Vector3 forward = transform.forward;  // 蓝色箭头（Z 轴）
Vector3 right = transform.right;      // 红色箭头（X 轴）
Vector3 up = transform.up;            // 绿色箭头（Y 轴）

// 2D 版本
Vector2 forward2D = transform.right;  // 2D 里「前」通常是 X 轴
```

## 性能提示

Transform 的 `position` 和 `rotation` 属性在 C++ 端存储。访问这些属性会触发跨域调用——单次访问不贵，但在循环里频繁使用就贵了。

```csharp
// 不好的做法
for (int i = 0; i < 10000; i++)
{
    DoSomething(transform.position); // 多次跨域访问
}

// 更好的做法
Vector3 pos = transform.position;
for (int i = 0; i < 10000; i++)
{
    DoSomething(pos);
}
```

这不意味着一看到 `transform.position` 就要缓存——只有循环中大量使用时才需要。
