import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { LEGAL, SITE, addressLine, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Scrivi a ZAFRANE per ordini, campioni e forniture per la ristorazione.",
  alternates: { canonical: "/contatti" },
};

export default function Contatti() {
  const rows: [string, React.ReactNode][] = [
    ["Email", <a key="e" href={mailto("Contatto dal sito")} className="link font-normal">{SITE.email}</a>],
    [
      "Instagram",
      <a key="i" href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="link font-normal">
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
      <PageHero label="Contatti" title="Scrivici." intro="Per ordini, campioni, forniture e informazioni. Rispondiamo personalmente a ogni messaggio." />
      <Section tone="sand">
        <dl className="mx-auto max-w-2xl border-t border-[var(--line)] text-left text-[16px]">
          {rows.map(([k, v]) => (
            <div key={k} className="grid gap-1 border-b border-[var(--line)] py-5 md:grid-cols-[180px_1fr] md:gap-8">
              <dt className="text-[var(--muted)]">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href={mailto("Contatto dal sito")} className="btn">Scrivi un’email</a>
          <Link href="/ristorazione#richiesta" className="btn btn-outline">Campione per la ristorazione</Link>
        </div>
      </Section>
    </>
  );
}
