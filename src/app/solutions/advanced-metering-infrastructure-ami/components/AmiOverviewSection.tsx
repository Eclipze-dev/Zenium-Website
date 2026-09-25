import ShimmerText from "@/components/ShimmerText";
import SectionIntro from "@/app/home/components/SectionIntro";
import { ContentLink } from "@/components/seo/ContentLink";
import { SOLUTION_PATHS } from "@/lib/seo/paths";
import { amiArchitecture, amiCapabilities } from "./amiData";

export default function AmiOverviewSection() {
  return (
    <section className="py-[80px] max-lg:py-[48px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-12">
        <div className="mx-auto max-w-3xl text-center">
          <SectionIntro centered singleLine fullWidth eyebrow="AMI ARCHITECTURE">
            End-to-end Advanced Metering Infrastructure{" "}
            <ShimmerText>(AMI)</ShimmerText>
          </SectionIntro>
          <p className="mt-5 text-p1 text-muted">
            A utility-grade Advanced Metering Infrastructure (AMI) architecture
            connects smart field devices through multi-technology communication
            networks to a{" "}
            <ContentLink href={SOLUTION_PATHS.hes}>
              Head-End System (HES)
            </ContentLink>{" "}
            and a{" "}
            <ContentLink href={SOLUTION_PATHS.mdms}>
              Meter Data Management System (MDMS)
            </ContentLink>
            , with{" "}
            <ContentLink href={SOLUTION_PATHS.analytics}>
              advanced meter data analytics software for transformer load profiling
            </ContentLink>{" "}
            built on trusted interval data.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amiArchitecture.map(([Icon, title, body]) => (
            <li key={title} className="flex flex-col gap-3">
              <Icon className="h-8 w-8 text-[#F07F25]" aria-hidden />
              <h2 className="text-h3 m-0">{title}</h2>
              <p className="text-p2 text-muted m-0">{body}</p>
            </li>
          ))}
        </ul>

        <ul className="grid gap-6 sm:grid-cols-2">
          {amiCapabilities.map(([Icon, title, body]) => (
            <li
              key={title}
              className="flex flex-col gap-3 rounded-[16px] border border-black/5 bg-white/40 p-6"
            >
              <Icon className="h-8 w-8 text-[#F07F25]" aria-hidden />
              <h2 className="text-h3 m-0">{title}</h2>
              <p className="text-p2 text-muted m-0">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
