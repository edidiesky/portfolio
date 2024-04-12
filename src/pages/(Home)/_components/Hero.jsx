"use client";
import React, { useRef, useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import {
  opacity,
  slideup,
  slideup2,
  smallslideup,
} from "@/constants/utils/framer";
import { motion, useInView } from "framer-motion";
export default function Hero() {
  const container = useRef(null);
  const imageRef = useRef(null);
  const inView = useInView(container);

  const container2 = useRef(null);
  const inView2 = useInView(container2, {
    margin: "0px 100px -50px 0px",
  });
  const heroWords =
    "I AM purposeful, proactive, predetermined and a driven catalyst for creative development in industries";
  const heroWords1 =
    "A Software Developer,  specialising in creating beautiful experiences";
  const heroWords2 = `BASED IN NIGERIA`;

  const heroText2 = ["Hello", "I'M", "Edidiong", "Victor"];

  const heroTextslideup1 = {
    initial: {
      opacity: 0,
      y: "100%",
    },
    animate: (i) => ({
      opacity: 1,
      y: "0",
      transition: { duration: 2, delay: i * 0.11, ease: [0.76, 0, 0.24, 1] },
    }),
    exit: {
      opacity: 0,
      // y: "100%",
      y: "100%",
    },
  };
  const heroTextslideup2 = {
    initial: {
      opacity: 0,
      y: "100%",
    },
    animate: (i) => ({
      opacity: 1,
      y: "0",
      transition: { duration: 1, delay: i * 0.25, ease: [0.76, 0, 0.24, 1] },
    }),
    exit: {
      opacity: 0.5,
      y: "100%",
    },
  };

  return (
    <>
      <div
        data-scroll
        className="min-h-[100vh] py-16 relative flex items-center justify-center"
      >
        <div className="w-[90%] mx-auto  px-2 max-w-custom_1">
          <div className="flex flex-col mx-auto justify-between gap-y-12 gap-x-20">
            <div className="flex w-full  lg:w-[90%] flex-col gap-8">
              <span
                data-scroll
                data-scroll-speed="2"
                className="font-normal  flex flex-wrap gap-[8px] text-text_dark_1 text-start uppercase text-sm w-full leading-[1] font-portfolio_bold"
              >
                {/* SPEEDING YOUR BUSINESS EXPERIENCE */}
                {heroText2.map((x, index) => {
                  return (
                    <span
                      key={index}
                      className="flex hide relative items-center justify-start"
                    >
                      <motion.span
                        variants={heroTextslideup2}
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
              <span
                data-scroll
                data-scroll-speed="2"
                className="font-normal titleRef text-text_dark_1 flex flex-wrap gap-x-[20px] gap-y-[8px] md:gap-y-[12px] items-center justify-start uppercase text-4xl sm:text-5xl xl:text-6xl w-full leading-[1.2] font-portfolio_bold"
              >
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
              <div className="w-100 flex items-start">
                <div className="px-6 flex items-center justify-between gap-4 py-4 bg-[#eeeeee] rounded-3xl">
                  <div className="w-4 h-4 bg-[#C5F244] rounded-full"></div>
                  <span className="text-sm text-text_dark_1 text-start uppercase leading-[1] font-portfolio_bold">
                    AVAILABLE FOR WORK
                  </span>
                </div>
              </div>
            </div>
            <div className="w-90 flex flex-col gap-16">
              <div className="w-full">
                <div className="w-[420px] h-[200px] relative flex items-center justify-center">
                  <img
                    src={"./profile_6.JPG"}
                    alt=""
                    className="imageRef w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:flex w-100 items-center justify-between gap-8">
                <h4
                  ref={container}
                  className="text-lg md:text-xl w-full md:w-[80%] uppercase hero_text_2 flex flex-wrap gap-y-[8px] gap-x-[6px] items-center justify-start text-text_dark_1 leading-[1] font-normal font-portfolio_semibold"
                >
                  {heroWords.split(" ").map((x, index) => {
                    return (
                      <span
                        key={index}
                        className="flex hide relative items-center justify-start"
                      >
                        <motion.span
                          variants={smallslideup}
                          custom={index}
                          initial="initial"
                          animate={inView ? "animate" : "exit"}
                        >
                          {x}
                        </motion.span>
                      </span>
                    );
                  })}
                </h4>
                <h1
                  ref={container2}
                  data-scroll
                  data-scroll-speed="2"
                  className="hero_text_3 font-normal text-text_dark_1 flex flex-wrap gap-[8px] uppercase justify-end lg:items-center text-4xl sm:text-5xl w-full leading-[1] font-portfolio_bold1"
                >
                  {heroWords2.split(" ").map((x, index) => {
                    return (
                      <span
                        key={index}
                        className="flex hide relative items-center justify-start"
                      >
                        <motion.span
                          variants={slideup2}
                          custom={index}
                          initial="initial"
                          animate={inView2 ? "animate" : "exit"}
                        >
                          {x}
                        </motion.span>
                      </span>
                    );
                  })}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
