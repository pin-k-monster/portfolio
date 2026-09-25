import { type CtaLink, type ImageAsset, type TechTag } from "../shared";

/** یک مقاله. */
export interface Article {
  /** کلید یکتا. */
  id: string;
  /** آدرس مقاله؛ می‌تواند مسیر واقعی یا "#" برای حالت پیش‌نمایش باشد. */
  slug: string;
  /** عنوان فارسی. */
  title: string;
  /** مقدمه/خلاصه. */
  excerpt: string;
  /** دسته‌ی مقاله. */
  category: string;
  /** برچسب‌ها. */
  tags: TechTag[];
  /** تاریخ شمسی، از قبل قالب‌بندی‌شده و آماده‌ی نمایش (اعداد فارسی): مثل «۱۴۰۴/۰۵/۲۱». */
  publishedAt: string;
  /** زمان مطالعه به دقیقه (عدد لاتین؛ نمایش با fa به فارسی می‌شود). */
  readingMinutes: number;
  /** پوشش اختیاری. */
  cover?: ImageAsset;
}

/** کل محتوای مقالات. */
export interface WritingContent {
  /** برچسب بالای تیتر. */
  eyebrow: string;
  /** تیتر بخش. */
  title: string;
  /** توضیح کوتاه. */
  description: string;
  /** مقالات (ترجیحاً ۳). */
  articles: Article[];
  /** دکمه‌ی دیدن همه‌ی مقالات. */
  readAllCta: CtaLink;
}