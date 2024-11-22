"use client";
import Link from "next/link";
import WorkList from "@/components/common/WorkList";
import AnimateTextWord from "@/components/animations/AnimateTextWord";
import Magnetic from "@/components/animations/Magnetic";
const Work = () => {
  return (
    <>
      <div className="py-12 w-full relative">
        <div className="w-[90%] max-w-custom flex flex-col gap-12 md:gap-24 mx-auto">
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
          <div className="w-full flex mt-8 justify-between gap-8 items-center">
            <span className="block text-xl text_background max-w-[500px] capitalize md:text-3xl">
              <AnimateTextWord>
                I still got more projects for your perusal!
              </AnimateTextWord>
            </span>
            <Link
              style={{ transition: "all .4s" }}
              href={"/work" }
              className="w-[200px] md:w-[230px] open_to_work h-[50px] md:h-[65px] flex items-center
                   justify-center text-[#000] text-base md:text-lg font-normal rounded-full font-portfolio_regular overflow-hidden
                    bg-[#fff]"
            >
              <Magnetic bgColor={"#dcdcdc"}>View More Works</Magnetic>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
