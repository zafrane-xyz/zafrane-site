import Link from "next/link";
import { GradeList } from "@/components/Grades";
import { mailto } from "@/lib/site";

const FACTS = [
  ["3", "pistilli per fiore", "Ogni fiore di Crocus sativus ne dà solo tre, separati a mano."],
  ["150.000", "fiori per un chilo", "Per questo lo zafferano è la spezia più preziosa al mondo."],
  ["1", "raccolto l’anno", "I fiori sbocciano in autunno, per poche settimane."],
];

const PILLARS = [
  ["Alta resa", "Pistilli interi e intensi: indicativamente 0,05–0,10 g a porzione di risotto. Più porzioni per grammo, food cost prevedibile."],
  ["Filiera familiare", "Acquistiamo direttamente dalla famiglia produttrice in Khorasan. Sappiamo chi raccoglie, quando e come."],
  ["Solo parte rossa", "Super Negin in pistilli, essiccato al sole. In polvere, solo Sargol: le punte rosse, nient’altro."],
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="warm flex min-h-[calc(100vh-76px)] flex-col items-center justify-center px-6 py-24 text-center">
        <img src="/logo-dark.png" alt="ZAFRANE" width={880} height={386} className="h-auto w-[440px] max-w-[78vw]" />
        <p className="eyebrow mt-12">Khorasan · Milano</p>
        <h1 className="mt-8 max-w-3xl font-serif text-[38px] font-light leading-[1.15] md:text-[58px]">
          L’oro rosso della Khorasan, <em className="text-[var(--accent)]">scelto per le cucine di Milano.</em>
        </h1>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link href="/zafferano" className="btn btn-solid">Scopri lo zafferano</Link>
          <Link href="/ristorazione" className="btn">Per la ristorazione</Link>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-t border-[var(--line)] px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <img src="/mark.png" alt="" width={59} height={96} className="mx-auto h-10 w-auto" />
          <p className="mt-10 font-serif text-[32px] font-light leading-[1.35] md:text-[46px]">
            Pistilli interi, colore profondo, profumo pulito.{" "}
            <em className="text-[var(--accent)]">Meno quantità, più intensità.</em>
          </p>
          <p className="mx-auto mt-10 max-w-xl text-[15px] leading-8 text-[var(--ink-soft)]">
            Zafferano Super Negin acquistato direttamente dalla famiglia produttrice, essiccato al sole e consegnato a Milano.
          </p>
        </div>
      </section>

      {/* NUMERI */}
      <section className="bg-[var(--surface)] px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-3">
          {FACTS.map(([n, k, d]) => (
            <div key={k} className="text-center md:text-left">
              <p className="font-serif text-[68px] font-light leading-none text-[var(--accent)]">{n}</p>
              <p className="eyebrow mt-5">{k}</p>
              <p className="mx-auto mt-4 max-w-xs text-[14px] leading-7 text-[var(--ink-soft)] md:mx-0">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PILASTRI */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Perché ZAFRANE</p>
          <div className="mt-14 grid gap-14 md:grid-cols-3">
            {PILLARS.map(([t, d], i) => (
              <div key={t}>
                <div className="rule" />
                <p className="mt-6 font-serif text-[18px] text-[var(--gold)]">0{i + 1}</p>
                <h2 className="mt-2 font-serif text-[32px] font-light">{t}</h2>
                <p className="mt-4 text-[14px] leading-7 text-[var(--ink-soft)]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIE */}
      <section className="border-t border-[var(--line)] px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Le categorie</p>
              <h2 className="mt-6 max-w-xl font-serif text-[38px] font-light leading-tight md:text-[52px]">
                Non tutto lo zafferano è uguale.
              </h2>
            </div>
            <Link href="/zafferano#categorie" className="btn shrink-0">Le categorie spiegate</Link>
          </div>
          <div className="mt-14">
            <GradeList compact />
          </div>
        </div>
      </section>

      {/* RISTORAZIONE */}
      <section className="bg-[#5a1216] px-6 py-28 text-[var(--cream)]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow text-[#e3c07f]!">Per ristoranti, hotel e catering</p>
            <h2 className="mt-6 font-serif text-[36px] font-light leading-tight md:text-[50px]">
              Campione di prova, forniture programmate, listino riservato.
            </h2>
          </div>
          <Link href="/ristorazione#richiesta" className="btn btn-light shrink-0">Richiedi un campione</Link>
        </div>
      </section>

      {/* SHOP */}
      <section className="px-6 py-24">
        <div className="frame mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 p-10 md:flex-row md:items-center md:p-14">
          <div>
            <p className="eyebrow">Shop online</p>
            <p className="mt-4 font-serif text-[32px] font-light">In allestimento. Nel frattempo, ordini su richiesta.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/shop" className="btn">Info sullo shop</Link>
            <a href={mailto("Ordine ZAFRANE")} className="btn btn-solid">Scrivici per ordinare</a>
          </div>
        </div>
      </section>
    </>
  );
}
