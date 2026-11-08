"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-serif text-[22px] tracking-[0.32em] text-[var(--foreground)]" onClick={() => setOpen(false)}>
          ZAFRANE
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principale">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)] transition hover:text-[var(--accent)]">
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Apri o chiudi il menu"
          aria-expanded={open}
          className="text-[11px] uppercase tracking-[0.24em] lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? "Chiudi" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[var(--line)] bg-[var(--background)] px-6 py-6 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-5">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-[12px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
