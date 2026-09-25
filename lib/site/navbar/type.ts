import type { CtaLink } from "../shared";

/** Ids of the sections the navbar can highlight. Must match the `id` attribute on each `<section>`. */
export type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "milestones"
  | "open-source"
  | "testimonials"
  | "writing"
  | "contact";

/** One navbar link. */
export interface NavItem {
  /** Section id; the navbar highlights the entry whose section is in view. */
  id: SectionId;
  /** Visible label. */
  label: string;
  /** Target, usually `"#" + id`. */
  href: string;
}

/** Content of the navbar. */
export interface NavbarContent {
  /** Links in render order. In RTL the first item is the right-most. */
  items: NavItem[];
  /** Header call-to-action, usually the résumé download. */
  cta: CtaLink;
  /** Heading of the mobile drawer. */
  mobileMenuTitle: string;
}
