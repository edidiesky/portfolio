"use client";
import React, { useEffect, useRef, useState } from "react";
import WorkList from "@/components/common/WorkList";
const Work = () => {
  return (
    <>
      <div className="py-20 md:pb-96 pb-32 mb-40 md:mb-64 w-full relative">
        <div className="w-[100%] md:w-[80%] flex flex-col gap-12 mx-auto">
          <WorkList />
        </div>
      </div>
    </>
  );
};

export default Work;

// <div className="flex w-full flex-col gap-4">
//   <span
//     data-scroll
//     data-scroll-speed="2"
//     // titleRef
//     className="font-normal titleRef titleRef2 text-text_dark_1 flex flex-wrap gap-[10px]
//         uppercase text-5xl xl:text-7xl"
//   >
//     {/* Projects */}
//     <AnimateTextWord>Projects</AnimateTextWord>
//   </span>
//   <h4 className="max-w-[600px] w-full text-lg md:text-xl font-normal uppercase leading-[1.1] ">
//     <AnimateTextWord>{heroWords}</AnimateTextWord>
//   </h4>
// </div>;
