import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { Hero } from "@/components/hero";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { MarqueeBand } from "@/components/marquee-band";
import { PerformanceSection } from "@/components/performance-section";
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
      <div className="overflow-x-clip bg-ink text-paper">
        <main>
          {/* Who is this practice → what does it provide → how does a client
              hire it. Grounds alternate navy → paper so the page never flattens. */}
          <Hero />
          <MarqueeBand />
          <AboutSection />
          <ServicesSection />
          <PerformanceSection />
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
