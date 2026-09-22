"use client"

import { useTheme } from "@/providers/theme-provider"
import { Button, ButtonProps } from "../ui/button"
import { MoonStarIcon, SunIcon } from "lucide-react";

export default function ThemeToggleButton() {

    const { theme, toggleTheme } = useTheme();
    const variant: ButtonProps["variant"] = theme == "dark" ? "default" : "secondary";

    return (
        <Button
            aria-label="تغییر تم"
            onClick={toggleTheme} variant={variant} size="icon" className="size-8!">
            {
                theme == "dark" ? (
                    <MoonStarIcon />
                ) : (
                    <SunIcon />
                )
            }
        </Button>
    )
}