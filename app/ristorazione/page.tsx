import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SampleForm from "@/components/SampleForm";

export const metadata: Metadata = {
  title: "Ristorazione",
  description:
    "Zafferano Super Negin e polvere 100% Sargol per ristoranti, hotel e catering: campione di prova, forniture programmate, listino riservato.",
  alternates: { canonical: "/ristorazione" },
};

const OFFER = [
  ["Resa costante", "Colore e aroma uguali da lotto a lotto: dosi ridotte, risultato ripetibile, food cost sotto controllo."],
  ["Forniture programmate", "Consegne regolari, concordate sul tuo consumo reale."],
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
      <PageHero
        label="Ristorazione"
        title="Per chi cucina ogni giorno."
        intro="Per ristoranti, hotel, catering e gastronomie. Prima di impegnarti su una fornitura, prova lo zafferano sul tuo piatto."
      />

      <Section tone="sand" title="Cosa offriamo">
        <dl className="grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
          {OFFER.map(([t, d]) => (
            <div key={t}>
              <dt className="display text-[32px]">{t}</dt>
              <dd className="body mx-auto mt-3 max-w-sm">{d}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Come funziona">
        <ol className="grid gap-12 md:grid-cols-3 md:gap-10">
          {STEPS.map(([t, d], i) => (
            <li key={t}>
              <p className="display text-[28px] text-[var(--crimson)]">{i + 1}</p>
              <h3 className="display mt-2 text-[30px]">{t}</h3>
              <p className="body mt-3">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        tone="sand"
        id="richiesta"
        title="Richiedi un campione"
        intro="Pistilli Super Negin o polvere 100% Sargol. Ti rispondiamo con campione, condizioni e calendario."
      >
        <div className="mx-auto max-w-xl text-left">
          <SampleForm />
        </div>
      </Section>
    </>
  );
}
