import type { Metadata } from "next";
import { SITE_URL, CONTACT_EMAIL } from "@/lib/site-config";

// Datos estructurados (GEO): el servicio de optimización de CV,
// legible por Google y por las IAs (ChatGPT, Perplexity, etc.)
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Optimización de CV para ATS",
  serviceType: "Redacción y optimización de currículum",
  description:
    "Optimización de currículums para pasar los filtros ATS: formato parseable, keywords de la oferta y puntuación medible antes/después. Análisis ATS gratuito en 24h.",
  url: `${SITE_URL}/cv`,
  provider: {
    "@type": "Person",
    name: "Jorge Calleja Pérez",
    email: CONTACT_EMAIL,
    telephone: "+34649530022",
    sameAs: [
      "https://www.linkedin.com/in/callejaj",
      "https://github.com/CallejaJ",
    ],
  },
  areaServed: "España",
  offers: [
    { "@type": "Offer", name: "CV que pasa el filtro", price: "49", priceCurrency: "EUR" },
    { "@type": "Offer", name: "CV + Carta", price: "79", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Pack Visibilidad Total", price: "129", priceCurrency: "EUR" },
  ],
};

export const metadata: Metadata = {
  title: "CVs que pasan los ATS · Análisis gratis en 24h | Jorge Calleja",
  description:
    "¿Envías currículums y nadie te llama? El 75% de los CVs los descarta un software antes de que los vea una persona. Análisis ATS gratuito en 24h y CV optimizado desde 49€.",
  alternates: { canonical: `${SITE_URL}/cv` },
  openGraph: {
    title: "CVs que pasan los ATS · Análisis gratis en 24h",
    description:
      "El 75% de los CVs los descarta un software antes de que los vea una persona. Descubre gratis si el tuyo pasa el filtro.",
    url: `${SITE_URL}/cv`,
    siteName: "Jorge Calleja — Desarrollo Web",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image-cv.jpg",
        width: 1200,
        height: 630,
        alt: "CVs que pasan los ATS — análisis gratis en 24h",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CVs que pasan los ATS · Análisis gratis en 24h",
    description:
      "El 75% de los CVs los descarta un software antes de que los vea una persona. Descubre gratis si el tuyo pasa el filtro.",
    images: ["/og-image-cv.jpg"],
  },
  keywords: [
    "cv que pase los ats",
    "optimizar cv ats",
    "por qué no me llaman de las ofertas",
    "curriculum ats españa",
    "análisis cv gratis",
    "redacción de curriculum profesional",
  ],
};

export default function CvLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </>
  );
}
