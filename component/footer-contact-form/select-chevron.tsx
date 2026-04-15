import * as React from "react";
import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

/**
 * Figma-style chevron for `Select` / `TextField select` (replaces default triangle).
 * Must be `forwardRef` for MUI `IconComponent`.
 */
export const GurumaSelectChevron = React.forwardRef<SVGSVGElement, SvgIconProps>(
  function GurumaSelectChevron(props, ref) {
    return (
      <SvgIcon {...props} ref={ref} viewBox="0 0 24 24" fontSize="medium" sx={props.sx}>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth={2.1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 10l5 5 5-5"
        />
      </SvgIcon>
    );
  }
);
