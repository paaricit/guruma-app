const REM_BASE_PX = 16;

export function pxToRem(px: number): string {
  return `${px / REM_BASE_PX}rem`;
}
