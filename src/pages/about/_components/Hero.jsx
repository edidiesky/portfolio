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
    const heroWords1 ="Passionate Creative Developer" 
    // Innovative Software Developer crafting captivating digital experiences.
    const heroWords2 = `BASED IN NIGERIA`; 
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
            delay: i * 0.11,
            ease: [0.76, 0, 0.24, 1],
          },
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
          transition: {
            duration: 1,
            delay: i * 0.25,
            ease: [0.76, 0, 0.24, 1],
          },
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
          className="min-h-[100vh] py-28 relative flex items-center justify-center"
        >
          <div className="w-[90%] md:w-full  mx-auto  px-2 max-w-custom_1">
            <div className="flex flex-col mx-auto items-center justify-between gap-y-8 gap-x-20">
              <div className="flex w-full md:w-[90%] flex-col gap-16 mx-auto">
                <span
                  data-scroll
                  data-scroll-speed="2"
                  className="font-normal titleRef titleRef2 text-text_dark_1 flex flex-wrap gap-[10px] items-center justify-center
                  uppercase text-[68px] sm:text-[95px] md:text-[120px] xl:text-[160px]
                w-full md:w-full leading-[.9] md:leading-[.9] font-portfolio_bold"
                >
                  {/* A Software Developer who crafts captivating digital experiences. */}
                  {heroWords1.split(" ").map((x, index) => {
                    return (
                      <span
                        key={index}
                        className="flex hide relative items-center justify-center"
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
              <div className="w-[90%] mx-auto flex flex-col gap-8 ">
                <div className="w-[60%] mx-auto relative  flex items-center justify-center">
                  <img
                    src={"./profile_6.JPG"}
                    alt=""
                    className="imageRef w-full h-full object-cover"
                  />
                </div>
                <span
                  data-scroll
                  data-scroll-speed="2"
                  className="font-normal titleRef text-text_dark_1 flex flex-wrap lg:gap-[12px] items-center justify-center uppercase text-[58px] 
                sm:text-[80px] md:text-[95px] lg:text-[100px] xl:text-[130px]
                w-full lg:w-[1000px] leading-[.9] md:leading-[1] font-portfolio_bold"
                >
                  {/* A Software Developer who crafts captivating digital experiences. */}
                  {heroWords2.split(" ").map((x, index) => {
                    return (
                      <span
                        key={index}
                        className="flex hide relative items-center justify-center"
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
