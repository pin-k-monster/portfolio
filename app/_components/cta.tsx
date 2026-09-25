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
