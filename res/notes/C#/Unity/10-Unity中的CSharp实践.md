# Unity 中的 C# 实践
> 2026-06 | C# · Unity · MonoBehaviour

Unity 里的 C# 不是单纯的控制台 C#。你写的脚本要和引擎生命周期、序列化系统、Inspector、资源加载、协程和性能约束一起工作。

## MonoBehaviour

Unity 脚本通常继承 `MonoBehaviour`：

```csharp
public class PlayerController : MonoBehaviour
{
    private void Awake()
    {
    }

    private void Start()
    {
    }

    private void Update()
    {
    }
}
```

常见生命周期：

- `Awake`：对象加载时调用，适合初始化自身引用。
- `OnEnable`：对象启用时调用，适合订阅事件。
- `Start`：第一次 Update 前调用，适合依赖其他对象完成初始化后再执行。
- `Update`：每帧调用。
- `OnDisable`：对象禁用时调用，适合取消订阅事件。
- `OnDestroy`：对象销毁时调用。

## 字段序列化

推荐：

```csharp
[SerializeField] private float moveSpeed = 5f;
```

这样 Inspector 可编辑，但字段仍然保持 private。比 public 字段更符合封装。

Unity 的序列化系统和 .NET 自带序列化不是同一套系统。它有自己的规则，例如能序列化哪些字段、如何处理引用等。

## 缓存组件引用

不要在每帧频繁 GetComponent：

```csharp
private Rigidbody rb;

private void Awake()
{
    rb = GetComponent<Rigidbody>();
}
```

`Update` 中直接使用缓存引用。

## 协程

协程适合把逻辑拆到多帧执行：

```csharp
private IEnumerator Flash()
{
    renderer.enabled = false;
    yield return new WaitForSeconds(0.1f);
    renderer.enabled = true;
}

StartCoroutine(Flash());
```

协程不是线程。它仍然运行在 Unity 主线程，只是通过 `yield` 暂停和恢复。

## 事件订阅

```csharp
private void OnEnable()
{
    health.HpChanged += OnHpChanged;
}

private void OnDisable()
{
    health.HpChanged -= OnHpChanged;
}
```

这个模式可以减少对象禁用后继续收到事件的风险。

## Update 中少做什么

每帧都执行的代码要克制：

- 少做大量字符串拼接。
- 少创建临时 List、数组和闭包。
- 少做全场景查找，如 `FindObjectOfType`。
- 少做复杂 LINQ 查询。
- 少访问昂贵属性或重复计算。

先写清楚，再用 Profiler 找热点。

## 数据与表现分离

一个常见结构：

```text
PlayerStats      保存数值
PlayerMovement   处理移动
PlayerView       处理动画和特效
PlayerInput      处理输入
```

不要把输入、移动、战斗、动画、UI 全塞进一个 `PlayerController`。

## ScriptableObject

配置数据可以考虑 ScriptableObject：

```csharp
[CreateAssetMenu(menuName = "Game/Item Config")]
public class ItemConfig : ScriptableObject
{
    public string id;
    public string displayName;
    public int price;
}
```

适合技能、道具、关卡参数等可复用配置。

## 和普通 C# 的差异

- Unity 对序列化字段有自己的限制。
- Unity 对生命周期方法有约定命名。
- Unity 主线程限制明显。
- Unity 项目更重视 GC、帧率和资源生命周期。
- 很多代码不是从 `Main` 开始，而是由引擎回调驱动。

## 参考资料

- Unity MonoBehaviour: https://docs.unity3d.com/6000.4/Documentation/ScriptReference/MonoBehaviour.html
- Unity SerializeField: https://docs.unity3d.com/6000.6/Documentation/ScriptReference/SerializeField.html
- Unity Coroutine: https://docs.unity3d.com/6000.4/Documentation/ScriptReference/Coroutine.html
- Unity StartCoroutine: https://docs.unity3d.com/6000.4/Documentation/ScriptReference/MonoBehaviour.StartCoroutine.html
- Unity script serialization: https://docs.unity3d.com/6000.4/Documentation/Manual/script-serialization.html
