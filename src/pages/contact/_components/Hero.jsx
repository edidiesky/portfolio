"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import SplitType from "split-type";
import gsap from "gsap";
import {
  opacity,
  slideup,
  slideup2,
  smallslideup,
} from "@/constants/utils/framer";
import { motion, useInView } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
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
  const heroWords1 = "READY TO CREATE MAGIC?";
  const heroWords2 = `BASED IN NIGERIA`;

  const heroText2 = ["</>", "SOFTWARE", "DEVELOPER", "</>"];

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
        className="min-h-[100vh] py-8 relative flex items-center justify-center"
      >
        <div className="w-[90%] h-full mx-auto  px-2 max-w-custom_1">
          <div className="w-100 items-start grid md:grid-cols-custom_4 gap-x-8 gap-y-24">
            <div className="w-100 flex flex-col gap-12">
              <span
                data-scroll
                data-scroll-speed="2"
                className="font-normal titleRef text-text_dark_1 flex flex-wrap gap-x-[20px] gap-y-[8px] md:gap-y-lgitems-center justify-start uppercase text-5xl xl:text-6xl w-full leading-[1.2] font-portfolio_bold"
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
              <div className="w-100 flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h4 className="text-xl uppercase font-portfolio_bold">
                    Contact Details
                  </h4>
                  <div className="w-100 text-[12px] font-portfolio_bold font-medium flex flex-col gap-2">
                    <h5 className="">essienedidiong1000@gmail.com</h5>
                    <h5 className="">08127107270</h5>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="text-xl uppercase font-portfolio_bold">
                    SOCIALS
                  </h4>
                  <div className="w-100 text-[12px] font-portfolio_bold font-medium flex flex-col gap-4">
                    <Link
                      href={"https://twitter.com/edidiesky"}
                      target="_blank"
                      className="text-[12px] flex items-center gap-2"
                    >
                      Twitter <GoArrowUpRight fontSize={"14px"} />
                    </Link>
                    <Link
                      href={"https://github.com/edidiesky"}
                      target="_blank"
                      className="text-[12px] flex items-center gap-2"
                    >
                      Github <GoArrowUpRight fontSize={"14px"} />
                    </Link>

                    <Link
                      href={
                        "https://www.linkedin.com/in/edidiong-essien-a4b59b1a5/"
                      }
                      target="_blank"
                      className="text-[12px] flex items-center gap-2"
                    >
                      LinkedIn <GoArrowUpRight fontSize={"14px"} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 flex flex-col gap-8">
              <div className="grid w-100 grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input text-xs bg-[#fafafa] border border-[rgba(0,0,0,.9)] font-portfolio_bold p-4 h-[70px] rounded-xl"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="input text-xs bg-[#fafafa] border border-[rgba(0,0,0,.9)] font-portfolio_bold p-4 h-[70px] rounded-xl"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="input text-xs bg-[#fafafa] border border-[rgba(0,0,0,.9)] font-portfolio_bold p-4 h-[70px] rounded-xl"
                />

                <input
                  type="text"
                  placeholder="Phone (optional)"
                  className="input text-xs bg-[#fafafa] border border-[rgba(0,0,0,.9)] font-portfolio_bold p-4 h-[70px] rounded-xl"
                />

                <input
                  type="text"
                  placeholder="Company "
                  className="input text-xs bg-[#fafafa] border border-[rgba(0,0,0,.9)] font-portfolio_bold p-4 h-[70px] rounded-xl"
                />

                <input
                  type="text"
                  placeholder="Deadline (in weeks) "
                  className="input text-xs bg-[#fafafa] border border-[rgba(0,0,0,.9)] font-portfolio_bold p-4 h-[70px] rounded-xl"
                />
              </div>
              <div className="grid w-100 grid-cols-1 md:grid-cols-custom_5 gap-x-8 gap-y-8">
                <textarea
                  placeholder="Your Message Here"
                  className="text-xs bg-[#fafafa] border border-[rgba(0,0,0,.9)] font-portfolio_bold p-4 h-[150px] rounded-xl"
                />

                <div className="w-100 h-[70px] md:h-[160px] font-portfolio_bold text-xs rounded-[40px] md:rounded-full text-dark flex items-center justify-center bg-[#C5F244]">
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
