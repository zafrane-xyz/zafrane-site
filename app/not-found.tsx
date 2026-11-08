import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">Errore 404</p>
      <h1 className="mt-5 font-serif text-[44px] leading-tight">Pagina non trovata.</h1>
      <Link href="/" className="btn mt-10">Torna alla home</Link>
    </div>
  );
}
