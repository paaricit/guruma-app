"use client";

import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
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

function BlogListRow({ post }: { post: BlogPost }) {
  const theme = useTheme();
  const ink = theme.palette.primary.dark;
  const thumb = encodePublicPath(post.listImage);

  return (
    <Box
      component="article"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 2.5, md: 3 },
        py: { xs: unitScale(28), md: unitScale(36) },
        "&:first-of-type": { pt: 0 }
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: 1, md: "min(100%, 490px)" },
          maxWidth: { xs: 1, md: 490 },
          mx: { xs: "auto", md: 0 },
          aspectRatio: "490 / 320",
          flexShrink: 0,
          borderRadius: unitScale(12),
          overflow: "hidden",
          bgcolor: alpha(ink, 0.06)
        }}
      >
        <Image src={thumb} alt="" fill sizes="(max-width: 900px) 100vw, 490px" style={{ objectFit: "cover" }} />
      </Box>
      <Box sx={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Typography
          sx={{
            fontSize: unitScale(14),
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            color: theme.palette.primary.main,
            fontWeight: 600,
            mb: 1
          }}
        >
          {post.readMinutes} min read
        </Typography>
        <Typography
          component="h3"
          sx={{
            fontFamily: "var(--font-forum), serif",
            fontSize: { xs: unitScale(24), md: unitScale(30) },
            fontWeight: 600,
            color: ink,
            lineHeight: 1.25,
            mb: 1.5
          }}
        >
          {post.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: unitScale(16),
            lineHeight: 1.65,
            color: alpha(theme.palette.text.primary, 0.72),
            mb: 2
          }}
        >
          {post.excerpt}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexWrap: "wrap", mt: "auto" }}>
          <Button
            component={Link}
            href={`/blog/${post.slug}`}
            variant="outlined"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              borderColor: ink,
              color: ink,
              textTransform: "none",
              fontWeight: 600,
              fontSize: unitScale(16),
              width: unitScale(100),
              height: unitScale(45),
              minWidth: unitScale(100),
              minHeight: unitScale(45),
              borderRadius: unitScale(10),
              px: 0
            }}
          >
            Read
          </Button>
          <IconButton
            aria-label="Share article"
            size="small"
            sx={{
              width: unitScale(45),
              height: unitScale(45),
              minWidth: unitScale(45),
              minHeight: unitScale(45),
              bgcolor: theme.palette.common.white,
              border: `1px solid ${alpha(ink, 0.2)}`,
              color: theme.palette.primary.main,
              "&:hover": { bgcolor: alpha(theme.palette.common.white, 0.92) }
            }}
          >
            <ShareOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export function BlogListSection({ posts }: { posts: readonly BlogPost[] }) {
  const theme = useTheme();
  const ink = theme.palette.primary.dark;

  return (
    <Box
      component="section"
      aria-labelledby="blog-list-heading"
      sx={{
        position: "relative",
        bgcolor: "#F7F7F5",
        pt: { xs: unitScale(8), md: unitScale(12) },
        pb: { xs: unitScale(48), md: unitScale(72) },
        backgroundImage: "url('/images/blog/listing-bg-spiral.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: { xs: "75%", md: "52%" }
      }}
    >
      <SectionTopArc surface="#F7F7F5" bottom="100%" />
      <Container maxWidth={pageContainerMaxWidth} sx={{ ...pageSectionGutterSx }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { sm: "flex-start" }, justifyContent: { sm: "flex-start" }, gap: 2, mb: 2 }}>
          <Box
            sx={{
              width: unitScale(52),
              height: unitScale(52),
              borderRadius: "50%",
              bgcolor: theme.palette.guru.warm,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}
            aria-hidden
          >
            <ArticleRoundedIcon sx={{ color: theme.palette.common.white, fontSize: unitScale(28) }} />
          </Box>
          <Box>
            <Typography
              id="blog-list-heading"
              component="h2"
              sx={{
                fontFamily: "var(--font-forum), serif",
                fontSize: { xs: unitScale(32), md: unitScale(40) },
                fontWeight: 600,
                color: ink
              }}
            >
              Blogs
            </Typography>
            <Typography
              sx={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: { xs: unitScale(15), md: unitScale(17) },
                color: alpha(theme.palette.text.primary, 0.72),
                mt: 0.5,
                mb: 5
              }}
            >
              Articles and reflections on spirituality, relationships, emotions, and conscious living.
            </Typography>
          </Box>
        </Box>

        <Box component="div">{posts.map((p) => <BlogListRow key={p.slug} post={p} />)}</Box>
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
