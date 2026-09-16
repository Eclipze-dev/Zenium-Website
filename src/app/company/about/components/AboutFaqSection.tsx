import FaqSection from "@/components/seo/FaqSection";
import { aboutFaq } from "./aboutData";

export default function AboutFaqSection() {
  return (
    <FaqSection
      title={aboutFaq.title}
      accent={aboutFaq.accent}
      items={aboutFaq.items}
      titleId="about-faq-title"
    />
  );
}
