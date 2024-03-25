"use client";
import React, { useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
const Word = ({ x, opacity }) => {
  return (
    <span className="mt-4 mr-4 relative">
      <motion.span className="absolute opacity-[0.1] text-white left-0 top-0">
        {x}
      </motion.span>
      <motion.span className="text-white relative" style={{ opacity }}>
        {x}
      </motion.span>
    </span>
  );
};

export default Word;
