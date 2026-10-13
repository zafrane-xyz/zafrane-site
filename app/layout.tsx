import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Maintenance from "@/components/Maintenance";
import { SITE, MAINTENANCE } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "ZAFRANE · Zafferano persiano Super Negin", template: "%s · ZAFRANE" },
  description:
    "Zafferano persiano Super Negin in pistilli, selezionato a Mashhad e presentato a Milano. Alta resa, colore intenso, per chef e cucine esigenti.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SITE.url,
    siteName: "ZAFRANE",
    title: "ZAFRANE · Zafferano persiano Super Negin",
    description: "Zafferano Super Negin in pistilli. Filiera diretta, alta resa, design contemporaneo.",
    images: [{ url: "/zafrane-logo.png", width: 1536, height: 1024 }],
  },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" },
  ...(MAINTENANCE ? { robots: { index: false, follow: false } } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        {MAINTENANCE ? (
          <Maintenance />
        ) : (
          <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        )}
      </body>
    </html>
  );
}
