import type { CtaLink, ImageAsset, TechTag } from "../shared";

/** One article card. */
export interface Article {
  /** Unique id, used as the React key. */
  id: string;
  /**
   * Where the title links to. Use an absolute URL for an external blog, or a
   * path on this site (`/blog/my-post`) once you have a page for it.
   */
  href: string;
  /** Article title. */
  title: string;
  /** One- or two-line teaser. */
  excerpt: string;
  /** Category badge, e.g. "Performance". */
  category: string;
  /** Keyword tags. */
  tags: TechTag[];
  /**
   * Jalali publication date. Persian digits are optional, both `۱۴۰۴/۰۵/۲۱`
   * and `1404/05/21` are parsed.
   */
  publishedAt: string;
  /** Reading time in minutes. Rendered with Persian digits. */
  readingMinutes: number;
  /** Optional cover image. Omit it and a gradient placeholder is drawn. */
  cover?: ImageAsset;
}

/** Content of the writing section. */
export interface WritingContent {
  /** Small label above the heading. */
  eyebrow: string;
  /** Section heading. */
  title: string;
  /** Intro paragraph. */
  description: string;
  /** The articles, newest first. */
  articles: Article[];
  /** "Read everything" button, pointing at your blog index. */
  readAllCta: CtaLink;
}
