/**
 * Custom spacing: `theme.spacing(n)` returns **rem** so padding/margin/gap `sx` props scale with root font size.
 *
 * Default MUI uses **8px per unit** (`spacing(1)` → `8px`). Here `spacing(1)` → `0.5rem` (8px when root is 16px).
 */
const remPerUnit = 0.5;

export function spacing(factor: number): string {
  return `${factor * remPerUnit}rem`;
}
