import Main_head from "@/components/Main_head";
import Project_1 from "@/components/Project_1";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0d0d0d] flex flex-col items-center justify-center">

      <section>
        <Main_head/>
      </section>

      <section className="pt-20 pb-10 text-center text-white/50 text-sm">
        <p className="pb-3 tracking-wide uppercase">recent projects I made</p>
        <div className="mx-auto h-px w-40 bg-white/10"></div>
      </section>
      
      <section className='min-h-screen'>

        <Project_1/>
        
      </section>
      
      <section>
        <Footer/>
      </section>
    
    </div>
  );
}
