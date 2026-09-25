import { CodeXml, DatabaseSearch, PenTool, Wrench } from "lucide-react";

import type { SkillsContent } from "./type";

/**
 * Skills shown as cards plus a scrolling marquee. `icon` points at a file in
 * `/public/icons`; `proficiency` is optional and only picks the badge style.
 */
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
          icon: "/icons/ts.svg",
        },
        {
          id: "go",
          name: "Go",
          proficiency: "مقدماتی",
          icon: "/icons/go.svg",
        },
        {
          id: "py",
          name: "Python",
          proficiency: "مسلط",
          icon: "/icons/py.svg",
        },
        {
          id: "rust",
          name: "Rust",
          proficiency: "آشنا",
          icon: "/icons/rust.svg",
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
          icon: "/icons/react.svg",
        },
        {
          id: "next",
          name: "Next.js",
          proficiency: "مقدماتی",
          icon: "/icons/next.svg",
        },
        {
          id: "tailwind",
          name: "Tailwind CSS",
          proficiency: "مقدماتی",
          icon: "/icons/tailwind.svg",
        },
        {
          id: "pwa",
          name: "PWA",
          proficiency: "مسلط",
          icon: "/icons/pwa.svg",
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
          icon: "/icons/node.svg",
        },
        {
          id: "nest",
          name: "NestJS",
          proficiency: "مسلط",
          icon: "/icons/nest.svg",
        },
        {
          id: "pg",
          name: "PostgreSQL",
          proficiency: "مقدماتی",
          icon: "/icons/pg.svg",
        },
        {
          id: "redis",
          name: "Redis",
          proficiency: "مسلط",
          icon: "/icons/redis.svg",
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
          icon: "/icons/docker.svg",
        },
        {
          id: "k8s",
          name: "Kubernetes",
          proficiency: "آشنا",
          icon: "/icons/k8s.svg",
        },
        {
          id: "git",
          name: "Git / CI-CD",
          proficiency: "مقدماتی",
          icon: "/icons/git.svg",
        },
        {
          id: "aws",
          name: "AWS",
          proficiency: "مسلط",
          icon: "/icons/aws.svg",
        },
      ],
    },
  ],
} satisfies SkillsContent;