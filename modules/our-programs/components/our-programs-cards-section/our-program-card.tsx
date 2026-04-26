import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";
import type { ProgramCard } from "../../content/our-programs-content";

export type OurProgramCardProps = {
  program: ProgramCard;
};

export function OurProgramCard({ program }: OurProgramCardProps) {
  const imageSrc = encodePublicPath(program.imageSrc);

  return (
    <Box
      sx={{
        borderRadius: unitScale(25),
        bgcolor: "background.paper",
        overflow: "hidden",
        border: (theme) => `1px solid ${alpha(theme.palette.primary.dark, 0.08)}`,
        boxShadow: (theme) => `0 ${unitScale(8)} ${unitScale(24)} ${alpha(theme.palette.primary.dark, 0.08)}`
      }}
    >
      <Box sx={{ position: "relative", width: "100%", aspectRatio: "620 / 380" }}>
        <Image src={imageSrc} alt={program.title} fill sizes="(max-width: 900px) 100vw, 620px" style={{ objectFit: "cover" }} />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.72) 100%)"
          }}
        />
        <Stack direction="row" alignItems="center" spacing={unitScale(10)} sx={{ position: "absolute", left: unitScale(18), right: unitScale(18), bottom: unitScale(16) }}>
          <Box
            sx={{
              width: unitScale(85),
              height: unitScale(85),
              borderRadius: "50%",
              bgcolor: "#E9967B",
              display: "grid",
              placeItems: "center",
              color: "common.white",
              fontWeight: 700,
              fontSize: unitScale(24),
              flexShrink: 0
            }}
          >
            {program.id}
          </Box>
          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              fontWeight: 500,
              color: "common.white",
              fontSize: { xs: unitScale(34), md: unitScale(44) },
              lineHeight: 1.1
            }}
          >
            {program.title}
          </Typography>
        </Stack>
      </Box>

      <Stack spacing={unitScale(12)} sx={{ px: unitScale(40), py: unitScale(40) }}>
        {/* <Typography sx={{ textTransform: "uppercase", letterSpacing: "0.08em", color: "guru.coral", fontSize: unitScale(16), fontWeight: 700 }}>
          {program.whoItsFor}
        </Typography> */}
        <Typography sx={{ color: "text.secondary", fontSize: unitScale(19), lineHeight: 1.6, minHeight: { md: unitScale(110) } }}>
          {program.description}
        </Typography>
        <Button
          component={Link}
          href={program.href}
          variant="contained"
          color="primary"
          sx={{
            textTransform: "none",
            fontWeight: 700,
            fontSize: unitScale(19),
            borderRadius: unitScale(12),
            minHeight: unitScale(60),
            width: 1,
            bgcolor: "#031942",
            "&:hover": {
              bgcolor: "#031942"
            }
          }}
        >
          {program.ctaLabel}
        </Button>
      </Stack>
    </Box>
  );
}
