"use server";

import { revalidatePath } from "next/cache";
import { execute } from "@/lib/cms/db";
import { logActivity } from "@/lib/cms/activity";
import { requireCmsSession } from "@/lib/cms/rbac";
import { getPageById, getPageBySlug } from "@/lib/cms/queries";
import { pageSchema } from "@/lib/cms/schemas";

function emptyToNull(value?: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

export async function createPageAction(input: unknown) {
  const session = await requireCmsSession();
  const parsed = pageSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: parsed.error.issues[0]?.message || "Invalid input" };
  }

  const existing = await getPageBySlug(parsed.data.slug);
  if (existing) {
    return { ok: false as const, error: "Slug is already in use" };
  }

  const adminId = Number(session.user.id);
  const result = await execute(
    `INSERT INTO pages (title, slug, content, status, seo_title, seo_description, created_by, updated_by)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      parsed.data.title,
      parsed.data.slug,
      emptyToNull(parsed.data.content) ?? "",
      parsed.data.status,
      emptyToNull(parsed.data.seo_title),
      emptyToNull(parsed.data.seo_description),
      adminId,
      adminId,
    ],
  );

  await logActivity(adminId, "create", "page", result.insertId);
  revalidatePath("/admin");
  revalidatePath("/admin/pages");
  if (parsed.data.status === "published") {
    revalidatePath(`/${parsed.data.slug}`);
  }
  return { ok: true as const, id: result.insertId };
}

export async function updatePageAction(id: number, input: unknown) {
  const session = await requireCmsSession();
  if (!Number.isInteger(id) || id < 1) {
    return { ok: false as const, error: "Invalid page" };
  }

  const parsed = pageSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: parsed.error.issues[0]?.message || "Invalid input" };
  }

  const page = await getPageById(id);
  if (!page) {
    return { ok: false as const, error: "Page not found" };
  }

  const existing = await getPageBySlug(parsed.data.slug, id);
  if (existing) {
    return { ok: false as const, error: "Slug is already in use" };
  }

  const adminId = Number(session.user.id);
  await execute(
    `UPDATE pages
     SET title = ?, slug = ?, content = ?, status = ?, seo_title = ?, seo_description = ?, updated_by = ?
     WHERE id = ?`,
    [
      parsed.data.title,
      parsed.data.slug,
      emptyToNull(parsed.data.content) ?? "",
      parsed.data.status,
      emptyToNull(parsed.data.seo_title),
      emptyToNull(parsed.data.seo_description),
      adminId,
      id,
    ],
  );

  await logActivity(adminId, "update", "page", id);
  revalidatePath("/admin");
  revalidatePath("/admin/pages");
  revalidatePath(`/admin/pages/${id}/edit`);
  revalidatePath(`/${parsed.data.slug}`);
  if (page.slug !== parsed.data.slug) {
    revalidatePath(`/${page.slug}`);
  }
  return { ok: true as const };
}

export async function togglePageStatusAction(id: number, status: "draft" | "published") {
  const session = await requireCmsSession();
  if (!Number.isInteger(id) || id < 1) {
    return { ok: false as const, error: "Invalid page" };
  }
  if (status !== "draft" && status !== "published") {
    return { ok: false as const, error: "Invalid status" };
  }

  const page = await getPageById(id);
  if (!page) {
    return { ok: false as const, error: "Page not found" };
  }

  const adminId = Number(session.user.id);
  await execute(
    "UPDATE pages SET status = ?, updated_by = ? WHERE id = ?",
    [status, adminId, id],
  );
  await logActivity(
    adminId,
    status === "published" ? "publish" : "unpublish",
    "page",
    id,
  );
  revalidatePath("/admin");
  revalidatePath("/admin/pages");
  return { ok: true as const };
}

export async function deletePageAction(id: number) {
  const session = await requireCmsSession();
  if (!Number.isInteger(id) || id < 1) {
    return { ok: false as const, error: "Invalid page" };
  }

  const page = await getPageById(id);
  if (!page) {
    return { ok: false as const, error: "Page not found" };
  }

  await execute("DELETE FROM pages WHERE id = ?", [id]);
  await logActivity(Number(session.user.id), "delete", "page", id);
  revalidatePath("/admin");
  revalidatePath("/admin/pages");
  return { ok: true as const };
}
