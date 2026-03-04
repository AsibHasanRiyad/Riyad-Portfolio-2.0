import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextMaskReveal } from "./TextMaskReveal";

gsap.registerPlugin(ScrollTrigger);

const myJourney = [
  {
    id: 1,
    year: "2019 - 2023",
    title: "EDUCATION",
    description:
      "Completed my Bachelor of Science degree in Electrical and Electronics Engineering (EEE) from IUBAT — International University of Business Agriculture and Technology, gaining strong foundations in engineering principles, programming, and problem-solving.",
    details: [
      "B.Sc in Electrical & Electronics Engineering (EEE)",
      "Passing Year: 2023",
      "IUBAT — International University of Business Agriculture and Technology",
    ],
  },

  {
    id: 2,
    year: "February 2024 – September 2024",
    title: "Junior Front-End Developer — Rainier Technology",
    description:
      "Worked as a Junior Front-End Developer, focusing on building modern, responsive, and scalable web applications using Vue.js. Contributed to real-world production systems across education and healthcare domains.",
    details: [
      "Developed front-end applications using Vue.js",
      "Built an Admission & Student Management System for BCTI",
      "Developed a Health Portal for Rainier Health",
      "Implemented responsive and user-friendly UI/UX",
      "Integrated frontend features with backend APIs",
      "Collaborated with team members to deliver production-ready solutions",
    ],
  },

  {
    id: 3,
    year: "October 2024 – Present",
    title: "Junior Software Engineer — Skylark Soft Limited",
    description:
      "Currently working as a Junior Software Engineer, developing full-featured web applications using modern technologies including React, Next.js, and Laravel. Actively involved in building scalable systems, interactive UI, and animation-rich user experiences.",
    details: [
      "Developing applications using React and Next.js",
      "Working with Laravel for backend development",
      "Building dynamic portfolio websites with animations and 3D effects",
      "Using GSAP for advanced animations and interactions",
      "Developing a School Management System for Safeer Academy",
      "Building Flight Booking and Tenant Management software",
      "Collaborating with cross-functional teams on scalable solutions",
    ],
  },
];

const MyJourney = () => {
  const containerRef = useRef();
  const [activeSection, setActiveSection] = useState(0);
  const indicatorRef = useRef();

  useEffect(() => {
    const sections = gsap.utils.toArray(".tech-section");

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(index),
        onEnterBack: () => setActiveSection(index),
      });
    });

    gsap.to(indicatorRef.current, {
      height: "100%",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      className="relative container mx-auto px-4 md:px-8 py-12 md:py-16 lg:py-20"
      ref={containerRef}
    >
      <div className=" lg:grid lg:grid-cols-5 gap-12 relative">
        {/* LEFT SIDEBAR */}
        <div className=" hidden lg:block lg:col-span-2">
          <div className="sticky top-28 flex flex-col items-start h-[calc(100vh-7rem)]">
            <h2 className="text-sm font-semibold text-gray-400 mb-6 tracking-wider">
              MY JOURNEY
            </h2>

            <div className="relative w-full">
              <div className="absolute left-2 top-0 w-1 bg-gray-800 h-full rounded-full overflow-hidden">
                <div
                  ref={indicatorRef}
                  className="absolute left-0 top-0 w-full bg-secondary rounded-full h-0"
                />
              </div>

              <nav className="relative z-10 space-y-8 pl-6">
                {myJourney.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      const el = document.getElementById(
                        `section-${section.id}`,
                      );
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`transition-all text-xl md:text-2xl lg:text-3xl font-foregen font-normal duration-300 flex items-center gap-3 text-left ${
                      activeSection === index
                        ? "text-secondary font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    <ArrowRight
                      className={`w-3 h-3 rounded-full ${
                        activeSection === index
                          ? "text-secondary font-bold"
                          : "text-gray-500"
                      }`}
                    />
                    {section.year}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-3 space-y-12 lg:space-y-24">
          {myJourney.map((section) => (
            <div
              key={section.id}
              id={`section-${section.id}`}
              className="tech-section min-h-[40vh] flex flex-col md:flex-row md:items-start gap-6 md:gap-10 scroll-mt-28"
            >
              {/* SECTION DETAILS */}
              <div className="flex-1 space-y-4">
                <TextMaskReveal
                  text={section.title}
                  splitByWord
                  fontSize="text-2xl md:text-4xl lg:text-5xl"
                  className=" font-normal text-secondary"
                />

                <p className="text-lg md:text-xl text-gray-200 font-medium">
                  {section.description}
                </p>

                <div className="grid grid-cols-1 gap-4 mt-6">
                  {section.details.map((detail, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between group p-4 border-b border-gray-700 transition-all cursor-pointer"
                    >
                      <div className="flex items-center group-hover:scale-105 group-hover:translate-x-3 transition-transform duration-500 gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-100"></div>
                        <span className="text-gray-200 font-medium">
                          {detail}
                        </span>
                      </div>

                      <ArrowUpRight className="text-gray-100 group-hover:-translate-x-3 transition-transform group-hover:scale-105 duration-500 w-5 h-5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyJourney;
