import React from "react";
import { Inter } from "next/font/google";
import ScrollIndicator from "../ui/ScrollButton";

const myFont = Inter({ subsets: ["latin"], weight: ["900"] });

export default function Hero() {
  return (
    <div className={`${myFont.className} w-full min-h-[100svh] flex flex-col px-6`}>
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-center">
          hey, it&apos;s <span className="whitespace-nowrap">Minus-1 </span> here.
        </h1>

        <p className="text-lg sm:text-xl max-w-[700px] text-center text-white/60">
          building simple solutions to everyday problems
        </p>
      </div>

      <div className="pb-12 sm:pb-16 md:pb-20 flex justify-center">
        <ScrollIndicator targetId="projects" />
      </div>
    </div>
  );
}
