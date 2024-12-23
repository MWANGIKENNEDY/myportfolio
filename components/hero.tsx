import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
  <section className="py-20 container text-center">
<h1 className="text-4xl md:text-6xl font-bold mb-6">{"Hi, I'm Kennedy Mwangi"}</h1>
<p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">

 { "I'm a full-stack developer passionate about creating beautiful and functional web applications."}
</p>
<Button size="lg">
  View My Work
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>
</section>
  )
}

export default Hero