import { SITE } from "@/lib/site";

export default function Maintenance() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <img src="/logo-dark.png" alt="ZAFRANE" width={880} height={386} className="h-auto w-[300px] max-w-[70vw]" />
      <p className="label mt-6">Milano</p>
      <h1 className="display mt-14 text-[36px] md:text-[44px]">Il sito è in aggiornamento.</h1>
      <p className="body mt-5 max-w-sm">
        Per informazioni scrivi a <a href={`mailto:${SITE.email}`} className="link">{SITE.email}</a>.
      </p>
    </main>
  );
}
