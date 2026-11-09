"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-[var(--paper)]/95 backdrop-blur-md">
      <div className="px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between py-5 md:flex-col md:justify-center md:gap-5 md:pb-0 md:pt-7">
          <Link href="/" aria-label="ZAFRANE, home" onClick={() => setOpen(false)}>
            <img src="/logo-header-dark.png" alt="ZAFRANE" width={331} height={80} className="h-8 w-auto md:h-9" />
          </Link>

          <nav
            className="hidden w-full justify-center gap-10 border-y border-[var(--line)] py-4 text-[14px] tracking-[0.06em] md:flex"
            aria-label="Principale"
          >
            {NAV.map((n) => {
              const active = path === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={`transition-colors hover:text-[var(--crimson)] ${active ? "text-[var(--crimson)]" : ""}`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <button
            aria-label="Apri o chiudi il menu"
            aria-expanded={open}
            className="text-[15px] font-semibold md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? "Chiudi" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-y border-[var(--line)] bg-[var(--paper)] px-6 py-8 text-center md:hidden" aria-label="Mobile">
          <ul className="space-y-5">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="display text-[30px]">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
