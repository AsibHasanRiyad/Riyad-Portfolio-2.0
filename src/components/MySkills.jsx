/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { TextMaskReveal } from "./TextMaskReveal";
import { ArrowRight } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      title: "Frontend Development",
      items: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "Redux",
        "GSAP",
        "Framer Motion",
        "React Three Fiber",
      ],
    },

    {
      title: "Backend Development",
      items: ["Node.js", "Express.js", "PHP", "Laravel", "FilamentPHP"],
    },

    {
      title: "Databases",
      items: ["MongoDB", "MySQL", "sqlite"],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 1, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full -mt-[12vh] md:-mt-[20vh] lg:-mt-[20vh] py-12 md:py-16 lg:py-20 px-4 md:px-8  relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-t from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className=" container  mx-auto relative z-10">
        <div className="mb-16 md:mb-20">
          <TextMaskReveal
            text="Key Skills"
            splitByWord
            fontSize="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl"
            className="text-secondary  font-bold leading-tight text-pretty mb-6 md:mb-8"
            delayPerItem={0.08}
          />
          <p className="text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed text-justify font-light">
            A versatile full-stack developer with strong expertise in the MERN
            ecosystem, modern frontend animation frameworks, and backend
            technologies. Skilled in building responsive interfaces, scalable
            APIs, and optimized user experiences using React, Next.js, Tailwind,
            GSAP, Framer Motion, and React Three Fiber. Experienced with
            database management, deployment workflows, and UI engineering using
            tools like Laravel, Filament, MongoDB, and MySQL, combined with a
            solid understanding of digital marketing and SEO strategies.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 cursor-pointer md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="relative group transition-colors duration-500 p-6 md:p-8 rounded-2xl border border-primary/10 overflow-hidden bg-white/5 backdrop-blur-sm h-full flex flex-col"
            >
              {/* FIXED animated background overlay */}
              <motion.div
                variants={{
                  rest: {
                    x: "-100%",
                    y: "100%",
                    opacity: 0,
                  },
                  hover: {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                className="absolute inset-0 bg-secondary origin-center"
                style={{ borderRadius: "1rem" }}
              />

              <div className="relative z-10">
                <h3 className="mb-4 md:mb-6 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                  <span className="text-lg font-foregen md:text-xl font-semibold group-hover:text-primary text-secondary">
                    {skill.title}
                  </span>
                </h3>

                <ul className="grid grid-cols-2 gap-2 md:gap-3">
                  {skill.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm flex items-center gap-1 md:text-base text-gray-100"
                    >
                      <ArrowRight className="size-4" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
