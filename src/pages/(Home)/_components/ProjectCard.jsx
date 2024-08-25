import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
const ProjectCard = ({ project, index, setMousePosition, type }) => {

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

  if (type === "smallcard") {
    return (
      <div className="w-full">
        <Link
          href={`/work/${project?.mainTitle}`}
          className="card z-[40] w-full relative"
        >
          <div
            key={index}
            className="w-full group flex items-center relative flex-col gap-4"
          >
            <div className="w-full h-[240px] overflow-hidden">
              <img
                style={{ transition: "all .6s var(--primary-curve)" }}
                src={project?.mainImage}
                alt=""
                className="w-full group-hover:scale-[1.2] object-cover"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <h3
                className="text-lg md:text-xl gap-4 flex items-start 
               text-text_dark_1 flex-col justify-between font-portfolio_bold2"
              >
                <span
                  data-scroll
                  data-scroll-speed="2"
                  className="border-b  border-[rgba(0,0,0,.2)]
                    text-text_dark_1 w-full"
                >
                  {project?.mainTitle}
                </span>
                <span
                  data-scroll
                  data-scroll-speed="2"
                  className="text-sm flex font-portfolio_regular
                    text=[var(--dark-1)] opacity-[0.4] items-center 
                    justify-between w-full"
                >
                  {project?.role}
                  <span>{project?.period}</span>
                </span>
              </h3>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Link
        onMouseEnter={handleMouseEnter}
        href={`/work/${project?.mainTitle}`}
        className="card z-[40] w-full relative"
      >
        <div
          key={index}
          className="w-full group flex items-center relative flex-col gap-12"
        >
          <img
            src={project?.mainImage}
            alt=""
            className="w-full md:h-[500px] object-cover"
          />
          <div className="flex w-full flex-col gap-8">
            <h3 className="text-4xl md:text-5xl flex items-start text-text_dark_1 flex-col gap-4 justify-between font-portfolio_bold2">
              <span
                data-scroll
                data-scroll-speed="2"
                className="border-b font-portfolio_bold border-[rgba(0,0,0,.2)] text-text_dark_1 pb-4 w-full"
              >
                {project?.mainTitle}
              </span>
              <span
                data-scroll
                data-scroll-speed="2"
                className="text-lg flex font-portfolio_normal text=[var(--dark-1)] opacity-[0.4] items-center justify-between w-full"
              >
                {project?.role}
                <span>{project?.period}</span>
              </span>
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
