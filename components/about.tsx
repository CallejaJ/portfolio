"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

const AboutSection = ({ t }: { t: any }) => {
  return (
    <section className="py-24 relative" id="about">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-14"
        >
          {/* Foto (public/images/jorge.jpg) */}
          <div className="relative w-56 h-56 md:w-72 md:h-72 shrink-0">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500 to-purple-600 rotate-3"></div>
            <div className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-border -rotate-2 transition-transform duration-500 hover:rotate-0">
              <Image
                src="/images/jorge.jpg"
                alt={t.about.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 224px, 288px"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {t.about.title}
            </h2>
            <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mb-6">
              <MapPin size={14} />
              {t.about.role}
            </p>
            {t.about.paragraphs.map((p: string, i: number) => (
              <p
                key={i}
                className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4"
              >
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
