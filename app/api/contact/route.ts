import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/site/config";
import {
  CONTACT_MESSAGES,
  normalizeContactValues,
  validateContact,
  type ContactErrorCode,
} from "@/lib/site/contact/validation";

export const runtime = "nodejs";

/**
 * In-memory rate limit, per IP. Enough to stop a casual spam script on a single
 * server; swap for Redis or your platform's rate limiter when running multiple
 * instances, because each instance keeps its own counters.
 */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimit(key: string): { allowed: boolean; retryAfter: number } {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    // Opportunistic cleanup so the map cannot grow without bound.
    if (hits.size > 1000) {
      for (const [k, v] of hits) if (now > v.resetAt) hits.delete(k);
    }
    return { allowed: true, retryAfter: 0 };
  }

  entry.count += 1;
  if (entry.count > MAX_PER_WINDOW) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }
  return { allowed: true, retryAfter: 0 };
}

function clientKey(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function fail(code: ContactErrorCode, status: number, headers?: HeadersInit) {
  return Response.json({ ok: false, code, error: CONTACT_MESSAGES[code] }, { status, headers });
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
  const limit = rateLimit(clientKey(request));
  if (!limit.allowed) {
    return fail("rate-limited", 429, { "Retry-After": String(limit.retryAfter) });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return fail("invalid-body", 400);
  }
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return fail("invalid-body", 400);
  }

  // Same module the browser form validates against.
  const code = validateContact(body as Record<string, unknown>);
  if (code) return fail(code, 400);

  const transporter = buildTransporter();
  if (!transporter) return fail("smtp-unconfigured", 500);

  const { name, email, phone, message } = normalizeContactValues(body as Record<string, never>);
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    message: escapeHtml(message),
  };

  const subject = `پیام جدید از ${name}`;
  const text = [`نام: ${name}`, `ایمیل: ${email}`, `موبایل: ${phone || "—"}`, "", "پیام:", message].join("\n");

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
    return fail("send-failed", 500);
  }
}
