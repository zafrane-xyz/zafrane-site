import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { SITE, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop online",
  description: "Lo shop online ZAFRANE è in allestimento. Nel frattempo gli ordini si fanno su richiesta, per email o su Instagram.",
  alternates: { canonical: "/shop" },
};

const SOON = [
  ["In pistilli", "Super Negin", "In piccoli formati, per la cucina di casa e per regalo."],
  ["In polvere", "Sargol", "Pratica e intensa, pronta all’uso."],
];

export default function Shop() {
  return (
    <>
      <PageHero
        label="Shop online"
        title="Lo shop online è in allestimento."
        intro="Nel frattempo si ordina direttamente. Scrivici cosa ti serve: ti rispondiamo con disponibilità, prezzo del lotto corrente, spedizione e pagamento."
      >
        <a href={mailto("Ordine ZAFRANE")} className="btn">Scrivici per ordinare</a>
        <a href={mailto("Avvisami all’apertura dello shop ZAFRANE")} className="btn btn-outline">Avvisami all’apertura</a>
      </PageHero>

      <Section tone="sand" title="Cosa troverai">
        <div className="grid gap-8 md:grid-cols-2">
          {SOON.map(([kind, name, text]) => (
            <article key={name} className="border border-[var(--line)] bg-[var(--paper)] px-8 py-14">
              <p className="label">{kind}</p>
              <h3 className="display mt-2 text-[48px]">{name}</h3>
              <p className="body mt-4">{text}</p>
            </article>
          ))}
        </div>
        <p className="body mt-12">
          Per ristoranti, hotel e catering c’è una pagina dedicata: <Link href="/ristorazione" className="link">Ristorazione</Link>. Ci trovi
          anche su <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="link">Instagram</a>.
        </p>
      </Section>
    </>
  );
}
