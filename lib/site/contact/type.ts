import type { SocialLink } from "../shared";

/** Which control renders a contact field. `tel` renders the Iranian phone input. */
export type ContactFieldType = "text" | "email" | "tel" | "textarea";

/** A single field of the contact form. */
export interface ContactField {
  /** Form key. Must match a key of the payload validated in `lib/site/contact/validation.ts`. */
  name: string;
  /** Visible label. */
  label: string;
  /** Placeholder text. */
  placeholder?: string;
  /** Helper text shown under the input when the field has no error. */
  hint?: string;
  /** Marks the field required. The matching validation rule is enforced too. */
  required?: boolean;
  /** Control to render. */
  type: ContactFieldType;
  /** Character cap, forwarded to the textarea. */
  maxLength?: number;
}

/** User-facing strings for every state of the contact form. */
export interface ContactFormText {
  /** The fields, in render order. */
  fields: ContactField[];
  /** Submit button label. */
  submitLabel: string;
  /** Submit button label while the request is in flight. */
  pendingLabel: string;
  /** Toast + success panel title. */
  successTitle: string;
  /** Toast + success panel body. */
  successDescription: string;
  /** Label of the button that resets the form after a successful send. */
  anotherLabel: string;
  /** Toast title on failure. */
  errorTitle: string;
  /** Toast body used when the server sends no message. */
  errorDescription: string;
}

/** Content of the "Contact" section. */
export interface ContactContent {
  /** Small label above the heading. */
  eyebrow: string;
  /** Section heading. */
  title: string;
  /** Intro paragraph under the heading. */
  description: string;
  /** Address of the direct "e-mail" card. Usually `site.contact.email`. */
  email: string;
  /** Note shown in the info alert, e.g. response time. */
  responseNote: string;
  /** Form strings and field definitions. */
  form: ContactFormText;
  /** Social links. Usually `site.socials`. */
  socials: SocialLink[];
}
