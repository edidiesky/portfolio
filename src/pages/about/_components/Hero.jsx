"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import AnimateTextWord from "@/components/animations/AnimateTextWord";
export default function Hero() {
  const heroWords1 =
    "I am a Software Developer geninuely passionate about building top tech web applications";
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

  const heroWords3 =
    " I am geninuely passionate about helping startups elevate their businesses by providing valuable creative insights and delivering high-quality, high-performance solutions through my technological skills.";
  // "I'm genuinely passionate about creating intutive interfaces and interraction that communicate with the end-users naturally."
  return (
    <>
      <div
        data-scroll
        className="min-h-[700px] py-28 md:py-28 relative flex items-center justify-center"
      >
        <div className="w-[90%] mx-auto max-w-custom">
          <div className="flex flex-col mx-auto items-center justify-between gap-y-8 gap-x-20">
            <div className="flex w-full flex-col gap-16 mx-auto">
              <span
                data-scroll
                data-scroll-speed="2"
                className="font-normal hero_text2  flex flex-wrap
                 gap-[8px] lg:gap-[12px] items-center justify-start 
                text-5xl md:text-5xl lg:text-7xl max-w-[1100px]
                w-full leading-[1.2] font-portfolio_bold"
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
              <h4 className="text-xl md:text-3xl max-w-[800px] text_background font-portfolio_regular leading-[1.2] titleRef">
                <AnimateTextWord>{heroWords3}</AnimateTextWord>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
