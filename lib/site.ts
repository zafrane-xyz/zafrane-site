// Configurazione centrale del sito ZAFRANE.
// Per aggiornare contatti, dati fiscali o foto si modifica SOLO questo file.

export const SITE = {
  name: "ZAFRANE",
  url: "https://www.zafrane.it",
  email: "info@zafrane.it",
  instagram: "https://www.instagram.com/zafrane.xyz",
  instagramHandle: "@zafrane.xyz",
  city: "Milano",
};

// Dati societari: compaiono nel footer, nella pagina Contatti e nella Privacy.
// Lascia "" i campi che non hai: non vengono mostrati.
export const LEGAL = {
  forma: "Ditta individuale",
  titolare: "Saeed Khoshbaf Torghabe", // nome come da visura camerale
  partitaIva: "14728190969", // attribuita il 15/05/2026 (ATECO 46.38.00)
  indirizzo: "Via privata Terenzio Mamiani 4", // sede come da Business Plan Invitalia
  cap: "20127",
  citta: "Milano",
  provincia: "MI",
  rea: "", // numero REA, se presente in visura
  pec: "", // PEC aziendale, se attivata
};

// Se true, TUTTE le pagine mostrano solo la schermata "sito in aggiornamento".
export const MAINTENANCE = false;

// Foto reali: carica i file in /public/foto/ e scrivi qui il percorso, es. "/foto/origine.jpg".
// Finché un campo è vuoto, il sito mostra un'illustrazione al suo posto.
export const PHOTOS: Record<"zafferano" | "origine" | "caviale", string | undefined> = {
  zafferano: undefined,
  origine: undefined,
  caviale: undefined,
};

export const NAV = [
  { href: "/zafferano", label: "Zafferano" },
  { href: "/origine", label: "Origine" },
  { href: "/caviale", label: "Caviale" },
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

// Righe dei dati societari, solo quelle compilate.
export function legalLines(): string[] {
  const l = LEGAL;
  const lines = [`${SITE.name} · ${l.forma.toLowerCase()} di ${l.titolare}`, `Sede: ${addressLine()}`];
  if (l.partitaIva) lines.push(`P.IVA ${l.partitaIva}`);
  if (l.rea) lines.push(`REA ${l.rea}`);
  if (l.pec) lines.push(`PEC ${l.pec}`);
  return lines;
}
