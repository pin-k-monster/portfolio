/*
 * ============================================================
 *  بخش پروژه‌ها (Projects)
 *  این فایل فعلاً فقط برنامه‌ریزی است؛ هنوز هیچ کدی ندارد.
 * ============================================================
 *
 * ۱. Purpose (هدف)
 * ‌- پیام: کیفیت کار؛ پروژه‌های واقعی با نقش، فناوری و نتیجه.
 * ‌- اقدام اصلی: باز کردن جزئیات پروژه در dialog و سپس رفتن به تماس/گیت‌هاب.
 *
 * ۲. VibeFarsi components (کامپوننت‌ها) — همه تأییدشده در رجیستری
 * ‌- tabs (ui/tabs): فیلتر دسته‌بندی؛ variant="underline"، TabsList با aria-label، هر TabsTrigger یک دسته.
 * ‌    add: tabs
 * ‌- card (ui/card): کارت هر پروژه (تصویر، تیتر، خلاصه، نشان‌ها، لینک‌ها). add: card
 * ‌- badge (ui/badge): نشان‌های فناوری. add: badge
 * ‌- dialog (ui/dialog): جزئیات کامل پروژه (longDescription، stack، لینک، نقش). add: dialog
 * ‌- spotlight-card (animations/spotlight-card): فقط کارت ویژه (featured) برای هاله‌ی پیرو اشاره‌گر. add: spotlight-card
 * ‌- skeleton (ui/skeleton): placeholder تصویر هنگام load. add: skeleton
 * ‌- empty-state (ui/empty-state): وقتی دسته‌ای پروژه ندارد (پایین‌ترین حالت محتمل اما لازم). add: empty-state
 *
 * ۳. Layout (چیدمان)
 * ‌- از بالا: eyebrow → تیتر → TabsList (فیلتر) → شبکه‌ی کارت‌ها.
 * ‌- شبکه: ۱ ستون موبایل، ۲ ستون md، ۳ ستون xl (grid-cols-1/2/3 gap-6).
 * ‌- هر کارت: تصویر (aspect-video، rounded-t) → بدنه: تیتر + نقش + خلاصه + نشان‌ها + دکمه‌ی «جزئیات».
 * ‌- کارت ویژه (featured) اول و در spotlight-card باشد.
 * ‌- وقتی فیلتر عوض شد فقط زیرمجموعه‌ی همان دسته نمایش داده شود.
 * ‌- RTL: TabsList اولی سمت راست؛ «همه» راست‌ترین تب.
 *
 * ۴. Data (داده)
 * ‌- Data file: @/lib/site/projects/data .  Type: ProjectsContent (از ./type) + Project.
 * ‌- categories → تب‌ها؛ projects → کارت‌ها؛ categoryId روی هر پروژه برای فیلتر؛
 * ‌- featured → spotlight؛ longDescription/role/links → dialog؛ tech → نشان‌ها.
 *
 * ۵. Interaction and animation (تعامل و انیمیشن)
 * ‌- فیلتر: tabs با onValueChange؛ محتوای تب خاموش/روشن. بدون انیمیشن سنگین.
 * ‌- کارت‌ها با reveal پلکانی برای دسته‌ی فعال (key تغییر → re-mount برای تکرار reveal). add: reveal
 * ‌- hover کارت: تصویر کمی zoom (scale-105، 300ms) و border روشن‌تر.
 * ‌- spotlight-card: فقط featured؛ هاله‌ی پیرو موش بدون ترانسپارانسی زیاد.
 * ‌- dialog: فوکوس/اسکرول‌لاک/بستن Escape خودش. reduced-motion: reveal/zoom خنثی.
 *
 * ۶. States (حالت‌ها)
 * ‌- تصویر در حال load: skeleton (aspect-video) زیر تصویر.
 * ‌- تصویر خطا: جایگزین با پترن خنثی (پس‌زمینه‌ی card + آیکون Image).
 * ‌- دسته بدون پروژه: empty-state با پیام فارسی و دکمه‌ی «مشاهده‌ی همه».
 * ‌- فیلتر فعالی انتخاب نشده باشد: fallback به defaultCategory.
 *
 * ۷. Accessibility (دسترس‌پذیری)
 * ‌- <section aria-labelledby> + h2. TabsList/TabsTrigger/TabsContent نقش خام tab دارند (رجیستری رعایت می‌کند).
 * ‌- دکمه‌ی «جزئیات» در هر کارت aria-controls به dialog؛ dialog aria-modal.
 * ‌- تصاویر alt فارسی از data. لینک‌های خارجی target/_blank + rel.
 * ‌- ترتیب focus: تب‌ها، سپس کارت‌ها (RTL راست→چپ).
 *
 * ۸. Implementation notes (یادداشت پیاده‌سازی)
 * ‌- تصاویر placeholder در /public/images/projects باید اضافه شوند؛ در next/image از
 * ‌    fill + sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" و loading lazy (جز featured که eager) استفاده کنید
 * ‌    — در Next 16 صفت priority حذف و به preload تبدیل شده؛ برای کارت ویژه preload={true} نگذارید مگر LCP باشد.
 * ‌- tabs خام «مبتنی بر segment» نیست؛ فقط client؛ پس بخش پروژه‌ها باید "use client" باشد (یا زیرمجموعه‌ی client).
 * ‌- نگه‌داشتن state انتخاب فعلی: یک متغیر محلی در بخش کافی است؛ نیازی به URL استیت نداریم.
 */

// Export: تأمین export پیش‌فرض default function Projects() در پیاده‌سازی بعدی.