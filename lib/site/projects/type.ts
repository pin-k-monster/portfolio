import type { ImageAsset, TechTag } from "../shared";

/** A filter tab above the project grid. */
export interface ProjectCategory {
  /** Unique id; projects reference it through `categoryId`. */
  id: string;
  /** Visible label, e.g. "Web". */
  label: string;
}

/** External links for a project. */
export interface ProjectLinks {
  /** Source repository. */
  code?: string;
  /** Live demo. */
  live?: string;
}

/** One project card. */
export interface Project {
  /** Unique id, used as the React key. */
  id: string;
  /** Stable slug, handy if you later add a detail route. */
  slug: string;
  /** Project name. */
  title: string;
  /** Must match one of the `categories[].id` values. */
  categoryId: string;
  /** Two-line teaser shown on the card. */
  summary: string;
  /** Full description shown inside the detail dialog. */
  longDescription: string;
  /** Your role on the project, e.g. "Full-stack developer". */
  role: string;
  /** Technology badges. */
  tech: TechTag[];
  /**
   * Cover image. Optional: when omitted (or when the file is missing) the card
   * falls back to a generated gradient with the project's monogram.
   */
  image?: ImageAsset;
  /** Demo / repository links. Omit the whole object when there are none. */
  links?: ProjectLinks;
  /** The first visible featured project gets the spotlight treatment. */
  featured?: boolean;
}

/** Content of the projects section. */
export interface ProjectsContent {
  /** Small label above the heading. */
  eyebrow: string;
  /** Section heading. */
  title: string;
  /** Intro paragraph. */
  description: string;
  /** Filter tabs, in render order. */
  categories: ProjectCategory[];
  /** Id of the tab selected on load. */
  defaultCategory: string;
  /** The projects themselves. */
  projects: Project[];
}
