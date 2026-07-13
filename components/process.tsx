"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, FileSearch, Handshake, PartyPopper } from "lucide-react";
import { getWhatsAppLink } from "@/lib/site-config";
import { WhatsAppIcon } from "./whatsapp-button";

const icons = [MessageCircle, FileSearch, Handshake, PartyPopper];

const ProcessSection = ({ t }: { t: any }) => {
  return (
    <section className="py-24 bg-secondary/5 relative" id="process">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {t.process.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-muted-foreground mb-6"
          >
            {t.process.subtitle}
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-blue-500/40"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {t.process.steps.map((step: any, index: number) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="relative z-10 w-20 h-20 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center text-primary mb-6 group-hover:border-primary/60 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300"
                  >
                    <Icon size={32} />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
                      {index + 1}
                    </span>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href={getWhatsAppLink(t.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#1fbd5a] text-white text-base md:text-lg font-semibold shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 whitespace-nowrap max-w-full"
          >
            <WhatsAppIcon size={22} />
            {t.contact}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
