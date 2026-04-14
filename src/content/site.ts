export const PHONE = "+91 8220586721"
export const EMAIL = "dhanushtheijas08@gmail.com"
export const RESUME_URL =
  "https://drive.google.com/file/d/1usCDz2c4wtNKrkPV-akuh2Tm6wjDAZ-2/view?usp=sharing"

export const SOCIAL_HREF = {
  github: "https://github.com/dhanush",
  x: "https://x.com/dhanush_theijas",
  linkedin: "https://linkedin.com/in/dhanush",
} as const

export const FOOTER_VISITOR_COUNT = "3,153"
export const BLOG_ARCHIVE_HREF = "https://medium.com"

export type SkillItem = {
  label: string
  /** Simple Icons slug for https://cdn.simpleicons.org/{slug} or /{slug}/{hex} */
  iconSlug: string
  /**
   * Optional 6-char hex (no #). Some defaults are near-black and vanish on dark UI;
   * set a light hex so the SVG reads on `dark` backgrounds.
   */
  iconColor?: string
}

export const SKILLS: SkillItem[] = [
  { label: "TypeScript", iconSlug: "typescript" },
  { label: "JavaScript", iconSlug: "javascript" },
  { label: "Node.js", iconSlug: "nodedotjs" },
  { label: "Bun", iconSlug: "bun", iconColor: "ffffff" },
  { label: "Next.js", iconSlug: "nextdotjs", iconColor: "ffffff" },
  { label: "Tailwind CSS", iconSlug: "tailwindcss" },
  { label: "Git", iconSlug: "git" },
  { label: "Docker", iconSlug: "docker" },
  { label: "MongoDB", iconSlug: "mongodb" },
  { label: "PostgreSQL", iconSlug: "postgresql" },
  { label: "Prisma ORM", iconSlug: "prisma" },
  { label: "Drizzle ORM", iconSlug: "drizzle" },
  { label: "React", iconSlug: "react" },
  { label: "React Router", iconSlug: "reactrouter" },
  { label: "Redis", iconSlug: "redis" },
  { label: "Express", iconSlug: "express", iconColor: "ffffff" },
]

export type BlogPost = {
  id: string
  title: string
  date: string
  href: string
  image: string
  featured?: boolean
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Theme Toggle Effect",
    date: "2025-07-24",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    featured: true,
  },
  {
    id: "2",
    title: "Building with Radix Primitives",
    date: "2025-06-12",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  },
  {
    id: "3",
    title: "Dropdown Patterns in React",
    date: "2025-05-03",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    id: "4",
    title: "Twemoji and Accessible Icons",
    date: "2025-04-18",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    featured: true,
  },
]

export type ProjectItem = {
  id: string
  title: string
  /** Shown in the row, e.g. "01.2025 — ∞" */
  dateRange: string
  summary: string
  bullets: readonly [string, string, string]
  skills: string[]
  githubUrl: string
  liveUrl: string
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "wheel-picker",
    title: "React Wheel Picker",
    dateRange: "01.2025 — ∞",
    summary:
      "iOS-style wheel picker for React with inertia scrolling and infinite loop support. Published as a tree-shakable package with docs and examples.",
    bullets: [
      "Spring-based inertia and snap-to-item behavior similar to native pickers.",
      "Virtualized rows for long lists without jank on low-end devices.",
      "Full keyboard and screen-reader friendly selection flow.",
    ],
    skills: ["React", "TypeScript", "Vite", "GitHub Actions"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    dateRange: "03.2024 — 12.2024",
    summary:
      "Minimal portfolio site with dark mode, MDX-ready structure, and a focus on typography. Built to load fast and stay easy to extend.",
    bullets: [
      "Responsive layout with accessible navigation and focus states.",
      "Content sections driven by typed data for easy updates.",
      "Deployed on the edge with automatic previews on every push.",
    ],
    skills: ["React", "Tailwind CSS", "Vite", "Bun"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "api-kit",
    title: "Typed API Client",
    dateRange: "06.2023 — 02.2024",
    summary:
      "Small toolkit for calling REST APIs with Zod-validated responses and typed errors. Designed for use in server and client components.",
    bullets: [
      "Runtime validation of JSON with clear error paths for debugging.",
      "Automatic retry with backoff for transient failures.",
      "Composable middleware for auth headers and logging.",
    ],
    skills: ["TypeScript", "Zod", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
]

export type ExperienceItem = {
  id: string
  company: string
  role: string
  /** ISO date yyyy-mm-dd */
  start: string
  /** ISO date yyyy-mm-dd, or null if still in this role */
  end: string | null
  skills: string[]
  bullets: string[]
  logo: "turbo" | "generic"
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "turbo-ml",
    company: "Turbo ML",
    role: "Software Engineering Intern (AI)",
    start: "2025-04-01",
    end: null,
    skills: ["Redis", "Python", "TypeScript", "FastAPI", "REST APIs", "Docker"],
    logo: "turbo",
    bullets: [
      "Implemented a reminder system using Redis Sorted Sets and scheduled workers to deliver timely notifications at scale.",
      "Integrated multiple external APIs including Swiggy and payment providers with resilient error handling and retries.",
      "Built internal dashboards and monitoring hooks to surface usage metrics for ML pipelines.",
      "Collaborated with the research team to productionize experiment code and reduce inference latency.",
      "Documented deployment runbooks and contributed to onboarding materials for new engineers.",
    ],
  },
  {
    id: "sample",
    company: "Acme Labs",
    role: "Junior Developer",
    start: "2024-01-01",
    end: "2025-03-31",
    skills: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Vitest"],
    logo: "generic",
    bullets: [
      "Shipped features across the web stack with a focus on performance and accessibility.",
      "Partnered with design on component libraries and consistent UX patterns.",
    ],
  },
]
