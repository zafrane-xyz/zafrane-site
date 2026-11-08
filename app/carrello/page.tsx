import { redirect } from "next/navigation";

// Il carrello non esiste più: lo shop è in manutenzione. Questa pagina rimanda allo shop.
export default function Carrello() {
  redirect("/shop");
}
