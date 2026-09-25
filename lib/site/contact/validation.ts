import { isIranMobile } from "@/lib/persian";
import { fa } from "@/lib/utils";

/**
 * Contact form validation, shared by the browser form and the `/api/contact`
 * route so the two can never disagree. Change a message here and both sides
 * pick it up.
 */

/** The payload the contact form posts. */
export interface ContactValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

/** Field keys, in the order they are validated. */
export const CONTACT_FIELDS = ["name", "email", "phone", "message"] as const;

export type ContactFieldName = (typeof CONTACT_FIELDS)[number];

/** Shortest accepted message, in characters. */
export const MESSAGE_MIN_LENGTH = 10;

/** Every way a submission can be rejected. */
export type ContactErrorCode =
  | "invalid-body"
  | "name-required"
  | "email-required"
  | "email-invalid"
  | "phone-invalid"
  | "message-required"
  | "message-too-short"
  | "rate-limited"
  | "smtp-unconfigured"
  | "send-failed";

/** The user-facing text for each rejection reason. */
export const CONTACT_MESSAGES: Record<ContactErrorCode, string> = {
  "invalid-body": "بدنه‌ی درخواست معتبر نیست",
  "name-required": "نام خود را بنویسید",
  "email-required": "ایمیل را بنویسید",
  "email-invalid": "ایمیل معتبر نیست",
  "phone-invalid": "شماره‌ی موبایل معتبر نیست",
  "message-required": "پیام را بنویسید",
  "message-too-short": `پیام باید حداقل ${fa(MESSAGE_MIN_LENGTH)} کاراکتر باشد`,
  "rate-limited": "تعداد درخواست‌ها زیاد است؛ کمی بعد دوباره تلاش کنید.",
  "smtp-unconfigured": "ارسال ایمیل روی سرور تنظیم نشده است؛ لطفاً مستقیم ایمیل بزنید.",
  "send-failed": "ارسال ایمیل ناموفق بود؛ کمی بعد دوباره تلاش کنید یا مستقیم ایمیل بزنید.",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Per-field rule; returns the rejection code or `null` when the value passes. */
export const contactFieldRules: Record<ContactFieldName, (value: unknown) => ContactErrorCode | null> = {
  name: (value) => (typeof value === "string" && value.trim() ? null : "name-required"),
  email: (value) => {
    if (typeof value !== "string" || !value.trim()) return "email-required";
    return EMAIL_RE.test(value.trim()) ? null : "email-invalid";
  },
  // Optional: an empty value is accepted, a filled one must be a real mobile.
  phone: (value) => {
    if (typeof value !== "string" || !value.trim()) return null;
    return isIranMobile(value) ? null : "phone-invalid";
  },
  message: (value) => {
    if (typeof value !== "string" || !value.trim()) return "message-required";
    return value.trim().length >= MESSAGE_MIN_LENGTH ? null : "message-too-short";
  },
};

/** Runs every field rule in order and returns the first failure. */
export function validateContact(values: Partial<Record<ContactFieldName, unknown>>): ContactErrorCode | null {
  for (const field of CONTACT_FIELDS) {
    const code = contactFieldRules[field](values[field]);
    if (code) return code;
  }
  return null;
}

/** Trims and coerces an unknown payload into the shape the e-mail template needs. */
export function normalizeContactValues(values: Record<ContactFieldName, unknown>): ContactValues {
  return {
    name: String(values.name ?? "").trim(),
    email: String(values.email ?? "").trim(),
    phone: String(values.phone ?? "").trim(),
    message: String(values.message ?? "").trim(),
  };
}
