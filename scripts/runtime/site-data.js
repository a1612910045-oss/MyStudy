window.SITE_DATA = {
  "sections": {
    "projects": "项目",
    "notes": "笔记",
    "talk": "杂谈"
  },
  "items": {
    "projects": [],
    "notes": [
      {
        "slug": "C#/00-学习路线",
        "folders": [
          "C#"
        ],
        "fileName": "00-学习路线.md",
        "title": "C# 学习路线",
        "date": "2026-06",
        "tags": [
          "C#",
          "学习路线",
          ".NET"
        ],
        "excerpt": "这套笔记适合从“会写一点代码”过渡到“能独立写 C# 业务逻辑、读 Unity 项目代码、理解常见 .NET API”的学习路径。建议不要只背语法，而是按“语法 → 类型 → 对象模型 → 集合与泛型 → 委托事件 → LINQ → 异步 → Unity 实战”的顺序推进。\r\n\r\n## 学习目标\r\n",
        "content": "# C# 学习路线\r\n> 2026-06 | C# · 学习路线 · .NET\r\n\r\n这套笔记适合从“会写一点代码”过渡到“能独立写 C# 业务逻辑、读 Unity 项目代码、理解常见 .NET API”的学习路径。建议不要只背语法，而是按“语法 → 类型 → 对象模型 → 集合与泛型 → 委托事件 → LINQ → 异步 → Unity 实战”的顺序推进。\r\n\r\n## 学习目标\r\n\r\n- 能读懂常见 C# 代码结构：命名空间、类、字段、属性、方法、构造函数。\r\n- 能区分值类型和引用类型，理解复制值与复制引用的差异。\r\n- 能用类、接口、继承和组合拆分游戏或工具中的业务逻辑。\r\n- 能熟练使用 `List<T>`、`Dictionary<TKey, TValue>`、`HashSet<T>` 等集合。\r\n- 能用委托、事件、Lambda 表达式组织回调与消息通知。\r\n- 能用 LINQ 做筛选、映射、分组和排序，但知道什么时候不该滥用。\r\n- 能理解 `async` / `await` 的执行模型，知道 Unity 协程和 C# 异步不是同一套东西。\r\n- 能写出更适合 Unity 的 C#：少分配、序列化友好、生命周期清晰。\r\n\r\n## 推荐顺序\r\n\r\n1. 基础语法：变量、类型、字符串、流程控制、方法。\r\n2. 类型系统：值类型、引用类型、可空、枚举、结构体。\r\n3. 面向对象：类、对象、属性、构造函数、继承、接口。\r\n4. 集合与泛型：用泛型表达“类型安全的复用”。\r\n5. 委托与事件：把“发生了什么”和“谁来响应”解耦。\r\n6. LINQ：把集合操作写得更像数据变换。\r\n7. 异常与资源释放：失败路径也要设计。\r\n8. 异步编程：理解 `Task`、`await`、取消和异常传播。\r\n9. Unity C#：把语言特性放进游戏引擎语境里使用。\r\n\r\n## 怎么练\r\n\r\n- 每学一个语法点，都写一个 20 行以内的小例子。\r\n- 每学一个概念，都问自己：它解决了什么重复、耦合或错误风险？\r\n- 用 Unity 项目反推学习：看到 `MonoBehaviour`、`SerializeField`、`Coroutine`、事件系统时，再回来查对应笔记。\r\n- 不要一开始追求“高级写法”。C# 很多高级特性是为了让大型代码更可维护，不是为了炫技。\r\n\r\n## 一个最小练习项目\r\n\r\n可以做一个“背包系统”的控制台版本：\r\n\r\n- `Item` 表示物品。\r\n- `Inventory` 管理物品列表。\r\n- `IUsable` 表示可使用物品。\r\n- `OnItemAdded` 用事件通知 UI。\r\n- 用 LINQ 查询稀有物品。\r\n- 用 JSON 保存和读取背包。\r\n\r\n这个小项目能覆盖 C# 的大部分核心概念，而且很贴近 Unity 游戏开发。\r\n\r\n## 常见误区\r\n\r\n- 把 `class` 当成“数据袋”。类不只是字段集合，也应该封装行为和不变量。\r\n- 到处使用 `public` 字段。普通 C# 项目里更推荐属性；Unity 里可以用 `[SerializeField] private` 暴露 Inspector。\r\n- 看到 LINQ 就全都用 LINQ。热路径、每帧 Update、GC 敏感场景要谨慎。\r\n- 把协程当多线程。Unity 协程是分帧执行，不等于后台线程。\r\n- `async void` 到处飞。除了事件处理器，通常应返回 `Task` 或 `Task<T>`。\r\n\r\n## 参考资料\r\n\r\n- Microsoft Learn: C# guide: https://learn.microsoft.com/en-us/dotnet/csharp/\r\n- Microsoft Learn: Tour of C#: https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/\r\n- Microsoft Learn: C# language reference: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/\r\n"
      },
      {
        "slug": "C#/Unity/10-Unity中的CSharp实践",
        "folders": [
          "C#",
          "Unity"
        ],
        "fileName": "10-Unity中的CSharp实践.md",
        "title": "Unity 中的 C# 实践",
        "date": "2026-06",
        "tags": [
          "C#",
          "Unity",
          "MonoBehaviour"
        ],
        "excerpt": "Unity 里的 C# 不是单纯的控制台 C#。你写的脚本要和引擎生命周期、序列化系统、Inspector、资源加载、协程和性能约束一起工作。\r\n\r\n## MonoBehaviour\r\n\r\nUnity 脚本通常继承 `MonoBehaviour`：\r\n\r\n```csharp\r\npublic clas",
        "content": "# Unity 中的 C# 实践\r\n> 2026-06 | C# · Unity · MonoBehaviour\r\n\r\nUnity 里的 C# 不是单纯的控制台 C#。你写的脚本要和引擎生命周期、序列化系统、Inspector、资源加载、协程和性能约束一起工作。\r\n\r\n## MonoBehaviour\r\n\r\nUnity 脚本通常继承 `MonoBehaviour`：\r\n\r\n```csharp\r\npublic class PlayerController : MonoBehaviour\r\n{\r\n    private void Awake()\r\n    {\r\n    }\r\n\r\n    private void Start()\r\n    {\r\n    }\r\n\r\n    private void Update()\r\n    {\r\n    }\r\n}\r\n```\r\n\r\n常见生命周期：\r\n\r\n- `Awake`：对象加载时调用，适合初始化自身引用。\r\n- `OnEnable`：对象启用时调用，适合订阅事件。\r\n- `Start`：第一次 Update 前调用，适合依赖其他对象完成初始化后再执行。\r\n- `Update`：每帧调用。\r\n- `OnDisable`：对象禁用时调用，适合取消订阅事件。\r\n- `OnDestroy`：对象销毁时调用。\r\n\r\n## 字段序列化\r\n\r\n推荐：\r\n\r\n```csharp\r\n[SerializeField] private float moveSpeed = 5f;\r\n```\r\n\r\n这样 Inspector 可编辑，但字段仍然保持 private。比 public 字段更符合封装。\r\n\r\nUnity 的序列化系统和 .NET 自带序列化不是同一套系统。它有自己的规则，例如能序列化哪些字段、如何处理引用等。\r\n\r\n## 缓存组件引用\r\n\r\n不要在每帧频繁 GetComponent：\r\n\r\n```csharp\r\nprivate Rigidbody rb;\r\n\r\nprivate void Awake()\r\n{\r\n    rb = GetComponent<Rigidbody>();\r\n}\r\n```\r\n\r\n`Update` 中直接使用缓存引用。\r\n\r\n## 协程\r\n\r\n协程适合把逻辑拆到多帧执行：\r\n\r\n```csharp\r\nprivate IEnumerator Flash()\r\n{\r\n    renderer.enabled = false;\r\n    yield return new WaitForSeconds(0.1f);\r\n    renderer.enabled = true;\r\n}\r\n\r\nStartCoroutine(Flash());\r\n```\r\n\r\n协程不是线程。它仍然运行在 Unity 主线程，只是通过 `yield` 暂停和恢复。\r\n\r\n## 事件订阅\r\n\r\n```csharp\r\nprivate void OnEnable()\r\n{\r\n    health.HpChanged += OnHpChanged;\r\n}\r\n\r\nprivate void OnDisable()\r\n{\r\n    health.HpChanged -= OnHpChanged;\r\n}\r\n```\r\n\r\n这个模式可以减少对象禁用后继续收到事件的风险。\r\n\r\n## Update 中少做什么\r\n\r\n每帧都执行的代码要克制：\r\n\r\n- 少做大量字符串拼接。\r\n- 少创建临时 List、数组和闭包。\r\n- 少做全场景查找，如 `FindObjectOfType`。\r\n- 少做复杂 LINQ 查询。\r\n- 少访问昂贵属性或重复计算。\r\n\r\n先写清楚，再用 Profiler 找热点。\r\n\r\n## 数据与表现分离\r\n\r\n一个常见结构：\r\n\r\n```text\r\nPlayerStats      保存数值\r\nPlayerMovement   处理移动\r\nPlayerView       处理动画和特效\r\nPlayerInput      处理输入\r\n```\r\n\r\n不要把输入、移动、战斗、动画、UI 全塞进一个 `PlayerController`。\r\n\r\n## ScriptableObject\r\n\r\n配置数据可以考虑 ScriptableObject：\r\n\r\n```csharp\r\n[CreateAssetMenu(menuName = \"Game/Item Config\")]\r\npublic class ItemConfig : ScriptableObject\r\n{\r\n    public string id;\r\n    public string displayName;\r\n    public int price;\r\n}\r\n```\r\n\r\n适合技能、道具、关卡参数等可复用配置。\r\n\r\n## 和普通 C# 的差异\r\n\r\n- Unity 对序列化字段有自己的限制。\r\n- Unity 对生命周期方法有约定命名。\r\n- Unity 主线程限制明显。\r\n- Unity 项目更重视 GC、帧率和资源生命周期。\r\n- 很多代码不是从 `Main` 开始，而是由引擎回调驱动。\r\n\r\n## 参考资料\r\n\r\n- Unity MonoBehaviour: https://docs.unity3d.com/6000.4/Documentation/ScriptReference/MonoBehaviour.html\r\n- Unity SerializeField: https://docs.unity3d.com/6000.6/Documentation/ScriptReference/SerializeField.html\r\n- Unity Coroutine: https://docs.unity3d.com/6000.4/Documentation/ScriptReference/Coroutine.html\r\n- Unity StartCoroutine: https://docs.unity3d.com/6000.4/Documentation/ScriptReference/MonoBehaviour.StartCoroutine.html\r\n- Unity script serialization: https://docs.unity3d.com/6000.4/Documentation/Manual/script-serialization.html\r\n"
      },
      {
        "slug": "C#/基础/01-类型变量与字符串",
        "folders": [
          "C#",
          "基础"
        ],
        "fileName": "01-类型变量与字符串.md",
        "title": "类型、变量与字符串",
        "date": "2026-06",
        "tags": [
          "C#",
          "基础",
          "类型系统"
        ],
        "excerpt": "C# 是静态类型语言。变量在编译时就有明确类型，编译器会帮你检查很多错误。学习 C# 的第一步，不是记住所有关键字，而是理解“类型决定了这个值能做什么”。\r\n\r\n## 变量声明\r\n\r\n最常见写法：\r\n\r\n```csharp\r\nint level = 10;\r\nfloat speed = 3.5f;\r",
        "content": "# 类型、变量与字符串\r\n> 2026-06 | C# · 基础 · 类型系统\r\n\r\nC# 是静态类型语言。变量在编译时就有明确类型，编译器会帮你检查很多错误。学习 C# 的第一步，不是记住所有关键字，而是理解“类型决定了这个值能做什么”。\r\n\r\n## 变量声明\r\n\r\n最常见写法：\r\n\r\n```csharp\r\nint level = 10;\r\nfloat speed = 3.5f;\r\nstring playerName = \"Luna\";\r\nbool isAlive = true;\r\n```\r\n\r\n也可以用 `var` 让编译器推断类型：\r\n\r\n```csharp\r\nvar score = 100;       // int\r\nvar title = \"Knight\";  // string\r\n```\r\n\r\n`var` 不是动态类型。变量类型依旧在编译期确定，只是不用手写。\r\n\r\n## 常见基础类型\r\n\r\n- `int`：整数，常用于数量、等级、索引。\r\n- `float`：单精度浮点数，Unity 中位置、速度、时间经常用它。\r\n- `double`：双精度浮点数，普通 .NET 数学计算常见。\r\n- `decimal`：高精度十进制，适合金额，不适合游戏坐标。\r\n- `bool`：布尔值，只有 `true` 和 `false`。\r\n- `char`：单个字符。\r\n- `string`：字符串，本质上是字符序列。\r\n\r\n## 值类型与引用类型\r\n\r\nC# 类型大体分为值类型和引用类型。\r\n\r\n值类型变量保存值本身：\r\n\r\n```csharp\r\nint a = 10;\r\nint b = a;\r\nb = 20;\r\n\r\nConsole.WriteLine(a); // 10\r\n```\r\n\r\n引用类型变量保存对象引用：\r\n\r\n```csharp\r\nPlayer p1 = new Player();\r\nPlayer p2 = p1;\r\np2.Name = \"New Name\";\r\n\r\nConsole.WriteLine(p1.Name); // New Name\r\n```\r\n\r\n这件事非常重要。它决定了参数传递、集合存储、对象共享时会不会互相影响。\r\n\r\n## 字符串插值\r\n\r\n推荐用字符串插值来拼接可读文本：\r\n\r\n```csharp\r\nstring name = \"Luna\";\r\nint level = 12;\r\nstring text = $\"{name} reached level {level}.\";\r\n```\r\n\r\n比 `name + \" reached level \" + level` 更清晰，也更容易维护。\r\n\r\n## 字符串是不可变的\r\n\r\n每次拼接字符串，通常都会产生新字符串：\r\n\r\n```csharp\r\nstring text = \"\";\r\ntext += \"A\";\r\ntext += \"B\";\r\ntext += \"C\";\r\n```\r\n\r\n少量拼接没问题；大量循环拼接时，使用 `StringBuilder` 更合适：\r\n\r\n```csharp\r\nvar builder = new StringBuilder();\r\nbuilder.Append(\"HP: \");\r\nbuilder.Append(100);\r\nstring result = builder.ToString();\r\n```\r\n\r\nUnity 中如果每帧大量拼接 UI 字符串，可能带来额外 GC 压力。\r\n\r\n## 可空引用类型\r\n\r\n较新的 C# 支持可空引用类型标注：\r\n\r\n```csharp\r\nstring name = \"Luna\";\r\nstring? optionalName = null;\r\n```\r\n\r\n`?` 表示这个引用可能为 `null`。它不是运行时魔法，而是让编译器帮助你发现潜在空引用。\r\n\r\n## 小练习\r\n\r\n写一个角色状态输出：\r\n\r\n```csharp\r\nstring name = \"Luna\";\r\nint hp = 80;\r\nint maxHp = 100;\r\nfloat percent = hp / (float)maxHp;\r\n\r\nConsole.WriteLine($\"{name}: {hp}/{maxHp} ({percent:P0})\");\r\n```\r\n\r\n思考：为什么 `hp / maxHp` 需要转换成 `float`？\r\n\r\n## 参考资料\r\n\r\n- C# guide: https://learn.microsoft.com/en-us/dotnet/csharp/\r\n- C# language reference: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/\r\n"
      },
      {
        "slug": "C#/基础/02-流程控制方法与作用域",
        "folders": [
          "C#",
          "基础"
        ],
        "fileName": "02-流程控制方法与作用域.md",
        "title": "流程控制、方法与作用域",
        "date": "2026-06",
        "tags": [
          "C#",
          "基础",
          "方法"
        ],
        "excerpt": "流程控制决定代码“走哪条路”，方法决定代码“如何分块”。写 C# 时，应该尽早养成把复杂逻辑拆成小方法的习惯。\r\n\r\n## if / else\r\n\r\n```csharp\r\nif (hp <= 0)\r\n{\r\n    Die();\r\n}\r\nelse if (hp < 30)\r\n{\r\n    PlayLo",
        "content": "# 流程控制、方法与作用域\r\n> 2026-06 | C# · 基础 · 方法\r\n\r\n流程控制决定代码“走哪条路”，方法决定代码“如何分块”。写 C# 时，应该尽早养成把复杂逻辑拆成小方法的习惯。\r\n\r\n## if / else\r\n\r\n```csharp\r\nif (hp <= 0)\r\n{\r\n    Die();\r\n}\r\nelse if (hp < 30)\r\n{\r\n    PlayLowHpWarning();\r\n}\r\nelse\r\n{\r\n    ContinueBattle();\r\n}\r\n```\r\n\r\n判断条件应该尽量表达业务含义。如果条件越来越长，考虑提取方法：\r\n\r\n```csharp\r\nif (IsInDanger(hp, enemyDistance))\r\n{\r\n    Escape();\r\n}\r\n```\r\n\r\n## switch\r\n\r\n适合根据离散状态分支：\r\n\r\n```csharp\r\nswitch (state)\r\n{\r\n    case PlayerState.Idle:\r\n        PlayIdle();\r\n        break;\r\n    case PlayerState.Attack:\r\n        PlayAttack();\r\n        break;\r\n    default:\r\n        PlayFallback();\r\n        break;\r\n}\r\n```\r\n\r\n如果分支越来越多，而且每个分支都很复杂，说明可能需要状态模式或策略类。\r\n\r\n## for / foreach / while\r\n\r\n`for` 适合需要索引：\r\n\r\n```csharp\r\nfor (int i = 0; i < enemies.Count; i++)\r\n{\r\n    enemies[i].Tick();\r\n}\r\n```\r\n\r\n`foreach` 适合只关心元素：\r\n\r\n```csharp\r\nforeach (var enemy in enemies)\r\n{\r\n    enemy.Tick();\r\n}\r\n```\r\n\r\n`while` 适合循环次数不确定：\r\n\r\n```csharp\r\nwhile (queue.Count > 0)\r\n{\r\n    Process(queue.Dequeue());\r\n}\r\n```\r\n\r\nUnity 热路径中要注意枚举器和分配问题，但现代 C# 与常见集合已经优化了很多。真正遇到性能问题时再用 Profiler 判断。\r\n\r\n## 方法\r\n\r\n方法应该做一件清楚的事：\r\n\r\n```csharp\r\nint CalculateDamage(int attack, int defense)\r\n{\r\n    int raw = attack - defense;\r\n    return Math.Max(raw, 1);\r\n}\r\n```\r\n\r\n命名建议：\r\n\r\n- 返回 bool 的方法常用 `Is`、`Has`、`Can` 开头。\r\n- 执行动作的方法使用动词。\r\n- 计算结果的方法可用 `Calculate`、`Get`、`Find`。\r\n\r\n## 参数与返回值\r\n\r\n```csharp\r\nbool TrySpendGold(int cost)\r\n{\r\n    if (gold < cost)\r\n    {\r\n        return false;\r\n    }\r\n\r\n    gold -= cost;\r\n    return true;\r\n}\r\n```\r\n\r\n`TryXxx` 是 C# 常见命名习惯：尝试做某事，成功返回 `true`，失败返回 `false`。\r\n\r\n## 作用域\r\n\r\n变量只在声明它的代码块内有效：\r\n\r\n```csharp\r\nif (isCritical)\r\n{\r\n    int bonus = 20;\r\n}\r\n\r\n// bonus 在这里不可用\r\n```\r\n\r\n作用域越小，代码越安全。不要把临时变量提升成字段，除非它确实代表对象状态。\r\n\r\n## early return\r\n\r\n比起多层嵌套，早返回常常更清楚：\r\n\r\n```csharp\r\nvoid Attack(Target target)\r\n{\r\n    if (target == null) return;\r\n    if (!CanAttack(target)) return;\r\n\r\n    DealDamage(target);\r\n    PlayEffect();\r\n}\r\n```\r\n\r\n这种写法在 Unity 的输入、碰撞、UI 回调里特别常用。\r\n\r\n## 小练习\r\n\r\n写一个购买物品方法：\r\n\r\n- 金币不足返回失败。\r\n- 背包满返回失败。\r\n- 成功时扣金币并添加物品。\r\n- 用 `TryBuyItem` 命名。\r\n\r\n## 参考资料\r\n\r\n- C# interactive tutorials: https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/tutorials/\r\n- C# language reference: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/\r\n"
      },
      {
        "slug": "C#/基础/03-类对象结构体与属性",
        "folders": [
          "C#",
          "基础"
        ],
        "fileName": "03-类对象结构体与属性.md",
        "title": "类、对象、结构体与属性",
        "date": "2026-06",
        "tags": [
          "C#",
          "OOP",
          "类型设计"
        ],
        "excerpt": "类和对象是 C# 组织复杂代码的核心。类不只是“字段的集合”，更重要的是把数据和行为放在一起，并保护对象始终处于合法状态。\r\n\r\n## 类与对象\r\n\r\n类是蓝图，对象是实例：\r\n\r\n```csharp\r\npublic class Player\r\n{\r\n    public string Name {",
        "content": "# 类、对象、结构体与属性\r\n> 2026-06 | C# · OOP · 类型设计\r\n\r\n类和对象是 C# 组织复杂代码的核心。类不只是“字段的集合”，更重要的是把数据和行为放在一起，并保护对象始终处于合法状态。\r\n\r\n## 类与对象\r\n\r\n类是蓝图，对象是实例：\r\n\r\n```csharp\r\npublic class Player\r\n{\r\n    public string Name { get; private set; }\r\n    public int Level { get; private set; }\r\n\r\n    public Player(string name)\r\n    {\r\n        Name = name;\r\n        Level = 1;\r\n    }\r\n\r\n    public void LevelUp()\r\n    {\r\n        Level++;\r\n    }\r\n}\r\n```\r\n\r\n创建对象：\r\n\r\n```csharp\r\nvar player = new Player(\"Luna\");\r\nplayer.LevelUp();\r\n```\r\n\r\n## 字段与属性\r\n\r\n字段是存储数据的位置：\r\n\r\n```csharp\r\nprivate int hp;\r\n```\r\n\r\n属性是对外暴露数据的接口：\r\n\r\n```csharp\r\npublic int Hp\r\n{\r\n    get => hp;\r\n    private set => hp = Math.Clamp(value, 0, MaxHp);\r\n}\r\n```\r\n\r\n属性可以控制读写权限，也可以在赋值时保护规则。\r\n\r\n## 自动属性\r\n\r\n简单场景用自动属性：\r\n\r\n```csharp\r\npublic int Gold { get; private set; }\r\n```\r\n\r\n外部能读，只有类内部能改。比公开字段更容易维护。\r\n\r\n## 构造函数\r\n\r\n构造函数用于建立对象初始状态：\r\n\r\n```csharp\r\npublic Item(string id, string name, int price)\r\n{\r\n    Id = id;\r\n    Name = name;\r\n    Price = price;\r\n}\r\n```\r\n\r\n构造函数不要做太重的事，比如网络请求、复杂 IO。它应该尽量只初始化对象。\r\n\r\n## struct 结构体\r\n\r\n结构体是值类型，适合小而简单的数据：\r\n\r\n```csharp\r\npublic struct Damage\r\n{\r\n    public int Value { get; }\r\n    public bool IsCritical { get; }\r\n\r\n    public Damage(int value, bool isCritical)\r\n    {\r\n        Value = value;\r\n        IsCritical = isCritical;\r\n    }\r\n}\r\n```\r\n\r\nUnity 里的 `Vector3`、`Quaternion`、`Color` 都是结构体。\r\n\r\n## class 与 struct 的选择\r\n\r\n优先用 `class`，除非满足这些条件：\r\n\r\n- 数据很小。\r\n- 表示一个值，而不是有身份的对象。\r\n- 通常不可变。\r\n- 频繁创建时希望减少堆分配。\r\n\r\n如果一个类型需要继承、多态、生命周期、共享身份，通常用类。\r\n\r\n## 封装\r\n\r\n坏味道：\r\n\r\n```csharp\r\nplayer.hp -= 999;\r\n```\r\n\r\n更好的方式：\r\n\r\n```csharp\r\nplayer.TakeDamage(999);\r\n```\r\n\r\n`TakeDamage` 可以统一处理护盾、死亡、事件、音效，而不是让外部随便改字段。\r\n\r\n## Unity 注意点\r\n\r\nUnity 中常见写法：\r\n\r\n```csharp\r\n[SerializeField] private int maxHp = 100;\r\n\r\npublic int Hp { get; private set; }\r\n```\r\n\r\n这样 Inspector 可配置，但外部代码不能随意改字段。比 `public int maxHp;` 更稳。\r\n\r\n## 参考资料\r\n\r\n- C# classes: https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/classes\r\n- Classes and objects tutorial: https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/classes\r\n- Unity SerializeField: https://docs.unity3d.com/6000.6/Documentation/ScriptReference/SerializeField.html\r\n"
      },
      {
        "slug": "C#/基础/04-继承接口与多态",
        "folders": [
          "C#",
          "基础"
        ],
        "fileName": "04-继承接口与多态.md",
        "title": "继承、接口与多态",
        "date": "2026-06",
        "tags": [
          "C#",
          "OOP",
          "接口"
        ],
        "excerpt": "继承和接口都能表达“某些类型有共同能力”，但它们的使用场景不同。写游戏代码时，组合和接口通常比深继承更灵活。\r\n\r\n## 继承\r\n\r\n继承表示“是一个”关系：\r\n\r\n```csharp\r\npublic class Enemy\r\n{\r\n    public virtual void Attack()\r",
        "content": "# 继承、接口与多态\r\n> 2026-06 | C# · OOP · 接口\r\n\r\n继承和接口都能表达“某些类型有共同能力”，但它们的使用场景不同。写游戏代码时，组合和接口通常比深继承更灵活。\r\n\r\n## 继承\r\n\r\n继承表示“是一个”关系：\r\n\r\n```csharp\r\npublic class Enemy\r\n{\r\n    public virtual void Attack()\r\n    {\r\n        Console.WriteLine(\"Enemy attack\");\r\n    }\r\n}\r\n\r\npublic class Slime : Enemy\r\n{\r\n    public override void Attack()\r\n    {\r\n        Console.WriteLine(\"Slime attack\");\r\n    }\r\n}\r\n```\r\n\r\n`virtual` 表示允许子类重写，`override` 表示正在重写父类方法。\r\n\r\n## 多态\r\n\r\n父类引用可以指向子类对象：\r\n\r\n```csharp\r\nList<Enemy> enemies = new()\r\n{\r\n    new Slime(),\r\n    new Goblin(),\r\n};\r\n\r\nforeach (var enemy in enemies)\r\n{\r\n    enemy.Attack();\r\n}\r\n```\r\n\r\n调用哪个 `Attack`，取决于运行时对象实际类型。\r\n\r\n## 抽象类\r\n\r\n抽象类不能直接实例化，适合提供共同基础：\r\n\r\n```csharp\r\npublic abstract class Skill\r\n{\r\n    public string Name { get; }\r\n\r\n    protected Skill(string name)\r\n    {\r\n        Name = name;\r\n    }\r\n\r\n    public abstract void Cast();\r\n}\r\n```\r\n\r\n抽象类可以有字段、构造函数、已实现方法。\r\n\r\n## 接口\r\n\r\n接口表达“能做什么”：\r\n\r\n```csharp\r\npublic interface IDamageable\r\n{\r\n    void TakeDamage(int amount);\r\n}\r\n\r\npublic interface IInteractable\r\n{\r\n    void Interact(Player player);\r\n}\r\n```\r\n\r\n一个类可以实现多个接口：\r\n\r\n```csharp\r\npublic class Chest : IInteractable, IDamageable\r\n{\r\n    public void Interact(Player player) { }\r\n    public void TakeDamage(int amount) { }\r\n}\r\n```\r\n\r\n## 什么时候用接口\r\n\r\n- 你关心能力，而不是继承层级。\r\n- 多种类型都能响应同一操作。\r\n- 需要解耦调用方和具体实现。\r\n- 想让测试更容易替换依赖。\r\n\r\n例如攻击系统只需要知道目标能受伤：\r\n\r\n```csharp\r\nvoid Hit(IDamageable target)\r\n{\r\n    target.TakeDamage(10);\r\n}\r\n```\r\n\r\n它不需要知道目标是怪物、木箱还是玩家。\r\n\r\n## 组合优先\r\n\r\n深继承容易变脆：\r\n\r\n```text\r\nEnemy\r\n  FlyingEnemy\r\n    FireFlyingEnemy\r\n      BossFireFlyingEnemy\r\n```\r\n\r\n组合更灵活：\r\n\r\n```text\r\nEnemy + FlyMovement + FireAttack + BossStats\r\n```\r\n\r\nUnity 的组件模型本身就是组合思维：一个 GameObject 通过多个 Component 获得能力。\r\n\r\n## 常见建议\r\n\r\n- 不要为了复用两行代码就继承。\r\n- 继承层级超过 2-3 层时要警惕。\r\n- 接口命名通常以 `I` 开头，如 `IUsable`、`ISaveable`。\r\n- 接口应该小而清楚，不要做成“万能接口”。\r\n\r\n## 参考资料\r\n\r\n- C# classes: https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/classes\r\n- C# language reference: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/\r\n"
      },
      {
        "slug": "C#/进阶/05-集合泛型与迭代器",
        "folders": [
          "C#",
          "进阶"
        ],
        "fileName": "05-集合泛型与迭代器.md",
        "title": "集合、泛型与迭代器",
        "date": "2026-06",
        "tags": [
          "C#",
          "泛型",
          "集合"
        ],
        "excerpt": "集合是业务代码最常用的工具之一。泛型让集合在复用的同时保持类型安全。你不需要记住所有集合，但必须知道常见集合的适用场景。\r\n\r\n## List<T>\r\n\r\n`List<T>` 是动态数组，适合按顺序存储元素：\r\n\r\n```csharp\r\nvar items = new List<Item>();\r\n",
        "content": "# 集合、泛型与迭代器\r\n> 2026-06 | C# · 泛型 · 集合\r\n\r\n集合是业务代码最常用的工具之一。泛型让集合在复用的同时保持类型安全。你不需要记住所有集合，但必须知道常见集合的适用场景。\r\n\r\n## List<T>\r\n\r\n`List<T>` 是动态数组，适合按顺序存储元素：\r\n\r\n```csharp\r\nvar items = new List<Item>();\r\nitems.Add(new Item(\"Potion\"));\r\nitems.RemoveAt(0);\r\n```\r\n\r\n适合：\r\n\r\n- 需要保持顺序。\r\n- 经常按索引访问。\r\n- 元素数量会变化。\r\n\r\n不适合：\r\n\r\n- 经常按 key 查找。\r\n- 经常在中间插入和删除大量元素。\r\n\r\n## Dictionary<TKey, TValue>\r\n\r\n字典通过 key 查找 value：\r\n\r\n```csharp\r\nvar itemMap = new Dictionary<string, Item>();\r\nitemMap[\"potion\"] = new Item(\"Potion\");\r\n\r\nif (itemMap.TryGetValue(\"potion\", out var item))\r\n{\r\n    Console.WriteLine(item.Name);\r\n}\r\n```\r\n\r\n推荐用 `TryGetValue`，避免 key 不存在时抛异常。\r\n\r\n## HashSet<T>\r\n\r\n集合用于去重和快速判断存在：\r\n\r\n```csharp\r\nvar unlockedIds = new HashSet<string>();\r\nunlockedIds.Add(\"skill_fireball\");\r\n\r\nif (unlockedIds.Contains(\"skill_fireball\"))\r\n{\r\n    Console.WriteLine(\"Unlocked\");\r\n}\r\n```\r\n\r\n适合保存“是否拥有某个东西”。\r\n\r\n## Queue<T> 与 Stack<T>\r\n\r\n队列先进先出：\r\n\r\n```csharp\r\nvar queue = new Queue<string>();\r\nqueue.Enqueue(\"A\");\r\nqueue.Enqueue(\"B\");\r\nConsole.WriteLine(queue.Dequeue()); // A\r\n```\r\n\r\n栈后进先出：\r\n\r\n```csharp\r\nvar stack = new Stack<string>();\r\nstack.Push(\"A\");\r\nstack.Push(\"B\");\r\nConsole.WriteLine(stack.Pop()); // B\r\n```\r\n\r\n队列适合任务排队，栈适合撤销、状态回退、深度优先遍历。\r\n\r\n## 泛型方法\r\n\r\n泛型不只用于集合，也能用于方法：\r\n\r\n```csharp\r\nT PickRandom<T>(IReadOnlyList<T> source)\r\n{\r\n    int index = Random.Shared.Next(source.Count);\r\n    return source[index];\r\n}\r\n```\r\n\r\n`T` 代表调用时才确定的类型。\r\n\r\n## 泛型约束\r\n\r\n约束可以告诉编译器 T 必须满足什么条件：\r\n\r\n```csharp\r\nT Create<T>() where T : new()\r\n{\r\n    return new T();\r\n}\r\n```\r\n\r\n常见约束：\r\n\r\n- `where T : class`\r\n- `where T : struct`\r\n- `where T : SomeBaseClass`\r\n- `where T : ISomeInterface`\r\n- `where T : new()`\r\n\r\n## IEnumerable<T> 与迭代器\r\n\r\n`IEnumerable<T>` 表示“可以被枚举的一串东西”。\r\n\r\n```csharp\r\nIEnumerable<int> GetEvenNumbers(int max)\r\n{\r\n    for (int i = 0; i <= max; i++)\r\n    {\r\n        if (i % 2 == 0)\r\n        {\r\n            yield return i;\r\n        }\r\n    }\r\n}\r\n```\r\n\r\n`yield return` 会生成迭代器。它不是一次性返回所有结果，而是在遍历时逐个产出。\r\n\r\n## Unity 中的注意点\r\n\r\n- `List<T>` 是 Unity 代码里最常见的集合。\r\n- Inspector 对泛型和复杂集合的序列化支持有限，要了解 Unity 序列化规则。\r\n- 热路径里频繁创建临时集合会产生 GC。\r\n- `foreach`、LINQ、闭包是否分配，要结合 Unity 版本和实际 Profiler 判断。\r\n\r\n## 参考资料\r\n\r\n- Programming concepts: https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/\r\n- C# language reference: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/\r\n- Unity serialization rules: https://docs.unity3d.com/6000.3/Documentation/Manual/script-serialization-rules.html\r\n"
      },
      {
        "slug": "C#/进阶/06-委托事件Lambda",
        "folders": [
          "C#",
          "进阶"
        ],
        "fileName": "06-委托事件Lambda.md",
        "title": "委托、事件与 Lambda",
        "date": "2026-06",
        "tags": [
          "C#",
          "委托",
          "事件"
        ],
        "excerpt": "委托、事件和 Lambda 是 C# 处理“回调”的核心。它们让发送者不需要知道接收者是谁，只需要在某个时机通知出去。\r\n\r\n## 委托是什么\r\n\r\n委托是一种“方法类型”。它规定一个方法需要什么参数、返回什么结果。\r\n\r\n```csharp\r\npublic delegate int DamageF",
        "content": "# 委托、事件与 Lambda\r\n> 2026-06 | C# · 委托 · 事件\r\n\r\n委托、事件和 Lambda 是 C# 处理“回调”的核心。它们让发送者不需要知道接收者是谁，只需要在某个时机通知出去。\r\n\r\n## 委托是什么\r\n\r\n委托是一种“方法类型”。它规定一个方法需要什么参数、返回什么结果。\r\n\r\n```csharp\r\npublic delegate int DamageFormula(int attack, int defense);\r\n```\r\n\r\n符合签名的方法都能赋给它：\r\n\r\n```csharp\r\nint NormalDamage(int attack, int defense)\r\n{\r\n    return Math.Max(attack - defense, 1);\r\n}\r\n\r\nDamageFormula formula = NormalDamage;\r\nint damage = formula(20, 5);\r\n```\r\n\r\n## Action 与 Func\r\n\r\n实际项目里更常用内置委托：\r\n\r\n```csharp\r\nAction onComplete;\r\nAction<int> onHpChanged;\r\nFunc<int, int, int> calculateDamage;\r\n```\r\n\r\n- `Action`：无返回值。\r\n- `Func`：有返回值，最后一个泛型参数是返回类型。\r\n\r\n## Lambda 表达式\r\n\r\nLambda 用来写短函数：\r\n\r\n```csharp\r\nFunc<int, int, int> add = (a, b) => a + b;\r\n```\r\n\r\n集合操作里很常见：\r\n\r\n```csharp\r\nvar lowHpEnemies = enemies.Where(enemy => enemy.Hp < 30);\r\n```\r\n\r\n## 事件\r\n\r\n事件是受限制的委托。外部可以订阅和取消订阅，但不能随便触发。\r\n\r\n```csharp\r\npublic class Health\r\n{\r\n    public event Action<int> HpChanged;\r\n\r\n    private int hp;\r\n\r\n    public void SetHp(int value)\r\n    {\r\n        hp = value;\r\n        HpChanged?.Invoke(hp);\r\n    }\r\n}\r\n```\r\n\r\n订阅：\r\n\r\n```csharp\r\nhealth.HpChanged += UpdateHpBar;\r\n```\r\n\r\n取消订阅：\r\n\r\n```csharp\r\nhealth.HpChanged -= UpdateHpBar;\r\n```\r\n\r\n## 为什么事件重要\r\n\r\n假设血量变化后要更新 UI、播放音效、触发红屏、检查死亡。如果 `Health` 直接引用所有系统，会很耦合。\r\n\r\n事件能让 `Health` 只负责通知：\r\n\r\n```text\r\nHealth 说：HP 变了\r\nUI、Audio、DeathChecker 自己决定是否响应\r\n```\r\n\r\n## Unity 中的事件习惯\r\n\r\n常见用法：\r\n\r\n```csharp\r\nprivate void OnEnable()\r\n{\r\n    player.Health.HpChanged += OnHpChanged;\r\n}\r\n\r\nprivate void OnDisable()\r\n{\r\n    player.Health.HpChanged -= OnHpChanged;\r\n}\r\n```\r\n\r\n在 `OnDisable` 里取消订阅很重要，否则对象销毁或禁用后仍可能收到回调。\r\n\r\n## 闭包陷阱\r\n\r\nLambda 会捕获外部变量：\r\n\r\n```csharp\r\nfor (int i = 0; i < buttons.Count; i++)\r\n{\r\n    int index = i;\r\n    buttons[i].onClick.AddListener(() => Select(index));\r\n}\r\n```\r\n\r\n在循环里建议复制一份局部变量，避免所有回调都引用同一个变量。\r\n\r\n## 小练习\r\n\r\n写一个 `Inventory`：\r\n\r\n- 添加物品时触发 `ItemAdded` 事件。\r\n- UI 订阅这个事件并刷新。\r\n- 移除 UI 时取消订阅。\r\n\r\n## 参考资料\r\n\r\n- C# language reference: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/\r\n- Programming concepts: https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/\r\n"
      },
      {
        "slug": "C#/进阶/07-LINQ查询思维",
        "folders": [
          "C#",
          "进阶"
        ],
        "fileName": "07-LINQ查询思维.md",
        "title": "LINQ 查询思维",
        "date": "2026-06",
        "tags": [
          "C#",
          "LINQ",
          "集合"
        ],
        "excerpt": "LINQ 让你用统一的方式处理集合：筛选、映射、排序、分组、聚合。它的价值不是“少写几行代码”，而是让数据变换的意图更清楚。\r\n\r\n## 基本模型\r\n\r\nLINQ 通常由几个动作组成：\r\n\r\n- `Where`：筛选。\r\n- `Select`：映射。\r\n- `OrderBy` / `OrderByD",
        "content": "# LINQ 查询思维\r\n> 2026-06 | C# · LINQ · 集合\r\n\r\nLINQ 让你用统一的方式处理集合：筛选、映射、排序、分组、聚合。它的价值不是“少写几行代码”，而是让数据变换的意图更清楚。\r\n\r\n## 基本模型\r\n\r\nLINQ 通常由几个动作组成：\r\n\r\n- `Where`：筛选。\r\n- `Select`：映射。\r\n- `OrderBy` / `OrderByDescending`：排序。\r\n- `GroupBy`：分组。\r\n- `Any` / `All`：判断。\r\n- `FirstOrDefault`：找一个。\r\n- `ToList` / `ToArray`：立即生成集合。\r\n\r\n## Where\r\n\r\n```csharp\r\nvar aliveEnemies = enemies.Where(enemy => enemy.IsAlive);\r\n```\r\n\r\n这表示“从敌人列表里筛出活着的敌人”。\r\n\r\n## Select\r\n\r\n```csharp\r\nvar names = enemies.Select(enemy => enemy.Name);\r\n```\r\n\r\n这表示“把敌人集合映射成名字集合”。\r\n\r\n## 排序\r\n\r\n```csharp\r\nvar sorted = enemies\r\n    .OrderByDescending(enemy => enemy.Level)\r\n    .ThenBy(enemy => enemy.Name)\r\n    .ToList();\r\n```\r\n\r\n先按等级降序，再按名字升序。\r\n\r\n## 查找\r\n\r\n```csharp\r\nvar boss = enemies.FirstOrDefault(enemy => enemy.Type == EnemyType.Boss);\r\n\r\nif (boss != null)\r\n{\r\n    boss.EnterPhaseTwo();\r\n}\r\n```\r\n\r\n`First` 找不到会抛异常，`FirstOrDefault` 找不到返回默认值。业务上允许没有结果时，用 `FirstOrDefault` 更安全。\r\n\r\n## 判断\r\n\r\n```csharp\r\nbool hasBoss = enemies.Any(enemy => enemy.Type == EnemyType.Boss);\r\nbool allDead = enemies.All(enemy => !enemy.IsAlive);\r\n```\r\n\r\n`Any` 和 `All` 很适合表达条件。\r\n\r\n## 分组\r\n\r\n```csharp\r\nvar groups = items.GroupBy(item => item.Rarity);\r\n\r\nforeach (var group in groups)\r\n{\r\n    Console.WriteLine(group.Key);\r\n    foreach (var item in group)\r\n    {\r\n        Console.WriteLine(item.Name);\r\n    }\r\n}\r\n```\r\n\r\n适合背包、排行榜、日志统计等场景。\r\n\r\n## 延迟执行\r\n\r\n很多 LINQ 查询不会立刻执行：\r\n\r\n```csharp\r\nvar query = enemies.Where(enemy => enemy.IsAlive);\r\n```\r\n\r\n只有遍历时才真正执行。如果你想固定结果，调用：\r\n\r\n```csharp\r\nvar list = query.ToList();\r\n```\r\n\r\n理解延迟执行很重要，否则数据变化后，查询结果可能和你以为的不一样。\r\n\r\n## Unity 中谨慎使用\r\n\r\nLINQ 可读性很好，但某些写法会产生分配。建议：\r\n\r\n- 编辑器工具、初始化流程、非热路径可以放心用。\r\n- `Update`、物理回调、大量对象循环里谨慎使用。\r\n- 性能敏感代码先写清楚，再用 Profiler 决定是否优化。\r\n\r\n## 常见替代\r\n\r\n热路径中可以用普通循环：\r\n\r\n```csharp\r\nEnemy nearest = null;\r\nfloat nearestDistance = float.MaxValue;\r\n\r\nforeach (var enemy in enemies)\r\n{\r\n    float distance = Vector3.Distance(playerPosition, enemy.Position);\r\n    if (distance < nearestDistance)\r\n    {\r\n        nearest = enemy;\r\n        nearestDistance = distance;\r\n    }\r\n}\r\n```\r\n\r\n这比一串 LINQ 更啰嗦，但更容易控制分配和中间过程。\r\n\r\n## 参考资料\r\n\r\n- LINQ overview in C# guide: https://learn.microsoft.com/en-us/dotnet/csharp/\r\n- Programming concepts: https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/\r\n"
      },
      {
        "slug": "C#/进阶/08-异常调试与资源释放",
        "folders": [
          "C#",
          "进阶"
        ],
        "fileName": "08-异常调试与资源释放.md",
        "title": "异常、调试与资源释放",
        "date": "2026-06",
        "tags": [
          "C#",
          "异常",
          "调试"
        ],
        "excerpt": "写程序不只是写成功路径。真正可靠的代码，需要认真处理失败路径：参数错误、文件不存在、网络失败、对象为空、资源未释放。\r\n\r\n## try / catch\r\n\r\n```csharp\r\ntry\r\n{\r\n    LoadConfig();\r\n}\r\ncatch (FileNotFoundException ",
        "content": "# 异常、调试与资源释放\r\n> 2026-06 | C# · 异常 · 调试\r\n\r\n写程序不只是写成功路径。真正可靠的代码，需要认真处理失败路径：参数错误、文件不存在、网络失败、对象为空、资源未释放。\r\n\r\n## try / catch\r\n\r\n```csharp\r\ntry\r\n{\r\n    LoadConfig();\r\n}\r\ncatch (FileNotFoundException ex)\r\n{\r\n    Console.WriteLine($\"Config missing: {ex.Message}\");\r\n}\r\ncatch (Exception ex)\r\n{\r\n    Console.WriteLine($\"Unexpected error: {ex}\");\r\n}\r\n```\r\n\r\n捕获异常时，优先捕获具体异常。不要一上来就吞掉所有 `Exception`。\r\n\r\n## 什么时候抛异常\r\n\r\n异常适合表达“不应该发生的失败”或“调用方必须处理的失败”。\r\n\r\n```csharp\r\npublic Item GetItem(string id)\r\n{\r\n    if (!items.TryGetValue(id, out var item))\r\n    {\r\n        throw new KeyNotFoundException($\"Item not found: {id}\");\r\n    }\r\n\r\n    return item;\r\n}\r\n```\r\n\r\n如果失败是业务常态，可以用 `TryXxx`：\r\n\r\n```csharp\r\npublic bool TryGetItem(string id, out Item item)\r\n{\r\n    return items.TryGetValue(id, out item);\r\n}\r\n```\r\n\r\n## finally\r\n\r\n`finally` 无论成功还是失败都会执行：\r\n\r\n```csharp\r\ntry\r\n{\r\n    Open();\r\n    Work();\r\n}\r\nfinally\r\n{\r\n    Close();\r\n}\r\n```\r\n\r\n它适合清理资源。\r\n\r\n## using\r\n\r\n实现 `IDisposable` 的对象可以用 `using` 自动释放：\r\n\r\n```csharp\r\nusing var stream = File.OpenRead(path);\r\nusing var reader = new StreamReader(stream);\r\nstring text = reader.ReadToEnd();\r\n```\r\n\r\n文件、网络、数据库连接等资源都要注意释放。\r\n\r\n## 不要吞异常\r\n\r\n危险写法：\r\n\r\n```csharp\r\ntry\r\n{\r\n    Save();\r\n}\r\ncatch\r\n{\r\n}\r\n```\r\n\r\n这会让错误消失，调试时非常痛苦。至少记录日志：\r\n\r\n```csharp\r\ncatch (Exception ex)\r\n{\r\n    logger.LogError(ex);\r\n    throw;\r\n}\r\n```\r\n\r\n`throw;` 会保留原始堆栈，`throw ex;` 会重置堆栈，不推荐。\r\n\r\n## Debug 与断点\r\n\r\n调试时重点看：\r\n\r\n- 当前变量值是否符合预期。\r\n- 分支是否走到了你以为的路径。\r\n- 集合数量是否正确。\r\n- 对象是否为 `null`。\r\n- 方法调用顺序是否合理。\r\n\r\nUnity 中可以配合：\r\n\r\n```csharp\r\nDebug.Log(\"message\");\r\nDebug.LogWarning(\"warning\");\r\nDebug.LogError(\"error\");\r\n```\r\n\r\n但不要让日志成为唯一调试方式。断点和调用栈更可靠。\r\n\r\n## 参数校验\r\n\r\n公共方法应该保护自己的输入：\r\n\r\n```csharp\r\npublic void AddItem(Item item)\r\n{\r\n    ArgumentNullException.ThrowIfNull(item);\r\n    items.Add(item);\r\n}\r\n```\r\n\r\n越靠近边界的代码，越应该做校验。\r\n\r\n## 参考资料\r\n\r\n- C# language reference: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/\r\n- Asynchronous file access: https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/using-async-for-file-access\r\n"
      },
      {
        "slug": "C#/进阶/09-异步编程",
        "folders": [
          "C#",
          "进阶"
        ],
        "fileName": "09-异步编程.md",
        "title": "异步编程：async / await",
        "date": "2026-06",
        "tags": [
          "C#",
          "async",
          "Task"
        ],
        "excerpt": "异步编程用于处理“等待”：网络请求、文件 IO、数据库、延迟任务。它的目标不是让代码变快，而是在等待期间不阻塞当前线程。\r\n\r\n## Task\r\n\r\n`Task` 表示一个异步操作：\r\n\r\n```csharp\r\nTask SaveAsync();\r\nTask<string> LoadTextAsyn",
        "content": "# 异步编程：async / await\r\n> 2026-06 | C# · async · Task\r\n\r\n异步编程用于处理“等待”：网络请求、文件 IO、数据库、延迟任务。它的目标不是让代码变快，而是在等待期间不阻塞当前线程。\r\n\r\n## Task\r\n\r\n`Task` 表示一个异步操作：\r\n\r\n```csharp\r\nTask SaveAsync();\r\nTask<string> LoadTextAsync();\r\n```\r\n\r\n- `Task`：异步完成后没有返回值。\r\n- `Task<T>`：异步完成后返回 `T`。\r\n\r\n## async / await\r\n\r\n```csharp\r\nasync Task<string> LoadConfigAsync(string path)\r\n{\r\n    string text = await File.ReadAllTextAsync(path);\r\n    return text;\r\n}\r\n```\r\n\r\n`await` 会暂停当前方法，等任务完成后继续执行。它让异步代码看起来像同步流程。\r\n\r\n## async 方法的执行\r\n\r\n一个 `async` 方法在遇到第一个未完成的 `await` 之前，会同步执行。遇到 `await` 后，控制权返回给调用方，任务完成后再继续。\r\n\r\n这意味着：\r\n\r\n```csharp\r\nasync Task DoWorkAsync()\r\n{\r\n    Console.WriteLine(\"A\");\r\n    await Task.Delay(1000);\r\n    Console.WriteLine(\"B\");\r\n}\r\n```\r\n\r\n调用后会先打印 A，约 1 秒后打印 B。\r\n\r\n## 不要滥用 async void\r\n\r\n通常不要写：\r\n\r\n```csharp\r\nasync void Load()\r\n{\r\n}\r\n```\r\n\r\n更推荐：\r\n\r\n```csharp\r\nasync Task LoadAsync()\r\n{\r\n}\r\n```\r\n\r\n`async void` 的异常很难被调用方捕获。它主要用于事件处理器。\r\n\r\n## 并发等待\r\n\r\n顺序等待：\r\n\r\n```csharp\r\nvar a = await LoadAAsync();\r\nvar b = await LoadBAsync();\r\n```\r\n\r\n并发等待：\r\n\r\n```csharp\r\nTask<string> taskA = LoadAAsync();\r\nTask<string> taskB = LoadBAsync();\r\n\r\nstring[] results = await Task.WhenAll(taskA, taskB);\r\n```\r\n\r\n如果两个任务互不依赖，并发等待通常更合适。\r\n\r\n## 取消\r\n\r\n长任务应该支持取消：\r\n\r\n```csharp\r\nasync Task DownloadAsync(CancellationToken token)\r\n{\r\n    await httpClient.GetAsync(url, token);\r\n}\r\n```\r\n\r\n调用方可以通过 `CancellationTokenSource` 取消任务。\r\n\r\n## 异常传播\r\n\r\n异步方法里的异常会保存在 Task 中，await 时重新抛出：\r\n\r\n```csharp\r\ntry\r\n{\r\n    await LoadAsync();\r\n}\r\ncatch (Exception ex)\r\n{\r\n    Console.WriteLine(ex.Message);\r\n}\r\n```\r\n\r\n所以不要忘记 await，否则异常可能变得难追踪。\r\n\r\n## Unity 与 async\r\n\r\nUnity 里可以使用 `async` / `await`，但要注意：\r\n\r\n- Unity API 大多只能在主线程访问。\r\n- `Task.Run` 适合 CPU 工作，但不能在后台线程操作 GameObject。\r\n- 协程更适合分帧流程、等待帧、等待 Unity YieldInstruction。\r\n- 异步更适合文件、网络、平台 SDK 等 IO。\r\n\r\n## 参考资料\r\n\r\n- Asynchronous programming: https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/\r\n- Async scenarios: https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/async-scenarios\r\n- Task asynchronous programming model: https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/task-asynchronous-programming-model\r\n- await operator: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/await\r\n"
      },
      {
        "slug": "Unity学习/基础/00-Unity学习路线",
        "folders": [
          "Unity学习",
          "基础"
        ],
        "fileName": "00-Unity学习路线.md",
        "title": "Unity 学习路线",
        "date": "2026-06",
        "tags": [
          "Unity",
          "学习路线",
          "游戏开发"
        ],
        "excerpt": "这套笔记面向有一年左右 Unity 实际项目经验的开发者。目标不是从零入门，而是把零散经验串成体系：知道为什么这么做、有哪些替代方案、什么时候该用哪种。\n\n## 学习目标\n\n- 理解 Unity 编辑器的设计意图：场景、预制体、资源、包管理器各自解决什么问题。\n- 掌握 GameObject / C",
        "content": "# Unity 学习路线\n> 2026-06 | Unity · 学习路线 · 游戏开发\n\n这套笔记面向有一年左右 Unity 实际项目经验的开发者。目标不是从零入门，而是把零散经验串成体系：知道为什么这么做、有哪些替代方案、什么时候该用哪种。\n\n## 学习目标\n\n- 理解 Unity 编辑器的设计意图：场景、预制体、资源、包管理器各自解决什么问题。\n- 掌握 GameObject / Component 架构的本质——它不是继承树，而是组合模式。\n- 熟练运用 MonoBehaviour 生命周期，知道每帧和事件性回调的区别。\n- 能用 UGUI 搭建响应式界面，理解 Canvas 三种渲染模式和 RectTransform 锚定。\n- 理解 Animator 状态机、BlendTree 和动画事件，能拆分动画逻辑。\n- 能用协程处理分帧逻辑，但知道它和 C# 异步不是一回事。\n- 掌握 Addressables 资源管理，替代 Resources 和 AssetBundle 的历史方案。\n- 理解性能优化的核心指标：DrawCall、GC、CPU/GPU 瓶颈、Profiler 使用。\n- 知道微信小游戏打包的特殊限制和适配策略。\n\n## 推荐顺序\n\n1. 编辑器与项目结构——先把「地盘」摸清楚。\n2. GameObject 与 Component——理解 Unity 的架构哲学。\n3. MonoBehaviour 生命周期——脚本运行的节奏。\n4. Transform 与坐标系——空间操作基础。\n5. 输入系统——从旧 Input 到新 Input System。\n6. UGUI 与界面——做 UI 逃不掉的知识。\n7. 动画系统——Animator 状态机实战。\n8. 物理系统——刚体、碰撞与射线。\n9. 资源管理——Addressables 实战。\n10. 场景管理——加载、卸载与过渡。\n11. Spine 骨骼动画——2D 项目的动画管线。\n12. 协程与异步——分帧执行与等待。\n13. 性能优化——Profiler 驱动的优化流程。\n\n## 怎么学\n\n- 每篇笔记对应一个实战问题。先遇到问题，再回来看笔记。\n- 不要背 API。理解设计意图比记住参数更重要。\n- 每个概念都动手验证一次——在空项目里建场景、挂脚本、跑起来。\n- Unity 官方文档和 Scripting API 是最好的参考，这些笔记是「带路的地图」。\n\n## 一个贯穿练习\n\n做一个「打砖块」小游戏，贯穿大部分知识点：\n\n- 场景搭建 + 预制体（砖块、球、挡板）\n- 刚体物理 + 碰撞检测\n- UGUI 分数显示和菜单\n- 场景切换（开始菜单 → 游戏 → 结算）\n- Addressables 加载音效和贴图\n- 用动画系统做砖块破碎效果\n- 用 Profiler 检查性能热点\n\n这个练习不复杂，但能覆盖 80% 的实际开发场景。\n"
      },
      {
        "slug": "Unity学习/基础/01-Unity编辑器与项目结构",
        "folders": [
          "Unity学习",
          "基础"
        ],
        "fileName": "01-Unity编辑器与项目结构.md",
        "title": "Unity 编辑器与项目结构",
        "date": "2026-06",
        "tags": [
          "Unity",
          "编辑器",
          "项目结构"
        ],
        "excerpt": "Unity 编辑器不是「代码编辑器」，它是一个实时运行的场景编辑环境。理解它的布局设计意图，能大幅减少找按钮的时间和对第三方教程的依赖。\n\n## 五大视图：谁管什么\n\n| 视图 | 中译 | 职责 |\n|---|---|---|\n| Hierarchy | 层级 | 当前场景所有 GameObjec",
        "content": "# Unity 编辑器与项目结构\n> 2026-06 | Unity · 编辑器 · 项目结构\n\nUnity 编辑器不是「代码编辑器」，它是一个实时运行的场景编辑环境。理解它的布局设计意图，能大幅减少找按钮的时间和对第三方教程的依赖。\n\n## 五大视图：谁管什么\n\n| 视图 | 中译 | 职责 |\n|---|---|---|\n| Hierarchy | 层级 | 当前场景所有 GameObject 的树状列表 |\n| Scene | 场景 | 3D/2D 可视化编辑区域 |\n| Game | 游戏 | 实际运行画面预览，按摄像机渲染 |\n| Inspector | 检视器 | 选中对象的 Component 详情面板 |\n| Project | 项目 | 文件浏览器——所有资源都在这里 |\n\nHierarchy 决定「什么东西在当前场景」；Inspector 决定「被选中的东西有哪些属性」；Project 窗口是「还没放进场景的一切」。\n\n快捷键是最值回票价的投资：\n- `Q W E R T` 切换视野工具（手型/平移/旋转/缩放/矩形）\n- `F` 聚焦选中对象\n- `Ctrl+Shift+F` 将选中对象贴到场景视图当前视角\n\n## 项目目录约定\n\n一个标准项目的根目录大致如下：\n\n```\nAssets/\n├── Animations/       # 动画控制器、动画片段\n├── Audio/            # 音频\n├── Prefabs/          # 预制体\n├── Resources/        # 动态加载（不推荐大量使用）\n├── Scenes/           # 场景文件\n├── Scripts/          # C# 脚本\n├── Textures/         # 贴图\n├── ThirdParty/       # 第三方插件\n└── UI/               # UGUI 资源\n```\n\n这是约定，不是硬性要求。但团队项目统一目录结构能显著降低找文件的心智成本。\n\nPackages 目录不由你手动管理——通过 Package Manager 添加的包（Addressables、Input System、Timeline 等）都放在这里。\n\n## 场景（Scene）\n\n场景是一个独立的世界空间。一个游戏通常由多个场景组成：菜单、关卡 1、关卡 2、结算。\n\n场景文件（`.unity`）是 YAML 格式的文本，可以用版本控制管理。多人协作时的冲突通常集中在场景文件上——预制体能缓解这个问题。\n\n单个场景不要过大。场景越大，打开越慢，多人合并越容易冲突。常见的策略是「场景叠加」：一个主场景 + 多个子场景（通过 Multi-Scene Editing）。\n\n## 预制体（Prefab）\n\n预制体是 GameObject 的模板。你在工厂里设计好蓝图（Prefab），运行时按需复制出实例。\n\n三种操作：\n- **Prefab 变更**：在 Prefab Mode 里修改模板，所有实例同步更新。\n- **Override**：实例上的单独修改覆盖模板值。\n- **Unpack**：断开预制体关联，变成普通 GameObject。\n\n预制体嵌套（Nested Prefab）在 2018.3 引入：一个预制体可以包含另一个预制体。复杂 UI 和角色组件常用。\n\n## 资源（Asset）与 Meta 文件\n\n`Assets/` 下每个文件和目录都有一个对应的 `.meta` 文件。`.meta` 记录 GUID（全局唯一标识符）、导入设置等。\n\n永远把 `.meta` 一起提交到版本控制。如果只提交了贴图没提交 `.meta`，别人的引擎可能找不到资源引用——GUID 不匹配。\n\n## Package Manager\n\nUnity 通过 Package Manager 管理功能模块：\n- `com.unity.addressables`（资源管理）\n- `com.unity.inputsystem`（新输入系统）\n- `com.unity.textmeshpro`（文字渲染）\n- `com.unity.timeline`（时间轴）\n\n把 Package Manager 当成 Unity 的「包管理器」——按需安装，不用的不装，保持项目轻量。\n\n## Build Settings\n\n`File → Build Settings` 决定输出平台：PC、Android、iOS、WebGL。平台切换会触发资源重新导入（纹理格式等会根据平台变化），第一次通常较慢。\n\n微信小游戏本质上是 WebGL 平台 + 微信 SDK 封装。\n"
      },
      {
        "slug": "Unity学习/基础/02-GameObject与Component模型",
        "folders": [
          "Unity学习",
          "基础"
        ],
        "fileName": "02-GameObject与Component模型.md",
        "title": "GameObject 与 Component 模型",
        "date": "2026-06",
        "tags": [
          "Unity",
          "架构",
          "组合模式"
        ],
        "excerpt": "Unity 的核心架构就两个词：GameObject 和 Component。理解它们的本质，比背会一百个 API 更重要。\n\n## 不是继承树，是组合\n\n无论从哪里开始学 Unity，第一件要记住的事：\n\n> GameObject 本身几乎什么都不能做。它的所有功能都来自挂在上面的 Compone",
        "content": "# GameObject 与 Component 模型\n> 2026-06 | Unity · 架构 · 组合模式\n\nUnity 的核心架构就两个词：GameObject 和 Component。理解它们的本质，比背会一百个 API 更重要。\n\n## 不是继承树，是组合\n\n无论从哪里开始学 Unity，第一件要记住的事：\n\n> GameObject 本身几乎什么都不能做。它的所有功能都来自挂在上面的 Component。\n\n一个「敌人」在 Unity 里不是 Enemy 类。它是：\n- 一个 GameObject（只有一个名字和 Transform）\n- 上面挂着 SpriteRenderer（决定长什么样）\n- 挂着 Collider2D（决定碰撞区域）\n- 挂着你写的 EnemyController 脚本（决定行为逻辑）\n- 可能还挂着 Animator（播放动画）\n\n```\nGameObject \"Enemy01\"\n  ├── Transform\n  ├── SpriteRenderer\n  ├── BoxCollider2D\n  ├── EnemyController (你的脚本)\n  └── Animator\n```\n\n这和传统的 OOP 继承完全不同。你不会写 `class Enemy extends GameObject`。你写 `class EnemyController : MonoBehaviour`，然后把它「挂」到一个 GameObject 上。\n\n## GameObject 的三个核心操作\n\n**查找**：\n```csharp\nGameObject.Find(\"Player\");           // 按名称，慢，尽量避免\nGameObject.FindWithTag(\"Player\");    // 按标签，稍好但仍需遍历\ntransform.Find(\"ChildName\");         // 只找直接子级，较快\n```\n\n**激活/失活**：\n```csharp\ngameObject.SetActive(true);\ngameObject.SetActive(false);   // 整个对象及所有子级都失活\n```\n\n**实例化/销毁**：\n```csharp\nInstantiate(prefab, position, rotation);\nDestroy(gameObject);\nDestroy(gameObject, 2f);        // 2 秒后销毁\n```\n\n## Component 的操作\n\n获取组件是日常操作中最频繁的事情：\n\n```csharp\n// 从当前 GameObject 上拿\nvar sr = GetComponent<SpriteRenderer>();\nvar anim = GetComponent<Animator>();\n\n// 安全写法（如果组件不存在返回 null）\nif (TryGetComponent<Collider>(out var col))\n{\n    // 使用 col\n}\n\n// 用 RequireComponent 保证依赖\n[RequireComponent(typeof(Rigidbody2D))]\npublic class EnemyController : MonoBehaviour { }\n```\n\n常见坑：\n- `GetComponent` 在组件不存在时返回 `null`，它不是抛异常。\n- `GetComponentInChildren` 包含自身，且默认不搜索非激活对象。\n- `GetComponent` 有 GC 分配？不，它是引用类型的查找，本身不分配，但装箱调用可能在 IL2CPP 下有开销。\n\n## Transform\n\n每个 GameObject 都有一个 Transform，不能删除，也不能额外添加第二个。\n\n```csharp\n// 世界坐标（相对于原点）\ntransform.position = new Vector3(0, 0, 0);\n\n// 本地坐标（相对于父对象）\ntransform.localPosition = new Vector3(5, 0, 0);\n\n// 层级操作\ntransform.SetParent(parentTransform);\ntransform.SetParent(null);           // 移到根级\n```\n\n## Tag 和 Layer\n\n- **Tag**：分类查找用。比如 \"Player\"、\"Enemy\"、\"Pickup\"。适合搜索和识别。\n- **Layer**：渲染和物理计算用。决定哪些对象之间会发生碰撞、被哪个摄像机渲染。\n\nTag 是字符串比较，新版本也支持 int 形式的 `CompareTag`，更快。\n\n```csharp\nif (other.CompareTag(\"Player\"))\n{\n    // ...\n}\n```\n\n## 组件间的消息传递\n\n同一 GameObject 上的两个组件怎么通信？常见三种方式：\n\n```csharp\n// 1. 直接 GetComponent\nvar health = GetComponent<Health>();\n\n// 2. Inspector 拖拽引用（推荐用于静态关系）\n[SerializeField] private Health health;\n\n// 3. UnityEvent（编辑器可视绑定）\npublic UnityEvent onDie;\n```\n\n跨 GameObject 通信的推荐方式：\n- 预制体内部用 Inspector 拖拽或 `GetComponent`\n- 同场景、常驻对象用 `FindObjectOfType`（慎用）或单例\n- 松耦合用事件总线或 ScriptableObject 事件通道\n\n## 不要在 Update 里 GetComponent\n\n这是 Unity 新人最常见的性能错误：\n\n```csharp\n// 错误示范\nvoid Update()\n{\n    var col = GetComponent<Collider>(); // 每帧都查一次，毫无意义\n}\n\n// 正确做法\nprivate Collider col;\n\nvoid Awake()\n{\n    col = GetComponent<Collider>();     // 只查一次，缓存引用\n}\n```\n\n`GetComponent` 在 Editor 里看起来很快，但在 IL2CPP 下真的有开销。缓存引用的原则适用于 `Camera.main`、`GameObject.Find` 等所有查找类操作。\n"
      },
      {
        "slug": "Unity学习/基础/03-MonoBehaviour生命周期",
        "folders": [
          "Unity学习",
          "基础"
        ],
        "fileName": "03-MonoBehaviour生命周期.md",
        "title": "MonoBehaviour 生命周期",
        "date": "2026-06",
        "tags": [
          "Unity",
          "生命周期",
          "回调顺序"
        ],
        "excerpt": "MonoBehaviour 不是普通的 C# 类。它的方法不是由你调用，而是由 Unity 引擎在你写好的时机自动调用。理解这些回调的先后顺序，是写出正确脚本的基础。\n\n## 完整回调顺序\n\n```\nAwake()\n  ↓\nOnEnable()\n  ↓\nStart()\n  ↓\n  ┌────────",
        "content": "# MonoBehaviour 生命周期\n> 2026-06 | Unity · 生命周期 · 回调顺序\n\nMonoBehaviour 不是普通的 C# 类。它的方法不是由你调用，而是由 Unity 引擎在你写好的时机自动调用。理解这些回调的先后顺序，是写出正确脚本的基础。\n\n## 完整回调顺序\n\n```\nAwake()\n  ↓\nOnEnable()\n  ↓\nStart()\n  ↓\n  ┌─────────────────────────┐\n  │  FixedUpdate()          │ ← 物理更新，与帧率无关\n  ├─────────────────────────┤\n  │  Update()               │ ← 每帧一次，帧率波动敏感\n  ├─────────────────────────┤\n  │  LateUpdate()           │ ← Update 之后、渲染之前\n  └─────────────────────────┘\n  ↑ 循环 ↑\n  ↓\nOnDisable()\n  ↓\nOnDestroy()\n```\n\n## Awake vs Start\n\n| 特性 | Awake | Start |\n|---|---|---|\n| 调用时机 | 对象实例化后立即调用 | 在第一帧 Update 之前 |\n| 非激活对象 | 不调用 | 不调用 |\n| 同类之间的顺序 | `scriptExecutionOrder` 或不确定 | `scriptExecutionOrder` 或不确定 |\n| 典型用途 | 初始化自身引用、GetComponent | 依赖外部对象的初始化 |\n\n**关键原则**：\n\n- Awake 做「自己的事」：`GetComponent`、设置默认值。\n- Start 做「建立联系的事」：从其他对象获取引用，因为其他对象的 Awake 已经完成了。\n\n```csharp\nprivate Rigidbody rb;\n\nvoid Awake()\n{\n    rb = GetComponent<Rigidbody>(); // 初始化自己的引用\n}\n\nvoid Start()\n{\n    // 此时可以安全地访问其他对象（它们的 Awake 已执行）\n    var player = FindObjectOfType<Player>();\n    if (player != null)\n    {\n        // 安全\n    }\n}\n```\n\n## Update、FixedUpdate、LateUpdate\n\n**Update**：每帧一次。帧率越高，调用越频繁。适合玩家输入、移动逻辑。\n\n**FixedUpdate**：固定时间间隔，默认 0.02s（50 次/秒）。适合物理计算。对 `Rigidbody` 的操作放这里。\n\n```csharp\nvoid FixedUpdate()\n{\n    rb.AddForce(Vector3.up * jumpForce); // 物理操作放这里\n}\n```\n\n**LateUpdate**：所有 Update 之后调用。适合「跟随」逻辑：\n\n```csharp\nvoid LateUpdate()\n{\n    // 摄像机跟随——等玩家移动完再跟\n    transform.position = player.position + offset;\n}\n```\n\n## OnEnable / OnDisable\n\n对象激活时调用 OnEnable，失活时调用 OnDisable。对象池复用时这对回调特别重要——你得确保对象重新激活时状态重置。\n\n```csharp\nvoid OnEnable()\n{\n    // 从对象池取回时重置血量和位置\n    hp = maxHp;\n    transform.position = spawnPoint;\n}\n\nvoid OnDisable()\n{\n    // 取消订阅事件，防止内存泄漏\n    EventBus.OnScoreChanged -= HandleScoreChanged;\n}\n```\n\n## OnDestroy\n\n对象被销毁时调用。适合做清理：注销事件、释放非托管资源。\n\n对象销毁后再访问它会怎样？Unity 做了特殊处理——它不是真的 null，而是被标记为「已销毁」的「伪 null」。这就是为什么你会看到 `gameObject != null` 在 Destroy 后返回 false——Unity 重载了 `==` 运算符。\n\n## 不要在 Awake/Start 里依赖执行顺序\n\n不同脚本的 Awake 执行顺序是不确定的（除非你在 Project Settings → Script Execution Order 里手动指定）。\n\n不要把初始化逻辑拆成「脚本 A 的 Start 依赖脚本 B 的 Awake 必须完成」——这是给自己埋雷。如果你想控制顺序，要么用 Script Execution Order，要么改成显式初始化：\n\n```csharp\n// 代替依赖隐式顺序\npublic class GameManager : MonoBehaviour\n{\n    public void Initialize()\n    {\n        // 手动控制初始化流程\n        playerManager.Init();\n        uiManager.Init();\n    }\n}\n```\n\n## 协程\n\n协程不是生命周期回调，但常被误解为多线程。\n\n```csharp\nIEnumerator FadeOut()\n{\n    float alpha = 1f;\n    while (alpha > 0)\n    {\n        alpha -= Time.deltaTime;\n        // 设置透明度\n        yield return null; // 等到下一帧\n    }\n}\n\nvoid Start()\n{\n    StartCoroutine(FadeOut());\n}\n```\n\n协程在每帧 Update 之后、LateUpdate 之前恢复执行（`yield return null` 的情况）。`yield return new WaitForSeconds(1)` 则等到指定时间后继续。\n\n协程依附于启动它的 MonoBehaviour——如果 GameObject 失活或脚本被禁用，协程也会停止。\n"
      },
      {
        "slug": "Unity学习/基础/04-Transform与坐标系",
        "folders": [
          "Unity学习",
          "基础"
        ],
        "fileName": "04-Transform与坐标系.md",
        "title": "Transform 与坐标系",
        "date": "2026-06",
        "tags": [
          "Unity",
          "Transform",
          "坐标系",
          "向量"
        ],
        "excerpt": "在 Unity 里，一切对象的空间属性——位置、旋转、缩放——都由 Transform 管理。一个 GameObject 可以没有渲染、没有逻辑、没有碰撞，但一定有一个 Transform。\n\n## Transform 的三个核心属性\n\n```csharp\ntransform.position;  ",
        "content": "# Transform 与坐标系\n> 2026-06 | Unity · Transform · 坐标系 · 向量\n\n在 Unity 里，一切对象的空间属性——位置、旋转、缩放——都由 Transform 管理。一个 GameObject 可以没有渲染、没有逻辑、没有碰撞，但一定有一个 Transform。\n\n## Transform 的三个核心属性\n\n```csharp\ntransform.position;   // 世界坐标\ntransform.rotation;   // 世界旋转（Quaternion）\ntransform.localScale; // 本地缩放\n```\n\n以及它们的本地版本（相对于父对象）：\n\n```csharp\ntransform.localPosition;\ntransform.localRotation;  // Quaternion\ntransform.localEulerAngles; // 欧拉角，调试用\n```\n\n一个常见陷阱：直接读写 `transform.rotation` 的 `.x` / `.y` / `.z`：\n\n```csharp\n// 错误——Quaternion 的 xyz 不是你理解的角度\ntransform.rotation.x = 45;\n\n// 正确\ntransform.rotation = Quaternion.Euler(0, 45, 0);\n```\n\n## 世界坐标与本地坐标\n\n世界坐标系是 Unity 场景中唯一的全局参考系。所有对象的 `.position` 都相对于场景原点。\n\n本地坐标系是相对于父对象（或者叫父节点）的坐标系。当你把 `Child` 放进 `Parent` 下面时：\n\n- `Child.transform.position` 返回它在世界中的坐标（跟 Hierachy 没关系）。\n- `Child.transform.localPosition` 返回它相对于 `Parent` 的偏移。\n\n移动对象时，问自己：想让它在世界里移动，还是相对于父对象偏移？\n\n```csharp\n// 世界坐标平移：不管父对象在哪，目标位置固定\ntransform.position = new Vector3(0, 5, 0);\n\n// 本地坐标偏移：相对于父对象移动\ntransform.localPosition = new Vector3(1, 0, 0);\n\n// 增量移动（世界方向）\ntransform.Translate(Vector3.forward * speed * Time.deltaTime, Space.World);\n```\n\n## 旋转\n\nUnity 内部用四元数（Quaternion）表示旋转，因为它在数学上稳定，没有万向节锁。但在 Inspector 里你看到的是欧拉角的三个角度（X, Y, Z）。\n\n```csharp\n// 设置绝对旋转\ntransform.rotation = Quaternion.Euler(0, 90, 0);\n\n// 增量旋转\ntransform.Rotate(Vector3.up * rotationSpeed * Time.deltaTime);\n\n// 看向目标\ntransform.LookAt(target);\n```\n\n二维游戏里，通常只需要绕 Z 轴旋转：\n\n```csharp\n// 面向鼠标\nVector3 diff = Camera.main.ScreenToWorldPoint(Input.mousePosition) - transform.position;\nfloat angle = Mathf.Atan2(diff.y, diff.x) * Mathf.Rad2Deg;\ntransform.rotation = Quaternion.Euler(0, 0, angle);\n```\n\n## 层级关系\n\n父子关系不只是编辑器里的虚线缩进——它影响了坐标和变换链。\n\n```csharp\ntransform.SetParent(other);            // 保持世界坐标不变\ntransform.SetParent(other, false);     // 保持世界坐标不变（默认）\ntransform.SetParent(other, true);      // 保持本地坐标不变\ntransform.SetParent(null);             // 移到根级\n```\n\n常见用途：\n- 武器挂到手上：武器是 GameObject 的子对象，跟随手移动。\n- UI 元素嵌套：按钮放在 Panel 里，Panel 一动，按钮自动跟着。\n- 对象池回收：先解除父子关系再放回池。\n\n## 向量计算基础\n\nTransform 相关的大部分逻辑本质上是向量运算：\n\n```csharp\n// 方向\nVector3 direction = (target.position - transform.position).normalized;\n\n// 距离\nfloat distance = Vector3.Distance(a.position, b.position);\n\n// 前方\nVector3 forward = transform.forward;  // 蓝色箭头（Z 轴）\nVector3 right = transform.right;      // 红色箭头（X 轴）\nVector3 up = transform.up;            // 绿色箭头（Y 轴）\n\n// 2D 版本\nVector2 forward2D = transform.right;  // 2D 里「前」通常是 X 轴\n```\n\n## 性能提示\n\nTransform 的 `position` 和 `rotation` 属性在 C++ 端存储。访问这些属性会触发跨域调用——单次访问不贵，但在循环里频繁使用就贵了。\n\n```csharp\n// 不好的做法\nfor (int i = 0; i < 10000; i++)\n{\n    DoSomething(transform.position); // 多次跨域访问\n}\n\n// 更好的做法\nVector3 pos = transform.position;\nfor (int i = 0; i < 10000; i++)\n{\n    DoSomething(pos);\n}\n```\n\n这不意味着一看到 `transform.position` 就要缓存——只有循环中大量使用时才需要。\n"
      },
      {
        "slug": "Unity学习/基础/05-输入系统",
        "folders": [
          "Unity学习",
          "基础"
        ],
        "fileName": "05-输入系统.md",
        "title": "输入系统",
        "date": "2026-06",
        "tags": [
          "Unity",
          "Input",
          "Input System",
          "键盘鼠标",
          "触屏"
        ],
        "excerpt": "Unity 有两套输入方案：旧的 `Input` 类（Input Manager）和新的 Input System 包。老项目可能还在用旧的，但新项目建议直接从 Input System 开始。\n\n## 旧版 Input（Input Manager）\n\n放在 `Edit → Project Sett",
        "content": "# 输入系统\n> 2026-06 | Unity · Input · Input System · 键盘鼠标 · 触屏\n\nUnity 有两套输入方案：旧的 `Input` 类（Input Manager）和新的 Input System 包。老项目可能还在用旧的，但新项目建议直接从 Input System 开始。\n\n## 旧版 Input（Input Manager）\n\n放在 `Edit → Project Settings → Input Manager`。本质上是键位名称到按键的映射。\n\n```csharp\nvoid Update()\n{\n    float horizontal = Input.GetAxis(\"Horizontal\");   // -1 ~ 1，平滑\n    float rawHorizontal = Input.GetAxisRaw(\"Horizontal\"); // -1, 0, 1，无平滑\n\n    if (Input.GetButtonDown(\"Jump\"))     // 按下瞬间\n    {\n        Jump();\n    }\n\n    if (Input.GetKey(KeyCode.W))        // 按住\n    {\n        MoveForward();\n    }\n}\n```\n\n优点：简单，API 直接，学习成本低。适合 jam 和小型项目。\n\n缺点：\n- 不支持手柄热插拔和多人输入区分。\n- 触屏操作需要额外处理。\n- 所有输入逻辑混在 Update 里，难以复用。\n\n## 新版 Input System\n\n需通过 Package Manager 安装 `com.unity.inputsystem`。核心变化：输入不再是「读按键」，而是「订阅事件」。\n\n### 安装与配置\n\n安装后在 Player Settings 里将 Active Input Handling 设为 `Input System Package (New)`。可以同时支持新旧两套（`Both`），但不推荐长期混用。\n\n安装时会提示生成 `.inputactions` 资源文件，这就是你的输入配置。\n\n### Action 的三种事件\n\n```csharp\npublic class PlayerInput : MonoBehaviour\n{\n    private PlayerControls controls;\n\n    void Awake()\n    {\n        controls = new PlayerControls();\n    }\n\n    void OnEnable()\n    {\n        controls.Gameplay.Enable();\n\n        // 执行中（每帧都有值）\n        controls.Gameplay.Move.performed += ctx => OnMove(ctx);\n\n        // 按键开始\n        controls.Gameplay.Jump.started += _ => StartJump();\n\n        // 按键松开\n        controls.Gameplay.Jump.canceled += _ => StopJump();\n    }\n\n    void OnDisable()\n    {\n        controls.Gameplay.Disable();\n    }\n\n    void OnMove(InputAction.CallbackContext ctx)\n    {\n        Vector2 input = ctx.ReadValue<Vector2>();\n        // 移动逻辑\n    }\n}\n```\n\n三种回调语义：\n- `started`：交互刚开始（手指碰到屏幕、按键按下）。\n- `performed`：满足触发条件（按住一定时间或到达阈值）。\n- `canceled`：交互结束。\n\n### PlayerInput 组件\n\nInput System 还提供了 `PlayerInput` 组件，可以通过 Inspector 拖拽绑定 Action Map，然后用 UnityEvent 或 `SendMessage` 调用你的方法。\n\n自动设备检测和多人分屏全靠它。要快速上手，直接给 GameObject 挂 `PlayerInput` 组件，Behavior 选 `Invoke Unity Events`，然后把各个 Action 的事件拖到你的方法上。\n\n### 触屏和移动端\n\nInput System 原生支持触屏：\n\n```csharp\n// 读取第一个触摸点\nvar touch = Touchscreen.current?.primaryTouch;\nif (touch?.press.isPressed ?? false)\n{\n    Vector2 pos = touch.position.ReadValue();\n}\n```\n\n对于摇杆类操作，推荐在 Actions 里直接定义 `Stick` 类型的 Action，然后把它的 `performed` 绑定到移动方法。\n\n## 迁移策略\n\n- 新项目直接用 Input System，不用犹豫。\n- 老项目：先全局搜 `Input.Get` 统计使用量。量小（< 20 处）直接全替换；量大按模块逐步切。\n- 可以新旧混用（Both），但只在过渡期这样做。长期混用增加调试复杂度。\n\n## 最佳实践\n\n- 把输入读取和业务逻辑分开：输入层只负责「玩家想做什么」，不要直接在 `performed` 回调里写游戏逻辑。\n- 用 ScriptableObject 做输入事件通道：输入系统触发事件 → SO 事件 → 多个订阅者响应。解耦效果非常好。\n- 禁用未使用的 Action Map：菜单场景里禁用 Gameplay Map，减少意外输入。\n- 在 `OnEnable` / `OnDisable` 里管理 Action Map 的启用/禁用——和对象生命周期保持一致。\n"
      },
      {
        "slug": "Unity学习/基础/06-UGUI与界面开发",
        "folders": [
          "Unity学习",
          "基础"
        ],
        "fileName": "06-UGUI与界面开发.md",
        "title": "UGUI 与界面开发",
        "date": "2026-06",
        "tags": [
          "Unity",
          "UGUI",
          "Canvas",
          "RectTransform"
        ],
        "excerpt": "UGUI 是 Unity 内置的 UI 系统，2014 年在 Unity 4.6 引入，至今仍是大多数项目的主力 UI 方案。UI Toolkit（UIElements）是新方向，但生态和案例远不如 UGUI 成熟。\n\n## 核心概念：Canvas\n\nCanvas 是 UI 的根。所有 UI 元素必",
        "content": "# UGUI 与界面开发\n> 2026-06 | Unity · UGUI · Canvas · RectTransform\n\nUGUI 是 Unity 内置的 UI 系统，2014 年在 Unity 4.6 引入，至今仍是大多数项目的主力 UI 方案。UI Toolkit（UIElements）是新方向，但生态和案例远不如 UGUI 成熟。\n\n## 核心概念：Canvas\n\nCanvas 是 UI 的根。所有 UI 元素必须放在 Canvas 下面。\n\nCanvas 的 Render Mode 决定 UI 如何渲染：\n\n| 模式 | 说明 | 适用场景 |\n|---|---|---|\n| Screen Space - Overlay | UI 直接覆盖在屏幕最上层，不受摄像机影响 | HUD、菜单 |\n| Screen Space - Camera | UI 在某个摄像机前方渲染，受 Z 轴影响 | 有 3D 物体需要穿插 UI |\n| World Space | UI 如同 3D 对象一样放在世界里 | 场景内浮标、血条 |\n\n绝大多数情况用 Screen Space - Overlay。它的 Canvas Scaler 组件负责屏幕适配。\n\n## Canvas Scaler：屏幕适配的关键\n\nCanvas Scaler 的 UI Scale Mode 推荐：\n\n- **Scale With Screen Size**：根据参考分辨率等比缩放。设 Reference Resolution 为设计分辨率（比如 1920×1080），Screen Match Mode 为 `0.5`（宽高等权重）。这样 UI 在不同分辨率下都能保持相对比例。\n\n- **Constant Pixel Size**：不缩放。适合像素级精准的 UI。\n\n微信小游戏适配时，通常设 750×1334 或 720×1280 为参考分辨率。\n\n## RectTransform\n\nRectTransform 是 UI 元素的 Transform，在普通 Transform 基础上增加了锚定和对齐。\n\n核心属性：\n\n```csharp\nrectTransform.anchoredPosition;  // 相对于锚点的位置\nrectTransform.sizeDelta;          // 相对于锚点的大小偏移\nrectTransform.anchorMin;          // 锚点左下（0~1）\nrectTransform.anchorMax;          // 锚点右上（0~1）\nrectTransform.pivot;              // 轴心（0~1）\n```\n\n**最常见的锚定方式**：\n\n- 锚点聚在左上角 → 元素位置固定在左上（适合返回按钮）。\n- 锚点展开成全屏 → 元素随屏幕拉伸（适合全屏背景）。\n- 锚点在中点 → 元素居中（适合对话框）。\n\n按住 `Shift` 拖锚点可以同时设置位置。\n\n## 常用控件\n\n### Text / TextMeshPro\n\nTextMeshPro（TMP）比传统 Text 渲染质量好很多。通过 Package Manager 安装 `com.unity.textmeshpro`。\n\n```csharp\nusing TMPro;\n\ntmpText.text = $\"Score: {score}\";\ntmpText.fontSize = 36;\ntmpText.color = Color.white;\n```\n\nTMP 支持 SDF 字体，缩放不会模糊。自定义字体需要通过 Font Asset Creator 生成 SDF 资源。\n\n### Image\n\n```csharp\nimage.sprite = newSprite;\nimage.fillAmount = 0.75f;  // 圆形进度条\n```\n\nImage Type 有四种：Simple、Sliced（九宫格）、Tiled、Filled（环形/条形进度条）。九宫格适合做圆角按钮边框。\n\n### Button\n\n```csharp\nbutton.onClick.AddListener(() => OnButtonClicked());\nbutton.interactable = false; // 灰色不可点\n```\n\nButton 自带 Transition（颜色、Sprite 切换、动画）。复杂动效用 Animation Transition，简单用 Color Tint 就够。\n\n### Slider / Scrollbar\n\n```csharp\nslider.value = 0.5f;\nslider.onValueChanged.AddListener(val => OnVolumeChanged(val));\n```\n\n### Layout 组件\n\n- **Horizontal Layout Group**：水平排列子元素。\n- **Vertical Layout Group**：垂直排列。\n- **Grid Layout Group**：网格排列。\n- **Content Size Fitter**：自动调整自身大小以适应内容。\n\nScrollView = ScrollRect + Mask + Content（带 Layout Group）+ Scrollbar。Content 里放 Layout Group 会自动计算可滚动范围。\n\n## 常见问题与最佳实践\n\n**Canvas 重建**：任何 UI 元素的可视属性变化（SetActive、颜色、文本、位置）都会触发 Canvas 重建。重建有开销，尤其在复杂的 UI 层级中。\n\n缓解方式：\n- 把频繁变动的 UI（比如血条、伤害数字）放到单独的 Canvas 上，这样只重建这个 Canvas。\n- 用对象池管理频繁创建销毁的 UI 元素。\n- 对静态 UI 勾选 `Canvas` 的 `Pixel Perfect`（视情况）。\n\n**Raycast Target**：Image 和 Text 默认开启 Raycast Target。如果元素不需要点击，关掉——否则它会在事件系统中参与射线检测，浪费性能。\n\n**Layout 更新成本**：Content Size Fitter + Layout Group 每帧都可能重新计算。如果布局不频繁变化，考虑直接手动设置位置。\n\n**事件穿透**：UI 点击穿透到下面 3D 物体的常见问题。检查 EventSystem 的 `IsPointerOverGameObject()`：\n\n```csharp\nif (EventSystem.current.IsPointerOverGameObject())\n{\n    return; // 点到了 UI 上，不处理 3D 点击\n}\n```\n"
      },
      {
        "slug": "Unity学习/基础/07-动画系统",
        "folders": [
          "Unity学习",
          "基础"
        ],
        "fileName": "07-动画系统.md",
        "title": "动画系统",
        "date": "2026-06",
        "tags": [
          "Unity",
          "Animator",
          "Animation",
          "AnimatorController"
        ],
        "excerpt": "Unity 的动画系统分两层：底层是 Animation（动画片段），上层是 Animator（状态机）。绝大多数业务逻辑只需要用到 Animator，但理解底层有助于调试。\n\n## Animation Clip\n\n动画片段是属性随时间变化的曲线集合。它可以驱动 Transform、SpriteRe",
        "content": "# 动画系统\n> 2026-06 | Unity · Animator · Animation · AnimatorController\n\nUnity 的动画系统分两层：底层是 Animation（动画片段），上层是 Animator（状态机）。绝大多数业务逻辑只需要用到 Animator，但理解底层有助于调试。\n\n## Animation Clip\n\n动画片段是属性随时间变化的曲线集合。它可以驱动 Transform、SpriteRenderer、Image 等任何 Component 的序列化属性。\n\n在 Animation 窗口里录制时，Unity 会自动生成 `.anim` 文件和一个 Animator Controller。你可以选择「录制模式」逐帧调，也可以直接拖动精灵序列到场景做帧动画。\n\n关键属性：\n```csharp\n// 播放一段动画（简单用法）\nanimation.Play(\"Walk\");\n\n// 检查是否在播放某动画\nanimation.IsPlaying(\"Attack\");\n```\n\n但实际项目中几乎不用 `Animation` 组件，而用 `Animator`——因为状态机更灵活。\n\n## Animator 状态机\n\nAnimator = AnimatorController（状态机） + 参数 + 动画片段。\n\n### 四个概念\n\n- **State**：每个状态通常绑定一个 Animation Clip。默认状态是橙色（Entry → 指向）。\n- **Transition**：状态之间的连线。Has Exit Time 决定是否等当前动画播完再切。\n- **Parameter**：Bool、Int、Float、Trigger。脚本通过设置参数来控制状态跳转。\n- **Layer**：遮罩层。比如上半身射击 + 下半身跑动。\n\n### 脚本控制\n\n```csharp\nprivate Animator anim;\n\nvoid Awake()\n{\n    anim = GetComponent<Animator>();\n}\n\nvoid Update()\n{\n    // 设置参数驱动动画\n    anim.SetBool(\"IsMoving\", isMoving);\n    anim.SetFloat(\"Speed\", speed);\n    anim.SetTrigger(\"Attack\");\n    anim.SetInteger(\"State\", stateIndex);\n}\n```\n\nTrigger 是一次性信号——设置一次后自动消费，不需要手动复位。Bool/Float/Int 是持续状态，适合速度、方向等连续变化量。\n\n### BlendTree\n\nBlendTree 让一个参数驱动多个动画之间的混合。最常见的用法：用 Speed 参数在 Idle / Walk / Run 之间平滑过渡。\n\n```\nBlendTree \"Locomotion\"\n  ├── Idle   (Speed = 0)\n  ├── Walk   (Speed = 0.5)\n  └── Run    (Speed = 1.0)\n```\n\n1D BlendTree 用于直线混合，2D BlendTree 用于方向混合（四方向/八方向移动）。\n\n创建 BlendTree：在 Animator 窗口右键 → Create State → From New BlendTree → 双击进入 → 添加 Motion Field → 拖入各动画片段并设置阈值。\n\n### Animation Event\n\n动画片段上可以插入事件，在指定帧回调脚本方法：\n\n```csharp\n// 在 Attack 动画的挥砍关键帧上插入事件 \"OnSwing\"\nvoid OnSwing()\n{\n    // 检测命中\n}\n\n// 脚步声事件\nvoid OnFootstep()\n{\n    AudioSource.PlayOneShot(footstepSound);\n}\n```\n\n事件方法和 Animation Clip 必须在同一个 GameObject 上。如果动画在子对象上触发事件，Unity 会向上递归查找父对象上的同名方法（通过 `SendMessage`，性能较低）。推荐把事件放在 Animator 所在的同一 GameObject 上。\n\n## 动画层级\n\nLayer 配合 Avatar Mask 可以实现局部动画覆盖：\n\n```\nBase Layer: 全身（Idle / Walk / Run）\nUpper Layer: 仅上半身（Shoot），权重 1，Blending = Override\n```\n\nLayer 的 Weight 可以在脚本中动态调整：\n\n```csharp\nanim.SetLayerWeight(upperLayerIndex, isAiming ? 1f : 0f);\n```\n\n## 性能注意事项\n\n- Animator 即使没有可见变化，每帧也会更新状态机。不需要动画的对象，不要挂着 Animator（可以 Disable，或直接移除）。\n- `Animator.StringToHash`：参数查找用哈希比字符串更快。\n\n```csharp\nprivate static readonly int IsMovingHash = Animator.StringToHash(\"IsMoving\");\n\nanim.SetBool(IsMovingHash, true); // 比 SetBool(\"IsMoving\", true) 快\n```\n\n- 复杂的状态机（几十个状态 + 上百个 Transition）在移动端可能有明显的 CPU 开销。考虑简化或改用代码驱动的动画。\n- Animator Controller 的 `Update Mode` 设 `Unscaled Time` 影响的是 Animator 自身的时间尺度，不是 Time.timeScale。暂停游戏时 UI 动画需要设置它。\n\n## Spine 与 Unity 动画的配合\n\n如果项目用 Spine（2D 骨骼），常规做法是：\n- 角色的位移/翻转由 Unity Transform 控制。\n- 角色动作（Idle、Walk、Attack）由 Spine 的 SkeletonAnimation 控制。\n- 不要试图把 Spine 动画放进 Unity Animator——它们是完全不同的系统。\n\nSpine 的动画切换可以直接通过 `skeletonAnimation.AnimationState.SetAnimation(0, \"walk\", true)` 实现，不需要通过 Unity Animator。\n"
      },
      {
        "slug": "Unity学习/基础/08-物理系统",
        "folders": [
          "Unity学习",
          "基础"
        ],
        "fileName": "08-物理系统.md",
        "title": "物理系统",
        "date": "2026-06",
        "tags": [
          "Unity",
          "物理",
          "Rigidbody",
          "Collider",
          "Raycast"
        ],
        "excerpt": "Unity 内置两套物理引擎：3D 物理（PhysX）和 2D 物理（Box2D）。两套 API 几乎是对称的，命名加 `2D` 后缀即可（`Rigidbody` → `Rigidbody2D`）。以下以 2D 为例，3D 同理。\n\n## Rigidbody：让对象参与物理\n\nRigidbody 是",
        "content": "# 物理系统\n> 2026-06 | Unity · 物理 · Rigidbody · Collider · Raycast\n\nUnity 内置两套物理引擎：3D 物理（PhysX）和 2D 物理（Box2D）。两套 API 几乎是对称的，命名加 `2D` 后缀即可（`Rigidbody` → `Rigidbody2D`）。以下以 2D 为例，3D 同理。\n\n## Rigidbody：让对象参与物理\n\nRigidbody 是物理系统的核心。没有 Rigidbody 的对象，就算有 Collider，也不会自动受重力和碰撞力的影响。\n\n```csharp\nprivate Rigidbody2D rb;\n\nvoid Awake()\n{\n    rb = GetComponent<Rigidbody2D>();\n}\n\nvoid FixedUpdate()\n{\n    rb.velocity = new Vector2(moveInput.x * speed, rb.velocity.y);\n}\n```\n\n关键属性：\n\n| 属性 | 说明 |\n|---|---|\n| Body Type (simulated) | Dynamic（受力）/ Kinematic（不受力但可移动）/ Static（不动） |\n| Gravity Scale | 重力倍率，0 为无重力 |\n| Mass | 质量 |\n| Drag / Angular Drag | 线性/旋转阻力 |\n\n**移动方式对比**：\n\n```csharp\n// 1. 直接修改 velocity（推荐，物理模拟友好）\nrb.velocity = new Vector2(speed, rb.velocity.y);\n\n// 2. 加力（模拟推动，有惯性）\nrb.AddForce(Vector2.right * force, ForceMode2D.Impulse);\n\n// 3. 修改 position（跳过了物理引擎，可能穿墙）\nrb.MovePosition(rb.position + velocity * Time.fixedDeltaTime);\n```\n\n不要用 `transform.position` 移动有 Rigidbody 的对象——它跳过了物理引擎，会导致碰撞检测失败和穿墙。\n\n## Collider：碰撞体\n\nCollider 定义物理形状。没有 Rigidbody 也可以有 Collider（作为静态障碍物）。有 Rigidbody 时，Collider 决定碰撞边界。\n\n常见类型：BoxCollider2D、CircleCollider2D、CapsuleCollider2D、PolygonCollider2D、EdgeCollider2D。\n\n关键属性：\n- **Is Trigger**：勾选后碰撞不产生物理反馈，只触发 `OnTriggerEnter` 事件（用于检测区域、道具拾取）。\n- **Physics Material 2D**：控制弹力和摩擦系数。\n\n## 碰撞检测的四个回调\n\n```csharp\n// 碰撞（有物理反馈）\nvoid OnCollisionEnter2D(Collision2D collision) { }\nvoid OnCollisionStay2D(Collision2D collision) { }\nvoid OnCollisionExit2D(Collision2D collision) { }\n\n// 触发器（无物理反馈）\nvoid OnTriggerEnter2D(Collider2D other) { }\nvoid OnTriggerStay2D(Collider2D other) { }\nvoid OnTriggerExit2D(Collider2D other) { }\n```\n\n`OnCollisionEnter2D` 的参数是 `Collision2D`，包含接触点、相对速度等详细碰撞信息。`OnTriggerEnter2D` 的参数只是对方 Collider。\n\n碰撞/触发的条件是 **双方都有 Collider，且至少一方有 Rigidbody**。\n\n## Raycast：射线检测\n\n```csharp\n// 2D 射线\nRaycastHit2D hit = Physics2D.Raycast(origin, direction, distance, layerMask);\n\nif (hit.collider != null)\n{\n    Debug.Log($\"命中: {hit.collider.name}，距离: {hit.distance}\");\n}\n\n// 或者直接检测多个结果\nRaycastHit2D[] hits = new RaycastHit2D[10];\nint count = Physics2D.RaycastNonAlloc(origin, direction, hits, distance, layerMask);\nfor (int i = 0; i < count; i++)\n{\n    ProcessHit(hits[i]);\n}\n```\n\n`RaycastNonAlloc` 用预分配数组避免了 GC——在频繁调用的场景（每帧检测地板、墙面）推荐。\n\n3D 版本：`Physics.Raycast`（返回 bool + out hit）。\n\n## LayerMask：过滤碰撞\n\nLayer 可以在 `Edit → Project Settings → Physics 2D → Layer Collision Matrix` 中配置哪些层之间发生碰撞（物理层面）。代码中也可以手动过滤：\n\n```csharp\n// 只检测 \"Ground\" 和 \"Platform\" 层\nint layerMask = LayerMask.GetMask(\"Ground\", \"Platform\");\nRaycastHit2D hit = Physics2D.Raycast(origin, Vector2.down, 1f, layerMask);\n\n// 排除自身层\nint inverseMask = ~LayerMask.GetMask(\"Player\");\n```\n\n## 常见问题\n\n**角色抖动**：通常是因为同时用了物理移动和 Transform 修改。解决：统一使用 Rigidbody API（MovePosition / velocity），并在 FixedUpdate 里操作。\n\n**穿墙**：\n- 静态物体设为 Static，移动物体设为 Dynamic。\n- Collision Detection 设 `Continuous`（高速度物体）。\n- 减小 Fixed Timestep（Project Settings → Time → Fixed Timestep）。\n\n**OnTrigger 不触发**：检查双方是否都有 Collider，至少一方有 Rigidbody；Is Trigger 必须勾选；检查 Layer Collision Matrix 是否允许交互。\n\n**性能优化**：\n- 尽量用简单碰撞体（Box/Circle/Capsule），避免 MeshCollider 和复杂 PolygonCollider。\n- 静态地图用 TilemapCollider2D 或 CompositeCollider2D——多个小块合并成一个碰撞体。\n- 大量物体使用 Physics2D.Simulate 控制更新频率。\n"
      },
      {
        "slug": "Unity学习/基础/09-资源管理与Addressables",
        "folders": [
          "Unity学习",
          "基础"
        ],
        "fileName": "09-资源管理与Addressables.md",
        "title": "资源管理与 Addressables",
        "date": "2026-06",
        "tags": [
          "Unity",
          "Addressables",
          "AssetBundle",
          "资源加载"
        ],
        "excerpt": "资源管理在 Unity 项目里的分量，往往在中后期才暴露出来。前期几张图、几个预制体，Resources.Load 就够了。当项目变大、需要热更新时，Addressables 是当前 Unity 官方推荐的方案。\n\n## 三种加载方式\n\n| 方式 | 适用阶段 | 热更新 | 内存控制 |\n|---",
        "content": "# 资源管理与 Addressables\n> 2026-06 | Unity · Addressables · AssetBundle · 资源加载\n\n资源管理在 Unity 项目里的分量，往往在中后期才暴露出来。前期几张图、几个预制体，Resources.Load 就够了。当项目变大、需要热更新时，Addressables 是当前 Unity 官方推荐的方案。\n\n## 三种加载方式\n\n| 方式 | 适用阶段 | 热更新 | 内存控制 |\n|---|---|---|---|\n| Resources.Load | 原型 / 小型项目 | 不支持 | 同步加载，资源常驻 |\n| AssetBundle | 传统方案 | 手动实现 | 需要自己管理加载卸载 |\n| Addressables | 推荐方案 | 内置支持 | 引用计数自动管理 |\n\nResources 目录会在打包时全部打进包体，且资源永远不会被卸载。**生产项目不要依赖 Resources。**\n\n## Addressables 核心概念\n\nAddressables 通过 Package Manager 安装（`com.unity.addressables`），用「地址」代替「路径」来定位资源。\n\n```csharp\n// 用地址加载\nvar handle = Addressables.LoadAssetAsync<GameObject>(\"Enemy_Orc\");\nhandle.Completed += (op) =>\n{\n    if (op.Status == AsyncOperationStatus.Succeeded)\n    {\n        Instantiate(op.Result);\n    }\n};\n\n// 或者用 await（推荐）\nasync void Start()\n{\n    var prefab = await Addressables.LoadAssetAsync<GameObject>(\"Enemy_Orc\").Task;\n    Instantiate(prefab);\n}\n```\n\n地址可以手动设置，也可以让 Unity 用资源路径自动生成。\n\n## Group 和 Label\n\nAddressables 用 Group 组织资源。常见分组：\n\n```\nGroup: Prefabs_Enemies   → 所有敌人预制体\nGroup: Audio_SFX         → 音效\nGroup: UI_Common         → 公共 UI 资源\nGroup: Textures_Scene01  → 场景专属贴图\n```\n\nGroup 决定资源的打包策略——每个 Group 可以打成一个独立的 AssetBundle，也可以合并到更大的 Bundle。\n\nLabel 是跨 Group 的标签。给资源打上 `\"scene01\"` 标签，加载时用标签批量加载：\n\n```csharp\nvar handle = Addressables.LoadAssetsAsync<Texture2D>(\"scene01\", null);\n```\n\n## 加载与释放\n\n```csharp\n// 加载 GameObject（实例化）\nvar handle = Addressables.InstantiateAsync(\"Enemy_Orc\", position, rotation);\n\n// 用完后释放——Addressables 会自动回收引用计数\nAddressables.ReleaseInstance(handle);\n\n// 加载 AssetReference\n[SerializeField] private AssetReferenceGameObject enemyPrefabRef;\nvar handle = enemyPrefabRef.InstantiateAsync(position, rotation);\n```\n\n**释放不是可选的**。每次 Load 都要有对应的 Release。累积未释放的引用会导致资源永远不被卸载，最终撑爆内存。\n\n检查内存泄漏的方法：Window → Asset Management → Addressables → Event Viewer。\n\n## AssetReference\n\nAssetReference 让资源引用在 Inspector 里可直接拖拽，同时保留 Addressables 的异步加载和内存管理能力：\n\n```csharp\npublic AssetReferenceGameObject enemyPrefab;\npublic AssetReferenceT<AudioClip> bgm;\npublic AssetReferenceSprite icon;\n```\n\n比裸用 `string address` 更安全——Inspector 里拖入资源时 Unity 会校验类型和地址。\n\n## 远程加载与热更新\n\nAddressables 的远程加载是通过配置 RemoteLoadPath 实现的。简单流程：\n\n1. 在 Addressables Profiles 里设置 RemoteLoadPath 为 CDN 地址。\n2. 为需要热更的 Group 设置 Build Path = RemoteBuildPath，Load Path = RemoteLoadPath。\n3. 构建后生成 `.bundle` + `.hash` + catalog 文件，上传到 CDN。\n4. 客户端启动时调用 `Addressables.CheckForCatalogUpdates()` 检查更新，有更新时 `Addressables.UpdateCatalogs()` 下载新 catalog。\n\n更新流程：\n```csharp\nasync Task CheckUpdate()\n{\n    var checkHandle = Addressables.CheckForCatalogUpdates(false);\n    var catalogs = await checkHandle.Task;\n    if (catalogs.Count > 0)\n    {\n        var updateHandle = Addressables.UpdateCatalogs(catalogs, false);\n        await updateHandle.Task;\n        // catalog 已更新，后续 Load 会使用新地址\n    }\n    Addressables.Release(checkHandle);\n}\n```\n\n## 迁移建议\n\n如果你手里是还在用 Resources 或裸 AssetBundle 的老项目：\n\n- Resources：先在项目中全局搜索 `Resources.Load` 统计引用量。量小就直接换 Addressables。量大按模块逐步迁移——先拆资源目录，建立 Group，改一处加载代码验证一处。\n- AssetBundle：Addressables 底层也是 AssetBundle。迁移的核心是把 Bundle 的构建和管理交给 Addressables，业务代码从 `AssetBundle.LoadFromFile` 换成 `Addressables.LoadAssetAsync`。\n\n## 常见坑\n\n- **编辑器模式直接加载**：Addressables 在编辑器里默认走 Fast Mode（直接加载项目资源，不打包）。部署前记得在 Play Mode Script 里切到 `Use Existing Build` 验证真实加载行为。\n- **重复加载同一资源**：如果地址相同，Addressables 内部会复用已加载的资源，不会重复加载。但要确保用了正确的 Release 方法做引用计数管理。\n- **Sprite Atlas 加载**：Sprite 在使用 Atlas 时，加载单个 Sprite 会导致整个 Atlas 驻留内存。考虑将 Atlas 单独分组，管理加载时机。\n- **Scene 加载**：Addressables 支持场景加载 `Addressables.LoadSceneAsync(\"Level01\")`，同样需要对应的 `UnloadSceneAsync`。\n"
      },
      {
        "slug": "Unity学习/基础/10-场景管理与加载",
        "folders": [
          "Unity学习",
          "基础"
        ],
        "fileName": "10-场景管理与加载.md",
        "title": "场景管理与加载",
        "date": "2026-06",
        "tags": [
          "Unity",
          "SceneManager",
          "异步加载",
          "场景叠加"
        ],
        "excerpt": "场景是 Unity 项目的基本组织单位。简单项目一个场景就够了，但稍微上规模的项目就涉及场景切换、叠加、异步加载和过渡动画。\n\n## 基本操作\n\n```csharp\nusing UnityEngine.SceneManagement;\n\n// 同步加载——会卡帧，仅用于原型\nSceneManager",
        "content": "# 场景管理与加载\n> 2026-06 | Unity · SceneManager · 异步加载 · 场景叠加\n\n场景是 Unity 项目的基本组织单位。简单项目一个场景就够了，但稍微上规模的项目就涉及场景切换、叠加、异步加载和过渡动画。\n\n## 基本操作\n\n```csharp\nusing UnityEngine.SceneManagement;\n\n// 同步加载——会卡帧，仅用于原型\nSceneManager.LoadScene(\"GameScene\");\n\n// 异步加载（推荐）\nSceneManager.LoadSceneAsync(\"GameScene\");\n```\n\n两个 API 看似相似，但同步版 `LoadScene` 会阻塞主线程。场景一大，玩家会看到明显卡顿。生产代码一律用异步版。\n\n## 异步加载的完整流程\n\n```csharp\nIEnumerator LoadSceneCoroutine(string sceneName)\n{\n    // 1. 显示加载界面\n    loadingUI.SetActive(true);\n\n    // 2. 开始异步加载\n    var asyncOp = SceneManager.LoadSceneAsync(sceneName);\n    asyncOp.allowSceneActivation = false; // 加载完不立即切换\n\n    // 3. 更新进度条\n    while (asyncOp.progress < 0.9f)\n    {\n        float progress = asyncOp.progress / 0.9f;\n        loadingBar.fillAmount = progress;\n        yield return null;\n    }\n\n    // 4. 进度 0.9 意味着资源已加载完毕，可以激活\n    loadingBar.fillAmount = 1f;\n    yield return new WaitForSeconds(0.5f); // 给玩家看一眼满进度\n\n    // 5. 激活场景\n    asyncOp.allowSceneActivation = true;\n}\n```\n\n关键点：\n- `allowSceneActivation = false` 时进度停在 0.9——这是 Unity 有意设计的分界点。0-0.9 是资源加载，激活切换是最后一步。\n- `LoadSceneMode` 默认是 `Single`（替换当前场景）。\n\n## 场景叠加（Multi-Scene）\n\n`Single` 模式会卸载当前场景，`Additive` 模式在当前场景上叠加：\n\n```csharp\nSceneManager.LoadSceneAsync(\"UIScene\", LoadSceneMode.Additive);\n```\n\n常见模式：\n- **主场景（常驻）**：包含 GameManager、EventSystem、常驻 UI 等。\n- **关卡场景**：按需加载，切换时卸载旧关卡加载新关卡。\n- **UI 场景**：独立场景，不受关卡切换影响。\n\n用 `SceneManager.UnloadSceneAsync` 卸载叠加的场景：\n\n```csharp\nSceneManager.UnloadSceneAsync(\"Level01\");\n```\n\n## DontDestroyOnLoad\n\n某些对象需要跨场景存活——比如音乐播放器、网络管理器、全局事件系统：\n\n```csharp\nvoid Awake()\n{\n    DontDestroyOnLoad(gameObject);\n}\n```\n\n但 DontDestroyOnLoad 要小心使用：\n- 如果反复进出场景，每次都创建新实例，会导致重复对象堆积。配合单例模式：\n\n```csharp\npublic class AudioManager : MonoBehaviour\n{\n    public static AudioManager Instance { get; private set; }\n\n    void Awake()\n    {\n        if (Instance != null)\n        {\n            Destroy(gameObject);\n            return;\n        }\n        Instance = this;\n        DontDestroyOnLoad(gameObject);\n    }\n}\n```\n\n## Active Scene\n\n当多个场景叠加时，`SceneManager.GetActiveScene()` 返回的是「活跃场景」。新实例化的对象默认放在活跃场景中。可以用 `SceneManager.SetActiveScene()` 切换：\n\n```csharp\nSceneManager.SetActiveScene(SceneManager.GetSceneByName(\"Level01\"));\n```\n\n## 场景加载事件\n\n```csharp\nvoid OnEnable()\n{\n    SceneManager.sceneLoaded += OnSceneLoaded;\n    SceneManager.sceneUnloaded += OnSceneUnloaded;\n}\n\nvoid OnSceneLoaded(Scene scene, LoadSceneMode mode)\n{\n    Debug.Log($\"场景加载完成: {scene.name}, 模式: {mode}\");\n}\n\nvoid OnDisable()\n{\n    SceneManager.sceneLoaded -= OnSceneLoaded;\n    SceneManager.sceneUnloaded -= OnSceneUnloaded;\n}\n```\n\n## 性能与优化\n\n- 场景加载时，Unity 会初始化场景中所有 GameObject（Awake → OnEnable）。大量对象同时初始化可能导致 CPU 尖峰。\n- 对于复杂关卡，把大场景拆成子场景，用 Additive 分帧加载。\n- Addressables 支持异步加载场景，走的是同样的 SceneManager 但资源管理更精细。\n- 场景切换时的 GC Spike：旧场景卸载可能导致大量对象被 GC。用 `System.GC.Collect()` 在加载界面期间主动回收（谨慎使用，仅在确实需要时）。\n\n## 微信小游戏特殊限制\n\n微信小游戏（WebGL）场景加载有几个限制：\n- 不能同步加载场景（`LoadScene` 会卡死），必须用异步。\n- WebGL 不支持多线程，场景加载在主线程执行，大场景可能引起明显停顿。\n- 建议场景尽量小、预制体尽量复用、用 Addressables 按需加载而不是整场景打包。\n"
      },
      {
        "slug": "Unity学习/基础/11-Spine与2D骨骼动画",
        "folders": [
          "Unity学习",
          "基础"
        ],
        "fileName": "11-Spine与2D骨骼动画.md",
        "title": "Spine 与 2D 骨骼动画",
        "date": "2026-06",
        "tags": [
          "Unity",
          "Spine",
          "2D",
          "骨骼动画",
          "SkeletonAnimation"
        ],
        "excerpt": "如果你做 2D 游戏，Spine 很可能是动画管线中最核心的第三方工具。它用骨骼 + 网格变形 + 插槽替代传统的精灵序列帧，把动画数据量压到极小，同时保持动作的流畅度。\n\n## 什么是 Spine\n\nSpine 是一个独立的 2D 骨骼动画编辑器（由 Esoteric Software 开发）。设",
        "content": "# Spine 与 2D 骨骼动画\n> 2026-06 | Unity · Spine · 2D · 骨骼动画 · SkeletonAnimation\n\n如果你做 2D 游戏，Spine 很可能是动画管线中最核心的第三方工具。它用骨骼 + 网格变形 + 插槽替代传统的精灵序列帧，把动画数据量压到极小，同时保持动作的流畅度。\n\n## 什么是 Spine\n\nSpine 是一个独立的 2D 骨骼动画编辑器（由 Esoteric Software 开发）。设计师在 Spine 里创建骨骼、绑定图片、制作动画，导出三个文件：\n\n- `.json` 或 `.skel`（二进制）：骨架数据\n- `.atlas`：纹理图集描述\n- `.png`：合并的纹理图集\n\nUnity 侧通过 `spine-unity` 运行时包来加载和播放这些文件。\n\n## 导入与组件\n\n将 Spine 导出文件拖入 Unity 后，会生成一个 `SkeletonDataAsset`。把这个资源拖到场景中，Unity 自动创建：\n\n```\nGameObject \"Player\"\n  ├── SkeletonAnimation (核心组件)\n  └── MeshRenderer (渲染)\n```\n\n`SkeletonAnimation` 是 Spine 动画的入口，负责播放、混合和事件分发。\n\n## 播放动画\n\n```csharp\nprivate SkeletonAnimation skeleton;\n\nvoid Awake()\n{\n    skeleton = GetComponent<SkeletonAnimation>();\n}\n\nvoid PlayAnimation(string name, bool loop = true)\n{\n    skeleton.AnimationState.SetAnimation(0, name, loop);\n}\n```\n\n`SetAnimation` 参数：\n- 第一个参数是 track index（轨道编号）。Track 0 是默认全身轨道。不同轨道可以同时播放不同动画（比如上半身射击在 Track 1，下半身跑动在 Track 0）。\n- 第二个参数是动画名称（Spine 里定义的名字，不是文件名）。\n- 第三个参数是否循环。\n\n## 动画混合\n\n```csharp\n// 叠加动画（不会打断当前动画，会平滑混合进来）\nskeleton.AnimationState.AddAnimation(0, \"idle\", true, 0f); // 当前动画结束后播 idle\n\n// 交叉淡入\nvar entry = skeleton.AnimationState.SetAnimation(0, \"run\", true);\nentry.MixDuration = 0.2f; // 和上一个动画混合 0.2 秒\n```\n\n`TrackEntry` 提供了丰富的控制：\n\n```csharp\nvar entry = skeleton.AnimationState.SetAnimation(0, \"attack\", false);\n\nentry.Complete += (e) =>\n{\n    // 动画播放完毕后回调\n    PlayAnimation(\"idle\");\n};\n\nentry.TimeScale = 1.5f; // 加速播放\nentry.Alpha = 0.8f;      // 透明度混合\n```\n\n## 动画事件\n\n在 Spine 编辑器里可以在动画时间线上插入自定义事件。Unity 侧订阅：\n\n```csharp\nskeleton.AnimationState.Event += (track, e) =>\n{\n    if (e.Data.Name == \"footstep\")\n    {\n        audioSource.PlayOneShot(footstepSound);\n    }\n    else if (e.Data.Name == \"swing\")\n    {\n        CheckHit();\n    }\n};\n```\n\n比 Unity Animation Event 更灵活——事件数据可以携带字符串、整数、浮点数参数。\n\n## 换肤\n\nSpine 的皮肤（Skin）可以切换角色外观，而不需要换动画：\n\n```csharp\nskeleton.Skeleton.SetSkin(\"armor_02\");\nskeleton.Skeleton.SetSlotsToSetupPose(); // 应用皮肤后的重置\n```\n\n皮肤可以叠加和组合——这在做纸娃娃换装系统时非常有用。\n\n## 骨骼操控\n\n你可以直接在代码里控制某个骨骼的位置或旋转：\n\n```csharp\nvar bone = skeleton.Skeleton.FindBone(\"aim_target\");\nbone.Rotation = 45f;\n\n// 或者让武器指向鼠标\nvar mouseWorldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);\nvar bone = skeleton.Skeleton.FindBone(\"weapon_hand\");\n// 解算 IK 或手动设置旋转\n```\n\n大部分情况不需要手动操控骨骼。但做朝向瞄准、IK 效果时需要。\n\n## 顺序与渲染\n\nSpine 对象的渲染顺序由 SkeletonAnimation 上的 Sorting Layer 和 Order in Layer 控制，和其他 SpriteRenderer 一样。深度遮挡通常通过 Sorting Layer 或 Z 轴位置解决。\n\nSpine 不使用 Unity Animator——它的动画播放完全由自己的 AnimationState 管理。所以不要给 Spine 对象挂 Animator 组件。\n\n## 常见问题\n\n**动画不播放**：检查 `skeletonAnimation.skeletonDataAsset` 是否赋值。通常先创建 `SkeletonDataAsset`，再在 Inspector 拖入 `_SkeletonData` 和 `_AtlasAssets`。\n\n**材质丢失**：纹理的 Material 需要设为 Spine 的专用材质（通常是 `Spine/Skeleton` 或 `Spine/SkeletonGraphic`），而不是默认的 Sprite-Default。\n\n**UI 中使用 Spine**：用 `SkeletonGraphic` 替代 `SkeletonAnimation`。SkeletonGraphic 是 UGUI 兼容组件，可以参与 Canvas 的 Mask、Layout 和排序。\n\n**内存**：SkeletonDataAsset 在首次加载时会创建内部数据结构。多个相同骨架的实例共享同一份 SkeletonData（类似 Unity 的 Mesh 共享），但每个实例有自己的骨骼变换数据。\n\n**微信小游戏**：Spine 运行时在 WebGL 平台通常工作良好，但要关注纹理图集大小——过大的图集在移动端可能导致内存压力。\n"
      },
      {
        "slug": "Unity学习/基础/12-协程与异步操作",
        "folders": [
          "Unity学习",
          "基础"
        ],
        "fileName": "12-协程与异步操作.md",
        "title": "协程与异步操作",
        "date": "2026-06",
        "tags": [
          "Unity",
          "协程",
          "async",
          "await",
          "UniTask"
        ],
        "excerpt": "Unity 里有三种处理「等待」的方式：协程、async/await、Update 计时器。它们解决的问题相似，但原理完全不同。\n\n## 协程的本质\n\n协程是把一个方法分到多个帧里执行。它不是多线程——所有逻辑都在主线程按顺序跑，只是在 `yield return` 处暂停，等条件满足后继续。\n\n`",
        "content": "# 协程与异步操作\n> 2026-06 | Unity · 协程 · async · await · UniTask\n\nUnity 里有三种处理「等待」的方式：协程、async/await、Update 计时器。它们解决的问题相似，但原理完全不同。\n\n## 协程的本质\n\n协程是把一个方法分到多个帧里执行。它不是多线程——所有逻辑都在主线程按顺序跑，只是在 `yield return` 处暂停，等条件满足后继续。\n\n```csharp\nIEnumerator FadeOut(Image img, float duration)\n{\n    float elapsed = 0f;\n    Color color = img.color;\n\n    while (elapsed < duration)\n    {\n        elapsed += Time.deltaTime;\n        color.a = 1f - (elapsed / duration);\n        img.color = color;\n        yield return null; // 暂停，下一帧继续\n    }\n\n    img.gameObject.SetActive(false);\n}\n\nvoid Start()\n{\n    StartCoroutine(FadeOut(uiImage, 1f));\n}\n```\n\n## yield return 的几种类型\n\n| yield 类型 | 含义 |\n|---|---|\n| `yield return null` | 等一帧 |\n| `yield return new WaitForSeconds(n)` | 等待 n 秒（受 Time.timeScale 影响） |\n| `yield return new WaitForSecondsRealtime(n)` | 等待 n 秒（不受 timeScale 影响） |\n| `yield return new WaitForEndOfFrame()` | 等当前帧渲染完成 |\n| `yield return new WaitUntil(() => condition)` | 等条件为真 |\n| `yield return StartCoroutine(other)` | 等另一个协程执行完 |\n| `yield return asyncOperation` | 等异步操作完成（加载场景等） |\n\n**避免在循环里 new WaitForSeconds**——每次 yield 都 new 一个会制造 GC：\n\n```csharp\n// 不好的写法\nwhile (true)\n{\n    yield return new WaitForSeconds(1f); // 每秒分配一个对象\n}\n\n// 好的写法\nprivate WaitForSeconds waitOneSecond = new WaitForSeconds(1f);\nwhile (true)\n{\n    yield return waitOneSecond; // 复用\n}\n```\n\n## 协程的生命周期\n\n协程绑定到启动它的 MonoBehaviour：\n- GameObject 失活 → 协程暂停。\n- 组件被 Disable → 协程不会停止！这是个常见坑。Disable 组件不会 Stop 协程，除非你手动 Stop。\n- GameObject 被 Destroy → 所有协程自动停止。\n\n手动停止协程：\n\n```csharp\nCoroutine fadeCoroutine = StartCoroutine(FadeOut());\n\n// 停止特定协程\nStopCoroutine(fadeCoroutine);\n\n// 停止该脚本上所有协程\nStopAllCoroutines();\n```\n\n## 协程与异常\n\n协程里的异常不会传播到启动协程的代码，也不会被外层的 try-catch 捕获——它们直接打到 Unity 的日志里。\n\n```csharp\nStartCoroutine(BuggyCoroutine());\nDebug.Log(\"这行会执行——异常不会向上传播\");\n\nIEnumerator BuggyCoroutine()\n{\n    throw new System.Exception(\"协程内的异常,直接打到 Console\");\n    yield return null;\n}\n```\n\n要在协程里安全地处理异常，只能在协程内部 try-catch。\n\n## async / await 在 Unity 中\n\nC# 的 `async` / `await` 在 Unity 里也可以用，但有局限性：\n\n```csharp\nasync void Start()\n{\n    var text = await LoadConfigAsync();\n    Debug.Log(text);\n}\n\nasync Task<string> LoadConfigAsync()\n{\n    var request = UnityWebRequest.Get(url);\n    await request.SendWebRequest();\n    return request.downloadHandler.text;\n}\n```\n\n`await request.SendWebRequest()` 是在底层用协程实现的——它把异步操作挂到 Unity 的更新循环里，不会阻塞主线程。\n\n但原生 async/await 缺少超时、取消、帧级控制等 Unity 项目必需的功能。这就是 **UniTask** 存在的理由。\n\n## UniTask\n\nUniTask 是 Cysharp 开源的零分配 async/await 库，专为 Unity 设计。\n\n```csharp\n// 安装：Package Manager → Add from git URL:\n// https://github.com/Cysharp/UniTask.git?path=src/UniTask/Assets/Plugins/UniTask\n\nasync UniTaskVoid Start()\n{\n    // 等待秒数（不受 timeScale 影响）\n    await UniTask.Delay(TimeSpan.FromSeconds(2));\n\n    // 等待帧数\n    await UniTask.DelayFrame(3);\n\n    // 等到下一帧\n    await UniTask.Yield();\n\n    // 等待条件\n    await UniTask.WaitUntil(() => hp > 0);\n\n    // 带取消\n    var cts = new CancellationTokenSource();\n    await SomeAsync(cancellationToken: cts.Token);\n\n    // 超时\n    var result = await SomeAsync().Timeout(TimeSpan.FromSeconds(3));\n}\n```\n\nUniTask 的优势：\n- 零 GC 分配（基于 struct 的 async 方法构建器）。\n- 完整支持取消令牌（CancellationToken）。\n- 可以指定 `PlayerLoopTiming`（在哪个生命周期阶段恢复执行）。\n- 提供 `UniTaskTracker` 窗口，调试运行中的异步任务。\n- 比协程更接近 C# 标准，方便跨项目复用。\n\n## 什么时候用什么\n\n| 场景 | 推荐方案 |\n|---|---|\n| 简单分帧逻辑（< 5 行） | 协程 |\n| 有多个 await 的复杂流程 | UniTask |\n| 网络请求、文件 IO | UniTask |\n| 与第三方 .NET 库交互 | UniTask / async Task |\n| UI 过渡动画链 | 协程（配合 DOTween 更简洁） |\n| 需要超时/取消的等待 | UniTask |\n\n纯协程在复杂异步流程里容易写出「回调地狱」式的嵌套 StartCoroutine。UniTask 用 `await` 让它回归线性流程。\n\n## 协程和 UniTask 的配合\n\n你可以在 UniTask 里等协程：\n\n```csharp\nasync UniTask DoSomething()\n{\n    // 等一个协程完成\n    await SomeCoroutine().ToUniTask();\n}\n\nIEnumerator SomeCoroutine()\n{\n    yield return new WaitForSeconds(1f);\n}\n```\n"
      },
      {
        "slug": "Unity学习/基础/13-性能优化",
        "folders": [
          "Unity学习",
          "基础"
        ],
        "fileName": "13-性能优化.md",
        "title": "性能优化",
        "date": "2026-06",
        "tags": [
          "Unity",
          "性能",
          "Profiler",
          "GC",
          "DrawCall"
        ],
        "excerpt": "性能优化的第一步不是猜哪里慢——是测量。Unity 的 Profiler 是你最重要的优化工具，没有之一。打开它：`Window → Analysis → Profiler`。\n\n## Profiler 怎么看\n\n几个最重要的模块：\n\n| 模块 | 看什么 |\n|---|---|\n| CPU Usa",
        "content": "# 性能优化\n> 2026-06 | Unity · 性能 · Profiler · GC · DrawCall\n\n性能优化的第一步不是猜哪里慢——是测量。Unity 的 Profiler 是你最重要的优化工具，没有之一。打开它：`Window → Analysis → Profiler`。\n\n## Profiler 怎么看\n\n几个最重要的模块：\n\n| 模块 | 看什么 |\n|---|---|\n| CPU Usage | 脚本、物理、渲染的 CPU 时间 |\n| GPU Usage | 渲染耗时 |\n| Memory | 内存占用与 GC 分配 |\n| Rendering | DrawCall、三角形数、SetPass Call |\n\n**操作流程**：\n1. 运行游戏，让 Profiler 录制一段有代表性的场景（战斗、加载、UI 交互）。\n2. 找 CPU 尖峰 → 展开看是哪个函数。\n3. 切换到 Memory 模块，看 GC Alloc 峰值——分配越频繁，GC 回收越频繁，帧率波动越大。\n4. 切换到 Rendering，看 DrawCall 是否在目标范围内。\n\n## CPU 优化\n\n### 减少 Update 中的开销\n\nUpdate 每帧都执行。里面的每一行代码都是乘了 60（60fps）的开销。\n\n```csharp\n// 不要在 Update 做这些事\nvoid Update()\n{\n    var player = GameObject.Find(\"Player\");              // Find 遍历整个场景\n    var pos = GetComponent<Transform>().position;        // 不需要，直接用 transform\n    Debug.Log(transform.position);                       // Log 有巨大开销\n    var go = new GameObject();                           // 实例化有分配\n}\n```\n\n把查找/获取移到 Awake/Start，计算结果缓存起来，日志只在开发期保留。\n\n### 减少字符串操作\n\n```csharp\n// 不好：字符串拼接产生 GC\nstring text = \"Score: \" + score;\n\n// 好：插值也是拼接，短的不需要太纠结\nstring text = $\"Score: {score}\";\n\n// 如果大量连接（UI 文本），用 StringBuilder\nvar sb = new StringBuilder();\nsb.Append(\"HP: \");\nsb.Append(hp);\nsb.Append(\"/\");\nsb.Append(maxHp);\nuiText.text = sb.ToString();\n```\n\n### 善用对象池\n\n频繁 Instantiate / Destroy（子弹、敌人、粒子、滚动列表 Item）是 GC 的重灾区：\n\n```csharp\n// 对象池的基本思路\npublic class ObjectPool<T> where T : Component\n{\n    private Queue<T> pool = new Queue<T>();\n    private T prefab;\n\n    public T Get()\n    {\n        if (pool.Count > 0)\n        {\n            var obj = pool.Dequeue();\n            obj.gameObject.SetActive(true);\n            return obj;\n        }\n        return Instantiate(prefab);\n    }\n\n    public void Return(T obj)\n    {\n        obj.gameObject.SetActive(false);\n        pool.Enqueue(obj);\n    }\n}\n```\n\nUnity 2021+ 内置了 `UnityEngine.Pool`：\n\n```csharp\nusing UnityEngine.Pool;\n\nprivate ObjectPool<Bullet> bulletPool;\n\nvoid Start()\n{\n    bulletPool = new ObjectPool<Bullet>(\n        createFunc: () => Instantiate(bulletPrefab),\n        actionOnGet: (b) => b.gameObject.SetActive(true),\n        actionOnRelease: (b) => b.gameObject.SetActive(false),\n        actionOnDestroy: (b) => Destroy(b.gameObject)\n    );\n}\n\nBullet bullet = bulletPool.Get();\n// 用完\nbulletPool.Release(bullet);\n```\n\n## GC（垃圾回收）优化\n\nGC 是 Unity 优化的核心词之一。GC 触发时主线程会被暂停，在移动端上可能造成明显卡顿。\n\n**常见 GC 来源**：\n- 每帧 new 对象（`new WaitForSeconds`，`new Vector3()`，字符串拼接）。\n- 装箱：值类型转 `object`（foreach 循环、string.Format、`Debug.Log(value)`）。\n- LINQ：`Where`、`Select`、`OrderBy` 会分配迭代器和临时集合。热路径不要用。\n- `GetComponent<T>()` 的某些重载、`FindObjectsOfType<T>()`。\n- 协程的 `StartCoroutine(IEnumerator routine)` 本身有分配。\n\n**减少 GC 的技巧**：\n- 用 `RaycastNonAlloc` 代替 `RaycastAll`。\n- 用 `CompareTag` 代替 `tag == \"...\"`（tag 的 getter 会分配字符串）。\n- 用 `Physics.OverlapSphereNonAlloc` 代替 `OverlapSphere`。\n- 在非频繁路径中才使用 LINQ。\n- 把 `WaitForSeconds` 缓存到成员变量。\n\n## DrawCall 优化\n\nDrawCall 是 CPU 告诉 GPU「画这个」的次数。每次 DrawCall 都有开销。目标是控制 DrawCall 在合理范围——PC 可以到 1000-2000，移动端尽量 50-200。\n\n**减少 DrawCall 的方式**：\n- **静态批处理**：对不动的物体勾选 `Static`（Batching Static），Unity 会将它们合并成一个大的网格。\n- **动态批处理**：对小网格（< 300 顶点）的动态物体自动合并。条件严格（相同材质、顶点数限制等）。\n- **GPU Instancing**：大量相同模型（草、石头）用同一个材质 + 同一网格，GPU 一次渲染多个。在材质上勾选 `Enable GPU Instancing`。\n- **Sprite Atlas**：把多个小图合并成一张大图，用同一材质渲染，减少材质切换（SetPass Call）。\n- **Atlas 用于 UI**：UI 中不同 Image 用同一个 Atlas 内的 Sprite，共享材质，减少批次。\n\n## 移动端/微信小游戏特殊优化\n\n- **帧率目标**：移动端通常 30fps 就够（`Application.targetFrameRate = 30`）。60fps 耗电发热严重。\n- **纹理压缩**：Android 用 ASTC，iOS 用 ASTC，不要用 RGBA32。\n- **关闭垂直同步**：`QualitySettings.vSyncCount = 0`。\n- **分辨率适配**：不要用设备原生分辨率渲染。`Screen.SetResolution(1280, 720, true)` 或设置 RenderScale。\n- **降低 Shader 复杂度**：微信 WebGL 环境对复杂 Shader 支持有限。避免曲面细分、几何着色器。\n- **音频格式**：短音效用 WAV（未压缩），长音频用 MP3/Vorbis 流式加载。微信小游戏对音频格式有限制。\n\n## 优化的正确姿势\n\n1. 先用 Profiler 找到瓶颈（CPU/GPU/Memory/GC）。\n2. 针对瓶颈做改动。\n3. 再用 Profiler 确认改善了多少。\n4. 不要在没测过的情况下凭感觉「优化」。\n\n过早优化是万恶之源。但「知道怎么优化」不是过早——它让你写代码时避开明显的坑，而不是事后花三倍时间重构。\n"
      },
      {
        "slug": "Unity学习/多平台/微信小游戏适配",
        "folders": [
          "Unity学习",
          "多平台"
        ],
        "fileName": "微信小游戏适配.md",
        "title": "微信小游戏适配",
        "date": "2026-06",
        "tags": [
          "Unity",
          "微信小游戏",
          "WebGL",
          "SDK 接入"
        ],
        "excerpt": "微信小游戏是国内游戏开发的重要分发渠道。从 Unity 打包到微信小游戏，需要经历平台适配、SDK 接入、性能调优三个主要环节。\n\n## 技术栈概述\n\nUnity 打包微信小游戏的路线是：\n\n```\nUnity C# → IL2CPP → WebAssembly → 微信小游戏运行时\n```\n\n微信",
        "content": "# 微信小游戏适配\n> 2026-06 | Unity · 微信小游戏 · WebGL · SDK 接入\n\n微信小游戏是国内游戏开发的重要分发渠道。从 Unity 打包到微信小游戏，需要经历平台适配、SDK 接入、性能调优三个主要环节。\n\n## 技术栈概述\n\nUnity 打包微信小游戏的路线是：\n\n```\nUnity C# → IL2CPP → WebAssembly → 微信小游戏运行时\n```\n\n微信小游戏本质上是 WebGL 平台的封装。Unity 通过专有的 WebGL 构建目标 + 微信小游戏转换工具（插件），把 WebGL 产物包进微信的 `.wxapkg` 格式。\n\n核心依赖：\n- **Unity WebGL 构建模块**：必须安装。\n- **微信小游戏转换插件**：把 WebGL 产物转为微信可用格式。\n- **Unity 微信 SDK**：提供微信登录、支付、分享、广告等 JS 桥接。\n\n## 项目配置\n\n### Player Settings 关键调整\n\n```\nPlayer Settings:\n├── Resolution and Presentation\n│   ├── Default Canvas Width: 750\n│   ├── Default Canvas Height: 1334\n│   └── Run In Background: ✓（切后台不暂停）\n├── Other Settings\n│   ├── Color Space: Linear（Gamma 也行，但 Linear 色彩更好）\n│   ├── Auto Graphics API: ✓\n│   ├── Strip Engine Code: ✓（裁减没用到的引擎代码，减小包体）\n│   ├── Managed Stripping Level: Medium / High\n│   └── IL2CPP Code Generation: Faster (smaller) runtime\n├── Publishing Settings\n│   ├── Compression Format: Gzip\n│   └── Enable Exceptions: None（或 Explicitly Thrown Only）\n```\n\n异常处理设为 `None` 可显著减小 WebAssembly 体积，但会导致 try-catch 失效。如果必须捕获异常，选 `Explicitly Thrown Only`。\n\n### 包体控制\n\n微信小游戏对首包（首次下载的体积）有限制。目前大体是：\n- 首次启动下载：≤ 20MB\n- 分包加载：每个分包 ≤ 20MB，总数看类目\n\n策略：\n- 首包只放启动必需的资源：Logo、Loading 界面、主界面。\n- 关卡资源、音效、大图等打到分包，运行时按需下载。\n- Addressables 完美适配这个模型——首包 Group 设为 LocalBuildPath，分包 Group 设为 RemoteBuildPath。\n\n## SDK 接入\n\n### 微信原生 API 调用\n\n通过 JS 桥接调用微信 SDK：\n\n```csharp\n// C# 端\n[DllImport(\"__Internal\")]\nprivate static extern void WXLogin();\n\npublic void Login()\n{\n#if UNITY_WEBGL && !UNITY_EDITOR\n    WXLogin();\n#endif\n}\n```\n\n大多数项目会用封装好的 Unity-WebGL-微信插件，不需要手写 `DllImport`。常见的功能：\n- 微信登录 / 授权\n- 分享（`wx.shareAppMessage`）\n- 激励视频广告\n- Banner 广告\n- 支付（`wx.requestMinePayment`）\n\n## 常见适配问题\n\n### 文件系统\n\nWebGL 平台没有传统的文件系统。`Application.persistentDataPath` 实际映射到 IndexedDB（浏览器数据库），容量和性能有限。\n\n- `PlayerPrefs`：底层也是 IndexedDB，只适合存少量配置。\n- 大量数据用 `Application.persistentDataPath` + `File.WriteAllBytes`，但要关注存储空间限制。\n- 微信提供 `wx.getFileSystemManager()` 用于文件读写，但需要通过 JS 桥接。\n\n### 网络请求\n\n- Unity 的 `UnityWebRequest` 在 WebGL 里底层调的是浏览器的 `XMLHttpRequest` / `fetch`。\n- 微信小游戏限制了请求域名——必须在微信后台配置 `request 合法域名`。\n- WebSocket 也需要配置 `socket 合法域名`。\n- HTTPS 是强制要求。\n\n### 音频\n\n- WebGL 的音频支持比较弱。`AudioSource.PlayOneShot` 在移动端可能有延迟或失败。\n- 微信提供 `wx.createInnerAudioContext()` 作为替代方案，适合播放长音频（BGM）。\n- 短音效（SFX）尽量用小文件和 WebAudio API，而不是 Unity 的 AudioSource。\n- 微信小游戏要求在用户交互后才能播放音频（浏览器自动播放策略）。\n\n### 输入\n\n- 微信小游戏中的文本输入需要调用 `wx.showKeyboard()`，Unity 原生 InputField 可能不工作。\n- 第三方输入框插件或自绘输入框是常见方案。\n\n### 字体\n\n- Unity 默认字体（Arial）在 WebGL 中可能渲染异常。\n- 使用 TextMeshPro + SDF 字体是更可靠的选择。\n- 中文字体文件大。如需动态文本，使用系统默认字体（`Resources.GetBuiltinResource<Font>(\"LegacyRuntime.ttf\")`）或裁剪后的 TMP SDF 字体。\n\n## 调试\n\n- **Chrome DevTools**：微信开发者工具本质是定制的 Chromium。右键 → 审查元素，可以看到 Console、Network、Sources。\n- **真机调试**：微信开发者工具 → 预览 → 扫码。真机上行为可能与模拟器不同（特别是音频、性能、存储）。\n- **vConsole**：微信内置的调试面板，可以在真机上查看日志和网络请求。\n\n## 提交审核的注意事项\n\n- 类目和资质：游戏需要在微信公众平台选择正确类目，部分类目需要版号。\n- 用户隐私协议：必须展示隐私政策。\n- 首次授权：获取用户信息前需要用户明确同意。\n- 内容安全：文本和图片都走内容安全审核。\n- 测试账号：提供可完整体验游戏的测试账号，审核通过率会高很多。\n"
      }
    ],
    "talk": [
      {
        "slug": "AI编程助手感受",
        "folders": [],
        "fileName": "AI编程助手感受.md",
        "title": "AI 编程助手使用感受",
        "date": "2026-06",
        "tags": [
          "杂谈",
          "AI",
          "效率"
        ],
        "excerpt": "用了一个月 CodeWhale / Copilot 这类 AI 编程助手，记下一些真实感受——不是营销文，就是日常使用的体会。\n\n## 什么场景下真好用\n\n**写重复性代码**。配置类、数据类、简单的 CRUD、单元测试模板——这类东西 AI 写得又快又好。省下来的时间可以去思考架构。\n\n**探索不",
        "content": "# AI 编程助手使用感受\n> 2026-06 | 杂谈 · AI · 效率\n\n用了一个月 CodeWhale / Copilot 这类 AI 编程助手，记下一些真实感受——不是营销文，就是日常使用的体会。\n\n## 什么场景下真好用\n\n**写重复性代码**。配置类、数据类、简单的 CRUD、单元测试模板——这类东西 AI 写得又快又好。省下来的时间可以去思考架构。\n\n**探索不熟悉的 API**。比如想用 Unity 的 `PlayerInput` 组件但没看过文档，描述一下需求 AI 就能给出可运行的代码骨架。比翻文档快，但需要自己验证。\n\n**代码审查辅助**。把一段代码贴给 AI，问\"这里有没有潜在的空引用问题\"或者\"这段逻辑有没有边界条件没处理\"，AI 的检查比人工逐行更细致。\n\n**解释陌生代码**。接手别人的项目时，选一个复杂的函数让 AI 解释，比一行行读懂快得多。\n\n## 什么场景下不好用\n\n**跨文件的架构级重构**。AI 对单个文件的理解很好，但多个文件之间的依赖关系容易搞错。需要你来主导设计。\n\n**性能敏感的代码**。AI 倾向于写\"正确但可能慢\"的实现。热路径需要你自己优化。\n\n**领域知识很深的逻辑**。比如游戏里的伤害计算公式、特定 SDK 的接入流程——这些需要你给出足够的上下文，否则 AI 会编造 API。\n\n## 真实效率变化\n\n一个月下来，最明显的变化不是\"写得快了多少\"，而是：\n\n- **上下文切换成本大幅下降**。以前写代码 → 查文档 → 回代码需要来回切换注意力，现在大部分查询直接在编辑器里完成。\n- **写测试的意愿变高了**。因为测试模板 AI 能生成，从\"不想写测试\"变成\"改改就能用的测试\"。\n- **重构更频繁**。有 AI 帮你处理重复替换和格式调整，重构的心理门槛变低了。\n\n## 最大教训\n\n**尽量理解 AI 生成的代码** 对于程序员来说，尽量理解一下实现方法，如果你不理解AI给的代码，整个项目过程，你将处于一个蒙蔽的状态，这个会对对后续的维护造成很大的困扰。对于非程序员，也可以让AI列出各个模块对应的功能。\n\n还有一条：AI 不会拒绝你。你让它写一个糟糕的设计，它会照办。所以责任永远在你身上。\n"
      },
      {
        "slug": "游戏开发中的感觉对了",
        "folders": [],
        "fileName": "游戏开发中的感觉对了.md",
        "title": "游戏开发中的\"感觉对了\"",
        "date": "2026-06",
        "tags": [
          "杂谈",
          "游戏设计",
          "手感"
        ],
        "excerpt": "做游戏久了会发现一个现象：某个功能代码逻辑完全正确，但玩起来就是\"不对劲\"。跳起来飘、攻击没有打击感、UI 反馈慢半拍——这些都不是 bug，但比 bug 更折磨人。\n\n## 跳跃的\"重量感\"\n\n给角色加个跳跃功能再简单不过：\n\n```csharp\nrb.velocity = new Vector2",
        "content": "# 游戏开发中的\"感觉对了\"\n> 2026-06 | 杂谈 · 游戏设计 · 手感\n\n做游戏久了会发现一个现象：某个功能代码逻辑完全正确，但玩起来就是\"不对劲\"。跳起来飘、攻击没有打击感、UI 反馈慢半拍——这些都不是 bug，但比 bug 更折磨人。\n\n## 跳跃的\"重量感\"\n\n给角色加个跳跃功能再简单不过：\n\n```csharp\nrb.velocity = new Vector2(rb.velocity.x, jumpForce);\n```\n\n但你会发现角色像在月球上。试试这些调法：\n\n- **上升快、下落慢**：上升时给一个更大的初始速度，下落时减小重力倍率。角色会感觉\"有力\"。\n- **跳跃缓冲**：玩家按跳跃键时，如果在落地前 0.1 秒内按下，也判定为有效跳跃。Coyote Time。\n- **可变跳跃高度**：玩家松开跳跃键时，如果还在上升，把上升速度减半。这样短按 = 小跳，长按 = 大跳。\n\n```csharp\nif (Input.GetButtonUp(\"Jump\") && rb.velocity.y > 0)\n{\n    rb.velocity = new Vector2(rb.velocity.x, rb.velocity.y * 0.5f);\n}\n```\n\n## UI 反馈的时间差\n\n人眼对 100ms 以内的延迟几乎无感，但对 200ms 以上的延迟会明显觉得\"卡\"。UI 反馈要在这个时间窗内：\n\n- 按钮按下 → 0-50ms 内改变视觉状态（变色/缩放）\n- 加载开始 → 200ms 内显示 loading 动画\n- 操作结果 → 300ms 内给反馈（成功/失败）\n\n超过 500ms 还没有反馈，玩家会重复点击——然后就是各种奇怪的 bug。\n\n## 相机跟随\n\n这是最容易搞砸\"感觉\"的地方。直接挂 LateUpdate 跟随会让相机很僵硬：\n\n```csharp\n// 僵硬版\ntransform.position = target.position + offset;\n```\n\n加一点平滑：\n\n```csharp\n// 平滑版\nVector3 targetPos = target.position + offset;\ntransform.position = Vector3.Lerp(transform.position, targetPos, followSpeed * Time.deltaTime);\n```\n\n但还有更好的方式——根据目标速度做预测偏移、给相机加死区（目标在屏幕中一个小范围内移动时相机不跟）、Y 轴和 X 轴用不同的跟随速度。这些细节加起来，玩家不会注意到相机，但会觉得游戏\"很顺手\"。\n\n## 总结\n\n\"感觉\"不是玄学，它是一堆微小细节的叠加。每调一个参数就进游戏验证一次——眼睛和手指的判断比大脑快得多。\n"
      },
      {
        "slug": "代码里的心智状态",
        "folders": [],
        "fileName": "代码里的心智状态.md",
        "title": "从代码里看程序员的心智状态",
        "date": "2026-05",
        "tags": [
          "杂谈",
          "编程哲学",
          "代码质量"
        ],
        "excerpt": "翻自己半年前写的代码，经常有一种\"这真的是我写的吗\"的恍惚感。代码会留下痕迹——不只是功能的痕迹，更是写代码时心智状态的痕迹。\n\n## 焦虑型代码\n\n特征：\n- 过度防御：每个方法开头都有三层 null 检查，包括不可能为 null 的参数。\n- 过度注释：`// 此处将 x 赋值给 y`——生怕自",
        "content": "# 从代码里看程序员的心智状态\n> 2026-05 | 杂谈 · 编程哲学 · 代码质量\n\n翻自己半年前写的代码，经常有一种\"这真的是我写的吗\"的恍惚感。代码会留下痕迹——不只是功能的痕迹，更是写代码时心智状态的痕迹。\n\n## 焦虑型代码\n\n特征：\n- 过度防御：每个方法开头都有三层 null 检查，包括不可能为 null 的参数。\n- 过度注释：`// 此处将 x 赋值给 y`——生怕自己忘记，实际上只是在翻译代码。\n- 类膨胀：一个 PlayerController 里塞了 800 行，因为\"改起来方便\"。\n\n这通常发生在赶 deadline 或者对项目不熟悉的时期。不知道该信任什么，所以什么都防备。\n\n## 疲惫型代码\n\n特征：\n- 命名崩坏：`var a1`, `var a2`, `var temp`——脑子已经转不动命名了。\n- 复制粘贴的痕迹：同一段逻辑出现在三个不同文件里，只改了变量名。\n- 没有错误处理：`try { ... } catch { }`——空的 catch 块。\n\n通常在深夜或者连续工作 6 小时后出现。这种时候最好的选择是停下。\n\n## 冷静型代码\n\n特征：\n- 方法短：平均 15 行以内，一个方法只做一件事。\n- 命名自解释：不需要注释也能读懂意图。\n- 边界清晰：错误处理明确、资源管理到位、测试顺手写了。\n\n通常出现在思路清楚、没有被打断的上午。\n\n## 为什么要在意这件事\n\n因为代码不是你一个人读的——三个月后的你、接手你代码的同事、被安排来修改这个模块的人，都要面对你留下的心智痕迹。\n\n写得快的代码不一定是好代码。但写的时候心平气和的代码，往往是更好的代码。\n\n下次写代码前，先花两分钟想清楚数据结构。这一小步能避免后面一大片焦虑型代码。\n"
      }
    ]
  },
  "about": "# 关于\n\n我是一名 Unity 游戏开发者，有一年的实际项目经验。参与过休闲游戏、模拟经营、RPG等类型的开发，熟悉 Unity 引擎的常用模块和开发流程。\n\n目前正在学习 AI 开发相关知识。这个网站用来记录学习过程中的笔记、代码片段和项目实践。\n\n**技能标签**\n\nUnity · C# · Game Framework · UGUI · FGUI · Python · Lua · AI Agent · Git · MiniGame\n"
};
