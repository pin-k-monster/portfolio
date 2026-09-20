/**
 * تایپ‌های بخش هیرو (این فایل کد واقعی است).
 * از بلاک آماده‌ی `hero` استفاده می‌کنیم؛ عنوان آن از نوع ReactNode است، بنابراین
 * تزئین نام با gradient-text و گردش نقش‌ها با word-rotate داخل همان title ممکن است.
 */
import type { CtaLink } from "../shared";

/** یک خط پایانه‌ی ترمینال؛ دقیقا مطابق تایپ TerminalLine کامپوننت `terminal` رجیستری. */
export type HeroTerminalLine = {
  /** "cmd" = خط فرمان (چپ‌چین)، "out" = خروجی ساده، "ok" = موفقیت سبز، "err" = خطای قرمز. */
  type: "cmd" | "out" | "ok" | "err";
  /** متن خط؛ فرمان‌ها لاتین، خروجی‌ها فارسی. */
  text: string;
};

/** کل محتوای هیرو. */
export interface HeroContent {
  /** برچسب بالای تیتر (Badge با variant brand). */
  badge: string;
  /** نام برای قسمت گرادیانی تیتر (gradient-text). */
  name: string;
  /** متن پیش از گردش نقش‌ها، مثل «توسعه‌دهنده‌ی» — واژه‌ی پایه در تیتر. */
  titlePrefix: string;
  /** نقش‌های متغیری که word-rotate بینشان می‌چرخد. */
  rotatingRoles: string[];
  /** توضیح زیر تیتر (یک پاراگراف فارسی). */
  description: string;
  /** دکمه‌ی اول: مسیر اصلی اقدام (مثلاً تماس). */
  primary: CtaLink;
  /** دکمه‌ی دوم: اقدام ثانویه (رزومه). */
  secondary: CtaLink;
  /** عنوان پنجره‌ی ترمینال تزئینی زیر دکمه‌ها. */
  terminalTitle: string;
  /** خطوط ترمینال؛ پیش‌فرمت‌شده و آماده‌ی نمایش. */
  terminalLines: HeroTerminalLine[];
}