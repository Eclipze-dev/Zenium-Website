import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/cms/auth";
import { isCmsAuthSkipped, localCmsSession } from "@/lib/cms/devAuth";
import type { AdminRole } from "@/types/cms";

export async function getCmsSession() {
  const session = await getServerSession(authOptions);
  if (session?.user?.id) return session;
  if (isCmsAuthSkipped()) return localCmsSession();
  return session;
}

export async function requireCmsSession() {
  const session = await getCmsSession();
  if (!session?.user?.id) {
    redirect("/admin/login");
  }
  return session;
}

export async function requireCmsAdmin() {
  const session = await requireCmsSession();
  if (session.user.role !== "admin") {
    redirect("/admin");
  }
  return session;
}

export function canManageUsers(role: AdminRole) {
  return role === "admin";
}

export function canManageSettings(role: AdminRole) {
  return role === "admin";
}
