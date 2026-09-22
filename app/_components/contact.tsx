/*
 * ============================================================
 *  بخش تماس (Contact)
 *  این فایل فعلاً فقط برنامه‌ریزی است؛ هنوز هیچ کدی ندارد.
 * ============================================================
 *
 * ۱. Purpose (هدف)
 * ‌- پیام: «بزنید بریم» — دسترس‌پذیرترین راه رسیدن به من.
 * ‌- اقدام اصلی: پر کردن فرم و ارسال؛ پیام با POST به `/api/contact` می‌رود و با nodemailer ایمیل می‌شود.
 *
 * ۲. VibeFarsi components (کامپوننت‌ها) — همه تأییدشده در رجیستری
 * ‌- input (ui/input): فیلدهای نام/ایمیل. add: input
 * ‌- textarea (ui/textarea): پیام با autoResize + showCount و maxLength=1000. add: textarea
 * ‌- phone-input (ui/phone-input): شمارهٔ موبایل ایران؛ onChange دادهٔ ۱۰‌رقمی و معتبر می‌دهد. add: phone-input
 * ‌- form (ui/form): useForm + FormField برای اعتبارسنجی و aria-describedby. add: form
 * ‌- alert (ui/alert): هشدار زیر فرم: «فرم فعلاً نمایشی است؛ مستقیم ایمیل بزنید». add: alert
 * ‌- success-check (animations/success-check): حالت موفقیت بعد از «ارسال». add: success-check
 * ‌- toast (ui/toast): اعلان موفقیت/خطای ارسال. add: toast
 * ‌- dither (backgrounds/dither): پس‌زمینهٔ کم‌رنگ کل بخش (opacity~0.08). add: dither
 * ‌- آیکون‌های شبکه‌های اجتماعی از lucide به‌جای خود کامپوننت.
 *
 * ۳. Layout (چیدمان)
 * ‌- از بالا: eyebrow → تیتر → توضیح → شبکهٔ [info | فرم].
 * ‌- ستون راست (info): کارت «ایمیل مستقیم» + شبکه‌های اجتماعی + Alert یادآوری.
 * ‌- ستون چپ (فرم): فیلدها عمودی، دکمهٔ «ارسال» تمام‌عرض پایین.
 * ‌- RTL: اولین آیتم راست؛ دکمهٔ ارسال برند.
 *
 * ۴. Data (داده)
 * ‌- Data file: @/lib/site/contact/data .  Type: ContactContent (form.fields + strings).
 * ‌- contact.form.fields → فیلدها؛ هر فیلد با useForm schema (rules.required/mobile/email/minLength).
 * ‌- email → mailto؛ socials → لینک‌ها.
 *
 * ۵. Interaction and animation (تعامل و انیمیشن)
 * ‌- submit: handleSubmit → POST /api/contact → در موفقیت setSent(true) و toast success؛ در خطا toast error با پیام سرور.
 * ‌- Line validate: اولین خطای هر فیلد زیر همان فیلد (style از FormField). خطاها فقط بعد از touched.
 * ‌- ورود کارت‌ها با reveal پلکانی. add: reveal
 * ‌- دکمهٔ «ارسال» هنگام submitting: آیکون چرخان + متن «در حال ارسال…».
 * ‌- reduced-motion: reveal خنثی.
 *
 * ۶. States (حالت‌ها)
 * ‌- حالت ارسال: submitting؛ دکمه disabled.
 * ‌- حالت موفقیت: sent=true → SuccessCheck + پیام؛ دکمهٔ «ارسال پیام دیگر» برای reset.
 * ‌- حالت خطا: (در این نسخه کمتر پیش می‌آید) toast error و پیام Alert.
 * ‌- phone: نگه‌داشتن کاراکترهای عددی فیلترشده (اجازه به اسپیس/داش نمی‌دهد).
 *
 * ۷. Accessibility (دسترس‌پذیری)
 * ‌- <section aria-labelledby> + h2. هر ورودی با <label> که از data می‌آید.
 * ‌- FormField خودش aria-describedby برای error/hint می‌گذارد؛ Textarea شمارنده‌ی خودش را دارد.
 * ‌- دکمه‌ی ارسال type="submit". در حالت success نقش status.
 * ‌- لینک‌های اجتماعی بیرونی target="_blank" rel="noopener noreferrer" با نام فارسی به‌عنوان aria-label.
 *
 * ۸. Implementation notes (یادداشت پیاده‌سازی)
 * ‌- برای نمایش «فرم فعلاً نمایشی است» از Alert نوع info؛ چون صفحه دارد پس‌زمینهٔ dither، کل بخش relative و پس‌زمینه absolute.
 * ‌- مقادیر از `useForm` (نه controlled raw)؛ phone به‌صورت خاص با onChange دوآرگومانی.
 * ‌- ایمیل واقعاً ارسال می‌شود؛ برای اتصال SMTP متغیرهای محیطی را در .env.local از روی .env.example ببینید.
 * ‌- در صورت خطای سرور، پیام `error` از پاسخ JSON همان‌جا در toast نمایش داده می‌شود.
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpLeft, AtSign, Briefcase, GitBranch, Link2, LoaderCircle, Mail, Send } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SuccessCheck } from "@/components/animations/success-check";
import { DitherBackground } from "@/components/backgrounds/dither";
import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FormField, rules, useForm } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/toast";
import { contact } from "@/lib/site/contact/data";

type ContactValues = {
	name: string;
	email: string;
	phone: string;
	message: string;
	[key: string]: unknown;
};

const SOCIAL_ICONS: Record<string, typeof GitBranch> = {
	github: GitBranch,
	linkedin: Briefcase,
	telegram: Send,
	x: AtSign,
};

export default function Contact() {
	const { toast } = useToast();
	const [sent, setSent] = useState(false);

	const form = useForm<ContactValues>({
		initial: { name: "", email: "", phone: "", message: "" },
		schema: {
			name: [rules.required("نام خود را بنویسید")],
			email: [rules.required("ایمیل را بنویسید"), rules.email()],
			phone: [rules.mobile()],
			message: [rules.required("پیام را بنویسید"), rules.minLength(10, "پیام باید حداقل ۱۰ کاراکتر باشد")],
		},
		onSubmit: async (values) => {
			try {
				const res = await fetch("/api/contact", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ name: values.name, email: values.email, phone: values.phone, message: values.message }),
				});
				const data = (await res.json()) as { ok?: boolean; error?: string };
				if (!res.ok || !data.ok) {
					throw new Error(data.error ?? "ارسال ناموفق بود");
				}
				setSent(true);
				toast({ variant: "success", title: contact.form.successTitle, description: contact.form.successDescription });
			} catch (error) {
				toast({
					variant: "error",
					title: contact.form.errorTitle,
					description: error instanceof Error ? error.message : contact.form.errorDescription,
				});
			}
		},
	});

	const fieldByName = (name: string) => contact.form.fields.find((f) => f.name === name);
	const nameField = form.field("name");
	const emailField = form.field("email");
	const phoneField = form.field("phone");
	const messageField = form.field("message");

	return (
		<section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-16 sm:py-24">
			<DitherBackground opacity={0.08} className="absolute inset-0" />
			<div className="container relative mx-auto px-4">
				<Reveal>
					<div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
						<Badge variant="brand">{contact.eyebrow}</Badge>
						<h2 id="contact-title" className="text-2xl sm:text-3xl font-bold leading-tight">
							{contact.title}
						</h2>
						<p className="text-sm leading-7 text-muted-foreground">{contact.description}</p>
					</div>
				</Reveal>

				<div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
					<Reveal delay={100} className="h-full">
						<div className="flex h-full flex-col gap-4">
							<a
								href={`mailto:${contact.email}`}
								className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-brand/40"
							>
								<span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
									<Mail className="size-5" />
								</span>
								<span className="min-w-0 space-y-1">
									<span className="block text-xs text-muted-foreground">ایمیل</span>
									<span dir="ltr" className="block truncate text-sm font-medium text-foreground group-hover:text-brand">
										{contact.email}
									</span>
								</span>
							</a>

							<div className="flex flex-wrap gap-2">
								{contact.socials.map((social) => {
									const Icon = social.icon ?? SOCIAL_ICONS[social.id] ?? Link2;
									return (
										<Link
											key={social.id}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`${social.label} (در تب جدید)`}
											className="group inline-flex items-center rounded-xl border border-border bg-card px-3 py-2 text-sm transition-colors hover:border-brand/40 hover:text-brand"
										>
											<Icon className="size-4 shrink-0 me-2" />
											{social.label}
											<ArrowUpLeft className="size-0 ms-0 transition-all group-hover:ms-2 group-hover:size-3.5 text-muted-foreground" />
										</Link>
									);
								})}
							</div>

							<Alert variant="info">{contact.responseNote}</Alert>
						</div>
					</Reveal>

					<Reveal delay={180} className="h-full">
						<div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
							{sent ? (
								<div className="flex flex-col items-center gap-3 py-10 text-center">
									<SuccessCheck size={80} />
									<p className="text-lg font-bold">{contact.form.successTitle}</p>
									<p className="text-sm text-muted-foreground">{contact.form.successDescription}</p>
									<Button
										variant="ghost"
										className="mt-2 cursor-pointer"
										onClick={() => {
											setSent(false);
											form.reset();
										}}
									>
										ارسال پیام دیگر
									</Button>
								</div>
							) : (
								<form className="space-y-4" onSubmit={form.handleSubmit} noValidate>
									<FormField
										label={fieldByName("name")?.label ?? "نام"}
										htmlFor={nameField.id}
										required={fieldByName("name")?.required}
										error={nameField.error}
										hint={fieldByName("name")?.hint}
									>
										<Input
											id={nameField.id}
											name={nameField.name}
											value={nameField.value as string}
											onChange={nameField.onChange}
											onBlur={nameField.onBlur}
											placeholder={fieldByName("name")?.placeholder}
											aria-invalid={nameField.error ? true : undefined}
										/>
									</FormField>

									<FormField
										label={fieldByName("email")?.label ?? "ایمیل"}
										htmlFor={emailField.id}
										required={fieldByName("email")?.required}
										error={emailField.error}
										hint={fieldByName("email")?.hint}
									>
										<Input
											id={emailField.id}
											name={emailField.name}
											type="email"
											dir="ltr"
											value={emailField.value as string}
											onChange={emailField.onChange}
											onBlur={emailField.onBlur}
											placeholder={fieldByName("email")?.placeholder}
											aria-invalid={emailField.error ? true : undefined}
										/>
									</FormField>

									<FormField
										label={fieldByName("phone")?.label ?? "موبایل"}
										htmlFor={phoneField.id}
										required={fieldByName("phone")?.required}
									>
										<PhoneInput
											id={phoneField.id}
											value={phoneField.value as string}
											onChange={(digits) => form.setValue("phone", digits)}
										/>
									</FormField>

									<FormField
										label={fieldByName("message")?.label ?? "پیام"}
										htmlFor={messageField.id}
										required={fieldByName("message")?.required}
										error={messageField.error}
										hint={fieldByName("message")?.hint}
									>
										<Textarea
											id={messageField.id}
											name={messageField.name}
											value={messageField.value as string}
											onChange={messageField.onChange}
											onBlur={messageField.onBlur}
											placeholder={fieldByName("message")?.placeholder}
											maxLength={fieldByName("message")?.maxLength}
											autoResize
											showCount
											aria-invalid={messageField.error ? true : undefined}
										/>
									</FormField>

									<Button variant="brand" size="lg" type="submit" className="w-full cursor-pointer" disabled={form.submitting}>
										{form.submitting && <LoaderCircle className="size-4 animate-spin" />}
										{form.submitting ? contact.form.pendingLabel : contact.form.submitLabel}
									</Button>
								</form>
							)}
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}