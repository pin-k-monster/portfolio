/**
 * محتوای مهارت‌ها (این فایل کد واقعی است).
 *
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
        {
          id: "ts",
          name: "TypeScript",
          proficiency: "مقدماتی",
          icon: "https://cdn.simpleicons.org/typescript",
        },
        {
          id: "go",
          name: "Go",
          proficiency: "مقدماتی",
          icon: "https://cdn.simpleicons.org/go",
        },
        {
          id: "py",
          name: "Python",
          proficiency: "مسلط",
          icon: "https://cdn.simpleicons.org/python",
        },
        {
          id: "rust",
          name: "Rust",
          proficiency: "آشنا",
          icon: "https://cdn.simpleicons.org/rust",
        },
      ],
    },
    {
      id: "frontend",
      title: "فرانت‌اند و رابط کاربری",
      icon: PenTool,
      skills: [
        {
          id: "react",
          name: "React",
          proficiency: "مقدماتی",
          icon: "https://cdn.simpleicons.org/react",
        },
        {
          id: "next",
          name: "Next.js",
          proficiency: "مقدماتی",
          icon: "https://cdn.simpleicons.org/nextdotjs",
        },
        {
          id: "tailwind",
          name: "Tailwind CSS",
          proficiency: "مقدماتی",
          icon: "https://cdn.simpleicons.org/tailwindcss",
        },
        {
          id: "pwa",
          name: "PWA",
          proficiency: "مسلط",
          icon: "https://cdn.simpleicons.org/pwa",
        },
      ],
    },
    {
      id: "backend",
      title: "بک‌اند و داده",
      icon: DatabaseSearch,
      skills: [
        {
          id: "node",
          name: "Node.js",
          proficiency: "مقدماتی",
          icon: "https://cdn.simpleicons.org/nodedotjs",
        },
        {
          id: "nest",
          name: "NestJS",
          proficiency: "مسلط",
          icon: "https://cdn.simpleicons.org/nestjs",
        },
        {
          id: "pg",
          name: "PostgreSQL",
          proficiency: "مقدماتی",
          icon: "https://cdn.simpleicons.org/postgresql",
        },
        {
          id: "redis",
          name: "Redis",
          proficiency: "مسلط",
          icon: "https://cdn.simpleicons.org/redis",
        },
      ],
    },
    {
      id: "infra",
      title: "زیرساخت و ابزار",
      icon: Wrench,
      skills: [
        {
          id: "docker",
          name: "Docker",
          proficiency: "مسلط",
          icon: "https://cdn.simpleicons.org/docker",
        },
        {
          id: "k8s",
          name: "Kubernetes",
          proficiency: "آشنا",
          icon: "https://cdn.simpleicons.org/kubernetes",
        },
        {
          id: "git",
          name: "Git / CI-CD",
          proficiency: "مقدماتی",
          icon: "https://cdn.simpleicons.org/git",
        },
        {
          id: "firebase",
          name: "Firebase",
          proficiency: "مسلط",
          icon: "https://cdn.simpleicons.org/firebase",
        },
      ],
    },
  ],
} satisfies SkillsContent;