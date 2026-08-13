---
title: 第 5 章：七款 Agent 的桌面体验
description: AI Agent 零基础教程
layout: doc
lastUpdated: true
---

# 第 5 章：七款 Agent 的桌面体验

## 页面顺序

1. [Claude 桌面版](/guide/05-claude.html)
2. [Codex 桌面版](/guide/05-codex.html)
3. [TraeWork 中国版](/guide/05-traework.html)
4. [WorkBuddy](/guide/05-workbuddy.html)
5. [Qoder 中国版](/guide/05-qoder.html)
6. [ZCode 中国版](/guide/05-zcode.html)
7. [Hermes Desktop](/guide/05-hermes.html)

## 四类入门分组

- 海外闭源托管型综合 Agent：Claude、Codex；
- 国内综合型 Agent：TraeWork 中国版、WorkBuddy；
- 代码优先型 Agent：Qoder 中国版、ZCode 中国版；
- 开源自主型 Agent：Hermes Desktop。

分组只用于帮助新手建立第一印象，不代表能力排名。七款产品必须使用相同结构、共同基准任务和验收口径，最终在第 6 章进行横向选择。

## 当前状态

正文已完成（2026-08-13）。七款产品中六款已完成统一基准任务实测（2026-08-12），页面填入版本、订阅、实测数据、六维评分摘要与界面讲解引用；Claude 因账号受限作为阻断案例处理，无性能数据。评分底稿见 `docs/12-benchmark-scoring.md`，横向选择见 `docs/10-selection-matrix.md`。

## 扩展样本说明

QoderWork CN（0.9.12）已作为第八个扩展样本完成统一基准实测（2 分钟 + 不足 1 分钟两段计费、8.68 Credits / ¥0.34，存在与 Qoder CN 相同的越权读取问题），但未纳入本章正式七款页面——benchmark v1 材料冻结为七款产品。其正式纳入与代码优势任务测试将在 benchmark v2 完成，届时本章升级为八款页面。

## 共同测试条件（六款实测产品）

- 统一任务：使用冻结材料包（input/ 7 份文件），整理 AI Agent 教程材料，生成六个指定交付文件并自检；
- 统一验收：6/6 交付、7/7 输入 SHA-256 与基线一致、记录用时/人工介入/权限确认/成本；
- 分层呈现：产品托管路径（WorkBuddy、TraeWork、Qoder、Codex）与 BYOK 路径（ZCode、Hermes）分开，Credits/积分/人民币/API 四种成本口径不横比；
- 证据：每页结论回指 `research/runs/*/run-record.md` 与截图；界面讲解见 `docs/11-interface-guides/`。
