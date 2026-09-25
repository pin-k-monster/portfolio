import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/site/experience/data";

/** Highlights Persian digits and percentages inside a bullet, to break up walls of text. */
function HighlightMetrics({ text }: { text: string }) {
	const pattern = /[۰-۹0-9][۰-۹0-9\.,٫٬٪+]*/g;
	const chunks: React.ReactNode[] = [];
	let last = 0;
	for (const match of text.matchAll(pattern)) {
		const idx = match.index!;
		if (idx > last) chunks.push(text.slice(last, idx));
		chunks.push(
			<span key={idx} className="font-bold text-brand">
				{match[0]}
			</span>,
		);
		last = idx + match[0].length;
	}
	if (last < text.length) chunks.push(text.slice(last));
	return <>{chunks}</>;
}

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
								<Reveal delay={index * 120} className="p-5 border-border border hover:bg-muted cursor-default transition-colors">
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
											<li key={pointIndex} className="flex items-start gap-2 text-sm leading-6 text-foreground/90">
												<BadgeCheck className="mt-1.5 size-4 shrink-0 text-brand" />
												<div>
													<HighlightMetrics text={point} />
												</div>
											</li>
										))}
									</ul>

									<ul className="mt-4 flex flex-wrap gap-1.5" dir="ltr">
										{job.stack.map((tech) => (
											<li key={tech.id}>
												<Badge variant="default" className="rounded-md border border-foreground/10 bg-border/60 px-2.5">
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
