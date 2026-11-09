import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import { GradeList } from "@/components/Grades";

export const metadata: Metadata = {
  title: "Zafferano Super Negin e Sargol",
  description:
    "Zafferano Super Negin in pistilli e polvere 100% Sargol. Le categorie dello zafferano persiano spiegate, l’uso in cucina e la conservazione.",
  alternates: { canonical: "/zafferano" },
};

const PRODUCTS = [
  {
    name: "Super Negin",
    kind: "In pistilli",
    text: "Pistilli lunghi e interi, solo parte rossa, essiccati al sole. Si infonde, si tosta, si usa intero: è la referenza per chi vuole vedere lo zafferano che usa.",
    specs: [["Taglio", "Pistillo intero, solo rosso"], ["Crocina dichiarata", "≥ 260"]],
  },
  {
    name: "Sargol",
    kind: "In polvere",
    text: "Le sole punte rosse del pistillo, la parte con più forza colorante, macinate. Nessuna parte gialla, nessun additivo. Si scioglie subito, senza infusione.",
    specs: [["Taglio", "Punte rosse, macinate"], ["Crocina dichiarata", "≥ 240"]],
  },
];

const SPECS: [string, string][] = [
  ["Specie", "Crocus sativus L."],
  ["Origine", "Khorasan, Iran"],
  ["Raccolta", "A mano, nella fioritura autunnale"],
  ["Essiccazione", "Naturale, al sole"],
  ["Analisi", "Certificato di analisi del lotto su richiesta"],
];

const GUIDE = [
  ["Pistilli", "Infondere 15–20 minuti in poca acqua tiepida o brodo, non bollente, e aggiungere l’infusione a fine cottura."],
  ["Polvere", "Sciogliere direttamente nel liquido. È la scelta pratica per le cucine ad alto ritmo e per gli impasti."],
  ["Dose", "Per un risotto, indicativamente 0,05–0,10 g di pistilli a porzione. Un punto di partenza, da tarare sul lotto."],
];

const SIGNS = [
  "Pistilli interi, di un rosso uniforme, con la punta a tromba.",
  "Nessun filamento giallo o bianco: non danno né colore né aroma.",
  "Profumo intenso e pulito, mai polveroso.",
  "In acqua tiepida cede il colore piano, non di colpo.",
];

export default function Zafferano() {
  return (
    <>
      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-6 pb-8 pt-24 md:grid-cols-12 md:gap-8 md:pt-32">
          <div className="md:col-span-3">
            <p className="label">Il prodotto</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="display max-w-[16ch] text-[44px] leading-[1.08] md:text-[72px]">Due referenze, scelte per purezza.</h1>
            <p className="body mt-10 max-w-lg">
              Dello zafferano persiano selezioniamo solo le due categorie fatte interamente di parte rossa. Entrambe arrivano dalla
              stessa filiera familiare.
            </p>
          </div>
        </div>
      </section>

      <Section label="Le referenze">
        <div className="grid gap-16 md:grid-cols-2 md:gap-10">
          {PRODUCTS.map((p) => (
            <article key={p.name}>
              <p className="label">{p.kind}</p>
              <h2 className="display mt-2 text-[44px] leading-none md:text-[52px]">{p.name}</h2>
              <p className="body mt-6">{p.text}</p>
              <dl className="mt-8 border-t border-[var(--line)] text-[14px]">
                {p.specs.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 border-b border-[var(--line)] py-3">
                    <dt className="text-[var(--ink-soft)]">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section label="Scheda tecnica">
        <dl className="border-t border-[var(--line)] text-[15px]">
          {SPECS.map(([k, v]) => (
            <div key={k} className="grid gap-1 border-b border-[var(--line)] py-4 md:grid-cols-9 md:gap-8">
              <dt className="text-[var(--ink-soft)] md:col-span-3">{k}</dt>
              <dd className="md:col-span-6">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section label="Le categorie" id="categorie">
        <p className="display max-w-[26ch] text-[30px] leading-[1.2] md:text-[40px]">
          Colore e aroma stanno nella parte rossa del pistillo. La categoria dice quanto rosso resta.
        </p>
        <p className="body mt-8 max-w-lg">
          Ogni fiore ha tre pistilli rossi uniti a uno stilo giallo-bianco. Secondo la classificazione commerciale iraniana, dalla
          più pura alla meno pura:
        </p>
        <div className="mt-12">
          <GradeList />
        </div>
      </Section>

      <Section label="In cucina">
        <dl className="grid gap-12 md:grid-cols-3 md:gap-10">
          {GUIDE.map(([t, d]) => (
            <div key={t}>
              <dt className="display text-[26px]">{t}</dt>
              <dd className="body mt-3 text-[15px]">{d}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section label="Riconoscerlo e conservarlo">
        <div className="grid gap-16 md:grid-cols-2 md:gap-10">
          <ul className="body space-y-3 text-[15px]">
            {SIGNS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="body text-[15px]">
            In un contenitore ermetico, in un luogo fresco e asciutto, lontano da luce, umidità e fornelli.
          </p>
        </div>
        <div className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-6">
          <Link href="/ristorazione#richiesta" className="btn">Richiedi un campione</Link>
          <Link href="/shop" className="link">Shop online</Link>
        </div>
      </Section>
    </>
  );
}
