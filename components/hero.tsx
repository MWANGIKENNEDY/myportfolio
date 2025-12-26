"use client";

import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full max-w-6xl opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-primary rounded-full blur-[120px]" />
      </div>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I&apos;m <span className="text-gradient">Kennedy Mwangi</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I&apos;m a full-stack developer passionate about creating
            <span className="text-foreground font-medium"> beautiful </span>
            and
            <span className="text-foreground font-medium"> functional </span>
            web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full px-8">
            View My Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8">
            Download CV
            <Download className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero