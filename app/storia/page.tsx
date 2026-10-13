import type { Metadata } from "next";
import Link from "next/link";
import { Strands } from "@/components/Art";

export const metadata: Metadata = {
  title: "La nostra storia",
  description: "ZAFRANE nasce a Milano da una famiglia di produttori di zafferano di Mashhad: un ponte tra Iran e Italia.",
  alternates: { canonical: "/storia" },
};

export default function Storia() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Storia</p>
        <h1 className="mt-5 font-serif text-[44px] leading-tight md:text-[56px]">Due culture, una spezia.</h1>

        <div className="mx-auto my-16 w-28">
          <Strands className="h-auto w-full" />
        </div>

        <div className="space-y-7 text-[16px] leading-8 text-[var(--ink-soft)]">
          <p>
            ZAFRANE è fondato da Saeed Khoshbaf Torghabe, nato a Mashhad, nel cuore storico della produzione dello zafferano
            persiano, e in Italia da otto anni. La sua famiglia coltiva zafferano: il rapporto con la filiera è diretto, non
            intermediato.
          </p>
          <p>
            In Italia Saeed ha affiancato a questa conoscenza una formazione artistica e di design. Da qui nasce un progetto che
            tiene insieme l&apos;origine agricola e un linguaggio contemporaneo: un prodotto serio, presentato con cura.
          </p>
          <p>
            Milano è la città del risotto allo zafferano; Mashhad è il luogo da cui lo zafferano arriva. ZAFRANE mette in
            relazione i due punti, con un prodotto selezionato e un&apos;idea semplice: meno quantità, più intensità.
          </p>
        </div>

        <div className="mt-20 grid gap-10 border-t border-[var(--line)] pt-14 md:grid-cols-3">
          {[
            ["Autenticità", "Un solo prodotto, scelto bene, con origine chiara."],
            ["Misura", "Alta resa: usare poco, ottenere molto."],
            ["Design", "Un oggetto da tenere in cucina, non un semplice contenitore."],
          ].map(([t, d]) => (
            <div key={t}>
              <h2 className="font-serif text-[24px]">{t}</h2>
              <p className="mt-3 text-[14px] leading-7 text-[var(--ink-soft)]">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <Link href="/shop" className="btn btn-solid">Scopri lo zafferano</Link>
        </div>
      </div>
    </div>
  );
}
