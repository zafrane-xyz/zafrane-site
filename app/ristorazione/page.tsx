import type { Metadata } from "next";
import SampleForm from "@/components/SampleForm";

export const metadata: Metadata = {
  title: "Ristorazione",
  description:
    "Zafferano Super Negin e caviale del Caspio per ristoranti, hotel e catering a Milano: campione di prova, forniture programmate, listino riservato.",
  alternates: { canonical: "/ristorazione" },
};

const POINTS = [
  ["Resa costante", "Colore e aroma intensi da lotto a lotto: dosi ridotte, risultato ripetibile, food cost sotto controllo."],
  ["Forniture programmate", "Consegne regolari a Milano e dintorni, concordate sul tuo consumo reale."],
  ["Listino riservato", "I prezzi dello zafferano seguono il raccolto: la quotazione è sempre riferita al lotto corrente e inviata su richiesta."],
  ["Un referente diretto", "Parli sempre con la stessa persona, dal campione alla consegna."],
];

const STEPS = [
  ["Campione", "Ci scrivi cosa cucini e quanto ne consumi. Ti inviamo un campione."],
  ["Prova in cucina", "Lo provi sul tuo piatto, con i tuoi tempi."],
  ["Fornitura", "Se ti convince, concordiamo formati, quantità e calendario di consegna."],
];

export default function Ristorazione() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">Ristorazione</p>
        <h1 className="mt-5 max-w-2xl font-serif text-[44px] leading-tight md:text-[56px]">Per chi cucina ogni giorno.</h1>
        <p className="mt-6 max-w-xl text-[15px] leading-8 text-[var(--ink-soft)]">
          Per ristoranti, hotel, catering e gastronomie. Lo zafferano si giudica in cucina: prima di impegnarti su una fornitura,
          provalo.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {POINTS.map(([t, d]) => (
            <div key={t} className="border-t border-[var(--line)] pt-6">
              <h2 className="font-serif text-[24px]">{t}</h2>
              <p className="mt-3 text-[14px] leading-7 text-[var(--ink-soft)]">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <p className="eyebrow">Come si lavora</p>
          <ol className="mt-10 grid gap-10 md:grid-cols-3">
            {STEPS.map(([t, d], i) => (
              <li key={t}>
                <p className="font-serif text-[30px] text-[var(--accent)]">0{i + 1}</p>
                <h2 className="mt-2 font-serif text-[24px]">{t}</h2>
                <p className="mt-3 text-[14px] leading-7 text-[var(--ink-soft)]">{d}</p>
              </li>
            ))}
          </ol>
        </div>

        <div id="richiesta" className="mt-24 grid scroll-mt-24 gap-16 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="eyebrow">Campione e quotazione</p>
            <h2 className="mt-4 font-serif text-[32px] leading-tight">Parlaci della tua cucina.</h2>
            <p className="mt-5 text-[14px] leading-7 text-[var(--ink-soft)]">
              Zafferano in pistilli o in polvere, e per chi è interessato anche caviale del Caspio, per cui lavoriamo a campionature.
            </p>
          </div>
          <div className="md:col-span-3">
            <SampleForm />
          </div>
        </div>
      </div>
    </div>
  );
}
