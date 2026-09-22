"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, EyeIcon, ImageOff } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/lib/site/projects/data";
import type { Project } from "@/lib/site/projects/type";
import type { ImageAsset } from "@/lib/site/shared";
import { cn } from "@/lib/utils";

function ProjectCover({ image, className }: { image: ImageAsset; className?: string }) {
	const [state, setState] = useState<"loading" | "ready" | "error">("loading");

	if (state === "error") {
		return (
			<div className={cn("relative flex aspect-video w-full shrink-0 items-center justify-center bg-secondary", className)}>
				<ImageOff className="size-8 text-muted-foreground/50" />
			</div>
		);
	}

	return (
		<div className={cn("relative aspect-video w-full shrink-0 overflow-hidden bg-secondary", className)}>
			{state === "loading" && <Skeleton className="absolute inset-0 rounded-none" />}
			<Image
				src={image.src}
				alt={image.alt}
				fill
				sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
				className={cn(
					"object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-95",
					state === "loading" ? "opacity-0" : "opacity-100",
				)}
				onLoad={() => setState("ready")}
				onError={() => setState("error")}
			/>
		</div>
	);
}

function ProjectCard({ project, onOpen, spotlight }: { project: Project; onOpen: () => void; spotlight?: boolean }) {
	const body = (
		<>
			<ProjectCover image={project.image} className={spotlight ? "rounded-t-xl" : undefined} />
			<div className="flex flex-1 flex-col gap-2 p-5">
				<div className="flex items-start justify-between gap-2">
					<h3 className="text-base font-bold leading-6">{project.title}</h3>
					{project.featured && <Badge variant="brand">ویژه</Badge>}
				</div>
				<p className="text-xs font-medium text-muted-foreground">{project.role}</p>
				<p className="text-sm leading-6 text-muted-foreground line-clamp-2">{project.summary}</p>
				<div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
					<ul className="flex flex-wrap gap-1.5">
						{project.tech.slice(0, 4).map((t) => (
							<li key={t.id}>
								<Badge variant="outline" className="text-muted-foreground">
									{t.name}
								</Badge>
							</li>
						))}
					</ul>
					<Button variant="ghost" size="sm" className="shrink-0 cursor-pointer" onClick={onOpen}>
						جزئیات
						<ArrowLeft />
					</Button>
				</div>
			</div>
		</>
	);

	if (spotlight) {
		return (
			<SpotlightCard className="group h-full transition-all duration-200 hover:-translate-y-1">
				<div className="flex h-full flex-col overflow-hidden rounded-[calc(var(--radius)+1px)]">{body}</div>
			</SpotlightCard>
		);
	}

	return (
		<article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_0_0_oklch(1_0_0/6%)_inset] transition-all duration-200 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl">
			{body}
		</article>
	);
}

export default function Projects() {
	const [category, setCategory] = useState(projects.defaultCategory);
	const [selected, setSelected] = useState<Project | null>(null);

	const visible = projects.projects.filter((p) => category === projects.defaultCategory || p.categoryId === category);
	const featuredId = visible.find((p) => p.featured)?.id;

	return (
		<section id="projects" aria-labelledby="projects-title" className="pb-16 sm:pb-24">
			<div className="container mx-auto px-4">
				<Reveal>
					<div className="flex flex-col items-center gap-3 text-center">
						<Badge variant="brand">{projects.eyebrow}</Badge>
						<h2 id="projects-title" className="text-2xl sm:text-3xl font-bold leading-tight">
							{projects.title}
						</h2>
						<p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground">{projects.description}</p>
					</div>
				</Reveal>

				<Reveal delay={100}>
					<div className="mt-8 flex justify-center">
						<Tabs value={category} onValueChange={setCategory} defaultValue={projects.defaultCategory} variant="underline" className="w-full">
							<TabsList aria-label="فیلتر پروژه‌ها">
								{projects.categories.map((c) => (
									<TabsTrigger key={c.id} value={c.id}>
										{c.label}
									</TabsTrigger>
								))}
							</TabsList>
							<TabsContent value={category} className="mt-8">
								{visible.length === 0 ? (
									<EmptyState
										title="پروژه‌ای در این دسته نیست"
										description="در حال تکمیل نمونه‌کارهای این بخش هستم."
										action={
											<Button variant="outline" size="sm" onClick={() => setCategory(projects.defaultCategory)}>
												مشاهده‌ی همه‌ی پروژه‌ها
											</Button>
										}
									/>
								) : (
									<div key={category} className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
										{visible.map((p, i) => (
											<Reveal key={p.id} delay={i * 80} className="h-full">
												<ProjectCard project={p} onOpen={() => setSelected(p)} spotlight={p.id === featuredId} />
											</Reveal>
										))}
									</div>
								)}
							</TabsContent>
						</Tabs>
					</div>
				</Reveal>
			</div>

			<Dialog
				open={selected !== null}
				onOpenChange={(o) => !o && setSelected(null)}
				title={selected?.title}
				description={selected?.role}
				footer={
					selected && (
						<>
							{selected.links?.live && (
								<Link href={selected.links.live} target="_blank" rel="noopener noreferrer" className="flex-1">
									<Button className="w-full cursor-pointer">
										<EyeIcon />
										دموی زنده
									</Button>
								</Link>
							)}
							{selected.links?.code && (
								<Link href={selected.links.code} target="_blank" rel="noopener noreferrer" className="flex-1">
									<Button variant="outline" className="w-full cursor-pointer">
										کد منبع
										<ExternalLink />
									</Button>
								</Link>
							)}
						</>
					)
				}
			>
				{selected && (
					<>
						<ProjectCover image={selected.image} className="rounded-xl" />
						<p className="mt-4 text-sm leading-7 text-muted-foreground">{selected.longDescription}</p>
						<ul className="mt-4 flex flex-wrap gap-1.5" dir="ltr">
							{selected.tech.map((t) => (
								<li key={t.id}>
									<Badge variant="secondary">{t.name}</Badge>
								</li>
							))}
						</ul>
					</>
				)}
			</Dialog>
		</section>
	);
}