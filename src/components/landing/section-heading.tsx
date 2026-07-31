import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  )
}
