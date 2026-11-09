// Apertura centrata delle pagine interne.

export default function PageHero({
  label,
  title,
  intro,
  children,
}: {
  label: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="px-6 pb-20 pt-20 text-center md:pb-24 md:pt-28">
      <div className="mx-auto max-w-4xl">
        <img src="/mark.png" alt="" width={74} height={120} className="mx-auto mb-5 h-11 w-auto" />
        <p className="label">{label}</p>
        <h1 className="display mt-6 text-[46px] md:text-[72px]">{title}</h1>
        {intro && <p className="body mx-auto mt-8 max-w-xl">{intro}</p>}
        {children && <div className="mt-10 flex flex-wrap justify-center gap-4">{children}</div>}
      </div>
    </section>
  );
}
