import type { Metadata } from "next";
import "./globals.css";
import { vazirmatn } from "./fonts";
import { site } from "@/lib/site/config";
import { ToastProvider } from "@/components/ui/toast";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

export const metadata: Metadata = {
    ...site.seo
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="fa"
            className={`${vazirmatn.variable} scroll-smooth h-full antialiased`}
            dir="rtl">
            <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
                <Navbar />
                <ToastProvider>{children}</ToastProvider>
                <Footer />
            </body>
        </html>
    );
}
