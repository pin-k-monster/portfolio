/*
 * ============================================================
 *  بخش درباره‌ی من (About)
 *  این فایل فعلاً فقط برنامه‌ریزی است؛ هنوز هیچ کدی ندارد.
 * ============================================================
 *
 * ۱. Purpose (هدف)
 * ‌- پیام: پشت کدها یک آدم با داستان و ارزش‌هاست؛ اعتماد و ارتباط شخصی.
 * ‌- اقدام اصلی: دانلود رزومه و رفتن به بخش تماس (لینک ایمیل).
 *
 * ۲. VibeFarsi components (کامپوننت‌ها) — همه تأییدشده در رجیستری
 * ‌- avatar (ui/avatar): پرتره با size="lg". add: avatar
 * ‌- card (ui/card): کارت معرفی کنار پرتره + کارت واقعیت‌ها. add: card
 * ‌- badge (ui/badge): برچسب‌های کوچک بالای کارت (variant brand برای تاکید). add: badge
 * ‌- highlight-text (animations/highlight-text): زیرخطِ sweep روی عبارت کلیدی در bio. add: highlight-text
 * ‌- button (ui/button): دکمه‌ی رزومه، variant="outline" با آیکون Download. add: button
 * ‌- separator (ui/separator): جداکننده‌ی ظریف میان کارت‌ها. add: separator
 *
 * ۳. Layout (چیدمان)
 * ‌- موبایل (ستون): پرتره → نام/تیتر → bio → واقعیت‌ها؛ دسکتاپ (lg) دو ستون: راست پرتره (۴/۱۲)،
 * ‌    چپ محتوای متنی (۸/۱۲).
 * ‌- به‌جای عکس زنده، avatar بر پایه‌ی نام اول (name) در کنار تصویر؛ اگر تصویر نبود fallback خودش.
 * ‌- واقعیت‌ها در یک شبکه‌ی ۲×۲ badge-like با field/value.
 * ‌- دکمه‌ی رزومه و لینک ایمیل در انتهای ستون متن، flank با separator.
 *
 * ۴. Data (داده)
 * ‌- Data file: @/lib/site/about/data .  Type: AboutContent (از ./type).
 * ‌- avatar/name/headline → بالای کارت؛ bio → پاراگراف‌ها؛ focusKeyword → highlight-text؛
 * ‌- facts → شبکه‌ی واقعیت‌ها؛ resume → دکمه.
 *
 * ۵. Interaction and animation (تعامل و انیمیشن)
 * ‌- highlight-text: با ورود به viewport (threshold 0.6 خودش) از راست زیر عبارت می‌کشد. بدون delay اضافه.
 * ‌- bio/کارت‌ها با reveal (delay پلکانی ۱۰۰ms). add: reveal
 * ‌- hover کارت: border-foreground/20 → /40 با transition ۲۰۰ms.
 * ‌- دکمه‌ها hover برابر Button خود. reduced-motion: reveal و highlight بی‌حرکت شوند.
 *
 * ۶. States (حالت‌ها)
 * ‌- پرتره: اگر تصویر /images/avatar.jpg وجود نداشت، avatar با حرف اول نام نمایش بدهد (خود کامپوننت).
 * ‌- حالت light/dark: graphite تک‌تم است؛ فقط tokens.
 *
 * ۷. Accessibility (دسترس‌پذیری)
 * ‌- <section aria-labelledby> + تیتر h2.
 * ‌- تصویر پرتره alt فارسی دارد (از data). highlight-text صرفاً زینتی است؛ متن در DOM ساده بماند.
 * ‌- دکمه‌ی رزومه: <a> واقعی با download؛ focus ring از خود Button.
 *
 * ۸. Implementation notes (یادداشت پیاده‌سازی)
 * ‌- ابعاد عکس پرتره را square فرض کنید (width/height داده‌شده در data 400×400).
 * ‌- متن focusKeyword باید دقیقاً داخل bio پیاده‌سازی شود؛ تکرارش نکنید.
 * ‌- این بخش به یک تصویر placeholder نیاز دارد (public/images/avatar.jpg).
 */

// Export: تأمین export پیش‌فرض default function About() در پیاده‌سازی بعدی.