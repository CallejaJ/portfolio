"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/site-config";
import { WhatsAppIcon } from "./whatsapp-button";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const HeroSection = ({ t }: any) => {
  return (
    <section className="min-h-screen w-full relative overflow-hidden px-4 sm:px-6">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Animated gradient blobs */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto text-center relative z-10 pt-36 pb-16 md:pt-44 md:pb-24"
      >
        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl lg:text-[4.2rem] font-bold mb-6 leading-tight tracking-tight"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {t.title}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          {t.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-4 mb-5 px-2"
        >
          <Button
            size="lg"
            asChild
            className="bg-[#25D366] hover:bg-[#1fbd5a] text-white border-0 px-8 py-6 text-lg font-semibold shadow-[0_8px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            <a
              href={getWhatsAppLink(t.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <WhatsAppIcon size={22} />
              {t.contact}
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-2 border-border bg-card/80 text-foreground hover:bg-muted/50 hover:border-primary px-8 py-6 text-lg font-semibold backdrop-blur-sm shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            <a href="#projects" className="flex items-center justify-center gap-2">
              {t.viewProjects}
              <ArrowRight size={18} />
            </a>
          </Button>
        </motion.div>

        {/* Texto bajo los CTAs, mismo estilo que la descripción */}
        <motion.p
          variants={item}
          className="text-base md:text-lg text-muted-foreground mb-14 max-w-3xl mx-auto leading-relaxed"
        >
          {t.heroBadge}
        </motion.p>

        {/* Stats strip */}
        <motion.div
          variants={item}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {t.heroStats.map((stat: any, i: number) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm px-4 py-5 transition-colors hover:border-primary/50"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1 leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
