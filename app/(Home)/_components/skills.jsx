import React, { useLayoutEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { BiPlus } from "react-icons/bi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AccordionIndex from "./accordion";
gsap.registerPlugin(ScrollTrigger);
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
const Skills = () => {
  const [expanded, setExpanded] = useState(0);
  const refs = useRef([]);
  refs.current = [];

  const headerref = useRef([]);
  headerref.current = [];

  const descriptionrefs1 = useRef(null);
  const numberref = useRef(null);
  const descriptionrefs2 = useRef([]);
  descriptionrefs2.current = [];

  useLayoutEffect(() => {
    const headertext_1 = new SplitType(".service_text");

    refs.current.forEach((ref, index) => {
      const text = new SplitType(ref);
      const textrefelement_1 = text?.words;
      const textrefelement_2 = text?.words;
      gsap.fromTo(
        index === 1 ? textrefelement_1 : textrefelement_2,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text?.words,
          },
        }
      );
    });

    descriptionrefs2.current.forEach((ref) => {
      const text = new SplitType(ref);
      const textrefelement_1 = text?.lines;
      gsap.fromTo(
        textrefelement_1,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 2,
          ease: "power3.out",

          scrollTrigger: {
            trigger: textrefelement_1,
            start: "top bottom-=100",
          },
        }
      );
    });

    const text2 = new SplitType(descriptionrefs1?.current);
    const textrefelement_2 = text2?.words;

    const numberref1 = new SplitType(numberref?.current);
    const numberrefelement = numberref1?.words;
    gsap.fromTo(
      numberrefelement,
      { opacity: 0, x: -100 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.13,
        // delay:1,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: numberrefelement,
        },
      }
    );

    headerref.current?.forEach((el) => {
      const text = new SplitType(el);
      const textrefelement_1 = text?.chars;
      gsap.fromTo(
        textrefelement_1,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          // delay:1,
          duration: 0.6,
          scrollTrigger: {
            trigger: textrefelement_1,
          },
        }
      );
    });

    gsap.fromTo(
      headertext_1?.chars,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: headertext_1?.chars,
        },
      }
    );
  }, []);

  const addtoRefs = (ref) => {
    if (ref && !refs.current.includes(ref)) {
      refs.current.push(ref);
    }
  };

  const addtoDescriptionRefs = (ref) => {
    if (ref && !descriptionrefs2.current.includes(ref)) {
      descriptionrefs2.current.push(ref);
    }
  };

  const adHeaderdRefs = (el) => {
    if (el && !headerref?.current?.includes(el)) {
      headerref.current.push(el);
    }
  };

  return (
    <>
      <div data-scroll className="py-32 flex flex-col gap-20">
        <div className="w-full px-8 m-auto max-w-custom items-start grid grid-cols-1 lg:grid-cols-custom_3 gap-16 ">
          <div className="w-full">
            <h3 className="text-sm md:text-lg mt-12 font-portfolio_bold text-text_dark_1 w-full gap-2 justify-between flex items-center font-normal uppercase">
              <span ref={adHeaderdRefs}>03/</span>
            </h3>
          </div>
          <div className="w-full flex flex-col gap-24">
            <div className="w-full items-start md:items-end md:justify-end flex flex-col gap-20">
              <h4 className="service_text w-full text-start  uppercase text-4xl leading-[1.2] font-portfolio_bold1 text-text_dark_1 ">
                SERVICES I OFFER
              </h4>
              <div className="w-full flex flex-col">
                {serviceslist?.map((x, index) => {
                  return (
                    <AccordionIndex
                      x={x}
                      key={index}
                      index={index}
                      expanded={expanded}
                      setExpanded={setExpanded}
                    />
                  );
                })}
              </div>
              <div className="w-full md:w-[700px] mt-12">
                <div className="w-full  md:px-8 max-w-custom items-start grid grid-cols-1 lg:grid-cols-custom_3 gap-16 ">
                  <div className="w-full">
                    <h3 className="text-sm md:text-lg mt-20 font-portfolio_bold text-text_dark_1 w-full gap-2 justify-between flex items-center font-normal uppercase">
                      <span ref={adHeaderdRefs}>04/</span>
                    </h3>
                  </div>
                  <div className="w-full flex flex-col gap-4">
                    <h4
                      ref={addtoRefs}
                      className="about_text2 w-full text-start text-4xl leading-[1.2] font-portfolio_bold1 text-text_dark_1 "
                    >
                      SKILLS I BRING
                    </h4>
                    <h5 className="text-xl leading-[1.6] font-portfolio_semibold">
                      My skills range from conceptual design to technical
                      implementation, enabling me to transfer unique designs
                      into the digital realm, where they can be admired by a
                      broad audience.
                    </h5>
                    <div className="w-full flex items-start mt-6 flex-col flex-wrap gap-4">
                      {skillslist?.map((x, index) => {
                        return (
                          <div className="font-portfolio_bold1 flex items-center gap-4 text-lg">
                            {index + 1}. <span>{x}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-24 items-start md:items-end md:justify-end flex flex-col gap-6">
              <h4 className="service_text w-full text-start  uppercase text-4xl leading-[1.2] font-portfolio_bold1 text-text_dark_1 ">
                HOW I EVOLVED
              </h4>
              <h5 className="text-xl leading-[1.6] font-portfolio_semibold">
                Beyond freelancing, I also gained valuable experience, in roles{" "}
                <strong className="font-portfolio_semibold font-bold">
                  demanding full time role and freelancing
                </strong>
                , at various companies for which I am very grateful.
              </h5>
              <div className="w-full flex flex-col gap-8 mt-16">
                <h4 className="text-3xl font-portfolio_bold1 flex items-start gap-4 font-medium">
                  1.{" "}
                  <div className="flex flex-col gap-4">
                    <span className="uppercase">FrontEnd Developer</span>
                    <span className="block text-2xl font-portfolio_semibold">
                      Bitnorm
                    </span>
                    <span className="block text-xl font-portfolio_semibold">
                      2022-2024
                    </span>
                  </div>
                </h4>

                <h4 className="text-3xl font-portfolio_bold1 flex items-start gap-4 font-medium">
                  2.{" "}
                  <div className="flex flex-col gap-4">
                    <span className="uppercase">Software Developer</span>
                    <span className="block text-2xl font-portfolio_semibold">
                      Palkeeper (Freelancer)
                    </span>
                    <span className="block text-xl font-portfolio_semibold">
                      2021-2022
                    </span>
                  </div>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
