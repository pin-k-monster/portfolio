/**
 * Content of the footer. The footer is intentionally minimal: a copyright line
 * and a credit line. Build `copyright` from `site.name` and a Jalali year (see
 * `data.ts`) so it never drifts out of sync with the rest of the site.
 */
export interface FooterContent {
  /** Copyright line, e.g. "© ۱۴۰۵ کیارش جمالی". */
  copyright: string;
  /** Credit line under the copyright, e.g. "Built with Next.js and VibeFarsi". */
  credit: string;
}
