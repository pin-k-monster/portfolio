/*
 * ============================================================
 *  بخش مهارت‌ها (Skills)
 *  این فایل فعلاً فقط برنامه‌ریزی است؛ هنوز هیچ کدی ندارد.
 * ============================================================
 *
 * ۱. Purpose (هدف)
 * ‌- پیام: «تکنولوژی‌هایی که با آن‌ها کار می‌کنم» به‌صورت سریع‌اسکن؛ بدون اغراق درصدی.
 * ‌- اقدام اصلی: ترغیب به ادامه‌ی اسکرول به سمت پروژه‌ها.
 *
 * ۲. VibeFarsi components (کامپوننت‌ها) — همه تأییدشده در رجیستری
 * ‌- marquee (animations/marquee): نوار متحرک نام فناوری‌ها بالای بخش (جهت RTL پیش‌فرض). add: marquee
 * ‌- card (ui/card): چهار دسته‌ی مهارت. add: card
 * ‌- badge (ui/badge): هر مهارت یک نشان؛ variant بر پایه‌ی proficiency:
 * ‌    متقدم→"brand"، خوب→"secondary"، آشنا→"outline"، بدون→"outline". add: badge
 *
 * ۳. Layout (چیدمان)
 * ‌- از بالا: eyebrow → تیتر (معمولا h2) → نوار مارکی → شبکه‌ی دسته‌ها.
 * ‌- شبکه‌ی دسته‌ها: ۱ ستون موبایل، ۲ ستون md، ۴ ستون xl (grid-cols-1/2/4، gap-4).
 * ‌- هر کارت: تیتر دسته + فهرست مهارت‌ها به‌صورت نشان‌های wrap (badge کنار هم، gap ۶px).
 * ‌- RTL: مارکی از چپ به راست اسکرول «طبیعی» است و دسته‌ی اول سمت راست.
 *
 * ۴. Data (داده)
 * ‌- Data file: @/lib/site/skills/data .  Type: SkillsContent (از ./type).
 * ‌- marquee → متن نوار؛ groups → کارت‌ها؛ در هر group: title + skills[].name و proficiency.
 *
 * ۵. Interaction and animation (تعامل و انیمیشن)
 * ‌- marquee: اسکرول پیوسته (پیش‌فرض duration 30s)؛ بدون pauseOnHover (رجیستری ندارد).
 * ‌- کارت‌ها با reveal پلکانی ورود پیدا کنند. add: reveal
 * ‌- hover روی هر کارت: بلندشدن ظریف (translate-y-[-2px] + shadow) با transition ۲۰۰ms.
 * ‌- reduced-motion: marquee باید متوقف یا بسیار کند شود.
 *
 * ۶. States (حالت‌ها)
 * ‌- loading نیست؛ داده استاتیک است.
 * ‌- اگر گروهی مهارت نداشت render نشود (جدا جدا).
 *
 * ۷. Accessibility (دسترس‌پذیری)
 * ‌- <section aria-labelledby> + h2. مارکی یک فهرست ساده است؛ بدون aria-live (تکراری پرهزینه).
 * ‌- نشان‌ها را <span> های ساده یا <ul> با list-style: none در نظر بگیرید؛ معنی بالاتر را متن تیتر بدهد.
 *
 * ۸. Implementation notes (یادداشت پیاده‌سازی)
 * ‌- به proficiency فشار ندهید؛ «درصد» یا «نوار پیشرفت» نگذارید (حس کمیک). فقط variant نشان.
 * ‌- نام فناوری‌های لاتین داخل متن فارسی با dir مناسب همان span (نه کل پاراگراف)؛ عدد نیست.
 */

import { Marquee } from "@/components/animations/marquee";
import { Reveal } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/lib/site/skills/data";

// Export: تأمین export پیش‌فرض default function Skills() در پیاده‌سازی بعدی.

export default function Skills() {
    return (
        <section className="overflow-x-hidden">
            <div id="skills" className="pb-16 sm:pb-24 container px-4 mx-auto flex flex-col justify-center items-center">
                <Reveal>
                    <div className="text-center space-y-4">
                        <Badge variant="brand">{skills.eyebrow}</Badge>
                        <h2 className="text-3xl font-bold">
                            {skills.title}
                        </h2>

                        <Marquee className="my-5">
                            {
                                skills.marquee.map((s, index) => (
                                    <Badge className="text-muted-foreground" key={index}>{s}</Badge>
                                ))
                            }
                        </Marquee>
                    </div>
                </Reveal>
                <Reveal delay={150} className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-stretch gap-4 w-full">
                        {
                            skills.groups.map((g) => (
                                <Card key={g.id} className="border-2 hover:border-brand/25 hover:shadow-xl hover:-translate-y-1 transition-all cursor-default">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-x-2">
                                            <g.icon />
                                            {g.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent dir="ltr" className="space-y-2">
                                        {g.skills.map((s) => (
                                            <div key={s.id} className="flex items-center justify-between rounded-md border border-foreground/15 py-1 px-2 text-sm">
                                                {s.name}
                                                <span className="text-xs text-muted-foreground">
                                                    {s.proficiency}
                                                </span>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </div>
                </Reveal>
            </div>
        </section>
    )
}