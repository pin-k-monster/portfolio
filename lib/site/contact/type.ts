/**
 * تایپ‌های بخش تماس (این فایل کد واقعی است).
 * فرم اینجا با `useForm` + `FormField` رجیستری ساخته می‌شود؛
 * این فیلدها توصیف formula هستند تا کامپوننت schema را بسازد (بدون منطق در data).
 */
import type { SocialLink } from "../shared";

/** نوع فیلد ورودی. */
export type ContactFieldType = "text" | "email" | "tel" | "textarea";

/** توصیف یک فیلد فرم. */
export interface ContactField {
  /** نام فیلد در state فرم (لاتین). */
  name: string;
  /** برچسب فارسی. */
  label: string;
  /** placeholder فارسی. */
  placeholder?: string;
  /** راهنمای کوچک زیر فیلد. */
  hint?: string;
  /** الزامی بودن (برای ساخت rule های required). */
  required?: boolean;
  /** نوع فیلد؛ "tel" یعنی phone-input رجیستری و بقیه input ساده. */
  type: ContactFieldType;
  /** حداکثر طول؛ تعداد کاراکتر برای textarea (در بقیه null). */
  maxLength?: number;
}

/** متن‌های فرم. */
export interface ContactFormText {
  /** برچسب فیلدها. */
  fields: ContactField[];
  /** متن دکمه‌ی ارسال. */
  submitLabel: string;
  /** متن دکمه هنگام «در حال ارسال». */
  pendingLabel: string;
  /** عنوان اعلان موفقیت (toast). */
  successTitle: string;
  /** متن اعلان موفقیت (toast). */
  successDescription: string;
  /** عنوان اعلان خطا. */
  errorTitle: string;
  /** متن اعلان خطا. */
  errorDescription: string;
}

/** کل محتوای تماس. */
export interface ContactContent {
  /** برچسب بالای تیتر. */
  eyebrow: string;
  /** تیتر بخش. */
  title: string;
  /** توضیح در ستون کنار فرم. */
  description: string;
  /** ایمیل مستقیم (از config). */
  email: string;
  /** یادداشت زمان پاسخ. */
  responseNote: string;
  /** متن فرم (فیلدها + دکمه‌ها + پیام‌ها). */
  form: ContactFormText;
  /** شبکه‌های اجتماعی (از config). */
  socials: SocialLink[];
}