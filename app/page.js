import Main_head from "@/components/Main_head";
import Project_1 from "@/components/Project_1";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0d0d0d] flex flex-col items-center justify-center">

      <div>
        <Main_head/>
      </div>

      <div>
        <Project_1/>
      </div>
    
    </div>
  );
}
