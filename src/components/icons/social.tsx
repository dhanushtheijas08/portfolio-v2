import resumePng from "@/assets/resume.png"
import { cn } from "@/lib/utils"

export function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className, "size-5")}
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>X</title>
      <path
        d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"
        fill="currentColor"
      />
    </svg>
  )
}

export function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="#ffffff"
        d="M7.12 20.45H3.56V9h3.56v11.45zM5.34 
        7.44c-1.14 0-2.06-.92-2.06-2.06 
        0-1.14.92-2.06 2.06-2.06 
        1.14 0 2.06.92 2.06 2.06 
        0 1.14-.92 2.06-2.06 
        2.06zM20.45 
        20.45h-3.56v-5.59c0-1.33-.02-3.04-1.85-3.04-1.85 
        0-2.13 1.45-2.13 
        2.94v5.69H9.35V9h3.41v1.56h.05c.48-.91 
        1.65-1.85 3.4-1.85 
        3.63 0 4.3 2.39 4.3 
        5.49v6.25z"
      />
    </svg>
  )
}

export function ResumeIcon({ className }: { className?: string }) {
  return (
    <img
      src={resumePng}
      alt=""
      width={50}
      height={50}
      className={cn("object-contain", className)}
      aria-hidden
    />
  )
}
