import Link from "next/link";
import { NAV, SITE, legalLines } from "@/lib/site";

export default function Footer() {
  const lines = legalLines();
  return (
    <footer className="border-t border-[var(--line)] px-6 py-16">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-[22px] tracking-[0.32em]">ZAFRANE</p>
          <p className="mt-4 max-w-xs text-[13px] leading-7 text-[var(--ink-soft)]">
            Zafferano persiano Super Negin dalla Khorasan, e caviale del Caspio. Distribuito a {SITE.city}.
          </p>
        </div>

        <div>
          <p className="eyebrow">Navigazione</p>
          <ul className="mt-5 space-y-3 text-[13px] text-[var(--ink-soft)]">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-[var(--accent)]">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contatti</p>
          <ul className="mt-5 space-y-3 text-[13px] text-[var(--ink-soft)]">
            <li><a href={`mailto:${SITE.email}`} className="hover:text-[var(--accent)]">{SITE.email}</a></li>
            <li><a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">Instagram {SITE.instagramHandle}</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-4 border-t border-[var(--line)] pt-6 text-[11px] leading-6 text-[var(--muted)] md:flex-row md:items-start md:justify-between">
        <p>{lines.join(" · ")}</p>
        <Link href="/privacy" className="shrink-0 hover:text-[var(--accent)]">Privacy e cookie</Link>
      </div>
    </footer>
  );
}
