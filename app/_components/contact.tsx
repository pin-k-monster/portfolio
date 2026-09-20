/*
 * ============================================================
 *  بخش تماس (Contact)
 *  این فایل فعلاً فقط برنامه‌ریزی است؛ هنوز هیچ کدی ندارد.
 * ============================================================
 *
 * ۱. Purpose (هدف)
 * ‌- پیام: پایانی‌ترین و مهم‌ترین بخش — «در تماس باشیم».
 * ‌- اقدام اصلی: پر کردن فرم و ارسال پیام (یا ایمیل مستقیم/شبکه‌های اجتماعی).
 *
 * ۲. VibeFarsi components (کامپوننت‌ها) — همه تأییدشده در رجیستری
 * ‌- form (ui/form): هوک‌های useForm + FormField + FormErrors؛ نه provider/کلاس واسه. add: form
 * ‌    → (regDep خودش lib/persian را برای اعتبارسنجی موبایل می‌آورد؛ نگه‌دارید)
 * ‌- input (ui/input): فیلد نام/ایمیل (با startAddon/error/Field). add: input
 * ‌- phone-input (ui/phone-input): فیلد موبایل (اختیاری)؛ خروجی ارقام لاتین + isvalid. add: phone-input
 * ‌- textarea (ui/textarea): پیام با showCount و maxLength=1000 و autoResize. add: textarea
 * ‌- button (ui/button): ارسال، variant="brand" size="lg". add: button
 * ‌- toast (ui/toast): اعلان موفقیت/خطا (ToastProvider + useToast). add: toast
 * ‌- alert (ui/alert): اعلان درون‌صفحه‌ای اگر ارسال واقعی جا نیفتد. add: alert
 * ‌- success-check (animations/success-check): تیک موفقیت انیمیشنی داخل پیام تأیید. add: success-check
 * ‌- lucide برای آیکون‌های شبکه‌های اجتماعی (از data!) و Send.
 *
 * ۳. Layout (چیدمان)
 * ‌- دسکتاپ (lg): دو ستون — راست: توضیح + ایمیل مستقیم + socialها (۴/۱۲)؛ چپ: کارت فرم (۸/۱۲).
 * ‌- موبایل: ستونی، تیتر اول، سپس فرم.
 * ‌- داخل فرم: FormField های نام و ایمیل کنار هم (grid-2 روی sm) سپس phone-input و textarea (تمام عرض)، دکمه‌ی ارسال.
 * ‌- errorهای هر فیلد زیر همان فیلد (FormField خودش می‌سازد با aria-describedby)؛ FormErrors خلاصه‌ای بالای فرم.
 * ‌- RTL: برچسب راست فیلد، دکمه‌ی ارسال راست‌ترین عنصرِ عمل.
 *
 * ۴. Data (داده)
 * ‌- Data file: @/lib/site/contact/data .  Type: ContactContent (از ./type).
 * ‌- form.fields → ساخت schema؛ name فیلدها برای state فرم؛ label/placeholder/hint → FormField؛
 * ‌- submitLabel/pendingLabel → دکمه؛ success/error → toast؛ socials → آیکون‌های سمت راست؛ email → mailto.
 * ‌- Rules پیشنهادی برای useForm: نام=required، ایمیل=[required، email]، پیام=required+minLength(10) —
 * ‌    با پیام‌های فارسی در همان schema (rules رجیستری هم Persian validator های آماده دارد).
 *
 * ۵. Interaction and animation (تعامل و انیمیشن)
 * ‌- submit: setSubmitting → (شبیه‌سازی ارسال با تایمر ۱٬۲۰۰ms؛ چون endpoint واقعی نیست) → toast موفقیت + success-check
 * ‌    و reset فرم؛ در خطا → toast/alert خطا.
 * ‌- اعتبارسنجی لحظه‌ای: بعد از touch (نه در تایپ اول). ارقام فارسی در phone-input پذیرفته می‌شود.
 * ‌- دکمه هنگام در حال ارسال disabled و برچسب pendingLabel.
 * ‌- reduced-motion: success-check باید نتیجه را ساکن نشان دهد.
 *
 * ۶. States (حالت‌ها)
 * ‌- idle → در حال ارسال (button pending) → success (toast + پاک‌شدن فرم) | error (رنگ error).
 * ‌- field invalid: error زیر فیلد با ring --destructive و aria-invalid.
 * ‌- ازآن‌جاکه ارسال واقعی به سرور نداریم: در کد یک TODO بگذارید و با alert توضیحی «فرم اتصال به سرویس ارسال ندارد؛ از ایمیل استفاده کنید»
 * ‌    به‌عنوان جایگزین قانع‌کننده.
 *
 * ۷. Accessibility (دسترس‌پذیری)
 * ‌- <section aria-labelledby> + h2. فرم <form> با onSubmit؛ هر فیلد label واقعی (FormField).
 * ‌- toast: aria-live polite (خود کامپوننت). اخطارهای فرم با FormErrors فهرست لینک به فیلد.
 * ‌- موبایل: input و textarea حداقل 16px font (رجیستری در iOS این را تضمین می‌کند — undo نکنید).
 * ‌- autoComplete: name، email، tel روی فیلدها.
 *
 * ۸. Implementation notes (یادداشت پیاده‌سازی)
 * ‌- این بخش Client است (useForm/toast/…). ToastProvider را بالاتر از کل صفحه در layout بگذارید تا خارج از فرم هم کار کند.
 * ‌- endpoint واقعی نداریم؛ ارسال را شبیه‌سازی کنید و یک TODO برای اتصال به API (مثلاً Route handler یا Formspree) بگذارید.
 * ‌- نکته‌ی پیاده‌سازی: فرم useForm را با فیلدهای .name مقداردهی کنید — schema از روی required/type/maxLength هر فیلد ساخته می‌شود.
 */

// Export: تأمین export پیش‌فرض default function Contact() در پیاده‌سازی بعدی.