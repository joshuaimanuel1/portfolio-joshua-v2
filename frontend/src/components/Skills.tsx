// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import * as LucideIcons from "lucide-react";
// import { Skill } from "../types";

// export default function Skills({ skills }: { skills: Skill[] }) {
//   const [activeTab, setActiveTab] = useState("All");
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   const categories = [
//     "All",
//     "Languages",
//     "Frameworks",
//     "Design",
//     "Databases",
//     "Tools",
//   ];
//   const filteredSkills =
//     activeTab === "All"
//       ? skills
//       : skills.filter((s) => s.category === activeTab);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.1 },
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   const getIcon = (iconName: string) => {
//     const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Code;
//     return <IconComponent className="w-6 h-6 text-slate-300" />;
//   };

//   return (
//     <section
//       id="skills"
//       className="py-24 bg-slate-950 relative"
//       ref={sectionRef}
//     >
//       <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
//       <div className="absolute bottom-1/4 left-0 w-[30rem] h-[30rem] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

//       <div
//         className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-section ${
//           isVisible ? "is-visible" : ""
//         }`}
//       >
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
//             Creative Tech Stack
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
//             The technical arsenal I explore to create elegant digital solutions.
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map((cat, idx) => (
//             <button
//               key={cat}
//               onClick={() => setActiveTab(cat)}
//               style={{ transitionDelay: `${idx * 50}ms` }}
//               className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
//                 activeTab === cat
//                   ? "bg-white text-slate-900 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] transform scale-105"
//                   : "bg-slate-900/50 text-gray-400 border-slate-700 hover:border-gray-500 hover:text-white"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         <div className="flex flex-wrap justify-center gap-4 md:gap-6 min-h-[300px]">
//           {filteredSkills.map((skill, index) => (
//             <div
//               key={index}
//               className={`will-change-transform transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
//                 isVisible
//                   ? "opacity-100 translate-y-0 scale-100 blur-0"
//                   : "opacity-0 translate-y-12 scale-95 blur-md"
//               }`}
//               style={{ transitionDelay: `${index * 40}ms` }}
//             >
//               <div
//                 className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-slate-700/50 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] ${skill.borderClass} ${skill.bgClass}`}
//               >
//                 <div
//                   className={`p-2 rounded-lg bg-slate-800/50 group-hover:scale-110 transition-transform duration-300 ${skill.colorClass}`}
//                 >
//                   {skill.imgSrc ? (
//                     <img
//                       src={skill.imgSrc}
//                       alt={skill.name}
//                       style={skill.style}
//                       className="w-6 h-6 object-contain"
//                     />
//                   ) : (
//                     getIcon(skill.iconName)
//                   )}
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
//                     {skill.name}
//                   </h3>
//                   <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300 font-mono">
//                     {skill.category}
//                   </span>
//                 </div>
//                 <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-white/10 to-transparent pointer-events-none"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState, useRef, useMemo } from "react";
import * as LucideIcons from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Skill } from "../types";

const PuzzleSkillCard = ({
  skill,
  originalIndex,
  progress,
  getIcon,
}: {
  skill: Skill;
  originalIndex: number;
  progress: any;
  getIcon: (name: string) => React.ReactNode;
}) => {
  const isLeft = originalIndex % 2 === 0;

  // Lebih subtle dan elegant
  const startX = isLeft ? -(100 + originalIndex * 6) : 100 + originalIndex * 6;
  const startY = 80 + originalIndex * 4;
  const startRotate = isLeft ? -5 : 5;

  const x = useTransform(
    progress,
    [0, 0.45, 0.6, 1],
    [startX, 0, 0, startX * 0.35],
  );
  const y = useTransform(
    progress,
    [0, 0.45, 0.6, 1],
    [startY, 0, 0, -startY * 0.35],
  );
  const rotate = useTransform(
    progress,
    [0, 0.45, 0.6, 1],
    [startRotate, 0, 0, -startRotate * 0.35],
  );

  const opacity = useTransform(
    progress,
    [0, 0.2, 0.45, 0.6, 0.8, 1],
    [0, 0.9, 1, 1, 0.9, 0],
  );

  const scale = useTransform(progress, [0, 0.45, 0.6, 1], [0.94, 1, 1, 0.97]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
      transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
      style={{ x, y, rotate, opacity, scale }}
      className="z-10 relative will-change-transform"
    >
      <div
        className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-slate-700/50 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] ${skill.borderClass} ${skill.bgClass}`}
      >
        <div
          className={`p-2 rounded-lg bg-slate-800/50 group-hover:scale-110 transition-transform duration-300 ${skill.colorClass}`}
        >
          {skill.imgSrc ? (
            <img
              src={skill.imgSrc}
              alt={skill.name}
              style={skill.style}
              className="w-6 h-6 object-contain"
            />
          ) : (
            getIcon(skill.iconName)
          )}
        </div>

        <div>
          <h3 className="font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
            {skill.name}
          </h3>
          <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300 font-mono">
            {skill.category}
          </span>
        </div>

        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-white/10 to-transparent pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

export default function Skills({ skills }: { skills: Skill[] }) {
  const [activeTab, setActiveTab] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 95%", "end 5%"],
  });

  const categories = [
    "All",
    "Languages",
    "Frameworks",
    "Design",
    "Databases",
    "Tools",
  ];

  const skillsWithIndex = useMemo(() => {
    return skills.map((skill, idx) => ({ ...skill, originalIndex: idx }));
  }, [skills]);

  const filteredSkills =
    activeTab === "All"
      ? skillsWithIndex
      : skillsWithIndex.filter((s) => s.category === activeTab);

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Code;
    return <IconComponent className="w-6 h-6 text-slate-300" />;
  };

  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[30rem] h-[30rem] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Creative Tech Stack
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The technical arsenal I explore to create elegant digital solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 relative z-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeTab === cat
                  ? "bg-white text-slate-900 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] transform scale-105"
                  : "bg-slate-900/50 text-gray-400 border-slate-700 hover:border-gray-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="flex flex-wrap justify-center gap-4 md:gap-6 min-h-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <PuzzleSkillCard
                key={skill.name}
                skill={skill}
                originalIndex={skill.originalIndex}
                progress={scrollYProgress}
                getIcon={getIcon}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
