"use client";

import { useState } from "react";
import ContactSection from "@/components/contact-cta";
import Footer from "@/components/footer";
import ExperienceSection from "@/components/experience";
import SkillsSection from "@/components/skills";
import ProjectsSection from "@/components/projects-section";
import HeroSection from "@/components/header-hero";
import { BlockchainBackground } from "@/components/blockchain-background";
import { translations } from "@/lib/translations";
import { projects } from "@/lib/projects-data";
import { skillCategories } from "@/lib/skills-data";

export default function JorgePortfolio() {
  const [language, setLanguage] = useState("es");
  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <BlockchainBackground />
      <HeroSection language={language} setLanguage={setLanguage} t={t} />
      <ProjectsSection t={t} projects={projects} />
      <SkillsSection t={t} skillCategories={skillCategories} />
      <ExperienceSection t={t} />
      <ContactSection t={t} />
      <Footer t={t} />
    </div>
  );
}
