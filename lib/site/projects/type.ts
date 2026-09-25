import { type ImageAsset, type TechTag } from "../shared";

/** یک دسته‌ی فیلتر پروژه. */
export interface ProjectCategory {
  /** کلید یکتا، فارسی کوتاه (مثل "web"). */
  id: string;
  /** برچسب فارسی روی تب. */
  label: string;
}

/** لینک‌های یک پروژه. */
export interface ProjectLinks {
  /** آدرس مخزن کد (اختیاری). */
  code?: string;
  /** آدرس دمو/محصول زنده (اختیاری). */
  live?: string;
}

/** یک پروژه‌ی نمونه‌کار. */
export interface Project {
  /** کلید یکتا. */
  id: string;
  /** نام کوتاه پاک‌سازی‌شده برای href/آدرس; می‌تواند لاتین باشد. */
  slug: string;
  /** عنوان فارسی پروژه. */
  title: string;
  /** دسته؛ باید یکی از ProjectCategory.id باشد. */
  categoryId: string;
  /** خلاصه‌ی کارت (یک‌پاراگراف). */
  summary: string;
  /** توضیح بلند داخل dialog. */
  longDescription: string;
  /** نقشی که در پروژه داشتید (داخل dialog و کارت). */
  role: string;
  /** فناوری‌های پروژه به‌عنوان نشان. */
  tech: TechTag[];
  /** تصویر پوشش؛ placeholder است و باید جایگزین شود. */
  image: ImageAsset;
  /** لینک‌های خارجی (اختیاری). */
  links?: ProjectLinks;
  /** فقط یکی true باشد؛ کارت ویژه با spotlight-card و اول نمایش داده می‌شود. */
  featured?: boolean;
}

/** کل محتوای پروژه‌ها. */
export interface ProjectsContent {
  /** برچسب بالای تیتر. */
  eyebrow: string;
  /** تیتر بخش. */
  title: string;
  /** توضیح کوتاه زیر تیتر. */
  description: string;
  /** دسته‌ها؛ شامل دسته‌ی «همه» در ابتدای فهرست. */
  categories: ProjectCategory[];
  /** شناسه‌ی دسته‌ی پیش‌فرض؛ معمولاً «همه». */
  defaultCategory: string;
  /** پروژه‌ها. */
  projects: Project[];
}