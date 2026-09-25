import type { CtaContent } from "./type";
import { site } from "../config";

export const cta: CtaContent = {
  title: "به دنبال نیرویی برای تیم خود هستید؟",
  description: "من آماده‌ام درباره‌ی جای خالی، پروژه یا همکاری با شما صحبت کنم.",
  action: site.resume,
  note: "رزومه‌ی PDF · به‌روزرسانی ۱۴۰۵",
} satisfies CtaContent;