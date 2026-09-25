"use server";

import { unlink } from "node:fs/promises";
import path from "node:path";
import { revalidatePath } from "next/cache";
import { execute } from "@/lib/cms/db";
import { logActivity } from "@/lib/cms/activity";
import { requireCmsSession } from "@/lib/cms/rbac";
import { getMediaById } from "@/lib/cms/queries";

export async function deleteMediaAction(id: number) {
  const session = await requireCmsSession();
  if (!Number.isInteger(id) || id < 1) {
    return { ok: false as const, error: "Invalid media item" };
  }

  const item = await getMediaById(id);
  if (!item) {
    return { ok: false as const, error: "Media not found" };
  }

  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  const filePath = path.join(uploadsDir, item.filename);
  if (filePath.startsWith(uploadsDir)) {
    try {
      await unlink(filePath);
    } catch {
      // File may already be missing on disk.
    }
  }

  await execute("DELETE FROM media WHERE id = ?", [id]);
  await logActivity(Number(session.user.id), "delete", "media", id);
  revalidatePath("/admin");
  revalidatePath("/admin/media");
  return { ok: true as const };
}
