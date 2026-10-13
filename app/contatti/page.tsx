import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Scrivi a ZAFRANE per ordini, campioni e forniture per la ristorazione.",
  alternates: { canonical: "/contatti" },
};

export default function Contatti() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Contatti</p>
        <h1 className="mt-5 font-serif text-[44px] leading-tight md:text-[56px]">Scrivici.</h1>

        <dl className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          <div className="grid gap-2 py-6 md:grid-cols-3">
            <dt className="eyebrow self-center">Email</dt>
            <dd className="md:col-span-2"><a href={`mailto:${SITE.email}`} className="text-[16px] hover:text-[var(--accent)]">{SITE.email}</a></dd>
          </div>
          <div className="grid gap-2 py-6 md:grid-cols-3">
            <dt className="eyebrow self-center">Instagram</dt>
            <dd className="md:col-span-2"><a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="text-[16px] hover:text-[var(--accent)]">{SITE.instagramHandle}</a></dd>
          </div>
          <div className="grid gap-2 py-6 md:grid-cols-3">
            <dt className="eyebrow self-center">Sede</dt>
            <dd className="text-[16px] md:col-span-2">{SITE.city}, Italia</dd>
          </div>
        </dl>

        <div className="mt-14 flex flex-wrap gap-4">
          <Link href="/shop" className="btn">Richiesta d&apos;ordine</Link>
          <Link href="/professionisti" className="btn btn-solid">Campione per la ristorazione</Link>
        </div>
      </div>
    </div>
  );
}
