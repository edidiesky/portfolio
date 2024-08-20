import React, { useRef, useState } from "react";
import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";
import {  useInView } from "framer-motion";
import AnimateTextWord from "../animations/AnimateTextWord";
import Magnetic from "../animations/Magnetic";
import { socialsList } from "@/constants/data/text";
const Footer = () => {

  const container2 = useRef(null);
  const inView2 = useInView(container2, {
    margin: "0px 100px -50px 0px",
  });
  const heroWords2 = `LET US BUILD That `;
  const heroWords = `project together`;
  return (
    <>
      <div className="relative min-h-[40vh] flex flex-col justify-between py-8">
        <div className="w-[95%] md:w-[90%] max-w-custom mx-auto flex flex-col items-center gap-16">
          <div className="flex flex-col md:flex-row w-full border-b border-[rgba(0,0,0,.1)] relative md:items-center gap-8">
            <h2
              ref={container2}
              className="text-5xl md:text-6xl uppercase lg:text-7xl xl:text-9xl font-portfolio_bold text-dark"
            >
              <AnimateTextWord type={'largeText'} children={heroWords2} />
              <AnimateTextWord type={'largeText'} children={heroWords} />
            </h2>
            <div className="flex flex-1 items-center md:justify-end">
              <Link
                href={
                  "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
                }
                className="flex items-center md:justify-end font-portfolio_bold1
               text-sm text-[var(--dark-1)]  w-40 h-16 md:h-20  rounded-[60px] bg-[#fff]"
              >
                <Magnetic bgColor={"#8f8f8f"} children={"Contact me"} />
              </Link>
            </div>
          </div>
          <div className="w-full grid md:grid-cols-custom_2 gap-8">
            <div className="w-[100px]"></div>
            <div className="w-full grid md:grid-cols-2 gap-x-8">
              {socialsList?.map((skill, index) => {
                return (
                  <Link
                    href={`${skill?.path}`}
                    key={index}
                    className="w-full cursor-pointer group flex flex-col items-center gap-1 justify-between
                       text-xs md:text-sm px-4 font-portfolio_regular "
                  >
                    <div
                      style={{
                        transition: "all .4s var(--primary-curve)",
                      }}
                      className="w-full py-4 md:py-6 uppercase group-hover:translate-x-5 group-hover:text-[#fff] text-grey grid grid-cols-custom_2 items-center"
                    >
                      <span className="w-[60px] ">{skill?.title}</span>
                      <span className="flex justify-end items-center gap-12">
                        <span>{skill?.subTitle}</span>
                        <span className="w-8 h-8 text-sm rounded-full flex items-center text-white justify-center bg-[rgba(255,255,255,.1)]">
                          <ImArrowUpRight2 />
                        </span>
                      </span>
                    </div>
                    <div className="w-full bg-[rgba(255,255,255,.1)] h-[.5px]"></div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
