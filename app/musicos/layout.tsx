import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-config";

// Datos estructurados específicos para el nicho de músicos (GEO + SEO).
const musicJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diseño web para músicos y artistas",
  serviceType: "Diseño y desarrollo de páginas web para músicos",
  description:
    "Webs a medida para músicos y artistas: tu música, vídeos, bolos, galería y tienda en un solo link que es tuyo. Rápidas, para móvil y desde 199€.",
  url: `${SITE_URL}/musicos`,
  areaServed: ["España", "Worldwide"],
  offers: {
    "@type": "Offer",
    price: "199",
    priceCurrency: "EUR",
    description: "Web a medida para artistas desde 199€",
  },
  provider: {
    "@type": "Person",
    name: "Jorge Calleja Pérez",
    jobTitle: "Desarrollador Web",
    url: SITE_URL,
  },
};

export const metadata: Metadata = {
  title: "Webs para músicos y artistas desde 199€ | Jorge Calleja",
  description:
    "Tu música vive dispersa en Spotify, Insta y YouTube. Te hago una web a medida —tuya para siempre— con tu música, vídeos, bolos y tienda en un solo link. Desde 199€. Websites for musicians.",
  alternates: {
    canonical: `${SITE_URL}/musicos`,
  },
  openGraph: {
    title: "Webs para músicos y artistas desde 199€",
    description:
      "Deja de depender de las plataformas. Tu música, tus vídeos y tus bolos en una web que es tuya. Desde 199€.",
    url: `${SITE_URL}/musicos`,
    siteName: "Jorge Calleja — Desarrollo Web",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function MusicosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(musicJsonLd) }}
      />
      {children}
    </>
  );
}
