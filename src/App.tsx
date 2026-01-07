import { useMemo, useState } from 'react'
import './App.css'
import { counterData, type Lane } from './data/counterData'

const lanes: { label: string; value: Lane }[] = [
  { label: 'Top', value: 'top' },
  { label: 'Jungle', value: 'jungle' },
  { label: 'Mid', value: 'mid' },
  { label: 'Bot', value: 'bot' },
  { label: 'Support', value: 'support' },
]

const cdnVersion = '14.24.1'
const referenceUrl = 'https://wrstats.online/'
const championReferenceUrl = (slug: string) => {
  const normalized = slug
    .replace(/([a-z])([A-Z])/g, '$1-$2') // split camel case e.g. XinZhao -> Xin-Zhao
    .replace(/[^a-zA-Z0-9]+/g, '-') // spaces/apostrophes to -
    .replace(/-+/g, '-') // collapse multiple -
    .replace(/^-|-$/g, '') // trim -
    .toLowerCase()
  return `https://wildriftcounter.com/champions/${encodeURIComponent(normalized)}`
}
const BOARD_CENTER = 420
const NODE_RADIUS = 65
const EDGE_GAP = 6
const LABEL_OFFSET = 38
const championImg = (slug: string) =>
  `https://ddragon.leagueoflegends.com/cdn/${cdnVersion}/img/champion/${encodeURIComponent(slug)}.png`

type FlatCounter = {
  champion: string
  lane: Lane
  slug: string
  strongAgainst: string[]
  weakAgainst: string[]
}

type PositionedChampion = FlatCounter & {
  x: number
  y: number
  angle: number
}

type LabelPosition = {
  x: number
  y: number
  textAnchor: 'start' | 'middle' | 'end'
  alignmentBaseline: 'middle' | 'hanging' | 'baseline'
}

type Edge = {
  from: PositionedChampion
  to: PositionedChampion
  kind: 'strong' | 'weak'
}

const computeEdgePoints = (from: PositionedChampion, to: PositionedChampion) => {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const dist = Math.hypot(dx, dy)

  if (dist === 0) {
    return {
      x1: from.x,
      y1: from.y,
      x2: to.x,
      y2: to.y,
      midX: from.x,
      midY: from.y,
    }
  }

  const targetOffset = NODE_RADIUS + EDGE_GAP
  const maxOffset = dist / 2 - 1
  const effectiveOffset = maxOffset > 0 ? Math.min(targetOffset, maxOffset) : 0
  const ratio = effectiveOffset / dist

  const x1 = from.x + dx * ratio
  const y1 = from.y + dy * ratio
  const x2 = to.x - dx * ratio
  const y2 = to.y - dy * ratio

  return {
    x1,
    y1,
    x2,
    y2,
    midX: (x1 + x2) / 2,
    midY: (y1 + y2) / 2,
  }
}

const computeLabelPosition = (champ: PositionedChampion, isCenterClone: boolean): LabelPosition => {
  if (isCenterClone) {
    return {
      x: champ.x,
      y: champ.y + 36,
      textAnchor: 'middle' as const,
      alignmentBaseline: 'hanging' as const,
    }
  }

  const angle = champ.angle ?? Math.atan2(champ.y - BOARD_CENTER, champ.x - BOARD_CENTER)
  const labelX = champ.x + Math.cos(angle) * LABEL_OFFSET
  const labelY = champ.y + Math.sin(angle) * LABEL_OFFSET

  const textAnchor: LabelPosition['textAnchor'] =
    Math.abs(Math.cos(angle)) < 0.25 ? 'middle' : Math.cos(angle) > 0 ? 'start' : 'end'
  const alignmentBaseline: LabelPosition['alignmentBaseline'] =
    Math.abs(Math.sin(angle)) < 0.25 ? 'middle' : Math.sin(angle) > 0 ? 'hanging' : 'baseline'

  return { x: labelX, y: labelY, textAnchor, alignmentBaseline }
}

function App() {
  const [lane, setLane] = useState<Lane>('jungle')
  const [hovered, setHovered] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)

  const laneChampions = useMemo<FlatCounter[]>(() => {
    return counterData.flatMap((c) =>
      c.lanes
        .filter((ln) => ln.lane === lane)
        .map((ln) => ({
          champion: c.champion,
          slug: c.slug,
          lane: ln.lane,
          strongAgainst: ln.strongAgainst,
          weakAgainst: ln.weakAgainst,
        })),
    )
  }, [lane])

  const positioned = useMemo<PositionedChampion[]>(() => {
    const count = laneChampions.length
    const radius = 300

    return laneChampions.map((c, idx) => {
      const angle = (-Math.PI / 2 + (idx / count) * Math.PI * 2) % (Math.PI * 2)
      const x = BOARD_CENTER + radius * Math.cos(angle)
      const y = BOARD_CENTER + radius * Math.sin(angle)
      return { ...c, x, y, angle }
    })
  }, [laneChampions])

  const positionedMap = useMemo(
    () =>
      positioned.reduce<Record<string, PositionedChampion>>((acc, champ) => {
        acc[champ.champion] = champ
        return acc
      }, {}),
    [positioned],
  )

  const edges = useMemo<Edge[]>(() => {
    if (!hovered) return []
    const source = positionedMap[hovered]
    if (!source) return []
    const sourcePos: PositionedChampion = { ...source, x: BOARD_CENTER, y: BOARD_CENTER }

    const targetsInLane = new Set(positioned.map((c) => c.champion))
    const result: Edge[] = []

    source.strongAgainst.forEach((name) => {
      if (targetsInLane.has(name) && positionedMap[name]) {
        result.push({ from: sourcePos, to: positionedMap[name], kind: 'strong' })
      }
    })

    source.weakAgainst.forEach((name) => {
      if (targetsInLane.has(name) && positionedMap[name]) {
        result.push({ from: sourcePos, to: positionedMap[name], kind: 'weak' })
      }
    })

    return result
  }, [hovered, positioned, positionedMap])

  const connectedNames = useMemo(() => {
    const names = new Set<string>()
    edges.forEach((e) => {
      names.add(e.from.champion)
      names.add(e.to.champion)
    })
    return names
  }, [edges])

  const orderedNodes = useMemo(() => {
    if (!hovered) return positioned
    const active = positionedMap[hovered]
    if (!active) return positioned
    const centerClone: PositionedChampion = { ...active, x: BOARD_CENTER, y: BOARD_CENTER }
    return [...positioned, centerClone]
  }, [hovered, positioned, positionedMap])

  const normalizedQuery = searchTerm.trim().toLowerCase()
  const searchResults = useMemo(() => {
    if (!normalizedQuery) return []
    const seen = new Set<string>()
    return laneChampions
      .filter((champ) => {
        const name = champ.champion.toLowerCase()
        if (seen.has(name)) return false
        const match = name.includes(normalizedQuery) || champ.slug.toLowerCase().includes(normalizedQuery)
        if (match) seen.add(name)
        return match
      })
      .slice(0, 8)
  }, [laneChampions, normalizedQuery])

  const handleSelectChampion = (name: string) => {
    setHovered(name)
    setSearchTerm(name)
  }

  return (
    <div className="page">
      <header className="header">
        <div>
          <h1>Wild Rift Counter Circle</h1>
          <div className="subtitle-row">
            <p className="subtitle">
              資料來源：wrstats.online（強弱關係），頭像：Riot CDN。Hover 任何英雄即可顯示他在本路的強弱對手。
            </p>
            <button
              type="button"
              className="icon-button"
              aria-label="開啟參考來源 wrstats.online"
              title="開啟參考來源 wrstats.online"
              onClick={() => window.open(referenceUrl, '_blank', 'noopener,noreferrer')}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  d="M14 3h7v7M10 14 21 3M17 13v7H3V7h7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="controls">
          <div className="filter-row">
            {lanes.map((l) => (
              <button
                key={l.value}
                className={`pill ${lane === l.value ? 'active' : ''}`}
                onClick={() => {
                  setLane(l.value)
                  setHovered(null)
                  setSearchTerm('')
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
          <div className="search">
            <div className="search-box">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  d="M15 15l4 4m-2-7a6 6 0 11-12 0 6 6 0 0112 0z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                value={searchTerm}
                placeholder="搜尋英雄（即時建議）"
                onChange={(e) => {
                  const value = e.target.value
                  setSearchTerm(value)
                  if (!value.trim()) setHovered(null)
                }}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => {
                  window.setTimeout(() => setSearchFocused(false), 120)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchResults[0]) {
                    handleSelectChampion(searchResults[0].champion)
                  }
                }}
                aria-label="搜尋英雄"
              />
              {searchTerm && (
                <button
                  type="button"
                  className="clear-button"
                  onClick={() => {
                    setSearchTerm('')
                    setHovered(null)
                  }}
                  aria-label="清除搜尋"
                >
                  清除
                </button>
              )}
            </div>
            {searchFocused && searchResults.length > 0 && (
              <div className="search-dropdown" role="listbox">
                {searchResults.map((champ) => (
                  <button
                    type="button"
                    key={champ.champion}
                    className="search-option"
                    role="option"
                    onMouseDown={(e) => {
                      e.preventDefault()
                      handleSelectChampion(champ.champion)
                      setSearchFocused(false)
                    }}
                  >
                    {champ.champion}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="board">
        <svg width="900" height="900" className="canvas">
          <defs>
            <marker
              id="arrow-strong"
              markerWidth="12"
              markerHeight="12"
              refX="10"
              refY="6"
              orient="auto"
              markerUnits="userSpaceOnUse"
            >
              <path d="M0,0 L12,6 L0,12 z" fill="#2ecc71" />
            </marker>
            <marker
              id="arrow-weak"
              markerWidth="12"
              markerHeight="12"
              refX="10"
              refY="6"
              orient="auto"
              markerUnits="userSpaceOnUse"
            >
              <path d="M0,0 L12,6 L0,12 z" fill="#e74c3c" />
            </marker>
          </defs>

          {edges.map((edge, idx) => (
            <g key={`${edge.from.champion}-${edge.to.champion}-${idx}`}>
              {(() => {
                const { x1, y1, x2, y2, midX, midY } = computeEdgePoints(
                  edge.from,
                  edge.to,
                )
                return (
                  <>
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={edge.kind === 'strong' ? '#2ecc71' : '#e74c3c'}
                      strokeWidth={3}
                      markerEnd={`url(#arrow-${edge.kind})`}
                      strokeOpacity={0.9}
                    />
                    <text x={midX} y={midY - 8} className={`edge-label ${edge.kind}`}>
                      {edge.kind === 'strong' ? 'strong' : 'weak'}
                    </text>
                  </>
                )
              })()}
            </g>
          ))}

          {orderedNodes.map((champ) => {
            const isActive = hovered === champ.champion
            const isCenterClone =
              isActive && champ.x === BOARD_CENTER && champ.y === BOARD_CENTER
            const isConnected = connectedNames.has(champ.champion)
            const { x: labelX, y: labelY, textAnchor, alignmentBaseline } = computeLabelPosition(
              champ,
              isCenterClone,
            )
            const classNames = ['node']
            if (hovered !== null && !isActive && !isConnected) classNames.push('node-dim')
            if (isActive) classNames.push('node-active')
            if (isCenterClone) classNames.push('node-center')

            return (
              <g
                key={`${champ.champion}-${isCenterClone ? 'center' : 'ring'}`}
                className={classNames.join(' ')}
              >
                <circle cx={champ.x} cy={champ.y} r={18} className="node-bg" />
                <image
                  href={championImg(champ.slug)}
                  x={champ.x - 18}
                  y={champ.y - 18}
                  width={36}
                  height={36}
                  style={{ clipPath: 'circle(18px)', cursor: 'pointer' }}
                  onMouseEnter={() => setHovered(champ.champion)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() =>
                    window.open(championReferenceUrl(champ.slug), '_blank', 'noopener,noreferrer')
                  }
                  role="presentation"
                />
                <text
                  x={labelX}
                  y={labelY}
                  className="node-label"
                  textAnchor={textAnchor}
                  alignmentBaseline={alignmentBaseline}
                >
                  {champ.champion}
                </text>
              </g>
            )
          })}
        </svg>

        <aside className="legend">
          <h3>互動提示</h3>
          <ul>
            <li>Hover 節點：顯示該英雄在此路的強/弱對手與連線。</li>
            <li>綠線 strong：該英雄克制對手。</li>
            <li>紅線 weak：該英雄被對手克制。</li>
            <li>可在 <code>src/data/counterData.ts</code> 擴充更多英雄。</li>
          </ul>
        </aside>
      </div>
    </div>
  )
}

export default App
