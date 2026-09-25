import { permanentRedirect } from "next/navigation";
import { SOLUTION_PATHS } from "@/lib/seo/paths";

export default function HesLegacyRedirect() {
  permanentRedirect(SOLUTION_PATHS.hes);
}
