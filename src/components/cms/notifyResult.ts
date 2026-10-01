import { toast } from "sonner";

type ActionResult = { ok: true } | { ok: false; error: string };

export async function notifyResult(
  result: ActionResult,
  success: string,
  refresh: () => void,
) {
  if (!result.ok) {
    toast.error(result.error);
    return;
  }
  toast.success(success);
  refresh();
}
