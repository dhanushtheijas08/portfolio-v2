export const PHONE = "+91 8220586721"
export const EMAIL = "dhanushtheijas08@gmail.com"
export const RESUME_URL =
  "https://drive.google.com/file/d/1usCDz2c4wtNKrkPV-akuh2Tm6wjDAZ-2/view?usp=sharing"

export const SOCIAL_HREF = {
  github: "https://github.com/dhanushtheijas08",
  x: "https://x.com/dhanush_theijas",
  linkedin: "https://www.linkedin.com/in/dhanush-theijas-tp/",
} as const

export const BLOG_ARCHIVE_HREF = "https://dhanushtheijas.hashnode.dev"

export type SkillItem = {
  label: string
  iconSlug: string
  iconColor?: string
  /** Light vs dark UI (e.g. black on light theme, white on dark). */
  iconColorLight?: string
  iconColorDark?: string
}

export const SKILLS: SkillItem[] = [
  { label: "TypeScript", iconSlug: "typescript" },
  { label: "JavaScript", iconSlug: "javascript" },
  { label: "Node.js", iconSlug: "nodedotjs" },
  { label: "Bun", iconSlug: "bun" },
  {
    label: "Next.js",
    iconSlug: "nextdotjs",
    iconColorLight: "000000",
    iconColorDark: "ffffff",
  },
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
  {
    label: "Express",
    iconSlug: "express",
    iconColorLight: "000000",
    iconColorDark: "ffffff",
  },
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
    id: "scoping-hoisting-js",
    title: "Scoping and Hoisting in JavaScript: Understanding the Basics",
    date: "2024-06-16",
    href: "https://dhanushtheijas.hashnode.dev/scoping-and-hoisting-in-javascript-understanding-the-basics",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&q=80",
  },
  {
    id: "css-selectors-guide",
    title: "CSS Selectors: A Comprehensive Guide",
    date: "2024-08-22",
    href: "https://dhanushtheijas.hashnode.dev/css-selectors-a-comprehensive-guide",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
  },
  {
    id: "js-function-types",
    title:
      "Understanding the Different Types of Functions in JavaScript: A Comprehensive Guide",
    date: "2024-10-08",
    href: "https://dhanushtheijas.hashnode.dev/understanding-the-different-types-of-functions-in-javascriptcomprehensive-guide",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    id: "let-const-var-js",
    title: "Let, Const, and Var in JavaScript",
    date: "2025-01-12",
    href: "https://dhanushtheijas.hashnode.dev/let-const-and-var-in-javascript",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
  },
]

export type ProjectItem = {
  id: string
  title: string
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
  logo: "velam-ai" | "generic"
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
    logo: "velam-ai",
    bullets: [
      "Developed an **AI-powered video analysis** platform focused on posture, eye contact, and speech patterns, building core features with **Next.js**, **Node.js**, **Express**, **Prisma ORM**, and **Docker**",
      "Architected a **dual-sided, multi-role** system for individual users (**Stripe** subscriptions) and an academy with teacher–student workflows modeled on **Google Classroom**",
      "Designed and deployed scalable infrastructure for **video uploads** via **Google Cloud Storage** and **CI/CD** with **Google Cloud Build** and **Google Cloud Run**",
      "Built a **real-time** **1:1** meeting booking system with a **custom scheduling queue** to prevent double bookings under concurrent load",
      "Integrated **Stripe** and **Razorpay** payments, **Zoom** session automation, dynamic admin controls, and email engagement flows",
    ],
  },
]
