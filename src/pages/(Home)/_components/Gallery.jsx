"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const GalleryImageList = [
  "/images/car-1.JPG",
  "/images/twitter_14.JPG",
  "/images/car_10.JPG",
  "/images/twitter_10.JPG",
  "/images/airbnb_5.JPG",
  "/images/airbnb_16.JPG",
  "/images/quantify_1.JPG",
  "/images/quantify_3.JPG",
  "/images/car-1.JPG",
  "/images/twitter_14.JPG",
  "/images/car_10.JPG",
  "/images/twitter_10.JPG",
  "/images/airbnb_5.JPG",
  "/images/airbnb_16.JPG",
  "/images/quantify_1.JPG",
  "/images/quantify_3.JPG",

  "/images/car-1.JPG",
  "/images/twitter_14.JPG",
  "/images/car_10.JPG",
  "/images/twitter_10.JPG",
  "/images/airbnb_5.JPG",
  "/images/airbnb_16.JPG",
  "/images/quantify_1.JPG",
  "/images/quantify_3.JPG",
];

const GalleryImageList2 = [
  "/images/twitter_15.JPG",
  "/images/twitter_3.JPG",
  "/images/twitter_4.JPG",
  "/images/twitter_14.JPG",
  "/images/twitter_10.JPG",

  "/images/twitter_14.JPG",

  "/images/twitter_15.JPG",
  "/images/twitter_3.JPG",
  "/images/twitter_4.JPG",
  "/images/twitter_14.JPG",
  "/images/twitter_10.JPG",

  "/images/twitter_14.JPG",

  "/images/twitter_15.JPG",
  "/images/twitter_3.JPG",
  "/images/twitter_4.JPG",
  "/images/twitter_14.JPG",
  "/images/twitter_10.JPG",

  "/images/twitter_14.JPG",
];

const Gallery = () => {
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
        <div ref={container} className="w-full flex flex-col gap-8">
          <Sliders
            GalleryImageList={GalleryImageList}
            left={"-56%"}
            progress={scrollYProgress}
            direction={"left"}
          />
          <Sliders
            GalleryImageList={GalleryImageList2}
            left={"-16%"}
            progress={scrollYProgress}
            direction={"right"}
          />
        </div>
      </div>
    </>
  );
};
const Sliders = ({ GalleryImageList, left, progress, direction }) => {
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
        className="relative w-full flex whitespace-nowrap gap-[20px]"
      >
        {GalleryImageList?.map((image, index) => {
          return <ImageGallery images={image} />;
        })}
      </motion.div>
    </>
  );
};

const ImageGallery = ({ images, title }) => {
  return (
    <>
      <img src={images} alt="" className="w-[300px] md:w-[400px] object-cover" />
    </>
  );
};

export default Gallery;
