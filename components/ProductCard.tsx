"use client";

import { useState } from "react";
import { Jar } from "./Art";
import { useCart } from "./CartProvider";
import { SHOW_PRICES, type Product } from "@/lib/site";

export default function ProductCard({ p }: { p: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    add(p.slug);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <article className="flex flex-col border border-[var(--line)] bg-[#fbfaf7]">
      <div className="flex items-center justify-center bg-[#f1ede6] px-6 py-10">
        <Jar label={p.kind === "pistilli" ? "Pistilli" : "Polvere bio"} className="h-auto w-36" />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="eyebrow">{p.kind === "pistilli" ? "Pistilli" : "Polvere biologica"}</p>
        <h3 className="mt-3 font-serif text-[24px] leading-snug">{p.name}</h3>
        <p className="mt-1 text-[13px] text-[var(--ink-soft)]">{p.format}</p>
        <p className="mt-4 flex-1 text-[13px] leading-6 text-[var(--ink-soft)]">{p.note}</p>
        {SHOW_PRICES && p.price !== undefined ? (
          <p className="mt-5 font-serif text-[22px]">€ {p.price.toFixed(2).replace(".", ",")}<span className="ml-2 text-[11px] text-[var(--muted)]">IVA incl.</span></p>
        ) : (
          <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">Prezzo su richiesta</p>
        )}
        <button onClick={onAdd} className="btn mt-5 w-full text-center">
          {added ? "Aggiunto ✓" : "Aggiungi alla richiesta"}
        </button>
      </div>
    </article>
  );
}
