import { SITE } from "@/lib/site";

export default function Maintenance() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <img src="/zafrane-logo.png" alt="ZAFRANE" className="h-auto w-[460px] max-w-[80vw]" />
      <p className="eyebrow mt-10">Milano · Zafferano Super Negin</p>
      <h1 className="mt-14 font-serif text-[30px] leading-snug md:text-[38px]">Il nostro sito è in aggiornamento.</h1>
      <p className="mt-5 max-w-md text-[14px] leading-7 text-[var(--ink-soft)]">
        Stiamo preparando la nuova versione. Per informazioni sullo zafferano, scrivici su Instagram.
      </p>
      <a
        href={SITE.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="btn mt-10"
      >
        Instagram {SITE.instagramHandle}
      </a>
    </main>
  );
}
