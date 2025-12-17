import { ArrowUpRight } from "lucide-react";
import { TextMaskReveal } from "./TextMaskReveal";
import dtech from "../assets/dtech.webp";
import xolaren from "../assets/xolaren.webp";
import emc from "../assets/emc.webp";
import rla from "../assets/rla.webp";
import ignited from "../assets/ignited.webp";
import { Link } from "react-router-dom";
export default function MyProject() {
  const projects = [
    {
      name: "DTech Online Ltd – Portfolio Website",
      img: dtech,
      link: "https://dtechonline.dev/",
      description:
        "A fully responsive portfolio website built from scratch with smooth animations, clean UI/UX, and buttery Lenis-powered scrolling.",
      points: [
        "Designed complete UI/UX and animated interactions.",
        "Integrated smooth scrolling using Lenis.",
        "Implemented dynamic animations with GSAP & Framer Motion.",
        "Optimized performance and visual consistency.",
      ],
    },

    {
      name: "Xolaren – Solar Company Website",
      img: xolaren,
      link: "https://xolaren.vercel.app/",
      description:
        "A solar energy company website featuring a solar calculator and a custom PHP Filament CMS.",
      points: [
        "Built theme-consistent UI/UX across pages.",
        "Developed backend CMS using PHP Filament.",
        "Created solar capacity calculator.",
        "Integrated GSAP + Framer Motion animations.",
      ],
    },

    {
      name: "EMC Power – Power Company Website",
      img: emc,
      link: "https://emcpowercore.com/",
      description:
        "A modern and fast-loading corporate website for a power solutions company.",
      points: [
        "Clean and professional UI.",
        "SEO-optimized and responsive.",
        "Smooth animation-driven sections.",
      ],
    },
    {
      name: "Ignited – Flight Management Portal",
      img: ignited,
      link: "#",
      description:
        "A complete enterprise-grade flight management system with multi-tenant structure and secure access control.",
      points: [
        "Implemented tenant-based architecture.",
        "Built a granular role-based user management system.",
        "Includes booking, scheduling, and admin features.",
        "Designed secure authentication workflows.",
      ],
    },
    {
      name: "Rahman Law Associates – Law Firm Website",
      img: rla,
      link: "https://beta.rahmanlaw.net/",
      description:
        "A law firm website designed for clarity, trust, and professional representation.",
      points: [
        "Structured legal service pages.",
        "Clean UI with well-balanced typography.",
        "Animation-enhanced navigation experience.",
      ],
    },
  ];

  return (
    <div className="px-4 md:px-8 container mx-auto min-h-screen w-full">
      {/* Title */}
      <article className="container mx-auto py-10 flex flex-col gap-6">
        <TextMaskReveal
          splitByWord={true}
          text="MY PROJECTS"
          fontSize="text-6xl md:text-7xl lg:text-8xl"
          className="text-secondary font-foregen font-bold leading-tight text-pretty uppercase"
          delayPerItem={0.08}
        />

        <p className="text-gray-200 text-justify -mt-8 text-base leading-relaxed">
          A curated selection of modern web projects I’ve built using React,
          Next.js, Tailwind, GSAP, Framer Motion, PHP Filament, and full-stack
          development principles. These projects highlight my capabilities in UI
          engineering, smooth animations, backend development, and creating
          production-ready digital experiences.
        </p>
      </article>

      {/* Project Cards */}
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0 md:gap-8 lg:gap-0 mx-auto space-y-20 md:space-y-0 lg:space-y-20 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid group lg:grid-cols-2 gap-10 items-start"
          >
            {/* Text Section */}
            <div>
              <TextMaskReveal
                splitByWord={true}
                text={project.name}
                fontSize="text-4xl md:text-3xl lg:text-6xl"
                className="text-secondary font-foregen font-bold uppercase leading-tight"
                delayPerItem={0.07}
              />

              <p className="text-gray-200 text-lg mt-4">
                {project.description}
              </p>

              <ul className="mt-4 space-y-3">
                {project.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-gray-300 text-base flex gap-2 leading-relaxed"
                  >
                    <span className="text-secondary mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image with Scroll Hover Effect */}
            <div className="relative  overflow-hidden rounded-lg group cursor-pointer">
              <div
                className="
      absolute inset-0 
      bg-cover bg-no-repeat bg-top 
      transition-all duration-[10000ms] ease-in-out 
      group-hover:bg-bottom
      rounded-lg
    "
                style={{ backgroundImage: `url(${project.img})` }}
              />
              <Link
                to={project.link}
                target="blank"
                className="absolute bottom-4 left-4 w-16 h-16 sm:w-20 sm:h-20 bg-secondary/80 z-20 group-hover:bg-secondary/50 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center transition-colors duration-500 ease-in-out"
              >
                <ArrowUpRight className="text-gray-100 sm:h-12 sm:w-12 h-8 w-8" />
              </Link>

              {/* Spacer for height */}
              <div className="sm:h-84 h-64 opacity-0">.</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
