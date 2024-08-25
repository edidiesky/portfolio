"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Magnetic from "@/components/animations/Magnetic";
import { motion, useInView } from "framer-motion";
import { projectdata3 } from "@/constants/data/projectdata";
import { scaleAnimations, slideup2 } from "@/constants/utils/framer";
import WorkList from "@/components/common/WorkList";
import gsap from "gsap";
import AnimateTextWord from "@/components/animations/AnimateTextWord";

const Work = () => {
  const [mouseposition, setMousePosition] = useState({
    active: false,
    index: 0,
  });
  const mouseRef = useRef(null);
  const labelRef = useRef(null);
  const [tab, setTab] = useState({
    active: false,
    index: 0,
  });
  const heroWords =
    "A selected set of experiments I'm building as I navigate through ideas and technologies. I do learn by testing out and building based on concepts and techniques.";
 
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
  const website = projectdata3[mouseposition?.index]?.mainTitle;
  return (
    <>
      <motion.span
        ref={mouseRef}
        variants={scaleAnimations}
        initial="initial"
        animate={mouseposition?.active ? "enter" : "exit"}
        className="w-24 z-[42] absolute h-24 rounded-full shadow-2xl flex items-center justify-center text-[12px] text-[#000] font-portfolio_bold bg-[#fff]"
      ></motion.span>
      <motion.span
        variants={scaleAnimations}
        initial="initial"
        animate={mouseposition?.active ? "enter" : "exit"}
        ref={labelRef}
        className="w-16 z-[42] h-16 absolute rounded-full flex items-center justify-center text-[10px] text-[#000] font-portfolio_bold1"
      >
        {
          <Link
            className="text-center text-base w-full"
            // target="_blank"
            href={`/work/${website}`}
          >
            View
          </Link>
        }
      </motion.span>
      <div className="py-20 w-full relative">
        <div
          onMouseEnter={() =>
            setMousePosition({
              active: false,
            })
          }
          className="absolute top-0 w-full h-full z-[36]"
        ></div>

        <div className="w-[100%] md:w-[90%] flex flex-col gap-12 mx-auto">
          <div className="flex w-full flex-col gap-4">
            <span
              data-scroll
              data-scroll-speed="2"
              // titleRef
              className="font-normal titleRef titleRef2 text-text_dark_1 flex flex-wrap gap-[10px]
                  uppercase text-5xl xl:text-7xl"
            >
              {/* Projects */}
              <AnimateTextWord>Projects</AnimateTextWord>
            </span>
            <h4 className="max-w-[600px] w-full text-lg md:text-xl font-normal uppercase leading-[1.1] ">
              <AnimateTextWord>{heroWords}</AnimateTextWord>
            </h4>
          </div>
          <WorkList
            setMousePosition={setMousePosition}
            setTab={setTab}
            tab={tab}
          />
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-custom flex items-center justify-center mx-auto w-[90%]">
          <Link
            href={
              "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
            }
            className="w-[200px] md:w-[240px] h-[80px] font-portfolio_regular md:h-[85px] flex items-center bg-[#fff] justify-center 
            text-[var(--dark-1)] text-lg md:text-lg rounded-[60px] overflow-hidden"
          >
            <Magnetic bgColor={"#d1d1d1"}>View More Works</Magnetic>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Work;
