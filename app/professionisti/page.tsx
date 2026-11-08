import { redirect } from "next/navigation";

// La pagina per i professionisti si chiama ora Ristorazione.
export default function Professionisti() {
  redirect("/ristorazione");
}
