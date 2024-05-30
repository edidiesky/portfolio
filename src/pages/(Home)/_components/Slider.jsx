"use client";
import React, { useRef, useState } from "react";
import { opacity, slideup, slideup2, slideup3 } from "@/constants/utils/framer";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
const Slider = () => {
  const container = useRef(null);
  const inView = useInView(container);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  return (
    <>
      <div
        data-scroll
        className="w-full overflow-hidden py-16 flex flex-col gap-4"
      >
        <div ref={container} className="w-full">
          <Sliders
            images={"/profile_6.JPG"}
            left={"-56%"}
            progress={scrollYProgress}
            direction={"left"}
          />
          <Sliders
            images={"/profile_7.JPG"}
            left={"-16%"}
            progress={scrollYProgress}
            direction={"right"}
          />
          <Sliders
            images={"/profile_8.JPG"}
            left={"-26%"}
            progress={scrollYProgress}
            direction={"left"}
          />
        </div>
      </div>
    </>
  );
};
const Sliders = ({ images, left, progress, direction }) => {
  const newdirection = direction === "left" ? -1 : 1;
  const x = useTransform(
    progress,
    [0, 1],
    [-250 * newdirection, 250 * newdirection]
  );
  return (
    <>
      <motion.div
        style={{ left, x }}
        data-scroll
        className="relative w-full flex whitespace-nowrap gap-32"
      >
        <Phrase images={images} title={"Full Stack Developer"} />
        <Phrase images={images} title={"Freelance Developer"} />
        <Phrase images={images} title={"Full Stack Developer"} />
        <Phrase images={images} title={"Full Stack Developer"} />
        <Phrase images={images} title={"Freelance Developer"} />
        <Phrase images={images} title={"Full Stack Developer"} />
      </motion.div>
    </>
  );
};

const Phrase = ({ images, title }) => {
  return (
    <>
      <div data-scroll className="w-full flex items-center gap-4">
        <p className="text-4xl md:text-6xl font-portfolio_bold1 font-bold">{title}</p>
        <img
          src={images}
          alt=""
          className="rounded-full w-[120px] h-[120px] object-cover"
        />
      </div>
    </>
  );
};

export default Slider;
