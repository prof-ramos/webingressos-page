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
    <section
      id={id}
      className={cn("scroll-mt-16 py-12 sm:scroll-mt-20 sm:py-16 lg:py-20", className)}
    >
      <Shell className={innerClassName}>{children}</Shell>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "start",
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
        "mb-8 sm:mb-10",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold tracking-[0.16em] text-accent uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-4xl leading-[0.94] tracking-[-0.02em] text-balance text-foreground uppercase sm:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  )
}
