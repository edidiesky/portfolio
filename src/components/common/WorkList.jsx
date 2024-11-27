"use client";
import React, { useState } from "react";
import { projectdata3 } from "@/constants/data/projectdata";
import Card from "../animations/Card";
import Cursor from "./Cursor";
const WorkList = () => {
  const [mouseposition, setMousePosition] = useState({
    active: false,
    index: 0,
  });

  return (
    <>
      <div className="w-full relative grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-32">
        {projectdata3.slice(0, 4).map((x, index) => {
          return (
            <Card
              setMousePosition={setMousePosition}
              data={x}
              key={index}
              index={index}
            />
          );
        })}
      </div>
      <Cursor mouseposition={mouseposition} />
    </>
  );
};

export default WorkList;
