import type { Metadata } from "next";
import Link from "next/link";
import { Tin } from "@/components/Art";
import Photo from "@/components/Photo";
import { PHOTOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Caviale del Caspio",
  description:
    "Caviale Beluga e Baerii da allevamento nel Ghilan, sul Mar Caspio, in lattine con etichetta CITES. Campionature per ristorazione, catering e hotel.",
  alternates: { canonical: "/caviale" },
};

const SPECIES = [
  {
    name: "Beluga",
    latin: "Huso huso",
    text: "La specie più pregiata. Grani grandi e delicati, gusto morbido e burroso.",
  },
  {
    name: "Baerii",
    latin: "Acipenser baerii",
    text: "Grani medi e gusto più deciso, con note di nocciola. Più accessibile, ottimo per la ristorazione.",
  },
];

const SIZES = ["10 g", "50 g", "125 g", "225 g", "500 g"];

export default function Caviale() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">Nuova linea · in avvio</p>
        <h1 className="mt-5 max-w-2xl font-serif text-[44px] leading-tight md:text-[56px]">Caviale del Caspio da allevamento.</h1>

        <div className="mt-16 grid items-center gap-14 md:grid-cols-2">
          <div className="space-y-6 text-[15px] leading-8 text-[var(--ink-soft)]">
            <p>
              Accanto allo zafferano, ZAFRANE propone caviale d’allevamento del Mar Caspio, prodotto nel Ghilan da un fornitore
              che conosciamo da tempo.
            </p>
            <p>
              Ogni lattina porta il marchio ZAFRANE e l’etichetta CITES, obbligatoria per il commercio internazionale di caviale.
              La linea è in fase di avvio: per ora lavoriamo con campionature per ristoranti, catering e hotel.
            </p>
          </div>
          <div className="flex h-72 items-center justify-center bg-[var(--panel)] p-8">
            <Photo src={PHOTOS.caviale} alt="Caviale ZAFRANE" fallback={<Tin label="Caviale" className="h-full w-auto" />} />
          </div>
        </div>

        <div className="mt-24 grid gap-10 md:grid-cols-2">
          {SPECIES.map((s) => (
            <div key={s.name} className="border border-[var(--line)] p-10">
              <p className="eyebrow">{s.latin}</p>
              <h2 className="mt-4 font-serif text-[32px]">{s.name}</h2>
              <p className="mt-4 text-[14px] leading-7 text-[var(--ink-soft)]">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <p className="eyebrow">Confezioni</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {SIZES.map((s) => (
              <li key={s} className="border border-[var(--line)] px-5 py-3 text-[13px]">{s}</li>
            ))}
          </ul>
          <p className="mt-6 max-w-xl text-[14px] leading-7 text-[var(--ink-soft)]">
            Prodotto fresco, da conservare a temperatura controllata. Scheda tecnica, disponibilità e condizioni su richiesta.
          </p>
        </div>

        <div className="mt-24">
          <Link href="/ristorazione#richiesta" className="btn btn-solid">Richiedi una campionatura</Link>
        </div>
      </div>
    </div>
  );
}
