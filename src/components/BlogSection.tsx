import { BLOG_ARCHIVE_HREF, BLOG_POSTS } from "@/content/site"
import { formatBlogDate } from "@/lib/format-dates"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

const overlayGridClass =
  "pointer-events-none absolute inset-0 z-10 hidden grid gap-2.5 sm:grid"

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
      className={overlayGridClass}
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

export function BlogSection() {
  const count = BLOG_POSTS.length

  return (
    <section id="blog" className="scroll-mt-8">
      <h2 className="px-8 font-serif text-3xl font-normal tracking-tight text-foreground">
        Blog
        <span className="ml-1 align-super text-base text-muted-foreground">
          ({count})
        </span>
      </h2>

      <div className="mt-4 border border-x-0 border-border/90">
        <div className="relative">
          <BlogColumnLines />
          <BlogRowLines />
          <ExtraBorder />

          <div className="-z-10 grid grid-cols-1 gap-5 py-3 sm:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <a
                key={post.id}
                href={post.href}
                className="group flex flex-col bg-background transition-colors hover:bg-muted/30 sm:p-2"
              >
                <div className="relative aspect-16/10 overflow-hidden rounded-3xl bg-muted ring-1 ring-border">
                  <img
                    src={post.image}
                    alt=""
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 flex min-w-0 items-start gap-2">
                  <h3 className="min-w-0 flex-1 leading-snug font-semibold text-foreground">
                    {post.title}
                  </h3>
                  {post.featured ? (
                    <span
                      className="mt-1.5 size-2 shrink-0 rounded-full bg-sky-500"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <time
                  dateTime={post.date}
                  className="mt-2 text-sm text-muted-foreground"
                >
                  {formatBlogDate(post.date)}
                </time>
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center border-t border-border/90 bg-background px-4 py-4">
          <a
            href={BLOG_ARCHIVE_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-3xl border border-border bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            All Posts
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}
