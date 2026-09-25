import type { ProjectsContent } from "./type";

export const projects: ProjectsContent = {
  eyebrow: "نمونه‌کار",
  title: "پروژه‌های منتخب",
  description:
    "گزیده‌ای از پروژه‌هایی که ساختم‌اند یا در آن‌ها نقش کلیدی داشتم؛ از محصول عمومی تا ابزار متن‌باز.",
  categories: [
    { id: "all", label: "همه" },
    { id: "web", label: "وب" },
    { id: "tool", label: "ابزار" },
    { id: "open-source", label: "متن‌باز" },
  ],
  defaultCategory: "all",
  projects: [
    {
      id: "salam",
      slug: "salam-appointment",
      title: "سلام‌نوبت",
      categoryId: "web",
      role: "توسعه‌دهنده‌ی فول‌استک",
      summary: "سامانه‌ی رزرو نوبت آنلاین با تقویم شمسی، پرداخت درون‌برنامه‌ای و داشبورد مدیریت.",
      longDescription:
        "پلتفرم رزرو نوبت برای مطب‌ها و سالن‌های زیبایی؛ شامل تقویم شمسی سمت کاربر، یادآوری پیامکی، و داشبورد مدیران. مقیاس تا ۴۰ هزار نوبت در ماه بارگذاری شده بدون افت پاسخگویی.",
      tech: [
        { id: "next", name: "Next.js" },
        { id: "react", name: "React" },
        { id: "go", name: "Go" },
        { id: "pg", name: "PostgreSQL" },
        { id: "redis", name: "Redis" },
      ],
      image: { src: "/images/projects/salam.jpg", alt: "صفحه‌ی اصلی سامانه‌ی سلام‌نوبت" },
      links: { live: "https://salam-nobat.example.ir" },
      featured: true,
    },
    {
      id: "pocket",
      slug: "pocket-finance",
      title: "جیب‌من",
      categoryId: "web",
      role: "طراح و توسعه‌دهنده‌ی فرانت‌اند",
      summary: "PWA مدیریت مالی شخصی با گزارش مصوّر هزینه و اعداد فارسی.",
      longDescription:
        "برنامه‌ی تحت‌وب مدیریت دخل‌وخرج که آفلاین کار می‌کند؛ برچسب‌گذاری خودکار تراکنش‌ها با یادگیری ماشین ساده، نمودارها فارسی و قابل نصب روی گوشی.",
      tech: [
        { id: "react", name: "React" },
        { id: "ts", name: "TypeScript" },
        { id: "pwa", name: "PWA" },
        { id: "tailwind", name: "Tailwind" },
      ],
      image: { src: "/images/projects/pocket.jpg", alt: "نمودار هزینه‌ها در برنامه‌ی جیب‌من" },
      links: { live: "https://jib-man.example.ir", code: "https://github.com/arian-rezaei/jib-man" },
    },
    {
      id: "cli",
      slug: "release-cli",
      title: "release-cli",
      categoryId: "tool",
      role: "نویسنده‌ی اصلی",
      summary: "ابزار خط فرمان انتشار نسخه‌ی خودکار از روی tag و changelog.",
      longDescription:
        "یک CLI سبک با Go که بر پایه‌ی semver و زیرنویس‌های Git، برچسب‌های نسخه را می‌سازد و فایل CHANGELOG را با قالب استاندارد به‌روز می‌کند؛ در چند CI پخته شده.",
      tech: [
        { id: "go", name: "Go" },
        { id: "cli", name: "Cobra" },
      ],
      image: { src: "/images/projects/release-cli.jpg", alt: "خروجی ترمینال ابزار release-cli" },
      links: { code: "https://github.com/arian-rezaei/release-cli" },
    },
    {
      id: "naqsh",
      slug: "naqsh-analytics",
      title: "نقش",
      categoryId: "web",
      role: "توسعه‌دهنده‌ی فرانت‌اند و دیتا",
      summary: "پنل آنالیتیکس فارسی برای سایزهای کوچک؛ بدون نیاز به کوکی و ردپای مخفی.",
      longDescription:
        "پنل آنالیتیکس پرایوسی‌محور با دشبورد فارسی و گزارش لحظه‌ای؛ داده‌ها ناشناس می‌شوند و روی سرور ایران میزبانی می‌شوند تا مقررات داخلی رعایت شود.",
      tech: [
        { id: "next", name: "Next.js" },
        { id: "clickhouse", name: "ClickHouse" },
        { id: "ts", name: "TypeScript" },
        { id: "d3", name: "D3" },
      ],
      image: { src: "/images/projects/naqsh.jpg", alt: "دشبورد پنل آنالیتیکس نقش" },
      links: { live: "https://naqsh.example.ir" },
    },
    {
      id: "persian-date",
      slug: "persian-date-react",
      title: "jdate-react",
      categoryId: "open-source",
      role: "نویسنده‌ی اصلی",
      summary: "کتابخانه‌ی تقویم شمسی برای React؛ بدون وابستگی و پشتیبان از RTL.",
      longDescription:
        "کتابخانه‌ی پوشش‌دهنده‌ی تبدیل، قالب‌بندی و اجزای تقویم شمسی برای React. صفر وابستگی، تایپ کامل TypeScript و ساپورت از SSR؛ در ماه گذشته ۲۰ هزار دانلود داشته.",
      tech: [
        { id: "ts", name: "TypeScript" },
        { id: "react", name: "React" },
      ],
      image: { src: "/images/projects/jdate.jpg", alt: "نمای تقویم کتابخانه‌ی jdate-react" },
      links: { code: "https://github.com/arian-rezaei/jdate-react" },
    },
    {
      id: "bazaar",
      slug: "dast-market",
      title: "دست‌بازار",
      categoryId: "web",
      role: "معمار و توسعه‌دهنده‌ی فول‌استک",
      summary: "بازارچه‌ی آنلاین محصولات دست‌ساز با چت فروشنده و درگاه پرداخت.",
      longDescription:
        "پلتفرم فروش برای صنعتگران و هنرمندان بومی؛ جست‌وجوی پرشیبین، چت داخلی فروشنده و خریدار، و تسویه‌ی دوره‌ای برای فروشنده‌ها.",
      tech: [
        { id: "next", name: "Next.js" },
        { id: "nest", name: "NestJS" },
        { id: "pg", name: "PostgreSQL" },
        { id: "rtc", name: "Socket.IO" },
      ],
      image: { src: "/images/projects/dast-bazaar.jpg", alt: "شبکه‌ای از محصولات در دست‌بازار" },
      links: { live: "https://dast-bazaar.example.ir" },
    },
  ],
} satisfies ProjectsContent;