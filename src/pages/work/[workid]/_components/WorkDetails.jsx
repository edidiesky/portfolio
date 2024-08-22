"use client";
import React, { useRef, useState } from "react";
import { projectdata3 } from "@/constants/data/projectdata";
import Link from "next/link";
import { opacity, slideup, slideup2 } from "@/constants/utils/framer";
import { useRouter } from "next/router";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useInView } from "framer-motion";
import Magnetic from "@/components/animations/Magnetic";
import AnimateTextWord from "@/components/animations/AnimateTextWord";
import Word from "@/components/animations/Word";
export default function Hero() {
  // text animation reveal

  return (
    <>
      <div
        data-scroll
        className="py-20 w-full overflow-hidden relative flex items-center justify-center"
      >
        <div className="w-full px-2 flex flex-col gap-20 md:gap-24 ">
          {/* title */}
          {WorkTitle()}
          {/* overview */}
          {WorkOverview()}
          {MyRoleInWork()}
          {WorkFeatures()}
          {WorkUI()}
        </div>
      </div>
      {/* {NextWork()} */}
    </>
  );
}

function WorkTitle() {
  const router = useRouter();
  const { workid } = router.query;
  const workDetails = projectdata3.find((data) => data.mainTitle === workid);
  // console.log(workDetails)
  return (
    <div className="grid w-[90%] max-w-custom_1 mx-auto grid-cols-1 justify-between gap-y-8 gap-x-12">
      <div className="flex w-[90%] xl:w-[900px] flex-col gap-12 mx-auto">
        <div className="flex flex-col gap-12 w-full -mb-10">
          <span
            data-scroll
            data-scroll-speed="2"
            // titleRef
            className="font-normal flex 
            text-start lg:text-start text-8xl w-full leading-[1.4] font-portfolio_bold"
          >
            {workDetails?.mainTitle}{" "}
            <sup className="text-xl font-portfolio_normal">
              0{workDetails?.id}
            </sup>
          </span>
          <div className="grid grid-cols-3 gap-6 md:gap-8">
            <div className="w-full flex flex-col gap-4">
              <h4
                className="text-[10px] md:text-sm w-full md:w-[250px] 
              font-portfolio_normal pb-2 md:pb-4 border-b border-[rgba(255,255,255,.1)]"
              >
                Role & Services:
              </h4>
              <div className="w-full gap-2 flex items-center">
                <div className="flex items-start">
                  <span className="text-[12px] md:text-base text-start  leading-[1] font-portfolio_normal">
                    {workDetails?.role}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <h4 className="text-[10px] md:text-sm w-full md:w-[250px] font-portfolio_normal pb-2 md:pb-4 border-b border-[rgba(255,255,255,.1)]">
                Location & Year
              </h4>
              <div className="w-full gap-2 flex items-start">
                <div className="flex items-start ">
                  <span className="text-[12px] md:text-base text-start  leading-[1] font-portfolio_normal">
                    Lagos, Nigeria © {workDetails?.period}
                  </span>
                </div>
              </div>
            </div>
            {workDetails?.github && (
              <div className="w-full flex flex-col gap-4">
                <h4 className="text-[10px] md:text-sm w-full md:w-[250px] font-portfolio_normal  pb-2 md:pb-4 border-b border-[rgba(255,255,255,.1)]">
                  Github
                </h4>
                <div className="w-full gap-2 flex items-start">
                  <div className="flex items-start ">
                    <Link
                      target="_blank"
                      style={{ textDecoration: "underline" }}
                      href={`${workDetails?.github}`}
                      className="text-[12px] md:text-base text-start  leading-[1] font-portfolio_normal"
                    >
                      View Code
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full relative mt-20 flex">
          <Link
            href={`${workDetails?.website}`}
            target="_blank"
            className="md:w-40 w-28 h-28 md:h-40 absolute right-10 -top-20 font-portfolio_normal flex items-center gap-2 rounded-full bg-[var(--primary)] justify-center text-sm text-white"
          >
            <Magnetic bgColor={"var(--grey-1)"}>
              <span className="flex items-center justify-center gap-2">
                Live Site <GoArrowUpRight fontSize={"20px"} />
              </span>
            </Magnetic>
          </Link>
          <img
            // src="https://dennissnellenberg.com/media/pages/work/the-damai/815df0128d-1710449859/case-image-2.jpg"
            src={workDetails?.mainImage}
            alt=""
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
function WorkOverview() {
  const router = useRouter();
  const { workid } = router.query;
  const workDetails = projectdata3.find((data) => data.mainTitle === workid);
  const overviewText = `${workDetails?.overview?.Description}`;
  return (
    <div className="w-full">
      <div className="flex w-[90%] xl:w-[900px] flex-col gap-16 mx-auto">
        <div className="flex flex-col gap-8 w-full mb-10">
          <span
            data-scroll
            data-scroll-speed="2"
            // titleRef
            className=" uppercase text-5xl md:text-5xl"
          >
            <AnimateTextWord type={"largeText"}>Overview</AnimateTextWord>
          </span>
          <div className="grid grid-cols-1 gap-8">
            <div className="w-full flex flex-col gap-12">
              <div className="w-full gap-2 flex items-center">
                <div className="flex items-start">
                  <h4 className=" w-full text-lg sm:text-xl ">
                    <Word>{overviewText}</Word>
                  </h4>
                </div>
              </div>
            </div>

            {/* <div className="w-full"></div> */}
          </div>
        </div>
        <div className="w-full relative mx-auto flex-col gap-12 mt-20 flex max-w-custom">
          {workDetails?.overview?.images?.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt=""
                className="w-full object-cover"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MyRoleInWork() {
  const router = useRouter();
  const { workid } = router.query;
  const workDetails = projectdata3.find((data) => data.mainTitle === workid);
  const overviewText2 = workDetails?.roleDescription;
  return (
    <div className="grid grid-cols-1 md:grid-cols-custom_4 mx-auto justify-between gap-y-8 gap-x-12">
      <div className="flex w-[90%] xl:w-[900px] flex-col gap-8 mx-auto">
        <div className="flex flex-col gap-8 w-full -mb-10">
          <span
            data-scroll
            data-scroll-speed="2"
            // titleRef
            className=" uppercase text-5xl md:text-5xl"
          >
            <AnimateTextWord type={"largeText"}> My Role</AnimateTextWord>
          </span>
          <div className="grid grid-cols-1 gap-8">
            <h4 className=" w-full text-lg sm:text-xl">
              <AnimateTextWord>{overviewText2}</AnimateTextWord>
            </h4>
            <div className="grid grid-cols-1 gap-8">
              <div className="w-full flex flex-col md:flex-row items-start gap-12">
                <h4 className="text-lg font-portfolio_bold2 font-light text-grey">
                  Technology used:
                </h4>
                <div className="flex-1 gap-2 flex items-start">
                  <div className="flex items-start ">
                    <span className="text-lg flex flex-wrap items-center gap-2 md:text-lg font-normal text-start
                     leading-[1] font-portfolio_regular text-white">
                      {workDetails?.technologyUsed?.map((tools, index) => {
                        return <span key={index}>{tools},</span>;
                      })}
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
  const router = useRouter();
  const { workid } = router.query;
  const workDetails = projectdata3.find((data) => data.mainTitle === workid);
  const container3 = useRef(null);
  const inView3 = useInView(container3, {
    margin: "0px 100px -50px 0px",
  });
  const heroWords2 =
    "A selected set of experiments I'm building as I navigate through ideas and technologies. I learn by testing out and building based on concepts and techniques.";

  const overviewText2 = workDetails?.features?.Description[0];
  return (
    <div className="grid grid-cols-1 md:grid-cols-custom_4 mx-auto  gap-y-8 gap-x-12">
      <div className="flex w-[90%] xl:w-[900px] flex-col gap-16 mx-auto">
        <div className="flex flex-col gap-12 w-full -mb-10">
          <span
            data-scroll
            data-scroll-speed="2"
            // titleRef
            className="uppercase text-5xl md:text-6xl font-portfolio_bold"
          >
            {workDetails?.mainTitle}- Features
          </span>
          <div className="grid grid-cols-1 gap-12">
            <div className="w-full flex flex-col gap-12">
              <div className="w-full gap-2 flex items-center">
                <div className="flex items-start">
                  <h4
                    ref={container3}
                    className=" w-full text-lg sm:text-lg font-portfolio_regular"
                  >
                    <AnimateTextWord>{overviewText2}</AnimateTextWord>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1">
          {workDetails?.features?.images?.map((image, index) => {
            return (
              <div key={index} className="w-full relative flex">
                <img src={image} alt="" className="w-full object-cover" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function WorkUI() {
  const router = useRouter();
  const { workid } = router.query;
  const workDetails = projectdata3.find((data) => data.mainTitle === workid);
  const container4 = useRef(null);
  const inView4 = useInView(container4, {
    margin: "0px 100px -50px 0px",
  });
  const heroWords =
    "A selected set of experiments I'm building as I navigate through ideas and technologies. I learn by testing out and building based on concepts and techniques.";

  const overviewText5 = workDetails?.ui?.description;

  return (
    <div className="grid grid-cols-1 md:grid-cols-custom_4 mx-auto justify-between gap-y-8 gap-x-12">
      <div className="flex w-[90%] xl:w-[900px] flex-col gap-12 mx-auto">
        <div className="flex flex-col gap-12 w-full">
          <div className="grid grid-cols-1 gap-1">
            {workDetails?.ui?.images?.map((image, index) => {
              return (
                <div key={index} className="w-full relative flex">
                  <img src={image} alt="" className="w-full object-cover" />
                </div>
              );
            })}
          </div>
          <div className="w-full md:w-[650px] mx-auto flex flex-col gap-8">
            <span
              data-scroll
              data-scroll-speed="2"
              // titleRef
              className="font-normal flex leading-[1] uppercase text-5xl md:text-6xl w-full font-portfolio_bold"
            >
              <AnimateTextWord type={"largeText"}>
                CLEAR AND SIMPLE UI
              </AnimateTextWord>
            </span>
            <h4
              ref={container4}
              className="w-full  mx-auto text-lg md:text-xl leading-[1.2] font-portfolio_regular "
            >
              <AnimateTextWord>{overviewText5}</AnimateTextWord>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
function NextWork() {
  return <div className="w-full py-24"></div>;
}
