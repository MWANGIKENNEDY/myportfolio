
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import {  ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const projects = [
    {
      title: "Todo App",
      description: "A brief description of Project 1",
      tags: ["React", "Node.js", "MongoDB"],
      liveLink: "https://project1.com",
      githubLink: "https://github.com/johndoe/project1"
    },
    {
      title: "Car Select App",
      description: "A brief description of Project 2",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      liveLink: "https://project2.com",
      githubLink: "https://github.com/johndoe/project2"
    },
    {
      title: "Gym App",
      description: "A brief description of Project 3",
      tags: ["Next.js", "GraphQL", "Tailwind CSS"],
      liveLink: "https://project3.com",
      githubLink: "https://github.com/johndoe/project3"
    },
    {
      title: "Food Ordering App",
      description: "A brief description of Project 3",
      tags: ["Next.js", "GraphQL", "Tailwind CSS"],
      liveLink: "https://project3.com",
      githubLink: "https://github.com/johndoe/project3"
    }
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
              </Card>
            ))}
          </div>
        </section>


  )
}

export default Projects;