import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { fa } from "@/lib/utils";
import { formatJalali } from "@/lib/jalali";

export interface Post {
  /** Stable React key. */
  id: string;
  /** Absolute URL, or a path on this site. */
  href: string;
  title: string;
  excerpt: string;
  category: string;
  /** Publication date as a Gregorian `Date`; rendered as Jalali. */
  date: Date;
  /** Reading time in minutes; shown as «۵ دقیقه». */
  readingTime: number;
  author: { name: string; src?: string };
  /** Cover art. A generated gradient is drawn when omitted. */
  cover?: React.ReactNode;
}

/** Article grid: one card per post, with category, Jalali date and author. */
export function BlogGrid({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border px-6 py-12 text-center text-sm text-muted-foreground">
        به‌زودی
      </p>
    );
  }

  return (
    <ul className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {posts.map((p) => {
        const external = /^https?:\/\//.test(p.href);

        return (
          <li key={p.id}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
              <Link
                href={p.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-hidden
                tabIndex={-1}
                className="block aspect-16/10 overflow-hidden bg-secondary"
              >
                {p.cover ?? (
                  <div
                    aria-hidden
                    className="size-full transition-transform duration-500 group-hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(from var(--brand) l c h / 30%), oklch(from var(--foreground) l c h / 6%))",
                    }}
                  />
                )}
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="brand" className="text-xs">
                    {p.category}
                  </Badge>
                  <span aria-hidden>·</span>
                  <span>{fa(p.readingTime)} دقیقه</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold leading-7">
                  <Link
                    href={p.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="hover:underline underline-offset-4"
                  >
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{p.excerpt}</p>
                <div className="mt-auto flex items-center gap-2 pt-4 text-xs text-muted-foreground">
                  <Avatar name={p.author.name} src={p.author.src} size="sm" />
                  <span className="text-foreground">{p.author.name}</span>
                  <span aria-hidden>·</span>
                  <time dateTime={p.date.toISOString()}>{formatJalali(p.date)}</time>
                </div>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
