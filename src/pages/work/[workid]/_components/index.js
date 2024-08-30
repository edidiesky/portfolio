"use client";
import React from "react";
import Hero from "./WorkDetails";
import Footer from "@/components/common/Footer";

export default function WorkDetails({params}) {
  return (
    <div className="relative">
      <div className='z-30 w-full'>
        <Hero />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
