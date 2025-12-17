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
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <PixelBlast
          variant="circle"
          pixelSize={5}
          className={"z-0"}
          color="#007a74"
          patternScale={32}
          patternDensity={0.6}
          pixelSizeJitter={0.4}
          enableRipples
          rippleSpeed={0}
          rippleThickness={0.12}
          rippleIntensityScale={1}
          speed={0}
          edgeFade={0}
          transparent
        />
      </div>
      <div className="absolute hidden lg:block inset-0 z-0 lg:z-20 pointer-events-none">
        <HeroModel />
      </div>

      <div className="min-h-screen lg:gap-20 flex-col container mx-auto md:px-8 text-white flex items-center justify-center lg:mt-28 px-4 py-12  relative ">
        <div className="w-full container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Left Section */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <TextMaskReveal
                  splitByWord={true}
                  fontSize="text-6xl md:text-7xl lg:text-7xl 2xl:text-8xl"
                  className="text-secondary text-center lg:text-start tracking-wider font-foregen font-bold text-pretty"
                  text="Asib Hasan"
                  delayPerItem={0.08}
                />

                <TextMaskReveal
                  splitByWord={true}
                  fontSize="text-6xl md:text-7xl lg:text-7xl 2xl:text-8xl"
                  className="text-secondary text-center lg:text-start tracking-wider font-foregen font-bold text-pretty"
                  text="Riyad"
                  delayPerItem={0.08}
                />
              </div>

              <div className="space-y-3">
                <TextMaskReveal
                  splitByWord={false}
                  fontSize="text-lg md:text-lg"
                  className="font-light leading-relaxed text-gray-100"
                  text="I build modern, scalable, and high-performance web applications using the MERN stack. My focus is creating seamless user experiences backed by robust server-side architecture."
                  delayPerItem={0.08}
                />
              </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center items-center order-first md:order-0 relative"></div>

            {/* Right Section */}
            <div className="flex flex-col z-50 justify-between space-y-12">
              <div className="space-y-4">
                <TextMaskReveal
                  splitByWord={true}
                  className="text-5xl text-secondary md:text-2xl font-bold tracking-wider"
                  text="Reach Me"
                  delayPerItem={0.08}
                />

                <div className="flex gap-4">
                  <Button
                    href={
                      "https://www.linkedin.com/in/asibhasan/?skipRedirect=true"
                    }
                    imgSrc={linkedIn}
                  >
                    Linkedin
                  </Button>
                  <Button
                    href="mailto:asibhasanriyad@gmail.com?subject=Hello%20Asib&body=I%20want%20to%20connect%20with%20you"
                    imgSrc={gmail}
                  >
                    {" "}
                    Gmail
                  </Button>
                  <Button
                    href={"https://github.com/AsibHasanRiyad"}
                    imgSrc={github}
                  >
                    {" "}
                    GitHub
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <TextMaskReveal
                  splitByWord={true}
                  fontSize="text-4xl lg:text-4xl 2xl:text-5xl"
                  className="text-secondary  font-bold leading-tight"
                  text="Full-Stack Developer"
                  delayPerItem={0.08}
                />

                <TextMaskReveal
                  splitByWord={true}
                  fontSize="text-base md:text-lg"
                  className="leading-relaxed text-gray-100"
                  text="Specialized in the MERN stack — MongoDB, Express.js, React, and Node.js. I develop end-to-end solutions, from intuitive front-ends to efficient APIs and scalable backend systems."
                  delayPerItem={0.08}
                />
              </div>
            </div>
          </div>
        </div>
        <StatsSection />
      </div>
    </div>
  );
}
