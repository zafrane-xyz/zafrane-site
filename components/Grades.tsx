// Le categorie commerciali dello zafferano persiano, dalla più pura alla meno pura.

export const GRADES: { name: string; text: string; ours?: string }[] = [
  { name: "Super Negin", text: "Pistilli lunghi, spessi e regolari, solo parte rossa, separati uno a uno. Massimo colore e aroma.", ours: "I nostri pistilli" },
  { name: "Sargol", text: "Solo le punte rosse, più corte e spesso spezzate. Nessuna parte gialla, forte potere colorante.", ours: "La nostra polvere" },
  { name: "Negin", text: "Pistilli lunghi interamente rossi, spesso ancora uniti a tre come nel fiore. Aspetto meno regolare del Super Negin." },
  { name: "Pushal", text: "Pistilli rossi con un breve tratto di stilo giallo alla base. Il giallo pesa sulla bilancia ma non dà colore." },
  { name: "Dasteh", text: "Il pistillo intero, parte rossa e lungo stilo giallo-bianco, legato a mazzetti. Resa più bassa." },
  { name: "Konj", text: "Solo lo stilo giallo-bianco, senza parte rossa. Quasi privo di colore e di aroma." },
];

export function GradeList() {
  return (
    <dl className="mx-auto max-w-3xl border-t border-[var(--line)] text-left">
      {GRADES.map((g) => (
        <div key={g.name} className="grid gap-2 border-b border-[var(--line)] py-6 md:grid-cols-[220px_1fr] md:gap-8">
          <dt>
            <span className={`display block text-[30px] ${g.ours ? "text-[var(--crimson)]" : ""}`}>{g.name}</span>
            {g.ours && <span className="label mt-1 block">{g.ours}</span>}
          </dt>
          <dd className="body self-center">{g.text}</dd>
        </div>
      ))}
    </dl>
  );
}
