import type { Metadata } from "next";
import Link from "next/link";
import { GRADES, PistilPlate } from "@/components/Pistils";

export const metadata: Metadata = {
  title: "Zafferano Super Negin e Sargol",
  description:
    "Zafferano Super Negin in pistilli e polvere 100% Sargol. Le categorie dello zafferano persiano spiegate: Super Negin, Negin, Sargol, Pushal, Dasteh. Uso in cucina e conservazione.",
  alternates: { canonical: "/zafferano" },
};

const SPECS: [string, string][] = [
  ["Specie", "Crocus sativus L."],
  ["Origine", "Khorasan, Iran"],
  ["Raccolta", "A mano, nella fioritura autunnale"],
  ["Essiccazione", "Naturale, al sole"],
  ["Pistilli", "Super Negin: lunghi, interi, solo parte rossa"],
  ["Polvere", "100% Sargol: solo le punte rosse, macinate"],
  ["Crocina dichiarata", "Super Negin ≥ 260 · Sargol ≥ 240. Certificato di analisi del lotto su richiesta"],
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
      <section className="glow px-6 pb-20 pt-28">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Il prodotto</p>
          <h1 className="mt-8 max-w-3xl font-serif text-[44px] font-light leading-[1.1] md:text-[72px]">
            Due referenze, <em className="text-[var(--gold)]">nessun compromesso.</em>
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-8 text-[var(--ink-soft)]">
            Selezioniamo solo le due categorie più pure dello zafferano persiano, entrambe da filiera familiare diretta.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {[
            { g: "super-negin" as const, eyebrow: "In pistilli", name: "Super Negin", text: "Pistilli lunghi e interi, solo parte rossa, essiccati al sole. È la referenza per chi vuole vedere e controllare il prodotto: si infonde, si tosta, si usa intero." },
            { g: "sargol" as const, eyebrow: "In polvere", name: "100% Sargol", text: "Sargol sono le punte rosse del pistillo, la parte con la maggiore forza colorante. La nostra polvere è solo Sargol, macinato: nessuna parte gialla, nessun additivo." },
          ].map((p) => (
            <article key={p.name} className="border border-[var(--line)] bg-[var(--surface)]">
              <div className="border-b border-[var(--line)] p-6">
                <PistilPlate grade={p.g} label={`Zafferano ${p.name}`} className="h-auto w-full" />
              </div>
              <div className="p-8 md:p-10">
                <p className="eyebrow">{p.eyebrow}</p>
                <h2 className="mt-4 font-serif text-[40px] font-light">{p.name}</h2>
                <p className="mt-4 text-[15px] leading-8 text-[var(--ink-soft)]">{p.text}</p>
              </div>
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

      <section id="categorie" className="scroll-mt-24 border-t border-[var(--line)] bg-[var(--surface)] px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Le categorie dello zafferano persiano</p>
          <h2 className="mt-6 max-w-2xl font-serif text-[36px] font-light leading-tight md:text-[52px]">
            Dal pistillo intero alla sola punta rossa.
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[var(--ink-soft)]">
            Ogni fiore ha tre pistilli rossi uniti a uno stilo giallo-bianco. Il colore e l’aroma stanno nella parte rossa: le
            categorie dipendono da quanto rosso resta e da come viene tagliato. Lo stilo da solo, senza parte rossa, si chiama Konj
            ed è quasi privo di colore.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GRADES.map((g) => (
              <article key={g.grade} className={`flex flex-col border bg-[var(--background)] ${g.ours ? "border-[var(--gold)]" : "border-[var(--line)]"}`}>
                <div className="p-5">
                  <PistilPlate grade={g.grade} label={`Zafferano ${g.name}`} className="h-auto w-full" />
                </div>
                <div className="flex flex-1 flex-col border-t border-[var(--line)] p-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-[30px] font-light">{g.name}</h3>
                    {g.ours && <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]">{g.ours}</span>}
                  </div>
                  <p className="mt-3 text-[14px] leading-7 text-[var(--ink-soft)]">{g.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-[12px] text-[var(--muted)]">Illustrazioni a scopo esplicativo. Classificazione commerciale iraniana.</p>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">In cucina</p>
          <div className="mt-12 grid gap-14 md:grid-cols-3">
            {GUIDE.map(([t, d]) => (
              <div key={t}>
                <div className="hairline" />
                <h2 className="mt-6 font-serif text-[30px] font-light">{t}</h2>
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
