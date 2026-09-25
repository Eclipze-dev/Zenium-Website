import { AdminBrand, AdminNav } from "@/components/cms/AdminNav";
import AdminHeader from "@/components/cms/AdminHeader";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="cms-shell">
      <aside className="cms-sidebar">
        <div className="cms-sidebar-brand">
          <AdminBrand />
        </div>
        <div className="cms-sidebar-nav">
          <AdminNav />
        </div>
      </aside>
      <div className="cms-main">
        <AdminHeader />
        <main className="cms-main-content">{children}</main>
      </div>
    </div>
  );
}
