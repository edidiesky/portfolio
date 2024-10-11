"use client";
import { projectdata3 } from "@/constants/data/projectdata";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "@/pages/(Home)/_components/ProjectCard";
import Card from "../animations/Card";
const WorkList = ({ index, setTab, tab, type }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  if (type === "work") {
    return (
      <div className="w-full relative grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-20 justify-between">
        {projectdata3.map((x, index) => {
          return (
            <ProjectCard
        
              project={x}
              key={index}
              index={index}
            />
          );
        })}
      </div>
    );
  }
  return (
    // <div ref={containerRef} className="w-full md:w-[85%] mx-auto relative">
    //   {/* {projectdata3.map((x, index) => {
    //     return (
    //       <ProjectCard
    //         setTab={setTab}
    //         tab={tab}
    //         project={x}
    //         key={index}
    //         index={index}
    //       />
    //     );
    //   })} */}
    //   {projectdata3.map((data, index) => {
    //     const targetScale = 1 - (projectdata3.length - 1) * 0.009;
    //     return (
    //       <Card
    //         progress={scrollYProgress}
    //         targetScale={targetScale}
    //         range={[index * 0.25, 1]}
    //         data={data}
    //         index={index}
    //         key={`p_${index}`}
    //       />
    //     );
    //   })}
    // </div>
    <div className="w-full relative grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-16">
      {projectdata3.slice(0,4).map((x, index) => {
        return <Card data={x} key={index} index={index} />;
      })}
    </div>
  );
};

export default WorkList;
