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
      className="size-11 shrink-0 corner-squircle supports-corner-shape:rounded-[50%]"
      aria-hidden
    >
      <AvatarFallback className="bg-muted font-mono text-lg font-medium text-foreground corner-squircle supports-corner-shape:rounded-[50%]">
        {initial}
      </AvatarFallback>
    </Avatar>
  )
}

export function ProjectsSection() {
  const count = PROJECTS.length
  const defaultProjectId = PROJECTS[0]?.id

  return (
    <section id="projects" className="scroll-mt-8">
      <h2 className="px-8 font-serif text-3xl font-normal tracking-tight text-foreground">
        Projects
        <span className="ml-1 align-super text-base text-muted-foreground">
          ({count})
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        defaultValue={defaultProjectId}
        className="mt-4 rounded-none border border-x-0 border-border"
      >
        {PROJECTS.map((project) => (
          <AccordionItem
            key={project.id}
            value={project.id}
            className="border-border not-last:border-b data-open:bg-transparent"
          >
            <div className="flex w-full items-center gap-1 px-4 transition-colors hover:bg-muted/25 sm:gap-2">
              <AccordionTrigger className="min-w-0 gap-4 border-0 px-4 py-3.5 text-left font-normal hover:bg-transparent hover:no-underline sm:py-4">
                <ProjectLogo title={project.title} />
                <div className="min-w-0 flex-1">
                  <div className="leading-snug font-semibold text-foreground">
                    {project.title}
                  </div>
                  <div className="mt-0.5 font-mono text-xs leading-snug text-muted-foreground">
                    {project.dateRange}
                  </div>
                </div>
              </AccordionTrigger>
              <div className="flex shrink-0 items-center gap-1 pr-2 sm:pr-4">
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
                        <GithubIcon className="size-4" />
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
                        <Link className="size-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" sideOffset={6}>
                    Live demo
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
            <AccordionContent className="-mx-4 border-t border-border px-8 pt-4 pb-5 text-muted-foreground">
              <p className="mb-5 max-w-prose font-mono text-xs leading-relaxed sm:text-sm">
                {project.summary}
              </p>
              <ul className="mb-6 ml-0 space-y-3">
                {project.bullets.map((line, bulletIndex) => (
                  <li
                    key={`${project.id}-${bulletIndex}`}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 bg-primary corner-squircle supports-corner-shape:rounded-[50%]"
                      aria-hidden
                    />
                    <span>{richBulletText(line)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {project.skills.map((skill) => (
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
