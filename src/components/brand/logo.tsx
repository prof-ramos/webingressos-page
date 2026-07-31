import { cn } from "@/lib/utils"

type Tone = "brand" | "inverse"

/**
 * Geometric mark: a cluster of chevrons/triangles reading as a ticket stub
 * split by a perforation. Two tones on the brand version, flat on inverse.
 */
export function LogoMark({
  className,
  tone = "brand",
}: {
  className?: string
  tone?: Tone
}) {
  const light = tone === "brand" ? "var(--brand-500)" : "rgb(255 255 255 / 0.7)"
  const dark = tone === "brand" ? "var(--brand-700)" : "#ffffff"

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("size-8 shrink-0", className)}
    >
      {/* left blade */}
      <path d="M2 16 8 10.4v11.2z" fill={light} />
      {/* stacked stub */}
      <path d="M10 5.5h5.5v21H10z" fill={light} />
      <path d="M10 5.5h5.5v10.5H10z" fill={dark} />
      {/* upper chevron */}
      <path d="M17.5 4.5 30 4.5 20 11.6z" fill={dark} />
      {/* lower chevron */}
      <path d="M17.5 27.5 30 27.5 20 20.4z" fill={dark} />
      {/* pivot */}
      <path d="M17.5 12.6 24 16l-6.5 3.4z" fill={light} />
    </svg>
  )
}

export function Logo({
  className,
  tone = "brand",
  markClassName,
  wordmarkClassName,
}: {
  className?: string
  tone?: Tone
  markClassName?: string
  wordmarkClassName?: string
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark tone={tone} className={markClassName} />
      <span
        className={cn(
          "text-xl font-extrabold tracking-tight",
          tone === "brand" ? "text-brand-700" : "text-white",
          wordmarkClassName
        )}
      >
        WebIngressos
      </span>
    </span>
  )
}
