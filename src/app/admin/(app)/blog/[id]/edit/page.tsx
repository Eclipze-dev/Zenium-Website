import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostForm from "@/components/cms/BlogPostForm";
import { PageHeader } from "@/components/cms/PageHeader";
import { toPlain } from "@/lib/cms/plain";
import { getBlogPostById } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Edit blog post" };

export default async function EditBlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (!Number.isInteger(id) || id < 1) notFound();
  const post = await getBlogPostById(id);
  if (!post) notFound();

  return (
    <div className="space-y-6">
      <PageHeader title="Edit blog post" subtitle={post.title} />
      <BlogPostForm post={toPlain(post)} />
    </div>
  );
}
