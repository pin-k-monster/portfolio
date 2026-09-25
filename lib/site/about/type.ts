import type { CtaLink, ImageAsset } from "../shared";

/** یک واقعیت کوتاه شخصی/حرفه‌ای در نوار اطلاعات. */
export interface AboutFact {
  /** کلید یکتا. */
  id: string;
  /** برچسب فارسی: مثل «سکونت». */
  field: string;
  /** مقدار فارسی: مثل «تهران، ایران». */
  value: string;
}

/** کل محتوای درباره‌ی من. */
export interface AboutContent {
  /** پرتره‌ی شما در کارت معرفی. */
  avatar: ImageAsset;
  /** نام کامل؛ بالای کارت. */
  name: string;
  /** برچسب شغلی/تیتر کوتاه. */
  headline: string;
  /** بدنه‌ی داستان؛ هر آیتم یک پاراگراف. بخشی از متن برای highlight-text انتخاب می‌شود. */
  bio: string[];
  /** عبارتی از bio که با highlight-text زیرش خط می‌کشد (یک جمله/عبارت). */
  focusKeyword: string;
  /** واقعیت‌های کنار معرفی. */
  facts: AboutFact[];
  /** لینک رزومه؛ از config. */
  resume: CtaLink;
}