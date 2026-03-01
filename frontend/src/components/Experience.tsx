"use client";

import React, { useState, useEffect, useRef } from "react";
import { Briefcase, Star, Users, Calendar } from "lucide-react";
import { Experience as ExpType } from "../types";

export default function Experience({
  experiences,
}: {
  experiences: ExpType[];
}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="experience"
      className="py-24 bg-slate-950 relative"
      ref={sectionRef}
    >
      <div className="absolute top-1/4 left-0 w-[30rem] h-[30rem] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-section ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center md:justify-start gap-3">
            Experience & Organizations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto md:mx-0">
            Leadership journey and active contributions beyond the classroom.
            Honing soft skills through strategic roles.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent md:-translate-x-1/2 ml-6 md:ml-0 z-0"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center justify-between md:justify-normal z-10 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } group`}
              >
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center z-10 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300 shadow-xl shadow-slate-900">
                  <Star className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <div
                  className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:pl-10" : "md:pr-10"
                  } transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group-hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        <Users className="w-3 h-3" /> {exp.type}
                      </span>
                      <span className="flex items-center gap-1 text-sm font-mono text-gray-400">
                        <Calendar className="w-3 h-3" /> {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-purple-400 font-medium mb-3">
                      {exp.organization}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {exp.skills && (
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-700/50">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-xs text-gray-500 bg-slate-900 px-2 py-1 rounded-md border border-slate-700"
                          >
                            # {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
