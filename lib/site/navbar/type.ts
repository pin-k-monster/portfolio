import type { CtaLink } from "../shared";

/** شناسه‌ی بخش‌های یک‌صفحه‌ای. مقدار دقیقا با id هر section در نقشه‌ی صفحه یکی است. */
export type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "milestones"
  | "open-source"
  | "testimonials"
  | "writing"
  | "contact";

/** یک آیتم منوی نوبار. */
export interface NavItem {
  /** شناسه‌ی مقصد؛ برای نشان دادن بخش فعال هم استفاده می‌شود. */
  id: SectionId;
  /** متن فارسی منو. */
  label: string;
  /** آدرس لنگر؛ همیشه "#" + id. */
  href: string;
}

/** کل محتوای نوبار. */
export interface NavbarContent {
  /** ترتیب آیتم‌ها در دسکتاپ؛ در RTL اولین آیتم سمت راست است. */
  items: NavItem[];
  /** دکمه‌ی اقدام نوبار (دانلود رزومه). از config می‌آید. */
  cta: CtaLink;
  /** عنوان کشوی موبایل (sheet). */
  mobileMenuTitle: string;
}