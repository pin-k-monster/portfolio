/**
 * محتوای مقالات/نوشته‌ها (این فایل کد واقعی است).
 * publishedAt از قبل شمسی و با اعداد فارسی است؛ کامپوننت باید همان را مستقیم نشان دهد.
 */
import type { WritingContent } from "./type";

export const writing: WritingContent = {
  eyebrow: "نوشته‌ها",
  title: "از وبلاگ",
  description: "یادداشت‌های فنی؛ از تجربه‌های ساده تا عمیق‌تر، به زبان خودمان.",
  articles: [
    {
      id: "rtl-web",
      slug: "/writing/rtl-web",
      title: "طراحی رابط راست‌چین؛ نه فقط یک dir=rtl",
      excerpt:
        "چرا محصولات راست‌چین با آینه‌کردن چپ‌چین درست نمی‌شوند؛ از logical properties تا آیکون‌های جهت‌دار و داستان اعداد فارسی.",
      category: "رابط کاربری",
      tags: [
        { id: "rtl", name: "RTL" },
        { id: "css", name: "CSS" },
      ],
      publishedAt: "۱۴۰۴/۰۵/۲۱",
      readingMinutes: 8,
    },
    {
      id: "next-images",
      slug: "/writing/next-images",
      title: "بهینه‌سازی تصویر در Next.js؛ از LCP تا پیش‌بارگذاری",
      excerpt:
        "تجربه‌ی عملی‌ام در پایین‌آوردن LCP یک وب‌اپ پرمصرف؛ رزولوشن‌های باطل، صفت preload به‌جای priority و اندازه‌های درست برای fill.",
      category: "عملکرد",
      tags: [
        { id: "next", name: "Next.js" },
        { id: "perf", name: "Performance" },
      ],
      publishedAt: "۱۴۰۴/۰۲/۰۳",
      readingMinutes: 9,
    },
    {
      id: "jalali-react",
      slug: "/writing/jalali-react",
      title: "تقویم شمسی در React بدون وابستگی سنگین",
      excerpt:
        "چطور کتابخانه‌ی jdate-react را نوشتم؛ الگوریتم تبدیل Borkowski، قالب‌بندی اعداد فارسی و انتخاب طراحی API برای کتابخانه‌های کوچک.",
      category: "کتابخانه",
      tags: [
        { id: "react", name: "React" },
        { id: "ts", name: "TypeScript" },
      ],
      publishedAt: "۱۴۰۳/۱۲/۱۵",
      readingMinutes: 11,
    },
  ],
  readAllCta: {
    label: "دیدن همه‌ی مقاله‌ها",
    href: "/writing",
  },
} satisfies WritingContent;