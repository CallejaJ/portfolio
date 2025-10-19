"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Zap, Mail, Linkedin, Github } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const HeroSection = ({ language, setLanguage, t }: any) => {
  const personalInfo = {
    name: "Jorge Calleja Pérez",
    email: "callejaj@proton.me",
    linkedin: "https://www.linkedin.com/in/callejaj",
    github: "https://github.com/CallejaJ",
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Header fixed con idioma y tema - MEJORADO PARA MÓVIL */}
      <div className="fixed top-4 left-4 right-4 md:left-auto md:right-4 z-50 flex items-center justify-between md:justify-end gap-3">
        {/* Switch de idioma mejorado con más margen en móvil */}
        <div className="flex bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full p-1 shadow-lg border border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setLanguage("es")}
            className={`px-5 py-2.5 md:px-4 md:py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              language === "es"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            ES
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`px-5 py-2.5 md:px-4 md:py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              language === "en"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            EN
          </button>
        </div>
        <ThemeToggle />
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 mt-20 md:mt-0 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {t.title.split(" | ").map((role: string, index: number) => (
              <Badge
                key={index}
                variant="outline"
                className="text-sm py-1 px-3 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200"
              >
                {role}
              </Badge>
            ))}
          </div>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-4 max-w-4xl mx-auto leading-relaxed">
            {t.description}
          </p>

          <div className="relative overflow-hidden bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10 border border-blue-200 dark:border-blue-800 px-4 py-2.5 rounded-full inline-flex items-center gap-2 mb-8 font-semibold text-sm backdrop-blur-sm hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-400/5 dark:to-purple-400/5 opacity-50"></div>
            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400 relative z-10" />
            <span className="relative z-10 text-slate-700 dark:text-slate-200">
              {t.highlight}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <a href="#projects">{t.viewProjects}</a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-2 border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-400 dark:hover:border-slate-500 px-8 py-6 text-lg font-semibold backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <a
              href="mailto:callejaj@proton.me"
              className="flex items-center gap-2"
            >
              <Mail size={20} />
              {t.contact}
            </a>
          </Button>
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
            className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <Github size={20} />
            <span className="hidden sm:inline font-medium">GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <Linkedin size={20} />
            <span className="hidden sm:inline font-medium">LinkedIn</span>
          </a>
          <a
            href="mailto:callejaj@proton.me"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <Mail size={20} />
            <span className="hidden sm:inline font-medium">
              callejaj@proton.me
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
