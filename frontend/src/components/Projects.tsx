// // // // "use client";

// // // // import React, { useState, useEffect } from "react";
// // // // import { ExternalLink, X, Maximize2, Github } from "lucide-react";
// // // // import { Project } from "../types";
// // // // import { useScrollReveal } from "../hooks/useScrollReveal";

// // // // const ProjectModal = ({
// // // //   project,
// // // //   onClose,
// // // // }: {
// // // //   project: Project;
// // // //   onClose: () => void;
// // // // }) => {
// // // //   useEffect(() => {
// // // //     document.body.style.overflow = "hidden";
// // // //     return () => {
// // // //       document.body.style.overflow = "unset";
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
// // // //       <div
// // // //         className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
// // // //         onClick={onClose}
// // // //       ></div>
// // // //       <div className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden animate-[fadeInUp_0.4s_ease-out]">
// // // //         {/* HEADER MODAL */}
// // // //         <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900/50 shrink-0">
// // // //           <div>
// // // //             <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase mb-1 block">
// // // //               {project.category}
// // // //             </span>
// // // //             <h2 className="text-2xl md:text-3xl font-bold text-white">
// // // //               {project.title}
// // // //             </h2>
// // // //           </div>
// // // //           <button
// // // //             onClick={onClose}
// // // //             className="p-2 bg-slate-800 rounded-full text-gray-400 hover:text-white hover:bg-red-500/20 hover:text-red-500 transition-all"
// // // //           >
// // // //             <X className="w-6 h-6" />
// // // //           </button>
// // // //         </div>

// // // //         {/* BODY KONTEN (Area Scroll) */}
// // // //         {/* PERBAIKAN: Tambahkan data-lenis-prevent="true" dan overscroll-contain */}
// // // //         <div
// // // //           className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar overscroll-contain"
// // // //           data-lenis-prevent="true"
// // // //         >
// // // //           <div className="rounded-xl overflow-hidden border border-slate-700 shadow-lg">
// // // //             <img
// // // //               src={project.imagePath}
// // // //               alt={project.title}
// // // //               loading="lazy"
// // // //               className="w-full h-auto object-cover"
// // // //             />
// // // //           </div>
// // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // //             <div className="md:col-span-2 space-y-4">
// // // //               <h3 className="text-xl font-bold text-white">About Project</h3>
// // // //               <p className="text-gray-300 leading-relaxed text-lg">
// // // //                 {project.longDescription || project.description}
// // // //               </p>
// // // //             </div>
// // // //             <div className="space-y-4">
// // // //               <h3 className="text-xl font-bold text-white">
// // // //                 Technologies & Links
// // // //               </h3>
// // // //               <div className="flex flex-wrap gap-2 mb-4">
// // // //                 {project.tech.map((t, i) => (
// // // //                   <span
// // // //                     key={i}
// // // //                     className="px-3 py-1 bg-slate-800 text-blue-300 text-sm rounded-full border border-slate-700"
// // // //                   >
// // // //                     {t}
// // // //                   </span>
// // // //                 ))}
// // // //               </div>
// // // //               <div className="flex flex-col gap-3">
// // // //                 {project.link && project.link !== "#" && (
// // // //                   <a
// // // //                     href={project.link}
// // // //                     target="_blank"
// // // //                     rel="noreferrer"
// // // //                     className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
// // // //                   >
// // // //                     Visit Website <ExternalLink className="w-4 h-4" />
// // // //                   </a>
// // // //                 )}
// // // //                 {project.github && project.github !== "#" && (
// // // //                   <a
// // // //                     href={project.github}
// // // //                     target="_blank"
// // // //                     rel="noreferrer"
// // // //                     className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 rounded-lg font-medium transition-colors"
// // // //                   >
// // // //                     Source Code <Github className="w-4 h-4" />
// // // //                   </a>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //           {project.gallery && project.gallery.length > 0 && (
// // // //             <div className="space-y-4 pt-4 border-t border-slate-800">
// // // //               <h3 className="text-xl font-bold text-white mb-4">
// // // //                 Project Gallery
// // // //               </h3>
// // // //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // //                 {project.gallery.map((item, idx) => (
// // // //                   <div
// // // //                     key={idx}
// // // //                     className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-800"
// // // //                   >
// // // //                     <img
// // // //                       src={item.imgPath}
// // // //                       alt={item.caption}
// // // //                       loading="lazy"
// // // //                       className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
// // // //                     />
// // // //                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-4 pt-12 opacity-0 group-hover:opacity-100 transition-opacity">
// // // //                       <p className="text-white text-sm font-medium">
// // // //                         {item.caption}
// // // //                       </p>
// // // //                     </div>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default function Projects({ projects }: { projects: Project[] }) {
// // // //   const [filter, setFilter] = useState("All");
// // // //   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
// // // //   const { ref, isVisible } = useScrollReveal(0.1);

// // // //   const categories = [
// // // //     "All",
// // // //     ...Array.from(new Set(projects.map((p) => p.category))),
// // // //   ];

// // // //   const filteredProjects =
// // // //     filter === "All" ? projects : projects.filter((p) => p.category === filter);

// // // //   return (
// // // //     <section id="projects" className="py-24 bg-slate-950 relative" ref={ref}>
// // // //       <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
// // // //       <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

// // // //       <div
// // // //         className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-section ${
// // // //           isVisible ? "is-visible" : ""
// // // //         }`}
// // // //       >
// // // //         <div className="text-center mb-16">
// // // //           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
// // // //             Featured Projects
// // // //           </h2>
// // // //           <p className="text-gray-400 max-w-2xl mx-auto">
// // // //             A collection of my best projects, ranging from web applications to
// // // //             UI/UX experiments. Click on a card to view details.
// // // //           </p>
// // // //         </div>
// // // //         <div className="flex justify-center flex-wrap gap-4 mb-12">
// // // //           {categories.map((cat) => (
// // // //             <button
// // // //               key={cat}
// // // //               onClick={() => setFilter(cat)}
// // // //               className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
// // // //                 filter === cat
// // // //                   ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
// // // //                   : "bg-slate-900 text-gray-400 border border-slate-800 hover:border-gray-600 hover:text-white"
// // // //               }`}
// // // //             >
// // // //               {cat}
// // // //             </button>
// // // //           ))}
// // // //         </div>
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //           {filteredProjects.map((project, index) => (
// // // //             <div
// // // //               key={project.id}
// // // //               onClick={() => setSelectedProject(project)}
// // // //               className={`group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 cursor-pointer flex flex-col h-full transform will-change-transform transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 ${
// // // //                 isVisible
// // // //                   ? "opacity-100 translate-y-0 scale-100 blur-0"
// // // //                   : "opacity-0 translate-y-16 scale-95 blur-[10px]"
// // // //               }`}
// // // //               style={{ transitionDelay: `${index * 150}ms` }}
// // // //             >
// // // //               <div className="aspect-video overflow-hidden relative">
// // // //                 <img
// // // //                   src={project.imagePath}
// // // //                   alt={project.title}
// // // //                   loading="lazy"
// // // //                   className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
// // // //                 />
// // // //                 <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
// // // //                   <span className="px-4 py-2 bg-slate-900/80 rounded-full text-white text-sm font-medium flex items-center gap-2 border border-white/20">
// // // //                     <Maximize2 className="w-4 h-4" /> View Details
// // // //                   </span>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="p-6 flex flex-col flex-grow">
// // // //                 <div className="flex justify-between items-start mb-4">
// // // //                   <div>
// // // //                     <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase mb-2 block">
// // // //                       {project.category}
// // // //                     </span>
// // // //                     <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
// // // //                       {project.title}
// // // //                     </h3>
// // // //                   </div>
// // // //                 </div>
// // // //                 <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
// // // //                   {project.description}
// // // //                 </p>
// // // //                 <div className="flex flex-wrap gap-2 mt-auto">
// // // //                   {project.tech.slice(0, 3).map((t, i) => (
// // // //                     <span
// // // //                       key={i}
// // // //                       className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700"
// // // //                     >
// // // //                       {t}
// // // //                     </span>
// // // //                   ))}
// // // //                   {project.tech.length > 3 && (
// // // //                     <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">
// // // //                       +{project.tech.length - 3}
// // // //                     </span>
// // // //                   )}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {selectedProject && (
// // // //         <ProjectModal
// // // //           project={selectedProject}
// // // //           onClose={() => setSelectedProject(null)}
// // // //         />
// // // //       )}
// // // //     </section>
// // // //   );
// // // // }

// // // "use client";

// // // import React, { useState, useEffect, useRef, useCallback } from "react";
// // // import { ExternalLink, X, Github, ArrowUpRight, MoveRight } from "lucide-react";

// // // // ---- TYPES ----
// // // interface Project {
// // //   id: string | number;
// // //   title: string;
// // //   category: string;
// // //   description: string;
// // //   longDescription?: string;
// // //   imagePath: string;
// // //   tech: string[];
// // //   link?: string;
// // //   github?: string;
// // // }

// // // // ---- MODAL ----
// // // const ProjectModal = ({
// // //   project,
// // //   onClose,
// // // }: {
// // //   project: Project;
// // //   onClose: () => void;
// // // }) => {
// // //   useEffect(() => {
// // //     document.body.style.overflow = "hidden";
// // //     const handleKey = (e: KeyboardEvent) => {
// // //       if (e.key === "Escape") onClose();
// // //     };
// // //     window.addEventListener("keydown", handleKey);
// // //     return () => {
// // //       document.body.style.overflow = "unset";
// // //       window.removeEventListener("keydown", handleKey);
// // //     };
// // //   }, [onClose]);

// // //   return (
// // //     <div
// // //       className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
// // //       style={{ animation: "fadeIn 0.25s ease-out" }}
// // //     >
// // //       {/* Backdrop */}
// // //       <div
// // //         className="absolute inset-0 bg-black/70 backdrop-blur-xl"
// // //         onClick={onClose}
// // //       />

// // //       {/* Modal Panel */}
// // //       <div
// // //         className="relative w-full max-w-5xl max-h-[88vh] rounded-[2rem] overflow-hidden flex flex-col"
// // //         style={{
// // //           background: "linear-gradient(145deg, #0d1117 0%, #0a0e1a 100%)",
// // //           border: "1px solid rgba(255,255,255,0.08)",
// // //           boxShadow:
// // //             "0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(99,102,241,0.1)",
// // //           animation: "slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
// // //         }}
// // //       >
// // //         {/* Header */}
// // //         <div className="flex items-start justify-between p-7 border-b border-white/[0.06] shrink-0">
// // //           <div>
// // //             <p className="text-indigo-400 text-[10px] font-bold tracking-[0.25em] uppercase mb-2">
// // //               {project.category}
// // //             </p>
// // //             <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">
// // //               {project.title}
// // //             </h2>
// // //           </div>
// // //           <button
// // //             onClick={onClose}
// // //             className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all duration-200 hover:rotate-90 shrink-0 ml-4"
// // //           >
// // //             <X className="w-4 h-4" />
// // //           </button>
// // //         </div>

// // //         {/* Scrollable Body */}
// // //         <div className="overflow-y-auto flex-1 p-7 space-y-8">
// // //           {/* Image */}
// // //           <div
// // //             className="rounded-2xl overflow-hidden"
// // //             style={{ border: "1px solid rgba(255,255,255,0.06)" }}
// // //           >
// // //             <img
// // //               src={project.imagePath}
// // //               alt={project.title}
// // //               className="w-full h-auto object-cover"
// // //             />
// // //           </div>

// // //           {/* Content Grid */}
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //             <div className="md:col-span-2">
// // //               <h3 className="text-lg font-bold text-white mb-3">Overview</h3>
// // //               <p className="text-slate-400 leading-relaxed font-light text-base">
// // //                 {project.longDescription || project.description}
// // //               </p>
// // //             </div>
// // //             <div className="space-y-6">
// // //               <div>
// // //                 <p className="text-xs font-bold text-white uppercase tracking-widest mb-3">
// // //                   Tech Stack
// // //                 </p>
// // //                 <div className="flex flex-wrap gap-2">
// // //                   {project.tech.map((t, i) => (
// // //                     <span
// // //                       key={i}
// // //                       className="px-3 py-1.5 text-xs font-medium text-indigo-300 rounded-lg"
// // //                       style={{
// // //                         background: "rgba(99,102,241,0.1)",
// // //                         border: "1px solid rgba(99,102,241,0.2)",
// // //                       }}
// // //                     >
// // //                       {t}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //               <div
// // //                 className="space-y-3 pt-5"
// // //                 style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
// // //               >
// // //                 {project.link && project.link !== "#" && (
// // //                   <a
// // //                     href={project.link}
// // //                     target="_blank"
// // //                     rel="noreferrer"
// // //                     className="flex items-center justify-between px-5 py-3 bg-white text-slate-950 rounded-xl font-bold text-sm transition-all hover:bg-slate-100 group"
// // //                   >
// // //                     Visit Live Site
// // //                     <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
// // //                   </a>
// // //                 )}
// // //                 {project.github && project.github !== "#" && (
// // //                   <a
// // //                     href={project.github}
// // //                     target="_blank"
// // //                     rel="noreferrer"
// // //                     className="flex items-center justify-between px-5 py-3 text-white rounded-xl font-medium text-sm transition-all group"
// // //                     style={{
// // //                       background: "rgba(255,255,255,0.05)",
// // //                       border: "1px solid rgba(255,255,255,0.08)",
// // //                     }}
// // //                   >
// // //                     View Source Code
// // //                     <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
// // //                   </a>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <style>{`
// // //         @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// // //         @keyframes slideUp { from { opacity: 0; transform: translateY(32px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // // ---- MAIN COMPONENT ----
// // // export default function Projects({ projects }: { projects: Project[] }) {
// // //   const [filter, setFilter] = useState("All");
// // //   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
// // //   const [scrollProgress, setScrollProgress] = useState(0);
// // //   const [activeIndex, setActiveIndex] = useState(0);

// // //   const sectionRef = useRef<HTMLElement>(null);
// // //   const trackRef = useRef<HTMLDivElement>(null);

// // //   const categories = [
// // //     "All",
// // //     ...Array.from(new Set(projects.map((p) => p.category))),
// // //   ];

// // //   const filteredProjects =
// // //     filter === "All" ? projects : projects.filter((p) => p.category === filter);

// // //   // --- CORE SCROLL LOGIC ---
// // //   const handleScroll = useCallback(() => {
// // //     const section = sectionRef.current;
// // //     const track = trackRef.current;
// // //     if (!section || !track) return;

// // //     const sectionTop = section.getBoundingClientRect().top + window.scrollY;
// // //     const sectionHeight = section.offsetHeight;
// // //     const viewportHeight = window.innerHeight;

// // //     const scrollStart = sectionTop;
// // //     const scrollEnd = sectionTop + sectionHeight - viewportHeight;
// // //     const currentScroll = window.scrollY;

// // //     const raw = (currentScroll - scrollStart) / (scrollEnd - scrollStart);
// // //     const clamped = Math.max(0, Math.min(1, raw));
// // //     setScrollProgress(clamped);

// // //     // Track active card
// // //     const cardWidth = 480 + 40; // card width + gap
// // //     const totalCards = filteredProjects.length;
// // //     const idx = Math.round(clamped * (totalCards - 1));
// // //     setActiveIndex(Math.max(0, Math.min(totalCards - 1, idx)));
// // //   }, [filteredProjects.length]);

// // //   useEffect(() => {
// // //     window.addEventListener("scroll", handleScroll, { passive: true });
// // //     handleScroll();
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, [handleScroll]);

// // //   // Calculate translateX
// // //   const getTranslateX = () => {
// // //     const track = trackRef.current;
// // //     if (!track) return 0;
// // //     const trackWidth = track.scrollWidth;
// // //     const viewportWidth = window.innerWidth;
// // //     const maxTranslate = -(trackWidth - viewportWidth + 80);
// // //     return scrollProgress * maxTranslate;
// // //   };

// // //   const [translateX, setTranslateX] = useState(0);
// // //   useEffect(() => {
// // //     const track = trackRef.current;
// // //     if (!track) return;
// // //     const trackWidth = track.scrollWidth;
// // //     const viewportWidth = window.innerWidth;
// // //     const maxTranslate = -(trackWidth - viewportWidth + 80);
// // //     setTranslateX(scrollProgress * maxTranslate);
// // //   }, [scrollProgress]);

// // //   // Recalculate on filter change
// // //   useEffect(() => {
// // //     handleScroll();
// // //   }, [filter, handleScroll]);

// // //   // SECTION HEIGHT: 100vh for sticky + extra scroll space per card
// // //   const SCROLL_PER_CARD = 350;
// // //   const sectionHeight = `calc(100vh + ${filteredProjects.length * SCROLL_PER_CARD}px)`;

// // //   return (
// // //     <>
// // //       <section
// // //         id="projects"
// // //         ref={sectionRef}
// // //         style={{
// // //           height: sectionHeight,
// // //           position: "relative",
// // //           background: "#020617",
// // //         }}
// // //       >
// // //         {/* STICKY CONTAINER */}
// // //         <div
// // //           style={{
// // //             position: "sticky",
// // //             top: 0,
// // //             height: "100vh",
// // //             overflow: "hidden",
// // //             display: "flex",
// // //             flexDirection: "column",
// // //           }}
// // //         >
// // //           {/* Background Glows */}
// // //           <div
// // //             style={{
// // //               position: "absolute",
// // //               top: "-20%",
// // //               left: "-10%",
// // //               width: "600px",
// // //               height: "600px",
// // //               background:
// // //                 "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
// // //               pointerEvents: "none",
// // //             }}
// // //           />
// // //           <div
// // //             style={{
// // //               position: "absolute",
// // //               bottom: "-20%",
// // //               right: "-10%",
// // //               width: "500px",
// // //               height: "500px",
// // //               background:
// // //                 "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
// // //               pointerEvents: "none",
// // //             }}
// // //           />

// // //           {/* ---- HEADER ---- */}
// // //           <div
// // //             style={{
// // //               padding: "5rem 2rem 0",
// // //               maxWidth: "1400px",
// // //               width: "100%",
// // //               margin: "0 auto",
// // //               flexShrink: 0,
// // //               position: "relative",
// // //               zIndex: 10,
// // //             }}
// // //           >
// // //             <div
// // //               style={{
// // //                 display: "flex",
// // //                 alignItems: "flex-end",
// // //                 justifyContent: "space-between",
// // //                 flexWrap: "wrap",
// // //                 gap: "1.5rem",
// // //                 marginBottom: "2rem",
// // //               }}
// // //             >
// // //               <div>
// // //                 <p
// // //                   style={{
// // //                     color: "#818cf8",
// // //                     fontSize: "11px",
// // //                     fontWeight: 700,
// // //                     letterSpacing: "0.25em",
// // //                     textTransform: "uppercase",
// // //                     marginBottom: "0.5rem",
// // //                   }}
// // //                 >
// // //                   My Work & Process
// // //                 </p>
// // //                 <h2
// // //                   style={{
// // //                     fontSize: "clamp(2.5rem, 5vw, 4rem)",
// // //                     fontWeight: 900,
// // //                     color: "white",
// // //                     letterSpacing: "-0.03em",
// // //                     lineHeight: 1,
// // //                     margin: 0,
// // //                   }}
// // //                 >
// // //                   Featured Projects
// // //                 </h2>
// // //               </div>

// // //               {/* Progress indicator */}
// // //               <div
// // //                 style={{ display: "flex", alignItems: "center", gap: "1rem" }}
// // //               >
// // //                 <div style={{ display: "flex", gap: "6px" }}>
// // //                   {filteredProjects.map((_, i) => (
// // //                     <div
// // //                       key={i}
// // //                       style={{
// // //                         width: i === activeIndex ? "24px" : "6px",
// // //                         height: "6px",
// // //                         borderRadius: "3px",
// // //                         background:
// // //                           i === activeIndex
// // //                             ? "#818cf8"
// // //                             : "rgba(255,255,255,0.15)",
// // //                         transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
// // //                       }}
// // //                     />
// // //                   ))}
// // //                 </div>
// // //                 <span
// // //                   style={{
// // //                     color: "rgba(255,255,255,0.3)",
// // //                     fontSize: "12px",
// // //                     fontWeight: 500,
// // //                   }}
// // //                 >
// // //                   {String(activeIndex + 1).padStart(2, "0")} /{" "}
// // //                   {String(filteredProjects.length).padStart(2, "0")}
// // //                 </span>
// // //               </div>
// // //             </div>

// // //             {/* Filter chips */}
// // //             <div
// // //               style={{
// // //                 display: "flex",
// // //                 flexWrap: "wrap",
// // //                 gap: "10px",
// // //                 marginBottom: "2rem",
// // //               }}
// // //             >
// // //               {categories.map((cat) => (
// // //                 <button
// // //                   key={cat}
// // //                   onClick={() => setFilter(cat)}
// // //                   style={{
// // //                     padding: "8px 18px",
// // //                     borderRadius: "100px",
// // //                     fontSize: "13px",
// // //                     fontWeight: 600,
// // //                     cursor: "pointer",
// // //                     transition: "all 0.3s ease",
// // //                     border:
// // //                       filter === cat
// // //                         ? "1px solid white"
// // //                         : "1px solid rgba(255,255,255,0.1)",
// // //                     background:
// // //                       filter === cat ? "white" : "rgba(255,255,255,0.04)",
// // //                     color: filter === cat ? "#020617" : "rgba(255,255,255,0.5)",
// // //                     boxShadow:
// // //                       filter === cat
// // //                         ? "0 0 20px rgba(255,255,255,0.15)"
// // //                         : "none",
// // //                   }}
// // //                 >
// // //                   {cat}
// // //                 </button>
// // //               ))}
// // //             </div>

// // //             {/* Scroll hint */}
// // //             <div
// // //               style={{
// // //                 display: "flex",
// // //                 alignItems: "center",
// // //                 gap: "10px",
// // //                 opacity: scrollProgress < 0.05 ? 1 : 0,
// // //                 transition: "opacity 0.5s ease",
// // //               }}
// // //             >
// // //               <div
// // //                 style={{
// // //                   width: "120px",
// // //                   height: "1px",
// // //                   background:
// // //                     "linear-gradient(90deg, rgba(129,140,248,0.6), transparent)",
// // //                 }}
// // //               />
// // //               <span
// // //                 style={{
// // //                   color: "rgba(129,140,248,0.7)",
// // //                   fontSize: "11px",
// // //                   fontWeight: 600,
// // //                   letterSpacing: "0.15em",
// // //                   textTransform: "uppercase",
// // //                 }}
// // //               >
// // //                 Scroll to explore
// // //               </span>
// // //             </div>
// // //           </div>

// // //           {/* ---- HORIZONTAL TRACK ---- */}
// // //           <div
// // //             style={{
// // //               flex: 1,
// // //               display: "flex",
// // //               alignItems: "center",
// // //               position: "relative",
// // //               zIndex: 10,
// // //               overflow: "visible",
// // //             }}
// // //           >
// // //             {/* Left fade */}
// // //             <div
// // //               style={{
// // //                 position: "absolute",
// // //                 left: 0,
// // //                 top: 0,
// // //                 bottom: 0,
// // //                 width: "80px",
// // //                 background: "linear-gradient(90deg, #020617, transparent)",
// // //                 zIndex: 20,
// // //                 pointerEvents: "none",
// // //               }}
// // //             />
// // //             {/* Right fade */}
// // //             <div
// // //               style={{
// // //                 position: "absolute",
// // //                 right: 0,
// // //                 top: 0,
// // //                 bottom: 0,
// // //                 width: "120px",
// // //                 background: "linear-gradient(-90deg, #020617, transparent)",
// // //                 zIndex: 20,
// // //                 pointerEvents: "none",
// // //               }}
// // //             />

// // //             <div
// // //               ref={trackRef}
// // //               style={{
// // //                 display: "flex",
// // //                 gap: "28px",
// // //                 paddingLeft: "clamp(2rem, 5vw, 5rem)",
// // //                 paddingRight: "clamp(2rem, 5vw, 5rem)",
// // //                 paddingBottom: "2rem",
// // //                 paddingTop: "1rem",
// // //                 transform: `translateX(${translateX}px)`,
// // //                 transition: "transform 0.05s linear",
// // //                 willChange: "transform",
// // //                 alignItems: "stretch",
// // //               }}
// // //             >
// // //               {filteredProjects.map((project, index) => (
// // //                 <ProjectCard
// // //                   key={project.id}
// // //                   project={project}
// // //                   index={index}
// // //                   isActive={index === activeIndex}
// // //                   scrollProgress={scrollProgress}
// // //                   totalCards={filteredProjects.length}
// // //                   onClick={() => setSelectedProject(project)}
// // //                 />
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* Progress bar bottom */}
// // //           <div
// // //             style={{
// // //               position: "absolute",
// // //               bottom: 0,
// // //               left: 0,
// // //               right: 0,
// // //               height: "2px",
// // //               background: "rgba(255,255,255,0.05)",
// // //             }}
// // //           >
// // //             <div
// // //               style={{
// // //                 height: "100%",
// // //                 width: `${scrollProgress * 100}%`,
// // //                 background: "linear-gradient(90deg, #6366f1, #a78bfa)",
// // //                 transition: "width 0.05s linear",
// // //                 borderRadius: "0 2px 2px 0",
// // //               }}
// // //             />
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Modal */}
// // //       {selectedProject && (
// // //         <ProjectModal
// // //           project={selectedProject}
// // //           onClose={() => setSelectedProject(null)}
// // //         />
// // //       )}
// // //     </>
// // //   );
// // // }

// // // // ---- CARD COMPONENT ----
// // // function ProjectCard({
// // //   project,
// // //   index,
// // //   isActive,
// // //   scrollProgress,
// // //   totalCards,
// // //   onClick,
// // // }: {
// // //   project: Project;
// // //   index: number;
// // //   isActive: boolean;
// // //   scrollProgress: number;
// // //   totalCards: number;
// // //   onClick: () => void;
// // // }) {
// // //   const [hovered, setHovered] = useState(false);

// // //   return (
// // //     <div
// // //       onClick={onClick}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //       style={{
// // //         width: "clamp(320px, 28vw, 460px)",
// // //         height: "clamp(460px, 60vh, 580px)",
// // //         flexShrink: 0,
// // //         borderRadius: "2.5rem",
// // //         overflow: "hidden",
// // //         cursor: "pointer",
// // //         position: "relative",
// // //         display: "flex",
// // //         flexDirection: "column",
// // //         background: hovered
// // //           ? "rgba(255,255,255,0.04)"
// // //           : "rgba(255,255,255,0.02)",
// // //         border: isActive
// // //           ? "1px solid rgba(99,102,241,0.3)"
// // //           : "1px solid rgba(255,255,255,0.05)",
// // //         boxShadow: hovered
// // //           ? "0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.15)"
// // //           : isActive
// // //             ? "0 20px 40px rgba(0,0,0,0.4)"
// // //             : "0 8px 32px rgba(0,0,0,0.3)",
// // //         transform: hovered ? "translateY(-8px)" : "translateY(0)",
// // //         transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
// // //       }}
// // //     >
// // //       {/* Active glow overlay */}
// // //       {isActive && (
// // //         <div
// // //           style={{
// // //             position: "absolute",
// // //             inset: 0,
// // //             background:
// // //               "linear-gradient(135deg, rgba(99,102,241,0.05), transparent 60%)",
// // //             pointerEvents: "none",
// // //             zIndex: 1,
// // //             borderRadius: "inherit",
// // //           }}
// // //         />
// // //       )}

// // //       {/* Image area */}
// // //       <div
// // //         style={{
// // //           padding: "1rem",
// // //           height: "55%",
// // //           flexShrink: 0,
// // //         }}
// // //       >
// // //         <div
// // //           style={{
// // //             width: "100%",
// // //             height: "100%",
// // //             borderRadius: "1.8rem",
// // //             overflow: "hidden",
// // //             position: "relative",
// // //           }}
// // //         >
// // //           <img
// // //             src={project.imagePath}
// // //             alt={project.title}
// // //             loading="lazy"
// // //             style={{
// // //               width: "100%",
// // //               height: "100%",
// // //               objectFit: "cover",
// // //               transform: hovered ? "scale(1.06)" : "scale(1)",
// // //               transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
// // //             }}
// // //           />
// // //           {/* Hover overlay */}
// // //           <div
// // //             style={{
// // //               position: "absolute",
// // //               inset: 0,
// // //               background: "rgba(2,6,23,0.5)",
// // //               backdropFilter: "blur(4px)",
// // //               opacity: hovered ? 1 : 0,
// // //               transition: "opacity 0.3s ease",
// // //               display: "flex",
// // //               alignItems: "center",
// // //               justifyContent: "center",
// // //             }}
// // //           >
// // //             <div
// // //               style={{
// // //                 padding: "10px 22px",
// // //                 background: "white",
// // //                 color: "#020617",
// // //                 borderRadius: "100px",
// // //                 fontSize: "13px",
// // //                 fontWeight: 700,
// // //                 display: "flex",
// // //                 alignItems: "center",
// // //                 gap: "8px",
// // //                 transform: hovered ? "scale(1)" : "scale(0.85)",
// // //                 transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
// // //                 boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
// // //               }}
// // //             >
// // //               <ArrowUpRight size={14} />
// // //               View Details
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Text content */}
// // //       <div
// // //         style={{
// // //           padding: "0 1.5rem 1.5rem",
// // //           display: "flex",
// // //           flexDirection: "column",
// // //           flex: 1,
// // //           position: "relative",
// // //           zIndex: 2,
// // //         }}
// // //       >
// // //         <p
// // //           style={{
// // //             color: "#818cf8",
// // //             fontSize: "10px",
// // //             fontWeight: 700,
// // //             letterSpacing: "0.22em",
// // //             textTransform: "uppercase",
// // //             marginBottom: "8px",
// // //           }}
// // //         >
// // //           {project.category}
// // //         </p>
// // //         <h3
// // //           style={{
// // //             fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
// // //             fontWeight: 800,
// // //             color: hovered ? "#c7d2fe" : "white",
// // //             marginBottom: "10px",
// // //             lineHeight: 1.2,
// // //             letterSpacing: "-0.02em",
// // //             transition: "color 0.3s ease",
// // //           }}
// // //         >
// // //           {project.title}
// // //         </h3>
// // //         <p
// // //           style={{
// // //             color: "rgba(148,163,184,0.8)",
// // //             fontSize: "13px",
// // //             lineHeight: 1.65,
// // //             fontWeight: 300,
// // //             marginBottom: "auto",
// // //             display: "-webkit-box",
// // //             WebkitLineClamp: 3,
// // //             WebkitBoxOrient: "vertical",
// // //             overflow: "hidden",
// // //           }}
// // //         >
// // //           {project.description}
// // //         </p>

// // //         {/* Bottom row */}
// // //         <div
// // //           style={{
// // //             display: "flex",
// // //             alignItems: "center",
// // //             justifyContent: "space-between",
// // //             marginTop: "1.25rem",
// // //             paddingTop: "1rem",
// // //             borderTop: "1px solid rgba(255,255,255,0.05)",
// // //           }}
// // //         >
// // //           <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
// // //             {project.tech.slice(0, 2).map((t, i) => (
// // //               <span
// // //                 key={i}
// // //                 style={{
// // //                   padding: "4px 10px",
// // //                   background: "rgba(255,255,255,0.04)",
// // //                   border: "1px solid rgba(255,255,255,0.07)",
// // //                   borderRadius: "6px",
// // //                   fontSize: "11px",
// // //                   fontWeight: 500,
// // //                   color: "rgba(203,213,225,0.7)",
// // //                 }}
// // //               >
// // //                 {t}
// // //               </span>
// // //             ))}
// // //             {project.tech.length > 2 && (
// // //               <span
// // //                 style={{
// // //                   padding: "4px 10px",
// // //                   background: "rgba(255,255,255,0.04)",
// // //                   border: "1px solid rgba(255,255,255,0.07)",
// // //                   borderRadius: "6px",
// // //                   fontSize: "11px",
// // //                   fontWeight: 500,
// // //                   color: "rgba(148,163,184,0.5)",
// // //                 }}
// // //               >
// // //                 +{project.tech.length - 2}
// // //               </span>
// // //             )}
// // //           </div>
// // //           <div
// // //             style={{
// // //               width: "36px",
// // //               height: "36px",
// // //               borderRadius: "50%",
// // //               border: hovered
// // //                 ? "1px solid white"
// // //                 : "1px solid rgba(255,255,255,0.1)",
// // //               background: hovered ? "white" : "transparent",
// // //               display: "flex",
// // //               alignItems: "center",
// // //               justifyContent: "center",
// // //               transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
// // //               flexShrink: 0,
// // //             }}
// // //           >
// // //             <MoveRight
// // //               size={14}
// // //               style={{
// // //                 color: hovered ? "#020617" : "rgba(148,163,184,0.6)",
// // //                 transform: hovered ? "translateX(2px)" : "none",
// // //                 transition: "all 0.3s ease",
// // //               }}
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // "use client";

// // import React, { useState, useEffect, useRef, useCallback } from "react";
// // import { ExternalLink, X, Github, ArrowUpRight, MoveRight } from "lucide-react";

// // interface Project {
// //   id: string | number;
// //   title: string;
// //   category: string;
// //   description: string;
// //   longDescription?: string;
// //   imagePath: string;
// //   tech: string[];
// //   link?: string;
// //   github?: string;
// // }

// // // ---- MODAL ----
// // const ProjectModal = ({
// //   project,
// //   onClose,
// // }: {
// //   project: Project;
// //   onClose: () => void;
// // }) => {
// //   useEffect(() => {
// //     document.body.style.overflow = "hidden";
// //     const handleKey = (e: KeyboardEvent) => {
// //       if (e.key === "Escape") onClose();
// //     };
// //     window.addEventListener("keydown", handleKey);
// //     return () => {
// //       document.body.style.overflow = "unset";
// //       window.removeEventListener("keydown", handleKey);
// //     };
// //   }, [onClose]);

// //   return (
// //     <div
// //       className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
// //       style={{ animation: "fadeIn 0.25s ease-out" }}
// //     >
// //       <div
// //         className="absolute inset-0 bg-black/70 backdrop-blur-xl"
// //         onClick={onClose}
// //       />
// //       <div
// //         className="relative w-full max-w-5xl max-h-[88vh] rounded-[2rem] overflow-hidden flex flex-col"
// //         style={{
// //           background: "linear-gradient(145deg, #0d1117 0%, #0a0e1a 100%)",
// //           border: "1px solid rgba(255,255,255,0.08)",
// //           boxShadow:
// //             "0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(99,102,241,0.1)",
// //           animation: "slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
// //         }}
// //       >
// //         <div className="flex items-start justify-between p-7 border-b border-white/[0.06] shrink-0">
// //           <div>
// //             <p className="text-indigo-400 text-[10px] font-bold tracking-[0.25em] uppercase mb-2">
// //               {project.category}
// //             </p>
// //             <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">
// //               {project.title}
// //             </h2>
// //           </div>
// //           <button
// //             onClick={onClose}
// //             className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all duration-200 hover:rotate-90 shrink-0 ml-4"
// //           >
// //             <X className="w-4 h-4" />
// //           </button>
// //         </div>
// //         <div className="overflow-y-auto flex-1 p-7 space-y-8">
// //           <div
// //             className="rounded-2xl overflow-hidden"
// //             style={{ border: "1px solid rgba(255,255,255,0.06)" }}
// //           >
// //             <img
// //               src={project.imagePath}
// //               alt={project.title}
// //               className="w-full h-auto object-cover"
// //             />
// //           </div>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             <div className="md:col-span-2">
// //               <h3 className="text-lg font-bold text-white mb-3">Overview</h3>
// //               <p className="text-slate-400 leading-relaxed font-light text-base">
// //                 {project.longDescription || project.description}
// //               </p>
// //             </div>
// //             <div className="space-y-6">
// //               <div>
// //                 <p className="text-xs font-bold text-white uppercase tracking-widest mb-3">
// //                   Tech Stack
// //                 </p>
// //                 <div className="flex flex-wrap gap-2">
// //                   {project.tech.map((t, i) => (
// //                     <span
// //                       key={i}
// //                       className="px-3 py-1.5 text-xs font-medium text-indigo-300 rounded-lg"
// //                       style={{
// //                         background: "rgba(99,102,241,0.1)",
// //                         border: "1px solid rgba(99,102,241,0.2)",
// //                       }}
// //                     >
// //                       {t}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>
// //               <div
// //                 className="space-y-3 pt-5"
// //                 style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
// //               >
// //                 {project.link && project.link !== "#" && (
// //                   <a
// //                     href={project.link}
// //                     target="_blank"
// //                     rel="noreferrer"
// //                     className="flex items-center justify-between px-5 py-3 bg-white text-slate-950 rounded-xl font-bold text-sm transition-all hover:bg-slate-100 group"
// //                   >
// //                     Visit Live Site
// //                     <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
// //                   </a>
// //                 )}
// //                 {project.github && project.github !== "#" && (
// //                   <a
// //                     href={project.github}
// //                     target="_blank"
// //                     rel="noreferrer"
// //                     className="flex items-center justify-between px-5 py-3 text-white rounded-xl font-medium text-sm transition-all group"
// //                     style={{
// //                       background: "rgba(255,255,255,0.05)",
// //                       border: "1px solid rgba(255,255,255,0.08)",
// //                     }}
// //                   >
// //                     View Source Code
// //                     <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
// //                   </a>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <style>{`
// //         @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
// //         @keyframes slideUp { from { opacity:0; transform:translateY(32px) scale(0.97) } to { opacity:1; transform:translateY(0) scale(1) } }
// //       `}</style>
// //     </div>
// //   );
// // };

// // // ---- MAIN COMPONENT ----
// // export default function Projects({ projects }: { projects: Project[] }) {
// //   const [filter, setFilter] = useState("All");
// //   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   // Use refs instead of state for scroll values to prevent re-render loops
// //   const sectionRef = useRef<HTMLElement>(null);
// //   const trackRef = useRef<HTMLDivElement>(null);
// //   const translateXRef = useRef(0);
// //   const animFrameRef = useRef<number>(0);
// //   const trackElRef = useRef<HTMLDivElement>(null);

// //   const categories = [
// //     "All",
// //     ...Array.from(new Set(projects.map((p) => p.category))),
// //   ];
// //   const filteredProjects =
// //     filter === "All" ? projects : projects.filter((p) => p.category === filter);
// //   const totalCards = filteredProjects.length;

// //   // Scroll handler — updates DOM directly, no setState
// //   const handleScroll = useCallback(() => {
// //     const section = sectionRef.current;
// //     const track = trackElRef.current;
// //     if (!section || !track) return;

// //     const sectionTop = section.offsetTop;
// //     const sectionHeight = section.offsetHeight;
// //     const viewportHeight = window.innerHeight;
// //     const scrollStart = sectionTop;
// //     const scrollEnd = sectionTop + sectionHeight - viewportHeight;
// //     const currentScroll = window.scrollY;

// //     const raw =
// //       (currentScroll - scrollStart) / Math.max(1, scrollEnd - scrollStart);
// //     const clamped = Math.max(0, Math.min(1, raw));

// //     // Update translateX directly via DOM
// //     const trackWidth = track.scrollWidth;
// //     const vw = window.innerWidth;
// //     const maxTranslate = Math.min(0, -(trackWidth - vw + 80));
// //     const newX = clamped * maxTranslate;
// //     translateXRef.current = newX;
// //     track.style.transform = `translateX(${newX}px)`;

// //     // Update progress bar directly
// //     const progressEl = document.getElementById("projects-progress-bar");
// //     if (progressEl) progressEl.style.width = `${clamped * 100}%`;

// //     // Update scroll hint
// //     const hintEl = document.getElementById("projects-scroll-hint");
// //     if (hintEl) hintEl.style.opacity = clamped < 0.05 ? "1" : "0";

// //     // Active card — use setState only when index changes (stable)
// //     const newIndex = Math.round(clamped * (totalCards - 1));
// //     const clamped_idx = Math.max(0, Math.min(totalCards - 1, newIndex));
// //     setActiveIndex((prev) => (prev !== clamped_idx ? clamped_idx : prev));
// //   }, [totalCards]);

// //   useEffect(() => {
// //     window.addEventListener("scroll", handleScroll, { passive: true });
// //     handleScroll();
// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //       cancelAnimationFrame(animFrameRef.current);
// //     };
// //   }, [handleScroll]);

// //   useEffect(() => {
// //     // Re-run scroll calc when filter changes
// //     setTimeout(handleScroll, 50);
// //   }, [filter, handleScroll]);

// //   const SCROLL_PER_CARD = 350;
// //   const sectionHeight = `calc(100vh + ${totalCards * SCROLL_PER_CARD}px)`;

// //   return (
// //     <>
// //       <section
// //         id="projects"
// //         ref={sectionRef}
// //         style={{
// //           height: sectionHeight,
// //           position: "relative",
// //           background: "#020617",
// //         }}
// //       >
// //         <div
// //           style={{
// //             position: "sticky",
// //             top: 0,
// //             height: "100vh",
// //             overflow: "hidden",
// //             display: "flex",
// //             flexDirection: "column",
// //           }}
// //         >
// //           {/* Glows */}
// //           <div
// //             style={{
// //               position: "absolute",
// //               top: "-20%",
// //               left: "-10%",
// //               width: 600,
// //               height: 600,
// //               background:
// //                 "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
// //               pointerEvents: "none",
// //             }}
// //           />
// //           <div
// //             style={{
// //               position: "absolute",
// //               bottom: "-20%",
// //               right: "-10%",
// //               width: 500,
// //               height: 500,
// //               background:
// //                 "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
// //               pointerEvents: "none",
// //             }}
// //           />

// //           {/* Header */}
// //           <div
// //             style={{
// //               padding: "5rem 2rem 0",
// //               maxWidth: 1400,
// //               width: "100%",
// //               margin: "0 auto",
// //               flexShrink: 0,
// //               position: "relative",
// //               zIndex: 10,
// //             }}
// //           >
// //             <div
// //               style={{
// //                 display: "flex",
// //                 alignItems: "flex-end",
// //                 justifyContent: "space-between",
// //                 flexWrap: "wrap",
// //                 gap: "1.5rem",
// //                 marginBottom: "2rem",
// //               }}
// //             >
// //               <div>
// //                 <p
// //                   style={{
// //                     color: "#818cf8",
// //                     fontSize: 11,
// //                     fontWeight: 700,
// //                     letterSpacing: "0.25em",
// //                     textTransform: "uppercase",
// //                     marginBottom: "0.5rem",
// //                   }}
// //                 >
// //                   My Work & Process
// //                 </p>
// //                 <h2
// //                   style={{
// //                     fontSize: "clamp(2.5rem, 5vw, 4rem)",
// //                     fontWeight: 900,
// //                     color: "white",
// //                     letterSpacing: "-0.03em",
// //                     lineHeight: 1,
// //                     margin: 0,
// //                   }}
// //                 >
// //                   Featured Projects
// //                 </h2>
// //               </div>
// //               {/* Dot indicators + counter */}
// //               <div
// //                 style={{ display: "flex", alignItems: "center", gap: "1rem" }}
// //               >
// //                 <div style={{ display: "flex", gap: 6 }}>
// //                   {filteredProjects.map((_, i) => (
// //                     <div
// //                       key={i}
// //                       style={{
// //                         width: i === activeIndex ? 24 : 6,
// //                         height: 6,
// //                         borderRadius: 3,
// //                         background:
// //                           i === activeIndex
// //                             ? "#818cf8"
// //                             : "rgba(255,255,255,0.15)",
// //                         transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
// //                       }}
// //                     />
// //                   ))}
// //                 </div>
// //                 <span
// //                   style={{
// //                     color: "rgba(255,255,255,0.3)",
// //                     fontSize: 12,
// //                     fontWeight: 500,
// //                   }}
// //                 >
// //                   {String(activeIndex + 1).padStart(2, "0")} /{" "}
// //                   {String(totalCards).padStart(2, "0")}
// //                 </span>
// //               </div>
// //             </div>

// //             {/* Filter chips */}
// //             <div
// //               style={{
// //                 display: "flex",
// //                 flexWrap: "wrap",
// //                 gap: 10,
// //                 marginBottom: "1.5rem",
// //               }}
// //             >
// //               {categories.map((cat) => (
// //                 <button
// //                   key={cat}
// //                   onClick={() => setFilter(cat)}
// //                   style={{
// //                     padding: "8px 18px",
// //                     borderRadius: 100,
// //                     fontSize: 13,
// //                     fontWeight: 600,
// //                     cursor: "pointer",
// //                     transition: "all 0.3s ease",
// //                     border:
// //                       filter === cat
// //                         ? "1px solid white"
// //                         : "1px solid rgba(255,255,255,0.1)",
// //                     background:
// //                       filter === cat ? "white" : "rgba(255,255,255,0.04)",
// //                     color: filter === cat ? "#020617" : "rgba(255,255,255,0.5)",
// //                     boxShadow:
// //                       filter === cat
// //                         ? "0 0 20px rgba(255,255,255,0.15)"
// //                         : "none",
// //                   }}
// //                 >
// //                   {cat}
// //                 </button>
// //               ))}
// //             </div>

// //             {/* Scroll hint */}
// //             <div
// //               id="projects-scroll-hint"
// //               style={{
// //                 display: "flex",
// //                 alignItems: "center",
// //                 gap: 10,
// //                 transition: "opacity 0.5s ease",
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   width: 120,
// //                   height: 1,
// //                   background:
// //                     "linear-gradient(90deg, rgba(129,140,248,0.6), transparent)",
// //                 }}
// //               />
// //               <span
// //                 style={{
// //                   color: "rgba(129,140,248,0.7)",
// //                   fontSize: 11,
// //                   fontWeight: 600,
// //                   letterSpacing: "0.15em",
// //                   textTransform: "uppercase",
// //                 }}
// //               >
// //                 Scroll to explore
// //               </span>
// //             </div>
// //           </div>

// //           {/* Horizontal track */}
// //           <div
// //             style={{
// //               flex: 1,
// //               display: "flex",
// //               alignItems: "center",
// //               position: "relative",
// //               zIndex: 10,
// //               overflow: "visible",
// //             }}
// //           >
// //             {/* Edge fades */}
// //             <div
// //               style={{
// //                 position: "absolute",
// //                 left: 0,
// //                 top: 0,
// //                 bottom: 0,
// //                 width: 80,
// //                 background: "linear-gradient(90deg, #020617, transparent)",
// //                 zIndex: 20,
// //                 pointerEvents: "none",
// //               }}
// //             />
// //             <div
// //               style={{
// //                 position: "absolute",
// //                 right: 0,
// //                 top: 0,
// //                 bottom: 0,
// //                 width: 120,
// //                 background: "linear-gradient(-90deg, #020617, transparent)",
// //                 zIndex: 20,
// //                 pointerEvents: "none",
// //               }}
// //             />

// //             <div
// //               ref={trackElRef}
// //               style={{
// //                 display: "flex",
// //                 gap: 28,
// //                 paddingLeft: "clamp(2rem, 5vw, 5rem)",
// //                 paddingRight: "clamp(2rem, 5vw, 5rem)",
// //                 paddingBottom: "2rem",
// //                 paddingTop: "1rem",
// //                 transition: "transform 0.08s linear",
// //                 willChange: "transform",
// //                 alignItems: "stretch",
// //               }}
// //             >
// //               {filteredProjects.map((project, index) => (
// //                 <ProjectCard
// //                   key={project.id}
// //                   project={project}
// //                   isActive={index === activeIndex}
// //                   onClick={() => setSelectedProject(project)}
// //                 />
// //               ))}
// //             </div>
// //           </div>

// //           {/* Progress bar */}
// //           <div
// //             style={{
// //               position: "absolute",
// //               bottom: 0,
// //               left: 0,
// //               right: 0,
// //               height: 2,
// //               background: "rgba(255,255,255,0.05)",
// //             }}
// //           >
// //             <div
// //               id="projects-progress-bar"
// //               style={{
// //                 height: "100%",
// //                 width: "0%",
// //                 background: "linear-gradient(90deg, #6366f1, #a78bfa)",
// //                 borderRadius: "0 2px 2px 0",
// //               }}
// //             />
// //           </div>
// //         </div>
// //       </section>

// //       {selectedProject && (
// //         <ProjectModal
// //           project={selectedProject}
// //           onClose={() => setSelectedProject(null)}
// //         />
// //       )}

// //       {/* CSS for card hover — pure CSS, no JS state */}
// //       <style>{`
// //         .proj-card {
// //           transition: transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease, border-color 0.5s ease, background 0.5s ease;
// //         }
// //         .proj-card:hover {
// //           transform: translateY(-10px) !important;
// //           box-shadow: 0 32px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(99,102,241,0.2) !important;
// //           background: rgba(255,255,255,0.045) !important;
// //           border-color: rgba(99,102,241,0.25) !important;
// //         }
// //         .proj-card .card-img {
// //           transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
// //         }
// //         .proj-card:hover .card-img { transform: scale(1.07); }
// //         .proj-card .card-overlay {
// //           opacity: 0;
// //           transition: opacity 0.3s ease;
// //         }
// //         .proj-card:hover .card-overlay { opacity: 1; }
// //         .proj-card .card-overlay-btn {
// //           transform: scale(0.85);
// //           transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
// //         }
// //         .proj-card:hover .card-overlay-btn { transform: scale(1); }
// //         .proj-card .card-title {
// //           transition: color 0.3s ease;
// //         }
// //         .proj-card:hover .card-title { color: #c7d2fe; }
// //         .proj-card .card-arrow-wrap {
// //           transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
// //           border: 1px solid rgba(255,255,255,0.1);
// //           background: transparent;
// //         }
// //         .proj-card:hover .card-arrow-wrap {
// //           border-color: white;
// //           background: white;
// //         }
// //         .proj-card .card-arrow-icon {
// //           transition: all 0.3s ease;
// //           color: rgba(148,163,184,0.6);
// //         }
// //         .proj-card:hover .card-arrow-icon {
// //           color: #020617;
// //           transform: translateX(2px);
// //         }
// //       `}</style>
// //     </>
// //   );
// // }

// // // ---- CARD — pure CSS hover, zero JS state ----
// // function ProjectCard({
// //   project,
// //   isActive,
// //   onClick,
// // }: {
// //   project: Project;
// //   isActive: boolean;
// //   onClick: () => void;
// // }) {
// //   return (
// //     <div
// //       className="proj-card"
// //       onClick={onClick}
// //       style={{
// //         width: "clamp(300px, 27vw, 450px)",
// //         height: "clamp(460px, 60vh, 560px)",
// //         flexShrink: 0,
// //         borderRadius: "2.5rem",
// //         overflow: "hidden",
// //         cursor: "pointer",
// //         display: "flex",
// //         flexDirection: "column",
// //         background: "rgba(255,255,255,0.02)",
// //         border: isActive
// //           ? "1px solid rgba(99,102,241,0.28)"
// //           : "1px solid rgba(255,255,255,0.05)",
// //         boxShadow: isActive
// //           ? "0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.08)"
// //           : "0 8px 32px rgba(0,0,0,0.3)",
// //         position: "relative",
// //       }}
// //     >
// //       {/* Active glow */}
// //       {isActive && (
// //         <div
// //           style={{
// //             position: "absolute",
// //             inset: 0,
// //             pointerEvents: "none",
// //             zIndex: 1,
// //             background:
// //               "linear-gradient(135deg, rgba(99,102,241,0.06), transparent 60%)",
// //             borderRadius: "inherit",
// //           }}
// //         />
// //       )}

// //       {/* Image */}
// //       <div style={{ padding: "1rem", height: "55%", flexShrink: 0 }}>
// //         <div
// //           style={{
// //             width: "100%",
// //             height: "100%",
// //             borderRadius: "1.8rem",
// //             overflow: "hidden",
// //             position: "relative",
// //           }}
// //         >
// //           <img
// //             src={project.imagePath}
// //             alt={project.title}
// //             loading="lazy"
// //             className="card-img"
// //             style={{
// //               width: "100%",
// //               height: "100%",
// //               objectFit: "cover",
// //               display: "block",
// //             }}
// //           />
// //           <div
// //             className="card-overlay"
// //             style={{
// //               position: "absolute",
// //               inset: 0,
// //               background: "rgba(2,6,23,0.52)",
// //               backdropFilter: "blur(4px)",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //             }}
// //           >
// //             <div
// //               className="card-overlay-btn"
// //               style={{
// //                 padding: "10px 22px",
// //                 background: "white",
// //                 color: "#020617",
// //                 borderRadius: 100,
// //                 fontSize: 13,
// //                 fontWeight: 700,
// //                 display: "flex",
// //                 alignItems: "center",
// //                 gap: 8,
// //                 boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
// //               }}
// //             >
// //               <ArrowUpRight size={14} />
// //               View Details
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Text */}
// //       <div
// //         style={{
// //           padding: "0 1.5rem 1.5rem",
// //           display: "flex",
// //           flexDirection: "column",
// //           flex: 1,
// //           position: "relative",
// //           zIndex: 2,
// //         }}
// //       >
// //         <p
// //           style={{
// //             color: "#818cf8",
// //             fontSize: 10,
// //             fontWeight: 700,
// //             letterSpacing: "0.22em",
// //             textTransform: "uppercase",
// //             marginBottom: 8,
// //           }}
// //         >
// //           {project.category}
// //         </p>
// //         <h3
// //           className="card-title"
// //           style={{
// //             fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
// //             fontWeight: 800,
// //             color: "white",
// //             marginBottom: 10,
// //             lineHeight: 1.2,
// //             letterSpacing: "-0.02em",
// //           }}
// //         >
// //           {project.title}
// //         </h3>
// //         <p
// //           style={{
// //             color: "rgba(148,163,184,0.8)",
// //             fontSize: 13,
// //             lineHeight: 1.65,
// //             fontWeight: 300,
// //             marginBottom: "auto",
// //             display: "-webkit-box",
// //             WebkitLineClamp: 3,
// //             WebkitBoxOrient: "vertical",
// //             overflow: "hidden",
// //           }}
// //         >
// //           {project.description}
// //         </p>

// //         <div
// //           style={{
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "space-between",
// //             marginTop: "1.25rem",
// //             paddingTop: "1rem",
// //             borderTop: "1px solid rgba(255,255,255,0.05)",
// //           }}
// //         >
// //           <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
// //             {project.tech.slice(0, 2).map((t, i) => (
// //               <span
// //                 key={i}
// //                 style={{
// //                   padding: "4px 10px",
// //                   background: "rgba(255,255,255,0.04)",
// //                   border: "1px solid rgba(255,255,255,0.07)",
// //                   borderRadius: 6,
// //                   fontSize: 11,
// //                   fontWeight: 500,
// //                   color: "rgba(203,213,225,0.7)",
// //                 }}
// //               >
// //                 {t}
// //               </span>
// //             ))}
// //             {project.tech.length > 2 && (
// //               <span
// //                 style={{
// //                   padding: "4px 10px",
// //                   background: "rgba(255,255,255,0.04)",
// //                   border: "1px solid rgba(255,255,255,0.07)",
// //                   borderRadius: 6,
// //                   fontSize: 11,
// //                   fontWeight: 500,
// //                   color: "rgba(148,163,184,0.5)",
// //                 }}
// //               >
// //                 +{project.tech.length - 2}
// //               </span>
// //             )}
// //           </div>
// //           <div
// //             className="card-arrow-wrap"
// //             style={{
// //               width: 36,
// //               height: 36,
// //               borderRadius: "50%",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //               flexShrink: 0,
// //             }}
// //           >
// //             <MoveRight size={14} className="card-arrow-icon" />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import {
//   ExternalLink,
//   X,
//   Github,
//   ArrowUpRight,
//   MoveRight,
//   Maximize2,
// } from "lucide-react";

// export interface Project {
//   id: string | number;
//   title: string;
//   category: string;
//   description: string;
//   longDescription?: string;
//   imagePath: string;
//   tech: string[];
//   link?: string;
//   github?: string;
//   gallery?: { imgPath: string; caption: string }[];
// }

// // ---- MODAL (DIKEMBALIKAN KE VERSI AWAL SEPERTI REQUEST) ----
// const ProjectModal = ({
//   project,
//   onClose,
// }: {
//   project: Project;
//   onClose: () => void;
// }) => {
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     const handleKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", handleKey);
//     return () => {
//       document.body.style.overflow = "unset";
//       window.removeEventListener("keydown", handleKey);
//     };
//   }, [onClose]);

//   return (
//     <div
//       className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
//       style={{ animation: "fadeIn 0.2s ease-out" }}
//     >
//       <div
//         className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
//         onClick={onClose}
//       ></div>
//       <div className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden animate-[fadeInUp_0.4s_ease-out]">
//         {/* HEADER MODAL */}
//         <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900/50 shrink-0">
//           <div>
//             <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase mb-1 block">
//               {project.category}
//             </span>
//             <h2 className="text-2xl md:text-3xl font-bold text-white">
//               {project.title}
//             </h2>
//           </div>
//           <button
//             onClick={onClose}
//             className="p-2 bg-slate-800 rounded-full text-gray-400 hover:text-white hover:bg-red-500/20 hover:text-red-500 transition-all"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* BODY KONTEN (Area Scroll) */}
//         <div
//           className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar overscroll-contain"
//           data-lenis-prevent="true"
//         >
//           <div className="rounded-xl overflow-hidden border border-slate-700 shadow-lg">
//             <img
//               src={project.imagePath}
//               alt={project.title}
//               loading="lazy"
//               className="w-full h-auto object-cover"
//             />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="md:col-span-2 space-y-4">
//               <h3 className="text-xl font-bold text-white">About Project</h3>
//               <p className="text-gray-300 leading-relaxed text-lg">
//                 {project.longDescription || project.description}
//               </p>
//             </div>
//             <div className="space-y-4">
//               <h3 className="text-xl font-bold text-white">
//                 Technologies & Links
//               </h3>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tech.map((t, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 bg-slate-800 text-blue-300 text-sm rounded-full border border-slate-700"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex flex-col gap-3">
//                 {project.link && project.link !== "#" && (
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
//                   >
//                     Visit Website <ExternalLink className="w-4 h-4" />
//                   </a>
//                 )}
//                 {project.github && project.github !== "#" && (
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 rounded-lg font-medium transition-colors"
//                   >
//                     Source Code <Github className="w-4 h-4" />
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//           {project.gallery && project.gallery.length > 0 && (
//             <div className="space-y-4 pt-4 border-t border-slate-800">
//               <h3 className="text-xl font-bold text-white mb-4">
//                 Project Gallery
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {project.gallery.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-800"
//                   >
//                     <img
//                       src={item.imgPath}
//                       alt={item.caption}
//                       loading="lazy"
//                       className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
//                     />
//                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-4 pt-12 opacity-0 group-hover:opacity-100 transition-opacity">
//                       <p className="text-white text-sm font-medium">
//                         {item.caption}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <style>{`
//         @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
//       `}</style>
//     </div>
//   );
// };

// // ---- MAIN COMPONENT ----
// export default function Projects({ projects }: { projects: Project[] }) {
//   const [filter, setFilter] = useState("All");
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Use refs instead of state for scroll values to prevent re-render loops
//   const sectionRef = useRef<HTMLElement>(null);
//   const trackRef = useRef<HTMLDivElement>(null);
//   const translateXRef = useRef(0);
//   const animFrameRef = useRef<number>(0);
//   const trackElRef = useRef<HTMLDivElement>(null);

//   const categories = [
//     "All",
//     ...Array.from(new Set(projects.map((p) => p.category))),
//   ];
//   const filteredProjects =
//     filter === "All" ? projects : projects.filter((p) => p.category === filter);
//   const totalCards = filteredProjects.length;

//   // Scroll handler — updates DOM directly, no setState
//   const handleScroll = useCallback(() => {
//     const section = sectionRef.current;
//     const track = trackElRef.current;
//     if (!section || !track) return;

//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.offsetHeight;
//     const viewportHeight = window.innerHeight;
//     const scrollStart = sectionTop;
//     const scrollEnd = sectionTop + sectionHeight - viewportHeight;
//     const currentScroll = window.scrollY;

//     const raw =
//       (currentScroll - scrollStart) / Math.max(1, scrollEnd - scrollStart);
//     const clamped = Math.max(0, Math.min(1, raw));

//     // Update translateX directly via DOM
//     const trackWidth = track.scrollWidth;
//     const vw = window.innerWidth;
//     const maxTranslate = Math.min(0, -(trackWidth - vw + 80));
//     const newX = clamped * maxTranslate;
//     translateXRef.current = newX;
//     track.style.transform = `translateX(${newX}px)`;

//     // Update progress bar directly
//     const progressEl = document.getElementById("projects-progress-bar");
//     if (progressEl) progressEl.style.width = `${clamped * 100}%`;

//     // Update scroll hint
//     const hintEl = document.getElementById("projects-scroll-hint");
//     if (hintEl) hintEl.style.opacity = clamped < 0.05 ? "1" : "0";

//     // Active card — use setState only when index changes (stable)
//     const newIndex = Math.round(clamped * (totalCards - 1));
//     const clamped_idx = Math.max(0, Math.min(totalCards - 1, newIndex));
//     setActiveIndex((prev) => (prev !== clamped_idx ? clamped_idx : prev));
//   }, [totalCards]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       cancelAnimationFrame(animFrameRef.current);
//     };
//   }, [handleScroll]);

//   useEffect(() => {
//     // Re-run scroll calc when filter changes
//     setTimeout(handleScroll, 50);
//   }, [filter, handleScroll]);

//   const SCROLL_PER_CARD = 350;
//   const sectionHeight = `calc(100vh + ${totalCards * SCROLL_PER_CARD}px)`;

//   return (
//     <>
//       <section
//         id="projects"
//         ref={sectionRef}
//         style={{
//           height: sectionHeight,
//           position: "relative",
//           background: "#020617",
//         }}
//       >
//         <div
//           style={{
//             position: "sticky",
//             top: 0,
//             height: "100vh",
//             overflow: "hidden",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           {/* Glows */}
//           <div
//             style={{
//               position: "absolute",
//               top: "-20%",
//               left: "-10%",
//               width: 600,
//               height: 600,
//               background:
//                 "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
//               pointerEvents: "none",
//             }}
//           />
//           <div
//             style={{
//               position: "absolute",
//               bottom: "-20%",
//               right: "-10%",
//               width: 500,
//               height: 500,
//               background:
//                 "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
//               pointerEvents: "none",
//             }}
//           />

//           {/* Header */}
//           <div
//             style={{
//               padding: "5rem 2rem 0",
//               maxWidth: 1400,
//               width: "100%",
//               margin: "0 auto",
//               flexShrink: 0,
//               position: "relative",
//               zIndex: 10,
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "flex-end",
//                 justifyContent: "space-between",
//                 flexWrap: "wrap",
//                 gap: "1.5rem",
//                 marginBottom: "2rem",
//               }}
//             >
//               <div>
//                 <p
//                   style={{
//                     color: "#818cf8",
//                     fontSize: 11,
//                     fontWeight: 700,
//                     letterSpacing: "0.25em",
//                     textTransform: "uppercase",
//                     marginBottom: "0.5rem",
//                   }}
//                 >
//                   My Work & Process
//                 </p>
//                 <h2
//                   style={{
//                     fontSize: "clamp(2.5rem, 5vw, 4rem)",
//                     fontWeight: 900,
//                     color: "white",
//                     letterSpacing: "-0.03em",
//                     lineHeight: 1,
//                     margin: 0,
//                   }}
//                 >
//                   Featured Projects
//                 </h2>
//               </div>
//               {/* Dot indicators + counter */}
//               <div
//                 style={{ display: "flex", alignItems: "center", gap: "1rem" }}
//               >
//                 <div style={{ display: "flex", gap: 6 }}>
//                   {filteredProjects.map((_, i) => (
//                     <div
//                       key={i}
//                       style={{
//                         width: i === activeIndex ? 24 : 6,
//                         height: 6,
//                         borderRadius: 3,
//                         background:
//                           i === activeIndex
//                             ? "#818cf8"
//                             : "rgba(255,255,255,0.15)",
//                         transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
//                       }}
//                     />
//                   ))}
//                 </div>
//                 <span
//                   style={{
//                     color: "rgba(255,255,255,0.3)",
//                     fontSize: 12,
//                     fontWeight: 500,
//                   }}
//                 >
//                   {String(activeIndex + 1).padStart(2, "0")} /{" "}
//                   {String(totalCards).padStart(2, "0")}
//                 </span>
//               </div>
//             </div>

//             {/* Filter chips */}
//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: 10,
//                 marginBottom: "1.5rem",
//               }}
//             >
//               {categories.map((cat) => (
//                 <button
//                   key={cat}
//                   onClick={() => setFilter(cat)}
//                   style={{
//                     padding: "8px 18px",
//                     borderRadius: 100,
//                     fontSize: 13,
//                     fontWeight: 600,
//                     cursor: "pointer",
//                     transition: "all 0.3s ease",
//                     border:
//                       filter === cat
//                         ? "1px solid white"
//                         : "1px solid rgba(255,255,255,0.1)",
//                     background:
//                       filter === cat ? "white" : "rgba(255,255,255,0.04)",
//                     color: filter === cat ? "#020617" : "rgba(255,255,255,0.5)",
//                     boxShadow:
//                       filter === cat
//                         ? "0 0 20px rgba(255,255,255,0.15)"
//                         : "none",
//                   }}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>

//             {/* Scroll hint */}
//             <div
//               id="projects-scroll-hint"
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 10,
//                 transition: "opacity 0.5s ease",
//               }}
//             >
//               <div
//                 style={{
//                   width: 120,
//                   height: 1,
//                   background:
//                     "linear-gradient(90deg, rgba(129,140,248,0.6), transparent)",
//                 }}
//               />
//               <span
//                 style={{
//                   color: "rgba(129,140,248,0.7)",
//                   fontSize: 11,
//                   fontWeight: 600,
//                   letterSpacing: "0.15em",
//                   textTransform: "uppercase",
//                 }}
//               >
//                 Scroll to explore
//               </span>
//             </div>
//           </div>

//           {/* Horizontal track */}
//           <div
//             style={{
//               flex: 1,
//               display: "flex",
//               alignItems: "center",
//               position: "relative",
//               zIndex: 10,
//               overflow: "visible",
//             }}
//           >
//             {/* Edge fades */}
//             <div
//               style={{
//                 position: "absolute",
//                 left: 0,
//                 top: 0,
//                 bottom: 0,
//                 width: 80,
//                 background: "linear-gradient(90deg, #020617, transparent)",
//                 zIndex: 20,
//                 pointerEvents: "none",
//               }}
//             />
//             <div
//               style={{
//                 position: "absolute",
//                 right: 0,
//                 top: 0,
//                 bottom: 0,
//                 width: 120,
//                 background: "linear-gradient(-90deg, #020617, transparent)",
//                 zIndex: 20,
//                 pointerEvents: "none",
//               }}
//             />

//             <div
//               ref={trackElRef}
//               style={{
//                 display: "flex",
//                 gap: 28,
//                 paddingLeft: "clamp(2rem, 5vw, 5rem)",
//                 paddingRight: "clamp(2rem, 5vw, 5rem)",
//                 paddingBottom: "2rem",
//                 paddingTop: "1rem",
//                 transition: "transform 0.08s linear",
//                 willChange: "transform",
//                 alignItems: "stretch",
//               }}
//             >
//               {filteredProjects.map((project, index) => (
//                 <ProjectCard
//                   key={project.id}
//                   project={project}
//                   isActive={index === activeIndex}
//                   onClick={() => setSelectedProject(project)}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Progress bar */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: 0,
//               left: 0,
//               right: 0,
//               height: 2,
//               background: "rgba(255,255,255,0.05)",
//             }}
//           >
//             <div
//               id="projects-progress-bar"
//               style={{
//                 height: "100%",
//                 width: "0%",
//                 background: "linear-gradient(90deg, #6366f1, #a78bfa)",
//                 borderRadius: "0 2px 2px 0",
//               }}
//             />
//           </div>
//         </div>
//       </section>

//       {selectedProject && (
//         <ProjectModal
//           project={selectedProject}
//           onClose={() => setSelectedProject(null)}
//         />
//       )}

//       {/* CSS for card hover — pure CSS, no JS state */}
//       <style>{`
//         .proj-card {
//           transition: transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease, border-color 0.5s ease, background 0.5s ease;
//         }
//         .proj-card:hover {
//           transform: translateY(-10px) !important;
//           box-shadow: 0 32px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(99,102,241,0.2) !important;
//           background: rgba(255,255,255,0.045) !important;
//           border-color: rgba(99,102,241,0.25) !important;
//         }
//         .proj-card .card-img {
//           transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
//         }
//         .proj-card:hover .card-img { transform: scale(1.07); }
//         .proj-card .card-overlay {
//           opacity: 0;
//           transition: opacity 0.3s ease;
//         }
//         .proj-card:hover .card-overlay { opacity: 1; }
//         .proj-card .card-overlay-btn {
//           transform: scale(0.85);
//           transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
//         }
//         .proj-card:hover .card-overlay-btn { transform: scale(1); }
//         .proj-card .card-title {
//           transition: color 0.3s ease;
//         }
//         .proj-card:hover .card-title { color: #c7d2fe; }
//         .proj-card .card-arrow-wrap {
//           transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
//           border: 1px solid rgba(255,255,255,0.1);
//           background: transparent;
//         }
//         .proj-card:hover .card-arrow-wrap {
//           border-color: white;
//           background: white;
//         }
//         .proj-card .card-arrow-icon {
//           transition: all 0.3s ease;
//           color: rgba(148,163,184,0.6);
//         }
//         .proj-card:hover .card-arrow-icon {
//           color: #020617;
//           transform: translateX(2px);
//         }
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 8px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(15, 23, 42, 0.5);
//           border-radius: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(51, 65, 85, 0.8);
//           border-radius: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: rgba(71, 85, 105, 1);
//         }
//       `}</style>
//     </>
//   );
// }

// // ---- CARD — pure CSS hover, zero JS state ----
// function ProjectCard({
//   project,
//   isActive,
//   onClick,
// }: {
//   project: Project;
//   isActive: boolean;
//   onClick: () => void;
// }) {
//   return (
//     <div
//       className="proj-card"
//       onClick={onClick}
//       style={{
//         width: "clamp(300px, 27vw, 450px)",
//         height: "clamp(460px, 60vh, 560px)",
//         flexShrink: 0,
//         borderRadius: "2.5rem",
//         overflow: "hidden",
//         cursor: "pointer",
//         display: "flex",
//         flexDirection: "column",
//         background: "rgba(255,255,255,0.02)",
//         border: isActive
//           ? "1px solid rgba(99,102,241,0.28)"
//           : "1px solid rgba(255,255,255,0.05)",
//         boxShadow: isActive
//           ? "0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.08)"
//           : "0 8px 32px rgba(0,0,0,0.3)",
//         position: "relative",
//       }}
//     >
//       {/* Active glow */}
//       {isActive && (
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             pointerEvents: "none",
//             zIndex: 1,
//             background:
//               "linear-gradient(135deg, rgba(99,102,241,0.06), transparent 60%)",
//             borderRadius: "inherit",
//           }}
//         />
//       )}

//       {/* Image */}
//       <div style={{ padding: "1rem", height: "55%", flexShrink: 0 }}>
//         <div
//           style={{
//             width: "100%",
//             height: "100%",
//             borderRadius: "1.8rem",
//             overflow: "hidden",
//             position: "relative",
//           }}
//         >
//           <img
//             src={project.imagePath}
//             alt={project.title}
//             loading="lazy"
//             className="card-img"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               display: "block",
//             }}
//           />
//           <div
//             className="card-overlay"
//             style={{
//               position: "absolute",
//               inset: 0,
//               background: "rgba(2,6,23,0.52)",
//               backdropFilter: "blur(4px)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <div
//               className="card-overlay-btn"
//               style={{
//                 padding: "10px 22px",
//                 background: "white",
//                 color: "#020617",
//                 borderRadius: 100,
//                 fontSize: 13,
//                 fontWeight: 700,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 8,
//                 boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
//               }}
//             >
//               <ArrowUpRight size={14} />
//               View Details
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Text */}
//       <div
//         style={{
//           padding: "0 1.5rem 1.5rem",
//           display: "flex",
//           flexDirection: "column",
//           flex: 1,
//           position: "relative",
//           zIndex: 2,
//         }}
//       >
//         <p
//           style={{
//             color: "#818cf8",
//             fontSize: 10,
//             fontWeight: 700,
//             letterSpacing: "0.22em",
//             textTransform: "uppercase",
//             marginBottom: 8,
//           }}
//         >
//           {project.category}
//         </p>
//         <h3
//           className="card-title"
//           style={{
//             fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
//             fontWeight: 800,
//             color: "white",
//             marginBottom: 10,
//             lineHeight: 1.2,
//             letterSpacing: "-0.02em",
//           }}
//         >
//           {project.title}
//         </h3>
//         <p
//           style={{
//             color: "rgba(148,163,184,0.8)",
//             fontSize: 13,
//             lineHeight: 1.65,
//             fontWeight: 300,
//             marginBottom: "auto",
//             display: "-webkit-box",
//             WebkitLineClamp: 3,
//             WebkitBoxOrient: "vertical",
//             overflow: "hidden",
//           }}
//         >
//           {project.description}
//         </p>

//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             marginTop: "1.25rem",
//             paddingTop: "1rem",
//             borderTop: "1px solid rgba(255,255,255,0.05)",
//           }}
//         >
//           <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
//             {project.tech.slice(0, 2).map((t, i) => (
//               <span
//                 key={i}
//                 style={{
//                   padding: "4px 10px",
//                   background: "rgba(255,255,255,0.04)",
//                   border: "1px solid rgba(255,255,255,0.07)",
//                   borderRadius: 6,
//                   fontSize: 11,
//                   fontWeight: 500,
//                   color: "rgba(203,213,225,0.7)",
//                 }}
//               >
//                 {t}
//               </span>
//             ))}
//             {project.tech.length > 2 && (
//               <span
//                 style={{
//                   padding: "4px 10px",
//                   background: "rgba(255,255,255,0.04)",
//                   border: "1px solid rgba(255,255,255,0.07)",
//                   borderRadius: 6,
//                   fontSize: 11,
//                   fontWeight: 500,
//                   color: "rgba(148,163,184,0.5)",
//                 }}
//               >
//                 +{project.tech.length - 2}
//               </span>
//             )}
//           </div>
//           <div
//             className="card-arrow-wrap"
//             style={{
//               width: 36,
//               height: 36,
//               borderRadius: "50%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               flexShrink: 0,
//             }}
//           >
//             <MoveRight size={14} className="card-arrow-icon" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ExternalLink, X, Github, ArrowUpRight, MoveRight } from "lucide-react";

export interface Project {
  id: string | number;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  imagePath: string;
  tech: string[];
  link?: string;
  github?: string;
  gallery?: { imgPath: string; caption: string }[];
}

// ---- MODAL (VERSI AWAL YANG CLEAN) ----
const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      style={{ animation: "fadeIn 0.2s ease-out" }}
    >
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden animate-[fadeInUp_0.4s_ease-out]">
        {/* HEADER MODAL */}
        <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900/50 shrink-0">
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

        {/* BODY KONTEN (Area Scroll) */}
        <div
          className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar overscroll-contain"
          data-lenis-prevent="true"
        >
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
      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
      `}</style>
    </div>
  );
};

// ---- MAIN COMPONENT ----
export default function Projects({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Use refs instead of state for scroll values to prevent re-render loops
  const sectionRef = useRef<HTMLElement>(null);
  const translateXRef = useRef(0);
  const animFrameRef = useRef<number>(0);
  const trackElRef = useRef<HTMLDivElement>(null);

  const totalCards = projects.length;

  // Scroll handler — updates DOM directly, no setState
  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    const track = trackElRef.current;
    if (!section || !track) return;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollStart = sectionTop;
    const scrollEnd = sectionTop + sectionHeight - viewportHeight;
    const currentScroll = window.scrollY;

    const raw =
      (currentScroll - scrollStart) / Math.max(1, scrollEnd - scrollStart);
    const clamped = Math.max(0, Math.min(1, raw));

    // Update translateX directly via DOM
    const trackWidth = track.scrollWidth;
    const vw = window.innerWidth;
    const maxTranslate = Math.min(0, -(trackWidth - vw + 80));
    const newX = clamped * maxTranslate;
    translateXRef.current = newX;
    track.style.transform = `translateX(${newX}px)`;

    // Update progress bar directly
    const progressEl = document.getElementById("projects-progress-bar");
    if (progressEl) progressEl.style.width = `${clamped * 100}%`;

    // Update scroll hint
    const hintEl = document.getElementById("projects-scroll-hint");
    if (hintEl) hintEl.style.opacity = clamped < 0.05 ? "1" : "0";

    // Active card — use setState only when index changes (stable)
    const newIndex = Math.round(clamped * (totalCards - 1));
    const clamped_idx = Math.max(0, Math.min(totalCards - 1, newIndex));
    setActiveIndex((prev) => (prev !== clamped_idx ? clamped_idx : prev));
  }, [totalCards]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [handleScroll]);

  const SCROLL_PER_CARD = 350;
  const sectionHeight = `calc(100vh + ${totalCards * SCROLL_PER_CARD}px)`;

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        style={{
          height: sectionHeight,
          position: "relative",
          background: "#020617",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Glows */}
          <div
            style={{
              position: "absolute",
              top: "-20%",
              left: "-10%",
              width: 600,
              height: 600,
              background:
                "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-20%",
              right: "-10%",
              width: 500,
              height: 500,
              background:
                "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* HEADER (Rata Tengah & Dihapus Paragrafnya agar tidak terpotong) */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shrink-0 relative z-10 pt-16 sm:pt-20">
            <div className="text-center mb-6">
              <span className="text-indigo-400 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 sm:mb-3 block">
                My Work & Process
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Featured Projects
              </h2>

              {/* Dot indicators + counter */}
              <div className="flex items-center justify-center gap-4">
                <div style={{ display: "flex", gap: 6 }}>
                  {projects.map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: i === activeIndex ? 24 : 6,
                        height: 6,
                        borderRadius: 3,
                        background:
                          i === activeIndex
                            ? "#818cf8"
                            : "rgba(255,255,255,0.15)",
                        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                      }}
                    />
                  ))}
                </div>
                <span className="text-slate-400 text-sm font-medium">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(totalCards).padStart(2, "0")}
                </span>
              </div>

              {/* Scroll hint */}
              <div
                id="projects-scroll-hint"
                className="flex items-center justify-center gap-3 mt-5 transition-opacity duration-500"
              >
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-indigo-500/60" />
                <span className="text-indigo-400/70 text-[10px] font-semibold tracking-widest uppercase">
                  Scroll to explore
                </span>
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-indigo-500/60" />
              </div>
            </div>
          </div>

          {/* Horizontal track */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              position: "relative",
              zIndex: 10,
              overflow: "visible",
            }}
          >
            {/* Edge fades */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: 80,
                background: "linear-gradient(90deg, #020617, transparent)",
                zIndex: 20,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                width: 120,
                background: "linear-gradient(-90deg, #020617, transparent)",
                zIndex: 20,
                pointerEvents: "none",
              }}
            />

            <div
              ref={trackElRef}
              style={{
                display: "flex",
                gap: 28,
                paddingLeft: "clamp(2rem, 5vw, 5rem)",
                paddingRight: "clamp(2rem, 5vw, 5rem)",
                paddingBottom: "2rem",
                paddingTop: "1rem",
                transition: "transform 0.08s linear",
                willChange: "transform",
                alignItems: "stretch",
              }}
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isActive={index === activeIndex}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 2,
              background: "rgba(255,255,255,0.05)",
            }}
          >
            <div
              id="projects-progress-bar"
              style={{
                height: "100%",
                width: "0%",
                background: "linear-gradient(90deg, #6366f1, #a78bfa)",
                borderRadius: "0 2px 2px 0",
              }}
            />
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* CSS for card hover — pure CSS, no JS state */}
      <style>{`
        .proj-card {
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease, border-color 0.5s ease, background 0.5s ease;
        }
        .proj-card:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 32px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(99,102,241,0.2) !important;
          background: rgba(255,255,255,0.045) !important;
          border-color: rgba(99,102,241,0.25) !important;
        }
        .proj-card .card-img {
          transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .proj-card:hover .card-img { transform: scale(1.07); }
        .proj-card .card-overlay {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .proj-card:hover .card-overlay { opacity: 1; }
        .proj-card .card-overlay-btn {
          transform: scale(0.85);
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .proj-card:hover .card-overlay-btn { transform: scale(1); }
        .proj-card .card-title {
          transition: color 0.3s ease;
        }
        .proj-card:hover .card-title { color: #c7d2fe; }
        .proj-card .card-arrow-wrap {
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
        }
        .proj-card:hover .card-arrow-wrap {
          border-color: white;
          background: white;
        }
        .proj-card .card-arrow-icon {
          transition: all 0.3s ease;
          color: rgba(148,163,184,0.6);
        }
        .proj-card:hover .card-arrow-icon {
          color: #020617;
          transform: translateX(2px);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(51, 65, 85, 0.8);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(71, 85, 105, 1);
        }
      `}</style>
    </>
  );
}

// ---- CARD — pure CSS hover, zero JS state ----
function ProjectCard({
  project,
  isActive,
  onClick,
}: {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="proj-card"
      onClick={onClick}
      style={{
        width: "clamp(300px, 27vw, 450px)",
        height: "clamp(460px, 60vh, 560px)",
        flexShrink: 0,
        borderRadius: "2.5rem",
        overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        background: "rgba(255,255,255,0.02)",
        border: isActive
          ? "1px solid rgba(99,102,241,0.28)"
          : "1px solid rgba(255,255,255,0.05)",
        boxShadow: isActive
          ? "0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.08)"
          : "0 8px 32px rgba(0,0,0,0.3)",
        position: "relative",
      }}
    >
      {/* Active glow */}
      {isActive && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 1,
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.06), transparent 60%)",
            borderRadius: "inherit",
          }}
        />
      )}

      {/* Image */}
      <div style={{ padding: "1rem", height: "55%", flexShrink: 0 }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "1.8rem",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={project.imagePath}
            alt={project.title}
            loading="lazy"
            className="card-img"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div
            className="card-overlay"
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(2,6,23,0.52)",
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="card-overlay-btn"
              style={{
                padding: "10px 22px",
                background: "white",
                color: "#020617",
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
            >
              <ArrowUpRight size={14} />
              View Details
            </div>
          </div>
        </div>
      </div>

      {/* Text */}
      <div
        style={{
          padding: "0 1.5rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          position: "relative",
          zIndex: 2,
        }}
      >
        <p
          style={{
            color: "#818cf8",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          {project.category}
        </p>
        <h3
          className="card-title"
          style={{
            fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
            fontWeight: 800,
            color: "white",
            marginBottom: 10,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            color: "rgba(148,163,184,0.8)",
            fontSize: 13,
            lineHeight: 1.65,
            fontWeight: 300,
            marginBottom: "auto",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1.25rem",
            paddingTop: "1rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {project.tech.slice(0, 2).map((t, i) => (
              <span
                key={i}
                style={{
                  padding: "4px 10px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 6,
                  fontSize: 11,
                  fontWeight: 500,
                  color: "rgba(203,213,225,0.7)",
                }}
              >
                {t}
              </span>
            ))}
            {project.tech.length > 2 && (
              <span
                style={{
                  padding: "4px 10px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 6,
                  fontSize: 11,
                  fontWeight: 500,
                  color: "rgba(148,163,184,0.5)",
                }}
              >
                +{project.tech.length - 2}
              </span>
            )}
          </div>
          <div
            className="card-arrow-wrap"
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <MoveRight size={14} className="card-arrow-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
