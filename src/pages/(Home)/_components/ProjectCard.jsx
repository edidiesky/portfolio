import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const ProjectCard = ({
  project,
  index,
  addRefs,
  tab,
  setTab,
  setMousePosition,
  mouseposition,
}) => {
  const handleMouseEnter = (e) => {
    setMousePosition({
      active: true,
      index: index,
    });
  };

  const handleMouseLeave = (e) => {
    setMousePosition({
      active: false,
    });
  };

  return (
    <div className="card z-[47] w-full relative">
      <div
        onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        key={index}
        className="w-full group flex items-center relative flex-col gap-12"
      >
        <div
          data-scroll
          data-scroll-speed="1"
          ref={addRefs}
          style={{
            background: `${project?.color}`,
          }}
          className="flex w-full h-[420px] md:h-[450px] lg:h-[450px] items-center justify-center"
        >
          <div data-scroll data-scroll-speed="2" className="w-[80%]">
            <img src={project?.image} alt="" className="w-full" />
          </div>
        </div>
        <div className="flex w-full flex-col gap-8">
          <h3 className="text-6xl flex items-start text-text_dark_1 flex-col gap-4 justify-between font-portfolio_bold">
            <span
              data-scroll
              data-scroll-speed="2"
              className="border-b border-[rgba(0,0,0,.2)] text-text_dark_1 pb-4 w-full"
            >
              {project?.text}
            </span>
            <span
              data-scroll
              data-scroll-speed="2"
              className="text-3xl flex font-portfolio_semibold items-center justify-between w-full"
            >
              Development
              <span>{project?.year}</span>
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
