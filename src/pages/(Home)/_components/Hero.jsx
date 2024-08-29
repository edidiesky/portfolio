"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import AnimateTextWord from "@/components/animations/AnimateTextWord";
import Magnetic from "@/components/animations/Magnetic";
export default function Hero() {
  const container = useRef(null);

  const heroWords1 =
    "I’m Victor, a Software Developer specializing in crafting engaging and memorable user experiences.";
  const heroWords3 = `I help tech companies in leveraging their products by creating user-friendly and visually appealing cross-platform applications that fit with their business goals.`;
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
        className="min-h-[80vh] py-40 relative flex items-center justify-center"
      >
        <div className="w-[90%] md:px-8 mx-auto max-w-custom">
          <div className="flex w-full flex-col gap-8">
            <span
              data-scroll
              data-scroll-speed="2"
              className="font-normal hero_text2 text_background flex flex-wrap
                 gap-[8px] lg:gap-[12px] items-center justify-start 
                text-5xl md:text-6xl lg:text-8xl
                w-full leading-[1.1] font-portfolio_bold"
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
            <h4 className="text-2xl md:text-3xl max-w-[900px] leading-[1.2] titleRef text-[var(--dark-grey)] font-normal font-portfolio_bold1">
              <AnimateTextWord>{heroWords3}</AnimateTextWord>
            </h4>
            <Link
              style={{ transition: "all .4s" }}
              href={
                "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
              }
              className="w-[270px] open_to_work h-[80px] flex items-center
                   justify-center text-[#000] hover:text-[#Fff] text-xl font-bold rounded-full font-portfolio_regular overflow-hidden
                    bg-[#fff]"
            >
              <Magnetic bgColor={"var(--primary)"}>Open to Work!</Magnetic>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
