import type { CtaLink } from "../shared";

/** Content of the closing call-to-action banner. */
export interface CtaContent {
  /** Heading. */
  title: string;
  /** Supporting paragraph. Omit to hide it. */
  description?: string;
  /** The single action. Usually `site.resume`. */
  action: CtaLink;
  /** Small print under the button, e.g. "PDF · updated 2026". */
  note?: string;
}
