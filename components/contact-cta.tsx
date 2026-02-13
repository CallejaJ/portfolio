// ============================================
// COMPONENTE: Contact/CTA
// ============================================
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, FileText } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = ({ t, language }: any) => {
  const personalInfo = {
    linkedin: "https://www.linkedin.com/in/callejaj",
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.readyToInnovate}
          </h2>
          <p className="text-xl mb-8 opacity-90">{t.transformVision}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a
                href="mailto:callejaj@proton.me"
                className="inline-flex items-center gap-2"
              >
                <Mail size={20} />
                {t.sendEmail}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <a
                href={language === "es" ? "/cv_es_ats.html" : "/cv_en_ats.html"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <FileText size={20} />
                {t.viewCV}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
