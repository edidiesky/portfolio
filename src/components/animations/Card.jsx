import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FaArrowTrendUp } from "react-icons/fa6";
const Card = ({ data, index, progress, targetScale, range }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);
  return (
    <div className="w-full h-screen z-[400] sticky top-0 left-0 flex items-center justify-center">
      <motion.div
        ref={containerRef}
        style={{
          scale: cardScale,
          background: `${data?.backGroundColor}`,
          color: `${data?.color}`,
          top: `calc(50vh + ${index * 30}px) `,
        }}
        className="flex flex-col gap-4 p-[20px] rounded-[20px] relative w-full"
      >
        <Link
          className="flex flex-col w-full gap-4"
          href={`/work/${data?.mainTitle}`}
        >
          <div className="flex flex-col gap-4 pb-4 border-b border-[rgba(0,0,0,.2)]">
            <div className="w-full font-portfolio_regular flex items-center justify-between">
              <span className="text-xl">{data?.year}</span>
              <span className="text-2xl">{data?.role}</span>
            </div>
            <div className="w-full flex items-center justify-between">
              <h2 className="text-dark font-portfolio_bold w-full text-3xl md:text-4xl">
                {data?.mainTitle}
              </h2>
              <FaArrowTrendUp className="text-4xl md:text-5xl" />
            </div>
          </div>
          <div className="w-full relative overflow-hidden rounded-xl">
            <motion.div
              style={{ scale }}
              className="w-full relative overflow-hidden"
            >
              <img
                src={data?.mainImage}
                alt=""
                className="w-full h-full rounded-xl object-cover"
              />
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Card;
