"use client";
import React, { useRef, useState } from "react";
import { projectdata3 } from "@/constants/data/projectdata";
import Link from "next/link";
import { opacity, slideup, slideup2 } from "@/constants/utils/framer";
import { useRouter } from 'next/router';
import { GoArrowUpRight } from "react-icons/go";
import { motion, useInView } from "framer-motion";
export default function Hero() {
  // text animation reveal

  return (
    <>
      <div
        data-scroll
        className="py-20 relative flex items-center justify-center"
      >
        <div className="w-full flex flex-col gap-52 ">
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
  const router = useRouter();
  const { workid } = router.query
  const workDetails = projectdata3.find((data)=> data.mainTitle === workid)
  // console.log(workDetails)
  return (
    <div className="grid w-[90%] max-w-custom_1 mx-auto grid-cols-1 md:grid-cols-custom_4 justify-between gap-y-8 gap-x-12">
      <div className="w-[150px] flex">
        <h4 className="text-3xl">01/</h4>
      </div>
      <div className="flex w-[90%] md:w-[900px] flex-col gap-16 mx-auto">
        <div className="flex flex-col gap-12 w-full -mb-10">
          <span
            data-scroll
            data-scroll-speed="2"
            // titleRef
            className="font-normal flex text-text_dark_1 text-start lg:text-start uppercase text-8xl xl:text-[110px] w-full leading-[1.4] font-portfolio_bold"
          >
            {workDetails?.mainTitle} <sup className="text-4xl">01</sup>
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="w-full flex flex-col gap-4">
              <h4 className="text-3xl w-full md:w-[250px] font-portfolio_semibold uppercase pb-2 md:pb-8 border-b">
                Role & Services:
              </h4>
              <div className="w-full gap-2 flex items-center">
                <div className="flex items-start">
                  <span className="text-4xl text-text_dark_1 text-start uppercase leading-[1] font-portfolio_bold">
                    {workDetails?.role}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <h4 className="text-3xl w-full md:w-[250px] font-portfolio_semibold uppercase pb-2 md:pb-8 border-b">
                LOCATION & YEAR
              </h4>
              <div className="w-full gap-2 flex items-start">
                <div className="flex items-start ">
                  <span className="text-4xl text-text_dark_1 text-start uppercase leading-[1] font-portfolio_bold">
                    Lagos, Nigeria © {workDetails?.period}
                  </span>
                </div>
              </div>
            </div>
            {workDetails?.github && (
              <div className="w-full flex flex-col gap-4">
                <h4 className="text-3xl w-full md:w-[250px] font-portfolio_semibold uppercase pb-2 md:pb-8 border-b">
                  Github
                </h4>
                <div className="w-full gap-2 flex items-start">
                  <div className="flex items-start ">
                    <Link
                      style={{ textDecoration: "underline" }}
                      href={`${workDetails?.github}`}
                      className="text-4xl text-text_dark_1 text-start uppercase leading-[1] font-portfolio_bold"
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
            className="w-40 h-40 absolute right-10 -top-20 flex items-center gap-2 rounded-full bg-[#17120eeb] justify-center text-3xl text-white"
          >
            Live Site <GoArrowUpRight fontSize={"20px"} />
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
  const { workid } = router.query
  const workDetails = projectdata3.find((data)=> data.mainTitle === workid)
  const container = useRef(null);
  const inView1 = useInView(container, {
    margin: "0px 100px -50px 0px",
  });
  // const overviewText =
  //   "Avest is a Saas that makes easy for real estate agencies to target and find prospects online. Founded by 2 formers real estate agents, the product is already used by many real estate agencies, in France. To attract more customers, Avest needed a simple Webflow website presenting their product. For this project, i had to work on the branding, the wireframes, the UI Design and finally, the Webflow Development.";
  const overviewText = `${workDetails?.overview?.Description}`
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
            className="font-normal flex text-text_dark_1 text-start lg:text-start uppercase text-[70px] md:text-[90px] w-full leading-[1.4] font-portfolio_bold"
          >
            Overview
          </span>
          <div className="grid grid-cols-1 gap-8">
            <div className="w-full flex flex-col gap-4">
              <div className="w-full gap-2 flex items-center">
                <div className="flex items-start">
                  <h4
                    ref={container}
                    className=" w-full text-4xl sm:text-5xl flex flex-wrap gap-x-[8px] gap-y-[8px]  leading-[1] font-portfolio_bold font-medium text-text_dark_1 "
                  >
                    {overviewText.split(" ").map((x, index) => {
                      return (
                        <span key={index} className="inline-flex hide relative">
                          <motion.span
                            variants={slideup}
                            custom={index}
                            initial="initial"
                            animate={inView1 ? "animate" : "exit"}
                          >
                            {x}
                          </motion.span>
                        </span>
                      );
                    })}
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full relative flex-col gap-4 mt-20 flex ">
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
            {/* <div className="w-full"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function MyRoleInWork() {
  const router = useRouter();
  const { workid } = router.query
  const workDetails = projectdata3.find((data)=> data.mainTitle === workid)
  const container_2 = useRef(null);
  const inView2 = useInView(container_2, {
    margin: "0px 100px -50px 0px",
  });
  const heroWords2 =
    "A selected set of experiments I'm building as I navigate through ideas and technologies. I learn by testing out and building based on concepts and techniques.";

  const overviewText2 = workDetails?.roleDescription
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
            className="font-normal flex text-text_dark_1 text-start lg:text-start uppercase text-[70px] md:text-[90px] w-full leading-[1.4] font-portfolio_bold"
          >
            My Role
          </span>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full flex flex-col gap-4">
              <div className="w-full gap-2 flex items-center">
                <div className="flex items-start">
                  <h4
                    ref={container_2}
                    className=" w-full text-4xl md:text-5xl flex flex-wrap gap-x-[8px] gap-y-[8px]  leading-[1] font-portfolio_bold font-medium text-text_dark_1 "
                  >
                    {overviewText2?.split(" ").map((x, index) => {
                      return (
                        <span key={index} className="inline-flex hide relative">
                          <motion.span
                            variants={slideup}
                            custom={index}
                            initial="initial"
                            animate={inView2 ? "animate" : "exit"}
                          >
                            {x}
                          </motion.span>
                        </span>
                      );
                    })}
                  </h4>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-12">
              <div className="w-full flex flex-col md:flex-row items-start gap-4">
                <h4 className="text-3xl font-portfolio_semibold font-light text-grey">
                  Technology used:
                </h4>
                <div className="flex-1 gap-2 flex items-start">
                  <div className="flex items-start ">
                    <span className="text-3xl flex flex-wrap items-center gap-2 md:text-4xl font-normal text-text_dark_1 text-start leading-[1] font-portfolio_bold">
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
  const { workid } = router.query
  const workDetails = projectdata3.find((data)=> data.mainTitle === workid)
  const container3 = useRef(null);
  const inView3 = useInView(container3, {
    margin: "0px 100px -50px 0px",
  });
  const heroWords2 =
    "A selected set of experiments I'm building as I navigate through ideas and technologies. I learn by testing out and building based on concepts and techniques.";

  const overviewText2 = workDetails?.features?.Description[0]
  return (
    <div className="grid grid-cols-1 md:grid-cols-custom_4 mx-auto justify-between gap-y-8 gap-x-12">
      <div className="w-[150px] flex">
        <h4 className="text-3xl">04/</h4>
      </div>
      <div className="flex w-[90%] md:w-[900px] flex-col gap-16 mx-auto">
        <div className="flex flex-col gap-12 w-full -mb-10">
          <span
            data-scroll
            data-scroll-speed="2"
            // titleRef
            className="font-normal flex text-text_dark_1 text-start lg:text-start uppercase text-[70px] md:text-[90px] w-full leading-[1.4] font-portfolio_bold"
          >
            {workDetails?.mainTitle}- Features
          </span>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full flex flex-col gap-4">
              <div className="w-full gap-2 flex items-center">
                <div className="flex items-start">
                  <h4
                    ref={container3}
                    className=" w-full text-4xl sm:text-5xl flex flex-wrap gap-x-[8px] gap-y-[8px]  leading-[1] font-portfolio_bold font-medium text-text_dark_1 "
                  >
                    {overviewText2?.split(" ").map((x, index) => {
                      return (
                        <span key={index} className="inline-flex hide relative">
                          <motion.span
                            variants={slideup}
                            custom={index}
                            initial="initial"
                            animate={inView3 ? "animate" : "exit"}
                          >
                            {x}
                          </motion.span>
                        </span>
                      );
                    })}
                  </h4>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {workDetails?.features?.images?.map((image, index) => {
                return (
                  <div key={index} className="w-full relative mt-20 flex">
                    <img src={image} alt="" className="w-full object-cover" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkUI() {
  const router = useRouter();
  const { workid } = router.query
  const workDetails = projectdata3.find((data)=> data.mainTitle === workid)
  const container4 = useRef(null);
  const inView4 = useInView(container4, {
    margin: "0px 100px -50px 0px",
  });
  const heroWords =
    "A selected set of experiments I'm building as I navigate through ideas and technologies. I learn by testing out and building based on concepts and techniques.";

  const overviewText5 = workDetails?.ui?.description
  
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
              className="font-normal flex text-text_dark_1 uppercase text-[70px] md:text-[90px] w-full font-portfolio_bold"
            >
              CLEAR AND <br /> SIMPLE UI
            </span>
            <div className="grid grid-cols-1 gap-4">
              <div className="w-full flex flex-col gap-4">
                <div className="w-full gap-2 flex items-center">
                  <div className="flex items-start">
                    <h4
                      ref={container4}
                      className=" w-full md:text-5xl text-4xl flex flex-wrap gap-x-[8px] gap-y-[8px]  leading-[1] font-portfolio_bold font-medium text-text_dark_1 "
                    >
                      {overviewText5?.split(" ").map((x, index) => {
                        return (
                          <span
                            key={index}
                            className="inline-flex hide relative"
                          >
                            <motion.span
                              variants={slideup}
                              custom={index}
                              initial="initial"
                              animate={inView4 ? "animate" : "exit"}
                            >
                              {x}
                            </motion.span>
                          </span>
                        );
                      })}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 gap-4">
                  {workDetails?.ui?.images?.map((image, index) => {
                    return (
                      <div key={index} className="w-full relative mt-20 flex">
                        <img
                          src={image}
                          alt=""
                          className="w-full object-cover"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
function NextWork() {
  return <div className="w-full py-24"></div>;
}
