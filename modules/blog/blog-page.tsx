import Box from "@mui/material/Box";
import { getAllBlogPosts } from "@/modules/blog/content";
import { BlogLandingHeroSection, BlogListSection } from "./components";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <Box component="main" sx={{ width: 1, maxWidth: "100%", mx: "auto", minWidth: 0, overflowX: "hidden" }}>
      <BlogLandingHeroSection />
      <BlogListSection posts={posts} />
    </Box>
  );
}
