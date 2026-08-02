import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-config";
import MusicosPage from "@/components/musicos-page";

type SP = { [key: string]: string | string[] | undefined };

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<SP>;
}): Promise<Metadata> {
  const sp = await searchParams;
  const rawRef = sp?.ref;
  const isRef = !!(Array.isArray(rawRef) ? rawRef[0] : rawRef);

  const title = isRef
    ? "Web a medida para artistas · 50% dto (99€) con Nitrile Affair"
    : "Webs para músicos y artistas desde 199€ | Jorge Calleja";

  const description = isRef
    ? "Vienes de parte de Nitrile Affair: 50% de descuento con el código NITRILE50. Tu música, vídeos, bolos y contacto en una web que es tuya. 99€ (antes 199€). Solo los primeros 9 artistas."
    : "Tu música vive dispersa en Spotify, Insta y YouTube. Te hago una web a medida —tuya para siempre— con tu música, vídeos, bolos y tienda en un solo link. Desde 199€.";

  const image = isRef ? "/og-musicos-ref.jpg" : "/og-musicos.jpg";

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/musicos` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/musicos`,
      siteName: "Jorge Calleja — Desarrollo Web",
      type: "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function Page() {
  return <MusicosPage />;
}
