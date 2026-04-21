import { ContactAndSocialGrid } from "@/components/ContactGrid"
import { Nav } from "@/components/Nav"
import { ProfileSection } from "@/components/ProfileSection"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ProjectsSection } from "./components/ProjectsSection"
import { BlogSection } from "./components/BlogSection"
import { ProfessionalExperience } from "./components/ProfessionalExperience"
import { SkillsSection } from "./components/SkillsSection"
import { SiteFooter } from "./components/SiteFooter"

export function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <main className="min-h-screen overflow-x-hidden px-4 sm:px-8 md:px-10 lg:px-12">
          <div className="relative mx-auto max-w-3xl pb-10 sm:pb-12 md:pb-14">
            <Nav />
            <div className="strip-pattern strip-border pointer-events-none absolute top-0 right-full bottom-0 w-6 border-r border-l sm:w-10 lg:w-16 xl:w-20" />
            <div className="strip-pattern strip-border pointer-events-none absolute top-0 bottom-0 left-full w-6 border-r border-l sm:w-10 lg:w-16 xl:w-20" />

            <ProfileSection />
            <div className="flex flex-col gap-10 sm:gap-12 md:gap-14">
              <ContactAndSocialGrid />
              <ProfessionalExperience />
              <SkillsSection />
              <ProjectsSection />
              <BlogSection />
              <SiteFooter />
            </div>
          </div>
        </main>
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App
