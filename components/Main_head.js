'use client'

import React from 'react'
import { Inter, Outfit, Poppins } from "next/font/google";
const my_font = Inter({ subsets: ["latin"], weight: ["900"] });

export default function Main_head(){

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className={`${my_font.className} min-h-screen flex flex-col items-center justify-center gap-4 px-6`}>

      {/* hero title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-center">
        hey, it’s Minus-1 here.
      </h1> 

      <p className="text-lg sm:text-xl max-w-[700px] text-center text-white/60">
        building simple solutions to everyday problems
      </p>

     {/* scroll icon */}
     <div onClick={scrollDown} className="absolute bottom-12 flex flex-col items-center text-white/50">
      <div className="h-10 w-px bg-white/20 mb-1"></div>
      <svg
        className="w-5 h-5 animate-bounce"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    </div>
  )
}

