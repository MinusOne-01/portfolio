import React from 'react'
import Main_cards from "@/components/Main_cards";

export default function Project_1(){

  const title = 'its yourFeed';
  const tech = ["react", "prisma", "openai"];

  const desc = 'custom Youtube feed to escape the chaotic default homepage';

  const features = [
    {
        img: "/p1/ss1.png",
        text: `Just one click to add the channels you love
              • Browse a clean, distraction-free feed
              • No flashy thumbnails
              • No random recommendations
              • Only the channels you choose`,
    },
    {
      img: "/p1/ss2.png",
      text: `Get an instant AI summary
              so you know exactly what you're getting into
              before you hit play`,
    },
    {
      img: "/p1/ss3.png",
      text: `• Watch videos directly
             • Create custom groups to organise your feed
             • Filter videos by how recent they are`,
    },
  ];

  const app_link = 'https://yt-project-fawn.vercel.app/yourlist';
  const git_link = 'https://github.com/MinusOne-01/yt_project';



  return (
    <div>
      <Main_cards
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

