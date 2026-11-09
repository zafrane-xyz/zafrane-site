import type { Metadata } from "next";
import Link from "next/link";
import { PistilPlate } from "@/components/Pistils";
import { SITE, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop online",
  description: "Lo shop online ZAFRANE è in manutenzione. Nel frattempo gli ordini si gestiscono su richiesta, per email o su Instagram.",
  alternates: { canonical: "/shop" },
};

export default function Shop() {
  return (
    <>
      <section className="glow px-6 pb-24 pt-28">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Shop online</p>
          <h1 className="mt-8 max-w-4xl font-serif text-[44px] font-light leading-[1.1] md:text-[72px]">
            Lo shop è <em className="text-[var(--gold)]">in manutenzione.</em>
          </h1>

          <div className="mt-10 inline-flex items-center gap-3 border border-[var(--gold)] px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            Apertura prossima
          </div>

          <p className="mt-10 max-w-xl text-[15px] leading-8 text-[var(--ink-soft)]">
            Stiamo completando il negozio online. Nel frattempo si ordina direttamente: scrivici cosa ti serve e ti rispondiamo con
            disponibilità, prezzo del lotto corrente, spedizione e modalità di pagamento. I prezzi dello zafferano variano con il
            raccolto, per questo non sono pubblicati.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href={mailto("Ordine ZAFRANE")} className="btn btn-solid">Scrivici per ordinare</a>
            <a href={mailto("Avvisami all’apertura dello shop ZAFRANE")} className="btn">Avvisami all’apertura</a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn">Instagram</a>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--surface)] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Cosa troverai</p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              { g: "super-negin" as const, name: "Super Negin in pistilli", text: "In piccoli formati, per la cucina di casa e per regalo." },
              { g: "sargol" as const, name: "Polvere 100% Sargol", text: "Pratica e intensa, pronta all’uso." },
            ].map((p) => (
              <article key={p.name} className="border border-[var(--line)] bg-[var(--background)]">
                <div className="p-6">
                  <PistilPlate grade={p.g} label={p.name} className="h-auto w-full" />
                </div>
                <div className="border-t border-[var(--line)] p-8">
                  <h2 className="font-serif text-[30px] font-light">{p.name}</h2>
                  <p className="mt-2 text-[14px] leading-7 text-[var(--ink-soft)]">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-14 text-[14px] leading-7 text-[var(--ink-soft)]">
            Sei un ristorante, un hotel o un catering?{" "}
            <Link href="/ristorazione" className="text-[var(--gold)] underline-offset-4 hover:underline">C’è una pagina dedicata</Link>, con
            campione di prova e listino riservato.
          </p>
        </div>
      </section>
    </>
  );
}
