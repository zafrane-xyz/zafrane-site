// Le categorie commerciali dello zafferano persiano, solo testo.

export const GRADES: { name: string; text: string; ours?: string }[] = [
  {
    name: "Super Negin",
    text: "Il taglio più selezionato: pistilli lunghi, spessi e regolari, solo parte rossa, separati uno a uno. Massimo colore e aroma.",
    ours: "I nostri pistilli",
  },
  {
    name: "Negin",
    text: "Pistilli lunghi interamente rossi, spesso ancora uniti a tre come nel fiore. Qualità alta, aspetto meno regolare del Super Negin.",
  },
  {
    name: "Sargol",
    text: "Solo le punte rosse, più corte e spesso spezzate. Nessuna parte gialla e forte potere colorante.",
    ours: "La nostra polvere",
  },
  {
    name: "Pushal",
    text: "Pistilli rossi con un breve tratto di stilo giallo alla base. Il giallo pesa sulla bilancia ma non dà colore.",
  },
  {
    name: "Dasteh",
    text: "Il pistillo intero, parte rossa e lungo stilo giallo-bianco, legato a mazzetti. Forma tradizionale, resa più bassa.",
  },
  {
    name: "Konj",
    text: "Solo lo stilo giallo-bianco, senza parte rossa. Quasi privo di colore e di aroma.",
  },
];

export function GradeList({ compact = false }: { compact?: boolean }) {
  const list = compact ? GRADES.slice(0, 5) : GRADES;
  return (
    <ol className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
      {list.map((g, i) => (
        <li key={g.name} className="grid items-baseline gap-3 py-7 md:grid-cols-[56px_240px_1fr_150px] md:gap-8">
          <span className="font-serif text-[18px] text-[var(--gold)]">{String(i + 1).padStart(2, "0")}</span>
          <h3 className={`font-serif text-[32px] font-light leading-none ${g.ours ? "text-[var(--accent)]" : ""}`}>{g.name}</h3>
          <p className="text-[14px] leading-7 text-[var(--ink-soft)]">{g.text}</p>
          <span className="text-[10px] uppercase tracking-[0.24em] text-[var(--accent)] md:text-right">{g.ours ?? ""}</span>
        </li>
      ))}
    </ol>
  );
}
