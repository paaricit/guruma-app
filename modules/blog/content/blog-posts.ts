/**
 * Blog posts derived from live IISHT scrape JSON.
 * Source file: `iisht-blogs-scraped.json` (generated from iisht.in Firestore).
 */

import scraped from "./iisht-blogs-scraped.json";
import thumbnailMap from "./blog-thumbnail-map.json";

export type BlogContentBlock =
  | { type: "h2"; id?: string; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type BlogSidebarLink = {
  label: string;
  sectionId: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readMinutes: number;
  listImage: string;
  heroImage: string;
  heroLine1: string;
  heroLine2: string;
  blocks: BlogContentBlock[];
  sidebarNav: BlogSidebarLink[];
  relatedSlugs: readonly string[];
};

type ScrapedPost = {
  slug: string;
  title: string;
  description: string;
  contentHtml: string;
  createdAt: string;
  imgUrl: string;
  mobileUrl?: string;
  active?: string;
};

type ScrapedPayload = {
  posts: ScrapedPost[];
};

const localThumbnailBySlug = thumbnailMap as Record<string, string>;

function decodeHtmlEntities(input: string): string {
  return input
    .replace(/&nbsp;/gi, " ")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripHtml(input: string): string {
  return decodeHtmlEntities(input.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}

function splitTitle(title: string): { heroLine1: string; heroLine2: string } {
  const parts = title.split(":");
  if (parts.length > 1) {
    return {
      heroLine1: parts[0].trim(),
      heroLine2: parts.slice(1).join(":").trim()
    };
  }

  const words = title.split(/\s+/);
  const midpoint = Math.ceil(words.length / 2);
  return {
    heroLine1: words.slice(0, midpoint).join(" "),
    heroLine2: words.slice(midpoint).join(" ")
  };
}

function isLikelyInlineHeading(text: string): boolean {
  if (!text) return false;
  if (text.length > 120) return false;
  if (text.endsWith("?")) return true;
  if (/^(what|how|why|when|who)\b/i.test(text)) return true;
  return false;
}

function extractContentBlocks(contentHtml: string): BlogContentBlock[] {
  const blocks: BlogContentBlock[] = [];
  const tagRegex = /<(h[1-6]|p|ul|ol)[^>]*>([\s\S]*?)<\/\1>/gi;
  let match: RegExpExecArray | null;

  while ((match = tagRegex.exec(contentHtml)) !== null) {
    const tag = match[1]?.toLowerCase();
    const inner = match[2] ?? "";

    if (tag === "ul" || tag === "ol") {
      const items = [...inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
        .map((m) => stripHtml(m[1] ?? ""))
        .filter(Boolean);
      if (items.length > 0) blocks.push({ type: "ul", items });
      continue;
    }

    const text = stripHtml(inner);
    if (!text) continue;

    if (tag.startsWith("h")) {
      blocks.push({ type: "h2", text });
      continue;
    }

    // Some CMS headings are authored as <p><strong>Heading?</strong></p>.
    if (isLikelyInlineHeading(text)) {
      blocks.push({ type: "h2", text });
      continue;
    }

    blocks.push({ type: "p", text });
  }

  if (blocks.length === 0) {
    const fallback = stripHtml(contentHtml);
    return fallback ? [{ type: "p", text: fallback }] : [{ type: "p", text: "Content coming soon." }];
  }

  return blocks;
}

function estimateReadMinutes(text: string): number {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

const payload = scraped as ScrapedPayload;
const sourcePosts = (payload.posts ?? []).filter((p) => (p.active ?? "yes").toLowerCase() === "yes");

const postsWithoutRelated: Omit<BlogPost, "relatedSlugs">[] = sourcePosts.map((p) => {
  const contentText = stripHtml(p.contentHtml ?? "");
  const excerptSource = p.description?.trim() ? p.description : contentText;
  const excerpt = excerptSource.length > 240 ? `${excerptSource.slice(0, 237).trim()}...` : excerptSource;
  const blocks = extractContentBlocks(p.contentHtml ?? "");
  const firstHeading = blocks.find((b): b is { type: "h2"; text: string } => b.type === "h2")?.text ?? "Overview";
  const { heroLine1, heroLine2 } = splitTitle(p.title);
  const localThumbnail = localThumbnailBySlug[p.slug];
  const image = localThumbnail ?? p.imgUrl ?? p.mobileUrl ?? "/images/Home Page Photos/carousel-0.png";

  return {
    slug: p.slug,
    title: p.title,
    excerpt,
    author: "IISHT",
    publishedAt: p.createdAt,
    readMinutes: estimateReadMinutes(contentText),
    listImage: image,
    heroImage: image,
    heroLine1,
    heroLine2,
    blocks,
    sidebarNav: [{ label: firstHeading.slice(0, 80), sectionId: "heading-0" }]
  };
});

const posts: BlogPost[] = postsWithoutRelated.map((post, idx, all) => {
  const relatedSlugs = all
    .filter((candidate) => candidate.slug !== post.slug)
    .slice(idx, idx + 3)
    .map((candidate) => candidate.slug);

  if (relatedSlugs.length < 3) {
    for (const candidate of all) {
      if (candidate.slug === post.slug) continue;
      if (relatedSlugs.includes(candidate.slug)) continue;
      relatedSlugs.push(candidate.slug);
      if (relatedSlugs.length === 3) break;
    }
  }

  return { ...post, relatedSlugs };
});

const bySlug = new Map(posts.map((p) => [p.slug, p]));

export function getAllBlogPosts(): readonly BlogPost[] {
  return posts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return bySlug.get(slug);
}

export function getBlogSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getRelatedPostsForSlug(slug: string): BlogPost[] {
  const post = bySlug.get(slug);
  if (!post) return [];
  return post.relatedSlugs.map((s) => bySlug.get(s)).filter((p): p is BlogPost => Boolean(p));
}
