"use client"
import React, { useEffect } from 'react';
import Lenis from "@studio-freight/lenis";
const SmoothScroll = ({children}) => {
    useEffect(()=> {
        const lenis = new Lenis()
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    },[])
    return children

}

export default SmoothScroll