import type { HeroContent } from "./type";
import { site } from "../config";

export const hero: HeroContent = {
  badge: "در دسترس برای همکاری",
  name: site.name,
  titlePrefix: "توسعه‌دهنده‌ی",
  rotatingRoles: ["فول‌استک", "فرانت‌اند", "محصول", "متن‌باز"],
  description:
    "بیش از ۹ سال است که محصولات وب می‌سازم؛ از طراحی رابط تا زیرساخت. عاشق جزئیات پوسته و مغز هستم و باور دارم نرم‌افزار خوب فارسی‌زبان‌ها را هم سزاوار زیبایی و سرعت است.",
  primary: { label: "دریافت رزومه", href: "/resume.pdf", download: true },
  secondary: { label: "مشاهده‌ی پروژه‌ها", href: "#projects" },
  terminalTitle: "درباره‌ی من",
  terminalLines: [
    { type: "cmd", text: "whoami" },
    { type: "ok", text: "آرین رضایی — توسعه‌دهنده‌ی فول‌استک از تهران" },
    { type: "cmd", text: "cat skills.txt" },
    { type: "out", text: "TypeScript React Next.js Go PostgreSQL Redis Docker" },
    { type: "cmd", text: "npm run hire" },
    { type: "err", text: "خطا: نامه‌ی پیشنهاد یافت نشد؛ لطفا با ایمیل تماس بگیرید." },
  ],
} satisfies HeroContent;