<div dir="rtl">

# پورتفولیو — قالب تک‌صفحه‌ای فارسی با Next.js

یک قالب پورتفولیوی **فارسی و راست‌چین**، آماده‌ی انتشار و کاملاً اوپن‌سورس.
همه‌ی محتوا از چند فایل داده خوانده می‌شود؛ برای شخصی‌سازی لازم نیست جز یک فایل را دست بزنید.

**Next.js 16** · **React 19** · **Tailwind CSS 4** · **VibeFarsi** · **TypeScript** · **MIT License**

</div>

<div dir="ltr">

| | |
| --- | --- |
| **Stack** | Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS 4 |
| **UI kit** | [VibeFarsi](https://vibefarsi.ir) — Persian-first, RTL-native components |
| **Direction** | `dir="rtl"`, `lang="fa"`, Jalali dates, Persian digits |
| **Fonts** | Vazirmatn via `next/font` |
| **Form** | React Hook-free custom `useForm` + `nodemailer` route handler |
| **License** | MIT |

</div>

---

## فهرست

- [شروع سریع](#شروع-سریع)
- [متغیرهای محیطی](#متغیرهای-محیطی)
- [اسکریپت‌ها](#اسکریپت-ها)
- [ساختار پروژه](#ساختار-پروژه)
- [راهنمای تغییر محتوا](#راهنمای-تغییر-محتوا) ← **مهم‌ترین بخش**
- [دارایی‌های تصویری](#داراییهای-تصویری)
- [استایل و تم](#استایل-و-تم)
- [تغییر بخش‌ها](#تغییر-بخشها)
- [دسترسی‌پذیری](#دسترسیپذیری)
- [استقرار](#استقرار)
- [English](#english)

---

## شروع سریع

پیش‌نیاز: **Node.js 20 یا بالاتر** و **npm**.

```bash
git clone https://github.com/<user>/<repo>.git
cd <repo>
npm install
cp .env.example .env.local   # فقط اگر می‌خواهید فرم تماس کار کند
npm run dev
```

سپس <http://localhost:3000> را باز کنید.

> **بدون تنظیم SMTP هم سایت بالا می‌آید.** فقط ارسال فرم تماس با پیام «ارسال ایمیل روی سرور تنظیم نشده است» رد می‌شود. لینک `mailto:` کنار فرم همیشه کار می‌کند.

### سه قدم تا شخصی‌سازی کامل

۱. `lib/site/config.tsx` — نام، ایمیل، رزومه، شبکه‌های اجتماعی و SEO
۲. `lib/site/*/data.ts` — متن و داده‌ی هر بخش
۳. `public/` — تصاویر و آیکون‌ها

جزئیات هر کدام در [راهنمای تغییر محتوا](#راهنمای-تغییر-محتوا) آمده است.

---

## متغیرهای محیطی

همه‌ی متغیرها **اختیاری‌اند**؛ سایت بدون آن‌ها هم بی‌نقص بالا می‌آید. برای فعال شدن ارسال ایمیل، فایل `.env.example` را به `.env.local` کپی و پر کنید:

| متغیر | توضیح | پیش‌فرض |
| --- | --- | --- |
| `SMTP_HOST` | هاست سرور SMTP | — |
| `SMTP_PORT` | پورت: `587` برای STARTTLS، `465` برای SSL | `587` |
| `SMTP_SECURE` | `"true"` فقط برای پورت `465` | `false` |
| `SMTP_USER` | نام کاربری SMTP | — |
| `SMTP_PASS` | رمز یا **App Password** | — |
| `CONTACT_TO` | صندوقی که پیام‌ها به آن ارسال می‌شود | `SMTP_USER` |

نمونه برای Gmail:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=you@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx   # App Password، نه رمز اصلی
```

> `.env.local` در `.gitignore` است و هرگز commit نمی‌شود. `.env.example` عمداً commit شده تا دیگران بدانند چه متغیرهایی لازم است.

### محدودیت نرخ ارسال

`app/api/contact/route.ts` برای هر IP حداکثر **۳ درخواست در هر دقیقه** قبول می‌کند و پاسخ `429` با هدر `Retry-After` می‌دهد. این شمارنده در حافظه‌ی همان پروسه نگه داشته می‌شود؛ اگر چند نمونه (instance) اجرا می‌کنید، آن را با Redis یا rate-limiter پلتفرم خود جایگزین کنید.

---

## اسکریپت‌ها

| دستور | کار |
| --- | --- |
| `npm run dev` | سرور توسعه با hot reload |
| `npm run build` | بیلد production |
| `npm start` | اجرای خروجی بیلد |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run check` | lint + typecheck با هم — **قبل از commit اجرا کنید** |
| `npm run clean` | حذف پوشه‌ی `.next` |

---

## ساختار پروژه

```
├── app/
│   ├── layout.tsx            # <html lang="fa" dir="rtl">، فونت، Navbar/Footer
│   ├── page.tsx              # ترتیب بخش‌های صفحه
│   ├── globals.css           # توکن‌های رنگ و انیمیشن (تم گرافیت)
│   ├── fonts.ts              # Vazirmatn
│   ├── robots.ts             # /robots.txt
│   ├── sitemap.ts            # /sitemap.xml
│   ├── api/contact/route.ts  # endpoint فرم تماس (nodemailer + rate limit)
│   └── _components/          # یک کامپوننت برای هر بخش صفحه
│
├── lib/
│   ├── utils.ts              # cn()، تبدیل ارقام فارسی، قالب‌بندی عدد
│   ├── persian.ts            # اعتبارسنجی موبایل، شبا، کد ملی، کارت بانکی، پلاک
│   ├── jalali.ts             # تبدیل تاریخ میلادی/شمسی (الگوریتم Borkowski)
│   └── site/
│       ├── config.tsx        # ⭐ هویت سایت — از همه‌جا import می‌شود
│       ├── shared.ts         # typeهای مشترک (CtaLink, ImageAsset, TechTag…)
│       ├── metadata.ts       # نگاشت seo به Metadata نیست
│       └── <section>/
│           ├── type.ts       # قرارداد داده‌ی بخش
│           └── data.ts       # ⭐ محتوای بخش — اینجاست که ویرایش می‌کنید
│
├── components/               # کامپوننت‌های پایه
│   ├── ui/                   # input, button, dialog, tabs, toast, form, …
│   ├── animations/           # reveal, marquee, counter, terminal, card-stack, …
│   ├── backgrounds/          # dither, flicker, grain, scanlines (WebGL)
│   ├── blocks/               # blog-grid, logo-cloud
│   └── common/               # logo
│
└── public/
    ├── icons/                # آیکون‌های SVG تک‌رنگ مهارت‌ها
    ├── avatar.png            # تصویر بخش «درباره‌ی من»
    └── navbar-logo.png       # لوگوی هدر
```

---

## راهنمای تغییر محتوا

<div dir="rtl">

**قانون کلی:** برای تغییر متن هیچ بخشی، فقط فایل `data.ts` همان بخش را ویرایش کنید. هر `data.ts` با `satisfies` به `type.ts` خودش قفل شده، پس اگر فیلدی را اشتباه تایپ کنید `npm run typecheck` خطا می‌دهد.

مقادیر `data.ts` همان‌طور که نوشته می‌شوند نمایش داده می‌شوند؛ یعنی **اعداد را خودتان باید فارسی بنویسید** (`۹+` نه `9+`). تنها استثنا `readingMinutes` است که خودکار فارسی می‌شود.

</div>

### ⭐ هویت سایت — `lib/site/config.tsx`

تنها فایلی که چند بخش از آن استفاده می‌کنند. برای عوض کردن نام و ایمیل فقط همین را ویرایش کنید:

| فیلد | استفاده در |
| --- | --- |
| `name` | هدر، هیرو، ایمیل تماس، فوتر، متادیتا |
| `contact.email` | فرم تماس و لینک `mailto:` |
| `resume` | دکمه‌ی هدر، دکمه‌ی هیرو، بخش «درباره‌ی من»، CTA پایانی |
| `socials` | بخش تماس و فوتر |
| `seo` | `<title>`، توضیحات، `openGraph`، `robots.txt`، `sitemap.xml` |
| `locale` | صفت `<html lang>` و `og:locale` |

> ⚠️ **مقادیر فعلی ساختگی‌اند.** نام، ایمیل، لینک‌های شبکه‌ی اجتماعی و `seo.url` همگی نمونه‌اند و باید پیش از انتشار جایگزین شوند. توجه کنید که در وضعیت فعلی نام و ایمیل با یک هویت و لینک‌های گیت‌هاب با هویت دیگری هم‌خوان نیستند.

### بخش‌به‌بخش

هر بخش یک `data.ts` دارد. ستون «type» فایلی است که فیلدهای مجاز را تعریف می‌کند.

| بخش | فایل داده | چه چیزی را عوض کنید |
| --- | --- | --- |
| **هیرو** | `lib/site/hero/data.ts` | `badge`، عنوان چرخشی `rotatingRoles`، متن ترمینال `terminalLines` |
| **درباره‌ی من** | `lib/site/about/data.ts` | `avatar` (مسیر تصویر)، `bio` (آرایه‌ی پاراگراف)، `facts` (برچسب/مقدار) |
| **مهارت‌ها** | `lib/site/skills/data.ts` | `marquee` (نوار متحرک) و `groups[].skills[]` — آیکون هر مهارت یک مسیر داخل `public/icons` است |
| **سوابق** | `lib/site/experience/data.ts` | `items[]` — برای هر شغل `period(start, end)` یک `Date` میلادی بدهید، برچسب شمسی خودکار ساخته می‌شود |
| **نظرات** | `lib/site/testimonials/data.ts` | `items[]` (نقل‌قول‌ها)، `stats[]`، `clients[]` |
| **پروژه‌ها** | `lib/site/projects/data.ts` | `projects[]` و `categories[]` — `image.src` مسیر داخل `public` است |
| **دستاوردها** | `lib/site/milestones/data.ts` | `items[]` — عدد و برچسب هر دستاورد |
| **متن‌باز** | `lib/site/open-source/data.ts` | `repos[]` — `stars` عدد لاتین است، خودکار فارسی نمایش داده می‌شود |
| **مقالات** | `lib/site/writing/data.ts` | `articles[]` — `href` را به آدرس واقعی مقاله بدهید (خارجی یا مسیر داخلی) |
| **تماس** | `lib/site/contact/data.ts` | متن‌ها، برچسب و `placeholder` فیلدها، فهرست `socials` |
| **CTA پایانی** | `lib/site/cta/data.ts` | `title`، توضیح و دکمه‌ی اقدام |
| **فوتر** | `lib/site/footer/data.ts` | متن کپی‌رایت و اعتبار — سال شمسی خودکار محاسبه می‌شود |
| **منوی بالا** | `lib/site/navbar/data.ts` | `items[]` — `id` باید با `id` همان `<section>` در صفحه یکی باشد |

### نکته‌های مهم هنگام ویرایش

<div dir="rtl">

- **شناسه‌ی بخش‌ها (`id`)** — هر آیتم منوی بالا به یک `id` روی `<section>` وصل است. اگر `id` منو را عوض کنید، همان `id` را روی بخش هم بگذارید، وگرنه هایلایت منو هنگام اسکرول کار نمی‌کند.
- **تاریخ‌ها** — ورودی همیشه `Date` **میلادی** است (`new Date(2023, 6, 1)` یعنی ۱۰ جولای ۲۰۲۳) و نمایش شمسی و فارسی خودکار انجام می‌شود. برای تاریخ شمسیِ متنی مثل تاریخ انتشار مقاله، `publishedAt` را به شکل `۱۴۰۴/۰۵/۲۱` بنویسید (ارقام فارسی یا لاتین، هر دو قبول است).
- **تصویر پروژه** — اگر `image` را کلاً حذف کنید یا فایلش موجود نباشد، کارت به‌جای کادر خالی یک گرادیان تولیدی نشان می‌دهد.
- **اعتبارسنجی فرم** — قاعده‌ها و متن‌های خطا در `lib/site/contact/validation.ts` یک‌جا جمع شده‌اند و هم فرم سمت مرورگر و هم endpoint از همان استفاده می‌کنند. برای افزودن فیلد، آنجا و `lib/site/contact/type.ts` را با هم تغییر دهید.
- **لینک بیرونی** — برای لینک‌های بیرونی `target` و `rel` را در داده بگذارید. اگر `href` بیرونی باشد، `rel="noopener noreferrer"` خودکار اضافه می‌شود.

</div>

---

## دارایی‌های تصویری

<div dir="rtl">

سه فایل زیر **عمداً commit نشده‌اند** (حجم یا حق نشر). جای آن‌ها را پر کنید:

| مسیر | کجا استفاده می‌شود | اگر خالی بماند |
| --- | --- | --- |
| `public/resume.pdf` | دکمه‌ی رزومه در هدر، هیرو، «درباره‌ی من» و CTA پایانی | لینک ۴۰۴ می‌دهد — حتماً پر کنید |
| `public/og.png` | تصویر پیش‌نمایش شبکه‌های اجتماعی (۱۲۰۰×۶۳۰) | متادیتای `openGraph`/`twitter` بدون تصویر |
| `public/images/projects/*.jpg` | کاور پروژه‌ها (۶ پروژه) | گرادیان تولیدی با آیکون تصویر |

`public/avatar.png` و `public/navbar-logo.png` همراه مخزن هستند، ولی هر دو **نمونه‌اند** و باید با تصویر خودتان عوض شوند. اگر `avatar.png` پاک یا خراب شود، `Avatar` خودکار حرف اول نام را نشان می‌دهد.

**آیکون‌های مهارت‌ها** در `public/icons/` هستند و همگی تک‌رنگ با `fill="currentColor"`؛ یعنی خودکار با رنگ متن هماهنگ می‌شوند و در تم روشن و تاریک درست دیده می‌شوند. برای افزودن مهارت جدید یک SVG ساده در آن پوشه بگذارید و در `lib/site/skills/data.ts` مسیرش را بدهید. اگر آیکون ندارید، `icon` را حذف کنید تا فقط نام نمایش داده شود.

**تصاویر بیرونی:** اگر خواستید تصویری از دامنه‌ی دیگری استفاده کنید، در `next.config.ts` مقدار `images.remotePatterns` را اضافه کنید:

```ts
images: {
  formats: ["image/avif", "image/webp"],
  remotePatterns: [new URL("https://images.example.com/**")],
},
```

</div>

---

## استایل و تم

<div dir="rtl">

تم فعلی **گرافیت** است: تیره، خنثی و کم‌اشباع، با یک رنگ برند گرم. تمام توکن‌های رنگ در `app/globals.css` و بر پایه‌ی `oklch` تعریف شده‌اند تا کنتراست در هر دو تم درست بماند:

- **تم تیره** — بلوک داخل `:root`
- **تم روشن** — بلوک `[data-theme="light"]`

برای عوض کردن رنگ برند کافی است مقدار `--brand` را در هر دو بلوک تغییر دهید. بقیه‌ی توکن‌ها (`--background`، `--foreground`، `--card`، `--border`، `--muted`، `--destructive`، `--success`، `--warning`، `--radius`) هم به همین شکل کار می‌کنند.

کلاس کمکی `cn()` در `lib/utils.ts` از `clsx` + `tailwind-merge` ساخته شده، بنابراین `className`ی که به کامپوننت می‌دهید همیشه بر کلاس‌های پیش‌فرض خودش غلبه می‌کند.

</div>

---

## تغییر بخش‌ها

<div dir="rtl">

ترتیب بخش‌ها در `app/page.tsx` مشخص است. برای حذف یک بخش، import و استفاده‌ی آن را از این فایل بردارید (فایل `data.ts` و کامپوننتش را می‌توانید نگه دارید یا پاک کنید).

اگر بخشی را حذف کردید، فراموش نکنید آیتم متناظر آن را از `navbar.data.ts` هم بردارید، وگرنه منو به بخشی لینک می‌دهد که وجود ندارد.

</div>

---

## دسترسی‌پذیری

<div dir="rtl">

- هر بخش یک `<section aria-labelledby>` با یک `<h2>` دارد و هر آیتم یک `<h3>`.
- هر ورودی فرم با `<label>` برچسب‌گذاری شده و خطا/راهنما با `aria-describedby` وصل است.
- انیمیشن‌ها با `prefers-reduced-motion` خاموش می‌شوند.
- آیکون‌های تزئینی `aria-hidden` دارند و آیکون‌های تعاملی `aria-label`.
- پیش‌فرض مرورگر برای همه‌ی ورودی‌ها در نظر گرفته شده است؛ هیچ `outline`ای حذف نشده، فقط به `focus-visible` منتقل شده.

</div>

---

## استقرار

سایت یک صفحه‌ی استاتیک است و روی هر میزبانی که Next.js را پشتیبانی کند کار می‌کند: **Vercel**، **Netlify**، **Cloudflare Pages**، یا هر سرور Node.

```bash
npm run build
npm start          # روی پورت ۳۰۰۰
```

<div dir="rtl">

- **متغیر محیطی:** `SMTP_*` و `CONTACT_TO` را در تنظیمات پلتفرم خود اضافه کنید، نه در کد.
- **`/api/contact` پویا است.** بقیه‌ی صفحه‌ها با `○` (استاتیک) در خروجی `next build` علامت می‌خورند. اگر می‌خواهید کل سایت استاتیک باشد، `app/api/contact/` را حذف کنید و دکمه‌ی فرم را به `mailto:` وصل کنید.
- **دامنه:** بعد از انتشار، `seo.url` را در `lib/site/config.tsx` روی دامنه‌ی واقعی تنظیم کنید و دوباره بیلد بگیرید؛ `robots.txt` و `sitemap.xml` از همین مقدار ساخته می‌شوند.
- **`package.json` روی `"private": true` است** تا کسی اشتباهی آن را در npm منتشر نکند. اگر واقعاً می‌خواهید منتشرش کنید، این فیلد را بردارید.

</div>

---

## English

A production-ready, **RTL Persian** developer portfolio landing page. Content lives in plain data
files, so you can rebrand it without touching a component.

**Next.js 16** (App Router) · **React 19** · **Tailwind CSS 4** · **VibeFarsi** · **TypeScript** · **MIT**

### Quick start

Requires **Node.js 20+**.

```bash
npm install
cp .env.example .env.local   # optional, only for the contact form
npm run dev
```

### What makes it Persian-first

- `dir="rtl"` and `lang="fa"` on `<html>`, with a matching `og:locale`
- Jalali date conversion (Borkowski algorithm) and Persian digits throughout
- A `lib/persian.ts` with no dependencies: mobile, national ID, IBAN, bank card
  and licence-plate validation
- Layouts built on CSS logical properties, so they mirror without extra rules

### Editing content

| What | Where |
| --- | --- |
| Name, e-mail, résumé, socials, SEO | `lib/site/config.tsx` |
| Every section's text and data | `lib/site/<section>/data.ts` |
| Allowed fields per section | `lib/site/<section>/type.ts` |
| Section order | `app/page.tsx` |
| Colours and theme tokens | `app/globals.css` |
| Skill icons | `public/icons/*.svg` |

Each `data.ts` is locked to its `type.ts` with `satisfies`, so a typo or a missing
field fails `npm run typecheck` rather than shipping.

Dates are entered as **Gregorian** `Date` objects and rendered as Jalali automatically.
Numbers in `data.ts` are printed exactly as written, so write them with Persian digits
(`۹+`, not `9+`); `readingMinutes` is converted for you.

### Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve the build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run check` | lint + typecheck together |
| `npm run clean` | Remove `.next` |

### Contact form

`POST /api/contact` validates with the shared rules in `lib/site/contact/validation.ts`
— the same module the browser form uses, so the two can never disagree — then sends
via `nodemailer`. It rate-limits to 3 requests per IP per minute and returns `429`
with `Retry-After`. Without SMTP credentials the site still works; only the send
fails, and the `mailto:` link beside the form always works.

The rate-limit counter lives in process memory, so if you run more than one instance,
swap it for Redis or your platform's limiter.

### Placeholder assets

`public/resume.pdf`, `public/og.png` and `public/images/projects/*.jpg` are
intentionally not committed. Project cards fall back to a generated gradient when an
image is missing or fails to load, and the avatar falls back to an initial. The résumé
link needs a real file. `public/avatar.png` and `public/navbar-logo.png` are placeholders
you should replace.

### Before you publish

1. Replace the placeholder identity in `lib/site/config.tsx` (name, e-mail, socials, `seo.url`).
2. Add `public/resume.pdf` and your own `public/avatar.png`.
3. Set `seo.url` to your real origin — `robots.txt` and `sitemap.xml` are built from it.
4. Run `npm run check && npm run build`.

## License

MIT — see [LICENSE](./LICENSE).
