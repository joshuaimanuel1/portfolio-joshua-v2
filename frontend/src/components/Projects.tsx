// frontend/src/components/Projects.tsx
"use client";

import React, { useState, useEffect } from "react";
import { ExternalLink, X, Maximize2, Github } from "lucide-react";
import { Project } from "../types";
import { useScrollReveal } from "../hooks/useScrollReveal";

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden animate-[fadeInUp_0.4s_ease-out]">
        <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900/50">
          <div>
            <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase mb-1 block">
              {project.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-slate-800 rounded-full text-gray-400 hover:text-white hover:bg-red-500/20 hover:text-red-500 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="overflow-y-auto p-6 space-y-8 custom-scrollbar">
          <div className="rounded-xl overflow-hidden border border-slate-700 shadow-lg">
            <img
              src={project.imagePath}
              alt={project.title}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-xl font-bold text-white">About Project</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.longDescription || project.description}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">
                Technologies & Links
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-800 text-blue-300 text-sm rounded-full border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Visit Website <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 rounded-lg font-medium transition-colors"
                  >
                    Source Code <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4">
                Project Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-800"
                  >
                    <img
                      src={item.imgPath}
                      alt={item.caption}
                      loading="lazy"
                      className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-4 pt-12 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-medium">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isVisible } = useScrollReveal(0.1);

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-slate-950 relative" ref={ref}>
      <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-section ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my best projects, ranging from web applications to
            UI/UX experiments. Click on a card to view details.
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-slate-900 text-gray-400 border border-slate-800 hover:border-gray-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-700 hover:-translate-y-2 cursor-pointer flex flex-col h-full transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.imagePath}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-4 py-2 bg-slate-900/80 rounded-full text-white text-sm font-medium flex items-center gap-2 border border-white/20">
                    <Maximize2 className="w-4 h-4" /> View Details
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
