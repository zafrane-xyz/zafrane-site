"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function SampleForm() {
  const [f, setF] = useState({ locale: "", referente: "", email: "", telefono: "", tipo: "Ristorante", volume: "", note: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      "Richiesta campione / quotazione per la ristorazione (zafrane.it)",
      "",
      `Locale / azienda: ${f.locale}`,
      `Tipologia: ${f.tipo}`,
      `Referente: ${f.referente}`,
      `Email: ${f.email}`,
      `Telefono: ${f.telefono}`,
      `Consumo stimato mensile: ${f.volume}`,
      "",
      `Note: ${f.note}`,
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Richiesta campione ZAFRANE - ristorazione")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={send} className="grid gap-7">
      <input required className="field" placeholder="Nome del locale o dell'azienda" value={f.locale} onChange={set("locale")} />
      <select className="field" value={f.tipo} onChange={set("tipo")}>
        <option>Ristorante</option>
        <option>Hotel</option>
        <option>Gastronomia / negozio</option>
        <option>Laboratorio / produzione</option>
        <option>Altro</option>
      </select>
      <input required className="field" placeholder="Referente (es. chef, responsabile acquisti)" value={f.referente} onChange={set("referente")} />
      <input required type="email" className="field" placeholder="Email" value={f.email} onChange={set("email")} />
      <input className="field" placeholder="Telefono (facoltativo)" value={f.telefono} onChange={set("telefono")} />
      <input className="field" placeholder="Consumo stimato al mese, in grammi (facoltativo)" value={f.volume} onChange={set("volume")} />
      <textarea className="field" rows={3} placeholder="Note (facoltative)" value={f.note} onChange={set("note")} />
      <div>
        <button type="submit" className="btn btn-solid">Richiedi campione e quotazione</button>
      </div>
      <p className="text-[12px] leading-6 text-[var(--muted)]">Si aprirà il tuo programma di posta con la richiesta già compilata.</p>
    </form>
  );
}
