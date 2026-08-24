import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

// One family across the whole site. Manrope is variable 200–800, so the
// hierarchy comes from weight and scale rather than a second typeface.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const title = "Olatunbosun — Professional Trading. Clear Process. Trusted Service.";
const description =
  "Olatunbosun offers market analysis, one-to-one mentorship, trade reviews and risk assessment directly to a small number of clients.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "profile" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
