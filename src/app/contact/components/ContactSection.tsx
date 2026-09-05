import { Mail, MapPin, Phone } from "@/components/icons/lucideIcons";
import ContactForm from "./ContactForm";
import {
  contactChannels,
  contactIntro,
  officeAddress,
  type ContactLine,
} from "./contactData";

function SidebarMotif() {
  return (
    <svg
      className="pointer-events-none absolute -bottom-10 -right-8 h-[260px] w-[260px] text-white/[0.12]"
      viewBox="0 0 260 260"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="170" cy="170" r="108" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="170" cy="170" r="78" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="170" cy="170" r="48" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="118" cy="196" r="72" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="210" cy="128" r="54" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function ChannelIcon({ type }: { type: ContactLine["type"] }) {
  const className = "mt-0.5 h-4 w-4 shrink-0 text-[#FFFFFF]";
  if (type === "email") return <Mail className={className} strokeWidth={1.8} />;
  return <Phone className={className} strokeWidth={1.8} />;
}

export default function ContactSection() {
  return (
    <section
      className="relative overflow-hidden pb-[80px] pt-[50px] max-md:pb-[70px] max-md:pt-24"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <header className="mx-auto mb-[48px] max-w-auto text-center max-sm:mb-[36px]">
          <p className="text-h4 mb-[clamp(12px,1.5vw,16px)] text-zen-text">
            {contactIntro.eyebrow}
          </p>
          <h1
            id="contact-title"
            className="text-h1 m-0 max-sm:text-[clamp(32px,7vw,40px)]"
          >
            {contactIntro.title}{" "}
            <span className="text-h2 shimmer-text text-orange">{contactIntro.accent}</span>
          </h1>
          <p className="text-muted text-p1 mx-auto mt-[20px] max-w-auto">
            {contactIntro.description}
          </p>
        </header>

        <div className="rounded-[20px] max-w-auto mx-auto bg-white p-3 shadow-[0_24px_60px_rgba(0,0,0,0.28)] max-sm:p-2 lg:p-2">
          <div className="grid gap-3 lg:grid-cols-[minmax(260px,1fr)_minmax(0,2fr)] lg:gap-4">
            <aside className="relative overflow-hidden rounded-[16px] bg-common px-8 py-10 text-[#FFFFFF] max-sm:px-6 max-sm:py-8 lg:min-h-[560px] lg:px-10 lg:py-12">
              <SidebarMotif />
              <div className="relative z-[1] flex flex-col gap-[70px]">
                {contactChannels.map((channel) => (
                  <div key={channel.title}>
                    <h2 className="m-0 text-h3 font-semibold mb-[20px] text-[#FFFFFF]">
                      {channel.title}
                    </h2>
                    <ul className="flex list-none flex-col gap-2.5 p-0">
                      {channel.items.map((item) => (
                        <li key={`${channel.title}-${item.type}`}>
                          <a
                            href={item.href}
                            className="inline-flex items-start gap-3 text-button text-[#FFFFFF]/85 transition-colors duration-200 hover:text-orange"
                          >
                            <ChannelIcon type={item.type} />
                            {item.value}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div>
                  <h2 className="m-0 text-h3 font-semibold mb-[10px] text-white">
                    {officeAddress.title}
                  </h2>
                  <div className="flex items-start gap-3 text-button leading-relaxed text-white/85">
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0 text-white"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    <address className="not-italic">
                      <span className="block text-button font-medium text-white">
                        {officeAddress.companyName}
                      </span>
                      {officeAddress.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </div>
              </div>
            </aside>

            <div className="rounded-[16px] bg-white px-8 py-10 max-sm:px-6 max-sm:py-8 lg:px-12 lg:py-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}