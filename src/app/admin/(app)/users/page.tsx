import type { Metadata } from "next";
import UsersTable from "@/components/cms/UsersTable";
import { requireCmsAdmin } from "@/lib/cms/rbac";
import { listAdmins } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Users" };

export default async function AdminUsersPage() {
  const session = await requireCmsAdmin();
  const users = await listAdmins();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Users</h1>
        <p className="text-sm text-muted-foreground">
          Admins can manage CMS users. Editors cannot access this page.
        </p>
      </div>
      <UsersTable
        users={JSON.parse(JSON.stringify(users))}
        currentUserId={Number(session.user.id)}
      />
    </div>
  );
}
