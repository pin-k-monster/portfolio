/**
 * محتوای تجربه (این فایل کد واقعی است).
 * برچسب بازه با formatJalali از lib/jalali ساخته می‌شود: «از ۱۴۰۲ تاکنون».
 * چون site فارسی/شمسی است، تاریخ‌ها این‌جا Gregorian واقعی‌اند و فقط برای نمایش تبدیل می‌شوند.
 */
import { formatJalali } from "../../../lib/jalali";
import type { ExperienceContent, ExperiencePeriod } from "./type";

/** سازنده‌ی برچسب بازه — عدد فارسی و شمسی، آماده‌ی نمایش. */
const labelOf = (start: Date, end: Date | null): string =>
  end === null
    ? `از ${formatJalali(start)} تاکنون`
    : `از ${formatJalali(start)} تا ${formatJalali(end)}`;

const period = (start: Date, end: Date | null): ExperiencePeriod => ({
  start,
  end,
  label: labelOf(start, end),
});

export const experience: ExperienceContent = {
  eyebrow: "سوابق",
  title: "مسیر حرفه‌ای من",
  items: [
    {
      id: "snapp",
      role: "مهندس ارشد فرانت‌اند",
      company: "اسنپ",
      companyUrl: "https://snapp.ir",
      location: "تهران، دورکاری",
      period: period(new Date(2023, 6, 1), null),
      summary: "معماری و توسعه‌ی وباپ‌های سفر کاربران؛ تمرکز بر کارایی و تجربه‌ی ایرانی‌ها.",
      points: [
        "بازطراحی صفحه‌ی جست‌وجوی سفر که نرخ تبدیل را ۱۸٪ افزایش داد.",
        "معماری باندل و lazy-loading برای پایین آوردن LCP از ۴٫۲ به ۱٫۶ ثانیه.",
        "منتورینگ ۸ توسعه‌دهنده و پایه‌گذاری استانداردهای کد فرانت‌اند تیم.",
      ],
      stack: [
        { id: "react", name: "React" },
        { id: "next", name: "Next.js" },
        { id: "ts", name: "TypeScript" },
        { id: "graphql", name: "GraphQL" },
      ],
    },
    {
      id: "digikala",
      role: "توسعه‌دهنده‌ی فول‌استک",
      company: "دیجی‌کالا",
      companyUrl: "https://digikala.com",
      location: "تهران",
      period: period(new Date(2019, 3, 1), new Date(2023, 5, 1)),
      summary: "توسعه‌ی سرور و کلاینت ابزارهای داخلی و بخش جست‌وجوی فروشگاه.",
      points: [
        "ساخت سرویس جست‌وجوی فازی فارسی با Elasticsearch و کاهش ۴۰٪ زمان پاسخ.",
        "توسعه‌ی داشبورد عملیاتی که روزانه ۱۰۰+ کاربر داخلی دارد.",
        "مهاجرت سرویس‌ها از REST به GraphQL با حفظ سازگاری قدیمی.",
      ],
      stack: [
        { id: "node", name: "Node.js" },
        { id: "ts", name: "TypeScript" },
        { id: "react", name: "React" },
        { id: "elastic", name: "Elasticsearch" },
      ],
    },
    {
      id: "fintech",
      role: "توسعه‌دهنده‌ی بک‌اند",
      company: "استارتاپ فینتک «کیف»",
      location: "تهران",
      period: period(new Date(2016, 9, 1), new Date(2019, 2, 1)),
      summary: "طراحی API پرداخت و کیف پول؛ نخستین تجربه‌ی کار تیمی با محصول فراهم‌کننده.",
      points: [
        "طراحی و پیاده‌سازی سرویس تسویه که ۵۰۰٬۰۰۰ تراکنش ماهانه را پشتیبانی می‌کرد.",
        "راه‌اندازی مانیتورینگ و هشدار وقوع خطا؛ کاهش میانگین زمان کشف خطا از ۲ ساعت به ۱۰ دقیقه.",
      ],
      stack: [
        { id: "go", name: "Go" },
        { id: "pg", name: "PostgreSQL" },
        { id: "redis", name: "Redis" },
        { id: "docker", name: "Docker" },
      ],
    },
    {
      id: "freelance",
      role: "برنامه‌نویس آزاد",
      company: "دورکار",
      period: period(new Date(2014, 3, 1), new Date(2016, 8, 1)),
      summary: "ساخت وب‌سایت و ابزار برای کسب‌وکارهای کوچک؛ پایه‌ی تجربه‌ی محصول.",
      points: [
        "توسعه‌ی بیش از ۲۰ وب‌سایت خدماتی و فروشگاهی‌محور برای مشتریان ایرانی.",
        "انتخاب من به‌عنوان «آزادکار برتر» در پلتفرم همکاری در یک سال.",
      ],
      stack: [
        { id: "php", name: "PHP" },
        { id: "js", name: "JavaScript" },
        { id: "mysql", name: "MySQL" },
      ],
    },
  ],
} satisfies ExperienceContent;