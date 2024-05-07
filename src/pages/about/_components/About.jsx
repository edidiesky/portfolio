"use client";
import React, { useRef } from "react";
import { opacity, slideup, smallslideup } from "@/constants/utils/framer";
import { motion, useInView } from "framer-motion";
export default function About() {
  const ctaText_1 = useRef(null);
  const ctaText_2 = useRef(null);
  const ctaText_3 = useRef(null);
  const ctaText_4 = useRef(null);
  const inView = useInView(ctaText_1, {
    margin: "0px 100px -50px 0px",
  });
  const inView4 = useInView(ctaText_4, {
    margin: "0px 100px -50px 0px",
  });
  const inView2 = useInView(ctaText_2, {
    margin: "0px 100px -50px 0px",
  });
  const inView3 = useInView(ctaText_3, {
    margin: "0px 100px -50px 0px",
  });
  const ctatext1 =
    "I am passionate about web development and the ideas it postulates. I love working at the mid-section of beautiful user-friendly interfaces. I also can create memorable web experiences.";
  const ctatext5 =
    "I am Edidiong Victor Essien and I am a self-learned software developer, dedicated in creating appealing user-interfaces for industries since 2021";
  const ctaText2 =
    "Not forgetting I am also passionate about mathematics, physics and diodes (electronic engineering). And also, I despise Politics";
  const ctaText6 =
    "WHEN I AM NOT DEVELOPING WEB INTERFACES I AM WORKING AND RESEARCHING  ON MY ENGINERRING THESIS";

  const ctatext3 = `Having background in design, I work closely with design focused teams to build websites and microsites for companies and individuals. I have years of experience working and  collaborating on product teams and leading engineering efforts.`;

  return (
    <div data-scroll className="py-32 z-50 flex items-end justify-end">
      <div className="w-[90%] lg:w-[70%] justify-end items-start mx-auto px-8 m-auto max-w-custom_1 grid grid-cols-1 lg:grid-cols-custom_4 gap-4 ">
        <div className="w-[260px]">
          <div className="text-6xl text-text_dark_1 font-portfolio_bold w-full font-normal uppercase">
            <span>02/</span>
          </div>
        </div>
        <div className="w-[100%] flex flex-col items-end justify-end  gap-16">
          <h4
            ref={ctaText_4}
            className=" w-full text-5xl flex flex-wrap gap-x-[8px] gap-y-[8px]  leading-[1] font-portfolio_bold font-medium text-text_dark_1 "
          >
            {ctatext5.split(" ").map((x, index) => {
              return (
                <div key={index} className="inline-flex hide relative">
                  <motion.div
                    variants={slideup}
                    custom={index}
                    initial="initial"
                    animate={inView4 ? "animate" : "exit"}
                  >
                    {x}
                  </motion.div>
                </div>
              );
            })}
          </h4>
          <h4
            ref={ctaText_1}
            className=" w-full text-5xl flex flex-wrap gap-x-[8px] gap-y-[8px]  leading-[1] font-portfolio_bold font-medium text-text_dark_1 "
          >
            {ctatext1.split(" ").map((x, index) => {
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
            ref={ctaText_2}
            className="w-full text-5xl flex flex-wrap gap-x-[8px] gap-y-[8px]  leading-[1] font-portfolio_bold font-medium text-text_dark_1"
          >
            {ctaText2.split(" ").map((x, index) => {
              return (
                <span key={index} className="inline-flex hide relative">
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
          </h4>
          <div className="w-full lg:w-[100%] grid-cols-1 grid py-5 gap-12 sm:grid-cols-custom_2">
            <div className="w-full flex-col gap-12">
              <div
                // ref={imageRef}
                className="w-[100%] h-full"
              >
                <img
                  src={"./profile_6.JPG"}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div ref={ctaText_3} className="w-full flex flex-col gap-16">
              <h5 className="about_text1 w-full text-4xl leading-[1.6] font-normal text-text_dark_1 font-portfolio_semibold">
                A blend of Software Engineering and Electrical engineering.
              </h5>
              <h4 className=" w-full text-4xl flex flex-wrap gap-x-[8px] gap-y-[8px]  items-start leading-[1] font-normal font-portfolio_semibold text-text_dark_1 ">
                {/* ctatext3 */}
                {ctatext3.split(" ").map((x, index) => {
                  return (
                    <span
                      key={index}
                      className="inline-flex hide relative text-start"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
