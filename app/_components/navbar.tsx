/*
 * ============================================================
 *  بخش نوبار (Navbar)
 *  این فایل فعلاً فقط برنامه‌ریزی است؛ هنوز هیچ کدی ندارد.
 * ============================================================
 *
 * ۱. Purpose (هدف)
 * ‌- پیام: ناوبری مطمئن و حرفه‌ای؛ بازدیدکننده در هر لحظه بداند کجاست و چه کاری می‌تواند بکند.
 * ‌- اقدام اصلی: کلیک روی «دانلود رزومه» + اسکرول نرم به بخش‌ها.
 * ‌- نوار بالا چسبان (sticky) با پس‌زمینه‌ی blur تا هنگام اسکرول محتوا از زیرش ناخوانا نشود.
 *
 * ۲. VibeFarsi components (کامپوننت‌ها) — همه تأییدشده در رجیستری
 * ‌- button (ui/button): CTA رزومه، variant="brand" size="md". add: button
 * ‌- sheet (ui/sheet): منوی موبایل. side="start" — در RTL «start» یعنی سمت راست،
 *    دقیقا زیر لوگو که راست‌ترین عنصر است. روی باز/بسته با state خودش (SheetProps: open, onOpenChange, title).
 *    add: sheet
 * ‌- scroll-progress (animations/scroll-progress): نوار باریک بالای صفحه که از راست پر می‌شود
 *    (origin-right در RTL). بدون prop؛ در بالای همین کامپوننت مطلق/fixed رندر شود. add: scroll-progress
 * ‌- لوگو و لینک‌ها متن ساده با آیکون‌های lucide (بدون کامپوننت اختصاصی؛ REGISTRY MATCH موجود است).
 *
 * ۳. Layout (چیدمان)
 * ‌- ترتیب از بالا به پایین: [ScrollProgress] سپس <header> چسبان.
 * ‌- دسکتاپ (lg به بالا): لوگو (monogram + نام) در راست؛ منو وسط/چپ و دکمه‌ی CTA چپ‌ترین عنصر.
 * ‌- موبایل (زیر lg): لوگو راست، دکمه‌ی همبرگر (آیکون Menu lucide) چپ؛ باز شدن sheet از سمت راست.
 * ‌- sheet را پر از آیتم‌های منو + CTA کرد؛ پایین آن separator + شبکه‌های اجتماعی.
 * ‌- ارتفاع ۶۴px، padding افقی ۱۶/۲۴/۴۸ (sm/lg/xl)، container max-w-7xl.
 * ‌- یادآوری RTL: اولین آیتم منو سمت راست است.
 *
 * ۴. Data (داده)
 * ‌- Data file: @/lib/site/navbar/data .  Type: NavbarContent (از ./type).
 * ‌- items → لینک‌های منو (id برای فعال‌سازی، label متن، href لنگر).
 * ‌- cta → دکمه‌ی رزومه (config.resume).
 * ‌- mobileMenuTitle → عنوان sheet.
 * ‌- نام/لوگو از @/lib/site/config → site.name / site.monogram.
 *
 * ۵. Interaction and animation (تعامل و انیمیشن)
 * ‌- scroll-progress: پرشدن از راست هنگام اسکرول (نه Reveal؛ مربوط به کل صفحه).
 * ‌- روی دسکتاپ زیر هر لینک، نوار زیرخط فعال بخشِ در دید (با IntersectionObserver روی sections،
 *    نه کتابخانه‌ی اضافه). انیمیشن با transition رنگ/پس‌زمینه ۲۰۰ms.
 * ‌- hover لینک: رنگ foreground/40→foreground.
 * ‌- sheet: انیمیشن ورود/خروج خود کامپوننت (slide + پس‌زمینه‌ی اوورلی fading).
 * ‌- همه‌ی حرکت‌ها کوتاه؛ برای prefers-reduced-motion فقط تغییر رنگ مجاز است.
 *
 * ۶. States (حالت‌ها)
 * ‌- حالت چسبان (scrolled): چون زمینه graphite تیره است، بلافاصله backdrop-blur + bg-background/70.
 * ‌- حالت فعال (active section): لینک برجسته با آریا-current یا دکور border.
 * ‌- LCP/light/dark: سایت تک‌تمِ graphite (dark) است؛ بدون سوئیچ تم. فقط tokens.
 * ‌- اگر JS غیرفعال بود: لینک‌های منو و CTA باید بدون JS هم کار کنند (معمولی <a>).
 *
 * ۷. Accessibility (دسترس‌پذیری)
 * ‌- <header role="banner"> (تک‌بار در صفحه)؛ داخل آن <nav aria-label="پیمایش اصلی"> و <ol>/<li>.
 * ‌- دکمه‌ی همبرگر aria-label="باز کردن منو" و aria-expanded.
 * ‌- sheet رجیستری: aria-modal، بستن با Escape، focus به داخل و بازگردانی focus.
 * ‌- ترتیب focus: اول لوگو، بعد منو، بعد CTA (RTL: راست به چپ).
 * ‌- contrast: متن روی bg-background با foreground (نسبت بالا در graphite).
 *
 * ۸. Implementation notes (یادداشت پیاده‌سازی)
 * ‌- مونتاژ: این بخش اولین‌بار در app/page.tsx و زیر ScrollProgress رندر می‌شود.
 * ‌- لینک‌های input اسکرول نرم: در layout روی <html> باید data-scroll-behavior="smooth" باشد
 *    (Next 16 فقط با همین صفت اسکرول صاف را فعال می‌کند) و برای بخش‌های چسبان یک rule
 *    scroll-margin-top ~ 88px بگذارید تا تیتر زیر نوبار «گیر» نکند.
 * ‌- آیکون‌ها از lucide-react (وابستگی‌ای که add نصب می‌کند). آیکون‌های جهت‌دار (Menu/X/ArrowLeft) در RTL خودکار برگردان نمی‌شوند؛ نگاه کنید.
 * ‌- فایل app/_components/header.tsx خالی از قبل هست و استفاده نمی‌شود؛ می‌توانید حذفش کنید.
 * ‌- این کامپوننت را Client کنید فقط برای sheet/scroll-progress (آنها خود "use client" نیستند همه‌جا؛ سرریزشان را چک کنید).
 */

"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Menu, DownloadCloud } from "lucide-react";
import { ShineButton } from "@/components/animations/shine-button";
import Logo from "@/components/common/logo";
import ThemeToggleButton from "@/components/common/theme-toggle-button";
import { Sheet } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/providers/theme-provider";
import { site } from "@/lib/site/config";
import { navbar } from "@/lib/site/navbar/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function MobileSheetContent({ setOpen, activeId }: { setOpen: Dispatch<SetStateAction<boolean>>; activeId: string }) {
    const { theme, setTheme } = useTheme();
    return (
        <div className="flex h-full flex-col">
            <nav aria-label="پیمایش موبایل">
                <ul className="flex flex-col gap-1">
                    {navbar.items.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={item.href}
                                onClick={() => setOpen(false)}
                            >
                                <Button variant="ghost" data-nav-active={item.id === activeId ? "true" : undefined} className="w-full justify-start">
                                    {item.label}
                                </Button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="justify-end flex flex-1 flex-col gap-3">
                <Link href={site.resume.href} onClick={() => setOpen(false)}
                    download={site.resume.download}>
                    <ShineButton className="w-full cursor-pointer" size="md">
                        {site.resume.label}
                        <DownloadCloud />
                    </ShineButton>
                </Link>
                <label className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
                    <span className="text-sm font-medium">حالت تیره</span>
                    <Switch
                        checked={theme === "dark"}
                        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                    />
                </label>
            </div>
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const sections = navbar.items
            .map((item) => document.getElementById(item.id))
            .filter((el): el is HTMLElement => el !== null);

        if (!sections.length) return;

        const pick = () => {
            const viewportLine = window.innerHeight * 0.35;
            const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
            const last = sections[sections.length - 1];
            if (atEnd || (last && last.getBoundingClientRect().bottom <= viewportLine)) {
                setActiveId("");
                return;
            }
            let current = "";
            for (const el of sections) {
                if (el.getBoundingClientRect().top <= viewportLine) current = el.id;
            }
            setActiveId(current);
        };

        pick();
        window.addEventListener("scroll", pick, { passive: true });
        window.addEventListener("resize", pick);
        return () => {
            window.removeEventListener("scroll", pick);
            window.removeEventListener("resize", pick);
        };
    }, []);

    return (
        <>
            <header className="py-1 px-4 sticky top-0 backdrop-blur-md bg-background/75 z-50 border-b border-b-muted">
                <div className="container mx-auto hidden items-center lg:grid lg:grid-cols-[1fr_2fr_1fr]">
                    <div>
                        <Logo />
                    </div>
                    <div className="flex justify-center">
                        <ul className="gap-x-1 flex items-center text-sm">
                            {navbar.items.map((item) => (
                                <li key={item.id}
                                    data-nav-active={item.id === activeId ? "true" : undefined}
                                    className="relative transition-colors hover:text-foreground overflow-hidden rounded-md text-muted-foreground
     before:content-[''] before:rounded-l-full before:absolute before:w-[0%] before:h-[0%] before:bg-foreground/10 hover:before:h-full hover:before:w-[50%] hover:before:rounded-none before:transition-all before:z-[-1]
      after:content-[''] after:rounded-r-full after:left-0 after:bottom-0 after:absolute after:w-[0%] after:h-[0%] after:bg-foreground/10 hover:after:h-full hover:after:w-[50%] hover:after:rounded-none after:transition-all after:z-[-1]">
                                    <Link href={item.href} className="block py-1.5 px-3">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="gap-x-2 flex justify-end">
                        <ThemeToggleButton />
                        <Link href={site.resume.href} download={site.resume.download}>
                            <ShineButton size="sm">
                                {site.resume.label}
                                <DownloadCloud />
                            </ShineButton>
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto flex items-center justify-between lg:hidden">
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() => setOpen(true)}
                        aria-label="باز کردن منو"
                        aria-expanded={open}
                    >
                        <Menu className="size-5" />
                    </Button>
                    <Logo />
                </div>
            </header>

            <Sheet open={open} onOpenChange={setOpen} side="start" title="منو">
                <MobileSheetContent setOpen={setOpen} activeId={activeId} />
            </Sheet>
        </>
    )
}