"use server";

import { revalidatePath } from "next/cache";
import { execute } from "@/lib/cms/db";
import { logActivity } from "@/lib/cms/activity";
import { requireCmsAdmin } from "@/lib/cms/rbac";
import { settingsSchema } from "@/lib/cms/schemas";

const SETTING_KEYS = [
  "site_name",
  "logo",
  "favicon",
  "contact_email",
  "contact_phone",
  "contact_address",
] as const;

export async function updateSettingsAction(input: unknown) {
  const session = await requireCmsAdmin();
  const parsed = settingsSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: parsed.error.issues[0]?.message || "Invalid input" };
  }

  for (const key of SETTING_KEYS) {
    await execute(
      `INSERT INTO settings (\`key\`, \`value\`) VALUES (?, ?)
       ON DUPLICATE KEY UPDATE \`value\` = VALUES(\`value\`)`,
      [key, parsed.data[key]],
    );
  }

  await logActivity(Number(session.user.id), "update", "settings", "site");
  revalidatePath("/admin/settings");
  return { ok: true as const };
}
