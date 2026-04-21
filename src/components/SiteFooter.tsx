import githubProfilePreview from "@/assets/image.png"
import linkedinPreview from "@/assets/linkedin.png"
import twitterPreview from "@/assets/twitter.png"
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/icons/social"
import { EMAIL, RESUME_URL, SOCIAL_HREF } from "@/content/site"
import { FileText, Mail } from "lucide-react"
import type { ComponentType, MouseEvent, ReactNode } from "react"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const footerPillClass =
  "inline-flex min-h-8 min-w-0 shrink-0 items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs text-foreground shadow-sm transition-colors hover:bg-muted sm:min-h-9 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"

const CURSOR_PREVIEW_OFFSET = 10
const PREVIEW_MAX_W = 352
const PREVIEW_MAX_H = 215
const FOOTER_ZONE_RATIO = 0.42

const TEXT_PREVIEW_MAX_W = 320
const TEXT_PREVIEW_MAX_H = 72

function clampPreviewPosition(
  clientX: number,
  clientY: number,
  previewW: number = PREVIEW_MAX_W,
  previewH: number = PREVIEW_MAX_H
) {
  const o = CURSOR_PREVIEW_OFFSET
  const vw = window.innerWidth
  const vh = window.innerHeight
  const margin = 8

  let left = clientX + o

  if (left + previewW > vw - margin) {
    left = clientX - previewW - o
  }

  // In the lower part of the viewport (footer row), float the preview above the cursor
  // so it does not cover Mail / Resume and the rest of the pill row.
  const inLowerViewport = clientY > vh * FOOTER_ZONE_RATIO
  let top: number
  if (inLowerViewport) {
    top = clientY - previewH - o
  } else {
    top = clientY + o
    if (top + previewH > vh - margin) {
      top = clientY - previewH - o
    }
  }

  left = Math.min(Math.max(margin, left), vw - previewW - margin)
  top = Math.min(Math.max(margin, top), vh - previewH - margin)

  return { x: left, y: top }
}

type SocialPreviewLink = {
  id: string
  href: string
  previewSrc: string
  label: string
  Icon: ComponentType<{ className?: string }>
}

const SOCIAL_PREVIEW_LINKS: SocialPreviewLink[] = [
  {
    id: "github",
    href: SOCIAL_HREF.github,
    previewSrc: githubProfilePreview,
    label: "GitHub",
    Icon: GithubIcon,
  },
  {
    id: "x",
    href: SOCIAL_HREF.x,
    previewSrc: twitterPreview,
    label: "X",
    Icon: TwitterIcon,
  },
  {
    id: "linkedin",
    href: SOCIAL_HREF.linkedin,
    previewSrc: linkedinPreview,
    label: "LinkedIn",
    Icon: LinkedinIcon,
  },
]

type FooterLinkWithCursorPreviewProps = {
  href: string
  children: ReactNode
  target?: string
  rel?: string
} & (
  | { imageSrc: string; textPreview?: undefined }
  | { textPreview: string; imageSrc?: undefined }
)

function FooterLinkWithCursorPreview({
  href,
  children,
  imageSrc,
  textPreview,
  target,
  rel,
}: FooterLinkWithCursorPreviewProps) {
  const hasImage = Boolean(imageSrc)
  const previewW = hasImage ? PREVIEW_MAX_W : TEXT_PREVIEW_MAX_W
  const previewH = hasImage ? PREVIEW_MAX_H : TEXT_PREVIEW_MAX_H

  const [active, setActive] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const setPositionFromEvent = (e: MouseEvent<HTMLDivElement>) => {
    setCoords(clampPreviewPosition(e.clientX, e.clientY, previewW, previewH))
  }

  return (
    <>
      <div
        className="inline-block"
        onMouseEnter={(e) => {
          setActive(true)
          setPositionFromEvent(e)
        }}
        onMouseLeave={() => setActive(false)}
        onMouseMove={setPositionFromEvent}
      >
        <a href={href} className={footerPillClass} target={target} rel={rel}>
          {children}
        </a>
      </div>
      {active && typeof document !== "undefined"
        ? createPortal(
            <div
              className={
                hasImage
                  ? "pointer-events-none fixed top-0 left-0 z-600 w-[min(85vw,22rem)]"
                  : "pointer-events-none fixed top-0 left-0 z-600 max-w-[min(85vw,20rem)]"
              }
              style={{
                transform: `translate3d(${coords.x}px, ${coords.y}px, 0)`,
              }}
              aria-hidden
            >
              <div className="overflow-hidden rounded-lg border border-border bg-card shadow-2xl ring-1 ring-foreground/10">
                {hasImage ? (
                  <img
                    src={imageSrc}
                    alt=""
                    className="max-h-[min(45vh,18rem)] w-full max-w-88 object-cover object-top"
                    draggable={false}
                  />
                ) : (
                  <p className="px-3 py-2 font-mono text-xs leading-snug break-all text-foreground sm:px-4 sm:py-3 sm:text-sm">
                    {textPreview}
                  </p>
                )}
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  )
}

export function SiteFooter() {
  const [chennaiTime, setChennaiTime] = useState("")

  useEffect(() => {
    const update = () => {
      setChennaiTime(
        new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      )
    }
    update()
    const id = window.setInterval(update, 60_000)
    return () => window.clearInterval(id)
  }, [])

  const year = new Date().getFullYear()

  return (
    <footer className="border-border">
      <div className="flex flex-col gap-5 sm:gap-6 md:gap-7">
        <div className="px-4 text-center sm:px-6 sm:text-left md:px-8">
          <h2 className="font-serif text-2xl font-normal tracking-tight text-foreground sm:text-3xl md:text-[2.125rem] md:leading-tight">
            Let&apos;s connect
            <p className="mx-auto mt-1.5 max-w-sm font-sans text-xs leading-snug text-muted-foreground sm:mx-0 sm:mt-2 sm:max-w-none sm:text-sm md:text-[0.9375rem]">
              Get in touch with me on these platforms
            </p>
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 px-4 sm:justify-start sm:gap-2 sm:px-6 md:px-8">
          {SOCIAL_PREVIEW_LINKS.map(({ id, href, previewSrc, label, Icon }) => (
            <FooterLinkWithCursorPreview
              key={id}
              href={href}
              imageSrc={previewSrc}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="size-3.5 shrink-0 sm:size-4" />
              {label}
            </FooterLinkWithCursorPreview>
          ))}
          <FooterLinkWithCursorPreview
            href={`mailto:${EMAIL}`}
            textPreview={EMAIL}
          >
            <Mail className="size-3.5 shrink-0 sm:size-4" />
            Mail
          </FooterLinkWithCursorPreview>
          <FooterLinkWithCursorPreview
            href={RESUME_URL}
            textPreview="View my resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="size-3.5 shrink-0 sm:size-4" />
            Resume
          </FooterLinkWithCursorPreview>
        </div>

        <div className="border-t border-border px-4 pt-5 sm:px-6 sm:pt-8 md:px-8">
          <div className="mx-auto flex max-w-sm flex-col items-center gap-4 font-mono text-xs leading-relaxed sm:mx-0 sm:max-w-none sm:flex-row sm:items-end sm:justify-between sm:gap-6 md:leading-relaxed">
            <div className="space-y-1.5 text-center text-muted-foreground sm:space-y-2 sm:text-left">
              <p className="text-pretty">
                Designed &amp; Developed by{" "}
                <span className="font-medium text-foreground">
                  Dhanush Theijas
                </span>
              </p>
              <p>© {year} All rights reserved.</p>
            </div>
            <div className="hidden space-y-1.5 text-right sm:block sm:max-w-[min(100%,20rem)] sm:space-y-2">
              {/* <p className="text-muted-foreground">
                Visitors{" "}
                <span className="font-medium text-foreground">
                  #{FOOTER_VISITOR_COUNT}
                </span>
              </p> */}
              <p className="text-foreground">{chennaiTime || "—"}</p>
              <p className="text-muted-foreground">Chennai, India</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
