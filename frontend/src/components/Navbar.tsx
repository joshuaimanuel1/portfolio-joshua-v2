// frontend/src/components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    const handleScrollSpy = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "certificates",
        "contact",
      ];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollSpy);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "My Story", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Certificates", href: "#certificates", id: "certificates" },
  ];

  return (
    <>
      <div
        className={`fixed inset-x-0 z-50 flex justify-center pointer-events-none transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "top-6" : "top-0"
        }`}
      >
        <nav
          className={`pointer-events-auto flex items-center transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? "bg-slate-900/60 backdrop-blur-2xl backdrop-saturate-150 border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] rounded-full py-2.5 px-4 md:px-6 gap-6 md:gap-8"
              : "bg-transparent border-transparent w-full max-w-7xl px-6 py-8 gap-0 justify-between"
          }`}
          style={{ width: scrolled ? "fit-content" : "100%" }}
        >
          <div
            className="flex-shrink-0 cursor-pointer group relative z-10"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <span
              className={`font-bold tracking-tighter bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-700 ${
                scrolled ? "text-xl" : "text-2xl"
              }`}
            >
              Portofolio
              <span className="text-white/50 group-hover:text-white transition-colors">
                .
              </span>
            </span>
            <div className="absolute -inset-4 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
          </div>

          <div className="hidden md:flex items-center gap-1 transition-all duration-500">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-500 rounded-full group ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {activeSection === link.id && (
                  <span className="absolute inset-0 bg-white/10 rounded-full -z-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_15px_rgba(255,255,255,0.1)]"></span>
                )}
                <span className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/0 rounded-full scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out -z-0"></span>
              </a>
            ))}
            <div
              className={`w-px h-5 bg-white/10 mx-2 transition-opacity duration-500 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            ></div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className={`group relative overflow-hidden px-5 py-2 rounded-full text-sm font-semibold transition-all duration-500 ${
                activeSection === "contact"
                  ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  : "bg-slate-800/50 text-white hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-white/5 hover:border-blue-500/50"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Talk{" "}
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className={`p-2 rounded-full text-gray-400 hover:text-white transition-colors focus:outline-none ${
                scrolled ? "bg-white/5 hover:bg-white/10" : "hover:bg-white/10"
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-[60] bg-slate-950/40 backdrop-blur-md transition-all duration-700 md:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`fixed inset-y-0 right-0 z-[70] w-[85%] max-w-sm bg-slate-900/90 backdrop-blur-2xl border-l border-white/10 shadow-2xl transform transition-transform duration-[800ms] md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full relative overflow-hidden">
          {/* EFEK GLOW BIRU PREMIUM DI KEMBALIKAN */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <span className="font-bold text-xl text-white">Navigation</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-8 px-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{ transitionDelay: `${100 + index * 50}ms` }}
                className={`flex items-center justify-between group p-3 rounded-xl transition-all duration-500 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                } ${
                  activeSection === link.id
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="text-lg font-medium">{link.name}</span>
                <ChevronRight
                  className={`w-5 h-5 ${
                    activeSection === link.id ? "text-blue-400" : ""
                  }`}
                />
              </a>
            ))}
          </div>

          {/* TOMBOL LET'S WORK TOGETHER DI KEMBALIKAN */}
          <div className="p-6 border-t border-white/5 bg-black/20">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center justify-center w-full py-4 rounded-xl text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-[0.98] transition-all duration-300"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
