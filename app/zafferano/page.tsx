import type { Metadata } from "next";
import Link from "next/link";
import { Jar } from "@/components/Art";
import Photo from "@/components/Photo";
import { PHOTOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zafferano Super Negin",
  description:
    "Zafferano Super Negin in pistilli e polvere 100% Sargol: cosa sono, come si usano in cucina, come si conservano e come si riconosce un buon zafferano.",
  alternates: { canonical: "/zafferano" },
};

const SPECS: [string, string][] = [
  ["Specie", "Crocus sativus L."],
  ["Origine", "Khorasan, Iran"],
  ["Raccolta", "A mano, nel periodo della fioritura autunnale"],
  ["Essiccazione", "Naturale, al sole"],
  ["Pistilli", "Super Negin: pistilli lunghi e interi, solo parte rossa"],
  ["Polvere", "100% Sargol: solo la punta rossa del pistillo, macinata"],
  ["Crocina dichiarata", "Pistilli Super Negin ≥ 260 · polvere Sargol ≥ 240. Certificato di analisi del lotto su richiesta"],
  ["Formati", "Per ristorazione e per dettaglio: chiedi la disponibilità"],
];

const GUIDE = [
  {
    title: "Pistilli",
    text: "Infondere 15–20 minuti in poca acqua tiepida o brodo, non bollente. Aggiungere l’infusione a fine cottura per non disperdere l’aroma.",
  },
  {
    title: "Polvere",
    text: "Si scioglie direttamente nel liquido, senza infusione. È la scelta pratica per cucine ad alto ritmo e per impasti.",
  },
  {
    title: "Dose indicativa",
    text: "Risotto: 0,05–0,10 g di pistilli a porzione. È un punto di partenza: va tarato sul lotto e sul piatto.",
  },
];

const SIGNS = [
  "Pistilli interi, di un rosso uniforme, con la punta a tromba.",
  "Nessun filamento giallo o bianco: sono parti prive di colore e aroma.",
  "Profumo intenso e pulito, mai polveroso né artificiale.",
  "In acqua tiepida cede il colore in modo graduale, non di colpo.",
];

export default function Zafferano() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">Il prodotto</p>
        <h1 className="mt-5 max-w-2xl font-serif text-[44px] leading-tight md:text-[56px]">Super Negin: il pistillo intero.</h1>
        <p className="mt-6 max-w-xl text-[15px] leading-8 text-[var(--ink-soft)]">
          Vendiamo solo due referenze, entrambe da filiera familiare diretta: pistilli Super Negin e polvere 100% Sargol.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-5">
          <div className="space-y-6 text-[15px] leading-8 text-[var(--ink-soft)] md:col-span-3">
            <div>
              <h2 className="font-serif text-[28px] text-[var(--foreground)]">Zafferano Super Negin in pistilli</h2>
              <p className="mt-3">
                Pistilli lunghi e interi, solo parte rossa, essiccati naturalmente al sole. È la referenza per chi vuole vedere e
                controllare il prodotto: si infonde, si tosta, si usa intero.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-[28px] text-[var(--foreground)]">Zafferano in polvere Sargol</h2>
              <p className="mt-3">
                Sargol è la punta rossa del pistillo, la parte con la maggiore forza colorante. La nostra polvere è 100% Sargol,
                macinata: nessuna parte gialla, nessun additivo.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-[var(--panel)] p-10 md:col-span-2">
            <Photo src={PHOTOS.zafferano} alt="Zafferano ZAFRANE" fallback={<Jar label="Super Negin" className="h-auto w-44" />} />
          </div>
        </div>

        <dl className="mt-24 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {SPECS.map(([k, v]) => (
            <div key={k} className="grid gap-2 py-5 md:grid-cols-3">
              <dt className="eyebrow self-center">{k}</dt>
              <dd className="text-[15px] md:col-span-2">{v}</dd>
            </div>
          ))}
        </dl>

        <p className="eyebrow mt-24">In cucina</p>
        <div className="mt-8 grid gap-12 md:grid-cols-3">
          {GUIDE.map((g) => (
            <div key={g.title}>
              <h2 className="font-serif text-[24px]">{g.title}</h2>
              <p className="mt-3 text-[14px] leading-7 text-[var(--ink-soft)]">{g.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Come riconoscere un buon zafferano</p>
            <ul className="mt-6 space-y-4 text-[14px] leading-7 text-[var(--ink-soft)]">
              {SIGNS.map((s) => (
                <li key={s} className="flex gap-4">
                  <span className="mt-[10px] h-px w-5 shrink-0 bg-[var(--accent)]" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Conservazione</p>
            <p className="mt-6 text-[14px] leading-7 text-[var(--ink-soft)]">
              In un contenitore ermetico, in un luogo fresco e asciutto, al riparo da luce e umidità. Lo zafferano non va mai tenuto vicino ai fornelli.
            </p>
          </div>
        </div>

        <div className="mt-24 flex flex-wrap gap-4">
          <Link href="/ristorazione#richiesta" className="btn btn-solid">Richiedi un campione</Link>
          <Link href="/shop" className="btn">Shop online</Link>
        </div>
      </div>
    </div>
  );
}
