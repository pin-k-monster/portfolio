import { ArrowLeft, FolderGit2, GitFork, Star } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { openSource } from "@/lib/site/open-source/data";
import { fa } from "@/lib/utils";

function ShowAllOpenSourceProjectsButton() {
	return (
		<Link href={openSource.githubCta.href} target={openSource.githubCta.target} rel={openSource.githubCta.rel}>
			<Button variant="outline" size="lg" className="cursor-pointer">
				{openSource.githubCta.label}
				<ArrowLeft />
			</Button>
		</Link>
	)
}

export default function OpenSource() {
	return (
		<section id="open-source" aria-labelledby="open-source-title" className="py-16 sm:py-24">
			<div className="container mx-auto px-4">
				<Reveal>
					<div className="flex justify-between items-center gap-3">
						<div className="space-y-3">
							<Badge variant="brand">{openSource.eyebrow}</Badge>
							<h2 id="open-source-title" className="text-2xl sm:text-3xl font-bold leading-tight">
								{openSource.title}
							</h2>
							<p className="text-sm leading-7 text-muted-foreground">{openSource.description}</p>
						</div>

						<div className="max-xl:hidden">
							<ShowAllOpenSourceProjectsButton />
						</div>
					</div>
				</Reveal>

				<div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
					{openSource.repos.map((repo, i) => (
						<Reveal key={repo.id} delay={i * 80} className="h-full">
							<article className="cursor-pointer flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-lg">
								<div className="flex items-center justify-between gap-2">
									<h3 className="text-base font-bold">
										<Link
											href={repo.url}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`باز کردن مخزن ${repo.name} در گیت‌هاب`}
											className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
										>
											<FolderGit2 className="size-4 shrink-0 text-brand" />
											<span dir="ltr">{repo.name}</span>
										</Link>
									</h3>
									<Badge variant="secondary" className="shrink-0">
										{repo.language}
									</Badge>
								</div>
								<p className="text-sm leading-6 text-muted-foreground">{repo.description}</p>
								<div className="mt-auto flex items-center gap-4 border-t border-border pt-3 text-sm text-foreground/85">
									<span className="inline-flex items-center gap-1.5">
										<Star className="size-4.5 text-foreground/80" />
										{fa(repo.stars)}
									</span>
									<span className="inline-flex items-center gap-1.5">
										<GitFork className="size-4.5 text-foreground/80" />
										{fa(repo.forks)}
									</span>
								</div>
							</article>
						</Reveal>
					))}
				</div>

				<Reveal delay={250}>
					<div className="xl:hidden mt-10 flex justify-center">
						<ShowAllOpenSourceProjectsButton />
					</div>
				</Reveal>
			</div>
		</section>
	);
}
