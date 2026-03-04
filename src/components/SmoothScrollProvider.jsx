import ReactLenis from "lenis/react";

const SmoothScrollProvider = ({ children }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const lenisOptions = {
    duration: isMobile ? 0 : 1.2, // shorter duration for desktop, none for mobile
    easing: (t) => 1 - Math.pow(1 - t, 3), // lighter easing
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: !isMobile,         // disable smooth on mobile
    smoothTouch: false,        // extra safety
    syncTouch: false,          // IMPORTANT: prevents touch smoothing
    infinite: false,
    lerp: isMobile ? 1 : 0.08, // no interpolation on mobile
    wheelMultiplier: 1,
    touchMultiplier: 1,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollProvider;