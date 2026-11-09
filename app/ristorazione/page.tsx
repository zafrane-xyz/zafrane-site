import type { Metadata } from "next";
import Section from "@/components/Section";
import SampleForm from "@/components/SampleForm";

export const metadata: Metadata = {
  title: "Ristorazione",
  description:
    "Zafferano Super Negin e polvere 100% Sargol per ristoranti, hotel e catering a Milano: campione di prova, forniture programmate, listino riservato.",
  alternates: { canonical: "/ristorazione" },
};

const OFFER = [
  ["Resa costante", "Colore e aroma uguali da lotto a lotto: dosi ridotte, risultato ripetibile, food cost sotto controllo."],
  ["Forniture programmate", "Consegne regolari a Milano e dintorni, concordate sul tuo consumo reale."],
  ["Listino riservato", "Il prezzo dello zafferano segue il raccolto: la quotazione si riferisce sempre al lotto corrente."],
  ["Un solo referente", "Parli sempre con la stessa persona, dal campione alla consegna."],
];

const STEPS = [
  ["Ci scrivi", "Cosa cucini e quanto zafferano consumi in un mese."],
  ["Provi il campione", "Sul tuo piatto, con i tuoi tempi."],
  ["Concordiamo la fornitura", "Formati, quantità e calendario delle consegne."],
];

export default function Ristorazione() {
  return (
    <>
      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-6 pb-8 pt-24 md:grid-cols-12 md:gap-8 md:pt-32">
          <div className="md:col-span-3">
            <p className="label">Ristorazione</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="display max-w-[14ch] text-[44px] leading-[1.08] md:text-[72px]">Per chi cucina ogni giorno.</h1>
            <p className="body mt-10 max-w-lg">
              Per ristoranti, hotel, catering e gastronomie. Prima di impegnarti su una fornitura, prova lo zafferano sul tuo piatto.
            </p>
          </div>
        </div>
      </section>

      <Section label="Cosa offriamo">
        <dl className="grid gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-14">
          {OFFER.map(([t, d]) => (
            <div key={t}>
              <dt className="display text-[26px]">{t}</dt>
              <dd className="body mt-3 text-[15px]">{d}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section label="Come funziona">
        <ol className="grid gap-12 md:grid-cols-3 md:gap-10">
          {STEPS.map(([t, d], i) => (
            <li key={t}>
              <span className="display text-[22px] text-[var(--crimson)]">{i + 1}.</span>
              <h3 className="display mt-2 text-[26px] leading-[1.2]">{t}</h3>
              <p className="body mt-3 text-[15px]">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section label="Richiedi un campione" id="richiesta">
        <div className="max-w-xl">
          <p className="body">Pistilli Super Negin o polvere 100% Sargol. Ti rispondiamo con campione, condizioni e calendario.</p>
          <div className="mt-12">
            <SampleForm />
          </div>
        </div>
      </Section>
    </>
  );
}
