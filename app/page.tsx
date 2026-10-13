import Link from "next/link";
import { Strands } from "@/components/Art";

const PILLARS = [
  {
    title: "Alta resa",
    text: "Per un risotto bastano 0,05–0,10 g. Più intensità, più porzioni per grammo, un food cost sotto controllo.",
  },
  {
    title: "Filiera diretta",
    text: "Selezione all'origine, nella regione di Mashhad, con un rapporto diretto tra produzione e distribuzione.",
  },
  {
    title: "Qualità Super Negin",
    text: "Pistilli lunghi, colore intenso, aroma pulito. Solo la parte rossa, selezionata a mano.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="flex min-h-[88vh] flex-col items-center justify-center px-6 text-center">
        <img src="/zafrane-logo.png" alt="ZAFRANE" className="h-auto w-[500px] max-w-[82vw]" />
        <p className="eyebrow mt-10">Milano · Zafferano Super Negin</p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link href="/shop" className="btn btn-solid">Scopri lo zafferano</Link>
          <Link href="/professionisti" className="btn">Per la ristorazione</Link>
        </div>
      </section>

      {/* FRASE */}
      <section className="px-6 py-24">
        <p className="mx-auto max-w-3xl text-center font-serif text-[32px] leading-[1.45] md:text-[42px]">
          Zafferano persiano Super Negin, selezionato in filiera diretta, con alta resa, colore intenso e qualità costante.
        </p>
      </section>

      {/* PILASTRI */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow mb-16 text-center">Perché Zafrane</p>
          <div className="grid gap-14 md:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="text-center">
                <h3 className="mb-4 font-serif text-[24px]">{p.title}</h3>
                <p className="text-[14px] leading-7 text-[var(--ink-soft)]">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORIGINE */}
      <section className="border-y border-[var(--line)] bg-[#f1ede6] px-6 py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-14 md:grid-cols-2">
          <div className="mx-auto w-48 md:w-64">
            <Strands className="h-auto w-full" />
          </div>
          <div>
            <p className="eyebrow">Origine</p>
            <h2 className="mt-5 font-serif text-[34px] leading-tight">Dalla regione di Mashhad a Milano.</h2>
            <p className="mt-6 text-[14px] leading-7 text-[var(--ink-soft)]">
              Lo zafferano Super Negin viene raccolto a mano e selezionato pistillo per pistillo. A Milano diventa un prodotto
              pensato per chi cucina con attenzione: la capitale del risotto allo zafferano incontra la terra d&apos;origine della spezia.
            </p>
            <Link href="/storia" className="btn mt-8">La nostra storia</Link>
          </div>
        </div>
      </section>

      {/* DOPPIA CTA */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="border border-[var(--line)] p-10">
            <p className="eyebrow">Per la tua cucina</p>
            <h3 className="mt-4 font-serif text-[28px]">Pistilli e polvere biologica</h3>
            <p className="mt-4 text-[14px] leading-7 text-[var(--ink-soft)]">
              Formati da 0,5 a 2 g. Invia una richiesta d&apos;ordine e ti rispondiamo con disponibilità e condizioni.
            </p>
            <Link href="/shop" className="btn mt-8">Vai allo shop</Link>
          </div>
          <div className="border border-[var(--line)] p-10">
            <p className="eyebrow">Per ristoranti e hotel</p>
            <h3 className="mt-4 font-serif text-[28px]">Fornitura continuativa</h3>
            <p className="mt-4 text-[14px] leading-7 text-[var(--ink-soft)]">
              Forniture programmate, consegne regolari e campione di prova per chef. Quotazione dedicata in base al volume.
            </p>
            <Link href="/professionisti" className="btn mt-8">Richiedi un campione</Link>
          </div>
        </div>
      </section>
    </>
  );
}
