# 委托、事件与 Lambda
> 2026-06 | C# · 委托 · 事件

委托、事件和 Lambda 是 C# 处理“回调”的核心。它们让发送者不需要知道接收者是谁，只需要在某个时机通知出去。

## 委托是什么

委托是一种“方法类型”。它规定一个方法需要什么参数、返回什么结果。

```csharp
public delegate int DamageFormula(int attack, int defense);
```

符合签名的方法都能赋给它：

```csharp
int NormalDamage(int attack, int defense)
{
    return Math.Max(attack - defense, 1);
}

DamageFormula formula = NormalDamage;
int damage = formula(20, 5);
```

## Action 与 Func

实际项目里更常用内置委托：

```csharp
Action onComplete;
Action<int> onHpChanged;
Func<int, int, int> calculateDamage;
```

- `Action`：无返回值。
- `Func`：有返回值，最后一个泛型参数是返回类型。

## Lambda 表达式

Lambda 用来写短函数：

```csharp
Func<int, int, int> add = (a, b) => a + b;
```

集合操作里很常见：

```csharp
var lowHpEnemies = enemies.Where(enemy => enemy.Hp < 30);
```

## 事件

事件是受限制的委托。外部可以订阅和取消订阅，但不能随便触发。

```csharp
public class Health
{
    public event Action<int> HpChanged;

    private int hp;

    public void SetHp(int value)
    {
        hp = value;
        HpChanged?.Invoke(hp);
    }
}
```

订阅：

```csharp
health.HpChanged += UpdateHpBar;
```

取消订阅：

```csharp
health.HpChanged -= UpdateHpBar;
```

## 为什么事件重要

假设血量变化后要更新 UI、播放音效、触发红屏、检查死亡。如果 `Health` 直接引用所有系统，会很耦合。

事件能让 `Health` 只负责通知：

```text
Health 说：HP 变了
UI、Audio、DeathChecker 自己决定是否响应
```

## Unity 中的事件习惯

常见用法：

```csharp
private void OnEnable()
{
    player.Health.HpChanged += OnHpChanged;
}

private void OnDisable()
{
    player.Health.HpChanged -= OnHpChanged;
}
```

在 `OnDisable` 里取消订阅很重要，否则对象销毁或禁用后仍可能收到回调。

## 闭包陷阱

Lambda 会捕获外部变量：

```csharp
for (int i = 0; i < buttons.Count; i++)
{
    int index = i;
    buttons[i].onClick.AddListener(() => Select(index));
}
```

在循环里建议复制一份局部变量，避免所有回调都引用同一个变量。

## 小练习

写一个 `Inventory`：

- 添加物品时触发 `ItemAdded` 事件。
- UI 订阅这个事件并刷新。
- 移除 UI 时取消订阅。

## 参考资料

- C# language reference: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/
- Programming concepts: https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/
