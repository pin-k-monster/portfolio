/**
 * محتوای نوبار (این فایل کد واقعی است).
 * دکمه‌ی CTA از پیکربندی مرکزی می‌آید تا با فوتر/CTA هماهنگ بماند.
 */
import type { NavbarContent } from "./type";
import { site } from "../config";

export const navbar: NavbarContent = {
  items: [
    { id: "about", label: "درباره", href: "#about" },
    { id: "skills", label: "مهارت‌ها", href: "#skills" },
    { id: "experience", label: "تجربه", href: "#experience" },
    { id: "projects", label: "پروژه‌ها", href: "#projects" },
    { id: "milestones", label: "دستاوردها", href: "#milestones" },
    { id: "open-source", label: "متن‌باز", href: "#open-source" },
    { id: "writing", label: "مقالات", href: "#writing" },
    { id: "contact", label: "تماس", href: "#contact" },
  ],
  cta: site.resume,
  mobileMenuTitle: "فهرست",
} satisfies NavbarContent;