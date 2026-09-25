import type { TechTag } from "../shared";

/** بازه‌ی زمانی یک سمت. */
export interface ExperiencePeriod {
  /** تاریخ شروع واقعی (برای تبدیل با formatJalali در data). */
  start: Date;
  /** تاریخ پایان؛ null یعنی سمت فعلی و «اکنون». */
  end: Date | null;
  /** برچسب آماده‌ی نمایش، عدد فارسی و شمسی: مثل «از ۱۴۰۲ تاکنون». با formatJalali در همین data ساخته شده. */
  label: string;
}

/** یک سمت شغلی. */
export interface ExperienceItem {
  /** کلید یکتا. */
  id: string;
  /** عنوان شغلی. */
  role: string;
  /** نام شرکت/سازمان. */
  company: string;
  /** لینک شرکت (اختیاری). */
  companyUrl?: string;
  /** محل کار (اختیاری). */
  location?: string;
  /** بازه‌ی زمانی. */
  period: ExperiencePeriod;
  /** شرح یک‌خطی سمت. */
  summary: string;
  /** دستاوردهای کلیدی؛ هر آیتم یک پیمانه که در کارت نمایش داده می‌شود. */
  points: string[];
  /** فناوری‌های به‌کاررفته (نشان‌ها زیر توضیح). */
  stack: TechTag[];
}

/** کل محتوای تجربه. */
export interface ExperienceContent {
  /** برچسب بالای تیتر. */
  eyebrow: string;
  /** تیتر بخش. */
  title: string;
  /** سمت‌ها از جدید به قدیمی. */
  items: ExperienceItem[];
}