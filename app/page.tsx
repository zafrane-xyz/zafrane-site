import Link from "next/link";
import { GRADES, PistilPlate } from "@/components/Pistils";
import { mailto } from "@/lib/site";

const FACTS = [
  ["3", "pistilli per fiore", "Ogni fiore di Crocus sativus ne dà solo tre, separati a mano."],
  ["150.000", "fiori per un chilo", "È la ragione per cui lo zafferano è la spezia più preziosa al mondo."],
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
      <section className="glow relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center px-6 py-24 text-center">
        <img src="/logo-light.png" alt="ZAFRANE" width={880} height={386} className="h-auto w-[460px] max-w-[80vw]" />
        <p className="eyebrow mt-12">Khorasan · Milano</p>
        <h1 className="mt-8 max-w-3xl font-serif text-[38px] font-light leading-[1.15] md:text-[60px]">
          L’oro rosso della Khorasan, <em className="text-[var(--gold)]">scelto per le cucine di Milano.</em>
        </h1>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link href="/zafferano" className="btn btn-solid">Scopri lo zafferano</Link>
          <Link href="/ristorazione" className="btn">Per la ristorazione</Link>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-t border-[var(--line)] px-6 py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div>
            <p className="eyebrow">Super Negin</p>
            <p className="mt-8 font-serif text-[32px] font-light leading-[1.3] md:text-[44px]">
              Pistilli interi, colore profondo, profumo pulito. <em className="text-[var(--gold)]">Meno quantità, più intensità.</em>
            </p>
            <p className="mt-8 max-w-md text-[15px] leading-8 text-[var(--ink-soft)]">
              Zafferano Super Negin acquistato direttamente dalla famiglia produttrice, essiccato al sole e consegnato a Milano.
            </p>
          </div>
          <div className="border border-[var(--line)] bg-[var(--surface)] p-6">
            <PistilPlate grade="super-negin" label="Pistilli di zafferano Super Negin" className="h-auto w-full" />
          </div>
        </div>
      </section>

      {/* NUMERI */}
      <section className="bg-[var(--surface)] px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-3">
          {FACTS.map(([n, k, d]) => (
            <div key={k}>
              <p className="font-serif text-[64px] font-light leading-none text-[var(--gold)]">{n}</p>
              <p className="eyebrow mt-4 text-[var(--foreground)]!">{k}</p>
              <p className="mt-4 max-w-xs text-[14px] leading-7 text-[var(--ink-soft)]">{d}</p>
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
                <div className="hairline" />
                <p className="mt-6 font-serif text-[18px] text-[var(--gold)]">0{i + 1}</p>
                <h2 className="mt-2 font-serif text-[30px] font-light">{t}</h2>
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
              <h2 className="mt-6 max-w-xl font-serif text-[36px] font-light leading-tight md:text-[48px]">
                Non tutto lo zafferano è uguale.
              </h2>
            </div>
            <Link href="/zafferano#categorie" className="btn shrink-0">Le categorie spiegate</Link>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
            {GRADES.map((g) => (
              <Link key={g.grade} href="/zafferano#categorie" className="group border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:border-[var(--gold)]">
                <PistilPlate grade={g.grade} label={`Zafferano ${g.name}`} className="h-auto w-full" />
                <p className="mt-3 font-serif text-[20px]">{g.name}</p>
                <p className="mt-1 h-4 text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]">{g.ours ?? ""}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RISTORAZIONE */}
      <section className="bg-gradient-to-br from-[#6a0b10] to-[#2a0709] px-6 py-28">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow text-[#e9c27a]!">Per ristoranti, hotel e catering</p>
            <h2 className="mt-6 font-serif text-[36px] font-light leading-tight md:text-[48px]">
              Campione di prova, forniture programmate, listino riservato.
            </h2>
          </div>
          <Link href="/ristorazione#richiesta" className="btn shrink-0 border-[#f1e9dc]!">Richiedi un campione</Link>
        </div>
      </section>

      {/* SHOP */}
      <section className="px-6 py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Shop online</p>
            <p className="mt-4 font-serif text-[30px] font-light">In allestimento. Nel frattempo, ordini su richiesta.</p>
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
