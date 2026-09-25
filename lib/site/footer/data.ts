import type { FooterContent } from "./type";
import { navbar } from "../navbar/data";
import { site } from "../config";

export const footer: FooterContent = {
  brand: site.name,
  about:
    "توسعه‌دهنده‌ی فول‌استک ساکن تهران؛ سازنده‌ی محصولات وب سریع، در دسترس و فارسی.",
  navTitle: "پیمایش",
  nav: navbar.items,
  columns: [
    {
      title: "محصول",
      links: [
        { label: "رزومه‌ی PDF", href: site.resume.href },
        { label: "پروژه‌های منتخب", href: "#projects" },
        { label: "بلاگ", href: "/writing" },
      ],
    },
    {
      title: "اجتماعی",
      links: site.socials.map((s) => ({ label: s.label, href: s.href })),
    },
  ],
  contactTitle: "تماس",
  email: site.contact.email,
  socialsTitle: "در شبکه‌های اجتماعی",
  copyright: `۱۴۰۵ © ${site.name}`,
  credit: "ساخته‌شده با VibeFarsi و Next.js",
} satisfies FooterContent;