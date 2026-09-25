/*
 * ============================================================
 *  بخش نظرات مشتریان (Testimonials)
 * ============================================================
 *
 * ۱. Purpose (هدف)
 * ‌- پیام: آدم‌های واقعی پشت این اعداد و پروژه‌ها؛ اعتماد با صدای کارفرما.
 * ‌- اقدام اصلی: خواندن نظرها و رسیدن به بخش تماس.
 *
 * ۲. VibeFarsi components (کامپوننت‌ها)
 * ‌- card-stack (animations/card-stack): پشته‌ی کارت‌های نظر که هر چند ثانیه می‌چرخند. add: card-stack
 * ‌- testimonials (blocks/testimonials): شبکه‌ی کارت‌های نقل‌قول با ستاره و آواتار. add: testimonials
 * ‌- logo-cloud (blocks/logo-cloud): ردیف نام کارفرمایان زیر نظرها. add: logo-cloud
 * ‌- rating (ui/rating): امتیاز ستاره‌ای خواندنی در کارت خلاصه. add: rating
 * ‌- avatar/avatarGroup (ui/avatar): آواتارهای منتقدان در کارت خلاصه. add: avatar
 * ‌- aurora (backgrounds/aurora): لکه‌های نور برند که آرام حرکت می‌کنند. add: aurora
 * ‌- badge/separator برای برچسب‌ها و جداکننده‌ها.
 *
 * ۳. Layout (چیدمان)
 * ‌- از بالا: eyebrow → تیتر → توضیح → ردیف دو ستونه [پشته‌ی کارت | کارت خلاصه‌ی امتیاز] →
 * ‌    شبکه‌ی کامل نظرات → ردیف لوگوی مشتریان.
 * ‌- RTL: پشته‌ی کارت سمت راست؛ کارت خلاصه سمت چپ.
 */

import { Reveal } from "@/components/animations/reveal";
import { CardStack } from "@/components/animations/card-stack";
import { LogoCloud } from "@/components/blocks/logo-cloud";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Rating } from "@/components/ui/rating";
import { Separator } from "@/components/ui/separator";
import { testimonials } from "@/lib/site/testimonials/data";
import { AvatarHover } from "@/components/animations/avatar-hover";
import { ScanlinesBackground } from "@/components/backgrounds/scanlines";

export default function Testimonials() {
	const stackItems = testimonials.items.slice(0, 4).map((t) => (
		<div key={t.id} className="flex h-full flex-col gap-3 p-6">
			<Rating value={t.rating ?? 5} readOnly size="sm" />
			<blockquote className="line-clamp-6 flex-1 text-sm leading-7 text-foreground/90">«{t.quote}»</blockquote>
			<footer className="flex items-center gap-3 border-t border-border pt-3">
				<Avatar name={t.name} size="md" />
				<div className="min-w-0">
					<p className="truncate text-sm font-medium">{t.name}</p>
					<p className="truncate text-xs text-muted-foreground">
						{t.role}
						{t.company ? `، ${t.company}` : ""}
					</p>
				</div>
				{t.project && (
					<Badge variant="brand" className="ms-auto shrink-0 rounded-full bg-brand/10 px-2.5">
						{t.project}
					</Badge>
				)}
			</footer>
		</div>
	));

	return (
		<section id="testimonials" aria-labelledby="testimonials-title" className="relative overflow-hidden py-16 sm:py-24">
			<ScanlinesBackground  />
			<div className="relative z-10 container max-w-7xl mx-auto px-4">
				<Reveal>
					<div className="flex flex-col items-center gap-3 text-center">
						<Badge variant="brand">{testimonials.eyebrow}</Badge>
						<h2 id="testimonials-title" className="text-2xl sm:text-3xl font-bold leading-tight">
							{testimonials.title}
						</h2>
						<p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground">{testimonials.description}</p>
					</div>
				</Reveal>

				<div className="mt-10 grid grid-cols-1 xl:grid-cols-[1fr_1.5fr] items-stretch gap-6">
					<Reveal delay={100}>
						<div className="flex h-full items-center justify-center">
							<CardStack items={stackItems} interval={6000} className="h-72 w-full max-w-none!" />
						</div>
					</Reveal>

					<Reveal delay={200} className="h-full">
						<div className="flex h-full flex-col justify-center border border-border rounded-2xl bg-card/80 p-6 backdrop-blur-sm sm:p-8">
							<div className="flex flex-wrap items-end justify-between gap-4">
								<div>
									<p className="text-xs text-muted-foreground">{testimonials.averageLabel}</p>
									<p className="mt-1 text-5xl font-bold leading-none text-foreground">{testimonials.average}</p>
								</div>
								<div className="flex flex-col items-end gap-1.5">
									<Rating value={5} readOnly size="lg" />
									<p className="text-[11px] text-muted-foreground">{testimonials.ratingNote}</p>
								</div>
							</div>

							<Separator className="my-5" />

							<div className="grid grid-cols-3 gap-3 text-center">
								{testimonials.stats.map((s) => (
									<div key={s.id} className="rounded-xl bg-brand/10 px-2 py-3">
										<p className="text-xl font-bold text-brand sm:text-2xl">{s.value}</p>
										<p className="mt-1 text-[11px] leading-5 text-muted-foreground">{s.label}</p>
									</div>
								))}
							</div>

							<Separator className="my-5" />

							<div className="flex justify-between items-center">
								<p className="text-xs text-muted-foreground">{testimonials.avatarsLabel}</p>
								<AvatarHover
									people={testimonials.items.map((t) => ({ name: t.name }))}
									size="md"
								/>
							</div>
						</div>
					</Reveal>
				</div>

				<LogoCloud title={testimonials.clientsTitle} logos={testimonials.clients.map((c) => ({ name: c.name }))} />
			</div>
		</section>
	);
}
