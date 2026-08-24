import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { CredentialsStrip } from "@/components/credentials-strip";
import { ExperienceSection } from "@/components/experience-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { Hero } from "@/components/hero";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TrustSection } from "@/components/trust-section";

export default function Page() {
  return (
    // The header sits outside the clipping wrapper — an overflow-clip ancestor
    // can clip a fixed-position descendant, and the bar must never be clipped.
    <>
      <SiteHeader />
      {/* overflow-x:clip, never hidden — hidden turns this into a scroll
          container and silently kills the sticky columns. */}
      <div className="overflow-x-clip">
        <main>
          {/* Predominantly light. Navy carries the hero, one interlude
              (Experience), the closing CTA and the footer — nothing else. */}
          <Hero />
          <CredentialsStrip />
          <AboutSection />
          <ServicesSection />
          <ExperienceSection />
          <HowItWorksSection />
          <TrustSection />
          <TestimonialsSection />
          <FaqSection />
          <FinalCtaSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
