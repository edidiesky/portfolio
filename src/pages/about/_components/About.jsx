"use client";
import Word from "@/components/animations/Word";
import Image from "next/image";
import Link from "next/link";
import { ctatext4, aboutText2 } from "@/constants/data/text";
import AnimateTextWord from "@/components/animations/AnimateTextWord";

export default function About() {
  const ctatext1 =
    "I am passionate about web development and the ideas it postulates. I love working at the mid-section of beautiful user-friendly interfaces. I also can create memorable web experiences.";
  const ctaText2 =
    "Helping industries to rise above others in their niche is one of my healthy obsession I do bring and fascinated about.";

  return (
    <div data-scroll className="py-12 z-50 flex flex-col gap-24">
      <div className="w-[90%] justify-end items-start mx-auto md:px-4 m-auto max-w-custom grid grid-cols-1 gap-4 ">
        <div className="w-[100%] flex flex-col items-end justify-end  gap-16">
          <h3 className="w-full max-w-[900px] text-2xl lg:text-4xl flex uppercase flex-wrap gap-x-[8px]  gap-y-[8px] leading-[1.2] font-portfolio_regular">
            <Word>{ctatext1}</Word>
          </h3>
          <h3 className="w-full max-w-[900px] text-2xl lg:text-4xl flex uppercase flex-wrap gap-x-[8px]  gap-y-[8px] leading-[1.2] font-portfolio_regular">
            <Word>{ctaText2}</Word>
          </h3>
        </div>
      </div>
      <div
        className="w-[90%] justify-end items-end mx-auto
       max-w-custom grid grid-cols-1 lg:grid-cols-custom gap-12 md:gap-24"
      >
        <div
          // ref={imageRef}
          className="md:w-[400px] h-full"
        >
          <Image
            width={180}
            height={160}
            alt="Cotion"
            src={"/eddy.jpeg"}
            className="md:w-[100%] object-cover"
          />
        </div>
        <div className="flex flex-col gap-8">
          <h4
            className="w-full
            text-xl lg:text-3xl flex flex-wrap gap-x-[8px]
            gap-y-[8px] leading-[1.2] font-portfolio_regular"
          >
            <AnimateTextWord>{aboutText2}</AnimateTextWord>
          </h4>
          <h4
            className="w-full font-portfolio_regular text-xl
           lg:text-3xl leading-[1.2]"
          >
            <AnimateTextWord>{ctatext4}</AnimateTextWord>
          </h4>
          <Link
            href={"/about"}
            className="underline w-full font-portfolio_regular text-2xl lg:text-3xl text-text_dark_1"
          >
            <AnimateTextWord>More About Me and Services</AnimateTextWord>
          </Link>
        </div>
      </div>
    </div>
  );
}
