"use client";
import React, { useRef } from "react";
import { opacity, slideup } from "@/constants/utils/framer";
import { motion, useInView } from "framer-motion";
export default function Hero() {
  const container = useRef(null);
  const inView = useInView(container);

  const container2 = useRef(null);
  const inView2 = useInView(container2, {
    margin: "0px 100px -50px 0px",
  });
  // const textElement_2 = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: textElement_2,
  //   offset: ["start 0.5", "start 0.25"],
  // });
  const heroWords =
    " I AM purposeful, proactive, predetermined and a driven CATALYST FOR CREATIVE DEVELOPMENT FOR AGENCIES AND INDUSTRIES";

  const heroWords2 = `BASED IN NIGERIA`;
  return (
    <>
      <div
        data-scroll
        className="min-h-[100vh] z-50 py-12 relative flex items-center justify-center"
      >
        <div className="w-[90%] mx-auto px-2 max-w-custom_1">
          <div className="flex flex-col mx-auto justify-between gap-y-8 gap-x-20">
            <div className="flex w-full md:w-[70%] flex-col gap-4 mx-auto">
              <span
                data-scroll
                data-scroll-speed="2"
                className="font-normal z-50  text-text_dark_1 text-center uppercase text-[14px] w-full leading-[1] font-portfolio_bold"
              >
                {/* SPEEDING YOUR BUSINESS EXPERIENCE */}
                {"</>"} SOFTWARE DEVELOPER {"</>"}
              </span>
              <span
                data-scroll
                data-scroll-speed="2"
                className="font-normal titleRef z-50 text-text_dark_1 text-center uppercase sm:text-5xl md:text-5xl w-full leading-[1.2] font-portfolio_bold"
              >
                CREATING PLEASANT EXPERIENCE FOR YOUR BUSINESS
              </span>
            </div>
            <div className="md:w-[50%] w-90 mx-auto flex flex-col gap-8 ">
              <div className="w-full">
                <div className="w-[300px] mx-auto relative z-50 flex items-center justify-center">
                  <img
                    // ref={imageRef}
                    src={"./profile_6.JPG"}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h4
                ref={container}
                className="text-lg hero_text_2 flex flex-wrap gap-[8px] text-center text-text_dark_1 w-[90%] leading-[1] font-normal uppercase font-portfolio_bold"
              >
                {heroWords.split(" ").map((x, index) => {
                  return (
                    <span key={index} className="inline-flex hide relative ">
                      <motion.span
                        variants={slideup}
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
                className="hero_text_3 font-normal text-text_dark_1 flex flex-wrap gap-[8px] uppercase text-center lg:text-center text-4xl sm:text-5xl w-full leading-[1] font-portfolio_bold1"
              >
                {heroWords2.split(" ").map((x, index) => {
                  return (
                    <span key={index} className="inline-flex hide relative ">
                      <motion.span
                        variants={slideup}
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
    </>
  );
}
