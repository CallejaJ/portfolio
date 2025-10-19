// ============================================
// COMPONENTE: Proyectos
// ============================================

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
import { Project } from "@/lib/projects-data"; // Importa el tipo

interface ProjectsSectionProps {
  t: any;
  projects: Project[]; // ✅ Agrega esta prop
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
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
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.titleKey}
                    className="w-full h-64 object-cover bg-gradient-to-br from-slate-50 to-blue-50 transition-transform duration-300 hover:scale-105"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 hidden sm:block">
                      {t.featuredProject}
                    </Badge>
                  )}
                  {t.projects[project.titleKey].metrics && (
                    <Badge
                      variant="secondary"
                      className="absolute top-4 right-4"
                    >
                      {t.projects[project.titleKey].metrics}
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-xl">
                    {t.projects[project.titleKey].title}
                    <div className="flex gap-2">
                      <a
                        aria-label="GitHub Repository"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        aria-label="demo"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {t.projects[project.titleKey].description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
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
