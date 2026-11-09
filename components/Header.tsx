"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--background)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="ZAFRANE, home" onClick={() => setOpen(false)} className="shrink-0">
          <img src="/logo-header.png" alt="ZAFRANE" width={331} height={80} className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Principale">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-[11px] uppercase tracking-[0.26em] text-[var(--ink-soft)] transition hover:text-[var(--gold)]">
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Apri o chiudi il menu"
          aria-expanded={open}
          className="text-[11px] uppercase tracking-[0.26em] text-[var(--ink-soft)] md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? "Chiudi" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[var(--line)] bg-[var(--background)] px-6 py-8 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-6">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-serif text-[26px]">
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
