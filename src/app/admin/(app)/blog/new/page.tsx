import type { Metadata } from "next";
import BlogPostForm from "@/components/cms/BlogPostForm";

export const metadata: Metadata = { title: "New blog post" };

export default function NewBlogPostPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">New blog post</h1>
      </div>
      <BlogPostForm />
    </div>
  );
}
