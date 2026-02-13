"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface SkillCategory {
  titleKey?: string;
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

interface SkillsSectionProps {
  t: Record<string, any>;
  skillCategories: SkillCategory[];
}

const SkillsSection = ({ t, skillCategories }: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.techStack}
          </h2>
          <p className="text-xl text-muted-foreground mr-20">
            {t.techStackDesc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.titleKey || category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-primary">
                    {(category.titleKey && t[category.titleKey]) ||
                      category.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-card-foreground text-base">
                          {skill}
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

export default SkillsSection;
