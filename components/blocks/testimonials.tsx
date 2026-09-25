import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Rating } from "@/components/ui/rating";

export interface Testimonial { name: string; role: string; company?: string; project?: string; quote: string; rating?: number }

/** نظر مشتریان. Masonry-ish three columns; quotes in «گیومه», Persian names on avatars. */
export function TestimonialsBlock({ title = "حرف مشتری‌ها", hideHeader, items }: { title?: string; hideHeader?: boolean; items: Testimonial[] }) {
  return (
    <section className="px-6 py-16">
      {!hideHeader && <h2 className="mb-10 text-center text-3xl font-bold">{title}</h2>}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-5 transition-colors duration-200 hover:border-foreground/20">
            {t.rating !== undefined && <Rating value={t.rating} readOnly size="sm" />}
            <blockquote className="mt-3 flex-1 text-sm leading-7 text-foreground/90">«{t.quote}»</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <Avatar name={t.name} size="sm" />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{t.name}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {t.role}
                  {t.company ? `، ${t.company}` : ""}
                </p>
              </div>
              {t.project && (
                <Badge variant="brand" className="ms-auto shrink-0 rounded-full bg-brand/10 px-2.5">
                  {t.project}
                </Badge>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
