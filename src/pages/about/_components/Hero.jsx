"use client";
import React, { useRef } from "react";
import { opacity, slideup, smallslideup } from "@/constants/utils/framer";
import { motion, useInView } from "framer-motion";
export default function Hero() {
  const container = useRef(null);
  const imageRef = useRef(null);
  const inView = useInView(container, {
    margin: "0px 100px -50px 0px",
  });

  const container2 = useRef(null);
  const inView2 = useInView(container2, {
    margin: "0px 100px -50px 0px",
  });
  const heroWords =
    "I'm a creative developer with years of experience in building products and appealing web experiences. I've collaborated with individuals and teams to build experiences for SMEs and large enterprises including Wise, Google, Interswitch and Intelia.";
  const heroWords1 =
    "Each project is an opportuinity to learn new concepts across multiple domains including arts, maths and physics.";
  return (
    <>
      <div
        data-scroll
        className="min-h-[100vh] py-16 relative flex items-center justify-center"
      >
        <div className="w-[90%] md:w-[900px]  mx-auto  px-2 max-w-custom_1">
          <div className="flex flex-col mx-auto justify-between gap-y-8 gap-x-20">
            <div className="flex w-full md:w-[90%] flex-col gap-16 mx-auto">
              <span
                data-scroll
                data-scroll-speed="2"
                // titleRef
                className="font-normal   text-text_dark_1 text-start lg:text-center uppercase text-4xl sm:text-5xl md:text-6xl xl:text-[90px] w-full leading-[1.4] font-portfolio_bold1"
              >
                Passionate <br /> Creative <br /> Developer
              </span>
            </div>
            <div className="w-[90%] mx-auto flex flex-col gap-8 ">
              <div className="w-90">
                <div className="w-[60%] mx-auto relative  flex items-center justify-center">
                  <img
                    src={
                      "https://www.richardekwonye.com/images/about-cover.jpg"
                    }
                    alt=""
                    className="imageRef w-full h-full object-cover"
                  />
                </div>
              </div>
              <h1
                data-scroll
                data-scroll-speed="2"
                className=" font-normal flex items-center justify-center flex-col mx-auto text-text_dark_1 uppercase text-start text-4xl sm:text-5xl md:text-6xl xl:text-8xl leading-[1] font-portfolio_bold1"
              >
                BASED IN
                <br />
                NIGERIA
              </h1>
            </div>
          </div>
          <div className="w-100 mt-32 flex flex-col gap-4">
            <div className="w-100 grid grid-cols-custom_3 gap-x-24 gap-y-16">
              <div className="w-full">
                <h4
                  className=" w-full text-base flex uppercase flex-wrap gap-x-[12px] gap-y-[16px] 
                leading-[1.5] font-portfolio_bold1 font-medium text-text_dark_1 "
                >
                  A journey of curiosity and explorations
                </h4>
              </div>
              <div className="w-100 flex justify-end">
                <div className="w-[70%] flex justify-end flex-col gap-20">
                  <h4
                    ref={container}
                    className=" w-full text-lg flex uppercase flex-wrap gap-x-[10px] gap-y-[20px] 
                    leading-[1.2] font-portfolio_bold1 font-medium text-text_dark_1 "
                  >
                    {heroWords.split(" ").map((x, index) => {
                      return (
                        <span key={index} className="inline-flex hide relative">
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

                  <h4
                    ref={container2}
                    className=" w-full text-lg flex uppercase flex-wrap gap-x-[10px] gap-y-[20px] 
                    leading-[1.2] font-portfolio_bold1 font-medium text-text_dark_1 "
                  >
                    {heroWords1.split(" ").map((x, index) => {
                      return (
                        <span
                          key={index}
                          className="inline-flex hide relative text-start"
                        >
                          <motion.span
                            variants={smallslideup}
                            custom={index}
                            initial="initial"
                            animate={inView2 ? "animate" : "exit"}
                          >
                            {x}
                          </motion.span>
                        </span>
                      );
                    })}
                  </h4>

                  <div className="w-full relative  flex items-center justify-center">
                    <img
                      src={
                        "https://www.richardekwonye.com/images/about-cover.jpg"
                      }
                      alt=""
                      className="imageRef w-full h-full object-cover"
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
