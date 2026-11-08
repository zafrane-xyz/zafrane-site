import type { Metadata } from "next";
import Link from "next/link";
import { Crocus, Route } from "@/components/Art";
import Photo from "@/components/Photo";
import { PHOTOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Origine",
  description:
    "Lo zafferano ZAFRANE nasce in Khorasan, in una filiera familiare, e arriva a Milano: raccolta a mano, essiccazione naturale, acquisto diretto.",
  alternates: { canonical: "/origine" },
};

const STEPS = [
  ["Raccolta", "I fiori sbocciano per poche settimane in autunno e si raccolgono a mano, all’alba, prima che il sole li apra."],
  ["Separazione", "Da ogni fiore si estraggono a mano i tre pistilli rossi. Servono oltre 150.000 fiori per un chilo di zafferano."],
  ["Essiccazione", "I pistilli si essiccano in modo naturale, al sole: è il passaggio che fissa colore e aroma."],
  ["Selezione", "Il prodotto viene selezionato per categoria e arriva a Milano, dove lo distribuiamo."],
];

export default function Origine() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">Origine</p>
        <h1 className="mt-5 max-w-2xl font-serif text-[44px] leading-tight md:text-[56px]">Dalla Khorasan a Milano.</h1>

        <div className="mt-16 grid items-center gap-14 md:grid-cols-2">
          <div className="space-y-6 text-[15px] leading-8 text-[var(--ink-soft)]">
            <p>
              ZAFRANE nasce dall’incontro di due città: Mashhad, nel cuore della Khorasan, storica area di produzione dello
              zafferano iraniano, e Milano, la città del risotto allo zafferano.
            </p>
            <p>
              Il nostro zafferano arriva da una filiera familiare. Lo acquistiamo direttamente dalla famiglia produttrice: sappiamo
              chi lo raccoglie, come lo essicca e in quale stagione.
            </p>
          </div>
          <div className="flex h-72 items-center justify-center bg-[var(--panel)] p-8">
            <Photo src={PHOTOS.origine} alt="Campo di zafferano in Khorasan" fallback={<Crocus className="h-full w-auto" />} />
          </div>
        </div>

        <div className="mt-24">
          <p className="eyebrow">Dal fiore alla spezia</p>
          <ol className="mt-10 grid gap-10 md:grid-cols-4">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="border-t border-[var(--line)] pt-6">
                <p className="font-serif text-[30px] text-[var(--accent)]">0{i + 1}</p>
                <h2 className="mt-3 font-serif text-[24px]">{t}</h2>
                <p className="mt-3 text-[14px] leading-7 text-[var(--ink-soft)]">{d}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-24 border-y border-[var(--line)] py-12">
          <Route from="Khorasan" to="Milano" className="mx-auto h-auto w-full max-w-2xl" />
          <p className="mx-auto mt-4 max-w-md text-center text-[13px] leading-7 text-[var(--ink-soft)]">
            Dalla famiglia produttrice a ZAFRANE, da ZAFRANE alla tua cucina.
          </p>
        </div>

        <div className="mt-24 grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="eyebrow">Chi siamo</p>
            <h2 className="mt-4 font-serif text-[32px] leading-tight">Un ponte tra Iran e Italia.</h2>
          </div>
          <div className="space-y-6 text-[15px] leading-8 text-[var(--ink-soft)] md:col-span-2">
            <p>
              ZAFRANE è un progetto di Navid Khoshbaf, nato a Mashhad in una famiglia di produttori di zafferano e da anni in
              Italia. Alla conoscenza diretta della filiera unisce competenze creative e di design maturate qui: per questo il
              prodotto è presentato con la stessa cura con cui viene scelto.
            </p>
            <p>
              Lavoriamo oggi con ristoranti di Milano, con un’idea semplice: meno quantità, più intensità, e una fornitura
              continua di cui un cuoco si possa fidare.
            </p>
          </div>
        </div>

        <div className="mt-24 flex flex-wrap gap-4">
          <Link href="/zafferano" className="btn btn-solid">Il prodotto</Link>
          <Link href="/contatti" className="btn">Contatti</Link>
        </div>
      </div>
    </div>
  );
}
