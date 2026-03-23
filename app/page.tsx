export default function Home() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <img
          src="/zafrane-logo.png"
          alt="ZAFRANE logo"
          className="w-[560px] max-w-[85vw] h-auto"
        />
      </section>

      <section className="h-[50vh] flex items-start justify-center pt-16">
        <p className="text-sm uppercase tracking-[0.45em] text-neutral-500">
          Milano · Zafferano Super Negin
        </p>
      </section>
    </main>
  );
}