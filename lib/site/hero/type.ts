import type { CtaLink } from "../shared";

/**
 * One line of the animated terminal in the hero.
 *
 * - `cmd`  typed like a shell command, always LTR monospace
 * - `out`  plain stdout
 * - `ok`   success line
 * - `err`  error line
 */
export type HeroTerminalLine = {
  type: "cmd" | "out" | "ok" | "err";
  /** The line itself. Persian stays RTL, commands stay LTR. */
  text: string;
};

/** Content of the hero section. */
export interface HeroContent {
  /** Small shimmering line above the heading. */
  badge: string;
  /** Your name, rendered inside the blurred heading. */
  name: string;
  /** Words between the name and the rotating role, e.g. "the developer of". */
  titlePrefix: string;
  /** Roles cycled by the rotating word, e.g. ["full-stack", "frontend"]. */
  rotatingRoles: string[];
  /** Intro paragraph under the heading. */
  description: string;
  /** Primary action, usually the résumé download. */
  primary: CtaLink;
  /** Secondary action, usually a link to the projects section. */
  secondary: CtaLink;
  /** Window chrome of the terminal mock. */
  terminalTitle: string;
  /** Lines the terminal types out when it scrolls into view. */
  terminalLines: HeroTerminalLine[];
}
