"use client";
import AnimateTextWord from "@/components/animations/AnimateTextWord";
import { motion } from "framer-motion";
import WorkList from "@/components/common/WorkList";
export default function Hero() {
  const heroWords1 =
    "I help startups and series A—D teams to establish a strong connection between their product and customers";
  const heroTextslideup1 = {
    initial: {
      opacity: 0,
      y: "100%",
    },
    animate: (i) => ({
      opacity: 1,
      y: "0",
      transition: {
        duration: 2,
        delay: i * 0.06,
        ease: [0.62, 0.05, 0.01, 0.99],
      },
    }),
    exit: {
      opacity: 0,
      // y: '100%',
      y: "100%",
    },
  };
  return (
    <>
      <div
        data-scroll
        className="min-h-[60vh] py-28 md:py-40  flex items-center justify-center"
      >
        <div
          className="w-[90%] mx-auto flex flex-col gap-48
         px-2 max-w-custom"
        >
          <span
            data-scroll
            data-scroll-speed="2"
            className="font-normal max-w-[1100px] hero_text2 flex flex-wrap
                 gap-[8px] lg:gap-[12px] items-center justify-start 
                text-4xl lg:text-7xl
                w-full leading-[1.2] font-portfolio_bold"
          >
            {/* A Software Developer who crafts captivating digital experiences. */}
            {heroWords1.split(" ").map((x, index) => {
              return (
                <span
                  key={index}
                  className="flex hide  items-center justify-start"
                >
                  <motion.span
                    variants={heroTextslideup1}
                    custom={index}
                    initial="initial"
                    animate={"animate"}
                  >
                    {x}
                  </motion.span>
                </span>
              );
            })}
          </span>
          <div className="w-[100%] flex flex-col gap-12 md:gap-24 mx-auto">
            <h4 className="text-4xl lg:text-6xl uppercase w-full font-portfolio_regular leading-[1.2] titleRef text-[#fff]">
              <div className="md:max-w-[560px]">
                {" "}
                <AnimateTextWord>Here are All of My Works</AnimateTextWord>{" "}
              </div>
              {/* <sup className="text-2xl md:text-4xl">4</sup> */}
              <div className="w-full pt-3 lg:grid-cols-2 grid gap-4">
                <div className="w-full"></div>
                <span className="block text-xl text_background max-w-[500px] capitalize lg:text-3xl">
                  <AnimateTextWord>
                    All of my projects that have been meticulously crafted with
                    passion to drive results and impact
                  </AnimateTextWord>
                </span>
              </div>
            </h4>
            <WorkList type={"work"} />
          </div>
        </div>
      </div>
    </>
  );
}
