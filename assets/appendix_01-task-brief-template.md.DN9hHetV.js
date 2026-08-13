import{_ as i,o as a,c as n,ag as l}from"./chunks/framework.CtWPcAmt.js";const o=JSON.parse('{"title":"附录 B：任务卡模板","description":"可直接复制使用的空白任务卡（六要素 + 假想敌测试），配套填写说明与示例。","frontmatter":{"title":"附录 B：任务卡模板","description":"可直接复制使用的空白任务卡（六要素 + 假想敌测试），配套填写说明与示例。","layout":"doc","lastUpdated":true},"headers":[],"relativePath":"appendix/01-task-brief-template.md","filePath":"appendix/01-task-brief-template.md","lastUpdated":null}'),p={name:"appendix/01-task-brief-template.md"};function t(e,s,h,k,d,r){return a(),n("div",null,[...s[0]||(s[0]=[l(`<h1 id="附录-b-任务卡模板" tabindex="-1">附录 B：任务卡模板 <a class="header-anchor" href="#附录-b-任务卡模板" aria-label="Permalink to &quot;附录 B：任务卡模板&quot;">​</a></h1><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><ol><li>复制下方模板到新文件（建议命名 <code>tasks/任务名.md</code>）；</li><li>按括号内说明填写；拿不准的字段参考「填写示例」；</li><li>发任务前做一遍「假想敌测试」（见模板末尾）。</li></ol><h2 id="空白模板" tabindex="-1">空白模板 <a class="header-anchor" href="#空白模板" aria-label="Permalink to &quot;空白模板&quot;">​</a></h2><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 任务卡：【任务名称】</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; 创建日期：【日期】｜发起人：【姓名】</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 1. 目标</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【一句话：做什么 + 为谁做 + 做到什么程度】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（例：把 material/ 下 8 份产品材料整理成选型对比文档，供零基础读者 10 分钟读完。）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 2. 上下文</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【Agent 需要知道但材料里没有的背景：读者、用途、口径、术语约定】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（例：读者为零基础；价格口径只用人民币；不讨论模型原理，只记录产品体验。）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 3. 输入材料</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 【文件或路径】——【作用】</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 【文件或路径】——【作用】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（说明：输入范围之外的内容视为「未提供」，不要推断。）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 4. 范围与约束</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 读取范围：只读【目录/文件】</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 写入范围：输出到【目录】，不修改其他位置</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 联网：允许 / 禁止（选一，并说明）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 禁区：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 【绝不能做的事 1】</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 【绝不能做的事 2】</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 5. 交付物</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 【文件名.格式】——【内容说明】</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 【文件名.格式】——【内容说明】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（精确到文件名；可要求 Agent 先报交付清单再开始。）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 6. 验收标准</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 【可逐项打勾的条件 1】（可数/可查/可证）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 【可逐项打勾的条件 2】</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 【可逐项打勾的条件 3】</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 7. 权限卡（可选，高风险任务用）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 权限项 | 允许 | 禁止 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|---|---|---|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 读取 | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 写入 | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 执行 | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 外部操作 | | |</span></span></code></pre></div><h2 id="填写示例-来自第-5-章统一基准任务" tabindex="-1">填写示例（来自第 5 章统一基准任务） <a class="header-anchor" href="#填写示例-来自第-5-章统一基准任务" aria-label="Permalink to &quot;填写示例（来自第 5 章统一基准任务）&quot;">​</a></h2><blockquote><p>目标：整理 <code>input/</code> 下 7 份教程材料，输出 6 份指定文档，用于七款产品统一实测。 上下文：零基础读者；Qoder/TraeWork/ZCode 只用中国版资料。 材料：<code>input/</code> 7 份文件（简报、笔记、反馈、事实表、流程图、输出要求）。 约束：只读 <code>input/</code>；输出 <code>output/</code>；不联网；不修改输入；不把 Claude 封号原因写成事实。 交付物：01-project-summary.md 等 6 份。 验收：6 份齐全；按要求结构；区分事实/推断；自检含输入清单与边界。</p></blockquote><h2 id="假想敌测试-发任务前必做" tabindex="-1">假想敌测试（发任务前必做） <a class="header-anchor" href="#假想敌测试-发任务前必做" aria-label="Permalink to &quot;假想敌测试（发任务前必做）&quot;">​</a></h2><p>假想一个爱偷懒、爱猜的 Agent 读这张卡，回答：</p><ul><li>[ ] 它会不会不知道该不该联网？（→ 约束里写清）</li><li>[ ] 它会不会不知道输出到哪？（→ 交付物写清目录与文件名）</li><li>[ ] 它会不会漏做某一部分？（→ 交付清单 + 验收标准逐项列）</li><li>[ ] 它会不会擅自扩大范围？（→ 读取/写入范围写死）</li><li>[ ] 它会不会编数据？（→ 验收标准写「无虚构数据，来源标注」）</li></ul><p>全部回答「不会」，这张卡才算合格。</p>`,11)])])}const c=i(p,[["render",t]]);export{o as __pageData,c as default};
