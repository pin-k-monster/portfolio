import { Send } from "lucide-react";
import type { SocialLink } from "./shared";

/**
 * Global identity of the site. This is the one file every section imports from,
 * so changing your name, e-mail or social links only has to happen here.
 */
export interface SiteConfig {
  /** Full name. Used in the navbar logo, hero, contact e-mail and metadata. */
  name: string;
  /** BCP-47 tag, emitted as `<html lang>` and as the `og:locale` value. */
  locale: string;
  /** City and country. */
  location: string;
  /** Direct contact details. `email` is the contact-form inbox and the `mailto:` target. */
  contact: {
    email: string;
  };
  /**
   * Résumé download. `href` must point at a real file — by convention
   * `/public/resume.pdf`. The same object powers the navbar CTA, the hero
   * button, the about button and the closing CTA.
   */
  resume: {
    label: string;
    href: string;
    download: true;
  };
  /** Social profiles, rendered in the navbar sheet, contact section and footer. */
  socials: SocialLink[];
  /**
   * SEO inputs. `url` is the production origin and is required for absolute
   * Open Graph URLs; `ogImage` is the social preview image (1200x630).
   */
  seo: {
    /** `<title>` of the page. */
    title: string;
    /** Meta description, roughly 150-160 characters. */
    description: string;
    /** Comma-separated keywords. */
    keywords: string[];
    /** Production origin, e.g. `https://example.com`. No trailing slash. */
    url: string;
    /** Path to the social preview image inside `/public`. */
    ogImage: string;
  };
}

export const site: SiteConfig = {
  name: "کیارش جمالی",
  locale: "fa_IR",
  location: "تهران، ایران",
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
    title: "کیارش جمالی | توسعه‌دهنده‌ی فول‌استک",
    description:
      "نمونه‌کار و رزومه‌ی آنلاین کیارش جمالی؛ توسعه‌دهنده‌ی فول‌استک وب با تمرکز بر محصولات فارسی‌زبان، تجربه‌ی کاربری و کارایی بالا.",
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
    ogImage: "/og.png",
  },
};
