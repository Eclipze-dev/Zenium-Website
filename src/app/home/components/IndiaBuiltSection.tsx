"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ShimmerText from "@/components/ShimmerText";
import SectionIntro from "./SectionIntro";
import { indiaBuiltFeatures } from "./homeData";

const IndiaBuiltMap = dynamic(() => import("./IndiaBuiltMap"), {
  ssr: false,
});

export default function IndiaBuiltSection() {
  const mapSlotRef = useRef<HTMLDivElement>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const slot = mapSlotRef.current;
    if (!slot) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setShowMap(true);
        observer.disconnect();
      },
      { rootMargin: "240px" },
    );
    observer.observe(slot);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-[80px] max-lg:py-[48px] max-sm:py-[70px]">
      <div className="container grid grid-cols-[minmax(360px,1fr)_minmax(0,1fr)] gap-[55px] items-center max-xl:grid-cols-1 max-xl:gap-[40px]">
        <div
          ref={mapSlotRef}
          className="relative isolate min-h-[540px] grid place-items-center overflow-hidden max-xl:min-h-[440px] max-lg:min-h-[380px] max-sm:min-h-[280px]"
        >
          {showMap ? (
            <Suspense fallback={null}>
              <IndiaBuiltMap />
            </Suspense>
          ) : null}
        </div>
        <div className="min-w-0">
          <SectionIntro eyebrow="BUILT FOR INDIA. READY FOR SCALE.">
            <ShimmerText>India</ShimmerText>-built technology for modern utilities.
          </SectionIntro>
          <StaggerContainer className="mt-[70px] max-lg:mt-[40px]">
            {indiaBuiltFeatures.map(({ b, em, p, icon: Icon }) => (
              <StaggerItem as="article" key={b} className="border-t border-line py-[24px] max-lg:py-[20px]">
                <Icon className="mb-3 h-6 w-6 text-orange" strokeWidth={1.8} />
                <b className="block text-p2">{b}</b>
                <em className="block text-p3 text-orange my-2">
                  {em}
                </em>
                <p className="text-muted text-p1 m-0">
                  {p}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
