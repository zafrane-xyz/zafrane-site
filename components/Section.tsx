// Sezione centrata in stile Atelier. tone: fondo crema, sabbia o bordeaux.

export default function Section({
  title,
  intro,
  children,
  id,
  tone = "paper",
  italic = false,
}: {
  title?: string;
  intro?: string;
  children?: React.ReactNode;
  id?: string;
  tone?: "paper" | "sand" | "wine";
  italic?: boolean;
}) {
  const bg = tone === "sand" ? "bg-[var(--sand)]" : tone === "wine" ? "bg-[var(--wine)] text-[var(--paper)]" : "";
  return (
    <section id={id} className={`scroll-mt-32 px-6 py-24 text-center md:py-28 ${bg}`}>
      <div className="mx-auto max-w-5xl">
        {title && (
          <h2 className={`display mx-auto max-w-3xl text-[36px] md:text-[48px] ${italic ? "font-medium italic" : ""}`}>{title}</h2>
        )}
        {intro && <p className={`mx-auto mt-6 max-w-xl text-[17px] leading-[1.7] ${tone === "wine" ? "text-[#e6d9c6]" : "text-[var(--ink-soft)]"}`}>{intro}</p>}
        {children && <div className={title || intro ? "mt-14" : ""}>{children}</div>}
      </div>
    </section>
  );
}
