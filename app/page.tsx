export default function Home() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <img
          src="/zafrane-logo.png"
          alt="ZAFRANE"
          className="w-[500px] max-w-[82vw] h-auto"
        />

        <p className="mt-14 text-[10px] uppercase tracking-[0.42em] text-[#8C857C]">
          Milano · Zafferano Super Negin
        </p>
      </section>

      {/* FRASE PRINCIPALE */}
<section className="px-6 pb-28">
  <div className="mx-auto max-w-3xl text-center">
    <p className="font-serif text-[32px] leading-[1.5] text-[#171717] md:text-[42px]">
      Zafferano persiano Super Negin, selezionato in filiera diretta,
      con alta resa, colore intenso e qualità costante.
    </p>
  </div>
</section>

{/* IDENTITÀ */}
<section className="px-6 pb-24">
  <div className="mx-auto max-w-xl text-center">

    <div className="mb-6 flex justify-center">
      <img src="/favicontrs.png" className="w-5 h-5" />
    </div>

    <p className="text-[13px] leading-7 text-[#5f5952]">
      Dalla regione di Mashhad a Milano,
      un progetto che unisce origine, qualità e design.
    </p>

    <p className="mt-6 text-[10px] uppercase tracking-[0.38em] text-[#8C857C]">
      Più intensità · maggiore resa
    </p>

  </div>
</section>

{/* PERCHÉ ZAFRANE */}
<section className="px-6 pb-32">
  <div className="mx-auto max-w-5xl">

    <div className="text-center mb-16">
      <p className="text-[10px] uppercase tracking-[0.38em] text-[#8C857C]">
        Perché Zafrane
      </p>
    </div>

    <div className="grid gap-12 md:grid-cols-3">

      {/* 1 */}
      <div className="text-center">
        <h3 className="font-serif text-[22px] mb-4">
          Alta resa
        </h3>
        <p className="text-[14px] leading-7 text-[#5f5952]">
          Bastano 0,05–0,10 g per porzione. Più intensità,
          più piatti per grammo, maggiore controllo in cucina.
        </p>
      </div>

      {/* 2 */}
      <div className="text-center">
        <h3 className="font-serif text-[22px] mb-4">
          Filiera diretta
        </h3>
        <p className="text-[14px] leading-7 text-[#5f5952]">
          Selezione all’origine nella regione di Mashhad,
          con un rapporto diretto tra produzione e distribuzione.
        </p>
      </div>

      {/* 3 */}
      <div className="text-center">
        <h3 className="font-serif text-[22px] mb-4">
          Qualità Super Negin
        </h3>
        <p className="text-[14px] leading-7 text-[#5f5952]">
          Pistilli lunghi, colore intenso e aroma pulito,
          selezionati secondo standard qualitativi elevati.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* CHIUSURA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-sm text-center border-t border-[#DDD8D1] pt-10">
          <p className="text-[10px] uppercase tracking-[0.38em] text-[#8C857C]">
            ZAFRANE
          </p>
        </div>
      </section>
    </main>
  );
}