'use client'

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({title, tech, description, git_link, app_link, features}){
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % features.length);
  const prev = () => setIndex((i) => (i - 1 + features.length) % features.length);

  const handleClick = () => {
    setOpen((prev) => {
      const nextOpen = !prev;

      if (!prev && cardRef.current) {
        console.log('scroll trigger')
        setTimeout(() => {
        const y = cardRef.current.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }, 120);
      }

      return nextOpen;
    });
  };


  return (
    
    <motion.div
      ref={cardRef}
      onClick={handleClick}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="border border-neutral-800 rounded-2xl cursor-pointer overflow-hidden transition-colors duration-300 mb-10"
    >
      <div className="hidden">
        {features.map((f) => (
          <Image key={f.img} src={f.img} alt="" width={10} height={10} />
        ))}
      </div>

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

          <div className="w-[80vw] lg:max-w-2xl flex flex-col items-center justify-center gap-3 px-5">  
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
                
                <div className="h-[80%] overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={index}
                    className="text-center text-white/60 text-[9px] md:text-sm whitespace-pre-line leading-relaxed" 
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

            {/* git and app_link buttons */}
            <div className="flex items-center justify-center gap-5">
            <a href={git_link}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 mt-3 mb-7 
                        px-3 py-2 text-xs
                        sm:px-4 sm:py-2 sm:text-sm
                        text-white bg-neutral-800/70
                        border border-neutral-700
                        rounded-lg
                        hover:bg-black-700 hover:border-neutral-500
                        transition-all duration-300 group"
            >
              Checkout Git repo
            </a>
            <a href={app_link}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 mt-3 mb-7
                        px-3 py-2 text-xs
                        sm:px-4 sm:py-2 sm:text-sm
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

            </div>  
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
