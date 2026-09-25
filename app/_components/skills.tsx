import Image from "next/image";
import { Marquee } from "@/components/animations/marquee";
import { Reveal } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/lib/site/skills/data";
import type { Proficiency } from "@/lib/site/skills/type";

const PROFICIENCY_STYLES: Record<Proficiency, { variant: "brand" | "secondary" | "outline"; className: string }> = {
    مسلط: { variant: "brand", className: "rounded-full border border-brand bg-brand px-2.5 text-[13px]! text-brand-foreground!" },
    مقدماتی: { variant: "secondary", className: "rounded-full border border-border bg-secondary px-2.5 text-[13px]! text-secondary-foreground!" },
    آشنا: { variant: "outline", className: "rounded-full border border-foreground/25 px-2.5 text-[13px]! text-foreground/75!" },
};

export default function Skills() {
    return (
        <section className="overflow-x-hidden">
            <div id="skills" className="pb-16 sm:pb-24 container px-4 mx-auto flex flex-col justify-center items-center">
                <Reveal>
                    <div className="text-center space-y-4">
                        <Badge variant="brand">{skills.eyebrow}</Badge>
                        <h2 className="text-3xl font-bold">
                            {skills.title}
                        </h2>

                        <Marquee className="my-5">
                            {
                                skills.marquee.map((s, index) => (
                                    <Badge className="text-muted-foreground" key={index}>{s}</Badge>
                                ))
                            }
                        </Marquee>
                    </div>
                </Reveal>
                <Reveal delay={150} className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-stretch gap-4 w-full">
                        {
                            skills.groups.map((g) => (
                                <Card key={g.id} className="relative overflow-hidden border-2 hover:border-brand/25 hover:shadow-xl hover:-translate-y-1 transition-all cursor-default">
                                    <CardHeader className="relative z-10">
                                        <CardTitle className="flex items-center gap-x-2">
                                            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                                                <g.icon size={18} strokeWidth={2} />
                                            </span>
                                            {g.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10 flex flex-col divide-y divide-border/60">
                                        {g.skills.map((s) => {
                                            const level = s.proficiency ? PROFICIENCY_STYLES[s.proficiency] : null;
                                            return (
                                                <div key={s.id} className="flex items-center gap-2 py-2">
                                                    {level ? (
                                                        <Badge variant={level.variant} className={`shrink-0 w-16 text-center justify-center ${level.className}`}>
                                                            {s.proficiency}
                                                        </Badge>
                                                    ) : null}
                                                    <div dir="ltr" className="flex items-center gap-x-2 min-w-0 flex-1 truncate text-left text-sm font-medium text-foreground/90">
                                                        {s.icon ? (
                                                            <Image src={s.icon} width={20} height={20} alt="" className="size-5 shrink-0 invert" />
                                                        ) : null}
                                                        {s.name}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
