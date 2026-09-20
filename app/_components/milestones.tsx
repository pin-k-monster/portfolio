/*
 * ============================================================
 *  بخش دستاوردها (Milestones / Stats)
 *  این فایل فعلاً فقط برنامه‌ریزی است؛ هنوز هیچ کدی ندارد.
 * ============================================================
 *
 * ۱. Purpose (هدف)
 * ‌- پیام: اعداد ملموس که اعتماد می‌سازند؛ «۹ سال، ۱۲۰+ پروژه…».
 * ‌- اقدام اصلی: تقویت انگیزه‌ی ادامه و تماس.
 *
 * ۲. VibeFarsi components (کامپوننت‌ها) — همه تأییدشده در رجیستری
 * ‌- counter (animations/counter): عدد با count-up هنگام ورود؛ خروجی اعداد فارسی (پیش‌فرض faNumber)
 * ‌    با هزارگراف «٬». props: to, unit (بیرون جعبه تا تکان نخورد), duration. add: counter
 * ‌- stats (blocks/stats) به‌عنوان مرجع چیدمان فقط: نوار چهار عددی با hairline divider (gap-px از bg-border)
 * ‌    و dl/dt/dd. از فایل بلاک برای ساختار استفاده کنید اما value را با <Counter> جایگزین کنید. add: stats
 * ‌- badge (ui/badge): ردیف افتخارات. add: badge
 *
 * ۳. Layout (چیدمان)
 * ‌- از بالا: eyebrow → تیتر → نوار اعداد (grid-cols-2 / md:grid-cols-4 با خط جداکننده) → ردیف افتخارات.
 * ‌- هر سلول: Counter بزرگ (text-3xl font-bold tabular-nums) + unit کنارش + label فارسی + hint کوچک.
 * ‌- افتخارات: wrap از badge با variant="outline" در یک ردیف مرکز.
 * ‌- RTL: سلول اول سمت راست؛ جداکننده‌ها directional نیستند (فقط ۱px line).
 *
 * ۴. Data (داده)
 * ‌- Data file: @/lib/site/milestones/data .  Type: MilestonesContent (از ./type).
 * ‌- numbers[].value → Counter.to؛ unit → Counter.unit؛ label/hint → متن؛ honors → نشان‌ها.
 *
 * ۵. Interaction and animation (تعامل و انیمیشن)
 * ‌- counter: با ورود به viewport (IO خودش) بشمرد؛ duration پیش‌فرض را خرج کنید.
 * ‌- کل نوار با reveal ظاهر شود. add: reveal
 * ‌- hover سلول: مقداری هایلایت ظریف (bg-card/60).
 * ‌- reduced-motion: counter باید بلافاصله مقدار نهایی را نشان دهد.
 *
 * ۶. States (حالت‌ها)
 * ‌- اگر عدد ۰ بود (بعداً حذف شد) سلول نمایش داده نشود.
 * ‌- performance: counter تعداد کمی دارد (۴)؛ قابل قبول.
 *
 * ۷. Accessibility (دسترس‌پذیری)
 * ‌- <section aria-labelledby> + h2. نوار را با <dl> و هر عدد <dd>/<dt> بسازید (منطق بلاک stats).
 * ‌- aria-live برای counter لازم نیست (وقتی IO شمردن شروع شود فقط یک‌بار نتیجه مهم است؛ می‌توانید روی جعبه aria-live=off بگذارید تا تیک تیک نخواند).
 *
 * ۸. Implementation notes (یادداشت پیاده‌سازی)
 * ‌- از بلاک `stats` فقط ساختار بگیرید؛ چون value آن رشته‌ای/استاتیک است و ما count-up می‌خواهیم،
 * ‌    کد بلاک را به‌عنوان پایه کپی و سلول‌ها را با Counter جایگزین کنید.
 * ‌- unit مثل "+" و "K+" بیرون جعبه‌ی شمارنده می‌ماند؛ فارسی‌سازی آن‌ها لازم نیست.
 */

// Export: تأمین export پیش‌فرض default function Milestones() در پیاده‌سازی بعدی.