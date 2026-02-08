import React from 'react'
import ProjectCard from './ProjectCard';

export default function Project_2(){

  const title = 'CitySync';
  const tech = ["nodejs", "redis", "aws", "map"];

  const desc = 'Scalable meetup platform built around Event driven Asynchronous processing, Geospatial feed ranking and Proprietary Auth service';

  const features = [
    {
        img: "/p2/C1.png",
        text: `• Redis-backed background workers are used to update and built Geospatial User feed`,
    },
    {
      img: "/p2/C2.png",
      text: `User uploaded media like Meetup flyers, Profile Avatars are handled client side using Presigned AWS S3 bucket URLs`,
    },
    {
      img: "/p2/C3.png",
      text: `• User notifications are handled Asynchronously via Redis-backed background workers`,
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