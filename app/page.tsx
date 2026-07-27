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
import CaseStudySection from "@/components/case-study";
import TestimonialsSection from "@/components/testimonials";
import AboutSection from "@/components/about";
import LeadMagnetSection from "@/components/lead-magnet";
import AuditFormSection from "@/components/audit-form";
import MobileCtaBar from "@/components/mobile-cta-bar";
import CookieConsent from "@/components/cookie-consent";
import WhatsAppTracker from "@/components/whatsapp-tracker";
import AnalyzerSection from "@/components/analyzer";
import { Header } from "@/components/header";
import { FaroBackground } from "@/components/animated-backgrounds";
import { translations } from "@/lib/translations";
import { projects } from "@/lib/projects-data";

// Proyectos relevantes para pymes y negocios locales (orden de aparición)
const LANDING_PROJECT_IDS = [12, 18, 14, 23, 13, 1, 24, 11, 20, 10, 21, 22];
const landingProjects = LANDING_PROJECT_IDS.map(
  (id) => projects.find((p) => p.id === id)!
).filter(Boolean);

export default function JorgeLanding() {
  const [language, setLanguage] = useState("es");
  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FaroBackground />
      <Header language={language} setLanguage={setLanguage} t={t} />
      <HeroSection t={t} />
      <AnalyzerSection t={t} />
      <PainPointsSection t={t} />
      <ServicesSection t={t} />
      <ProcessSection t={t} />
      <ProjectsSection t={t} projects={landingProjects} />
      <CaseStudySection t={t} />
      <TestimonialsSection t={t} />
      <AboutSection t={t} />
      <LeadMagnetSection t={t} />
      <FaqSection t={t} />
      <AuditFormSection t={t} />
      <ContactSection t={t} language={language} />
      <Footer t={t} />
      <FloatingWhatsApp t={t} />
      <MobileCtaBar t={t} />
      <CookieConsent t={t} />
      <WhatsAppTracker />
    </div>
  );
}
