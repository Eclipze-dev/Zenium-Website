import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlogPostsTable from "@/components/cms/BlogPostsTable";
import { listBlogPosts } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Blog posts" };

export default async function AdminBlogPage() {
  const posts = await listBlogPosts();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Blog posts</h1>
          <p className="text-sm text-muted-foreground">
            Drafts stay out of the sitemap until published.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/blog/new">New post</Link>
        </Button>
      </div>
      <BlogPostsTable posts={JSON.parse(JSON.stringify(posts))} />
    </div>
  );
}
