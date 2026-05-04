import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[820px] px-6 md:px-10">
      <Hero />
      <About />
      <Experience />
      <Work />
      <Skills />
      <Education />
      <Footer />
    </main>
  );
}
