"use client"

import * as React from "react"
import dynamic from "next/dynamic"

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

// Keep the validation stack out of the initial landing-page bundle; load it as
// the visitor approaches the pilot form below the fold.
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
