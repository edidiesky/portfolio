"use client";
import React, { useRef, useState } from "react";
import { projectdata3 } from "@/constants/data/projectdata";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import { GoArrowUpRight } from "react-icons/go";
import Magnetic from "@/components/animations/Magnetic";
import AnimateTextWord from "@/components/animations/AnimateTextWord";
import ProjectCard from "@/pages/(Home)/_components/ProjectCard";
export default function Hero() {
  // text animation reveal

  return (
    <>
      <div
        data-scroll
        className="py-16 md:pt-32 w-full overflow-hidden relative flex items-center justify-center"
      >
        <div className="w-full md:w-[90%] max-w-custom mx-auto px-2 flex flex-col gap-16 md:gap-32 ">
          {/* title */}
          {WorkTitle()}
          {/* overview */}
          {WorkOverview()}
          {MyRoleInWork()}
          {WorkFeatures()}
          {WorkUI()}
          {NextWork()}
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
    <div className="grid w-full max-w-custom mx-auto grid-cols-1 justify-between gap-y-8 gap-x-12">
      <div className="flex w-[90%] max-w-custom flex-col gap-8 mx-auto">
        <div className="flex gap-4 md:flex-row flex-col justify-between  items-end">
          <span
            data-scroll
            data-scroll-speed="2"
            // titleRef
            className="font-normal flex 
            text-start lg:text-start text-5xl md:text-7xl leading-[1.4] "
          >
            {workDetails?.mainTitle}{" "}
          </span>
          {!workDetails?.website ? (
            <Link
              style={{
                transition: "all .4s",
              }}
              href={`#`}
              target="_blank"
              className="md:w-40 w-40 h-16 hover:text-[#000] md:h-16 font-portfolio_regular flex items-center gap-2 rounded-full
                 bg-[#fff] justify-center text-lg md:text-base text-[#000]"
            >
              <Magnetic bgColor={"#eee"}>
                <span className="flex items-center justify-center gap-2">
                  Coming Soon
                </span>
              </Magnetic>
            </Link>
          ) : (
            <Link
              style={{
                transition: "all .4s",
              }}
              href={`${workDetails?.website}`}
              target="_blank"
              className="md:w-[170px] w-[180px] h-[50px] md:h-[65px] font-portfolio_regular flex items-center gap-2 rounded-full
                 bg-[#fff] justify-center text-lg md:text-base text-[#000]"
            >
              <Magnetic bgColor={"#b6b5b5"}>
                <span className="flex items-center justify-center gap-2">
                  Live Site <GoArrowUpRight fontSize={"20px"} />
                </span>
              </Magnetic>
            </Link>
          )}
        </div>
        <div className="w-full mx-auto flex pt-12 flex-col gap-12">
          <div className="flex flex-col gap-12 w-full ">
            <div className="w-full grid grid-cols-1 md:items-center justify-between gap-8">
              <span className="font-normal flex md:w-[900px] text_background text-start lg:text-start text-xl md:text-3xl w-full leading-[1.4]">
                {workDetails?.shortDescription}.
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="w-full flex flex-col gap-4">
                <h4 className="text-lg md:text-xl text_background w-full font-portfolio_regular md:w-[250px] pb-2 md:pb-4 border-b border-[rgba(255,255,255,.2)]">
                  Role & Services:
                </h4>
                <div className="w-full gap-2 flex items-center">
                  <div className="flex items-start">
                    <span className="text-base text-start  leading-[1] font-portfolio_regular">
                      {workDetails?.role}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <h4 className="text-lg md:text-xl text_background w-full md:w-[250px] font-portfolio_regular pb-2 md:pb-4 border-b border-[rgba(255,255,255,.2)]">
                  Location & Year
                </h4>
                <div className="w-full gap-2 flex items-start">
                  <div className="flex items-start ">
                    <span className="text-base text-start  leading-[1] font-portfolio_regular">
                      Lagos, Nigeria © {workDetails?.period}
                    </span>
                  </div>
                </div>
              </div>
              {workDetails?.github && (
                <div className="w-full flex flex-col gap-4">
                  <h4 className="text-lg md:text-xl text_background w-full md:w-[250px] font-portfolio_regular  pb-2 md:pb-4 border-b border-[rgba(255,255,255,.2)]">
                    Github
                  </h4>
                  <div className="w-full gap-2 flex items-start">
                    <div className="flex z-[4000] relative items-start ">
                      <Link
                        target="_blank"
                        style={{ textDecoration: "underline" }}
                        href={`${workDetails?.github}`}
                        className="text-base text-start  leading-[1] font-portfolio_regular"
                      >
                        View Code
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full mx-auto flex items-end justify-end">
          <div className="w-full mt-8 relative flex">
            {/*    <Image
              width={300}
              height={300}
              src={workDetails?.mainImage} */}
            <img
              src={workDetails?.mainImage}
              alt="imagecontainer for Victor's project"
              className="w-full object-cover"
            />
          </div>
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
      <div className="flex w-[90%] max-w-custom flex-col gap-16 mx-auto">
        <div className="lg:w-[80%] mx-auto flex flex-col gap-6">
          <span
            data-scroll
            data-scroll-speed="2"
            // titleRef
            className=" text-3xl uppercase md:text-5xl"
          >
            <AnimateTextWord type={"largeText"}>Quick Intro</AnimateTextWord>
          </span>
          <div className="grid grid-cols-1 gap-8">
            <div className="w-full flex flex-col gap-12">
              <div className="w-full gap-2 flex items-center">
                <div className="flex items-start">
                  <h4 className=" w-full text-xl md:text-2xl text_background font-portfolio_regular">
                    <AnimateTextWord>{overviewText}</AnimateTextWord>
                  </h4>
                </div>
              </div>
            </div>

            {/* <div className="w-full"></div> */}
          </div>
        </div>
        <div className="w-full">
          <img
            src={workDetails?.overview?.images[0]}
            alt="imagecontainer for Victor's project"
            className="w-full object-cover"
          />
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
      <div className="flex w-[90%] max-w-custom flex-col gap-6 mx-auto">
        <div className="lg:w-[80%] mx-auto flex flex-col gap-6  -mb-10">
          <span
            data-scroll
            data-scroll-speed="2"
            // titleRef
            className="text-3xl md:text-5xl uppercase"
          >
            <AnimateTextWord type={"largeText"}> My Role</AnimateTextWord>
          </span>
          <div className="grid grid-cols-1 gap-12">
            <span className=" w-full text-xl text-grey font-normal md:text-2xl text_background font-portfolio_regular">
              <AnimateTextWord>{overviewText2}</AnimateTextWord>
            </span>
            <div className="grid grid-cols-1 gap-8">
              <div className="w-full flex flex-col md:flex-row items-start gap-12">
                <h4 className="text-lg md:text-xl font-portfolio_regular text-grey">
                  Technology used:
                </h4>
                <div className="flex-1 gap-2 flex items-start">
                  <div className="flex items-start ">
                    <span
                      className="text-base flex flex-wrap items-center gap-2 md:text-lg text_background font-normal text-start
                     leading-[1] font-portfolio_regular text-white"
                    >
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
  const overviewText2 = workDetails?.features?.Description[0];
  return (
    <div className="grid grid-cols-1 mx-auto  gap-20">
      <div className="w-full grid md:grid-cols-2 gap-4">
        {workDetails?.gallery?.map((image, index) => {
          return (
            <div
              key={index}
              className="w-full min-h-[350px] md:min-h-[500px] relative flex"
            >
              <img
                src={image}
                alt="imagecontainer for Victor's project"
                className="w-full object-cover"
              />
            </div>
          );
        })}
      </div>
      <div className="flex w-[90%] max-w-custom flex-col gap-16 mx-auto">
        <div className="lg:w-[80%] mx-auto flex flex-col gap-6 ">
          <span
            data-scroll
            data-scroll-speed="2"
            // titleRef
            className="text-3xl md:text-5xl uppercase"
          >
            <AnimateTextWord type={"largeText"}>Features</AnimateTextWord>
          </span>
          <div className="grid grid-cols-1 gap-12">
            <div className="w-full flex flex-col gap-12">
              <div className="w-full gap-2 flex items-center">
                <div className="flex items-start">
                  <h4
                    ref={container3}
                    className=" w-full text-xl md:text-2xl text_background font-portfolio_regular"
                  >
                    <AnimateTextWord>{overviewText2}</AnimateTextWord>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkUI() {
  const router = useRouter();
  const { workid } = router.query;
  const workDetails = projectdata3.find((data) => data.mainTitle === workid);
  const overviewText5 = workDetails?.ui?.description;

  return (
    <div className="grid grid-cols-1 md:grid-cols-custom_4 mx-auto justify-between gap-y-8 gap-x-12">
      <div className="flex w-[90%] max-w-custom flex-col gap-12 mx-auto">
        <div className="flex flex-col gap-12 w-full">
          <div className="grid grid-cols-1 gap-1">
            {workDetails?.ui?.images?.map((image, index) => {
              return (
                <div key={index} className="w-full relative flex">
                  <img
                    src={image}
                    alt="imagecontainer for Victor's project"
                    className="w-full object-cover"
                  />
                </div>
              );
            })}
          </div>
          <div className="lg:w-[80%] mx-auto flex flex-col gap-6">
            <span className="font-normal flex leading-[1] text-3xl md:text-5xl">
              <AnimateTextWord type={"largeText"}>
                User-Centered Development
              </AnimateTextWord>
            </span>
            <h4 className="w-full mx-auto text-lg md:text-2xl text_background leading-[1.4] font-portfolio_regular ">
              <AnimateTextWord>{overviewText5}</AnimateTextWord>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
function NextWork() {
  const router = useRouter();
  const { workid } = router.query;
  const works = projectdata3.filter((data) => data.mainTitle !== workid);
  // console.log(works);
  return (
    <div className="w-full pt-8">
      <div className="flex w-[90%] max-w-custom flex-col gap-8 mx-auto">
        <h4 className="text-5xl">
          <AnimateTextWord type={"largeText"}>
            See More Projects ⭐️
          </AnimateTextWord>
        </h4>
        <div className="w-full grid md:grid-cols-3 gap-4">
          {works?.slice(0, 3)?.map((work, index) => {
            return (
              <ProjectCard
                type={"smallcard"}
                key={index}
                project={work}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
