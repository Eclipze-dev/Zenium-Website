import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostForm from "@/components/cms/BlogPostForm";
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
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Edit blog post</h1>
        <p className="text-sm text-muted-foreground">{post.title}</p>
      </div>
      <BlogPostForm post={JSON.parse(JSON.stringify(post))} />
    </div>
  );
}
