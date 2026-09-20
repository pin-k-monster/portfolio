/**
 * انواع مشترک میان چند بخش سایت.
 * این فایل کد واقعی است؛ از اینجا در type و data همه‌ی بخش‌ها import می‌شود.
 * قاعده‌ی کلی محتوا: همه‌ی رشته‌های نمایشی فارسی و با اعداد فارسی هستند، مگر در کامنت کنارشان صراحتاً گفته شود.
 */
import type { ComponentType } from "react";

/** یک تصویر در /public. در کامپوننت با `next/image` و صفات width/height واقعی رندر می‌شود. */
export interface ImageAsset {
  /** مسیر از /public: مثل "/images/projects/p1.jpg". (الزامی — فعلاً placeholder) */
  src: string;
  /** متن جایگزین فارسی، می‌تواند alt خالی برای تصاویر تزئینی باشد. (الزامی) */
  alt: string;
  /** عرض ذاتی پیکسل؛ اگر حذف باشد همانطور که بسازید یا `fill` + `sizes` بگذارید. */
  width?: number;
  /** ارتفاع ذاتی پیکسل. */
  height?: number;
}

/** دکمه/لینک «اقدام». */
export interface CtaLink {
  /** متن فارسی دکمه. */
  label: string;
  /** آدرس مقصد؛ برای لنگر مثل "#contact"، برای فایل مثل "/resume.pdf". (الزامی) */
  href: string;
  /** "_blank" برای لینک‌های بیرونی. */
  target?: string;
  /** کنار target=_blank: "noopener noreferrer". */
  rel?: string;
  /** برای دانلود رزومه true می‌شود. */
  download?: boolean;
}

/** لینک شبکه‌ی اجتماعی. آیکون به‌جای رشته، کامپوننت است تا جهت RTL و سایز SVG درست بماند (الگوی خود بلاک features). */
export interface SocialLink {
  /** کلید یکتا: "github" | "linkedin" | "telegram" | "x" */
  id: string;
  /** نام قابل خواندن فارسی برای tooltip/aria-label. */
  label: string;
  /** آدرس پروفایل. */
  href: string;
  /** کامپوننت آیکون lucide-react (مثل Github، Linkedin، Send، Twitter). */
  icon?: ComponentType<{ className?: string }>;
}

/** یک تگ/کلیدواژه‌ی فناوری. */
export interface TechTag {
  /** کلید یکتا بدون فاصله. */
  id: string;
  /** اسمی که نمایش داده می‌شود؛ می‌تواند لاتین باشد (مثل "Next.js"). مقدار نمایشی فقط. */
  name: string;
}