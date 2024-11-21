"use client";

import AnimateTextWord from "@/components/animations/AnimateTextWord";
import { aboutText1, skillDescriptionText2 } from "@/constants/data/text";
import {
  skillslist,
  InterpersonalSkillList,
  experienceList,
} from "@/constants/data/text";
import Word from "@/components/animations/Word";
// 1. Cherry

const Skills = () => {
  return (
    <div data-scroll className="py-20 flex flex-col gap-24">
      <div className="w-[90%] mx-auto max-w-custom grid gap-8">
        <div className="flex flex-col gap-24">
          <div className="w-full grid md:grid-cols-custom gap-8">
            <div className="w-full grid lg:grid-cols-1 gap-8">
              <div className="w-full"></div>
              <h4
                className=" w-full  max-w-[616px] flex items-center gap-4 text-lg
               lg:text-2xl font-portfolio_regular leading-[1.4] text-text_dark_1 "
              >
                <AnimateTextWord>{aboutText1}</AnimateTextWord>
              </h4>
            </div>
            <div className="w-[100px]"></div>
          </div>
          <div className="w-full flex flex-col gap-20">
            <div className="w-full grid md:grid-cols-1 gap-12">
              <div className="w-full flex flex-col gap-8">
                <h4
                  className="w-full text-start uppercase text_background
                 flex items-center text-2xl md:text-3xl text-[var(--light-grey)]"
                >
                  <AnimateTextWord type={"largeText"}>
                    My Tech Stack
                  </AnimateTextWord>
                  {/* <div className="w-full h-[2px] bg-[rgba(255,255,255,.3)]"></div> */}
                </h4>
                <div className="w-full grid grid-cols-2 md:grid-cols-5 md:items-center gap-x-8 gap-y-12 md:gap-y-20">
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
                        <h4 className="text-base md:text-lg text-center text-white font-portfolio_regular">
                          {skill?.title}

                          <span className="text-sm capitalize md:text-lg block font-portfolio_regular font-normal text-[var(--dark-grey)] pt-3">
                            {skill?.role}
                          </span>
                        </h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] md:px-4 md:pt-8 m-auto max-w-custom grid gap-8">
        <div className="w-[100px]"></div>
        <div className="w-full flex flex-col gap-8">
          <div className="w-full grid md:grid-cols-custom gap-8">
            <div className="w-full grid gap-8">
              <h4 className=" w-full text-2xl max-w-[600px] lg:text-2xl font-portfolio_regular leading-[1.4] text-text_dark_1 ">
                <Word>{skillDescriptionText2}</Word>
              </h4>
            </div>
            <div className="w-[160px]"></div>
          </div>
          <div className="w-full grid grid-cols-1 gap-2">
            <h4 className="w-full text-start uppercase text-xl md:text-2xl text-dark opacity-[.4]">
              <AnimateTextWord>Work experience</AnimateTextWord>
            </h4>
            <div className="w-full grid grid-cols-1 gap-4">
              <div className="w-full flex flex-col">
                {experienceList?.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full flex md:flex-row flex-col md:items-center gap-4 justify-between
                       text-sm md:text-base lg:text-2xl font-normal border-b border-[rgba(255,255,255,.1)] py-8 md:py-12 font-portfolio_regular text-grey"
                    >
                      <div className="flex-1 flex flex-col gap-3">
                        <span className="text-3xl">
                          {skill?.title} as{" "}
                          <span className="">{skill?.position}</span>
                        </span>
                        <span className="flex-1 max-w-[600px] text-base text_background gap-4">
                          {skill?.role}
                        </span>
                      </div>
                      <span className="text-end">{skill?.date}</span>
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
