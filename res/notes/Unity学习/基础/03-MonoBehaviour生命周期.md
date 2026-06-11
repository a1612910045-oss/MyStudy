# MonoBehaviour 生命周期
> 2026-06 | Unity · 生命周期 · 回调顺序

MonoBehaviour 不是普通的 C# 类。它的方法不是由你调用，而是由 Unity 引擎在你写好的时机自动调用。理解这些回调的先后顺序，是写出正确脚本的基础。

## 完整回调顺序

```
Awake()
  ↓
OnEnable()
  ↓
Start()
  ↓
  ┌─────────────────────────┐
  │  FixedUpdate()          │ ← 物理更新，与帧率无关
  ├─────────────────────────┤
  │  Update()               │ ← 每帧一次，帧率波动敏感
  ├─────────────────────────┤
  │  LateUpdate()           │ ← Update 之后、渲染之前
  └─────────────────────────┘
  ↑ 循环 ↑
  ↓
OnDisable()
  ↓
OnDestroy()
```

## Awake vs Start

| 特性 | Awake | Start |
|---|---|---|
| 调用时机 | 对象实例化后立即调用 | 在第一帧 Update 之前 |
| 非激活对象 | 不调用 | 不调用 |
| 同类之间的顺序 | `scriptExecutionOrder` 或不确定 | `scriptExecutionOrder` 或不确定 |
| 典型用途 | 初始化自身引用、GetComponent | 依赖外部对象的初始化 |

**关键原则**：

- Awake 做「自己的事」：`GetComponent`、设置默认值。
- Start 做「建立联系的事」：从其他对象获取引用，因为其他对象的 Awake 已经完成了。

```csharp
private Rigidbody rb;

void Awake()
{
    rb = GetComponent<Rigidbody>(); // 初始化自己的引用
}

void Start()
{
    // 此时可以安全地访问其他对象（它们的 Awake 已执行）
    var player = FindObjectOfType<Player>();
    if (player != null)
    {
        // 安全
    }
}
```

## Update、FixedUpdate、LateUpdate

**Update**：每帧一次。帧率越高，调用越频繁。适合玩家输入、移动逻辑。

**FixedUpdate**：固定时间间隔，默认 0.02s（50 次/秒）。适合物理计算。对 `Rigidbody` 的操作放这里。

```csharp
void FixedUpdate()
{
    rb.AddForce(Vector3.up * jumpForce); // 物理操作放这里
}
```

**LateUpdate**：所有 Update 之后调用。适合「跟随」逻辑：

```csharp
void LateUpdate()
{
    // 摄像机跟随——等玩家移动完再跟
    transform.position = player.position + offset;
}
```

## OnEnable / OnDisable

对象激活时调用 OnEnable，失活时调用 OnDisable。对象池复用时这对回调特别重要——你得确保对象重新激活时状态重置。

```csharp
void OnEnable()
{
    // 从对象池取回时重置血量和位置
    hp = maxHp;
    transform.position = spawnPoint;
}

void OnDisable()
{
    // 取消订阅事件，防止内存泄漏
    EventBus.OnScoreChanged -= HandleScoreChanged;
}
```

## OnDestroy

对象被销毁时调用。适合做清理：注销事件、释放非托管资源。

对象销毁后再访问它会怎样？Unity 做了特殊处理——它不是真的 null，而是被标记为「已销毁」的「伪 null」。这就是为什么你会看到 `gameObject != null` 在 Destroy 后返回 false——Unity 重载了 `==` 运算符。

## 不要在 Awake/Start 里依赖执行顺序

不同脚本的 Awake 执行顺序是不确定的（除非你在 Project Settings → Script Execution Order 里手动指定）。

不要把初始化逻辑拆成「脚本 A 的 Start 依赖脚本 B 的 Awake 必须完成」——这是给自己埋雷。如果你想控制顺序，要么用 Script Execution Order，要么改成显式初始化：

```csharp
// 代替依赖隐式顺序
public class GameManager : MonoBehaviour
{
    public void Initialize()
    {
        // 手动控制初始化流程
        playerManager.Init();
        uiManager.Init();
    }
}
```

## 协程

协程不是生命周期回调，但常被误解为多线程。

```csharp
IEnumerator FadeOut()
{
    float alpha = 1f;
    while (alpha > 0)
    {
        alpha -= Time.deltaTime;
        // 设置透明度
        yield return null; // 等到下一帧
    }
}

void Start()
{
    StartCoroutine(FadeOut());
}
```

协程在每帧 Update 之后、LateUpdate 之前恢复执行（`yield return null` 的情况）。`yield return new WaitForSeconds(1)` 则等到指定时间后继续。

协程依附于启动它的 MonoBehaviour——如果 GameObject 失活或脚本被禁用，协程也会停止。
