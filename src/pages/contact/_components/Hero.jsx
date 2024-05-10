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
  const labelRef = useRef(null);
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
        className="min-h-[100vh]  py-32 overflow-hidden relative flex items-center justify-center"
      >
        <div className="w-[90%] lg:w-[85%] h-full mx-auto  lg:px-2 max-w-custom_1">
          <div className="w-full items-start grid-cols-1 grid lg:grid-cols-custom gap-x-24 gap-y-24">
            <div className="w-full flex flex-col gap-16">
              <div className="w-full flex items-center gap-3">
                <h2
                  ref={labelRef}
                  className="text-[100px] w-full lg:w-[400px] xl:w-[550px] leading-[1] lg:text-[140px] text-white"
                >
                  LET US BUILD THAT PR0JECT TOGETHER
                </h2>
              </div>
              <div className="grid w-full grid-cols-1 lg:grid-cols-1 gap-x-8 gap-y-8">
                <div className="border-t-2 p-8 text-white w-full border-[rgba(255,255,255,.3)] flex gap-16 text-2xl font-portfolio_bold1">
                  <span className="text-[rgba(255,255,255,.4)]">01</span>
                  <label htmlFor="name" className="flex flex-col gap-4">
                    What is your name?
                    <input
                      type="text"
                      placeholder="John Does"
                      className="input text-3xl text-white font-portfolio_bold1 h-[70px] rounded-xl"
                    />
                  </label>
                </div>
                <div className="border-t-2 p-8 text-white w-full border-[rgba(255,255,255,.3)] flex gap-16 text-2xl font-portfolio_bold1">
                  <span className="text-[rgba(255,255,255,.4)]">02</span>
                  <label htmlFor="email" className="flex flex-col gap-4">
                    What is your email?
                    <input
                      type="email"
                      placeholder="xyx23@gmail.com"
                      className="input text-3xl text-white font-portfolio_bold1 h-[70px] rounded-xl"
                    />
                  </label>
                </div>
                <div className="border-t-2 p-8 text-white w-full border-[rgba(255,255,255,.3)] flex gap-16 text-2xl font-portfolio_bold1">
                  <span className="text-[rgba(255,255,255,.4)]">03</span>
                  <label htmlFor="email" className="flex flex-col gap-4">
                    What is the name of your organization?
                    <input
                      type="email"
                      placeholder="Felicia & Sons"
                      className="input text-3xl text-white font-portfolio_bold1 h-[70px] rounded-xl"
                    />
                  </label>
                </div>
                <div className="border-t-2 p-8 text-white w-full border-[rgba(255,255,255,.3)] flex gap-16 text-2xl font-portfolio_bold1">
                  <span className="text-[rgba(255,255,255,.4)]">03</span>
                  <label htmlFor="email" className="flex flex-col gap-4">
                    Your Message
                    <textarea
                      type="email"
                      placeholder="Hello Edidiong can you help me with...."
                      className="input text-2xl text-white font-portfolio_bold1 h-[70px] rounded-xl"
                    />
                  </label>
                </div>
              </div>
              <div className="grid w-full grid-cols-1 lg:grid-cols-1 gap-x-8 gap-y-8">
                <button
                  style={{ transition: "all .6s" }}
                  className="w-full hover:opacity-[.8] h-[100px] lg:h-[140px] font-portfolio_bold1 text-2xl lg:text-3xl rounded-[80px] lg:rounded-full text-dark flex items-center justify-center bg-[#C5F244]"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="w-[400px] flex flex-col gap-12">
              <div className="w-full flex text-white flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h4 className="text-xl text-[rgba(255,255,255,.4)] font-portfolio_bold1">
                    Contact Details
                  </h4>
                  <div className="w-full text-xl font-portfolio_bold1 font-medium flex flex-col gap-2">
                    <h5 className="">essienedidiong1000@gmail.com</h5>
                    <h5 className="">+234 812 710 7270</h5>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="text-xl text-[rgba(255,255,255,.4)] font-portfolio_bold1">
                    SOCIALS
                  </h4>
                  <div className="w-full text-xl font-portfolio_bold1 font-medium flex lg:items-start items-center flex-row lg:flex-col gap-4">
                    <Link
                      href={"https://twitter.com/edidiesky"}
                      target="_blank"
                      className="text-xl flex items-center gap-2"
                    >
                      Twitter
                    </Link>
                    <Link
                      href={"https://github.com/edidiesky"}
                      target="_blank"
                      className="text-xl flex items-center gap-2"
                    >
                      Github
                    </Link>

                    <Link
                      href={
                        "https://www.linkedin.com/in/edidiong-essien-a4b59b1a5/"
                      }
                      target="_blank"
                      className="text-xl flex items-center gap-2"
                    >
                      LinkedIn
                    </Link>
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
