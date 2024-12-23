import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 container">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-2">Get in Touch</CardTitle>
          <CardDescription>
            Have a question or want to work together? Feel free to reach out!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Input placeholder="Your Name" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" />
            </div>
            <div>
              <Textarea placeholder="Your Message" rows={4} />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </section> 
  )
}

export default Contact;