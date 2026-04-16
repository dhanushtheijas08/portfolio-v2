import { EXPERIENCES, type ExperienceItem } from "@/content/site"
import { formatDurationYears, formatExperiencePeriod } from "@/lib/format-dates"
import { Building2, ChevronDown } from "lucide-react"
import { useState } from "react"

function ExperienceLogo({ variant }: { variant: ExperienceItem["logo"] }) {
  if (variant === "turbo") {
    return (
      <div
        className="flex size-11 shrink-0 items-center justify-center bg-muted font-mono text-lg font-medium text-foreground corner-squircle supports-corner-shape:rounded-[50%]"
        aria-hidden
      >
        T
      </div>
    )
  }
  return (
    <div
      className="flex size-11 shrink-0 items-center justify-center rounded-full bg-muted"
      aria-hidden
    >
      <Building2 className="size-5 text-muted-foreground" />
    </div>
  )
}

export function ProfessionalExperience() {
  const [openId, setOpenId] = useState<string | null>(
    EXPERIENCES[0]?.id ?? null
  )

  return (
    <section id="experience" className="scroll-mt-8">
      <h2 className="px-8 font-serif text-3xl font-normal tracking-tight text-foreground">
        Experience
        <span className="ml-1 align-super text-base text-muted-foreground">
          ({EXPERIENCES.length})
        </span>
      </h2>
      <div className="mt-4 border border-x-0 border-border/90">
        {EXPERIENCES.map((exp, index) => {
          const isOpen = openId === exp.id
          return (
            <div
              key={exp.id}
              className={index > 0 ? "border-t border-border/90" : undefined}
            >
              <button
                type="button"
                onClick={() =>
                  setOpenId((prev) => (prev === exp.id ? null : exp.id))
                }
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 px-8 py-3.5 text-left transition-colors hover:bg-muted/25 sm:py-4"
              >
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
                  <ChevronDown
                    className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </div>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-border px-4 pt-4 pb-5">
                    <p className="mb-4 text-sm text-muted-foreground sm:hidden">
                      <span className="block leading-snug">
                        {formatExperiencePeriod(exp.start, exp.end)}
                      </span>
                      <span className="mt-0.5 block text-xs leading-snug tabular-nums">
                        {formatDurationYears(exp.start, exp.end)}
                      </span>
                    </p>
                    {/* <div className="mb-4 flex flex-wrap gap-1.5 sm:ml-15">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-muted px-2 py-0.5 text-xs leading-none text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div> */}
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
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 sm:ml-10">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-muted px-2 py-1 text-xs leading-none text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
