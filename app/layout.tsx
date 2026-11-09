import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Maintenance from "@/components/Maintenance";
import { SITE, LEGAL, MAINTENANCE } from "@/lib/site";

// Cormorant Garamond (titoli, in armonia con le capitali del logo) e Nunito Sans (testo, molto leggibile).
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-nunito",
});

const DESCRIPTION =
  "Zafferano persiano Super Negin in pistilli e polvere 100% Sargol, da una filiera familiare. Per la ristorazione e per la cucina di casa.";

export const viewport: Viewport = { themeColor: "#f3ece0" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "ZAFRANE · Zafferano persiano Super Negin", template: "%s · ZAFRANE" },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SITE.url,
    siteName: "ZAFRANE",
    title: "ZAFRANE · Zafferano persiano Super Negin",
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ZAFRANE" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" },
  ...(MAINTENANCE ? { robots: { index: false, follow: false } } : {}),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/zafrane-logo.png`,
  email: SITE.email,
  sameAs: [SITE.instagram],
  address: {
    "@type": "PostalAddress",
    addressLocality: LEGAL.citta,
    addressCountry: "IT",
    ...(LEGAL.indirizzo ? { streetAddress: LEGAL.indirizzo } : {}),
    ...(LEGAL.cap ? { postalCode: LEGAL.cap } : {}),
  },
  ...(LEGAL.partitaIva ? { vatID: `IT${LEGAL.partitaIva}` } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${cormorant.variable} ${nunito.variable}`}>
      <body>
        {MAINTENANCE ? (
          <Maintenance />
        ) : (
          <>
            <Header />
            <main>{children}</main>
            <Footer />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          </>
        )}
      </body>
    </html>
  );
}
