# GameObject 与 Component 模型
> 2026-06 | Unity · 架构 · 组合模式

Unity 的核心架构就两个词：GameObject 和 Component。理解它们的本质，比背会一百个 API 更重要。

## 不是继承树，是组合

无论从哪里开始学 Unity，第一件要记住的事：

> GameObject 本身几乎什么都不能做。它的所有功能都来自挂在上面的 Component。

一个「敌人」在 Unity 里不是 Enemy 类。它是：
- 一个 GameObject（只有一个名字和 Transform）
- 上面挂着 SpriteRenderer（决定长什么样）
- 挂着 Collider2D（决定碰撞区域）
- 挂着你写的 EnemyController 脚本（决定行为逻辑）
- 可能还挂着 Animator（播放动画）

```
GameObject "Enemy01"
  ├── Transform
  ├── SpriteRenderer
  ├── BoxCollider2D
  ├── EnemyController (你的脚本)
  └── Animator
```

这和传统的 OOP 继承完全不同。你不会写 `class Enemy extends GameObject`。你写 `class EnemyController : MonoBehaviour`，然后把它「挂」到一个 GameObject 上。

## GameObject 的三个核心操作

**查找**：
```csharp
GameObject.Find("Player");           // 按名称，慢，尽量避免
GameObject.FindWithTag("Player");    // 按标签，稍好但仍需遍历
transform.Find("ChildName");         // 只找直接子级，较快
```

**激活/失活**：
```csharp
gameObject.SetActive(true);
gameObject.SetActive(false);   // 整个对象及所有子级都失活
```

**实例化/销毁**：
```csharp
Instantiate(prefab, position, rotation);
Destroy(gameObject);
Destroy(gameObject, 2f);        // 2 秒后销毁
```

## Component 的操作

获取组件是日常操作中最频繁的事情：

```csharp
// 从当前 GameObject 上拿
var sr = GetComponent<SpriteRenderer>();
var anim = GetComponent<Animator>();

// 安全写法（如果组件不存在返回 null）
if (TryGetComponent<Collider>(out var col))
{
    // 使用 col
}

// 用 RequireComponent 保证依赖
[RequireComponent(typeof(Rigidbody2D))]
public class EnemyController : MonoBehaviour { }
```

常见坑：
- `GetComponent` 在组件不存在时返回 `null`，它不是抛异常。
- `GetComponentInChildren` 包含自身，且默认不搜索非激活对象。
- `GetComponent` 有 GC 分配？不，它是引用类型的查找，本身不分配，但装箱调用可能在 IL2CPP 下有开销。

## Transform

每个 GameObject 都有一个 Transform，不能删除，也不能额外添加第二个。

```csharp
// 世界坐标（相对于原点）
transform.position = new Vector3(0, 0, 0);

// 本地坐标（相对于父对象）
transform.localPosition = new Vector3(5, 0, 0);

// 层级操作
transform.SetParent(parentTransform);
transform.SetParent(null);           // 移到根级
```

## Tag 和 Layer

- **Tag**：分类查找用。比如 "Player"、"Enemy"、"Pickup"。适合搜索和识别。
- **Layer**：渲染和物理计算用。决定哪些对象之间会发生碰撞、被哪个摄像机渲染。

Tag 是字符串比较，新版本也支持 int 形式的 `CompareTag`，更快。

```csharp
if (other.CompareTag("Player"))
{
    // ...
}
```

## 组件间的消息传递

同一 GameObject 上的两个组件怎么通信？常见三种方式：

```csharp
// 1. 直接 GetComponent
var health = GetComponent<Health>();

// 2. Inspector 拖拽引用（推荐用于静态关系）
[SerializeField] private Health health;

// 3. UnityEvent（编辑器可视绑定）
public UnityEvent onDie;
```

跨 GameObject 通信的推荐方式：
- 预制体内部用 Inspector 拖拽或 `GetComponent`
- 同场景、常驻对象用 `FindObjectOfType`（慎用）或单例
- 松耦合用事件总线或 ScriptableObject 事件通道

## 不要在 Update 里 GetComponent

这是 Unity 新人最常见的性能错误：

```csharp
// 错误示范
void Update()
{
    var col = GetComponent<Collider>(); // 每帧都查一次，毫无意义
}

// 正确做法
private Collider col;

void Awake()
{
    col = GetComponent<Collider>();     // 只查一次，缓存引用
}
```

`GetComponent` 在 Editor 里看起来很快，但在 IL2CPP 下真的有开销。缓存引用的原则适用于 `Camera.main`、`GameObject.Find` 等所有查找类操作。
