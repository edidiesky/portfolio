"use client";
import React from "react";
import Hero from "./Hero";
import Work from "./Work";
import Cta from "./Cta";
import Skills from "./skills";
import Gallery from "./Gallery";

export default function HomeIndex() {
  return (
    <div className=" w-full">
      <Hero />
      <Gallery/>
      <Work />
      <Cta />
      <Skills />
    </div>
  );
}
