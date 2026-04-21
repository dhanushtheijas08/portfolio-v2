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
import { richBulletText } from "@/lib/rich-bullet-text"
import { Building2 } from "lucide-react"
import VelamLogo from "@/assets/velam-logo.png"

function ExperienceLogo({ variant }: { variant: ExperienceItem["logo"] }) {
  if (variant === "velam-ai") {
    return (
      <Avatar
        className="size-9 shrink-0 bg-white corner-squircle supports-corner-shape:rounded-[50%] sm:size-10 md:size-11"
        aria-hidden
      >
        <AvatarImage src={VelamLogo} alt="" className="object-cover" />
        <AvatarFallback className="bg-muted font-mono text-base font-medium text-foreground corner-squircle supports-corner-shape:rounded-[50%] sm:text-lg">
          V
        </AvatarFallback>
      </Avatar>
    )
  }
  return (
    <Avatar className="size-9 shrink-0 sm:size-10 md:size-11" aria-hidden>
      <AvatarFallback className="bg-muted">
        <Building2 className="size-4 text-muted-foreground sm:size-5" />
      </AvatarFallback>
    </Avatar>
  )
}

export function ProfessionalExperience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="px-4 font-serif text-2xl font-normal tracking-tight text-foreground sm:px-6 sm:text-3xl md:px-8 md:text-[2.125rem] md:leading-tight">
        Experience
        <span className="ml-0.5 align-super text-xs text-muted-foreground sm:ml-1 sm:text-sm md:text-base">
          ({EXPERIENCES.length})
        </span>
      </h2>
      <Accordion
        type="single"
        collapsible
        defaultValue={EXPERIENCES[0]?.id}
        className="mt-3 rounded-none border border-x-0 border-border/90 sm:mt-4 md:mt-5"
      >
        {EXPERIENCES.map((exp) => (
          <AccordionItem
            key={exp.id}
            value={exp.id}
            className="border-border/90 not-last:border-b data-open:bg-transparent"
          >
            <AccordionTrigger className="flex w-full flex-1 items-center gap-3 px-4 py-3 text-left font-normal transition-colors hover:bg-muted/25 hover:no-underline sm:gap-4 sm:px-6 sm:py-4 md:gap-5 md:px-8 md:py-4.5">
              <ExperienceLogo variant={exp.logo} />
              <div className="min-w-0 flex-1">
                <div className="text-sm leading-snug font-semibold text-foreground sm:text-base md:text-[1.0625rem]">
                  {exp.company}
                </div>
                <div className="mt-0.5 text-xs leading-snug text-muted-foreground sm:text-sm md:text-[0.9375rem]">
                  {exp.role}
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                <span className="hidden text-right text-muted-foreground sm:block">
                  <span className="block font-mono text-xs leading-snug md:text-sm">
                    {formatExperiencePeriod(exp.start, exp.end)}
                  </span>
                  <span className="mt-0.5 block font-mono text-[0.625rem] leading-3 text-muted-foreground md:text-xs">
                    {formatDurationYears(exp.start, exp.end)}
                  </span>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="-mx-3 border-t border-border px-3 pt-3 pb-4 text-xs sm:-mx-4 sm:px-4 sm:pt-4 sm:pb-5 sm:text-sm md:px-6 md:pt-5 md:pb-6 md:text-[0.9375rem]">
              <p className="mb-3 text-muted-foreground sm:mb-4 sm:hidden">
                <span className="block text-xs leading-snug">
                  {formatExperiencePeriod(exp.start, exp.end)}
                </span>
                <span className="mt-0.5 block text-[0.625rem] leading-snug tabular-nums">
                  {formatDurationYears(exp.start, exp.end)}
                </span>
              </p>
              <ul className="mb-5 ml-0 space-y-2.5 sm:mb-6 sm:ml-6 sm:space-y-3">
                {exp.bullets.map((line, bulletIndex) => (
                  <li
                    key={`${exp.id}-${bulletIndex}`}
                    className="flex gap-2.5 text-xs leading-relaxed text-muted-foreground sm:gap-3 sm:text-sm md:text-[0.9375rem] md:leading-[1.65]"
                  >
                    <span
                      className="mt-1.5 size-1.25 shrink-0 bg-primary corner-squircle supports-corner-shape:rounded-[50%] sm:mt-2 sm:size-1.5"
                      aria-hidden
                    />
                    <span>{richBulletText(line)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1 sm:ml-10 sm:gap-1.5">
                {exp.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="h-4 rounded-md px-1.5 py-0 text-[0.625rem] leading-none sm:h-5 sm:px-2 sm:text-xs"
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
