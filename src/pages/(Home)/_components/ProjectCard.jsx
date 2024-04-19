import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
    <Link href={`/work/${project?.mainTitle}`} className="card z-[40] w-full relative">
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
            background: `${project?.backGroundColor}`,
          }}
          className="flex overflow-hidden w-full h-[360px] md:h-[450px] lg:h-[500px] items-center justify-center"
        >
          <div
            style={{ transition: "all .4s ease" }}
            data-scroll
            data-scroll-speed="2"
            className="w-[85%] group-hover:scale-[1.1]"
          >
            <img
              src={project?.mainImage}
              alt=""
              className="w-full"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-8">
          <h3 className="text-5xl md:text-6xl flex items-start text-text_dark_1 flex-col gap-4 justify-between font-portfolio_bold">
            <span
              data-scroll
              data-scroll-speed="2"
              className="border-b border-[rgba(0,0,0,.2)] text-text_dark_1 pb-4 w-full"
            >
              {project?.mainTitle}
            </span>
            <span
              data-scroll
              data-scroll-speed="2"
              className="text-3xl flex font-portfolio_semibold items-center justify-between w-full"
            >
              {project?.role}
              <span>{project?.period}</span>
            </span>
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
