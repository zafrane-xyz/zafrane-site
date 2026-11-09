import type { Metadata } from "next";
import SampleForm from "@/components/SampleForm";

export const metadata: Metadata = {
  title: "Ristorazione",
  description:
    "Zafferano Super Negin e polvere 100% Sargol per ristoranti, hotel e catering a Milano: campione di prova, forniture programmate, listino riservato.",
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
    <>
      <section className="warm px-6 pb-24 pt-28">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Ristorazione</p>
          <h1 className="mt-8 max-w-4xl font-serif text-[44px] font-light leading-[1.1] md:text-[72px]">
            Per chi cucina <em className="text-[var(--accent)]">ogni giorno.</em>
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-8 text-[var(--ink-soft)]">
            Per ristoranti, hotel, catering e gastronomie. Lo zafferano si giudica in cucina: prima di impegnarti su una fornitura,
            provalo.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--line)] px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-x-16 gap-y-14 md:grid-cols-2">
          {POINTS.map(([t, d]) => (
            <div key={t}>
              <div className="rule" />
              <h2 className="mt-6 font-serif text-[30px] font-light">{t}</h2>
              <p className="mt-3 text-[15px] leading-7 text-[var(--ink-soft)]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--surface)] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Come si lavora</p>
          <ol className="mt-12 grid gap-12 md:grid-cols-3">
            {STEPS.map(([t, d], i) => (
              <li key={t}>
                <p className="font-serif text-[44px] font-light leading-none text-[var(--gold)]">0{i + 1}</p>
                <h2 className="mt-5 font-serif text-[28px] font-light">{t}</h2>
                <p className="mt-3 text-[15px] leading-7 text-[var(--ink-soft)]">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="richiesta" className="scroll-mt-24 px-6 py-28">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="eyebrow">Campione e quotazione</p>
            <h2 className="mt-6 font-serif text-[36px] font-light leading-tight md:text-[48px]">Parlaci della tua cucina.</h2>
            <p className="mt-6 text-[15px] leading-8 text-[var(--ink-soft)]">
              Pistilli Super Negin o polvere 100% Sargol. Ti rispondiamo con campione, condizioni e calendario.
            </p>
          </div>
          <div className="md:col-span-3">
            <SampleForm />
          </div>
        </div>
      </section>
    </>
  );
}
