"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import type { Theme } from "@mui/material/styles";
import { alpha, useTheme } from "@mui/material/styles";
import Image from "next/image";
import { SectionTopArc } from "@/component/section-top-curve";
import type { BlogContentBlock, BlogPost } from "@/modules/blog/content";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";

const BLOG_LANDING_HERO_BG = "/images/blog/landing-hero-rectangle-34624485.svg" as const;
const callbackFieldSx = {
  "& .MuiInput-underline:before": { borderColor: "rgba(255,255,255,0.5)" },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderColor: "rgba(255,255,255,0.8)" },
  "& .MuiInput-underline:after": { borderColor: "#fff" },
  "& .MuiInputLabel-root": {
    color: (theme: Theme) => theme.palette.common.white,
    fontSize: { xs: unitScale(20), md: unitScale(24) },
    fontWeight: (theme: Theme) => theme.typography.fontWeightBold
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: (theme: Theme) => theme.palette.common.white
  },
  "& .MuiInputBase-input": { color: "#fff" },
  "& .MuiInputBase-input::placeholder": { color: "rgba(255,255,255,0.55)", opacity: 1 }
} as const;

const callbackFormFields = [
  { key: "name", label: "NAME", hint: "Enter your name", type: "text" as const },
  { key: "phone", label: "PHONE", hint: "Enter your phone number", type: "tel" as const },
  { key: "email", label: "EMAIL", hint: "Enter your Email ID", type: "email" as const },
  { key: "message", label: "MESSAGE", hint: "Give us a message", type: "text" as const }
];

type CallbackFormValues = Record<(typeof callbackFormFields)[number]["key"], string>;

const initialCallbackValues: CallbackFormValues = {
  name: "",
  phone: "",
  email: "",
  message: ""
};

function BlogBlocks({ blocks }: { blocks: BlogContentBlock[] }) {
  const theme = useTheme();

  return (
    <Box sx={{ "& > *:not(:last-child)": { mb: 2.5 } }}>
      {blocks.map((b, i) => {
        if (b.type === "h2") {
          const id = b.id ?? `heading-${i}`;
          return (
            <Typography
              key={`h2-${i}`}
              id={id}
              component="h2"
              sx={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: { xs: unitScale(18), md: unitScale(22) },
                fontWeight: 700,
                color: theme.palette.primary.dark,
                lineHeight: 1.35,
                scrollMarginTop: unitScale(100)
              }}
            >
              {b.text}
            </Typography>
          );
        }
        if (b.type === "p") {
          return (
            <Typography
              key={`p-${i}`}
              component="p"
              sx={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: { xs: unitScale(16), md: unitScale(17) },
                lineHeight: 1.75,
                color: alpha(theme.palette.text.primary, 0.78)
              }}
            >
              {b.text}
            </Typography>
          );
        }
        return (
          <List
            key={`ul-${i}`}
            dense
            sx={{ listStyleType: "disc", pl: 2.5, color: alpha(theme.palette.text.primary, 0.78), "& .MuiListItem-root": { display: "list-item", py: 0.25 } }}
          >
            {b.items.map((item) => (
              <ListItem key={item} disableGutters sx={{ display: "list-item" }}>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: { xs: unitScale(16), md: unitScale(17) },
                    lineHeight: 1.7,
                    color: alpha(theme.palette.text.primary, 0.78)
                  }}
                />
              </ListItem>
            ))}
          </List>
        );
      })}
    </Box>
  );
}

export function BlogPostArticleSection({ post }: { post: BlogPost }) {
  const theme = useTheme();
  const bannerBg = encodePublicPath(BLOG_LANDING_HERO_BG);
  const thumbnail = encodePublicPath(post.heroImage || post.listImage || BLOG_LANDING_HERO_BG);
  const [callbackValues, setCallbackValues] = useState<CallbackFormValues>(initialCallbackValues);

  return (
    <Box
      component="article"
      sx={{
        pb: { xs: unitScale(28), md: unitScale(144) },
        pt: { xs: unitScale(28), md: 0 }

      }}
    >
      {/* Separated banner block */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: unitScale(280), md: unitScale(360) },
          mb: { xs: unitScale(24), md: unitScale(34) },
          overflow: "hidden"
        }}
      >
        <Image src={bannerBg} alt="" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
      </Box>

      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(180deg, #D1F1F5 0%, #F7F7F5 100%)",
          pt: { xs: unitScale(24), md: unitScale(32) },
          pb: { xs: unitScale(24), md: unitScale(36) }
        }}
      >
        <SectionTopArc surface="#D1F1F5" />
        <Container maxWidth={pageContainerMaxWidth} sx={{ ...pageSectionGutterSx, mt: '-17%', zIndex: 111, position: 'relative' }}>
          {/* Thumbnail card inside content container */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: unitScale(1160),
              mx: "auto",
              borderRadius: unitScale(20),
              overflow: "hidden",
              border: `2px solid ${alpha(theme.palette.common.white, 0.88)}`,
              aspectRatio: "1160 / 540",
              mb: { xs: unitScale(28), md: unitScale(34) }
            }}
          >
            <Image src={thumbnail} alt={post.title} fill priority sizes="(max-width: 1200px) 100vw, 1160px" style={{ objectFit: "cover", objectPosition: "center top" }} />
          </Box>
          <Box
            sx={{
              maxWidth: unitScale(1160),
              mx: "auto",
              px: { xs: 0, md: unitScale(4) },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1fr) minmax(280px, 360px)" },
              gap: { xs: unitScale(28), lg: unitScale(30) },
              alignItems: "start"
            }}
          >
            <Box>
              <Typography
                component="h1"
                sx={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: { xs: unitScale(30), md: unitScale(40) },
                  fontWeight: 700,
                  lineHeight: 1.25,
                  color: theme.palette.primary.dark,
                  mb: { xs: 2, md: 2.5 }
                }}
              >
                {post.title}
              </Typography>
              <BlogBlocks blocks={post.blocks} />
            </Box>

            <Box sx={{ position: { lg: "sticky" }, top: { lg: unitScale(96) } }}>
              <Box
                sx={{
                  bgcolor: "#091a43",
                  backgroundImage:
                    "linear-gradient(rgba(9,26,67,0.65), rgba(9,26,67,0.5)), url('/images/Home Page Photos/section-2.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: unitScale(14),
                  p: { xs: unitScale(16), md: unitScale(20) },
                  boxShadow: `0 ${unitScale(12)} ${unitScale(34)} ${alpha(theme.palette.primary.dark, 0.24)}`
                }}
              >
                <Box sx={{ display: "grid", gap: { xs: unitScale(12), md: unitScale(14) } }}>
                  {callbackFormFields.map((field) => (
                    <TextField
                      key={field.key}
                      name={field.key}
                      variant="standard"
                      type={field.type}
                      label={field.label}
                      placeholder={field.hint}
                      value={callbackValues[field.key]}
                      onChange={(ev) =>
                        setCallbackValues((prev) => ({
                          ...prev,
                          [field.key]: ev.target.value
                        }))
                      }
                      InputProps={{
                        sx: {
                          fontSize: { xs: unitScale(15), md: unitScale(16) },
                          height: { xs: unitScale(44), md: unitScale(48) }
                        }
                      }}
                      fullWidth
                      sx={callbackFieldSx}
                      slotProps={{
                        inputLabel: { shrink: true }
                      }}
                    />
                  ))}
                </Box>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: unitScale(16),
                    height: unitScale(46),
                    bgcolor: theme.palette.common.white,
                    color: theme.palette.primary.dark,
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: unitScale(10),
                    "&:hover": { bgcolor: alpha(theme.palette.common.white, 0.92) }
                  }}
                >
                  Get a call back
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
