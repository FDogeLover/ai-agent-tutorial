---
layout: home
title: AI Agent 零基础教程
description: 从选择、使用到管理 AI Agent 的实践教程
lastUpdated: false
---

<div class="home-hero">
  <h1 class="home-title">AI Agent 零基础教程</h1>
  <p class="home-subtitle">
    不背参数、不写代码，用 23 章实践内容学会选择、使用、管理并逐步定制 AI Agent。<br />
    每章都让你带走一件可复用的成果：任务卡、检查清单、模板、Skill 或一张系统草图。
  </p>
  <div class="home-actions">
    <a class="home-btn primary" href="/guide/00-preface">开始阅读 · 序章</a>
    <a class="home-btn" href="/selection/README">先看七款产品怎么选</a>
  </div>
</div>

<div class="home-section">
  <h2>六篇主线 · 从认识到系统化</h2>
  <div class="home-grid">
    <a class="home-card" href="/guide/01-what-is-an-agent">
      <strong>第一篇 · 认识</strong>
      <span>Agent 到底是什么、能做什么不能做什么、人与它怎样分工。</span>
    </a>
    <a class="home-card" href="/selection/README">
      <strong>第二篇 · 选型</strong>
      <span>不背参数先看维度；七款产品实测体验与横向选择。</span>
    </a>
    <a class="home-card" href="/guide/07-task-brief">
      <strong>第三篇 · 任务</strong>
      <span>任务卡、安全边界、过程跟进、验收复盘，跑通第一个闭环。</span>
    </a>
    <a class="home-card" href="/guide/11-context-management">
      <strong>第四篇 · 工作流</strong>
      <span>上下文、模板、Skill、规则记忆，把经验变成资产。</span>
    </a>
    <a class="home-card" href="/guide/15-what-is-harness">
      <strong>第五篇 · Harness</strong>
      <span>理解并搭建你的工作系统：六层架构、多 Agent 与可靠性。</span>
    </a>
    <a class="home-card" href="/guide/19-work-case">
      <strong>第六篇 · 案例</strong>
      <span>工作、生活、创作、项目四类真实案例，照着做即可。</span>
    </a>
  </div>
</div>

<div class="home-section">
  <h2>七款产品实测（2026-08，同一基准任务）</h2>
  <div class="home-grid">
    <a class="home-card small" href="/guide/05-claude"><strong>Claude 桌面版</strong><span>账号可用性阻断案例</span></a>
    <a class="home-card small" href="/guide/05-codex"><strong>Codex</strong><span>综合交付一致性最佳</span></a>
    <a class="home-card small" href="/guide/05-traework"><strong>TraeWork 中国版</strong><span>新手最省心</span></a>
    <a class="home-card small" href="/guide/05-workbuddy"><strong>WorkBuddy</strong><span>0 介入 + diff 可见</span></a>
    <a class="home-card small" href="/guide/05-qoder"><strong>Qoder 中国版</strong><span>最快最省（注意边界）</span></a>
    <a class="home-card small" href="/guide/05-zcode"><strong>ZCode 中国版</strong><span>变更透明最强</span></a>
    <a class="home-card small" href="/guide/05-hermes"><strong>Hermes Desktop</strong><span>高自主 · 自动恢复实证</span></a>
    <a class="home-card small" href="/selection/01-comparison-table"><strong>横向选择表</strong><span>六维评分对照</span></a>
  </div>
</div>

<div class="home-section">
  <h2>三条学习路径</h2>
  <div class="home-grid three">
    <div class="home-card plain">
      <strong>零基础起步</strong>
      <span>序章 → 第 1–10 章 → 任选一个案例 → 第 23 章。走通一次完整任务。</span>
    </div>
    <div class="home-card plain">
      <strong>办公与生活</strong>
      <span>第 2、4–12 章 → 工作/生活案例 → 第 14、23 章。建立自己的模板与约定。</span>
    </div>
    <div class="home-card plain">
      <strong>进阶与系统化</strong>
      <span>第 7–18 章 → 对照失败案例复盘 → 第 23 章。搭建最小 Harness。</span>
    </div>
  </div>
</div>

<div class="home-section note">
  <p>
    ⚠️ <strong>易变信息提醒</strong>：价格、福利、版本会变化。正文中标注了核验日期，正式决策前请以官方页面为准。
    全部实测数据与方法论基于 2026-08 的七款桌面 Agent 统一基准测试。
  </p>
</div>

<style scoped>
.home-hero {
  text-align: center;
  padding: 48px 0 24px;
}
.home-title {
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
}
.home-subtitle {
  font-size: 17px;
  line-height: 1.8;
  color: var(--vp-c-text-2);
  max-width: 680px;
  margin: 0 auto;
}
.home-actions {
  margin-top: 24px;
  display: flex;
  gap: 12px;
  justify-content: center;
}
.home-btn {
  display: inline-block;
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
}
.home-btn.primary {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #fff;
}
.home-section {
  margin: 40px auto 0;
  max-width: 900px;
}
.home-section h2 {
  font-size: 22px;
  border-top: none;
  padding-top: 0;
  margin-bottom: 16px;
}
.home-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.home-grid.three {
  grid-template-columns: repeat(3, 1fr);
}
.home-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: border-color 0.2s, transform 0.2s;
}
.home-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-1px);
}
.home-card strong { font-size: 16px; }
.home-card span { font-size: 14px; line-height: 1.7; color: var(--vp-c-text-2); }
.home-card.small strong { font-size: 15px; }
.home-card.plain { background: transparent; }
.home-section.note {
  border: 1px solid var(--vp-c-brand-soft);
  background: var(--vp-c-brand-soft);
  border-radius: 10px;
  padding: 12px 18px;
  font-size: 14px;
  line-height: 1.8;
}
@media (max-width: 720px) {
  .home-grid { grid-template-columns: 1fr; }
  .home-grid.three { grid-template-columns: 1fr; }
  .home-title { font-size: 30px; }
}
</style>
