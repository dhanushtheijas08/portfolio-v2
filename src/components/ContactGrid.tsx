import {
  GithubIcon,
  LinkedinIcon,
  ResumeIcon,
  TwitterIcon,
} from "@/components/icons/social"
import { EMAIL, PHONE, RESUME_URL, SOCIAL_HREF } from "@/content/site"
import { cn } from "@/lib/utils"
import { ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react"
import type { ComponentType } from "react"
import { useState } from "react"

const linkGridCellClass =
  "group relative flex min-h-[3.25rem] items-center gap-3 border-r border-b border-border bg-background px-4 py-3.5 text-left transition-colors hover:bg-muted/40 nth-[3n]:border-r-0 nth-[n+4]:border-b-0 "

function GridCopyCell({
  icon: Icon,
  value,
}: {
  icon: ComponentType<{ className?: string }>
  value: string
}) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      title="Copy to clipboard"
      aria-label={`Copy ${value}`}
      className={linkGridCellClass}
    >
      <div
        className={cn(
          "relative flex size-10 shrink-0 items-center justify-center bg-background corner-squircle supports-corner-shape:rounded-[50%]"
        )}
      >
        <Icon className={cn("size-5 text-foreground")} />
        <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-black/10 corner-squircle ring-inset supports-corner-shape:rounded-[50%] dark:ring-white/15" />
      </div>
      <span className="min-w-0 flex-1 truncate text-sm text-foreground">
        {value}
      </span>
      {copied ? (
        <Check
          className="pointer-events-none absolute top-3 right-3 size-3.5 text-foreground"
          aria-hidden
        />
      ) : (
        <Copy
          className="pointer-events-none absolute top-3 right-3 size-3.5 text-muted-foreground transition-opacity group-hover:opacity-100"
          aria-hidden
        />
      )}
    </button>
  )
}

function GridLinkCell({
  icon: Icon,
  label,
  href,
  className,
  iconClassName,
}: {
  icon: ComponentType<{ className?: string }>
  label: string
  href: string
  className?: string
  iconClassName?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkGridCellClass}
    >
      <div
        className={cn(
          "relative flex size-10 shrink-0 items-center justify-center bg-background corner-squircle supports-corner-shape:rounded-[50%]",
          className
        )}
      >
        <Icon className={cn("size-8 text-foreground", iconClassName)} />
        <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-black/10 corner-squircle ring-inset supports-corner-shape:rounded-[50%] dark:ring-white/15" />
      </div>
      <span className="min-w-0 flex-1 truncate text-sm text-foreground">
        {label}
      </span>
      <ArrowUpRight className="pointer-events-none size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}

export function ContactAndSocialGrid() {
  return (
    <div className="grid grid-cols-3 gap-x-2 border border-x-0 border-border">
      <GridCopyCell icon={Phone} value={PHONE} />
      <GridCopyCell icon={Mail} value={EMAIL} />
      <GridLinkCell
        icon={TwitterIcon}
        label="X"
        href={SOCIAL_HREF.x}
        iconClassName="size-7.5"
      />
      <GridLinkCell
        icon={GithubIcon}
        label="GitHub"
        href={SOCIAL_HREF.github}
        iconClassName="size-6.5"
      />
      <GridLinkCell
        icon={LinkedinIcon}
        label="LinkedIn"
        href={SOCIAL_HREF.linkedin}
        iconClassName="size-8.5 "
        className="bg-[#0077B7]"
      />
      <GridLinkCell
        icon={ResumeIcon}
        label="Resume"
        href={RESUME_URL}
        className="bg-black"
        iconClassName="size-12"
      />
    </div>
  )
}
