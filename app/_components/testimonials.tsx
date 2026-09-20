/*
 * ============================================================
 *  بخش نظرات (Testimonials)
 *  این فایل فعلاً فقط برنامه‌ریزی است؛ هنوز هیچ کدی ندارد.
 * ============================================================
 *
 * ۱. Purpose (هدف)
 * ‌- پیام: صدای سوم‌شخص؛ همکاران و مشتریان «اعتماد» را به‌جای شما می‌گویند.
 * ‌- اقدام اصلی: تثبیت تصمیم برای تماس.
 *
 * ۲. VibeFarsi components (کامپوننت‌ها) — همه تأییدشده در رجیستری
 * ‌- testimonials (blocks/testimonials): مستقیماً بلاک را استفاده کنید. add: testimonials
 * ‌    → (regDeps خودش avatar + rating را می‌آورد). ساختار آیتم: {name, role, quote, rating}.
 * ‌- rating داخل بلاک با readOnly و size="sm" خودش رندر می‌شود.
 * ‌- avatar داخل بلاک بر پایه‌ی نام اول (fallback حرف اول) کار می‌کند.
 *
 * ۳. Layout (چیدمان)
 * ‌- از بالا: تیتر بلاک (data.title) → شبکه‌ی ۳ ستونی (grid-cols-1 md:grid-cols-3 gap-4).
 * ‌- ۶ آیتم داده شده → ۲ ردیف مرتب در دسکتاپ؛ موبایل ستون تکی.
 * ‌- هر کارت: ستاره‌ها بالا، گیومه، نقل‌قول، و پایین avatar + name/role.
 * ‌- RTL: نقل‌قول با علائم «» فارسی؛ بلافاصله بالای متن شمارنده‌ی پایان.
 *
 * ۴. Data (داده)
 * ‌- Data file: @/lib/site/testimonials/data .  Type: TestimonialsContent (از ./type).
 * ‌- title? → تیتر بلاک؛ items[] → آیتم‌ها (name/role/quote/rating).
 *
 * ۵. Interaction and animation (تعامل و انیمیشن)
 * ‌- کارت‌ها با reveal پلکانی ورود (delay پلکانی ۸۰ms). add: reveal
 * ‌- بدون انیمیشن hover سنگین؛ شاید border بسیار ملایم.
 * ‌- به‌جای کاروسل، از ستون‌ها استفاده می‌کنیم: محتوای کم‌تراکمِ قابل اسکن. reduced-motion: reveal فقط.
 *
 * ۶. States (حالت‌ها)
 * ‌- rating خالی → ستاره نمایش داده نشود (بلاک خودش شرط دارد؟ چک کنید؛ اگر نه، rating پیش‌فرض ۵).
 * ‌- avatar تصویر ندارد → fallback حرف اول نام (خود کامپوننت).
 * ‌- موبایل: کاریکاتور بدون کاروسل؛ همان ستون تکی.
 *
 * ۷. Accessibility (دسترس‌پذیری)
 * ‌- <section aria-labelledby> + h2. هر کارت <figure> با <blockquote> و <figcaption> (بلاک رعایت می‌کند).
 * ‌- rating readOnly برای اسکرین‌ریدر با aria-label (مثلاً «امتیاز ۵ از ۵»).
 * ‌- کنتراست متن quote روی کارت foreground/muted خوب باشد.
 *
 * ۸. Implementation notes (یادداشت پیاده‌سازی)
 * ‌- بلاک testimonials را گرفتید، فقط با data وصلش کنید؛ نیازی به بازنویسی نیست.
 * ‌- ۶ آیتم داده‌شده مضرب ۳ هستند؛ اگر کم‌تر کردید، ستون‌ها خودکار یاد می‌گیرند.
 */

// Export: تأمین export پیش‌فرض default function Testimonials() در پیاده‌سازی بعدی.