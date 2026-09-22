/*
 * ============================================================
 *  فراخوان پایانی (CTA)
 *  این فایل فعلاً فقط برنامه‌ریزی است؛ هنوز هیچ کدی ندارد.
 * ============================================================
 *
 * ۱. Purpose (هدف)
 * ‌- پیام: یک اقدام جمع‌کننده و گرم برای پایان صفحه — «به دنبال نیرو هستید؟».
 * ‌- اقدام اصلی: دانلود رزومه (هم‌عنوان نوبار؛ بار آخر صفحه).
 *
 * ۲. VibeFarsi components (کامپوننت‌ها)
 * ‌- cta (blocks/cta): بلاک آماده، اما دکمهٔ آن `Button` خام بدون href/download است؛
 * ‌    برای لینک دانلود باید همان کلاس‌ها را خودمان سازیم. add: cta
 * ‌- shine-button (animations/shine-button): دکمهٔ برند با درخشش (مانند نوبار). add: shine-button
 * ‌- به‌جای وابسته بودن به بلاک cta، بن­ر (rounded-3xl + card + هالهٔ brand) را بازتولید می‌کنیم.
 *
 * ۳. Layout (چیدمان)
 * ‌- بنر تمام‌عرض: rounded-3xl border bg-card، وسط‌چین، هالهٔ radial-gradient brand از بالا.
 * ‌- اجزا: title (h2) → description → ShineButton (پیچیده در Link به resume) → note کوچک.
 * ‌- RTL: متن و هاله در راست/بالا طبیعی؛ بدون فلش جهت‌دار مشکلی نیست.
 *
 * ۴. Data (داده)
 * ‌- Data file: @/lib/site/cta/data .  Type: CtaContent.
 * ‌- action.href/resume → لینک ShineButton؛ download از config.resume.
 *
 * ۵. Interaction and animation (تعامل و انیمیشن)
 * ‌- ورود پی‌درپی: Reveal کل بنر + delay برای note. add: reveal
 * ‌- shine-button خودش حرکت درخشش دارد؛ بدون hover اضافه.
 * ‌- reduced-motion: reveal خنثی.
 *
 * ۶. States (حالت‌ها)
 * ‌- بدون state؛ بعد از کلیک، دانلود فایل رزومه آغاز می‌شود.
 *
 * ۷. Accessibility (دسترس‌پذیری)
 * ‌- <section aria-labelledby> + h2. دکمه لینک واقعی (shallow Link) با aria-label از cta.action.label.
 *
 * ۸. Implementation notes (یادداشت پیاده‌سازی)
 * ‌- چون CtaBlock برای «دانلود فایل» مناسب نیست، بنر را دستی می‌سازیم و فقط ظاهر آن را حفظ می‌کنیم.
 */

import { DownloadCloud } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { ShineButton } from "@/components/animations/shine-button";
import { cta } from "@/lib/site/cta/data";

export default function Cta() {
	return (
		<section id="cta" aria-labelledby="cta-title" className="px-4 py-12 sm:px-6 sm:py-16">
			<Reveal>
				<div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-12">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0"
						style={{ background: "radial-gradient(60% 80% at 50% 0%, oklch(from var(--brand) l c h / 22%), transparent 70%)" }}
					/>
					<div className="relative">
						<h2 id="cta-title" className="text-3xl font-bold leading-tight sm:text-4xl">
							{cta.title}
						</h2>
						{cta.description && <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{cta.description}</p>}
						<div className="mt-8 flex justify-center">
							<Link href={cta.action.href} download={cta.action.download} aria-label={cta.action.label}>
								<ShineButton size="lg" className="cursor-pointer">
									{cta.action.label}
									<DownloadCloud />
								</ShineButton>
							</Link>
						</div>
						{cta.note && <p className="mt-4 text-xs text-muted-foreground">{cta.note}</p>}
					</div>
				</div>
			</Reveal>
		</section>
	);
}