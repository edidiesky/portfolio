"use client";
import React, { useRef } from "react";
import { opacity, slideup, smallslideup } from "@/constants/utils/framer";
import { motion, useInView } from "framer-motion";
export default function Hero() {
  const container = useRef(null);
  const imageRef = useRef(null);
  const inView = useInView(container);

  const container2 = useRef(null);
  const inView2 = useInView(container2, {
    margin: "0px 100px -50px 0px",
  });
  const heroWords1 =
    "I am a Software Developer really obsessed in building top tech web applications";
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
        className="py-20 relative flex items-center justify-center"
      >
        <div className="w-[90%] mx-auto md:px-8 max-w-custom">
          <div className="flex flex-col mx-auto items-center justify-between gap-y-8 gap-x-20">
            <div className="flex w-full flex-col gap-16 mx-auto">
              <span
                data-scroll
                data-scroll-speed="2"
                className="font-normal hero_text2 text_background flex flex-wrap
                 gap-[8px] lg:gap-[12px] items-center justify-start 
                text-5xl md:text-5xl lg:text-7xl max-w-[1200px]
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
