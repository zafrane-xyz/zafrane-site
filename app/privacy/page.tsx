import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { LEGAL, SITE, addressLine } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy e cookie",
  alternates: { canonical: "/privacy" },
};

const PARTS: [string, string][] = [
  [
    "Titolare del trattamento",
    `${SITE.name}, impresa individuale di ${LEGAL.titolare}, ${addressLine()}${LEGAL.partitaIva ? `, P.IVA ${LEGAL.partitaIva}` : ""}. Contatto: ${SITE.email}.`,
  ],
  [
    "Quali dati raccogliamo",
    "Solo quelli che ci invii tu, compilando i moduli di richiesta o scrivendoci: nome, azienda, email, telefono, note. I moduli non salvano nulla sul sito: aprono il tuo programma di posta con il messaggio già compilato, che ci arriva quando lo spedisci.",
  ],
  [
    "Perché e per quanto tempo",
    "Per rispondere alla tua richiesta e, se lo chiedi, per concordare una fornitura (base giuridica: misure precontrattuali e contratto). Li conserviamo per il tempo necessario e per gli obblighi fiscali di legge.",
  ],
  [
    "Cookie e dati di navigazione",
    "Il sito non usa cookie di profilazione né strumenti di analisi o pubblicità di terze parti, quindi non serve un banner di consenso. Il servizio di hosting (Vercel Inc.) registra dati tecnici, come l’indirizzo IP, per far funzionare e proteggere il sito. Il link a Instagram porta su un sito esterno con una propria informativa.",
  ],
  [
    "I tuoi diritti",
    `Puoi chiedere accesso, rettifica o cancellazione dei tuoi dati scrivendo a ${SITE.email}. Puoi inoltre rivolgerti al Garante per la protezione dei dati personali.`,
  ],
];

export default function Privacy() {
  return (
    <>
      <PageHero label="Informativa" title="Privacy e cookie" />
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-2xl space-y-10">
          {PARTS.map(([t, d]) => (
            <div key={t}>
              <h2 className="display text-[28px]">{t}</h2>
              <p className="body mt-3">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
