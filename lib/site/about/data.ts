/**
 * محتوای درباره‌ی من (این فایل کد واقعی است).
 */
import type { AboutContent } from "./type";
import { site } from "../config";

export const about: AboutContent = {
  avatar: {
    src: "/images/avatar.jpg",
    alt: "پرتره‌ی آرین رضایی",
    width: 400,
    height: 400,
  },
  name: site.name,
  headline: "توسعه‌دهنده‌ی فول‌استک و عاشق محصول‌سازی",
  bio: [
    "از سال ۱۳۹۴ با وب شروع کردم؛ اول با HTML و PHP ساده، بعد با همه‌چیز از دیتابیس تا طراحی رابط کاربری. امروز تمرکز اصلی‌ام ساخت محصولات مقیاس‌پذیر با React و TypeScript در فرانت و Go و Node در بک‌اند است.",
    "به‌جز کد، به تجربه‌ی کاربری و دسترس‌پذیری اهمیت می‌دهم؛ محصولی خوب است که هر کاربری با هر توانایی‌ای بتواند از آن استفاده کند. تجربه‌ام را در مقاله‌های تکنیکی و پروژه‌های متن‌بازم هم نشر می‌کنم.",
  ],
  focusKeyword: "عاشق جزئیات پوسته و مغز",
  facts: [
    { id: "location", field: "سکونت", value: site.location },
    { id: "experience", field: "سابقه", value: "۹+ سال" },
    { id: "education", field: "تحصیلات", value: "کارشناسی مهندسی کامپیوتر" },
    { id: "focus", field: "تمرکز", value: "محصولات وب فارسی‌زبان" },
  ],
  resume: site.resume,
} satisfies AboutContent;