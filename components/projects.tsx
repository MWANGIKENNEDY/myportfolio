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
    title: "Multi-Step Checkout Experience",
    description:
      "A polished multi-step checkout flow designed for conversion, featuring smooth step transitions, clear progress tracking, and a production-ready user experience.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://multi-step-checkout-form-one.vercel.app/checkout?step=1",
    githubLink: "https://github.com/MWANGIKENNEDY/multi-step-checkout-form",
    coverImage: "/multi-step.png"
  },

  {
    title: "Admin Dashboard – Tab-Driven Layout",
    description:
      "A clean admin dashboard showcasing tab-based navigation for managing users and data, focused on clarity, scalability, and UX consistency.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://admin-dashboard-tabs.vercel.app/admin?tab=users",
    githubLink: "https://github.com/MWANGIKENNEDY/admin-dashboard-tabs",
    coverImage: "/admin-dash-tabs.png"
  },

  {
    title: "E-Commerce Filters UI",
    description:
      "Advanced product filtering UI demonstrating search, category selection, and responsive filtering patterns commonly used in modern e-commerce platforms.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://ecommerce-filters-tau.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/ecommerce-filters",
    coverImage: "/ecom-filter.png"
  },

  {
    title: "Admin Dashboard – Shadcn UI",
    description:
      "A modern admin dashboard built with Shadcn UI components, emphasizing clean layouts, reusable components, and scalable dashboard architecture.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://admin-dashboard-with-shadcn.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/admin-dashboard-with-shadcn",
    coverImage: "/admin-dash.png"
  },

  {
    title: "Hotel Booking UI (URL-Driven State)",
    description:
      "A booking interface where search state, dates, and filters are fully synchronized with URL parameters for shareable and persistent user sessions.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://hotel-booking-534llpmnl-mwangikennedys-projects.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/hotel-booking-ui",
    coverImage: "/hotel-booking.png"
  },

  {
    title: "Jobs Board Application",
    description:
      "A job listing platform using URL-driven state to handle filters, search queries, and navigation without relying on local component state.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://jobs-jfob37zsb-mwangikennedys-projects.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/jobs-app",
    coverImage: "/job-board.png"
  },

  {
    title: "URL-Driven Multi-Step Form",
    description:
      "A step-based form where progress is fully controlled through URL parameters, enabling deep linking, refresh persistence, and predictable navigation.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://multi-step-form-isq4o20y2-mwangikennedys-projects.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/multi-step-form",
    coverImage: "/multi-step-form.png"
  },

  {
    title: "Jira-Style Drag & Drop Board",
    description:
      "An interactive drag-and-drop task board inspired by Jira, demonstrating sortable columns, smooth interactions, and real-world workflow patterns.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://drag-and-drop-jira-kz24my3l9-mwangikennedys-projects.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/drag-and-drop-jira",
    coverImage: "/drag-drop.png"
  },

  {
    title: "Product Catalog (URL as State)",
    description:
      "A scalable product catalog where filtering, sorting, and pagination are controlled entirely via URL search parameters.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://holding-state-in-url-search-paramet.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/holding-state-in-url-search-parameters",
    coverImage: "/product-catalog.png"
  },

  {
    title: "Tour Landing Page",
    description:
      "A visually engaging landing page designed to promote tours and travel experiences with a strong focus on layout, imagery, and call-to-action.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://tour-landing-page-genesis.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/tour-landing-page.git",
    coverImage: "/tour-landing.png"
  },

  {
    title: "Advanced E-Commerce Platform",
    description:
      "A feature-rich e-commerce application with Stripe payments, global state management, and a production-grade shopping experience.",
    tags: ["Next.js", "Tailwind CSS", "Zustand", "React"],
    liveLink: "https://ecommerce-with-stripe-xnqp.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/ecommerce-with-stripe",
    coverImage: "/ecommerce-advanced.png"
  },

  {
    title: "School Management System",
    description:
      "A comprehensive school management platform handling students, staff, and operations with a full-stack architecture and containerized setup.",
    tags: ["React", "Postgresql", "MySQL", "Docker", "Prisma", "Cloudinary"],
    liveLink: "https://school-management-system-pt036jue8-mwangikennedys-projects.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/school-management-system.git",
    coverImage: "/school-system.png"
  },

  {
    title: "Food Ordering Application",
    description:
      "A modern food ordering interface with category filtering, intuitive navigation, and a clean, mobile-friendly design.",
    tags: ["Next.js", "Zustand", "Tailwind CSS"],
    liveLink: "https://next-food-booking.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/nextFoodBooking",
    coverImage: "/foodApp.png"
  },

  {
    title: "Gym Membership App",
    description:
      "An interactive fitness application focused on gym memberships and bookings, enhanced with smooth animations and transitions.",
    tags: ["Next.js", "Framer-Motion", "Tailwind CSS"],
    liveLink: "https://next-gymapp.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/nextGymapp",
    coverImage: "/gymApp.png"
  },

  {
    title: "E-Commerce Storefront",
    description:
      "A fast, responsive e-commerce storefront optimized for browsing products and delivering a smooth shopping experience.",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://ecommerce-1tij-em7d7rhwa-mwangikennedys-projects.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/ecommerce.git",
    coverImage: "/ecommerce.png"
  },

  {
    title: "Blog Platform",
    description:
      "A full-stack blogging platform featuring authentication, content management, and a scalable backend powered by MongoDB.",
    tags: ["Next.js", "Tailwind CSS", "Clerk", "ExpressJS", "MongoDB"],
    liveLink: "https://my-blog-1i1s.vercel.app/",
    githubLink: "https://github.com/MWANGIKENNEDY/my-blog.git",
    coverImage: "/blog.png"
  },

  {
    title: "Analytics Admin Dashboard",
    description:
      "A data-focused admin dashboard featuring charts, metrics, and management tools built with modern UI libraries.",
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