"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getWhatsAppLink } from "@/lib/site-config";
import { WhatsAppIcon } from "./whatsapp-button";

const CaseStudySection = ({ t }: { t: any }) => {
  return (
    <section className="py-24 relative" id="case-study">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card/50 overflow-hidden lg:grid lg:grid-cols-2"
        >
          {/* Imagen del proyecto — dentro de marco de navegador, sin recortes */}
          <div className="relative flex items-center justify-center p-6 sm:p-8 bg-gradient-to-br from-blue-600/15 via-purple-600/10 to-indigo-700/15">
            <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-border/60 bg-card">
              {/* Barra del navegador */}
              <div className="flex items-center gap-1.5 px-3 py-2.5 bg-background/80 border-b border-border/60">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
              </div>
              <Image
                src="/images/malaga-premium-transfers.webp"
                alt={t.caseStudy.client}
                width={1280}
                height={800}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>
          </div>

          {/* Historia + números */}
          <div className="p-7 md:p-12">
            <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold uppercase tracking-wider mb-5">
              {t.caseStudy.badge}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
              {t.caseStudy.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              {t.caseStudy.client}
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              {t.caseStudy.story}
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
              {t.caseStudy.stats.map((s: any, i: number) => (
                <div key={i} className="min-w-0 text-center rounded-2xl border border-border bg-background/40 px-1.5 py-4">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground mt-1 leading-tight break-words hyphens-auto">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={getWhatsAppLink(t.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1fbd5a] text-white font-semibold transition-all duration-300 hover:scale-105 text-center leading-snug"
            >
              <WhatsAppIcon size={18} />
              {t.caseStudy.cta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
