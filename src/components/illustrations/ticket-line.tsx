import { cn } from "@/lib/utils"

/** Simplified stroke-only ticket used inside the deep-green final CTA band. */
export function TicketLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      aria-hidden="true"
      className={cn("h-auto w-full", className)}
    >
      <g stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M44 74a10 10 0 0 0 0-20V40a7 7 0 0 1 7-7h98a7 7 0 0 1 7 7v14a10 10 0 0 0 0 20v14a7 7 0 0 1-7 7H51a7 7 0 0 1-7-7z" />
        <path d="M76 36v10M76 56v10M76 76v10M76 96v-4" strokeDasharray="0.1 11" />
        <path d="M104 54h34M104 66h22" opacity={0.7} />
        <path d="M16 60h18" opacity={0.55} />
        <path d="M172 44l14-14M172 84l14 14" opacity={0.45} />
      </g>
    </svg>
  )
}
