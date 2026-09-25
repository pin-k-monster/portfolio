import type { LucideIcon } from "lucide-react";

/**
 * How confident you are with a technology. Only used to pick a badge style —
 * no percentages, no progress bars.
 *
 * - `مسلط`      expert
 * - `مقدماتی`   intermediate
 * - `آشنا`      familiar
 */
export type Proficiency = "مسلط" | "مقدماتی" | "آشنا";

/** One technology inside a skill group. */
export interface Skill {
  /** Unique id, used as the React key. */
  id: string;
  /** Display name, e.g. "TypeScript". Rendered LTR. */
  name: string;
  /** Optional level. Omit it and the badge disappears, leaving just the name. */
  proficiency?: Proficiency;
  /**
   * Path to the icon inside `/public`, e.g. `/icons/react.svg`.
   * Optional: omit it to render the name without an icon.
   */
  icon?: string;
}

/** One card of the skills grid. */
export interface SkillGroup {
  /** Unique id, used as the React key. */
  id: string;
  /** Icon shown next to the group title. Any lucide icon. */
  icon: LucideIcon;
  /** Group title, e.g. "Frontend". */
  title: string;
  /** The technologies in this group. */
  skills: Skill[];
}

/** Content of the skills section. */
export interface SkillsContent {
  /** Small label above the heading. */
  eyebrow: string;
  /** Section heading. */
  title: string;
  /** Technology names shown in the scrolling marquee. */
  marquee: string[];
  /** The skill cards, in render order. */
  groups: SkillGroup[];
}
