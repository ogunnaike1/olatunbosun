import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
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
  telephone: contact.phoneE164,
  email: contact.email,
  areaServed: "Worldwide",
  knowsAbout: ["Bitcoin", "Digital asset trading", "Market analysis"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${hanken.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          // Serialised from the object above, so it cannot drift from the
          // copy in lib/content.ts.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
