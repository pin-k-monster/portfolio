import { Counter } from "@/components/animations/counter";
import { DitherBackground } from "@/components/backgrounds/dither";
import { Reveal } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";
import { milestones } from "@/lib/site/milestones/data";

export default function Milestones() {
	return (
		<section id="milestones" aria-labelledby="milestones-title" className="relative overflow-hidden py-16 sm:py-24">
			<DitherBackground opacity={0.08} />
			<div className="relative z-10 container mx-auto px-4">
				<Reveal>
					<div className="flex flex-col items-center text-center">
						<Badge variant="brand">{milestones.eyebrow}</Badge>
						<h2 id="milestones-title" className="mt-3 text-2xl sm:text-3xl font-bold leading-tight">
							{milestones.title}
						</h2>
					</div>
				</Reveal>

				<Reveal delay={150}>
					<dl className="relative mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
						{milestones.numbers.map((n) =>
							n.value !== 0 ? (
								<div
									key={n.id}
									className="flex cursor-default flex-col items-center justify-center gap-1 bg-background px-4 py-7 text-center transition-colors duration-200 hover:bg-card/60 sm:py-8"
								>
									<dt className="order-2 text-sm text-muted-foreground">{n.label}</dt>
									<dd className="order-1 m-0">
										<Counter to={n.value} unit={n.unit} className="text-3xl font-bold text-foreground" />
									</dd>
									<p className="order-3 mt-1 text-xs text-muted-foreground/80">{n.hint}</p>
								</div>
							) : null,
						)}
					</dl>
				</Reveal>

				<Reveal delay={250}>
					<ul className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center">
						{milestones.honors.map((h, index) => (
							<li key={h.id} className={`border-muted-foreground/35 ${index != milestones.honors.length - 1 ? "lg:border-e-2 pe-4" : "ps-4"} ${index != 0 ? "ps-4" : ""}`}>
								<Badge variant="outline">{h.text}</Badge>
							</li>
						))}
					</ul>
				</Reveal>
			</div>
		</section>
	);
}
