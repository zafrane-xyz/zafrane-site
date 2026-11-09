import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="display text-[44px] leading-tight">Pagina non trovata.</h1>
      <p className="body mt-4">L’indirizzo potrebbe essere cambiato.</p>
      <Link href="/" className="btn mt-10">Torna alla home</Link>
    </div>
  );
}
