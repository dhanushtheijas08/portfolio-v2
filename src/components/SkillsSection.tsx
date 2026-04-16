import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SKILLS } from "@/content/site"

const SIMPLE_ICONS_CDN = "https://cdn.simpleicons.org"

function skillIconSrc(skill: { iconSlug: string; iconColor?: string }) {
  const base = `${SIMPLE_ICONS_CDN}/${skill.iconSlug}`
  return skill.iconColor ? `${base}/${skill.iconColor}` : base
}

export function SkillsSection() {
  const count = SKILLS.length

  return (
    <section id="skills" className="scroll-mt-8">
      <h2 className="px-8 font-serif text-3xl font-normal tracking-tight text-foreground">
        Skills
        <span className="ml-1 align-super text-base text-muted-foreground">
          ({count})
        </span>
      </h2>

      <TooltipProvider delayDuration={200}>
        <div className="mt-8 border border-x-0 border-border/90 p-4 sm:p-6 sm:px-4">
          <ul className="grid grid-cols-4 justify-items-center gap-2 sm:grid-cols-6 sm:gap-3 md:grid-cols-8">
            {SKILLS.map((skill) => (
              <li key={skill.iconSlug}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="flex size-11 items-center justify-center rounded-lg border border-border bg-background p-2 transition-colors hover:bg-muted/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline"
                      aria-label={skill.label}
                    >
                      <img
                        src={skillIconSrc(skill)}
                        alt=""
                        className="size-7 object-contain"
                        loading="lazy"
                        decoding="async"
                        width={28}
                        height={28}
                      />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top" sideOffset={6}>
                    {skill.label}
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </TooltipProvider>
    </section>
  )
}
