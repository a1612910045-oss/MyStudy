# LINQ 查询思维
> 2026-06 | C# · LINQ · 集合

LINQ 让你用统一的方式处理集合：筛选、映射、排序、分组、聚合。它的价值不是“少写几行代码”，而是让数据变换的意图更清楚。

## 基本模型

LINQ 通常由几个动作组成：

- `Where`：筛选。
- `Select`：映射。
- `OrderBy` / `OrderByDescending`：排序。
- `GroupBy`：分组。
- `Any` / `All`：判断。
- `FirstOrDefault`：找一个。
- `ToList` / `ToArray`：立即生成集合。

## Where

```csharp
var aliveEnemies = enemies.Where(enemy => enemy.IsAlive);
```

这表示“从敌人列表里筛出活着的敌人”。

## Select

```csharp
var names = enemies.Select(enemy => enemy.Name);
```

这表示“把敌人集合映射成名字集合”。

## 排序

```csharp
var sorted = enemies
    .OrderByDescending(enemy => enemy.Level)
    .ThenBy(enemy => enemy.Name)
    .ToList();
```

先按等级降序，再按名字升序。

## 查找

```csharp
var boss = enemies.FirstOrDefault(enemy => enemy.Type == EnemyType.Boss);

if (boss != null)
{
    boss.EnterPhaseTwo();
}
```

`First` 找不到会抛异常，`FirstOrDefault` 找不到返回默认值。业务上允许没有结果时，用 `FirstOrDefault` 更安全。

## 判断

```csharp
bool hasBoss = enemies.Any(enemy => enemy.Type == EnemyType.Boss);
bool allDead = enemies.All(enemy => !enemy.IsAlive);
```

`Any` 和 `All` 很适合表达条件。

## 分组

```csharp
var groups = items.GroupBy(item => item.Rarity);

foreach (var group in groups)
{
    Console.WriteLine(group.Key);
    foreach (var item in group)
    {
        Console.WriteLine(item.Name);
    }
}
```

适合背包、排行榜、日志统计等场景。

## 延迟执行

很多 LINQ 查询不会立刻执行：

```csharp
var query = enemies.Where(enemy => enemy.IsAlive);
```

只有遍历时才真正执行。如果你想固定结果，调用：

```csharp
var list = query.ToList();
```

理解延迟执行很重要，否则数据变化后，查询结果可能和你以为的不一样。

## Unity 中谨慎使用

LINQ 可读性很好，但某些写法会产生分配。建议：

- 编辑器工具、初始化流程、非热路径可以放心用。
- `Update`、物理回调、大量对象循环里谨慎使用。
- 性能敏感代码先写清楚，再用 Profiler 决定是否优化。

## 常见替代

热路径中可以用普通循环：

```csharp
Enemy nearest = null;
float nearestDistance = float.MaxValue;

foreach (var enemy in enemies)
{
    float distance = Vector3.Distance(playerPosition, enemy.Position);
    if (distance < nearestDistance)
    {
        nearest = enemy;
        nearestDistance = distance;
    }
}
```

这比一串 LINQ 更啰嗦，但更容易控制分配和中间过程。

## 参考资料

- LINQ overview in C# guide: https://learn.microsoft.com/en-us/dotnet/csharp/
- Programming concepts: https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/
