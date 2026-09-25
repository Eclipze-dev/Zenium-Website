import { execute } from "@/lib/cms/db";

export async function logActivity(
  adminId: number | null,
  action: string,
  entity: string,
  entityId?: string | number | null,
) {
  await execute(
    `INSERT INTO activity_log (admin_id, action, entity, entity_id)
     VALUES (?, ?, ?, ?)`,
    [adminId, action, entity, entityId == null ? null : String(entityId)],
  );
}
