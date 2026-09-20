/*
 * ============================================================
 *  بخش CTA پایانی (Final Call to Action)
 *  این فایل فعلاً فقط برنامه‌ریزی است؛ هنوز هیچ کدی ندارد.
 * ============================================================
 *
 * ۱. Purpose (هدف)
 * ‌- پیام: جمع‌بندی با یک اقدام شفاف قبل از فوتر: «رزومه‌ام را بگیر یا باهم صحبت کنیم».
 * ‌- اقدام اصلی: دانلود رزومه (download PDF) — یک اقدام، نه دو.
 *
 * ۲. VibeFarsi components (کامپوننت‌ها) — همه تأییدشده در رجیستری
 * ‌- cta (blocks/cta): بنر گرم با glow برند؛ props {title, description?, action, note}. add: cta
 * ‌    → (regDep خودش button را می‌آورد)
 * ‌- shine-button (animations/shine-button): برای «یک اقدام اصلی صفحه»؛ گذر glint روی دکمه.
 * ‌    از آن به جای Button داخل بلاک در action استفاده کنید. add: shine-button
 *
 * ۳. Layout (چیدمان)
 * ‌- کل بلاک یک کارت بزرگ rounded-3xl با radial glow برند در پس‌زمینه (خود بلاک دارد).
 * ‌- متمرکز: تیتر بزرگ → توضیح → دکمه (شاین) → note کوچک زیر دکمه.
 * ‌- حداکثر عرض ~ max-w-4xl؛ محتوا center text.
 * ‌- RTL: متن فارسی، دکمه زیر متن (بدون آیکون جهت‌دار سنگین).
 *
 * ۴. Data (داده)
 * ‌- Data file: @/lib/site/cta/data .  Type: CtaContent (از ./type).
 * ‌- title/description → بلاک؛ action → دکمه (label+href از config.resume)؛ note → متن زیر دکمه.
 *
 * ۵. Interaction and animation (تعامل و انیمیشن)
 * ‌- بلاک با reveal ظاهر شود. add: reveal
 * ‌- shine-button: sweep ابدی پشت برچسب (پیش‌فرض 2.2s).
 * ‌- hover دکمه از خود shine-button. reduced-motion: shine متوقف و فقط hover عادی.
 *
 * ۶. States (حالت‌ها)
 * ‌- دانلود فایل نیست؟ اگر /resume.pdf غایب بود، href را به "#contact" برگردانید و در یادداشت بنویسید.
 * ‌- حالت loading ندارد؛ استاتیک است.
 *
 * ۷. Accessibility (دسترس‌پذیری)
 * ‌- <section aria-labelledby> + h2.
 * ‌- دکمه <a> واقعی است با download؛ aria-label شامل «دانلود فایل رزومهٔ PDF».
 * ‌- glow برند نباید متن را بی‌خوانا کند؛ تست کنتراست.
 *
 * ۸. Implementation notes (یادداشت پیاده‌سازی)
 * ‌- shine-button روی یک اقدام است. بلاک cta داخلیش Button دارد؛ برای شاین یا از prop/custom action استفاده کنید یا Button بلاک را با ShineButton جایگزین کنید (معمولاً کافی است دکمه در بلاک ساده بماند و halo برند کار کند — انتخاب با شما اما «یک اقدام اصلی» را درست کنید).
 * ‌- هماهنگ با نوبار: هر دو از config.resume استفاده می‌کنند؛ تکراری نشود.
 */

// Export: تأمین export پیش‌فرض default function Cta() در پیاده‌سازی بعدی.