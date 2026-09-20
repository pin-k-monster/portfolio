/**
 * تایپ‌های بخش CTA پایانی (این فایل کد واقعی است).
 * ساختار دقیقاً مشابه بلاک `cta` رجیستری {title, description?, action, note} است.
 */
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