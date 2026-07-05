// ============================================
// COMPONENTE: Contact/CTA final (WhatsApp)
// ============================================
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { getWhatsAppLink, CONTACT_EMAIL } from "@/lib/site-config";
import { WhatsAppIcon } from "./whatsapp-button";

const ContactSection = ({ t }: any) => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden"
    >
      {/* Decorative animated circles */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-2xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-2xl"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.finalCta.title}
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            {t.finalCta.desc}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-[#25D366] hover:bg-[#1fbd5a] text-white border-0 font-bold text-lg px-8 py-7 shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <a
                href={getWhatsAppLink(t.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3"
              >
                <WhatsAppIcon size={24} />
                {t.finalCta.button}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="font-bold text-lg px-8 py-7 text-white border-white hover:bg-white hover:text-blue-600 bg-transparent transition-all duration-300 w-full sm:w-auto"
            >
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center gap-2"
              >
                <Mail size={22} />
                {t.finalCta.secondary}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
