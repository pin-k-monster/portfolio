import type { Metadata } from "next";
import "./globals.css";
import { vazirmatn } from "./fonts";
import { site } from "@/lib/site/config";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "./_components/navbar";

export const metadata: Metadata = {
    ...site.seo
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="fa"
            className={`${vazirmatn.variable} h-full antialiased`}
            dir="rtl">
            <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
                <ThemeProvider>
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
