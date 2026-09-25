import type { CtaLink } from "../shared";

/** One open-source repository card. */
export interface Repo {
  /** Unique id, used as the React key. */
  id: string;
  /** Repository name, rendered LTR. */
  name: string;
  /** One-line summary. */
  description: string;
  /** Primary language, e.g. "TypeScript". */
  language: string;
  /** Star count. Persian digits are applied automatically. */
  stars: number;
  /** Fork count. Persian digits are applied automatically. */
  forks: number;
  /** Repository URL on GitHub. */
  url: string;
}

/** Content of the open-source section. */
export interface OpenSourceContent {
  /** Small label above the heading. */
  eyebrow: string;
  /** Section heading. */
  title: string;
  /** Intro paragraph. */
  description: string;
  /** Repository cards. */
  repos: Repo[];
  /** "See all repositories" button, usually your GitHub profile. */
  githubCta: CtaLink;
}
