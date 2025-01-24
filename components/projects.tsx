
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import {  ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import Image from 'next/image';

const projects = [
    {
      title: "School Management System",
      description: "A brief description of Project 1",
      tags: ["React", "Postgresql", "MySQL", "Docker", "Prisma", "Cloudinare"],
      liveLink: "https://school-management-system-pt036jue8-mwangikennedys-projects.vercel.app/",
      githubLink: "https://github.com/MWANGIKENNEDY/school-management-system.git",
      coverImage:"/school-system.png"
    },
    {
      title: "Food Ordering App",
      description: "This is a food ordering app design using Tailwind CSS and Zustand state management.",
      tags: ["Next.js", "Zustand", "Tailwind CSS"],
      liveLink: "https://next-food-booking.vercel.app/",
      githubLink: "https://github.com/MWANGIKENNEDY/nextFoodBooking",
      coverImage:"/foodApp.png"
    },

    {
      title: "Gym App",
      description: "This is a gym booking app design using Tailwind CSS and Framer Motion for animations.",
      tags: ["Next.js", "Framer-Motion", "Tailwind CSS"],
      liveLink: "https://next-gymapp.vercel.app/",
      githubLink: "https://github.com/MWANGIKENNEDY/nextGymapp",
      coverImage:"/gymApp.png"
    },
    // {
    //   title: "Car Select App",
    //   description: "A brief description of Project 2",
    //   tags: ["Vue.js", "Express", "PostgreSQL"],
    //   liveLink: "https://project2.com",
    //   githubLink: "https://github.com/johndoe/project2",
    //   coverImage:"/school-system.png"
    // },
   
    
  ]
const Projects = () => {
  return (

    <section id="projects" className="py-20 container">
        <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </CardFooter>

                <div className={`h-56 relative rounded-lg overflow-hidden`}>

|<Image src={project.coverImage} alt='' fill className=' object-cover '/>
                </div>
              </Card>
            ))}
          </div>
        </section>


  )
}

export default Projects;