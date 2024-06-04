import About from "@/pages/About";
import Hero from "@/pages/Hero";
import Projects from "@/pages/Projects";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col items-center justify-between">
      <Hero />
      <Projects />
      <About />
    </main>
  ); 
}
