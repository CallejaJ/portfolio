import { redirect } from "next/navigation";

// URL corta y memorable para redes: jorgecalleja.dev/analiza
// Redirige directamente a la sección del analizador en la home.
export default function AnalizaRedirect() {
  redirect("/#analizar");
}
