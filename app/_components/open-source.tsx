/*
 * ============================================================
 *  بخش متن‌باز / گیت‌هاب (Open Source)
 *  این فایل فعلاً فقط برنامه‌ریزی است؛ هنوز هیچ کدی ندارد.
 * ============================================================
 *
 * ۱. Purpose (هدف)
 * ‌- پیام: «کد من برای جامعه است» — دلیل اضافه‌کردن این بخش: برای یک توسعه‌دهنده، کدِ دیده‌شده
 * ‌    و ستاره‌خورده مدرکِ مستقیم‌تر از رزومه‌ی متنی است.
 * ‌- اقدام اصلی: باز کردن گیت‌هاب در تب جدید.
 *
 * ۲. VibeFarsi components (کامپوننت‌ها) — همه تأییدشده در رجیستری
 * ‌- card (ui/card): کارت هر مخزن. add: card
 * ‌- badge (ui/badge): نشان زبان اصلی. add: badge
 * ‌- صورت‌سازهای آمار داخل کارت را با متن ساده + آیکون Star/Fork بسازید (lucide)؛
 * ‌    عدد ستاره با fa() از lib/utils فارسی شود.
 * ‌- button (ui/button): CTA نمایه‌ی گیت‌هاب، variant="outline". add: button
 *
 * ۳. Layout (چیدمان)
 * ‌- از بالا: eyebrow → تیتر → توضیح → شبکه‌ی مخزن‌ها → دکمه‌ی CTA.
 * ‌- شبکه: ۱/۲/۳ ستون (grid-cols-1/2/3). هر کارت: نام (لینک بیرونی) + زبان (badge) +
 * ‌    توضیح + ردیف پایین (Star/Fork/…).
 * ‌- RTL: کارت اول سمت راست؛ لینک‌ها «بیرونی» با آیکون ExternalLink انتهای نام.
 *
 * ۴. Data (داده)
 * ‌- Data file: @/lib/site/open-source/data .  Type: OpenSourceContent (از ./type).
 * ‌- repos[] → کارت‌ها (name/description/language/url/stars/forks)؛ githubCta → دکمهٔ CTA.
 *
 * ۵. Interaction and animation (تعامل و انیمیشن)
 * ‌- کارت‌ها با reveal پلکانی. add: reveal
 * ‌- hover کارت: border-foreground/20 → /40 و translate-y-[-2px] (۲۰۰ms).
 * ‌- بدون انیمیشن سنگین؛ ستاره/فورک استاتیک.
 * ‌- reduced-motion: reveal خنثی.
 *
 * ۶. States (حالت‌ها)
 * ‌- هنوز مخزنی نداشتید؟ این بخش با داده‌ی واقعی پر شده؛ اگر خالی بود empty-state.
 * ‌- اعداد فارسی: از fa(stars) و fa(forks).
 *
 * ۷. Accessibility (دسترس‌پذیری)
 * ‌- <section aria-labelledby> + h2. لینک نام مخزن aria-label مثل «باز کردن مخزن jdate-react در گیت‌هاب».
 * ‌- همه‌ی لینک‌های بیرونی target="_blank" rel="noopener noreferrer".
 * ‌- آیکون‌ها (Star/Fork) aria-hidden؛ عدد کنارشان همان متن اصلی است.
 *
 * ۸. Implementation notes (یادداشت پیاده‌سازی)
 * ‌- داده استاتیک است؛ اگر بعداً بخواهید زنده بماند، یک fetch server-side یا revalidate در Next کافی است — این‌جا لازم نیست.
 * ‌- نام لاتین مخزن‌ها پوشش dir="ltr" ساده (در RTL نامفهوم داخل متن جدا) ببینند.
 */

// Export: تأمین export پیش‌فرض default function OpenSource() در پیاده‌سازی بعدی.