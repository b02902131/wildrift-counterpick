/**
 * Quick crawler to pull strong/weak counters from wrstats.online ->
 * wildriftcounter.com and regenerate src/data/counterData.ts.
 *
 * Usage:
 *   node scripts/fetchCounters.js
 *
 * Notes:
 * - Uses built-in fetch (Node 18+). No external deps.
 * - Lanes are read from the star line on wrstats.online (★ Top/Jungle/Mid/Bot/Support).
 * - Slugs are derived from counter page path; some champions with special
 *   capitalization may need manual fix in the generated file.
 */

import fs from 'node:fs'
import path from 'node:path'

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122 Safari/537.36'

const laneMap = {
  top: 'top',
  jungle: 'jungle',
  mid: 'mid',
  bot: 'bot',
  support: 'support',
}

const specialSlug = {
  'master-yi': 'MasterYi',
  'jarvan-iv': 'JarvanIV',
  "kog'maw": 'KogMaw',
  'kai-sa': 'Kaisa',
  "rek'sai": 'RekSai',
  "vel'koz": 'Velkoz',
  "cho'gath": 'Chogath',
  "kha'zix": 'Khazix',
  "dr.mundo": 'DrMundo',
  'dr-mundo': 'DrMundo',
  'nunu-willump': 'Nunu',
  'nunu-amp-willump': 'Nunu',
  "renata-glasc": 'Renata',
  "bel'veth": 'Belveth',
  fiddlestics: 'Fiddlesticks',
}

const decode = (str) =>
  str
    .replace(/&amp;/g, '&')
    .replace(/&#0*38;/g, '&')
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim()

const toSlug = (raw) => {
  const key = raw.toLowerCase()
  if (specialSlug[key]) return specialSlug[key]
  return raw
    .replace(/[^a-z0-9]/gi, ' ')
    .split(' ')
    .filter(Boolean)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('')
}

const fetchText = async (url) => {
  const res = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!res.ok) throw new Error(`Fetch failed ${res.status} for ${url}`)
  return res.text()
}

const parseMainPage = (html) => {
  const blocks = html.split('champion-list-item').slice(1)
  const champs = []
  for (const block of blocks) {
    const nameMatch = block.match(/alt="([^"]+)" class="w-12 h-12/)
    const laneMatch = block.match(/&#9733;\s*([A-Za-z]+)/)
    const counterMatch = block.match(/data-url="(https?:\/\/wildriftcounter\.com\/champions\/[^"]+)"/)
    if (!nameMatch || !laneMatch || !counterMatch) continue
    const name = decode(nameMatch[1])
    const lane = laneMap[laneMatch[1].toLowerCase()]
    const counterUrl = counterMatch[1]
    if (!lane) continue
    champs.push({ name, lane, counterUrl })
  }
  return champs
}

const extractDivBlock = (html, fromIndex) => {
  const start = html.slice(fromIndex).search(/<div[^>]*id=['"]gallery-[^'"]+['"][^>]*>/i)
  if (start === -1) return null
  const absoluteStart = fromIndex + start

  const tagRe = /<\/?div\b[^>]*>/gi
  tagRe.lastIndex = absoluteStart

  let depth = 0
  let m
  while ((m = tagRe.exec(html))) {
    if (m[0].startsWith('</')) depth -= 1
    else depth += 1

    if (depth === 0) {
      return html.slice(absoluteStart, tagRe.lastIndex)
    }
  }
  return null
}

const parseCountersPage = (html) => {
  // Collect lane markers (e.g., <p><strong>Jungle</strong></p>)
  const laneMarks = []
  const laneTitleRe = /<p[^>]*>\s*<strong>([^<]+)<\/strong>\s*<\/p>/gi
  let lm
  while ((lm = laneTitleRe.exec(html))) {
    laneMarks.push({ laneRaw: decode(lm[1]).toLowerCase(), idx: lm.index })
  }

  const sections = new Map()

  const headingRe = /<p[^>]*>([^<]*is\s+(Weak|Strong)\s+Against)[^<]*<\/p>/gi
  let headingMatch

  while ((headingMatch = headingRe.exec(html))) {
    const type = headingMatch[2].toLowerCase()
    const galleryHtml = extractDivBlock(html, headingRe.lastIndex)
    if (!galleryHtml) continue

    // find nearest previous lane marker
    let laneRaw = null
    for (let i = laneMarks.length - 1; i >= 0; i -= 1) {
      if (laneMarks[i].idx < headingMatch.index) {
        laneRaw = laneMarks[i].laneRaw
        break
      }
    }
    const lane = laneMap[laneRaw] || null
    const key = lane || 'unknown'
    if (!sections.has(key)) {
      sections.set(key, { lane: lane || 'unknown', weak: new Set(), strong: new Set() })
    }
    const bucket = sections.get(key)

    const linkRe =
      /<a[^>]*href="https?:\/\/wildriftcounter\.com\/champions\/[^"]+"[^>]*>([^<]+)<\/a>/gi

    for (const link of galleryHtml.matchAll(linkRe)) {
      const name = decode(link[1])
      if (!name) continue
      if (type === 'weak') bucket.weak.add(name)
      else bucket.strong.add(name)
    }
  }

  return Array.from(sections.values()).map((sec) => ({
    lane: sec.lane,
    weak: [...sec.weak],
    strong: [...sec.strong],
  }))
}

const fixCounterUrl = (url) => {
  // wrstats has a known typo: fiddlestics -> fiddlesticks
  if (url.includes('/fiddlestics')) return url.replace('/fiddlestics', '/fiddlesticks')
  return url
}

const loadExisting = (filePath) => {
  try {
    const raw = fs.readFileSync(filePath, 'utf8')
    const match = raw.match(/export const counterData:[^\=]*=\s*(\[[\s\S]*\])\s*$/m)
    if (match) return JSON.parse(match[1])
    const matchObj = raw.match(/export const counterData:[^\=]*=\s*(\{[\s\S]*\})\s*$/m)
    if (matchObj) return JSON.parse(matchObj[1])
    return []
  } catch {
    return []
  }
}

const shouldRemove = (onlySet, item) => {
  if (!onlySet) return false
  const name = item.champion || ''
  const normalizedName = name.toLowerCase()
  const slugLike = toSlug(name).toLowerCase()
  return (
    onlySet.has(normalizedName) ||
    onlySet.has(slugLike) ||
    onlySet.has(slugLike.replace(/s$/, 'ks'))
  )
}

const groupByChampion = (entries) => {
  const map = new Map()
  entries.forEach((e) => {
    const key = `${e.champion}::${e.slug}`
    if (!map.has(key)) {
      map.set(key, { champion: e.champion, slug: e.slug, lanes: [] })
    }
    const target = map.get(key)
    let laneObj = target.lanes.find((l) => l.lane === e.lane)
    if (!laneObj) {
      laneObj = { lane: e.lane, strongAgainst: new Set(), weakAgainst: new Set() }
      target.lanes.push(laneObj)
    }
    e.strongAgainst.forEach((n) => laneObj.strongAgainst.add(n))
    e.weakAgainst.forEach((n) => laneObj.weakAgainst.add(n))
  })
  return Array.from(map.values()).map((c) => ({
    champion: c.champion,
    slug: c.slug,
    lanes: c.lanes.map((l) => ({
      lane: l.lane,
      strongAgainst: Array.from(l.strongAgainst),
      weakAgainst: Array.from(l.weakAgainst),
    })),
  }))
}

const parseOnlyArg = () => {
  const arg = process.argv.find((a) => a.startsWith('--only='))
  if (!arg) return null
  const list = arg.replace('--only=', '')
  if (!list.trim()) return null
  const set = new Set(
    list
      .split(',')
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean),
  )
  return set
}

const matchesOnly = (onlySet, champ) => {
  if (!onlySet) return true
  const fixedUrl = fixCounterUrl(champ.counterUrl)
  const urlTail = fixedUrl.split('/').filter(Boolean).pop() || ''
  const normalizedTail = urlTail.toLowerCase()
  const normalizedName = champ.name.toLowerCase()
  const slugLike = toSlug(champ.name).toLowerCase()
  return (
    onlySet.has(normalizedName) ||
    onlySet.has(normalizedTail) ||
    onlySet.has(slugLike) ||
    onlySet.has(normalizedTail.replace(/s$/, 'ks')) // fiddlestics vs fiddlesticks
  )
}

const run = async () => {
  console.log('Fetching wrstats.online ...')
  const mainHtml = await fetchText('https://wrstats.online/')
  let champs = parseMainPage(mainHtml)

  const only = parseOnlyArg()
  if (only) {
    champs = champs.filter((c) => matchesOnly(only, c))
    console.log(`Filtering to --only list, remaining ${champs.length} champions`)
  } else {
    console.log(`Found ${champs.length} champions with counter links`)
  }

  const results = []
  for (const champ of champs) {
    try {
      const fixedUrl = fixCounterUrl(champ.counterUrl)
      const page = await fetchText(fixedUrl)
      const sections = parseCountersPage(page)
      const slug = toSlug(fixedUrl.split('/').filter(Boolean).pop() || champ.name)

      if (sections.length === 0) {
        results.push({
          champion: champ.name,
          lane: champ.lane,
          slug,
          strongAgainst: [],
          weakAgainst: [],
        })
        console.log(`Parsed ${champ.name}: no sections found (fallback)`)
      } else {
        sections.forEach((sec) => {
          const laneFinal = sec.lane === 'unknown' ? champ.lane : sec.lane
          results.push({
            champion: champ.name,
            lane: laneFinal,
            slug,
            strongAgainst: sec.strong,
            weakAgainst: sec.weak,
          })
          console.log(
            `Parsed ${champ.name} lane=${laneFinal}: strong ${sec.strong.length}, weak ${sec.weak.length}`,
          )
        })
      }
    } catch (err) {
      console.error(`Failed ${champ.name}:`, err.message)
    }
  }

  const outPath = path.join(process.cwd(), 'src', 'data', 'counterData.ts')
  const header = `export type Lane = 'top' | 'jungle' | 'mid' | 'bot' | 'support'\n\n`
  const types = `export type CounterRecord = {\n  champion: string\n  slug: string\n  lanes: {\n    lane: Lane\n    strongAgainst: string[]\n    weakAgainst: string[]\n  }[]\n}\n\n`

  let finalData = results
  if (only) {
    const existing = loadExisting(path.join(process.cwd(), 'src', 'data', 'counterData.ts'))
    const keep = existing.filter((item) => !shouldRemove(only, item))
    finalData = [...keep, ...groupByChampion(results)]
    console.log(`Merging with existing champions: kept ${keep.length}, updated ${results.length}, total ${finalData.length}`)
  } else {
    finalData = groupByChampion(results)
  }

  const body = `export const counterData: CounterRecord[] = ${JSON.stringify(
    finalData,
    null,
    2,
  )}\n`
  fs.writeFileSync(outPath, header + types + body, 'utf8')
  console.log(`Wrote ${finalData.length} entries to ${outPath}`)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})

