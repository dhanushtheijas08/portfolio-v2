import { ContactAndSocialGrid } from "@/components/ContactGrid"
import { Nav } from "@/components/Nav"
import { ProfileSection } from "@/components/ProfileSection"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ProjectsSection } from "./components/ProjectsSection"

export function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <main className="min-h-screen">
          <div className="relative mx-auto max-w-3xl pb-12">
            <Nav />
            <div className="strip-pattern strip-border pointer-events-none absolute top-0 right-full bottom-0 hidden w-20 border-r border-l lg:block xl:w-20" />
            <div className="strip-pattern strip-border pointer-events-none absolute top-0 bottom-0 left-full hidden w-20 border-r border-l lg:block xl:w-20" />

            <ProfileSection />
            <div className="flex flex-col gap-14">
              <ContactAndSocialGrid />
              <ProjectsSection />
            </div>
          </div>
        </main>
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App
