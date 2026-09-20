"use client"

import { site } from "@/lib/site/config";
import { useTheme } from "@/providers/theme-provider";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {

    const { theme } = useTheme();

    return (
        <Link href={"/"} className={`${theme == "light" ? "invert" : ""} block w-fit hover:opacity-80 transition-opacity`}>
            <Image src={"/navbar-logo.jpg"} width={50} height={50} alt={site.name} className="p-1" />
        </Link>
    )
}