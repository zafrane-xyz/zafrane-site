import type { Metadata } from "next";
import Section from "@/components/Section";
import { LEGAL, SITE, addressLine } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy e cookie",
  alternates: { canonical: "/privacy" },
};

const PARTS: [string, string][] = [
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
      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-6 pb-8 pt-24 md:grid-cols-12 md:gap-8 md:pt-32">
          <div className="md:col-span-3">
            <p className="label">Informativa</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="display text-[44px] leading-[1.08] md:text-[64px]">Privacy e cookie</h1>
            <p className="body mt-10 max-w-lg">
              Titolare del trattamento: {SITE.name}, impresa individuale di {LEGAL.titolare}, {addressLine()}
              {LEGAL.partitaIva ? `, P.IVA ${LEGAL.partitaIva}` : ""}. Contatto: {SITE.email}.
            </p>
          </div>
        </div>
      </section>
      {PARTS.map(([t, d]) => (
        <Section key={t} label={t}>
          <p className="body max-w-xl">{d}</p>
        </Section>
      ))}
    </>
  );
}
