/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TextMaskReveal } from "./TextMaskReveal";

import dtech from "../assets/dtech.webp";
import xolaren from "../assets/xolaren.webp";
import emc from "../assets/emc.webp";
import rla from "../assets/rla.webp";
import ignited from "../assets/ignited.webp";
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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    dragFree: false,
    loop: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full px-4 md:px-8 py-16">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <TextMaskReveal
            splitByWord={true}
            text="FEATURED PROJECTS"
            fontSize="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl"
            className="text-secondary font-bold leading-tight text-pretty uppercase"
            delayPerItem={0.08}
          />
          <div className="flex gap-2">
            <button
              disabled={!canScrollPrev}
              onClick={() => emblaApi?.scrollPrev()}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all
                ${
                  !canScrollPrev
                    ? "opacity-40 cursor-not-allowed bg-gray-700"
                    : "bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
                }`}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              disabled={!canScrollNext}
              onClick={() => emblaApi?.scrollNext()}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all
                ${
                  !canScrollNext
                    ? "opacity-40 cursor-not-allowed bg-gray-700"
                    : "bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
                }`}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Embla viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="shrink-0 w-[calc((100%-48px)/3)] max-md:w-[calc((100%-24px)/2)] max-sm:w-full"
              >
                <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                  {/* Use <img> + object-fit instead of background-position pan */}
                  <img
                    src={project.img}
                    alt={project.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top
                               transition-[object-position] duration-8000 ease-in-out
                               group-hover:object-bottom will-change-auto"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <Link
                      to={project.link}
                      target="_blank"
                      className="text-white text-xl md:text-2xl font-bold"
                    >
                      {project.name}
                    </Link>
                  </div>
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 z-20 w-12 h-12
                               bg-secondary/40 group-hover:bg-secondary/80
                               backdrop-blur-md rounded-xl flex items-center justify-center
                               transition-all duration-500 group-hover:scale-110"
                  >
                    <ArrowUpRight className="text-white w-6 h-6" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
