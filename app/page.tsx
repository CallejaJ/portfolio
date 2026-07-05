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
import { BlockchainBackground } from "@/components/blockchain-background";
import { translations } from "@/lib/translations";
import { projects } from "@/lib/projects-data";

// Proyectos relevantes para pymes y negocios locales (orden de aparición)
const LANDING_PROJECT_IDS = [12, 18, 14, 13, 1, 11];
const landingProjects = LANDING_PROJECT_IDS.map(
  (id) => projects.find((p) => p.id === id)!
).filter(Boolean);

export default function JorgeLanding() {
  const [language, setLanguage] = useState("es");
  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen bg-background">
      <BlockchainBackground />
      <Header language={language} setLanguage={setLanguage} t={t} />
      <HeroSection t={t} />
      <PainPointsSection t={t} />
      <ServicesSection t={t} />
      <ProcessSection t={t} />
      <ProjectsSection t={t} projects={landingProjects} />
      <FaqSection t={t} />
      <ContactSection t={t} language={language} />
   