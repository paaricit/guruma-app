/**
 * Spiritual retreats — Photo Gallery (`public/images/our-programs/spiritual-retreats-gallery/`).
 * Source: recursive JPEG/PNG under the bundled `retreats` folder; web-sized (max edge 1920, mozjpeg).
 * HEIC sources in that bundle are skipped here when Sharp has no HEIF decoder (convert to JPEG locally to add them).
 */

const SLIDE_COUNT = 31;

export const spiritualRetreatsPhotoGallerySlides: readonly string[] = Array.from(
  { length: SLIDE_COUNT },
  (_, i) =>
    `/images/our-programs/spiritual-retreats-gallery/slide-${String(i + 1).padStart(2, "0")}.jpg`
);
