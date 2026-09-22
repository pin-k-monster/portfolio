"use client"

import { site } from "@/lib/site/config";
import { useTheme } from "@/providers/theme-provider";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {

    const { theme } = useTheme();

    return (
        <Link href={"#"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`${theme == "light" ? "invert" : ""} cursor-pointer block w-fit hover:opacity-80 transition-opacity`}>
            <Image src={"/navbar-logo.png"} width={50} height={53.94} alt={site.name} className="p-1" />
        </Link>
    )
}