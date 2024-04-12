"use client";
import React, { useRef } from "react";
import { opacity, slideup, smallslideup } from "@/constants/utils/framer";
import { motion, useInView } from "framer-motion";
export default function Cta() {
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
  const ctatext4 =
    "I AM EDIDIONG VICTOR ESSIEN AND I AM A SELF-LEARNED SOFTWARE DEVELOPER, DEDICATED IN CREATING APPEALING USER-INTERFACES SINCE 2021";
  const ctatext1 =
    "I AM PASSIONATE ABOUT WEB TECHNOLOGIES AND ELECTRICAL ENGINEERING. I LOVE WORKING AT THE INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES . I CREATE MEMORABLE WEB EXPERIENCES.";

  const ctaText2 =
    "WHEN I AM NOT DEVELOPING WEB INTERFACES I AM WORKING AND RESEARCHING  ON MY ENGINERRING THESIS";

  const ctatext3 = `Having background in design, I work closely with design focused teams to build websites and microsites for companies and   individuals. I have years of experience working and  collaborating on product teams and leading engineering efforts.`;

  return (
    <div data-scroll className="py-20 z-50">
      <div className="w-[95%] mx-auto px-8 m-auto max-w-custom_1 grid grid-cols-1 sm:grid-cols-custom_2 gap-4 ">
        <div className="w-full">
          <h3 className="text-xl font-portfolio_bold1 font-medium text-text_dark_1">
            01 /
          </h3>
        </div>
        <div className="w-full flex flex-col gap-24">
          <h4
            ref={ctaText_4}
            className=" w-full text-xl lg:text-2xl flex flex-wrap gap-x-[8px] gap-y-[8px]  leading-[1] font-portfolio_bold1 font-medium text-text_dark_1 "
          >
            {ctatext4.split(" ").map((x, index) => {
              return (
                <span key={index} className="inline-flex hide relative">
                  <motion.span
                    variants={slideup}
                    custom={index}
                    initial="initial"
                    animate={inView4 ? "animate" : "exit"}
                  >
                    {x}
                  </motion.span>
                </span>
              );
            })}
          </h4>
          <h4
            ref={ctaText_1}
            className=" w-full text-xl lg:text-2xl flex flex-wrap gap-x-[8px] gap-y-[8px]  leading-[1] font-portfolio_bold1 font-medium text-text_dark_1 "
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
            className="about_text1 w-full text-xl lg:text-2xl flex flex-wrap gap-x-[8px] gap-y-[8px]  leading-[1] font-portfolio_bold1 font-medium text-text_dark_1 "
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
              <h5 className="about_text1 w-full text-2xl leading-[1.6] font-normal text-text_dark_1 font-portfolio_semibold">
                A blend of Product Engineering and Electrical engineering.
              </h5>
              <h4 className=" w-full text-2xl flex flex-wrap gap-x-[8px] gap-y-[8px]  items-start leading-[1] font-normal font-portfolio_semibold text-text_dark_1 ">
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
