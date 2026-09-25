import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names. `clsx` resolves conditionals/arrays/objects and
 * `tailwind-merge` drops earlier classes that conflict with later ones, so a
 * `className` passed by a caller reliably overrides a component's own default.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

const FA_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

/** Convert Latin digits to Persian ones: `1405` -> `۱۴۰۵`. */
export function fa(value: string | number): string {
  return String(value).replace(/\d/g, (d) => FA_DIGITS[Number(d)]);
}

/** Convert Persian (and Arabic-Indic) digits back to Latin, for parsing user input. */
export function en(value: string): string {
  return value
    .replace(/[۰-۹]/g, (d) => String(FA_DIGITS.indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660));
}

/** Thousands-separated Persian number: `12450000` -> `۱۲٬۴۵۰٬۰۰۰`. */
export function faNumber(value: number): string {
  return fa(Math.round(value).toLocaleString("en-US")).replace(/,/g, "٬");
}

/** Toman amount with its unit: `12450000` -> `۱۲٬۴۵۰٬۰۰۰ تومان`. */
export function formatToman(value: number): string {
  return `${faNumber(value)} تومان`;
}

/** Persian percent sign and digits: `18` -> `۱۸٪`. */
export function faPercent(value: number, digits = 0): string {
  return `${fa(value.toFixed(digits))}٪`;
}

/** Human-readable file size: `1258291` -> `۱٫۲ مگابایت`. */
export function faFileSize(bytes: number): string {
  if (bytes < 1024) return `${fa(bytes)} بایت`;
  if (bytes < 1024 ** 2) return `${fa((bytes / 1024).toFixed(0))} کیلوبایت`;
  return `${fa((bytes / 1024 ** 2).toFixed(1)).replace(".", "٫")} مگابایت`;
}
