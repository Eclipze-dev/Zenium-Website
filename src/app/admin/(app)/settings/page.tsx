import type { Metadata } from "next";
import SettingsForm from "@/components/cms/SettingsForm";
import { requireCmsAdmin } from "@/lib/cms/rbac";
import { listSettings } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Settings" };

export default async function AdminSettingsPage() {
  await requireCmsAdmin();
  const rows = await listSettings();
  const map = Object.fromEntries(rows.map((row) => [row.key, row.value ?? ""]));
  const values = {
    site_name: map.site_name ?? "",
    logo: map.logo ?? "",
    favicon: map.favicon ?? "",
    contact_email: map.contact_email ?? "",
    contact_phone: map.contact_phone ?? "",
    contact_address: map.contact_address ?? "",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Site identity and contact details stored as key/value rows.
        </p>
      </div>
      <SettingsForm values={values} />
    </div>
  );
}
