import { ArrowLeft, PenLine } from "lucide-react";
import Link from "next/link";
import { cn, en } from "@/lib/utils";
import { Reveal } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { writing } from "@/lib/site/writing/data";
import { BlogGrid, Post } from "@/components/blocks/blog-grid";
import { toGregorian } from "@/lib/jalali";
import { site } from "@/lib/site/config";

const COVER_GRADIENTS = [
  "from-brand/30 via-muted/70 to-secondary",
  "from-brand/25 via-secondary to-muted/80",
  "from-brand/20 via-muted/80 to-secondary/70",
  "from-brand/30 via-secondary/80 to-muted",
];

/** Generated cover for articles without an image, instead of an empty box. */
function ArticleCover({ index }: { index: number }) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative flex size-full items-center justify-center overflow-hidden bg-linear-to-br transition-transform duration-500 group-hover:scale-105",
        COVER_GRADIENTS[index % COVER_GRADIENTS.length],
      )}
    >
      <div className="absolute -inset-s-8 -top-10 size-28 rounded-full bg-brand/20 blur-2xl" />
      <div className="absolute -bottom-12 -inset-e-8 size-32 rounded-full bg-brand/10 blur-3xl" />
      <PenLine className="relative size-7 text-brand/60" />
    </div>
  );
}

function ShowAllArticlesButton() {
  const { href, target, rel } = writing.readAllCta;

  return (
    <Link href={href} target={target} rel={rel}>
      <Button variant="outline" size="lg" className="cursor-pointer">
        {writing.readAllCta.label}
        <ArrowLeft aria-hidden />
      </Button>
    </Link>
  );
}

export default function Writing() {
  // `publishedAt` is a Jalali date string; the grid formats it for display.
  const posts = writing.articles.map((article, index): Post => {
    const [jy, jm, jd] = en(article.publishedAt).split("/").map(Number);

    return {
      id: article.id,
      href: article.href,
      title: article.title,
      excerpt: article.excerpt,
      category: article.category,
      date: toGregorian(jy, jm, jd),
      readingTime: article.readingMinutes,
      author: { name: site.name },
      cover: <ArticleCover index={index} />,
    };
  });

  return (
    <section id="writing" aria-labelledby="writing-title" className="pb-16 sm:pb-24">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="mb-10 flex items-center justify-between gap-3">
            <div className="space-y-3">
              <Badge variant="brand">{writing.eyebrow}</Badge>
              <h2 id="writing-title" className="text-2xl font-bold leading-tight sm:text-3xl">
                {writing.title}
              </h2>
              <p className="text-sm leading-7 text-muted-foreground">{writing.description}</p>
            </div>

            <div className="max-xl:hidden">
              <ShowAllArticlesButton />
            </div>
          </div>
        </Reveal>

        <BlogGrid posts={posts} />

        <Reveal delay={250}>
          <div className="mt-10 flex justify-center xl:hidden">
            <ShowAllArticlesButton />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
