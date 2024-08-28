"use client";
import React from "react";
import Hero from "./Hero";
import Footer from "@/components/common/Footer";

export default function WorkPage() {
  return (
    <div className=" relative">
      <div className="w-full z-[40]">
        <Hero />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
