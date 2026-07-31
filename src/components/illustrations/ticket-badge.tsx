import { cn } from "@/lib/utils"

/**
 * Line-art ticket + lanyard badge for the "Programa Piloto" band.
 * Stroke-only and driven by `currentColor` so the caller sets the tint.
 */
export function TicketBadge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 240"
      fill="none"
      aria-hidden="true"
      className={cn("h-auto w-full", className)}
    >
      <g
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* faint construction lines */}
        <g opacity={0.32} strokeWidth={1.25} strokeDasharray="4 6">
          <path d="M46 26h250" />
          <path d="M300 30v180" />
          <path d="M30 206h240" />
          <path d="M22 34 60 70" />
        </g>

        {/* ticket */}
        <path d="M22 96a12 12 0 0 0 0-24V56a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8v112a8 8 0 0 1-8 8H30a8 8 0 0 1-8-8v-16a12 12 0 0 0 0-24z" />
        <path d="M62 52v16M62 80v16M62 108v16M62 136v16M62 164v12" strokeDasharray="0.1 14" />
        {/* star */}
        <path d="m118 84 8.4 17 18.8 2.8-13.6 13.2 3.2 18.7-16.8-8.8-16.8 8.8 3.2-18.7-13.6-13.2 18.8-2.8z" />
        {/* stub bar */}
        <path d="M176 88v48" strokeWidth={9} strokeLinecap="round" />

        {/* badge */}
        <rect x={206} y={74} width={112} height={112} rx={10} />
        <path d="M262 74V56" />
        <path d="M256 34h12a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4V38a4 4 0 0 1 4-4z" />
        {/* portrait */}
        <path d="M262 104a13 13 0 1 1 0 26 13 13 0 0 1 0-26z" />
        <path d="M239 156a23 23 0 0 1 46 0" />
        <path d="M228 170h68" opacity={0.55} />
      </g>

      {/* nodes on the construction lines */}
      <g fill="none" stroke="currentColor" strokeWidth={1.25} opacity={0.42}>
        <circle cx={46} cy={26} r={3.5} />
        <circle cx={300} cy={210} r={3.5} />
        <circle cx={30} cy={206} r={3.5} />
      </g>
    </svg>
  )
}
