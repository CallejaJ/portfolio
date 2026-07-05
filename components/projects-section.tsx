"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/projects-data";
import TechLogoComposition from "@/components/tech-logo-composition";

interface ProjectsSectionProps {
  t: any;
  projects: Project[];
}

const ProjectsSection = ({ t, projects }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-20 px-4">
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
              <Card className="h-full hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 border border-border/50 hover:border-primary/50 bg-card/50 overflow-hidden group">
                <div className="relative overflow-hidden rounded-t-lg">
                  {/* Reemplazamos la imagen estática por la composición de iconos */}
                  <TechLogoComposition
                    technologies={project.technologies}
                    className="w-full h-64 transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Badges positioned over image - OCULTOS EN MÓVIL */}
                  <div className="hidden sm:flex absolute top-4 left-4 right-4 justify-between items-start">
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-primary via-blue-500 to-secondary text-white border-0 shadow-lg text-xs px-3 py-1 font-semibold">
                        {t.featuredProject}
                      </Badge>
                    )}

                    {t.projects[project.titleKey].metrics && (
                      <Badge className="bg-background/80 text-foreground border border-border backdrop-blur-sm shadow-lg ml-auto text-xs px-3 py-1">
                        {t.projects[project.titleKey].metrics}
                      </Badge>
                    )}
                  </div>

                  {/* Links overlay */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      aria-label="github"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-card rounded-full hover:bg-muted transition-colors shadow-lg"
                    >
                      <Github size={20} className="text-foreground" />
                    </a>
                    <a
                      aria-label="demo"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-card rounded-full hover:bg-muted transition-colors shadow-lg"
                    >
                      <ExternalLink size={20} className="text-foreground" />
                    </a>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-card-foreground">
                    {t.projects[project.titleKey].title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground mt-2">
                    {t.projects[project.titleKey].description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs bg-muted/50 text-muted-foreground border-border"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
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
