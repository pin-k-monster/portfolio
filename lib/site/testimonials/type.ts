/**
 * تایپ‌های بخش نظرات مشتریان (این فایل کد واقعی است).
 */

/** یک نظر مشتری/کارفرما. */
export interface Testimonial {
  /** کلید یکتا. */
  id: string;
  /** نام کامل. */
  name: string;
  /** سمت. */
  role: string;
  /** شرکت/سازمان. */
  company?: string;
  /** برچسب پروژه‌ای که نظر به آن مربوط است. */
  project?: string;
  /** متن نظر؛ با گیومه در UI نمایش داده می‌شود. */
  quote: string;
  /** امتیاز از ۵. */
  rating?: number;
}

/** یک آمار کوچک در کارت خلاصه. */
export interface TestimonialStat {
  /** کلید یکتا. */
  id: string;
  /** مقدار نمایشی با اعداد فارسی از قبل. */
  value: string;
  /** برچسب فارسی زیر مقدار. */
  label: string;
}

/** کل محتوای بخش نظرات مشتریان. */
export interface TestimonialsContent {
  /** برچسب بالای تیتر بخش. */
  eyebrow: string;
  /** تیتر بخش. */
  title: string;
  /** توضیح کوتاه زیر تیتر. */
  description: string;
  /** میانگین امتیاز («۴٫۹»). */
  average: string;
  /** برچسب کنار میانگین. */
  averageLabel: string;
  /** برچسب زیر ردیف ستاره‌ها. */
  ratingNote: string;
  /** آمارهای کارت خلاصه. */
  stats: TestimonialStat[];
  /** برچسب زیر آواتارهای کارت خلاصه. */
  avatarsLabel: string;
  /** نظرها؛ اولین چهار مورد در پشته‌ی کارت هم نمایش داده می‌شوند. */
  items: Testimonial[];
  /** عنوان ردیف لوگوی مشتریان. */
  clientsTitle: string;
  /** نام مشتریان/شرکت‌ها برای ردیف لوگو. */
  clients: { id: string; name: string }[];
}
