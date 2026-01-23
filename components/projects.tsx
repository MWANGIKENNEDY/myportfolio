"use client";

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [


  {
    title: "ECOMMERCE filters",
    description: "A premium e-commerce experience featuring advanced filtering, real-time cart persistence, and a modern multi-step checkout flow.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://ecommerce-filters-tau.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/ecommerce-filters",
    coverImage: "/ecom-filter.png"
  },

   {
    title: "ADMIN Dashboard",
    description: "A premium e-commerce experience featuring advanced filtering, real-time cart persistence, and a modern multi-step checkout flow.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://admin-dashboard-with-shadcn.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/admin-dashboard-with-shadcn",
    coverImage: "/admin-dash.png"
  },

  {
    title: "Hotel Booking UI with URL driven state",
    description: "A premium e-commerce experience featuring advanced filtering, real-time cart persistence, and a modern multi-step checkout flow.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://hotel-booking-534llpmnl-mwangikennedys-projects.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/hotel-booking-ui",
    coverImage: "/hotel-booking.png"
  },

  {
    title: "Jobs App - With URL driven state",
    description: "A premium e-commerce experience featuring advanced filtering, real-time cart persistence, and a modern multi-step checkout flow.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://jobs-jfob37zsb-mwangikennedys-projects.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/jobs-app",
    coverImage: "/job-board.png"
  },

     {
    title: "URL driven multi-step form",
    description: "A premium e-commerce experience featuring advanced filtering, real-time cart persistence, and a modern multi-step checkout flow.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://multi-step-form-isq4o20y2-mwangikennedys-projects.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/multi-step-form",
    coverImage: "/multi-step-form.png"
  },

    {
    title: "JIRA style drag and drop",
    description: "A premium e-commerce experience featuring advanced filtering, real-time cart persistence, and a modern multi-step checkout flow.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://drag-and-drop-jira-kz24my3l9-mwangikennedys-projects.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/drag-and-drop-jira",
    coverImage: "/drag-drop.png"
  },

  {
    title: "Product Catalog - Using URL parameters as state",
    description: "A premium e-commerce experience featuring advanced filtering, real-time cart persistence, and a modern multi-step checkout flow.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://holding-state-in-url-search-paramet.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/holding-state-in-url-search-parameters",
    coverImage: "/product-catalog.png"
  },

    {
    title: "Tour Landing Site",
    description: "A premium e-commerce experience featuring advanced filtering, real-time cart persistence, and a modern multi-step checkout flow.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://tour-landing-page-genesis.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/tour-landing-page.git",
    coverImage: "/tour-landing.png"
  },
  {
    title: "Ecommerce Advanced",
    description: "A premium e-commerce experience featuring advanced filtering, real-time cart persistence, and a modern multi-step checkout flow.",
    tags: ["Next.js", "Tailwind CSS", "Zustand", "React"],
    liveLink: "https://ecommerce-with-stripe-xnqp.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/ecommerce-with-stripe",
    coverImage: "/ecommerce-advanced.png"
  },
  {
    title: "School Management System",
    description: "A comprehensive platform for managing school operations, students, and staff.",
    tags: ["React", "Postgresql", "MySQL", "Docker", "Prisma", "Cloudinary"],
    liveLink: "https://school-management-system-pt036jue8-mwangikennedys-projects.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/school-management-system.git",
    coverImage: "/school-system.png"
  },
  {
    title: "Food Ordering App",
    description: "Modern food delivery interface with seamless ordering and category filtering.",
    tags: ["Next.js", "Zustand", "Tailwind CSS"],
    liveLink: "https://next-food-booking.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/nextFoodBooking",
    coverImage: "/foodApp.png"
  },
  {
    title: "Gym App",
    description: "Highly interactive gym membership and booking application with smooth transitions.",
    tags: ["Next.js", "Framer-Motion", "Tailwind CSS"],
    liveLink: "https://next-gymapp.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/nextGymapp",
    coverImage: "/gymApp.png"
  },
  {
    title: "Ecommerce App",
    description: "Fast and responsive e-commerce storefront with optimized product listings.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://ecommerce-1tij-em7d7rhwa-mwangikennedys-projects.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/ecommerce.git",
    coverImage: "/ecommerce.png"
  },
  {
    title: "Blog App",
    description: "Full-featured blogging platform with Clerk auth and MongoDB backend.",
    tags: ["Next.js", "Tailwind CSS", "Clerk", "ExpressJS", "MongoDB"],
    liveLink: "https://my-blog-1i1s.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/my-blog.git",
    coverImage: "/blog.png"
  },
  {
    title: "Admin Dashboard",
    description: "Data-heavy dashboard with charts and management tools built using Shadcn UI.",
    tags: ["Next.js", "Tailwind CSS", "Mantine Charts", "Shadcn UI"],
    liveLink: "https://admin-dashboard-jfp4kk2vq-mwangikennedys-projects.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/admin-dashboard.git",
    coverImage: "/admin-dashboard.png"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 container px-4 md:px-6">
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gradient">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl text-lg">
          A selection of my recent work, ranging from complex management systems to interactive web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <Button size="sm" variant="secondary" asChild className="rounded-full">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> Live
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild className="rounded-full">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects;