"use server";

import { revalidatePath } from "next/cache";
import { execute } from "@/lib/cms/db";
import { logActivity } from "@/lib/cms/activity";
import { requireCmsSession } from "@/lib/cms/rbac";
import { getFaqById } from "@/lib/cms/queries";
import { faqSchema } from "@/lib/cms/schemas";
import { SOLUTION_PATHS } from "@/lib/seo/paths";

const FAQ_PUBLIC_PATHS = {
  ami: SOLUTION_PATHS.ami,
  hes: SOLUTION_PATHS.hes,
  mdms: SOLUTION_PATHS.mdms,
} as const;

function revalidateFaqPages(pageKey: keyof typeof FAQ_PUBLIC_PATHS) {
  revalidatePath("/admin/faqs");
  revalidatePath(FAQ_PUBLIC_PATHS[pageKey]);
}

export async function createFaqAction(input: unknown) {
  const session = await requireCmsSession();
  const parsed = faqSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: parsed.error.issues[0]?.message || "Invalid input" };
  }

  const adminId = Number(session.user.id);
  const result = await execute(
    `INSERT INTO faqs (page_key, question, answer, sort_order, enabled)
     VALUES (?, ?, ?, ?, ?)`,
    [
      parsed.data.page_key,
      parsed.data.question,
      parsed.data.answer,
      parsed.data.sort_order,
      parsed.data.enabled ? 1 : 0,
    ],
  );

  await logActivity(adminId, "create", "faq", result.insertId);
  revalidateFaqPages(parsed.data.page_key);
  return { ok: true as const, id: result.insertId };
}

export async function updateFaqAction(id: number, input: unknown) {
  const session = await requireCmsSession();
  if (!Number.isInteger(id) || id < 1) {
    return { ok: false as const, error: "Invalid FAQ" };
  }

  const parsed = faqSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: parsed.error.issues[0]?.message || "Invalid input" };
  }

  const existing = await getFaqById(id);
  if (!existing) {
    return { ok: false as const, error: "FAQ not found" };
  }

  await execute(
    `UPDATE faqs
     SET page_key = ?, question = ?, answer = ?, sort_order = ?, enabled = ?
     WHERE id = ?`,
    [
      parsed.data.page_key,
      parsed.data.question,
      parsed.data.answer,
      parsed.data.sort_order,
      parsed.data.enabled ? 1 : 0,
      id,
    ],
  );

  await logActivity(Number(session.user.id), "update", "faq", id);
  revalidateFaqPages(parsed.data.page_key);
  return { ok: true as const };
}

export async function deleteFaqAction(id: number) {
  const session = await requireCmsSession();
  if (!Number.isInteger(id) || id < 1) {
    return { ok: false as const, error: "Invalid FAQ" };
  }

  const existing = await getFaqById(id);
  if (!existing) {
    return { ok: false as const, error: "FAQ not found" };
  }

  await execute("DELETE FROM faqs WHERE id = ?", [id]);
  await logActivity(Number(session.user.id), "delete", "faq", id);
  revalidateFaqPages(existing.page_key);
  return { ok: true as const };
}
