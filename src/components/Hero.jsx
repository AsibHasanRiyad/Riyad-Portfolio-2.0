/* eslint-disable no-unused-vars */
import { Facebook, Instagram, Send, Linkedin } from "lucide-react";
import { TextMaskReveal } from "./TextMaskReveal";
import { motion } from "framer-motion";
import { HeroModel } from "./Model";
import PixelBlast from "./PixelBlast";
import Button from "./Button";
import github from "../assets/gitHub.svg";
import gmail from "../assets/gmail.svg";
import linkedIn from "../assets/linkedin.svg";
import StatsSection from "./StatSection";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 3D Background / Hero Model */}
      <div className="absolute hidden lg:block inset-0 z-0 lg:z-20 pointer-events-none">
        <HeroModel />
      </div>

      <div
        className="min-h-screen lg:gap-20 flex-col container mx-auto md:px-8 text-white flex items-center justify-center
      
       px-4 py-12 relative"
      >
        <div className="w-full container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Left Section: Branding */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <TextMaskReveal
                  splitByWord={true}
                  fontSize="text-6xl lg:text-6xl 2xl:text-7xl"
                  className="text-secondary text-center lg:text-start tracking-wider font-neuhade font-bold text-pretty"
                  text="Asib Hasan"
                  delayPerItem={0.08}
                />

                <TextMaskReveal
                  splitByWord={true}
                  fontSize="text-6xl md:text-6xl lg:text-6xl 2xl:text-7xl"
                  className="text-secondary -mt-6 text-center lg:text-start tracking-wider font-neuhade font-bold text-pretty"
                  text="Riyad"
                  delayPerItem={0.08}
                />
              </div>

              <div className="space-y-3">
                <TextMaskReveal
                  splitByWord={false}
                  fontSize="text-lg md:text-lg"
                  className="font-light leading-relaxed text-gray-100 text-center lg:text-start"
                  text="Software Engineer at Dtech Online Ltd. Dedicated to crafting immersive, motion-driven web experiences where high-end performance meets fluid storytelling."
                  delayPerItem={0.08}
                />
              </div>
            </div>

            {/* Center Space for 3D Assets */}
            <div className="flex justify-center items-center order-first md:order-0 relative"></div>

            {/* Right Section: Tech Focus */}
            <div className="flex flex-col z-50 justify-between space-y-12">
              <div className="space-y-4">
                <TextMaskReveal
                  splitByWord={true}
                  fontSize="text-2xl md:text-3xl lg:text-4xl"
                  className="text-xl text-secondary font-bold tracking-widest uppercase text-center lg:text-start"
                  text="Direct Contact"
                  delayPerItem={0.08}
                />

                <div className="flex gap-4 justify-center lg:justify-start">
                  <Button
                    href="https://www.linkedin.com/in/asibhasan/"
                    imgSrc={linkedIn}
                  >
                    LinkedIn
                  </Button>
                  <Button href="mailto:asibhasanriyad@gmail.com" imgSrc={gmail}>
                    Gmail
                  </Button>
                  <Button
                    href="https://github.com/AsibHasanRiyad"
                    imgSrc={github}
                  >
                    GitHub
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <TextMaskReveal
                  splitByWord={true}
                  fontSize="text-3xl lg:text-4xl 2xl:text-5xl"
                  className="text-secondary font-bold leading-tight text-center lg:text-start"
                  text="Full-Stack Developer"
                  delayPerItem={0.08}
                />

                <TextMaskReveal
                  splitByWord={false}
                  fontSize="text-base md:text-lg"
                  className="leading-relaxed text-gray-300 text-center lg:text-start"
                  text="Specializing in React, Next.js, and Three.js. I leverage GSAP, Framer Motion, and R3F to transform static designs into high-performance, interactive digital products."
                  delayPerItem={0.08}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <StatsSection /> */}
      </div>
    </div>
  );
}
