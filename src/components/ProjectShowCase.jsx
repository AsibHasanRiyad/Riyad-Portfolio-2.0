/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import dtech from "../assets/dtech.webp";
import xolaren from "../assets/xolaren.webp";
import emc from "../assets/emc.webp";
import rla from "../assets/rla.webp";
import ignited from "../assets/ignited.webp";
import { TextMaskReveal } from "./TextMaskReveal";
import { Link } from "react-router-dom";
import saatSotero from "../assets/717.webp";
import ticketAse from "../assets/ticketase.webp";
import znrf from "../assets/znrf.webp";
import lbHealth from "../assets/lbHealth.webp";
const projects = [
  {
    name: "DTech Online Ltd – Portfolio Website",
    img: dtech,
    link: "https://dtechonline.dev/",
  },
  {
    name: "Xolaren – Solar Company Website",
    img: xolaren,
    link: "https://xolaren.vercel.app/",
  },
  {
    name: "717 – E-commerce Website",
    img: saatSotero,
    link: "https://saatsotero.com/",
  },
  {
    name: "Ticketase – Ticketing Platform",
    img: ticketAse,
    link: "https://www.ticketase.com/",
  },
  {
    name: "ZNFR University of Management Sciences",
    img: znrf,
    link: "https://zums.edu.bd/",
  },
  {
    name: "LB Health – Healthcare Platform",
    img: lbHealth,
    link: "https://lb-health.vercel.app/",
  },
  {
    name: "Ignited – Flight Management Portal",
    img: ignited,
    link: "#",
  },

  {
    name: "EMC Power – Power Company Website",
    img: emc,
    link: "https://emcpowercore.com/",
  },
  {
    name: "Rahman Law Associates – Law Firm Website",
    img: rla,
    link: "https://beta.rahmanlaw.net/",
  },
];

export default function MinimalProjectShowcase() {
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const [dragBounds, setDragBounds] = useState({ left: 0, right: 0 });
  const [computedSlideWidth, setComputedSlideWidth] = useState(0);

  // Keep this in sync with the Tailwind `gap-6` class (24px)
  const GAP_PX = 24;

  // Responsive breakpoints
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) setSlidesToShow(3);
      else if (width >= 768) setSlidesToShow(2.2);
      else setSlidesToShow(1.2);
    };
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  // Animate carousel
  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const slideWidth =
        (containerWidth - (slidesToShow - 1) * GAP_PX) / slidesToShow;
      setComputedSlideWidth(slideWidth);
      const targetX = -index * (slideWidth + GAP_PX);
      animate(x, targetX, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, slidesToShow, x]);

  // Adjust index if needed
  useEffect(() => {
    const maxIndex = Math.max(0, Math.floor(projects.length - slidesToShow));
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [slidesToShow, index]);

  const maxIndex = Math.max(0, Math.floor(projects.length - slidesToShow));

  // Update drag constraints whenever layout changes
  useEffect(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth || 1;
    const slideWidth =
      (containerWidth - (slidesToShow - 1) * GAP_PX) / slidesToShow;
    const trackWidth =
      projects.length * slideWidth + (projects.length - 1) * GAP_PX;
    const left = -(trackWidth - containerWidth);
    setComputedSlideWidth(slideWidth);
    setDragBounds({ left, right: 0 });
  }, [slidesToShow]);

  const handleDragEnd = () => {
    if (!computedSlideWidth) return;
    const step = computedSlideWidth + GAP_PX;
    const current = x.get();
    const rawIndex = Math.round(Math.abs(current) / step);
    const clamped = Math.max(0, Math.min(rawIndex, maxIndex));
    setIndex(clamped);
  };

  return (
    <div className="w-full px-4 md:px-8 py-16">
      <div className="container mx-auto">
        {/* Header with arrow buttons */}
        <div className="flex items-center justify-between mb-8">
          <TextMaskReveal
            splitByWord={true}
            text="FEATURED PROJECTS"
            fontSize="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl"
            className="text-secondary  font-bold leading-tight text-pretty uppercase"
            delayPerItem={0.08}
          />

          {/* Arrow buttons at top right */}
          <div className="flex gap-2">
            <motion.button
              disabled={index === 0}
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              whileHover={{ scale: index === 0 ? 1 : 1.05 }}
              whileTap={{ scale: index === 0 ? 1 : 0.95 }}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all
                ${
                  index === 0
                    ? "opacity-40 cursor-not-allowed bg-gray-700"
                    : "bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
                }`}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            <motion.button
              disabled={index === maxIndex}
              onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
              whileHover={{ scale: index === maxIndex ? 1 : 1.05 }}
              whileTap={{ scale: index === maxIndex ? 1 : 0.95 }}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all
                ${
                  index === maxIndex
                    ? "opacity-40 cursor-not-allowed bg-gray-700"
                    : "bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
                }`}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex gap-6"
            style={{ x }}
            drag="x"
            dragConstraints={dragBounds}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
          >
            {projects.map((project) => (
              <div
                key={project.name}
                className="shrink-0"
                style={{
                  width: `calc((100% - ${
                    (slidesToShow - 1) * GAP_PX
                  }px) / ${slidesToShow})`,
                }}
              >
                <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                  {/* Background Image with slow pan */}
                  <div
                    className="
      absolute inset-0
      bg-cover bg-no-repeat bg-top
      transition-all duration-[10000ms] ease-in-out
      group-hover:bg-bottom
    "
                    style={{
                      backgroundImage: `url(${
                        project.img || "/placeholder.svg"
                      })`,
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                  {/* Project Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <Link
                      to={project.link}
                      target="blank"
                      className="text-white text-xl md:text-2xl font-bold"
                    >
                      {project.name}
                    </Link>
                  </div>

                  {/* Link Button */}
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
      absolute top-4 right-4 z-20
      w-12 h-12
      bg-secondary/40 group-hover:bg-secondary/80
      backdrop-blur-md  
      rounded-xl flex items-center justify-center
      transition-all duration-500
      group-hover:scale-110
    "
                  >
                    <ArrowUpRight className="text-white w-6 h-6" />
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
