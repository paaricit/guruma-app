/**
 * Linear “design at width” scaling for CSS: size grows with `100vw`, with an automatic floor.
 *
 * Typical use: Figma artboard width 1580; token `atDesign` is the px at that width.
 * CSS output: `max(<autoMinPx>, calc(100vw * atDesign / designWidth))`.
 */

export type UnitScaleMinRule =
  | {
      kind: "viewport";
      /** Viewport width at which linear fluid equals the chosen minimum (floor). */
      floorViewportWidth: number;
    }
  | {
      kind: "ratio";
      /** `minPx = atDesign * minRatio` (e.g. 0.75 → 16px design min becomes 12px). */
      minRatio: number;
    };

export type UnitScaleOptions = {
  /** Reference layout width (e.g. Figma frame). Default 1580. */
  designWidth?: number;
  /** How the automatic minimum is derived. Default: viewport floor at 1280px. */
  minRule?: UnitScaleMinRule;
  /** Rounding for resolved min/max px written into CSS. Default 2. */
  fractionDigits?: number;
};

const DEFAULT_DESIGN_WIDTH = 1580;

const DEFAULT_MIN_RULE: UnitScaleMinRule = {
  kind: "viewport",
  floorViewportWidth: 1200,
};

function roundPx(value: number, fractionDigits: number): number {
  const factor = 10 ** fractionDigits;
  return Math.round(value * factor) / factor;
}

function assertPositive(name: string, value: number): void {
  if (!Number.isFinite(value) || value <= 0) {
    throw new RangeError(`${name} must be a finite number > 0, got ${String(value)}`);
  }
}

function resolveMinPx(
  atDesign: number,
  designWidth: number,
  minRule: UnitScaleMinRule,
): number {
  if (minRule.kind === "ratio") {
    assertPositive("minRatio", minRule.minRatio);
    if (minRule.minRatio > 1) {
      throw new RangeError(`minRatio must be <= 1, got ${String(minRule.minRatio)}`);
    }
    return atDesign * minRule.minRatio;
  }

  assertPositive("floorViewportWidth", minRule.floorViewportWidth);
  return atDesign * (minRule.floorViewportWidth / designWidth);
}

/** Linear fluid part only: proportional to viewport width. */
export function unitScaleFluid(atDesign: number, designWidth = DEFAULT_DESIGN_WIDTH): string {
  assertPositive("atDesign", atDesign);
  assertPositive("designWidth", designWidth);
  return `calc(100vw * ${atDesign} / ${designWidth})`;
}

/** Resolved automatic minimum in px (before rounding). */
export function unitScaleAutoMinPx(
  atDesign: number,
  options?: Pick<UnitScaleOptions, "designWidth" | "minRule">,
): number {
  assertPositive("atDesign", atDesign);
  const designWidth = options?.designWidth ?? DEFAULT_DESIGN_WIDTH;
  assertPositive("designWidth", designWidth);
  return resolveMinPx(atDesign, designWidth, options?.minRule ?? DEFAULT_MIN_RULE);
}

export type UnitScaleMeta = {
  atDesign: number;
  designWidth: number;
  minPx: number;
  fluid: string;
  /** Viewport width where `fluid` equals `minPx` for this token (for design QA). */
  viewportWhereFluidEqualsMinPx: number;
};

export function unitScaleMeta(atDesign: number, options?: UnitScaleOptions): UnitScaleMeta {
  const designWidth = options?.designWidth ?? DEFAULT_DESIGN_WIDTH;
  const minRule = options?.minRule ?? DEFAULT_MIN_RULE;
  const fractionDigits = options?.fractionDigits ?? 2;

  const minPxRaw = resolveMinPx(atDesign, designWidth, minRule);
  const minPx = roundPx(minPxRaw, fractionDigits);
  const fluid = unitScaleFluid(atDesign, designWidth);
  const viewportWhereFluidEqualsMinPx = (minPxRaw * designWidth) / atDesign;

  return {
    atDesign,
    designWidth,
    minPx,
    fluid,
    viewportWhereFluidEqualsMinPx,
  };
}

/**
 * Floor-only fluid scale: never below auto min; no upper cap.
 * CSS: `max(minPx, calc(100vw * atDesign / designWidth))`.
 */
export function unitScale(atDesign: number, options?: UnitScaleOptions): string {
  assertPositive("atDesign", atDesign);
  const designWidth = options?.designWidth ?? DEFAULT_DESIGN_WIDTH;
  assertPositive("designWidth", designWidth);
  const fractionDigits = options?.fractionDigits ?? 2;
  const minPx = roundPx(
    resolveMinPx(atDesign, designWidth, options?.minRule ?? DEFAULT_MIN_RULE),
    fractionDigits,
  );
  return `max(${minPx}px, ${unitScaleFluid(atDesign, designWidth)})`;
  // return `${unitScaleFluid(atDesign, designWidth)}`;

}

/**
 * Ceiling-only fluid scale: never above `maxPx`; grows downward on smaller viewports.
 * CSS: `min(maxPx, calc(100vw * atDesign / designWidth))`.
 */
export function unitScaleCapped(
  atDesign: number,
  maxPx: number,
  options?: Pick<UnitScaleOptions, "designWidth" | "fractionDigits">,
): string {
  assertPositive("atDesign", atDesign);
  assertPositive("maxPx", maxPx);
  const designWidth = options?.designWidth ?? DEFAULT_DESIGN_WIDTH;
  assertPositive("designWidth", designWidth);
  const fractionDigits = options?.fractionDigits ?? 2;
  const maxRounded = roundPx(maxPx, fractionDigits);
  return `min(${maxRounded}px, ${unitScaleFluid(atDesign, designWidth)})`;
}
