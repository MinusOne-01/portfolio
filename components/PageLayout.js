import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Socials from "@/components/sections/Socials";

const sectionBase =
  "relative min-h-screen w-full snap-start flex px-6";

export default function PageLayout() {
  return (
    <main id="page-scroll" className="w-full bg-[#0d0d0d] text-white overflow-y-auto snap-y snap-proximity">
      <section id="hero" className={`${sectionBase} items-center justify-center`}>
        <Hero />
      </section>

      <section id="projects" className={`${sectionBase} justify-center`}>
        <Projects />
      </section>

      <section id="socials" className={`${sectionBase} items-center justify-center`}>
        <Socials />
      </section>
    </main>
  );
}

