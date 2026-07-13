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
          {/* Imagen del proyecto */}
          <div className="relative min-h-[260px] lg:min-h-full">
            <Image
              src="/images/malaga-premium-transfers.png"
              alt={t.caseStudy.client}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/30 to-purple-600/30 mix-blend-multiply"></div>
          </div>

          {/* Historia + números */}
          <div className="p-8 md:p-12">
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

            <div className="grid grid-cols-3 gap-4 mb-8">
              {t.caseStudy.stats.map((s: any, i: number) => (
                <div key={i} className="text-center rounded-2xl border border-border bg-background/40 px-2 py-4">
                  <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="text-[11px] md:text-xs text-muted-foreground mt-1 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={getWhatsAppLink(t.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1fbd5a] text-white font-semibold transition-all duration-300 hover:scale-105"
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
