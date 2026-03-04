import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { servicesData } from "../data/servicesData";
import { TextMaskReveal } from "./TextMaskReveal";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

/* ─── Mobile / Tablet variant ─────────────────────────────── */
const ServicesMobile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const service = servicesData[activeTab];

  return (
    <section id="services" className="min-h-screen px-4 md:px-8 ">
      {/* Header */}
      <div className="mb-10">
        <TextMaskReveal
          text="Services & Solutions"
          splitByWord
          fontSize="text-4xl md:text-5xl"
          className="text-secondary font-bold leading-tight mb-4"
          delayPerItem={0.08}
        />
        <p className="text-base text-gray-100 leading-relaxed font-light">
          Modern, scalable web experiences — from clean portfolio sites to
          complex management systems.
        </p>
      </div>

      {/* Tab Pills */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
        {servicesData.map((s, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300
              ${
                activeTab === i
                  ? "bg-secondary text-black border-secondary"
                  : "bg-transparent text-white/60 border-white/20 hover:border-white/50"
              }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Active Service Card */}
      <div
        key={activeTab}
        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 animate-fadeIn"
      >
        <h2 className="text-3xl md:text-4xl font-light text-white mb-3">
          {service.title}
        </h2>
        <p className="text-sm md:text-base text-white/50 leading-relaxed mb-8">
          {service.description}
        </p>

        {/* Items Grid */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
          {service.items.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 bg-primary/80 rounded-xl px-3 py-4
                         border border-transparent hover:border-secondary/40 transition-all duration-300 hover:scale-[1.03]"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 max-h-8 object-contain"
              />
              {/* <span className="text-xs text-black/70 font-medium text-center leading-tight">
                {item.title}
              </span> */}
            </Link>
          ))}
        </div>
      </div>

      {/* Step indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {servicesData.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`h-1.5 rounded-full transition-all duration-300
              ${activeTab === i ? "w-6 bg-secondary" : "w-1.5 bg-white/20"}`}
          />
        ))}
      </div>
    </section>
  );
};

/* ─── Desktop variant (your existing sticky design) ────────── */
const ServicesDesktop = () => {
  const serviceRefs = useRef([]);

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;
      gsap.from(el, {
        y: 200,
        duration: 1,
        ease: "circ.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom start",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <section
      id="services"
      className="min-h-screen container mx-auto rounded-t-4xl"
    >
      <div className="mb-16 md:mb-20 px-4 md:px-8 pt-20">
        <TextMaskReveal
          text="Services & Solutions"
          splitByWord
          fontSize="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl"
          className="text-secondary font-bold leading-tight mb-6 md:mb-8"
          delayPerItem={0.08}
        />
        <p className="text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed text-justify font-light max-w-4xl">
          I design and develop modern, scalable web experiences — from clean
          portfolio websites to complex management systems. My focus is on
          performance, usability, and visually engaging interfaces powered by
          modern frontend animation and 3D technologies.
        </p>
      </div>

      {servicesData.map((service, index) => (
        <div
          key={index}
          ref={(el) => (serviceRefs.current[index] = el)}
          className="sticky px-4 md:px-8 pt-8 pb-14 min-h-[60vh] bg-black text-primary border-t border-white/20"
          style={{
            top: `calc(10vh + ${index * 5}em)`,
            marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
          }}
        >
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl lg:text-5xl font-light">{service.title}</h2>
            <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-4xl">
              {service.description}
            </p>
            <div className="grid grid-cols-3 gap-6 mt-4">
              {service.items.map((item, itemIndex) => (
                <Link
                  key={`item-${index}-${itemIndex}`}
                  to={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-between items-center bg-primary/75 px-4 py-3 rounded-xl gap-6 duration-300 transition-all hover:scale-[1.02]"
                >
                  <span className="w-8 text-sm text-black">
                    0{itemIndex + 1}
                  </span>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-32 object-contain max-h-12 transition-all duration-300"
                  />
                  <span className="text-xl text-black font-light">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const Services = () => {
  const isLarge = useMediaQuery({ minWidth: "1024px" });
  return isLarge ? <ServicesDesktop /> : <ServicesMobile />;
};

export default Services;
