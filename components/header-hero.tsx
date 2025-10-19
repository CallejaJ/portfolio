// ============================================
// COMPONENTE: Header/Hero
// ============================================

"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Zap } from "lucide-react";
import { Mail, Linkedin, Github } from "lucide-react";

const HeroSection = ({ language, setLanguage, t }: any) => {
  const personalInfo = {
    name: "Jorge Calleja Pérez",
    email: "callejaj@proton.me",
    linkedin: "https://www.linkedin.com/in/callejaj",
    github: "https://github.com/CallejaJ",
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 mt-12 md:mt-0 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {t.title.split(" | ").map((role: string, index: number) => (
              <Badge
                key={index}
                variant="outline"
                className="text-sm py-1 px-3"
              >
                {role}
              </Badge>
            ))}
          </div>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-4 max-w-4xl mx-auto leading-relaxed">
            {t.description}
          </p>

          <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-foreground px-4 py-2.5 rounded-full inline-flex items-center gap-2 mb-8 font-semibold text-sm backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-50"></div>
            <Zap className="w-4 h-4 text-primary relative z-10" />
            <span className="relative z-10">{t.highlight}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="#projects">{t.viewProjects}</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-8 py-3 text-lg font-semibold bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="mailto:callejaj@proton.me">{t.contact}</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="flex bg-white/20 backdrop-blur-sm rounded-full p-1">
            <button
              onClick={() => setLanguage("es")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                language === "es"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                language === "en"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              EN
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <Github size={20} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={20} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="mailto:callejaj@proton.me"
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <Mail size={20} />
            <span className="hidden sm:inline">callejaj@proton.me</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
