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
        <main className="min-h-screen">
          <div className="relative mx-auto max-w-3xl pb-12">
            <Nav />
            <div className="strip-pattern strip-border pointer-events-none absolute top-0 right-full bottom-0 hidden w-20 border-r border-l lg:block xl:w-20" />
            <div className="strip-pattern strip-border pointer-events-none absolute top-0 bottom-0 left-full hidden w-20 border-r border-l lg:block xl:w-20" />

            <section id="home" className="scroll-mt-24">
              <ProfileSection />
            </section>
            <div className="flex flex-col gap-14">
              <ContactAndSocialGrid />
              <section id="experience" className="scroll-mt-24">
                <ProfessionalExperience />
              </section>
              <section id="skills" className="scroll-mt-24">
                <SkillsSection />
              </section>
              <section id="projects" className="scroll-mt-24">
                <ProjectsSection />
              </section>
              <section id="blog" className="scroll-mt-24">
                <BlogSection />
              </section>
              <SiteFooter />
            </div>
          </div>
        </main>
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App
