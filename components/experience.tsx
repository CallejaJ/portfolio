"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceSectionProps {
  t: any;
}

const ExperienceSection = ({ t }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.experience}
          </h2>
          <p className="text-xl text-muted-foreground">{t.experienceDesc}</p>
        </motion.div>

        <div className="space-y-8">
          {t.experienceItems.map((job: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-border bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl text-card-foreground">
                        {job.title}
                      </CardTitle>
                      <p className="text-lg font-semibold text-primary mt-1">
                        {job.company}
                      </p>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-sm font-medium text-foreground">
                        {job.period}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {job.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.achievements.map((achievement: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-card-foreground leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
