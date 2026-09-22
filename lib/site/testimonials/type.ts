/**
 * تایپ‌های بخش نظرات مشتریان (این فایل کد واقعی است).
 */
/** یک نظر. */
export interface Testimonial {
  /** کلید یکتا. */
  id: string;
  /** متن نظر فارسی. */
  quote: string;
  /** نام کامل. */
  author: string;
  /** نقش/سمت. */
  role: string;
  /** نام سازمان (اختیاری). */
  company?: string;
}

/** یک متریک نمایشی با ProgressRing. */
export interface TestimonialMetric {
  /** کلید یکتا. */
  id: string;
  /** برچسب فارسی زیر عدد. */
  label: string;
  /** مقدار ۰ تا ۱۰۰. */
  value: number;
}

/** کل محتوای بخش نظرات. */
export interface TestimonialsContent {
  /** برچسب بالای تیتر. */
  eyebrow: string;
  /** تیتر بخش. */
  title: string;
  /** توضیح کوتاه. */
  description: string;
  /** کارت‌های نظر (CardStack). */
  testimonials: Testimonial[];
  /** متریک‌های رضایت (ProgressRing). */
  metrics: TestimonialMetric[];
}