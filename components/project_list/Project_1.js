import React from 'react'
import ProjectCard from './ProjectCard';

export default function Project_1(){

  const title = 'Feedify';
  const tech = ["react", "prisma", "openai"];

  const desc = 'custom Youtube feed to escape the chaotic default homepage';

  const features = [
    {
        img: "/p1/S3.png",
        text: `• Create your own Clean, distraction-free feed
               • Get AI summary before you get into a video`,
    }
  ];

  const app_link = 'https://yt-project-fawn.vercel.app/yourlist';
  const git_link = 'https://github.com/MinusOne-01/yt_project';



  return (
    <div>
      <ProjectCard
            title={title}
            tech={tech}
            description={desc}            
            features={features}
            app_link={app_link}
            git_link={git_link}
      />
    </div>
  )
}