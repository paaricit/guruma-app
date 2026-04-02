"use client";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import { uiPresets } from "@/lib/ui-presets";

export default function SharedFooter() {
  return (
    <Box
      sx={{
        position: "relative",
        pt: { xs: 2.5, md: 3 },
        pb: { xs: 2.5, md: 3.5 },
        color: "#fff",
        overflow: "hidden",
        backgroundImage: "linear-gradient(rgba(0, 17, 43, 0.72), rgba(0, 17, 43, 0.72)), url('/images/footer_image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Box
        sx={{
          py: { xs: 2, md: 2.6 },
          px: { xs: 2, md: 3 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2
        }}
      >
        <Typography
          sx={{
            color: "#162b53",
            fontFamily: "var(--font-forum), serif",
            fontSize: { xs: 54, md: "70.95px" },
            lineHeight: { md: "98.708px" }
          }}
        >
          Stay Connected
        </Typography>
        <Typography sx={{ color: "#f2b595", fontSize: { xs: 24, md: 38 }, display: { xs: "none", md: "block" } }}>◌◌◌</Typography>
      </Box>

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={uiPresets.footerGrid}>
          <Box sx={{ pt: { xs: 2, md: 4 } }}>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 5 } }}>
              <Box>
                <Typography sx={{ fontSize: { xs: 25, md: 30 }, fontWeight: 700 }}>IISHT</Typography>
                <Typography sx={{ mt: 1.2, color: "rgba(255,255,255,0.92)", fontSize: { xs: 15, md: 18 }, lineHeight: 1.45 }}>
                  4th floor, no 4, Abhinav centre Old no 19, New, off Chamiers Road, Cooperative Colony, Chennai, Tamil Nadu 600018
                </Typography>
                <Box sx={{ borderBottom: "1px solid rgba(255,255,255,0.7)", mt: 1.5, width: 130 }} />

                <Box sx={{ mt: 1.8, display: "flex", alignItems: "center", gap: 1 }}>
                  <PhoneInTalkOutlinedIcon />
                  <Typography sx={{ fontWeight: 700, fontSize: 20 }}>Phone number</Typography>
                </Box>
                <Typography sx={{ mt: 0.6, fontSize: 18, color: "rgba(255,255,255,0.95)" }}>+91-9123-456-789</Typography>
                <Box sx={{ borderBottom: "1px solid rgba(255,255,255,0.7)", mt: 1.2, width: 130 }} />

                <Box sx={{ mt: 1.7, display: "flex", alignItems: "center", gap: 1 }}>
                  <EmailOutlinedIcon />
                  <Typography sx={{ fontWeight: 700, fontSize: 20 }}>Email</Typography>
                </Box>
                <Typography sx={{ mt: 0.5, fontSize: 18, color: "rgba(255,255,255,0.95)" }}>info@iishtgold.com</Typography>
                <Box sx={{ borderBottom: "1px solid rgba(255,255,255,0.7)", mt: 1.2, width: 130 }} />
              </Box>

              <Box>
                <Typography sx={{ fontSize: { xs: 20, md: 26 }, fontWeight: 700 }}>Our Services</Typography>
                <Stack spacing={0.7} sx={{ mt: 1.5 }}>
                  {["About Her", "Sessions", "Events", "Our Programs", "Wisdom", "Sapt Sadhana", "Courses", "Blogs"].map((item) => (
                    <Typography key={item} sx={{ fontSize: { xs: 28, md: 32 }, color: "rgba(255,255,255,0.95)" }}>
                      {item}
                    </Typography>
                  ))}
                </Stack>

                <Stack direction="row" spacing={1.8} sx={{ mt: 2.2 }}>
                  <Box sx={{ width: 61.6, height: 61.6, borderRadius: "14px", bgcolor: "#fff", color: "#001f54", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <PlayArrowRoundedIcon sx={{ fontSize: 34 }} />
                  </Box>
                  <Box sx={{ width: 61.6, height: 61.6, borderRadius: "50%", bgcolor: "#fff", color: "#001f54", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <FacebookRoundedIcon sx={{ fontSize: 34 }} />
                  </Box>
                  <Box sx={{ width: 60.4, height: 60.4, borderRadius: "8px", bgcolor: "#fff", color: "#001f54", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <LinkedInIcon sx={{ fontSize: 34 }} />
                  </Box>
                  <Box sx={{ width: 58.1, height: 58.1, borderRadius: "14px", border: "2px solid #fff", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <InstagramIcon sx={{ fontSize: 32 }} />
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>

          <Card sx={{ borderRadius: "18px", bgcolor: "#e3e4e8", p: { xs: 2.3, md: 2.8 }, mt: { xs: 1, md: 4 }, boxShadow: "none" }}>
            <Stack spacing={1.25}>
              <Typography sx={{ color: "#4c5ea4", fontSize: 13 }}>Name</Typography>
              <Box sx={{ height: 50, borderRadius: "10px", border: "1px solid #6c85d2", bgcolor: "rgba(255,255,255,0.3)" }} />

              <Typography sx={{ color: "#4c5ea4", fontSize: 13 }}>Phone</Typography>
              <Box sx={{ height: 50, borderRadius: "10px", border: "1px solid #6c85d2", bgcolor: "rgba(255,255,255,0.3)" }} />
              <Typography sx={{ color: "rgba(76,94,164,0.7)", fontSize: 10.5 }}>
                We strongly recommend adding a phone number. This will help verify your account and keep it safe.
              </Typography>

              <Typography sx={{ color: "#4c5ea4", fontSize: 13 }}>Email</Typography>
              <Box sx={{ height: 50, borderRadius: "10px", border: "1px solid #6c85d2", bgcolor: "rgba(255,255,255,0.3)" }} />

              <Typography sx={{ color: "#4c5ea4", fontSize: 13 }}>Country</Typography>
              <Box
                sx={{
                  height: 50,
                  borderRadius: "10px",
                  border: "1px solid #6c85d2",
                  bgcolor: "rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  pr: 1
                }}
              >
                <KeyboardArrowDownRoundedIcon sx={{ color: "#4c5ea4" }} />
              </Box>

              <Typography sx={{ color: "#4c5ea4", fontSize: 13 }}>What would you like guidance on?</Typography>
              <Box
                sx={{
                  height: 50,
                  borderRadius: "10px",
                  border: "1px solid #6c85d2",
                  bgcolor: "rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  pr: 1
                }}
              >
                <KeyboardArrowDownRoundedIcon sx={{ color: "#4c5ea4" }} />
              </Box>

              <Button
                variant="contained"
                sx={{
                  ...uiPresets.ctaButton,
                  mt: 1.4,
                  mx: "auto",
                  height: 40,
                  width: 180,
                  bgcolor: "#3450ac",
                  fontSize: 16
                }}
              >
                Submit
              </Button>
            </Stack>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
