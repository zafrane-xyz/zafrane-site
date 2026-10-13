import type { Metadata } from "next";
import Link from "next/link";
import { Jar } from "@/components/Art";

export const metadata: Metadata = {
  title: "Lo zafferano Super Negin",
  description:
    "Che cos'è lo zafferano Super Negin, come si riconosce, quanto ne serve in cucina e come conservarlo.",
  alternates: { canonical: "/zafferano" },
};

const FACTS = [
  ["Origine", "Regione di Mashhad (Khorasan), Iran"],
  ["Qualità", "Super Negin: pistilli lunghi, solo parte rossa"],
  ["Raccolta", "A mano, con essiccazione naturale"],
  ["Dose per risotto", "Circa 0,05–0,10 g a porzione"],
  ["Formati", "Pistilli 0,5 · 1 · 2 g; polvere biologica"],
];

export default function Zafferano() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">Il prodotto</p>
        <h1 className="mt-5 max-w-2xl font-serif text-[44px] leading-tight md:text-[56px]">Super Negin: la parte più nobile dello zafferano.</h1>

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          <div className="space-y-6 text-[15px] leading-8 text-[var(--ink-soft)]">
            <p>
              Il Super Negin è la categoria più selezionata dello zafferano persiano: pistilli lunghi e interi, di un rosso intenso
              e senza parti gialle. È la parte che dà colore, aroma e potere tintorio.
            </p>
            <p>
              In cucina questo si traduce in una resa alta. Servono quantità minime per ottenere un risultato costante, e per chi
              lavora in professione significa un food cost prevedibile.
            </p>
            <p>
              Offriamo anche zafferano in polvere, esclusivamente biologico e naturale, per chi preferisce un formato più pratico.
            </p>
          </div>
          <div className="flex justify-center">
            <Jar label="Pistilli" className="h-auto w-56" />
          </div>
        </div>

        <dl className="mt-24 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {FACTS.map(([k, v]) => (
            <div key={k} className="grid gap-2 py-5 md:grid-cols-3">
              <dt className="eyebrow self-center">{k}</dt>
              <dd className="text-[15px] md:col-span-2">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-24 grid gap-14 md:grid-cols-3">
          <div>
            <h2 className="font-serif text-[24px]">Come si usa</h2>
            <p className="mt-4 text-[14px] leading-7 text-[var(--ink-soft)]">
              Metti i pistilli in poca acqua tiepida o brodo per 15–20 minuti, poi aggiungi l&apos;infuso a fine cottura per
              preservare l&apos;aroma.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-[24px]">Come si conserva</h2>
            <p className="mt-4 text-[14px] leading-7 text-[var(--ink-soft)]">
              Lontano da luce, calore e umidità, nel contenitore originale ben chiuso. Il vetro interno protegge l&apos;aroma nel tempo.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-[24px]">Come riconoscerlo</h2>
            <p className="mt-4 text-[14px] leading-7 text-[var(--ink-soft)]">
              Pistilli interi, rossi, senza filamenti gialli o bianchi. Profumo pulito e intenso, non polveroso.
            </p>
          </div>
        </div>

        <div className="mt-24 flex flex-wrap gap-4">
          <Link href="/shop" className="btn btn-solid">Richiedi lo zafferano</Link>
          <Link href="/professionisti" className="btn">Per la ristorazione</Link>
        </div>
      </div>
    </div>
  );
}
