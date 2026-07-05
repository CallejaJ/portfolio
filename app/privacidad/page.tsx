import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidad | Jorge Calleja",
  description:
    "Política de privacidad y protección de datos de jorgecalleja — desarrollo web en Málaga.",
};

export default function PrivacidadPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        ← Volver a la página principal
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-8">
        Política de Privacidad
      </h1>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          En esta página te explico, de forma clara y sin letra pequeña, qué
          datos personales trato cuando contactas conmigo y qué hago con ellos,
          conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018
          (LOPDGDD).
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">
          1. Responsable del tratamiento
        </h2>
        <p>
          {LEGAL.name}, NIF {LEGAL.nif}, con domicilio en {LEGAL.city}. Email de
          contacto: {LEGAL.email}. Teléfono: {LEGAL.phone}.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">
          2. Qué datos trato y cómo los obtengo
        </h2>
        <p>
          Esta web no tiene formularios ni sistemas de registro. Los únicos
          datos personales que trato son los que tú me facilitas voluntariamente
          al contactarme por WhatsApp o por email: tu nombre, tu número de
          teléfono o dirección de email, y la información que incluyas en tu
          mensaje (por ejemplo, la dirección de tu página web).
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">
          3. Para qué los uso (finalidad y legitimación)
        </h2>
        <p>
          Uso tus datos exclusivamente para responder a tu consulta, realizar la
          auditoría que me solicites y, en su caso, preparar un presupuesto. La
          base legal es la aplicación de medidas precontractuales a petición
          tuya (art. 6.1.b RGPD) y mi interés legítimo en responder a las
          consultas recibidas (art. 6.1.f RGPD). No envío publicidad ni
          newsletters, y no uso tus datos para ninguna otra finalidad.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">
          4. Cuánto tiempo los conservo
        </h2>
        <p>
          Conservo las conversaciones y datos de contacto mientras dure la
          relación comercial o la conversación, y como máximo durante los plazos
          de prescripción legal aplicables. Si me lo pides, los elimino antes.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">
          5. A quién se comunican tus datos
        </h2>
        <p>
          No cedo tus datos a terceros. Ten en cuenta que si me contactas por
          WhatsApp, el servicio lo presta WhatsApp Ireland Limited (Meta), que
          tratará tus datos conforme a su propia política de privacidad. Esta
          web está alojada en Vercel Inc. (EE. UU.), adherida a las cláusulas
          contractuales tipo de la UE para transferencias internacionales.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">
          6. Tus derechos
        </h2>
        <p>
          Puedes ejercer en cualquier momento tus derechos de acceso,
          rectificación, supresión, oposición, limitación del tratamiento y
          portabilidad escribiendo a {LEGAL.email}. Si consideras que no he
          tratado tus datos correctamente, puedes reclamar ante la Agencia
          Española de Protección de Datos (aepd.es).
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">
          7. Seguridad
        </h2>
        <p>
          Esta web se sirve íntegramente bajo HTTPS y no almacena datos
          personales en bases de datos propias.
        </p>

        <p className="pt-6 text-sm">
          Última actualización: julio de 2026 · {SITE_URL}
        </p>
      </div>
    </main>
  );
}
