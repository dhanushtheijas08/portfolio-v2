import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"

function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon-sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-md backdrop-saturate-150">
      <div className="relative mx-auto flex max-w-3xl items-center justify-between px-12 py-5">
        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">
            Home
          </a>
          <a
            href="#experience"
            className="transition-colors hover:text-foreground"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="transition-colors hover:text-foreground"
          >
            Projects
          </a>
          <a href="#skills" className="transition-colors hover:text-foreground">
            Skills
          </a>
          <a href="#blog" className="transition-colors hover:text-foreground">
            Blogs
          </a>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  )
}
