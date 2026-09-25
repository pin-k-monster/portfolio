import type { ContactContent } from "./type";
import { site } from "../config";

export const contact: ContactContent = {
  eyebrow: "تماس",
  title: "بیایید پروژه‌ای بسازیم",
  description:
    "اگر ایده یا پروژه‌ای دارید — یا فقط می‌خواهید درباره‌ی فرصت همکاری صحبت کنیم — فرم زیر را پر کنید. معمولاً در کمتر از یک روز کاری پاسخ می‌دهم.",
  email: site.contact.email,
  responseNote: "پاسخ معمولاً تا ۲۴ ساعت. اطلاعات شما را به هیچ‌جا نمی‌فرستم.",
  form: {
    fields: [
      {
        name: "name",
        label: "نام و نام خانوادگی",
        placeholder: "مثلاً سارا محمدی",
        required: true,
        type: "text",
      },
      {
        name: "email",
        label: "ایمیل",
        placeholder: "you@example.com",
        required: true,
        type: "email",
      },
      {
        name: "phone",
        label: "شماره موبایل (اختیاری)",
        placeholder: "۰۹۱۲۳۴۵۶۷۸۹",
        hint: "پیش‌شماره و ۳-۳-۴ خودکار مرتب می‌شود.",
        type: "tel",
      },
      {
        name: "message",
        label: "پیام",
        placeholder: "درباره‌ی پروژه، بازه‌ی زمانی و بودجه‌ی تقریبی بنویسید…",
        required: true,
        type: "textarea",
        maxLength: 1000,
      },
    ],
    submitLabel: "ارسال پیام",
    pendingLabel: "در حال ارسال…",
    successTitle: "پیام شما رسید",
    successDescription: "ممنون! به‌زودی در ایمیل‌تان پاسخ می‌دهم.",
    errorTitle: "خطا در ارسال",
    errorDescription: "لطفاً دوباره تلاش کنید؛ یا مستقیم به ایمیل ایمیل بزنید.",
  },
  socials: site.socials,
} satisfies ContactContent;