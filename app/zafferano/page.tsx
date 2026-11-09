import type { Metadata } from "next";
import Link from "next/link";
import { GradeList } from "@/components/Grades";

export const metadata: Metadata = {
  title: "Zafferano Super Negin e Sargol",
  description:
    "Zafferano Super Negin in pistilli e polvere 100% Sargol. Le categorie dello zafferano persiano spiegate: Super Negin, Negin, Sargol, Pushal, Dasteh, Konj. Uso in cucina e conservazione.",
  alternates: { canonical: "/zafferano" },
};

const PRODUCTS = [
  {
    eyebrow: "In pistilli",
    name: "Super Negin",
    text: "Pistilli lunghi e interi, solo parte rossa, essiccati al sole. È la referenza per chi vuole vedere e controllare il prodotto: si infonde, si tosta, si usa intero.",
    specs: [["Taglio", "Pistillo intero, solo rosso"], ["Crocina dichiarata", "≥ 260"], ["Uso", "Infusione, risotti, piatti in cui il pistillo si vede"]],
  },
  {
    eyebrow: "In polvere",
    name: "100% Sargol",
    text: "Sargol sono le punte rosse del pistillo, la parte con la maggiore forza colorante. La nostra polvere è solo Sargol, macinato: nessuna parte gialla, nessun additivo.",
    specs: [["Taglio", "Solo punte rosse, macinate"], ["Crocina dichiarata", "≥ 240"], ["Uso", "Cucine ad alto ritmo, impasti, salse"]],
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
  ["Pistilli", "Infondere 15–20 minuti in poca acqua tiepida o brodo, non bollente. Aggiungere l’infusione a fine cottura per non disperdere l’aroma."],
  ["Polvere", "Si scioglie direttamente nel liquido, senza infusione. La scelta pratica per cucine ad alto ritmo e per impasti."],
  ["Dose indicativa", "Risotto: 0,05–0,10 g di pistilli a porzione. Un punto di partenza, da tarare sul lotto e sul piatto."],
];

const SIGNS = [
  "Pistilli interi, di un rosso uniforme, con la punta a tromba.",
  "Nessun filamento giallo o bianco: sono parti prive di colore e aroma.",
  "Profumo intenso e pulito, mai polveroso né artificiale.",
  "In acqua tiepida cede il colore in modo graduale, non di colpo.",
];

export default function Zafferano() {
  return (
    <>
      <section className="warm px-6 pb-20 pt-28">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Il prodotto</p>
          <h1 className="mt-8 max-w-3xl font-serif text-[46px] font-light leading-[1.1] md:text-[74px]">
            Due referenze, <em className="text-[var(--accent)]">nessun compromesso.</em>
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-8 text-[var(--ink-soft)]">
            Selezioniamo solo le due categorie più pure dello zafferano persiano, entrambe da filiera familiare diretta.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="frame bg-[var(--background)] p-10 md:p-12">
              <p className="eyebrow">{p.eyebrow}</p>
              <h2 className="mt-5 font-serif text-[48px] font-light leading-none">{p.name}</h2>
              <div className="rule mt-8" />
              <p className="mt-8 text-[15px] leading-8 text-[var(--ink-soft)]">{p.text}</p>
              <dl className="mt-8 space-y-3 text-[13px]">
                {p.specs.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 border-b border-[var(--line)] pb-3">
                    <dt className="text-[var(--muted)]">{k}</dt>
                    <dd className="text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <dl className="mx-auto mt-20 max-w-6xl divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {SPECS.map(([k, v]) => (
            <div key={k} className="grid gap-2 py-5 md:grid-cols-3">
              <dt className="eyebrow self-center">{k}</dt>
              <dd className="text-[15px] md:col-span-2">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="categorie" className="scroll-mt-24 bg-[var(--surface)] px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Le categorie dello zafferano persiano</p>
          <h2 className="mt-6 max-w-2xl font-serif text-[38px] font-light leading-tight md:text-[54px]">
            Dal pistillo intero alla sola punta rossa.
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[var(--ink-soft)]">
            Ogni fiore ha tre pistilli rossi uniti a uno stilo giallo-bianco. Colore e aroma stanno nella parte rossa: le categorie
            dipendono da quanto rosso resta e da come viene tagliato.
          </p>
          <div className="mt-14">
            <GradeList />
          </div>
          <p className="mt-6 text-[12px] text-[var(--muted)]">Classificazione commerciale iraniana.</p>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">In cucina</p>
          <div className="mt-12 grid gap-14 md:grid-cols-3">
            {GUIDE.map(([t, d]) => (
              <div key={t}>
                <div className="rule" />
                <h2 className="mt-6 font-serif text-[32px] font-light">{t}</h2>
                <p className="mt-4 text-[14px] leading-7 text-[var(--ink-soft)]">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 grid gap-16 md:grid-cols-2">
            <div>
              <p className="eyebrow">Come riconoscere un buon zafferano</p>
              <ul className="mt-8 space-y-5 text-[15px] leading-7 text-[var(--ink-soft)]">
                {SIGNS.map((s) => (
                  <li key={s} className="flex gap-5">
                    <span className="mt-[13px] h-px w-6 shrink-0 bg-[var(--accent)]" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Conservazione</p>
              <p className="mt-8 text-[15px] leading-8 text-[var(--ink-soft)]">
                In un contenitore ermetico, in un luogo fresco e asciutto, al riparo da luce e umidità. Lo zafferano non va mai tenuto
                vicino ai fornelli.
              </p>
            </div>
          </div>

          <div className="mt-24 flex flex-wrap gap-4">
            <Link href="/ristorazione#richiesta" className="btn btn-solid">Richiedi un campione</Link>
            <Link href="/shop" className="btn">Shop online</Link>
          </div>
        </div>
      </section>
    </>
  );
}
