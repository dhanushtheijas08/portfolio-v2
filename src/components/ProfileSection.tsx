import blueTick from "@/assets/blue-tick.svg"
import profileImage from "@/assets/profile.png"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SOCIAL_HREF } from "@/content/site"
export function ProfileSection() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="flex flex-col gap-4 p-4 sm:gap-6 sm:p-8 md:gap-7 md:p-12">
        <div className="flex items-center gap-3 sm:gap-5 md:gap-6">
          <Avatar className="h-20 w-20 shrink-0 rounded-2xl object-cover ring-1 ring-border sm:h-24 sm:w-24 md:h-28 md:w-28">
            <AvatarImage
              alt="Dhanush"
              src={profileImage}
              className="object-cover object-center"
            />
            <AvatarFallback className="rounded-md font-serif text-2xl sm:text-3xl md:text-4xl">
              DT
            </AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col gap-0.5 sm:gap-1">
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 sm:gap-x-2 sm:gap-y-1">
              <h1 className="font-serif text-xl leading-tight tracking-tight italic sm:text-3xl sm:leading-snug sm:tracking-normal md:text-4xl md:leading-snug">
                Dhanush Theijas{" "}
              </h1>
              <img
                src={blueTick}
                alt=""
                className="size-2.5 shrink-0 sm:size-3.5 md:size-4"
              />
              <span className="font-mono text-[0.6875rem] text-muted-foreground sm:text-sm md:text-[0.9375rem]">
                <span className="hidden sm:inline">| </span>23, Chennai IND
              </span>
            </div>
            <div className="group relative max-w-fit">
              <a
                href={SOCIAL_HREF.x}
                className="font-mono text-xs text-muted-foreground sm:text-base md:text-[1.0625rem]"
                target="_blank"
                rel="noopener noreferrer"
              >
                @dhanush_theijas
              </a>
              <div
                className="absolute bottom-px left-0 h-px w-full origin-right scale-x-0 rounded-full bg-muted-foreground transition-transform duration-400 ease-in-out group-hover:origin-left group-hover:scale-x-100"
                aria-hidden
              />
            </div>
          </div>
        </div>
        <div className="flex max-w-lg flex-col gap-1 text-xs leading-relaxed text-muted-foreground sm:gap-1.5 sm:text-sm sm:leading-relaxed md:text-[0.9375rem] md:leading-[1.65]">
          <p>
            I'm a{" "}
            <span className="font-semibold text-foreground/80">
              fullstack developer
            </span>{" "}
            with{" "}
            <span className="font-semibold text-foreground/80">2 years</span> of
            experience building web apps and APIs end to end. I mostly work on{" "}
            <span className="font-semibold text-foreground/80">
              TypeScript based
            </span>{" "}
            projects.
          </p>
        </div>
      </div>
    </section>
  )
}
