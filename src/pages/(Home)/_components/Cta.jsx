"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// import Image from 'next/ima'
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
  const ctatext1 =
    "A blend of Software Engineering and Electrical engineering.";
  const ctatext5 =
    "I am Edidiong Victor Essien and I am a self-learned software developer, dedicated in creating appealing user-interfaces for industries since 2021";
  const ctaText2 = "Learn more about me and services";
  const ctaText6 =
    "WHEN I AM NOT DEVELOPING WEB INTERFACES I AM WORKING AND RESEARCHING  ON MY ENGINERRING THESIS";

  const ctatext3 = `Having background in design, I work closely with design focused teams to build websites and microsites for companies and individuals. I have years of experience working and  collaborating on product teams and leading engineering efforts.`;

  return (
    <div data-scroll className="py-32 z-50 flex items-end justify-end">
      <div className="w-[90%] md:w-[80%] justify-end items-start mx-auto lg:px-8 m-auto max-w-custom_1 grid grid-cols-1 lg:grid-cols-custom_4 gap-8 md:gap-2 ">
        <div className="w-[200px]">
          <div className="text-6xl text-text_dark_1 font-portfolio_bold1 w-full font-normal uppercase">
            <span>03/</span>
          </div>
        </div>
        <div className="w-[100%] flex flex-col items-end justify-end  gap-16">
          <h4
            ref={ctaText_4}
            className=" w-full uppercase text-2xl md:text-3xl flex flex-wrap gap-x-[8px] gap-y-[8px]  leading-[1.2] font-portfolio_bold1 font-medium text-text_dark_1 "
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
          <div className="w-full lg:w-[100%] grid-cols-1 grid py-5 gap-12 sm:grid-cols-custom_2">
            <div className="w-full flex-col gap-12">
              <div
                // ref={imageRef}
                className="w-[100%] h-full"
              >
                <Image
                  alt="Cotion"
                  width={0}
                  sizes="100vw"
                  height={0}
                  loading="lazy"
                  src={"/profile_6.JPG"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div ref={ctaText_3} className="w-full flex flex-col gap-8">
              <h4 className=" w-full uppercase text-2xl md:text-xl flex flex-wrap gap-x-[8px] gap-y-[8px]  leading-[1.2] font-portfolio_bold1 font-medium text-text_dark_1 ">
                {ctatext1.split(" ").map((x, index) => {
                  return (
                    <div key={index} className="inline-flex hide relative">
                      <motion.div
                        variants={smallslideup}
                        custom={index}
                        initial="initial"
                        animate={inView3 ? "animate" : "exit"}
                      >
                        {x}
                      </motion.div>
                    </div>
                  );
                })}
              </h4>
              <h4 className=" w-full text-xl md:text-xl  flex flex-wrap gap-x-[8px] gap-y-[8px]  items-start leading-[1.2] font-normal font-portfolio_bold1 uppercase text-text_dark_1 ">
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
              <Link
                style={{ textDecoration: "underline" }}
                href={"/about"}
                className="w-full"
              >
                <span className="w-full">
                  <span
                    className="about_text1 w-full text-2xl md:text-2xl  
                flex flex-wrap gap-x-[8px] gap-y-[8px]  leading-[1.2] font-normal text-text_dark_1 font-portfolio_bold1 uppercase"
                  >
                    {ctaText2.split(" ").map((x, index) => {
                      return (
                        <div key={index} className="inline-flex hide relative">
                          <motion.div
                            variants={smallslideup}
                            custom={index}
                            initial="initial"
                            animate={inView3 ? "animate" : "exit"}
                          >
                            {x}
                          </motion.div>
                        </div>
                      );
                    })}
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
