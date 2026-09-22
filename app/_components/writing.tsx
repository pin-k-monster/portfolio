/*
 * ============================================================
 *  بخش مقالات (Writing)
 *  این فایل فعلاً فقط برنامه‌ریزی است؛ هنوز هیچ کدی ندارد.
 * ============================================================
 *
 * ۱. Purpose (هدف)
 * ‌- پیام: تخصص فقط در کد نیست؛ در انتقال دانش هم هست (مدرک عمق فنی).
 * ‌- اقدام اصلی: کلیک روی «دیدن همه‌ی مقاله‌ها» و خواندن یک مطلب.
 *
 * ۲. VibeFarsi components (کامپوننت‌ها) — همه تأییدشده در رجیستری
 * ‌- card (ui/card): کارت هر مقاله. add: card
 * ‌- badge (ui/badge): دسته‌ی مقاله. add: badge
 * ‌- avatar (ui/avatar): آواتار کوچک نویسنده در ردیف متادیتا. add: avatar
 * ‌- تاریخ شمسی و زمان مطالعه متن ساده است؛ عددها فارسی از قبل در data (publishedAt) یا با fa() برای readingMinutes.
 * ‌- مرجع چیدمان متادیتا: قالب `blog` رجیستری (row آواتار + نام + تاریخ + «X دقیقه مطالعه»).
 *
 * ۳. Layout (چیدمان)
 * ‌- از بالا: eyebrow → تیتر → توضیح → شبکه‌ی مقاله‌ها → دکمه‌ی دیدن همه.
 * ‌- شبکه: ۱ / ۳ ستون (grid-cols-1 lg:grid-cols-3). هر کارت: (پوشش اختیاری) → برچسب category +
 * ‌    تیتر (لینک) + excerpt + ردیف متادیتا (تاریخ، زمان مطالعه، آواتار).
 * ‌- RTL: کارت اول راست؛ لینک تیتر جهت عادی متن فارسی.
 *
 * ۴. Data (داده)
 * ‌- Data file: @/lib/site/writing/data .  Type: WritingContent (از ./type) + Article.
 * ‌- articles[] → کارت‌ها؛ publishedAt همان‌جاست (شمسی آماده)؛ readingMinutes با fa() فارسی می‌شود؛
 * ‌- readAllCta → دکمه؛ tags → نشان‌های کوچک زیر excerpt (اختیاری ولی بگذارید).
 *
 * ۵. Interaction and animation (تعامل و انیمیشن)
 * ‌- کارت‌ها با reveal پلکانی. add: reveal
 * ‌- hover کارت: border روشن و translate-y-[-2px] (۲۰۰ms). لینک تیتر روی hover رنگ brand.
 * ‌- reduced-motion: reveal خنثی.
 *
 * ۶. States (حالت‌ها)
 * ‌- اگر مقالات نداشت: empty-state با «به‌زودی». add: empty-state
 * ‌- لینک‌های articles مسیر نسبی فرضی است؛ اگر صفحه نبود فقط "#" بگذارید و در FAQ/توضیح بگویید.
 * ‌- پوشش اختیاری؛ بدون تصویر کارت خوش‌فرم می‌ماند (بدون کادرِ خالی ناراحت‌کننده).
 *
 * ۷. Accessibility (دسترس‌پذیری)
 * ‌- <section aria-labelledby> + h2. هر تیتر مقاله <h3> با لینک.
 * ‌- ردیف متادیتا: متن ساده با <time> برای تاریخ استاندارد؛ چون شمسی است خودتان aria را درست کنید
 * ‌    (مثلاً aria-label با تاریخ کامل).
 * ‌- آواتار نویسنده aria-hidden + نام به‌صورت متن.
 *
 * ۸. Implementation notes (یادداشت پیاده‌سازی)
 * ‌- articles route واقعی وجود ندارد؛ slug ها جای‌نشان هستند — برای نسخه‌ی preview می‌توان href="#" گذاشت.
 * ‌- برچسب «خواندن» از قالب blog رجیستری الگو بگیرید.
 */

import { ArrowLeft, PenLine } from "lucide-react";
import Link from "next/link";
import { cn, en } from "@/lib/utils";
import { Reveal } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { writing } from "@/lib/site/writing/data";
import { BlogGrid, Post } from "@/components/blocks/blog-grid";
import { toGregorian } from "@/lib/jalali";
import { site } from "@/lib/site/config";

const COVER_GRADIENTS = [
	"from-brand/30 via-muted/70 to-secondary",
	"from-brand/25 via-secondary to-muted/80",
	"from-brand/20 via-muted/80 to-secondary/70",
	"from-brand/30 via-secondary/80 to-muted",
];

/** پوشش تزئینی برای مقاله‌هایی که تصویر ندارند؛ به‌جای بلوک توپر. */
function ArticleCover({ index }: { index: number }) {
	return (
		<div
			aria-hidden
			className={cn(
				"relative flex size-full items-center justify-center overflow-hidden bg-linear-to-br transition-transform duration-500 group-hover:scale-105",
				COVER_GRADIENTS[index % COVER_GRADIENTS.length],
			)}
		>
			<div className="absolute -inset-s-8 -top-10 size-28 rounded-full bg-brand/20 blur-2xl" />
			<div className="absolute -bottom-12 -inset-e-8 size-32 rounded-full bg-brand/10 blur-3xl" />
			<PenLine className="relative size-7 text-brand/60" />
		</div>
	);
}

function ShowAllArticlesButton() {
	return (
		<Link href={writing.readAllCta.href} target={writing.readAllCta.target} rel={writing.readAllCta.rel}>
			<Button variant="outline" size="lg" className="cursor-pointer">
				{writing.readAllCta.label}
				<ArrowLeft />
			</Button>
		</Link>
	)
}

export default function Writing() {

	const posts = writing.articles.map((article, index): Post => {
		const [jy, jm, jd] = en(article.publishedAt).split("/").map(Number);

		return {
			href: article.slug,
			title: article.title,
			excerpt: article.excerpt,
			category: article.category,
			date: toGregorian(jy, jm, jd),
			readingTime: article.readingMinutes,
			author: { name: site.name },
			cover: <ArticleCover index={index} />,
		};
	})

	return (
		<section id="writing" aria-labelledby="writing-title" className="pb-16 sm:pb-24">
			<div className="container mx-auto px-4">
				<Reveal>
					<div className="flex justify-between items-center gap-3 mb-10">
						<div className="space-y-3">
							<Badge variant="brand">{writing.eyebrow}</Badge>
							<h2 id="writing-title" className="text-2xl sm:text-3xl font-bold leading-tight">
								{writing.title}
							</h2>
							<p className="text-sm leading-7 text-muted-foreground">{writing.description}</p>
						</div>

						<div className="max-xl:hidden">
							<ShowAllArticlesButton />
						</div>
					</div>
				</Reveal>

				<BlogGrid posts={posts} hideHeader />

				<Reveal delay={250}>
					<div className="xl:hidden mt-10 flex justify-center">
						<ShowAllArticlesButton />
					</div>
				</Reveal>
			</div>
		</section>
	);
}