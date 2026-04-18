import blueTick from "@/assets/blue-tick.svg"
// import profileImage from "@/assets/profile.png"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SOCIAL_HREF } from "@/content/site"
export function ProfileSection() {
  return (
    <div className="flex flex-col gap-6 p-12">
      <div className="flex items-center gap-5">
        <Avatar className="h-26 w-24 rounded-2xl object-cover ring-1 ring-border">
          <AvatarImage
            alt="Dhanush"
            // src={profileImage}
            className="object-cover object-center"
          />
          <AvatarFallback className="rounded-md font-serif text-3xl">
            DT
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h1 className="font-serif text-4xl italic">Dhanush Theijas </h1>
            <img src={blueTick} alt="Dhanush" className="size-3.5" />
            <span className="font-mono text-sm text-muted-foreground">
              | 23, Chennai IND
            </span>
          </div>
          <div className="group relative max-w-fit">
            <a
              href={SOCIAL_HREF.x}
              className="font-mono text-base text-muted-foreground"
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
      <div className="flex max-w-lg flex-col gap-1.5 text-sm leading-relaxed text-muted-foreground">
        <p>
          I'm a{" "}
          <span className="font-semibold text-foreground/80">
            fullstack developer
          </span>{" "}
          with <span className="font-semibold text-foreground/80">2 years</span>{" "}
          of experience building web apps and APIs end to end. I mostly work on{" "}
          <span className="font-semibold text-foreground/80">
            TypeScript based
          </span>{" "}
          projects.
        </p>
      </div>
    </div>
  )
}
