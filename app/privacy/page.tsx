import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy e cookie",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-2xl space-y-8 text-[15px] leading-8 text-[var(--ink-soft)]">
        <div>
          <p className="eyebrow">Informativa</p>
          <h1 className="mt-5 font-serif text-[44px] leading-tight text-[var(--foreground)]">Privacy e cookie</h1>
        </div>

        <section>
          <h2 className="font-serif text-[24px] text-[var(--foreground)]">Titolare del trattamento</h2>
          <p>
            {SITE.legal.ragioneSociale}, {SITE.legal.sede}
            {SITE.legal.partitaIva ? `, P.IVA ${SITE.legal.partitaIva}` : ""}. Contatto: {SITE.email}.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[24px] text-[var(--foreground)]">Quali dati raccogliamo</h2>
          <p>
            Solo i dati che ci invii tu tramite i moduli di richiesta (nome, email, telefono, indirizzo di consegna, note). Il sito
            non ha un database: le richieste ci arrivano come email dal tuo programma di posta.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[24px] text-[var(--foreground)]">Perché e per quanto tempo</h2>
          <p>
            Usiamo i dati per rispondere alla tua richiesta ed eventualmente eseguire l&apos;ordine (base giuridica: misure
            precontrattuali e contratto). Li conserviamo per il tempo necessario e per gli obblighi fiscali di legge.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[24px] text-[var(--foreground)]">Cookie</h2>
          <p>
            Il sito usa solo memoria tecnica del browser per ricordare gli articoli della tua richiesta d&apos;ordine. Non usiamo
            cookie di profilazione né strumenti di analisi di terze parti, quindi non è richiesto un banner di consenso. Se in futuro
            aggiungeremo strumenti di analisi o pubblicità, aggiorneremo questa pagina e il consenso.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[24px] text-[var(--foreground)]">I tuoi diritti</h2>
          <p>
            Puoi chiedere accesso, rettifica o cancellazione dei tuoi dati scrivendo a {SITE.email}. Hai inoltre il diritto di
            rivolgerti al Garante per la protezione dei dati personali.
          </p>
        </section>
      </div>
    </div>
  );
}
