"use client";
import WorkList from "@/components/common/WorkList";
import AnimateTextWord from "@/components/animations/AnimateTextWord";

const Work = () => {
  return (
    <>
      <div className="py-12 w-full relative">
        <div className="w-[90%] max-w-custom_1 flex flex-col gap-12 md:gap-24 mx-auto">
          <h4 className="text-4xl lg:text-6xl uppercase w-full font-portfolio_regular leading-[1.2] titleRef text-[#fff]">
            <div className="md:max-w-[560px]">
              {" "}
              <AnimateTextWord type="largeText">
                Some of My Selected Works
              </AnimateTextWord>{" "}
            </div>
            {/* <sup className="text-2xl md:text-4xl">4</sup> */}
            <div className="w-full pt-3 lg:grid-cols-2 grid gap-4">
              <div className="w-full"></div>
              <span className="block text-xl text_background max-w-[500px] capitalize md:text-3xl">
                <AnimateTextWord>
                  Featured projects that have been meticulously crafted with
                  passion to drive results and impact
                </AnimateTextWord>
              </span>
            </div>
          </h4>
          <WorkList />
        </div>
      </div>
    </>
  );
};

export default Work;

// <div className="flex w-full flex-col gap-4">
//   <span
//     data-scroll
//     data-scroll-speed="2"
//     // titleRef
//     className="font-normal titleRef titleRef2 text-text_dark_1 flex flex-wrap gap-[10px]
//         uppercase text-5xl xl:text-7xl"
//   >
//     {/* Projects */}
//     <AnimateTextWord>Projects</AnimateTextWord>
//   </span>
//   <h4 className="max-w-[600px] w-full text-lg md:text-xl font-normal uppercase leading-[1.1] ">
//     <AnimateTextWord>{heroWords}</AnimateTextWord>
//   </h4>
// </div>;
