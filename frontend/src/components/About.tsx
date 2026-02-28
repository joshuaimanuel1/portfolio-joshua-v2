"use client";

import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Play,
  Pause,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { PersonalInfo } from "../types";
import { useScrollReveal } from "../hooks/useScrollReveal";

const MusicWidget = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 199;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercentage = (currentTime / duration) * 100;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-xl group h-full flex flex-col justify-between p-6 transition-all hover:border-slate-700/50">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-tr from-[#111] to-[#222] shadow-[0_0_20px_rgba(0,0,0,0.8)] flex items-center justify-center ${isPlaying ? "animate-[spin_4s_linear_infinite]" : ""}`}
        >
          <div className="absolute inset-1.5 rounded-full border border-white/5"></div>
          <div className="absolute inset-3.5 rounded-full border border-white/5"></div>
          <div className="absolute inset-6 rounded-full border border-white/5"></div>
          <div className="absolute inset-8 rounded-full border border-white/5"></div>

          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-black flex items-center justify-center relative">
            <img
              src="/assets/album-cover.jpeg"
              alt="Evergreen Love Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-2 h-2 rounded-full bg-slate-950 border border-black/50 z-10"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center flex-grow flex flex-col justify-end">
        <h4 className="text-white font-bold text-lg leading-tight mb-1">
          evergreen love - Single
        </h4>
        <p className="text-slate-400 text-sm font-medium mb-3">
          Strings & Heart
        </p>

        <div className="w-full mb-4">
          <div className="flex justify-between text-[10px] text-slate-400 font-mono mb-1.5 px-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-500 to-red-500 rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>

          <a
            href="https://music.apple.com/profile/jojoimanuel"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            Apple Music <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function About({
  personalInfo,
}: {
  personalInfo: PersonalInfo;
}) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section
      id="about"
      className="py-24 bg-slate-950 relative z-20 border-t border-slate-800/50 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
      ref={ref}
    >
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[auto]">
          <div
            className={`md:col-span-1 lg:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden group border border-slate-800 transition-all duration-700 ease-out shadow-lg ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <img
              src="/assets/profile.jpg"
              alt={personalInfo.name}
              loading="lazy"
              className="w-full h-full min-h-[300px] md:min-h-full object-cover transform transition duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-80"></div>

            <div className="absolute top-4 left-4">
              <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-medium text-white tracking-wide shadow-sm">
                Jakarta, Indonesia
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <div className="px-4 py-2 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-white/10 text-white flex items-center justify-between shadow-lg">
                <span className="text-sm font-semibold tracking-wider">
                  UTC+7
                </span>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white-transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-pink-400 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`md:col-span-2 lg:col-span-3 bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 flex flex-col justify-center transition-all duration-700 ease-out delay-100 shadow-lg hover:border-slate-700/50 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight flex items-center gap-3">
              Me in brief
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light">
              I've always been fascinated by how technology can transform
              complex problems into intuitive solutions. Currently pursuing my
              degree in Computer Science at BINUS University, I channel this
              passion into building robust and visually appealing web
              applications. I believe that good code goes hand-in-hand with good
              design, and I strive to create digital experiences that are not
              only functional but also delightful to use.
            </p>
          </div>

          <div
            className={`md:col-span-1 lg:col-span-1 transition-all duration-700 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <MusicWidget />
          </div>

          <div
            className={`md:col-span-2 lg:col-span-2 bg-slate-900 rounded-3xl p-8 border border-slate-800 transition-all duration-700 ease-out delay-300 shadow-lg hover:border-slate-700/50 flex flex-col justify-center ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6 pl-3">
              Core Focus
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/50">
                <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">
                  Education
                </p>
                <p className="text-white font-bold">BINUS University</p>
                <p className="text-slate-400 text-sm mt-1">Computer Science</p>
              </div>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/50">
                <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">
                  Specialty
                </p>
                <p className="text-white font-bold">Full Stack Dev</p>
                <p className="text-slate-400 text-sm mt-1">Web Technologies</p>
              </div>
              <div className="col-span-2 bg-slate-950 p-4 rounded-2xl border border-slate-800/50 mt-2">
                <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-2">
                  Approach
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded-full border border-slate-700">
                    Problem Solving
                  </span>
                  <span className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded-full border border-slate-700">
                    Clean Code
                  </span>
                  <span className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded-full border border-slate-700">
                    UI/UX
                  </span>
                  <span className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded-full border border-slate-700">
                    Continuous Learning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
