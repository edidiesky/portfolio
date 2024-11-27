"use client";

import AnimateTextWord from "@/components/animations/AnimateTextWord";
import { aboutText1, skillDescriptionText2 } from "@/constants/data/text";
import {
  skillslist,
  experienceList,
} from "@/constants/data/text";

const Skills = () => {
  return (
    <div data-scroll className="py-20 flex flex-col gap-24">
      <div className="w-[90%] mx-auto max-w-custom grid gap-8">
        <div className="flex flex-col gap-24 justify-end">
          <h4 className="text-4xl lg:text-6xl uppercase w-full font-portfolio_regular leading-[1.2] titleRef text-[#fff]">
            <div className="md:max-w-[500px]">
              {" "}
              <AnimateTextWord >
                My Tech Stack
              </AnimateTextWord>{" "}
            </div>
            {/* <sup className="text-2xl md:text-4xl">4</sup> */}
            <div className="w-full pt-3 lg:grid-cols-2 grid gap-4">
              <div className="w-full"></div>
              <span className="block text-xl text_background max-w-[600px] capitalize lg:text-3xl">
                <AnimateTextWord>{aboutText1}</AnimateTextWord>
              </span>
            </div>
          </h4>
          <div className="w-full grid grid-cols-2 justify-end md:grid-cols-4 md:items-center gap-x-8 gap-y-8 md:gap-y-12">
            {skillslist?.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col gap-4 items-center justify-center font-portfolio_regular text-grey"
                >
                  <div className="w-8 h-8 flex items-center justify-center relative">
                    <img
                      src={
                        "https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png"
                      }
                      className="w-full z-10 h-full absolute opacity-[.1]"
                    />
                    <img src={skill?.icons} alt="" className="z-20" />
                  </div>
                  <h4 className="text-lg md:text-2xl text-center text-white font-portfolio_regular">
                    {skill?.title}

                    <span className="text-base capitalize md:text-xl block font-portfolio_regular font-normal text-[var(--dark-grey)] pt-3">
                      {skill?.role}
                    </span>
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto max-w-custom grid gap-8">
        <div className="w-[100px]"></div>
        <div className="w-full flex flex-col gap-8 md:gap-12">
          <h4 className="text-4xl lg:text-6xl uppercase w-full font-portfolio_regular leading-[1.2] titleRef text-[#fff]">
            <div className="md:max-w-[500px]">
              {" "}
              <AnimateTextWord >
                Work experience
              </AnimateTextWord>{" "}
            </div>
            {/* <sup className="text-2xl md:text-4xl">4</sup> */}
            <div className="w-full pt-3 lg:grid-cols-2 grid gap-4">
              <div className="w-full"></div>
              <span className="block text-xl text_background max-w-[600px] capitalize lg:text-3xl">
                <AnimateTextWord>{skillDescriptionText2}</AnimateTextWord>
              </span>
            </div>
          </h4>
      
          <div className="w-full grid grid-cols-1 gap-2">
            <div className="w-full grid grid-cols-1 gap-4">
              <div className="w-full flex flex-col">
                {experienceList?.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full flex md:flex-row flex-col md:items-center gap-4 justify-between
                       text-lg lg:text-2xl font-normal border-b border-[rgba(255,255,255,.1)] py-8 md:py-12 font-portfolio_regular text-grey"
                    >
                      <div className="flex-1 flex flex-col gap-3">
                        <div className="text-3xl gap-2">
                          <AnimateTextWord >
                            {skill?.title}
                          </AnimateTextWord>
                          <AnimateTextWord>{skill?.position}</AnimateTextWord>
                        </div>
                        <span className="flex-1 max-w-[600px] text-base lg:text-lg text_background gap-4">
                          <AnimateTextWord>{skill?.role}</AnimateTextWord>
                        </span>
                      </div>
                      <span className="text-end">
                        <AnimateTextWord>{skill?.date}</AnimateTextWord>
                      </span>
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
};

export default Skills;
