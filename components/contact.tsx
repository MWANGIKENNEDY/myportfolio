"use client";

import React from 'react'
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 container px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-3xl mx-auto overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl shadow-primary/5">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-primary/5 p-8 md:p-12 flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight">Let&apos;s Connect</h3>
                <p className="text-muted-foreground">
                  I&apos;m always open to new opportunities and interesting projects.
                </p>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">hello@kennedy.dev</p>
                </div>
              </div>
            </div>

            <CardContent className="md:col-span-3 p-8 md:p-12">
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="John Doe" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-background/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="How can I help you?" rows={4} className="bg-background/50 resize-none" />
                </div>
                <Button type="submit" className="w-full rounded-full h-11">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}

export default Contact;