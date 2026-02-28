// backend/src/data.ts
import { PersonalInfo, Skill, Project, Experience, Certificate } from "./types";
export const personalInfo: PersonalInfo = {
  name: "Joshua Imanuel",
  role: "Software Engineer Enthusiast & Full Stack Developer",
  heroDescription:
    "On a journey to explore the intersection of technology and design, transforming complex problems into elegant and intuitive solutions.",
  about: [
    "My journey into technology was sparked by a simple curiosity: how can we make complex systems feel simple and natural to use? As a Computer Science student at BINUS University, I've channeled this curiosity into a passion for software engineering, web development, and human-centered design.",
    "I see coding not just as a technical skill, but as a creative medium. This interdisciplinary mindset allows me to approach problems from multiple angles, blending logic with aesthetics to build products that are both powerful and delightful.",
    "My experiences in collaborative projects and organizations have taught me the value of communication and resilience. I thrive in environments where I can learn from others, embrace challenges, and contribute to building something meaningful.",
  ],
  email: "joshuadjamiwadu@gmail.com",
  socials: {
    github: "https://github.com/joshuaimanuel1",
    linkedin: "https://www.linkedin.com/in/joshua-asaf-imanuel/",
    instagram: "https://www.instagram.com/joshuaimanuel__/",
  },
};

export const techStack: Skill[] = [
  // Languages
  {
    name: "JavaScript",
    category: "Languages",
    iconName: "JsIcon",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    colorClass: "text-yellow-400",
    borderClass: "hover:border-yellow-400/50",
    bgClass: "hover:bg-yellow-400/10",
  },
  {
    name: "HTML5",
    category: "Languages",
    iconName: "HtmlIcon",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    colorClass: "text-orange-500",
    borderClass: "hover:border-orange-500/50",
    bgClass: "hover:bg-orange-500/10",
  },
  {
    name: "CSS3",
    category: "Languages",
    iconName: "CssIcon",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    colorClass: "text-blue-500",
    borderClass: "hover:border-blue-500/50",
    bgClass: "hover:bg-blue-500/10",
  },
  {
    name: "C#",
    category: "Languages",
    iconName: "Terminal",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    colorClass: "text-purple-500",
    borderClass: "hover:border-purple-500/50",
    bgClass: "hover:bg-purple-500/10",
  },
  {
    name: "Python",
    category: "Languages",
    iconName: "Terminal",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    colorClass: "text-green-500",
    borderClass: "hover:border-green-500/50",
    bgClass: "hover:bg-green-500/10",
  },
  // Frameworks
  {
    name: "React.js",
    category: "Frameworks",
    iconName: "ReactIcon",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    colorClass: "text-cyan-400",
    borderClass: "hover:border-cyan-400/50",
    bgClass: "hover:bg-cyan-400/10",
  },
  {
    name: "Node.js",
    category: "Frameworks",
    iconName: "Server",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    colorClass: "text-green-600",
    borderClass: "hover:border-green-600/50",
    bgClass: "hover:bg-green-600/10",
  },
  {
    name: "ASP.NET",
    category: "Frameworks",
    iconName: "Globe",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    colorClass: "text-indigo-500",
    borderClass: "hover:border-indigo-500/50",
    bgClass: "hover:bg-indigo-500/10",
  },
  {
    name: "Laravel",
    category: "Frameworks",
    iconName: "LaravelIcon",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    colorClass: "text-red-500",
    borderClass: "hover:border-red-500/50",
    bgClass: "hover:bg-red-500/10",
  },
  {
    name: "Tailwind CSS",
    category: "Frameworks",
    iconName: "Layout",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    colorClass: "text-cyan-300",
    borderClass: "hover:border-cyan-300/50",
    bgClass: "hover:bg-cyan-300/10",
  },
  // Design
  {
    name: "Figma",
    category: "Design",
    iconName: "Figma",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    colorClass: "text-pink-500",
    borderClass: "hover:border-pink-500/50",
    bgClass: "hover:bg-pink-500/10",
  },
  {
    name: "UI/UX",
    category: "Design",
    iconName: "Layers",
    colorClass: "text-purple-400",
    borderClass: "hover:border-purple-400/50",
    bgClass: "hover:bg-purple-400/10",
  },
  {
    name: "Wireframing",
    category: "Design",
    iconName: "PenTool",
    colorClass: "text-gray-400",
    borderClass: "hover:border-gray-400/50",
    bgClass: "hover:bg-gray-400/10",
  },
  // Databases
  {
    name: "MySQL",
    category: "Databases",
    iconName: "Database",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    colorClass: "text-blue-400",
    borderClass: "hover:border-blue-400/50",
    bgClass: "hover:bg-blue-400/10",
  },
  {
    name: "Firebase",
    category: "Databases",
    iconName: "Zap",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    colorClass: "text-yellow-500",
    borderClass: "hover:border-yellow-500/50",
    bgClass: "hover:bg-yellow-500/10",
  },
  // Tools & Others
  {
    name: "Git",
    category: "Tools",
    iconName: "GitBranch",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    colorClass: "text-red-500",
    borderClass: "hover:border-red-500/50",
    bgClass: "hover:bg-red-500/10",
  },
  {
    name: "GitHub",
    category: "Tools",
    iconName: "Github",
    imgSrc: "https://img.icons8.com/nolan/64/github.png",
    colorClass: "text-purple-500",
    borderClass: "hover:border-purple-500/50",
    bgClass: "hover:bg-purple-500/10",
  },
  {
    name: "VS Code",
    category: "Tools",
    iconName: "Code",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    colorClass: "text-blue-500",
    borderClass: "hover:border-blue-500/50",
    bgClass: "hover:bg-blue-500/10",
  },
  {
    name: "Postman",
    category: "Tools",
    iconName: "Command",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    colorClass: "text-orange-500",
    borderClass: "hover:border-orange-500/50",
    bgClass: "hover:bg-orange-500/10",
  },
  {
    name: "Docker",
    category: "Tools",
    iconName: "Box",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    colorClass: "text-blue-500",
    borderClass: "hover:border-blue-500/50",
    bgClass: "hover:bg-blue-500/10",
  },
  {
    name: "TypeScript",
    category: "Languages",
    iconName: "Terminal",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    colorClass: "text-blue-600",
    borderClass: "hover:border-blue-600/50",
    bgClass: "hover:bg-blue-600/10",
  },
  {
    name: "Prisma",
    category: "Databases",
    iconName: "Database",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    colorClass: "text-teal-400",
    borderClass: "hover:border-teal-500/50",
    bgClass: "hover:bg-teal-500/10",
    style: { filter: "brightness(0) invert(1)" },
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    iconName: "Database",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    colorClass: "text-blue-400",
    borderClass: "hover:border-blue-400/50",
    bgClass: "hover:bg-blue-400/10",
  },
  {
    name: "Express.js",
    category: "Frameworks",
    iconName: "Server",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    colorClass: "text-white",
    borderClass: "hover:border-white/50",
    bgClass: "hover:bg-white/10",
    style: { filter: "brightness(0) invert(1)" },
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Eco-Hub",
    category: "Web App",
    description:
      "An innovative platform connecting users with waste banks. Transforming waste into digital value with gamification features.",
    longDescription:
      "Eco-Hub is a digital solution for waste management problems. This application allows users to deposit waste, track points, and view nearby waste bank locations. Built with React for high performance and Firebase for real-time data.",
    tech: ["React", "Tailwind", "Gamification", "Firebase"],
    imagePath: "/assets/eco-hub-hero.png",
    link: "#",
    github: "https://github.com/joshuaimanuel1/eco-hub",
    gallery: [
      { imgPath: "/assets/eco-hub-dashboard.png", caption: "User Dashboard" },
      {
        imgPath: "/assets/eco-hub-identifikasi.png",
        caption: "Waste Identification",
      },
      {
        imgPath: "/assets/eco-hub-map.png",
        caption: "Waste Bank Location Map",
      },
      { imgPath: "/assets/eco-hub-login.png", caption: "Login Page" },
      { imgPath: "/assets/eco-hub-register.png", caption: "Registration Page" },
      { imgPath: "/assets/eco-hub-profil.png", caption: "User Profile" },
    ],
  },

  {
    id: 2,
    title: "MonneCare",
    category: "UI/UX Concept",
    description:
      "Digital pharmacy platform concept for easy health access. Features drug search, consultation, and prescription reminders.",
    longDescription:
      "MonneCare is a digital health platform designed to make it easier for users to buy medicines, consult with pharmacists, and manage their health. The main focus of this design is usability and clean aesthetics.",
    tech: ["Figma", "UI/UX", "Wireframing", "Prototyping"],
    imagePath: "/assets/monnecare-hero.png",
    link: "https://joshuaimanuel1.github.io/monnecare-app/",
    github: "https://github.com/joshuaimanuel1/monnecare-app",
    gallery: [
      { imgPath: "/assets/monnecare-login.png", caption: "Login Page" },
      { imgPath: "/assets/monnecare-daftar.png", caption: "Registration Page" },
      {
        imgPath: "/assets/monnecare-category.png",
        caption: "Medicine Categories",
      },
      { imgPath: "/assets/monnecare-product.png", caption: "Product Detail" },
      { imgPath: "/assets/monnecare-cart.png", caption: "Shopping Cart" },
      {
        imgPath: "/assets/monnecare-konsultasi.png",
        caption: "Doctor Consultation",
      },
    ],
  },
  {
    id: 3,
    title: "PKM-KC AI Sentiment Analysis",
    category: "AI/ML",
    description:
      "Sentiment analysis of Kak Rose Restaurant customer reviews using keyword analysis and machine learning approaches.",
    longDescription:
      "This project implements keyword-based sentiment analysis and a simple machine learning approach. It aims to analyze customer sentiment towards Kak Rose Restaurant in Malang using keyword analysis and ML. The system classifies review sentiment into five categories: very good, good, neutral, bad, and very bad.",
    tech: ["Python", "NLP", "AI", "Data Analysis", "Machine Learning"],
    imagePath:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "https://github.com/joshuaimanuel1/AI-Data-Analysis-Sentiment",
    gallery: [
      {
        imgPath: "/assets/data-scraping.png",
        caption: "Data Scraping Process",
      },
      {
        imgPath: "/assets/klasification.png",
        caption: "Sentiment Classification Process",
      },
      {
        imgPath: "/assets/output-klasification.png",
        caption: "Classification Output",
      },
      {
        imgPath: "/assets/visualizing-result.png",
        caption: "Analysis Visualization",
      },
    ],
  },
  {
    id: 4,
    title: "JAwels & Diamonds",
    category: "Backend",
    description:
      "Built the back-end of an e-commerce app using C# and ASP.NET. Implemented Domain-Driven Design (DDD) to ensure a scalable and maintainable system.",
    longDescription:
      "JAwels & Diamonds is a web-based jewelry store application designed to provide a seamless shopping experience. The backend is built with C# and ASP.NET, implementing Domain-Driven Design (DDD) to ensure the system is scalable, maintainable, and robust. It features secure authentication, product management, and cart functionality.",
    tech: ["C#", "ASP.NET", "DDD", "SQL"],
    imagePath:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github:
      "https://github.com/joshuaimanuel1/Pattern-Software-DesignJAwels-Diamonds",
    gallery: [
      { imgPath: "/assets/jawels-login.png", caption: "Login Page" },
      { imgPath: "/assets/jawels-register.png", caption: "Registration Page" },
      { imgPath: "/assets/jawels-cart.jpeg", caption: "Shopping Cart" },
    ],
  },
  {
    id: 5,
    title: "BINUS Parking System",
    category: "IoT & Web App",
    description:
      "A full-stack parking system integrating hardware (RFID/Cameras) with a web interface to address campus parking inefficiencies.",
    longDescription:
      "This project involved architecting an end-to-end parking system for BINUS University. As Team Lead, I defined the technical stack and hardware requirements. The system integrates RFID and camera technology with a web dashboard built using React, Node.js, and MySQL to monitor parking availability and streamline access control.",
    tech: ["React", "Node.js", "MySQL", "IoT", "RFID"],
    imagePath: "/assets/binus-parking-tapin.jpg",
    link: "#",
    github: "https://github.com/joshuaimanuel1/binus-parking",
    gallery: [
      { imgPath: "/assets/binus-parking-tapin.jpg", caption: "Tap In System" },
      {
        imgPath: "/assets/binus-parking-tapout.jpg",
        caption: "Tap Out System",
      },
      {
        imgPath: "/assets/binus-parking-getparkir.jpg",
        caption: "Parking Availability Dashboard",
      },
      {
        imgPath: "/assets/binus-parking-manualakses.jpg",
        caption: "Manual Access Control",
      },
    ],
  },
  {
    id: 6,
    title: "Inventory App",
    category: "Full Stack",
    description:
      "Modern warehouse management system to track stocks, manage categories, and monitor movements in real-time.",
    longDescription:
      "A comprehensive Full Stack application designed to streamline warehouse operations. Built with Next.js and Tailwind CSS for a sleek UI, and powered by Express & Prisma for robust data handling. Features include real-time stock adjustments, role-based access control (Admin/User), complete stock movement histories (increment/decrement), and dynamic category management.",
    tech: ["Next.js", "Tailwind CSS", "Express", "Prisma"],
    imagePath: "/assets/inventory-app-menu.png",
    link: "",
    github: "https://github.com/joshuaimanuel1/app-inventory",
    gallery: [
      {
        imgPath: "/assets/inventory-app-admin.png",
        caption: "Role-Based Admin Panel",
      },
      {
        imgPath: "/assets/inventory-app-inventory.png",
        caption: "Main Inventory Dashboard",
      },
      {
        imgPath: "/assets/inventory-app-stocks-histories.png",
        caption: "Detailed Stock Movement Histories",
      },
      {
        imgPath: "/assets/inventory-app-cartegories.png",
        caption: "Category Management",
      },
      {
        imgPath: "/assets/inventory-app-create.png",
        caption: "Create & Update Inventory",
      },
      {
        imgPath: "/assets/inventory-app-register.png",
        caption: "Register Page",
      },
      {
        imgPath: "/assets/inventory-app-login.png",
        caption: "Login Page",
      },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Team Lead",
    organization: "PKM-KC (Pekan Kreativitas Mahasiswa)",
    period: "2024",
    type: "Research & Leadership",
    description:
      "Directed the proposal and system design for an AI-powered sentiment analysis tool. Led the team in transforming raw customer reviews into actionable business insights using Natural Language Processing (NLP).",
    skills: ["Leadership", "Project Management", "AI Research"],
  },
  {
    id: 2,
    role: "Event Staff (Equipment)",
    organization: "HIMTI BINUS University - Digifest",
    period: "Jun 2024 - Oct 2024",
    type: "Event Committee",
    description:
      "Contributed to Digifest, an AR technology seminar and competition. Managed equipment logistics and collaborated with the team to ensure seamless event execution.",
    skills: ["Logistics", "Teamwork", "Event Planning"],
  },
  {
    id: 3,
    role: "Participant (LDKP)",
    organization: "HIMTI BINUS University",
    period: "Jul 2024",
    type: "Leadership Training",
    description:
      "Completed the Leadership and Introduction Training aiming to develop organizational skills. Focused on soft skills, teamwork, public speaking, and character building for active campus contribution.",
    skills: ["Leadership", "Public Speaking", "Character Building"],
  },
  {
    id: 4,
    role: "Committee Member (Futsal Div)",
    organization: "UKM FUTSAL BINUS - Tirtofest 2024",
    period: "Apr 2024 - Jun 2024",
    type: "Community Service",
    description:
      "Coached local youth in Desa Tirtomoyo on fundamental futsal techniques. Executed a month-long training program, enhancing community engagement and adaptability skills.",
    skills: ["Coaching", "Community Engagement", "Adaptability"],
  },
  {
    id: 5,
    role: "Event Staff (Documentation)",
    organization: "UKM FUTSAL BINUS - BIC",
    period: "May 2024",
    type: "Event Committee",
    description:
      "Served as Staff DnD (Documentation) for the Internal Futsal Competition. Documented the event effectively and collaborated with the team to ensure smooth operations throughout the competition.",
    skills: ["Documentation", "Event Management", "Communication"],
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    date: "2024",
    iconName: "Server",
    imagePath: "/assets/backend.png",
    colorClass: "text-green-400",
  },
  {
    id: 2,
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    date: "2024",
    iconName: "Layout",
    imagePath: "/assets/frontend.png",
    colorClass: "text-blue-400",
  },
  {
    id: 3,
    title: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    date: "2024",
    iconName: "Terminal",
    imagePath: "/assets/sc-python.png",
    colorClass: "text-yellow-400",
  },
  {
    id: 4,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2024",
    iconName: "Smartphone",
    imagePath: "/assets/responsive-web.png",
    colorClass: "text-purple-400",
  },
  {
    id: 5,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2024",
    iconName: "FileCode", // Diganti dari JsIcon karena Lucide tidak ada JsIcon
    imagePath: "/assets/javaScript.png",
    colorClass: "text-yellow-300",
  },
  {
    id: 6,
    title: "Data Visualization V8",
    issuer: "freeCodeCamp",
    date: "Nov 2025",
    iconName: "BarChart",
    imagePath: "/assets/datavisual.png",
    colorClass: "text-orange-400",
  },
];

export const otherCertificates: Certificate[] = [
  {
    id: "7",
    title: "International Joint Student Reseach Symposium",
    issuer: "BINUS University",
    date: "Oct 2024",
    imagePath: "/assets/other-certificate_1.png",
    iconName: "Award",
    colorClass: "text-blue-400",
  },
  {
    id: "8",
    title: "GDSC A Powerful Tool for UI/UX Development",
    issuer: "GDSC BINUS University",
    date: "Feb 2024",
    imagePath: "/assets/other-certificate_2.png",
    iconName: "Award",
    colorClass: "text-green-400",
  },
  {
    id: "9",
    title: "Beelingua PROFESSIONAL OFFICE (CER C1.2)",
    issuer: "Beelingua",
    date: "Nov 2024",
    imagePath: "/assets/other_certificate_3.png",
    iconName: "Award",
    colorClass: "text-purple-400",
  },
  {
    id: "10",
    title: "Beelingua ADVANCED ENGLISH (CER C2.1)",
    issuer: "Beelingua",
    date: "Sept 2024",
    imagePath: "/assets/other_certificate_4.png",
    iconName: "Award",
    colorClass: "text-yellow-400",
  },
];
