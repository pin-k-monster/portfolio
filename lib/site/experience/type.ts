import type { TechTag } from "../shared";

/** Date range of a role. */
export interface ExperiencePeriod {
  /** Start of the role. */
  start: Date;
  /** End of the role, or `null` for the current position. */
  end: Date | null;
  /**
   * Pre-formatted Persian range, e.g. "۱۴۰۳/۰۲ – اکنون".
   * Build it with `formatJalali` from `@/lib/jalali` so it stays in sync.
   */
  label: string;
}

/** One job entry. */
export interface ExperienceItem {
  /** Unique id, used as the React key. */
  id: string;
  /** Job title. */
  role: string;
  /** Employer name. */
  company: string;
  /** Employer website. Omit to render the name as plain text. */
  companyUrl?: string;
  /** Office location. */
  location?: string;
  /** When you worked there. */
  period: ExperiencePeriod;
  /** One or two sentences describing the scope of the work. */
  summary: string;
  /** 3-4 achievement bullets. Numbers in them are highlighted automatically. */
  points: string[];
  /** Technology badges. */
  stack: TechTag[];
}

/** Content of the "Experience" section. */
export interface ExperienceContent {
  /** Small label above the heading. */
  eyebrow: string;
  /** Section heading. */
  title: string;
  /** Roles, newest first. */
  items: ExperienceItem[];
}
