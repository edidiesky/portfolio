"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { opacity, slideup, smallslideup } from "@/constants/utils/framer";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { scaleAnimations } from "@/constants/utils/framer";
import WorkList from "@/components/common/WorkList";
import { projectdata3 } from "@/constants/data/projectdata";
import AnimateTextWord from "@/components/animations/AnimateTextWord";
export default function Hero() {
  const heroWords1 =
    "I help startups and series A—D teams to establish a strong connection between their product and customers";
  const heroTextslideup1 = {
    initial: {
      opacity: 0,
      y: "100%",
    },
    animate: (i) => ({
      opacity: 1,
      y: "0",
      transition: {
        duration: 2,
        delay: i * 0.06,
        ease: [0.62, 0.05, 0.01, 0.99],
      },
    }),
    exit: {
      opacity: 0,
      // y: '100%',
      y: "100%",
    },
  };
  return (
    <>
      <div
        data-scroll
        className="py-32 relative flex items-center justify-center"
      >
        <div
          className="w-[90%] md:w-[85%] mx-auto flex flex-col gap-48
         px-2 max-w-custom"
        >
          <span
            data-scroll
            data-scroll-speed="2"
            className="font-normal hero_text2 text_background flex flex-wrap
                 gap-[8px] lg:gap-[12px] items-center justify-start 
                text-5xl md:text-6xl lg:text-7xl
                w-full leading-[.8] font-portfolio_bold"
          >
            {/* A Software Developer who crafts captivating digital experiences. */}
            {heroWords1.split(" ").map((x, index) => {
              return (
                <span
                  key={index}
                  className="flex hide relative items-center justify-start"
                >
                  <motion.span
                    variants={heroTextslideup1}
                    custom={index}
                    initial="initial"
                    animate={"animate"}
                  >
                    {x}
                  </motion.span>
                </span>
              );
            })}
          </span>
          <div className="w-[100%] md:w-[95%] mx-auto">
            <WorkList
            // setMousePosition={setMousePosition}
            // setTab={setTab}
            // tab={tab}
            />
          </div>
        </div>
      </div>
    </>
  );
}
