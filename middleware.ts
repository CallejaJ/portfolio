import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Negociación de contenido para agentes (gratis, sin Cloudflare Pro):
// si un agente pide la home con `Accept: text/markdown`, le servimos la
// representación markdown del sitio (/llms.txt) con el Content-Type adecuado.
// El HTML sigue siendo la respuesta por defecto para el resto de visitantes.
export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") || "";
  if (accept.includes("text/markdown")) {
    const url = request.nextUrl.clone();
    url.pathname = "/llms.txt";
    const response = NextResponse.rewrite(url);
    response.headers.set("Content-Type", "text/markdown; charset=utf-8");
    return response;
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
