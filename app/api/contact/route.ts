/**
 * ارسال پیام فرم تماس (این فایل کد واقعی است).
 * اعتبارسنجی سمت سرور + ارسال ایمیل با nodemailer از طریق متغیرهای محیطی.
 * بدون تنظیم SMTP در .env، با خطای واضح ۵۰۰ پاسخ می‌دهد تا چیزی «الکی» نرسد.
 */
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { isIranMobile } from "@/lib/persian";
import { site } from "@/lib/site/config";

export const runtime = "nodejs";

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
}

function isEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isText(value: unknown, min = 1): value is string {
  return typeof value === "string" && value.trim().length >= min;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** چک اولیه‌ی فیلدها؛ پیام خطا همان پیام‌های سمت کلاینت باشد برای یکدستی. */
function validate(body: Partial<ContactPayload>): string | null {
  if (!isText(body.name)) return "نام خود را بنویسید";
  if (!isEmail(body.email)) return "ایمیل معتبر نیست";
  if (typeof body.phone === "string" && body.phone && !isIranMobile(body.phone)) return "شماره‌ی موبایل معتبر نیست";
  if (!isText(body.message, 10)) return "پیام باید حداقل ۱۰ کاراکتر باشد";
  return null;
}

function buildTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });
}

export async function POST(request: NextRequest) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ ok: false, error: "بدنه‌ی درخواست معتبر نیست" }, { status: 400 });
  }

  const invalid = validate(body);
  if (invalid) {
    return Response.json({ ok: false, error: invalid }, { status: 400 });
  }

  const transporter = buildTransporter();
  if (!transporter) {
    return Response.json(
      { ok: false, error: "سرور ایمیل تنظیم نشده است؛ با پیکربندی SMTP تماس بگیرید." },
      { status: 500 },
    );
  }

  const name = String(body.name).trim();
  const email = String(body.email).trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message).trim();
  const safe = { name: escapeHtml(name), email: escapeHtml(email), phone: escapeHtml(phone), message: escapeHtml(message) };

  const subject = `پیام جدید از ${name}`;
  const text = [
    `نام: ${name}`,
    `ایمیل: ${email}`,
    `موبایل: ${phone || "—"}`,
    "",
    `پیام:`,
    message,
  ].join("\n");

  const html = `<!doctype html><html dir="rtl" lang="fa"><body style="margin:0;padding:24px;font-family:Tahoma,Arial,sans-serif;background:#f4f4f5;color:#18181b">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
    <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e4e4e7">
      <tr><td style="padding:20px 24px;background:#111113;color:#fafafa;font-size:15px;font-weight:bold">
        ${escapeHtml(site.name)} — پیام جدید از فرم تماس
      </td></tr>
      <tr><td style="padding:24px">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr><td style="padding:6px 0;font-size:13px;color:#71717a">نام</td></tr>
          <tr><td style="padding:0 0 14px;font-size:14px;color:#18181b">${safe.name}</td></tr>
          <tr><td style="padding:6px 0;font-size:13px;color:#71717a">ایمیل</td></tr>
          <tr><td dir="ltr" style="padding:0 0 14px;font-size:14px;color:#18181b;text-align:left">${safe.email}</td></tr>
          ${phone ? `<tr><td style="padding:6px 0;font-size:13px;color:#71717a">موبایل</td></tr>
          <tr><td dir="ltr" style="padding:0 0 14px;font-size:14px;color:#18181b;text-align:left">${safe.phone}</td></tr>` : ""}
          <tr><td style="padding:6px 0;font-size:13px;color:#71717a">پیام</td></tr>
          <tr><td style="line-height:1.8;font-size:14px;color:#18181b;white-space:pre-wrap">${safe.message}</td></tr>
        </table>
      </td></tr>
    </table>
  </td></tr></table></body></html>`;

  try {
    await transporter.sendMail({
      from: `"${site.name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO ?? process.env.SMTP_USER,
      replyTo: email,
      subject,
      text,
      html,
    });
    return Response.json({ ok: true });
  } catch (error) {
    console.error("contact email failed:", error);
    return Response.json(
      { ok: false, error: "ارسال ایمیل ناموفق بود؛ کمی بعد دوباره تلاش کنید یا مستقیم ایمیل بزنید." },
      { status: 500 },
    );
  }
}