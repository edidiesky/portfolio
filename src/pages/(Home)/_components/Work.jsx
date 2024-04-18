"use client";
import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectdata3 } from "@/constants/data/projectdata";
import { scaleAnimations } from "@/constants/utils/framer";
import ProjectCard from "./ProjectCard";
import WorkList from "@/components/common/WorkList";
import gsap from "gsap";

const Work = () => {
  const [mouseposition, setMousePosition] = useState({
    active: false,
    index: 0,
  });
  const ref = useRef([]);
  const mouseRef = useRef(null);
  const headerref = useRef([]);

  const labelRef = useRef(null);
  const [tab, setTab] = useState({
    active: false,
    index: 0,
  });
  ref.current = [];
  headerref.current = [];

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

  const addRefs = (el) => {
    if (el && !ref?.current?.includes(el)) {
      ref.current.push(el);
    }
  };

  // console.log(mouseposition);

  const website = projectdata3[mouseposition?.index]?.mainTitle;

  // const website = webactive ? webactive : false;

  // console.log(website);

  return (
    <>
      <motion.span
        ref={mouseRef}
        variants={scaleAnimations}
        initial="initial"
        animate={mouseposition?.active ? "enter" : "exit"}
        className="w-32 z-[42] absolute h-32 rounded-full shadow-2xl hidden lg:flex items-center justify-center text-[12px] text-white font-portfolio_bold bg-[#2e2e30]"
      ></motion.span>
      <motion.span
        variants={scaleAnimations}
        initial="initial"
        animate={mouseposition?.active ? "enter" : "exit"}
        ref={labelRef}
        className="w-16 z-[42] h-16 absolute rounded-full hidden lg:flex items-center justify-center text-[10px] text-white font-portfolio_bold1"
      >
        { <Link
            className="text-center text-3xl w-full"
            // target="_blank"
            href={`/work/${website}`}
          >
            View
          </Link>}
      </motion.span>
      <div className="py-12 w-full relative">
        <div
          onMouseEnter={() =>
            setMousePosition({
              active: false,
            })
          }
          className="absolute top-0 w-full h-full z-[36]"
        ></div>

        <div data-scroll className="py-12 w-full relative">
          <div className="w-[90%] mx-auto md:px-8 m-auto max-w-custom_1 grid grid-cols-1 lg:grid-cols-custom_3 relative gap-16">
            <div className="text-6xl text-text_dark_1 font-portfolio_bold w-[120px] mt-16 font-normal uppercase">
              <span>02/</span>
              <span>RECENT WORKS?</span>
            </div>

            {/* <Mouse mouseposition={mouseposition} /> */}
            <div className="w-full relative z-[40] gap-x-8 gap-y-24 md:gap-y-32 justify-between">
              <WorkList
                setMousePosition={setMousePosition}
                setTab={setTab}
                tab={tab}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
