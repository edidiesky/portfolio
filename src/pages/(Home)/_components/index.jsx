"use client";
import React from "react";
import Hero from "./Hero";
import Work from "./Work";
import Cta from "./Cta";
import Skills from "./skills";

export default function HomeIndex() {
  return (
    <div className=" w-full">
      <Hero />
      <Work />
      <Cta />
      <Skills />
    </div>
  );
}
