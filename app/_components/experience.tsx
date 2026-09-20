/*
 * ============================================================
 *  بخش تجربه (Experience)
 *  این فایل فعلاً فقط برنامه‌ریزی است؛ هنوز هیچ کدی ندارد.
 * ============================================================
 *
 * ۱. Purpose (هدف)
 * ‌- پیام: سوابق حرفه‌ای معتبر و نتیجه‌گرا؛ نشان می‌دهد «چه کرده‌ام» نه «کجا بوده‌ام».
 * ‌- اقدام اصلی: اعتماد برای تماس/رزومه.
 *
 * ۲. VibeFarsi components (کامپوننت‌ها) — همه تأییدشده در رجیستری
 * ‌- timeline (ui/timeline): ریل راست‌چین با نقطه و تاریخ شمسی. آیتم‌ها {date|string, title, description}.
 * ‌    add: timeline → (با regDep خودش lib/jalali را می‌آورد)
 * ‌- badge (ui/badge): نشان فناوری‌ها زیر هر سمت. add: badge
 * ‌- button (ui/button) یا anchor ساده برای لینک شرکت. add: button
 *
 * ۳. Layout (چیدمان)
 * ‌- ساختار: eyebrow → تیتر → لیست عمودی timeline؛ هر آیتم شامل:
 * ‌    عنوان (= role + شرکت؛ که روی ریل title است)، تاریخِ شمسی آماده (date = period.label)،
 * ‌    و description که شامل summary + نکات پیروزی‌ها (bullets) + نشان‌های tech است.
 * ‌- ریل timeline با activeIndex=0 (جدیدترین سمت) برجسته شود.
 * ‌- حداکثر عرض ستون ~768px؛ انعطاف‌پذیر موبایل.
 *
 * ۴. Data (داده)
 * ‌- Data file: @/lib/site/experience/data .  Type: ExperienceContent (از ./type).
 * ‌- items[] → Timeline.items؛ period.label → date؛ نقش title = `${role} — ${company}`؛
 * ‌- summary/points → description؛ stack → نشان‌ها؛ companyUrl → لینک شرکت.
 *
 * ۵. Interaction and animation (تعامل و انیمیشن)
 * ‌- هر آیتم با reveal پلکانی (delay = index*120ms) ظاهر شود. add: reveal
 * ‌- hover روی item: پس‌زمینه‌ی کارت بسیار ملایم (bg-card/40).
 * ‌- بدون انیمیشن تعداد دیگر؛ تاریخ استاتیک است. reduced-motion: فقط reveal غیرفعال.
 *
 * ۶. States (حالت‌ها)
 * ‌- سمت فعلی (end: null در data) با نشان/border «فعال» مشخص شود (مثل activeIndex در خود timeline +
 * ‌    برچسب brand «هم‌اکنون»).
 * ‌- لینک شرکت شکسته → فقط متن نمایش داده شود.
 *
 * ۷. Accessibility (دسترس‌پذیری)
 * ‌- <section aria-labelledby> + h2. فهرست آیتم‌ها را سلسله‌مراتبی (ol یا ul ساده) ببینید.
 * ‌- داده‌ها توسط Timeline پایه رندر می‌شوند؛ header برای نقطه‌ها aria-hidden.
 * ‌- لینک شرکت target="_blank" + rel="noopener noreferrer".
 *
 * ۸. Implementation notes (یادداشت پیاده‌سازی)
 * ‌- period.label از قبل شمسی/فارسی است و از داده می‌آید؛ فرمت نزنید. تاریخ‌های Date فقط برای آینده/ترتیب‌بندی هستند.
 * ‌- نکات پیروزی‌ها را با ۳–‌‌۴ بولت و بدون زیاده‌گویی در description بگذارید.
 * ‌- هماهنگی با بخش projects: مهارت‌های مشترک ممکن است تکرار شوند؛ نگران نباشید.
 */

// Export: تأمین export پیش‌فرض default function Experience() در پیاده‌سازی بعدی.