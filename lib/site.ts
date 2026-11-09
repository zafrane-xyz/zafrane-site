// Configurazione centrale del sito ZAFRANE.
// Per aggiornare contatti o dati fiscali si modifica SOLO questo file.

export const SITE = {
  name: "ZAFRANE",
  url: "https://www.zafrane.it",
  email: "info@zafrane.it",
  instagram: "https://www.instagram.com/zafrane.xyz",
  instagramHandle: "@zafrane.xyz",
  city: "Milano",
};

// Dati societari: footer, Contatti e Privacy. I campi vuoti non vengono mostrati.
export const LEGAL = {
  titolare: "Saeed Khoshbaf Torghabe", // compare solo nell'informativa privacy (titolare del trattamento)
  partitaIva: "14728190969",
  indirizzo: "Via privata Terenzio Mamiani 4",
  cap: "20127",
  citta: "Milano",
  provincia: "MI",
  rea: "",
  pec: "",
};

// Se true, TUTTE le pagine mostrano solo la schermata "sito in aggiornamento".
export const MAINTENANCE = false;

export const NAV = [
  { href: "/zafferano", label: "Zafferano" },
  { href: "/origine", label: "Origine" },
  { href: "/ristorazione", label: "Ristorazione" },
  { href: "/shop", label: "Shop" },
  { href: "/contatti", label: "Contatti" },
];

export function mailto(subject: string, body = "") {
  const q = `subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;
  return `mailto:${SITE.email}?${q}`;
}

export function addressLine() {
  const l = LEGAL;
  if (!l.indirizzo) return l.citta;
  const place = [l.cap, l.citta].filter(Boolean).join(" ");
  return `${l.indirizzo}, ${place}${l.provincia ? ` (${l.provincia})` : ""}`;
}

// Riga dei dati aziendali nel footer: marchio, sede, partita IVA.
export function legalLines(): string[] {
  const l = LEGAL;
  const lines = [SITE.name, addressLine()];
  if (l.partitaIva) lines.push(`P.IVA ${l.partitaIva}`);
  if (l.rea) lines.push(`REA ${l.rea}`);
  if (l.pec) lines.push(`PEC ${l.pec}`);
  return lines;
}
