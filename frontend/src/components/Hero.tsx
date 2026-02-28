"use client";

import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Mail, ChevronDown } from "lucide-react";
import { PersonalInfo } from "../types";

const random = (min: number, max: number) => Math.random() * (max - min) + min;

const StarlightBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: any[] = [];
    let shootingStar: any = null;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const starCount = window.innerWidth < 768 ? 400 : 1200;

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5,
          opacity: Math.random(),
          speed: Math.random() * 0.05,
          twinkleDir: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    const createShootingStar = () => {
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * (canvas.height / 2);
      const length = random(100, 300);
      const angle = random(Math.PI / 4, Math.PI / 2);

      return {
        x: startX,
        y: startY,
        length: length,
        speed: random(15, 25),
        opacity: 1,
        vx: Math.cos(angle) * 10,
        vy: Math.sin(angle) * 10,
        life: 1.0,
      };
    };

    const draw = () => {
      ctx.fillStyle = "rgba(2, 6, 23, 0.4)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.opacity += star.speed * star.twinkleDir;
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkleDir *= -1;
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.opacity)})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!shootingStar && Math.random() < 0.005) {
        shootingStar = createShootingStar();
      }

      if (shootingStar) {
        ctx.beginPath();
        const grad = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          shootingStar.x - shootingStar.vx * 5,
          shootingStar.y - shootingStar.vy * 5,
        );
        grad.addColorStop(0, "rgba(255, 255, 255, 1)");
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(
          shootingStar.x - shootingStar.vx * 3,
          shootingStar.y - shootingStar.vy * 3,
        );
        ctx.stroke();

        shootingStar.x += shootingStar.vx;
        shootingStar.y += shootingStar.vy;
        shootingStar.life -= 0.02;

        if (
          shootingStar.life <= 0 ||
          shootingStar.x > canvas.width ||
          shootingStar.y > canvas.height
        ) {
          shootingStar = null;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

const LeoConstellation = () => {
  const stars = [
    { id: "regulus", x: 65, y: 70, size: 4 },
    { id: "algieba", x: 60, y: 55, size: 3 },
    { id: "adhafera", x: 55, y: 45, size: 2.5 },
    { id: "rasalas", x: 50, y: 35, size: 2.5 },
    { id: "zosma", x: 80, y: 50, size: 3 },
    { id: "denebola", x: 90, y: 55, size: 3.5 },
    { id: "chertan", x: 75, y: 70, size: 2.5 },
    { id: "alterf", x: 45, y: 40, size: 2 },
  ];

  const connections = [
    ["rasalas", "adhafera"],
    ["adhafera", "algieba"],
    ["algieba", "regulus"],
    ["algieba", "zosma"],
    ["zosma", "denebola"],
    ["zosma", "chertan"],
    ["chertan", "regulus"],
    ["rasalas", "alterf"],
  ];

  return (
    <div className="absolute top-10 right-10 w-64 h-64 md:w-96 md:h-96 z-0 opacity-40 hover:opacity-80 transition-opacity duration-1000 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        {connections.map(([startId, endId], index) => {
          const start = stars.find((s) => s.id === startId);
          const end = stars.find((s) => s.id === endId);
          if (!start || !end) return null;
          return (
            <line
              key={index}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="0.5"
            />
          );
        })}
        {stars.map((star) => (
          <g key={star.id} className="animate-pulse">
            <circle
              cx={star.x}
              cy={star.y}
              r={star.size * 1.5}
              fill="rgba(59, 130, 246, 0.3)"
              filter="blur(1px)"
            />
            <circle cx={star.x} cy={star.y} r={star.size / 2} fill="white" />
          </g>
        ))}
      </svg>
    </div>
  );
};

const GlobalGreeting = () => {
  const greetings = [
    "Halo", "Bonjour", "Hola", "こんにちは", "안녕하세요",
    "Hello", "Ciao", "Hallo", "你好", "Olá", "مرحباً",
    "नमस्ते", "Привет", "Merhaba", "สวัสดี", "Xin chào",
    "Hallo", "שלום", "Hej", "Cześć", "Привіт", "হ্যালো",
    "سلام", "Hai", "Kamusta", "Habari",
  ];

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(80);
  const [index, setIndex] = useState(1);
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % greetings.length;
    let fullText = greetings[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(80);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="hidden lg:flex absolute top-9 right-9 z-20 flex-col items-end pointer-events-none select-none opacity-80 hover:opacity-100 transition-opacity">
      <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center">
        {text}
        <span className="border-r-[1.5px] border-white ml-1 h-4 animate-pulse"></span>
      </div>
    </div>
  );
};

export default function Hero({ personalInfo }: { personalInfo: PersonalInfo }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="sticky top-0 z-0 min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white"
    >
      <StarlightBackground />

      <div
        className="absolute inset-0 w-full h-full pointer-events-none flex flex-col justify-center items-center"
        style={{
          transform: `translateY(-${offsetY * 0.4}px)`,
          opacity: Math.max(1 - offsetY / 700, 0),
        }}
      >
        <LeoConstellation />
        <GlobalGreeting />

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pointer-events-auto">
          <div className="inline-block mb-3 px-4 py-1 rounded-full border border-blue-500/30 bg-blue-950/30 backdrop-blur-sm text-blue-300 text-xs sm:text-sm font-semibold tracking-widest animate-fade-in-up uppercase">
            Welcome to my Portfolio
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-2 animate-fade-in-up delay-100">
            I'm{" "}
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(167,139,250,0.5)]">
              {personalInfo.name}
            </span>
          </h1>

          <h2 className="text-lg md:text-xl font-medium text-slate-300/90 mb-2 animate-fade-in-up delay-150 tracking-wide">
            {personalInfo.role}
          </h2>

          <p className="mt-0 mb-8 max-w-2xl mx-auto text-sm md:text-base font-light text-slate-400 leading-relaxed animate-fade-in-up delay-200">
            {personalInfo.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up delay-300">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group w-56 sm:w-auto px-8 py-3 rounded-full bg-white text-slate-950 font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
            >
              View My Work{" "}
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group w-56 sm:w-auto px-8 py-3 rounded-full border border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-slate-400 backdrop-blur-sm transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Contact Me <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 z-10 cursor-pointer pointer-events-auto"
        style={{ opacity: Math.max(1 - offsetY / 200, 0) }}
        onClick={handleScrollDown}
      >
        <ChevronDown className="w-8 h-8 hover:text-white transition-colors" />
      </div>
    </section>
  );
}