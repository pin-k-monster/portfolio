import { toJalali } from "@/lib/jalali";
import { fa } from "@/lib/utils";
import type { FooterContent } from "./type";
import { site } from "../config";

export const footer: FooterContent = {
  // The year is read at request time in Jalali, so the line can never go stale.
  copyright: `${fa(toJalali(new Date()).jy)} © ${site.name}`,
  credit: "ساخته‌شده با Next.js و VibeFarsi",
} satisfies FooterContent;
