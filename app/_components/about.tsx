import { HighlightText } from "@/components/animations/highlight-text";
import { TextReveal } from "@/components/animations/text-reveal";
import { GrainBackground } from "@/components/backgrounds/grain";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { about } from "@/lib/site/about/data";
import { site } from "@/lib/site/config";
import { DownloadCloud, Mail } from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" aria-labelledby="about-title" className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="grid items-center gap-8 lg:grid-cols-[0.75fr_1.5fr]">
                    <div className="lg:sticky lg:top-24">
                        <Card className="relative">
                            <GrainBackground className="*:rounded-2xl rounded-2xl" />
                            <div className="relative z-10">
                                <div className="flex flex-col items-center gap-4 p-8">
                                    <Avatar name={about.name} src={about.avatar.src} size="md" className="size-32! text-4xl" />
                                    <div className="space-y-1 text-center">
                                        <h3 className="text-lg font-bold">{about.name}</h3>
                                        <p className="text-sm text-muted-foreground">{about.headline}</p>
                                    </div>
                                </div>
                                <Separator />
                                <dl className="grid grid-cols-2 gap-x-4 gap-y-4 p-6">
                                    {about.facts.map((fact) => (
                                        <div key={fact.id} className="space-y-0.5">
                                            <dt className="text-xs text-muted-foreground">{fact.field}</dt>
                                            <dd className="text-sm font-medium text-foreground">{fact.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </Card>
                    </div>

                    <div className="space-y-5">
                        <div className="flex flex-col gap-3">
                            <Badge variant="brand">درباره‌ی من</Badge>
                            <h2 id="about-title" className="text-2xl sm:text-3xl font-bold leading-tight">
                                <TextReveal lines={[
                                    ` سلام، من ${about.name} هستم`
                                ]} />
                            </h2>
                        </div>

                        <div className="space-y-4 text-[15px] leading-8 text-muted-foreground sm:text-[17px]">
                            {about.bio.map((paragraph, i) => {
                                if (!paragraph.includes(about.focusKeyword)) {
                                    return <p key={i}>{paragraph}</p>;
                                }
                                const [before, after] = paragraph.split(about.focusKeyword);
                                return (
                                    <p key={i}>
                                        {before}
                                        <HighlightText delay={300}>{about.focusKeyword}</HighlightText>
                                        {after}
                                    </p>
                                );
                            })}
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <Link href={about.resume.href} download={about.resume.download}>
                                <Button variant="outline">
                                    {about.resume.label}
                                    <DownloadCloud />
                                </Button>
                            </Link>
                            <Link href={`mailto:${site.contact.email}`}>
                                <Button variant="ghost">
                                    ارسال ایمیل
                                    <Mail />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
