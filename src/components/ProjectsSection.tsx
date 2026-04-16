import { GithubIcon } from "@/components/icons/social"
import { PROJECTS } from "@/content/site"
import { ChevronDown, Link } from "lucide-react"
import { useState } from "react"

function ProjectLogo({ title }: { title: string }) {
  const initial = title.slice(0, 1).toUpperCase()
  return (
    <div
      className="flex size-11 shrink-0 items-center justify-center bg-muted font-mono text-lg font-medium text-foreground corner-squircle supports-corner-shape:rounded-[50%]"
      aria-hidden
    >
      {initial}
    </div>
  )
}

export function ProjectsSection() {
  const [openId, setOpenId] = useState<string | null>(PROJECTS[0]?.id ?? null)
  const count = PROJECTS.length

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="projects" className="scroll-mt-8">
      <h2 className="px-8 font-serif text-3xl font-normal tracking-tight text-foreground">
        Projects
        <span className="ml-1 align-super text-base text-muted-foreground">
          ({count})
        </span>
      </h2>

      <div className="mt-4 border border-x-0 border-border">
        {PROJECTS.map((project, index) => {
          const isOpen = openId === project.id
          return (
            <div
              key={project.id}
              className={index > 0 ? "border-t border-border" : undefined}
            >
              <div className="flex w-full items-stretch px-4 transition-colors hover:bg-muted/25">
                <button
                  type="button"
                  onClick={() => toggle(project.id)}
                  aria-expanded={isOpen}
                  className="flex min-w-0 flex-1 items-center gap-4 px-4 py-3.5 text-left sm:py-4"
                >
                  <ProjectLogo title={project.title} />
                  <div className="min-w-0 flex-1">
                    <div className="leading-snug font-semibold text-foreground">
                      {project.title}
                    </div>
                    <div className="mt-0.5 font-mono text-xs leading-snug text-muted-foreground">
                      {project.dateRange}
                    </div>
                  </div>
                </button>
                <div className="flex shrink-0 items-center gap-0.5 self-center pr-2 sm:gap-1 sm:pr-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <GithubIcon className="size-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    aria-label={`${project.title} live demo`}
                  >
                    <Link className="size-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => toggle(project.id)}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Collapse project" : "Expand project"}
                    className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <ChevronDown
                      className={`size-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                </div>
              </div>
              <div
                className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-border px-8 pt-4 pb-5">
                    <p className="mb-5 max-w-prose font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {project.summary}
                    </p>
                    <ul className="mb-6 ml-0 space-y-3 sm:ml-10">
                      {project.bullets.map((line, bulletIndex) => (
                        <li
                          key={`${project.id}-${bulletIndex}`}
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
                      {project.skills.map((skill) => (
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
