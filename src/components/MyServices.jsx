import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { servicesData } from "../data/servicesData";
import { TextMaskReveal } from "./TextMaskReveal";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); // 768px

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
      className="min-h-screen container mx-auto  rounded-t-4xl"
    >
      {/* Header */}
      <div className="mb-16 md:mb-20 px-4 md:px-8 pt-20">
        <TextMaskReveal
          text="Services & Solutions"
          splitByWord
          fontSize="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl"
          className="text-secondary  font-bold leading-tight mb-6 md:mb-8"
          delayPerItem={0.08}
        />

        <p className="text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed text-justify font-light max-w-4xl">
          I design and develop modern, scalable web experiences — from clean
          portfolio websites to complex management systems. My focus is on
          performance, usability, and visually engaging interfaces powered by
          modern frontend animation and 3D technologies.
        </p>
      </div>

      {/* Sticky Services */}
      {servicesData.map((service, index) => (
        <div
          key={index}
          ref={(el) => (serviceRefs.current[index] = el)}
          className={`sticky px-4  md:px-8 pt-8 pb-14 min-h-[80vh] lg:min-h-[60vh] bg-black text-primary border-t border-white/20`}
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex flex-col gap-8">
            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-light">{service.title}</h2>

            {/* Description */}
            <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-4xl">
              {service.description}
            </p>

            {/* Project Items */}
            <div className=" grid grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {service.items.map((item, itemIndex) => (
                <Link
                  key={`item-${index}-${itemIndex}`}
                  to={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-center lg:justify-between items-center bg-white/95 px-4 py-3 rounded-xl gap-6  duration-300 transition-all hover:scale-[1.02] "
                >
                  {/* Index */}
                  <span className="w-8 hidden lg:block text-sm text-black">
                    0{itemIndex + 1}
                  </span>

                  {/* Icon */}
                  <img
                    src={item.icon}
                    alt={item.title}
                    className=" w-20 lg:w-32 object-contain max-h-8 lg:max-h-12  transition-all duration-300 "
                  />

                  {/* Name */}
                  <span className="relative hidden lg:block text-xl text-black lg:text-xl font-light">
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

export default Services;
