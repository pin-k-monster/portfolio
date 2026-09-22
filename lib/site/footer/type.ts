/**
 * تایپ‌های بخش فوتر (این فایل کد واقعی است).
 */
import type { NavItem } from "../navbar/type";

/** یک ستون لینک در فوتر. */
export interface FooterColumn {
  /** عنوان ستون. */
  title: string;
  /** لینک‌های ستون (بی‌نام). */
  links: { label: string; href: string }[];
}

/** کل محتوای فوتر. */
export interface FooterContent {
  /** نام برند/لوگو. */
  brand: string;
  /** یک‌خط درباره‌ی برند. */
  about: string;
  /** عنوان ستون پیمایش. */
  navTitle: string;
  /** آیتم‌های پیمایش (از navbar تا لنگرها یکسان بمانند). */
  nav: NavItem[];
  /** ستون‌های لینک اضافی. */
  columns: FooterColumn[];
  /** عنوان ستون تماس. */
  contactTitle: string;
  /** ایمیل مستقیم (از config). */
  email: string;
  /** عنوان ستون شبکه‌های اجتماعی. */
  socialsTitle: string;
  /** متن کپی‌رایت با سال شمسی: مثل «۱۴۰۵ © آرین رضایی». */
  copyright: string;
  /** قدردانی/اعتبار ساخت. */
  credit: string;
}