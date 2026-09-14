import { ActionBar } from "@/components/ActionBar";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Overview } from "@/components/Overview";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Specs } from "@/components/Specs";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Overview />
        <Experience />
        <Skills />
        <Projects />
        <Specs />
        <Contact />
      </main>
      <Footer />
      <ActionBar />
    </>
  );
}
