import AdminShell from "@/components/cms/AdminShell";
import { requireCmsSession } from "@/lib/cms/rbac";

export default async function AdminAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireCmsSession();
  return <AdminShell>{children}</AdminShell>;
}
