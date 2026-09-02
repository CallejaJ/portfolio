import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-config";
import MusicosPage from "@/components/musicos-page";

export const metadata: Metadata = {
  title: "Webs para músicos y artistas desde 199€ | Jorge Calleja",
  description:
    "Tu música vive dispersa en Spotify, Insta y YouTube. Te hago una web a medida —tuya para siempre— con tu música, vídeos, bolos y tienda en un solo link. Desde 199€.",
  alternates: { canonical: `${SITE_URL}/musicos` },
  openGraph: {
    title: "Webs para músicos y artistas desde 199€",
    description:
      "Deja de depender de las plataformas. Tu música, tus vídeos y tus bolos en una web que es tuya. Desde 199€.",
    url: `${SITE_URL}/musicos`,
    siteName: "Jorge Calleja — Desarrollo Web",
    type: "website",
    images: [{ url: "/og-musicos.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webs para músicos y artistas desde 199€",
    description:
      "Tu música, tus vídeos y tus bolos en una web que es tuya. Desde 199€.",
    images: ["/og-musicos.jpg"],
  },
};

export default function Page() {
  return <MusicosPage />;
}
