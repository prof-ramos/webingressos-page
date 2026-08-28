import * as React from "react"
import { ChevronDown, Receipt, ScanLine, Users } from "lucide-react"

import { LogoMark } from "@/components/brand/logo"
import { ChannelBars, DayBars, ProgressBar, Sparkline } from "@/components/landing/charts"
import { DASHBOARD_DATA } from "@/lib/constants"
import { cn } from "@/lib/utils"

function Tile({
  label,
  className,
  children,
}: {
  label: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("rounded-lg border border-border bg-control p-3.5 sm:p-4", className)}>
      <p className="text-[11px] font-semibold text-muted-foreground">{label}</p>
      {children}
    </div>
  )
}

function IconChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
      {children}
    </span>
  )
}

/**
 * Fictional product panel shown beside the hero copy.
 * Marked aria-hidden: the figures are illustrative, not product claims.
 */
export function DashboardPreview({ className }: { className?: string }) {
  const { period, revenue, events, checkins, settlement, salesPerDay, channels } = DASHBOARD_DATA

  return (
    <div
      aria-hidden="true"
      className={cn(
        "rounded-panel border border-primary/70 bg-surface p-3 shadow-panel sm:p-4",
        className,
      )}
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5">
          <LogoMark className="size-5" />
          <span className="font-display text-sm tracking-tight text-foreground uppercase">
            WebIngressos
          </span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-input bg-control px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground">
          {period}
          <ChevronDown className="size-3.5" />
        </span>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        <Tile label={revenue.label}>
          <p className="mt-1.5 text-lg font-bold tracking-tight text-foreground">{revenue.value}</p>
          <div className="mt-1 flex items-end gap-2">
            <p className="shrink-0 text-[10px] whitespace-nowrap">
              <span className="font-bold text-success">{revenue.delta}</span>{" "}
              <span className="text-muted-foreground">{revenue.deltaSuffix}</span>
            </p>
            <Sparkline values={revenue.series} idPrefix="revenue" className="h-8 min-w-0 flex-1" />
          </div>
        </Tile>

        <Tile label={events.label}>
          <div className="mt-1.5 flex items-center justify-between gap-3">
            <div>
              <p className="text-lg font-bold tracking-tight text-foreground">{events.value}</p>
              <p className="mt-1 text-[10px] text-muted-foreground">
                <span className="font-bold text-success">8</span> ativos
              </p>
            </div>
            <IconChip>
              <Users className="size-4" />
            </IconChip>
          </div>
        </Tile>

        <Tile label={checkins.label}>
          <div className="mt-1.5 flex items-start justify-between gap-3">
            <div>
              <p className="text-lg font-bold tracking-tight text-foreground">{checkins.value}</p>
              <p className="mt-0.5 text-[10px] text-muted-foreground">{checkins.caption}</p>
            </div>
            <IconChip>
              <ScanLine className="size-4" />
            </IconChip>
          </div>
          <p className="mt-2 text-[10px]">
            <span className="font-bold text-success">{checkins.highlight}</span>{" "}
            <span className="text-muted-foreground">{checkins.highlightSuffix}</span>
          </p>
          <ProgressBar percent={checkins.progress} className="mt-1.5" />
        </Tile>

        <Tile label={settlement.label}>
          <div className="mt-1.5 flex items-start justify-between gap-3">
            <div>
              <p className="text-lg font-bold tracking-tight text-foreground">{settlement.value}</p>
              <p className="mt-0.5 text-[10px] text-muted-foreground">{settlement.caption}</p>
            </div>
            <IconChip>
              <Receipt className="size-4" />
            </IconChip>
          </div>
          <p className="mt-2 text-[10px]">
            <span className="font-bold text-warning">{settlement.highlight}</span>{" "}
            <span className="text-muted-foreground">{settlement.highlightSuffix}</span>
          </p>
        </Tile>

        <Tile label={salesPerDay.label}>
          <div className="mt-3">
            <DayBars
              days={salesPerDay.days}
              max={salesPerDay.max}
              ticks={salesPerDay.ticks}
              tickLabels={salesPerDay.tickLabels}
            />
          </div>
        </Tile>

        <Tile label={channels.label}>
          <div className="mt-3">
            <ChannelBars items={channels.items} />
          </div>
        </Tile>
      </div>
    </div>
  )
}
