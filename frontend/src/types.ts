// frontend/src/types.ts

export interface PersonalInfo {
  name: string;
  role: string;
  heroDescription: string;
  about: string[];
  email: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
  };
}

export interface Skill {
  name: string;
  category: string;
  iconName: string;
  imgSrc?: string;
  colorClass: string;
  borderClass: string;
  bgClass: string;
  style?: Record<string, string>;
}

export interface ProjectGallery {
  imgPath: string;
  caption: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  imagePath: string;
  link: string;
  github: string;
  gallery: ProjectGallery[];
}

export interface Experience {
  id: number;
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  skills: string[];
}

export interface Certificate {
  id: string | number;
  title: string;
  issuer: string;
  date: string;
  iconName: string;
  imagePath: string;
  colorClass?: string;
}
