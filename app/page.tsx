import Link from "next/link";
import Section from "@/components/Section";
import { mailto } from "@/lib/site";

const VALUES = [
  ["Origine", "Acquistiamo direttamente dalla famiglia produttrice, in Khorasan. Di ogni lotto sappiamo chi lo ha raccolto e come è stato essiccato."],
  ["Purezza", "Solo parte rossa. Super Negin in pistilli interi, Sargol in polvere: nessuno stilo giallo, nessun additivo."],
  ["Misura", "Un pistillo intenso rende di più: indicativamente 0,05–0,10 g a porzione di risotto. Meno quantità, più intensità."],
];

const PRODUCTS = [
  ["Super Negin", "In pistilli", "Pistilli lunghi e interi, essiccati al sole. Per chi vuole vedere e controllare lo zafferano che usa."],
  ["Sargol", "In polvere", "Solo le punte rosse del pistillo, macinate. Si scioglie subito, senza infusione."],
];

export default function Home() {
  return (
    <>
      <section className="px-6">
        <div className="mx-auto flex min-h-[calc(100svh-81px)] max-w-6xl flex-col items-center justify-center py-24 text-center">
          <img src="/logo-dark.png" alt="ZAFRANE" width={880} height={386} className="h-auto w-[300px] max-w-[70vw] md:w-[340px]" />
          <p className="label mt-6">Milano</p>
          <h1 className="display mt-20 max-w-[16ch] text-[40px] leading-[1.12] md:text-[64px]">
            L’oro rosso della Khorasan, scelto per le cucine di Milano.
          </h1>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            <Link href="/zafferano" className="btn">Scopri lo zafferano</Link>
            <Link href="/ristorazione" className="link">Per la ristorazione</Link>
          </div>
        </div>
      </section>

      <Section label="Ciò in cui crediamo">
        <p className="display max-w-[24ch] text-[32px] leading-[1.2] md:text-[44px]">
          Lo zafferano si giudica in cucina. Per questo ne scegliamo poco, e lo scegliamo bene.
        </p>
        <dl className="mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
          {VALUES.map(([t, d]) => (
            <div key={t}>
              <dt className="display text-[26px]">{t}</dt>
              <dd className="body mt-3 text-[15px]">{d}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section label="Lo zafferano">
        <div className="grid gap-16 md:grid-cols-2 md:gap-10">
          {PRODUCTS.map(([name, kind, text]) => (
            <article key={name}>
              <p className="label">{kind}</p>
              <h3 className="display mt-2 text-[44px] leading-none md:text-[52px]">{name}</h3>
              <p className="body mt-6 max-w-sm">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-16">
          <Link href="/zafferano" className="link">Il prodotto e le categorie dello zafferano</Link>
        </p>
      </Section>

      <section className="bg-[var(--ink)] px-6 text-[var(--paper)]">
        <div className="mx-auto grid max-w-6xl gap-6 py-24 md:grid-cols-12 md:gap-8 md:py-32">
          <div className="md:col-span-3">
            <h2 className="label text-[#c4b6a8]!">Ristorazione</h2>
          </div>
          <div className="md:col-span-9">
            <p className="display max-w-[26ch] text-[32px] leading-[1.2] md:text-[44px]">
              Per ristoranti, hotel e catering di Milano: campione di prova, forniture programmate, listino riservato.
            </p>
            <Link href="/ristorazione#richiesta" className="btn btn-on-dark mt-12">Richiedi un campione</Link>
          </div>
        </div>
      </section>

      <Section label="Shop online" rule={false}>
        <p className="body max-w-md">
          Lo shop online è in allestimento. Nel frattempo gli ordini si fanno su richiesta, per email.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          <a href={mailto("Ordine ZAFRANE")} className="link">Scrivici per ordinare</a>
          <Link href="/shop" className="link">Informazioni sullo shop</Link>
        </div>
      </Section>
    </>
  );
}
