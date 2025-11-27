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
      className="relative w-full max-w-md mx-auto border border-neutral-800 
                 rounded-2xl p-6 cursor-pointer overflow-hidden 
                 transition-colors duration-300"
    >
      {/* Background Banner */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: open ? 0 : 0.25 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 z-10"
      >
        {/* <Image
          src={banner}
          alt="Project banner"
          fill
          className={`object-cover transition-all duration-300 ${
            open ? "blur scale-105" : "blur scale-110"
          }`}
        /> */}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-4 relative z-10">
        {title}
      </h2>

      {/* Tech Logos */}
      <div className="relative z-10 flex justify-center gap-3 mb-2">
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

      {/* Expandable Content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden mt-4 relative z-10"
          >
            {/* Main description */}
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {description}
            </p>

            {/* Carousel wrapper */}
            <div className="flex items-center gap-4">
              
              {/* Showcase Image */}
              <div className="w-1/2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Image
                      src={features[index].img}
                      alt="feature"
                      width={300}
                      height={300}
                      className="rounded-xl"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Showcase Description */}
              <div className="w-1/2 text-white/80 text-sm">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.25 }}
                  >
                    {features[index].text}
                  </motion.p>
                </AnimatePresence>

                {/* Arrows */}
                <div className="flex gap-4 mt-4">
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

            {/* Visit link */}
            <a
              href={link}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="text-sm text-blue-400 hover:text-blue-300 underline block mt-4"
            >
              Visit App →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
