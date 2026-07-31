import * as React from "react"
import { ChevronDown, Receipt, ScanLine, Users } from "lucide-react"

import { LogoMark } from "@/components/brand/logo"
import {
  ChannelBars,
  DayBars,
  ProgressBar,
  Sparkline,
} from "@/components/landing/charts"
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
    <div
      className={cn(
        "rounded-xl border border-border bg-white p-3.5 sm:p-4",
        className
      )}
    >
      <p className="text-[11px] font-semibold text-ink-700">{label}</p>
      {children}
    </div>
  )
}

function IconChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
      {children}
    </span>
  )
}

/**
 * Fictional product panel shown beside the hero copy.
 * Marked aria-hidden: the figures are illustrative, not product claims.
 */
export function DashboardPreview({ className }: { className?: string }) {
  const { revenue, events, checkins, settlement, salesPerDay, channels } =
    DASHBOARD_DATA

  return (
    <div
      aria-hidden="true"
      className={cn(
        "rounded-card border border-border bg-[#fdfdfe] p-3 shadow-panel sm:p-4",
        className
      )}
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5">
          <LogoMark className="size-5" />
          <span className="text-sm font-bold tracking-tight text-brand-700">
            WebIngressos
          </span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-2.5 py-1.5 text-[11px] font-medium text-ink-500">
          {DASHBOARD_DATA.period}
          <ChevronDown className="size-3.5" />
        </span>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        <Tile label={revenue.label}>
          <p className="mt-1.5 text-lg font-extrabold tracking-tight text-ink-900">
            {revenue.value}
          </p>
          <div className="mt-1 flex items-end gap-2">
            <p className="shrink-0 text-[10px] whitespace-nowrap">
              <span className="font-bold text-brand-600">{revenue.delta}</span>{" "}
              <span className="text-ink-400">{revenue.deltaSuffix}</span>
            </p>
            <Sparkline
              values={revenue.series}
              idPrefix="revenue"
              className="h-8 min-w-0 flex-1"
            />
          </div>
        </Tile>

        <Tile label={events.label}>
          <div className="mt-1.5 flex items-center justify-between gap-3">
            <div>
              <p className="text-lg font-extrabold tracking-tight text-ink-900">
                {events.value}
              </p>
              <p className="mt-1 text-[10px] text-ink-400">
                <span className="font-bold text-brand-600">8</span> ativos
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
              <p className="text-lg font-extrabold tracking-tight text-ink-900">
                {checkins.value}
              </p>
              <p className="mt-0.5 text-[10px] text-ink-400">
                {checkins.caption}
              </p>
            </div>
            <IconChip>
              <ScanLine className="size-4" />
            </IconChip>
          </div>
          <p className="mt-2 text-[10px]">
            <span className="font-bold text-brand-600">
              {checkins.highlight}
            </span>{" "}
            <span className="text-ink-400">{checkins.highlightSuffix}</span>
          </p>
          <ProgressBar percent={checkins.progress} className="mt-1.5" />
        </Tile>

        <Tile label={settlement.label}>
          <div className="mt-1.5 flex items-start justify-between gap-3">
            <div>
              <p className="text-lg font-extrabold tracking-tight text-ink-900">
                {settlement.value}
              </p>
              <p className="mt-0.5 text-[10px] text-ink-400">
                {settlement.caption}
              </p>
            </div>
            <IconChip>
              <Receipt className="size-4" />
            </IconChip>
          </div>
          <p className="mt-2 text-[10px]">
            <span className="font-bold text-brand-600">
              {settlement.highlight}
            </span>{" "}
            <span className="text-ink-400">{settlement.highlightSuffix}</span>
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
