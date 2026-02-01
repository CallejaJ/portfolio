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
      {/* Header fixed removido - Ahora en components/header.tsx */}

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
                className="text-sm py-1 px-3 border-border text-foreground"
              >
                {role}
              </Badge>
            ))}
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-4xl mx-auto leading-relaxed">
            {t.description}
          </p>

          <div className="relative overflow-hidden bg-gradient-to-r from-secondary/10 to-primary/10 border border-border px-4 py-3 md:py-2.5 rounded-2xl md:rounded-full inline-flex items-center gap-3 md:gap-2 mb-8 font-semibold text-sm backdrop-blur-sm hover:border-primary transition-all duration-300 max-w-xs md:max-w-none mx-auto text-left md:text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-400/5 dark:to-purple-400/5 opacity-50"></div>
            <div className="bg-card/50 p-1.5 rounded-full shrink-0">
              <Zap className="w-4 h-4 text-primary relative z-10" />
            </div>
            <span className="relative z-10 text-foreground leading-tight">
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
            className="border-2 border-border bg-card/80 text-foreground hover:bg-muted/50 hover:border-primary px-8 py-6 text-lg font-semibold backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
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
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github size={20} />
            <span className="hidden sm:inline font-medium">GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin size={20} />
            <span className="hidden sm:inline font-medium">LinkedIn</span>
          </a>
          <a
            href="mailto:callejaj@proton.me"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
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
