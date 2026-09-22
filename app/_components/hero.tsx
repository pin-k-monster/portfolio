/*
 * ============================================================
 *  بخش هیرو (Hero)
 *  این فایل فعلاً فقط برنامه‌ریزی است؛ هنوز هیچ کدی ندارد.
 * ============================================================
 *
 * ۱. Purpose (هدف)
 * ‌- پیام: در پنج ثانیه اول بگوید «کیستم» و «چه می‌سازم».
 * ‌- اقدام اصلی: دانلود رزومه (primary CTA) و دیدن پروژه‌ها (secondary).
 * ‌- حسِ «توسعه‌دهنده» بودن با ترمینالِ تایپ‌شونده منتقل می‌شود و حسِ اعتماد با proof اجتماعی.
 *
 * ۲. VibeFarsi components (کامپوننت‌ها) — همه تأییدشده در رجیستری
 * ‌- hero (blocks/hero): ستون مرکزی را با خود بلاک بسازید: badge، title، description، primary/secondary، proof.
 *    تیتر (title) از نوع ReactNode است؛ داخلش نام را در GradientText و نقش‌ها را در WordRotate بگذارید.
 *    add: hero → (با regDeps خودش button + badge + avatar می‌آورد)
 * ‌- gradient-text (animations/gradient-text): نام شما در تیتر. add: gradient-text
 * ‌- word-rotate (animations/word-rotate): گردش نقش‌ها بین روی‌ها (پیش‌فرض interval 2200ms). add: word-rotate
 * ‌- terminal (animations/terminal): پیش‌نمایش تایپ‌شونده زیر دکمه‌ها. TerminalLine: "cmd"|"out"|"ok"|"err". add: terminal
 * ‌- avatar (ui/avatar): داخل proof اجتماعی بلاک hero (people max ۴). add: avatar (با hero خودش می‌آید؛ همین‌جا هم لازم است)
 * ‌- girih (backgrounds/girih): پس‌زمینه‌ی اختیاریِ الگوی هندسی ایرانی پشت بخش، با mask به نرمی محو می‌شود. add: girih
 *
 * ۳. Layout (چیدمان)
 * ‌- از بالا: badge → تیتر (۲ خط: «توسعه‌دهندهیِ <نام گرادیانی>» + سطر word-rotate «/ فول‌استک / فرانت‌اند /...») →
 * ‌    توضیح → دکمه‌ها (primary در راست، secondary کنارش) → proof (AvatarGroup + متن).
 * ‌- سپس ترمینال (max-w-lg، راست‌چین) در پایین بخش.
 * ‌- کل بخش min-h-[90vh] ولی بدون overflow؛ vertical center با flex؛ text-center در موبایل.
 * ‌- grid بلاک hero خودش radial-masked دارد؛ girih فقط لایه‌ی تزئینی پشت آن باشد.
 * ‌- RTL: دکمه‌ی اول (primary) سمت راست نمایش داده می‌شود.
 *
 * ۴. Data (داده)
 * ‌- Data file: @/lib/site/hero/data .  Type: HeroContent (از ./type) + HeroTerminalLine.
 * ‌- name/role → داخل تیتر؛ rotatingRoles → WordRotate.words؛ badge → بلاک badge؛
 * ‌- primary/secondary → دکمه‌ها؛ description → پاراگراف؛ terminalLines → Terminal.lines؛ terminalTitle → Terminal.title.
 *
 * ۵. Interaction and animation (تعامل و انیمیشن)
 * ‌- ورود اولیه: هر عنصر با reveal (delay پلکانی ۰/۱۵۰/۳۰۰/۴۵۰ms). add: reveal — روی بلاک اصلی فقط.
 * ‌- word-rotate: چندشکلی نقش‌ها با interval پیش‌فرض ۲٬۲۰۰ms.
 * ‌- gradient-text: پن برند-رنگ پیوسته روی نام.
 * ‌- terminal: تایپ خودش را با IO شروع می‌کند (threshold 0.4).
 * ‌- دکمه‌ها: hover مطابق رفتار خود Button. بدون magnetic/shine این‌جا (یک CTA اصلی داریم؛ shine در بخش cta).
 * ‌- prefers-reduced-motion: reveal و word-rotate باید بی‌حرکت/نوبت ثابت شوند.
 *
 * ۶. States (حالت‌ها)
 * ‌- terminal هیچ state خاصی ندارد؛ فقط خطوط پشت سر هم اجرا می‌شوند و در پایان هم‌چنان می‌مانند.
 * ‌- تصویر نداریم پس skeleton لازم نیست. loading/error در این بخش نیست.
 * ‌- اگر JS غیرفعال باشد: تیتر باید بدون word-rotate خوانا شود؛ متن کامل roles را در aria-label بگذارید.
 *
 * ۷. Accessibility (دسترس‌پذیری)
 * ‌- <section aria-labelledby> با تیتر h1 (فقط یک h1 در صفحه).
 * ‌- terminal: role="log" و aria-live="polite" داخل خود کامپوننت است؛ چیزی اضافه نکنید.
 * ‌- word-rotate: aria-live="polite" خودش دارد؛ کل متن نقش‌ها برای اسکرین‌ریدر باید یکجا خوانده شود.
 * ‌- نسبت کنتراست girih بسیار کم (با mask محو)؛ نباید پشت متن خوانایی را کم کند — تست کنید.
 *
 * ۸. Implementation notes (یادداشت پیاده‌سازی)
 * ‌- تیتر بلاک hero: چون ReactNode است، ترکیب `<GradientText>{name}</GradientText>` و `<WordRotate words={...}/>`
 * ‌    را دست‌ساز داخل title بگذارید؛ متن کامل (بدون تزئین) برای SEO در metadata هم جدا موجود است.
 * ‌- girih فقط در بالای صفحه و یک‌بار؛ نباید در کل صفحه تکرار شود (هزینه نباید بی‌فایده بالا برود).
 * ‌- تصویری نداریم؛ به‌جای تصویر از ترمینال برای فاکتور «کد» استفاده می‌شود.
 * ‌- هماهنگی: anchor این بخش id="hero".
 */
import { BlurText } from "@/components/animations/blur-text";
import { Terminal } from "@/components/animations/terminal";
import { TextShimmer } from "@/components/animations/text-shimmer";
import { WordRotate } from "@/components/animations/word-rotate";
import { DitherBackground } from "@/components/backgrounds/dither";
import { Button } from "@/components/ui/button";
import { hero } from "@/lib/site/hero/data";
import { ArrowLeft, DownloadCloud } from "lucide-react";
import Link from "next/link";

// Export: تأمین export پیش‌فرض default function Hero() در پیاده‌سازی بعدی.

export default function Hero() {
    return (
        <section className="relative overflow-hidden xl:h-125">
            <DitherBackground opacity={0.15} />
            <div className="h-full max-xl:py-8 max-xl:space-y-8 container mx-auto grid xl:grid-cols-[1.25fr_1fr] items-center z-10 relative">
                <div className="max-xl:text-center space-y-3 xl:space-y-5 xl:border-r-4 border-r-muted-foreground/50 xl:py-6 px-4 xl:ps-8">
                    <TextShimmer className="text-sm">{hero.badge}</TextShimmer>
                    <h1 className="text-2xl sm:text-4xl font-bold">
                        <BlurText text={`${hero.name}، ${hero.titlePrefix}`} />
                        <WordRotate words={hero.rotatingRoles} className="text-brand w-24 sm:w-38" />
                    </h1>
                    <p className="text-sm max-xl:mx-auto max-w-2xl leading-7 font-light text-muted-foreground">
                        {hero.description}
                    </p>
                    <div className="gap-x-2 flex items-center max-xl:justify-center">
                        <Link
                            rel={hero.primary.rel} target={hero.primary.target}
                            href={hero.primary.href} download={hero.primary.download}>
                            <Button variant="brand">
                                {hero.primary.label}
                                <DownloadCloud />
                            </Button>
                        </Link>
                        <Link
                            rel={hero.secondary.rel} target={hero.secondary.target}
                            href={hero.secondary.href} download={hero.secondary.download}>
                            <Button variant="secondary">
                                {hero.secondary.label}
                                <ArrowLeft />
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-end h-full max-xl:px-4">
                    <Terminal
                        speed={45}
                        className="shadow-2xl mt-auto w-full max-w-none **:text-base bg-card/10 backdrop-blur-md h-full xl:translate-y-20"
                        title={hero.terminalTitle}
                        lines={hero.terminalLines} />
                </div>
            </div>
        </section>
    )
}