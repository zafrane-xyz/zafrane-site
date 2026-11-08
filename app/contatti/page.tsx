import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL, SITE, addressLine, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Scrivi a ZAFRANE per ordini, campioni e forniture per la ristorazione. Sede a Milano.",
  alternates: { canonical: "/contatti" },
};

export default function Contatti() {
  const rows: [string, React.ReactNode][] = [
    ["Email", <a key="e" href={mailto("Contatto dal sito")} className="hover:text-[var(--accent)]">{SITE.email}</a>],
    [
      "Instagram",
      <a key="i" href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">
        {SITE.instagramHandle}
      </a>,
    ],
    ["Sede", addressLine()],
    ["Titolare", `${LEGAL.forma} di ${LEGAL.titolare}`],
  ];
  if (LEGAL.partitaIva) rows.push(["Partita IVA", LEGAL.partitaIva]);
  if (LEGAL.rea) rows.push(["REA", LEGAL.rea]);
  if (LEGAL.pec) rows.push(["PEC", LEGAL.pec]);

  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Contatti</p>
        <h1 className="mt-5 font-serif text-[44px] leading-tight md:text-[56px]">Scrivici.</h1>
        <p className="mt-6 max-w-xl text-[15px] leading-8 text-[var(--ink-soft)]">
          Per ordini, campioni, forniture e informazioni. Rispondiamo a mano a ogni messaggio.
        </p>

        <dl className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {rows.map(([k, v]) => (
            <div key={k} className="grid gap-2 py-6 md:grid-cols-3">
              <dt className="eyebrow self-center">{k}</dt>
              <dd className="text-[16px] md:col-span-2">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 flex flex-wrap gap-4">
          <a href={mailto("Contatto dal sito")} className="btn btn-solid">Scrivi un’email</a>
          <Link href="/ristorazione#richiesta" className="btn">Campione per la ristorazione</Link>
          <Link href="/shop" className="btn">Shop online</Link>
        </div>
      </div>
    </div>
  );
}
