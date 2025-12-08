import About from "@/pages/About";
import Hero from "@/pages/Hero";
import Projects from "@/pages/Projects";

export default function Home({ searchParams }) {
  const host =
    typeof window === "undefined"
      ? searchParams?.host
      : window.location.host;

  const isPortfolio = host?.startsWith("portfolio.");

  return (
    <main className="h-full min-w-[350px] container mx-auto flex flex-col items-center justify-between">
      {isPortfolio ? (
        <>
          <Hero />
          <Projects />
        </>
      ) : (
        <p>Building in progress...</p>
      )}
    </main>
  );
}

