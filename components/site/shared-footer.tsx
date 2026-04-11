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

const footerVideoSrc = "/images/Blue Abstract Welcome Background Intro Video.mp4";

type SharedFooterProps = {
  /** When false, omits the top “Stay Connected” row (e.g. rendered above the footer on the home page). */
  showStayConnectedBanner?: boolean;
};

export default function SharedFooter({ showStayConnectedBanner = true }: SharedFooterProps) {
  return (
    <Box
      sx={{
        position: "relative",
        // Above home “Sapt Sadhana” block (`zIndex: 1`) so the contact card can overlap upward
        // without painting underneath that section’s gradient.
        zIndex: 2,
        pt: { xs: 2.5, md: 3 },
        pb: { xs: 2.5, md: 3.5 },
        color: "#fff",
        overflowX: "clip",
        overflowY: "visible",
        isolation: "isolate"
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          pointerEvents: "none"
        }}
      >
        <Box
          component="video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/footer_image.png"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            transform: "translate(-50%, -50%)",
            objectFit: "cover"
          }}
        >
          <source src={footerVideoSrc} type="video/mp4" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0, 17, 43, 0.55) 0%, rgba(0, 17, 43, 0.78) 45%, rgba(0, 17, 43, 0.82) 100%)"
          }}
        />
      </Box>

      {showStayConnectedBanner ? (
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            py: { xs: 2, md: 2.6 },
            px: { xs: 2, md: 3 },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap"
          }}
        >
          <Typography
            sx={{
              color: "#162b53",
              fontFamily: "var(--font-forum), serif",
              fontSize: { xs: "clamp(1.75rem, 8vw, 2.5rem)", sm: 40, md: "70.95px" },
              lineHeight: { xs: 1.15, md: "98.708px" },
              maxWidth: "100%",
              wordBreak: "break-word"
            }}
          >
            Stay Connected
          </Typography>
          <Typography sx={{ color: "#f2b595", fontSize: { xs: 24, md: 38 }, display: { xs: "none", md: "block" } }}>◌◌◌</Typography>
        </Box>
      ) : null}

      {/* --- Section: Links, contact & newsletter --- */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 2, sm: 3 },
          pb: 0.5,
          overflow: "visible"
        }}
      >
        <Box sx={{ ...uiPresets.footerGrid, overflow: "visible" }}>
          <Box sx={{ pt: { xs: 2, md: 4 }, minWidth: 0 }}>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }, gap: { xs: 3, md: 5 } }}>
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ fontSize: { xs: 22, md: 30 }, fontWeight: 700 }}>IISHT</Typography>
                <Typography
                  sx={{
                    mt: 1.2,
                    color: "rgba(255,255,255,0.88)",
                    fontSize: { xs: "0.7rem", sm: "0.78rem", md: "0.8125rem" },
                    lineHeight: { xs: 1.42, md: 1.48 },
                    maxWidth: { sm: 420, md: "none" },
                    wordBreak: "break-word",
                    overflowWrap: "anywhere"
                  }}
                >
                  4th floor, no 4, Abhinav centre Old no 19, New, off Chamiers Road, Cooperative Colony, Chennai, Tamil Nadu 600018
                </Typography>
                <Box sx={{ borderBottom: "1px solid rgba(255,255,255,0.7)", mt: 1.5, width: 130 }} />

                <Box sx={{ mt: 1.8, display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                  <PhoneInTalkOutlinedIcon />
                  <Typography sx={{ fontWeight: 700, fontSize: { xs: 17, md: 20 } }}>Phone number</Typography>
                </Box>
                <Typography sx={{ mt: 0.6, fontSize: { xs: "0.8rem", sm: "0.875rem", md: "0.9375rem" }, color: "rgba(255,255,255,0.92)", wordBreak: "break-all" }}>
                  +91-9123-456-789
                </Typography>
                <Box sx={{ borderBottom: "1px solid rgba(255,255,255,0.7)", mt: 1.2, width: 130 }} />

                <Box sx={{ mt: 1.7, display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                  <EmailOutlinedIcon />
                  <Typography sx={{ fontWeight: 700, fontSize: { xs: 17, md: 20 } }}>Email</Typography>
                </Box>
                <Typography sx={{ mt: 0.5, fontSize: { xs: "0.78rem", sm: "0.8125rem", md: "0.875rem" }, color: "rgba(255,255,255,0.92)", wordBreak: "break-all" }}>
                  info@iishtgold.com
                </Typography>
                <Box sx={{ borderBottom: "1px solid rgba(255,255,255,0.7)", mt: 1.2, width: 130 }} />
              </Box>

              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ fontSize: { xs: 18, md: 26 }, fontWeight: 700 }}>Our Services</Typography>
                <Stack spacing={0.7} sx={{ mt: 1.5 }}>
                  {["About Her", "Sessions", "Events", "Our Programs", "Wisdom", "Sapt Sadhana", "Courses", "Blogs"].map((item) => (
                    <Typography key={item} sx={{ fontSize: { xs: 16, sm: 17, md: 22, lg: 22 }, color: "rgba(255,255,255,0.95)", lineHeight: 1.35 }}>
                      {item}
                    </Typography>
                  ))}
                </Stack>

                <Stack direction="row" spacing={{ xs: 1, sm: 1.2 }} sx={{ mt: 1.8, flexWrap: "wrap" }}>
                  <Box sx={{ width: { xs: 40, md: 46 }, height: { xs: 40, md: 46 }, flexShrink: 0, borderRadius: "10px", bgcolor: "#fff", color: "#001f54", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <PlayArrowRoundedIcon sx={{ fontSize: { xs: 22, md: 24 } }} />
                  </Box>
                  <Box sx={{ width: { xs: 40, md: 46 }, height: { xs: 40, md: 46 }, flexShrink: 0, borderRadius: "50%", bgcolor: "#fff", color: "#001f54", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <FacebookRoundedIcon sx={{ fontSize: { xs: 22, md: 24 } }} />
                  </Box>
                  <Box sx={{ width: { xs: 38, md: 44 }, height: { xs: 38, md: 44 }, flexShrink: 0, borderRadius: "6px", bgcolor: "#fff", color: "#001f54", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <LinkedInIcon sx={{ fontSize: { xs: 22, md: 24 } }} />
                  </Box>
                  <Box sx={{ width: { xs: 38, md: 44 }, height: { xs: 38, md: 44 }, flexShrink: 0, borderRadius: "10px", border: "2px solid #fff", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <InstagramIcon sx={{ fontSize: { xs: 20, md: 22 } }} />
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>

          <Card
            sx={{
              position: "relative",
              zIndex: 2,
              borderRadius: "18px",
              bgcolor: "#e3e4e8",
              p: { xs: 2.3, md: 2.8 },
              mt: { xs: "-36px", md: "-45px" },
              boxShadow: "0 12px 40px rgba(0, 17, 43, 0.18)",
              width: "100%",
              maxWidth: "100%",
              minWidth: 0,
              alignSelf: "start"
            }}
          >
            <Stack spacing={1.25}>
              <Typography sx={{ color: "#4c5ea4", fontSize: 13 }}>Name</Typography>
              <Box sx={{ height: 50, borderRadius: "10px", border: "1px solid #6c85d2", bgcolor: "rgba(255,255,255,0.3)" }} />

              <Typography sx={{ color: "#4c5ea4", fontSize: 13 }}>Phone</Typography>
              <Box sx={{ height: 50, borderRadius: "10px", border: "1px solid #6c85d2", bgcolor: "rgba(255,255,255,0.3)" }} />
              <Typography sx={{ color: "rgba(76,94,164,0.75)", fontSize: { xs: "0.65rem", sm: "0.6875rem", md: "0.72rem" }, lineHeight: 1.35 }}>
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
