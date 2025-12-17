import { useEffect, useState } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import "../pages/preloader.css";

// Register GSAP plugins
gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

let hasLoaded = false;

const Preloader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(!hasLoaded);

  useEffect(() => {
    // Mark as loaded when component unmounts
    return () => {
      hasLoaded = true;
    };
  }, []);

  useGSAP(() => {
    if (!isVisible) return;

    const tl = gsap.timeline({
      delay: 0.3,
      defaults: {
        ease: "hop",
      },
    });

    const counts = document.querySelectorAll(".count");

    counts.forEach((count, index) => {
      const digits = count.querySelectorAll(".digit h1");

      tl.to(
        digits,
        {
          y: "0%",
          duration: 1,
          stagger: 0.075,
        },
        index * 1
      );

      if (index < counts.length) {
        tl.to(
          digits,
          {
            y: "-100%",
            duration: 1,
            stagger: 0.075,
          },
          index * 1 + 1
        );
      }
    });

    tl.to(
      ".block",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: 0.1,
        delay: 0.1,
        onComplete: () => {
          gsap.set(".loader", { pointerEvents: "none" });
          setIsVisible(false);
          if (onComplete) onComplete();
        },
      },
      "<"
    );
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="loader">
      <div className="overlay">
        <div className="block"></div>
        <div className="block"></div>
      </div>

      <div className="counter">
        <div className="count">
          <div className="digit">
            <h1>0</h1>
          </div>
          <div className="digit">
            <h1>0</h1>
          </div>
        </div>
        <div className="count">
          <div className="digit">
            <h1>2</h1>
          </div>
          <div className="digit">
            <h1>7</h1>
          </div>
        </div>
        <div className="count">
          <div className="digit">
            <h1>6</h1>
          </div>
          <div className="digit">
            <h1>5</h1>
          </div>
        </div>
        <div className="count">
          <div className="digit">
            <h1>9</h1>
          </div>
          <div className="digit">
            <h1>8</h1>
          </div>
        </div>
        <div className="count">
          <div className="digit">
            <h1>9</h1>
          </div>
          <div className="digit">
            <h1>9</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
