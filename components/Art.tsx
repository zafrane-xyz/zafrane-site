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

// Fiore di Crocus sativus con i tre pistilli rossi.
export function Crocus({ className = "" }: { className?: string }) {
  const petal = "M120 214 C 92 186, 92 132, 120 92 C 148 132, 148 186, 120 214 Z";
  return (
    <svg viewBox="0 0 240 280" className={className} fill="none" role="img" aria-label="Fiore di Crocus sativus con i tre pistilli rossi">
      <g stroke="#7d8a6a" strokeWidth="3" strokeLinecap="round">
        <path d="M118 272 C 84 248, 62 208, 54 150" />
        <path d="M122 272 C 156 248, 178 208, 186 150" />
        <path d="M120 272 C 118 252, 120 234, 120 214" />
      </g>
      <g fill="#a48cc2" opacity="0.85">
        <path d={petal} transform="rotate(-16 120 214)" />
        <path d={petal} transform="rotate(16 120 214)" />
      </g>
      <g fill="#8a6fad">
        <path d={petal} transform="rotate(-34 120 214)" opacity="0.92" />
        <path d={petal} transform="rotate(34 120 214)" opacity="0.92" />
        <path d={petal} />
      </g>
      <g stroke="#d9a441" strokeWidth="3" strokeLinecap="round">
        <path d="M111 178 C 107 164, 105 154, 104 146" />
        <path d="M129 178 C 133 164, 135 154, 136 146" />
      </g>
      <g fill="#d9a441">
        <ellipse cx="104" cy="143" rx="3.5" ry="6" />
        <ellipse cx="136" cy="143" rx="3.5" ry="6" />
      </g>
      <g stroke="#B31217" strokeWidth="4.5" strokeLinecap="round">
        <path d="M120 176 C 119 142, 112 112, 103 84" />
        <path d="M120 176 C 121 138, 121 104, 121 72" />
        <path d="M120 176 C 121 142, 128 112, 137 84" />
      </g>
      <g fill="#B31217">
        <ellipse cx="102" cy="79" rx="5" ry="10" transform="rotate(-18 102 79)" />
        <ellipse cx="121" cy="66" rx="5" ry="11" />
        <ellipse cx="138" cy="79" rx="5" ry="10" transform="rotate(18 138 79)" />
      </g>
    </svg>
  );
}

// Lattina di caviale.
export function Tin({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg viewBox="0 0 240 220" className={className} fill="none" role="img" aria-label={`Lattina ZAFRANE ${label}`}>
      <defs>
        <linearGradient id="tinbody" x1="0" x2="1">
          <stop offset="0" stopColor="#b4b0a8" />
          <stop offset="0.35" stopColor="#f1eee8" />
          <stop offset="0.7" stopColor="#cfcac1" />
          <stop offset="1" stopColor="#9d988f" />
        </linearGradient>
      </defs>
      <ellipse cx="120" cy="200" rx="88" ry="10" fill="#171717" opacity="0.08" />
      <path d="M36 92 L36 176 C36 194 204 194 204 176 L204 92 Z" fill="url(#tinbody)" />
      <ellipse cx="120" cy="92" rx="84" ry="20" fill="#e6e2da" stroke="#bcb7ae" strokeWidth="1.5" />
      <ellipse cx="120" cy="90" rx="70" ry="14" fill="#d7d2c9" />
      <g transform="translate(120 88) scale(0.16) translate(-100 -110)">
        <path d="M20 190 C 32 120, 46 70, 64 18" stroke="#B31217" strokeWidth="12" strokeLinecap="round" />
        <path d="M100 196 C 100 130, 104 84, 110 30" stroke="#B31217" strokeWidth="14" strokeLinecap="round" />
        <path d="M180 190 C 168 120, 152 70, 138 18" stroke="#B31217" strokeWidth="12" strokeLinecap="round" />
      </g>
      <text x="120" y="146" textAnchor="middle" fontFamily="Georgia, serif" fontSize="17" letterSpacing="5" fill="#171717">ZAFRANE</text>
      <text x="120" y="166" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8.5" letterSpacing="2.4" fill="#171717">{label.toUpperCase()}</text>
    </svg>
  );
}

// Tratta ideale tra due luoghi: linea tratteggiata, non una mappa.
export function Route({ from, to, className = "" }: { from: string; to: string; className?: string }) {
  const label = { fontFamily: "var(--font-inter), Arial, sans-serif" } as const;
  return (
    <svg viewBox="0 0 640 170" className={className} fill="none" role="img" aria-label={`Da ${from} a ${to}`}>
      <path d="M70 100 C 210 10, 430 10, 570 100" stroke="#B31217" strokeWidth="1.6" strokeDasharray="1 8" strokeLinecap="round" />
      <circle cx="70" cy="100" r="7" fill="#B31217" />
      <circle cx="570" cy="100" r="7" fill="#171717" />
      <circle cx="70" cy="100" r="15" stroke="#B31217" strokeWidth="1" opacity="0.35" />
      <circle cx="570" cy="100" r="15" stroke="#171717" strokeWidth="1" opacity="0.35" />
      <text x="70" y="140" textAnchor="middle" fontSize="11" letterSpacing="4" fill="#5f5952" style={label}>{from.toUpperCase()}</text>
      <text x="570" y="140" textAnchor="middle" fontSize="11" letterSpacing="4" fill="#5f5952" style={label}>{to.toUpperCase()}</text>
    </svg>
  );
}
