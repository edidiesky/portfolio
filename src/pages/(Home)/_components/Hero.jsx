"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { slideup2, smallslideup } from "@/constants/utils/framer";
import { motion, useInView } from "framer-motion";
export default function Hero() {
  const container = useRef(null);
  const imageRef = useRef(null);
  const inView = useInView(container);

  const container2 = useRef(null);
  const inView2 = useInView(container2, {
    margin: "0px 100px -50px 0px",
  });

  const container3 = useRef(null);
  const inView3 = useInView(container3, {
    margin: "0px 100px -50px 0px",
  });
  const heroWords =
    "I AM purposeful, proactive, predetermined and a driven catalyst for creative development in industries";

  const heroWords1 = "Innovative Developer";
  // Innovative Software Developer crafting captivating digital experiences.
  const heroWords2 = `Victor Essien`;
  const heroWords3 = `I engage in end-to-end development of websites that aligns with your business goals, pull customers (consumers) and place you ahead of your competitiors `;

  const heroText2 = ["Hello", "I'M", "Edidiong", "Victor"];

  const heroTextslideup1 = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: (i) => ({
      opacity: 1,
      y: "0",
      transition: { duration: 2, delay: i * 0.11, ease: [0.76, 0, 0.24, 1] },
    }),
    exit: {
      opacity: 0,
      // y: 200,
      y: 200,
    },
  };
  const heroTextslideup2 = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: (i) => ({
      opacity: 1,
      y: "0",
      transition: { duration: 1, delay: i * 0.25, ease: [0.76, 0, 0.24, 1] },
    }),
    exit: {
      opacity: 0.5,
      y: 200,
    },
  };

  return (
    <>
      <div
        data-scroll
        className="min-h-[100vh] py-40 relative flex items-center justify-center"
      >
        <div className="w-[90%] md:w-[80%] mx-auto max-w-custom_1">
          <div className="flex w-full flex-col mx-auto justify-between gap-y-12 gap-x-20">
            <div className="grid gap-6 items-start lg:items-center grid-cols-1 lg:grid-cols-custom w-full">
              <span
                data-scroll
                data-scroll-speed="2"
                className="font-normal titleRef text-text_dark_1 flex flex-wrap
                 gap-[8px] lg:gap-[8px] items-center justify-start uppercase 
                text-[120px] md:text-[190px] xl:text-[200px]
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

              <div className="w-full lg:w-[400px] flex flex-col gap-8">
                <h4
                  ref={container3}
                  className="hero_text2 text-xl md:text-xl w-full
                flex flex-wrap gap-[8px] items-center justify-start 
                text-text_dark_1 leading-[1.1] md:leading-[1.1] font-normal font-portfolio_bold1"
                >
                  {heroWords3.split(" ").map((x, index) => {
                    return (
                      <span
                        key={index}
                        className="flex hide relative items-center justify-start"
                      >
                        <motion.span
                          variants={smallslideup}
                          custom={index}
                          initial="initial"
                          animate={inView3 ? "animate" : "exit"}
                        >
                          {x}
                        </motion.span>
                      </span>
                    );
                  })}
                </h4>
                <Link
                  href={
                    "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
                  }
                  className="p-6 px-8 bg-[#f9d955] max-w-[96%] md:max-w-[450px] font-portfolio_bold1 flex items-center justify-center gap-3 text-dark text-lg"
                >
                  <IoChatboxEllipsesOutline />
                  Request services! I am open to work.
                </Link>
              </div>
            </div>
            <div className="w-90 flex flex-col gap-16">
              <div className="w-full">
                <div className="w-full md:w-[460px] h-[300px] md:h-[250px] relative flex items-center justify-center">
                  <img
                    src={"/profile_6.JPG"}
                    alt=""
                    className="imageRef w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-custom w-full items-center justify-between gap-8 md:gap-2">
                <h4
                  ref={container}
                  className="text-lg md:text-xl w-full md:w-[350px]
                  flex flex-wrap gap-[6px] items-center justify-start 
                  text-text_dark_1 leading-[1] font-normal font-portfolio_bold1"
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
                  className="font-normal titleRef text-text_dark_1 flex flex-wrap gap-[8px] lg:gap-[12px] items-center justify-start uppercase 
               text-[100px] md:text-[190px] xl:text-[200px]
                w-full leading-[.8] md:leading-[.9] font-portfolio_bold"
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
