"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
      direction: "vertical",
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
    });
    function raf(time) {
      lenis.raf(time);
      window.ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return children;
};

export default SmoothScroll;
