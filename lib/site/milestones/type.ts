/**
 * تایپ‌های بخش دستاوردها/آمار (این فایل کد واقعی است).
 * برای شمارش عددی از انیمیشن `counter` استفاده می‌شود؛ مقدارِ value عدد لاتین است و
 * `counter` خودش آن را با faNumber به فارسی هزارگان («۱۲٬۴۵۰») قالب می‌زند.
 */
/** یک عددِ شاخص با شمارنده‌ی count-up. */
export interface MilestoneNumber {
  /** کلید یکتا. */
  id: string;
  /** عدد پایه به صورت عدد (نه رشته)؛ برای counter. */
  value: number;
  /** واحد/پسوند بیرون از جعبه‌ی شمارنده که تکان نمی‌خورد؛ مثل "+" یا "K+". */
  unit?: string;
  /** برچسب فارسی زیر عدد. */
  label: string;
  /** توضیح کوچک اختیاری زیر برچسب. */
  hint?: string;
}

/** یک افتخار/نشان در ردیف دستاوردها. */
export interface MilestoneBadge {
  /** کلید یکتا. */
  id: string;
  /** متن فارسی افتخار. */
  text: string;
}

/** کل محتوای دستاوردها. */
export interface MilestonesContent {
  /** برچسب بالای تیتر. */
  eyebrow: string;
  /** تیتر بخش. */
  title: string;
  /** ردیف اعداد با hairline جداکننده (کپی از چیدمان بلاک `stats`). */
  numbers: MilestoneNumber[];
  /** ردیف نشان‌های افتخار زیر اعداد. */
  honors: MilestoneBadge[];
}