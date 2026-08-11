# 订阅、Credits 与新人福利调研

> 核验快照：2026-08-11（Asia/Shanghai）
>
> 适用范围：桌面图形界面版本；Qoder、TraeWork、ZCode 均使用中国版。
>
> 内容性质：教程框架阶段的事实底稿，发布前仍需复核价格、活动状态和客户端实际界面。

## 先给结论

不能只比较“每月多少钱”。对新手真正有用的比较至少要同时回答：钱付给谁、额度用什么单位表示、额度何时重置、能否自带 API Key、换模型后是否还是同一种产品体验，以及新人福利何时失效。

教程采用以下五层口径：

1. 产品官方订阅：购买后直接获得桌面产品及其托管能力；
2. 官方 API：通常按 Token 或实际调用量另行计费；
3. BYOK：在 Agent 内填入自己的 API Key，由模型供应商结算；
4. 第三方切换或中转：改变模型通道、配置和账单，不等同于官方订阅体验；
5. 活动福利：必须附地区、产品线、资格、有效期、截止时间和核验日期。

官方订阅通常能提供最完整的兼容性、功能联动、更新与支持，因此适合作为新手教程的默认路径。但前提是官方服务在读者所在地区可用、账号状态稳定且支付与申诉渠道明确。“官方订阅一定在所有任务上效果最好”仍需通过相同任务实测，不能只凭品牌下结论。

## 当前比较快照

| 产品与范围 | 官方付费主线 | 免费或新人入口 | 模型与 API 自主性 | 当前写作判断 |
|---|---|---|---|---|
| Codex 桌面版 | 随 ChatGPT Free、Go、Plus、Pro 等方案提供；Go $8/月、Plus $20/月、Pro $100/月起 | Free 可体验轻量任务；未核实到当前个人学生赠送 | 套餐内用量、追加 Credits、API Key 按 Token 计费是三套口径 | 新手优先讲官方 ChatGPT 订阅；API Key 不包含部分云端功能 |
| Claude 桌面版 | Free；Pro 年付折合 $17/月或月付 $20；Max $100/月起 | Free 可用；未核实到面向所有个人学生的通用折扣 | Pro 包含 Claude Code、Cowork、Design、Science；API 计费另算 | 作者账号已被封，原因尚未核实；账号与地区稳定性必须先于付费建议说明 |
| Qoder 中国版 | 专业版 ¥59/月、2,000 Credits；高级版 ¥169/月、6,000 Credits；旗舰版 ¥559/月、20,000 Credits，当前显示敬请期待 | 体验版 2 周、300 Credits；个人资源包 ¥40/1,000 Credits，有效期 1 个月 | 个人专业版支持阿里云百炼、智谱、Kimi、MiniMax 的 API Key；由供应商计费，不消耗 Qoder Credits | 不使用国际站美元价格；旧学生活动属于 QoderWork CN 且已截止 |
| TraeWork 中国版 | Lite、Pro、Pro+、Ultra；连续包月分别为 ¥45、¥89、¥219、¥629，Lite/Pro 有新客首月价 | Free 500 积分/月；价格页当前显示新人赠送 4,500 积分，活动规则与到账条件发布前复核 | 官方文档明确 Seed 模型折扣，但尚未核实 TraeWork 桌面版的 BYOK 或通用自定义模型入口 | 先按官方积分体系介绍，不把 TraeCode 的模型配置自动迁移到 TraeWork |
| ZCode 中国版 | 可在应用内连接 BigModel 的 GLM Coding Plan；新版套餐按积分并设 5 小时与每周额度 | 首次使用 5 天：GLM-5.2 300 万 Token/天，GLM-5-Turbo 200 万 Token/天 | 支持 BigModel、兼容 Anthropic/OpenAI 协议的 API Key、自定义供应商及团队通道 | 自主性较高；官方推荐路径仍是 BigModel 中国区账号与 GLM Coding Plan |
| Tencent WorkBuddy | WorkBuddy.ai 个人版：Free 100 Credits/月；Pro $10/月或 $96/年，2,000 Credits/月 | 新用户 250 Credits，14 天有效；符合条件者可绑卡开启 7 天 Pro 试用并得 500 Credits | 支持内置模型、供应商、Coding Plan、Token Plan、自定义 API 与 Ollama | 官方中文文档中的个人版为美元计价；大陆腾讯云购买页与国际个人站活动必须分开写 |
| Hermes Desktop | 桌面应用开源、MIT；Nous Portal 提供 Free、Plus、Super、Ultra 和月度 Credits | 官方公开页未展示可直接引用的具体赠送额度 | 可使用 Nous Portal、OpenRouter、OpenAI、自有端点及其他供应商 | “开源”不等于“模型免费”；成本由 Portal、API、托管和本地硬件共同决定 |

## 分产品核验笔记

### Codex

- 官方页面说明 ChatGPT Work 与 Codex 共享用量体系，Codex 包含在 Free、Go、Plus、Pro、Business、Edu、Enterprise 中。
- 个人方案当前列出 Free $0、Go $8/月、Plus $20/月、Pro $100/月起。
- Plus、Pro 达到包含额度后可购买额外 ChatGPT Credits。
- API Key 模式按标准 API Token 价格计费，且不包含 GitHub 自动代码审查、Slack 等云端能力。
- 写作时不得把“套餐内用量”“追加 Credits”“API Key Token 账单”合成一个额度。

官方来源：[Codex Pricing](https://learn.chatgpt.com/docs/pricing)

### Claude

- Free 为 $0。
- Pro 年付 $200，折合 $17/月；月付 $20。Pro 页面明确包含 Claude Code、Claude Cowork、Claude Design 和 Claude Science。
- Max 从 $100/月起，可选相对 Pro 的 5 倍或 20 倍用量。
- Anthropic 的 Claude for Education 是面向高等教育机构的方案；官方公告提到校园级接入、Campus Ambassadors 与学生项目 API Credits 计划，但没有证明所有个人学生都能直接领取 Pro 或固定 Credits。
- 作者当前 Claude 账号已被封，桌面端只能核对登录前欢迎页。现阶段尚无充分证据确认具体触发原因，因此正文只能写成个人经历与风险提示，不能概括为所有用户都容易被封。
- 面向中国大陆新手时，应把地区可用性、注册与支付条件、账号风控、申诉渠道和订阅中断损失列在功能介绍之前。教程不提供规避地区限制或绕过平台风控的方法。

官方来源：[Claude Pricing](https://claude.com/pricing)、[Introducing Claude for Education](https://www.anthropic.com/news/introducing-claude-for-education)

### Qoder 中国版

- 必须使用 Qoder 中国站价格页，不采用国际站的 $20 / $60 / $200。
- 中国版当前个人方案：体验版 ¥0；专业版 ¥59/月、2,000 Credits；高级版 ¥169/月、6,000 Credits；旗舰版 ¥559/月、20,000 Credits，按钮显示“敬请期待”。
- 体验版提供 2 周试用及 300 Credits。
- 个人资源包为 ¥40/1,000 Credits，自购买日起 1 个月有效。
- 个人专业版支持通过 API Key 接入阿里云百炼、智谱、Kimi、MiniMax。自定义模型由供应商直接结算，不消耗 Qoder CN Credits。
- Plan Credits 按购买日形成周期，到期未使用部分不结转；Add-on Credits 有独立有效期。
- 官方文档中“新用户 2,000 Credits、学生/教师 4,000 Credits、邀请奖励”的活动范围明确为 QoderWork CN 桌面端个人版，页面标题已标注 7 月 30 日截止。它不能作为 2026-08-11 的 Qoder CN IDE 当前福利。

官方来源：[Qoder CN Pricing](https://qoder.cn/pricing)、[Qoder CN Credits](https://docs.qoder.cn/product-overview/credits)、[Qoder CN 自定义模型](https://docs.qoder.cn/user-guide/custom-model)、[已截止的 QoderWork CN 活动规则](https://docs.qoder.cn/product-overview/qoderwork-cn-new-user-credits-claim-and-referral-reward-program-terms-and-conditions)

### TraeWork 中国版

- 官方计费文档当前列出：Lite 单月 ¥49、连续包月 ¥45，新付费用户首月 ¥9.9；Pro 单月 ¥99、连续包月 ¥89，新付费用户首月 ¥59；Pro+ 单月 ¥239、连续包月 ¥219；Ultra 单月 ¥699、连续包月 ¥629。
- Lite 每月 2,000 个 TraeWork 专属积分；Pro、Pro+、Ultra 分别为 4,000、12,000、40,000 通用积分。
- 官网价格页当前显示 Free 为 500 积分/月，并出现新人赠送 4,500 积分的横幅。由于活动入口、到账条件和有效期容易变化，正式发布前必须用新账号在中国版桌面端复核。
- 官方文档说明 Seed-2.1-Turbo、Seed-Code 享 2.5 折计费。
- 当前公开的 TraeWork 文档没有提供可确认的 BYOK 或通用自定义模型操作说明。因此暂不写成“模型接入完全自主”，也不把 TraeCode 的配置能力直接套用到 TraeWork。

官方来源：[TRAE 中国区定价](https://www.trae.cn/pricing)、[TraeWork 积分计费说明](https://docs.trae.cn/work_credit-based-billing-is-available)、[TraeWork 桌面版快速开始](https://docs.trae.cn/work_trae-work-web-and-desktop-quickstart)

### ZCode 中国版

- 新用户首次使用可获得 5 天体验；仅在这 5 天内每日发放 GLM-5.2 300 万 Token 和 GLM-5-Turbo 200 万 Token，合计 500 万 Token/天。
- 官方推荐国内用户连接 BigModel 账号和 GLM Coding Plan。
- 新版 Coding Plan 使用积分，并同时存在 5 小时额度和每周额度；Pro、Max 用量约为 Lite 的 6 倍、14 倍。具体价格和折算规则应链接套餐页面，不在正文写死。
- 除官方套餐外，可使用 API Key，支持 Anthropic/OpenAI 兼容协议、自定义供应商、团队或自托管通道。

官方来源：[ZCode 新手与权益](https://zcode.z.ai/cn/docs/welcome)、[ZCode 连接模型与套餐](https://zcode.z.ai/cn/docs/configuration)

### Tencent WorkBuddy

- 官方中文文档称其为腾讯推出的全场景职场 AI 智能体桌面工作台。
- WorkBuddy.ai 个人版当前为 Free 100 Credits/月；Pro $10/月或 $96/年，基础 1,000 加赠 1,000，合计 2,000 Credits/月。
- 新用户注册赠送 250 Credits，有效期 14 天。满足“从未购买 Pro、从未领取试用”等条件的用户，绑定信用卡并开启自动续订后，可获得一次 7 天 Pro 试用和 500 Credits，有效期 7 天。
- 官方文档还列出限时每日活跃奖励：Free 30 Credits/天、Pro 50 Credits/天，结束时间另行通知。此类活动不能写成永久权益。
- 自定义模型页面支持提供商、腾讯云 Token Plan、腾讯云/智谱/Kimi Coding Plan、自定义 API 与 Ollama 本地模型，模型接入自由度较高。
- 腾讯云中国区产品页另有“限时双倍 Credits”活动，但与 WorkBuddy.ai 美元个人套餐的地区、购买入口及活动规则应分别核对。

官方来源：[Tencent WorkBuddy 简介](https://www.workbuddy.ai/docs/zh/workbuddy/Overview)、[订阅政策](https://www.workbuddy.ai/docs/zh/workbuddy/Subscription)、[定价](https://www.workbuddy.ai/docs/zh/workbuddy/pricing)、[积分说明](https://www.workbuddy.ai/docs/zh/workbuddy/credits)、[模型配置](https://www.workbuddy.ai/docs/zh/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Model)、[腾讯云 WorkBuddy 产品页](https://cloud.tencent.com/product/workbuddy)

### Hermes Desktop

- 核验对象为 Nous Research 的 Hermes Agent 与 Hermes Desktop，而不是同名模型或仅命令行界面。
- 官方提供 Windows 10/11 与 macOS 12+ 桌面安装包，项目采用 MIT License。
- Hermes 可连接 Nous Portal、OpenRouter、OpenAI、自有端点及其他供应商；因此模型账单可能来自 Portal 订阅、第三方 API 或自托管资源。
- 官方首页只公开展示 Free、Plus、Super、Ultra 四档，并说明付费档包含月度 Credits；没有在无需登录的页面展示本次可可靠引用的具体价格与额度。正文应写“以登录后的 Portal 当前页面为准”，不能猜测。
- 对新手应明确：桌面 GUI 降低了操作门槛，但开放模型、沙箱、远程环境、自动化和长期维护仍使其更偏极客型。

官方来源：[Hermes Agent](https://hermes-agent.nousresearch.com/)、[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

## 怎样介绍 CC Switch

CC Switch 是第三方开源桌面配置管理工具，用于统一管理 Claude Code、Claude Desktop、Codex、Gemini CLI、Hermes 等工具的供应商、MCP、Skills 与配置。它不是模型供应商，也不会把第三方通道自动变成“官方订阅”。

教程可以介绍它的定位，但默认推荐新手先使用 Codex 和 Claude 的官方订阅，理由是官方订阅的功能组合、账号支持、兼容性和更新路径更容易解释和复现。若读者改用第三方 API 或中转，还要单独评估：

- 模型是否真实、版本是否一致；
- 工具调用、缓存、上下文和多模态能力是否兼容；
- 数据会经过哪些服务商；
- 账号与密钥安全、退款、发票和服务稳定性；
- 是否符合上游产品条款与所在组织政策；
- 切换配置后如何备份、恢复和回到官方登录。

来源：[farion1231/cc-switch](https://github.com/farion1231/cc-switch)

## 发布前复核清单

- [ ] 产品名称、地区站点和桌面客户端版本一致；
- [ ] Qoder、TraeWork、ZCode 页面只引用中国版资料；
- [ ] 价格页与客户端订阅弹窗金额一致；
- [ ] 免费额度的单位、刷新周期、结转规则写清楚；
- [ ] 新人或学生福利仍在活动期内；
- [ ] 活动范围没有从 Work、CLI 或企业版误迁移到 IDE；
- [ ] BYOK 支持的供应商、协议和计费方已核对；
- [ ] 截图显示账号地区、客户端版本和核验日期，并完成脱敏；
- [ ] 第三方工具没有被描述成官方通道；
- [ ] 账号地区、登录状态、服务可用性、风控经历和申诉路径已区分官方事实与作者经历；
- [ ] 所有易变信息都有“最后核验日期”和官方链接。
