"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import { SectionTopArc } from "@/component/section-top-curve";
import type { BlogPost } from "@/modules/blog/content";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";

const stayConnectedHeadingFontSize = {
  xs: unitScale(36),
  md: unitScale(70)
} as const;

function formatPublished(d: string) {
  try {
    return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(new Date(d));
  } catch {
    return d;
  }
}

function RelatedCard({ post }: { post: BlogPost }) {
  const theme = useTheme();
  const ink = theme.palette.primary.dark;
  const src = encodePublicPath(post.listImage);

  return (
    <Box
      component={Link}
      href={`/blog/${post.slug}`}
      sx={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
        borderRadius: unitScale(14),
        overflow: "hidden",
        bgcolor: theme.palette.background.paper,
        border: `1px solid ${alpha(ink, 0.08)}`,
        boxShadow: `0 ${unitScale(6)} ${unitScale(24)} ${alpha(ink, 0.08)}`,
        transition: (t) => t.transitions.create(["transform", "box-shadow"], { duration: t.transitions.duration.shorter }),
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: `0 ${unitScale(10)} ${unitScale(32)} ${alpha(ink, 0.12)}`
        }
      }}
    >
      <Box sx={{ position: "relative", aspectRatio: "490 / 320", width: 1 }}>
        <Image src={src} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            py: 1,
            px: 1.5,
            background: `linear-gradient(0deg, ${alpha(ink, 0.85)} 0%, transparent 100%)`
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              fontSize: unitScale(15),
              fontWeight: 600,
              color: theme.palette.common.white,
              lineHeight: 1.25,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}
          >
            {post.title}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography sx={{ fontSize: unitScale(12), color: alpha(theme.palette.text.primary, 0.55), mb: 0.75 }}>
          By {post.author} | {formatPublished(post.publishedAt)}
        </Typography>
        <Typography
          sx={{
            fontFamily: "var(--font-forum), serif",
            fontSize: unitScale(17),
            fontWeight: 600,
            color: ink,
            lineHeight: 1.3,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}
        >
          {post.title}
        </Typography>
        <Typography
          sx={{
            mt: 1,
            fontSize: unitScale(14),
            lineHeight: 1.55,
            color: alpha(theme.palette.text.primary, 0.68),
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}
        >
          {post.excerpt}
        </Typography>
      </Box>
    </Box>
  );
}

export function BlogRelatedPostsSection({ posts }: { posts: BlogPost[] }) {
  const theme = useTheme();
  const ink = theme.palette.primary.dark;

  if (posts.length === 0) return null;

  return (
    <Box
      component="section"
      aria-labelledby="blog-related-heading"
      sx={{
        position: "relative",
        background: "linear-gradient(179.99deg, #FFFFFF 32.44%, #D1F1F5 75.31%)",
        pt: { xs: unitScale(40), md: unitScale(1) },
        pb: { xs: unitScale(56), md: unitScale(80) }
      }}
    >
      <SectionTopArc surface="#FFFFFF" />
      <Container maxWidth={pageContainerMaxWidth} sx={{ ...pageSectionGutterSx }}>
        <Typography
          id="blog-related-heading"
          component="h2"
          sx={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: { xs: unitScale(22), md: unitScale(32) },
            fontWeight: 700,
            color: ink,
            mb: 3
          }}
        >
          What to read next
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: { xs: 2.5, md: 3 }
          }}
        >
          {posts.map((p) => (
            <RelatedCard key={p.slug} post={p} />
          ))}
        </Box>
        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            pt: { xs: 2, md: 3 },
            position: "relative",
            zIndex: 1,
            width: "100%",
            minWidth: 0
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: 0.75, md: 2 },
              flexWrap: "nowrap",
              width: "100%",
              minWidth: 0
            }}
          >
            <Typography
              component="p"
              sx={{
                flex: "0 1 auto",
                minWidth: 0,
                color: (t) => '#162B53',
                fontFamily: "var(--font-forum), serif",
                fontSize: stayConnectedHeadingFontSize,
                fontWeight: 400,
                lineHeight: { xs: 1.08, md: 1.05 },
                letterSpacing: { xs: "-0.02em", md: 0 },
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden"
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
      </Container>
    </Box>
  );
}
