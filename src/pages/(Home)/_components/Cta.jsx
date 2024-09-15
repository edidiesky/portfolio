"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { ctatext4 } from "@/constants/data/text";
import Word from "@/components/animations/Word";
import AnimateTextWord from "@/components/animations/AnimateTextWord";

export default function Cta() {
  return (
    <div
      data-scroll
      className="py-12 mt-20 md:mt-40 lg:py-20 z-[500000] flex items-end justify-end"
    >
      <div
        className="w-[90%] md:w-[78%] justify-end items-end mx-auto
       max-w-custom grid grid-cols-1 lg:grid-cols-custom gap-12 md:gap-24"
      >
        <div className="flex flex-col gap-8">
          {/* <h4 className="w-full font-portfolio_normal uppercase text_background text-2xl lg:text-3xl flex flex-wrap gap-x-[8px] gap-y-[8px] leading-[1.2] font-portfolio_bold1 font-medium text-text_dark_1">
            <Word>{ctatext5}</Word>
          </h4> */}
          <h4
            className="w-full font-portfolio_normal
           text_background text-2xl lg:text-3xl flex flex-wrap gap-x-[8px]
            gap-y-[8px] leading-[1.2] font-portfolio_bold1 
            font-bold"
          >
            <Word>{ctatext4}</Word>
          </h4>
          <Link
            href={"/about"}
            className="underline z-[4000] w-full font-bold uppercase text-xl lg:text-2xl text_background text-text_dark_1"
          >
            <AnimateTextWord>More About Me and Services</AnimateTextWord>
          </Link>
        </div>
        <div
          // ref={imageRef}
          className="md:w-[400px] h-full"
        >
          <img
            alt="Cotion"
            src={"/images/profile_6.jpg"}
            className="w-full hero_images h-full object-cover"
          />
        </div>
        {/* <div className="w-[100%] flex flex-col items-end justify-end gap-16"> */}
        {/* <div className="w-full grid-cols-1 grid py-5 gap-12 sm:grid-cols-custom_2">
            <div className="w-[300px] flex-col gap-12">
             
            </div>
            <div className="w-full flex flex-col gap-8">
              <h4 className="w-full uppercase text-xl lg:text-2xl text-text_dark_1">
                <AnimateTextWord>{ctatext5}</AnimateTextWord>
              </h4>
              <h4 className="w-full uppercase text-xl lg:text-2xl text-text_dark_1">
                <AnimateTextWord>{ctatext3}</AnimateTextWord>
              </h4>
              <Link
                href={"/about"}
                className="underline w-full uppercase text-xl lg:text-2xl text-text_dark_1"
              >
                <AnimateTextWord>More About Me and Services</AnimateTextWord>
              </Link>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
