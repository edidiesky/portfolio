import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const mouseRef = useRef(null);

  const handleMouseMovement = (e) => {
    const { clientX, clientY } = e;
    mouseRef.current.style.left = clientX + "px";
    mouseRef.current.style.top = clientY + "px";
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMovement);
    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);

  return (
    <motion.div
      style={{ transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)" }}
      ref={mouseRef}
      className="rounded-full bg-[#000] z-50 h-[20px] w-[20px] fixed"
    />
  );
};

export default Cursor;
