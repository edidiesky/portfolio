import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const Card = ({ data, index, progress, targetScale, range }) => {
  // const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "start start"],
  // });
  // const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  // const cardScale = useTransform(progress, range, [1, targetScale]);
  // return (
  //   <div className="w-full h-screen z-[400] sticky top-0 left-0 flex items-center justify-center">
  //     <div
  //       // ref={containerRef}
  //       // style={{
  //       //   scale: cardScale,
  //       //   background: `${data?.backGroundColor}`,
  //       //   color: `${data?.color}`,
  //       //   top: `calc(25vh + ${index * 30}px) `,
  //       // }}
  //       className="flex flex-col gap-4 p-[20px] rounded-[20px] relative w-full"
  //     >
  //       <Link
  //         className="flex flex-col w-full gap-4"
  //         href={`/work/${data?.mainTitle}`}
  //       >
  //         <div className="flex flex-col gap-4 pb-4 border-b border-[rgba(0,0,0,.2)]">
  //           <div className="w-full font-portfolio_regular flex items-center justify-between">
  //             <span className="text-xl">{data?.year}</span>
  //             <span className="text-2xl">{data?.role}</span>
  //           </div>
  //           <div className="w-full flex items-center justify-between">
  //             <h2 className="text-dark font-portfolio_bold w-full text-3xl lg:text-4xl">
  //               {data?.mainTitle}
  //             </h2>
  //             <FaArrowTrendUp className="text-4xl lg:text-5xl" />
  //           </div>
  //         </div>
  //         <div className="w-full relative overflow-hidden rounded-xl">
  //           <div
  //             // style={{ scale }}
  //             className="w-full relative overflow-hidden"
  //           >
  //             <img
  //               src={data?.mainImage}
  //               alt=""
  //               className="w-full h-full rounded-xl object-cover"
  //             />
  //           </div>
  //         </div>
  //       </Link>
  //     </div>
  //   </div>
  // );
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col gap-4 relative w-full">
        <Link
          className="flex flex-col group w-full gap-8"
          href={`/work/${data?.mainTitle}`}
        >
          <div className="w-full h-[380px] lg:h-[560px] overflow-hidden">
            <div
              style={{
                transition: "all .3s",
              }}
              className="w-full relative h-full group-hover:scale-[1.1] scale-[1] "
            >
              {/* Image width={300}
              height={300}
              src={data?.mainImage} */}
              <Image
                src={data?.mainImage}
                alt=""
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="w-full flex pb-4 md:pb-8 border-b border-[rgba(255,255,255,.09)] items-center justify-between">
              <h2 className="text-dark font-portfolio_regular w-full text-2xl lg:text-3xl">
                {data?.mainTitle}
              </h2>
            </div>
            <div className="w-full flex items-center justify-between">
              <h3 className="text_background font-portfolio_regular w-full text-xl lg:text-2xl">
                {data?.role}
              </h3>
              <span className="text-lg lg:text-xl font-portfolio_regular text_background">
                {data?.year}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
