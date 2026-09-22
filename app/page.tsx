import { ScrollProgress } from "@/components/animations/scroll-progress";
import Hero from "./_components/hero";
import About from "./_components/about";
import Skills from "./_components/skills";
import Experience from "./_components/experience";
import Projects from "./_components/projects";
import Milestones from "./_components/milestones";
import OpenSource from "./_components/open-source";
import Writing from "./_components/writing";
import Contact from "./_components/contact";
import Cta from "./_components/cta";

export default function Home() {
    return (
        <>
            <ScrollProgress />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Milestones />
            <OpenSource />
            <Writing />
            <Contact />
            <Cta />
        </>
    );
}
