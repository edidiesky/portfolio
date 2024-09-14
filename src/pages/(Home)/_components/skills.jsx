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
      <div className="w-[90%] md:w-[78%] m-auto max-w-custom grid gap-16">
        <div className="flex flex-col gap-24">
          <div className="w-full grid md:grid-cols-custom gap-16">
            <div className="w-full grid lg:grid-cols-1 gap-8">
              <div className="w-full"></div>
              <h4 className=" w-full  max-w-[600px] flex items-center gap-4 text-2xl lg:text-3xl font-semibold leading-[1.4] text-text_dark_1 ">
                <Word>{aboutText1}</Word>
              </h4>
            </div>
            <div className="w-[100px]"></div>
          </div>
          <div className="w-full flex flex-col gap-20">
            <div className="w-full grid md:grid-cols-1 gap-12">
              <div className="w-full flex flex-col gap-16">
                <h4 className="w-full text-start uppercase flex items-center text-2xl md:text-3xl text-[var(--light-grey)]">
                  <AnimateTextWord type={"largeText"}>
                    My Tech Stack
                  </AnimateTextWord>
                  <div className="w-full h-[2px] bg-[rgba(255,255,255,.3)]"></div>
                </h4>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 md:items-center gap-x-8 gap-y-12 md:gap-y-20">
                  {skillslist?.map((skill, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full flex flex-col gap-4 justify-between text-xl font-portfolio_regular text-grey"
                      >
                        <div className="w-20 h-20 flex items-center justify-center relative">
                          <img
                            src={
                              "https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png"
                            }
                            className="w-full z-10 h-full absolute opacity-[.1]"
                          />
                          <img src={skill?.icons} alt="" className="z-20" />
                        </div>
                        <h4 className="text-lg md:text-xl font-bold text-[var(--light-grey)] font-portfolio_normal">
                          {skill?.title}

                          <span className="text-base md:text-lg block font-portfolio_regular font-normal text-[var(--dark-grey)] pt-3">
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
      <div className="w-[90%] md:w-[78%] md:px-4 md:pt-16 m-auto max-w-custom grid gap-16">
        <div className="w-[100px]"></div>
        <div className="w-full flex flex-col gap-16">
          <div className="w-full grid md:grid-cols-custom gap-16">
            <div className="w-full grid gap-8">
              <h4 className=" w-full  font-semibold  text-2xl max-w-[600px] lg:text-3xl leading-[1.4] text-text_dark_1 ">
                <Word>{skillDescriptionText2}</Word>
              </h4>
            </div>
            <div className="w-[160px]"></div>
          </div>
          <div className="w-full grid grid-cols-1 gap-4">
            <h4 className="w-full text-start uppercase text-xl md:text-2xl text-dark opacity-[.4]">
              <AnimateTextWord>Work experience</AnimateTextWord>
            </h4>
            <div className="w-full grid grid-cols-1 gap-4">
              <div className="w-full flex flex-col">
                {experienceList?.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full capitalize grid md:grid-cols-3 items-center gap-4 justify-between
                       text-sm md:text-base lg:text-2xl font-normal border-b border-[rgba(255,255,255,.1)] py-8 md:py-20 font-portfolio_normal text-grey"
                    >
                      <span className="flex justify-start md:items-center gap-4">
                        {skill?.date}
                      </span>
                      <span className="text_background flex flex-col md:items-center md:justify-center gap-1">
                        <span className="text-3xl md:text-center">{skill?.title}</span>
                        <span className="text-lg md:text-center">{skill?.position}</span>
                      </span>
                      <span className="flex text-base text_background justify-end items-center gap-4">
                        {skill?.role}
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
