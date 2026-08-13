# 版本与更新日志跟踪

> 核验快照：2026-08-13（Asia/Shanghai）
>
> 用途：跟踪七款产品的官方更新日志，维护「本机测试版本」与「官方最新版本」的对照，并从功能演进中观察差异与共性。
>
> 性质：本文件是仓库内部维护底稿（不进站点）。官方更新日志属于**易变信息**，只能作为「官方声明」，不能替代共同基准任务实测；正文结论仍以 `research/runs/*/run-record.md` 实测为准。

## 1. 版本对照快照（2026-08-13 核验）

| 产品 | 本机测试版本 | 官方最新版本 | 发布日期 | 对照结论 | 官方来源 |
|---|---|---|---|---|---|
| Claude 桌面版 | 1.22209.3.0 | 无公开版本号 | — | 无公开更新日志（应用内发布 What's new） | Anthropic 未公开 |
| Codex 桌面版 | 26.803.10989.0 | 桌面版无公开日志；CLI 线 rust-v0.148.0-alpha | 2026-08-13 | 桌面版无法对照；CLI 处于活跃开发 | github.com/openai/codex（CLI 仓库） |
| TraeWork 中国版 | 0.1.47（构建 2.3.68299） | v0.1.47-48 | 2026-08-11 | 本机与官方最新一致 | trae.cn/changelog |
| WorkBuddy | 5.3.11（运行记录）/ 5.3.12（截图） | 5.3.12 | 2026-08-12 | 截图版本与官方最新一致 | codebuddy.cn/docs/workbuddy/Changelog |
| Qoder 中国版 | 1.23.0（壳 1.106.3） | v1.24.1 | 2026-08-12 | 官方已更新 1 个版本 | docs.qoder.cn（Qoder CN 更新日志） |
| ZCode 中国版 | 3.7.6 | 3.7.6 | 2026-08-12 | 本机与官方最新一致 | zcode.z.ai/cn/changelog |
| Hermes Desktop | 0.17.0 | v0.20.0 | 2026-08-03 | **本机落后 3 个大版本**（0.17→0.18→0.19→0.20） | github.com/NousResearch/hermes-agent/releases |

结论：五款产品中四款本机版本与官方最新一致（TraeWork / WorkBuddy / ZCode / 以及 Qoder 差 1 个小版本）；Hermes 明显滞后（本机 0.17.0 为 6-19 版本，官方 8-03 已发 0.20.0），本页实测结论基于旧版本，新版本能力未实测。

## 2. 各产品近期更新要点（官方来源，2026-07 中旬起）

### TraeWork 中国版（trae.cn/changelog）
- v0.1.47-48（08-11）：上线「我的文件」功能，修复已知问题
- v0.1.44-46（08-07）：对话分享、灰度插件自动推荐、整合输入框按钮、办公助理
- v0.1.40-43（07-31）：全新积分体系、模版库

### WorkBuddy（codebuddy.cn/docs/workbuddy/Changelog）
- 5.3.12（08-12）：灵感分享口令直达；弱网/唤醒后同步稳定性；输入框与模型选择器样式优化；修复大 Markdown 预览卡死、中文路径 Access denied、记忆膨胀、锁屏远程控制重置等
- 5.3.11（08-07）：「检查网络」错误快捷入口、企业微信/微信流式输出、任务批量删除/归档、每轮运行耗时显示、Teams 邀请免审批、Python 连接器运行时
- 5.3.3（07-21）：项目计划看板、企业级智能体配置、腾讯文档深度集成、PPT 生成插件
- 5.2.6（07-12）：助手配额分层、灵感 URL 分享

### Qoder 中国版（docs.qoder.cn）
- v1.24.1（08-12）：对话级代码评审、Spec 体验优化、多仓库知识检索、Slash Command 快捷触发、Hook 传参、**危险命令识别增强**（覆盖高风险 Git 子命令）
- v1.23.0（08-06）：实时语音协作（绑定工作区、声纹识别）、侧边任务、定时任务全面升级、Deeplink 一键装插件、HTTP Hooks（事件外发 + 放行/拦截/注入上下文）
- v1.9.0（07-31）：Qoder Voice 实时语音、Quest 插件市场管理、Better Harness 工程实践检查、Canvas 企业分享标注、企业版 MCP 统一管控
- 备注：v1.23.0 起与 Qoder IDE 国际版版本号对齐

### ZCode 中国版（zcode.z.ai/cn/changelog）
- 3.7.6（08-12）：PPT 逐元素评论；修复用量恢复、远程丢消息、定时任务误删、配额耗尽停止重试等
- 3.7.5（08-10）：记忆页按项目浏览、任务工作台分组、`@` 引用插件/文件/对话、空闲任务自定义模型子代理、自动化任务自定义分钟间隔、子代理「思考强度」
- 3.6.5（08-03）：项目级记忆、全局防休眠、模型最大输出长度、Kimi K3 256K、`/side` 与 `/btw` 侧边对话、自动化任务新视图
- 3.5.2（07-26）：内置 Web 应用集成、PDF 平滑缩放预览、统一外观设置、仓库知识库目录与图表生成
- 3.4.2（07-22）：定时任务自定义重复规则、侧栏辅助对话、代码库 Wiki、插件商店改版、远程工作区/WSL 同步、飞书流式卡片

### Hermes Desktop（github.com/NousResearch/hermes-agent/releases）
- v0.20.0（08-03，「The Herald」）：实时对话语音（流式 TTS、barge-in、设备端唤醒词）；A2A v1.0 跨代理通信；签名出站 webhook；带可验证引用的 grounded research；桌面端升级为平台（artifacts 实时预览、插件 SDK、全局快捷入口、多窗口）；CLI 新增 `!` shell 模式、`/init`、`/diff`、`/context`、`/focus`
- v0.19.0（07-20，「The Quicksilver」）：全平台首 token 延迟降 ~80%（4.3s→0.9s）；桌面端流式 Markdown 渲染快 14×、虚拟化 diff、快速会话切换；Bitwarden/1Password 集成；智能审批；子代理实时可视
- v0.18.0（07-01，「The Judgment」）：清零 P0/P1 issue（~700 项）；Mixture-of-Agents 一等公民；agent 自我验证工作成果；`/goal` 完成契约、`/learn` 记忆
- v0.17.0（06-19，「The Reach」，本机版本）：iMessage 通道、Raft agent 网络、子代理后台运行、图像编辑、Cursor Composer 接入、memory 工具升级
- v0.16.0（06-05，「The Surface」）：原生桌面 App 首次发布（三平台、一键安装、应用内自更新、简体中文全量翻译）

### Codex（CLI 仓库 openai/codex）
- 桌面版无公开更新日志；CLI 正在 rust 重构（rust-v0.148.0-alpha，08-13），与桌面版版本号体系独立，两者功能不能直接对应。

### Claude 桌面版
- 无公开更新日志（应用内发布）；无法从官方渠道核对版本演进。

## 3. 功能观察：差异与共性（来自更新日志，非实测）

> 以下仅为「官方更新日志声明的功能演进方向」，用于理解产品定位差异；不代表任何实测结论。

### 3.1 共性（多数产品同时在做）

| 共性方向 | 代表证据 |
|---|---|
| **实时语音/会话** | Qoder Voice（实时语音、声纹）、Hermes 实时对话语音、TraeWork 办公助理、WorkBuddy 企业微信/微信流式输出 |
| **插件/扩展生态** | Qoder 插件市场、ZCode 插件商店、WorkBuddy 连接器/插件、Hermes 插件 SDK、TraeWork 插件自动推荐 |
| **自动化/定时任务** | Qoder 定时任务升级、ZCode 自动化任务视图、WorkBuddy 自动化、Hermes `/goal` 完成契约 |
| **记忆与上下文管理** | ZCode 项目级记忆/记忆页、WorkBuddy 记忆修复、Hermes memory 工具、Qoder 多仓库知识检索 |
| **分享与协作** | TraeWork 对话分享、WorkBuddy 灵感分享口令、ZCode 飞书流式卡片、Qoder Canvas 企业分享 |
| **模板/复用** | TraeWork 模版库、ZCode 模板库/Wiki、WorkBuddy 项目计划看板、Qoder Spec |

### 3.2 差异（定位分水岭）

| 分组 | 产品 | 更新日志里的典型差异化功能 |
|---|---|---|
| 托管型综合（办公向） | WorkBuddy | 腾讯生态深度集成（企业微信/微信/腾讯文档）、灵感分享、任务批量管理、PPT 生成——围绕「办公协作」 |
| 托管型综合（办公向） | TraeWork | 办公助理、对话分享、三模式（Work/Code/Design）——围绕「零门槛综合任务」 |
| 代码优先（工程向） | Qoder | 对话级代码评审、HTTP Hooks、危险命令识别、Slash Command、Deeplink 装插件——围绕「开发者工程流」 |
| 代码优先（工程向） | ZCode | 子代理思考强度、定时任务、代码库 Wiki、远程工作区/WSL、模型多样性（GLM/Kimi/K3）——围绕「项目工程与持续任务」 |
| 开源自主型 | Hermes | A2A 跨代理通信、插件 SDK、密码管理器集成、iMessage 通道、自我验证、Mixture-of-Agents——围绕「开放生态与自主性」 |

### 3.3 观察结论（供内容维护参考）

1. **「自动化 + 记忆 + 插件」已成为全行业标配方向**，教程第 11-14 章（上下文、模板、Skill、记忆）与第 15-18 章（Harness、多 Agent）的主题与行业演进方向一致，无需大改；
2. **差异化仍集中在产品定位**：办公型强调协作集成，代码型强调工程能力，开源型强调开放自主——与第 5、6 章的分组口径吻合；
3. **值得关注的实测复核点**：Qoder v1.24.1「危险命令识别增强」与本轮实测的「越界读取」问题相关（但更新日志未直接声明修复，保持待验证）；WorkBuddy 5.3.11→5.3.12 的差异已由官方日志明确（灵感分享、同步稳定性、样式），此前「待验证」项可关闭；
4. **Hermes 版本滞后是内容风险**：本机 0.17.0 与官方 0.20.0 差 3 个大版本，若后续补测建议升级到最新版重新实测。

## 4. 维护建议

- 本文件与 `docs/07`（订阅价格）、`docs/16`（发布前质检）的季度复核机制合并执行：每季度核验一次版本对照表与功能演进；
- 官方来源清单（复制到剪贴板便于复查）：
  - TraeWork：https://www.trae.cn/changelog
  - WorkBuddy：https://www.codebuddy.cn/docs/workbuddy/Changelog
  - Qoder CN：https://docs.qoder.cn/product-overview/qoder-cn-update-log
  - ZCode：https://zcode.z.ai/cn/changelog
  - Hermes：https://github.com/NousResearch/hermes-agent/releases
  - Codex CLI：https://github.com/openai/codex/releases
  - Claude：无公开来源（应用内 What's new）
