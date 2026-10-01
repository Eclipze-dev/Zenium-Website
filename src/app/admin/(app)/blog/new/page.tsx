import type { Metadata } from "next";
import BlogPostForm from "@/components/cms/BlogPostForm";
import { PageHeader } from "@/components/cms/PageHeader";

export const metadata: Metadata = { title: "New blog post" };

export default function NewBlogPostPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="New blog post" />
      <BlogPostForm />
    </div>
  );
}
