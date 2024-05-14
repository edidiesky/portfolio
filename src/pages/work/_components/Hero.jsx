"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { opacity, slideup, smallslideup } from "@/constants/utils/framer";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { scaleAnimations } from "@/constants/utils/framer";
import WorkList from "@/components/common/WorkList";
import { projectdata3 } from "@/constants/data/projectdata";
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
  useEffect(() => {
    let mouseXMovement = gsap.quickTo(mouseRef.current, "left", {
      duration: 0.9,
      ease: "power3",
    });

    let mouseYMovement = gsap.quickTo(mouseRef.current, "top", {
      duration: 0.9,
      ease: "power3",
    });

    let labelXMovement = gsap.quickTo(labelRef.current, "left", {
      duration: 0.68,
      ease: "power3",
    });

    let labelYMovement = gsap.quickTo(labelRef.current, "top", {
      duration: 0.68,
      ease: "power3",
    });

    const handleMouseMotion = (e) => {
      const { pageX, pageY } = e;
      mouseXMovement(pageX);
      mouseYMovement(pageY);

      labelXMovement(pageX);
      labelYMovement(pageY);
    };

    window.addEventListener("mousemove", handleMouseMotion);
    return () => {
      window.removeEventListener("mousemove", handleMouseMotion);
    };
  }, []);

  const container = useRef(null);
  const imageRef = useRef(null);
  const inView = useInView(container, {
    margin: "0px 100px -50px 0px",
  });
  const heroWords =
    "A selected set of experiments I'm building as I navigate through ideas and technologies. I learn by testing out and building based on concepts and techniques.";
  const website = projectdata3[mouseposition?.index]?.mainTitle;
  return (
    <>
      <motion.span
        ref={mouseRef}
        variants={scaleAnimations}
        initial="initial"
        animate={mouseposition?.active ? "enter" : "exit"}
        className="w-32 z-[42] absolute h-32 rounded-full shadow-2xl flex items-center justify-center text-[12px] text-white font-portfolio_bold bg-[#2e2e30]"
      ></motion.span>
      <motion.span
        variants={scaleAnimations}
        initial="initial"
        animate={mouseposition?.active ? "enter" : "exit"}
        ref={labelRef}
        className="w-16 z-[42] h-16 absolute rounded-full flex items-center justify-center text-[10px] text-white font-portfolio_bold1"
      >
        {
          <Link
            className="text-center text-lg w-full"
            // target="_blank"
            href={`/work/${website}`}
          >
            View
          </Link>
        }
      </motion.span>
      <div
        data-scroll
        className="py-40 relative flex items-center justify-center"
      >
        <div
          onMouseEnter={() =>
            setMousePosition({
              active: false,
            })
          }
          className="absolute top-0 w-full h-full z-[36]"
        ></div>
        <div className="w-[90%] mx-auto flex flex-col gap-48  px-2 max-w-custom_1">
          <div className="grid grid-cols-1 md:grid-cols-custom_3 mx-auto justify-between gap-y-8 gap-x-20">
            <div className="w-full flex items-center md:justify-center">
              <h4 className="text-4xl font-portfolio_bold1">01/</h4>
            </div>
            <div className="flex w-[90%] lg:w-[900px] flex-col gap-16 mx-auto">
              <span
                data-scroll
                data-scroll-speed="2"
                // titleRef
                className="font-normal titleRef titleRef2 text-text_dark_1 flex flex-wrap gap-[10px]
                  uppercase text-[90px] md:text-[120px] xl:text-[160px]
                w-full md:w-full leading-[.9] md:leading-[.9] font-portfolio_bold"
              >
                Projects <sup className="text-2xl font-portfolio_bold1">06</sup>
              </span>

              <div className="w-full flex flex-col gap-4">
                <div className="w-full grid grid-cols-1 lg:grid-cols-custom_3 gap-x-24 gap-y-16">
                  <div className="w-full">
                    <h4 className=" w-full text-2xl flex uppercase flex-wrap gap-x-[12px] gap-y-[16px]  leading-[1.5] font-portfolio_bold1 font-medium text-text_dark_1 ">
                      PROJECTS
                    </h4>
                  </div>
                  <div className="w-full flex justify-start">
                    <div className="w-full md:w-[70%] flex justify-start flex-col gap-20">
                      <h4
                        ref={container}
                        className=" w-full text-xl md:text-2xl flex uppercase flex-wrap gap-x-[8px] gap-y-[8px] 
                  font-normal
                    leading-[1.1] font-portfolio_bold1 text-text_dark_1 "
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
          <div className="w-[100%] md:w-[95%] mx-auto">
            <WorkList
              setMousePosition={setMousePosition}
              setTab={setTab}
              tab={tab}
            />
          </div>
        </div>
      </div>
    </>
  );
}
