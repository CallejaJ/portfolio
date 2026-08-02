"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Music,
  Disc3,
  Clapperboard,
  Ticket,
  Aperture,
  Shirt,
  Send,
  Unlink,
  Shuffle,
  Frown,
  Smartphone,
  ArrowRight,
  Check,
  ArrowLeft,
} from "lucide-react";

// Iconos por posición (más originales y a tono con la escena musical)
const PAIN_ICONS = [Unlink, Shuffle, Frown];
const FEATURE_ICONS = [Disc3, Clapperboard, Ticket, Aperture, Shirt, Send];
import { FaroLogo } from "@/components/logo";
import { FaroBackground } from "@/components/animated-backgrounds";
import { ThemeToggle } from "@/components/theme-toggle";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import { getWhatsAppLink } from "@/lib/site-config";

const NITRILE_URL = "https://nitrileaffair.com";

const copy = {
  es: {
    whatsappMessage:
      "Hola Jorge, soy músico/artista y me interesa una web para mi proyecto.",
    referral: {
      banner: "Vienes de parte de Nitrile Affair · 50% de descuento aplicado",
      waMessage:
        "Hola Jorge, vengo de Nitrile Affair con el código NITRILE50. Quiero una web para mi proyecto musical (paquete básico con el 50% de descuento).",
      priceNote: "Código NITRILE50 · 50% dto · 99€ (antes 199€)",
      base: "199€",
      price: "99€",
      per: "código NITRILE50 · básico",
      note: "Oferta para artistas de lanzamiento · plazas limitadas · aplica al paquete básico.",
    },
    nav: { example: "Ver ejemplo", back: "Web principal" },
    hero: {
      badge: "Webs para músicos y artistas",
      titleA: "Tu música merece más",
      titleB: "que un link de Spotify.",
      subtitle:
        "Una web a medida —tuya para siempre— con tu música, tus vídeos, tus bolos y tu tienda en un solo enlace que controlas tú.",
      priceNote: "Desde 199€ · a medida",
      ctaPrimary: "Escríbeme por WhatsApp",
      ctaSecondary: "Ver un ejemplo real",
    },
    pain: {
      title: "Hoy tu carrera vive alquilada.",
      subtitle:
        "Spotify, Instagram y YouTube son de ellos, no tuyos. Y ese es el problema.",
      items: [
        {
          title: "No eres dueño de tu audiencia",
          desc: "Un cambio de algoritmo o un cierre de cuenta y desapareces, sin avisar y sin control.",
        },
        {
          title: "Todo está disperso",
          desc: "Tu música por aquí, los vídeos por allá, los bolos en otro sitio. Nadie encuentra todo junto.",
        },
        {
          title: "No transmites profesionalidad",
          desc: "Un enlace de perfil no es lo mismo que una web propia. La diferencia se nota a la hora de que te contraten.",
        },
      ],
    },
    features: {
      title: "Una web. Todo tu mundo.",
      subtitle:
        "Un solo enlace, tuyo, con todo lo que necesita quien quiere escucharte o contratarte.",
      items: [
        { title: "Tu música", desc: "Reproductor con tus tracks y enlaces a todas las plataformas." },
        { title: "Tus vídeos", desc: "Videoclips y sesiones en directo integrados." },
        { title: "Tus bolos", desc: "Fechas y próximos conciertos, siempre al día." },
        { title: "Tu galería", desc: "Fotos de directo y prensa para promotores y medios." },
        { title: "Tu tienda", desc: "Merch y entradas, con la venta en tus manos." },
        { title: "Tu contacto", desc: "Formulario de booking directo, sin intermediarios." },
      ],
    },
    example: {
      badge: "Ejemplo real",
      title: "Nitrile Affair",
      desc: "Web hecha a medida para un proyecto de techno de Málaga: música, galería, vídeos, directos y contacto, todo en un enlace propio y rápido en el móvil.",
      cta: "Visitar nitrileaffair.com",
      tags: ["Techno · Vinilo", "Reproductor propio", "Móvil", "Contacto directo"],
    },
    pricing: {
      title: "Precio claro, sin sorpresas",
      price: "199€",
      per: "desde · web a medida",
      includes: [
        "Diseño único para tu proyecto (nada de plantillas)",
        "Rápida y perfecta en el móvil",
        "Tu música, vídeos, bolos, galería y contacto",
        "Tuya: dominio y web a tu nombre",
        "Trato directo conmigo, sin intermediarios",
      ],
      cta: "Hablamos de tu proyecto",
      note: "Trato directo. Te respondo yo, no un comercial.",
    },
    footer: { back: "Volver a la web principal", rights: "Todos los derechos reservados." },
  },
  en: {
    whatsappMessage:
      "Hi Jorge, I'm a musician/artist and I'm interested in a website for my project.",
    referral: {
      banner: "You come from Nitrile Affair · 50% discount applied",
      waMessage:
        "Hi Jorge, I come from Nitrile Affair with code NITRILE50. I'd like a website for my music project (basic package, 50% off).",
      priceNote: "Code NITRILE50 · 50% off · €99 (was €199)",
      base: "€199",
      price: "€99",
      per: "code NITRILE50 · basic",
      note: "Launch offer for artists · limited spots · applies to the basic package.",
    },
    nav: { example: "See example", back: "Main site" },
    hero: {
      badge: "Websites for musicians & artists",
      titleA: "Your music deserves more",
      titleB: "than a Spotify link.",
      subtitle:
        "A custom website —yours forever— with your music, videos, gigs and store in one single link that you control.",
      priceNote: "From €199 · custom-built",
      ctaPrimary: "Message me on WhatsApp",
      ctaSecondary: "See a real example",
    },
    pain: {
      title: "Right now your career lives on rent.",
      subtitle:
        "Spotify, Instagram and YouTube are theirs, not yours. And that's the problem.",
      items: [
        {
          title: "You don't own your audience",
          desc: "One algorithm change or a banned account and you vanish — no warning, no control.",
        },
        {
          title: "Everything is scattered",
          desc: "Your music here, videos there, gigs somewhere else. Nobody finds it all in one place.",
        },
        {
          title: "It doesn't look professional",
          desc: "A profile link isn't a real website. That difference matters when someone wants to book you.",
        },
      ],
    },
    features: {
      title: "One site. Your whole world.",
      subtitle:
        "A single link, yours, with everything a fan or promoter needs to listen or book you.",
      items: [
        { title: "Your music", desc: "A player with your tracks and links to every platform." },
        { title: "Your videos", desc: "Music videos and live sessions built in." },
        { title: "Your gigs", desc: "Tour dates and upcoming shows, always current." },
        { title: "Your gallery", desc: "Live and press photos for promoters and media." },
        { title: "Your store", desc: "Merch and tickets, with the sale in your hands." },
        { title: "Your contact", desc: "A direct booking form, no middlemen." },
      ],
    },
    example: {
      badge: "Real example",
      title: "Nitrile Affair",
      desc: "A custom site for a techno project from Málaga: music, gallery, videos, live sets and contact — all in one link, fast on mobile.",
      cta: "Visit nitrileaffair.com",
      tags: ["Techno · Vinyl", "Custom player", "Mobile-ready", "Direct contact"],
    },
    pricing: {
      title: "Clear price, no surprises",
      price: "€199",
      per: "from · custom-built",
      includes: [
        "Unique design for your project (no templates)",
        "Fast and perfect on mobile",
        "Your music, videos, gigs, gallery and contact",
        "Yours: domain and site in your name",
        "You deal directly with me, no middlemen",
      ],
      cta: "Let's talk about your project",
      note: "Direct contact. You talk to me, not a salesperson.",
    },
    footer: { back: "Back to the main site", rights: "All rights reserved." },
  },
};

export default function MusicosPage() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [referred, setReferred] = useState(false);
  const t = copy[lang];
  const year = new Date().getFullYear();

  useEffect(() => {
    const r = new URLSearchParams(window.location.search).get("ref");
    if (r) setReferred(true);
  }, []);

  const wa = getWhatsAppLink(
    referred ? t.referral.waMessage : t.whatsappMessage
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FaroBackground />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <FaroLogo size={36} className="transition-transform group-hover:scale-110" />
            <span className="font-bold tracking-tight">
              Jorge{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Calleja
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex bg-card/50 backdrop-blur-sm rounded-full p-0.5 border border-border">
              {(["es", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    lang === l
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <ThemeToggle />
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#1fbd5a] text-white text-sm font-semibold transition-all hover:scale-105"
            >
              <WhatsAppIcon size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-28 pb-16 px-5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
            {referred && (
              <div className="mb-4 flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/15 border border-green-500/40 text-green-300 text-xs font-bold">
                  <Check size={14} />
                  {t.referral.banner}
                </span>
              </div>
            )}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-xs font-semibold text-secondary mb-6">
              <Music size={14} />
              {t.hero.badge}
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              {t.hero.titleA}{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {t.hero.titleB}
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1fbd5a] text-white font-semibold shadow-lg transition-all hover:scale-105"
              >
                <WhatsAppIcon size={18} />
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#ejemplo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/50 backdrop-blur-sm font-semibold hover:border-primary transition-all"
              >
                {t.hero.ctaSecondary}
                <ArrowRight size={18} />
              </a>
            </div>
            <p className="mt-4 text-sm font-semibold text-primary">
              {referred ? t.referral.priceNote : t.hero.priceNote}
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] max-w-sm mx-auto rounded-3xl overflow-hidden border border-border shadow-2xl">
              <Image
                src="/images/music-artist.webp"
                alt="Músico"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Pain */}
      <section className="relative py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t.pain.title}</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{t.pain.subtitle}</p>
          </div>
          <div className="space-y-12 mt-14">
            {t.pain.items.map((item, i) => {
              const Icon = PAIN_ICONS[i];
              const images = [
                "/images/music-pain-1.webp",
                "/images/music-pain-2.webp",
                "/images/music-pain-3.webp",
              ];
              const reverse = i % 2 === 1;
              return (
                <div
                  key={i}
                  className="grid md:grid-cols-2 gap-6 md:gap-10 items-center"
                >
                  <div className={reverse ? "md:order-2" : ""}>
                    <div className="relative aspect-[4/5] max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden border border-border shadow-xl">
                      <Image
                        src={images[i]}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                    </div>
                  </div>
                  <div className={reverse ? "md:order-1" : ""}>
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t.features.title}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{t.features.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.features.items.map((item, i) => {
              const Icon = FEATURE_ICONS[i];
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-secondary mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Example — Nitrile Affair */}
      <section id="ejemplo" className="relative py-16 px-5 scroll-mt-20">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 text-xs font-semibold text-secondary mb-4">
              {t.example.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t.example.title}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t.example.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {t.example.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={NITRILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold transition-all hover:scale-105"
            >
              {t.example.cta}
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Browser mockup */}
          <a
            href={NITRILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-muted/40 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-muted-foreground truncate">nitrileaffair.com</span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/nitrile-affair.webp"
                  alt="Nitrile Affair — web para músico"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section className="relative py-16 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-3xl border border-border bg-card/60 backdrop-blur-sm p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{t.pricing.title}</h2>
            <div className="mt-5 flex items-end justify-center gap-2">
              {referred && (
                <span className="mb-2 text-2xl font-bold text-muted-foreground line-through">
                  {t.referral.base}
                </span>
              )}
              <span className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {referred ? t.referral.price : t.pricing.price}
              </span>
              <span className="mb-2 text-sm text-muted-foreground">
                {referred ? t.referral.per : t.pricing.per}
              </span>
            </div>
            {referred && (
              <p className="mt-3 text-xs font-semibold text-green-400">
                {t.referral.note}
              </p>
            )}
            <ul className="mt-7 space-y-3 text-left max-w-md mx-auto">
              {t.pricing.includes.map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={18} className="mt-0.5 text-green-400 shrink-0" />
                  <span className="text-sm text-muted-foreground">{line}</span>
                </li>
              ))}
            </ul>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1fbd5a] text-white font-semibold shadow-lg transition-all hover:scale-105"
            >
              <WhatsAppIcon size={18} />
              {t.pricing.cta}
            </a>
            <p className="mt-4 text-xs text-muted-foreground">{t.pricing.note}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border">
        <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            {t.footer.back}
          </Link>
          <p className="text-xs text-muted-foreground">
            &copy; {year} Jorge Calleja Pérez. {t.footer.rights}
          </p>
          <div className="flex items-center gap-2">
            <Smartphone size={14} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Málaga · Worldwide</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
