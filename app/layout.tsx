import type { Metadata } from "next";
import { Instrument_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

// Nav chrome only. Taller x-height and more open apertures than Instrument
// Sans, which is what makes 15px links legible against a moving background.
const navSans = Plus_Jakarta_Sans({
  variable: "--font-nav-sans",
  subsets: ["latin"],
  display: "swap",
});

const title = "Olatunbosun — Professional Trading. Clear Process. Trusted Service.";
const description =
  "Olatunbosun offers market analysis, one-to-one mentorship, trade reviews and risk assessment directly to a small number of clients.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${navSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
