import type { Metadata } from "next";
import { Jar, Tin } from "@/components/Art";
import { SITE, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop online",
  description: "Lo shop online ZAFRANE è in manutenzione. Nel frattempo gli ordini si gestiscono su richiesta, per email o su Instagram.",
  alternates: { canonical: "/shop" },
};

const SOON = [
  { title: "Super Negin in pistilli", text: "Piccoli formati per la cucina di casa.", art: <Jar label="Pistilli" className="h-auto w-24" /> },
  { title: "Polvere 100% Sargol", text: "Pratica, intensa, pronta all’uso.", art: <Jar label="Polvere" className="h-auto w-24" /> },
  { title: "Caviale del Caspio", text: "Su richiesta, per eventi e per i professionisti.", art: <Tin label="Caviale" className="h-auto w-32" /> },
];

export default function Shop() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">Shop online</p>
        <h1 className="mt-5 max-w-2xl font-serif text-[44px] leading-tight md:text-[56px]">Lo shop è in manutenzione.</h1>

        <div className="mt-10 inline-flex items-center gap-3 border border-[var(--accent)] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-[var(--accent)]">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          Apertura prossima
        </div>

        <p className="mt-8 max-w-xl text-[15px] leading-8 text-[var(--ink-soft)]">
          Stiamo completando il negozio online. Nel frattempo si ordina direttamente: scrivici cosa ti serve e ti rispondiamo con
          disponibilità, prezzo del lotto corrente, spedizione e modalità di pagamento. I prezzi dello zafferano variano con il
          raccolto, per questo non sono pubblicati.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href={mailto("Ordine ZAFRANE")} className="btn btn-solid">Scrivici per ordinare</a>
          <a href={mailto("Avvisami all’apertura dello shop ZAFRANE")} className="btn">Avvisami all’apertura</a>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn">Instagram</a>
        </div>

        <div className="mt-24">
          <p className="eyebrow">Cosa troverai</p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {SOON.map((s) => (
              <div key={s.title} className="flex flex-col items-center border border-[var(--line)] bg-[var(--panel)] p-8 text-center">
                <div className="flex h-36 items-end justify-center">{s.art}</div>
                <h2 className="mt-6 font-serif text-[24px]">{s.title}</h2>
                <p className="mt-2 text-[13px] leading-6 text-[var(--ink-soft)]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-16 text-[13px] leading-7 text-[var(--ink-soft)]">
          Sei un ristorante, un hotel o un catering? Per te c’è una pagina dedicata, con campione di prova e listino riservato.
        </p>
      </div>
    </div>
  );
}
