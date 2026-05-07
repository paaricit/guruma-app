"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import { HomeProgramsSection } from "@/modules/home/components";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";
import { divineDayProgramRows } from "../content/divine-day-programs";
import { Typography } from "@mui/material";

/** Same layout and behavior as the home programs band, with one program row for Divine Day. */
export function DivineDayProgramsSection() {
  const groupDecorSrc = encodePublicPath("/images/Divine day page Photos/group-41.png");

  return (
    <Box sx={{ position: "relative", pb: { md: unitScale(40), lg: unitScale(48) } }}>
      <HomeProgramsSection programs={divineDayProgramRows} />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          left: { md: unitScale(24), lg: unitScale(32) },
          bottom: { md: unitScale(8), lg: unitScale(218) },
          width: { md: unitScale(220), lg: unitScale(280), xl: unitScale(420) },
          height: { md: unitScale(48), lg: unitScale(58), xl: unitScale(66) },
          display: { xs: "none", md: "block" },
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <Image alt="" fill src={groupDecorSrc} sizes="(max-width: 1199px) 220px, 320px" style={{ objectFit: "contain", objectPosition: "left bottom" }} />
      </Box>
      <Box
        sx={{
          mt: { xs: 4, md: 6 },
          pt: { xs: 2, md: 3 },
          position: "relative",
          zIndex: 1,
          width: 1,
          maxWidth: unitScale(1280),
          mx: "auto",
          px: { xs: 4, sm: 4, md: 3, lg: 0 }
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: { xs: "center", md: "space-between" },
            gap: { xs: 1, md: 2 },
            flexWrap: { xs: "wrap", md: "nowrap" },
            width: "100%",
            minWidth: 0
          }}
        >
          <Typography
            component="p"
            sx={{
              flex: { xs: "1 1 100%", md: "0 1 auto" },
              minWidth: 0,
              color: (theme) => theme.palette.primary.dark,
              fontFamily: "var(--font-forum), serif",
              fontSize: {
                xs: unitScale(32),
                sm: unitScale(40),
                md: unitScale(52),
                lg: unitScale(62)
              },
              fontWeight: 400,
              lineHeight: { xs: 1.1, sm: 1.08, md: 1.05 },
              letterSpacing: { xs: "-0.02em", md: 0 },
              textAlign: { xs: "center", md: "left" },
              whiteSpace: { xs: "normal", md: "nowrap" },
              textOverflow: { md: "ellipsis" },
              overflow: { md: "hidden" }
            }}
          >
            Stay Connected
          </Typography>

          {/* <Box
              sx={{
                position: "relative",
                flex: "1 1 0%",
                minWidth: bridgeArt.minWidth,
                height: bridgeArt.height,
                minHeight: bridgeArt.height,
                maxWidth: { xs: "48%", sm: "52%", md: "58%" },
                ml: { xs: 0.25, sm: 0.5 }
              }}
            >
              <Image
                alt=""
                src={STAY_CONNECTED_ART}
                fill
                sizes="(max-width: 600px) 50vw, 520px"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </Box> */}
        </Box>
      </Box>
    </Box>
  );
}
