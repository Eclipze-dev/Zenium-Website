"use server";

import { revalidatePath } from "next/cache";
import { execute } from "@/lib/cms/db";
import { logActivity } from "@/lib/cms/activity";
import { requireCmsSession } from "@/lib/cms/rbac";
import { getGuideEntryById } from "@/lib/cms/queries";
import { guideEntrySchema } from "@/lib/cms/schemas";
import { GUIDE_PATH } from "@/lib/seo/paths";

function emptyToNull(value?: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

export async function createGuideEntryAction(input: unknown) {
  const session = await requireCmsSession();
  const parsed = guideEntrySchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: parsed.error.issues[0]?.message || "Invalid input" };
  }

  const result = await execute(
    `INSERT INTO smart_meter_guide_entries
      (image_url, display_code, description, manufacturer_model_notes, category,
       sort_order, enabled, alt_text)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      emptyToNull(parsed.data.image_url),
      emptyToNull(parsed.data.display_code),
      emptyToNull(parsed.data.description),
      emptyToNull(parsed.data.manufacturer_model_notes),
      emptyToNull(parsed.data.category),
      parsed.data.sort_order,
      parsed.data.enabled ? 1 : 0,
      emptyToNull(parsed.data.alt_text),
    ],
  );

  await logActivity(Number(session.user.id), "create", "guide_entry", result.insertId);
  revalidatePath("/admin/guide");
  revalidatePath(GUIDE_PATH);
  return { ok: true as const, id: result.insertId };
}

export async function updateGuideEntryAction(id: number, input: unknown) {
  const session = await requireCmsSession();
  if (!Number.isInteger(id) || id < 1) {
    return { ok: false as const, error: "Invalid entry" };
  }

  const parsed = guideEntrySchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: parsed.error.issues[0]?.message || "Invalid input" };
  }

  const existing = await getGuideEntryById(id);
  if (!existing) {
    return { ok: false as const, error: "Entry not found" };
  }

  await execute(
    `UPDATE smart_meter_guide_entries
     SET image_url = ?, display_code = ?, description = ?,
         manufacturer_model_notes = ?, category = ?, sort_order = ?,
         enabled = ?, alt_text = ?
     WHERE id = ?`,
    [
      emptyToNull(parsed.data.image_url),
      emptyToNull(parsed.data.display_code),
      emptyToNull(parsed.data.description),
      emptyToNull(parsed.data.manufacturer_model_notes),
      emptyToNull(parsed.data.category),
      parsed.data.sort_order,
      parsed.data.enabled ? 1 : 0,
      emptyToNull(parsed.data.alt_text),
      id,
    ],
  );

  await logActivity(Number(session.user.id), "update", "guide_entry", id);
  revalidatePath("/admin/guide");
  revalidatePath(GUIDE_PATH);
  return { ok: true as const };
}

export async function deleteGuideEntryAction(id: number) {
  const session = await requireCmsSession();
  if (!Number.isInteger(id) || id < 1) {
    return { ok: false as const, error: "Invalid entry" };
  }

  const existing = await getGuideEntryById(id);
  if (!existing) {
    return { ok: false as const, error: "Entry not found" };
  }

  await execute("DELETE FROM smart_meter_guide_entries WHERE id = ?", [id]);
  await logActivity(Number(session.user.id), "delete", "guide_entry", id);
  revalidatePath("/admin/guide");
  revalidatePath(GUIDE_PATH);
  return { ok: true as const };
}
