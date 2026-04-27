import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostPage, getBlogPostBySlug, getBlogSlugs } from "@/modules/blog";

type BlogPostRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Article | Guruma" };
  }
  return {
    title: `${post.title} | Guruma`,
    description: post.excerpt
  };
}

export default async function BlogPostRoutePage({ params }: BlogPostRouteProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }
  return <BlogPostPage post={post} />;
}
