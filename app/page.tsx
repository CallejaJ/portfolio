"use client";

import { useState } from "react";
import ContactSection from "@/components/contact-cta";
import Footer from "@/components/footer";
import ProjectsSection from "@/components/projects-section";
import HeroSection from "@/components/header-hero";
import PainPointsSection from "@/components/pain-points";
import ServicesSection from "@/components/services";
import ProcessSection from "@/components/process";
import FaqSection from "@/components/faq";
import FloatingWhatsApp from "@/components/whatsapp-button";
import { Header } from "@/components/header";
import {
  LiftoffBackground,
  RadarBackground,
  GrowthBackground,
  CombinedBackground,
} from "@/components/animated-backgrounds";
import { translations } from "@/lib/translations";
import { projects } from "@/lib/projects-data";

// Proyectos relevantes para pymes y negocios locales (orden de aparición)
const LANDING_PROJECT_IDS = [12, 18, 14, 13, 1, 11];
const landingProjects = LANDING_PROJECT_IDS.map(
  (id) => projects.find((p) => p.id === id)!
).filter(Boolean);

// ── SELECTOR DE FONDO (temporal, para elegir) ──
// Cuando decidas: deja solo el componente elegido y borra el selector
const backgrounds = {
  liftoff: { component: LiftoffBackground, label: "1 Despegue" },
  radar: { component: RadarBackground, label: "2 Radar" },
  growth: { component: GrowthBackground, label: "3 Gráficas" },
  combined: { component: CombinedBackground, label: "4 Combinado" },
} as const;
type BgKey = keyof typeof backgrounds;

export default function JorgeLanding() {
  const [language, setLanguage] = useState("es");
  const [bg, setBg] = useState<BgKey>("growth");
  const t = translations[language as keyof typeof translations];
  const Background = backgrounds[bg].component;

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Background key={bg} />
      <Header language={language} setLanguage={setLanguage} t={t} />
      <HeroSection t={t} />
      <PainPointsSection t={t} />
      <ServicesSection t={t} />
      <ProcessSection t={t} />
      <ProjectsSection t={t} projects={landingProjects} />
      <FaqSection t={t} />
      <ContactSection t={t} language={language} />
      <Footer t={t} />
      <FloatingWhatsApp t={t} />

      {/* ── Selector temporal de fondos: BORRAR al decidir ── */}
      {/*
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-1 rounded-full border border-border bg-card/90 backdrop-blur-sm p-1 shadow-xl">
        {(Object.keys(backgrounds) as BgKey[]).map((key, i) => (
          <button
            key={key}
            onClick={() => setBg(key)}
            title={backgrounds[key].label}
            className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
              bg === key
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      */}
    </div>
  );
}
