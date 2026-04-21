import { cn } from "@/lib/utils"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useEffect, useId, useState } from "react"
import { useTheme, type Theme } from "./theme-provider"
import { Button } from "./ui/button"

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#blog", label: "Blogs" },
] as const

function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = (theme: Theme) => {
    if (!document.startViewTransition) {
      setTheme(theme)
      return
    }
    document.startViewTransition(() => setTheme(theme))
  }

  return (
    <Button
      variant="outline"
      size="icon-sm"
      className="relative shrink-0"
      // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const panelId = useId()

  useEffect(() => {
    if (!mobileOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [mobileOpen])

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-md backdrop-saturate-150 md:border-border/75">
      <div className="relative mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:px-12 lg:py-5">
        <div className="hidden min-w-0 flex-1 items-center gap-6 text-sm text-muted-foreground lg:flex lg:gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="shrink-0 transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center lg:hidden">
          <img
            src="/black-favicon.svg"
            alt="Logo"
            className="size-6.5 dark:hidden"
          />
          <img
            src="/white-favicon.svg"
            alt="Logo"
            className="hidden size-6.5 dark:block"
          />
        </div>

        <div className="flex w-full items-center justify-end gap-2 sm:gap-3 lg:w-auto lg:justify-end">
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={panelId}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className="size-4" aria-hidden />
            ) : (
              <Menu className="size-4" aria-hidden />
            )}
            <span className="sr-only">
              {mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            </span>
          </Button>
          <ThemeToggle />
        </div>
      </div>

      <div
        id={panelId}
        className={cn(
          "absolute w-full border-t border-border/40 bg-background/95 backdrop-blur-md lg:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <div className="mx-auto flex max-w-3xl flex-col gap-1 px-4 py-3 sm:px-8">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-2xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
