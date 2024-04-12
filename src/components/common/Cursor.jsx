import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const Cursor = () => {
  const [mouseposition, setMousePosition] = useState({
    xPosition: 0,
    yPosition: 0,
  });
  const mouseRef = useRef(null);
  const handleMouseMovement = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({
      xPosition: clientX - 10,
      yPosition: clientY - 10,
    });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMovement);
    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);

  const mouseMotionVariants = {
    initial: {
      x: mouseposition.xPosition,
      y: mouseposition.yPosition,
      // transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    default: {
      x: mouseposition.xPosition,
      y: mouseposition.yPosition,
      // transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <motion.div
      style={{
        top: `${mouseposition.yPosition}px`,
        left: `${mouseposition.xPosition}px`,
        transition: "transform 2s cubic-bezier(0.76, 0, 0.24, 1)",
      }}
      className={`rounded-full bg-[#000] z-50 h-[20px] w-[20px] cursor-none fixed top-0 left-0`}
    ></motion.div>
  );
};

export default Cursor;
