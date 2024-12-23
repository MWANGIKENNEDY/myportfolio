import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col container">
<Header />
<main className="flex-grow">
  <Hero />
  <Projects />
  <Contact />
</main>
<Footer />
</div>
  );
}
