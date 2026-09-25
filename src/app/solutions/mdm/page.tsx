import { permanentRedirect } from "next/navigation";
import { SOLUTION_PATHS } from "@/lib/seo/paths";

export default function MdmLegacyRedirect() {
  permanentRedirect(SOLUTION_PATHS.mdms);
}
