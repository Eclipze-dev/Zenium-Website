"use server";

import { revalidatePath } from "next/cache";
import { execute } from "@/lib/cms/db";
import { logActivity } from "@/lib/cms/activity";
import { requireCmsSession } from "@/lib/cms/rbac";
import { getBlogPostById, getBlogPostBySlug } from "@/lib/cms/queries";
import { blogPostSchema } from "@/lib/cms/schemas";
import { BLOG_INDEX_PATH } from "@/lib/seo/paths";

function emptyToNull(value?: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

export async function createBlogPostAction(input: unknown) {
  const session = await requireCmsSession();
  const parsed = blogPostSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: parsed.error.issues[0]?.message || "Invalid input" };
  }

  const existing = await getBlogPostBySlug(parsed.data.slug);
  if (existing) {
    return { ok: false as const, error: "Slug is already in use" };
  }

  const adminId = Number(session.user.id);
  const publishedAt =
    parsed.data.status === "published" ? new Date() : null;

  const result = await execute(
    `INSERT INTO blog_posts
      (title, slug, excerpt, content, featured_image_url, alt_text, category, tags,
       meta_title, meta_description, status, created_by, updated_by, published_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      parsed.data.title,
      parsed.data.slug,
      emptyToNull(parsed.data.excerpt),
      emptyToNull(parsed.data.content),
      emptyToNull(parsed.data.featured_image_url),
      emptyToNull(parsed.data.alt_text),
      emptyToNull(parsed.data.category),
      emptyToNull(parsed.data.tags),
      emptyToNull(parsed.data.meta_title),
      emptyToNull(parsed.data.meta_description),
      parsed.data.status,
      adminId,
      adminId,
      publishedAt,
    ],
  );

  await logActivity(adminId, "create", "blog_post", result.insertId);
  revalidatePath("/admin/blog");
  revalidatePath(BLOG_INDEX_PATH);
  return { ok: true as const, id: result.insertId };
}

export async function updateBlogPostAction(id: number, input: unknown) {
  const session = await requireCmsSession();
  if (!Number.isInteger(id) || id < 1) {
    return { ok: false as const, error: "Invalid post" };
  }

  const parsed = blogPostSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: parsed.error.issues[0]?.message || "Invalid input" };
  }

  const post = await getBlogPostById(id);
  if (!post) {
    return { ok: false as const, error: "Post not found" };
  }

  const existing = await getBlogPostBySlug(parsed.data.slug, id);
  if (existing) {
    return { ok: false as const, error: "Slug is already in use" };
  }

  const adminId = Number(session.user.id);
  let publishedAt: Date | string | null = post.published_at;
  if (parsed.data.status === "published" && !post.published_at) {
    publishedAt = new Date();
  }
  if (parsed.data.status === "draft") {
    publishedAt = post.published_at;
  }

  await execute(
    `UPDATE blog_posts
     SET title = ?, slug = ?, excerpt = ?, content = ?, featured_image_url = ?,
         alt_text = ?, category = ?, tags = ?, meta_title = ?, meta_description = ?,
         status = ?, updated_by = ?, published_at = ?
     WHERE id = ?`,
    [
      parsed.data.title,
      parsed.data.slug,
      emptyToNull(parsed.data.excerpt),
      emptyToNull(parsed.data.content),
      emptyToNull(parsed.data.featured_image_url),
      emptyToNull(parsed.data.alt_text),
      emptyToNull(parsed.data.category),
      emptyToNull(parsed.data.tags),
      emptyToNull(parsed.data.meta_title),
      emptyToNull(parsed.data.meta_description),
      parsed.data.status,
      adminId,
      publishedAt,
      id,
    ],
  );

  await logActivity(adminId, "update", "blog_post", id);
  revalidatePath("/admin/blog");
  revalidatePath(`/admin/blog/${id}/edit`);
  revalidatePath(BLOG_INDEX_PATH);
  revalidatePath(`${BLOG_INDEX_PATH}/${parsed.data.slug}`);
  return { ok: true as const };
}

export async function deleteBlogPostAction(id: number) {
  const session = await requireCmsSession();
  if (!Number.isInteger(id) || id < 1) {
    return { ok: false as const, error: "Invalid post" };
  }

  const post = await getBlogPostById(id);
  if (!post) {
    return { ok: false as const, error: "Post not found" };
  }

  await execute("DELETE FROM blog_posts WHERE id = ?", [id]);
  await logActivity(Number(session.user.id), "delete", "blog_post", id);
  revalidatePath("/admin/blog");
  revalidatePath(BLOG_INDEX_PATH);
  return { ok: true as const };
}
