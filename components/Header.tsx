"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV } from "@/lib/site";
import { useCart } from "./CartProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-serif text-[22px] tracking-[0.32em] text-[var(--foreground)]" onClick={() => setOpen(false)}>
          ZAFRANE
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-[11px] uppercase tracking-[0.24em] text-[#5f5952] transition hover:text-[var(--accent)]">
              {n.label}
            </Link>
          ))}
          <Link href="/carrello" className="text-[11px] uppercase tracking-[0.24em] text-[var(--foreground)] hover:text-[var(--accent)]">
            Richiesta{count > 0 ? ` (${count})` : ""}
          </Link>
        </nav>

        <button
          aria-label="Menu"
          aria-expanded={open}
          className="md:hidden text-[11px] uppercase tracking-[0.24em]"
          onClick={() => setOpen(!open)}
        >
          {open ? "Chiudi" : `Menu${count > 0 ? ` (${count})` : ""}`}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[var(--line)] bg-[var(--background)] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-[12px] uppercase tracking-[0.24em] text-[#5f5952]">
                {n.label}
              </Link>
            ))}
            <Link href="/carrello" onClick={() => setOpen(false)} className="text-[12px] uppercase tracking-[0.24em]">
              Richiesta d&apos;ordine{count > 0 ? ` (${count})` : ""}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
