"use client";

import ShimmerText from "@/components/ShimmerText";
import CookieSettingsLink from "@/components/cookie-consent/CookieSettingsLink";
import PrivacyCheckList from "./PrivacyCheckList";
import PrivacySectionHeading from "./PrivacySectionHeading";
import { privacyIntro, privacyMeta, privacySections } from "./privacyData";

function linkifyWebsite(text: string) {
  const marker = "www.zenium.ai";
  if (!text.includes(marker)) return text;

  const [before, after] = text.split(marker);
  return (
    <>
      {before}
      <a
        href="https://www.zenium.ai"
        className="!underline underline-offset-2 transition-colors duration-200 hover:!underline hover:text-orange"
      >
        {marker}
      </a>
      {after}
    </>
  );
}

export default function PrivacyPolicyContent() {
  return (
    <section
      className="bg-w2 pt-[50px] pb-[80px] max-md:pt-24"
      aria-labelledby="privacy-policy-title"
    >
      <div className="container">
        <div className="max-w-auto">
          <p className="m-0 text-caption font-medium uppercase tracking-[1.2px] text-common2">
            Last updated: {privacyMeta.lastUpdated}
          </p>

          <h1
            id="privacy-policy-title"
            className="mt-[10px] m-0 text-h1 text-common"
          >
            {privacyMeta.title}{" "}
            <ShimmerText>{privacyMeta.accent}</ShimmerText>
          </h1>

          <div className="mt-[20px] flex flex-col gap-[20px]">
            {privacyIntro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="m-0 text-p1 text-common2"
              >
                {linkifyWebsite(paragraph)}
              </p>
            ))}
          </div>

          <div className="mt-[50px] flex flex-col gap-[50px]">
            {privacySections.map((section) => {
              if (section.type === "list") {
                return (
                  <article key={section.id} aria-labelledby={section.id}>
                    <PrivacySectionHeading
                      id={section.id}
                      title={section.title}
                      accent={section.accent}
                      className="text-h5"
                      textClassName="text-h5"
                    />
                    <div className="mt-[10px] flex flex-col gap-[30px]">
                      <p className="m-0 text-p1 text-common2">{section.intro}</p>
                      <PrivacyCheckList items={section.items} />
                      {section.cookieSettingsFooter ? (
                        <div className="flex flex-col gap-[10px]">
                          <p className="m-0 text-p1 text-common2">
                            You can change or withdraw your cookie consent at
                            any time through{" "}
                            <CookieSettingsLink className="inline p-0 text-p1 font-medium tracking-normal !text-common2 !underline underline-offset-2 transition-colors duration-200 hover:!underline hover:!text-orange" />
                            .
                          </p>
                          {section.footer ? (
                            <p className="m-0 text-p1 text-common2">
                              {section.footer}
                            </p>
                          ) : null}
                        </div>
                      ) : section.footer ? (
                        <p className="m-0 text-p1 text-common2">
                          {section.footer}
                        </p>
                      ) : null}
                    </div>
                  </article>
                );
              }

              if (section.type === "paragraphs") {
                return (
                  <article key={section.id} aria-labelledby={section.id}>
                    <PrivacySectionHeading
                      id={section.id}
                      title={section.title}
                      accent={section.accent}
                      className="text-h5"
                      textClassName="text-h5"
                    />
                    <div className="mt-[10px] flex flex-col gap-[10px]">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 48)}
                          className="m-0 text-p1 text-common2"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </article>
                );
              }

              return (
                <article key={section.id} aria-labelledby={section.id}>
                  <PrivacySectionHeading
                    id={section.id}
                    title={section.title}
                    accent={section.accent}
                    className="text-h5"
                    textClassName="text-h5"
                  />
                  <div className="mt-[10px] flex flex-col gap-[20px]">
                    <p className="m-0 text-p1 text-common2">{section.intro}</p>
                    <address className="m-0 not-italic text-p1 text-common2">
                      <p className="m-0 font-semibold text-common">
                        {section.companyName}
                      </p>
                      {section.lines.map((line) => (
                        <p key={line} className="m-0">
                          {line}
                        </p>
                      ))}
                      <p className="mt-[10px] m-0">
                        <span className="font-semibold text-common">
                          Email:{" "}
                        </span>
                        <a
                          href={`mailto:${section.email}`}
                          className="!underline underline-offset-2 transition-colors duration-200 hover:!underline hover:text-orange"
                        >
                          {section.email}
                        </a>
                      </p>
                    </address>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
