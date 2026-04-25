"use client";

import Box from "@mui/material/Box";
import { unitScale } from "@/utils/unit-scale";
import { ourPrograms } from "../../content/our-programs-content";
import { OurProgramCard } from "./our-program-card";

export function OurProgramsCardsSection() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        columnGap: unitScale(90),
        rowGap: unitScale(90),
        mt: { xs: unitScale(8), md: unitScale(14) }
      }}
    >
      {ourPrograms.map((program) => (
        <OurProgramCard key={program.href} program={program} />
      ))}
    </Box>
  );
}
