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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            {t.featuredProjects}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
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
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white dark:bg-slate-800 overflow-hidden group">
                <div className="relative overflow-hidden rounded-t-lg">
                  {/* Reemplazamos la imagen estática por la composición de iconos */}
                  <TechLogoComposition 
                    technologies={project.technologies}
                    className="w-full h-64 transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Badges positioned over image - OCULTOS EN MÓVIL */}
                  <div className="hidden sm:flex absolute top-4 left-4 right-4 justify-between items-start">
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg text-xs px-2 py-1">
                        {t.featuredProject}
                      </Badge>
                    )}

                    {t.projects[project.titleKey].metrics && (
                      <Badge className="bg-slate-900/80 dark:bg-slate-100/90 text-white dark:text-slate-900 border-0 backdrop-blur-sm shadow-lg ml-auto text-xs px-3 py-1">
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
                      className="p-2 bg-white dark:bg-slate-800 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-lg"
                    >
                      <Github
                        size={20}
                        className="text-slate-900 dark:text-white"
                      />
                    </a>
                    <a
                      aria-label="demo"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white dark:bg-slate-800 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-lg"
                    >
                      <ExternalLink
                        size={20}
                        className="text-slate-900 dark:text-white"
                      />
                    </a>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-slate-900 dark:text-white">
                    {t.projects[project.titleKey].title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-slate-600 dark:text-slate-300 mt-2">
                    {t.projects[project.titleKey].description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-600"
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
