import githubProfilePreview from "@/assets/image.png"
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/icons/social"
import { EMAIL, RESUME_URL, SOCIAL_HREF } from "@/content/site"
import { FileText, Mail } from "lucide-react"
import type { MouseEvent } from "react"
import { useEffect, useState } from "react"

const footerPillClass =
  "inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-foreground shadow-sm transition-colors hover:bg-muted"

const CURSOR_PREVIEW_OFFSET = 6
const PREVIEW_MAX_W = 352
const PREVIEW_MAX_H = 215

function clampPreviewPosition(clientX: number, clientY: number) {
  const o = CURSOR_PREVIEW_OFFSET
  let left = clientX + o
  let top = clientY + o
  if (left + PREVIEW_MAX_W > window.innerWidth - 8) {
    left = clientX - PREVIEW_MAX_W - o
  }
  if (top + PREVIEW_MAX_H > window.innerHeight - 8) {
    top = clientY - PREVIEW_MAX_H - o
  }
  return { x: Math.max(8, left), y: Math.max(8, top) }
}

function GithubFooterLinkWithCursorPreview() {
  const [active, setActive] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const updatePos = (e: MouseEvent<HTMLDivElement>) => {
    setCoords(clampPreviewPosition(e.clientX, e.clientY))
  }

  return (
    <>
      <div
        className="inline-block"
        onMouseEnter={(e) => {
          setActive(true)
          setCoords(clampPreviewPosition(e.clientX, e.clientY))
        }}
        onMouseLeave={() => setActive(false)}
        onMouseMove={updatePos}
      >
        <a
          href={SOCIAL_HREF.github}
          target="_blank"
          rel="noopener noreferrer"
          className={footerPillClass}
        >
          <GithubIcon className="size-4 shrink-0" />
          GitHub
        </a>
      </div>
      {active ? (
        <div
          className="pointer-events-none fixed top-0 left-0 z-100 w-[min(85vw,22rem)]"
          style={{
            transform: `translate3d(${coords.x}px, ${coords.y}px, 0)`,
          }}
          aria-hidden
        >
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-2xl ring-1 ring-foreground/10">
            <img
              src={githubProfilePreview}
              alt=""
              className="max-h-[min(45vh,18rem)] w-full max-w-88 object-cover object-top"
              draggable={false}
            />
          </div>
        </div>
      ) : null}
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
    <footer className="mt-8 border-border pb-10">
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="px-8 font-serif text-3xl font-normal tracking-tight text-foreground">
            Let&apos;s connect
            <p className="font-sans text-sm text-muted-foreground">
              Find me on these platforms
            </p>
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 px-8">
          <GithubFooterLinkWithCursorPreview />
          <a
            href={SOCIAL_HREF.x}
            target="_blank"
            rel="noopener noreferrer"
            className={footerPillClass}
          >
            <TwitterIcon className="size-4 shrink-0" />X
          </a>
          <a
            href={SOCIAL_HREF.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={footerPillClass}
          >
            <LinkedinIcon className="size-4 shrink-0" />
            LinkedIn
          </a>
          <a href={`mailto:${EMAIL}`} className={footerPillClass}>
            <Mail className="size-4 shrink-0" />
            Mail
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={footerPillClass}
          >
            <FileText className="size-4 shrink-0" />
            Resume
          </a>
        </div>

        <div className="border-t border-border px-8 pt-8">
          <div className="flex flex-col gap-6 font-mono text-xs leading-relaxed sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2 text-muted-foreground">
              <p>
                Designed &amp; Developed by{" "}
                <span className="font-medium text-foreground">
                  Dhanush Theijas
                </span>
              </p>
              <p>© {year} All rights reserved.</p>
            </div>
            <div className="space-y-2 text-right sm:max-w-[min(100%,20rem)]">
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
