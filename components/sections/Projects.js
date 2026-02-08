"use client";

import Project_1 from "../project_list/Project_1";
import Project_2 from "../project_list/Project_2";
import ScrollIndicator from "../ui/ScrollButton";

export default function Projects() {
  return (
    <div className="w-full max-w-4xl min-h-screen flex flex-col px-4 sm:px-6 md:px-10 py-8 md:py-12">
      <div className="pt-4 pb-8 text-center text-white/50 text-sm">
        <p className="pb-3 tracking-wide uppercase">recent projects</p>
        <div className="mx-auto h-px w-40 bg-white/10" />
      </div>

      <div className="flex flex-col gap-10">
        
        <Project_2/>
        <Project_1 />

      </div>

      <div className="mt-auto pt-10 flex justify-center">
        <ScrollIndicator targetId="socials" />
      </div>
    </div>
  );
}

