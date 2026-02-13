"use client";

import { useState } from "react";
import ContactSection from "@/components/contact-cta";
import Footer from "@/components/footer";
import ExperienceSection from "@/components/experience";
import SkillsSection from "@/components/skills";
import ProjectsSection from "@/components/projects-section";
import HeroSection from "@/components/header-hero";
import { Header } from "@/components/header";
import { BlockchainBackground } from "@/components/blockchain-background";
import { translations } from "@/lib/translations";
import { projects } from "@/lib/projects-data";
import { skillCategories } from "@/lib/skills-data";

export default function JorgePortfolio() {
  const [language, setLanguage] = useState("es");
  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen bg-background">
      <BlockchainBackground />
      <Header language={language} setLanguage={setLanguage} t={t} />
      <HeroSection t={t} language={language} />
      <ProjectsSection t={t} projects={projects} />
      <SkillsSection t={t} skillCategories={skillCategories} />
      <ExperienceSection t={t} />
      <ContactSection t={t} language={language} />
      <Footer t={t} />
    </div>
  );
}
