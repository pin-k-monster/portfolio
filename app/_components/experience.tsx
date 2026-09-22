/*
 * ============================================================
 *  بخش تجربه (Experience)
 *  این فایل فعلاً فقط برنامه‌ریزی است؛ هنوز هیچ کدی ندارد.
 * ============================================================
 *
 * ۱. Purpose (هدف)
 * ‌- پیام: سوابق حرفه‌ای معتبر و نتیجه‌گرا؛ نشان می‌دهد «چه کرده‌ام» نه «کجا بوده‌ام».
 * ‌- اقدام اصلی: اعتماد برای تماس/رزومه.
 *
 * ۲. VibeFarsi components (کامپوننت‌ها) — همه تأییدشده در رجیستری
 * ‌- timeline (ui/timeline): ریل راست‌چین با نقطه و تاریخ شمسی. آیتم‌ها {date|string, title, description}.
 * ‌    add: timeline → (با regDep خودش lib/jalali را می‌آورد)
 * ‌- badge (ui/badge): نشان فناوری‌ها زیر هر سمت. add: badge
 * ‌- button (ui/button) یا anchor ساده برای لینک شرکت. add: button
 *
 * ۳. Layout (چیدمان)
 * ‌- ساختار: eyebrow → تیتر → لیست عمودی timeline؛ هر آیتم شامل:
 * ‌    عنوان (= role + شرکت؛ که روی ریل title است)، تاریخِ شمسی آماده (date = period.label)،
 * ‌    و description که شامل summary + نکات پیروزی‌ها (bullets) + نشان‌های tech است.
 * ‌- ریل timeline با activeIndex=0 (جدیدترین سمت) برجسته شود.
 * ‌- حداکثر عرض ستون ~768px؛ انعطاف‌پذیر موبایل.
 *
 * ۴. Data (داده)
 * ‌- Data file: @/lib/site/experience/data .  Type: ExperienceContent (از ./type).
 * ‌- items[] → Timeline.items؛ period.label → date؛ نقش title = `${role} — ${company}`؛
 * ‌- summary/points → description؛ stack → نشان‌ها؛ companyUrl → لینک شرکت.
 *
 * ۵. Interaction and animation (تعامل و انیمیشن)
 * ‌- هر آیتم با reveal پلکانی (delay = index*120ms) ظاهر شود. add: reveal
 * ‌- hover روی item: پس‌زمینه‌ی کارت بسیار ملایم (bg-card/40).
 * ‌- بدون انیمیشن تعداد دیگر؛ تاریخ استاتیک است. reduced-motion: فقط reveal غیرفعال.
 *
 * ۶. States (حالت‌ها)
 * ‌- سمت فعلی (end: null در data) با نشان/border «فعال» مشخص شود (مثل activeIndex در خود timeline +
 * ‌    برچسب brand «هم‌اکنون»).
 * ‌- لینک شرکت شکسته → فقط متن نمایش داده شود.
 *
 * ۷. Accessibility (دسترس‌پذیری)
 * ‌- <section aria-labelledby> + h2. فهرست آیتم‌ها را سلسله‌مراتبی (ol یا ul ساده) ببینید.
 * ‌- داده‌ها توسط Timeline پایه رندر می‌شوند؛ header برای نقطه‌ها aria-hidden.
 * ‌- لینک شرکت target="_blank" + rel="noopener noreferrer".
 *
 * ۸. Implementation notes (یادداشت پیاده‌سازی)
 * ‌- period.label از قبل شمسی/فارسی است و از داده می‌آید؛ فرمت نزنید. تاریخ‌های Date فقط برای آینده/ترتیب‌بندی هستند.
 * ‌- نکات پیروزی‌ها را با ۳–‌‌۴ بولت و بدون زیاده‌گویی در description بگذارید.
 * ‌- هماهنگی با بخش projects: مهارت‌های مشترک ممکن است تکرار شوند؛ نگران نباشید.
 */

import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/site/experience/data";

export default function Experience() {
	return (
		<section id="experience" aria-labelledby="experience-title" className="pb-16 sm:pb-24">
			<div className="container mx-auto px-4">
				<Reveal>
					<div className="flex flex-col">
						<Badge variant="brand">{experience.eyebrow}</Badge>
						<h2 id="experience-title" className="text-2xl sm:text-3xl font-bold leading-tight">
							{experience.title}
						</h2>
					</div>
				</Reveal>

				<ul className="relative grid grid-cols-1 xl:grid-cols-2 mt-6">
					{experience.items.map((job, index) => {
						const isCurrent = job.period.end === null;
						return (
							<li key={job.id} className="relative">
								<Reveal delay={index * 120} className="p-5 border-muted border hover:bg-muted cursor-default transition-colors">
									<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
										<h3 className="text-sm font-bold text-foreground sm:text-base">{job.role}</h3>
										<span className="text-muted-foreground">—</span>
										{job.companyUrl ? (
											<Link
												href={job.companyUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm font-medium text-brand transition-colors hover:text-brand/80 hover:underline"
											>
												{job.company}
											</Link>
										) : (
											<span className="text-sm font-medium text-muted-foreground">{job.company}</span>
										)}
										{isCurrent && <Badge variant="success" className="ms-auto rounded-full bg-success/10 text-success px-3 border-success/25 border">
											هم‌اکنون
										</Badge>}
									</div>
									<p className="mt-1 text-[11px] text-muted-foreground">
										{job.period.label}
										{job.location ? ` · ${job.location}` : ""}
									</p>

									<p className="mt-2 text-sm leading-6 text-muted-foreground">{job.summary}</p>

									<ul className="mt-3 space-y-1.5">
										{job.points.map((point, pointIndex) => (
											<li key={pointIndex} className="flex items-start gap-2 text-sm leading-6 text-foreground/80">
												<BadgeCheck className="mt-1.5 size-4 shrink-0 text-brand" />
												<span>{point}</span>
											</li>
										))}
									</ul>

									<ul className="mt-4 flex flex-wrap gap-1.5" dir="ltr">
										{job.stack.map((tech) => (
											<li key={tech.id}>
												<Badge variant="outline" className="text-muted-foreground">
													{tech.name}
												</Badge>
											</li>
										))}
									</ul>
								</Reveal>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}