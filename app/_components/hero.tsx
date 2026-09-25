import { BlurText } from "@/components/animations/blur-text";
import { Terminal } from "@/components/animations/terminal";
import { TextShimmer } from "@/components/animations/text-shimmer";
import { WordRotate } from "@/components/animations/word-rotate";
import { DitherBackground } from "@/components/backgrounds/dither";
import { Button } from "@/components/ui/button";
import { hero } from "@/lib/site/hero/data";
import { ArrowLeft, DownloadCloud } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden xl:h-125">
            <DitherBackground opacity={0.15} />
            <div className="h-full max-xl:py-8 max-xl:space-y-8 container mx-auto grid xl:grid-cols-[1.25fr_1fr] items-center z-10 relative">
                <div className="max-xl:text-center space-y-3 xl:space-y-5 xl:border-r-4 border-r-muted-foreground/50 xl:py-6 px-4 xl:ps-8">
                    <TextShimmer className="text-sm">{hero.badge}</TextShimmer>
                    <h1 className="text-2xl sm:text-4xl font-bold">
                        <BlurText text={`${hero.name}، ${hero.titlePrefix}`} />
                        <WordRotate words={hero.rotatingRoles} className="text-brand w-24 sm:w-38" />
                    </h1>
                    <p className="text-sm max-xl:mx-auto max-w-2xl leading-7 font-light text-muted-foreground">
                        {hero.description}
                    </p>
                    <div className="gap-x-2 flex items-center max-xl:justify-center">
                        <Link
                            rel={hero.primary.rel} target={hero.primary.target}
                            href={hero.primary.href} download={hero.primary.download}>
                            <Button variant="brand">
                                {hero.primary.label}
                                <DownloadCloud />
                            </Button>
                        </Link>
                        <Link
                            rel={hero.secondary.rel} target={hero.secondary.target}
                            href={hero.secondary.href} download={hero.secondary.download}>
                            <Button variant="secondary">
                                {hero.secondary.label}
                                <ArrowLeft />
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-end h-full max-xl:px-4">
                    <Terminal
                        speed={45}
                        className="shadow-2xl mt-auto w-full max-w-none **:text-base bg-card/10 backdrop-blur-md h-full xl:translate-y-20"
                        title={hero.terminalTitle}
                        lines={hero.terminalLines} />
                </div>
            </div>
        </section>
    )
}
