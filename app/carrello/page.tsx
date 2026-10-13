"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { PRODUCTS, SITE } from "@/lib/site";

export default function Carrello() {
  const { items, setQty, clear, count } = useCart();
  const [form, setForm] = useState({ nome: "", email: "", telefono: "", citta: "", note: "" });

  const lines = PRODUCTS.filter((p) => items[p.slug]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const righe = lines.map((p) => `- ${items[p.slug]} x ${p.name} ${p.format}`).join("\n");
    const body = [
      "Richiesta d'ordine dal sito zafrane.it",
      "",
      righe,
      "",
      `Nome: ${form.nome}`,
      `Email: ${form.email}`,
      `Telefono: ${form.telefono}`,
      `Città / indirizzo di consegna: ${form.citta}`,
      "",
      `Note: ${form.note}`,
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Richiesta d'ordine ZAFRANE")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Richiesta d&apos;ordine</p>
        <h1 className="mt-5 font-serif text-[44px] leading-tight">La tua richiesta.</h1>

        {count === 0 ? (
          <div className="mt-12">
            <p className="text-[15px] text-[var(--ink-soft)]">La richiesta è vuota.</p>
            <Link href="/shop" className="btn mt-8">Vai allo shop</Link>
          </div>
        ) : (
          <>
            <ul className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {lines.map((p) => (
                <li key={p.slug} className="flex items-center justify-between gap-4 py-5">
                  <div>
                    <p className="font-serif text-[20px]">{p.name}</p>
                    <p className="text-[13px] text-[var(--ink-soft)]">{p.format}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button aria-label="Diminuisci" className="h-8 w-8 border border-[var(--line)]" onClick={() => setQty(p.slug, items[p.slug] - 1)}>−</button>
                    <span className="w-6 text-center text-[14px]">{items[p.slug]}</span>
                    <button aria-label="Aumenta" className="h-8 w-8 border border-[var(--line)]" onClick={() => setQty(p.slug, items[p.slug] + 1)}>+</button>
                  </div>
                </li>
              ))}
            </ul>

            <form onSubmit={send} className="mt-14 grid gap-7">
              <input required className="field" placeholder="Nome e cognome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
              <input required type="email" className="field" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <input className="field" placeholder="Telefono (facoltativo)" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} />
              <input required className="field" placeholder="Città e indirizzo di consegna" value={form.citta} onChange={(e) => setForm({ ...form, citta: e.target.value })} />
              <textarea className="field" rows={3} placeholder="Note (facoltative)" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} />
              <p className="text-[12px] leading-6 text-[var(--muted)]">
                Si aprirà il tuo programma di posta con la richiesta già compilata: premi invio per spedirla. Nessun pagamento viene
                richiesto adesso. Trattiamo i dati come descritto nella <Link href="/privacy" className="underline">privacy</Link>.
              </p>
              <div className="flex flex-wrap gap-4">
                <button type="submit" className="btn btn-solid">Invia la richiesta</button>
                <button type="button" className="btn" onClick={clear}>Svuota</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
