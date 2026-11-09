"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-[var(--paper)]/92 backdrop-blur-md">
      <div className="px-6">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between border-b border-[var(--line)]">
        <Link href="/" aria-label="ZAFRANE, home" onClick={() => setOpen(false)} className="shrink-0">
          <img src="/logo-header-dark.png" alt="ZAFRANE" width={331} height={80} className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Principale">
          {NAV.map((n) => {
            const active = path === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`text-[14px] transition-colors hover:text-[var(--crimson)] ${active ? "text-[var(--crimson)]" : "text-[var(--ink)]"}`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Apri o chiudi il menu"
          aria-expanded={open}
          className="text-[14px] md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? "Chiudi" : "Menu"}
        </button>
      </div>
      </div>

      {open && (
        <nav className="border-t border-[var(--line)] bg-[var(--paper)] px-6 py-10 md:hidden" aria-label="Mobile">
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
