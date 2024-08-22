"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import AnimateTextWord from "@/components/animations/AnimateTextWord";
import Magnetic from "@/components/animations/Magnetic";
export default function Hero() {
  const container = useRef(null);

  const heroWords1 = "Software Developer Technical Writer";
  const heroWords2 = `Victor Essien`;
  const heroWords3 = `I help tech companies drive awareness and adoption of their products by creating user-friendly and visually appealing cross-platform applications that fit with their business goals, pull customers, and Place them ahead of their competitors `;
  const heroTextslideup1 = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: (i) => ({
      opacity: 1,
      y: "0",
      transition: {
        duration: 2,
        delay: i * 0.11,
        ease: [0.62, 0.05, 0.01, 0.99],
      },
    }),
    exit: {
      opacity: 0,
      // y: 200,
      y: 200,
    },
  };

  return (
    <>
      <div
        data-scroll
        className="min-h-[80vh] py-28 relative flex items-center justify-center"
      >
        <div className="w-[90%] md:px-8 mx-auto max-w-custom">
          <div className="flex w-full flex-col">
            <div className="grid gap-8 items-start grid-cols-1 w-full">
              <div className="w-full relative flex flex-col lg:flex-row md:items-center gap-8">
                <span
                  data-scroll
                  data-scroll-speed="2"
                  className="font-normal max-w-[1000px] hero_text2 text-text_dark_1 flex flex-wrap
                 gap-[8px] lg:gap-[8px] items-center justify-start uppercase 
                text-7xl md:text-9xl lg:text-[140px]
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
                <Link
                  href={
                    "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
                  }
                  className="w-[180px] open_to_work md:selection:-ml-20 h-[180px] hero_images flex items-center justify-center text-white text-lg rounded-full overflow-hidden bg-[var(--primary)]"
                >
                  <Magnetic bgColor={"#2638a9"}>Open to Work!</Magnetic>
                </Link>
              </div>

              <div className="w-full grid md:grid-cols-custom md:items-center gap-4 md:gap-12">
                <div className="w-full grid lg:grid-cols-custom gap-4">
                  <div className="w-full flex flex-col gap-8">
                    <h4 className="text-lg md:text-xl titleRef uppercase font-normal font-portfolio_bold1">
                      <AnimateTextWord>{heroWords3}</AnimateTextWord>
                    </h4>
                  </div>
                  <div className="w-[250px]"></div>
                </div>
                <div className="w-[250px] lg:w-[300px]">
                  <div className="w-[100%] imageRef md:w-[100%] overflow-hidden h-[300px] md:h-[350px] relative flex items-center justify-center">
                    <img
                      src={"/profile_6.JPG"}
                      alt=""
                      className="imageRef w-full h-full hero_images object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
