/**
 * تایپ‌های بخش نظرات (این فایل کد واقعی است).
 * ساختار آیتم دقیقا مانند بلاک `testimonials` رجیستری است: {name, role, quote, rating}.
 */
export interface TestimonialItem {
  /** کلید یکتا. */
  id: string;
  /** نام گوینده. */
  name: string;
  /** نقش/سمت گوینده. */
  role: string;
  /** نقل‌قول فارسی؛ داخل blockquote. */
  quote: string;
  /** امتیاز ۱ تا ۵ (اختیاری). برای Rating با variant readOnly استفاده می‌شود. */
  rating?: number;
}

/** کل محتوای نظرات. */
export interface TestimonialsContent {
  /** تیتر بخش (بلاک پیش‌فرض خودش «نظر همکاران» دارد؛ اگر بخواهید عوض کنید). */
  title?: string;
  /** آیتم‌ها؛ بهتر است مضرب ۳ باشند تا شبکه‌ی ستونی مرتب بماند. */
  items: TestimonialItem[];
}