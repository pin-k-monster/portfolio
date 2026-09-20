/**
 * محتوای مهارت‌ها (این فایل کد واقعی است).
 * نوار marquee نیازی به اعداد فارسی ندارد؛ نام فناوری‌هاست.
 */
import type { SkillsContent } from "./type";

export const skills: SkillsContent = {
  eyebrow: "توانمندی‌ها",
  title: "جعبهابزار فنی من",
  marquee: [
    "TypeScript",
    "React",
    "Next.js",
    "Go",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Kubernetes",
    "Tailwind",
    "NestJS",
    "GraphQL",
  ],
  groups: [
    {
      id: "languages",
      title: "زبان‌های برنامه‌نویسی",
      skills: [
        { id: "ts", name: "TypeScript", proficiency: "متقدم" },
        { id: "go", name: "Go", proficiency: "متقدم" },
        { id: "py", name: "Python", proficiency: "خوب" },
        { id: "rust", name: "Rust", proficiency: "آشنا" },
      ],
    },
    {
      id: "frontend",
      title: "فرانت‌اند و رابط کاربری",
      skills: [
        { id: "react", name: "React", proficiency: "متقدم" },
        { id: "next", name: "Next.js", proficiency: "متقدم" },
        { id: "tailwind", name: "Tailwind CSS", proficiency: "متقدم" },
        { id: "pwa", name: "PWA", proficiency: "خوب" },
      ],
    },
    {
      id: "backend",
      title: "بک‌اند و داده",
      skills: [
        { id: "node", name: "Node.js", proficiency: "متقدم" },
        { id: "nest", name: "NestJS", proficiency: "خوب" },
        { id: "pg", name: "PostgreSQL", proficiency: "متقدم" },
        { id: "redis", name: "Redis", proficiency: "خوب" },
      ],
    },
    {
      id: "infra",
      title: "زیرساخت و ابزار",
      skills: [
        { id: "docker", name: "Docker", proficiency: "خوب" },
        { id: "k8s", name: "Kubernetes", proficiency: "آشنا" },
        { id: "git", name: "Git / CI-CD", proficiency: "متقدم" },
        { id: "aws", name: "AWS", proficiency: "خوب" },
      ],
    },
  ],
} satisfies SkillsContent;