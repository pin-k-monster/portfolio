import { FlickerBackground } from "@/components/backgrounds/flicker";

export default function Footer() {
	return (
		<footer className="border-t relative border-border">
			<FlickerBackground rows={4} cols={80} className="opacity-25" />
			<div className="container mx-auto px-4 py-8">
				<p className="text-center text-sm text-muted-foreground" dir="ltr">
					© {new Date().getFullYear()} Kiarsh Jamali. All rights reserved.
				</p>
				<p className="mt-2 text-center text-xs text-muted-foreground/80">
					ساخته‌شده توسط کیارش جمالی با Next.js و VibeFarsi.
				</p>
			</div>
		</footer>
	);
}