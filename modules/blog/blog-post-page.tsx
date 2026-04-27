import Box from "@mui/material/Box";
import type { BlogPost } from "@/modules/blog/content";
import { getRelatedPostsForSlug } from "@/modules/blog/content";
import { BlogPostArticleSection, BlogRelatedPostsSection } from "./components";

export function BlogPostPage({ post }: { post: BlogPost }) {
  const related = getRelatedPostsForSlug(post.slug);

  return (
    <Box component="main" sx={{ width: 1, maxWidth: "100%", mx: "auto", minWidth: 0, overflowX: "hidden" }}>
      <BlogPostArticleSection post={post} />
      <BlogRelatedPostsSection posts={related} />
    </Box>
  );
}
