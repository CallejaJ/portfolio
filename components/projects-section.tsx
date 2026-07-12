"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@/lib/projects-data";

interface ProjectsSectionProps {
  t: any;
  projects: Project[];
}

const ProjectsSection = ({ t, projects }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.featuredProjects}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.featuredProjectsDesc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 border border-border/50 hover:border-primary/50 bg-card/50 overflow-hidden group flex flex-col">
                {/* Captura de la web, enlazada a la demo */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block overflow-hidden aspect-[16/10]"
                  aria-label={t.projects[project.titleKey].title}
                >
                  <Image
                    src={project.image}
                    alt={t.projects[project.titleKey].title}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Duotono azul/lila (colores del logo); al hover se revelan los colores reales */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 mix-blend-color opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/30 to-purple-600/30 mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
                  {/* Indicador de "ver web" al hover */}
                  <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/85 backdrop-blur-sm border border-border text-sm font-semibold text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={15} />
                    {t.visitSite}
                  </span>
                </a>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-card-foreground">
                    {t.projects[project.titleKey].title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground mt-2">
                    {t.projects[project.titleKey].description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto">
                  {/* Tecnologías: línea discreta para quien sí entiende */}
                  <p className="text-xs text-muted-foreground/70 border-t border-border/50 pt-4">
                    {project.technologies.join(" · ")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
