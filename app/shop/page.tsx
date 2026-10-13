import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop",
  description: "Zafferano Super Negin in pistilli e zafferano in polvere biologico. Invia la tua richiesta d'ordine.",
  alternates: { canonical: "/shop" },
};

export default function Shop() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">Shop</p>
        <h1 className="mt-5 font-serif text-[44px] leading-tight md:text-[56px]">Lo zafferano ZAFRANE.</h1>
        <p className="mt-6 max-w-xl text-[15px] leading-8 text-[var(--ink-soft)]">
          Scegli i formati, aggiungili alla richiesta e inviala. Ti rispondiamo con disponibilità, prezzo del lotto corrente,
          spedizione e modalità di pagamento. I prezzi dello zafferano variano con il raccolto, per questo non sono pubblicati.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-[var(--line)] pt-10">
          <p className="max-w-md text-[13px] leading-7 text-[var(--ink-soft)]">
            Per quantità superiori o per la ristorazione, trovi una pagina dedicata con campione di prova e quotazione per volume.
          </p>
          <div className="flex gap-4">
            <Link href="/carrello" className="btn btn-solid">Vai alla richiesta</Link>
            <Link href="/professionisti" className="btn">Ristorazione</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
