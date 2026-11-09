import Link from "next/link";
import { NAV, SITE, legalLines } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--night)] px-6 pb-12 pt-20 text-[var(--cream)]">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img src="/logo-header.png" alt="ZAFRANE" width={331} height={80} className="h-9 w-auto" />
          <p className="mt-6 max-w-xs font-serif text-[21px] italic leading-snug text-[#d8ccba]">
            Zafferano persiano dalla Khorasan, scelto per le cucine di Milano.
          </p>
        </div>

        <div>
          <p className="eyebrow text-[#c9a25e]!">Navigazione</p>
          <ul className="mt-6 space-y-3 text-[13px] text-[#cfc2b0]">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[#c9a25e]!">Contatti</p>
          <ul className="mt-6 space-y-3 text-[13px] text-[#cfc2b0]">
            <li><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></li>
            <li><a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram {SITE.instagramHandle}</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-4 border-t border-white/10 pt-6 text-[11px] leading-6 tracking-wide text-[#a3968a] md:flex-row md:items-start md:justify-between">
        <p>{legalLines().join(" · ")}</p>
        <Link href="/privacy" className="shrink-0 hover:text-white">Privacy e cookie</Link>
      </div>
    </footer>
  );
}
