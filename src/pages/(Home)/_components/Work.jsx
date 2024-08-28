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
  return (
    <>
      <div className="py-20 pb-72 mb-40 w-full relative">
        <div className="w-[100%] md:w-[90%] flex flex-col gap-12 mx-auto">
          <WorkList />
        </div>
      </div>
      {/* <div className="w-full">
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
      </div> */}
    </>
  );
};

export default Work;

// <div className="flex w-full flex-col gap-4">
//   <span
//     data-scroll
//     data-scroll-speed="2"
//     // titleRef
//     className="font-normal titleRef titleRef2 text-text_dark_1 flex flex-wrap gap-[10px]
//         uppercase text-5xl xl:text-7xl"
//   >
//     {/* Projects */}
//     <AnimateTextWord>Projects</AnimateTextWord>
//   </span>
//   <h4 className="max-w-[600px] w-full text-lg md:text-xl font-normal uppercase leading-[1.1] ">
//     <AnimateTextWord>{heroWords}</AnimateTextWord>
//   </h4>
// </div>;
