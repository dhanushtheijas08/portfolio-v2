import resumeBlackPng from "@/assets/resume-black.png"
import resumePng from "@/assets/resume.png"
import { EMAIL, PHONE, RESUME_URL, SOCIAL_HREF } from "@/content/site"
import { cn } from "@/lib/utils"
import { Check, Copy } from "lucide-react"
import { type ReactNode, useState } from "react"

type BaseContactItem = {
  id: string
  label: string
  icon: ReactNode
  iconBgClass?: string
  iconClassName?: string
}

type CopyableContactItem = BaseContactItem & {
  type: "copyable"
  value: string
  displayValue?: string
}

type LinkContactItem = BaseContactItem & {
  type: "link"
  href: string
}

export type ContactItem = CopyableContactItem | LinkContactItem

const gridCellClass =
  "group relative flex min-h-[2.625rem] items-center gap-2 bg-background px-2.5 py-2 text-left transition-colors hover:bg-muted/40 sm:min-h-[3rem] sm:gap-2.5 sm:px-3.5 sm:py-3 md:min-h-[3.25rem] md:gap-3 md:px-4 md:py-3.5"

const iconWrapClass =
  "relative flex size-7.5 shrink-0 items-center justify-center bg-background corner-squircle supports-corner-shape:rounded-[50%] sm:size-8.5 md:size-9"

const iconRingClass =
  "pointer-events-none absolute inset-0 rounded-lg ring-1 ring-black/10 corner-squircle ring-inset supports-corner-shape:rounded-[50%] dark:ring-white/15"

const overlayGridClass =
  "pointer-events-none absolute inset-0 z-10 grid gap-2 sm:gap-2.5 md:gap-3"
const contentGridClass =
  "-z-10 grid gap-x-2 gap-y-2 border border-x-0 border-border/90 sm:gap-x-2.5 sm:gap-y-2.5 md:gap-x-3 md:gap-y-3"
const copyStatusIconClass =
  "pointer-events-none absolute top-5 right-2 size-3 sm:top-6.5 sm:right-3 sm:size-3.5"

function PhoneIcon() {
  return (
    <svg
      className="size-5 text-foreground"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg
      className="size-5.5 text-foreground"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="size-5"
    >
      <title>X</title>
      <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="size-5.5"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden
      className="size-6.5"
    >
      <path
        fill="#ffffff"
        d="M7.12 20.45H3.56V9h3.56v11.45zM5.34 7.44c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.59c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.69H9.35V9h3.41v1.56h.05c.48-.91 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.49v6.25z"
      />
    </svg>
  )
}

function ArrowUpRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.75}
      stroke="currentColor"
      className="size-3 sm:size-3.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  )
}

const DEFAULT_CONTACT_ITEMS: ContactItem[] = [
  {
    id: "linkedin",
    type: "link",
    href: SOCIAL_HREF.linkedin,
    label: "LinkedIn",
    icon: <LinkedInIcon />,
    iconBgClass: "bg-[#0077B7]",
  },
  {
    id: "github",
    type: "link",
    href: SOCIAL_HREF.github,
    label: "GitHub",
    icon: <GitHubIcon />,
  },
  {
    id: "x",
    type: "link",
    href: SOCIAL_HREF.x,
    label: "X",
    icon: <XIcon />,
    iconBgClass: "bg-black",
    iconClassName: "text-white",
  },
  {
    id: "resume",
    type: "link",
    href: RESUME_URL,
    label: "Resume",
    icon: (
      <>
        <img
          src={resumeBlackPng}
          alt=""
          width={44}
          height={44}
          className="size-9 object-contain sm:size-11 dark:hidden"
          aria-hidden
        />
        <img
          src={resumePng}
          alt=""
          width={44}
          height={44}
          className="hidden size-9 object-contain sm:size-11 dark:block"
          aria-hidden
        />
      </>
    ),
    /** Light: default `bg-background` tile; dark: black chip + white resume art */
    iconBgClass: "dark:bg-black",
  },
  {
    id: "email",
    type: "copyable",
    value: EMAIL,
    label: "dhanush...@gmail.com",
    displayValue: EMAIL,
    icon: <EmailIcon />,
  },
  {
    id: "phone",
    type: "copyable",
    value: PHONE,
    label: PHONE,
    icon: <PhoneIcon />,
  },
]

type ContactGridItemContentProps = {
  item: ContactItem
  trailing: ReactNode
}

function ContactGridItemContent({
  item,
  trailing,
}: ContactGridItemContentProps) {
  return (
    <>
      <div className={cn(iconWrapClass, item.iconBgClass)}>
        <div
          className={cn(
            "origin-center scale-[0.92] text-foreground sm:scale-100",
            item.iconClassName
          )}
        >
          {item.icon}
        </div>
        <div className={iconRingClass} />
      </div>
      <span className="min-w-0 flex-1 truncate text-xs leading-snug text-foreground sm:text-sm sm:leading-normal md:text-[0.9375rem] md:leading-normal">
        {item.label}
      </span>
      {trailing}
    </>
  )
}

type CopyableGridItemProps = {
  item: CopyableContactItem
  isCopied: boolean
  onCopy: () => void
}

function CopyableGridItem({ item, isCopied, onCopy }: CopyableGridItemProps) {
  return (
    <button
      type="button"
      onClick={onCopy}
      title="Copy to clipboard"
      aria-label={`Copy ${item.displayValue || item.value}`}
      className={cn(gridCellClass, "w-full")}
    >
      <ContactGridItemContent
        item={item}
        trailing={
          isCopied ? (
            <Check
              className={cn(copyStatusIconClass, "text-foreground")}
              aria-hidden
            />
          ) : (
            <Copy
              className={cn(
                copyStatusIconClass,
                "hidden text-muted-foreground transition-opacity group-hover:opacity-100 sm:block"
              )}
              aria-hidden
            />
          )
        }
      />
    </button>
  )
}

type LinkGridItemProps = {
  item: LinkContactItem
}

function LinkGridItem({ item }: LinkGridItemProps) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={gridCellClass}
    >
      <ContactGridItemContent
        item={item}
        trailing={
          <div className="pointer-events-none text-muted-foreground/85 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRightIcon />
          </div>
        }
      />
    </a>
  )
}

type ContactGridOverlayProps = {
  columns: number
  className?: string
}

function ContactGridColumnLines({
  columns,
  className,
}: ContactGridOverlayProps) {
  return (
    <div
      className={cn(overlayGridClass, className)}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {Array.from({ length: columns }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "col-span-1",
            index === 0 && "border-r border-border/90",
            index > 0 && index < columns - 1 && "border-x border-border/90",
            index === columns - 1 && "border-l border-border/90"
          )}
        />
      ))}
    </div>
  )
}

type ContactGridRowLinesProps = {
  columns: number
  rows: number
  className?: string
}

function ContactGridRowLines({
  columns,
  rows,
  className,
}: ContactGridRowLinesProps) {
  return (
    <div
      className={cn(overlayGridClass, className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className={cn(
            index === 0 && "border-b border-border/90",
            index > 0 && index < rows - 1 && "border-y border-border/90",
            index === rows - 1 && "border-t border-border/90"
          )}
          style={{
            gridRow: index + 1,
            gridColumn: `1 / span ${columns}`,
          }}
        />
      ))}
    </div>
  )
}

type ContactGridProps = {
  items?: ContactItem[]
  className?: string
}

export function ContactGrid({
  items = DEFAULT_CONTACT_ITEMS,
  className,
}: ContactGridProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = async (value: string, id: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedId(id)
      window.setTimeout(() => setCopiedId(null), 2000)
    } catch {
      /* ignore */
    }
  }

  const mobileCols = 2
  const desktopCols = 3
  const mobileRows = Math.ceil(items.length / mobileCols)
  const desktopRows = Math.ceil(items.length / desktopCols)

  return (
    <div className={cn("relative", className)}>
      <ContactGridColumnLines columns={mobileCols} className="sm:hidden" />
      <ContactGridRowLines
        columns={mobileCols}
        rows={mobileRows}
        className="sm:hidden"
      />

      <ContactGridColumnLines
        columns={desktopCols}
        className="hidden sm:grid"
      />
      <ContactGridRowLines
        columns={desktopCols}
        rows={desktopRows}
        className="hidden sm:grid"
      />

      <div className={cn(contentGridClass, "grid-cols-2 sm:grid-cols-3")}>
        {items.map((item) => {
          if (item.type === "copyable") {
            return (
              <CopyableGridItem
                key={item.id}
                item={item}
                isCopied={copiedId === item.id}
                onCopy={() => handleCopy(item.value, item.id)}
              />
            )
          }
          return <LinkGridItem key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

export function ContactAndSocialGrid() {
  return <ContactGrid />
}
