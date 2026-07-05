"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// ============================================
// COMPONENTE: FAQ con datos estructurados (GEO)
// Schema.org FAQPage para buscadores e IAs
// ============================================

const FaqSection = ({ t }: { t: any }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item: any) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="py-24 relative" id="faq">
      {/* Datos estructurados para Google e IAs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {t.faq.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg text-muted-foreground mb-6"
          >
            {t.faq.subtitle}
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((item: any, index: number) => (
            <motion.details
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="group rounded-2xl border border-border bg-card/50 open:border-primary/50 open:shadow-[0_0_30px_rgba(168,85,247,0.12)] transition-all duration-300"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-semibold text-base md:text-lg select-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown
                  size={20}
                  className="shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                {item.a}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
