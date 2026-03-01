"use client";

import React from "react";
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { PersonalInfo } from "../types";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact({
  personalInfo,
}: {
  personalInfo: PersonalInfo;
}) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-6 bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div
        // FIX ERROR TS: Kita beritahu TypeScript bahwa ref ini khusus untuk div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`flex-1 flex flex-col justify-center w-full max-w-4xl mx-auto px-6 lg:px-8 relative z-10 will-change-transform transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100 blur-0"
            : "opacity-0 translate-y-16 scale-95 blur-md"
        }`}
      >
        <div className="bg-slate-900/40 border border-slate-800/60 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-2xl flex flex-col items-center text-center transform transition-all duration-500 hover:border-slate-700/60">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Let's Work Together.
          </h2>
          <p className="text-slate-400 text-sm md:text-base mb-10 max-w-xl font-light leading-relaxed">
            I'm currently available for new opportunities. Whether you have a
            project to discuss, an idea to explore, or just want to say hi, my
            inbox is open.
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-white text-slate-950 rounded-full font-semibold text-sm hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <Mail className="w-4 h-4" />
            Say Hello
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <div
        className={`w-full max-w-4xl mx-auto px-6 lg:px-8 relative z-10 mt-12 will-change-transform transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] delay-300 ${
          isVisible
            ? "opacity-100 translate-y-0 blur-0"
            : "opacity-0 translate-y-10 blur-sm"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate-800/50 pt-8">
          <div className="flex items-center gap-3 px-4 py-2.5 bg-slate-900/60 border border-slate-800/80 rounded-full select-none cursor-default">
            <div className="relative flex items-center justify-center w-10 h-10 bg-emerald-500/20 rounded-full text-emerald-400 shrink-0">
              <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping"></span>
              <MapPin className="w-5 h-5 relative z-10" />
            </div>
            <div className="flex flex-col text-left pr-2">
              <span className="text-white font-semibold text-sm leading-tight">
                Jakarta, ID
              </span>
              <span className="text-slate-400 text-xs font-medium">UTC+7</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <span className="sr-only">GitHub</span>
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <footer className="w-full text-center mt-12">
          <p className="text-slate-500 text-xs font-light">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
          <p className="text-slate-600 text-[10px] mt-2 tracking-wide">
            Built with Next.js, Tailwind CSS & Express
          </p>
        </footer>
      </div>
    </section>
  );
}
