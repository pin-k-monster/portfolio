import type { CtaLink, ImageAsset } from "../shared";

/** One key/value pair in the "facts" grid. */
export interface AboutFact {
  /** Unique id, used as the React key. */
  id: string;
  /** Short label, e.g. "Location". */
  field: string;
  /** The value, e.g. "Tehran, Iran". */
  value: string;
}

/** Content of the "About" section. */
export interface AboutContent {
  /** Portrait shown in the sticky card. Falls back to the monogram when the file is missing. */
  avatar: ImageAsset;
  /** Full name. Usually `site.name`. */
  name: string;
  /** One-line job title under the name. */
  headline: string;
  /**
   * Bio paragraphs. A paragraph that contains `focusKeyword` gets a marker-stroke
   * highlight, so the phrase must appear verbatim in the text.
   */
  bio: string[];
  /** The phrase highlighted across the bio. Keep it short. */
  focusKeyword: string;
  /** The facts grid. */
  facts: AboutFact[];
  /** Résumé button. Usually `site.resume`. */
  resume: CtaLink;
}
