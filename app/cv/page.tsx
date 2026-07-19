"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileX2,
  KeyRound,
  History,
  ArrowRight,
  Check,
  Code2,
} from "lucide-react";
import ProcessSection from "@/components/process";
import FaqSection from "@/components/faq";
import FloatingWhatsApp, { WhatsAppIcon } from "@/components/whatsapp-button";
import MobileCtaBar from "@/components/mobile-cta-bar";
import CookieConsent from "@/components/cookie-consent";
import WhatsAppTracker from "@/components/whatsapp-tracker";
import { FaroBackground } from "@/components/animated-backgrounds";
import { FaroLogo } from "@/components/logo";
import { getWhatsAppLink, CONTACT_EMAIL } from "@/lib/site-config";
import { cvTranslations } from "@/lib/cv-translations";

const painIcons = [FileX2, KeyRound, History];

export default function CvLanding() {
  const [language, setLanguage] = useState("es");
  const t = cvTranslations[language as keyof typeof cvTranslations];
  const waLink = getWhatsAppLink(t.whatsappMessage);
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FaroBackground />

      {/* Header simple */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group" aria-label="Jorge Calleja — Inicio">
            <FaroLogo size={32} className="transition-transform duration-300 group-hover:scale-110" />
            <span className="font-bold tracking-tight">
              Jorge{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Calleja
              </span>
            </span>
          </a>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="hidden sm:block text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t.backHome}
            </a>
            <div className="flex items-center gap-1 rounded-full border border-border p-1">
              {["es", "en"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-colors ${
                    language === lang
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6"
          >
            {t.hero.badge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10"
          >
            {t.hero.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1fbd5a] text-white text-lg font-semibold shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105"
            >
              <WhatsAppIcon size={24} />
              {t.hero.cta}
              <ArrowRight size={20} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {t.hero.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card/50 px-4 py-6"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dolores */}
      <section className="py-24 bg-secondary/5" id="pains">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              {t.pains.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6"
            >
              {t.pains.subtitle}
            </motion.p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-amber-500 to-orange-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.pains.items.map((item, i) => {
              const Icon = painIcons[i % painIcons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="rounded-3xl border border-border bg-card/50 p-8 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300"
                >
                  <div className="p-4 bg-amber-500/10 dark:bg-amber-500/20 rounded-2xl text-amber-500 w-fit mb-6">
                    <Icon size={28} />
                  </div>
                  <span className="block text-sm font-bold tracking-widest text-amber-500/80 mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proceso (componente reutilizado) */}
      <ProcessSection t={t} />

      {/* Paquetes */}
      <section className="py-24" id="packages">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              {t.packages.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-lg md:text-xl text-muted-foreground mb-6"
            >
              {t.packages.subtitle}
            </motion.p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {t.packages.items.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 ${
                  pkg.highlighted
                    ? "border-primary/60 bg-card shadow-[0_0_40px_rgba(168,85,247,0.2)]"
                    : "border-border bg-card/50 hover:border-primary/40"
                }`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold shadow-md whitespace-nowrap">
                    {t.packages.popular}
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-3">
                  {pkg.price}
                </div>
                <p className="text-muted-foreground mb-6">{pkg.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm leading-relaxed">
                      <Check size={18} className="text-[#25D366] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                    pkg.highlighted
                      ? "bg-[#25D366] hover:bg-[#1fbd5a] text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)]"
                      : "border border-border hover:border-primary/60 text-foreground"
                  }`}
                >
                  <WhatsAppIcon size={18} />
                  {t.packages.cta}
                </a>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10">
            {t.packages.extras}
          </p>
        </div>
      </section>

      {/* Diferencial */}
      <section className="py-24 bg-secondary/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-card/50 p-10 md:p-14 text-center"
          >
            <div className="p-4 bg-primary/10 rounded-2xl text-primary w-fit mx-auto mb-6">
              <Code2 size={32} />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">{t.why.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.why.text}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ (componente reutilizado, con schema FAQPage) */}
      <FaqSection t={t} />

      {/* CTA final */}
      <section className="py-24 bg-secondary/5" id="contact">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            {t.finalCta.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-muted-foreground mb-10"
          >
            {t.finalCta.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1fbd5a] text-white text-lg font-semibold shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105"
            >
              <WhatsAppIcon size={24} />
              {t.finalCta.button}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer compacto */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <a href="/" className="flex items-center gap-2">
            <FaroLogo size={28} />
            <span className="font-bold text-sm">Jorge Calleja</span>
          </a>
          <p className="text-xs text-muted-foreground text-center">
            &copy; {year} Jorge Calleja Pérez ·{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary transition-colors">
              {CONTACT_EMAIL}
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacidad" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacidad
            </a>
            <a href="/cookies" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp t={t} />
      <MobileCtaBar t={t} />
      <CookieConsent t={t} />
      <WhatsAppTracker />
    </div>
  );
}
