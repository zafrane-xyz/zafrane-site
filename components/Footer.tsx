import Link from "next/link";
import { LEGAL, NAV, SITE, addressLine } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="px-6">
      <div className="mx-auto grid max-w-6xl gap-12 border-t border-[var(--line)] py-20 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-3">
          <img src="/logo-header-dark.png" alt="ZAFRANE" width={331} height={80} className="h-7 w-auto" />
          <p className="label mt-5">Milano</p>
        </div>

        <nav className="md:col-span-3" aria-label="Pagine">
          <ul className="space-y-2 text-[14px]">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-[var(--crimson)]">{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="space-y-2 text-[14px] md:col-span-3">
          <li><a href={`mailto:${SITE.email}`} className="hover:text-[var(--crimson)]">{SITE.email}</a></li>
          <li><a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--crimson)]">Instagram</a></li>
          <li><Link href="/privacy" className="hover:text-[var(--crimson)]">Privacy e cookie</Link></li>
        </ul>

        <address className="label not-italic md:col-span-3">
          {SITE.name}
          <br />
          {addressLine()}
          {LEGAL.partitaIva && (
            <>
              <br />
              P.IVA {LEGAL.partitaIva}
            </>
          )}
        </address>
      </div>
    </footer>
  );
}
