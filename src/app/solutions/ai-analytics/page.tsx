import { permanentRedirect } from "next/navigation";
import { SOLUTION_PATHS } from "@/lib/seo/paths";

export default function AiAnalyticsLegacyRedirect() {
  permanentRedirect(SOLUTION_PATHS.analytics);
}
