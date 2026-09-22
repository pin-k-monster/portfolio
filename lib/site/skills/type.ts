/**
 * تایپ‌های بخش مهارت‌ها (این فایل کد واقعی است).
 */

import { LucideIcon } from "lucide-react";

/** سطح مهارت؛ فقط برچسب نمایشی است، نه درصد. */
export type Proficiency = "مقدماتی" | "مسلط" | "آشنا";

/** یک مهارت/فناوری. */
export interface Skill {
  /** کلید یکتا. */
  id: string;
  /** نام نمایشی؛ می‌تواند لاتین باشد مثل "TypeScript". */
  name: string;
  /** سطح اختیاری؛ اگر نباشد مهارت به‌صورت خنثی نمایش داده می‌شود. */
  proficiency?: Proficiency;
}

/** یک دسته‌ی مهارتی؛ در یک کارت جدا نمایش داده می‌شود. */
export interface SkillGroup {
  /** کلید یکتا. */
  id: string;
  /** آیکون */
  icon: LucideIcon;
  /** عنوان فارسی دسته. */
  title: string;
  /** مهارت‌های درون دسته. */
  skills: Skill[];
}

/** کل محتوای مهارت‌ها. */
export interface SkillsContent {
  /** برچسب بالای تیتر بخش. */
  eyebrow: string;
  /** تیتر بخش. */
  title: string;
  /** نوار متحرک بالا: نام فناوری‌ها به‌صورت تکراری برای marquee. */
  marquee: string[];
  /** دسته‌های مهارتی. */
  groups: SkillGroup[];
}