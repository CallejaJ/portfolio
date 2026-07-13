"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

const AuditFormSection = ({ t }: { t: any }) => {
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
    <section className="py-24 bg-secondary/5 relative" id="audit-form">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex p-4 bg-primary/10 rounded-2xl text-primary mb-6">
            <Mail size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.auditForm.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t.auditForm.desc}
          </p>

          <form
            onSubmit={onSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <input
              type="url"
              name="website"
              required
              placeholder={t.auditForm.urlPlaceholder}
              className="flex-1 px-5 py-3.5 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              name="email"
              required
              placeholder={t.auditForm.emailPlaceholder}
              className="flex-1 px-5 py-3.5 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              disabled={state === "sending"}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 whitespace-nowrap"
            >
              <Send size={16} />
              {state === "sending" ? t.auditForm.sending : t.auditForm.button}
            </button>
          </form>

          {state === "ok" && (
            <p className="mt-5 inline-flex items-center gap-2 text-green-500 font-medium">
              <CheckCircle2 size={18} /> {t.auditForm.success}
            </p>
          )}
          {state === "error" && (
            <p className="mt-5 inline-flex items-center gap-2 text-red-400 font-medium">
              <AlertCircle size={18} /> {t.auditForm.error}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AuditFormSection;
