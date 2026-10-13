import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  const { legal } = SITE;
  return (
    <footer className="border-t border-[var(--line)] px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-[22px] tracking-[0.32em]">ZAFRANE</p>
          <p className="mt-4 max-w-xs text-[13px] leading-7 text-[#5f5952]">
            Zafferano persiano Super Negin, selezionato a Mashhad e presentato a {SITE.city}.
          </p>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--muted)]">Navigazione</p>
          <ul className="mt-5 space-y-3 text-[13px] text-[#5f5952]">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-[var(--accent)]">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--muted)]">Contatti</p>
          <ul className="mt-5 space-y-3 text-[13px] text-[#5f5952]">
            <li><a href={`mailto:${SITE.email}`} className="hover:text-[var(--accent)]">{SITE.email}</a></li>
            <li><a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">Instagram {SITE.instagramHandle}</a></li>
            <li>{SITE.city}, Italia</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-3 border-t border-[var(--line)] pt-6 text-[11px] text-[var(--muted)] md:flex-row md:justify-between">
        <p>
          © {new Date().getFullYear()} {legal.ragioneSociale}
          {legal.partitaIva ? ` · P.IVA ${legal.partitaIva}` : ""} · {legal.sede}
        </p>
        <Link href="/privacy" className="hover:text-[var(--accent)]">Privacy e cookie</Link>
      </div>
    </footer>
  );
}
