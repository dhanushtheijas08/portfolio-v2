export const PHONE = "+91 8220586721"
export const EMAIL = "dhanushtheijas08@gmail.com"
export const RESUME_URL =
  "https://drive.google.com/file/d/1usCDz2c4wtNKrkPV-akuh2Tm6wjDAZ-2/view?usp=sharing"

export const SOCIAL_HREF = {
  github: "https://github.com/dhanushtheijas08",
  x: "https://x.com/dhanush_theijas",
  linkedin: "https://www.linkedin.com/in/dhanush-theijas-tp/",
} as const

export const BLOG_ARCHIVE_HREF = "https://medium.com"

export type SkillItem = {
  label: string
  iconSlug: string
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
    title: "Streaming SSR Without the Footguns",
    date: "2026-02-11",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    id: "2",
    title: "Why Your Cache Headers Lie",
    date: "2025-11-03",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  },
  {
    id: "3",
    title: "SQLite in Production: Notes from the Trenches",
    date: "2025-08-29",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    id: "4",
    title: "Design Tokens That Survive a Rebrand",
    date: "2025-04-07",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
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
    id: "code-judge",
    title: "Judge NULL (Code Judge Platform)",
    dateRange: "Feb 2026 — Apr 2026",
    summary:
      "A scalable coding platform with a secure, container-based code execution engine.",
    bullets: [
      "Developed a Docker-based sandbox system to safely execute user code in isolated environments",
      "Implemented custom authentication (JWT + OAuth) with Google & GitHub, along with role-ready backend structure",
      "Designed a high-performance system using Redis caching, rate limiting, and BullMQ queues for handling concurrent executions",
    ],
    skills: [
      "React",
      "React Router",
      "Bun (Monorepo)",
      "Express",
      "Docker",
      "Redis",
      "Tailwind CSS",
      "Shadcn",
      "BullMQ",
    ],
    githubUrl: "https://github.com/dhanushtheijas08/code-judge",
    liveUrl: "https://example.com",
  },
  {
    id: "resume-builder",
    title: "Resume Builder",
    dateRange: "Nov 2025 — Feb 2026",
    summary:
      "A modern resume builder focused on real-time customization and high-quality PDF generation.",
    bullets: [
      "Real-time resume preview with dynamic editing and template filtering based on company, role, and experience",
      "Reused frontend UI components for server-side PDF generation using Puppeteer, ensuring design consistency",
      "Built a custom page-break engine for accurate multi-page PDF rendering — a key improvement over typical resume tools",
    ],
    skills: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Shadcn",
      "Prisma ORM",
      "MongoDB",
      "Puppeteer",
    ],
    githubUrl: "https://github.com/dhanushtheijas08/resume-builder",
    liveUrl: "https://coder-cv.vercel.app/",
  },
]

export type ExperienceItem = {
  id: string
  company: string
  role: string
  start: string
  end: string | null
  skills: string[]
  bullets: string[]
  logo: "turbo" | "generic"
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "velam-ai",
    company: "Velam AI",
    role: "Software Engineering",
    start: "2024-09-03",
    end: null,
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "Prisma ORM",
      "Supabase",
      "Firebase",
      "PostgreSQL",
      "Docker",
      "Google Cloud Storage",
      "Google Cloud Build",
      "Google Cloud Run",
      "Stripe",
      "Razorpay",
      "REST APIs",
      "CI/CD",
    ],
    logo: "turbo",
    bullets: [
      "Developed an AI-powered video analysis platform focused on posture, eye contact, and speech patterns, building core features using Next.js, Node.js, Express, Prisma ORM, and Docker",
      "Architected a dual-sided, multi-role system supporting individual users (with Stripe-based subscriptions) and an academy platform with teacher–student workflows similar to Google Classroom",
      "Designed and deployed scalable infrastructure for handling video uploads via Google Cloud Storage and implemented CI/CD pipelines using Google Cloud Build and Google Cloud Run",
      "Built a real-time 1:1 meeting booking system with a custom scheduling queue to prevent double bookings, ensuring high reliability under concurrent usage",
      "Integrated end-to-end payments using Stripe and Razorpay, along with automated Zoom session workflows, dynamic admin controls, and email-based engagement systems",
    ],
  },
]
