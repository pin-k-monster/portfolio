"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Menu, DownloadCloud } from "lucide-react";
import { ShineButton } from "@/components/animations/shine-button";
import Logo from "@/components/common/logo";
import { Sheet } from "@/components/ui/sheet";
import { navbar } from "@/lib/site/navbar/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function MobileSheetContent({ setOpen, activeId }: { setOpen: Dispatch<SetStateAction<boolean>>; activeId: string }) {
    return (
        <div className="flex h-full flex-col">
            <h2 className="mb-3 px-3 text-sm font-semibold text-muted-foreground">
                {navbar.mobileMenuTitle}
            </h2>
            <nav aria-label={navbar.mobileMenuTitle}>
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
            <div className="flex flex-1 flex-col justify-end">
                <Link href={navbar.cta.href} onClick={() => setOpen(false)} download={navbar.cta.download}>
                    <ShineButton className="w-full cursor-pointer" size="md">
                        {navbar.cta.label}
                        <DownloadCloud aria-hidden />
                    </ShineButton>
                </Link>
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
            <header className="py-1 px-4 sticky top-0 backdrop-blur-md bg-background/75 z-50 border-b border-b-border">
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
                    <div className="flex justify-end">
                        <Link href={navbar.cta.href} download={navbar.cta.download}>
                            <ShineButton size="sm">
                                {navbar.cta.label}
                                <DownloadCloud aria-hidden />
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
                        <Menu className="size-5" aria-hidden />
                    </Button>
                    <Logo />
                </div>
            </header>

            <Sheet open={open} onOpenChange={setOpen} side="start" title={navbar.mobileMenuTitle}>
                <MobileSheetContent setOpen={setOpen} activeId={activeId} />
            </Sheet>
        </>
    )
}
