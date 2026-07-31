import { cn } from "@/lib/utils"

/**
 * Chart primitives for the decorative hero dashboard.
 * Server-safe: no hooks, no client runtime, no chart library.
 * Everything is tinted through `currentColor` / brand utilities.
 */

const SPARK_W = 120
const SPARK_H = 40
const SPARK_PAD = 4

/**
 * `idPrefix` instead of `useId()` — hooks are unavailable in Server Components,
 * and the gradient needs a document-unique id.
 */
export function Sparkline({
  values,
  className,
  idPrefix = "spark",
}: {
  values: readonly number[]
  className?: string
  idPrefix?: string
}) {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const span = max - min || 1

  const points = values.map((value, index) => {
    const x = SPARK_PAD + (index * (SPARK_W - 2 * SPARK_PAD)) / (values.length - 1)
    const y = SPARK_H - SPARK_PAD - ((value - min) / span) * (SPARK_H - 2 * SPARK_PAD)
    return `${x.toFixed(2)},${y.toFixed(2)}`
  })

  const line = `M${points.join(" L")}`
  const area = `${line} L${SPARK_W - SPARK_PAD},${SPARK_H} L${SPARK_PAD},${SPARK_H} Z`
  const gradientId = `${idPrefix}-fill`

  return (
    <svg
      viewBox={`0 0 ${SPARK_W} ${SPARK_H}`}
      className={cn("h-10 w-full text-brand-500", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity={0.22} />
          <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${gradientId})`} />
      <path
        d={line}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export function ProgressBar({ percent, className }: { percent: number; className?: string }) {
  return (
    <div className={cn("h-1.5 w-full rounded-full bg-brand-100", className)} aria-hidden="true">
      <div className="h-full rounded-full bg-brand-600" style={{ width: `${percent}%` }} />
    </div>
  )
}

export function DayBars({
  days,
  max,
  ticks,
  tickLabels,
}: {
  days: readonly { short: string; initial: string; value: number }[]
  max: number
  ticks: readonly number[]
  tickLabels: readonly string[]
}) {
  return (
    <div className="flex gap-2" aria-hidden="true">
      <div className="relative w-6 shrink-0">
        {ticks.map((tick, index) => (
          <span
            key={tick}
            className="absolute right-0 -translate-y-1/2 text-[9px] text-ink-400"
            style={{ bottom: `${(tick / max) * 100}%` }}
          >
            {tickLabels[index]}
          </span>
        ))}
      </div>

      <div className="min-w-0 flex-1">
        <div className="relative h-24">
          {ticks.map((tick) => (
            <div
              key={tick}
              className="absolute inset-x-0 border-t border-dashed border-border"
              style={{ bottom: `${(tick / max) * 100}%` }}
            />
          ))}
          <div className="relative flex h-full items-end gap-1.5">
            {days.map((day) => (
              <div
                key={day.short}
                className="flex-1 rounded-t-[3px] bg-brand-500"
                style={{ height: `${(day.value / max) * 100}%` }}
              />
            ))}
          </div>
        </div>

        <div className="mt-2 flex gap-1.5">
          {days.map((day) => (
            <span key={day.short} className="flex-1 text-center text-[9px] text-ink-400">
              <span className="sm:hidden">{day.initial}</span>
              <span className="hidden sm:inline">{day.short}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ChannelBars({ items }: { items: readonly { name: string; percent: number }[] }) {
  return (
    <ul className="space-y-2.5" aria-hidden="true">
      {items.map((item) => (
        <li key={item.name} className="flex items-center gap-2.5">
          <span className="w-16 shrink-0 truncate text-[10px] text-ink-500">{item.name}</span>
          <span className="h-1.5 min-w-0 flex-1 rounded-full bg-brand-100">
            <span
              className="block h-full rounded-full bg-brand-500"
              style={{ width: `${item.percent}%` }}
            />
          </span>
          <span className="w-8 shrink-0 text-right text-[10px] font-semibold text-ink-700">
            {item.percent}%
          </span>
        </li>
      ))}
    </ul>
  )
}
