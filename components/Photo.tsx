// Mostra una foto reale se il percorso è impostato in lib/site.ts (PHOTOS), altrimenti l'illustrazione di riserva.

export default function Photo({
  src,
  alt,
  fallback,
  className = "",
}: {
  src?: string;
  alt: string;
  fallback: React.ReactNode;
  className?: string;
}) {
  if (!src) return <>{fallback}</>;
  return <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${className}`} />;
}
