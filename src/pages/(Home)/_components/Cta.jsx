"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { ctatext4, aboutText2 } from "@/constants/data/text";
import Word from "@/components/animations/Word";
import AnimateTextWord from "@/components/animations/AnimateTextWord";

export default function Cta() {
  return (
    <div
      data-scroll
      className="py-12 mt-20 md:mt-40 lg:py-20 z-[500000] flex items-end justify-end"
    >
      <div
        className="w-[90%] justify-end items-end mx-auto
       max-w-custom grid grid-cols-1 lg:grid-cols-custom gap-12 md:gap-24"
      >
        <div className="flex flex-col gap-8">
          {/* <h4 className="w-full font-portfolio_normal uppercase text_background text-xl lg:text-3xl flex flex-wrap gap-x-[8px] gap-y-[8px] leading-[1.2] font-portfolio_bold1 font-medium text-text_dark_1">
            <Word>{ctatext5}</Word>
          </h4> */}
          {/* aboutText2 */}
          <h4
            className="w-full
            text-xl lg:text-3xl flex flex-wrap gap-x-[8px]
            gap-y-[8px] leading-[1.2] font-portfolio_regular"
          >
            <Word>{aboutText2}</Word>
          </h4>
          <h4
            className="w-full
            text-xl lg:text-3xl flex flex-wrap gap-x-[8px]
            gap-y-[8px] leading-[1.2] font-portfolio_regular"
          >
            <Word>{ctatext4}</Word>
          </h4>
          <Link
            href={"/about"}
            className="underline z-[4000] w-full font-portfolio_regular uppercase text-xl lg:text-2xl text-text_dark_1"
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
      </div>
    </div>
  );
}
