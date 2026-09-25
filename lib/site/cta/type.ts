import type { CtaLink } from "../shared";

/** کل محتوای CTA پایانی. */
export interface CtaContent {
  /** تیتر بزرگ. */
  title: string;
  /** توضیح اختیاری. */
  description?: string;
  /** اقدام اصلی: دانلود رزومه یا ایمیل. */
  action: CtaLink;
  /** یادداشت کوچک اعتماد زیر دکمه. */
  note?: string;
}