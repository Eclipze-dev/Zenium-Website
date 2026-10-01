import type { Metadata } from "next";
import UsersTable from "@/components/cms/UsersTable";
import { toPlain } from "@/lib/cms/plain";
import { requireCmsAdmin } from "@/lib/cms/rbac";
import { listAdmins } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Users" };

export default async function AdminUsersPage() {
  const session = await requireCmsAdmin();
  const users = await listAdmins();

  return (
    <UsersTable
      users={toPlain(users)}
      currentUserId={Number(session.user.id)}
    />
  );
}
