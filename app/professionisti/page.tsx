import type { Metadata } from "next";
import SampleForm from "@/components/SampleForm";

export const metadata: Metadata = {
  title: "Ristorazione e professionisti",
  description:
    "Zafferano Super Negin per ristoranti, hotel e gastronomie: forniture continuative, consegne programmate, campione di prova per chef.",
  alternates: { canonical: "/professionisti" },
};

const POINTS = [
  ["Resa costante", "Intensità di colore e aroma uguale da lotto a lotto: dosi ridotte, risultato ripetibile."],
  ["Forniture programmate", "Consegne regolari concordate sul tuo consumo, con quotazione dedicata in base al volume."],
  ["Formati professionali", "Pistilli e polvere in formati per la cucina, fino a forniture di più chilogrammi su richiesta."],
  ["Supporto agli chef", "Indicazioni di dosaggio e uso, e un referente diretto per ogni ordine."],
];

export default function Professionisti() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">Ristorazione</p>
        <h1 className="mt-5 max-w-2xl font-serif text-[44px] leading-tight md:text-[56px]">Zafferano per chi lo usa ogni giorno.</h1>
        <p className="mt-6 max-w-xl text-[15px] leading-8 text-[var(--ink-soft)]">
          Per ristoranti, hotel e gastronomie. Prima di impegnarti su una fornitura puoi provare il prodotto con un campione:
          lo zafferano si giudica in cucina.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {POINTS.map(([t, d]) => (
            <div key={t} className="border-t border-[var(--line)] pt-6">
              <h2 className="font-serif text-[24px]">{t}</h2>
              <p className="mt-3 text-[14px] leading-7 text-[var(--ink-soft)]">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-16 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="eyebrow">Campione e quotazione</p>
            <h2 className="mt-4 font-serif text-[32px] leading-tight">Parlaci della tua cucina.</h2>
            <p className="mt-5 text-[14px] leading-7 text-[var(--ink-soft)]">
              Ti rispondiamo con le condizioni di fornitura. I prezzi dello zafferano seguono il raccolto, quindi la quotazione
              è sempre riferita al lotto corrente.
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
