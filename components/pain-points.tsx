"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  PackageX,
  SearchX,
  SmartphoneNfc,
  TimerOff,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { getWhatsAppLink } from "@/lib/site-config";
import { WhatsAppIcon } from "./whatsapp-button";

const icons = [PackageX, SearchX, SmartphoneNfc, TimerOff];
const images = [
  "/images/pain-points/stagnant.jpg",
  "/images/pain-points/invisibility.jpg",
  "/images/pain-points/obsolete.jpg",
  "/images/pain-points/loading-slow.jpg",
];

const PainPointItem = ({
  item,
  index,
  t,
}: {
  item: any;
  index: number;
  t: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const Icon = icons[index % icons.length];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center gap-12 lg:gap-20`}
    >
      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="flex items-start gap-4 mb-6">
          <motion.div
            whileHover={{ rotate: -8, scale: 1.05 }}
            className="p-4 bg-amber-500/10 dark:bg-amber-500/20 rounded-2xl text-amber-500 shrink-0"
          >
            <Icon size={32} />
          </motion.div>
          <div>
            <span className="block text-sm font-bold tracking-widest text-amber-500/80 mb-1">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
              {item.title}
            </h3>
          </div>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {item.desc}
        </p>
      </div>

      {/* Image with parallax + glow */}
      <div className="w-full lg:w-1/2">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="relative w-full aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.2)] border border-border/50 group"
        >
          <motion.div style={{ y: imageY }} className="absolute inset-[-10%]">
            <Image
              src={images[index % images.length]}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          {/* Glowing overlays */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-purple-600/10 mix-blend-overlay"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent"></div>
          {/* Number watermark */}
          <span className="absolute bottom-4 right-6 text-6xl font-black text-white/10 select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

const PainPointsSection = ({ t }: { t: any }) => {
  return (
    <section className="pt-28 pb-24 bg-secondary/5 relative" id="pain-points">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            {t.painPoints.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6"
          >
            {t.painPoints.subtitle}
          </motion.p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-amber-500 to-orange-400 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-24">
          {t.painPoints.items.map((item: any, index: number) => (
            <PainPointItem key={index} item={item} index={index} t={t} />
          ))}
        </div>

        {/* Mid-page CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a
            href={getWhatsAppLink(t.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#1fbd5a] text-white text-base md:text-lg font-semibold shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 max-w-full text-center leading-snug"
          >
            <WhatsAppIcon size={22} className="shrink-0" />
            {t.painPoints.cta}
            <ArrowRight size={18} className="shrink-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;
