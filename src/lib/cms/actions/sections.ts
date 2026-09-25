"use server";

import { revalidatePath } from "next/cache";
import { execute } from "@/lib/cms/db";
import { logActivity } from "@/lib/cms/activity";
import { requireCmsSession } from "@/lib/cms/rbac";
import { getPageById, getPageSectionById } from "@/lib/cms/queries";
import { pageSectionSchema } from "@/lib/cms/schemas";

function emptyToNull(value?: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

export async function createPageSectionAction(pageId: number, input: unknown) {
  const session = await requireCmsSession();
  if (!Number.isInteger(pageId) || pageId < 1) {
    return { ok: false as const, error: "Invalid page" };
  }

  const page = await getPageById(pageId);
  if (!page) {
    return { ok: false as const, error: "Page not found" };
  }

  const parsed = pageSectionSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: parsed.error.issues[0]?.message || "Invalid input" };
  }

  try {
    const result = await execute(
      `INSERT INTO page_sections (page_id, section_key, heading, body, sort_order, enabled)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        pageId,
        parsed.data.section_key,
        emptyToNull(parsed.data.heading),
        emptyToNull(parsed.data.body),
        parsed.data.sort_order,
        parsed.data.enabled ? 1 : 0,
      ],
    );

    await logActivity(Number(session.user.id), "create", "page_section", result.insertId);
    revalidatePath(`/admin/pages/${pageId}/edit`);
    return { ok: true as const, id: result.insertId };
  } catch {
    return { ok: false as const, error: "Section key already exists on this page" };
  }
}

export async function updatePageSectionAction(id: number, input: unknown) {
  const session = await requireCmsSession();
  if (!Number.isInteger(id) || id < 1) {
    return { ok: false as const, error: "Invalid section" };
  }

  const section = await getPageSectionById(id);
  if (!section) {
    return { ok: false as const, error: "Section not found" };
  }

  const parsed = pageSectionSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: parsed.error.issues[0]?.message || "Invalid input" };
  }

  try {
    await execute(
      `UPDATE page_sections
       SET section_key = ?, heading = ?, body = ?, sort_order = ?, enabled = ?
       WHERE id = ?`,
      [
        parsed.data.section_key,
        emptyToNull(parsed.data.heading),
        emptyToNull(parsed.data.body),
        parsed.data.sort_order,
        parsed.data.enabled ? 1 : 0,
        id,
      ],
    );
  } catch {
    return { ok: false as const, error: "Section key already exists on this page" };
  }

  await logActivity(Number(session.user.id), "update", "page_section", id);
  revalidatePath(`/admin/pages/${section.page_id}/edit`);
  return { ok: true as const };
}

export async function deletePageSectionAction(id: number) {
  const session = await requireCmsSession();
  if (!Number.isInteger(id) || id < 1) {
    return { ok: false as const, error: "Invalid section" };
  }

  const section = await getPageSectionById(id);
  if (!section) {
    return { ok: false as const, error: "Section not found" };
  }

  await execute("DELETE FROM page_sections WHERE id = ?", [id]);
  await logActivity(Number(session.user.id), "delete", "page_section", id);
  revalidatePath(`/admin/pages/${section.page_id}/edit`);
  return { ok: true as const };
}
