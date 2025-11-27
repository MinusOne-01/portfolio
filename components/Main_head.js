import React from 'react'
import { Inter, Outfit, Poppins } from "next/font/google";
const my_font = Inter({ subsets: ["latin"], weight: ["900"] });

export default function Main_head(){
  return (
    <div className={`${my_font.className} min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6`}>
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-center">
        hey, it’s Minus-1 here.
      </h1> 

      <p className="text-lg sm:text-xl max-w-[700px] text-center text-white/60">
        building simple solutions to everyday problems
      </p>
    
    </div>
  )
}

