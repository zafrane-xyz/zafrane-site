import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import { SITE, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop online",
  description: "Lo shop online ZAFRANE è in allestimento. Nel frattempo gli ordini si fanno su richiesta, per email o su Instagram.",
  alternates: { canonical: "/shop" },
};

const SOON = [
  ["Super Negin in pistilli", "In piccoli formati, per la cucina di casa e per regalo."],
  ["Sargol in polvere", "Pratica e intensa, pronta all’uso."],
];

export default function Shop() {
  return (
    <>
      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-6 pb-8 pt-24 md:grid-cols-12 md:gap-8 md:pt-32">
          <div className="md:col-span-3">
            <p className="label">Shop online</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="display max-w-[16ch] text-[44px] leading-[1.08] md:text-[72px]">Lo shop online è in allestimento.</h1>
            <p className="body mt-10 max-w-lg">
              Nel frattempo si ordina direttamente. Scrivici cosa ti serve: ti rispondiamo con disponibilità, prezzo del lotto
              corrente, spedizione e modalità di pagamento.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
              <a href={mailto("Ordine ZAFRANE")} className="btn">Scrivici per ordinare</a>
              <a href={mailto("Avvisami all’apertura dello shop ZAFRANE")} className="link">Avvisami all’apertura</a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="link">Instagram</a>
            </div>
          </div>
        </div>
      </section>

      <Section label="Cosa troverai">
        <dl className="grid gap-12 md:grid-cols-2 md:gap-10">
          {SOON.map(([t, d]) => (
            <div key={t}>
              <dt className="display text-[30px] leading-tight">{t}</dt>
              <dd className="body mt-3 text-[15px]">{d}</dd>
            </div>
          ))}
        </dl>
        <p className="body mt-16 text-[15px]">
          Per ristoranti, hotel e catering c’è una pagina dedicata:{" "}
          <Link href="/ristorazione" className="link">Ristorazione</Link>.
        </p>
      </Section>
    </>
  );
}
