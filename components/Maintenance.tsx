import { SITE } from "@/lib/site";

export default function Maintenance() {
  return (
    <main className="glow flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <img src="/logo-light.png" alt="ZAFRANE" width={880} height={386} className="h-auto w-[400px] max-w-[78vw]" />
      <p className="eyebrow mt-12">Khorasan · Milano</p>
      <h1 className="mt-10 font-serif text-[32px] font-light leading-snug md:text-[42px]">Il nostro sito è in aggiornamento.</h1>
      <p className="mt-5 max-w-md text-[14px] leading-7 text-[var(--ink-soft)]">
        Stiamo preparando la nuova versione. Per informazioni scrivici a {SITE.email} o su Instagram.
      </p>
      <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn mt-10">
        Instagram {SITE.instagramHandle}
      </a>
    </main>
  );
}
