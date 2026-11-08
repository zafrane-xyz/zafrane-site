import Link from "next/link";
import { Crocus, Jar, Tin } from "@/components/Art";
import { mailto } from "@/lib/site";

const PILLARS = [
  {
    title: "Alta resa",
    text: "Pistilli interi e intensi: indicativamente 0,05–0,10 g a porzione di risotto. Più porzioni per grammo, food cost prevedibile.",
  },
  {
    title: "Filiera familiare",
    text: "Acquistiamo direttamente dalla famiglia produttrice, in Khorasan. Sappiamo chi raccoglie, quando e come.",
  },
  {
    title: "Solo parte rossa",
    text: "Super Negin in pistilli, essiccato naturalmente al sole. In polvere, solo Sargol: 100% parte rossa.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="flex min-h-[86vh] flex-col items-center justify-center px-6 text-center">
        <img src="/zafrane-logo-web.png" alt="ZAFRANE" width={872} height={378} className="h-auto w-[440px] max-w-[82vw]" />
        <p className="eyebrow mt-8">Milano · Zafferano Super Negin</p>
        <h1 className="mt-10 max-w-2xl font-serif text-[30px] leading-[1.3] md:text-[40px]">
          Zafferano persiano per la cucina di alto livello.
        </h1>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link href="/zafferano" className="btn btn-solid">Scopri lo zafferano</Link>
          <Link href="/ristorazione" className="btn">Per la ristorazione</Link>
        </div>
      </section>

      {/* FRASE */}
      <section className="px-6 py-24">
        <p className="mx-auto max-w-3xl text-center font-serif text-[30px] leading-[1.45] md:text-[40px]">
          Pistilli interi, colore intenso, alta resa. Zafferano Super Negin dalla Khorasan, acquistato direttamente dalla famiglia produttrice e consegnato a Milano.
        </p>
      </section>

      {/* PILASTRI */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow mb-16 text-center">Perché ZAFRANE</p>
          <div className="grid gap-14 md:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="text-center">
                <h2 className="mb-4 font-serif text-[26px]">{p.title}</h2>
                <p className="text-[14px] leading-7 text-[var(--ink-soft)]">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINEE */}
      <section className="border-y border-[var(--line)] bg-[var(--panel)] px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <Link href="/zafferano" className="group flex flex-col items-center border border-[var(--line)] bg-[var(--background)] p-10 text-center transition hover:border-[var(--foreground)]">
            <Jar label="Super Negin" className="h-auto w-32" />
            <p className="eyebrow mt-8">Linea principale</p>
            <h2 className="mt-3 font-serif text-[30px]">Zafferano</h2>
            <p className="mt-3 max-w-xs text-[14px] leading-7 text-[var(--ink-soft)]">Super Negin in pistilli e polvere 100% Sargol.</p>
            <span className="mt-6 text-[11px] uppercase tracking-[0.24em] group-hover:text-[var(--accent)]">Scopri →</span>
          </Link>
          <Link href="/caviale" className="group flex flex-col items-center border border-[var(--line)] bg-[var(--background)] p-10 text-center transition hover:border-[var(--foreground)]">
            <Tin label="Caviale" className="h-auto w-40" />
            <p className="eyebrow mt-8">Nuova linea · in avvio</p>
            <h2 className="mt-3 font-serif text-[30px]">Caviale del Caspio</h2>
            <p className="mt-3 max-w-xs text-[14px] leading-7 text-[var(--ink-soft)]">Beluga e Baerii da allevamento. Campionature per ristorazione, catering e hotel.</p>
            <span className="mt-6 text-[11px] uppercase tracking-[0.24em] group-hover:text-[var(--accent)]">Scopri →</span>
          </Link>
        </div>
      </section>

      {/* ORIGINE */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-14 md:grid-cols-2">
          <div className="mx-auto w-44 md:w-60">
            <Crocus className="h-auto w-full" />
          </div>
          <div>
            <p className="eyebrow">Origine</p>
            <h2 className="mt-5 font-serif text-[36px] leading-tight">Dalla Khorasan a Milano.</h2>
            <p className="mt-6 text-[14px] leading-7 text-[var(--ink-soft)]">
              Ogni fiore di Crocus sativus dà solo tre pistilli, raccolti a mano nel breve periodo della fioritura autunnale.
              Da Mashhad a Milano, la città del risotto allo zafferano: un solo filo tra chi produce e chi cucina.
            </p>
            <Link href="/origine" className="btn mt-8">La nostra origine</Link>
          </div>
        </div>
      </section>

      {/* RISTORAZIONE */}
      <section className="bg-[var(--foreground)] px-6 py-24 text-[#f8f6f2]">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="eyebrow text-[#b8b1a6]!">Per ristoranti, hotel e catering</p>
            <h2 className="mt-4 font-serif text-[34px] leading-tight">Campione di prova, forniture programmate, listino riservato.</h2>
          </div>
          <Link href="/ristorazione#richiesta" className="btn btn-light shrink-0">Richiedi un campione</Link>
        </div>
      </section>

      {/* SHOP */}
      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Shop online</p>
            <p className="mt-3 font-serif text-[26px]">In allestimento. Nel frattempo, ordini su richiesta.</p>
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
