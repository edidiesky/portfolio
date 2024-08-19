"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { aboutText1, ctatext5 } from "@/constants/data/text";
import Word from "@/components/animations/Word";
import AnimateTextWord from "@/components/animations/AnimateTextWord";
// AnimateTextWord
export default function Cta() {
  return (
    <div data-scroll className="py-12 lg:py-20 z-50 flex items-end justify-end">
      <div className="w-[90%] lg:w-[70%] justify-end items-start mx-auto lg:px-8 m-auto max-w-custom_1 grid grid-cols-1 lg:grid-cols-custom_4 gap-8 lg:gap-2 ">
        <div className="w-[200px]">
          <div className="text-4xl text-text_dark_1 font-portfolio_bold1 w-full font-normal uppercase">
            <span>03/</span>
          </div>
        </div>
        <div className="w-[100%] flex flex-col items-end justify-end  gap-16">
          <div className="flex flex-col gap-8">
            <h4 className=" w-full uppercase text-4xl lg:text-5xl flex flex-wrap gap-x-[8px] gap-y-[8px]  leading-[1.2] font-portfolio_bold1 font-medium text-text_dark_1 ">
              <Word children={aboutText1} />
            </h4>
            <h4 className=" w-full uppercase text-4xl lg:text-5xl flex flex-wrap gap-x-[8px] gap-y-[8px]  leading-[1.2] font-portfolio_bold1 font-medium text-text_dark_1 ">
              <Word children={aboutText1} />
            </h4>
          </div>
          <div className="w-full grid-cols-1 grid py-5 gap-12 sm:grid-cols-custom_2">
            <div className="w-[300px] flex-col gap-12">
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
                  className="w-full hero_images h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-8">
              <h4 className=" w-full uppercase text-xl lg:text-2xl text-text_dark_1 ">
                <AnimateTextWord children={ctatext5} />
              </h4>
              <h4 className=" w-full uppercase text-xl lg:text-2xl text-text_dark_1 ">
                <AnimateTextWord children={ctatext5} />
              </h4>
              <Link href={'/about'} className="underline w-full uppercase text-xl lg:text-2xl text-text_dark_1 ">
                <AnimateTextWord children={'More About Me and Services'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
