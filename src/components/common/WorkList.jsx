"use client";
import React, { useEffect, useRef, useState } from "react";
import { projectdata } from "@/constants/data/projectdata";
import ProjectCard from "@/pages/(Home)/_components/ProjectCard";
const WorkList = ({setMousePosition, index, setTab, tab}) => {
  return (
    <div className="w-full relative pt-20 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24 justify-between">
      {projectdata.map((x, index) => {
        return (
          <ProjectCard
            setTab={setTab}
            tab={tab}
            project={x}
            key={index}
            index={index}
            setMousePosition={setMousePosition}
          />
        );
      })}
    </div>
  );
};

export default WorkList;
