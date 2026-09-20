/*
 * ============================================================
 *  بخش فوتر (Footer)
 *  این فایل فعلاً فقط برنامه‌ریزی است؛ هنوز هیچ کدی ندارد.
 * ============================================================
 *
 * ۱. Purpose (هدف)
 * ‌- پیام: جمع‌بندی برند و راه‌های ادامه؛ پایان مرزبندی‌شده و تمیز.
 * ‌- اقدام اصلی: لینک‌ها و شبکه‌های اجتماعی.
 *
 * ۲. VibeFarsi components (کامپوننت‌ها) — همه تأییدشده در رجیستری
 * ‌- separator (ui/separator): خط افقی بالای کپی‌رایت. add: separator
 * ‌- button (ui/button): دکمه‌های آیکونی شبکه‌های اجتماعی، variant="ghost" size="icon". add: button
 * ‌- لوگو و متن‌ها ساده؛ آیکون‌های لوسید از data.socials.
 * ‌- مرجع چیدمان: قالب `startup-landing` رجیستری برای ستون‌های فوتر.
 *
 * ۳. Layout (چیدمان)
 * ‌- دسکتاپ: ۴ ناحیه — (۱) برند + about؛ (۲) ستون پیمایش (nav)؛ (۳) ستون(های) link ها (columns)؛
 * ‌    (۴) تماس (ایمیل) + socialها.
 * ‌- موبایل: ستون‌ها زیر هم با فاصله؛ در پایان `separator` و ردیف کپی‌رایت (right در RTL).
 * ‌- RTL: ناحیه‌ی برند راست‌ترین؛ لینک‌های nav همان ترتیب navbar.
 *
 * ۴. Data (داده)
 * ‌- Data file: @/lib/site/footer/data .  Type: FooterContent (از ./type).
 * ‌- brand/about → ناحیه‌ی اول؛ navTitle/nav → ستون پیمایش؛ columns → ستون‌های لینک؛
 * ‌- contactTitle/email → ناحیه‌ی تماس؛ socialsTitle/…social ها از navbar/config (در data footer ست); copyright/credit → خط پایان.
 *
 * ۵. Interaction and animation (تعامل و انیمیشن)
 * ‌- بدون انیمیشن ورود برای فوتر (محتوای نهایی)؛ فقط hover لینک (foreground/60 → foreground، 150ms).
 * ‌- دکمه‌های آیکونی social: hover صفحه‌ی brand‌دار ظریف؛ focus ring از Button.
 * ‌- reduced-motion: بدون حرکت خاص — ok.
 *
 * ۶. States (حالت‌ها)
 * ‌- ایمیل شکسته نباشد؛ لینک mailto با aria-label.
 * ‌- اگر فوتر طولانی شد (بیش از یک صفحه) محتوای آن را کم‌حجم نگه دارید.
 *
 * ۷. Accessibility (دسترس‌پذیری)
 * ‌- <footer role="contentinfo"> + <nav aria-label="پیمایش فوتر"> برای ستون پیمایش.
 * ‌- آیکون‌های social aria-hidden + دکمه با aria-label فارسی («گیت‌هاب آرین رضایی»).
 * ‌- همه‌ی لینک‌های بیرونی target="_blank" rel="noopener noreferrer".
 * ‌- کپی‌رایت سال شمسی در داده است؛ عدد فارسی.
 *
 * ۸. Implementation notes (یادداشت پیاده‌سازی)
 * ‌- آیکون/لینک‌های social در data payload از config می‌آید؛ فقط render کنید.
 * ‌- هیچ‌کدام از بخش‌های دیگر برای فوتر وابستگی state ندارد؛ بخش نهایی را به‌سادگی ببندد.
 * ‌- credit را «ساخته‌شده با VibeFarsi و Next.js» نگه دارید (لینک vibefarsi.ir در aria/متن قابل ذکر است).
 */

// Export: تأمین export پیش‌فرض default function Footer() در پیاده‌سازی بعدی.