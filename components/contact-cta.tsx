// ============================================
// COMPONENTE: Contact/CTA final (WhatsApp)
// ============================================
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { getWhatsAppLink, CONTACT_EMAIL } from "@/lib/site-config";
import { WhatsAppIcon } from "./whatsapp-button";

const ContactSection = ({ t }: any) => {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setState("sending");
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          website: data.get("website"),
          email: data.get("email"),
        }),
      });
      const json = await res.json();
      if (json.ok) {
        setState("ok");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

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
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4">
            <a
              href={getWhatsAppLink(t.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] hover:bg-[#1fbd5a] text-white font-bold text-base md:text-lg px-6 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center leading-snug"
            >
              <WhatsAppIcon size={22} />
              {t.finalCta.button}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full font-bold text-base md:text-lg px-6 py-4 text-white border-2 border-white hover:bg-white hover:text-blue-600 bg-transparent transition-all duration-300 w-full sm:w-auto text-center leading-snug"
            >
              <Mail size={20} />
              {t.finalCta.secondary}
            </a>
          </div>

          {/* Formulario de auditoría integrado */}
          <div className="mt-12 max-w-2xl mx-auto rounded-2xl border border-white/25 bg-white/10 backdrop-blur-sm p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              {t.auditForm.title}
            </h3>
            <p className="text-sm md:text-base opacity-90 mb-6">
              {t.auditForm.desc}
            </p>
            <form
              onSubmit={onSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="url"
                name="website"
                required
                placeholder={t.auditForm.urlPlaceholder}
                className="flex-1 min-w-0 w-full px-5 py-3.5 rounded-full bg-white text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/70 transition-all"
              />
              <input
                type="email"
                name="email"
                required
                placeholder={t.auditForm.emailPlaceholder}
                className="flex-1 min-w-0 w-full px-5 py-3.5 rounded-full bg-white text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/70 transition-all"
              />
              <button
                type="submit"
                disabled={state === "sending"}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-blue-700 hover:bg-blue-50 font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 whitespace-nowrap"
              >
                <Send size={16} />
                {state === "sending" ? t.auditForm.sending : t.auditForm.button}
              </button>
            </form>
            {state === "ok" && (
              <p className="mt-5 inline-flex items-center gap-2 text-green-300 font-medium">
                <CheckCircle2 size={18} /> {t.auditForm.success}
              </p>
            )}
            {state === "error" && (
              <p className="mt-5 inline-flex items-center gap-2 text-red-200 font-medium">
                <AlertCircle size={18} /> {t.auditForm.error}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
