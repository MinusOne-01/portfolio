import React from 'react'
import ProjectCard from './ProjectCard';

export default function Project_1(){

  const title = 'Feedify';
  const tech = ["react", "prisma", "openai"];

  const desc = "A distraction-free YouTube feed with AI-powered video summaries";

  const features = [
    {
        img: "https://citysync-uploads-2026.s3.eu-north-1.amazonaws.com/meetups/portfolio/S3.png",
        text: `• Build a custom feed based on your interests
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

