import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
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
    kind: "In pistilli",
    name: "Super Negin",
    text: "Pistilli lunghi e interi, solo parte rossa, essiccati al sole. Si infonde, si tosta, si usa intero: per chi vuole vedere lo zafferano che usa.",
    specs: [["Taglio", "Pistillo intero, solo rosso"], ["Crocina dichiarata", "≥ 260"]],
  },
  {
    kind: "In polvere",
    name: "Sargol",
    text: "Le sole punte rosse del pistillo, la parte con più forza colorante, macinate. Nessuna parte gialla, nessun additivo. Si scioglie subito, senza infusione.",
    specs: [["Taglio", "Punte rosse, macinate"], ["Crocina dichiarata", "≥ 240"]],
  },
];

const SPECS: [string, string][] = [
  ["Specie", "Crocus sativus L."],
  ["Origine", "Khorasan, Iran"],
  ["Raccolta", "A mano, nella fioritura autunnale"],
  ["Essiccazione", "Naturale, al sole"],
  ["Analisi", "Categoria I secondo ISO 3632. Certificato di analisi del lotto su richiesta."],
];

const GUIDE = [
  ["Pistilli", "Infondere 15–20 minuti in poca acqua tiepida o brodo, non bollente, e aggiungere l’infusione a fine cottura."],
  ["Polvere", "Sciogliere direttamente nel liquido. La scelta pratica per le cucine ad alto ritmo e per gli impasti."],
  ["Dose", "Per un risotto bastano 0,10 g di pistilli a porzione. Un punto di partenza, da tarare sul lotto."],
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
      <PageHero
        label="Il prodotto"
        title="Due referenze, scelte per purezza."
        intro="Dello zafferano persiano selezioniamo solo le due categorie fatte interamente di parte rossa, dalla stessa filiera familiare."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="border border-[var(--line)] px-8 py-14 text-center md:px-10">
              <p className="label">{p.kind}</p>
              <h2 className="display mt-2 text-[48px] md:text-[56px]">{p.name}</h2>
              <p className="body mx-auto mt-5 max-w-sm">{p.text}</p>
              <dl className="mx-auto mt-8 max-w-sm border-t border-[var(--line)] text-[15px]">
                {p.specs.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 border-b border-[var(--line)] py-3">
                    <dt className="text-[var(--muted)]">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </section>

      <Section tone="sand" title="Scheda tecnica">
        <dl className="mx-auto max-w-2xl border-t border-[var(--line)] text-left text-[16px]">
          {SPECS.map(([k, v]) => (
            <div key={k} className="grid gap-1 border-b border-[var(--line)] py-4 md:grid-cols-[200px_1fr] md:gap-8">
              <dt className="text-[var(--muted)]">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section
        id="categorie"
        title="Le categorie dello zafferano persiano"
        intro="Ogni fiore ha tre pistilli rossi uniti a uno stilo giallo-bianco. Colore e aroma stanno nella parte rossa: la categoria dice quanto rosso resta."
      >
        <GradeList />
      </Section>

      <Section tone="sand" title="In cucina">
        <dl className="grid gap-12 md:grid-cols-3 md:gap-14">
          {GUIDE.map(([t, d]) => (
            <div key={t}>
              <dt className="display text-[32px]">{t}</dt>
              <dd className="body mt-3">{d}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Riconoscerlo e conservarlo">
        <div className="mx-auto grid max-w-4xl gap-12 text-left md:grid-cols-2">
          <ul className="body space-y-3">
            {SIGNS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="body">In un contenitore ermetico, in un luogo fresco e asciutto, lontano da luce, umidità e fornelli.</p>
        </div>
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <Link href="/ristorazione#richiesta" className="btn">Richiedi un campione</Link>
          <Link href="/shop" className="btn btn-outline">Shop online</Link>
        </div>
      </Section>
    </>
  );
}
