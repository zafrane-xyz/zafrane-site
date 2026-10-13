// Illustrazioni originali in SVG, coerenti con il logo (tre pistilli). Nessuna immagine esterna.

export function Strands({ className = "" }: { className?: string }) {
  const strands = [
    { d: "M20 190 C 32 120, 46 70, 64 18", w: 5 },
    { d: "M60 195 C 66 130, 78 80, 94 24", w: 6 },
    { d: "M100 196 C 100 130, 104 84, 110 30", w: 7 },
    { d: "M140 195 C 134 130, 128 80, 124 24", w: 6 },
    { d: "M180 190 C 168 120, 152 70, 138 18", w: 5 },
  ];
  return (
    <svg viewBox="0 0 200 210" className={className} fill="none" aria-hidden="true">
      {strands.map((s, i) => (
        <path key={i} d={s.d} stroke="var(--accent)" strokeWidth={s.w} strokeLinecap="round" opacity={0.92 - i * 0.04} />
      ))}
    </svg>
  );
}

export function Jar({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg viewBox="0 0 240 300" className={className} fill="none" role="img" aria-label={`Confezione ZAFRANE ${label}`}>
      <defs>
        <linearGradient id="alu" x1="0" x2="1">
          <stop offset="0" stopColor="#bdb8b0" />
          <stop offset="0.45" stopColor="#efece6" />
          <stop offset="1" stopColor="#a9a49c" />
        </linearGradient>
      </defs>
      <ellipse cx="120" cy="278" rx="74" ry="9" fill="#171717" opacity="0.08" />
      <rect x="62" y="62" width="116" height="206" rx="10" fill="url(#alu)" />
      <rect x="54" y="40" width="132" height="34" rx="8" fill="#d9d5cd" />
      <rect x="54" y="40" width="132" height="8" rx="4" fill="#efece6" />
      <g transform="translate(120 128) scale(0.34) translate(-100 -110)">
        <path d="M20 190 C 32 120, 46 70, 64 18" stroke="#B31217" strokeWidth="9" strokeLinecap="round" />
        <path d="M100 196 C 100 130, 104 84, 110 30" stroke="#B31217" strokeWidth="11" strokeLinecap="round" />
        <path d="M180 190 C 168 120, 152 70, 138 18" stroke="#B31217" strokeWidth="9" strokeLinecap="round" />
      </g>
      <text x="120" y="204" textAnchor="middle" fontFamily="Georgia, serif" fontSize="15" letterSpacing="5" fill="#171717">ZAFRANE</text>
      <text x="120" y="226" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7.5" letterSpacing="2.4" fill="#5f5952">SUPER NEGIN</text>
      <text x="120" y="246" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" letterSpacing="2" fill="#171717">{label.toUpperCase()}</text>
    </svg>
  );
}
