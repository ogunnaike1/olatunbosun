import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { brand, contact, seo } from "@/lib/content";
import "./globals.css";

// Three families, three jobs, no overlap. Bodoni carries every headline
// (including the italic cut, which the hero and About use); Hanken carries
// running text; JetBrains Mono carries labels, eyebrows and figures.
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    type: "website",
    siteName: brand.full,
    title: seo.title,
    description: seo.ogDescription,
  },
  twitter: { card: "summary_large_image" },
  icons: {
    // The mark itself: a rotated gold square with the dot at its apex, the
    // same construction the wordmark draws in the header.
    icon: `data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#0E0D0C"/><rect x="15" y="15" width="34" height="34" fill="none" stroke="#E8B84B" stroke-width="2" transform="rotate(45 32 32)"/><circle cx="32" cy="7" r="2.6" fill="#E8B84B"/><text x="32" y="41" font-family="Georgia,serif" font-size="26" fill="#E8B84B" text-anchor="middle">O</text></svg>`,
    )}`,
  },
};

/** Describes the practice itself — not any service, price or performance. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand.full,
  description: seo.ogDescription,
  foundingDate: brand.since,
  // The WhatsApp number, which is the only channel. `sameAs` carries the
  // wa.me link so the graph points at the one place that is actually his.
  telephone: contact.e164,
  sameAs: [`https://wa.me/${contact.whatsapp}`],
  areaServed: "Worldwide",
  knowsAbout: ["Bitcoin", "Digital asset trading", "Market analysis"],
};

/**
 * Runs before first paint, so the page never flashes the wrong theme.
 *
 * DARK IS THE DEFAULT — the OS preference is deliberately not consulted.
 * Ink is the brand's home ground, and a light-mode machine should still
 * meet the site as it was designed. Only an explicit choice from the
 * footer toggle moves it, and that choice then wins on every later visit.
 * Kept in sync with THEME_KEY in components/theme-toggle.tsx.
 */
const themeScript = `(function(){var t="dark";try{if(localStorage.getItem("obtc-theme")==="light"){t="light"}}catch(e){}document.documentElement.setAttribute("data-theme",t)})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the script above sets `data-theme` on this
    // element before React hydrates, so the attribute legitimately differs
    // from what the server rendered.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bodoni.variable} ${hanken.variable} ${jetbrains.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          // Serialised from the object above, so it cannot drift from the
          // copy in lib/content.ts.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {/* Site-wide, on every page including /contact — WhatsApp is the
            only channel, so the way in is never more than one tap away. */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
