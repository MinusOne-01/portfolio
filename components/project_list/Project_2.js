import React from 'react'
import ProjectCard from './ProjectCard';

export default function Project_2(){

  const title = 'CitySync';
  const tech = ["nodejs", "redis", "aws", "map"];

  const desc = "A scalable, location-based meetup platform with geospatial feeds and event-driven background processing";


  const features = [
    {
        img: "https://citysync-uploads-2026.s3.eu-north-1.amazonaws.com/meetups/portfolio/C1.png",
        text: `• Location-aware feeds built using Redis-backed background workers`,
    },
    {
      img: "https://citysync-uploads-2026.s3.eu-north-1.amazonaws.com/meetups/portfolio/C2.png",
      text: `Secure media uploads handled via presigned AWS S3 URLs`,
    },
    {
      img: "https://citysync-uploads-2026.s3.eu-north-1.amazonaws.com/meetups/portfolio/C3.png",
      text: `• Async notifications processed through Redis workers`,
    },
  ];

  const app_link = 'https://citysync.up.railway.app/';
  const git_link = 'https://github.com/MinusOne-01/citysync_monorepo';



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