/**
 * محتوای دستاوردها (این فایل کد واقعی است).
 * value ها عدد لاتین‌اند چون counter مسئول فارسی‌سازی است (faNumber).
 */
import type { MilestonesContent } from "./type";

export const milestones: MilestonesContent = {
  eyebrow: "دستاوردها",
  title: "اعداد تا امروز",
  numbers: [
    { id: "years", value: 9, unit: "+", label: "سال تجربه‌ی حرفه‌ای", hint: "از ۱۳۹۴ تاکنون" },
    { id: "projects", value: 120, unit: "+", label: "پروژه و تسک تحویل‌شده", hint: "شامل سرویس‌های عمومی و داخلی" },
    { id: "code", value: 3000, unit: "+", label: "خط کد نوشته‌شده", hint: "در سرویس‌های تولیدی" },
    { id: "posts", value: 40, unit: "+", label: "مقاله و مطلب فنی", hint: "در وبلاگ و رسانه‌ها" },
  ],
  honors: [
    { id: "hackathon", text: "برنده‌ی هکاتون نوآوری تهران ۱۴۰۱" },
    { id: "speaker", text: "سخنران «همایش وب ایران» در دو دوره" },
    { id: "mentor", text: "مربی فنی برنامه‌ی کارآموزی اسنپ" },
    { id: "oss", text: "مشارکت‌کننده‌ی فعال در اکوسیستم متن‌باز" },
  ],
} satisfies MilestonesContent;