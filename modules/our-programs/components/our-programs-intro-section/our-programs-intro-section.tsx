import Image from "next/image";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";
import { ourProgramsIntro } from "../../content/our-programs-content";

export function OurProgramsIntroSection() {
  const dividerSrc = encodePublicPath("/images/our-programs/bar.svg");

  return (
    <Stack spacing={unitScale(10)} sx={{ maxWidth: unitScale(920), mx: "auto !important", textAlign: "center", mt: `${unitScale(60)} !important` }}>
      <Typography
        component="h1"
        sx={{
          fontFamily: "var(--font-forum), serif",
          color: "common.white",
          fontSize: { xs: unitScale(48), md: unitScale(74) },
          lineHeight: 1.12
        }}
      >
        {ourProgramsIntro.heading}
      </Typography>
      <Box sx={{ position: "relative", width: "100%", maxWidth: unitScale(588), height: unitScale(35), mx: "auto !important" }}>
        <Image src={dividerSrc} alt="" fill sizes="588px" style={{ objectFit: "contain" }} />
      </Box>
      <Typography
        sx={{
          color: "common.white",
          fontSize: { xs: unitScale(20), md: unitScale(26) },
          lineHeight: 1.65,
          mx: "auto"
        }}
      >
        {ourProgramsIntro.body}
        <br />
        {ourProgramsIntro.bodySecondLine}
      </Typography>
    </Stack>
  );
}
