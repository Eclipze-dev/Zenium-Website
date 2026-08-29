"use client";

import { useEffect, useState } from "react";
import { capabilities } from "./homeData";
import SectionIntro from "./SectionIntro";
// import ZeniumArchitecture from "./ZeniumArchitecture";

export default function ZeniumEdgeSection() {
  const [activeCapability, setActiveCapability] = useState(0);
  const [capabilityPaused, setCapabilityPaused] = useState(false);

  useEffect(() => {
    if (capabilityPaused) return;

    const timer = window.setInterval(() => {
      setActiveCapability((current) => (current + 1) % capabilities.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [capabilityPaused]);

  return (
    <section
      className="py-[80px] max-sm:py-[70px]"
      id="resources"
    >
      <div className="container grid grid-cols-[minmax(0,1fr)_minmax(360px,1.2fr)] gap-[60px] items-start max-lg:grid-cols-1 max-lg:gap-[40px] max-sm:gap-[30px]">
        <div className="min-w-0">
          <SectionIntro
            eyebrow="THE ZENIUM EDGE"
            text="Zenium combines proven utility technology with an architecture designed for scale, interoperability and operational reliability."
          >
            Engineered for the <strong>complexity</strong> of modern
            utilities.
          </SectionIntro>
          <div className="mt-[80px] max-md:mt-[60px] max-sm:mt-[50px]">
            {capabilities.map(([title, text], index) => {
              const active = activeCapability === index;

              return (
                <button
                  key={title}
                  type="button"
                  aria-expanded={active}
                  onClick={() => setActiveCapability(index)}
                  onMouseEnter={() => setCapabilityPaused(true)}
                  onMouseLeave={() => setCapabilityPaused(false)}
                  onFocus={() => setCapabilityPaused(true)}
                  onBlur={() => setCapabilityPaused(false)}
                  className={`capability-item block w-full border-0 bg-transparent pb-[28px] mb-[10px] text-left text-zen-text ${capabilityPaused ? "capability-paused" : ""}`}
                >
                  <span className="capability-rule relative mb-[26px] block h-px bg-line">
                    {active && <span key={activeCapability} className="capability-progress" />}
                  </span>
                  <b className={`text-base-lg transition-colors duration-300 ${active ? "text-zen-text" : "text-muted"}`}>
                    {title}
                  </b>
                  <span className={`capability-copy grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out ${active ? "grid-rows-[1fr] opacity-100 mt-[9px]" : "grid-rows-[0fr] opacity-0"}`}>
                    <span className="min-h-0 overflow-hidden text-muted text-body">
                      {text}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        {/* <div className="relative w-full min-h-[680px] border border-line rounded-[10px] bg-zen-bg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] max-md:min-h-[520px] max-sm:min-h-[560px]">
          <ZeniumArchitecture />
        </div> */}
        <div className="sticky top-[90px] self-start w-full min-w-0 max-lg:static">
          <div className="relative w-full min-h-[620px] max-w-full rounded-[15px] border border-[#060609] bg-[#060609] overflow-hidden max-lg:min-h-[520px] max-sm:min-h-[420px]">
            <img
              src="/aqwe.png"
              alt="Zenium platform architecture diagram"
              className="absolute inset-0 object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
