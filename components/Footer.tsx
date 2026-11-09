import Link from "next/link";
import { LEGAL, NAV, SITE, addressLine } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-6 py-16 text-center">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        <img src="/logo-header-dark.png" alt="ZAFRANE" width={331} height={80} className="h-8 w-auto" />
        <nav aria-label="Pagine" className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[15px]">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-[var(--crimson)]">{n.label}</Link>
          ))}
        </nav>
        <p className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[15px]">
          <a href={`mailto:${SITE.email}`} className="hover:text-[var(--crimson)]">{SITE.email}</a>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--crimson)]">Instagram</a>
          <Link href="/privacy" className="hover:text-[var(--crimson)]">Privacy e cookie</Link>
        </p>
        <address className="label not-italic leading-7">
          {SITE.name}, {addressLine()}
          {LEGAL.partitaIva ? ` · P.IVA ${LEGAL.partitaIva}` : ""}
        </address>
      </div>
    </footer>
  );
}
