import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { EXPERIENCES, type ExperienceItem } from "@/content/site"
import { formatDurationYears, formatExperiencePeriod } from "@/lib/format-dates"
import { Building2 } from "lucide-react"
import VelamLogo from "@/assets/velam-logo.png"

function experienceBulletRich(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    const m = part.match(/^\*\*(.+)\*\*$/)
    if (m) {
      return (
        <strong key={i} className="font-medium text-foreground">
          {m[1]}
        </strong>
      )
    }
    return <span key={i}>{part}</span>
  })
}

function ExperienceLogo({ variant }: { variant: ExperienceItem["logo"] }) {
  if (variant === "velam-ai") {
    return (
      <Avatar
        className="size-11 shrink-0 bg-white corner-squircle supports-corner-shape:rounded-[50%]"
        aria-hidden
      >
        <AvatarImage src={VelamLogo} alt="" className="object-cover" />
        <AvatarFallback className="bg-muted font-mono text-lg font-medium text-foreground corner-squircle supports-corner-shape:rounded-[50%]">
          V
        </AvatarFallback>
      </Avatar>
    )
  }
  return (
    <Avatar className="size-11 shrink-0" aria-hidden>
      <AvatarFallback className="bg-muted">
        <Building2 className="size-5 text-muted-foreground" />
      </AvatarFallback>
    </Avatar>
  )
}

export function ProfessionalExperience() {
  return (
    <section id="experience" className="scroll-mt-8">
      <h2 className="px-8 font-serif text-3xl font-normal tracking-tight text-foreground">
        Experience
        <span className="ml-1 align-super text-base text-muted-foreground">
          ({EXPERIENCES.length})
        </span>
      </h2>
      <Accordion
        type="single"
        collapsible
        defaultValue={EXPERIENCES[0]?.id}
        className="mt-4 rounded-none border border-x-0 border-border/90"
      >
        {EXPERIENCES.map((exp) => (
          <AccordionItem
            key={exp.id}
            value={exp.id}
            className="border-border/90 not-last:border-b data-open:bg-transparent"
          >
            <AccordionTrigger className="flex w-full flex-1 items-center gap-4 px-8 py-3.5 text-left font-normal transition-colors hover:bg-muted/25 hover:no-underline sm:py-4">
              <ExperienceLogo variant={exp.logo} />
              <div className="min-w-0 flex-1">
                <div className="leading-snug font-semibold text-foreground">
                  {exp.company}
                </div>
                <div className="mt-0.5 text-sm leading-snug text-muted-foreground">
                  {exp.role}
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                <span className="hidden text-right text-sm text-muted-foreground sm:block">
                  <span className="block font-mono">
                    {formatExperiencePeriod(exp.start, exp.end)}
                  </span>
                  <span className="mt-0.5 block font-mono text-xs leading-3 text-muted-foreground">
                    {formatDurationYears(exp.start, exp.end)}
                  </span>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="-mx-4 border-t border-border px-4 pt-4 pb-5 text-sm">
              <p className="mb-4 text-sm text-muted-foreground sm:hidden">
                <span className="block leading-snug">
                  {formatExperiencePeriod(exp.start, exp.end)}
                </span>
                <span className="mt-0.5 block text-xs leading-snug tabular-nums">
                  {formatDurationYears(exp.start, exp.end)}
                </span>
              </p>
              <ul className="mb-6 ml-0 space-y-3 sm:ml-10">
                {exp.bullets.map((line, bulletIndex) => (
                  <li
                    key={`${exp.id}-${bulletIndex}`}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 bg-primary corner-squircle supports-corner-shape:rounded-[50%]"
                      aria-hidden
                    />
                    <span>{experienceBulletRich(line)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 sm:ml-10">
                {exp.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="rounded-md leading-none"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
