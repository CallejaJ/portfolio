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
          La versión corta: esta web solo usa una cookie de medición de Meta
          (Facebook), y únicamente si tú la aceptas en el banner. Si la rechazas,
          no se activa nada. Tú decides.
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
          <strong className="text-foreground">Cookie técnica:</strong> guardo en
          tu navegador (localStorage) tu preferencia de tema claro/oscuro y tu
          decisión sobre las cookies. Es almacenamiento estrictamente técnico, no
          te identifica y está exento de consentimiento según la AEPD.
        </p>
        <p>
          <strong className="text-foreground">Cookie de medición (Meta Pixel):</strong>{" "}
          solo si aceptas en el banner, cargo el píxel de Meta (Facebook), que
          instala cookies para medir la eficacia de mis anuncios y mostrarme
          estadísticas anónimas de las visitas que llegan desde ellos. Si
          rechazas, el píxel no se carga en absoluto. Puedes cambiar tu decisión
          borrando los datos de navegación de este sitio.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">
          3. Servicios de terceros
        </h2>
        <p>
          El píxel de medición lo presta Meta Platforms Ireland Ltd., que trata
          los datos conforme a su propia política de privacidad. Si haces clic en
          el botón de WhatsApp pasarás a WhatsApp (Meta); lo mismo con los enlaces
          a LinkedIn o GitHub. Esos son solo enlaces, no cargan scripts.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">
          4. Base legal
        </h2>
        <p>
          La cookie de Meta se activa exclusivamente con tu consentimiento previo
          (art. 6.1.a RGPD), que otorgas al pulsar "Aceptar" en el banner. Puedes
          retirarlo en cualquier momento. La cookie técnica se ampara en el
          interés legítimo de que la web funcione correctamente.
        </p>

        <p className="pt-6 text-sm">
          Última actualización: julio de 2026 · {SITE_URL} · Titular:{" "}
          {LEGAL.name} ({LEGAL.email})
        </p>
      </div>
    </main>
  );
}
