"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({
  title,
  tech = [],
  description,
  git_link,
  app_link,
  features = [],
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const cardRef = useRef(null);
const previousScrollYRef = useRef(null);

  const hasFeatures = Array.isArray(features) && features.length > 0;
  const safeIndex = hasFeatures ? index % features.length : 0;
  const activeFeature = hasFeatures ? features[safeIndex] : null;
  const SNAP_LOCK_ATTR = "data-card-open";

const setSnapLocked = (locked) => {
  const root = document.getElementById("page-scroll");
  if (!root) return;
  if (locked) root.setAttribute(SNAP_LOCK_ATTR, "true");
  else root.removeAttribute(SNAP_LOCK_ATTR);
};

useEffect(() => {
  return () => setSnapLocked(false);
}, []);


  const next = () => {
    if (!hasFeatures) return;
    setIndex((i) => (i + 1) % features.length);
  };

  const prev = () => {
    if (!hasFeatures) return;
    setIndex((i) => (i - 1 + features.length) % features.length);
  };

  const animateScrollTo = (targetY, duration = 650) => {
  const startY = window.scrollY;
  const diff = targetY - startY;
  const start = performance.now();

  // smooth, subtle ease
  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + diff * eased);

    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};


const toggleOpen = () => {
  setOpen((prevOpen) => {
    const nextOpen = !prevOpen;

    if (nextOpen) {
      setSnapLocked(true);
      previousScrollYRef.current = window.scrollY;

      if (cardRef.current) {
        setTimeout(() => {
          const y = cardRef.current.getBoundingClientRect().top + window.scrollY - 100;
          animateScrollTo(y, 700); // open

        }, 120);
      }
    } else {
      if (previousScrollYRef.current !== null) {
        const restoreY = previousScrollYRef.current;
        setTimeout(() => {
          animateScrollTo(restoreY, 700); // close

        }, 100);
      }

      // unlock after close + scroll settle
      setTimeout(() => setSnapLocked(false), 450);
    }

    return nextOpen;
  });
};



  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleOpen();
    }
  };

  return (
    <motion.div
      layout
      ref={cardRef}
      onClick={toggleOpen}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 140, damping: 20 }}

      className="border border-neutral-800 rounded-2xl cursor-pointer overflow-hidden transition-colors duration-300 mb-10"
    >
      <div className="w-full lg:max-w-2xl mx-auto flex flex-col items-center justify-center gap-3">
        <h2 className="mt-5 text-2xl font-bold text-center">{title}</h2>

        <div className="flex justify-center gap-3 mb-5">
          {tech.map((icon) => (
            <Image
              key={icon}
              src={`/icons/${icon}.svg`}
              alt={icon}
              width={26}
              height={26}
              className="opacity-80 invert"
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="w-full lg:max-w-2xl mx-auto flex flex-col items-center justify-center gap-3 px-5">
              <p className="text-white/70 text-sm leading-relaxed mb-4 text-center mt-2 px-2">
                {description}
              </p>

              {hasFeatures ? (
  <div className="flex flex-col items-center gap-5 w-full">
    {/* Showcase Image */}
    <div className="w-full">
      <div className="relative w-full aspect-[1438/824] overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={safeIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.998 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0.998 }}
transition={{ duration: 0.3, ease: "easeOut" }}







          >
            <Image
              src={activeFeature.img}
              alt={`${title} screenshot ${safeIndex + 1}`}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 92vw, (max-width: 1280px) 80vw, 900px"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>

    {/* Showcase Description */}
    <div className="w-full max-w-xl">
      <AnimatePresence mode="wait">
        <motion.p
          key={safeIndex}
          className="text-center text-white/60 text-sm whitespace-pre-line leading-relaxed"
          initial={{ opacity: 0, scale: 0.998 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0.998 }}
transition={{ duration: 0.3, ease: "easeOut" }}


        >
          {activeFeature.text}
        </motion.p>
      </AnimatePresence>
    </div>

    {/* Arrows */}
    <div className="flex items-center justify-center gap-4">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="px-3 py-1 bg-neutral-800 rounded-md hover:bg-neutral-700"
        aria-label="Previous feature"
      >
        {"<"}
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="px-3 py-1 bg-neutral-800 rounded-md hover:bg-neutral-700"
        aria-label="Next feature"
      >
        {">"}
      </button>
    </div>
  </div>
) : (
  <p className="text-white/50 text-sm mb-4">No feature screenshots added yet.</p>
)}


              <div className="flex items-center justify-center gap-5 flex-wrap">
                {git_link && (
                  <a
                    href={git_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 mt-3 mb-7 px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm text-white bg-neutral-800/70 border border-neutral-700 rounded-lg hover:bg-neutral-700 hover:border-neutral-500 transition-all duration-300"
                  >
                    See Git repo
                  </a>
                )}

                {app_link && (
                  <a
                    href={app_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 mt-3 mb-7 px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm text-white bg-neutral-800/70 border border-neutral-700 rounded-lg hover:bg-neutral-700 hover:border-neutral-500 transition-all duration-300 group"
                  >
                    Visit App
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {"->"}
                    </span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
