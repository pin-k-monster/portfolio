import { FlickerBackground } from "@/components/backgrounds/flicker";
import { footer } from "@/lib/site/footer/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <FlickerBackground rows={4} cols={80} className="opacity-25" />
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-sm text-muted-foreground">{footer.copyright}</p>
        <p className="mt-2 text-center text-xs text-muted-foreground/80">{footer.credit}</p>
      </div>
    </footer>
  );
}
