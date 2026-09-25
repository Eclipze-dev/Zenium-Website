"use server";

import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { execute } from "@/lib/cms/db";
import { logActivity } from "@/lib/cms/activity";
import { requireCmsAdmin } from "@/lib/cms/rbac";
import { getAdminByEmail, getAdminById } from "@/lib/cms/queries";
import { userCreateSchema, userUpdateSchema } from "@/lib/cms/schemas";

export async function createUserAction(input: unknown) {
  const session = await requireCmsAdmin();
  const parsed = userCreateSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: parsed.error.issues[0]?.message || "Invalid input" };
  }

  const email = parsed.data.email.trim().toLowerCase();
  const existing = await getAdminByEmail(email);
  if (existing) {
    return { ok: false as const, error: "Email is already in use" };
  }

  const passwordHash = await bcrypt.hash(parsed.data.password, 10);
  const result = await execute(
    `INSERT INTO admins (email, password_hash, name, role, status)
     VALUES (?, ?, ?, ?, ?)`,
    [email, passwordHash, parsed.data.name, parsed.data.role, parsed.data.status],
  );

  await logActivity(Number(session.user.id), "create", "user", result.insertId);
  revalidatePath("/admin");
  revalidatePath("/admin/users");
  return { ok: true as const };
}

export async function updateUserAction(input: unknown) {
  const session = await requireCmsAdmin();
  const parsed = userUpdateSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: parsed.error.issues[0]?.message || "Invalid input" };
  }

  const user = await getAdminById(parsed.data.id);
  if (!user) {
    return { ok: false as const, error: "User not found" };
  }

  const email = parsed.data.email.trim().toLowerCase();
  const existing = await getAdminByEmail(email, parsed.data.id);
  if (existing) {
    return { ok: false as const, error: "Email is already in use" };
  }

  if (
    parsed.data.id === Number(session.user.id) &&
    parsed.data.status === "disabled"
  ) {
    return { ok: false as const, error: "You cannot disable your own account" };
  }

  if (parsed.data.password) {
    const passwordHash = await bcrypt.hash(parsed.data.password, 10);
    await execute(
      `UPDATE admins SET email = ?, name = ?, role = ?, status = ?, password_hash = ? WHERE id = ?`,
      [
        email,
        parsed.data.name,
        parsed.data.role,
        parsed.data.status,
        passwordHash,
        parsed.data.id,
      ],
    );
  } else {
    await execute(
      `UPDATE admins SET email = ?, name = ?, role = ?, status = ? WHERE id = ?`,
      [email, parsed.data.name, parsed.data.role, parsed.data.status, parsed.data.id],
    );
  }

  await logActivity(
    Number(session.user.id),
    parsed.data.status === "disabled" ? "disable" : "update",
    "user",
    parsed.data.id,
  );
  revalidatePath("/admin");
  revalidatePath("/admin/users");
  return { ok: true as const };
}

export async function setUserStatusAction(id: number, status: "active" | "disabled") {
  const session = await requireCmsAdmin();
  if (!Number.isInteger(id) || id < 1) {
    return { ok: false as const, error: "Invalid user" };
  }
  if (status !== "active" && status !== "disabled") {
    return { ok: false as const, error: "Invalid status" };
  }
  if (id === Number(session.user.id) && status === "disabled") {
    return { ok: false as const, error: "You cannot disable your own account" };
  }

  const user = await getAdminById(id);
  if (!user) {
    return { ok: false as const, error: "User not found" };
  }

  await execute("UPDATE admins SET status = ? WHERE id = ?", [status, id]);
  await logActivity(
    Number(session.user.id),
    status === "disabled" ? "disable" : "update",
    "user",
    id,
  );
  revalidatePath("/admin");
  revalidatePath("/admin/users");
  return { ok: true as const };
}
