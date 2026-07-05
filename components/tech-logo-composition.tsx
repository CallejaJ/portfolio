"use client";

import React from "react";
import { techMap } from "@/lib/tech-map";
import { Code } from "lucide-react";

interface TechLogoCompositionProps {
  technologies: string[];
  className?: string;
}

export default function TechLogoComposition({
  technologies,
  className = "",
}: TechLogoCompositionProps) {
  // Take first 6 technologies to avoid clutter
  const displayTechs = technologies.slice(0, 6);
  
  return (
    <div className={`w-full h-full bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center overflow-hidden ${className}`}>
      <div className="grid grid-cols-3 gap-4 p-8 w-full max-w-[80%] mx-auto opacity-80">
        {displayTechs.map((tech, i) => {
          const defaults = {
            icon: Code,
            slug: null,
            label: tech,
          };
          
          const item = techMap[tech] || defaults;
          
          // Determine Icon source
          let iconContent;
          
          const darkHoverClass = item.isDarkLogo ? "" : "dark:group-hover:invert-0";
          const imgClassName = `w-10 h-10 md:w-12 md:h-12 object-contain filter grayscale group-hover:grayscale-0 dark:invert ${darkHoverClass} transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110`;
          
          if (item.path) {
             // eslint-disable-next-line @next/next/no-img-element
             iconContent = (
               <img 
                 src={item.path} 
                 alt={item.label}
                 className={imgClassName}
               />
             );
          } else if (item.slug) {
            // Simple Icons URL
            iconContent = (
               // eslint-disable-next-line @next/next/no-img-element
               <img 
                 src={`https://cdn.simpleicons.org/${item.slug}`} 
                 alt={item.label}
                 className={imgClassName}
               />
             );
          } else {
             const IconComponent = item.icon || Code;
             iconContent = (
               <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300 transition-all duration-300" />
             );
          }

          return (
            <div 
              key={`${tech}-${i}`} 
              className="flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:scale-110 hover:opacity-100 group"
              title={item.label}
            >
              {iconContent}
            </div>
          );
        })}
      </div>
      
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/[0.2] dark:bg-grid-slate-800/[0.1] bg-[size:20px_20px] pointer-events-none" />
    </div>
  );
}
