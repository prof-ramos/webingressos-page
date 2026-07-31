"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"

import { Logo } from "@/components/brand/logo"
import { Shell } from "@/components/landing/section"
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const menuButtonRef = React.useRef<HTMLButtonElement>(null)
  const firstMenuLinkRef = React.useRef<HTMLAnchorElement>(null)

  React.useEffect(() => {
    if (!isMenuOpen) return

    firstMenuLinkRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/85 backdrop-blur-md">
      <Shell>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <Link href="/" aria-label="WebIngressos — página inicial">
            <Logo markClassName="size-7 sm:size-8" wordmarkClassName="text-lg sm:text-xl" />
          </Link>

          <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-500 transition-colors hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.pilotFormUrl}
              className="hidden h-11 items-center gap-2 rounded-xl bg-brand-700 px-5 text-sm font-bold text-white shadow-cta transition-colors hover:bg-brand-800 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:inline-flex"
            >
              {SITE_CONFIG.ctaLabel}
              <ArrowRight className="size-4" />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              aria-controls="menu-principal"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex size-10 items-center justify-center rounded-xl text-ink-800 transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none lg:hidden"
            >
              {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </Shell>

      <div
        id="menu-principal"
        hidden={!isMenuOpen}
        className="border-t border-border bg-white transition-[opacity,translate] duration-200 starting:-translate-y-2 starting:opacity-0 lg:hidden"
      >
        <Shell>
          <nav aria-label="Navegação móvel" className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.href}
                ref={index === 0 ? firstMenuLinkRef : undefined}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE_CONFIG.pilotFormUrl}
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-700 px-5 text-sm font-bold text-white transition-colors hover:bg-brand-800 sm:hidden"
            >
              {SITE_CONFIG.ctaLabel}
              <ArrowRight className="size-4" />
            </a>
          </nav>
        </Shell>
      </div>
    </header>
  )
}
