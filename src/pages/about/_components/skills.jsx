import React, { useLayoutEffect, useRef, useState } from "react";
import { opacity, slideup, slideup2, slideup3 } from "@/constants/utils/framer";
import { motion, useInView } from "framer-motion";
import AccordionIndex from "./accordion";
const skillslist = [
  "TYPESCRIPT",
  "PRISMA",
  "NODEJS",
  "EXPRESSJS",
  "REACT",
  "REDUX",
  "CONTEXT-API",
  "TAILWIND.CSS",
  // "SOLANA",
  "HTML",
  "NEXTJS",
  "GIT",
  "GSAP",
  "FRAMER-MOTION",
];

const serviceslist = [
  {
    id: 1,
    title: "Front End Development / engineering",
    description: "I plan build, test, and maintain scalable web applications",
  },
  {
    id: 2,
    title: "Backend Development /engineering",
    description:
      "I can build REST API for your web products at a very fast pace with testing associated. ",
  },
  {
    id: 3,
    title: "Creative Implementation",
    description:
      "I build layouts and interactions optimizing for performance and usabilty.",
  },

  {
    id: 4,
    title: "Unit Testing and Integration Testing",
    description:
      "I can write unit test and integration test for your web applications that deals with React and Typescript",
  },
];

const experienceList = [
  {
    title: "Nimbly Technologies",
    position: "Frontend Developer",
    date: "2023-2024",
    location: "Indonesia",
  },
  {
    title: "Hysolate",
    position: "Frontend Developer",
    date: "2022-2023",
    location: "Tel-Aviv",
  },
  {
    title: "Billpocket",
    position: "Frontend Developer",
    date: "2021-2022",
    location: "Mexico City",
  },
  {
    title: "GoTrendier",
    position: "Backend Developer",
    date: "2021 - 2022",
    location: "Colombia",
  },
  {
    title: "Flink",
    position: "Software Developer",
    date: "2020-2021",
    location: "Mexico",
  },
  // {
  //   title: "KonnecTo StartUp",
  //   position: "Frontend Developer",
  //   date: "2020-2021",
  //   location: "Tel-Aviv",
  // },
];
const heroWords2 = `SERVICES I OFFER`;
const heroWords3 = `SKILLS I BRING`;
const heroWords4 = `HOW I EVOLVED`;
const skillDescriptionText =
  "My skills range from conceptual design to technical implementation, enabling me to transfer unique designs  into the digital realm, where they can be admired by a broad audience.";
const skillDescriptionText2 =
  "Beyond freelancing,I also gained valuable experience,in roles demanding full time role and freelancing,at various companies for which I am very grateful.";
const Skills = () => {
  const [expanded, setExpanded] = useState(0);
  const container = useRef(null);
  const inView = useInView(container);

  const container2 = useRef(null);
  const inView2 = useInView(container2, {
    margin: "0px 100px -50px 0px",
  });

  const skillText = useRef(null);
  const inView3 = useInView(skillText);

  const skillText2 = useRef(null);
  const inView5 = useInView(skillText2);
  const skillText3 = useRef(null);
  const inView6 = useInView(skillText3);

  const container3 = useRef(null);
  const inView4 = useInView(container3, {
    margin: "0px 100px -50px 0px",
  });

  const container5 = useRef(null);
  const inView7 = useInView(container5);

  const container6 = useRef(null);
  const inView8 = useInView(container6);
  return (
    <>
      <div data-scroll className="py-32 flex flex-col gap-20">
        <div className="w-full px-8 m-auto max-w-custom items-start grid grid-cols-1 lg:grid-cols-custom_3 gap-16 ">
          <div className="w-full">
            <h3 className="text-sm md:text-lg mt-12 font-portfolio_bold text-text_dark_1 w-full gap-2 justify-between flex items-center font-normal uppercase">
              <span>03/</span>
            </h3>
          </div>
          <div className="w-full flex flex-col gap-24">
            <div className="w-full items-start md:items-end md:justify-end flex flex-col gap-20">
              <h4
                ref={container}
                className="w-full text-start  uppercase text-8xl md:text-8xl leading-[1.2] font-portfolio_bold1 text-text_dark_1 font-normal text-text_dark_1 flex flex-wrap gap-[14px] justify-end lg:items-center "
              >
                {heroWords2.split(" ").map((x, index) => {
                  return (
                    <span
                      key={index}
                      className="flex hide relative items-center justify-start"
                    >
                      <motion.span
                        variants={slideup2}
                        custom={index}
                        initial="initial"
                        animate={inView ? "animate" : "exit"}
                      >
                        {x}
                      </motion.span>
                    </span>
                  );
                })}
              </h4>
              <div ref={container6} className="w-full flex flex-col">
                {serviceslist?.map((x, index) => {
                  return (
                    <AccordionIndex
                      x={x}
                      key={index}
                      index={index}
                      expanded={expanded}
                      setExpanded={setExpanded}
                      view={inView8}
                    />
                  );
                })}
              </div>
              <div className="w-full md:w-[700px] mt-12">
                <div className="w-full  md:px-8 max-w-custom items-start grid grid-cols-1 lg:grid-cols-custom_3 gap-16 ">
                  <div className="w-full">
                    <h3 className="text-sm md:text-lg mt-20 font-portfolio_bold text-text_dark_1 w-full gap-2 justify-between flex items-center font-normal uppercase">
                      <span>04/</span>
                    </h3>
                  </div>
                  <div className="w-full flex flex-col gap-4">
                    <h4
                      ref={container2}
                      className="w-full text-start  uppercase text-4xl sm:text-5xl lg:text-8xl leading-[1.2] font-portfolio_bold1 text-text_dark_1 font-normal text-text_dark_1 flex flex-wrap gap-[14px] justify-end lg:items-center "
                    >
                      {heroWords3.split(" ").map((x, index) => {
                        return (
                          <span
                            key={index}
                            className="flex hide relative items-center justify-start"
                          >
                            <motion.span
                              variants={slideup2}
                              custom={index}
                              initial="initial"
                              animate={inView2 ? "animate" : "exit"}
                            >
                              {x}
                            </motion.span>
                          </span>
                        );
                      })}
                    </h4>
                    <h5
                      ref={skillText}
                      className="text-4xl flex flex-wrap gap-x-[16px] gap-y-[10px] leading-[1] font-portfolio_semibold"
                    >
                      {skillDescriptionText.split(" ").map((x, index) => {
                        return (
                          <span
                            key={index}
                            className="inline-flex hide relative"
                          >
                            <motion.span
                              variants={slideup}
                              custom={index}
                              initial="initial"
                              animate={inView3 ? "animate" : "exit"}
                            >
                              {x}
                            </motion.span>
                          </span>
                        );
                      })}
                    </h5>
                    <div
                      ref={skillText3}
                      className="w-full text-4xl font-portfolio_bold1 flex items-start mt-6 flex-col flex-wrap gap-4"
                    >
                      {skillslist?.map((x, index) => {
                        return (
                          <span
                            key={index}
                            className="flex hide relative items-center justify-start"
                          >
                            <motion.span
                              variants={slideup2}
                              custom={index}
                              initial="initial"
                              animate={inView6 ? "animate" : "exit"}
                            >
                              {index + 1}. <span>{x}</span>
                            </motion.span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-24 items-start md:justify-start flex flex-col gap-6">
              <h4
                ref={container3}
                className="w-full text-start  uppercase text-6xl sm:text-7xl lg:text-8xl leading-[1.2] font-portfolio_bold1 text-text_dark_1 font-normal text-text_dark_1 flex flex-wrap gap-x-[8px] gap-y-[10px] justify-start lg:items-center"
              >
                {heroWords4.split(" ").map((x, index) => {
                  return (
                    <span
                      key={index}
                      className="flex hide relative items-center justify-start"
                    >
                      <motion.span
                        variants={slideup2}
                        custom={index}
                        initial="initial"
                        animate={inView4 ? "animate" : "exit"}
                      >
                        {x}
                      </motion.span>
                    </span>
                  );
                })}
              </h4>
              <h5
                ref={skillText2}
                className="text-4xl md:text-4xl flex flex-wrap gap-x-[16px] gap-y-[10px] leading-[1] font-portfolio_semibold w-[90%] md:w-[60%]"
              >
                {skillDescriptionText2.split(" ").map((x, index) => {
                  return (
                    <span key={index} className="inline-flex hide relative">
                      <motion.span
                        variants={slideup}
                        custom={index}
                        initial="initial"
                        animate={inView5 ? "animate" : "exit"}
                      >
                        {x}
                      </motion.span>
                    </span>
                  );
                })}
              </h5>
              <div
                ref={container5}
                className="w-full flex flex-col gap-12 mt-16"
              >
                {experienceList?.map((x, index) => {
                  return (
                    <motion.h4
                      key={index}
                      variants={slideup3}
                      custom={index}
                      initial="initial"
                      animate={inView7 ? "animate" : "exit"}
                      className="text-5xl font-portfolio_bold1 flex items-start gap-4 font-medium"
                    >
                      {index + 1}.{" "}
                      <div className="flex flex-col gap-2">
                        <span className="">{x?.position}</span>
                        <span className="block text-3xl font-portfolio_semibold">
                          {x.title} ({x.location})
                        </span>
                        <span className="block text-2xl font-light text-grey font-portfolio_semibold">
                          {x.date}
                        </span>
                      </div>
                    </motion.h4>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
