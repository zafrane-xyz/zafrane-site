// Tavole illustrate delle categorie di zafferano, disegnate in SVG.
// Ogni pistillo (stimma) è un filamento sottile che si allarga a tromba verso la punta;
// lo stilo (parte gialla-bianca, senza colore né aroma) compare solo in Pushal e Dasteh.

export type Grade = "super-negin" | "negin" | "sargol" | "pushal" | "dasteh";

type Strand = {
  x: number; // base
  y: number;
  angle: number; // gradi, 0 = verso l'alto
  len: number;
  bend: number; // curvatura laterale
  wb: number; // larghezza alla base
  wt: number; // larghezza alla punta
  style?: number; // quota di lunghezza occupata dallo stilo giallo (0–1)
};

function rng(seed: number) {
  let s = seed >>> 0 || 1;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const f = (n: number) => n.toFixed(1);

// Punti della linea mediana (curva quadratica) e normali.
function centerline(s: Strand, t: number) {
  const a = (s.angle * Math.PI) / 180;
  const dx = Math.sin(a), dy = -Math.cos(a);
  const nx = -dy, ny = dx;
  const x2 = s.x + dx * s.len, y2 = s.y + dy * s.len;
  const cx = (s.x + x2) / 2 + nx * s.bend, cy = (s.y + y2) / 2 + ny * s.bend;
  const u = 1 - t;
  const px = u * u * s.x + 2 * u * t * cx + t * t * x2;
  const py = u * u * s.y + 2 * u * t * cy + t * t * y2;
  const tx = 2 * u * (cx - s.x) + 2 * t * (x2 - cx);
  const ty = 2 * u * (cy - s.y) + 2 * t * (y2 - cy);
  const l = Math.hypot(tx, ty) || 1;
  return { px, py, nx: -ty / l, ny: tx / l, tx: tx / l, ty: ty / l };
}

function band(s: Strand, t0: number, t1: number, width: (t: number) => number, crown: boolean, r: () => number) {
  const N = 26;
  const L: string[] = [], R: string[] = [];
  for (let i = 0; i <= N; i++) {
    const t = t0 + ((t1 - t0) * i) / N;
    const c = centerline(s, t);
    const w = width(t) / 2;
    L.push(`${f(c.px + c.nx * w)} ${f(c.py + c.ny * w)}`);
    R.push(`${f(c.px - c.nx * w)} ${f(c.py - c.ny * w)}`);
  }
  let tip = "";
  if (crown) {
    // bordo della tromba, leggermente frastagliato
    const c = centerline(s, t1);
    const w = width(t1) / 2;
    const pts: string[] = [];
    const k = 5;
    for (let j = 1; j < k; j++) {
      const o = -w + (2 * w * j) / k;
      const out = (j % 2 ? 1.6 : 0.4) + r() * 1.2;
      pts.push(`${f(c.px + c.nx * -o + c.tx * out)} ${f(c.py + c.ny * -o + c.ty * out)}`);
    }
    tip = " L " + pts.join(" L ");
  }
  return `M ${L.join(" L ")}${tip} L ${R.reverse().join(" L ")} Z`;
}

function StrandShape({ s, seed, id }: { s: Strand; seed: number; id: string }) {
  const r = rng(seed);
  const st = s.style ?? 0;
  const redW = (t: number) => {
    const k = st >= 1 ? 0 : (t - st) / (1 - st);
    return s.wb + (s.wt - s.wb) * Math.pow(Math.max(k, 0), 3.2);
  };
  const vein = centerline(s, Math.min(st + 0.08, 0.95));
  const veinEnd = centerline(s, 0.97);
  return (
    <g>
      {st > 0 && <path d={band(s, 0, st + 0.01, () => s.wb * 0.95, false, r)} fill={`url(#${id}-style)`} />}
      <path d={band(s, st, 1, redW, true, r)} fill={`url(#${id}-red)`} />
      <path
        d={`M ${f(vein.px)} ${f(vein.py)} L ${f(veinEnd.px)} ${f(veinEnd.py)}`}
        stroke="#e2584a"
        strokeOpacity="0.35"
        strokeWidth="0.6"
        strokeLinecap="round"
      />
    </g>
  );
}

function layout(grade: Grade): Strand[] {
  const r = rng(grade.length * 97 + grade.charCodeAt(0));
  const out: Strand[] = [];
  if (grade === "super-negin") {
    // filamenti lunghi, spessi, regolari e separati
    for (let i = 0; i < 9; i++) {
      out.push({ x: 60 + i * 21 + r() * 8, y: 192 - r() * 18, angle: 27 + (r() - 0.5) * 16, len: 136 + r() * 26, bend: (r() - 0.5) * 12, wb: 2.6, wt: 9.4 });
    }
  } else if (grade === "negin") {
    // tre stimmi ancora uniti alla base, lunghi e interamente rossi
    for (let g = 0; g < 3; g++) {
      const bx = 70 + g * 72 + r() * 8, by = 196 - r() * 8, base = 18 + (r() - 0.5) * 16;
      for (let j = -1; j <= 1; j++) {
        out.push({ x: bx, y: by, angle: base + j * 8 + (r() - 0.5) * 5, len: 120 + r() * 22, bend: (r() - 0.5) * 24, wb: 2.2, wt: 8.4 });
      }
    }
  } else if (grade === "sargol") {
    // solo le punte rosse: frammenti corti, sparsi
    for (let i = 0; i < 26; i++) {
      out.push({ x: 26 + r() * 250, y: 40 + r() * 160, angle: r() * 360, len: 26 + r() * 22, bend: (r() - 0.5) * 8, wb: 3.2, wt: 8.2 });
    }
  } else if (grade === "pushal") {
    // rosso con un breve tratto di stilo giallo alla base
    for (let i = 0; i < 6; i++) {
      out.push({ x: 40 + i * 40 + r() * 10, y: 200 - r() * 20, angle: 12 + (r() - 0.5) * 34, len: 124 + r() * 20, bend: (r() - 0.5) * 18, wb: 2.4, wt: 8.4, style: 0.2 + r() * 0.06 });
    }
  } else {
    // dasteh: pistillo intero con lungo stilo, legato a mazzetto
    for (let i = 0; i < 15; i++) {
      out.push({ x: 150 + (r() - 0.5) * 6, y: 206, angle: -34 + i * 4.8 + (r() - 0.5) * 3, len: 168 + r() * 18, bend: (r() - 0.5) * 12, wb: 1.9, wt: 6.6, style: 0.52 + r() * 0.06 });
    }
  }
  return out;
}

export function PistilPlate({ grade, className = "", label }: { grade: Grade; className?: string; label: string }) {
  const id = `p-${grade}`;
  const strands = layout(grade);
  // centra la composizione nella tavola
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const s of strands)
    for (const t of [0, 0.25, 0.5, 0.75, 1]) {
      const c = centerline(s, t);
      x0 = Math.min(x0, c.px); x1 = Math.max(x1, c.px); y0 = Math.min(y0, c.py); y1 = Math.max(y1, c.py);
    }
  const dx = 150 - (x0 + x1) / 2, dy = 110 - (y0 + y1) / 2;
  return (
    <svg viewBox="0 0 300 220" className={className} role="img" aria-label={label}>
      <defs>
        <linearGradient id={`${id}-red`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#6e080d" />
          <stop offset="0.55" stopColor="#a8121a" />
          <stop offset="1" stopColor="#cf2c25" />
        </linearGradient>
        <linearGradient id={`${id}-style`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#f3ead0" />
          <stop offset="1" stopColor="#e6c46a" />
        </linearGradient>
        <filter id={`${id}-shadow`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.3" floodColor="#000" floodOpacity="0.55" />
        </filter>
      </defs>
      <g transform={`translate(${f(dx)} ${f(dy)})`} filter={`url(#${id}-shadow)`}>
        {strands.map((s, i) => (
          <StrandShape key={i} s={s} seed={i * 31 + 7} id={id} />
        ))}
        {grade === "dasteh" && <rect x="139" y="184" width="22" height="5" rx="2" fill="#c9a14a" />}
      </g>
    </svg>
  );
}

export const GRADES: { grade: Grade; name: string; text: string; ours?: string }[] = [
  {
    grade: "super-negin",
    name: "Super Negin",
    text: "Il taglio più selezionato: pistilli lunghi, spessi e regolari, solo parte rossa, separati uno a uno. Massimo colore e aroma.",
    ours: "I nostri pistilli",
  },
  {
    grade: "negin",
    name: "Negin",
    text: "Pistilli lunghi interamente rossi, spesso ancora uniti a tre come nel fiore. Qualità alta, aspetto meno regolare del Super Negin.",
  },
  {
    grade: "sargol",
    name: "Sargol",
    text: "Solo le punte rosse, più corte e spesso spezzate. Nessuna parte gialla e forte potere colorante.",
    ours: "La nostra polvere",
  },
  {
    grade: "pushal",
    name: "Pushal",
    text: "Pistilli rossi con un breve tratto di stilo giallo alla base. Il giallo pesa sulla bilancia ma non dà colore.",
  },
  {
    grade: "dasteh",
    name: "Dasteh",
    text: "Il pistillo intero, parte rossa e lungo stilo giallo-bianco, legato a mazzetti. Forma tradizionale, resa più bassa.",
  },
];
