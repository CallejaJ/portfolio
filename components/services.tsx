"use client";
import React from "react";
import { motion } from "framer-motion";
import { Wrench, Rocket, LineChart, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const icons = [Wrench, Rocket, LineChart, Sparkles];

const ServicesSection = ({ t }: { t: any }) => {
  return (
    <section className="py-24 relative" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {t.services.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6"
          >
            {t.services.subtitle}
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((item: any, index: number) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="h-full bg-card/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-300 border border-border/50 hover:border-primary/50 overflow-hidden group relative">
                  {/* Top gradient line on hover */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="p-4 bg-primary/10 rounded-2xl mb-6 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <Icon size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}