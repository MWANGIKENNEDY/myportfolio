import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
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
