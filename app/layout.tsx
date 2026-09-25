import type { Metadata, Viewport } from "next";
import "./globals.css";
import { vazirmatn } from "./fonts";
import { siteMetadata } from "@/lib/site/metadata";
import { ToastProvider } from "@/components/ui/toast";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: "#1c1c1f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      data-theme="dark"
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
