import type { Metadata } from "next";
import BlogPage from "@/modules/blog";

export const metadata: Metadata = {
  title: "Blogs | Guruma",
  description: "Articles and reflections on spirituality, relationships, emotions, and conscious living."
};

export default function BlogRoutePage() {
  return <BlogPage />;
}
