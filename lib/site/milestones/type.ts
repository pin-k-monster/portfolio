/** One count-up number in the stats strip. A `value` of `0` hides the cell. */
export interface MilestoneNumber {
  /** Unique id, used as the React key. */
  id: string;
  /** Target number for the count-up animation. */
  value: number;
  /** Suffix rendered outside the animating box, e.g. "+" or "K+". */
  unit?: string;
  /** What the number counts, e.g. "years of experience". */
  label: string;
  /** Optional clarifying line under the label. */
  hint?: string;
}

/** One award or badge in the honours row. */
export interface MilestoneBadge {
  /** Unique id, used as the React key. */
  id: string;
  /** The badge text. */
  text: string;
}

/** Content of the stats / milestones section. */
export interface MilestonesContent {
  /** Small label above the heading. */
  eyebrow: string;
  /** Section heading. */
  title: string;
  /** The count-up cells. */
  numbers: MilestoneNumber[];
  /** Honours and awards. */
  honors: MilestoneBadge[];
}
