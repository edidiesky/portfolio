import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
import Link from "next/link";
import { scaleAnimations } from "@/constants/utils/framer";
const Footer = () => {
  const [active, setActive] = useState(false);
  const [mouseposition, setMousePosition] = useState({
    active: false,
    index: 0,
  });
  const mouseRef = useRef(null);
  const labelRef = useRef(null);
  const sliderRef = useRef(null);
  const firstSliderTextRef = useRef(null);
  const secondSliderTextRef = useRef(null);

  let sliderPosition = 0;
  let sliderDirection = -1;

  useEffect(() => {
    const { ScrollTrigger } = window.gsap;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sliderRef.current, {
      x: "-=500px",
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.2,
        onUpdate: (e) => (direction = e.direction * -1),
      },
    });
    requestAnimationFrame(handleSliderPosition);
  }, []);
  useEffect(() => {
    let mouseXMovement = gsap.quickTo(mouseRef.current, "left", {
      duration: 0.9,
      ease: "power3",
    });

    let mouseYMovement = gsap.quickTo(mouseRef.current, "top", {
      duration: 0.9,
      ease: "power3",
    });

    let labelXMovement = gsap.quickTo(labelRef.current, "left", {
      duration: 0.68,
      ease: "power3",
    });

    let labelYMovement = gsap.quickTo(labelRef.current, "top", {
      duration: 0.68,
      ease: "power3",
    });

    const handleMouseMotion = (e) => {
      const { pageX, pageY } = e;
      mouseXMovement(pageX);
      mouseYMovement(pageY);

      labelXMovement(pageX);
      labelYMovement(pageY);
    };

    window.addEventListener("mousemove", handleMouseMotion);
    return () => {
      window.removeEventListener("mousemove", handleMouseMotion);
    };
  }, []);
  const handleSliderPosition = () => {
    if (sliderPosition <= -155) {
      sliderPosition = 0;
    }
    if (sliderPosition > 0) {
      sliderPosition = -155;
    }
    gsap.set(firstSliderTextRef.current, { xPercent: sliderPosition });
    gsap.set(secondSliderTextRef.current, { xPercent: sliderPosition });
    sliderPosition += 0.2 * sliderDirection;
    requestAnimationFrame(handleSliderPosition);
  };

  return (
    <>
      <motion.span
        ref={mouseRef}
        variants={scaleAnimations}
        initial="initial"
        animate={mouseposition?.active ? "enter" : "exit"}
        className="w-56 z-[42] absolute h-56 rounded-full shadow-2xl flex items-center justify-center text-[12px] text-white font-portfolio_bold bg-[#2e2e30]"
      ></motion.span>
      <motion.span
        variants={scaleAnimations}
        initial="initial"
        animate={mouseposition?.active ? "enter" : "exit"}
        ref={labelRef}
        className="w-28 z-[42] h-28 absolute rounded-full flex items-center justify-center text-[10px] text-white font-portfolio_bold1"
      >
        <Link
          className="text-center text-5xl w-full"
          target="_blank"
          href={
            "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
          }
        >
          Message Me
        </Link>
      </motion.span>
      <div className="relative min-h-[40vh] py-40">
        <div
          onMouseEnter={() =>
            setMousePosition({
              active: false,
            })
          }
          className="absolute  top-0 w-full h-full z-[36]"
        ></div>
        <div className="w-full">
          <div className="flex w-[90%] max-w-custom mx-auto flex-col overflow-hidden">
            <div
              ref={sliderRef}
              onMouseEnter={() =>
                setMousePosition({
                  active: true,
                })
              }
              className="w-full relative z-[40] whitespace-nowrap flex"
            >
              <Link
                ref={firstSliderTextRef}
                href={
                  "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
                }
                className="text-[200px] lg:text-[375px] w-full font-normal font-portfolio_bold1 text-text_dark_1 uppercase"
              >
                LET-US-COLLABORATE
              </Link>
              <Link
                ref={secondSliderTextRef}
                href={
                  "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
                }
                className=" absolute left-[155%] text-[200px] lg:text-[375px] w-full font-normal font-portfolio_bold1 text-text_dark_1 uppercase"
              >
                LET-US-COLLABORATE
              </Link>
            </div>
            <div
              onMouseEnter={() =>
                setMousePosition({
                  active: true,
                })
              }
              className="w-[90%] z-[46] max-w-custom mx-auto md:px-20 grid grid-cols-1 md:grid-cols-custom_5 justify-between gap-4"
            >
              <div className="w-full grid grid-cols-3 gap-16">
                <div className="w-full z-[46] flex flex-col gap-4">
                  <h4 className="text-5xl">
                    <sup className="text-2xl">01/</sup> SITEMAP
                  </h4>
                  <ul className="flex text-3xl flex-col gap-2">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>About</Link>
                    <Link href={"/"}>Works</Link>
                    <Link href={"/"}>Contact</Link>
                  </ul>
                </div>
                <div className="w-full flex flex-col gap-4">
                  <h4 className="text-5xl">
                    <sup className="text-2xl">02/</sup> SOCIALS
                  </h4>
                  <ul className="flex text-3xl flex-col gap-2">
                    <Link href={"/"}>Twitter</Link>
                    <Link href={"/"}>Instagram</Link>
                    <Link href={"/"}>Github</Link>
                  </ul>
                </div>
              </div>
              <div className="flex w-[300px] justify-start md:justify-end">
                <div className="w-full flex flex-col gap-4">
                  <h4 className="text-5xl">
                    <sup className="text-2xl">03/</sup> INFOS
                  </h4>
                  <ul className="flex text-3xl flex-col gap-2">
                    © Code By Victor Essien 2024
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
