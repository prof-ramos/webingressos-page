"use client"

import * as React from "react"
import dynamic from "next/dynamic"

/**
 * Placeholder that mirrors the form's card container and reserves height, so the
 * swap to the real form doesn't shift the page. Kept intentionally quiet.
 */
function FormSkeleton() {
  return (
    <div
      className="min-h-[840px] rounded-card border border-border bg-white p-6 shadow-card sm:min-h-[760px] sm:p-8 lg:p-10"
      aria-hidden="true"
    >
      <div className="h-7 w-2/3 rounded-lg bg-ink-100" />
      <div className="mt-3 h-4 w-full max-w-md rounded bg-ink-100/70" />
      <div className="mt-8 space-y-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-3.5 w-28 rounded bg-ink-100/70" />
            <div className="h-12 w-full rounded-xl bg-ink-100" />
          </div>
        ))}
        <div className="h-14 w-full rounded-xl bg-brand-100" />
      </div>
    </div>
  )
}

// ssr:false keeps the validation stack (zod + react-hook-form + radix) out of
// the home's first-load JS entirely; it loads as an async chunk on approach.
const PilotForm = dynamic(
  () => import("@/components/landing/pilot-form").then((m) => m.PilotForm),
  { ssr: false, loading: () => <FormSkeleton /> },
)

export function PilotFormLazy() {
  const ref = React.useRef<HTMLDivElement>(null)
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el || show) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShow(true)
          observer.disconnect()
        }
      },
      { rootMargin: "600px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [show])

  return <div ref={ref}>{show ? <PilotForm /> : <FormSkeleton />}</div>
}
