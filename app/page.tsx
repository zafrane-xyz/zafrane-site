import Link from "next/link";
import Section from "@/components/Section";
import { mailto } from "@/lib/site";

const VALUES = [
  ["Origine", "Acquistiamo direttamente dalla famiglia produttrice, in Khorasan. Di ogni lotto sappiamo chi lo ha raccolto e come è stato essiccato."],
  ["Purezza", "Solo parte rossa: Super Negin in pistilli interi, Sargol in polvere. Nessuno stilo giallo, nessun additivo."],
  ["Misura", "Bastano 0,10 g a porzione di risotto. Meno quantità, più intensità."],
];

const PRODUCTS = [
  ["In pistilli", "Super Negin", "Pistilli lunghi e interi, solo parte rossa, essiccati al sole."],
  ["In polvere", "Sargol", "Solo le punte rosse del pistillo, macinate. Si scioglie subito."],
];

export default function Home() {
  return (
    <>
      <section className="px-6 text-center">
        <div className="mx-auto flex min-h-[620px] max-w-4xl flex-col items-center justify-center py-24 md:min-h-[680px]">
          <p className="label">Milano</p>
          <h1 className="display mt-7 text-[48px] md:text-[84px]">L’oro rosso di Persia, per la cucina italiana.</h1>
          <p className="body mt-8 max-w-xl">Zafferano persiano Super Negin, dalla famiglia che lo coltiva alla tua cucina.</p>
          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <Link href="/zafferano" className="btn">Scopri lo zafferano</Link>
            <Link href="/ristorazione" className="btn btn-outline">Per la ristorazione</Link>
          </div>
        </div>
      </section>

      <Section tone="sand" italic title="Lo zafferano si giudica in cucina. Per questo ne scegliamo poco, e lo scegliamo bene.">
        <dl className="grid gap-12 md:grid-cols-3 md:gap-14">
          {VALUES.map(([t, d]) => (
            <div key={t}>
              <dt className="display text-[32px]">{t}</dt>
              <dd className="body mt-3">{d}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Le nostre referenze">
        <div className="grid gap-8 md:grid-cols-2">
          {PRODUCTS.map(([kind, name, text]) => (
            <article key={name} className="border border-[var(--line)] px-8 py-14 md:px-10">
              <p className="label">{kind}</p>
              <h3 className="display mt-2 text-[48px] md:text-[54px]">{name}</h3>
              <p className="body mt-4">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-12">
          <Link href="/zafferano" className="link">Il prodotto e le categorie dello zafferano</Link>
        </p>
      </Section>

      <Section tone="wine" title="Per ristoranti, hotel e catering: campione di prova, forniture programmate, listino riservato.">
        <Link href="/ristorazione#richiesta" className="btn btn-light">Richiedi un campione</Link>
      </Section>

      <Section>
        <p className="body mx-auto max-w-lg">Lo shop online è in allestimento. Nel frattempo gli ordini si fanno su richiesta, per email.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-4">
          <a href={mailto("Ordine ZAFRANE")} className="link">Scrivici per ordinare</a>
          <Link href="/shop" className="link">Informazioni sullo shop</Link>
        </div>
      </Section>
    </>
  );
}
