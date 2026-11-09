// Sezione editoriale: nome nel margine sinistro, contenuto sulle colonne di destra.

export default function Section({
  label,
  children,
  id,
  className = "",
  rule = true,
}: {
  label: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
  rule?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-24 px-6 ${className}`}>
      <div className={`mx-auto grid max-w-6xl gap-6 py-24 md:grid-cols-12 md:gap-8 md:py-32 ${rule ? "border-t border-[var(--line)]" : ""}`}>
        <div className="md:col-span-3">
          <h2 className="label md:sticky md:top-28">{label}</h2>
        </div>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}
