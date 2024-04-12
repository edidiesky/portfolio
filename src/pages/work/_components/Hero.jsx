"use client";
import React, { useRef,useState } from "react";
import { opacity, slideup, smallslideup } from "@/constants/utils/framer";
import { motion, useInView } from "framer-motion";
import WorkList from "@/components/common/WorkList";
export default function Hero() {
    const [mouseposition, setMousePosition] = useState({
      active: false,
      index: 0,
    });
    const ref = useRef([]);
    const mouseRef = useRef(null);
    const headerref = useRef([]);

    const labelRef = useRef(null);
    const [tab, setTab] = useState({
      active: false,
      index: 0,
    });
    ref.current = [];
    headerref.current = [];


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
    "A selected set of experiments I'm building as I navigate through ideas and technologies. I learn by testing out and building based on concepts and techniques.";
  return (
    <>
      <div
        data-scroll
        className="py-40 relative flex items-center justify-center"
      >
        <div className="w-[90%] mx-auto flex flex-col gap-48  px-2 max-w-custom_1">
          <div className="grid grid-cols-1 md:grid-cols-custom_3 mx-auto justify-between gap-y-8 gap-x-20">
            <div className="w-full flex items-center md:justify-center">
              <h4 className="text-4xl">01/</h4>
            </div>
            <div className="flex w-[90%] md:w-[900px] flex-col gap-16 mx-auto">
              <span
                data-scroll
                data-scroll-speed="2"
                // titleRef
                className="font-normal flex  text-text_dark_1 text-start lg:text-start uppercase text-4xl sm:text-5xl md:text-6xl xl:text-8xl w-full leading-[1.4] font-portfolio_bold"
              >
                Projects <sup className="text-4xl">06</sup>
              </span>

              <div className="w-100 flex flex-col gap-4">
                <div className="w-100 grid grid-cols-custom_3 gap-x-24 gap-y-16">
                  <div className="w-full">
                    <h4 className=" w-full text-2xl flex uppercase flex-wrap gap-x-[12px] gap-y-[16px]  leading-[1.5] font-portfolio_semibold font-medium text-text_dark_1 ">
                      PROJECTS
                    </h4>
                  </div>
                  <div className="w-100 flex justify-start">
                    <div className="w-[70%] flex justify-start flex-col gap-20">
                      <h4
                        ref={container}
                        className=" w-full text-xl flex uppercase flex-wrap gap-x-[8px] gap-y-[12px] 
                  font-normal
                    leading-[1.2] font-portfolio_semibold text-text_dark_1 "
                      >
                        {heroWords.split(" ").map((x, index) => {
                          return (
                            <span
                              key={index}
                              className="inline-flex hide relative"
                            >
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <WorkList
            setMousePosition={setMousePosition}
            setTab={setTab}
            tab={tab}
          />
        </div>
      </div>
    </>
  );
}
