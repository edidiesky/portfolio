"use client";
import React, { useRef } from "react";
import Word from "@/components/animations/Word";
import Image from "next/image";
import Link from "next/link";
import {
  aboutText1,
  ctatext5,
  aboutText2,
  ctatext3,
} from "@/constants/data/text";
import AnimateTextWord from "@/components/animations/AnimateTextWord";

export default function About() {
  const ctatext1 =
    "I am passionate about web development and the ideas it postulates. I love working at the mid-section of beautiful user-friendly interfaces. I also can create memorable web experiences.";
  const ctaText2 =
    "Not forgetting I am also passionate about mathematics, physics and diodes (electronic engineering). And also, I despise Politics";

  return (
    <div data-scroll className="py-32 z-50 flex flex-col gap-24">
      <div className="w-[90%] lg:w-[70%] justify-end items-start mx-auto md:px-4 m-auto max-w-custom grid grid-cols-1 gap-4 ">
        <div className="w-[100%] flex flex-col items-end justify-end  gap-16">
          <h4 className=" w-full uppercase text-3xl md:text-4xl leading-[1.4] text_background">
            <Word>{ctatext1}</Word>
          </h4>
          <h4 className=" w-full uppercase text-3xl md:text-4xl leading-[1.4] text_background">
            <Word>{ctaText2}</Word>
          </h4>
        </div>
      </div>
      <div
        className="w-[90%] lg:w-[70%] justify-end items-end mx-auto
       max-w-custom grid grid-cols-1 lg:grid-cols-custom gap-12 md:gap-24"
      >
        <div
          // ref={imageRef}
          className="md:w-[400px] h-full"
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
        <div className="flex flex-col gap-8">
          <h4 className="w-full font-portfolio_normal uppercase text_background 
          text-lg lg:text-xl flex flex-wrap gap-x-[8px] gap-y-[8px] leading-[1.2] font-portfolio_bold1 font-medium text-text_dark_1">
            <Word>{ctatext5}</Word>
          </h4>
          <h4 className="w-full font-portfolio_normal uppercase text_background text-lg lg:text-xl flex flex-wrap gap-x-[8px] gap-y-[8px] leading-[1.2] font-portfolio_bold1 font-medium text-text_dark_1">
            <Word>{aboutText1}</Word>
          </h4>
          <Link
            href={"/about"}
            className="underline w-full uppercase text-xl lg:text-2xl text_background text-text_dark_1"
          >
            <AnimateTextWord>More About Me and Services</AnimateTextWord>
          </Link>
        </div>
      </div>
    </div>
  );
}
