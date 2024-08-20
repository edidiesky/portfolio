"use client"

import AnimateTextWord from "@/components/animations/AnimateTextWord";
import { aboutText1, ctatext5 } from "@/constants/data/text";
import {
  skillslist,
  InterpersonalSkillList,
  experienceList,
} from "@/constants/data/text";
import Word from "@/components/animations/Word";

const Skills = () => {

  return (
    <div data-scroll className="py-32 md:py-40 flex flex-col gap-24">
      <div className="w-[90%] md:px-4 m-auto max-w-custom grid md:grid-cols-custom_2 gap-16">
        <div className="w-[100px]"></div>
        <div className="flex flex-col gap-12">
          <div className="w-full grid md:grid-cols-custom gap-16">
            <div className="w-full grid lg:grid-cols-2 gap-8">
              <div className="w-full"></div>
              <h4 className=" w-full uppercase text-lg lg:text-xl leading-[1.4] text-text_dark_1 ">
                <Word children={aboutText1} />
              </h4>
            </div>
            <div className="w-[200px]"></div>
          </div>
          <div className="w-full flex flex-col gap-20">
            <div className="w-full grid grid-cols-2 gap-4">
              <h4 className="w-full text-start uppercase text-lg text-dark opacity-[.4]">
                <AnimateTextWord
                  children={"TOOLS AND SERVICES"}
                />
              </h4>
            </div>
            <div className="w-full grid md:grid-cols-1 gap-12">
              {/* InterpersonalSkillList */}
              <div className="w-full flex flex-col gap-8">
                <h4 className="w-full text-start uppercase flex items-center justify-between text-2xl md:text-3xl text-[#Fff]">
                  <AnimateTextWord
                    type={"largeText"}
                    children={"Development TOOLS"}
                  />
                </h4>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skillslist?.map((skill, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full flex items-center gap-4 justify-between text-sm border-b border-[rgba(255,255,255,.1)] pb-4 font-portfolio_regular text-grey"
                      >
                        {skill}
                        <span className="w-2 h-2 rounded-md bg-[rgba(255,255,255,.1)]"></span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full flex flex-col gap-8">
                <h4 className="w-full text-start uppercase flex items-center justify-between text-2xl md:text-3xl text-[#Fff]">
                  <AnimateTextWord
                    type={"largeText"}
                    children={"Development TOOLS"}
                  />
                </h4>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
                  {InterpersonalSkillList?.map((skill, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full uppercase flex items-center gap-4 justify-between text-sm border-b border-[rgba(255,255,255,.1)] pb-4 font-portfolio_regular text-grey"
                      >
                        {skill}
                        <span className="w-2 h-2 rounded-md bg-[rgba(255,255,255,.1)]"></span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] md:px-4 py-12 md:py-20 m-auto max-w-custom grid md:grid-cols-custom_2 gap-16">
        <div className="w-[100px]"></div>
        <div className="w-full flex flex-col gap-16">
          <div className="w-full grid md:grid-cols-custom gap-16">
            <div className="w-full grid lg:grid-cols-2 gap-8">
              <div className="w-full"></div>
              <h4 className=" w-full uppercase text-lg lg:text-xl leading-[1.4] text-text_dark_1 ">
                <Word children={aboutText1} />
              </h4>
            </div>
            <div className="w-[200px]"></div>
          </div>
          <div className="w-full grid grid-cols-1 gap-4">
            <div className="w-full flex flex-col">
              {experienceList?.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="w-full uppercase grid grid-cols-3 items-center gap-4 justify-between
                       text-sm md:text-base lg:text-xl border-b border-[rgba(255,255,255,.1)] py-8 font-portfolio_normal text-grey"
                  >
                    <span>{skill?.title}</span>
                    <span>{skill?.position}</span>
                    <span className="flex justify-end items-center gap-4">
                      {skill?.date}
                      <span className="w-2 h-2 rounded-md bg-[rgba(255,255,255,.1)]"></span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
