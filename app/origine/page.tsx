import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Origine",
  description:
    "Lo zafferano ZAFRANE nasce in Khorasan, in una filiera familiare, e arriva a Milano: raccolta a mano, essiccazione al sole, acquisto diretto.",
  alternates: { canonical: "/origine" },
};

const STEPS = [
  ["Raccolta", "I fiori sbocciano per poche settimane in autunno e si raccolgono a mano, all’alba, prima che il sole li apra."],
  ["Separazione", "Da ogni fiore si estraggono a mano i tre pistilli rossi. Servono oltre 150.000 fiori per un chilo di zafferano."],
  ["Essiccazione", "I pistilli si essiccano in modo naturale, al sole: è il passaggio che fissa colore e aroma."],
  ["Selezione", "Il prodotto viene diviso per categoria e arriva a Milano, dove lo distribuiamo."],
];

export default function Origine() {
  return (
    <>
      <section className="warm px-6 pb-24 pt-28">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Origine</p>
          <h1 className="mt-8 max-w-4xl font-serif text-[46px] font-light leading-[1.1] md:text-[74px]">
            Da Mashhad a Milano, <em className="text-[var(--accent)]">un solo filo.</em>
          </h1>
          <div className="mt-14 grid gap-10 text-[16px] leading-8 text-[var(--ink-soft)] md:grid-cols-2">
            <p>
              ZAFRANE nasce dall’incontro di due città: Mashhad, nel cuore della Khorasan, storica area di produzione dello zafferano
              iraniano, e Milano, la città del risotto allo zafferano.
            </p>
            <p>
              Il nostro zafferano arriva da una filiera familiare. Lo acquistiamo direttamente dalla famiglia produttrice: sappiamo chi
              lo raccoglie, come lo essicca e in quale stagione.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Dal fiore alla spezia</p>
          <h2 className="mt-6 max-w-2xl font-serif text-[38px] font-light leading-tight md:text-[52px]">
            Un raccolto l’anno, tutto a mano.
          </h2>
          <ol className="mt-16 grid gap-12 md:grid-cols-4">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="border-t border-[var(--line)] pt-8">
                <p className="font-serif text-[48px] font-light leading-none text-[var(--accent)]">0{i + 1}</p>
                <h3 className="mt-5 font-serif text-[28px] font-light">{t}</h3>
                <p className="mt-3 text-[14px] leading-7 text-[var(--ink-soft)]">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <img src="/mark.png" alt="" width={59} height={96} className="mx-auto h-10 w-auto" />
          <p className="mt-10 font-serif text-[32px] font-light italic leading-[1.35] md:text-[44px]">
            “Dalla famiglia produttrice a ZAFRANE, da ZAFRANE alla tua cucina.”
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--line)] px-6 py-28">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="eyebrow">Chi siamo</p>
            <h2 className="mt-6 font-serif text-[38px] font-light leading-tight md:text-[50px]">Un ponte tra Iran e Italia.</h2>
          </div>
          <div className="space-y-6 text-[16px] leading-8 text-[var(--ink-soft)]">
            <p>
              ZAFRANE è un progetto di Navid Khoshbaf, nato a Mashhad in una famiglia di produttori di zafferano e da anni in Italia.
              Alla conoscenza diretta della filiera unisce competenze creative e di design maturate qui: per questo il prodotto è
              presentato con la stessa cura con cui viene scelto.
            </p>
            <p>
              Lavoriamo oggi con ristoranti di Milano, con un’idea semplice: meno quantità, più intensità, e una fornitura continua di
              cui un cuoco si possa fidare.
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <Link href="/zafferano" className="btn btn-solid">Il prodotto</Link>
              <Link href="/contatti" className="btn">Contatti</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
