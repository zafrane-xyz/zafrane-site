"use client";

import { useState } from "react";
import { mailto } from "@/lib/site";

export default function SampleForm() {
  const [f, setF] = useState({
    locale: "",
    tipo: "Ristorante",
    prodotto: "Zafferano (pistilli e/o polvere)",
    referente: "",
    email: "",
    telefono: "",
    volume: "",
    note: "",
  });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      "Richiesta campione / quotazione (zafrane.it)",
      "",
      `Locale / azienda: ${f.locale}`,
      `Tipologia: ${f.tipo}`,
      `Prodotto di interesse: ${f.prodotto}`,
      `Referente: ${f.referente}`,
      `Email: ${f.email}`,
      `Telefono: ${f.telefono}`,
      `Consumo stimato mensile: ${f.volume}`,
      "",
      `Note: ${f.note}`,
    ].join("\n");
    window.location.href = mailto("Richiesta campione ZAFRANE", body);
  };

  return (
    <form onSubmit={send} className="grid gap-7">
      <input required className="field" placeholder="Nome del locale o dell’azienda" value={f.locale} onChange={set("locale")} />
      <select className="field" value={f.tipo} onChange={set("tipo")} aria-label="Tipologia">
        <option>Ristorante</option>
        <option>Hotel</option>
        <option>Catering / eventi</option>
        <option>Gastronomia / negozio</option>
        <option>Altro</option>
      </select>
      <select className="field" value={f.prodotto} onChange={set("prodotto")} aria-label="Prodotto di interesse">
        <option>Zafferano (pistilli e/o polvere)</option>
        <option>Caviale del Caspio</option>
        <option>Zafferano e caviale</option>
      </select>
      <input required className="field" placeholder="Referente (es. chef, responsabile acquisti)" value={f.referente} onChange={set("referente")} />
      <input required type="email" className="field" placeholder="Email" value={f.email} onChange={set("email")} />
      <input className="field" placeholder="Telefono (facoltativo)" value={f.telefono} onChange={set("telefono")} />
      <input className="field" placeholder="Consumo stimato al mese (facoltativo)" value={f.volume} onChange={set("volume")} />
      <textarea className="field" rows={3} placeholder="Note (facoltative)" value={f.note} onChange={set("note")} />
      <div>
        <button type="submit" className="btn btn-solid">Richiedi campione e quotazione</button>
      </div>
      <p className="text-[12px] leading-6 text-[var(--muted)]">
        Si aprirà il tuo programma di posta con la richiesta già compilata: premi invio per spedirla.
      </p>
    </form>
  );
}
