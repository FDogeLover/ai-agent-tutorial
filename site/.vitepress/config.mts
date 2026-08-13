import { defineConfig } from 'vitepress'

// 清爽学术蓝主题色
const brand = '#2563EB'

// 部署子路径：GitHub Pages 项目站点为 /ai-agent-tutorial/，本地为 /
const base = process.env.VITEPRESS_BASE || '/'

export default defineConfig({
  title: 'AI Agent 零基础教程',
  description: '从选择、使用到管理 AI Agent 的实践教程：认识 Agent、选对工具、完成任务、沉淀工作流、搭建你的系统。',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,

  head: [
    ['meta', { name: 'theme-color', content: brand }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ],

  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: '开始阅读', link: '/guide/00-preface' },
      { text: '选择 Agent', link: '/selection/README' },
      { text: '完成任务', link: '/guide/07-task-brief' },
      { text: '进阶与系统', link: '/guide/13-skills' },
      { text: '案例', link: '/guide/19-work-case' },
      { text: '附录', link: '/appendix/00-glossary' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '序章',
          items: [{ text: '第 0 章 我为什么写这套教程', link: '/guide/00-preface' }],
        },
        {
          text: '第一篇 认识你的新搭档',
          items: [
            { text: '第 1 章 AI Agent 到底是什么', link: '/guide/01-what-is-an-agent' },
            { text: '第 2 章 能做什么，不能做什么', link: '/guide/02-capabilities-and-limits' },
            { text: '第 3 章 人与 Agent 怎样分工', link: '/guide/03-human-agent-division' },
          ],
        },
        {
          text: '第二篇 选择适合自己的 Agent',
          items: [
            { text: '第 4 章 选择维度', link: '/guide/04-how-to-choose' },
            { text: '第 5 章 七款产品体验', link: '/selection/README' },
            { text: '第 6 章 横向比较与选型', link: '/selection/README' },
          ],
        },
        {
          text: '第三篇 完成第一个任务',
          items: [
            { text: '第 7 章 清晰任务卡', link: '/guide/07-task-brief' },
            { text: '第 8 章 安全边界', link: '/guide/08-safe-boundaries' },
            { text: '第 9 章 跟进过程', link: '/guide/09-follow-progress' },
            { text: '第 10 章 验收与复盘', link: '/guide/10-acceptance-review' },
          ],
        },
        {
          text: '第四篇 稳定工作流',
          items: [
            { text: '第 11 章 管理上下文', link: '/guide/11-context-management' },
            { text: '第 12 章 模板库', link: '/guide/12-template-library' },
            { text: '第 13 章 从模板到 Skill', link: '/guide/13-skills' },
            { text: '第 14 章 规则、记忆与偏好', link: '/guide/14-rules-memory' },
          ],
        },
        {
          text: '第五篇 搭建 Harness',
          items: [
            { text: '第 15 章 Harness 是什么', link: '/guide/15-what-is-harness' },
            { text: '第 16 章 Harness 架构', link: '/guide/16-harness-architecture' },
            { text: '第 17 章 多 Agent 协作', link: '/guide/17-multi-agent' },
            { text: '第 18 章 让系统可靠', link: '/guide/18-reliability' },
          ],
        },
        {
          text: '第六篇 真实案例',
          items: [
            { text: '第 19 章 工作事务案例', link: '/guide/19-work-case' },
            { text: '第 20 章 日常生活案例', link: '/guide/20-life-case' },
            { text: '第 21 章 内容创作与研究', link: '/guide/21-content-research-case' },
            { text: '第 22 章 软件与项目搭建', link: '/guide/22-software-project-case' },
          ],
        },
        {
          text: '终章',
          items: [{ text: '第 23 章 30 天实践计划', link: '/guide/23-30day-plan' }],
        },
      ],
      '/selection/': [
        {
          text: '选择 Agent',
          items: [
            { text: '横向选择表', link: '/selection/01-comparison-table' },
            { text: '新手决策路径', link: '/selection/02-decision-path' },
            { text: '个人选型结论', link: '/selection/03-personal-conclusion' },
          ],
        },
        {
          text: '七款产品体验（第 5 章）',
          items: [
            { text: '总览与测试条件', link: '/selection/05-overview' },
            { text: 'Claude 桌面版', link: '/guide/05-claude' },
            { text: 'Codex 桌面版', link: '/guide/05-codex' },
            { text: 'TraeWork 中国版', link: '/guide/05-traework' },
            { text: 'WorkBuddy', link: '/guide/05-workbuddy' },
            { text: 'Qoder 中国版', link: '/guide/05-qoder' },
            { text: 'ZCode 中国版', link: '/guide/05-zcode' },
            { text: 'Hermes Desktop', link: '/guide/05-hermes' },
          ],
        },
      ],
      '/appendix/': [
        {
          text: '附录',
          items: [
            { text: 'A 核心术语表', link: '/appendix/00-glossary' },
            { text: 'B 任务卡模板', link: '/appendix/01-task-brief-template' },
            { text: 'C 权限与安全检查', link: '/appendix/02-permission-checklist' },
            { text: 'D Agent 体验记录表', link: '/appendix/03-agent-log-template' },
            { text: 'E Skill 设计检查表', link: '/appendix/04-skill-checklist' },
            { text: 'F Harness 设计画布', link: '/appendix/05-harness-canvas' },
            { text: 'G 常见失败排查表', link: '/appendix/06-troubleshooting' },
          ],
        },
      ],
    },

    footer: {
      message: '基于 2026-08 实测数据撰写；易变信息请以官方页面为准。',
      copyright: 'AI Agent 零基础教程',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除查询',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },

    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    lastUpdated: { text: '最后更新', formatOptions: { dateStyle: 'short', timeStyle: 'short' } },
  },

  vite: {
    build: {
      // 避免每次构建清空输出目录（与本地安全删除钩子兼容）
      emptyOutDir: false,
    },
    css: {
      preprocessorOptions: {
        scss: { additionalData: '' },
      },
    },
  },
})
