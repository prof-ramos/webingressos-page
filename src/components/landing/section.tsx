import * as React from "react"

import { cn } from "@/lib/utils"

export function Shell({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  )
}

export function Section({
  id,
  className,
  innerClassName,
  children,
}: {
  id?: string
  className?: string
  innerClassName?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={cn("py-8 sm:py-10 lg:py-12", className)}>
      <Shell className={innerClassName}>{children}</Shell>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  align?: "center" | "start"
  className?: string
}) {
  return (
    <div
      className={cn(
        "mb-7 sm:mb-8 lg:mb-10",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold tracking-[0.16em] text-brand-500 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-extrabold tracking-tight text-balance text-ink-800 sm:text-3xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 text-base leading-relaxed text-ink-500">{subtitle}</p> : null}
    </div>
  )
}
