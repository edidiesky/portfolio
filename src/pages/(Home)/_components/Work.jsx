"use client";
import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectdata } from "@/constants/data/projectdata";
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

  const webactive = projectdata[mouseposition?.index]?.website;

  const website = webactive ? webactive : false;

  // console.log(website);

  return (
    <>
      <motion.span
        ref={mouseRef}
        variants={scaleAnimations}
        initial="initial"
        animate={mouseposition?.active ? "enter" : "exit"}
        className="w-28 z-[62] absolute h-28 rounded-full flex items-center justify-center text-[12px] text-white font-portfolio_bold bg-[#2e2e30]"
      ></motion.span>
      <motion.span
        variants={scaleAnimations}
        initial="initial"
        animate={mouseposition?.active ? "enter" : "exit"}
        ref={labelRef}
        className="w-16 z-[62] h-16 absolute rounded-full flex items-center justify-center text-[10px] text-white font-portfolio_bold1"
      >
        {website ? (
          <Link
            className="text-center text-3xl w-full"
            target="_blank"
            href={website}
          >
            View
          </Link>
        ) : (
          <span className="text-center text-xl leading-[1] w-full">
            {" "}
            Work in Progress
          </span>
        )}
      </motion.span>
      <div className="py-12 w-full relative">
        <div
          onMouseEnter={() =>
            setMousePosition({
              active: false,
            })
          }
          className="absolute top-0 w-full h-full z-[55]"
        ></div>

        <div data-scroll className="py-12 w-full relative">
          <div className="w-[90%] mx-auto px-8 m-auto max-w-custom_1 grid grid-cols-1 sm:grid-cols-custom_3 relative gap-16">
            <div className="text-6xl text-text_dark_1 font-portfolio_bold w-[120px] pt-4 border-t border-[rgba(0,0,0,.3)] font-normal uppercase">
              <span>02/</span>
              <span>RECENT WORKS?</span>
            </div>

            {/* <Mouse mouseposition={mouseposition} /> */}
            <div className="w-full relative z-[60] gap-x-8 gap-y-24 md:gap-y-32 justify-between">
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
