import type { CtaLink } from "../shared";

/** یک مخزن سنجاق‌شده. */
export interface Repo {
  /** کلید یکتا. */
  id: string;
  /** نام مخزن (لاتین). */
  name: string;
  /** توضیح فارسی/کوتاه مخزن. */
  description: string;
  /** زبان اصلی (یعنی برچسب زیر نام). */
  language: string;
  /** تعداد ستاره؛ عدد لاتین در data، نمایش با fa انجام می‌شود. */
  stars: number;
  /** تعداد فورک؛ مثل ستاره. */
  forks: number;
  /** آدرس مخزن در گیت‌هاب. */
  url: string;
}

/** کل محتوای متن‌باز. */
export interface OpenSourceContent {
  /** برچسب بالای تیتر. */
  eyebrow: string;
  /** تیتر بخش. */
  title: string;
  /** توضیح کوتاه زیر تیتر. */
  description: string;
  /** مخزن‌های سنجاق‌شده. */
  repos: Repo[];
  /** دکمه‌ی پایانی بخش: نمایه‌ی کامل گیت‌هاب. */
  githubCta: CtaLink;
}