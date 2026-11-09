import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import { LEGAL, SITE, addressLine, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Scrivi a ZAFRANE per ordini, campioni e forniture per la ristorazione. Sede a Milano.",
  alternates: { canonical: "/contatti" },
};

export default function Contatti() {
  const rows: [string, React.ReactNode][] = [
    ["Email", <a key="e" href={mailto("Contatto dal sito")} className="link text-[15px]">{SITE.email}</a>],
    [
      "Instagram",
      <a key="i" href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="link text-[15px]">
        {SITE.instagramHandle}
      </a>,
    ],
    ["Sede", addressLine()],
  ];
  if (LEGAL.partitaIva) rows.push(["Partita IVA", LEGAL.partitaIva]);
  if (LEGAL.rea) rows.push(["REA", LEGAL.rea]);
  if (LEGAL.pec) rows.push(["PEC", LEGAL.pec]);

  return (
    <>
      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-6 pb-8 pt-24 md:grid-cols-12 md:gap-8 md:pt-32">
          <div className="md:col-span-3">
            <p className="label">Contatti</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="display text-[44px] leading-[1.08] md:text-[72px]">Scrivici.</h1>
            <p className="body mt-10 max-w-lg">Per ordini, campioni, forniture e informazioni. Rispondiamo personalmente a ogni messaggio.</p>
          </div>
        </div>
      </section>

      <Section label="Recapiti">
        <dl className="border-t border-[var(--line)] text-[15px]">
          {rows.map(([k, v]) => (
            <div key={k} className="grid gap-1 border-b border-[var(--line)] py-5 md:grid-cols-9 md:gap-8">
              <dt className="text-[var(--ink-soft)] md:col-span-3">{k}</dt>
              <dd className="md:col-span-6">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6">
          <a href={mailto("Contatto dal sito")} className="btn">Scrivi un’email</a>
          <Link href="/ristorazione#richiesta" className="link">Campione per la ristorazione</Link>
        </div>
      </Section>
    </>
  );
}
