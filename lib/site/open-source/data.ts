import type { OpenSourceContent } from "./type";

export const openSource: OpenSourceContent = {
  eyebrow: "متن‌باز",
  title: "کد، سهم من در جامعه",
  description:
    "باور دارم نرم‌افزار خوب باید دیده و استفاده شود؛ بخشی از کدهایم را متن‌باز منتشر می‌کنم تا دیگران هم از آن‌ها بهره ببرند.",
  repos: [
    {
      id: "jdate-react",
      name: "jdate-react",
      description: "کتابخانه‌ی تقویم شمسی React بدون وابستگی؛ با SSR و RTL.",
      language: "TypeScript",
      stars: 720,
      forks: 84,
      url: "https://github.com/arian-rezaei/jdate-react",
    },
    {
      id: "release-cli",
      name: "release-cli",
      description: "انتشار نسخه‌ی خودکار از tag و changelog با Go/Cobra.",
      language: "Go",
      stars: 460,
      forks: 31,
      url: "https://github.com/arian-rezaei/release-cli",
    },
    {
      id: "fa-tools",
      name: "fa-tools",
      description: "ابزارهای متن فارسی: اعداد، جداساز هزارگان و اسمارشناس.",
      language: "JavaScript",
      stars: 390,
      forks: 55,
      url: "https://github.com/arian-rezaei/fa-tools",
    },
  ],
  githubCta: {
    label: "دیدن بقیه‌ی مخزن‌ها در گیت‌هاب",
    href: "https://github.com/arian-rezaei",
    target: "_blank",
    rel: "noopener noreferrer",
  },
} satisfies OpenSourceContent;