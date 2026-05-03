/**
 * Personal counselling — Photo Gallery frames for phones and tablets (`theme.breakpoints.down("lg")`).
 * PNG exports live in `public/images/our-programs/personal-counselling-gallery/mobile-tab/`.
 */

const SLIDE_COUNT = 5;

export const personalCounsellingPhotoGalleryMobileTabletSlides: readonly string[] = Array.from(
  { length: SLIDE_COUNT },
  (_, i) =>
    `/images/our-programs/personal-counselling-gallery/mobile-tab/slide-${String(i + 1).padStart(2, "0")}.png`
);
