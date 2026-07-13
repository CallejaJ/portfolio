"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, ExternalLink } from "lucide-react";

const TestimonialsSection = ({ t }: { t: any }) => {
  return (
    <section className="py-24 bg-secondary/5 relative" id="testimonials">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {t.testimonials.title}
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {t.testimonials.items.map((item: any, index: number) => (
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative rounded-3xl border border-border bg-card/50 p-8 md:p-10"
            >
              <Quote
                size={44}
                className="absolute -top-5 left-8 text-primary bg-background rounded-full p-2 border border-border"
              />
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                “{item.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-4">
                {/* Avatar con iniciales */}
                <span className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold flex items-center justify-center text-lg shrink-0">
                  {item.name
                    .split(" ")
                    .map((w: string) => w[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div>
                  <div className="font-bold text-foreground">{item.name}</div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {item.business}
                    <ExternalLink size={12} />
                  </a>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
