import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Origine",
  description:
    "Lo zafferano ZAFRANE nasce in Khorasan, in una filiera familiare: raccolta a mano, essiccazione al sole, acquisto diretto dalla famiglia produttrice.",
  alternates: { canonical: "/origine" },
};

const STEPS = [
  ["Raccolta", "I fiori sbocciano per poche settimane in autunno. Si raccolgono a mano, all’alba, prima che il sole li apra."],
  ["Separazione", "Da ogni fiore si estraggono a mano i tre pistilli rossi. Per un chilo servono oltre 150.000 fiori."],
  ["Essiccazione", "I pistilli si essiccano in modo naturale, al sole: è il passaggio che fissa colore e aroma."],
  ["Selezione", "Il raccolto viene diviso per categoria. Scegliamo il Super Negin e il Sargol."],
];

export default function Origine() {
  return (
    <>
      <PageHero
        label="Origine"
        title="Dalla Persia all’Italia."
        intro="Mashhad, nel cuore della Khorasan, è la storica terra dello zafferano persiano. Da lì arriva il nostro, per la cucina italiana."
      />

      <Section tone="sand" italic title="Lo scegliamo direttamente dalla famiglia che lo coltiva: sappiamo chi lo raccoglie, come lo essicca, in quale stagione." />

      <Section title="Dal fiore alla spezia">
        <ol className="grid gap-12 md:grid-cols-4 md:gap-10">
          {STEPS.map(([t, d], i) => (
            <li key={t}>
              <p className="display text-[28px] text-[var(--crimson)]">{i + 1}</p>
              <h3 className="display mt-2 text-[30px]">{t}</h3>
              <p className="body mt-3 text-[16px]">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="sand" title="Chi siamo">
        <div className="mx-auto max-w-2xl">
          <p className="body">
            ZAFRANE è un progetto di Navid Khoshbaf, nato a Mashhad in una famiglia di produttori di zafferano e da anni in Italia, dove
            ha studiato design. Conosce la filiera dall’interno e cura il prodotto con lo stesso rigore con cui lo sceglie.
          </p>
          <p className="body mt-6">
            Lavoriamo con ristoranti e cuochi, con un’idea semplice: meno quantità, più intensità, e una fornitura di cui ci si possa
            fidare.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/zafferano" className="btn">Il prodotto</Link>
            <Link href="/contatti" className="btn btn-outline">Contatti</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
