"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { getWhatsAppLink } from "@/lib/site-config";
import { WhatsAppIcon } from "./whatsapp-button";

const LeadMagnetSection = ({ t }: { t: any }) => {
  return (
    <section className="py-20 relative" id="checklist">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border-2 border-dashed border-primary/40 bg-primary/5 p-8 md:p-12 text-center"
        >
          <div className="inline-flex p-4 bg-primary/10 rounded-2xl text-primary mb-6">
            <FileDown size={32} />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            {t.leadMagnet.title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.leadMagnet.desc}
          </p>
          <a
            href="/descargas/checklist-web-kit-digital.pdf"
            download
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 mb-6 text-center leading-snug"
          >
            <FileDown size={20} className="shrink-0" />
            {t.leadMagnet.button}
          </a>
          <p className="text-sm text-muted-foreground">
            <a
              href={getWhatsAppLink(t.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#25D366] transition-colors"
            >
              <WhatsAppIcon size={14} />
              {t.leadMagnet.whatsapp}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
