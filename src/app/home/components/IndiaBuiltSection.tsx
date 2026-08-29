"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import SectionIntro from "./SectionIntro";

const IndiaBuiltMap = dynamic(() => import("./IndiaBuiltMap"), {
  ssr: false,
});

export default function IndiaBuiltSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px] bg-zenbg">
      <div className="container grid grid-cols-[minmax(360px,1fr)_minmax(0,1fr)] gap-[55px] items-center max-lg:grid-cols-1">
        <div className="min-h-[540px] relative grid place-items-center max-lg:min-h-[440px] max-sm:min-h-[280px]">
          <Suspense fallback={null}>
            <IndiaBuiltMap />
          </Suspense>
        </div>
        <div className="min-w-0">
          <SectionIntro eyebrow="BUILT FOR INDIA. READY FOR SCALE.">
            <strong>India</strong>-built technology for modern utilities.
          </SectionIntro>
          <div className="mt-[70px]">
            {[
              {
                b: "Make in India",
                em: "Built in India. Built for India's utility ecosystem.",
                p: "Enterprise-grade utility technology engineered, developed, and delivered from India.",
              },
              {
                b: "CMMI Level 3",
                em: "Engineering and delivery built for enterprise requirements.",
                p: "Proven process maturity aligned with the demands of large-scale technology delivery.",
              },
              {
                b: "Data & Security",
                em: "Designed for cloud, on-premise, and hybrid utility environments.",
                p: "Secure data management and deployment designed to meet evolving requirements.",
              },
            ].map((item) => (
              <article key={item.b} className="border-t border-line py-[24px]">
                <b className="block text-base-lg">{item.b}</b>
                <em className="block text-base-lg text-orange my-2 italic">
                  {item.em}
                </em>
                <p className="text-muted text-body m-0">
                  {item.p}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
