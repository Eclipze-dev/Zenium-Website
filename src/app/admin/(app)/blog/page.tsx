import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlogPostsTable from "@/components/cms/BlogPostsTable";
import { PageHeader } from "@/components/cms/PageHeader";
import { toPlain } from "@/lib/cms/plain";
import { listBlogPosts } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Blog posts" };

export default async function AdminBlogPage() {
  const posts = await listBlogPosts();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Blog posts"
        subtitle="Drafts stay out of the sitemap until published."
        actions={
          <Button asChild>
            <Link href="/admin/blog/new">New post</Link>
          </Button>
        }
      />
      <BlogPostsTable posts={toPlain(posts)} />
    </div>
  );
}
