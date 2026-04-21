import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { GithubIcon } from "@/components/icons/social"
import { PROJECTS } from "@/content/site"
import { richBulletText } from "@/lib/rich-bullet-text"
import { Link } from "lucide-react"

function ProjectLogo({ title }: { title: string }) {
  const initial = title.slice(0, 1).toUpperCase()
  return (
    <Avatar
      className="size-9 shrink-0 corner-squircle supports-corner-shape:rounded-[50%] sm:size-10 md:size-11"
      aria-hidden
    >
      <AvatarFallback className="bg-muted font-mono text-base font-medium text-foreground corner-squircle supports-corner-shape:rounded-[50%] sm:text-lg">
        {initial}
      </AvatarFallback>
    </Avatar>
  )
}

export function ProjectsSection() {
  const count = PROJECTS.length
  const defaultProjectId = PROJECTS[0]?.id

  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="px-4 font-serif text-2xl font-normal tracking-tight text-foreground sm:px-6 sm:text-3xl md:px-8 md:text-[2.125rem] md:leading-tight">
        Projects
        <span className="ml-0.5 align-super text-xs text-muted-foreground sm:ml-1 sm:text-sm md:text-base">
          ({count})
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        defaultValue={defaultProjectId}
        className="mt-3 rounded-none border border-x-0 border-border sm:mt-4 md:mt-5"
      >
        {PROJECTS.map((project) => (
          <AccordionItem
            key={project.id}
            value={project.id}
            className="border-border not-last:border-b data-open:bg-transparent"
          >
            <div className="flex w-full items-center gap-0.5 px-2 transition-colors hover:bg-muted/25 sm:gap-2 sm:px-4 md:px-6">
              <AccordionTrigger className="min-w-0 gap-3 border-0 px-2 py-3 text-left font-normal hover:bg-transparent hover:no-underline sm:gap-4 sm:px-4 sm:py-4 md:gap-5 md:py-4.5">
                <ProjectLogo title={project.title} />
                <div className="min-w-0 flex-1">
                  <div className="text-sm leading-snug font-semibold text-foreground sm:text-base md:text-[1.0625rem]">
                    {project.title}
                  </div>
                  <div className="mt-0.5 font-mono text-[0.625rem] leading-snug text-muted-foreground sm:text-xs md:text-sm">
                    {project.dateRange}
                  </div>
                </div>
              </AccordionTrigger>
              <div className="flex shrink-0 items-center gap-0.5 pr-1 sm:gap-1 sm:pr-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      className="text-muted-foreground"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                      >
                        <GithubIcon className="size-3.5 sm:size-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" sideOffset={6}>
                    GitHub
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      className="text-muted-foreground"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                      >
                        <Link className="size-3.5 sm:size-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" sideOffset={6}>
                    Live demo
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
            <AccordionContent className="-mx-2 border-t border-border px-3 pt-3 pb-4 text-muted-foreground sm:-mx-4 sm:px-6 sm:pt-4 sm:pb-5 md:px-8 md:pt-5 md:pb-6">
              <p className="mb-4 max-w-prose font-mono text-[0.625rem] leading-relaxed sm:mb-5 sm:text-xs md:text-sm md:leading-relaxed">
                {project.summary}
              </p>
              <ul className="mb-5 ml-0 space-y-2.5 sm:mb-6 sm:ml-6 sm:space-y-3">
                {project.bullets.map((line, bulletIndex) => (
                  <li
                    key={`${project.id}-${bulletIndex}`}
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
                {project.skills.map((skill) => (
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
