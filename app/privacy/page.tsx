import type { Metadata } from "next";
import { LEGAL, SITE, addressLine } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy e cookie",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-2xl space-y-10 text-[15px] leading-8 text-[var(--ink-soft)]">
        <div>
          <p className="eyebrow">Informativa</p>
          <h1 className="mt-5 font-serif text-[44px] leading-tight text-[var(--foreground)]">Privacy e cookie</h1>
        </div>

        <section>
          <h2 className="font-serif text-[24px] text-[var(--foreground)]">Titolare del trattamento</h2>
          <p>
            {SITE.name}, {LEGAL.forma.toLowerCase()} di {LEGAL.titolare}, {addressLine()}
            {LEGAL.partitaIva ? `, P.IVA ${LEGAL.partitaIva}` : ""}. Contatto: {SITE.email}.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[24px] text-[var(--foreground)]">Quali dati raccogliamo</h2>
          <p>
            Solo quelli che ci invii tu: compilando i moduli di richiesta (nome, azienda, email, telefono, note) o scrivendoci. I moduli
            non salvano nulla sul sito: aprono il tuo programma di posta con il messaggio già compilato, che arriva alla nostra casella
            email quando lo spedisci.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[24px] text-[var(--foreground)]">Perché e per quanto tempo</h2>
          <p>
            Usiamo i dati per rispondere alla tua richiesta e, se richiesto, per concordare una fornitura (base giuridica: misure
            precontrattuali e contratto). Li conserviamo per il tempo necessario e per gli obblighi fiscali di legge.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[24px] text-[var(--foreground)]">Cookie e dati di navigazione</h2>
          <p>
            Il sito non usa cookie di profilazione né strumenti di analisi o pubblicità di terze parti, quindi non serve un banner di
            consenso. Il servizio di hosting (Vercel Inc.) registra dati tecnici di navigazione, come l’indirizzo IP, per far
            funzionare e proteggere il sito. Il link a Instagram porta su un sito esterno, che ha una propria informativa.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[24px] text-[var(--foreground)]">I tuoi diritti</h2>
          <p>
            Puoi chiedere accesso, rettifica o cancellazione dei tuoi dati scrivendo a {SITE.email}. Puoi inoltre rivolgerti al Garante
            per la protezione dei dati personali.
          </p>
        </section>
      </div>
    </div>
  );
}
