"use client";
import Image from "next/image";
import Link from "next/link";

import {
  ctatext4,
  aboutText2,
  ctatext1,
  ctatext7,
  ctaText2,
} from "@/constants/data/text";
import Word from "@/components/animations/Word";
import AnimateTextWord from "@/components/animations/AnimateTextWord";

export default function Cta() {
  return (
    <div
      data-scroll
      className="py-24 lg:py-32 z-[500000] flex flex-col items-end justify-end"
    >
      <div className="w-[90%] max-w-custom mx-auto flex flex-col gap-20 md:gap-32 items-end justify-end">
        <h4 className="text-4xl lg:text-6xl uppercase w-full font-portfolio_regular leading-[1.2] titleRef text-[#fff]">
          <div className="md:max-w-[500px]">
            {" "}
            <AnimateTextWord >
              Few things About Me
            </AnimateTextWord>{" "}
          </div>
          {/* <sup className="text-2xl md:text-4xl">4</sup> */}
          <div className="w-full pt-3 lg:grid-cols-2 grid gap-4">
            <div className="w-full"></div>
            <span className="block text-xl text_background max-w-[500px] capitalize md:text-2xl">
              <AnimateTextWord>
                Look into the lenses of a passionate software developer who seek
                drive to results and impact on startup products
              </AnimateTextWord>
            </span>
          </div>
        </h4>
        <div className="w-[100%] lg:w-[900px] flex-col flex gap-12 md:gap-20">
          <div className="flex flex-col gap-12 w-full">
            <h4
              className="w-full
            text-2xl lg:text-4xl flex uppercase flex-wrap gap-x-[8px]
            gap-y-[8px] leading-[1.2] font-portfolio_regular"
            >
              <Word>{aboutText2}</Word>
            </h4>
            <h4
              className="w-full
            text-2xl lg:text-4xl flex uppercase flex-wrap gap-x-[8px]
            gap-y-[8px] leading-[1.2] font-portfolio_regular"
            >
              <Word>{ctaText2}</Word>
            </h4>
            <h4
              className="w-full
            text-2xl lg:text-4xl flex uppercase flex-wrap gap-x-[8px]
            gap-y-[8px] leading-[1.2] font-portfolio_regular"
            >
              <Word>{ctatext1}</Word>
            </h4>
          </div>

          <div className="w-full pt-4 lg:w-[90%] items-center max-w-custom grid grid-cols-1 lg:grid-cols-custom_2 gap-8 md:gap-8">
            <div
              // ref={imageRef}
              className="lg:w-[300px] flex flex-col gap-4 md:gap-8"
            >
              <h4
                className="w-full
            text-xl lg:text-2xl flex flex-wrap gap-x-[8px] gap-y-[8px] leading-[1.1] font-portfolio_regular"
              >
                <AnimateTextWord>
                  A Fusion of Product Engineering and Passion
                </AnimateTextWord>
              </h4>
              <Image
                width={180}
                height={160}
                alt="Cotion"
                src={"/eddy.jpeg"}
                className="md:w-[250px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-12">
              <h4 className="w-full text_background text-xl lg:text-2xl flex flex-wrap gap-x-[8px] gap-y-[8px] leading-[1.1] font-portfolio_regular">
                <AnimateTextWord>{ctatext4}</AnimateTextWord>
              </h4>
              <h4 className="w-full text_background text-xl lg:text-2xl flex flex-wrap gap-x-[8px] gap-y-[8px] leading-[1.1] font-portfolio_regular">
                <AnimateTextWord>{ctatext7}</AnimateTextWord>
              </h4>
              <Link
                href={"/about"}
                className="underline text_background z-[4000] w-full font-portfolio_regular text-xl lg:text-2xl text-text_dark_1"
              >
                <AnimateTextWord>More About Me and Services</AnimateTextWord>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
