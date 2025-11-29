"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({title, tech, description, link, features}){
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % features.length);
  const prev = () => setIndex((i) => (i - 1 + features.length) % features.length);

  return (

    <motion.div
      onClick={() => setOpen(!open)}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="border border-neutral-800 rounded-2xl
                cursor-pointer overflow-hidden 
                transition-colors duration-300"
    >
      <div className="w-[80vw] lg:max-w-2xl flex flex-col items-center justify-center gap-3">
          {/* Title */}
          <h2 className="mt-5 text-2xl font-bold z-10 text-center">
            {title}
          </h2>

          {/* Tech Logos */}
          <div className="z-10 flex justify-center gap-3 mb-5">
            {tech.map((icon, idx) => (
              <Image
                key={idx}
                src={`/icons/${icon}.svg`}
                alt={icon}
                width={26}
                height={26}
                className="opacity-80 invert"
              />
            ))}
          </div>
      </div>

      {/* Expandable Content //testing//*/}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden z-10"
          >

          <div className="w-[80vw] lg:max-w-2xl flex flex-col items-center justify-center gap-3 px-3">  
            {/* Main description */}
            <p className="text-white/70 text-sm leading-relaxed mb-4 text-center mt-2 px-5">
              {description}
            </p>

            {/* Carousel wrapper */}
            <div className="flex flex-row items-center gap-4 w-full">
              
              {/* Showcase Image */}
              <div className="w-1/2">
                <div className="relative w-full aspect-9/18 overflow-hidden rounded-xl">
                 <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Image
                        src={features[index].img}
                        alt="feature"
                        fill
                        className="object-cover rounded-xl"
                      />
                    </motion.div>
                  </AnimatePresence> 
                </div>
              </div>


              {/* Showcase Description */}
              <div className="w-1/2">

              <div className="w-full aspect-9/18">
                
                <div className="h-[80%] py-20">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={index}
                    className="text-center text-white/80 text-sm"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.25 }}
                  >
                    {features[index].text}
                  </motion.p>
                </AnimatePresence>
                </div>

                {/* Arrows */}
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    className="px-3 py-1 bg-neutral-800 rounded-md hover:bg-neutral-700"
                  >
                    ←
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    className="px-3 py-1 bg-neutral-800 rounded-md hover:bg-neutral-700"
                  >
                    →
                  </button>
                </div>

                </div>
              </div>
            </div>

            {/* Visit link */}
            <a href={link}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-4 py-2 mt-3 mb-7 text-sm
                        text-white bg-neutral-800/70
                        border border-neutral-700
                        rounded-lg
                        hover:bg-black-700 hover:border-neutral-500
                        transition-all duration-300 group"
            >
              Visit App
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            </div>  
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
