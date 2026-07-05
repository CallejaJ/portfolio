import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de Cookies | Jorge Calleja",
  description:
    "Política de cookies de jorgecalleja — desarrollo web en Málaga. Esta web no usa cookies de rastreo.",
};

export default function CookiesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        ← Volver a la página principal
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-8">
        Política de Cookies
      </h1>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p className="text-foreground font-medium">
          La versión corta: esta web no usa cookies de rastreo, de publicidad ni
          de analítica. Por eso no ves ningún banner de cookies.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">
          1. ¿Qué son las cookies?
        </h2>
        <p>
          Las cookies son pequeños archivos que los sitios web guardan en tu
          navegador para recordar información sobre tu visita: desde tus
          preferencias hasta identificadores usados para publicidad.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">
          2. Qué utiliza esta web
        </h2>
        <p>
          Esta web únicamente guarda en tu navegador (localStorage) tu
          preferencia de tema claro u oscuro. Este almacenamiento es
          estrictamente técnico, no permite identificarte, no se comparte con
          nadie y está exento del deber de consentimiento según el criterio de
          la AEPD para almacenamiento técnico necesario.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">
          3. Servicios de terceros
        </h2>
        <p>
          Si haces clic en el botón de WhatsApp, pasarás a la aplicación o web
          de WhatsApp (Meta), que aplica sus propias políticas de cookies y
          privacidad. Lo mismo ocurre con los enlaces a LinkedIn o GitHub. Esta
          web no carga scripts de esos servicios: solo son enlaces.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">
          4. Si esto cambia
        </h2>
        <p>
          Si en el futuro incorporo herramientas de analítica (por ejemplo,
          Google Analytics), actualizaré esta política y añadiré un banner de
          consentimiento previo conforme al RGPD y a la Guía de Cookies de la
          AEPD antes de activar ninguna cookie no técnica.
        </p>

        <p className="pt-6 text-sm">
          Última actualización: julio de 2026 · {SITE_URL} · Titular:{" "}
          {LEGAL.name} ({LEGAL.email})
        </p>
      </div>
    </main>
  );
}
