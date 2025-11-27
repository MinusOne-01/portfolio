import React from 'react'
import Main_cards from "@/components/Main_cards";

export default function Project_1(){

  const features=[
    {
      img: "/p1/ss1.png",
      text: "Create notes instantly with keyboard shortcuts."
    },
    {
      img: "/p1/ss2.png",
      text: "Organize notes by tags and categories easily."
    },
    {
      img: "/p1/ss3.png",
      text: "Fast search to find anything in milliseconds."
    },
  ];

  return (
    <div>
      <Main_cards
            title="it's yourFeed"
            tech={["react", "prisma", "tailwindcss"]}
            description="A super minimal notes app focused on speed and privacy"
            link="https://yt-project-fawn.vercel.app/yourlist"
            features={features}
      />
    </div>
  )
}

