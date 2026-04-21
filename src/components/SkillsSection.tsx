import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { BunIcon } from "@/components/icons/bun"
import { SKILLS } from "@/content/site"

const SIMPLE_ICONS_CDN = "https://cdn.simpleicons.org"

function skillIconSrc(
  skill: {
    iconSlug: string
    iconColor?: string
    iconColorLight?: string
    iconColorDark?: string
  },
  theme: "light" | "dark",
) {
  const base = `${SIMPLE_ICONS_CDN}/${skill.iconSlug}`
  if (skill.iconColorLight != null && skill.iconColorDark != null) {
    const color = theme === "light" ? skill.iconColorLight : skill.iconColorDark
    return `${base}/${color}`
  }
  return skill.iconColor ? `${base}/${skill.iconColor}` : base
}

function skillUsesThemeIcons(skill: {
  iconColorLight?: string
  iconColorDark?: string
}) {
  return skill.iconColorLight != null && skill.iconColorDark != null
}

export function SkillsSection() {
  const count = SKILLS.length

  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="px-4 font-serif text-2xl font-normal tracking-tight text-foreground sm:px-6 sm:text-3xl md:px-8 md:text-[2.125rem] md:leading-tight">
        Skills
        <span className="ml-0.5 align-super text-xs text-muted-foreground sm:ml-1 sm:text-sm md:text-base">
          ({count})
        </span>
      </h2>

      <TooltipProvider delayDuration={200}>
        <div className="mt-3 border border-x-0 border-border/90 p-3 sm:mt-4 sm:p-4 md:mt-5 md:p-6">
          <ul className="grid grid-cols-4 justify-items-center gap-1.5 sm:grid-cols-6 sm:gap-2.5 md:grid-cols-8 md:gap-3">
            {SKILLS.map((skill) => (
              <li key={skill.iconSlug}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="flex size-9 items-center justify-center rounded-lg border border-border bg-background p-1.5 transition-colors hover:bg-muted/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline sm:size-10 sm:p-2 md:size-11"
                      aria-label={skill.label}
                    >
                      {skill.iconSlug === "bun" ? (
                        <BunIcon className="size-6 object-contain sm:size-6.5 md:size-7" />
                      ) : skillUsesThemeIcons(skill) ? (
                        <>
                          <img
                            src={skillIconSrc(skill, "light")}
                            alt=""
                            className="size-6 object-contain dark:hidden sm:size-6.5 md:size-7"
                            loading="lazy"
                            decoding="async"
                            width={28}
                            height={28}
                          />
                          <img
                            src={skillIconSrc(skill, "dark")}
                            alt=""
                            className="hidden size-6 object-contain dark:block sm:size-6.5 md:size-7"
                            loading="lazy"
                            decoding="async"
                            width={28}
                            height={28}
                          />
                        </>
                      ) : (
                        <img
                          src={skillIconSrc(skill, "light")}
                          alt=""
                          className="size-6 object-contain sm:size-6.5 md:size-7"
                          loading="lazy"
                          decoding="async"
                          width={28}
                          height={28}
                        />
                      )}
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
