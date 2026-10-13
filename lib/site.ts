// Configurazione centrale del sito ZAFRANE.
// Per cambiare contatti, prezzi o prodotti si modifica SOLO questo file.

export const SITE = {
  name: "ZAFRANE",
  url: "https://www.zafrane.it",
  email: "info@zafrane.it", // DA VERIFICARE: deve essere una casella realmente attiva
  instagram: "https://www.instagram.com/zafrane.xyz",
  instagramHandle: "@zafrane.xyz",
  city: "Milano",
  // Dati societari obbligatori in footer per vendere online (da compilare quando disponibili)
  legal: {
    ragioneSociale: "ZAFRANE",
    partitaIva: "", // es. "IT01234567890"
    sede: "Milano",
  },
};

// Se false, nessun prezzo viene mostrato: il cliente invia una richiesta d'ordine.
// Se true, i prezzi di `price` vengono mostrati (IVA inclusa).
export const SHOW_PRICES = false;

export type Product = {
  slug: string;
  name: string;
  kind: "pistilli" | "polvere";
  format: string;
  grams: number;
  price?: number; // euro, IVA inclusa. Usato solo se SHOW_PRICES = true
  note: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "pistilli-05g",
    name: "Super Negin in pistilli",
    kind: "pistilli",
    format: "0,5 g",
    grams: 0.5,
    note: "Formato degustazione.",
  },
  {
    slug: "pistilli-1g",
    name: "Super Negin in pistilli",
    kind: "pistilli",
    format: "1 g",
    grams: 1,
    note: "Il formato più scelto per la cucina di casa.",
  },
  {
    slug: "pistilli-2g",
    name: "Super Negin in pistilli",
    kind: "pistilli",
    format: "2 g",
    grams: 2,
    note: "Per chi cucina spesso con lo zafferano.",
  },
  {
    slug: "polvere-1g",
    name: "Zafferano in polvere biologico",
    kind: "polvere",
    format: "1 g",
    grams: 1,
    note: "Naturale e biologico, pratico per impasti e risotti.",
  },
];

export const NAV = [
  { href: "/zafferano", label: "Lo zafferano" },
  { href: "/shop", label: "Shop" },
  { href: "/professionisti", label: "Ristorazione" },
  { href: "/storia", label: "Storia" },
  { href: "/contatti", label: "Contatti" },
];
