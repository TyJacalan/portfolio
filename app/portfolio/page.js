import Hero from "@/pages/portfolio/Hero";
import Projects from "@/pages/portfolio/Projects";

export default function Home() {
  return (
    <main className="h-full min-w-[350px] container mx-auto flex flex-col items-center justify-between font-roboto">
    	<Hero />
    	<Projects />
    </main>
  );
}

