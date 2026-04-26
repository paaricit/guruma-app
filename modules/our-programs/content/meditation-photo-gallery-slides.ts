/**
 * Meditation — Photo Gallery (`public/images/our-programs/meditation-gallery/`).
 * Source: bundled JPEGs from design; exported as web-sized slides (max edge 1920, mozjpeg).
 */

const SLIDE_COUNT = 40;

export const meditationPhotoGallerySlides: readonly string[] = Array.from(
  { length: SLIDE_COUNT },
  (_, i) =>
    `/images/our-programs/meditation-gallery/slide-${String(i + 1).padStart(2, "0")}.jpg`
);
