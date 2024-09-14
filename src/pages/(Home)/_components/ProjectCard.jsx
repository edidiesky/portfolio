import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
const ProjectCard = ({ project, index, type }) => {
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
            <div className="w-full h-[200px] overflow-hidden">
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
        href={`/work/${project?.mainTitle}`}
        className="card z-[20] w-full relative"
      >
        <div
          style={{ transition: "all .3s ease-out" }}
          key={index}
          className="w-full group h-[500px] rounded-[20px] overflow-hidden hover:rounded-[50%]
           flex items-center relative flex-col gap-12"
        >
          <div
            style={{ transition: "all .3s ease-out" }}
            className="w-full h-[100%] group-hover:rounded-[50%] rounded-[20px] overflow-hidden"
          >
            <img
              style={{ transition: "all .3s ease-out" }}
              src={project?.mainImage}
              alt=""
              className="w-full h-full group-hover:scale-[1.2] object-cover"
            />
          </div>
          <div className="flex p-4 w-full absolute flex-col gap-8">
            <h3 className=" flex text-text_dark_1 items-center gap-4 justify-between font-portfolio_bold2">
              <span
                data-scroll
                data-scroll-speed="2"
                className="font-portfolio_bold text-2xl md:text-3xl border-[rgba(0,0,0,.2)] text-text_dark_1"
              >
                {project?.mainTitle}
              </span>
              <div className="flex items-start flex-wrap gap-2">
                <span
                  data-scroll
                  data-scroll-speed="2"
                  className="text-sm md:text-base flex font-portfolio_normal text-[var(--dark-1)] py-4 bg-white justify-center rounded-full px-6 items-center"
                >
                  {project?.role}
                </span>
                <span
                  data-scroll
                  data-scroll-speed="2"
                  className="text-sm md:text-base flex font-portfolio_normal text-[var(--dark-1)] py-4 bg-white justify-center rounded-full px-6 items-center"
                >
                  Web
                </span>
              </div>
            </h3>
          </div>
          <div className="absolute w-full h-full flex items-center justify-center">
            <Link
              style={{ transition: "all .6s ease-out" }}
              href={`/work/${project?.mainTitle}`}
              className="w-32 h-32  rounded-[50%] relative shadow-2xl bg-white flex items-center 
              justify-center opacity-0 top-40 group-hover:opacity-[1] group-hover:top-0 text-[#000] text-5xl md:text-5xl font-bold"
            >
              GO
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
