import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { slideup3 } from "@/constants/utils/framer";
const ProjectCard = ({
  project,
  index,
  addRefs,
  tab,
  setTab,
  setMousePosition,
  mouseposition,
}) => {
  const workCard = useRef(null)
   const inView = useInView(workCard, {
     margin: "0px 100px -120px 0px",
   });
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
    <motion.div
      variants={slideup3}
      custom={index}
      initial="initial"
      animate={inView ? "animate" : "exit"}
      ref={workCard}
      className="w-full"
    >
      <Link
        onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
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
    </motion.div>
  );
};

export default ProjectCard;
