import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { FocusStrip } from "@/components/focus-strip";
import { Hero } from "@/components/hero";
import { MarketSection } from "@/components/market-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    // The header sits outside the clipping wrapper — an overflow-clip
    // ancestor can clip a fixed-position descendant, and the bar must never
    // be clipped.
    <>
      <SiteHeader />
      {/* overflow-x:clip, never hidden — hidden turns this into a scroll
          container and silently kills the sticky FAQ column. */}
      <div className="overflow-x-clip">
        <main>
          {/* Predominantly ink. Cream carries two sections only — About and
              How It Works — so each one lands as a change of light rather
              than a stripe in a pattern. */}
          <Hero />
          <FocusStrip />
          <AboutSection />
          <ServicesSection />
          <PhilosophySection />
          <ExperienceSection />
          <MarketSection />
          <ProcessSection />
          <FaqSection />
          <FinalCtaSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
