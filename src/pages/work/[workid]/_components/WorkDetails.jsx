"use client";
import React, { useRef, useState } from "react";
import {
  opacity,
  slideup,
  slideup2,
  smallslideup,
} from "@/constants/utils/framer";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useInView } from "framer-motion";
export default function Hero() {
  const heroWords =
    "A selected set of experiments I'm building as I navigate through ideas and technologies. I learn by testing out and building based on concepts and techniques.";
  const ovverviewText =
    "Avest is a Saas that makes easy for real estate agencies to target and find prospects online. Founded by 2 formers real estate agents, the product is already used by many real estate agencies, in France. To attract more customers, Avest needed a simple Webflow website presenting their product. For this project, i had to work on the branding, the wireframes, the UI Design and finally, the Webflow Development.";

  // text animation reveal

  return (
    <>
      <div
        data-scroll
        className="py-20 relative flex items-center justify-center"
      >
        <div className="w-[90%] mx-auto flex flex-col gap-52 max-w-custom_1">
          {/* title */}
          {WorkTitle()}
          {/* overview */}
          {WorkOverview()}
          {MyRoleInWork()}
          {WorkFeatures()}
          {WorkUI()}
        </div>
      </div>
      {NextWork()}
    </>
  );
}

function WorkTitle() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-custom_4 mx-auto justify-between gap-y-8 gap-x-12">
      <div className="w-[150px] flex">
        <h4 className="text-3xl">01/</h4>
      </div>
      <div className="flex w-[90%] md:w-[900px] flex-col gap-16 mx-auto">
        <div className="flex flex-col gap-12 w-full -mb-10">
          <span
            data-scroll
            data-scroll-speed="2"
            // titleRef
            className="font-normal flex  text-text_dark_1 text-start lg:text-start uppercase text-4xl sm:text-5xl md:text-6xl xl:text-8xl w-full leading-[1.4] font-portfolio_bold"
          >
            Vaada <sup className="text-4xl">01</sup>
          </span>
          <div className="grid grid-cols-3 gap-8">
            <div className="w-full flex flex-col gap-4">
              <h4 className="text-sm w-[250px] font-portfolio_semibold uppercase pb-8 border-b">
                Role & Services:
              </h4>
              <div className="w-full gap-2 flex items-center">
                <div className="flex items-start">
                  <span className="text-sm text-text_dark_1 text-start uppercase leading-[1] font-portfolio_bold">
                    Full-Stack Development
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <h4 className="text-sm w-[250px] font-portfolio_semibold uppercase pb-8 border-b">
                LOCATION & YEAR
              </h4>
              <div className="w-full gap-2 flex items-start">
                <div className="flex items-start ">
                  <span className="text-sm text-text_dark_1 text-start uppercase leading-[1] font-portfolio_bold">
                    Lagos, Nigeria © 2024
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <h4 className="text-sm w-[250px] font-portfolio_semibold uppercase pb-8 border-b">
                CREDITS
              </h4>
              <div className="w-full gap-2 flex items-start">
                <div className="flex items-start ">
                  <span className="text-sm text-text_dark_1 text-start uppercase leading-[1] font-portfolio_bold">
                    Design: Avada.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative mt-20 flex h-[40rem]">
          <div className="w-40 h-40 absolute right-10 -top-20 flex items-center gap-2 rounded-full bg-[#17120eeb] justify-center text-sm text-white">
            Live Site <GoArrowUpRight fontSize={"20px"} />
          </div>
          <img
            src="https://dennissnellenberg.com/media/pages/work/the-damai/815df0128d-1710449859/case-image-2.jpg"
            alt=""
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
function WorkOverview() {
  const container = useRef(null);
  const inView1 = useInView(container, {
    margin: "0px 100px -50px 0px",
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-custom_4 mx-auto justify-between gap-y-8 gap-x-12">
      <div className="w-[150px] flex">
        <h4 className="text-3xl">02/</h4>
      </div>
      <div className="flex w-[90%] md:w-[900px] flex-col gap-16 mx-auto">
        <div className="flex flex-col gap-12 w-full -mb-10">
          <span
            data-scroll
            data-scroll-speed="2"
            // titleRef
            className="font-normal flex text-text_dark_1 text-start lg:text-start uppercase text-4xl sm:text-5xl md:text-6xl w-full leading-[1.4] font-portfolio_bold"
          >
            Overview
          </span>
          <div className="grid grid-cols-1 gap-8">
            <div className="w-full flex flex-col gap-4">
              <div className="w-full gap-2 flex items-center">
                <div className="flex items-start">
                  <h4
                    ref={container}
                    className=" w-full text-2xl flex flex-wrap gap-x-[8px] gap-y-[8px]  items-start leading-[1.5] font-normal font-portfolio_semibold text-text_dark_1 "
                  >
                    {/* {ovverviewText.split("").map((text, index) => {
return (
<span
className="inline-flex hide relative"
key={index}
>
<motion.span
variants={slideup}
custom={index}
initial="initial"
animate={inView1 ? "animate" : "exit"}
>
{text}
</motion.span>
</span>
);
})} */}
                    Avest is a Saas that makes easy for real estate agencies to
                    target and find prospects online. Founded by 2 formers real
                    estate agents, the product is already used by many real
                    estate agencies, in France. To attract more customers, Avest
                    needed a simple Webflow website presenting their product.
                    For this project, i had to work on the branding, the
                    wireframes, the UI Design and finally, the Webflow
                    Development.
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full relative mt-20 flex h-[40rem]">
              <img
                src="https://assets-global.website-files.com/632c2cdd672087052da489aa/632dbfdfb8b0ec7d1051a0fe_img-full-w-avest-01-p-1600.webp"
                alt=""
                className="w-full object-cover"
              />
            </div>
            {/* <div className="w-full"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function MyRoleInWork() {
  const container = useRef(null);
  const inView1 = useInView(container, {
    margin: "0px 100px -50px 0px",
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-custom_4 mx-auto justify-between gap-y-8 gap-x-12">
      <div className="w-[150px] flex">
        <h4 className="text-3xl">03/</h4>
      </div>
      <div className="flex w-[90%] md:w-[900px] flex-col gap-16 mx-auto">
        <div className="flex flex-col gap-12 w-full -mb-10">
          <span
            data-scroll
            data-scroll-speed="2"
            // titleRef
            className="font-normal flex text-text_dark_1 text-start lg:text-start uppercase text-4xl sm:text-5xl md:text-6xl w-full leading-[1.4] font-portfolio_bold"
          >
            My Role
          </span>
          <div className="grid grid-cols-1 gap-8">
            <div className="w-full flex flex-col gap-4">
              <div className="w-full gap-2 flex items-center">
                <div className="flex items-start">
                  <h4
                    ref={container}
                    className=" w-full text-2xl flex flex-wrap gap-x-[8px] gap-y-[8px]  items-start leading-[1.5] font-normal font-portfolio_semibold text-text_dark_1 "
                  >
                    {/* {ovverviewText.split("").map((text, index) => {
return (
<span
className="inline-flex hide relative"
key={index}
>
<motion.span
variants={slideup}
custom={index}
initial="initial"
animate={inView1 ? "animate" : "exit"}
>
{text}
</motion.span>
</span>
);
})} */}
                    At Quantifly, I held a variety of responsibilities. My
                    initial role involved creating the logo and the overall
                    visual brand identity. Beyond that, I also designer a
                    data-gathering questionnaire, designed and programmed the
                    platform for partners and interactive game, and took on the
                    role of product owner.
                  </h4>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-12">
              <div className="w-full flex items-center gap-4">
                <h4 className="text-xl font-portfolio_semibold font-light text-grey">
                  Technology used:
                </h4>
                <div className="flex-1 gap-2 flex items-start">
                  <div className="flex items-start ">
                    <span className="text-2xl font-normal text-text_dark_1 text-start leading-[1] font-portfolio_semibold">
                      Figma, Webflow, Angular, Laravel, SvelteKit, Supabase
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-full"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
function WorkFeatures() {
  const container1 = useRef(null);
  const inView1 = useInView(container1, {
    margin: "0px 100px -50px 0px",
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-custom_4 mx-auto justify-between gap-y-8 gap-x-12">
      <div className="w-[150px] flex">
        <h4 className="text-3xl">03/</h4>
      </div>
      <div className="flex w-[90%] md:w-[900px] flex-col gap-16 mx-auto">
        <div className="flex flex-col gap-12 w-full -mb-10">
          <span
            data-scroll
            data-scroll-speed="2"
            // titleRef
            className="font-normal flex text-text_dark_1 text-start lg:text-start uppercase text-5xl md:text-6xl w-full leading-[1.4] font-portfolio_bold"
          >
            Vaada Features
          </span>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full flex flex-col gap-4">
              <div className="w-full gap-2 flex items-center">
                <div className="flex items-start">
                  <h4
                    ref={container1}
                    className=" w-full text-2xl flex flex-wrap gap-x-[8px] gap-y-[8px]  items-start leading-[1.5] font-normal font-portfolio_semibold text-text_dark_1 "
                  >
                    {/* {ovverviewText.split("").map((text, index) => {
return (
<span
className="inline-flex hide relative"
key={index}
>
<motion.span
variants={slideup}{WorkFeatures}
custom={index}
initial="initial"
animate={inView1 ? "animate" : "exit"}
>
{text}
</motion.span>
</span>
);
})} */}
                    Avest wanted to show visuals of the product to give visitors
                    a concrete view of the Saas tool. After some research &
                    tests to find the right mood and style, we finally used
                    these UI illustrations through the website.
                  </h4>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="w-full relative mt-20 flex h-[40rem]">
                <img
                  src="https://assets-global.website-files.com/632c2cdd672087052da489aa/632dbfdfb8b0ec7d1051a0fe_img-full-w-avest-01-p-1600.webp"
                  alt=""
                  className="w-full object-cover"
                />
              </div>

              <div className="w-full relative mt-20 flex h-[40rem]">
                <img
                  src="https://assets-global.website-files.com/632c2cdd672087052da489aa/632dbfdfb8b0ec7d1051a0fe_img-full-w-avest-01-p-1600.webp"
                  alt=""
                  className="w-full object-cover"
                />
              </div>

              <div className="w-full relative mt-20 flex h-[40rem]">
                <img
                  src="https://assets-global.website-files.com/632c2cdd672087052da489aa/632dbfdfb8b0ec7d1051a0fe_img-full-w-avest-01-p-1600.webp"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkUI() {
  const container2 = useRef(null);
  const inView1 = useInView(container2, {
    margin: "0px 100px -50px 0px",
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-custom_4 mx-auto justify-between gap-y-8 gap-x-12">
      <div className="w-[150px] flex">
        <h4 className="text-3xl">05/</h4>
      </div>
      <div className="flex w-[90%] md:w-[900px] flex-col gap-16 mx-auto">
        <div className="flex flex-col gap-12 w-full -mb-10">
          <span
            data-scroll
            data-scroll-speed="2"
            // titleRef
            className="font-normal flex text-text_dark_1 uppercase text-5xl md:text-6xl w-full font-portfolio_bold"
          >
            CLEAR AND <br /> SIMPLE UI
          </span>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full flex flex-col gap-4">
              <div className="w-full gap-2 flex items-center">
                <div className="flex items-start">
                  <h4
                    ref={container2}
                    className=" w-full text-2xl flex flex-wrap gap-x-[8px] gap-y-[8px]  items-start leading-[1.5] font-normal font-portfolio_semibold text-text_dark_1 "
                  >
                    {/* {ovverviewText.split("").map((text, index) => {
return (
<span
className="inline-flex hide relative"
key={index}
>
<motion.span
variants={slideup}{WorkFeatures}
custom={index}
initial="initial"
animate={inView1 ? "animate" : "exit"}
>
{text}
</motion.span>
</span>
);
})} */}
                    The idea was to keep the page structure clear & concise
                    through the website. I created some subtles animations &
                    interactions to support the content in a nice way.
                  </h4>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="w-full relative mt-20 flex h-[40rem]">
                <img
                  src="https://assets-global.website-files.com/632c2cdd672087052da489aa/632dbfdfb8b0ec7d1051a0fe_img-full-w-avest-01-p-1600.webp"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function NextWork() {
  return (
   <div className="w-full py-24">
    
   </div>
  );
}
