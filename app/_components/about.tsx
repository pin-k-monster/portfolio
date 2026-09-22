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

import { HighlightText } from "@/components/animations/highlight-text";
import { TextReveal } from "@/components/animations/text-reveal";
import { GrainBackground } from "@/components/backgrounds/grain";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { about } from "@/lib/site/about/data";
import { site } from "@/lib/site/config";
import { DownloadCloud, Mail } from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" aria-labelledby="about-title" className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="grid items-center gap-8 lg:grid-cols-[0.75fr_1.5fr]">
                    <div className="lg:sticky lg:top-24">
                        <Card className="relative">
                            <GrainBackground className="*:rounded-2xl rounded-2xl" />
                            <div className="relative z-10">
                                <div className="flex flex-col items-center gap-4 p-8">
                                    <Avatar name={about.name} src={about.avatar.src} size="md" className="size-32! text-4xl" />
                                    <div className="space-y-1 text-center">
                                        <h3 className="text-lg font-bold">{about.name}</h3>
                                        <p className="text-sm text-muted-foreground">{about.headline}</p>
                                    </div>
                                </div>
                                <Separator />
                                <dl className="grid grid-cols-2 gap-x-4 gap-y-4 p-6">
                                    {about.facts.map((fact) => (
                                        <div key={fact.id} className="space-y-0.5">
                                            <dt className="text-xs text-muted-foreground">{fact.field}</dt>
                                            <dd className="text-sm font-medium text-foreground">{fact.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </Card>
                    </div>

                    <div className="space-y-8">
                        <div className="flex flex-col gap-3">
                            <Badge variant="brand">درباره‌ی من</Badge>
                            <h2 id="about-title" className="text-2xl sm:text-3xl font-bold leading-tight">
                                <TextReveal lines={[
                                    ` سلام، من ${about.name} هستم`
                                ]} />
                            </h2>
                        </div>

                        <div className="space-y-4 text-[15px] leading-8 text-muted-foreground">
                            {about.bio.map((paragraph, i) => {
                                if (!paragraph.includes(about.focusKeyword)) {
                                    return <p key={i}>{paragraph}</p>;
                                }
                                const [before, after] = paragraph.split(about.focusKeyword);
                                return (
                                    <p key={i}>
                                        {before}
                                        <HighlightText delay={300}>{about.focusKeyword}</HighlightText>
                                        {after}
                                    </p>
                                );
                            })}
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <Link href={about.resume.href} download={about.resume.download}>
                                <Button variant="outline">
                                    {about.resume.label}
                                    <DownloadCloud />
                                </Button>
                            </Link>
                            <Link href={`mailto:${site.contact.email}`}>
                                <Button variant="ghost">
                                    ارسال ایمیل
                                    <Mail />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}