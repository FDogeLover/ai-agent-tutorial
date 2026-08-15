/**
 * build-pages.mjs
 * 从仓库 chapters/ 生成 VitePress 站点页面（site/src/）。
 * - 提取标题（首个 #）与描述（元数据头「摘要：」行）→ frontmatter
 * - 删除元数据头（> 页面标识 / 摘要 / 人群 …）
 * - 章节间相对链接按「源路径 → 站点 URL」通用映射；指向 docs/ 的链接降级为纯文本
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname, resolve, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..', '..') // 仓库根
const SRC = resolve(__dirname, '..', 'src')

/** 构建「源相对路径 → 站点 URL」映射 */
function buildSrcMap() {
  const map = new Map()
  const guide = [
    '00-preface', '01-what-is-an-agent', '02-capabilities-and-limits',
    '03-human-agent-division', '04-how-to-choose',
    '07-task-brief', '08-safe-boundaries', '09-follow-progress', '10-acceptance-review',
    '11-context-management', '12-template-library', '13-skills', '14-rules-memory',
    '15-what-is-harness', '16-harness-architecture', '17-multi-agent', '18-reliability',
    '19-work-case', '20-life-case', '21-content-research-case', '22-software-project-case',
    '23-30day-plan',
  ]
  for (const f of guide) map.set(`chapters/${f}.md`, `/guide/${f}.html`)
  // 第 5 章七款产品
  map.set('chapters/05-agent-experiences/01-claude.md', '/guide/05-claude.html')
  map.set('chapters/05-agent-experiences/02-codex.md', '/guide/05-codex.html')
  map.set('chapters/05-agent-experiences/03-traework-cn.md', '/guide/05-traework.html')
  map.set('chapters/05-agent-experiences/04-workbuddy.md', '/guide/05-workbuddy.html')
  map.set('chapters/05-agent-experiences/05-qoder-cn.md', '/guide/05-qoder.html')
  map.set('chapters/05-agent-experiences/06-zcode-cn.md', '/guide/05-zcode.html')
  map.set('chapters/05-agent-experiences/07-hermes-desktop.md', '/guide/05-hermes.html')
  map.set('chapters/05-agent-experiences/README.md', '/guide/05-overview.html')
  // 第 6 章
  map.set('chapters/06-selection/README.md', '/guide/06-selection.html')
  map.set('chapters/06-selection/01-comparison-table.md', '/guide/06-01-comparison-table.html')
  map.set('chapters/06-selection/02-decision-path.md', '/guide/06-02-decision-path.html')
  map.set('chapters/06-selection/03-personal-conclusion.md', '/guide/06-03-personal-conclusion.html')
  // 附录
  map.set('chapters/appendix/00-glossary.md', '/appendix/00-glossary.html')
  map.set('chapters/appendix/01-task-brief-template.md', '/appendix/01-task-brief-template.html')
  map.set('chapters/appendix/02-permission-checklist.md', '/appendix/02-permission-checklist.html')
  map.set('chapters/appendix/03-agent-log-template.md', '/appendix/03-agent-log-template.html')
  map.set('chapters/appendix/04-skill-checklist.md', '/appendix/04-skill-checklist.html')
  map.set('chapters/appendix/05-harness-canvas.md', '/appendix/05-harness-canvas.html')
  map.set('chapters/appendix/06-troubleshooting.md', '/appendix/06-troubleshooting.html')
  map.set('chapters/appendix/07-installation-guide.md', '/appendix/07-installation-guide.html')
  return map
}

const SRC_MAP = buildSrcMap()

/** docs/ 链接降级为纯文本说明 */
function docsFallback(rel) {
  const m = rel.match(/docs\/([\w-]+)/)
  return m ? `（见仓库 docs/${m[1]}）` : null
}

/**
 * 重写链接：md 目标解析为相对仓库根的路径后查 SRC_MAP。
 * @param {string} md 页面内容
 * @param {string} srcRel 当前源文件相对仓库根的路径（正斜杠）
 */
function rewriteLinks(md, srcRel) {
  return md.replace(/\]\(([^)#]+?)(?:#[^)]*)?\)/g, (full, target) => {
    const t = target.trim()
    if (/^(https?:|mailto:|#)/.test(t)) return full
    if (t.endsWith('.md') || t.includes('/')) {
      // 尝试解析为相对仓库根的路径
      const srcDir = srcRel.includes('/') ? srcRel.slice(0, srcRel.lastIndexOf('/')) : ''
      const norm = normalize(join(srcDir, t)).split('\\').join('/')
      if (SRC_MAP.has(norm)) return full.replace(t, SRC_MAP.get(norm))
      if (norm.startsWith('docs/') || norm.includes('/docs/')) {
        const fb = docsFallback(norm)
        if (fb) return `](${fb})`
      }
      // 图片等资源路径保留
      return full
    }
    return full
  })
}

/** 把章节 md 转成站点页面 */
function toPage(raw, slug, srcRel) {
  const lines = raw.split('\n')
  let title = slug
  let description = ''
  const body = []
  let inMeta = false
  for (const line of lines) {
    if (line.startsWith('> 页面标识')) {
      inMeta = true
      continue
    }
    if (inMeta) {
      const m = line.match(/^> 摘要：\s*(.+)$/)
      if (m) description = m[1].trim()
      if (line.trim() === '' || !line.startsWith('>')) {
        if (!line.startsWith('>')) inMeta = false
      }
      continue
    }
    if (body.length === 0 && line.startsWith('# ')) {
      title = line.slice(2).trim()
    }
    body.push(line)
  }
  const content = body.join('\n').trim()
  const fm = [
    '---',
    `title: ${title.replace(/[":]/g, '')}`,
    description ? `description: ${description.replace(/[":]/g, '')}` : 'description: AI Agent 零基础教程',
    'layout: doc',
    'lastUpdated: true',
    '---',
    '',
  ].join('\n')
  return fm + '\n' + rewriteLinks(content, srcRel) + '\n'
}

/** 生成指定章节文件列表 */
function build(pages) {
  mkdirSync(SRC, { recursive: true })
  for (const p of pages) {
    const src = join(ROOT, p.src)
    if (!existsSync(src)) {
      console.warn(`[skip] ${p.src} 不存在`)
      continue
    }
    const raw = readFileSync(src, 'utf-8')
    const page = toPage(raw, p.slug, p.src)
    const out = join(SRC, p.out)
    mkdirSync(dirname(out), { recursive: true })
    writeFileSync(out, page, 'utf-8')
    console.log(`[ok] ${p.src} -> site/src/${p.out}`)
  }
}

// 全站页面：23 章 guide + 第 5 章 7 款产品 + 第 5/6 章 README + 第 6 章 3 页 + 附录 7 份
const guide = [
  '00-preface', '01-what-is-an-agent', '02-capabilities-and-limits',
  '03-human-agent-division', '04-how-to-choose',
  '07-task-brief', '08-safe-boundaries', '09-follow-progress', '10-acceptance-review',
  '11-context-management', '12-template-library', '13-skills', '14-rules-memory',
  '15-what-is-harness', '16-harness-architecture', '17-multi-agent', '18-reliability',
  '19-work-case', '20-life-case', '21-content-research-case', '22-software-project-case',
  '23-30day-plan',
]
const products = [
  ['01-claude', '05-claude'], ['02-codex', '05-codex'], ['03-traework-cn', '05-traework'],
  ['04-workbuddy', '05-workbuddy'], ['05-qoder-cn', '05-qoder'], ['06-zcode-cn', '05-zcode'],
  ['07-hermes-desktop', '05-hermes'],
]
const appendix = [
  '00-glossary', '01-task-brief-template', '02-permission-checklist', '03-agent-log-template',
  '04-skill-checklist', '05-harness-canvas', '06-troubleshooting', '07-installation-guide',
]

const PAGES = [
  ...guide.map((f) => ({ src: `chapters/${f}.md`, out: `guide/${f}.md`, slug: `ch-${f}` })),
  ...products.map(([src, out]) => ({
    src: `chapters/05-agent-experiences/${src}.md`,
    out: `guide/${out}.md`,
    slug: `ch-05-${src}`,
  })),
  { src: 'chapters/05-agent-experiences/README.md', out: 'guide/05-overview.md', slug: 'ch-05-overview' },
  { src: 'chapters/06-selection/README.md', out: 'guide/06-selection.md', slug: 'ch-06' },
  { src: 'chapters/06-selection/01-comparison-table.md', out: 'guide/06-01-comparison-table.md', slug: 'ch-06-01' },
  { src: 'chapters/06-selection/02-decision-path.md', out: 'guide/06-02-decision-path.md', slug: 'ch-06-02' },
  { src: 'chapters/06-selection/03-personal-conclusion.md', out: 'guide/06-03-personal-conclusion.md', slug: 'ch-06-03' },
  ...appendix.map((f) => ({ src: `chapters/appendix/${f}.md`, out: `appendix/${f}.md`, slug: `appendix-${f}` })),
]

build(PAGES)
