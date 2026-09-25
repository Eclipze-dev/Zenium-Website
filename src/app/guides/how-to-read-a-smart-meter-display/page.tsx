import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import {getGuideEntriesForPublic, resolvePageSeo} from "@/lib/cms/content";
import { breadcrumbTrails } from "@/lib/seo/jsonld";
import { pageSeo, slugFromPath } from "@/lib/seo/pages";
import { SOLUTION_PATHS } from "@/lib/seo/paths";
import OptimizedImage from "@/components/OptimizedImage";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo(
    pageSeo.smartMeterGuide,
    slugFromPath(pageSeo.smartMeterGuide.path),
  );
  return buildPageMetadata(seo);
}

export default async function SmartMeterDisplayGuidePage() {
  const entries = await getGuideEntriesForPublic();

  return (
    <div id="top" className="bg-bg1">
      <SiteHeader />
      <PageJsonLd trail={breadcrumbTrails.smartMeterGuide} />
      <main className="overflow-x-clip">
        <section className="pb-[80px] pt-[50px] max-lg:pb-[48px] max-lg:pt-[40px] max-md:pt-24 max-md:pb-[70px]">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#F07F25]">
              Guide
            </p>
            <h1 className="text-h1 m-0 mt-3">
              How to read a smart meter display
            </h1>
            <p className="mt-5 text-p1 text-muted">
              Use this guide to understand common smart meter display codes and
              readings. Entries are maintained in the CMS and only published when
              verified — we do not invent display codes or meter images.
            </p>
          </div>
        </section>

        <section className="pb-[80px] max-lg:pb-[48px] max-sm:pb-[70px]">
          <div className="container">
            {entries.length === 0 ? (
              <p className="mx-auto max-w-2xl text-center text-p1 text-muted">
                Guide entries will appear here once verified display codes and
                images are added in the CMS.
              </p>
            ) : (
              <ul className="mx-auto grid max-w-4xl gap-8">
                {entries.map((entry) => (
                  <li
                    key={entry.id}
                    className="grid gap-6 rounded-[16px] border border-black/5 bg-white/50 p-6 sm:grid-cols-[200px_1fr]"
                  >
                    <div className="relative aspect-square w-full overflow-hidden rounded-[12px] bg-black/5">
                      {entry.image_url ? (
                        <OptimizedImage
                          src={entry.image_url}
                          alt={
                            entry.alt_text ||
                            entry.display_code ||
                            "Smart meter display"
                          }
                          fill
                          sizes="200px"
                          className="object-contain"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-sm text-muted">
                          No image
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 text-left">
                      {entry.category ? (
                        <p className="text-sm font-semibold uppercase tracking-wide text-[#F07F25]">
                          {entry.category}
                        </p>
                      ) : null}
                      {entry.display_code ? (
                        <h2 className="text-h3 m-0 font-mono">
                          {entry.display_code}
                        </h2>
                      ) : (
                        <h2 className="text-h3 m-0">Display entry</h2>
                      )}
                      {entry.description ? (
                        <p className="text-p2 text-muted m-0">
                          {entry.description}
                        </p>
                      ) : null}
                      {entry.manufacturer_model_notes ? (
                        <p className="text-sm text-muted m-0">
                          {entry.manufacturer_model_notes}
                        </p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="pb-[80px] max-lg:pb-[48px]">
          <div className="container">
            <div className="flex flex-col items-center gap-5 rounded-[16px] bg-[#0B1F33] px-8 py-12 text-center text-white">
              <h2 className="text-h2 m-0 text-white">
                Explore Zenium AMI software
              </h2>
              <p className="max-w-2xl text-p1 text-white/80 m-0">
                From consumer meter literacy to utility-scale Advanced Metering
                Infrastructure (AMI), Head-End System (HES) and Meter Data
                Management System (MDMS).
              </p>
              <div className="flex flex-wrap justify-center gap-[10px]">
                <Button href={SOLUTION_PATHS.ami}>AMI</Button>
                <Button href={SOLUTION_PATHS.hes} outline>
                  HES
                </Button>
                <Button href={SOLUTION_PATHS.mdms} outline>
                  MDMS
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
