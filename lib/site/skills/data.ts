/**
 * محتوای مهارت‌ها (این فایل کد واقعی است).
 * نوار marquee نیازی به اعداد فارسی ندارد؛ نام فناوری‌هاست.
 */
import { CodeXml, DatabaseSearch, PenTool, Wrench } from "lucide-react";
import type { SkillsContent } from "./type";

export const skills: SkillsContent = {
  eyebrow: "توانمندی‌ها",
  title: "جعبه‌ابزار فنی من",
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
      icon: CodeXml,
      skills: [
        { id: "ts", name: "TypeScript", proficiency: "مقدماتی" },
        { id: "go", name: "Go", proficiency: "مقدماتی" },
        { id: "py", name: "Python", proficiency: "مسلط" },
        { id: "rust", name: "Rust", proficiency: "آشنا" },
      ],
    },
    {
      id: "frontend",
      title: "فرانت‌اند و رابط کاربری",
      icon: PenTool,
      skills: [
        { id: "react", name: "React", proficiency: "مقدماتی" },
        { id: "next", name: "Next.js", proficiency: "مقدماتی" },
        { id: "tailwind", name: "Tailwind CSS", proficiency: "مقدماتی" },
        { id: "pwa", name: "PWA", proficiency: "مسلط" },
      ],
    },
    {
      id: "backend",
      title: "بک‌اند و داده",
      icon: DatabaseSearch,
      skills: [
        { id: "node", name: "Node.js", proficiency: "مقدماتی" },
        { id: "nest", name: "NestJS", proficiency: "مسلط" },
        { id: "pg", name: "PostgreSQL", proficiency: "مقدماتی" },
        { id: "redis", name: "Redis", proficiency: "مسلط" },
      ],
    },
    {
      id: "infra",
      title: "زیرساخت و ابزار",
      icon: Wrench,
      skills: [
        { id: "docker", name: "Docker", proficiency: "مسلط" },
        { id: "k8s", name: "Kubernetes", proficiency: "آشنا" },
        { id: "git", name: "Git / CI-CD", proficiency: "مقدماتی" },
        { id: "aws", name: "AWS", proficiency: "مسلط" },
      ],
    },
  ],
} satisfies SkillsContent;