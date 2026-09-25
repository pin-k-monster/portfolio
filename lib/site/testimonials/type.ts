/** One testimonial, used by the card stack, the avatar row and the grid. */
export interface Testimonial {
  /** Unique id, used as the React key. */
  id: string;
  /** The person's name. */
  name: string;
  /** Their job title. */
  role: string;
  /** Their company. */
  company?: string;
  /** Short project name shown as a badge. */
  project?: string;
  /** The quote. */
  quote: string;
  /** Star rating, 1-5. Defaults to 5. */
  rating?: number;
}

/** One cell of the "at a glance" grid in the summary card. */
export interface TestimonialStat {
  /** Unique id, used as the React key. */
  id: string;
  /** The number, pre-formatted (Persian digits included). */
  value: string;
  /** What the number means. */
  label: string;
}

/** Content of the testimonials section. */
export interface TestimonialsContent {
  /** Small label above the heading. */
  eyebrow: string;
  /** Section heading. */
  title: string;
  /** Intro paragraph. */
  description: string;
  /** Big average score, pre-formatted. */
  average: string;
  /** Label above the average score. */
  averageLabel: string;
  /** Small note next to the star rating. */
  ratingNote: string;
  /** The "at a glance" cells. */
  stats: TestimonialStat[];
  /** Label above the avatar row. */
  avatarsLabel: string;
  /** The testimonials themselves. */
  items: Testimonial[];
  /** Heading of the client logo row. */
  clientsTitle: string;
  /** Client names for the logo row. */
  clients: { id: string; name: string }[];
}
