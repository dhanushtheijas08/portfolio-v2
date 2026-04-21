import { BLOG_ARCHIVE_HREF, BLOG_POSTS } from "@/content/site"
import { formatBlogDate } from "@/lib/format-dates"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

const overlayGridClass =
  "pointer-events-none absolute inset-0 z-10 hidden grid gap-2 sm:grid sm:gap-2.5 md:gap-3"

function BlogColumnLines() {
  const columns = 2
  return (
    <div
      className={overlayGridClass}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {Array.from({ length: columns }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "col-span-1",
            index === 0 && "border-r border-border/90",
            index > 0 && index < columns - 1 && "border-x border-border/90",
            index === columns - 1 && "border-l border-border/90"
          )}
        />
      ))}
    </div>
  )
}

function BlogRowLines() {
  const columns = 2
  return (
    <div
      className={cn(overlayGridClass, "hidden md:grid")}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      <div
        className="col-start-1 border-b border-border/90"
        style={{ gridColumn: `1 / span ${columns}` }}
      />
      <div
        className="col-start-1 row-start-2 border-t border-border/90"
        style={{ gridColumn: `1 / span ${columns}` }}
      />
    </div>
  )
}
export const ExtraBorder = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 w-full -translate-y-2.5 border-b border-border/90"></div>
      <div className="absolute inset-0 -z-10 w-full translate-y-2.5 border-t border-border/90"></div>
    </>
  )
}
const MobileBorder = () => {
  return (
    <div className="pointer-events-none absolute inset-0 grid grid-cols-1 grid-rows-4 gap-8 py-6 sm:hidden">
      {Array.from({ length: BLOG_POSTS.length - 1 }).map((_, i) => (
        <div key={i} className="relative sm:hidden">
          <div className="absolute inset-x-0 -bottom-4 -translate-y-[5px] border-b border-border"></div>
          <div className="absolute inset-x-0 -bottom-4 translate-y-[5px] border-b border-border"></div>
        </div>
      ))}
    </div>
  )
}

export function BlogSection() {
  const count = BLOG_POSTS.length

  return (
    <section id="blog" className="scroll-mt-24">
      <h2 className="px-4 font-serif text-2xl font-normal tracking-tight text-foreground sm:px-6 sm:text-3xl md:px-8 md:text-[2.125rem] md:leading-tight">
        Blog
        <span className="ml-0.5 align-super text-xs text-muted-foreground sm:ml-1 sm:text-sm md:text-base">
          ({count})
        </span>
      </h2>

      <div className="mt-3 border border-x-0 border-border/90 sm:mt-4 md:mt-5">
        <div className="relative">
          <BlogColumnLines />
          <BlogRowLines />
          <ExtraBorder />
          <MobileBorder />
          <div className="-z-10 grid grid-cols-1 gap-8 px-4 py-6 sm:grid-cols-2 sm:px-2 sm:py-3 md:gap-6 md:px-3">
            {BLOG_POSTS.map((post) => (
              <a
                key={post.id}
                href={post.href}
                className="group flex flex-col justify-center bg-background transition-colors hover:bg-muted/50 sm:p-2 md:p-2.5"
              >
                <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-muted ring-1 ring-border sm:rounded-3xl">
                  <img
                    src={post.image}
                    alt=""
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 flex min-w-0 items-start gap-1.5 sm:mt-4 sm:gap-2">
                  <h3 className="min-w-0 flex-1 truncate text-sm leading-snug font-semibold text-foreground sm:text-base md:text-[1.0625rem]">
                    {post.title}
                  </h3>
                  {post.featured ? (
                    <span
                      className="mt-1 size-1.5 shrink-0 rounded-full bg-sky-500 sm:mt-1.5 sm:size-2"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <time
                  dateTime={post.date}
                  className="mt-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm md:text-[0.9375rem]"
                >
                  {formatBlogDate(post.date)}
                </time>
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center border-t border-border/90 bg-background px-3 py-3 md:py-4">
          <a
            href={BLOG_ARCHIVE_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-3xl border border-border bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:gap-2 sm:px-5 sm:py-2 sm:text-sm"
          >
            All Posts
            <ArrowRight className="size-3.5 sm:size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}
