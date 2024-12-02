"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
const GalleryImageList = [
  "/images/gallery/image_1.jpeg",
  "/images/gallery/image_2.jpeg",
  "/images/gallery/image_7.jpeg",
  "/images/gallery/image_8.jpeg",
  "/images/gallery/image_12.jpeg",
  "/images/gallery/image_6.jpeg",
  //   "/images/gallery/image_1.jpeg",
  // "/images/gallery/image_2.jpeg",
  // "/images/gallery/image_3.jpeg",
  // "/images/gallery/image_4.jpeg",
  // "/images/gallery/image_5.jpeg",
  // "/images/gallery/image_6.jpeg",
  // "/images/gallery/image_7.jpeg",
  // "/images/gallery/image_8.jpeg",
  // "/images/gallery/image_9.jpeg",
  // "/images/gallery/image_10.jpeg",
  // "/images/gallery/image_11.jpeg",
  // "/images/gallery/image_12.jpeg",
  // "/images/gallery/image_13.jpeg",
  // "/images/gallery/image_1.jpeg",
];

const Gallery = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  return (
    <>
      <div
        data-scroll
        className="w-full overflow-hidden py-8 pb-16 md:pb-32 flex flex-col gap-4"
      >
        <div ref={container} className="w-full flex flex-col gap-8">
          <Sliders
            GalleryImageList={GalleryImageList}
            // left={"-56%"}
            progress={scrollYProgress}
            // direction={"left"}
          />
        </div>
      </div>
    </>
  );
};
const Sliders = ({ GalleryImageList, progress }) => {
  // const newdirection = direction === "left" ? -1 : 1;
  const x = useTransform(
    progress,
    [0, 1],
    [0, -200]
  );
  return (
    <>
      <motion.div
        style={{ x }}
        className="relative w-[190vw] flex gap-4"
      >
        {GalleryImageList?.map((image, index) => {
          return <ImageGallery key={index} images={image} />;
        })}
      </motion.div>
    </>
  );
};

const ImageGallery = ({ images }) => {
  return (
    <div className="relative w-[500px] h-[360px]">
      <Image src={images} alt="" fill className="w-full h-full object-cover" />
    </div>
  );
};

export default Gallery;
