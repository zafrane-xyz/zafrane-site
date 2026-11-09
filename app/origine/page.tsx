import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Origine",
  description:
    "Lo zafferano ZAFRANE nasce in Khorasan, in una filiera familiare, e arriva a Milano: raccolta a mano, essiccazione al sole, acquisto diretto.",
  alternates: { canonical: "/origine" },
};

const STEPS = [
  ["Raccolta", "I fiori sbocciano per poche settimane in autunno. Si raccolgono a mano, all’alba, prima che il sole li apra."],
  ["Separazione", "Da ogni fiore si estraggono a mano i tre pistilli rossi. Per un chilo di zafferano servono oltre 150.000 fiori."],
  ["Essiccazione", "I pistilli si essiccano in modo naturale, al sole: è il passaggio che fissa colore e aroma."],
  ["Selezione", "Il raccolto viene diviso per categoria. Scegliamo il Super Negin e il Sargol, che arrivano a Milano."],
];

export default function Origine() {
  return (
    <>
      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-6 pb-8 pt-24 md:grid-cols-12 md:gap-8 md:pt-32">
          <div className="md:col-span-3">
            <p className="label">Origine</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="display max-w-[14ch] text-[44px] leading-[1.08] md:text-[72px]">Da Mashhad a Milano.</h1>
            <p className="body mt-10 max-w-lg">
              Mashhad, nel cuore della Khorasan, è la storica terra dello zafferano iraniano. Milano è la città del risotto allo
              zafferano. ZAFRANE nasce tra queste due città.
            </p>
          </div>
        </div>
      </section>

      <Section label="La filiera">
        <p className="display max-w-[26ch] text-[30px] leading-[1.2] md:text-[40px]">
          Lo scegliamo direttamente dalla famiglia che lo coltiva: sappiamo chi lo raccoglie, come lo essicca, in quale stagione.
        </p>
      </Section>

      <Section label="Dal fiore alla spezia">
        <ol className="grid gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-14">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="grid grid-cols-[2.5rem_1fr] gap-2">
              <span className="display text-[22px] leading-[1.3] text-[var(--crimson)]">{i + 1}.</span>
              <div>
                <h3 className="display text-[26px] leading-[1.2]">{t}</h3>
                <p className="body mt-3 text-[15px]">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section label="Chi siamo">
        <div className="max-w-xl">
          <p className="body">
            ZAFRANE è un progetto di Navid Khoshbaf, nato a Mashhad in una famiglia di produttori di zafferano e da anni in Italia,
            dove ha studiato design. Conosce la filiera dall’interno e cura il prodotto con lo stesso rigore con cui lo sceglie.
          </p>
          <p className="body mt-6">
            Oggi lavoriamo con ristoranti di Milano, con un’idea semplice: meno quantità, più intensità, e una fornitura di cui un
            cuoco si possa fidare.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
            <Link href="/zafferano" className="btn">Il prodotto</Link>
            <Link href="/contatti" className="link">Contatti</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
