/**
 * پیکربندی مرکزی سایت.
 * این فایل کد واقعی است؛ تنها جایی که اطلاعات هویتی (نام، ایمیل، شبکه‌های اجتماعی، SEO) می‌نشیند.
 * بقیه فایل‌های data برای مقادیر تکراری از همین‌جا import می‌کنند و نباید خودشان کپی نگه دارند.
 * نکته: آیکون‌های lucide-ref با `npx vibefarsi add ...` نصب می‌شوند (وابستگی همه‌ی کامپوننت‌ها).
 */
import { Send } from "lucide-react";
import type { SocialLink } from "./shared";

/** ساختار پیکربندی مرکزی؛ خروجی export تا فایل‌های data بتوانند تایپ بگیرند. */
export interface SiteConfig {
  /** نام کامل (الزامی؛ در هیرو، فوتر و متا). */
  name: string;
  /** علامت کوتاه لوگو (۱–۲ کاراکتر). */
  monogram: string;
  /** عنوان شغلی اصلی (در هیرو، تیتر meta و فوتر). */
  role: string;
  /** شعار یک‌خطی. */
  tagline: string;
  /** شهر، کشور. */
  location: string;
  /** وضعیت در دسترس بودن برای همکاری. */
  availability: string;
  /** اطلاعات تماس مستقیم. ایمیل هدف فرم تماس و لینک mailto. */
  contact: {
    email: string;
  };
  /** لینک دانلود رزومه؛ هم در نوبار و هم در CTA پایانی استفاده می‌شود. فایل هنوز در /public نیست؛ باید اضافه شود. */
  resume: {
    label: string;
    href: string;
    download: true;
  };
  /** شبکه‌های اجتماعی؛ در فوتر و تماس و هیرو (proof). */
  socials: SocialLink[];
  /** متادیتای سئو و Open Graph (در layout.tsx به export const metadata می‌رود). */
  seo: {
    /** <title> فارسی صفحه. */
    title: string;
    /** توضیح متا فارسی (حدود ۱۵۰–۱۶۰ کاراکتر). */
    description: string;
    /** کلمات کلیدی جدا با ویرگول. */
    keywords: string[];
    /** آدرس پایه برای OG؛ در تولید باید دامنه‌ی واقعی باشد. */
    url: string;
    /** تصویر Open Graph در /public. */
    ogImage: string;
  };
}

export const site: SiteConfig = {
  name: "آرین رضایی",
  monogram: "ع",
  role: "توسعه‌دهنده‌ی فول‌استک",
  tagline: "محصولات وب سریع، در دسترس و همه‌فهم می‌سازم",
  location: "تهران، ایران",
  availability: "برای پروژه‌های جدید و همکاری در دسترس هستم",
  contact: {
    email: "arian@example.ir",
  },
  resume: {
    label: "دانلود رزومه",
    href: "/resume.pdf",
    download: true,
  },
  socials: [
    { id: "github", label: "گیت‌هاب", href: "https://github.com/arian-rezaei" },
    { id: "linkedin", label: "لینکدین", href: "https://linkedin.com/in/arian-rezaei" },
    { id: "telegram", label: "تلگرام", href: "https://t.me/arian_rezaei", icon: Send },
    { id: "x", label: "توییتر", href: "https://x.com/arian_rezaei" },
  ] satisfies SocialLink[],
  seo: {
    title: "آرین رضایی | توسعه‌دهنده‌ی فول‌استک",
    description:
      "نمونه‌کار و رزومه‌ی آنلاین آرین رضایی؛ توسعه‌دهنده‌ی فول‌استک وب با تمرکز بر محصولات فارسی‌زبان، تجربه‌ی کاربری و کارایی بالا.",
    keywords: [
      "توسعه‌دهنده فول‌استک",
      "برنامه‌نویس وب",
      "رزومه",
      "نمونه‌کار",
      "React",
      "Next.js",
      "توسعه وب ایران",
    ],
    url: "https://arian-rezaei.example.ir",
    ogImage: "/images/og.png",
  },
};